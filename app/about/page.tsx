import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IconArrow, IconShield, IconGear } from "@/components/icons";

const values = [
  {
    title: "Hand, not machine",
    text: "Every movement is assembled, timed and inspected by hand in Lahore. Automation runs our marketing — never our watchmaking.",
  },
  {
    title: "Honest materials",
    text: "316L steel, sapphire crystal, 18k plated gold. We publish what our watches are made of, because there is nothing to hide.",
  },
  {
    title: "Considered scarcity",
    text: "Limited series are numbered and closed. Owning one is a quiet signal — not of price, but of consequence.",
  },
  {
    title: "Tested to the wrist",
    text: "Each watch survives heat, cold, pressure and the harshest critic of all: a year on a daily wrist before release.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The first bench",
    text: "CHROVER begins as a single workbench in Lahore and one conviction: Pakistan deserves fine watches made carefully at home.",
  },
  {
    year: "2021",
    title: "The Calibre A1",
    text: "Our first in-house automatic movement, assembled and regulated in the atelier — the heart of the Heritage line.",
  },
  {
    year: "2023",
    title: "The Grand Complications",
    text: "The Boutique collection launches: openworked dials, limited to fifty pieces a year, each individually numbered.",
  },
  {
    year: "2026",
    title: "Across the country",
    text: "CHROVER now delivers to every city in Pakistan, with a loyal family of collectors from Karachi to Gilgit.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15">
        <div className="absolute inset-0 bg-[radial-gradient(110%_100%_at_50%_0%,#221a0e_0%,#100d09_55%,#0b0a08_100%)]" />
        <div className="pattern-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_30%,#000,transparent)]" />
        <Reveal className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="eyebrow">The Maison</p>
          <h1 className="display mt-5 text-5xl leading-[1.05] text-bone-50 sm:text-6xl">
            Time, <em className="text-gold-400">crafted</em> to last
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-bone-400">
            CHROVER is a Pakistani watch maison built on a refusal — that fine
            watchmaking should be an imported luxury. We make it here,
            carefully, in numbers small enough to matter.
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden border border-gold-500/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/watches/story-watch.svg"
                  alt="An CHROVER chronograph in the atelier"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden bg-ink-900 px-6 py-4 border border-gold-500/20 sm:block">
                <p className="display text-2xl text-gold-400">Lahore</p>
                <p className="mt-1 text-[0.62rem] tracking-[0.26em] text-bone-500 uppercase">
                  Atelier since 2019
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our origin</p>
            <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
              Born of a stubborn <em className="text-gold-400">why not?</em>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-bone-400">
              <p>
                Fine watches tell the world you value time. For too long,
                owning that message meant buying abroad. Our founder, a
                watchmaker trained across three continents, returned to Lahore
                certain of one thing: the hands that could assemble a calibre
                in Zurich could assemble it here — and do it better, with the
                pride of building for home.
              </p>
              <p>
                Seven years later every CHROVER still passes through the same
                benches. The steel is milled, polished, regulated and tested
                within a kilometre of where it is boxed. Nothing leaves until
                it has kept time for a year on a real wrist.
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-6 border-t border-gold-500/15 pt-7">
              {[
                { v: "7", l: "years of atelier" },
                { v: "40", l: "hours per watch" },
                { v: "3", l: "tests before release" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="display text-3xl text-gold-400">{s.v}</p>
                  <p className="mt-1 text-[0.62rem] tracking-[0.18em] text-bone-500 uppercase">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-gold-500/15 bg-ink-900/50">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">What we hold to</p>
            <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
              Four <em className="text-gold-400">principles</em>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full border border-gold-500/15 bg-ink-950 p-8">
                  <IconGear className="h-6 w-6 text-gold-500" />
                  <p className="display mt-5 text-lg text-bone-100">{v.title}</p>
                  <p className="mt-3 text-sm leading-7 text-bone-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow">The road</p>
          <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
            Seven years, <em className="text-gold-400">hour by hour</em>
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 80}>
              <div className="relative border-t border-gold-500/25 pt-6">
                <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full bg-gold-500" />
                <p className="display text-3xl text-gold-400">{t.year}</p>
                <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-bone-100 uppercase">
                  {t.title}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-bone-500">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <p className="display text-2xl text-bone-100">
            Worn, your watch becomes a small <em className="text-gold-400">family heirloom</em>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn btn-gold">
              Shop the collection <IconArrow className="h-4 w-4" />
            </Link>
            <Link href="/warranty" className="btn btn-ghost">
              <IconShield className="h-4 w-4" /> Our warranty
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}