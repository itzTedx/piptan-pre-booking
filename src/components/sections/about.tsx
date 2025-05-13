import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

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
  "Dubai",
  "Investment",
  "Infrastructure",
  "Growth",
  "Strategy",
  "Development",
  "Urbanism",
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
        <Card className="max-w-3xl gap-4 md:gap-5">
          <CardHeader className="pb-0 text-[#37D787]">
            <p className="font-display pb-2 tracking-wide md:pb-3">
              Blueprints for the Future
            </p>
            <Separator />
            <CardTitle className="pt-2 leading-8 md:pt-3">
              The Urban Evolution of Dubai
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm md:text-base">
            <p className="leading-loose text-pretty">
              A Blueprint for Infrastructure Investment offers a timely guide to
              Dubai&apos;s transformation into a global hub. Written by Global
              Investment Advisor Shashi Piptan, it reveals the vision, planning,
              and execution behind the city&apos;s rise, blending deep research
              with practical insights.
            </p>
            <p className="leading-loose text-pretty">
              The book explores strategic infrastructure investments, urban
              planning, and regulatory frameworks that attract global investors,
              providing actionable knowledge for developers, investors,
              entrepreneurs, and policymakers.
            </p>
            <p className="pb-4 leading-loose text-pretty">
              With expert contributions, it not only charts Dubai&apos;s growth
              but highlights future opportunities. More than a book, it&apos;s
              an essential roadmap for anyone looking to invest in Dubai&apos;s
              dynamic future.
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
      <Image
        src="/book-mockup.webp"
        alt="3D mockup of the book 'Blueprint for Infrastructure Investment'"
        className="-z-10 object-contain object-left max-md:object-bottom md:object-cover"
        fill
        priority
        sizes="100vw"
        quality={100}
      />
    </section>
  );
}

export default memo(AboutSection);
