// content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		cover: z.string().optional(),
		readingTime: z.number().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		type: z
			.enum([
				'Producto/Saas',
				'Personal',
				'Proyecto Academico',
				'Entretenimiento',
			])
			.default('Personal'),
		description: z.string(),
		cover: z.string(),
		stack: z.array(z.string()),
		repo: z.url().optional(),
		demo: z.url().optional(),
		featured: z.boolean().default(false),
		status: z.enum(['active', 'archived', 'in-progress']).default('active'),
		publishedAt: z.coerce.date().optional(),
		overview: z.string(),
		problem: z.string(),
		solution: z.string(),
		architecture: z.string(),
		learning: z.string(),
		learningList: z.array(z.string()).default([]),
		features: z.record(z.string(), z.string()).default({}),
		gallery: z.array(z.string()).default([]),
    architectureImage: z.string().optional(),
	}),
});

const tecnologies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tecnologies' }),
	schema: z.object({
		name: z.string(),
		image: z.string(),
		order: z.number().default(99),
	}),
});

export const collections = { blog, projects, tecnologies };
