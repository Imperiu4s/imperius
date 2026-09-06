// Minimal static file server for local preview (no dependencies).
// Mirrors the clean-URL behavior from .htaccess (used on real hosting):
// /rolam serves rolam.html without a redirect, and a request that still
// ends in .html gets redirected to the extension-less version.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = 5500;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) return serve404(res);
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

function serve404(res) {
  fs.readFile(path.join(ROOT, '404.html'), (e2, data404) => {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(e2 ? 'Not found' : data404);
  });
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';

  // A direct .html request redirects to the clean URL (matches .htaccess).
  if (/\.html$/.test(urlPath) && urlPath !== '/index.html') {
    res.writeHead(301, { Location: urlPath.replace(/\.html$/, '') + query });
    return res.end();
  }
  if (urlPath === '/index.html') {
    res.writeHead(301, { Location: '/' + query });
    return res.end();
  }

  if (urlPath === '/') return serveFile(res, path.join(ROOT, 'index.html'));

  const exactPath = path.join(ROOT, urlPath);
  fs.access(exactPath, fs.constants.R_OK, (err) => {
    if (!err) return serveFile(res, exactPath);
    // No extension on the request and no exact file: try foo.html.
    if (!path.extname(urlPath)) return serveFile(res, exactPath + '.html');
    serve404(res);
  });
}).listen(PORT, () => console.log(`Serving imperius.hu at http://localhost:${PORT}`));
