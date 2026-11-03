import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;

export const GROUPS = [
  { key: 'research', label: 'Research' },
  { key: 'projects', label: 'Projects' },
  { key: 'industry', label: 'Industry' },
] as const;

export const groupLabel = (g: Work['data']['group']) => GROUPS.find((x) => x.key === g)?.label ?? g;

/** All work items in display order (research → projects → industry, then `order`). */
export async function getWork(): Promise<Work[]> {
  const all = await getCollection('work');
  const rank = (g: string) => GROUPS.findIndex((x) => x.key === g);
  return all.sort((a, b) => rank(a.data.group) - rank(b.data.group) || a.data.order - b.data.order);
}

/** Documents live in public/work/<id>/ unless a full URL or absolute path is given. */
export const fileUrl = (id: string, file: string) =>
  /^(https?:)?\/\//.test(file) || file.startsWith('/') ? file : `/work/${id}/${file}`;

export const isYouTube = (v: string) => /^[\w-]{11}$/.test(v);

/** Short "3 images · 2 files · code" summary for list rows. */
export function resourceSummary(w: Work) {
  const d = w.data;
  const imgs = d.gallery.length + (d.cover ? 1 : 0);
  const parts: string[] = [];
  if (imgs) parts.push(`${imgs} image${imgs > 1 ? 's' : ''}`);
  if (d.documents.length) parts.push(`${d.documents.length} file${d.documents.length > 1 ? 's' : ''}`);
  if (d.code.length) parts.push('code');
  if (d.video) parts.push('video');
  return parts;
}
