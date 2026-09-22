import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IconArrow } from "@/components/icons";

const stats = [
  { value: "40", label: "hours of hand assembly" },
  { value: "12", label: "in-house movements" },
  { value: "50", label: "pieces per limited series" },
  { value: "2019", label: "atelier founded, Lahore" },
];

export function StorySection() {
  return (
    <section className="border-t border-gold-500/15">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-4 py-24 sm:px-8 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="pattern-dots absolute -top-6 -left-6 h-40 w-40 opacity-50" />
            <div className="relative overflow-hidden border border-gold-500/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/watches/story-watch.svg"
                alt="The AURELIA chronograph on the watchmaker's bench"
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="absolute -right-5 -bottom-5 hidden border border-gold-500/20 bg-ink-900 px-6 py-4 sm:block">
              <p className="display text-3xl text-gold-400">est. 2019</p>
              <p className="mt-1 text-[0.62rem] tracking-[0.26em] text-bone-500 uppercase">
                Lahore Atelier
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <p className="eyebrow">The Atelier</p>
          <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
            Every second, <em className="text-gold-400">considered</em>
          </h2>
          <p className="mt-6 text-base leading-8 text-bone-400">
            AURELIA began with a simple refusal — that fine watchmaking should
            be out of reach. In our Lahore atelier, each movement is decorated
            and regulated by hand, each case polished for hours, each dial
            checked in three kinds of light.
          </p>
          <p className="mt-4 text-base leading-8 text-bone-400">
            The result is a watch that asks nothing of the wearer but time —
            and carries with it the patience of forty hands, working for forty
            hours.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-gold-500/15 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="display text-3xl text-gold-400">{s.value}</p>
                <p className="mt-1 text-[0.64rem] leading-4 tracking-[0.16em] text-bone-500 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn btn-ghost mt-10">
            Read our story <IconArrow className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}