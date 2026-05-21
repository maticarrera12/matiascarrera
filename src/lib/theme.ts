import {
	THEME_COLORS,
	type ColorMode,
	type ColorTuple,
	type ThemePalette,
} from './colors';

export type { ColorMode, ColorTuple, ThemePalette };

export type ThemeValue = ColorTuple | string;

export const STORAGE_KEY = 'site-color-mode';

/** Modo cuando no hay preferencia guardada */
export const DEFAULT_COLOR_MODE: ColorMode = 'dark';

export const COLOR_SWAP = {
	duration: 200,
	timingFunction: 'cubic-bezier(0.41, 0.1, 0.13, 1)',
} as const;

export const LIGHT = THEME_COLORS.light;
export const DARK = THEME_COLORS.dark;

export const PALETTES: Record<ColorMode, ThemePalette> = {
	light: LIGHT,
	dark: DARK,
};

export function toCssVarName(key: string): string {
	const kebab = key
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/(\d+)/g, '-$1')
		.toLowerCase();
	return `--${kebab}`;
}

export function toCssValue(key: string, value: ThemeValue): [string, string] {
	const name = toCssVarName(key);
	if (typeof value === 'string') {
		return [name, value];
	}
	const [h, s, l, a] = value;
	if (a !== undefined && a !== 1) {
		return [name, `hsl(${h}deg ${s}% ${l}% / ${a})`];
	}
	return [name, `hsl(${h}deg ${s}% ${l}%)`];
}

export function paletteToCssVars(palette: ThemePalette): Record<string, string> {
	const vars: Record<string, string> = {};
	for (const [key, value] of Object.entries(palette)) {
		const [name, cssValue] = toCssValue(key, value);
		vars[name] = cssValue;
	}
	return vars;
}

export const PALETTE_CSS_VARS: Record<ColorMode, Record<string, string>> = {
	light: paletteToCssVars(LIGHT),
	dark: paletteToCssVars(DARK),
};
