/** Single source of truth for SEO and site metadata. */

export const siteConfig = {
	title: "Pre-Order Dubai's Urban Evolution | Shashi S. Piptan",
	description:
		"Sign up for early access to Dubai's Urban Evolution by Shashi S. Piptan — a powerful guide to infrastructure investment and future-ready urban development. Get launch updates and exclusive bonuses!",
	author: "Shashi S. Piptan",
	applicationName: "Infra Guide UAE",
	keywords: [
		"Dubai",
		"Urban Evolution",
		"Infrastructure Investment",
		"Urban Development",
		"Pre-order",
		"Book",
		"Shashi Piptan",
		"UAE infrastructure",
	] as string[],
	url: "https://www.infraguideuae.com",
	twitterHandle: "@shashipiptan",
	locale: "en_US",
};

/** Book schema for JSON-LD (single place for name/description). */
export const bookSchema = {
	"@context": "https://schema.org" as const,
	"@type": "Book" as const,
	name: "Dubai's Urban Evolution",
	description: siteConfig.description,
	url: siteConfig.url,
	image: `${siteConfig.url}/cover.webp`,
	author: {
		"@type": "Person" as const,
		name: siteConfig.author,
	},
	inLanguage: siteConfig.locale,
};
