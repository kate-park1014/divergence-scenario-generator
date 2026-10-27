// 1단계: 스토리아크 다이어트 — 쉬운 말로 줄이고, 화마다 프롤로그·방 1 은 자세히, 방 3·5·7 은 흐름 한 줄, 방 10 은 결말
// 원본 storyarc 는 그대로 두고 tmp/room10/out/<id>/arc.json, arc.md 로 저장
// node tmp/room10/1_arc.mjs --id=modern_whisperweb_0
import fs from 'node:fs';
import path from 'node:path';
import { args, loadArc, save, gemini, ROOT, OUT_ROOT } from './lib.mjs';

// 어렵고 흐린 말. 나오면 다시 요청
const VAGUE = ['잔상', '파편', '속삭', '메아리', '그림자', '심연', '운명', '기운', '의식', '광기', '무언가', '어떤 것', '알 수 없는', '듯'];
// 핵심 물건에 쓰면 안 되는 실체 없는 말
const NOT_OBJECT = ['기억', '조각', '빛', '감정', '꿈', '생각', '마음', '데이터'];
// 연출(표정·착각)이 있어야 전해지는 결과. 글·대사만으로 안 보임
const VISUAL = ['착각', '오해', '우스꽝', '표정', '분위기', '엉뚱'];
// 흔적의 말에 들어가면 누가 봐도 나쁜 일로 들리는 말
const BAD_HINT = ['개인 정보', '개인의 정보', '퍼뜨리', '유출', '약점', '폭로', '훔치', '몰래', '해킹', '구멍', '취약'];

const SIDE = {
	warn: '주인공이 그 화 행동을 하려 하면 "위험하다"고 경고하며 막는다. 경고는 맞지만 자기 이익 때문처럼 보여서 주인공이 안 믿는다',
	ally: '최종보스 편이다. 주인공의 행동은 안 말리고, 주인공이 의심하거나 더 캐려 하면 막는다'
};

function source(arc) {
	// 원본에서 이야기 뼈대만 추림 (불필요한 필드는 넘기지 않음)
	return {
		genre: arc.genre,
		stage: arc.stage,
		world: arc.world,
		key_object: arc.key_object,
		wrong_action: arc.wrong_action,
		right_action: arc.right_action,
		boss: {
			name: arc.boss_name_korean,
			surface_identity: arc.final_boss?.surface_identity,
			true_identity: arc.final_boss?.true_identity,
			motivation: arc.final_boss?.motivation,
			want: arc.final_boss?.want
		},
		npcs: Object.fromEntries(Object.entries(arc.npc_roles ?? {}).map(([k, v]) => [k, { title: v.title, arc: v.arc }])),
		episodes: arc.scenarioOutline.map((o) => {
			const s = arc.story_spine.find((x) => x.order === o.order) ?? {};
			return {
				order: o.order,
				npc: o.npc,
				boss_trace: o.boss_trace,
				random_boss: o.random_boss_title ? `${o.random_boss_title} — ${SIDE[o.random_boss_side] ?? SIDE.ally}` : '',
				protagonist_action: s.protagonist_action,
				summary: o.summary
			};
		})
	};
}

function prompt(arc, errors = [], last = null) {
	return `당신은 게임 시나리오 기획자입니다. 아래 스토리아크를 짧고 쉬운 말로 다시 정리합니다.

## 왜 다시 쓰나
- 지금 스토리아크는 말이 어렵고 흐리다. 플레이어가 무슨 일이 벌어지는지 바로 알아듣게 쓴다
- 지금은 방마다 사건이 다 정해져 있다. 앞으로 사건은 카드가 자유롭게 만든다. 그래서 스토리는 시작 설명, 흐름 몇 줄, 결말만 남긴다

## 말투 규칙 (가장 중요)
- 직설적이고 설명적으로. 비유·은유·시적 표현 금지
- 추상적인 것 대신 손에 쥘 수 있는 물건, 눈에 보이는 결과로 쓴다
  - 핵심 물건: 이름은 짧은 보통 명사 하나 (예: "칩"). 꾸밈말 없이. 정체는 이름에 넣지 않고 what 에만 쓴다 (5화에 밝혀짐)
  - 효과: "사람들이 [눈에 보이는 일]을 한다" 꼴
- 한 문장에 정보 하나. 짧게. "~다" 체 (예: 나타난다, 한다)
- 결과·조짐·대가는 글과 대사만 읽어도 바로 알 수 있는 사건으로: 누가 무엇(돈·일자리·물건·약속·집)을 잃음, 기계·장치가 멈추거나 엉뚱하게 작동함, 누가 무엇을 잘못 보내거나 지움. 표정·외모·분위기·착각처럼 그림 연출이 있어야 알 수 있는 일은 쓰지 않는다. 금지 낱말: ${VISUAL.join(', ')}
- 원본의 칩 효과(기억 뒤섞기·오해)는 버려도 된다. 칩이 일으키는 일을 위 규칙에 맞는 새 결과로 정한다
- 인물은 "그/그녀" 대신 이름이나 직업으로 부른다
- **왜**를 빼먹지 않는다. 결과만 쓰지 말고, 앞 문장의 이유나 결과가 다음 문장으로 이어지게 쓴다
  - 나쁜 결과가 왜 생기는지는 why 에 한 문장 (원본 world.how 가 있으면 그것을 쉬운 말로)
  - 주 NPC 의 곤란은 trouble 에 이유까지: "[NPC]는 [무엇]을 [잃어서/못 해서], [그게 없으면 무엇을 못 한다]". "억울하다·힘들다" 같은 감정만 쓰지 않는다
- 핵심 물건은 사람이 만들고 사고팔고 들고 다니는 실제 물건 (기계, 문서, 카드, 칩, 약, 장부 등). ${NOT_OBJECT.join('·')} 같은 실체 없는 말은 핵심 물건 이름에 쓰지 않는다. 원본의 신비한 설정은 이 물건이 사람들에게 일으키는 눈에 보이는 결과로 바꾼다
- 다음 낱말 금지: ${VAGUE.join(', ')}

## 바꾸지 않는 것
- 이야기 뼈대: 누가 누구를 어떻게 속이는지, 1~4화 주인공 행동이 사실은 모두 같은 나쁜 일(wrong_action)이었고, 5화에 반대 행동(right_action)으로 끝냄
- 인물 키(npcs 의 키), 각 화의 주 NPC, 일반 보스 직업과 편
- 최종보스 이름은 1~4화 글에 쓰지 않는다. 1~4화에는 흔적(boss_trace)으로만 나온다. 흔적도 쉬운 말로 (예: [어디에 뜨는 어떤 글자])

## 쓸 것
- world: 이곳이 어떤 곳이고 무슨 문제가 있는지 3~4문장. 그림이 그려지게 쓴다: 핵심 물건을 누가 어디에 두고(손에 듦, 목에 검, 벽에 붙음 등), 그 안에 무엇이 들었고, 사람들이 평소 그걸로 무엇을 하는지. "떠다닌다", "버려져 있다", "가득하다"처럼 모습이 안 그려지는 말 금지
- key_object: 핵심 물건 이름 / what: 그게 무엇인지 1문장 / why: 그 물건으로 wrong_action 을 하면 왜 나쁜 결과가 생기는지 1문장
- wrong_action / right_action: "~한다" 꼴, 쉬운 말, 서로 반대 뜻
- boss: 겉모습 1문장, 진짜 정체 1문장, 원하는 것 1문장
- npcs: 키마다 직업 이름(title)과 한 줄 소개 (그 사람이 누구이고 무슨 일을 하는지만. 최종보스 이름·화별 사건은 쓰지 않는다)
- episodes 1~5 마다:
  - title: 화 제목
  - boss_trace: 이번 화 흔적 (쉬운 말, 1~4화만. 5화는 빈 문자열)
  - action: 이번 화 주인공 행동 ("~한다", 1화는 wrong_action, 5화는 right_action)
  - prologue: 화 시작 설명 3~5문장. 3인칭 서술. 앞 화가 있으면 앞 화 결과부터
  - trouble: 주 NPC 의 곤란 1문장 (위 형식, 이유 포함)
  - room1: 방 1에서 플레이어가 알게 되는 것 4~6문장. 주 NPC 의 사정(trouble), 흔적이 권하는 해결책, 그 해결책이 왜 곤란을 푸는 것처럼 보이는지, 이번 화 목표. 충분히 자세히
    - 흔적의 말은 누가 봐도 좋은 해결책이어야 한다. 그 행동이 가져올 좋은 결과만 말하고, 나쁜 일로 들리는 말(${BAD_HINT.join(', ')})은 쓰지 않는다. 주인공이 따르는 게 당연해 보이게
    - action 도 주인공 눈에는 좋은 일로 보이는 말로 쓴다
    - 2~4화 action 은 화마다 다른 행동이고, 핵심 물건 이름을 쓰지 않는다 (겉으로는 상관없어 보이는 일. 사실 그 안에 핵심 물건이 숨어 있었다는 건 5화에 밝혀짐)
  - flow3, flow5, flow7: 방 3·5·7 흐름 한 줄씩. 장소와 사건은 쓰지 않는다(카드가 정함). 이번 화 인물·물건 이름을 넣어 구체적으로 (화마다 다른 문장)
    - 1~4화: 3=흔적의 말을 믿게 되는 이유, 5=주인공이 action 을 함 (일반 보스와 싸우지 않음. 싸움은 방 10), 7=이상한 조짐 (위 결과 규칙대로)
    - 5화: 3=1~4화 행동이 모두 같은 일이었다는 증거, 5=최종보스가 처음 모습을 드러냄, 7=주인공이 action 을 하려 하고 최종보스가 막음
    - 5화 prologue·room1 에는 최종보스 이름을 쓰지 않는다 (방 5에서 처음 나옴). 앞 화들의 피해가 한데 모여 터지는 상황으로 시작
  - hidden: 2~4화만. action 안에 핵심 물건이 어떻게 숨어 있었는지 1문장 (예: [그 화 물건] 안에 [핵심 물건]이 들어 있었다). 5화 방 3에서만 밝혀지므로 그 화의 다른 글에는 핵심 물건 이름을 쓰지 않는다. 1·5화는 빈 문자열
  - room10: 결말 2~3문장. 1~4화는 첫 문장에 일반 보스가 왜 주인공과 싸우는지 이유를 쓴다 (경고하는 쪽이면 자기가 말린 일을 주인공이 해서 / 최종보스 편이면 주인공이 더 캐려 해서). 그다음 대가가 드러나고, 1화는 그 대가가 왜 생겼는지(why)까지. 5화는 최종보스와 싸우고 action 을 해냄. 5화에는 최종보스가 원하던 것(boss.want)이 드러남
  - 5화 flow3 은 2~4화 hidden 을 근거로 든다

## 원본 스토리아크
${JSON.stringify(source(arc), null, 1)}
${errors.length ? `\n## 지난 출력의 오류 (이것만 고치고 나머지는 그대로)\n${errors.map((e) => `- ${e}`).join('\n')}\n\n지난 출력:\n${JSON.stringify(last)}` : ''}`;
}

const S = { type: 'string' };
const tool = {
	name: 'slim_arc',
	description: '쉬운 말로 줄인 스토리아크',
	parameters: {
		type: 'object',
		properties: {
			world: S,
			key_object: S,
			what: S,
			why: S,
			wrong_action: S,
			right_action: S,
			boss: {
				type: 'object',
				properties: { look: S, truth: S, want: S },
				required: ['look', 'truth', 'want']
			},
			npcs: {
				type: 'array',
				items: { type: 'object', properties: { key: S, title: S, intro: S }, required: ['key', 'title', 'intro'] }
			},
			episodes: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						order: { type: 'integer' },
						title: S,
						trouble: S,
						boss_trace: S,
						action: S,
						prologue: S,
						room1: S,
						flow3: S,
						flow5: S,
						flow7: S,
						hidden: S,
						room10: S,
											},
					required: ['order', 'title', 'trouble', 'boss_trace', 'action', 'prologue', 'room1', 'flow3', 'flow5', 'flow7', 'hidden', 'room10']
				}
			}
		},
		required: ['world', 'key_object', 'what', 'why', 'wrong_action', 'right_action', 'boss', 'npcs', 'episodes']
	}
};

function check(slim, arc) {
	const e = [];
	const eps = [...(slim.episodes ?? [])].sort((a, b) => a.order - b.order);
	if (eps.map((x) => x.order).join() !== '1,2,3,4,5') e.push('episodes 는 order 1~5 여야 합니다');
	const keys = Object.keys(arc.npc_roles ?? {}).sort().join();
	if ((slim.npcs ?? []).map((n) => n.key).sort().join() !== keys) e.push(`npcs 키는 ${keys} 여야 합니다`);
	const all = JSON.stringify(slim);
	for (const w of VAGUE) if (all.includes(w)) e.push(`금지 낱말 "${w}" 이 있습니다. 쉬운 말로 바꾸세요`);
	const boss = arc.boss_name_korean;
	for (const n of slim.npcs ?? []) if (boss && (n.intro ?? '').includes(boss)) e.push(`npcs ${n.key} 소개에 최종보스 이름 "${boss}" 이 있습니다. 누구이고 무슨 일을 하는지만`);
	for (const ep of eps) {
		if (ep.order === 1 && ep.action !== slim.wrong_action) e.push('1화 action 은 wrong_action 과 글자 그대로 같아야 합니다');
		if (ep.order === 5 && ep.action !== slim.right_action) e.push('5화 action 은 right_action 과 글자 그대로 같아야 합니다');
		if (ep.order < 5 && boss && JSON.stringify(ep).includes(boss)) e.push(`${ep.order}화에 최종보스 이름 "${boss}" 이 있습니다. 흔적으로만 쓰세요`);
		if (ep.order === 5 && boss && (ep.prologue + ep.room1).includes(boss)) e.push(`5화 prologue·room1 에 최종보스 이름 "${boss}" 을 쓰지 않습니다 (방 5에서 처음)`);
	}
	for (const w of VISUAL) if (all.includes(w)) e.push(`"${w}" 은 그림 연출이 있어야 전해집니다. 글·대사로 바로 알 수 있는 사건으로 바꾸세요`);
	for (const ep of eps) {
		const bad = BAD_HINT.filter((w) => (ep.room1 ?? '').includes(w) || (ep.action ?? '').includes(w));
		if (ep.order < 5 && bad.length) e.push(`${ep.order}화 room1·action 에 나쁜 일로 들리는 말(${bad.join(', ')})이 있습니다. 좋은 결과만 말하게`);
		if (ep.order >= 2 && ep.order <= 4 && slim.key_object) {
			if (!(ep.hidden ?? '').includes(slim.key_object)) e.push(`${ep.order}화 hidden 에 핵심 물건 "${slim.key_object}" 이 어디 숨어 있었는지 쓰세요`);
			const rest = [ep.prologue, ep.room1, ep.flow3, ep.flow5, ep.flow7, ep.room10].join(' ');
			if (rest.includes(slim.key_object)) e.push(`${ep.order}화 hidden 말고 다른 글에 핵심 물건 "${slim.key_object}" 이 있습니다. 5화까지 숨깁니다`);
		}
		if (ep.order >= 2 && ep.order <= 4 && slim.key_object && (ep.action ?? '').includes(slim.key_object)) e.push(`${ep.order}화 action 에 핵심 물건 "${slim.key_object}" 이 있습니다. 2~4화는 상관없어 보이는 다른 행동`);
		const rb = arc.scenarioOutline.find((o) => o.order === ep.order)?.random_boss_title;
		if (rb && (ep.flow5 ?? '').includes(rb)) e.push(`${ep.order}화 flow5 에 일반 보스 "${rb}" 가 나옵니다. 싸움은 방 10`);
	}
	if (!(slim.why ?? '').trim()) e.push('why(나쁜 결과가 왜 생기는지 1문장)가 없습니다');
	for (const ep of eps) {
		const t = (ep.trouble ?? '').trim();
		if (!t) e.push(`${ep.order}화 trouble(주 NPC 의 곤란과 그 이유)이 없습니다`);
		else if (!/(서|때문|못|없으면|없어)/.test(t)) e.push(`${ep.order}화 trouble 에 이유가 없습니다. "[무엇]을 잃어서, [없으면 무엇을 못 한다]" 꼴로: "${t}"`);
	}
	const acts = eps.map((x) => x.action);
	if (new Set(acts).size !== acts.length) e.push(`화별 action 이 겹칩니다: ${acts.join(' / ')}. 화마다 다르게`);
	if ((slim.key_object ?? '').trim().includes(' ')) e.push(`핵심 물건 이름 "${slim.key_object}" 은 짧은 명사 하나로 (예: 칩)`);
	const objBad = NOT_OBJECT.filter((w) => (slim.key_object ?? '').includes(w));
	if (objBad.length) e.push(`핵심 물건 "${slim.key_object}" 에 실체 없는 말(${objBad.join(', ')})이 있습니다. 실제 물건으로`);
	const flows = eps.flatMap((x) => [x.flow3, x.flow5, x.flow7]);
	if (new Set(flows).size !== flows.length) e.push('flow 문장이 화끼리 똑같습니다. 화마다 인물·물건 이름을 넣어 다르게');
	return e;
}

/** 일반 보스 직업·편은 원본 값을 코드로 넣음 */
function inject(slim, arc) {
	for (const ep of slim.episodes ?? []) {
		const o = arc.scenarioOutline.find((x) => x.order === ep.order) ?? {};
		ep.random_boss = ep.order < 5 ? (o.random_boss_title ?? '') : '';
		ep.random_boss_side = ep.order < 5 ? (o.random_boss_side ?? 'ally') : '';
		ep.npc = o.npc;
	}
	return slim;
}

function toMd(s, id) {
	const npcs = s.npcs.map((n) => `- **${n.title}** (${n.key}): ${n.intro}`).join('\n');
	const eps = [...s.episodes]
		.sort((a, b) => a.order - b.order)
		.map(
			(ep) => `## ${ep.order}화 — ${ep.title}
- 주인공 행동: **${ep.action}**${ep.boss_trace ? ` / 흔적: ${ep.boss_trace}` : ''}${ep.random_boss ? ` / 일반 보스: ${ep.random_boss} (${ep.random_boss_side})` : ''}

- 곤란: ${ep.trouble}

**프롤로그**: ${ep.prologue}

**방 1**: ${ep.room1}

${ep.hidden ? `- _숨은 연결 (5화에 밝힘): ${ep.hidden}_\n` : ''}- 방 2 카드 (자유)
- **방 3**: ${ep.flow3}
- 방 4 카드 (자유)
- **방 5**: ${ep.flow5}
- 방 6 카드 (자유)
- **방 7**: ${ep.flow7}
- 방 8 카드 (자유)
- 방 9 휴식

**방 10**: ${ep.room10}
`
		)
		.join('\n');
	return `# ${id} — 쉬운 말 스토리아크

${s.world}

- 핵심 물건: **${s.key_object}** — ${s.what}
- 왜 나쁜 일이 생기나: ${s.why}
- 틀린 행동: ${s.wrong_action} / 정답 행동: ${s.right_action}
- 최종보스: ${s.boss.look} ${s.boss.truth} ${s.boss.want}

### 인물
${npcs}

${eps}`;
}

const a = args();
const id = a.id ?? 'modern_whisperweb_0';
const arc = loadArc(id);
const dir = path.join(ROOT, OUT_ROOT, id);
fs.mkdirSync(dir, { recursive: true });

let slim = null;
let errors = [];
for (let i = 0; i < 3; i++) {
	slim = inject(await gemini(prompt(arc, errors, slim), tool, { base: a.base, temperature: Number(a.temperature ?? 0.8) }), arc);
	errors = check(slim, arc);
	console.log(`시도 ${i + 1}: 오류 ${errors.length}개`);
	errors.forEach((x) => console.log('  - ' + x));
	if (!errors.length) break;
}
save(dir, 'arc.json', { id, ...slim, errors });
console.log('저장:', save(dir, 'arc.md', toMd(slim, id) + (errors.length ? `\n## 남은 오류\n${errors.map((x) => `- ${x}`).join('\n')}\n` : '')));
