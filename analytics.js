import { createAnalyticsController, privacySignal } from './analytics-privacy.js';

const preferenceKey = 'rb-games:analytics-choice:v1';
let choice;
try { choice = localStorage.getItem(preferenceKey); } catch { /* Storage is optional. */ }
const blocked = () => privacySignal(navigator);
const allowed = () => choice === 'accepted' && !blocked();
const analytics = createAnalyticsController({
  load: () => import('https://esm.sh/@heycatch/sdk@0.8.3'),
  allowed,
  projectKey: 'hck_pk_-AfxVE1Rh1F1WfgPab8xjrLyvLO5Ecac',
});

const panel = document.createElement('section');
panel.className = 'analytics-choice';
panel.setAttribute('aria-label', 'Website analytics choice');
panel.innerHTML = `<div><h2>Help us improve RB Games?</h2><p>Optional HeyCatch analytics measures visits and how people find our games. It uses browser identifiers and device information. Playing works with either choice. <a href="${new URL('website-privacy.html', import.meta.url).href}">Privacy details</a></p><p class="analytics-status" role="status"></p></div><div class="analytics-actions"><button type="button" data-analytics-reject>Reject analytics</button><button type="button" data-analytics-accept>Allow analytics</button></div>`;
document.body.append(panel);
const status = panel.querySelector('.analytics-status');
const accept = panel.querySelector('[data-analytics-accept]');
function show() {
  panel.hidden = false;
  accept.disabled = blocked();
  status.textContent = blocked() ? 'Your browser privacy signal keeps analytics off.' : '';
}
function save(next) {
  choice = next;
  try { localStorage.setItem(preferenceKey, next); } catch { /* Use this page's choice only. */ }
  panel.hidden = true;
  if (allowed()) void analytics.start().catch(() => { /* Blocked or offline analytics never interrupts play. */ });
  else analytics.stop();
}
accept.addEventListener('click', () => { if (!blocked()) save('accepted'); });
panel.querySelector('[data-analytics-reject]').addEventListener('click', () => save('rejected'));
document.querySelectorAll('[data-analytics-settings]').forEach(button => button.addEventListener('click', () => {
  // A modal makes the rest of the page inert. Close App options first so the
  // analytics controls remain reachable in the installed game.
  button.closest('dialog')?.close();
  show();
  panel.querySelector('[data-analytics-reject]').focus();
}));
window.addEventListener('storage', event => {
  if (event.key !== preferenceKey && event.key !== null) return;
  choice = event.key === null ? null : event.newValue;
  if (allowed()) void analytics.start().catch(() => {});
  else analytics.stop();
});
if (choice === 'accepted' || choice === 'rejected' || blocked()) panel.hidden = true;
else show();
if (allowed()) void analytics.start().catch(() => {});
