import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@/assets/icons";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-foreground/10 border-t py-4" role="contentinfo">
      <div className="container flex flex-wrap items-center justify-between">
        <nav aria-label="Footer Navigation">
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>

        <p>
          © {currentYear}, Piptan Investment & Securities, All rights reserved
        </p>

        <nav aria-label="Social Media Links">
          <ul className="text-foreground flex items-center gap-4">
            <li>
              <Link
                href="https://facebook.com/shashi-piptan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="hover:text-primary transition-colors"
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
                className="hover:text-primary transition-colors"
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
                className="hover:text-primary transition-colors"
              >
                <IconBrandLinkedin className="size-8" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
