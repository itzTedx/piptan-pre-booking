"use client";

import React from "react";

import Image from "next/image";

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
			aria-labelledby="why-read-title"
			className="container max-w-6xl py-8"
		>
			<h2
				className="text-balance pb-9 font-display text-3xl leading-snug md:text-4xl"
				id="why-read-title"
			>
				What makes{" "}
				<span className="text-[#37D787]">
					{" "}
					&ldquo;The Urban Evolution of Dubai: A Blueprint for Infrastructure
					Investment&quot;
				</span>{" "}
				an Essential Read!
			</h2>
			<div className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 md:gap-12">
				<ul
					aria-label="Reasons to read: insights and expertise"
					className="list-disc space-y-4 pl-6 font-light leading-relaxed"
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
					aria-label="Reasons to read: frameworks and author"
					className="list-disc space-y-4 pl-6 font-light leading-relaxed"
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
				className="w-full rounded-2xl"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				opts={{
					align: "start",
					loop: true,
				}}
				plugins={[plugin.current]}
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={`carousel-item-${index + 1}`}>
							<div className="relative aspect-16/8 p-1">
								<Image
									alt="Dubai Museum showcasing the city's architectural and cultural evolution"
									className="rounded-2xl border object-cover shadow-2xl"
									fill
									sizes="(max-width: 768px) 100vw, 1200px"
									src="/dubai-museum.webp"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};
