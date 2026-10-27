// 2단계: 스토리방 대사 (게임 데이터 형식) — 프롤로그, 방 1(자세히), 방 3·5·7(짧은 연결), 방 10(보스 룸)
// 게임 형식 규칙은 src 의 chapterRules.ts / scenarioTool.ts 를 그대로 불러옴 (방 번호만 1,3,5,7,10 으로)
// 입력: 1단계 <out>/<id>/arc.json
// node --experimental-strip-types --no-warnings tmp/room10/2_story.mjs --id=modern_whisperweb_0 --order=1
//   --show: Gemini 호출 없이 프롬프트만 저장
import fs from 'node:fs';
import path from 'node:path';
import { args, outDir, save, gemini, ROOT, OUT_ROOT, loadArc } from './lib.mjs';
import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from '../../src/lib/prompts/chapterRules.ts';
import { buildScenarioTool } from '../../src/lib/prompts/scenarioTool.ts';

const VAGUE = ['잔상', '파편', '속삭', '메아리', '그림자', '심연', '운명', '기운', '무언가', '알 수 없는', '듯'];
const MAX_LEN = 60;
const ROOMS = [1, 3, 5, 7, 10];
const BOSS_ROOM = 10;

/** 기존 규칙의 방 번호(1,3,5,9,15)를 새 배치(1,3,5,7,10)로 */
const renumber = (s) =>
	s
		.replaceAll('1 → 3 → 5 → 9 → 15', '1 → 3 → 5 → 7 → 10')
		.replaceAll('id: 1, 3, 5, 9, 15', 'id: 1, 3, 5, 7, 10')
		.replaceAll('룸 15', `룸 ${BOSS_ROOM}`)
		.replaceAll('(id: 15)', `(id: ${BOSS_ROOM})`);

async function npcNames(theme) {
	try {
		const m = await import(`../../src/lib/data/sample/npc/${theme}_npc_pool.ts`);
		const pool = m[`${theme}_npc_pool`] ?? [];
		return Object.fromEntries(pool.map((n) => [n.key, n.name?.korean ?? n.key]));
	} catch {
		return {};
	}
}

function prompt(arc, ep, prev) {
	const fin = ep.order === 5;
	const boss = arc.boss_name;
	const npcList = arc.npcs.map((n) => `- ${n.key} = ${arc.names[n.key] ?? n.key} (${n.title}): ${n.intro}`).join('\n');
	const nm = (k) => arc.names[k] ?? k;

	const SYSTEM = `당신은 웹툰 작가입니다. ${ep.order}화의 스토리방 대사를 씁니다.

# 게임 구조 (중요)
- 한 화 = 방 10개. 스토리방 1, 3, 5, 7, 10 / 카드방 2, 4, 6, 8 / 방 9 휴식
- 이번에 쓰는 것은 스토리방 5개 (rooms id 1, 3, 5, 7, 10)
- 사건과 장소는 카드방에서 카드가 정한다. 플레이어마다 다른 카드를 만나 다른 곳에 도착한다
- 그래서 방 3·5·7은 장소 이름, 새 사건, 새 인물을 쓰지 않는다. 앞 카드방에서 무슨 일이 있었든 어울리게 흐름만 이어 준다
- 앞 카드에 대한 반응 줄은 나중에 따로 붙인다. 지금은 어떤 카드 뒤에도 맞는 공통 줄만 쓴다
- 방 1은 이번 화의 설명을 충분히 한다. 방 10은 보스 룸

# 쓰는 법
- USER 섹션은 "무슨 일이 일어나는지" 적은 메모다. 그 일만 쓰고 새 사건·새 인물을 지어내지 않는다
- 메모 문장을 대사에 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말로 바꿔 쓴다
- 직설적이고 설명적으로. 비유·은유 금지. 대사와 지문만 읽어도 무슨 일인지 바로 알게 (표정·분위기 묘사로 전하지 않는다)
- 한 줄 ${MAX_LEN}자 이내. 한 대사는 말풍선 하나, 1~2문장
- 다음으로 넘어가는 말은 인물 대사로, 방마다 다르게. "다음 장소로 이동한다" 같은 틀 문장 금지. 어디로 가는지는 쓰지 않는다
- 금지 낱말: ${VAGUE.join(', ')}
- direction 의 focus 는 쓰지 않는다 (enter·exit 등 필요한 연출만)
- prologue${fin ? '·epilogue' : ''} 는 3인칭. "나는·우리는" 같은 1인칭 금지

# 화자
- narrator: 장면·행동 묘사. 짧고 건조한 "~다" 문체
- character_any: 파티가 하는 중요한 말 (단서·결론·결심). 줄마다 살아있는 파티원 중 한 명이 무작위로 말한다
  - 누가 말해도 말이 되는 한 줄로 쓴다. character_any 끼리 묻고 답하지 않고, 한 사람의 말을 여러 줄로 잇지 않는다
  - 파티가 1명일 수도 있다. 다른 파티원에게 제안하지 않고("~하는 게 어때?"), 바로 앞 파티 대사에 동의·의심·반대하지 않는다
- character_1~4: 짧은 감정 반응 한 마디. 그 파티원이 죽었으면 줄이 빠진다
  - 지워도 흐름이 이어지게 쓴다. 질문·핵심 정보를 넣지 않고, 이 줄에 누가 대답하지 않는다. 혼잣말로도 말이 되게
- 파티 말투: 반말 구어체로 통일 (NPC 에게도). NPC 는 이름으로만 부른다 ("님"·"씨" 금지). "~한다, ~했다" 같은 글말 금지
- NPC: 아래 NPC 목록의 key 를 speaker 로 쓴다. 목록에 없는 NPC 는 쓰지 않는다. NPC 도 구어체
${fin ? `- boss: 최종보스 ${boss}. 방 5부터 나온다. random_boss 는 쓰지 않는다` : `- random_boss: 이번 화 일반 보스 (${ep.random_boss}). 방 ${BOSS_ROOM} 에만 나온다. 이름·외형·사연은 쓰지 않는다. 이름이 꼭 필요하면 {random_boss}
- boss 는 쓰지 않는다`}
- 주고받는 대화는 character_any ↔ NPC / ${fin ? 'boss' : 'random_boss'} 사이에서 한다

# 최종보스 ${boss}
${
	fin
		? `- 프롤로그·방 1·방 3 에는 이름을 쓰지 않는다. 방 5 에서 처음 모습을 드러낸다 (speaker 'boss')
- 이름은 NPC 가 전하거나 화면에 이름이 뜨는 장면으로 소개한 뒤에 쓴다. 파티가 먼저 이름을 말하지 않는다
- 끝까지 주인공 행동을 막다가 진다`
		: `- 이번 화에는 얼굴·몸·이름이 나오지 않는다. "${boss}" 라는 이름을 어디에도 쓰지 않는다
- 말은 흔적(${ep.boss_trace})으로만 전해진다. narrator 가 그 글을 따옴표로 그대로 옮기거나 NPC 가 읽어 준다
- 흔적의 말은 친절한 해결책처럼 들린다. 지문이 수상하게 그리지 않는다`
}
${ep.order > 1 && ep.order < 5 ? `- 핵심 물건 "${arc.key_object}" 이름은 쓰지 않는다 (5화에 밝혀짐)\n` : ''}
# 게임 데이터 형식 (반드시 지킬 것)
${renumber(PLACEHOLDER_RULES)}

${renumber(NPC_ENTER_EXIT_RULES)}

## 방 ${BOSS_ROOM} (보스 룸)
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다

${OUTPUT_RULES}`;

	const USER = `# ${ep.order}화 메모

## 이 이야기
- 세계: ${arc.world}
- 핵심 물건: ${arc.key_object}${ep.order === 5 ? ` — ${arc.what}` : ''}

## NPC
- 이번 화의 주 NPC: ${ep.npc} = ${nm(ep.npc)}
${npcList}
${prev ? `\n## 앞 화 결말\n${prev.room10}\n` : ''}
## 이번 화: ${ep.title}
- 주인공 행동: ${ep.action}${ep.boss_trace ? `\n- 흔적: ${ep.boss_trace}` : ''}${ep.random_boss ? `\n- 일반 보스: ${ep.random_boss} — ${ep.random_boss_side === 'warn' ? '주인공 행동을 경고하며 막는 쪽. 경고는 맞지만 자기 사정처럼 들려 파티가 안 믿음' : '최종보스 편. 주인공 행동은 안 말리고, 의심하거나 더 캐는 것을 막음'}` : ''}

## 방별로 쓸 것
- prologue (3~5줄): ${ep.prologue}
- 방 1 (말 8~16줄, 자세히): ${ep.room1}
  - 주 NPC 의 사정, 흔적의 말, 파티의 반응, 이번 화 목표를 분명히. 마지막 줄은 목표를 하러 나서는 말
- 방 3 (말 3~6줄): ${ep.flow3}
- 방 5 (말 3~6줄): ${ep.flow5}${fin ? '' : `\n  - 주인공 행동("${ep.action}")을 이 방에서 한다. narrator 가 분명히`}
- 방 7 (말 3~6줄): ${ep.flow7}
- 방 10 (보스 룸): ${ep.room10}
  - dialogue(전투 전, 말 3~8줄): ${fin ? 'boss 가 막아섬' : 'random_boss 가 나타나 싸우는 이유를 말함'}
  - win_dialogue(말 3~6줄): ${fin ? '주인공 행동을 해내고 끝' : '대가가 분명히 드러남. 다음 화로 이어지는 기미 한 줄'}
  - lose_dialogue(말 1~3줄): 짧게${fin ? '\n- epilogue (3~5줄): 돌아온 거리의 모습으로 끝낸다' : ''}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

function tool(order) {
	const t = JSON.parse(JSON.stringify(buildScenarioTool(order).function));
	t.parameters.properties.rooms.description = 'id: 1, 3, 5, 7, 10 순서로 5개';
	return t;
}

const speech = (list = []) => list.filter((d) => d.type === 'speech');
const txt = (d) => d.content?.korean ?? '';

function check(out, arc, ep) {
	const e = [];
	const fin = ep.order === 5;
	const rooms = [...(out.rooms ?? [])].sort((a, b) => a.id - b.id);
	if (rooms.map((r) => r.id).join() !== ROOMS.join()) e.push(`rooms id 는 1,3,5,7,10 이어야 합니다 (지금 ${rooms.map((r) => r.id)})`);
	if (!(out.prologue?.korean?.length >= 3)) e.push('prologue.korean 3~5줄');
	if (fin && !(out.epilogue?.korean?.length >= 3)) e.push('epilogue.korean 3~5줄');

	const npcKeys = arc.npcs.map((n) => n.key);
	const ok = ['narrator', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4', ...npcKeys, fin ? 'boss' : 'random_boss'];
	const range = { 1: [8, 16], 3: [3, 6], 5: [3, 6], 7: [3, 6], 10: [3, 8] };
	for (const r of rooms) {
		const [lo, hi] = range[r.id] ?? [1, 99];
		const n = speech(r.dialogue).length;
		if (n < lo || n > hi) e.push(`방 ${r.id} 말 줄 수는 ${lo}~${hi} (지금 ${n})`);
		if (r.id === BOSS_ROOM) {
			if (!(speech(r.win_dialogue).length >= 3)) e.push(`방 ${BOSS_ROOM} win_dialogue 는 말 3~6줄`);
			if (!speech(r.lose_dialogue).length) e.push(`방 ${BOSS_ROOM} lose_dialogue 가 없습니다`);
		}
		for (const block of ['dialogue', 'win_dialogue', 'lose_dialogue']) {
			const entered = new Set();
			for (const d of r[block] ?? []) {
				if (d.type === 'direction' && d.action === 'enter') entered.add(d.speaker);
				if (d.type !== 'speech') continue;
				const t = txt(d);
				if (!ok.includes(d.speaker)) e.push(`방 ${r.id} 화자 "${d.speaker}" 는 쓸 수 없습니다`);
				if (npcKeys.includes(d.speaker) && !entered.has(d.speaker)) {
					e.push(`방 ${r.id} ${block}: ${d.speaker} 가 enter 없이 말합니다`);
					entered.add(d.speaker);
				}
				if (t.length > MAX_LEN) e.push(`방 ${r.id} 줄이 ${MAX_LEN}자를 넘습니다: "${t}"`);
				if (/character_/.test(t)) e.push(`방 ${r.id} 대사 안에 placeholder 가 있습니다: "${t}"`);
				if (!fin && d.speaker === 'random_boss' && r.id !== BOSS_ROOM) e.push(`random_boss 는 방 ${BOSS_ROOM} 에만 (방 ${r.id})`);
				if (fin && d.speaker === 'boss' && r.id < 5) e.push(`boss 는 방 5부터 (방 ${r.id})`);
				if (d.speaker.startsWith('character') && /님|씨[^앗]/.test(t)) e.push(`파티가 "님/씨" 를 씁니다: "${t}". 이름만`);
			}
		}
	}
	const all = (rs) => rs.flatMap((r) => ['dialogue', 'win_dialogue', 'lose_dialogue'].flatMap((b) => speech(r[b]).map(txt)));
	const prologue = (out.prologue?.korean ?? []).join(' ');
	const every = [prologue, ...(out.epilogue?.korean ?? []), ...all(rooms)].join(' ');
	for (const w of VAGUE) if (every.includes(w)) e.push(`금지 낱말 "${w}"`);
	if (!fin) {
		if (every.includes(arc.boss_name)) e.push(`${ep.order}화에 최종보스 이름 "${arc.boss_name}" 금지`);
		if (ep.order > 1 && every.includes(arc.key_object)) e.push(`${ep.order}화에 핵심 물건 "${arc.key_object}" 이름 금지 (5화에 밝혀짐)`);
	} else if ([prologue, ...all(rooms.filter((r) => r.id < 5))].join(' ').includes(arc.boss_name)) {
		e.push(`5화 방 5 전에 최종보스 이름 "${arc.boss_name}" 금지`);
	}
	const party = rooms.flatMap((r) => speech(r.dialogue)).filter((d) => d.speaker.startsWith('character'));
	const stiff = party.filter((d) => /[^니]다[.!]?$/.test(txt(d).trim()));
	if (stiff.length > party.length / 3) e.push(`파티 대사가 글말("~다")입니다. 반말 구어체로: ${stiff.slice(0, 3).map((d) => `"${txt(d)}"`).join(', ')}`);
	for (const r of rooms.filter((r) => [3, 5, 7].includes(r.id))) {
		const last = txt(speech(r.dialogue).at(-1) ?? {});
		if (/이동한다|장소로/.test(last)) e.push(`방 ${r.id} 마지막 줄이 틀 문장입니다: "${last}"`);
	}
	if (!fin) {
		const r5 = rooms.find((r) => r.id === 5);
		let verb = ep.action.replace(/[.\s]+$/, '').split(' ').pop().replace(/(한다|는다|다)$/, '');
		// "퍼뜨린"·"알린" 처럼 끝 글자에 받침 ㄴ 이 붙은 꼴은 그 글자를 뗌 (퍼뜨렸다·알렸다 와 맞추려고)
		const last = verb.charCodeAt(verb.length - 1) - 0xac00;
		if (verb.length > 1 && last >= 0 && last % 28 === 4) verb = verb.slice(0, -1);
		if (r5 && !all([r5]).join(' ').includes(verb)) e.push(`방 5에서 주인공 행동 "${ep.action}" 을 분명히 하세요`);
	}
	return e;
}

function toMd(out, arc, ep) {
	const who = (sp) => {
		if (sp === 'narrator') return '나레이션';
		if (sp === 'character_any') return '파티(아무나)';
		if (/^character_\d$/.test(sp)) return `파티${sp.slice(-1)}`;
		if (sp === 'random_boss') return `일반 보스(${ep.random_boss})`;
		if (sp === 'boss') return arc.boss_name;
		return arc.names[sp] ?? sp;
	};
	const row = (d) =>
		d.type === 'speech' ? `- **${who(d.speaker)}**: ${txt(d)}` : `- _(${d.action}: ${who(d.speaker)})_`;
	const md = [`## ${ep.order}화 — ${ep.title}`, '', '**프롤로그**', ...(out.prologue?.korean ?? []).map((t) => `> ${t}`), ''];
	for (let id = 1; id <= 10; id++) {
		const r = out.rooms.find((x) => x.id === id);
		if (r) {
			md.push(`**방 ${id}**`, ...(r.dialogue ?? []).map(row));
			if (r.win_dialogue) md.push('', '_(전투 — 승리)_', ...r.win_dialogue.map(row));
			if (r.lose_dialogue) md.push('', '_(전투 — 패배)_', ...r.lose_dialogue.map(row));
		} else md.push(id === 9 ? '_방 9 휴식_' : `_방 ${id} 카드_`);
		md.push('');
	}
	if (out.epilogue) md.push('**에필로그**', ...out.epilogue.korean.map((t) => `> ${t}`), '');
	return md.join('\n');
}

const a = args();
const id = a.id ?? 'modern_whisperweb_0';
const arc = JSON.parse(fs.readFileSync(path.join(ROOT, OUT_ROOT, id, 'arc.json'), 'utf8'));
const orig = loadArc(id);
arc.boss_name = orig.boss_name_korean;
arc.names = await npcNames(orig.theme);

for (const order of String(a.order ?? 1).split(',').map(Number)) {
	const ep = arc.episodes.find((x) => x.order === order);
	const prev = arc.episodes.find((x) => x.order === order - 1);
	const dir = outDir(id, order);
	const base = prompt(arc, ep, prev);
	save(dir, 'story_prompt.md', base);
	if (a.show) {
		console.log('프롬프트 저장:', path.join(dir, 'story_prompt.md'));
		continue;
	}
	let out = null;
	let errors = [];
	for (let i = 0; i < 3; i++) {
		const msg = errors.length
			? `${base}\n\n## 지난 출력의 오류 (이것만 고치고 나머지는 그대로)\n${errors.map((x) => `- ${x}`).join('\n')}\n\n지난 출력:\n${JSON.stringify(out)}`
			: base;
		out = await gemini(msg, tool(order), { base: a.base, temperature: Number(a.temperature ?? 0.8) });
		errors = check(out, arc, ep);
		console.log(`${order}화 시도 ${i + 1}: 오류 ${errors.length}개`);
		errors.forEach((x) => console.log('  - ' + x));
		if (!errors.length) break;
	}
	save(dir, 'story.json', { ...out, errors });
	console.log('저장:', save(dir, 'story.md', toMd(out, arc, ep) + (errors.length ? `\n## 남은 오류\n${errors.map((x) => `- ${x}`).join('\n')}\n` : '')));
}
