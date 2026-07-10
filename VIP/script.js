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
        title: "A kém",
        description: "Susan Cooper, a háttérben dolgozó CIA-elemző kénytelen terepre lépni, hogy megakadályozza egy nukleáris fegyver eladását, miközben veszélyes bűnözőket és kettős játékot játszó ügynököket próbál leleplezni.",
        thumbnail: "../assets/a_kém.png",
        iframe: "https://videa.hu/player?v=IdWDoVY6krd7gBkM",
        year: "2015",
        age: "16+"
    },
    {
        id: "movie3",
        title: "365 nap",
        description: "Egy nő egy befolyásos maffiafőnök áldozatául esik, aki elrabolja, és egy évet ad neki, hogy beleszeressen.",
        thumbnail: "../assets/365nap.png",
        iframe: "https://videa.hu/player?v=YAeRUsWR2JC81m1S",
        year: "2020",
        age: "16+"
    },
    {
        id: "movie4",
        title: "365 nap: Ma",
        description: "Laura és Massimo visszatér, és erősebb, mint valaha. De Massimo családi kötelékei és a Laura szívére pályázó titokzatos férfi megnehezítik a szerelmesek életét.",
        thumbnail: "../assets/365napma.png",
        iframe: "https://videa.hu/player?v=XuCWhGFzj17ezFnM",
        year: "2022",
        age: "16+"
    },
    {
        id: "movie5",
        title: "365 nap: Egy újabb nap",
        description: "Laura és Massimo kapcsolata egy hajszálon függ, miközben próbálják megoldani bizalmi problémáikat, Nacho pedig kitartóan azon ügyködik, hogy elszakítsa őket egymástól.",
        thumbnail: "../assets/365napegyújabbnap.png",
        iframe: "https://videa.hu/player?v=cN8MNjmVFJK7sUmk",
        year: "2022",
        age: "18+"
    },
    {
        id: "movie6",
        title: "Sokkal több mint testőr",
        description: "Egy felhajtást kerülő testőrnek életben kell tartania egy sztártanút – aki történetesen egy lobbanékony bérgyilkos –, hogy vallomást tehessen egy brutális diktátor ellen.",
        thumbnail: "../assets/sokkal_több_mint_testőr_1.png",
        iframe: "https://videa.hu/player?v=shuMFmlaiNE41Wlh",
        year: "2017",
        age: "16+"
    },
    {
        id: "movie7",
        title: "Sokkal több mint testőr 2",
        description: "A testőr Michael Bryce Darius Kincaid bérgyilkossal és annak Sonia nevű feleségével közösen belekeveredik egy globális összeesküvésbe ebben a fergeteges vígjátékban.",
        thumbnail: "../assets/sokkal_több_mint_testőr_2.png",
        iframe: "https://videa.hu/player?v=tEuZPQAFuaoAPAqF",
        year: "2021",
        age: "16+"
    },
    {
        id: "movie8",
        title: "Nász-ajánlat",
        description: "Egy könyvkiadó idegesítő főszerkesztője megtudja, hogy elutasították a vízumkérelmét, és ki fogják toloncolni az országból, ezért rákényszeríti asszisztensét, hogy feleségül vegye.",
        thumbnail: "../assets/nász_ajánlat.png",
        iframe: "https://videa.hu/player?v=gI6XQUhA7wIyxVZY",
        year: "2009",
        age: "13+"
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
                    { id: "s2s3e2", title: "2. rész", iframe: "https://videa.hu/player?v=LexUI1Al2xtvtTk8" },
                    { id: "s2s3e3", title: "3. rész", iframe: "https://videa.hu/player?v=PlEikhNkUErC7U5c" },
                    { id: "s2s3e4", title: "4. rész", iframe: "https://videa.hu/player?v=PGwBcBiVgPH1eDY8" },
                    { id: "s2s3e5", title: "5. rész", iframe: "https://videa.hu/player?v=Hiria3Q7Kj77pI58" },
                    { id: "s2s3e6", title: "6. rész", iframe: "https://videa.hu/player?v=w9rsspw88HsbvYu0" },
                    { id: "s2s3e7", title: "7. rész", iframe: "https://videa.hu/player?v=79r3b5VcBAEzrjWZ" },
                    { id: "s2s3e8", title: "8. rész", iframe: "https://videa.hu/player?v=tifsYAtqUCkmo0Iz" },
                    { id: "s2s3e9", title: "9. rész", iframe: "https://videa.hu/player?v=0INUbGFHfP0dIjY8" },
                    { id: "s2s3e10", title: "10. rész", iframe: "https://videa.hu/player?v=CH7UZgUqhBVsvUlc" }
                ]
            }
        ]
    },
    {
        id: "series3",
        title: "Modern család",
        description: "A modern család három különböző család életét mutatja be egy dokumentumfilmes stáb kameráján keresztül. Ennek a bonyolult, zűrös, szerető és modern családnak Jay Pritchett a feje.",
        thumbnail: "../assets/modern_család.png",
        year: "2009",
        age: "12+",
        seasons: [
            {
                season: 1,
                episodes: [
                    { id: "s3s1e1", title: "1. rész", iframe: "https://videa.hu/player?v=Szmkx4Gh6SEWAePU" },
                    { id: "s3s1e2", title: "2. rész", iframe: "https://videa.hu/player?v=uwXUFpiYnhYqhKYP" },
                    { id: "s3s1e3", title: "3. rész", iframe: "https://videa.hu/player?v=fJ73CyaQoCRhZpfd" },
                    { id: "s3s1e4", title: "4. rész", iframe: "https://videa.hu/player?v=lf8okFRC47gTnS6u" },
                    { id: "s3s1e5", title: "5. rész", iframe: "https://videa.hu/player?v=YlkKPbNqSPe3q4zs" },
                    { id: "s3s1e6", title: "6. rész", iframe: "https://videa.hu/player?v=lgAdqXeMMVTmRUk4" },
                    { id: "s3s1e7", title: "7. rész", iframe: "https://videa.hu/player?v=tWmrK2EzpUsVLs8p" },
                    { id: "s3s1e8", title: "8. rész", iframe: "https://videa.hu/player?v=zFINp66VXLeyfP82" },
                    { id: "s3s1e9", title: "9. rész", iframe: "https://videa.hu/player?v=4TEvvsVD3EijQoCk" },
                    { id: "s3s1e10", title: "10. rész", iframe: "https://videa.hu/player?v=MO1CvTWz4uJUHfpe" }
                ]
            },
            {
                season: 2,
                episodes: [
                    { id: "s3s2e1", title: "1. rész", iframe: "https://videa.hu/player?v=ksBPcWpeVf3wTSAL" },
                    { id: "s3s2e2", title: "2. rész", iframe: "https://videa.hu/player?v=HV3CQ4pQrpAQLVDp" },
                    { id: "s3s2e3", title: "3. rész", iframe: "https://videa.hu/player?v=CgHjq7tccrAoA5Zw" },
                    { id: "s3s2e4", title: "4. rész", iframe: "https://videa.hu/player?v=Djwna2eQLjKwkbHG" },
                    { id: "s3s2e5", title: "5. rész", iframe: "https://videa.hu/player?v=OHr5S4C2vtrV9peD" },
                    { id: "s2s2e6", title: "6. rész", iframe: "https://videa.hu/player?v=R4lmiWhnbxJcnldZ" },
                    { id: "s3s2e7", title: "7. rész", iframe: "https://videa.hu/player?v=DkNsaRqk4j7TqRPv" },
                    { id: "s3s2e8", title: "8. rész", iframe: "https://videa.hu/player?v=RYGxID3qd4wBcGQY" },
                    { id: "s3s2e9", title: "9. rész", iframe: "https://videa.hu/player?v=Fh5y2Leqs1jD9GXA" },
                    { id: "s3s2e10", title: "10. rész", iframe: "https://videa.hu/player?v=cffLj9zXLWT80Fgs" }
                ]
            },
            {
                season: 3,
                episodes: [
                    { id: "s3s3e1", title: "1. rész", iframe: "https://videa.hu/player?v=HbdiztADlls5OmA0" },
                    { id: "s3s3e2", title: "2. rész", iframe: "https://videa.hu/player?v=LexUI1Al2xtvtTk8" },
                    { id: "s3s3e3", title: "3. rész", iframe: "https://videa.hu/player?v=PlEikhNkUErC7U5c" },
                    { id: "s3s3e4", title: "4. rész", iframe: "https://videa.hu/player?v=PGwBcBiVgPH1eDY8" },
                    { id: "s3s3e5", title: "5. rész", iframe: "https://videa.hu/player?v=Hiria3Q7Kj77pI58" },
                    { id: "s3s3e6", title: "6. rész", iframe: "https://videa.hu/player?v=w9rsspw88HsbvYu0" },
                    { id: "s3s3e7", title: "7. rész", iframe: "https://videa.hu/player?v=79r3b5VcBAEzrjWZ" },
                    { id: "s3s3e8", title: "8. rész", iframe: "https://videa.hu/player?v=tifsYAtqUCkmo0Iz" },
                    { id: "s3s3e9", title: "9. rész", iframe: "https://videa.hu/player?v=0INUbGFHfP0dIjY8" },
                    { id: "s3s3e10", title: "10. rész", iframe: "https://videa.hu/player?v=CH7UZgUqhBVsvUlc" }
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
    { password: "VIP@Imperius", expireDate: "2026-08-15" }, // Ez a jelszó 2026. augusztust 15-ig él
    { password: "Premo2026",    expireDate: "2026-12-31" }, // Ez az év végéig jó
    { password: "MoziEsti99",   expireDate: "2026-07-20" }, // Ez hamarosan lejár
    { password: "VendegPass",   expireDate: "2026-07-11" }  // Példa egy gyorsan lejáró jelszóra
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

    window.addEventListener('click', function () {
        const dropdown = document.getElementById('season-dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    });
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

    // Megkeressük a beírt jelszót a listánkban
    const foundPasswordObj = VALID_PASSWORDS.find(p => p.password === enteredPassword);

    if (foundPasswordObj) {
        // Lekérjük a mai dátumot és a jelszó lejárati dátumát időbélyegként (timestamp)
        const today = new Date().getTime();
        const expiration = new Date(foundPasswordObj.expireDate).getTime();

        // Ha a mai nap már későbbi, mint a lejárati idő, akkor elutasítjuk
        if (today > expiration) {
            alert("Az előfizetésed lejárt! Fizess elő újból és regisztráld újra jelszavad hogy használhasd a streaming szolgáltatásunkat!");
            inputField.value = '';
            return;
        }

        // Ha még nem járt le, sikeres belépés
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', new Date().getTime().toString());

        showMainPage();
    } else {
        // Ha nem is létezik ilyen jelszó
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

function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('season-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function selectSeason(seasonIndex) {
    const label = document.getElementById('selected-season-label');
    const dropdown = document.getElementById('season-dropdown');

    const selectedSeason = window.currentActiveSeries.seasons[seasonIndex];

    if (selectedSeason) {
        if (label) label.innerText = `${selectedSeason.season}. Évad`;

        if (selectedSeason.episodes.length > 0) {
            updateEpisodeList(selectedSeason.episodes);
            player.src = selectedSeason.episodes[0].iframe;
        }
    }

    if (dropdown) dropdown.classList.remove('active');
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
            <div class="custom-dropdown" id="season-dropdown">
                <div class="dropdown-trigger" onclick="toggleDropdown(event)">
                    <span id="selected-season-label">${item.seasons[0].season}. Évad</span>
                    <span class="dropdown-arrow">▼</span>
                </div>
                <ul class="dropdown-menu">
                    ${item.seasons.map((s, i) => `
                        <li onclick="selectSeason(${i})">${s.season}. Évad</li>
                    `).join('')}
                </ul>
            </div>
        `;

        updateEpisodeList(item.seasons[0].episodes);
        player.src = item.seasons[0].episodes[0].iframe;
    } else {
        selectorBox.style.display = 'none';
        epList.style.display = 'none';
        player.src = item.iframe;
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