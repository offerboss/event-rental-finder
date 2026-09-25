import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { categoryImages } from "@/content/categoryImages";
import { locations } from "@/content/locations";
import { locationImages } from "@/content/locationImages";
import {
  Breadcrumb,
  ProviderCtaPanel,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
  linkCardClass,
  renderRichText,
} from "@/components/PageBlocks";

const chevronIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type Props = { params: Promise<{ slug: string }> };

// Only known location slugs are valid; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  const place = `${location.city}, ${location.stateCode}`;
  return {
    title:
      location.metaTitle ?? `Event Rentals in ${place} | Event Rental Finder`,
    description:
      location.metaDescription ??
      `Find event rental companies in ${place} for tents, tables and chairs, weddings, parties, inflatables, photo booths, restroom trailers, staging, AV and more.`,
  };
}

const eventTypes = [
  "Weddings",
  "Parties",
  "Corporate events",
  "Festivals",
  "School events",
  "Community gatherings",
];

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const { city, stateCode, county } = location;
  const place = `${city}, ${stateCode}`;
  const image = locationImages[location.slug];

  // Only link to nearby cities that actually have a page (i.e. exist in the data).
  const nearby = (location.nearbyCities ?? [])
    .map((nearbySlug) => locations.find((l) => l.slug === nearbySlug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  // Sections alternate ivory/sand backgrounds in the order they actually
  // render. A city with none of the optional rich-content sections resolves
  // to the same categories(ivory) -> nearby(sand) -> planning(ivory) sequence
  // as before; richer cities like Aurora simply extend the same alternation.
  const sectionOrder = [
    { key: "useCases", show: Boolean(location.useCases) },
    { key: "categories", show: true },
    { key: "considerations", show: Boolean(location.considerations) },
    { key: "nearby", show: nearby.length > 0 },
    { key: "planning", show: true },
    { key: "checklist", show: Boolean(location.checklist) },
    { key: "faqs", show: Boolean(location.faqs?.items.length) },
  ] as const;
  const tones: Partial<Record<(typeof sectionOrder)[number]["key"], "ivory" | "sand">> = {};
  let sand = false;
  for (const section of sectionOrder) {
    if (!section.show) continue;
    tones[section.key] = sand ? "sand" : "ivory";
    sand = !sand;
  }

  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: city },
              ]}
            />

            <div
              className={`mt-10 lg:mt-14 ${
                image
                  ? "grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
                  : ""
              }`}
            >
              <div className={image ? "" : "max-w-3xl"}>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                  <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                  Event Rental Finder
                </p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                  Event Rentals in {place}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                  {location.heroSupportingCopy ?? (
                    <>
                      Find local event rental companies serving {city} and the
                      surrounding area. Explore tents, tables and chairs,
                      wedding rentals, inflatables, photo booths, restroom
                      trailers, staging, AV and more.
                    </>
                  )}
                </p>
                {county && (
                  <p className="mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                    Serving {county} and nearby communities.
                  </p>
                )}
                {location.heroTagline && (
                  <p className="mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                    {location.heroTagline}
                  </p>
                )}
              </div>

              {image && (
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-[#E8E1D5] shadow-[0_20px_50px_-20px_rgba(30,42,54,0.3)]">
                  <Image
                    src={image}
                    alt={place}
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Popular event rental needs (city-specific use cases) */}
        {location.useCases && (
          <Section id="use-cases" tone={tones.useCases}>
            <SectionHeading
              id="use-cases"
              title={location.useCases.heading}
              intro={location.useCases.intro}
            />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
              {location.useCases.items.map((item) => (
                <li key={item.title} className={`${cardClass} flex h-full flex-col p-6`}>
                  <span aria-hidden className="block h-0.5 w-8 bg-[#C8A96B]" />
                  <h3 className="mt-4 font-serif text-xl font-medium text-[#1F2937]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-7 text-[#1F2937]/70">
                    {renderRichText(item.description)}
                  </p>
                  {item.categorySlug && (
                    <Link
                      href={`/categories/${item.categorySlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78] transition hover:text-[#256866]"
                    >
                      Explore{" "}
                      {categories.find((c) => c.slug === item.categorySlug)
                        ?.name ?? "Rentals"}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Browse categories */}
        <Section id="categories" tone={tones.categories}>
          <SectionHeading
            id="categories"
            title={`Browse Event Rentals in ${city}`}
            intro={
              location.categoriesIntro ??
              "Choose a rental category to compare local providers and options."
            }
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
            {categories.map((category) => {
              const categoryImage = categoryImages[category.slug];
              return (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className={`${linkCardClass} flex h-full flex-col overflow-hidden`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#E8E1D5] to-[#F8F5EF]">
                      {categoryImage && (
                        <Image
                          src={categoryImage}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 224px, (min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-3 p-4">
                      <h3 className="font-serif text-lg font-medium leading-snug text-[#1F2937]">
                        {category.name}
                      </h3>
                      <span
                        aria-hidden
                        className="shrink-0 text-[#2C7A78] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* What to consider (city-specific planning considerations) */}
        {location.considerations && (
          <Section id="considerations" tone={tones.considerations}>
            <SectionHeading
              id="considerations"
              title={location.considerations.heading}
              intro={location.considerations.intro}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10">
              {location.considerations.items.map((item) => (
                <li
                  key={item}
                  className={`${cardClass} flex items-start gap-3 px-5 py-4 text-[15px] leading-6 text-[#1F2937]/80 shadow-none`}
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96B]"
                  />
                  <span>{renderRichText(item)}</span>
                </li>
              ))}
            </ul>
            {location.considerations.disclaimer && (
              <p className="mt-6 max-w-3xl text-sm leading-6 text-[#1F2937]/65">
                {location.considerations.disclaimer}
              </p>
            )}
            {location.considerations.closing && (
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#1F2937]/75">
                {renderRichText(location.considerations.closing)}
              </p>
            )}
          </Section>
        )}

        {/* Nearby cities (only markets that exist in the data) */}
        {nearby.length > 0 && (
          <Section id="nearby" tone={tones.nearby}>
            <SectionHeading id="nearby" title={`Event Rentals Near ${city}`} />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/locations/${item.slug}`}
                    className={`${linkCardClass} flex items-center justify-between gap-4 px-6 py-5`}
                  >
                    <span>
                      <span className="block font-serif text-xl font-medium text-[#1F2937]">
                        {item.city}, {item.stateCode}
                      </span>
                      {item.county && (
                        <span className="mt-0.5 block text-[15px] text-[#1F2937]/60">
                          {item.county}
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E8E1D5] text-[#2C7A78] transition group-hover:border-[#2C7A78] group-hover:bg-[#2C7A78] group-hover:text-white"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Local intro */}
        <Section id="planning" tone={tones.planning}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHeading id="planning" title={`Planning an Event in ${city}?`} />
            <div>
              {location.localIntro ? (
                <div className="space-y-4">
                  {location.localIntro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-[#1F2937]/75"
                    >
                      {renderRichText(paragraph)}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg leading-8 text-[#1F2937]/75">
                  Event Rental Finder helps you compare local event rental
                  providers for weddings, parties, corporate events, festivals,
                  school events, and other gatherings. Browse the categories
                  above, then reach out to providers serving {city} to ask
                  about availability, delivery, and pricing for your date.
                </p>
              )}
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {eventTypes.map((type) => (
                  <li
                    key={type}
                    className={`${cardClass} rounded-full px-4 py-1.5 text-sm font-medium text-[#1F2937] shadow-none`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Local rental checklist */}
        {location.checklist && (
          <Section id="checklist" tone={tones.checklist}>
            <SectionHeading
              id="checklist"
              title={location.checklist.heading}
              intro={location.checklist.intro}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
              {location.checklist.items.map((item) => (
                <li
                  key={item}
                  className={`${cardClass} flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium text-[#1F2937]`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2C7A78]/10 text-[#2C7A78]">
                    <svg
                      {...chevronIconProps}
                      width={14}
                      height={14}
                      strokeWidth={2.2}
                    >
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* City-specific FAQ */}
        {location.faqs && location.faqs.items.length > 0 && (
          <Section id="faqs" tone={tones.faqs}>
            <SectionHeading id="faqs" title={location.faqs.heading} />
            <div className="mt-8 max-w-3xl space-y-3 lg:mt-10">
              {location.faqs.items.map((faq) => (
                <details
                  key={faq.question}
                  className={`group ${cardClass} px-6 py-5`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-medium text-[#1F2937] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      {...chevronIconProps}
                      width={20}
                      height={20}
                      className="shrink-0 text-[#2C7A78] transition-transform group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-[15px] leading-7 text-[#1F2937]/70">
                    {renderRichText(faq.answer)}
                  </p>
                </details>
              ))}
            </div>
          </Section>
        )}

        <ProviderCtaPanel
          heading={location.providerCta?.heading ?? `Do You Serve ${city}?`}
          description={
            location.providerCta?.description ??
            `List your event rental business on Event Rental Finder and get discovered by customers searching in ${city} and surrounding communities.`
          }
        />
      </main>
    </div>
  );
}
