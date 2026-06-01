# G&M Reparaciones — Landing Page

Production-ready single-page landing for G&M Reparaciones, a domestic appliance repair service in Valladolid, Spain.

## Stack

- **Next.js 16** (App Router, static-export capable)
- **Tailwind CSS v4** (utility-first, brand tokens via `@theme`)
- **GSAP 3** + ScrollTrigger (scroll-reveal animations, honors `prefers-reduced-motion`)
- **@phosphor-icons/react** (icon set)
- **next/font** (Outfit + Work Sans — self-hosted, GDPR-safe, no Google CDN request at runtime)

## Install and run

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Serve production build
npm run start
```

## Deploy

The site builds to `.next/`. For static hosting (Netlify/GitHub Pages), add `output: 'export'` to `next.config.ts` and run `npm run build`.

Recommended: Deploy to Vercel (zero-config) or Netlify.

---

## PLACEHOLDERS — Fill these in before going live

All placeholders are centralized in:

```
lib/constants.ts
```

Open that file and replace every value marked [PLACEHOLDER]:

### Contact

| Placeholder | Where used | What to put |
|---|---|---|
| +34 600 000 000 (phone) | Header, hero, footer, JSON-LD, contact section | Real business phone |
| +34600000000 (phoneDial) | All tel: links | Same number without spaces |
| +34 600 000 000 (whatsapp) | WhatsApp button display | Real WhatsApp number |
| +34600000000 (whatsappDial) | All wa.me links | Same number without spaces |
| info@gmreparaciones.es | Footer, contact section, legal pages, JSON-LD | Real email address |

### Legal (required for LSSI-CE compliance)

| Placeholder | Where used | What to put |
|---|---|---|
| B00000000 (NIF) | Aviso Legal, footer, JSON-LD | Real NIF/CIF |
| G&M Reparaciones S.L. (razonSocial) | Aviso Legal, footer, JSON-LD | Full legal company name |
| Calle Ejemplo, 1 (direccion) | Aviso Legal, JSON-LD | Real registered address |
| 47001 (codigoPostal) | Aviso Legal, JSON-LD | Real postal code |
| Registro Mercantil | Aviso Legal page | Real mercantile registry entry |

### SEO and domain

| Placeholder | Where used | What to put |
|---|---|---|
| https://gmreparaciones.es (url) | Sitemap, JSON-LD, OG tags, canonical | Real domain |
| /og-image.jpg (ogImage) | Open Graph / Twitter card | A branded on-brand placeholder (1200x630px, black background, cyan→orange gradient, company name and tagline) is already present at `public/og-image.jpg`. Replace it with your own designed image before launch. Re-run `node scripts/generate-og-image.mjs` if you want to regenerate the current placeholder. |
| Google Reviews URL | Testimonios section | The "Ver opiniones en Google" button is currently **disabled** (shown with `cursor-not-allowed` and a "(próximamente)" label). Once you have your Google Business Profile URL, set `SITE.googleReviewsUrl` in `lib/constants.ts` and swap the `<span aria-disabled>` in `TestimoniosSection.tsx` back to a real `<a>` tag. See comment in that file. |

### Analytics (optional)

In `lib/constants.ts`, uncomment and fill in `gtmId` with your Google Tag Manager ID.
In `components/CookieBanner.tsx`, uncomment the GTM initialization inside the `if (c.analiticas)` block.
Analytics scripts must ONLY fire after cookie consent is given.

### Contact form backend

In `components/ContactoSection.tsx`, replace the simulated setTimeout with a real form handler:

Option 1 - Formspree:
```typescript
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formState),
});
```

Option 2 - Netlify Forms: add `name="contact"` and `data-netlify="true"` to the form tag.

### Content

| Item | What to do |
|---|---|
| Testimonials | Replace the 4 placeholder testimonials in lib/constants.ts with real client reviews |
| Trust stats | Update +500 reparaciones, 12m garantia, 2h respuesta with real figures |
| Hero stats strip | Update the 3 stat tiles in HeroSection.tsx with real numbers |
| Business hours | Update horaApertura/horaCierre in constants if different from Mon-Fri 09:00-19:00 |
| OG image | Create a 1200x630px image at public/og-image.jpg |
| Saturday service | If added, update openingHoursSpecification in app/layout.tsx and diasSemana in constants |

### Legal pages

The legal pages at /aviso-legal, /privacidad, /cookies contain placeholder text.
A lawyer familiar with LSSI-CE / RGPD should review and complete these pages before launch.

---

## Routes

| Route | Description |
|---|---|
| / | Main landing page (all sections) |
| /aviso-legal | Aviso Legal (LSSI-CE Art. 10) |
| /privacidad | Politica de Privacidad (RGPD + LOPDGDD) |
| /cookies | Politica de Cookies (LSSI-CE Art. 22.2) |
| /sitemap.xml | Sitemap (auto-generated) |
| /robots.txt | Robots (auto-generated) |

## GDPR / Cookie consent

The cookie banner is in components/CookieBanner.tsx. It:
- Does NOT fire non-essential scripts before consent
- Three categories: necessary (always-on) / analytics / marketing
- Prominent "Rechazar todo" button on the first layer
- Honors Do-Not-Track and Global Privacy Control signals
- Consent stored in localStorage under key gm-cookie-consent
- Bump CONSENT_VERSION when cookie usage changes

## Accessibility

- WCAG 2.2 AA: semantic HTML, focus states, alt text, aria-labels, heading order, lang="es"
- Skip link to main content
- prefers-reduced-motion respected in all GSAP animations
- Color contrast: cyan on black = ~6.8:1 (AAA). Orange on black = ~6.2:1 (AAA).

## Local SEO

- JSON-LD LocalBusiness + HomeAndConstructionBusiness schema in head
- FAQPage schema on FAQ section
- Review schema on Testimonials section
- geo.region, geo.placename, geo.position meta tags
- All 8 service keywords in headings and copy
- Municipality list in Cobertura section
- Sitemap.xml at /sitemap.xml
