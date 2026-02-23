import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import { ShineBorder } from "../animation/shine-border";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const keywords = [
	"Vision",
	"Innovation",
	"Investment",
	"Capital",
	"Returns",
	"Planning",
	"Leadership",
] as const;

function AboutSection() {
	return (
		<section
			aria-labelledby="about-heading"
			className="relative pt-12 pb-20 md:pt-16 md:pb-40"
		>
			<div className="container max-w-7xl">
				<h2 className="font-bold font-grotesk text-4xl" id="about-heading">
					About the book
				</h2>
				<ul
					aria-label="Book topics"
					className="flex flex-wrap gap-1.5 py-6 md:gap-3"
				>
					{keywords.map((keyword) => (
						<li
							className="rounded-md bg-secondary px-2 py-1 font-grotesk text-secondary-foreground text-xs tracking-wider md:px-3 md:py-1.5 md:text-sm"
							key={keyword}
						>
							{keyword}
						</li>
					))}
				</ul>
				<Card
					aria-labelledby="about-heading"
					className="relative w-full max-w-3xl gap-4 overflow-hidden md:gap-5"
					role="article"
				>
					<ShineBorder shineColor={["#37D787", "#3CD08D", "#FFBE7B"]} />
					<CardHeader className="pb-0 text-[#37D787]">
						<p className="pb-2 tracking-wide md:pb-3">
							Unlock Dubai&apos;s Growth
						</p>
						<Separator />
						<CardTitle
							className="pt-2 font-display leading-tight md:pt-3"
							id="about-book-title"
						>
							The Urban Evolution of Dubai: A Blueprint for Infrastructure
							Investment
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm md:text-base">
						<p className="text-pretty leading-loose">
							This compelling guide offers a fresh perspective on how Dubai has
							quickly emerged as a global benchmark for innovation and urban
							advancement.
						</p>
						<p className="text-pretty leading-loose">
							It explores the city&apos;s journey through visionary leadership,
							strategic development, and precise execution. Merging thorough
							research with practical experience, it sheds light on crucial
							infrastructure initiatives, modern urban planning techniques, and
							investor-centric policies.
						</p>
						<p className="text-pretty pb-4 leading-loose">
							Designed for investors, developers, entrepreneurs, and
							decision-makers, this resource provides essential knowledge to
							navigate Dubai&apos;s promising market. Featuring expert insights
							throughout, it acts as a forward-thinking roadmap to the
							city&apos;s future growth and investment opportunities.
						</p>
						<Separator />
					</CardContent>
					<CardFooter>
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
									aria-label="Why read Dubai's Urban Evolution"
									href="#why-read-title"
								>
									Learn More
								</Link>
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
			<Image
				alt="3D mockup of Dubai's Urban Evolution: A Blueprint for Infrastructure Investment by Shashi S. Piptan"
				className="-z-10 object-contain object-left max-md:object-bottom md:object-cover"
				fill
				priority
				sizes="100vw"
				src="/book-mockup.webp"
			/>
		</section>
	);
}

export default memo(AboutSection);
