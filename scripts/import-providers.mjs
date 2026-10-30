#!/usr/bin/env node
// Deterministic Atlas → ERF provider import.
//
// Reads the statewide approved-provider CSV plus the publication-readiness
// report from the Atlas export, and writes:
//   - content/providers.ts         (eligible providers only — this is what ships)
//   - <export dir>/import_eligibility_report.{csv,md}  (every one of the 141
//     records, included or excluded, with the reason — not shipped, stays
//     next to the source data for review)
//
// Re-running this script with a newer Atlas export regenerates both files
// from scratch; nothing here is hand-edited.
//
// Usage: node scripts/import-providers.mjs [path-to-export-dir]

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

const exportDir =
  process.argv[2] ??
  join(repoRoot, "data/atlas-import/erf-co-regional-2026-10-27");

const statewidePath = join(exportDir, "statewide/erf_co_approved_statewide.csv");
const issuesPath = join(exportDir, "reports/publication_readiness_issues.csv");

// ---------------------------------------------------------------------------
// Minimal RFC-4180-ish CSV parser (quoted fields, embedded commas/quotes).
// No dependency added — the inputs are well-formed standard CSV.
// ---------------------------------------------------------------------------
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  // Normalize line endings so \r\n and \n both work.
  const s = text.replace(/\r\n/g, "\n");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

function parseCsvObjects(text) {
  const rows = parseCsv(text);
  const header = rows[0];
  return rows.slice(1).map((r) => {
    const obj = {};
    header.forEach((h, i) => {
      obj[h] = r[i] ?? "";
    });
    return obj;
  });
}

function splitList(value) {
  return value
    .split(";")
    .map((v) => v.trim())
    .filter(Boolean);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------------------------------------------------------------------
// Pull the live ERF location slugs + category slugs straight out of the
// existing content files, as plain text, rather than importing/compiling
// them — this script has no build step of its own.
// ---------------------------------------------------------------------------
function loadLocationSlugsByCity() {
  const src = readFileSync(join(repoRoot, "content/locations.ts"), "utf8");
  const byCityLower = new Map();
  const knownSlugs = new Set();
  const cityBlocks = src.split(/city:\s*"/).slice(1);
  for (const block of cityBlocks) {
    const cityMatch = block.match(/^([^"]+)"/);
    const slugMatch = block.match(/slug:\s*"([a-z0-9-]+)"/);
    if (cityMatch && slugMatch) {
      const city = cityMatch[1];
      const slug = slugMatch[1];
      byCityLower.set(city.toLowerCase(), slug);
      knownSlugs.add(slug);
    }
  }
  return { byCityLower, knownSlugs };
}

function loadCategorySlugs() {
  const src = readFileSync(join(repoRoot, "content/categories.ts"), "utf8");
  const slugs = new Set();
  for (const m of src.matchAll(/slug:\s*"([a-z0-9-]+)"/g)) slugs.add(m[1]);
  return slugs;
}

const { byCityLower: locationSlugByCity, knownSlugs: knownLocationSlugs } =
  loadLocationSlugsByCity();
const knownCategorySlugs = loadCategorySlugs();

const regionsSrc = readFileSync(join(repoRoot, "content/regions.ts"), "utf8");
const regionByName = new Map();
for (const m of regionsSrc.matchAll(/slug:\s*"([a-z0-9-]+)",\s*name:\s*"([^"]+)"/g)) {
  regionByName.set(m[2], m[1]);
}

// ---------------------------------------------------------------------------
// Specialty slug -> official label, derived positionally from the export's
// own matrix file header (same column order as the statewide CSV's
// specializes_in_*/serves_* columns) — not hand-typed.
// ---------------------------------------------------------------------------
function loadSpecialtyLabels() {
  const matrixPath = join(exportDir, "matrices/specialty_by_region_specializes_in.csv");
  const header = parseCsv(readFileSync(matrixPath, "utf8"))[0];
  // header: region, providers, <12 specialty labels in column order>
  return header.slice(2);
}
const specialtyLabelsInOrder = loadSpecialtyLabels();

// ---------------------------------------------------------------------------
// Load + classify publication-readiness flags.
// ---------------------------------------------------------------------------
const BLOCKER_REASON_PREFIXES = [
  "possible_duplicate",
  "classification_confidence_Needs_Review",
  "classification_review_flag",
  "blank_primary_region",
  "primary_region_flag",
];

function isBlockerReason(reason) {
  return BLOCKER_REASON_PREFIXES.some((p) => reason.startsWith(p));
}

const issuesRows = parseCsvObjects(readFileSync(issuesPath, "utf8"));
const flagsByBusinessId = new Map();
for (const row of issuesRows) {
  const reasons = splitList(row.reasons);
  flagsByBusinessId.set(row.business_id, reasons);
}

function classifyEligibility(businessId) {
  const reasons = flagsByBusinessId.get(businessId);
  if (!reasons) return { eligible: true, reasons: [] };
  const blockers = reasons.filter(isBlockerReason);
  if (blockers.length > 0) return { eligible: false, reasons: blockers };
  return { eligible: true, reasons }; // optional-gap-only flags
}

// ---------------------------------------------------------------------------
// Parse the statewide CSV and build one Provider record per eligible row.
// ---------------------------------------------------------------------------
const statewideRows = parseCsvObjects(readFileSync(statewidePath, "utf8"));

const SPECIALIZES_COLUMN_PREFIX = "specializes_in_";
const SERVES_COLUMN_PREFIX = "serves_";

function matchServiceAreas(row) {
  const slugs = new Set();

  // served_markets: already-slugified "co/<city-slug>" entries — the most
  // direct signal. Only kept if that city already has a live ERF page.
  for (const market of splitList(row.served_markets)) {
    const parts = market.split("/");
    const citySlugPart = parts[parts.length - 1];
    const candidate = `${citySlugPart}-co`;
    if (knownLocationSlugs.has(candidate)) slugs.add(candidate);
  }

  // city + service_areas: free-text "City, ST" / "City" entries, matched by
  // name against the existing location pages.
  const cityCandidates = [row.city, ...splitList(row.service_areas).map((v) => v.split(",")[0].trim())];
  for (const c of cityCandidates) {
    if (!c) continue;
    const slug = locationSlugByCity.get(c.toLowerCase());
    if (slug) slugs.add(slug);
  }

  return [...slugs].sort();
}

function usedSlugs() {
  const used = new Set();
  return (base) => {
    let slug = base;
    let i = 2;
    while (used.has(slug)) {
      slug = `${base}-${i}`;
      i++;
    }
    used.add(slug);
    return slug;
  };
}
const reserveSlug = usedSlugs();

const eligibilityLog = [];
const providers = [];

for (const row of statewideRows) {
  const { eligible, reasons } = classifyEligibility(row.business_id);
  eligibilityLog.push({
    business_id: row.business_id,
    business_name: row.business_name,
    primary_region: row.primary_region,
    included: eligible,
    reasons: reasons.join(";"),
  });
  if (!eligible) continue;

  const categories = splitList(row.erf_categories).filter((c) => knownCategorySlugs.has(c));
  const primaryCategory = knownCategorySlugs.has(row.primary_category) ? row.primary_category : undefined;

  const specialties = [];
  specialtyLabelsInOrder.forEach((label) => {
    const slug = slugify(label);
    if (row[`${SPECIALIZES_COLUMN_PREFIX}${slug}`] === "Y") {
      specialties.push({ slug, label, tier: "specializes_in" });
    } else if (row[`${SERVES_COLUMN_PREFIX}${slug}`] === "Y") {
      specialties.push({ slug, label, tier: "serves" });
    }
  });

  const baseSlug = slugify(row.business_name) || slugify(row.business_id);
  const slug = reserveSlug(baseSlug);

  const primaryRegion = regionByName.get(row.primary_region) || undefined;
  const serviceRegions = splitList(row.service_regions)
    .map((name) => regionByName.get(name))
    .filter(Boolean);

  providers.push({
    businessId: row.business_id,
    parentId: row.parent_id || undefined,
    name: row.business_name,
    slug,
    website: row.website || undefined,
    phone: row.phone || undefined,
    address: row.street || undefined,
    city: row.city || undefined,
    state: row.state ? "Colorado" : undefined,
    stateCode: row.state || undefined,
    zip: row.zip || undefined,
    categories,
    primaryCategory,
    serviceAreas: matchServiceAreas(row),
    primaryRegion,
    serviceRegions,
    documentedMarkets: splitList(row.service_areas),
    productTags: splitList(row.product_tags),
    specialties,
    radarApproval: {
      outcome: row.radar_outcome,
      verificationStatus: row.verification_status || undefined,
      confidence: row.radar_confidence || undefined,
      classificationConfidence: row.classification_confidence || undefined,
      checkedOn: row.radar_checked_on || undefined,
      batch: row.radar_batch || undefined,
    },
    verified: row.radar_outcome === "Approved",
  });
}

providers.sort((a, b) => a.businessId.localeCompare(b.businessId));

// ---------------------------------------------------------------------------
// Write content/providers.ts
// ---------------------------------------------------------------------------
function tsString(value) {
  return JSON.stringify(value);
}

function tsArray(values) {
  if (!values || values.length === 0) return "[]";
  return `[${values.map(tsString).join(", ")}]`;
}

function renderProvider(p) {
  const lines = [];
  lines.push("  {");
  lines.push(`    businessId: ${tsString(p.businessId)},`);
  if (p.parentId) lines.push(`    parentId: ${tsString(p.parentId)},`);
  lines.push(`    name: ${tsString(p.name)},`);
  lines.push(`    slug: ${tsString(p.slug)},`);
  if (p.website) lines.push(`    website: ${tsString(p.website)},`);
  if (p.phone) lines.push(`    phone: ${tsString(p.phone)},`);
  if (p.address) lines.push(`    address: ${tsString(p.address)},`);
  if (p.city) lines.push(`    city: ${tsString(p.city)},`);
  if (p.state) lines.push(`    state: ${tsString(p.state)},`);
  if (p.stateCode) lines.push(`    stateCode: ${tsString(p.stateCode)},`);
  if (p.zip) lines.push(`    zip: ${tsString(p.zip)},`);
  lines.push(`    categories: ${tsArray(p.categories)},`);
  if (p.primaryCategory) lines.push(`    primaryCategory: ${tsString(p.primaryCategory)},`);
  lines.push(`    serviceAreas: ${tsArray(p.serviceAreas)},`);
  if (p.primaryRegion) lines.push(`    primaryRegion: ${tsString(p.primaryRegion)},`);
  if (p.serviceRegions.length) lines.push(`    serviceRegions: ${tsArray(p.serviceRegions)},`);
  if (p.documentedMarkets.length) lines.push(`    documentedMarkets: ${tsArray(p.documentedMarkets)},`);
  if (p.productTags.length) lines.push(`    productTags: ${tsArray(p.productTags)},`);
  if (p.specialties.length) {
    lines.push("    specialties: [");
    for (const s of p.specialties) {
      lines.push(
        `      { slug: ${tsString(s.slug)}, label: ${tsString(s.label)}, tier: ${tsString(s.tier)} },`,
      );
    }
    lines.push("    ],");
  }
  lines.push("    radarApproval: {");
  lines.push(`      outcome: ${tsString(p.radarApproval.outcome)},`);
  if (p.radarApproval.verificationStatus)
    lines.push(`      verificationStatus: ${tsString(p.radarApproval.verificationStatus)},`);
  if (p.radarApproval.confidence) lines.push(`      confidence: ${tsString(p.radarApproval.confidence)},`);
  if (p.radarApproval.classificationConfidence)
    lines.push(`      classificationConfidence: ${tsString(p.radarApproval.classificationConfidence)},`);
  if (p.radarApproval.checkedOn) lines.push(`      checkedOn: ${tsString(p.radarApproval.checkedOn)},`);
  if (p.radarApproval.batch) lines.push(`      batch: ${tsString(p.radarApproval.batch)},`);
  lines.push("    },");
  lines.push(`    verified: ${p.verified},`);
  lines.push("  },");
  return lines.join("\n");
}

const header = `// GENERATED FILE — do not hand-edit.
//
// Produced by \`node scripts/import-providers.mjs\` from the Atlas/Radar
// export at data/atlas-import/erf-co-regional-2026-10-27/. Re-run that
// script against a newer export to regenerate this file; it will be
// overwritten. See the sibling import_eligibility_report for which of the
// 141 Approved records were included here and why any were excluded.
//
// Generated: ${new Date().toISOString()}

import type { Provider } from "@/types";

export const providers: Provider[] = [
`;

const body = providers.map(renderProvider).join("\n");
const footer = "\n];\n";

writeFileSync(join(repoRoot, "content/providers.ts"), header + body + footer, "utf8");

// ---------------------------------------------------------------------------
// Write the eligibility report (CSV + Markdown) next to the source export.
// ---------------------------------------------------------------------------
const csvLines = ["business_id,business_name,primary_region,included,reasons"];
for (const row of eligibilityLog) {
  const fields = [row.business_id, row.business_name, row.primary_region, row.included ? "yes" : "no", row.reasons];
  csvLines.push(
    fields
      .map((f) => (f.includes(",") || f.includes('"') ? `"${f.replace(/"/g, '""')}"` : f))
      .join(","),
  );
}
writeFileSync(join(exportDir, "import_eligibility_report.csv"), csvLines.join("\n") + "\n", "utf8");

const includedCount = eligibilityLog.filter((r) => r.included).length;
const excludedCount = eligibilityLog.length - includedCount;
const mdLines = [
  "# Provider import eligibility report",
  "",
  `Generated ${new Date().toISOString()} from \`${statewidePath.replace(repoRoot + "/", "")}\`.`,
  "",
  `${includedCount} of ${eligibilityLog.length} records included. ${excludedCount} excluded for a material publication-readiness concern.`,
  "",
  "## Excluded",
  "",
  "| business_id | name | primary_region | reasons |",
  "|---|---|---|---|",
];
for (const row of eligibilityLog.filter((r) => !r.included)) {
  mdLines.push(`| ${row.business_id} | ${row.business_name} | ${row.primary_region || "(blank)"} | ${row.reasons} |`);
}
mdLines.push("", "## Included (with optional-only gaps noted)", "", "| business_id | name | primary_region | notes |", "|---|---|---|---|");
for (const row of eligibilityLog.filter((r) => r.included && r.reasons)) {
  mdLines.push(`| ${row.business_id} | ${row.business_name} | ${row.primary_region || "(blank)"} | ${row.reasons} |`);
}
writeFileSync(join(exportDir, "import_eligibility_report.md"), mdLines.join("\n") + "\n", "utf8");

console.log(`Parsed ${statewideRows.length} statewide rows.`);
console.log(`Included: ${includedCount}. Excluded: ${excludedCount}.`);
console.log(`Wrote content/providers.ts (${providers.length} providers).`);
console.log(`Wrote ${join(exportDir, "import_eligibility_report.csv")}`);
console.log(`Wrote ${join(exportDir, "import_eligibility_report.md")}`);
