# Redirect rules — Vercel implementation

**Status:** placeholder. Generowane z `url-map.csv` przed cutover.

## Cel

301 redirecty dla każdej kombinacji obecne URL → nowy URL, w formacie konsumowalnym przez Vercel (`vercel.json`).

## Format Vercel

```json
{
  "redirects": [
    {
      "source": "/jak-dzialamy",
      "destination": "/jak-dziala-cityroom",
      "permanent": true
    },
    {
      "source": "/jak-dzialamy/",
      "destination": "/jak-dziala-cityroom/",
      "permanent": true
    }
  ]
}
```

## Reguły

- **`permanent: true`** = 301 (default)
- **Trailing slash:** Astro generuje URL ze trailing slash. Generuj redirecty dla obu wariantów (`/foo` i `/foo/`).
- **HTTP → HTTPS:** wymusza Vercel automatycznie, nie potrzebujemy reguł
- **www → non‑www:** ustaw w Vercel domain config (lub odwrotnie, decyzja w Fazie 4)
- **Strony 410 Gone:** Vercel nie ma natywnego wsparcia dla 410. Alternatywa: redirect na `/410-gone` z meta `noindex` LUB Edge Function zwracająca 410 status.

## Generator (TODO)

Skrypt do napisania w Fazie 4: czyta `url-map.csv` → wypluwa `vercel.json` redirects array.

## Walidacja przed cutover

- [ ] Każdy URL z `url-map.csv` ma odpowiadającą regułę w `vercel.json`
- [ ] Test 10 sample redirectów na preview deployment
- [ ] Sprawdź że nie ma redirect chains (A → B → C — tylko A → C)
- [ ] Sprawdź że nie ma redirect loops
