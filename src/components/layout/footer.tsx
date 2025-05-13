import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@/assets/icons";

export const Footer = () => {
  return (
    <footer className="bg-foreground/10 container flex items-center justify-between border-t py-4">
      <Link href="/privacy">Privacy Policy</Link>

      <p>© {new Date().getFullYear()}, Shashi Piptan, All rights reserved</p>

      <ul className="text-foreground flex items-center gap-4">
        <li>
          <IconBrandFacebook className="size-8" />
        </li>
        <li>
          <IconBrandInstagram className="size-8" />
        </li>
        <li>
          <IconBrandLinkedin className="size-8" />
        </li>
      </ul>
    </footer>
  );
};
