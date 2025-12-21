#### Frågor

- Hur behöver jag typa backend korrekt?

- hur kan jag dölja min databasuppkpploing i frontend likt som jag gör i backend med
  .env?

- Hur gör jag en intercept där jag fetchar data och sedan lägger in resultatet
  i en variabel som jag vill använda som prop till en komponent i testet.

#### Todo:

1. Skapa login account page✔️
2. Göra en ny testdriven komponent✔️
3. Skapa tester för landscape
4. Dela upp backend
5. Kolla om det finns fler enpoints att lägga till, flytta över logik till backend
6. Lägga till input för betalnings information
7. styla bekräfta beställning knapp✔️
8. Bygga account✔️
9. Skapa workflow som skickar en beställning på produkter varje torsdag kl. 13
10. Göra test för att ta bort en produkt ✔️
11. Lägga till tester för updateCart ✔️
12. Updatera komponent tester ✔️
13. Anpassa lägg till och ta bort produkter i productContainer så att den är kopplad direkt till cart och slå ihop funktioner. ✔️
14. Lägga till UML-diagram (sekvensdiagram, flow-chart) och pusha upp fil på github, kanske i README. ✔️
15. Sätta upp automatiserade tester med github actions ✔️
16. Lägga till tanStack Query ✔️

#### E2E tester:

1. Är kostnaden för beställningen rätt?
2. Innehåller beställningen rätt kundinformation?
3. Går det att genomföra ett köp?✔️
4. Går det att logga in och logga ut?✔️
5. Visas det några produkter på webbsidan? ✔️
6. Går det att lägga till produkter i kundvagnen? ✔️
7. Går det att lägga en beställning? ✔️
8. Innehåller beställningen rätt produkter? ✔️
9. Går det att redigera beställningen? Ta bort en produkt? ✔️

#### Andra titlar

FrukostLyx Nybakat Brödhem MorgonLimpan

### Tisdag 02/12

### Torsdag 04/12

Databasinitialisering

Kan nollställa och bygga om databasen inför tester

- Integrations-tester
  kan vara bra att köra tester mot backend med cy.request. kan vara bra att köra tester mot backend med sånt som vår frontend inte accepterar.

- fejkdata
  @faker-js/faker

- Kopiera databasen
  pg_dump -f backup.sql --username=postgres

dropdb postgres
createdb postgres
psql -d postgres -f backup.sql

### Presentation

- Inledning, vad jag har byggt, vilka ramverk jag använt

- Sekventiella Diagram

- Kodstruktur (Kan visa något test)

- Visa util (visa bild)

- Visa att tester går igenom

- Visa att databasen inte påverkas

- Visa appen (visa flödesbild innan)

- Visa att databasen uppdateras

code coverage: true

1. github startsida
2. visa produkt
3. github actions
4. rapport
5. Github TDD
6. Cypress Tester för TDD
7. Code router och cart
8. Code Commands
9. Code Make orders
10. Cypress Tester
11. Databas
12. Appen och visa databas
