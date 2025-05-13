import { Metadata } from "next";

import AboutSection from "@/components/sections/about";
import { AuthorSection } from "@/components/sections/author";
import AvailabilitySection from "@/components/sections/availability";
import HeroSection from "@/components/sections/hero";
import PreOrderSection from "@/components/sections/pre-order";

const siteConfig = {
  title: `Pre-Order Dubai's Urban Evolution | Shashi P. Piptan`,
  description: `ign up for early access to Dubai's Urban Evolution by Shashi P. Piptan — a powerful guide to infrastructure investment and future-ready urban development. Get launch updates and exclusive bonuses!`,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Pre-booking cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/cover.jpg"],
  },
  metadataBase: new URL("https://shashipiptan.com"),
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AvailabilitySection />
      <AboutSection />
      <PreOrderSection />
      <AuthorSection />
    </main>
  );
}
