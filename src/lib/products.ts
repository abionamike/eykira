export type ProductStatus = "available" | "coming-soon";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  status: ProductStatus;
  href: string;
  accent: "indigo" | "orange";
};

export const products: Product[] = [
  {
    slug: "automate",
    name: "Eykira Automate",
    shortName: "Automate",
    tagline: "AI Business Automation Solutions",
    summary:
      "24/7 AI receptionists, voice agents, chatbots, and workflow automation that help any business capture more leads and run leaner.",
    status: "available",
    href: "/products/automate",
    accent: "indigo",
  },
  {
    slug: "marketplace",
    name: "Eykira Marketplace",
    shortName: "Marketplace",
    tagline: "A multi-vendor marketplace",
    summary:
      "A multi-vendor marketplace connecting local sellers with buyers in one trusted, easy-to-use storefront network.",
    status: "coming-soon",
    href: "/products/marketplace",
    accent: "orange",
  },
  {
    slug: "rides",
    name: "Eykira Rides",
    shortName: "Rides",
    tagline: "Name-your-fare ride-sharing",
    summary:
      "An inDrive-style ride-sharing app where riders propose a fare and nearby drivers accept, building a fairer, more transparent way to move.",
    status: "coming-soon",
    href: "/products/rides",
    accent: "indigo",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
