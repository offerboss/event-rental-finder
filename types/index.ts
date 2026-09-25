export type CategoryInfoCard = {
  title: string;
  description: string;
};

export type CategorySizeRow = {
  guests: string;
  size: string;
};

export type EventCategory = {
  name: string;
  slug: string;
  shortDescription: string;
  description?: string;
  primaryKeyword?: string;
  /** Slugs of related categories, shown as "Complete Your Event Setup". */
  relatedCategories?: string[];

  // Optional richer content. Categories without these fields render the
  // simpler layout; each section below only renders when its field is set.
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  heroTagline?: string;
  types?: {
    heading: string;
    items: CategoryInfoCard[];
  };
  sizing?: {
    heading: string;
    intro?: string;
    rows: CategorySizeRow[];
    factorsHeading: string;
    factors: string[];
    disclaimer: string;
  };
  costGuide?: {
    heading: string;
    intro: string;
    factors: string[];
    closing: string;
  };
  bookingChecklist?: {
    heading: string;
    intro?: string;
    questions: string[];
  };
  providerCta?: {
    heading: string;
    description: string;
  };
};

export type LocationUseCase = {
  title: string;
  /** May include `[label](/path)` inline links; rendered with renderRichText. */
  description: string;
  /** A category card link shown at the bottom of this use case. */
  categorySlug?: string;
};

export type LocationFaq = { question: string; answer: string };

export type Location = {
  city: string;
  state: string;
  stateCode: string;
  slug: string;
  county?: string;
  latitude?: number;
  longitude?: number;
  nearbyCities?: string[];
  featured?: boolean;

  // Optional richer, city-specific content for a full location page. A city
  // without these fields still renders the standard simple layout.
  metaTitle?: string;
  metaDescription?: string;
  /** A second hero paragraph, shown after the standard supporting copy. */
  heroTagline?: string;
  /** Overrides the default first hero paragraph. */
  heroSupportingCopy?: string;
  /** Overrides the default "Browse Event Rentals in [City]" intro line. */
  categoriesIntro?: string;
  /** Paragraphs shown in the "Planning an Event in [City]?" section. */
  localIntro?: string[];
  useCases?: {
    heading: string;
    intro?: string;
    items: LocationUseCase[];
  };
  considerations?: {
    heading: string;
    intro?: string;
    /** May include `[label](/path)` inline links. */
    items: string[];
    disclaimer?: string;
    /** A closing note, e.g. linking to related resource guides. */
    closing?: string;
  };
  checklist?: {
    heading: string;
    intro?: string;
    items: string[];
  };
  faqs?: {
    heading: string;
    items: LocationFaq[];
  };
  providerCta?: {
    heading: string;
    description: string;
  };
};

export type Provider = {
  name: string;
  slug: string;
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  stateCode?: string;
  description?: string;
  categories: string[];
  serviceAreas: string[];
  featured?: boolean;
  verified?: boolean;
  rgsPartner?: boolean;
  logo?: string;
  image?: string;
};

// A block of body content within a ResourceSection. Kept intentionally small
// (four shapes) so a single generic renderer can support this article and
// future resource articles without a new template per article.
export type ResourceContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string }
  | { type: "table"; rows: { label: string; value: string }[] };

export type ResourceSection = {
  id: string;
  heading: string;
  intro?: string;
  blocks: ResourceContentBlock[];
};

export type ResourceCta = {
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type ResourceArticle = {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  city?: string;
  stateCode?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;

  // Optional richer content for a full /resources/[slug] article. An entry
  // without these fields still appears on the hub but has no article body.
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  /** Intro paragraph(s) shown above the first section. */
  intro?: string[];
  /** A category this article relates to most, shown as a badge near the top. */
  topicCategorySlug?: string;
  sections?: ResourceSection[];
  /** Heading for the closing related-links section. Defaults to a generic label. */
  relatedHeading?: string;
  /** Other resource article slugs to link to from the related-links section. */
  relatedResourceSlugs?: string[];
  /** Category slugs shown in the related-links section. */
  relatedCategorySlugs?: string[];
  cta?: ResourceCta;
};