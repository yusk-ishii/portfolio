import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/works' }),
  schema: z.object({
    order: z.number().default(99),
    title: z.string(),
    tags: z.string(),
    description: z.string(),
    date: z.string(),
    scope: z.string(),
    stack: z.string(),
    overview: z.string(),
    heroImage: z.string().optional(),
    thumbnailImage: z.string().optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    notion: z.string().url().optional(),
    sections: z.array(
      z.object({
        heading: z.string(),
        body: z.array(z.string()),
        image: z.string().optional(),
        video: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { works };
