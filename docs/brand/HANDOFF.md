# Cityroom — Website Handoff for Claude Code

A complete design-system bundle for building the **Cityroom** marketing website
(Polish rental-management company in Poznań, audience: apartment owners).

---

## 0. What this bundle is — read this first

This package contains **two kinds of artifact**, and you must treat them
differently:

### `design_system/` — production source of truth
These files are meant to ship. Copy them into the codebase and keep them
authoritative:

| File / folder | Status | What to do |
|---|---|---|
| `colors_and_type.css` | Production tokens | Import once at the root of the app. Use the CSS variables everywhere — do **not** hard-code hex values, font families, or spacing. |
| `fonts/Ibrand-PL.*` | Brand asset | Self-host. Custom face — no CDN. Used only for display/headlines. |
| `fonts/Manrope-*.ttf` | Brand asset | Self-host all 7 weights (200–800). Used for body/UI. |
| `assets/logo-cityroom-black.png` / `.jpg` | Brand asset | Master logo. Use the PNG by default. |
| `assets/punktor-cityroom.png`, `assets/punktor.svg` | Brand mark | The blue gradient bullet. Prefer the SVG (inline gradient, scales). |
| `assets/illustrations/*.png` | Brand pack | Spot illustrations for feature blocks. **Never recolor.** Use at ≥200 px. |
| `README.md` | Brand book | Primary source for tone, voice, color, type, spacing, motion, layout rules. **Read in full before writing copy or making layout decisions.** |
| `SKILL.md` | Quick cheat-sheet | One-page summary. |

### `reference_implementation/` — design references (NOT production code)
HTML/JSX prototypes that show *how the system composes*. They are written
with inline Babel + UMD React for in-browser rendering. **Do not ship them.**
Recreate the same screens in the project's chosen framework, lifting the
exact tokens, spacing, copy, and structure.

| File / folder | Why it's here |
|---|---|
| `ui_kits/owners/index.html` | Full marketing landing page (Nav, Hero, Stats, How it works, Services, Testimonial, ContactForm, Footer). The reference target for the live site. |
| `ui_kits/owners/*.jsx` | Per-section JSX showing markup, content, and behavior. |
| `ui_kits/owners/styles.css` | Section-specific CSS. **Lift these styles** as a starting point, but rename the `.cr-*` classes to your framework's conventions. |
| `preview/*.html` | Design-system swatches: each token, component, illustration. Useful as visual specs while building. |

---

## 1. Recommended tech stack

The brand has no existing codebase. **Pick the simplest stack that fits.**

**Recommendation: Next.js 14+ (App Router) with TypeScript.**
- Polish-language SEO matters → SSR/SSG out of the box.
- The site is content-heavy and mostly static → ideal for `next/image` + static
  generation.
- `next/font/local` handles self-hosted Ibrand-PL and Manrope cleanly.

Acceptable alternatives: Astro (lighter, also great for content); plain Vite +
React if SPA is fine; Remix.

**Do not use:** Tailwind without a tokens layer, Material UI, Bootstrap,
Chakra. The brand is too specific — these systems will fight you. Use
vanilla CSS Modules / CSS variables, or Panda/Vanilla Extract / styled-components
mapped onto the tokens in `colors_and_type.css`.

### Font loading (Next.js)
```ts
// app/fonts.ts
import localFont from 'next/font/local';

export const ibrand = localFont({
  src: '../public/fonts/Ibrand-PL.woff2',
  variable: '--font-display',
  display: 'swap',
});

export const manrope = localFont({
  src: [
    { path: '../public/fonts/Manrope-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../public/fonts/Manrope-Light.ttf',      weight: '300', style: 'normal' },
    { path: '../public/fonts/Manrope-Regular.ttf',    weight: '400', style: 'normal' },
    { path: '../public/fonts/Manrope-Medium.ttf',     weight: '500', style: 'normal' },
    { path: '../public/fonts/Manrope-SemiBold.ttf',   weight: '600', style: 'normal' },
    { path: '../public/fonts/Manrope-Bold.ttf',       weight: '700', style: 'normal' },
    { path: '../public/fonts/Manrope-ExtraBold.ttf',  weight: '800', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});
```

Apply `${ibrand.variable} ${manrope.variable}` to `<html>` and use the
existing `--font-display` / `--font-body` variables from `colors_and_type.css`.

---

## 2. Fidelity

**High-fidelity.** All screens, colors, type, spacing, copy, and
illustration choices are final. Recreate the marketing page pixel-perfectly
from `reference_implementation/ui_kits/owners/`. Use `preview/` swatches as
secondary specs.

The only thing that is **not** final:
- Real photography (none provided yet — placeholder illustrations are used in
  the reference).
- Backend wiring for the contact form.
- Real testimonial content (one placeholder testimonial exists; the client
  will provide real ones).

---

## 3. Pages to build

The reference at `reference_implementation/ui_kits/owners/index.html` is a
**single-page marketing site**. Build it as one route (`/`) with anchor-scroll
navigation between sections. Optionally add legal pages (`/regulamin`,
`/polityka-prywatnosci`) — content TBD.

### Sections (in order on the landing page)

1. **Nav** (`Nav.jsx`)
   - Sticky top, 12 px from top edge, `max-width: 1200px`.
   - Glass-blur: `background: rgba(255,255,255,0.72); backdrop-filter: blur(14px);`
   - 1 px hairline border, 16 px radius, soft shadow, deeper shadow on scroll.
   - Left: logo (24 px tall). Center: links (Jak to działa / Usługi / Opinie / Kontakt). Right: dark CTA "Umów rozmowę".

2. **Hero** (`Hero.jsx`)
   - 2-column grid 1.1fr / 0.9fr, 64 px gap, 100 px top padding.
   - Soft blue radial blob (640 px) bleeding off the top-right.
   - Eyebrow "DLA WŁAŚCICIELI MIESZKAŃ" → headline (`clamp(44px, 6vw, 76px)`, weight 500, `letter-spacing: -0.025em`) → 20 px lead → CTA row (accent gradient + ghost) → small trust line with checkmark.
   - Right column: `Office Work.png` illustration, max 520 px.
   - Headline: *Twoje mieszkanie pracuje. Ty odpoczywasz.*

3. **Stats** (`Stats.jsx`)
   - White band, 56 px padding, hairline borders top + bottom.
   - 4-column grid. Numbers in Ibrand-PL bold 700, `clamp(42px, 4.4vw, 60px)`.
   - **One stat number** uses `.text-gradient` (the brand's "one blue moment").
   - Labels: 12 px, `letter-spacing: 0.14em`, uppercase, `--fg3`.

4. **How it works** (`HowItWorks.jsx`)
   - 4 numbered steps, 2-col grid, 36 × 56 px gap.
   - Each row: monospace step number (`01`–`04`) → Punktor bullet → title (22 px, Ibrand-PL 500) + description (15 px, `--fg3`).

5. **Services** (`Services.jsx`)
   - Section background `--cr-paper` (`#fafafa`).
   - 3-col grid, 24 px gap. Each card: `#fff`, 1 px border, 16 px radius, 28 × 26 px padding, `translateY(-2px)` on hover.
   - 120 × 120 px brand illustration on top, then 20 px title, 14 px description.

6. **Testimonial** (`Testimonial.jsx`)
   - 2-col grid 1.2fr / 0.8fr.
   - Quote in Ibrand-PL 500, `clamp(26px, 2.6vw, 34px)`, line-height 1.3.
   - Avatar circle 44 px filled with brand gradient + monogram.

7. **Contact** (`ContactForm.jsx`)
   - White section, hairline top border.
   - 2-col grid: left = headline + meta list (icons in `--cr-blue-600`); right = form card on `--cr-paper` with 1 px border, 16 px radius, 28 px padding.
   - Inputs: 8 px radius, 1 px `--border-strong`, focus = `border-color: --cr-blue-400` + `box-shadow: 0 0 0 4px rgba(46,176,230,0.15)`.
   - Success state: blue-50 card with check icon.

8. **Footer** (`Footer.jsx`)
   - 72 / 36 px padding, hairline top.
   - Top row: brand block (logo + 1-line tagline) | 3 columns of links.
   - Bottom row: copyright + legal links.

### Responsive
- Single breakpoint at `900 px`. Below it: collapse all 2-col grids to single, hide nav links (replace with hamburger — TODO), stack stats 2×2.

---

## 4. Design tokens (excerpt — full set in `design_system/colors_and_type.css`)

### Colors
| Token | Hex | Use |
|---|---|---|
| `--cr-ink` | `#0a0b0d` | Display type, logo, primary buttons |
| `--cr-ink-10` | `#2a2d33` | Body copy |
| `--cr-ink-30` | `#6b7280` | Secondary / metadata |
| `--cr-ink-50` | `#9aa1ad` | Tertiary / placeholders |
| `--cr-paper` | `#fafafa` | Default page background |
| `--cr-mist` | `#f4f5f7` | Cards / subtle fills |
| `--cr-line` | `#e7e9ee` | 1 px hairlines |
| `--cr-line-2` | `#d7dae1` | Stronger borders |
| `--cr-blue-400` → `--cr-blue-600` | `#2eb0e6` → `#0773cb` | Brand gradient |
| `--cr-blue-50` | `#eaf6fd` | Success-state surface |

**Gradient (signature):** `linear-gradient(135deg, #2eb0e6 0%, #0773cb 100%)` — exposed as `--cr-gradient`. Use **once per viewport**.

### Typography
- Display: `Ibrand-PL` 500 default, 700 for stat numbers. `letter-spacing: -0.02em`.
- Body: `Manrope` 400/500/600. Default 17 px / line-height 1.55.
- Eyebrow: 12 px, `letter-spacing: 0.14em`, uppercase, weight 600, color `--cr-blue-600`.
- Use `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.

### Spacing scale (4 px base)
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 — exposed as `--s-1` through `--s-32`. Section vertical rhythm: ≥80 px desktop, ≥48 px mobile.

### Radii
4 / 8 / 12 / 16 / 24 / 32 / 999 — `--r-xs` … `--r-pill`. Cards = 12 px, images = 16 px, inputs = 8 px.

### Shadows
`--shadow-xs` / `-sm` / `-md` / `-lg` (soft, low-contrast) and `--shadow-glow` (blue, **CTA only, max one per view**).

### Motion
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`).
- Durations: 200 ms state, 420 ms reveals.
- Press: `transform: scale(0.98)` on buttons. **No springs, no parallax, no auto-playing video.**

---

## 5. Content & voice (CRITICAL)

The brand voice is the most fragile part of this system. Read
`design_system/README.md` § 3 in full. Rules in one screen:

- **Polish-first.** Address the reader as **"Ty"**, capitalized when formal. The company refers to itself as **"my"**.
- **No exclamation marks. Ever.** No emoji. No `!!`.
- **No startup vocabulary**: avoid *platforma, ekosystem, rewolucjonizujemy, game-changer, najlepszy*.
- **Sentence case** for every heading, button, nav item. `ALL CAPS` only on eyebrow labels.
- **Polish typography:** spaces in numbers (`2 400 zł`, `85 %`), low-high quotes (`„…"`) in body copy, em-dashes for rhythm.
- **CTA tone:** *"Umów spokojną rozmowę"*, never *"Zarezerwuj teraz"*.

Final copy already lives in the reference JSX files — lift it verbatim
unless the client signs off on changes.

---

## 6. Iconography

- **Lucide** is the working icon set, loaded via `lucide` npm package or CDN.
- **Stroke width 1.25** (1.35 on dark/gradient backgrounds) — thinner than Lucide's default. Set via `<svg stroke-width="1.25">` or the React component prop.
- Sizes: 20 px inline, 24 px nav, 32 px feature blocks.
- One feature block per view may use the brand gradient as an icon fill — never more than one.
- The **Punktor** (`assets/punktor.svg`) is **not** an icon — it's the bullet glyph. One per section, max.

---

## 7. Imagery

The bundle ships with ~50 isometric line-art illustrations
(`assets/illustrations/`). They use black outlines + gray fills + a single
blue accent — already on-brand. **Never recolor.** One illustration per
view. 24 px breathing room on every side. Minimum size ~200 px.

Real interior photography (Poznań apartments) is **not yet provided**. Where
the design needs a photograph, use a placeholder and flag it in the PR.

---

## 8. Accessibility & i18n

- Set `<html lang="pl">`. Add `lang="en"` on any embedded English fragments.
- Body color `--fg2` (`#2a2d33`) on `#fafafa` is ~13:1 contrast — passes AAA.
- Eyebrow at `--cr-blue-600` (`#0773cb`) on white is ~5.6:1 — passes AA at 12 px bold.
- Focus ring on inputs is already specified (`box-shadow: 0 0 0 4px rgba(46,176,230,0.15)`). Keep an equivalent on every focusable element — the brand doesn't suppress focus rings.
- Respect `prefers-reduced-motion`: disable the fade-up reveal and any blur transitions.

---

## 9. State & data needs (minimal)

- **Nav** has an `is-scrolled` class toggled by an `IntersectionObserver` on a sentinel near the top of the page.
- **ContactForm** has local state for fields + a `submitted` boolean that flips to the success card. No backend wiring is implemented in the reference. Suggested: route handler `/api/contact` → email via Resend or similar, plus reCAPTCHA v3 for spam.
- Everything else is static content.

---

## 10. Suggested project structure (Next.js)

```
app/
  layout.tsx              # imports fonts + colors_and_type.css
  page.tsx                # the marketing landing
  globals.css             # = colors_and_type.css (renamed)
  api/contact/route.ts
components/
  Nav.tsx
  Hero.tsx
  Stats.tsx
  HowItWorks.tsx
  Services.tsx
  Testimonial.tsx
  ContactForm.tsx
  Footer.tsx
  Punktor.tsx             # exports the gradient parallelogram
  Eyebrow.tsx
  Button.tsx              # primary / accent / ghost variants
public/
  fonts/                  # copied from design_system/fonts
  brand/
    logo.png
    punktor.svg
    illustrations/...
```

---

## 11. Definition of done

- [ ] All 8 sections rendered, copy lifted verbatim from reference.
- [ ] Tokens come exclusively from `colors_and_type.css` — no hard-coded hex.
- [ ] Ibrand-PL + all 7 Manrope weights self-hosted; no Google Fonts CDN.
- [ ] Lighthouse: ≥95 Performance, ≥95 Accessibility, ≥95 SEO on the landing.
- [ ] Zero exclamation marks anywhere in user-facing copy.
- [ ] Exactly one blue-gradient moment per viewport.
- [ ] Contact form submits to a real endpoint and shows the blue-50 success card on success.
- [ ] `lang="pl"` on `<html>`; meta description and OpenGraph tags in Polish.
- [ ] Responsive: tested at 1440, 1024, 768, 390 px.

---

## 12. Open questions for the client

1. Real testimonial copy + names + photos.
2. Real photography of Poznań apartments (interiors, exteriors).
3. Final list of services (the current 6 cards are inferred).
4. Legal pages content (Regulamin, Polityka prywatności, RODO).
5. Domain + hosting preference (Vercel is the path of least resistance for Next.js).
6. Analytics preference (Plausible recommended — privacy-friendly, no cookie banner needed).
