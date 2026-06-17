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

## snowy_test 챕터 생성 파이프라인 실행

snowy_test 의 30개 storyarc 를 입력으로 챕터(시나리오) 데이터를 생성하는 파이프라인. 새 코드 없이 **기존 엔드포인트** `POST /api/scenario/bulk-pipeline` 를 러너 스크립트로 호출한다.

### 파이프라인 단계 (아크 1개당)
`생성(chapterGen) → process-actors(액터 보강) → translate(9개 언어) → output/save`
- **생성**: `src/lib/prompts/chapterGen.ts` 프롬프트 + Gemini(`/api/gemini`)로 5씬(order 1~5) 생성 → `src/lib/data/generated/scenario_<id>_<NN>.ts`.
- **process-actors**: 대사 speaker 를 테마 풀(`snowy_npc_pool` 등)에서 찾아 `actors` 에 보강(로컬, LLM 아님).
- **translate**: 한국어 → 영어·일본어·중국어·프랑스어·스페인어·베트남어·태국어·힌디어 8개 추가(`/api/translate`, Gemini).
- **output/save**: 5씬을 합쳐 `output_list/snowy_chapter_<NN>.json` 저장, 소스 .ts 는 `archived_scenarios/<id>_chapter_<NN>_<제목>/` 로 이동.

### 핵심 규칙
- **`chapter_order = difficulty_level = (arc.level ?? 0) + 1`** (`bulk-pipeline/+server.ts`에서 계산). snowy_test level 0~29 → chapter 01~30.
- 입력은 반드시 **`storyarcIds` 명시 목록**. `idPrefix: 'snowy_'` 는 기존 snowy 100개까지 포함되므로 쓰지 말 것.
- chapter_name 은 storyarc.chapter_name 에서 자동 사용.

### 실행 방법
```bash
# 1) dev 서버 (포트 5178) — 백그라운드
npm run dev            # 또는: npm run dev &

# 2) 러너 실행 (전체 30개)
npm run gen:snowy-test            # 또는 백그라운드: npm run gen:snowy-test &

# 대상/배치만 확인 (네트워크 호출 없음, 비용 0)
npm run gen:snowy-test -- --dry-run
```

러너: `scripts/run-snowy-test.mjs`. snowy_test 디렉토리에서 30개 id 를 자동 수집(level 오름차순)해 배치로 bulk-pipeline 호출.

옵션(`-- ` 뒤 또는 env):
- `--base=URL` (기본 `http://localhost:5178`)
- `--concurrency=N` (아크 동시 실행, 기본 3, 1~10)
- `--batch=N` (요청당 아크 수, 기본 5 — 단일 거대 요청 타임아웃 방지)
- `--skip-generate` (생성 단계 건너뛰고 기존 .ts 재사용 — **실패 재시도용**)

### 주의
- 전체 1회 = Gemini 호출 약 300회(생성 150 + 번역 150). 시간·비용 소요.
- 일부 실패 시: `npm run gen:snowy-test -- --skip-generate` 로 생성 결과 재사용하며 재시도.
- 출력 `output_list/snowy_chapter_01~30.json` 은 기존 snowy 챕터와 파일명이 겹칠 수 있으니(테마+order 기준) 기존 산출물 보존이 필요하면 먼저 백업.

## snowy_test 스토리아크 재생성 (시리즈 생성기)

snowy_test 의 storyarc 를 boss_list 에서 **LLM으로 처음부터** 생성한다(기존 `snowy/` 재활용이 아님). 보스당 편수 N 가변(기본 3). 기존 단일/시퀄 생성기([storyarcGen.ts](src/lib/prompts/storyarcGen.ts))로는 "N편 점진 reveal + NPC throughline"을 못 만들므로 **시리즈 생성기**를 별도로 둔다.

### 구성요소 (신규)
- 프롬프트/툴: [src/lib/prompts/seriesGen.ts](src/lib/prompts/seriesGen.ts) — `buildSeriesPlanPrompt`(비트시트) + `buildSeriesChapterPrompt`(편별), 각각 `seriesPlanTool`/`seriesChapterTool`.
- 오케스트레이터: [src/routes/api/storyarc/bulk-series/+server.ts](src/routes/api/storyarc/bulk-series/+server.ts) — boss_list 읽기, 보스 병렬·보스내 순차(비트시트→편), 결정론 필드 주입, snowy_test 덮어쓰기.
- 러너: [scripts/gen-snowy-storyarcs.mjs](scripts/gen-snowy-storyarcs.mjs) (npm `gen:snowy-storyarc`).

### 생성 흐름
보스당: **비트시트 1회**(surface→true→twist를 N편에 배분 + 편별 NPC throughline) → **편 k=1..N**(boss_list + 비트시트 + 이전 편 요약으로 각 편 StoryArc 생성, twist는 N편째 착지).

### 결정론적 주입 (LLM 출력 위에 orchestrator가 덮어씀)
- `id=snowy_<key>_<level>`, `level=bossIndex+(chapter-1)*10`, `theme:'snowy'`, `rising_count:3`.
- `final_boss.id/name` = boss_list 고정, `surface_identity`는 boss_list 유지(true/motivation/twist는 편별 점진).
- `scenarioOutline` order1~4 boss=`'random_boss'`, **order5 boss=보스 pool**, `act_tone.tension` intro/rising/climax=1/3/5.
- 보스↔key↔pool 매핑은 `bulk-series/+server.ts` 의 `SNOWY_SERIES`(=러너 `SERIES`)에 고정. boss_list 순서와 일치.

### 실행
```bash
npm run dev &                                  # 포트 5178
npm run gen:snowy-storyarc -- --dry-run        # 대상/매핑 확인 (네트워크 0)
npm run gen:snowy-storyarc -- --boss=haraldr   # 스모크: 한 보스만
npm run gen:snowy-storyarc                      # 전체 10보스
```
옵션: `--chapters=N`(기본3), `--concurrency`(기본3), `--boss=key|idx[,…]`(부분집합).

### 주의
- 실행은 LLM 비용(보스당 1+N콜, 전체 N=3이면 ≈40콜) + snowy_test 덮어쓰기(미커밋이면 복구 불가).
- **N≠3** 로 바꾸면 파일명/level 집합이 달라져 `index.ts` 재생성 필요(N=3은 기존 30개와 동일해 index.ts 불변).
- npc 필드는 씬당 1개 key여야 함(다운스트림 챕터 생성의 persona/role 주입 전제).
