import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/content/locations";
import { locationImages } from "@/content/locationImages";
import {
  Breadcrumb,
  container,
  heroBackground,
  linkCardClass,
} from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Event Rental Locations | Event Rental Finder",
  description:
    "Browse local event rental companies serving cities across Colorado. Explore rental categories, compare options, and connect with providers serving your area.",
};

export default function LocationsPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className={heroBackground}>
          <div className={`${container} pb-14 pt-8 lg:pb-20 lg:pt-10`}>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Locations" }]}
            />

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Event Rental Locations
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Find Event Rentals Near You
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Browse local event rental companies serving cities across
                Colorado. Explore rental categories, compare options, and
                connect with providers serving your area.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                {locations.length} Colorado markets and growing
              </p>
            </div>
          </div>
        </section>

        {/* Location grid */}
        <section
          aria-label="All event rental locations"
          className={`${container} py-14 lg:py-20`}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {locations.map((location) => {
              const image = locationImages[location.slug];

              return (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className={`${linkCardClass} flex h-full flex-col overflow-hidden`}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#E8E1D5] via-[#F2EEE7] to-[#F8F5EF]">
                      {image ? (
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="absolute inset-0 flex items-center justify-center text-[#2C7A78]/35"
                        >
                          <svg
                            width={56}
                            height={56}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
                            <circle cx="12" cy="10" r="2.2" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-serif text-xl font-medium text-[#1F2937]">
                        {location.city}, {location.stateCode}
                      </h2>
                      {location.county && (
                        <p className="mt-1 flex-1 text-[15px] text-[#1F2937]/65">
                          {location.county}
                        </p>
                      )}
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                        Explore Event Rentals
                        <span
                          aria-hidden
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Don't see your city? */}
        <section className={`${container} pb-16 lg:pb-24`}>
          <div className="rounded-3xl border border-[#E8E1D5] bg-white px-6 py-12 text-center sm:px-10 lg:py-16">
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
              Don’t See Your City?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/70">
              We’re expanding Event Rental Finder into new markets. Browse all
              rental categories or contact us about coverage in your area.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/categories"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                Browse Categories
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-7 text-base font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
