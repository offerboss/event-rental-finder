# ERF Published Page Inventory

Last audited: 2026-10-08 (Denver Infill Run: Littleton, Centennial, Westminster, Thornton, Parker; tables and chairs guide; event restroom guide)

Base URL: https://www.eventrentalfinder.com (the apex domain 308-redirects to www). Deploys: push to `main`, then Vercel auto-deploys.

---

## Run Log

### 2026-10-08: ERF Denver Infill Run 

- **Origin:** an interrupted run on 2026-10-07 left uncommitted drafts of all seven pages. This run re-verified them at
  official sources, corrected the facts that didn't match, wired heroes and links, and updated these references.
- **New rich city pages** (content in `content/locations.ts`), rendered words in `<main>`:
  - Littleton (`/locations/littleton-co`), about 1,570 words.
  - Centennial (`/locations/centennial-co`), about 1,470 words.
  - Westminster (`/locations/westminster-co`), about 1,470 words.
  - Thornton (`/locations/thornton-co`), about 1,480 words.
  - Parker (`/locations/parker-co`), about 1,470 words.
- **New resource guides** (content in `content/resources.ts`, `publishedAt` 2026-10-08; update if shipping later):
  - How Many Tables and Chairs Do I Need? (`/resources/how-many-tables-and-chairs-do-i-need`), about 1,575 words.
  - Event Restroom Rentals (`/resources/event-restroom-rental-guide`), about 1,325 words.
- **Links:** nearby lists updated on Denver, Aurora, Lakewood, Arvada, Boulder and Castle Rock (all reciprocal). New
  resource links from the size guide (in-body and related), the wedding checklist (in-body and related) and the Fountain,
  Woodland Park and Pueblo closings. "Tables and Seating" and "Event Restrooms" removed from `plannedTopics`.
- **Heroes:** `public/images/locations/<slug>-event-rentals.webp` for the five cities and
  `public/images/resources/<slug>.webp` for both guides (1080x720 WebP, 90 to 216 KB, Adam-generated and approved).
- **Sources:**
  - Littleton: City Event Permits page; Neighborhood and Private Parties page; City Permits and Licenses page; South
    Suburban Parks and Recreation Park and Trail Rules (Sept. 2023) and Shelter Rentals & Special Events FAQ; South Metro
    Fire Rescue special event permits page.
  - Centennial: City History page; Parks, Trails & Open Spaces and Park and Recreation Districts pages; Centennial Center
    Park page; Make a Park Reservation page; Centennial Center Park Rules and Regulations (Sec. 11-7-30), Administrative
    Policy 2012-AP-01 and Use Restriction Exemption/Special Events Application; Permits for Special Events page; Apply for
    a Temporary Use Permit page; Block Party/Street Closure Request page; South Metro Fire Rescue; C.R.S. 44-5-102.
  - Westminster: Park Pavilions page (2026 season status, rules, capacities); Rules & Regulations page; Special Event
    Permits page; Special Event – Temporary Use Permit Application Packet; Westminster Fire Department Special Events
    requirements; Standley Lake Regional Park page; City elections/housing pages (Sheridan Boulevard county line).
  - Thornton: City Code Ch. 46 (Secs. 46-32, 46-37, 46-40, 46-42, 46-44) via Municode; Carpenter Park page; Recreation
    Rentals and Parks & Planning pages; Open Space page (2,500 acres, 140 miles); Temporary Use Permit checklist; Sound
    Permit application; City Clerk Special Events (liquor) Permit packet.
  - Parker: Parker Parks and Recreation Hosting an Event page and Park, Shelter, Court and Field Rentals page; Town
    Community Event Permits page and guide; Building/Fire and Life Safety event permits page and A-Z supplement; NWS
    lightning safety.
  - Tables and chairs guide: CU Boulder Events Planning & Catering venue fact sheet; CU Denver Jake Jabs Event Center
    page; 2021 IFC Table 1004.5 and Chapter 31 (Secs. 3103.6, 3103.12, Table 3103.12.1) via UpCodes (Colorado DFPC
    edition); DFPC adopted codes page; 2010 ADA Standards 226.1, 902; Thornton, Centennial and Pueblo venue pages.
  - Restroom guide: Mesa County Public Health Guide for Special Event Coordinators (2024); 2010 ADA Standards 213.2
    exception and 104.2; Westminster pavilion page and special event packet; City of Fountain Special Events Permit
    Application; Woodland Park Temporary Use Permit; Parker Hosting an Event page; Littleton Event Permits page; Denver
    Parks and Recreation Event Logistics Guide; NOAA 1991–2020 normals (Pueblo).
- **Sitemap URLs:** 36, now 43. **Location pages:** 16, now 21. **Resource pages:** 4, now 6.

### 2026-10-02: ERF Resource Run

- **New resource guides** (content in `content/resources.ts`, published 2026-10-02):
  - Colorado Outdoor Event Tent Planning: Wind, Hail, Lightning, Altitude and Permits
    (`/resources/colorado-outdoor-event-tent-planning`), about 2,420 words in `<main>`. Sections: why Colorado changes the
    plan (at-a-glance table), lightning, hail, wind and anchoring, altitude, tent permits by city, site plan, provider
    questions, Pikes Peak region links.
  - Colorado Wedding Rental Checklist: What to Book, When to Confirm, What to Ask
    (`/resources/colorado-wedding-rental-checklist`), about 1,860 words in `<main>`. Sections: start with the site,
    core rental list, milestone timeline (table) plus city permit deadlines, provider questions, weather plan, marriage
    license, local notes, final-week checklist.
- **Links:** each guide links in-body to Colorado Springs, Monument, Manitou Springs, Woodland Park, Fountain and Pueblo,
  the relevant categories, both tent guides and each other. Reciprocal: the tent cost guide now links (in-body and
  related cards) to the size guide and the tent planning guide; the size guide links to the tent planning guide. City
  `considerations.closing` links: Colorado Springs, Monument, Manitou Springs, Woodland Park and Pueblo link both
  guides; Fountain links the tent planning guide.
- **Resources hub:** "Tent Sizing and Planning" and "Wedding Rentals" removed from `plannedTopics`.
- **Hero support:** optional `heroImage { src, alt }` added to `ResourceArticle` and rendered in the resource hero
  (3:2 frame, same as city pages). Heroes shipped in a follow-up commit the same day: `public/images/resources/<slug>.webp` (1080x720 WebP, about 125 KB each, Adam-generated and approved).
- **Sources:**
  - Weather: NWS Lightning Safety Overview, Lightning Safety When Outdoors and Lightning Science pages; NWS Pueblo
    June (lightning), July (monsoon) and August (climate) 2026 safety outreach PDFs, including the June 13, 2018 hail
    event; NWS severe thunderstorm criteria (58 mph, 1 inch hail); NOAA NSSL Severe Weather 101 hail and damaging winds
    pages; NOAA 1991–2020 normals (Colorado Springs and Pueblo airports); WHO UV and altitude Q&A; Honda generator
    owner's manual (altitude power loss); Colorado 811.
  - Permits: 2021 International Fire Code Section 3103.2 and 3103.9 (via UpCodes); Colorado Springs Fire Department
    tents, canopies and membrane structures page; Colorado Springs Weddings in Parks page and park permit guide; City of
    Manitou Springs Special Event Use Guide 2026; Town of Monument 2026 Special Events Application packet; City of
    Woodland Park 2026 Temporary Use Permit; City of Fountain Parks Rules and Event Permit Application; Pueblo Fire
    Department Tent and Membrane Structure Permit Application; Pueblo Municipal Code Sec. 10-1-5.
  - Marriage license: El Paso County Clerk and Recorder marriage license page and Recording FAQs; Pueblo County Clerk
    and Recorder marriage license page; C.R.S. 14-2-109 (as cited by both clerks).
- **Sitemap URLs:** 34, now 36. **Resource pages:** 2, now 4.

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

## Location Pages (21)

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
| Littleton | Arapahoe County | Rich | https://www.eventrentalfinder.com/locations/littleton-co | 2026-10-08 |
| Centennial | Arapahoe County | Rich | https://www.eventrentalfinder.com/locations/centennial-co | 2026-10-08 |
| Westminster | Adams and Jefferson Counties | Rich | https://www.eventrentalfinder.com/locations/westminster-co | 2026-10-08 |
| Thornton | Adams County | Rich | https://www.eventrentalfinder.com/locations/thornton-co | 2026-10-08 |
| Parker | Douglas County | Rich | https://www.eventrentalfinder.com/locations/parker-co | 2026-10-08 |

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

## Resource Pages (6)

| Title | URL | Published |
|---|---|---|
| How Much Does a Tent Rental Cost? | https://www.eventrentalfinder.com/resources/tent-rental-cost | 2026-09-24 |
| What Size Tent Do I Need for My Event? | https://www.eventrentalfinder.com/resources/what-size-tent-do-i-need | 2026-09-24 |
| Colorado Outdoor Event Tent Planning: Wind, Hail, Lightning, Altitude and Permits | https://www.eventrentalfinder.com/resources/colorado-outdoor-event-tent-planning | 2026-10-02 |
| Colorado Wedding Rental Checklist: What to Book, When to Confirm, What to Ask | https://www.eventrentalfinder.com/resources/colorado-wedding-rental-checklist | 2026-10-02 |
| How Many Tables and Chairs Do I Need? Event Seating, Layouts and Spacing | https://www.eventrentalfinder.com/resources/how-many-tables-and-chairs-do-i-need | 2026-10-08 |
| Event Restroom Rentals: Trailers vs. Portable Units, How Many, and Colorado Site Rules | https://www.eventrentalfinder.com/resources/event-restroom-rental-guide | 2026-10-08 |

## Machine-Readable

| File | URL |
|---|---|
| Sitemap (43 URLs) | https://www.eventrentalfinder.com/sitemap.xml |
| Robots | https://www.eventrentalfinder.com/robots.txt |
