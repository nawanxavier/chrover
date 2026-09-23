"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/format";
import { buildOrderMessage } from "@/lib/whatsapp";
import { site, waLink } from "@/lib/site";
import {
  IconArrow,
  IconClose,
  IconReturn,
  IconShield,
  IconTruck,
  IconWhatsApp,
} from "@/components/icons";

export default function CartPage() {
  const { items, subtotal, delivery, total, removeItem, setQty } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-start px-6 py-28">
        <p className="eyebrow">Your bag</p>
        <h1 className="display mt-3 text-4xl text-bone-50">Your bag is empty</h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-bone-500">
          Begin with a piece from the collection — delivered across Pakistan on
          Cash on Delivery.
        </p>
        <Link href="/shop" className="btn btn-gold mt-8">
          Start shopping <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const orderLink = waLink(buildOrderMessage(items, total, subtotal));
  const freeShipRemaining = Math.max(0, 5000 - subtotal);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8">
      <nav className="mb-8 flex items-center gap-2 text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
        <Link href="/" className="hover:text-gold-400">
          Home
        </Link>
        <span className="text-gold-700">/</span>
        <span className="text-bone-100">Your bag</span>
      </nav>

      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 className="display text-4xl text-bone-50 sm:text-5xl">
          Your bag ({items.length})
        </h1>
        <Link href="/shop" className="link-gold">
          Continue shopping <IconArrow className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Items */}
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex flex-col gap-5 border border-gold-500/15 bg-ink-900/60 p-5 sm:flex-row"
            >
              <Link
                href={`/shop/${item.slug}`}
                className="block h-40 w-full shrink-0 overflow-hidden border border-gold-500/10 sm:w-40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/shop/${item.slug}`}
                      className="display text-lg text-bone-100 hover:text-gold-400"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-xs tracking-[0.18em] text-bone-500 uppercase">
                      Strap · {item.strap}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-bone-500 transition-colors hover:text-gold-400"
                  >
                    <IconClose className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-3 text-sm text-bone-400">{formatPKR(item.price)}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <div className="flex items-center border border-gold-500/25">
                    <button
                      onClick={() => setQty(item.key, item.qty - 1)}
                      className="h-10 w-10 text-bone-300 hover:text-gold-400"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm text-bone-100">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => setQty(item.key, item.qty + 1)}
                      className="h-10 w-10 text-bone-300 hover:text-gold-400"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="display text-xl text-gold-400">
                    {formatPKR(item.price * item.qty)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit border border-gold-500/20 bg-ink-900/70 lg:sticky lg:top-28">
          <div className="hairline-b px-7 py-6">
            <p className="eyebrow">Order summary</p>
          </div>
          <div className="space-y-3 px-7 py-6 text-sm">
            {freeShipRemaining > 0 && (
              <p className="border border-gold-500/25 bg-gold-500/5 px-4 py-3 text-xs leading-5 text-bone-300">
                Add <span className="text-gold-400">{formatPKR(freeShipRemaining)}</span>{" "}
                more for complimentary delivery.
              </p>
            )}
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
            <div className="flex justify-between border-t border-gold-500/15 pt-4 text-lg font-semibold text-bone-100">
              <span>Total</span>
              <span>{formatPKR(total)}</span>
            </div>
            <p className="pt-1 text-[0.66rem] tracking-wider text-bone-500 uppercase">
              {site.codNote} · JazzCash · Bank transfer
            </p>
          </div>
          <div className="px-7 pb-7">
            <a href={orderLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
              <IconWhatsApp className="h-4 w-4" />
              Place order on WhatsApp
            </a>
            <p className="mt-3 text-xs leading-5 text-bone-500">
              Your order summary opens in WhatsApp, ready to send. We confirm,
              dispatch and you pay on delivery.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-[0.6rem] leading-4 tracking-wider text-bone-500 uppercase">
              <span className="flex items-center gap-1.5">
                <IconShield className="h-3.5 w-3.5 shrink-0 text-gold-500" /> 2-yr warranty
              </span>
              <span className="flex items-center gap-1.5">
                <IconTruck className="h-3.5 w-3.5 shrink-0 text-gold-500" /> Nationwide COD
              </span>
              <span className="flex items-center gap-1.5">
                <IconReturn className="h-3.5 w-3.5 shrink-0 text-gold-500" /> 7-day returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}