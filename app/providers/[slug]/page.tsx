import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { locations } from "@/content/locations";
import { regions } from "@/content/regions";
import { providers } from "@/content/providers";
import { isProviderProfileThin, specialtiesByTier, titleizeSlug } from "@/lib/providers";
import {
  Breadcrumb,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
} from "@/components/PageBlocks";

type Props = { params: Promise<{ slug: string }> };

// Only known provider slugs are valid; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
const locationBySlug = new Map(locations.map((l) => [l.slug, l]));
const regionNameBySlug = new Map(regions.map((r) => [r.slug, r.name]));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) return {};

  const place = provider.city ? `${provider.city}, ${provider.stateCode ?? "CO"}` : "Colorado";
  const categoryNames = provider.categories
    .map((c) => categoryBySlug.get(c)?.name)
    .filter(Boolean);
  const description = `${provider.name} offers ${categoryNames.join(", ") || "event rentals"} serving ${place}. Compare local event rental providers on Event Rental Finder.`;

  return {
    title: `${provider.name} | Event Rental Finder`,
    description,
    alternates: { canonical: `/providers/${provider.slug}` },
    // Thin profiles (few documented details) still get a page, but aren't
    // submitted for indexing as a near-duplicate result. See lib/providers.ts.
    robots: isProviderProfileThin(provider)
      ? { index: false, follow: true }
      : undefined,
  };
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) notFound();

  const { specializesIn, serves } = specialtiesByTier(provider);
  const place = provider.city ? `${provider.city}, ${provider.stateCode ?? "CO"}` : undefined;
  const regionName = provider.primaryRegion ? regionNameBySlug.get(provider.primaryRegion) : undefined;

  const matchedLocations = provider.serviceAreas
    .map((slugId) => locationBySlug.get(slugId))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));
  const matchedCityNames = new Set(matchedLocations.map((l) => l.city.toLowerCase()));
  const otherMarkets = (provider.documentedMarkets ?? []).filter(
    (m) => !matchedCityNames.has(m.split(",")[0].trim().toLowerCase()),
  );

  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Providers", href: "/providers" },
                { label: provider.name },
              ]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Event Rental Provider
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl">
                {provider.name}
              </h1>
              {(place || regionName) && (
                <p className="mt-3 text-lg text-[#1F2937]/70">
                  {place ?? regionName}
                  {place && regionName && place !== regionName && ` · ${regionName}`}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {provider.website && (
                  <a
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2C7A78] px-6 text-[15px] font-semibold text-white transition hover:bg-[#256866]"
                  >
                    Visit Website <span aria-hidden className="ml-2">↗</span>
                  </a>
                )}
                {provider.phone && (
                  <a
                    href={`tel:${provider.phone.replace(/[^\d+]/g, "")}`}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-6 text-[15px] font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
                  >
                    {provider.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* What they offer */}
        <Section id="offerings">
          <SectionHeading id="offerings" title="What They Offer" />
          {provider.categories.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {provider.categories.map((slugId) => {
                const category = categoryBySlug.get(slugId);
                if (!category) return null;
                return (
                  <li key={slugId}>
                    <Link
                      href={`/categories/${slugId}`}
                      className="inline-flex items-center rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-[15px] font-medium text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {(provider.productTags?.length ?? 0) > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {provider.productTags!.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[#F2EEE7] px-3 py-1 text-sm text-[#1F2937]/75"
                >
                  {titleizeSlug(tag)}
                </li>
              ))}
            </ul>
          )}
        </Section>

        {/* Event specialties — tiers kept visually and textually distinct */}
        {(specializesIn.length > 0 || serves.length > 0) && (
          <Section id="specialties" tone="sand">
            <SectionHeading id="specialties" title="Event Specialties" />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {specializesIn.length > 0 && (
                <div className={`${cardClass} p-6`}>
                  <h3 className="font-serif text-lg font-medium text-[#2C7A78]">
                    Specializes In
                  </h3>
                  <p className="mt-1 text-sm text-[#1F2937]/60">
                    Backed by a dedicated event page, named package, or
                    specialist wording on the provider&rsquo;s own site.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {specializesIn.map((s) => (
                      <li
                        key={s.slug}
                        className="rounded-full bg-[#2C7A78]/10 px-3 py-1 text-sm font-semibold text-[#2C7A78]"
                      >
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {serves.length > 0 && (
                <div className={`${cardClass} p-6`}>
                  <h3 className="font-serif text-lg font-medium text-[#1F2937]">
                    Also Serves
                  </h3>
                  <p className="mt-1 text-sm text-[#1F2937]/60">
                    A documented marketing mention only — not independently
                    verified as a specialty.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {serves.map((s) => (
                      <li
                        key={s.slug}
                        className="rounded-full border border-[#E8E1D5] px-3 py-1 text-sm text-[#1F2937]/70"
                      >
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Service areas */}
        {(matchedLocations.length > 0 || otherMarkets.length > 0) && (
          <Section id="service-areas">
            <SectionHeading id="service-areas" title="Where They Serve" />
            {matchedLocations.length > 0 && (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {matchedLocations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className={`${cardClass} flex items-center justify-between gap-3 px-5 py-4 transition hover:border-[#2C7A78]`}
                    >
                      <span className="font-serif text-lg font-medium text-[#1F2937]">
                        {location.city}, {location.stateCode}
                      </span>
                      <span aria-hidden className="text-[#2C7A78]">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {otherMarkets.length > 0 && (
              <p className="mt-5 text-[15px] leading-7 text-[#1F2937]/60">
                Also documented as serving: {otherMarkets.join(", ")}.
              </p>
            )}
          </Section>
        )}

        {provider.radarApproval?.checkedOn && (
          <p className={`${container} pb-10 text-sm text-[#1F2937]/45`}>
            Information last reviewed {provider.radarApproval.checkedOn}.
          </p>
        )}

        <section className={`${container} pb-16 lg:pb-24`}>
          <Link
            href="/providers"
            className="text-[15px] font-semibold text-[#2C7A78] transition hover:text-[#256866]"
          >
            ← Browse all providers
          </Link>
        </section>
      </main>
    </div>
  );
}
