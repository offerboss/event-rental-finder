import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { categoryImages } from "@/content/categoryImages";
import { locations } from "@/content/locations";

type Props = { params: Promise<{ slug: string }> };

// Only known category slugs are valid; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.metaTitle ?? `${category.name} | Event Rental Finder`,
    description: category.metaDescription ?? category.shortDescription,
  };
}

const container = "mx-auto max-w-7xl px-6";

function Section({
  tone = "ivory",
  label,
  children,
}: {
  tone?: "ivory" | "sand";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={label}
      className={`py-14 lg:py-20 ${tone === "sand" ? "bg-[#F2EEE7]" : ""}`}
    >
      <div className={container}>{children}</div>
    </section>
  );
}

function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-lg leading-8 text-[#1F2937]/70">{intro}</p>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

const cardClass =
  "rounded-2xl border border-[#E8E1D5] bg-white shadow-[0_4px_20px_-8px_rgba(30,42,54,0.12)]";

const linkCardClass = `group ${cardClass} transition duration-200 hover:-translate-y-0.5 hover:border-[#C8A96B] hover:shadow-[0_14px_36px_-12px_rgba(30,42,54,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]`;

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const image = categoryImages[category.slug];
  const related = (category.relatedCategories ?? [])
    .map((relatedSlug) => categories.find((c) => c.slug === relatedSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const providerCta = category.providerCta ?? {
    heading: "Are You an Event Rental Provider?",
    description:
      "List your business on Event Rental Finder and get discovered by customers searching for event rentals in your area.",
  };

  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className="border-b border-[#E8E1D5] bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.14),transparent_60%)]">
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <nav aria-label="Breadcrumb" className="text-sm text-[#1F2937]/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-[#2C7A78]">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/categories"
                    className="transition hover:text-[#2C7A78]"
                  >
                    Categories
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-[#1F2937]">
                  {category.name}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                  <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                  Event Rental Finder
                </p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                  {category.h1 ?? category.name}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                  {category.shortDescription}
                </p>
                {category.heroTagline && (
                  <p className="mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                    {category.heroTagline}
                  </p>
                )}
              </div>

              {image && (
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-[#E8E1D5] shadow-[0_20px_50px_-20px_rgba(30,42,54,0.3)]">
                  <Image
                    src={image}
                    alt={category.name}
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

        {/* Find by location */}
        <Section label="by-location">
          <SectionHeading
            id="by-location"
            title={`Find ${category.name} by Location`}
            intro="Explore event rental providers across Colorado’s most popular markets."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className={`${linkCardClass} flex items-center justify-between gap-4 px-6 py-5`}
                >
                  <span>
                    <span className="block font-serif text-xl font-medium text-[#1F2937]">
                      {location.city}, {location.stateCode}
                    </span>
                    {location.county && (
                      <span className="mt-0.5 block text-[15px] text-[#1F2937]/60">
                        {location.county}
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

        {/* Types */}
        {category.types && (
          <Section tone="sand" label="types">
            <SectionHeading id="types" title={category.types.heading} />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
              {category.types.items.map((item) => (
                <li key={item.title} className={`${cardClass} p-6`}>
                  <span
                    aria-hidden
                    className="block h-0.5 w-8 bg-[#C8A96B]"
                  />
                  <h3 className="mt-4 font-serif text-xl font-medium text-[#1F2937]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#1F2937]/70">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Sizing guide */}
        {category.sizing && (
          <Section label="sizing">
            <SectionHeading
              id="sizing"
              title={category.sizing.heading}
              intro={category.sizing.intro}
            />
            <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
              <dl className={`${cardClass} divide-y divide-[#E8E1D5] px-6`}>
                {category.sizing.rows.map((row) => (
                  <div
                    key={row.guests}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <dt className="font-medium text-[#1F2937]">{row.guests}</dt>
                    <dd className="font-serif text-lg text-[#2C7A78] sm:text-right">
                      {row.size}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className={`${cardClass} p-6 sm:p-8`}>
                <h3 className="font-serif text-xl font-medium text-[#1F2937]">
                  {category.sizing.factorsHeading}
                </h3>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {category.sizing.factors.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-start gap-3 text-[15px] leading-6 text-[#1F2937]/80"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96B]"
                      />
                      {factor}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-[#E8E1D5] pt-5 text-sm leading-6 text-[#1F2937]/65">
                  {category.sizing.disclaimer}
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* Cost guide */}
        {category.costGuide && (
          <Section tone="sand" label="cost">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <SectionHeading
                id="cost"
                title={category.costGuide.heading}
                intro={category.costGuide.intro}
              />
              <div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {category.costGuide.factors.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-center gap-3 rounded-xl border border-[#E8E1D5] bg-white px-4 py-3 text-[15px] font-medium text-[#1F2937]"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96B]"
                      />
                      {factor}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl border border-[#2C7A78]/25 bg-[#2C7A78]/5 px-5 py-4 font-serif text-lg text-[#1F2937]">
                  {category.costGuide.closing}
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* Booking checklist */}
        {category.bookingChecklist && (
          <Section label="checklist">
            <SectionHeading
              id="checklist"
              title={category.bookingChecklist.heading}
              intro={category.bookingChecklist.intro}
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
              {category.bookingChecklist.questions.map((question) => (
                <li
                  key={question}
                  className={`${cardClass} flex items-start gap-4 p-5`}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2C7A78]/10 text-[#2C7A78]">
                    <CheckIcon />
                  </span>
                  <span className="text-base leading-7 text-[#1F2937]">
                    {question}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Related categories */}
        {related.length > 0 && (
          <Section tone="sand" label="related">
            <SectionHeading id="related" title="Complete Your Event Setup" />
            <ul className="mt-8 flex flex-wrap justify-center gap-5 lg:mt-10 lg:gap-6">
              {related.map((item) => {
                const itemImage = categoryImages[item.slug];
                return (
                  <li
                    key={item.slug}
                    className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <Link
                      href={`/categories/${item.slug}`}
                      className={`${linkCardClass} flex h-full flex-col overflow-hidden`}
                    >
                      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#E8E1D5] to-[#F8F5EF]">
                        {itemImage && (
                          <Image
                            src={itemImage}
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-4 px-6 py-5">
                        <h3 className="font-serif text-xl font-medium text-[#1F2937]">
                          {item.name}
                        </h3>
                        <span
                          aria-hidden
                          className="text-[#2C7A78] transition-transform duration-200 group-hover:translate-x-1"
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
        )}

        {/* Provider CTA */}
        <section className={`${container} pb-16 pt-6 lg:pb-24 lg:pt-10`}>
          <div className="rounded-3xl bg-[#1F2937] px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14">
            <div className="max-w-2xl">
              <span aria-hidden className="block h-0.5 w-10 bg-[#C8A96B]" />
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                {providerCta.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/75">
                {providerCta.description}
              </p>
            </div>
            <Link
              href="/list-your-business"
              className="mt-8 inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#348f8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-0"
            >
              List Your Business <span aria-hidden className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
