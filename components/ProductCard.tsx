"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPKR, pctOff } from "@/lib/format";
import type { Product } from "@/lib/types";
import { IconBag } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const off = pctOff(product.price, product.compareAtPrice);
  const showSale = !!product.badge || off > 0;

  return (
    <article className="group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden border border-gold-500/10 bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className={`h-full w-full object-cover ${
              product.soldOut ? "opacity-40 saturate-0" : ""
            }`}
          />
          {showSale && !product.soldOut && (
            <span className="absolute top-3 left-3 bg-gold-500 px-2 py-1 text-[0.6rem] font-bold tracking-[0.18em] text-ink-950 uppercase">
              Sale
            </span>
          )}
          {product.soldOut && (
            <span className="absolute top-3 left-3 bg-bone-900/90 px-2 py-1 text-[0.6rem] font-bold tracking-[0.18em] text-bone-100 uppercase">
              Sold out
            </span>
          )}
        </div>
        <div className="pt-4">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium text-bone-100">{product.name}</p>
            <p className="text-sm text-bone-100">{formatPKR(product.price)}</p>
          </div>
          <div className="mt-1 flex items-center justify-between gap-3">
            <p className="text-xs text-bone-500">{product.tagline}</p>
            {product.compareAtPrice && (
              <p className="text-xs text-bone-500 line-through">
                {formatPKR(product.compareAtPrice)}
              </p>
            )}
          </div>
          <div className="mt-1 flex items-center justify-between gap-3">
            <p className="text-[0.62rem] tracking-[0.15em] text-bone-500 uppercase">
              {product.reviews > 0
                ? `${product.reviews} ${product.reviews === 1 ? "review" : "reviews"}`
                : "No reviews"}
            </p>
            {off > 0 && (
              <p className="text-[0.62rem] tracking-[0.18em] text-bone-500 uppercase">
                Save {off}%
              </p>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={() => addItem(product, product.strap[0])}
        disabled={product.soldOut}
        aria-label={`Add ${product.name} to bag`}
        className={`btn btn-ghost mt-4 w-full py-3 ${
          product.soldOut ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <IconBag className="h-4 w-4" />
        {product.soldOut ? "Sold out" : "Add to bag"}
      </button>
    </article>
  );
}