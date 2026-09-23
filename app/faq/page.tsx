import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { waLink } from "@/lib/site";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on delivery, payment, returns, quality and care for CHROVER watches.",
};

const items = [
  {
    q: "Do you deliver across Pakistan?",
    a: "Yes. We deliver to every city and town in Pakistan. Delivery is complimentary on all orders over Rs. 5,000; below that a flat Rs. 300 applies. Orders typically arrive within 2–4 working days in major cities.",
  },
  {
    q: "How do payments work?",
    a: "Pay secure advance via JazzCash, EasyPaisa or bank transfer. We confirm your order on WhatsApp, dispatch the same day and share tracking.",
  },
  {
    q: "What kind of watches do you offer?",
    a: "Our selection covers Cartier, Tissot, Rolex, Hublot, Patek Philippe, Audemars Piguet and our own AURA line. Every piece is quality-checked for build and finish before dispatch, and arrives in a premium presentation box.",
  },
  {
    q: "What if I have a problem with my watch?",
    a: "Inspect your watch on delivery and message us within 48 hours if anything is wrong. Unworn, undamaged pieces can be returned or exchanged within 7 days of delivery. From there, standard watch care applies — batteries, straps and adjustments are quick to arrange on WhatsApp.",
  },
  {
    q: "Can I return or exchange?",
    a: "Yes. Unworn watches in original condition may be returned or exchanged within 7 days of delivery. Contact the concierge on WhatsApp and we will arrange collection.",
  },
  {
    q: "How do I choose the right size?",
    a: "It depends on the model — a slim, rectangular Tank-style case wears small, while a bold chronograph wears larger. Send us your wrist measurement and the models you like and we'll advise on WhatsApp.",
  },
  {
    q: "Will a sold-out piece come back?",
    a: "Often! Stock moves fast and our lineup rotates. Message us on WhatsApp about any sold-out model and we'll tell you if it's coming back.",
  },
  {
    q: "How do I care for my watch?",
    a: "Wipe the case and strap with a soft cloth after wear and keep it away from water and strong magnets. Strap swaps and power-cell changes are quick to arrange on WhatsApp.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
          <p className="eyebrow">Good to know</p>
          <h1 className="display mt-3 text-4xl text-bone-50 sm:text-5xl">
            Asked, and answered
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-bone-400">
            Everything you need to know before ordering. Can&apos;t find your
            answer? Message us directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <FaqAccordion items={items} />

        <div className="mt-14 border border-gold-500/15 px-8 py-10 text-center">
          <p className="text-2xl text-bone-100">Still curious?</p>
          <p className="mt-2 text-sm text-bone-500">
            Replies within minutes during working hours.
          </p>
          <Link
            href={waLink("Hello CHROVER, I have a question that wasn't answered in the FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-6"
          >
            Message us <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}