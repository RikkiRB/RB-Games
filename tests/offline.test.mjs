import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile, access } from 'node:fs/promises';

async function workerFixture() {
  const scope = 'https://rikkirb.github.io/RB-Games/play/';
  const listeners = new Map(), stores = new Map();
  let online = true, failFile = '';
  const networkCalls = [];
  const fetcher = async input => {
    const url = typeof input === 'string' ? input : input.url; networkCalls.push(url);
    if (!online || url.endsWith(failFile || 'not-a-real-file')) throw new Error('Offline');
    return new Response(url.endsWith('sound.wav') ? '0123456789' : 'content:' + url, { headers: { 'Content-Type': url.endsWith('.wav') ? 'audio/wav' : 'text/plain' } });
  };
  const caches = {
    keys: async () => [...stores.keys()], delete: async key => stores.delete(key),
    open: async key => {
      if (!stores.has(key)) stores.set(key, new Map()); const map = stores.get(key);
      return { match: async url => map.get(typeof url === 'string' ? url : url.url)?.clone(), put: async (url, response) => map.set(url, response.clone()), addAll: async requests => { for (const request of requests) map.set(request.url, await fetcher(request)); } };
    }
  };
  stores.set('unrelated-website-cache', new Map());
  const self = { registration: { scope }, location: { origin: 'https://rikkirb.github.io' }, clients: { claim: async () => {} }, addEventListener: (type, callback) => listeners.set(type, callback) };
  let source = await readFile(new URL('../scripts/service-worker.template.js', import.meta.url), 'utf8');
  source = source.replace('__VERSION__', '"test-v1"').replace('__ASSETS__', JSON.stringify(['index.html', 'game/code.js', 'game/sound.wav'])).replace('__SHELL__', JSON.stringify(['index.html']));
  vm.runInNewContext(source, { self, caches, fetch: fetcher, Request, Response, Headers, URL, Set, Promise, Error, Number });
  const dispatch = async type => { let work; listeners.get(type)({ waitUntil: promise => { work = promise; } }); await work; };
  const get = async (url, { range, navigate = false } = {}) => {
    let response; const request = { method: 'GET', url, mode: navigate ? 'navigate' : 'cors', headers: new Headers(range ? { range } : {}) };
    listeners.get('fetch')({ request, respondWith: promise => { response = promise; } }); return response;
  };
  const download = async () => {
    const messages = []; let work;
    listeners.get('message')({ data: { type: 'CACHE_GAME' }, ports: [{ postMessage: message => messages.push(message) }], waitUntil: promise => { work = promise; } });
    await work; return messages;
  };
  return { scope, dispatch, get, download, stores, networkCalls, offline: () => { online = false; }, fail: file => { failFile = file; } };
}
test('offline download saves game assets and supports Safari audio byte ranges', async () => {
  const f = await workerFixture(); await f.dispatch('install');
  const messages = await f.download(); assert.equal(messages.at(-1).type, 'done');
  const callsBefore = f.networkCalls.length; f.offline();
  assert.ok(await (await f.get(f.scope, { navigate: true })).text());
  assert.ok(await (await f.get(f.scope + 'game/code.js')).text());
  const ranged = await f.get(f.scope + 'game/sound.wav', { range: 'bytes=2-5' });
  assert.equal(ranged.status, 206); assert.equal(await ranged.text(), '2345');
  assert.equal(f.networkCalls.length, callsBefore);
});
test('service worker never intercepts account/payment APIs or unrelated pages', async () => {
  const f = await workerFixture(); await f.dispatch('install');
  assert.equal(await f.get('https://example.supabase.co/functions/v1/perigee-api/me'), undefined);
  assert.equal(await f.get('https://checkout.stripe.com/pay/123'), undefined);
  assert.equal(await f.get('https://rikkirb.github.io/RB-Games/privacy.html'), undefined);
  await f.dispatch('activate'); assert.ok(f.stores.has('unrelated-website-cache'));
});
test('interrupted offline download reports failure rather than claiming it is saved', async () => {
  const f = await workerFixture(); await f.dispatch('install'); f.fail('game/code.js');
  const messages = await f.download(); assert.equal(messages.at(-1).type, 'error');
  assert.ok(!messages.some(message => message.type === 'done'));
});
test('every shipped game resource exists, and exported scripts resolve on a project Pages site', async () => {
  const base = new URL('../', import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('../play/asset-manifest.json', import.meta.url), 'utf8'));
  for (const file of manifest.assets) await access(new URL(file, new URL('play/', base)));
  const html = await readFile(new URL('../play/game/index.html', import.meta.url), 'utf8');
  assert.ok(html.includes('../game-bridge.js'));
  for (const [, file] of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    assert.ok(!/^https?:/.test(file), 'Game boot must not need a remote script: ' + file);
    await access(new URL(file, new URL('play/game/', base)));
  }
  const sandbox = { gdjs: {} };
  vm.runInNewContext(await readFile(new URL('../play/game/data.js', import.meta.url), 'utf8'), sandbox);
  for (const resource of sandbox.gdjs.projectData.resources.resources) if (resource.file && !resource.file.startsWith('https://')) await access(new URL(resource.file, new URL('play/game/', base)));
  await access(new URL('../.nojekyll', import.meta.url));
});
