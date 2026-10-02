# ERF Published Page Inventory

Last audited: 2026-10-01 (Batch 2: Fountain, Pueblo, Colorado Springs hub enrichment)

Base URL: https://www.eventrentalfinder.com (the apex domain 308-redirects to www). Deploys: push to `main`, then Vercel auto-deploys.

---

## Run Log

### 2026-10-01: ERF Batch 2

- **New rich city pages** (content in `content/locations.ts`):
  - Fountain (`/locations/fountain-co`). Angle: park and community events next to Fort Carson; the City provides no
    tents, port-o-lets, tables or chairs; park rules (no staking, no potable water, sound approval, no vehicles on
    turf); Thunder in the Valley.
  - Pueblo (`/locations/pueblo-co`). Angle: lower and hotter (NOAA normals); municipal-code park permits; George L.
    Williams Hall has no tables or chairs; Riverwalk venues; Convention Center in-house catering/AV; State Fair;
    Chile & Frijoles; revocable street-closure permits.
- **Colorado Springs hub upgrade** (`/locations/colorado-springs-co`): thin page upgraded to rich fields (5 intro
  paragraphs including the in-body hub links to Monument, Manitou Springs, Woodland Park, Fountain, Pueblo and Castle Rock;
  6 use cases; 10 considerations; 10-item checklist; 5 FAQs). URL, hero and alt unchanged.
- **Heroes:** `public/images/locations/fountain-co-event-rentals.webp` (124 KB) and `pueblo-co-event-rentals.webp`
  (161 KB), 1080x720 WebP, Adam-approved.
- **Nearby links:** Fountain → Colorado Springs, Pueblo, Monument; Pueblo → Fountain, Colorado Springs; Colorado
  Springs → Monument, Manitou Springs, Woodland Park, Fountain, Pueblo, Castle Rock; Fountain added to Monument.
- **Sources:**
  - Fountain: City of Fountain Parks & Open Space page (reservations, electricity), Parks Rules & Regulations, Event
    Permit Application (City provides no tents, port-o-lets, tables or chairs; event map; car show barrier), About Fountain
    (1859/1903, Fort Carson 1942, District 8), city 2026 annual events list; NOAA normals (Colorado Springs airport).
  - Pueblo: NOAA 1991–2020 normals (Pueblo Memorial Airport, USW00093058); USGS GNIS elevation; City Park Pavilions
    page; Mineral Palace Park facility page; Pueblo Municipal Code Title X Ch. 1 (Sec. 10-1-5 and park rules on tents
    and alcohol); Pueblo Fire Department tent application; City Special Events (revocable permit) page; Police parade
    permit; City Clerk special event liquor permit info; Pueblo Riverwalk Facility Rentals; Pueblo Convention Center;
    Colorado State Fair; Chile & Frijoles Festival.
  - Colorado Springs: City Weddings in Parks page; park permit guide; Fire Department tents/canopies page; NOAA normals
    (USW00093037); NWS lightning safety.
- **Sitemap URLs:** 32, now 34. **Location pages:** 14, now 16.

### 2026-10-01: ERF Batch 1

- **New rich city pages** (content in `content/locations.ts`):
  - Monument (`/locations/monument-co`), about 1,410 words in `<main>`. Angle: Tri-Lakes and the Palmer Divide;
    the Town's tent temporary use permit, separate from the special event permit.
  - Manitou Springs (`/locations/manitou-springs-co`), about 1,410 words. Angle: historic destination-wedding town;
    site plan showing tents and fencing; deadlines 60, 30 and 14 days out; Garden of the Gods limits push receptions
    to rented setups.
  - Woodland Park (`/locations/woodland-park-co`), about 1,390 words. Angle: 8,465 ft; the 45-day Temporary Use
    Permit; site plan showing toilets and handwashing; highway permits; Forest Service permit for 75+ people.
- **Heroes:** `public/images/locations/<slug>-event-rentals.webp` (1080x720 WebP, 108 to 132 KB, Adam-approved).
- **Reciprocal nearby links:** `woodland-park-co` added to Colorado Springs, `monument-co` added to Castle Rock.
- **Image alt text:** `content/locationImages.ts` is now `{ src, alt }`. The alt text renders on the city page hero and
  on the hub cards. The four older images got descriptive alt text.
- **New `app/sitemap.ts`** (data-driven, 32 URLs; `/providers` excluded) and **new `app/robots.ts`** (allow all, plus
  the sitemap URL).
- **Root metadata:** default title "Event Rental Finder | Find Event Rentals in Colorado" plus a description. No title
  template was added.
- **Sources:**
  - Monument: Town of Monument Special Event Permits page and the 2026 Special Events Application packet; USGS GNIS
    elevation; Town of Palmer Lake history (Palmer Divide); Town 4th of July page; USAFA graduation traffic notice; NWS
    lightning safety.
  - Manitou Springs: City of Manitou Springs Special Event Use Guide 2026, Facility Rentals page and Welcome page;
    History Colorado (Manitou Springs Historic District); Emma Crawford Coffin Races page; City of Colorado Springs
    "Weddings in Parks" (Garden of the Gods rules).
  - Woodland Park: City of Woodland Park 2026 Temporary Use Permit application, FAQs and City Park Rental Application;
    Visit Woodland Park; WHO UV and altitude Q&A; CPW Mueller State Park group and event page; USFS noncommercial group
    use permits; NWS lightning safety.
- **Sitemap URLs:** 0, now 32. **Location pages:** 11, now 14.

---

## Core Pages

| Page | URL | In sitemap |
|---|---|---|
| Home | https://www.eventrentalfinder.com/ | Yes |
| Locations hub | https://www.eventrentalfinder.com/locations | Yes |
| Categories hub | https://www.eventrentalfinder.com/categories | Yes |
| Resources hub | https://www.eventrentalfinder.com/resources | Yes |
| List Your Business | https://www.eventrentalfinder.com/list-your-business | Yes |
| Contact | https://www.eventrentalfinder.com/contact | Yes |
| Providers | https://www.eventrentalfinder.com/providers | No (empty page) |

## Location Pages (16)

| City | County | Format | URL | Added |
|---|---|---|---|---|
| Denver | Denver County | Thin | https://www.eventrentalfinder.com/locations/denver-co | Before Batch 1 |
| Colorado Springs | El Paso County | Rich (hub, upgraded 2026-10-01) | https://www.eventrentalfinder.com/locations/colorado-springs-co | Before Batch 1 |
| Fort Collins | Larimer County | Thin | https://www.eventrentalfinder.com/locations/fort-collins-co | Before Batch 1 |
| Boulder | Boulder County | Thin | https://www.eventrentalfinder.com/locations/boulder-co | Before Batch 1 |
| Greeley | Weld County | Thin | https://www.eventrentalfinder.com/locations/greeley-co | Before Batch 1 |
| Grand Junction | Mesa County | Thin | https://www.eventrentalfinder.com/locations/grand-junction-co | Before Batch 1 |
| Aurora | Arapahoe County | Rich | https://www.eventrentalfinder.com/locations/aurora-co | Before Batch 1 |
| Lakewood | Jefferson County | Rich | https://www.eventrentalfinder.com/locations/lakewood-co | Before Batch 1 |
| Arvada | Jefferson County | Rich | https://www.eventrentalfinder.com/locations/arvada-co | Before Batch 1 |
| Castle Rock | Douglas County | Rich | https://www.eventrentalfinder.com/locations/castle-rock-co | Before Batch 1 |
| Loveland | Larimer County | Rich | https://www.eventrentalfinder.com/locations/loveland-co | Before Batch 1 |
| Monument | El Paso County | Rich | https://www.eventrentalfinder.com/locations/monument-co | 2026-10-01 |
| Manitou Springs | El Paso County | Rich | https://www.eventrentalfinder.com/locations/manitou-springs-co | 2026-10-01 |
| Woodland Park | Teller County | Rich | https://www.eventrentalfinder.com/locations/woodland-park-co | 2026-10-01 |
| Fountain | El Paso County | Rich | https://www.eventrentalfinder.com/locations/fountain-co | 2026-10-01 |
| Pueblo | Pueblo County | Rich | https://www.eventrentalfinder.com/locations/pueblo-co | 2026-10-01 |

## Category Pages (10)

| Category | URL |
|---|---|
| Tent Rentals | https://www.eventrentalfinder.com/categories/tent-rentals |
| Table & Chair Rentals | https://www.eventrentalfinder.com/categories/table-chair-rentals |
| Party Rentals | https://www.eventrentalfinder.com/categories/party-rentals |
| Wedding Rentals | https://www.eventrentalfinder.com/categories/wedding-rentals |
| Inflatable Rentals | https://www.eventrentalfinder.com/categories/inflatable-rentals |
| Restroom Trailer Rentals | https://www.eventrentalfinder.com/categories/restroom-trailer-rentals |
| Photo Booth Rentals | https://www.eventrentalfinder.com/categories/photo-booth-rentals |
| Dance Floor Rentals | https://www.eventrentalfinder.com/categories/dance-floor-rentals |
| Stage Rentals | https://www.eventrentalfinder.com/categories/stage-rentals |
| AV & Lighting Rentals | https://www.eventrentalfinder.com/categories/av-lighting-rentals |

## Resource Pages (2)

| Title | URL | Published |
|---|---|---|
| How Much Does a Tent Rental Cost? | https://www.eventrentalfinder.com/resources/tent-rental-cost | 2026-09-24 |
| What Size Tent Do I Need for My Event? | https://www.eventrentalfinder.com/resources/what-size-tent-do-i-need | 2026-09-24 |

## Machine-Readable

| File | URL |
|---|---|
| Sitemap (34 URLs) | https://www.eventrentalfinder.com/sitemap.xml |
| Robots | https://www.eventrentalfinder.com/robots.txt |
