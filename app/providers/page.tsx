import type { Metadata } from "next";
import {
  Breadcrumb,
  EmptyStatePanel,
  ProviderCtaPanel,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
} from "@/components/PageBlocks";
import { categories } from "@/content/categories";
import { providers } from "@/content/providers";

export const metadata: Metadata = {
  title: "Event Rental Providers | Event Rental Finder",
  description:
    "Browse event rental providers and discover companies offering tents, tables and chairs, weddings, inflatables, photo booths, restroom trailers, staging, AV and more.",
};

const categoryNames = new Map(categories.map((c) => [c.slug, c.name]));

const badgeClass =
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";

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
                Event Rental Providers
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Find Trusted Event Rental Companies
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Browse event rental providers by service and location. Event
                Rental Finder helps you discover companies offering tents,
                tables and chairs, wedding rentals, inflatables, photo booths,
                restroom trailers, staging, AV and more.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                Local providers. More markets coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* Provider grid, or an intentional empty state */}
        <Section id="providers">
          {providers.length > 0 ? (
            <>
              <SectionHeading id="providers" title="Event Rental Providers" />
              {/* No /providers/[slug] route exists yet, so cards are not links. */}
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
                {providers.map((provider) => {
                  const place = [provider.city, provider.stateCode ?? provider.state]
                    .filter(Boolean)
                    .join(", ");

                  return (
                    <li
                      key={provider.slug}
                      className={`${cardClass} flex flex-col p-6`}
                    >
                      {(provider.featured || provider.verified) && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {provider.featured && (
                            <span
                              className={`${badgeClass} bg-[#C8A96B]/20 text-[#1F2937]`}
                            >
                              Featured
                            </span>
                          )}
                          {provider.verified && (
                            <span
                              className={`${badgeClass} bg-[#2C7A78]/10 text-[#2C7A78]`}
                            >
                              Verified
                            </span>
                          )}
                        </div>
                      )}
                      <h3 className="font-serif text-xl font-medium text-[#1F2937]">
                        {provider.name}
                      </h3>
                      {place && (
                        <p className="mt-1 text-[15px] text-[#1F2937]/60">
                          {place}
                        </p>
                      )}
                      {provider.description && (
                        <p className="mt-3 text-[15px] leading-7 text-[#1F2937]/70">
                          {provider.description}
                        </p>
                      )}
                      {provider.categories.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {provider.categories.map((slug) => (
                            <li
                              key={slug}
                              className="rounded-full border border-[#E8E1D5] bg-[#F8F5EF] px-3 py-1 text-xs font-medium text-[#1F2937]"
                            >
                              {categoryNames.get(slug) ?? slug}
                            </li>
                          ))}
                        </ul>
                      )}
                      {provider.website && (
                        <a
                          href={provider.website}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78] transition hover:text-[#256866]"
                        >
                          Visit Website <span aria-hidden>→</span>
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
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
                { label: "List Your Business", href: "/list-your-business" },
              ]}
            />
          )}
        </Section>

        <ProviderCtaPanel
          heading="Own an Event Rental Business?"
          description="Join Event Rental Finder and make it easier for local customers to discover your services."
        />
      </main>
    </div>
  );
}
