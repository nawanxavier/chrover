"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";
import { IconArrow } from "@/components/icons";

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
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-2 text-3xl text-bone-50">{title}</h2>
        </div>
        <Link href={ctaHref} className="link-gold">
          {ctaLabel} <IconArrow className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x gap-6 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8">
        {products.map((p) => (
          <div key={p.id} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}