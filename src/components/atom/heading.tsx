"use client";

import { TextAnimate } from "../animation/text-animate";

export const HeroHeading = () => {
	return (
		<div className="space-y-1">
			<TextAnimate
				animation="slideUp"
				as="h1"
				by="character"
				className="font-display font-light text-2xl md:text-4xl lg:text-[5rem]"
				id="hero-title"
			>
				Dubai&apos;s Urban Evolution
			</TextAnimate>
			<TextAnimate
				animation="slideUp"
				as="p"
				by="word"
				className="font-grotesk font-light text-lg text-muted-foreground md:text-xl"
				delay={0.15}
			>
				Launching Soon
			</TextAnimate>
		</div>
	);
};
