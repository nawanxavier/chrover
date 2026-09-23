import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { site, waLink } from "@/lib/site";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  IconFacebook,
  IconInstagram,
  IconWhatsApp,
  IconYouTube,
} from "@/components/icons";

const maisonLinks = [
  { label: "About", href: "/about" },
  { label: "Care & Warranty", href: "/warranty" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const collectionLinks = [
  { label: "Shop all", href: "/shop" },
  ...CATEGORIES.map((c) => ({ label: c.label, href: `/shop?category=${c.id}` })),
];

export function Footer() {
  return (
    <footer className="hairline-t border-t border-gold-500/15">
      {/* Newsletter */}
      <div className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Newsletter</p>
            <p className="mt-2 text-sm text-bone-400">
              New releases and private sales. No noise.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <p className="text-[0.95rem] font-semibold tracking-[0.22em] text-bone-50 uppercase">
            CHROVER
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-bone-400">
            Automatic watches, assembled and regulated by hand in Lahore and
            delivered across Pakistan.
          </p>
          <div className="mt-7 flex items-center gap-5">
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
                className="text-bone-500 transition-colors hover:text-bone-100"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="lg:col-span-2 lg:col-start-6">
          <p className="eyebrow mb-5">Collections</p>
          <ul className="space-y-2.5">
            {collectionLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-bone-400 transition-colors hover:text-bone-100"
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
            {maisonLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-bone-400 transition-colors hover:text-bone-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3 lg:col-start-10">
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3.5 text-sm text-bone-400">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-bone-100">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-bone-100">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconWhatsApp className="h-4 w-4 text-bone-500" />
              <a
                href={waLink("Hello CHROVER, I have a question about your watches.")}
                className="hover:text-bone-100"
              >
                WhatsApp us
              </a>
            </li>
            <li className="pt-1 text-xs tracking-widest text-bone-500 uppercase">
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-[0.66rem] tracking-[0.14em] text-bone-500 uppercase md:flex-row">
          <p>© {new Date().getFullYear()} CHROVER. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>COD · JazzCash · Bank transfer</span>
            <Link href="/about" className="hover:text-bone-100">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-bone-100">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <p className="sr-only">{PRODUCTS.length} watches in the collection</p>
    </footer>
  );
}