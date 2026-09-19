import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/content/categories";
import { categoryImages } from "@/content/categoryImages";

export const metadata: Metadata = {
  title: "Event Rental Categories | Event Rental Finder",
  description:
    "Browse event rental categories including tents, tables and chairs, wedding rentals, inflatables, photo booths, restroom trailers, staging, AV and more.",
};

export default function CategoriesPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1F2937]">
      <main>
        {/* Hero */}
        <section className="border-b border-[#E8E1D5] bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.14),transparent_60%)]">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:pb-20 lg:pt-10">
            <nav aria-label="Breadcrumb" className="text-sm text-[#1F2937]/60">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-[#2C7A78]">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-[#1F2937]">
                  Categories
                </li>
              </ol>
            </nav>

            <div className="mt-10 max-w-3xl lg:mt-14">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#2C7A78]">
                <span aria-hidden className="h-px w-8 bg-[#C8A96B]" />
                Event Rental Categories
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Everything You Need for an Unforgettable Event
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                Browse local event rental services and find the right providers
                for weddings, parties, corporate events, festivals, and more.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-white px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#C8A96B]" />
                {categories.length} rental categories and growing
              </p>
            </div>
          </div>
        </section>

        {/* Category grid */}
        <section
          aria-label="All event rental categories"
          className="mx-auto max-w-7xl px-6 py-14 lg:py-20"
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {categories.map((category) => {
              const image = categoryImages[category.slug];

              return (
                <li
                  key={category.slug}
                  // Center a lone card in the last row of the 3-column layout
                  className="lg:[&:last-child:nth-child(3n+1)]:col-start-2"
                >
                  <Link
                    href={`/categories/${category.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E1D5] bg-white shadow-[0_4px_20px_-8px_rgba(30,42,54,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-[#C8A96B] hover:shadow-[0_14px_36px_-12px_rgba(30,42,54,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#E8E1D5] to-[#F8F5EF]">
                      {image && (
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-serif text-xl font-medium text-[#1F2937]">
                        {category.name}
                      </h2>
                      <p className="mt-2 flex-1 text-[15px] leading-7 text-[#1F2937]/70">
                        {category.shortDescription}
                      </p>
                      <span className="mt-5 inline-flex items-start gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                        <span>Explore {category.name}</span>
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

        {/* Not sure what you need? */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:pb-24">
          <div className="rounded-3xl border border-[#E8E1D5] bg-white px-6 py-12 text-center sm:px-10 lg:py-16">
            <span aria-hidden className="mx-auto block h-0.5 w-10 bg-[#C8A96B]" />
            <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-[#1F2937] sm:text-4xl">
              Not Sure What You Need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-[#1F2937]/70">
              Start with your event type or location and explore the rental
              options available near you.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/locations"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                Browse Locations
              </Link>
              <Link
                href="/list-your-business"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-7 text-base font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                List Your Business
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
