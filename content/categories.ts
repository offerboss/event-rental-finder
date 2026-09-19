import type { EventCategory } from "@/types";

export const categories: EventCategory[] = [
  {
    name: "Tent Rentals",
    slug: "tent-rentals",
    shortDescription:
      "Find local tent rental companies for weddings, parties, corporate events, festivals, and outdoor gatherings.",
    primaryKeyword: "tent rentals",
    metaTitle: "Tent Rentals Near You | Event Rental Finder",
    metaDescription:
      "Find local tent rental companies near you for weddings, parties, corporate events, festivals and outdoor gatherings. Compare providers and explore tent rental options in your area.",
    h1: "Tent Rentals Near You",
    heroTagline:
      "Compare providers, explore tent options, and find the right setup for your event.",
    types: {
      heading: "Types of Event Tents",
      items: [
        {
          title: "Frame Tents",
          description:
            "Freestanding tents that work well on patios, pavement, lawns, and spaces where center poles are not ideal.",
        },
        {
          title: "Pole Tents",
          description:
            "Classic event tents supported by center poles and perimeter stakes, often used for weddings, parties, and larger outdoor gatherings.",
        },
        {
          title: "Clear-Span Tents",
          description:
            "Large engineered structures designed for open interior space, bigger events, festivals, corporate functions, and long-term installations.",
        },
        {
          title: "Wedding Tents",
          description:
            "Elegant tent setups designed around ceremonies, receptions, dining, dancing, lighting, and guest comfort.",
        },
      ],
    },
    sizing: {
      heading: "What Size Tent Do I Need?",
      intro:
        "Use these approximate planning sizes as a starting point when comparing tent rental options.",
      rows: [
        { guests: "20–40 guests", size: "Around 20' × 20'" },
        { guests: "40–60 guests", size: "Around 20' × 30'" },
        { guests: "60–100 guests", size: "Around 30' × 40'" },
        { guests: "100–150 guests", size: "Around 40' × 60'" },
        { guests: "150–200+ guests", size: "Larger custom layouts" },
      ],
      factorsHeading: "The right size also depends on",
      factors: [
        "Seating style",
        "Dance floor",
        "Buffet or bar",
        "Stage",
        "Aisle space",
        "Weather protection",
        "Local fire and code requirements",
      ],
      disclaimer:
        "These are rough planning estimates, not engineering guidance. Confirm the final size, layout, and code requirements with your rental provider.",
    },
    costGuide: {
      heading: "How Much Do Tent Rentals Cost?",
      intro:
        "Tent rental pricing varies widely from one event to the next. The final quote usually depends on a mix of factors, including:",
      factors: [
        "Tent size",
        "Tent type",
        "Rental duration",
        "Delivery distance",
        "Setup surface",
        "Sidewalls",
        "Flooring",
        "Lighting",
        "Heating and cooling",
        "Labor",
        "Local market",
      ],
      closing:
        "Request quotes from local providers for accurate pricing in your area.",
    },
    bookingChecklist: {
      heading: "What to Ask Before Booking a Tent Rental",
      intro:
        "A few questions up front can save you surprises on event day.",
      questions: [
        "Is delivery and setup included?",
        "What surfaces can the tent be installed on?",
        "Are permits or fire inspections required?",
        "Are sidewalls available?",
        "What happens in severe weather?",
        "Are lighting, flooring, heaters or fans available?",
        "What are the cancellation and rescheduling policies?",
        "When will setup and teardown occur?",
      ],
    },
    relatedCategories: [
      "table-chair-rentals",
      "wedding-rentals",
      "dance-floor-rentals",
      "restroom-trailer-rentals",
      "av-lighting-rentals",
    ],
    providerCta: {
      heading: "Are You a Tent Rental Provider?",
      description:
        "List your business on Event Rental Finder and get discovered by customers searching for tent rentals in your area.",
    },
  },
  {
    name: "Table & Chair Rentals",
    slug: "table-chair-rentals",
    shortDescription:
      "Compare local table and chair rental companies for weddings, parties, and special events.",
    primaryKeyword: "table and chair rentals",
  },
  {
    name: "Party Rentals",
    slug: "party-rentals",
    shortDescription:
      "Find local party rental companies offering equipment, furniture, decor, and event essentials.",
    primaryKeyword: "party rentals",
  },
  {
    name: "Wedding Rentals",
    slug: "wedding-rentals",
    shortDescription:
      "Find wedding rental companies for tents, tables, chairs, linens, decor, and event equipment.",
    primaryKeyword: "wedding rentals",
  },
  {
    name: "Inflatable Rentals",
    slug: "inflatable-rentals",
    shortDescription:
      "Compare bounce house, inflatable slide, obstacle course, and party inflatable rental companies.",
    primaryKeyword: "inflatable rentals",
  },
  {
    name: "Restroom Trailer Rentals",
    slug: "restroom-trailer-rentals",
    shortDescription:
      "Find luxury restroom trailer rentals for weddings, festivals, private events, and outdoor venues.",
    primaryKeyword: "restroom trailer rentals",
  },
  {
    name: "Photo Booth Rentals",
    slug: "photo-booth-rentals",
    shortDescription:
      "Find photo booth rental companies for weddings, parties, corporate events, and celebrations.",
    primaryKeyword: "photo booth rentals",
  },
  {
    name: "Dance Floor Rentals",
    slug: "dance-floor-rentals",
    shortDescription:
      "Compare local dance floor rental companies for weddings, parties, and special events.",
    primaryKeyword: "dance floor rentals",
  },
  {
    name: "Stage Rentals",
    slug: "stage-rentals",
    shortDescription:
      "Find portable stage and event staging rental companies for concerts, festivals, and corporate events.",
    primaryKeyword: "stage rentals",
  },
  {
    name: "AV & Lighting Rentals",
    slug: "av-lighting-rentals",
    shortDescription:
      "Find event audio, video, sound, and lighting rental companies for events of all sizes.",
    primaryKeyword: "event AV rentals",
  },
];