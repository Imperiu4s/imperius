window.addEventListener("load", () => {
  const audio = document.getElementById("loading-audio");

  // Autoplay trükk: nagyon halk, így engedi a böngésző
  audio.volume = 0.25;
  audio.play().catch(err => console.log("Autoplay blokkolva:", err));

  // 300ms múlva hangerő visszaáll
  setTimeout(() => {
    audio.volume = 0.3;
  }, 100);

  // Betöltő animáció
  if (document.getElementById("loading-screen")) {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").style.opacity = "1";

      // Hang leáll, amikor oldal megjelenik
      audio.pause();
      audio.currentTime = 0;

    }, 4000);
  }
});






// FILMEK LISTÁJA (IDE RAKHATSZ TÖBBET)
// 📌 FILMEK ÉS SOROZATOK
const movies = [
  { title: "K-Pop Démon Vadászok", img: "assets/kpop.png", video: "assets/movies/kpop.mp4" },

  // 🔥 ÚJ: Sorozat több évaddal + részekkel
  {
    title: "Stranger Things", img: "assets/stranger_things.png", isSeries: true,
    seasons: [
      {
        name: "1. évad",
        episodes: [
          { title: "1. rész", video: "assets/series/Stranger_Things/S01E01.mp4" },
          { title: "2. rész", video: "assets/series/Stranger_Things/S01E02.mp4" },
          { title: "3. rész", video: "assets/series/Stranger_Things/S01E03.mp4" },
          { title: "4. rész", video: "assets/series/Stranger_Things/S01E03.mp4" },
          { title: "5. rész", video: "assets/series/Stranger_Things/S01E03.mp4" },
          { title: "6. rész", video: "assets/series/Stranger_Things/S01E03.mp4" },
          { title: "7. rész", video: "assets/series/Stranger_Things/S01E03.mp4" },
        ]
      },
      {
        name: "2. évad",
        episodes: [
          { title: "1. rész: Újrakezdés", video: "series/s02e01.mp4" },
          { title: "2. rész: Árulás", video: "series/s02e02.mp4" }
        ]
      }
    ]
  },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
  { title: "Példa Film", img: "assets/példa.png", video: "assets/movies/példa.mp4" },
];

// 📌 Filmek betöltése
function loadMovies() {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<img src="${movie.img}"><h3>${movie.title}</h3>`;
    div.onclick = () => openPlayer(movie);
    container.appendChild(div);
  });
}

// 📌 Keresés
function filterMovies() {
  const text = document.getElementById("search-bar").value.toLowerCase();
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(text) ? "block" : "none";
  });
}

// 🎥 Film / Sorozat Megnyitása
function openPlayer(movie) {
  if (!movie.isSeries) {
    document.body.innerHTML = `
      <div class="video-bg-overlay"></div>
      <div class="movie-player-container">
        <div class="movie-title">${movie.title}</div>
        <video class="movie-player" controls>
          <source src="${movie.video}" type="video/mp4">
        </video>
        <a href="film.html" class="back-button">⬅ Vissza</a>
      </div>`;
  } else {
    // Sorozat UI
    let seasonOptions = "";
    movie.seasons.forEach((s, i) => {
      seasonOptions += `<option value="${i}">${s.name}</option>`;
    });

    document.body.innerHTML = `
      <div class="video-bg-overlay"></div>
      <div class="movie-player-container">
        <div class="movie-title">${movie.title}</div>

        <div class="episode-select">
          <select id="season-select">${seasonOptions}</select>
          <select id="episode-select"></select>
        </div>

        <video class="movie-player" id="series-player" controls></video>

        <a href="film.html" class="back-button">⬅ Vissza</a>
      </div>
    `;

    setupSeriesPlayer(movie);
  }
}

// 📌 Sorozat epizód betöltő
function setupSeriesPlayer(movie) {
  const seasonSelect = document.getElementById("season-select");
  const episodeSelect = document.getElementById("episode-select");
  const player = document.getElementById("series-player");

  function loadEpisodes() {
    episodeSelect.innerHTML = "";
    const season = movie.seasons[seasonSelect.value];
    season.episodes.forEach((ep, i) => {
      episodeSelect.innerHTML += `<option value="${i}">${ep.title}</option>`;
    });
    loadVideo();
  }

  function loadVideo() {
    const season = movie.seasons[seasonSelect.value];
    const ep = season.episodes[episodeSelect.value];
    player.src = ep.video;
  }

  seasonSelect.onchange = loadEpisodes;
  episodeSelect.onchange = loadVideo;

  loadEpisodes();
}

// 🔄 Indítás
loadMovies();