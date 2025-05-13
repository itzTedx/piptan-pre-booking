import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section
      itemScope
      itemType="https://schema.org/Book"
      className="relative min-h-screen pt-12"
      aria-label="Book launch announcement"
    >
      <div className="relative container grid grid-cols-1 gap-3 pt-28 md:grid-cols-3 md:pt-36">
        <header className="absolute inset-x-0 top-24 hidden text-center md:block">
          <h1 className="font-display font-light md:text-8xl" itemProp="name">
            New Launch
          </h1>
        </header>
        <div className="md:self-end md:pb-28">
          <h2
            className="font-grotesk text-3xl md:text-4xl/11"
            itemProp="alternativeHeadline"
          >
            Discover the visionary strategies behind one of the world&apos;s
            most dynamic cities.
          </h2>
        </div>
        <div className="book-container" aria-label="Book preview">
          <article className="book" role="presentation">
            <div className="front">
              <div className="cover">
                <Image
                  src="/cover.webp"
                  alt="Dubai Urban Development Strategy Book Cover"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  itemProp="image"
                  quality={100}
                />
              </div>
            </div>
            <div className="left-side" aria-hidden="true">
              <Image
                src="/side.webp"
                alt="Book side view"
                fill
                priority
                className="object-cover"
                sizes="50px"
              />
            </div>
          </article>
        </div>
        <div className="self-end pb-28">
          <p className="font-grotesk text-lg" itemProp="description">
            Unlock the strategies that built one of the world&apos;s most
            dynamic cities. Be the first to know when the book launches on
            Amazon!
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="secondary" asChild>
              <Link href="#pre-order">Pre-Order Now</Link>
            </Button>
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </div>
      <Image
        src="/due-bg.webp"
        alt="Dubai cityscape background"
        fill
        priority={false}
        className="-z-20 object-cover opacity-20"
        sizes="100vw"
        quality={75}
        loading="lazy"
      />
      <div className="from-background to-background/0 absolute bottom-0 -z-10 h-1/2 w-full bg-gradient-to-t" />
    </section>
  );
}
