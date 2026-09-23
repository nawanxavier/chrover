import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CHROVER — Curated Timepieces, Delivered Across Pakistan",
    template: "%s · CHROVER",
  },
  description:
    "CHROVER offers a curated selection of Cartier, Tissot, Rolex, Hublot, Patek Philippe, Audemars Piguet and AURA timepieces — quality-checked, boxed and delivered across Pakistan.",
  keywords: ["curated watches", "Pakistan watches", "premium watches Pakistan", "CHROVER"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ink-950 font-sans text-bone-100">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("chrover-theme");if(t==="light"||(t!=="dark"&&matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.classList.add("light")}}catch(e){}`,
          }}
        />
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