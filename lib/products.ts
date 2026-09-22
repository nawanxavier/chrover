import type { Category, Product } from "./types";

const img = (slug: string, n: number) => `/images/watches/${slug}-${n}.svg`;

export const CATEGORIES: Category[] = [
  {
    id: "dress",
    name: "Dress",
    label: "Dress Watches",
    tagline: "Quiet elegance for the boardroom and beyond",
    image: img("heritage-gold", 1),
  },
  {
    id: "chronograph",
    name: "Chronograph",
    label: "Chronographs",
    tagline: "Precision timing, engineered drama",
    image: img("regatta-chrono", 1),
  },
  {
    id: "diver",
    name: "Diver",
    label: "Dive Watches",
    tagline: "Bold instruments for land and sea",
    image: img("meridian-diver", 1),
  },
  {
    id: "minimal",
    name: "Minimal",
    label: "Minimalist",
    tagline: "Less, considered to the last detail",
    image: img("vela-minimal", 1),
  },
  {
    id: "skeleton",
    name: "Haute",
    label: "Haute Horlogerie",
    tagline: "The art of the movement, exposed",
    image: img("vivace-skeleton", 1),
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "heritage-gold",
    slug: "heritage-gold",
    name: "Heritage Gold Automatic",
    tagline: "The definitive dress watch",
    category: "dress",
    badge: "25% off",
    description:
      "A 40mm automatic in warm 18k gold plating, the Heritage pairs a sun-brushed ivory dial with hand-applied gold indices. Worn with linen or a dinner jacket, it speaks the same quiet language: understated, unhurried, unmistakable.",
    price: 89500,
    compareAtPrice: 119500,
    images: [img("heritage-gold", 1), img("heritage-gold", 2), img("heritage-gold", 3)],
    strap: ["Havana Leather", "Black Alligator", "Steel Bracelet"],
    specs: [
      { label: "Movement", value: "Automatic · 42h reserve" },
      { label: "Case", value: "40mm · 18k gold-plated steel" },
      { label: "Dial", value: "Sun-brushed ivory" },
      { label: "Crystal", value: "Sapphire, AR coated" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Heritage",
    flags: { featured: true, bestseller: true },
  },
  {
    id: "aurora-rose",
    slug: "aurora-rose",
    name: "Aurora Rose Gold",
    tagline: "A champagne glow on the wrist",
    category: "dress",
    badge: "New",
    description:
      "Rose-gold warmth meets a champagne sunray dial. The Aurora is our most romantic silhouette — slim, softly domed, and finished with a tapered bracelet that disappears beneath the cuff.",
    price: 82000,
    compareAtPrice: 95000,
    images: [img("aurora-rose", 1), img("aurora-rose", 2), img("aurora-rose", 3)],
    strap: ["Rose Bracelet", "Suede Taupe", "Ivory Leather"],
    specs: [
      { label: "Movement", value: "Automatic · 38h reserve" },
      { label: "Case", value: "38mm · rose-gold plated steel" },
      { label: "Dial", value: "Champagne sunray" },
      { label: "Crystal", value: "Sapphire, double domed" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Heritage",
    flags: { featured: true },
  },
  {
    id: "celeste-silver",
    slug: "celeste-silver",
    name: "Celeste Silver Index",
    tagline: "Clinical, cool, confident",
    category: "dress",
    badge: "15% off",
    description:
      "Brush-polished steel and a pale silver dial make the Celeste the purest expression of our dress line. Slim lugs, a fluted crown, and a barely-there profile that pairs with anything.",
    price: 74900,
    compareAtPrice: 84900,
    images: [img("celeste-silver", 1), img("celeste-silver", 2), img("celeste-silver", 3)],
    strap: ["Steel Bracelet", "Grey Leather", "Navy Leather"],
    specs: [
      { label: "Movement", value: "Automatic · 42h reserve" },
      { label: "Case", value: "40mm · brushed steel" },
      { label: "Dial", value: "Silver matte" },
      { label: "Crystal", value: "Sapphire, AR coated" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Heritage",
    flags: { featured: true },
  },
  {
    id: "regatta-chrono",
    slug: "regatta-chrono",
    name: "Regatta Chronograph",
    tagline: "A race against the seconds",
    category: "chronograph",
    badge: "New",
    description:
      "A tachymeter bezel, three stacked subdials and a column-wheel chronograph. The Regatta is built for the moment the flag drops — and for every second of the drive home after.",
    price: 124500,
    compareAtPrice: 155000,
    images: [img("regatta-chrono", 1), img("regatta-chrono", 2), img("regatta-chrono", 3)],
    strap: ["Steel Bracelet", "Black Rubber", "Brown Leather"],
    specs: [
      { label: "Movement", value: "Automatic chronograph" },
      { label: "Case", value: "42mm · brushed steel" },
      { label: "Dial", value: "Matte black, silver registers" },
      { label: "Crystal", value: "Sapphire, AR coated" },
      { label: "Water Resistance", value: "10 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Sport",
    flags: { featured: true },
  },
  {
    id: "traverse-pilot",
    slug: "traverse-pilot",
    name: "Traverse Pilot",
    tagline: "Instruments of clear purpose",
    category: "chronograph",
    badge: "New",
    description:
      "Luminous numerals, an oversized crown and a hardened black case. The Traverse borrows from aviators of the '40s and lands somewhere between cockpit instrument and daily companion.",
    price: 109500,
    compareAtPrice: 129500,
    images: [img("traverse-pilot", 1), img("traverse-pilot", 2), img("traverse-pilot", 3)],
    strap: ["Green Nato", "Tactical Rubber", "Khaki Leather"],
    specs: [
      { label: "Movement", value: "Automatic · 48h reserve" },
      { label: "Case", value: "43mm · black PVD steel" },
      { label: "Dial", value: "Forest green, lumed" },
      { label: "Crystal", value: "Sapphire, double domed" },
      { label: "Water Resistance", value: "10 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Sport",
  },
  {
    id: "meridian-diver",
    slug: "meridian-diver",
    name: "Meridian Diver 300",
    tagline: "Three hundred metres deep",
    category: "diver",
    badge: "20% off",
    description:
      "A unidirectional ceramic bezel, 300m of water resistance and a dial that reads at a glance in black water. The Meridian is a tool first — and a very handsome one.",
    price: 99500,
    compareAtPrice: 124500,
    images: [img("meridian-diver", 1), img("meridian-diver", 2), img("meridian-diver", 3)],
    strap: ["Steel Bracelet", "Blue Rubber", "Two-tone Tropic"],
    specs: [
      { label: "Movement", value: "Automatic · 50h reserve" },
      { label: "Case", value: "41mm · brushed steel" },
      { label: "Dial", value: "Navy, Super-LumiNova" },
      { label: "Crystal", value: "Sapphire, glassbox" },
      { label: "Water Resistance", value: "30 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Sport",
    flags: { featured: true },
  },
  {
    id: "marino-blu",
    slug: "marino-blu",
    name: "Marino Blu",
    tagline: "The deep end, in steel-blue",
    category: "diver",
    badge: "Bestseller",
    description:
      "A sunset-blue bezel over a shading navy dial, the Marino is our love letter to the Mediterranean. Everyday water resistance with week-long legibility.",
    price: 92000,
    compareAtPrice: 109000,
    images: [img("marino-blu", 1), img("marino-blu", 2), img("marino-blu", 3)],
    strap: ["Steel Bracelet", "Navy Rubber", "Tropic Strap"],
    specs: [
      { label: "Movement", value: "Automatic · 50h reserve" },
      { label: "Case", value: "41mm · polished steel" },
      { label: "Dial", value: "Navy gradient" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Water Resistance", value: "20 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Sport",
    flags: { featured: true },
  },
  {
    id: "vela-minimal",
    slug: "vela-minimal",
    name: "Vela Minimal",
    tagline: "Purity by subtraction",
    category: "minimal",
    badge: "20% off",
    description:
      "No date window. No numerals. Just batons, a silent sweep hand and the cleanest possible face at 38mm. The Vela is a gateway watch that never feels like one.",
    price: 54500,
    compareAtPrice: 67500,
    images: [img("vela-minimal", 1), img("vela-minimal", 2), img("vela-minimal", 3)],
    strap: ["White Leather", "Sand Suede", "Mesh Steel"],
    specs: [
      { label: "Movement", value: "Automatic · 42h reserve" },
      { label: "Case", value: "38mm · polished steel" },
      { label: "Dial", value: "Porcelain white" },
      { label: "Crystal", value: "Sapphire, AR coated" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Heritage",
    flags: { featured: true },
  },
  {
    id: "celadon-green",
    slug: "celadon-green",
    name: "Céladon Green",
    tagline: "The quiet hum of green",
    category: "minimal",
    description:
      "A celadon dial that shifts with the light — grey at noon, jade by evening. Slim steel case, printed minutes, and a bracelet that disappears under a cuff.",
    price: 59500,
    compareAtPrice: 69500,
    images: [img("celadon-green", 1), img("celadon-green", 2), img("celadon-green", 3)],
    strap: ["Steel Bracelet", "Olive Leather", "Green Suede"],
    specs: [
      { label: "Movement", value: "Automatic · 42h reserve" },
      { label: "Case", value: "39mm · brushed steel" },
      { label: "Dial", value: "Celadon" },
      { label: "Crystal", value: "Sapphire, boxed" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "2 years international" },
    ],
    collection: "Heritage",
  },
  {
    id: "nocturne-black",
    slug: "nocturne-noir",
    name: "Nocturne Noir",
    tagline: "Midnight, formalised",
    category: "dress",
    badge: "Limited",
    description:
      "Song-black dial, black-on-black case, and a sweep second hand in pale gold. The Nocturne is the watch you wear when the truly important decisions are made.",
    price: 189000,
    compareAtPrice: 215000,
    images: [img("nocturne-black", 1), img("nocturne-black", 2), img("nocturne-black", 3)],
    strap: ["Black Alligator", "Black Bracelet", "Nappa Leather"],
    specs: [
      { label: "Movement", value: "Automatic · 55h reserve" },
      { label: "Case", value: "40mm · black DLC steel" },
      { label: "Dial", value: "Matte black, gold accents" },
      { label: "Crystal", value: "Sapphire" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "3 years international" },
    ],
    collection: "Boutique",
    flags: { limited: true },
  },
  {
    id: "vivace-skeleton",
    slug: "vivace-skeleton",
    name: "Vivace Skeleton",
    tagline: "The movement is the ornament",
    category: "skeleton",
    badge: "Limited",
    description:
      "An openworked dial that turns our automatic calibre into architecture. Rose-gold bridges, blued screws and light moving through forty hours of machinery.",
    price: 214000,
    compareAtPrice: 240000,
    images: [img("vivace-skeleton", 1), img("vivace-skeleton", 2), img("vivace-skeleton", 3)],
    strap: ["Steel Bracelet", "Blue Alligator", "Grey Suede"],
    specs: [
      { label: "Movement", value: "Skeleton automatic · 42h" },
      { label: "Case", value: "41mm · brushed steel" },
      { label: "Dial", value: "Openworked, gold bridges" },
      { label: "Crystal", value: "Sapphire, front & back" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "3 years international" },
    ],
    collection: "Boutique",
    flags: { featured: true, limited: true },
  },
  {
    id: "aurum-grand",
    slug: "aurum-grand",
    name: "Aurum Grand Skeleton",
    tagline: "Eighteen carats of statement",
    category: "skeleton",
    badge: "Limited",
    description:
      "The flagship. A full gold-plated case, an openworked heart, and a level of finishing we keep for only fifty pieces a year.",
    price: 249000,
    compareAtPrice: 290000,
    images: [img("aurum-luxury", 1), img("aurum-luxury", 2), img("aurum-luxury", 3)],
    strap: ["Gold Bracelet", "Black Alligator", "Ivory Leather"],
    specs: [
      { label: "Movement", value: "Skeleton automatic · 55h" },
      { label: "Case", value: "42mm · 18k gold-plated" },
      { label: "Dial", value: "Openworked, gold" },
      { label: "Crystal", value: "Sapphire, front & back" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Warranty", value: "3 years international" },
    ],
    collection: "Boutique",
    flags: { limited: true },
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function productsByCategory(id: string) {
  return PRODUCTS.filter((p) => p.category === id);
}

export function featuredProducts() {
  return PRODUCTS.filter((p) => p.flags.featured);
}

export function collectionProducts(collection: string) {
  return PRODUCTS.filter((p) => p.collection === collection);
}

export function newArrivals() {
  return PRODUCTS.filter((p) => p.badge === "New");
}