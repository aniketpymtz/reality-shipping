# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/reality-shipping/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Reality Shipping & Logistics
**Generated:** 2026-10-27 with [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
(`"maritime shipping logistics B2B corporate trust" --design-system --variance 4 --motion 4 --density 3`),
then adapted to the client's existing brand (logo blue, navy, gold).
**Category:** B2B Service
**Design Dials:** Variance 4/10 (Balanced / Modern) | Motion 4/10 (Standard) | Density 3/10 (Spacious)

Implementation lives in `src/app/globals.css` (tokens + `@utility` primitives),
`src/components/ui/SectionHeader.tsx` and `src/lib/motion.ts`. Use those — don't hand-roll new variants.

---

## Global Rules

### Color Palette

The generator suggested navy `#0F172A` + CTA blue `#0369A1`. We keep the client's equivalents.

| Role | Hex | Tailwind token | Notes |
|------|-----|----------------|-------|
| Primary (dark surfaces) | `#0A1628` | `blue-950` | Footer, services band, contact card |
| Accent / CTA | `#0675BC` | `brand-blue` | 4.9:1 on white. **Only** for CTAs, links, icons, key numbers |
| Accent hover | `#055A91` | `brand-blue-dark` | |
| Heading text | `#0F172A` | `slate-900` | |
| Body text | `#475569` | `slate-600` | Never use `slate-400` for text (2.6:1 — fails) |
| Muted text (min) | `#64748B` | `slate-500` | Small meta text only |
| Surface | `#FFFFFF` / `#F8FAFC` | `white` / `slate-50` | Alternate between sections |
| Border | `#E2E8F0` | `slate-200` | |
| Gold — decorative | `#C9A84C` → `#B8941F` | `gold-400/500` | Rules & dividers. `gold-400` is OK as text on navy (7.9:1) |
| Gold — text on light | `#8A6A12` | `gold-600` | Eyebrow labels on white (5.1:1) |
| Icon on dark | `#93C5FD` | `blue-300` | |

### Typography

- **Font:** Plus Jakarta Sans (single family, via `next/font`). The generator suggested Lexend + Source Sans 3; we kept the existing font for brand continuity — swap in `layout.tsx` if the client wants it.

| Class | Use |
|-------|-----|
| `heading-display` | Hero `h1` only |
| `heading-section` | Every section `h2` (rendered by `SectionHeader`) |
| `heading-card` | Card / panel `h3` |
| `eyebrow` | Uppercase label above headings, list numbers |
| `lead-text` | Intro paragraph under a section heading |

Body copy is 16px min (`text-base`); `text-sm` only for card descriptions and meta. No `vw`-based font sizes.

### Layout & Spacing

- Container: `page-container` (`max-w-7xl px-6`). Nothing breaks out of it except full-bleed backgrounds.
- Section rhythm: `section-y` (`py-20 lg:py-28`). Header → content gap is built into `SectionHeader` (`mb-12 lg:mb-16`).
- Grid gaps: `gap-6` for card grids.
- Section backgrounds alternate: Hero (video) → About (white) → Services (navy) → Port (slate-50) → Global (white) → Why Us (slate-50) → Contact (white) → Footer (navy).

### Shape

- `rounded-lg` — buttons, inputs
- `rounded-xl` — icon tiles
- `rounded-2xl` — cards, image/media blocks, panels
- No clip-path chamfers, no square media blocks.

---

## Component Specs

### Section header

Always use `<SectionHeader eyebrow title lead? action? tone? />`. Left-aligned, gold rule + eyebrow, optional right-hand action link. `tone="dark"` on navy/image backgrounds.

### Buttons

`btn` + one tone. 48px min height, 8px radius, `text-sm font-semibold`, 200ms colour transition.

| Class | Surface |
|-------|---------|
| `btn btn-primary` | Light surfaces — the default CTA |
| `btn btn-light` | Primary CTA on dark/video surfaces |
| `btn btn-outline-light` | Secondary CTA on dark/video surfaces |

Inline links: `group link-arrow text-brand-blue hover:text-brand-blue-dark` + Lucide `ArrowRight` that nudges `group-hover:translate-x-1`.

### Cards

White, `rounded-2xl border border-slate-200 p-7`, hover `shadow-lg shadow-slate-200/60`. Image cards: `rounded-2xl`, navy gradient scrim `from-blue-950/85`, gold underline that grows on hover.

### Inputs

`px-4 py-3 rounded-lg border-slate-200`, focus `ring-2 ring-brand-blue`. Every input has a `<label htmlFor>`.

---

## Motion

- Framer Motion: import `EASE` and `reveal` from `src/lib/motion.ts` — fade-up 24px, 0.6s, 80ms stagger.
- `MotionConfig reducedMotion="user"` wraps the app; GSAP and Locomotive Scroll skip when `prefers-reduced-motion: reduce`.
- No blur filters on text; hover-only interactions must also work on focus and tap.

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design, AI purple/pink gradients, gradient text
- ❌ Hidden credentials
- ❌ Emojis or text glyphs (✓, →) as icons — use Lucide
- ❌ `vw`-based font sizes
- ❌ Raw hex in components — use tokens
- ❌ Low-contrast text (`slate-400`, `gold-500` on white)
- ❌ Invisible focus states
- ❌ New section header / button variants outside this file

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from Lucide
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
