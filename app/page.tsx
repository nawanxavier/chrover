import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { StorySection } from "@/components/StorySection";
import { PromoBanner } from "@/components/PromoBanner";
import { InstaStrip } from "@/components/InstaStrip";
import { Reveal } from "@/components/Reveal";
import { collectionProducts } from "@/lib/products";
import { IconReturn, IconShield, IconTruck, IconWhatsApp } from "@/components/icons";

const perks = [
  {
    Icon: IconTruck,
    title: "Complimentary delivery",
    text: "Free shipping across Pakistan on orders over Rs. 5,000.",
  },
  {
    Icon: IconWhatsApp,
    title: "Cash on Delivery",
    text: "Pay when it arrives. Nationwide COD, every single day.",
  },
  {
    Icon: IconShield,
    title: "2-year warranty",
    text: "Every movement is covered internationally for two years.",
  },
  {
    Icon: IconReturn,
    title: "7-day returns",
    text: "Unworn timepiece? Return it within a week, no questions.",
  },
];

export default function Home() {
  const heritage = collectionProducts("Heritage");
  const sport = collectionProducts("Sport");
  const boutique = collectionProducts("Boutique");

  return (
    <>
      <Hero />
      <CategoryGrid />

      <ProductCarousel
        eyebrow="Featured"
        title="The Heritage Collection"
        ctaHref="/shop?collection=Heritage"
        ctaLabel="View all heritage"
        products={heritage}
      />

      <StorySection />
      <PromoBanner />

      <ProductCarousel
        eyebrow="Engineered"
        title="Precision Sports"
        ctaHref="/shop?category=chronograph"
        ctaLabel="View sports line"
        products={sport}
      />

      <ProductCarousel
        eyebrow="The Atelier"
        title="The Boutique"
        ctaHref="/shop?collection=Boutique"
        ctaLabel="The limited run"
        products={boutique}
      />

      {/* Perks */}
      <section className="border-t border-gold-500/15 bg-ink-900/40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-gold-500/10 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70} className="bg-ink-950">
              <div className="h-full p-8">
                <Icon className="h-6 w-6 text-gold-500" />
                <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-bone-100 uppercase">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-bone-500">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InstaStrip />
    </>
  );
}