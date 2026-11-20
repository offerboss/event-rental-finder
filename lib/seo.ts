import type { Metadata } from "next";

// Shared Open Graph / Twitter metadata and JSON-LD helpers. Every page passes
// its own title, description, path and (where it has one) hero image; pages
// without a hero fall back to the site default image.
export const SITE_URL = "https://www.eventrentalfinder.com";
export const SITE_NAME = "Event Rental Finder";
export const DEFAULT_TITLE = "Event Rental Finder | Find Event Rentals in Colorado";
export const DEFAULT_DESCRIPTION =
  "Find event rental companies in Colorado for tents, tables and chairs, wedding and party rentals, inflatables, restroom trailers, photo booths, dance floors, staging and AV.";
export const DEFAULT_OG_IMAGE = "/images/event-rental-finder-hero-event-rentals.png";
export const LOGO_IMAGE = "/images/event-rental-finder-logo-square.png";

export function absoluteUrl(path: string): string {
  return new URL(encodeURI(path), SITE_URL).toString();
}

export function socialMeta({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const imageUrl = absoluteUrl(image ?? DEFAULT_OG_IMAGE);
  return {
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: imageUrl, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** Visible text of a rich-text string: [label](/path) links become their label. */
export function plainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\((\/[a-z0-9\-/]*)\)/gi, "$1");
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
