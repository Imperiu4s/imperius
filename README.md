# imperius.hu

Egyszerű, build nélküli, statikus HTML/CSS/JS weboldal. Bármilyen sima
webtárhelyre feltölthető.

## Struktúra

```
index.html, rolam.html, videok.html, portfolio.html, kapcsolat.html,
tudasfa.html, 404.html
assets/css/style.css       Az összes stílus (design tokens a tetején)
assets/js/main.js          Téma, nyelv, menü, keresés, kurzor, videók, statisztikák…
assets/js/i18n.js          HU/EN szótár + a nyelvváltás logikája
assets/js/config.js        "Mit hallgatok mostanában?" videólink beállítása
assets/js/now-playing.js   A háttérlejátszó logikája (csak a kezdőlapon fut)
assets/js/knowledge-tree.js A Tudás fája minijáték kérdésbankja + logikája
assets/js/videos-data.js   A YouTube videók listája (generált fájl)
assets/js/stats-data.js    Élő statisztikák + élő közvetítés állapota (generált fájl, opcionális)
scripts/fetch-videos.js    Frissíti a videos-data.js / stats-data.js fájlokat
scripts/dev-server.js      Helyi teszteléshez (lásd lentebb)
favicon.svg, robots.txt, sitemap.xml, .htaccess
```

## Miért nem `fetch()`-eli a videókat?

A videólista NEM egy JSON-t tölt be futásidőben — a `scripts/fetch-videos.js`
egy sima `<script>`-ként betölthető `assets/js/videos-data.js` fájlt ír, amit
a HTML fájlok simán beillesztenek (`window.IMPERIUS_VIDEOS = [...]`). Ennek
oka: ha valaki dupla kattintással nyitja meg a `.html` fájlokat (`file://`
protokoll), a böngésző biztonsági okokból blokkolja a helyi JSON fájlok
`fetch()`-elését — ezért nem is töltődtek be korábban a videók ezzel a
módszerrel. A jelenlegi megoldás mind `file://`-ról, mind normál
webtárhelyről egyaránt működik.

## YouTube videók frissítése

```bash
node scripts/fetch-videos.js
```

Ez felülírja az `assets/js/videos-data.js` fájlt a csatorna
(`UCeV22Q6k4YN_g8C9ZlCzeUQ`, azaz `@imperiu4s`) legfrissebb ~15
feltöltésével, API kulcs nélkül (a nyilvános YouTube RSS-feedet olvassa).
Új feltöltés után futtasd le, majd töltsd fel újra ezt a fájlt a
tárhelyedre.

### Automatikus frissítés (Windows Feladatütemező)

```powershell
schtasks /create /tn "Imperius videok frissitese" /tr "node C:\Users\imper\Documents\imperius.hu\scripts\fetch-videos.js" /sc daily /st 09:00
```

## "Mit hallgatok mostanában?" háttérlejátszó

A kezdőlapon, a három statisztika alatt megjelenő zenelejátszó egy
valódi YouTube-videót játszik le a háttérben (csak hang, a videó
maga nincs látványosan megjelenítve — csak egy kis borító-kép és egy
lejátszás gomb, ami külön áll a borítóképtől, nincs ráhelyezve).
Beállításhoz nyisd meg az `assets/js/config.js` fájlt — a tetején egy
jól látható, egysoros helyet találsz:

```js
var NOW_PLAYING_URL = "";
```

Ide írd be a linket, idézőjelek között, pl.:
`var NOW_PLAYING_URL = "https://www.youtube.com/watch?v=xxxxxxxxxxx";`

Bármilyen YouTube link formátum működik (`youtube.com/watch?v=...`,
`youtu.be/...`, vagy akár csak a videó azonosítója). Ha üresen hagyod,
a lejátszó automatikusan eltűnik a kezdőlapról. A borítókép és a cím a
YouTube nyilvános adataiból töltődik be automatikusan, API kulcs
nélkül. Lejátszás csak kattintásra indul — ezt a böngészők amúgy is
megkövetelik (automatikus, hangos lejátszást nem engednek).

A vezérlés három **külön** gombbal történik (lejátszás / szünet /
megállítás — nem egy gomb vált ikont), plusz egy folyamatjelző sáv
mutatja, hány másodpercnél tart a zene a teljes hosszhoz képest
("0:24 / 3:34" formában). Ha a "Lejátszás" gombra kattintasz még
azelőtt, hogy a YouTube-lejátszó ténylegesen betöltött volna (ez
néhány tized másodpercig tarthat), a kattintás nem vész el — a
lejátszás automatikusan elindul, amint a lejátszó készen áll.

Ha a zene nem szólal meg, a widget alján megjelenik egy hibaüzenet és
egy közvetlen YouTube-link — két valós ok szokott állni emögött:
1. **A videó tulajdonosa letiltotta a beágyazott lejátszást** (gyakori
   hivatalos zenei klipeknél). Ez esetben válassz másik videót.
2. **Egy hirdetésblokkoló vagy adatvédelmi böngészőbővítmény**
   (pl. uBlock Origin, Brave beépített védelme, Firefox szigorú
   nyomkövetés-védelme) blokkolja a YouTube beágyazását — ez a
   leggyakoribb ok. Ez esetben az oldal minden más funkciója
   (videók, statisztikák) továbbra is működik, csak ez az egy widget
   nem — ha ezt szeretnéd elkerülni, a látogatóidnak ideiglenesen ki
   kell kapcsolniuk a blokkolót ennél az oldalnál.

## Élő statisztikák és élő közvetítés (YouTube Data API kulcs)

Mindkettő ugyanazzal a kulccsal működik, és mindkettő automatikusan
frissül, ahányszor lefuttatod a scriptet:

1. Szerezz egy YouTube Data API v3 kulcsot:
   https://console.cloud.google.com/apis/credentials (hozz létre egy
   projektet, engedélyezd a "YouTube Data API v3"-at, majd generálj egy
   API kulcsot).
2. Mentsd el a kulcsot **helyileg**, az egyik módon:
   - Környezeti változóként: `set YOUTUBE_API_KEY=xxxxx` (cmd) vagy
     `$env:YOUTUBE_API_KEY="xxxxx"` (PowerShell) a `node scripts/fetch-videos.js`
     futtatása előtt, VAGY
   - Egy `scripts/api-key.local.txt` fájlba írva a kulcsot (ez a fájl a
     `.gitignore`-ban van, sosem kerül fel githubra).
3. Futtasd (újra): `node scripts/fetch-videos.js` — ez létrehozza az
   `assets/js/stats-data.js` fájlt: feliratkozók, megtekintések,
   videószám, valamint hogy éppen élsz-e YouTube-on.

**Fontos**: a kulcs csak itt, a te gépeden fut a script futtatásakor —
soha nem kerül be a weboldal kódjába, tehát a látogatók nem láthatják.

### Élő közvetítés (YouTube Live)

A kezdőlap "Most élőben vagyok?" szekciója automatikusan a beágyazott
élő lejátszót mutatja, ha a script futtatásakor épp éltél a
csatornádon; ha nem, egy csinos "jelenleg nem vagyok élőben" kártyát
mutat a csatornára mutató linkkel. Mivel ez csak a script legutóbbi
futtatásakori állapotot tükrözi, ha gyakran streamelsz, érdemes az
automatikus frissítést (lásd fentebb, Feladatütemező) gyakrabban
(pl. óránként) futtatni, hogy a "most élőben" állapot friss maradjon.
A `search.list` hívás (ami ezt ellenőrzi) 100 egységet használ fel a
napi 10 000-es API kvótából — óránkénti frissítésnél is bőven elég.

## Többnyelvűség (HU/EN)

A nyelv váltása a fejlécben lévő "HU/EN" gombbal történik, és
`localStorage`-**ban ÉS a URL-ben is** megjegyzi a választást
(ugyanígy a témát is) — ha az egyik nem elérhető (pl. `file://`-ról
nyitva, ahol egyes böngészők fájlonként elkülönítik a
`localStorage`-ot), a másik még mindig megőrzi a beállítást, akár egy
sima újratöltés (F5) esetén is, nem csak menüre kattintva. Új szöveg
fordításához:
1. Vedd fel a kulcsot mindkét (`hu` és `en`) szótárba az `i18n.js`-ben.
2. A HTML-ben tedd rá a `data-i18n="a_kulcs_neve"` attribútumot arra az
   elemre, aminek a szövegét cserélni szeretnéd.

Megjegyzés: ez egy kliensoldali váltás (nem külön URL-ek nyelvenként),
ami egyszerű és build nélküli, de nem ideális kereső-optimalizálás
(SEO) szempontjából — ha ez fontos, egy `/en/` almappás, szerver
oldalon renderelt verzió lenne a következő lépés.

## Tudás fája (minijáték)

A `tudasfa.html` egy önálló minijáték: kvízkérdésekre kell helyesen
válaszolni, minden helyes válasz eggyel feljebb visz egy szinten, egy
rossz válasz pedig visszaküld a legaljára. A kérdésbank (~54 kérdés,
magyarul és angolul is) az `assets/js/knowledge-tree.js` fájlban van —
ha kifogysz az ötletekből, csak vegyél fel új `{q, a: [...4 válasz],
correct: index}` bejegyzéseket a `hu` és `en` tömbbe (ugyanabban a
sorrendben, hogy nyelvváltáskor ne csússzon szét semmi). A kérdéskör
kimerülése után újrakeveredik, tehát elméletileg végtelenségig lehet
mászni. A legjobb szint `localStorage`-ban marad meg böngészőnként.

## Keresés

A nagyítóikonra kattintva (vagy a `/` billentyűvel) egy keresőablak
nyílik, ami az oldalak címei és a videók címei között keres, ékezet-
függetlenül. A találati listát az `assets/js/main.js` `buildSearchIndex`
függvénye állítja össze.

## "Ne lehessen megnyitni a vizsgálatot" (fejlesztői eszközök)

Ezt kérted, de fontos, hogy tudd: **ezt semmilyen weboldal nem tudja
valóban megakadályozni.** Amit beépítettem (`assets/js/main.js` legalja):
jobbklikk letiltása, valamint az F12 / Ctrl+Shift+I / Ctrl+U
billentyűkombinációk blokkolása. Ez csak egy enyhe akadály — bárki, aki
tudja mit csinál, a böngésző menüjéből (⋮ → Továbbiak → Fejlesztői
eszközök), vagy a `view-source:` cím beírásával, vagy a JavaScript
kikapcsolásával simán megkerüli. Emiatt **ne tárolj és ne védj vele
valóban bizalmas adatot** (pl. API kulcsot) a kliensoldali kódban — a
YouTube API kulcsot pont ezért nem a böngészőben, hanem a
`fetch-videos.js` scriptben, a te gépeden használjuk.

## Betöltő animáció, egyedi kurzor, görgetősáv, "kódíró" animáció

- A betöltő animáció középpontjában egy folyamatosan forgó és
  "folyékonyan" alakot váltó gradiens gömb áll (`border-radius`
  animálásával, elmosás nélkül), körülötte három keringő ponttal és a
  márkajelzéssel a közepén — nem egy megszokott pörgő ikon vagy
  csíkokból álló sáv, hanem valami saját. Lásd a Teljesítmény
  szakaszt arról, miért pont ezekkel a CSS tulajdonságokkal épül fel.
- Az egyedi kurzor csak asztali, pontos mutatóeszközön (egér) jelenik
  meg, és kikapcsol, ha a látogató "csökkentett mozgást" kért a
  rendszerében (`prefers-reduced-motion`).
- A görgetősáv egyedi (gradiens, "beépített" hatású), plusz egy vékony
  folyamatjelző csík fut végig a lap tetején olvasás közben.
- Lefelé görgetve az egyes szekciók címei "kódíróként" gépelődnek ki
  (monospace betűtípus, villogó kurzor), és a többi tartalom ez után
  jelenik meg.

## Animált háttér

Az egész oldal (mind a hat/hét aloldal, mindkét témában) egy kétrétegű
animált, kékes hátteret kapott:
1. Négy lágy, sodródó fényfolt (`body::before`, CSS-ben, `--bg-glow`
   változóként, témánként külön beállítva).
2. Halványan látszó, lassan görgő "kód" oszlopok a háttérben — ezt a
   `assets/js/main.js` generálja egyszer, minden oldalbetöltéskor
   (nem kell minden HTML fájlba bemásolni). A kódsorokat ugyanabban a
   fájlban, a `CODE_LINES` tömbben lehet szerkeszteni/bővíteni.

Mindkét réteg kizárólag `transform`-ot animál (nincs elmosás, nincs
háttér-pozíció animáció) — ugyanaz az elv, mint a betöltő animációnál,
lásd lentebb. Szűk képernyőn (900px alatt) a kódréteg automatikusan
elrejtőzik, hogy ne zavarja a tartalmat.

## Teljesítmény

Ha korábban lassúnak vagy "akadósnak" (alacsony FPS) érezted az oldalt,
ennek konkrét, azonosított okai voltak — nem csak általános érzés:

- A `.card` (minden videó-/projekt-/statisztika-kártya), a `.btn-ghost`
  gombok és a videó-badge-ek mind `backdrop-filter: blur()`-t
  használtak. Egyetlen elemen ez olcsó, de egy kártyarácson (pl. 15
  videókártya) **tucatnyi egyidejű blur-effekt** fut, ami az egyik
  legismertebb görgetési FPS-gyilkos technika — minden görgetési
  keretnél újra ki kell számolnia a böngészőnek, mi látszik át
  mindegyik alatt. Ezeket eltávolítottam (a fix fejléc-sáv és a ritkán
  megnyíló keresőablak kivételével, ahol csak 1-1 elemről van szó).
- A betöltő animáció két nagy, elmosott (`filter: blur(70px)`),
  animált "folt"-ot használt a háttérben — ez minden oldalváltáskor
  lefutott. Az új dizájn (lásd lent) statikus, elmosás nélküli
  háttérfényt használ ugyanahhoz a hangulathoz.
- A betűtípusok `@import`-tal töltődtek be a CSS-en belül, ami egy
  plusz, sorba kapcsolt hálózati kört jelentett minden oldalbetöltésnél
  — mostantól `<link>`-ként, párhuzamosan töltődnek.
- A betöltő animáció mesterségesen legalább ~1,25 másodpercig mindig
  kivárt, függetlenül attól, hogy az oldal már rég betöltött — ez
  minden egyes navigációnál érezhető, felesleges késleltetés volt.
  Ezt kb. a harmadára csökkentettem.
- Az egyedi kurzor egy `requestAnimationFrame`-hurkot futtatott
  **örökké**, amíg a lap nyitva volt, akkor is, ha az egér már nem
  mozgott. Most leáll, amint a kurzor "utolérte" az egeret, és csak
  új mozgásra indul újra.

## Helyi tesztelés

```bash
node scripts/dev-server.js
```

Ez elindít egy egyszerű szervert a `http://localhost:5500` címen —
innen minden funkció (téma, nyelv, keresés, videók) úgy működik, mint
éles környezetben.

## Testreszabás

- **Színek / téma**: `assets/css/style.css` tetején, a `:root` blokkban.
- **Betűtípusok**: Sora (címsorok), Inter (szöveg), JetBrains Mono
  ("kódíró" effekt) — mind Google Fonts, az `@import` sorban cserélhető.
- **Email cím**: a `kapcsolat.html` és `assets/js/main.js` fájlokban
  (`imperiu4s@gmail.com`) — ide érkeznek a kapcsolatfelvételi
  űrlapból induló emailek (a gomb az email kliensedet nyitja meg,
  előre kitöltve).
- **Lábléc szöveg**: az `i18n.js`-ben a `footer_credit` kulcs alatt.

## Deploy

Statikus fájlokról van szó — bármilyen megosztott tárhelyre (FTP) vagy
statikus hosztingra (GitHub Pages, Netlify, Cloudflare Pages) egyszerűen
felmásolható a teljes mappa tartalma.

### Tiszta URL-ek (`.html` nélkül)

Az oldalak belső linkjei már kiterjesztés nélkül mutatnak egymásra
(pl. `/rolam`, nem `/rolam.html`). Ehhez a mellékelt `.htaccess` fájl
kell, ami a leggyakoribb (Apache-alapú, cPanel-es) magyar
tárhelyeken magától működik, ha felmásolod a többi fájllal együtt —
nincs vele teendő. Ha a tárhelyed **nem** Apache-ot használ:
- **Nginx**: az `.htaccess` nem működik, egy `try_files` szabály kell
  a szerver configba (`try_files $uri $uri.html $uri/ =404;`).
- **GitHub Pages / Netlify / Cloudflare Pages**: ezek alapból is
  kiszolgálják a kiterjesztés nélküli URL-eket (pl. `/rolam` →
  `rolam.html`), az `.htaccess`-re nincs is szükség, de nem árt, ha
  ott marad (egyszerűen figyelmen kívül hagyják).

Helyi teszteléshez a `scripts/dev-server.js` ugyanígy viselkedik
(lásd lentebb), tehát a `node scripts/dev-server.js` paranccsal
pontosan azt látod, amit éles környezetben is fogsz.

**Ha a `.html` fájlokat dupla kattintással, szerver nélkül nyitod meg**
(`file://` a címsorban): a tiszta URL-eket akkor sem kell átírnod
semmire — a `main.js` ezt az esetet felismeri, és a lap betöltésekor
minden belső linket automatikusan visszaalakít a valódi `.html` fájlra
mutatóra, mert `file://` alatt nincs szerver, ami a kiterjesztés
nélküli linket feloldaná. Ez a látogató szemszögéből semmiben nem
különbözik: a linkek ugyanúgy működnek, csak a címsorban ilyenkor
látszik a `.html` (ez elkerülhetetlen `file://`-nál).
