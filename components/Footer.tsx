import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { site, waLink } from "@/lib/site";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconYouTube,
} from "@/components/icons";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Care & Warranty", href: "/warranty" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Track Order", href: "/contact" },
];

const collections = [
  { label: "Shop All", href: "/shop" },
  ...CATEGORIES.map((c) => ({ label: c.label, href: `/shop?category=${c.id}` })),
  { label: "Boutique", href: "/shop?collection=Boutique" },
];

export function Footer() {
  return (
    <footer className="hairline-t bg-ink-900">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="display text-2xl font-semibold tracking-[0.32em] text-bone-50">
              CHROVER
            </p>
            <p className="mt-1 text-[0.6rem] tracking-[0.3em] text-gold-500 uppercase">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-bone-400">
              Automatic movements, sapphire crystal and hand-finished cases —
              time, crafted in Pakistan. Delivered across the country on Cash
              on Delivery.
            </p>
            <div className="mt-7 flex items-center gap-4">
              {[
                { href: site.socials.instagram, Icon: IconInstagram, label: "Instagram" },
                { href: site.socials.facebook, Icon: IconFacebook, label: "Facebook" },
                { href: site.socials.youtube, Icon: IconYouTube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/25 text-bone-300 transition-all hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Collections</p>
            <ul className="space-y-2.5">
              {collections.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-bone-400 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Maison</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-bone-400 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Need help?</p>
            <ul className="space-y-3.5 text-sm text-bone-400">
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={`tel:${site.phone}`} className="hover:text-gold-400">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconWhatsApp className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={waLink("Hello CHROVER, I have a question about your watches.")} className="hover:text-gold-400">
                  WhatsApp the concierge
                </a>
              </li>
              <li className="pt-1 text-xs tracking-wider text-bone-500">
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter band */}
      <div className="hairline-t hairline-b bg-ink-950">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 py-12 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="display text-xl text-bone-100">
              Join the <em className="text-gold-400">family</em>
            </p>
            <p className="mt-1 text-sm text-bone-500">
              Early access to limited editions, ateliers and private sales.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-[0.68rem] tracking-[0.14em] text-bone-500 md:flex-row">
          <p>
            CHROVER © {new Date().getFullYear()} All rights reserved ·
            <span className="ml-1 hidden sm:inline">
              Cash on Delivery · JazzCash · Bank Transfer
            </span>
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-gold-400">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-gold-400">
              Terms
            </Link>
            <span className="text-gold-600">PKR</span>
          </div>
        </div>
      </div>
      <p className="sr-only">{PRODUCTS.length} watches in the collection</p>
    </footer>
  );
}