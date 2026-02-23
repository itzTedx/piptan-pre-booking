import Link from "next/link";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
} from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { ScrollToTop } from "./scroll-to-top";

const currentYear = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="container max-w-7xl rounded-t-4xl bg-black text-primary shadow-2xl md:px-12">
			<div className="grid grid-cols-3 gap-4 pt-12 pb-4">
				<Link
					aria-label="Infra Guide UAE — home"
					className="text-foreground"
					href="/"
				>
					<Logo className="text-foreground" />
				</Link>

				<nav aria-label="Social Media Links" className="justify-self-center">
					<ul className="flex items-center gap-4 text-primary">
						<li>
							<Link
								aria-label="Visit our Facebook page"
								className="transition-colors hover:text-green-500"
								href="https://facebook.com/shashi-piptan"
								rel="noopener noreferrer"
								target="_blank"
							>
								<IconBrandFacebook className="size-8" />
							</Link>
						</li>
						<li>
							<Link
								aria-label="Visit our Instagram profile"
								className="transition-colors hover:text-green-500"
								href="https://instagram.com/shashi-piptan"
								rel="noopener noreferrer"
								target="_blank"
							>
								<IconBrandInstagram className="size-8" />
							</Link>
						</li>
						<li>
							<Link
								aria-label="Visit our LinkedIn page"
								className="transition-colors hover:text-green-500"
								href="https://linkedin.com/company/shashi-piptan"
								rel="noopener noreferrer"
								target="_blank"
							>
								<IconBrandLinkedin className="size-8" />
							</Link>
						</li>
					</ul>
				</nav>
				<ScrollToTop />
			</div>

			<div className="grid grid-cols-1 items-center border-primary/20 border-t py-2 md:grid-cols-3">
				<p className="text-xs max-md:order-3 max-md:pb-1 max-md:text-center">
					© {currentYear}, Piptan Investment & Securities, All rights reserved
				</p>
				<p className="text-center text-muted-foreground/75 text-sm">
					Developed by{" "}
					<Link
						aria-label="Website Developed by Ziron media"
						className="font-semibold hover:underline"
						href="https://www.zironmedia.com"
						target="_blank"
					>
						Ziron media
					</Link>
				</p>
				<nav aria-label="Footer navigation" className="text-center md:text-end">
					<Link
						className="text-sm transition-colors hover:text-green-500"
						href="/privacy"
						title="Read our privacy policy"
					>
						Privacy Policy
					</Link>
				</nav>
			</div>
		</footer>
	);
};
