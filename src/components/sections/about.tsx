import Image from "next/image";
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
    <section className="relative pt-20 pb-40" aria-labelledby="about-heading">
      <div className="container max-w-7xl">
        <h2 id="about-heading" className="font-grotesk text-4xl font-bold">
          About the book
        </h2>
        <ul className="flex flex-wrap gap-3 py-6" aria-label="Book topics">
          {keywords.map((keyword) => (
            <li
              key={keyword}
              className="bg-secondary text-secondary-foreground font-grotesk rounded-md px-3 py-1.5 text-sm tracking-wider"
            >
              {keyword}
            </li>
          ))}
        </ul>
        <Card className="max-w-3xl gap-5">
          <CardHeader className="pb-0 text-[#37D787]">
            <p className="font-display pb-3 tracking-wide">
              Blueprints for the Future
            </p>
            <Separator />
            <CardTitle className="pt-3">The Urban Evolution of Dubai</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
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
              <Button variant="secondary" aria-label="Pre-order the book now">
                Pre-Order Now
              </Button>
              <Button variant="link" aria-label="Learn more about the book">
                Learn More
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Image
        src="/book-mockup.png"
        alt="3D mockup of the book 'Blueprint for Infrastructure Investment'"
        className="-z-10 object-cover"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
    </section>
  );
}

export default memo(AboutSection);
