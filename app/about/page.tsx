import Link from "next/link";
import { IconArrow, IconShield } from "@/components/icons";

const values = [
  {
    title: "Assembled by hand",
    text: "Every movement is built, timed and inspected by hand in Lahore.",
  },
  {
    title: "Honest materials",
    text: "316L steel, sapphire crystal, plated gold. We publish what every watch is made of.",
  },
  {
    title: "Small numbers",
    text: "Limited series are numbered and closed. We make what we can finish well.",
  },
  {
    title: "Tested for a year",
    text: "Each watch is worn for a year before release. Nothing leaves early.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The first bench",
    text: "A single workbench in Lahore and one conviction: Pakistan deserves fine watches made carefully at home.",
  },
  {
    year: "2021",
    title: "The Calibre A1",
    text: "Our first in-house automatic movement, assembled and regulated in the atelier.",
  },
  {
    year: "2023",
    title: "The boutique pieces",
    text: "Openworked dials, limited to fifty pieces a year, each individually numbered.",
  },
  {
    year: "2026",
    title: "Across the country",
    text: "CHROVER now delivers to every city in Pakistan, from Karachi to Gilgit.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <p className="eyebrow">The atelier</p>
          <h1 className="display mt-5 text-5xl leading-[1.05] text-bone-50 sm:text-6xl">
            Fine watches, made at home.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-bone-400">
            CHROVER is a Pakistani watchmaker. We build automatic movements in
            small numbers, by hand, in Lahore — and stand behind every one of
            them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden border border-gold-500/10 bg-ink-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/watches/story-watch.svg"
              alt="A CHROVER chronograph in the atelier"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div>
            <p className="eyebrow">Our origin</p>
            <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
              Built here, because it can be.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
              For too long, owning a fine watch meant buying abroad. Our
              founder returned to Lahore certain of one thing: the hands that
              assemble a movement in Zurich can assemble it here — and do it
              better, building for home.
            </p>
            <p className="mt-4 max-w-md text-base leading-8 text-bone-400">
              Every CHROVER still passes through the same benches. The steel is
              milled, polished, regulated and tested within a kilometre of
              where it is boxed.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="hairline-t hairline-b border-y border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="mb-12">
            <p className="eyebrow">What we hold to</p>
            <h2 className="display mt-2 text-3xl text-bone-50">Four principles</h2>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="hairline-t pt-6">
                <p className="text-lg font-medium text-bone-100">{v.title}</p>
                <p className="mt-3 text-sm leading-7 text-bone-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-12">
          <p className="eyebrow">The road</p>
          <h2 className="display mt-2 text-3xl text-bone-50">Seven years</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <div key={t.year} className="hairline-t pt-6">
              <p className="text-lg font-medium text-bone-100">{t.year}</p>
              <p className="mt-1 text-sm font-medium text-bone-300">{t.title}</p>
              <p className="mt-3 text-sm leading-7 text-bone-500">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="max-w-xl text-base leading-8 text-bone-400">
            Worn daily, your watch becomes part of how you keep time — and what
            you leave behind.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/shop" className="btn btn-gold">
              Shop the collection <IconArrow className="h-4 w-4" />
            </Link>
            <Link href="/warranty" className="btn btn-ghost">
              <IconShield className="h-4 w-4" /> Our warranty
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}