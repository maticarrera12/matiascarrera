import {
	COLOR_SWAP,
	DEFAULT_COLOR_MODE,
	PALETTES,
	STORAGE_KEY,
	type ColorMode,
	toCssValue,
} from '@/lib/theme';

declare global {
	interface Window {
		__themeClientReady?: boolean;
		__themeToggleClickBound?: boolean;
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

function updateThemeToggleLabels(mode: ColorMode): void {
	const label =
		mode === 'light' ? 'Activar modo oscuro' : 'Activar modo claro';
	for (const toggle of document.querySelectorAll<HTMLElement>(
		'[data-theme-toggle]',
	)) {
		toggle.setAttribute('aria-label', label);
	}
}

function bindThemeToggleDelegation(): void {
	if (window.__themeToggleClickBound) return;
	window.__themeToggleClickBound = true;

	document.addEventListener('click', (event) => {
		const toggle = (event.target as Element | null)?.closest(
			'[data-theme-toggle]',
		);
		if (!toggle) return;

		const current = getResolvedMode();
		const next: ColorMode = current === 'light' ? 'dark' : 'light';
		applyTheme(next);
	});
}

function syncThemeToggles(): void {
	updateThemeToggleLabels(getResolvedMode());
}

export function initThemeClient(): void {
	const mode = getResolvedMode();
	const current = document.documentElement.getAttribute('data-color-mode');

	if (!window.__themeClientReady) {
		window.__themeClientReady = true;
		registerAnimatedProperties(mode);
		bindThemeToggleDelegation();

		if (current !== mode) {
			applyTheme(mode);
		} else {
			updateThemeToggleLabels(mode);
		}

		requestAnimationFrame(() => {
			document.documentElement.classList.add('theme-toggle-animate-in');
		});

		document.addEventListener('astro:before-swap', (event) => {
			const m = getResolvedMode();
			(event as CustomEvent & { newDocument: Document }).newDocument
				.documentElement.setAttribute('data-color-mode', m);
		});

		document.addEventListener('astro:after-swap', () => {
			applyTheme(getResolvedMode());
		});

		document.addEventListener('astro:page-load', syncThemeToggles);
	}

	syncThemeToggles();
}
