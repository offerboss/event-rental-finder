import type { Metadata } from "next";
import Link from "next/link";
import ProviderRow from "@/components/ProviderRow";
import {
  Breadcrumb,
  EmptyStatePanel,
  ProviderCtaPanel,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
  linkCardClass,
  primaryActionClass,
  secondaryActionClass,
} from "@/components/PageBlocks";
import { categories } from "@/content/categories";
import { locations } from "@/content/locations";
import { regions } from "@/content/regions";
import { resources } from "@/content/resources";
import { providers } from "@/content/providers";
import { providersForRegion, topLabels } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Colorado Event Rental Providers | Event Rental Finder",
  description:
    "Browse event rental providers and discover companies offering tents, tables and chairs, weddings, inflatables, photo booths, restroom trailers, staging, AV and more.",
  alternates: { canonical: "/providers" },
};

const categoryNameBySlug = new Map(categories.map((c) => [c.slug, c.name]));

// Only the ERF locations at least one provider actually documents coverage
// for — feeds the "Cities and markets served" stat below.
const usedLocationSlugs = new Set<string>();
for (const provider of providers) {
  for (const slug of provider.serviceAreas) usedLocationSlugs.add(slug);
}

// Statewide summary stats — every number here is counted from the actual
// provider data, never hard-coded.
const usedCategorySlugs = new Set(providers.flatMap((p) => p.categories));
const usedRegionSlugs = new Set(
  providers.flatMap((p) => [p.primaryRegion, ...(p.serviceRegions ?? [])].filter(Boolean)),
);
const summaryStats = [
  { label: "Colorado providers", value: providers.length },
  { label: "Regions covered", value: usedRegionSlugs.size },
  { label: "Rental categories represented", value: usedCategorySlugs.size },
  { label: "Cities and markets served", value: usedLocationSlugs.size },
];

// Region-by-region coverage, grouped strictly by each provider's primary
// (home-base) region — see providersForRegion. Each provider appears under
// exactly one region here, even if it documents service coverage elsewhere.
const regionStats = regions
  .map((region) => {
    const regionProviders = providersForRegion(providers, region.slug);
    const categoryNames = topLabels(
      regionProviders.flatMap((p) => p.categories.map((c) => categoryNameBySlug.get(c) ?? c)),
      4,
    );
    const markets = topLabels(
      regionProviders.map((p) => p.city).filter((c): c is string => Boolean(c)),
      3,
    );
    return { region, providers: regionProviders, categoryNames, markets };
  })
  .filter((r) => r.providers.length > 0);

// Planning guides relevant to the categories providers in this directory
// offer. Only resources that actually exist in content/resources.ts are
// shown — nothing here is invented.
const resourceBySlug = new Map(resources.map((r) => [r.slug, r]));
const featuredResourceSlugs = [
  "tent-rental-cost",
  "colorado-wedding-rental-checklist",
  "how-many-tables-and-chairs-do-i-need",
  "event-restroom-rental-guide",
  "colorado-inflatable-and-party-rental-guide",
  "colorado-stage-av-lighting-rental-guide",
];
const featuredResources = featuredResourceSlugs
  .map((slug) => resourceBySlug.get(slug))
  .filter((r): r is NonNullable<typeof r> => Boolean(r));

const sortedLocations = [...locations].sort((a, b) => a.city.localeCompare(b.city));

export default function ProvidersPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Providers" }]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Colorado · Provider Directory
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Colorado Event Rental Providers
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Browse local event rental companies across Colorado. Compare
                providers by region, rental category, service area and event
                specialty.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-[#1F2937]/60">
                <li>Providers organized by region</li>
                <li>Multiple event rental categories</li>
                <li>Local service-area information</li>
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                {providers.length} Colorado providers and growing
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Link href="/locations" className={primaryActionClass}>
                  Browse Colorado Locations
                </Link>
                <Link href="/for-rental-companies" className={secondaryActionClass}>
                  List Your Business
                </Link>
              </div>
            </div>
          </div>
        </section>

        {providers.length > 0 ? (
          <>
            {/* About this directory */}
            <Section id="about">
              <SectionHeading id="about" title="About This Directory" />
              <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-7 text-[#1F2937]/75">
                <p>
                  Event Rental Finder organizes Colorado event rental
                  providers by region, rental category and documented service
                  area so you can compare options before you reach out.
                  Listings cover tents, tables and chairs, inflatables, photo
                  booths, restroom trailers, staging, AV, lighting, dance
                  floors, party rentals and other event services.
                </p>
                <p className="rounded-xl border border-[#E8E1D5] bg-white px-5 py-4 text-[14px] text-[#1F2937]/70">
                  Provider information is based on publicly available
                  business information and Event Rental Finder research.
                  Service areas, inventory, pricing and availability can
                  change. Confirm details directly with a rental company
                  before booking — a listing here is not an endorsement or
                  guarantee.
                </p>
              </div>
            </Section>

            {/* Summary stats */}
            <Section id="stats" tone="sand">
              <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className={`${cardClass} p-6 text-center`}>
                    <dd className="font-serif text-4xl font-medium text-[#2C7A78]">
                      {stat.value}
                    </dd>
                    <dt className="mt-1.5 text-sm text-[#1F2937]/65">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </Section>

            {/* Regional coverage table */}
            <Section id="coverage" tone="sand">
              <SectionHeading
                id="coverage"
                title="Colorado Provider Coverage by Region"
                intro="A statewide snapshot of where providers are based and what they offer."
              />
              <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E8E1D5] bg-white">
                <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-[#E8E1D5] text-sm text-[#1F2937]/60">
                      <th className="px-5 py-3 font-semibold">Region</th>
                      <th className="px-5 py-3 font-semibold">Providers</th>
                      <th className="px-5 py-3 font-semibold">Categories Represented</th>
                      <th className="px-5 py-3 font-semibold">Key Markets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionStats.map(({ region, providers: regionProviders, categoryNames, markets }) => (
                      <tr key={region.slug} className="border-b border-[#E8E1D5] last:border-0">
                        <td className="px-5 py-3.5 font-medium text-[#1F2937]">{region.name}</td>
                        <td className="px-5 py-3.5 text-[#1F2937]/75">{regionProviders.length}</td>
                        <td className="px-5 py-3.5 text-[#1F2937]/75">
                          {categoryNames.shown.join(", ")}
                          {categoryNames.more > 0 && ` +${categoryNames.more} more`}
                        </td>
                        <td className="px-5 py-3.5 text-[#1F2937]/75">
                          {markets.shown.length > 0
                            ? `${markets.shown.join(", ")}${markets.more > 0 ? ` +${markets.more} more` : ""}`
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Providers by region */}
            <Section id="by-region">
              <SectionHeading
                id="by-region"
                title="Colorado Event Rental Providers by Region"
                intro="Expand a region to browse its providers directly, with contact details and service areas at a glance."
              />
              <div className="mt-8 space-y-4">
                {regionStats.map(({ region, providers: regionProviders }) => (
                  <details
                    key={region.slug}
                    className={`${cardClass} group overflow-hidden open:pb-2`}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]">
                      <span className="font-serif text-xl font-medium text-[#1F2937]">
                        {region.name} — {regionProviders.length}{" "}
                        {regionProviders.length === 1 ? "provider" : "providers"}
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 text-xl text-[#2C7A78] transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="grid gap-4 px-6 pb-6 pt-1 sm:grid-cols-2 lg:grid-cols-3">
                      {regionProviders.map((provider) => (
                        <ProviderRow key={provider.businessId} provider={provider} />
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Section>
          </>
        ) : (
          <Section id="providers">
            <EmptyStatePanel
              icon={
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M4 20V9.5L12 4l8 5.5V20" />
                  <path d="M9.5 20v-6h5v6" />
                </svg>
              }
              heading="Provider Listings Are Coming Soon"
              description="We’re currently building the Event Rental Finder provider network. In the meantime, you can browse rental categories and locations or add your business to the directory."
              actions={[
                { label: "Browse Categories", href: "/categories" },
                { label: "Browse Locations", href: "/locations" },
                {
                  label: "Get Featured on Event Rental Finder",
                  href: "/for-rental-companies",
                },
              ]}
            />
          </Section>
        )}

        {/* Customer CTA */}
        <section className={`${container} pb-16 lg:pb-24`}>
          <div className="rounded-3xl border border-[#E8E1D5] bg-white px-6 py-12 text-center sm:px-10 lg:py-16">
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
              Need Help Finding Event Rentals in Colorado?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/70">
              Tell us what you need, where your event is happening, and when
              you need it. Event Rental Finder can help you explore providers
              serving your area.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/categories" className={primaryActionClass}>
                Find Event Rentals
              </Link>
            </div>
          </div>
        </section>

        {/* City / location links */}
        <Section id="locations" tone="sand">
          <SectionHeading id="locations" title="Colorado Event Rental Locations" />
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {sortedLocations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="inline-flex items-center rounded-full border border-[#E8E1D5] bg-white px-4 py-2 text-[15px] font-medium text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
                >
                  {location.city}, {location.stateCode}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/locations"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78] hover:text-[#256866]"
          >
            Browse all locations <span aria-hidden>→</span>
          </Link>
        </Section>

        {/* Planning resources */}
        {featuredResources.length > 0 && (
          <Section id="resources">
            <SectionHeading id="resources" title="Colorado Event Planning Resources" />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/resources/${article.slug}`}
                    className={`${linkCardClass} flex h-full flex-col p-6`}
                  >
                    {article.category && (
                      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#2C7A78]/10 px-3 py-1 text-xs font-semibold text-[#2C7A78]">
                        {article.category}
                      </span>
                    )}
                    <h3 className="font-serif text-lg font-medium text-[#1F2937]">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-6 text-[#1F2937]/70">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                      Read Guide <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <ProviderCtaPanel
          heading="Own a Colorado Event Rental Company?"
          description="If your company is missing from Event Rental Finder or your listing needs to be updated, request a listing or provider update."
        />
      </main>
    </div>
  );
}
