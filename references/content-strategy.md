# ERF Content Strategy

Last updated: 2026-10-01 (Batch 1 of the Colorado Springs / Pikes Peak cluster shipped)

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
- The locations hub (`/locations`) lists every location automatically. The sitemap (`app/sitemap.ts`) is data-driven
  and picks up new locations, categories and resources without edits.

---

## Current Cluster: Colorado Springs / Pikes Peak / Southern Front Range

| Batch | Pages | Status |
|---|---|---|
| Batch 1 | Monument (`monument-co`), Manitou Springs (`manitou-springs-co`), Woodland Park (`woodland-park-co`) | Live 2026-10-01 |
| Batch 2 | Fountain (`fountain-co`), Pueblo (`pueblo-co`) | Planned. Hero files are drafted on the box but not approved for use yet |
| Resources | `/resources/colorado-outdoor-event-tent-planning`, `/resources/colorado-wedding-rental-checklist` | Planned. Don't link them until they exist |
| Hub upgrade | Upgrade `colorado-springs-co` from the thin format to a rich page | Planned |

Batch 1 local angles (keep future pages distinct from these):

- **Monument:** Tri-Lakes and the Palmer Divide. The Town requires a temporary use permit for tents, separate from its
  special event permit. Not the "between Denver and the Springs" angle, which belongs to Castle Rock.
- **Manitou Springs:** historic destination-wedding town. The City's special event site plan must show tents and
  fencing, with deadlines 60, 30 and 14 days out. Garden of the Gods limits (no tables, tents or receptions outside
  two picnic areas) push receptions to rented setups.
- **Woodland Park:** 8,465 ft. The City's 45-day Temporary Use Permit requires a site plan showing toilets and
  handwashing. Highway permits for US 24 and SH 67. Forest Service group use permit for 75+ people.

Reciprocal nearby links added in Batch 1: `woodland-park-co` on Colorado Springs, `monument-co` on Castle Rock.
Fountain and Pueblo links get added in Batch 2.

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
- The `plannedTopics` list on the resources page is stale.

**Content**

- Six thin city pages: Denver, Colorado Springs, Fort Collins, Boulder, Greeley, Grand Junction.
- Aurora is described only as Arapahoe County.
- The tent cost guide doesn't link back to the size guide. Resource intros don't render links.
- Nine of the 10 category pages are thin.
- The older rich pages (Aurora, Lakewood, Arvada, Castle Rock, Loveland) share near-duplicate considerations,
  checklists and FAQs.

**Images and brand**

- Location and category images are 2 to 3 MB PNGs, some with spaces in their filenames.
- The Fort Collins and Boulder images contain AI-generated signage text.
- `DJ-services.png` is unused.
- The tagline is inconsistent ("Plan Better · Celebrate Bigger" vs "Plan local. Celebrate better."), and so is the ink
  color (#1E2A36 vs #1F2937).
