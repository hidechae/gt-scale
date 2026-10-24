# AI 開発運用方針

Claude Code を開発全体のオーケストレーターとして使い、Claude と Codex のモデル・利用枠を
分散しながら開発するための方針。

このドキュメントは**進め方**を定める。GtScale の必須ルールは [AGENTS.md](../AGENTS.md) にあり、
**衝突した場合は AGENTS.md が優先する**。Claude Code も [CLAUDE.md](../CLAUDE.md) 経由で同じルールを読む。

元定義: `hidechae/veles` の `docs/ai-workflow.md`。モデルの役割分担は元定義を継承する。
モデル ID は利用環境で選択可能か確認し、利用できない場合は同じ役割のモデルを選んで記録する。
この文書は開発運用の定義であり、GitHub Actions の自動実行設定ではない。
`docs/` は GitHub Pages の生成物専用とし、開発文書と design doc は `dev-docs/` に保存する。

```text
Main Claude Session
        │
        │ task management / planning
        │
        ├── Task A → prompt + recommended model
        ├── Task B → prompt + recommended model
        └── Task C → prompt + recommended model
                         │
                         │ human starts session
                         ▼
                Claude Sub-session
                         │
                  task execution → PR → merge
                         │
               ┌─────────┴─────────┐
               │                   │
            Claude              Codex
                            Luna/Terra/Sol
```

---

## 1. Main Session

Main Session は **実装担当ではなく、開発管理・設計・タスク分解を担当するセッション** とする。

担当:

- ユーザー要求の理解 / 要件整理
- 必要な repository 調査
- architecture / implementation strategy の検討
- design doc の起案(`dev-docs/design/NNNN-slug.md`)
- タスク分解と依存関係管理、着手可能なタスクの判定
- Issue の起票・更新、GitHub Project を利用する場合は Status 同期
- Sub-session 用の実行プロンプト作成と推奨 Claude モデルの選択
- Sub-session の結果の統合・評価、次に着手可能なタスクの提示

原則として Main Session 自身は大規模な実装を行わない。実装コンテキストを過剰に蓄積させず、
プロジェクト全体の状態・設計・意思決定を保持することを優先する。

ただし **1 セッションで完結する小さな変更まで Sub-session に分ける必要はない**。
分割のオーバーヘッドが実作業を上回る場合は Main Session が直接実装してよく、
その場合も AGENTS.md の PR ルール(独立 AI レビュー・CI・マージ)は同じように適用する。

---

## 2. タスク管理

Main Session は開発要求を独立して実行可能なタスクへ分解する。

**タスクは GitHub Issue として管理する。Main Session のメモリ上に別のタスクリストを作らない**
(Issue / GitHub Project と乖離するため)。Issue 本文に最低限これを書く:

```text
Issue
├── objective        … 達成すること
├── context          … 背景・関連する design doc / コード
├── dependencies     … 依存する Issue 番号
├── scope            … 変更してよい範囲
├── acceptance criteria … 完了条件
└── verification     … 実行すべきテスト・確認方法
```

推奨 Claude モデルは Issue には書かず、Sub-session 用プロンプトに書く(状況で変わるため)。

タスクは可能な限り Sub-session 単体で完結する粒度にする。基本は 1 Issue = 1 PR なので、
**PR が大きくなりすぎる粒度は分解のサイン**。

```text
large task → investigation → implementation → tests → review
```

巨大なタスクを強いモデルに丸投げするより、適切に分割することを優先する。

---

## 3. Sub-session Prompt

タスクが着手可能になったら、Main Session は人間が新しい Claude Code session にそのまま
投入できる **self-contained な実行プロンプト** を作る。

```text
Recommended model: Sonnet / Opus

## Objective
このセッションで達成すること。

## Context
背景情報・設計判断・関連箇所(design doc / Issue 番号 / 該当ファイル)。

## Scope
変更してよい範囲。

## Requirements
満たすべき仕様。

## Constraints
既存 architecture、互換性、変更禁止事項など。

## Acceptance Criteria
完了条件。

## Verification
実行すべきテスト・確認方法。

## Codex Usage
Codex を利用すべき場面と推奨モデル。
```

**プロンプトを作る前に GitHub 上の Issue・関連 PR・着手コメントを確認し、その Issue が
完了済みでも作業中でもないことを確認する。** `gh issue view N --comments` と
`gh pr list --state all --search "N in:body"` などで関連付けも確認する。検索結果は本文を読み、
対象 Issue との関連を確かめる。 ローカルの worktree やブランチの状態を
進捗の根拠にしない(AGENTS.md「重複着手の防止」)。

Sub-session が Main Session の会話履歴を知らなくても実行できるプロンプトにする。
「前に話した通り」「先ほどの設計」など Main Session の履歴に依存する指示は禁止する。

---

## 4. Claude モデル選択

### Sonnet — 既定

原則として Sub-session は **Sonnet** を使う。

- 通常の feature implementation / bug fix
- React コンポーネント・音楽理論データ・表示制御などの既存パターンに沿った実装
- tests
- repository investigation
- 中規模までの refactoring
- Codex の作業結果の確認・統合

迷った場合は Sonnet を選ぶ。

### Opus — 高度な reasoning がタスクの中心のとき

- architecture / domain modeling(design doc の起案を含む)
- 複数 domain にまたがる変更
- 大規模 refactoring
- 曖昧な仕様からの設計、複数の設計案からの重要な判断
- failure mode の分析
- スキーマ変更を伴う migration など high-risk な変更
- Sonnet では解決困難と予想される問題

**単に「実装量が多い」という理由だけで Opus を指定しない。**
実装量が多い場合はタスク分割または Codex への委譲を優先する。

Main Session も同じ基準で選ぶ。タスク分解や進捗管理だけなら Sonnet、
architecture を詰めるなら Opus。

---

## 5. Sub-session の責務

Sub-session は割り当てられたタスクの **実行責任者** である。

1. 指示内容を確認する
2. 必要な repository 調査を行う
3. 実装方針を決定する
4. Claude 自身で処理する部分と Codex に委譲する部分を判断する
5. 実装する
6. 変更に応じて検証する(`npm run build`、PWA 変更時は `node --test scripts/service-worker.test.mjs`、必要な画面確認)。
   公開アプリに影響する場合は生成された `docs/` の全変更も含める
7. **PR 前に実装担当と異なる系列の AI レビューを通す**
   (AGENTS.md「独立 AI レビュー」)
8. レビュー結果を検証し、BLOCKING の指摘に対応する
9. Acceptance Criteria を確認する
10. **PR を作成し、CI 確認とマージまで自分で行う**
    (`dev-docs/design/` 配下の PR はマージせず人間に依頼する)
11. Main Session に返せる形で結果をまとめる

Codex の回答を無条件に採用してはいけない。**Sub-session の Claude が最終的な実装責任を持つ。**

---

## 6. Codex の基本方針

Codex は Sub-session から利用する **独立した実装・調査・レビューエージェント** とする。

目的:

- Claude の利用枠の節約 / 実装作業の分散 / parallel execution
- 独立した視点の取得、adversarial review、Claude の blind spot の発見
- difficult debugging

Codex を呼ぶための説明・結果確認のコストが実作業より大きい小タスクでは、
Claude 自身で処理してよい。

### 実装を委譲した場合の注意

**実装担当とレビュアーは異なる系列にする**(AGENTS.md「独立 AI レビュー」)。Codex が
実装した変更を Codex Sol にレビューさせるのではなく、通常は Claude Sonnet、高リスク変更は
Claude Opus がレビューする。Claude が実装した変更は Codex Sol がレビューする。

```text
実装 Codex Luna / Terra → レビュー Claude Sonnet / Opus
実装 Claude             → レビュー Codex Sol
実装 Codex Sol          → 使わない
```

Sol にしか解けない難所は「実装の委譲」ではなく §9 Pattern E の**調査**として渡し、
実装は Claude か Terra が行う。レビュアーはコードを直接修正せず、指摘を実装担当へ返す。

自動更新 bot の運用はこのリポジトリでは未定義。導入するときにレビュー・CI・マージ条件を
明示的に定め、他リポジトリの自動マージ設定を前提にしない。

委譲したかどうか、どのモデルを使ったかは PR 本文の「動作確認」に書く。

---

## 7. Codex モデル選択

モデル ID は `gpt-5.6-luna` / `gpt-5.6-terra` / `gpt-5.6-sol`。
`codex exec ... -m <model>` または `-c model=...` で指定する。

**実装・調査を委譲するとき**の基本エスカレーションは `Luna → Terra → Sol`。
通常実装の既定は Terra / medium effort とし、Sol は高難度の調査と Claude 実装のレビューに
限定する。

### Luna — cheap worker

明確で局所的な作業。test generation / rename / lint / format / type error /
struct・DTO / mock / boilerplate / repetitive changes / 単純な複数ファイル変更。
特に大量の機械的作業では Luna を優先する。

### Terra — implementation worker

Codex に通常の実装を委譲するときの **default model**。
repository investigation + implementation / 既存パターンに沿った実装 / normal bug fix /
independent feature implementation / 複数ファイル変更 / tests を含むまとまった実装。

仕様が完全には明記されていなくても、repository を調査すれば判断できるタスクに適している。

### Sol — specialist / reviewer

レビューと高難度の調査・推論に使う。
Claude が実装した変更の PR 前レビューに加えて、difficult production bug / concurrency /
data integrity / performance investigation / security review / architecture review /
complex migration review / Terra が解決できなかった問題に使う。

**Sol を implementation worker として使わない**(§6)。書き手ではなく読み手に徹させる。

---

## 8. Claude と Codex の役割分担

```text
                    TASK
                      │
        ┌─────────────┴─────────────┐
    reasoning                   execution
        │                           │
     Claude                      Codex
        │                           │
 ┌──────┴──────┐           ┌────────┼────────┐
Sonnet       Opus         Luna     Terra     Sol
normal      complex       cheap    normal    hard
```

> Claude は考える・統合する。Codex は独立して実行・検証する。

機械的に分けるのではなく、タスクに応じて柔軟に判断する。

---

## 9. 実行パターン

### Pattern A — 通常実装

```text
Main Session ──prompt + Sonnet──▶ Sonnet Sub-session ──▶ implementation ──▶ tests
    ──▶ Codex Sol review ──▶ PR
```

小〜中規模なら実装に Codex を使う必要はない。Claude が実装したため、PR 前レビューは
Codex Sol が担当する。

### Pattern B — Codex に実装を委譲

```text
Main Session ──prompt + Sonnet──▶ Sonnet Sub-session
    │ task analysis
    ▼
Codex Terra ── implementation + tests
    │
    ▼
Claude Sonnet / Opus ── review / integration / verification ──▶ PR
```

まとまった実装を渡せる場合の基本形。通常は Sonnet、高リスク変更は Opus がレビューする。
Codex Sol を重ねて呼ばず、異なる系列のレビュー1本にする。

### Pattern C — cheap delegation

```text
Sonnet Sub-session
      ├── main implementation
      └── Codex Luna ── tests / boilerplate / repetitive changes
```

単純作業を Luna に委譲し、Claude のコンテキストと利用枠を重要な判断に集中させる。

### Pattern D — 重要な変更

```text
Claude Opus ── design ──▶ Codex Terra ── implementation + tests
    ──▶ Claude Opus ── critical review ──▶ Codex Terra ── fix
    ──▶ Claude Opus ── focused re-review (必要な場合のみ) ──▶ PR
```

Opus は要件・設計と高リスクレビューを担当し、実装は Terra に分離する。

### Pattern E — 難しいバグ

```text
Claude ── initial investigation ──▶ Codex Sol ── independent root-cause investigation
    ──▶ Claude ── evidence comparison ──▶ fix + verification
```

同じモデルで仮説を繰り返すより、独立したモデルに調査させる。

### Pattern F — design doc / architecture

```text
Main Session / Opus Sub-session ── design doc 起案
    ──▶ Codex Sol ── critical review ──▶ Claude ── 反映 ──▶ 人間がマージ判断
```

Codex には別案を作らせるだけでなく、hidden assumptions / failure modes /
unnecessary complexity / scalability / maintainability / データ整合性 /
backward compatibility / migration risks を批判的に検証させる。

design doc の PR は合意形成が目的なので、**マージは人間が行う**(AGENTS.md)。

---

## 10. 実装・レビュープロンプト方針

実装や調査を委譲するときは目的と責務を明確にする。特に Codex Sol には以下を含める。

```text
Investigate the existing implementation before making changes.
Respect the existing architecture and conventions.
Identify the root cause before proposing a fix.
Prefer the smallest change that correctly solves the problem.
Do not perform unrelated refactoring.
Verify claims against the actual code.
Run relevant tests when possible.
Report uncertainties explicitly.
```

Claude / Codex を問わず、レビューの場合はさらに:

```text
Do not invent issues merely to provide feedback.
Prioritize correctness and meaningful risks over style preferences.
Classify findings as BLOCKING or NON_BLOCKING.
Only BLOCKING findings should trigger another implementation pass.
```

AI レビューは 1 Issue / PR につき最大4回とする。1回目の BLOCKING はまとめて修正し、
2回目以降は前回指摘の解消と修正差分の regression だけを確認する。4回目にも BLOCKING が
残る場合は自動ループを止め、人間が判断する。NON_BLOCKING は必要なら follow-up Issue にする。

---

## 11. 結果の検証

Codex の結果は Claude が検証する。最低限:

- 実際のコードと整合しているか
- requirements / acceptance criteria を満たしているか
- 既存 architecture と整合しているか(音程・スケールの定義、表示制御、PWA の更新・キャッシュ動作など)
- unnecessary complexity がないか / scope を逸脱していないか
- tests が十分か

Claude と Codex の意見が異なる場合、**モデルの強さではなく evidence を優先する。**
コード、テスト結果、仕様、再現結果を判断材料とする。

---

## 12. Main Session への完了報告

Sub-session の作業結果は **PR 本文(概要 / 変更内容 / 動作確認 / 影響範囲・リスク)** に書く。
Main Session への報告はそれを重複させず、差分だけを短く伝える。

```text
## Result
PR 番号とマージ状況。

## Decisions
実装中に行った重要な判断(PR 本文に書ききれなかったもの)。

## Remaining Issues
未解決事項や follow-up(必要なら Issue を起票する)。

## Status
DONE / BLOCKED / NEEDS_REVIEW
```

Codex の利用状況(モデル・委譲した作業・主な指摘)は PR 本文の「動作確認」に書くため、
報告側では繰り返さない。

Main Session はこれをもとに Issue を更新し、GitHub Project を利用する場合は Status も同期する。

---

## 13. Resource optimization

Claude と Codex の利用枠は有限。モデルは能力だけでなく **利用枠の効率** で選ぶ。

```text
Claude: Sonnet → Opus only when necessary
Codex:  Luna → Terra → Sol only when necessary
```

避けること:

- 単純作業で Opus を使う / 実装を Sol に渡す(§6)
- Luna で十分な作業を Terra に渡す
- 同じ repository を複数の高コストモデルに無目的に読ませる
- 長大なコンテキストを必要なく Codex に渡す
- 同じ失敗を同じモデルで何度も繰り返す
- 同じ変更を Claude と Codex の両方で重複レビューする
- push ごとに AI レビューを自動実行する

モデルを上げる前に問う:

> より強いモデルが必要なのか? それともタスクを小さくすれば現在のモデルで解決できるのか?

可能なら **task decomposition を model escalation より優先する。**

---

## 14. モデル選択一覧

| Work | Model |
|---|---|
| Main Session / タスク管理・進捗管理 | Claude Sonnet |
| Main Session / architecture・design doc 起案 | Claude Opus |
| 通常の Sub-session | Claude Sonnet |
| 複雑な reasoning が中心の Sub-session | Claude Opus |
| 単純・機械的な委譲作業 | Codex Luna (`gpt-5.6-luna`) |
| 通常の実装委譲 / 調査 + 実装 | Codex Terra (`gpt-5.6-terra`) |
| Codex 実装の通常レビュー | Claude Sonnet |
| Codex 実装の高リスクレビュー | Claude Opus |
| Claude 実装のレビュー | Codex Sol (`gpt-5.6-sol`) |
| 難しいデバッグ / 本番調査 | Codex Sol (`gpt-5.6-sol`) |
| architecture second opinion | Codex Sol (`gpt-5.6-sol`) |

---

## 15. 原則

- **Main Session manages. Sub-sessions execute.**
- **Every executable task gets a model recommendation.** — Sub-session プロンプトには必ず推奨モデルを書く
- **Claude orchestrates. Codex assists.** — Sub-session の Claude が実行責任者
- **Use the cheapest model capable of doing the task reliably.** — 高性能モデルを既定にしない
- **Decompose before escalating.**
- **Cross-model review is valuable.** — 実装担当と異なる系列のモデルでレビューする(§6)
- **Bound the review loop.** — 自動レビューは最大4回。続行判断は人間へ戻す
- **Evidence beats model authority.**
