/**
 * Refreshes the site's YouTube data from the public RSS feed — no API
 * key needed for videos. Run this whenever you want the site to pick up
 * new uploads:
 *
 *   node scripts/fetch-videos.js
 *
 * This writes assets/js/videos-data.js (embedded as a <script> tag, so
 * the video list works even when opening the HTML files directly via
 * file:// — fetch()'ing a local JSON file is blocked by the browser in
 * that case, which is why the site doesn't use fetch() for this).
 *
 * Optional live stats (subscribers / total views / video count) AND
 * YouTube-live detection (for the homepage's "live now?" section): set a
 * YOUTUBE_API_KEY environment variable, or drop your key into a local
 * scripts/api-key.local.txt file (gitignored), and this script will also
 * write assets/js/stats-data.js. Get a free key at
 * https://console.cloud.google.com/apis/credentials (enable "YouTube
 * Data API v3"). The key is only ever used here, at build time — it is
 * never shipped to the browser.
 *
 * Quota note: the stats call costs 1 unit, the live-status check costs
 * 100 units (a "search" call) against your daily 10,000-unit quota — so
 * this comfortably supports running the refresh every hour or so, just
 * avoid scripting it to run every minute.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const CHANNEL_ID = 'UCeV22Q6k4YN_g8C9ZlCzeUQ'; // Imperiussss
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const VIDEOS_OUT = path.join(__dirname, '..', 'assets', 'js', 'videos-data.js');
const STATS_OUT = path.join(__dirname, '..', 'assets', 'js', 'stats-data.js');
const KEY_FILE = path.join(__dirname, 'api-key.local.txt');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchText(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Request failed: ${res.statusCode}`));
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseFeed(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  return entries.map((entry) => {
    const get = (re) => { const m = entry.match(re); return m ? m[1] : ''; };
    const id = get(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const title = decodeEntities(get(/<title>(.*?)<\/title>/));
    const link = get(/<link rel="alternate" href="(.*?)"/);
    const published = get(/<published>(.*?)<\/published>/);
    const thumb = get(/<media:thumbnail url="(.*?)"/);
    const isShort = link.includes('/shorts/');
    return {
      id,
      title,
      url: link,
      type: isShort ? 'short' : 'video',
      publishedAt: published,
      thumbnail: thumb || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  });
}

function getApiKey() {
  if (process.env.YOUTUBE_API_KEY) return process.env.YOUTUBE_API_KEY.trim();
  if (fs.existsSync(KEY_FILE)) {
    const k = fs.readFileSync(KEY_FILE, 'utf-8').trim();
    if (k) return k;
  }
  return null;
}

async function fetchStats(apiKey) {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${apiKey}`;
  const raw = await fetchText(url);
  const json = JSON.parse(raw);
  if (json.error) throw new Error(json.error.message || 'YouTube API error');
  const stats = json.items && json.items[0] && json.items[0].statistics;
  if (!stats) throw new Error('No statistics returned for channel');
  return {
    subscriberCount: parseInt(stats.subscriberCount, 10) || 0,
    viewCount: parseInt(stats.viewCount, 10) || 0,
    videoCount: parseInt(stats.videoCount, 10) || 0,
  };
}

async function fetchLiveStatus(apiKey) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${apiKey}`;
  const raw = await fetchText(url);
  const json = JSON.parse(raw);
  if (json.error) throw new Error(json.error.message || 'YouTube API error');
  const live = json.items && json.items[0];
  return {
    isLive: !!live,
    liveVideoId: live ? live.id.videoId : null,
  };
}

async function main() {
  console.log(`Fetching feed for channel ${CHANNEL_ID} ...`);
  const xml = await fetchText(FEED_URL);
  const videos = parseFeed(xml);
  fs.mkdirSync(path.dirname(VIDEOS_OUT), { recursive: true });
  fs.writeFileSync(VIDEOS_OUT, `window.IMPERIUS_VIDEOS = ${JSON.stringify(videos, null, 2)};\n`);
  console.log(`Saved ${videos.length} videos to ${path.relative(process.cwd(), VIDEOS_OUT)}`);

  const apiKey = getApiKey();
  if (!apiKey) {
    console.log('No YOUTUBE_API_KEY found — skipping live stats (see the comment at the top of this file).');
    return;
  }
  try {
    const [stats, live] = await Promise.all([fetchStats(apiKey), fetchLiveStatus(apiKey)]);
    const combined = { ...stats, ...live, updatedAt: new Date().toISOString() };
    fs.writeFileSync(STATS_OUT, `window.IMPERIUS_STATS = ${JSON.stringify(combined, null, 2)};\n`);
    console.log(`Saved live stats to ${path.relative(process.cwd(), STATS_OUT)}${live.isLive ? ' (channel is LIVE right now)' : ''}`);
  } catch (err) {
    console.error('Could not fetch live stats:', err.message);
  }
}

main().catch((err) => {
  console.error('Failed to refresh video data:', err.message);
  process.exit(1);
});
