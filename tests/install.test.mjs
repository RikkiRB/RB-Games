import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const app = readFileSync(new URL('../play/app.js', import.meta.url), 'utf8');
const code = app.slice(app.indexOf('const isAppleMobile'), app.indexOf("\nif ('serviceWorker'"));
function setup(navigator = {}, standalone = false) {
  const nodes = new Map(), events = {};
  const $ = id => {
    if (!nodes.has(id)) nodes.set(id, { id, hidden: false, dataset: {}, handlers: {}, addEventListener(e, fn) { this.handlers[e] = fn; }, showModal() { this.open = true; }, close() { this.open = false; } });
    return nodes.get(id);
  };
  const buttons = ['hero-install', 'install-button', 'offline-install'].map($);
  vm.runInNewContext('let installPrompt;\n' + code, { navigator, $, document: { querySelectorAll: () => buttons }, window: { matchMedia: () => ({ matches: standalone, addEventListener() {} }), addEventListener: (e, fn) => events[e] = fn } });
  return { $, buttons, events };
}
test('iPhone and desktop-mode iPad show manual Home Screen instructions', async () => {
  for (const nav of [{ userAgent: 'iPhone' }, { userAgent: 'Macintosh', platform: 'MacIntel', maxTouchPoints: 5 }]) {
    const { $, buttons } = setup(nav);
    await buttons[0].handlers.click();
    assert.equal($('install-dialog').open, true);
    assert.equal($('apple-install-steps').hidden, false);
    assert.equal($('other-install-steps').hidden, true);
    assert.equal($('offline-install').hidden, true);
    $('install-done').handlers.click();
    assert.equal($('install-dialog').open, false);
  }
});
test('standalone launch hides install buttons', () => {
  assert.ok(setup({ userAgent: 'iPhone', standalone: true }).buttons.every(b => b.hidden));
});
test('supported install prompt runs once and allows a guide after dismissal', async () => {
  const { buttons, events, $ } = setup({ userAgent: 'Chrome' });
  let prompted = 0;
  events.beforeinstallprompt({ preventDefault() {}, prompt: async () => prompted++, userChoice: Promise.resolve({ outcome: 'dismissed' }) });
  await buttons[0].handlers.click();
  assert.equal(prompted, 1);
  await buttons[0].handlers.click();
  assert.equal($('install-dialog').open, true);
  events.appinstalled();
  assert.ok(buttons.every(b => b.hidden));
});
