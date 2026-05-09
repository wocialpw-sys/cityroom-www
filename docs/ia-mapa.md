# Information Architecture — pillar + cluster mapa

**Status:** placeholder. Wypełnić w sesji GEO/AEO (Blok 1: pillar + cluster mapa).

## Cele dokumentu

- Lista wszystkich URL nowej strony cityroom.pl (po cutover)
- Hierarchia: pillar → cluster → leaf
- Intent map: które prompty PromptEye + dodatkowe (passive looking) wpadają na którą stronę
- URL slugi (keyword‑rich, zgodnie ze skill `cityroom-geo-strategy`)
- Internal linking plan (cluster ↔ pillar, cluster ↔ cluster)

## Hipoteza wstępna (do walidacji w sesji)

### Pillar
- `/zarzadzanie-najmem-poznan/` — główna kategoria (lub homepage hybryda)

### Cluster pages — priorytet wykonawczy

| # | URL | Funkcja | Priorytet | Główne intencje |
|---|---|---|---|---|
| 1 | `/gwarancja-czynszu-poznan/` | Mechanika gwarancji + proof points | P1 | "która firma oferuje gwarantowany czynsz", "jak działa gwarancja czynszu" |
| 2 | `/jak-nie-zajmowac-sie-najmem-mieszkania/` | Listicle "5 sposobów" | P1 | "jakie są najlepsze rozwiązania dla właściciela, który nie chce zajmować się najemcami" (krytyczna luka 0 % w PromptEye) |
| 3 | `/wynajem-pokoi-studenci-poznan/` | Specjalizacja pokojowa + dane | P1 | "jakie firmy obsługują wynajem mieszkań na pokoje dla studentów" |
| 4 | `/jak-dziala-cityroom/` | Proces współpracy 5–6 kroków | P2 | "jak działa Cityroom", proces |
| 5 | `/zarzadzanie-najmem-poznan-opinie/` | Opinie z GBP, twarze klientów | P2 | "Cityroom opinie", trust verification |
| 6 | `/samodzielny-wynajem-czy-firma-zarzadzajaca/` | Porównanie + kalkulator TCO | P2 | "co wybrać: samodzielny wynajem czy firma zarządzająca" |
| 7 | `/o-nas/` | Paweł + Błażej + zespół, 8 lat historii | P2 | brand verification, twarze |
| 8 | `/umowa-cityroom/` | Umowa po §2 jako proof point | P3 | trust deepening |
| 9 | `/wycena-mieszkania-pod-wynajem-poznan/` | Bridge do formularza Lovable | P3 | wycena, kalkulator |
| 10 | `/blog/` | Lista listicles (drugi agent AI) | P4 | post‑cutover |

### Strona główna (homepage)
Decyzja do podjęcia w sesji: czy home pełni rolę pillar dla brand‑aware ruchu, czy oddzielamy pillar od homepage.

## Sekcje home — szkic z brand handoff

1. Nav (sticky, glass‑blur)
2. Hero — *"Twoje mieszkanie pracuje. Ty odpoczywasz."* (do walidacji vs UM Cityroom)
3. Stats (4 kolumny, jeden gradient — "one blue moment")
4. How it works (4 kroki)
5. Services (3 karty)
6. Testimonial
7. Contact form
8. Footer

## Następne kroki

- [ ] Sesja GEO/AEO Blok 1 — finalizacja pillar + cluster + intent map
- [ ] Wypełnienie tabeli powyżej dokładnymi danymi z PromptEye
- [ ] Mapa internal linking
- [ ] Walidacja slugów pod keyword research
- [ ] Connect do `docs/schema-map.md` (jaki schema na której stronie)
