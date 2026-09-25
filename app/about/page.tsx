import Link from "next/link";
import { IconArrow, IconReturn } from "@/components/icons";

const values = [
  {
    title: "Quality first",
    text: "Every watch is hand-picked for build quality, dial detail and finish.",
  },
  {
    title: "Checked before dispatch",
    text: "Every piece is inspected for function and condition before it ships.",
  },
  {
    title: "Boxed, ready to gift",
    text: "Original box where we have it, otherwise our premium presentation box.",
  },
  {
    title: "Secure payment",
    text: "Pay by JazzCash, EasyPaisa or bank transfer — dispatch the same day.",
  },
];

const steps = [
  {
    n: "01",
    title: "Order",
    text: "Message us on WhatsApp with the piece you want and your city.",
  },
  {
    n: "02",
    title: "Confirm",
    text: "We confirm stock and the current price — stock moves fast.",
  },
  {
    n: "03",
    title: "Dispatch",
    text: "Packed and shipped the same or next day; 2–4 working days in most cities.",
  },
  {
    n: "04",
    title: "Pay advance",
    text: "Settle via JazzCash, EasyPaisa or bank transfer and we dispatch the same day.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <p className="eyebrow">How we work</p>
          <h1 className="display mt-5 text-5xl leading-[1.05] text-bone-50 sm:text-6xl">
            Quality you can trust.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-bone-400">
            A curated selection of timepieces inspired by Cartier, Tissot,
            Rolex, Hublot, Patek Philippe and Audemars Piguet, plus our own
            AURA line — each one quality-checked, boxed and delivered across
            Pakistan.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden border border-gold-500/10 bg-ink-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/watches/tissot-og-leather-3.jpg"
              alt="A curated CHROVER timepiece"
              loading="lazy"
              width={1122}
              height={1402}
              className="aspect-[4/5] w-full object-contain"
            />
          </div>
          <div>
            <p className="eyebrow">What we hold to</p>
            <h2 className="display mt-3 text-3xl leading-tight text-bone-50 sm:text-4xl">
              The checking is our job, not yours.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
              Every watch is hand-picked for build quality and finish, tested
              for function and checked for condition before dispatch — no
              surprises at your door.
            </p>
            <p className="mt-4 max-w-md text-base leading-8 text-bone-400">
              Some pieces arrive with their original box; others we pack in our
              premium presentation box. What we list is exactly what you
              receive.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="hairline-t hairline-b border-y border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="mb-12">
            <p className="eyebrow">What we hold to</p>
            <h2 className="display mt-2 text-3xl text-bone-50">Four principles</h2>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="hairline-t pt-6">
                <p className="text-lg font-medium text-bone-100">{v.title}</p>
                <p className="mt-3 text-sm leading-7 text-bone-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-12">
          <p className="eyebrow">The road</p>
          <h2 className="display mt-2 text-3xl text-bone-50">How an order works</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((t) => (
            <div key={t.n} className="hairline-t pt-6">
              <p className="text-lg font-medium text-bone-100">{t.n}</p>
              <p className="mt-1 text-sm font-medium text-bone-300">{t.title}</p>
              <p className="mt-3 text-sm leading-7 text-bone-500">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="max-w-xl text-base leading-8 text-bone-400">
            Found a piece you like? Message us — we&apos;ll confirm stock and
            have it on its way the same day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/shop" className="btn btn-gold">
              Shop the collection <IconArrow className="h-4 w-4" />
            </Link>
            <Link href="/warranty" className="btn btn-ghost">
              <IconReturn className="h-4 w-4" /> Delivery &amp; returns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}