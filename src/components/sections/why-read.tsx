import Image from "next/image";

export const WhyReadSection = () => {
  return (
    <section className="container py-8">
      <h3 className="font-display pb-6 text-3xl">
        Why Dubai’s Urban Evolution is Essential Reading
      </h3>
      <div className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2 md:gap-9">
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Learn how Dubai’s strategic investments shaped a global powerhouse.
          </li>
          <li>
            Understand the urban models and policies that continue to attract
            international investors.
          </li>
        </ul>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Discover actionable insights for developers, investors, and
            entrepreneurs.
          </li>
          <li>
            Explore future trends and emerging opportunities in Dubai’s evolving
            economy.
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
          alt=""
          fill
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};
