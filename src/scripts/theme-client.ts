import {
	COLOR_SWAP,
	DEFAULT_COLOR_MODE,
	PALETTES,
	STORAGE_KEY,
	type ColorMode,
	toCssValue,
} from '../lib/theme';

declare global {
	interface Window {
		__themeClientReady?: boolean;
	}
}

function getResolvedMode(): ColorMode {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') return stored;
	} catch {
		/* private mode */
	}

	const attr = document.documentElement.getAttribute('data-color-mode');
	if (attr === 'light' || attr === 'dark') return attr;

	return DEFAULT_COLOR_MODE;
}

function applyTheme(mode: ColorMode): void {
	const palette = PALETTES[mode];
	const root = document.documentElement;

	root.setAttribute('data-color-mode', mode);
	root.style.colorScheme = mode;
	root.style.setProperty('--color-swap-duration', `${COLOR_SWAP.duration}ms`);
	root.style.setProperty(
		'--color-swap-timing-function',
		COLOR_SWAP.timingFunction,
	);

	for (const [key, value] of Object.entries(palette)) {
		const [name, cssValue] = toCssValue(key, value);
		root.style.setProperty(name, cssValue);
	}

	updateThemeToggleLabels(mode);

	try {
		localStorage.setItem(STORAGE_KEY, mode);
	} catch {
		/* private mode */
	}
}

function registerAnimatedProperties(mode: ColorMode): void {
	if (!window.CSS?.registerProperty) return;

	const palette = PALETTES[mode];
	for (const [key, value] of Object.entries(palette)) {
		const [name, cssValue] = toCssValue(key, value);
		if (typeof value === 'string') continue;
		try {
			CSS.registerProperty({
				name,
				syntax: '<color>',
				inherits: true,
				initialValue: cssValue,
			});
		} catch {
			/* already registered */
		}
	}
}

function getThemeToggles(): HTMLElement[] {
	return [...document.querySelectorAll<HTMLElement>('[data-theme-toggle]')];
}

function updateThemeToggleLabels(mode: ColorMode): void {
	const label =
		mode === 'light' ? 'Activar modo oscuro' : 'Activar modo claro';
	for (const toggle of getThemeToggles()) {
		toggle.setAttribute('aria-label', label);
	}
}

function bindThemeToggle(): void {
	for (const toggle of getThemeToggles()) {
		if (toggle.dataset.bound === '1') continue;
		toggle.dataset.bound = '1';

		toggle.addEventListener('click', () => {
			const current = getResolvedMode();
			const next: ColorMode = current === 'light' ? 'dark' : 'light';
			applyTheme(next);
		});
	}
}

export function initThemeClient(): void {
	if (window.__themeClientReady) return;
	window.__themeClientReady = true;

	const mode = getResolvedMode();
	const current = document.documentElement.getAttribute('data-color-mode');

	registerAnimatedProperties(mode);

	if (current !== mode) {
		applyTheme(mode);
	} else {
		updateThemeToggleLabels(mode);
	}

	bindThemeToggle();

	requestAnimationFrame(() => {
		document.documentElement.classList.add('theme-toggle-animate-in');
	});
}
