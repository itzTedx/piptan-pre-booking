import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@/assets/icons";
import { Logo } from "@/assets/logo";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer
      className="text-primary container max-w-7xl rounded-t-4xl bg-black px-12 shadow-2xl"
      role="contentinfo"
    >
      <div className="flex items-center justify-between gap-4 pt-12 pb-4">
        <Logo className="text-foreground" />
        <p className="text-muted-foreground/75 text-sm">
          Developed by{" "}
          <Link
            href="https://www.zironmedia.com"
            target="_blank"
            className="font-semibold hover:underline"
            aria-label="Website Developed by Ziron media"
          >
            Ziron media
          </Link>
        </p>
        <nav aria-label="Social Media Links">
          <ul className="text-primary flex items-center gap-4">
            <li>
              <Link
                href="https://facebook.com/shashi-piptan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="transition-colors hover:text-green-900"
              >
                <IconBrandFacebook className="size-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/shashi-piptan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="transition-colors hover:text-green-900"
              >
                <IconBrandInstagram className="size-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/company/shashi-piptan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="transition-colors hover:text-green-900"
              >
                <IconBrandLinkedin className="size-8" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-primary/20 flex flex-wrap items-center justify-between border-t py-2">
        <p className="text-xs">
          © {currentYear}, Piptan Investment & Securities, All rights reserved
        </p>
        <nav aria-label="Footer Navigation">
          <Link
            href="/privacy"
            className="text-sm transition-colors hover:text-green-900"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};
