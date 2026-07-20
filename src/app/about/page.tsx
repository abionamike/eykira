import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { productIcons } from "@/lib/icon-maps";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import { IconBolt, IconShieldCheck, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eykira Inc. is a technology corporation incorporated in Ontario, Canada, building AI automation, marketplace, and mobility products.",
};

const values = [
  {
    icon: IconBolt,
    name: "Automate what slows you down",
    description:
      "Repetitive, manual work belongs to intelligent systems — freeing people for what needs a human touch.",
  },
  {
    icon: IconUsers,
    name: "Build for real communities",
    description:
      "Every product starts from a concrete problem: missed calls, fragmented local commerce, an unfair fare.",
  },
  {
    icon: IconShieldCheck,
    name: "Earn trust through transparency",
    description:
      "From measurable ROI in automation to fair, negotiated pricing in mobility, we design for openness.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              A Peterborough company building for the world.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">
              {site.legalName}, {site.incorporation.toLowerCase()}, headquartered at{" "}
              {site.address}.
            </p>
          </div>
          <HeroVisual chips={["Ontario Inc.", "Peterborough HQ", "3 Products"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink">
              Founded to put intelligent technology to work.
            </h2>
            <p className="mt-6 text-base leading-7 text-brand-muted">
              Businesses of every size lose revenue, time, and customers to problems
              modern AI can solve — missed calls, slow follow-ups, manual busywork.
            </p>
            <p className="mt-4 text-base leading-7 text-brand-muted">
              We started with Eykira Automate, and are now building a wider ecosystem —
              a multi-vendor marketplace and a name-your-fare ride-sharing app — all
              under one mission: make business and everyday life work better.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-brand-border bg-brand-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              At a glance
            </p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-sm font-semibold text-brand-ink">Legal name</dt>
                <dd className="mt-1 text-sm text-brand-muted">{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-ink">Incorporation</dt>
                <dd className="mt-1 text-sm text-brand-muted">{site.incorporation}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-ink">Headquarters</dt>
                <dd className="mt-1 text-sm text-brand-muted">{site.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-ink">Products</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {products.map((product) => {
                    const Icon = productIcons[product.slug];
                    return (
                      <span
                        key={product.slug}
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1 text-xs font-medium text-brand-ink"
                      >
                        <Icon className="h-3.5 w-3.5 text-brand-indigo" />
                        {product.shortName}
                      </span>
                    );
                  })}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              What We Believe
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              The principles behind everything we build.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.name} delay={i * 100} className="rounded-2xl border border-brand-border bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo-light text-brand-indigo-dark">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{value.name}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="rounded-3xl bg-brand-indigo px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Want to work with us, or join us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
            Whether you&apos;re exploring Eykira Automate or curious about what we&apos;re
            building next, we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-surface"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
