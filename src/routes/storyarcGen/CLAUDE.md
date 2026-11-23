# /storyarcGen — 생성기 페이지

홈의 **생성기** 버튼으로 들어오는 한 페이지. 탭이 **보스 생성 → 벌크 (boss_list) → 시나리오 벌크** 순서로 이어지고, **신규 생성** 탭은 흐름 밖(아크 1개 수동 입력)이다. 각 탭의 **다음 →** 버튼이 결과를 다음 탭에 넘긴다.

```
보스 생성 ──(boss_list 파일명)──▶ 벌크 ──(storyarc id 목록)──▶ 시나리오 벌크
 boss_list/bulk/*.json          src/lib/data/storyarc/<폴더>/   output_list/<theme>_chapter_NN.json
```

| 탭 | 파일 | 읽는 데이터 | 쓰는 데이터 |
|---|---|---|---|
| 보스 생성 | [BossTab.svelte](BossTab.svelte) | `bossGen2.ts` 의 `WORLD_PRESETS`·`BOSS_TONES` | `boss_list/bulk/<theme>_<timestamp>.json` |
| 벌크 (boss_list) | [BulkTab.svelte](BulkTab.svelte) | `boss_list/bulk/*.json`, `boss_list/monster_pool_map.json`, `npc_by_theme` | `src/lib/data/storyarc/<outDirName>/*.ts` + `index.ts` 등록 |
| 시나리오 벌크 | [ScenarioBulkTab.svelte](ScenarioBulkTab.svelte) | `storyarcRegistry`, NPC 풀·페르소나, `output_list/*.json` | `src/lib/data/generated/*.ts` → `output_list/<theme>_chapter_NN.json` |
| 신규 생성 | [+page.svelte](+page.svelte) | 폼/JSON 으로 직접 입력한 보스, `npc_by_theme` | `src/lib/data/storyarc/storyarc_<theme>_<id>_V<n>.ts` + `index.ts` 등록 |

LLM 호출은 전부 `/api/gemini` (기본 모델 `gemini-3.6-flash`, 키는 `.env` 의 `GEMINI_API_KEY`).

## 1. 보스 생성 ([BossTab.svelte](BossTab.svelte))

- **입력**: 화면에서 고르는 값뿐. 입력 파일 없음.
  - 세계관·테마: [bossGen2.ts](../../lib/prompts/boss/bossGen2.ts) `WORLD_PRESETS` (Vikings·snowy / Gangsters·modern / Amazons·forest / Blademasters·desert / Mystics·hell)
  - 톤: 같은 파일 `BOSS_TONES`. "전체"는 톤별 1개씩 6개.
- **생성**: 보스 1명당 `/api/gemini` 1콜 (`buildBossGen2Prompt` + `bossGen2Tool`). 순차 실행, 앞서 만든 보스 이름·정체를 다음 프롬프트에 넘겨 중복을 피한다.
- **저장**: `/api/boss/save` → `boss_list/bulk/<theme>_<timestamp>.json` (`{theme, bosses:[…]}`). 화면용 `_tone` 라벨은 빼고 저장.
- **다음 →**: 저장한 파일명을 벌크 탭의 `initialFile` 로 넘긴다.

## 2. 벌크 (boss_list) ([BulkTab.svelte](BulkTab.svelte))

- **입력**:
  - `GET /api/storyarc/bulk` → `boss_list/bulk/` 파일 목록 + `boss_list/monster_pool_map.json`(보스 이름+theme → pool_id).
  - `GET /api/storyarc/bulk?file=x` → 고른 파일 원문. 다른 위치의 JSON 은 파일 선택으로 직접 올릴 수 있다.
  - 보스 탭에서 넘어오면 `initialFile` 을 자동 선택.
- **보스별 key/pool**: key = 보스 이름 영소문자. pool = `monster_pool_map.json` 에서 이름+theme 로 찾고, 없으면 placeholder `pool_<보스id>`. 표에서 고칠 수 있다.
- **생성**: 보스당 `POST /api/storyarc/bulk` 1요청 (업로드 모드: `bosses`+`mapping`+`outDirName`). 서버에서 보스당 LLM 2콜 — [storyarcGen.ts](../../lib/prompts/storyarc/storyarcGen.ts) 의 이야기(`buildStoryPrompt`) → 필드(`buildFieldsPrompt`) → `mergeStoryarc`. NPC 후보는 `npc_by_theme[theme]` ([npc_pool.ts](../../lib/data/npc/npc_pool.ts)).
- **저장**: `src/lib/data/storyarc/<outDirName>/storyarc_<theme>_<key>_<level>.ts`, `level` = boss_list 안 순서(0부터). `outDirName` 기본값 = boss_list 파일명.
- **등록**: 전부 성공하면 `action:'register'` 1회로 `src/lib/data/storyarc/index.ts` 에 등록. index.ts 가 바뀌면 Vite 가 페이지를 리로드하므로, 결과를 sessionStorage(`RESTORE_KEY`)에 넣어 두고 리로드 후 `+page.svelte` 가 벌크 탭을 다시 열어 복원한다.
- **다음 →**: 만든 storyarc id 목록(`<theme>_<key>_<level>`)을 시나리오 탭에 넘긴다.

## 3. 시나리오 벌크 ([ScenarioBulkTab.svelte](ScenarioBulkTab.svelte))

- **입력**: `storyarcRegistry` ([storyarc/index.ts](../../lib/data/storyarc/index.ts)) 에서 테마별 아크 목록. 벌크 탭에서 넘어온 id 는 미리 체크된다. 그래서 벌크 탭의 등록이 끝나야 여기 보인다.
- **생성**: 아크당 `POST /api/scenario/bulk-pipeline` 1요청 (`skipTranslate:true`). 서버 단계:
  1. 5화 생성 — [chapterGen.ts](../../lib/prompts/chapter/chapterGen.ts) (`chapterRules.ts`·`scenarioExample` 규칙, NPC 페르소나 `getNpcPersona` from [npc/index.ts](../../lib/data/npc/index.ts)) + [scenarioBase.ts](../../lib/data/sample/scenarioBase.ts). `/api/scenario/save` → `src/lib/data/generated/scenario_<arcId>_<order>.ts`
  2. `/api/scenario/process-actors` — 대사 speaker 중 `actors` 에 없는 인물을 테마별 보스 목록(hell·modern 은 `src/lib/data/sample/boss/*`, snowy 는 storyarc 의 final_boss)·NPC 풀(`src/lib/data/npc/*_npc_pool.ts`)에서 찾아 채우고, 빠진 NPC 등장(enter) 연출을 넣는다. 어디에도 없는 speaker 가 있으면 실패.
  3. `/api/output/save` → `output_list/<theme>_chapter_<level+1>.json` (2자리). 피날레 boss 의 `pool_id`·`monster_id` 는 화면에서 덮어쓸 수 있다(기본 = 아크 order5 의 pool).
- **재시도**: 생성 이후 단계만 실패하면 `skipGenerate` 로 `generated/*.ts` 를 재사용.
- **번역**: 별도 버튼 → `/api/output/translate` 가 `output_list` JSON 을 8개 언어로 번역해 덮어쓴다 ([translateScenario.ts](../../lib/server/translateScenario.ts)).
- **보기**: id 를 누르면 `GET /api/output?file=…` 로 output 을 읽어 대본([ScenarioScript.svelte](ScenarioScript.svelte))·시나리오 JSON·스토리아크 JSON 을 보여 준다. 같은 chapter 번호를 다른 아크가 썼으면 `scenario_id` 로 걸러 경고.

## 4. 신규 생성 ([+page.svelte](+page.svelte))

- **입력**: 보스 1명을 폼 또는 JSON(JS 객체 리터럴 허용)으로 직접 입력 + 테마 선택(`npc_by_theme`).
- **생성**: 브라우저에서 `/api/gemini` 2콜 — 벌크와 같은 `buildStoryPrompt` → `buildFieldsPrompt` → `mergeStoryarc`.
- **저장**: `/api/storyarc/save` → `src/lib/data/storyarc/storyarc_<theme>_<id>_V<n>.ts` (테마 폴더가 아니라 최상위, 같은 id 면 V 번호 증가) + `index.ts` 등록(같은 id 면 import 를 새 버전으로 교체).

## 주의

- **level 겹침**: 벌크 탭의 level 은 boss_list 순서라 항상 0부터다. 같은 테마의 다른 아크와 level 이 같으면 `output_list/<theme>_chapter_NN.json` 을 덮어쓴다. 시나리오 탭이 선택 안에서의 겹침은 막지만 기존 output 파일과의 겹침은 막지 않는다. 40번대처럼 특정 level 이 필요하면 [README.md](../../../README.md) 의 스크립트를 쓴다.
- **덮어쓰기**: 벌크 탭은 `outDirName` 폴더의 같은 이름 파일을, 시나리오 탭은 같은 chapter 번호의 output 을 덮어쓴다. 미커밋이면 복구 불가.
- **비용**: 보스 생성 1콜/보스, 스토리아크 2콜/보스, 시나리오 5화 생성 + 번역. 버튼을 누를 때마다 LLM 비용이 든다.
- 같은 boss_list 를 CLI 로 돌리는 경로(`npm run gen:storyarc`, `BOSS_POOL_MAP`)는 루트 [CLAUDE.md](../../../CLAUDE.md) 참고.
