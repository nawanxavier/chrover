import Link from "next/link";

export function Hero() {
  return (
    <section className="hairline-b border-b border-gold-500/15">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pt-10 pb-12 sm:px-8 sm:pt-12 sm:pb-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:pt-14 lg:pb-16">
        {/* Copy */}
        <div>
          <h1 className="display text-[2.75rem] text-bone-50 sm:text-6xl">
            Curated timepieces, honest prices.
          </h1>
          <p className="mt-5 max-w-md text-base leading-8 text-bone-400">
            A focused selection of Cartier, Tissot, Rolex, Hublot, Patek
            Philippe, Audemars Piguet and AURA. Every piece is quality-checked
            and boxed before dispatch, with advance payment by JazzCash,
            EasyPaisa or bank transfer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn btn-gold">
              Shop watches
            </Link>
            <Link href="/about" className="btn btn-ghost">
              Our story
            </Link>
          </div>

          <p className="mt-9 border-t border-gold-500/15 pt-4 text-[0.66rem] tracking-[0.18em] text-bone-500 uppercase">
            Free delivery over Rs 5,000 — advance payment — 7-day returns
          </p>
        </div>

        {/* Visual */}
        <div className="mx-auto w-full max-w-[480px] overflow-hidden border border-gold-500/10 bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/watches/cartier-tank-solo-1.jpg"
            alt="Cartier Tank Solo on a CHROVER selection"
            width={1024}
            height={1239}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}