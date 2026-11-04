// Location hero images live in /public/images. Keyed by location slug; each
// entry carries a descriptive alt text for the hero and the locations hub
// card. Locations without an entry render without a photo.
export type LocationImage = { src: string; alt: string };

export const locationImages: Record<string, LocationImage> = {
  "denver-co": {
    src: "/images/locations/denver-co-event-rentals.webp",
    alt: "Downtown Denver skyline and snowcapped Front Range peaks at golden hour above a park lake and historic pavilion",
  },
  "colorado-springs-co": {
    src: "/images/locations/colorado-springs-co-event-rentals.webp",
    alt: "Red sandstone rock formations and pine-covered hills below snowcapped Pikes Peak and the Colorado Springs skyline",
  },
  "fort-collins-co": {
    src: "/images/locations/fort-collins-co-event-rentals.webp",
    alt: "People walking across the brick plaza of Old Town Square in Fort Collins, with shops, string lights and a fountain",
  },
  "boulder-co": {
    src: "/images/locations/boulder-co-event-rentals.webp",
    alt: "Shoppers on Boulder's brick Pearl Street Mall with the Flatirons rising behind historic storefronts",
  },
  "greeley-co": {
    src: "/images/locations/greeley-co-event-rentals.webp",
    alt: "Frame tent with round tables and white chairs on a park lawn among cottonwoods on the plains near Greeley, Colorado",
  },
  "grand-junction-co": {
    src: "/images/locations/grand-junction-co-event-rentals.webp",
    alt: "White frame tent with banquet tables on a park lawn below red sandstone cliffs and mesas near Grand Junction, Colorado",
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
  "englewood-co": {
    src: "/images/locations/englewood-co-event-rentals.webp",
    alt: "Pop-up canopies over round tables with ivory linens and teal and gold balloons beside a park pavilion in Englewood, Colorado",
  },
  "northglenn-co": {
    src: "/images/locations/northglenn-co-event-rentals.webp",
    alt: "Round tables with ivory linens and teal napkins under a park pavilion beside a lake in Northglenn, Colorado",
  },
  "broomfield-co": {
    src: "/images/locations/broomfield-co-event-rentals.webp",
    alt: "Sandbag-weighted frame tent over banquet tables beside a park shelter with the Front Range beyond in Broomfield, Colorado",
  },
  "commerce-city-co": {
    src: "/images/locations/commerce-city-co-event-rentals.webp",
    alt: "Banquet tables with teal and gold decor under a metal park shelter on the plains in Commerce City, Colorado",
  },
  "brighton-co": {
    src: "/images/locations/brighton-co-event-rentals.webp",
    alt: "Frame tent wedding reception with gold chairs, a dance floor and string lights at the edge of farmland in Brighton, Colorado",
  },
  "wheat-ridge-co": {
    src: "/images/locations/wheat-ridge-co-event-rentals.webp",
    alt: "Sandbag-weighted pop-up canopies over rented tables beside a park pavilion under cottonwoods in Wheat Ridge, Colorado",
  },
  "golden-co": {
    src: "/images/locations/golden-co-event-rentals.webp",
    alt: "Sandbag-weighted frame tent with round tables and string lights below a rocky mesa in Golden, Colorado",
  },
  "lone-tree-co": {
    src: "/images/locations/lone-tree-co-event-rentals.webp",
    alt: "Frame tent with round tables beside a park picnic shelter, with grassy bluffs and a trail beyond, in Lone Tree, Colorado",
  },
  "louisville-co": {
    src: "/images/locations/louisville-co-event-rentals.webp",
    alt: "Weighted frame tent with banquet tables beside a park shelter, a small bounce house and a lake in Louisville, Colorado",
  },
  "lafayette-co": {
    src: "/images/locations/lafayette-co-event-rentals.webp",
    alt: "Backyard pole tent with a dance floor, round tables and string lights at golden hour in Lafayette, Colorado",
  },
};
