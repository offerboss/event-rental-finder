import type { Metadata } from "next";
import GhlForm from "@/components/GhlForm";
import {
  Breadcrumb,
  Section,
  SectionHeading,
  cardClass,
  container,
  heroBackground,
} from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Apply to Be Featured on Event Rental Finder",
  description:
    "Put your event rental company in front of customers actively searching in the markets you serve. Apply for featured placement on Event Rental Finder.",
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

const reasons = [
  {
    title: "Reach active local searches",
    description:
      "Featured placement can increase visibility with customers actively searching for event rentals in the markets you serve.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
  },
  {
    title: "Simple application",
    description:
      "One short form covering your company information, service area and the rental categories you offer.",
    icon: (
      <svg {...iconProps}>
        <rect x="5.5" y="5" width="13" height="16" rx="2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Event rental companies welcome",
    description:
      "Appropriate for local and regional providers offering things such as tents, tables and chairs, inflatables, linens, staging, lighting, photo booths, dance floors, concessions or other event rental inventory.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
];

export default function ForRentalCompaniesPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "For Rental Companies" },
              ]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                For Rental Companies
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Get Your Event Rental Company Featured on Event Rental Finder
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Event Rental Finder helps people planning weddings, parties,
                corporate events, community events and other gatherings
                connect with local event rental companies. This page is for
                rental companies interested in featured placement — enhanced
                visibility with customers searching for event rentals in the
                markets you serve, beyond our standard directory listings.
              </p>
              <div className="mt-8">
                <a
                  href="#apply"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
                >
                  Apply for Featured Placement <span aria-hidden className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why apply */}
        <Section id="why-apply">
          <SectionHeading id="why-apply" title="Why Apply?" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-3 lg:mt-10">
            {reasons.map((reason) => (
              <li key={reason.title} className={`${cardClass} p-6`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 bg-[#F8F5EF] text-[#2C7A78]">
                  {reason.icon}
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-[#1F2937]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#1F2937]/70">
                  {reason.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Application form */}
        <section
          id="apply"
          aria-labelledby="apply-heading"
          className="scroll-mt-6 bg-[#F2EEE7] py-14 lg:py-20"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div>
                <span aria-hidden className="block h-0.5 w-10 bg-[#C8A96B]" />
                <h2
                  id="apply-heading"
                  className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl"
                >
                  Apply to Be Featured on Event Rental Finder
                </h2>
                <p className="mt-3 max-w-md text-lg leading-8 text-[#1F2937]/70">
                  Put your company in front of customers actively searching
                  for event rentals in the markets you serve. Tell us about
                  your business below and we&rsquo;ll follow up about featured
                  placement opportunities.
                </p>
              </div>

              <div>
                <div className={`${cardClass} overflow-hidden p-4 sm:p-6`}>
                  <GhlForm
                    formId="ygLz10RlvYkWRhJiAetj"
                    formName="Get Featured on Event Rental Finder"
                    height={1643}
                  />
                </div>
                <p className="mt-5 text-sm leading-6 text-[#1F2937]/60">
                  Event Rental Finder may include rental companies in its
                  directory independently of this application. This form is
                  specifically for companies interested in featured
                  placement, and submitting it does not guarantee acceptance.
                  Our team reviews every application and will follow up about
                  available opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Growth Systems attribution */}
        <section className={`${container} py-12 text-center lg:py-16`}>
          <p className="text-sm text-[#1F2937]/60">
            Event Rental Finder is part of the Rental Growth Systems network.
          </p>
          <a
            href="https://rentalgrowthsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-5 text-sm font-medium text-[#1F2937]/80 transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
          >
            Looking for broader growth support? Explore Rental Growth Systems
            <span aria-hidden className="ml-2">↗</span>
          </a>
        </section>
      </main>
    </div>
  );
}
