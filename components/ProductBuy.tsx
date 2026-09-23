"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPKR, pctOff } from "@/lib/format";
import { buildOrderMessage } from "@/lib/whatsapp";
import { waLink } from "@/lib/site";
import type { Product } from "@/lib/types";
import { IconBag, IconShield, IconWhatsApp } from "@/components/icons";

export function ProductBuy({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [strap, setStrap] = useState(product.strap[0]);
  const [qty, setQty] = useState(1);

  const off = pctOff(product.price, product.compareAtPrice);

  const orderMsg = buildOrderMessage(
    [
      {
        key: `${product.id}::${strap}`,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        image: product.images[0],
        strap,
        price: product.price,
        qty,
      },
    ],
    product.price * qty,
    product.price * qty
  );

  return (
    <div>
      {/* price block */}
      <div className="flex items-center gap-3">
        <span className="display text-3xl text-gold-400">
          {formatPKR(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-bone-500 line-through">
            {formatPKR(product.compareAtPrice)}
          </span>
        )}
        {off > 0 && (
          <span className="bg-gold-500 px-2 py-1 text-[0.62rem] font-bold tracking-widest text-ink-950 uppercase">
            {off}% off
          </span>
        )}
      </div>
      <p className="mt-1.5 text-xs tracking-wider text-bone-500 uppercase">
        Inclusive of all taxes · PKR
      </p>

      {/* strap selection */}
      <div className="mt-8">
        <p className="eyebrow mb-3">Strap</p>
        <div className="flex flex-wrap gap-2.5">
          {product.strap.map((s) => (
            <button
              key={s}
              onClick={() => setStrap(s)}
              className={`border px-4 py-2.5 text-xs tracking-[0.12em] uppercase transition-colors ${
                strap === s
                  ? "border-gold-400 bg-gold-500/10 text-gold-400"
                  : "border-gold-500/25 text-bone-300 hover:border-gold-500"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* quantity + actions */}
      <div className="mt-8 flex items-stretch gap-3">
        <div className="flex items-center border border-gold-500/25">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="h-full w-10 text-bone-300 hover:text-gold-400"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center font-medium text-bone-100">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="h-full w-10 text-bone-300 hover:text-gold-400"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addItem(product, strap, qty)}
          className="btn btn-gold flex-1"
        >
          <IconBag className="h-4 w-4" /> Add to bag
        </button>
      </div>

      <a
        href={waLink(orderMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-3 w-full border border-[#25D366]/40 text-[var(--color-wa)] hover:bg-[#25D366]/10"
      >
        <IconWhatsApp className="h-4 w-4" /> Buy instantly on WhatsApp
      </a>

      {/* reassurance */}
      <div className="mt-8 space-y-3 border-t border-gold-500/15 pt-6">
        {[
          "Cash on Delivery available across Pakistan",
          "Complimentary delivery on orders over Rs. 5,000",
          "2-year international movement warranty",
          "7-day easy returns on unworn pieces",
        ].map((line) => (
          <p key={line} className="flex items-center gap-3 text-sm text-bone-400">
            <IconShield className="h-4 w-4 shrink-0 text-gold-500" />
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}