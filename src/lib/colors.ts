export type ColorTuple = [h: number, s: number, l: number, a?: number];
export type ThemePalette = Record<string, ColorTuple | string>;
export type ColorMode = 'light' | 'dark';

/** Terracota — acento principal del sitio */
export const TERRACOTTA = {
	// Más claro y saturado en light: terracota cálida, no marrón oscuro
	light: [15, 63, 57] satisfies ColorTuple,
	dark: [16, 58, 72] satisfies ColorTuple,
} as const;

/** Tokens de color por modo (fuente única para theme.ts y documentación) */
export const THEME_COLORS: Record<ColorMode, ThemePalette> = {
	light: {
		colorText: [35, 15, 18],
		colorBackground: [40, 30, 97],
		colorPrimary: TERRACOTTA.light,
		colorCloud100: [38, 35, 95],
		colorCloud300: [36, 38, 90],
		colorCloud400: [35, 32, 84],
		colorCloud500: [34, 40, 79],
		colorCloud700: [35, 18, 52],
		colorSkyFrom: [36, 35, 74],
		colorSkyTo: [35, 32, 66],
		colorSkySubtle: [38, 42, 88],
		colorGray300: [35, 12, 78],
		colorGray700: [35, 10, 38],
		colorFooterMuted: '#294e60',
		selectionBackgroundColor: '#ffec8f',
		selectionTextColor: '#000',
	},
	dark: {
		colorText: [38, 20, 90],
		colorBackground: [30, 12, 9],
		colorPrimary: TERRACOTTA.light,
		colorCloud100: [30, 12, 9],
		colorCloud300: [32, 22, 10],
		colorCloud400: [33, 22, 11],
		colorCloud500: [34, 22, 13],
		colorCloud700: [35, 12, 75],
		colorSkyFrom: [33, 22, 12],
		colorSkyTo: [30, 28, 28],
		colorSkySubtle: [32, 22, 17],
		colorGray300: [30, 10, 28],
		colorGray700: [32, 10, 64],
		colorFooterMuted: '#afcfde',
		selectionBackgroundColor: 'rgba(139, 133, 173, 0.35)',
		selectionTextColor: 'inherit',
	},
};
