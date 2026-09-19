import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ListingForm from "@/components/ListingForm";
import {
  Breadcrumb,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
} from "@/components/PageBlocks";
import { categories } from "@/content/categories";

export const metadata: Metadata = {
  title: "List Your Event Rental Business | Event Rental Finder",
  description:
    "List your event rental company on Event Rental Finder and reach customers searching for tents, tables and chairs, wedding rentals, inflatables, photo booths, restroom trailers, staging, AV and more.",
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const benefits = [
  {
    title: "Reach Local Customers",
    description:
      "Get discovered by people searching for event rental services in the markets you serve.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    title: "Showcase Your Services",
    description:
      "Highlight the rental categories your company offers and the areas you cover.",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Increase Online Visibility",
    description:
      "Strengthen your digital presence through a dedicated directory listing and relevant local pages.",
    icon: (
      <svg {...iconProps}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
    ),
  },
  {
    title: "Generate More Opportunities",
    description:
      "Create another path for prospective customers to discover and contact your business.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8 8 0 0 1-11.7 7.1L4 20l1.3-4.4A8 8 0 1 1 21 11.5Z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth={2.4} />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Tell Us About Your Business",
    description: "Provide company details, services and service areas.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <rect x="5.5" y="5" width="13" height="16" rx="2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "We Review Your Listing",
    description:
      "Event Rental Finder reviews the information and prepares the listing.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <path d="M6 3.5h8l4 4v13H6Z" />
        <path d="M14 3.5v4h4" />
        <path d="m9.5 14 2 2 3.5-4" />
      </svg>
    ),
  },
  {
    title: "Get Discovered",
    description:
      "Your business can appear in relevant categories and locations across the directory.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Is it free to list my business?",
    answer:
      "Event Rental Finder is currently onboarding providers as the directory grows. Submit your business information and we’ll follow up with available listing options.",
  },
  {
    question: "Which types of businesses can join?",
    answer:
      "Event rental companies offering tents, tables and chairs, wedding rentals, inflatables, restroom trailers, photo booths, staging, AV, lighting and related services.",
  },
  {
    question: "Can I list multiple service areas?",
    answer:
      "Yes. Include the cities and regions you serve when submitting your business.",
  },
  {
    question: "Can I update my listing later?",
    answer:
      "Yes. Providers will be able to request updates to their business information as the directory develops.",
  },
];

const primaryButton =
  "inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]";

export default function ListYourBusinessPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "List Your Business" },
              ]}
            />

            <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                  <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                  For Event Rental Companies
                </p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                  Get Your Event Rental Business Discovered
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                  Reach customers actively searching for tents, tables and
                  chairs, wedding rentals, inflatables, photo booths, restroom
                  trailers, staging, AV and more.
                </p>
                <p className="mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/75">
                  Event Rental Finder helps local rental companies increase
                  visibility and connect with customers searching in their
                  service area.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#get-listed" className={primaryButton}>
                    Get Listed <span aria-hidden className="ml-2">→</span>
                  </a>
                  <Link
                    href="/categories"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-7 text-base font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
                  >
                    Explore the Directory
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-[#E8E1D5] shadow-[0_20px_50px_-20px_rgba(30,42,54,0.3)]">
                <Image
                  src="/images/event-rental-finder-hero-event-rentals.png"
                  alt="Sunset event with a white tent, string lights and lounge seating"
                  fill
                  priority
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[65%_center]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why list */}
        <Section id="why-list">
          <SectionHeading id="why-list" title="Why List Your Business?" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
            {benefits.map((benefit) => (
              <li key={benefit.title} className={`${cardClass} p-6`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 bg-[#F8F5EF] text-[#2C7A78]">
                  {benefit.icon}
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-[#1F2937]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#1F2937]/70">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" tone="sand">
          <div className="text-center">
            <h2
              id="how-it-works"
              className="font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl"
            >
              Getting Listed Is Simple
            </h2>
          </div>
          <ol className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#E8E1D5]">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col items-center px-4 text-center lg:px-10"
              >
                <div className="relative">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#E8E1D5] bg-white text-[#2C7A78]">
                    {step.icon}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96B] font-serif text-lg font-semibold text-[#1F2937] ring-4 ring-[#F2EEE7]"
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium text-[#1F2937]">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-[15px] leading-7 text-[#1F2937]/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Built for */}
        <Section id="built-for">
          <SectionHeading
            id="built-for"
            title="Built for Event Rental Companies"
            intro="Businesses across these rental categories can be listed."
          />
          <ul className="mt-8 flex flex-wrap gap-3 lg:mt-10">
            {categories.map((category) => (
              <li
                key={category.slug}
                className="flex items-center gap-2.5 rounded-full border border-[#E8E1D5] bg-white px-5 py-2.5 text-[15px] font-medium text-[#1F2937]"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-[#C8A96B]"
                />
                {category.name}
              </li>
            ))}
          </ul>
        </Section>

        {/* Listing form */}
        <section
          id="get-listed"
          aria-labelledby="get-listed-heading"
          className="scroll-mt-6 bg-[#F2EEE7] py-14 lg:py-20"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div>
                <span aria-hidden className="block h-0.5 w-10 bg-[#C8A96B]" />
                <h2
                  id="get-listed-heading"
                  className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl"
                >
                  List Your Business
                </h2>
                <p className="mt-3 max-w-md text-lg leading-8 text-[#1F2937]/70">
                  Tell us about your company and where you operate.
                </p>
              </div>
              <div className={`${cardClass} p-6 sm:p-8 lg:p-10`}>
                <ListingForm
                  categories={categories.map(({ name, slug }) => ({
                    name,
                    slug,
                  }))}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <Section id="faq">
          <SectionHeading id="faq" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-3xl space-y-3 lg:mt-10">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={`group ${cardClass} px-6 py-5`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-medium text-[#1F2937] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    {...iconProps}
                    width={20}
                    height={20}
                    className="shrink-0 text-[#2C7A78] transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-[15px] leading-7 text-[#1F2937]/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section className={`${container} pb-16 lg:pb-24`}>
          <div className="rounded-3xl bg-[#1F2937] px-6 py-12 text-center sm:px-10 lg:py-16">
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
              Ready to Grow Your Visibility?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/75">
              Join Event Rental Finder and make it easier for local customers to
              discover your business.
            </p>
            <a
              href="#get-listed"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#348f8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Listed <span aria-hidden className="ml-2">→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
