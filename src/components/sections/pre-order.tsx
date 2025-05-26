import ExportedImage from "next-image-export-optimizer";

import { PreOrderForm } from "../form/pre-order-form";

export default function PreOrderSection() {
  return (
    <section
      className="bg-foreground text-background grid scroll-mt-20 grid-cols-1 md:grid-cols-2"
      id="pre-order"
      aria-labelledby="pre-order-heading"
    >
      <div className="relative max-md:aspect-video">
        <ExportedImage
          src="/burj-khalifa.webp"
          alt="Burj Khalifa Dubai skyline view"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"
        />
      </div>
      <div className="p-12 lg:px-24 lg:py-40">
        <h3
          id="pre-order-heading"
          className="font-display text-3xl leading-normal md:text-4xl lg:text-5xl"
        >
          Stay Updated on the Launch!
        </h3>
        <p className="font-grotesk mt-2 font-light md:text-xl md:leading-snug">
          Submit your email to be notified when Dubai&apos;s Urban Evolution by
          Shashi S. Piptan is available on Amazon.
        </p>
        <PreOrderForm />
      </div>
    </section>
  );
}
