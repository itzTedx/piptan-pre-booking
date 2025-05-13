import { Amazon, AmazonKindle } from "@/assets/brand-logos";

export default function AvailabilitySection() {
  return (
    <section aria-labelledby="availability-title" className="py-8">
      <h3
        id="availability-title"
        className="font-display mb-6 text-center text-xl"
      >
        Books are available on:
      </h3>
      <div className="flex items-center justify-center gap-9 pt-4" role="list">
        <div
          className="bg-foreground/10 flex h-20 items-center justify-center rounded-xl px-9"
          role="listitem"
        >
          <span className="sr-only">Available on Amazon Books</span>
          <Amazon aria-hidden="true" />
        </div>
        <div
          className="bg-foreground/10 flex h-20 items-center justify-center rounded-xl px-9"
          role="listitem"
        >
          <span className="sr-only">Available on Amazon Kindle</span>
          <AmazonKindle aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
