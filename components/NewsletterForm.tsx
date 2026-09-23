"use client";

import { useState } from "react";
import { IconArrow } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex w-full max-w-md flex-row items-end gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      {done ? (
        <p className="hairline-b pb-3 text-sm text-bone-500">
          Thank you — you&apos;re subscribed.
        </p>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            className="hairline-b flex-1 bg-transparent pb-3 text-sm text-bone-100 transition-colors placeholder:text-bone-500 focus:outline-none"
          />
          <button
            type="submit"
            className="link-gold shrink-0 pb-3"
          >
            Subscribe <IconArrow className="h-3.5 w-3.5" />
          </button>
        </>
      )}
    </form>
  );
}