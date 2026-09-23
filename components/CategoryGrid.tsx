import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="eyebrow">Collections</p>
          <h2 className="display mt-2 text-3xl text-bone-50">Shop by line</h2>
        </div>
        <Link href="/shop" className="link-gold hidden sm:inline-flex">
          Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-5">
        {CATEGORIES.map((c) => (
          <Link key={c.id} href={`/shop?category=${c.id}`} className="group">
            <div className="aspect-square overflow-hidden border border-gold-500/10 bg-ink-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-bone-100 transition-colors group-hover:text-bone-400">
              {c.label}
            </p>
            <p className="mt-1 text-xs leading-5 text-bone-500">{c.tagline}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}