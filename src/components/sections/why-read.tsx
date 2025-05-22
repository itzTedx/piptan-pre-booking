"use client";

import Image from "next/image";
import React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const WhyReadSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <section
      className="container max-w-6xl py-8"
      aria-labelledby="why-read-title"
    >
      <h2
        id="why-read-title"
        className="font-display pb-9 text-3xl leading-snug text-balance md:text-4xl"
      >
        What makes{" "}
        <span className="text-[#37D787]">
          {" "}
          &ldquo;The Urban Evolution of Dubai: A Blueprint for Infrastructure
          Investment&quot;
        </span>{" "}
        an Essential Read!
      </h2>
      <div
        className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 md:gap-12"
        role="list"
      >
        <ul
          className="list-disc space-y-4 pl-6 leading-relaxed font-light"
          role="list"
        >
          <li>
            <span className="font-semibold">Investment-Focused Insights</span> -
            Learn where the real opportunities for high returns lie in
            Dubai&apos;s evolving infrastructure landscape.
          </li>
          <li>
            <span className="font-semibold">Expert Contributions</span> - Gain
            perspectives from industry leaders, real estate professionals, and
            urban planners actively shaping Dubai&apos;s future.
          </li>
          <li>
            <span className="font-semibold">Data-Driven Analysis</span> -
            Explore well-researched case studies, statistics, and trends that
            drive smart investment decisions.
          </li>
        </ul>
        <ul
          className="list-disc space-y-4 pl-6 leading-relaxed font-light"
          role="list"
        >
          <li>
            <span className="font-semibold">Covers Regulatory Frameworks</span>{" "}
            - Navigate Dubai&apos;s investor-friendly policies, legal systems,
            and development codes with clarity.
          </li>
          <li>
            <span className="font-semibold">Future-Ready Forecasts</span> -
            Discover what&apos;s next for Dubai and where new growth corridors
            and emerging sectors are headed.
          </li>
          <li>
            <span className="font-semibold">Written by a Seasoned Insider</span>{" "}
            - Authored by a global investment advisor with firsthand experience
            in infrastructure and corporate liaisoning.
          </li>
        </ul>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full rounded-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-16/8 p-1">
                <Image
                  src="/dubai-museum.webp"
                  alt="Dubai Museum showcasing the city's architectural and cultural evolution"
                  fill
                  className="rounded-2xl border object-cover shadow-2xl"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
