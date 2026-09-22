import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { waLink } from "@/lib/site";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on delivery, payment, warranty, sizing and care for AURELIA watches.",
};

const items = [
  {
    q: "Do you deliver across Pakistan?",
    a: "Yes. We deliver to every city and town in Pakistan. Delivery is complimentary on all orders over Rs. 5,000; below that a flat Rs. 300 applies. Orders typically arrive within 2–4 working days in major cities.",
  },
  {
    q: "How does Cash on Delivery work?",
    a: "Cash on Delivery is available nationwide. Simply choose 'COD' when you place your order on WhatsApp, pay the courier on arrival, and inspect your watch in its sealed coffret before paying.",
  },
  {
    q: "Are the watches genuine automatics?",
    a: "Every AURELIA runs on a mechanical automatic movement — there are no quartz pieces in the collection. Movements are assembled and regulated by hand in our Lahore atelier, and each watch is tested for a year before release.",
  },
  {
    q: "What does the warranty cover?",
    a: "Every timepiece carries a 2-year international warranty covering movement function and manufacture. Register your watch within 30 days and we extend cover to a third year. The warranty does not cover normal wear, straps, or accidental damage.",
  },
  {
    q: "Can I return or exchange?",
    a: "Yes. Unworn watches in original condition may be returned or exchanged within 7 days of delivery. Contact the concierge on WhatsApp and we will arrange collection.",
  },
  {
    q: "How do I choose the right size?",
    a: "Cases range from 38mm to 43mm. As a guide: 38–40mm suits most wrists and dress wear; 41–43mm suits larger wrists and sportier lines. We can advise on WhatsApp — share your wrist measurement and the models you like.",
  },
  {
    q: "Do you make custom or commissioned pieces?",
    a: "A small number of bespoke commissions are accepted each year — dial colours, engravings and occasional one-off movements. Reach the concierge to discuss your commission; lead time is 10–14 weeks.",
  },
  {
    q: "How do I care for my watch?",
    a: "Wipe the case and bracelet with a soft cloth after wear, wind when it rests more than a day, and keep it away from strong magnets. Sapphire crystal resists scratches, but we recommend a service every 4–5 years.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
          <p className="eyebrow">Good to know</p>
          <h1 className="display mt-3 text-4xl text-bone-50 sm:text-5xl">
            Asked, and <em className="text-gold-400">answered</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-bone-400">
            Everything before the first winding. Can&apos;t find your answer?
            The concierge is one message away.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <FaqAccordion items={items} />

        <div className="mt-14 border border-gold-500/20 bg-ink-900/60 p-8 text-center">
          <p className="display text-2xl text-bone-100">
            Still curious? <em className="text-gold-400">Ask directly</em>
          </p>
          <p className="mt-2 text-sm text-bone-500">
            Replies within minutes during working hours.
          </p>
          <Link
            href={waLink("Hello AURELIA, I have a question that wasn't answered in the FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-6"
          >
            Message the concierge <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}