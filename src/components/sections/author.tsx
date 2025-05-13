import Image from "next/image";

import { Separator } from "../ui/separator";

export const AuthorSection = () => {
  return (
    <section className="grid grid-cols-12 py-20">
      <div className="col-span-8 py-12">
        <div className="bg-foreground/5 container space-y-4 py-9">
          <h3 className="font-grotesk text-2xl text-[#37D787]">
            Meet the Author
          </h3>
          <Separator />
          <h4 className="font-display text-4xl leading-tight text-[#37D787]">
            Shashi P. Piptan: A Global Investment Advisor, Infrastructure
            Strategist, and Real Estate Visionary.
          </h4>
          <div className="space-y-4">
            <p className="leading-loose text-pretty">
              Shashi Piptan is a seasoned Global Investment Advisor with a sharp
              focus on infrastructure development, real estate strategy, and
              international business growth. With over a decade of experience in
              corporate liaising and infrastructural negotiation, Shashi has
              successfully advised governments, multinational corporations, and
              private investors on high-stakes projects across the Middle East,
              Asia, and Europe.
            </p>
            <p className="leading-loose text-pretty">
              Known for his strategic insight and practical approach, Shashi
              specializes in identifying emerging opportunities in rapidly
              growing markets—particularly Dubai, where his work has contributed
              to unlocking high-return investments in real estate and urban
              development. His ability to bridge the gap between visionary
              planning and on-ground execution has made him a trusted name in
              the global investment community.
            </p>
            <p className="leading-loose text-pretty">
              Shashi’s deep understanding of market dynamics, regulatory
              frameworks, and future-ready infrastructure makes him uniquely
              positioned to guide investors through complex landscapes. His
              hands-on experience and expansive network enable him to create
              value-driven strategies that align with both commercial goals and
              long-term sustainability.
            </p>
            <p>
              As the author of The Urban Evolution of Dubai: A Blueprint for
              Infrastructure Investment, Shashi brings together his years of
              field expertise, offering readers an actionable roadmap to one of
              the world’s most dynamic investment destinations.
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-4">
        <Image src="/shashi.jpg" alt="" fill className="object-cover" />
      </div>
    </section>
  );
};
