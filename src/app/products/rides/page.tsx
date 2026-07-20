import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { productIcons, ridesStepIcons } from "@/lib/icon-maps";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Eykira Rides — Coming Soon",
  description:
    "Eykira Rides is an inDrive-style ride-sharing app where riders propose a fare and nearby drivers accept, building a fairer, more transparent way to move. Coming soon.",
};

const howItWorks = [
  { step: "01", name: "Set your route", description: "Enter your pickup and destination." },
  { step: "02", name: "Name your fare", description: "Propose the fare you're willing to pay." },
  { step: "03", name: "Drivers respond", description: "Nearby drivers accept, counter, or decline." },
  { step: "04", name: "Ride, rated and tracked", description: "Tracked in real time, rated by both sides." },
];

const otherProducts = products.filter((product) => product.slug !== "rides");

export default function RidesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
          <div>
            <span className="rounded-full bg-brand-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
              Coming soon
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Eykira Rides
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-muted">
              Name-your-fare ride-sharing
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">
              Riders propose the fare they want to pay, nearby drivers accept or
              counter — a fairer, more transparent way to move around town.
            </p>
          </div>
          <HeroVisual chips={["Name Your Fare", "Driver Accepted", "Coming Soon"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            How It Will Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            You set the price. Drivers choose the ride.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, i) => {
            const Icon = ridesStepIcons[item.name];
            return (
              <Reveal key={item.step} delay={i * 80}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs text-brand-muted">
          Currently in development — details, including the initial service area, may
          evolve before launch.
        </p>
      </section>

      <section className="bg-brand-surface py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Want to be first in line?
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-muted">
            We&apos;ll add you to the list for early access — as a rider or a driver.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${site.email}?subject=Notify me — Eykira Rides`}
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
