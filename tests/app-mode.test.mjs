import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldLaunchGame } from '../play/app-mode.js';
test('existing iPhone icons and installed display modes launch straight into game', () => {
  for (const mode of [{ standalone: true }, { displayStandalone: true }, { displayFullscreen: true }]) assert.equal(shouldLaunchGame(mode), true);
});
test('new app launch URL opens game but normal visitors and auth returns retain website flow', () => {
  assert.equal(shouldLaunchGame({ search: '?app=1' }), true);
  assert.equal(shouldLaunchGame({ search: '?app=1&checkout=success' }), true);
  for (const search of ['', '?app=0', '?accounts_preview=1', '?checkout=success']) assert.equal(shouldLaunchGame({search}), false);
});
