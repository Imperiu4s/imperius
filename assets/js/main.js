// =========================================================
// IMPERIUS.HU — shared front-end logic
// =========================================================

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function currentLang() {
    var l = document.documentElement.getAttribute('data-lang');
    return (l === 'en' || l === 'hu') ? l : 'hu';
  }
  function dict() { return window.ImperiusI18N.get(currentLang()); }

  /* ---------- file:// compatibility for the extension-less links ----------
     Internal links point at clean paths like "rolam" or "./" so that a
     real web server (see .htaccess) can serve them without ".html" in
     the address bar. That rewriting only exists on an actual server,
     though — opened directly as a file (double-clicking index.html),
     there's no server to resolve "rolam" to "rolam.html", so the browser
     just reports the file missing. resolveHref() maps a clean path back
     to its real filename in that case; every internal link (existing and
     later-added, e.g. search results) is routed through it below. */
  var isFileProtocol = location.protocol === 'file:';
  function resolveHref(href) {
    if (!isFileProtocol || !href) return href;
    if (/^(https?:|mailto:|#)/.test(href)) return href;
    if (href === './' || href === '.') return 'index.html';
    if (!/\.html$/i.test(href) && href.indexOf('/') === -1) return href + '.html';
    return href;
  }
  if (isFileProtocol) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      a.setAttribute('href', resolveHref(a.getAttribute('href')));
    });
  }

  /* ---------- Ambient "code" background ----------
     Injected once here (rather than pasted into every HTML file) so
     it's automatically on every page. Skipped on narrow screens (it'd
     just compete with the content there) and under reduced-motion. */
  // Hiding on narrow screens is done in CSS (a media query on
  // .code-bg), not here — checking window.innerWidth once at this
  // exact moment during page load is fragile (it can transiently read
  // 0 before the browser has settled a layout) and wouldn't react if
  // the window is resized later anyway. CSS handles both correctly.
  if (!reducedMotion) {
    var CODE_LINES = [
      'function renderWorld(seed) {', 'return chunks.map(c => c.render());',
      '}', 'const player = new Entity();', 'player.spawn(0, 64, 0);',
      'if (block.type === "TNT") explode();', 'world.tick(delta);',
      'class Imperius extends Creator {', 'upload(video);', '}',
      'discord.connect("dc.imperius.hu");', 'youtube.fetchLatest();',
      'let health = 20; // full hearts', 'mine(block);', 'craft(item);',
      'while (climbing) level++;', 'render(frame => frame + 1);',
      'export default Imperius;', 'npm run build -- --watch',
      'git commit -m "new video"', 'console.log("gg");',
      '// TODO: sleep more', 'async function loadChunk() {',
      'await io.read(chunk);', '}', 'const stream = isLive();',
      'if (stream) notify(subscribers);', 'const level = tree.climb();',
      'save(progress); // localStorage',
      '// project: Solaryn', 'launch("Solaryn"); // coming soon',
    ];
    var codeBg = document.createElement('div');
    codeBg.className = 'code-bg';
    codeBg.setAttribute('aria-hidden', 'true');
    var columnCount = 7;
    for (var c = 0; c < columnCount; c++) {
      var linesPerSet = 14;
      var set = [];
      for (var i = 0; i < linesPerSet; i++) {
        set.push(CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)]);
      }
      var col = document.createElement('div');
      col.className = 'code-col';
      // The content is the line set twice back-to-back; animating
      // translateY from 0 to -50% then loops seamlessly.
      col.textContent = set.join('\n') + '\n' + set.join('\n');
      col.style.animationDuration = (34 + Math.random() * 22) + 's';
      col.style.animationDelay = (-Math.random() * 40) + 's';
      codeBg.appendChild(col);
    }
    document.body.insertBefore(codeBg, document.body.firstChild);
  }

  /* ---------- Flashy preloader ---------- */
  var preloader = document.getElementById('preloader');
  var percentEl = document.querySelector('[data-loader-percent]');
  var statusEl = document.querySelector('[data-loader-status]');
  var fillEl = document.querySelector('[data-loader-fill]');

  function runPreloader() {
    if (!preloader) return Promise.resolve();
    var d = dict();
    var statuses = [d.loader_status_1, d.loader_status_2, d.loader_status_3, d.loader_status_4];
    var statusIdx = 0;
    var pct = 0;
    var statusTimer = setInterval(function () {
      statusIdx = (statusIdx + 1) % statuses.length;
      if (statusEl) statusEl.textContent = statuses[statusIdx];
    }, 550);
    if (statusEl) statusEl.textContent = statuses[0];

    var pctTimer = setInterval(function () {
      // Ease toward 90% while we wait for the real load event.
      pct += (90 - pct) * 0.12 + 0.4;
      if (pct > 90) pct = 90;
      if (percentEl) percentEl.textContent = Math.floor(pct) + '%';
      if (fillEl) fillEl.style.width = pct + '%';
    }, 90);

    function finish() {
      clearInterval(statusTimer);
      clearInterval(pctTimer);
      if (percentEl) percentEl.textContent = '100%';
      if (fillEl) fillEl.style.width = '100%';
    }

    // Just enough time to register as an intentional moment, not a
    // wall stalling every navigation — the animation itself carries the
    // "wow", it doesn't need a long forced runway to look good.
    var minDelay = new Promise(function (resolve) { setTimeout(resolve, reducedMotion ? 120 : 450); });
    var pageReady = new Promise(function (resolve) {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve);
    });
    return Promise.all([minDelay, pageReady]).then(function () {
      finish();
      return new Promise(function (resolve) { setTimeout(resolve, 150); });
    });
  }

  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('is-hidden');
    setTimeout(function () { preloader.setAttribute('hidden', ''); }, 450);
  }

  runPreloader().then(hidePreloader);
  setTimeout(hidePreloader, 5000); // safety net

  /* ---------- Theme toggle (persists across pages via localStorage) ---------- */
  var root = document.documentElement;
  var themeToggle = document.querySelector('[data-theme-toggle]');
  // Keeps the current theme/language reflected in the address bar
  // (without navigating) so a plain page refresh — not just clicking
  // an internal link — still preserves them even where localStorage
  // doesn't survive (e.g. some browsers isolate it per file under
  // file://). This is the same fix as the click-interceptor's URL
  // params below, just for "change it here and hit reload" too.
  function syncUrlState() {
    try {
      var url = new URL(location.href);
      url.searchParams.set('theme', root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
      url.searchParams.set('lang', currentLang());
      history.replaceState(null, '', url.toString());
    } catch (e) {}
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('imperius-theme', next); } catch (e) {}
      syncUrlState();
    });
  }
  // Note: if you're opening these files by double-clicking them (file://)
  // some browsers isolate localStorage per file — syncUrlState() above
  // and the link-click handler below carry the choice through the URL
  // instead, so it still survives navigation and reloads either way.

  /* ---------- Language toggle ---------- */
  var langToggle = document.querySelector('[data-lang-toggle]');
  function refreshLangButton() {
    if (langToggle) langToggle.textContent = currentLang() === 'hu' ? '🇬🇧 EN' : '🇭🇺 HU';
  }
  if (langToggle) {
    refreshLangButton();
    langToggle.addEventListener('click', function () {
      window.ImperiusI18N.apply(currentLang() === 'hu' ? 'en' : 'hu');
      syncUrlState();
    });
  }
  document.addEventListener('imperius:langchange', function () {
    refreshLangButton();
    renderVideos();
    renderStats();
    renderYouTubeLive();
    buildSearchIndex();
    // Headings that already finished typing won't replay their reveal —
    // just swap their displayed text to match the new language directly.
    document.querySelectorAll('[data-typewriter]').forEach(function (head) {
      var source = head.querySelector('.tw-source');
      var target = head.querySelector('.tw-target');
      if (source && target && target.textContent) target.textContent = source.textContent.trim();
    });
  });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav link ---------- */
  // URLs are extension-less (e.g. /rolam, not /rolam.html — see .htaccess),
  // so the home page's own path segment is simply empty.
  var path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    var isHome = (href === './' || href === '.') && (path === '' || path === 'index.html');
    if (href === path || isHome) {
      a.classList.add('active');
    }
  });

  /* ---------- Typewriter section reveal ---------- */
  function typeWriter(el, text, speed, onDone) {
    el.textContent = '';
    el.classList.add('typing');
    var i = 0;
    (function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else {
        el.classList.remove('typing');
        if (onDone) onDone();
      }
    })();
  }

  function revealSection(section) {
    var head = section.querySelector('[data-typewriter]');
    var items = Array.prototype.slice.call(section.querySelectorAll('[data-reveal]'));
    var delay = 0;

    if (head) {
      var source = head.querySelector('.tw-source');
      var target = head.querySelector('.tw-target');
      var text = source ? source.textContent.trim() : '';
      if (reducedMotion) {
        target.textContent = text;
      } else {
        typeWriter(target, text, 22);
        delay = Math.min(text.length * 22 + 150, 1400);
      }
      var headWrap = head.closest('[data-reveal]');
      if (headWrap) { headWrap.classList.add('in-view'); items = items.filter(function (el) { return el !== headWrap; }); }
    }

    items.forEach(function (el, idx) {
      var itemDelay = delay + idx * 70;
      el.style.transitionDelay = itemDelay + 'ms';
      el.classList.add('in-view');
      // The stagger delay is only meant for this one reveal transition —
      // left in place afterwards, it would also delay unrelated later
      // transitions on the same element (e.g. a :hover lift), making
      // hovering the card feel sluggish. Clear it once the reveal (plus
      // its transition duration) has finished.
      setTimeout(function () { el.style.transitionDelay = ''; }, itemDelay + 750);
    });
  }

  var scrollSections = document.querySelectorAll('[data-scroll-section]');
  var standaloneReveal = document.querySelectorAll('[data-reveal]:not([data-scroll-section] [data-reveal])');

  if ('IntersectionObserver' in window) {
    var sectionIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revealSection(entry.target);
          sectionIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });
    scrollSections.forEach(function (s) { sectionIO.observe(s); });

    var plainIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          plainIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    standaloneReveal.forEach(function (el) { plainIO.observe(el); });
  } else {
    scrollSections.forEach(revealSection);
    standaloneReveal.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Scroll progress bar ---------- */
  var progressFill = document.querySelector('[data-scroll-progress]');
  if (progressFill) {
    var ticking = false;
    function updateProgress() {
      var scrollTop = document.scrollingElement.scrollTop;
      var height = document.scrollingElement.scrollHeight - window.innerHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      progressFill.style.width = pct + '%';
      ticking = false;
    }
    document.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
    }, { passive: true });
    updateProgress();
  }

  /* ---------- Custom cursor (fine pointers only, respects reduced motion) ---------- */
  if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.innerHTML = '<span class="cursor-ring-mark"></span>';
    document.body.appendChild(ring);
    document.documentElement.classList.add('has-custom-cursor');

    // Remember the last known pointer position across a page navigation
    // (sessionStorage survives it, the physical mouse hasn't moved) so
    // the cursor shows up immediately on the new page instead of
    // staying invisible until the visitor nudges the mouse.
    var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
    try {
      var storedPos = sessionStorage.getItem('imperius-cursor-pos');
      if (storedPos) {
        var parts = storedPos.split(',');
        mouseX = ringX = parseFloat(parts[0]);
        mouseY = ringY = parseFloat(parts[1]);
        ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0)';
        ring.style.opacity = '1';
      }
    } catch (e) {}

    // Tracks the real pointer 1:1, no trailing/catch-up easing — that
    // used to make the reticle visibly lag behind fast mouse movement,
    // reading as "slower than the actual cursor".
    document.addEventListener('mousemove', function (e) {
      mouseX = ringX = e.clientX; mouseY = ringY = e.clientY;
      ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0)';
      if (ring.style.opacity !== '1') ring.style.opacity = '1';
      try { sessionStorage.setItem('imperius-cursor-pos', mouseX + ',' + mouseY); } catch (e) {}
    });
    // Hiding on `mouseleave` also fired when crossing onto the page's
    // own scrollbar (not actually leaving the window), which is why the
    // cursor used to vanish there and need a nudge to come back. Window
    // blur/focus is the correct signal for "really left the browser".
    window.addEventListener('blur', function () { ring.style.opacity = '0'; });
    window.addEventListener('focus', function () {
      if (mouseX > -100) ring.style.opacity = '1';
    });

    var hoverTargets = 'a, button, input, textarea, .card, .filter-btn, [data-nav-toggle], [data-theme-toggle]';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverTargets)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverTargets)) ring.classList.remove('is-hover');
    });
  }

  /* ---------- Soft page transitions for internal links ---------- */
  // Also carries the current theme/language in the URL to the next page.
  // localStorage alone isn't enough: some browsers isolate storage per
  // file when the site is opened via file:// (double-clicking the HTML
  // files) rather than served over http(s), which otherwise makes the
  // theme/language appear to silently "reset" when navigating.
  document.body.classList.add('page-transition-ready');
  // Delegated on document (rather than bound per-link at load time) so
  // it also covers links added later, e.g. search results.
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || a.target === '_blank') return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    document.body.classList.add('page-transition-out');
    var url = new URL(href, location.href);
    url.searchParams.set('theme', root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    url.searchParams.set('lang', currentLang());
    setTimeout(function () { window.location.href = url.toString(); }, 220);
  });

  /* ---------- YouTube video feed (embedded data — no fetch, works from file://) ---------- */
  var PLAY_ICON = '<svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="12" fill="rgba(0,0,0,.55)"/><path d="M10 8.5v7l6-3.5-6-3.5z" fill="white"/></svg>';

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(currentLang() === 'en' ? 'en-GB' : 'hu-HU', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return ''; }
  }

  function videoCard(v) {
    var badge = v.type === 'short' ? 'SHORT' : 'VIDEO';
    return (
      '<a class="card video-card" href="' + v.url + '" target="_blank" rel="noopener">' +
        '<div class="video-thumb">' +
          '<img src="' + v.thumbnail + '" alt="' + v.title.replace(/"/g, '&quot;') + '" loading="lazy">' +
          '<span class="video-badge">' + badge + '</span>' +
          '<div class="play-glyph">' + PLAY_ICON + '</div>' +
        '</div>' +
        '<div class="video-body">' +
          '<h4>' + v.title + '</h4>' +
          '<div class="video-meta">' + formatDate(v.publishedAt) + '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function renderList(container, list) {
    if (!list.length) {
      container.innerHTML = '<p>' + dict().video_fallback_empty + '</p>';
      return;
    }
    container.innerHTML = list.map(videoCard).join('');
  }

  function initFilters(allVideos) {
    var filterRow = document.querySelector('[data-video-filters]');
    var container = document.querySelector('[data-video-list]');
    if (!filterRow || !container || filterRow.dataset.bound) return;
    filterRow.dataset.bound = '1';
    filterRow.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterRow.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        container.dataset.activeFilter = f;
        var filtered = f === 'all' ? allVideos : allVideos.filter(function (v) { return v.type === f; });
        renderList(container, filtered);
      });
    });
  }

  function renderVideos() {
    var videos = window.IMPERIUS_VIDEOS || [];
    document.querySelectorAll('[data-video-list]').forEach(function (container) {
      var limit = parseInt(container.getAttribute('data-limit') || '0', 10);
      if (!videos.length) {
        container.innerHTML = '<p>' + dict().video_fallback_error + '</p>';
        return;
      }
      var activeFilter = container.dataset.activeFilter || 'all';
      var list = activeFilter === 'all' ? videos : videos.filter(function (v) { return v.type === activeFilter; });
      renderList(container, limit ? list.slice(0, limit) : list);
    });
    initFilters(videos);
  }
  renderVideos();

  /* ---------- Live stats (optional — see scripts/fetch-videos.js) ---------- */
  function renderStats() {
    var el = document.querySelector('[data-stats]');
    if (!el) return;
    var s = window.IMPERIUS_STATS;
    var d = dict();
    function fmt(n) {
      return new Intl.NumberFormat(currentLang() === 'en' ? 'en-US' : 'hu-HU').format(n);
    }
    if (!s) {
      el.innerHTML = '<p class="form-note">' + d.stats_fallback + '</p>';
      return;
    }
    el.innerHTML =
      '<div class="stat-card card"><b data-count="' + s.subscriberCount + '">0</b><span>' + d.stats_subscribers + '</span></div>' +
      '<div class="stat-card card"><b data-count="' + s.viewCount + '">0</b><span>' + d.stats_views + '</span></div>' +
      '<div class="stat-card card"><b data-count="' + s.videoCount + '">0</b><span>' + d.stats_videos + '</span></div>';
    el.querySelectorAll('[data-count]').forEach(function (b) {
      var target = parseInt(b.getAttribute('data-count'), 10) || 0;
      if (reducedMotion) { b.textContent = fmt(target); return; }
      var start = 0;
      var duration = 1200;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        b.textContent = fmt(Math.floor(start + (target - start) * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  renderStats();

  /* ---------- YouTube Live embed (driven by stats-data.js) ---------- */
  function renderYouTubeLive() {
    var slot = document.querySelector('[data-youtube-live-slot]');
    if (!slot) return;
    var s = window.IMPERIUS_STATS;
    var d = dict();
    if (s && s.isLive && s.liveVideoId) {
      slot.innerHTML = '<iframe class="embed-frame" src="https://www.youtube.com/embed/' + s.liveVideoId +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else {
      slot.innerHTML =
        '<div class="live-offline">' +
          '<div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>' +
          '<h3>' + d.live_offline_title + '</h3>' +
          '<p>' + d.live_offline_desc + '</p>' +
          '<a class="btn btn-ghost" href="https://www.youtube.com/@imperiu4s" target="_blank" rel="noopener">' + d.live_offline_cta + '</a>' +
        '</div>';
    }
  }
  renderYouTubeLive();

  /* ---------- Search ---------- */
  var searchIndex = { pages: [], videos: [] };
  function normalize(str) {
    return (str || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }
  function buildSearchIndex() {
    var d = dict();
    searchIndex.pages = [
      { title: d.nav_home, desc: d.search_desc_home, url: './' },
      { title: d.nav_about, desc: d.search_desc_about, url: 'rolam' },
      { title: d.nav_videos, desc: d.search_desc_videos, url: 'videok' },
      { title: d.nav_portfolio, desc: d.search_desc_portfolio, url: 'portfolio' },
      { title: d.nav_knowledge, desc: d.search_desc_knowledge, url: 'tudasfa' },
      { title: d.nav_contact, desc: d.search_desc_contact, url: 'kapcsolat' },
    ];
    searchIndex.videos = (window.IMPERIUS_VIDEOS || []).map(function (v) {
      return { title: v.title, desc: formatDate(v.publishedAt), url: v.url, external: true };
    });
  }
  buildSearchIndex();

  var searchOverlay = document.querySelector('[data-search-overlay]');
  var searchInput = document.querySelector('[data-search-input]');
  var searchResults = document.querySelector('[data-search-results]');
  var searchToggle = document.querySelector('[data-search-toggle]');
  var searchClose = document.querySelector('[data-search-close]');

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = false;
    document.body.classList.add('nav-open');
    setTimeout(function () { searchInput.focus(); }, 50);
    renderSearch('');
  }
  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = true;
    document.body.classList.remove('nav-open');
  }
  function renderSearch(query) {
    var q = normalize(query);
    var d = dict();
    var pageMatches = !q ? searchIndex.pages : searchIndex.pages.filter(function (p) { return normalize(p.title).indexOf(q) > -1 || normalize(p.desc).indexOf(q) > -1; });
    var videoMatches = !q ? [] : searchIndex.videos.filter(function (v) { return normalize(v.title).indexOf(q) > -1; }).slice(0, 8);

    if (!pageMatches.length && !videoMatches.length) {
      searchResults.innerHTML = '<p class="form-note">' + d.search_no_results + '</p>';
      return;
    }
    var html = '';
    if (pageMatches.length) {
      html += '<div class="search-group-label">' + d.search_pages_label + '</div>';
      html += pageMatches.map(function (p) {
        return '<a class="search-result" href="' + resolveHref(p.url) + '"><b>' + p.title + '</b><span>' + p.desc + '</span></a>';
      }).join('');
    }
    if (videoMatches.length) {
      html += '<div class="search-group-label">' + d.search_videos_label + '</div>';
      html += videoMatches.map(function (v) {
        return '<a class="search-result" href="' + v.url + '" target="_blank" rel="noopener"><b>' + v.title + '</b><span>' + v.desc + '</span></a>';
      }).join('');
    }
    searchResults.innerHTML = html;
  }
  if (searchToggle) searchToggle.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) { if (e.target === searchOverlay) closeSearch(); });
  }
  if (searchInput) searchInput.addEventListener('input', function () { renderSearch(searchInput.value); });
  document.addEventListener('keydown', function (e) {
    var typing = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
    if (e.key === '/' && !typing) { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape' && searchOverlay && !searchOverlay.hidden) closeSearch();
  });

  /* ---------- Contact form (mailto fallback) ---------- */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.querySelector('#name').value.trim();
      var email = contactForm.querySelector('#email').value.trim();
      var message = contactForm.querySelector('#message').value.trim();
      var subject = encodeURIComponent('Kapcsolatfelvétel – imperius.hu (' + name + ')');
      var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:imperiu4s@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  /* ---------- Basic inspection deterrents ----------
     Note: these only discourage casual right-click/shortcut use. They
     cannot truly block DevTools — the browser's own menu, "view-source:"
     URLs, and countless other paths still work for anyone who wants in.
     Treat this as a mild speed bump, not real protection for content. */
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  document.addEventListener('keydown', function (e) {
    var k = e.key.toLowerCase();
    var blocked =
      k === 'f12' ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) ||
      ((e.ctrlKey || e.metaKey) && k === 'u');
    if (blocked) e.preventDefault();
  });
})();
