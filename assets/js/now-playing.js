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
  var volumeSlider = root.querySelector('[data-now-playing-volume]');
  var muteBtn = root.querySelector('[data-now-playing-mute]');
  var iconVolOn = root.querySelector('.icon-vol-on');
  var iconVolOff = root.querySelector('.icon-vol-off');

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

  // Remembered per-browser via localStorage (no server involved) so a
  // returning visitor gets their last volume back automatically.
  var savedVolume = 80;
  var savedMuted = false;
  try {
    var vRaw = localStorage.getItem('imperius-player-volume');
    if (vRaw !== null) savedVolume = Math.min(100, Math.max(0, parseInt(vRaw, 10) || 0));
    savedMuted = localStorage.getItem('imperius-player-muted') === '1';
  } catch (e) {}

  function paintVolumeSlider(value) {
    if (!volumeSlider) return;
    volumeSlider.value = value;
    volumeSlider.style.backgroundImage = 'linear-gradient(to right, var(--accent) ' + value + '%, transparent ' + value + '%)';
  }
  function setMuteIcon(muted) {
    if (iconVolOn) iconVolOn.hidden = muted;
    if (iconVolOff) iconVolOff.hidden = !muted;
    if (muteBtn) muteBtn.setAttribute('aria-label', muted ? (dict().now_playing_aria_unmute || 'Unmute') : (dict().now_playing_aria_mute || 'Mute'));
  }
  paintVolumeSlider(savedVolume);
  setMuteIcon(savedMuted);

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
          player.setVolume(savedVolume);
          if (savedMuted) player.mute();
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

  if (volumeSlider) {
    volumeSlider.addEventListener('input', function () {
      var value = parseInt(volumeSlider.value, 10) || 0;
      paintVolumeSlider(value);
      savedVolume = value;
      try { localStorage.setItem('imperius-player-volume', String(value)); } catch (e) {}
      if (playerReady) {
        player.setVolume(value);
        // Dragging the slider up from 0 is the universal "I want sound
        // again" gesture — unmute so the new level is actually heard.
        if (value > 0 && player.isMuted()) {
          player.unMute();
          savedMuted = false;
          try { localStorage.setItem('imperius-player-muted', '0'); } catch (e) {}
          setMuteIcon(false);
        }
      }
    });
  }
  if (muteBtn) {
    muteBtn.addEventListener('click', function () {
      savedMuted = !savedMuted;
      try { localStorage.setItem('imperius-player-muted', savedMuted ? '1' : '0'); } catch (e) {}
      setMuteIcon(savedMuted);
      if (playerReady) { savedMuted ? player.mute() : player.unMute(); }
    });
  }

  document.addEventListener('imperius:langchange', function () {
    setMuteIcon(savedMuted);
  });
})();
