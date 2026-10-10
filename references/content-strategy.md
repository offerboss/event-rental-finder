# ERF Content Strategy

Last updated: 2026-10-08 (Denver Infill Run shipped: 5 cities + 2 resources)

Event Rental Finder (https://www.eventrentalfinder.com) is a Colorado event rental directory. The site has location
pages, category pages and planning resources. Providers are not listed yet, so content has to help planners on its own
merits and must not imply provider coverage, prices or rankings the site doesn't have.

---

## Weekly Target

| Item | Target per week |
|---|---|
| New city pages (rich format) | 5 |
| New planning resources | 2 |

Pages ship in small batches. Each batch is reviewed, built, pushed to `main` (Vercel auto-deploys) and verified on
production before the next batch starts. Hero images need Adam's approval before they ship (see `hero-image-style.md`).

### Week of 2026-09-28 Progress

| Item | Target | Shipped | Pages |
|---|---|---|---|
| New city pages (rich) | 5 | 5 | Monument, Manitou Springs, Woodland Park, Fountain, Pueblo (plus the Colorado Springs hub upgrade) |
| New planning resources | 2 | 2 | Colorado outdoor event tent planning; Colorado wedding rental checklist |

### Week of 2026-10-05 Progress

| Item | Target | Shipped | Pages |
|---|---|---|---|
| New city pages (rich) | 5 | 5 | Littleton, Centennial, Westminster, Thornton, Parker |
| New planning resources | 2 | 2 | How many tables and chairs do I need; Event restroom rental guide |

---

## Linking Model: City x Category

There are no category x city pages yet. The cross-linking runs through three mechanisms:

1. **Use-case cards on each city page.** Each rich city page has six `useCases` items, and each can carry a
   `categorySlug` that links the card to `/categories/<slug>`. Choose the six to emphasize the categories that fit
   that city's real event mix. Descriptions can also include inline markdown links to other categories.
2. **The automatic category grid on each city page** ("Browse Event Rentals in <City>") links all 10 categories.
3. **Category pages automatically list every location**, so a new city appears on all 10 category pages.

Other links:

- `nearbyCities` drives the "Event Rentals Near <City>" block. Only slugs that exist render, but keep the lists clean
  anyway, and add reciprocal links on the neighboring pages when a city goes live.
- `considerations.closing` (and use-case descriptions) can link resources. Only link resources that exist.
- Resource body blocks (paragraph, list, callout) render `[label](/path)` links; `intro` paragraphs, section intros and
  table rows don't. Resources cross-link through `relatedResourceSlugs` (rendered as guide cards) and in-body links.
- The locations hub (`/locations`) lists every location automatically. The sitemap (`app/sitemap.ts`) is data-driven
  and picks up new locations, categories and resources without edits.

---

## Current Cluster: Colorado Springs / Pikes Peak / Southern Front Range

| Batch | Pages | Status |
|---|---|---|
| Batch 1 | Monument (`monument-co`), Manitou Springs (`manitou-springs-co`), Woodland Park (`woodland-park-co`) | Live 2026-10-01 |
| Batch 2 | Fountain (`fountain-co`), Pueblo (`pueblo-co`), plus the Colorado Springs hub upgrade | Live 2026-10-01 |
| Resources | `/resources/colorado-outdoor-event-tent-planning`, `/resources/colorado-wedding-rental-checklist` | Live 2026-10-02. Linked from both tent guides, each other, and the Colorado Springs, Monument, Manitou Springs, Woodland Park, Pueblo (both) and Fountain (tent guide) pages. Hero images shipped 2026-10-02 (see `hero-image-style.md`) |

Cluster local angles (keep future pages distinct from these):

- **Monument:** Tri-Lakes and the Palmer Divide. The Town requires a temporary use permit for tents, separate from its
  special event permit. Not the "between Denver and the Springs" angle, which belongs to Castle Rock.
- **Manitou Springs:** historic destination-wedding town. The City's special event site plan must show tents and
  fencing, with deadlines 60, 30 and 14 days out. Garden of the Gods limits (no tables, tents or receptions outside
  two picnic areas) push receptions to rented setups.
- **Woodland Park:** 8,465 ft. The City's 45-day Temporary Use Permit requires a site plan showing toilets and
  handwashing. Highway permits for US 24 and SH 67. Forest Service group use permit for 75+ people.

- **Fountain:** park and community events next to Fort Carson. The City provides no tents, port-o-lets, tables or
  chairs. Park rules: no staking (sandbags or cinder blocks), no potable water, amplified sound needs approval, no
  vehicles on turf. Thunder in the Valley car show.
- **Pueblo:** lower and hotter (NOAA July normal high 93.4°F vs 86.5°F in Colorado Springs). Municipal-code park
  permits (shelters, 25+ people, bounce houses, tents). George L. Williams Hall has no tables or chairs. Riverwalk
  venues, the Convention Center (in-house catering/AV), the State Fair, Chile & Frijoles, revocable street-closure permits.
- **Colorado Springs (hub):** parks over 50 guests need a pavilion or Special Event Permit; Noise Hardship Permit for
  amplified sound; 2,400 sq ft Fire Marshal tent permit; brief Garden of the Gods limits; July storms. The hub
  paragraph links in-body to Monument, Manitou Springs, Woodland Park, Fountain, Pueblo and Castle Rock, each with a
  one-line reason.

Nearby links (all reciprocal):

| Page | nearbyCities |
|---|---|
| Colorado Springs | monument, manitou-springs, woodland-park, fountain, pueblo, castle-rock |
| Monument | colorado-springs, castle-rock, manitou-springs, fountain |
| Manitou Springs | colorado-springs, woodland-park, monument |
| Woodland Park | manitou-springs, colorado-springs |
| Fountain | colorado-springs, pueblo, monument |
| Pueblo | fountain, colorado-springs |
| Castle Rock | denver, colorado-springs, monument |

---

## Current Cluster: Denver Infill (South and North Metro)

Started from the "Denver infill" row of Next Candidate Clusters. Content was drafted on 2026-10-07 by an interrupted run,
then re-verified against official sources, corrected, integrated and shipped on 2026-10-08.

| Batch | Pages | Status |
|---|---|---|
| Denver Infill Run | Littleton (`littleton-co`), Centennial (`centennial-co`), Westminster (`westminster-co`), Thornton (`thornton-co`), Parker (`parker-co`) | Live 2026-10-08 |
| Resources | `/resources/how-many-tables-and-chairs-do-i-need`, `/resources/event-restroom-rental-guide` | Live 2026-10-08 (heroes shipped). Linked from each other, the size guide, the wedding checklist, all five new cities, and the Fountain, Woodland Park (restroom guide) and Pueblo (tables guide) pages. "Tables and Seating" and "Event Restrooms" removed from `plannedTopics` |

Cluster local angles (keep future pages distinct from these):

- **Littleton:** a Littleton mailing address isn't always city limits (Address Wizard). City Event Permit triggers (public,
  more than 100 attendees, park, alcohol, sound, tents, stages, generators, closures), 30/45-day eTRAKiT deadlines, layout
  plan with port-a-lets. Parks run by South Suburban (permit for tents, vendor COI for inflatables, staking locates, no
  alcohol except nonprofit fundraisers). No permits for South Platte Park; Ketring Park City-only. Residential Amplified
  Sound Permit for private parties with a DJ or band. South Metro Fire Rescue (tents over 400 sq ft; no event medical).
- **Centennial:** contract city (incorporated 2001); parks split among the City and four districts. Centennial Center Park
  rules: tents over 25 sq ft, inflatables, stages and sound beyond 25 ft need a City permit; no staking; Bluff Pavilion
  (100 people, nine picnic tables). Temporary Use Permit for private property; block-party closures three weeks ahead with
  MUTCD barricades.
- **Westminster:** strict pavilion rules (no inflatables, no amplified music, tents 10x10 max, no outside grills, 10 a.m.
  to 8 p.m.). Special Event – Temporary Use Permit 45 days ahead for public events of 25+ on City property; site plan
  shows every tent and restroom; weather plan. Fire permit over 400/700 sq ft; generators 20 ft from tents. Standley Lake
  Special Use Permit.
- **Thornton:** City Code 46-40 pop-up exception (10x10, 8-inch stakes, natural turf); inflatables need a permit (46-42);
  amplification needs the director's approval. Carpenter Park pavilions (both pavilions plus a noise permit for a DJ),
  Harley Brown Amphitheater. Temporary Use Permit (7 to 10 days) with a cross-agency checklist.
- **Parker:** permit levels (basic rental, General Event when tents exceed 10x10 or inflatables exceed 400 sq ft,
  Community Event). No staking (weights; water for weights), portable toilets on pavement, electricity not guaranteed,
  O'Brien Park summer limits, Building Division permit over 400 sq ft.

Nearby links (all reciprocal):

| Page | nearbyCities |
|---|---|
| Denver | aurora, lakewood, arvada, littleton, centennial, westminster, thornton |
| Littleton | centennial, denver, lakewood, parker |
| Centennial | littleton, aurora, parker, denver |
| Westminster | thornton, arvada, boulder, denver |
| Thornton | westminster, denver |
| Parker | castle-rock, centennial, aurora, littleton |
| Aurora | denver, centennial, parker |
| Lakewood | denver, arvada, littleton |
| Arvada | denver, lakewood, boulder, westminster |
| Boulder | arvada, westminster |
| Castle Rock | denver, colorado-springs, monument, parker |

Denver is still a thin page, so there's no in-body hub paragraph for this cluster yet (see Friday QA).

## Next Candidate Clusters

| Cluster | Candidate cities | Notes |
|---|---|---|
| Northern Colorado / Estes Park | Windsor, Longmont, Estes Park | Builds on Fort Collins, Loveland and Greeley |
| Denver infill | Littleton, Centennial, Westminster, Thornton, Parker | In progress (see Current Cluster above). Further infill candidates to scope: Englewood, Northglenn, Broomfield |
| Western Slope | Fruita, Palisade (already referenced in Grand Junction's `nearbyCities`), others to be scoped | Builds on Grand Junction |

---

## Accuracy Rules

- Re-verify every fact at its official source (town or city site, county, state agency, USFS, NWS, NOAA) while writing,
  and record the sources in the batch log (`published-pages.md`).
- Never invent prices, provider coverage, venue policies or attendance figures. Say that pricing and policies vary by
  provider.
- Use plain, natural prose. No filler, and no "whether you're" openers.
- Write fresh, city-specific considerations, checklists and FAQs. Don't reuse the near-identical blocks on older pages.
- Target depth: about 1,200 to 1,450 words rendered in `<main>` for a rich city page.

---

## Friday QA Deferred List

These are known issues, deliberately left out of Batch 1. Fix them in separate, approved passes.

**SEO and technical**

- No canonicals, Open Graph tags or JSON-LD schema.
- `/sign-in`, `/privacy` and `/terms` return 404 (they're linked in the header and footer).
- Empty `lib/seo.ts` and `lib/site.ts`. Unused fields: `featured`, `primaryKeyword`, latitude/longitude.

**Forms and providers**

- The header search and the homepage finder buttons don't work, and the forms aren't connected.
- The `/providers` page is empty (excluded from the sitemap until it has content).

**Homepage and copy**

- "Get the Best Rates" and "growing network" wording.
- The Western Slope and Ski Towns cards link to `/locations`.
- The homepage featured-location cards use hard-coded image paths with `alt=""`.
- The `plannedTopics` list on the resources page: "Tent Sizing and Planning" and "Wedding Rentals" were removed in the
  Resource Run, and "Tables and Seating" and "Event Restrooms" in the Denver Infill Run (now covered); the other two are
  still unlinked placeholders.
- "whether you" still appears in older copy (Aurora, Arvada, Castle Rock, Loveland, Monument, Woodland Park, Fountain and Pueblo
  pages, the tent planning guide and the wedding checklist). New pages avoid it.

**Content**

- Five thin city pages: Denver, Fort Collins, Boulder, Greeley, Grand Junction (Colorado Springs was upgraded in Batch 2).
  Denver now lists seven nearby cities but has no rich hub copy for the Denver Infill cluster.
- Aurora is described only as Arapahoe County.
- Resource intros don't render links. (The tent cost guide now links back to the size guide, fixed in the Resource Run.)
- Nine of the 10 category pages are thin.
- The older rich pages (Aurora, Lakewood, Arvada, Castle Rock, Loveland) share near-duplicate considerations,
  checklists and FAQs.

**Images and brand**

- Location and category images are 2 to 3 MB PNGs, some with spaces in their filenames.
- The Fort Collins and Boulder images contain AI-generated signage text.
- `DJ-services.png` is unused.
- The tagline is inconsistent ("Plan Better · Celebrate Bigger" vs "Plan local. Celebrate better."), and so is the ink
  color (#1E2A36 vs #1F2937).

## Friday QA — 2026-10-09

**Fixed** (`01cf111`)

- Category pages now link to the relevant planning guides, using a data-driven match on `topicCategorySlug` and `relatedCategorySlugs`.
- banned-phrase wording removed from the older pages.
- Westminster pavilion FAQ rewritten as evergreen (no 2027 date).
- Dead links removed: header "Sign In" (`/sign-in`) and footer Privacy/Terms (`/privacy` and `/terms` returned 404).

**Drafted, not published**

- `references/privacy-policy-draft.md` and `references/terms-of-use-draft.md`, based on what the code actually does: no analytics, no first-party cookies, an unconnected contact form, a GoHighLevel embed on `/for-rental-companies`, and Vercel hosting. Placeholders in `[[...]]` need Adam's input (legal entity, contact email, governing state and county, retention period, and the fields collected in the GHL form). These drafts are uncommitted; don't publish or restore the footer links until Adam approves. Empty `app/privacy` and `app/terms` folders already exist locally.

**Open / not fixed**

- No canonical, Open Graph or JSON-LD tags (needs a decision; this is a template-level change).
- The Denver page is thin, and pages run long overall (report only).
- The Parker hero framing is tight. A signage retouch on the tent hero and shortened tab titles are still deferred.
- The `/contact` form isn't connected: submit shows a "not sent" notice. Wire it to GHL or remove it.
