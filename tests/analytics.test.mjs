import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanAnalyticsValue, privacySignal, createAnalyticsController } from '../analytics-privacy.js';

test('analytics removes sign-in and checkout URLs, referrer paths and email properties', () => {
  const input = { properties: { $current_url: 'https://rbgames.dev/play/?code=private&session_id=checkout#access_token=secret', $referrer: 'https://example.com/private?token=secret', email: 'player@example.com', nested: [{ name: 'player@example.com' }], $browser: 'Safari' } };
  const result = cleanAnalyticsValue(input);
  assert.equal(result.properties.$current_url, 'https://rbgames.dev/play/');
  assert.equal(result.properties.$referrer, 'https://example.com');
  assert.equal(result.properties.email, '[redacted]');
  assert.equal(result.properties.nested[0].name, '[redacted]');
  assert.equal(result.properties.$browser, 'Safari');
  assert.ok(!JSON.stringify(result).includes('secret'));
});
test('DNT and GPC prevent optional tracking', () => {
  assert.equal(privacySignal({ globalPrivacyControl: true }), true);
  assert.equal(privacySignal({ doNotTrack: '1' }), true);
  assert.equal(privacySignal({ doNotTrack: 'yes' }), true);
  assert.equal(privacySignal({}), false);
});
test('no SDK loads before consent; withdrawal during download prevents initialization', async () => {
  let consent = false, loads = 0, inits = 0, release;
  const controller = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load: () => { loads++; return new Promise(resolve => { release = resolve; }); } });
  await controller.start(); assert.equal(loads, 0);
  consent = true;
  const pending = controller.start();
  consent = false;
  release({ analytics: { init() { inits++; }, optInCapturing() {} } });
  await pending; assert.equal(inits, 0);
});
test('revoking consent stops capture and the event hook drops subsequent events', async () => {
  let consent = true, config, stops = 0, starts = 0;
  const controller = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load: async () => ({ analytics: { init(value) { config = value; }, optOutCapturing() { stops++; }, optInCapturing() { starts++; } } }) });
  await controller.start();
  assert.equal(config.autocapture, false); assert.equal(config.requestBatching, false);
  consent = false; controller.stop();
  assert.equal(stops, 1); assert.equal(config.beforeSend({ event: '$pageview' }), null);
  consent = true; await controller.start(); assert.equal(starts, 2);
});
test('failed analytics download can retry and cannot require game code to load', async () => {
  let attempts = 0, inits = 0;
  const controller = createAnalyticsController({ allowed: () => true, projectKey: 'test', load: async () => { if (++attempts === 1) throw new Error('offline'); return { analytics: { init() { inits++; }, optInCapturing() {} } }; } });
  await assert.rejects(controller.start(), /offline/);
  await controller.start(); assert.equal(inits, 1);
});


test('allowing again after withdrawal and reload clears persisted SDK opt-out', async () => {
  let consent = true, persistedOptOut = false, capturing = false;
  const load = async () => ({ analytics: {
    init() { capturing = !persistedOptOut; },
    optOutCapturing() { persistedOptOut = true; capturing = false; },
    optInCapturing() { persistedOptOut = false; capturing = true; },
  } });
  const firstPage = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load });
  await firstPage.start();
  assert.equal(capturing, true);
  consent = false; firstPage.stop();
  assert.equal(persistedOptOut, true);
  const reloadedPage = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load });
  await reloadedPage.start();
  assert.equal(capturing, false);
  consent = true; await reloadedPage.start();
  assert.equal(persistedOptOut, false);
  assert.equal(capturing, true);
});
