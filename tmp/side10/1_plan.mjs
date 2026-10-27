// 1단계: 화별 설계 — 스토리방(1·3·5·7·10)에 둘 고정 뼈대 / 카드 칸(2·4·6·8)이 맡을 정보 나누기
// 원본 storyarc 내용(핵심 물건·행동·인물·흔적)은 바꾸지 않음. 복선은 코드가 칸에 배정.
// node --experimental-strip-types --no-warnings tmp/side10/1_plan.mjs [--id=modern_whisperweb_0]
import path from 'node:path';
import { ID, OUT, loadArc, npcNames, save, generate, S, VAGUE, SLOTS, verbStem } from './lib.mjs';

const arc = loadArc();
const names = await npcNames(arc.theme);
const nm = (k) => names[k] ?? k;
const outline = (o) => arc.scenarioOutline.find((x) => x.order === o) ?? {};
const spine = (o) => arc.story_spine.find((x) => x.order === o) ?? {};
const actOf = (o) => (o === 1 ? 'intro' : o === 5 ? 'climax_finale' : 'rising');

// ── 복선 배정 (코드) ───────────────────────────────────────
// 예전 방 번호(1,3,5,9,15) → 새 자리. 심기는 카드 칸, 5화 보스 방(15) 공개만 스토리 방 10
const PLANT_AT = { 1: 2, 3: 4, 5: 6, 9: 8, 15: 8 };
const REVEAL_AT = { 1: 2, 3: 4, 5: 6, 9: 8, 15: 10 };

/** act 가 rising 이면 2~4화 중 어느 화인지: 글에 "N화" 나 그 화 주 NPC 이름이 있으면 그 화, 없으면 차례로 */
function orderFor(act, text, i) {
	if (act === 'intro') return 1;
	if (act === 'climax_finale') return 5;
	const m = text.match(/([234])화/);
	if (m) return Number(m[1]);
	for (const o of [2, 3, 4]) if (text.includes(nm(outline(o).npc))) return o;
	return 2 + (i % 3);
}

function assignForeshadowing() {
	const list = [];
	let ri = 0;
	for (const f of arc.global_foreshadowing ?? []) {
		const plantOrder = orderFor(f.plant_act, f.reveal_context + f.hint, f.plant_act === 'rising' ? ri++ : 0);
		const revealOrder = orderFor(f.reveal_act, f.reveal_context, 0);
		list.push({
			id: f.id,
			hint: f.hint,
			reveal: f.reveal_context,
			plant: { order: plantOrder, room: PLANT_AT[f.plant_room] ?? 2 },
			at: { order: revealOrder, room: REVEAL_AT[f.reveal_room] ?? 10 }
		});
	}
	// 같은 화·같은 칸에 심기가 겹치면 다음 빈 칸으로
	const used = new Set();
	for (const f of list) {
		const rooms = [2, 4, 6, 8];
		let i = rooms.indexOf(f.plant.room);
		while (used.has(`${f.plant.order}/${rooms[i]}`) && i < rooms.length - 1) i++;
		f.plant.room = rooms[i];
		used.add(`${f.plant.order}/${f.plant.room}`);
	}
	return list;
}
const foreshadowing = assignForeshadowing();

// ── 프롬프트 ───────────────────────────────────────────────

function episodeSource(o) {
	const out = outline(o);
	const sp = spine(o);
	const tone = arc.act_tone?.[actOf(o)] ?? {};
	return {
		order: o,
		title: out.title,
		place: out.place,
		mood: tone.mood,
		main_npc: `${out.npc} = ${nm(out.npc)} (${arc.npc_roles?.[out.npc]?.title ?? ''})`,
		boss_trace: out.boss_trace ?? '',
		random_boss: out.random_boss_title ? `${out.random_boss_title} (${out.random_boss_side === 'warn' ? '경고하는 쪽' : '최종보스 편'})` : '',
		protagonist_action: sp.protagonist_action,
		lesson: sp.lesson,
		hidden_link: sp.hidden_link,
		line: sp.line,
		summary: out.summary,
		plant_here: foreshadowing.filter((f) => f.plant.order === o).map((f) => `칸 ${f.plant.room}: ${f.hint}`),
		reveal_here: foreshadowing.filter((f) => f.at.order === o).map((f) => `${f.at.room === 10 ? '스토리 방 10' : `칸 ${f.at.room}`}: ${f.reveal}`)
	};
}

function prompt() {
	const fb = arc.final_boss ?? {};
	const npcs = Object.entries(arc.npc_roles ?? {})
		.map(([k, v]) => `- ${k} = ${nm(k)} (${v.title}): ${v.role}. ${v.arc}${v.turn_order ? ` / ${v.turn_order}화에 편을 바꿈: ${v.turn_scene}` : ''}`)
		.join('\n');
	return `당신은 게임 시나리오 기획자입니다. 아래 스토리아크를 화마다 "스토리 방"과 "카드 칸"으로 나눠 설계합니다.

# 게임 구조
- 한 화 = 방 10개: 스토리 1 / 카드 2 / 스토리 3 / 카드 4 / 스토리 5 / 카드 6 / 스토리 7 / 카드 8 / 휴식 9 / 스토리 10(보스 전투)
- 스토리 방: 모든 플레이어가 똑같이 본다. 장소·새 사건을 만들지 않고, 꼭 일어나야 하는 일만 짧게 맡는다
- 카드 칸: 칸마다 후보 카드 3장 중 1장이 나온다. 카드는 사람이 일으키는 작은 사건 (부탁, 거래, 다툼, 분실물 등)
  - 같은 칸의 3장은 서로 다른 사건이지만, 그 칸의 must(꼭 보여 줄 정보 1개)는 3장 모두 보여 준다. 그래서 누가 어떤 카드를 만나도 이야기에 필요한 정보는 다 얻는다
  - 이야기의 디테일(인물 사정, 믿게 되는 이유, 당장 효과, 대가의 전조, 증거)은 카드가 맡는다

# 나누는 법
## 1~4화
- 스토리 방 1: 주 NPC 의 곤란(한 문장) + 흔적이 권하는 말(trace_says) + 이번 화 목표. 짧게. 사정 디테일은 카드로. 하기로 마음먹는 것은 방 3 (방 1에서 결정하지 않음)
- 칸 2: 곤란이 얼마나 급한지 보여 주는 구체적인 사정, 또는 흔적의 말을 믿게 되는 작은 증거
- 스토리 방 3: 하기로 마음먹음. 2화부터는 앞 화에서 배운 대로 이번엔 어떻게 조심하는지(lesson)를 행동으로
- 칸 4: 서둘러야 하는 이유 (기다리면 누가 무엇을 잃음)
- 스토리 방 5: 주인공 행동(protagonist_action)을 한다 + 당장 좋은 효과가 보인다
- 칸 6: 당장 효과를 주변 사람이 누림 (고마워하거나 득을 봄)
- 스토리 방 7: 작은 이상 조짐 하나 (아직 대가가 아님)
- 칸 8: 조짐이 주변 사람에게 작은 피해로 번짐 (대가의 전조)
- 스토리 방 10: 일반 보스가 왜 싸우는지 (경고하는 쪽: 자기가 말린 일을 주인공이 해서 / 최종보스 편: 주인공이 더 캐려 해서) → 싸움 → 대가가 분명히 드러남 → 다음 화로 이어지는 한 줄
## 5화
- 스토리 방 1: 앞 화들의 피해가 한데 모여 터진 상황. 주 NPC 가 나섬. prologue·방 1 에서는 아직 원인을 모른다 (1~4화 행동이 같은 일이었다는 것은 방 3에서 처음 깨달음)
- 칸 2: 증거 하나 — 2화 행동 안에 핵심 물건이 숨어 있었다 (2화 hidden_link 를 사람이 보여 줌)
- 스토리 방 3: 파티가 깨달음 — 1~4화 행동이 겉모습만 달랐을 뿐 모두 같은 일(wrong_action)이었다
- 칸 4: 증거 둘 — 3·4화 hidden_link
- 스토리 방 5: 최종보스가 처음 모습을 드러내고 원하는 것을 말함
- 칸 6: 최종보스 때문에 사람들 피해가 커지는 모습 (최종보스는 카드에서 직접 움직이지 않음, 사람·물건으로)
- 스토리 방 7: 파티가 정답 행동(right_action)을 스스로 말하고 나섬
- 칸 8: 정답 행동을 하러 가는 길에 사람들이 돕거나 막음
- 스토리 방 10: 최종보스가 막아섬 → 싸움 → 정답 행동을 해냄 → 망가진 것이 돌아옴 (twist 장면)

# 지킬 것
- 원본의 핵심 물건·행동·인물·흔적·일반 보스는 그대로. 새 설정을 만들지 않는다
- 1~4화 글(story·slots·trace_says)에 최종보스 이름 "${arc.boss_name_korean}" 을 쓰지 않는다. 흔적(boss_trace)으로만
- 2~4화 글(story·slots·trace_says)에 핵심 물건 "${arc.key_object}" 을 쓰지 않는다 (5화에 밝혀짐). 2~4화 hidden_link 는 5화 칸 2·4 must 에만
- 5화 스토리 방 1·3, 칸 2·4 에는 최종보스 이름을 쓰지 않는다 (방 5에서 처음 나옴)
- trace_says: 흔적이 하는 말 1~2문장. 누가 봐도 좋은 해결책처럼 (나쁜 일로 들리는 말 금지). 5화는 빈 문자열
- 칸 must 는 한 문장, 눈에 보이는 사실 하나. "~다" 체. 카드 3장이 각자 다른 사건으로 보여 줄 수 있게 구체적으로 (누가 무엇을 잃음/얻음, 무엇이 고장 남)
- 칸 must·people 은 그 화 장소(place) 안에서 일어날 수 있는 일·사람으로. 도시 전체 이야기는 그 장소에 찾아온 사람의 사정으로 보여 준다
- 칸 people: 그 화 장소에 있을 법한 사람 직업 3개 (카드 3장에 1명씩 쓸 후보. 일반 보스 직업은 쓰지 않음)
- 이미 배정된 복선(plant_here / reveal_here)이 있는 칸은 그 내용과 겹치지 않게 must 를 정한다 (복선은 코드가 따로 붙임)
- 스토리 방 메모는 "무슨 일이 일어나는지" 1~3문장. 대사 말고 사건만
- 직설적으로. 비유 금지. 금지 낱말: ${VAGUE.join(', ')}
- prologue: 화 시작 서술 2~4문장, 3인칭. 앞 화가 있으면 앞 화 결과부터. 5화는 epilogue 도 (돌아온 무대의 모습 2~3문장)

# 스토리아크
- 장르: ${arc.genre} / 무대: ${arc.stage} — ${arc.world?.setting}
- 세계 규칙: ${arc.world?.rule}
- 핵심 물건: ${arc.key_object} / 틀린 행동: ${arc.wrong_action} / 정답 행동: ${arc.right_action}
- 최종보스 ${arc.boss_name_korean}: 겉모습 ${fb.surface_identity} / 정체 ${fb.true_identity} / 동기 ${fb.motivation}
- twist: ${fb.twist}

## 인물
${npcs}

## 화별 원본
${JSON.stringify([1, 2, 3, 4, 5].map(episodeSource), null, 1)}`;
}

const SLOT_SCHEMA = {
	type: 'object',
	properties: { room: { type: 'integer' }, must: S, people: { type: 'array', items: S } },
	required: ['room', 'must', 'people']
};
const tool = {
	name: 'episode_plan',
	description: '화별 스토리 방 / 카드 칸 설계',
	parameters: {
		type: 'object',
		properties: {
			episodes: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						order: { type: 'integer' },
						trouble: S,
						trace_says: S,
						prologue: S,
						room1: S,
						room3: S,
						room5: S,
						room7: S,
						room10: S,
						epilogue: S,
						slots: { type: 'array', items: SLOT_SCHEMA }
					},
					required: ['order', 'trouble', 'trace_says', 'prologue', 'room1', 'room3', 'room5', 'room7', 'room10', 'slots']
				}
			}
		},
		required: ['episodes']
	}
};

// ── 검사 ───────────────────────────────────────────────────

function check(p) {
	const e = [];
	const eps = [...(p.episodes ?? [])].sort((a, b) => a.order - b.order);
	if (eps.map((x) => x.order).join() !== '1,2,3,4,5') return ['episodes 는 order 1~5 다섯 개'];
	const boss = arc.boss_name_korean;
	const obj = arc.key_object;
	for (const ep of eps) {
		const o = ep.order;
		const slots = [...(ep.slots ?? [])].sort((a, b) => a.room - b.room);
		if (slots.map((s) => s.room).join() !== '2,4,6,8') e.push(`${o}화 slots 의 room 은 2,4,6,8 이어야 합니다`);
		for (const s of slots) if ((s.people ?? []).length < 3) e.push(`${o}화 칸 ${s.room} people 은 3개`);
		for (const f of foreshadowing.filter((f) => (f.plant.order === o) || (f.at.order === o)))
			for (const s of slots) {
				const h = (f.plant.order === o ? f.hint : f.reveal).slice(0, 15);
				if ((s.must ?? '').includes(h)) e.push(`${o}화 칸 ${s.room} must 가 복선 문장을 그대로 씁니다. 복선은 코드가 붙이니 must 는 다른 정보로`);
			}
		const text = (keys) => keys.map((k) => ep[k] ?? '').join(' ');
		const all = text(['trouble', 'trace_says', 'prologue', 'room1', 'room3', 'room5', 'room7', 'room10', 'epilogue']) + ' ' + slots.map((s) => s.must).join(' ');
		for (const w of VAGUE) if (all.includes(w)) e.push(`${o}화에 금지 낱말 "${w}"`);
		if (o < 5) {
			if (all.includes(boss)) e.push(`${o}화에 최종보스 이름 "${boss}" 금지. 흔적으로만`);
			if (!(ep.trace_says ?? '').trim()) e.push(`${o}화 trace_says 가 비었습니다`);
			const stem = verbStem(spine(o).protagonist_action);
			if (!(ep.room5 ?? '').includes(stem)) e.push(`${o}화 room5 에 주인공 행동 "${spine(o).protagonist_action}" 이 분명히 있어야 합니다`);
			if (/결정|마음먹/.test(ep.room1 ?? '')) e.push(`${o}화 room1 에서 결정하지 않습니다 (마음먹는 것은 room3)`);
		}
		if (o >= 2 && o <= 4 && all.includes(obj)) e.push(`${o}화에 핵심 물건 "${obj}" 금지 (5화에 밝혀짐)`);
		if (o === 5) {
			const early = text(['prologue', 'room1', 'room3']) + ' ' + slots.filter((s) => s.room < 5).map((s) => s.must).join(' ');
			if (early.includes(boss)) e.push(`5화 방 1·3, 칸 2·4 에 최종보스 이름 "${boss}" 금지 (방 5에서 처음)`);
			if (!(ep.room5 ?? '').includes(boss)) e.push(`5화 room5 에 최종보스 "${boss}" 이 처음 모습을 드러내야 합니다`);
			if (!(ep.room7 ?? '').includes(verbStem(arc.right_action))) e.push(`5화 room7 에 정답 행동 "${arc.right_action}" 이 있어야 합니다`);
			if (!(ep.epilogue ?? '').trim()) e.push('5화 epilogue 가 비었습니다');
			if (text(['prologue', 'room1']).includes(verbStem(arc.wrong_action))) e.push(`5화 prologue·room1 에서 아직 원인("${arc.wrong_action}")을 밝히지 않습니다. 깨달음은 방 3`);
		}
	}
	return e;
}

// ── 실행 ───────────────────────────────────────────────────

const { out, errors } = await generate(prompt(), tool, check, { label: 'plan' });

// 원본 고정 값과 복선을 코드로 붙임
const plan = {
	id: ID,
	genre: arc.genre,
	stage: arc.stage,
	setting: arc.world?.setting,
	rule: arc.world?.rule,
	key_object: arc.key_object,
	wrong_action: arc.wrong_action,
	right_action: arc.right_action,
	boss_name: arc.boss_name_korean,
	boss: { look: arc.final_boss?.surface_identity, truth: arc.final_boss?.true_identity, want: arc.final_boss?.motivation, twist: arc.final_boss?.twist },
	npcs: Object.entries(arc.npc_roles ?? {}).map(([key, v]) => ({ key, name: nm(key), title: v.title, role: v.role })),
	foreshadowing,
	episodes: [...out.episodes]
		.sort((a, b) => a.order - b.order)
		.map((ep) => {
			const o = ep.order;
			const src = outline(o);
			const sp = spine(o);
			return {
				order: o,
				title: src.title,
				place: src.place,
				mood: arc.act_tone?.[actOf(o)]?.mood ?? '',
				npc: src.npc,
				boss_trace: src.boss_trace ?? '',
				random_boss: src.random_boss_title ?? '',
				random_boss_side: o < 5 ? (src.random_boss_side ?? 'ally') : '',
				action: sp.protagonist_action,
				lesson: sp.lesson ?? '',
				hidden_link: sp.hidden_link ?? '',
				...ep,
				slots: [...ep.slots]
					.sort((a, b) => a.room - b.room)
					.map((s) => ({
						...s,
						after: SLOTS.find((x) => x.room === s.room)?.after,
						before: SLOTS.find((x) => x.room === s.room)?.before,
						plant: foreshadowing.filter((f) => f.plant.order === o && f.plant.room === s.room).map((f) => f.hint),
						reveal: foreshadowing.filter((f) => f.at.order === o && f.at.room === s.room).map((f) => f.reveal)
					})),
				reveal_room10: foreshadowing.filter((f) => f.at.order === o && f.at.room === 10).map((f) => f.reveal)
			};
		}),
	errors
};

function toMd(p) {
	const eps = p.episodes
		.map((ep) => {
			const slot = (r) => {
				const s = ep.slots.find((x) => x.room === r);
				return [
					`- **칸 ${r}** (카드 3장 공통 must): ${s.must}`,
					`  - 사람 후보: ${s.people.join(', ')}`,
					...s.plant.map((h) => `  - 🌱 복선 심기: ${h}`),
					...s.reveal.map((h) => `  - 💡 복선 공개: ${h}`)
				].join('\n');
			};
			return `## ${ep.order}화 — ${ep.title} (${ep.place}, ${ep.mood})
- 주 NPC: ${ep.npc} / 주인공 행동: **${ep.action}**${ep.boss_trace ? ` / 흔적: ${ep.boss_trace}` : ''}${ep.random_boss ? ` / 일반 보스: ${ep.random_boss} (${ep.random_boss_side})` : ''}
- 곤란: ${ep.trouble}${ep.trace_says ? `\n- 흔적의 말: "${ep.trace_says}"` : ''}

**프롤로그**: ${ep.prologue}

- **방 1**: ${ep.room1}
${slot(2)}
- **방 3**: ${ep.room3}
${slot(4)}
- **방 5**: ${ep.room5}
${slot(6)}
- **방 7**: ${ep.room7}
${slot(8)}
- 방 9 휴식
- **방 10**: ${ep.room10}${ep.reveal_room10.map((h) => `\n  - 💡 복선 공개: ${h}`).join('')}${ep.epilogue ? `\n\n**에필로그**: ${ep.epilogue}` : ''}
`;
		})
		.join('\n');
	return `# ${p.id} — 화별 설계 (스토리 방 / 카드 칸)

- 무대: ${p.stage} / 핵심 물건: ${p.key_object} / 틀린 행동: ${p.wrong_action} / 정답 행동: ${p.right_action}
- 최종보스: ${p.boss_name}

${eps}${p.errors.length ? `\n## 남은 오류\n${p.errors.map((x) => `- ${x}`).join('\n')}\n` : ''}`;
}

save(OUT, 'plan.json', plan);
console.log('저장:', save(OUT, 'plan.md', toMd(plan)));
