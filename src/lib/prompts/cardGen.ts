// 성향 변주 시나리오 1개 → 카드 14장 + additions 1개 생성 프롬프트. 3단계로 나눠 호출
// 1. buildCardDesignPrompt: 14장 설계표 (수치·조건·기억·표시·이벤트·인물, 대사 없음)
// 2. buildCardTextPrompt: 설계표대로 대사. textBatches 묶음마다 1번 (심기+회수 / 일반) → assembleCards
// 3. buildAdditionsPrompt: 완성 카드를 보고 additions → toWebfrontAdditions
// 출력은 webfront 의 data/cards/<묶음>/<축>/<축>_<번호>/card_*.json, data/additions/<묶음>/<축>/<축>_<번호>.json 형식.
// 규칙 출처: project-mj-webfront src/routes/(app)/test/adventure/CLAUDE.md
import { AXES, type AxisCombo, type AxisKey } from './axisVariantGen';

type Lang = { korean: string; [k: string]: string };
export type Line = { type?: string; speaker?: string; emotion?: string; content?: Lang | null };
type Room = { id: number; dialogue: Line[]; win_dialogue?: Line[]; lose_dialogue?: Line[] };
export type CardScenario = {
	scenario_id: string;
	order: number;
	actors: Record<string, { name: Lang }>;
	boss?: { pool_id: string; role?: Lang };
	prologue?: { korean: string[] };
	rooms: Room[];
};
/** 얼굴 풀 항목 (webfront data/portraits/<묶음>.json 과 같은 형식) */
export type Portrait = { note: string; base_image_url: string; base_image_nobg_url: string };

export type CardSetInput = {
	scenario: CardScenario;
	combo: AxisCombo;
	genre?: string;
	variantNote?: string;
	/** 같은 변주의 앞 시나리오에서 이미 쓴 카드 제목·인물 (겹치지 않게) */
	previous?: { scenario_id: string; titles: string[]; actors: string[] }[];
	portraits: Portrait[];
};

const AXIS_ORDER: AxisKey[] = ['fighting', 'community', 'reason'];

/** 조합 코드 → 축마다 변주 성향 쪽 방향. 예: FIE → fighting-, community-, reason+ */
function sideOf(combo: AxisCombo) {
	return AXIS_ORDER.map((k, i) => {
		const neg = AXES[k].neg.code === combo[i];
		const pole = neg ? AXES[k].neg : AXES[k].pos;
		const other = neg ? AXES[k].pos : AXES[k].neg;
		return { axis: k, sign: neg ? '-' : '+', pole, other };
	});
}

/** 스토리 방 대사에 줄 번호를 붙임. additions 의 after_line 기준 (direction 줄도 셈) */
export function numberedRooms(s: CardScenario): string {
	const out: string[] = [];
	const lines = (list: Line[]) =>
		list.map((l, i) =>
			l.type === 'direction'
				? `  ${i + 1}. (등장 연출: ${l.speaker})`
				: `  ${i + 1}. ${l.speaker}(${l.emotion ?? 'base'}): ${l.content?.korean ?? ''}`
		);
	if (s.prologue) out.push('[prologue]', ...s.prologue.korean.map((t) => `  ${t}`));
	for (const r of s.rooms) {
		out.push(`[방 ${r.id} dialogue]`, ...lines(r.dialogue));
		if (r.win_dialogue) out.push(`[방 ${r.id} win_dialogue]`, ...lines(r.win_dialogue));
		if (r.lose_dialogue) out.push(`[방 ${r.id} lose_dialogue]`, ...lines(r.lose_dialogue));
	}
	return out.join('\n');
}

export const EXAMPLE_ADDITIONS = `{
  "scenario_id": "modern_whisperweb_0_FIE_01",
  "actors": {
    "echo": { "name": { "korean": "에코" }, "style": { "korean": "날 서 있고 걱정이 섞인 짧은 반말" } },
    "taxi": { "name": { "korean": "택시 기사" }, "style": { "korean": "퉁명스러운 존댓말" }, "portrait_no": 56 },
    "printer": { "name": { "korean": "인쇄소 노인" }, "style": { "korean": "느릿한 반말" }, "portrait_needed": { "korean": "70대 남성 인쇄소 주인. 잉크 묻은 앞치마, 돋보기, 무뚝뚝한 인상" } }
  },
  "seeds": {
    "pulled_dashcam": { "korean": "택시 기사를 밀어내고 블랙박스 카드를 뽑음", "english": "Pushed the taxi driver aside and pulled the dashcam card" },
    "asked_driver": { "korean": "택시 기사에게 부탁해 영상을 같이 봄", "english": "Asked the taxi driver to watch the video together" }
  },
  "flags": {
    "face_known": {
      "label": { "korean": "퍼진 내 얼굴" },
      "boss_line": { "korean": "블랙박스 카드를 뽑던 주인공의 얼굴이 서버실 경비 화면에도 걸려 있다. 문 앞부터 막혔다." },
      "boss_penalty": -1
    },
    "night_route": {
      "label": { "korean": "뒤쪽 주차장 문" },
      "boss_choice": { "korean": "택시 기사가 말한 뒤쪽 주차장 문으로 들어간다" },
      "boss_penalty": 1
    }
  },
  "rooms": {
    "1": { "title": { "korean": "깨진 간판 앞" } },
    "3": {
      "title": { "korean": "깨진 영상 조각" },
      "dialogue": [
        {
          "after_line": 5,
          "line": {
            "type": "speech",
            "speaker": "character_any",
            "if": { "seed": "pulled_dashcam" },
            "source": "llm",
            "intent": "택시 블랙박스 카드에서 본 숫자와 같다는 것을 알아차림",
            "example": { "korean": "…택시 블랙박스에서 뽑은 카드에도 이 숫자가 있었어." },
            "emotion": "base"
          }
        }
      ]
    }
  }
}`;

// ── 공통 맥락 ───────────────────────────────────────────────

/** 예시(다른 시나리오)의 동행 id "echo" 를 이 시나리오의 동행 id 로 바꿈. 호감도 수치 echo 와 헷갈리지 않게 */
export function withCompanion(example: string, companion: string, name: string): string {
	return example
		.replaceAll('"speaker": "echo"', `"speaker": "${companion}"`)
		.replace(
			'"echo": { "name": { "korean": "에코" }',
			`"${companion}": { "name": { "korean": "${name}" }`
		);
}

function ctxOf(input: CardSetInput) {
	const { scenario: s, combo } = input;
	const companion = Object.keys(s.actors)[0];
	const isFinal = !!s.boss?.pool_id && s.boss.pool_id !== 'random_boss';
	return {
		companion,
		companionName: s.actors[companion]?.name.korean ?? companion,
		bossSpeaker: isFinal ? 'boss' : 'random_boss',
		isFinal,
		prefix: `card_${combo.toLowerCase()}${s.order === 1 ? '' : s.order}_`
	};
}

/** 3단계 모두 앞에 붙는 게임 구조·시나리오·원문 */
function contextBlock(input: CardSetInput): string {
	const { scenario: s, combo, genre, variantNote, previous = [] } = input;
	const c = ctxOf(input);
	const sideLines = sideOf(combo)
		.map(
			(x) =>
				`- \`${x.axis}${x.sign}\` = ${x.pole.name} (${x.pole.desc}) ↔ 반대쪽 \`${x.axis}${x.sign === '-' ? '+' : '-'}\` = ${x.other.name}`
		)
		.join('\n');
	const prevLines = previous.length
		? previous
				.map((p) => `- ${p.scenario_id}: 카드 ${p.titles.join(', ')} / 인물 ${p.actors.join(', ')}`)
				.join('\n')
		: '- 없음 (이 변주의 첫 시나리오)';

	return `# 게임 구조 (먼저 이해할 것)
- 한 판 = 방 10개. 스토리 방 5개(id 1, 3, 5, 9, 15)는 아래 원문 그대로 나오고, 그 사이 카드 방 4개 + 이벤트 방 1개
- 방 배치 (스토리 id 와 방 위치는 다름):

| 방 위치 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 내용 | 스토리 1 | 카드 A | 스토리 3 | 카드 B | 스토리 5 | 카드 C | 스토리 9 | 카드 D | 이벤트 | 스토리 15 (보스) |

- 카드 칸 4개와 플레이어가 그때까지 본 스토리:
  - 카드 A: 스토리 1 직후 (스토리 3 전)
  - 카드 B: 스토리 3 직후 (스토리 5 전)
  - 카드 C: 스토리 5 직후 (스토리 9 전)
  - 카드 D: 스토리 9 직후 (이벤트 방 → 보스 방 전)
- 카드는 \`after_story\` ~ \`before_story\` 사이의 칸에만 나옴. 예: after_story 3, before_story 9 → 카드 B 또는 C
- 카드 방: 게임 코드(Director)가 후보 카드 중 1장을 골라 보여 줌. 플레이어가 선택지 1개를 고르면 수치가 바뀌고 기억(seed)이 남음
- 기억(seed)을 남긴 카드는 나중에 회수 카드(callback)로 돌아옴. 회수 카드의 선택이 표시(flag)를 줌
- 표시(flag)는 마지막 보스 방에서 유리한 선택지 또는 불리한 사건이 됨
- 한 판에 14장 중 4장 정도만 보임. 그래서 카드마다 혼자 읽어도 말이 되어야 함
- 카드 대사는 사람이 쓴 고정 대사. 스토리 방 안에 LLM 이 채우는 한 줄 자리(additions 의 rooms)만 따로 있음

# 이 시나리오
- scenario_id: ${s.scenario_id} (시리즈 ${s.order}/5번째${c.isFinal ? ', 최종 보스 시나리오' : ''})
- 장르: ${genre ?? '없음'}
- 변주 방향: ${variantNote ?? '없음'}
- 동행 인물: \`${c.companion}\` (${c.companionName}). 동행 호감도 수치 이름은 항상 \`echo\` (인물 id 와 다름. effects 에는 \`echo\`, 대사 speaker 에는 \`${c.companion}\`)
- 보스 화자: \`${c.bossSpeaker}\` — 카드에는 보스가 나오지 않음. additions 의 마지막 방 LLM 줄에서만 사용

## 성향 3축 (값 -100~+100)
- fighting: 투쟁(-) ↔ 협력(+) / community: 개인(-) ↔ 공동체(+) / reason: 질서(-) ↔ 자유(+)
- 이 변주(${combo})의 성향 쪽:
${sideLines}

## 스토리 원문 (줄 번호 = additions 의 after_line 기준. 등장 연출 줄도 셈)
${numberedRooms(s)}

## 앞 시나리오에서 이미 쓴 것 (제목·사건·인물 겹치지 말 것)
${prevLines}`;
}

export const STYLE = `# 문체
- 사람·장소·물건·사건은 이 스토리 원문에서 출발. 원문에 없는 큰 설정(새 조직·초능력) 금지. 작은 사항(시간·숫자·물건)은 추가 가능
- 장르의 분위기로. 단 비유 금지: "그림자", "심연", "집어삼키다", "광기" 대신 실제 물건·장소·숫자
  - 원문에 실제로 나오는 물건·현상은 그 단어 그대로 써도 됨 (예: 원문의 "겹쳐진 그림자")
- narrator 는 눈에 보이는 일만. 감정·의미 해석 금지
- 같은 사건·같은 선택지 문장 반복 금지. 앞 시나리오 카드와 제목·사건 겹치지 말 것`;

// ── 1단계: 설계 ─────────────────────────────────────────────

const DESIGN_EXAMPLE = `{
  "actors": {
    "taxi": { "name": { "korean": "택시 기사" }, "role": "간판 앞을 밤마다 지나는 택시 기사. 블랙박스에 간판 영상이 있음" }
  },
  "seeds": {
    "pulled_dashcam": "택시 기사를 밀어내고 블랙박스 카드를 뽑음",
    "asked_driver": "택시 기사에게 부탁해 영상을 같이 봄"
  },
  "flags": {
    "face_known": { "kind": "bad", "boss_penalty": -1, "summary": "카드를 뽑던 얼굴이 퍼져 보스 방 경비에게 막힘" },
    "night_route": { "kind": "good", "boss_penalty": 1, "summary": "기사가 알려 준 뒤쪽 주차장 문으로 들어감" }
  },
  "cards": [
    {
      "id": "card_fie_taxi_cam",
      "kind": "plant",
      "title": { "korean": "택시 블랙박스" },
      "summary": "간판 영상이 찍힌 택시 블랙박스. 기사는 회사 장비라 못 준다고 함",
      "people": ["taxi"],
      "after_story": 1,
      "before_story": 9,
      "reason": "깨진 간판 = 스토리 1 첫 등장 → after 1 / 스토리 9에서 거리를 떠남 → before 9",
      "tags": ["taxi"],
      "intensity": "calm",
      "leaning": "fighting-",
      "choices": [
        { "summary": "기사를 밀어내고 카드를 뽑는다", "mbti": "ST", "effects": { "fighting": -30, "echo": -5 }, "event": "minigame_timing", "seed": "pulled_dashcam" },
        { "summary": "기사에게 사정을 말하고 같이 보자고 부탁한다", "mbti": "NF", "effects": { "fighting": 20, "echo": 5 }, "reward": ["shield"], "seed": "asked_driver" },
        { "summary": "카드를 뽑고 다른 손님 영상까지 판다", "mbti": "TP", "require": { "stat": "fighting", "op": "<=", "value": -40 }, "effects": { "fighting": -10, "gold": 80 }, "seed": "pulled_dashcam" },
        { "summary": "돈을 주고 원본 카드를 산다", "mbti": "SJ", "require": { "stat": "gold", "op": ">=", "value": 100 }, "effects": { "gold": -100, "fighting": 10, "echo": 5 }, "reward": ["intelligence_up"], "seed": "asked_driver" }
      ]
    },
    {
      "id": "card_fie_dashcam_return",
      "kind": "callback",
      "title": { "korean": "간판에 뜬 승차 기록" },
      "summary": "사거리 전광판에 카드를 뽑던 장면이 뜸. 기사가 신고함",
      "people": ["taxi"],
      "after_story": 5,
      "before_story": 15,
      "reason": "기억의 결과 → after 5 / 끝까지 맞음 → before 15",
      "tags": ["taxi"],
      "intensity": "high",
      "callback": { "seed": "pulled_dashcam", "min_rooms_after": 2 },
      "choices": [
        { "summary": "모자를 눌러쓰고 그대로 지나간다", "mbti": "ST", "effects": { "reason": 10 }, "reward": ["defense_down"], "flag": "face_known", "seed": null },
        { "summary": "기사를 찾아가 사과하고 카드를 돌려준다", "mbti": "NF", "effects": { "fighting": 20, "echo": 5 }, "reward": ["defense_up"], "flag": "night_route", "seed": null }
      ]
    }
  ]
}`;

/** 1단계: 카드 14장의 뼈대 (수치·조건·기억·표시·이벤트·인물). 대사 없음 */
export function buildCardDesignPrompt(input: CardSetInput): string {
	const c = ctxOf(input);
	return `당신은 선택형 내러티브 게임의 카드 설계자입니다.
아래 스토리 시나리오 1개에 들어갈 **카드 14장의 설계표**를 JSON 으로 만드세요.
이 단계에서는 대사를 쓰지 않습니다. 장면 요약, 선택지 요약, 수치·조건·기억·표시·이벤트만 정합니다. 대사는 다음 단계에서 이 설계표대로 씁니다.

${contextBlock(input)}

# 카드 14장 구성 (정확히 지킬 것)

| 종류(kind) | 장수 | 나오는 칸 | 특징 |
| --- | --- | --- | --- |
| 심기 카드 \`plant\` | 3 | A~C 안 (after_story 1, before_story 5 또는 9) | 기억(seed)을 남기는 선택지가 있음. intensity calm |
| 일반 카드 \`normal\` | 6 | 내용에 맞는 칸 | 기억 없음 (모든 선택지 seed null) |
| 회수 카드 \`callback\` | 5 | C~D 안 (after_story 5 또는 9, before_story 9 또는 15) | callback 있음. 모든 선택지에 flag |

- 기억 5개: 성향 쪽 기억 3개(심기 카드마다 1개) + 반대쪽 기억 2개(심기 카드 2장에 1개씩)
- 같은 기억을 같은 방향의 조건부 선택지(require)에 한 번 더 붙여도 됨
- 회수 카드: 기억 1개당 1장. \`"callback": { "seed": "<기억>", "min_rooms_after": 2 }\`. 심기 카드와 같은 \`tags\`, 같은 인물
  - 심기 카드의 인물이 그 사이 스토리에서 사라지거나 떠났으면, 다른 인물이 그 사람의 물건·소식을 들고 나와도 됨
- 같은 기억을 남기는 선택지가 2개 이상이면: 결과에 같은 사람·물건이 남게 설계하고, 회수 카드는 어느 선택지로 왔어도 말이 되게
- 기억이 1개뿐인 심기 카드: 반대쪽 선택지는 \`seed: null\` + 보상 또는 이벤트

## after_story / before_story 는 내용으로 정함
- \`after_story\`: 카드가 쓰는 사람·물건·장소·사실이 처음 나오는 스토리. 플레이어가 그 스토리를 봐야 이해되는 카드는 그 뒤로
  - prologue 에서 처음 나오는 것 → after_story 1
  - 예: 스토리 5에서 처음 나오는 물건을 쓰는 카드 → after_story 5 (카드 C 이후)
  - 스토리 1에서 이미 나온 것만 쓰는 카드 → after_story 1
- \`before_story\`: 카드 상황이 더 이상 맞지 않게 되는 스토리. 그 스토리에서 장소를 떠나거나, 숨겨진 사실이 밝혀지거나, 인물이 사라지면 그 스토리 id
  - 예: 스토리 9에서 대기실을 떠나 시험장으로 감 → 대기실 안 카드는 before_story 9
  - 끝까지 맞는 카드 → before_story 15
- \`reason\` 에 근거를 적음. 예: "명찰 = 스토리 5 첫 등장 → after 5 / 스토리 9에서 대기실을 떠남 → before 9"
- 회수 카드: 기억의 결과가 돌아오는 장면이라 심기 카드보다 2칸 이상 뒤 (after_story 5 이상)
  - 회수 카드의 before_story 도 내용으로: 장소·인물이 스토리 9 이후 맞지 않으면 before_story 9 (카드 C 에만 나옴), 끝까지 맞으면 15
- 칸마다 나올 수 있는 카드 수 (회수 카드 제외, 심기 + 일반 9장 기준): 카드 A 4장 이상, 카드 B 4장 이상, 카드 C 3장 이상, 카드 D 2장 이상
  - 내용상 뒤쪽 카드만 많으면 앞 칸이 비어서 같은 카드만 반복됨. 스토리 1·3의 사람·물건으로 출발하는 카드를 충분히 둘 것

## leaning (Director 성향 점수)
- 심기 카드 + 일반 카드 = 9장에만 적음. 회수 카드에는 없음
- 성향 쪽 6장(축마다 2장) + 반대쪽 3장(축마다 1장)
- 심기 카드 3장의 leaning: 축이 서로 다르게. 2장은 성향 쪽, 1장은 반대쪽

## 선택지 공통 규칙
- 심기·일반 카드: 선택지 3~4개. 회수 카드: 2~3개 (골드를 쓰는 선택지를 넣으면 3개: 조건 없는 2개 + 골드 1개)
- require 없는 선택지 2개 이상 (반대쪽으로 고를 길을 남김)
- 심기·일반 카드: 성향 쪽 선택지 1개 + 반대쪽 선택지 1개를 반드시 함께 둠
  - 성향 쪽: 당장 이득 (\`attack_up\` 같은 버프, 골드 +50~150) / 심기 카드에서는 성향 쪽 기억 → 회수 때 불리한 표시
  - 반대쪽: 비용(호감도 하락, 약한 보상. 골드 소모는 require 가 붙으므로 따로 골드 선택지로) / 심기 카드에서는 반대쪽 기억 → 회수 때 유리한 표시
  - 성향 쪽 선택지에 event 를 붙이면 그 이벤트가 이득 역할
- \`effects\` 를 비우지 않음 (빈 \`{}\` 금지). 골드 선택지는 gold 만 있어도 됨
- \`effects\` 의 축 값: 주 선택지 ±20 또는 ±30. require 가 있는 선택지는 같은 방향 ±10 이하
  - 부호: 위 "성향 3축" 기준. 예: 힘으로 빼앗기 = fighting 음수, 규칙 깨기 = reason 양수
- \`echo\`(동행 호감도): 동행이 싫어할 행동 -5~-15, 좋아할 행동 +5~+15. 필요한 선택지만
- 사용 가능한 수치: fighting, community, reason, echo, gold 만. **spread 쓰지 않음**
- **모든 선택지(강제 사건 포함)에 \`reward\`, \`effects.gold\`(0 아님), \`event\` 중 1개 이상 필수**
- \`reward\` 와 \`event\` 를 한 선택지에 함께 쓰지 않음
- \`seed\`: 모든 선택지에 적음. 없으면 \`null\`
- \`summary\`: 선택지 행동 한 줄 ("~한다"). 누구에게 무엇을

## 골드
- 시작 300. 골드를 쓰는 선택지: \`"require": { "stat": "gold", "op": ">=", "value": <비용> }\` + \`effects.gold\` 음수 (50~150)
- 쓰는 선택지는 같은 카드의 무료 선택지보다 확실히 좋은 결과 (유리한 표시, 좋은 보상, 회수 카드 연결)
- 버는 선택지(+50~150)는 성향 쪽 선택지에. 14장 중 3~4개
- 골드를 쓰는 선택지: 14장 중 5~7개

## 성향 조건 선택지
- \`"require": { "stat": "<축>", "op": "<=" 또는 ">=", "value": -40 또는 40 }\`
- 성향 쪽으로 이미 기운 플레이어만 보이는 더 센 선택지. 14장 중 1~2개

## MBTI (파티 히어로 4명)
- 모든 선택지(강제 사건 포함)에 \`"mbti"\`: 2글자 (E/I, S/N, T/F, J/P 중). 그 성격의 히어로 얼굴이 선택지 옆에 뜸
- 한 카드 안의 mbti 값은 모두 다르게 (강제 사건 포함)
- 성향 쪽 선택지와 반대쪽 선택지는 두 글자 모두 반대 (예: \`ST\` ↔ \`NF\`, \`EP\` ↔ \`IJ\`). 나머지 선택지는 다른 축 조합도 됨 (예: \`TP\`, \`SJ\`)
- 선택지 내용과 성격이 맞게: T 따지기·계산, F 공감·감정, S 눈앞의 물건·절차, N 짐작·숨은 뜻, J 계획·규칙, P 즉흥·임기응변, E 나서기·말 걸기, I 혼자·조용히
- MBTI 잠금 선택지: \`"require": { "mbti": "XX" }\` + 같은 글자의 \`"mbti": "XX"\`. 심기·일반 카드 중 4~5장에 1개씩. 회수 카드에는 없음
  - 그 히어로가 직접 하는 행동 (다음 단계에서 \`{actor}\` 로 씀)
  - 시작 파티는 ISTJ, ENFP, INTP, ESFJ. 잠금(require) 글자 중 시작 파티로 안 열리는 것은 \`SP\` 1개만. 나머지는 열리는 조합(예: \`TJ\`, \`NF\`, \`NT\`, \`SF\`, \`EF\`, \`IT\`)
  - 잠금 없는 선택지의 표시용 mbti 는 \`SP\` 써도 됨

## 강제 사건 (forced) — 일반 카드 1장에만
- 카드에 \`"forced": [ { ... } ]\` 1개. 선택지와 같은 형식 + \`"require": { "mbti": "XX" }\` + \`"chance": 0.3\`
- XX 는 시작 파티로 열리는 2글자 (예: \`EP\`, \`TJ\`, \`EN\`, \`FP\`)
- 그 성격의 히어로가 말릴 틈 없이 먼저 저지르는 일
- 이 카드는 intensity high, 일반 선택지 3~4개도 그대로 둠

## 이벤트 방 (\`event\`) — 정확히 10개
- 종류 5개 × 2개씩: \`campsite\`(쉬기), \`meet_stranger\`(낯선 사람), \`minigame_slot\`(운·도박), \`minigame_timing\`(박자·타이밍), \`minigame_cup\`(속임수·컵 고르기)
- 카드 1장에 1개까지. 같은 종류는 서로 다른 카드에. 회수 카드 선택지에도 넣을 수 있음
- 장면과 맞는 선택지에만 (예: 문 잠금 타이밍 → minigame_timing, 노숙·기다리기 → campsite)

## 회수 카드와 표시(flag)
- 성향 쪽 기억의 회수 카드: 선택지 1개 = 불리한 표시(\`kind: bad\`, \`boss_penalty\` -1 또는 -2, 보상은 \`*_down\` 디버프), 1개 = 유리한 표시(\`kind: good\`, \`boss_penalty\` 1)
- 반대쪽 기억의 회수 카드: 선택지 2개 모두 유리한 표시 (하나는 \`boss_penalty\` 2, 하나는 1)
- 골드를 쓰는 선택지를 하나 더 둘 수 있음 (유리한 표시)
- 심기 카드의 골드 선택지는 유리한 표시를 바로 줄 수 있음
- 표시 \`paid_network\` 는 코드가 자동으로 넣음. 설계표에 적지 않음

## 보상 종류 (\`reward\`, 배열, 보통 1개)
- 버프: \`attack_up\`(싸움·기세), \`defense_up\`·\`shield\`(지키기·동료 신뢰), \`intelligence_up\`(정보·기록·암호), \`move_range_up\`(길·열쇠·우회로), \`stun\`(기습·경비 정보·화면 끄기), \`heal\`(치료·쉬기), \`cooldown_reset\`(시간 벌기·정신 차리기), \`bleed\`(큰 싸움, 거의 안 씀)
- 디버프: \`attack_down\`, \`defense_down\`, \`intelligence_down\`, \`hp_down\`, \`move_range_down\` (외면·회피·노출·관계 악화)
- 한 종류에 몰리지 않게 고루

## Director 항목
- \`tags\`: 영어 소문자 1개. 같은 소재 카드끼리 같은 값 (심기 카드 ↔ 회수 카드)
- \`intensity\`: \`calm\` 또는 \`high\` (싸움·추격·군중·위협이면 high)
- \`urgency\`: 일반 카드에만 2~5 (나오는 칸이 좁은 카드일수록 높게)

## 인물
- 카드에 나오는 사람: 동행 \`${c.companion}\` + 새 인물. 주인공·보스는 카드에 나오지 않음
- 새 인물 id: 영어 소문자 (예: \`janitor\`). 시나리오 안에서 7~10명. 한 인물이 여러 카드에 나와도 됨
- \`actors\` 에 새 인물만: \`name\`(한국어 이름 또는 호칭), \`role\`(이 시나리오에서 맡은 일 한 줄)
- 카드의 \`people\`: 그 카드에 말하는 인물 id (동행 포함)

## 이름 규칙
- 카드 id: \`${c.prefix}<영어 소문자_밑줄>\`. 회수 카드는 \`_return\` 으로 끝
- 기억·표시 이름: 영어 소문자_밑줄, 2~3단어

${STYLE}

# 예시 (다른 시나리오. 형식만 참고하고 내용은 쓰지 말 것. 실제 출력은 카드 14장)
${DESIGN_EXAMPLE}

# 출력
JSON 하나만 출력. 설명·마크다운 금지. 형식은 위 예시와 같음: \`{ "actors", "seeds", "flags", "cards" }\`
- \`seeds\`: 기억 이름 → 무엇을 했는지 한 줄 ("~함")
- \`flags\`: 표시 이름 → \`kind\`(good/bad), \`boss_penalty\`, \`summary\`(보스 방에서 어떻게 쓰이는지)
- 카드 순서: 심기 3 → 일반 6 → 회수 5

# 마지막 확인
- [ ] 심기 3 / 일반 6 / 회수 5
- [ ] 카드마다 after_story·before_story 가 내용과 맞고 reason 이 있음
- [ ] 칸별 카드 수: A 4장 이상, B 4장 이상, C 3장 이상, D 2장 이상 (회수 카드 제외)
- [ ] leaning 9장: 성향 쪽 6(축마다 2) + 반대쪽 3
- [ ] 이벤트 10개 = 5종 × 2, 카드당 1개까지
- [ ] 모든 선택지에 reward / gold / event 중 하나, reward 와 event 동시 사용 없음, seed 키 있음, mbti 2글자, effects 가 비어 있지 않음
- [ ] 한 카드 안의 mbti 값이 모두 다름
- [ ] 카드마다 require 없는 선택지 2개 이상
- [ ] 기억 5개 모두 회수 카드 1장씩, 카드가 쓰는 모든 seed·flag 가 seeds·flags 에 있음
- [ ] spread 를 쓰지 않음`;
}

// ── 2단계: 대사 ─────────────────────────────────────────────

/** 설계표의 카드 1장 (1단계 출력) */
export type DesignCard = Record<string, any> & {
	id: string;
	kind: 'plant' | 'normal' | 'callback';
	choices: Record<string, any>[];
	forced?: Record<string, any>[];
};
export type CardDesign = {
	actors: Record<string, { name: Lang; role: string }>;
	seeds: Record<string, string>;
	flags: Record<string, { kind: 'good' | 'bad'; boss_penalty: number; summary: string }>;
	cards: DesignCard[];
};
/** 2단계 출력: 카드 1장의 글 */
export type CardText = {
	id: string;
	background_tags: string[];
	dialogue: Line[];
	choices: { text: Lang; result: Line[]; event_intro?: Line[]; event_options?: EventOptionsText }[];
	forced?: { text: Lang; result: Line[]; event_intro?: Line[]; event_options?: EventOptionsText }[];
};
/** meet_stranger 뒤 고르기 (대사 단계 출력). 패널티(reward·effects)는 설계표 event_avoid 에서 코드가 붙임 */
export type EventOptionsText = {
	fight: { text: Lang; win: Line[]; lose: Line[] };
	avoid: { text: Lang; result: Line[] };
};

/** 대사 단계 묶음: ① 심기 3 + 회수 5 (짝이 이어지게) ② 일반 6 */
export function textBatches(design: CardDesign): string[][] {
	const ids = (k: DesignCard['kind']) => design.cards.filter((c) => c.kind === k).map((c) => c.id);
	return [[...ids('plant'), ...ids('callback')], ids('normal')];
}

export const TEXT_EXAMPLE = `{
  "cards": [
    {
      "id": "card_fie_taxi_cam",
      "background_tags": ["night street", "parked taxi", "cracked neon sign", "windshield reflection", "empty sidewalk"],
      "dialogue": [
        { "speaker": "narrator", "content": { "korean": "길가에 선 택시 앞 유리에 깨진 네온 간판이 비쳤다. 블랙박스 화면에 그 영상이 그대로 찍혀 있었다." } },
        { "speaker": "echo", "content": { "korean": "저 블랙박스, 간판 영상을 처음부터 담았을 거야." } },
        { "speaker": "taxi", "content": { "korean": "손님 아니면 비켜요. 이거 회사 장비라 함부로 못 줘요." } }
      ],
      "choices": [
        {
          "text": { "korean": "기사를 차 옆으로 밀어내고 블랙박스 카드를 뽑는다" },
          "result": [
            { "speaker": "narrator", "content": { "korean": "카드를 손에 쥐었다. 뒤에서 기사가 무전기에 대고 차 번호를 불렀다." } },
            { "speaker": "echo", "content": { "korean": "…회사 장비라고 했잖아." } }
          ],
          "event_intro": [
            { "speaker": "narrator", "content": { "korean": "카드 홈의 잠금 표시가 깜빡였다. 불이 꺼지는 박자에 맞춰 당겨야 했다." } }
          ]
        },
        {
          "text": { "korean": "기사에게 사정을 말하고 영상을 같이 보자고 부탁한다" },
          "result": [
            { "speaker": "taxi", "content": { "korean": "…같이 보는 건 돼요. 복사는 안 돼요." } },
            { "speaker": "narrator", "content": { "korean": "영상 끝에 간판 위 숫자가 또렷이 찍혀 있었다. 기사가 차 번호가 적힌 명함을 건넸다." } }
          ]
        },
        {
          "text": { "korean": "카드를 뽑고, 그 안의 다른 손님 영상까지 팔아 치운다" },
          "result": [
            { "speaker": "narrator", "content": { "korean": "카드 안에는 다른 손님들이 타고 내린 영상도 잔뜩 있었다. 골목의 영상 장사꾼이 그 값을 쳐 주었다." } }
          ]
        },
        {
          "text": { "korean": "기사에게 돈을 주고 원본 카드를 산다" },
          "result": [
            { "speaker": "taxi", "content": { "korean": "회사엔 고장 났다고 할게요. …그 간판 앞, 요즘 밤마다 지나가요." } }
          ]
        }
      ]
    }
  ]
}`;

/** 2단계: 설계표의 카드 일부(ids)에 대사를 씀. written = 앞 묶음에서 이미 쓴 카드 글 */
export function buildCardTextPrompt(
	input: CardSetInput,
	design: CardDesign,
	ids: string[],
	written: CardText[] = []
): string {
	const c = ctxOf(input);
	const target = design.cards.filter((x) => ids.includes(x.id));
	const writtenBlock = written.length
		? `# 앞 묶음에서 이미 쓴 카드 (문장·사건 반복 금지, 회수 카드는 짝 심기 카드의 장면을 이어받을 것)\n${JSON.stringify(written, null, 1)}`
		: '';

	return `당신은 선택형 내러티브 게임의 카드 작가입니다.
설계표가 이미 정해져 있습니다. 아래 **카드 ${target.length}장의 대사**만 쓰세요.
수치·조건·기억·표시·이벤트는 바꾸지 않습니다 (코드가 설계표 값을 그대로 씀).

${contextBlock(input)}

# 전체 설계표 (14장. 흐름 참고용)
${JSON.stringify(design, null, 1)}

${writtenBlock}

# 이번에 쓸 카드
${target.map((x) => `- ${x.id} (${x.kind}) ${x.title?.korean ?? ''}: ${x.summary ?? ''}`).join('\n')}

# 쓰는 법
- 카드마다 \`dialogue\` 2~3줄: 장면 소개. 설계표의 \`summary\`·\`people\` 대로. 선택이 필요한 상황으로 끝낼 것
- \`choices\`: 설계표의 선택지와 **같은 순서, 같은 개수**. 선택지마다
  - \`text\`: 설계표 \`summary\` 를 다듬은 한 문장, "~한다" 로 끝. 행동이 보이게 (누구에게, 무엇을)
  - \`result\`: 1~3줄. 선택의 대가가 바로 보이게: 누가 무엇을 했고 무엇이 남았는지
    - 기억(seed)이 있는 선택지: 나중에 회수 카드에서 돌아올 사람·물건을 결과에 남길 것. 같은 기억을 남기는 선택지가 여럿이면 모두 같은 사람·물건을 남길 것
    - 표시(flag)가 있는 선택지: 보스 방에서 쓰일 것(문, 길, 소문, 얼굴 등)이 결과에 보이게
    - 수치가 오른 쪽이 결과에 드러나게 (예: echo -10 → 동행이 실망하는 한 마디)
  - \`event_intro\`: 설계표에 \`event\` 가 있는 선택지에만. 이벤트가 열릴 때 1~2줄
    - campsite 쉬기, meet_stranger 낯선 사람, minigame_slot 운·도박, minigame_timing 박자·타이밍, minigame_cup 속임수·컵 고르기를 이 장면에 맞게
    - 낯선 사람의 말은 narrator 줄에 따옴표로
  - MBTI 잠금 선택지(\`require.mbti\`)·강제 사건: \`text\`·\`result\` 에 \`{actor}\` 를 써서 그 히어로가 직접 하는 행동으로 ("{actor}이(가) …한다")
- \`forced\`: 설계표에 있는 카드만. 형식은 choices 와 같음
- 회수 카드: 짝 심기 카드에서 남긴 사람·물건이 다시 나옴. 그 기억이 무엇이었는지 플레이어가 바로 알아보게
  - 같은 기억을 남기는 심기 선택지가 여럿이면, 어느 선택지로 왔어도 말이 되게 (예: 물건을 아직 들고 있다고 단정하지 않기)
- \`background_tags\`: 영어 소문자 5개. 카드 dialogue 장면의 장소·시간·조명·군중·분위기. 이름 있는 인물 금지
- \`speaker\`: \`narrator\`, \`${c.companion}\`(동행), 설계표 \`actors\` 의 id 만. 주인공의 행동은 narrator 로
- 동행 \`${c.companion}\` 의 말투는 원문 대사를 따름. 새 인물은 설계표 \`role\` 에 맞는 말투로 일관되게
- 한 줄 60자 이내 (넘으면 두 줄로 나눌 것)

${STYLE}

# 예시 (다른 시나리오. 형식만 참고하고 내용은 쓰지 말 것)
${withCompanion(TEXT_EXAMPLE, c.companion, c.companionName)}

# 출력
JSON 하나만 출력. 설명·마크다운 금지. \`{ "cards": [ ... ${target.length}장 ] }\`, 위 "이번에 쓸 카드" 순서대로`;
}

// ── 3단계: additions ────────────────────────────────────────

/** 1·2단계 결과 → webfront 카드 JSON (설계표 값 + 대사). 설계용 항목(kind, summary, reason, people, role)은 뺌 */
export function assembleCards(design: CardDesign, texts: CardText[]): Record<string, any>[] {
	const choice = (d: Record<string, any>, t?: CardText['choices'][number]) => {
		const { summary: _s, ...rest } = d;
		return {
			text: t?.text,
			mbti: rest.mbti,
			...(rest.require && { require: rest.require }),
			...(rest.chance !== undefined && { chance: rest.chance }),
			effects: rest.effects,
			...(rest.reward && { reward: rest.reward }),
			...(rest.event && { event: rest.event }),
			...(rest.flag && { flag: rest.flag }),
			seed: rest.seed ?? null,
			result: t?.result,
			...(rest.event && t?.event_intro && { event_intro: t.event_intro }),
			...(rest.event === 'meet_stranger' &&
				t?.event_options && {
					event_options: {
						fight: t.event_options.fight,
						avoid: { ...t.event_options.avoid, ...(rest.event_avoid ?? {}) }
					}
				})
		};
	};
	return design.cards.map((d) => {
		const t = texts.find((x) => x.id === d.id);
		if (!t) throw new Error(`대사 없음: ${d.id}`);
		if (t.choices.length !== d.choices.length) throw new Error(`선택지 수 다름: ${d.id}`);
		return {
			id: d.id,
			title: d.title,
			tags: d.tags,
			intensity: d.intensity,
			after_story: d.after_story,
			before_story: d.before_story,
			...(d.leaning && { leaning: d.leaning }),
			...(d.urgency !== undefined && { urgency: d.urgency }),
			...(d.condition && { condition: d.condition }),
			...(d.callback && { callback: d.callback }),
			background_tags: t.background_tags,
			dialogue: t.dialogue,
			choices: d.choices.map((ch, i) => choice(ch, t.choices[i])),
			...(d.forced && { forced: d.forced.map((f, i) => choice(f, t.forced?.[i])) })
		};
	});
}

/** 3단계: 다 쓴 카드를 보고 additions (인물 말투·얼굴, 기억·표시 문구, 방 제목, LLM 줄) */
export function buildAdditionsPrompt(
	input: CardSetInput,
	design: CardDesign,
	cards: Record<string, any>[]
): string {
	const c = ctxOf(input);
	const portraitLines = input.portraits.map((p, i) => `${i + 1}. ${p.note}`).join('\n');
	const ids = input.scenario.rooms.map((r) => r.id);
	const lastRoom = ids.at(-1);

	return `당신은 선택형 내러티브 게임의 작가입니다.
카드 14장이 완성되었습니다. 이 카드들을 보고 시나리오의 **additions 파일**을 JSON 으로 만드세요.

${contextBlock(input)}

# 완성된 카드 14장
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
  - \`label.korean\`: 짧은 이름 (예: "뒤쪽 주차장 문", "퍼진 내 얼굴")
  - 유리한 표시(good): \`boss_choice.korean\` = 보스 방에서 고를 행동 한 문장 ("~한다"), \`boss_penalty\` 설계표 값
  - 불리한 표시(bad): \`boss_line.korean\` = 보스 방에서 생기는 불리한 일 1~2문장, \`boss_penalty\` 설계표 값
- \`paid_network\` 는 넣지 않음 (코드가 자동으로 넣음)

## rooms
- 스토리 방 ${input.scenario.rooms.map((r) => r.id).join(', ')} 모두 \`title\`(짧은 방 제목)
- 그중 4개 방에 LLM 줄 1개씩: 기억·표시·호감도에 반응하는 한 줄
  - 스토리 ${ids[1]}, 스토리 ${ids[2]}: 기억 조건 \`{ "seed": "<기억>" }\`. 두 방은 서로 다른 기억. 그 기억을 남기는 심기 카드가 그 방보다 앞 칸에 나올 수 있어야 함
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
JSON 하나만 출력. 설명·마크다운 금지. \`{ "scenario_id": "${input.scenario.scenario_id}", "actors", "seeds", "flags", "rooms" }\``;
}

const PAID_NETWORK = {
	label: { korean: '돈으로 산 연줄' },
	boss_choice: { korean: '돈으로 산 연줄을 불러 길을 연다' },
	boss_penalty: 2,
	spent_min: 500
};

/** 3단계 결과 → webfront additions. portrait_no 를 풀의 URL 로 바꾸고 paid_network 를 넣음 */
export function toWebfrontAdditions(additions: Record<string, any>, portraits: Portrait[]) {
	const actors = Object.fromEntries(
		Object.entries(additions.actors ?? {}).map(([id, a]: [string, any]) => {
			const { portrait_no, ...rest } = a;
			const p = portrait_no ? portraits[portrait_no - 1] : undefined;
			return [
				id,
				p
					? {
							...rest,
							base_image_url: p.base_image_url,
							base_image_nobg_url: p.base_image_nobg_url
						}
					: rest
			];
		})
	);
	return { ...additions, actors, flags: { ...additions.flags, paid_network: PAID_NETWORK } };
}
