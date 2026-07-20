import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { marketplaceFeatureIcons, productIcons } from "@/lib/icon-maps";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Eykira Marketplace — Coming Soon",
  description:
    "Eykira Marketplace is a multi-vendor marketplace connecting local sellers with buyers in one trusted, easy-to-use storefront network. Coming soon.",
};

const plannedFeatures = [
  {
    name: "Vendor storefronts",
    description: "Every seller gets their own branded storefront.",
  },
  {
    name: "Secure checkout",
    description: "One trusted checkout experience across every vendor.",
  },
  {
    name: "Buyer protection",
    description: "Built-in policies that keep every transaction safe.",
  },
  {
    name: "Ratings & reviews",
    description: "Transparent seller ratings buyers can trust.",
  },
  {
    name: "Order & delivery tracking",
    description: "Real-time visibility from checkout to doorstep.",
  },
  {
    name: "Seller dashboard",
    description: "Inventory, orders, and analytics in one place.",
  },
];

const otherProducts = products.filter((product) => product.slug !== "marketplace");

export default function MarketplacePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
          <div>
            <span className="rounded-full bg-brand-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
              Coming soon
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Eykira Marketplace
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-muted">
              A multi-vendor marketplace
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">
              Independent sellers and everyday buyers, together in one trusted,
              easy-to-use storefront network — putting local commerce first.
            </p>
          </div>
          <HeroVisual chips={["Multi-vendor", "Secure Checkout", "Coming Soon"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            What We&apos;re Building
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A marketplace designed around trust.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plannedFeatures.map((feature, i) => {
            const Icon = marketplaceFeatureIcons[feature.name];
            return (
              <Reveal key={feature.name} delay={(i % 3) * 80} className="rounded-2xl border border-brand-border p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-ink">{feature.name}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs text-brand-muted">
          Currently in development — features may evolve before launch.
        </p>
      </section>

      <section className="bg-brand-surface py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Want to be first in line?
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-muted">
            We&apos;ll add you to the list for early access and launch updates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${site.email}?subject=Notify me — Eykira Marketplace`}
              className="w-full rounded-full bg-brand-indigo px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/20 transition-colors hover:bg-brand-indigo-dark sm:w-auto"
            >
              Notify Me at Launch
            </a>
            <Link
              href="/contact"
              className="w-full rounded-full border border-brand-border bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-ink transition-colors hover:border-brand-indigo hover:text-brand-indigo sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
          Explore More From Eykira
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {otherProducts.map((product) => {
            const Icon = productIcons[product.slug];
            return (
              <Link
                key={product.slug}
                href={product.href}
                className="group flex items-center justify-between rounded-2xl border border-brand-border bg-white p-6 transition-colors hover:border-brand-indigo/40 hover:bg-brand-surface"
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${
                      product.accent === "indigo" ? "bg-brand-indigo" : "bg-brand-orange"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-brand-ink">{product.name}</span>
                    <span className="mt-0.5 block text-sm text-brand-muted">{product.tagline}</span>
                  </span>
                </span>
                <IconArrowRight className="h-4 w-4 text-brand-indigo transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
