document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  document.querySelectorAll(".movie-card").awareEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.movie;
      openMovie(key);
    });
  });
});

const movies = {
  stranger: {
    title: "Stranger Things",
    seasons: {
      1: [
        "https://videa.hu/player?v=qp7BrkowMbi2gvu7",
        "https://videa.hu/player?v=SVYXkGUZRuhBF0Mc"
      ],
      2: [
        "https://videa.hu/player?v=LINK3",
        "https://videa.hu/player?v=LINK4"
      ]
    }
  },

  kpop: {
    title: "K-Pop Démon Vadászok",
    episodes: [
      "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf"
    ]
  }
};

const modal = document.getElementById("playerModal");
const frame = document.getElementById("videoFrame");
const title = document.getElementById("playerTitle");
const controls = document.getElementById("episodeControls");

function openMovie(key) {
  const movie = movies[key];
  if (!movie) return;

  modal.style.display = "flex";
  title.textContent = movie.title;
  controls.innerHTML = "";
  frame.src = "";

  if (movie.seasons) {
    createSeasonSelector(movie.seasons);
  } else if (movie.episodes) {
    createEpisodeList(movie.episodes);
  }
}

function createSeasonSelector(seasons) {
  const seasonDiv = document.createElement("div");
  seasonDiv.className = "season-selector";

  Object.keys(seasons).forEach(season => {
    const btn = document.createElement("button");
    btn.textContent = `Évad ${season}`;
    btn.addEventListener("click", () => {
      createEpisodeList(seasons[season]);
    });
    seasonDiv.appendChild(btn);
  });

  controls.appendChild(seasonDiv);
}

function createEpisodeList(episodes) {
  // Régi lista törlése
  const oldList = controls.querySelector(".episode-list");
  if (oldList) oldList.remove();

  const list = document.createElement("div");
  list.className = "episode-list";

  episodes.forEach((ep, index) => {
    const btn = document.createElement("button");
    btn.textContent = `Rész ${index + 1}`;
    btn.addEventListener("click", () => {
      frame.src = ep;
    });
    list.appendChild(btn);
  });

  controls.appendChild(list);
}

function closePlayer() {
  modal.style.display = "none";
  frame.src = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closePlayer();
  }
});
