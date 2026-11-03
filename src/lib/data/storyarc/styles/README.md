# 5화 이야기 만들기 (넷쇼트 · cozy)

이 폴더에는 두 가지가 있습니다.

- **스타일 파일** `netshort.md`, `cozy.md`: "어떻게 쓰는지"(작가 소개·문체·톤·일반 보스 호칭)
- **이야기 폴더** `netshort_test/`, `cozy_test/`: 이야기 틀별 재료와 결과물

이야기 틀과 스타일은 따로 고를 수 있습니다. 넷쇼트 틀에 cozy 문체를 입힐 수도 있습니다.

| 틀 | 1~4화 | 5화 | 재료 |
|---|---|---|---|
| 넷쇼트 (`netshort_test/`) | 장치로 상처를 넘겼더니 엉뚱한 사람이 다침 | 장치를 쓰지 않고 보스를 무너뜨림 | 코드가 랜덤으로 뽑음 (`story-seeds.json`) |
| cozy (`cozy_test/`) | 겉모습만 보고 오해해서 싸움 → 이긴 뒤 진짜 사정이 드러남 | 싸우기 전에 사연을 묻고 화해 | 사람이 쓴 기획안 (`premises.json`) |

---

## 전체 흐름

두 틀 모두 **이야기 → 대본** 두 단계입니다.

```
npm run dev &        (포트 5178, 모든 단계가 이 서버의 엔드포인트를 부름)

[1단계: 이야기]
  재료 + 스타일 → Gemini 1콜 → 코드 검사 (걸리면 오류를 붙여 최대 2번 다시)
  → <폴더>/story.json, story.md
  고른 스타일·톤을 저장 (넷쇼트 seeds.json / cozy cast.json)

[2단계: 대본]
  story.json → 5화를 동시에 Gemini 로 → 코드 검사 (걸리면 최대 2번 다시)
  → 다듬기 (화마다 1콜, 이상한 줄만 고침, 기록 polish_0N.json)
  → scenario_0N.json (게임 데이터), script_0N.md, script.md (읽기용)
```

이야기 방 번호를 게임 방 번호로 옮깁니다: **1, 3, 5, 8, 10 → 1, 3, 5, 9, 15**.
방 10의 before_battle·win·lose 는 방 15의 dialogue·win_dialogue·lose_dialogue 가 됩니다.

대본 단계는 이야기 단계에서 저장한 스타일·톤을 그대로 씁니다. `--style=` 을 주면 바꿀 수 있습니다.
저장된 톤이 새 스타일의 톤 목록에 없으면 톤을 다시 뽑습니다.

---

## 넷쇼트 (`netshort_test/`)

1. **재료 뽑기** — 코드가 `story-seeds.json` 에서 무대·원죄·반전 종류·장치를 하나씩, 2~4화 조심 방식을 서로 다르게 뽑습니다. 화별 NPC와 보스 흔적이 나올 화도 코드가 정합니다. 결과는 `<id>/seeds.json`. (`--id=` 로 다시 쓰면 이 단계를 건너뜁니다.)
2. **이야기** — `story-prompt.md` 의 프롬프트에 재료를 채웁니다. Gemini 는 `design`(장치·보스·속은 대상과 실제 피해자 등)을 먼저 정하고 본문을 거기에 맞춰 씁니다.
3. **채점** — 저장한 뒤 N1~N7 항목을 Gemini 로 채점합니다(`judge.json`, 측정용이라 다시 쓰지는 않음). 그리고 `story-seeds.json` 의 `used_stories` 에 추가해서 다음 이야기와 겹치지 않게 합니다.
4. **대본** — NPC가 말하는데 등장(enter)이 빠졌으면 코드가 넣습니다. 3·4화는 앞 화 피해자가 함께 다니게 합니다.

```bash
npm run gen:netshort                                 # 새 이야기 1개 (--count=3 이면 3개)
npm run gen:netshort -- --id=<id>                    # 저장된 재료로 다시 쓰기
npm run gen:netshort -- --judge-only                 # 기존 이야기 채점만
npm run gen:netshort-scenarios -- --id=<id>          # 대본 (--orders=1,5 로 일부만)
npm run gen:netshort-scenarios -- --id=<id> --polish-only   # 기존 대본 다듬기만
npm run gen:netshort-scenarios -- --id=<id> --enters-only   # 빠진 enter 만 (Gemini 없음)
```

자세한 규칙(재료·design·검사): [netshort_test/README.md](netshort_test/README.md)

---

## cozy (`cozy_test/`)

1. **기획안** — `premises.json` 에 사람이 쓴 5화 줄거리 4개(lostfound·market·festival·letters)가 있습니다. 3화는 거꾸로 꼬는 화입니다(믿었던 사람이 상대).
2. **배역** — 처음 만들 때 함께 다닐 주 NPC 한 명과 스타일·톤을 뽑아 `<key>/cast.json` 에 저장합니다. 이야기끼리 NPC가 겹치지 않게 뽑습니다.
3. **이야기** — 기획안 + 주 NPC + 스타일로 `story.json` 을 씁니다. 채점은 없습니다.
4. **대본** — 1~4화 상대는 `random_boss`, 5화 상대는 `boss`. 둘 다 방 15 에서만 직접 말하고, 그 전에는 지문 속에서만 나옵니다.

```bash
npm run gen:cozy                                     # 기획안 전부
npm run gen:cozy -- --keys=market                    # 하나만
npm run gen:cozy-scenarios                           # 대본, 기획안 전부
npm run gen:cozy-scenarios -- --keys=market --orders=1   # 스모크: 1화만
```

---

## 스타일 바꾸기

```bash
npm run gen:netshort -- --style=cozy                 # 넷쇼트 틀 + cozy 문체
npm run gen:cozy -- --keys=market --style=netshort   # cozy 틀 + 넷쇼트 문체
```

새 스타일은 `netshort.md` 나 `cozy.md` 를 복사해서 이름만 바꾸면 바로 쓸 수 있습니다.
섹션 제목은 고정이고, 각 섹션의 첫 코드 블록이 값입니다.

| 섹션 | 쓰이는 곳 | 비워도 되나 |
|---|---|---|
| 테마 | 이야기 단계 테마 설명 (비면 재료 파일의 theme_description) | 됨 |
| 톤 | 한 줄에 하나, 이야기마다 하나 뽑음 | 됨 |
| 이야기 작가 | 이야기 단계 첫 줄 다음 | 됨 |
| 이야기 문체 | 이야기 단계 [문체] 에 더하는 줄 | 됨 |
| 대본 작가 | 대본 단계 "당신은 ___입니다" | **안 됨** |
| 대본 분위기 | 대본 단계 "- 분위기: ___" (`{{tone}}` 자리) | **안 됨** |
| 일반 보스 호칭 | 1~4화 일반 보스를 부르는 말 | **안 됨** |

다른 틀에 스타일을 씌울 때 재료 파일의 테마 설명이 스타일과 어긋나면 스타일 파일의 `테마` 를 채웁니다.
이 README 는 스타일로 읽히지 않습니다.

---

## 파일 위치

| 파일 | 하는 일 |
|---|---|
| [storyStyle.ts](../../../prompts/storyStyle.ts) | 스타일 파일 읽기 |
| [netshortStory.ts](../../../prompts/netshortStory.ts) · [api/storyarc/netshort](../../../../routes/api/storyarc/netshort/+server.ts) · [gen-netshort.mjs](../../../../../scripts/gen-netshort.mjs) | 넷쇼트 이야기 |
| [netshortJudge.ts](../../../prompts/netshortJudge.ts) | 넷쇼트 채점 |
| [chapterGenNetshort.ts](../../../prompts/chapterGenNetshort.ts) · [api/scenario/netshort](../../../../routes/api/scenario/netshort/+server.ts) · [gen-netshort-scenarios.mjs](../../../../../scripts/gen-netshort-scenarios.mjs) | 넷쇼트 대본 |
| [cozyStory.ts](../../../prompts/cozyStory.ts) · [api/storyarc/cozy](../../../../routes/api/storyarc/cozy/+server.ts) · [gen-cozy.mjs](../../../../../scripts/gen-cozy.mjs) | cozy 이야기 |
| [chapterGenCozy.ts](../../../prompts/chapterGenCozy.ts) · [api/scenario/cozy](../../../../routes/api/scenario/cozy/+server.ts) · [gen-cozy-scenarios.mjs](../../../../../scripts/gen-cozy-scenarios.mjs) | cozy 대본 |
| [netshortPolish.ts](../../../prompts/netshortPolish.ts) | 대본 다듬기 (두 틀 공용) |
