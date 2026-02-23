import { memo } from "react";

import { Amazon, AmazonKindle } from "@/assets/brand-logos";

const AvailabilitySection = memo(function AvailabilitySection() {
	return (
		<section
			aria-labelledby="availability-title"
			className="pt-6 pb-20"
			id="availability"
		>
			<h2
				id="availability-title"
				className="font-display mb-4 text-center text-xl"
			>
				Available soon on:
			</h2>
			<ul
				className="flex flex-wrap items-center justify-center gap-3 list-none"
				aria-label="Where to buy Dubai's Urban Evolution"
				itemScope
				itemType="https://schema.org/ItemList"
			>
				<li
					className="bg-foreground/10 hover:bg-foreground/15 flex h-20 items-center justify-center rounded-xl px-9 transition-colors"
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<span itemProp="name" className="sr-only">
						Amazon Books
					</span>
					<Amazon aria-hidden="true" className="h-auto w-auto" />
				</li>
				<li
					className="bg-foreground/10 hover:bg-foreground/15 flex h-20 items-center justify-center rounded-xl px-9 transition-colors"
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<span itemProp="name" className="sr-only">
						Amazon Kindle
					</span>
					<AmazonKindle aria-hidden="true" className="h-auto w-auto" />
				</li>
			</ul>
		</section>
	);
});

export default AvailabilitySection;
