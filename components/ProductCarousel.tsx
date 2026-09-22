"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";
import { IconArrow, IconChevron } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

interface ProductCarouselProps {
  eyebrow: string;
  title: string;
  ctaHref: string;
  ctaLabel: string;
  products: Product[];
}

export function ProductCarousel({
  eyebrow,
  title,
  ctaHref,
  ctaLabel,
  products,
}: ProductCarouselProps) {
  const track = useRef<HTMLDivElement>(null);

  const scrollByAmount = () => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden gap-2 sm:flex">
              <button
                aria-label="Scroll previous"
                onClick={() => track.current?.scrollBy({ left: -540, behavior: "smooth" })}
                className="flex h-11 w-11 items-center justify-center border border-gold-500/30 text-bone-200 transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <IconChevron className="h-4 w-4 rotate-180" />
              </button>
              <button
                aria-label="Scroll next"
                onClick={scrollByAmount}
                className="flex h-11 w-11 items-center justify-center border border-gold-500/30 text-bone-200 transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <IconChevron className="h-4 w-4" />
              </button>
            </div>
            <Link href={ctaHref} className="link-gold">
              {ctaLabel} <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Reveal>

      <div
        ref={track}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-8 sm:px-8"
      >
        {products.map((p, i) => (
          <div
            key={p.id}
            className="w-[260px] shrink-0 snap-start sm:w-[300px]"
          >
            <Reveal delay={Math.min(i, 4) * 60}>
              <ProductCard product={p} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}