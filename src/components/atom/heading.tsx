"use client";

import { TextAnimate } from "../animation/text-animate";

export const HeroHeading = () => {
	return (
		<div className="space-y-1">
			<TextAnimate
				animation="slideUp"
				by="character"
				as="h1"
				id="hero-title"
				className="font-display text-2xl font-light md:text-4xl lg:text-[5rem]"
			>
				Dubai&apos;s Urban Evolution
			</TextAnimate>
			<TextAnimate
				animation="slideUp"
				by="word"
				as="p"
				className="font-grotesk text-lg font-light text-muted-foreground md:text-xl"
				delay={0.15}
			>
				Launching Soon
			</TextAnimate>
		</div>
	);
};
