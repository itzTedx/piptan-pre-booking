import Image from "next/image";

export const WhyReadSection = () => {
  return (
    <section className="container py-8" aria-labelledby="why-read-title">
      <h2 id="why-read-title" className="font-display pb-6 text-3xl">
        Why Dubai&apos;s Urban Evolution is Essential Reading
      </h2>
      <div
        className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2 md:gap-9"
        role="list"
      >
        <ul className="list-disc space-y-4 pl-6" role="list">
          <li>
            Learn how Dubai&apos;s strategic investments shaped a global
            powerhouse.
          </li>
          <li>
            Understand the urban models and policies that continue to attract
            international investors.
          </li>
        </ul>
        <ul className="list-disc space-y-4 pl-6" role="list">
          <li>
            Discover actionable insights for developers, investors, and
            entrepreneurs.
          </li>
          <li>
            Explore future trends and emerging opportunities in Dubai&apos;s
            evolving economy.
          </li>
          <li>
            Gain expert strategies from leading real estate professionals and
            market insiders.
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
