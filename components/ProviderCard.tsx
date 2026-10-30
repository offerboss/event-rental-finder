import Link from "next/link";
import { categories } from "@/content/categories";
import { providerPlaceLabel, specialtiesByTier } from "@/lib/providers";
import type { Provider } from "@/types";
import { linkCardClass } from "@/components/PageBlocks";

const categoryNameBySlug = new Map(categories.map((c) => [c.slug, c.name]));

export default function ProviderCard({ provider }: { provider: Provider }) {
  const { specializesIn, serves } = specialtiesByTier(provider);
  const place = providerPlaceLabel(provider);

  return (
    <Link
      href={`/providers/${provider.slug}`}
      className={`${linkCardClass} flex h-full flex-col p-6`}
    >
      <h3 className="font-serif text-xl font-medium text-[#1F2937]">
        {provider.name}
      </h3>
      {place && <p className="mt-1 text-[15px] text-[#1F2937]/60">{place}</p>}

      {provider.categories.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {provider.categories.slice(0, 3).map((slug) => (
            <li
              key={slug}
              className="rounded-full border border-[#E8E1D5] bg-[#F8F5EF] px-2.5 py-0.5 text-xs font-medium text-[#1F2937]"
            >
              {categoryNameBySlug.get(slug) ?? slug}
            </li>
          ))}
          {provider.categories.length > 3 && (
            <li className="px-1 py-0.5 text-xs font-medium text-[#1F2937]/50">
              +{provider.categories.length - 3} more
            </li>
          )}
        </ul>
      )}

      <div className="mt-3 flex-1 space-y-1.5">
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

      <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2C7A78]">
        View Provider
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

