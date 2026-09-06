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
