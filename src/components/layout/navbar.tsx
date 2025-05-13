import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className="from-background to-background/0 absolute h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <nav
        className="relative z-50 container flex items-center-safe justify-between py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <Logo className="size-auto md:size-28" />
        </Link>
        <Button variant="secondary" asChild aria-label="Pre-order the book now">
          <Link href="#pre-order">Pre-Order Now</Link>
        </Button>
      </nav>
    </header>
  );
};
