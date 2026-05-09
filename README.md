# cityroom-www

Strona Cityroom Sp. z o.o. — zarządzanie najmem mieszkań w Poznaniu z gwarancją czynszu.

- **Stage:** [melawini.pl](https://melawini.pl) (Vercel preview)
- **Produkcja docelowa:** [cityroom.pl](https://cityroom.pl) (po cutover, planowany lipiec/sierpień 2026)
- **Stack:** Astro 6 · TypeScript · Tailwind 4 · brand tokens

## Stan projektu

Faza 1 (foundation) — scaffold gotowy 09.05.2026. Stage z hello world deployowane na melawini.pl. Następny krok: sesja GEO/AEO → IA mapa → brief agenta AI content → produkcja MVP (5 stron: home + pillar + 3 cluster pages).

Pełny plan, ground truth strategiczny i wytyczne dev — patrz [CLAUDE.md](./CLAUDE.md).

## Komendy

| Komenda | Co robi |
| --- | --- |
| `npm install` | Instalacja zależności |
| `npm run dev` | Dev server (localhost:4321) |
| `npm run build` | Production build do `./dist/` |
| `npm run preview` | Preview produkcyjnego buildu lokalnie |
| `npm run astro check` | TypeScript + content schema check |

## Struktura

```
src/
  pages/        Astro routes
  layouts/      Base.astro (HTML shell, lang="pl", meta, og, font preload)
  components/   custom Astro components (NIE shadcn)
  styles/
    tokens.css  brand source of truth (CSS variables)
    global.css  tokens + tailwindcss + @theme bridging
public/
  fonts/        Ibrand-PL + Manrope (self-hosted)
  brand/        logo, punktor, illustrations
  llms.txt      AI search index (GEO)
  robots.txt    AI bots whitelist
docs/
  brand/        brand handoff (HANDOFF, SYSTEM, SKILL)
  ia-mapa.md    pillar + cluster mapa (TODO po sesji GEO)
  ...
migration/
  url-map.csv   obecne URL → nowe (TODO przed cutover)
  ...
```

## Brand

Brand handoff żyje w `docs/brand/`. Kluczowe zasady:
- White‑dominant, typography‑led, blue accent SPARINGLY (jeden moment per viewport)
- Display font: **Ibrand‑PL** (custom, self‑hosted)
- Body font: **Manrope** (7 weights, self‑hosted)
- Brand color: blue gradient `#2eb0e6 → #0773cb`
- **Bez wykrzykników, bez emoji, bez startup vocabulary**
- **Polski first**, "Ty" / "my", spacje w liczbach (`2 400 zł`), low‑high cudzysłowy

Pełny brand book → [docs/brand/SYSTEM.md](./docs/brand/SYSTEM.md).

## Privacy

- Cele biznesowe i decyzje strategiczne w Cityroom workspace (`../Cityroom/`).
- Dev decyzje, kod, content w tym repo.
- Repo **prywatne** — nie publikować.
