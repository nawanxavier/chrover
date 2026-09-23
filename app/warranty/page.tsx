import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/site";
import { IconArrow, IconReturn } from "@/components/icons";

export const metadata: Metadata = {
  title: "Care & Warranty",
  description:
    "CHROVER's 2-year international movement warranty, care advice and the registration that extends cover to three years.",
};

const care = [
  {
    title: "Wear",
    text: "Watches are made to be worn daily. An automatic keeps best time on the wrist; if you rest it, wind it every day or so.",
  },
  {
    title: "Wipe",
    text: "After wear, wipe the case and bracelet with a soft, dry cloth. For leather, fresh air overnight prevents moisture build-up.",
  },
  {
    title: "Avoid",
    text: "Strong magnets, harsh chemicals and hot showers. Our divers are water-resistant to 30 ATM; dress pieces are for splashes.",
  },
  {
    title: "Service",
    text: "We recommend a full service every 4–5 years. A scheduled service within the warranty window is complimentary.",
  },
];

const steps = [
  {
    n: "01",
    title: "Register your movement",
    text: "Within 30 days of delivery, share your serial and invoice on WhatsApp.",
  },
  {
    n: "02",
    title: "Extend to 3 years",
    text: "Registration extends international cover to a full three years.",
  },
  {
    n: "03",
    title: "Rest easy",
    text: "Should the movement ever need our hands, we collect, repair and return it.",
  },
];

export default function WarrantyPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Care & warranty</p>
          <h1 className="display mt-4 text-4xl text-bone-50 sm:text-5xl">
            Warranted for three years
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-bone-400">
            Every CHROVER carries a 2-year international warranty on its
            movement. Register within 30 days and we extend that cover to a
            third year.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-12">
          <p className="eyebrow">Extend your cover</p>
          <h2 className="display mt-2 text-3xl text-bone-50">Three steps, three years</h2>
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
            href={waLink("Hello CHROVER, I'd like to register my new watch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Register my watch <IconArrow className="h-4 w-4" />
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
              Unworn, untouched and still sealed in its box? Return or exchange
              within 7 days of delivery. Straps and bracelets, once worn, are
              non-returnable for hygiene.
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