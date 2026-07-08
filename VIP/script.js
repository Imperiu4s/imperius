const movies = [
    {
        id: "movie1",
        title: "K-Pop Démon Vadászok",
        description: "Amikor Rumi, Mira és Zoey K-pop-szupersztárok koncertje nem telt házas, a titkos képességeiket használják, hogy megvédjék rajongóikat a természetfeletti fenyegetésektől.",
        thumbnail: "../assets/kpop.png",
        iframe: "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf",
        year: "2025",
        age: "10+"
    },
    {
        id: "movie2",
        title: "Romantikus Esték",
        description: "Romantikus történet két idegen találkozásáról.",
        thumbnail: "../assets/kep.png",
        iframe: "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf",
        year: "2023",
        age: "12+"
    },
    {
        id: "movie3",
        title: "K-Pop Démon Vadászok",
        description: "Amikor Rumi, Mira és Zoey K-pop-szupersztárok koncertje nem telt házas...",
        thumbnail: "../assets/kpop.png",
        iframe: "https://videa.hu/player?v=zYJUZZ0GBZjuZJPf",
        year: "2009",
        age: "12+"
    },

];

const series = [
    {
        id: "series1",
        title: "Stranger Things",
        description: "Egy fiatal fiú eltűnését követően a kisváros lakói titkos kísérletekre, rémisztő természetfeletti erőkre és egy furcsa kislányra derítenek fényt.",
        thumbnail: "../assets/stranger_things.png",
        year: "2025",
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
        description: "A szabad szellemű Georgia két gyerekével, Ginnyvel és Austinnal északra költözik, hogy új életet kezdjenek, azonban az új kezdethez vezető út rögösnek bizonyul.",
        thumbnail: "../assets/ginny_and_georgia.png",
        year: "2025",
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
                    { id: "s2s1e10", title: "10. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" }
                ]
            },
            {
                season: 2,
                episodes: [
                    { id: "s2s2e1", title: "1. rész", iframe: "https://videa.hu/player?v=ksBPcWpeVf3wTSAL" },
                    { id: "s2s2e2", title: "2. rész", iframe: "https://videa.hu/player?v=HV3CQ4pQrpAQLVDp" },
                    { id: "s2s2e3", title: "3. rész", iframe: "https://videa.hu/player?v=CgHjq7tccrAoA5Zw" },
                    { id: "s2s2e4", title: "4. rész", iframe: "https://videa.hu/player?v=Djwna2eQLjKwkbHG" },
                    { id: "s2s2e5", title: "5. rész", iframe: "https://videa.hu/player?v=OHr5S4C2vtrV9peD" },
                    { id: "s2s2e6", title: "6. rész", iframe: "https://videa.hu/player?v=R4lmiWhnbxJcnldZ" },
                    { id: "s2s2e7", title: "7. rész", iframe: "https://videa.hu/player?v=DkNsaRqk4j7TqRPv" },
                    { id: "s2s2e8", title: "8. rész", iframe: "https://videa.hu/player?v=RYGxID3qd4wBcGQY" },
                    { id: "s2s2e9", title: "9. rész", iframe: "https://videa.hu/player?v=Fh5y2Leqs1jD9GXA" },
                    { id: "s2s2e10", title: "10. rész", iframe: "https://videa.hu/player?v=cffLj9zXLWT80Fgs" }
                ]
            },
            {
                season: 3,
                episodes: [
                    { id: "s2s3e1", title: "1. rész", iframe: "https://videa.hu/player?v=HbdiztADlls5OmA0" },
                    { id: "s2s3e2", title: "2. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e3", title: "3. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e4", title: "4. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e5", title: "5. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e6", title: "6. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e7", title: "7. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e8", title: "8. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e9", title: "9. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" },
                    { id: "s2s3e10", title: "10. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" }
                ]
            }
        ]
    }
];


const movieGrid = document.getElementById('movie-grid');
const seriesGrid = document.getElementById('series-grid');
const modal = document.getElementById('modal');
const player = document.getElementById('player');
const shield = document.getElementById('video-shield');

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeBtn.innerText = "Sötét mód";
    } else {
        themeBtn.innerText = "Világos mód";
    }
}

const VALID_PASSWORDS = [
    "VIP@Imperius",
    "Premo2026",
    "MoziEsti99",
    "VendegPass"
];

const LOGIN_EXPIRY_TIME = 3 * 24 * 60 * 60 * 1000;

function initApp() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLoginTime = localStorage.getItem('loginTime');
    const currentTime = new Date().getTime();

    if (isLoggedIn && loginLoginTime) {
        if (currentTime - parseInt(loginLoginTime) > LOGIN_EXPIRY_TIME) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loginTime');
            document.body.style.overflow = 'hidden';
            setupLoginListeners();
        } else {
            showMainPage();
        }
    } else {
        document.body.style.overflow = 'hidden';
        setupLoginListeners();
    }

    renderGrid(movies, 'movie-grid', 'movie');
    renderGrid(series, 'series-grid', 'series');
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', function (e) {
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });

    if (shield && player) {
        shield.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        shield.addEventListener('click', () => {
            shield.style.display = 'none';
            setTimeout(() => {
                shield.style.display = 'block';
            }, 3000);
        });
    }
}

function setupLoginListeners() {
    const passInput = document.getElementById('password-input');
    if (passInput) {
        passInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
    }
}

function checkPassword() {
    const inputField = document.getElementById('password-input');
    const errorMsg = document.getElementById('login-error-msg');
    const enteredPassword = inputField.value.trim();

    if (VALID_PASSWORDS.includes(enteredPassword)) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', new Date().getTime().toString());

        showMainPage();
    } else {
        errorMsg.classList.remove('hidden');
        inputField.value = '';
        inputField.focus();
    }
}

function showMainPage() {
    const loginGate = document.getElementById('login-gate');
    const mainNav = document.getElementById('main-nav');
    const mainContent = document.getElementById('main-content');

    if (loginGate) loginGate.classList.add('hidden');
    if (mainNav) mainNav.classList.remove('hidden');
    if (mainContent) mainContent.classList.remove('hidden');
    document.body.style.overflow = '';
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    document.body.style.overflow = 'hidden';
    window.location.reload();
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}




function renderGrid(data, gridId, type) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<div class="no-results">Nincs a keresésnek megfelelő ${type === 'movie' ? 'film' : 'sorozat'}.</div>`;
        return;
    }

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="card-bg" style="background-image: url('${item.thumbnail}');"></div>
            <div class="card-desc">
                <div class="card-title-text">${item.title}</div>
                <div class="card-meta-text">
                    <span style="color: #d34646">${item.year}</span>
                    <span class="age-tag">${item.age}</span>
                </div>
            </div>
        `;
        div.onclick = () => openModal(item, type);
        grid.appendChild(div);
    });
}

function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    const query = searchInput.value.toLowerCase().trim();

    if (searchInput.value.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );

    const filteredSeries = series.filter(show =>
        show.title.toLowerCase().includes(query)
    );

    renderGrid(filteredMovies, 'movie-grid', 'movie');
    renderGrid(filteredSeries, 'series-grid', 'series');
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');

    searchInput.value = '';
    handleSearch();
    searchInput.focus();
}


function openModal(item, type) {
    modal.classList.remove('hidden');

    document.body.style.overflow = 'hidden';

    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-year').innerText = item.year;
    document.getElementById('modal-age').innerText = item.age;
    document.getElementById('modal-description').innerText = item.description;

    const selectorBox = document.getElementById('selector-box');
    const epList = document.getElementById('ep-list');

    if (type === 'series') {
        selectorBox.style.display = 'block';
        epList.style.display = 'flex';
        window.currentActiveSeries = item;

        selectorBox.innerHTML = `
            <select class="season-select" onchange="changeSeason(this.value)">
                ${item.seasons.map((s, i) => `<option value="${i}">${s.season}. Évad</option>`).join('')}
            </select>
        `;

        updateEpisodeList(item.seasons[0].episodes);
        player.src = item.seasons[0].episodes[0].iframe;
    } else {
        selectorBox.style.display = 'none';
        epList.style.display = 'none';
        player.src = item.iframe;
    }
}

function changeSeason(seasonIndex) {
    const selectedSeason = window.currentActiveSeries.seasons[seasonIndex];
    if (selectedSeason && selectedSeason.episodes.length > 0) {
        updateEpisodeList(selectedSeason.episodes);
        player.src = selectedSeason.episodes[0].iframe;
    }
}

function updateEpisodeList(episodes) {
    const listContainer = document.getElementById('ep-list');
    listContainer.innerHTML = episodes.map(ep => `
        <div class="ep-item" onclick="player.src='${ep.iframe}'">
            <span>${ep.title}</span>
            <span style="color: #E50914; font-size: 0.9rem;">▶</span>
        </div>
    `).join('');
}

function closeModal() {
    modal.classList.add('hidden');
    player.src = '';

    document.body.style.overflow = '';
}

initApp();