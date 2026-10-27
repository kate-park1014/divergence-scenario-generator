import { actionOf, traceOf } from './arcEpisode';
import type { StoryArc } from '$lib/types';

// 재작업 시나리오(rewrite-test) 검토자·수정자.
// - 검토자: 1~5화 대본 전체를 한 번에 읽고, 정해진 항목에 어긋나는 줄만 원문 인용과 함께 찾는다 (코드로 못 잡는 문맥 문제)
// - 수정자: 한 화씩, 검토자가 찾은 줄만 줄 단위(바꾸기·지우기·뒤에 넣기)로 고친다. 나머지는 그대로
// 형식 문제는 코드 검사(checkScenario)가 맡는다. 검토·수정은 1번만 하고, 끝난 뒤 검토를 다시 돌려 남은 문제 수만 기록한다

export const REVIEW_ITEMS = [
	{
		id: 'R1',
		name: '보스 이름 소개',
		rule: '1~4화에는 최종보스 이름이 나오지 않는다 (흔적으로만 부른다). 5화에는 이름이 소개 없이 나오지 않는다 (누가 어떻게 알려 주는 장면이 먼저). 인물이 근거 없이 흔적의 주인을 안다는 듯 말하면 문제.'
	},
	{
		id: 'R2',
		name: '질문에 답',
		rule: '방 안에서 꺼낸 질문(character_1~4 의 짧은 반응은 빼고)이 그 방 안에서 답을 얻는다. 답 없이 끝나는 질문이 이야기상 중요하면 문제.'
	},
	{
		id: 'R3',
		name: '앞뒤 이어짐',
		rule: '각 줄이 바로 앞 줄들과 이어진다. 앞 대사와 상관없는 말, 같은 인물이 바로 앞에서 한 말과 어긋나는 말, 앞뒤가 맞지 않는 지문이 있으면 문제.'
	},
	{
		id: 'R4',
		name: 'NPC 입장',
		rule: 'NPC 가 앞에서 한 말과 같은 입장을 지킨다. 이유 장면 없이 갑자기 반대 입장이 되거나, 틀린 행동을 부추긴 NPC 가 갑자기 주인공을 탓하면 문제.'
	},
	{
		id: 'R5',
		name: '주인공 공감',
		rule: '주인공(파티) = 플레이어 = 히어로다. 파티는 속는 사람이지 고집부리는 사람이 아니다. 문제가 아닌 것(설계): 1~4화에 흔적의 조언을 믿고 누군가를 도움 / 파티가 도우려던 이유를 말하며 자기 행동을 설명함 / 일반 보스의 경고를 그 사람 사정(자기 구역·일 때문) 때문이라 여기고 담담히 말함. 문제인 것: 지문·대사가 그 조언을 수상하게 그려 놓고(“수상한”, “기분 나쁜” 목소리 등) 파티가 그냥 따름 / 파티가 경고하는 사람을 비웃거나 모욕함(“잔소리”, “예민”, “이기적” 등) / 나쁜 결과를 눈앞에서 보고도 “우린 옳았다”고 우김. 같은 장면은 한 줄만 적는다.'
	},
	{
		id: 'R6',
		name: '파티 대사는 한 사람이 말해도 되게',
		rule: 'character_any 줄은 살아 있는 파티원 중 한 명이 무작위로 말하고, 파티가 1명뿐일 수도 있다. 문제인 것: (a) 이어지는 character_any 줄끼리 존댓말·반말이 섞임 (한 사람이 말투를 바꾸는 것처럼 들림). (b) character_any 줄이 다른 파티원을 부르거나 말을 걸음(“너도 봤어?”, 파티원 호칭), 파티원에게 제안·권유함(“~하는 게 어때?”, “~할래?”). (c) 한 character_any 줄이 바로 앞 character_any 줄에 답하거나 반응함 (질문에 대답, 제안에 동의·의심·반대 — 예: “해 보는 게 어때?” 다음 줄 “정말 괜찮을까?”). 문제가 아닌 것: 한 사람이 혼잣말처럼 이어 말하는 여러 줄, NPC·일반 보스에게 하는 말.'
	},
	{
		id: 'R7',
		name: '게임 용어 없음',
		rule: '대사·지문 글자 안에 "보스", "일반 보스", "최종보스", "방 15", "레벨" 같은 게임 용어가 나오면 문제. 인물은 직업·이름으로 부른다. 줄 주소와 화자 표시(콜론 앞)는 대본 밖 표시라 보지 않는다.'
	},
	{
		id: 'R8',
		name: '일반 보스 편',
		rule: '1~4화 일반 보스가 그 화의 편대로 말한다. warn 이면 틀린 행동을 막으며 경고하고, ally 면 의심·전진을 막고 틀린 행동은 말리지 않는다. 어느 편이든 정답 행동을 말하지 않는다.'
	},
	{
		id: 'R9',
		name: '5화 경고 회수',
		rule: '1~4화에 warn 일반 보스가 있으면, 5화에서 파티가 그 경고가 맞았다는 것을 한 번 떠올린다. warn 화가 없으면 이 항목은 보지 않는다.'
	},
	{
		id: 'R10',
		name: '앞 화와 어긋남',
		rule: '1~5화는 이어지는 이야기다. 파티는 화마다 앞 화에서 배운 것을 기억하고, 2~4화에는 앞 화와 겉모습이 다른 행동을 하며 매번 새 방식으로 속는다. 문제: (a) 2~4화에 파티가 앞 화에서 나쁜 결과를 낳은 행동을 다시 하거나, 앞 화에서 권한 흔적을 다시 믿거나, 앞 화 일을 잊은 듯 처음 겪는 것처럼 행동한다 / (b) 같은 깨달음을 다른 화에서 되풀이한다 / (c) 1~4화에 파티가 화들 사이의 숨은 연결(흔적들이 모두 같은 존재, 행동들이 사실 같은 일)을 짐작하거나 말한다. 그 화 행동이 나쁜 결과를 낳았다는 것을 아는 것은 괜찮다. 5화에서 숨은 연결을 깨닫는 것은 설계라 문제가 아니다.'
	},
	{
		id: 'R11',
		name: '파티 행동 반복',
		rule: '파티는 화마다 자란다. 앞 화에서 배운 것을 꼭 써먹지 않아도 되지만, 같은 행동·반응을 되풀이하면 안 된다. 문제: (a) 일반 보스를 여러 화에서 같은 방법(같은 핑계로 뿌리치기 등)으로 대한다 / (b) 나쁜 결과를 보고 여러 화에서 같은 반응(자책·한탄만, "또 우리가 잘못했나")을 한다 / (c) 여러 화의 방 15 win_dialogue 가 같은 틀("이겼지만…", "다음엔 반드시…")로 끝난다 / (d) "지난번처럼 ~" 같은 회상 대사가 여러 화에 되풀이된다. 뒤 화의 줄을 적는다 (처음 나온 화는 문제가 아님).'
	}
] as const;

export type ReviewIssue = {
	order: number;
	room: number; // prologue·epilogue 는 0
	block: 'dialogue' | 'win_dialogue' | 'lose_dialogue' | 'prologue' | 'epilogue';
	index: number;
	item: string;
	quote: string;
	problem: string;
	fix: string;
	quote_found?: boolean;
};

export type ScenarioEdit = {
	room: number;
	block: ReviewIssue['block'];
	index: number;
	op: 'replace' | 'delete' | 'insert_after';
	speaker?: string;
	text?: string;
	emotion?: 'base' | 'happy' | 'sad' | 'angry';
};

type Entry = { type?: string; speaker?: string; action?: string; emotion?: string; content?: { korean?: string } };
type Gen = Record<string, unknown>;

const BLOCKS = ['dialogue', 'win_dialogue', 'lose_dialogue'] as const;

/** 한 화를 줄 주소와 함께 펼친다. 주소: [방 N block #i] — 수정자가 이 주소로 고친다 */
export function listChapter(order: number, out: Gen, names: Record<string, string>, title = '', rbTitle = ''): string {
	// 화자 표시에 "보스" 같은 낱말을 넣지 않는다 (검토자가 대사 속 게임 용어로 착각함)
	const label: Record<string, string> = { ...names, random_boss: rbTitle || '그 화 상대', boss: names.boss?.replace(/^최종보스\((.*)\)$/, '$1') ?? '' };
	const who = (sp: string) => (label[sp] ? `${sp}(${label[sp]})` : sp);
	const lines: string[] = [`## ${order}화${title ? ` — ${title}` : ''}`];
	const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
	pro.forEach((l, i) => lines.push(`[방 0 prologue #${i}] ${l}`));
	for (const room of (out.rooms ?? []) as Gen[])
		for (const block of BLOCKS) {
			const es = (room[block] ?? []) as Entry[];
			es.forEach((e, i) => {
				const at = `[방 ${room.id} ${block} #${i}]`;
				if (e.type === 'direction') lines.push(`${at} (${e.action}: ${who(String(e.speaker ?? ''))})`);
				else lines.push(`${at} ${who(String(e.speaker ?? ''))}: ${e.content?.korean ?? ''}`);
			});
		}
	const epi = ((out.epilogue as Gen | undefined)?.korean ?? []) as string[];
	epi.forEach((l, i) => lines.push(`[방 0 epilogue #${i}] ${l}`));
	return lines.join('\n');
}

function arcNotes(arc: StoryArc): string {
	const sides = arc.scenarioOutline
		.filter((s) => s.order <= 4)
		.map((s) => `${s.order}화 ${s.random_boss_title ?? ''}: ${s.random_boss_side === 'warn' ? 'warn (경고하는 쪽)' : 'ally (최종보스 편)'}`)
		.join(' / ');
	const episodes = [1, 2, 3, 4].map((o) => `${o}화 행동 "${actionOf(arc, o)}" · 흔적 "${traceOf(arc, o)}"`).join(' / ');
	return `- 최종보스: ${arc.boss_name_korean ?? arc.final_boss.name} (1~4화는 그 화 흔적으로만, 5화 방 15 에서 처음 모습)
- 핵심 물건: ${arc.key_object ?? ''} / 1~4화 행동이 사실은 모두 하는 일: ${arc.wrong_action ?? ''} / 5화 정답 행동: ${arc.right_action ?? ''}
- 화별: ${episodes}
- 일반 보스의 편: ${sides}`;
}

export function buildScenarioReviewPrompt(arc: StoryArc, chapters: string[]): string {
	const items = REVIEW_ITEMS.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n');
	return `당신은 이 게임 대본을 처음 읽는 플레이어입니다. 1~5화를 처음부터 끝까지 읽고, 아래 항목에 어긋나는 줄만 찾습니다.

# 찾는 법
- "더 좋게 쓸 수 있는가?"가 아니라 "읽다가 걸리는 줄이 있는가?"를 찾는다. 취향·문체 다듬기는 쓰지 않는다
- 문제마다 그 줄의 주소([방 N block #i] 의 N·block·i)와 화 번호를 적고, quote 에 그 줄의 대사·지문을 원문 그대로 옮긴다 (화자 이름은 빼고)
- problem 은 무엇이 걸리는지 한 문장, fix 는 어떻게 고치면 되는지 한 문장 (그 줄 또는 바로 앞뒤 줄만 고치는 방향으로)
- 같은 문제가 여러 줄에 있으면 줄마다 따로 적는다. 문제가 없으면 빈 목록
- 화자 표시(콜론 앞): character_any = 파티 중 아무나 한 명, character_1~4 = 파티원 짧은 반응, random_boss = 그 화 일반 보스(괄호 안은 직업), boss = 최종보스, narrator = 지문. 화자 표시는 대본 밖 표시다

# 이 이야기
${arcNotes(arc)}

# 항목
${items}

# 대본
${chapters.join('\n\n')}`;
}

export const scenarioReviewTool = [
	{
		type: 'function',
		function: {
			name: 'review_scenario',
			description: '대본에서 항목에 어긋나는 줄을 찾습니다.',
			parameters: {
				type: 'object',
				properties: {
					issues: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								order: { type: 'number', description: '화 번호 1~5' },
								room: { type: 'number', description: '방 번호. prologue·epilogue 는 0' },
								block: { type: 'string', enum: [...BLOCKS, 'prologue', 'epilogue'] },
								index: { type: 'number' },
								item: { type: 'string', enum: REVIEW_ITEMS.map((i) => i.id) },
								quote: { type: 'string' },
								problem: { type: 'string' },
								fix: { type: 'string' }
							},
							required: ['order', 'room', 'block', 'index', 'item', 'quote', 'problem', 'fix']
						}
					}
				},
				required: ['issues']
			}
		}
	}
];

export function buildScenarioEditPrompt(
	arc: StoryArc,
	order: number,
	chapter: string,
	issues: ReviewIssue[],
	speakers: string[],
	codeErrors: string[] = []
): string {
	const list = [
		...issues.map((x) => `- [방 ${x.room} ${x.block} #${x.index}] (${x.item}) "${x.quote}"\n  문제: ${x.problem}\n  고칠 방향: ${x.fix}`),
		...codeErrors.map((e) => `- (코드 검사) ${e}`)
	].join('\n');
	return `당신은 게임 대본 수정자입니다. ${order}화 대본에서 아래 문제 줄만 고칩니다. 나머지 줄은 건드리지 않습니다.

# 고치는 법
- 고치기는 세 가지뿐: replace(그 줄의 대사를 바꿈) / delete(그 줄을 지움) / insert_after(그 줄 뒤에 새 대사 한 줄을 넣음)
- 주소는 대본의 [방 N block #i] 그대로 쓴다 (room=N, block, index=i). 맨 앞에 넣으려면 insert_after 의 index 를 -1
- 문제 하나에 고치기 1~2개. 문제 줄의 바로 앞뒤 줄을 함께 고쳐도 된다
- 고친 줄은 바로 앞뒤 줄과 이어져야 한다. 앞 줄에서 한 말과 반대되는 말·태도로 바꾸지 않는다 (필요하면 앞 줄도 함께 고친다)
- replace·insert_after 는 speaker 와 text 를 쓴다. speaker 는 ${speakers.join(', ')} 중 하나. prologue·epilogue 는 text 만
- 연출 줄((enter: …) 같은 줄)은 고치지 않는다. 그 방에 enter 하지 않은 NPC 의 대사를 새로 넣지 않는다
- character_any 줄은 파티 중 아무나 한 명이 말하고, 파티가 1명일 수도 있다. 다른 파티원에게 말을 걸거나 제안하지 않고, 앞 character_any 줄에 반응하지 않고(제안+의심 짝은 결정 한 줄로 합친다), 바로 앞뒤 character_any 줄과 말투(존댓말·반말)를 맞춘다
- character_1~4 는 짧은 감정 반응 한 마디 (질문·정보 없음). narrator 는 "~다" 체 지문
- 대사에 "보스" 같은 게임 용어를 쓰지 않는다. 1~4화에는 speaker boss 를 쓰지 않는다
- R5(주인공 공감)를 고칠 때: 파티가 "수상하지만 해 보자"처럼 의심을 알고도 하게 만들지 않는다 (더 나빠진다). 대신 지문이 흔적의 조언을 수상하게 그린 낱말("수상한", "기분 나쁜", "섬뜩한")을 빼서 친절한 조언처럼 들리게 하거나, 파티가 왜 그 조언을 믿는지(누구를 돕기 위해, 급해서) 말하게 한다
- R10(앞 화와 어긋남)을 고칠 때: (a)·(b) 는 파티가 앞 화 일을 한 줄로 떠올리고 왜 이번에는 다르다고 믿는지 말하게 하거나, 되풀이한 깨달음 줄을 지운다. (c) 는 숨은 연결을 짐작한 줄을 그 화 안의 놀람·의문으로 바꾼다. 앞 줄이 그 말을 받는 말이면 함께 고친다
- R11(파티 행동 반복)을 고칠 때: 되풀이된 줄을 앞 화에 없던 행동·반응으로 바꾼다 (일반 보스를 설득하기·조건 걸기·피해 가기, 다친 사람 챙기기·직접 수습하기, 침착하게 다음 할 일 말하기 등). 자책·다짐 줄은 지우거나 손으로 하는 일로 바꾼다. 이야기 사건(누가 무엇을 했는지)은 바꾸지 않는다

# 이 이야기
${arcNotes(arc)}

# 고칠 문제
${list}

# ${order}화 대본
${chapter}`;
}

export const scenarioEditTool = [
	{
		type: 'function',
		function: {
			name: 'edit_scenario',
			description: '문제 줄만 줄 단위로 고칩니다.',
			parameters: {
				type: 'object',
				properties: {
					edits: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								room: { type: 'number' },
								block: { type: 'string', enum: [...BLOCKS, 'prologue', 'epilogue'] },
								index: { type: 'number' },
								op: { type: 'string', enum: ['replace', 'delete', 'insert_after'] },
								speaker: { type: 'string' },
								text: { type: 'string' },
								emotion: { type: 'string', enum: ['base', 'happy', 'sad', 'angry'] }
							},
							required: ['room', 'block', 'index', 'op']
						}
					}
				},
				required: ['edits']
			}
		}
	}
];

export type VerifyResult = { n: number; resolved: boolean; reason: string };
export type NewProblem = { order: number; quote: string; problem: string };

/** 고친 뒤 확인: 처음 찾은 문제가 풀렸는지 + 고친 줄이 새 문제를 만들었는지만 본다 (전체를 새로 검토하면 실행마다 기준이 흔들려 비교가 안 됨) */
export function buildScenarioVerifyPrompt(
	arc: StoryArc,
	chapters: string[],
	issues: ReviewIssue[],
	changed: { order: number; lines: string[] }[]
): string {
	const items = REVIEW_ITEMS.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n');
	const list = issues.map((x, n) => `${n}. ${x.order}화 (${x.item}) "${x.quote}" — ${x.problem}`).join('\n');
	const ch = changed.map((c) => `- ${c.order}화: ${c.lines.map((l) => `"${l}"`).join(', ')}`).join('\n');
	return `당신은 게임 대본 확인자입니다. 앞서 찾은 문제들이 고친 대본에서 풀렸는지, 그리고 새로 고친 줄이 새 문제를 만들었는지만 봅니다. 그 밖의 줄은 새로 평가하지 않습니다.

# 할 일
1. results: 아래 "앞서 찾은 문제" 번호마다 resolved(풀렸으면 true)와 이유 한 문장. 그 줄이 지워졌거나 고쳐져 문제가 없어졌으면 true
2. new_problems: "새로 고친 줄" 가운데, 항목 기준으로 새 문제가 생긴 줄만 (원문 인용 + 문제 한 문장). 없으면 빈 목록

# 이 이야기
${arcNotes(arc)}

# 항목 (기준)
${items}

# 앞서 찾은 문제
${list}

# 새로 고친 줄
${ch || '(없음)'}

# 고친 대본
${chapters.join('\n\n')}`;
}

export const scenarioVerifyTool = [
	{
		type: 'function',
		function: {
			name: 'verify_scenario',
			description: '고친 대본에서 문제가 풀렸는지 확인합니다.',
			parameters: {
				type: 'object',
				properties: {
					results: {
						type: 'array',
						items: {
							type: 'object',
							properties: { n: { type: 'number' }, resolved: { type: 'boolean' }, reason: { type: 'string' } },
							required: ['n', 'resolved', 'reason']
						}
					},
					new_problems: {
						type: 'array',
						items: {
							type: 'object',
							properties: { order: { type: 'number' }, quote: { type: 'string' }, problem: { type: 'string' } },
							required: ['order', 'quote', 'problem']
						}
					}
				},
				required: ['results', 'new_problems']
			}
		}
	}
];

/** 줄 단위 고치기를 적용한 새 화를 돌려준다 (원본은 그대로). 적용 못 한 고치기는 skipped 에 이유와 함께 */
export function applyEdits(out: Gen, edits: ScenarioEdit[], speakers: string[]): { out: Gen; skipped: string[] } {
	const next = JSON.parse(JSON.stringify(out)) as Gen;
	const skipped: string[] = [];
	const target = (e: ScenarioEdit): unknown[] | null => {
		if (e.block === 'prologue' || e.block === 'epilogue') {
			const t = (next[e.block] ??= { korean: [] }) as Gen;
			return (t.korean ??= []) as unknown[];
		}
		const room = ((next.rooms ?? []) as Gen[]).find((r) => Number(r.id) === Number(e.room));
		if (!room) return null;
		return (room[e.block] ??= []) as unknown[];
	};
	// 같은 칸 안에서는 뒤 줄부터 고쳐야 앞 줄 주소가 안 밀린다
	const sorted = [...edits].sort((a, b) => b.index - a.index);
	for (const e of sorted) {
		const arr = target(e);
		const tag = `[방 ${e.room} ${e.block} #${e.index} ${e.op}]`;
		if (!arr) {
			skipped.push(`${tag} 방이 없음`);
			continue;
		}
		const isText = e.block === 'prologue' || e.block === 'epilogue';
		if (e.op !== 'insert_after' && (e.index < 0 || e.index >= arr.length)) {
			skipped.push(`${tag} 줄이 없음`);
			continue;
		}
		if (e.op !== 'delete' && !String(e.text ?? '').trim()) {
			skipped.push(`${tag} text 없음`);
			continue;
		}
		if (!isText && e.op !== 'insert_after' && (arr[e.index] as Entry).type === 'direction') {
			skipped.push(`${tag} 연출 줄은 고치지 않음`);
			continue;
		}
		// replace 에서 speaker 를 안 쓰면 원래 화자 그대로
		const speaker = String(e.speaker || (e.op === 'replace' ? ((arr[e.index] as Entry).speaker ?? '') : ''));
		if (!isText && e.op !== 'delete' && !speakers.includes(speaker)) {
			skipped.push(`${tag} 쓸 수 없는 speaker "${speaker}"`);
			continue;
		}
		const prev = !isText && e.op === 'replace' ? (arr[e.index] as Entry) : undefined;
		const line = isText
			? String(e.text)
			: { type: 'speech', speaker, emotion: e.emotion ?? prev?.emotion ?? 'base', content: { korean: String(e.text) } };
		if (e.op === 'replace') arr[e.index] = line;
		else if (e.op === 'delete') arr.splice(e.index, 1);
		else arr.splice(Math.max(0, e.index + 1), 0, line);
	}
	return { out: next, skipped };
}
