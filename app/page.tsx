import Image from "next/image";
import Link from "next/link";
import { categories } from "@/content/categories";

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

const trustPoints = [
  {
    label: "Local Providers",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    label: "Save Time",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    label: "Get the Best Rates",
    icon: (
      <svg {...iconProps}>
        <path d="M3.5 12.5V4.5h8l9 9-8 8-9-9Z" />
        <circle cx="8" cy="9" r="1.2" />
      </svg>
    ),
  },
];

const featuredCategories = [
  {
    name: "Wedding Rentals",
    href: "/categories/wedding-rentals",
    image: "/images/wedding-rentals.png",
    description:
      "Elegant rentals for ceremonies, receptions, and special celebrations.",
  },
  {
    name: "Party Rentals",
    href: "/categories/party-rentals",
    image: "/images/party-rentals.png",
    description:
      "Flexible rental options for birthdays, celebrations, and private events.",
  },
  {
    name: "Tent Rentals",
    href: "/categories/tent-rentals",
    image: "/images/tent-rental.png",
    description: "Shelter and style for outdoor parties, weddings, and events.",
  },
  {
    name: "Inflatable Rentals",
    href: "/categories/inflatable-rentals",
    image: "/images/inflatable-rentals.png",
    description:
      "Fun attractions for kids’ parties, school events, and community gatherings.",
  },
  {
    name: "Photo Booth Rentals",
    href: "/categories/photo-booth-rentals",
    image: "/images/photo-booth-rentals.png",
    description:
      "Interactive photo experiences that help guests capture the moment.",
  },
  {
    name: "Restroom Trailer Rentals",
    href: "/categories/restroom-trailer-rentals",
    image: "/images/restroom-trailer-rentals.png",
    description:
      "Comfortable portable restrooms for weddings, festivals, and upscale events.",
  },
];

const featuredLocations = [
  {
    name: "Denver",
    href: "/locations/denver-co",
    image: "/images/Denver.png",
  },
  {
    name: "Colorado Springs",
    href: "/locations/colorado-springs-co",
    image: "/images/Colorado Springs.png",
  },
  {
    name: "Fort Collins",
    href: "/locations/fort-collins-co",
    image: "/images/Fort Collins.png",
  },
  {
    name: "Boulder",
    href: "/locations/boulder-co",
    image: "/images/boulder.png",
  },
  {
    // Regional concept with no dedicated page yet; link to the locations hub.
    name: "Western Slope",
    href: "/locations",
    image: "/images/Western Slope.png",
  },
  {
    // Regional concept with no dedicated page yet; link to the locations hub.
    name: "Ski Towns",
    href: "/locations",
    image: "/images/Ski Towns.png",
  },
];

const howItWorksSteps = [
  {
    title: "Search",
    description: "Choose what you need and enter your location.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
  },
  {
    title: "Compare",
    description: "Browse local providers, rental options, and availability.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <rect x="5.5" y="5" width="13" height="16" rx="2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Connect",
    description: "Contact providers directly and request a quote.",
    icon: (
      <svg {...iconProps} width={28} height={28}>
        <path d="M21 11.5a8 8 0 0 1-11.7 7.1L4 20l1.3-4.4A8 8 0 1 1 21 11.5Z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth={2.4} />
      </svg>
    ),
  },
];

const businessBenefits = [
  "Reach local customers",
  "Showcase your services",
  "Increase online visibility",
  "Generate more inquiries",
];

const fieldClass =
  "h-12 w-full rounded-lg border border-[#E8E1D5] bg-white px-4 text-base text-[#1E2A36] placeholder:text-[#1E2A36]/50 focus:border-[#2C7A78] focus:outline-none focus:ring-2 focus:ring-[#2C7A78]/20";

export default function Home() {
  return (
    <div className="flex-1 overflow-x-hidden bg-[#F8F5EF] text-[#1E2A36]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-10 lg:min-h-[620px] lg:pb-14 lg:pt-16">
          {/* Copy */}
          <div className="relative z-10 max-w-xl">
            <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-[#1E2A36] sm:text-6xl lg:text-[4.25rem]">
              Find Event Rentals
              <br />
              <span className="text-[#2C7A78]">Near You</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-8 text-[#1E2A36]/75">
              Compare local providers for tents, tables &amp; chairs, photo booths,
              dance floors, restroom trailers, inflatables, lighting, and more.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point.label}
                  className="flex items-center gap-2.5 text-[15px] font-medium text-[#1E2A36]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A96B]/60 bg-white text-[#2C7A78]">
                    {point.icon}
                  </span>
                  {point.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Image: below the copy on mobile, full-bleed right side on desktop */}
          <div className="relative mt-8 h-64 overflow-hidden rounded-2xl sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[62%] lg:rounded-none">
            <Image
              src="/images/event-rental-finder-hero-event-rentals.png"
              alt="Sunset event with a white tent, string lights, lounge seating and mountains in the background"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-[70%_center]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#F8F5EF] via-[#F8F5EF]/50 via-[18%] to-transparent to-[45%] lg:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-t from-[#F8F5EF]/70 to-transparent lg:block"
            />
          </div>

          {/* Finder */}
          <div
            role="search"
            aria-label="Find event rentals"
            className="relative z-10 mt-8 w-full rounded-2xl border border-[#E8E1D5] bg-white p-4 shadow-[0_12px_40px_-12px_rgba(30,42,54,0.18)] sm:p-5 lg:mt-auto lg:max-w-3xl"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1">
                <label
                  htmlFor="finder-category"
                  className="mb-1.5 block text-sm font-semibold text-[#1E2A36]"
                >
                  What do you need?
                </label>
                <select
                  id="finder-category"
                  defaultValue=""
                  className={`${fieldClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%231E2A36'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] pr-10`}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="finder-location"
                  className="mb-1.5 block text-sm font-semibold text-[#1E2A36]"
                >
                  City or ZIP
                </label>
                <input
                  id="finder-location"
                  type="text"
                  placeholder="Enter your city"
                  autoComplete="off"
                  className={fieldClass}
                />
              </div>

              <button
                type="button"
                className="h-12 w-full shrink-0 rounded-lg bg-[#2C7A78] px-7 text-base font-semibold text-white transition hover:bg-[#256866] md:w-auto"
              >
                Find Rentals <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:pb-24 lg:pt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1E2A36] sm:text-4xl">
              Popular Event Rental Categories
            </h2>
            <p className="mt-2 text-lg text-[#1E2A36]/70">
              Everything you need for an unforgettable event.
            </p>
          </div>
          <Link
            href="/categories"
            className="shrink-0 text-[15px] font-semibold text-[#2C7A78] transition hover:text-[#256866]"
          >
            Browse All Categories <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E1D5] bg-white shadow-[0_4px_20px_-8px_rgba(30,42,54,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-[#C8A96B] hover:shadow-[0_14px_36px_-12px_rgba(30,42,54,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-medium text-[#1E2A36]">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-[#1E2A36]/70">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
                  Learn More
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured locations */}
      <section className="bg-[#F2EEE7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1E2A36] sm:text-4xl">
                Featured Colorado Locations
              </h2>
              <p className="mt-2 text-lg text-[#1E2A36]/70">
                Explore event rental companies across some of Colorado’s most
                popular markets and event destinations.
              </p>
            </div>
            <Link
              href="/locations"
              className="shrink-0 text-[15px] font-semibold text-[#2C7A78] transition hover:text-[#256866]"
            >
              View All Locations <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            {featuredLocations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="group relative block aspect-[3/2] overflow-hidden rounded-3xl bg-[#1E2A36] lg:aspect-[16/9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
              >
                <Image
                  src={location.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#1E2A36]/85 via-[#1E2A36]/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <span
                      aria-hidden
                      className="mb-3 block h-0.5 w-8 bg-[#C8A96B]"
                    />
                    <h3 className="font-serif text-2xl font-medium text-white">
                      {location.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Find local event rental providers
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-lg text-white backdrop-blur-sm transition duration-200 group-hover:border-white group-hover:bg-white group-hover:text-[#2C7A78]"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1E2A36] sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg text-[#1E2A36]/70">
            Finding the right event rentals is simple.
          </p>
        </div>

        <ol className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#E8E1D5]">
          {howItWorksSteps.map((step, index) => (
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
                  className="absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96B] font-serif text-lg font-semibold text-[#1E2A36] ring-4 ring-[#F8F5EF]"
                >
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-[#1E2A36]">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-[15px] leading-7 text-[#1E2A36]/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 flex items-center justify-center gap-3 font-serif text-lg italic text-[#2C7A78] sm:gap-4 sm:text-xl lg:mt-16">
          <span aria-hidden className="h-px w-6 shrink-0 bg-[#C8A96B] sm:w-8" />
          <span>Less stress. More celebrating.</span>
          <span aria-hidden className="h-px w-6 shrink-0 bg-[#C8A96B] sm:w-8" />
        </p>
      </section>

      {/* List your business CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:pb-24">
        <div className="rounded-3xl bg-[#1F2937] px-6 py-12 sm:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8A96B]">
              For Event Rental Companies
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Grow Your Event Rental Business
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Event rental companies can get in front of customers who are
              actively searching for rentals in their area. List your business
              and start connecting with people planning their next event.
            </p>
          </div>

          <div className="mt-10 lg:mt-0">
            <ul className="grid gap-3 sm:grid-cols-2">
              {businessBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-[15px] font-medium text-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8A96B]/20 text-[#C8A96B]">
                    <svg {...iconProps} width={16} height={16} strokeWidth={2.2}>
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                href="/list-your-business"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#348f8c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                List Your Business <span aria-hidden className="ml-2">→</span>
              </Link>
              <p className="text-sm text-white/60">
                Join our growing network of event rental providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
