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
test('the delivery hook preserves SDK Date timestamps and event identifiers', async () => {
  let config;
  const controller = createAnalyticsController({ allowed: () => true, projectKey: 'test', load: async () => ({ analytics: { init(value) { config = value; }, optInCapturing() {} } }) });
  await controller.start();
  // SDK 0.8.3 assigns a Date to event.timestamp before calling beforeSend.
  const timestamp = new Date('2026-11-01T23:54:44.335Z');
  const event = { event: '$pageview', uuid: '019a4012-9eaa-7000-8000-000000000001', timestamp, properties: { $current_url: 'https://rbgames.dev/play/?code=private#access_token=secret', $event_time_override_system_time: timestamp }, $set_once: { $initial_current_url: 'https://rbgames.dev/?token=private' } };
  const result = config.beforeSend(event);
  assert.equal(result.timestamp, timestamp);
  assert.equal(result.uuid, event.uuid);
  assert.equal(result.properties.$event_time_override_system_time, timestamp);
  assert.equal(JSON.parse(JSON.stringify(result)).timestamp, timestamp.toISOString());
  assert.equal(result.properties.$current_url, 'https://rbgames.dev/play/');
  assert.equal(result.$set_once.$initial_current_url, 'https://rbgames.dev/');
  assert.match(event.properties.$current_url, /private/);
});
test('no SDK loads before consent; withdrawal during download prevents initialization', async () => {
  let consent = false, loads = 0, inits = 0, release;
  const controller = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load: () => { loads++; return new Promise(resolve => { release = resolve; }); } });
  await controller.start(); assert.equal(loads, 0);
  consent = true;
  const pending = controller.start();
  consent = false;
  release({ analytics: { init() { inits++; } } });
  await pending; assert.equal(inits, 0);
});
test('revoking consent stops capture and the event hook drops subsequent events', async () => {
  let consent = true, config, stops = 0, starts = 0;
  const controller = createAnalyticsController({ allowed: () => consent, projectKey: 'test', load: async () => ({ analytics: { init(value) { config = value; }, optOutCapturing() { stops++; }, optInCapturing() { starts++; } } }) });
  await controller.start();
  assert.equal(config.autocapture, false); assert.equal(config.requestBatching, false);
  assert.equal(config.optOutCapturingByDefault, true); assert.equal(starts, 1);
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
test('saved acceptance clears an SDK opt-out on each page without duplicate opt-ins', async () => {
  let sdkOptedOut = true, initCalls = 0, optIns = 0;
  const load = async () => ({ analytics: {
    init(config) { initCalls++; assert.equal(config.optOutCapturingByDefault, true); },
    optInCapturing() { sdkOptedOut = false; optIns++; },
    optOutCapturing() { sdkOptedOut = true; },
  } });
  const firstPage = createAnalyticsController({ load, allowed: () => true, projectKey: 'test' });
  await firstPage.start(); await firstPage.start();
  assert.equal(optIns, 1); assert.equal(sdkOptedOut, false);
  firstPage.stop(); assert.equal(sdkOptedOut, true);
  const nextPage = createAnalyticsController({ load, allowed: () => true, projectKey: 'test' });
  await nextPage.start();
  assert.equal(initCalls, 2); assert.equal(optIns, 2); assert.equal(sdkOptedOut, false);
});
