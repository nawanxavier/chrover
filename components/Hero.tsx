import Link from "next/link";
import { IconArrow, IconShield, IconTruck, IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_68%_38%,#241c10_0%,#120f0a_48%,#0b0a08_100%)]" />
        <div className="pattern-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
        <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pt-14 pb-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:pt-20 lg:pb-28">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="eyebrow">AURELIA · Haute Horlogerie</p>
          <h1 className="display mt-5 text-5xl leading-[1.04] text-bone-50 sm:text-6xl lg:text-[4.6rem]">
            Time,
            <em className="block text-gold-400">crafted</em>
            <span className="block">in Pakistan</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-8 text-bone-400">
            Automatic movements, sapphire crystal and hand-finished steel —
            assembled in our Lahore atelier for those who believe time is the
            last true luxury.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/shop" className="btn btn-gold">
              Shop the collection
            </Link>
            <Link href="/about" className="btn btn-ghost">
              Our story
            </Link>
          </div>

          {/* trust row */}
          <div className="mt-12 grid max-w-md grid-cols-1 gap-4 border-t border-gold-500/15 pt-6 sm:grid-cols-3">
            {[
              { Icon: IconShield, text: "2-year warranty" },
              { Icon: IconTruck, text: "Free shipping over Rs. 5,000" },
              { Icon: IconWhatsApp, text: "COD nationwide" },
            ].map(({ Icon, text }) => (
              <p
                key={text}
                className="flex items-center gap-2.5 text-[0.68rem] tracking-[0.14em] text-bone-400 uppercase"
              >
                <Icon className="h-4 w-4 shrink-0 text-gold-500" />
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[100px]" />
          <div className="relative w-full max-w-[520px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/watches/hero-watch.svg"
              alt="AURELIA Grand Skeleton automatic watch"
              width={520}
              height={520}
              className="w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            />
            {/* floating chips */}
            <div className="absolute top-[16%] -left-2 hidden border border-gold-500/20 bg-ink-900/90 px-4 py-3 backdrop-blur-sm md:block">
              <p className="text-[0.6rem] tracking-[0.24em] text-gold-500 uppercase">Movement</p>
              <p className="mt-0.5 text-sm text-bone-100">Automatic · 42h</p>
            </div>
            <div className="absolute right-0 bottom-[14%] hidden border border-gold-500/20 bg-ink-900/90 px-4 py-3 backdrop-blur-sm md:block">
              <p className="text-[0.6rem] tracking-[0.24em] text-gold-500 uppercase">Crystal</p>
              <p className="mt-0.5 text-sm text-bone-100">Sapphire · AR</p>
            </div>
            <div className="absolute -bottom-4 left-8 hidden items-center gap-3 md:flex">
              <a
                href={waLink("Hello AURELIA, I'd love to know more about your watches.")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Talk to a horologist <IconArrow className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* marquee-ish strip */}
      <div className="relative border-t border-gold-500/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-5 text-[0.64rem] tracking-[0.28em] text-bone-500 uppercase sm:px-8">
          <span>In-house automatic movements</span>
          <span className="text-gold-700">◆</span>
          <span>316L brushed steel</span>
          <span className="text-gold-700">◆</span>
          <span>Sapphire crystal</span>
          <span className="text-gold-700">◆</span>
          <span>2-year international warranty</span>
          <span className="text-gold-700">◆</span>
          <span>Limited to 50 pieces a year</span>
        </div>
      </div>
    </section>
  );
}