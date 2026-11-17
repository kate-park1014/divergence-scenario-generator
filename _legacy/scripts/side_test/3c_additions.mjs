// 3c단계: additions (Gemini 1콜) — 방 제목, 방에 끼워 넣는 LLM 줄 4개, 카드 인물 말투·얼굴, 기억 문구
// 표시(flags) 정의는 카드 단계에서 정한 것(cards/*._side.flags)을 그대로 씀 + paid_network
// 줄 배치는 rewrite_test 와 같음: 방 3 칸 A 기억 / 방 5 칸 B 기억 / 동행이 말하는 방 호감도 / 방 10 불리한 표시(보스가 말함)
// + 평판 줄 12개: 방 3 투쟁·협력 / 방 5 개인·공동체 / 방 7 질서·자유 (그 축에서 20 이상 기운 쪽) / 방 10 보스가 6방향 평판에 반응 (가장 뚜렷한 평판)
// 출력: additions.json (webfront 형식, 얼굴 URL 포함). 5단계가 이것을 씀
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/3c_additions.mjs [--id=…] [--order=1] [--model=…]
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, ID, ORDER, OUT, STORY_ROOMS, ARGV, loadArc, save, readJson, generate, S } from './lib.mjs';
import { numberedRooms, STYLE, toWebfrontAdditions } from '../../src/lib/prompts/cardGen.ts';

const arc = await loadArc();
const design = readJson('design.json');
const story = readJson('story.json');
const comp = design.npc;
const FINAL = ORDER === 5;
const bossSpeaker = FINAL ? 'boss' : 'random_boss';
const cardDir = path.join(OUT, 'cards');
const cards = fs.readdirSync(cardDir).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(cardDir, f), 'utf8')));

// 얼굴 풀 (webfront portraits). 동행 얼굴은 빼고 번호를 매김 (한 시나리오에 같은 얼굴 두 번 금지)
const WEB = path.resolve(ROOT, process.env.WEBFRONT_DATA_DIR ?? '../project-mj-webfront/src/routes/(app)/test/adventure/data');
const poolFile = path.join(WEB, 'portraits', `${ID}.json`);
const pool = fs.existsSync(poolFile) ? JSON.parse(fs.readFileSync(poolFile, 'utf8')) : [];
// NPC 얼굴: side_test/faces.json (rewrite_test 시나리오의 actors 에서 옮겨 둠)
const companion = (JSON.parse(fs.readFileSync(path.join(ROOT, 'src/lib/data/storyarc/side_test/faces.json'), 'utf8'))[ID] ?? {})[design.npc] ?? { name: { korean: design.npc_name } };
// --rep-only: 기존 additions(방 제목·기억/호감도/표시 줄·인물·기억 문구)는 그대로, 평판 대사·평판 카드 인물·표시만 더함
const REP_ONLY = !!ARGV['rep-only'];
const prev = REP_ONLY ? readJson('additions.json') : null;
const usedFaces = new Set(Object.values(prev?.actors ?? {}).map((a) => a.base_image_url).filter(Boolean));
const faces = pool.filter((p) => p.base_image_url !== companion.base_image_url && !usedFaces.has(p.base_image_url));

const people = Object.fromEntries(cards.filter((c) => !REP_ONLY || (c._side.rep && !prev.actors?.[c._side.person.id])).map((c) => [c._side.person.id, c._side.person]));
const plantOf = (slot) => cards.find((c) => c.kind === 'plant' && c._side.slot === slot);
const seedsOf = (c) => [...new Set(c.choices.map((ch) => ch.seed).filter(Boolean))];
const allSeeds = REP_ONLY ? [] : [...new Set(cards.flatMap(seedsOf))];
const flags = Object.assign({}, ...cards.map((c) => c._side.flags ?? {}));
const badFlags = Object.keys(flags).filter((k) => flags[k].kind === 'bad');
const roomOf = (id) => story.rooms.find((r) => r.id === id);
const speaksIn = (id) => roomOf(id)?.dialogue.some((l) => l.speaker === comp);
const echoRoom = [7, 5, 3, 1].find(speaksIn);
const roomSpeakers = (id) => [...new Set(roomOf(id).dialogue.map((l) => l.speaker).filter((x) => x && x !== 'narrator'))];

const DIRS = ['fighting-', 'fighting+', 'community-', 'community+', 'reason-', 'reason+'];
const DIR_NOTE = {
	'fighting-': '힘으로 밀어붙이고 맞서 싸우는 사람',
	'fighting+': '남을 돕고 손을 내미는 사람',
	'community-': '자기 몫부터 챙기는 사람',
	'community+': '모두를 위해 나서는 사람',
	'reason-': '규칙과 절차를 지키는 사람',
	'reason+': '규칙보다 마음 가는 대로 하는 사람'
};
const REP_MIN = 20;
const AXIS_ROOM = { fighting: 3, community: 5, reason: 7 };
const repPlan = [
	...DIRS.map((d) => {
		const ax = d.slice(0, -1);
		return { room: AXIS_ROOM[ax], if: 'lean', dir: d, among: [`${ax}-`, `${ax}+`], speaker: null, note: `평판 "${DIR_NOTE[d]}"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로` };
	}),
	...DIRS.map((d) => ({ room: 10, if: 'lean', dir: d, among: DIRS, speaker: bossSpeaker, note: `보스가 주인공의 평판 "${DIR_NOTE[d]}"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지` }))
];
const PLAN = [
	{ room: 3, if: 'seed', among: seedsOf(plantOf('A')), speaker: null, note: '칸 A 심기 카드에서 주인공이 한 일을 주인공·동행이 떠올림' },
	{ room: 5, if: 'seed', among: seedsOf(plantOf('B')), speaker: null, note: '칸 B 심기 카드에서 주인공이 한 일을 주인공·동행이 떠올림' },
	{ room: echoRoom ?? 7, if: 'echo', speaker: echoRoom ? comp : 'character_any', note: '동행 호감도가 높을 때 동행이 주인공에게 하는 말' },
	{ room: 10, if: 'flag', among: badFlags, speaker: bossSpeaker, note: '불리한 표시의 boss_line 에 적힌 일을 보스 쪽에서 말함. 보스는 카드 인물을 모르고 주인공이 카드에서 한 일도 모름 (카드 인물 이름 금지)' },
	...repPlan
].filter((x) => (REP_ONLY ? x.if === 'lean' : x.if === 'echo' || x.if === 'lean' || x.among.length));

const summary = cards.map((c) => ({
	id: c.id,
	slot: c._side.slot,
	kind: c.kind,
	person: c._side.person,
	dialogue: c.dialogue.map((l) => `${l.speaker}: ${l.content.korean}`),
	choices: c.choices.map((ch) => ({ path: ch.path, text: ch.text.korean, seed: ch.seed, flag: ch.flag, result: ch.result.map((l) => `${l.speaker}: ${l.content.korean}`) }))
}));

const prompt = `당신은 선택형 게임의 작가입니다. ${ORDER}화 스토리 방 5개와 카드 ${cards.length}장이 완성되었습니다. 이것을 보고 additions(방 제목, 방에 끼워 넣는 줄, 인물 말투·얼굴, 기억 문구)를 만듭니다.

# 이번 화
- 장소: ${design.place} (무대 ${arc.stage}) / 동행: \`${comp}\` ${design.npc_name} / ${FINAL ? `최종보스: ${arc.boss_name_korean} (speaker boss)` : `일반 보스: ${design.random_boss} (speaker random_boss)`}

# 스토리 원문 (줄 번호 = after_line 기준. 그 줄 뒤에 들어감, 0 = 맨 앞)
${numberedRooms(story)}

# 카드
${JSON.stringify(summary, null, 1)}

# 표시 (보스 방)
${JSON.stringify(flags, null, 1)}

# 만들 것
1. rooms_title: ${REP_ONLY ? '이미 있음 — 비워 둠' : `스토리 방 ${STORY_ROOMS.join(', ')} 마다 짧은 방 제목`}
2. lines: 아래 ${PLAN.length}줄. 방마다 정해진 조건 하나
   - lines 배열 길이는 정확히 ${PLAN.length}. 아래 번호 순서 그대로 번호 하나에 1줄
   - "또는"으로 적힌 후보는 그중 하나만 골라 if_value 에 적음. 후보마다 따로 줄을 만들지 않음
${PLAN.map((x, i) => `   ${i + 1}) 방 ${x.room}: ${x.if === 'echo' ? '조건 동행 호감도 (코드가 echo >= 60 으로)' : x.if === 'lean' ? `조건 평판 ${x.dir} (코드가 정함, if_value 비움)` : `조건 ${x.if} = ${x.among.join(' 또는 ')} 중 하나`}. ${x.note}. 화자 ${x.speaker ? `\`${x.speaker}\`` : `그 방 원문 인물(${roomSpeakers(x.room).join(', ')}) 또는 character_any`}`).join('\n')}
   - after_line: 그 줄까지 나온 것만 말함. 뒤 줄에서 처음 나오는 소리·물건·사실을 미리 말하지 않음. 앞 줄에 바로 이어지는 말로
   - 장면 분위기에 맞게. 누가 막아서거나 다투는 중에는 응원·감상 대신 그 상황에 대한 말
   - 기억 줄: 카드 결과에 나온 사람·물건으로. 회수 카드에서만 밝혀지는 사실은 미리 말하지 않음
   - 말투: 원문에서 그 화자가 쓰는 말투 그대로
   - intent(무엇을 말하는지), example(그대로 써도 되는 대사 한 줄), emotion(base/happy/sad/angry)
3. actors: 카드 인물 ${Object.keys(people).join(', ') || '(없음)'} 모두. style = 카드 대사에서 보이는 말투 한 줄 (예: "퉁명스러운 존댓말")
   - 얼굴: 아래 풀에서 역할이 맞는 번호 portrait_no (한 번호는 한 인물만). 맞는 얼굴이 없으면 portrait_needed ("<나이대> <성별> <역할>. <옷차림·소품>, <인상>")
${REP_ONLY ? '' : `   - 동행 style 도: \`${comp}\` 원문 말투 한 줄`}
4. seeds: ${REP_ONLY ? '이미 있음 — 비워 둠' : `기억 ${allSeeds.join(', ')} 모두.`} korean = 주인공이 한 일 한 줄 ("~함"으로 끝, 카드 결과와 맞게), english

## 얼굴 풀 (번호. 역할)
${faces.map((p, i) => `${i + 1}. ${p.note}`).join('\n') || '(없음 — 모두 portrait_needed)'}

${STYLE}`;

const LINE_ITEM = {
	type: 'object',
	properties: { room: { type: 'integer' }, after_line: { type: 'integer' }, speaker: S, if_value: S, intent: S, example: S, emotion: { type: 'string', enum: ['base', 'happy', 'sad', 'angry'] } },
	required: ['room', 'after_line', 'speaker', 'intent', 'example', 'emotion']
};
const tool = {
	name: 'episode_additions',
	description: '한 화의 additions',
	parameters: {
		type: 'object',
		properties: {
			rooms_title: { type: 'array', items: { type: 'object', properties: { room: { type: 'integer' }, title: S }, required: ['room', 'title'] } },
			lines: { type: 'array', items: LINE_ITEM },
			actors: { type: 'array', items: { type: 'object', properties: { id: S, style: S, portrait_no: { type: 'integer' }, portrait_needed: S }, required: ['id', 'style'] } },
			seeds: { type: 'array', items: { type: 'object', properties: { key: S, korean: S, english: S }, required: ['key', 'korean', 'english'] } }
		},
		required: REP_ONLY ? ['lines', 'actors'] : ['rooms_title', 'lines', 'actors', 'seeds']
	}
};

function check(o) {
	const e = [];
	const titled = new Set((o.rooms_title ?? []).map((r) => r.room));
	if (!REP_ONLY) for (const id of STORY_ROOMS) if (!titled.has(id)) e.push(`방 ${id} 제목이 없음`);
	const lines = o.lines ?? [];
	if (lines.length !== PLAN.length) e.push(`lines 는 ${PLAN.length}줄 (지금 ${lines.length})`);
	PLAN.forEach((x, i) => {
		const l = lines[i];
		if (!l) return;
		const at = `lines[${i}] 방 ${x.room}`;
		if (l.room !== x.room) e.push(`${at}: room 은 ${x.room}`);
		const n = roomOf(x.room)?.dialogue.length ?? 0;
		if (!(l.after_line >= 0 && l.after_line <= n)) e.push(`${at}: after_line 은 0~${n}`);
		const ok = x.speaker ? [x.speaker] : [...roomSpeakers(x.room), 'character_any'];
		if (!ok.includes(l.speaker)) e.push(`${at}: 화자는 ${ok.join(', ')} 중 (지금 ${l.speaker})`);
		if (x.if !== 'lean' && x.among && !x.among.includes(l.if_value)) e.push(`${at}: if_value 는 ${x.among.join(', ')} 중`);
		if ((x.if === 'flag' || x.room === 10) && Object.values(people).some((p) => (l.example ?? '').includes(p.name))) e.push(`${at}: 보스 줄에 카드 인물 이름 금지`);
		if (x.if === 'lean' && /투쟁|협력|개인|공동체|질서|자유|평판/.test(l.example ?? '')) e.push(`${at}: 축 이름·"평판" 낱말 대신 주인공이 한 일로 말함`);
	});
	const got = new Set((o.actors ?? []).map((a) => a.id));
	for (const id of [...(REP_ONLY ? [] : [comp]), ...Object.keys(people)]) if (!got.has(id)) e.push(`actors 에 ${id} 가 없음`);
	const nos = (o.actors ?? []).map((a) => a.portrait_no).filter((n) => n);
	if (new Set(nos).size !== nos.length) e.push('portrait_no 는 한 번호에 한 인물만');
	for (const n of nos) if (n < 1 || n > faces.length) e.push(`portrait_no ${n} 는 1~${faces.length}`);
	const sk = new Set((o.seeds ?? []).map((x) => x.key));
	for (const k of allSeeds) if (!sk.has(k)) e.push(`seeds 에 ${k} 가 없음`);
	return e;
}

save('steps/additions_prompt.md', prompt);
const { out, errors } = await generate(prompt, tool, check, { label: `${ORDER}화 additions`, temperature: 0.7 });
save('steps/additions_raw.json', { ...out, errors });

const rooms = {};
for (const r of out.rooms_title ?? []) rooms[r.room] = { title: { korean: r.title }, dialogue: [] };
PLAN.forEach((x, i) => {
	const l = out.lines?.[i];
	if (REP_ONLY) rooms[x.room] ??= { dialogue: [] };
	if (!l || !rooms[x.room]) return;
	const cond = x.if === 'echo' ? { stat: 'echo', op: '>=', value: 60 } : x.if === 'lean' ? { leaning: x.dir, among: x.among, min: REP_MIN } : { [x.if]: l.if_value };
	rooms[x.room].dialogue.push({ after_line: l.after_line, line: { type: 'speech', speaker: l.speaker, if: cond, source: 'llm', intent: l.intent, example: { korean: l.example }, emotion: l.emotion } });
});
for (const r of Object.values(rooms)) if (!r.dialogue.length) delete r.dialogue;

const style = Object.fromEntries((out.actors ?? []).map((a) => [a.id, a]));
const actors = {
	[comp]: { ...companion, style: { korean: style[comp]?.style ?? '원문 대사 말투 그대로' } },
	...Object.fromEntries(
		Object.entries(people).map(([id, p]) => {
			const a = style[id] ?? {};
			return [id, { name: { korean: p.name }, style: { korean: a.style ?? p.role }, ...(a.portrait_no && { portrait_no: a.portrait_no }), ...(!a.portrait_no && a.portrait_needed && { portrait_needed: { korean: a.portrait_needed } }) }];
		})
	)
};
const seeds = Object.fromEntries((out.seeds ?? []).map((x) => [x.key, { korean: x.korean, english: x.english }]));
const flagDefs = Object.fromEntries(Object.entries(flags).map(([k, { kind, ...v }]) => [k, v]));
const additions = toWebfrontAdditions({ scenario_id: null, // 5단계에서 실제 id 로
	 actors, seeds, flags: flagDefs, rooms }, faces);
let final = additions;
if (REP_ONLY) {
	// 기존 방에서 예전 평판 줄을 빼고 새 평판 줄을 더함
	const merged = JSON.parse(JSON.stringify(prev.rooms ?? {}));
	for (const r of Object.values(merged)) if (r.dialogue) r.dialogue = r.dialogue.filter((d) => !('leaning' in (d.line.if ?? {})));
	for (const [id, r] of Object.entries(additions.rooms)) (merged[id] ??= {}).dialogue = [...(merged[id].dialogue ?? []), ...(r.dialogue ?? [])];
	const { [comp]: _, ...newActors } = additions.actors;
	final = { ...prev, rooms: merged, actors: { ...prev.actors, ...newActors }, flags: additions.flags };
	delete final.errors;
}
console.log('저장:', save('additions.json', { ...final, errors }), `(남은 형식 오류 ${errors.length}개)`);
