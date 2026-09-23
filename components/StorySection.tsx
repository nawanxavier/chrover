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
            alt="A CHROVER chronograph on the watchmaker's bench"
            loading="lazy"
            className="w-full"
          />
        </div>

        <div>
          <p className="eyebrow">The atelier</p>
          <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
            Every watch is assembled by hand in Lahore.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
            Each movement is built, regulated and tested by hand in our Lahore
            atelier. The steel is milled, polished and inspected within a
            kilometre of where it is boxed.
          </p>
          <p className="mt-4 max-w-md text-base leading-8 text-bone-400">
            We make small numbers, deliberately, and keep every watch for a year
            on a wrist before it is released.
          </p>
          <Link href="/about" className="btn btn-ghost mt-9">
            Read our story <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}