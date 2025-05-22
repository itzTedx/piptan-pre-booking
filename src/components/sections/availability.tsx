import { memo } from "react";

import { Amazon, AmazonKindle } from "@/assets/brand-logos";

const AvailabilitySection = memo(function AvailabilitySection() {
  return (
    <section aria-labelledby="availability-title" className="pt-6 pb-20">
      <h3
        id="availability-title"
        className="font-display mb-4 text-center text-xl"
      >
        Available soon on:
      </h3>
      <div
        className="flex flex-wrap items-center justify-center gap-3"
        role="list"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div
          className="bg-foreground/10 hover:bg-foreground/15 flex h-20 items-center justify-center rounded-xl px-9 transition-colors"
          role="listitem"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/Book"
        >
          <span className="sr-only">Available on Amazon Books</span>
          <Amazon
            aria-hidden="true"
            aria-label="Amazon"
            className="h-auto w-auto"
          />
        </div>
        <div
          className="bg-foreground/10 hover:bg-foreground/15 flex h-20 items-center justify-center rounded-xl px-9 transition-colors"
          role="listitem"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/Book"
        >
          <span className="sr-only">Available on Amazon Kindle</span>
          <AmazonKindle
            aria-hidden="true"
            aria-label="Amazon Kindle"
            className="h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
});

export default AvailabilitySection;
