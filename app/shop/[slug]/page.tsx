import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getCategory, getProduct, productsByCategory } from "@/lib/products";
import { formatPKR } from "@/lib/format";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductBuy } from "@/components/ProductBuy";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = productsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-8 sm:py-14">
      {/* Breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
        <Link href="/" className="hover:text-gold-400">
          Home
        </Link>
        <span className="text-gold-700">/</span>
        <Link href="/shop" className="hover:text-gold-400">
          Shop
        </Link>
        <span className="text-gold-700">/</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-gold-400"
        >
          {category?.label}
        </Link>
        <span className="text-gold-700">/</span>
        <span className="text-bone-100">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Info */}
        <div className="lg:pt-2">
          <div className="flex items-center gap-3">
            <p className="eyebrow">{product.collection}</p>
            {category && (
              <span className="text-[0.62rem] tracking-[0.24em] text-bone-500 uppercase">
                · {category.label}
              </span>
            )}
          </div>
          <h1 className="display mt-3 text-4xl leading-tight text-bone-50 sm:text-[2.75rem]">
            {product.name}
          </h1>
          <p className="mt-2 text-sm tracking-wide text-bone-500 italic">
            {product.tagline}
          </p>
          <p className="mt-2 text-xs tracking-[0.18em] text-bone-500 uppercase">
            {product.reviews > 0
              ? `${product.reviews} ${product.reviews === 1 ? "review" : "reviews"}`
              : "No reviews yet"}
            {product.soldOut && (
              <span className="ml-3 inline-block bg-bone-900 px-2 py-0.5 text-bone-100">
                Sold out
              </span>
            )}
          </p>

          <p className="mt-7 border-l-2 border-gold-500/40 pl-5 text-base leading-8 text-bone-400">
            {product.description}
          </p>

          <div className="mt-9">
            <ProductBuy product={product} />
          </div>

          {/* Specs */}
          <div className="mt-10">
            <p className="eyebrow mb-4">Technical</p>
            <dl className="divide-y divide-gold-500/10 border-y border-gold-500/10">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-2 gap-4 py-3.5 sm:grid-cols-3"
                >
                  <dt className="text-[0.66rem] tracking-[0.2em] text-bone-500 uppercase">
                    {s.label}
                  </dt>
                  <dd className="col-span-1 text-sm text-bone-100 sm:col-span-2">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-6 text-xs leading-6 text-bone-500">
            Every piece is inspected before dispatch and delivered in a premium
            presentation box. Message us on WhatsApp for stock, dispatch or
            returns questions.
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Related</p>
              <h2 className="display mt-2 text-3xl text-bone-50">
                You may also like
              </h2>
            </div>
            <Link
              href={`/shop?category=${product.category}`}
              className="link-gold"
            >
              View all {category?.label.toLowerCase()}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <p className="sr-only">{formatPKR(product.price)}</p>
    </div>
  );
}