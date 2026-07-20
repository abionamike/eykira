import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/eykira.png" alt="Eykira" width={168} height={74} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-brand-muted">
              {site.tagline}
            </p>
            <p className="mt-4 text-xs text-brand-muted">{site.incorporation}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li><Link href="/" className="hover:text-brand-indigo">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-indigo">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-indigo">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Products</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={product.href} className="hover:text-brand-indigo">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-brand-indigo">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-indigo">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-brand-border pt-8 text-xs text-brand-muted sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
          <p>Proudly built in Peterborough, Ontario, Canada.</p>
        </div>
      </div>
    </footer>
  );
}
