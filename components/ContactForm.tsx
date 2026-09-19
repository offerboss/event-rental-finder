"use client";

import { useState } from "react";

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

export default function ContactForm() {
  const [notice, setNotice] = useState(false);

  return (
    <form
      // Message handling is not connected yet. Intercept the submit so the
      // browser doesn't send entered details to the URL, and tell the user the
      // truth instead of pretending it worked.
      onSubmit={(event) => {
        event.preventDefault();
        setNotice(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ct-name" label="Name" required>
          <input
            id="ct-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field id="ct-email" label="Email" required>
          <input
            id="ct-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="ct-company" label="Company (optional)">
        <input
          id="ct-company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </Field>

      <Field id="ct-subject" label="Subject" required>
        <input
          id="ct-subject"
          name="subject"
          type="text"
          required
          className={inputClass}
        />
      </Field>

      <Field id="ct-message" label="Message" required>
        <textarea
          id="ct-message"
          name="message"
          rows={6}
          required
          className={textareaClass}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2C7A78] px-8 text-base font-semibold text-white transition hover:bg-[#256866] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7A78]"
        >
          Send Message <span aria-hidden className="ml-2">→</span>
        </button>
        <p className="text-sm text-[#1F2937]/60">
          <span aria-hidden className="text-[#2C7A78]">*</span> Required
        </p>
      </div>

      <div role="status" aria-live="polite">
        {notice && (
          <p className="rounded-xl border border-[#C8A96B]/60 bg-[#C8A96B]/10 px-5 py-4 text-[15px] leading-6 text-[#1F2937]">
            Online messaging isn’t connected yet, so your message has not been
            sent. Please check back soon.
          </p>
        )}
      </div>
    </form>
  );
}
