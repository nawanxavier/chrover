"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconBag, IconClose, IconMenu } from "@/components/icons";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Care & Warranty", href: "/warranty" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="hairline-b sticky top-0 z-40 bg-ink-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-5 sm:px-8">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-[0.95rem] font-semibold tracking-[0.22em] text-bone-50 uppercase"
          >
            CHROVER
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/shop"
                  ? pathname.startsWith("/shop")
                  : pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-1 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors ${
                    active ? "text-bone-100" : "text-bone-400 hover:text-bone-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-bone-300 transition-colors hover:text-bone-100"
            >
              <IconBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center bg-bone-100 px-1 text-[0.58rem] font-semibold text-ink-950">
                  {count}
                </span>
              )}
            </button>
            <button
              className="-mr-1 text-bone-300 transition-colors hover:text-bone-100 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[80%] max-w-xs flex-col border-l border-gold-500/10 bg-ink-900 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="hairline-b flex items-center justify-between px-6 py-5">
            <span className="text-sm font-semibold tracking-[0.22em] text-bone-50 uppercase">
              CHROVER
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-bone-300 hover:text-bone-100"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm tracking-[0.14em] text-bone-200 uppercase hover:text-bone-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hairline-t px-6 py-6 text-[0.68rem] tracking-[0.18em] text-bone-500 uppercase">
            Free delivery over Rs 5,000 · COD nationwide
          </div>
        </div>
      </div>
    </>
  );
}