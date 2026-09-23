import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { StorySection } from "@/components/StorySection";
import { featuredProducts, bestsellerProducts } from "@/lib/products";

export default function Home() {
  const selected = featuredProducts();
  const best = bestsellerProducts();

  return (
    <>
      <Hero />

      <ProductCarousel
        eyebrow="Top rated"
        title="Best sellers"
        ctaHref="/shop"
        ctaLabel="View all"
        products={best}
      />

      <ProductCarousel
        eyebrow="Selected"
        title="The collection"
        ctaHref="/shop"
        ctaLabel="View all"
        products={selected}
      />

      <CategoryGrid />

      <StorySection />
    </>
  );
}