import Link from "next/link";

export function Hero() {
  return (
    <section className="hairline-b border-b border-gold-500/15">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-4 pt-16 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:pt-24 lg:pb-28">
        {/* Copy */}
        <div>
          <h1 className="display text-[2.75rem] text-bone-50 sm:text-6xl">
            Curated timepieces, honest prices.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
            A focused selection of Cartier, Tissot, Rolex, Hublot, Patek
            Philippe, Audemars Piguet and AURA. Every piece is inspected before
            dispatch and shipped with cash on delivery nationwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shop" className="btn btn-gold">
              Shop watches
            </Link>
            <Link href="/about" className="btn btn-ghost">
              Our story
            </Link>
          </div>

          <p className="mt-12 border-t border-gold-500/15 pt-5 text-[0.66rem] tracking-[0.18em] text-bone-500 uppercase">
            Free delivery over Rs 5,000 — COD nationwide — 7-day returns
          </p>
        </div>

        {/* Visual */}
        <div className="overflow-hidden border border-gold-500/10 bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/watches/hero-watch.svg"
            alt="Featured timepiece"
            width={520}
            height={520}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}