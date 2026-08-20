# The Photo Booth Company — Website

A full rebuild of the original single-file HTML site as a modern, animated,
fully responsive Next.js application. Same content and sections as the
original, redesigned with a clean, minimal, "fintech-grade" visual system —
neutral near-black / cream base with your brand gold and sage colors used
as restrained accents.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/app/globals.css`)
- **Framer Motion** for scroll reveals, the hero entrance, the mobile menu,
  the FAQ accordion, and the animated stat counters
- **react-hook-form + zod** for real, typed client-side form validation
- **lucide-react** for a few utility icons (menu, star, plus, map pin);
  all brand/feature icons are hand-rolled SVGs in `src/components/icons.tsx`
  (ported 1:1 from the original file)
- **@fontsource-variable/inter** and **@fontsource-variable/space-grotesk**,
  self-hosted variable fonts (no external Google Fonts request at runtime)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx        # fonts + global metadata
    globals.css        # design tokens (colors, fonts, shadows, keyframes)
    page.tsx            # assembles every section in order
  components/
    icons.tsx           # all inline SVG icons used across the site
    sections/            # one component per homepage section
      Navbar.tsx
      Hero.tsx
      Features.tsx
      TrustedBy.tsx      # auto-scrolling logo marquee
      Gallery.tsx
      Products.tsx
      Events.tsx
      Faq.tsx
      Testimonials.tsx
      Booking.tsx        # react-hook-form + zod validated form
      Contact.tsx
      Footer.tsx
    ui/                   # design-system primitives
      Container.tsx
      Button.tsx
      SectionHeading.tsx
      Reveal.tsx          # scroll-reveal wrapper (Framer Motion)
      AnimatedCounter.tsx
      Marquee.tsx
  lib/
    data.ts               # ALL page copy/content lives here
    utils.ts               # cn() class helper
public/
  images/                  # real photos extracted from the original file
```

## Editing content

Every piece of copy — features, products, events, FAQs, testimonials,
booking highlights, contact details, footer links — lives in
`src/lib/data.ts`. Change the copy there; you generally shouldn't need to
touch the section components at all for text edits.

## Brand colors

Defined once in `src/app/globals.css` under `@theme inline`, then used as
Tailwind utilities everywhere (`bg-ink-950`, `text-gold-600`, etc.):

| Token | Hex | Used for |
|---|---|---|
| `ink-950` / `ink-900` | `#14110d` / `#2d2722` | Dark section backgrounds, primary text |
| `paper-50` / `paper-100` / `paper-200` | `#fbf9f4` / `#f5f0e6` / `#e8dfcf` | Light section backgrounds |
| `gold-500` / `gold-600` | `#b29a6a` / `#8a7550` | Primary accent — CTAs, highlights, icons |
| `sage-500` | `#68705a` | Secondary accent, used sparingly |

These are your original brand colors — kept exactly, just applied with more
restraint (accents on a neutral base) for a cleaner, premium feel.

## Connecting the booking form

`src/components/sections/Booking.tsx` currently simulates a successful
submission (`onSubmit`, ~line 60). Swap the body of that function for a real
integration, for example:

```ts
// Formspree
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

or a Next.js API route at `src/app/api/bookings/route.ts` that emails you /
writes to a database.

## Images

All photos and brand logos were extracted from the original file's embedded
base64 data and saved as real files under `public/images/`. Swap any of them
out for higher-resolution originals whenever you have them — the components
reference them by path from `src/lib/data.ts`.

## Deploying

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any
Node host. `npm run build && npm run start` for a self-hosted deployment.
