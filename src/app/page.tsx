import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { benefits, industries, process, services } from "@/lib/automate-content";
import { benefitIcons, productIcons, serviceIcons } from "@/lib/icon-maps";
import HeroVisual from "@/components/HeroVisual";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { IconArrowRight, IconCheck } from "@/components/icons";

const stats = [
  { value: 24, suffix: "/7", label: "AI-powered operations" },
  { value: 7, suffix: "", label: "Automation services" },
  { value: 18, suffix: "+", label: "Industries served" },
  { value: 3, suffix: "", label: "Products, one ecosystem" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-20 lg:grid-cols-2 lg:px-8 lg:pt-20 lg:pb-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-indigo">
              An Ontario, Canada corporation
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              Eykira builds the intelligent products behind modern business and
              everyday life — AI automation, marketplace, and mobility, all in one
              growing ecosystem.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-brand-indigo px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/20 transition-colors hover:bg-brand-indigo-dark"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="#products"
                className="rounded-full border border-brand-border bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-ink transition-colors hover:border-brand-indigo hover:text-brand-indigo"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
          <HeroVisual chips={["24/7 Automation", "Ontario Inc.", "3 Products"]} />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 border-t border-brand-border pt-10 text-center sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-semibold text-brand-ink">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-sm text-brand-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-24 bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Our Products
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              One company, three products.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {products.map((product, i) => {
              const Icon = productIcons[product.slug];
              return (
                <Reveal key={product.slug} delay={i * 100}>
                  <Link
                    href={product.href}
                    className="group flex h-full flex-col rounded-3xl border border-brand-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-indigo/10"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${
                          product.accent === "indigo" ? "bg-brand-indigo" : "bg-brand-orange"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      {product.status === "available" ? (
                        <span className="rounded-full bg-brand-indigo-light px-3 py-1 text-xs font-semibold text-brand-indigo-dark">
                          Available now
                        </span>
                      ) : (
                        <span className="rounded-full bg-brand-orange-light px-3 py-1 text-xs font-semibold text-brand-orange-dark">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-brand-ink">{product.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-muted">{product.tagline}</p>
                    <p className="mt-4 flex-1 text-sm leading-6 text-brand-muted">
                      {product.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo">
                      Learn more
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              About Eykira
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Built in Peterborough, for businesses everywhere.
            </h2>
            <p className="mt-6 text-base leading-7 text-brand-muted">
              We help organizations automate repetitive work, delight customers, and
              grow revenue with intelligent automation — while building consumer
              products that make commerce and mobility simpler for everyone.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo hover:text-brand-indigo-dark"
            >
              Learn more about our story
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-brand-border bg-brand-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
              Why businesses choose Eykira
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Customized to your specific needs",
                "Fast implementation, minimal disruption",
                "Scalable systems that grow with you",
                "Secure technology, protected data",
                "Measurable, affordable ROI",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-indigo/10 text-brand-indigo">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                Eykira Automate
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Your business, on autopilot.
              </h2>
            </div>
            <Link
              href="/products/automate"
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-indigo hover:text-brand-indigo-dark"
            >
              View all services
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.name];
              return (
                <Reveal key={service.name} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-brand-border bg-white p-6 transition-colors hover:border-brand-indigo/40">
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
      <section className="bg-brand-ink py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              The Impact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Metrics that move.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefitIcons[benefit.name];
              return (
                <Reveal key={benefit.name} delay={(i % 3) * 80}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-lg font-semibold text-white">{benefit.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{benefit.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Five steps to deployment.
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
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-indigo px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-float-a" />
          <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build the future of your business.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
            Schedule a complimentary consultation and see what Eykira can do for you.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-surface sm:w-auto"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="w-full rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
