# ERF Hero Image Style

Last updated: 2026-10-14 (standard unchanged; Northern Colorado run pages shipped without heroes — follow-up pending)

**Approval status:** Heroes that pass this standard and the QA checklist may publish unattended. Regenerate failures rather than asking for per-image approval. (Unattended publishing authorized 2026-10-05.)

---

## The Standard: "An Event in a Place"

Each city hero shows a realistic event rental setup in a believable version of that city's local terrain. The rentals
are the subject, and the place gives them context.

| Element | Rule |
|---|---|
| Subject | A realistic rental setup (tent, tables and chairs, dance floor, heaters, restroom trailer, lighting) set up as a real provider would set it up |
| Setting | Believable local terrain for that city (pine meadow, red-rock foothills, aspen meadow, plains, river valley) |
| Light | Soft daylight or golden hour |
| Palette | Natural scene with ivory, teal and gold accents (linens, florals, lighting) |
| Text | No text overlay, signage, lettering or watermarks |
| Branding | No logos, and no fake venue or provider branding |
| Landmarks | No landmark misuse: don't place an event where it couldn't happen (for example, no tables or tents inside Garden of the Gods), and don't distort recognizable landmarks |
| People | Optional. If shown, keep them small, natural and non-identifiable |

---

## Technical Spec

| Spec | Value |
|---|---|
| Generation size | 16:9, 1280x720 |
| Final crop | 3:2, 1080x720. Crop deliberately so every key subject sits comfortably inside the frame, then check the crop by eye |
| Format | WebP, under 300 KB |
| Path | `public/images/locations/<slug>-event-rentals.webp` (no spaces, lowercase) |
| Registration | Add `{ src, alt }` for the slug in `content/locationImages.ts` |
| Alt text | Descriptive, 125 characters or fewer. Describe what's actually in the image and name the city, for example "Frame tent with banquet tables and white folding chairs in a pine-edged meadow near Monument, Colorado" |

How it displays: the city page hero renders the image in an `aspect-[3/2]` frame with `object-cover` (up to about
560px wide on desktop), and the locations hub card is also 3:2. A true 3:2 file shows uncropped in both places.

---

## QA Checklist

- [ ] The scene reads as a rental setup at an event, not a stock landscape or a city skyline
- [ ] The terrain is believable for this city, and no landmark is misused
- [ ] No text, signage, logos or invented business names anywhere in the frame (zoom in to check)
- [ ] Rental equipment looks physically plausible (tent legs, anchoring, table spacing, chair counts)
- [ ] The light is soft daylight or golden hour; the ivory, teal and gold accents are present but not overdone
- [ ] It's cropped from 16:9 to exactly 1080x720, and every key subject sits comfortably inside the frame (checked by eye)
- [ ] WebP, under 300 KB, saved at the correct path and filename
- [ ] Alt text is 125 characters or fewer and accurately describes the image
- [ ] It passes this QA checklist (unattended publishing; regenerate on failure)
- [ ] After deploy: the image returns 200 as `image/webp` and renders with its alt text on the city page and hub card

---

## Approved Heroes

| Slug | File | Size | Alt text | Approved |
|---|---|---|---|---|
| monument-co | public/images/locations/monument-co-event-rentals.webp | 1080x720, 132 KB | Frame tent with banquet tables and white folding chairs in a pine-edged meadow near Monument, Colorado | 2026-10-01 |
| manitou-springs-co | public/images/locations/manitou-springs-co-event-rentals.webp | 1080x720, 120 KB | Farm-table wedding reception with string lights and a dance floor below red-rock foothills in Manitou Springs, Colorado | 2026-10-01 |
| woodland-park-co | public/images/locations/woodland-park-co-event-rentals.webp | 1080x720, 108 KB | Pole tent with round tables and patio heaters beside a restroom trailer in an aspen meadow near Woodland Park, Colorado | 2026-10-01 |
| fountain-co | public/images/locations/fountain-co-event-rentals.webp | 1080x720, 124 KB | Frame tent with round tables and a white bounce house in a cottonwood park on the plains near Fountain, Colorado | 2026-10-01 |
| pueblo-co | public/images/locations/pueblo-co-event-rentals.webp | 1080x720, 161 KB | Riverside tent reception with string lights and an uplit stage at dusk in Pueblo, Colorado | 2026-10-01 |
| littleton-co | public/images/locations/littleton-co-event-rentals.webp | 1080x720, 216 KB | Frame tent with round tables, white chairs and string lights on a backyard lawn with foothills beyond in Littleton, Colorado | 2026-10-08 |
| centennial-co | public/images/locations/centennial-co-event-rentals.webp | 1080x720, 90 KB | Sandbag-weighted canopy and rented tables and chairs beside an open picnic pavilion on a park lawn in Centennial, Colorado | 2026-10-08 |
| westminster-co | public/images/locations/westminster-co-event-rentals.webp | 1080x720, 122 KB | Backyard reception with a pole tent, dance floor and string lights facing the Front Range in Westminster, Colorado | 2026-10-08 |
| thornton-co | public/images/locations/thornton-co-event-rentals.webp | 1080x720, 127 KB | Two 10-by-10 pop-up canopies over rented tables and chairs beside a picnic pavilion in a lakeside park in Thornton, Colorado | 2026-10-08 |
| parker-co | public/images/locations/parker-co-event-rentals.webp | 1080x720, 180 KB | Frame tent on water-barrel weights with round tables and a restroom trailer on pavement in a park in Parker, Colorado | 2026-10-08 |

The older Denver, Colorado Springs, Fort Collins and Boulder images are 2 to 3 MB PNG skyline or landmark scenes, and
two of them contain AI-generated signage text. They don't meet this standard and are on the Friday QA deferred list.

## Resource Guide Heroes

Resource guides can show the same 3:2 hero as city pages. Set `heroImage: { src, alt }` on the article in
`content/resources.ts` and save the file at `public/images/resources/<slug>.webp` (1080x720 WebP, under 300 KB). The
hero renders beside the H1 only when `heroImage` is set; the resources hub cards don't show images.

| Slug | File | Size | Alt text | Status |
|---|---|---|---|---|
| colorado-outdoor-event-tent-planning | public/images/resources/colorado-outdoor-event-tent-planning.webp | 1080x720, 124 KB | Weighted frame tent with banquet tables and rolled sidewalls in a pine meadow on Colorado's Front Range | Shipped 2026-10-02 (Adam-generated and approved) |
| colorado-wedding-rental-checklist | public/images/resources/colorado-wedding-rental-checklist.webp | 1080x720, 125 KB | Wedding tent with round tables, ivory linens and string lights beside a dance floor at golden hour in the Colorado foothills | Shipped 2026-10-02 (Adam-generated and approved) |
| how-many-tables-and-chairs-do-i-need | public/images/resources/how-many-tables-and-chairs-do-i-need.webp | 1080x720, 99 KB | Round tables and white folding chairs set with clear aisles under a frame tent for a reception in Colorado | Shipped 2026-10-08 (Adam-generated and approved) |
| event-restroom-rental-guide | public/images/resources/event-restroom-rental-guide.webp | 1080x720, 120 KB | Restroom trailer with a ramp and an accessible portable unit on level ground beside a wedding tent in Colorado | Shipped 2026-10-08 (Adam-generated and approved) |

## Reference Images

`references/hero-image-references/` holds copies of two approved heroes (Monument and Woodland Park) to use as style
references for new generations.

## Pending Heroes (Northern Colorado / Estes Park, 2026-10-14)

Pages shipped without images. Generate at 16:9 1280×720 from `references/hero-image-references/`, crop deliberately to
1080×720 (3:2), save as WebP under 300 KB, then register in `content/locationImages.ts` or `heroImage` on the article.

| Slug | Intended path | Terrain hint | Suggested alt (≤125 chars) |
|---|---|---|---|
| windsor-co | public/images/locations/windsor-co-event-rentals.webp | Plains / reservoir, Boardwalk-style park setting | Frame tent and rented tables beside a plains reservoir park in Windsor, Colorado |
| longmont-co | public/images/locations/longmont-co-event-rentals.webp | Front Range plains | Park shelter party with tables, chairs and a bounce house on Front Range plains near Longmont, Colorado |
| estes-park-co | public/images/locations/estes-park-co-event-rentals.webp | Mountain meadow, town-adjacent or private land — not tents inside RMNP | Mountain meadow wedding tent with tables and heaters outside Estes Park, Colorado |
| berthoud-co | public/images/locations/berthoud-co-event-rentals.webp | Agricultural plains | Pavilion party with canopy, tables and a bounce house on farmland plains near Berthoud, Colorado |
| erie-co | public/images/locations/erie-co-event-rentals.webp | Open-space plains with foothills view | Backyard tent reception with tables and string lights facing foothills near Erie, Colorado |
| colorado-inflatable-and-party-rental-guide | public/images/resources/colorado-inflatable-and-party-rental-guide.webp | Bounce house + tables on a lawn | Bounce house and rented picnic tables on a sunny Colorado park lawn |
| colorado-stage-av-lighting-rental-guide | public/images/resources/colorado-stage-av-lighting-rental-guide.webp | Small outdoor stage with lighting | Small outdoor stage with speakers and warm uplighting at a Colorado evening event |

