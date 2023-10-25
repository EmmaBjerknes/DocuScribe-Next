# DocuScribe-Next

DocuScribe-Next är en webbapplikation utvecklad för att hantera dokument. Användaren kan skapa, redigera och ta bort dokument, allt med hjälp av en textredigerare. Alla ändringar sparas i en lokal MySQL-databas.

## Tekniker och verktyg

- **Next.js:** Ett ramverk för att bygga webbapplikationer med React.
- **Tailwind CSS:** Ett utility-first CSS-ramverk för att skapa anpassade designs.
- **TinyMCE:** En textredigerare för webbapplikationer.
- **PHPMyAdmin:** Ett webbaserat verktyg för att hantera MySQL-databaser.

## Starta projektet

För att starta projektet behöver du följa dessa steg:

1. Klona lagringsplatsen:

   `git clone https://github.com/EmmaBjerknes/DocuScribe-Next.git`

2. Navigera till lagringsplatsens katalog:

   `cd DocuScribe-Next`

3. Installera projektets beroenden:

   `npm install`

4. Kör utvecklingsservern:

   `npm run dev`

Nu bör applikationen vara tillgänglig på [http://localhost:3000](http://localhost:3000) i din webbläsare.

För att projektet ska fungera korrekt krävs en lokal databas, som MAMP med PHPMyAdmin, för att spara och hämta data. Dessutom behöver du en .env-fil för att konfigurera din databasanslutning.
