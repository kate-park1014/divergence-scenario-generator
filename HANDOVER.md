# Handover (2026-11-23)

An internal tool that uses an LLM (Gemini) to turn boss cards → story arcs (5-episode stories) → chapter scenarios (dialogue JSON). The output `output_list/<theme>_chapter_NN.json` is handed off to the game (openrpg).

This document only covers **where a newcomer should start** and **how far the work has gotten**. Rules and commands live in the documents below; this file just links to them.

## 1. Getting started

```bash
npm install
npm run dev        # http://localhost:5178 — every generation command/script needs the dev server running
```

`.env` (not committed; get it from the previous owner):

| Key | Purpose |
|---|---|
| `GEMINI_API_KEY` | All generation and translation (`/api/gemini`, default model `gemini-3.6-flash`) |
| `DEEPSEEK_API_KEY` | `/api/deepseek`. Not used in the main flow right now |
| `WEBFRONT_DATA_DIR` | For the old card-pipeline. Moved to `_legacy`, no longer used |

## 2. Document map

| Document | What's in it | When to read it |
|---|---|---|
| [README.md](README.md) | **Workflow** (check boss_list → arcs → chapters → validation → playtest → manual fixes → translation) + progress | When processing a new boss batch, start to finish |
| [CLAUDE.md](CLAUDE.md) | Story arc generator structure, deterministic fields, CLI (`npm run gen:storyarc`), the old snowy_test set | When changing generation rules or debugging |
| [src/routes/storyarcGen/CLAUDE.md](src/routes/storyarcGen/CLAUDE.md) | For each tab of the `/storyarcGen` UI, where it reads from and writes to | When generating through the UI or fixing the screens |
| [eval/README.md](eval/README.md) | Evaluation results folder. How it differs from `.claude/agents/`, per-agent scoring criteria and output locations, prompt regression test (`npm run eval:arcs`) | When looking for review results, or checking whether a prompt change made things worse |
| [test/README.md](test/README.md) | Odyssey divergence experiment (planning, drafts, dialogue rules) | When continuing the Odyssey work |
| [_legacy/README.md](_legacy/README.md) | List of unused code/outputs and why they were retired | If you're curious about the old pipelines. Not needed for new work |

## 3. The whole flow at a glance

```
boss_list/bulk/<theme>_<timestamp>.json   Boss cards (made by the UI Boss Generation tab)
   │  2 LLM calls per boss (story → fields)     src/lib/prompts/storyarc/storyarcGen.ts
   ▼
src/lib/data/storyarc/<theme>/*.ts        Story arcs. Must be registered in storyarcRegistry in index.ts to show up in the next step
   │  generate 5 episodes → process-actors → output/save   src/lib/prompts/chapter/chapterGen.ts + chapterRules.ts
   ▼
output_list/<theme>_chapter_<level+1>.json   Chapter (the file handed to the game)
   │  validate-chapter.py → chapter-playtester → chapter_fix.py (manual fixes) → translation
   ▼
Done
```

- **UI**: Home → **생성기 (Generator)** (`/storyarcGen`). Move through the Boss Generation → Bulk → Scenario Bulk tabs with the **다음 → (Next →)** button.
- **Scripts**: When you need to set the level yourself (e.g. the 40s), use `scripts/gen-arc-one.mjs` + curl. See steps 1–3 in [README.md](README.md).
- **level ↔ chapter number**: `chapter = level + 1`. If levels collide within the same theme, the output file gets overwritten.

## 4. Folder map

| Location | Contents |
|---|---|
| `boss_list/bulk/` | Boss batch JSON. The starting point for generation |
| `boss_list/monster_pool_map.json` | Boss name + theme → game `pool_id`. The episode-5 boss pool is looked up here |
| `src/lib/data/storyarc/<theme>/` | Story arcs per theme. `index.ts` is the global registry |
| `src/lib/data/npc/` | NPC pools and personas per theme |
| `src/lib/prompts/` | `boss/bossGen2.ts`, `storyarc/storyarcGen.ts`, `chapter/chapterGen.ts`·`chapterRules.ts` — change these to change quality |
| `src/lib/data/generated/` | Intermediate files from chapter generation (one `.ts` per episode). Not final output |
| `output_list/` | Final chapter JSON |
| `eval/` | Evaluation **results**: `chapter-playtester` reviews (`playtest/`), checklists for `story-tester`, regression test outputs (`runs/`) |
| `scripts/` | `gen-arc-one.mjs`, `gen-storyarcs.mjs`, `validate-chapter.py`, `chapter_fix.py`, `eval-arcs.ts`, etc. |
| `test/` | Odyssey experiment (manuscripts unrelated to the code) |
| `.claude/agents/` | Evaluation **methods** (agent definitions): `chapter-playtester` (reads a chapter like a player and writes a review; scoring criteria are inside the file), `story-tester` (evaluates stories; pass it the checklist from `eval/` to score) |

## 5. Current status

### Chapter outputs
| Batch | boss_list | Chapters | Status |
|---|---|---|---|
| desert | `desert_20261116_114401.json` | `desert_chapter_41~50` | Generated, playtested, manually fixed, re-validated. **All 20 files have translation fields for 8 languages** |
| hell (Mystics) | `hell_20261116_164915.json` | `hell_chapter_31~40` | Same as above |

- `output_list/desert_41_50.zip`, `hell_31_40.zip` (created 11-19, not committed) — look like delivery bundles. Need to confirm whether they were actually handed off.
- [README.md](README.md)'s "Progress (as of 11-18)" and "Next steps" say translation isn't done, but the files are in fact translated. README needs updating.

### Branch
- Current branch is `odyssey-chapter1-draft`. 4 commits ahead of `main` (3 Odyssey drafts + 1 home/boss generator cleanup).
- The Odyssey work is only manuscripts inside `test/`; no code changes.

### Uncommitted work (2026-11-23)
- Merged the boss generator into the first tab of `/storyarcGen` (`BossTab.svelte`). The `/bossGen2` route is gone. The home page now has two buttons: "무작위 이벤트 (Random Event)" and "생성기 (Generator)".
- `src/routes/storyarcGen/CLAUDE.md`.

## 6. Remaining work

- [ ] When making the next boss batch, playtest to check whether the recent prompt rules (the "Rules added to the prompt this time" section at the bottom of [README.md](README.md)) are working
- [ ] Things still frequently fixed by hand: repeated lines, questions left unanswered, mixed-up NPC speech styles, appearance descriptions of regular bosses → candidates to move into the prompts
- [ ] Odyssey: turn `divergence_01.md` into dialogue, evaluate `scenario_01.md` ([test/README.md](test/README.md))
- [ ] Update README progress, confirm whether the zips were delivered

## 7. Pitfalls you must know

- **LLM cost**: Every button press or script run costs Gemini usage. 1 call per boss, 2 calls per boss for arcs, 5 episodes per chapter + retries + translation.
- **Overwriting**: Arc and chapter generation overwrite files with the same name. In particular, **hand-edited dialogue exists only in the `output_list` JSON**, so re-running `bulk-pipeline` wipes it out. Commit before running.
- **Translate last**: If you edit dialogue after translating, you have to translate again.
- **Things you must not change in boss_list**: `name`·`id` (tied to pool, monster_id, and images), `appearance`·`face`·`hair`·`style`·`theme_edit` (images already exist). Only edit the narrative fields.
- **No spoilers**: Never put boss_list's `true_identity`·`motivation`·`twist` into the game's monster data (`profile.introduction/description/background`). Players can see it outside the game. introduction = surface_identity, description = outward appearance, background = rumors at most, without revealing the true identity.
- **Twist leaking in episodes 1–4**: If the episode 1–4 summaries or npc_roles in an arc state the twist outright, it leaks straight into the dialogue. Tone it down to rumor level before generating chapters (step 2 of [README.md](README.md)).
- **The UI Bulk tab starts levels at 0**: If you need specific levels (the 40s, etc.), use the script.
- **Page reloads when registering in index.ts**: Vite reloads the page. The UI restores results from sessionStorage, so don't be alarmed.
- **git**: If you delete an arc file and recreate it with the same name, only the deletion may end up staged → `git add` before committing. Changes to `.DS_Store` and `scripts/__pycache__/` can be ignored.
- **`npm run gen:storyarc` is not for new batches**: It reads the old theme boss_lists hard-coded in [boss_pool_map.js](src/lib/data/storyarc/boss_pool_map.js) (`boss_list/<theme>.json`: snowy 100, modern 80, desert 40, forest 60, hell 30 bosses) and overwrites the theme folder starting from level 0. For new batches (`boss_list/bulk/`), use the UI Bulk tab or `gen-arc-one.mjs`. (The line in CLAUDE.md saying "forest·hell are unsupported because they have no pool mapping" is outdated — all 5 themes have mappings now.)

## 8. Picking this up with Claude Code

- The root `CLAUDE.md` and the working folder's `CLAUDE.md` are read automatically. This document is not, so start by saying "Read HANDOVER.md and get started."
- Playtesting: "Playtest desert_chapter_43" → the `chapter-playtester` agent. Reviews are saved to `eval/playtest/`.
- The "No spoilers" rule in section 7 previously existed only in the previous owner's Claude memory, so it has been copied here.
