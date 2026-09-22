import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AURELIA — Luxury Watches Crafted in Pakistan",
    template: "%s · AURELIA",
  },
  description:
    "AURELIA is a Pakistani luxury watch maison. Automatic movements, sapphire crystal and hand-finished cases — delivered across Pakistan on Cash on Delivery.",
  keywords: ["luxury watches", "automatic watches", "Pakistan watches", "AURELIA"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-ink-950 font-sans text-bone-100">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}