import Image from 'next/image'

import { Metadata } from 'next'

const siteConfig = {
  title: `Pre-Order Dubai's Urban Evolution by Shashi S. Piptan`,
  description: `Pre-order Dubai's Urban Evolution by Shashi P. Piptan. Explore the visionary blueprint for Dubai's infrastructure success. A must-read for investors, planners, and visionaries. Reserve your copy today!`,
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Pre-booking cover image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/cover.jpg'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="text-center pt-8">
        <h1 className="text-8xl font-light">New launch</h1>
      </header>

      <section className="container grid grid-cols-2" aria-label="Book preview">
        <div className="self-end px-12">
          {`Discover the visionary strategies behind one of the world's most dynamic
        cities.`}
        </div>
        <article className="book" role="presentation">
          <div className="front">
            <div className="cover">
              <Image
                src="/cover.webp"
                alt="Book cover preview"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="left-side" aria-hidden="true">
            <Image src="/side.jpg" alt="" fill priority />
          </div>
        </article>
      </section>
      <div></div>
    </main>
  )
}
