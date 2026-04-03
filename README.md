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

2. Add a navigation entry in:

```bash
src/lib/docs-nav.ts
```

The sidebar navigation is rendered from that shared nav config.

### Current doc structure

Existing docs live here:

- `src/pages/docs/architecture.md`
- `src/pages/docs/automation.md`
- `src/pages/docs/channels-sessions-memory.md`
- `src/pages/docs/context.md`
- `src/pages/docs/how-openclaw-works.md`

### Example workflow

1. Create `src/pages/docs/example.md`
2. Add a matching nav entry in `src/lib/docs-nav.ts`
3. Run:

```bash
npm run dev
```

or build with:

```bash
npm run build
```
