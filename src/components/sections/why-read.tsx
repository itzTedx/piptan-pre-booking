import Image from "next/image";

export const WhyReadSection = () => {
  return (
    <section className="container py-8" aria-labelledby="why-read-title">
      <h2
        id="why-read-title"
        className="font-display pb-6 text-3xl leading-snug md:text-4xl"
      >
        What makes{" "}
        <span className="text-[#37D787]">
          {" "}
          &ldquo;The Urban Evolution of Dubai: A Blueprint for Infrastructure
          Investment&quot;
        </span>{" "}
        an Essential Read!
      </h2>
      <div
        className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2 md:gap-9"
        role="list"
      >
        <ul className="list-disc space-y-4 pl-6" role="list">
          <li>
            Investment-Focused Insights - Learn where the real opportunities for
            high returns lie in Dubai&apos;s evolving infrastructure landscape.
          </li>
          <li>
            Expert Contributions - Gain perspectives from industry leaders, real
            estate professionals, and urban planners actively shaping
            Dubai&apos;s future.
          </li>
          <li>
            Data-Driven Analysis - Explore well-researched case studies,
            statistics, and trends that drive smart investment decisions.
          </li>
        </ul>
        <ul className="list-disc space-y-4 pl-6" role="list">
          <li>
            Covers Regulatory Frameworks - Navigate Dubai&apos;s
            investor-friendly policies, legal systems, and development codes
            with clarity.
          </li>
          <li>
            Future-Ready Forecasts - Discover what&apos;s next for Dubai and
            where new growth corridors and emerging sectors are headed.
          </li>
          <li>
            Written by a Seasoned Insider - Authored by a global investment
            advisor with firsthand experience in infrastructure and corporate
            liaisoning.
          </li>
        </ul>
      </div>
      <div className="relative aspect-video">
        <Image
          src="/dubai-museum.webp"
          alt="Dubai Museum showcasing the city's architectural and cultural evolution"
          fill
          className="rounded-2xl object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
    </section>
  );
};
