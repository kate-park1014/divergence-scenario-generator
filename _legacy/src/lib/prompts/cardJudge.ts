import type { CardDesign, CardScenario } from './cardGen';
import { ctxOf, gapBlock, registerBlock, type SeqArc } from './cardGenSeq';

// 칸 고정 카드(cardGenSeq) 16장을 채점하는 프롬프트. 코드(cardCheck.ts)로 못 잡는 "읽고 판단해야 하는" 항목만 본다.
// 항목마다 통과/불통과. 불통과면 카드 id 와 원문 인용을 남긴다 (인용은 코드로 원문 대조). 채점은 다시 쓰기를 일으키지 않음 (측정용).

export const CARD_JUDGE_ITEMS = [
	{
		id: 'C1',
		name: '주인공 관점',
		rule: '사건이 주인공(플레이어, "당신")에게 닥치고, 선택하는 사람·이득과 손해를 보는 사람도 주인공이다. 동행은 곁에서 알려 주고 반응만 한다. 동행이 막히거나 요구받는 당사자이거나, 동행의 작업·장비·목표가 문제의 원인이거나, 결과에서 동행이 행동하고 이득을 보면 불통과.'
	},
	{
		id: 'C2',
		name: '말 상대 분명',
		rule: '모든 대사가 누구에게 하는 말인지 분명하다. 특히 동행의 말이 상대 인물에게 하는 말인지 주인공에게 하는 말인지 헷갈리면 불통과. 동행이 주인공을 재촉해 선택을 대신 정하는 것도 불통과.'
	},
	{
		id: 'C3',
		name: '앞뒤 연결',
		rule: '카드 첫 장면이 그 칸 앞 방 마지막 장면에서 자연스럽게 이어지고, 카드 결과 뒤에 다음 방 첫 대사가 그대로 말이 된다. 장소·시간·인물 상태가 튀거나, 다음 방이 전제하는 사실을 깨거나, 다음 방 일을 먼저 해결하면 불통과.'
	},
	{
		id: 'C4',
		name: '선택지 모두 고를 만함',
		rule: '한 카드의 선택지마다 그럴듯한 이유가 보인다 (easy 는 당장 이득, hard 는 옳지만 대가). 한 선택지가 뻔한 정답이거나 뻔한 바보짓이라 고민할 거리가 없으면 불통과.'
	},
	{
		id: 'C5',
		name: '선택과 결과 일치',
		rule: '결과(result)가 선택지 text 의 행동을 그대로 보여 주고, 수치 방향과 맞는다 (echo 가 내려가면 동행이 실망·불만, 올라가면 반김). 고른 것과 다른 일이 일어나거나, 동행 반응이 echo 방향과 반대면 불통과.'
	},
	{
		id: 'C6',
		name: '회수 카드가 기억을 알아보게',
		rule: '회수 카드(callback)에 짝 심기 카드의 결과에 남은 사람·물건이 다시 나와서, 플레이어가 "아까 그 일"을 바로 알아볼 수 있다. 짝 심기 카드와 이어지지 않으면 불통과.'
	},
	{
		id: 'C7',
		name: '인물이 원하는 것이 분명',
		rule: '카드마다 동행이 아닌 인물이 무엇을 왜 원하거나 막는지 대사에서 분명하다. 인물이 이유 없이 나타나 막기만 하거나, 무엇을 원하는지 알 수 없으면 불통과.'
	},
	{
		id: 'C8',
		name: '같은 칸 3장이 서로 다름',
		rule: '같은 칸(A~D)의 심기·일반 카드 3장이 서로 다른 종류의 사건이다 (부탁, 거래, 다툼, 분실물, 고발, 유혹, 사고 등). 같은 틀의 사건이 반복되면 불통과.'
	},
	{
		id: 'C9',
		name: '앞질러 밝히지 않음',
		rule: '카드가 이번 화 원문이 밝힌 것까지만 쓴다. 최종 보스의 정체·위치·약점을 밝히거나, 이번 화 주인공 행동을 카드에서 대신 하거나 미리 해결하면 불통과.'
	},
	{
		id: 'C10',
		name: '말투 일관',
		rule: '동행 말투가 원문 대사와 같고, 같은 인물은 카드마다 같은 말투(존댓말·반말 등)를 쓴다. 한 인물의 말투가 카드 사이나 한 카드 안에서 바뀌면 불통과.'
	},
	{
		id: 'C11',
		name: '이번 화 공간 안',
		rule: '모든 카드가 이번 화 공간 안이나 바로 옆에서 일어나고, 사람·물건이 그 공간에 있을 법하다. 무대 밖으로 나가거나 공간과 상관없는 소재면 불통과.'
	},
	{
		id: 'C12',
		name: '장르가 드러남',
		rule: '카드의 사건·말투에서 지정된 장르가 느껴진다. 장르와 상관없는 평범한 장면이 대부분이면 불통과.'
	},
	{
		id: 'C13',
		name: '이벤트 개연성',
		rule: '이벤트(event)가 있는 선택지마다 선택 → 결과 → event_intro 가 자연스럽게 이어지고, 그 이벤트에서 실제로 하는 일이 장면 안에서 벌어진다 (campsite 쉬기, meet_stranger 낯선 사람이 {actor} 에게 1:1 대결을 걺, minigame_slot 운 내기, minigame_timing 세 번 연달아 맞추기·한 번 놓치면 끝, minigame_cup 숨긴 물건 고르기). 이유 없이 열리거나, 비유로 빗대거나, 다른 종류의 일을 쓰면 불통과.'
	},
	// additions (방에 끼워 넣는 줄·기억·표시). card_id 자리에 "rooms.<방>" / "seeds.<이름>" / "flags.<이름>"
	{
		id: 'A1',
		name: '넣는 자리',
		rule: '방에 끼워 넣는 줄이 바로 앞 줄에 자연스럽게 이어지고, 뒤 줄에서 처음 나오는 소리·물건·사실을 미리 말하지 않으며, 그 장면 분위기에 맞는다 (막아서거나 다투는 중에 응원·감상을 하면 불통과).'
	},
	{
		id: 'A2',
		name: '아는 범위',
		rule: '끼워 넣는 줄의 화자가 알 수 있는 것만 말한다. 보스는 카드 인물과 주인공이 카드에서 한 일을 모른다. 기억 조건 줄은 그 기억(seeds)의 일을, 표시 조건 줄은 그 표시의 boss_line 의 일을 말한다. 조건과 다른 일을 말하거나 화자가 모를 일을 말하면 불통과.'
	},
	{
		id: 'A3',
		name: 'additions 말투',
		rule: '끼워 넣는 줄의 말투(존댓말·반말, 성격)가 원문에서 그 화자가 쓰는 말투와 같고, actors 의 style 과도 맞는다. 다르면 불통과.'
	},
	{
		id: 'A4',
		name: '기억·표시 문구',
		rule: 'seeds 문구가 그 기억을 남긴 카드 결과와 맞고 주인공이 한 일이다. boss_choice 는 주인공이 고르는 행동, boss_line 은 주인공에게 닥치는 일이다. 카드 결과에 없는 일을 쓰거나 주체가 주인공이 아니면 불통과.'
	}
] as const;

export type CardJudgeInput = {
	scenario: CardScenario;
	design: CardDesign;
	cards: Record<string, any>[];
	genre?: string;
	arc?: SeqArc;
	/** additions (webfront 형식). 있으면 A1~A4 도 채점 */
	additions?: Record<string, any>;
};

/** 채점에 넘길 카드 (한국어 글만, 수치는 필요한 것만) */
function cardView(cards: Record<string, any>[], design: CardDesign) {
	const lines = (list: any[] = []) =>
		list.filter((l) => l?.content?.korean).map((l) => `${l.speaker}: ${l.content.korean}`);
	return cards.map((c) => {
		const d = design.cards.find((x) => x.id === c.id);
		return {
			id: c.id,
			slot: d?.slot,
			kind: d?.kind,
			title: c.title?.korean,
			summary: d?.summary,
			...(c.callback ? { callback_seed: c.callback.seed } : {}),
			dialogue: lines(c.dialogue),
			choices: [...(c.choices ?? []), ...(c.forced ?? [])].map((ch: any) => ({
				text: ch.text?.korean,
				path: d?.choices.concat(d?.forced ?? []).find((x) => x.mbti === ch.mbti)?.path,
				effects: ch.effects,
				...(ch.seed ? { seed: ch.seed } : {}),
				...(ch.flag ? { flag: ch.flag } : {}),
				result: lines(ch.result),
				...(ch.event ? { event: ch.event, event_intro: lines(ch.event_intro) } : {}),
				...(ch.event_options
					? {
							event_options: {
								fight: ch.event_options.fight?.text?.korean,
								win: lines(ch.event_options.fight?.win),
								lose: lines(ch.event_options.fight?.lose),
								avoid: ch.event_options.avoid?.text?.korean,
								avoid_result: lines(ch.event_options.avoid?.result)
							}
						}
					: {})
			}))
		};
	});
}

/** 방에 끼워 넣는 줄마다 앞 3줄·뒤 2줄과 함께 */
function additionsView(s: CardScenario, a: Record<string, any>) {
	const say = (l: any) =>
		l?.content?.korean ? `${l.speaker}: ${l.content.korean}` : `(등장 연출: ${l?.speaker})`;
	const rooms = Object.entries((a.rooms ?? {}) as Record<string, any>).flatMap(([rid, room]) =>
		((room?.dialogue ?? []) as any[]).map((x) => {
			const orig = s.rooms.find((r) => String(r.id) === rid)?.dialogue ?? [];
			return {
				room: `rooms.${rid}`,
				before: orig.slice(Math.max(0, x.after_line - 3), x.after_line).map(say),
				inserted: {
					speaker: x.line?.speaker,
					if: x.line?.if,
					intent: x.line?.intent,
					example: x.line?.example?.korean
				},
				after: orig.slice(x.after_line, x.after_line + 2).map(say)
			};
		})
	);
	const korean = (o: Record<string, any> = {}) =>
		Object.fromEntries(Object.entries(o).map(([k, v]) => [k, v?.korean ?? v]));
	return {
		actors_style: Object.fromEntries(
			Object.entries(a.actors ?? {}).map(([k, v]: [string, any]) => [k, v?.style?.korean])
		),
		seeds: korean(a.seeds),
		flags: Object.fromEntries(
			Object.entries(a.flags ?? {})
				.filter(([k]) => k !== 'paid_network')
				.map(([k, v]: [string, any]) => [
					k,
					{
						kind: v.boss_line ? 'bad' : 'good',
						boss_line: v.boss_line?.korean,
						boss_choice: v.boss_choice?.korean
					}
				])
		),
		rooms
	};
}

/** 채점 대상 원문 (인용 대조용). 카드 글 + additions */
export function judgeSource(input: CardJudgeInput): string {
	const { scenario, design, cards, additions } = input;
	return JSON.stringify([
		cardView(cards, design),
		additions ? additionsView(scenario, additions) : null
	]);
}

export function buildCardJudgePrompt(input: CardJudgeInput): string {
	const { scenario: s, design, cards, genre, arc = {}, additions } = input;
	const itemList = CARD_JUDGE_ITEMS.filter((i) => additions || !i.id.startsWith('A'));
	const c = ctxOf(s);
	const items = itemList.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n');
	const actors = Object.entries(design.actors ?? {})
		.map(([id, a]) => `- ${id}: ${a.name?.korean} (${a.role})`)
		.join('\n');

	return `당신은 선택형 내러티브 게임의 카드 검수자입니다. 아래 카드 ${cards.length}장이 각 항목을 지키는지 채점합니다.

# 게임 구조
- 한 판: 스토리 방(1, 3, 5, 9, 15) 사이 칸 A(1→3) B(3→5) C(5→9) D(9→15)마다 카드 1장. 칸마다 후보 중 1장이 나옴
- 선택은 플레이어(주인공, 서술에서는 "당신")가 함. 동행 \`${c.companion}\`(${c.companionName})은 함께 다니는 인물, echo 는 동행 호감도
- 심기 카드(plant)의 선택이 기억(seed)을 남기고, 뒤 칸의 회수 카드(callback)가 그 기억을 이어받음
- speaker \`random_boss\` 는 일반 보스(칸 D 1장), \`{random_boss}\`·\`{actor}\` 는 게임이 이름으로 바꾸는 자리표시

# 채점 방법
- 항목마다 pass(true/false). 애매하면 불통과
- 불통과면 failures 에 어긋나는 카드마다 { card_id, quote, reason }. quote 는 카드 원문에서 **한 글자도 바꾸지 말고** 그대로 인용 (한 문장 또는 그 일부)
- 통과면 failures 는 빈 배열
- "좋은가?"가 아니라 "어긋나는 문장이 있는가?"를 찾는다

# 항목
${items}

# 이 시나리오
- scenario_id: ${s.scenario_id}, 장르: ${genre ?? '없음'}
- 이번 화 공간: ${arc.place ?? '없음'} (무대: ${arc.stage ?? '없음'})
- 이번 화 주인공 행동: ${arc.action ?? '없음'} / 핵심 물건: ${arc.keyObject ?? '없음'}
- 이번 화 줄거리: ${arc.summary ?? '없음'}

## 카드 인물 (동행 말고)
${actors || '- 없음'}

## 원문 인물 말투 (C10·A3 용. 카드에서도 그대로여야 함)
${registerBlock(s)}

## 칸별 앞뒤 장면 (C3 용)
${gapBlock(s)}

# 카드
\`\`\`json
${JSON.stringify(cardView(cards, design), null, 1)}
\`\`\`
${
	additions
		? `
# additions (A1~A4 용)
- 스토리 방 원문에 끼워 넣는 줄. before = 바로 앞 원문 줄, after = 바로 뒤 원문 줄. card_id 자리에는 "rooms.<방>" 또는 "seeds.<이름>" / "flags.<이름>"
- 원문 인물 말투는 위 "원문 인물 말투" 기준. 거기 없는 화자는 before·after 의 그 화자 대사로 판단
\`\`\`json
${JSON.stringify(additionsView(s, additions), null, 1)}
\`\`\``
		: ''
}`;
}

export const cardJudgeTool = [
	{
		type: 'function',
		function: {
			name: 'judge_cards',
			description: '카드를 항목별로 채점합니다.',
			parameters: {
				type: 'object',
				properties: {
					results: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string', enum: CARD_JUDGE_ITEMS.map((i) => i.id) },
								pass: { type: 'boolean' },
								failures: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											card_id: { type: 'string' },
											quote: { type: 'string', description: '카드 원문 그대로 인용' },
											reason: { type: 'string' }
										},
										required: ['card_id', 'quote', 'reason']
									}
								}
							},
							required: ['id', 'pass', 'failures']
						}
					}
				},
				required: ['results']
			}
		}
	}
];

export type CardJudgeFailure = {
	card_id: string;
	quote: string;
	reason: string;
	quote_found: boolean;
};
export type CardJudgeItem = {
	id: string;
	name: string;
	pass: boolean;
	failures: CardJudgeFailure[];
};

/** Gemini 답 → 항목 목록 (빠진 항목은 불통과, 인용이 원문에 있는지 대조) */
export function toJudgeItems(out: any, source: string, withAdditions = false): CardJudgeItem[] {
	const byId = new Map(((out?.results ?? []) as any[]).map((r) => [String(r.id), r]));
	return CARD_JUDGE_ITEMS.filter((i) => withAdditions || !i.id.startsWith('A')).map((it) => {
		const r = byId.get(it.id);
		const failures: CardJudgeFailure[] = ((r?.failures ?? []) as any[]).map((f) => {
			const quote = String(f.quote ?? '').trim();
			return {
				card_id: String(f.card_id ?? ''),
				quote,
				reason: String(f.reason ?? ''),
				quote_found: !!quote && source.includes(JSON.stringify(quote).slice(1, -1))
			};
		});
		if (!r) failures.push({ card_id: '', quote: '', reason: '채점 결과 없음', quote_found: false });
		return {
			id: it.id,
			name: it.name,
			pass: r ? Boolean(r.pass) && !failures.length : false,
			failures
		};
	});
}

/** 읽기용 채점 결과 (cards_0N.md 끝에 붙임) */
export function judgeMarkdown(items: CardJudgeItem[]): string {
	const passed = items.filter((i) => i.pass).length;
	const out = [`## 채점 (${passed}/${items.length} 통과)`, ''];
	for (const i of items) {
		out.push(`- ${i.pass ? '✅' : '❌'} ${i.id} ${i.name}`);
		for (const f of i.failures)
			out.push(
				`  - \`${f.card_id}\` "${f.quote}"${f.quote_found ? '' : ' _(인용이 원문에 없음)_'} — ${f.reason}`
			);
	}
	return out.join('\n') + '\n';
}
