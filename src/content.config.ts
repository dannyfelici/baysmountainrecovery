import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Interior pages, generated from the content docs in Google Drive.
// Each file's frontmatter holds the URL, meta title, and meta description from its doc.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    eyebrow: z.string(),
    path: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    image: z.string(),
    lede: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { pages };
