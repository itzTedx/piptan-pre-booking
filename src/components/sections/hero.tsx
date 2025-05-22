import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export default function HeroSection() {
  const bookMetadata = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Dubai Urban Evolution",
    description:
      "Unlock the strategies that built one of the world's most dynamic cities.",
    image: "/cover.webp",
    author: {
      "@type": "Person",
      name: "Author Name", // Replace with actual author name
    },
  };

  return (
    <section
      itemScope
      itemType="https://schema.org/Book"
      className="relative min-h-screen pt-12"
      aria-label="Book launch announcement"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookMetadata) }}
      />
      <div className="relative container grid grid-cols-1 gap-3 pt-20 lg:grid-cols-3 lg:pt-36">
        <header className="s absolute inset-x-0 top-9 text-center lg:top-24">
          <h1
            className="font-display text-2xl font-light md:text-4xl lg:text-8xl"
            itemProp="name"
          >
            Launching Soon
          </h1>
        </header>
        <div className="md:self-end lg:pb-28">
          <h2
            className="font-grotesk text-3xl max-lg:text-center md:text-4xl/11"
            itemProp="alternativeHeadline"
          >
            Discover the visionary strategies behind one of the world&apos;s
            most iconic and dynamic cities.
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
                  fetchPriority="high"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                  itemProp="image"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4bHRsbHiUgJSgwVz1AMkE1QkhYWE9eSVJMYklWWl1fZGRxc359g3NgfWZ1a19n/9j/"
                />
              </div>
            </div>
            <div className="left-side" aria-hidden="true">
              <Image
                src="/side.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="50px"
                quality={75}
              />
            </div>
          </article>
        </div>
        <div className="self-end pb-28">
          <p className="font-grotesk text-lg" itemProp="description">
            Explore Dubai&apos;s transformation through expert insights and
            proven strategies for investors seeking high returns in real estate,
            infrastructure, and urban development. Your roadmap starts here!
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="secondary" asChild>
              <Link href="#pre-order" aria-label="Pre-order the book now">
                Pre-Order Now
              </Link>
            </Button>
            <Button variant="link" aria-label="Learn more about the book">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <picture>
        <source srcSet="/due-bg.webp" type="image/webp" />
        <Image
          src="/due-bg.jpg"
          alt=""
          fill
          fetchPriority="low"
          className="-z-20 object-cover opacity-20"
          sizes="100vw"
          quality={60}
          loading="lazy"
          aria-hidden="true"
        />
      </picture>
      <div className="from-background to-background/0 absolute bottom-0 -z-10 h-1/2 w-full bg-gradient-to-t" />
    </section>
  );
}
