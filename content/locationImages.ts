// Location hero images live in /public/images. Keyed by location slug; each
// entry carries a descriptive alt text for the hero and the locations hub
// card. Locations without an entry (e.g. Greeley, Grand Junction) render
// without a photo.
export type LocationImage = { src: string; alt: string };

export const locationImages: Record<string, LocationImage> = {
  "denver-co": {
    src: "/images/Denver.png",
    alt: "Downtown Denver skyline and snowcapped Front Range peaks at golden hour above a park lake and historic pavilion",
  },
  "colorado-springs-co": {
    src: "/images/Colorado Springs.png",
    alt: "Red sandstone rock formations and pine-covered hills below snowcapped Pikes Peak and the Colorado Springs skyline",
  },
  "fort-collins-co": {
    src: "/images/Fort Collins.png",
    alt: "People walking across the brick plaza of Old Town Square in Fort Collins, with shops, string lights and a fountain",
  },
  "boulder-co": {
    src: "/images/boulder.png",
    alt: "Shoppers on Boulder's brick Pearl Street Mall with the Flatirons rising behind historic storefronts",
  },
  "monument-co": {
    src: "/images/locations/monument-co-event-rentals.webp",
    alt: "Frame tent with banquet tables and white folding chairs in a pine-edged meadow near Monument, Colorado",
  },
  "manitou-springs-co": {
    src: "/images/locations/manitou-springs-co-event-rentals.webp",
    alt: "Farm-table wedding reception with string lights and a dance floor below red-rock foothills in Manitou Springs, Colorado",
  },
  "woodland-park-co": {
    src: "/images/locations/woodland-park-co-event-rentals.webp",
    alt: "Pole tent with round tables and patio heaters beside a restroom trailer in an aspen meadow near Woodland Park, Colorado",
  },
  "fountain-co": {
    src: "/images/locations/fountain-co-event-rentals.webp",
    alt: "Frame tent with round tables and a white bounce house in a cottonwood park on the plains near Fountain, Colorado",
  },
  "pueblo-co": {
    src: "/images/locations/pueblo-co-event-rentals.webp",
    alt: "Riverside tent reception with string lights and an uplit stage at dusk in Pueblo, Colorado",
  },
  "littleton-co": {
    src: "/images/locations/littleton-co-event-rentals.webp",
    alt: "Frame tent with round tables, white chairs and string lights on a backyard lawn with foothills beyond in Littleton, Colorado",
  },
  "centennial-co": {
    src: "/images/locations/centennial-co-event-rentals.webp",
    alt: "Sandbag-weighted canopy and rented tables and chairs beside an open picnic pavilion on a park lawn in Centennial, Colorado",
  },
  "westminster-co": {
    src: "/images/locations/westminster-co-event-rentals.webp",
    alt: "Backyard reception with a pole tent, dance floor and string lights facing the Front Range in Westminster, Colorado",
  },
  "thornton-co": {
    src: "/images/locations/thornton-co-event-rentals.webp",
    alt: "Two 10-by-10 pop-up canopies over rented tables and chairs beside a picnic pavilion in a lakeside park in Thornton, Colorado",
  },
  "parker-co": {
    src: "/images/locations/parker-co-event-rentals.webp",
    alt: "Frame tent on water-barrel weights with round tables and a restroom trailer on pavement in a park in Parker, Colorado",
  },
  "windsor-co": {
    src: "/images/locations/windsor-co-event-rentals.webp",
    alt: "Frame tent with rented tables beside a plains reservoir park in Windsor, Colorado",
  },
  "longmont-co": {
    src: "/images/locations/longmont-co-event-rentals.webp",
    alt: "Park lawn party with tables, chairs and a bounce house on Front Range plains near Longmont, Colorado",
  },
  "estes-park-co": {
    src: "/images/locations/estes-park-co-event-rentals.webp",
    alt: "Mountain meadow wedding tent with tables and heaters outside Estes Park, Colorado",
  },
  "berthoud-co": {
    src: "/images/locations/berthoud-co-event-rentals.webp",
    alt: "Pavilion party with canopy, tables and a bounce house on farmland plains near Berthoud, Colorado",
  },
  "erie-co": {
    src: "/images/locations/erie-co-event-rentals.webp",
    alt: "Backyard tent reception with tables and string lights facing foothills near Erie, Colorado",
  },
  "fruita-co": {
    src: "/images/locations/fruita-co-event-rentals.webp",
    alt: "White frame tent over rented white tables and chairs on a park lawn below red sandstone cliffs in Fruita, Colorado",
  },
  "palisade-co": {
    src: "/images/locations/palisade-co-event-rentals.webp",
    alt: "White frame tent with banquet tables beside a river and orchards below mesa cliffs at golden hour in Palisade, Colorado",
  },
  "montrose-co": {
    src: "/images/locations/montrose-co-event-rentals.webp",
    alt: "Park amphitheater with a rented stage, lighting truss and speakers below snowy mountains at dusk in Montrose, Colorado",
  },
  "rifle-co": {
    src: "/images/locations/rifle-co-event-rentals.webp",
    alt: "Two white canopies over tables and chairs with portable restrooms among sagebrush below gray bluffs in Rifle, Colorado",
  },
  "glenwood-springs-co": {
    src: "/images/locations/glenwood-springs-co-event-rentals.webp",
    alt: "White canopies and a reception tent on a lawn in a forested canyon valley in Glenwood Springs, Colorado",
  },
};
