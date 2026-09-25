import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { categoryImages } from "@/content/categoryImages";
import { resources } from "@/content/resources";
import type { ResourceContentBlock } from "@/types";
import {
  Breadcrumb,
  cardClass,
  container,
  heroBackground,
  linkCardClass,
  renderRichText,
} from "@/components/PageBlocks";

type Props = { params: Promise<{ slug: string }> };

// Only known resource slugs are valid; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = resources.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.metaTitle ?? `${article.title} | Event Rental Finder`,
    description: article.metaDescription ?? article.excerpt,
  };
}

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

// Renders the small set of body block shapes a ResourceSection can contain.
function Block({ block }: { block: ResourceContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-lg leading-8 text-[#1F2937]/75">
          {renderRichText(block.text)}
        </p>
      );
    case "subheading":
      return (
        <h3 className="font-serif text-xl font-medium text-[#1F2937]">
          {block.text}
        </h3>
      );
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`space-y-2 pl-1 text-lg leading-8 text-[#1F2937]/75 ${
            block.ordered ? "list-decimal pl-6" : ""
          }`}
        >
          {block.items.map((item) => (
            <li key={item} className={block.ordered ? "" : "flex gap-3"}>
              {!block.ordered && (
                <span
                  aria-hidden
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96B]"
                />
              )}
              <span>{renderRichText(item)}</span>
            </li>
          ))}
        </ListTag>
      );
    }
    case "callout":
      return (
        <p className="rounded-xl border border-[#2C7A78]/25 bg-[#2C7A78]/5 px-5 py-4 text-lg leading-8 text-[#1F2937]">
          {renderRichText(block.text)}
        </p>
      );
    case "table":
      return (
        <dl className="divide-y divide-[#E8E1D5] rounded-2xl border border-[#E8E1D5] bg-white px-6">
          {block.rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <dt className="font-medium text-[#1F2937]">{row.label}</dt>
              <dd className="font-serif text-lg text-[#2C7A78] sm:text-right">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = resources.find((a) => a.slug === slug);
  if (!article) notFound();

  const topicCategory = article.topicCategorySlug
    ? categories.find((c) => c.slug === article.topicCategorySlug)
    : undefined;

  const related = (article.relatedCategorySlugs ?? [])
    .map((relatedSlug) => categories.find((c) => c.slug === relatedSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const relatedResources = (article.relatedResourceSlugs ?? [])
    .map((relatedSlug) => resources.find((r) => r.slug === relatedSlug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const date = formatDate(article.updatedAt ?? article.publishedAt);
  const cta = article.cta ?? {
    heading: "Ready to Find Event Rentals Near You?",
    description: "Browse local rental categories and locations for your event.",
    primaryLabel: "Browse Categories",
    primaryHref: "/categories",
    secondaryLabel: "Browse Locations",
    secondaryHref: "/locations",
  };

  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-16 lg:pt-10`}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: article.title },
              ]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              {topicCategory && (
                <Link
                  href={`/categories/${topicCategory.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
                >
                  <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                  {topicCategory.name}
                </Link>
              )}
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                {article.h1 ?? article.title}
              </h1>
              {date && (
                <p className="mt-4 text-sm text-[#1F2937]/55">{date}</p>
              )}
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className={`${container} py-14 lg:py-20`}>
          <div className="mx-auto max-w-3xl">
            {article.intro && (
              <div className="space-y-5">
                {article.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xl leading-9 text-[#1F2937]/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {article.sections?.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="mt-12 scroll-mt-6 lg:mt-16"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-serif text-2xl font-medium tracking-tight text-[#1F2937] sm:text-3xl"
                >
                  {section.heading}
                </h2>
                {section.intro && (
                  <p className="mt-3 text-lg leading-8 text-[#1F2937]/75">
                    {section.intro}
                  </p>
                )}
                <div className="mt-5 space-y-5">
                  {section.blocks.map((block, index) => (
                    // Blocks within a section don't have a stable natural key.
                    <Block key={index} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        {/* Related guides and rentals */}
        {(related.length > 0 || relatedResources.length > 0) && (
          <section className="bg-[#F2EEE7] py-14 lg:py-20">
            <div className={container}>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
                {article.relatedHeading ?? "Other Rentals You May Need"}
              </h2>

              {relatedResources.length > 0 && (
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:gap-6">
                  {relatedResources.map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={`/resources/${guide.slug}`}
                        className={`${linkCardClass} flex h-full flex-col p-6`}
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2C7A78]">
                          Guide
                        </span>
                        <h3 className="mt-2 font-serif text-xl font-medium text-[#1F2937]">
                          {guide.title}
                        </h3>
                        <p className="mt-2 flex-1 text-[15px] leading-7 text-[#1F2937]/70">
                          {guide.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
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
                  ))}
                </ul>
              )}

              {related.length > 0 && (
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
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={`${container} py-16 lg:py-24`}>
          <div className={`${cardClass} px-6 py-12 text-center sm:px-10 lg:py-16`}>
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
              {cta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/70">
              {cta.description}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href={cta.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                {cta.primaryLabel}
              </Link>
              {cta.secondaryLabel && cta.secondaryHref && (
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-7 text-base font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
                >
                  {cta.secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
