import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, getCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop All Watches",
  description:
    "Browse the complete CHROVER selection — Cartier, Tissot, Rolex, Hublot, Patek Philippe, Audemars Piguet and AURA lines. Quality-checked and delivered across Pakistan.",
};

interface ShopPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const categoryParam = typeof params.category === "string" ? params.category : "";
  const collectionParam =
    typeof params.collection === "string" ? params.collection : "";

  const category = categoryParam ? getCategory(categoryParam) : undefined;
  const filtered = PRODUCTS.filter((p) => {
    if (categoryParam && p.category !== categoryParam) return false;
    if (collectionParam && p.collection !== collectionParam) return false;
    return true;
  });

  const heading = category
    ? category.label
    : collectionParam
      ? `${collectionParam} Collection`
      : "All Watches";

  const tagline = category
    ? category.tagline
    : collectionParam
      ? PRODUCTS.find((p) => p.collection === collectionParam)?.tagline ??
        "The full range of the maison."
      : "Every piece we currently have, in one room.";

  return (
    <div>
      {/* Page header */}
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 pt-14 pb-10 sm:px-8">
          <nav className="mb-6 flex items-center gap-2 text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
            <Link href="/" className="hover:text-gold-400">
              Home
            </Link>
            <span className="text-gold-700">/</span>
            <Link href="/shop" className="hover:text-gold-400">
              Shop
            </Link>
            {category && (
              <>
                <span className="text-gold-700">/</span>
                <span className="text-bone-100">{category.label}</span>
              </>
            )}
          </nav>
          <p className="eyebrow">The Collection</p>
          <h1 className="display mt-2 text-4xl text-bone-50 sm:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 max-w-xl text-base text-bone-400">{tagline}</p>
        </div>
      </section>

      {/* Filter chips */}
      <div className="hairline-b border-b border-gold-500/15 bg-ink-900/60">
        <div className="no-scrollbar mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-4 sm:px-8">
          <FilterChip href="/shop" active={!categoryParam && !collectionParam}>
            All
          </FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip
              key={c.id}
              href={`/shop?category=${c.id}`}
              active={categoryParam === c.id}
            >
              {c.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8">
        <p className="mb-8 text-xs tracking-[0.2em] text-bone-500 uppercase">
          {filtered.length} {filtered.length === 1 ? "timepiece" : "timepieces"}
        </p>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="display text-2xl text-bone-200">Nothing here yet</p>
            <Link href="/shop" className="btn btn-gold mt-6">
              View all watches
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 border px-5 py-2.5 text-[0.66rem] font-semibold tracking-[0.2em] uppercase transition-colors ${
        active
          ? "border-gold-400 bg-gold-500/10 text-gold-400"
          : "border-gold-500/25 text-bone-300 hover:border-gold-500 hover:text-gold-400"
      }`}
    >
      {children}
    </Link>
  );
}