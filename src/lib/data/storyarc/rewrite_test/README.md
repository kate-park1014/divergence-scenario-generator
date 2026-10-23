# storyarc 재작업 (rewrite_test)

기존 storyarc 를 Gemini 로 다시 써서 **단순하고, 어느 화부터 읽어도 이해되고, 보스마다 개성 있는** 이야기로 만든다.
원본은 그대로 두고 이 폴더에 새 파일로 저장한다.

- 이 폴더의 `storyarc_<id>.ts` : 재작업 결과 (다시 돌리면 덮어씀)
- 이 폴더의 `storyarc_<id>.judge.json` : 채점 결과 (다시 돌리면 덮어씀)
- 이 README 는 덮어쓰지 않음

## 실행

```bash
npm run dev &                                              # dev 서버 (포트 5178)

npm run rewrite:storyarc -- --id=modern_whisperweb_0        # 1개
npm run rewrite:storyarc -- --id=a,b,c --concurrency=5      # 여러 개
npm run rewrite:storyarc -- --id=a --judge-only             # 다시 쓰지 않고 채점만
npm run rewrite:storyarc -- --id=a --no-judge               # 채점 없이 다시 쓰기만
```

- id 는 `src/lib/data/storyarc/index.ts` 에 등록된 storyarc 여야 한다
- 비용: storyarc 1개당 Gemini(2.5 flash) 2~5번 호출. 10개에 5분쯤

## 흐름

```
npm run rewrite:storyarc            scripts/rewrite-storyarc.mjs
        ▼
POST /api/storyarc/rewrite          src/routes/api/storyarc/rewrite/+server.ts
  ① 준비: 원본 찾기 · 장르 배정 · 이 폴더의 다른 재작업본에서 이미 쓴 소재 모으기
  ② storyarc 마다 (동시 실행)
     프롬프트 만들기          src/lib/prompts/storyarcGen.ts (buildStoryarcRewritePrompt)
     → Gemini 다시 쓰기       (story_spine 요약을 먼저 쓰고 나머지를 맞춤)
     → 코드 검사              걸리면 오류 + 이전 출력을 붙여 다시 요청 (최대 3번)
     → 필수 필드 빠지면 저장 안 함 (실패)
     → 고정값 덮어쓰기 → 저장 → 소재 목록에 등록
     → Gemini 채점            src/lib/prompts/storyarcJudge.ts (측정만, 다시 쓰기 안 함)
  ③ 러너가 결과 출력
```

### 고정값 (Gemini 가 바꿔도 코드가 덮어씀)
id, level, theme, rising_count, final_boss 의 id·name·외형(appearance_npc/boss)·zodiac_sign, NPC 키 목록, 화별 act·boss, tension 1/3/5

### 새로 생기는 필드
| 필드 | 뜻 |
|---|---|
| `genre` | 배정된 장르 (id 로 고정, 같은 묶음 안에서는 겹치지 않음) |
| `stage` | 무대: 보스가 있는 한 장소 |
| `story_spine` | 화별 1~2문장 줄거리 요약 (5화에 결말). 화별 `protagonist_action` 포함 |
| `key_object` | 1~5화에 계속 나오는 핵심 물건 (보스 소재에서 뽑음) |
| `wrong_action` / `right_action` | 1~4화 주인공의 틀린 행동 / 5화 정답 행동 (서로 반대) |
| `scenarioOutline[].place` | 그 화의 장소: 무대 안의 한 구역 (다섯 화 모두 다름) |
| `scenarioOutline[].random_boss_title` | 1~4화 그 화 일반 보스의 직업 (화마다 다른 사람·다른 직업, 무대에 있을 법한 사람). 5화에는 없음 |
| `boss_name_korean` | 보스 한국어 이름. 최종보스는 호칭(직업) 없이 이 이름으로만 부른다 (호칭은 NPC·일반 보스만) |
| `boss_trace` | 1~4화에 보스가 드러나는 매체 (예: 스피커 방송, 화면 문구). 1~4화 summary 에 그대로 나옴 |
| `npc_roles.<key>.title` | NPC 호칭 |
| `npc_roles.<key>.turn_order` / `turn_scene` | 마음을 바꾸는 화와 이유 장면 (아크당 1명까지) |

### 이야기 규칙 (프롬프트)
- 보스는 1~4화에 **얼굴 없이 흔적(boss_trace: 목소리·글자·물건)으로만** 나와 틀린 행동을 권하고, 5화에 처음 모습을 드러내며 정답 행동을 막다가 무너진다 (보스 평상시 모습 이미지가 없어서 이렇게 정함)
- 주인공은 1~4화마다 틀린 행동을 직접 하고 그 결과(world.rule)를 겪는다. 5화에 정답 행동을 한다
- 규칙(world.rule)은 한 문장: "[틀린 행동]을 하면 [무대에서 눈에 보이는 나쁜 결과]가 일어난다"
- NPC 는 이유 장면이 있으면 마음을 바꿔도 된다. 1~4화에 보스 단서·목적·정체가 드러나도 된다
- 각 화 첫 문장은 그 문장만으로 상황을 알 수 있게. 2~4화에 새 미스터리는 하나만
- 1~4화는 같은 틀린 행동이라도 화마다 장소·이유·대가가 다르다 (2~4화 요약 유사도 0.5 이상이면 다시 쓰기, 채점 J14)
- 프롬프트 예시는 소재 없는 틀(`[...]`)만 쓴다. 구체적인 예시를 넣으면 Gemini 가 그대로 베낀다

### 코드 검사 (어기면 다시 요청)
| 묶음 | 검사 |
|---|---|
| 구조 | 씬 5개, 복선 4개, 방 번호 1·3·5·9·15, 복선 위치 중복, NPC 키, 요약 1~5화 |
| 행동 | 화별 주인공 행동(1~4 틀린 / 5 정답), 두 행동이 비슷한 동사 아님(핵심 물건 이름은 빼고 비교), "~않는다" 아님 |
| 핵심 물건·규칙 | 핵심 물건이 1~5화 summary 에 있음, 규칙은 한 문장 + 핵심 물건 + "도시"·"~않으면" 없음 |
| 인물 | 보스가 1~4화에 boss_trace 로 나옴(얼굴·몸이 보이는 표현 금지), 보스 한국어 이름 첫소리, 호칭 겹침(NPC·1~4화 일반 보스 직업, 같은 낱말 또는 앞 두 글자가 같은 낱말), 마음 바꾸는 NPC 1명 + 그 화에 NPC 이름과 이유 장면 핵심 낱말 2개 |
| 일반 보스 | 1~4화마다 직업이 있고 그 화 summary 에 나옴, 막는 동사 필수, 보스 이름·사연·설득·정답 행동 금지, 핵심 물건에 대한 주인공의 행동을 막지 않음 (일반 보스는 최종보스 쪽) |
| 5화 | 보스가 정답 행동을 막음, 무너지는 장면, 보스가 정답을 반기지 않음 |
| 글쓰기 | 흐린 말, 마크다운, "(복선: …)" 메모, 영어 보스 이름, 소문형 복선, 2~5화 첫 문장이 앞 화를 전제하지 않음("~한 후/뒤/결과", "~하자,", "~에 따라", "~대로") |
| 개성 | 핵심 물건이 보스 소재에서 나옴, 무대에 "도시" 없음, 다른 재작업본과 핵심 물건·무대가 겹치지 않음("조각" 같은 흔한 끝말은 앞 낱말까지 비교) |

### 채점 (Gemini, 코드로 못 보는 것)
J1 인물 편 유지 · J2 정답 행동 실패 장면 없음 · J3 결말이 장면 · J4 화당 새 미스터리 하나 · J5 어느 화부터 읽어도 이해 · J6 5화 보스가 정답에 맞섬 · J7 규칙과 정답 일치 · J8 인물 구분 · J9 일반 보스 매화 다름 · J10 예시 베끼기 없음 · J11 장르 · J12 두 행동이 반대 · J13 1~4화 보스는 흔적으로만 · J14 화마다 다른 상황

불통과면 근거 문장을 원문 그대로 인용하고, 그 인용이 원문에 있는지 코드로 대조한다(`quote_found`). Gemini 가 쓰고 Gemini 가 채점하므로 판정이 흔들릴 수 있다. 문제 위치를 찾는 용도로 본다.

## 결과 읽는 법
- `✓` 저장 성공 / `✗` 실패 (저장 안 함, 이전 결과가 남아 있음)
- `[남은 오류]` 3번 다시 써도 남은 코드 검사 오류
- `[채점 ✗ J?]` 불통과 항목과 근거 문장. `(인용이 원문에 없음)` 이면 채점이 근거를 지어낸 것
- 맨 끝 `[채점 요약]` 항목별 통과 수

## 테스트·개선 방법
1. 같은 묶음을 다시 돌리기 전에 이 폴더를 백업한다
2. 실행해서 `[채점 요약]` 과 `[남은 오류]` 수를 본다
3. 자주 나오는 문제를 규칙(storyarcGen.ts)이나 코드 검사(rewrite/+server.ts)로 옮긴다
4. 다시 돌려 이전과 비교한다

## 주의
- 이 폴더 파일은 `index.ts` 에 등록되지 않는다 (id 가 원본과 같음). 시나리오 생성(bulk-pipeline)은 아직 이 결과를 읽지 못한다. 쓰려면 원본 파일에 덮어쓰거나 등록 방식을 정해야 한다
- 새 필드(story_spine, key_object 등)는 chapterGen 이 아직 읽지 않는다
- 1~4화의 보스 대사는 얼굴이 없으므로, 시나리오(chapterGen)에서는 narrator 지문이나 NPC 가 전하는 말로 써야 한다 (chapterGen 아직 미반영)

---

# 시나리오 만들기 (재작업 storyarc → 대사)

이 폴더의 storyarc 로 시나리오(5화 × 방 5개 대사)를 만든다. 기존 시나리오 파이프라인(bulk-pipeline)과 섞이지 않게 **생성만** 하고 별도 폴더에 저장한다 (번역·output 저장 없음).

```bash
npm run gen:rewrite-scenarios -- --id=modern_evannext_1            # 1~5화
npm run gen:rewrite-scenarios -- --id=modern_evannext_1 --orders=1,5
npm run gen:rewrite-scenarios -- --id=a,b --concurrency=2
```

- 결과: `output_list/rewrite_test/<id>/`
  - `script.md` 1~5화 읽기용 대본 (가장 보기 편함) / `script_0N.md` 화별
  - `scenario_0N.json` 게임 데이터 형식 (actors 에 대사에 나온 NPC 포함, 각 NPC 에 직업 `role: { korean }` — storyarc `npc_roles.<key>.title` 에서. 1~4화는 `boss.role: { korean }` 에 그 화 일반 보스 직업)
- 프롬프트: `src/lib/prompts/chapterGenRewrite.ts` (게임 데이터 형식 규칙만 `chapterRules.ts` 에서 공유)
- 엔드포인트: `src/routes/api/scenario/rewrite-test/+server.ts`, 러너: `scripts/gen-rewrite-scenarios.mjs`
- 비용: 화당 Gemini 1~3번 (5화 동시)

### 프롬프트 원칙
- storyarc 필드는 "무슨 일이 일어나는지" 메모로 주고, 대사는 자연스러운 말로 쓰게 한다 (필드 문구·"이번 화"·대괄호를 대사에 옮기지 않게)
- 방 배치는 꼭 필요한 장면만 고정: 방 1 첫 줄 narrator 상황 한 줄 / 방 1~9 에 보스 흔적·주 NPC·새 의문·주인공의 행동과 결과 (순서 자유) / 방 15 전투
- 1~4화 최종보스는 boss_trace 로만 (narrator 지문 속 따옴표 또는 NPC 가 전함). 5화 방 15 에서 처음 모습 (speaker 'boss')
- 1~4화는 줄거리 요약에서 5화를 숨긴다. 2~4화 단서는 화마다 나눠 준다
- 출력 예시를 넣지 않는다 (예시 문장을 베낀다). 형식은 출력 스키마가 강제
- 일반 보스는 방 15 밖에 나와도 된다
- direction 의 focus 는 쓰지 않는다 (프롬프트로 막고, 남으면 저장 전에 지움)

### 코드 검사 (어기면 오류를 붙여 최대 2번 다시 요청)
방 번호 1,3,5,9,15 / 일반 보스가 정답 행동을 말함 / 허용되지 않은 speaker / NPC 가 enter 없이 말함 / 대사에 placeholder 글자 / "이번 화"·대괄호 / 행동 메모를 대사로 그대로 읽음 / character_1~4 의 질문 / 1~4화 speaker 'boss' / prologue·epilogue 1인칭 / 방 1 첫 줄 narrator / 핵심 물건·보스 흔적이 대사에 나옴 / 5화 방 15 보스 대사·epilogue
