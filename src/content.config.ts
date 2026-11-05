import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One folder per project: src/content/work/<id>/index.md
 *   - images (cover, gallery) live next to index.md
 *   - PDFs (slides, reports, schematics) live in public/work/<id>/
 * The page is generated at /work/<id>/.
 */
const work = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/work',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      group: z.enum(['research', 'projects', 'industry', 'course']),
      order: z.number(), // position within its group on the home page
      oneLiner: z.string(), // shown in the list on the home page
      org: z.string().optional(),
      role: z.string().optional(),
      period: z.string().optional(),
      advisor: z.string().optional(),
      status: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // big numbers shown under the title, e.g. { value: '96.2%', label: 'efficiency' }
      highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      // images next to index.md
      gallery: z.array(z.object({ src: image(), caption: z.string().optional() })).default([]),
      // files in public/work/<id>/ (or a full URL)
      documents: z
        .array(
          z.object({
            title: z.string(),
            file: z.string(),
            kind: z.enum(['slides', 'report', 'schematic', 'paper', 'poster', 'other']).default('other'),
            note: z.string().optional(),
          })
        )
        .default([]),
      code: z.array(z.object({ title: z.string(), url: z.string(), description: z.string().optional() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      // YouTube video id (e.g. dQw4w9WgXcQ) or a file in public/work/<id>/
      video: z.string().optional(),
      // Photos still to be added. Each shows as an empty frame on the local
      // preview only (npm run dev) and is hidden on the live site.
      wanted: z.array(z.string()).default([]),
    }),
});

export const collections = { work };
