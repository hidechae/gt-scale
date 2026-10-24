# Repository instructions

## GitHub Pages deployment

GitHub Pages publishes the `docs/` directory from `master`. The files in that
directory are production artifacts, not optional local build output.

For every change that can affect the published app—including changes under
`src/`, `public/`, `index.html`, `package.json`, Vite configuration, or build
scripts—agents must do all of the following before creating a commit or pull
request:

1. Run `npm run build`.
2. Inspect `git status` and the `docs/` diff.
3. Include every generated `docs/` update in the same commit/PR, including
   renamed or deleted hashed assets and updated `index.html`, service worker,
   manifest, or icons when applicable.
4. Do not merge a deployable source change when `docs/` does not reflect the
   output of the current source tree.

If the worktree contains unrelated changes, generate the production build from
a clean worktree at the intended commit so that only the correct `docs/`
artifacts are included.
