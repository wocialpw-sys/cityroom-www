# CLAUDE.md — Cityroom website

Instrukcje dla Claude Code pracującego nad stroną Cityroom Sp. z o.o.

---

## Kontekst

Marketing‑owa strona Cityroom Sp. z o.o. — firma zarządzająca najmem mieszkań w Poznaniu z gwarancją czynszu. Audiencja: właściciele mieszkań (B2B, considered purchase). Stage: `melawini.pl`. Cutover docelowy: `cityroom.pl`.

**Wszystkie decyzje strategiczne i contentowe podejmujemy z Pawłem.** Ten projekt to wykonawstwo strategii zamkniętej w sesjach 22‑24.04.2026. Skille i pamięć są ground truth.

---

## Skille (auto‑load) i pamięć

Decyzje contentowe i strategiczne MUSZĄ być spójne z:

- **Skill `cityroom-marketing-strategy`** — pozycjonowanie, JTBD, persona "Zmęczony Landlord", scope produktowy, writing rules, decyzje strategiczne. Czytaj **przed** każdą decyzją contentową.
- **Skill `cityroom-geo-strategy`** — Aleyda Solis 10 Steps, AI bots, schema.org map, llms.txt spec, listicle format, baseline PromptEye 44 %, citation‑worthiness. Czytaj **przed** każdą decyzją techniczną pod GEO/AEO.
- **Memory `cityroom_audit.md`** — diagnoza stanu zero + GEO baseline (PromptEye maj 2026).
- **Memory `cityroom_strategy_foundation.md`** — UM "Regularna niezawodność", proof points, JTBD v1.
- **Memory `cityroom_strategy_execution.md`** — pricing block (W1–W4), DONE PL stopka, brand fazowanie.
- **Memory `cityroom_principles.md`** — cheatsheet zasad, krótki kompas.

Brand handoff żyje lokalnie w `docs/brand/` (HANDOFF, SYSTEM, SKILL).

---

## Stack

- **Astro 6** + **TypeScript strict**
- **Tailwind 4** (CSS‑first config przez `@theme`)
- Brand tokens w `src/styles/tokens.css` (single source of truth, **NIE hardkoduj hex/spacing**)
- `src/styles/global.css` mostkuje brand tokens do Tailwind utility names
- **Bez shadcn/ui** — komponenty piszemy custom przeciwko brand tokens (shadcn defaults walczyłyby z brandem)
- Hosting: **Vercel** (free tier dla MVP)
- Deploy: GitHub `wocialpw-sys/cityroom-www` → Vercel auto‑deploy

---

## Struktura projektu

```
src/
  pages/         Astro routes (file‑based routing)
  layouts/       Base.astro = HTML shell, lang="pl", meta, og, fonts preload
  components/    custom Astro components (NIE shadcn)
  content/       Astro Content Collections — Markdown content
  styles/
    tokens.css   brand variables (z brand handoffu, ścieżki fontów: /fonts/...)
    global.css   tokens import + tailwindcss + @theme bridging
  lib/           utilities (schema.org generators, helpers)
public/
  fonts/         Ibrand‑PL (display) + Manrope 7 weights (body)
  brand/         logo, punktor (SVG + PNG), illustrations
  llms.txt       generowane (lub statyczne na MVP)
  robots.txt     AI bots whitelist
docs/
  brand/         brand handoff (HANDOFF.md, SYSTEM.md, SKILL.md)
  ia-mapa.md     pillar + cluster mapa + intent map
  brief-agenta-content.md
  schema-map.md  schema.org per typ strony
  proof-points.md
  faq-master.md
  writing-rules.md
  design-system.md
migration/
  url-map.csv          obecne URL → nowe (1:1)
  audit-current-site.md
  cutover-checklist.md
  redirect-rules.md
```

---

## Writing rules (Cityroom)

- **Polski. Adres "Ty"** (kapitalizowane: *"Twoje mieszkanie"*). Firma: **"my"**.
- **Brak wykrzykników. Nigdy.** Brak emoji.
- **Czas teraźniejszy dokonany**: *"dostarczamy", "płacimy"*. NIE *"gwarantujemy", "zapewniamy"*.
- **Sentence case** wszędzie. `ALL CAPS` tylko na eyebrow labels.
- **Polskie typo**: spacje w liczbach (*2 400 zł*, *85 %*), low‑high cudzysłowy (*„…"*), em‑dashy.
- **Bez startup vocabulary**: *platforma, ekosystem, rewolucjonizujemy, najlepszy*.
- **Bez nazw konkurencji** w copy ("agencje prowizyjne", nie Fiesta/InHarbor).
- **Bez liczby "7"** (lat / osób — nieaktualne, jest 8/9).
- **Dwa wymiary UM "Regularna niezawodność"** ZAWSZE razem: codzienna konsekwencja + odporność na stres (COVID 2020).

---

## GEO/AEO rules (z `cityroom-geo-strategy`)

- **Pierwsze 200 słów strony** = direct answer (TLDR pattern).
- **Chunki 134–167 słów** per H2/H3.
- **Listicle format** dla content blogowego (74,2 % AI citations).
- **Triple JSON‑LD** dla listicles: Article + ItemList + FAQPage (1,8× cytowań).
- **Schema per typ strony** — patrz `docs/schema-map.md`.
- **AI bots whitelisted** w `public/robots.txt`: GPTBot, Google‑Extended, bingbot, ClaudeBot, CCBot, PerplexityBot, Applebot‑Extended.
- **`llms.txt` + `llms-full.txt`** w roocie domeny.
- **Markdown versions** (`.md` siblings) dla kluczowych stron.
- **Proof points jako AI‑readable units** — datowane, weryfikowalne, z liczbami (patrz `docs/proof-points.md`).
- **Keyword‑rich URL slugi** (np. `/zarzadzanie-najmem-poznan/`, `/gwarancja-czynszu-poznan/`).

---

## Performance budgets

- LCP ≤ 1,5 s (cel; max 2,5 s)
- CLS ≤ 0,1
- INP ≤ 200 ms
- Lighthouse Performance ≥ 95
- Lighthouse Accessibility ≥ 95
- Lighthouse SEO ≥ 95
- Bundle JS ≤ 100 KB gzipped na stronę (Astro defaultowo zero JS)

---

## Schema.org rules

- **JSON‑LD only** (nie microdata, nie RDFa)
- W `<head>` przez `<slot name="schema">` w `Base.astro`
- Walidacja: schema.org validator + Google Rich Results Test przed merge
- Helper functions w `src/lib/schema/` (Organization, LocalBusiness, Service, FAQPage, HowTo, Article, Person, Review)

---

## Accessibility

- WCAG 2.1 AA minimum
- `<html lang="pl">` (już w Base.astro)
- Focus rings widoczne (brand specyfikuje: `box-shadow: 0 0 0 4px rgba(46,176,230,0.15)` na inputs)
- `prefers-reduced-motion` honorowane (już w global.css)
- Kontrast: body `--fg2` na `--cr-paper` = ~13:1 (AAA)

---

## Git workflow

- **Main branch:** `main` — chroniony, deploy auto przez Vercel
- **Feature branches:** `feat/<short-name>`, `fix/<short-name>`, `content/<page-name>`
- **Commit messages:** Conventional Commits (`feat:`, `fix:`, `content:`, `docs:`, `chore:`, `refactor:`)
- **PR przed merge** — Lighthouse CI musi przejść (≥95 na main pages)
- **NEVER skip pre‑commit hooks** (`--no-verify`) bez wyraźnej prośby Pawła

---

## Deploy checklist (przed merge na main)

- [ ] `npm run build` przechodzi bez błędów
- [ ] Lighthouse Performance ≥ 95 na zmienionej stronie
- [ ] Schema.org JSON‑LD waliduje się (Rich Results Test)
- [ ] `lang="pl"` na każdej stronie
- [ ] OpenGraph image ≥ 1200×630 px
- [ ] No console errors w dev (`npm run dev`)
- [ ] Zero exclamation marks w user‑facing copy
- [ ] Maks **jeden** blue‑gradient moment per viewport
- [ ] Test responsive: 1440 / 1024 / 768 / 390 px
- [ ] Wszystkie linki z opisowym anchor text (nie "kliknij tutaj")

---

## Środowiska

- **Local:** `npm run dev` (port 4321)
- **Stage:** `melawini.pl` → Vercel preview (każdy branch = osobne preview URL)
- **Production:** `cityroom.pl` (po cutover, planowany lipiec/sierpień 2026)

Stage'a NIE indeksujemy — `noindex` w meta + `Disallow: /` w `public/robots.txt` na `melawini.pl`. Cutover: zdejmujemy noindex, swap robots.txt, zgłaszamy GSC sitemap.

---

## Bezpieczeństwo

- **Nigdy** nie commituj `.env`, kluczy API, sekretów. Klucze → Vercel env vars.
- **Form submission** (kontakt, wycena) → przez API route (Resend / SendGrid + reCAPTCHA v3 / hCaptcha)
- Form → backend integration **NIE** w MVP — placeholder + komunikat success do czasu wdrożenia backendu

---

## Pomijane w MVP (parking lot)

- Strefa klienta / panel właściciela
- Wielojęzyczność (EN dla expat persony)
- Headless CMS (Sanity / Payload) — Markdown w git wystarczy do MVP
- Blog jako interaktywny system — statyczny w Astro
- Kalkulator TCO interaktywny (osobny landing, post‑MVP)

---

## Stan projektu

- **Faza 0** (przygotowanie) — sesja GEO + brief agenta + IA mapa = w toku
- **Faza 1** (foundation) — scaffold ✅ (09.05.2026), design system + komponenty bazowe = TODO
- **Faza 2** (content production z agentem AI) — TODO
- **Faza 3** (multimedia + UX polish) — TODO
- **Faza 4** (pre‑launch) — TODO
- **Faza 5** (cutover) — TODO

Update: zaktualizuj sekcję "Stan projektu" gdy wchodzimy w nową fazę.
