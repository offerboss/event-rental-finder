import { regions } from "@/content/regions";
import type { Provider } from "@/types";

const regionNameBySlug = new Map(regions.map((r) => [r.slug, r.name]));

// A simple, explainable completeness signal used only to decide whether a
// provider's own detail page is worth indexing. It is NOT shown to visitors
// and never affects whether a provider appears in the directory itself —
// every eligible provider still gets a page; this only controls search
// indexing for the thinnest ~10% of profiles so they don't compete as
// near-duplicate pages. Five independent signals, equally weighted:
// has any category, has 3+ product tags, matches an existing ERF city page,
// has at least one specialty signal (either tier), has a phone number.
export function providerCompletenessScore(provider: Provider): number {
  let score = 0;
  if (provider.categories.length > 0) score++;
  if ((provider.productTags?.length ?? 0) >= 3) score++;
  if (provider.serviceAreas.length > 0) score++;
  if ((provider.specialties?.length ?? 0) > 0) score++;
  if (provider.phone) score++;
  return score;
}

/** Below this, a profile's own page is still built, but not indexed. */
export const THIN_PROFILE_THRESHOLD = 2;

export function isProviderProfileThin(provider: Provider): boolean {
  return providerCompletenessScore(provider) <= THIN_PROFILE_THRESHOLD;
}

export function specialtiesByTier(provider: Provider) {
  const all = provider.specialties ?? [];
  return {
    specializesIn: all.filter((s) => s.tier === "specializes_in"),
    serves: all.filter((s) => s.tier === "serves"),
  };
}

/** "City, ST" when known, else the provider's primary region name, else undefined. */
export function providerPlaceLabel(provider: Provider): string | undefined {
  if (provider.city && provider.stateCode) return `${provider.city}, ${provider.stateCode}`;
  return (provider.primaryRegion && regionNameBySlug.get(provider.primaryRegion)) || undefined;
}

export function titleizeSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Providers whose primary (home-base) region is `regionSlug` — the sole
 * basis for regional directory grouping. Each provider has exactly one
 * primaryRegion, so a provider appears under exactly one region here. Wider
 * documented coverage (serviceRegions/serviceAreas) is still shown on the
 * provider's own row and detail page, and still usable for filtering — it
 * intentionally does not affect this grouping, so it can't cause a provider
 * to appear under more than one region.
 */
export function providersForRegion(providers: Provider[], regionSlug: string): Provider[] {
  return providers.filter((p) => p.primaryRegion === regionSlug);
}

/** Most frequent `max` labels from `values`, plus a count of the remainder. */
export function topLabels(values: string[], max: number): { shown: string[]; more: number } {
  const counts = new Map<string, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([v]) => v);
  return { shown: sorted.slice(0, max), more: Math.max(0, sorted.length - max) };
}
