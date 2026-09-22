"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPKR, pctOff } from "@/lib/format";
import type { Product } from "@/lib/types";
import { IconBag } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const off = pctOff(product.price, product.compareAtPrice);

  return (
    <article className="group">
      <div className="relative overflow-hidden border border-gold-500/10 bg-ink-800">
        <Link href={`/shop/${product.slug}`} className="block">
          <div className="aspect-square overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
            />
            {product.images[1] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.images[1]}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(any-hover:none)]:hidden"
              />
            )}
          </div>
        </Link>

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
          {product.badge && (
            <span
              className={`px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.14em] uppercase ${
                product.flags.limited
                  ? "bg-gold-500 text-ink-950"
                  : "bg-ink-950/85 text-bone-100 backdrop-blur-sm"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[0.62rem] tracking-[0.3em] text-gold-600 uppercase">
          {product.collection}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="display mt-1 block text-lg text-bone-100 transition-colors hover:text-gold-400"
        >
          {product.name}
        </Link>
        <p className="mt-0.5 text-xs text-bone-500">{product.tagline}</p>

        <div className="mt-2.5 flex items-center justify-center gap-2.5">
          <span className="text-sm font-semibold text-gold-400">
            {formatPKR(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-bone-500 line-through">
              {formatPKR(product.compareAtPrice)}
            </span>
          )}
        </div>

        <button
          onClick={() => addItem(product, product.strap[0])}
          className="btn btn-ghost mt-4 w-full py-3! [@media(any-hover:none)]:bg-gold-500 [@media(any-hover:none)]:text-ink-950!"
        >
          <IconBag className="h-4 w-4" />
          Add to bag
        </button>
      </div>
      {off > 0 && (
        <p className="mt-1 text-center text-[0.62rem] tracking-widest text-gold-400 uppercase">
          Save {off}%
        </p>
      )}
    </article>
  );
}