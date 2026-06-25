import type { Lesson, Serie } from '../config/navigation';

export type FlatLesson = Lesson & {
	chapter: string;
	module: string;
};

export type LessonNavigation = {
	previous: FlatLesson | null;
	next: FlatLesson | null;
};

export type GuideNavLink = {
	href: string;
	title: string;
	module: string;
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
