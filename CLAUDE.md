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
- 구조 규칙 `STORY_STRUCTURE_RULES`: Gemini 가 `story_spine`(화별 1~2문장 뼈대, 5화에 결말)을 먼저 쓰고 나머지를 그에 맞춰 풂. 핵심 물건 `key_object` 하나 + 행동 두 개(`wrong_action` 1~4화 / `right_action` 5화), 1~4화 일반 보스 직업 `scenarioOutline[].random_boss_title`(화마다 다름, 예전 `random_boss_role` 집단 이름 대신), 최종보스는 1~4화에 얼굴 없이 흔적(`boss_trace`: 목소리·글자·물건)으로만 등장하고 5화에 처음 모습을 드러냄(B안 — 평상시 모습 이미지가 없어서. chapterGen 미반영)
- 검사: NPC 키·씬 5개·복선 4개·방 번호(1,3,5,9,15)·복선 페어 중복·story_spine 1~5·key_object(1~5화)·random_boss_role(1~4화) summary 포함·화별 protagonist_action(1~4=wrong, 5=right)·흐린 말·마크다운/메모·영어 보스 이름·소문형 복선·world.rule 한 문장+핵심 물건·정답/틀린 행동이 "~않는다" 아님·보스 한국어 이름 첫소리·호칭 단어 겹침(보스/NPC/일반 보스)·2~5화 첫 문장 앞 화 전제 표현·일반 보스 문장(막는 동사 필수, 설득·정답 행동 금지) → 걸리면 오류를 붙여 최대 3번 다시 요청. 그래도 남으면 저장하고 [남은 오류]로 출력. 필수 필드(story_spine·stage·key_object·행동·호칭 등)가 빠지면 저장하지 않고 실패
- 채점(기본 켜짐, `--no-judge` 로 끔): 저장 뒤 [storyarcJudge.ts](src/lib/prompts/storyarcJudge.ts) 로 Gemini 1콜(temperature 0). 코드로 못 잡는 J1~J11(인물 편 유지, 정답 행동 실패 장면, 결말 장면, 화당 정보 하나, 독립 읽기, 5화 보스가 정답에 맞섬, 규칙·정답 일치, 인물 구분, 일반 보스 매화 다름, 예시 베끼기, J11 장르)을 통과/불통과 + 원문 인용. 인용이 원문에 있는지 코드로 대조(`quote_found`). 결과 `storyarc_<id>.judge.json`. 채점은 다시 쓰기를 일으키지 않음(측정용). 실패 시 1번 재시도, `--judge-only` 로 기존 재작업본만 다시 채점
- 개성 규칙: 장르를 id 로 고정 배정(`genreForId`), 한 번에 돌리는 묶음 안에서는 겹치지 않게(`assignGenres`) → `genre` 필드. 핵심 물건 중심 낱말은 보스 외형·겉모습 설명에 나와야 함. 무대 `stage`(보스가 있는 한 장소, world.setting·1화 summary 에 포함), world.rule 에 "도시" 금지. 같은 테마의 다른 재작업본(outDir)·이번 실행에서 먼저 끝난 것과 핵심 물건·무대 중심 낱말이 겹치면 오류("조각" 같은 흔한 끝말은 앞 낱말까지 비교). stage 에도 "도시" 금지
- 보스는 1~5화 내내 틀린 쪽, 5화에 right_action 을 막다가 무너짐(코드 검사). NPC 는 이유 장면이 있으면 편을 바꿔도 됨(아크당 1명, npc_roles 의 `turn_order`·`turn_scene`, 그 화 summary 에 NPC 이름 + turn_scene 핵심 낱말 2개 이상). wrong/right 행동은 반대 뜻이어야 함(비슷한 동사 묶음 `SIMILAR_VERBS` 검사, 채점 J12). 1~4화에 보스 단서·목적·정체 공개 허용
- 프롬프트 예시는 소재 없는 틀(`[...]`)만 씀 — 구체 예시를 넣으면 Gemini 가 그대로 베낌(예: PixelGrim 이 "위스퍼 웹"이 됨)
- 출력: `src/lib/data/storyarc/rewrite_test/storyarc_<id>.ts` (index.ts 에 등록하지 않음 — id 가 원본과 같음)

```bash
npm run dev &
npm run rewrite:storyarc -- --id=modern_evannext_1        # 여러 개: --id=a,b
```
옵션: `--out=DIR`, `--temperature`(기본 0.8), `--concurrency`(기본 3). storyarc 1개당 Gemini 1~4콜 + 채점 1~2콜.

## 재작업 storyarc → 시나리오 (시험용)

rewrite_test 의 storyarc 로 새 프롬프트 [chapterGenRewrite.ts](src/lib/prompts/chapterGenRewrite.ts) 를 써서 시나리오 생성. `npm run gen:rewrite-scenarios -- --id=<id>` → `output_list/rewrite_test/<id>/script.md`(읽기용) + `scenario_0N.json`. 생성만 함(번역·output 저장 없음). 자세한 내용은 [rewrite_test/README.md](src/lib/data/storyarc/rewrite_test/README.md) 하단.
- 게임 데이터 형식 규칙은 [chapterRules.ts](src/lib/prompts/chapterRules.ts) 로 분리해 chapterGen.ts 와 공유 (chapterGen.ts 프롬프트 결과는 분리 전과 글자 단위로 같음을 확인)
- 새 프롬프트는 규칙을 짧게, 필드 문구를 대사에 그대로 옮기지 않게, 출력 예시 없이 (예시를 베낌). prologue·epilogue 3인칭. 일반 보스는 방 15 밖에도 나와도 됨


## 칸 고정 카드 (재작업 시나리오용, 성향 조합 없음)

rewrite_test 시나리오(`output_list/rewrite_test/<id>/scenario_0N.json`)마다 카드 16장 + additions. 엔드포인트 `POST /api/scenario/card-seq-pipeline`, 프롬프트 [cardGenSeq.ts](src/lib/prompts/cardGenSeq.ts), 검사 `checkSeqDesign`([cardCheck.ts](src/lib/server/cardCheck.ts)).
- 칸 A(스토리 1→3) B(3→5) C(5→9) D(9→15). 칸마다 후보 3장(심기+일반), 카드는 자기 칸에서만 나옴. Gemini 는 `slot` 만 쓰고 코드가 after_story/before_story 와 id 앞 `card_0N_` 를 붙임
- 프롬프트에 칸마다 앞 방 마지막 6줄 / 다음 방 첫 6줄을 넣음. 카드는 앞 방 끝을 이어받고, 다음 방 첫 대사의 전제를 깨지 않게. 설계표 `bridge` 에 연결 이유
- storyarc(rewrite_test)에서 무대 `stage`·`world.setting`·`world.rule`, 이번 화 `scenarioOutline[].place`·summary, `key_object`·이번 화 `protagonist_action`, `boss_trace` 를 넣음. 카드는 이번 화 공간 안에서만. 보스 정체·secret 은 넣지 않음 (앞질러 밝히지 않게)
- 내용 규칙: 사람이 일으키는 사건(카드마다 동행 말고 인물 1명 이상, summary 에 그 인물), 데이터가 스스로 움직이는 사건 금지, 보스는 카드에서 직접 움직이지 않음, 선택지 깎아내리는 말(`BELITTLE`)·설명투(`META`) 금지 — 코드 검사함
- 성향 조합 대신 선택지 `path`: easy(당장 이득, 회수 때 bad+good) / hard(지금 대가, 회수 때 good+good) / gold / lock / stat
- 기억: 칸 A 심기 1장 → 칸 C 회수 2장, 칸 B 심기 1장 → 칸 D 회수 2장. leaning 은 코드가 easy 선택지의 가장 큰 축으로 정함, 같은 칸 3장은 방향이 다름. 1~4화 칸 D 일반 카드 1장은 일반 보스 카드(speaker `random_boss`, 서술은 `{random_boss}` 자리표시, 막기만 함). "보스" 낱말·일반 보스 호칭·첫 줄 앞 방 베끼기·앞 화 인물 이름 재사용은 코드 검사. 이벤트 8~14개(5종 모두 1~4개), MBTI 잠금 3~6장 (16장에 정확한 개수를 Gemini 가 못 맞춰서 범위로)
- 다시 요청할 때는 "오류 난 곳만 고치고 나머지는 그대로" (MAX_RETRY 3). reward·event 가 같이 있으면 코드가 reward 를 빼고, choices 안에 들어간 강제 사건(path forced)은 forced 로 옮김 (`normalizeDesign`)
- 카드D 뒤 이벤트 방은 webfront 엔진이 자동으로 넣음 (대사 없음, 카드와 무관)
- 출력: `output_list/rewrite_test/<id>/cards/0N/card_*.json`(카드 1장당 1파일), `0N/additions.json`(webfront 형식), 단계별 결과 `0N/steps/`(design·text·additions_raw, 설계 실패 시 design_failed.json 에 시도별 오류), 읽기용 `cards/cards_0N.md`
- 01→05 차례대로 (앞 설계표의 제목·인물을 넘김). 실패하면 뒤 번호는 진행 안 함. webfront 에는 쓰지 않음. 얼굴 풀은 `WEBFRONT_DATA_DIR` 또는 옆 폴더 project-mj-webfront 에서 읽기만 함

```bash
npm run gen:cards-seq -- --story=modern_whisperweb_0 --orders=1
```
