import type { Location } from "@/types";

export const locations: Location[] = [
  {
    city: "Denver",
    state: "Colorado",
    stateCode: "CO",
    slug: "denver-co",
    county: "Denver County",
    featured: true,
    nearbyCities: ["aurora-co", "lakewood-co", "arvada-co", "littleton-co", "centennial-co", "westminster-co", "thornton-co"],
    metaDescription:
      "Plan Denver, CO event rentals: tents, tables and chairs, staging and restrooms, plus park permit, Office of Special Events and fire permit rules.",
    heroSupportingCopy:
      "Find event rental companies serving Denver. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Where an event happens decides most of the paperwork in Denver. A private party at home is simple; a public event in a park or on a street runs through Denver Parks and Recreation, the Office of Special Events and the Fire Department.",
    categoriesIntro:
      "Explore the rental categories most used for Denver weddings, park picnics, community festivals, corporate events and backyard parties.",
    localIntro: [
      "Denver anchors the metro area, and event rental companies based in neighboring cities may also serve Denver addresses. Event Rental Finder helps you compare rental categories and plan the details of your event; service areas, delivery terms and availability are set by each company, so confirm them directly before you book.",
      "In a Denver park, the permit depends on who is invited. Denver Parks and Recreation issues picnic permits for private, invitation-only gatherings and says public events such as festivals, fundraisers and concerts are not allowed on a picnic permit. Under a picnic permit the City allows up to two 10-by-10 pop-up tents and prohibits inflatables, bounce houses, food trucks and event infrastructure, so a full tent, staging or bounce house order needs a different permit type. The City describes Special Occasion permits as the option for private, invitation-only events in parks, including at the Cheesman Park Pavilion.",
      "Public events on City property go through the Office of Special Events. According to the City's checklist, an Office of Special Events Permit is required when an event is open to the public, held on public property such as a park, street, sidewalk or alley, and meets two or more listed triggers. Those include a location in a park, tents larger than 200 square feet, generators over 5 kW, stages or structures, and the sale of tickets, food or alcohol. The application is due at least 60 days before setup begins. The City's planning guide says weddings, picnics, reunions, block parties and events on private property do not need one, and that submitting the application does not reserve park space; a separate Parks and Recreation permit is required, and the City says to get the preliminary park permit first.",
      "The Denver Fire Department adds its own layer. Its event guidelines require permits for tents of 200 square feet or larger and canopies of 400 square feet or larger, with a flame-resistance certification, a site plan showing distances to buildings, streets and parking, a floor plan of seating and exits, and at least one serviced 2A:10BC fire extinguisher. No heating or cooking is allowed in tents or canopies, and no propane or flammable liquids may be stored in them. Generators over 5 kW also need a fire permit. Ask your rental provider how they handle flame certificates and who files the paperwork before you settle on a tent size.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Denver",
      intro:
        "Common Denver setups and the City rules that come with them.",
      items: [
        {
          title: "Picnic-Permit Parties in Parks",
          description:
            "A picnic permit covers private, invitation-only gatherings and allows up to two 10-by-10 pop-up tents. Inflatables, bounce houses, food trucks and event infrastructure are not allowed, so a [bounce house](/categories/inflatable-rentals) or a large tent calls for a different permit. Check the picnic site's capacity before you count chairs.",
          categorySlug: "party-rentals",
        },
        {
          title: "Weddings & Private Park Events",
          description:
            "Private, invitation-only events in parks fall under the City's Special Occasion permits. Because the rules differ by park and permit type, confirm what the park allows before you order a tent, arch or seating, then look at [wedding rentals](/categories/wedding-rentals) that fit the site.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents Over 200 Square Feet",
          description:
            "The Fire Department requires a permit for tents of 200 square feet or larger, along with flame-resistance certification and a site plan. Ask your provider for the tent's certificate early, since the City needs it with the application.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Public Festivals & Community Events",
          description:
            "Open-to-the-public events on City property can need an Office of Special Events Permit, applied for at least 60 days before setup, plus a separate park permit. Staging, sound and lighting orders should wait until the permit path is clear.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Food Trucks & Vendor Rows",
          description:
            "Under the Fire Department's guidelines, food trucks need an annual fire permit, are limited to 80 pounds of propane and must be spaced 10 feet apart bumper to bumper. Cooking is not allowed under tents, canopies or in booths, so plan vendor space and [table and chair](/categories/table-chair-rentals) layouts around that.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Restrooms in Parks",
          description:
            "Denver says restroom availability in its parks is not guaranteed; plumbed restroom buildings close for the winter, and portable toilets are removed from parks in winter months. For a larger gathering, ask about [restroom trailers](/categories/restroom-trailer-rentals) and accessible units early.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Denver",
      intro:
        "City rules and local conditions that most often change a Denver rental plan.",
      items: [
        "Who is invited: picnic and Special Occasion permits are for private, invitation-only events, and public events follow a different path",
        "Picnic-permit limits: up to two 10-by-10 pop-up tents, with no inflatables, bounce houses, food trucks or event infrastructure",
        "Office of Special Events Permits for public events on public property that meet two or more of the City's checklist items, applied for at least 60 days before setup",
        "A separate Parks and Recreation permit for any park event, since the Office of Special Events application does not reserve park space",
        "Fire permits for tents of 200 square feet or larger and canopies of 400 square feet or larger, with flame certification and a site plan",
        "No heating or cooking in tents or canopies, and no propane or flammable liquids stored inside",
        "Fire permits for generators over 5 kW, and no refueling generators or propane cylinders while the event is open to the public",
        "Food trucks, which need an annual fire permit and are limited to 80 pounds of propane",
        "Restroom access in parks, which the City does not guarantee, especially in winter months",
        "Each provider's delivery area, setup windows, pricing and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City and County of Denver's Picnic Permits, Special Occasion and Public Event Permits pages, the Office of Special Events planning guide and permit checklist, and the Denver Fire Department's event guidelines. Rules change by park, permit type and season, so confirm current requirements with Denver Parks and Recreation, the Office of Special Events, the Fire Department and your rental provider.",
      closing:
        "Sizing a tent against the 200-square-foot line? See [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). For food trucks at your event, see our [Colorado event food vendor guide](/resources/colorado-event-food-vendor-guide), and for alcohol service, the [Colorado special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide).",
    },
    checklist: {
      heading: "Denver Event Rental Checklist",
      intro:
        "Have these details ready before you request quotes from Denver providers:",
      items: [
        "Venue: private property, picnic site, park or street",
        "Private invitation-only or open to the public",
        "Peak guest count and the site's capacity",
        "Park permit type and any Office of Special Events permit",
        "Tent size and flame-resistance certificate (200 square feet or larger needs a fire permit)",
        "Generator size, propane and cooking plans",
        "Seating, linens and serving tables",
        "Lighting, sound and power",
        "Restrooms and accessible units",
        "Delivery, setup and pickup windows",
      ],
    },
    faqs: {
      heading: "Denver Event Rental FAQ",
      items: [
        {
          question:
            "Do I need a permit for a party in a Denver park?",
          answer:
            "If you want exclusive use of a picnic site for a private, invitation-only gathering, Denver requires a picnic permit. Public events, such as festivals or fundraisers, are not allowed on a picnic permit and go through a different park permit and, in many cases, the Office of Special Events.",
        },
        {
          question:
            "Can I rent a bounce house for a Denver park picnic?",
          answer:
            "Not under a picnic permit. The City lists inflatables and bounce houses as strictly prohibited at picnic sites, and picnic permits allow up to two 10-by-10 pop-up tents. Ask Denver Parks and Recreation which permit type fits a larger setup before you order.",
        },
        {
          question:
            "Do I need a permit for a tent in Denver?",
          answer:
            "The Denver Fire Department's event guidelines require a permit for tents of 200 square feet or larger and canopies of 400 square feet or larger, with a flame-resistance certification and a site plan. Ask your rental provider who files the application.",
        },
        {
          question:
            "When do I apply for an Office of Special Events Permit?",
          answer:
            "The City says to submit the application at least 60 days before the first day of event setup. For park events, get the preliminary Parks and Recreation permit first, because the Office of Special Events application does not reserve park space.",
        },
        {
          question:
            "Do food trucks at my Denver event need permits?",
          answer:
            "The Fire Department says food trucks at events need a current fire permit and are limited to 80 pounds of propane. Event coordinators are responsible for confirming each vendor has the permits they need.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Denver?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings, parties and events across Denver and the metro area.",
    },
  },
  {
    city: "Colorado Springs",
    state: "Colorado",
    stateCode: "CO",
    slug: "colorado-springs-co",
    county: "El Paso County",
    featured: true,
    nearbyCities: [
      "monument-co",
      "manitou-springs-co",
      "woodland-park-co",
      "fountain-co",
      "pueblo-co",
      "castle-rock-co",
    ],
    metaDescription:
      "Plan event rentals in Colorado Springs, CO: tents, tables and chairs, wedding and party rentals, staging and AV, plus park permits, the 2,400-square-foot tent rule, summer storms and nearby Pikes Peak towns.",
    heroSupportingCopy:
      "Find local event rental companies serving Colorado Springs and the Pikes Peak region. Explore tents, tables and chairs, wedding rentals, inflatables, photo booths, restroom trailers, staging, AV and more.",
    heroTagline:
      "Colorado Springs anchors the Pikes Peak region, and planning an event here starts with a few local rules: park permits above 50 guests, noise permits for amplified sound and a fire permit for large tents.",
    categoriesIntro:
      "Explore the rental categories most used for Colorado Springs weddings, park events, graduations, corporate gatherings and backyard parties.",
    localIntro: [
      "Colorado Springs is El Paso County's largest city and a natural starting point for planning events anywhere in the Pikes Peak region. Event Rental Finder helps you compare local rental options for weddings, parties, corporate events and community gatherings, then reach out to providers about availability, delivery and pricing for your date.",
      "The towns around the city each plan a little differently: [Monument](/locations/monument-co), on the Palmer Divide, requires a separate temporary use permit for tents; [Manitou Springs](/locations/manitou-springs-co) is the historic wedding town just west, with its own park permit timeline; [Woodland Park](/locations/woodland-park-co) brings 8,465-foot weather and a Forest Service permit for gatherings of 75 or more on national forest land; [Fountain](/locations/fountain-co) parks require tents weighted rather than staked; [Pueblo](/locations/pueblo-co) is lower and hotter, with Riverwalk and park venues; and [Castle Rock](/locations/castle-rock-co) covers Douglas County events on the way to Denver.",
      "Inside the city, parks have clear thresholds. If you expect more than 50 people, you'll need to rent a pavilion or apply for a park Special Event Permit, and any amplified sound needs a Noise Hardship Permit. The City's park permit guide also routes bounce houses and equipment setups like tents, chairs and stages to a Special Event Permit, with applications due 30 days before the event, and it bans hanging decorations on park trees and structures.",
      "Garden of the Gods, a City park, allows only small, brief wedding ceremonies at six first-come areas, with no tables, tents, arches or decorations and no Noise Hardship Permits for weddings. Anywhere in the city, the Fire Marshal's office requires a permit before tents, canopies or membrane structures larger than 2,400 square feet go up, counting structures attached to each other as one.",
      "Summer storms are the main weather factor. NOAA's 1991–2020 normals for the Colorado Springs airport make July the wettest month, at 3.12 inches, with an average high of 86.5°F. The National Weather Service says there's no safe place outside when thunderstorms are in the area, so plan where guests can go: a substantial building or hard-topped vehicles, not a tent or picnic shelter.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Colorado Springs",
      intro:
        "Common Colorado Springs setups and the city rules that come with them.",
      items: [
        {
          title: "Weddings Across the Region",
          description:
            "A wedding here might pair a brief park ceremony with a reception at a private property or rented hall. The reception site usually needs the full kit: seating, linens, lighting, a [dance floor](/categories/dance-floor-rentals) and often a tent.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Park Events Over 50 Guests",
          description:
            "Once a park gathering tops 50 people, you'll need a pavilion rental or a Special Event Permit, and the City's guide treats bringing in tents, chairs or stages as an equipment setup that needs the Special Event Permit. Settle the permit before you order seating.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Large Tents & the 2,400-Square-Foot Rule",
          description:
            "A tent, or a group of attached tents, larger than 2,400 square feet needs a Fire Marshal permit before it goes up. A 40-by-60 tent is exactly 2,400 square feet, so anything bigger falls into the permit range; ask your provider who handles the application.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Backyard & Graduation Parties",
          description:
            "Backyard parties for graduations and summer birthdays usually call for tables, chairs, a canopy and maybe a [bounce house](/categories/inflatable-rentals). In a city park, an inflatable needs a Special Event Permit rather than a pavilion reservation.",
          categorySlug: "party-rentals",
        },
        {
          title: "Corporate & Community Events",
          description:
            "Company picnics, fundraisers and community events may need a stage, sound and [lighting](/categories/av-lighting-rentals). Amplified sound in a city park needs a Noise Hardship Permit, which the City's park guide says to request 30 days ahead.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Restrooms for Long Events",
          description:
            "Not every park site has restrooms or power close by, so check the pavilion listing before you plan. Restroom trailers and portable units cover sites without plumbing, and accessible units should be part of the order.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Colorado Springs",
      intro:
        "City rules and local conditions that most often change a Colorado Springs rental plan.",
      items: [
        "Whether a park event tops 50 guests and needs a pavilion rental or a park Special Event Permit",
        "A Noise Hardship Permit for any amplified sound, requested about 30 days ahead",
        "Special Event Permit applications, due 30 days before the event",
        "Bounce houses and equipment setups (tents, chairs, stages) in parks, which the City's guide routes to a Special Event Permit",
        "A Fire Marshal permit for any tent, or attached tents, over 2,400 square feet",
        "Garden of the Gods limits: brief ceremonies only, with no tables, tents, arches or decorations",
        "July storms, and a lightning plan with a building or hard-topped vehicles nearby",
        "No decorations hung on park trees or structures",
        "Which town the event is actually in, since Monument, Manitou Springs, Woodland Park, Fountain and Pueblo each have their own rules",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Colorado Springs' Weddings in Parks page, park permit guide and Fire Department tent guidance, plus NOAA climate normals. Confirm current rules with the City's Parks and Fire departments and your rental provider.",
      closing:
        "Sizing a tent around the 2,400-square-foot line? See [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). For storms, wind, altitude and permits across the region, see our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for weddings, the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist).",
    },
    checklist: {
      heading: "Colorado Springs Event Rental Checklist",
      intro:
        "Have these details ready before you request quotes from Colorado Springs providers:",
      items: [
        "Venue: park, private property or rented hall",
        "Peak guest count (over 50 matters in parks)",
        "Pavilion reservation or Special Event Permit",
        "Noise Hardship Permit for amplified sound",
        "Tent size (over 2,400 sq ft needs a fire permit)",
        "Seating, linens and serving tables",
        "Lighting and power",
        "Restrooms and accessible units",
        "Storm and lightning plan",
        "Delivery and pickup windows",
      ],
    },
    faqs: {
      heading: "Colorado Springs Event Rental FAQ",
      items: [
        {
          question:
            "Do I need a permit for a party in a Colorado Springs park?",
          answer:
            "If you expect more than 50 people, rent a pavilion or apply for a park Special Event Permit. The City's permit guide also routes bounce houses, vendors and equipment setups like tents and stages to a Special Event Permit, with applications due 30 days ahead.",
        },
        {
          question: "Do I need a permit for a tent in Colorado Springs?",
          answer:
            "The Fire Marshal's office requires a permit before you put up a tent, canopy or membrane structure larger than 2,400 square feet, counting attached structures together. Ask your rental provider whether they handle the application.",
        },
        {
          question: "Can I have amplified music at a park event?",
          answer:
            "Any amplified sound in a city park needs a Noise Hardship Permit, and the City's park guide says to request it 30 days before the event. Garden of the Gods doesn't grant Noise Hardship Permits for weddings.",
        },
        {
          question: "Can I hold a wedding reception at Garden of the Gods?",
          answer:
            "Only as a picnic at the Scotsman or South Spring Canyon picnic areas. Tables, tents, arches and decorations aren't allowed, so plan the reception at a separate site; our [Manitou Springs page](/locations/manitou-springs-co) covers that setup.",
        },
        {
          question:
            "When is storm season for outdoor events in Colorado Springs?",
          answer:
            "NOAA's 1991–2020 normals make July the wettest month at the Colorado Springs airport, with August close behind. Book a tent with sidewalls for summer dates and know where guests will shelter if lightning moves in.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Colorado Springs?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings, parties and events across Colorado Springs and the Pikes Peak region.",
    },
  },
  {
    city: "Fort Collins",
    state: "Colorado",
    stateCode: "CO",
    slug: "fort-collins-co",
    county: "Larimer County",
    featured: true,
    nearbyCities: ["loveland-co", "greeley-co", "windsor-co"],
    metaDescription:
      "Plan Fort Collins, CO event rentals: tents, tables and chairs, staging and restrooms, plus park shelter, special event and Poudre Fire Authority tent rules.",
    heroSupportingCopy:
      "Find event rental companies serving Fort Collins and Northern Colorado. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Most Fort Collins events fall into one of three buckets: a drop-in shelter picnic, a reserved shelter or park event, or a larger public event that runs through the City's Special Event Permit and Poudre Fire Authority tent rules.",
    categoriesIntro:
      "Explore the rental categories most used for Fort Collins weddings, park shelter parties, community events, corporate gatherings and backyard celebrations.",
    localIntro: [
      "Fort Collins is one of several close-together Northern Colorado markets, and providers based in nearby [Loveland](/locations/loveland-co), [Windsor](/locations/windsor-co) or [Greeley](/locations/greeley-co) may also serve Fort Collins addresses. Event Rental Finder helps you compare rental categories and plan the details; service areas, delivery terms and availability are set by each company, so confirm them directly.",
      "The City of Fort Collins requires a Special Event Permit for events on City streets, sidewalks, parks or natural areas, and says private events on private property that do not close streets or affect traffic do not need one. Applications call for a site plan, insurance for most large events, races, alcohol events and events with rides or attractions (including bounce houses), and a signed reimbursement and indemnification agreement. The City says not to advertise an event until its permit is approved. For events inside a park, the City's parks pages describe a separate Park Event Permit, and the City's own pages give different attendance thresholds for when each applies, so call the Parks Division at 970-221-6660 before you set a guest count against a permit.",
      "Park shelters are the usual starting point for a private party. Most shelters are drop-in only, capped at 50 or fewer people, and do not allow bounce houses or food trucks. Some shelters can be reserved from mid-March through the end of October, one group per day, by phone; the Parks Division begins taking reservation requests in January, and the City lists capacities from 50 to 200 people. Alcohol, glass and smoking are not allowed at park shelters. Parking or driving on turf is prohibited, so ask the Parks Office for loading instructions before a tent or table delivery.",
      "For tents, the City points to Poudre Fire Authority: a PFA tent permit is required for tents or air-supported structures over 400 square feet (20 by 20 feet) and for any canopy over 700 square feet. For smaller setups near a park shelter, the City's shelter guidelines allow personal lawn chairs and small pop-up tents that are not staked; staking deeper than 6 inches requires utility line locates arranged two weeks before the event. A Park Event Permit, obtained at least 10 days ahead, is required for amplified sound, inflatables or other apparatuses (with a $1 million certificate of liability insurance), and food trucks.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Fort Collins",
      intro:
        "Common Fort Collins setups and the City rules that come with them.",
      items: [
        {
          title: "Shelter Parties & Reunions",
          description:
            "Drop-in shelters are first come, first served and capped at 50, while reservable shelters hold between 50 and 200 people. Match [table and chair](/categories/table-chair-rentals) counts to the shelter you booked, and ask the Parks Office how to handle delivery since vehicles cannot drive onto turf.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Backyard Weddings & Receptions",
          description:
            "A private wedding on private property that does not close streets or affect traffic does not need a City Special Event Permit, according to the City. A tent over 400 square feet still needs a Poudre Fire Authority permit, so settle the footprint early with your [wedding rental](/categories/wedding-rentals) provider.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents & Canopies",
          description:
            "Poudre Fire Authority requires a permit for tents or air-supported structures over 400 square feet and for any canopy over 700 square feet. Ask your provider for the tent's flame-resistance documentation before you commit to a size.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses & Inflatables in Parks",
          description:
            "The City's shelter pages do not allow bounce houses at drop-in shelters, and elsewhere in parks inflatables need a Park Event Permit and a $1 million certificate of liability insurance. Ask your [inflatable](/categories/inflatable-rentals) provider early which insurance paperwork they can supply.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Festivals & Community Events",
          description:
            "Events with street closures, alcohol or larger crowds fall under the City's Special Event Permit, which requires a site plan, insurance for most large events and a signed reimbursement agreement. Staging, sound and lighting orders should wait until the permit path is confirmed.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Food Vendors & Food Trucks",
          description:
            "The City requires each event vendor to hold a Fort Collins sales tax license and a Larimer County Health and Environment temporary event vendor application, and event organizers submit a temporary event coordinator application to the county. Food trucks need an annual Poudre Fire Authority permit, and the City removes non-compliant trucks from events.",
          categorySlug: "party-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Fort Collins",
      intro:
        "City rules and local conditions that most often change a Fort Collins rental plan.",
      items: [
        "Special Event Permits for events on City streets, sidewalks, parks or natural areas, and which route your event falls under",
        "Park Event Permits, which the City says must be obtained at least 10 days ahead for amplified sound, inflatables and food trucks",
        "Conflicting attendance thresholds on the City's own park pages, so confirm your guest count with the Parks Division",
        "Shelter limits: drop-in shelters cap at 50, and reservable shelters hold 50 to 200 people",
        "Poudre Fire Authority tent permits for tents over 400 square feet and canopies over 700 square feet",
        "No driving or parking on park turf, and unstaked pop-up tents only unless the City approves otherwise",
        "Utility locates for staking deeper than 6 inches, arranged two weeks ahead",
        "Alcohol, glass and smoking rules at parks and shelters",
        "Food vendor requirements: a Fort Collins sales tax license, a Larimer County temporary event application, and an annual PFA permit for food trucks",
        "Each provider's delivery area, setup windows, pricing and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Fort Collins' Special Event Permits, Special Event Permit FAQs, Field Reservations and Shelter Rentals, and Parks Rules and Regulations pages. The City's pages give different attendance thresholds for Park Event and Special Event Permits, different counts of reservable shelters, and different lists of parks where alcohol permits are allowed, so confirm current rules with the Fort Collins Parks Division, Special Events office and Poudre Fire Authority.",
      closing:
        "Sizing a tent around the 400-square-foot line? See [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). For wind, weather and altitude, see our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for bounce houses, the [Colorado bounce house and party rental guide](/resources/colorado-inflatable-and-party-rental-guide).",
    },
    checklist: {
      heading: "Fort Collins Event Rental Checklist",
      intro:
        "Have these details ready before you request quotes from Fort Collins providers:",
      items: [
        "Venue: private property, drop-in shelter, reserved shelter or other public property",
        "Peak guest count against the shelter's listed capacity",
        "Special Event Permit or Park Event Permit, if needed",
        "Tent size (over 400 square feet needs a Poudre Fire Authority permit)",
        "Surface and staking plan (no staking deeper than 6 inches without locates)",
        "Inflatable insurance paperwork",
        "Seating, linens and serving tables",
        "Power, lighting and sound",
        "Restrooms and accessible units",
        "Delivery, setup and pickup windows",
      ],
    },
    faqs: {
      heading: "Fort Collins Event Rental FAQ",
      items: [
        {
          question:
            "Do I need a permit for a tent in Fort Collins?",
          answer:
            "Poudre Fire Authority requires a tent permit for tents or air-supported structures over 400 square feet (20 by 20 feet) and for any canopy over 700 square feet. Ask your rental provider who files the application.",
        },
        {
          question:
            "Do I need a permit for a party in a Fort Collins park?",
          answer:
            "Reserving a shelter covers a private party within the shelter's capacity, but the City says a Park Event Permit is required for amplified sound, inflatables and food trucks, obtained at least 10 days ahead. The City's pages give different attendance thresholds, so call the Parks Division at 970-221-6660.",
        },
        {
          question:
            "Can I put a bounce house at a Fort Collins park shelter?",
          answer:
            "Not at drop-in shelters, where the City says bounce houses and food trucks are not allowed. Elsewhere in parks, inflatables need a Park Event Permit and a $1 million certificate of liability insurance.",
        },
        {
          question:
            "Can I serve alcohol at a Fort Collins park?",
          answer:
            "The City says alcohol is not allowed at park shelters or in parks except under a special event liquor permit from the Liquor Licensing Authority, and only 501(c)(3) nonprofits can get one. Check the City's current list of permitted parks before you plan.",
        },
        {
          question:
            "Do I need a Special Event Permit for a private party on private property?",
          answer:
            "The City says private events on private property that do not close streets or affect traffic flow do not need a Special Event Permit. Tent permits and vendor requirements can still apply.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Fort Collins?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings, parties and events across Fort Collins and Northern Colorado.",
    },
  },
  {
    city: "Boulder",
    state: "Colorado",
    stateCode: "CO",
    slug: "boulder-co",
    county: "Boulder County",
    featured: true,
    nearbyCities: ["arvada-co", "westminster-co", "longmont-co", "erie-co"],
    metaDescription:
      "Plan Boulder, CO event rentals: tents, tables and chairs, staging and restrooms, plus park shelter, special event permit and tent permit rules.",
    heroSupportingCopy:
      "Find event rental companies serving Boulder and the surrounding Boulder County communities. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Boulder's rules turn on size and location: how many people, whether a tent has walls, and whether the event is on a private lot, in a reserved park shelter or open to the public on City property.",
    categoriesIntro:
      "Explore the rental categories most used for Boulder weddings, park shelter parties, community events, corporate gatherings and backyard celebrations.",
    localIntro: [
      "Boulder sits in Boulder County, and events here often cross city lines. Longmont, Erie, Westminster and Arvada each run their own permit offices, so confirm which city the event is actually in before you plan around Boulder's rules. Event Rental Finder helps you compare rental categories and plan the details; delivery areas, pricing and availability are set by each rental company.",
      "For events on public property, the City of Boulder requires a Special Event Permit for planned and promoted public activities that meet any of these criteria: 50 or more expected participants and spectators, tents, structures or sound amplification, food or alcohol provided to the public, or use of public rights-of-way. The City's handbook says private park reservations, advocacy activities, film permits and events on private property do not need one. The handbook sets a timeline: initial application and event concept 364 to 120 days ahead, alcohol applications 40 days ahead, tent and generator applications 30 days ahead, and final insurance certificates and production schedules 14 days ahead.",
      "City park shelters are the simple route for a private party. Shelters can be reserved from the first weekend in May through Labor Day, online reservations open each January 15, and reservations run from 11 a.m. to 8 p.m. The City limits shelter reservations to private, invitation-only events and does not approve activities involving financial gain, including ticketed events, fundraisers or commercial use. Listed capacities include 50 per shelter at Foothills Community Park, 100 at Martin Park, and 250 each at Harlow Platts Park and North Boulder Park. Third-party structures that need stakes or a generator, such as a bounce castle or climbing wall, are not allowed at neighborhood or community parks unless the event has a Special Event Permit.",
      "Tents have their own thresholds. The City's temporary event guide exempts tents with walls up to 400 square feet and tents open on all sides up to 700 square feet, counting multiple open tents placed side by side together. Anything larger needs a permit, and flame certification is required for tents. On private property the City uses a Temporary Event Conditional Use application; on public property an approved Special Event Permit is part of the final approval.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Boulder",
      intro:
        "Common Boulder setups and the City rules that come with them.",
      items: [
        {
          title: "Park Shelter Parties",
          description:
            "A reserved shelter works for private, invitation-only birthdays, reunions and showers within the shelter's listed capacity. [Table and chair](/categories/table-chair-rentals) counts should stay under that limit, and the City says electricity is not guaranteed with a shelter reservation.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Weddings & Receptions",
          description:
            "Boulder weddings mix park ceremonies, private venues and backyard receptions, and each carries different rules. At Chautauqua Park, groups of 51 to 100 on the manicured lawn need a large group permit and wedding or memorial events must wrap up by 5:00 p.m., so many couples plan the reception at a separate site with a full [wedding rental](/categories/wedding-rentals) setup.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents With and Without Walls",
          description:
            "The City exempts tents with walls up to 400 square feet and open-sided tents up to 700 square feet from a permit. A sidewalled tent crosses the line far sooner than an open canopy, so tell your provider if you want walls before settling on a size.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Tents on Park Turf",
          description:
            "On park turf the City requires weights for vendor booths and tents unless it approves stakes in writing, and it recommends at least 40 pounds on each corner of a 10-by-10 tent and double that for a 10-by-20. Ask your provider how they ballast a tent on grass.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Community Events & Festivals",
          description:
            "Open-to-the-public events on City property, including food or alcohol service, usually need a Special Event Permit, and the handbook's timeline starts as early as a year out. Staging, sound and lighting orders should wait until the permit path is confirmed.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Kids' Parties & Bounce Houses",
          description:
            "At neighborhood and community parks, the City does not allow third-party structures that need stakes or a generator, such as a bounce castle, unless the event has a Special Event Permit. On private property the park rules do not apply, though tents and generators can still need temporary event approval under the thresholds above. Ask your [inflatable](/categories/inflatable-rentals) provider how they anchor and power a unit.",
          categorySlug: "inflatable-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Boulder",
      intro:
        "City rules and local conditions that most often change a Boulder rental plan.",
      items: [
        "Special Event Permits for public events on City property with 50 or more people, tents, structures, amplified sound, food or alcohol",
        "The City's application timeline, which starts 364 to 120 days ahead for the initial application and 30 days ahead for tents",
        "Tent permit thresholds: tents with walls over 400 square feet and open-sided tents over 700 square feet, including side-by-side tents",
        "Flame certification for tents, and a generator specification sheet for generators",
        "Park shelter rules: private, invitation-only events from the first weekend in May through Labor Day, 11 a.m. to 8 p.m.",
        "Shelter capacities, such as 50 per shelter at Foothills, 100 at Martin Park and 250 at Harlow Platts and North Boulder Park",
        "Weights instead of stakes on park turf unless the City approves stakes in writing",
        "Park hours: Boulder city parks are closed from 11 p.m. to 5 a.m., and special event equipment left overnight needs a security plan",
        "Glass and smoking, which are prohibited in Boulder parks, and alcohol, which needs a permit on public land",
        "Each provider's delivery area, setup windows, pricing and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Boulder's Special Events pages and handbook, Park Shelter Reservations page, Temporary Event Application guide and park special event guidelines. The City's pages give different lead times for large event approvals, so confirm timing with the Office of Special Events, Boulder Parks and Recreation and your rental provider.",
      closing:
        "Choosing between a walled and an open tent? See [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). For weather, wind and altitude, see our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for weddings, the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist).",
    },
    checklist: {
      heading: "Boulder Event Rental Checklist",
      intro:
        "Have these details ready before you request quotes from Boulder providers:",
      items: [
        "Venue: private property, reserved park shelter or public property",
        "Private invitation-only or open to the public",
        "Peak guest count against the shelter's listed capacity",
        "Special Event Permit, if the event is public",
        "Tent size, and whether it will have walls",
        "Flame certification for the tent",
        "Ballast plan for tents on turf",
        "Seating, linens and serving tables",
        "Power, lighting and sound",
        "Restrooms and accessible units",
        "Delivery, setup and pickup windows",
      ],
    },
    faqs: {
      heading: "Boulder Event Rental FAQ",
      items: [
        {
          question:
            "Do I need a permit for a tent in Boulder?",
          answer:
            "The City's temporary event guide exempts tents with walls up to 400 square feet and tents open on all sides up to 700 square feet, with multiple open tents counted together. Larger tents need a permit, and flame certification is required for tents. Ask your provider who files the application.",
        },
        {
          question:
            "Do I need a Special Event Permit for a party in a Boulder park?",
          answer:
            "A private, invitation-only party in a reserved shelter does not need one, according to the City's handbook. A public activity on public property needs one if it has 50 or more participants and spectators, tents or sound amplification, food or alcohol for the public, or affects public rights-of-way.",
        },
        {
          question:
            "When can I reserve a Boulder park shelter?",
          answer:
            "The City says shelters are reservable from the first weekend in May through Labor Day, with online reservations opening each January 15. Reservations run from 11 a.m. to 8 p.m. and are limited to private, invitation-only events.",
        },
        {
          question:
            "Can I put a bounce house in a Boulder park?",
          answer:
            "At neighborhood and community parks, the City says third-party structures that need stakes or a generator, such as a bounce castle or climbing wall, are not allowed unless the event is under a Special Event Permit.",
        },
        {
          question:
            "Can I stake a tent into park turf?",
          answer:
            "The City requires weights for tents on turf unless Boulder Parks and Recreation approves stakes in writing. If stakes are approved, the applicant coordinates utility locates, and stakes longer than 36 inches are prohibited.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Boulder?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings, parties and events across Boulder and Boulder County.",
    },
  },
  {
    city: "Greeley",
    state: "Colorado",
    stateCode: "CO",
    slug: "greeley-co",
    county: "Weld County",
    featured: true,
    nearbyCities: ["fort-collins-co", "loveland-co", "windsor-co"],
    metaDescription:
      "Plan Greeley, CO event rentals: tents, tables and chairs, staging and restrooms, plus Island Grove, park, public space and alcohol permit rules.",
    heroSupportingCopy:
      "Find event rental companies serving Greeley and Weld County. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Greeley events tend to run through one of a few City offices: Culture, Parks and Recreation for parks and Island Grove Regional Park, Public Works for streets and plazas, and the City Clerk when alcohol is served at a public event.",
    categoriesIntro:
      "Explore the rental categories most used for Greeley weddings, Island Grove events, community gatherings, corporate events and backyard celebrations.",
    localIntro: [
      "Greeley is in Weld County and sits close to Fort Collins, Loveland and Windsor, so providers based in neighboring cities may also serve Greeley addresses. Event Rental Finder helps you compare rental categories and plan the details; service areas, delivery terms and availability are set by each company, so confirm them directly.",
      "The City of Greeley routes event permits by location and activity. Events in City parks are arranged through Culture, Parks and Recreation. Events on streets, plazas or other City rights-of-way go through Public Works, which now takes Public Space Event permit applications through its eTrakit portal; the City's old Revocable Event Permit form is marked no longer valid. If alcohol will be served at a public event, a Special Event Permit must be filed through the City Clerk's Office. The City's checklist says the complete packet must be filed at least 30 days before the event, lists a $100-per-day fee, and requires a notice posted at the event location for 10 consecutive days. The City's application describes qualifying applicants as nonprofits of listed types.",
      "Island Grove Regional Park, a City of Greeley and Weld County facility, hosts many of the area's larger events, and the City's Island Grove Rules Handbook (revised March 11, 2026) sets clear rules for rental equipment. Canopies are allowed in the park areas but must be weighed down, and stakes are not permitted. Bounce houses are allowed indoors and outdoors but must come from a licensed rental company, which must contact the Scheduling Office at least two weeks before the reservation date, and they must be weighed down rather than staked. Piñatas, mechanical bulls and water balloons are not permitted in the park areas, glass containers are not allowed, and electrical hookups must be made by a licensed electrical contractor.",
      "Food, alcohol and fire rules also apply at Island Grove. Food vendors at public events must contact the Scheduling Office at least two weeks ahead and be approved, and alcohol may only be served or sold by the park's licensed liquor concessionaire or through a special event permit. Professional security is required for events serving alcohol, and outside alcohol is prohibited. The handbook says a Fire Department permit and plan review are required for events held at the park, and open flames, fireworks and outdoor liquid petroleum gas need Fire Department permits. For tents elsewhere in Greeley, the City's Fire Prevention Bureau handles permits through eTRAKiT, but its permit page does not list tent size thresholds, so ask the Bureau at 970-350-9510 if your tent needs one.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Greeley",
      intro:
        "Common Greeley setups and the City rules that come with them.",
      items: [
        {
          title: "Island Grove Events",
          description:
            "Island Grove rentals come with their own rules: canopies must be weighed down, stakes are not permitted, and the Fire Department requires a permit and plan review for events at the park. Ask your provider how they anchor [tents](/categories/tent-rentals) without stakes.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses & Party Rentals",
          description:
            "Island Grove allows bounce houses indoors and outdoors if they come from a licensed rental company, which must contact the Scheduling Office at least two weeks ahead. Units must be weighed down; stakes are prohibited.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Weddings & Receptions",
          description:
            "Greeley weddings can happen at private property, at Island Grove or at a rented hall. Decorations at Island Grove facilities exclude nails, tacks, confetti and glitter, so plan [wedding rentals](/categories/wedding-rentals) and decor around the venue's handbook.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Fairs, Festivals & Public Events",
          description:
            "Public events at Island Grove require approved food vendors, a Fire Department permit and, when alcohol is served, the licensed concessionaire or a special event permit. Staging, sound and lighting orders should wait until those pieces are confirmed.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Events with Alcohol",
          description:
            "The City Clerk's Office handles Special Event Permits for alcohol at public events, and the City's checklist asks for the packet at least 30 days ahead. Place [table and chair](/categories/table-chair-rentals) layouts around the licensed area shown on your floor diagram.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Large Gatherings & Restrooms",
          description:
            "For a large Island Grove event, ask early about [restroom trailers](/categories/restroom-trailer-rentals) and accessible units and what the venue already provides. Rental periods end when all occupants have exited and doors are locked, so schedule pickup around the facility's closing time.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Greeley",
      intro:
        "City rules and local conditions that most often change a Greeley rental plan.",
      items: [
        "Which office handles the event: Culture, Parks and Recreation for parks, Public Works for streets and plazas, the City Clerk for alcohol",
        "Special Event Permits for alcohol at public events, filed at least 30 days ahead with the City Clerk",
        "Public Space Event permits through Public Works eTrakit for streets, plazas and other City rights-of-way",
        "Island Grove rules: weighted canopies, no stakes, licensed bounce house companies and two weeks' notice to the Scheduling Office",
        "Fire Department permits and plan review for events at Island Grove Regional Park",
        "Professional security and licensed concessionaire requirements for alcohol at Island Grove",
        "Food vendor approval, requested at least two weeks ahead at Island Grove",
        "Tent permit questions, which should go to the Fire Prevention Bureau at 970-350-9510",
        "Facility hours and vacate times at Island Grove, since the rental period begins when the facility opens for the lessee",
        "Each provider's delivery area, setup windows, pricing and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Greeley's Island Grove Rules Handbook (revised March 11, 2026), Special Event Permit checklist, Liquor Licensing page, Public Space Permitting page and Fire Prevention Bureau permits page. The City's pages did not list tent size thresholds, and the handbook gives two different insurance-certificate deadlines (30 days and two weeks), so confirm current requirements with the City and your rental provider.",
      closing:
        "Planning a tent for Island Grove? See [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). For alcohol service, see our [Colorado special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide), and for food vendors, the [Colorado event food vendor guide](/resources/colorado-event-food-vendor-guide).",
    },
    checklist: {
      heading: "Greeley Event Rental Checklist",
      intro:
        "Have these details ready before you request quotes from Greeley providers:",
      items: [
        "Venue: private property, Island Grove, City park or street",
        "Which City office handles the event",
        "Peak guest count",
        "Special Event Permit, if alcohol will be served",
        "Tent size and anchoring plan (no stakes at Island Grove)",
        "Inflatable provider and Scheduling Office notice",
        "Seating, linens and serving tables",
        "Power, lighting and sound",
        "Restrooms and accessible units",
        "Delivery, setup and pickup windows",
      ],
    },
    faqs: {
      heading: "Greeley Event Rental FAQ",
      items: [
        {
          question:
            "Can I use stakes for a tent at Island Grove Regional Park?",
          answer:
            "No. The park's rules handbook says canopies may be used in the park areas but must be weighed down, and stakes are not permitted. Ask your provider how they ballast a tent without stakes.",
        },
        {
          question:
            "Can I rent a bounce house for an Island Grove event?",
          answer:
            "Yes, with conditions. The handbook says bounce houses are allowed indoors and outdoors but must be rented through a licensed company, which must contact the Scheduling Office at least two weeks before the reservation date. Stakes are prohibited.",
        },
        {
          question:
            "Do I need a permit to serve alcohol at a Greeley event?",
          answer:
            "For a public event, the City says a Special Event Permit must be filed through the City Clerk's Office, and its checklist asks for the packet at least 30 days ahead. At Island Grove, alcohol is served only by the licensed concessionaire or through a special event permit.",
        },
        {
          question:
            "Who handles permits for an event on a Greeley street or plaza?",
          answer:
            "The City says Public Works handles Public Space Event permits through eTrakit, and that the old Revocable Event Permit form is no longer valid.",
        },
        {
          question:
            "Do I need a fire permit for a tent in Greeley?",
          answer:
            "The Fire Prevention Bureau handles permits through eTRAKiT, but the City's permit page does not list a tent size threshold. Call the Bureau at 970-350-9510. Events at Island Grove Regional Park require a Fire Department permit and plan review.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Greeley?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings, parties and events across Greeley and Weld County.",
    },
  },
  {
    city: "Grand Junction",
    state: "Colorado",
    stateCode: "CO",
    slug: "grand-junction-co",
    county: "Mesa County",
    featured: true,
    nearbyCities: ["fruita-co", "palisade-co", "montrose-co", "rifle-co"],
  },
  {
    city: "Aurora",
    state: "Colorado",
    stateCode: "CO",
    slug: "aurora-co",
    county: "Arapahoe County",
    nearbyCities: ["denver-co", "centennial-co", "parker-co"],
    heroSupportingCopy:
      "Find event rental companies serving Aurora and the eastern Denver metro. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "From backyard celebrations and school events to weddings, corporate gatherings and large outdoor events, Aurora has a wide range of rental needs across the city.",
    categoriesIntro:
      "Explore rental categories commonly used for Aurora weddings, parties, corporate events, school functions and outdoor gatherings.",
    localIntro: [
      "Aurora is one of Colorado's largest cities by land area, stretching across the eastern Denver metro from established residential neighborhoods to newer development near the airport and the open plains to the east. That size means event rental providers cover a wide service area, so it's worth confirming exactly where a company delivers and if your part of Aurora falls within their standard coverage or comes with an added travel charge.",
      "Aurora events happen in a lot of different kinds of spaces — private backyards, neighborhood parks, community centers, schools, churches, office parks and dedicated event venues. Each setting raises its own practical questions: how much space is available for setup, whether the surface is grass, concrete or pavement, and whether there's a clear path from the street or driveway to the event area for delivery.",
      "Like the rest of the Front Range, Aurora can see a wide range of weather within a single event season, from warm, dry afternoons to sudden wind or an afternoon storm. Outdoor events often benefit from a tent with sidewalls, and depending on the season, heaters or fans can help keep guests comfortable.",
      "Larger Aurora events — weddings, graduations, community gatherings and festivals — tend to need more than just a tent. Tables and chairs, restroom trailers, staging, lighting and AV equipment all become more important as guest count grows, and it's usually worth planning these needs together rather than adding them one at a time.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Aurora",
      intro:
        "A look at how Aurora residents and organizations typically use event rentals.",
      items: [
        {
          title: "Weddings & Receptions",
          description:
            "Aurora weddings often bring together a ceremony and reception in the same tented space, which means planning seating, a dance floor, lighting and restroom access together. Many ceremonies take place at parks, private properties or venues without built-in event infrastructure, so tenting and layout are usually part of the plan from the start.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Backyard Parties & Private Events",
          description:
            "Backyard and private-property events across Aurora typically need [tables and chairs](/categories/table-chair-rentals) and a tent, especially given how quickly Colorado weather can change. Depending on guest count and the time of year, sidewalls, heaters or fans can help keep the space comfortable.",
          categorySlug: "tent-rentals",
        },
        {
          title: "School & Graduation Events",
          description:
            "School functions and graduation ceremonies in Aurora often call for seating, a tent for shade or weather protection, a stage or podium area, and AV support so speakers and programs can be heard clearly. Restroom trailers are also common for larger outdoor school events.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Corporate & Community Events",
          description:
            "Corporate gatherings and community events in Aurora tend to involve more logistics — staging, AV equipment, tables and chairs, and a tent large enough to manage guest flow. Planning for crowd movement and clear sightlines matters more as attendance grows.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Festivals & Outdoor Gatherings",
          description:
            "Larger outdoor gatherings and festival-style events in Aurora usually need bigger tenting, lighting, a stage, restroom trailers, and enough power on-site to support vendors, sound and lighting equipment.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Birthday & Family Celebrations",
          description:
            "Birthday parties and family celebrations across Aurora often combine [inflatables](/categories/inflatable-rentals), party rentals, a photo booth, extra seating and some shade for warmer months — a flexible mix that scales up or down with guest count.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Consider When Renting Event Equipment in Aurora",
      intro:
        "A few practical details make it easier to get an accurate quote and a smooth setup day.",
      items: [
        "Delivery area and travel charges, since Aurora covers a large area and not every provider treats the whole city the same way",
        "Venue access and load-in space, including driveways, gates, stairs or narrow side yards",
        "Whether the setup surface is grass, pavement or another surface, since anchoring methods differ",
        "Tent anchoring requirements for the specific surface and site",
        "Colorado's changeable weather, including sudden wind or afternoon storms",
        "Wind exposure at open or elevated sites",
        "Heating or cooling needs depending on the season and time of day",
        "Power availability on-site for lighting, sound or catering equipment",
        "Setup and teardown windows, especially for venues with limited access times",
        "Guest parking and overall event layout",
        "Restroom availability for outdoor events or private-property locations",
      ],
      disclaimer:
        "Depending on the venue, event type and equipment being installed, permits or venue approvals may be required. Confirm requirements with the venue, rental provider and appropriate local authorities.",
      closing:
        "Still working out sizing or budget? See our guides on [how much a tent rental costs](/resources/tent-rental-cost) and [what size tent you need](/resources/what-size-tent-do-i-need).",
    },
    checklist: {
      heading: "Aurora Event Rental Checklist",
      intro:
        "Before contacting providers, having these details ready can help you get a faster, more accurate quote:",
      items: [
        "Event date",
        "Aurora event address or venue",
        "Estimated guest count",
        "Indoor vs. outdoor setup",
        "Surface type",
        "Rental categories needed",
        "Delivery and setup window",
        "Tent or weather protection needs",
        "Power needs",
        "Restroom availability",
        "Stage or AV requirements",
      ],
    },
    faqs: {
      heading: "Aurora Event Rental FAQ",
      items: [
        {
          question: "Do event rental companies deliver throughout Aurora?",
          answer:
            "Delivery areas vary by provider, and Aurora is large enough that not every company covers the entire city in the same way. Confirm service coverage and any travel fees for your specific address when requesting a quote.",
        },
        {
          question: "What rentals are useful for outdoor events in Aurora?",
          answer:
            "Tents, tables and chairs, sidewalls, flooring, heaters or fans, lighting and restroom trailers are all common for outdoor events, depending on the season, guest count and venue.",
        },
        {
          question: "Can I rent equipment for a backyard event in Aurora?",
          answer:
            "Yes, many event rental companies serve private-property events. It's worth confirming site access, setup surface, available space and delivery details ahead of time.",
        },
        {
          question:
            "What should I tell a rental company when requesting a quote?",
          answer:
            "Your event date, address, estimated guest count, the rental categories you need, your general layout, surface type and preferred setup timing all help a provider give you an accurate quote.",
        },
        {
          question: "Do I need a tent for an Aurora event?",
          answer:
            "Not always. Tents are most useful for shade, weather protection and outdoor events, but the need for one depends on your venue, the season and how much of the event happens outdoors.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Aurora?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for event rentals in Aurora and the surrounding Denver metro.",
    },
  },
  {
    city: "Lakewood",
    state: "Colorado",
    stateCode: "CO",
    slug: "lakewood-co",
    county: "Jefferson County",
    nearbyCities: ["denver-co", "arvada-co", "littleton-co"],
    heroSupportingCopy:
      "Find event rental companies serving Lakewood and the western Denver metro. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Between suburban neighborhoods, community parks and foothill-adjacent properties, Lakewood hosts everything from weddings and graduations to backyard parties, school functions and larger outdoor gatherings — each with its own rental needs.",
    categoriesIntro:
      "Explore rental categories commonly used for Lakewood weddings, backyard events, school functions, corporate gatherings and outdoor celebrations.",
    localIntro: [
      "Lakewood sits directly west of Denver, in the stretch of the metro that runs toward the foothills. That position makes it a practical service area for both Denver-based providers extending west and companies that focus specifically on west-metro events, so it's worth confirming which category a given provider falls into and how that affects delivery and travel charges.",
      "Events across Lakewood take place in a mix of settings — private homes, neighborhood parks, churches, schools, business properties, community spaces and outdoor venues. Each of these comes with its own practical questions about available space, surface type, and how equipment gets from the street or driveway to the actual event area.",
      "Being closer to the foothills doesn't just mean nice views — it can also mean more variable weather and wind within a single day. Outdoor events in Lakewood often benefit from planning around shade, wind exposure and changing temperatures, along with a setup surface that may be grass, pavement or a mix of both.",
      "Larger or more involved Lakewood events tend to need more than a single rental. Tents, tables and chairs, lighting, staging, AV, restroom trailers, flooring or additional power support often come into play together, and confirming delivery distance, setup access and teardown timing with a provider ahead of time helps avoid surprises on event day.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Lakewood",
      intro:
        "A few of the most common ways Lakewood hosts put event rentals to use.",
      items: [
        {
          title: "Weddings & Receptions",
          description:
            "Lakewood weddings often mix an outdoor ceremony with a tented reception, so tents, tables and chairs, lighting and a dance floor tend to come up together. Restroom access is also worth planning for early, especially at parks or private properties without built-in facilities.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Backyard Parties & Private Events",
          description:
            "Private backyard events across Lakewood typically call for a tent and extra seating, along with [inflatables](/categories/inflatable-rentals) or a photo booth for family-friendly gatherings. Because weather near the foothills can shift quickly, weather protection is worth planning for even on a clear forecast.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Outdoor & Park Events",
          description:
            "Park and other outdoor events in Lakewood often need shade, tenting and extra seating, along with restroom trailers and reliable power for sound or catering equipment. Setup logistics matter more at public spaces, so confirming access and load-in with the venue ahead of time helps.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "School & Graduation Events",
          description:
            "Lakewood schools hosting a graduation or year-end program typically need a podium or small stage, AV support so speakers can be heard, and enough [tables and chairs](/categories/table-chair-rentals) for guests, with a tent added when the event moves outdoors. Inflatables are also common at school-focused events with younger attendees.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Corporate & Community Events",
          description:
            "Larger Lakewood gatherings for local businesses or community groups usually mean more moving parts — staging, AV equipment, seating and a tent sized for the crowd. It's worth mapping out where guests will enter, gather and move through the space before the rental order is finalized.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Family Celebrations",
          description:
            "Family celebrations across Lakewood often bring together party rentals, extra seating, inflatables, a photo booth and some shade for warmer months, and the mix is easy to adjust once guest count is closer to final.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Consider When Renting Event Equipment in Lakewood",
      intro:
        "A handful of practical details go a long way toward a smooth quote and an easy setup day.",
      items: [
        "Delivery coverage and travel charges, since not every provider treats all of Lakewood and the west metro the same way",
        "Venue or property access, including gates, driveways, stairs or narrow side yards",
        "Load-in and unloading space for delivery vehicles and crew",
        "Whether the setup surface is grass, pavement or a mix of both, since anchoring methods differ",
        "Tent anchoring and site conditions for the specific surface",
        "Colorado's changeable weather, especially closer to the foothills",
        "How exposed the site is to wind, especially on open lots or hillside properties",
        "Whether a heater or fans would make guests more comfortable given the time of year",
        "Electrical access and power requirements for lighting, sound or catering equipment",
        "How much lead time the provider needs for setup and again for teardown",
        "Whether restrooms need to be rented for a private property or park with no facilities nearby",
        "Guest parking and overall event layout",
        "Provider service coverage across west-metro neighborhoods",
      ],
      disclaimer:
        "Depending on the venue, event type and equipment being installed, permits or venue approvals may be required. Confirm requirements with the venue, rental provider and appropriate local authorities.",
      closing:
        "If you're still deciding on tent size or budget, our guides on [tent rental cost](/resources/tent-rental-cost) and [what size tent you need](/resources/what-size-tent-do-i-need) can help.",
    },
    checklist: {
      heading: "Lakewood Event Rental Checklist",
      intro:
        "Before contacting rental companies, have the basic event details ready so providers can give you more accurate options.",
      items: [
        "Event date",
        "Lakewood event address or venue",
        "Estimated guest count",
        "Indoor or outdoor setup",
        "Surface type",
        "Rental categories needed",
        "Delivery and setup window",
        "Tent or weather needs",
        "Power availability",
        "Restroom availability",
        "Stage or AV requirements",
        "Seating and layout needs",
      ],
    },
    faqs: {
      heading: "Lakewood Event Rental FAQ",
      items: [
        {
          question: "Do event rental companies deliver throughout Lakewood?",
          answer:
            "Delivery areas vary by provider, so it's worth confirming service coverage and any travel or delivery fees for your specific address before booking.",
        },
        {
          question: "What rentals are useful for outdoor events in Lakewood?",
          answer:
            "Tents, tables and chairs, sidewalls, flooring, lighting, heaters or fans and restroom trailers are all common choices, depending on the event, season and venue.",
        },
        {
          question: "Can I rent equipment for a backyard event in Lakewood?",
          answer:
            "Yes — private-property events are common. Before booking, check with the provider about how they handle site access, the setup surface, available space and getting equipment delivered to your address.",
        },
        {
          question:
            "What should I tell a rental company when requesting a quote?",
          answer:
            "Your event date, address, guest count, event type, rental needs, surface type, general layout and preferred setup timing all help a provider quote accurately.",
        },
        {
          question: "Do I need weather protection for a Lakewood event?",
          answer:
            "Not always, but outdoor events may benefit from tents, sidewalls, shade, heaters or fans depending on the venue, season and forecast.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Lakewood?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for event rentals in Lakewood and the western Denver metro.",
    },
  },
  {
    city: "Arvada",
    state: "Colorado",
    stateCode: "CO",
    slug: "arvada-co",
    county: "Jefferson County",
    nearbyCities: ["denver-co", "lakewood-co", "boulder-co", "westminster-co"],
    heroSupportingCopy:
      "Find event rental companies serving Arvada and the northwest Denver metro. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Arvada's residential neighborhoods, parks and community spaces host everything from weddings and graduations to corporate events and family celebrations, each calling for a different rental setup.",
    categoriesIntro:
      "Explore rental categories commonly used for Arvada weddings, backyard parties, school events, family celebrations, community gatherings and corporate functions.",
    localIntro: [
      "Arvada sits northwest of Denver, in the corridor that connects the metro core to Boulder-area communities. That position means customers here often have a choice between providers based in Denver, companies serving the northwest suburbs specifically, and those covering the Boulder corridor — worth keeping in mind when comparing delivery areas and travel fees.",
      "Much of Arvada is made up of established residential neighborhoods, and a lot of local events reflect that: backyard gatherings, school programs, church functions and community center bookings alongside more formal venues and business properties. The setting shapes what a rental company actually needs to plan for — a driveway delivery is a different job than an open park lawn.",
      "Because so many Arvada events happen on private property or in neighborhood settings, guest flow and parking tend to matter as much as the rental order itself. A tent or dance floor placed without accounting for where cars will park or how guests will move through a yard can create problems that have nothing to do with the equipment.",
      "Outdoor events in Arvada should plan for Colorado's typical seasonal swings — shade and sidewalls for sun or wind, a weather backup plan, and flooring where the ground is uneven. Larger gatherings tend to layer several rental categories together — seating, staging, AV and restrooms — so it helps to think through the full event rather than booking one item at a time.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Arvada",
      intro:
        "How Arvada residents and organizations typically put event rentals to work.",
      items: [
        {
          title: "Weddings & Receptions",
          description:
            "Arvada weddings frequently combine a tented ceremony or reception with seating, lighting and a dance floor. Restroom support is worth planning early for venues or private properties that don't have facilities built in.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Backyard Parties & Private Events",
          description:
            "Private events on Arvada properties typically need a tent along with [tables and chairs](/categories/table-chair-rentals), and often [inflatables](/categories/inflatable-rentals) or a photo booth for family-friendly gatherings. Shade and weather protection are worth planning for even when the forecast looks clear.",
          categorySlug: "tent-rentals",
        },
        {
          title: "School & Graduation Events",
          description:
            "Graduation ceremonies and other school programs around Arvada often need a stage or presentation area, seating for a crowd, and AV so remarks and music carry across an outdoor space. Inflatables show up frequently at events with younger students.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Community Gatherings",
          description:
            "Neighborhood and community events in Arvada tend to draw a wide range of ages and often run for several hours, which puts more weight on tenting, tables and chairs, staging for any programming, lighting as the day goes on, and restroom support for the crowd.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Corporate & Business Events",
          description:
            "Arvada businesses hosting a presentation, open house or employee event typically need reliable AV and staging first, with seating and a tent added depending on the venue and expected turnout.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Family Celebrations",
          description:
            "Birthdays, reunions and other family celebrations across Arvada commonly mix tables and chairs, inflatables, a photo booth and party rentals, with weather protection added for events held outside.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Consider When Renting Event Equipment in Arvada",
      intro:
        "A short list of practical questions to work through before comparing quotes.",
      items: [
        "Which providers actually deliver to your part of Arvada, since coverage areas vary",
        "Travel or delivery fees, which can depend on distance from the provider's base",
        "Residential or venue access — driveways, gates, HOA-managed spaces or shared parking areas",
        "Space for unloading and staging equipment before it's set up",
        "Whether the ground is grass, pavement or a mix, since anchoring methods differ",
        "Tent anchoring and other site conditions specific to where it's being installed",
        "Colorado's tendency toward sudden weather changes",
        "Wind, particularly on more open or exposed lots",
        "Heating or cooling equipment, depending on the time of year and time of day",
        "Electrical access for lighting, sound or catering equipment",
        "Setup and teardown windows, especially where access is limited to certain hours",
        "Restroom availability, particularly for private-property or outdoor events",
        "Guest parking and how the overall event space is laid out",
        "Coordination between multiple rental vendors if equipment is coming from more than one company",
      ],
      disclaimer:
        "Depending on the venue, event type and equipment being installed, permits or venue approvals may be required. Confirm requirements with the venue, rental provider and appropriate local authorities.",
      closing:
        "For more on pricing and sizing, our [tent rental cost](/resources/tent-rental-cost) and [tent size](/resources/what-size-tent-do-i-need) guides cover the basics.",
    },
    checklist: {
      heading: "Arvada Event Rental Checklist",
      intro:
        "Having the main event details ready makes it easier for rental companies to recommend the right equipment and setup.",
      items: [
        "Event date",
        "Arvada event address or venue",
        "Estimated guest count",
        "Indoor or outdoor setup",
        "Surface type",
        "Rental categories needed",
        "Delivery and setup timing",
        "Tent or weather protection needs",
        "Power availability",
        "Restroom availability",
        "Stage or AV requirements",
        "Seating and layout needs",
        "Parking or access considerations",
      ],
    },
    faqs: {
      heading: "Arvada Event Rental FAQ",
      items: [
        {
          question: "Do event rental companies deliver throughout Arvada?",
          answer:
            "Coverage varies by provider, so it's worth checking if your address falls within their standard delivery area and asking about any travel or delivery fees.",
        },
        {
          question: "What rentals are useful for an outdoor event in Arvada?",
          answer:
            "Tents, tables and chairs, lighting, sidewalls, flooring, heaters or fans and restroom trailers all come up regularly, depending on the venue, season and size of the event.",
        },
        {
          question: "Can I rent equipment for a backyard event in Arvada?",
          answer:
            "Yes, backyard and other private-property events are common. It's still worth walking a provider through your access points, available space and setup surface so delivery goes smoothly.",
        },
        {
          question:
            "What information should I have before requesting a quote?",
          answer:
            "Your event date, address, estimated guest count, the type of event, what you need rented, your general layout, the setup surface and your preferred timing all help a provider quote accurately.",
        },
        {
          question: "Can one rental company provide multiple event items?",
          answer:
            "It depends on the company. Some offer a range of categories under one roof, while others specialize in just one or two, so it's worth asking directly what a provider can supply together versus what you'd need to source from a separate company.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Arvada?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for event rentals in Arvada and the northwest Denver metro.",
    },
  },
  {
    city: "Castle Rock",
    state: "Colorado",
    stateCode: "CO",
    slug: "castle-rock-co",
    county: "Douglas County",
    nearbyCities: ["denver-co", "colorado-springs-co", "monument-co", "parker-co"],
    heroSupportingCopy:
      "Find event rental companies serving Castle Rock and the south Denver metro. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "Weddings, private-property celebrations, graduations and community events all show up regularly in Castle Rock, and the town's mix of suburban neighborhoods and larger open-space properties calls for flexible rental setups.",
    categoriesIntro:
      "Explore rental categories commonly used for Castle Rock weddings, private-property events, graduations, outdoor celebrations, corporate functions and family gatherings.",
    localIntro: [
      "Castle Rock sits roughly halfway between Denver and Colorado Springs, which puts it in reach of providers based in either metro as well as companies that focus specifically on the corridor between them. That middle position is worth keeping in mind when comparing quotes, since travel distance and service-area coverage can vary more here than in a city closer to the center of one metro.",
      "Local events take place across a mix of settings — private homes on larger lots, schools, churches, community spaces, business properties and open outdoor areas. Larger residential properties in particular can mean more setup space to work with, but also a longer path from the street to the event area, which is worth flagging to a provider ahead of time.",
      "Because Castle Rock sits a bit farther from the density of Denver's or Colorado Springs' urban event-service clusters, events here sometimes lean on more self-contained rental setups — a tent with sidewalls, its own lighting and power, and restroom trailers — rather than assuming nearby infrastructure will cover the gaps. Open or exposed sites also make wind and weather planning more of a factor than on a tightly built urban lot.",
      "Weddings and other larger private events in Castle Rock often bring several rental categories together at once — a tent, seating, a dance floor, lighting, AV and restroom trailers — so it helps to settle on delivery access, setup timing and a weather backup plan well before the event date.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Castle Rock",
      intro:
        "Some of the most common reasons Castle Rock residents and organizations book event rentals.",
      items: [
        {
          title: "Weddings & Receptions",
          description:
            "Castle Rock weddings often center on a tent with seating, lighting and a dance floor, plus restroom trailers for venues or properties without built-in facilities. Because many ceremonies happen outdoors, it's worth having a weather backup plan in place alongside the rental order.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Private-Property Events",
          description:
            "Larger private-property events in Castle Rock typically need a tent, [tables and chairs](/categories/table-chair-rentals), flooring for uneven ground, and lighting, with restroom trailers added depending on how far the property is from existing facilities. Delivery and setup logistics matter more here since properties tend to be bigger and more spread out.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Outdoor Celebrations",
          description:
            "Open-air celebrations around Castle Rock benefit from a tent with sidewalls, heaters or fans depending on the season, dependable lighting once the sun goes down, and enough power on-site for music or catering equipment. Restroom trailers are a common addition for events without easy access to indoor facilities.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Graduation & School Events",
          description:
            "Graduation ceremonies and school events in the Castle Rock area often call for a stage area, seating, AV so the program can be heard, and a tent for shade — with [inflatables](/categories/inflatable-rentals) showing up at events geared toward younger students.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Corporate & Community Events",
          description:
            "Businesses and community groups hosting an event in Castle Rock tend to prioritize staging and AV first, then build out seating and a tent sized to the crowd. Guest flow is worth mapping out in advance, especially at larger open-space venues.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Family Celebrations",
          description:
            "Birthdays and other family celebrations across Castle Rock commonly combine tables and chairs, party rentals, inflatables and a photo booth. On larger properties, it's worth adding shade or a small tent even for a gathering that's mostly informal.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Consider When Renting Event Equipment in Castle Rock",
      intro:
        "A handful of practical questions worth settling before you start comparing providers.",
      items: [
        "Whether a provider's service area actually reaches Castle Rock, since coverage differs by company",
        "Travel or delivery charges tied to distance from the provider's base",
        "Property or venue access, including long driveways, gates or shared entrances",
        "Load-in space for delivery vehicles and crew, especially on larger lots",
        "Whether the setup surface is grass, pavement, gravel or a mix, since anchoring differs by surface",
        "Tent anchoring and other site conditions specific to the property",
        "Wind exposure, particularly on open or elevated lots",
        "Colorado's tendency to shift weather quickly within a single day",
        "Heating or cooling equipment depending on the season",
        "Whether there's enough power on-site for lighting, sound and any catering equipment",
        "Restroom availability, especially for properties without facilities nearby",
        "Setup and teardown timing, worked out around the rest of the event schedule",
        "Parking and guest flow across a larger or open property",
        "Coordination between multiple rental vendors if equipment comes from more than one company",
        "A backup plan for outdoor events in case of wind or weather changes",
      ],
      disclaimer:
        "Depending on the venue, event type and equipment being installed, permits or venue approvals may be required. Confirm requirements with the venue, rental provider and appropriate local authorities.",
      closing:
        "Our guides on [tent rental cost](/resources/tent-rental-cost) and [choosing a tent size](/resources/what-size-tent-do-i-need) go into more detail on both of these.",
    },
    checklist: {
      heading: "Castle Rock Event Rental Checklist",
      intro:
        "Having the key event details ready helps rental companies recommend the right equipment and delivery plan for your setup.",
      items: [
        "Event date",
        "Castle Rock event address or venue",
        "Estimated guest count",
        "Indoor or outdoor setup",
        "Surface type",
        "Rental categories needed",
        "Delivery and setup window",
        "Tent or weather-protection needs",
        "Power availability",
        "Restroom availability",
        "Stage or AV requirements",
        "Seating and layout needs",
        "Parking or access considerations",
        "Backup plan for weather-sensitive events",
      ],
    },
    faqs: {
      heading: "Castle Rock Event Rental FAQ",
      items: [
        {
          question:
            "Do event rental companies deliver throughout Castle Rock?",
          answer:
            "Service areas vary from one provider to the next, so it's worth confirming travel distance and any delivery charges, and checking that your address falls within their normal setup coverage.",
        },
        {
          question:
            "What rentals are useful for an outdoor event in Castle Rock?",
          answer:
            "Tents, sidewalls, tables and chairs, flooring, lighting, heaters or fans, power and restroom trailers are all common choices — which ones you need usually comes down to the venue, the time of year and how many guests are attending.",
        },
        {
          question:
            "Can I rent equipment for a private-property event in Castle Rock?",
          answer:
            "Yes, private-property events are common. It's worth confirming access, available setup space, surface type, power and delivery logistics with the provider ahead of time.",
        },
        {
          question:
            "What information should I have before requesting a quote?",
          answer:
            "Your event date, address, guest count, event type, the rentals you need, your general layout, surface type, setup timing and any weather-planning needs all help a provider quote accurately.",
        },
        {
          question: "Why does delivery distance matter for Castle Rock events?",
          answer:
            "Providers may be based in Denver, Colorado Springs, or somewhere in between, so how far your event is from their location can affect travel charges, scheduling and overall setup availability.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Castle Rock?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for event rentals in Castle Rock and the south Denver metro.",
    },
  },
  {
    city: "Loveland",
    state: "Colorado",
    stateCode: "CO",
    slug: "loveland-co",
    county: "Larimer County",
    nearbyCities: [
      "fort-collins-co",
      "greeley-co",
      "windsor-co",
      "berthoud-co",
      "longmont-co",
      "estes-park-co",
    ],
    heroSupportingCopy:
      "Find event rental companies serving Loveland and Northern Colorado. Compare local options for tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV and more.",
    heroTagline:
      "School functions, weddings, business gatherings and outdoor celebrations are all part of the regular mix in Loveland, and its spot among several close-together Northern Colorado communities keeps the range of rental needs pretty broad.",
    categoriesIntro:
      "Explore rental categories commonly used for Loveland weddings, family celebrations, school events, community gatherings, business functions and outdoor events.",
    localIntro: [
      "Loveland is one of several active markets clustered together in Northern Colorado, with Fort Collins and Greeley both close enough that providers based in any of the three sometimes cover all of them. That overlap can work in a customer's favor, but it also means service areas and travel fees aren't always the same from one company to the next, so it's worth asking directly rather than assuming.",
      "Events around Loveland show up in a wide range of places — private homes, schools, churches, community centers, business properties and outdoor spaces all host their share of weddings, graduations, community gatherings and company events. What a rental company needs to plan for changes quite a bit depending on which of these it is, from a simple driveway drop-off to a full outdoor setup on an open lot.",
      "Northern Colorado weather doesn't always cooperate on a set schedule, and an outdoor event in Loveland can go from calm to windy or from warm to chilly within the same afternoon. Shade, sidewalls, a temperature plan and a surface that can handle the site's actual conditions all tend to matter more once an event moves outside.",
      "The bigger a Loveland event gets, the more it tends to lean on multiple rental categories at once rather than a single order — seating and a tent for the ceremony space, AV for speeches or music, and restroom trailers if the venue can't cover the guest count on its own. Sorting out delivery timing, setup access, power and a teardown window ahead of time keeps those pieces from colliding on the actual day.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Loveland",
      intro:
        "A quick look at what Loveland events tend to rent, based on the kind of gathering.",
      items: [
        {
          title: "Weddings & Receptions",
          description:
            "Loveland weddings typically bring together a tent, seating, lighting and a [dance floor](/categories/dance-floor-rentals), with restroom trailers added for venues that don't already have facilities on-site. Given how quickly Northern Colorado weather can shift, it's smart to have a backup plan worked out before the day arrives.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Family Celebrations & Private Events",
          description:
            "Family celebrations and other private events around Loveland usually call for [tables and chairs](/categories/table-chair-rentals) and a tent, with [inflatables](/categories/inflatable-rentals) or a photo booth added for kid-friendly gatherings. Shade is worth planning for even on days that start out mild.",
          categorySlug: "tent-rentals",
        },
        {
          title: "School & Graduation Events",
          description:
            "Graduations and other school events in the Loveland area tend to need a stage for the program, enough seating for families, and AV so remarks carry across the space, plus a tent if the event is outdoors. Guest flow is worth thinking through in advance, since these events often bring a large number of people through one entrance at once.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Community Gatherings",
          description:
            "Festivals, fundraisers and neighborhood gatherings in Loveland usually serve a crowd that's on-site for most of the day, so a larger tent footprint, enough tables and chairs to rotate people through, and restroom trailers sized for the turnout all matter more than they would at a shorter, smaller event. Staging and lighting come into play once there's any kind of program or entertainment involved.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Corporate & Business Events",
          description:
            "Loveland businesses hosting a meeting, open house or team event usually start with AV and staging, then add seating and a tent depending on where the event is held and how many people are expected.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Outdoor Events",
          description:
            "Outdoor events in Loveland lean on a tent with sidewalls, flooring for uneven ground, heaters or fans depending on the season, dependable lighting, enough power for music or catering equipment, and restroom support when the site doesn't have facilities close by.",
        },
      ],
    },
    considerations: {
      heading: "What to Consider When Renting Event Equipment in Loveland",
      intro:
        "Working through these questions early tends to make the quoting process smoother.",
      items: [
        "Whether a provider's service area covers Loveland specifically, or just the wider Northern Colorado region",
        "Delivery distance and any travel fees tied to where the provider is based",
        "Property or venue access — long driveways, gates or shared entrances",
        "Enough clear space near the delivery point for a truck and crew to work",
        "The ground itself: grass, pavement, gravel or some combination, and how that affects how a tent gets anchored",
        "How much the site is exposed to wind, especially on open or elevated ground",
        "Colorado's habit of shifting weather within the same day",
        "Whether heaters or fans would help given the season and time of day",
        "Whether there's electrical capacity on-site for sound, lighting or catering needs",
        "Restroom availability, especially away from existing facilities",
        "How the drop-off and pickup times line up with everything else happening that day",
        "Parking and how guests will move through the event space",
        "Coordination if equipment is coming from more than one rental company",
        "A backup plan in case wind or weather changes plans for an outdoor event",
      ],
      disclaimer:
        "Depending on the venue, event type and equipment being installed, permits or venue approvals may be required. Confirm requirements with the venue, rental provider and appropriate local authorities.",
      closing:
        "If you'd like more detail on pricing or sizing before you start requesting quotes, see [tent rental cost](/resources/tent-rental-cost) and [what size tent you need](/resources/what-size-tent-do-i-need).",
    },
    checklist: {
      heading: "Loveland Event Rental Checklist",
      intro:
        "Having the main event details ready helps rental companies recommend the right equipment, delivery plan, and setup.",
      items: [
        "Event date",
        "Loveland event address or venue",
        "Estimated guest count",
        "Indoor or outdoor setup",
        "Surface type",
        "Rental categories needed",
        "Delivery and setup window",
        "Tent or weather-protection needs",
        "Power availability",
        "Restroom availability",
        "Stage or AV requirements",
        "Seating and layout needs",
        "Parking or access considerations",
        "Backup plan for weather-sensitive events",
      ],
    },
    faqs: {
      heading: "Loveland Event Rental FAQ",
      items: [
        {
          question: "Do event rental companies deliver throughout Loveland?",
          answer:
            "Service coverage differs by provider, so it's worth confirming travel distance and delivery fees, and checking that your address is within their normal setup area before booking.",
        },
        {
          question: "What rentals are useful for an outdoor event in Loveland?",
          answer:
            "Tents, sidewalls, tables and chairs, flooring, lighting, heaters or fans, power and restroom trailers are all commonly requested — which ones make sense depends mostly on the venue and time of year.",
        },
        {
          question:
            "Can I rent equipment for a private-property event in Loveland?",
          answer:
            "Yes, private-property events are common in the area. Providers will typically want to know about access, setup surface, available space, power and delivery details before finalizing a quote.",
        },
        {
          question:
            "What information should I have before requesting a quote?",
          answer:
            "Your event date, address, guest count, event type, the rentals you're considering, general layout, surface type and preferred setup timing all help a provider put together an accurate quote.",
        },
        {
          question:
            "Can rental companies serving Fort Collins or Greeley also serve Loveland?",
          answer:
            "Often, yes — some providers cover multiple Northern Colorado markets. Service areas and delivery fees still vary by company, so it's worth confirming coverage for your specific address directly.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Loveland?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for event rentals in Loveland and across Northern Colorado.",
    },
  },
  {
    city: "Monument",
    state: "Colorado",
    stateCode: "CO",
    slug: "monument-co",
    county: "El Paso County",
    nearbyCities: [
      "colorado-springs-co",
      "castle-rock-co",
      "manitou-springs-co",
      "fountain-co",
    ],
    metaDescription:
      "Plan event rentals in Monument, CO and the Tri-Lakes area: tents, tables and chairs, wedding rentals, restroom trailers, staging and AV, plus the Town's tent permit rules.",
    heroSupportingCopy:
      "Compare event rental options for Monument and the Tri-Lakes area, from tents, tables and chairs to restroom trailers, staging, AV, inflatables and wedding rentals.",
    heroTagline:
      "Monument sits on the south side of the Palmer Divide, where open meadow lots, town parks and a busy downtown Fourth of July make tent permits, anchoring and weather part of planning an outdoor event here.",
    categoriesIntro:
      "Explore the rental categories Monument hosts use most for Tri-Lakes weddings, graduation parties, park events, Fourth of July gatherings and backyard celebrations.",
    localIntro: [
      "Monument is one of the Tri-Lakes communities at the north end of El Paso County, alongside Palmer Lake and Woodmoor. The town sits at about 6,980 feet, and Monument Hill just north of town reaches roughly 7,350 feet on the Palmer Divide, a ridge the Town of Palmer Lake describes as creating its own weather patterns. That height and the open, pine-edged ground around much of the area shape how outdoor events here are planned.",
      "Events here run from weddings and graduation parties on meadow or wooded properties to gatherings at Town parks, Monument Lake and the Limbach Park band shell. The Fourth of July brings the Monument Hill Kiwanis parade and a downtown street fair, so plan around closures if your event lands that weekend. The Air Force Academy, about five miles south, warns of heavy traffic during its late-May graduation week, which can affect delivery timing.",
      "Monument handles tents a little differently from many towns. The Town's special event permit covers street closures, 100 or more people in a public park or at Monument Lake, outdoor events with alcohol and use of the Limbach Park band shell. A tent or other temporary structure calls for a separate temporary use permit. Special event applications are due 30 days ahead for events under 1,000 people and 120 days ahead for larger ones, which need Town Council approval.",
      "The Town's 2026 application packet adds details that affect a rental order: tents at permitted events may not be staked because of buried sprinkler lines, each tent needs a fire extinguisher, and larger tents, stages or generators may need review by the Tri-Lakes Monument Fire Protection District. A private party on private land may not go through this process, so check with the Town about your address and share what applies with your rental provider.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Monument",
      intro:
        "How Tri-Lakes hosts tend to use event rentals, and where the Monument details come in.",
      items: [
        {
          title: "Meadow & Backyard Weddings",
          description:
            "Weddings on Tri-Lakes properties often pair a ceremony on open ground with a tented reception, seating, lighting and a [dance floor](/categories/dance-floor-rentals). On larger lots, the walk from the driveway to the reception site affects how long setup takes, so walk the route with your provider.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents on Open Ground",
          description:
            "Meadows and hilltop yards give a tent room to breathe but leave it exposed to wind. Ask how the provider anchors on your surface, whether stakes are allowed at your site or weights are needed instead, and whether sidewalls come with the order.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Graduation & Open-House Parties",
          description:
            "Graduation parties and open houses usually run on simple pieces: banquet tables, folding chairs, a food table and some shade. If your date falls during Air Force Academy graduation week, book early and plan delivery around heavier traffic.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Park & Band Shell Events",
          description:
            "Concerts, fundraisers and community programs at Limbach Park or other Town spaces need a special event permit for the band shell or for crowds of 100 or more. Rented staging, sound and lighting can supplement what's on site, and stages may draw fire district review.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Neighborhood & Family Celebrations",
          description:
            "Birthdays, reunions and block-style gatherings around Monument often mix [inflatables](/categories/inflatable-rentals), a photo booth, extra seating and a small tent. Wind is the main thing to plan around with inflatables on open ground, so ask about the provider's wind limits.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Larger Gatherings & Fundraisers",
          description:
            "For Town-permitted events, Monument recommends two portable toilets for every 250 people at peak with at least ten percent of units, and never fewer than one, accessible. A restroom trailer is worth pricing when guests will stay for several hours.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Monument",
      intro:
        "The Monument-specific questions that most often change a quote or a setup plan.",
      items: [
        "Which permits your event needs: the Town's special event permit, the temporary use permit for tents and structures, both or neither",
        "Lead time: 30 days for events under 1,000 people, 45 days for a special event liquor permit and 120 days for events of 1,000 or more",
        "Whether stakes are allowed at your site, since Town-permitted events may not stake tents because of sprinkler lines",
        "A fire extinguisher for each tent, and possible fire district review for larger tents, stages or a generator",
        "Wind on open meadow and hilltop lots, and the anchoring method the provider uses on that surface",
        "Evening temperatures at nearly 7,000 feet, and whether heaters belong in the order",
        "Gravel or long driveways on larger Tri-Lakes lots, and where a delivery truck can turn around",
        "Downtown closures on the Fourth of July and heavier traffic during Air Force Academy graduation week",
        "The 20-foot emergency access lanes the Town asks for on permitted event site plans",
        "Each provider's pricing, delivery area, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Permit details here summarize the Town of Monument's special event page and 2026 application packet. Confirm current rules with the Town, the Tri-Lakes Monument Fire Protection District and your rental provider.",
      closing:
        "Working out tent size or budget? See [what size tent you need](/resources/what-size-tent-do-i-need) and [what drives tent rental cost](/resources/tent-rental-cost). Tents can't be staked at Town-permitted events, so our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning) covers anchoring, storms and permits, and the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist) covers wedding timelines.",
    },
    checklist: {
      heading: "Monument Event Rental Checklist",
      intro:
        "Details worth having in hand before you ask Tri-Lakes providers for a quote:",
      items: [
        "Address, and whether it's private land, a Town park or Monument Lake",
        "Peak headcount (100 or more in a park needs a Town permit)",
        "Which permits apply: special event, temporary use, liquor",
        "Tent size and whether stakes are allowed",
        "Ground surface: meadow grass, lawn, gravel or pavement",
        "Truck access and turnaround space",
        "Sidewalls and evening heaters",
        "Power source: house circuits or a generator",
        "Restrooms, including accessible units",
        "Storm and lightning backup location",
      ],
    },
    faqs: {
      heading: "Monument Event Rental FAQ",
      items: [
        {
          question: "Do I need a permit to put up a tent in Monument?",
          answer:
            "The Town of Monument requires a temporary use permit for tents and other temporary structures, separate from its special event permit. Rules for a private party on private land can differ, so ask the Town about your specific address.",
        },
        {
          question: "How far ahead should I apply for a Monument special event permit?",
          answer:
            "At least 30 days before the event for under 1,000 people, 45 days if you also need a special event liquor permit, and 120 days for 1,000 or more people, since those events go to the Town Council.",
        },
        {
          question: "Can a tent be staked at a Monument park?",
          answer:
            "Not at Town-permitted events: the Town's packet bars staking because of buried sprinkler lines. Rental companies can usually anchor with weights instead; confirm the method and any added cost with your provider.",
        },
        {
          question: "What weather should I plan for at an outdoor Monument event?",
          answer:
            "Plan for wind on open ground, cooler evenings and summer thunderstorms, and know which building or hard-topped vehicles guests can reach if lightning moves in.",
        },
        {
          question: "How many restrooms should a larger Monument event have?",
          answer:
            "For Town-permitted events, Monument recommends two portable toilets per 250 people at peak, with at least ten percent accessible and never fewer than one. For private events, ask your provider to size restrooms to your guest count and event length.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Monument?",
      description:
        "List your business on Event Rental Finder and get discovered by customers planning events in Monument, Palmer Lake, Woodmoor and the rest of the Tri-Lakes area.",
    },
  },
  {
    city: "Manitou Springs",
    state: "Colorado",
    stateCode: "CO",
    slug: "manitou-springs-co",
    county: "El Paso County",
    nearbyCities: ["colorado-springs-co", "woodland-park-co", "monument-co"],
    metaDescription:
      "Plan event rentals in Manitou Springs, CO: reception tents, farm tables, dance floors, lighting and restroom trailers, plus the City's permit timeline and Garden of the Gods wedding limits.",
    heroSupportingCopy:
      "Compare event rental options for Manitou Springs, from farm tables, string lighting and dance floors to tents, restroom trailers and photo booths for weddings, receptions and town celebrations.",
    heroTagline:
      "Manitou's historic district, mountain setting and closeness to Garden of the Gods make it a natural fit for small weddings and destination celebrations, and receptions held outside a full-service venue depend on rented tables, lighting and tenting.",
    categoriesIntro:
      "Explore the rental categories most used for Manitou Springs weddings, receptions, rehearsal dinners, park events and community celebrations.",
    localIntro: [
      "Manitou Springs is a home rule city of about 5,000 residents, five miles west of Colorado Springs at the base of the Pikes Peak foothills. It began in the 1870s as a scenic health resort and still runs mainly on tourism. Its historic district, listed on the National Register of Historic Places in 1983, covers almost the entire city, with winding roads, mineral springs and historic hotels.",
      "Couples drawn to nearby Garden of the Gods should know that the City of Colorado Springs, which runs the park, allows only small, brief ceremonies at six first-come areas. Tables, tents, arches and decorations aren't allowed, chairs are limited to elderly or disabled guests, and receptions are limited to picnics at the Scotsman or South Spring Canyon picnic areas. So the reception moves somewhere else, such as private property, an inn or a rented hall, and that's where the rental order comes in.",
      "If any part of your event uses public property in Manitou, the City's Special Event Use Guide applies. A permit is needed for public-property events with 25 or more people, tents or structures, amplified sound, or alcohol or food, and for exclusive use of a city park or Memorial Hall. Applications open up to 364 days ahead and must show all tents, structures and fencing. The final site plan is due 60 days out, tent details 30 days out, and insurance and the final delivery schedule 14 days out.",
      "Tents must be secured against high winds and sudden microbursts, weights are required unless Parks approves stakes in writing, and tents over 2,400 square feet need Fire Department approval. Music in city parks stops at 9 p.m., and the City recommends at least one portable toilet per 100 people, with ten percent accessible. A wedding on private property may not need a city permit, but the same questions about anchoring, restrooms and sound still apply.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Manitou Springs",
      intro:
        "The setups Manitou hosts plan for most often, from destination receptions to downtown events.",
      items: [
        {
          title: "Receptions After a Garden of the Gods Ceremony",
          description:
            "Because Garden of the Gods doesn't allow tables, tents or receptions outside its picnic areas, couples who marry there usually move to a second site for dinner and dancing. That site needs the full reception kit: seating, linens, lighting and often a tent.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Farm-Table Dinners on Private Grounds",
          description:
            "Long farm tables with cross-back chairs suit garden and inn settings around town. Hillside lawns can be uneven, so ask whether the provider levels tables and whether flooring makes sense under the dining area.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Weather Cover for Mountain Receptions",
          description:
            "A tent gives an outdoor reception a fallback for sun, wind and summer storms. In city parks, the guide calls for tents secured against high winds and microbursts and anchored with weights unless Parks approves stakes in writing.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Dancing Under the Lights",
          description:
            "A rented dance floor gives guests a level surface on grass, and string lighting carries the reception past sunset. At a city park, music has to end by 9 p.m., so plan first dances and DJ timing around that.",
          categorySlug: "dance-floor-rentals",
        },
        {
          title: "Rehearsal Dinners & Welcome Parties",
          description:
            "Some destination weddings add a welcome night or rehearsal dinner for traveling guests. A [photo booth](/categories/photo-booth-rentals), lounge seating and a few cocktail tables can turn a courtyard or garden into a relaxed gathering space.",
          categorySlug: "photo-booth-rentals",
        },
        {
          title: "Park & Community Events",
          description:
            "Public events in Manitou parks or at Memorial Hall go through the City's permit process, which asks for the location of every portable restroom and wash station on the site plan. Restroom trailers and accessible units are worth planning for on longer events.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Manitou Springs",
      intro:
        "Questions to settle before booking, most of them specific to Manitou and its neighbors.",
      items: [
        "Where the ceremony and reception will each happen, since Garden of the Gods doesn't allow tables, tents, arches or receptions outside two picnic areas",
        "Whether any part of the event uses public property and triggers the City's special event permit",
        "The City's 60-, 30- and 14-day deadlines for the final site plan, tent details and insurance",
        "Tent weights rather than stakes in city parks unless Parks approves stakes in writing",
        "Fire Department approval for any tent larger than 2,400 square feet",
        "The 9 p.m. music cut-off in city parks and how it shapes DJ and dance-floor timing",
        "Delivery access on the historic district's winding streets, and where a truck can unload",
        "Downtown closures for big local events, such as the Emma Crawford Coffin Races on Manitou Avenue in late October",
        "Level ground for tables and a dance floor on sloped lawns",
        "Each provider's pricing, delivery fees, damage terms and cancellation policy, which vary",
      ],
      disclaimer:
        "Requirements summarize the City of Manitou Springs 2026 Special Event Use Guide and the City of Colorado Springs' Garden of the Gods wedding rules. Confirm current details with both cities and your rental provider.",
      closing:
        "For help sizing a reception tent or budgeting for one, see [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). Our [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist) covers what to book and when to confirm it, and the [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning) covers wind, lightning and tent permits.",
    },
    checklist: {
      heading: "Manitou Springs Event Rental Checklist",
      intro:
        "Pull these details together before you contact rental companies about a Manitou event:",
      items: [
        "Ceremony site and reception site",
        "Guest count at the busiest point of the evening",
        "Private property, rented venue or public park",
        "Tent size and whether weights are required",
        "Dance floor size and music end time",
        "Lighting for after sunset",
        "Restroom plan and accessible units",
        "Load-in route and truck parking",
        "Permit dates you're working toward (60, 30 and 14 days out)",
        "Rain and lightning backup",
      ],
    },
    faqs: {
      heading: "Manitou Springs Event Rental FAQ",
      items: [
        {
          question: "Can I rent tables and a tent for a Garden of the Gods wedding?",
          answer:
            "No. The park doesn't allow tables, tents, arches or decorations, and receptions are only allowed as picnics at two designated picnic areas. Plan the reception, and the rental order, for a separate site.",
        },
        {
          question: "Do I need a permit for an event in a Manitou Springs park?",
          answer:
            "Public-property events with 25 or more people, tents, amplified sound, or alcohol or food service, and any exclusive use of a city park or Memorial Hall, need a special event permit. Applications go to the City Event Coordinator and can be submitted up to 364 days ahead.",
        },
        {
          question: "When are tent details due for a permitted Manitou event?",
          answer:
            "Tent locations go on the initial application. The final site plan with tent sizes is due 60 days out, tent permits and details 30 days out, and insurance and the final delivery schedule 14 days out.",
        },
        {
          question: "Can a rental company stake a tent in a Manitou Springs park?",
          answer:
            "Only with written approval from the Parks department. Otherwise the City requires weights, and every tent must be secured to withstand high winds and microbursts.",
        },
        {
          question: "Is there a time limit for music at a Manitou park event?",
          answer:
            "Yes. The City's guide sets a 9 p.m. music cut-off in all city parks. Private venues set their own rules, so ask the venue before booking a DJ or band.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Manitou Springs?",
      description:
        "List your business on Event Rental Finder and get discovered by couples and planners arranging weddings and events in Manitou Springs and the west side of the Pikes Peak region.",
    },
  },
  {
    city: "Woodland Park",
    state: "Colorado",
    stateCode: "CO",
    slug: "woodland-park-co",
    county: "Teller County",
    nearbyCities: ["manitou-springs-co", "colorado-springs-co"],
    metaDescription:
      "Plan event rentals in Woodland Park, CO at 8,465 feet: tents, heaters, restroom trailers, lighting and seating, plus the City's Temporary Use Permit and Pike National Forest group rules.",
    heroSupportingCopy:
      "Compare event rental options for Woodland Park and the Teller County high country, from tents and patio heaters to restroom trailers, tables and chairs, lighting and power for mountain weddings and summer events.",
    heroTagline:
      "At 8,465 feet, Woodland Park events deal with strong sun, cool nights and a permit process that asks you to map every toilet and handwashing station before the City signs off.",
    categoriesIntro:
      "Explore the rental categories most used for Woodland Park mountain weddings, reunions, park events, summer festivals and private celebrations.",
    localIntro: [
      "Woodland Park calls itself the City Above the Clouds. It sits at 8,465 feet in Teller County, about 30 minutes from Colorado Springs, as a gateway to Pikes Peak and Pike National Forest. That setting draws mountain weddings, family reunions and summer gatherings, and it changes the rental plan compared with an event down in the city.",
      "Sun and temperature are the big differences. The World Health Organization notes that UV levels rise about 10 percent per 1,000 meters of altitude, and Woodland Park is close to 2,600 meters up, so shade matters even on mild days. At nearby Mueller State Park's group campground (9,600 feet), Colorado Parks and Wildlife lists summer highs around 80 degrees and nighttime lows in the 40s. Summer storms bring lightning, and the National Weather Service says there's no safe place outside when thunderstorms are in the area.",
      "Inside city limits, special events need a Temporary Use Permit from the Planning Department, filed 45 days ahead. The site plan must show structures with dimensions, parking including accessible stalls, and the location of portable and accessible toilets, handwashing stations and trash containers. Tents over 1,000 square feet or cooking under a tent involve the Northeast Teller County Fire Protection District, and events between 9 p.m. and 7 a.m. need City Council approval at a public hearing.",
      "Events involving US 24 or State Highway 67 need a highway special event permit through the Colorado State Patrol and CDOT, and food vendors go through Teller County Environmental Health. On Pike National Forest land, the U.S. Forest Service requires a noncommercial group use permit for 75 or more people, counting guests and participants, with applications due at least 72 hours ahead.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Woodland Park",
      intro:
        "Common ways Woodland Park hosts use rentals, with the high-country details that shape each one.",
      items: [
        {
          title: "Mountain Meadow Weddings",
          description:
            "Weddings in aspen and pine settings around Woodland Park usually need the whole kit brought in: a tent, seating, a dance floor, lighting and restrooms. If the site is on national forest land and the guest count reaches 75, the Forest Service group use permit comes first.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Shade & Storm Cover",
          description:
            "A tent here does two jobs: shade from strong high-altitude sun at midday and cover when an afternoon storm rolls through. Sidewalls help after dark when temperatures drop, and tents over 1,000 square feet involve the fire district inside city limits.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Sites Without Plumbing",
          description:
            "Meadows, ranch properties and park fields often lack restrooms close to the event area. The City's permit site plan asks where every portable toilet, accessible toilet and handwashing station will go, so a restroom trailer or portable units belong in the plan from the start.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Power & Lighting After Dark",
          description:
            "Mountain receptions that run into the evening need lighting, and heaters, sound and catering gear all need power. On City property, permitted events can rent City electrical pedestals, subject to availability; elsewhere you may need a generator, so work out the power plan with your provider.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Park Days & Reunions",
          description:
            "Family reunions and group picnics at Memorial Park, Bergstrom Park or Meadow Wood Sports Complex go through a park rental application that asks about tents, [inflatables](/categories/inflatable-rentals), electricity and amplified sound, so list everything you plan to rent.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Group Dinners & Celebrations",
          description:
            "Rehearsal dinners, milestone birthdays and company retreats in the area tend to center on a long table setup with comfortable seating, linens and a few heaters for when the sun goes down.",
          categorySlug: "table-chair-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Woodland Park",
      intro:
        "High-country and permit questions to answer before you book rentals for a Woodland Park event.",
      items: [
        "If your event needs a City Temporary Use Permit, file it 45 days ahead",
        "A site plan showing tents, parking, accessible stalls, portable and accessible toilets, handwashing stations and trash",
        "Fire district involvement for tents over 1,000 square feet or any cooking under a tent",
        "Highway permits through the Colorado State Patrol and CDOT if US 24 or State Highway 67 is involved",
        "A Forest Service group use permit for 75 or more people on Pike National Forest land",
        "Strong sun at altitude and how much shade guests will need through the day",
        "Cold evenings, and how heaters will be placed and fueled safely under or near a tent",
        "Delivery on mountain roads and gravel drives, and whether a truck can reach the setup area",
        "Power: City electrical pedestals (subject to availability), house circuits or a generator",
        "Each provider's travel charges, weather policy and setup timing, which vary from company to company",
      ],
      disclaimer:
        "Requirements summarize Woodland Park's 2026 Temporary Use Permit application and park rental form and the Forest Service's group use rules. Confirm current details with the City, the fire district, the Forest Service and your provider.",
      closing:
        "Still deciding on tent size or budget? Our guides on [what size tent you need](/resources/what-size-tent-do-i-need) and [tent rental cost](/resources/tent-rental-cost) cover the basics. For cold evenings, generator sizing at altitude and afternoon storms, see our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for mountain weddings, the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist). Since the City's permit site plan has to show toilets and handwashing, the [event restroom rental guide](/resources/event-restroom-rental-guide) covers counts, accessible units and placement.",
    },
    checklist: {
      heading: "Woodland Park Event Rental Checklist",
      intro:
        "Gather these details before you ask providers to quote a Woodland Park event:",
      items: [
        "Site: city park, private land, venue or national forest",
        "Peak headcount (75 or more matters on forest land)",
        "Temporary Use Permit filing date (45 days out)",
        "Draft site plan with tents, toilets, handwashing and trash",
        "Tent size (over 1,000 sq ft involves the fire district)",
        "Shade, sidewalls and evening heaters",
        "Power source and cord routing",
        "Road and driveway access for delivery",
        "Lightning plan with a building or vehicles nearby",
        "End time (City Council approval after 9 p.m. for permitted events)",
      ],
    },
    faqs: {
      heading: "Woodland Park Event Rental FAQ",
      items: [
        {
          question: "Do I need a permit for an event in Woodland Park?",
          answer:
            "Special events inside city limits need a Temporary Use Permit from the Planning Department, submitted 45 days ahead, and city parks need a separate facility use permit from Parks and Recreation. For a private gathering, ask the Planning Department whether a permit applies.",
        },
        {
          question: "Why does Woodland Park ask about restrooms on the permit?",
          answer:
            "The permit application requires a site plan showing portable toilets, accessible toilets, handwashing stations and trash containers, and asks who provides them. Having your rental provider's restroom plan ready makes that part easier.",
        },
        {
          question: "Do I need a Forest Service permit for a wedding near Woodland Park?",
          answer:
            "If the wedding is on Pike National Forest land with 75 or more people, the Forest Service requires a noncommercial group use permit. Apply at least 72 hours ahead and ask the ranger district about rules for vendors and equipment.",
        },
        {
          question: "What should I rent for weather at 8,465 feet?",
          answer:
            "Shade, sidewalls, heaters and lighting cover most of it. UV is stronger at altitude, evenings can be cold even in summer, and afternoon storms happen, so have a plan to move guests into a building or vehicles if lightning threatens.",
        },
        {
          question: "Will a Colorado Springs rental company deliver to Woodland Park?",
          answer:
            "Some may, but delivery areas, mountain travel charges and scheduling vary by provider. Confirm your exact address is covered and ask about gravel drives or steep access.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Woodland Park?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning weddings and events in Woodland Park and the Teller County high country.",
    },
  },
  {
    city: "Fountain",
    state: "Colorado",
    stateCode: "CO",
    slug: "fountain-co",
    county: "El Paso County",
    nearbyCities: ["colorado-springs-co", "pueblo-co", "monument-co"],
    metaDescription:
      "Plan event rentals in Fountain, CO: tables and chairs, restroom trailers, tents, bounce houses, photo booths and staging for park parties, reunions and community events near Fort Carson.",
    heroSupportingCopy:
      "Compare event rental options for Fountain and the south end of El Paso County, from tables, chairs and tents to restroom trailers, inflatables, photo booths and staging for park gatherings and community events.",
    heroTagline:
      "Fountain's parks and neighborhoods host reunions, birthday parties, graduations and city events, and because the City doesn't supply tents, portable toilets, tables or chairs for events, most of what guests use arrives on a rental truck.",
    categoriesIntro:
      "Explore the rental categories Fountain hosts use most for park parties, reunions, community events, car shows and backyard celebrations.",
    localIntro: [
      "Fountain sits along Fountain Creek and I-25 at the south end of El Paso County, between Colorado Springs and Pueblo. Founded in 1859 and incorporated in 1903, it's one of the oldest incorporated towns in the Pikes Peak region, and Fort Carson has been its neighbor since 1942. Fountain-Fort Carson School District 8 runs schools both in the city and on the post, and more than 60 percent of its students are military-connected.",
      "Most rental orders here are for city parks and backyards. Fountain rents park pavilions and gazebos through Parks and Recreation, and electricity is an add-on at only some shelters, such as the Metcalfe Park gazebo and pavilions. The park rules are specific: nothing can be staked into the ground without Parks Division approval, so tents and canopies are held down with sandbags or cinder blocks. Potable water isn't available for activities, amplified sound needs prior approval, vehicles stay off the turf unless Parks approves it in writing, and reservations aren't accepted on holiday weekends.",
      "Public and larger events use the City's event permit application, which states plainly that the City does not provide tents, port-o-lets, tables or chairs. It asks how many tents you'll put up, how many regular, accessible and handwashing units you'll bring, and whether there will be amplified sound. Closing a street takes a separate parade or street closure permit from the Police Department. The event map has to show 20-foot emergency access lanes and the location of stages, tents, canopies, portable toilets, generators and trash containers.",
      "The city calendar shows the local style: Thunder in the Valley, a car cruise and car show, runs in July, alongside a Saturday farmers market at Metcalfe Park, movie nights in the park and a fall festival. Car shows have their own line on the permit application, which requires an impermeable barrier under each car. For weather, NOAA's 1991–2020 normals for the Colorado Springs airport station, north of Fountain, make July the wettest month, with average highs in the mid-80s, so plan shade and a storm fallback for summer events.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Fountain",
      intro:
        "The setups Fountain hosts ask about most, and the city rules that shape each one.",
      items: [
        {
          title: "Park Pavilion Parties",
          description:
            "A pavilion or gazebo gives you a roof, but the City doesn't supply event tables or chairs, so extra seating, serving tables and linens come from a rental company. Schedule delivery and pickup inside your reservation block, since the facility has to be vacated when the rental time ends.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Restrooms & Handwashing",
          description:
            "The City doesn't provide portable toilets, and its event application asks how many regular, accessible and handwashing units you'll have. Potable water isn't available for park activities, so handwashing stations with their own water are worth adding. A restroom trailer suits longer events and private-property weddings.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Shade Without Stakes",
          description:
            "Fountain parks don't allow staking into the ground without Parks Division approval, and the rules call for sandbags or cinder blocks instead. Ask your provider for a ballasted tent or canopy and how much weight they bring for wind on open ground.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses & Birthday Parties",
          description:
            "A bounce house is the centerpiece of plenty of kids' parties, and [party rentals](/categories/party-rentals) cover the rest. In a city park the no-staking rule still applies, so ask how the unit is weighted, whether it needs a generator (only some shelters have power) and what wind limits the provider follows.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Reunions & Homecoming Parties",
          description:
            "Family reunions, retirements and welcome-home parties suit a [photo booth](/categories/photo-booth-rentals) or backdrop with a few cocktail tables. If the booth needs power, check if your pavilion has electricity or plan for a generator.",
          categorySlug: "photo-booth-rentals",
        },
        {
          title: "Community Events & Car Shows",
          description:
            "Festivals, car shows and fundraisers may need a small stage, sound and lighting. The City's event map asks where stages and generators will go, and amplified sound needs approval, so get those details from your provider before you apply.",
          categorySlug: "stage-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Fountain",
      intro:
        "Fountain-specific details that change what you rent and how it's delivered.",
      items: [
        "The City doesn't provide tents, port-o-lets, tables or chairs for events, so plan to rent all of them",
        "Which approval your gathering needs: a park reservation alone or the City's full event permit",
        "No staking in parks without Parks Division approval; sandbags or cinder blocks instead",
        "Electricity only at some shelters, such as the Metcalfe Park gazebo and pavilions, and none at the Hibbard Park gazebo",
        "No potable water for park activities, which affects handwashing and food prep",
        "Prior approval for amplified sound, including a DJ or speakers",
        "Delivery vehicles kept off the turf unless Parks approves it in writing",
        "No park reservations on holiday weekends",
        "A parade or street closure permit from the Police Department if a street needs to close",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Fountain's park rules, park reservation page and event permit application. Confirm current requirements with the City Clerk's office, Parks and Recreation and your rental provider.",
      closing:
        "For help sizing a tent or budgeting for one, see [what size tent you need](/resources/what-size-tent-do-i-need) and [how tent rental pricing works](/resources/tent-rental-cost). Since City park rules call for sandbags or cinder blocks instead of stakes, our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning) is worth a read for anchoring, wind, hail and lightning plans. The City doesn't supply port-o-lets for park events, so see the [event restroom rental guide](/resources/event-restroom-rental-guide) for counts, accessible units and handwashing.",
    },
    checklist: {
      heading: "Fountain Event Rental Checklist",
      intro:
        "Have these details ready before you ask Fountain-area providers for a quote:",
      items: [
        "Park and shelter name, or private address",
        "Reservation block and vacate time",
        "Guest count at the busiest point",
        "Tables, chairs and linens (none supplied by the City)",
        "Tent or canopy size and ballast plan",
        "Restrooms, accessible units and handwashing",
        "Water for handwashing and food prep",
        "Power: shelter outlet or generator",
        "Amplified sound approval",
        "A delivery route that stays off the turf",
      ],
    },
    faqs: {
      heading: "Fountain Event Rental FAQ",
      items: [
        {
          question:
            "Does the City of Fountain provide tables, chairs or tents for events?",
          answer:
            "No. The City's event permit application says it doesn't provide tents, port-o-lets, tables or chairs, so plan to rent what you need. Ask Parks and Recreation what's already at your shelter.",
        },
        {
          question: "Can a tent or bounce house be staked in a Fountain park?",
          answer:
            "Not without Parks Division approval. The park rules call for securing items with sandbags or cinder blocks instead, so tell your rental provider before they quote.",
        },
        {
          question: "Is there electricity at Fountain park pavilions?",
          answer:
            "At some. Electricity is an add-on at the Metcalfe Park gazebo, Metcalfe Park pavilions 1 and 2 and Aga Park pavilion 1, and the Hibbard Park gazebo has none. Plan a generator if your shelter has no power.",
        },
        {
          question: "Can I play music at a Fountain park party?",
          answer:
            "Amplified sound needs prior approval under the park rules, and the City's event application asks if you'll have performers or announcements. Get approval before booking a DJ or sound system.",
        },
        {
          question:
            "Will Colorado Springs or Pueblo rental companies deliver to Fountain?",
          answer:
            "Some may. Delivery zones, travel charges and setup windows vary by provider, so confirm your exact park or address when you ask for a quote.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Fountain?",
      description:
        "List your business on Event Rental Finder and get discovered by people planning parties, reunions and community events in Fountain and the south end of El Paso County.",
    },
  },
  {
    city: "Pueblo",
    state: "Colorado",
    stateCode: "CO",
    slug: "pueblo-co",
    county: "Pueblo County",
    nearbyCities: ["fountain-co", "colorado-springs-co"],
    metaDescription:
      "Plan event rentals in Pueblo, CO: tents, tables and chairs, wedding rentals, staging and AV, dance floors and restroom trailers, plus park permits, street-closure rules and summer heat.",
    heroSupportingCopy:
      "Compare event rental options for Pueblo, from tents, tables and chairs to wedding rentals, staging, AV, dance floors and restroom trailers for Riverwalk receptions, park gatherings and downtown events.",
    heroTagline:
      "Pueblo is lower and hotter than Colorado Springs and the Pikes Peak towns to the north, and several of its event spaces, from a City Park hall to a Riverwalk lawn, start as a blank canvas, so shade, seating and power go on the rental list early.",
    categoriesIntro:
      "Explore the rental categories Pueblo hosts use most for weddings, Riverwalk receptions, park gatherings, festivals and corporate events.",
    localIntro: [
      "Pueblo sits on the Arkansas River at about 4,700 feet, well below Colorado Springs, and its summers are noticeably hotter. NOAA's 1991–2020 normals for Pueblo Memorial Airport put the average July high at 93.4°F, compared with 86.5°F at the Colorado Springs airport, and August is Pueblo's wettest month. That heat shapes outdoor rentals: tents for shade, sidewalls that open for airflow and water for guests at long afternoon events.",
      "Venues set much of the rental plan. George L. Williams Hall in City Park is an indoor hall with electricity and restrooms, but the City notes it has no tables, chairs or kitchen. Historic Mineral Palace Park has its own wedding sites and a band shell. Downtown, the Historic Arkansas Riverwalk of Pueblo rents spaces including the Boettcher Natural Area for ceremonies and the Activity Green, a lawn it describes as a blank canvas for concerts, festivals and wedding receptions. The Pueblo Convention Center, also on the Riverwalk, offers in-house catering and audio-visual services, so ask what outside rentals are allowed there.",
      "City parks have their own rules. Under the Pueblo Municipal Code, you need a permit or reservation from the Parks and Recreation Director to use any shelterhouse, for gatherings expected to draw 25 or more people, and for any bounce house. Putting up a tent or other structure in a park takes the Director's written permission. Separately, the Pueblo Fire Department issues tent and membrane structure permits; its application asks for the tent's dimensions, square footage and installer, with an example diagram showing a stage area and generator.",
      "Downtown events add another layer. Closing a street, sidewalk or alley requires a revocable permit, which takes at least 30 days, needs a certified barricade plan and is approved by City Council, and parades go through the Police Department 45 days ahead. Two big events affect delivery schedules: the Colorado State Fair runs 11 days ending on Labor Day, and the Chile & Frijoles Festival fills Union Avenue downtown in September.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Pueblo",
      intro:
        "How Pueblo hosts use rentals, from riverside weddings to downtown festivals.",
      items: [
        {
          title: "Shade for Hot Afternoons",
          description:
            "With July highs averaging in the 90s, a tent is as much about shade as rain. Ask about sidewalls that roll up for airflow, and check if your site needs the Parks Director's written permission or a Fire Department tent permit.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Furnishing a Bare Hall",
          description:
            "George L. Williams Hall comes with electricity and restrooms but no tables or chairs, and open lawns start empty too. Count seating for every guest, then add serving, gift and cake tables.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Riverwalk & Park Weddings",
          description:
            "Ceremony spots like the Riverwalk's Boettcher Natural Area or Mineral Palace Park's wedding sites often lead to a reception space that needs everything brought in: linens, lighting, a tent and seating for dinner.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Stages & Sound for Festivals",
          description:
            "Concerts, fundraisers and community events on lawns like the Activity Green may need a stage, sound and [lighting](/categories/av-lighting-rentals). Indoors at the Convention Center, in-house audio-visual services may cover some of this, so confirm before renting.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Dancing After Sunset",
          description:
            "Summer evenings cool off after dark (the July normal low is about 61°F), which makes late receptions comfortable. A rented dance floor gives guests a level surface on grass, and string lighting carries the party into the night.",
          categorySlug: "dance-floor-rentals",
        },
        {
          title: "Restrooms for Outdoor Events",
          description:
            "Lawns and riverside spaces may have restrooms some distance away, and hot weather makes comfortable facilities matter more over a long event. Restroom trailers and handwashing stations are worth pricing for weddings and festivals on open ground.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Pueblo",
      intro: "Pueblo-specific details to settle before you book rentals.",
      items: [
        "Heat: July highs average 93.4°F at Pueblo Memorial Airport, so plan shade, airflow and water",
        "A rain and lightning plan, especially in August, Pueblo's wettest month",
        "What the venue includes; George L. Williams Hall, for example, has no tables, chairs or kitchen",
        "A permit or reservation from the Parks Director for shelters, groups of 25 or more and bounce houses",
        "The Director's written permission to put up a tent or other structure in a city park",
        "A Pueblo Fire Department tent and membrane structure permit, with dimensions and a tent diagram",
        "Whether a venue like the Convention Center uses in-house catering and AV, and what outside rentals it allows",
        "A revocable permit, certified barricade plan and at least 30 days for any street, sidewalk or alley closure",
        "Delivery timing around the State Fair (11 days ending on Labor Day) and the Chile & Frijoles Festival downtown",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize City of Pueblo park and permit pages, the Pueblo Municipal Code, the Pueblo Fire Department tent application, venue pages and NOAA climate normals. Confirm current requirements with the City, the venue and your rental provider.",
      closing:
        "Planning a tent for shade or a reception? See [what size tent you need](/resources/what-size-tent-do-i-need) and [what drives tent rental cost](/resources/tent-rental-cost). Our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning) explains Pueblo's tent permit alongside storm and heat planning, and the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist) covers reception rentals and timing. Booking George L. Williams Hall, which has no tables or chairs? See [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need).",
    },
    checklist: {
      heading: "Pueblo Event Rental Checklist",
      intro:
        "Pull these details together before you contact Pueblo rental companies:",
      items: [
        "Venue and what it includes (tables, chairs, power, kitchen)",
        "Guest count at the busiest point",
        "Park permit or reservation, if using a city park",
        "Tent size and Fire Department permit",
        "Shade, sidewalls and airflow for the heat",
        "Seating plus serving, gift and cake tables",
        "Dance floor size and lighting",
        "Stage, sound and power needs",
        "Restrooms and handwashing",
        "Street closure or parade permit dates",
      ],
    },
    faqs: {
      heading: "Pueblo Event Rental FAQ",
      items: [
        {
          question: "Does George L. Williams Hall come with tables and chairs?",
          answer:
            "No. The City lists it as an indoor hall with electricity and restrooms but no tables, chairs or kitchen facility, so plan to rent seating and serving tables. Pueblo Parks and Recreation handles bookings.",
        },
        {
          question:
            "Do I need a permit for a party or wedding in a Pueblo park?",
          answer:
            "Under the Pueblo Municipal Code, you need a permit or reservation from the Parks and Recreation Director to use a shelterhouse, for gatherings expected to reach 25 or more people, or to set up a bounce house. A tent or other structure needs the Director's written permission.",
        },
        {
          question: "How hot does Pueblo get for outdoor events?",
          answer:
            "NOAA's 1991–2020 normals put Pueblo's average July high at 93.4°F, with June and August highs near 90°F. Plan shade, airflow and water for afternoon events, and save dancing for the evening when temperatures drop.",
        },
        {
          question: "Can I close a street for an event in Pueblo?",
          answer:
            "Closing a street, sidewalk or alley requires a revocable permit. The process takes at least 30 days, needs a certified barricade plan from a barricade company, and permits are approved by City Council. Parades need a separate Police Department permit filed 45 days ahead.",
        },
        {
          question: "Can I serve alcohol at an event in a Pueblo park?",
          answer:
            "Alcohol is generally prohibited in city parks. The municipal code allows it only under a concession agreement or a permit from the Director and Mayor for a park building, tent or fenced area, and the City Clerk asks for special event liquor permit applications six weeks to two months ahead.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Pueblo?",
      description:
        "List your business on Event Rental Finder and get discovered by couples and planners arranging weddings, festivals and events in Pueblo and southern Colorado.",
    },
  },
  {
    city: "Littleton",
    state: "Colorado",
    stateCode: "CO",
    slug: "littleton-co",
    county: "Arapahoe County",
    nearbyCities: ["centennial-co", "denver-co", "lakewood-co", "parker-co"],
    metaDescription:
      "Plan event rentals in Littleton, CO: tents, tables and chairs, wedding and party rentals, staging and restrooms, plus the City's event permit triggers, South Suburban park rules and street closures.",
    heroSupportingCopy:
      "Compare event rental options for Littleton and the southwest Denver metro, from tents, tables and chairs to wedding rentals, inflatables, stages, sound and restroom trailers for backyard parties, park gatherings and downtown events.",
    heroTagline:
      "A Littleton mailing address doesn't always mean City of Littleton rules, and parks here are run by South Suburban Parks and Recreation, so the first step is working out whose permit your event actually needs.",
    categoriesIntro:
      "Explore the rental categories Littleton hosts use most for backyard weddings, graduation parties, park shelter gatherings, neighborhood events and downtown celebrations.",
    localIntro: [
      "Littleton is the Arapahoe County seat on the South Platte River, with a historic downtown along Main Street and neighborhoods that blend into Centennial, Highlands Ranch and unincorporated Arapahoe and Jefferson counties. The City warns that a Littleton mailing address isn't necessarily inside city limits and points residents to its Address Wizard. Check it before applying for anything, because the permit office, fire district and park agency all follow from where the event really is.",
      "Inside city limits, a City Event Permit is required when an event is open to the public or meets any of a long list of triggers: more than 100 attendees, use of a City park, trail, street or facility, alcohol, food trucks, outdoor amplified sound, stages, tents, canopies or generators, or a street, alley or sidewalk closure. Applications go through the City's eTRAKiT portal at least 30 days ahead, or 45 days if alcohol is involved, and every permitted event needs a layout plan showing canopies and tents, cooking areas, port-a-let locations, entries and exits, trash and vendors. Invitation-only parties at home, such as graduations or private weddings, don't need a formal permit, but the City requires a Residential Amplified Sound Permit for any private party with a DJ or live band.",
      "Most local parks are operated by South Suburban Parks and Recreation (SSPR), and the City asks organizers of park events to complete South Suburban's special event request first. South Suburban's rules shape the rental order: picnic shelters are reserved online, the rental block has to include setup and cleanup, and tents, canopies and other structures need a District permit. Inflatables are allowed with a $1 million certificate of insurance from the rental company naming South Suburban, the District asks for a call to its permit office a week ahead for utility locates when tents or inflatables will be staked, and glass and personal charcoal grills aren't allowed. South Suburban also says alcohol isn't allowed in its parks unless the event is a nonprofit fundraiser with a municipal permit.",
      "A few sites are off the table. The City won't issue event permits for events in or through South Platte Park, and Ketring Park is reserved for City-sponsored events. Downtown street closures need a map, a traffic control plan, barricades and signs rented from a reputable company, notice to every property owner fronting the closure, and a certificate of insurance naming the City. Organizers also have to notify South Metro Fire Rescue of special events. South Metro requires permits for tents and membrane structures over 400 square feet and doesn't provide medical services at events, so larger events contract for those privately.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Littleton",
      intro:
        "How Littleton hosts use rentals, from backyard graduations to downtown events.",
      items: [
        {
          title: "Backyard Weddings & Graduations",
          description:
            "Invitation-only parties at home skip the City Event Permit, so a backyard is often the simpler setting for a reception or graduation party. If a DJ or band is part of the plan, apply for the Residential Amplified Sound Permit through eTRAKiT, and size the tent, seating and dance floor to the yard.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "South Suburban Park Shelters",
          description:
            "Shelters range from small family spots to large group pavilions, and the reserved time has to cover setup and cleanup. Bring extra tables and chairs for overflow seating, and get South Suburban's permit before adding a canopy or tent.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Tents Over 400 Square Feet",
          description:
            "A 20-by-20 tent is exactly 400 square feet, so anything larger needs a South Metro Fire Rescue tent permit. Ask the provider for the tent's dimensions and anchoring plan, and include it on the City layout plan if the event needs one.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses in Parks",
          description:
            "South Suburban needs a certificate of insurance from the rental company naming the District before the rental. Units that need water carry an extra fee, and staked inflatables need a utility locate request a week ahead.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Downtown & Main Street Events",
          description:
            "Public events with a stage, outdoor sound or a street closure need the City Event Permit, and the City's Building Division reviews stages and electrical. Plan [sound and lighting](/categories/av-lighting-rentals) with the provider so it matches the layout plan.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Restrooms for Public Events",
          description:
            "Port-a-let locations are part of the required layout plan for permitted events. Restroom trailers suit weddings and longer events, and accessible units belong close to the main event area.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Littleton",
      intro: "Littleton-specific details to settle before you book rentals.",
      items: [
        "Whether the address is inside Littleton city limits, using the City's Address Wizard",
        "A City Event Permit for public events, more than 100 attendees, alcohol, outdoor amplified sound, tents, stages or generators",
        "eTRAKiT applications at least 30 days ahead, or 45 days with alcohol",
        "An event layout plan showing tents, cooking, port-a-lets, entries, exits, trash and vendors",
        "A Residential Amplified Sound Permit for any private party with a DJ or live band",
        "South Suburban's special event request first for events in a park",
        "A South Suburban permit for tents and canopies in its parks, and the inflatable vendor's insurance certificate",
        "No event permits for South Platte Park, and Ketring Park limited to City-sponsored events",
        "A South Metro Fire Rescue permit for tents over 400 square feet, and private medical coverage for larger events",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize City of Littleton event permit and private party pages, South Suburban Parks and Recreation park rules and special event materials, and South Metro Fire Rescue permit information. Confirm current requirements with the City, South Suburban and your rental provider.",
      closing:
        "Sizing a backyard or shelter tent? See [what size tent you need](/resources/what-size-tent-do-i-need) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning). For seating counts, see [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need), and for public events, the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Littleton Event Rental Checklist",
      intro:
        "Pull these details together before you contact Littleton rental companies:",
      items: [
        "Exact address and whether it's in city limits",
        "Guest count at the busiest point",
        "Public, private or invitation-only event",
        "City Event Permit and layout plan, if required",
        "South Suburban shelter or special event approval",
        "Tent size and South Metro Fire Rescue permit",
        "Inflatable permission and vendor insurance",
        "Amplified sound permit for a DJ or band",
        "Restroom locations and accessible units",
        "Seating plus serving, gift and cake tables",
      ],
    },
    faqs: {
      heading: "Littleton Event Rental FAQ",
      items: [
        {
          question: "Do I need a permit for a backyard party in Littleton?",
          answer:
            "Invitation-only parties at home, such as graduations, block parties and private weddings, don't need a formal City permit. If the party has a DJ or live band, the City requires a Residential Amplified Sound Permit, and closing a street means notifying the Public Works Traffic Division first.",
        },
        {
          question: "When does a Littleton event need a City Event Permit?",
          answer:
            "When it's open to the public or has more than 100 attendees, uses a City park, trail, street or facility, serves alcohol, has food trucks or outdoor amplified sound, or includes stages, tents, canopies or generators. Apply through eTRAKiT at least 30 days ahead, or 45 days with alcohol.",
        },
        {
          question: "Who handles park reservations in Littleton?",
          answer:
            "Most parks are run by South Suburban Parks and Recreation, which handles shelter reservations online and reviews special events. The City asks organizers of park events to complete South Suburban's request first and attach its approval to the City application.",
        },
        {
          question: "Can I bring a bounce house to a South Suburban park?",
          answer:
            "Yes, with conditions. Before the rental, South Suburban needs a $1 million certificate of insurance from the rental company naming the District. Inflatables that need water carry an extra fee, and staked inflatables need a utility locate request a week ahead.",
        },
        {
          question: "Does a tent need a fire permit in Littleton?",
          answer:
            "South Metro Fire Rescue requires permits for tents and membrane structures over 400 square feet, which means anything larger than a 20-by-20. Tents also count as a trigger for the City Event Permit, so check both before you order.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Littleton?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging weddings, graduations and events in Littleton and the south Denver metro.",
    },
  },
  {
    city: "Centennial",
    state: "Colorado",
    stateCode: "CO",
    slug: "centennial-co",
    county: "Arapahoe County",
    nearbyCities: ["littleton-co", "aurora-co", "parker-co", "denver-co"],
    metaDescription:
      "Plan event rentals in Centennial, CO: tables and chairs, tents, party and wedding rentals, inflatables and restrooms, plus Centennial Center Park rules, park district permits and block party closures.",
    heroSupportingCopy:
      "Compare event rental options for Centennial and the south Denver metro, from tables, chairs and tents to party rentals, inflatables, photo booths and restroom trailers for park gatherings, HOA events and backyard celebrations.",
    heroTagline:
      "Centennial is a contract city, so the rules for your event depend on who runs the ground you're on: the City's own Centennial Center Park, one of several park and recreation districts, or private property.",
    categoriesIntro:
      "Explore the rental categories Centennial hosts use most for park pavilion parties, HOA and neighborhood events, graduations, weddings and backyard celebrations.",
    localIntro: [
      "Centennial became a city on February 7, 2001, after 77 percent of voters approved incorporation, and it sits in Arapahoe County just south of Denver. It was built on a contract model: the City contracts for many services, the Arapahoe County Sheriff's Office provides public safety, and special districts provide services like fire protection. That structure carries over to event planning, because the permit you need depends on which agency controls the site.",
      "Parks are the clearest example. The City works with South Suburban Parks and Recreation, the Arapahoe County Recreation District, Trails Park and Recreation District and the Smoky Hill Metro District, and together they offer more than 100 parks, but the City owns only a few itself, including Centennial Center Park, Cherokee Trail Park and Parker Jordan Centennial Open Space. Before you book rentals for a neighborhood park, find out which district manages it and ask for its rules on shelters, tents, inflatables and sound.",
      "Centennial Center Park, the City's 15-acre park off Arapahoe Road next to the Civic Center, has been open since 2012 and has five reservable areas: the amphitheater, Bluff Pavilion, Coffee Shelter, Large Shelter and Plaza. The Bluff Pavilion holds up to 100 people, rents for a two-hour minimum and comes with nine picnic tables, electricity and two grills. Without a City permit, park rules prohibit tents larger than 25 square feet, inflatables, stages and platforms, vehicles in the park and amplified sound audible more than 25 feet away. Even with a permit, staking into the lawn or pavement isn't allowed; only above-ground tie-offs or weights the City approves, and the City can require a diagram controlling delivery, setup and placement.",
      "Private property and streets follow other rules. The City's Temporary Use Permit covers temporary uses of private property and temporary structures, and tents on its site plan need a Commercial Temporary or Accessory Structure Permit. For a block party, submit a street closure request at least three weeks ahead; barricades must meet federal (MUTCD) standards, and cars, cones and trash cans can't serve as barricades. The City notes that large tents may need a separate permit from the local fire district, and South Metro Fire Rescue, which serves Centennial, permits tents over 400 square feet.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Centennial",
      intro:
        "How Centennial hosts use rentals, from pavilion parties to neighborhood events.",
      items: [
        {
          title: "Bluff Pavilion & Shelter Parties",
          description:
            "The Bluff Pavilion's nine picnic tables seat only part of a 100-person group. Rent extra tables and chairs, plus serving and gift tables, and plan carry-in delivery, since vehicles can't enter Centennial Center Park without a permit.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Shade Without Big Tents",
          description:
            "Centennial Center Park allows shade awnings and umbrellas up to 25 square feet that leave with you. Anything larger needs a City permit and must be weighted rather than staked; in a district park or on private property, ask about the fire district's 400-square-foot line.",
          categorySlug: "tent-rentals",
        },
        {
          title: "HOA & Neighborhood Events",
          description:
            "HOA picnics and block parties often combine a street closure or district park with tables, canopies and games. Submit the City's street closure request three weeks ahead and line up MUTCD-compliant barricades before you finalize the rental order.",
          categorySlug: "party-rentals",
        },
        {
          title: "Bounce Houses & Kids' Parties",
          description:
            "Inflatables are prohibited at Centennial Center Park without a City permit, and district parks set their own approval and insurance rules. In a backyard, ask the provider about anchoring, power and the space each unit needs.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Amphitheater & Community Events",
          description:
            "The Centennial Center Park amphitheater is reservable for performances and larger gatherings. Stages, generators and sound beyond 25 feet need City approval, and the City notes that using the amphitheater's 800-amp electrical service requires a licensed electrician.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Photo Booths & Celebrations",
          description:
            "Graduation and anniversary parties often add a photo booth or backdrop. The Bluff Pavilion has electricity, but confirm outlet locations and keep cords off paths, and plan battery power where outlets aren't available.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Centennial",
      intro: "Centennial-specific details to settle before you book rentals.",
      items: [
        "Who manages the park: the City or one of its partner park and recreation districts",
        "At Centennial Center Park, a City permit for tents over 25 square feet, inflatables, stages and sound audible beyond 25 feet",
        "No staking at Centennial Center Park; only City-approved tie-offs or weights",
        "A City diagram for delivery, setup and placement, if the City requires one",
        "No vehicles in Centennial Center Park without a permit, so deliveries are carried in",
        "Bluff Pavilion capacity of 100, a two-hour minimum and nine picnic tables",
        "A separate alcohol permit with any park reservation that includes alcohol",
        "A Temporary Use Permit for temporary uses of private property, with tents on the site plan",
        "A block party street closure request three weeks ahead, with MUTCD-compliant barricades",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize City of Centennial pages on its parks, Centennial Center Park rules and administrative policy, park reservations, temporary use permits and block party street closures, plus South Metro Fire Rescue permit information. Confirm current requirements with the City, your park district and your rental provider.",
      closing:
        "For a pavilion or backyard party, see [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need). Planning a tent instead? Start with [what size tent you need](/resources/what-size-tent-do-i-need) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for public events, see the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Centennial Event Rental Checklist",
      intro:
        "Pull these details together before you contact Centennial rental companies:",
      items: [
        "Park manager (City or district) or private address",
        "Guest count at the busiest point",
        "Pavilion or shelter reservation",
        "Permits for tents, inflatables, stages or sound",
        "Weights or tie-offs instead of stakes",
        "Carry-in route if vehicles aren't allowed",
        "Extra tables, chairs and linens",
        "Alcohol permit, if serving",
        "Street closure request and barricades",
        "Power: pavilion outlet, battery or approved generator",
      ],
    },
    faqs: {
      heading: "Centennial Event Rental FAQ",
      items: [
        {
          question: "Who manages my neighborhood park in Centennial?",
          answer:
            "It depends on the park. The City owns only a few, including Centennial Center Park, and works with South Suburban Parks and Recreation, the Arapahoe County Recreation District, Trails Park and Recreation District and the Smoky Hill Metro District for the rest. Reserve through the agency that manages the park and follow its rules.",
        },
        {
          question: "Can I put up a tent at Centennial Center Park?",
          answer:
            "Shade awnings and umbrellas up to 25 square feet are allowed if you remove them when you leave. Anything larger needs a City permit, and approved structures must use above-ground tie-offs or weights, since staking into the lawn or pavement isn't allowed.",
        },
        {
          question: "How many people fit at the Bluff Pavilion?",
          answer:
            "Up to 100. The reservation includes nine picnic tables, electricity and two grills, with a two-hour minimum, so larger groups usually add rented tables and chairs.",
        },
        {
          question: "Do I need a permit for a block party in Centennial?",
          answer:
            "If you're closing the street, yes. Submit a street closure request at least three weeks ahead. Barricades must meet MUTCD standards, emergency vehicles need access between closure points, and approvals are shared with the fire protection district and the Sheriff's Office.",
        },
        {
          question: "Can we serve alcohol at an event in Centennial?",
          answer:
            "At Centennial Center Park, alcohol needs a City permit, applied for with the reservation. A public event that serves alcohol needs a Special Event Permit, and Colorado law (C.R.S. 44-5-102) limits eligibility to organizations such as nonprofits and civic, religious, athletic and political groups.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Centennial?",
      description:
        "List your business on Event Rental Finder and get discovered by families, HOAs and planners arranging parties and events in Centennial and the south Denver metro.",
    },
  },
  {
    city: "Westminster",
    state: "Colorado",
    stateCode: "CO",
    slug: "westminster-co",
    county: "Adams and Jefferson Counties",
    nearbyCities: [
      "thornton-co",
      "arvada-co",
      "boulder-co",
      "denver-co",
      "erie-co",
    ],
    metaDescription:
      "Plan event rentals in Westminster, CO: tables and chairs, tents, wedding rentals, restrooms and staging, plus the City's strict pavilion rules, Standley Lake permits and the 45-day special event permit.",
    heroSupportingCopy:
      "Compare event rental options for Westminster and the northwest Denver metro, from tables, chairs and tents to wedding rentals, restroom trailers, stages and sound for backyard parties, community events and lakeside gatherings.",
    heroTagline:
      "Westminster's park pavilions come with some of the metro's tightest rules, with no inflatables, no amplified music and no tent bigger than 10 by 10 feet, so larger celebrations usually move to private property or a special event permit.",
    categoriesIntro:
      "Explore the rental categories Westminster hosts use most for backyard parties, pavilion picnics, weddings, community events and gatherings near Standley Lake.",
    localIntro: [
      "Westminster sits between Denver and Boulder along the US 36 corridor and spans two counties: the City's own guidance places areas west of Sheridan Boulevard in Jefferson County and areas east of it in Adams County. The county line rarely changes a rental order, but applications sometimes ask for it, so note which side of Sheridan your site is on.",
      "City park pavilions are the most common small-event venue, and their rules shape the rental list. Reservations run 10 a.m. to 8 p.m., and capacities range from 30 people at the smallest pavilions to 200 at Squires Park. Inflatables, including jump castles, aren't allowed in any City park, amplified music isn't allowed, outside grills can't be brought in, and only tents 10 by 10 feet or smaller are permitted. Piñatas, confetti, glitter and water balloons are out too, vehicles can't be driven to pavilions, and pavilion restrooms close at 8 p.m. Beer and wine are allowed only with an alcohol permit, in cans or boxes, never glass.",
      "Larger and public events follow a different path. A Special Event – Temporary Use Permit is required when an event is open to the public, expects 25 or more people and uses City property, or when a public event at a business expands outdoors into a parking lot or onto adjacent property. Applications go in at least 45 days ahead. The site plan has to show every tent and canopy regardless of size, restrooms and whether they're accessible, trash and recycling, and parking for at least a third of attendees, and the written plan has to explain how the event will respond to extreme heat or cold, high winds, tornadoes, heavy rain or snow and lightning.",
      "Tents get their own review. The City's application flags tents over 400 square feet, or over 700 square feet combined, for a Westminster Fire Department permit and inspection, and the Fire Department's special event requirements keep generators outside tents and at least 20 feet from tent walls and other combustibles. For a lakeside gathering, Standley Lake Regional Park, a 3,000-acre park in unincorporated Jefferson County, uses its own Special Use Permit for private gatherings, with the application due at least 30 days ahead. Its lake supplies drinking water to Westminster, Thornton and Northglenn, so swimming and wading aren't allowed.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Westminster",
      intro:
        "How Westminster hosts use rentals, from pavilion picnics to backyard receptions.",
      items: [
        {
          title: "Pavilion Birthday & Graduation Parties",
          description:
            "Pavilion capacities run from 30 to 200 guests depending on the park, and the rental covers the pavilion area only. Rent extra tables and chairs for the overflow, and plan carry-in delivery, since vehicles can't be driven to pavilions.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Small Shade Tents Only",
          description:
            "In a City park, tents are capped at 10 by 10 feet. For anything larger, host on private property and ask the provider whether the tent crosses the Fire Department's 400-square-foot permit line.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Backyard Weddings & Receptions",
          description:
            "With no amplified music or large tents in City parks, receptions tend to land on private property, where the full kit applies: a tent, seating, linens, lighting and a [dance floor](/categories/dance-floor-rentals).",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Restrooms for Public Events",
          description:
            "The special event site plan has to show where restrooms go and whether they're gender-specific and accessible, and the written plan needs delivery and pickup times. Restroom trailers suit weddings and longer events on private property.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Community Events & Festivals",
          description:
            "Festivals, car shows and markets that draw 25 or more people to City property, or spill into a private parking lot, need the Special Event – Temporary Use Permit 45 days out. Stages, [sound and lighting](/categories/av-lighting-rentals) belong on the site plan.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Lakeside Gatherings at Standley Lake",
          description:
            "Private gatherings at Standley Lake go through the park's own Special Use Permit, due 30 days ahead. Ask the park which venues are available and what outside rentals it allows before you place an order.",
          categorySlug: "party-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Westminster",
      intro: "Westminster-specific details to settle before you book rentals.",
      items: [
        "Pavilion rules: no inflatables, no amplified music, no outside grills and no tents larger than 10 by 10 feet",
        "Fixed pavilion hours of 10 a.m. to 8 p.m., with restrooms closing at 8 p.m.",
        "Pavilion capacity, from 30 to 200 guests depending on the park",
        "No vehicles at pavilions, so deliveries are carried in from the parking lot",
        "A Special Event – Temporary Use Permit 45 days ahead for public events of 25 or more on City property",
        "A site plan showing every tent and canopy, restrooms, accessibility, trash and parking for a third of attendees",
        "A weather plan covering heat, cold, high winds, tornadoes, heavy rain or snow and lightning",
        "A Fire Department permit for tents over 400 square feet (or 700 combined), with generators 20 feet from tents",
        "A Standley Lake Special Use Permit, due 30 days ahead, for lakeside events",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Westminster's park pavilion and special event permit pages and application packet, Westminster Fire Department special event requirements and Standley Lake Regional Park pages. Confirm current requirements with the City and your rental provider.",
      closing:
        "For layout and seating counts, see [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need), and for public events, the [event restroom rental guide](/resources/event-restroom-rental-guide). Moving the party to a tent on private property? See [what size tent you need](/resources/what-size-tent-do-i-need) and the [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for weddings, the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist).",
    },
    checklist: {
      heading: "Westminster Event Rental Checklist",
      intro:
        "Pull these details together before you contact Westminster rental companies:",
      items: [
        "Park pavilion or private address",
        "Guest count vs. pavilion capacity",
        "Tent size (10 by 10 maximum in parks)",
        "Special Event – Temporary Use Permit, if public",
        "Site plan with tents, restrooms and parking",
        "Weather and lightning plan",
        "Fire Department permit for large tents",
        "Generator placement 20 feet from tents",
        "Alcohol permit (beer and wine only in parks)",
        "Seating, linens and serving tables",
      ],
    },
    faqs: {
      heading: "Westminster Event Rental FAQ",
      items: [
        {
          question: "Can I have a bounce house at a Westminster park?",
          answer:
            "No. The City says inflatables, including jump castles, aren't allowed in any City of Westminster park. Hold the party at home or another private property, and ask the provider about anchoring and power.",
        },
        {
          question: "Can I play music at a Westminster pavilion?",
          answer:
            "Amplified music isn't allowed in City parks under the pavilion rules. Plan acoustic entertainment, or move a DJ or band to a private venue.",
        },
        {
          question: "How big a tent can I put up in a Westminster park?",
          answer:
            "Tents 10 by 10 feet and smaller are permitted at pavilions. Larger tents belong on private property or in a permitted special event, and tents over 400 square feet need a Fire Department permit and inspection.",
        },
        {
          question: "When do Westminster pavilion reservations open?",
          answer:
            "Westminster rents pavilions by season, and reservations are made online through a household account. The City posts each season's dates and opening day on its Park Pavilions page; the 2026 rental season ran April 15 through September 30. Outside the rental season, pavilions are first come, first served.",
        },
        {
          question: "Do I need a permit for a public event in Westminster?",
          answer:
            "If it's open to the public, expects 25 or more people and uses City property, yes: a Special Event – Temporary Use Permit, submitted at least 45 days ahead. Public events that spill from a business into a parking lot or onto adjacent property need one too.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Westminster?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging parties, weddings and events in Westminster and the northwest Denver metro.",
    },
  },
  {
    city: "Thornton",
    state: "Colorado",
    stateCode: "CO",
    slug: "thornton-co",
    county: "Adams County",
    nearbyCities: ["westminster-co", "denver-co", "erie-co"],
    metaDescription:
      "Plan event rentals in Thornton, CO: tables and chairs, tents, inflatables, stages and party rentals, plus Carpenter Park pavilion rules, the 10-by-10 canopy limit, temporary use permits and noise permits.",
    heroSupportingCopy:
      "Compare event rental options for Thornton and the north Denver metro, from tables, chairs and canopies to inflatables, stages, sound and restroom trailers for pavilion parties, community events and backyard celebrations.",
    heroTagline:
      "Thornton's city code draws a clear line for park parties: a pop-up canopy up to 10 by 10 feet is fine on natural turf during park hours, but larger tents and every bounce house need a permit.",
    categoriesIntro:
      "Explore the rental categories Thornton hosts use most for pavilion parties, family reunions, community events, graduations and backyard celebrations.",
    localIntro: [
      "Thornton stretches north from Denver through Adams County, and the City says it manages more than 2,500 acres of parks and open space and over 140 miles of trails. City Code sets general park hours of 6 a.m. to 10 p.m., and some parks post their own (Carpenter Park lists 6 a.m. to 11 p.m.), so check the hours for your park: delivery, the party and pickup all have to fit inside them unless the City authorizes otherwise.",
      "The park code is specific about rentals. No tent, shelter or structure can go up in a park without a permit from the Parks and Recreation director or a designee, with one exception: a temporary pop-up canopy no larger than 10 by 10 feet, used only for shade or protection from rain or wind, with stakes no longer than 8 inches, on natural turf during park hours. Inflatable bouncy houses, castles and slides need a permit, public address systems and other amplification need the director's written approval, and only authorized vehicles can drive or park on lawns, fields or sidewalks, so deliveries stop at the road or parking lot.",
      "Carpenter Park, at 3498 E. 112th Avenue, is the city's best-known party park. Its East Pavilion has five picnic tables seating 40, with a maximum capacity of 50 and two outlets, and the West Pavilion has 13 picnic tables seating 100 and three outlets. Pavilions rent all day from April 1 to October 31, gas grills are allowed on the cement only, and beer needs an alcohol permit that takes two weeks. A DJ or any amplified sound requires renting both pavilions and getting a free noise permit five days ahead. The park's Harley Brown Amphitheater seats up to 500, and pavilion reservations are also required at Cherry Park, Community Park, Woodglen-Brookshire Park and Yorkborough Park.",
      "Public events and temporary uses on private property go through a Temporary Use Permit, which the City says typically takes 7 to 10 calendar days once complete. The application needs a letter of intent, landowner authorization and a scaled site plan showing tents, fencing, barricades, distances to property lines and streets, entrances and emergency access. The City's checklist lists separate permits that often ride along: the Fire Department for tents over 400 square feet or canopies over 700 square feet, the Sales Tax Department for inflatable devices, the City Clerk for amplified sound and liquor, and Adams County Health for food.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Thornton",
      intro:
        "How Thornton hosts use rentals, from pavilion parties to community events.",
      items: [
        {
          title: "Carpenter Park Pavilion Parties",
          description:
            "The West Pavilion's 13 picnic tables seat about 100 and the East Pavilion's five seat 40, so a bigger guest list needs rented tables and chairs. Add serving and cake tables, and plan carry-in delivery from the parking area.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Canopies Within the 10-by-10 Rule",
          description:
            "A 10-by-10 pop-up with stakes no longer than 8 inches can go on natural turf without a permit. Anything larger needs the director's permit in a park, and tents over 400 square feet go to the Fire Department.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses With a Permit",
          description:
            "Bouncy houses, castles and slides need a permit in any Thornton park. Ask your provider how the unit is anchored, whether it needs a generator and what wind limits they follow before you apply.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "DJs, Speakers & Noise Permits",
          description:
            "At Carpenter Park, any DJ or amplified sound means renting both pavilions and getting a free noise permit five days ahead. In other parks, amplification needs the director's written approval.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Community Events & Concerts",
          description:
            "The Harley Brown Amphitheater seats up to 500. For events on open lawns or private lots, a stage, [restroom trailers](/categories/restroom-trailer-rentals) and fencing all go on the Temporary Use Permit site plan.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Family Reunions & Backyard Parties",
          description:
            "Reunions and summer birthdays in Thornton backyards often combine a canopy, tables, a [photo booth](/categories/photo-booth-rentals) and games. Private property allows more room to grow, but ask the provider whether a large tent needs a Fire Department permit.",
          categorySlug: "party-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Thornton",
      intro: "Thornton-specific details to settle before you book rentals.",
      items: [
        "No tents or structures in parks without the director's permit, except pop-ups up to 10 by 10 feet with stakes of 8 inches or less",
        "A permit for any bouncy house, castle or slide in a park",
        "The director's written approval for amplification in parks",
        "Posted park hours (6 a.m. to 10 p.m. under City Code) for delivery, setup and pickup",
        "No driving or parking on lawns, fields or sidewalks",
        "At Carpenter Park, both pavilions plus a free noise permit (five days) for any DJ or amplified sound",
        "At Carpenter Park, beer only with an alcohol permit (two weeks), no glass, and gas grills on cement only",
        "A Temporary Use Permit (typically 7 to 10 days) with a scaled site plan for public events and temporary uses",
        "Fire Department review for tents over 400 square feet or canopies over 700 square feet",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the Thornton City Code's park rules, the City's park, Carpenter Park and pavilion reservation pages, and its Temporary Use Permit checklist. Confirm current requirements with Thornton Parks and Recreation, City planning staff and your rental provider.",
      closing:
        "Counting picnic tables against a guest list? See [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need). For tent sizing past the 10-by-10 rule, see [what size tent you need](/resources/what-size-tent-do-i-need) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning), and for community events, the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Thornton Event Rental Checklist",
      intro:
        "Pull these details together before you contact Thornton rental companies:",
      items: [
        "Park and pavilion, or private address",
        "Guest count vs. pavilion seating",
        "Canopy size (10 by 10 or a permit)",
        "Inflatable permit",
        "Noise permit or amplification approval",
        "Alcohol permit, if serving beer",
        "Temporary Use Permit and site plan",
        "Fire Department review for large tents",
        "Delivery route that stays off the lawn",
        "Setup and pickup inside park hours",
      ],
    },
    faqs: {
      heading: "Thornton Event Rental FAQ",
      items: [
        {
          question:
            "Can I put up a canopy at a Thornton park without a permit?",
          answer:
            "Yes, if it's a temporary pop-up canopy no larger than 10 by 10 feet, used for shade or protection from rain or wind, with stakes no longer than 8 inches, on natural turf during park hours. Larger tents and other structures need a permit from the Parks and Recreation director.",
        },
        {
          question: "Do I need a permit for a bounce house in Thornton?",
          answer:
            "In a City park, yes. The City Code prohibits inflatable bouncy houses, castles, slides and similar inflatables without a permit from the director or a designee. For public events, the City's Temporary Use Permit checklist also routes inflatable devices to the Sales Tax Department.",
        },
        {
          question: "Can I have a DJ at Carpenter Park?",
          answer:
            "Yes, with conditions. The City requires renting both pavilions and getting a noise permit, which is free and takes five days to process, for a DJ or any amplified sound.",
        },
        {
          question: "How many people fit at Carpenter Park's pavilions?",
          answer:
            "The West Pavilion has 13 picnic tables seating 100. The East Pavilion has five tables seating 40, with a maximum capacity of 50. Both rent all day from April 1 to October 31.",
        },
        {
          question: "How long does a Thornton Temporary Use Permit take?",
          answer:
            "The City lists a typical processing time of 7 to 10 calendar days after a complete application, and incomplete applications aren't accepted. Allow more time for related permits; special event liquor permit applications, for example, are due at least 45 days ahead.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Thornton?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging parties, reunions and events in Thornton and the north Denver metro.",
    },
  },
  {
    city: "Parker",
    state: "Colorado",
    stateCode: "CO",
    slug: "parker-co",
    county: "Douglas County",
    nearbyCities: [
      "castle-rock-co",
      "centennial-co",
      "aurora-co",
      "littleton-co",
    ],
    metaDescription:
      "Plan event rentals in Parker, CO: tents, tables and chairs, inflatables, stages and restrooms, plus the Town's 10-by-10 tent trigger, community event permits, O'Brien Park limits and no-stake setups.",
    heroSupportingCopy:
      "Compare event rental options for Parker and northern Douglas County, from tents, tables and chairs to inflatables, stages, sound and restroom units for park parties, downtown events and backyard celebrations.",
    heroTagline:
      "In Parker, the size of your tent can change the paperwork: add a tent bigger than 10 by 10 feet, a generator, a stage or a large inflatable to a park rental, and it becomes a General Event that takes 45 to 60 days.",
    categoriesIntro:
      "Explore the rental categories Parker hosts use most for park parties, downtown events, graduations, weddings and backyard celebrations.",
    localIntro: [
      "Parker is a Douglas County town southeast of Denver, with its downtown along Mainstreet and a Parks and Recreation department that rents shelters, fields and downtown parks directly. The Town says most of its parks can support events of up to 100 people; O'Brien Park and Salisbury Park handle larger crowds, Discovery Park has a bandshell for performances, and Salisbury, Bar CCC and Tallman Meadow work for events that use trails.",
      "Park rentals come in levels. A basic shelter or field rental covers a simple party, with requests at least 72 hours ahead. A General Event permit, with 45 to 60 days for approval, applies when a rental adds tents larger than 10 by 10 feet, generators, barricades, stages or inflatables over 400 square feet, or needs Town electricity or water, vendors or security. A Community Event permit, with 60 days for approval, applies to road or public parking lot closures, alcohol on public property, outdoor events of 100 or more people on public property, and 1,000 or more on private property. Applications for January–June events open November 1, and for July–December events, February 15.",
      "Town property has its own setup rules. Tents and inflatables can't be staked without approval from Parks and Recreation, because stakes can damage irrigation, so plan on weights; most parks have water for filling water weights, available for a one-time fee. Portable toilets must sit on pavement, not turf or plant beds, and the Town can require additional restrooms for larger events. Some shelters have outlets, but the Town says electricity is never guaranteed, so a generator is the safer plan when power matters. Any structure over 400 square feet needs vendor specifications and hold-down details plus a separate Building Division permit.",
      "Downtown is the busiest setting. O'Brien Park doesn't allow full-park rentals between Memorial Day and Labor Day, and the Town notes that new event requests there between May and September may not be approved. A Mainstreet closure makes an event Tier 3, the same tier as events of 3,000 or more people, and community events can't be marketed until the Town grants concept approval at its monthly staff review. Afternoon storms are part of the plan too: the National Weather Service says no place outside is safe when thunderstorms are in the area, and a tent isn't a lightning shelter.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Parker",
      intro:
        "How Parker hosts use rentals, from shelter parties to downtown events.",
      items: [
        {
          title: "Shelter & Pavilion Parties",
          description:
            "Park shelters need at least 72 hours' notice, and the rental time has to include setup and teardown. Rent the tables, chairs and linens you need beyond what's at the shelter, and keep tents to 10 by 10 or smaller to stay a simple rental.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Tents Larger Than 10 by 10",
          description:
            "A tent bigger than 10 by 10 feet turns a park rental into a General Event, and anything over 400 square feet also needs a Building Division permit. Ask the provider for dimensions, specifications and a weighted hold-down plan.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses & Kids' Events",
          description:
            "Inflatables over 400 square feet trigger a General Event permit and Building Division review, and every inflatable on Town property needs weights unless Parks approves staking. List any inflatable on the rental application.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Performances at Discovery Park",
          description:
            "Discovery Park's bandshell is built for performances. Add [sound and lighting](/categories/av-lighting-rentals) as needed, plan on a generator since Town power isn't guaranteed, and remember that generators and stages count toward a General Event permit.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Restrooms on Pavement",
          description:
            "Portable toilets go on a parking lot or walk, never on turf or plant beds, and the Town can require extra units for larger events. If you're counting on park restrooms, confirm with the Town that they'll be open and stocked.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Weddings & Backyard Celebrations",
          description:
            "On private property, the Community Event permit only applies at 1,000 or more people outdoors, so most receptions come down to the rental order: a tent, seating, a [dance floor](/categories/dance-floor-rentals), lighting and restrooms. Ask whether a large tent needs a Town building permit.",
          categorySlug: "wedding-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Parker",
      intro: "Parker-specific details to settle before you book rentals.",
      items: [
        "Shelter rental requests at least 72 hours ahead, with setup and teardown inside the rental time",
        "A General Event permit (45 to 60 days) for tents over 10 by 10 feet, generators, stages, barricades or inflatables over 400 square feet",
        "A Community Event permit (60 days) for road closures, alcohol on public property, or 100 or more people outdoors on public property",
        "A separate Building Division permit for structures over 400 square feet",
        "No staking on Town property without Parks approval; weights instead",
        "Portable toilets on pavement only, plus extra restrooms if the Town requires them",
        "Electricity that isn't guaranteed, even where outlets exist",
        "No full-park O'Brien Park rentals from Memorial Day to Labor Day",
        "Concept approval before marketing a community event",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize Parker Parks and Recreation's event hosting and park rental pages, the Town of Parker's community event permit page and National Weather Service lightning guidance. Confirm current requirements with the Town's event staff, Parks and Recreation and your rental provider.",
      closing:
        "Sizing a tent around Parker's 10-by-10 and 400-square-foot lines? See [what size tent you need](/resources/what-size-tent-do-i-need) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning). For restroom placement and counts, see the [event restroom rental guide](/resources/event-restroom-rental-guide), and for seating, [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need).",
    },
    checklist: {
      heading: "Parker Event Rental Checklist",
      intro:
        "Pull these details together before you contact Parker rental companies:",
      items: [
        "Park, shelter or private address",
        "Guest count at the busiest point",
        "Basic rental, General Event or Community Event permit",
        "Tent sizes and a weighted hold-down plan",
        "Building Division permit for anything over 400 square feet",
        "Water for weights",
        "Generator for reliable power",
        "Portable toilets placed on pavement",
        "Site map with tents, inflatables, stages and restrooms",
        "Vendor list and insurance certificates",
      ],
    },
    faqs: {
      heading: "Parker Event Rental FAQ",
      items: [
        {
          question: "What makes a Parker park rental a General Event?",
          answer:
            "Adding tents larger than 10 by 10 feet, generators, barricades, stages or inflatables over 400 square feet, or needing Town electricity or water, vendors or security. General Event permits take 45 to 60 days for approval.",
        },
        {
          question: "Can I stake a tent in a Parker park?",
          answer:
            "Not without prior approval from Parks and Recreation, because stakes can damage irrigation lines. Plan on weights instead; most parks have water for filling water weights, available for a one-time fee.",
        },
        {
          question: "Can I rent all of O'Brien Park for a summer event?",
          answer:
            "Full-park rentals aren't permitted between Memorial Day and Labor Day, and the Town notes that new event requests at O'Brien Park between May and September may not be approved. Salisbury Park and Discovery Park are alternatives for larger or performance events.",
        },
        {
          question: "Where can portable toilets go at a Parker park event?",
          answer:
            "On pavement, such as a parking lot or walk, never on turf or in plant beds. The Town can require additional restrooms based on event size, so ask about ratios when you apply.",
        },
        {
          question: "When can I apply for a Parker community event permit?",
          answer:
            "For events from January through June, applications open November 1; for July through December, they open February 15. Allow at least 60 days for approval, and don't promote the event until it has concept approval.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Parker?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging parties, weddings and events in Parker and northern Douglas County.",
    },
  },
  {
    city: "Windsor",
    state: "Colorado",
    stateCode: "CO",
    slug: "windsor-co",
    county: "Weld and Larimer Counties",
    nearbyCities: ["fort-collins-co", "greeley-co", "loveland-co"],
    metaDescription:
      "Plan event rentals in Windsor, CO: tents, tables and chairs, wedding and party rentals, inflatables and restrooms, plus the Town's 90-day Special Activities Permit, park tent rules and Windsor Lake limits.",
    heroSupportingCopy:
      "Compare event rental options for Windsor and the Weld–Larimer county line, from tents, tables and chairs to inflatables, staging, sound and restroom trailers for backyard parties, park shelter gatherings and community events.",
    heroTagline:
      "Windsor gives event planners a long runway and a few firm rules: Special Activities applications are due 90 days out, a tent larger than 10 by 10 is a permit trigger, and the Town's park rules don't allow tents after 6 p.m.",
    categoriesIntro:
      "Explore the rental categories Windsor hosts use most for backyard graduations, park shelter parties, Boardwalk Park gatherings, company picnics and weddings on private property.",
    localIntro: [
      "Windsor sits on the plains between Fort Collins and Greeley, and the Town straddles the Weld–Larimer county line, so parcel records and county services depend on which side of town you're on. On Town property, event planning starts early: every Special Activities application is due 90 days before the event, and the Town's Special Activity Guidelines charge a per-day late fine on applications submitted after that window, so treat 90 days as the real deadline. Submitting holds a spot on the events calendar, but the event isn't approved until every form and fee is in and the Special Event Coordinator issues the permit.",
      "The Town's permit checklist doubles as a rental planning tool. A Special Activities Permit is likely needed if you expect 100 or more people, alcohol will be consumed or sold, vendors will sell goods or services, amplified sound goes beyond a small personal speaker for announcements, a street or alley closes, the event affects public use of a park, or you're bringing temporary structures such as tents larger than 10 by 10, bleachers, inflatables or stages. If none of those apply, a regular shelter reservation is usually the route. Parks are public space and can't be blocked off; only shelters can be reserved for private use.",
      "Windsor's park rules shape the order. Parks are open 5 a.m. to 10 p.m., but tents and portable shelters aren't allowed after 6 p.m., so an evening party in a park relies on the shelter rather than a rented canopy. Glass containers and portable charcoal grills are prohibited, and gas grills are limited to 200 square inches with 1-pound cylinders unless staff agree otherwise. Ground stakes 12 inches or longer require line locates so irrigation isn't damaged, and the event site plan has to show every tent and canopy, portable restroom, generator and PA system, the direction of each speaker, and a 20-foot emergency access lane.",
      "Windsor Severance Fire Rescue requires a permit for tents larger than 600 square feet and canopies larger than 900 square feet; smaller ones skip the permit but still have to meet the district's safety rules. Open-flame cooking isn't allowed under any tent, generators must sit at least 20 feet from tents, and outdoor propane heaters must be secured to the ground and kept 20 feet from combustible materials. Permitted park events need restrooms beyond the park's own, including at least one ADA portable unit for public events. Windsor Lake is mainly for boating and drop-in use, and events that close the lake are limited to athletic events booked before February 1, so a lakeside gathering is planned around Boardwalk Park's shelters, Band Shell and Market Pavilion instead.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Windsor",
      intro:
        "How Windsor hosts use rentals, from park shelters to backyard receptions.",
      items: [
        {
          title: "Shelter Parties Under 100 Guests",
          description:
            "Below 100 guests, with no alcohol, vendors, amplified sound or large structures, a shelter reservation is usually enough. The rest of the park stays public, so size extra tables and chairs to fit the shelter area rather than spreading across the lawn.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Tents and the 6 p.m. Rule",
          description:
            "In Town parks, a tent larger than 10 by 10 is a permit trigger, and tents have to come down by 6 p.m. Schedule setup and teardown inside the daytime window. Anything larger than a 20-by-30, which is exactly 600 square feet, also needs a Windsor Severance Fire Rescue permit.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses at Park Events",
          description:
            "The Town lists blow-up structures among the temporary structures that trigger a Special Activities Permit. If the unit uses ground stakes 12 inches or longer, line locates come first, so ask the provider how it anchors and weights the inflatable.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Backyard Graduations & Weddings",
          description:
            "The Town's Community Impact application covers events held mostly on private property that affect major roadways and the wider community. A typical backyard reception isn't in that category, so the planning is about the yard: tent size, seating, a [dance floor](/categories/dance-floor-rentals) and where the generator goes.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Stages and Amplified Sound",
          description:
            "A stage, or amplified sound beyond a small announcement speaker, puts an event into the Special Activities process, and the site plan has to show the PA and the direction of every speaker. Plan [sound and lighting](/categories/av-lighting-rentals) with the provider before you draw the plan.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Restrooms for Park Events",
          description:
            "Permitted park events need added restrooms that guests can reach from trails or the parking lot, and public events need at least one ADA portable unit. The Town's chart scales with attendance and hours, starting at two units for 100 to 500 people over a six-hour event.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Windsor",
      intro: "Windsor-specific details to settle before you book rentals.",
      items: [
        "Special Activities applications due 90 days before the event",
        "Permit triggers: 100 or more people, alcohol, vendors, amplified sound, street closures, or tents over 10 by 10, inflatables, bleachers or stages",
        "Only shelters can be reserved; the rest of the park stays open to the public",
        "No tents or portable shelters in parks after 6 p.m., and parks close at 10 p.m.",
        "Line locates before using ground stakes 12 inches or longer",
        "A Windsor Severance Fire Rescue permit for tents over 600 square feet or canopies over 900 square feet",
        "No open-flame cooking under tents, and generators at least 20 feet from tents",
        "A site plan showing tents, restrooms, generators, speakers and a 20-foot emergency lane",
        "Added restrooms for park events, including an ADA unit for public events",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the Town of Windsor's Special Activity Guidelines (effective January 1, 2026), its Special Activities, Parks and Special Event Liquor Permit pages, and the Windsor Severance Fire Rescue tent requirements the Town publishes. Confirm current requirements with the Town and your rental provider.",
      closing:
        "Sizing a tent for a park or backyard? See [what size tent you need](/resources/what-size-tent-do-i-need) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning). For kids' parties, see the [bounce house and party rental guide](/resources/colorado-inflatable-and-party-rental-guide), and for public events, the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Windsor Event Rental Checklist",
      intro:
        "Pull these details together before you contact Windsor rental companies:",
      items: [
        "Exact address and which county it's in",
        "Guest count at the busiest point",
        "Which Special Activities triggers apply",
        "Application submitted 90 days out",
        "Shelter reservation, if no permit is needed",
        "Tent sizes and the 6 p.m. park cutoff",
        "Stake length and line locates",
        "Fire permit for tents over 600 square feet",
        "Restroom count and an ADA unit",
        "Generator, speaker and heater locations",
      ],
    },
    faqs: {
      heading: "Windsor Event Rental FAQ",
      items: [
        {
          question: "How far ahead do I apply for an event permit in Windsor?",
          answer:
            "The Town requires Special Activities applications 90 days before the event, and its Special Activity Guidelines charge a per-day late fine on applications submitted after that window. Submitting holds a spot on the calendar, but the event isn't approved until all forms and fees are in and the permit is issued.",
        },
        {
          question: "Do I need a permit for a party at a Windsor park shelter?",
          answer:
            "Not always. If you'll have fewer than 100 people, no alcohol, vendors or amplified sound, and no tents larger than 10 by 10, inflatables or stages, the Town says you can likely follow the shelter rental steps. Shelters are the only part of a park that can be reserved.",
        },
        {
          question:
            "Can a tent stay up for an evening party in a Windsor park?",
          answer:
            "No. The Town's park rules prohibit tents and portable shelters after 6 p.m., even though parks are open until 10 p.m. Plan evening gatherings around the shelter, or hold a tented event on private property.",
        },
        {
          question: "When does a tent need a fire permit in Windsor?",
          answer:
            "Windsor Severance Fire Rescue requires a permit for tents and membrane structures over 600 square feet and canopies over 900 square feet. Smaller ones don't need a separate permit but still have to meet the district's safety requirements, and open-flame cooking isn't allowed under any tent.",
        },
        {
          question: "Can alcohol be served at a Windsor park event?",
          answer:
            "Full-strength beer and wine are permitted in Town parks, but alcohol can't be sold without a Special Event Liquor Permit, which only nonprofits can apply for and which the Town Clerk wants 90 days ahead. Alcohol at an event is also on the Town's list of Special Activities Permit triggers.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Windsor?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging graduations, park parties and events in Windsor and Northern Colorado.",
    },
  },
  {
    city: "Longmont",
    state: "Colorado",
    stateCode: "CO",
    slug: "longmont-co",
    county: "Boulder and Weld Counties",
    nearbyCities: [
      "berthoud-co",
      "erie-co",
      "boulder-co",
      "loveland-co",
      "estes-park-co",
    ],
    metaDescription:
      "Plan event rentals in Longmont, CO: tents, tables and chairs, party and wedding rentals, bounce houses, staging and sound, plus the 12-by-12 tent trigger, park shelter rules and the City's 45-day event permit.",
    heroSupportingCopy:
      "Compare event rental options for Longmont and the St. Vrain Valley, from tents, tables and chairs to inflatables, staging, sound and restroom trailers for park shelter parties, backyard celebrations and public events.",
    heroTagline:
      "In a Longmont park, anything bigger than a single 12-by-12 pop-up, a bounce house or sound that carries more than 25 feet turns a shelter rental into a Special Event on Public Property permit.",
    categoriesIntro:
      "Explore the rental categories Longmont hosts use most for park shelter birthdays, backyard graduations, weddings, reunions and public events.",
    localIntro: [
      "Longmont sits at 4,979 feet on the northern Front Range, in Boulder and Weld counties, with more than 1,500 acres of parks and open space, according to the City. Many gatherings start at a City park shelter, and the shelter rules decide a lot about the rental order. A reservation covers the shelter only, not exclusive use of the park or its restrooms. Events lasting more than two hours need a shelter reservation, fee-required reservations run April through October, and reservations for the coming weekend stop at noon on Thursday. Every renter signs an agreement confirming no alcohol, and no live music or amplified sound without a Special Event on Public Property permit.",
      "That permit, also called a Use of Public Places permit, is required on public property when an event has alcohol, closes or blocks pedestrian, bike or vehicle traffic, sets up anything larger than a single 12-by-12 pop-up tent, invites the public and charges admission, has amplified sound audible more than 25 feet from the source, includes a bounce house or another higher-risk activity such as a climbing wall, or sells goods. Applications go through the City's eProval portal at least 45 days ahead, with a site plan, proof of the park reservation and a certificate of insurance with a $1 million combined single limit naming the City as additional insured. Block parties on neighborhood streets use a separate application, due 15 days ahead with signatures from impacted neighbors.",
      "The City spells out bounce house rules in detail. Inflatables are allowed in parks only with the special event permit, must be secured with sandbags or stakes no longer than 6 inches (longer stakes need an 811 utility locate at least a week ahead), and need a generator rather than the shelter's outlets. Water inflatables aren't allowed, and the insurance certificate has to cover the bounce house; the City notes that some vendors supply that coverage. Photographers and other businesses working in parks need a separate Commercial Use permit, and drones aren't allowed in City parks or open spaces.",
      "Events on private property follow different rules. The City says they may need a Temporary Use Special Event Permit through Planning and Development Services, events with alcohol service or sales to the public need approval from the Local Licensing Authority, and every event has to comply with the noise code, which has no permit for excessive noise. Summer heat matters here too: NOAA's 1991–2020 normals for the Longmont 2 ESE station put the average July high at 90.8°F, so shade and water belong in the plan for afternoon events.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Longmont",
      intro: "Common Longmont setups and the City rules that come with them.",
      items: [
        {
          title: "Park Shelter Birthdays",
          description:
            "Rented tables and chairs add overflow seating, a serving table and a cake table at a shelter. Book early in the week, since weekend reservations close Thursday at noon, and remember the rest of the park stays public.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Bounce Houses With a Permit",
          description:
            "A bounce house in a Longmont park needs the Special Event on Public Property permit, sandbags or stakes no longer than 6 inches, a generator and insurance naming the City. Ask the provider whether its policy meets the City's requirement and whether it brings the generator.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Tents Bigger Than a Pop-Up",
          description:
            "A single 12-by-12 pop-up works under a shelter reservation, but anything larger triggers the 45-day permit. For a 20-by-20 or bigger, start the eProval application when you book the tent and put it on the site plan.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Backyard Graduations & Weddings",
          description:
            "Private property skips the park permit, but the City may still require a Temporary Use Special Event Permit, and the noise code applies with no permit to exceed it. Point the [DJ's speakers](/categories/av-lighting-rentals) away from neighbors and set an end time.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Public Events and Stages",
          description:
            "Admission charges, vendor sales, or amplified sound over 80 decibels that carries more than 25 feet all point to the Use of Public Places permit. The stage, sound system, restrooms and entries and exits all belong on the site plan.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Restrooms Beyond the Park's",
          description:
            "Shelter renters don't get exclusive use of park restrooms, and the City's winter shelter reservations are fee-free because restrooms are winterized. For larger groups or cold-season events, plan portable units or a restroom trailer.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Longmont",
      intro: "Longmont-specific details to settle before you book rentals.",
      items: [
        "A shelter reservation for park events over two hours, with weekend bookings closing Thursday at noon",
        "No alcohol, live music or amplified sound at a shelter without a special event permit",
        "A Special Event on Public Property permit for tents larger than a single 12-by-12, bounce houses, admission, sales or street closures",
        "eProval applications at least 45 days ahead, with a site plan and proof of the park reservation",
        "A $1 million certificate of insurance naming the City, including bounce house coverage",
        "Sandbags or 6-inch stakes for inflatables, an 811 locate a week ahead for longer stakes, and a generator",
        "A Liquor Special Event Permit for qualifying nonprofits, which the City Clerk asks for 60 days ahead",
        "A possible Temporary Use Special Event Permit for private-property events, and the noise code everywhere",
        "A Commercial Use permit for photographers in parks, and no drones",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize City of Longmont City Clerk special event, Park Shelter Reservations and Permits, Commercial Use and eProval pages, the City's About Longmont page and NOAA climate normals. Confirm current requirements with the City and your rental provider.",
      closing:
        "Booking a bounce house? Start with our [bounce house and party rental guide](/resources/colorado-inflatable-and-party-rental-guide). For tents, see [what size tent you need](/resources/what-size-tent-do-i-need), and for public events with a stage or DJ, the [stage, sound and lighting rental guide](/resources/colorado-stage-av-lighting-rental-guide).",
    },
    checklist: {
      heading: "Longmont Event Rental Checklist",
      intro:
        "Pull these details together before you contact Longmont rental companies:",
      items: [
        "Exact address and whether it's City property",
        "Guest count and event length",
        "Shelter reservation and proof of booking",
        "Tent sizes compared with a 12-by-12",
        "Bounce house anchoring, generator and insurance",
        "Sound plan and speaker direction",
        "eProval application 45 days out",
        "Certificate of insurance naming the City",
        "Restrooms if park facilities won't cover it",
        "Shade and water for summer heat",
      ],
    },
    faqs: {
      heading: "Longmont Event Rental FAQ",
      items: [
        {
          question:
            "Do I need a permit for a party at a Longmont park shelter?",
          answer:
            "A shelter reservation is required for events over two hours. You also need a Special Event on Public Property permit if you'll have alcohol, a tent larger than a single 12-by-12 pop-up, a bounce house, amplified sound audible beyond 25 feet, sales or admission.",
        },
        {
          question: "Can I have a bounce house in a Longmont park?",
          answer:
            "Yes, with the special event permit. The City requires sandbags or stakes no longer than 6 inches, a generator instead of shelter outlets, no water inflatables, and a $1 million certificate of insurance naming the City that covers the inflatable.",
        },
        {
          question:
            "How far ahead do I apply for a Longmont special event permit?",
          answer:
            "Submit the Use of Public Places application through eProval at least 45 days before the event. Reserve the park first, because proof of the reservation is part of the application. Block party applications are due 15 days ahead.",
        },
        {
          question: "Can I serve alcohol at a Longmont park shelter?",
          answer:
            "Not under a standard shelter reservation, which confirms no alcohol use. Alcohol on City property needs the special event permit, and Liquor Special Event Permits are limited to qualifying nonprofits and political candidates.",
        },
        {
          question: "Do backyard parties in Longmont need a permit?",
          answer:
            "The City says private-property events may need a Temporary Use Special Event Permit from Planning and Development Services, and events with alcohol service or sales to the public need liquor approval. The noise code applies to every event, and there's no permit to exceed it.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Longmont?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging parties, weddings and events in Longmont and the St. Vrain Valley.",
    },
  },
  {
    city: "Estes Park",
    state: "Colorado",
    stateCode: "CO",
    slug: "estes-park-co",
    county: "Larimer County",
    nearbyCities: ["loveland-co", "longmont-co"],
    metaDescription:
      "Plan event rentals in Estes Park, CO: wedding tents, tables and chairs, dance floors, restroom trailers and lighting, plus Rocky Mountain National Park ceremony limits, Town venue permits and Larimer County rules.",
    heroSupportingCopy:
      "Compare event rental options for Estes Park and the Estes Valley, from tents, tables and chairs to dance floors, restroom trailers, staging and lighting for mountain weddings, reunions and Town events.",
    heroTagline:
      "Many Estes Park weddings pair a small ceremony in Rocky Mountain National Park with a reception somewhere else, because the park's ceremony sites don't allow tables, tents or generators. The reception is where the rentals go.",
    categoriesIntro:
      "Explore the rental categories Estes Park hosts use most for mountain weddings and receptions, family reunions, retreats and Town events.",
    localIntro: [
      "Estes Park sits at 7,522 feet at the eastern edge of Rocky Mountain National Park, which surrounds the town on three sides, according to Visit Estes Park. That setting draws couples, and the park's rules shape how weddings here are planned. Every ceremony in the park needs a Special Use Permit for a designated site, and the largest group allowed at any site is 30 people, counting the couple, guests, officiant and photographer. Ceremonies are limited to two hours including setup, the permit prohibits or restricts decorations, altars, tables, tents, floral displays and generators, and only a few chairs are allowed for guests who can't stand. Amplified music isn't permitted.",
      "The park says that for a large, exclusive or decorated celebration, there are locations outside the park that can accommodate it. Lily Lake Southside Picnic Area is the only park site that can host a picnic or simple food reception, with a separate permit and no tents, bands, food trucks or loud music. So receptions move to private venues, lodges, ranches and rented land in the Estes Valley, and that's where tents, seating, dance floors, heaters and restrooms come in. The Town runs O'Connor Pavilion, a seasonal site five miles west of downtown that backs up to the national park, with a covered, open-sided pavilion seating 140, a 350-person maximum, two ceremony meadows, electricity in the reception area, vault restrooms and no grilling.",
      "In town, events in Bond Park, Performance Park, George Hix Riverside Plaza and on Town streets need a Town special event permit. Applications are due 120 days ahead for new events and 60 days for returning ones, review takes at least two weeks, and new events in Bond Park need Town Board approval. Outside town limits, Larimer County requires a Private Land Special Event permit when overall attendance on a property is expected to exceed 40 people; the process starts with an email to the County's special events staff and a pre-application meeting, and review can take 30 to 60 days. Tent and fire code questions go to the Estes Valley Fire Protection District, which enforces the 2021 International Fire Code in the Town and the surrounding valley.",
      "Evenings are the weather factor most planners underestimate. NOAA's 1991–2020 normals for the Estes Park 3 SSE station put the average July high at 80.2°F and the average July low at 48.2°F, and September lows average 39.2°F, so a reception that runs past sunset needs heaters, sidewalls and a place to warm up even in midsummer. The National Weather Service says there's no safe place outside when thunderstorms are in the area, so plan a building or hard-topped vehicles guests can reach. Fall brings golden aspens and the elk rut, when bulls call and spar, so give wildlife room and keep food covered.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Estes Park",
      intro:
        "How Estes Park events use rentals, from mountain receptions to Town festivals.",
      items: [
        {
          title: "Receptions After a Park Ceremony",
          description:
            "The ceremony in the park stays simple, so the reception carries the rentals: seating, linens, a [dance floor](/categories/dance-floor-rentals), lighting and often a tent sized for the full guest count, including guests who couldn't attend a 30-person ceremony.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Mountain Meadow Tents",
          description:
            "Meadow and ranch sites need a tent anchored for mountain wind and storms. Ask how the provider stakes or ballasts the tent, whether sidewalls are included, and who handles any Estes Valley Fire Protection District review.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Power for Lighting and Sound",
          description:
            "Rustic sites often have limited power; O'Connor Pavilion has electricity in the reception area only. Ask how [lighting and sound](/categories/av-lighting-rentals) will be powered, and where a generator would sit if one is needed.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Restrooms for Rustic Venues",
          description:
            "Mountain venues may have vault restrooms or none at all. A restroom trailer suits a wedding crowd, and an accessible unit belongs on firm, level ground near the reception rather than across a meadow.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Reunions and Retreats",
          description:
            "Family reunions and group retreats often pair a pavilion or lodge with extra seating. O'Connor Pavilion's picnic tables seat 140, so a larger group needs rented tables and chairs for the rest.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Town Events and Stages",
          description:
            "Events in Bond Park, Performance Park or Riverside Plaza go through the Town's permit, and the Riverside Plaza policy asks for tent permits, liquor licenses, security and insurance documents 30 days before the event. Put the stage and sound on the event layout early.",
          categorySlug: "stage-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Estes Park",
      intro: "Estes Park-specific details to settle before you book rentals.",
      items: [
        "Rocky Mountain National Park ceremony permits: designated sites, 30 people at most and two hours including setup",
        "No tables, tents, decorations or generators at park ceremony sites, and no amplified music",
        "Receptions in the park only at Lily Lake Southside Picnic Area, with a separate permit and no tents",
        "Town special event permits for Bond Park, Performance Park, Riverside Plaza and streets: 120 days for new events, 60 for returning ones",
        "A Larimer County Private Land Special Event permit for more than 40 people outside town limits",
        "Tent and fire code questions for the Estes Valley Fire Protection District",
        "Cool evenings, even in July, and heaters your provider approves for use near the tent",
        "Thunderstorms, and a building or hard-topped vehicles guests can reach",
        "Limited power and restrooms at rustic sites",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize National Park Service wedding information for Rocky Mountain National Park, Town of Estes Park event permit and venue pages, Larimer County special event rules, Estes Valley Fire Protection District code adoption, NOAA climate normals, National Weather Service lightning guidance and Visit Estes Park. Confirm current requirements with each agency, your venue and your rental provider.",
      closing:
        "Planning a mountain reception? See the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning) for wind, hail, lightning and altitude. For restrooms at a rustic site, see the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Estes Park Event Rental Checklist",
      intro:
        "Pull these details together before you contact Estes Park rental companies:",
      items: [
        "Ceremony site and its group limit",
        "Reception venue and its rental rules",
        "Town limits or unincorporated Larimer County",
        "Guest count at the reception",
        "Tent size, anchoring and fire district review",
        "Heaters and sidewalls for the evening",
        "Power for lighting, sound and catering",
        "Restroom trailer and an accessible unit",
        "Storm shelter guests can reach",
        "Parking or shuttles for guests",
      ],
    },
    faqs: {
      heading: "Estes Park Event Rental FAQ",
      items: [
        {
          question:
            "Can we have tents or tables at a Rocky Mountain National Park wedding?",
          answer:
            "No. The park's wedding permit prohibits or restricts tables, tents, altars, decorations, floral displays and generators, and only a few chairs are allowed for guests who can't stand. Ceremonies are limited to designated sites, 30 people at most and two hours.",
        },
        {
          question: "Can we hold our reception in the national park?",
          answer:
            "Only a picnic or simple food reception at Lily Lake Southside Picnic Area, with a separate Special Use Permit. The park doesn't allow food trucks, bands, loud music, tents or large quantities of alcohol there, so receptions with rentals happen outside the park.",
        },
        {
          question:
            "Does a private wedding near Estes Park need a county permit?",
          answer:
            "Outside town limits, Larimer County requires a Private Land Special Event permit when overall attendance on a property is expected to exceed 40 people. Start by emailing the County's special events staff, who set the submittal deadline at a pre-application meeting.",
        },
        {
          question: "How cold does an Estes Park evening event get?",
          answer:
            "NOAA's 1991–2020 normals for the Estes Park 3 SSE station put the average July low at 48.2°F and the September low at 39.2°F. Plan heaters, sidewalls and a warm-up spot for any reception that runs past sunset.",
        },
        {
          question:
            "How far ahead do I apply for a Town of Estes Park event permit?",
          answer:
            "For Bond Park, Performance Park, George Hix Riverside Plaza and Town streets, apply 120 days ahead for a new event or 60 days for a returning one. Review takes at least two weeks, and new events in Bond Park need Town Board approval.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Estes Park?",
      description:
        "List your business on Event Rental Finder and get discovered by couples and planners arranging mountain weddings, reunions and events in Estes Park and the Estes Valley.",
    },
  },
  {
    city: "Berthoud",
    state: "Colorado",
    stateCode: "CO",
    slug: "berthoud-co",
    county: "Larimer and Weld Counties",
    nearbyCities: ["loveland-co", "longmont-co"],
    metaDescription:
      "Plan event rentals in Berthoud, CO: tents, tables and chairs, party rentals, bounce houses and restrooms, plus Town pavilion rules, special event permits and Berthoud Fire tent requirements.",
    heroSupportingCopy:
      "Compare event rental options for Berthoud and the farmland between Loveland and Longmont, from tents, tables and chairs to inflatables, staging and restroom trailers for pavilion parties, backyard celebrations and rural events.",
    heroTagline:
      "Berthoud's pavilions are small, its fire district's tent rules apply to every tent, and a property just outside town can fall under Larimer or Weld County rules instead, so the site decides most of the plan.",
    categoriesIntro:
      "Explore the rental categories Berthoud hosts use most for pavilion birthdays, backyard graduations, farm and acreage weddings, reunions and community events.",
    localIntro: [
      "Berthoud calls itself the Garden Spot of Colorado. The Town was incorporated in 1888, named for Edward L. Berthoud, and agriculture is still a large part of the community, according to its budget documents. Its land is split about 54 percent in Larimer County and 46 percent in Weld County, though most residents live on the Larimer side, and the farms and acreages around town can sit in either county. That matters for events, because the permit office depends on where the property is: the Town inside town limits, or Larimer or Weld County outside them.",
      "Town pavilions are built for small gatherings, with seating listed at 24 to 36 at most of them and six at Roberts Lake. Pioneer Park's three pavilions have electrical outlets and no grills, and the park has a bounce house install section. Town Park has charcoal grills, but its restrooms are seasonal and unavailable October through May; Waggener has year-round restrooms; and Roberts Lake has no public restrooms. Pavilion requests have to come in at least 30 days ahead. Any event open to the public, or a neighborhood function, is a special event that needs a Town permit: the Town responds to a preliminary request form within 72 hours, and the permit is submitted 30 to 60 days ahead depending on expected attendance, with alcohol permits due no later than 45 days before the event and two to three weeks for approval.",
      "Berthoud Fire Protection District's rules reach every tent, not just the big ones. Tents and canopies over 700 square feet need a district permit, usually applied for by the tent company, with a flame-resistance certificate and a site plan. For tents of any size, no cooking, heating devices or fuel are allowed underneath, a serviced 2A:10BC fire extinguisher has to be on hand, and tents can't stand within 20 feet of lot lines, buildings, parked vehicles or engines, with guy ropes counted in the distance. The district also lists minimum anchor weights: 40 pounds per leg for a 10-by-10 canopy, 80 pounds per leg for a 10-by-20 and 500 pounds per leg for a six-leg 40-by-20 tent.",
      "Bigger events add steps. A Planned Outdoor Event permit from the district applies to events with 1,000 or more people or four or more tents of 700 square feet or more, and the district decides during review whether a fire standby crew is required. Food trucks with a generator or propane need a district inspection and permit at least 10 business days before the event, though a permit from one of the participating Larimer and Weld County fire departments is honored at the others through December 31. Outside town limits, Larimer County requires a Private Land Special Event permit when attendance is expected to exceed 40 people, and the district points organizers to Weld and Boulder County special event permits as well.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Berthoud",
      intro:
        "Common Berthoud setups, from pavilion parties to weddings on open land.",
      items: [
        {
          title: "Pavilion Birthday Parties",
          description:
            "With pavilions seating a few dozen, a birthday party often adds a canopy, extra [tables and chairs](/categories/table-chair-rentals) and a few party rentals. Pioneer Park has outlets but no grills, so plan cold food or catering there.",
          categorySlug: "party-rentals",
        },
        {
          title: "Bounce Houses at Pioneer Park",
          description:
            "Pioneer Park lists a bounce house install section among its pavilion features. Ask the provider for the unit's footprint and power needs, and mention the inflatable in your pavilion request.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Farm and Acreage Weddings",
          description:
            "Weddings on farmland around Berthoud often start from bare ground: a tent, seating, a [dance floor](/categories/dance-floor-rentals), lighting, power and restrooms. Check the county first, since a property outside town limits may need a Larimer or Weld County permit.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents and the 20-Foot Rule",
          description:
            "Berthoud Fire keeps tents 20 feet from lot lines, buildings, parked vehicles and engines, counting guy ropes. In a backyard, that can limit tent size more than the guest count does, so measure before you order.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Restrooms Where Pavilions Have None",
          description:
            "Roberts Lake has no public restrooms, and Town Park's are closed October through May. Portable units or a restroom trailer fill the gap, especially for spring and fall events.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Community Events and Stages",
          description:
            "Events open to the public need a Town special event permit, and large ones may also need a Planned Outdoor Event permit from Berthoud Fire. Plan the stage, [sound](/categories/av-lighting-rentals) and vendor layout before you draw the site plan.",
          categorySlug: "stage-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Berthoud",
      intro: "Berthoud-specific details to settle before you book rentals.",
      items: [
        "Whether the property is inside town limits or in unincorporated Larimer or Weld County",
        "Pavilion requests at least 30 days ahead",
        "A Town special event permit for public events, 30 to 60 days ahead depending on attendance",
        "Alcohol permits no later than 45 days before the event",
        "Seasonal restrooms at Town Park (unavailable October through May) and none at Roberts Lake",
        "A Berthoud Fire permit for tents and canopies over 700 square feet",
        "No cooking, heating or fuel under any tent, and a fire extinguisher at every tent",
        "20 feet between tents and lot lines, buildings, parked vehicles and engines",
        "Food truck fire inspections at least 10 business days ahead",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize Town of Berthoud special event, rental and pavilion request pages, the Town's 2025 budget book, Berthoud Fire Protection District special permit requirements and Larimer County special event rules. Confirm current requirements with the Town, the fire district and your rental provider.",
      closing:
        "Planning a pavilion party? See the [bounce house and party rental guide](/resources/colorado-inflatable-and-party-rental-guide) and [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need). For a farm wedding, see the [Colorado wedding rental checklist](/resources/colorado-wedding-rental-checklist) and our [Colorado outdoor event tent planning guide](/resources/colorado-outdoor-event-tent-planning).",
    },
    checklist: {
      heading: "Berthoud Event Rental Checklist",
      intro:
        "Pull these details together before you contact Berthoud rental companies:",
      items: [
        "Exact address and which county it's in",
        "Guest count and whether it's open to the public",
        "Pavilion choice and its seating",
        "Special event and alcohol permit dates",
        "Tent size and 20-foot clearances",
        "Leg weights or stakes for each canopy",
        "No cooking or heaters under tents",
        "Restrooms for the season",
        "Power for lighting, inflatables and catering",
        "Food truck fire inspection",
      ],
    },
    faqs: {
      heading: "Berthoud Event Rental FAQ",
      items: [
        {
          question: "Do I need a permit for an event in Berthoud?",
          answer:
            "Any event open to the public, or a neighborhood function, is a special event that needs a Town permit. Start with the preliminary request form, submit the permit 30 to 60 days ahead depending on attendance, and allow two to three weeks for approval.",
        },
        {
          question: "When does a tent need a fire permit in Berthoud?",
          answer:
            "Berthoud Fire Protection District requires a permit for tents and canopies over 700 square feet, usually applied for by the tent company. Every tent, regardless of size, needs a serviced fire extinguisher, and no cooking or heaters are allowed underneath.",
        },
        {
          question: "How much weight does a canopy need in Berthoud?",
          answer:
            "Berthoud Fire lists a minimum of 40 pounds per leg for a 10-by-10 canopy and 80 pounds per leg for a 10-by-20. A 40-by-20 tent needs 500 pounds on each of its six legs.",
        },
        {
          question: "How many people fit at a Berthoud pavilion?",
          answer:
            "The Town lists most pavilions with seating for 24 to 36 people, and the Roberts Lake pavilion seats six. Larger groups need rented tables, chairs and shade, and an event open to the public needs a special event permit.",
        },
        {
          question:
            "What permits apply to a wedding on a farm outside Berthoud?",
          answer:
            "Outside town limits, the county decides. Larimer County requires a Private Land Special Event permit when expected attendance exceeds 40 people, and Weld County has its own special events permit. For properties in the Berthoud Fire Protection District, its tent and food truck rules apply too.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Berthoud?",
      description:
        "List your business on Event Rental Finder and get discovered by families and couples arranging parties, farm weddings and events in Berthoud and Northern Colorado.",
    },
  },
  {
    city: "Erie",
    state: "Colorado",
    stateCode: "CO",
    slug: "erie-co",
    county: "Boulder and Weld Counties",
    nearbyCities: [
      "longmont-co",
      "boulder-co",
      "westminster-co",
      "thornton-co",
    ],
    metaDescription:
      "Plan event rentals in Erie, CO: party rentals, tables and chairs, tents, wedding rentals, lighting and photo booths, plus Town park shelter rules, Community Events permits, mobile vending and open container permits.",
    heroSupportingCopy:
      "Compare event rental options for Erie and the open space between Boulder and the I-25 corridor, from tents, tables and chairs to party rentals, lighting, photo booths and restrooms for shelter parties, block parties and backyard celebrations.",
    heroTagline:
      "Erie draws a clear line between private property and Town property: a backyard party doesn't need a Community Events permit, but a food truck at that party still needs a Mobile Vending Permit, and Town park events are planned 90 days out.",
    categoriesIntro:
      "Explore the rental categories Erie hosts use most for park shelter parties, block parties, backyard graduations, weddings and community events.",
    localIntro: [
      "Erie began as a coal town. It was platted in 1871 after the Briggs Mine opened, was incorporated on November 16, 1874, and was once called the most important coal town in Colorado, according to the Town's history page. Today it's a home rule town in Boulder and Weld counties, with an estimated 41,916 residents in 2025 and about 1,500 acres of parks and open space, according to the Town's community profile. Families fill park shelters for birthdays and reunions, neighborhoods hold block parties, and many graduations and weddings happen in backyards with mountain views to the west.",
      "Where the event happens sets the paperwork. The Town's Community Events application covers commercial activities and special events on Town property and is due at least 90 days before the event; depending on the event, the Town may ask for proof of insurance, a site map, resident notification, a traffic plan, a vendor list and a Zero Waste plan. Events held entirely on private property don't need that application, though Town ordinances such as noise rules still apply. One permit follows vendors everywhere: a Mobile Vending Permit is required for mobile vending on any property, private property included, and the event coordinator is responsible for making sure vendors have one.",
      "Park shelters are first come, first served unless reserved, and reservations run March 15 through November 15. The Town's parks and open space rules shape the rental order: amplified sound needs the parks director's prior written consent, nothing can be attached to park structures to decorate them, fires are limited to designated devices, and vehicles stay in designated areas. Most parks are open from dawn to dusk, while Erie Community Park is open 6 a.m. to 10 p.m., so an evening party needs the right park. Alcohol is prohibited in parks under the code, with one route around it: an Open Container Permit allows beer and wine at a reserved park shelter or an approved block party, filed with the Town Clerk at least 10 days before the event.",
      "Indoor events at the Erie Community Center have their own rules. Renters can bring in outside furniture rentals when the Center's seating falls short, but rice, confetti, birdseed, glitter and decorative candles aren't allowed, groups of 100 or more pay a damage deposit, and alcohol permits are due 10 days ahead. Fire code questions for tents and generators go to Mountain View Fire Rescue, which serves Erie, so ask the district directly rather than relying on a neighboring city's thresholds. Weather on the open-space plains can turn quickly, so plan tent weights and a storm shelter guests can reach.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Erie",
      intro: "Common Erie setups, from shelter parties to backyard receptions.",
      items: [
        {
          title: "Shelter Birthday Parties",
          description:
            "A reserved shelter gives a party a base; the rentals add the rest. Decorations can't be attached to shelter structures, so bring freestanding [tables and chairs](/categories/table-chair-rentals), banners on stands and a serving table instead.",
          categorySlug: "party-rentals",
        },
        {
          title: "Block Parties",
          description:
            "Block parties need a Town permit, and an Open Container Permit filed 10 days ahead covers beer and wine. Folding tables, chairs and a canopy are the usual order; keep the street layout within the area your permit covers.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Backyard Tents With a View",
          description:
            "Private property skips the Community Events application, so a backyard tent is mostly a sizing and anchoring question. Ask the provider about weights or stakes, irrigation lines and how the tent handles wind off the plains.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Weddings and Receptions",
          description:
            "A backyard or private-venue wedding in Erie typically combines a tent, seating, linens, a [dance floor](/categories/dance-floor-rentals) and lighting. If a food truck or coffee cart is coming, confirm it holds an Erie Mobile Vending Permit.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Lighting for Evening Events",
          description:
            "Most Erie parks close at dusk, so evening parties belong at Erie Community Park, which is open until 10 p.m., or on private property. String lights, uplighting and a sound system need power, and amplified sound in a park needs written consent.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Photo Booths at Indoor Events",
          description:
            "Community Center rentals rule out confetti, glitter and decorative candles, so a photo booth with props is an easy alternative. Confirm the booth's footprint and outlet needs with the Center.",
          categorySlug: "photo-booth-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Erie",
      intro: "Erie-specific details to settle before you book rentals.",
      items: [
        "A Community Events application at least 90 days ahead for events and commercial activities on Town property",
        "No Community Events application for events solely on private property, though Town ordinances still apply",
        "A Mobile Vending Permit for every food truck or vendor, private property included",
        "Shelter reservations from March 15 through November 15",
        "Park hours from dawn to dusk, except Erie Community Park (6 a.m. to 10 p.m.)",
        "Written consent from the parks director for amplified sound",
        "Nothing attached to park structures, and fires only in designated devices",
        "An Open Container Permit 10 days ahead for beer and wine at a shelter or block party",
        "Tent and generator questions for Mountain View Fire Rescue",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize Town of Erie history, community profile, Community Events Permit, Facility and Park Rentals, Open Container and Private Event Permit, and facility rental pages, and the Town's parks and open space rules. Confirm current requirements with the Town, Mountain View Fire Rescue and your rental provider.",
      closing:
        "Planning a shelter or block party? See the [bounce house and party rental guide](/resources/colorado-inflatable-and-party-rental-guide) and [how many tables and chairs you need](/resources/how-many-tables-and-chairs-do-i-need). For an evening reception with sound and lighting, see the [stage, sound and lighting rental guide](/resources/colorado-stage-av-lighting-rental-guide).",
    },
    checklist: {
      heading: "Erie Event Rental Checklist",
      intro:
        "Pull these details together before you contact Erie rental companies:",
      items: [
        "Exact address and whether it's Town property",
        "Guest count and event hours",
        "Shelter reservation or block party permit",
        "Community Events application, if on Town property",
        "Mobile Vending Permits for food trucks",
        "Open Container Permit 10 days out",
        "Sound plan and written consent",
        "Freestanding decor, nothing attached",
        "Power for lighting and the photo booth",
        "Tent weights and a storm plan",
      ],
    },
    faqs: {
      heading: "Erie Event Rental FAQ",
      items: [
        {
          question: "Do I need a permit for a backyard party in Erie?",
          answer:
            "Not a Community Events permit; the Town says that application isn't required for activities solely on private property. Town ordinances still apply, and any food truck or vendor needs an Erie Mobile Vending Permit even on private property.",
        },
        {
          question: "How far ahead do I apply for an event in an Erie park?",
          answer:
            "Community Events applications for events and commercial activities on Town property are due at least 90 days before the event. Shelter reservations are available March 15 through November 15.",
        },
        {
          question: "Can I serve beer or wine at an Erie park shelter?",
          answer:
            "Only with an Open Container Permit, which covers beer, fermented malt beverages and wine at a reserved shelter or an approved block party. File it with the Town Clerk at least 10 days before the event.",
        },
        {
          question: "Can I play amplified music in an Erie park?",
          answer:
            "The Town's park rules require the parks director's prior written consent for amplified sound. Ask when you reserve, and keep the speakers pointed away from homes and trails.",
        },
        {
          question:
            "Can I bring rented tables and chairs into the Erie Community Center?",
          answer:
            "Yes. The Center's rental guidelines allow outside furniture rentals when its own seating isn't enough. Rice, confetti, birdseed, glitter and decorative candles aren't allowed, and groups of 100 or more pay a damage deposit.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Erie?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging shelter parties, block parties and backyard events in Erie and the north metro.",
    },
  },
  {
    city: "Fruita",
    state: "Colorado",
    stateCode: "CO",
    slug: "fruita-co",
    county: "Mesa County",
    nearbyCities: ["grand-junction-co", "palisade-co"],
    metaDescription:
      "Plan event rentals in Fruita, CO: tents, tables and chairs, party rentals, sound and lighting, plus the City's online special event permit, park shelter reservations, sound amplification rules and tent permit thresholds.",
    heroSupportingCopy:
      "Compare event rental options for Fruita and the Grand Valley's west end, from tents, tables and chairs to party rentals, sound, lighting and restrooms for shelter parties, block parties, bike events and backyard celebrations.",
    heroTagline:
      "Fruita handles special event permits entirely online, lets adults drink beer and wine in its parks unless posted otherwise, and uses a fire code that treats a party tent and an outdoor assembly tent very differently.",
    categoriesIntro:
      "Explore the rental categories Fruita hosts use most for park shelter parties, block parties, bike races, festivals and backyard weddings.",
    localIntro: [
      "Fruita sits at the west end of the Grand Valley in Mesa County, and the City's own special event page names the range of events it permits: bike races, festivals and neighborhood block parties. The process is fully online. Organizers fill out the City's Special Event Permit form and can contact the City's Special Projects Coordinator to confirm that a venue is available before they lock in a date, a tent order or a band.",
      "Smaller gatherings often start at a park shelter. The City rents shelters at Reed Park, Little Salt Wash Park, Heritage Park and the Fruita Bike Park, reserved online by the hour, and Little Salt Wash Park also has rentable sports fields. A shelter gives a party shade and a base, but most groups still bring tables, chairs, a canopy or two and a serving table. The park code bars glass containers and prohibits pitching tents except in places provided for them, so talk to the City before you plan any tent in a park.",
      "Alcohol rules are more relaxed than in many Colorado towns. Under Ordinance 2025-17, adults 21 and older may drink beer and wine in a public park unless a posted notice says otherwise; spirits are limited to the licensed premises of a special event permitted to sell alcohol under state law. Sound has its own rule: the municipal code requires a license to operate sound amplification devices, but events held under a City special event permit are excluded from that licensing requirement. A DJ at a private backyard party is a different question from a band at a permitted festival, so ask the City which applies.",
      "Fire code is set jointly with the Lower Valley Fire Protection District, which adopted the 2024 International Fire Code; Fruita followed with Ordinance 2026-04. As amended locally, a tent needs a fire operational permit when it covers more than 2,400 square feet, but tents used for outdoor assembly uses such as a circus, carnival, theater or dance hall need one above 400 square feet, and mobile stages are exempt. Food at a public event runs through Mesa County Public Health, which asks event coordinators for a plan review 30 days ahead and licenses each food vendor.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Fruita",
      intro: "Common Fruita setups, from shelter parties to permitted festivals.",
      items: [
        {
          title: "Park Shelter Parties",
          description:
            "Reserve a shelter at Reed Park, Little Salt Wash Park, Heritage Park or the Fruita Bike Park, then add [tables and chairs](/categories/table-chair-rentals), a serving table and shade for overflow guests. Leave the glassware at home; glass containers aren't allowed in parks.",
          categorySlug: "party-rentals",
        },
        {
          title: "Block Parties",
          description:
            "The City's online special event permit covers neighborhood block parties. Folding tables, chairs, a canopy and a sound system are the usual order; confirm the street area and hours on the permit before the delivery is booked.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Bike Race and Festival Support",
          description:
            "Bike events and festivals need tents for registration and aid stations, barricades, restrooms and a PA. A permitted event is excluded from the City's sound amplification license, and a mobile stage is exempt from the tent permit rules.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Backyard Weddings and Receptions",
          description:
            "Private property keeps the paperwork light, but tent size still matters: a reception tent used like a dance hall can cross the 400-square-foot fire permit line much sooner than a simple shade tent. Ask the provider who files with Lower Valley Fire.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Sound and Lighting",
          description:
            "Fruita requires a license to operate sound amplification devices outside permitted events, parades and processions. Settle the sound plan before booking a DJ, and add string lights or [uplighting](/categories/av-lighting-rentals) for evening events.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Restrooms for Larger Gatherings",
          description:
            "Shelter parks have limited facilities, so festivals and big reunions often add portable restrooms and handwashing stations. Put them on the site plan with your tents and vendor spaces.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Fruita",
      intro: "Fruita-specific details to settle before you book rentals.",
      items: [
        "The City's online Special Event Permit form, and a call to confirm the venue is available",
        "Shelter reservations at Reed Park, Little Salt Wash Park, Heritage Park or the Fruita Bike Park",
        "No glass containers in parks, and no pitched tents except where the City provides for them",
        "Beer and wine allowed in parks for adults 21 and older unless posted otherwise; spirits only on a licensed special event premises",
        "A sound amplification license, unless the event runs under a City special event permit",
        "A fire operational permit for tents over 2,400 square feet, or over 400 square feet for outdoor assembly uses",
        "Mobile stages exempt from the tent permit sections",
        "A Mesa County Public Health coordinator plan review 30 days ahead when food is served",
        "Licensed event vendors for every food booth or truck",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Fruita Special Event Permit Application and Park and Park Shelter Reservations pages, Ordinances 2014-05, 2015-10, 2025-17 and 2026-04, the Lower Valley Fire Protection District's 2024 IFC resolution and Mesa County Public Health food safety guidance. Confirm current requirements with the City, Lower Valley Fire and your rental provider.",
      closing:
        "Serving food or drinks at a public event? See the [event food vendor guide](/resources/colorado-event-food-vendor-guide) and the [special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide). For tents, see [Colorado outdoor event tent planning](/resources/colorado-outdoor-event-tent-planning).",
    },
    checklist: {
      heading: "Fruita Event Rental Checklist",
      intro: "Pull these details together before you contact Fruita rental companies:",
      items: [
        "Exact address and whether it's City property",
        "Guest count and event hours",
        "Shelter reservation or special event permit",
        "Sound plan and amplification license question",
        "Tent sizes and intended use",
        "Fire permit, if a tent crosses the threshold",
        "Alcohol plan: beer and wine, or a licensed premises",
        "Food vendor list and county plan review",
        "Restrooms and handwashing",
        "Shade and a wind plan",
      ],
    },
    faqs: {
      heading: "Fruita Event Rental FAQ",
      items: [
        {
          question: "How do I get a special event permit in Fruita?",
          answer:
            "The City's special event permitting is fully online. Fill out the Special Event Permit form, and contact the City's Special Projects Coordinator to ask about the review or to confirm that a venue is available.",
        },
        {
          question: "Can I drink beer or wine at a Fruita park shelter party?",
          answer:
            "Under Ordinance 2025-17, adults 21 and older may drink beer and wine in a public park unless a posted notice prohibits it. Spirits are limited to the licensed premises of a special event permitted to sell alcohol, and glass containers aren't allowed in parks.",
        },
        {
          question: "When does a tent need a fire permit in Fruita?",
          answer:
            "Under the 2024 International Fire Code as amended by Fruita and the Lower Valley Fire Protection District, a tent needs an operational permit above 2,400 square feet. Tents used for outdoor assembly uses such as a theater or dance hall need one above 400 square feet. Mobile stages are exempt.",
        },
        {
          question: "Do I need a permit for amplified music in Fruita?",
          answer:
            "The municipal code requires a license to operate sound amplification devices, with exclusions that include parades, processions and special events held under a City permit. Ask the City which rule fits your event before you book a DJ or band.",
        },
        {
          question: "What's needed to serve food at a public event in Fruita?",
          answer:
            "Mesa County Public Health asks event coordinators to submit a plan review 30 days before the event and a vendor list at least two weeks before. Every food vendor needs an approved Mesa County event vendor license.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Fruita?",
      description:
        "List your business on Event Rental Finder and get discovered by families and organizers planning shelter parties, bike events, festivals and backyard celebrations in Fruita and the Grand Valley.",
    },
  },
  {
    city: "Palisade",
    state: "Colorado",
    stateCode: "CO",
    slug: "palisade-co",
    county: "Mesa County",
    nearbyCities: ["grand-junction-co", "fruita-co", "rifle-co"],
    metaDescription:
      "Plan event rentals in Palisade, CO: tents, tables and chairs, party rentals, restrooms and lighting, plus the Town's Park and Facility Use Permit, Riverbend Park hookups, stake limits, alcohol rules and large-event permits.",
    heroSupportingCopy:
      "Compare event rental options for Palisade and the east end of the Grand Valley, from tents, tables and chairs to party rentals, restrooms and lighting for park gatherings, reunions, vineyard-country weddings and community festivals.",
    heroTagline:
      "Palisade's Park and Facility Use Permit asks you to list every tent, bounce house or staked structure in advance, caps stakes at 12 inches and bans water slides in every park.",
    categoriesIntro:
      "Explore the rental categories Palisade hosts use most for park gatherings, reunions, weddings and community festivals.",
    localIntro: [
      "Palisade is a small Mesa County town on the Colorado River at the east end of the Grand Valley, and its best-known event site is Riverbend Park, which wraps around a bend in the river with gazebos, a playground and a paved path the Town lists at 1.75 miles. The Town's fee schedule names Peach Fest, Wine Fest and Bluegrass Fest as approved events at Riverbend, but most rental orders here are smaller: shelter parties, reunions and gatherings at Peach Bowl Park, Veterans Memorial Park and the Town Center Plaza.",
      "Gatherings of 100 attendees or fewer at a Town park or facility use the Park and Facility Use Permit. The form asks for attendance, traffic and access, sound and light impacts and sanitary arrangements, and it asks you to list any tents, play structures such as bounce houses or anything else that will be delivered or staked into the ground so the Town can make arrangements. Water slides aren't allowed in any park, driving on the grass is prohibited without prior notice, parking on the grass is prohibited, and the Town may require parking attendants for larger events. Events of more than 300 attendees need a special event permit and may carry an impact fee negotiated case by case.",
      "The permit's terms shape the rental order. No stakes longer than 12 inches are allowed, so ask a tent provider about short stakes, weights or ballast. Decorations must be non-flammable and approved by the Palisade Fire Department, and glitter, confetti and colored powder aren't allowed in Town facilities. Grounds are rented as is: water and electric hookups are available at Riverbend Park only, and the Town specifies a minimum of 12-gauge wire for a 50-foot extension cord and 10-gauge for a 60-foot cord. The renter supplies trash liners, removes all trash and is responsible for placing and rolling any fencing.",
      "Alcohol is the biggest planning difference. The Town's permit terms say alcohol is prohibited in all Town parks, while it may be served indoors in Town facilities after an alcohol deposit. A reception that needs a bar usually moves indoors, to a winery or to private property. Food vendors at Palisade-coordinated events go through Mesa County Public Health, which licenses event vendors and asks event coordinators for a plan review 30 days ahead.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Palisade",
      intro: "Common Palisade setups, from river-park gatherings to vineyard weddings.",
      items: [
        {
          title: "Riverbend Park Gatherings",
          description:
            "Riverbend is the only Town park with water and electric hookups, so it suits catered gatherings and anything with lights or a sound system. List your tents and structures on the permit, and size extension cords to the Town's gauge rules.",
          categorySlug: "party-rentals",
        },
        {
          title: "Shelter Parties and Reunions",
          description:
            "Peach Bowl Park and Veterans Memorial Park shelters host family parties and reunions. Add [tables and chairs](/categories/table-chair-rentals) for overflow guests, and keep the drinks non-alcoholic; alcohol isn't allowed in Town parks.",
          categorySlug: "table-chair-rentals",
        },
        {
          title: "Vineyard-Country Weddings",
          description:
            "Receptions held at wineries or on private property usually make a tent, seating, a [dance floor](/categories/dance-floor-rentals) and lighting the core order. Confirm the venue's own rules on tents, stakes and power before you book.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Tents With Short Stakes",
          description:
            "Town parks allow no stakes longer than 12 inches. Ask the provider how the tent will be anchored with short stakes or weights, especially on a windy day.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Bounce Houses Without Water",
          description:
            "Play structures such as bounce houses go on the permit form, but water slides aren't allowed in any park. Dry [inflatables](/categories/inflatable-rentals) with proper anchoring are the safe choice.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Restrooms for Larger Events",
          description:
            "The permit form asks for sanitary arrangements, and events over 300 attendees move to a special event permit. Plan portable restrooms and handwashing stations with the site layout.",
          categorySlug: "restroom-trailer-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Palisade",
      intro: "Palisade-specific details to settle before you book rentals.",
      items: [
        "A Park and Facility Use Permit for gatherings of 100 attendees or fewer at Town parks and facilities",
        "A special event permit, and a possible negotiated impact fee, for events of more than 300 attendees",
        "Every tent, play structure or staked item listed on the permit in advance",
        "No stakes longer than 12 inches, and no water slides in any park",
        "No driving or parking on the grass without prior notice",
        "Decorations that are non-flammable and approved by the Palisade Fire Department",
        "No alcohol in Town parks; indoor service in Town facilities only after an alcohol deposit",
        "Water and electric hookups at Riverbend Park only, with the Town's extension cord gauge rules",
        "Trash liners, trash removal and fencing handled by the renter",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the Town of Palisade Parks page, Forms and Applications page, Park and Facility Use Permit and Terms of Agreement, and Town fee schedule, plus Mesa County Public Health food safety guidance. Confirm current requirements with the Town, the Palisade Fire Department and your rental provider.",
      closing:
        "Planning a bar or food service? See the [special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide) and the [event food vendor guide](/resources/colorado-event-food-vendor-guide). For anchoring and wind, see [Colorado outdoor event tent planning](/resources/colorado-outdoor-event-tent-planning).",
    },
    checklist: {
      heading: "Palisade Event Rental Checklist",
      intro: "Pull these details together before you contact Palisade rental companies:",
      items: [
        "Park or facility and the exact date",
        "Guest count and event hours",
        "Park and Facility Use Permit",
        "List of tents and structures for the form",
        "Stakes 12 inches or shorter, or weights",
        "Power and water needs (Riverbend only)",
        "Extension cords of the right gauge",
        "Alcohol plan that keeps drinks out of parks",
        "Restrooms and trash plan",
        "Fire Department approval for decorations",
      ],
    },
    faqs: {
      heading: "Palisade Event Rental FAQ",
      items: [
        {
          question: "What permit do I need for a party in a Palisade park?",
          answer:
            "The Town asks hosts of gatherings of 100 attendees or fewer at its parks or facilities to fill out the Park and Facility Use Permit. Events of more than 300 attendees need a special event permit and may be subject to a negotiated impact fee.",
        },
        {
          question: "Can I put up a tent or bounce house in a Palisade park?",
          answer:
            "List every tent, play structure or delivered or staked item on the permit form so the Town can make arrangements. Stakes longer than 12 inches aren't allowed, and water slides are banned in all parks.",
        },
        {
          question: "Can I serve alcohol at a Palisade park?",
          answer:
            "No. The Town's permit terms say alcohol is prohibited in all Town parks. Alcohol may be served indoors in Town facilities after paying an alcohol deposit.",
        },
        {
          question: "Is there power at Palisade parks?",
          answer:
            "Water and electric hookups are offered at Riverbend Park only, and grounds are rented as is. The Town requires at least 12-gauge wire for a 50-foot extension cord and 10-gauge for a 60-foot cord.",
        },
        {
          question: "What decorations are allowed at Town facilities?",
          answer:
            "Decorations must be non-flammable and approved by the Palisade Fire Department. Nothing can be nailed or tacked to walls or ceilings, and glitter, confetti and colored powder aren't allowed.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Palisade?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging park gatherings, reunions, weddings and festivals in Palisade and the Grand Valley.",
    },
  },
  {
    city: "Montrose",
    state: "Colorado",
    stateCode: "CO",
    slug: "montrose-co",
    county: "Montrose County",
    nearbyCities: ["grand-junction-co"],
    metaDescription:
      "Plan event rentals in Montrose, CO: tents, tables and chairs, party rentals, staging, sound and restrooms, plus City park shelter reservations, Events Use Permits, alcohol rules, the Montrose Rotary Amphitheater and the Montrose Pavilion.",
    heroSupportingCopy:
      "Compare event rental options for Montrose and the Uncompahgre Valley, from tents, tables and chairs to staging, sound, lighting and restrooms for shelter parties, reunions, weddings, concerts and community events.",
    heroTagline:
      "Montrose offers both ends of the rental spectrum: an amphitheater that supplies power but not sound, lights or toilets, and a Pavilion event center that includes tables and chairs but handles every drink itself.",
    categoriesIntro:
      "Explore the rental categories Montrose hosts use most for park shelter parties, amphitheater concerts, Pavilion banquets, weddings and community events.",
    localIntro: [
      "Montrose sits in the Uncompahgre Valley, and the City's Parks Division maintains 38 developed parks, 36 miles of concrete trails and more than 1,000 acres of riparian space and wildlands, according to the City. Shelters at parks including Buckley Park, Cerise Park, Chipeta Lake Park, La Raza Park, Lions Park, Riverbottom Park, Rotary Park, Sunset Mesa Park and Taviwach Park can be reserved for exclusive use through the City Clerk's Office with a short request form. A shelter reservation covers the shelter only; the rest of the park stays open to the public during your event.",
      "Larger or public events need more. The City requires an Events Use Permit Application to reserve park areas for events on City property that are advertised to the public or that reach the City's attendance threshold, so call the City Clerk early with your guest count. Park rules shape the rental order: parks are open 5 a.m. to 11 p.m., glass containers aren't allowed in any City park, and alcohol isn't allowed in a City park unless a State of Colorado special events liquor permit is obtained. Beer and wine are allowed by special permit only in the picnic shelters at Riverbottom, La Raza and Rotary parks. Special event liquor applications go to the City Clerk at least 30 days before the event.",
      "The Montrose Rotary Amphitheater in Cerise Park, near the Uncompahgre River, seats up to 5,700 people on its slope. Reservations are made with an application at least 60 days and no more than 18 months ahead, with insurance, a city sales tax license and a vendor list on file two weeks before. The City provides electricity, trash and recycling containers, access and temporary fencing on request, but not sound and light equipment, the specific lift needed to reach the stage's load points, security, path lighting or portable toilets. The City decides how many portable toilets an event needs and schedules the delivery, and the organizer pays for them.",
      "Indoor events often go to the Montrose Pavilion Event Center. Its published packet says room rentals include tables and chairs, which staff set to your approved layout, while décor is up to the renter: nothing attached to bare walls, candles enclosed, and décor approved by staff. Outside vendors bring their own equipment and must load in and out within the rented eight-hour block, events end by midnight, food must come from a licensed caterer, and the Pavilion provides all bartenders and alcohol. That leaves linens, specialty décor, photo booths and lighting as the usual outside orders.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Montrose",
      intro: "Common Montrose setups, from shelter parties to amphitheater shows.",
      items: [
        {
          title: "Park Shelter Parties",
          description:
            "Reserve a shelter through the City Clerk, then add [tables and chairs](/categories/table-chair-rentals) and shade for overflow guests. The rest of the park stays public, so keep your layout tight around the shelter.",
          categorySlug: "party-rentals",
        },
        {
          title: "Amphitheater Concerts and Shows",
          description:
            "The Rotary Amphitheater supplies electricity and fencing on request, but not sound, lighting, the stage lift or path lighting. Book [AV and lighting](/categories/av-lighting-rentals) with a crew that knows the load points.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Portable Restrooms for Public Events",
          description:
            "At the amphitheater the City sets the number of portable toilets and the organizer pays for them. Add handwashing stations and confirm delivery access with the City.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Pavilion Banquets and Weddings",
          description:
            "Pavilion rentals include tables and chairs, so outside orders focus on linens, décor, a [photo booth](/categories/photo-booth-rentals) and lighting. All vendors load in and out within the eight-hour block.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Shelter Reunions With Beer and Wine",
          description:
            "Beer and wine are allowed by special permit only at the Riverbottom, La Raza and Rotary park shelters. Pair the permit with tables, canopies and a serving area outside the shelter.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Backyard Celebrations",
          description:
            "Private property skips the park permit, but tents, sound and power still need planning. Ask providers about anchoring, delivery access and how late the music can run under City noise rules.",
          categorySlug: "dance-floor-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Montrose",
      intro: "Montrose-specific details to settle before you book rentals.",
      items: [
        "Shelter reservations through the City Clerk's Office; the park stays open to the public",
        "An Events Use Permit for events on City property advertised to the public or above the City's attendance threshold",
        "Park hours of 5 a.m. to 11 p.m., and no glass containers",
        "No alcohol in City parks without a state special events liquor permit, filed with the City Clerk at least 30 days ahead",
        "Beer and wine by special permit only at the Riverbottom, La Raza and Rotary park shelters",
        "Amphitheater applications 60 days to 18 months ahead, with insurance, sales tax license and vendor list two weeks out",
        "No sound, lighting, stage lift, security, path lighting or toilets supplied at the amphitheater",
        "Pavilion rentals with tables and chairs included and an eight-hour load-in and load-out block",
        "Fire code questions for tents and generators directed to the Montrose Fire Protection District",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Montrose Parks, Trails and Sports Facilities page and FAQs, the City's Special Events Permit liquor application, the Montrose Rotary Amphitheater page and the Montrose Pavilion Event Center meeting and expo packet. Confirm current requirements with the City Clerk, the Montrose Fire Protection District and your rental provider.",
      closing:
        "Planning a bar at a shelter or event? See the [special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide). For stage and sound at the amphitheater, see the [stage, sound and lighting rental guide](/resources/colorado-stage-av-lighting-rental-guide), and for restrooms, the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Montrose Event Rental Checklist",
      intro: "Pull these details together before you contact Montrose rental companies:",
      items: [
        "Venue: park, amphitheater, Pavilion or private",
        "Guest count and whether it's advertised",
        "Shelter reservation or Events Use Permit",
        "Liquor permit 30 days out, if serving",
        "Insurance certificate naming the City",
        "Sound, lighting and lift for the amphitheater",
        "Portable toilet count from the City",
        "Linens and décor for Pavilion events",
        "Load-in and load-out times",
        "Tent anchoring and a storm plan",
      ],
    },
    faqs: {
      heading: "Montrose Event Rental FAQ",
      items: [
        {
          question: "How do I reserve a park shelter in Montrose?",
          answer:
            "Submit the City Park and Shelter Reservation Request form to the City Clerk's Office. Reservations are first come, first served and cover the shelter only; the park stays open to the public.",
        },
        {
          question: "Can I serve beer or wine at a Montrose park?",
          answer:
            "Alcohol isn't allowed in City parks without a State of Colorado special events liquor permit. Beer and wine are allowed by special permit only in the picnic shelters at Riverbottom, La Raza and Rotary parks. Special event liquor applications are due to the City Clerk at least 30 days before the event.",
        },
        {
          question: "What does the City provide at the Montrose Rotary Amphitheater?",
          answer:
            "Electricity, trash and recycling containers, access to the reserved area and temporary fencing on request. Sound and light equipment, the stage lift, security, path lighting and portable toilets aren't provided; the City sets the toilet count and the organizer pays.",
        },
        {
          question: "Do I need to rent tables and chairs for the Montrose Pavilion?",
          answer:
            "No. The Pavilion's packet says room rentals include tables and chairs, set by staff to your approved layout. Décor is the renter's responsibility, and linens and extra equipment are added rentals through the Pavilion.",
        },
        {
          question: "How far ahead should I book the amphitheater?",
          answer:
            "The application is due at least 60 days and no more than 18 months before the event. Insurance, a city sales tax license and the vendor list must be on file two weeks before the event date.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Montrose?",
      description:
        "List your business on Event Rental Finder and get discovered by families and organizers planning shelter parties, concerts, banquets and weddings in Montrose and the Uncompahgre Valley.",
    },
  },
  {
    city: "Rifle",
    state: "Colorado",
    stateCode: "CO",
    slug: "rifle-co",
    county: "Garfield County",
    nearbyCities: ["glenwood-springs-co", "palisade-co", "grand-junction-co"],
    metaDescription:
      "Plan event rentals in Rifle, CO: tents, tables and chairs, party rentals, sound and restrooms, plus the City's Events Use Permit, Centennial Park shelter permits, Third Street closures, anchoring rules and Garfield County food plan review.",
    heroSupportingCopy:
      "Compare event rental options for Rifle and the Colorado River valley in western Garfield County, from tents, tables and chairs to party rentals, sound, restrooms and lighting for shelter parties, street events, reunions and backyard celebrations.",
    heroTagline:
      "Rifle runs public events through a 60-day Events Use Permit, gives Third Street closures a 90-day lead time, and doesn't allow temporary structures to be anchored to sidewalks or pavement.",
    categoriesIntro:
      "Explore the rental categories Rifle hosts use most for shelter parties, street events, community festivals, reunions and backyard weddings.",
    localIntro: [
      "Rifle's Parks and Recreation Office is the City's point of contact for events, and it describes its role plainly: not to plan each event, but to facilitate the process, flag potential problems and act as a liaison with City staff. Any event on City property, including streets, that is advertised to the public or involves more than 75 people needs an Events Use Permit, and completed applications are due at least 60 days ahead. Closing Third Street takes a 90-day application, events on the closure must end by 11 p.m., thoroughfares stay open for emergency vehicles, and organizers notify every property within one block 30 days before the event.",
      "Small gatherings often use Centennial Park, where Picnic Shelter 1 and Picnic Shelter 2 can be reserved with a Centennial Park Permit submitted to the Recreation Office no later than 25 days before the event. The permit form is strict: no alcohol on the premises, a separate City Sound Amplification Permit if sound will be projected, no fees charged to guests, and the renter collects and removes all trash. If the existing portable toilets aren't adequate for the group, the renter supplies more. The Community Green and the amphitheater at Centennial Park require a special event permit, and only the two picnic shelters are reserved for exclusive use.",
      "The Events Use Permit's rules affect tent and stage orders directly. Temporary structures can't be anchored to sidewalks or pavement, nothing can be marked or painted on public surfaces, and permittees can't build improvements on public property. Park hours run 5 a.m. to 10 p.m. Events expecting more than 200 people describe a parking and traffic plan, an emergency plan and a sanitation plan listing restrooms, trash cans and handwashing stations. Trash is the organizer's job, including vendor waste, stage construction debris and extra portable toilet service, and every trash receptacle needs a lid. Fireworks and any fire at an event need a separate Fire Department permit.",
      "Alcohol sales at a public event require a special event permit through the City and the State of Colorado, a plan for securing the sale area, and possibly security officers during service, with the City deciding how many. Only nonprofit organizations may apply for a special event liquor permit, so ask the City Clerk's office early. Food at a public event runs through Garfield County Public Health, which asks for an Event Coordinator Plan Review at least 30 days before the event, and vendors who sell anything need a City sales tax license.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Rifle",
      intro: "Common Rifle setups, from shelter parties to street events.",
      items: [
        {
          title: "Centennial Park Shelter Parties",
          description:
            "Reserve Picnic Shelter 1 or 2 at least 25 days ahead, then add [tables and chairs](/categories/table-chair-rentals) and a serving table. Leave the cooler of beer at home; alcohol isn't allowed on the premises.",
          categorySlug: "party-rentals",
        },
        {
          title: "Third Street Events",
          description:
            "A Third Street closure takes a 90-day application and a site plan showing temporary structures, restrooms and trash cans. Tents and canopies on pavement need weights, not anchors into the street.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Restrooms and Handwashing",
          description:
            "Events over 200 people describe a sanitation plan with restroom, trash can and handwashing counts, and shelter renters add portable toilets when the park's aren't enough.",
          categorySlug: "restroom-trailer-rentals",
        },
        {
          title: "Sound for Park Events",
          description:
            "Projected sound at Centennial Park needs a separate City Sound Amplification Permit. Book the [stage](/categories/stage-rentals) and speakers after the permit is in hand.",
          categorySlug: "av-lighting-rentals",
        },
        {
          title: "Reunions and Family Celebrations",
          description:
            "A shelter or backyard reunion typically needs shade canopies, seating, a [bounce house](/categories/inflatable-rentals) for the kids and lighting for evening. Confirm the park's 10 p.m. closing time.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Backyard Weddings",
          description:
            "Private property avoids the Events Use Permit, so the plan centers on the tent, seating, a dance floor and power. Ask providers about anchoring, delivery access and weather plans.",
          categorySlug: "wedding-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Rifle",
      intro: "Rifle-specific details to settle before you book rentals.",
      items: [
        "An Events Use Permit at least 60 days ahead for City property events that are advertised or involve more than 75 people",
        "A 90-day application for Third Street closures, an 11 p.m. end time and notices to properties within one block",
        "A Centennial Park Permit no later than 25 days before a shelter reservation",
        "No alcohol at Centennial Park, and a City Sound Amplification Permit for projected sound",
        "No temporary structures anchored to sidewalks or pavement",
        "Park hours of 5 a.m. to 10 p.m.",
        "Parking, emergency and sanitation plans for events expecting more than 200 people",
        "Trash removal with lidded receptacles, including vendor and stage waste",
        "A Garfield County Event Coordinator Plan Review 30 days ahead when food is served",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Rifle Host a Special Event page, Events Use Permit Application packet, Park Facility Reservations page and Centennial Park Permit, and Garfield County Public Health temporary event guidance. Confirm current requirements with the City, the Fire Department and your rental provider.",
      closing:
        "Planning a beer garden or food booths? See the [special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide) and the [event food vendor guide](/resources/colorado-event-food-vendor-guide). For restroom counts, see the [event restroom rental guide](/resources/event-restroom-rental-guide).",
    },
    checklist: {
      heading: "Rifle Event Rental Checklist",
      intro: "Pull these details together before you contact Rifle rental companies:",
      items: [
        "Venue and whether it's City property or a street",
        "Guest count and whether it's advertised",
        "Events Use Permit or Centennial Park Permit",
        "Third Street closure and neighbor notices",
        "Sound Amplification Permit",
        "Insurance certificate naming the City",
        "Tent weights for pavement",
        "Restrooms, handwashing and lidded trash cans",
        "Food plan review and vendor sales tax licenses",
        "Fire Department permit for fireworks or fire",
      ],
    },
    faqs: {
      heading: "Rifle Event Rental FAQ",
      items: [
        {
          question: "When do I need an Events Use Permit in Rifle?",
          answer:
            "Any event on City property, including streets, that is advertised to the public or involves more than 75 people needs one. Applications are due at least 60 days before the event, or 90 days for a Third Street closure.",
        },
        {
          question: "How do I reserve a picnic shelter at Centennial Park?",
          answer:
            "Submit the Centennial Park Permit to the Rifle Recreation Office no later than 25 days before the event. Late applications are denied, and only one date can be requested per application.",
        },
        {
          question: "Can I serve alcohol at a Rifle park party?",
          answer:
            "Not at Centennial Park; the permit says no alcohol is permitted on the premises. Selling and serving alcohol at a public event requires a special event permit through the City and State, available only to nonprofit organizations.",
        },
        {
          question: "Can tents be staked or bolted on Rifle streets?",
          answer:
            "No. The City's permit rules say temporary structures can't be anchored to sidewalks or pavement, so canopies on a street closure need weights. Ask your provider how they ballast tents on pavement.",
        },
        {
          question: "Who handles trash at a Rifle event?",
          answer:
            "The organizer does, including vendor waste, stage construction and teardown debris and extra portable toilet service. All trash receptacles need lids, and one is required at each vendor location.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Rifle?",
      description:
        "List your business on Event Rental Finder and get discovered by families and organizers planning shelter parties, street events, reunions and weddings in Rifle and western Garfield County.",
    },
  },
  {
    city: "Glenwood Springs",
    state: "Colorado",
    stateCode: "CO",
    slug: "glenwood-springs-co",
    county: "Garfield County",
    nearbyCities: ["rifle-co"],
    metaDescription:
      "Plan event rentals in Glenwood Springs, CO: tents, tables and chairs, party rentals, sound and restrooms, plus the Parks and Recreation Facility Use Permit, tent weight rules, fire permits, liquor and security requirements and neighbor notices.",
    heroSupportingCopy:
      "Compare event rental options for Glenwood Springs and eastern Garfield County, from tents, tables and chairs to party rentals, sound, lighting and restrooms for shelter parties, weddings, festivals and street events.",
    heroTagline:
      "Glenwood Springs ties park events to one Facility Use Permit: tents, structures or amplified sound trigger it, most venues don't allow stakes, and a 10-by-10 canopy needs at least 40 pounds on each corner.",
    categoriesIntro:
      "Explore the rental categories Glenwood Springs hosts use most for shelter parties, weddings, Bethel Plaza and 7th Street events, festivals and backyard celebrations.",
    localIntro: [
      "In Glenwood Springs, park events run through one document: the Parks and Recreation Facility Use Permit. The City requires it for activities on its parks, trails, open space, Bethel Plaza and 7th Street that involve exclusive use, a group above the policy's attendance threshold, tents, structures or sound amplification, food or alcohol for the public, or any commercial activity. Small personal gatherings that don't meet those criteria can book a park shelter online in four-hour increments up to 12 months ahead.",
      "Applications are due at least 30 days before the activity, or 60 days when the event also needs a liquor permit or a right-of-way permit, and activities can't be advertised until the permit is approved. Most permits require a site plan showing the activity area, parking, traffic control, emergency access, tent and canopy placement, dumpsters, vendor parking, fencing, portable restrooms, liquor service and inflatables. Events with fireworks, inflatables, hot food service or alcohol provide insurance naming the City as additional insured, and the inflatable or food vendor typically supplies its own certificate.",
      "The tent rules are specific. The City's policy notes that most venues don't allow stakes, so tents are anchored with weights: at least 40 pounds on each corner of a 10-by-10 tent, with larger tents weighted by the rental company. Larger tents and membrane structures need a Glenwood Springs Fire Department temporary structure permit before they go up, with flame resistance certificates, a site plan and a floor plan; inspections are scheduled at least 24 hours ahead on Fire Department workdays. Food tents carry flame resistance tags, propane cylinders need overflow protection valves and an inspection at setup, and each food tent needs a fire extinguisher.",
      "Alcohol, sound and neighbors come as a package. A special event liquor permit is limited to qualifying nonprofit and similar organizations, alcohol service requires professional security, and the City's park rules limit alcohol to beer and wine and prohibit glass. Events with street closures, alcohol service or amplified sound that may exceed the noise code must notify nearby homes and businesses with the date, hours, load-in and load-out times, sound hours and a site plan, and confirm that notice to the City at least three business days ahead. Parks are open 6 a.m. to 10 p.m. Food at a public event also needs an Event Coordinator Plan Review filed with Garfield County at least 30 days ahead.",
    ],
    useCases: {
      heading: "Popular Event Rental Needs in Glenwood Springs",
      intro: "Common Glenwood Springs setups, from shelter parties to plaza events.",
      items: [
        {
          title: "Shelter Parties",
          description:
            "Personal shelter bookings can be made online in four-hour blocks up to a year ahead. Add [tables and chairs](/categories/table-chair-rentals) and a serving table; a tent or a speaker turns the booking into a Facility Use Permit.",
          categorySlug: "party-rentals",
        },
        {
          title: "Weighted Tents and Canopies",
          description:
            "Plan on weights, not stakes: at least 40 pounds per corner on a 10-by-10, and the rental company's engineering for anything larger. Larger tents also need a Fire Department permit and inspection.",
          categorySlug: "tent-rentals",
        },
        {
          title: "Weddings and Receptions",
          description:
            "Park and plaza receptions combine a tent, seating, a [dance floor](/categories/dance-floor-rentals) and lighting with a liquor plan. Alcohol service requires a qualifying permit holder and professional security.",
          categorySlug: "wedding-rentals",
        },
        {
          title: "Bethel Plaza and 7th Street Events",
          description:
            "Both fall under the Facility Use Permit. The City supplies a pre-approved traffic control plan and barricades for 7th Street, and the organizer posts the closure notices and sets up the signs.",
          categorySlug: "stage-rentals",
        },
        {
          title: "Inflatables for Family Events",
          description:
            "[Bounce houses](/categories/inflatable-rentals) need a certificate of insurance from the provider naming the City, and they go on the site plan with your tents and restrooms.",
          categorySlug: "inflatable-rentals",
        },
        {
          title: "Sound With a Neighbor Plan",
          description:
            "Amplified sound needs the Facility Use Permit, and sound that may exceed the noise code needs advance notice to nearby homes and businesses. Share the [AV](/categories/av-lighting-rentals) schedule in that notice.",
          categorySlug: "av-lighting-rentals",
        },
      ],
    },
    considerations: {
      heading: "What to Plan for in Glenwood Springs",
      intro: "Glenwood Springs-specific details to settle before you book rentals.",
      items: [
        "A Parks and Recreation Facility Use Permit for exclusive use, larger groups, tents, structures, amplified sound, public food or alcohol, or commercial activity",
        "Applications 30 days ahead, or 60 days with a liquor or right-of-way permit, and no advertising until approval",
        "A site plan showing tents, restrooms, inflatables, dumpsters, fencing and emergency access",
        "Weights instead of stakes at most venues, with at least 40 pounds per corner on a 10-by-10 tent",
        "A Fire Department temporary structure permit and inspection for larger tents",
        "Flame resistance tags, inspected propane and fire extinguishers in food tents",
        "Insurance naming the City for fireworks, inflatables, hot food or alcohol",
        "Professional security for alcohol service, and beer and wine only in parks",
        "Neighbor notice for closures, alcohol or loud sound, confirmed three business days ahead",
        "Each provider's delivery area, pricing, setup windows and weather policy, which vary from company to company",
      ],
      disclaimer:
        "Details here summarize the City of Glenwood Springs Event Permits page, Park Shelter Rentals page, Parks and Recreation Facility Use Permit Policy (revised September 2024) and application, Resolution 2022-10 park rules, the Fire Department's temporary membrane structure permit application and Garfield County Public Health temporary event guidance. Confirm current requirements with the City, the Glenwood Springs Fire Department and your rental provider.",
      closing:
        "Planning a bar or food vendors? See the [special event liquor permit guide](/resources/colorado-special-event-liquor-permit-guide) and the [event food vendor guide](/resources/colorado-event-food-vendor-guide). For tent anchoring, see [Colorado outdoor event tent planning](/resources/colorado-outdoor-event-tent-planning).",
    },
    checklist: {
      heading: "Glenwood Springs Event Rental Checklist",
      intro:
        "Pull these details together before you contact Glenwood Springs rental companies:",
      items: [
        "Venue: park, Bethel Plaza, 7th Street or private",
        "Guest count and event hours",
        "Shelter booking or Facility Use Permit",
        "Site plan with tents and restrooms",
        "Tent weights and Fire Department permit",
        "Insurance certificates from vendors",
        "Liquor permit holder and security",
        "Neighbor notification",
        "Food plan review with Garfield County",
        "Right-of-way permit for closures",
      ],
    },
    faqs: {
      heading: "Glenwood Springs Event Rental FAQ",
      items: [
        {
          question: "When do I need a Facility Use Permit in Glenwood Springs?",
          answer:
            "For activities on City parks, trails, open space, Bethel Plaza or 7th Street that involve exclusive use, larger groups, tents, structures or sound amplification, food or alcohol for the public, or commercial activity. Small personal gatherings can book a shelter online instead.",
        },
        {
          question: "How far ahead do I apply?",
          answer:
            "At least 30 days before the activity, or at least 60 days when you also need a liquor permit or a right-of-way permit. Activities can't be advertised until the permit is approved.",
        },
        {
          question: "Can I stake a tent in a Glenwood Springs park?",
          answer:
            "The City's policy notes that most venues don't allow stakes, so tents are anchored with weights. A 10-by-10 tent needs at least 40 pounds on each corner, and larger tents set by a rental company are weighted based on the company's expertise.",
        },
        {
          question: "Does alcohol at my event need security?",
          answer:
            "Yes. All rentals with alcohol service are required to confirm professional security contracted for the activity, and the liquor permit itself is limited to qualifying nonprofit and similar organizations.",
        },
        {
          question: "Do I have to tell the neighbors about my event?",
          answer:
            "If the activity involves street closures, alcohol service or amplified sound that may exceed the noise code, yes. Notify nearby homes and businesses with the event details and site plan, and confirm the notice to the City at least three business days before the activity.",
        },
      ],
    },
    providerCta: {
      heading: "Do You Provide Event Rentals in Glenwood Springs?",
      description:
        "List your business on Event Rental Finder and get discovered by families and planners arranging shelter parties, weddings, plaza events and festivals in Glenwood Springs and Garfield County.",
    },
  },
];
