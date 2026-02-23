import Image from "next/image";

import { Separator } from "../ui/separator";

export const AuthorSection = () => {
	return (
		<section
			aria-labelledby="author-section-title"
			className="grid py-20 md:grid-cols-12"
			itemProp="author"
			itemScope
			itemType="https://schema.org/Person"
		>
			<div className="py-12 md:col-span-6 lg:col-span-8">
				<div className="container relative space-y-4 bg-foreground/5 py-9">
					<div className="grid w-full gap-4 max-md:grid-cols-2">
						<div className="space-y-4">
							<h2
								className="font-grotesk text-[#37D787] text-xl md:text-2xl"
								id="author-section-title"
							>
								From the Author&apos;s Desk
							</h2>
							<Separator />
							<p
								className="font-display text-3xl text-[#37D787] leading-tight md:hidden"
								itemProp="name"
							>
								Shashi S. Piptan
							</p>
						</div>
						<div className="absolute -top-20 right-0 aspect-4/5 w-1/2 md:hidden">
							<Image
								alt="Shashi S. Piptan, author of Dubai's Urban Evolution — Global Investment Advisor and Infrastructure Strategist"
								className="object-cover"
								fill
								sizes="(max-width: 768px) 50vw, 0vw"
								src="/shashi.webp"
							/>
						</div>
					</div>
					<p className="relative z-10 font-display text-[#37D787] leading-tight md:text-3xl lg:text-4xl">
						<span className="hidden md:inline-block" itemProp="name">
							Shashi S. Piptan:
						</span>{" "}
						<span itemProp="jobTitle">
							A Global Investment Advisor, Infrastructure Strategist.
						</span>
					</p>
					<div className="space-y-3 font-light text-sm md:space-y-4 lg:text-base">
						<p className="text-pretty leading-loose">
							Shashi S. Piptan is a seasoned Global Investment Advisor with a
							sharp focus on infrastructure development, real estate strategy,
							and international business growth. With over a decade of
							experience in corporate liaising and infrastructural negotiation,
							Shashi has successfully advised governments, multinational
							corporations, and private investors on high-stakes projects across
							the Middle East, Asia, and Europe.
						</p>
						<p className="text-pretty leading-loose">
							Known for his strategic insight and practical approach, Shashi
							specializes in identifying emerging opportunities in rapidly
							growing markets—particularly Dubai, where his work has contributed
							to unlocking high-return investments in real estate and urban
							development. His ability to bridge the gap between visionary
							planning and on-ground execution has made him a trusted name in
							the global investment community.
						</p>
						<p className="text-pretty leading-loose">
							Shashi&apos;s deep understanding of market dynamics, regulatory
							frameworks, and future-ready infrastructure makes him uniquely
							positioned to guide investors through complex landscapes. His
							hands-on experience and expansive network enable him to create
							value-driven strategies that align with both commercial goals and
							long-term sustainability.
						</p>
						<p>
							As the author of The Urban Evolution of Dubai: A Blueprint for
							Infrastructure Investment, Shashi brings together his years of
							field expertise, offering readers an actionable roadmap to one of
							the world&apos;s most dynamic investment destinations.
						</p>
					</div>
				</div>
			</div>
			<div className="relative col-span-6 hidden md:block lg:col-span-4">
				<Image
					alt="Shashi S. Piptan, author of Dubai's Urban Evolution — portrait"
					className="object-cover"
					fill
					priority
					sizes="(min-width: 768px) 33vw, 0vw"
					src="/shashi.webp"
				/>
			</div>
		</section>
	);
};
