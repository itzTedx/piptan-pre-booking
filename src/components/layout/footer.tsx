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
    <footer
      className="text-primary container max-w-7xl rounded-t-4xl bg-black shadow-2xl md:px-12"
      role="contentinfo"
    >
      <div className="grid grid-cols-3 gap-4 pt-12 pb-4">
        <Logo className="text-foreground" />

        <nav aria-label="Social Media Links" className="justify-self-center">
          <ul className="text-primary flex items-center gap-4">
            <li>
              <Link
                href="https://facebook.com/shashi-piptan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="transition-colors hover:text-green-500"
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
                className="transition-colors hover:text-green-500"
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
                className="transition-colors hover:text-green-500"
              >
                <IconBrandLinkedin className="size-8" />
              </Link>
            </li>
          </ul>
        </nav>
        <ScrollToTop />
      </div>

      <div className="border-primary/20 grid grid-cols-1 items-center border-t py-2 md:grid-cols-3">
        <p className="text-xs max-md:order-3 max-md:pb-1 max-md:text-center">
          © {currentYear}, Piptan Investment & Securities, All rights reserved
        </p>
        <p className="text-muted-foreground/75 text-center text-sm">
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
        <nav aria-label="Footer Navigation" className="text-center md:text-end">
          <Link
            href="/privacy"
            className="text-sm transition-colors hover:text-green-500"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};
