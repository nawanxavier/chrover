import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { StorySection } from "@/components/StorySection";
import { featuredProducts, collectionProducts } from "@/lib/products";

export default function Home() {
  const selected = featuredProducts();
  const boutique = collectionProducts("Boutique");

  return (
    <>
      <Hero />
      <CategoryGrid />

      <ProductCarousel
        eyebrow="Selected"
        title="The collection"
        ctaHref="/shop"
        ctaLabel="View all"
        products={selected}
      />

      <StorySection />

      <ProductCarousel
        eyebrow="Limited"
        title="The boutique pieces"
        ctaHref="/shop?collection=Boutique"
        ctaLabel="View the boutique"
        products={boutique}
      />
    </>
  );
}