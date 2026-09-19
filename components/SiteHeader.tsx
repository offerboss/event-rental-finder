import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Locations", href: "/locations" },
  { label: "Categories", href: "/categories" },
  { label: "Providers", href: "/providers" },
  { label: "Resources", href: "/resources" },
  { label: "List Your Business", href: "/list-your-business" },
];

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function SiteHeader() {
  return (
    <header className="relative border-b border-[#E8E1D5]/70 bg-[#F8F5EF] text-[#1E2A36]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="shrink-0" aria-label="Event Rental Finder home">
          <Image
            src="/images/event-rental-finder-logo-horizontal.png"
            alt="Event Rental Finder"
            width={2172}
            height={724}
            className="h-auto w-[210px] xl:w-[240px]"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#1E2A36] transition hover:text-[#2C7A78]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#1E2A36] transition hover:bg-[#E8E1D5]/60"
          >
            <svg {...iconProps} width={20} height={20}>
              <circle cx="11" cy="11" r="6.5" />
              <path d="m20 20-4.2-4.2" />
            </svg>
          </button>
          <Link
            href="/sign-in"
            className="rounded-lg border border-[#E8E1D5] bg-white px-5 py-2.5 text-[15px] font-medium text-[#1E2A36] transition hover:border-[#2C7A78]"
          >
            Sign In
          </Link>
          <Link
            href="/list-your-business"
            className="rounded-lg bg-[#2C7A78] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#256866]"
          >
            List Your Business
          </Link>
        </div>

        {/* Mobile / tablet menu (no JS needed) */}
        <details className="group xl:hidden">
          <summary
            aria-label="Toggle menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-[#E8E1D5] bg-white text-[#1E2A36] [&::-webkit-details-marker]:hidden"
          >
            <svg {...iconProps} width={20} height={20} className="group-open:hidden">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg {...iconProps} width={20} height={20} className="hidden group-open:block">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </summary>
          <div className="absolute inset-x-0 top-full z-20 border-b border-[#E8E1D5] bg-white px-6 pb-6 pt-2 shadow-lg">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-[#E8E1D5]/70 py-3 text-base font-medium text-[#1E2A36]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex gap-3">
              <Link
                href="/sign-in"
                className="flex-1 rounded-lg border border-[#E8E1D5] bg-white px-4 py-2.5 text-center text-[15px] font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/list-your-business"
                className="flex-1 rounded-lg bg-[#2C7A78] px-4 py-2.5 text-center text-[15px] font-semibold text-white"
              >
                List Your Business
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
