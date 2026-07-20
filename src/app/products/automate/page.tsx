import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  benefits,
  challenges,
  industries,
  process,
  roi,
  services,
  whyChoose,
} from "@/lib/automate-content";
import { benefitIcons, serviceIcons } from "@/lib/icon-maps";
import { AutomateScene } from "@/components/illustrations/scenes";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Eykira Automate — AI Business Automation Solutions",
  description:
    "Eykira Automate deploys AI receptionists, voice agents, chatbots, and workflow automation so your business can operate 24/7, capture more leads, and cut costs.",
};

export default function AutomatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-20">
          <div>
            <span className="rounded-full bg-brand-indigo-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-indigo-dark">
              Available now
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Eykira Automate
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-muted">
              AI Business Automation Solutions
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted">
              AI-powered virtual employees that never sleep, never miss an inquiry,
              and keep your business running 24/7 — so your team can focus on growth.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-brand-indigo px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/20 transition-colors hover:bg-brand-indigo-dark"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="rounded-full border border-brand-border bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-ink transition-colors hover:border-brand-indigo hover:text-brand-indigo"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
          <AutomateScene />
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              The Challenge
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink">
              Businesses lose opportunities every day.
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {challenges.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-ink"
                >
                  <span className="mt-0.5 text-brand-orange">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-brand-border bg-brand-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Our Solution
            </p>
            <p className="mt-4 text-base leading-7 text-brand-ink">
              Eykira Automate replaces manual, repetitive work with AI that runs 24/7 —
              so your team can focus on growth instead of routine tasks.
            </p>
            <p className="mt-4 text-base leading-7 text-brand-ink">
              We don&apos;t just install software — we partner with you to transform
              how your business works.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              A complete automation toolkit.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.name];
              return (
                <Reveal key={service.name} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-brand-border bg-white p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo-light text-brand-indigo-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-brand-ink">{service.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Benefits To Your Business
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Increase revenue. Reduce costs. Delight customers.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefitIcons[benefit.name];
            return (
              <Reveal key={benefit.name} delay={(i % 3) * 80} className="rounded-2xl border border-brand-border p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo-light text-brand-indigo-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-lg font-semibold text-brand-ink">{benefit.name}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{benefit.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why choose + ROI */}
      <section className="bg-brand-ink py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Why Choose Eykira
            </p>
            <ul className="mt-6 space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Return On Investment
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {roi.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Implementation Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            From discovery to continuous support.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <span className="text-4xl font-bold text-brand-indigo/15">{item.step}</span>
              <h3 className="mt-2 text-base font-semibold text-brand-ink">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-surface py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Built for nearly every sector.
          </h2>
        </Reveal>
        <div className="mt-10">
          <Marquee items={industries} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="rounded-3xl bg-brand-indigo px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build the future of your business.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
            Schedule a complimentary Business Automation Consultation today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-surface sm:w-auto"
            >
              Get in Touch
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="w-full rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
