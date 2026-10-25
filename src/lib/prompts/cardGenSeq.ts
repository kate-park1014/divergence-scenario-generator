// 재작업 시나리오(rewrite_test) 1개 → 칸 고정 카드 16장 + additions. 성향 조합 없음.
// cardGen.ts 와 다른 점: 카드마다 칸(A~D) 하나를 맡고, 그 칸의 앞 방 끝·다음 방 시작에 이어지게 씀.
// 1. buildSeqDesignPrompt: 설계표 (칸·수치·조건·기억·표시·이벤트·인물)
// 2. buildSeqTextPrompt: 설계표대로 대사 (cardGen 의 textBatches 묶음마다) → cardGen 의 assembleCards
// 3. buildSeqAdditionsPrompt: 완성 카드를 보고 additions → cardGen 의 toWebfrontAdditions
import {
	EXAMPLE_ADDITIONS,
	STYLE,
	TEXT_EXAMPLE,
	numberedRooms,
	withCompanion,
	type CardDesign,
	type CardScenario,
	type Line,
	type Portrait
} from './cardGen';

/** storyarc 에서 가져오는 공간·세계 (보스 정체 같은 비밀은 넣지 않음 — 카드가 앞질러 밝히지 않게) */
export type SeqArc = {
	stage?: string;
	setting?: string;
	rule?: string;
	place?: string;
	summary?: string;
	keyObject?: string;
	action?: string;
	bossTrace?: string;
};

export type SeqInput = {
	scenario: CardScenario;
	genre?: string;
	arc?: SeqArc;
	/** 같은 스토리의 앞 시나리오에서 이미 쓴 카드 제목·인물 (겹치지 않게) */
	previous?: { scenario_id: string; titles: string[]; actors: string[] }[];
	/** 이 스토리 1~4화 일반 보스 호칭 전부 (카드 인물 이름·대사에 쓰지 않음) */
	bossTitles?: string[];
	portraits: Portrait[];
};

export type Slot = { key: string; after: number; before: number };

/** 선택지를 깎아내리는 말 (easy 를 바보 같은 선택으로 만듦). 검사에서도 씀 */
export const BELITTLE = ['무작정', '현혹', '알아채지 못', '맹목', '어리석', '생각 없이', '무턱대고', '덮어놓고'];
/** 이야기 밖 설명투 */
export const META = ['언급된', '앞 방', '다음 방', '이 카드'];

/** 스토리 방 id 사이마다 칸 1개. [1,3,5,9,15] → A(1~3) B(3~5) C(5~9) D(9~15) */
export function slotsOf(s: CardScenario): Slot[] {
	const ids = s.rooms.map((r) => r.id);
	return ids.slice(0, -1).map((after, i) => ({ key: 'ABCD'[i], after, before: ids[i + 1] }));
}

const GAP_LINES = 6;
const say = (l: Line) =>
	l.type === 'direction' ? `(등장 연출: ${l.speaker})` : `${l.speaker}: ${l.content?.korean ?? ''}`;

/** 칸마다 앞 방 마지막 줄들 / 다음 방 첫 줄들 */
function gapBlock(s: CardScenario): string {
	const room = (id: number) => s.rooms.find((r) => r.id === id)!;
	return slotsOf(s)
		.map((g) => {
			const prev = room(g.after).dialogue.slice(-GAP_LINES).map(say);
			const next = room(g.before).dialogue.slice(0, GAP_LINES).map(say);
			const between = g.key === 'D' ? '\n  (카드 D 뒤에 이벤트 방 → 보스 방)' : '';
			return `### 카드 ${g.key} (스토리 ${g.after} → 스토리 ${g.before})
- 앞 방(스토리 ${g.after}) 마지막:
${prev.map((t) => `  ${t}`).join('\n')}
- 다음 방(스토리 ${g.before}) 시작:${between}
${next.map((t) => `  ${t}`).join('\n')}`;
		})
		.join('\n\n');
}

function ctxOf(s: CardScenario) {
	const companion = Object.keys(s.actors)[0];
	const isFinal = !!s.boss?.pool_id && s.boss.pool_id !== 'random_boss';
	return {
		companion,
		companionName: s.actors[companion]?.name.korean ?? companion,
		bossSpeaker: isFinal ? 'boss' : 'random_boss',
		isFinal,
		bossTitle: s.boss?.role?.korean,
		prefix: `card_0${s.order}_`
	};
}

/** 3단계 모두 앞에 붙는 게임 구조·연결 규칙·시나리오·원문 */
function contextBlock(input: SeqInput): string {
	const { scenario: s, genre, arc = {}, previous = [], bossTitles = [] } = input;
	const c = ctxOf(s);
	const prevLines = previous.length
		? previous.map((p) => `- ${p.scenario_id}: 카드 ${p.titles.join(', ')} / 인물 ${p.actors.join(', ')}`).join('\n')
		: '- 없음 (이 스토리의 첫 시나리오)';

	return `# 게임 구조 (먼저 이해할 것)
- 한 판 = 방 10개. 스토리 방 5개(id 1, 3, 5, 9, 15)는 아래 원문 그대로 나오고, 그 사이 칸마다 카드 1장
| 방 위치 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 내용 | 스토리 1 | 카드 A | 스토리 3 | 카드 B | 스토리 5 | 카드 C | 스토리 9 | 카드 D | 이벤트 방 | 스토리 15 (보스) |
- 이벤트 방은 게임이 자동으로 넣음 (대사 없음). 카드와 상관없음
- 카드마다 칸 1개(\`slot\`)를 맡음. 칸마다 후보 카드 3장 중 게임 코드(Director)가 1장을 골라 보여 줌
- 플레이어가 선택지 1개를 고르면 수치가 바뀌고 기억(seed)이 남음. 기억은 뒤 칸의 회수 카드(callback)로 돌아오고, 회수 카드의 선택이 표시(flag)를 줌. 표시는 보스 방에서 유리한 선택지 또는 불리한 사건이 됨

# 앞뒤 연결 (가장 중요)
- 플레이어는 [앞 방] → [카드] → [다음 방] 순서로 봄. 카드 장면은 앞 방 마지막 장면 바로 뒤, 다음 방 첫 장면 바로 앞에 일어나는 작은 사건
- 장소·시간·인물 상태를 앞 방 끝에서 이어받음 (앞 방에서 떠난 곳, 앞 방에서 막 일어난 일)
- 다음 방 첫 대사가 그대로 말이 되어야 함
  - 다음 방이 전제하는 사실(예: "아까 ~한 것")을 깨지 않음
  - 다음 방에서 처음 밝혀지는 사실·처음 등장하는 인물을 카드에서 먼저 쓰지 않음
  - 다음 방에서 일어날 일을 카드에서 먼저 해결하지 않음
- 같은 칸의 3장은 같은 틈의 서로 다른 사건. 어느 1장이 나와도 앞뒤가 이어져야 함
- 다음 방은 어떤 카드가 나왔는지 모름. 카드 결과는 다음 방 상황을 바꾸지 않는 크기로 (작은 물건·사람·소문·몸 상태)

# 카드 내용 규칙
- 사건은 사람이 일으킴: 카드마다 동행 말고 다른 인물(새 인물 또는 원문 인물) 1명 이상이 나와서 말하고, 그 사람이 무엇을 원하거나 막음
  - 사람이 데이터 현상에 반응하는 장면이 아니라, 사람이 사람에게 요구·거래·방해하는 장면 (스크린·정보는 그 사람이 탐내거나 감추는 물건으로)
  - 손에 잡히는 물건·장소로: 고장 난 수레, 압수당한 휴대폰, 잠긴 철문, 밀린 수리비 같은 것
  - 사건 종류를 고루: 부탁·도움 요청, 거래·흥정, 다툼 말리기, 분실물 찾기, 고발·밀고, 유혹·뇌물, 사고 수습 등. "길을 막는" 카드는 칸마다 1장까지 (일반 보스 카드 포함)
  - 금지: 데이터·정보·신호·화면이 스스로 폭주하거나 덫·방송이 되는 사건 ("데이터 폭주", "정보 덫", "전자파", "왜곡된 현실")
- 이번 화 원문이 밝힌 것까지만 씀
  - 최종 보스는 카드에서 직접 움직이지 않음 (메시지 보내기, 방송, 덫 놓기, 감시 포함)
  - 원문에 없는 최종 보스의 정체·위치·본거지·주소·약점을 밝히지 않음. 카드의 발견은 이 화 안의 작은 단서까지
- 대사·서술·선택지에 "보스" 낱말 금지 (게임 용어. 이야기 안 사람은 그렇게 부르지 않음)
- 일반 보스 호칭(${bossTitles.map((t) => `"${t}"`).join(', ') || '없음'})은 카드 인물 이름으로 쓰지 않고, 대사·서술에도 그 글자를 쓰지 않음
- 첫 줄은 앞 방 대사를 그대로 받아 쓰지 않음 ("~던 그때", "~한 직후" 로 앞 방 문장을 다시 말하기 금지). 장소·사람·물건으로 바로 시작
- 앞 시나리오에서 쓴 인물(같은 이름·같은 직업)과 소재(물건)는 다시 쓰지 않음. 원문 인물은 예외
- 선택지는 모두 고를 만해야 함
  - easy 는 그럴듯한 이유가 보이게 (빠르다, 돈이 된다, 내 사람을 지킨다, 귀찮은 일을 피한다)
  - 깎아내리는 말 금지: ${BELITTLE.map((w) => `"${w}"`).join(', ')}
- 대사·서술은 이야기 안의 말만: ${META.map((w) => `"${w}"`).join(', ')} 같은 설명투 금지

# 이 시나리오
- scenario_id: ${s.scenario_id} (시리즈 ${s.order}/5번째${c.isFinal ? ', 최종 보스 시나리오' : ''})
- 장르: ${genre ?? '없음'}
- 동행 인물: \`${c.companion}\` (${c.companionName}). 동행 호감도 수치 이름은 항상 \`echo\` (effects 에는 \`echo\`, 대사 speaker 에는 \`${c.companion}\`)
${
		c.isFinal
			? `- 최종 보스 화자: \`boss\` — 카드에는 나오지 않음 (방 15에서 처음 모습을 드러냄). additions 의 마지막 방 LLM 줄에서만 사용`
			: `- 일반 보스: 화자 \`random_boss\` (이 화 호칭 "${c.bossTitle ?? ''}"). 칸 D 일반 카드 1장에만 나옴 (아래 "일반 보스 카드")

## 일반 보스 카드 (칸 D 일반 카드 1장, 정확히 1장)
- 방 9에서 이미 만난 그 사람이 방 15 직전에 한 번 더 길을 막는 장면. 카드의 \`people\` 에 \`random_boss\`, 대사 speaker \`random_boss\`
- 막는 행동만: 경고, 통행료 요구, 장비 압수, 출입 통제 같은 것. 설득당하거나 물러나지 않고, 싸움도 끝나지 않음. 이번 화 주인공 행동의 정답·결말을 미리 내지 않음
- 선택지 결과는 일반 보스가 그대로 버티는 가운데 주인공 쪽에 작은 이득·손해가 남는 정도
- 나레이션·다른 인물이 그 사람을 부를 때는 \`{random_boss}\` 자리표시 (게임이 캐릭터 이름으로 바꿈). 조사는 "{random_boss}이(가)", "{random_boss}을(를)", "{random_boss}은(는)"
- 이 카드는 다른 인물(새 인물)이 없어도 됨. 기억·회수 없음
- 다른 카드에는 일반 보스가 나오지 않음`
	}

## 공간과 세계
- 무대: ${arc.stage ?? '없음'} — ${arc.setting ?? ''}
- 이번 화 공간: **${arc.place ?? '없음'}**. 카드 16장 모두 이 공간 안이나 바로 옆에서 일어남 (무대 밖으로 나가지 않음)
  - 이 공간에 있을 법한 사람·물건·일거리로 사건을 만듦. 칸마다 공간 안의 다른 구석(입구, 창고, 통로 등)을 써도 됨
- 세계 규칙: ${arc.rule ?? '없음'}
- 핵심 물건: ${arc.keyObject ?? '없음'} / 이번 화 주인공 행동: ${arc.action ?? '없음'}
  - 카드는 이 행동을 대신 하거나, 반대 행동으로 미리 해결하지 않음. 핵심 물건은 배경이나 남이 탐내는 물건으로만
- 보스 흔적: ${arc.bossTrace ?? '없음'}. 카드에서는 배경에 비칠 수만 있고, 흔적이 사건을 일으키지 않음
- 이번 화 줄거리: ${arc.summary ?? '없음'}

## 성향 3축 (값 -100~+100)
- fighting: 투쟁(-) ↔ 협력(+) / community: 개인(-) ↔ 공동체(+) / reason: 질서(-) ↔ 자유(+)

## 칸별 앞뒤 장면
${gapBlock(s)}

## 스토리 원문 (줄 번호 = additions 의 after_line 기준. 등장 연출 줄도 셈)
${numberedRooms(s)}

## 앞 시나리오에서 이미 쓴 것 (제목·사건·인물 겹치지 말 것)
${prevLines}`;
}

// ── 1단계: 설계 ─────────────────────────────────────────────

const DESIGN_EXAMPLE = `{
  "actors": {
    "[인물 id]": { "name": { "korean": "[이름 또는 호칭]" }, "role": "[이 시나리오에서 맡은 일 한 줄]" }
  },
  "seeds": {
    "[쉬운 길 기억]": "[무엇을 했는지 한 줄, ~함]",
    "[어려운 길 기억]": "[무엇을 했는지 한 줄, ~함]"
  },
  "flags": {
    "[불리한 표시]": { "kind": "bad", "boss_penalty": -1, "summary": "[보스 방에서 생기는 불리한 일]" },
    "[유리한 표시]": { "kind": "good", "boss_penalty": 1, "summary": "[보스 방에서 고를 수 있는 행동]" }
  },
  "cards": [
    {
      "id": "[소재]",
      "kind": "plant",
      "slot": "A",
      "title": { "korean": "[짧은 제목]" },
      "summary": "[인물 이름]이(가) [물건] 때문에 [원하는 것]",
      "bridge": "앞 방 끝: [..] / 카드: [..] / 다음 방 시작: [..] 와 이어지는 이유: [..]",
      "people": ["[인물 id]"],
      "tags": ["[소재]"],
      "intensity": "calm",
      "leaning": "fighting-",
      "choices": [
        { "path": "easy", "summary": "[행동 ~한다]", "mbti": "ST", "effects": { "fighting": -30, "echo": -5 }, "event": "minigame_timing", "seed": "[쉬운 길 기억]" },
        { "path": "hard", "summary": "[행동 ~한다]", "mbti": "NF", "effects": { "fighting": 20, "echo": 5 }, "reward": ["shield"], "seed": "[어려운 길 기억]" },
        { "path": "gold", "summary": "[행동 ~한다]", "mbti": "SJ", "require": { "stat": "gold", "op": ">=", "value": 100 }, "effects": { "gold": -100, "echo": 5 }, "reward": ["intelligence_up"], "seed": "[어려운 길 기억]" }
      ]
    },
    {
      "id": "[소재]_return",
      "kind": "callback",
      "slot": "C",
      "title": { "korean": "[짧은 제목]" },
      "summary": "[심기 카드에서 남긴 것이 돌아오는 장면 한 줄]",
      "bridge": "[..]",
      "people": ["[인물 id]"],
      "tags": ["[소재]"],
      "intensity": "high",
      "callback": { "seed": "[쉬운 길 기억]", "min_rooms_after": 2 },
      "choices": [
        { "path": "easy", "summary": "[행동 ~한다]", "mbti": "ST", "effects": { "reason": 10 }, "reward": ["defense_down"], "flag": "[불리한 표시]", "seed": null },
        { "path": "hard", "summary": "[행동 ~한다]", "mbti": "NF", "effects": { "fighting": 20, "echo": 5 }, "reward": ["defense_up"], "flag": "[유리한 표시]", "seed": null }
      ]
    },
    {
      "id": "[소재]_hard_return",
      "kind": "callback",
      "slot": "C",
      "title": { "korean": "[짧은 제목]" },
      "summary": "[어려운 길에서 남긴 것이 돌아오는 장면 한 줄]",
      "bridge": "[..]",
      "people": ["[인물 id]"],
      "tags": ["[소재]"],
      "intensity": "calm",
      "callback": { "seed": "[어려운 길 기억]", "min_rooms_after": 2 },
      "choices": [
        { "path": "easy", "summary": "[행동 ~한다]", "mbti": "EP", "effects": { "community": -10 }, "reward": ["move_range_up"], "flag": "[유리한 표시 1]", "seed": null },
        { "path": "hard", "summary": "[행동 ~한다]", "mbti": "IJ", "effects": { "community": 20, "echo": 5 }, "event": "campsite", "flag": "[유리한 표시 2]", "seed": null }
      ]
    }
  ]
}`;

/** 1단계: 카드 16장의 뼈대. 대사 없음 */
export function buildSeqDesignPrompt(input: SeqInput): string {
	const c = ctxOf(input.scenario);
	return `당신은 선택형 내러티브 게임의 카드 설계자입니다.
아래 스토리 시나리오 1개에 들어갈 **카드 16장의 설계표**를 JSON 으로 만드세요.
이 단계에서는 대사를 쓰지 않습니다. 장면 요약, 선택지 요약, 수치·조건·기억·표시·이벤트만 정합니다.

${contextBlock(input)}

# 카드 16장 구성 (정확히 지킬 것)

| 칸 | 심기 \`plant\` | 일반 \`normal\` | 회수 \`callback\` |
| --- | --- | --- | --- |
| A | 1 | 2 | 0 |
| B | 1 | 2 | 0 |
| C | 0 | 3 | 2 (칸 A 심기 카드의 기억 2개) |
| D | 0 | 3 | 2 (칸 B 심기 카드의 기억 2개) |

- 칸마다 심기+일반 = 3장. 회수 카드는 기억이 있을 때만 나오는 추가 후보
- \`slot\`: "A"~"D". 카드 내용이 그 칸의 앞 방 끝·다음 방 시작 사이에 맞아야 함
- \`summary\`: "<인물 이름>이(가) <물건> 때문에 <원하는 것>" 형식. 그 카드 people 중 동행이 아닌 인물이 주어
- \`bridge\`: 어떻게 이어지는지 한 줄. "앞 방 끝: … / 카드: … / 다음 방 시작: … 와 이어지는 이유: …"

## 길 (path) — 성향 조합 대신 쓰는 기준
- \`easy\` 쉬운 길: 당장 이득 (버프, 골드 +50~150, 또는 event). 대가는 나중에 (회수 카드의 불리한 표시)
- \`hard\` 어려운 길: 지금 대가를 치름 (동행 호감도 하락, 약한 보상, 시간·몸 고생). 나중에 이득 (회수 카드의 유리한 표시)
- \`gold\` 골드를 쓰는 길 / \`lock\` MBTI 잠금 / \`stat\` 성향 조건
- 심기·일반 카드: easy 1개 + hard 1개를 반드시 둠 (둘 다 require 없음) + 나머지 0~2개

## 기억과 회수 카드
- 심기 카드 2장(칸 A, 칸 B)마다 기억 2개: easy 선택지 → 쉬운 길 기억, hard 선택지 → 어려운 길 기억. 기억 모두 4개
- gold·lock·stat 선택지도 둘 중 한 기억을 남겨도 됨 (같은 기억이면 결과에 같은 사람·물건이 남게)
- 회수 카드: 기억 1개당 1장. \`"callback": { "seed": "<기억>", "min_rooms_after": 2 }\`. 짝 심기 카드와 같은 \`tags\`, 같은 인물
  - 짝 심기 카드의 장면을 이어받으면서, 자기 칸의 앞 방 끝·다음 방 시작에도 맞게
  - 그 사이 스토리에서 인물이 떠났으면 다른 인물이 그 사람의 물건·소식을 들고 나와도 됨
- 회수 카드의 조건 없는 선택지 2개가 주는 표시 (헷갈리지 말 것):

| 회수하는 기억 | 조건 없는 선택지 2개의 표시 |
| --- | --- |
| 쉬운 길 기억 (심기 카드 easy 선택지의 seed) | bad 1개(\`boss_penalty\` -1 또는 -2, 보상은 \`*_down\` 디버프) + good 1개(\`boss_penalty\` 1) |
| 어려운 길 기억 (심기 카드 hard 선택지의 seed) | good 2개 (하나는 \`boss_penalty\` 2, 하나는 1). bad 없음 |

- 회수 카드: 선택지 2~3개, 모든 선택지에 flag. 골드를 쓰는 선택지를 하나 더 둘 수 있음 (유리한 표시)
- 심기 카드의 골드 선택지는 유리한 표시를 바로 줄 수 있음
- 표시 \`paid_network\` 는 코드가 자동으로 넣음. 설계표에 적지 않음

## leaning (Director 성향 점수)
- 심기 + 일반 12장에만 적음. 회수 카드에는 없음
- 값: 그 카드의 easy 선택지가 가장 크게 움직이는 축 방향 (예: easy 가 fighting -30 이면 "fighting-"). 코드가 easy 의 effects 로 다시 계산함
- 같은 칸 3장은 easy 방향이 서로 다르게 (6방향을 고루)

## 선택지 공통 규칙
- 심기·일반 카드: 선택지 3~4개. require 없는 선택지 2개 이상
- \`effects\` 를 비우지 않음 (빈 \`{}\` 금지). 골드 선택지는 gold 만 있어도 됨
- \`effects\` 의 축 값: easy·hard ±20 또는 ±30. require 가 있는 선택지는 ±10 이하
  - 부호: 위 "성향 3축" 기준. 예: 힘으로 빼앗기 = fighting 음수, 규칙 깨기 = reason 양수
- \`echo\`(동행 호감도): 동행이 싫어할 행동 -5~-15, 좋아할 행동 +5~+15. 필요한 선택지만
- 사용 가능한 수치: fighting, community, reason, echo, gold 만. **spread 쓰지 않음**
- **모든 선택지(강제 사건 포함)에 \`reward\`, \`effects.gold\`(0 아님), \`event\` 중 1개 이상 필수**
- \`reward\` 와 \`event\` 를 한 선택지에 함께 쓰지 않음
- \`seed\`: 모든 선택지에 적음. 없으면 \`null\`
- \`path\`: 모든 선택지에 적음
- \`summary\`: 선택지 행동 한 줄 ("~한다"). 누구에게 무엇을

## 골드
- 시작 300. 쓰는 선택지: \`"require": { "stat": "gold", "op": ">=", "value": <비용> }\` + \`effects.gold\` 음수 (50~150). 16장 중 5~7개
- 쓰는 선택지는 같은 카드의 무료 선택지보다 확실히 좋은 결과 (유리한 표시, 좋은 보상)
- 버는 선택지(+50~150)는 easy 선택지에. 16장 중 3~4개

## 성향 조건 선택지 (path stat)
- \`"require": { "stat": "<축>", "op": "<=" 또는 ">=", "value": -40 또는 40 }\`. 그쪽으로 이미 기운 플레이어만 보이는 더 센 선택지. 16장 중 1~2개

## MBTI (파티 히어로 4명)
- 모든 선택지(강제 사건 포함)에 \`"mbti"\`: 2글자 (E/I, S/N, T/F, J/P 중). 그 성격의 히어로 얼굴이 선택지 옆에 뜸
- 한 카드 안의 mbti 값은 모두 다르게 (강제 사건 포함)
- easy 와 hard 는 두 글자 모두 반대 (예: \`ST\` ↔ \`NF\`, \`EP\` ↔ \`IJ\`)
- 선택지 내용과 성격이 맞게: T 따지기·계산, F 공감·감정, S 눈앞의 물건·절차, N 짐작·숨은 뜻, J 계획·규칙, P 즉흥·임기응변, E 나서기·말 걸기, I 혼자·조용히
- MBTI 잠금 선택지(path lock): \`"require": { "mbti": "XX" }\` + 같은 글자의 \`"mbti": "XX"\`. 심기·일반 카드 중 3~6장에 1개씩 (가능하면 4장). 회수 카드에는 없음
  - 그 히어로가 직접 하는 행동 (다음 단계에서 \`{actor}\` 로 씀)
  - 시작 파티는 ISTJ, ENFP, INTP, ESFJ. 잠금 글자 중 시작 파티로 안 열리는 것은 \`SP\` 1개만. 나머지는 열리는 조합(예: \`TJ\`, \`NF\`, \`NT\`, \`SF\`, \`EF\`, \`IT\`)

## 강제 사건 (forced) — 일반 카드 1장에만
- 카드에 \`"forced": [ { ... } ]\` 1개. 선택지와 같은 형식 + \`"require": { "mbti": "XX" }\` + \`"chance": 0.3\` + \`"path": "forced"\`
- XX 는 시작 파티로 열리는 2글자 (예: \`EP\`, \`TJ\`, \`EN\`, \`FP\`)
- 그 성격의 히어로가 말릴 틈 없이 먼저 저지르는 일. 이 카드는 intensity high, 일반 선택지 3~4개도 그대로 둠

## 이벤트 (\`event\`) — 8~14개 (가능하면 10개)
- 종류 5개 모두 1~4개씩 (가능하면 2개씩): \`campsite\`(쉬기), \`meet_stranger\`(낯선 사람), \`minigame_slot\`(운·도박), \`minigame_timing\`(박자·타이밍), \`minigame_cup\`(속임수·컵 고르기)
- 카드 1장에 1개까지. 같은 종류는 서로 다른 카드에. 장면과 맞는 선택지에만

## 보상 종류 (\`reward\`, 배열, 보통 1개)
- 버프: \`attack_up\`(싸움·기세), \`defense_up\`·\`shield\`(지키기·동료 신뢰), \`intelligence_up\`(정보·기록·암호), \`move_range_up\`(길·열쇠·우회로), \`stun\`(기습·경비 정보·화면 끄기), \`heal\`(치료·쉬기), \`cooldown_reset\`(시간 벌기·정신 차리기), \`bleed\`(큰 싸움, 거의 안 씀)
- 디버프: \`attack_down\`, \`defense_down\`, \`intelligence_down\`, \`hp_down\`, \`move_range_down\` (외면·회피·노출·관계 악화)
- 한 종류에 몰리지 않게 고루

## Director 항목
- \`tags\`: 영어 소문자 1개. 같은 소재 카드끼리 같은 값 (심기 카드 ↔ 회수 카드)
- \`intensity\`: \`calm\` 또는 \`high\` (싸움·추격·군중·위협이면 high). 심기 카드는 calm
- \`urgency\` 는 쓰지 않음 (칸이 고정이라 필요 없음)

## 인물
- 카드에 나오는 사람: 동행 \`${c.companion}\` + 원문에 나온 인물 + 새 인물. 주인공·최종 보스는 카드에 나오지 않음. 일반 보스는 "일반 보스 카드" 1장에만
- 새 인물 id: 영어 소문자 (예: \`janitor\`). 시나리오 안에서 6~9명. 한 인물이 여러 카드에 나와도 됨
- \`actors\` 에 새 인물만: \`name\`(한국어 이름 또는 호칭), \`role\`(이 시나리오에서 맡은 일 한 줄)
- 카드의 \`people\`: 그 카드에 말하는 인물 id (동행 포함)

## 이름 규칙
- 카드 id: 영어 소문자_밑줄 (소재 낱말. 번호 금지, 앞의 \`${c.prefix}\` 는 코드가 붙임). 회수 카드는 \`_return\` 으로 끝
- 기억·표시 이름: 영어 소문자_밑줄, 2~3단어

${STYLE}

# 예시 (틀만. [..] 는 이 시나리오 내용으로 채움. 실제 출력은 카드 16장)
${DESIGN_EXAMPLE}

# 출력
JSON 하나만 출력. 설명·마크다운 금지. \`{ "actors", "seeds", "flags", "cards" }\`
- 카드 순서: 칸 A → B → C → D. 칸 안에서는 심기 → 일반 → 회수

# 마지막 확인
- [ ] 칸마다 심기+일반 3장 (A·B 는 심기 1장 포함), 회수 카드 C 2장(A 심기의 기억) · D 2장(B 심기의 기억)
- [ ] ${c.isFinal ? '일반 보스·최종 보스가 나오는 카드 없음' : '칸 D 일반 카드 중 정확히 1장이 일반 보스 카드 (people 에 random_boss)'}
- [ ] 카드마다 bridge 가 있고, 다음 방 첫 대사가 그대로 말이 됨
- [ ] 같은 칸 3장의 easy 방향(축·부호)이 서로 다름
- [ ] 심기·일반 카드마다 easy 1 + hard 1, mbti 두 글자 반대
- [ ] 이벤트 8~14개, 5종 모두 1~4개, 카드당 1개까지
- [ ] 모든 선택지에 reward / gold / event 중 하나, reward 와 event 동시 사용 없음, seed·path 키 있음, mbti 2글자, effects 가 비어 있지 않음
- [ ] 기억 4개 모두 회수 카드 1장씩, 카드가 쓰는 모든 seed·flag 가 seeds·flags 에 있음`;
}

const AXES3 = ['fighting', 'community', 'reason'];

/** 검사 전에 고칠 수 있는 형식 실수를 고침
 * - choices 안에 들어간 강제 사건(path forced) → forced 로 옮김
 * - 심기·일반 카드의 leaning = easy 선택지에서 가장 크게 움직이는 축 방향 (프롬프트 규칙과 같은 기준, 코드가 정함)
 * - 한 선택지에 reward 와 event 가 같이 있으면 reward 를 뺌 (webfront 엔진도 event 만 적용) */
export function normalizeDesign(design: CardDesign): void {
	for (const c of design.cards ?? []) {
		const moved = (c.choices ?? []).filter((ch) => ch.path === 'forced');
		if (moved.length) {
			c.choices = c.choices.filter((ch) => ch.path !== 'forced');
			c.forced = [...(c.forced ?? []), ...moved];
		}
		for (const ch of [...(c.choices ?? []), ...(c.forced ?? [])]) if (ch.event && ch.reward) delete ch.reward;
		const fx = (c.choices ?? []).find((ch) => ch.path === 'easy')?.effects ?? {};
		const axis = AXES3.filter((a) => fx[a]).sort((a, b) => Math.abs(fx[b]) - Math.abs(fx[a]))[0];
		if (c.kind !== 'callback' && axis) c.leaning = `${axis}${fx[axis] > 0 ? '+' : '-'}`;
	}
}

/** 설계표 마무리: slot → after_story / before_story (webfront 형식), 카드 id 앞에 card_0N_ */
export function finalizeDesign(design: CardDesign, s: CardScenario): void {
	const slots = slotsOf(s);
	const prefix = ctxOf(s).prefix;
	for (const card of design.cards) {
		card.id = prefix + String(card.id).replace(/^card_(\d+_)?/, '');
		const g = slots.find((x) => x.key === card.slot);
		if (!g) continue;
		card.after_story = g.after;
		card.before_story = g.before;
	}
}

// ── 2단계: 대사 ─────────────────────────────────────────────

/** 2단계: 설계표의 카드 일부(ids)에 대사를 씀. written = 앞 묶음에서 이미 쓴 카드 글 */
export function buildSeqTextPrompt(input: SeqInput, design: CardDesign, ids: string[], written: unknown[] = []): string {
	const c = ctxOf(input.scenario);
	const target = design.cards.filter((x) => ids.includes(x.id));
	const writtenBlock = written.length
		? `# 앞 묶음에서 이미 쓴 카드 (문장·사건 반복 금지, 회수 카드는 짝 심기 카드의 장면을 이어받을 것)\n${JSON.stringify(written, null, 1)}`
		: '';

	return `당신은 선택형 내러티브 게임의 카드 작가입니다.
설계표가 이미 정해져 있습니다. 아래 **카드 ${target.length}장의 대사**만 쓰세요.
수치·조건·기억·표시·이벤트는 바꾸지 않습니다 (코드가 설계표 값을 그대로 씀).

${contextBlock(input)}

# 전체 설계표 (흐름 참고용)
${JSON.stringify(design, null, 1)}

${writtenBlock}

# 이번에 쓸 카드
${target.map((x) => `- ${x.id} (${x.kind}, 카드 ${x.slot}) ${x.title?.korean ?? ''}: ${x.summary ?? ''} / 연결: ${x.bridge ?? ''}`).join('\n')}

# 쓰는 법
- 카드마다 \`dialogue\` 2~3줄: 장면 소개. 설계표의 \`summary\`·\`people\`·\`bridge\` 대로. 선택이 필요한 상황으로 끝낼 것
  - 첫 줄은 그 칸 앞 방의 마지막 장면에서 이어짐 (같은 장소에서 조금 뒤, 또는 거기서 움직이는 길). "칸별 앞뒤 장면" 참고
- \`choices\`: 설계표의 선택지와 **같은 순서, 같은 개수**. 선택지마다
  - \`text\`: 설계표 \`summary\` 를 다듬은 한 문장, "~한다" 로 끝. 행동이 보이게 (누구에게, 무엇을)
  - \`result\`: 1~3줄. 선택의 대가가 바로 보이게: 누가 무엇을 했고 무엇이 남았는지
    - 결과가 다음 방 첫 장면과 부딪히지 않게 (다음 방의 전제를 깨거나, 다음 방 일을 먼저 해결하지 않음)
    - 기억(seed)이 있는 선택지: 회수 카드에서 돌아올 사람·물건을 결과에 남길 것. 같은 기억을 남기는 선택지가 여럿이면 모두 같은 사람·물건
    - 표시(flag)가 있는 선택지: 보스 방에서 쓰일 것(문, 길, 소문, 얼굴 등)이 결과에 보이게
    - 수치가 오른 쪽이 결과에 드러나게 (예: echo -10 → 동행이 실망하는 한 마디)
  - \`event_intro\`: 설계표에 \`event\` 가 있는 선택지에만. 이벤트가 열릴 때 1~2줄
    - campsite 쉬기, meet_stranger 낯선 사람, minigame_slot 운·도박, minigame_timing 박자·타이밍, minigame_cup 속임수·컵 고르기를 이 장면에 맞게
    - 낯선 사람의 말은 narrator 줄에 따옴표로
  - MBTI 잠금 선택지(\`require.mbti\`)·강제 사건: \`text\`·\`result\` 에 \`{actor}\` 를 써서 그 히어로가 직접 하는 행동으로 ("{actor}이(가) …한다")
- \`forced\`: 설계표에 있는 카드만. 형식은 choices 와 같음
- 회수 카드: 짝 심기 카드에서 남긴 사람·물건이 다시 나옴. 그 기억이 무엇이었는지 플레이어가 바로 알아보게
  - 같은 기억을 남기는 심기 선택지가 여럿이면, 어느 선택지로 왔어도 말이 되게
- \`background_tags\`: 영어 소문자 5개. 카드 dialogue 장면의 장소·시간·조명·군중·분위기. 이름 있는 인물 금지
- \`speaker\`: \`narrator\`, \`${c.companion}\`(동행), 원문 인물 id, 설계표 \`actors\` 의 id${c.isFinal ? '' : ', \`random_boss\`(일반 보스 카드만)'} 만. 주인공의 행동은 narrator 로
- 동행 \`${c.companion}\` 의 말투는 원문 대사를 따름. 새 인물은 설계표 \`role\` 에 맞는 말투로 일관되게
- 한 줄 60자 이내 (넘으면 두 줄로 나눌 것)

${STYLE}

# 예시 (다른 시나리오. 형식만 참고하고 내용은 쓰지 말 것)
${withCompanion(TEXT_EXAMPLE, c.companion, c.companionName)}

# 출력
JSON 하나만 출력. 설명·마크다운 금지. \`{ "cards": [ ... ${target.length}장 ] }\`, 위 "이번에 쓸 카드" 순서대로`;
}

// ── 3단계: additions ────────────────────────────────────────

/** 3단계: 다 쓴 카드를 보고 additions (인물 말투·얼굴, 기억·표시 문구, 방 제목, LLM 줄) */
export function buildSeqAdditionsPrompt(input: SeqInput, design: CardDesign, cards: Record<string, any>[]): string {
	const s = input.scenario;
	const c = ctxOf(s);
	const portraitLines = input.portraits.map((p, i) => `${i + 1}. ${p.note}`).join('\n');
	const ids = s.rooms.map((r) => r.id);
	const lastRoom = ids.at(-1);

	return `당신은 선택형 내러티브 게임의 작가입니다.
카드 ${cards.length}장이 완성되었습니다. 이 카드들을 보고 시나리오의 **additions 파일**을 JSON 으로 만드세요.

${contextBlock(input)}

# 완성된 카드
${JSON.stringify(cards, null, 1)}

# 설계표의 인물·기억·표시
${JSON.stringify({ actors: design.actors, seeds: design.seeds, flags: design.flags }, null, 1)}

# additions 항목

## actors
- 동행 \`${c.companion}\`: \`name\`, \`style\` 만 (얼굴 없음)
- 설계표 \`actors\` 의 모든 인물: \`name\`, \`style\`(카드 대사에서 보이는 말투 한 줄. 예: "퉁명스러운 존댓말") + 얼굴 중 하나
  - 아래 얼굴 풀에서 역할이 맞는 번호 → \`"portrait_no": <번호>\`. 한 시나리오 안에서 한 번호는 한 인물만
  - 맞는 얼굴이 없으면 → \`"portrait_needed": { "korean": "<나이대> <성별> <역할>. <옷차림·소품>, <인상>" }\` (portrait_no 없이)
  - 기준: 이름 있는 인물, 풀의 역할과 하는 일이 분명히 다른 인물은 portrait_needed

### 얼굴 풀 (번호. 역할)
${portraitLines}

## seeds
- 설계표의 기억 전부: \`korean\`(무엇을 했는지 한 줄, "~함"으로 끝. 카드 결과와 맞게), \`english\`

## flags
- 설계표의 표시 전부:
  - \`label.korean\`: 짧은 이름
  - 유리한 표시(good): \`boss_choice.korean\` = 보스 방에서 고를 행동 한 문장 ("~한다"), \`boss_penalty\` 설계표 값
  - 불리한 표시(bad): \`boss_line.korean\` = 보스 방에서 생기는 불리한 일 1~2문장, \`boss_penalty\` 설계표 값
- \`paid_network\` 는 넣지 않음 (코드가 자동으로 넣음)

## rooms
- 스토리 방 ${ids.join(', ')} 모두 \`title\`(짧은 방 제목)
- 그중 4개 방에 LLM 줄 1개씩: 기억·표시·호감도에 반응하는 한 줄
  - 스토리 ${ids[1]}: 칸 A 심기 카드의 기억 조건 \`{ "seed": "<기억>" }\`
  - 스토리 ${ids[2]}: 칸 B 심기 카드의 기억 조건 \`{ "seed": "<기억>" }\`
  - 스토리 ${ids[3]}: 동행 호감도 조건 \`{ "stat": "echo", "op": ">=", "value": 60 }\`
  - 스토리 ${lastRoom}: 불리한 표시 조건 \`{ "flag": "<표시>" }\`, 화자 \`${c.bossSpeaker}\`
  - rooms 의 키는 스토리 id 그대로 (${ids.join(', ')})
  - 회수 카드에서만 밝혀지는 사실은 LLM 줄에서 미리 말하지 않음. 기억 조건 줄은 심기 카드 결과에 나온 것만 언급
  - \`after_line\` = 위 원문 줄 번호 (그 줄 뒤에 들어감). 앞뒤 대사와 자연스럽게 이어지는 자리
  - 화자: \`character_any\`(주인공), \`${c.companion}\`, \`${c.bossSpeaker}\`(마지막 방만)
  - \`intent\`(무엇을 말하는지), \`example\`(그대로 써도 되는 예시 대사), \`emotion\`(base/happy/sad/angry)
  - 줄 형식: \`{ "after_line": N, "line": { "type": "speech", "speaker", "if", "source": "llm", "intent", "example": { "korean" }, "emotion" } }\`

${STYLE}

# 예시 (다른 시나리오. 형식만 참고하고 내용은 쓰지 말 것)
${withCompanion(EXAMPLE_ADDITIONS, c.companion, c.companionName)}

# 출력
JSON 하나만 출력. 설명·마크다운 금지. \`{ "scenario_id": "${s.scenario_id}", "actors", "seeds", "flags", "rooms" }\``;
}

// ── 읽기용 ─────────────────────────────────────────────────

/** 스토리 방 사이에 칸별 후보 카드를 끼워 넣은 읽기용 md (연결 확인용) */
export function seqCardsMarkdown(s: CardScenario, cards: Record<string, any>[], design: CardDesign): string {
	const name = (id: string) =>
		id === 'narrator' ? '나레이션' : (design.actors[id]?.name.korean ?? s.actors[id]?.name.korean ?? id);
	const lines = (list: Line[] = []) =>
		list.filter((l) => l.type !== 'direction').map((l) => `- **${name(l.speaker ?? '')}**: ${l.content?.korean ?? ''}`);
	const slots = slotsOf(s);
	const out: string[] = [`## ${s.scenario_id} 카드 (칸별 후보)`];
	for (const r of s.rooms) {
		out.push('', `### 방 ${r.id}`, ...lines(r.dialogue));
		const g = slots.find((x) => x.after === r.id);
		if (!g) continue;
		for (const card of cards.filter((x) => x.after_story === g.after && x.before_story === g.before)) {
			const d = design.cards.find((x) => x.id === card.id)!;
			out.push('', `#### 카드 ${g.key} · ${card.title?.korean ?? ''} \`${card.id}\` (${d.kind}${card.callback ? `, 기억 ${card.callback.seed}` : ''})`);
			out.push(`> 연결: ${d.bridge ?? ''}`, ...lines(card.dialogue));
			card.choices.forEach((ch: any, i: number) => {
				const tag = [ch.seed && `기억 ${ch.seed}`, ch.flag && `표시 ${ch.flag}`].filter(Boolean).join(', ');
				out.push(`${i + 1}. ${ch.text?.korean ?? ''}${tag ? ` _(${tag})_` : ''}`);
				out.push(...lines(ch.result).map((t) => `   ${t}`));
			});
		}
	}
	return out.join('\n') + '\n';
}
