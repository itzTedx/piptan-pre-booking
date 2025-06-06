import { Metadata } from "next";

import AboutSection from "@/components/sections/about";
import { AuthorSection } from "@/components/sections/author";
import AvailabilitySection from "@/components/sections/availability";
import HeroSection from "@/components/sections/hero";
import PreOrderSection from "@/components/sections/pre-order";
import { WhyReadSection } from "@/components/sections/why-read";

const siteConfig = {
  title: `Pre-Order Dubai's Urban Evolution | Shashi S. Piptan`,
  description: `Sign up for early access to Dubai's Urban Evolution by Shashi S. Piptan — a powerful guide to infrastructure investment and future-ready urban development. Get launch updates and exclusive bonuses!`,
  author: "Shashi S. Piptan",
  keywords: [
    "Dubai",
    "Urban Evolution",
    "Infrastructure Investment",
    "Urban Development",
    "Pre-order",
    "Book",
  ],

  url: "http://www.infraguideuae.com",
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Dubai's Urban Evolution",
  author: {
    "@type": "Person",
    name: siteConfig.author,
  },
  description: siteConfig.description,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pre-booking cover image",
      },
    ],
    siteName: siteConfig.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.webp"],
    creator: "@shashipiptan",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "script:ld+json": JSON.stringify(jsonLd),
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AvailabilitySection />
      <AboutSection />
      <PreOrderSection />
      <AuthorSection />
      <WhyReadSection />
      <AvailabilitySection />
    </main>
  );
}
