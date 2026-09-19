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
};