import Link from "next/link";
import { categories } from "@/content/categories";
import { locations } from "@/content/locations";
import { cardClass } from "@/components/PageBlocks";
import { providerPlaceLabel, specialtiesByTier } from "@/lib/providers";
import type { Provider } from "@/types";

const categoryNameBySlug = new Map(categories.map((c) => [c.slug, c.name]));
const locationNameBySlug = new Map(locations.map((l) => [l.slug, `${l.city}, ${l.stateCode}`]));

// A denser, more detailed listing than ProviderCard — used in the
// Providers-by-Region accordion, where each row needs to stand on its own
// without a visitor first picking a filter.
export default function ProviderRow({ provider }: { provider: Provider }) {
  const { specializesIn, serves } = specialtiesByTier(provider);
  const place = providerPlaceLabel(provider);
  const serviceAreaNames = provider.serviceAreas
    .map((slug) => locationNameBySlug.get(slug))
    .filter((n): n is string => Boolean(n));
  const shownAreas = serviceAreaNames.slice(0, 4);
  const moreAreas = serviceAreaNames.length - shownAreas.length;

  return (
    <div className={`${cardClass} p-5 sm:p-6`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {provider.featured && (
            <span className="mb-1.5 inline-flex items-center rounded-full bg-[#C8A96B]/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#8a6d2f]">
              Featured Provider
            </span>
          )}
          <h3 className="font-serif text-xl font-medium text-[#1F2937]">
            <Link href={`/providers/${provider.slug}`} className="hover:text-[#2C7A78]">
              {provider.name}
            </Link>
          </h3>
          {place && <p className="mt-0.5 text-[15px] text-[#1F2937]/60">{place}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {provider.website && (
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#2C7A78] px-4 text-sm font-semibold text-white transition hover:bg-[#256866]"
            >
              Website <span aria-hidden className="ml-1.5">↗</span>
            </a>
          )}
          {provider.phone && (
            <a
              href={`tel:${provider.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[#E8E1D5] bg-white px-4 text-sm font-semibold text-[#1F2937] transition hover:border-[#2C7A78] hover:text-[#2C7A78]"
            >
              {provider.phone}
            </a>
          )}
        </div>
      </div>

      {provider.categories.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {provider.categories.map((slug) => (
            <li
              key={slug}
              className="rounded-full border border-[#E8E1D5] bg-[#F8F5EF] px-2.5 py-0.5 text-xs font-medium text-[#1F2937]"
            >
              {categoryNameBySlug.get(slug) ?? slug}
            </li>
          ))}
        </ul>
      )}

      {(specializesIn.length > 0 || serves.length > 0) && (
        <div className="mt-2.5 space-y-1">
          {specializesIn.length > 0 && (
            <p className="text-[13px] leading-5 text-[#2C7A78]">
              <span className="font-semibold">Specializes in:</span>{" "}
              {specializesIn.map((s) => s.label).join(", ")}
            </p>
          )}
          {serves.length > 0 && (
            <p className="text-[13px] leading-5 text-[#1F2937]/55">
              Also serves: {serves.map((s) => s.label).join(", ")}
            </p>
          )}
        </div>
      )}

      {shownAreas.length > 0 && (
        <p className="mt-2.5 text-[13px] leading-5 text-[#1F2937]/55">
          Service area: {shownAreas.join(", ")}
          {moreAreas > 0 && ` +${moreAreas} more`}
        </p>
      )}

      <Link
        href={`/providers/${provider.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78] hover:text-[#256866]"
      >
        View Provider <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
