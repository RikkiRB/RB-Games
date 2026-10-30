import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.wav': 'audio/wav', '.aac': 'audio/aac', '.ttf': 'font/ttf', '.woff': 'font/woff' };
const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    // Simulate both GitHub Pages' /RB-Games/ base path and root hosting.
    const pathname = decodeURIComponent(url.pathname.replace(/^\/RB-Games(?=\/|$)/, ''));
    let file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root) || pathname.split('/').some(part => part.startsWith('.'))) throw new Error('Forbidden');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); response.end(body);
  } catch { response.writeHead(404); response.end('Not found'); }
});
server.listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173/RB-Games/play/'));
