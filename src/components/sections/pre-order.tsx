import Image from "next/image";

import { PreOrderForm } from "../form/pre-order-form";

export default function PreOrderSection() {
	return (
		<section
			aria-describedby="pre-order-description"
			aria-labelledby="pre-order-heading"
			className="grid scroll-mt-20 grid-cols-1 bg-foreground text-background md:grid-cols-2"
			id="pre-order"
		>
			<div className="relative max-md:aspect-video">
				<Image
					alt="Burj Khalifa and Dubai skyline — backdrop for pre-order signup"
					className="object-cover"
					fill
					loading="eager"
					priority
					sizes="(max-width: 768px) 100vw, 50vw"
					src="/burj-khalifa.webp"
				/>
			</div>
			<div className="p-12 lg:px-24 lg:py-40">
				<h2
					className="font-display text-3xl leading-normal md:text-4xl lg:text-5xl"
					id="pre-order-heading"
				>
					Stay Updated on the Launch!
				</h2>
				<p
					className="mt-2 font-grotesk font-light md:text-xl md:leading-snug"
					id="pre-order-description"
				>
					Submit your email to be notified when Dubai&apos;s Urban Evolution by
					Shashi S. Piptan is available on Amazon.
				</p>
				<PreOrderForm />
			</div>
		</section>
	);
}
