// 시나리오(챕터) 생성 프롬프트가 함께 쓰는 게임 규칙.
// 게임(런타임)이 읽는 데이터 형식에 관한 규칙이라, 바꾸면 chapterGen.ts·chapterGenRewrite.ts 결과가 모두 바뀐다.
// chapterGen.ts 에서 문장 그대로 옮겨 왔다 (프롬프트 결과 동일).

// 화자(speaker) 규칙: narrator / character_any / character_1~4 / NPC
export const SPEAKER_RULES = `## Speaker 규칙
- narrator: 상황 설명이 불가피할 때만. 1~2줄로 짧게. "~다" 로 끝내는 건조한 문체
- character_any: 이야기의 핵심 정보(단서·결론·결심)를 말하는 대사. 대사 한 줄마다 살아있는 파티원 중 한 명이 새로 배정되며, 항상 출력된다
  - 앞뒤 대사와 상관없이 누가 말해도 말이 되는 한 줄로 쓴다
  - character_any 끼리 묻고 답하지 않는다 (같은 사람이 배정될 수 있다)
  - character_any 를 연달아 써서 한 사람의 말이나 사연을 이어가지 않는다. 한 줄로 끝낸다
- character_1 ~ character_4: 감정·반응 대사 전용. 그 파티원이 사망했으면 대사가 통째로 빠진다
  - 이 대사를 모두 지워도 흐름이 그대로 읽혀야 한다
  - 핵심 정보, 질문, 다른 대사가 받아야 하는 말을 넣지 않는다
  - character_1~4 의 대사에 다른 대사가 대답하거나 반응하지 않는다
  - 살아있는 파티원이 한 명뿐이면 앞뒤 대사를 모두 같은 사람이 말하게 된다. 따라서 상대에게 하는 말("정말?", "네 말이 맞아")은 쓰지 않고, 혼잣말로도 성립하는 감정 표현만 쓴다
    - 좋은 예: "…소름 돋네." / "이 추위, 뼛속까지 스며든다."
- 주고받는 대화는 서로 다른 사람이 확실한 화자끼리만 한다 (character_any ↔ NPC, character_any ↔ boss/random_boss)
- NPC: 이 시나리오의 npc 값이 주 NPC다. USER 섹션 "이 아크의 NPC 목록"에 있는 다른 NPC도 summary 에 나오면 함께 speaker로 쓸 수 있다
  - speaker 에는 그 NPC 의 key 를 그대로 쓴다. 목록에 없는 NPC 를 만들어내지 않는다
  - NPC 마다 등장하는 방에서 enter 를 먼저 쓴다 (아래 NPC 등장/퇴장 규칙)
- boss speaker 규칙은 아래 "## 보스 speaker 규칙" 참조`;

// 파티 캐릭터 placeholder 절대 원칙
export const PLACEHOLDER_RULES = `### 파티 캐릭터 placeholder 절대 원칙 (중요)
- character_1~4 는 런타임에 **살아있는** 파티원으로 매핑되는 placeholder이며, 그 중 일부는 이미 **전투 중 사망했을 수 있다**. 어떤 파티원이 살아있는지 생성 시점에는 알 수 없다.
- **금지 A**: placeholder 문자열(character_1~4, character_any)을 **대사/지문의 content 텍스트 안에 글자 그대로 쓰지 말 것**. 런타임에 치환되지 않아 화면에 'character_1' 이 그대로 노출되며 깨진다. placeholder 는 오직 speaker 필드에만 쓴다.
  - 나쁜 예: content="character_1!" / content="그 빛은 character_1에게 깃들었다."
- **금지 B**: 특정 파티원의 **생존·기억·지목에 의존하는 서사**를 만들지 말 것. "○○가 의지를 이어받았다", 누군가의 이름을 부르며 "○○!", "○○만이 진실을 믿었다" 같은 비트는 그 캐릭터가 죽었으면 무의미해진다.
- **대안**: 영속적이거나 이름이 필요한 서사 역할(계승자·기억되는 인물 등)은 **이름이 지정된 NPC**(예: anuk) 또는 **집단 표현**(character_any 화자 + "우리"/"살아남은 자들" 같은 복수 주어)으로만 풀어낸다.
- 보스 이름이 필요하면 아래 보스 규칙대로 {random_boss} placeholder 를 사용한다.`;

// 보스 speaker 규칙 (random_boss / boss)
export const BOSS_SPEAKER_RULES = `## 보스 speaker 규칙 (중요)
- 이 시나리오의 boss 값이 'random_boss'인 경우 (order 1~4, 일반 중간보스):
  - speaker는 반드시 'random_boss'로 고정
  - 고유 이름 / 외형(종·복장·체형·상징물) 묘사 금지 — 런타임에 임의 배정되므로 특정할 수 없다
  - 부득이하게 이름을 언급해야 하는 대사는 '{random_boss}' 플레이스홀더 사용
    예: "그 일은 {random_boss}가 꾸민 거구나?" / "{random_boss}의 부하를 처치했다"
  - narrator 지문도 "거대한 그림자" / "정체 모를 자" 같은 중립 표현으로
- 이 시나리오의 boss 값이 pool_id(예: pool_033)인 경우 (order 5, 최종보스 = final_boss):
  - speaker 필드는 반드시 'boss' 고정 (speaker에 보스 이름을 쓰지 말 것)
  - 대사·지문(content) 안에서는 final_boss 데이터의 이름·외형·트위스트를 구체적으로 써도 된다
- 이 규칙은 아래 출력 예시보다 우선한다 (예시는 order 5 기준)`;

// NPC 등장/퇴장(enter/exit) 규칙
export const NPC_ENTER_EXIT_RULES = `## NPC 등장/퇴장 규칙

### 공간 구조 (중요)
- 방은 **아래에서 위로** 진행된다 (1 → 3 → 5 → 9 → 15). 탐험대는 항상 위쪽으로 이동 중
- NPC는 탐험대를 따라 올라오는 구조 — 새 방에서 등장 시 아래쪽(낮은 y)에서 걸어 들어오는 느낌
- enter spot 좌표 가이드: 어디든 상관없음. 소수점 금지

### 기본 원칙 (절대 원칙)
- NPC는 방 단위로 존재한다. 방이 바뀌면 **자동으로 사라진다**
- 따라서 방이 끝날 때 exit을 쓸 필요 없다 (exit은 특수 연출 전용)
- **다음 방에서 NPC가 한 마디라도 하려면 반드시 그 방에서 enter를 먼저 써야 한다**
  - 이 규칙은 모든 방(id: 1, 3, 5, 9, 15)에 동일하게 적용
  - 보스 룸 15의 win_dialogue/lose_dialogue도 예외 아님 — 그 블록에서 NPC가 새로 등장한다면 enter 필요
- enter 없이 NPC 대사가 나오면 렌더링이 깨진다. 반드시 지킬 것

### enter 체크리스트 (각 방의 dialogue 블록을 쓰기 전 확인)
1. 이 방에서 이 NPC의 첫 speech가 등장하는가? → 그 speech **앞에** direction 항목 삽입 (type='direction', action='enter', speaker=NPC이름, spot=[x,y], duration_ms=500)
2. 이전 방에서 이미 enter 했더라도 이번 방은 **새 공간** → 다시 enter 필요
3. spot은 반드시 지정. y는 하단 권장 (아래에서 걸어오는 연출)
4. duration_ms는 400~600 사이

### exit 사용 조건 (아래 경우에만 사용)
- 대화 도중 NPC가 도망가거나 쫓겨나는 연출
- 대화 중간에 퇴장 후 다른 NPC가 등장하는 연출
- 보스 룸에서 카인/NPC가 "부하랑 싸워라"하고 빠지는 연출
- exit 방향은 direction 필드로 지정 (생략 시 기본값 up — 위로 사라짐)
- 아래로 도망가는 연출은 direction: 'down' 명시

### 보스 룸 (id: 15) NPC 규칙
- 보스는 자동 등장 — enter 불필요
- 카인 같은 조력자/빌런은 전투 전 한 마디 하고 exit 가능
- win_dialogue에서 NPC가 다시 등장할 경우 enter 필요

### 절대 금지
- 방 마지막에 습관적으로 exit 쓰는 것
- enter 없이 NPC 대사 쓰는 것
- 같은 방에서 enter → 대사 없이 바로 exit`;

// 대사 작성 규칙
export const DIALOGUE_RULES = `## 대사 작성 규칙
- 한 번에 3줄 이상 설명하지 말 것 — 1~2줄로 끊어서 주고받아라
- "…" 로 시작하는 대사는 감정이 복잡할 때만
- 보스는 위협적이거나 철학적으로. 절대 장황하게 설명하지 말 것
- NPC 경고는 무시당하는 방향으로 써라 — 탐험대는 멈추지 않는다`;

// 방 구성 규칙 + 15번 보스 룸 구성
export const ROOM_RULES = `## 방 구성 규칙
- rooms는 id: 1, 3, 5, 9, 15 총 5개
- id 1: 시나리오 시작. 세계관/상황 세팅. NPC 등장 가능
- id 3, 5: 사건 전개. 복선 심기. NPC 경고/단서
- id 9: 긴장감 고조. 돌아올 수 없는 느낌
- id 15: 보스 룸. dialogue(전투 전) + win_dialogue + lose_dialogue 필수

## id 15 보스 룸 구성
dialogue (전투 전):
  - 보스 등장 대사 2~3줄
  - 탐험대 반응 1줄
  - 짧고 강렬하게

win_dialogue (승리 시):
  - 보스 마지막 말 — 복선 or 반전 포함
  - 탐험대 반응
  - 나레이터로 다음 시나리오 암시

lose_dialogue (패배 시):
  - 보스 조롱 or 탐험대 결의
  - 짧게. 재도전 의지`;

// 출력 규칙
export const OUTPUT_RULES = `## 출력 규칙
- prologue와 rooms 두 필드를 기본 출력
- 한국어만 사용. content 필드는 반드시 { korean: '...' } 형태
- emotion은 반드시 'base' | 'happy' | 'sad' | 'angry' 중 하나
- prologue.korean은 3~5줄 배열 — 영화 예고편처럼 짧고 강렬하게
- **5번 시나리오(climax_finale)에 한해** epilogue 필드도 반드시 출력
  - epilogue.korean은 3~5줄 배열 — 전투 종료 후의 여운
  - prologue처럼 건조하고 짧게. 결말 이후의 감정적 잔상을 남길 것
  - 희망적 결말 혹은 현실적 결말 혹은 열린 결말`;
