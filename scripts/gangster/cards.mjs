// 갱스터 이야기 카드: story.json 의 카드 칸 설계(design.card_plan + episodes[].cards) + 그 화 시나리오(scenario_0N.json) → webfront 카드 형식
// side_test/3_cards.mjs 를 옮겨 와 갱스터 방 구조(스토리 1·3·5·7·9·10, 방 9 = 휴식 전 → 야영지 → 상대)에 맞춤.
// 카드 룰은 webfront adventure CLAUDE.md 최신(2026-11-05) 기준:
//  - 칸 A 1→3 / B 3→5 / C 5→7 / D 7→9 (방 9 휴식 전 대화 앞)
//  - 기본: A·B 심기 1 + 일반 2, C·D 회수 2 + 일반 1. 기억 A→C, B→D
//  - 성향(평판) 카드: 1화 칸 B·D, 2화부터 A·B·C·D. 칸마다 6방향 1장씩 (condition leaning, min 20)
//  - 확률 선택지 risk: easy mid / hard high / fun low. 조건 선택지(gold·lock·stat)·회수 카드·fun 이 아닌 이벤트 선택지는 없음
//  - 이벤트 5종 × 1, MBTI 잠금 4, 강제 사건 1 (side_test 자리표 그대로)
// 실행: node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/gangster/cards.mjs --id=rat --order=1 [--model=…] [--fresh]
// 출력: gangster_test/<id>/cards/0N/card_0N_*.json (카드만), cards/additions_0N.json, cards/cards_0N.md (읽기용), cards/steps/0N/ (프롬프트·중간 결과)
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { ROOT, MAX_LEN, ARGV, npcNames, gemini, S } from '../side_test/lib.mjs';
import { BELITTLE, META } from '../../src/lib/prompts/cardGenSeq.ts';
import { STYLE } from '../../src/lib/prompts/cardGen.ts';

const ID = ARGV.id ?? 'rat';
const ORDER = Number(ARGV.order ?? 1);
const NN = String(ORDER).padStart(2, '0');
const DIR = path.join(ROOT, 'src/lib/data/storyarc/styles/gangster_test', ID);
const CARD_DIR = path.join(DIR, 'cards', NN);
const STEP_DIR = path.join(DIR, 'cards/steps', NN);
const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
function save(file, data) {
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, typeof data === 'string' ? data : JSON.stringify(data, null, '\t') + '\n');
	return file;
}

const story = readJson(path.join(DIR, 'story.json'));
const ep = story.episodes.find((e) => e.order === ORDER);
const plan0 = story.design.card_plan;
const cd = ep?.cards;
if (!ep || !cd) throw new Error(`${ID} ${ORDER}화에 cards 설계가 없음 (story.json episodes[].cards)`);
const scenFile = path.join(DIR, `scenario_${NN}.json`);
if (!fs.existsSync(scenFile)) throw new Error(`${scenFile} 없음 — 먼저 npm run gen:gangster-scenarios -- --keys=${ID} --orders=${ORDER}`);
const scen = readJson(scenFile);
const comp = story.npcs[0].key;
const names = await npcNames(story.theme ?? 'modern');
const compName = names[comp] ?? comp;
const FINAL_NAME = story.design.final.name;
const FINAL = ORDER === 5;

// 칸: 스토리 방 사이. D 뒤는 방 9 휴식 전 대화
const SLOTS = [
	{ key: 'A', after: 1, before: 3 },
	{ key: 'B', after: 3, before: 5 },
	{ key: 'C', after: 5, before: 7 },
	{ key: 'D', after: 7, before: 9 }
];
const REST_BLOCK = 'before_event_dialogue';

const REWARDS = ['attack_up', 'defense_up', 'shield', 'intelligence_up', 'move_range_up', 'stun', 'bleed', 'heal', 'cooldown_reset', 'attack_down', 'defense_down', 'intelligence_down', 'hp_down', 'move_range_down'];
const DOWNS = REWARDS.filter((r) => r.endsWith('_down'));
const FALLBACK_REWARD = { easy: 'attack_up', hard: 'defense_up', stat: 'shield', fun: 'cooldown_reset', lock: 'intelligence_up' };
const EVENTS = ['campsite', 'meet_stranger', 'minigame_slot', 'minigame_timing', 'minigame_cup'];
const PARTY = ['ISTJ', 'ENFP', 'INTP', 'ESFJ'];
const opens = (xx) => PARTY.some((m) => [...xx].every((ch) => m.includes(ch)));

const DIRS = ['fighting-', 'fighting+', 'community-', 'community+', 'reason-', 'reason+'];
const DIR_NOTE = {
	'fighting-': '주먹부터 쓰고 맞서 싸우는 해결사',
	'fighting+': '남을 돕고 손을 내미는 해결사',
	'community-': '자기 몫부터 챙기는 해결사',
	'community+': '동네 사람 모두를 위해 나서는 해결사',
	'reason-': '규칙과 절차를 지키는 해결사',
	'reason+': '규칙보다 마음 가는 대로 하는 해결사'
};
const REP_MIN = 20;
const REP_URGENCY = 8;
const REP_SLOTS = ORDER >= 2 ? ['A', 'B', 'C', 'D'] : ['B', 'D'];
const statReq = (dir) => ({ stat: dir.slice(0, -1), op: dir.endsWith('-') ? '<=' : '>=', value: dir.endsWith('-') ? -40 : 40 });

// 보스 방 표시 [종류, boss_penalty]
const FLAG_PLAN = { easy: { easy: ['bad', -1], hard: ['good', 1] }, hard: { easy: ['good', 1], hard: ['good', 2] } };
const REP_FLAGS = { easy: ['bad', -1], hard: ['good', 1], stat: ['good', 2] };
// 확률 등급 (webfront risk)
const RISK_CHANCE = { easy: 'mid', hard: 'high', fun: 'low' };

// ── 카드 자리표 ─────────────────────────────────────────────
const rot = EVENTS.map((_, i) => EVENTS[(i + ORDER - 1) % EVENTS.length]);
function basePlan(pair) {
	if (pair === 'AB')
		return [
			{ slot: 'A', kind: 'plant', extra: ['lock'] },
			{ slot: 'A', kind: 'normal', extra: ['gold'], event: rot[0] },
			{ slot: 'A', kind: 'normal', extra: ['fun'], event: rot[1], forced: true },
			{ slot: 'B', kind: 'plant', extra: ['fun'] },
			{ slot: 'B', kind: 'normal', extra: ['gold'], event: rot[2] },
			{ slot: 'B', kind: 'normal', extra: ['lock', 'gold'] }
		];
	return [
		{ slot: 'C', kind: 'callback', returns: 'easy' },
		{ slot: 'C', kind: 'callback', returns: 'hard' },
		{ slot: 'C', kind: 'normal', extra: ['lock', 'fun'], event: rot[3] },
		{ slot: 'D', kind: 'callback', returns: 'easy' },
		{ slot: 'D', kind: 'callback', returns: 'hard' },
		{ slot: 'D', kind: 'normal', extra: ['lock', 'gold'], event: rot[4] }
	];
}
const repPlan = (slot) => DIRS.map((d, i) => ({ slot, kind: 'rep', rep_dir: d, extra: [['fun'], ['gold'], []][(i + ORDER) % 3] }));
const planOf = (keys) => [...basePlan('AB'), ...basePlan('CD')].filter((r) => keys.includes(r.slot));
const REP_PARTS = [[0, 2], [2, 4], [4, 6]];
const repPart = (slot, part) => repPlan(slot).slice(...REP_PARTS[part]);
const pathsOf = (row) => (row.kind === 'callback' ? ['easy', 'hard'] : [...(row.kind === 'rep' ? ['easy', 'hard', 'stat'] : ['easy', 'hard']), ...(row.extra ?? [])]);
/** 이 선택지에 확률 결과가 붙나 (webfront: 조건 선택지·회수 카드·fun 이 아닌 이벤트 선택지는 없음) */
const hasRisk = (row, p, withEvent) => row.kind !== 'callback' && !!RISK_CHANCE[p] && !(withEvent && p !== 'fun');
const KIND_KO = { plant: '심기', normal: '일반', callback: '회수', rep: '평판' };
function planTable(plan) {
	return `| 자리(no) | 칸 | 종류 | 선택지 path (이것만, 이 개수) | 이벤트 | 그 밖 |
| --- | --- | --- | --- | --- | --- |
${plan
	.map(
		(r, i) =>
			`| ${i + 1} | ${r.slot} | ${KIND_KO[r.kind]}${r.returns ? ` (returns ${r.returns})` : ''}${r.rep_dir ? ` ${r.rep_dir}: "${DIR_NOTE[r.rep_dir]}"` : ''} | ${pathsOf(r).join(', ')} | ${r.event ?? '-'} | ${r.forced ? '강제 사건 1개' : '-'} |`
	)
	.join('\n')}`;
}

// ── 시나리오에서 앞뒤 장면 ─────────────────────────────────
const roomOf = (id) => scen.rooms.find((r) => Number(r.id) === id);
const say = (l) => (l.type === 'direction' ? `(등장: ${l.speaker})` : `${l.speaker}: ${l.content?.korean ?? ''}`);
function gapsFor(keys) {
	return SLOTS.filter((g) => keys.includes(g.key))
		.map((g) => {
			const prev = (roomOf(g.after)?.dialogue ?? []).slice(-6).map(say);
			const nextBlock = g.before === 9 ? (roomOf(9)?.[REST_BLOCK] ?? []) : (roomOf(g.before)?.dialogue ?? []);
			const next = nextBlock.slice(0, 6).map(say);
			return `### 칸 ${g.key} (스토리 ${g.after} → ${g.before === 9 ? '방 9 휴식 전 대화' : `스토리 ${g.before}`})
- 앞 방 마지막:
${prev.map((t) => `  ${t}`).join('\n')}
- 다음 장면 시작:
${next.map((t) => `  ${t}`).join('\n')}`;
		})
		.join('\n\n');
}
const allBlocks = (r) => [REST_BLOCK, 'dialogue', 'win_dialogue', 'lose_dialogue'].flatMap((b) => r[b] ?? []);
const storyLines = new Set(scen.rooms.flatMap((r) => allBlocks(r).map((l) => l.content?.korean).filter((t) => t && t.length >= 10)));
const compLines = [...new Set(scen.rooms.flatMap((r) => allBlocks(r).filter((l) => l.speaker === comp && l.content?.korean).map((l) => l.content.korean)))]
	.slice(0, 12)
	.map((t) => `  - ${t}`)
	.join('\n');

function slotBlock(key, rep = false) {
	const s = cd.slots[key];
	const g = SLOTS.find((x) => x.key === key);
	const lines = [
		`## 칸 ${key} (스토리 ${g.after} → ${g.before === 9 ? '방 9 휴식 전' : `스토리 ${g.before}`}) — ${s.where}`,
		`- 깨면 안 되는 사실 (다음 장면이 깔고 감): ${s.keep}`
	];
	if (rep) lines.push(`- 이 칸의 평판 카드 인물·상황: ${s.reputation}`);
	else {
		if (s.seed) lines.push(`- 심기 카드는 설계대로: 인물 ${s.seed.who} — ${s.seed.want}`, `  - easy: ${s.seed.easy}`, `  - hard: ${s.seed.hard}`);
		if (s.recall)
			lines.push(
				`- 회수 카드는 칸 ${s.recall.from} 심기 카드의 인물·일이 돌아옴`,
				`  - returns "easy" (심기에서 easy 를 고른 사람만 봄): ${s.recall.easy}`,
				`  - returns "hard" (hard 를 고른 사람만 봄): ${s.recall.hard}`
			);
		lines.push(`- 일반 카드 재료 (일반 카드는 이 재료에서 출발, 2장이면 서로 다른 사건): ${s.normal}`);
	}
	return lines.join('\n');
}

const plantsBrief = (keys) =>
	keys
		.map((k) => cd.slots[k].seed)
		.filter(Boolean)
		.map((x) => x.who)
		.join(', ');

const COMMON = `# 이 이야기
- 제목: ${story.title} (${story.hook ?? ''}). 무대: ${story.world}
- 히어로들(주인공 "당신"과 동료들)이 이 일을 맡은 이유: ${story.design.goal}
- ${ORDER}화 장소: ${ep.place}. 이번 화에 떠난 이유: ${ep.why_go}
- 이번 화 카드가 작게 겪게 하는 것 (가장 중요): ${cd.practice}

# 누구의 일인가
- 선택하는 사람은 주인공 (서술에서는 "당신"). 사건은 주인공에게 닥치고 이득·손해도 주인공 쪽
- 동행 \`${comp}\`(${compName}, ${story.npcs[0].role}): 곁에서 거듦 (알려 주기, 걱정·부추기기, 선택 뒤 반응). 카드 인물의 말에 반응. 자기를 이름 대신 1인칭으로. 사건의 당사자가 되거나 선택을 대신 정하지 않음
- 동행 원문 대사 (말투 그대로, 이 문장들을 되풀이하지는 않음):
${compLines}

# 지킬 것
- 카드는 스토리 방 사이 길 위의 짧은 사건. 스토리 결과를 바꾸지 않고, "깨면 안 되는 사실"을 깨지 않음
- 이번 화 상대("${FINAL ? FINAL_NAME : ep.boss}")는 카드에 나오지 않음. 상대의 진짜 사정·이번 화 반전을 카드가 먼저 밝히지 않음
- "${FINAL_NAME}" 이름 금지. "보스" 낱말 금지
- 새 인물은 됨. 동행 말고 다른 NPC 이름을 지어 붙이지 않음 (인물은 직업·별명으로)
- 금지: 설명투(${META.join(', ')}), 선택지 깎아내리기(${BELITTLE.join(', ')}), 괄호 메모, 스토리 방 대사 베끼기, "밤새"·"다음 날" 같은 긴 시간
- 피·흉기 상처·잔인한 묘사 금지. 싸움은 몸개그처럼 가볍게 (갱스터 코미디)

${STYLE}
- 한 줄 ${MAX_LEN}자 이내, 1~2문장. narrator 는 "~했다" 체, 주인공은 "당신". 인물 대사는 구어체
- 선택지 text: 주인공 행동 "~한다" 꼴. 누구에게 무엇을 하는지 분명하게

# 재미 (이건 게임이다)
- 플레이어가 "오, 이건 어떻게 하지?" 하고 고르고 싶어지게. 평범한 부탁·잡일로 끝내지 않음
- 인물마다 눈에 띄는 버릇·사정 하나 (말버릇, 집착하는 물건, 숨기는 것). 무서워 보이는데 알고 보면 짠한 사람이 이 장르의 맛
- 사건에 구체적인 걸린 것: 돈, 시간 제한, 들키면 안 되는 사람, 망가지면 안 되는 물건
- 결과에 작은 반전이나 웃음 하나. 고른 대가가 장면으로 보이게
- 선택지끼리 성격이 확실히 다르게: 같은 행동을 말만 바꾼 선택지 금지`;

function choiceRules(rep) {
	return `# 선택지 (자리표의 path 만, 그 개수대로)
| path | 뜻 | 수치 |
| --- | --- | --- |
| easy | ${rep ? '평판대로 행동해 당장 이득' : '당장 이득. 그럴듯한 이유가 보이게'} | reward 1개 또는 gold +50~150 |
| hard | ${rep ? '평판과 다르게 행동해 지금 대가' : '지금 대가(echo 하락·디버프·시간) 대신 바르게'} | reward 1개 |
| gold | 돈으로 해결. 누구에게 무엇에 돈을 쓰는지 text 에 | effects.gold -50~-150 |
| fun | 엉뚱하지만 그 장면에서 말이 되는 행동. 예상 밖 결과 | 성향 한 축 ±20~30, reward 1개 또는 gold |
${rep ? '| stat | 평판이 아주 뚜렷할 때(그 방향 40 이상)만 보임. 그 평판 덕에 되는 해결 (사람들이 평판 때문에 따라 주거나 길을 비켜 줌) | 그 평판 방향으로 effects, reward 1개 |' : `| lock | MBTI 잠금. require_mbti 2글자 (파티 ${PARTY.join(', ')} 중 누군가 가진 조합, 예: TJ, NF, NT, SF, EF, IT), mbti 도 같은 글자. 그 성격의 히어로가 직접 하는 행동: text·result 에 {actor} ("{actor}이(가) …한다") | 축 ±10 이하, reward 1개 또는 gold |`}
- effects: fighting(투쟁- ↔ 협력+), community(개인- ↔ 공동체+), reason(질서- ↔ 자유+) 중 1~2개 ±10~30, echo(동행 호감도) ±5~15, gold. 빈 effects 금지
- reward: ${REWARDS.join(', ')} 중 1개
- mbti: 서로 다른 축의 2글자 (예: TJ, NF, EP). 한 카드 안에서 모두 다르게
- result: 2~3줄. 고른 행동에 대한 반응으로 시작. 주인공이 한 일과 결과, 인물·동행 반응. 돌아올 사람·물건이나 보스 방에서 쓰일 것은 장면으로 남김

# 확률 결과 (risk_bad) — ${rep ? '평판 카드' : '심기·일반 카드'}의 easy·hard·fun 선택지에만 (gold·lock·stat·회수 카드·fun 이 아닌 이벤트 선택지에는 쓰지 않음)
- 같은 선택을 했는데 운이 나빠 손해로 끝난 결과. result 는 2~3줄, 좋은 결과(result)와 같은 행동에서 출발해 다른 쪽으로 꼬임 (소동·반전·웃음)
- easy: 이득 대신 손해 → reward 에 *_down 1개 또는 gold -20~-50
- hard: 좋은 스킬 없음 → reward 빈 배열 + gold -20 정도의 작은 손해
- fun: 소동이 커지고 손해 → *_down 1개 또는 gold 손실
- 기억이 남는 선택(심기 카드)의 나쁜 결과에서도 그 기억 내용(누구에게 무엇을 했는지)은 그대로`;
}

const EVENT_RULES = `# 이벤트 (자리표에 적힌 자리만, 그 카드의 선택지 1개에)
- 그 선택의 결과로 바로 벌어지는 일. 이벤트가 있는 선택지는 reward 를 쓰지 않음 (이벤트 방이 보상을 줌). event_reason 에 왜 이 일이 벌어지는지 한 줄
- 종류별로 게임에서 실제로 하는 일이 장면 안에서 벌어져야 함 (비유 금지)

| 이벤트 | 게임에서 하는 일 | 어울리는 선택·이유 |
| --- | --- | --- |
| campsite | 쉬면서 회복 | 기다려야 함, 다친 사람 돌보기, 누가 쉴 곳을 내줌 |
| meet_stranger | 낯선 사람이 히어로 1명에게 1:1 대결을 걺. 맞서거나 피함(작은 패널티) | 선택 때문에 생긴 시비, 길목을 지키는 사람, 가져간 물건을 되찾으러 옴 |
| minigame_slot | 운에 맡기는 내기 | 누가 돈·물건을 걸고 내기를 제안 |
| minigame_timing | 움직이는 구간을 정확한 순간에 클릭. 기회 3번, 한 번이라도 놓치면 끝 | 세 번 연달아 정확한 때에 움직여야 하는 일 (닫히는 문, 순찰이 비는 틈) |
| minigame_cup | 여러 개 중 물건이 숨은 하나 고르기 | 누가 물건을 여러 그릇·상자 중 하나에 숨기고 고르게 함 |

- event_intro: 1~2줄, 바로 앞 result 에서 이어지게. meet_stranger 는 낯선 사람(이름 없이 "낯선 ~", 말은 narrator 줄에 “ ” 따옴표)이 왜 덤비는지 말하고 {actor} 에게 대결을 걺. 대결 직전에 끝
- meet_stranger 만 event_options: fight.text "{actor}이(가) … 맞선다", fight.win·fight.lose 1줄씩, avoid.text "… 피한다", avoid.result 1줄. avoid_penalty 에 ${DOWNS.join(', ')} 중 1개`;

const FORCED_RULES = `# 강제 사건 (자리표에 적힌 자리만, forced 1개)
- 그 성격의 히어로가 말릴 틈 없이 먼저 저지르는 일. 일어나면 선택지 대신 이 사건만 나옴 (확률은 코드가 0.3)
- require_mbti 2글자 (파티 중 누군가 가진 조합), mbti 같은 글자 (그 카드의 다른 선택지와 다르게), text·result 에 {actor}, effects, reward 또는 gold`;

const FLAG_RULES = `# 보스 방 표시 (flag) — 회수 카드의 두 선택지, 평판 카드의 easy·hard·stat 선택지에
- flag: { key(영어 소문자_밑줄), label(짧은 이름), boss_text }
  - 유리한 표시: boss_text = 방 10 싸움에서 주인공이 고를 행동 한 문장 ("~한다"). 이 카드 결과로 얻은 사람·물건·정보를 씀
  - 불리한 표시: boss_text = 방 10 싸움 앞에서 주인공에게 닥치는 불리한 일 1~2문장 (눈앞에 보이는 일)
- 어느 쪽인지: 회수 returns "easy" 카드 = easy 불리 / hard 유리, returns "hard" 카드 = 둘 다 유리, 평판 카드 = easy 불리 / hard·stat 유리`;

const OUTPUT = (plan) => `# 카드 자리표 (코드가 정함. 자리마다 카드 1장, 이 표대로)
${planTable(plan)}

# 출력
- cards: 자리마다 1장. no(자리 번호), key(영어 소문자_밑줄 소재 낱말), title, person(id 영어 소문자, name, role), wants, rule_link(이번 화 카드 주제 "${cd.practice}"와 어떻게 이어지는지 한 줄), dialogue 3~5줄(speaker narrator / ${comp} / person id, person 이 꼭 말함), choices, background_tags(영어 소문자 5개: 장소·시간·조명·군중·분위기, 이름 있는 인물 금지)
- 회수 카드의 person 은 짝 심기 카드와 같은 사람`;

const GAME = `# 게임 구조
- 한 화 = 스토리 1 · 카드 A · 스토리 3 · 카드 B · 스토리 5 · 카드 C · 스토리 7 · 카드 D · 방 9 (쉬자는 대화 → 야영지 휴식 → 상대를 처음 만남) · 방 10 (싸움)
- 칸마다 후보 중 1장이 나옴. 같은 칸 카드는 같은 틈의 서로 다른 사건이고, 어느 1장이 나와도 앞뒤가 이어져야 함
- 회수 카드는 짝 심기 카드의 기억이 있을 때만 나옴`;

function basePrompt(pair, context) {
	const keys = pair.split('');
	const plan = planOf(pair);
	return `당신은 조폭 코미디 선택형 게임의 카드 작가입니다. ${ORDER}화 카드 칸 ${keys.join('·')} 의 카드 ${plan.length}장을 대사까지 씁니다.

${GAME}

# 카드 한 장 = 이번 화 주제를 작게 겪는 사람 한 명의 사건 (가장 중요)
- "그 장소에서 있을 법한 잡일"이 아니라 "${cd.practice}"를 작게 먼저 겪는 장면. 방 10 반전의 예행연습
- 카드마다: 원하는 게 있는 사람 1명(person, wants) / 이번 화 주제와 연결(rule_link) / 당장 이득과 나중 대가

# 칸별 설계 (설계표 — 그대로 따름)
${keys.map((k) => slotBlock(k)).join('\n\n')}

## 앞뒤 장면 (카드는 앞 방 끝을 이어받고, 다음 장면 첫 대사의 전제를 깨지 않음)
${gapsFor(keys)}

${COMMON}

${choiceRules(false)}

${EVENT_RULES}
${plan.some((r) => r.forced) ? `\n${FORCED_RULES}\n` : ''}${plan.some((r) => r.kind === 'callback') ? `\n${FLAG_RULES}\n` : ''}
${OUTPUT(plan)}
${context ? `\n${context}\n` : ''}`;
}

function repPrompt(key, part) {
	const plan = repPart(key, part);
	return `당신은 조폭 코미디 선택형 게임의 카드 작가입니다. ${ORDER}화 칸 ${key} 의 **평판(성향) 카드** ${plan.length}장을 대사까지 씁니다.

${GAME}

# 이 게임은 평판 게임
- 플레이어의 선택이 성향 3축(투쟁↔협력, 개인↔공동체, 질서↔자유)으로 쌓이고, 가장 뚜렷한 쪽이 그 사람의 평판이 된다
- 평판 카드는 그 평판(가장 뚜렷한 성향이 그 방향, ${REP_MIN} 이상)인 플레이어에게만, 같은 칸의 기본 카드 대신 나온다
- ${plan0.reputation_flavor}
- 카드 인물은 주인공의 그 평판을 알고(소문을 들음, 전에 본 적 있음) 찾아오거나, 그 평판 때문에 주인공을 막거나 이용하려 한다
  - 인물의 첫 대사 안에 주인공의 평판을 알아보는 말 (예: "당신이 그 ~한다는 해결사죠?"). "투쟁"·"공동체" 같은 축 이름 낱말 대신 그 사람이 한 일로 말함
- ${plan.length}장은 서로 다른 종류의 사건 (같은 사건을 말만 바꾼 카드 금지). 그래도 이번 화 주제("${cd.practice}")와 이어진 사건

${slotBlock(key, true)}

## 앞뒤 장면 (카드는 앞 방 끝을 이어받고, 다음 장면 첫 대사의 전제를 깨지 않음)
${gapsFor([key])}

${COMMON}

${choiceRules(true)}

${FLAG_RULES}

${OUTPUT(plan)}`;
}

// ── 출력 형식 ───────────────────────────────────────────────
const LINE = { type: 'object', properties: { speaker: S, text: S }, required: ['speaker', 'text'] };
const EFFECTS = { type: 'object', properties: { fighting: { type: 'integer' }, community: { type: 'integer' }, reason: { type: 'integer' }, echo: { type: 'integer' }, gold: { type: 'integer' } } };
const FLAG = { type: 'object', properties: { key: S, label: S, boss_text: S }, required: ['key', 'label', 'boss_text'] };
const RISK_BAD = { type: 'object', properties: { gold: { type: 'integer' }, reward: { type: 'array', items: S }, result: { type: 'array', items: LINE } }, required: ['result'] };
function cardTool(rep) {
	const choice = {
		path: { type: 'string', enum: rep ? ['easy', 'hard', 'stat', 'gold', 'fun'] : ['easy', 'hard', 'gold', 'lock', 'fun'] },
		text: S,
		mbti: S,
		effects: EFFECTS,
		reward: { type: 'array', items: S },
		result: { type: 'array', items: LINE },
		risk_bad: RISK_BAD,
		flag: FLAG,
		...(!rep && {
			require_mbti: S,
			event: { type: 'string', enum: EVENTS },
			event_reason: S,
			event_intro: { type: 'array', items: LINE },
			event_options: {
				type: 'object',
				properties: {
					fight: { type: 'object', properties: { text: S, win: { type: 'array', items: LINE }, lose: { type: 'array', items: LINE } }, required: ['text', 'win', 'lose'] },
					avoid: { type: 'object', properties: { text: S, result: { type: 'array', items: LINE } }, required: ['text', 'result'] }
				}
			},
			avoid_penalty: { type: 'string', enum: DOWNS }
		})
	};
	const card = {
		no: { type: 'integer' },
		key: S,
		title: S,
		person: { type: 'object', properties: { id: S, name: S, role: S }, required: ['id', 'name', 'role'] },
		wants: S,
		rule_link: S,
		dialogue: { type: 'array', items: LINE },
		background_tags: { type: 'array', items: S },
		choices: { type: 'array', items: { type: 'object', properties: choice, required: ['path', 'text', 'mbti', 'effects', 'result'] } },
		...(!rep && {
			forced: {
				type: 'array',
				items: { type: 'object', properties: { text: S, require_mbti: S, mbti: S, effects: EFFECTS, reward: { type: 'array', items: S }, result: { type: 'array', items: LINE } }, required: ['text', 'require_mbti', 'mbti', 'effects', 'result'] }
			}
		})
	};
	return {
		name: rep ? 'rep_cards' : 'slot_cards',
		description: rep ? '평판 카드' : '카드 칸들의 카드',
		parameters: { type: 'object', properties: { cards: { type: 'array', items: { type: 'object', properties: card, required: ['no', 'key', 'title', 'person', 'wants', 'rule_link', 'dialogue', 'choices', 'background_tags'] } } }, required: ['cards'] }
	};
}

// ── 검사 (자리마다) ─────────────────────────────────────────
function splitText(t) {
	if (t.length <= MAX_LEN) return [t];
	const mid = t.length / 2;
	for (const re of [/[.?!…]\s+/g, /,\s+/g, /\s+/g]) {
		const at = [...t.matchAll(re)].map((m) => m.index + m[0].length).filter((k) => k <= MAX_LEN && t.length - k <= MAX_LEN).sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid))[0];
		if (at) return [t.slice(0, at).trim(), t.slice(at).trim()];
	}
	return [t];
}
const splitLines = (lines) => (lines ?? []).flatMap((l) => splitText(l.text ?? '').map((text) => ({ ...l, text })));
const allLinesOf = (c) => [
	...(c.dialogue ?? []),
	...(c.choices ?? []).flatMap((ch) => [...(ch.result ?? []), ...(ch.risk_bad?.result ?? []), ...(ch.event_intro ?? []), ...(ch.event_options?.fight?.win ?? []), ...(ch.event_options?.fight?.lose ?? []), ...(ch.event_options?.avoid?.result ?? [])]),
	...(c.forced ?? []).flatMap((f) => f.result ?? [])
];
const withActor = (t) => (t && !t.includes('{actor}') ? `{actor}이(가) ${t}` : t);
const toKey = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '');

function checkCard(c, row) {
	const e = [];
	Object.assign(c, { slot: row.slot, kind: row.kind, returns: row.returns, rep_dir: row.rep_dir });
	c.dialogue = splitLines(c.dialogue);
	for (const f of c.forced ?? []) f.result = splitLines(f.result);
	for (const ch of c.choices ?? []) {
		ch.result = splitLines(ch.result);
		if (ch.event_intro) ch.event_intro = splitLines(ch.event_intro);
		const eo = ch.event_options;
		if (eo?.fight) (eo.fight.win = splitLines(eo.fight.win)), (eo.fight.lose = splitLines(eo.fight.lose));
		if (eo?.avoid) eo.avoid.result = splitLines(eo.avoid.result);
		if (ch.event && ch.reward?.length) delete ch.reward;
		if (ch.path !== 'lock') delete ch.require_mbti;
		if (ch.reward) ch.reward = ch.reward.filter((r) => REWARDS.includes(r));
		if (!ch.reward?.length && !ch.effects?.gold && !ch.event) ch.reward = [FALLBACK_REWARD[ch.path] ?? 'defense_up'];
		if (ch.path === 'lock') {
			ch.text = withActor(ch.text);
			if (ch.require_mbti) ch.mbti = ch.require_mbti;
		}
		if (ch.event === 'meet_stranger') {
			if (eo?.fight) eo.fight.text = withActor(eo.fight.text);
			if (!DOWNS.includes(ch.avoid_penalty)) ch.avoid_penalty = 'defense_down';
		}
		if (ch.flag?.key) ch.flag.key = toKey(ch.flag.key);
		// 확률 결과: 붙을 자리에만. 손해 규칙은 코드가 맞춤 (webfront: 나쁜 결과에 좋은 스킬 금지, 보상·골드 중 1개 이상)
		if (!hasRisk(row, ch.path, !!ch.event)) delete ch.risk_bad;
		else if (ch.risk_bad) {
			const b = ch.risk_bad;
			b.result = splitLines(b.result);
			b.reward = (b.reward ?? []).filter((r) => DOWNS.includes(r));
			if (ch.path === 'hard') {
				b.reward = [];
				if (!(b.gold < 0)) b.gold = -20;
			}
			if (!(b.gold < 0)) delete b.gold;
			if (!b.reward.length && !(b.gold < 0)) b.gold = ch.path === 'fun' ? -40 : -30;
		}
	}
	for (const f of c.forced ?? []) {
		f.text = withActor(f.text);
		if (f.require_mbti) f.mbti = f.require_mbti;
		if (f.reward) f.reward = f.reward.filter((r) => REWARDS.includes(r));
		if (!f.reward?.length && !f.effects?.gold) f.reward = ['attack_up'];
	}
	if (c.key) c.key = toKey(c.key);
	if (c.background_tags) c.background_tags = c.background_tags.map((t) => String(t).toLowerCase().trim()).filter((t) => /^[a-z][a-z0-9 _-]*$/.test(t)).slice(0, 6);
	if (!row.forced) delete c.forced;
	if (!/^[a-z][a-z0-9_]*$/.test(c.key ?? '')) e.push('key 는 영어 소문자_밑줄');

	const want = pathsOf(row);
	const got = (c.choices ?? []).map((ch) => ch.path);
	if (got.slice().sort().join() !== want.slice().sort().join()) e.push(`선택지 path 는 ${want.join(', ')} (지금 ${got.join(', ')})`);

	const ok = new Set(['narrator', comp, c.person?.id]);
	if (!(c.dialogue ?? []).some((l) => l.speaker === c.person?.id)) e.push(`person(${c.person?.id})이 dialogue 에서 말해야 함`);
	if (c.person?.id === comp) e.push(`person 은 동행(${comp})이 아닌 카드 인물`);
	for (const l of allLinesOf(c)) {
		if (!ok.has(l.speaker)) e.push(`화자 "${l.speaker}" 는 쓸 수 없음 (narrator, ${comp}, ${c.person?.id})`);
		if ((l.text ?? '').length > MAX_LEN) e.push(`${MAX_LEN}자 넘는 줄: "${l.text}"`);
		if (/[()]/.test((l.text ?? '').replace(/[이을은와과]\((가|를|는|과|와)\)/g, ''))) e.push(`괄호 메모 금지 (장면으로): "${l.text}"`);
		if (storyLines.has(l.text)) e.push(`스토리 방 대사를 그대로 쓰지 않음: "${l.text}"`);
		if (/보스/.test(l.text ?? '')) e.push(`"보스" 낱말 금지: "${l.text}"`);
		if ((l.text ?? '').includes('\ufffd')) e.push(`깨진 글자가 있음 (다시 쓸 것): "${l.text}"`);
	}

	const mb = new Set();
	for (const ch of c.choices ?? []) {
		const at = ch.path;
		if (!/^[EI]?[SN]?[TF]?[JP]?$/.test(ch.mbti ?? '') || (ch.mbti ?? '').length !== 2) e.push(`${at}: mbti "${ch.mbti}" 는 서로 다른 축 2글자`);
		if (mb.has(ch.mbti)) e.push(`${at}: mbti 가 카드 안에서 겹침`);
		mb.add(ch.mbti);
		if (!Object.values(ch.effects ?? {}).some((v) => v)) e.push(`${at}: effects 가 비었음`);
		for (const r of ch.reward ?? []) if (!REWARDS.includes(r)) e.push(`${at}: reward "${r}" 는 없는 보상`);
		if (!(ch.reward ?? []).length && !ch.effects?.gold && !ch.event) e.push(`${at}: reward 1개·effects.gold(0 아님)·event 중 하나`);
		if (at === 'gold' && !(ch.effects?.gold <= -50 && ch.effects?.gold >= -150)) e.push('gold: effects.gold 는 -50~-150');
		if (at === 'lock') {
			if (!opens(ch.require_mbti ?? '') || (ch.require_mbti ?? '').length !== 2) e.push(`lock: require_mbti "${ch.require_mbti}" 는 파티(${PARTY.join(', ')}) 중 누군가 가진 2글자`);
			if (ch.mbti !== ch.require_mbti) e.push('lock: mbti 는 require_mbti 와 같은 글자');
			if (!ch.text?.includes('{actor}')) e.push('lock: text 에 {actor}');
		}
		if (at === 'stat' && row.rep_dir) {
			const ax = row.rep_dir.slice(0, -1);
			const sg = row.rep_dir.endsWith('-') ? -1 : 1;
			ch.effects = { ...(ch.effects ?? {}), [ax]: sg * Math.max(10, Math.abs(ch.effects?.[ax] ?? 0)) };
		}
		if (hasRisk(row, at, !!ch.event) && !(ch.risk_bad?.result ?? []).length) e.push(`${at}: risk_bad(운 나쁜 결과 result 2~3줄) 필요`);
		// 좋은 결과 줄을 운 나쁜 결과·이벤트 대사에 그대로 되풀이하지 않음
		const good = new Set((ch.result ?? []).map((l) => (l.text ?? '').replace(/\s+/g, '')));
		for (const [name, ls] of [['risk_bad.result', ch.risk_bad?.result], ['event_intro', ch.event_intro]])
			for (const l of ls ?? []) if (good.has((l.text ?? '').replace(/\s+/g, ''))) e.push(`${at}: ${name} 가 result 줄을 그대로 되풀이함 (새 장면으로): "${l.text}"`);
		const needFlag = row.kind === 'callback' || (row.kind === 'rep' && REP_FLAGS[at]);
		if (!needFlag) delete ch.flag;
		else if (!ch.flag?.key || !ch.flag.label || !ch.flag.boss_text) e.push(`${at}: flag(key·label·boss_text)`);
		else if (!/^[a-z][a-z0-9_]*$/.test(ch.flag.key)) e.push(`${at}: flag.key 는 영어 소문자_밑줄`);
	}

	const evs = (c.choices ?? []).filter((ch) => ch.event);
	if (row.event ? !(evs.length === 1 && evs[0].event === row.event) : evs.length) e.push(row.event ? `이벤트 ${row.event} 를 선택지 1개에 (지금 ${evs.map((x) => x.event).join(', ') || '없음'})` : '이 자리에는 이벤트 없음');
	for (const ch of evs) {
		if (!ch.event_reason) e.push(`${ch.path}: event_reason`);
		const n = (ch.event_intro ?? []).length;
		if (n < 1 || n > 3) e.push(`${ch.path}: event_intro 1~2줄 (지금 ${n})`);
		const eo = ch.event_options;
		if (ch.event === 'meet_stranger') {
			if (!eo?.fight?.text?.includes('{actor}')) e.push(`${ch.path}: event_options.fight.text 에 {actor}`);
			if (!eo?.fight?.win?.length || !eo?.fight?.lose?.length) e.push(`${ch.path}: event_options.fight 에 win·lose 1줄씩`);
			if (!eo?.avoid?.text || !eo?.avoid?.result?.length) e.push(`${ch.path}: event_options.avoid 에 text·result`);
		} else if (eo) delete ch.event_options;
	}
	for (const ch of c.choices ?? []) if (!ch.event) for (const k of ['event_reason', 'event_intro', 'event_options', 'avoid_penalty']) delete ch[k];

	if (row.forced && (c.forced ?? []).length !== 1) e.push(`강제 사건(forced) 1개 (지금 ${(c.forced ?? []).length})`);
	for (const f of c.forced ?? []) {
		if (!opens(f.require_mbti ?? '') || (f.require_mbti ?? '').length !== 2) e.push(`forced: require_mbti "${f.require_mbti}" 는 파티 중 누군가 가진 2글자`);
		if (f.mbti !== f.require_mbti) e.push('forced: mbti 는 require_mbti 와 같은 글자');
		if (mb.has(f.mbti)) e.push('forced: mbti 가 다른 선택지와 겹침');
		if (!f.text?.includes('{actor}')) e.push('forced: text 에 {actor}');
	}

	const bt = c.background_tags ?? [];
	if (bt.length < 3 || bt.length > 6) e.push(`background_tags 는 영어 소문자 5개 (지금 ${JSON.stringify(bt)})`);
	if (JSON.stringify(c).includes(FINAL_NAME)) e.push(`"${FINAL_NAME}" 이름 금지`);
	if (JSON.stringify(c).includes('\ufffd')) e.push('깨진 글자(�)가 있음 — 그 낱말을 다시 쓸 것');
	return e;
}

function check(cards, plan) {
	return plan.flatMap((row, i) => {
		const c = cards.find((x) => x.no === i + 1);
		return c ? checkCard(c, row).map((msg) => ({ no: i + 1, msg })) : [{ no: i + 1, msg: '이 자리 카드가 없음' }];
	});
}

// ── 생성: 처음 1번 → 걸린 자리만 다시 (최대 2번) ──────────────
const report = [];
const hashOf = (s) => createHash('sha1').update(s).digest('hex');
function passedBefore(name, prompt) {
	const f = path.join(STEP_DIR, `cards_${name}.json`);
	if (!fs.existsSync(f)) return null;
	const d = readJson(f);
	return d.prompt_hash === hashOf(prompt) && d.errors?.length === 0 ? d.cards : null;
}
async function writeCards(name, prompt, tool, plan, label) {
	const reused = ARGV.fresh ? null : passedBefore(name, prompt);
	save(path.join(STEP_DIR, `cards_${name}_prompt.md`), prompt);
	let cards;
	if (reused) (cards = reused), console.log(`${label}: 지난 결과 그대로 사용`);
	else cards = (await gemini(prompt, tool, 0.8)).cards ?? [];
	let errs = check(cards, plan);
	console.log(`${label} 시도 1: 오류 ${errs.length}개`);
	for (let t = 2; t <= 3 && errs.length; t++) {
		const nos = [...new Set(errs.map((x) => x.no))];
		const msg = `${prompt}

# 다시 쓸 자리: ${nos.join(', ')}
- 아래 오류만 고치고 나머지 내용은 그대로. 출력 cards 에는 이 자리 카드만 (no 그대로, 자리표대로)
${errs.map((x) => `- 자리 ${x.no}: ${x.msg}`).join('\n')}

지난 출력 (이 자리들):
${JSON.stringify(cards.filter((c) => nos.includes(c.no)))}`;
		const fixed = (await gemini(msg, tool, 0.8)).cards ?? [];
		for (const f of fixed) if (nos.includes(f.no)) cards = [...cards.filter((c) => c.no !== f.no), f];
		errs = check(cards, plan);
		console.log(`${label} 시도 ${t}: 오류 ${errs.length}개`);
	}
	errs.slice(0, 10).forEach((x) => console.log(`  - 자리 ${x.no}: ${x.msg}`));
	const missing = errs.filter((x) => x.msg === '이 자리 카드가 없음');
	if (missing.length) throw new Error(`${label}: 빈 자리가 남아 멈춤 (${missing.map((x) => x.no).join(', ')})`);
	cards.sort((a, b) => a.no - b.no);
	const errors = errs.map((x) => `자리 ${x.no} ${cards.find((c) => c.no === x.no)?.key ?? ''}: ${x.msg}`);
	save(path.join(STEP_DIR, `cards_${name}.json`), { cards, errors, prompt_hash: hashOf(prompt) });
	report.push({ slots: name, errors });
	return cards;
}

function contextOf(cards) {
	const brief = (c) => ({ slot: c.slot, kind: c.kind, key: c.key, title: c.title, person: c.person, wants: c.wants });
	const plantFull = (c) => ({ ...brief(c), dialogue: c.dialogue, choices: c.choices.map((ch) => ({ path: ch.path, text: ch.text, result: ch.result })) });
	return `# 앞에서 이미 쓴 카드 (사건·문장 반복 금지. 회수 카드는 짝 심기 카드 장면을 이어받음)
${JSON.stringify(cards.map((c) => (c.kind === 'plant' ? plantFull(c) : brief(c))), null, 1)}`;
}

console.log(`[gangster cards] ${ID} ${ORDER}화 — 기본 12장 + 평판 칸 ${REP_SLOTS.join('·')} × 6장`);
const base = (k, context) => writeCards(k, basePrompt(k, context), cardTool(false), planOf(k), `${ORDER}화 칸 ${k}`);
const line2 = async (first, then) => {
	const a = await base(first, '');
	return [a, await base(then, contextOf(a))];
};
const rep = (k, part) =>
	writeCards(`rep${k}_${part + 1}`, repPrompt(k, part), cardTool(true), repPart(k, part), `${ORDER}화 평판 칸 ${k} (${part + 1}/3)`).then((cs) => cs.map((c) => ({ ...c, no: c.no + REP_PARTS[part][0] })));
const [ac, bd, ...reps] = await Promise.all([line2('A', 'C'), line2('B', 'D'), ...REP_SLOTS.flatMap((k) => REP_PARTS.map((_, i) => rep(k, i)))]);

const all = [];
const personName = {};
const relabel = (c, from, to) => {
	for (const l of allLinesOf(c)) if (l.speaker === from) l.speaker = to;
	c.person.id = to;
};
const seenKey = new Set();
const seenFlag = new Set();
for (const c of [...ac[0], ...bd[0], ...ac[1], ...bd[1], ...reps.flat()]) {
	if (seenKey.has(c.key)) c.key = `${c.key}_${c.slot.toLowerCase()}${c.no}`;
	seenKey.add(c.key);
	const pid = c.person.id;
	if (personName[pid] && personName[pid] !== c.person.name) relabel(c, pid, `${pid}_${c.slot.toLowerCase()}${c.no}`);
	personName[c.person.id] = c.person.name;
	for (const ch of c.choices)
		if (ch.flag?.key) {
			if (seenFlag.has(ch.flag.key)) ch.flag.key = `${ch.flag.key}_${c.slot.toLowerCase()}${c.no}`;
			seenFlag.add(ch.flag.key);
		}
	all.push(c);
}

// ── webfront 카드 형식 ──────────────────────────────────────
const line = (l) => ({ speaker: l.speaker, content: { korean: l.text } });
const plants = Object.fromEntries(all.filter((c) => c.kind === 'plant').map((c) => [c.slot, c]));
function toCard(c) {
	const g = SLOTS.find((x) => x.key === c.slot);
	const id = `card_${NN}_${c.key}`;
	const plant = c.kind === 'callback' ? plants[cd.slots[c.slot].recall.from] : null;
	const seedOf = (p) => (c.kind === 'plant' ? `${c.key}_${p === 'easy' ? 'easy' : 'hard'}` : null);
	const flagOf = (ch) => (c.kind === 'rep' ? REP_FLAGS[ch.path] : FLAG_PLAN[c.returns]?.[ch.path]) ?? ['good', 1];
	return {
		id,
		title: { korean: c.title },
		intensity: c.kind === 'callback' || (c.forced ?? []).length ? 'high' : 'calm',
		after_story: g.after,
		before_story: g.before,
		...(plant && { callback: { seed: `${plant.key}_${c.returns}`, min_rooms_after: 2 } }),
		...(c.kind === 'rep' && { condition: { leaning: c.rep_dir, among: DIRS, min: REP_MIN }, urgency: REP_URGENCY, leaning: c.rep_dir }),
		background_tags: c.background_tags,
		dialogue: c.dialogue.map(line),
		...((c.forced ?? []).length && {
			forced: c.forced.map((f) => ({
				text: { korean: f.text },
				path: 'forced',
				mbti: f.mbti,
				require: { mbti: f.require_mbti },
				chance: 0.3,
				effects: Object.fromEntries(Object.entries(f.effects ?? {}).filter(([, v]) => v)),
				...((f.reward ?? []).length && { reward: f.reward }),
				seed: null,
				result: f.result.map(line)
			}))
		}),
		choices: c.choices.map((ch) => {
			const effects = Object.fromEntries(Object.entries(ch.effects ?? {}).filter(([, v]) => v));
			const b = ch.risk_bad;
			return {
				text: { korean: ch.text },
				path: ch.path,
				mbti: ch.mbti,
				...(ch.path === 'gold' && { require: { stat: 'gold', op: '>=', value: -effects.gold } }),
				...(ch.path === 'lock' && { require: { mbti: ch.require_mbti } }),
				...(ch.path === 'stat' && c.rep_dir && { require: statReq(c.rep_dir) }),
				...(ch.flag && { flag: ch.flag.key }),
				effects,
				...((ch.reward ?? []).length ? { reward: ch.reward } : !effects.gold && !ch.event && { reward: [FALLBACK_REWARD[ch.path] ?? 'defense_up'] }),
				seed: seedOf(ch.path),
				result: ch.result.map(line),
				...(ch.event && {
					event: ch.event,
					event_intro: (ch.event_intro ?? []).map(line),
					...(ch.event === 'meet_stranger' &&
						ch.event_options?.fight &&
						ch.event_options?.avoid && {
							event_options: {
								fight: { text: { korean: ch.event_options.fight.text }, win: ch.event_options.fight.win.map(line), lose: ch.event_options.fight.lose.map(line) },
								avoid: { text: { korean: ch.event_options.avoid.text }, result: ch.event_options.avoid.result.map(line), reward: [ch.avoid_penalty ?? 'defense_down'] }
							}
						})
				}),
				...(b?.result?.length && {
					risk: { chance: RISK_CHANCE[ch.path], bad: { ...(b.gold < 0 && { effects: { gold: b.gold } }), reward: b.reward ?? [], result: b.result.map(line) } }
				})
			};
		}),
		tags: [c.person.id, comp],
		// 읽기용 (게임은 안 씀)
		_design: {
			slot: c.slot,
			kind: c.kind,
			person: c.person,
			wants: c.wants,
			rule_link: c.rule_link,
			...(c.kind === 'rep' && { rep: c.rep_dir }),
			events: Object.fromEntries(c.choices.filter((ch) => ch.event).map((ch) => [ch.path, ch.event_reason])),
			flags: Object.fromEntries(
				c.choices
					.filter((ch) => ch.flag)
					.map((ch) => {
						const [kind, boss_penalty] = flagOf(ch);
						return [ch.flag.key, { kind, boss_penalty, label: { korean: ch.flag.label }, [kind === 'good' ? 'boss_choice' : 'boss_line']: { korean: ch.flag.boss_text } }];
					})
			)
		}
	};
}

fs.rmSync(CARD_DIR, { recursive: true, force: true });
const cards = all.map(toCard);
for (const card of cards) save(path.join(CARD_DIR, `${card.id}.json`), card);

// ── additions (seeds·flags·actors) ─────────────────────────
const scenarioId = `gangster_${ID}_${NN}`;
const seeds = {};
for (const c of all.filter((x) => x.kind === 'plant')) {
	const easy = c.choices.find((ch) => ch.path === 'easy');
	const hard = c.choices.find((ch) => ch.path === 'hard');
	seeds[`${c.key}_easy`] = { korean: `${c.person.name}: ${easy?.text ?? ''}` };
	seeds[`${c.key}_hard`] = { korean: `${c.person.name}: ${hard?.text ?? ''}` };
}
const flags = Object.fromEntries(cards.flatMap((c) => Object.entries(c._design.flags).map(([k, v]) => [k, { label: v.label, boss_penalty: v.boss_penalty, ...(v.boss_choice && { boss_choice: v.boss_choice }), ...(v.boss_line && { boss_line: v.boss_line }) }])));
const actors = Object.fromEntries(all.map((c) => [c.person.id, { name: { korean: c.person.name }, role: { korean: c.person.role } }]));
// 방 9 휴식 전 기억 대사 (설계 rest_echo). 지금 webfront 는 before_event_dialogue 를 읽지 않아 block 으로만 표시
const restPlant = plants[cd.rest_echo.from];
const rooms = restPlant
	? {
			9: {
				dialogue: ['easy', 'hard'].map((p) => ({
					after_line: 0,
					block: REST_BLOCK,
					line: { type: 'speech', speaker: 'character_any', if: { seed: `${restPlant.key}_${p}` }, source: 'llm', intent: `칸 ${cd.rest_echo.from} 에서 ${restPlant.person.name}에게 한 일을 쉬면서 떠올림`, example: { korean: cd.rest_echo[p] }, emotion: 'base' }
				}))
			}
		}
	: {};
save(path.join(DIR, 'cards', `additions_${NN}.json`), { scenario_id: scenarioId, actors, seeds, flags, rooms });
save(path.join(STEP_DIR, 'report.json'), report);

// ── 읽기용 md ───────────────────────────────────────────────
const who = (sp) => (sp === 'narrator' ? '나레이션' : sp === comp ? compName : (actors[sp]?.name.korean ?? sp));
const md = [`# ${story.title} ${ORDER}화 카드 (${cards.length}장)`, '', `- 이번 화 카드가 겪게 하는 것: ${cd.practice}`, `- 남은 형식 오류: ${report.reduce((n, r) => n + r.errors.length, 0)}개`, ''];
for (const k of 'ABCD') {
	const g = SLOTS.find((x) => x.key === k);
	md.push(`## 칸 ${k} (스토리 ${g.after} → ${g.before === 9 ? '방 9 휴식 전' : `스토리 ${g.before}`}) — ${cd.slots[k].where}`, '');
	for (const c of cards.filter((x) => x._design.slot === k)) {
		const kind = { plant: '심기', normal: '일반', callback: `회수 (${c.callback?.seed})`, rep: `평판 ${c.leaning}` }[c._design.kind];
		md.push(`### ${c.title.korean} — ${kind} \`${c.id}\``, `- 인물: ${c._design.person.name} (${c._design.person.role}) — ${c._design.wants}`, '');
		for (const l of c.dialogue) md.push(`- **${who(l.speaker)}**: ${l.content.korean}`);
		for (const f of c.forced ?? []) md.push('', `**강제 사건** (${f.require.mbti}, 0.3): ${f.text.korean}`, ...f.result.map((l) => `  - ${who(l.speaker)}: ${l.content.korean}`));
		md.push('');
		for (const ch of c.choices) {
			const tag = [ch.path, ch.require ? `조건 ${JSON.stringify(ch.require)}` : '', ch.reward?.length ? ch.reward.join(',') : '', ch.effects?.gold ? `gold ${ch.effects.gold}` : '', ch.event ? `이벤트 ${ch.event}` : '', ch.seed ? `기억 ${ch.seed}` : '', ch.flag ? `표시 ${ch.flag}` : ''].filter(Boolean).join(' · ');
			md.push(`- **[${tag}]** ${ch.text.korean}`, ...ch.result.map((l) => `  - ${who(l.speaker)}: ${l.content.korean}`));
			if (ch.event_intro?.length) md.push(...ch.event_intro.map((l) => `  - (이벤트) ${who(l.speaker)}: ${l.content.korean}`));
			if (ch.risk) md.push(`  - 🎲 운 나쁨 (${ch.risk.chance}${ch.risk.bad.effects?.gold ? ` · gold ${ch.risk.bad.effects.gold}` : ''}${ch.risk.bad.reward?.length ? ` · ${ch.risk.bad.reward.join(',')}` : ''}):`, ...ch.risk.bad.result.map((l) => `    - ${who(l.speaker)}: ${l.content.korean}`));
		}
		md.push('');
	}
}
save(path.join(DIR, 'cards', `cards_${NN}.md`), md.join('\n'));
console.log(`카드 ${cards.length}장 저장: ${path.relative(ROOT, CARD_DIR)} (남은 형식 오류 ${report.reduce((n, r) => n + r.errors.length, 0)}개)`);
