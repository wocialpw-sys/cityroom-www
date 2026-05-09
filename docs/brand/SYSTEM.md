# Cityroom Design System

> **Cityroom Sp. z o.o.** — firma zarządzająca najmem mieszkań w Poznaniu. Marka kierowana do właścicieli mieszkań, którzy chcą spokojnego, profesjonalnego zarządzania bez codziennej obsługi najemców.
>
> *Cityroom is a Poznań-based rental management company. The brand speaks to apartment owners who want professional, hands-off management of their property.*

**Brand promise in one line:** *Mieszkaj spokojnie. My zajmiemy się resztą.* — Live peacefully. We'll handle the rest.

---

## 1. Company context

**What Cityroom does**
- Full-service rental management in Poznań (PL).
- Handles tenant acquisition, vetting, contracts, rent collection, upkeep, reporting, and hand-back.
- The customer is the **apartment owner** — investor, inheritor, or absentee landlord — not the tenant.

**What the customer wants to feel**
Trust. Calm. Competence. The anxiety of owning a rental property (vacancy, damage, late-night calls, paperwork) is replaced by a quiet professional taking care of it.

**Tone**
- **Profesjonalny** — serious, business-literate, not gimmicky.
- **Spokojny** — unhurried, measured, no exclamation marks, no hype.
- **Zaufany** — transparent about money, numbers, and process.

This translates to a visual system that is **white, spacious, editorial** — closer to a private bank's site than a startup's. The brand has one flash of color (the Cityroom blue gradient) and earns trust everywhere else through restraint.

---

## 2. Sources provided

| Source | Path | Notes |
|---|---|---|
| Logo (PNG, black) | `uploads/Logo Cityroom Black (PNG) (5).png` → `assets/logo-cityroom-black.png` | Master logo asset used throughout. |
| Logo (JPEG, black) | `uploads/Logo Cityroom Black (JPEG) (4).jpg` → `assets/logo-cityroom-black.jpg` | Backup raster. |
| Logo source (PSD) | `uploads/Logo Cityroom (2).psd` | Not read — Photoshop native. |
| Brand bullet ("Punktor") | `uploads/Punktor Cityroom (PNG) (2).png` → `assets/punktor-cityroom.png` | The blue gradient parallelogram. Core brand mark. |
| Brand typeface | `uploads/Ibrand-PL.*` → `fonts/Ibrand-PL.*` | Custom "Ibrand-PL" face. Polish diacritics supported. |
| Illustration set | `uploads/*.png` (~50 files) → `assets/illustrations/*.png` | Isometric line-art set. Black + gray + blue accent. Consistent enough to use as a brand pack. |

> No Figma or codebase was provided. This system is derived from the raw brand assets above. Content examples were written in-house based on the stated tone. If Cityroom has a production website, Figma library, or written brand book, **attach it and we'll re-synchronize**.

---

## 3. Content fundamentals

**Language.** Polish is the default language of all customer-facing copy. Short English equivalents appear only when the product is aimed at expat landlords.

**Voice and person.** The brand addresses the reader as **"Ty"** — direct, second-person singular, capitalized when formal (*"Twoje mieszkanie pracuje spokojnie."*). The company refers to itself as **"my"** — *"My zajmiemy się resztą."* Never *"nasz zespół profesjonalistów"* — it's too corporate.

**Register.** Professional-conversational. Short sentences. No jargon unless it is the proper legal term (*umowa najmu okazjonalnego, rozliczenie ryczałtowe*). No marketing superlatives (*"najlepszy", "rewolucyjny"*).

**Casing.** Sentence case everywhere — headings, buttons, nav. `ALL CAPS` is reserved for eyebrow labels (tracking `0.14em`) and never used for body copy.

**Punctuation and emphasis.**
- No exclamation marks. Ever.
- Em-dashes are used to create rhythm — like this — and they are welcome.
- Numbers are typeset with Polish conventions: *2 400 zł*, *85 %*, *ul. Święty Marcin 58*.
- Quotes use Polish „low-high" marks in body copy, straight quotes `"…"` in UI.

**Emoji.** Never. Not in marketing, not in product.

**Specific example lines (voice in action)**
- Hero: *"Twoje mieszkanie pracuje. Ty odpoczywasz."*
- Sub: *"Prowadzimy Twój najem w Poznaniu — od pierwszego oglądania po comiesięczny przelew na Twoje konto."*
- CTA: *"Umów spokojną rozmowę"* (not *"Zarezerwuj teraz!"*).
- Stat label: *"Średni czas znalezienia najemcy — 9 dni"*.
- Testimonial framing: *"Od trzech lat nie odebrałam ani jednego telefonu o zepsutej pralce." — Anna K., właścicielka 2 mieszkań.*
- Error state: *"Coś poszło nie tak. Sprawdzamy."* (calm, not apologetic.)
- 404: *"Tej strony już tu nie ma. Wróć do strony głównej."*

**What to avoid**
- Startup vocabulary: *"platforma", "ekosystem", "rewolucjonizujemy", "game-changer"*.
- Aggressive CTAs: *"Kup teraz!", "Nie przegap!"*.
- Emoji, `!!`, upper-case screaming, exclamation points in any form.
- Anything that sounds like a tenant portal. The customer is an *owner*.

---

## 4. Visual foundations

**Thesis.** White page. Editorial type. One moment of blue. This is a trust brand, not an attention brand.

### Color
- **Ink** `#0a0b0d` — logo black, all display type, icons.
- **Paper** `#fafafa` — default page background. Never pure `#fff` for broad surfaces — `#fafafa` is warmer and reduces eye fatigue.
- **Mist** `#f4f5f7` — card fills and subtle section breaks.
- **Cityroom blue gradient** `#2eb0e6 → #0773cb` — used at exactly one of: the punktor bullet, a stat number, a CTA underline, a hero illustration accent. One blue moment per viewport.
- **Hairlines** `#e7e9ee` — borders everywhere. Avoid heavy 2px rules; always 1px.
- Full palette is defined as CSS variables in `colors_and_type.css`.

### Typography
- **Display / UI headings:** `Ibrand-PL` — the custom brand face. Humanist-geometric sans. Medium (500) is the default weight; Bold (700) is reserved for stat numbers.
- **Body / long-form / product UI:** `Manrope`. Weights 200–800 are available locally under `fonts/Manrope-*.ttf`. Ibrand-PL is a display-led face and is less comfortable below 18px for long reading; Manrope is warmer than Inter, reads beautifully down to 12 px, and ships with full Polish diacritics.
- **Generous letter-spacing at display sizes:** `-0.02em`. Tight, editorial.
- **Scale** is defined in `colors_and_type.css` — `--fs-display`, `--fs-h1`…`--fs-caption`, plus eyebrow at 12px.
- `text-wrap: balance` on headings; `text-wrap: pretty` on paragraphs.

### Spacing & rhythm
- Base unit is **4px**. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.
- Vertical rhythm between sections: minimum **80px** on desktop, **48px** on mobile.
- Max content width for body copy: **640px**. Max for full layouts: **1200px**.

### Backgrounds & surfaces
- **Never dark backgrounds.** The brand lives in white. Dark mode is not part of this system.
- Backgrounds are one of: `#ffffff`, `#fafafa`, `#f4f5f7`.
- **Gradient blobs** — large, very soft, ~5–8 % opacity — are allowed as a single decorative element in a hero. They must not tint the page.
- No repeating patterns, no textures, no noise, no paper.
- Full-bleed illustrations from the brand set (isometric line art) are used for feature callouts, not as hero background.

### Illustration
- Cityroom owns an isometric illustration pack (in `assets/illustrations/`): black outlines, gray fills, dotted halftone shadows, selective bright blue accents.
- Use one illustration per view max. Place on white, with 24 px of breathing room on every side.
- Never recolor them. Never place on a tinted background.

### Iconography
- See `ICONOGRAPHY` section below.

### Borders & radii
- Radii are intentionally modest. Cityroom is not playful, not rounded-startup.
- Default card radius: **12 px** (`--r-md`).
- Pills (tags, toggles): `999 px`.
- Inputs: **8 px**.
- Images in layouts: **16 px** (`--r-lg`).
- Borders are always **1 px, `--border`**. Heavier weight is reserved for focus rings.

### Shadows
- Shadows are **soft and low-contrast**. The brand does not use heavy drop shadows.
- `--shadow-sm` for resting elevations (nav, small cards).
- `--shadow-md` for floating elements (menus, modals).
- `--shadow-lg` reserved for hero/feature moments.
- A single `--shadow-glow` (soft blue) may be used under a hero CTA — maximum one per view.

### Motion
- Default easing: `cubic-bezier(0.22, 1, 0.36, 1)` — fast-out, gentle settle.
- Default duration: **200 ms** for state, **420 ms** for reveals.
- No bouncy springs. No parallax. No auto-playing hero videos.
- Hover: small brightness/opacity shift (`opacity: 0.85` on links; button background `--cr-blue-700`).
- Press: `transform: scale(0.98)` on buttons, never color invert.
- Fade-in-up on scroll is acceptable (16 px translate, 420 ms).

### Cards
- Default: `background: var(--bg1); border: 1px solid var(--border); border-radius: 12px; padding: 24–32px;`
- No card shadow by default — borders do the work.
- Elevated variant: drop the border, add `--shadow-md`.
- Avoid left-color-bar accent cards. Use the punktor bullet mark instead.

### Transparency & blur
- Used only on the sticky top navigation: `background: rgba(255, 255, 255, 0.72); backdrop-filter: blur(12px);` — revealing the scroll behind it.
- Never on large panels. Never on modals (use solid white + shadow).

### Layout rules
- Sticky nav, never fixed side rails.
- Hero is left-aligned on desktop, centered on mobile.
- Stat blocks: number 700-weight, label 13 px uppercase.
- Always protect headlines with `text-wrap: balance`.

### Imagery
- When real photography is added (not yet provided), it should be natural-light interiors of Poznań apartments — warm neutrals, slight desaturation. No stock "happy family at laptop" photography.

---

## 5. Iconography

**Current state:** Cityroom has **no in-house icon set** in the provided materials. We use **Lucide** as the working substitute, tuned for the brand: **1.25 px stroke** (thinner than Lucide's default — lighter, more editorial), rounded caps, outline style, presented on **14 px rounded cards** with hairline borders. One icon per view may use the blue gradient fill as an accent moment — never more than one.

> **Substitution flag:** Swap in the real icon set when it exists. Lucide is the default pending confirmation.

- **Loaded via CDN** in `ui_kits/owners/index.html`: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
- **Default size:** 20 px for inline UI, 24 px for nav, 32 px for feature blocks. Stroke width **1.25** at all sizes (1.35 when reversed on a dark/gradient background).
- **Color:** `currentColor`. Stroke only — no fills, except the single accent icon per view which uses `--cr-gradient`.
- **Presentation:** icons live on white `14 px` rounded cards with a `1 px` hairline border. A very soft blue radial hover (`rgba(46,176,230,0.10)`) may appear on interactive cards.
- **Never emoji.** Never unicode icons (✓, →, ★) as UI affordances. Use Lucide.
- The **Cityroom Punktor** (`assets/punktor-cityroom.png` and `assets/punktor.svg`) is the one branded glyph. It functions as an oversized bullet for feature lists — NOT as a generic icon replacement. Limit: one per section.
- Illustrations in `assets/illustrations/` are NOT icons — they are spot illustrations. Don't use them at sizes below ~200 px.

---

## 6. File index

```
/
├─ README.md                   — this file
├─ SKILL.md                    — skill descriptor (Agent Skills compatible)
├─ colors_and_type.css         — CSS variables + semantic type classes
├─ assets/
│   ├─ logo-cityroom-black.png — master logo
│   ├─ logo-cityroom-black.jpg — backup raster
│   ├─ punktor-cityroom.png    — brand bullet (raster)
│   ├─ punktor.svg             — brand bullet (vector, inline gradient)
│   └─ illustrations/          — isometric illustration pack
├─ fonts/
│   ├─ Ibrand-PL.woff2
│   ├─ Ibrand-PL.woff
│   └─ Ibrand-PL.otf
├─ preview/                    — Design System tab cards (one HTML per card)
└─ ui_kits/
    └─ owners/                 — owner-facing marketing site recreation
         ├─ README.md
         ├─ index.html         — interactive demo
         └─ *.jsx              — components
```

---

## 7. Using this system

- In any HTML: `<link rel="stylesheet" href="/path/to/colors_and_type.css">`. Tokens and semantic element styles are ready.
- In React/JSX prototypes: import the CSS once at the root of the page and use the CSS variables directly.
- When writing copy, read section 3 first.
- When laying something out, read section 4 first.
- When in doubt: more whitespace, less color, shorter sentences.
