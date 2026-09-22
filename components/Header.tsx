"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/products";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cart";
import {
  IconBag,
  IconChevron,
  IconClose,
  IconMenu,
  IconUser,
  IconWhatsApp,
} from "@/components/icons";

const MESSAGES = [
  "Complimentary shipping on orders over Rs. 5,000",
  "Cash on Delivery available across Pakistan",
  `Customer care · Mon – Sat, 9am – 9pm`,
];

function AnnouncementBar() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="hairline-b bg-ink-900">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center px-4">
        <div className="relative h-full w-full max-w-3xl overflow-hidden text-center">
          {MESSAGES.map((m, i) => (
            <p
              key={m}
              className={`absolute inset-0 flex items-center justify-center text-[0.68rem] tracking-[0.18em] uppercase text-bone-400 transition-all duration-700 ${
                i === idx
                  ? "translate-y-0 opacity-100"
                  : i < idx
                    ? "-translate-y-4 opacity-0"
                    : "translate-y-4 opacity-0"
              }`}
            >
              {m}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop", dropdown: true },
  { label: "Our Story", href: "/about" },
  { label: "Care & Warranty", href: "/warranty" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AnnouncementBar />
      <header className="hairline-b sticky top-0 z-40 bg-ink-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
          {/* Left: mobile menu + desktop nav */}
          <div className="flex flex-1 items-center gap-6">
            <button
              className="-ml-1 text-bone-100 transition-colors hover:text-gold-400 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu className="h-6 w-6" />
            </button>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="group relative">
                    <button className="flex items-center gap-1.5 py-1 text-[0.7rem] font-semibold tracking-[0.28em] text-bone-200 uppercase transition-colors hover:text-gold-400">
                      {link.label}
                      <IconChevron className="h-3 w-3 -rotate-90 transition-transform duration-300 group-hover:rotate-0" />
                    </button>

                    {/* Mega menu */}
                    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="hairline-x w-[680px] border border-gold-500/15 bg-ink-900 p-6 shadow-2xl shadow-black/60">
                        <div className="mb-5 flex items-center justify-between">
                          <p className="eyebrow">Browse by collection</p>
                          <Link
                            href="/shop"
                            className="link-gold text-[0.62rem]"
                          >
                            Shop all
                          </Link>
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                          {CATEGORIES.map((c) => (
                            <Link
                              key={c.id}
                              href={`/shop?category=${c.id}`}
                              className="group/c group block"
                            >
                              <div className="mb-3 aspect-square overflow-hidden border border-gold-500/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={c.image}
                                  alt={c.label}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover/c:scale-110"
                                />
                              </div>
                              <p className="text-center text-[0.68rem] font-semibold tracking-[0.22em] text-bone-200 uppercase group-hover/c:text-gold-400">
                                {c.label}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-1 text-[0.7rem] font-semibold tracking-[0.28em] uppercase transition-colors hover:text-gold-400 ${
                      pathname === link.href ? "text-gold-400" : "text-bone-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Center: wordmark */}
          <Link href="/" className="group flex items-baseline gap-2">
            <span className="display text-2xl font-semibold tracking-[0.32em] text-bone-50 sm:text-[1.7rem]">
              AURELIA
            </span>
            <span className="hidden h-px w-8 bg-gold-500/60 sm:block" />
            <span className="hidden text-[0.55rem] tracking-[0.3em] text-gold-500 uppercase sm:block">
              Watches
            </span>
          </Link>

          {/* Right: actions */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
              className="hidden text-bone-200 transition-colors hover:text-gold-400 xl:block"
            >
              <IconWhatsApp className="h-5 w-5" />
            </a>
            <Link
              href="/contact"
              aria-label="Account"
              className="hidden text-bone-200 transition-colors hover:text-gold-400 xl:block"
            >
              <IconUser className="h-5 w-5" />
            </Link>
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-bone-200 transition-colors hover:text-gold-400"
            >
              <IconBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[0.6rem] font-bold text-ink-950">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-ink-900 shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="hairline-b flex items-center justify-between px-6 py-5">
            <span className="display text-lg font-semibold tracking-[0.32em] text-bone-50">
              AURELIA
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-bone-200 hover:text-gold-400"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <p className="eyebrow mb-4">Shop</p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm tracking-[0.18em] text-bone-100 uppercase hover:text-gold-400"
                >
                  Shop All
                </Link>
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/shop?category=${c.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm tracking-[0.18em] text-bone-100 uppercase hover:text-gold-400"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 mb-4">Maison</p>
            <ul className="space-y-1">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Care & Warranty", href: "/warranty" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm tracking-[0.18em] text-bone-100 uppercase hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hairline-t px-6 py-5">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}