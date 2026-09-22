"use client";

import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-col">
      {/* Main image */}
      <div className="relative overflow-hidden border border-gold-500/10 bg-ink-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          className="aspect-square w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,transparent_40%,rgba(0,0,0,0.25)_100%)]" />
      </div>

      {/* Thumbs */}
      <div className="flex gap-3 sm:flex-none">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Show view ${i + 1}`}
            className={`w-20 flex-none overflow-hidden border transition-colors ${
              active === i
                ? "border-gold-400"
                : "border-gold-500/15 opacity-60 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}