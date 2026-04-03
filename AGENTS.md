# AGENTS.md - oc-doc

This repo is an Astro-based static docs site published to GitHub Pages.

## What this project is

- Repo: `oc-doc`
- Purpose: lightweight documentation site for OpenClaw plus adjacent AI topics
- Framework: Astro
- Output: static site
- Base path: `/oc-doc`

Core files and folders:

- `src/pages/docs/*.md` — doc pages
- `src/pages/index.astro` — homepage
- `src/layouts/DocsLayout.astro` — shared docs layout and sidebar renderer
- `src/lib/docs-nav.ts` — sidebar navigation config
- `astro.config.mjs` — Astro site/base config

## How to work in this repo

When making changes:

1. Read `README.md`
2. Check `src/lib/docs-nav.ts` if adding, removing, renaming, or regrouping docs
3. Check `src/layouts/DocsLayout.astro` if changing nav rendering, layout, or styling
4. Build before finishing

Use:

```bash
npm run build
```

## Adding a new docs page

To add a new page that shows up in the site:

1. Create a markdown file under `src/pages/docs/`
2. Add a matching entry in `src/lib/docs-nav.ts`
3. Run `npm run build`

Example path:

```bash
src/pages/docs/my-topic.md
```

That page will render at:

```bash
/oc-doc/docs/my-topic/
```

## Conventions

- Keep docs clear and practical
- Prefer short sections with strong headings
- Use bullets generously
- Keep explanations beginner-friendly unless the page is explicitly advanced
- Add `flashCards` frontmatter for pages when it helps reinforce the topic
- Keep terminology consistent across related docs

## Styling / layout notes

- The sidebar is sticky and scrollable on larger screens
- The nav is grouped into sections and rendered from `src/lib/docs-nav.ts`
- Sections are collapsible; active sections open automatically
- On mobile, the sidebar becomes non-sticky

## Safety rails for edits

- Do not hardcode `/oc-doc` into page links when `BASE_URL` or nav helpers are available
- Do not reintroduce hardcoded sidebar link lists inside `DocsLayout.astro` unless explicitly intended
- If you move or rename a doc page, update `src/lib/docs-nav.ts`
- If you change layout behavior, run a full build to catch Astro/template issues

## Before you finish

- Run `npm run build`
- Sanity-check any changed routes or nav labels
- Commit your changes
