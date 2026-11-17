// 3단계: 카드 — 기본 12장(칸마다 3장) + 평판 카드(칸 B·D, 2화부터 A 도. 칸마다 6방향 1장씩)
// 카드 자리표: 자리마다 종류·더할 선택지·이벤트·강제 사건·평판 방향을 코드가 정함. 모델은 자리마다 내용만 씀 (개수 맞추기를 맡기지 않음)
// 순서: (칸 A → C) ∥ (칸 B → D) ∥ 평판 카드 2장씩 동시. 검사에 걸린 자리만 다시 요청 (최대 2번). 단순 형식 오류는 코드가 채움
//  - A: 심기 1 + 일반 2 / B: 심기 1 + 일반 2 / C: 회수 2(A 심기의 easy·hard 기억) + 일반 1 / D: 회수 2(B 심기) + 일반 1
//  - 평판 카드: 가장 뚜렷한 성향이 그 방향이고 20 이상일 때만 후보 (condition), urgency 8 로 기본 카드보다 앞섬. easy·hard·stat 에 보스 방 표시
// 앞뒤 6줄은 cardGenSeq.ts 의 gapBlock, 문체 규칙은 cardGen.ts 의 STYLE 을 그대로 씀
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/3_cards.mjs [--id=…] [--order=1] [--model=…] [--offline]
//   --offline: 모델을 부르지 않고 steps/cards_*.json 으로 검사·저장만 (검사 코드 확인용)
//   --rep-only: 기본 카드(cards/ 의 평판 아닌 카드)는 그대로 두고 평판 카드만 새로 만듦
//   --fresh: 지난 결과 재사용 없이 전부 새로 만듦
//   기본: steps/cards_*.json 에 같은 프롬프트(해시)로 형식 오류 0개인 결과가 있으면 그 묶음(칸 A~D·평판 2장씩)은 모델을 다시 부르지 않음 (중간에 멈춘 뒤 다시 돌릴 때)
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { OUT, ORDER, MAX_LEN, SLOTS, ARGV, loadArc, npcNames, save, readJson, gemini, S } from './lib.mjs';
import { gapBlock, BELITTLE, META } from '../../src/lib/prompts/cardGenSeq.ts';
import { STYLE } from '../../src/lib/prompts/cardGen.ts';

const arc = await loadArc();
const design = readJson('design.json');
const story = readJson('story.json');
const boss = arc.boss_name_korean;
const comp = design.npc;
const names = await npcNames(arc.theme);
const npcOthers = Object.keys(arc.npc_roles).filter((k) => k !== comp);
const FINAL = ORDER === 5;

const REWARDS = ['attack_up', 'defense_up', 'shield', 'intelligence_up', 'move_range_up', 'stun', 'heal', 'cooldown_reset', 'attack_down', 'defense_down', 'intelligence_down', 'hp_down', 'move_range_down'];
const DOWNS = REWARDS.filter((r) => r.endsWith('_down'));
const FALLBACK_REWARD = { easy: 'attack_up', hard: 'defense_up', stat: 'shield', fun: 'cooldown_reset', lock: 'intelligence_up' };
const EVENTS = ['campsite', 'meet_stranger', 'minigame_slot', 'minigame_timing', 'minigame_cup'];
// MBTI 잠금·강제 사건: 시작 파티로 열리는 2글자만 (webfront PARTY_MBTI)
const PARTY = ['ISTJ', 'ENFP', 'INTP', 'ESFJ'];
const opens = (xx) => PARTY.some((m) => [...xx].every((ch) => m.includes(ch)));

// 평판 = 성향 3축의 가장 뚜렷한 방향 (webfront 조건 { leaning, among, min })
const DIRS = ['fighting-', 'fighting+', 'community-', 'community+', 'reason-', 'reason+'];
const DIR_NOTE = {
	'fighting-': '힘으로 밀어붙이고 맞서 싸우는 사람',
	'fighting+': '남을 돕고 손을 내미는 사람',
	'community-': '자기 몫부터 챙기는 사람',
	'community+': '모두를 위해 나서는 사람',
	'reason-': '규칙과 절차를 지키는 사람',
	'reason+': '규칙보다 마음 가는 대로 하는 사람'
};
const REP_MIN = 20; // 이 이상 기운 플레이어에게만
const REP_URGENCY = 8; // 심기 +6 보다 높게, 회수 +12 보다 낮게
const REP_SLOTS = ORDER >= 2 ? ['A', 'B', 'D'] : ['B', 'D']; // 1화 칸 A 는 아직 모두 중립
const statReq = (dir) => ({ stat: dir.slice(0, -1), op: dir.endsWith('-') ? '<=' : '>=', value: dir.endsWith('-') ? -40 : 40 });

// 보스 방 표시: path 별 [종류, boss_penalty]. 회수 카드는 돌아온 기억(returns)에 따라
const FLAG_PLAN = { easy: { easy: ['bad', -1], hard: ['good', 1] }, hard: { easy: ['good', 1], hard: ['good', 2] } };
const REP_FLAGS = { easy: ['bad', -1], hard: ['good', 1], stat: ['good', 2] };

// ── 카드 자리표 ─────────────────────────────────────────────
// 이벤트 5종: A·B 묶음 3종, C·D 묶음 2종. 화마다 돌림. 잠금 4 (A·B 2, C·D 2), 강제 사건 1, fun 3 + 평판 칸마다 2
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
// 평판 칸: 6방향 1장씩. fun 2장·gold 2장 (화마다 자리 돌림)
const repPlan = (slot) => DIRS.map((d, i) => ({ slot, kind: 'rep', rep_dir: d, extra: [['fun'], ['gold'], []][(i + ORDER) % 3] }));
// 요청 나누기: 응답이 짧을수록 빠름 → 기본 카드는 칸마다, 평판 카드는 2장씩(같은 축의 두 방향)
const planOf = (keys) => [...basePlan('AB'), ...basePlan('CD')].filter((r) => keys.includes(r.slot));
const REP_PARTS = [[0, 2], [2, 4], [4, 6]];
const repPart = (slot, part) => repPlan(slot).slice(...REP_PARTS[part]);
const pathsOf = (row) => (row.kind === 'callback' ? ['easy', 'hard'] : [...(row.kind === 'rep' ? ['easy', 'hard', 'stat'] : ['easy', 'hard']), ...(row.extra ?? [])]);
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

// ── 프롬프트 조각 ───────────────────────────────────────────
const storyLines = new Set(story.rooms.flatMap((r) => ['dialogue', 'win_dialogue', 'lose_dialogue'].flatMap((b) => (r[b] ?? []).map((l) => l.content?.korean).filter((t) => t && t.length >= 10))));
const compLines = story.rooms.flatMap((r) => (r.dialogue ?? []).filter((l) => l.speaker === comp && l.content?.korean).map((l) => `  - ${l.content.korean}`)).join('\n');
const memOf = (slot) => design.memory.find((m) => m.plant_slot === slot || m.return_slot === slot);
/** 그 칸들의 앞뒤 장면만 */
const gapsFor = (keys) =>
	gapBlock({ rooms: story.rooms })
		.split(/\n\n(?=### 카드 )/)
		.filter((b) => keys.some((k) => b.startsWith(`### 카드 ${k} `)))
		.join('\n\n');

function slotBlock(key, rep = false) {
	const s = design.slots.find((x) => x.slot === key);
	const g = SLOTS.find((x) => x.key === key);
	const m = memOf(key);
	const mem = rep
		? ''
		: m.plant_slot === key
			? `\n- 심기 카드는 기억 계획대로: 인물 ${m.who} — ${m.plant} / easy: ${m.easy} / hard: ${m.hard}`
			: `\n- 회수 카드는 칸 ${m.plant_slot} 심기 카드의 인물이 돌아옴: ${m.back}
  - returns "easy" = 심기 카드에서 easy 를 고른 사람만 봄 → 규칙의 대가를 겪는 모습 / returns "hard" = hard 를 고른 사람만 봄 → 그 덕을 보는 모습`;
	const tone = FINAL
		? { A: '1~4화의 대가를 겪는 사람', B: '깨달은 뒤에도 같은 틀린 일을 하려는 사람', C: `정답 쪽("${arc.right_action}")을 작게 먼저 해 보는 사람 (쉬운 길은 다시 틀린 쪽)`, D: `정답 쪽("${arc.right_action}")을 작게 먼저 해 보는 사람 (쉬운 길은 다시 틀린 쪽)` }[key]
		: key === 'A' || key === 'B'
			? '세계 규칙의 나쁜 결과는 아직 보이지 않음 (스토리 방 5 에서 처음 보임). 유혹과 당장 이득까지만'
			: '규칙의 대가를 겪는 사람';
	return `## 칸 ${key} (스토리 ${g.after} → 스토리 ${g.before})
- 열린 것 (앞 방이 열어 두고 끝남. 카드는 여기서 시작): ${s.opens}
- 정하는 것: ${s.decides}
- 깨면 안 되는 사실 (다음 방이 깔고 감): ${s.keeps}
- 이 칸의 사람: ${tone}${mem}`;
}

const COMMON = `# 누구의 일인가
- 선택하는 사람은 주인공 (서술에서는 "당신"). 사건은 주인공에게 닥치고 이득·손해도 주인공 쪽
- 동행 \`${comp}\`(${design.npc_name}): 곁에서 거듦 (알려 주기, 걱정·부추기기, 선택 뒤 반응). 이 카드 인물의 말에 반응. 자기를 이름 대신 1인칭으로 (존댓말이면 저/제, 반말이면 나/내). 사건의 당사자가 되거나 선택을 대신 정하지 않음
- 동행 원문 대사 (말투 그대로, 이 문장들을 되풀이하지는 않음):
${compLines}
- 카드 인물의 문제는 스토리 방 NPC 의 문제와 다른 일 (같은 규칙을 다른 물건·사정으로 겪음)

# 지킬 것
- 공간: ${design.place} (무대 ${arc.stage}) 안에서만
- 이 장소의 작은 인물·물건 (써도 됨): ${design.locals.map((l) => `\`${l.id}\` ${l.name} — ${l.note}`).join(' / ')}
- 새 인물도 됨. 다른 NPC(${npcOthers.map((k) => `${k} = ${names[k]}`).join(', ')})는 쓰지 않고, 그 이름을 새 인물에 쓰지도 않음
- 최종보스 이름 "${boss}" 금지. 흔적(${design.boss_trace})은 배경에 비칠 수만 있음. "보스" 낱말 금지${FINAL ? '' : `. 일반 보스("${design.random_boss}")는 나오지 않음`}
- 이번 화 주인공 행동("${design.action}")을 카드에서 대신 하거나 미리 해결하지 않음
- 금지: 설명투(${META.join(', ')}), 선택지 깎아내리기(${BELITTLE.join(', ')}), 괄호 메모, 스토리 방 대사 베끼기, "밤새"·"다음 날" 같은 긴 시간 (카드는 앞뒤 스토리 방 사이의 짧은 틈)

${STYLE}
- 한 줄 ${MAX_LEN}자 이내, 1~2문장. narrator 는 "~했다" 체, 주인공은 "당신". 인물 대사는 구어체
- 선택지 text: 주인공 행동 "~한다" 꼴. 누구에게 무엇을 하는지 분명하게

# 재미 (이건 게임이다)
- 플레이어가 "오, 이건 어떻게 하지?" 하고 고르고 싶어지게. 평범한 부탁·잡일로 끝내지 않음
- 인물마다 눈에 띄는 버릇·사정 하나 (말버릇, 집착하는 물건, 숨기는 것). 대사에서 드러나게
- 사건에 구체적인 걸린 것: 돈 액수, 시간 제한, 들키면 안 되는 사람, 망가지면 안 되는 물건
- 결과에 작은 반전이나 웃음 하나 (장르 분위기 안에서). 고른 대가가 장면으로 보이게
- 선택지끼리 성격이 확실히 다르게: 같은 행동을 말만 바꾼 선택지 금지`;

function choiceRules(rep) {
	return `# 선택지 (자리표의 path 만, 그 개수대로)
| path | 뜻 | 수치 |
| --- | --- | --- |
| easy | ${rep ? '평판대로 행동해 당장 이득' : '당장 이득. 그럴듯한 이유가 보이게'} | reward 1개 또는 gold +50~150 |
| hard | ${rep ? '평판과 다르게 행동해 지금 대가' : '지금 대가(echo 하락·디버프·시간) 대신 바르게'} | reward 1개 |
| gold | 돈으로 해결. 누구에게 무엇에 돈을 쓰는지 text 에 | effects.gold -50~-150 |
| fun | 엉뚱하지만 그 장면에서 말이 되는 행동. 예상 밖 결과 (좋든 나쁘든) | 성향 한 축 ±20~30, reward 1개 또는 gold |
${rep ? '| stat | 평판이 아주 뚜렷할 때(그 방향 40 이상)만 보임. 그 평판 덕에 되는 해결 (사람들이 평판 때문에 따라 주거나 길을 비켜 줌) | 그 평판 방향으로 effects, reward 1개 |' : `| lock | MBTI 잠금. require_mbti 2글자 (파티 ${PARTY.join(', ')} 중 누군가 가진 조합, 예: TJ, NF, NT, SF, EF, IT), mbti 도 같은 글자. 그 성격의 히어로가 직접 하는 행동: text·result 에 {actor} ("{actor}이(가) …한다") | 축 ±10 이하, reward 1개 또는 gold |`}
- effects: fighting(투쟁- ↔ 협력+), community(개인- ↔ 공동체+), reason(질서- ↔ 자유+) 중 1~2개 ±10~30, echo(동행 호감도) ±5~15, gold. 빈 effects 금지
- reward: ${REWARDS.join(', ')} 중 1개
- mbti: 서로 다른 축의 2글자 (예: TJ, NF, EP). 한 카드 안에서 모두 다르게
- result: 2~3줄. 고른 행동에 대한 반응으로 시작. 주인공이 한 일과 결과, 인물·동행 반응. 돌아올 사람·물건이나 보스 방에서 쓰일 것은 장면으로 남김`;
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
  - 유리한 표시: boss_text = 보스 방에서 주인공이 고를 행동 한 문장 ("~한다"). 이 카드 결과로 얻은 사람·물건·정보를 씀
  - 불리한 표시: boss_text = 보스 방에서 주인공에게 닥치는 불리한 일 1~2문장 (눈앞에 보이는 일)
- 어느 쪽인지: 회수 returns "easy" 카드 = easy 불리 / hard 유리, returns "hard" 카드 = 둘 다 유리, 평판 카드 = easy 불리 / hard·stat 유리`;

const OUTPUT = (plan) => `# 카드 자리표 (코드가 정함. 자리마다 카드 1장, 이 표대로)
${planTable(plan)}

# 출력
- cards: 자리마다 1장. no(자리 번호), key(영어 소문자_밑줄 소재 낱말), title, person(id 영어 소문자, name, role. locals 의 person 이면 그 id), wants, rule_link(이번 화 핵심 물건 "${arc.key_object}"·세계 규칙과 어떻게 이어지는지 한 줄), dialogue 3~5줄(speaker narrator / ${comp} / person id, person 이 꼭 말함), choices, background_tags(영어 소문자 5개: 장소·시간·조명·군중·분위기, 이름 있는 인물 금지)
- 회수 카드의 person 은 짝 심기 카드와 같은 사람`;

function basePrompt(pair, context) {
	const keys = pair.split('');
	const plan = planOf(pair);
	return `당신은 선택형 게임의 카드 작가입니다. ${ORDER}화 카드 칸 ${keys.join('·')} 의 카드 ${plan.length}장을 대사까지 씁니다.

# 게임 구조
- 한 화 = 방 10개: 스토리 1 · 카드 A · 스토리 3 · 카드 B · 스토리 5 · 카드 C · 스토리 7 · 카드 D · 휴식 9 · 스토리 10 (보스)
- 칸마다 후보 중 1장이 나옴. 플레이어는 [앞 스토리 방] → [카드 1장] → [다음 스토리 방]. 같은 칸 카드는 같은 틈의 서로 다른 사건이고, 어느 1장이 나와도 앞뒤가 이어져야 함
- 회수 카드는 짝 심기 카드의 기억이 있을 때만 나옴

# 카드 한 장 = 이번 화 규칙을 겪는 사람 한 명의 작은 사건 (가장 중요)
- "그 장소에서 있을 법한 잡일"이 아니라 "이번 화의 문제"를 작게 먼저 겪는 장면. 스토리의 큰 선택(주인공 행동 "${design.action}")의 예행연습
- 카드마다: 원하는 게 있는 사람 1명(person, wants) / 이번 화 핵심 물건·세계 규칙과 연결(rule_link) / 당장 이득과 나중 대가

# 칸별 설계 (설계표)
${keys.map((k) => slotBlock(k)).join('\n\n')}

## 앞뒤 장면 (카드는 앞 방 끝을 이어받고, 다음 방 첫 대사의 전제를 깨지 않음)
${gapsFor(keys)}

${COMMON}

${choiceRules(false)}

${EVENT_RULES}
${plan.some((r) => r.forced) ? `\n${FORCED_RULES}\n` : ''}${plan.some((r) => r.kind === 'callback') ? `\n${FLAG_RULES}\n` : ''}
${OUTPUT(plan)}
${context ? `\n${context}\n` : ''}`;
}

function repPrompt(key, context, part) {
	const plan = repPart(key, part);
	return `당신은 선택형 게임의 카드 작가입니다. ${ORDER}화 칸 ${key} 의 **평판 카드** ${plan.length}장을 대사까지 씁니다.

# 이 게임은 평판 게임
- 플레이어의 선택이 성향 3축(투쟁↔협력, 개인↔공동체, 질서↔자유)으로 쌓이고, 가장 뚜렷한 쪽이 그 사람의 평판이 된다
- 평판 카드는 그 평판(가장 뚜렷한 성향이 그 방향, ${REP_MIN} 이상)인 플레이어에게만, 같은 칸의 기본 카드 대신 나온다
- 평판이 다르면 이 칸에서 완전히 다른 사건을 겪는다. ${plan.length}장은 서로 다른 종류의 사건 (같은 사건을 말만 바꾼 카드 금지)
- 카드 인물은 주인공의 그 평판을 알고(소문을 들음, 전에 본 적 있음) 찾아오거나, 그 평판 때문에 주인공을 막거나 이용하려 한다
  - 인물의 첫 대사 안에 주인공의 평판을 알아보는 말 (예: "당신이 그 ~한다는 사람이죠?"). "투쟁"·"공동체" 같은 축 이름 낱말 대신 그 사람이 한 일로 말함
- 그래도 이번 화의 문제(핵심 물건 "${arc.key_object}", 주인공 행동 "${design.action}")와 이어진 사건

${slotBlock(key, true)}

## 앞뒤 장면 (카드는 앞 방 끝을 이어받고, 다음 방 첫 대사의 전제를 깨지 않음)
${gapsFor([key])}

${COMMON}

${choiceRules(true)}

${FLAG_RULES}

${OUTPUT(plan)}
${context ? `\n${context}\n` : ''}`;
}

// ── 출력 형식 ───────────────────────────────────────────────
const LINE = { type: 'object', properties: { speaker: S, text: S }, required: ['speaker', 'text'] };
const EFFECTS = { type: 'object', properties: { fighting: { type: 'integer' }, community: { type: 'integer' }, reason: { type: 'integer' }, echo: { type: 'integer' }, gold: { type: 'integer' } } };
const FLAG = { type: 'object', properties: { key: S, label: S, boss_text: S }, required: ['key', 'label', 'boss_text'] };
function cardTool(rep) {
	const choice = {
		path: { type: 'string', enum: rep ? ['easy', 'hard', 'stat', 'gold', 'fun'] : ['easy', 'hard', 'gold', 'lock', 'fun'] },
		text: S,
		mbti: S,
		effects: EFFECTS,
		reward: { type: 'array', items: S },
		result: { type: 'array', items: LINE },
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
/** 60자 넘는 줄을 두 조각으로 (문장 끝 → 쉼표 → 띄어쓰기, 가운데에 가까운 자리) */
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
const allLinesOf = (c) => [...(c.dialogue ?? []), ...(c.choices ?? []).flatMap((ch) => [...(ch.result ?? []), ...(ch.event_intro ?? []), ...(ch.event_options?.fight?.win ?? []), ...(ch.event_options?.fight?.lose ?? []), ...(ch.event_options?.avoid?.result ?? [])]), ...(c.forced ?? []).flatMap((f) => f.result ?? [])];

/** {actor} 가 없으면 문장 앞에 붙임 */
const withActor = (t) => (t && !t.includes('{actor}') ? `{actor}이(가) ${t}` : t);
/** 영어 소문자_밑줄로 (대문자·띄어쓰기·하이픈 정리) */
const toKey = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '');

/** 카드 1장을 정리하고 자리표와 맞는지 본다. 오류 문장 배열 */
function checkCard(c, row) {
	const e = [];
	// 자리표가 정한 것은 코드가 덮어씀
	Object.assign(c, { slot: row.slot, kind: row.kind, returns: row.returns, rep_dir: row.rep_dir });
	c.dialogue = splitLines(c.dialogue);
	for (const f of c.forced ?? []) f.result = splitLines(f.result);
	for (const ch of c.choices ?? []) {
		ch.result = splitLines(ch.result);
		if (ch.event_intro) ch.event_intro = splitLines(ch.event_intro);
		const eo = ch.event_options;
		if (eo?.fight) (eo.fight.win = splitLines(eo.fight.win)), (eo.fight.lose = splitLines(eo.fight.lose));
		if (eo?.avoid) eo.avoid.result = splitLines(eo.avoid.result);
		if (ch.event && ch.reward?.length) delete ch.reward; // 이벤트 방이 보상을 줌
		if (ch.path !== 'lock') delete ch.require_mbti;
		if (ch.reward) ch.reward = ch.reward.filter((r) => REWARDS.includes(r)); // 없는 보상 이름은 버림
		// 단순 형식 오류는 다시 요청하지 않고 코드가 채움 (다시 요청하면 카드 전체를 다시 써서 오래 걸림)
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

	// 선택지 path: 자리표 그대로
	const want = pathsOf(row);
	const got = (c.choices ?? []).map((ch) => ch.path);
	if (got.slice().sort().join() !== want.slice().sort().join()) e.push(`선택지 path 는 ${want.join(', ')} (지금 ${got.join(', ')})`);

	// 화자·줄
	const ok = new Set(['narrator', comp, c.person?.id]);
	if (!(c.dialogue ?? []).some((l) => l.speaker === c.person?.id)) e.push(`person(${c.person?.id})이 dialogue 에서 말해야 함`);
	for (const l of allLinesOf(c)) {
		if (!ok.has(l.speaker)) e.push(`화자 "${l.speaker}" 는 쓸 수 없음 (narrator, ${comp}, ${c.person?.id})`);
		if ((l.text ?? '').length > MAX_LEN) e.push(`${MAX_LEN}자 넘는 줄: "${l.text}"`);
		if (/[()]/.test((l.text ?? '').replace(/[이을은와과]\((가|를|는|과|와)\)/g, ''))) e.push(`괄호 메모 금지 (장면으로): "${l.text}"`);
		if (storyLines.has(l.text)) e.push(`스토리 방 대사를 그대로 쓰지 않음: "${l.text}"`);
	}

	// 선택지마다
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
			// 평판 방향 부호는 코드가 맞춤 (모델이 자주 반대로 씀)
			const ax = row.rep_dir.slice(0, -1);
			const sg = row.rep_dir.endsWith('-') ? -1 : 1;
			ch.effects = { ...(ch.effects ?? {}), [ax]: sg * Math.max(10, Math.abs(ch.effects?.[ax] ?? 0)) };
		}
		// 표시: 회수 카드 두 선택지 / 평판 카드 easy·hard·stat
		const needFlag = row.kind === 'callback' || (row.kind === 'rep' && REP_FLAGS[at]);
		if (!needFlag) delete ch.flag;
		else if (!ch.flag?.key || !ch.flag.label || !ch.flag.boss_text) e.push(`${at}: flag(key·label·boss_text)`);
		else if (!/^[a-z][a-z0-9_]*$/.test(ch.flag.key)) e.push(`${at}: flag.key 는 영어 소문자_밑줄`);
	}

	// 이벤트: 자리표에 적힌 것 1개만
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
			if (!DOWNS.includes(ch.avoid_penalty)) e.push(`${ch.path}: avoid_penalty 는 ${DOWNS.join(', ')} 중 1개`);
		} else if (eo) delete ch.event_options;
	}
	for (const ch of c.choices ?? []) if (!ch.event) for (const k of ['event_reason', 'event_intro', 'event_options', 'avoid_penalty']) delete ch[k];

	// 강제 사건
	if (row.forced && (c.forced ?? []).length !== 1) e.push(`강제 사건(forced) 1개 (지금 ${(c.forced ?? []).length})`);
	for (const f of c.forced ?? []) {
		if (!opens(f.require_mbti ?? '') || (f.require_mbti ?? '').length !== 2) e.push(`forced: require_mbti "${f.require_mbti}" 는 파티 중 누군가 가진 2글자`);
		if (f.mbti !== f.require_mbti) e.push('forced: mbti 는 require_mbti 와 같은 글자');
		if (mb.has(f.mbti)) e.push('forced: mbti 가 다른 선택지와 겹침');
		if (!f.text?.includes('{actor}')) e.push('forced: text 에 {actor}');
		if (!(f.reward ?? []).length && !f.effects?.gold) e.push('forced: reward 1개 또는 effects.gold');
		for (const r of f.reward ?? []) if (!REWARDS.includes(r)) e.push(`forced: reward "${r}" 는 없는 보상`);
	}

	const bt = c.background_tags ?? [];
	if (bt.length < 3 || bt.length > 6 || bt.some((t) => !/^[a-z][a-z0-9 _-]*$/.test(t ?? ''))) e.push(`background_tags 는 영어 소문자 5개 (지금 ${JSON.stringify(bt)})`);
	if (JSON.stringify(c).includes(boss)) e.push(`최종보스 이름 "${boss}" 금지`);
	for (const k of npcOthers) if (c.person?.id === k || (c.person?.name ?? '').split(/\s+/).includes(names[k])) e.push(`다른 NPC ${names[k]}(${k}) 는 카드 인물로 쓰지 않음`);
	return e;
}

/** 자리표 전체 검사 → [{ no, msg }] */
function check(cards, plan) {
	return plan.flatMap((row, i) => {
		const c = cards.find((x) => x.no === i + 1);
		return c ? checkCard(c, row).map((msg) => ({ no: i + 1, msg })) : [{ no: i + 1, msg: '이 자리 카드가 없음' }];
	});
}

// ── 생성: 처음 1번 → 걸린 자리만 다시 (최대 2번) ──────────────
const report = [];
const hashOf = (s) => createHash('sha1').update(s).digest('hex');
/** 지난 결과 재사용: 결과 파일에 적힌 프롬프트 해시가 같고 형식 오류 0개일 때만. 아니면 null
 *  - 프롬프트 파일은 생성 전에 저장되므로 비교에 쓰지 않음 (중간에 멈추면 결과 파일과 서로 다른 실행의 것이 됨) */
function passedBefore(name, prompt) {
	const f = path.join(OUT, `steps/cards_${name}.json`);
	if (!fs.existsSync(f)) return null;
	const d = JSON.parse(fs.readFileSync(f, 'utf8'));
	return d.prompt_hash === hashOf(prompt) && d.errors?.length === 0 ? d.cards : null;
}
async function writeCards(name, prompt, tool, plan, label) {
	const reused = ARGV.offline || ARGV.fresh ? null : passedBefore(name, prompt);
	save(`steps/cards_${name}_prompt.md`, prompt);
	let cards;
	if (reused) (cards = reused), console.log(`${label}: 지난 결과 그대로 사용 (같은 프롬프트, 형식 오류 0개)`);
	else if (ARGV.offline) cards = (readJson(`steps/cards_${name}.json`).cards ?? []).map((c, i) => ({ no: c.no ?? i + 1, ...c }));
	else cards = (await gemini(prompt, tool, 0.8)).cards ?? [];
	let errs = check(cards, plan);
	console.log(`${label} 시도 1: 오류 ${errs.length}개 (자리 ${[...new Set(errs.map((x) => x.no))].join(',') || '-'})`);
	for (let t = 2; t <= 3 && errs.length && !ARGV.offline; t++) {
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
		console.log(`${label} 시도 ${t}: 오류 ${errs.length}개 (자리 ${[...new Set(errs.map((x) => x.no))].join(',') || '-'})`);
	}
	errs.slice(0, 10).forEach((x) => console.log(`  - 자리 ${x.no}: ${x.msg}`));
	const missing = errs.filter((x) => x.msg === '이 자리 카드가 없음');
	if (missing.length) throw new Error(`${label}: 빈 자리가 남아 멈춤 (${missing.map((x) => x.no).join(', ')})`);
	cards.sort((a, b) => a.no - b.no);
	const errors = errs.map((x) => `자리 ${x.no} ${cards.find((c) => c.no === x.no)?.key ?? ''}: ${x.msg}`);
	if (!ARGV.offline) save(`steps/cards_${name}.json`, { cards, errors, prompt_hash: hashOf(prompt) });
	report.push({ slots: name, errors });
	return cards;
}

/** 앞 카드: 심기 카드는 전부(회수 카드가 이어받음), 나머지는 제목·인물만 */
function contextOf(cards, full) {
	const brief = (c) => ({ slot: c.slot, kind: c.kind, key: c.key, title: c.title, person: c.person, wants: c.wants });
	const plantFull = (c) => ({ ...brief(c), dialogue: c.dialogue, choices: c.choices.map((ch) => ({ path: ch.path, text: ch.text, result: ch.result })) });
	return `# 앞에서 이미 쓴 카드 (사건·문장 반복 금지${full ? '. 회수 카드는 짝 심기 카드 장면을 이어받음' : ''})
${JSON.stringify(cards.map((c) => (full && c.kind === 'plant' ? plantFull(c) : brief(c))), null, 1)}`;
}

const REP_ONLY = !!ARGV['rep-only'];
const cardDir = path.join(OUT, ARGV.offline ? 'steps/offline_cards' : 'cards');
// --rep-only: 이미 있는 기본 카드 (게임 형식) → 맥락용 요약
const keptFiles = REP_ONLY ? fs.readdirSync(cardDir).filter((f) => f.endsWith('.json')).map((f) => [f, JSON.parse(fs.readFileSync(path.join(cardDir, f), 'utf8'))]).filter(([, c]) => c.kind !== 'rep') : [];
const kept = keptFiles.map(([, c]) => ({ slot: c._side.slot, kind: c.kind, key: c.id.replace(`card_0${ORDER}_`, ''), title: c.title.korean, person: c._side.person, wants: c._side.wants, choices: c.choices.map((ch) => ({ flag: ch.flag ? { key: ch.flag } : null })) }));
// 요청 순서: 칸 A → C, 칸 B → D 두 줄과 평판 카드(2장씩)를 모두 동시에
//  - 회수 카드(C·D)만 짝 심기 카드(A·B)를 기다림. 칸 A·B 끼리, 평판 카드는 서로의 결과를 보지 않음 (사건이 겹칠 수 있음)
const base = (k, context) => writeCards(k, basePrompt(k, context), cardTool(false), planOf(k), `${ORDER}화 칸 ${k}`);
const line2 = async (first, then) => {
	const a = await base(first, '');
	return [a, await base(then, contextOf(a, true))];
};
// 평판 묶음마다 자리 번호(no)가 1부터라 key 가 겹칠 때 구분이 안 됨 → 칸 안 순번으로 바꿈
const rep = (k, part) => writeCards(`rep${k}_${part + 1}`, repPrompt(k, REP_ONLY ? contextOf(kept, false) : '', part), cardTool(true), repPart(k, part), `${ORDER}화 평판 칸 ${k} (${part + 1}/3)`).then((cs) => cs.map((c) => ({ ...c, no: c.no + REP_PARTS[part][0] })));
const [ac, bd, ...reps] = await Promise.all([REP_ONLY ? [[], []] : line2('A', 'C'), REP_ONLY ? [[], []] : line2('B', 'D'), ...REP_SLOTS.flatMap((k) => REP_PARTS.map((_, i) => rep(k, i)))]);
const ab = [...ac[0], ...bd[0]];
const cd = [...ac[1], ...bd[1]];

// 동시에 만들어서 key·표시 이름이 겹칠 수 있음 → 칸 이름을 붙여 구분
const all = [];
const seenKey = new Set(kept.map((c) => c.key));
const seenFlag = new Set(kept.flatMap((c) => c.choices.map((ch) => ch.flag?.key).filter(Boolean)));
for (const c of [...ab, ...cd, ...reps.flat()]) {
	if (seenKey.has(c.key)) c.key = `${c.key}_${c.slot.toLowerCase()}${c.no}`;
	seenKey.add(c.key);
	for (const ch of c.choices)
		if (ch.flag?.key) {
			if (seenFlag.has(ch.flag.key)) ch.flag.key = `${ch.flag.key}_${c.slot.toLowerCase()}${c.no}`;
			seenFlag.add(ch.flag.key);
		}
	all.push(c);
}

// ── 게임(webfront) 카드 형식 ────────────────────────────────
const line = (l) => ({ speaker: l.speaker, content: { korean: l.text } });
function toCard(c, plants) {
	const g = SLOTS.find((x) => x.key === c.slot);
	const id = `card_0${ORDER}_${c.key}`;
	const plant = c.kind === 'callback' ? plants[memOf(c.slot).plant_slot] : null;
	const seedOf = (p) => (c.kind === 'plant' ? `${c.key}_${p === 'easy' ? 'easy' : 'hard'}` : null); // gold·lock·fun 은 hard 기억
	const flagOf = (ch) => (c.kind === 'rep' ? REP_FLAGS[ch.path] : FLAG_PLAN[c.returns]?.[ch.path]) ?? ['good', 1];
	return {
		id,
		kind: c.kind,
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
			return {
				text: { korean: ch.text },
				path: ch.path,
				mbti: ch.mbti,
				...(ch.path === 'gold' && { require: { stat: 'gold', op: '>=', value: -effects.gold } }),
				...(ch.path === 'lock' && { require: { mbti: ch.require_mbti } }),
				...(ch.path === 'stat' && c.rep_dir && { require: statReq(c.rep_dir) }),
				...(ch.flag && { flag: ch.flag.key }),
				effects,
				// 끝까지 비면 기본 보상 (형식 오류로도 남음)
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
				})
			};
		}),
		// 읽기용 (게임은 안 씀)
		_side: {
			slot: c.slot,
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

const plants = Object.fromEntries(all.filter((c) => c.kind === 'plant').map((c) => [c.slot, c]));
if (REP_ONLY) {
	// 기본 카드는 그대로, 예전 평판 카드만 지움
	for (const f of fs.readdirSync(cardDir)) if (f.endsWith('.json') && !keptFiles.some(([k]) => k === f)) fs.rmSync(path.join(cardDir, f));
} else fs.rmSync(cardDir, { recursive: true, force: true });
for (const c of all) {
	const card = toCard(c, plants);
	save(`${path.relative(OUT, cardDir)}/${card.id}.json`, card);
}
if (!ARGV.offline) {
	const actors = { ...(REP_ONLY ? readJson('actors.json') : {}), ...Object.fromEntries(all.map((c) => [c.person.id, { name: { korean: c.person.name }, role: c.person.role }])) };
	save('actors.json', actors);
	save('cards_report.json', REP_ONLY ? [...readJson('cards_report.json').filter((r) => !r.slots.startsWith('rep')), ...report] : report);
}
console.log(`카드 ${all.length}장 저장: ${cardDir} (남은 형식 오류 ${report.reduce((n, r) => n + r.errors.length, 0)}개)`);
