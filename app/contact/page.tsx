import type { Metadata } from "next";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import {
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconArrow,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the CHROVER concierge by phone, email or WhatsApp. Monday–Saturday, 9am–9pm.",
};

const cards = [
  {
    title: "Call a horologist",
    Icon: IconPhone,
    lines: [
      { label: "Concierge", value: site.phoneDisplay, href: `tel:${site.phone}` },
    ],
  },
  {
    title: "Email the maison",
    Icon: IconMail,
    lines: [{ label: "Care desk", value: site.email, href: `mailto:${site.email}` }],
  },
  {
    title: "WhatsApp us",
    Icon: IconWhatsApp,
    lines: [
      {
        label: "Fastest reply",
        value: "Start a chat",
        href: waLink("Hello CHROVER, I have a question about your watches."),
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-12 text-center sm:px-8">
          <p className="eyebrow">The Concierge</p>
          <h1 className="display mt-3 text-4xl text-bone-50 sm:text-5xl">
            We answer, <em className="text-gold-400">time</em>ly
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-bone-400">
            Questions on a collection, sizing, delivery or a commission — the
            concierge replies {site.hours}.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full border border-gold-500/15 bg-ink-900/60 p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/25">
                  <c.Icon className="h-5 w-5 text-gold-400" />
                </div>
                <p className="display mt-5 text-lg text-bone-100">{c.title}</p>
                <div className="mt-3 space-y-1">
                  {c.lines.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block text-sm text-bone-400 transition-colors hover:text-gold-400"
                    >
                      <span className="text-[0.62rem] tracking-[0.2em] text-bone-500 uppercase">
                        {l.label} ·{" "}
                      </span>
                      {l.value}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="hairline-t border-t border-gold-500/15 bg-ink-900/40">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Write to us</p>
            <h2 className="display mt-3 text-3xl text-bone-50">
              Tell us <em className="text-gold-400">everything</em>
            </h2>
            <p className="mt-5 text-sm leading-7 text-bone-500">
              Whether it&apos;s the sweep of a second hand or a custom dial
              commission, we read every word.
            </p>
            <div className="mt-10 space-y-4">
              <div className="hairline-t flex items-center justify-between pt-4">
                <span className="text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
                  Hours
                </span>
                <span className="text-sm text-bone-100">{site.hours}</span>
              </div>
              <div className="hairline-t flex items-center justify-between pt-4">
                <span className="text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
                  Showroom
                </span>
                <span className="text-sm text-bone-100">
                  {site.address} · by appointment
                </span>
              </div>
              <div className="hairline-t flex items-center justify-between pt-4">
                <span className="text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
                  Delivery
                </span>
                <span className="text-sm text-bone-100">
                  Nationwide · COD available
                </span>
              </div>
            </div>
            <Link href="/faq" className="link-gold mt-10">
              Browse the FAQ <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}