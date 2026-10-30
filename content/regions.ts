// The 10 Colorado regions used by the Atlas/Radar provider research
// (see data/atlas-import/). These are a filtering/reporting label only —
// they do not have their own pages. A provider is discovered through the
// existing city and category pages via `serviceAreas`/`categories`, not
// through a region page.
export type Region = {
  slug: string;
  name: string;
};

export const regions: Region[] = [
  { slug: "denver-metro", name: "Denver Metro" },
  { slug: "colorado-springs", name: "Colorado Springs" },
  { slug: "pueblo", name: "Pueblo" },
  { slug: "greeley", name: "Greeley" },
  { slug: "grand-junction-western-co", name: "Grand Junction & Western CO" },
  { slug: "fort-collins", name: "Fort Collins" },
  { slug: "steamboat-springs", name: "Steamboat Springs" },
  { slug: "loveland-longmont", name: "Loveland & Longmont" },
  { slug: "summit-county-i70-corridor", name: "Summit County / I-70 Corridor" },
  { slug: "other-colorado-areas", name: "Other Colorado Areas" },
];
