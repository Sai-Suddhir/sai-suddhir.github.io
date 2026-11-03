# sai-suddhir.github.io

Personal academic website of Sai Suddhir A B, built with [Astro](https://astro.build).

## Editing content
Almost everything you'd want to change lives in **`src/data/content.ts`** (bio, research, projects, honors, skills).
- Photos and project images: `src/assets/` (reference the file name in `content.ts`)
- CV: replace `public/cv.pdf`
- Colours and fonts: the tokens at the top of `src/styles/global.css`

## Commands
| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the built site |

## Deploying
Pushing to `main` builds and deploys automatically to GitHub Pages via `.github/workflows/deploy.yml`.
