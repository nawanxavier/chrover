import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { waLink } from "@/lib/site";
import { IconArrow, IconReturn, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Care & Warranty",
  description:
    "AURELIA's 2-year international movement warranty, care advice and the registration that extends cover to three years.",
};

const care = [
  {
    title: "Wear",
    text: "Watches are made to be worn daily. An automatic keeps best time when it's on the wrist; if you rest it, wind it every day or so.",
  },
  {
    title: "Wipe",
    text: "After wear, wipe the case and bracelet with a soft, dry cloth. For leather, a quick breath of fresh air at night prevents moisture build-up.",
  },
  {
    title: "Avoid",
    text: "Strong magnets, harsh chemicals and hot showers. Our divers are water-resistant to 30 ATM; dress pieces are for splashes, not laps.",
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
      <section className="relative overflow-hidden border-b border-gold-500/15">
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,#20190e_0%,#100d09_55%,#0b0a08_100%)]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30">
            <IconShield className="h-6 w-6 text-gold-400" />
          </div>
          <p className="eyebrow">Promise of the maison</p>
          <h1 className="display mt-4 text-4xl text-bone-50 sm:text-5xl">
            Warranted for <em className="text-gold-400">three years</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-bone-400">
            Every AURELIA carries a 2-year international warranty on its
            movement. Register within 30 days and we extend that cover to a
            third year — because a watch this carefully made should be kept by
            us, not shelved by you.
          </p>
        </Reveal>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow">Extend your cover</p>
          <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
            Three steps, <em className="text-gold-400">three years</em>
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative h-full border border-gold-500/15 bg-ink-900/50 p-8 pt-10">
                <span className="display absolute -top-5 left-8 bg-ink-950 px-2 text-3xl text-gold-500">
                  {s.n}
                </span>
                <p className="display mt-2 text-lg text-bone-100">{s.title}</p>
                <p className="mt-3 text-sm leading-7 text-bone-500">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href={waLink("Hello AURELIA, I'd like to register my new watch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Register my watch <IconArrow className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Care */}
      <section className="border-y border-gold-500/15 bg-ink-900/40">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">Aftercare</p>
            <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
              A little care, <em className="text-gold-400">measured</em>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {care.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="hairline-t h-full pt-5">
                  <p className="display text-lg text-gold-400">{c.title}</p>
                  <p className="mt-3 text-sm leading-7 text-bone-500">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-10 rounded border border-gold-500/15 bg-ink-900/50 p-10 lg:grid-cols-[auto_1fr_auto] lg:p-14">
            <IconReturn className="h-10 w-10 text-gold-500" />
            <div>
              <h2 className="display text-2xl text-bone-100">
                Seven days to decide
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-bone-500">
                Unworn, untouched, still sealed in its coffret? Return or
                exchange within 7 days of delivery — no questions asked. Straps
                and bracelets, once worn, are non-returnable for hygiene.
              </p>
            </div>
            <Link href="/contact" className="btn btn-ghost">
              Start a return
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}