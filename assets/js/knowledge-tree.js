// =========================================================
// IMPERIUS.HU — "Tudás fája" / "Knowledge Tree" mini-game
// General-knowledge quiz: climb one level per correct answer,
// one wrong answer sends you back to the ground. The question pool
// reshuffles once exhausted, so a good run can climb forever.
// =========================================================
window.IMPERIUS_QUIZ = {
  // Parallel arrays: same order, same "correct" index, in both
  // languages, so switching language mid-question just relabels the
  // same question instead of jumping to a different one.
  hu: [
    { q: 'Mi a Föld legnagyobb óceánja?', a: ['Csendes-óceán', 'Atlanti-óceán', 'Indiai-óceán', 'Jeges-tenger'], correct: 0 },
    { q: 'Hány kontinens van a Földön?', a: ['7', '5', '6', '8'], correct: 0 },
    { q: 'Ki festette a Mona Lisát?', a: ['Leonardo da Vinci', 'Michelangelo', 'Raffaello', 'Van Gogh'], correct: 0 },
    { q: 'Mi Magyarország fővárosa?', a: ['Budapest', 'Debrecen', 'Szeged', 'Pécs'], correct: 0 },
    { q: 'Hány bit van egy byte-ban?', a: ['8', '4', '16', '10'], correct: 0 },
    { q: 'Melyik a Naprendszer legnagyobb bolygója?', a: ['Jupiter', 'Szaturnusz', 'Föld', 'Uránusz'], correct: 0 },
    { q: 'Mi a vegyjele az aranynak?', a: ['Au', 'Ag', 'Fe', 'Gd'], correct: 0 },
    { q: 'Melyik évben ért véget a második világháború?', a: ['1945', '1939', '1944', '1950'], correct: 0 },
    { q: 'Hány lába van egy póknak?', a: ['8', '6', '10', '4'], correct: 0 },
    { q: 'Melyik a leggyorsabb szárazföldi állat?', a: ['Gepárd', 'Oroszlán', 'Ló', 'Strucc'], correct: 0 },
    { q: 'Melyik blokk robbanhat fel a Minecraftban?', a: ['TNT', 'Kő', 'Üveg', 'Homok'], correct: 0 },
    { q: 'Melyik évben indult el a YouTube?', a: ['2005', '2000', '2010', '1998'], correct: 0 },
    { q: 'Hány óra van egy napban?', a: ['24', '12', '48', '20'], correct: 0 },
    { q: 'Mi a víz kémiai képlete?', a: ['H2O', 'CO2', 'O2', 'NaCl'], correct: 0 },
    { q: 'Melyik ország a legnépesebb a világon?', a: ['India', 'Kína', 'USA', 'Indonézia'], correct: 0 },
    { q: 'Hány szín van hagyományosan a szivárványban?', a: ['7', '5', '6', '8'], correct: 0 },
    { q: 'Ki írta a Harry Potter könyveket?', a: ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Suzanne Collins'], correct: 0 },
    { q: 'Mi a legnagyobb emlős a Földön?', a: ['Kék bálna', 'Elefánt', 'Zsiráf', 'Cápa'], correct: 0 },
    { q: 'Hány oldala van egy kockának?', a: ['6', '4', '8', '12'], correct: 0 },
    { q: 'Melyik gáz alkotja a levegő legnagyobb részét?', a: ['Nitrogén', 'Oxigén', 'Szén-dioxid', 'Hidrogén'], correct: 0 },
    { q: 'Melyik évben alapították a Discordot?', a: ['2015', '2010', '2018', '2012'], correct: 0 },
    { q: 'Nagyjából mekkora a fénysebesség?', a: ['300 000 km/s', '150 000 km/s', '1 000 km/s', '3 000 km/s'], correct: 0 },
    { q: 'Hány húrja van egy hagyományos gitárnak?', a: ['6', '4', '8', '12'], correct: 0 },
    { q: 'Melyik a legmagasabb hegy a Földön?', a: ['Mount Everest', 'K2', 'Kilimandzsáró', 'Matterhorn'], correct: 0 },
    { q: 'Melyik a legkisebb bolygó a Naprendszerben?', a: ['Merkúr', 'Mars', 'Vénusz', 'Plútó'], correct: 0 },
    { q: 'Ki írta a Rómeó és Júliát?', a: ['Shakespeare', 'Dickens', 'Hemingway', 'Tolsztoj'], correct: 0 },
    { q: 'Melyik évben süllyedt el a Titanic?', a: ['1912', '1905', '1920', '1898'], correct: 0 },
    { q: 'Hány kártya van egy szokásos francia kártyacsomagban?', a: ['52', '48', '54', '40'], correct: 0 },
    { q: 'Mi Ausztrália fővárosa?', a: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], correct: 0 },
    { q: 'Melyik elem vegyjele az "O"?', a: ['Oxigén', 'Ozmium', 'Arany', 'Ón'], correct: 0 },
    { q: 'Melyik bolygót nevezik "Vörös Bolygónak"?', a: ['Mars', 'Vénusz', 'Jupiter', 'Szaturnusz'], correct: 0 },
    { q: 'Ki volt az első ember a Holdon?', a: ['Neil Armstrong', 'Buzz Aldrin', 'Jurij Gagarin', 'John Glenn'], correct: 0 },
    { q: 'Melyik ország konyhájából származik a szusi?', a: ['Japán', 'Kína', 'Korea', 'Thaiföld'], correct: 0 },
    { q: 'Melyik kontinensen található a Szahara sivatag?', a: ['Afrika', 'Ázsia', 'Ausztrália', 'Dél-Amerika'], correct: 0 },
    { q: 'Melyik évben alapították a Facebookot?', a: ['2004', '2000', '2008', '2010'], correct: 0 },
    { q: 'Mennyi 7 × 8?', a: ['56', '54', '64', '48'], correct: 0 },
    { q: 'Melyik bolygónak vannak a leghíresebb gyűrűi?', a: ['Szaturnusz', 'Jupiter', 'Uránusz', 'Neptunusz'], correct: 0 },
    { q: 'Ki komponálta a 9. szimfóniát (Örömóda)?', a: ['Beethoven', 'Mozart', 'Bach', 'Chopin'], correct: 0 },
    { q: 'Mi Japán fővárosa?', a: ['Tokió', 'Oszaka', 'Kiotó', 'Jokohama'], correct: 0 },
    { q: 'Melyik a világ leghosszabb folyója?', a: ['Nílus', 'Amazonas', 'Jangce', 'Mississippi'], correct: 0 },
    { q: 'Mi az emberi test legnagyobb szerve?', a: ['Bőr', 'Máj', 'Tüdő', 'Szív'], correct: 0 },
    { q: 'Hány foga van átlagosan egy felnőtt embernek?', a: ['32', '28', '36', '24'], correct: 0 },
    { q: 'Melyik évben történt a csernobili katasztrófa?', a: ['1986', '1979', '1990', '1975'], correct: 0 },
    { q: 'Ki alapította a Microsoftot?', a: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk'], correct: 0 },
    { q: 'Melyik óceán a legkisebb?', a: ['Jeges-tenger', 'Indiai-óceán', 'Atlanti-óceán', 'Csendes-óceán'], correct: 0 },
    { q: 'Hány mezője van egy sakktáblának?', a: ['64', '32', '100', '81'], correct: 0 },
    { q: 'Melyik állat a leghosszabb életű szárazföldi állat?', a: ['Óriásteknős', 'Elefánt', 'Ember', 'Papagáj'], correct: 0 },
    { q: 'Melyik nyelven jelenti a "ciao" azt, hogy szia/viszlát?', a: ['Olasz', 'Spanyol', 'Francia', 'Portugál'], correct: 0 },
    { q: 'Melyik ország adta a világnak a pizzát?', a: ['Olaszország', 'Görögország', 'Franciaország', 'Spanyolország'], correct: 0 },
    { q: 'Ki írta az Iliászt?', a: ['Homérosz', 'Vergilius', 'Platón', 'Szophoklész'], correct: 0 },
    { q: 'Melyik évben szűnt meg a Szovjetunió?', a: ['1991', '1989', '1985', '1995'], correct: 0 },
    { q: 'Mi a legkisebb prímszám?', a: ['2', '1', '3', '0'], correct: 0 },
    { q: 'Hány kromoszómája van az embernek?', a: ['46', '44', '48', '23'], correct: 0 },
    { q: 'Hány játékos van egy focicsapatban a pályán (kapussal együtt)?', a: ['11', '10', '9', '12'], correct: 0 },
    // --- Extra questions ---
    // --- Batch 1: Geography ---
    { q: 'Melyik a leghosszabb hegylánc a világon?', a: ['Andok', 'Sziklás-hegység', 'Himalája', 'Alpok'], correct: 0 },
    { q: 'Melyik a világ legkisebb országa területét tekintve?', a: ['Vatikán', 'Monaco', 'San Marino', 'Liechtenstein'], correct: 0 },
    { q: 'Melyik a leghosszabb folyó Dél-Amerikában?', a: ['Amazonas', 'Orinoco', 'Paraná', 'São Francisco'], correct: 0 },
    { q: 'Mi Kanada fővárosa?', a: ['Ottawa', 'Toronto', 'Vancouver', 'Montréal'], correct: 0 },
    { q: 'Mi Egyiptom fővárosa?', a: ['Kairó', 'Alexandria', 'Gíza', 'Luxor'], correct: 0 },
    { q: 'Melyik a legnagyobb sziget a világon?', a: ['Grönland', 'Új-Guinea', 'Borneó', 'Madagaszkár'], correct: 0 },
    { q: 'Melyik országban található a Kilimandzsáró?', a: ['Tanzánia', 'Kenya', 'Uganda', 'Etiópia'], correct: 0 },
    { q: 'Mi Brazília fővárosa?', a: ['Brazíliaváros', 'Rio de Janeiro', 'São Paulo', 'Salvador'], correct: 0 },
    { q: 'Melyik szoros választja el Európát Afrikától?', a: ['Gibraltári-szoros', 'Boszporusz', 'Doveri-szoros', 'Messinai-szoros'], correct: 0 },
    { q: 'Melyik a legkisebb kontinens területét tekintve?', a: ['Ausztrália', 'Európa', 'Antarktisz', 'Dél-Amerika'], correct: 0 },
    { q: 'Melyik országban van a legtöbb időzóna?', a: ['Franciaország', 'Oroszország', 'USA', 'Kína'], correct: 0 },
    { q: 'Mi Dél-Korea fővárosa?', a: ['Szöul', 'Puszan', 'Incshon', 'Tegu'], correct: 0 },
    { q: 'Melyik a legnagyobb hidegsivatag a világon?', a: ['Antarktiszi-sivatag', 'Gobi', 'Arab-sivatag', 'Kalahári'], correct: 0 },
    { q: 'Hogy hívják az óceán legmélyebb pontját?', a: ['Mariana-árok', 'Puerto Rico-árok', 'Jáva-árok', 'Tonga-árok'], correct: 0 },
    { q: 'Melyik ország terül el Európa és Ázsia határán, a Boszporusz mentén?', a: ['Törökország', 'Oroszország', 'Grúzia', 'Kazahsztán'], correct: 0 },
    { q: 'Mi Argentína fővárosa?', a: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'], correct: 0 },
    { q: 'Melyik országban van a legtöbb természetes tó?', a: ['Kanada', 'Oroszország', 'Finnország', 'USA'], correct: 0 },
    { q: 'Hogy nevezik az emberiség által épített leghosszabb falat?', a: ['Kínai Nagy Fal', 'Hadrianus fala', 'Berlini Fal', 'Siratófal'], correct: 0 },
    { q: 'Melyik európai országot hívják "az ezer tó országának"?', a: ['Finnország', 'Svédország', 'Norvégia', 'Észtország'], correct: 0 },
    { q: 'Mi Thaiföld fővárosa?', a: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'], correct: 0 },
    { q: 'Melyik a Föld legszárazabb helye?', a: ['Atacama-sivatag', 'Szahara', 'Death Valley', 'Gobi-sivatag'], correct: 0 },
    { q: 'Mi Kenya fővárosa?', a: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'], correct: 0 },
    { q: 'Melyik a világ legsósabb vize?', a: ['Holt-tenger', 'Vörös-tenger', 'Fekete-tenger', 'Kaszpi-tenger'], correct: 0 },
    { q: 'Mi Hollandia fővárosa?', a: ['Amszterdam', 'Rotterdam', 'Hága', 'Utrecht'], correct: 0 },
    { q: 'Melyik kontinensen van a legtöbb ország?', a: ['Afrika', 'Ázsia', 'Európa', 'Dél-Amerika'], correct: 0 },
    // --- Batch 2: World history ---
    { q: 'Melyik évben tört ki az első világháború?', a: ['1914', '1912', '1916', '1918'], correct: 0 },
    { q: 'Ki volt az első római császár?', a: ['Augustus', 'Julius Caesar', 'Nero', 'Caligula'], correct: 0 },
    { q: 'Melyik évben kezdődött a francia forradalom?', a: ['1789', '1776', '1799', '1804'], correct: 0 },
    { q: 'Melyik birodalom építtette a Colosseumot?', a: ['Római Birodalom', 'Görög Birodalom', 'Oszmán Birodalom', 'Bizánci Birodalom'], correct: 0 },
    { q: 'Melyik évben omlott le a berlini fal?', a: ['1989', '1991', '1987', '1985'], correct: 0 },
    { q: 'Melyik egyiptomi királynőt Caesarral és Marcus Antoniusszal való kapcsolatáról ismerjük leginkább?', a: ['Kleopátra', 'Nofertiti', 'Hatsepszut', 'Anheszenamon'], correct: 0 },
    { q: 'Melyik háborút vívta egymással az Egyesült Államok északi és déli régiója?', a: ['Amerikai polgárháború', 'Amerikai függetlenségi háború', '1812-es háború', 'Spanyol–amerikai háború'], correct: 0 },
    { q: 'Melyik évben ért partot Kolumbusz Kristóf Amerikában?', a: ['1492', '1498', '1500', '1488'], correct: 0 },
    { q: 'Melyik civilizáció építette Machu Picchut?', a: ['Inka', 'Maja', 'Azték', 'Olmék'], correct: 0 },
    { q: 'Ki vezette Németországot a második világháború idején?', a: ['Adolf Hitler', 'Heinrich Himmler', 'Joseph Goebbels', 'Hermann Göring'], correct: 0 },
    { q: 'Melyik évben nyerte el India a függetlenségét Nagy-Britanniától?', a: ['1947', '1945', '1950', '1942'], correct: 0 },
    { q: 'Melyik ókori világcsoda állt Egyiptomban, Alexandriában?', a: ['Alexandriai világítótorony', 'Függőkertek', 'Rodoszi kolosszus', 'Artemisz-templom'], correct: 0 },
    { q: 'Ki volt az Egyesült Államok első elnöke?', a: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Abraham Lincoln'], correct: 0 },
    { q: 'Melyik században pusztított Európában a fekete halál járvány?', a: ['14. század', '12. század', '16. század', '10. század'], correct: 0 },
    { q: 'Melyik ország adott elsőként országos szinten szavazati jogot a nőknek?', a: ['Új-Zéland', 'Egyesült Államok', 'Egyesült Királyság', 'Franciaország'], correct: 0 },
    { q: 'Ki volt Nagy-Britannia miniszterelnöke a második világháború nagy részében?', a: ['Winston Churchill', 'Neville Chamberlain', 'Clement Attlee', 'Anthony Eden'], correct: 0 },
    { q: 'Melyik évben hajtották végre a Wright fivérek az első motoros repülést?', a: ['1903', '1898', '1908', '1912'], correct: 0 },
    { q: 'Melyik ókori görög városállam volt katonai berendezkedéséről híres?', a: ['Spárta', 'Athén', 'Korinthosz', 'Thébai'], correct: 0 },
    { q: 'Ki festette a Sixtus-kápolna mennyezetfreskóit?', a: ['Michelangelo', 'Leonardo da Vinci', 'Raffaello', 'Donatello'], correct: 0 },
    { q: 'Melyik ország építtette a gízai nagy piramist?', a: ['Egyiptom', 'Szudán', 'Líbia', 'Etiópia'], correct: 0 },
    { q: 'Melyik felfedező vezette az első Föld körüli hajóutat?', a: ['Ferdinand Magellán', 'Vasco da Gama', 'Kolumbusz Kristóf', 'James Cook'], correct: 0 },
    { q: 'Melyik évben zajlott a kubai rakétaválság?', a: ['1962', '1958', '1965', '1970'], correct: 0 },
    { q: 'Melyik dinasztia építtette a Tiltott Várost Pekingben?', a: ['Ming-dinasztia', 'Csing-dinasztia', 'Tang-dinasztia', 'Han-dinasztia'], correct: 0 },
    { q: 'Ki vezette a Szovjetuniót a kubai rakétaválság idején?', a: ['Nyikita Hruscsov', 'Sztálin József', 'Leonyid Brezsnyev', 'Vlagyimir Lenin'], correct: 0 },
    { q: 'Melyik évben rendezték az első újkori olimpiai játékokat?', a: ['1896', '1900', '1892', '1904'], correct: 0 },
    // --- Batch 3: Science ---
    { q: 'Mi a nátrium vegyjele?', a: ['Na', 'So', 'Sd', 'Su'], correct: 0 },
    { q: 'Mi a legkeményebb természetes anyag a Földön?', a: ['Gyémánt', 'Kvarc', 'Titán', 'Grafit'], correct: 0 },
    { q: 'Hogy hívják a sejt "erőművét"?', a: ['Mitokondrium', 'Sejtmag', 'Riboszóma', 'Golgi-készülék'], correct: 0 },
    { q: 'Melyik erő tartja a bolygókat a Nap körüli pályán?', a: ['Gravitáció', 'Mágnesesség', 'Súrlódás', 'Tehetetlenség'], correct: 0 },
    { q: 'Hány fokon forr a víz tengerszinten, Celsiusban?', a: ['100°C', '90°C', '110°C', '120°C'], correct: 0 },
    { q: 'Melyik bolygón a legrövidebb egy nap?', a: ['Jupiter', 'Merkúr', 'Vénusz', 'Mars'], correct: 0 },
    { q: 'Hogy hívják a földrengésekkel foglalkozó tudományágat?', a: ['Szeizmológia', 'Geológia', 'Meteorológia', 'Vulkanológia'], correct: 0 },
    { q: 'Melyik gázt vonják el a növények a levegőből a fotoszintézishez?', a: ['Szén-dioxid', 'Oxigén', 'Nitrogén', 'Hidrogén'], correct: 0 },
    { q: 'Mi a vas vegyjele?', a: ['Fe', 'Ir', 'In', 'Fr'], correct: 0 },
    { q: 'Hány csontja van egy felnőtt embernek?', a: ['206', '186', '226', '256'], correct: 0 },
    { q: 'Melyik a Naphoz legközelebbi csillag (a Napon kívül)?', a: ['Proxima Centauri', 'Szíriusz', 'Alfa Centauri A', 'Betelgeuze'], correct: 0 },
    { q: 'Melyik vércsoportot nevezik univerzális donornak?', a: ['0 negatív', 'AB pozitív', 'A pozitív', 'B negatív'], correct: 0 },
    { q: 'Mi az elektromos áramerősség SI-mértékegysége?', a: ['Amper', 'Volt', 'Ohm', 'Watt'], correct: 0 },
    { q: 'Melyik a legelterjedtebb elem a világegyetemben?', a: ['Hidrogén', 'Hélium', 'Oxigén', 'Szén'], correct: 0 },
    { q: 'Az agy melyik része felelős az egyensúlyért és a koordinációért?', a: ['Kisagy', 'Nagyagy', 'Nyúltvelő', 'Hipotalamusz'], correct: 0 },
    { q: 'Milyen energiája van egy mozgó tárgynak?', a: ['Mozgási energia', 'Helyzeti energia', 'Hőenergia', 'Kémiai energia'], correct: 0 },
    { q: 'Melyik tudós dolgozta ki az általános relativitáselméletet?', a: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Max Planck'], correct: 0 },
    { q: 'Mekkora a tiszta víz pH-értéke?', a: ['7 (semleges)', '0', '14', '5'], correct: 0 },
    { q: 'Mi a vörösvértestek fő feladata?', a: ['Oxigén szállítása', 'Fertőzések elleni védekezés', 'A vér alvadása', 'Hormonok termelése'], correct: 0 },
    { q: 'Melyik bolygó híres a Nagy Vörös Foltjáról?', a: ['Jupiter', 'Szaturnusz', 'Neptunusz', 'Mars'], correct: 0 },
    { q: 'Hogy nevezik azt az anyagot, amely felgyorsítja a kémiai reakciót anélkül, hogy elhasználódna?', a: ['Katalizátor', 'Oldószer', 'Reagens', 'Enzim-szubsztrát'], correct: 0 },
    { q: 'Hány fokon fagy meg a víz Fahrenheit-fokban?', a: ['32°F', '0°F', '100°F', '212°F'], correct: 0 },
    { q: 'Melyik vitamin termelődik a bőrben napfény hatására?', a: ['D-vitamin', 'C-vitamin', 'A-vitamin', 'B12-vitamin'], correct: 0 },
    { q: 'Hogy nevezik azt az állatot, amely növényt és húst is eszik?', a: ['Mindenevő', 'Növényevő', 'Húsevő', 'Törmelékevő'], correct: 0 },
    { q: 'Hogy hívják azt a galaxist, amelyben a Naprendszerünk található?', a: ['Tejútrendszer', 'Androméda', 'Triangulum', 'Örvény-galaxis'], correct: 0 },
    // --- Batch 4: Math, literature, art ---
    { q: 'Mennyi a Pi értéke két tizedesjegyre kerekítve?', a: ['3,14', '3,41', '3,12', '3,16'], correct: 0 },
    { q: 'Mennyi a 144 négyzetgyöke?', a: ['12', '14', '11', '13'], correct: 0 },
    { q: 'Hogy nevezzük azt a háromszöget, amelynek mindhárom oldala egyenlő?', a: ['Szabályos háromszög', 'Egyenlő szárú háromszög', 'Általános háromszög', 'Derékszögű háromszög'], correct: 0 },
    { q: 'Hány fokos egy derékszög?', a: ['90', '45', '180', '60'], correct: 0 },
    { q: 'Mennyi 200 15%-a?', a: ['30', '25', '40', '20'], correct: 0 },
    { q: 'Mi a következő szám a Fibonacci-sorozatban: 1, 1, 2, 3, 5, 8, ...?', a: ['13', '11', '15', '10'], correct: 0 },
    { q: 'Hány oldala van egy hatszögnek?', a: ['6', '5', '7', '8'], correct: 0 },
    { q: 'Mennyi 9 a négyzeten?', a: ['81', '72', '90', '18'], correct: 0 },
    { q: 'Hány fok van egy teljes körben?', a: ['360', '180', '270', '400'], correct: 0 },
    { q: 'Mennyi 100 osztva 4-gyel?', a: ['25', '20', '30', '40'], correct: 0 },
    { q: 'Ki írta a "Büszkeség és balítélet" című regényt?', a: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'], correct: 0 },
    { q: 'Ki írta az "1984" és az "Állatfarm" című regényeket?', a: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'H. G. Wells'], correct: 0 },
    { q: 'Ki írta "A nagy Gatsby" című regényt?', a: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'Mark Twain'], correct: 0 },
    { q: 'Ki írta a "Háború és béke" című regényt?', a: ['Lev Tolsztoj', 'Fjodor Dosztojevszkij', 'Anton Csehov', 'Ivan Turgenyev'], correct: 0 },
    { q: 'Melyik magyar költő írta a "Nemzeti dal"-t?', a: ['Petőfi Sándor', 'Ady Endre', 'József Attila', 'Vörösmarty Mihály'], correct: 0 },
    { q: 'Ki írta a "Don Quijote" című regényt?', a: ['Miguel de Cervantes', 'Lope de Vega', 'Federico García Lorca', 'Pablo Neruda'], correct: 0 },
    { q: 'Ki írta "A kis herceg" című könyvet?', a: ['Antoine de Saint-Exupéry', 'Jules Verne', 'Victor Hugo', 'Albert Camus'], correct: 0 },
    { q: 'Ki írta az "Isteni színjáték"-ot?', a: ['Dante Alighieri', 'Petrarca', 'Boccaccio', 'Machiavelli'], correct: 0 },
    { q: 'Melyik művészeti irányzathoz köthető Salvador Dalí?', a: ['Szürrealizmus', 'Kubizmus', 'Impresszionizmus', 'Expresszionizmus'], correct: 0 },
    { q: 'Ki festette a "Csillagos éj" című képet?', a: ['Vincent van Gogh', 'Claude Monet', 'Paul Cézanne', 'Edgar Degas'], correct: 0 },
    { q: 'Ki készítette a Dávid-szobrot?', a: ['Michelangelo', 'Donatello', 'Bernini', 'Rodin'], correct: 0 },
    { q: 'Melyik művész alapította meg Picassóval együtt a kubizmust?', a: ['Georges Braque', 'Henri Matisse', 'Paul Gauguin', 'Marc Chagall'], correct: 0 },
    { q: 'Ki festette "A sikoly" című képet?', a: ['Edvard Munch', 'Gustav Klimt', 'Egon Schiele', 'Vaszilij Kandinszkij'], correct: 0 },
    { q: 'Melyik országban található a Louvre múzeum?', a: ['Franciaország', 'Olaszország', 'Spanyolország', 'Egyesült Királyság'], correct: 0 },
    { q: 'Ki festette a "Guernica" című képet?', a: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Diego Rivera'], correct: 0 },
    // --- Batch 5: Music, movies & TV ---
    { q: 'Melyik zenekar adta ki az "Abbey Road" albumot?', a: ['The Beatles', 'The Rolling Stones', 'Pink Floyd', 'The Who'], correct: 0 },
    { q: 'Kit hívnak "a Pop Királyának"?', a: ['Michael Jackson', 'Elvis Presley', 'Prince', 'James Brown'], correct: 0 },
    { q: 'Melyik zeneszerző-csodagyerek írt 600-nál is több művet, mielőtt 35 évesen meghalt?', a: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Joseph Haydn', 'Antonio Salieri'], correct: 0 },
    { q: 'Melyik hangszernek van 88 billentyűje?', a: ['Zongora', 'Orgona', 'Csembaló', 'Harmonika'], correct: 0 },
    { q: 'Melyik ikonikus rockzenekar frontembere volt Freddie Mercury?', a: ['Queen', 'Led Zeppelin', 'The Rolling Stones', 'Deep Purple'], correct: 0 },
    { q: 'Melyik zenei stílus Jamaicából származik?', a: ['Reggae', 'Salsa', 'Szamba', 'Blues'], correct: 0 },
    { q: 'Melyik popsztár adta ki a "Thriller" című albumot?', a: ['Michael Jackson', 'Prince', 'George Michael', 'Lionel Richie'], correct: 0 },
    { q: 'Melyik svéd popegyüttes adta elő a "Dancing Queen"-t?', a: ['ABBA', 'Roxette', 'Ace of Base', 'A-ha'], correct: 0 },
    { q: 'Melyik hangszeréről híres Yo-Yo Ma?', a: ['Cselló', 'Hegedű', 'Brácsa', 'Nagybőgő'], correct: 0 },
    { q: 'Hány húrja van egy szabványos hegedűnek?', a: ['4', '5', '6', '3'], correct: 0 },
    { q: 'Kit hívnak "a Pop Királynőjének"?', a: ['Madonna', 'Cher', 'Whitney Houston', 'Mariah Carey'], correct: 0 },
    { q: 'Melyik zenei streamingszolgáltatást indították Svédországban 2008-ban?', a: ['Spotify', 'Deezer', 'Tidal', 'Pandora'], correct: 0 },
    { q: 'Ki rendezte a "Cápa" és az "E.T." című filmeket?', a: ['Steven Spielberg', 'George Lucas', 'James Cameron', 'Martin Scorsese'], correct: 0 },
    { q: 'Melyik filmben szerepel Jack Sparrow karaktere?', a: ['A Karib-tenger kalózai', 'Pán Péter', 'Kincses sziget', 'Hook - a Grimasz kapitány'], correct: 0 },
    { q: 'Melyik varázslóiskolába jár Harry Potter?', a: ['Roxfort', 'Beauxbatons', 'Durmstrang', 'Ilvermorny'], correct: 0 },
    { q: 'Melyik animációs filmben keres egy bohóchal az elveszett fiát?', a: ['Némó nyomában', 'Cápamese', 'A kis hableány', 'Vaiana'], correct: 0 },
    { q: 'Ki alakította Vasembert a Marvel-univerzumban?', a: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'], correct: 0 },
    { q: 'Melyik sorozatban szerepel a Vastrón?', a: ['Trónok harca', 'A Vaják', 'Vikingek', 'A sárkány háza'], correct: 0 },
    { q: 'Melyik filmtrilógia játszódik Középföldén, hobbitokkal a főszerepben?', a: ['A Gyűrűk Ura', 'Narnia', 'Harry Potter', 'Prydain krónikái'], correct: 0 },
    { q: 'Melyik színész alakította a Jokert a 2008-as "A sötét lovag" című filmben?', a: ['Heath Ledger', 'Jack Nicholson', 'Joaquin Phoenix', 'Jared Leto'], correct: 0 },
    { q: 'Melyik stúdió készítette a "Toy Story"-t, az első teljesen számítógépes animációs filmet?', a: ['Pixar', 'DreamWorks', 'Illumination', 'Blue Sky Studios'], correct: 0 },
    { q: 'Melyik szituációs komédia játszódik a Central Perk nevű kávézóban?', a: ['Jóbarátok', 'Seinfeld', 'Így jártam anyátokkal', 'Agymenők'], correct: 0 },
    { q: 'Melyik film nyerte el az első Oscar-díjat a legjobb film kategóriában?', a: ['Szárnyak', 'Napkelte', 'A dzsesszénekes', 'Metropolis'], correct: 0 },
    { q: 'Melyik rendező neve fonódik össze a "Star Wars" franchise-zal?', a: ['George Lucas', 'Steven Spielberg', 'James Cameron', 'Ridley Scott'], correct: 0 },
    { q: 'Melyik streamingszolgáltató készítette a "Stranger Things" című sorozatot?', a: ['Netflix', 'Hulu', 'Amazon Prime', 'Disney+'], correct: 0 },
    // --- Batch 6: Sports & technology ---
    { q: 'Hány játékos van egyszerre a pályán egy kosárlabdacsapatból?', a: ['5', '6', '7', '4'], correct: 0 },
    { q: 'Melyik sportágban hajtanak végre "zsákolást"?', a: ['Kosárlabda', 'Röplabda', 'Kézilabda', 'Tenisz'], correct: 0 },
    { q: 'Milyen gyakran rendezik a nyári olimpiai játékokat?', a: ['4 évente', '2 évente', '3 évente', '5 évente'], correct: 0 },
    { q: 'Melyik ország nyerte a legtöbb FIFA-világbajnokságot?', a: ['Brazília', 'Németország', 'Olaszország', 'Argentína'], correct: 0 },
    { q: 'Teniszben hogyan hívják a nulla pontszámot?', a: ['Love', 'Nil', 'Zéró', 'Deuce'], correct: 0 },
    { q: 'Hány játékos van egyszerre a pályán egy röplabdacsapatból?', a: ['6', '5', '7', '4'], correct: 0 },
    { q: 'Melyik sportágban használnak tollaslabdát?', a: ['Tollaslabda', 'Tenisz', 'Squash', 'Asztalitenisz'], correct: 0 },
    { q: 'Melyik ország adott otthont a 2016-os nyári olimpiának?', a: ['Brazília', 'Kína', 'Egyesült Királyság', 'Japán'], correct: 0 },
    { q: 'Milyen hosszú egy maratoni futás?', a: ['42,195 km', '40 km', '50 km', '35 km'], correct: 0 },
    { q: 'Az ökölvívásban hány percig tart egy szabványos profi menet?', a: ['3 perc', '2 perc', '5 perc', '4 perc'], correct: 0 },
    { q: 'Melyik ország találta fel a krikett sportágat?', a: ['Anglia', 'India', 'Ausztrália', 'Dél-Afrika'], correct: 0 },
    { q: 'Hány karika van az olimpiai zászlón?', a: ['5', '6', '4', '7'], correct: 0 },
    { q: 'Melyik ország nyerte az első FIFA-világbajnokságot 1930-ban?', a: ['Uruguay', 'Brazília', 'Argentína', 'Olaszország'], correct: 0 },
    { q: 'Melyik cég készítette az iPhone-t?', a: ['Apple', 'Samsung', 'Google', 'Nokia'], correct: 0 },
    { q: 'Mit jelent a "WWW" rövidítés?', a: ['World Wide Web', 'World Wide Wire', 'Wide World Web', 'World Web Wide'], correct: 0 },
    { q: 'Melyik cég fejlesztette az Android operációs rendszert?', a: ['Google', 'Apple', 'Microsoft', 'Samsung'], correct: 0 },
    { q: 'Ki alapította az Apple-t Steve Jobsszal együtt?', a: ['Steve Wozniak', 'Bill Gates', 'Tim Cook', 'Jeff Bezos'], correct: 0 },
    { q: 'Melyik közösségi platform régi logója volt egy madár?', a: ['Twitter (X)', 'Facebook', 'Instagram', 'LinkedIn'], correct: 0 },
    { q: 'Melyik évben jelent meg az első iPhone?', a: ['2007', '2005', '2009', '2010'], correct: 0 },
    { q: 'Mit jelent a "CPU" rövidítés?', a: ['Központi feldolgozóegység', 'Számítógépes személyi egység', 'Központi programegység', 'Alapfeldolgozó egység'], correct: 0 },
    { q: 'Melyik cég fejlesztette a Windows operációs rendszert?', a: ['Microsoft', 'Apple', 'IBM', 'Google'], correct: 0 },
    { q: 'Hogy hívják Elon Musk elektromosautó-gyártó cégét?', a: ['Tesla', 'SpaceX', 'Neuralink', 'Hyperloop'], correct: 0 },
    { q: 'Melyik programozási nyelvet használják leggyakrabban a weboldalak interaktivitásához?', a: ['JavaScript', 'Python', 'C++', 'Java'], correct: 0 },
    { q: 'Mit jelent a "HTML" rövidítés?', a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'HyperText Modern Link'], correct: 0 },
    { q: 'Melyik a legelterjedtebb keresőmotor a világon?', a: ['Google', 'Bing', 'Yahoo', 'DuckDuckGo'], correct: 0 },
    // --- Batch 7: Mythology & nature ---
    { q: 'Ki az istenek királya a görög mitológiában?', a: ['Zeusz', 'Poszeidón', 'Hádész', 'Apollón'], correct: 0 },
    { q: 'Ki az északi mitológia mennydörgés istene?', a: ['Thor', 'Odin', 'Loki', 'Baldur'], correct: 0 },
    { q: 'Melyik görög hőst ismerjük a tizenkét próbatételéről?', a: ['Héraklész', 'Akhilleusz', 'Perszeusz', 'Théseusz'], correct: 0 },
    { q: 'Ki az egyiptomi túlvilág istene?', a: ['Ozirisz', 'Ré', 'Anubisz', 'Hórusz'], correct: 0 },
    { q: 'A görög mitológiában ki a bölcsesség istennője?', a: ['Athéné', 'Aphrodité', 'Héra', 'Artemisz'], correct: 0 },
    { q: 'Melyik görög mitológiai lénynek van oroszlántestje és emberi feje?', a: ['Szfinx', 'Minótaurosz', 'Kiméra', 'Kentaur'], correct: 0 },
    { q: 'Ki a római hadisten?', a: ['Mars', 'Jupiter', 'Neptunusz', 'Vulcanus'], correct: 0 },
    { q: 'Melyik görög hős volt sebezhető kizárólag a sarkán?', a: ['Akhilleusz', 'Hektór', 'Aiász', 'Odüsszeusz'], correct: 0 },
    { q: 'Az északi mitológiában hogy hívják a világfát?', a: ['Yggdrasil', 'Bifröst', 'Ászgárd', 'Valhalla'], correct: 0 },
    { q: 'Ki a görög tenger istene?', a: ['Poszeidón', 'Zeusz', 'Hádész', 'Hermész'], correct: 0 },
    { q: 'Melyik a legnagyobb cápafaj?', a: ['Cetcápa', 'Fehér cápa', 'Tigriscápa', 'Kalapácsfejű cápa'], correct: 0 },
    { q: 'Melyik állat híres arról, hogy a környezetéhez igazítva változtatja a színét?', a: ['Kaméleon', 'Gekkó', 'Leguán', 'Szalamandra'], correct: 0 },
    { q: 'Melyik madár híres arról, hogy utánozza az emberi beszédet?', a: ['Papagáj', 'Varjú', 'Bagoly', 'Veréb'], correct: 0 },
    { q: 'Hogy hívják a kenguru kölykét?', a: ['Joey', 'Bocs', 'Csikó', 'Gida'], correct: 0 },
    { q: 'Melyik a leggyorsabb madár a világon zuhanórepülésben?', a: ['Vándorsólyom', 'Szirti sas', 'Sarlósfecske', 'Albatrosz'], correct: 0 },
    { q: 'Melyik emlős tojással szaporodik, nem eleven fiatalt szül?', a: ['Kacsacsőrű emlős', 'Kenguru', 'Koala', 'Wombat'], correct: 0 },
    { q: 'Hány szíve van egy polipnak?', a: ['3', '1', '2', '4'], correct: 0 },
    { q: 'Melyik rovar híres a jól szervezett kolóniáiról és a mézkészítésről?', a: ['Méhek', 'Hangyák', 'Termeszek', 'Darazsak'], correct: 0 },
    { q: 'Melyik a világ legmagasabb állata?', a: ['Zsiráf', 'Elefánt', 'Teve', 'Strucc'], correct: 0 },
    { q: 'Melyik nagymacska híres a sörényéről?', a: ['Oroszlán', 'Tigris', 'Leopárd', 'Jaguár'], correct: 0 },
    { q: 'Melyik a legnagyobb szárazföldi állat a Földön?', a: ['Afrikai elefánt', 'Fehér orrszarvú', 'Zsiráf', 'Víziló'], correct: 0 },
    { q: 'Melyik mérgeskígyó-fajt hívják a kígyók "királyának", mert más kígyókat eszik?', a: ['Királykobra', 'Fekete mamba', 'Csörgőkígyó', 'Anakonda'], correct: 0 },
    { q: 'Melyik a világ legkisebb emlőse?', a: ['Dongólégydenevér', 'Cickány', 'Egér', 'Sün'], correct: 0 },
    { q: 'Hogyan nevezik az oroszlánok csoportját?', a: ['Falka', 'Csorda', 'Nyáj', 'Raj'], correct: 0 },
    { q: 'Melyik állat alszik akár napi 20 órát is?', a: ['Koala', 'Lajhár', 'Panda', 'Víziló'], correct: 0 },
    // --- Batch 8: Food, culture & inventions ---
    { q: 'Melyik ország híres a Nutella nevű mogyorókrém feltalálásáról?', a: ['Olaszország', 'Svájc', 'Belgium', 'Franciaország'], correct: 0 },
    { q: 'Melyik fűszert nyerik a sáfránykrókusz virágából, és ez a legdrágább fűszer súlyra vetítve?', a: ['Sáfrány', 'Vanília', 'Kardamom', 'Fahéj'], correct: 0 },
    { q: 'Melyik ország a taco szülőhazája?', a: ['Mexikó', 'Spanyolország', 'Peru', 'Brazília'], correct: 0 },
    { q: 'Melyik italt szőlő erjesztésével készítik?', a: ['Bor', 'Sör', 'Almabor', 'Mézsör'], correct: 0 },
    { q: 'Melyik gyümölcsöt hívják Délkelet-Ázsiában "a gyümölcsök királyának" az erős illata miatt?', a: ['Durián', 'Kenyérfagyümölcs', 'Mangosztán', 'Rambután'], correct: 0 },
    { q: 'Melyik ország termeli a legtöbb kávét a világon?', a: ['Brazília', 'Kolumbia', 'Vietnám', 'Etiópia'], correct: 0 },
    { q: 'Melyik sajtot használják hagyományosan a klasszikus Margherita pizzán?', a: ['Mozzarella', 'Cheddar', 'Parmezán', 'Gouda'], correct: 0 },
    { q: 'Melyik ország a curry szülőhazája?', a: ['India', 'Thaiföld', 'Kína', 'Japán'], correct: 0 },
    { q: 'Melyik ország a tequila szülőhazája?', a: ['Mexikó', 'Spanyolország', 'Kuba', 'Peru'], correct: 0 },
    { q: 'Melyik országhoz köthető a szendvics feltalálása, amelyet egy angol grófról neveztek el?', a: ['Anglia', 'Franciaország', 'Hollandia', 'Skócia'], correct: 0 },
    { q: 'Melyik fűszer adja a curry sárga színét?', a: ['Kurkuma', 'Sáfrány', 'Pirospaprika', 'Kömény'], correct: 0 },
    { q: 'Melyik ország a világ legnagyobb bortermelője?', a: ['Olaszország', 'Franciaország', 'Spanyolország', 'Egyesült Államok'], correct: 0 },
    { q: 'Mi a fő alapanyaga a hagyományos japán miso levesnek?', a: ['Erjesztett szójabab-paszta', 'Rizs', 'Hínár', 'Tofu'], correct: 0 },
    { q: 'Melyik ország híres a paella nevű ételről?', a: ['Spanyolország', 'Portugália', 'Olaszország', 'Görögország'], correct: 0 },
    { q: 'Melyik diófélét használják a hagyományos marcipán készítéséhez?', a: ['Mandula', 'Dió', 'Mogyoró', 'Pisztácia'], correct: 0 },
    { q: 'Ki találta fel a telefont?', a: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'], correct: 0 },
    { q: 'Kinek tulajdonítják a kereskedelmileg életképes izzólámpa feltalálását?', a: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Benjamin Franklin'], correct: 0 },
    { q: 'Melyik ország találta fel a papírt?', a: ['Kína', 'Egyiptom', 'India', 'Görögország'], correct: 0 },
    { q: 'Kinek tulajdonítják a világháló (World Wide Web) feltalálását?', a: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Vint Cerf'], correct: 0 },
    { q: 'Melyik felfedezőnek tulajdonítják az Afrika megkerülésével Indiába vezető tengeri útvonal felfedezését?', a: ['Vasco da Gama', 'Kolumbusz Kristóf', 'Ferdinand Magellán', 'Tengerész Henrik'], correct: 0 },
    { q: 'Melyik fizetőeszközt használják Japánban?', a: ['Jen', 'Won', 'Jüan', 'Ringgit'], correct: 0 },
    { q: 'Melyik fizetőeszközt használják az Egyesült Királyságban?', a: ['Font sterling', 'Euró', 'Dollár', 'Frank'], correct: 0 },
    { q: 'Mi Brazília hivatalos nyelve?', a: ['Portugál', 'Spanyol', 'Francia', 'Olasz'], correct: 0 },
    { q: 'Melyik ország ajándékozta a Szabadság-szobrot az Egyesült Államoknak?', a: ['Franciaország', 'Egyesült Királyság', 'Spanyolország', 'Hollandia'], correct: 0 },
    { q: 'Hogy hívják az Európai Unió tagállamai által használt közös fizetőeszközt?', a: ['Euró', 'Frank', 'Márka', 'Líra'], correct: 0 },
    // --- Batch 9: Minecraft/gaming & general knowledge ---
    { q: 'Melyik Minecraft-lény robban fel, ha túl közel kerül a játékoshoz?', a: ['Creeper', 'Zombi', 'Csontváz', 'Pók'], correct: 0 },
    { q: 'Milyen anyagra van szükség egy Pokol-kapu megépítéséhez Minecraftban?', a: ['Obszidián', 'Terméskő', 'Pokolkő', 'Feketekő'], correct: 0 },
    { q: 'Milyen anyaggal lehet a legerősebb szintre fejleszteni a gyémánt felszerelést Minecraftban?', a: ['Netherite', 'Smaragd', 'Vöröskő', 'Lápisz lazuli'], correct: 0 },
    { q: 'Alapértelmezetten hány szív jelzi egy játékos maximális életerejét Minecraftban?', a: ['10 szív', '8 szív', '12 szív', '20 szív'], correct: 0 },
    { q: 'Melyik Minecraft-lény képes teleportálni, és feldühödik, ha az arcába nézel?', a: ['Enderman', 'Creeper', 'Blaze', 'Ghast'], correct: 0 },
    { q: 'Mire van általában szükség a legtöbb állat szaporításához Minecraftban?', a: ['A kedvenc ételükre', 'Egy nyeregre', 'Egy pórázra', 'Egy ágyra'], correct: 0 },
    { q: 'Melyik Minecraft-dimenzió otthona az Enderdragonnak?', a: ['Az End', 'A Pokol (Nether)', 'A Felszín (Overworld)', 'Az Aether'], correct: 0 },
    { q: 'Mit kapunk, ha nyers vasat olvasztunk kemencében Minecraftban?', a: ['Vasrögöt', 'Vasércet', 'Vastömböt', 'Vas nuggetet'], correct: 0 },
    { q: 'Milyen szerszám szükséges minimum az obszidián kibányászásához Minecraftban?', a: ['Gyémánt csákány', 'Vas csákány', 'Kő csákány', 'Fa csákány'], correct: 0 },
    { q: 'Melyik ritka tárgy hullik ki a Witherből, és szükséges egy jelzőfény elkészítéséhez?', a: ['Csillag a Pokolból', 'Enderpearl', 'Blaze-pálca', 'Ghast-könny'], correct: 0 },
    { q: 'Melyik Minecraft-tárgy gyógyítja meg a zombifalusit, ha gyengeség-bájitallal kombinálják?', a: ['Aranyalma', 'Aranyrépa', 'Bűvölt alma', 'Alma'], correct: 0 },
    { q: 'Melyik Minecraft-állat híres arról, hogy megfejhető?', a: ['Tehén', 'Birka', 'Malac', 'Csirke'], correct: 0 },
    { q: 'Mivel szelídíthető meg egy farkas Minecraftban?', a: ['Csonttal', 'Búzával', 'Hallal', 'Maggal'], correct: 0 },
    { q: 'Melyik Minecraft-biomra jellemzőek a kaktuszok és a homok?', a: ['Sivatag', 'Szavanna', 'Rosszföld', 'Dzsungel'], correct: 0 },
    { q: 'Milyen blokkokból kell megépíteni a jelzőfény alapzatát Minecraftban?', a: ['Vas-, arany-, gyémánt- vagy smaragdtömbökből', 'Terméskőből', 'Obszidiánból', 'Pokolkőből'], correct: 0 },
    { q: 'Melyik cég fejlesztette és adta ki eredetileg a Minecraftot?', a: ['Mojang', 'Epic Games', 'Valve', 'Ubisoft'], correct: 0 },
    { q: 'Melyik évben jelent meg először nyilvánosan a Minecraft alfa verziója?', a: ['2009', '2007', '2011', '2013'], correct: 0 },
    { q: 'Melyik videojátékban ment egy vízvezeték-szerelő Peach hercegnő megmentésére Bowsertől?', a: ['Super Mario', 'The Legend of Zelda', 'Sonic the Hedgehog', 'Donkey Kong'], correct: 0 },
    { q: 'Hogy hívják a Naprendszer legnagyobb bolygójának legnagyobb holdját?', a: ['Ganymedes', 'Titán', 'Kallisto', 'Io'], correct: 0 },
    { q: 'Melyik vitamin hiánya okozza a skorbutot?', a: ['C-vitamin', 'D-vitamin', 'B12-vitamin', 'A-vitamin'], correct: 0 },
    { q: 'Hogy hívják a Föld legkülső rétegét, amelyen élünk?', a: ['Kéreg', 'Köpeny', 'Külső mag', 'Belső mag'], correct: 0 },
    { q: 'Melyik bolygó van legközelebb a Naphoz?', a: ['Merkúr', 'Vénusz', 'Föld', 'Mars'], correct: 0 },
    { q: 'Hogy nevezzük az 5 oldalú alakzatot?', a: ['Ötszög', 'Hatszög', 'Hétszög', 'Nyolcszög'], correct: 0 },
    { q: 'Melyik nyelvnek van a legtöbb anyanyelvi beszélője a világon?', a: ['Mandarin kínai', 'Angol', 'Spanyol', 'Hindi'], correct: 0 },
    { q: 'Melyik országban található az ókori Petra városa?', a: ['Jordánia', 'Egyiptom', 'Szíria', 'Izrael'], correct: 0 },
    // --- Batch 10: Mixed general knowledge ---
    { q: 'Melyik bolygót nevezik gyakran a Föld "ikertestvérének" a hasonló mérete miatt?', a: ['Vénusz', 'Mars', 'Merkúr', 'Neptunusz'], correct: 0 },
    { q: 'Melyik a legnagyobb csont az emberi testben?', a: ['Combcsont', 'Sípcsont', 'Felkarcsont', 'Szárkapocscsont'], correct: 0 },
    { q: 'Melyik országból ered az ókori olimpiai játékok hagyománya?', a: ['Görögország', 'Olaszország', 'Egyiptom', 'Törökország'], correct: 0 },
    { q: 'Melyik híres tudós dolgozta ki a természetes szelekció útján történő evolúció elméletét?', a: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Alfred Russel Wallace'], correct: 0 },
    { q: 'Mi Spanyolország fővárosa?', a: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'], correct: 0 },
    { q: 'Melyik híres fizikus dolgozta ki a mozgás három törvényét?', a: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'], correct: 0 },
    { q: 'Melyik országból ered a jóga?', a: ['India', 'Kína', 'Nepál', 'Tibet'], correct: 0 },
    { q: 'Mi Portugália fővárosa?', a: ['Lisszabon', 'Porto', 'Faro', 'Braga'], correct: 0 },
    { q: 'Melyik óceáni áramlat felelős Nyugat-Európa enyhébb éghajlatáért?', a: ['Golf-áramlat', 'Humboldt-áramlat', 'Kuroshio-áramlat', 'Labrador-áramlat'], correct: 0 },
    { q: 'Hogy nevezik a pókoktól való félelmet?', a: ['Arachnofóbia', 'Klausztrofóbia', 'Akrofóbia', 'Agorafóbia'], correct: 0 },
    { q: 'Melyik országból ered a karate harcművészet?', a: ['Japán', 'Kína', 'Korea', 'Thaiföld'], correct: 0 },
    { q: 'Mi Lengyelország fővárosa?', a: ['Varsó', 'Krakkó', 'Gdańsk', 'Poznań'], correct: 0 },
    { q: 'Melyik gázzal töltik meg általában a lebegő party lufikat?', a: ['Hélium', 'Hidrogén', 'Oxigén', 'Nitrogén'], correct: 0 },
    { q: 'Melyik országból ered az asztalitenisz sportág?', a: ['Anglia', 'Kína', 'Japán', 'Németország'], correct: 0 },
    { q: 'Mi Ausztria fővárosa?', a: ['Bécs', 'Salzburg', 'Graz', 'Innsbruck'], correct: 0 },
    { q: 'Melyik híres fizikushoz köthető az E=mc² képlet?', a: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Stephen Hawking'], correct: 0 },
    { q: 'Hogy nevezzük azt a szót, amely visszafelé olvasva is ugyanaz?', a: ['Palindrom', 'Anagramma', 'Betűszó', 'Homofon'], correct: 0 },
    { q: 'Mi Svájc fővárosa?', a: ['Bern', 'Zürich', 'Genf', 'Bázel'], correct: 0 },
    { q: 'Melyik tengeri élőlénynek van az állatvilág legnagyobb szeme?', a: ['Óriáskalmár', 'Kék bálna', 'Fehér cápa', 'Polip'], correct: 0 },
    { q: 'Hogy hívják az égitestekkel foglalkozó tudományágat?', a: ['Csillagászat', 'Asztrológia', 'Geológia', 'Meteorológia'], correct: 0 },
    { q: 'Melyik országból ered a sakk társasjáték?', a: ['India', 'Kína', 'Perzsia', 'Egyiptom'], correct: 0 },
    { q: 'Mi Görögország fővárosa?', a: ['Athén', 'Thesszaloniki', 'Patra', 'Iraklio'], correct: 0 },
    { q: 'Melyik hangszercsaládba tartozik a hegedű?', a: ['Vonós hangszerek', 'Ütőhangszerek', 'Fúvós hangszerek', 'Rézfúvós hangszerek'], correct: 0 },
    { q: 'Hogy nevezik azt a képzeletbeli vonalat, amely a Földet északi és déli féltekére osztja?', a: ['Egyenlítő', 'Greenwichi kezdő délkör', 'Ráktérítő', 'Északi-sarkkör'], correct: 0 },
    { q: 'Melyik híres feltaláló birtokolt több mint 1000 szabadalmat, köztük a fonográfét is?', a: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Henry Ford'], correct: 0 },
  ],
  en: [
    { q: "What is Earth's largest ocean?", a: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], correct: 0 },
    { q: 'How many continents are there?', a: ['7', '5', '6', '8'], correct: 0 },
    { q: 'Who painted the Mona Lisa?', a: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Van Gogh'], correct: 0 },
    { q: 'What is the capital of Hungary?', a: ['Budapest', 'Debrecen', 'Szeged', 'Pécs'], correct: 0 },
    { q: 'How many bits are in a byte?', a: ['8', '4', '16', '10'], correct: 0 },
    { q: 'Which is the largest planet in the Solar System?', a: ['Jupiter', 'Saturn', 'Earth', 'Uranus'], correct: 0 },
    { q: 'What is the chemical symbol for gold?', a: ['Au', 'Ag', 'Fe', 'Gd'], correct: 0 },
    { q: 'In which year did World War II end?', a: ['1945', '1939', '1944', '1950'], correct: 0 },
    { q: 'How many legs does a spider have?', a: ['8', '6', '10', '4'], correct: 0 },
    { q: 'What is the fastest land animal?', a: ['Cheetah', 'Lion', 'Horse', 'Ostrich'], correct: 0 },
    { q: 'Which block can explode in Minecraft?', a: ['TNT', 'Stone', 'Glass', 'Sand'], correct: 0 },
    { q: 'In which year was YouTube launched?', a: ['2005', '2000', '2010', '1998'], correct: 0 },
    { q: 'How many hours are in a day?', a: ['24', '12', '48', '20'], correct: 0 },
    { q: 'What is the chemical formula for water?', a: ['H2O', 'CO2', 'O2', 'NaCl'], correct: 0 },
    { q: 'Which country has the largest population?', a: ['India', 'China', 'USA', 'Indonesia'], correct: 0 },
    { q: 'How many colors are traditionally in a rainbow?', a: ['7', '5', '6', '8'], correct: 0 },
    { q: 'Who wrote the Harry Potter books?', a: ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Suzanne Collins'], correct: 0 },
    { q: 'What is the largest mammal on Earth?', a: ['Blue whale', 'Elephant', 'Giraffe', 'Shark'], correct: 0 },
    { q: 'How many faces does a cube have?', a: ['6', '4', '8', '12'], correct: 0 },
    { q: "Which gas makes up most of Earth's atmosphere?", a: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen'], correct: 0 },
    { q: 'In which year was Discord founded?', a: ['2015', '2010', '2018', '2012'], correct: 0 },
    { q: 'Roughly how fast is the speed of light?', a: ['300,000 km/s', '150,000 km/s', '1,000 km/s', '3,000 km/s'], correct: 0 },
    { q: 'How many strings does a standard guitar have?', a: ['6', '4', '8', '12'], correct: 0 },
    { q: 'What is the tallest mountain on Earth?', a: ['Mount Everest', 'K2', 'Kilimanjaro', 'Matterhorn'], correct: 0 },
    { q: 'What is the smallest planet in the Solar System?', a: ['Mercury', 'Mars', 'Venus', 'Pluto'], correct: 0 },
    { q: 'Who wrote Romeo and Juliet?', a: ['Shakespeare', 'Dickens', 'Hemingway', 'Tolstoy'], correct: 0 },
    { q: 'In which year did the Titanic sink?', a: ['1912', '1905', '1920', '1898'], correct: 0 },
    { q: 'How many cards are in a standard deck?', a: ['52', '48', '54', '40'], correct: 0 },
    { q: 'What is the capital of Australia?', a: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], correct: 0 },
    { q: 'Which element has the symbol "O"?', a: ['Oxygen', 'Osmium', 'Gold', 'Tin'], correct: 0 },
    { q: 'Which planet is known as the "Red Planet"?', a: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correct: 0 },
    { q: 'Who was the first person on the Moon?', a: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'], correct: 0 },
    { q: "Sushi originates from which country's cuisine?", a: ['Japan', 'China', 'Korea', 'Thailand'], correct: 0 },
    { q: 'On which continent is the Sahara desert?', a: ['Africa', 'Asia', 'Australia', 'South America'], correct: 0 },
    { q: 'In which year was Facebook founded?', a: ['2004', '2000', '2008', '2010'], correct: 0 },
    { q: 'What is 7 × 8?', a: ['56', '54', '64', '48'], correct: 0 },
    { q: 'Which planet has the most famous rings?', a: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'], correct: 0 },
    { q: 'Who composed the 9th Symphony ("Ode to Joy")?', a: ['Beethoven', 'Mozart', 'Bach', 'Chopin'], correct: 0 },
    { q: 'What is the capital of Japan?', a: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama'], correct: 0 },
    { q: "What is the world's longest river?", a: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'], correct: 0 },
    { q: 'What is the largest organ in the human body?', a: ['Skin', 'Liver', 'Lungs', 'Heart'], correct: 0 },
    { q: 'How many teeth does an adult human typically have?', a: ['32', '28', '36', '24'], correct: 0 },
    { q: 'In which year did the Chernobyl disaster happen?', a: ['1986', '1979', '1990', '1975'], correct: 0 },
    { q: 'Who founded Microsoft?', a: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk'], correct: 0 },
    { q: 'Which ocean is the smallest?', a: ['Arctic Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean'], correct: 0 },
    { q: 'How many squares are on a chessboard?', a: ['64', '32', '100', '81'], correct: 0 },
    { q: 'What is the longest-living land animal?', a: ['Giant tortoise', 'Elephant', 'Human', 'Parrot'], correct: 0 },
    { q: 'In which language does "ciao" mean hello/goodbye?', a: ['Italian', 'Spanish', 'French', 'Portuguese'], correct: 0 },
    { q: 'Which country gave the world pizza?', a: ['Italy', 'Greece', 'France', 'Spain'], correct: 0 },
    { q: 'Who wrote the Iliad?', a: ['Homer', 'Virgil', 'Plato', 'Sophocles'], correct: 0 },
    { q: 'In which year did the Soviet Union dissolve?', a: ['1991', '1989', '1985', '1995'], correct: 0 },
    { q: 'What is the smallest prime number?', a: ['2', '1', '3', '0'], correct: 0 },
    { q: 'How many chromosomes do humans have?', a: ['46', '44', '48', '23'], correct: 0 },
    { q: 'How many players are on a football (soccer) team on the pitch, including the goalkeeper?', a: ['11', '10', '9', '12'], correct: 0 },
    // --- Extra questions ---
    // --- Batch 1: Geography ---
    { q: 'Which is the longest mountain range in the world?', a: ['The Andes', 'The Rocky Mountains', 'The Himalayas', 'The Alps'], correct: 0 },
    { q: 'What is the smallest country in the world by area?', a: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'], correct: 0 },
    { q: 'Which is the longest river in South America?', a: ['The Amazon', 'The Orinoco', 'The Paraná', 'The São Francisco'], correct: 0 },
    { q: 'What is the capital of Canada?', a: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], correct: 0 },
    { q: 'What is the capital of Egypt?', a: ['Cairo', 'Alexandria', 'Giza', 'Luxor'], correct: 0 },
    { q: 'Which is the largest island in the world?', a: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'], correct: 0 },
    { q: 'In which country is Mount Kilimanjaro located?', a: ['Tanzania', 'Kenya', 'Uganda', 'Ethiopia'], correct: 0 },
    { q: 'What is the capital of Brazil?', a: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], correct: 0 },
    { q: 'Which strait separates Europe and Africa?', a: ['The Strait of Gibraltar', 'The Bosphorus', 'The Strait of Dover', 'The Strait of Messina'], correct: 0 },
    { q: 'Which is the smallest continent by area?', a: ['Australia', 'Europe', 'Antarctica', 'South America'], correct: 0 },
    { q: 'Which country has the most time zones?', a: ['France', 'Russia', 'The USA', 'China'], correct: 0 },
    { q: 'What is the capital of South Korea?', a: ['Seoul', 'Busan', 'Incheon', 'Daegu'], correct: 0 },
    { q: 'Which is the largest cold desert in the world?', a: ['The Antarctic Desert', 'The Gobi Desert', 'The Arabian Desert', 'The Kalahari Desert'], correct: 0 },
    { q: 'What is the deepest point in the ocean called?', a: ['The Mariana Trench', 'The Puerto Rico Trench', 'The Java Trench', 'The Tonga Trench'], correct: 0 },
    { q: 'Which country straddles Europe and Asia along the Bosphorus?', a: ['Turkey', 'Russia', 'Georgia', 'Kazakhstan'], correct: 0 },
    { q: 'What is the capital of Argentina?', a: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'], correct: 0 },
    { q: 'Which country has the most natural lakes?', a: ['Canada', 'Russia', 'Finland', 'The USA'], correct: 0 },
    { q: 'What is the longest wall ever built by humans called?', a: ['The Great Wall of China', "Hadrian's Wall", 'The Berlin Wall', 'The Western Wall'], correct: 0 },
    { q: 'Which European country is known as the "Land of a Thousand Lakes"?', a: ['Finland', 'Sweden', 'Norway', 'Estonia'], correct: 0 },
    { q: 'What is the capital of Thailand?', a: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'], correct: 0 },
    { q: 'Which is the driest place on Earth?', a: ['The Atacama Desert', 'The Sahara', 'Death Valley', 'The Gobi Desert'], correct: 0 },
    { q: 'What is the capital of Kenya?', a: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'], correct: 0 },
    { q: "Which is the saltiest body of water in the world?", a: ['The Dead Sea', 'The Red Sea', 'The Black Sea', 'The Caspian Sea'], correct: 0 },
    { q: 'What is the capital of the Netherlands?', a: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'], correct: 0 },
    { q: 'Which continent has the most countries?', a: ['Africa', 'Asia', 'Europe', 'South America'], correct: 0 },
    // --- Batch 2: World history ---
    { q: 'In which year did World War I begin?', a: ['1914', '1912', '1916', '1918'], correct: 0 },
    { q: 'Who was the first Roman emperor?', a: ['Augustus', 'Julius Caesar', 'Nero', 'Caligula'], correct: 0 },
    { q: 'In which year did the French Revolution begin?', a: ['1789', '1776', '1799', '1804'], correct: 0 },
    { q: 'Which empire built the Colosseum?', a: ['The Roman Empire', 'The Greek Empire', 'The Ottoman Empire', 'The Byzantine Empire'], correct: 0 },
    { q: 'In which year did the Berlin Wall fall?', a: ['1989', '1991', '1987', '1985'], correct: 0 },
    { q: 'Which Egyptian queen is best known for her relationships with Caesar and Mark Antony?', a: ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'Ankhesenamun'], correct: 0 },
    { q: 'Which war was fought between the northern and southern regions of the United States?', a: ['The American Civil War', 'The American Revolutionary War', 'The War of 1812', 'The Spanish-American War'], correct: 0 },
    { q: 'In which year did Christopher Columbus reach the Americas?', a: ['1492', '1498', '1500', '1488'], correct: 0 },
    { q: 'Which civilization built Machu Picchu?', a: ['The Inca', 'The Maya', 'The Aztec', 'The Olmec'], correct: 0 },
    { q: 'Who led Germany during World War II?', a: ['Adolf Hitler', 'Heinrich Himmler', 'Joseph Goebbels', 'Hermann Göring'], correct: 0 },
    { q: 'In which year did India gain independence from Britain?', a: ['1947', '1945', '1950', '1942'], correct: 0 },
    { q: 'Which ancient wonder stood in Alexandria, Egypt?', a: ['The Lighthouse of Alexandria', 'The Hanging Gardens', 'The Colossus of Rhodes', 'The Temple of Artemis'], correct: 0 },
    { q: 'Who was the first president of the United States?', a: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Abraham Lincoln'], correct: 0 },
    { q: 'In which century did the Black Death sweep through Europe?', a: ['The 14th century', 'The 12th century', 'The 16th century', 'The 10th century'], correct: 0 },
    { q: 'Which country was the first to grant women the right to vote nationally?', a: ['New Zealand', 'The United States', 'The United Kingdom', 'France'], correct: 0 },
    { q: 'Who was the British prime minister for most of World War II?', a: ['Winston Churchill', 'Neville Chamberlain', 'Clement Attlee', 'Anthony Eden'], correct: 0 },
    { q: 'In which year did the Wright brothers make their first powered flight?', a: ['1903', '1898', '1908', '1912'], correct: 0 },
    { q: 'Which ancient Greek city-state was known for its military-focused society?', a: ['Sparta', 'Athens', 'Corinth', 'Thebes'], correct: 0 },
    { q: 'Who painted the ceiling frescoes of the Sistine Chapel?', a: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'], correct: 0 },
    { q: 'Which country built the Great Pyramid of Giza?', a: ['Egypt', 'Sudan', 'Libya', 'Ethiopia'], correct: 0 },
    { q: 'Which explorer led the first expedition to circumnavigate the globe?', a: ['Ferdinand Magellan', 'Vasco da Gama', 'Christopher Columbus', 'James Cook'], correct: 0 },
    { q: 'In which year did the Cuban Missile Crisis occur?', a: ['1962', '1958', '1965', '1970'], correct: 0 },
    { q: 'Which dynasty built the Forbidden City in Beijing?', a: ['The Ming Dynasty', 'The Qing Dynasty', 'The Tang Dynasty', 'The Han Dynasty'], correct: 0 },
    { q: 'Who led the Soviet Union during the Cuban Missile Crisis?', a: ['Nikita Khrushchev', 'Joseph Stalin', 'Leonid Brezhnev', 'Vladimir Lenin'], correct: 0 },
    { q: 'In which year was the first modern Olympic Games held?', a: ['1896', '1900', '1892', '1904'], correct: 0 },
    // --- Batch 3: Science ---
    { q: 'What is the chemical symbol for sodium?', a: ['Na', 'So', 'Sd', 'Su'], correct: 0 },
    { q: 'What is the hardest natural substance on Earth?', a: ['Diamond', 'Quartz', 'Titanium', 'Graphite'], correct: 0 },
    { q: 'What is the "powerhouse of the cell" called?', a: ['The mitochondria', 'The nucleus', 'The ribosome', 'The Golgi apparatus'], correct: 0 },
    { q: 'Which force keeps planets in orbit around the Sun?', a: ['Gravity', 'Magnetism', 'Friction', 'Inertia'], correct: 0 },
    { q: 'At what temperature does water boil at sea level, in Celsius?', a: ['100°C', '90°C', '110°C', '120°C'], correct: 0 },
    { q: 'Which planet has the shortest day?', a: ['Jupiter', 'Mercury', 'Venus', 'Mars'], correct: 0 },
    { q: 'What is the scientific study of earthquakes called?', a: ['Seismology', 'Geology', 'Meteorology', 'Volcanology'], correct: 0 },
    { q: 'Which gas do plants absorb from the air for photosynthesis?', a: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], correct: 0 },
    { q: 'What is the chemical symbol for iron?', a: ['Fe', 'Ir', 'In', 'Fr'], correct: 0 },
    { q: 'How many bones does the adult human body have?', a: ['206', '186', '226', '256'], correct: 0 },
    { q: 'Which is the closest star to Earth, other than the Sun?', a: ['Proxima Centauri', 'Sirius', 'Alpha Centauri A', 'Betelgeuse'], correct: 0 },
    { q: 'Which blood type is known as the universal donor?', a: ['O negative', 'AB positive', 'A positive', 'B negative'], correct: 0 },
    { q: 'What is the SI unit of electric current?', a: ['Ampere', 'Volt', 'Ohm', 'Watt'], correct: 0 },
    { q: 'What is the most abundant element in the universe?', a: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'], correct: 0 },
    { q: 'Which part of the brain controls balance and coordination?', a: ['The cerebellum', 'The cerebrum', 'The medulla', 'The hypothalamus'], correct: 0 },
    { q: 'What type of energy does a moving object have?', a: ['Kinetic energy', 'Potential energy', 'Thermal energy', 'Chemical energy'], correct: 0 },
    { q: 'Which scientist developed the theory of general relativity?', a: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Max Planck'], correct: 0 },
    { q: 'What is the pH value of pure water?', a: ['7 (neutral)', '0', '14', '5'], correct: 0 },
    { q: 'What is the main function of red blood cells?', a: ['Carrying oxygen', 'Fighting infection', 'Clotting blood', 'Producing hormones'], correct: 0 },
    { q: 'Which planet is known for its Great Red Spot?', a: ['Jupiter', 'Saturn', 'Neptune', 'Mars'], correct: 0 },
    { q: 'What do you call a substance that speeds up a chemical reaction without being consumed?', a: ['A catalyst', 'A solvent', 'A reagent', 'An enzyme substrate'], correct: 0 },
    { q: 'At what temperature does water freeze, in Fahrenheit?', a: ['32°F', '0°F', '100°F', '212°F'], correct: 0 },
    { q: 'Which vitamin does skin produce when exposed to sunlight?', a: ['Vitamin D', 'Vitamin C', 'Vitamin A', 'Vitamin B12'], correct: 0 },
    { q: 'What do you call an animal that eats both plants and meat?', a: ['An omnivore', 'A herbivore', 'A carnivore', 'A detritivore'], correct: 0 },
    { q: 'What is the name of the galaxy that contains our solar system?', a: ['The Milky Way', 'Andromeda', 'Triangulum', 'The Whirlpool Galaxy'], correct: 0 },
    // --- Batch 4: Math, literature, art ---
    { q: 'What is the value of Pi rounded to two decimal places?', a: ['3.14', '3.41', '3.12', '3.16'], correct: 0 },
    { q: 'What is the square root of 144?', a: ['12', '14', '11', '13'], correct: 0 },
    { q: 'What do you call a triangle with all three sides equal?', a: ['An equilateral triangle', 'An isosceles triangle', 'A scalene triangle', 'A right triangle'], correct: 0 },
    { q: 'How many degrees are there in a right angle?', a: ['90', '45', '180', '60'], correct: 0 },
    { q: 'What is 15% of 200?', a: ['30', '25', '40', '20'], correct: 0 },
    { q: 'What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ...?', a: ['13', '11', '15', '10'], correct: 0 },
    { q: 'How many sides does a hexagon have?', a: ['6', '5', '7', '8'], correct: 0 },
    { q: 'What is 9 squared?', a: ['81', '72', '90', '18'], correct: 0 },
    { q: 'How many degrees are there in a full circle?', a: ['360', '180', '270', '400'], correct: 0 },
    { q: 'What is 100 divided by 4?', a: ['25', '20', '30', '40'], correct: 0 },
    { q: 'Who wrote "Pride and Prejudice"?', a: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'], correct: 0 },
    { q: 'Who wrote "1984" and "Animal Farm"?', a: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'H. G. Wells'], correct: 0 },
    { q: 'Who wrote "The Great Gatsby"?', a: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'Mark Twain'], correct: 0 },
    { q: 'Who wrote "War and Peace"?', a: ['Leo Tolstoy', 'Fyodor Dostoevsky', 'Anton Chekhov', 'Ivan Turgenev'], correct: 0 },
    { q: 'Which Hungarian poet wrote "National Song" ("Nemzeti dal")?', a: ['Sándor Petőfi', 'Endre Ady', 'Attila József', 'Mihály Vörösmarty'], correct: 0 },
    { q: 'Who wrote "Don Quixote"?', a: ['Miguel de Cervantes', 'Lope de Vega', 'Federico García Lorca', 'Pablo Neruda'], correct: 0 },
    { q: 'Who wrote "The Little Prince"?', a: ['Antoine de Saint-Exupéry', 'Jules Verne', 'Victor Hugo', 'Albert Camus'], correct: 0 },
    { q: 'Who wrote the "Divine Comedy"?', a: ['Dante Alighieri', 'Petrarch', 'Boccaccio', 'Machiavelli'], correct: 0 },
    { q: 'Which art movement is Salvador Dalí associated with?', a: ['Surrealism', 'Cubism', 'Impressionism', 'Expressionism'], correct: 0 },
    { q: 'Who painted "The Starry Night"?', a: ['Vincent van Gogh', 'Claude Monet', 'Paul Cézanne', 'Edgar Degas'], correct: 0 },
    { q: 'Who sculpted the statue of David?', a: ['Michelangelo', 'Donatello', 'Bernini', 'Rodin'], correct: 0 },
    { q: 'Which artist co-founded Cubism together with Picasso?', a: ['Georges Braque', 'Henri Matisse', 'Paul Gauguin', 'Marc Chagall'], correct: 0 },
    { q: 'Who painted "The Scream"?', a: ['Edvard Munch', 'Gustav Klimt', 'Egon Schiele', 'Wassily Kandinsky'], correct: 0 },
    { q: 'In which country is the Louvre Museum located?', a: ['France', 'Italy', 'Spain', 'The United Kingdom'], correct: 0 },
    { q: 'Who painted "Guernica"?', a: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Diego Rivera'], correct: 0 },
    // --- Batch 5: Music, movies & TV ---
    { q: 'Which band released the album "Abbey Road"?', a: ['The Beatles', 'The Rolling Stones', 'Pink Floyd', 'The Who'], correct: 0 },
    { q: 'Who is known as the "King of Pop"?', a: ['Michael Jackson', 'Elvis Presley', 'Prince', 'James Brown'], correct: 0 },
    { q: 'Which child-prodigy composer wrote over 600 works before dying at 35?', a: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Joseph Haydn', 'Antonio Salieri'], correct: 0 },
    { q: 'Which instrument has 88 keys?', a: ['The piano', 'The organ', 'The harpsichord', 'The accordion'], correct: 0 },
    { q: 'Which iconic rock band was fronted by Freddie Mercury?', a: ['Queen', 'Led Zeppelin', 'The Rolling Stones', 'Deep Purple'], correct: 0 },
    { q: 'Which music genre originated in Jamaica?', a: ['Reggae', 'Salsa', 'Samba', 'Blues'], correct: 0 },
    { q: 'Which pop star released the album "Thriller"?', a: ['Michael Jackson', 'Prince', 'George Michael', 'Lionel Richie'], correct: 0 },
    { q: 'Which Swedish pop group performed "Dancing Queen"?', a: ['ABBA', 'Roxette', 'Ace of Base', 'A-ha'], correct: 0 },
    { q: 'Which instrument is Yo-Yo Ma famous for playing?', a: ['The cello', 'The violin', 'The viola', 'The double bass'], correct: 0 },
    { q: 'How many strings does a standard violin have?', a: ['4', '5', '6', '3'], correct: 0 },
    { q: 'Who is known as the "Queen of Pop"?', a: ['Madonna', 'Cher', 'Whitney Houston', 'Mariah Carey'], correct: 0 },
    { q: 'Which music streaming service launched in Sweden in 2008?', a: ['Spotify', 'Deezer', 'Tidal', 'Pandora'], correct: 0 },
    { q: 'Who directed the movies "Jaws" and "E.T."?', a: ['Steven Spielberg', 'George Lucas', 'James Cameron', 'Martin Scorsese'], correct: 0 },
    { q: 'Which movie features the character Jack Sparrow?', a: ['Pirates of the Caribbean', 'Peter Pan', 'Treasure Island', 'Hook'], correct: 0 },
    { q: 'Which fictional wizarding school does Harry Potter attend?', a: ['Hogwarts', 'Beauxbatons', 'Durmstrang', 'Ilvermorny'], correct: 0 },
    { q: 'Which animated movie features a clownfish searching for his son?', a: ['Finding Nemo', 'Shark Tale', 'The Little Mermaid', 'Moana'], correct: 0 },
    { q: 'Who played Iron Man in the Marvel Cinematic Universe?', a: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'], correct: 0 },
    { q: 'Which TV series features the Iron Throne?', a: ['Game of Thrones', 'The Witcher', 'Vikings', 'House of the Dragon'], correct: 0 },
    { q: 'Which movie trilogy is set in Middle-earth and features hobbits?', a: ['The Lord of the Rings', 'Narnia', 'Harry Potter', 'The Chronicles of Prydain'], correct: 0 },
    { q: 'Which actor played the Joker in "The Dark Knight" (2008)?', a: ['Heath Ledger', 'Jack Nicholson', 'Joaquin Phoenix', 'Jared Leto'], correct: 0 },
    { q: 'Which studio produced "Toy Story," the first fully computer-animated feature film?', a: ['Pixar', 'DreamWorks', 'Illumination', 'Blue Sky Studios'], correct: 0 },
    { q: 'Which sitcom is set in a coffee shop called Central Perk?', a: ['Friends', 'Seinfeld', 'How I Met Your Mother', 'The Big Bang Theory'], correct: 0 },
    { q: 'Which movie won the first Academy Award for Best Picture?', a: ['Wings', 'Sunrise', 'The Jazz Singer', 'Metropolis'], correct: 0 },
    { q: 'Which director is known for the "Star Wars" franchise?', a: ['George Lucas', 'Steven Spielberg', 'James Cameron', 'Ridley Scott'], correct: 0 },
    { q: 'Which streaming service produced the show "Stranger Things"?', a: ['Netflix', 'Hulu', 'Amazon Prime', 'Disney+'], correct: 0 },
    // --- Batch 6: Sports & technology ---
    { q: 'How many players does a basketball team have on the court at once?', a: ['5', '6', '7', '4'], correct: 0 },
    { q: 'In which sport would you perform a "slam dunk"?', a: ['Basketball', 'Volleyball', 'Handball', 'Tennis'], correct: 0 },
    { q: 'How often are the Summer Olympic Games held?', a: ['Every 4 years', 'Every 2 years', 'Every 3 years', 'Every 5 years'], correct: 0 },
    { q: 'Which country has won the most FIFA World Cups?', a: ['Brazil', 'Germany', 'Italy', 'Argentina'], correct: 0 },
    { q: 'In tennis, what is a score of zero called?', a: ['Love', 'Nil', 'Zero', 'Deuce'], correct: 0 },
    { q: 'How many players does a volleyball team have on the court?', a: ['6', '5', '7', '4'], correct: 0 },
    { q: 'In which sport do athletes use a shuttlecock?', a: ['Badminton', 'Tennis', 'Squash', 'Table tennis'], correct: 0 },
    { q: 'Which country hosted the 2016 Summer Olympics?', a: ['Brazil', 'China', 'The United Kingdom', 'Japan'], correct: 0 },
    { q: 'How long is a marathon race?', a: ['42.195 km', '40 km', '50 km', '35 km'], correct: 0 },
    { q: 'In boxing, how many minutes is a standard professional round?', a: ['3 minutes', '2 minutes', '5 minutes', '4 minutes'], correct: 0 },
    { q: 'Which country invented the sport of cricket?', a: ['England', 'India', 'Australia', 'South Africa'], correct: 0 },
    { q: 'How many rings are on the Olympic flag?', a: ['5', '6', '4', '7'], correct: 0 },
    { q: 'Which country won the first-ever FIFA World Cup in 1930?', a: ['Uruguay', 'Brazil', 'Argentina', 'Italy'], correct: 0 },
    { q: 'Which company created the iPhone?', a: ['Apple', 'Samsung', 'Google', 'Nokia'], correct: 0 },
    { q: 'What does "WWW" stand for?', a: ['World Wide Web', 'World Wide Wire', 'Wide World Web', 'World Web Wide'], correct: 0 },
    { q: 'Which company created the Android operating system?', a: ['Google', 'Apple', 'Microsoft', 'Samsung'], correct: 0 },
    { q: 'Who co-founded Apple alongside Steve Jobs?', a: ['Steve Wozniak', 'Bill Gates', 'Tim Cook', 'Jeff Bezos'], correct: 0 },
    { q: 'Which social media platform used a bird as its old logo?', a: ['Twitter (X)', 'Facebook', 'Instagram', 'LinkedIn'], correct: 0 },
    { q: 'In which year was the first iPhone released?', a: ['2007', '2005', '2009', '2010'], correct: 0 },
    { q: 'What does "CPU" stand for?', a: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Unit', 'Core Processing Unit'], correct: 0 },
    { q: 'Which company developed the Windows operating system?', a: ['Microsoft', 'Apple', 'IBM', 'Google'], correct: 0 },
    { q: "What is the name of Elon Musk's electric car company?", a: ['Tesla', 'SpaceX', 'Neuralink', 'Hyperloop'], correct: 0 },
    { q: 'Which programming language is best known for web page interactivity?', a: ['JavaScript', 'Python', 'C++', 'Java'], correct: 0 },
    { q: 'What does "HTML" stand for?', a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'HyperText Modern Link'], correct: 0 },
    { q: 'Which is the most widely used search engine in the world?', a: ['Google', 'Bing', 'Yahoo', 'DuckDuckGo'], correct: 0 },
    // --- Batch 7: Mythology & nature ---
    { q: 'Who is the king of the gods in Greek mythology?', a: ['Zeus', 'Poseidon', 'Hades', 'Apollo'], correct: 0 },
    { q: 'Who is the Norse god of thunder?', a: ['Thor', 'Odin', 'Loki', 'Baldur'], correct: 0 },
    { q: 'Which Greek hero is known for his twelve labors?', a: ['Heracles', 'Achilles', 'Perseus', 'Theseus'], correct: 0 },
    { q: 'Who is the Egyptian god of the afterlife?', a: ['Osiris', 'Ra', 'Anubis', 'Horus'], correct: 0 },
    { q: 'Who is the goddess of wisdom in Greek mythology?', a: ['Athena', 'Aphrodite', 'Hera', 'Artemis'], correct: 0 },
    { q: 'Which Greek mythological creature has the body of a lion and the head of a human?', a: ['The Sphinx', 'The Minotaur', 'The Chimera', 'The Centaur'], correct: 0 },
    { q: 'Who is the Roman god of war?', a: ['Mars', 'Jupiter', 'Neptune', 'Vulcan'], correct: 0 },
    { q: 'Which Greek hero was vulnerable only in his heel?', a: ['Achilles', 'Hector', 'Ajax', 'Odysseus'], correct: 0 },
    { q: 'In Norse mythology, what is the name of the world tree?', a: ['Yggdrasil', 'Bifrost', 'Asgard', 'Valhalla'], correct: 0 },
    { q: 'Who is the Greek god of the sea?', a: ['Poseidon', 'Zeus', 'Hades', 'Hermes'], correct: 0 },
    { q: 'Which is the largest species of shark?', a: ['The whale shark', 'The great white shark', 'The tiger shark', 'The hammerhead shark'], correct: 0 },
    { q: 'Which animal is known for changing color to blend with its surroundings?', a: ['The chameleon', 'The gecko', 'The iguana', 'The salamander'], correct: 0 },
    { q: 'Which bird is known for mimicking human speech?', a: ['The parrot', 'The crow', 'The owl', 'The sparrow'], correct: 0 },
    { q: 'What is a baby kangaroo called?', a: ['A joey', 'A cub', 'A foal', 'A kid'], correct: 0 },
    { q: 'Which is the fastest bird in the world during a dive?', a: ['The peregrine falcon', 'The golden eagle', 'The swift', 'The albatross'], correct: 0 },
    { q: 'Which mammal lays eggs instead of giving birth to live young?', a: ['The platypus', 'The kangaroo', 'The koala', 'The wombat'], correct: 0 },
    { q: 'How many hearts does an octopus have?', a: ['3', '1', '2', '4'], correct: 0 },
    { q: 'Which insect is known for its highly organized colonies and for producing honey?', a: ['Bees', 'Ants', 'Termites', 'Wasps'], correct: 0 },
    { q: 'What is the tallest animal in the world?', a: ['The giraffe', 'The elephant', 'The camel', 'The ostrich'], correct: 0 },
    { q: 'Which big cat is known for having a mane?', a: ['The lion', 'The tiger', 'The leopard', 'The jaguar'], correct: 0 },
    { q: 'Which is the largest land animal on Earth?', a: ['The African elephant', 'The white rhinoceros', 'The giraffe', 'The hippopotamus'], correct: 0 },
    { q: 'Which venomous snake is called the "king" of snakes because it eats other snakes?', a: ['The king cobra', 'The black mamba', 'The rattlesnake', 'The anaconda'], correct: 0 },
    { q: 'Which is the smallest mammal in the world?', a: ['The bumblebee bat', 'The shrew', 'The mouse', 'The hedgehog'], correct: 0 },
    { q: 'What do you call a group of lions?', a: ['A pride', 'A pack', 'A herd', 'A flock'], correct: 0 },
    { q: 'Which animal is known to sleep up to 20 hours a day?', a: ['The koala', 'The sloth', 'The panda', 'The hippopotamus'], correct: 0 },
    // --- Batch 8: Food, culture & inventions ---
    { q: 'Which country is famous for inventing the chocolate-hazelnut spread Nutella?', a: ['Italy', 'Switzerland', 'Belgium', 'France'], correct: 0 },
    { q: 'Which spice comes from the crocus flower and is the most expensive spice by weight?', a: ['Saffron', 'Vanilla', 'Cardamom', 'Cinnamon'], correct: 0 },
    { q: 'Which country is the birthplace of the taco?', a: ['Mexico', 'Spain', 'Peru', 'Brazil'], correct: 0 },
    { q: 'Which drink is made by fermenting grapes?', a: ['Wine', 'Beer', 'Cider', 'Mead'], correct: 0 },
    { q: 'Which fruit is known as the "king of fruits" in Southeast Asia because of its strong smell?', a: ['Durian', 'Jackfruit', 'Mangosteen', 'Rambutan'], correct: 0 },
    { q: 'Which country produces the most coffee in the world?', a: ['Brazil', 'Colombia', 'Vietnam', 'Ethiopia'], correct: 0 },
    { q: 'Which cheese is traditionally used on a classic Margherita pizza?', a: ['Mozzarella', 'Cheddar', 'Parmesan', 'Gouda'], correct: 0 },
    { q: 'Which country is the birthplace of curry?', a: ['India', 'Thailand', 'China', 'Japan'], correct: 0 },
    { q: 'Which country is the birthplace of tequila?', a: ['Mexico', 'Spain', 'Cuba', 'Peru'], correct: 0 },
    { q: 'Which country is credited with inventing the sandwich, named after an English earl?', a: ['England', 'France', 'The Netherlands', 'Scotland'], correct: 0 },
    { q: 'Which spice gives curry its yellow color?', a: ['Turmeric', 'Saffron', 'Paprika', 'Cumin'], correct: 0 },
    { q: 'Which country is the largest wine producer in the world?', a: ['Italy', 'France', 'Spain', 'The United States'], correct: 0 },
    { q: 'What is the main ingredient in traditional Japanese miso soup?', a: ['Fermented soybean paste', 'Rice', 'Seaweed', 'Tofu'], correct: 0 },
    { q: 'Which country is famous for the dish paella?', a: ['Spain', 'Portugal', 'Italy', 'Greece'], correct: 0 },
    { q: 'Which nut is used to make traditional marzipan?', a: ['Almonds', 'Walnuts', 'Hazelnuts', 'Pistachios'], correct: 0 },
    { q: 'Who invented the telephone?', a: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'], correct: 0 },
    { q: 'Who is credited with inventing the first commercially practical light bulb?', a: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Benjamin Franklin'], correct: 0 },
    { q: 'Which country invented paper?', a: ['China', 'Egypt', 'India', 'Greece'], correct: 0 },
    { q: 'Who is credited with inventing the World Wide Web?', a: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Vint Cerf'], correct: 0 },
    { q: 'Which explorer is credited with discovering the sea route to India around Africa?', a: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'Henry the Navigator'], correct: 0 },
    { q: 'Which currency is used in Japan?', a: ['The yen', 'The won', 'The yuan', 'The ringgit'], correct: 0 },
    { q: 'Which currency is used in the United Kingdom?', a: ['The pound sterling', 'The euro', 'The dollar', 'The franc'], correct: 0 },
    { q: 'What is the official language of Brazil?', a: ['Portuguese', 'Spanish', 'French', 'Italian'], correct: 0 },
    { q: 'Which country gifted the Statue of Liberty to the United States?', a: ['France', 'The United Kingdom', 'Spain', 'The Netherlands'], correct: 0 },
    { q: 'What is the shared currency of European Union member states called?', a: ['The euro', 'The franc', 'The mark', 'The lira'], correct: 0 },
    // --- Batch 9: Minecraft/gaming & general knowledge ---
    { q: 'Which Minecraft mob explodes when it gets close to the player?', a: ['Creeper', 'Zombie', 'Skeleton', 'Spider'], correct: 0 },
    { q: 'What material is needed to build a Nether portal in Minecraft?', a: ['Obsidian', 'Cobblestone', 'Netherrack', 'Blackstone'], correct: 0 },
    { q: 'What material upgrades diamond gear to the strongest tier in Minecraft?', a: ['Netherite', 'Emerald', 'Redstone', 'Lapis lazuli'], correct: 0 },
    { q: "How many hearts represent a player's maximum health by default in Minecraft?", a: ['10 hearts', '8 hearts', '12 hearts', '20 hearts'], correct: 0 },
    { q: "Which Minecraft mob can teleport and gets angry if you look at its face?", a: ['Enderman', 'Creeper', 'Blaze', 'Ghast'], correct: 0 },
    { q: 'What do you typically need to breed most animals in Minecraft?', a: ['Their favorite food', 'A saddle', 'A lead', 'A bed'], correct: 0 },
    { q: 'Which Minecraft dimension is home to the Ender Dragon?', a: ['The End', 'The Nether', 'The Overworld', 'The Aether'], correct: 0 },
    { q: 'What do you get from smelting raw iron in a furnace in Minecraft?', a: ['Iron ingot', 'Iron ore', 'Iron block', 'Iron nugget'], correct: 0 },
    { q: 'What is the minimum pickaxe tier needed to mine obsidian in Minecraft?', a: ['Diamond pickaxe', 'Iron pickaxe', 'Stone pickaxe', 'Wooden pickaxe'], correct: 0 },
    { q: 'Which rare item drops from the Wither and is needed to craft a beacon?', a: ['Nether star', 'Ender pearl', 'Blaze rod', 'Ghast tear'], correct: 0 },
    { q: 'Which Minecraft item cures a zombie villager when combined with a splash potion of weakness?', a: ['Golden apple', 'Golden carrot', 'Enchanted apple', 'Apple'], correct: 0 },
    { q: 'Which Minecraft animal is famous for being milkable?', a: ['Cow', 'Sheep', 'Pig', 'Chicken'], correct: 0 },
    { q: 'What do you use to tame a wolf in Minecraft?', a: ['Bones', 'Wheat', 'Fish', 'Seeds'], correct: 0 },
    { q: 'Which Minecraft biome is characterized by cacti and sand?', a: ['Desert', 'Savanna', 'Badlands', 'Jungle'], correct: 0 },
    { q: "What blocks are needed to build a beacon's base pyramid in Minecraft?", a: ['Iron, gold, diamond, or emerald blocks', 'Cobblestone', 'Obsidian', 'Netherrack'], correct: 0 },
    { q: 'Which company originally developed and released Minecraft?', a: ['Mojang', 'Epic Games', 'Valve', 'Ubisoft'], correct: 0 },
    { q: 'In which year was the Minecraft alpha version first publicly released?', a: ['2009', '2007', '2011', '2013'], correct: 0 },
    { q: 'In which video game does a plumber rescue Princess Peach from Bowser?', a: ['Super Mario', 'The Legend of Zelda', 'Sonic the Hedgehog', 'Donkey Kong'], correct: 0 },
    { q: "What is the largest planet's largest moon called?", a: ['Ganymede', 'Titan', 'Callisto', 'Io'], correct: 0 },
    { q: 'A deficiency of which vitamin causes scurvy?', a: ['Vitamin C', 'Vitamin D', 'Vitamin B12', 'Vitamin A'], correct: 0 },
    { q: "What is Earth's outermost layer, the one we live on, called?", a: ['The crust', 'The mantle', 'The outer core', 'The inner core'], correct: 0 },
    { q: 'Which planet is closest to the Sun?', a: ['Mercury', 'Venus', 'Earth', 'Mars'], correct: 0 },
    { q: 'What do you call a shape with 5 sides?', a: ['A pentagon', 'A hexagon', 'A heptagon', 'An octagon'], correct: 0 },
    { q: 'Which language has the most native speakers in the world?', a: ['Mandarin Chinese', 'English', 'Spanish', 'Hindi'], correct: 0 },
    { q: 'Which country is home to the ancient city of Petra?', a: ['Jordan', 'Egypt', 'Syria', 'Israel'], correct: 0 },
    // --- Batch 10: Mixed general knowledge ---
    { q: "Which planet is often called Earth's \"twin\" due to its similar size?", a: ['Venus', 'Mars', 'Mercury', 'Neptune'], correct: 0 },
    { q: 'What is the largest bone in the human body?', a: ['The femur', 'The tibia', 'The humerus', 'The fibula'], correct: 0 },
    { q: 'Which country is the birthplace of the ancient Olympic Games?', a: ['Greece', 'Italy', 'Egypt', 'Turkey'], correct: 0 },
    { q: 'Which famous scientist proposed the theory of evolution by natural selection?', a: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Alfred Russel Wallace'], correct: 0 },
    { q: 'What is the capital of Spain?', a: ['Madrid', 'Barcelona', 'Seville', 'Valencia'], correct: 0 },
    { q: 'Which famous physicist formulated the three laws of motion?', a: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'], correct: 0 },
    { q: 'Which country is the birthplace of yoga?', a: ['India', 'China', 'Nepal', 'Tibet'], correct: 0 },
    { q: 'What is the capital of Portugal?', a: ['Lisbon', 'Porto', 'Faro', 'Braga'], correct: 0 },
    { q: "Which ocean current is known for warming Western Europe's climate?", a: ['The Gulf Stream', 'The Humboldt Current', 'The Kuroshio Current', 'The Labrador Current'], correct: 0 },
    { q: 'What is the fear of spiders called?', a: ['Arachnophobia', 'Claustrophobia', 'Acrophobia', 'Agoraphobia'], correct: 0 },
    { q: 'Which country is the birthplace of karate?', a: ['Japan', 'China', 'Korea', 'Thailand'], correct: 0 },
    { q: 'What is the capital of Poland?', a: ['Warsaw', 'Krakow', 'Gdansk', 'Poznan'], correct: 0 },
    { q: 'Which gas is commonly used to fill floating party balloons?', a: ['Helium', 'Hydrogen', 'Oxygen', 'Nitrogen'], correct: 0 },
    { q: 'Which country is the birthplace of table tennis?', a: ['England', 'China', 'Japan', 'Germany'], correct: 0 },
    { q: 'What is the capital of Austria?', a: ['Vienna', 'Salzburg', 'Graz', 'Innsbruck'], correct: 0 },
    { q: 'Which famous physicist is known for the equation E=mc²?', a: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Stephen Hawking'], correct: 0 },
    { q: 'What do you call a word that reads the same backward as forward?', a: ['A palindrome', 'An anagram', 'An acronym', 'A homophone'], correct: 0 },
    { q: 'What is the capital of Switzerland?', a: ['Bern', 'Zurich', 'Geneva', 'Basel'], correct: 0 },
    { q: 'Which sea creature is known to have the largest eyes in the animal kingdom?', a: ['The giant squid', 'The blue whale', 'The great white shark', 'The octopus'], correct: 0 },
    { q: 'What is the study of celestial objects called?', a: ['Astronomy', 'Astrology', 'Geology', 'Meteorology'], correct: 0 },
    { q: 'Which country is the birthplace of the board game chess?', a: ['India', 'China', 'Persia', 'Egypt'], correct: 0 },
    { q: 'What is the capital of Greece?', a: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'], correct: 0 },
    { q: 'Which instrument family does the violin belong to?', a: ['String instruments', 'Percussion instruments', 'Wind instruments', 'Brass instruments'], correct: 0 },
    { q: "What is the name of the imaginary line that divides Earth into Northern and Southern Hemispheres?", a: ['The Equator', 'The Prime Meridian', 'The Tropic of Cancer', 'The Arctic Circle'], correct: 0 },
    { q: 'Which famous inventor held over 1,000 patents, including one for the phonograph?', a: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Henry Ford'], correct: 0 },
  ],
};

(function () {
  'use strict';

  var root = document.querySelector('[data-quiz]');
  if (!root) return;

  var bank = window.IMPERIUS_QUIZ;
  var order = [];
  var pointer = 0;
  var level = 0;
  var best = 0;
  var locked = false;
  var answerOrder = [];

  try { best = parseInt(localStorage.getItem('imperius-quiz-best'), 10) || 0; } catch (e) {}

  function currentLang() {
    var l = document.documentElement.getAttribute('data-lang');
    return (l === 'en' || l === 'hu') ? l : 'hu';
  }
  function dict() {
    return window.ImperiusI18N ? window.ImperiusI18N.get(currentLang()) : {};
  }

  function shuffled(n) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(i);
    for (var i2 = a.length - 1; i2 > 0; i2--) {
      var j = Math.floor(Math.random() * (i2 + 1));
      var tmp = a[i2]; a[i2] = a[j]; a[j] = tmp;
    }
    return a;
  }

  var questionEl = root.querySelector('[data-quiz-question]');
  var answersEl = root.querySelector('[data-quiz-answers]');
  var levelEl = root.querySelector('[data-quiz-level]');
  var bestEl = root.querySelector('[data-quiz-best]');
  var climbFill = root.querySelector('[data-quiz-climb-fill]');
  var gameEl = root.querySelector('[data-quiz-game]');
  var gameoverEl = root.querySelector('[data-quiz-gameover]');
  var gameoverDescEl = root.querySelector('[data-quiz-gameover-desc]');
  var newBestEl = root.querySelector('[data-quiz-new-best]');
  var restartBtn = root.querySelector('[data-quiz-restart]');

  function ensureOrder() {
    var n = bank.hu.length;
    if (!order.length || pointer >= order.length) {
      order = shuffled(n);
      pointer = 0;
    }
  }

  function updateLevelUI() {
    if (levelEl) levelEl.textContent = level;
    if (bestEl) bestEl.textContent = best;
    if (climbFill) climbFill.style.height = (Math.min(level, 10) / 10 * 100) + '%';
  }

  function renderQuestion() {
    ensureOrder();
    answerOrder = shuffled(4);
    var qData = bank[currentLang()][order[pointer]];
    questionEl.textContent = qData.q;
    answersEl.innerHTML = '';
    answerOrder.forEach(function (ansIdx) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-answer';
      btn.textContent = qData.a[ansIdx];
      btn.addEventListener('click', function () { handleAnswer(ansIdx, btn); });
      answersEl.appendChild(btn);
    });
    locked = false;
  }

  function handleAnswer(chosenIdx, btn) {
    if (locked) return;
    locked = true;
    var qData = bank[currentLang()][order[pointer]];
    var buttons = answersEl.querySelectorAll('.quiz-answer');
    buttons.forEach(function (b) { b.disabled = true; });

    if (chosenIdx === qData.correct) {
      btn.classList.add('is-correct');
      level++;
      if (level > best) {
        best = level;
        try { localStorage.setItem('imperius-quiz-best', String(best)); } catch (e) {}
      }
      updateLevelUI();
      setTimeout(function () { pointer++; renderQuestion(); }, 550);
    } else {
      btn.classList.add('is-wrong');
      buttons.forEach(function (b, i) {
        if (answerOrder[i] === qData.correct) b.classList.add('is-correct');
      });
      setTimeout(showGameOver, 1100);
    }
  }

  function showGameOver() {
    var d = dict();
    gameEl.hidden = true;
    gameoverEl.hidden = false;
    if (gameoverDescEl) gameoverDescEl.textContent = (d.knowledge_gameover_desc || '{level}').replace('{level}', level);
    if (newBestEl) newBestEl.hidden = !(level > 0 && level === best);
  }

  function startGame() {
    level = 0;
    order = [];
    pointer = 0;
    gameoverEl.hidden = true;
    gameEl.hidden = false;
    updateLevelUI();
    renderQuestion();
  }

  if (restartBtn) restartBtn.addEventListener('click', startGame);

  document.addEventListener('imperius:langchange', function () {
    updateLevelUI();
    if (!gameEl.hidden && !locked) {
      var qData = bank[currentLang()][order[pointer]];
      questionEl.textContent = qData.q;
      var buttons = answersEl.querySelectorAll('.quiz-answer');
      buttons.forEach(function (b, i) { b.textContent = qData.a[answerOrder[i]]; });
    }
    if (!gameoverEl.hidden) {
      var d = dict();
      if (gameoverDescEl) gameoverDescEl.textContent = (d.knowledge_gameover_desc || '{level}').replace('{level}', level);
    }
  });

  startGame();
})();
