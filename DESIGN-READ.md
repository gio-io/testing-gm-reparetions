# Design Read — G&M Reparaciones

Reading this as: local service lead-gen landing for Spanish homeowners (mobile-first, trust-driven), with a bold cold/hot dualist brand language, leaning toward dark-base Tailwind utility build with GSAP scroll reveals and a strong orange CTA system.

## Dials
- DESIGN_VARIANCE: 7 (split hero, asymmetric cold/hot service grid, varied section layouts)
- MOTION_INTENSITY: 5 (scroll reveals on service cards and trust strip, floating WhatsApp, hero stagger — no scroll hijack, honors reduced-motion)
- VISUAL_DENSITY: 5 (lead-gen page needs breathing room but many CTA repetitions; moderate density)

## Palette
- Background base: #0A0A0A (near-black, not pure black)
- Cold accent: #29ABE2 (cyan — frigorífico, aire acondicionado)
- Cold secondary: #1BA7DE
- Hot accent: #F7931E (orange — horno, calentador, vitrocerámica, campana)
- Hot secondary: #E8431F (warm red)
- Neutral light: #F5F5F5 (light sections for readability)
- Neutral mid: #1A1A1A (card backgrounds)
- Text on dark: #FFFFFF / #E5E5E5
- Text on light: #0A0A0A / #333333

## Typography
- Heading: Outfit (geometric, modern, bold — not Inter, not serif)
- Body: Work Sans (clean, readable at small sizes on mobile)
- Both self-hosted via next/font/google with display: swap

## Component directions
- Service cards: cold-tinted (cyan border/icon) for frío appliances, hot-tinted (orange) for calor, neutral for wash/clean
- Primary CTA button: #F7931E orange, dark text, full-width on mobile, pill-shaped
- WhatsApp CTA: #29ABE2 cyan, white text
- Trust strip: dark background, large white numbers, accent colored labels
- Process steps: numbered with alternating cold/hot accent dots
- Testimonials: dark cards with subtle border, star rating in orange
