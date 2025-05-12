import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";

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
    <main className="min-h-screen pt-4">
      <section className="relative container grid grid-cols-3 gap-3 pt-12">
        <header className="absolute inset-x-0 text-center">
          <h1 className="font-display text-8xl font-light">New Launch</h1>
        </header>
        <div className="self-end">
          <p className="font-grotesk text-4xl/11">
            {`Discover the visionary strategies behind one of the world's most
            dynamic cities.`}
          </p>
        </div>
        <div className="book-container" aria-label="Book preview">
          <article className="book" role="presentation">
            <div className="front">
              <div className="cover">
                <Image
                  src="/cover.webp"
                  alt="Book cover preview"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="left-side" aria-hidden="true">
              <Image src="/side.jpg" alt="" fill priority />
            </div>
          </article>
        </div>
        <div className="self-end">
          <p className="font-grotesk text-lg">
            Unlock the strategies that built one of the world’s most dynamic
            cities. Be the first to know when the book launches on Amazon!
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="secondary">Pre-Order Now</Button>
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
