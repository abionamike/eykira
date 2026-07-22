import type { Metadata } from "next";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { ContactScene } from "@/components/illustrations/scenes";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eykira Inc. — call, email, or visit us in Peterborough, Ontario, Canada.",
};

const channels = [
  {
    icon: IconPhone,
    name: "Call us",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    description: "Speak with our team about a consultation or partnership.",
  },
  {
    icon: IconMail,
    name: "Email us",
    value: site.email,
    href: `mailto:${site.email}?subject=Business Automation Consultation`,
    description: "Send project details and we'll follow up within one business day.",
  },
  {
    icon: IconMapPin,
    name: "Visit us",
    value: site.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
    description: "Our home base in Peterborough, Ontario, Canada.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Let&apos;s talk about what Eykira can build for you.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">
              A consultation, an early-access request, or a general question — reach
              out and our team will get back to you.
            </p>
          </div>
          <ContactScene />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.name} delay={i * 100}>
              <a
                href={channel.href}
                target={channel.name === "Visit us" ? "_blank" : undefined}
                rel={channel.name === "Visit us" ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-3xl border border-brand-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-indigo/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo-light text-brand-indigo-dark">
                  <channel.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                  {channel.name}
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-ink">{channel.value}</p>
                <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">
                  {channel.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 rounded-3xl border border-brand-border bg-brand-surface p-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
            Interested in Eykira Marketplace or Eykira Rides?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-muted">
            Both are in development. Email us and mention which one you&apos;d like
            early access to — we&apos;ll keep you posted as launch gets closer.
          </p>
          <a
            href={`mailto:${site.email}?subject=Early access request`}
            className="mt-6 inline-flex rounded-full bg-brand-indigo px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-indigo/20 transition-colors hover:bg-brand-indigo-dark"
          >
            Request Early Access
          </a>
        </Reveal>
      </section>
    </>
  );
}
