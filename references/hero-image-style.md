# ERF Hero Image Style

Last updated: 2026-10-01 (standard approved by Adam; used for Monument, Manitou Springs, Woodland Park, Fountain and Pueblo)

**Approval status:** Every new hero needs Adam's approval before it ships, until he says otherwise.

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
- [ ] Adam has approved it
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

The older Denver, Colorado Springs, Fort Collins and Boulder images are 2 to 3 MB PNG skyline or landmark scenes, and
two of them contain AI-generated signage text. They don't meet this standard and are on the Friday QA deferred list.

## Resource Guide Heroes

Resource guides can show the same 3:2 hero as city pages. Set `heroImage: { src, alt }` on the article in
`content/resources.ts` and save the file at `public/images/resources/<slug>.webp` (1080x720 WebP, under 300 KB). The
hero renders beside the H1 only when `heroImage` is set; the resources hub cards don't show images.

| Slug | File | Status |
|---|---|---|
| colorado-outdoor-event-tent-planning | public/images/resources/colorado-outdoor-event-tent-planning.webp | Pending (not generated yet) |
| colorado-wedding-rental-checklist | public/images/resources/colorado-wedding-rental-checklist.webp | Pending (not generated yet) |

## Reference Images

`references/hero-image-references/` holds copies of two approved heroes (Monument and Woodland Park) to use as style
references for new generations.
