import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";

import { TextAnimate } from "../animation/text-animate";
import { HeroHeading } from "../atom/heading";
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
      name: "Shashi S. Piptan",
    },
  };

  return (
    <section
      itemScope
      itemType="https://schema.org/Book"
      className="relative min-h-screen pt-12 pb-28"
      aria-label="Book launch announcement"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookMetadata) }}
      />
      <div className="relative container grid grid-cols-1 gap-3 pt-20 lg:grid-cols-3 lg:pt-28">
        <header className="s absolute inset-x-0 top-9 text-center lg:top-16">
          <HeroHeading />
        </header>
        <div className="md:self-end lg:pb-10">
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="h2"
            className="font-grotesk text-3xl max-lg:text-center md:text-4xl/11"
            delay={0.3}
            once
          >
            {`Discover the visionary\n\nstrategies behind one of the\n\nworld's most iconic and dynamic cities.`}
          </TextAnimate>
          {/* <h2
            className="font-grotesk text-3xl max-lg:text-center md:text-4xl/11"
            itemProp="alternativeHeadline"
          >
            Discover the visionary strategies behind one of the world&apos;s
            most iconic and dynamic cities.
          </h2> */}
        </div>
        <div className="book-container" aria-label="Book preview">
          <article className="book" role="presentation">
            <div className="front">
              <div className="cover">
                <ExportedImage
                  src="/gold-cover.webp"
                  alt="Dubai Urban Development Strategy Book Cover"
                  fill
                  priority
                  fetchPriority="high"
                  className="gold-cover z-10 object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                  itemProp="image"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4bHRsbHiUgJSgwVz1AMkE1QkhYWE9eSVJMYklWWl1fZGRxc359g3NgfWZ1a19n/9j/"
                />
                <ExportedImage
                  src="/cover.webp"
                  alt="Dubai Urban Development Strategy Book Cover"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                  itemProp="image"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4bHRsbHiUgJSgwVz1AMkE1QkhYWE9eSVJMYklWWl1fZGRxc359g3NgfWZ1a19n/9j/"
                />
              </div>
            </div>
            <div className="left-side" aria-hidden="true">
              <ExportedImage
                src="/side.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="50px"
              />
            </div>
          </article>
        </div>
        <div className="z-10 self-end pb-10">
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="font-grotesk text-lg"
            delay={0.4}
            once
          >
            {`Explore Dubai's transformation through expert insights\n\nand proven strategies for investors seeking high returns\n\nin real estate, infrastructure, and urban development.\n\nYour roadmap starts here!`}
          </TextAnimate>
          {/* <p className="font-grotesk text-lg" itemProp="description">
            Explore Dubai&apos;s transformation through expert insights and
            proven strategies for investors seeking high returns in real estate,
            infrastructure, and urban development. Your roadmap starts here!
          </p> */}
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
        <ExportedImage
          src="/due-bg.jpg"
          alt=""
          fill
          fetchPriority="low"
          className="-z-20 object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
          aria-hidden="true"
        />
      </picture>
      <div className="from-background to-background/0 absolute bottom-0 -z-10 h-1/2 w-full bg-gradient-to-t" />
    </section>
  );
}
