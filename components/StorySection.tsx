import Link from "next/link";
import { IconArrow } from "@/components/icons";

export function StorySection() {
  return (
    <section className="hairline-t border-t border-gold-500/15">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden border border-gold-500/10 bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/watches/story-watch.svg"
            alt="A curated CHROVER timepiece"
            loading="lazy"
            className="w-full"
          />
        </div>

        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
            Sourced smart. Sold honest.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
            Every watch in our catalogue is hand-picked for build quality, dial
            detail and finish — then inspected for function and condition
            before it ships. You get quality you can trust, every time.
          </p>
          <p className="mt-4 max-w-md text-base leading-8 text-bone-400">
            Some pieces arrive with their original box; the rest we pack in our
            premium presentation box. What you see listed is exactly what you
            receive.
          </p>
          <Link href="/about" className="btn btn-ghost mt-9">
            Read our story <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}