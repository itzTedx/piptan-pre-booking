import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="from-background to-background/0 absolute h-full w-full bg-gradient-to-b" />
      <div className="relative z-50 container flex items-center-safe justify-between py-4">
        <Logo className="size-auto md:size-28" />
        <Button variant="secondary" asChild>
          <Link href="#pre-order">Pre-Order Now</Link>
        </Button>
      </div>
    </nav>
  );
};
