import type { Metadata, Viewport } from "next";

import { excrallik, plusJakarta, radioGrostek } from "@/assets/fonts";
import BreakpointIndicator from "@/components/breakpoin-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Piptan Book" />
      </head>
      <body
        className={cn(
          plusJakarta.className,
          excrallik.variable,
          radioGrostek.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <BreakpointIndicator />
      </body>
    </html>
  );
}
