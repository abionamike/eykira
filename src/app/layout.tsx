import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eykira.com"),
  title: {
    default: `${site.name} — AI Automation, Marketplace & Mobility`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI automation",
    "AI receptionist",
    "AI voice agent",
    "AI chatbot",
    "business automation",
    "workflow automation",
    "appointment booking automation",
    "multi-vendor marketplace",
    "ride-sharing app",
    "Eykira",
    "Ontario",
    "Canada",
  ],
  category: "technology",
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: `${site.name} — AI Automation, Marketplace & Mobility`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Automation, Marketplace & Mobility`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: "https://eykira.com",
  logo: "https://eykira.com/eykira.png",
  description: site.description,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "1826 Brimwood Crescent",
    addressLocality: "Peterborough",
    addressRegion: "ON",
    addressCountry: "CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
