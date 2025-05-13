import Image from "next/image";

import { PreOrderForm } from "../form/pre-order-form";

export default function PreOrderSection() {
  return (
    <section
      className="bg-foreground text-background grid scroll-mt-20 grid-cols-1 md:grid-cols-2"
      id="pre-order"
    >
      <div className="relative max-md:aspect-video">
        <Image src="/burj-khalifa.webp" alt="" fill className="object-cover" />
      </div>
      <div className="p-12 md:px-24 md:py-40">
        <h3 className="font-display text-3xl leading-relaxed md:text-5xl">
          Stay Updated on the Launch!
        </h3>
        <p className="font-grotesk md:text-lg md:leading-loose">
          Submit your email to be notified when Dubai’s Urban Evolution by
          Shashi P. Piptan is available on Amazon.
        </p>
        <PreOrderForm />
      </div>
    </section>
  );
}
