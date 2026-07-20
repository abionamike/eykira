"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";
import { primaryNav } from "@/lib/site";
import { productIcons } from "@/lib/icon-maps";

export default function Header() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setProductsOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setProductsOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isProductsActive = pathname.startsWith("/products");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/eykira.png"
            alt="Eykira"
            width={168}
            height={74}
            preload
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" ref={navRef}>
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === "/" ? "text-brand-indigo" : "text-brand-ink hover:text-brand-indigo"
            }`}
          >
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProductsOpen((open) => !open)}
              aria-expanded={productsOpen}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isProductsActive ? "text-brand-indigo" : "text-brand-ink hover:text-brand-indigo"
              }`}
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-1 gap-1 rounded-2xl border border-brand-border bg-white p-3 shadow-xl shadow-brand-indigo/5">
                  {products.map((product) => {
                    const Icon = productIcons[product.slug];
                    return (
                    <Link
                      key={product.slug}
                      href={product.href}
                      className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-brand-surface"
                    >
                      <span
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white ${
                          product.accent === "indigo" ? "bg-brand-indigo" : "bg-brand-orange"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-brand-ink group-hover:text-brand-indigo">
                            {product.name}
                          </span>
                          {product.status === "coming-soon" && (
                            <span className="rounded-full bg-brand-orange-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-orange-dark">
                              Coming soon
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-xs text-brand-muted">
                          {product.summary}
                        </span>
                      </span>
                    </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === "/about" ? "text-brand-indigo" : "text-brand-ink hover:text-brand-indigo"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === "/contact" ? "text-brand-indigo" : "text-brand-ink hover:text-brand-indigo"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-indigo"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-ink lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-border bg-white px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-brand-surface"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-muted">
              Products
            </p>
            {products.map((product) => {
              const Icon = productIcons[product.slug];
              return (
                <Link
                  key={product.slug}
                  href={product.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-brand-surface"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-brand-indigo" />
                    {product.name}
                  </span>
                  {product.status === "coming-soon" && (
                    <span className="rounded-full bg-brand-orange-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-orange-dark">
                      Soon
                    </span>
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 rounded-full bg-brand-ink px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
