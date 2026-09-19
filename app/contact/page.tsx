import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  Breadcrumb,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
  linkCardClass,
} from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Contact Event Rental Finder",
  description:
    "Contact Event Rental Finder with questions about event rental listings, directory coverage, provider information and local event rental resources.",
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

const contactOptions = [
  {
    title: "Business Listings",
    description: "Questions about adding or updating your event rental company?",
    cta: "List Your Business",
    href: "/list-your-business",
    icon: (
      <svg {...iconProps}>
        <rect x="5.5" y="5" width="13" height="16" rx="2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Directory Questions",
    description:
      "Need help finding rental categories or providers in your area?",
    cta: "Browse Categories",
    href: "/categories",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
  },
  {
    title: "Coverage & Locations",
    description:
      "Looking for Event Rental Finder in a city we don’t cover yet?",
    cta: "Browse Locations",
    href: "/locations",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Can I add my rental company to Event Rental Finder?",
    answer:
      "Yes. Visit the List Your Business page and submit your company information.",
  },
  {
    question: "Can I request coverage in a new city?",
    answer:
      "Yes. Event Rental Finder is expanding into new markets as the directory grows.",
  },
  {
    question: "Can I update an existing business listing?",
    answer:
      "Yes. Providers will be able to request updates to their company information as the directory develops.",
  },
  {
    question: "Do you rent equipment directly?",
    answer:
      "No. Event Rental Finder is a directory that helps customers discover event rental providers.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Get in Touch
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                How Can We Help?
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Have a question about Event Rental Finder, business listings,
                provider coverage, or the directory? Send us a message and
                we’ll point you in the right direction.
              </p>
            </div>
          </div>
        </section>

        {/* Contact options */}
        <section
          aria-label="Ways to get help"
          className={`${container} py-14 lg:py-20`}
        >
          <ul className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {contactOptions.map((option) => (
              <li key={option.title}>
                <Link
                  href={option.href}
                  className={`${linkCardClass} flex h-full flex-col p-6`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 bg-[#F8F5EF] text-[#2C7A78]">
                    {option.icon}
                  </span>
                  <h2 className="mt-5 font-serif text-xl font-medium text-[#1F2937]">
                    {option.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[15px] leading-7 text-[#1F2937]/70">
                    {option.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                    {option.cta}
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
        </section>

        {/* Contact form */}
        <section
          id="message"
          aria-labelledby="message-heading"
          className="bg-[#F2EEE7] py-14 lg:py-20"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div>
                <span aria-hidden className="block h-0.5 w-10 bg-[#C8A96B]" />
                <h2
                  id="message-heading"
                  className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl"
                >
                  Send Us a Message
                </h2>
                <p className="mt-3 max-w-md text-lg leading-8 text-[#1F2937]/70">
                  Tell us what you need and we’ll get back to you.
                </p>
              </div>
              <div className={`${cardClass} p-6 sm:p-8 lg:p-10`}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Quick answers */}
        <Section id="quick-answers">
          <SectionHeading id="quick-answers" title="Quick Answers" />
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
      </main>
    </div>
  );
}
