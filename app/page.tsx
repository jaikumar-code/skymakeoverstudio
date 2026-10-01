"use client";

import { useState } from "react";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    alt: "Bride in an elegant wedding dress"
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1400&q=85",
    alt: "Bridal bouquet and wedding details"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
    alt: "Elegant wedding celebration"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
    alt: "Bride and groom during a wedding"
  }
];

const process = [
  {
    number: "01",
    title: "The consultation",
    text: "We begin with your story, your ceremony, your wardrobe, and the atmosphere you want to create."
  },
  {
    number: "02",
    title: "The beauty edit",
    text: "Your features, complexion, styling preferences, and references become the foundation for a considered beauty direction."
  },
  {
    number: "03",
    title: "The transformation",
    text: "On your occasion day, every detail is refined with calm precision, from skin preparation to the final veil adjustment."
  },
  {
    number: "04",
    title: "The reveal",
    text: "The finished look is luminous, photographed beautifully, and unmistakably yours."
  }
];

const testimonials = [
  {
    quote:
      "The entire experience felt deeply personal. I never felt overdone, only like the most polished version of myself.",
    name: "Ananya R.",
    detail: "Chennai"
  },
  {
    quote:
      "Every detail was handled with such calmness. My makeup lasted beautifully through the ceremony, portraits, and celebrations.",
    name: "Meera S.",
    detail: "Bengaluru"
  },
  {
    quote:
      "Sky understood the mood immediately. The result was soft, luminous, and exactly what I had imagined.",
    name: "Priya K.",
    detail: "Hyderabad"
  }
];

export default function Page() {
  const [activeImage, setActiveImage] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-10 lg:px-16">
          <a href="#top" className="font-display text-xl tracking-[0.18em]">
            SKY
          </a>

          <nav className="hidden items-center gap-9 text-[10px] uppercase tracking-[0.24em] md:flex">
            <a href="#story" className="transition-opacity hover:opacity-50">Story</a>
            <a href="#process" className="transition-opacity hover:opacity-50">Experience</a>
            <a href="#gallery" className="transition-opacity hover:opacity-50">Portfolio</a>
            <a href="#contact" className="transition-opacity hover:opacity-50">Enquire</a>
          </nav>

          <a
            href="#contact"
            className="border-b border-champagne pb-1 text-[10px] uppercase tracking-[0.22em]"
          >
            Book a consultation
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden border-b border-charcoal/10">
        <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative flex items-end px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-champagne">
                <span className="h-px w-10 bg-champagne" />
                Bridal artistry studio
              </p>

              <h1 className="font-display text-[clamp(3.6rem,7vw,7.4rem)] leading-[0.88] tracking-[-0.045em]">
                Beauty,
                <br />
                beautifully
                <br />
                considered.
              </h1>

              <p className="mt-9 max-w-md text-sm leading-7 text-charcoal/65 md:text-base">
                Luxury bridal artistry and bespoke makeover experiences for women who want to feel luminous, effortless, and entirely themselves.
              </p>

              <div className="mt-10 flex items-center gap-7">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-charcoal px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-champagne"
                >
                  Begin your experience
                </a>
                <a
                  href="#gallery"
                  className="text-[10px] uppercase tracking-[0.24em] underline decoration-champagne underline-offset-8"
                >
                  View the work
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[580px] lg:min-h-screen">
            <img
              src={gallery[0].src}
              alt="Elegant bride in an editorial wedding portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-6 flex items-center gap-3 text-ivory md:right-10 lg:right-16">
              <span className="text-[9px] uppercase tracking-[0.25em]">Chennai · India</span>
              <span className="h-px w-8 bg-champagne" />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
        <div className="lg:pt-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">The philosophy</p>
          <p className="mt-5 max-w-xs font-display text-2xl leading-tight md:text-3xl">
            A quiet approach to unforgettable beauty.
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="font-display text-[clamp(2rem,4vw,4.2rem)] leading-[1.04] tracking-[-0.03em]">
            Your wedding beauty should not feel like a costume. It should feel like an elevated reflection of who you already are.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-charcoal/15 pt-8 md:grid-cols-2">
            <p className="text-sm leading-7 text-charcoal/65">
              We pair modern makeup artistry with thoughtful skin preparation, refined hair styling, and an instinct for the smallest details.
            </p>
            <p className="text-sm leading-7 text-charcoal/65">
              The result is personal rather than prescribed. Soft where it should be soft, defined where it matters, and made for the way you want to remember yourself.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-charcoal/10 bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">Selected work</p>
              <h2 className="mt-4 font-display text-5xl tracking-[-0.035em] md:text-7xl">In her light.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-ivory/55">
              A collection of bridal moments shaped around skin, expression, movement, and light.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-[280px_380px]">
            {gallery.map((item, index) => (
              <button
                key={item.src}
                onClick={() => setActiveImage(index)}
                className={[
                  "group relative overflow-hidden",
                  index === 0 ? "md:col-span-7" : "",
                  index === 1 ? "md:col-span-5" : "",
                  index === 2 ? "md:col-span-4" : "",
                  index === 3 ? "md:col-span-8" : ""
                ].join(" ")}
                aria-label={`View bridal portrait ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-ivory/15 pt-5">
            <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/45">
              Selected image {String(activeImage + 1).padStart(2, "0")} / 04
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-champagne">Bridal editorial</span>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">The experience</p>
            <h2 className="mt-5 max-w-md font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              From first conversation to final reveal.
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-charcoal/60">
              A deliberately personal process designed to keep the beauty experience calm, collaborative, and considered.
            </p>
          </div>

          <div className="border-t border-charcoal/15">
            {process.map((item) => (
              <article key={item.number} className="grid grid-cols-[64px_1fr] gap-6 border-b border-charcoal/15 py-10 md:grid-cols-[90px_1fr]">
                <span className="pt-1 text-[10px] tracking-[0.2em] text-champagne">{item.number}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.025em] md:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/60">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {[
            ["01", "Bridal artistry"],
            ["02", "Destination events"],
            ["03", "Editorial styling"],
            ["04", "Bespoke experiences"]
          ].map(([number, label]) => (
            <div key={number} className="border-r border-charcoal/10 px-5 py-10 last:border-r-0 md:px-10 md:py-14">
              <span className="text-[9px] tracking-[0.25em] text-champagne">{number}</span>
              <p className="mt-5 max-w-[150px] font-display text-xl leading-tight md:text-2xl">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EDE5D8] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">Words from our brides</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Felt,
              <br />
              remembered.
            </h2>
          </div>

          <div className="border-t border-charcoal/15">
            {testimonials.map((item) => (
              <figure key={item.name} className="border-b border-charcoal/15 py-10">
                <blockquote className="font-display text-2xl leading-[1.2] tracking-[-0.02em] md:text-3xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em]">
                  <span>{item.name}</span>
                  <span className="h-px w-5 bg-champagne" />
                  <span className="text-charcoal/45">{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-24 text-ivory md:px-10 md:py-32 lg:px-16">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-champagne/5" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">Your beauty story begins here</p>

          <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.88] tracking-[-0.045em]">
            Let&apos;s create something luminous.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-ivory/55">
            Share your date, location, and vision with us. We will be in touch to explore your bespoke bridal experience.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Your email address"
              className="min-h-14 flex-1 border border-ivory/20 bg-transparent px-5 text-sm text-ivory outline-none placeholder:text-ivory/35 focus:border-champagne"
            />
            <button
              type="button"
              className="min-h-14 bg-champagne px-7 text-[10px] uppercase tracking-[0.24em] text-charcoal transition-opacity hover:opacity-85"
            >
              Request details
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal px-6 pb-8 text-ivory md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 border-t border-ivory/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl tracking-[0.08em]">SKY</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-ivory/35">Makeover Studio</p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-[9px] uppercase tracking-[0.22em] text-ivory/55">
            <a href="#story" className="hover:text-champagne">Story</a>
            <a href="#process" className="hover:text-champagne">Experience</a>
            <a href="#gallery" className="hover:text-champagne">Portfolio</a>
            <a href="#contact" className="hover:text-champagne">Enquire</a>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-ivory/30">
            © {new Date().getFullYear()} Sky Makeover Studio
          </p>
        </div>
      </footer>
    </main>
  );
}