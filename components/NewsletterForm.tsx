"use client";

import { useState } from "react";
import { IconArrow } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex w-full max-w-md items-stretch gap-0"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      {done ? (
        <p className="h-12 flex-1 flex items-center border border-gold-500/40 bg-ink-900 px-4 text-sm text-gold-400">
          Welcome to the maison. Watch your inbox.
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
            className="h-12 flex-1 border border-gold-500/30 bg-ink-900 px-4 text-sm text-bone-100 placeholder:text-bone-500 focus:border-gold-400 focus:outline-none"
          />
          <button type="submit" className="btn btn-gold h-12">
            Subscribe <IconArrow className="h-3.5 w-3.5" />
          </button>
        </>
      )}
    </form>
  );
}