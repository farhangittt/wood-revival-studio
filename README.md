# Wood Revival Studio

Executive Summary
Create a single-page site with a hero section, services, about, gallery (before/after), testimonials, and contact (phone, WhatsApp, email, hours, Google Map, booking CTA). The hero can use a tagline like “French Polishing & Furniture Restoration – Traditional Craftsmanship” and prominent call-to-action buttons (e.g. “Call Now”, “Email Us”). Use high-quality images (e.g. craftsman at work) to build trust. Ensure on-page SEO with a descriptive <title> and <meta name="description"> that includes location and services (Google recommends concise, relevant snippets). Include LocalBusiness schema (JSON‑LD) with name, address, phone, hours and coordinates. Make the site mobile‑friendly (responsive layout and images) and accessible (text contrast ≥4.5:1, alt text on images, form labels, etc). Host on a free static platform (e.g. GitHub Pages/Netlify/Vercel) with a custom domain and HTTPS. Set up Google Analytics (GA4) and Tag Manager for tracking, including form submissions and phone/WhatsApp clicks.

Key features and order: Hero → Services → About → Gallery (with before/after slider) → Testimonials → Contact (details + form + map + CTA) – see the table below. Below we provide example copy blocks, HTML snippets, a feature-priority table, and a Mermaid Gantt timeline.

Site Structure & Sections
Organize the page into clear sections in the following order:

Hero: Headline, subheading/tagline (e.g. “Traditional Craftsmanship Since 1986”), background image, and primary CTAs (clickable phone, email, WhatsApp). Include phone and email at top (calltel:<a href="tel:0123456789">01234 567 890</a>) and a “Book Now” button.
Services: List the main offerings with short descriptions (e.g. French Polishing, Furniture Repair, Scratch & Veneer Repair, Custom Finishes). For example, “Our method depends on the damage: we repair minor cracks or refinish entire pieces as needed”. Use icons or images for each service.
About: Brief business info (family-run, years of experience, values). Emphasize trust (e.g. “We’re family-run with over 50 years’ combined expertise”). Cite credentials or guarantees.
Gallery/Before-After: Showcase past work. Include an interactive before/after slider for comparison, plus a thumbnail grid. Clicking any image opens a lightbox with caption/alt text. Use high-res photos (JPEG or WebP; WebP has much better compression) sized around 1200–1600 px for main images. Always include meaningful alt text (e.g. “Dining table before restoration”).
Testimonials: 2–3 customer quotes (e.g. “They revived our Victorian cabinet – it looks brand new!”). This builds social proof. (You can source real Google reviews or write neutral templates.)
Contact: List phone (click-to-call), WhatsApp link (https://wa.me/), email, business hours, and address. Embed a Google Map iframe for location. Include a concise contact form (see below) and a final CTA (“Book Your Free Quote”).
Example sections and ordering: Hero → Our Services → About Us → Gallery → Testimonials → Contact. Citations: The FrenchPolishers site uses a similar flow and tagline. BM Furniture Restoration’s hero (“Beautiful wood restored…”) is also inspirational.

Required Contact Fields and Form
Include a simple contact form with these fields: Name, Email, Phone, Address (or Postcode), Service Required (dropdown), Preferred Date/Time (date/time pickers), and Message. Mark essential fields as required. Use <label> elements for accessibility. For example:

html
Copy
<form id="contact-form">
  <label for="name">Name*</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email*</label>
  <input type="email" id="email" name="email" required>
  
  <label for="phone">Phone*</label>
  <input type="tel" id="phone" name="phone">
  
  <label for="service">Service Required</label>
  <select id="service" name="service">
    <option>French Polishing</option>
    <option>Furniture Repair</option>
    <option>Veneer Repair</option>
    <option>Custom Finishes</option>
  </select>
  
  <label for="datetime">Preferred Date/Time</label>
  <input type="date" id="date" name="date">
  <input type="time" id="time" name="time">
  
  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <button type="submit">Send Enquiry</button>
</form>
By industry convention, forms should be efficient (only necessary fields), mobile-friendly (large tap targets, responsive), and secure (HTTPS). Add client-side validation (HTML5 or JS) and a success/thank-you message on submit. For spam protection, consider a simple CAPTCHA or honeypot. Track form submissions via Google Tag Manager as conversion events.

Gallery & Media Requirements
Provide high-quality images and videos of completed work. Use image formats like JPEG/WebP; avoid BMP or TIFF. (WebP offers far better compression than JPEG/PNG.) Optimize file sizes (~100–300 KB for web) and dimensions (~1200–1600 px width) for performance.

In the gallery section, include before-and-after comparisons. For each project, supply two images (before damage, after restoration). Use an interactive slider so users can drag to reveal the “before” and “after” view (see W3Schools example). For instance, wrap each pair in a container:

html
Copy
<div class="img-comp-container">
  <div class="img-comp-img">
    <img src="before.jpg" alt="Before restoration">
  </div>
  <div class="img-comp-img img-comp-overlay">
    <img src="after.jpg" alt="After restoration">
  </div>
</div>
(W3Schools shows how the slider is implemented.)

Enable a lightbox for image enlargement. A popular option is Lightbox2: include data-lightbox="gallery" on each link, with data-title="Caption text" and data-alt for accessibility. For example:

html
Copy
<a href="after.jpg" data-lightbox="polish-gallery" data-title="Dining table – after polishing">
  <img src="after-thumb.jpg" alt="Dining table after polishing">
</a>
Captions (via data-title or <figcaption>) should be concise (“Victorian chair – after restoration”). Alt text must describe the image for screen-readers (per WCAG).

Figure: Before-and-after wood restoration images (FrenchPolishers).

Content Copy Examples
Hero Tagline: e.g. “French Polishing & Restoration – Traditional Craftsmanship Since 1986”. A subheading might add: “Expert furniture repair and finishing, bringing your woodwork back to life.”

Services Descriptions: 3–4 brief blurbs. For example:

French Polishing: “Hand-rubbed shellac finish for antiques and heirlooms. We apply multiple fine coats to achieve a deep, glossy patina.”
Furniture Repair: “Structural fixes for splits, loose joints and spindles. We expertly glue, clamp and reinforce so damage disappears.”
Veneer & Scratch Repair: “Chips, cracks or watermarks? We colour-match and carefully fill imperfections for a seamless look.”
Custom Finishes: “Staining, pickling or new lacquer finishes on new or restored pieces. We tailor each finish to your décor.”
(Note: “We first consider partial restoration…depend[ing] on damage… repaired and refinished or completely stripped” – highlight this flexible approach.)

Testimonial Templates: e.g. “Outstanding service! They restored our old dining table to perfect condition – it looks brand new.” – [Customer]; “We thought our cabinet was ruined by the heat stain, but [Company] matched the finish flawlessly. Highly recommended.” These should read naturally and mention service/outcome.

CTA Text: For buttons: “Call Now”, “Email Us”, “Get a Free Quote”, “Book Your Visit”. Use action verbs.

SEO & Metadata
Set an SEO-friendly <title> and meta description. For example:

html
Copy
<title>Furniture Polishing & Restoration – [Your Business Name], [Location]</title>
<meta name="description" content="Expert furniture polishing and restoration in [City]. French polishing, veneer repair and custom wood finishes by [Your Name], 20+ years experience. Free pickup over £75. Contact us today!">
Meta descriptions should be concise and relevant (Google calls them a “pitch” to users). Include keywords (like “furniture polishing”, “[Location]”) naturally. Use unique content for each page (though single-page sites have one main meta description).

Include structured data for LocalBusiness. Using JSON-LD, embed something like:

json
Copy
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "image": ["https://example.com/photo.jpg"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "YourTown",
    "addressRegion": "County",
    "postalCode": "AB12 3CD",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "telephone": "+44 1234 567890",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "08:00",
      "closes": "18:00"
    },
    /* ... other days ... */
  ],
  "priceRange": "££",
  "url": "https://www.yoursite.com"
}

This follows Google’s guidelines for LocalBusiness (include hours, phone, etc.). It may trigger a knowledge panel or map features in search.

Mobile/Responsive & Accessibility
Design mobile-first: use fluid layouts and CSS grid/flexbox so content reflows on small screens. Include meta viewport. Example practices: set images to max-width:100% so they shrink on mobile (responsive images), and use relative units (%, em) for margins. Ensure buttons and links are large enough to tap.

For accessibility (WCAG) compliance:

Provide alt text for every informative image. If purely decorative, use empty alt (alt="").
Ensure color contrast of text against background is at least 4.5:1. For example, dark brown/black text on a light background or vice versa.
All form fields must have  tags and clear instructions. Do not rely on color alone to indicate required fields.
Use semantic HTML (, , 

, , etc.). Skip navigation links can improve screen-reader experience.
Make interactive elements (buttons, links) keyboard-accessible (e.g. tabindex, proper focus styles).
These measures also help SEO and usability.
Hosting, Domain & SSL
Choose a free static hosting provider with Git integration, e.g. GitHub Pages, Netlify, or Vercel. These all support custom domains and include free TLS/SSL certificates. For example, Netlify and Vercel auto-provision HTTPS and global CDN caching. GitHub Pages (linked to your GitHub repo) allows custom domains with HTTPS. Setup steps:

Register a domain name (e.g. via Namecheap or GoDaddy).
Push code to a Git repository (e.g. GitHub).
Deploy:
If using GitHub Pages: enable Pages in repo settings (choose main branch).
If using Netlify/Vercel: connect your repo and they auto-deploy on push.
Configure SSL: These hosts typically handle Let’s Encrypt certificates automatically. (Ensure all resources are loaded over HTTPS to avoid mixed-content issues.)
No complex CMS is needed – just static files (HTML/CSS/JS). Recommended file structure:

bash
Copy
/index.html
/css/style.css
/js/script.js
/images/    (photos, icons)
/videos/    (if any demonstrations)
/assets/    (fonts, downloads)
Use logical folder names. A typical deployment command could be simply git push (with automated build). After deployment, submit a sitemap and enable Search Console for the site’s URL.

Design & Style Guide
Color Palette: Use warm, natural hues reflecting wood tones. For example, dark brown or black for text (#000 or #333), cream/white background (#fdfaf5 or #fff), and a gold/amber accent (e.g. #C49E60 as seen in [16] Barrdale van logo) for buttons or highlights. Ensure sufficient contrast.

Typography: Choose a readable sans-serif (e.g. Roboto, Arial) for body text, with a complementary serif (e.g. Playfair Display, Times) or bold sans for headings to convey craftsmanship. Use large, clear fonts for headings (≥24px on desktop).

Buttons/CTAs: Make primary CTAs (Call, Quote) distinct. For example, dark button with gold border or gold fill and white text. On hover, invert colors or darken. Use padding (~10px 20px) for touch comfort. The reference site uses bold, centred buttons for actions.

Layout & Spacing: Use a 12-column grid or CSS Flexbox. Keep 20–40px vertical spacing between sections. Center content in containers (max-width ~1200px). Align text left for readability. Galleries can use 2–3 columns on desktop, collapsing to 1 column on mobile.

Imagery: Feature polished-wood textures and workshop photos (like [33] craftsman polishing) to reinforce authenticity. Overlay semi-transparent colour blocks behind text for readability on images if needed.

Overall, emulate the clean, uncluttered look of FrenchPolishers: white space around sections, bold section headings, and large images.

Analytics & Contact Tracking
Install Google Analytics 4 (GA4) for site usage metrics. Use Google Tag Manager to manage tags (e.g. GA4 events, remarketing). Track key events:

Form submissions: use GTM trigger on “Submit” to send event (for conversion tracking).
Button clicks: phone link (tel:) and WhatsApp link can be tracked via GTM click triggers.
Button/CTA clicks: (“Call Now”, “Book Quote”).
For phone calls, consider a call tracking service if you need attribution (e.g. Twilio or CallRail) or simply use GTM’s enhanced link attribution for tel:.

No citation needed here; use best practices. Ensure cookies/analytics scripts load asynchronously.

Feature Priority Comparison
Feature	Priority	Notes
Hero section (tagline + CTAs)	Must	Immediate branding; include phone/WhatsApp/email links
Responsive design (mobile-friendly)	Must	Google favors mobile-first; use fluid layouts
Contact form with key fields	Must	Captures leads; fields: name, email, phone, address, service, datetime
Phone/WhatsApp/email CTA	Must	Clickable contact ensures quick conversions
SEO meta tags (title/description)	Must	Improve search listing quality
HTTPS with SSL	Must	Security and trust; free on Netlify/GitHub
LocalBusiness JSON-LD schema	Should	Enhances visibility; includes hours/phone (Google recommendation)
Service descriptions	Should	Explains offerings (with examples from [82†L55-L58])
Gallery with before/after slider	Should	Visual proof of work; slider example
Image lightbox with captions/alt text	Should	Better UX; alt text a11y requirement
Testimonials section	Should	Builds trust (customer quotes)
Google Maps embed	Could	Helps local customers; shows exact service area
Business Hours	Could	Useful info; included in schema and contact area
Analytics (GA4/GTM)	Should	Data-driven improvements
Call tracking integration	Could	Optional for lead analysis
Social media links/icons	Could	Enhances credibility, but not crucial
Additional CTAs (e.g. WhatsApp widget)	Should	Social chat can increase leads

HTML Snippets (Copy-Ready)
Hero Section (HTML):
html
Copy


Traditional Furniture Polishing & Restoration

Bringing your wood back to life with expert craftsmanship.

Call 01234 567 890@example.com" class="btn">Email Us
  WhatsApp

Service Item (HTML):
html
Copy


French Polishing

Hand-applied shellac finishes to achieve a deep, rich gloss on antiques and heirlooms. Preserves originality and value.


Gallery Item (HTML with Before/After slider):
html
Copy


Dining Table Restoration


    


      
    


    


      
    


    

“Restored by [Your Business], Summer 2026.”


Contact Form (HTML):
html
Copy


Name*Send Enquiry


Include action="/send" or use AJAX; ensure validation and action="mailto:" is not used (it’s better to handle server-side or via service).
Implementation Timeline
2026-08-06
2026-08-07
2026-08-08
2026-08-09
2026-08-10
2026-08-11
2026-08-12
2026-08-13
2026-08-14
2026-08-15
2026-08-16
2026-08-17
2026-08-18
2026-08-19
2026-08-20
Domain & Hosting Setup
Repo & SSL Configuration
Page Structure & Layout
Write Copy & Metadata
Build Hero & Services
Implement Gallery Slider
Develop Contact Form & CTA
Mobile QA & Accessibility
Analytics & SEO Check
Final Review & Launch
Setup
Design & Content
Development
Testing & Launch
Implementation Timeline


Show code
Implementation Checklist
Domain & Hosting (1d): Register domain; create Git repo; choose hosting (GitHub Pages/Netlify). Enable HTTPS (SSL).
Design/Layout (2d): Sketch wireframes; set colour palette (wood tones & accent gold); select fonts; create HTML/CSS grid.
Copywriting (2d): Finalise tagline, services text, about and testimonials. Ensure SEO keywords in headings/meta.
Gallery Setup (2d): Collect before/after images; code comparison slider (using [58] as guide); integrate lightbox captions.
Form & Contact (1d): Code contact form with fields (labelled for a11y); link phone/email/WhatsApp; embed Google Map.
Responsive & Accessibility (1d): Test on devices; set meta viewport; check contrast (≥4.5:1) and alt text; ensure keyboard navigation.
SEO/Schema (1d): Add 

ask the things that is not mentioned here use the placeholders for that i wil add them later

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a4123d9-87da-40e3-bd56-3e828e9153d4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
