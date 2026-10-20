import type { NpcArcItem, StoryArc } from '../types';
import type { NpcInput } from './storyarcGen';
import { buildScenarioPrompt } from './chapterGen';

// ── 플레이어 성향 3축 ───────────────────────────────────────
// 축마다 -100 ~ +100. 음수 쪽 / 양수 쪽 극을 한 글자 코드로 표기.
// 조합 코드 = fighting + community + reason 순 3글자 (예: FIR, HCE).
export const AXES = {
	fighting: {
		neg: { code: 'F', name: '투쟁 Fighting', desc: '힘으로 해결한다. 싸우기, 빼앗기, 캐묻기, 쫓아내기.' },
		pos: { code: 'H', name: '협력 Helping', desc: '손을 내밀고 돕는다. 구하기, 놓아주기, 곁을 지키기, 사과하기.' }
	},
	community: {
		neg: { code: 'I', name: '개인 Individual', desc: '자기 이익·자기 안전이 먼저. 돈 받고 넘기기, 모른 척하기, 지나치기.' },
		pos: { code: 'C', name: '공동체 Community', desc: '여러 사람의 이익이 먼저. 시민 대피시키기, 병원 지키기.' }
	},
	reason: {
		neg: { code: 'R', name: '질서 Reason', desc: '규칙·절차·통제를 따른다. 허가 기다리기, 확인 후 공개하기, 기록 지우기.' },
		pos: { code: 'E', name: '자유 Emotion', desc: '규칙을 깨거나 넘는다. 위조하기, 몰래 들어가기, 그대로 공개하기.' }
	}
} as const;

export type AxisKey = keyof typeof AXES;
export type Tendency = Record<AxisKey, number>;
const AXIS_ORDER: AxisKey[] = ['fighting', 'community', 'reason'];

export const AXIS_COMBOS = ['FIR', 'FIE', 'FCR', 'FCE', 'HIR', 'HIE', 'HCR', 'HCE'] as const;
export type AxisCombo = (typeof AXIS_COMBOS)[number];

/** 성향 벡터 → 조합 코드. 0은 양수 쪽으로 취급. */
export function comboFromTendency(t: Tendency): AxisCombo {
	return AXIS_ORDER.map((k) => (t[k] < 0 ? AXES[k].neg.code : AXES[k].pos.code)).join('') as AxisCombo;
}

// ── 변주 세트: 원본 storyarc 1개 + 조합별 차이분만 ─────────────
export type AxisVariantScene = {
	order: number;
	title: string;
	npc: string;
	summary: string;
	axis_focus: string;
};

export type AxisVariant = {
	variant_note: string;
	facts?: string[]; // 5편이 함께 쓰는 구체적인 사실 (대사 생성에 전달)
	rising: AxisVariantScene[]; // order 2,3,4
	climax_summary: string;
	act_summary: { rising: string; climax_finale: string };
	npc_roles: Record<string, NpcArcItem>; // 원본 대비 추가·변경분만
};

export type AxisVariantSet = {
	sourceId: string;
	variants: Partial<Record<AxisCombo, AxisVariant>>;
};

/** 원본 storyarc 에 조합 변주를 덮어써 완성된 StoryArc 를 만든다. 변주가 없으면 원본 그대로. */
export function applyAxisVariant(source: StoryArc, combo: AxisCombo, v?: AxisVariant): StoryArc {
	if (!v) return source;
	return {
		...source,
		id: `${source.id}_${combo}`,
		npc_roles: { ...(source.npc_roles ?? {}), ...v.npc_roles },
		scenarioOutline: source.scenarioOutline.map((s) => {
			const r = v.rising.find((x) => x.order === s.order);
			if (r) return { ...s, title: r.title, npc: r.npc, summary: r.summary };
			if (s.order === 5) return { ...s, summary: v.climax_summary };
			return s;
		}),
		act_summary: { ...source.act_summary, ...v.act_summary }
	};
}

function comboPoles(combo: AxisCombo) {
	return AXIS_ORDER.map((k, i) => {
		const ax = AXES[k];
		return combo[i] === ax.neg.code ? ax.neg : ax.pos;
	});
}

/**
 * 기존 StoryArc 를 원본으로, 성향 조합에 맞춘 rising 3씬 + climax 해석을 생성하는 프롬프트.
 * intro(order1)와 climax(order5)의 사건 틀·보스·NPC 는 고정.
 */
export function buildAxisVariantPrompt(source: StoryArc, combo: AxisCombo, npcs: NpcInput[]): string {
	const poles = comboPoles(combo);
	const outline = [...source.scenarioOutline].sort((a, b) => a.order - b.order);
	const intro = outline.find((s) => s.order === 1)!;
	const climax = outline.find((s) => s.order === 5)!;
	const rising = outline.filter((s) => s.order >= 2 && s.order <= 4);
	const npcList = npcs
		.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`)
		.join('\n');

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
지금은 **이미 완성된 스토리아크**를, 특정 성향을 가진 플레이어용으로 **변주**합니다.

# 성향 시스템
- 플레이어의 선택이 쌓여 3개 축의 성향이 정해진다 (축마다 -100 ~ +100).
- 이번 변주는 아래 USER 섹션의 **성향 조합(3개 극)** 을 가진 플레이어를 위한 것이다.

# 변주 원칙 — "반영 + 시험"
1. **반영**: 세계와 NPC가 이 플레이어가 어떤 사람인지 이미 안다. 평판·소문·NPC의 첫 반응·접근 경로가 성향을 따라간다.
   - 예) 투쟁형이면 NPC가 경계하거나 적이 선제공격한다 / 협력형이면 도움 요청이 몰려든다.
2. **시험**: 각 rising 씬은 그 성향의 **대가나 한계**를 찌르는 상황을 하나씩 만든다.
   - 그 성향대로 풀면 무언가를 잃고, 반대 극의 선택이 유혹적으로 보이는 딜레마를 깔아 둘 것.
3. 3개 극을 rising 3씬에 고르게 녹인다 — 한 씬에 한 축만 몰지 말고, 씬마다 주된 축 1개 + 보조 축이 섞이게.
4. **climax 해석**: 사건(보스 등장·변신·twist 대사·결말의 큰 방향)은 원본 그대로 두고,
   보스가 플레이어의 성향을 거울처럼 비추거나 찌르는 방식, 승리/패배의 의미가 성향에 따라 달라지게 다시 쓴다.

# 하드 락 — 바꾸지 말 것
- world, final_boss, global_foreshadowing 의 내용
- intro(order 1)는 변주 대상이 아님. 원본 그대로 이어지는 흐름이어야 함
- climax(order 5)의 title·npc 그리고 핵심 사건·twist 대사
- 복선 hint 는 원본과 같은 씬(같은 order)에 자연스럽게 다시 녹일 것

# 작성 규칙
- rising 3씬(order 2, 3, 4): title·npc·summary 새로 작성. npc 는 아래 목록에서만, 씬당 1명.
- summary 는 원본 rising summary 와 비슷한 분량(3~5문장). 성향이 드러나는 구체적 행동·장면을 쓸 것 (추상어 나열 금지).
- 성향 이름(투쟁·협력·개인·공동체·질서·자유)을 summary 에 직접 쓰지 말 것. 행동과 반응으로 보여줄 것.
- npc_roles 는 변주에 등장하는 NPC 전원에 대해 role/arc 작성.

# 구체성 규칙 (원본 스토리아크가 추상적이어도 지킬 것)
- 비유 금지. "정보의 소용돌이", "광기", "그림자", "잠식", "집어삼키다", "심장부" 같은 표현 대신 실제 물건·장소·숫자로 쓸 것
- summary 마다: 주인공이 실제로 한 행동 1개 + 그 결과(누가, 몇 명, 무엇을 잃음)를 적을 것
  - 나쁜 예: "강력한 설득과 물리력을 동원해 협력을 강요한다. 일부 민감한 정보가 유출될 위험에 처한다"
  - 좋은 예: "주인공은 닥스의 가게 셔터를 내리고 하드디스크 암호를 풀게 한다. 함정 파일이 열려 시민 수천 명의 이름이 시내 광고판으로 나간다"
- 앞 씬의 결과가 다음 씬의 상황이 되게 이어서 쓸 것
- 감정·의미 해석("깊은 회의감을 느낀다", "참혹한 대가를 치른다") 대신 일어난 일을 쓸 것

# facts (사건 기록)
- 5편 전체가 함께 쓰는 구체적인 사실 6~10개. 각 시나리오 대사를 쓰는 작가가 이것만 보고도 같은 사건을 쓸 수 있어야 함
- 원본 world·final_boss·복선을 실제 사건으로 바꿔 적을 것. 예: "위스퍼 웹 = 시청 주민 기록을 털어 광고판에 이름·주소를 띄우는 조직", "복선 '깨진 간판' = 광고판에 10초간 실제 주민 이름이 뜨는 현상"
- intro(order 1)의 구체적인 사건, NPC마다 구체적인 사정(직업, 지키려는 것), climax 의 구체적인 피해도 포함`;

	const USER = `## 이번 성향 조합: ${combo}
${poles.map((p) => `- ${p.code} = ${p.name}: ${p.desc}`).join('\n')}

## 원본 스토리아크 (id: ${source.id})
### world
- setting: ${source.world.setting}
- rule: ${source.world.rule}
- secret: ${source.world.secret}

### protagonist_goal
${source.protagonist_goal}

### final_boss
- name: ${source.final_boss.name}
- surface_identity: ${source.final_boss.surface_identity}
- true_identity: ${source.final_boss.true_identity}
- motivation: ${source.final_boss.motivation}
- twist: ${source.final_boss.twist}

### 복선
${source.global_foreshadowing.map((f) => `- [${f.plant_act}] ${f.hint}`).join('\n')}

### scenarioOutline
#### order 1 (intro, 고정) — ${intro.title} / npc: ${intro.npc}
${intro.summary}

${rising.map((s) => `#### order ${s.order} (rising, 변주 대상) — ${s.title} / npc: ${s.npc}\n${s.summary}`).join('\n\n')}

#### order 5 (climax_finale, 사건 고정·해석 변주) — ${climax.title} / npc: ${climax.npc}
${climax.summary}

### 원본 act_summary
- rising: ${source.act_summary.rising}
- climax_finale: ${source.act_summary.climax_finale}

## 사용 가능한 NPC 목록
${npcList}

## 요구사항
- rising 3씬(order 2,3,4)과 climax summary, act_summary(rising/climax_finale), npc_roles 를 ${combo} 플레이어용으로 작성
- climax 의 npc 는 "${climax.npc}" 고정, title 은 "${climax.title}" 고정
- variant_note: 이 변주가 원본과 어떻게 다른지 2~3문장 설명 (내부 비교용)
- facts: 위 "facts (사건 기록)" 규칙대로 6~10개`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

/** 이미 생성된 시나리오의 대사 → 다음 시나리오 프롬프트에 넣을 텍스트. */
export function formatPreviousScenario(order: number, s: Record<string, any>): string {
	const lines = (list: any[] | undefined) =>
		(list ?? [])
			.filter((l) => l?.type === 'speech' && l.content?.korean)
			.map((l) => `${l.speaker}: ${l.content.korean}`);
	const out = [`### ${order}번 시나리오`, ...(s.prologue?.korean ?? []).map((t: string) => `prologue: ${t}`)];
	for (const room of s.rooms ?? []) {
		out.push(`[방 ${room.id}]`, ...lines(room.dialogue));
		if (room.win_dialogue) out.push('[승리]', ...lines(room.win_dialogue));
		if (room.lose_dialogue) out.push('[패배]', ...lines(room.lose_dialogue));
	}
	return out.join('\n');
}

/**
 * 성향 변주 전용 대사 프롬프트. chapterGen 프롬프트 뒤에 문체 규칙·사건 기록·앞 시나리오 대사를 덧붙임.
 * chapterGen 자체는 다른 파이프라인과 공유하므로 고치지 않음.
 */
export function buildAxisScenarioPrompt(
	order: number,
	arc: StoryArc,
	facts: string[],
	previous: string[]
): string {
	const STYLE = `# 성향 변주 문체 규칙 (위 규칙과 겹치면 이 규칙을 따를 것)
- 비유 금지. "정보의 강물", "소용돌이", "집어삼키다", "잠식", "독이 된다", "심장부", "그림자", "파국", "광기", "혼돈" 같은 표현 대신 실제 물건·장소·숫자로 쓸 것
- 분량 제한 (speech 줄 수, direction 제외): 방 1·3·5·9 의 dialogue 는 4~6줄, 방 15 dialogue 3~4줄, win_dialogue 3~4줄, lose_dialogue 2줄. 대사 한 줄은 40자 이내
  - 줄이 남으면 인사·맞장구·같은 말 반복부터 뺄 것. 방마다 사건 1개와 결과는 남길 것
- 보스(random_boss, boss)는 방 15에서만 등장. 방 1~9 에 보스 대사 금지. win_dialogue·lose_dialogue 는 방 15에만
- 방 15의 random_boss 등장 지문: 위 보스 규칙의 "거대한 그림자" 대신 "정체 모를 자" 또는 행동으로 쓸 것 (예: "서버 앞에 누군가 서 있었다")
- 아래 나쁜 예·좋은 예 문장은 방향만 참고. 그대로 쓰지 말 것
- 방마다 구체적인 사건 1개: 누가 무엇을 했고 결과가 무엇인지 (몇 명, 얼마, 어디)
- 경고 대사에는 이유를 넣을 것
  - 나쁜 예: "더 깊이 들어가면 돌이킬 수 없어." / "진실은 때로… 독이 되기도 해."
  - 좋은 예: "그거 억지로 열면 안에 든 개인 기록이 같이 새." / "그러면 피해자 이름도 같이 퍼져."
- 보스는 철학적으로 말하지 말 것. 자기가 한 일, 원하는 것, 플레이어가 한 일을 짚을 것
  - 나쁜 예: "모든 것은 결국 정보의 바다에 잠기게 될 것이다."
  - 좋은 예: "때린 건 사람들이야. 난 이름만 띄웠어. 너도 오늘 한 명 때렸잖아."
- narrator 는 눈에 보이는 일만 쓸 것. 감정·의미 해석 금지
  - 나쁜 예: "파헤쳐진 비밀의 무게는 카이의 삶을 짓눌렀다."
  - 좋은 예: "카이는 세탁소 열쇠를 바닥에 내려놓았다."
- id 9: "돌아올 수 없는 느낌" 대신 되돌릴 수 없는 구체적인 일이 일어나거나 결정될 것
- prologue: 예고편 말투 대신, 지금까지 일어난 일과 이번 목표를 사실로 쓸 것. 이번 시나리오에서 일어날 결과는 미리 말하지 말 것
- 복선 hint 문장을 그대로 베끼지 말고 이 사건에 맞게 바꿔 쓸 것. "위스퍼 웹의 징표야"처럼 뜻을 설명하지 말고 보이는 것만 쓸 것
- 사건 기록에 없는 큰 설정(새 조직, 새 초능력 등)을 만들지 말 것. 시간·장소 이름·숫자 같은 작은 사항은 추가 가능
- 앞 시나리오가 있으면: 그 결과에서 이어서 시작하고, 앞에서 나온 문장·표현을 다시 쓰지 말 것
- lose_dialogue 도 시나리오마다 다르게. "아직 끝나지 않았어", "이대로 끝낼 순 없어" 같은 다짐 대신 구체적인 다음 행동을 말할 것 (예: "내일 밤 송출실부터 끈다")`;

	const FACTS = facts.length
		? `## 사건 기록 (5편 공통 사실)\n${facts.map((f) => `- ${f}`).join('\n')}`
		: '';
	const PREV = previous.length
		? `## 앞 시나리오 대사 (이어서 쓸 것, 문장 재사용 금지)\n${previous.join('\n\n')}`
		: '';

	return [buildScenarioPrompt(order, arc), STYLE, FACTS, PREV].filter(Boolean).join('\n\n---\n\n');
}

const sceneSchema = {
	type: 'object',
	properties: {
		order: { type: 'integer' },
		title: { type: 'string' },
		npc: { type: 'string' },
		summary: { type: 'string' },
		axis_focus: { type: 'string', description: '이 씬이 주로 시험하는 극 코드 (예: F, C, E)' }
	},
	required: ['order', 'title', 'npc', 'summary', 'axis_focus']
};

export const axisVariantTool = [
	{
		type: 'function',
		function: {
			name: 'generate_axis_variant',
			description: '성향 조합에 맞춘 rising 3씬과 climax 해석을 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					rising: { type: 'array', items: sceneSchema, minItems: 3, maxItems: 3 },
					climax_summary: { type: 'string' },
					act_summary: {
						type: 'object',
						properties: {
							rising: { type: 'string' },
							climax_finale: { type: 'string' }
						},
						required: ['rising', 'climax_finale']
					},
					npc_roles: {
						type: 'object',
						additionalProperties: {
							type: 'object',
							properties: { role: { type: 'string' }, arc: { type: 'string' } },
							required: ['role', 'arc']
						}
					},
					variant_note: { type: 'string' },
					facts: {
						type: 'array',
						items: { type: 'string' },
						description: '5편이 함께 쓰는 구체적인 사실 6~10개'
					}
				},
				required: ['rising', 'climax_summary', 'act_summary', 'npc_roles', 'variant_note', 'facts']
			}
		}
	}
];
