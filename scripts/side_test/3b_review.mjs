// 3b단계: 카드가 매끄럽게 읽히는지 채점 → 걸린 카드만 그 문장을 고침 → 다시 채점 (측정용)
//  - 코드 검사: 여러 번 똑같이 나오는 문장, 동행이 자기 이름을 부름, 괄호 메모, 스토리 대사를 그대로 베낌
//  - 이벤트 대사(event_intro·맞선다/피한다)·잠금 선택지·강제 사건 문장도 보고 고침 (수치·보상·조건은 그대로)
//  - 채점(Gemini pro, temperature 0): S1~S4. 처음엔 전부(6장 넘으면 칸 A·B / C·D 2콜 동시), 고친 뒤엔 바뀐 카드만. 선택지마다 누구에게·무엇을·결과 반응이 전제하는 행동을 먼저 적게 함. 불통과면 카드 id·원문 인용·무엇이 문제인지
//  - 고치기(1번, 6장씩 나눠 동시에). --verify 면 고친 카드만 다시 채점: 걸린 카드의 대사·선택지 문장만. 수치·보상·path·화자는 그대로
// 남은 곳이 있으면 고치기 1번 더. 처음 원본 카드는 review/before/. 결과 review/judge_before.json, fix_N.json, judge_after_N.json, review.md
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/3b_review.mjs [--id=…] [--order=1] [--judge-only] [--rep-only] [--verify]
import fs from 'node:fs';
import path from 'node:path';
import { OUT, ORDER, MAX_LEN, ARGV, loadArc, save, readJson, generate, S } from './lib.mjs';
import { gapBlock } from '../../src/lib/prompts/cardGenSeq.ts';

const arc = await loadArc();
const design = readJson('design.json');
const story = readJson('story.json');
const boss = arc.boss_name_korean;
const comp = design.npc;
const compName = design.npc_name;
// 앞 글자가 한글이면 다른 낱말의 일부 (예: 이름 "린" ↔ "떨어뜨린")
const compNameRe = new RegExp(`(^|[^가-힣])${compName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
const compLines = story.rooms.flatMap((r) => (r.dialogue ?? []).filter((l) => l.speaker === comp && l.content?.korean).map((l) => l.content.korean));
const cardDir = path.join(OUT, 'cards');
const files = fs.readdirSync(cardDir).filter((f) => f.endsWith('.json')).sort();
const cards = files.map((f) => JSON.parse(fs.readFileSync(path.join(cardDir, f), 'utf8')));

const ITEMS = [
	{ id: 'S1', name: '선택지 문장이 말이 됨', rule: '선택지 text 만 읽어도 주인공이 누구에게 무엇을 하는지 분명하다. 대상이 틀리면 불통과 (예: 실수한 사람에게 그 사람의 실수를 "보고"한다). gold 선택지는 돈을 누구에게 무엇에 쓰는지가 text 에 있어야 함. 없으면 불통과.' },
	{ id: 'S2', name: '부탁과 선택지가 맞음', rule: '카드 인물이 대사에서 주인공에게 구체적으로 무엇을 해 달라는지 분명하고, 선택지가 모두 그 부탁에 대한 응답이다. "도와 달라"만 있고 무엇을 할지 모르거나, 선택지가 부탁과 상관없는 일이면 불통과.' },
	{ id: 'S3', name: '결과가 선택을 그대로 보여 줌', rule: '결과(result) 첫 줄 인물 반응이 선택지 text 의 행동에 대한 반응이고, 결과가 그 행동을 보여 준다. 인물이 주겠다·알려 주겠다고 한 것(정보·물건)은 결과에서 무엇인지 구체적으로 나온다. 반응이 다른 행동을 전제하거나("보고한다"를 골랐는데 "보고해야 한다고요?"), 약속한 것이 끝내 안 나오면 불통과.' },
	{ id: 'S4', name: '자연스러운 말', rule: '대사가 실제 사람이 그 상황에서 할 말이다. 동행이 카드 인물의 부탁에 반응하지 않고 자기 일·스토리 방 대사를 되풀이함, 카드 인물의 문제가 스토리 방 NPC 의 문제를 그대로 되풀이함, 뜻을 알 수 없는 행동("~의 힘을 흉내 내어"), 인물이 자기를 3인칭 이름으로 부름, 동행의 말투(존댓말·반말)가 원문 대사와 다름, 같은 인물의 이름·사실이 카드 사이에서 어긋남, 앞 줄과 상관없는 감탄·칭찬("정말 현명하시네요!"), 번역투, 한 카드 안에서 앞 줄과 뒤 줄이 이어지지 않음 → 불통과.' },
	{ id: 'S5', name: '이벤트·잠금·강제 사건', rule: '이벤트가 있는 선택지: event_intro 가 그 결과에서 바로 이어지고, 그 이벤트에서 실제로 하는 일이 장면 안에서 벌어진다 (campsite 쉬기, meet_stranger 낯선 사람이 {actor} 에게 1:1 대결을 걺, minigame_slot 내기, minigame_timing 세 번 연달아 맞추기, minigame_cup 숨긴 물건 고르기). 카드는 앞뒤 스토리 방 사이의 짧은 틈이라 "밤새", "다음 날" 같은 긴 시간은 불통과. 잠금(require_mbti)·강제 사건: {actor} 히어로가 직접 하는 행동이고 그 성격 글자와 맞는다. 어긋나면 불통과.' },
	{ id: 'S6', name: '평판 카드', rule: '평판 카드(rep 가 있는 카드)만 봄. 인물이 주인공의 그 평판(rep_note)을 알아보는 말이 대사에 있고, 사건이 그 평판에 맞으며, 같은 칸의 다른 평판 카드와 사건 종류가 겹치지 않는다. 평판과 상관없는 일반 사건이거나 축 이름 낱말("투쟁" 등)로만 평판을 말하면 불통과. rep 이 없는 카드는 통과.' }
];
const REP_NOTE = {
	'fighting-': '힘으로 밀어붙이고 맞서 싸우는 사람',
	'fighting+': '남을 돕고 손을 내미는 사람',
	'community-': '자기 몫부터 챙기는 사람',
	'community+': '모두를 위해 나서는 사람',
	'reason-': '규칙과 절차를 지키는 사람',
	'reason+': '규칙보다 마음 가는 대로 하는 사람'
};

const MODEL = ARGV.model ?? 'gemini-3.1-pro-preview'; // --model 로 바꿀 수 있음 (기본 pro). flash 는 선택지 대상이 틀린 것(접수원에게 접수원 실수를 보고)을 못 잡음
const textOf = (l) => l.content?.korean ?? l.text ?? '';
const compact = (c) => ({
	id: c.id,
	slot: c._side.slot,
	kind: c.kind,
	title: c.title.korean,
	person: c._side.person,
	wants: c._side.wants,
	...(c._side.rep && { rep: c._side.rep, rep_note: REP_NOTE[c._side.rep] }),
	dialogue: c.dialogue.map((l) => ({ speaker: l.speaker, text: textOf(l) })),
	choices: c.choices.map((ch) => ({
		path: ch.path,
		text: ch.text.korean,
		...(ch.require?.mbti && { require_mbti: ch.require.mbti }),
		effects: ch.effects,
		reward: ch.reward ?? [],
		result: ch.result.map(lineOf),
		...(ch.event && { event: ch.event, event_intro: (ch.event_intro ?? []).map(lineOf) }),
		...(ch.event_options && {
			event_options: {
				fight: { text: ch.event_options.fight.text.korean, win: ch.event_options.fight.win.map(lineOf), lose: ch.event_options.fight.lose.map(lineOf) },
				avoid: { text: ch.event_options.avoid.text.korean, result: ch.event_options.avoid.result.map(lineOf) }
			}
		}),
		...(ch.flag && { flag_boss_room: c._side.flags?.[ch.flag] })
	})),
	...((c.forced ?? []).length && { forced: c.forced.map((f) => ({ text: f.text.korean, require_mbti: f.require?.mbti, result: f.result.map(lineOf) })) })
});
const lineOf = (l) => ({ speaker: l.speaker, text: textOf(l) });
const choiceLines = (ch) => [
	{ text: ch.text },
	...ch.result,
	...(ch.event_intro ?? []),
	...(ch.event_options ? [{ text: ch.event_options.fight.text }, ...ch.event_options.fight.win, ...ch.event_options.fight.lose, { text: ch.event_options.avoid.text }, ...ch.event_options.avoid.result] : [])
];
const allLines = (c) => [...c.dialogue, ...c.choices.flatMap(choiceLines), ...(c.forced ?? []).flatMap((f) => [{ text: f.text }, ...f.result])];
const storyLines = new Set(story.rooms.flatMap((r) => ['dialogue', 'win_dialogue', 'lose_dialogue'].flatMap((b) => (r[b] ?? []).map((l) => l.content?.korean).filter((t) => t && t.length >= 10))));

/** 코드로 잡는 것: 2번 이상 똑같이 나오는 줄, 동행이 자기 이름을 부름 */
function codeFailures(cs) {
	const count = {};
	for (const c of cs) for (const l of allLines(c)) count[l.text] = (count[l.text] ?? 0) + 1;
	const out = [];
	for (const c of cs) {
		for (const t of new Set(allLines(c).map((l) => l.text))) if (count[t] > 1) out.push({ item: 'R1', card_id: c.id, quote: t, problem: `같은 문장이 ${count[t]}번 나옴. 그 장면에 맞는 다른 문장으로` });
		for (const l of allLines(c)) if (/[()]/.test(l.text.replace(/[이을은와과]\((가|를|는|과|와)\)/g, ''))) out.push({ item: 'R3', card_id: c.id, quote: l.text, problem: '괄호 메모가 대사·서술에 들어감. 괄호를 빼고 장면으로' });
		for (const l of allLines(c)) if (storyLines.has(l.text)) out.push({ item: 'R4', card_id: c.id, quote: l.text, problem: '스토리 방 대사를 그대로 베낌. 이 카드 상황에 맞는 새 말로' });
		for (const l of allLines(c)) if (l.speaker === comp && compNameRe.test(l.text)) out.push({ item: 'R2', card_id: c.id, quote: l.text, problem: `동행 ${compName}이 자기 이름을 부름. 1인칭으로 (존댓말이면 저/제, 반말이면 나/내)` });
	}
	return out;
}

const context = () => `# 이번 화
- 장소: ${design.place} (무대 ${arc.stage})
- 동행: \`${comp}\` ${compName} (주인공 곁에서 거듦. 자기를 이름 대신 1인칭으로: 존댓말이면 저/제, 반말이면 나/내)
- 동행 원문 대사 (카드에서도 이 말투 그대로):
${compLines.map((t) => `  - ${t}`).join('\n')}
- 주인공: 서술에서 "당신". 선택하는 사람
- 이번 화 핵심 물건: ${arc.key_object} / 주인공 행동: ${design.action}
- 칸 A·B 카드: 세계 규칙의 나쁜 결과(${arc.world?.rule ?? ''})가 아직 보이지 않음 — 유혹과 당장 이득까지만. 칸 C·D 카드: 그 대가를 겪는 사람

## 칸별 앞뒤 장면
${gapBlock({ rooms: story.rooms })}`;

const judgeTool = {
	name: 'card_review',
	description: '카드 매끄러움 채점 (카드마다 항목마다)',
	parameters: {
		type: 'object',
		properties: {
			cards: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						card_id: S,
						checks: {
							type: 'array',
							items: {
								type: 'object',
								properties: { item: { type: 'string', enum: ITEMS.map((i) => i.id) }, pass: { type: 'boolean' }, quote: S, problem: S },
								required: ['item', 'pass']
							}
						},
						asks: S,
						choices_read: {
							type: 'array',
							items: {
								type: 'object',
								properties: { path: S, target: S, does: S, reaction_assumes: S },
								required: ['path', 'target', 'does', 'reaction_assumes']
							}
						}
					},
					required: ['card_id', 'asks', 'choices_read', 'checks']
				}
			}
		},
		required: ['cards']
	}
};

// 6장 넘게 한 번에 보내면 pro 응답이 5분을 넘겨 dev 서버 fetch 가 끊김 → 칸 순서대로 6장씩 나눠 동시에
function chunks(cs) {
	const sorted = [...cs].sort((a, b) => a.slot.localeCompare(b.slot) || (a.rep ? 1 : 0) - (b.rep ? 1 : 0));
	const out = [];
	for (let i = 0; i < sorted.length; i += 6) out.push([`${i / 6 + 1}`, sorted.slice(i, i + 6)]);
	return out;
}

// only: 채점할 카드 id (없으면 전부). 나머지는 참고로만 넣음
async function judge(cs, label, only) {
	const target = cs.filter((c) => !only || only.has(c.id));
	const parts = chunks(target);
	const outs = await Promise.all(parts.map(([k, part]) => judgePart(part, cs.filter((c) => !part.includes(c)), `${label}_${k}`)));
	const byId = Object.fromEntries(cs.map((c) => [c.id, allLines(c).map((l) => l.text).join('\n')]));
	const fails = outs.flatMap((o) => o.cards ?? []).flatMap((c) => (c.checks ?? []).filter((k) => k.pass === false).map((k) => ({ item: k.item, card_id: c.card_id, quote: k.quote ?? '', problem: k.problem ?? '', quote_found: !!byId[c.card_id]?.includes(k.quote ?? '') })));
	return [...fails, ...codeFailures(cs)];
}

async function judgePart(cs, rest, label) {
	const p = `당신은 선택형 게임 카드의 편집자입니다. 아래 카드 ${cs.length}장을 플레이어처럼 한 줄씩 읽고, 매끄럽지 않은 곳을 찾습니다.

${context()}

# 항목 (카드마다 모두 봄)
${ITEMS.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n')}

# 출력 (카드마다 이 순서로)
- asks: 인물이 주인공에게 해 달라는 것을 한 문장으로 (대사에 없으면 "없음")
- choices_read: 선택지마다 text 를 글자 그대로 읽고 target(주인공이 그 행동을 하는 상대), does(무엇을 하는지), reaction_assumes(결과 첫 줄 인물 반응이 전제하는 주인공 행동). 짐작으로 고쳐 읽지 말 것
- checks: S1~S6 여섯 개 모두 (S5 는 이벤트·잠금·강제 사건이 없으면, S6 은 평판 카드가 아니면 통과). choices_read 를 보고 판단 (target 이 그 행동의 상대로 말이 안 되면 S1, does 와 reaction_assumes 가 다르면 S3)
- cards: 카드 ${cs.length}장 모두
- 통과면 item 과 pass 만. pass false 일 때만 quote(카드 원문 그대로 한 줄, 고칠 곳)와 problem(무엇이 왜 어색한지 한 문장)
- 취향 차이는 통과. 플레이어가 읽다가 "응?" 할 곳만 불통과

# 채점할 카드
${JSON.stringify(cs, null, 1)}

# 참고: 같은 화 다른 칸 카드 (채점하지 않음. 회수 카드의 짝, 인물 이름·사실 대조용)
${JSON.stringify(rest.map((c) => ({ id: c.id, slot: c.slot, kind: c.kind, person: c.person, dialogue: c.dialogue, choices: c.choices.map((ch) => ({ path: ch.path, text: ch.text, result: ch.result })) })), null, 1)}`;
	save(`review/judge_${label}_prompt.md`, p);
	const want = (o) => cs.flatMap((c) => {
		const got = (o.cards ?? []).find((x) => x.card_id === c.id);
		const items = new Set((got?.checks ?? []).map((k) => k.item));
		return ITEMS.filter((i) => !items.has(i.id)).map((i) => `${c.id}: ${i.id} 판정이 빠짐`);
	});
	const { out } = await generate(p, judgeTool, want, { label: `채점(${label})`, temperature: 0, model: MODEL });
	save(`review/judge_${label}_raw.json`, out);
	return out;
}

const LINE = { type: 'object', properties: { speaker: S, text: S }, required: ['speaker', 'text'] };
const fixTool = {
	name: 'card_fix',
	description: '고친 카드 문장',
	parameters: {
		type: 'object',
		properties: {
			cards: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						id: S,
						dialogue: { type: 'array', items: LINE },
						choices: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									path: S,
									text: S,
									result: { type: 'array', items: LINE },
									event_intro: { type: 'array', items: LINE },
									event_options: {
										type: 'object',
										properties: {
											fight: { type: 'object', properties: { text: S, win: { type: 'array', items: LINE }, lose: { type: 'array', items: LINE } }, required: ['text', 'win', 'lose'] },
											avoid: { type: 'object', properties: { text: S, result: { type: 'array', items: LINE } }, required: ['text', 'result'] }
										}
									}
								},
								required: ['path', 'text', 'result']
							}
						},
						forced: { type: 'array', items: { type: 'object', properties: { text: S, result: { type: 'array', items: LINE } }, required: ['text', 'result'] } }
					},
					required: ['id', 'dialogue', 'choices']
				}
			}
		},
		required: ['cards']
	}
};

function fixCheck(o, targets, others) {
	const e = [];
	const got = Object.fromEntries((o.cards ?? []).map((c) => [c.id, c]));
	for (const t of targets) {
		const c = got[t.id];
		if (!c) {
			e.push(`${t.id}: 빠짐`);
			continue;
		}
		const paths = c.choices.map((ch) => ch.path).sort().join();
		const want = t.choices.map((ch) => ch.path).sort().join();
		if (paths !== want) e.push(`${t.id}: 선택지 path 는 ${want} 그대로 (지금 ${paths})`);
		const ok = new Set(['narrator', comp, t.person.id]);
		for (const ch of c.choices) {
			const o = t.choices.find((x) => x.path === ch.path);
			if (!o) continue;
			if (o.event && !ch.event_intro?.length) e.push(`${t.id}/${ch.path}: event_intro 를 빼지 않음`);
			if (o.event_options && !(ch.event_options?.fight?.text && ch.event_options?.avoid?.text && ch.event_options.fight.win?.length && ch.event_options.fight.lose?.length && ch.event_options.avoid.result?.length)) e.push(`${t.id}/${ch.path}: event_options(fight text·win·lose / avoid text·result) 를 그대로 둠`);
			if (o.text.includes('{actor}') && !ch.text.includes('{actor}')) e.push(`${t.id}/${ch.path}: text 의 {actor} 를 빼지 않음`);
		}
		if ((t.forced ?? []).length !== (c.forced ?? []).length) e.push(`${t.id}: forced ${(t.forced ?? []).length}개 그대로`);
		for (const f of c.forced ?? []) if (!f.text.includes('{actor}')) e.push(`${t.id}/forced: text 에 {actor}`);
		const cc = { ...c, choices: c.choices.map((ch) => ({ ...ch, event_intro: ch.event_intro ?? [] })), forced: c.forced ?? [] };
		for (const l of [...c.dialogue, ...cc.choices.flatMap(choiceLines), ...cc.forced.flatMap((f) => f.result)].filter((l) => l.speaker !== undefined)) {
			if (!ok.has(l.speaker)) e.push(`${t.id}: 화자 "${l.speaker}" 는 쓸 수 없음 (narrator, ${comp}, ${t.person.id})`);
			if (l.text.length > MAX_LEN) e.push(`${t.id}: ${MAX_LEN}자 넘는 줄: "${l.text}"`);
		}
		if (!c.dialogue.some((l) => l.speaker === t.person.id)) e.push(`${t.id}: ${t.person.id} 가 dialogue 에서 말해야 함`);
		for (const ch of c.choices) if (ch.text.length > MAX_LEN) e.push(`${t.id}/${ch.path}: 선택지 ${MAX_LEN}자 넘음`);
		if (JSON.stringify(c).includes(boss)) e.push(`${t.id}: 최종보스 이름 "${boss}" 금지`);
	}
	const merged = [...others, ...targets.map((t) => (got[t.id] ? { ...t, ...got[t.id], person: t.person, forced: got[t.id].forced ?? t.forced } : t))];
	for (const f of codeFailures(merged)) if (targets.some((t) => t.id === f.card_id)) e.push(`${f.card_id}: ${f.problem}: "${f.quote}"`);
	return e;
}

// 고칠 카드가 6장 넘으면 6장씩 나눠 동시에 (pro 응답 5분 제한)
async function fix(cs, fails, round) {
	const ids = [...new Set(fails.map((f) => f.card_id))].filter((id) => cs.some((c) => c.id === id));
	const targets = cs.filter((c) => ids.includes(c.id));
	const parts = chunks(targets);
	const outs = await Promise.all(parts.map(([k, part]) => fixPart(cs, part, fails, `${round}${parts.length > 1 ? `_${k}` : ''}`)));
	return { out: { cards: outs.flatMap((o) => o.out.cards ?? []) }, errors: outs.flatMap((o) => o.errors), ids };
}

async function fixPart(cs, targets, fails, round) {
	const ids = targets.map((c) => c.id);
	const others = cs.filter((c) => !ids.includes(c.id));
	const p = `당신은 선택형 게임 카드의 편집자입니다. 아래 카드 ${targets.length}장에서 지적된 곳만 고쳐 매끄럽게 만듭니다.

${context()}

# 고치는 법
- 지적된 줄과, 그 줄을 고치면 앞뒤가 안 맞게 되는 줄만 고침. 나머지 줄은 글자 그대로
- 줄 수는 늘리지 않음. 지우는 줄이 있으면 그 자리에 바꿔 넣음 (원래 줄을 두고 새 줄을 덧붙이지 않음)
- 사건·소재는 바꾸지 않음. 칸 A·B 카드에 나쁜 결과를 새로 끌어오지 않음
- 선택지의 뜻(easy 당장 이득 / hard 옳지만 대가 / gold 돈을 씀)은 그대로. effects·reward 는 바뀌지 않으니 문장이 그 수치와 맞게
- 선택지 text: 누구에게 무엇을 하는지 분명하게, "~한다" 꼴. gold 는 누구에게 무엇에 돈을 쓰는지
- 인물이 무엇을 해 달라는지 대사에서 구체적으로. 주겠다고 한 정보·물건은 결과에서 무엇인지 말함
- 결과 첫 줄은 고른 행동에 대한 반응
- 같은 문장을 여러 카드·선택지에 반복하지 않음. "나중에 어떤 영향을 줄지도 모른다" 같은 예고 문장 대신 결과에 남는 사람·물건을 장면으로 보여 줌
- 동행은 자기를 이름 대신 1인칭으로 (존댓말이면 저/제, 반말이면 나/내. 존댓말에 "내" 섞지 않음). 한 줄 ${MAX_LEN}자 이내. narrator 는 "~했다" 체, 눈에 보이는 일만
- 화자: narrator / ${comp} / 그 카드 person.id. 최종보스 이름 "${boss}" 금지. 새 인물 금지
- 회수 카드는 짝 심기 카드와 이어져야 함 (다른 카드 참고)
- 이벤트 대사(event_intro·event_options)·잠금 선택지·강제 사건(forced)도 지적되면 고침. {actor} 는 그대로 둠. 이벤트 종류는 바꾸지 않음
- 괄호 메모 금지. 스토리 방 대사를 그대로 쓰지 않음. 동행은 이 카드 인물의 부탁에 반응
- 카드는 앞뒤 스토리 방 사이의 짧은 틈. "밤새", "다음 날" 같은 긴 시간 금지

# 지적된 곳
${fails.filter((f) => ids.includes(f.card_id)).map((f) => `- ${f.card_id} [${f.item}] "${f.quote}" — ${f.problem}`).join('\n')}

# 고칠 카드 (출력: 이 카드들의 dialogue, choices 의 path·text·result 전부 (이벤트가 있으면 event_intro·event_options 도), forced 가 있으면 forced 의 text·result)
${JSON.stringify(targets, null, 1)}

# 참고: 고치지 않는 카드 (이것과 문장 겹치지 않게)
${JSON.stringify(others.map((c) => ({ id: c.id, title: c.title, person: c.person, dialogue: c.dialogue, choices: c.choices.map((ch) => ({ path: ch.path, text: ch.text, result: ch.result })) })), null, 1)}`;
	save(`review/fix_${round}_prompt.md`, p);
	const { out, errors } = await generate(p, fixTool, (o) => fixCheck(o, targets, others), { label: `고치기 ${round}`, temperature: 0.7, model: MODEL });
	save(`review/fix_${round}.json`, { ...out, errors });
	return { out, errors };
}

const line = (l) => ({ speaker: l.speaker, content: { korean: l.text } });
function apply(card, f) {
	return {
		...card,
		dialogue: f.dialogue.map(line),
		choices: card.choices.map((ch) => {
			const n = f.choices.find((x) => x.path === ch.path);
			if (!n) return ch;
			const eo = ch.event_options && n.event_options;
			return {
				...ch,
				text: { korean: n.text },
				result: n.result.map(line),
				...(ch.event && n.event_intro?.length && { event_intro: n.event_intro.map(line) }),
				...(eo && {
					event_options: {
						fight: { text: { korean: eo.fight.text }, win: eo.fight.win.map(line), lose: eo.fight.lose.map(line) },
						avoid: { ...ch.event_options.avoid, text: { korean: eo.avoid.text }, result: eo.avoid.result.map(line) }
					}
				})
			};
		}),
		...(card.forced && f.forced?.length === card.forced.length && { forced: card.forced.map((x, i) => ({ ...x, text: { korean: f.forced[i].text }, result: f.forced[i].result.map(line) })) })
	};
}

function summary(fails) {
	return [...ITEMS.map((i) => i.id), 'R1', 'R2', 'R3', 'R4'].map((id) => `${id} ${fails.filter((f) => f.item === id).length}`).join(' · ');
}

// ── 실행 ──
const before = cards.map(compact);
// --rep-only: 평판 카드만 채점·고침 (기본 카드는 이미 검토됨)
const ONLY = ARGV['rep-only'] ? new Set(cards.filter((c) => c._side.rep).map((c) => c.id)) : null;
const failsBefore = (await judge(before, 'before', ONLY ?? undefined)).filter((f) => !ONLY || ONLY.has(f.card_id));
save('review/judge_before.json', failsBefore);
console.log(`고치기 전: ${failsBefore.length}곳 (${summary(failsBefore)})`);

const md = [`# ${ORDER}화 카드 매끄러움 검토`, '', '## 항목', ...ITEMS.map((i) => `- **${i.id} ${i.name}**: ${i.rule}`), '- **R1 반복 문장** (코드): 같은 문장이 2번 이상', '- **R2 자기 이름** (코드): 동행이 자기를 이름으로 부름', '- **R3 괄호 메모** (코드)', '- **R4 스토리 대사 베낌** (코드)', ''];
const failList = (fs_) => fs_.map((f) => `- \`${f.card_id}\` **${f.item}** "${f.quote}"${f.quote_found === false ? ' _(인용 원문에 없음)_' : ''} — ${f.problem}`);
md.push(`## 고치기 전 — ${failsBefore.length}곳`, `> ${summary(failsBefore)}`, '', ...failList(failsBefore), '');

// 채점 → 고치기 1번으로 끝 (빠르게). --verify 를 주면 고친 카드만 다시 채점해 남은 곳을 보여 줌
const ROUNDS = 1;
const changed = new Set();
let fails = failsBefore;
for (let round = 1; round <= ROUNDS && !ARGV['judge-only'] && fails.length; round++) {
	const { out, errors, ids } = await fix(cards.map(compact), fails, round);
	if (errors.length) console.log(`고치기 ${round} 남은 오류 ${errors.length}개 — 그 카드는 이번엔 그대로 둠`);
	const bad = new Set(errors.map((e) => e.split(':')[0].split('/')[0]));
	let n = 0;
	for (let i = 0; i < cards.length; i++) {
		const f = (out.cards ?? []).find((x) => x.id === cards[i].id);
		if (!f || !ids.includes(cards[i].id) || bad.has(cards[i].id)) continue;
		const keep = path.join(OUT, 'review/before', files[i]); // 처음 원본만 둠
		if (!fs.existsSync(keep)) save(`review/before/${files[i]}`, cards[i]);
		cards[i] = apply(cards[i], f);
		save(`cards/${files[i]}`, cards[i]);
		changed.add(i);
		n++;
	}
	console.log(`고치기 ${round}: 카드 ${n}장 (원본: review/before/)`);
	// 이번에 바뀐 카드만 다시 채점. 안 바뀐 카드의 지적은 그대로 남김 (코드 검사는 judge 안에서 전부 다시)
	const now = new Set(cards.filter((c, i) => changed.has(i) && (out.cards ?? []).some((x) => x.id === c.id) && ids.includes(c.id) && !bad.has(c.id)).map((c) => c.id));
	const kept = fails.filter((f) => !now.has(f.card_id) && !f.item.startsWith('R'));
	if (!ARGV.verify) {
		fails = kept;
		md.push(`## 고친 뒤 — 다시 채점 안 함 (--verify 로 확인)`, '');
		break;
	}
	fails = now.size ? [...kept, ...(await judge(cards.map(compact), `after_${round}`, now))] : fails;
	save(`review/judge_after_${round}.json`, fails);
	console.log(`고치기 ${round} 뒤: ${fails.length}곳 (${summary(fails)})`);
	md.push(`## 고치기 ${round} 뒤 — ${fails.length}곳`, `> ${summary(fails)}`, '', ...failList(fails), '');
}
if (changed.size) {
	md.push(`## 바뀐 카드 — ${changed.size}장 (원본 → 지금)`, '');
	for (const i of [...changed].sort((a, b) => a - b)) {
		const a = allLines(before[i]).map((l) => l.text);
		const b = allLines(compact(cards[i])).map((l) => l.text);
		md.push(`### ${cards[i].title.korean} \`${cards[i].id}\``, ...a.filter((t) => !b.includes(t)).map((t) => `- ~~${t}~~`), ...b.filter((t) => !a.includes(t)).map((t) => `- **${t}**`), '');
	}
}
console.log('저장:', save('review/review.md', md.join('\n')));
