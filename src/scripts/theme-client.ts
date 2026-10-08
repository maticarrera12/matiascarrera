import { DEFAULT_COLOR_MODE, STORAGE_KEY, type ColorMode } from '@/lib/theme';

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
	const root = document.documentElement;

	root.setAttribute('data-color-mode', mode);
	root.style.colorScheme = mode;

	updateThemeToggleLabels(mode);

	try {
		localStorage.setItem(STORAGE_KEY, mode);
	} catch {
		/* private mode */
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
