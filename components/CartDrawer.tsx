"use client";

import Link from "next/link";
import { useRef } from "react";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/format";
import { buildOrderMessage } from "@/lib/whatsapp";
import { site, waLink } from "@/lib/site";
import { IconArrow, IconBag, IconClose, IconReturn, IconShield, IconTruck, IconWhatsApp } from "@/components/icons";

export function CartDrawer() {
  const { items, subtotal, delivery, total, isOpen, closeCart, removeItem, setQty } = useCart();
  const overlayRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const orderLink = waLink(
    buildOrderMessage(
      items,
      total,
      subtotal
    )
  );

  const freeShipRemaining = Math.max(0, 5000 - subtotal);

  return (
    <div className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ink-900 shadow-2xl">
        {/* header */}
        <div className="hairline-b flex items-center justify-between px-6 py-5">
          <h2 className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.28em] text-bone-100 uppercase">
            <IconBag className="h-5 w-5 text-gold-400" />
            Your bag
            <span className="text-bone-500">({items.length})</span>
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-bone-300 transition-colors hover:text-gold-400"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col justify-center gap-5 px-8">
            <p className="display text-2xl text-bone-100">Your bag is empty</p>
            <p className="max-w-xs text-sm leading-7 text-bone-500">
              Begin with a piece from the collection.
            </p>
            <Link href="/shop" onClick={closeCart} className="btn btn-gold mt-2 w-fit">
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            {freeShipRemaining > 0 && (
              <div className="hairline-b bg-ink-800/60 px-6 py-3 text-center text-xs tracking-wider text-bone-400">
                Add {formatPKR(freeShipRemaining)} more for{" "}
                <span className="text-gold-400">free delivery</span>
              </div>
            )}
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div key={item.key} className="hairline-b flex gap-4 pb-5">
                  <Link
                    href={`/shop/${item.slug}`}
                    onClick={closeCart}
                    className="block h-24 w-24 shrink-0 overflow-hidden border border-gold-500/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/shop/${item.slug}`}
                        onClick={closeCart}
                        className="text-sm font-medium text-bone-100 hover:text-gold-400"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-bone-500 transition-colors hover:text-gold-400"
                      >
                        <IconClose className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs tracking-wider text-bone-500 uppercase">
                      {item.strap}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-gold-500/25">
                        <button
                          onClick={() => setQty(item.key, item.qty - 1)}
                          className="h-8 w-8 text-bone-300 hover:text-gold-400"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm text-bone-100">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => setQty(item.key, item.qty + 1)}
                          className="h-8 w-8 text-bone-300 hover:text-gold-400"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-gold-400">
                        {formatPKR(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* footer */}
            <div className="hairline-t space-y-4 px-6 py-5">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-bone-400">
                  <span>Subtotal</span>
                  <span>{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-bone-400">
                  <span>Delivery</span>
                  <span className={delivery === 0 ? "text-gold-400" : ""}>
                    {delivery === 0 ? "Complimentary" : formatPKR(delivery)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gold-500/15 pt-2 text-base font-semibold text-bone-100">
                  <span>Total</span>
                  <span>{formatPKR(total)}</span>
                </div>
                <p className="pt-1 text-[0.68rem] tracking-wider text-bone-500 uppercase">
                  {site.codNote}
                </p>
              </div>

              <a href={orderLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
                <IconWhatsApp className="h-4 w-4" />
                Order via WhatsApp
              </a>

              <div className="grid grid-cols-3 gap-2 text-[0.62rem] leading-4 tracking-wider text-bone-500 uppercase">
                <span className="flex items-center gap-1.5">
                  <IconShield className="h-3.5 w-3.5 shrink-0 text-gold-500" /> Inspected
                </span>
                <span className="flex items-center gap-1.5">
                  <IconTruck className="h-3.5 w-3.5 shrink-0 text-gold-500" /> Nationwide COD
                </span>
                <span className="flex items-center gap-1.5">
                  <IconReturn className="h-3.5 w-3.5 shrink-0 text-gold-500" /> 7-day returns
                </span>
              </div>

              <Link
                href="/shop"
                onClick={closeCart}
                className="link-gold justify-center w-full py-1"
              >
                Continue shopping <IconArrow className="h-3.5 w-3.5" />
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}