import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { IconInstagram } from "@/components/icons";

const tiles = [
  "heritage-gold-2",
  "regatta-chrono-2",
  "aurora-rose-3",
  "meridian-diver-2",
  "vivace-skeleton-2",
  "vela-minimal-3",
];

export function InstaStrip() {
  return (
    <section className="border-t border-gold-500/15">
      <Reveal className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">@aurelia.watches</p>
            <h2 className="display mt-2 text-3xl text-bone-50 sm:text-4xl">
              Join the <em className="text-gold-400">family</em>
            </h2>
          </div>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-gold"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {tiles.map((slug, i) => (
            <a
              key={slug}
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden border border-gold-500/10 ${
                i === 0 || i === 5 ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/watches/${slug}.svg`}
                alt="AURELIA on Instagram"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition-all duration-300 group-hover:bg-ink-950/55 group-hover:opacity-100">
                <IconInstagram className="h-6 w-6 text-bone-50" />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}