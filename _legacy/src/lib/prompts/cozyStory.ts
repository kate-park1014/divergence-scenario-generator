// 편안한 5화 이야기 (cozy_test). 기획안(premises.json) 하나 → story.json (넷쇼트와 같은 방 구조).
// 1~4화: 히어로들이 겉모습만 보고 누군가를 오해 → 싸움 → 이긴 뒤 그 사람의 실제 사정이 드러남.
// reverse_order 화(거꾸로): 히어로들이 배운 대로 수상해 보이는 사람을 감싸고 믿음직해 보이는 사람을 믿는데, 믿은 사람이 그 화의 상대.
// 5화: 싸우기 전에 먼저 이야기를 듣고, 싸움은 화해로 끝남.
// 넷쇼트에서 배운 것: 재료·설계 칸이 많을수록 Gemini 가 칸을 아무 내용으로 채움 → 칸은 꼭 필요한 것만.
// 작가 소개·문체·톤·테마는 스타일 파일(styles/<key>.md, 기본 cozy)에서.

import { getStyle, type StoryStyle } from './storyStyle';

export const COZY_ROOMS = ['1', '3', '5', '8'] as const;

export type CozyPremise = { key: string; title_hint: string; world: string; npc_role: string; goal: string; episodes: string[]; /** 거꾸로 꼬는 화 (2~4) */ reverse_order?: number };
export type CozyNpc = { id: string; name: string; persona?: string };
export type CozyStory = {
	id: string;
	title: string;
	design: {
		goal: string;
		/** 1~4화: 히어로들이 오해한 모습 → 실제 사정, 사정이 드러나는 증거 */
		misunderstandings: { order: number; who: string; looked_like: string; actual: string; reveal: string }[];
		final: { name: string; look: string; actual: string; want: string };
	};
	prologue: string;
	episodes: {
		order: number;
		place: string;
		npc: { name: string; role: string };
		boss: string;
		rooms: Record<string, string | { before_battle: string; win: string; lose: string }>;
		epilogue?: string;
	}[];
};

export function buildCozyPrompt(id: string, p: CozyPremise, themeDescription: string, npc: CozyNpc, style: StoryStyle = getStyle('cozy'), tone = ''): string {
	const rev = p.reverse_order;
	return `너는 4인 히어로 파티가 5화에 걸쳐 모험하는 게임의 스토리 작가다. 아래 기획안을 5화짜리 이야기로 풀어 쓴다.${style.storyWriter ? `\n${style.storyWriter}` : ''}

[테마]
${style.theme || themeDescription}

[기획안]
- 제목 힌트: ${p.title_hint}
- 무대: ${p.world}
- 히어로들이 이곳에 온 이유: ${p.goal}${tone ? `\n- 감정 톤: ${tone}` : ''}
${p.episodes.map((e, i) => `- ${i + 1}화${i + 1 === rev ? ' (거꾸로)' : ''}: ${e}`).join('\n')}

[함께 다니는 NPC] ${npc.name}(${npc.id}) — ${p.npc_role}. 1~5화 내내 히어로들과 함께 다닌다.${npc.persona ? `\n성격 참고: ${npc.persona}` : ''}

[이야기 규칙]
- 1~4화: 히어로들이 겉모습만 보고 그 화의 인물을 오해한다 → 방 10 에서 그 인물과 싸운다 → win 에서 그 인물의 실제 사정이 눈에 보이는 증거(물건·말·장면)로 드러난다.
  그 인물이 그 화의 boss 다. 오해를 부르는 장면은 1~8번 방에 먼저 보여준다 (기획안에 있는 것만. 새 물건·설정을 끌어오지 않는다).
- 2~4화: 히어로들은 앞 화의 오해를 기억하고, 기획안대로 이번엔 다르게 조심한다. 그래도 다른 이유로 또 오해한다.
${rev ? `- ${rev}화는 거꾸로 꼬는 화다. 히어로들은 앞 화에서 배운 대로 수상해 보이는 사람을 의심하지 않고, 친절하고 믿음직해 보이는 사람을 믿고 돕는다.
  그런데 믿은 사람이 일을 꾸미고 있었다. 이 화의 boss 는 히어로들이 믿은 사람이다 (수상해 보이던 사람이 아니다).
  1~5번 방에서 믿을 만해 보이는 장면과, 수상해 보이던 사람이 사실 막으려던 장면을 함께 보여준다. 8번 방에서 히어로들이 속은 걸 알아챈다.
  win 에서 믿은 사람의 사정도 증거로 드러난다 (나쁜 사람이 아니라 작은 잘못을 숨기려던 사람). 수상해 보이던 사람의 사정도 한 줄로 풀어 준다.
  ${rev + 1 <= 4 ? `${rev + 1}화에서 히어로들은 "겉모습은 좋든 나쁘든 믿지 말고 증거를 보자"고 배운 것을 떠올린다.` : ''}
` : ''}- 5화: 최종 인물이 막아서지만 히어로들은 싸우기 전에 먼저 사연을 묻는다. 싸움은 해도 서로 다치게 하려는 싸움이 아니고, win 은 화해로 끝난다.
- 기획안에 없는 사건·인물을 크게 덧붙이지 않는다. 기획안의 사연을 장면과 대사로 풀어 준다.
- 장면에 나오는 물건·사람은 쓰이는 곳이 있어야 한다. 꾸미기만 하는 물건을 넣지 않는다.

[등장인물 규칙]
- 히어로는 이름·성격 없이 항상 "히어로들"이라고 쓴다. "주인공"이라고 쓰지 않는다.
- NPC 는 ${npc.name} 한 명이다. 각 화의 인물(손자, 택배 기사 등)은 장면 속 인물로 쓰고 이름을 붙여도 된다.

[방 구조]
- 한 화는 이야기 방 1, 3, 5, 8, 10 이다. 1번은 도착과 그 화의 일, 3·5번은 단서와 오해가 커짐, 8번은 그 인물과 마주침, 10번은 { before_battle, win, lose }.
- lose 는 ${npc.name} 가 히어로들을 일으켜 세우며 다시 도전하게 쓴다.

[문체]
- 각 방은 2~4문장, 대사는 큰따옴표로 1~2줄. 서술은 현재형("들어선다", "말한다").
${style.storyWriting ? `${style.storyWriting}\n` : ''}- 문장은 쉽게. 어울리지 않는 꾸밈말을 겹쳐 쓰지 않는다.
- 한국어로 쓴다.

[출력]
cozy_story 함수로 답한다. design 을 먼저 정하고 본문을 맞춘다.
- id: "${id}"
- design.goal: 히어로들이 온 이유 한 문장 (1화 1번 방에서 밝힌다)
- design.misunderstandings: 1~4화마다 { order, who(그 화 인물), looked_like(히어로들이 오해한 모습. 거꾸로 화는 믿을 만해 보인 모습), actual(실제 사정), reveal(win 에서 사정이 드러나는 증거) }
- design.final: 5화 인물 { name, look(옷차림·들고 있는 것, 1~2문장), actual(실제 사정), want(바랐던 것) }
- prologue: 무대와 히어로들이 이곳에 오는 장면 2~3문장
- episodes: order 1~5. npc 는 { name: "${npc.id}", role: "${p.npc_role}" }. boss 는 그 화 인물의 호칭 (5화는 design.final.name). epilogue 는 5화에만.`;
}

const str = (description: string) => ({ type: 'string', description });

export const cozyStoryTool = {
	type: 'function',
	function: {
		name: 'cozy_story',
		description: '5화짜리 편안한 이야기를 씁니다.',
		parameters: {
			type: 'object',
			properties: {
				id: str('이야기 id'),
				title: str('제목'),
				design: {
					type: 'object',
					properties: {
						goal: str('히어로들이 온 이유'),
						misunderstandings: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									order: { type: 'integer' },
									who: str('그 화 인물'),
									looked_like: str('히어로들이 오해한 모습'),
									actual: str('실제 사정'),
									reveal: str('win 에서 사정이 드러나는 증거')
								},
								required: ['order', 'who', 'looked_like', 'actual', 'reveal']
							}
						},
						final: {
							type: 'object',
							properties: { name: str('5화 인물'), look: str('모습'), actual: str('실제 사정'), want: str('바랐던 것') },
							required: ['name', 'look', 'actual', 'want']
						}
					},
					required: ['goal', 'misunderstandings', 'final']
				},
				prologue: str('프롤로그'),
				episodes: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							order: { type: 'integer' },
							place: str('그 화의 장소'),
							npc: { type: 'object', properties: { name: str('NPC id'), role: str('직업') }, required: ['name', 'role'] },
							boss: str('그 화 인물의 호칭'),
							rooms: {
								type: 'object',
								properties: {
									'1': str('방 1'),
									'3': str('방 3'),
									'5': str('방 5'),
									'8': str('방 8'),
									'10': {
										type: 'object',
										properties: { before_battle: str('싸움 전'), win: str('이긴 뒤'), lose: str('진 뒤') },
										required: ['before_battle', 'win', 'lose']
									}
								},
								required: ['1', '3', '5', '8', '10']
							},
							epilogue: str('5화에만')
						},
						required: ['order', 'place', 'npc', 'boss', 'rooms']
					}
				}
			},
			required: ['id', 'title', 'design', 'prologue', 'episodes']
		}
	}
};

/** 코드 검사는 모양만 (내용은 사람이 읽는다) */
export function checkCozyStory(s: CozyStory, npcId: string): string[] {
	const errors: string[] = [];
	const eps = Array.isArray(s?.episodes) ? s.episodes : [];
	if (eps.map((e) => e.order).join(',') !== '1,2,3,4,5') errors.push(`episodes 의 order 는 1,2,3,4,5 차례여야 합니다. (지금: ${eps.map((e) => e.order).join(',')})`);
	const ms = s?.design?.misunderstandings ?? [];
	if (ms.map((m) => m.order).join(',') !== '1,2,3,4') errors.push('design.misunderstandings 는 1~4화 차례로 하나씩.');
	if (!s?.prologue?.trim()) errors.push('prologue 가 비었습니다.');
	for (const e of eps) {
		if (e.npc?.name !== npcId) errors.push(`${e.order}화 npc.name 은 "${npcId}" 여야 합니다.`);
		const keys = Object.keys(e.rooms ?? {}).sort((a, b) => Number(a) - Number(b)).join(',');
		if (keys !== '1,3,5,8,10') errors.push(`${e.order}화 rooms 는 1,3,5,8,10 만. (지금: ${keys})`);
		const r10 = e.rooms?.['10'] as { before_battle?: string; win?: string; lose?: string } | undefined;
		for (const k of ['before_battle', 'win', 'lose'] as const) if (!r10?.[k]?.trim()) errors.push(`${e.order}화 방 10 ${k} 이 비었습니다.`);
		for (const k of COZY_ROOMS) if (typeof e.rooms?.[k] !== 'string' || !(e.rooms[k] as string).trim()) errors.push(`${e.order}화 방 ${k} 이 비었습니다.`);
		const all = JSON.stringify(e.rooms ?? {});
		if (/주인공|플레이어/.test(all)) errors.push(`${e.order}화: "주인공/플레이어" 대신 "히어로들".`);
		if (/[一-鿿]/.test(all)) errors.push(`${e.order}화: 한자를 쓰지 않는다.`);
		if (e.order === 5 && !e.epilogue?.trim()) errors.push('5화에 epilogue 가 없습니다.');
		if (e.order !== 5 && e.epilogue?.trim()) errors.push(`epilogue 는 5화에만. (${e.order}화에 있음)`);
	}
	return errors;
}

/** 사람이 읽는 md */
export function cozyToMarkdown(s: CozyStory, p: CozyPremise, npc: CozyNpc, style = 'cozy', tone = ''): string {
	const out = [`# ${s.title} (${s.id})`, '', `- 무대: ${p.world} / 함께 다니는 NPC: ${npc.name} (${p.npc_role})`, `- 스타일: ${style}${tone ? ` / 톤: ${tone}` : ''}`, `- 온 이유: ${s.design?.goal ?? ''}`, ''];
	out.push('## 설계', '');
	for (const m of s.design?.misunderstandings ?? []) out.push(`- ${m.order}화${m.order === p.reverse_order ? ' (거꾸로)' : ''} ${m.who}: ${m.order === p.reverse_order ? '믿음' : '오해'} "${m.looked_like}" → 실제 "${m.actual}" (증거: ${m.reveal})`);
	const f = s.design?.final;
	if (f) out.push(`- 5화 ${f.name}: ${f.actual} / 바란 것: ${f.want}`, `  - 모습: ${f.look}`);
	out.push('', '## 프롤로그', '', s.prologue ?? '', '');
	for (const e of s.episodes ?? []) {
		out.push(`## ${e.order}화 — ${e.place} (상대: ${e.boss})`, '');
		for (const k of COZY_ROOMS) out.push(`**[방 ${k}]** ${e.rooms?.[k] ?? ''}`, '');
		const r = e.rooms?.['10'] as { before_battle?: string; win?: string; lose?: string } | undefined;
		out.push(`**[방 10 · 싸움 전]** ${r?.before_battle ?? ''}`, '', `**[방 10 · 이긴 뒤]** ${r?.win ?? ''}`, '', `**[방 10 · 진 뒤]** ${r?.lose ?? ''}`, '');
		if (e.epilogue) out.push('**[에필로그]** ' + e.epilogue, '');
	}
	return out.join('\n');
}
