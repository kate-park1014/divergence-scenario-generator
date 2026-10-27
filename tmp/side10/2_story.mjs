// 2단계: 스토리방 대사 (게임 데이터 형식) — 프롤로그, 방 1·3·5·7·10
// 스토리 방은 모든 플레이어가 보는 고정 뼈대만. 디테일은 카드 칸(2·4·6·8)이 맡으므로 미리 말하지 않음
// 게임 형식 규칙은 src 의 chapterRules.ts / scenarioTool.ts 를 그대로 불러옴 (방 번호만 1,3,5,7,10 으로)
// node --experimental-strip-types --no-warnings tmp/side10/2_story.mjs [--order=1,2]
import path from 'node:path';
import { OUT, ORDERS, STORY_ROOMS, BOSS_ROOM, MAX_LEN, VAGUE, epDir, save, readJson, generate, verbStem } from './lib.mjs';
import { PLACEHOLDER_RULES, NPC_ENTER_EXIT_RULES, OUTPUT_RULES } from '../../src/lib/prompts/chapterRules.ts';
import { buildScenarioTool } from '../../src/lib/prompts/scenarioTool.ts';

const plan = readJson(path.join(OUT, 'plan.json'));
if (!plan) throw new Error('plan.json 없음 — 1_plan.mjs 먼저');

/** 기존 규칙의 방 번호(1,3,5,9,15)를 새 배치(1,3,5,7,10)로 */
const renumber = (s) =>
	s
		.replaceAll('1 → 3 → 5 → 9 → 15', '1 → 3 → 5 → 7 → 10')
		.replaceAll('id: 1, 3, 5, 9, 15', 'id: 1, 3, 5, 7, 10')
		.replaceAll('룸 15', `룸 ${BOSS_ROOM}`)
		.replaceAll('(id: 15)', `(id: ${BOSS_ROOM})`);

const nm = (k) => plan.npcs.find((n) => n.key === k)?.name ?? k;

function prompt(ep, prev) {
	const fin = ep.order === 5;
	const boss = plan.boss_name;
	const npcList = plan.npcs.map((n) => `- ${n.key} = ${n.name} (${n.title}): ${n.role}`).join('\n');
	const slot = (r) => ep.slots.find((s) => s.room === r);

	const SYSTEM = `당신은 웹툰 작가입니다. ${ep.order}화의 스토리방 대사를 씁니다.

# 게임 구조 (중요)
- 한 화 = 방 10개. 스토리방 1, 3, 5, 7, 10 / 카드방 2, 4, 6, 8 / 방 9 휴식
- 이번에 쓰는 것은 스토리방 5개 (rooms id 1, 3, 5, 7, 10). 모든 플레이어가 똑같이 본다
- 카드방은 플레이어마다 다른 카드가 나온다. 카드가 사람 사정·증거·주변 반응 같은 디테일을 맡는다
- 그래서 스토리방은 꼭 일어나야 하는 일만 짧게 맡고, 장소 이름·새 사건·새 인물을 쓰지 않는다
- 카드방이 맡은 내용(아래 "카드가 맡는 것")은 스토리방에서 미리 말하지 않는다
- 방 3·5·7 첫 줄은 앞 카드에서 무슨 일이 있었든 어울리게 시작한다 (특정 사건을 전제하지 않음)
- "탐험대가 위로 향한다" 처럼 이동만 말하는 줄은 쓰지 않는다. 줄마다 이번 화 일(곤란·흔적·행동·결과)에 관한 말

# 쓰는 법
- USER 섹션은 "무슨 일이 일어나는지" 적은 메모다. 그 일만 쓰고 새 사건·새 인물을 지어내지 않는다
- 메모 문장을 대사에 그대로 옮기지 않는다. 인물이 그 상황에서 실제로 할 법한 말로 바꿔 쓴다
- 직설적이고 설명적으로. 비유·은유 금지. 대사와 지문만 읽어도 무슨 일인지 바로 알게 (표정·분위기 묘사로 전하지 않는다)
- 한 줄 ${MAX_LEN}자 이내. 한 대사는 말풍선 하나, 1~2문장
- 다음으로 넘어가는 말은 인물 대사로, 방마다 다르게. "다음 장소로 이동한다" 같은 틀 문장 금지. 어디로 가는지는 쓰지 않는다
- 금지 낱말: ${VAGUE.join(', ')}
- 게임 용어 "보스"·"주인공"·"파티" 를 대사·지문에 쓰지 않는다. 주인공 쪽은 "탐험대" 또는 "일행", 최종보스는 이름이나 흔적으로
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
- 말은 흔적(${ep.boss_trace})으로만 전해진다. narrator 가 그 말을 따옴표로 그대로 옮기거나 NPC 가 전해 준다
- 흔적의 말은 친절한 해결책처럼 들린다. 지문이 수상하게 그리지 않는다`
}
${ep.order > 1 && ep.order < 5 ? `- 핵심 물건 "${plan.key_object}" 이름은 쓰지 않는다 (5화에 밝혀짐)\n` : ''}
# 게임 데이터 형식 (반드시 지킬 것)
${renumber(PLACEHOLDER_RULES)}

${renumber(NPC_ENTER_EXIT_RULES)}

## 방 ${BOSS_ROOM} (보스 룸)
- dialogue(전투 전) + win_dialogue + lose_dialogue 를 모두 쓴다

${OUTPUT_RULES}`;

	const USER = `# ${ep.order}화 메모

## 이 이야기
- 무대: ${plan.stage} — ${plan.setting}
- 이번 화 장소: ${ep.place} / 분위기: ${ep.mood}
- 핵심 물건: ${ep.order === 1 || fin ? plan.key_object : '(이번 화에는 이름을 쓰지 않음)'}
${fin ? `- 최종보스 ${plan.boss_name}: ${plan.boss.look} / 정체: ${plan.boss.truth} / 원하는 것: ${plan.boss.want}\n- 마지막 장면(twist): ${plan.boss.twist}\n` : ''}
## NPC
- 이번 화의 주 NPC: ${ep.npc} = ${nm(ep.npc)}
${npcList}
${prev ? `\n## 앞 화 결말\n${prev.room10}\n` : ''}
## 이번 화: ${ep.title}
- 주인공 행동: ${ep.action}
- 주 NPC 의 곤란: ${ep.trouble}${ep.boss_trace ? `\n- 흔적: ${ep.boss_trace} — 하는 말: "${ep.trace_says}"` : ''}${ep.random_boss ? `\n- 일반 보스: ${ep.random_boss} — ${ep.random_boss_side === 'warn' ? '주인공 행동을 경고하며 막는 쪽. 경고는 맞지만 자기 사정처럼 들려 파티가 안 믿음' : '최종보스 편. 주인공 행동은 안 말리고, 의심하거나 더 캐는 것을 막음'}` : ''}${ep.lesson ? `\n- 앞 화에서 배운 것 (방 3에서 행동으로 보여 줌, 회상 대사 반복 금지): ${ep.lesson}` : ''}

## 방별로 쓸 것
- prologue (3~5줄): ${ep.prologue}
- 방 1 (말 6~12줄): ${ep.room1}
  - 마지막 줄은 목표를 향해 나서는 말
  - 카드가 맡는 것(쓰지 않음): ${slot(2).must}
- 방 3 (말 3~6줄): ${ep.room3}
  - 카드가 맡는 것(쓰지 않음): ${slot(4).must}
- 방 5 (말 3~6줄): ${ep.room5}${fin ? '' : `\n  - 주인공 행동("${ep.action}")을 이 방에서 한다. 하기 직전 파티가 왜 하는지 한 줄 → narrator 가 행동을 분명히 → 당장 좋은 효과 한 줄`}
  - 카드가 맡는 것(쓰지 않음): ${slot(6).must}
- 방 7 (말 3~6줄): ${ep.room7}
  - 카드가 맡는 것(쓰지 않음): ${slot(8).must}
- 방 10 (보스 룸): ${ep.room10}${ep.reveal_room10.length ? `\n  - 이 방에서 밝혀지는 복선: ${ep.reveal_room10.join(' / ')}` : ''}
  - dialogue(전투 전, 말 3~8줄): ${fin ? 'boss 가 막아섬' : 'random_boss 가 나타나 싸우는 이유를 말함'}
  - win_dialogue(말 3~6줄): ${fin ? '주인공 행동을 해내고 끝' : '대가가 분명히 드러남. 다음 화로 이어지는 기미 한 줄'}
  - lose_dialogue(말 1~3줄): 짧게${fin ? `\n- epilogue (3~5줄): ${ep.epilogue}` : ''}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

function tool(order) {
	const t = JSON.parse(JSON.stringify(buildScenarioTool(order).function));
	t.parameters.properties.rooms.description = 'id: 1, 3, 5, 7, 10 순서로 5개';
	return t;
}

const speech = (list = []) => list.filter((d) => d.type === 'speech');
const txt = (d) => d.content?.korean ?? '';

function check(out, ep) {
	const e = [];
	const fin = ep.order === 5;
	const rooms = [...(out.rooms ?? [])].sort((a, b) => a.id - b.id);
	if (rooms.map((r) => r.id).join() !== STORY_ROOMS.join()) e.push(`rooms id 는 1,3,5,7,10 이어야 합니다 (지금 ${rooms.map((r) => r.id)})`);
	if (!(out.prologue?.korean?.length >= 3)) e.push('prologue.korean 3~5줄');
	if (fin && !(out.epilogue?.korean?.length >= 3)) e.push('epilogue.korean 3~5줄');

	const npcKeys = plan.npcs.map((n) => n.key);
	const ok = ['narrator', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4', ...npcKeys, fin ? 'boss' : 'random_boss'];
	const range = { 1: [6, 12], 3: [3, 6], 5: [3, 6], 7: [3, 6], 10: [3, 8] };
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
				if (d.speaker.startsWith('character') && /(님|(?<![글솜맵])씨)([\s,.!?~]|$)/.test(t)) e.push(`파티가 "님/씨" 를 씁니다: "${t}". 이름만`);
			}
		}
	}
	const all = (rs) => rs.flatMap((r) => ['dialogue', 'win_dialogue', 'lose_dialogue'].flatMap((b) => speech(r[b]).map(txt)));
	const prologue = (out.prologue?.korean ?? []).join(' ');
	const every = [prologue, ...(out.epilogue?.korean ?? []), ...all(rooms)].join(' ');
	for (const w of VAGUE) if (every.includes(w)) e.push(`금지 낱말 "${w}"`);
	for (const w of ['보스', '주인공', '파티']) if (every.includes(w)) e.push(`게임 용어 "${w}" 금지 (탐험대·일행·이름으로)`);
	if (fin && /주인공|행동에서 비롯|같은 일|깨뜨/.test([prologue, ...all(rooms.filter((r) => r.id === 1))].join(' '))) e.push('5화 prologue·방 1 에서 원인을 밝히지 않습니다 (깨달음은 방 3)');
	if (!fin) {
		if (every.includes(plan.boss_name)) e.push(`${ep.order}화에 최종보스 이름 "${plan.boss_name}" 금지`);
		if (ep.order > 1 && every.includes(plan.key_object)) e.push(`${ep.order}화에 핵심 물건 "${plan.key_object}" 이름 금지 (5화에 밝혀짐)`);
		const r5 = rooms.find((r) => r.id === 5);
		if (r5 && !all([r5]).join(' ').includes(verbStem(ep.action))) e.push(`방 5에서 주인공 행동 "${ep.action}" 을 분명히 하세요`);
	} else if ([prologue, ...all(rooms.filter((r) => r.id < 5))].join(' ').includes(plan.boss_name)) {
		e.push(`5화 방 5 전에 최종보스 이름 "${plan.boss_name}" 금지`);
	}
	const party = rooms.flatMap((r) => speech(r.dialogue)).filter((d) => d.speaker.startsWith('character'));
	const stiff = party.filter((d) => /[^니]다[.!]?$/.test(txt(d).trim()));
	if (stiff.length > party.length / 3) e.push(`파티 대사가 글말("~다")입니다. 반말 구어체로: ${stiff.slice(0, 3).map((d) => `"${txt(d)}"`).join(', ')}`);
	for (const t of all(rooms)) if (/위로 (향|올라)|계속해서 (위|앞)/.test(t)) e.push(`이동만 말하는 줄: "${t}". 이번 화 일에 관한 말로`);
	for (const r of rooms.filter((r) => [3, 5, 7].includes(r.id))) {
		const last = txt(speech(r.dialogue).at(-1) ?? {});
		if (/이동한다|장소로/.test(last)) e.push(`방 ${r.id} 마지막 줄이 틀 문장입니다: "${last}"`);
	}
	return e;
}

async function run(order) {
	const ep = plan.episodes.find((x) => x.order === order);
	if (process.argv.includes('--recheck')) {
		const f = path.join(epDir(order), 'story.json');
		const old = readJson(f);
		if (old) save(epDir(order), 'story.json', { ...old, errors: check(old, ep) });
		console.log(`${order}화 다시 검사: 오류 ${check(old, ep).length}개`);
		return;
	}
	const prev = plan.episodes.find((x) => x.order === order - 1);
	const dir = epDir(order);
	const base = prompt(ep, prev);
	save(dir, 'story_prompt.md', base);
	const { out, errors } = await generate(base, tool(order), (o) => check(o, ep), { label: `${order}화 story` });
	save(dir, 'story.json', { ...out, errors });
	console.log('저장:', path.join(dir, 'story.json'));
}

// 화끼리 독립 (앞 화는 plan 의 메모만 씀) → 동시에
// --only-failed: 기존 story.json 이 검사에 걸리는 화만 다시 생성
const only = process.argv.includes('--only-failed')
	? ORDERS.filter((o) => {
			const old = readJson(path.join(epDir(o), 'story.json'));
			return !old || check(old, plan.episodes.find((x) => x.order === o)).length;
		})
	: ORDERS;
console.log('대상 화:', only.join(', ') || '없음');
await Promise.all(only.map(run));
