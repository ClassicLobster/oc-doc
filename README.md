# oc-doc

OpenClaw docs site: https://classiclobster.github.io/oc-doc/

Astro-based static documentation site for OpenClaw concepts and workflows.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is configured for GitHub Pages with the `/oc-doc` base path.

## Adding a new doc page

To make a new document show up as a doc page:

1. Add a Markdown file under:

```bash
src/pages/docs/
```

Example:

```bash
src/pages/docs/my-new-topic.md
```

That will create a page at:

```bash
/oc-doc/docs/my-new-topic/
```

2. Add a navigation link in:

```bash
src/layouts/DocsLayout.astro
```

The sidebar navigation is currently hard-coded there, so creating the Markdown file alone is not enough if you want it to show up in the left nav.

### Current doc structure

Existing docs live here:

- `src/pages/docs/architecture.md`
- `src/pages/docs/automation.md`
- `src/pages/docs/channels-sessions-memory.md`
- `src/pages/docs/context.md`
- `src/pages/docs/how-openclaw-works.md`

### Example workflow

1. Create `src/pages/docs/example.md`
2. Add a matching sidebar link in `src/layouts/DocsLayout.astro`
3. Run:

```bash
npm run dev
```

or build with:

```bash
npm run build
```
