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
};
