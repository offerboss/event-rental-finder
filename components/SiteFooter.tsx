import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Locations", href: "/locations" },
      { label: "Categories", href: "/categories" },
      { label: "Providers", href: "/providers" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "For Businesses",
    links: [
      { label: "List Your Business", href: "/list-your-business" },
      { label: "Provider Directory", href: "/providers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E8E1D5] bg-[#F8F5EF] text-[#1E2A36]">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Event Rental Finder home" className="inline-block">
              <Image
                src="/images/event-rental-finder-logo-horizontal.png"
                alt="Event Rental Finder"
                width={2172}
                height={724}
                className="h-auto w-[210px]"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#1E2A36]/70">
              Find trusted local event rental companies for weddings, parties,
              corporate events, festivals, and more.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E2A36]">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#1E2A36]/70 transition hover:text-[#2C7A78]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#E8E1D5] pt-6 text-sm text-[#1E2A36]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Event Rental Finder. All rights reserved.</p>
          <p className="font-serif text-base italic text-[#2C7A78]">
            Plan local. Celebrate better.
          </p>
        </div>
      </div>
    </footer>
  );
}
