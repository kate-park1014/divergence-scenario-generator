// 1단계: 화 설계표 (Gemini 1콜). 스토리 방 1·3·5·7·10 할 일 / 카드 칸 A~D 의 열린 것·정할 것·깨면 안 되는 사실 / 장소의 작은 인물·물건 / 기억 계획
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/1_design.mjs [--id=modern_evannext_1] [--order=1]
import { ID, ORDER, loadArc, npcNames, save, generate, S, STORY_ROOMS } from './lib.mjs';

if (ORDER < 1 || ORDER > 5) throw new Error('--order 는 1~5');

const arc = await loadArc();
const names = await npcNames(arc.theme);
const nm = (k) => names[k] ?? k;
const out0 = arc.scenarioOutline.find((x) => x.order === ORDER);
const spine = arc.story_spine.find((x) => x.order === ORDER);
const boss = arc.boss_name_korean;
const warn = out0.random_boss_side === 'warn';
const FINAL = ORDER === 5;
const trace = out0.boss_trace ?? '흔적';
// 5화: 1~4화 행동의 숨은 연결 (2~4화 hidden_link)
const links = arc.story_spine.filter((x) => x.order >= 2 && x.order <= 4 && x.hidden_link).map((x) => `  - ${x.order}화 "${x.protagonist_action}": ${x.hidden_link}`).join('\n');

const NORMAL_SKELETON = `- 방 1: 주 NPC ${nm(out0.npc)} 의 곤란 + 흔적(${out0.boss_trace})이 권하는 친절한 해결책 + 이번 화 목표. 아직 하지 않는다
- 방 3: 주인공 행동("${spine.protagonist_action}")을 선한 이유로 한다 + 당장 좋은 효과${warn ? `. 일반 보스(${out0.random_boss_title})가 하기 직전에 한 번 경고하지만 자기 사정처럼 들려 믿지 않는다` : ''}
- 방 5: 첫 조짐. 행동의 대가가 처음으로 눈에 보인다 (작게)
- 방 7: 대가가 커진다. 왜 그렇게 되는지 눈앞의 일로 확인한다 (세계 규칙)
- 방 10: 일반 보스(${out0.random_boss_title}, ${warn ? '경고하는 쪽: 주인공이 이 행동을 더 하지 못하게 막음' : '최종보스 편: 더 캐거나 나아가지 못하게 막음'}) → 전투 → 나쁜 결과는 남음 + 다음 화 기미
- 그래서 카드 A(1→3)는 행동 전의 유혹, 카드 B(3→5)는 당장 이득을 누리는 사람들, 카드 C(5→7)·D(7→10)는 대가를 겪는 사람들
  - 카드 A·B 에서는 규칙의 나쁜 결과가 아직 보이지 않는다 (스토리 방 5 에서 처음 보임)`;
// 5화: 1~4화 피해가 쌓인 무대 → 숨은 연결을 깨달음 → 정답 행동 → 최종보스가 처음 모습을 드러내며 막음 → 전투
const FINAL_SKELETON = `- 방 1: 1~4화의 나쁜 결과가 쌓인 모습 + 주 NPC ${nm(out0.npc)} 의 곤란. ${trace}이 마지막으로 친절한 해결책(또 "${arc.wrong_action}")을 권한다. 아직 하지 않는다
- 방 3: 1~4화의 행동이 겉모습만 달랐을 뿐 모두 같은 일("${arc.wrong_action}")이었다는 것을 깨닫는 계기 장면 (아래 숨은 연결 중 하나 이상)
- 방 5: 파티가 스스로 정답 행동("${arc.right_action}")을 깨닫고 처음 말한다 (NPC 가 먼저 알려 주지 않음). 흔적이 막으려 한다
- 방 7: 정답 행동을 시작한다. 작은 효과가 보인다. 흔적의 주인 이름("${boss}")은 NPC 가 전하거나 흔적에 이름이 드러나는 장면으로 처음 나온다 (파티가 먼저 쓰지 않음)
- 방 10: ${boss}가 처음으로 모습을 드러내며 정답 행동을 막는다. 원하던 것(${arc.final_boss?.want ?? ''})을 직접 밝힌다 → 전투 → 이기면 정답 행동을 해내고 ${boss}가 무너지며 망가졌던 것이 돌아온다
- 그래서 카드 A(1→3)는 1~4화의 대가를 겪는 사람들, 카드 B(3→5)는 깨달은 뒤에도 같은 일(틀린 행동)을 하려는 사람들, 카드 C(5→7)·D(7→10)는 정답 쪽을 작게 먼저 해 보는 사람들 (정답 행동의 예행연습. 쉬운 길은 다시 틀린 쪽)
- 1~4화 행동의 숨은 연결:
${links || '  - (없음)'}`;

const prompt = `당신은 선택형 게임의 시나리오 기획자입니다. 스토리아크의 ${ORDER}화 한 화를 방 10개로 나누는 설계표를 만듭니다. 대사는 쓰지 않습니다.

# 게임 구조
| 방 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 내용 | 스토리 | 카드 A | 스토리 | 카드 B | 스토리 | 카드 C | 스토리 | 카드 D | 휴식 | 스토리 (${FINAL ? '최종보스' : '일반 보스'} 전투) |
- 스토리 방: 모든 플레이어가 똑같이 본다
- 카드 칸: 칸마다 후보 카드 중 1장이 나온다. 카드 한 장 = 이번 화 규칙을 겪는 사람 한 명의 작은 사건
  - 플레이어가 카드에서 이번 화 규칙을 작게 먼저 겪고, 그게 스토리의 큰 선택(주인공 행동)의 예행연습이 된다
  - 카드마다: 원하는 게 있는 사람 1명 / 이번 화 핵심 물건·세계 규칙과 연결 / 당장 이득 + 나중 대가
- 다음 스토리 방은 어떤 카드가 나왔는지 모른다. 스토리 방은 카드 선택에 기대지 않는다
- 방 9 휴식 뒤에 방 10 이 나온다

# 이번 화 뼈대 (방마다 이 일을 맡김)
${FINAL ? FINAL_SKELETON : NORMAL_SKELETON}
# 만들 것
1. story_rooms: 방 1·3·5·7·10 마다 does — 그 방에서 일어나는 일 1~3문장 (사건만, 대사 아님)
2. slots: 칸 A~D 마다
   - opens: 앞 스토리 방이 열어두고 끝나는 것 (물건·인물·질문 하나)
   - decides: 그 칸에서 주인공이 정하는 것 (카드 사건의 큰 틀. 이번 화 규칙과 이어짐)
   - keeps: 다음 스토리 방이 깔고 가는 사실 (카드가 깨면 안 됨. 예: 누가 어디 있는지, 무엇을 아직 모르는지)
3. locals: 이번 화 장소(${out0.place})의 작은 인물·물건 2~3개. 카드 재료 (이 스토리아크는 NPC 가 3명뿐이라 모자람)
   - id 영어 소문자, name 한국어 이름이나 호칭, kind person 또는 object, note 한 줄 (무엇을 원하거나 어떤 물건인지)
4. memory: 기억 계획 2개. 칸 A 에서 심고 칸 C 에서 돌아옴 / 칸 B 에서 심고 칸 D 에서 돌아옴
   - who: 그 기억의 사람 (locals 의 person id 를 쓰면 좋음)
   - plant: 심는 칸 카드의 사건 (그 사람이 당신에게 무엇을 원하는지)
   - easy: 들어주면 당장 받는 이득 / hard: 거절·바르게 하면 지금 치르는 대가
   - back: 돌아오는 칸에서 그 사람에게 무슨 일이 있는지 (easy 를 골랐으면 규칙의 대가, hard 면 그 덕)

# 지킬 것
- 원본의 핵심 물건·행동·인물·흔적·일반 보스는 그대로. 새 큰 설정을 만들지 않는다
- 모든 일은 무대 "${arc.stage}" 와 이번 화 장소 "${out0.place}" 안에서. "도시 사람들" 대신 그 장소에 있는 사람으로
- ${FINAL ? `최종보스 "${boss}" 는 방 7 이름 소개·방 10 에만. 카드 칸에는 나오지 않는다` : `최종보스 이름 "${boss}" 를 쓰지 않는다 (흔적으로만)`}
- locals·memory.who 에는 주 NPC·다른 NPC(${Object.keys(arc.npc_roles).map(nm).join(', ')})를 쓰지 않는다. 이 장소의 새 사람으로 (다른 NPC 는 다른 화에 나옴)
- ${FINAL ? '5화에는 일반 보스가 없다' : `일반 보스는 방 10 과 ${warn ? '방 3 경고' : '방 10'} 에만. 카드 칸에는 나오지 않는다`}
- 직설적으로. 비유 금지

# 스토리아크
- 장르: ${arc.genre} / 무대: ${arc.stage} — ${arc.world.setting}
- 세계 규칙: ${arc.world.rule}
- 왜 그렇게 되는지: ${arc.world.how}
- 핵심 물건: ${arc.key_object}

# ${ORDER}화 원본
- 제목: ${out0.title} / 장소: ${out0.place}
- 줄거리: ${spine.line}
- 요약: ${out0.summary}
- 주 NPC: ${out0.npc} = ${nm(out0.npc)} (${arc.npc_roles[out0.npc]?.title ?? ''}): ${arc.npc_roles[out0.npc]?.role ?? ''}
- 흔적: ${trace}
${FINAL ? `- 최종보스: ${boss} — 정체 ${arc.final_boss?.true_identity ?? ''} / 원하는 것 ${arc.final_boss?.want ?? ''}` : `- 일반 보스: ${out0.random_boss_title} (${warn ? '경고하는 쪽' : '최종보스 편'})`}
- 다른 NPC: ${Object.entries(arc.npc_roles).filter(([k]) => k !== out0.npc).map(([k, v]) => `${k} = ${nm(k)} (${v.title})`).join(', ')}`;

const tool = {
	name: 'episode_design',
	description: '한 화의 방 10개 설계표',
	parameters: {
		type: 'object',
		properties: {
			story_rooms: { type: 'array', items: { type: 'object', properties: { room: { type: 'integer' }, does: S }, required: ['room', 'does'] } },
			slots: {
				type: 'array',
				items: { type: 'object', properties: { slot: { type: 'string', enum: ['A', 'B', 'C', 'D'] }, opens: S, decides: S, keeps: S }, required: ['slot', 'opens', 'decides', 'keeps'] }
			},
			locals: {
				type: 'array',
				items: { type: 'object', properties: { id: S, name: S, kind: { type: 'string', enum: ['person', 'object'] }, note: S }, required: ['id', 'name', 'kind', 'note'] }
			},
			memory: {
				type: 'array',
				items: {
					type: 'object',
					properties: { plant_slot: { type: 'string', enum: ['A', 'B'] }, return_slot: { type: 'string', enum: ['C', 'D'] }, who: S, plant: S, easy: S, hard: S, back: S },
					required: ['plant_slot', 'return_slot', 'who', 'plant', 'easy', 'hard', 'back']
				}
			}
		},
		required: ['story_rooms', 'slots', 'locals', 'memory']
	}
};

/** 형식만 검사 */
function check(d) {
	const e = [];
	const rooms = (d.story_rooms ?? []).map((r) => r.room).sort((a, b) => a - b);
	if (rooms.join() !== STORY_ROOMS.join()) e.push(`story_rooms 의 room 은 1,3,5,7,10 (지금 ${rooms})`);
	const slots = (d.slots ?? []).map((s) => s.slot).sort();
	if (slots.join() !== 'A,B,C,D') e.push(`slots 는 A,B,C,D 하나씩 (지금 ${slots})`);
	const n = (d.locals ?? []).length;
	if (n < 2 || n > 3) e.push(`locals 는 2~3개 (지금 ${n})`);
	const mem = (d.memory ?? []).map((m) => `${m.plant_slot}${m.return_slot}`).sort();
	if (mem.join() !== 'AC,BD') e.push(`memory 는 A→C 1개, B→D 1개 (지금 ${mem})`);
	const all = JSON.stringify(d);
	if (all.includes(boss) && !FINAL) e.push(`최종보스 이름 "${boss}" 를 쓰지 않음`);
	if (FINAL) for (const k of ['slots', 'locals', 'memory']) if (JSON.stringify(d[k] ?? []).includes(boss)) e.push(`${k} 에 최종보스 이름 "${boss}" 를 쓰지 않음 (카드 칸에는 안 나옴)`);
	for (const k of Object.keys(arc.npc_roles)) {
		const people = [...(d.locals ?? []).flatMap((l) => [l.id, l.name]), ...(d.memory ?? []).map((m) => m.who)];
		if (people.includes(k) || people.includes(nm(k))) e.push(`locals·memory.who 에 NPC ${nm(k)}(${k}) 를 쓰지 않음. 새 사람으로`);
	}
	return e;
}

const { out, errors } = await generate(prompt, tool, check, { label: `${ORDER}화 설계표` });
out.story_rooms.sort((a, b) => a.room - b.room);
out.slots.sort((a, b) => a.slot.localeCompare(b.slot));

const design = {
	id: ID,
	order: ORDER,
	title: out0.title,
	place: out0.place,
	npc: out0.npc,
	npc_name: nm(out0.npc),
	action: spine.protagonist_action,
	boss_trace: trace,
	random_boss: FINAL ? null : out0.random_boss_title,
	random_boss_side: FINAL ? null : (out0.random_boss_side ?? 'ally'),
	final: FINAL,
	...out,
	errors
};
save('design_prompt.md', prompt);
save('design.json', design);

const md = `# ${ORDER}화 설계표 — ${design.title}

- 장소: ${design.place} / 주 NPC: ${design.npc_name} / 주인공 행동: **${design.action}** / 흔적: ${design.boss_trace} / ${FINAL ? `최종보스: ${boss}` : `일반 보스: ${design.random_boss} (${design.random_boss_side})`}

## 스토리 방
${design.story_rooms.map((r) => `- **방 ${r.room}**: ${r.does}`).join('\n')}

## 카드 칸
${design.slots.map((s) => `- **칸 ${s.slot}**\n  - 열린 것: ${s.opens}\n  - 정하는 것: ${s.decides}\n  - 깨면 안 되는 사실: ${s.keeps}`).join('\n')}

## 장소의 작은 인물·물건
${design.locals.map((l) => `- \`${l.id}\` ${l.name} (${l.kind}): ${l.note}`).join('\n')}

## 기억 계획
${design.memory.map((m) => `- **${m.plant_slot} → ${m.return_slot}** (${m.who}): ${m.plant}\n  - easy: ${m.easy} / hard: ${m.hard}\n  - 돌아옴: ${m.back}`).join('\n')}
${errors.length ? `\n## 남은 형식 오류\n${errors.map((x) => `- ${x}`).join('\n')}\n` : ''}`;
console.log('저장:', save('design.md', md));
