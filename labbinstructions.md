### Inlämningsuppgift

Skapa en fullstack-applikation, eller bygg vidare på en tidigare applikation (till exempel Laboration 3 i Software life cycle management), och skriv mjukvarutester för denna.

Projektet går att göra individuellt eller i grupp.

- Applikationen ska ha ett frontend, ett backend och en databas.
- Inlämningen ska innehålla en GitHub-adress till projektet. Om ditt repository är privat, bjud då in användaren “hinjo” på GitHub/GitLab.

#### Typescript

- Varken JavaScript eller JSX får användas. Använd TypeScript (och TSX, om React används) istället. Notera att TypeScript är en stor del av kursen och att TypeScript-insatsen därför ska vara tillräckligt omfattande.

#### Tester

- Testa applikationens funktionalitet med E2E-tester och komponenttester. Notera att mjukvarutester är en stor del av kursen och att testinsatsen därför ska vara tillräckligt omfattande.
- Alla måste individuellt utveckla minst en komponent med testdriven utveckling (TDD). Detta innebär att testerna ska skrivas innan koden för respektive komponentfunktionalitet. Rapporten och Git commit-historiken ska visa att testet/testen kom först. Par- eller mob-programmering är inte tillåtet för att uppfylla detta krav.

#### UML diagram

- Alla måste individuellt skapa åtminstone ett UML-diagram som beskriver någon del av projektet.

#### DRY

- Alla måste individuellt följa relevanta designprinciper såsom DRY.

För G ska ett tillräckligt stort bidrag till produkten ska göras. Grundläggande förståelse för de relevanta teoretiska områdena ska uppvisas.

### VG krav

- För VG ska lämpliga programmeringskonstruktioner väljas ut och tillämpas för problemen. Ett större bidrag till produkten ska göras än för G. God förståelse för de relevanta teoretiska områdena ska uppvisas.

- För VG ska code coverage mätas och redovisas, se https://docs.cypress.io/guides/tooling/code-coverage.

- För VG ska också testerna köras automatiskt vid varje git push-kommando, använd GitHub Actions eller liknande för detta. Det kan vara utmanande att få backend och databas att fungera i GitHub Actions (men det går, till exempel med Docker). Det är dock OK att mocka anrop till backend-applikationen med cy.intercept. Det är även OK att använda en molndatabas (till exempel Render) för databasen. Docker behöver inte användas. Code coverage- och automatiseringskraven kan lösas i grupp.

- För VG ska också all kod vara enhetligt formaterad och det ska finnas en ESLint-konfigurationsfil som alla filer i projektet följer. (Filer som genererats automatiskt i cypress-mappen får innehålla ESLint-fel och behöver inte vara formaterade med Prettier.)

#### Redovisning

Projektet ska redovisas på kursens sista tillfälle.
