import Image from "next/image";

import { PreOrderForm } from "../form/pre-order-form";

export default function PreOrderSection() {
  return (
    <section className="bg-foreground text-background grid grid-cols-2">
      <div className="relative">
        <Image src="/burj-khalifa.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="px-24 py-40">
        <h3 className="font-display text-5xl leading-relaxed">
          Stay Updated on the Launch!
        </h3>
        <p className="font-grotesk text-lg leading-loose">
          Submit your email to be notified when Dubai’s Urban Evolution by
          Shashi P. Piptan is available on Amazon.
        </p>
        <PreOrderForm />
      </div>
    </section>
  );
}
