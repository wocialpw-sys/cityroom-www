# Design system — Cityroom

Pełny brand book żyje w `docs/brand/`:
- [HANDOFF.md](./brand/HANDOFF.md) — przekazanie projektu, definition of done, tech rekomendacje
- [SYSTEM.md](./brand/SYSTEM.md) — brand book (tone, voice, color, type, spacing, motion, layout)
- [SKILL.md](./brand/SKILL.md) — one‑page cheat sheet

Tokens jako single source of truth: [src/styles/tokens.css](../src/styles/tokens.css).

## Najważniejsze zasady (1 minuta)

### Filozofia
**White page. Editorial type. One moment of blue.**
Trust brand, not attention brand. Closer to a private bank than a startup.

### Color
- `#0a0b0d` — ink (display, logo)
- `#fafafa` — paper (default page bg, NIGDY pure white na large surfaces)
- `#f4f5f7` — mist (cards, subtle fills)
- `#e7e9ee` — hairline borders (1px zawsze)
- `#2eb0e6 → #0773cb` — Cityroom blue gradient (**maks 1 element per viewport**)

### Type
- Display: **Ibrand‑PL** 500 (700 dla stat numbers), `letter-spacing: -0.02em`
- Body: **Manrope** 400/500/600, default 17 px / line‑height 1,55
- Eyebrow: 12 px, uppercase, `letter-spacing: 0.14em`, color `--cr-blue-600`

### Spacing
4 px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Section vertical rhythm ≥ 80 px desktop / 48 px mobile.

### Radii
- Cards: 12 px
- Inputs: 8 px
- Images: 16 px
- Pills: 9999 px

### Shadows
Soft, low‑contrast. `--shadow-glow` (blue) tylko pod hero CTA, **maks 1 per view**.

### Motion
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- 200 ms state, 420 ms reveals
- Press: `transform: scale(0.98)` na buttonach
- **Bez springs, bez parallax, bez auto-playing video.**

### Layout
- Sticky nav (glass‑blur, 12 px from top)
- Hero left‑aligned na desktop, centered na mobile
- Max content: 640 px body, 1200 px full layouts
- Single breakpoint: 900 px

## Komponenty (do stworzenia)

- [ ] `Button.astro` (primary / accent / ghost variants)
- [ ] `Eyebrow.astro` (uppercase tracking‑wide label)
- [ ] `Punktor.astro` (gradient parallelogram bullet glyph)
- [ ] `Nav.astro` (sticky, IntersectionObserver dla scroll state)
- [ ] `Hero.astro`
- [ ] `Stats.astro` (4‑col, jeden gradient)
- [ ] `HowItWorks.astro` (4 numbered steps)
- [ ] `ServiceCard.astro` (illustration top, hover translateY)
- [ ] `Testimonial.astro` (avatar gradient + monogram)
- [ ] `ContactForm.astro` (z success state)
- [ ] `Footer.astro`

Reference implementation: `docs/brand/` (handoff zawiera JSX prototypy — translacja na Astro).

## Iconography

- **Lucide** stroke 1.25 (1.35 na dark)
- Ładowane przez import `lucide` jako Astro/JSX components, NIE CDN
- Sizes: 20 px inline, 24 px nav, 32 px feature blocks
- **Bez emoji jako UI affordances.** Bez unicode (✓, →, ★).

## Illustrations

19 spot illustrations w `public/brand/illustrations/`. Black outlines + gray fills + blue accent. **Nie recolor.** Min 200 px. 24 px breathing room.
