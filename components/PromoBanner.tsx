import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 bg-ink-900">
      <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,#2a2213_0%,#131009_60%,#0b0a08_100%)]" />
      <div className="pattern-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_80%_at_50%_50%,#000,transparent)]" />

      <Reveal className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
        <p className="eyebrow">Limited series</p>
        <h2 className="display mt-4 text-4xl leading-tight text-bone-50 sm:text-5xl">
          The Grand <em className="text-gold-400">Complications</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-bone-400">
          Fifty openworked masters, numbered and signed — hand-finished in the
          atelier and never repeated. When the fifty are sold, the dial closes
          for good.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/shop?collection=Boutique" className="btn btn-gold">
            Discover the boutique
          </Link>
          <Link href="/shop?category=skeleton" className="btn btn-ghost">
            See the movement
          </Link>
        </div>
        <p className="mt-8 text-[0.62rem] tracking-[0.3em] text-bone-500 uppercase">
          Each piece numbered · Certificate of authenticity
        </p>
      </Reveal>
    </section>
  );
}