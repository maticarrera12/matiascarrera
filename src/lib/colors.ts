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
		colorText: [220, 18, 22],
		colorBackground: [0, 0, 100],
		colorPrimary: TERRACOTTA.light,
		colorCloud100: [203, 60, 95],
		colorCloud300: [202, 68, 92],
		colorCloud400: [201, 60, 86],
		colorCloud500: [200, 80, 83],
		colorCloud700: [210, 30, 55],
		colorSkyFrom: [200, 70, 78],
		colorSkyTo: [200, 70, 70],
		colorSkySubtle: [200, 90, 88],
		colorGray300: [225, 8, 80],
		colorGray700: [225, 12, 40],
		colorFooterMuted: '#294e60',
		selectionBackgroundColor: '#ffec8f',
		selectionTextColor: '#000',
	},
	dark: {
		colorText: [210, 10, 90],
		colorBackground: [210, 15, 6],
		colorPrimary: TERRACOTTA.light,
		colorCloud100: [210, 15, 6],
		colorCloud300: [212, 40, 9],
		colorCloud400: [213, 40, 10],
		colorCloud500: [213, 40, 12],
		colorCloud700: [210, 20, 77],
		colorSkyFrom: [214, 40, 11],
		colorSkyTo: [200, 50, 30],
		colorSkySubtle: [210, 40, 16],
		colorGray300: [210, 10, 30],
		colorGray700: [210, 14, 66],
		colorFooterMuted: '#afcfde',
		selectionBackgroundColor: 'rgba(139, 133, 173, 0.35)',
		selectionTextColor: 'inherit',
	},
};