import Link from "next/link";

// Shared building blocks for the ERF content pages (locations hub + city pages).

export const container = "mx-auto max-w-7xl px-6";

export const cardClass =
  "rounded-2xl border border-[#E8E1D5] bg-white shadow-[0_4px_20px_-8px_rgba(30,42,54,0.12)]";

export const linkCardClass = `group ${cardClass} transition duration-200 hover:-translate-y-0.5 hover:border-[#C8A96B] hover:shadow-[0_14px_36px_-12px_rgba(30,42,54,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]`;

export const heroBackground =
  "border-b border-[#E8E1D5] bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.14),transparent_60%)]";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#1F2937]/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-[#2C7A78]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#1F2937]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({
  id,
  tone = "ivory",
  children,
}: {
  id: string;
  tone?: "ivory" | "sand";
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={`py-14 lg:py-20 ${tone === "sand" ? "bg-[#F2EEE7]" : ""}`}
    >
      <div className={container}>{children}</div>
    </section>
  );
}

export function SectionHeading({
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

export function ProviderCtaPanel({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <section className={`${container} pb-16 pt-6 lg:pb-24 lg:pt-10`}>
      <div className="rounded-3xl bg-[#1F2937] px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14">
        <div className="max-w-2xl">
          <span aria-hidden className="block h-0.5 w-10 bg-[#C8A96B]" />
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">{description}</p>
        </div>
        <Link
          href="/list-your-business"
          className="mt-8 inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#348f8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-0"
        >
          List Your Business <span aria-hidden className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
