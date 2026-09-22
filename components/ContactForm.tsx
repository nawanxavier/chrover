"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const build = () => {
    const lines = [
      "*New Enquiry — AURELIA Watches*",
      "",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      "",
      message,
    ];
    return lines.join("\n");
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
      action={undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="03xx xxxxxxx"
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Email (optional)">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputCls}
        />
      </Field>
      <Field label="Message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="How can we help? A question on a collection, sizing, delivery…"
          className={`${inputCls} resize-none`}
        />
      </Field>

      <a
        href={waLink(build())}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-gold w-full sm:w-auto"
        aria-disabled={!name || !phone || !message}
      >
        <IconWhatsApp className="h-4 w-4" />
        Send via WhatsApp
      </a>
      <p className="text-xs leading-5 text-bone-500">
        Your message opens a WhatsApp chat with our concierge — no forms lost,
        no waiting.
      </p>
    </form>
  );
}

const inputCls =
  "w-full border border-gold-500/25 bg-ink-900 px-4 py-3.5 text-sm text-bone-100 placeholder:text-bone-600 focus:border-gold-400 focus:outline-none transition-colors";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.66rem] font-semibold tracking-[0.2em] text-bone-300 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}