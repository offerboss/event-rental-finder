"use client";

import { useState } from "react";

type Props = {
  categories: { name: string; slug: string }[];
};

const labelClass = "mb-1.5 block text-sm font-semibold text-[#1F2937]";

const fieldClass =
  "w-full rounded-lg border border-[#E8E1D5] bg-white px-4 text-base text-[#1F2937] placeholder:text-[#1F2937]/45 focus:border-[#2C7A78] focus:outline-none focus:ring-2 focus:ring-[#2C7A78]/20";

const inputClass = `${fieldClass} h-12`;
const textareaClass = `${fieldClass} py-3 leading-7`;

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-[#2C7A78]">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const legendClass =
  "mb-4 font-serif text-xl font-medium text-[#1F2937]";

export default function ListingForm({ categories }: Props) {
  const [notice, setNotice] = useState(false);

  return (
    <form
      // Submission handling is not connected yet. Intercept the submit so the
      // browser doesn't send entered details to the URL, and tell the user the
      // truth instead of pretending it worked.
      onSubmit={(event) => {
        event.preventDefault();
        setNotice(true);
      }}
      className="space-y-10"
    >
      <fieldset>
        <legend className={legendClass}>Your business</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="lb-business" label="Business Name" required>
            <input
              id="lb-business"
              name="businessName"
              type="text"
              required
              autoComplete="organization"
              className={inputClass}
            />
          </Field>
          <Field id="lb-contact" label="Contact Name" required>
            <input
              id="lb-contact"
              name="contactName"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
            />
          </Field>
          <Field id="lb-email" label="Email" required>
            <input
              id="lb-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </Field>
          <Field id="lb-phone" label="Phone">
            <input
              id="lb-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field id="lb-website" label="Website">
              <input
                id="lb-website"
                name="website"
                type="url"
                autoComplete="url"
                placeholder="https://"
                className={inputClass}
              />
            </Field>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className={legendClass}>Where you operate</legend>
        <div className="grid gap-5 sm:grid-cols-[1fr_9rem]">
          <Field id="lb-city" label="Primary City" required>
            <input
              id="lb-city"
              name="primaryCity"
              type="text"
              required
              autoComplete="address-level2"
              className={inputClass}
            />
          </Field>
          <Field id="lb-state" label="State">
            <input
              id="lb-state"
              name="state"
              type="text"
              autoComplete="address-level1"
              placeholder="CO"
              className={inputClass}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field id="lb-areas" label="Service Areas">
              <textarea
                id="lb-areas"
                name="serviceAreas"
                rows={3}
                placeholder="Cities, counties, or regions you serve"
                className={textareaClass}
              />
            </Field>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className={legendClass}>What you offer</legend>
        <p className="-mt-2 mb-4 text-[15px] text-[#1F2937]/65">
          Select every rental category your company offers.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <label
              key={category.slug}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-[#E8E1D5] bg-white px-4 py-2.5 text-[15px] font-medium text-[#1F2937] transition hover:border-[#C8A96B] has-[:checked]:border-[#2C7A78] has-[:checked]:bg-[#2C7A78]/5"
            >
              <input
                type="checkbox"
                name="categories"
                value={category.slug}
                className="h-5 w-5 shrink-0 accent-[#2C7A78]"
              />
              {category.name}
            </label>
          ))}
        </div>

        <div className="mt-6">
          <Field id="lb-description" label="Short Business Description">
            <textarea
              id="lb-description"
              name="description"
              rows={4}
              placeholder="A few sentences about your company, what you rent, and who you serve"
              className={textareaClass}
            />
          </Field>
        </div>
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-6 text-[#1F2937]">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#2C7A78]"
          />
          <span>
            I agree to be contacted by Event Rental Finder about my business
            listing.
            <span aria-hidden className="ml-0.5 text-[#2C7A78]">
              *
            </span>
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
          >
            Submit Business <span aria-hidden className="ml-2">→</span>
          </button>
          <p className="text-sm text-[#1F2937]/60">
            <span aria-hidden className="text-[#2C7A78]">*</span> Required
          </p>
        </div>

        <div role="status" aria-live="polite">
          {notice && (
            <p className="mt-5 rounded-xl border border-[#C8A96B]/60 bg-[#C8A96B]/10 px-5 py-4 text-[15px] leading-6 text-[#1F2937]">
              Online submissions aren’t available just yet, so your details
              have not been sent. Please check back soon.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
