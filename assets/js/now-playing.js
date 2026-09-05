// =========================================================
// IMPERIUS.HU — "Mit hallgatok mostanában?" background player
// Plays a YouTube video as background audio via the IFrame Player API.
// Configure the video in assets/js/config.js (NOW_PLAYING_URL).
// =========================================================
(function () {
  'use strict';

  var root = document.querySelector('[data-now-playing]');
  if (!root) return;

  var CONFIG = window.IMPERIUS_CONFIG || {};
  var rawUrl = (CONFIG.nowPlayingUrl || '').trim();
  if (!rawUrl) return; // stays hidden — nothing configured

  function extractVideoId(u) {
    var m = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|^)([a-zA-Z0-9_-]{11})(?:$|[?&])/);
    return m ? m[1] : null;
  }
  var videoId = extractVideoId(rawUrl);
  if (!videoId) return;

  root.hidden = false;

  var thumbEl = root.querySelector('[data-now-playing-thumb]');
  var titleEl = root.querySelector('[data-now-playing-title]');
  var playBtn = root.querySelector('[data-now-playing-play]');
  var pauseBtn = root.querySelector('[data-now-playing-pause]');
  var stopBtn = root.querySelector('[data-now-playing-stop]');
  var progressFill = root.querySelector('[data-now-playing-progress]');
  var timeEl = root.querySelector('[data-now-playing-time]');
  var frameTarget = root.querySelector('[data-now-playing-frame]');
  var errorEl = root.querySelector('[data-now-playing-error]');

  function currentLang() {
    var l = document.documentElement.getAttribute('data-lang');
    return (l === 'en' || l === 'hu') ? l : 'hu';
  }
  function dict() { return window.ImperiusI18N ? window.ImperiusI18N.get(currentLang()) : {}; }

  // Surfaces failures instead of silently doing nothing — the two
  // realistic causes are the video owner disabling embedding, or a
  // browser ad-blocker / tracking-protection extension blocking the
  // YouTube iframe or its script outright (both are common and were
  // previously indistinguishable from "the button just doesn't work").
  var shownErrorKey = null;
  function showError(key) {
    if (!errorEl) return;
    shownErrorKey = key;
    var d = dict();
    errorEl.innerHTML = (d[key] || '') + ' <a href="https://www.youtube.com/watch?v=' + videoId +
      '" target="_blank" rel="noopener">' + (d.now_playing_error_link || 'YouTube') + '</a>';
    errorEl.hidden = false;
  }
  document.addEventListener('imperius:langchange', function () {
    if (shownErrorKey) showError(shownErrorKey);
  });

  if (thumbEl) thumbEl.src = 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';

  fetch('https://www.youtube.com/oembed?url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + videoId) + '&format=json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) { if (data && data.title && titleEl) titleEl.textContent = data.title; })
    .catch(function () {});

  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // "Stopped" is treated as neutral — none of the three buttons gets
  // the accent-colored highlight, only Play (while playing) or Pause
  // (while paused) do.
  function setActive(state) {
    [playBtn, pauseBtn, stopBtn].forEach(function (b) { if (b) b.classList.remove('is-active'); });
    root.classList.toggle('is-playing', state === 'playing');
    var btn = state === 'playing' ? playBtn : state === 'paused' ? pauseBtn : null;
    if (btn) btn.classList.add('is-active');
  }

  var player = null;
  var playerReady = false;
  var pendingPlay = false; // set if Play is clicked before the API/player is ready
  var progressTimer = null;

  function tickProgress() {
    if (!player || typeof player.getCurrentTime !== 'function') return;
    var cur = player.getCurrentTime() || 0;
    var dur = player.getDuration() || 0;
    if (progressFill) progressFill.style.width = (dur > 0 ? (cur / dur) * 100 : 0) + '%';
    if (timeEl) timeEl.textContent = fmtTime(cur) + ' / ' + fmtTime(dur);
  }
  function startProgress() {
    stopProgress();
    progressTimer = setInterval(tickProgress, 500);
    tickProgress();
  }
  function stopProgress() {
    if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
  }
  function resetProgress() {
    if (progressFill) progressFill.style.width = '0%';
    var dur = player && typeof player.getDuration === 'function' ? (player.getDuration() || 0) : 0;
    if (timeEl) timeEl.textContent = fmtTime(0) + ' / ' + fmtTime(dur);
  }

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player(frameTarget, {
      width: '2',
      height: '2',
      videoId: videoId,
      playerVars: { playsinline: 1 },
      events: {
        onReady: function () {
          playerReady = true;
          if (pendingPlay) { pendingPlay = false; player.playVideo(); }
        },
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.PLAYING) { setActive('playing'); startProgress(); }
          else if (e.data === YT.PlayerState.PAUSED) { setActive('paused'); stopProgress(); }
          else if (e.data === YT.PlayerState.ENDED) { setActive('stopped'); stopProgress(); resetProgress(); }
        },
        onError: function (e) {
          // 101/150 = the video owner disabled embedded playback;
          // everything else (2, 5, 100) is some other real failure.
          showError((e.data === 101 || e.data === 150) ? 'now_playing_error_embed' : 'now_playing_error_generic');
        },
      },
    });
  };

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  // If the player never reports ready, the iframe_api script or the
  // embed itself is most likely being blocked by the browser/an
  // extension — surface that instead of leaving a mute "nothing
  // happens" button.
  setTimeout(function () {
    if (!playerReady && errorEl && errorEl.hidden) showError('now_playing_error_timeout');
  }, 7000);

  // Three separate, independent controls — clicking Play before the
  // player has actually finished initializing used to silently do
  // nothing; now it queues the intent and fires as soon as it's ready.
  if (playBtn) {
    playBtn.addEventListener('click', function () {
      if (!playerReady) { pendingPlay = true; return; }
      player.playVideo();
    });
  }
  if (pauseBtn) {
    pauseBtn.addEventListener('click', function () {
      pendingPlay = false;
      if (playerReady) player.pauseVideo();
    });
  }
  if (stopBtn) {
    stopBtn.addEventListener('click', function () {
      pendingPlay = false;
      if (playerReady) player.stopVideo();
      setActive('stopped');
      stopProgress();
      resetProgress();
    });
  }
})();
