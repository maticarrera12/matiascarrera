import { DEFAULT_COLOR_MODE, STORAGE_KEY } from './theme';

/**
 * Synchronous head script: sets data-color-mode + color-scheme before first
 * paint (no FOUC). The palette itself lives in src/styles/global.css.
 */
export function getThemeInitInlineScript(): string {
	const payload = JSON.stringify({ sk: STORAGE_KEY, defaultMode: DEFAULT_COLOR_MODE });

	return `(function(){var d=${payload},m=d.defaultMode;try{var s=localStorage.getItem(d.sk);if(!s)s=localStorage.getItem("demo-color-mode");if(s==="light"||s==="dark")m=s}catch(e){}var r=document.documentElement;r.setAttribute("data-color-mode",m);r.style.colorScheme=m})();`;
}
