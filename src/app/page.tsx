import type { Metadata } from "next";
import AboutSection from "@/components/sections/about";
import { AuthorSection } from "@/components/sections/author";
import AvailabilitySection from "@/components/sections/availability";
import HeroSection from "@/components/sections/hero";
import PreOrderSection from "@/components/sections/pre-order";
import { WhyReadSection } from "@/components/sections/why-read";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [{ name: siteConfig.author }],
	applicationName: siteConfig.applicationName,
	openGraph: {
		url: siteConfig.url,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
		images: [
			{
				url: "/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Pre-order Dubai's Urban Evolution — Infra Guide UAE",
			},
		],
		siteName: siteConfig.applicationName,
		locale: siteConfig.locale,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: ["/og-image.webp"],
		creator: siteConfig.twitterHandle,
	},
	alternates: {
		canonical: siteConfig.url,
	},
	verification: {
		google: "E-Yn2lkxHja71MauCBAt0O7Oob8zKAs0yRKnSaV29fs",
	},
};

export default function Home() {
	return (
		<main id="main-content" className="flex min-h-screen flex-col">
			<HeroSection />
			<AvailabilitySection />
			<AboutSection />
			<PreOrderSection />
			<AuthorSection />
			<WhyReadSection />
			<AvailabilitySection />
		</main>
	);
}
