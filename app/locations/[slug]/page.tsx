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
} from "@/components/PageBlocks";

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
    title: `Event Rentals in ${place} | Event Rental Finder`,
    description: `Find event rental companies in ${place} for tents, tables and chairs, weddings, parties, inflatables, photo booths, restroom trailers, staging, AV and more.`,
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
                  Find local event rental companies serving {city} and the
                  surrounding area. Explore tents, tables and chairs, wedding
                  rentals, inflatables, photo booths, restroom trailers,
                  staging, AV and more.
                </p>
                {county && (
                  <p className="mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                    Serving {county} and nearby communities.
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

        {/* Browse categories */}
        <Section id="categories">
          <SectionHeading
            id="categories"
            title={`Browse Event Rentals in ${city}`}
            intro="Choose a rental category to compare local providers and options."
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

        {/* Nearby cities (only markets that exist in the data) */}
        {nearby.length > 0 && (
          <Section id="nearby" tone="sand">
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
        <Section id="planning" tone={nearby.length > 0 ? "ivory" : "sand"}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHeading id="planning" title={`Planning an Event in ${city}?`} />
            <div>
              <p className="text-lg leading-8 text-[#1F2937]/75">
                Event Rental Finder helps you compare local event rental
                providers for weddings, parties, corporate events, festivals,
                school events, and other gatherings. Browse the categories
                above, then reach out to providers serving {city} to ask about
                availability, delivery, and pricing for your date.
              </p>
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

        <ProviderCtaPanel
          heading={`Do You Serve ${city}?`}
          description={`List your event rental business on Event Rental Finder and get discovered by customers searching in ${city} and surrounding communities.`}
        />
      </main>
    </div>
  );
}
