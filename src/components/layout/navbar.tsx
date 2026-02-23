import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
	return (
		<header className="fixed top-0 z-50 w-full">
			<div
				className="from-background to-background/0 absolute z-10 h-full w-full bg-linear-to-b"
				aria-hidden="true"
			/>
			<nav
				className="relative z-50 container flex items-center-safe justify-between py-4"
				aria-label="Main navigation"
			>
				<Link
					href="/"
					className="flex items-center"
					aria-label="Infra Guide UAE — home"
				>
					<Logo className="size-auto md:size-20" />
				</Link>
				<Button variant="secondary" asChild>
					<Link
						href="#pre-order"
						aria-label="Pre-order Dubai's Urban Evolution"
					>
						Pre-Order Now
					</Link>
				</Button>
			</nav>
			<div className="gradient-blur">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</header>
	);
};
