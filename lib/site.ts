export const site = {
  name: "AURELIA",
  tagline: "Time, Crafted in Pakistan",
  domain: "aureliawatches.pk",

  whatsappNumber: "923001234567",
  phone: "+92 300 1234567",
  phoneDisplay: "+92 300 1234 567",
  email: "care@aureliawatches.pk",

  address: "Lahore, Pakistan",

  freeShippingThreshold: 5000,
  codNote: "Cash on Delivery available across Pakistan",

  socials: {
    instagram: "https://instagram.com/aurelia.watches",
    facebook: "https://facebook.com/aurelia.watches",
    youtube: "https://youtube.com/@aurelia.watches",
  },

  hours: "Monday – Saturday · 9am – 9pm",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}