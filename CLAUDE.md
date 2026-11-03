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

## 스토리아크 재생성 (보스당 1아크, 단발)

테마 디렉토리의 storyarc 를 boss_list 에서 **LLM으로 처음부터** 생성한다. **보스당 1개 아크**(시리즈 아님). 기존 단일 아크 생성기([storyarcGen.ts](src/lib/prompts/storyarcGen.ts))를 재사용한다.

> 과거 "시리즈 생성기"(보스당 N편 점진 reveal: seriesGen.ts / bulk-series)는 제거됨. 보스당 1아크로 단순화됨.

### 구성요소
- 프롬프트/툴: [src/lib/prompts/storyarcGen.ts](src/lib/prompts/storyarcGen.ts) — `buildStoryarcPrompt` + `storyarcGenTool`.
- 오케스트레이터: [src/routes/api/storyarc/bulk/+server.ts](src/routes/api/storyarc/bulk/+server.ts) — boss_list 읽기, 보스 병렬, 결정론 필드 주입, 테마 디렉토리 덮어쓰기.
- 테마 매핑(단일 출처): [src/lib/data/storyarc/boss_pool_map.js](src/lib/data/storyarc/boss_pool_map.js) — `BOSS_POOL_MAP`(key↔pool) / `BOSS_LIST_FILE` / `OUT_DIR`. 엔드포인트·러너 공유.
- 러너: [scripts/gen-storyarcs.mjs](scripts/gen-storyarcs.mjs) (npm `gen:storyarc`).

### 생성 흐름
보스당: `buildStoryarcPrompt(boss, npcs, theme)` 1콜로 StoryArc 1개 생성 → 결정론 필드 주입 → `storyarc_<theme>_<key>_<level>.ts` write.

### 결정론적 주입 (LLM 출력 위에 orchestrator가 덮어씀)
- `id=<theme>_<key>_<level>`, **`level=bossIndex`** (0~9), `theme`, `rising_count:3`.
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
옵션: `--theme=snowy|modern|desert`(기본 snowy), `--concurrency`(기본3), `--batch`(기본3), `--boss=key|idx[,…]`(부분집합). (snowy 10 / modern 10 / desert 5 보스. forest·hell 은 pool 매핑 없어 미지원.)

### 주의
- 실행은 LLM 비용(보스당 1콜) + 테마 디렉토리 덮어쓰기(미커밋이면 복구 불가).
- 보스당 1아크 → level 집합이 기존 시리즈(0/10/20…) 와 달라짐(0~9). 재생성 후 **잉여 파일 정리 + `index.ts` 재생성** 필요.
- npc 필드는 씬당 1개 key여야 함(다운스트림 챕터 생성의 persona/role 주입 전제). 이 key 는 그 씬의 **주 NPC** 이고, 같은 아크의 다른 NPC 도 함께 나올 수 있음(chapterGen 이 아크 NPC 목록을 같이 넘김).

## 카드 생성 파이프라인 (성향 변주 → 카드 14장 + additions)

`output_list/axis_test/<storyId>/<combo>.json` 의 시나리오마다 webfront 모험 테스트용 카드 14장과 additions 1개를 Gemini 로 생성. 엔드포인트 `POST /api/scenario/card-pipeline`, 러너 `scripts/gen-cards.mjs`.

### 단계 (시나리오 1개당)
- 설계: `buildCardDesignPrompt` → 카드 14장 설계표 (수치·조건·기억·표시·이벤트·인물)
- 대사: `buildCardTextPrompt` 2묶음 (심기+회수 / 일반) → `assembleCards`
- 유사도: 같은 스토리의 다른 시나리오 카드와 첫 대사 0.6 이상 또는 같은 제목 → 그 카드만 대사(제목) 다시 요청 1번
- additions: `buildAdditionsPrompt` → `toWebfrontAdditions` (portrait_no → 이미지 URL, `paid_network` 추가)
- 검사: `src/lib/server/cardCheck.ts` (설계 구성, 한 줄 60자, 기억·표시 누락). 걸리면 오류와 이전 출력을 붙여 다시 요청, 최대 2번

### 실행
```bash
npm run dev &                                                        # 포트 5178
npm run gen:cards -- --story=modern_evannext_1                       # 조합 전체
npm run gen:cards -- --story=modern_evannext_1 --combos=FIR --orders=1   # 스모크: 1개만
```
옵션: `--combos=A,B`, `--orders=1,2`, `--concurrency`(조합 동시 실행, 기본 4), `--portraits`(얼굴 풀, 기본 modern_whisperweb_0).

### 규칙
- 조합 안은 01→05 차례대로. 앞 시나리오 설계표(`output_list/cards/<storyId>/<combo>_0N/design.json`)의 제목·인물을 다음 프롬프트에 넘김
- 조합 안에서 한 시나리오가 실패하면 그 조합의 뒤 시나리오는 진행하지 않음
- 출력: `.env` 의 `WEBFRONT_DATA_DIR` (webfront `src/routes/(app)/test/adventure/data`) 아래 `cards/<storyId>/<combo>/<combo>_0N/`, `additions/<storyId>/<combo>/<combo>_0N.json`. 그 시나리오 카드 폴더는 지우고 새로 씀
- 단계별 결과: `output_list/cards/<storyId>/<combo>_0N/` (design.json, text_0.json, text_1.json, rewrite.json, additions.json)
- 게임이 읽을 수 있는지는 webfront 의 `data.test.ts` 로 마지막에 확인 (보상·이벤트 이름 등 게임 규칙은 webfront 엔진에 있음)

### 주의
- 실행은 Gemini 비용 (시나리오당 4콜 + 재요청) + webfront 카드 덮어쓰기 (미커밋이면 복구 불가)

## 스토리아크 재작업 (모호함 줄이기)

> 사람용 전체 설명: [rewrite_test/README.md](src/lib/data/storyarc/rewrite_test/README.md) — 흐름·검사·채점이 바뀌면 함께 갱신할 것

기존 storyarc 를 Gemini 로 다시 써서 사건·설정을 구체적으로 만든다. 원본은 그대로 두고 새 파일로 저장. 엔드포인트 `POST /api/storyarc/rewrite`, 러너 `scripts/rewrite-storyarc.mjs`.

- 프롬프트: [storyarcGen.ts](src/lib/prompts/storyarcGen.ts) 의 `buildStoryarcRewritePrompt`. 명확성 규칙 `CLARITY_RULES` 는 신규 생성·시퀄 프롬프트와 공유
- 고정(코드로 덮어씀): `id`, `level`, `theme`, `rising_count`, final_boss 의 `id`·`name`·`appearance_npc`·`appearance_boss`(얼굴 이미지가 이미 있음)·`zodiac_sign`, NPC key 목록, order 별 `act`·`boss`, tension 1/3/5
- 나머지(chapter_name, world, final_boss 의 정체·동기·twist, npc_roles 내용, scenarioOutline, 복선, act_summary)는 새로 씀
- 구조 규칙 `STORY_STRUCTURE_RULES`: Gemini 가 `story_spine`(화별 1~2문장 뼈대, 5화에 결말)을 먼저 쓰고 나머지를 그에 맞춰 풂. 핵심 물건 `key_object` 하나 + 행동 두 개(`wrong_action` 1~4화 행동이 사실은 하는 일 / `right_action` 5화). **이어지는 이야기**: 1화는 wrong_action 그대로, 2~4화는 앞 화 피해에서 출발해 핵심 물건과 상관없어 보이는 다른 물건·장치를 다루지만 그 안에 핵심 물건이 숨어 있어 결국 같은 일이 됨 — 화별 `story_spine[].protagonist_action`·`lesson`(앞 화에서 배운 것)·`hidden_link`(5화에 드러남), 흔적도 화마다 다른 매체 `scenarioOutline[].boss_trace`(매화 같은 행동·같은 흔적이면 히어로가 기억을 잃은 것처럼 보여서). 화별 값은 [arcEpisode.ts](src/lib/prompts/arcEpisode.ts) 로 읽음. 1~4화 일반 보스 직업 `scenarioOutline[].random_boss_title`(화마다 다름, 예전 `random_boss_role` 집단 이름 대신), 최종보스는 1~4화에 얼굴 없이 흔적(`boss_trace`: 목소리·글자·물건)으로만 등장하고 5화에 처음 모습을 드러냄(B안 — 평상시 모습 이미지가 없어서. chapterGen 미반영)
- 검사: NPC 키·씬 5개·복선 4개·방 번호(1,3,5,9,15)·복선 페어 중복·story_spine 1~5·key_object(1~5화)·random_boss_role(1~4화) summary 포함·화별 protagonist_action(1=wrong, 5=right, 2~4는 핵심 물건 이름 없음·서로/wrong/right 와 다른 동사·"~한다" 꼴)·lesson·hidden_link·화별 boss_trace(서로 다른 매체, 그 화 summary 포함)·흐린 말·마크다운/메모·영어 보스 이름·소문형 복선·world.rule 한 문장+핵심 물건·정답/틀린 행동이 "~않는다" 아님·보스 한국어 이름 첫소리·호칭 단어 겹침(보스/NPC/일반 보스)·summary 에 "보스" 게임 용어·보스 말에 정답 동사·일반 보스 문장(막는 동사 필수, warn 화는 핵심 물건 필수 / ally 화는 핵심 물건 막기 금지, 설득·정답 행동 금지) → 걸리면 오류를 붙여 최대 3번 다시 요청. 그래도 남으면 저장하고 [남은 오류]로 출력. 필수 필드(story_spine·stage·key_object·행동·호칭 등)가 빠지면 저장하지 않고 실패
- 채점(기본 켜짐, `--no-judge` 로 끔): 저장 뒤 [storyarcJudge.ts](src/lib/prompts/storyarcJudge.ts) 로 Gemini 1콜(temperature 0). 코드로 못 잡는 J1~J11(인물 편 유지, 정답 행동 실패 장면, 결말 장면, 화당 정보 하나, J5 앞 화 이어받음, 5화 보스가 정답에 맞섬, 규칙·정답 일치, 인물 구분, 일반 보스 매화 다름, 예시 베끼기, J11 장르, J15 경고를 무시하는 이유, J16 주인공에게 공감, J17 숨은 연결이 그럴듯함)을 통과/불통과 + 원문 인용. 인용이 원문에 있는지 코드로 대조(`quote_found`). 결과 `storyarc_<id>.judge.json`. 채점은 다시 쓰기를 일으키지 않음(측정용). 실패 시 1번 재시도, `--judge-only` 로 기존 재작업본만 다시 채점
- 개성 규칙: 장르를 id 로 고정 배정(`genreForId`), 한 번에 돌리는 묶음 안에서는 겹치지 않게(`assignGenres`) → `genre` 필드. 핵심 물건은 누구나 아는 일상 물건(만질 수 없는 낱말 `ABSTRACT_OBJECT`·꾸밈말 많은 이름은 코드 오류, 보스 외형에서 뽑지 않아도 됨). 왜 그런 일이 생기는지 `world.how`(핵심 물건이 어떻게 작동하는지 한 문장)·보스가 얻는 것 `final_boss.want`(구체적 이득, 광기·혼란 금지) 필수 — 시나리오 프롬프트가 나쁜 결과 뒤 원인 한 줄·5화 보스가 want 를 밝히게 씀. 채점 J19 한 번 읽으면 이해됨. 구조 규칙은 이야기 규칙만 남기고 세부 형식은 코드 검사 오류 문구에 맡김. 무대 `stage`(보스가 있는 한 장소, world.setting·1화 summary 에 포함), world.rule 에 "도시" 금지. 같은 테마의 다른 재작업본(outDir)·이번 실행에서 먼저 끝난 것과 핵심 물건·무대 중심 낱말이 겹치면 오류("조각" 같은 흔한 끝말은 앞 낱말까지 비교). stage 에도 "도시" 금지
- 보스는 1~5화 내내 틀린 쪽, 5화에 right_action 을 막다가 무너짐(코드 검사). 주인공은 속는 히어로: 1~4화 행동은 선한 이유로 하고 당장 효과를 본 뒤 대가가 드러남, 보스 흔적의 말은 친절한 해결책처럼, 1~4화에 경고는 warn 일반 보스만(NPC 는 하기 전에 안 말림). 1~4화 일반 보스의 편은 코드가 id 로 화마다 고정(`bossSidesForId` → `scenarioOutline[].random_boss_side`): `warn` 경고하는 쪽(wrong_action 을 막으며 경고, 경고는 맞지만 자기 사정처럼 보여 주인공이 안 믿음, 그 이유가 summary 에) / `ally` 최종보스 편(의심·전진을 막고 wrong_action 은 안 말림). 필드 없으면 ally. NPC 는 이유 장면이 있으면 편을 바꿔도 됨(아크당 1명, npc_roles 의 `turn_order`·`turn_scene`, 그 화 summary 에 NPC 이름 + turn_scene 핵심 낱말 2개 이상). wrong/right 행동은 반대 뜻이어야 함(비슷한 동사 묶음 `SIMILAR_VERBS` 검사, 채점 J12). 1~4화에 보스 단서·목적·정체 공개 허용
- 속는 방식: 1~4화마다 코드가 id 로 고정(`deceiveModesForId` → `scenarioOutline[].deceive_mode`). 1화 direct, 2~4화는 verify / npc_acts(NPC 가 먼저 함) / avoid(흔적이 경고처럼 다른 길 권함) / pressure(급해서) 중 서로 다른 셋. 2화부터 주인공이 조심하는 모습이 보여야 함. lesson 은 "이번엔 어떻게 조심하는지". npc_acts 화 summary 에 주 NPC 이름(코드 검사), 채점 J18. chapterGenRewrite 도 그 화 방식대로 장면 지시
- 프롬프트 예시는 소재 없는 틀(`[...]`)만 씀 — 구체 예시를 넣으면 Gemini 가 그대로 베낌(예: PixelGrim 이 "위스퍼 웹"이 됨)
- 저장 형식: 화별 값은 모두 `scenarioOutline[]` 항목 안 — `line`·`protagonist_action`·`lesson`·`hidden_link`(예전 `story_spine`), `clues`(예전 `global_foreshadowing`, 심는 화 항목에 들어감, `reveal_order` 는 밝혀지는 화). Gemini 출력은 그대로 `story_spine` 을 먼저 쓰고(뼈대 먼저 쓰기) 복선은 화 번호(`plant_order`/`reveal_order`)로 받아, 저장할 때 `mergeArcEpisodes`([arcEpisode.ts](src/lib/prompts/arcEpisode.ts))로 합침. 읽을 때는 arcEpisode.ts 의 `lineOf`·`actionOf`·`lessonOf`·`hiddenLinkOf`·`cluesOf` (예전 형식 파일도 읽음). snowy·modern 등 옛 폴더와 chapterGen.ts·axis 파이프라인은 예전 형식 그대로
- 출력: `src/lib/data/storyarc/rewrite_test/storyarc_<id>.ts` (index.ts 에 등록하지 않음 — id 가 원본과 같음)

```bash
npm run dev &
npm run rewrite:storyarc -- --id=modern_evannext_1        # 여러 개: --id=a,b
```
옵션: `--out=DIR`, `--temperature`(기본 0.8), `--concurrency`(기본 3). storyarc 1개당 Gemini 1~4콜 + 채점 1~2콜.

## 재작업 storyarc → 시나리오 (시험용)

rewrite_test 의 storyarc 로 새 프롬프트 [chapterGenRewrite.ts](src/lib/prompts/chapterGenRewrite.ts) 를 써서 시나리오 생성. `npm run gen:rewrite-scenarios -- --id=<id>` → `output_list/rewrite_test/<id>/script.md`(읽기용) + `scenario_0N.json`. 생성만 함(번역·output 저장 없음). 자세한 내용은 [rewrite_test/README.md](src/lib/data/storyarc/rewrite_test/README.md) 하단.
- 생성 뒤 검토자·수정자 1번 (기본 켜짐, `--no-review` 로 끔, `--review-only` 로 기존 대본만): [scenarioReview.ts](src/lib/prompts/scenarioReview.ts). 검토자가 1~5화 전체에서 R1~R9 어긋난 줄을 찾고 → 수정자가 그 화의 그 줄만 줄 단위로 고침(남은 코드 오류도 함께 넘김. 고친 뒤 새 코드 오류가 생기면 1번 더, 그래도면 원래대로) → 확인은 처음 문제가 풀렸는지·고친 줄이 새 문제를 만들었는지만. 결과 `<id>/review/`
- 게임 데이터 형식 규칙은 [chapterRules.ts](src/lib/prompts/chapterRules.ts) 로 분리해 chapterGen.ts 와 공유 (chapterGen.ts 프롬프트 결과는 분리 전과 글자 단위로 같음을 확인)
- 새 프롬프트는 규칙을 짧게, 필드 문구를 대사에 그대로 옮기지 않게, 출력 예시 없이 (예시를 베낌). prologue·epilogue 3인칭. 일반 보스는 방 15 밖에서는 방 하나에만(코드 검사). 일반 보스는 그 화 random_boss_side 대로(warn: 틀린 행동을 경고하며 막고 파티는 이유를 대며 무시 / ally: 의심·전진을 막음). NPC 는 앞 입장 유지. 최종보스 이름은 1~4화에 안 씀(흔적으로만, 코드 오류). 5화에는 NPC·흔적으로 소개한 뒤에만 (파티 대사·prologue 가 먼저 쓰면 코드 오류). 이어지는 storyarc 는 2~4화에 앞 화 피해·배운 것을 떠올리고, hidden_link 는 5화에만 넘김. 검토 R10 "앞 화와 어긋남"


## 칸 고정 카드 (재작업 시나리오용, 성향 조합 없음)

rewrite_test 시나리오(`output_list/rewrite_test/<id>/scenario_0N.json`)마다 카드 16장 + additions. 엔드포인트 `POST /api/scenario/card-seq-pipeline`, 프롬프트 [cardGenSeq.ts](src/lib/prompts/cardGenSeq.ts), 검사 `checkSeqDesign`([cardCheck.ts](src/lib/server/cardCheck.ts)).
- 칸 A(스토리 1→3) B(3→5) C(5→9) D(9→15). 칸마다 후보 3장(심기+일반), 카드는 자기 칸에서만 나옴. Gemini 는 `slot` 만 쓰고 코드가 after_story/before_story 와 id 앞 `card_0N_` 를 붙임
- 프롬프트에 칸마다 앞 방 마지막 6줄 / 다음 방 첫 6줄을 넣음. 카드는 앞 방 끝을 이어받고, 다음 방 첫 대사의 전제를 깨지 않게. 설계표 `bridge` 에 연결 이유
- storyarc(rewrite_test)에서 무대 `stage`·`world.setting`·`world.rule`, 이번 화 `scenarioOutline[].place`·summary, `key_object`·이번 화 `protagonist_action`, `boss_trace` 를 넣음. 카드는 이번 화 공간 안에서만. 보스 정체·secret 은 넣지 않음 (앞질러 밝히지 않게)
- 내용 규칙: 사람이 일으키는 사건(카드마다 동행 말고 인물 1명 이상, summary 에 그 인물), 데이터가 스스로 움직이는 사건 금지, 보스는 카드에서 직접 움직이지 않음, 선택지 깎아내리는 말(`BELITTLE`)·설명투(`META`) 금지 — 코드 검사함
- 성향 조합 대신 선택지 `path`: easy(당장 이득, 회수 때 bad+good) / hard(지금 대가, 회수 때 good+good) / gold / lock / stat
- 기억: 칸 A 심기 1장 → 칸 C 회수 2장, 칸 B 심기 1장 → 칸 D 회수 2장. leaning 은 코드가 easy 선택지의 가장 큰 축으로 정함, 같은 칸 3장은 방향이 다름. 1~4화 칸 D 일반 카드 1장은 일반 보스 카드(speaker `random_boss`, 서술은 `{random_boss}` 자리표시, random_boss_side 대로 막기만 함 — warn 이면 이번 화 틀린 행동을 경고, ally 면 의심·전진을 막음). "보스" 낱말·일반 보스 호칭·첫 줄 앞 방 베끼기·앞 화 인물 이름 재사용은 코드 검사. 이벤트 8~14개(5종 모두 1~4개), MBTI 잠금 3~6장 (16장에 정확한 개수를 Gemini 가 못 맞춰서 범위로)
- 다시 요청할 때는 "오류 난 곳만 고치고 나머지는 그대로" (MAX_RETRY 3). reward·event 가 같이 있으면 코드가 reward 를 빼고, choices 안에 들어간 강제 사건(path forced)은 forced 로 옮김 (`normalizeDesign`)
- 주인공 관점: 사건은 주인공("당신")에게 닥치고 선택·이득·손해도 주인공 것. 동행은 거들기·반응만 (동행이 막히는 당사자, 동행의 작업·장비가 문제의 원인, "내가 ~필요해" 금지). 설계 summary 는 "<인물>이(가) <물건> 때문에 당신에게 <원하는 것>" (회수 카드 제외) — 코드 검사(`companionTarget`, `COMPANION_GOAL`)
- 채점(기본 켜짐, `--no-judge` 로 끔): 저장 뒤 [cardJudge.ts](src/lib/prompts/cardJudge.ts) 로 시나리오당 Gemini 1콜(temperature 0). 코드로 못 잡는 C1~C12(주인공 관점, 말 상대 분명, 앞뒤 연결, 선택지 모두 고를 만함, 선택과 결과·echo 일치, 회수 카드 알아보기, 인물이 원하는 것, 같은 칸 사건 다름, 앞질러 밝히지 않음, 말투 일관, 공간 안, 장르)를 통과/불통과 + 카드 id·원문 인용. 인용 대조(`quote_found`). 결과 `0N/steps/judge.json` + `cards_0N.md` 끝. 다시 쓰기를 일으키지 않음(측정용). `--judge-only` 로 기존 카드만 다시 채점
- 말투: `storyRegisters`(cardGenSeq.ts)가 원문에서 인물마다 존댓말·반말을 끝말로 정함(문장 70% 이상, 3문장 이상일 때만). 프롬프트에 "원문 인물 말투"로 넣고, 카드 대사·additions 예시·style 이 다르면 코드 검사 오류
- additions 방 줄: 화자는 그 방 원문 인물 또는 character_any, after_line 은 0~방 줄 수, 줄 4개, 보스 줄에 카드 인물 이름 금지 (코드 검사). 호감도 조건 줄은 원문에 동행이 말하는 방(방 9부터 앞으로)에 넣음. 넣는 자리·아는 범위·말투·기억 문구는 채점 A1~A4
- 이벤트: 설계표의 이벤트 선택지마다 `event_reason`(왜 이 선택 뒤에 열리는지). 종류별 실제 게임 — campsite 휴식 / meet_stranger 낯선 사람이 선택지 mbti 히어로 1명(`{actor}`)에게 1:1 대결을 걺 / minigame_slot 운 내기 / minigame_timing 클릭 구간 맞추기 3번, 한 번 놓치면 끝 / minigame_cup 숨긴 물건 고르기. 비유 금지. meet_stranger 는 `event_options`(fight: text·win·lose / avoid: text·result) + 설계표 `event_avoid` 패널티(`*_down` 1개, echo -5 가능)를 `assembleCards` 가 합침. 코드 검사 `eventTextErrors` + 채점 C13. webfront 엔진이 `event_options` 를 읽고 {actor} 를 1명으로 정함
- 서술(narrator)은 "~했다" 체, 선택지 text 는 "~한다" (존댓말이면 코드 검사 오류)
- `--fix`: 설계표 그대로, 말투 문제 카드(코드 검사 + 기존 judge.json 의 C10)만 대사를 8장씩 다시 쓰고(steps/tone_fix.json) additions 를 새로 만든 뒤 채점. 시나리오끼리 독립이라 실패해도 다음 번호 진행
- 카드D 뒤 이벤트 방은 webfront 엔진이 자동으로 넣음 (대사 없음, 카드와 무관)
- 출력: `output_list/rewrite_test/<id>/cards/0N/card_*.json`(카드 1장당 1파일), `0N/additions.json`(webfront 형식), 단계별 결과 `0N/steps/`(design·text·additions_raw, 설계 실패 시 design_failed.json 에 시도별 오류), 읽기용 `cards/cards_0N.md`
- 01→05 차례대로 (앞 설계표의 제목·인물을 넘김). 실패하면 뒤 번호는 진행 안 함. webfront 에는 쓰지 않음. 얼굴 풀은 `WEBFRONT_DATA_DIR` 또는 옆 폴더 project-mj-webfront 에서 읽기만 함

```bash
npm run gen:cards-seq -- --story=modern_whisperweb_0 --orders=1
npm run gen:cards-seq -- --story=modern_whisperweb_0 --judge-only   # 기존 카드 채점만
npm run gen:cards-seq -- --story=modern_whisperweb_0 --fix          # 말투 문제 카드만 다시 + additions 새로
```

## 넷쇼트 스타일 5화 스토리 (재료 랜덤 → story.json)

[netshort_test/story-prompt.md](src/lib/data/storyarc/styles/netshort_test/story-prompt.md) 가 프롬프트 원본. netshortStory.ts 는 md 의 "## 시스템 프롬프트"·"### 입력 템플릿" 코드 블록을 `?raw` 로 읽어 `{{자리}}` 만 채움(값이 비면 그 줄 뺌). 프롬프트 문장은 md 에서만 고침. 프롬프트 [netshortStory.ts](src/lib/prompts/netshortStory.ts), 엔드포인트 `POST /api/storyarc/netshort`, 러너 `scripts/gen-netshort.mjs`.
- 기획안 단계 없음 (예전 5줄 기획안·스토리아크 파일 입력은 제거). 재료는 [story-seeds.json](src/lib/data/storyarc/styles/netshort_test/story-seeds.json) 에서 코드가 뽑음(`pickSeeds`): worlds·original_sins·twist_types 하나씩(톤은 스타일 파일에서), 장치는 `devices`(사람이 쓴 object·rule·effect·harm(넘기는 피해 = 1~4화 위험)·wrong_action·right_action, `worlds` 로 맞는 무대 지정) 중 그 무대에 맞는 것(`pickDevice`, 다시 쓸 때도 장치 문장은 지금 seeds 것으로 갱신), caution_types 는 2~4화마다 서로 다르게(`pickCautions` → seeds.json `cautions`, 앞 화 피해를 보고 이번엔 어떻게 조심하는지: 확인하고 쓴다/안 쓰려고 버틴다/괜찮다는 대상에게 (한 번만 쓴다 limit 은 대상 고르는 방식이 안 바뀌어 뺌)). 모티프·화별 이유·소품 낱말(motifs·reason_types·random_words·props)은 뜬금없는 물건·설정을 끌어와서 뺌 (데이터만 남김). 장치 중 `battle: false`(칩·경매·마권·세탁기 — 피해가 몸에 오지 않아 전투와 안 맞음)는 안 뽑고, 맞는 장치가 없는 무대도 안 뽑음. 예전 seeds.json 을 다시 쓸 때 battle:false 장치는 다시 뽑고, 모티프·화별 이유·소품은 지움. 테마·NPC 풀은 seeds 의 `theme`, `theme_description` 을 프롬프트에
- 한 번에 집필: 출력 맨 앞 `design`(device·how·visible_effect(뽑은 장치 문장 그대로, 코드가 덮어씀)·wrong/right_action·original_sin·boss_trace·boss_name·boss_look(보스 외모, 이미지용)·true_identity·twist)을 먼저 쓰고 본문(프롤로그, 이야기 방 1,3,5,8,10, 에필로그)을 맞춤. 장치는 before_battle 에서 쓰고 win 은 결과만(1~4화 win 에 공격이 다시 날아오는 낱말·before_battle 에 believed 없으면 코드 오류). NPC 1~5화(5화=4화)·보스 흔적 화(1~4화 중 둘)는 코드가 뽑아 seeds.json 의 `npcs`·`trace_orders` 에 저장(`assignCast`), 2~4화 실제 피해자 = 앞 화 NPC(`victimNpcOf`). design 의 device·how·visible_effect·wrong/right_action, 화별 npc.name, 2~4화 actual_victim 은 코드가 덮어씀
- `banned_cliches` 는 매번 "쓰지 말 것"에, `used_stories` 는 "겹치지 않게"에 넣음. 저장 뒤 used_stories 에 `{id,title,world,device,twist}` 추가(같은 id 는 바꿔 씀, 파일의 다른 부분 모양은 유지)
- 출력 `src/lib/data/storyarc/styles/netshort_test/<id>/` : `seeds.json`(뽑은 재료), `story.json`, `story.md`. id 는 `<world.key>_<시각>_<n>`. `--id=<id>` 면 그 seeds.json 재료로 다시 씀
- 억지 금지 규칙: design.`goal`(히어로들이 온 이유, 1화 방 1 에서 밝힘) 필수, 핵심 장치는 하나뿐(다른 기계를 장치처럼 말하지 않음), deceptions[].`link`(피해가 그 사람에게 간 이유, 작동법대로 — "옆에 있었다" 금지) 필수, 결과 문장 화마다 되풀이 금지, 소품은 각 2번 이하·prologue 금지(코드 검사)
- design 에 `boss_want`(히어로들이 장치를 쓸 때마다 보스가 얻는 것)·`finale_logic`(right_action 이면 작동법 안에서 왜 보스가 무너지는지) 필수. 5화 8번 방 보스가 정체+원하는 것을 말함, before_battle 보스가 장치를 한 번 더 권하고 히어로들은 거절, win 은 finale_logic 대로(작동법에 없는 일 금지)
- 출력 NPC 는 `npc: { name: "lin", role: "인쇄공" }` (name = 풀 key, role = 직업, 같은 NPC 는 같은 role)
- 코드 검사 → 걸리면 최대 2번 다시 요청: design 빈칸, 방 키, epilogue 5화만, "주인공" 금지, 방 문장 수, 서술 과거형 금지("있다" 제외), "이번엔 괜찮다" 금지, 한자 금지, design.boss_trace 가 trace_orders 화마다 등장, true_identity 마지막 낱말은 5화 8번 방 전 금지, device 는 20자 이하·여러 물건 이어 붙이기 금지, 1화 방 1~8 에 장치 이름(마지막 낱말) 등장, 1~4화 win 에 "뒤늦게" 경고 금지, design 문장(작동법·결과·true_identity) 14자 이상 그대로 옮기기 금지, 금액·"전가" 는 모든 방에서 금지, `design.deceptions`(1~4화 { believed 히어로들이 믿은 대상, actual_victim 실제 피해자 }): 둘이 다름·2~4화 `caution`(앞 화에서 배운 것 → 이번 조심) 필수·2~4화 방 1·3·5 에 앞 화 피해자 등장·그 화 win 에 피해자(마지막 낱말)·그 화 before_battle 에 believed 중심 낱말(장치 이름에 없는 마지막 낱말, 조사 뗌). 프롬프트 규칙: 1~4화 위험은 장치의 harm 이 히어로들에게 닥치는 것(다른 종류 피해를 장치로 넘기지 않음 — 남을 지키려고 장치를 쓰면 이야기가 안 이어져서), 장치로 피해를 넘기는 대상은 적(보스·부하)이 아님, 장치는 전투 전에 쓰고 win 에서 피해가 누구에게 갔는지 드러남, 작동법에 없는 부작용 금지

```bash
npm run dev &
npm run gen:netshort                    # 새 이야기 1개
npm run gen:netshort -- --count=3       # 3개
npm run gen:netshort -- --id=<id>       # 저장된 재료로 다시 쓰기
npm run gen:netshort -- --judge-only    # 폴더의 기존 이야기 모두 채점만 (--id=a,b 로 골라서)
```
- 장치는 모두 "상처 옮기기" 한 틀: 장치를 쓰고 일반 보스와 싸우면 그 싸움에서 내가 입을 상처가 고른 물건 주인 몸에 생김 (공격 대상을 바꾸는 장치는 싸울 이유가 없어져 뺌). 틀에 안 맞는 장치는 `battle: false`
- 채점(기본 켜짐, `--no-judge` 로 끔): 저장 뒤 [netshortJudge.ts](src/lib/prompts/netshortJudge.ts) 로 Gemini 1콜(temperature 0). N1 싸움과 장치가 이어짐 / N2 피해자가 작동법대로 / N3 속을 만한 이유 / N4 앞 화 기억·다르게 조심 / N5 장치 하나·작동법 밖 일 없음 / N6 5화 결말 이해 / N7 인물 헷갈림 없음. 결과 `<id>/judge.json` + story.md 끝, 러너가 이야기×항목 표와 항목별 통과율 출력. 다시 쓰기를 일으키지 않음(측정용)
- 믿은 이유는 작동법에서 나옴 (주인 없는·받아도 되는 사람의 물건·이름이면 괜찮다고 믿음, 1~8번 방에서 왜 그렇게 보였는지 장면으로). 앞에 없던 물건·지식·작동법에 없는 설정을 근거로 끌어오지 않음. 예전 근거 칸 `evidence` 는 뜬금없는 근거를 지어내서 뺐고, 대신 `design.deceptions[].seen`(필수): 몇 번 방에서 그 물건·이름이 왜 주인 없거나 받아도 되는 사람의 것처럼 보이는지 (그 물건 자체만). 코드 검사: believed 중심 낱말이 방 1~8 에 나와야 함
- 피해자 이름 뒤바뀜 코드 검사 `injuredNameErrors`(netshortStory.ts, 대본 단계도 사용): 방 1~8·전투 전·패배에는 앞 화까지 다친 사람만, win 에는 그 화 피해자까지 다친 사람으로 나올 수 있음 ("다친 린", "렌이 다쳤던", "니아의 상처", "렌이 … 쓰러진다" 꼴을 잡음). 기존 이야기 22개에서 실제 뒤바뀜 3건을 잡고 잘못 걸린 것 0건
- 1~4화 win 에서 `link`(피해자가 왜 그 사람인지)를 눈에 보이는 증거로 보여줌 (고른 물건에서 피해자 것이라는 표시를 보거나 NPC 가 말함, N2 대응)
- 고칠 때는 한 번에 하나만 바꾸고 `--count=3` 으로 통과율이 오르는지 본다 (이야기 1개만 보고 규칙을 더하지 않는다)

## 넷쇼트 story.json → 시나리오 (시험용)

netshort_test/<id>/story.json 의 화별 방(1,3,5,8,10)을 게임 시나리오 대사(방 1,3,5,9,15)로 옮김. 8→9, 10→15(before_battle·win·lose → dialogue·win_dialogue·lose_dialogue). 프롬프트 [chapterGenNetshort.ts](src/lib/prompts/chapterGenNetshort.ts), 엔드포인트 `POST /api/scenario/netshort`, 러너 `scripts/gen-netshort-scenarios.mjs`. 5화 동시 생성, 코드 검사 걸리면 최대 2번 다시 요청, Gemini 503·429 는 대기 후 재시도. 검토자·번역 없음.
- 1~4화 일반 보스는 speaker `random_boss`(이름 금지, `boss.role` 에 story 의 boss 문구). 대사·지문에 `{random_boss}` 자리표시도 금지(받침 몰라 조사 어긋남, "놈"으로) — 코드 검사, 최종보스 이름은 1~4화 금지, 5화 `boss` 는 방 15 에서만, 정체 낱말은 5화 방 9 전 금지
- 5화 `boss.pool_id` 는 null (netshort 보스는 pool 매핑 없음)
- 코드 검사 추가: 파티 줄(character_any·1~4) 세 줄 연달아 금지(새 소식은 narrator·NPC 가), narrator 1인칭("내 방")·따옴표 없는 인물 말 금지, 장치가 나오는 줄에 장식(문양·새겨·장착 등) 금지. 이야기 단계도 장치 문장에 장식 금지(모티프를 장치에 붙이지 않음)
- 5화: 방 9 에서 보스가 원하는 것(boss_want)을 지문 속 따옴표로, 방 15 dialogue 에 speaker boss 필수(코드 검사), win 은 finale_logic 대로
- 3·4화: 앞 화 피해자(N-2화 NPC)는 그 화 내내 함께 다님 → 코드가 방마다 dialogue 에 enter 를 넣음(`addCompanionEnters`, 방 1 은 narrator 첫 줄 뒤). 2화의 앞 화 피해자는 1화의 모르는 사람이라 없음
- NPC 가 말하거나 narrator 지문에 이름이 나오는데 그 블록(dialogue·win·lose)에 enter 가 없으면 코드가 처음 나오는 줄 앞에 enter 를 넣음(`addNpcEnters`, 다듬기 뒤). 게임 엔진은 말하는 NPC 만 자동 등장시켜서. 기존 대본은 `--enters-only`(Gemini 없음)
- 줄거리가 "설명한다"처럼 내용 없이 적힌 곳은 NPC 대사·narrator 지문으로 내용을 채움(작동법·위협하는 무리·하려는 일). 파티는 NPC 에게 물을 수 있음. character_1~4 는 방마다 0~2줄, 분위기 감상 금지
- 장치는 방 15 dialogue(전투 전) 끝에서 씀. win_dialogue 는 전투 뒤 결과(1~4화 피해자, 5화 보스 무너짐), 공격을 다시 날리거나 장치를 새로 쓰지 않음
- 파티(character_any·1~4) 대사는 입말 반말. "~다"로 끝나는 글말은 narrator 만 (코드 검사, "~니다" 허용). 대사·지문을 감싼 따옴표는 normalize 가 뗌
- 1~4화는 design.deceptions(믿은 대상·실제 피해자)를 프롬프트에 넣음: 장치 쓰기 전에 왜 그 이름이면 안전하다고 믿는지 대사로, 실제 피해자는 방 15 전에 먼저 등장(코드 검사), win 에서 다치고 파티가 알아챔(코드 검사), 둘이 왜 이어지는지 NPC·narrator 한 줄. 2~4화는 앞 화 피해자를 방 1~9 에서 떠올리고(코드 검사) caution 대로 조심하는 모습을 방 9 전에 보여줌
- 출력 `src/lib/data/storyarc/styles/netshort_test/<id>/scenario_0N.json`, `script_0N.md`, `script.md` (story.json 과 같은 폴더)

```bash
npm run gen:netshort-scenarios -- --id=arcade_20261030083249_3
```
- 대사·지문에 게임 용어 "보스" 금지 (코드 검사)
- 다듬기(기본 켜짐, `--no-polish` 로 끔, `--polish-only` 로 기존 대본만): 코드 검사 뒤 화마다 [netshortPolish.ts](src/lib/prompts/netshortPolish.ts) 로 Gemini 1콜(temperature 0.3). 뜻이 안 통하는 말 조합·앞뒤 줄과 어긋남·꼬인 문장만 찾아 그 줄만 고침(scenarioReview.ts 의 `listChapter`·`applyEdits`). 인용이 그 줄과 다르면 건너뛰고, 고친 뒤 코드 검사 오류가 새로 생기면 통째로 되돌림. 기록 `<id>/polish_0N.json`(전/후/이유)

## 편안한 5화 이야기 (cozy_test, 시험용)

넷쇼트의 "피해 떠넘기기" 대신 "오해가 풀리는" 구조. 1~4화: 히어로들이 겉모습만 보고 그 화 인물을 오해 → 방 10 에서 싸움 → win 에서 실제 사정이 증거로 드러남. 2~4화는 앞 화를 기억하고 다르게 조심하지만 또 오해. 5화: 싸우기 전에 사연을 묻고 화해로 끝남.
- 기획안: [cozy_test/premises.json](src/lib/data/storyarc/styles/cozy_test/premises.json) (사람이 쓴 5화 줄거리 4개: lostfound·market·festival·letters). 프롬프트 [cozyStory.ts](src/lib/prompts/cozyStory.ts), 엔드포인트 `POST /api/storyarc/cozy`, 러너 `scripts/gen-cozy.mjs`
- 설계 칸은 최소한 (넷쇼트에서 칸이 많을수록 아무 내용으로 채우는 문제를 겪어서): misunderstandings(1~4화 who·looked_like·actual·reveal), final(name·look·actual·want). 코드 검사는 모양만
- 거꾸로 꼬는 화: 기획안의 `reverse_order`(지금 모두 3화). 히어로들이 배운 대로 수상해 보이는 사람을 감싸고 믿음직해 보이는 사람을 믿는데, 믿은 사람이 그 화 상대(작은 잘못을 숨기려던 사람). 다음 화는 "좋든 나쁘든 겉모습 말고 증거부터" 조심 (1~4화가 같은 틀이라 결말이 뻔해서)
- 주 NPC 한 명이 1~5화 함께 다님. 처음 만들 때 NPC 풀에서 뽑아 `<key>/cast.json` 에 저장 (이야기끼리 겹치지 않게)
- 출력 `src/lib/data/storyarc/styles/cozy_test/<key>/story.json`(넷쇼트와 같은 방 구조), `story.md`

```bash
npm run gen:cozy                     # 기획안 전부
npm run gen:cozy -- --keys=market    # 하나만
```

### cozy story.json → 시나리오 (시험용)
프롬프트 [chapterGenCozy.ts](src/lib/prompts/chapterGenCozy.ts), 엔드포인트 `POST /api/scenario/cozy`, 러너 `scripts/gen-cozy-scenarios.mjs`. 넷쇼트 대본 단계와 같은 흐름(방 8→9, 10→15, 5화 동시, 코드 검사 걸리면 최대 2번 다시, 다듬기 1콜 netshortPolish.ts). 장치·피해자 규칙 대신:
- 1~4화: 방 1~9 에 오해를 부른 장면, 실제 사정은 방 15 win 에서 증거(narrator) → 상대가 사정을 말함 → 파티 사과. 2~4화는 앞 화 오해를 떠올리고 다르게 조심. reverse_order 화는 믿은 사람이 상대
- 상대는 1~4화 speaker `random_boss`(`boss.role` = 그 화 boss 호칭, 고유 이름·체형 묘사 금지), 5화 `boss`(`pool_id` null). 둘 다 방 15 에서만 speaker, 그 전에는 narrator 지문 속 따옴표 (코드 검사). 방 15 dialogue·win 에 상대 대사 필수. 5화 인물 이름은 1~4화 금지
- NPC 는 cast.json 의 주 NPC 한 명뿐. 방 1 이 enter 로 시작하면 코드가 narrator 첫 줄을 앞으로 옮김
- 출력 `cozy_test/<key>/scenario_0N.json`, `script_0N.md`, `script.md`, `polish_0N.json`

```bash
npm run gen:cozy-scenarios                                   # 기획안 전부
npm run gen:cozy-scenarios -- --keys=market --orders=1       # 스모크
```

## 이야기 스타일 (styles/)

> 사람용 전체 흐름 설명: [styles/README.md](src/lib/data/storyarc/styles/README.md) — 넷쇼트·cozy 흐름이 바뀌면 함께 갱신할 것. 이야기 폴더 `netshort_test/`·`cozy_test/` 도 styles/ 안에 있음. README.md 는 스타일로 읽지 않음(storyStyle.ts 에서 뺌)

넷쇼트·cozy 의 이야기·대본 프롬프트 4개에서 "어떻게 쓰는지"만 뺀 파일. 이야기 틀(넷쇼트 장치·피해자, cozy 오해·화해)은 각 프롬프트에 그대로 있다. 로더 [storyStyle.ts](src/lib/prompts/storyStyle.ts) (`getStyle`, `import.meta.glob` 이라 파일만 추가하면 됨).
- 파일: `src/lib/data/storyarc/styles/<이름>.md` — [netshort.md](src/lib/data/storyarc/styles/netshort.md)(넷쇼트 기본), [cozy.md](src/lib/data/storyarc/styles/cozy.md)(cozy 기본). 새 스타일은 복사해서 만듦
- 섹션(제목 고정, 각 섹션 첫 코드 블록이 값, 비면 그 줄 빠짐): `테마`(비면 재료 파일의 theme_description) / `톤`(한 줄에 하나, 이야기마다 하나 뽑음 — 넷쇼트 톤 목록은 story-seeds.json 에서 여기로 옮김) / `이야기 작가`(이야기 단계 첫 줄 다음) / `이야기 문체`([문체]에 더하는 줄) / `대본 작가`("당신은 ___입니다", 필수) / `대본 분위기`("- 분위기: ___", `{{tone}}` 자리, 필수) / `일반 보스 호칭`(1~4화 일반 보스 부르는 말, 필수. 대본 단계 코드 검사 오류 문구에도 씀)
- 넷쇼트 story-prompt.md 시스템 프롬프트의 `{{style_writer}}`·`{{style_writing}}` 자리가 스타일 값
- 고른 스타일·톤은 이야기 단계가 저장(넷쇼트 `seeds.json` 의 `style`·`tone`, cozy `cast.json` 의 `style`·`tone`)하고 대본 단계가 그대로 씀. `--style=` 로 바꾸면 저장된 톤이 새 스타일 목록에 없을 때 다시 뽑음
- 기본 스타일 결과는 분리 전과 같음을 확인 (기존 이야기 전부로 만든 프롬프트 141개 중 137개 글자 단위로 같음, cozy 이야기 프롬프트 4개만 "한국어로 쓴다." 가 따로 한 줄로 나뉨)
- 다른 틀에 스타일을 씌울 때(예: cozy 기획안 + netshort 스타일) 재료 파일의 theme_description 이 스타일과 어긋나면 스타일 파일의 `테마` 를 채운다

```bash
npm run gen:netshort -- --style=cozy                     # 넷쇼트 틀 + cozy 스타일
npm run gen:cozy -- --keys=market --style=netshort       # cozy 틀 + 넷쇼트 스타일
npm run gen:cozy-scenarios -- --keys=market              # 대본은 cast.json 의 스타일 그대로
```
