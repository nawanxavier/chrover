export const site = {
  name: "CHROVER",
  tagline: "Time, Crafted in Pakistan",
  domain: "chrover.com",

  whatsappNumber: "923001234567",
  phone: "+92 300 1234567",
  phoneDisplay: "+92 300 1234 567",
  email: "care@chrover.com",

  address: "Lahore, Pakistan",

  freeShippingThreshold: 5000,
  codNote: "Pay advance via JazzCash, EasyPaisa or Bank transfer",

  socials: {
    instagram: "https://instagram.com/chrover.watches",
    facebook: "https://facebook.com/chrover.watches",
    youtube: "https://youtube.com/@chrover.watches",
  },

  hours: "Monday – Saturday · 9am – 9pm",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}