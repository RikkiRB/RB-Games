import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const play = path.join(root, 'play');
const indexPath = path.join(play, 'game/index.html');
let html = await readFile(indexPath, 'utf8');
if (!html.includes('../game-bridge.js')) html = html.replace('</head>', '<script src="../game-bridge.js"></script>\n</head>');
await writeFile(indexPath, html);
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(full));
    else result.push(full);
  }
  return result;
}
const shell = ['index.html', 'app.css', 'app.js', 'app-mode.js', 'auth-return.js', 'auth-code.js', 'license.js', 'config.js', 'game-bridge.js', 'manifest.webmanifest', 'privacy.html', 'icons/icon-192.png', 'icons/icon-512.png', '../styles.css', '../assets/rb-games-horizontal.svg', '../assets/earth.png', '../assets/ship.png'];
const assets = [...shell, ...await walk(path.join(play, 'game')).then(files => files.map(file => path.relative(play, file).replaceAll(path.sep, '/')))].sort();
const hash = createHash('sha256');
let totalBytes = 0;
for (const file of assets) {
  const bytes = await readFile(path.join(play, file));
  if (bytes.length >= 100 * 1024 * 1024) throw new Error('GitHub file size limit exceeded: ' + file);
  totalBytes += bytes.length; hash.update(file); hash.update(bytes);
}
const version = hash.digest('hex').slice(0, 16);
await writeFile(path.join(play, 'asset-manifest.json'), JSON.stringify({ version, totalBytes, assets }, null, 2) + '\n');
const template = await readFile(path.join(root, 'scripts/service-worker.template.js'), 'utf8');
await writeFile(path.join(play, 'sw.js'), template.replace('__VERSION__', JSON.stringify(version)).replace('__ASSETS__', JSON.stringify(assets)).replace('__SHELL__', JSON.stringify([...shell, 'asset-manifest.json'])));
console.log('Web release ' + version + ': ' + assets.length + ' files, ' + Math.ceil(totalBytes / 1048576) + ' MB.');
