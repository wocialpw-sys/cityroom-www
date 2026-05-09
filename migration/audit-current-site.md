# Audyt obecnej cityroom.pl — przed cutover

**Status:** TODO przed Fazą 4 (pre‑launch).

## Cele

- Lista wszystkich URL obecnej strony WordPress
- Traffic per URL (GA4, ostatnie 12 mies)
- Wyświetlenia + kliknięcia per URL (GSC, ostatnie 16 mies)
- Backlinks per URL (Ahrefs / Search Console)
- Identyfikacja stron wartościowych (zachowujemy slug) vs zbędnych (410 / redirect na home)

## Metoda

1. Export listy URL z GSC (Coverage / Pages report)
2. Export ruchu z GA4 (Pages and screens report, 12 mies)
3. Export backlinks z Ahrefs / Search Console
4. Połączenie w jeden CSV → `url-map.csv`
5. Decyzja per URL: zachowujemy / przekierowujemy / 410 gone

## Reguły decyzyjne

- **Zachowujemy slug** (1:1) jeśli: ranking organic + traffic + backlinks
- **Przekierowujemy 301 na nowy slug** jeśli: traffic ale chcemy keyword‑rich URL
- **301 na home** jeśli: niski traffic, brak backlinks, zbędna strona
- **410 Gone** jeśli: nigdy nie powinna być w indexie (np. `/harmonogram-sprzatania/`, dokumenty dla najemców)

## Snapshot stanu zero (z `cityroom_audit.md`)

- LCP mobile: **11,4 s** (próg 2,5 s)
- 168 stron z błędem 5xx
- 97 stron zeskanowanych, niezindeksowanych
- Brak HTTPS redirect (305 kliknięć ginie)
- Top strony (GA4, sierpień 2025 – kwiecień 2026):
  - Homepage — 8 487 wyświetleń, 49 % bounce
  - /jak-dzialamy/ — 711, 17 % bounce
  - /o-nas/ — 679, 28 %
  - /kontakt/ — 458, 25 %
- 50 % organic = brand search (cityroom, cityroom poznań, city room)
- Cityroom **nie w top 10** na "zarządzanie najmem Poznań" (38 kliknięć z 4 435 wyświetleń)

## Następne kroki

- [ ] Eksport URL z GSC
- [ ] Eksport traffic z GA4
- [ ] Eksport backlinks z Ahrefs
- [ ] Wypełnienie `url-map.csv`
- [ ] Walidacja mapy z Pawłem
