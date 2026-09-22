import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

export function CategoryGrid() {
  return (
    <section className="border-t border-gold-500/15 bg-ink-900/40">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow">The Maison</p>
          <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
            Shop by <em className="text-gold-400">collection</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <Link
                href={`/shop?category=${c.id}`}
                className="group relative block overflow-hidden border border-gold-500/10"
              >
                <div className="aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.6rem] tracking-[0.3em] text-gold-400 uppercase">
                    {c.name}
                  </p>
                  <p className="display mt-1 text-xl text-bone-50">{c.label}</p>
                  <p className="mt-1 hidden text-xs text-bone-400 sm:block">
                    {c.tagline}
                  </p>
                  <p className="link-gold mt-3 text-[0.62rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}