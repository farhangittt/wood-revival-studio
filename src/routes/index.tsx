```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroImg from "@/assets/hero-craftsman.jpg";
import logoImg from "@/assets/polishcraft-logo.png";

import carvedDoorImg from "@/assets/WhatsApp_Image_2026-08-05_at_3.06.44_PM.jpeg";
import gildedChairImg from "@/assets/WhatsApp_Image_2026-08-05_at_3.02.30_PM.jpeg";
import poojaUnitImg from "@/assets/WhatsApp_Image_2026-08-05_at_3.01.21_PM.jpeg";
import wardrobeSageImg from "@/assets/WhatsApp_Image_2026-08-05_at_3.01.11_PM.jpeg";
import wardrobeOakImg from "@/assets/WhatsApp_Image_2026-08-05_at_2.55.22_PM.jpeg";
import flushDoorImg from "@/assets/WhatsApp_Image_2026-08-05_at_2.54.15_PM.jpeg";
import tvUnitImg from "@/assets/WhatsApp_Image_2026-08-05_at_2.52.46_PM.jpeg";
import teakDoorImg from "@/assets/WhatsApp_Image_2026-08-05_at_2.53.33_PM.jpeg";
import chevronWardrobeImg from "@/assets/WhatsApp_Image_2026-08-05_at_2.55.44_PM.jpeg";
import mandirImg from "@/assets/WhatsApp_Image_2026-08-05_at_3.00.11_PM.jpeg";

const BIZ = {
  name: "Polishcraft",
  owner: "Mr. Umair Khan",
  tagline:
    "Italian Polishing | PU Polishing | Colour PU Polishing | Melamine Polishing",
  since: "2006",
  phoneDisplay: "+91 91096 26472",
  phoneHref: "tel:+919109626472",
  whatsapp: "https://wa.me/qr/XNSU5AGOMUP4G1",
  email: "umer15275@gmail.com",
  street: "Bagh Umrao Dulha",
  locality: "Bhopal",
  region: "Madhya Pradesh",
  postcode: "462010",
  country: "IN",
  lat: 23.2599,
  lng: 77.4126,
  mapEmbed:
    "https://www.google.com/maps?q=Bagh+Umrao+Dulha,+Bhopal+462010&output=embed",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BIZ.name,
  description:
    `Italian polishing, PU polishing, colour PU polishing, melamine polishing and furniture restoration in ${BIZ.locality}.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: BIZ.locality,
    addressRegion: BIZ.region,
    postalCode: BIZ.postcode,
    addressCountry: BIZ.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BIZ.lat,
    longitude: BIZ.lng,
  },
  telephone: BIZ.phoneDisplay,
  email: BIZ.email,
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title: `Wood Polishing & Furniture Restoration in ${BIZ.locality} | ${BIZ.name}`,
      },
      {
        name: "description",
        content:
          `Italian, PU, colour PU and melamine polishing plus furniture restoration in ${BIZ.locality}. Family-run since ${BIZ.since} with 20+ years' experience — call ${BIZ.phoneDisplay}.`,
      },
      {
        property: "og:title",
        content: `Wood Polishing & Furniture Restoration in ${BIZ.locality}`,
      },
      {
        property: "og:description",
        content:
          `Italian, PU, colour PU and melamine polishing for homes, offices and hotels by ${BIZ.name}.`,
      },
      {
        property: "og:url",
        content: "/",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
});

const services = [
  {
    title: "Italian Polishing",
    body:
      "High-gloss Italian finishes with a deep mirror sheen — ideal for premium furniture, wardrobes and feature panels.",
  },
  {
    title: "PU Polishing",
    body:
      "Durable polyurethane coatings that resist scratches, moisture and daily wear while keeping the grain looking rich.",
  },
  {
    title: "Colour PU Polishing",
    body:
      "Tinted PU finishes in the shade you want — matt, satin or gloss — perfectly matched to your interiors.",
  },
  {
    title: "Melamine Polishing",
    body:
      "Fast-drying, economical melamine finishes that give doors, beds and units a smooth, even, long-lasting surface.",
  },
];

const galleryItems = [
  {
    img: carvedDoorImg,
    alt: "Hand-carved teak double doors with polished floral detailing",
    caption: "Carved teak doors – Italian polish",
  },
  {
    img: gildedChairImg,
    alt: "Ornate armchair with gold leaf carving and ivory lacquer finish",
    caption: "Gilded armchair – gold leaf & PU",
  },
  {
    img: poojaUnitImg,
    alt: "Arched pooja unit with gold lotus motif and wooden drawers",
    caption: "Arched pooja unit – custom finish",
  },
  {
    img: wardrobeSageImg,
    alt: "Sage green arched wardrobe with fluted open shelving",
    caption: "Sage arched wardrobe – colour PU",
  },
  {
    img: wardrobeOakImg,
    alt: "Oak veneer sliding wardrobe with recessed handles",
    caption: "Oak sliding wardrobe – melamine polish",
  },
  {
    img: flushDoorImg,
    alt: "Solid wood flush door with a deep red-brown polished finish",
    caption: "Flush door – deep melamine polish",
  },
  {
    img: tvUnitImg,
    alt: "Built-in white gloss TV unit with grey fluted panel",
    caption: "TV wall unit – high gloss PU",
  },
  {
    img: teakDoorImg,
    alt: "Five-panel teak main door with warm polished finish",
    caption: "Teak panel door – natural polish",
  },
  {
    img: chevronWardrobeImg,
    alt: "Grey and white wardrobe with chevron grooved panels",
    caption: "Chevron wardrobe – matt colour PU",
  },
  {
    img: mandirImg,
    alt: "Carved wooden mandir arch with jaali work and drawer unit",
    caption: "Carved mandir – hand-finished teak",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  const [lightbox, setLightbox] = useState<
    null | (typeof galleryItems)[number]
  >(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    if (
      (form.elements.namedItem("company") as HTMLInputElement)?.value
    ) {
      return;
    }

    setSent(true);
    form.reset();
  }

  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <span className="flex min-w-0 items-center gap-2">
            <img
              src={logoImg}
              alt="Polishcraft logo"
              width={36}
              height={36}
              className="size-9 shrink-0"
            />

            <span className="truncate font-display text-lg font-semibold text-foreground">
              {BIZ.name}
            </span>
          </span>

          <nav
            aria-label="Primary"
            className="flex shrink-0 items-center gap-4 text-sm"
          >
            <a
              className="hidden hover:text-accent sm:inline"
              href="#services"
            >
              Services
            </a>

            <a
              className="hidden hover:text-accent sm:inline"
              href="#gallery"
            >
              Gallery
            </a>

            <a
              className="hidden hover:text-accent sm:inline"
              href="#contact"
            >
              Contact
            </a>

            <a
              href={BIZ.phoneHref}
              data-track="call-header"
              className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="relative isolate">
          <img
            src={heroImg}
            alt="Craftsman applying a hand-rubbed polish to a wooden furniture surface"
            width={1600}
            height={1008}
            className="absolute inset-0 -z-10 size-full object-cover"
          />

          <div
            className="absolute inset-0 -z-10 bg-primary/75"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Traditional Craftsmanship Since {BIZ.since}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">
              {BIZ.tagline}
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">
              Providing premium wood finishing, furniture restoration, and
              professional polishing services in {BIZ.locality} with over 20
              years of experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BIZ.phoneHref}
                data-track="call-hero"
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Call {BIZ.phoneDisplay}
              </a>

              <a
                href={`mailto:${BIZ.email}`}
                data-track="email-hero"
                className="inline-flex min-h-11 items-center rounded-md border-2 border-accent px-6 font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Email Us
              </a>

              <a
                href={BIZ.whatsapp}
                data-track="whatsapp-hero"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-11 items-center rounded-md border-2 border-accent px-6 font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                WhatsApp
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-md bg-background px-6 font-semibold text-foreground transition-colors hover:bg-cream"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-4 py-20"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our method depends on the damage: we repair minor cracks and
            finishes where possible, or strip and refinish an entire piece
            when it needs it.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li
                key={s.title}
                className="rounded-lg border border-border bg-card p-6 shadow-warm transition-transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-card-foreground">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-cream py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <img
              src={mandirImg}
              alt="Hand-carved wooden mandir with jaali detailing, finished in our workshop"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-lg object-cover shadow-warm"
            />

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                About Us
              </h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Since {BIZ.since}, we have been providing professional
                furniture polishing and restoration services in{" "}
                {BIZ.locality}. As a family-run business, we specialize in
                Italian Polishing, PU Polishing, Colour PU Polishing, and
                Melamine Polishing, delivering premium-quality finishes for
                homes, offices, hotels, and commercial spaces.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every project is completed with attention to detail, using
                high-quality materials and proven techniques to restore the
                natural beauty and durability of your furniture. Whether it's a
                new piece or restoring an old one, we focus on craftsmanship,
                quality, and customer satisfaction.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We believe in honest advice and transparent service. If a
                simple repair or touch-up is enough, we'll recommend the most
                practical solution instead of unnecessary work. Our goal is to
                provide durable, elegant finishes that enhance the appearance
                and lifespan of your furniture.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                With years of experience and a commitment to excellence, we
                have earned the trust of customers across {BIZ.locality} by
                delivering reliable workmanship, timely service, and
                professional results.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["20+", "Years experience"],
                  ["2,000+", "Pieces polished"],
                  ["5★", "Customer rating"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="rounded-lg border border-border bg-card p-4 text-center"
                  >
                    <dt className="sr-only">{l}</dt>

                    <dd>
                      <span className="block font-display text-2xl font-bold text-foreground">
                        {n}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {l}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="mx-auto max-w-6xl px-4 py-20"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Work
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            A selection of recently completed polishing and restoration
            projects. Tap any photo to view it larger.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <li key={item.caption}>
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group block w-full overflow-hidden rounded-lg border border-border shadow-warm"
                >
                  <span className="sr-only">
                    Enlarge image: {item.caption}
                  </span>

                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.caption}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* LIGHTBOX */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.caption}
            className="fixed inset-0 z-50 grid place-items-center bg-foreground/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <figure
              className="max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.img}
                alt={lightbox.alt}
                className="w-full rounded-lg"
              />

              <figcaption className="mt-3 flex items-center justify-between gap-4 text-background">
                <span>{lightbox.caption}</span>

                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="min-h-11 rounded-md bg-accent px-4 font-semibold text-accent-foreground"
                >
                  Close
                </button>
              </figcaption>
            </figure>
          </div>
        )}

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-20"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get in Touch
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Send a few details and we'll come back with a free,
            no-obligation quote.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <form
              onSubmit={handleSubmit}
              noValidate={false}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold"
                  >
                    Name <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold"
                  >
                    Email <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold"
                  >
                    Phone <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={30}
                    className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold"
                  >
                    Address / Postcode
                  </label>

                  <input
                    id="address"
                    name="address"
                    type="text"
                    maxLength={200}
                    className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold"
                  >
                    Service required
                  </label>

                  <select
                    id="service"
                    name="service"
                    className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                  >
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}

                    <option>Something else</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold"
                    >
                      Preferred date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-semibold"
                    >
                      Time
                    </label>

                    <input
                      id="time"
                      name="time"
                      type="time"
                      className="mt-1 min-h-11 w-full rounded-md border border-input bg-card px-3 text-foreground"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="mt-1 w-full rounded-md border border-input bg-card p-3 text-foreground"
                />
              </div>

              {/* Honeypot */}
              <div
                className="hidden"
                aria-hidden="true"
              >
                <label htmlFor="company">Company</label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                data-track="form-submit"
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Send Enquiry
              </button>

              <p
                aria-live="polite"
                className="text-sm font-semibold text-foreground"
              >
                {sent
                  ? "Thanks — your enquiry has been received. We'll be in touch shortly."
                  : ""}
              </p>

              <p className="text-xs text-muted-foreground">
                [Placeholder: connect this form to your email/CRM endpoint
                before launch.]
              </p>
            </form>

            <div className="space-y-6">
              <dl className="rounded-lg border border-border bg-card p-6 shadow-warm">
                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">Phone</dt>

                  <dd>
                    <a
                      className="underline hover:text-accent"
                      data-track="call-contact"
                      href={BIZ.phoneHref}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">WhatsApp</dt>

                  <dd>
                    <a
                      className="underline hover:text-accent"
                      data-track="whatsapp-contact"
                      href={BIZ.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">Email</dt>

                  <dd>
                    <a
                      className="underline hover:text-accent"
                      href={`mailto:${BIZ.email}`}
                    >
                      {BIZ.email}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">Address</dt>

                  <dd className="text-right text-muted-foreground">
                    {BIZ.street}, {BIZ.locality}, {BIZ.postcode}
                  </dd>
                </div>

                <div className="flex flex-wrap justify-between gap-2 py-2">
                  <dt className="font-semibold">Hours</dt>

                  <dd className="text-right text-muted-foreground">
                    Mon–Fri 8am–6pm
                    <br />
                    Sat 9am–2pm · Sun closed
                  </dd>
                </div>
              </dl>

              <iframe
                title={`Map showing ${BIZ.name} location`}
                src={BIZ.mapEmbed}
                loading="lazy"
                className="h-72 w-full rounded-lg border border-border"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={BIZ.phoneHref}
                data-track="call-cta"
                className="flex min-h-11 items-center justify-center rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Your Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-cream py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {BIZ.name}. {BIZ.locality},{" "}
            {BIZ.region}.
          </p>

          <p>Polishing & Furniture Restoration</p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={BIZ.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-accent font-bold text-accent-foreground shadow-warm"
      >
        WA
      </a>
    </div>
  );
}
```
