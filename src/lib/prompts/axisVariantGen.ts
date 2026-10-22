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

// ── 장르 풀 ─────────────────────────────────────────────────
// 아크마다 8개 조합에 장르를 겹치지 않게 배정 (LLM 이 아크에 어울리는 것을 고름, 직접 지정도 가능).
// 사건 틀(intro·보스·twist)은 그대로, 분위기·사건 종류·대사 톤만 바뀜.
// group 이 같은 장르(비슷한 결)는 한 아크 안에서 함께 배정하지 않음.
export type AxisGenre = { name: string; desc: string };

export const GENRE_POOL: (AxisGenre & { group: string })[] = [
	{ name: '심리 호러', group: 'fear', desc: '익숙한 곳이 조금씩 어긋나며 서서히 조여온다. 같은 사람이 두 번 등장, 거꾸로 가는 시계, 문 너머 내 목소리. 설명하지 말고 이상한 것을 보여줄 것.' },
	{ name: '오피스 시트콤', group: 'laugh', desc: '진지한 위기를 다들 엉뚱하게 받아들인다. 회의록·결재 서류 개그, 엇박자 리액션, 같은 실수가 세 번 터지는 반복 개그. 웃기지만 사건은 진짜로 굴러간다.' },
	{ name: '하드보일드 느와르', group: 'dark', desc: '냉소적인 독백, 이겨도 씁쓸하다. 비 오는 밤, 뒷거래, 모두가 하나씩 숨기는 것. 대사는 짧고 건조하게.' },
	{ name: '정통 추리', group: 'logic', desc: '차분하고 논리적. 씬마다 단서 1개를 손에 넣고 용의자가 바뀐다. 알리바이, 밀실. 함께 추리할 수 있게 공정하게 단서를 깔 것.' },
	{ name: '멜로 로맨스', group: 'heart', desc: '주인공과 NPC 한 명 사이의 설렘·오해·엇갈림이 사건과 함께 굴러간다. 전하지 못한 쪽지, 비 오는 정류장, 닿을 듯한 손.' },
	{ name: '재난 블록버스터', group: 'scale', desc: '씬마다 스케일이 커진다. 카운트다운, 대피 인원 숫자, 무너지는 건물, 지휘 무전.' },
	{ name: '하이스트 케이퍼', group: 'caper', desc: '팀을 모아 불가능한 곳을 턴다. 설계도, 역할 분담, 변장, 계획이 틀어지는 순간과 즉석 반전. 경쾌한 템포, 팀원끼리 티격태격.' },
	{ name: '판타지 동화', group: 'wonder', desc: '현대에 동화 문법이 섞인다. 말하는 물건, 세 번의 시험, 소원과 대가. 따뜻하지만 동화처럼 잔혹한 대가도 있다.' },
	{ name: '블랙코미디', group: 'laugh', desc: '끔찍한 일이 너무 태연하게 벌어진다. 사무적인 안내 방송, 웃는 얼굴의 악의, 아이러니한 결말.' },
	{ name: '타임루프 SF', group: 'loop', desc: '같은 하루(같은 순간)를 반복하며 조금씩 바꾼다. 반복되는 첫 대사, 회차마다 달라지는 작은 디테일, 회차 번호.' },
	{ name: '서바이벌 데스게임', group: 'fear', desc: '규칙이 있는 잔혹한 게임과 배신의 긴장. 공지되는 규칙, 남은 인원 숫자, 탈락 표시.' },
	{ name: '성장 청춘물', group: 'heart', desc: '서툴고 뜨겁다. 실패해도 한 뼘 자란다. 옥상, 낡은 사진, 친구와의 약속, 첫 도전.' },
	{ name: '음모 스릴러', group: 'dark', desc: '누구도 믿을 수 없고 판이 점점 커진다. 도청, 지워진 기록, 갑자기 사라진 증인.' },
	{ name: '휴먼 신파', group: 'tears', desc: '평범한 사람들의 사정이 눈물 나게 쌓인다. 가족 사진, 병원비 고지서, 끝내 못 한 말.' }
];

export function findGenre(name: string): AxisGenre | undefined {
	const g = GENRE_POOL.find((x) => x.name === name);
	return g && { name: g.name, desc: g.desc };
}

/** 원본 storyarc 에 어울리는 장르를 조합마다 하나씩 배정하는 프롬프트. fixed 는 이미 정해진 배정(그대로 둠). */
export function buildGenreAssignPrompt(
	source: StoryArc,
	combos: AxisCombo[],
	fixed: Partial<Record<AxisCombo, string>>
): string {
	const fixedLines = Object.entries(fixed).map(([c, g]) => `- ${c} = ${g}`);
	const comboLines = combos.map(
		(c) => `- ${c}: ${comboPoles(c).map((p) => p.name).join(' / ')}`
	);
	return `당신은 게임 스토리 편집자입니다. 아래 스토리아크를 성향 조합별로 다른 장르로 변주하려 합니다.
배정할 각 조합에 장르 풀에서 장르를 하나씩 고르세요.

# 규칙
- 장르 이름은 풀에 있는 이름 그대로. 한 장르는 한 번만 (이미 정해진 배정과도 겹치지 말 것)
- group 이 같은 장르를 두 개 이상 고르지 말 것 (이미 정해진 배정 포함). 나란히 놓았을 때 결이 확연히 달라야 함
- 이 아크의 world·보스·twist 와 자연스럽게 맞물리는 장르를 우선. 억지로 끼워 맞춰야 하는 장르는 피할 것
- 조합의 성향과 장르가 서로 긴장을 만들면 좋음 (성향이 장르 안에서 시험받을 수 있게)
- reason: 이 아크에서 그 장르가 어떤 이야기가 되는지 한 줄 (구체적으로)

## 장르 풀
${GENRE_POOL.map((g) => `- ${g.name} [group: ${g.group}]: ${g.desc}`).join('\n')}

## 이미 정해진 배정
${fixedLines.length ? fixedLines.join('\n') : '(없음)'}

## 배정할 조합
${comboLines.join('\n')}

## 스토리아크 (id: ${source.id})
- world: ${source.world.setting} / 규칙: ${source.world.rule} / 비밀: ${source.world.secret}
- 주인공 목표: ${source.protagonist_goal}
- 보스: ${source.final_boss.name} — ${source.final_boss.surface_identity} / 정체: ${source.final_boss.true_identity} / twist: ${source.final_boss.twist}
${[...source.scenarioOutline]
	.sort((a, b) => a.order - b.order)
	.map((s) => `- order ${s.order} ${s.title}: ${s.summary}`)
	.join('\n')}`;
}

export const genreAssignTool = [
	{
		type: 'function',
		function: {
			name: 'assign_genres',
			description: '성향 조합마다 장르를 하나씩 배정합니다.',
			parameters: {
				type: 'object',
				properties: {
					assignments: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								combo: { type: 'string' },
								genre: { type: 'string' },
								reason: { type: 'string' }
							},
							required: ['combo', 'genre', 'reason']
						}
					}
				},
				required: ['assignments']
			}
		}
	}
];

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
	genre?: AxisGenre & { reason?: string }; // 이 조합의 장르 (대사 생성에도 전달)
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
export function buildAxisVariantPrompt(
	source: StoryArc,
	combo: AxisCombo,
	npcs: NpcInput[],
	genre?: AxisGenre & { reason?: string }
): string {
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

# 장르 — 조합마다 전혀 다른 이야기로
- 이번 변주는 USER 섹션의 **장르** 로 다시 쓴다. 같은 원본이라도 다른 조합과 나란히 놓았을 때 장르가 한눈에 구별돼야 한다.
- 장르가 바꾸는 것: rising 씬의 사건 종류·장소·분위기, NPC가 주인공을 대하는 방식, climax 의 분위기와 승리/패배의 맛, facts 의 사건들.
- 장르가 바꾸지 않는 것: 아래 하드 락 항목. 보스·twist 는 장르 안에서 자연스럽게 다시 해석할 것 (예: 코미디면 twist 가 허탈한 웃음으로, 호러면 소름으로 터진다).
- 장르 톤이 "막장 웹툰" 톤과 부딪히면 장르를 따를 것. 성향 원칙(반영 + 시험)은 장르 안에서 그대로 지킬 것.
- title 도 장르가 느껴지게 지을 것.

# 하드 락 — 바꾸지 말 것
- world, final_boss, global_foreshadowing 의 내용
- intro(order 1)는 변주 대상이 아님. 원본 그대로 이어지는 흐름이어야 함
- climax(order 5)의 title·npc 그리고 핵심 사건·twist 대사
- 복선 hint 는 원본과 같은 씬(같은 order)에 자연스럽게 다시 녹일 것

# 작성 규칙
- rising 3씬(order 2, 3, 4): title·npc·summary 새로 작성. npc 는 아래 "등장인물" 목록(원본 아크의 출연진)에서만, 씬당 1명. 새 인물을 데려오지 말 것.
- summary 는 원본 rising summary 와 비슷한 분량(3~5문장). 성향이 드러나는 구체적 행동·장면을 쓸 것 (추상어 나열 금지).
- 성향 이름(투쟁·협력·개인·공동체·질서·자유)을 summary 에 직접 쓰지 말 것. 행동과 반응으로 보여줄 것.
- npc_roles 는 변주에 등장하는 NPC 전원에 대해 role/arc 작성. 최종 보스는 npc_roles 에 넣지 말 것.
- 원본 npc_roles 의 각 인물 설정(정체·역할·사정)을 유지한 채 장르에 맞게 변주할 것.

# 소재 규칙
- 장소·물건·사건은 이 아크의 world·final_boss·scenarioOutline 에 나오는 소재로만 만들 것. 다른 이야기의 소재를 끌어오지 말 것
- 아래 예시들은 형식만 보여주는 틀이다. [ ] 안은 이 아크의 소재로 채울 것

# 구체성 규칙 (원본 스토리아크가 추상적이어도 지킬 것)
- 비유 금지. "~의 소용돌이", "광기", "그림자", "잠식", "집어삼키다", "심장부" 같은 표현 대신 실제 물건·장소·숫자로 쓸 것
- summary 마다: 주인공이 실제로 한 행동 1개 + 그 결과(누가, 몇 명, 무엇을 잃음)를 적을 것
  - 나쁜 예: "강력한 설득과 물리력을 동원해 협력을 강요한다. 일부 민감한 정보가 유출될 위험에 처한다"
  - 좋은 예(틀): "주인공은 [NPC]의 [장소]에서 [구체적 행동]을 한다. 그 결과 [누가·몇 명]이 [무엇을] 잃는다"
- 앞 씬의 결과가 다음 씬의 상황이 되게 이어서 쓸 것
- 감정·의미 해석("깊은 회의감을 느낀다", "참혹한 대가를 치른다") 대신 일어난 일을 쓸 것

# facts (사건 기록)
- 5편 전체가 함께 쓰는 구체적인 사실 6~10개. 각 시나리오 대사를 쓰는 작가가 이것만 보고도 같은 사건을 쓸 수 있어야 함
- 원본 world·final_boss·복선을 실제 사건으로 바꿔 적을 것. 예(틀): "[보스/조직] = [실제로 무엇을 어떻게 하는 존재]", "복선 '[hint 요약]' = [눈에 보이는 구체적 현상]"
- intro(order 1)의 구체적인 사건, NPC마다 구체적인 사정(직업, 지키려는 것), climax 의 구체적인 피해도 포함`;

	const USER = `## 이번 성향 조합: ${combo}
${poles.map((p) => `- ${p.code} = ${p.name}: ${p.desc}`).join('\n')}
${genre ? `\n## 이번 장르: ${genre.name}\n${genre.desc}${genre.reason ? `\n- 이 아크에서의 방향: ${genre.reason}` : ''}\n` : ''}
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

## 등장인물 (원본 아크 출연진 — 이 중에서만)
${npcList}

## 요구사항
- rising 3씬(order 2,3,4)과 climax summary, act_summary(rising/climax_finale), npc_roles 를 ${combo} 플레이어용${genre ? ` "${genre.name}" 장르로` : '으로'} 작성
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
	previous: string[],
	genre?: AxisGenre
): string {
	const GENRE = genre
		? `# 장르: ${genre.name} (위 톤 규칙보다 우선)
${genre.desc}
- prologue·narrator·대사·보스 대사 모두 이 장르의 분위기로 쓸 것. "막장 웹툰" 톤과 부딪히면 장르를 따를 것
- 아래 문체 규칙(비유 금지·구체적 사건·분량)은 장르 안에서 그대로 지킬 것`
		: '';

	const WEBTOON = `# 웹툰(만화) 대사 형식
- 한 줄 = 말풍선 하나. 한 말풍선은 25자 이내, 길면 두 줄(두 말풍선)로 쪼갤 것. 한 줄에 문장 2개 이상 넣지 말 것
- 구어체로 짧고 리듬감 있게. 감탄사·말줄임표·되묻기·끊긴 말("잠깐, 그 서류—")을 적극적으로
- 리액션 컷을 넣을 것: 놀람·당황·버럭을 짧은 한 마디로 ("뭐?!", "…헐.", "야!!") — 단, 방마다 1~2개까지
- 효과음은 narrator 줄로 짧게 쓸 수 있음 (예: "쾅!", "스윽—", "띠링♪"). 방마다 최대 1개
- narrator 는 컷 설명처럼 한 문장으로 짧게 (예: "복도 끝, 면접실 문이 열려 있다.")
- emotion 을 대사 톤에 맞게 바꿔 가며 쓸 것 (한 방 안에서 전부 base 금지)
- 설명조·연설조 대사 금지. 정보는 주고받는 짧은 대화로 나눠서 전달

# 대화 연결 (가장 중요)
- 모든 대사는 바로 앞 줄에 대한 반응이다. 앞 줄의 단어를 받아서 묻거나, 따지거나, 비틀거나, 대답할 것
- 화제를 건너뛰지 말 것. 앞 사람이 한 말을 무시하고 자기 할 말(정보 전달·다음 행동 제안)로 넘어가지 말 것
- 낯선 말("여기", "그거", "그 사람")이 나오면 주인공이 독자 대신 되물을 것. 그 답에서 정보가 나오게
  - 나쁜 예: A "그 문, 열면 안 돼!" → B "같이 방법을 찾아봐요."  (앞 말을 안 받음)
  - 좋은 예: A "그 문, 열면 안 돼!" → B "그 문이 뭔데." → A "…열어 본 사람이 없어. 그래서 몰라."
- 단, 앵무새 되묻기("~라고요?", "~요?", "~라니.")처럼 앞 말을 그대로 반복하는 대사는 방마다 최대 1번
  - 나머지 반응은 앞 말을 받되 새로운 것(의심·추측·관찰·행동)을 하나 덧붙일 것
  - 나쁜 예: A "다들 떠났어요." → B "…떠났다고요?"
  - 좋은 예: A "다들 떠났어요." → B "떠나요? 저기 가방은 그대로인데."
- 주인공(character_any)은 무난한 맞장구·제안 대신 자기 성격이 보이는 반응을 할 것 (의심, 츳코미, 버럭, 농담 등 장르에 맞게)
- 한 사람이 두 줄 연속으로 말할 때는 두 번째 줄이 첫 줄을 이어받는 말일 것 (다른 화제 금지)

# 방 마무리 (각 방 dialogue 의 마지막 1~2줄)
- 방은 다음 방이 궁금해지는 한 컷으로 끝낼 것. 아래 중 하나:
  - 반전: 방금 들은 것과 반대되는 사실이 드러남
  - 결정: 주인공이 구체적인 다음 행동을 정함 ("[어디]로 간다")
  - 위협: 무언가 다가오거나 시간이 줄어듦
  - 펀치라인: 장르에 맞는 한 마디 (코미디면 웃음, 호러면 소름)
- 금지: 흐지부지한 질문으로 끝내기("어떤 방법을…?", "이제 어떻게 하지?"), 의미 없는 말줄임, 같은 결론 반복,
  "~다니."로 끝나는 혼잣말, 감정·몸짓만 묘사하는 지문("손이 떨렸다", "표정이 굳었다")
- 마지막 컷에는 새로 일어난 일이나 새로 정해진 것이 있어야 함

# prologue
- 지난 편의 결과와 이번 목표를 사실로만. "~의 시작이었다", "운명이었다" 같은 예고편·비유 문장 금지`;

	const STYLE = `# 성향 변주 문체 규칙 (위 규칙과 겹치면 이 규칙을 따를 것)
- 비유 금지. "~의 강물", "소용돌이", "집어삼키다", "잠식", "독이 된다", "심장부", "그림자", "파국", "광기", "혼돈" 같은 표현 대신 실제 물건·장소·숫자로 쓸 것
- 분량 제한 (speech 줄 수, direction 제외): 방 1·3·5·9 의 dialogue 는 6~9줄, 방 15 dialogue 4~6줄, win_dialogue 4~5줄, lose_dialogue 2~3줄 (말풍선이 짧은 만큼 줄 수는 조금 많게). 대사 한 줄은 25자 이내(웹툰 형식 참고)
  - 줄이 남으면 인사·맞장구·같은 말 반복부터 뺄 것. 방마다 사건 1개와 결과는 남길 것
- 보스(random_boss, boss)는 방 15에서만 등장. 방 1~9 에 보스 대사 금지. win_dialogue·lose_dialogue 는 방 15에만
- 방 15의 random_boss 등장 지문: 위 보스 규칙의 "거대한 그림자" 대신 "정체 모를 자" 또는 행동으로 쓸 것 (틀: "[이 아크의 장소] 앞에 누군가 서 있었다")
- 아래 예시는 형식만 보여주는 틀이다. [ ] 안은 이 아크의 소재(사건 기록·world)로 채우고, 예시 문장을 그대로 쓰지 말 것
- 장소·물건·조직 이름은 이 아크의 storyarc·사건 기록에 나오는 것만 쓸 것. 다른 이야기의 소재(다른 조직·장비·장소)를 끌어오지 말 것
- 방마다 구체적인 사건 1개: 누가 무엇을 했고 결과가 무엇인지 (몇 명, 얼마, 어디). 단, 정보는 대화 연결 규칙대로 묻고 답하는 흐름 안에서 꺼낼 것 (한 줄에 몰아넣지 말 것)
- 경고 대사에는 이유를 넣을 것
  - 나쁜 예: "더 깊이 들어가면 돌이킬 수 없어." / "진실은 때로… 독이 되기도 해."
  - 좋은 예(틀): "그거 [행동]하면 [누구]의 [무엇]이 [어떻게] 돼."
- 보스는 철학적으로 말하지 말 것. 자기가 한 일, 원하는 것, 플레이어가 한 일을 짚을 것
  - 나쁜 예: "모든 것은 결국 거대한 바다에 잠기게 될 것이다."
  - 좋은 예(틀): "[보스가 한 구체적인 일]. 너도 오늘 [플레이어가 한 구체적인 일]잖아."
- narrator 는 눈에 보이는 일만 쓸 것. 감정·의미 해석 금지
  - 나쁜 예: "파헤쳐진 비밀의 무게가 [NPC]의 삶을 짓눌렀다."
  - 좋은 예(틀): "[NPC]는 [자기 사정과 관련된 물건]을 바닥에 내려놓았다."
- id 9: "돌아올 수 없는 느낌" 대신 되돌릴 수 없는 구체적인 일이 일어나거나 결정될 것
- prologue: 예고편 말투 대신, 지금까지 일어난 일과 이번 목표를 사실로 쓸 것. 이번 시나리오에서 일어날 결과는 미리 말하지 말 것
- 복선 hint 문장을 그대로 베끼지 말고 이 사건에 맞게 바꿔 쓸 것. "[조직]의 징표야"처럼 뜻을 설명하지 말고 보이는 것만 쓸 것
- 사건 기록에 없는 큰 설정(새 조직, 새 초능력 등)을 만들지 말 것. 시간·장소 이름·숫자 같은 작은 사항은 추가 가능
- 앞 시나리오가 있으면: 그 결과에서 이어서 시작하고, 앞에서 나온 문장·표현을 다시 쓰지 말 것
- lose_dialogue 도 시나리오마다 다르게. "아직 끝나지 않았어", "이대로 끝낼 순 없어" 같은 다짐 대신 구체적인 다음 행동을 말할 것 (틀: "[언제] [어디]부터 [무엇을 한다]")`;

	const FACTS = facts.length
		? `## 사건 기록 (5편 공통 사실)\n${facts.map((f) => `- ${f}`).join('\n')}`
		: '';
	const PREV = previous.length
		? `## 앞 시나리오 대사 (이어서 쓸 것, 문장 재사용 금지)\n${previous.join('\n\n')}`
		: '';

	return [buildScenarioPrompt(order, arc), GENRE, WEBTOON, STYLE, FACTS, PREV].filter(Boolean).join('\n\n---\n\n');
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
