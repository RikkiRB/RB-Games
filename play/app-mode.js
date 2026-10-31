// Installed apps (including existing icons) launch the game instead of the site.
export function shouldLaunchGame({ search = '', standalone = false, displayStandalone = false, displayFullscreen = false } = {}) {
  return standalone || displayStandalone || displayFullscreen || new URLSearchParams(search).get('app') === '1';
}
