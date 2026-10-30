import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { locations } from "@/content/locations";
import { providers } from "@/content/providers";
import { resources } from "@/content/resources";
import { isProviderProfileThin } from "@/lib/providers";

const baseUrl = "https://www.eventrentalfinder.com";

// Data-driven: new locations, categories, resources and providers are picked
// up automatically. Only real, indexable pages are listed. Provider profiles
// thin on documented detail are intentionally left out — they still render,
// just aren't submitted for indexing as a near-duplicate result.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/locations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/categories`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/providers`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${baseUrl}/for-rental-companies`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourcePages: MetadataRoute.Sitemap = resources.map((article) => {
    const date = article.updatedAt ?? article.publishedAt;
    return {
      url: `${baseUrl}/resources/${article.slug}`,
      ...(date ? { lastModified: date } : {}),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  const providerPages: MetadataRoute.Sitemap = providers
    .filter((provider) => !isProviderProfileThin(provider))
    .map((provider) => ({
      url: `${baseUrl}/providers/${provider.slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [
    ...staticPages,
    ...locationPages,
    ...categoryPages,
    ...resourcePages,
    ...providerPages,
  ];
}
