import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { bookSchema } from "@/lib/site-config";

import { TextAnimate } from "../animation/text-animate";
import { HeroHeading } from "../atom/heading";
import { Button } from "../ui/button";

export default function HeroSection() {
	return (
		<section
			aria-labelledby="hero-title"
			className="relative min-h-screen pt-12 pb-28"
			itemScope
			itemType="https://schema.org/Book"
		>
			<Script type="application/ld+json">{JSON.stringify(bookSchema)}</Script>
			<div className="container relative grid grid-cols-1 gap-3 pt-20 lg:grid-cols-3 lg:pt-28">
				<header className="absolute inset-x-0 top-9 text-center lg:top-16">
					<HeroHeading />
				</header>
				<div className="md:self-end lg:pb-10">
					<TextAnimate
						animation="fadeIn"
						as="h2"
						by="line"
						className="font-grotesk text-3xl max-lg:text-center md:text-4xl/11"
						delay={0.3}
						once
					>
						{`Discover the visionary\n\nstrategies behind one of the\n\nworld's most iconic and dynamic cities.`}
					</TextAnimate>
				</div>
				<figure aria-label="Book cover preview" className="book-container">
					<article className="book" role="presentation">
						<div className="front">
							<div className="cover">
								<Image
									alt="Dubai's Urban Evolution book cover, gold edition"
									className="gold-cover z-10 object-cover"
									fill
									itemProp="image"
									priority
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
									src="/gold-cover.webp"
								/>
								<Image
									alt="Dubai's Urban Evolution by Shashi S. Piptan — book cover"
									className="object-cover"
									fill
									itemProp="image"
									priority
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
									src="/cover.webp"
								/>
							</div>
						</div>
						<div aria-hidden="true" className="left-side">
							<Image
								alt=""
								className="object-cover"
								fill
								priority
								sizes="50px"
								src="/side.webp"
							/>
						</div>
					</article>
				</figure>
				<div className="z-10 self-end pb-10">
					<TextAnimate
						animation="fadeIn"
						as="p"
						by="line"
						className="font-grotesk text-lg"
						delay={0.4}
						once
					>
						{`Explore Dubai's transformation through expert insights\n\nand proven strategies for investors seeking high returns\n\nin real estate, infrastructure, and urban development.\n\nYour roadmap starts here!`}
					</TextAnimate>
					<div className="flex items-center gap-6 pt-4">
						<Button asChild variant="secondary">
							<Link
								aria-label="Pre-order Dubai's Urban Evolution"
								href="#pre-order"
							>
								Pre-Order Now
							</Link>
						</Button>
						<Button asChild variant="link">
							<Link
								aria-label="Learn more about the book"
								href="#about-heading"
							>
								Learn More
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<picture>
				<source srcSet="/due-bg.webp" type="image/webp" />
				<Image
					alt=""
					aria-hidden="true"
					className="-z-20 object-cover opacity-20"
					fill
					loading="lazy"
					sizes="100vw"
					src="/due-bg.jpg"
				/>
			</picture>
			<div className="absolute bottom-0 -z-10 h-1/2 w-full bg-linear-to-t from-background to-background/0" />
		</section>
	);
}
