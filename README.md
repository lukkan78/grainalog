# Grainalog – Analog filmsimulering i PWA-format

**Grainalog** är en minimalistisk och kraftfull Progressive Web App som simulerar klassiska analoga filmtyper med realistisk filmgrain, färgkaraktär och ISO-effekter – direkt i din webbläsare.

## Funktioner

- Ladda upp eller ta bilder direkt från mobilen
- Välj mellan klassiska filmtyper:
  - Kodak Portra 400
  - Ilford HP5 Plus
  - Kodak Tri-X 400
  - Cinestill 800T (med halation-effekt)
  - Fuji Superia 200
- Ställ ISO (100–1600) för simulering av push/pull-effekter
- Justera:
  - Filmintensitet
  - Grain-nivå
  - Halation (på/av)
- Exportera i PNG eller JPG med valfri kvalitet
- Metadata (filmtyp, ISO, grain etc.) sparas i JPG-filer
- Fungerar offline som PWA – installeras som app på hemskärmen

## Användning

1. Öppna appen: [https://lukkan78.github.io/grainalog](https://lukkan78.github.io/grainalog)
2. Lägg till på hemskärmen för att installera som app (Safari på iPhone)
3. Ladda upp bild → välj filmtyp → justera → exportera

## Teknisk info

- Byggd i HTML, CSS, JavaScript
- LUT-motor via WebGL/canvas
- Grain-overlay genereras i realtid
- Metadata skrivs med `piexifjs` (endast för JPG)

## Copyright

© Lukas Carnerheim 2025. Fritt att använda för personligt bruk. För kommersiellt bruk, kontakta upphovsmannen.
