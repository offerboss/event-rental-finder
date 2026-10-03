# ERF Content Strategy

Last updated: 2026-10-02 (Resource Run shipped: both cluster resources are live; this week's 5 cities + 2 resources target is met)

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

## Next Candidate Clusters

| Cluster | Candidate cities | Notes |
|---|---|---|
| Northern Colorado / Estes Park | Windsor, Longmont, Estes Park | Builds on Fort Collins, Loveland and Greeley |
| Denver infill | Littleton, Centennial, Westminster, Thornton, Parker | Builds on Denver, Aurora, Lakewood and Arvada |
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
  Resource Run (now covered); the other four are still unlinked placeholders.

**Content**

- Five thin city pages: Denver, Fort Collins, Boulder, Greeley, Grand Junction (Colorado Springs was upgraded in Batch 2).
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
