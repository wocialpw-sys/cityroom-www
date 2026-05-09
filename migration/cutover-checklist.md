# Cutover checklist — dzień przejścia melawini.pl → cityroom.pl

**Status:** placeholder. Finalizacja w Fazie 4 (pre‑launch).

## T-7 dni (przygotowanie)

- [ ] Mapa redirectów `url-map.csv` finalna i zweryfikowana z Pawłem
- [ ] `redirect-rules.md` przekonwertowane na `vercel.json` redirects array
- [ ] Pełny content na stage (5 stron MVP) — produkcja zamknięta
- [ ] PromptEye snapshot baseline pre‑cutover (zapisać dla porównania)
- [ ] GSC snapshot pre‑cutover (impressions, clicks, position, top queries)
- [ ] GA4 snapshot pre‑cutover (traffic, top sources, top pages)
- [ ] Backup obecnej strony WordPress (full, bazą danych włącznie)
- [ ] Testy: schema validators (Rich Results Test), Lighthouse (≥95), cross‑browser (Chrome, Safari, Firefox, Edge), responsive (1440/1024/768/390)
- [ ] llms.txt + llms-full.txt finalne i wgrane
- [ ] robots.txt — przygotowany production wariant (AI bots whitelisted, sitemap, disallow /api /admin)
- [ ] Sitemap.xml wygenerowane (Astro `@astrojs/sitemap` integration)

## T-1 dzień

- [ ] Final smoke test stage: kliknij każdy link, każdy form
- [ ] Zatrzymaj dev — żadnych zmian w content od T-1

## T0 (cutover, ~02:00 lub poza godzinami szczytu)

1. [ ] **DNS swap:** Vercel domain `cityroom.pl` zamiast `melawini.pl`
   - W Vercel project: Add domain `cityroom.pl`, set as primary
   - W rejestratorze cityroom.pl: zmień nameservery na Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
   - LUB A record na `76.76.21.21`
   - Propagacja DNS: 5 min – 2 h
2. [ ] **Wyłącz obecny WP** — przekierowanie hostingu lub ustaw `Disallow: /` w WP robots.txt
3. [ ] **Zdejmij `noindex`** z meta tags na nowej stronie (env var lub ENV‑specific config)
4. [ ] **Wgraj robots.txt** production (whitelist AI bots, sitemap, disallow /api /admin)
5. [ ] **301 redirecty wdrożone** (już w `vercel.json`, sprawdź że działają)
6. [ ] **HTTPS forced** (Vercel default)

## T+0 do T+1 godzina

- [ ] DNS propagacja sprawdzona (`dig cityroom.pl`, `nslookup cityroom.pl`)
- [ ] Strona dostępna pod `https://cityroom.pl/`
- [ ] SSL cert OK (Vercel auto Let's Encrypt)
- [ ] Sample 301 redirecty działają (test 5–10 starych URL)
- [ ] Schema validators OK
- [ ] PageSpeed / Lighthouse OK

## T+1 dzień

- [ ] **GSC:** zarejestruj `cityroom.pl` jako nowa property (jeśli była stara)
- [ ] **GSC:** sitemap submit (`https://cityroom.pl/sitemap-index.xml`)
- [ ] **GSC:** request indexing kluczowych URL (home, pillar, P1 cluster pages)
- [ ] **GA4:** sprawdź że tracking nadal działa
- [ ] **PromptEye:** snapshot post‑cutover (baseline T+1)
- [ ] **Server logs / Vercel logs:** sprawdź crawl errors, 5xx, 4xx — zapisać raport

## T+1 do T+30 dni — monitoring

- [ ] Codzienny snapshot GSC (impressions, clicks, position, errors)
- [ ] Tygodniowy snapshot PromptEye (brand visibility, citation score, position, per‑prompt)
- [ ] Cotygodniowy raport: porównanie pre‑ vs post‑cutover
- [ ] Naprawa wszystkich 4xx/5xx errors w GSC w 48 h
- [ ] Manual testing AI search: 10 promptów × 4 LLM‑y co tydzień (czy nadal nas cytują)

## Plan B (rollback w 30 min)

Jeśli coś idzie krytycznie źle:

1. Cofnij DNS swap (przywróć stare nameservery / A record)
2. Włącz obecny WP backup
3. PostMortem i naprawa na stage przed kolejną próbą cutover

**Kryteria rollback:**
- Lighthouse Performance < 50 na home
- Krytyczne błędy 5xx > 50% requestów
- Schema validators error
- DNS / SSL nie propaguje > 2 h
