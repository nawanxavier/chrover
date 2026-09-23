import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/site";
import { IconArrow, IconReturn } from "@/components/icons";

export const metadata: Metadata = {
  title: "Delivery, Returns & Care",
  description:
    "How CHROVER delivers, the 7-day return window, and simple care advice for your timepiece.",
};

const care = [
  {
    title: "Wear",
    text: "Watches are made to be worn daily. If you rest one, just set the time and strap it on again — no winding rituals required.",
  },
  {
    title: "Wipe",
    text: "After wear, wipe the case and strap with a soft, dry cloth. For leather, fresh air overnight prevents moisture build-up.",
  },
  {
    title: "Avoid",
    text: "Keep your watch away from water, strong magnets and harsh chemicals. These pieces are not designed to be submerged.",
  },
  {
    title: "Service",
    text: "Standard quartz care applies: replace the battery when it slows and swap the strap when it shows wear — we can arrange both.",
  },
];

const steps = [
  {
    n: "01",
    title: "Order on WhatsApp",
    text: "Message us the watch you want and your city. We confirm stock and the current price.",
  },
  {
    n: "02",
    title: "Dispatch & deliver",
    text: "Packed in its box and shipped the same or next day, usually 2–4 working days in major cities.",
  },
  {
    n: "03",
    title: "Pay on arrival",
    text: "Inspect the watch carefully, then pay the courier. Cash on Delivery nationwide.",
  },
];

export default function WarrantyPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Delivery &amp; care</p>
          <h1 className="display mt-4 text-4xl text-bone-50 sm:text-5xl">
            Pay when you&apos;re happy
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-bone-400">
            Order on WhatsApp, inspect your watch on delivery, and pay the
            courier only after you&apos;re satisfied. Unworn pieces can be
            returned or exchanged within 7 days.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-12">
          <p className="eyebrow">From order to wrist</p>
          <h2 className="display mt-2 text-3xl text-bone-50">Three simple steps</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="hairline-t pt-6">
              <p className="text-sm text-bone-500">{s.n}</p>
              <p className="mt-3 text-lg font-medium text-bone-100">{s.title}</p>
              <p className="mt-3 text-sm leading-7 text-bone-500">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href={waLink("Hello CHROVER, I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Order on WhatsApp <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Care */}
      <section className="hairline-t hairline-b border-y border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="mb-12">
            <p className="eyebrow">Aftercare</p>
            <h2 className="display mt-2 text-3xl text-bone-50">Four habits</h2>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {care.map((c) => (
              <div key={c.title} className="hairline-t pt-6">
                <p className="text-lg font-medium text-bone-100">{c.title}</p>
                <p className="mt-3 text-sm leading-7 text-bone-500">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="grid items-center gap-8 border border-gold-500/15 px-10 py-12 sm:px-14 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="display text-2xl text-bone-100">Seven days to decide</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-bone-500">
              Unworn and undamaged? Return or exchange within 7 days of
              delivery. Straps and bracelets, once worn, are non-returnable for
              hygiene.
            </p>
          </div>
          <Link href="/contact" className="btn btn-ghost">
            <IconReturn className="h-4 w-4" />
            Start a return
          </Link>
        </div>
      </section>
    </div>
  );
}