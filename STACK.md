# Stack — G&M Reparaciones

## Choice: Next.js (App Router) + Tailwind CSS v3 + GSAP

**Justification:** The dossier's stack hint recommends vanilla HTML+CSS+JS as sufficient, but the brief requires genuine separate routes for legal pages (/aviso-legal, /privacidad, /cookies), server-rendered meta/JSON-LD for every route, next/font for self-hosted fonts (GDPR-safe, no Google Fonts CDN request), and next/image for optimised WebP serving. Next.js App Router covers all of these with near-zero overhead over a static build, and `next export` produces a fully-static output deployable to any CDN. GSAP with ScrollTrigger handles the scroll-reveal animations isolated in 'use client' leaf components, honoring prefers-reduced-motion via gsap.matchMedia(). Tailwind provides the utility layer for the brand palette tokens. No React framework complexity leaks into the marketing page — it is effectively a static site with better tooling.

## Key packages
- next@15 (App Router, static export capable)
- react@19
- tailwindcss@3 (compatible with Next 15)
- gsap@3 (ScrollTrigger, scroll reveals)
- @phosphor-icons/react (icon library — not Lucide, not hand-rolled SVGs)
- next/font/google (Outfit + Work Sans, self-hosted, no CDN request)

## Deploy target
`npm run build` produces .next/ optimized output. For pure static hosting (Netlify, Vercel, GitHub Pages), add `output: 'export'` to next.config.ts and run `next build`.
