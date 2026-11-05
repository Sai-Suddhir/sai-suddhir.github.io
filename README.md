# sai-suddhir.github.io

Personal academic website of Sai Suddhir A B, built with [Astro](https://astro.build).

## Where things live

| What | Where |
| --- | --- |
| Bio, education, honors, coursework, contact text | `src/data/content.ts` |
| One folder per project / research item | `src/content/work/<id>/index.md` |
| Project images (cover, gallery) | next to that `index.md` |
| Project PDFs (slides, reports, schematics) | `public/work/<id>/` |
| Profile photo | `src/assets/profile.jpg` |
| CV | `public/cv.pdf` |
| Colours and fonts | top of `src/styles/global.css` |

Any value starting with `TODO` shows as a yellow tag on the local preview only and never on the live site.

The small "still being built" note at the bottom of every page is `site.wip` in `src/data/content.ts`; set it to `''` to remove it.

## Adding supporting files to a project

Example: adding PCB photos, slides and code to the Hyperloop project.

1. Copy images into `src/content/work/hyperloop/` (e.g. `board-photo.jpg`).
2. Copy PDFs into `public/work/hyperloop/` (e.g. `ehw-slides.pdf`).
3. List them in `src/content/work/hyperloop/index.md`:

```yaml
cover: ./pcu-render.png          # big image under the title
gallery:
  - { src: ./board-photo.jpg, caption: "Assembled PCU board" }
documents:
  - { title: "EHW 2024 presentation", file: ehw-slides.pdf, kind: slides }
  # kind: slides | report | schematic | paper | poster | other
code:
  - { title: "Pod CAN driver", url: "https://github.com/Sai-Suddhir/...", description: "Unified CAN.c driver" }
links:
  - { label: "Team website", url: "https://..." }
video: dQw4w9WgXcQ               # a YouTube video id, or a file in public/work/<id>/
highlights:                      # keep these big-picture: words, not decimals
  - { value: "1st in Asia", label: "European Hyperloop Week 2024" }
wanted:                          # photos still to collect: empty frames on the local preview only
  - "Team photo in Zurich"
```

When a photo arrives, add it to `gallery` and delete its line from `wanted`.

The write-up below the `---` is plain Markdown (`## Headings`, `- bullets`, `**bold**`).

## Adding a new project

Copy any folder in `src/content/work/`, rename it (the folder name becomes the URL, `/work/<folder>/`), and edit `index.md`. Set `group` to `research`, `projects`, `industry` or `course` (course projects, shown as a compact list), and `order` to its position in that list. Keep `title` and `oneLiner` big-picture; the details belong in the write-up below the `---`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |

## Deploying

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
