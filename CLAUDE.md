# CLAUDE.md

## snowy_test 스토리아크 세트 (boss_list 20260612)

`boss_list/snowy_20260612_144438.json` 의 보스 10마리를 기반으로 만든 스토리아크 세트.
보스당 **3챕터 순차 시리즈**(도입 → 전개 → 트위스트 엔딩)로 구성되며, 총 30개.

- 위치: `src/lib/data/storyarc/snowy_test/`
- 파일명: `storyarc_snowy_<boss>_<level>.ts`
- export / id: `storyarc_snowy_<boss>_<level>` / `id: 'snowy_<boss>_<level>'`
- `index.ts` 의 `storyarcRegistry` 에 등록됨 (조회는 `getStoryarc(id)`).

### 레벨 규칙
`level = boss_index + (chapter_no × 10)`, `chapter_no ∈ {0,1,2}`.
boss_index 는 boss_list 의 등장 순서. 즉 0번째 보스 → level 0,10,20 / 1번째 보스 → 1,11,21 / … / 9번째 보스 → 9,19,29.

### 3챕터 구조
- **chapter 0 (도입, level=idx+0)**: surface_identity 중심 첫 조우. 끝에서 진짜 정체의 첫 균열.
- **chapter 1 (전개, level=idx+10)**: true_identity·motivation 점진적 폭로.
- **chapter 2 (엔딩, level=idx+20)**: boss_list 의 `twist` 를 실현하는 피날레.

각 파일의 `scenarioOutline` 은 order 1=intro, 2~4=rising, 5=climax_finale.
order 1~4 의 `boss` = `'random_boss'`, **order 5 의 `boss` = 그 보스의 `pool_id`**.

### 보스 ↔ pool ↔ level 매핑

| idx | 보스 (boss key) | pool_id | level (3개) |
|---|---|---|---|
| 0 | Haraldr (`haraldr`) | pool_106 | 0, 10, 20 |
| 1 | Skuld (`skuld`) | pool_107 | 1, 11, 21 |
| 2 | Skaalbane (`skaalbane`) | pool_108 | 2, 12, 22 |
| 3 | Anya (`anya`) | pool_109 | 3, 13, 23 |
| 4 | SkalHorn (`skalhorn`) | pool_110 | 4, 14, 24 |
| 5 | Cairn (`cairn`) | pool_111 | 5, 15, 25 |
| 6 | Fenrir (`fenrir`) | pool_112 | 6, 16, 26 |
| 7 | Bellus (`bellus`) | pool_035 | 7, 17, 27 |
| 8 | Astrielle (`astrielle`) | pool_034 | 8, 18, 28 |
| 9 | Archduke Finn (`finn`) | pool_033 | 9, 19, 29 |

- pool 은 **보스 정체성**에 종속(위치 무관). pool 정의는 `src/lib/data/sample/monster.ts` 의 `snowy_pools`.
  - pool_033=Finn, pool_034=Astrielle, pool_035=Bellus, pool_106~112=Haraldr/Skuld/Skaalbane/Anya/SkalHorn/Cairn/Fenrir 순.
- 근거: 기존 `src/lib/data/storyarc/snowy/` 의 각 보스 climax 가 항상 동일 pool 을 참조.

### 주의
- `level` 값은 기존 `snowy/` 100개 세트와 중복됨(예: snowy_test `haraldr_0`.level=0 = 기존 `finn_0`.level=0). 단, 조회는 id 기반이고 `level` 은 `bulk-pipeline` 의 `chapter_order = level+1` 계산에만 쓰여 무결성 문제 없음. id 는 30개 모두 기존과 unique.
- snowy_test 파일들은 기존 `snowy/` 콘텐츠(같은 보스의 1편/중간편/10편)를 재활용해 id·level·export·주석만 새 체계로 재작성한 것. 따라서 일부 `npc_roles.arc` 텍스트에 원본 화수("5편"/"10편") 표현이 남아 있을 수 있음(서사 내용 보존 차원).

## 스토리아크 재생성 (보스당 1아크, 단발)

테마 디렉토리의 storyarc 를 boss_list 에서 **LLM으로 처음부터** 생성한다. **보스당 1개 아크**(시리즈 아님). 생성기는 [storyarcGen.ts](src/lib/prompts/storyarc/storyarcGen.ts) (2단계: 이야기 → 필드).

> 과거 "시리즈 생성기"(보스당 N편 점진 reveal: seriesGen.ts / bulk-series)는 제거됨. 보스당 1아크로 단순화됨.

### 구성요소
- 프롬프트/툴: [src/lib/prompts/storyarc/storyarcGen.ts](src/lib/prompts/storyarc/storyarcGen.ts) — `buildStoryPrompt`+`storyTool`(1단계) / `buildFieldsPrompt`+`fieldsTool`(2단계) / `mergeStoryarc`.
- 오케스트레이터: [src/routes/api/storyarc/bulk/+server.ts](src/routes/api/storyarc/bulk/+server.ts) — boss_list 읽기, 보스 병렬, 결정론 필드 주입, 테마 디렉토리 덮어쓰기.
- 테마 매핑(단일 출처): [src/lib/data/storyarc/boss_pool_map.js](src/lib/data/storyarc/boss_pool_map.js) — `BOSS_POOL_MAP`(key↔pool) / `BOSS_LIST_FILE` / `OUT_DIR`. 엔드포인트·러너 공유.
- 러너: [scripts/gen-storyarcs.mjs](scripts/gen-storyarcs.mjs) (npm `gen:storyarc`).

### 생성 흐름
보스당 2콜:
1. **이야기** (`buildStoryPrompt`, temperature 기본 1.0): 필드 없이 5화 이야기만 쓴다. 게임 구조 제약(1~4화 최종보스 미등장·흔적만, 화마다 일반 보스·주 NPC, 5화 보스전)과 핵심 물건(보스 motivation 에서 정함)은 이 단계에서 지킨다.
2. **필드** (`buildFieldsPrompt`, temperature 0.5): 완성된 이야기를 보고 chapter_name·world·act_tone·복선·npc_roles·act_summary 를 채운다. 이야기는 바꾸지 않는다.
3. `mergeStoryarc`: summary = 1단계 story 그대로, final_boss 의 true_identity·motivation·twist = boss_list 그대로 → 결정론 필드 주입 → `storyarc_<theme>_<key>_<level>.ts` write.

boss_list 의 `tone`(bossGen2 `BOSS_TONES` id)이 이야기 톤을 정한다. boss_list 서사 필드(surface/true_identity·motivation·twist)는 쉬운 말로 정리돼 있어야 한다 — 입력의 어려운 말·색 단어가 그대로 결과로 옮겨진다.

### 결정론적 주입 (LLM 출력 위에 orchestrator가 덮어씀)
- `id=<theme>_<key>_<level>`, **`level=bossIndex`** (0~9), `theme`.
- 챕터 생성이 안 읽는 필드는 저장하지 않음: `rising_count`, `final_boss.appearance_npc/zodiac_sign`, `npc_roles` 의 `title/turn_order/turn_scene`(role·arc 만 저장), 5화의 빈 `random_boss_title/boss_trace`. (툴 스키마에선 계속 생성 — summary 를 쓰는 재료)
- `final_boss.id/name` = boss_list 고정. (final_boss appearance 는 `appearance_npc`/`appearance_boss` 스키마.)
- `scenarioOutline` order1~4 boss=`'random_boss'`, **order5 boss=보스 pool**, `act_tone.tension` intro/rising/climax=1/3/5.
- 보스↔key↔pool 매핑은 `boss_pool_map.js` 의 `BOSS_POOL_MAP[theme]` 에 고정. boss_list 순서와 일치.

### 실행
```bash
npm run dev &                                    # 포트 5178
npm run gen:storyarc -- --dry-run                # 대상/매핑 확인 (네트워크 0)
npm run gen:storyarc -- --theme=modern           # modern 전체
npm run gen:storyarc -- --theme=snowy --boss=haraldr  # 스모크: 한 보스만
npm run gen:storyarc                             # snowy 전체 10보스
```
**UI (임의 boss_list 파일)**: `/storyarcGen` → **벌크 (boss_list)** 탭 ([BulkTab.svelte](src/routes/storyarcGen/BulkTab.svelte)). `boss_list/bulk/` 의 JSON 을 select 로 선택(GET `/api/storyarc/bulk` 가 목록 제공, 다른 위치 파일은 직접 선택도 가능) → 보스별 key/pool 편집 → 생성. `BOSS_POOL_MAP` 에 없는 새 boss_list 용. 엔드포인트 업로드 모드(`bosses`+`mapping`+`outDirName`)로 보스당 1요청, 출력은 `src/lib/data/storyarc/<파일명>/`. pool 기본값은 placeholder `pool_<보스id>`. 전부 성공하면 `action:'register'` 1회로 `index.ts` 등록(등록 시 Vite 리로드 → 결과는 sessionStorage 로 복원). 완료 후 **다음 →** 버튼으로 **시나리오 벌크** 탭([ScenarioBulkTab.svelte](src/routes/storyarcGen/ScenarioBulkTab.svelte))으로 넘어가 `/api/scenario/bulk-pipeline` 을 아크당 1요청으로 실행(생성→process-actors→번역→`output_list/<theme>_chapter_<level+1>.json`). 생성 이후 단계 실패는 `skipGenerate` 로 재시도. UI 는 `skipTranslate:true` 로 번역을 건너뛰고, **번역** 버튼이 `/api/output/translate` 로 output_list JSON 을 직접 8개 언어 번역(덮어씀). 번역 로직은 [translateScenario.ts](src/lib/server/translateScenario.ts) 공용 — 결과를 `{id,…}` **배열**로 받는다(객체 키로 받으면 Gemini 가 `room:1:dialogue:0` 를 `room` 으로 잘라 머지가 조용히 0건이 됐음).

옵션: `--theme=snowy|modern|desert`(기본 snowy), `--concurrency`(기본3), `--batch`(기본3), `--boss=key|idx[,…]`(부분집합). (snowy 10 / modern 10 / desert 5 보스. forest·hell 은 pool 매핑 없어 미지원.)

### 주의
- 실행은 LLM 비용(보스당 2콜) + 테마 디렉토리 덮어쓰기(미커밋이면 복구 불가).
- 보스당 1아크 → level 집합이 기존 시리즈(0/10/20…) 와 달라짐(0~9). 재생성 후 **잉여 파일 정리 + `index.ts` 재생성** 필요.
- npc 필드는 씬당 1개 key여야 함(다운스트림 챕터 생성의 persona/role 주입 전제). 이 key 는 그 씬의 **주 NPC** 이고, 같은 아크의 다른 NPC 도 함께 나올 수 있음(chapterGen 이 아크 NPC 목록을 같이 넘김).

## _legacy

안 쓰는 코드·러너는 `_legacy/` 에 있다. 옮긴 목록과 예전 파이프라인 설명(snowy_test 챕터 생성, 넷쇼트·cozy·romance·gangster 프롬프트·엔드포인트·러너, 이야기 스타일)은 [_legacy/README.md](_legacy/README.md).
