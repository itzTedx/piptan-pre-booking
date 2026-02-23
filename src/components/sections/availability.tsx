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
				className="mb-4 text-center font-display text-xl"
				id="availability-title"
			>
				Available soon on:
			</h2>
			<ul
				aria-label="Where to buy Dubai's Urban Evolution"
				className="flex list-none flex-wrap items-center justify-center gap-3"
				itemScope
				itemType="https://schema.org/ItemList"
			>
				<li
					className="flex h-20 items-center justify-center rounded-xl bg-foreground/10 px-9 transition-colors hover:bg-foreground/15"
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<span className="sr-only" itemProp="name">
						Amazon Books
					</span>
					<Amazon aria-hidden="true" className="h-auto w-auto" />
				</li>
				<li
					className="flex h-20 items-center justify-center rounded-xl bg-foreground/10 px-9 transition-colors hover:bg-foreground/15"
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<span className="sr-only" itemProp="name">
						Amazon Kindle
					</span>
					<AmazonKindle aria-hidden="true" className="h-auto w-auto" />
				</li>
			</ul>
		</section>
	);
});

export default AvailabilitySection;
