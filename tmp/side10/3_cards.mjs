// 3단계: 카드 칸(방 2·4·6·8)마다 후보 3장
// 3장은 서로 다른 사건이지만, 그 칸의 must(꼭 보여 줄 정보)와 복선은 3장 모두 대사에 넣음 → 누가 어떤 카드를 만나도 정보를 얻음
// 입력: plan.json, 0N/story.json (앞뒤 스토리 방 줄)
// node --experimental-strip-types --no-warnings tmp/side10/3_cards.mjs [--order=1,2]
import fs from 'node:fs';
import path from 'node:path';
import { OUT, ORDERS, MAX_LEN, VAGUE, epDir, save, readJson, generate, S } from './lib.mjs';

const plan = readJson(path.join(OUT, 'plan.json'));
if (!plan) throw new Error('plan.json 없음 — 1_plan.mjs 먼저');

const REWARDS = ['attack_up', 'defense_up', 'shield', 'intelligence_up', 'move_range_up', 'stun', 'heal', 'cooldown_reset', 'attack_down', 'defense_down', 'intelligence_down', 'hp_down', 'move_range_down'];
const BELITTLE = ['무작정', '현혹', '알아채지 못', '맹목', '어리석', '생각 없이', '무턱대고', '덮어놓고'];
const META = ['언급된', '앞 방', '다음 방', '이 카드', '카드'];
const GAP = 6;

const nm = (k) => plan.npcs.find((n) => n.key === k)?.name ?? k;
const say = (l) => (l.type === 'direction' ? `(${l.action}: ${l.speaker})` : `${l.speaker}: ${l.content?.korean ?? ''}`);

function prompt(ep, slot, story, used) {
	const fin = ep.order === 5;
	const comp = ep.npc;
	const room = (id) => story.rooms.find((r) => r.id === id);
	const prevLines = (room(slot.after)?.dialogue ?? []).slice(-GAP).map(say);
	const nextLines = (room(slot.before)?.dialogue ?? []).slice(0, GAP).map(say);
	const hideObj = ep.order >= 2 && ep.order <= 4;
	const hideBoss = !fin || slot.room < 5;
	const mask = (h) => (hideBoss ? h.replaceAll(plan.boss_name, '정체 모를 누군가') : h);
	const hints = [
		...slot.plant.map(mask).map((h) => `- 복선 심기: ${h}\n  - 배경에 보이는 사실로만 툭 보여 준다. 무슨 뜻인지 설명하지 않고, 인물이 대수롭지 않게 넘긴다`),
		...slot.reveal.map(mask).map((h) => `- 복선 공개: ${h}\n  - 이 사실이 이 카드 장면에서 눈앞에 드러난다`)
	];

	return `당신은 게임 카드 작가입니다. ${ep.order}화 카드방 ${slot.room}(스토리 ${slot.after} → 스토리 ${slot.before} 사이)에 나올 후보 카드 3장을 씁니다.

# 게임 구조
- 한 화 = 방 10개: 스토리 1 / 카드 2 / 스토리 3 / 카드 4 / 스토리 5 / 카드 6 / 스토리 7 / 카드 8 / 휴식 9 / 스토리 10(보스 전투)
- 이 칸에서는 후보 3장 중 1장만 플레이어에게 나온다. 플레이어는 [앞 스토리 방] → [카드 1장] → [다음 스토리 방] 순서로 본다
- 스토리 방은 뼈대만 말한다. 카드가 이야기의 디테일(사람 사정, 증거, 주변 반응)을 맡는다

# 이 칸이 꼭 보여 줄 것 (3장 모두)
- must: ${slot.must}
  - 3장 모두, 각자 다른 사건 속에서 이 사실을 대사(dialogue)로 분명히 보여 준다. 선택지 결과(result)가 아니라 dialogue 에 (어떤 선택을 해도 보게)
  - must 문장을 그대로 옮기지 않는다. 그 카드 인물이 자기 사정으로 말하거나, 눈앞의 물건·숫자로 보여 준다
  - 그 정보를 전하는 dialogue 줄을 must_line 에 글자 그대로 옮긴다
${hints.length ? `${hints.join('\n')}\n- 위 복선도 3장 모두 dialogue 에 한 번만, 자기 말로 짧게 (복선 문장을 그대로 옮기지 않음, ${MAX_LEN}자 이내) 넣고, 그 줄을 hint_line 에 글자 그대로 옮긴다\n` : ''}
# 앞뒤 연결 (가장 중요)
- 카드 장면은 앞 방 마지막 장면 바로 뒤, 다음 방 첫 장면 바로 앞에 일어나는 작은 사건
- 장소·인물 상태를 앞 방 끝에서 이어받음. 다음 방 첫 대사가 그대로 말이 되어야 함
  - 다음 방에서 일어날 일을 카드에서 먼저 해결하거나 먼저 밝히지 않음
- 카드 결과는 다음 방 상황을 바꾸지 않는 크기로 (작은 물건·돈·사람 관계·몸 상태)
- 첫 줄은 앞 방 대사를 다시 말하지 않음. 장소·사람·물건으로 바로 시작

### 앞 방(스토리 ${slot.after}) 마지막
${prevLines.map((t) => `  ${t}`).join('\n') || '  (없음)'}
### 다음 방(스토리 ${slot.before}) 시작
${nextLines.map((t) => `  ${t}`).join('\n') || '  (없음)'}

# 누구의 일인가 (주인공 관점)
- 선택하는 사람은 플레이어(주인공, 서술에서는 "당신"). 사건은 주인공에게 닥치고, 이득·손해도 주인공 쪽이 봄
  - "<인물>이(가) 당신 앞을 막아섰다", "<인물>이(가) 당신에게 ~을 내밀었다"
- 동행 \`${comp}\`(${nm(comp)})은 곁에서 거듦: 상황을 알려 주고, 걱정하거나 부추기고, 선택 뒤에 반응함
  - 동행은 자기를 "나/내"로 말함 (자기 이름 "${nm(comp)}"을 3인칭으로 쓰지 않음)
  - 동행이 사건의 당사자가 되지 않음. 동행이 "내가 ~해야 해" 처럼 자기 목표를 세우거나 선택을 대신 정하지 않음

# 카드 내용 규칙
- 사건은 사람이 일으킴: 카드마다 새 인물 1명(people) 이상이 나와 말하고, 그 사람이 당신에게 무엇을 원하거나 막음
  - 부탁, 거래·흥정, 다툼 말리기, 분실물 찾기, 고발, 유혹·뇌물, 사고 수습 등. 3장은 서로 다른 종류
  - 사람 후보 (참고): ${slot.people.join(', ')}. 앞에서 쓴 인물(${used.people.join(', ') || '없음'})은 다시 쓰지 않음
  - 손에 잡히는 물건·돈으로. 데이터·화면이 스스로 폭주하는 사건 금지
- 공간: ${ep.place} (무대 ${plan.stage}) 안이나 바로 옆에서만
- 최종보스는 카드에서 직접 움직이지 않음${hideBoss ? `. 이름 "${plan.boss_name}" 을 쓰지 않음` : ''}
${hideObj ? `- 핵심 물건 이름 "${plan.key_object}" 을 쓰지 않음 (5화에 밝혀짐)\n` : ''}${ep.random_boss ? `- 일반 보스("${ep.random_boss}")는 카드에 나오지 않고, 그 호칭도 쓰지 않음\n` : ''}- 이번 화 주인공 행동(${ep.action})을 카드에서 대신 하거나 미리 해결하지 않음
- "보스" 낱말 금지. 설명투(${META.join(', ')}) 금지. 비유 금지. 금지 낱말: ${VAGUE.join(', ')}
- 앞 칸에서 쓴 사건 제목(${used.titles.join(', ') || '없음'})과 겹치지 않게

# 문체
- 한 줄 ${MAX_LEN}자 이내, 1~2문장
- narrator: "~했다/~였다" 체, 눈에 보이는 일만. 주인공은 "당신"
- 인물 대사는 구어체 반말 (손님에게 하는 말 등 존댓말이 자연스러우면 그 인물은 끝까지 존댓말)
- 선택지 text: 주인공이 하는 행동 "~한다" 꼴. 깎아내리는 말 금지: ${BELITTLE.join(', ')}

# 선택지 (카드마다 정확히 3개, path 하나씩)
- easy: 당장 이득 (보상 버프 또는 gold +50~150). 그럴듯한 이유가 보이게. 대신 누군가에게 작은 손해
- hard: 지금 대가를 치름 (동행 호감도·시간·디버프) 대신 사람을 돕거나 바르게 함
- gold: 돈을 써서 해결 (gold -50~-150). 확실히 좋은 결과
- effects: fighting(투쟁- ↔ 협력+), community(개인- ↔ 공동체+), reason(질서- ↔ 자유+) 중 1~2개를 ±10~30, echo(동행 호감도) ±5~15, gold. 빈 effects 금지
- reward: 배열 0~1개. ${REWARDS.join(', ')} 중. easy·hard 는 reward 1개 필수
- mbti: 서로 다른 축의 2글자 (E/I, S/N, T/F, J/P 네 축 중 두 축에서 한 글자씩. 예: TJ, NF, EP. "TF"·"JP"·4글자 금지). 한 카드 안에서 모두 다르게. 행동과 성격이 맞게 (T 따지기, F 공감, S 눈앞의 물건, N 숨은 뜻, J 규칙, P 즉흥, E 나서기, I 조용히)
- result: 2~4줄. narrator 로 주인공이 한 일과 결과, 그다음 인물·동행 반응

# 이 이야기
- 장르: ${plan.genre} / 분위기: ${ep.mood}
- ${ep.order}화 "${ep.title}" — 주 NPC ${nm(comp)}의 곤란: ${ep.trouble}
- 이번 화 주인공 행동: ${ep.action}${ep.boss_trace && ep.order < 5 ? ` / 흔적(${ep.boss_trace})은 배경에 비칠 수만 있음` : ''}
${ep.order === 1 || fin ? `- 핵심 물건: ${plan.key_object}\n` : ''}- 카드에 나오는 이야기 인물은 동행 ${nm(comp)} 하나뿐. 다른 NPC(${plan.npcs.filter((n) => n.key !== comp).map((n) => n.name).join(', ')})는 카드에 나오지 않고 그 이름도 새 인물에 쓰지 않음

# 출력
- key: 영어 소문자_밑줄 (예: lost_wallet). 앞에서 쓴 key(${used.keys.join(', ') || '없음'})와 다르게
- people: 이 카드에 새로 나오는 인물 (id 영어 소문자, name 한국어 이름이나 호칭, role 한 줄)
- dialogue: 3~6줄. speaker 는 narrator / ${comp} / people id
- 선택지 text 에 비용 표시("(골드 -100)")를 붙이지 않음 (게임이 보여 줌)
- background_tags: 장면 낱말 3~5개`;
}

const LINE = { type: 'object', properties: { speaker: S, text: S }, required: ['speaker', 'text'] };
const tool = {
	name: 'slot_cards',
	description: '카드 칸 1개의 후보 카드 3장',
	parameters: {
		type: 'object',
		properties: {
			cards: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						key: S,
						title: S,
						event: { type: 'string', description: '한 줄: <인물>이(가) <무엇> 때문에 당신에게 <원하는 것>' },
						people: { type: 'array', items: { type: 'object', properties: { id: S, name: S, role: S }, required: ['id', 'name', 'role'] } },
						intensity: { type: 'string', enum: ['calm', 'high'] },
						background_tags: { type: 'array', items: S },
						dialogue: { type: 'array', items: LINE },
						must_line: S,
						hint_line: S,
						choices: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									path: { type: 'string', enum: ['easy', 'hard', 'gold'] },
									text: S,
									mbti: S,
									effects: {
										type: 'object',
										properties: { fighting: { type: 'integer' }, community: { type: 'integer' }, reason: { type: 'integer' }, echo: { type: 'integer' }, gold: { type: 'integer' } }
									},
									reward: { type: 'array', items: S },
									result: { type: 'array', items: LINE }
								},
								required: ['path', 'text', 'mbti', 'effects', 'reward', 'result']
							}
						}
					},
					required: ['key', 'title', 'event', 'people', 'intensity', 'background_tags', 'dialogue', 'must_line', 'choices']
				}
			}
		},
		required: ['cards']
	}
};

const norm = (t) => (t ?? '').replace(/\s+/g, ' ').trim();

/** 한 줄을 60자 이내 두 조각으로 (문장 끝 → 쉼표 → 띄어쓰기, 가운데에 가까운 자리) */
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

const AXES = ['EI', 'SN', 'TF', 'JP'];
function tidyMbti(m) {
	const t = (m ?? '').toUpperCase().replace(/[^EISNTFJP]/g, '');
	if (t.length === 4) return t.slice(1, 3);
	if (t.length !== 2) return t;
	const [a, b] = [...t].map((ch) => [ch, AXES.findIndex((x) => x.includes(ch))]).sort((x, y) => x[1] - y[1]);
	return a[1] === b[1] ? t : a[0] + b[0]; // 같은 축 두 글자(TF 등)는 검사에서 걸리게 그대로
}

function tidy(out) {
	for (const c of out.cards ?? []) {
		for (const ch of c.choices ?? []) ch.mbti = tidyMbti(ch.mbti);
		c.dialogue = splitLines(c.dialogue);
		for (const ch of c.choices ?? []) {
			ch.text = (ch.text ?? '').replace(/\s*[(（][^)）]*골드[^)）]*[)）]\s*/g, ' ').trim();
			ch.result = splitLines(ch.result);
		}
	}
}

function check(out, ep, slot, used) {
	tidy(out);
	const e = [];
	const cards = out.cards ?? [];
	if (cards.length !== 3) return [`카드는 정확히 3장 (지금 ${cards.length})`];
	const hideObj = ep.order >= 2 && ep.order <= 4;
	const hideBoss = ep.order < 5 || slot.room < 5;
	const keys = new Set();
	for (const c of cards) {
		const id = c.key;
		if (!/^[a-z][a-z0-9_]*$/.test(id ?? '')) e.push(`${id}: key 는 영어 소문자_밑줄`);
		if (keys.has(id) || used.keys.includes(id)) e.push(`${id}: key 가 겹칩니다`);
		keys.add(id);
		const people = (c.people ?? []).map((p) => p.id);
		const ok = new Set(['narrator', ep.npc, ...people]);
		const others = plan.npcs.filter((n) => n.key !== ep.npc);
		for (const p of c.people ?? []) if (others.some((n) => n.key === p.id || (p.name ?? '').includes(n.name))) e.push(`${id}: 다른 NPC(${p.name})는 카드에 쓰지 않습니다. 새 인물로`);
		const dlg = c.dialogue ?? [];
		if (dlg.length < 3 || dlg.length > 7) e.push(`${id}: dialogue 는 3~6줄 (지금 ${dlg.length})`);
		if (!people.length) e.push(`${id}: 새 인물(people)이 1명 이상 있어야 합니다`);
		else if (!dlg.some((l) => people.includes(l.speaker))) e.push(`${id}: 새 인물이 dialogue 에서 말해야 합니다`);
		for (const p of c.people ?? []) if (used.people.includes(p.name)) e.push(`${id}: 인물 "${p.name}" 은 앞 칸에서 썼습니다`);
		const dTexts = dlg.map((l) => norm(l.text));
		const joined = dTexts.join(' ');
		if (!c.must_line || !joined.includes(norm(c.must_line))) e.push(`${id}: must_line 이 dialogue 의 한 줄과 글자 그대로 같아야 합니다 (must: ${slot.must})`);
		if (slot.plant.length + slot.reveal.length && (!c.hint_line || !joined.includes(norm(c.hint_line)))) e.push(`${id}: 복선 줄(hint_line)이 dialogue 의 한 줄과 글자 그대로 같아야 합니다`);
		const lines = [...dlg];
		const paths = (c.choices ?? []).map((ch) => ch.path).sort().join();
		if (paths !== 'easy,gold,hard') e.push(`${id}: 선택지는 easy·hard·gold 하나씩 3개 (지금 ${paths})`);
		const mb = new Set();
		for (const ch of c.choices ?? []) {
			const tag = `${id}/${ch.path}`;
			lines.push(...(ch.result ?? []));
			if (!/^[EI]?[SN]?[TF]?[JP]?$/.test(ch.mbti ?? '') || (ch.mbti ?? '').length !== 2) e.push(`${tag}: mbti "${ch.mbti}" 는 서로 다른 축의 2글자로 (예: TJ, NF, EP)`);
			if (mb.has(ch.mbti)) e.push(`${tag}: mbti 가 같은 카드 안에서 겹칩니다`);
			mb.add(ch.mbti);
			const ef = ch.effects ?? {};
			if (!Object.values(ef).some((v) => v)) e.push(`${tag}: effects 가 비었습니다`);
			for (const r of ch.reward ?? []) if (!REWARDS.includes(r)) e.push(`${tag}: reward "${r}" 는 없는 보상`);
			if (ch.path !== 'gold' && !(ch.reward ?? []).length) e.push(`${tag}: easy·hard 는 reward 1개 필수`);
			if (ch.path === 'gold' && !(ef.gold <= -50 && ef.gold >= -150)) e.push(`${tag}: gold 선택지는 effects.gold -50~-150`);
			if ((ch.result ?? []).length < 2) e.push(`${tag}: result 는 2~4줄`);
			if (!/다[.!]?$/.test(norm(ch.text))) e.push(`${tag}: 선택지 text 는 "~한다" 꼴: "${ch.text}"`);
			for (const w of BELITTLE) if ((ch.text ?? '').includes(w)) e.push(`${tag}: 깎아내리는 말 "${w}"`);
		}
		for (const l of lines) {
			const t = l.text ?? '';
			if (!ok.has(l.speaker)) e.push(`${id}: 화자 "${l.speaker}" 는 쓸 수 없습니다 (narrator, ${ep.npc}, people id)`);
			if (t.length > MAX_LEN) e.push(`${id}: ${MAX_LEN}자 넘는 줄: "${t}"`);
			if (l.speaker === ep.npc && t.includes(nm(ep.npc))) e.push(`${id}: 동행이 자기 이름을 3인칭으로 씁니다: "${t}". "나/내"로`);
			if (l.speaker === 'narrator' && /(요|니다)[.!?]?$/.test(t.trim())) e.push(`${id}: narrator 는 "~했다" 체: "${t}"`);
		}
		const all = [c.title, c.event, ...lines.map((l) => l.text), ...(c.choices ?? []).map((ch) => ch.text)].join(' ');
		if (/보스/.test(all)) e.push(`${id}: "보스" 낱말 금지`);
		for (const w of VAGUE) if (all.includes(w)) e.push(`${id}: 금지 낱말 "${w}"`);
		for (const w of META) if (all.includes(w)) e.push(`${id}: 설명투 "${w}"`);
		if (hideBoss && all.includes(plan.boss_name)) e.push(`${id}: 최종보스 이름 "${plan.boss_name}" 금지`);
		if (hideObj && all.includes(plan.key_object)) e.push(`${id}: 핵심 물건 "${plan.key_object}" 금지 (5화에 밝혀짐)`);
		if (ep.random_boss && all.includes(ep.random_boss)) e.push(`${id}: 일반 보스 호칭 "${ep.random_boss}" 금지`);
	}
	return e;
}

/** 게임(webfront) 카드 형식으로 */
function toCard(c, ep, slot) {
	const line = (l) => ({ speaker: l.speaker, content: { korean: l.text } });
	return {
		id: `card_0${ep.order}_${c.key}`,
		title: { korean: c.title },
		tags: [c.key.split('_')[0]],
		intensity: c.intensity,
		after_story: slot.after,
		before_story: slot.before,
		background_tags: c.background_tags,
		dialogue: c.dialogue.map(line),
		choices: c.choices.map((ch) => {
			const effects = Object.fromEntries(Object.entries(ch.effects ?? {}).filter(([, v]) => v));
			return {
				text: { korean: ch.text },
				path: ch.path,
				mbti: ch.mbti,
				...(ch.path === 'gold' && { require: { stat: 'gold', op: '>=', value: -effects.gold } }),
				effects,
				...((ch.reward ?? []).length && { reward: ch.reward }),
				seed: null,
				result: ch.result.map(line)
			};
		}),
		// 읽기용 (게임은 안 씀)
		_slot: { room: slot.room, must: slot.must, must_line: c.must_line, hint_line: c.hint_line || undefined, event: c.event }
	};
}

// 실행 방식
//  (기본)  칸 전부 새로 생성
//  --fix   저장된 칸 출력을 코드로 다시 다듬고(mbti 등) 검사 → 그래도 오류 남은 칸만 다시 생성
//  --slots=4,8  그 칸만 다시 생성 (나머지는 저장된 것 그대로)
const FIX = process.argv.includes('--fix');
const ONLY = (process.argv.find((a) => a.startsWith('--slots=')) ?? '').slice(8).split(',').filter(Boolean).map(Number);

const usedPeople = []; // 화를 넘어 누적 (같은 인물 반복 방지)

for (const order of ORDERS) {
	const ep = plan.episodes.find((x) => x.order === order);
	const dir = epDir(order);
	const story = readJson(path.join(dir, 'story.json'));
	if (!story) {
		console.log(`${order}화: story.json 없음 — 2_story.mjs 먼저. 건너뜀`);
		continue;
	}
	const steps = path.join(dir, 'steps');
	const used = { keys: [], titles: [], people: usedPeople };
	const actors = {};
	const report = [];
	const outs = [];
	for (const slot of ep.slots) {
		const saved = readJson(path.join(steps, `cards_${slot.room}.json`));
		let out = null;
		let errors = [];
		if (saved && (FIX || (ONLY.length && !ONLY.includes(slot.room)))) {
			out = saved;
			errors = check(out, ep, slot, used);
			if (FIX && errors.length) {
				console.log(`${order}화 칸 ${slot.room}: 다듬은 뒤에도 오류 ${errors.length}개 → 다시 생성`);
				out = null;
			}
		}
		if (!out) {
			const p = prompt(ep, slot, story, used);
			save(steps, `cards_${slot.room}_prompt.md`, p);
			({ out, errors } = await generate(p, tool, (o) => check(o, ep, slot, used), { label: `${order}화 칸 ${slot.room}` }));
		}
		save(steps, `cards_${slot.room}.json`, { ...out, errors });
		report.push({ room: slot.room, errors });
		outs.push([slot, out]);
		for (const c of out.cards ?? []) {
			used.keys.push(c.key);
			used.titles.push(c.title);
			for (const pp of c.people ?? []) {
				usedPeople.push(pp.name);
				actors[pp.id] = { name: { korean: pp.name }, role: pp.role };
			}
		}
	}
	// 카드 폴더는 새로 씀
	const cardDir = path.join(dir, 'cards');
	fs.rmSync(cardDir, { recursive: true, force: true });
	for (const [slot, out] of outs)
		for (const c of out.cards ?? []) {
			const card = toCard(c, ep, slot);
			save(cardDir, `${card.id}.json`, card);
		}
	save(dir, 'actors.json', actors);
	save(dir, 'cards_report.json', report);
	console.log(`${order}화 카드 저장: ${cardDir} (남은 오류 ${report.reduce((n, r) => n + r.errors.length, 0)}개)`);
}
