import Link from "next/link";
import { memo } from "react";

import ExportedImage from "next-image-export-optimizer";

import { ShineBorder } from "../animation/shine-border";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const keywords = [
  "Vision",
  "Innovation",
  "Investment",
  "Capital",
  "Returns",
  "Planning",
  "Leadership",
] as const;

function AboutSection() {
  return (
    <section
      className="relative pt-12 pb-20 md:pt-16 md:pb-40"
      aria-labelledby="about-heading"
    >
      <div className="container max-w-7xl">
        <h2 id="about-heading" className="font-grotesk text-4xl font-bold">
          About the book
        </h2>
        <ul
          className="flex flex-wrap gap-1.5 py-6 md:gap-3"
          aria-label="Book topics"
        >
          {keywords.map((keyword) => (
            <li
              key={keyword}
              className="bg-secondary text-secondary-foreground font-grotesk rounded-md px-2 py-1 text-xs tracking-wider md:px-3 md:py-1.5 md:text-sm"
            >
              {keyword}
            </li>
          ))}
        </ul>
        <Card className="relative w-full max-w-3xl gap-4 overflow-hidden md:gap-5">
          <ShineBorder shineColor={["#37D787", "#3CD08D", "#FFBE7B"]} />
          <CardHeader className="pb-0 text-[#37D787]">
            <p className="pb-2 tracking-wide md:pb-3">
              Unlock Dubai&apos; Growth
            </p>
            <Separator />
            <CardTitle className="font-display pt-2 leading-tight md:pt-3">
              The Urban Evolution of Dubai: A Blueprint for Infrastructure
              Investment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm md:text-base">
            <p className="leading-loose text-pretty">
              is compelling guide offers a fresh perspective on how Dubai has
              quickly emerged as a global benchmark for innovation and urban
              advancement.
            </p>
            <p className="leading-loose text-pretty">
              It explores the city&apos;s journey through visionary leadership,
              strategic development, and precise execution. Merging thorough
              research with practical experience, it sheds light on crucial
              infrastructure initiatives, modern urban planning techniques, and
              investor-centric policies.
            </p>
            <p className="pb-4 leading-loose text-pretty">
              Designed for investors, developers, entrepreneurs, and
              decision-makers, this resource provides essential knowledge to
              navigate Dubai&apos;s promising market. Featuring expert insights
              throughout, it acts as a forward-thinking roadmap to the
              city&apos;s future growth and investment opportunities.
            </p>
            <Separator />
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-6 pt-4">
              <Button variant="secondary" asChild>
                <Link href="#pre-order">Pre-Order Now</Link>
              </Button>
              <Button variant="link" aria-label="Learn more about the book">
                Learn More
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <ExportedImage
        src="/book-mockup.webp"
        alt="3D mockup of the book 'Blueprint for Infrastructure Investment'"
        className="-z-10 object-contain object-left max-md:object-bottom md:object-cover"
        fill
        priority
        sizes="100vw"
      />
    </section>
  );
}

export default memo(AboutSection);
