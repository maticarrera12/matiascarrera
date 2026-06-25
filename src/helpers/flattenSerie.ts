import type { Lesson, Serie } from '../config/navigation';

export type FlatLesson = Lesson & {
	chapter: string;
	module: string;
	serieSlug: string;
	serieColor: string;
};

export type LessonNavigation = {
	previous: FlatLesson | null;
	next: FlatLesson | null;
};

export type GuideNavLink = {
	href: string;
	title: string;
	module: string;
	serieSlug: string;
	color: string;
};

export function lessonBasename(file: string): string {
	return file.replace(/\.mdx?$/i, '');
}

export function lessonMatchesGuideId(
	lesson: FlatLesson,
	guideId: string,
): boolean {
	const basename = lessonBasename(lesson.file);
	return guideId === basename || guideId.endsWith(`/${basename}`);
}

export function flattenSerie(serie: Serie): FlatLesson[] {
	return serie.chapters.flatMap((chapter) =>
		chapter.modules.flatMap((module) =>
			module.lessons.map(
				(lesson): FlatLesson => ({
					...lesson,
					chapter: chapter.title,
					module: module.title,
					serieSlug: serie.slug,
					serieColor: serie.color,
				}),
			),
		),
	);
}

export function flattenSeries(series: Serie[]): FlatLesson[] {
	return series.flatMap((serie) => flattenSerie(serie));
}

export function getLessonNavigation(
	lessons: FlatLesson[],
	currentGuideId: string,
): LessonNavigation {
	const currentIndex = lessons.findIndex((lesson) =>
		lessonMatchesGuideId(lesson, currentGuideId),
	);

	if (currentIndex === -1) {
		return { previous: null, next: null };
	}

	return {
		previous: currentIndex > 0 ? lessons[currentIndex - 1]! : null,
		next:
			currentIndex < lessons.length - 1
				? lessons[currentIndex + 1]!
				: null,
	};
}

export function lessonToNavLink(
	lesson: FlatLesson,
	guides: readonly { id: string; data: { title: string } }[],
): GuideNavLink | null {
	const guide = guides.find((entry) =>
		lessonMatchesGuideId(lesson, entry.id),
	);

	if (!guide) return null;

	return {
		href: `/guides/${guide.id}`,
		title: guide.data.title,
		module: lesson.module,
		serieSlug: lesson.serieSlug,
		color: lesson.serieColor,
	};
}

export function resolveGuideNavLinks(
	navigation: LessonNavigation,
	guides: readonly { id: string; data: { title: string } }[],
): {
	previous: GuideNavLink | null;
	next: GuideNavLink | null;
} {
	return {
		previous: navigation.previous
			? lessonToNavLink(navigation.previous, guides)
			: null,
		next: navigation.next
			? lessonToNavLink(navigation.next, guides)
			: null,
	};
}

export type SidebarLesson = { title: string; href: string; id: string };
export type SidebarModule = {
	title: string;
	icon: string;
	lessons: SidebarLesson[];
};
export type SidebarChapter = { title: string; modules: SidebarModule[] };

export function buildSidebarTree(
	serie: Serie,
	guides: readonly { id: string }[],
): SidebarChapter[] {
	return serie.chapters.map((chapter) => ({
		title: chapter.title,
		modules: chapter.modules.map((module) => ({
			title: module.title,
			icon: module.icon,
			lessons: module.lessons.map((lesson): SidebarLesson => {
				const basename = lessonBasename(lesson.file);
				const guide = guides.find(
					(entry) =>
						entry.id === basename ||
						entry.id.endsWith(`/${basename}`),
				);
				return {
					title: lesson.title,
					href: guide ? `/guides/${guide.id}` : "#",
					id: guide?.id ?? basename,
				};
			}),
		})),
	}));
}

export function getSerieForGuideId(
	guideId: string,
	series: readonly Serie[],
): Serie | null {
	return (
		series.find(
			(serie) =>
				guideId === serie.slug || guideId.startsWith(`${serie.slug}/`),
		) ?? null
	);
}
