# GtScale

[GtScale](https://hidechae.github.io/gt-scale/) is a guitar and bass scale viewer. It supports 4–8 string instruments, common scales, chord shapes, root-note selection, and interval or note-name labels.

## Development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production site is emitted to `docs/` for GitHub Pages.

## PWA

GtScale can be installed from a supported browser's install menu. On iPhone or
iPad, open the site in Safari and choose Share → Add to Home Screen.
After the first online visit finishes installing the service worker, the entire
scale viewer works offline, including instrument, root, scale, and chord selection.

The production build generates a versioned service worker that caches all built
assets. Updates install in the background and take effect after all GtScale tabs
and installed-app windows are closed and reopened. Caches are scoped to the app
so other GitHub Pages sites on the same origin are unaffected.

To check locally, run `npm run build` followed by `npm run preview`. Open the
preview once online, wait for the service worker to activate, then switch the
browser's developer tools to offline and reload. Service workers require HTTPS
or localhost and are disabled in the development server.

## Stack

- React 19
- TypeScript
- Vite

## AI development workflow

See [AI 開発運用方針](dev-docs/ai-workflow.md) for Claude/Codex task delegation,
model selection, and independent review. Repository rules are defined in
[AGENTS.md](AGENTS.md); Claude Code loads them through [CLAUDE.md](CLAUDE.md).
Development documents live in `dev-docs/` because `docs/` is generated for GitHub Pages.
