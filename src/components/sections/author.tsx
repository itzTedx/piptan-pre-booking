import { Separator } from "../ui/separator";

export const AuthorSection = () => {
  return (
    <section className="grid grid-cols-12 py-20">
      <div className="bg-foreground/5 col-span-7 container py-9">
        <h3>Meet the Author</h3>
        <Separator />
        <h4 className="font-display text-4xl">
          Shashi P. Piptan: A Global Investment Advisor, Infrastructure
          Strategist, and Real Estate Visionary.
        </h4>
        <p>
          Shashi Piptan is a seasoned Global Investment Advisor with a sharp
          focus on infrastructure development, real estate strategy, and
          international business growth. With over a decade of experience in
          corporate liaisoning and infrastructural negotiation, Shashi has
          successfully advised governments, multinational corporations, and
          private investors on high-stakes projects across the Middle East,
          Asia, and Europe.
        </p>
        <p>
          Known for his strategic insight and practical approach, Shashi
          specializes in identifying emerging opportunities in rapidly growing
          markets—particularly Dubai, where his work has contributed to
          unlocking high-return investments in real estate and urban
          development. His ability to bridge the gap between visionary planning
          and on-ground execution has made him a trusted name in the global
          investment community.
        </p>
        <p>
          Shashi’s deep understanding of market dynamics, regulatory frameworks,
          and future-ready infrastructure makes him uniquely positioned to guide
          investors through complex landscapes. His hands-on experience and
          expansive network enable him to create value-driven strategies that
          align with both commercial goals and long-term sustainability.
        </p>
        <p>
          As the author of The Urban Evolution of Dubai: A Blueprint for
          Infrastructure Investment, Shashi brings together his years of field
          expertise, offering readers an actionable roadmap to one of the
          world’s most dynamic investment destinations.
        </p>
      </div>
      <div className="col-span-5"></div>
    </section>
  );
};
