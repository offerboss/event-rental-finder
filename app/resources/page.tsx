import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  EmptyStatePanel,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
  linkCardClass,
} from "@/components/PageBlocks";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "Event Rental Resources | Event Rental Finder",
  description:
    "Explore event rental planning guides, tips and resources for tents, tables and chairs, weddings, party rentals, restrooms, staging, AV and more.",
};

// Topics ERF plans to cover. These are intentionally not links: the guides
// don't exist yet.
const plannedTopics = [
  {
    title: "Tent Sizing and Planning",
    description: "Choosing a tent size and layout that fits your guest count.",
  },
  {
    title: "Tables and Seating",
    description: "Planning tables, chairs and seating arrangements.",
  },
  {
    title: "Wedding Rentals",
    description: "Rental options for ceremonies, receptions and celebrations.",
  },
  {
    title: "Event Restrooms",
    description: "Understanding restroom trailer and portable restroom options.",
  },
  {
    title: "Inflatables and Party Rentals",
    description: "Fun rental options for parties, school events and gatherings.",
  },
  {
    title: "Staging, AV and Lighting",
    description: "Stages, sound, lighting and equipment for your event.",
  },
];

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ResourcesPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Event Planning Resources
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Plan Your Event With Confidence
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Explore practical guides, planning tips and rental resources to
                help you choose the right equipment, compare options and
                prepare for your event.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                Planning guides and rental tips
              </p>
            </div>
          </div>
        </section>

        {/* Resource grid, or an intentional empty state */}
        <Section id="guides">
          {resources.length > 0 ? (
            <>
              <SectionHeading id="guides" title="Guides and Tips" />
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
                {[...resources]
                  .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
                  .map((article) => {
                    const date = formatDate(article.updatedAt ?? article.publishedAt);
                    return (
                      <li key={article.slug}>
                        <Link
                          href={`/resources/${article.slug}`}
                          className={`${linkCardClass} flex h-full flex-col p-6`}
                        >
                          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
                            {article.featured && (
                              <span className="rounded-full bg-[#C8A96B]/20 px-3 py-1 text-[#1F2937]">
                                Featured
                              </span>
                            )}
                            {article.category && (
                              <span className="rounded-full bg-[#2C7A78]/10 px-3 py-1 text-[#2C7A78]">
                                {article.category}
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-xl font-medium text-[#1F2937]">
                            {article.title}
                          </h3>
                          <p className="mt-3 flex-1 text-[15px] leading-7 text-[#1F2937]/70">
                            {article.excerpt}
                          </p>
                          {date && (
                            <p className="mt-4 text-sm text-[#1F2937]/55">{date}</p>
                          )}
                          <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                            Read Guide
                            <span
                              aria-hidden
                              className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </span>
                        </Link>
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
                  <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5Z" />
                  <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5Z" />
                </svg>
              }
              heading="Helpful Guides Are Coming Soon"
              description="We’re building practical resources to help you plan events, understand rental options and make confident decisions."
              actions={[
                { label: "Browse Categories", href: "/categories" },
                { label: "Browse Locations", href: "/locations" },
              ]}
            />
          )}
        </Section>

        {/* Planned topics */}
        <Section id="topics" tone="sand">
          <SectionHeading
            id="topics"
            title="Topics We’ll Cover"
            intro="Here’s what we’re working on for future guides."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {plannedTopics.map((topic) => (
              <li key={topic.title} className={`${cardClass} p-6`}>
                <span aria-hidden className="block h-0.5 w-8 bg-[#C8A96B]" />
                <h3 className="mt-4 font-serif text-xl font-medium text-[#1F2937]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#1F2937]/70">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* CTA */}
        <section className={`${container} py-16 lg:py-24`}>
          <div className="rounded-3xl border border-[#E8E1D5] bg-white px-6 py-12 text-center sm:px-10 lg:py-16">
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
              Looking for Event Rental Services?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/70">
              Browse local rental categories and locations to find providers
              serving your event.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/categories"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                Browse Categories
              </Link>
              <Link
                href="/locations"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-7 text-base font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                Browse Locations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
