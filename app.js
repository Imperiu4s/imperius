// ===============================
// ADATOK
// ===============================

const movies = [
    {
        id: "movie1",
        title: "K-Pop Démon Vadászok",
        description: "Amikor Rumi, Mira és Zoey K-pop-szupersztárok koncertje nem telt házas...",
        thumbnail: "assets/kpop.png",
        iframe: "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf",
        genre: "Akció • Fantasy",
        year: "2024",
        age: "12+"
    },
    {
        id: "movie2",
        title: "Romantikus Esték",
        description: "Romantikus történet két idegen találkozásáról.",
        thumbnail: "assets/kep.png",
        iframe: "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf",
        genre: "Romantikus",
        year: "2023",
        age: "12+"
    }
];

const series = [
    {
        id: "series1",
        title: "Stranger Things",
        description: "Egy fiatal fiú eltűnése után...",
        thumbnail: "assets/stranger_things.png",
        genre: "Sci-fi • Horror",
        year: "2016",
        age: "16+",
        seasons: [
            {
                season: 1,
                episodes: [
                    { id: "s1s1e1", title: "1. rész", iframe: "https://videa.hu/player?v=qp7BrkowMbi2gvu7" },
                    { id: "s1s1e2", title: "2. rész", iframe: "https://videa.hu/player?v=SVYXkGUZRuhBF0Mc" }
                ]
            }
        ]
    },
    {
        id: "series2",
        title: "Ginny és Georgia",
        description: "Az újrakezdés reményében a tinédzser Ginny és édesanyja, Georgia új városba költözik. Ám Georgia múltjának titkai összetörhetik álmaikat.",
        thumbnail: "assets/ginny_and_georgia.png",
        genre: "Dráma",
        year: "2021",
        age: "16+",
        seasons: [
            {
                season: 1,
                episodes: [
                    { id: "s2s1e1", title: "1. rész", iframe: "https://videa.hu/player?v=Szmkx4Gh6SEWAePU" },
                    { id: "s2s1e2", title: "2. rész", iframe: "https://videa.hu/player?v=uwXUFpiYnhYqhKYP" },
                    { id: "s2s1e3", title: "3. rész", iframe: "https://videa.hu/player?v=fJ73CyaQoCRhZpfd" },
                    { id: "s2s1e4", title: "4. rész", iframe: "https://videa.hu/player?v=lf8okFRC47gTnS6u" },
                    { id: "s2s1e5", title: "5. rész", iframe: "https://videa.hu/player?v=YlkKPbNqSPe3q4zs" },
                    { id: "s2s1e6", title: "6. rész", iframe: "https://videa.hu/player?v=lgAdqXeMMVTmRUk4" },
                    { id: "s2s1e7", title: "7. rész", iframe: "https://videa.hu/player?v=tWmrK2EzpUsVLs8p" },
                    { id: "s2s1e8", title: "8. rész", iframe: "https://videa.hu/player?v=zFINp66VXLeyfP82" },
                    { id: "s2s1e9", title: "9. rész", iframe: "https://videa.hu/player?v=4TEvvsVD3EijQoCk" },
                    { id: "s2s1e10", title: "10. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                ]
            }
        ]
    }
];


// ===============================
// DOM
// ===============================

const moviesRow = document.getElementById("movies-row");
const seriesRow = document.getElementById("series-row");
const continueRow = document.getElementById("continue-row");
const recommendedRow = document.getElementById("recommended-row");

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

const themeToggle = document.getElementById("themeToggle");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


// ===============================
// TÉMA
// ===============================

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", document.documentElement.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
}


// ===============================
// KÁRTYA LÉTREHOZÁSA
// ===============================

function createCard(item, typeText, clickHandler) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${item.thumbnail}')`;

    const info = document.createElement("div");
    info.className = "card-info";

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = item.title;

    const type = document.createElement("div");
    type.className = "card-type";
    type.textContent = typeText;

    info.appendChild(title);
    info.appendChild(type);
    card.appendChild(info);

    // progress bar (ha van)
    const saved = localStorage.getItem("progress_" + item.id);
    if (saved) {
        const data = JSON.parse(saved);
        const percent = Math.min((data.time / 1200) * 100, 100);
        const bar = document.createElement("div");
        bar.className = "card-progress";
        bar.style.width = percent + "%";
        card.appendChild(bar);
    }

    // hover preview – ha van iframe
    if (item.iframe) {
        const preview = document.createElement("div");
        preview.className = "card-preview";

        const iframe = document.createElement("iframe");
        iframe.src = item.iframe + "&autoplay=1&mute=1";
        iframe.allowFullscreen = true;
        iframe.setAttribute("allow", "autoplay");

        preview.appendChild(iframe);
        card.appendChild(preview);

        let previewTimeout;

        card.addEventListener("mouseenter", () => {
            previewTimeout = setTimeout(() => {
                preview.style.display = "flex";
            }, 600);
        });

        card.addEventListener("mouseleave", () => {
            clearTimeout(previewTimeout);
            preview.style.display = "none";
            iframe.src = item.iframe + "&autoplay=1&mute=1";
        });
    }

    // hover info panel
    const infoPanel = document.createElement("div");
    infoPanel.className = "card-info-panel";
    infoPanel.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description || "Nincs leírás"}</p>
        <div class="meta">
            ${item.genre || "Ismeretlen műfaj"} • 
            ${item.year || "Ismeretlen év"} • 
            ${item.age || "N/A"}
        </div>
    `;
    card.appendChild(infoPanel);

    card.addEventListener("click", clickHandler);
    return card;
}


// ===============================
// RENDERELÉS
// ===============================

function renderMovies() {
    moviesRow.innerHTML = "";
    movies.forEach(movie => {
        const card = createCard(movie, "Film", () => openMovie(movie));
        moviesRow.appendChild(card);
    });
}

function renderSeries() {
    seriesRow.innerHTML = "";
    series.forEach(serie => {
        const card = createCard(serie, "Sorozat", () => openSeries(serie));
        seriesRow.appendChild(card);
    });
}


// ===============================
// MODAL
// ===============================

function openModal(html) {
    modalContent.innerHTML = html;
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
    setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => {
        overlay.classList.remove("visible");
        modalContent.innerHTML = "";
    }, 300);
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
});


// ===============================
// PROGRESS
// ===============================

function saveProgress(id, timeSeconds) {
    localStorage.setItem("progress_" + id, JSON.stringify({
        time: timeSeconds,
        expires: Date.now() + 3 * 24 * 60 * 60 * 1000
    }));
}

function loadProgress(id) {
    const raw = localStorage.getItem("progress_" + id);
    if (!raw) return null;

    const data = JSON.parse(raw);
    if (data.expires <= Date.now()) {
        localStorage.removeItem("progress_" + id);
        return null;
    }
    return data;
}


// ===============================
// FILM
// ===============================

function openMovie(movie) {
    let lastTime = loadProgress(movie.id)?.time || 0;

    openModal(`
        <h1>${movie.title}</h1>
        <p>${movie.description}</p>
        <div class="video-wrapper">
            <iframe width="100%" height="480"
                src="${movie.iframe}&autoplay=1"
                allow="autoplay"
                allowfullscreen
                frameborder="0">
            </iframe>
        </div>
    `);

    const interval = setInterval(() => {
        lastTime += 5;
        saveProgress(movie.id, lastTime);
    }, 5000);

    const stop = () => clearInterval(interval);
    overlay.addEventListener("click", stop, { once: true });
    modalClose.addEventListener("click", stop, { once: true });
}


// ===============================
// SOROZAT
// ===============================

function openSeries(serie) {
    let html = `
        <h1>${serie.title}</h1>
        <p>${serie.description}</p>
        <div id="series-player" style="position:relative;"></div>
        <div class="episode-list">
    `;

    serie.seasons.forEach(season => {
        html += `<div class="episode-season">${season.season}. évad</div>`;
        season.episodes.forEach(ep => {
            html += `
                <div class="episode-item" data-id="${ep.id}" data-link="${ep.iframe}" data-title="${ep.title}">
                    ${ep.title}
                </div>
            `;
        });
    });

    html += `</div>`;
    openModal(html);

    const player = modalContent.querySelector("#series-player");
    const items = modalContent.querySelectorAll(".episode-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const epId = item.dataset.id;
            const link = item.dataset.link;
            const title = item.dataset.title;

            let lastTime = loadProgress(epId)?.time || 0;

            player.innerHTML = `
                <h3>${title}</h3>
                <div class="video-wrapper">
                    <iframe width="100%" height="480"
                        src="${link}&autoplay=1"
                        allow="autoplay"
                        allowfullscreen
                        frameborder="0">
                    </iframe>
                </div>
            `;

            const countdown = document.createElement("div");
            countdown.className = "next-episode-countdown";
            player.appendChild(countdown);

            const interval = setInterval(() => {
                lastTime += 5;
                saveProgress(epId, lastTime);

                if (lastTime >= 1200) {
                    clearInterval(interval);

                    const nextEp = findNextEpisode(serie, epId);
                    if (!nextEp) {
                        countdown.style.display = "none";
                        return;
                    }

                    let timeLeft = 5;
                    countdown.style.display = "block";
                    countdown.textContent = `Következő epizód ${timeLeft}`;

                    const timer = setInterval(() => {
                        timeLeft--;
                        countdown.textContent = `Következő epizód ${timeLeft}`;

                        if (timeLeft <= 0) {
                            clearInterval(timer);
                            countdown.remove();

                            openSeries(serie);
                            setTimeout(() => {
                                const target = modalContent.querySelector(`.episode-item[data-id="${nextEp.id}"]`);
                                if (target) target.click();
                            }, 300);
                        }
                    }, 1000);
                }
            }, 5000);

            const stop = () => clearInterval(interval);
            overlay.addEventListener("click", stop, { once: true });
            modalClose.addEventListener("click", stop, { once: true });
        });
    });
}

function findNextEpisode(serie, currentId) {
    for (const season of serie.seasons) {
        for (let i = 0; i < season.episodes.length; i++) {
            if (season.episodes[i].id === currentId) {
                return season.episodes[i + 1] || null;
            }
        }
    }
    return null;
}


// ===============================
// FOLYTASD A NÉZÉST
// ===============================

function renderContinueWatching() {
    continueRow.innerHTML = "";

    const items = [];

    Object.keys(localStorage).forEach(key => {
        if (!key.startsWith("progress_")) return;

        const id = key.replace("progress_", "");
        const saved = JSON.parse(localStorage.getItem(key));
        if (!saved || saved.expires <= Date.now()) return;

        const movie = movies.find(m => m.id === id);
        if (movie) {
            items.push({
                id: movie.id,
                title: movie.title,
                thumbnail: movie.thumbnail,
                click: () => openMovie(movie)
            });
            return;
        }

        series.forEach(serie => {
            serie.seasons.forEach(season => {
                season.episodes.forEach(ep => {
                    if (ep.id === id) {
                        items.push({
                            id: ep.id,
                            title: `${serie.title} – ${ep.title}`,
                            thumbnail: serie.thumbnail,
                            click: () => {
                                openSeries(serie);
                                setTimeout(() => {
                                    const target = modalContent.querySelector(`.episode-item[data-id="${ep.id}"]`);
                                    if (target) target.click();
                                }, 300);
                            }
                        });
                    }
                });
            });
        });
    });

    items.slice(0, 3).forEach(item => {
        const card = createCard(item, "Folytasd", item.click);
        continueRow.appendChild(card);
    });
}


// ===============================
// KERESŐ
// ===============================

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (text.length === 0) {
        searchResults.style.display = "none";
        return;
    }

    searchResults.style.display = "flex";

    const results = [];

    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(text)) {
            results.push({
                id: movie.id,
                title: movie.title,
                thumbnail: movie.thumbnail,
                description: movie.description,
                genre: movie.genre,
                year: movie.year,
                age: movie.age,
                iframe: movie.iframe,
                click: () => openMovie(movie)
            });
        }
    });

    series.forEach(serie => {
        if (serie.title.toLowerCase().includes(text)) {
            results.push({
                id: serie.id,
                title: serie.title,
                thumbnail: serie.thumbnail,
                description: serie.description,
                genre: serie.genre,
                year: serie.year,
                age: serie.age,
                click: () => openSeries(serie)
            });
        }

        serie.seasons.forEach(season => {
            season.episodes.forEach(ep => {
                if (ep.title.toLowerCase().includes(text)) {
                    results.push({
                        id: ep.id,
                        title: `${serie.title} – ${ep.title}`,
                        thumbnail: serie.thumbnail,
                        description: serie.description,
                        genre: serie.genre,
                        year: serie.year,
                        age: serie.age,
                        iframe: ep.iframe,
                        click: () => {
                            openSeries(serie);
                            setTimeout(() => {
                                const target = modalContent.querySelector(`.episode-item[data-id="${ep.id}"]`);
                                if (target) target.click();
                            }, 300);
                        }
                    });
                }
            });
        });
    });

    results.forEach(item => {
        const card = createCard(item, "Találat", item.click);
        searchResults.appendChild(card);
    });
});


// ===============================
// AJÁNLOTT NEKED
// ===============================

function renderRecommended() {
    if (!recommendedRow) return;
    recommendedRow.innerHTML = "";

    const watchedIds = Object.keys(localStorage)
        .filter(k => k.startsWith("progress_"))
        .map(k => k.replace("progress_", ""));

    const pool = [
        ...movies.map(m => ({ ...m, type: "Film" })),
        ...series.map(s => ({ ...s, type: "Sorozat" }))
    ].filter(item => !watchedIds.includes(item.id));

    pool.sort(() => Math.random() - 0.5);

    pool.slice(0, 10).forEach(item => {
        const click =
            item.type === "Film"
                ? () => openMovie(item)
                : () => openSeries(item);

        const card = createCard(item, item.type, click);
        recommendedRow.appendChild(card);
    });
}

const rows = document.querySelectorAll(".row");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

rows.forEach(row => observer.observe(row));

// ===============================
// INIT
// ===============================

renderMovies();
renderSeries();
renderContinueWatching();
renderRecommended();
