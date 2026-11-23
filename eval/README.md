# eval/ — 검사 결과와 채점 기준

검사는 에이전트가 하고, 이 폴더에는 그 **결과**가 쌓인다. 에이전트 자체(무엇을 읽고·어떻게 보고·어디에 저장할지)는 `.claude/agents/` 에 있다.

| | `.claude/agents/` | `eval/` |
|---|---|---|
| 들어 있는 것 | 에이전트 정의 (지시문) | 에이전트가 쓴 리뷰, 회귀 테스트 체크리스트·생성물 |
| 바뀌는 때 | 검사 방식을 바꿀 때만 | 검사를 돌릴 때마다 |
| 읽는 쪽 | Claude Code (요청하면 이 정의대로 에이전트를 띄움) | 사람 (리뷰 확인, 이전 결과와 비교) |

## 에이전트별로 쓰는 곳

| 에이전트 | 채점 기준이 있는 곳 | 결과가 쌓이는 곳 | 언제 |
|---|---|---|---|
| `chapter-playtester` | **에이전트 파일 안** ([.claude/agents/chapter-playtester.md](../.claude/agents/chapter-playtester.md)): 매끄러움·이해·아크 반영·몰입 4항목 n/5 | `eval/playtest/<챕터파일명>.playtest.md` | 완성된 챕터(`output_list/*.json`)를 검수할 때. "desert_chapter_45 플레이테스트 해줘" |
| `story-tester` | **이 폴더의 체크리스트** ([checklist.md](checklist.md), [checklist_arc.md](checklist_arc.md)) — 요청할 때 같이 넘긴다 | 채점 대상 파일 옆 `<원본이름>.review.md` (회귀 테스트면 `eval/runs/<시각>/`) | 프롬프트를 고친 뒤 `npm run eval:arcs` 결과를 채점할 때 |

즉 `chapter-playtester` 는 채점표를 자기 안에 갖고 있어서 `eval/` 의 체크리스트를 쓰지 않는다. `eval/` 은 리뷰를 **저장**하는 곳일 뿐이다. 체크리스트는 `story-tester` 용이다.

## 폴더 안

- `playtest/` — `chapter-playtester` 리뷰. `.v2`·`.v3`·`.v4` 는 손 수정 뒤 다시 검증한 차수 (이전 리뷰를 덮어쓰지 않게 따로 저장).
- `checklist.md` — 챕터(대사)용 회귀 체크리스트. 생성 규칙 하나당 항목 하나.
- `checklist_arc.md` — 챕터 만들기 전, 아크만 보는 체크리스트 (`npm run eval:arcs -- --arc-only` 결과용).
- `runs/<시각>/` — `npm run eval:arcs` 가 고정 보스 5명(desert aserah·carnivex, hell philomel·razzle·vane)으로 새로 만든 아크·시나리오. `output_list`·테마 폴더는 건드리지 않는다. 체크리스트 통과 수를 이전 run 과 비교하는 게 주 지표.
- `fixtures/` — 회귀 테스트용 고정 보스 데이터 (`hell_philomel_1118.json`). 세트는 늘리기만 한다 — 바꾸면 이전 run 과 비교가 안 된다.

여기서 "카드"는 예전 카드 파이프라인(`_legacy/`)이 아니라 **boss_list 의 보스 카드**(보스 한 명의 JSON)를 말한다.
