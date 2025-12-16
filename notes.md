#### Frågor

- Hur behöver jag typa backend korrekt?

- hur kan jag dölja min databasuppkpploing i frontend likt som jag gör i backend med
  .env?

- Hur gör jag en intercept där jag fetchar data och sedan lägger in resultatet
  i en variabel som jag vill använda som prop till en komponent i testet.

#### Todo:

1. Göra test för att ta bort en produkt ✔️
2. Lägga till input för betalnings information
3. Lägga till tester för updateCart ✔️
4. Updatera komponent tester ✔️
5. Anpassa lägg till och ta bort produkter i productContainer så att den är kopplad direkt till cart och slå ihop funktioner. ✔️
6. Lägga till UML-diagram (sekvensdiagram, flow-chart) och pusha upp fil på github, kanske i README. ✔️
7. Sätta upp automatiserade tester med github actions ✔️
8. Lägga till tanStack Query
9. Bygga account

#### E2E tester:

<!-- 1. Visas det några produkter på webbsidan? -->
<!-- 2. Går det att lägga till produkter i kundvagnen? -->

<!-- 3. Går det att lägga en beställning? -->

<!-- 4. Innehåller beställningen rätt produkter? -->

5. Innehåller beställningen rätt kundinformation?
6. Är kostnaden för beställningen rätt?
7. Går det att redigera beställningen? Ta bort en produkt? ✔️
8. Går det att genomföra ett köp?
9. Går det att logga in och logga ut?

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
