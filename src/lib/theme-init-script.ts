import {
	COLOR_SWAP,
	DEFAULT_COLOR_MODE,
	PALETTE_CSS_VARS,
	STORAGE_KEY,
} from './theme';

/** Synchronous head script: applies theme before first paint (no FOUC). */
export function getThemeInitInlineScript(): string {
	const payload = JSON.stringify({
		sk: STORAGE_KEY,
		defaultMode: DEFAULT_COLOR_MODE,
		cs: COLOR_SWAP,
		p: PALETTE_CSS_VARS,
	});

	return `(function(){var d=${payload};function g(){try{var s=localStorage.getItem(d.sk);if(!s)s=localStorage.getItem("demo-color-mode");if(s==="light"||s==="dark")return s}catch(e){}return d.defaultMode}function a(m){var r=document.documentElement,v=d.p[m];r.setAttribute("data-color-mode",m);r.style.colorScheme=m;r.style.setProperty("--color-swap-duration",d.cs.duration+"ms");r.style.setProperty("--color-swap-timing-function",d.cs.timingFunction);for(var k in v)r.style.setProperty(k,v[k])}a(g())})();`;
}
