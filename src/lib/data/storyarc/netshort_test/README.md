# 넷쇼트 스타일 5화 스토리

재료를 랜덤으로 뽑아 Gemini 에 한 번 요청하면 5화짜리 이야기(story.json)가 나옵니다.

```bash
npm run dev &                          # 포트 5178
npm run gen:netshort                   # 새 이야기 1개
npm run gen:netshort -- --count=3      # 3개
npm run gen:netshort -- --id=<id>      # 저장된 재료로 다시 쓰기
```

---

## 흐름

```
story-seeds.json (재료 목록)
   │  ① 코드가 카테고리마다 하나씩 랜덤으로 뽑음 (pickSeeds)
   ▼
<id>/seeds.json (이번 이야기에 뽑힌 재료)
   │  ② 재료 + NPC 풀 + 쓰지 말 것 + 이미 만든 이야기 → 프롬프트 (buildNetshortPrompt)
   ▼
Gemini 1콜
   │  ③ 출력 맨 앞에 design 을 먼저 정하고, 본문을 design 에 맞춰 씀
   ▼
코드 검사 (checkNetshortStory)
   │  ④ 오류가 있으면 오류 + 이전 출력을 붙여 다시 요청 (최대 2번)
   │     그래도 남으면 저장하고 [남은 오류]로 출력
   ▼
<id>/story.json, <id>/story.md 저장
   │  ⑤ story-seeds.json 의 used_stories 에 이번 이야기 추가
   ▼
다음 이야기는 이 이야기와 겹치지 않게 만들어짐
```

`--id=<id>` 로 다시 쓰면 ①을 건너뛰고 그 폴더의 seeds.json 재료를 그대로 씁니다.

---

## 재료와 design 의 차이

seeds 는 **종류**만 정하고, 이번 이야기의 **구체적인 내용**은 Gemini 가 design 에 정합니다.

| seeds 가 정하는 것 (종류) | design 에 Gemini 가 정하는 것 (구체적 내용) |
|---|---|
| devices: 사람이 문장으로 정한 장치 (object·rule·effect·worlds) | device·how·visible_effect: 뽑은 장치 그대로 (코드가 덮어씀) |
| (없음) | wrong_action: 1~4화 win 에서 하는 잘못된 행동 |
| (없음) | right_action: 5화 win 에서 이야기를 끝내는 행동 |
| original_sins: "희생양 만들기" | original_sin: 누가 무엇을 했는지 한 줄 |
| (없음) | boss_trace: 1~4화에 보스 대신 나오는 흔적 (본문에 글자 그대로, 두 화 이상) |
| (없음) | boss_look: 최종 보스 외모 (옷차림·장신구·물건, 보스 이미지용) |
| (없음) | boss_name: 최종 보스 이름 |
| twist_types: "희생자의 원한" | true_identity: 최종 보스의 진짜 정체 한 문장 |
| twist_types | twist: 반전을 짧은 명사구로 |
| reason_types (1~4화마다) | (본문) 그 화에서 "이번엔 괜찮다"고 믿는 이유를 장면으로 |

design 이 있는 이유:
- 먼저 정해 두고 쓰게 해서 1~4화의 행동·흔적·정체가 화마다 어긋나지 않습니다.
- 사람이 story.md 맨 위에서 이야기의 뼈대를 한눈에 봅니다.
- 코드 검사의 기준이 됩니다 (boss_trace 가 1~4화 중 두 화 이상 나오는지, true_identity 의 정체 낱말이 5화 8번 방 전에 안 나오는지).

---

## 예시: design → 본문

[example-design.json](example-design.json) 의 design 칸이 [example-story.json](example-story.json) 본문 어디에 장면으로 풀렸는지 보여 줍니다.

| design | 값 | 본문에서 |
|---|---|---|
| device | 사당의 낡은 명부. 이름이 떠오른 사람은 그날 밤 사라지고, 그 이름을 지우고 다른 이름을 적으면 그 사람이 대신 사라진다 | 1화 5번 방: 린이 명부의 규칙을 알려 주고, 사라질 아이 이름이 떠오름 |
| wrong_action | 명부에 떠오른 이름을 지우고 다른 사람의 이름을 바꿔 적는다 | 1~4화 win: 1화 흐린 이름 → 2화 다시 바꿔 적기 → 3화 강 건너 에코 이름 → 4화 손녀 대신 마지막으로 |
| right_action | 잊힌 아이의 이름을 불러 주고 명부를 불태운다 | 5화 win |
| original_sin | 100년 전 마을 사람들이 고아 아이 이름을 명부에 적고 그 장을 찢어 숨겼다 | prologue, 3화 5번 방(닥스의 이야기), 4화 win(카이의 고백) |
| boss_trace | 속삭임 | 1화 8번 방 "풍경 소리에 실린 속삭임", 2화·3화 8번 방 |
| boss_name | 명부지기 | 5화 boss, 5화 5번 방에 처음 등장 |
| boss_look | 삿갓을 눌러쓴 열두어 살 소녀, 몸에 큰 잿빛 장삼, 허리춤의 짚인형, 겉장이 찢긴 명부 | 5화 5번 방(삿갓), 8번 방(소녀·장삼), 3번 방(짚인형). 보스 이미지를 만들 때 씀 |
| true_identity | 명부지기는 100년 전 명부 첫 장에 이름이 적혀 사라진 고아 소녀이다 | 5화 8번 방: 삿갓이 벗겨지고 소녀가 드러남 |
| twist | 명부 첫 장의 주인 | 5화 8번 방 |

- 정체 낱말 "소녀" 는 5화 8번 방에서 처음 나옵니다. 그 전(prologue, 3화 5번 방)에는 "아이", "고아" 로 씁니다.
- boss_trace "속삭임" 은 1~3화에 나오고 4화에는 없습니다. 흔적이 매 화 나올 필요는 없습니다.

예시의 무대(동양 산골 마을)는 지금 story-seeds.json(theme `modern`)의 worlds 에 없습니다. 형식만 참고하세요.

---

## 파일

### 이 폴더

| 파일 | 무엇 | 왜 있나 |
|---|---|---|
| `story-seeds.json` | 재료 목록 (worlds, devices, original_sins, twist_types, tones, motifs, reason_types, random_words), 테마·NPC 풀(`theme`, `theme_description`), `banned_cliches`, `used_stories` | 매번 다른 이야기가 나오게 하는 랜덤 재료. 사람이 직접 고쳐서 재료를 늘리거나 줄입니다. `used_stories` 는 코드가 저장할 때마다 자동으로 추가합니다. |
| `story-prompt.md` | 프롬프트 원본 | **코드가 이 파일을 읽습니다.** `netshortStory.ts` 가 "## 시스템 프롬프트"와 "### 입력 템플릿" 코드 블록을 그대로 가져와 `{{자리}}` 만 채워 보냅니다. 프롬프트 문장은 여기서만 고치면 됩니다. 제목·코드 블록 모양을 바꾸거나 모르는 `{{자리}}` 를 넣으면 서버가 오류를 냅니다. |
| `example-story.json` | 출력 예시 (본문) | 결과 모양을 보여 주는 참고용입니다. 코드는 읽지 않습니다. design 단계가 생기기 전에 만든 것이라 `design` 칸이 없습니다. |
| `example-design.json` | 출력 예시 (design) | example-story.json 에서 거꾸로 뽑은 design 입니다. 실제 story.json 에서는 이 `design` 이 `title` 다음에 함께 들어갑니다. 코드는 읽지 않습니다. 아래 "예시" 참고. |
| `README.md` | 이 문서 | |
| `<id>/seeds.json` | 이번 이야기에 뽑힌 재료 | 같은 재료로 다시 쓸 때(`--id`) 씁니다. |
| `<id>/story.json` | 결과 (design, prologue, episodes 1~5, 5화 epilogue) | 다음 단계에서 쓰는 데이터입니다. |
| `<id>/story.md` | 결과를 사람이 읽기 좋게 바꾼 것 | 맨 위에 뽑힌 재료와 design, 그 아래 화별 방 내용이 있습니다. |

`<id>` 는 `<world.key>_<시각>_<n>` 입니다.

### 코드

| 파일 | 하는 일 |
|---|---|
| [src/lib/prompts/netshortStory.ts](../../../prompts/netshortStory.ts) | 재료 뽑기(`pickSeeds`), 프롬프트(`buildNetshortPrompt`), 출력 모양(`netshortStoryTool`), 코드 검사(`checkNetshortStory`), story.md 만들기(`netshortToMarkdown`) |
| [src/routes/api/storyarc/netshort/+server.ts](../../../../routes/api/storyarc/netshort/+server.ts) | 엔드포인트. seeds 읽기 → 이야기마다 Gemini 호출·검사·다시 요청 → 저장 → used_stories 갱신 |
| [scripts/gen-netshort.mjs](../../../../../scripts/gen-netshort.mjs) | 러너 (`npm run gen:netshort`). 옵션을 엔드포인트에 넘기고 결과를 출력 |

---

## 코드 검사 항목

걸리면 다시 요청합니다.

- design 9칸이 비어 있지 않은지
- NPC 가 풀 안에 있는지, 같은 NPC 는 모든 화에서 같은 role 인지, 5화 NPC = 4화 NPC 인지
- 방이 1,3,5,8,10 뿐인지, 10번 방이 before_battle·win·lose 인지
- epilogue 가 5화에만 있는지
- 방마다 문장 수, 서술이 현재형인지("있다" 는 허용), "주인공"·"이번엔 괜찮다"·한자를 쓰지 않았는지
- design.boss_trace 가 1~4화 중 두 화 이상에 글자 그대로 나오는지
- true_identity 의 마지막 낱말(정체)이 5화 8번 방 전에 나오지 않는지

**검사하지 않는 것:** wrong_action·right_action 이 본문에 실제로 나오는지는 보지 않습니다 (문장이라 글자 비교가 어렵기 때문). "1~4화 win 에서 한 번만", "NPC 는 권하지 않음" 같은 줄거리 규칙은 프롬프트로만 부탁합니다.

---

## 옵션

`--count` (기본 1, 최대 20) / `--id=a,b` / `--no-words` (random_words 안 씀) / `--seeds=FILE` / `--out=DIR` / `--concurrency` (기본 2) / `--temperature` (기본 0.8) / `--base` (기본 http://localhost:5178)

이야기 1개당 Gemini 1~3콜.
