import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
	return (
		<header className="fixed top-0 z-50 w-full">
			<div
				aria-hidden="true"
				className="absolute z-10 h-full w-full bg-linear-to-b from-background to-background/0"
			/>
			<nav
				aria-label="Main navigation"
				className="items-center-safe container relative z-50 flex justify-between py-4"
			>
				<Link
					aria-label="Infra Guide UAE — home"
					className="flex items-center"
					href="/"
				>
					<Logo className="size-auto md:size-20" />
				</Link>
				<Button asChild variant="secondary">
					<Link
						aria-label="Pre-order Dubai's Urban Evolution"
						href="#pre-order"
					>
						Pre-Order Now
					</Link>
				</Button>
			</nav>
			<div className="gradient-blur">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</header>
	);
};
