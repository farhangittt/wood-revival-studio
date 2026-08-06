import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";
import heroImg from "@/assets/hero-craftsman.jpg";
import workshopImg from "@/assets/workshop.jpg";
import beforeImg from "@/assets/table-before.jpg";
import afterImg from "@/assets/table-after.jpg";
import logoImg from "@/assets/polishcraft-logo.png";
import carvedDoorAsset from "@/assets/WhatsApp_Image_2026-08-05_at_3.06.44_PM.jpeg.asset.json";
import gildedChairAsset from "@/assets/WhatsApp_Image_2026-08-05_at_3.02.30_PM.jpeg.asset.json";
import poojaUnitAsset from "@/assets/WhatsApp_Image_2026-08-05_at_3.01.21_PM.jpeg.asset.json";
import wardrobeSageAsset from "@/assets/WhatsApp_Image_2026-08-05_at_3.01.11_PM.jpeg.asset.json";
import wardrobeOakAsset from "@/assets/WhatsApp_Image_2026-08-05_at_2.55.22_PM.jpeg.asset.json";
import flushDoorAsset from "@/assets/WhatsApp_Image_2026-08-05_at_2.54.15_PM.jpeg.asset.json";
import tvUnitAsset from "@/assets/WhatsApp_Image_2026-08-05_at_2.52.46_PM.jpeg.asset.json";
import teakDoorAsset from "@/assets/WhatsApp_Image_2026-08-05_at_2.53.33_PM.jpeg.asset.json";
import chevronWardrobeAsset from "@/assets/WhatsApp_Image_2026-08-05_at_2.55.44_PM.jpeg.asset.json";
import mandirAsset from "@/assets/WhatsApp_Image_2026-08-05_at_3.00.11_PM.jpeg.asset.json";

const BIZ = {
  name: "Polishcraft",
  owner: "Mr. Umair Khan",
  tagline: "Italian Polishing | PU Polishing | Colour PU Polishing | Melamine Polishing",
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
  url: "https://www.example.com",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BIZ.name,
  description: `French polishing, furniture restoration and veneer repair in ${BIZ.locality}.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: BIZ.locality,
    addressRegion: BIZ.region,
    postalCode: BIZ.postcode,
    addressCountry: BIZ.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BIZ.lat, longitude: BIZ.lng },
  telephone: "+44 1234 567890",
  email: BIZ.email,
  priceRange: "££",
  url: BIZ.url,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
        title: `French Polishing & Furniture Restoration in ${BIZ.locality} | ${BIZ.name}`,
      },
      {
        name: "description",
        content: `Expert French polishing, furniture repair and veneer restoration in ${BIZ.locality}. Family-run craftsmen since ${BIZ.since}. Free no-obligation quotes — call ${BIZ.phoneDisplay}.`,
      },
      {
        property: "og:title",
        content: `French Polishing & Furniture Restoration in ${BIZ.locality}`,
      },
      {
        property: "og:description",
        content: `Traditional hand-applied finishes, antique repair and custom wood finishes by ${BIZ.name}.`,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

const services = [
  {
    title: "French Polishing",
    body: "Hand-rubbed shellac finishes for antiques and heirlooms. Multiple fine coats build a deep, glossy patina that preserves originality and value.",
  },
  {
    title: "Furniture Repair",
    body: "Structural fixes for splits, loose joints and broken spindles. We glue, clamp and reinforce so damage disappears completely.",
  },
  {
    title: "Veneer & Scratch Repair",
    body: "Chips, cracks, watermarks or heat stains? We colour-match and carefully fill imperfections for a seamless, invisible repair.",
  },
  {
    title: "Custom Finishes",
    body: "Staining, pickling, waxing or new lacquer finishes on new and restored pieces — tailored to your décor and lighting.",
  },
];

const testimonials = [
  {
    quote:
      "Outstanding service. They restored our old dining table to perfect condition — it genuinely looks brand new.",
    name: "[Customer Name]",
    place: "[Town]",
  },
  {
    quote:
      "We thought our cabinet was ruined by a heat stain, but the finish was matched flawlessly. Highly recommended.",
    name: "[Customer Name]",
    place: "[Town]",
  },
  {
    quote:
      "Careful, honest and clearly passionate about the craft. Our Victorian chairs came back better than we hoped.",
    name: "[Customer Name]",
    place: "[Town]",
  },
];

const galleryItems = [
  { img: afterImg, alt: "Mahogany dining table after French polishing", caption: "Dining table – after polishing" },
  { img: workshopImg, alt: "Restored Victorian chair in the workshop", caption: "Victorian chair – restored" },
  { img: beforeImg, alt: "Worn table top with scratches before restoration", caption: "Table top – before work" },
  { img: heroImg, alt: "Craftsman hand-polishing an antique table", caption: "Hand-applied shellac" },
  { img: carvedDoorAsset.url, alt: "Hand-carved teak double doors with polished floral detailing", caption: "Carved teak doors – French polished" },
  { img: gildedChairAsset.url, alt: "Ornate armchair with gold leaf carving and ivory lacquer finish", caption: "Gilded armchair – gold leaf & lacquer" },
  { img: poojaUnitAsset.url, alt: "Arched pooja unit with gold lotus motif and wooden drawers", caption: "Arched pooja unit – custom build" },
  { img: wardrobeSageAsset.url, alt: "Sage green arched wardrobe with fluted open shelving", caption: "Sage arched wardrobe – custom finish" },
  { img: wardrobeOakAsset.url, alt: "Oak veneer sliding wardrobe with recessed handles", caption: "Oak sliding wardrobe – veneer finish" },
  { img: flushDoorAsset.url, alt: "Solid wood flush door with a deep red-brown polished finish", caption: "Flush door – deep melamine polish" },
  { img: tvUnitAsset.url, alt: "Built-in white gloss TV unit with grey fluted panel", caption: "TV wall unit – high gloss finish" },
  { img: teakDoorAsset.url, alt: "Five-panel teak main door with warm polished finish", caption: "Teak panel door – natural polish" },
  { img: chevronWardrobeAsset.url, alt: "Grey and white wardrobe with chevron grooved panels", caption: "Chevron wardrobe – matt duco finish" },
  { img: mandirAsset.url, alt: "Carved wooden mandir arch with jaali work and drawer unit", caption: "Carved mandir – hand-finished teak" },
];


function Index() {
  const [sent, setSent] = useState(false);
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[number]>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) return; // honeypot
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

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <span className="flex min-w-0 items-center gap-2">
            <img
              src={logoImg}
              alt=""
              width={36}
              height={36}
              className="size-9 shrink-0"
            />
            <span className="truncate font-display text-lg font-semibold text-foreground">
              {BIZ.name}
            </span>
          </span>

          <nav aria-label="Primary" className="flex shrink-0 items-center gap-4 text-sm">
            <a className="hidden hover:text-accent sm:inline" href="#services">Services</a>
            <a className="hidden hover:text-accent sm:inline" href="#gallery">Gallery</a>
            <a className="hidden hover:text-accent sm:inline" href="#contact">Contact</a>
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
            alt="Craftsman applying a hand-rubbed French polish to an antique mahogany table"
            width={1600}
            height={1008}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-primary/75" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Traditional Craftsmanship Since {BIZ.since}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">
              {BIZ.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">
              Expert furniture repair and hand-applied finishing in {BIZ.locality} — bringing your
              woodwork back to life.
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
                rel="noopener"
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
        <section id="services" className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our method depends on the damage: we repair minor cracks and finishes where possible, or
            strip and refinish an entire piece when it needs it.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li
                key={s.title}
                className="rounded-lg border border-border bg-card p-6 shadow-warm transition-transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-cream py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <img
              src={workshopImg}
              alt="Restored Victorian chair beside shellac bottles and hand tools in the workshop"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-lg object-cover shadow-warm"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About Us</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {BIZ.name} is a family-run workshop in {BIZ.locality} with over 50 years' combined
                expertise in French polishing and antique restoration. Every piece is treated by
                hand, using traditional shellac methods passed down through the trade.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We give honest advice first: if a sympathetic repair will do, we won't strip a piece
                unnecessarily. All work is fully insured and guaranteed. [Add credentials, trade
                memberships or guarantee details here.]
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["40+", "Years trading"],
                  ["2,000+", "Pieces restored"],
                  ["5★", "Customer rating"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-lg border border-border bg-card p-4 text-center">
                    <dt className="sr-only">{l}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-bold text-foreground">{n}</span>
                      <span className="text-xs text-muted-foreground">{l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Before &amp; After</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Drag the slider to compare a piece before and after restoration.
          </p>
          <div className="mt-8">
            <BeforeAfter
              before={beforeImg}
              after={afterImg}
              beforeAlt="Dining table before restoration, showing scratches and worn finish"
              afterAlt="Dining table after French polishing, with a deep glossy finish"
            />
            <p className="mt-3 text-sm italic text-muted-foreground">
              Dining table restoration — [Project location, year].
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <li key={item.caption}>
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group block w-full overflow-hidden rounded-lg border border-border shadow-warm"
                >
                  <span className="sr-only">Enlarge image: {item.caption}</span>
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
                <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
              </li>
            ))}
          </ul>
        </section>

        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.caption}
            className="fixed inset-0 z-50 grid place-items-center bg-foreground/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.img} alt={lightbox.alt} className="w-full rounded-lg" />
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

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-cream py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Customers Say</h2>
            <ul className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.quote} className="rounded-lg border border-border bg-card p-6 shadow-warm">
                  <blockquote className="text-card-foreground">“{t.quote}”</blockquote>
                  <p className="mt-4 text-sm font-semibold text-muted-foreground">
                    — {t.name}, {t.place}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Send a few details and we'll come back with a free, no-obligation quote.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold">
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
                  <label htmlFor="email" className="block text-sm font-semibold">
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
                  <label htmlFor="phone" className="block text-sm font-semibold">
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
                  <label htmlFor="address" className="block text-sm font-semibold">
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
                  <label htmlFor="service" className="block text-sm font-semibold">
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
                    <label htmlFor="date" className="block text-sm font-semibold">
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
                    <label htmlFor="time" className="block text-sm font-semibold">
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
                <label htmlFor="message" className="block text-sm font-semibold">
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
              {/* honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <button
                type="submit"
                data-track="form-submit"
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Send Enquiry
              </button>
              <p aria-live="polite" className="text-sm font-semibold text-foreground">
                {sent
                  ? "Thanks — your enquiry has been received. We'll be in touch shortly."
                  : ""}
              </p>
              <p className="text-xs text-muted-foreground">
                [Placeholder: connect this form to your email/CRM endpoint before launch.]
              </p>
            </form>

            <div className="space-y-6">
              <dl className="rounded-lg border border-border bg-card p-6 shadow-warm">
                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">Phone</dt>
                  <dd>
                    <a className="underline hover:text-accent" data-track="call-contact" href={BIZ.phoneHref}>
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
                      rel="noopener"
                    >
                      Message us
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
                  <dt className="font-semibold">Email</dt>
                  <dd>
                    <a className="underline hover:text-accent" href={`mailto:${BIZ.email}`}>
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

      <footer className="border-t border-border bg-cream py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {BIZ.name}. {BIZ.locality}, {BIZ.region}.
          </p>
          <p>[Social links placeholder]</p>
        </div>
      </footer>

      <a
        href={BIZ.whatsapp}
        target="_blank"
        rel="noopener"
        data-track="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-accent font-bold text-accent-foreground shadow-warm"
      >
        WA
      </a>
    </div>
  );
}
