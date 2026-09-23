import type { Metadata } from "next";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { IconArrow, IconMail, IconPhone, IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the CHROVER team by phone, email or WhatsApp. Monday–Saturday, 9am–9pm.",
};

const contacts = [
  {
    Icon: IconPhone,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    Icon: IconMail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: IconWhatsApp,
    label: "WhatsApp",
    value: "Start a chat",
    href: waLink("Hello CHROVER, I have a question about your watches."),
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="hairline-b border-b border-gold-500/15">
        <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-12 sm:px-8">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3 text-4xl text-bone-50 sm:text-5xl">
            Talk to us directly
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-bone-400">
            Questions on a collection, sizing or delivery. We reply on the same
            channels, {site.hours.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* Contact rows */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} className="group">
              <div className="hairline-t pt-5">
                <div className="flex items-center gap-3">
                  <c.Icon className="h-4 w-4 text-bone-500" />
                  <span className="text-[0.66rem] tracking-[0.18em] text-bone-500 uppercase">
                    {c.label}
                  </span>
                </div>
                <p className="mt-3 text-lg text-bone-100 transition-colors group-hover:text-bone-400">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="hairline-t border-t border-gold-500/15">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Write to us</p>
            <h2 className="display mt-3 text-3xl text-bone-50">
              Send an enquiry
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-bone-500">
              Whether it&apos;s the sweep of a second hand or a custom dial
              commission, we read every message.
            </p>
            <div className="mt-10 max-w-md space-y-4">
              <InfoRow label="Hours" value={site.hours} />
              <InfoRow label="Showroom" value={`${site.address}, by appointment`} />
              <InfoRow label="Delivery" value="Nationwide, COD available" />
            </div>
            <Link href="/faq" className="link-gold mt-10">
              Browse the FAQ <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="hairline-t flex items-center justify-between gap-4 pt-4">
      <span className="text-[0.66rem] tracking-[0.18em] text-bone-500 uppercase">
        {label}
      </span>
      <span className="text-sm text-bone-100">{value}</span>
    </div>
  );
}