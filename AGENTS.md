# Repository instructions

## AI development workflow

Read [dev-docs/ai-workflow.md](dev-docs/ai-workflow.md) for task planning,
Claude/Codex delegation, model selection, review, and completion reporting.
These repository instructions take precedence if the documents conflict.
Keep development documentation in `dev-docs/`; `docs/` is generated production output.

### PR rules

- Use GitHub Issues as the source of truth for ongoing tasks. Prefer one Issue
  per PR; split work when a PR becomes too large.
- Before starting an Issue or preparing a sub-session prompt, inspect its current
  GitHub state, linked open/merged PRs, and recent claim comments. Do not infer
  progress from local branches or worktrees. Stop duplicate work if the Issue is
  closed, an open PR already implements the scope, or another session has claimed
  it within 24 hours. Check merged PR scope before continuing a phased Issue.
- An implementation session records its claim in an Issue comment before work,
  renews it after 24 hours when necessary, and releases it when interrupted.
  Include the session identifier, scope, and timestamp so claims are distinguishable.
- Use Conventional Commits titles and PR sections: 概要 / 変更内容 / 動作確認 /
  影響範囲・リスク. Link the Issue with `Closes #N`, or `Refs #N` when production
  verification is still needed. Do not push directly to `master`.
- Before creating a PR, obtain an independent AI review from a different model
  family: Claude reviews Codex implementation; Codex Sol reviews Claude
  implementation. Record implementation/review models and results in 動作確認.
- Classify findings as BLOCKING or NON_BLOCKING. Fix BLOCKING findings together;
  follow-up reviews check those fixes and resulting regressions. Limit automatic
  review to four rounds per Issue/PR. Unresolved findings or disagreement at the
  limit require human judgment. Reviewers report findings without editing code.
- New changes after review need review before merge. Merge only after required
  review and all applicable CI checks pass. If CI is unavailable, run the same
  checks locally and record results and justified omissions in the PR.
- The implementation session handles PR creation, CI, and merge within the
  user's authorized scope. PRs containing `dev-docs/design/` require human merge
  judgment. Keep deployment-related Issues open until the published app has been
  verified; use `Refs #N` until then.

### Verification

- `npm run build` runs TypeScript checks, the Vite production build, and service
  worker generation. For PWA/cache changes, also run
  `node --test scripts/service-worker.test.mjs` after the build.
- Verify affected UI behavior with `npm run dev` or `npm run preview` as appropriate.
  The legacy `e2e/` directory is not a configured test command; do not report it
  as a passing test suite. No lint command or GitHub Actions CI is currently
  configured; check `package.json` and `.github/workflows/` for future additions.

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
