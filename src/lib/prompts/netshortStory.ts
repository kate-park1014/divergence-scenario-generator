/**
 * 넷쇼트 스타일 5화 스토리 (src/lib/data/storyarc/netshort_test/story-prompt.md).
 * 재료는 netshort_test/story-seeds.json 에서 코드가 카테고리마다 하나씩 뽑는다 (pickSeeds).
 * 그 재료로 한 번에 story.json (설계 design → 프롤로그·이야기 방 1,3,5,8,10·에필로그) 을 쓴다.
 * /api/gemini 는 user 메시지 하나만 받으므로 시스템 프롬프트를 앞에 붙여 보낸다.
 */

import storyPromptMd from '../data/storyarc/netshort_test/story-prompt.md?raw';

export const NETSHORT_ROOMS = ['1', '3', '5', '8'] as const;

// 프롬프트 문장은 story-prompt.md 에만 있다. 여기서는 코드 블록을 꺼내 {{자리}}만 채운다
const PROMPT_MD = storyPromptMd.replace(/\r\n/g, '\n');

/** md 의 "<제목>" 아래 첫 코드 블록 */
function mdBlock(heading: string): string {
	const at = PROMPT_MD.indexOf(heading);
	const m = at < 0 ? null : PROMPT_MD.slice(at).match(/\n```\n([\s\S]*?)\n```/);
	if (!m) throw new Error(`story-prompt.md 에서 "${heading}" 아래 코드 블록을 찾지 못했습니다.`);
	return m[1].trim();
}

export const NETSHORT_SYSTEM = mdBlock('## 시스템 프롬프트');
const INPUT_TEMPLATE = mdBlock('### 입력 템플릿');

/** {{이름}} 을 값으로 바꾼다. 값이 빈 자리가 있는 줄은 통째로 뺀다 */
function fill(template: string, vars: Record<string, string>): string {
	return template
		.split('\n')
		.flatMap((line) => {
			const names = [...line.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
			for (const n of names) if (!(n in vars)) throw new Error(`story-prompt.md 입력 템플릿의 {{${n}}} 에 넣을 값이 없습니다.`);
			if (names.some((n) => !vars[n])) return [];
			return [line.replace(/\{\{(\w+)\}\}/g, (_, n) => vars[n])];
		})
		.join('\n');
}

export type NetshortNpc = { id: string; name: string; persona?: string };

export type NetshortDesign = {
	device: string;
	how: string;
	visible_effect: string;
	wrong_action: string;
	right_action: string;
	original_sin: string;
	boss_trace: string;
	boss_name: string;
	boss_look: string;
	true_identity: string;
	twist: string;
	/** 히어로들이 장치를 쓸 때마다 보스가 얻는 것 */
	boss_want: string;
	/** right_action 을 하면 왜 보스가 무너지는지 */
	finale_logic: string;
	/** caution: 2~4화만. 앞 화에서 배운 것 → 이번에 조심하는 방법 */
	/** link: 피해가 그 사람에게 간 이유 (작동법대로) */
	/** seen: 1~8번 방에서 believed 가 주인 없거나 받아도 되는 사람의 것처럼 보이는 장면 (그 물건 자체만, 새 물건·설정 없이) */
	deceptions: { order: number; believed: string; actual_victim: string; link?: string; seen?: string; caution?: string }[];
	/** 히어로들이 이곳에 온 이유 */
	goal: string;
};
export type NetshortEpisode = {
	order: number;
	place: string;
	npc: { name: string; role: string };
	boss: string;
	rooms: Record<string, string | { before_battle: string; win: string; lose: string }>;
	epilogue?: string;
};
export type NetshortStory = { id: string; title: string; design: NetshortDesign; prologue: string; episodes: NetshortEpisode[] };

/* ── 재료 (story-seeds.json) ── */

/** props: 무대(worlds)에만 — 그 무대에 실제로 있을 소품. 소품 낱말은 여기서 뽑는다 */
export type SeedItem = { key: string; name: string; hint?: string; examples?: string[]; props?: string[] };
/** 사람이 문장으로 정한 핵심 장치. worlds 가 비면 아무 무대에나 */
export type SeedDevice = {
	key: string;
	object: string;
	rule: string;
	effect: string;
	/** 장치가 넘기는 피해 (1~4화 win 의 위험) */
	harm: string;
	wrong_action: string;
	right_action: string;
	worlds?: string[];
	/** false 면 피해가 몸에 오지 않아(돈·누명 등) 매 화 전투와 안 맞음 → 뽑지 않는다 */
	battle?: boolean;
};
export type UsedStory = { id?: string; title: string; world: string; device: string; twist: string };
export type StorySeeds = {
	theme: string;
	theme_description: string;
	worlds: SeedItem[];
	devices: SeedDevice[];
	original_sins: SeedItem[];
	twist_types: SeedItem[];
	tones: string[];
	/** 예전 재료 (지금은 뽑지 않음): 모티프·화별 이유·소품 낱말이 뜬금없는 물건·설정을 끌어와서 뺌 */
	motifs?: SeedItem[];
	reason_types?: SeedItem[];
	/** 2~4화 조심하는 방식 (앞 화 피해를 보고). 화마다 다르게 */
	caution_types?: SeedItem[];
	random_words?: string[];
	banned_cliches: string[];
	used_stories: UsedStory[];
};
/** 코드가 뽑은 재료 한 벌. <출력 폴더>/seeds.json 으로 저장해 다시 쓸 때 그대로 씀 */
export type PickedSeeds = {
	theme: string;
	world: SeedItem;
	device: SeedDevice;
	original_sin: SeedItem;
	twist_type: SeedItem;
	tone: string;
	cautions?: SeedItem[]; // 2~4화, 서로 다름
	/** 예전 seeds.json 에만 있음 (지금은 프롬프트에 넣지 않음) */
	motif?: SeedItem;
	reasons?: SeedItem[];
	random_words?: string[];
	/** 1~5화 NPC id (5화 = 4화). NPC 풀이 있어야 해서 엔드포인트가 assignCast 로 채움 */
	npcs?: string[];
	/** 보스 흔적이 나올 화 (1~4화 중 둘) */
	trace_orders?: number[];
};

/** NPC 1~4화 서로 다르게, 5화 = 4화. 보스 흔적은 1~4화 중 두 화 */
export function assignCast(poolIds: string[], rand: () => number = Math.random): { npcs: string[]; trace_orders: number[] } {
	const shuffled = [...poolIds].sort(() => rand() - 0.5);
	const four = [0, 1, 2, 3].map((i) => shuffled[i % shuffled.length]);
	const orders = [1, 2, 3, 4].sort(() => rand() - 0.5).slice(0, 2).sort();
	return { npcs: [...four, four[3]], trace_orders: orders };
}

/** 2~4화 실제 피해자 = 앞 화 NPC. 1화는 Gemini 가 정함(그 자리의 모르는 사람) */
export const victimNpcOf = (npcs: string[], order: number) => (order >= 2 && order <= 4 ? npcs[order - 2] : '');

const pick = <T>(list: T[], rand: () => number): T => list[Math.floor(rand() * list.length)];

/** 카테고리마다 하나씩 (무대·장치·원죄·반전·톤, 2~4화 조심하는 방식) */
export function pickSeeds(seeds: StorySeeds, rand: () => number = Math.random): PickedSeeds {
	// 쓸 수 있는 장치가 있는 무대만
	const worlds = seeds.worlds.filter((w) => usableDevices(seeds).some((d) => d.worlds?.includes(w.key)));
	const world = pick(worlds.length ? worlds : seeds.worlds, rand);
	const device = pickDevice(seeds, world.key, rand);
	return {
		theme: seeds.theme,
		world,
		device,
		original_sin: pick(seeds.original_sins, rand),
		twist_type: pick(seeds.twist_types, rand),
		tone: pick(seeds.tones, rand),
		cautions: pickCautions(seeds, rand)
	};
}

/** 2~4화 조심하는 방식. 서로 다르게 3개 (종류가 3개보다 적으면 있는 만큼 돌려 씀) */
export function pickCautions(seeds: StorySeeds, rand: () => number = Math.random): SeedItem[] {
	const list = [...(seeds.caution_types ?? [])].sort(() => rand() - 0.5);
	return list.length ? [0, 1, 2].map((i) => list[i % list.length]) : [];
}

/** 전투와 맞는 장치 (battle: false 가 아닌 것) */
const usableDevices = (seeds: StorySeeds) => (seeds.devices ?? []).filter((d) => d.battle !== false);

/** 그 무대에 맞는 장치 중 하나. 맞는 게 없으면 무대 제한 없는 것, 그것도 없으면 전체에서 (battle: false 는 빼고) */
export function pickDevice(seeds: StorySeeds, worldKey: string, rand: () => number = Math.random): SeedDevice {
	const list = usableDevices(seeds).length ? usableDevices(seeds) : seeds.devices ?? [];
	if (!list.length) throw new Error('story-seeds.json 에 devices 가 없습니다.');
	const fit = list.filter((d) => d.worlds?.includes(worldKey));
	const free = list.filter((d) => !d.worlds?.length);
	return pick(fit.length ? fit : free.length ? free : list, rand);
}

const NPC_JOB = [
	'위험을 처음 알려주는 NPC',
	'피해를 직접 겪었거나 증언하는 NPC',
	'과거의 진실에 대한 단서를 주는 NPC',
	'처음엔 wrong_action을 믿다가 이 화에서 돌아서는 NPC',
	'4화의 NPC가 함께 간다'
];

const withHint = (x: SeedItem) => (x.hint ? `${x.name} — ${x.hint}` : x.name);

/** 재료 → story.json 을 한 번에 쓰는 프롬프트 */
export function buildNetshortPrompt(
	id: string,
	seeds: PickedSeeds,
	ctx: { themeDescription: string; npcPool: NetshortNpc[]; banned: string[]; used: UsedStory[] }
): string {
	const nameOf = new Map(ctx.npcPool.map((n) => [n.id, n.name]));
	const npcLabel = (id: string) => `${nameOf.get(id) ?? id}(${id})`;
	const input = fill(INPUT_TEMPLATE, {
		id,
		theme_description: ctx.themeDescription,
		world: seeds.world.name,
		device_object: seeds.device.object,
		device_rule: seeds.device.rule,
		device_effect: seeds.device.effect,
		device_harm: seeds.device.harm,
		wrong_action: seeds.device.wrong_action,
		right_action: seeds.device.right_action,
		npcs: (seeds.npcs ?? []).map((id, i) => `- ${i + 1}화: ${npcLabel(id)} — ${NPC_JOB[i]}`).join('\n'),
		victims: [2, 3, 4].map((o) => `- ${o}화: ${npcLabel(victimNpcOf(seeds.npcs ?? [], o))} (${o - 1}화 NPC)`).join('\n'),
		trace_orders: (seeds.trace_orders ?? []).join(', '),
		original_sin: withHint(seeds.original_sin),
		twist_type: withHint(seeds.twist_type),
		tone: seeds.tone,
		cautions: (seeds.cautions ?? []).map((c, i) => `- ${i + 2}화: ${withHint(c)}`).join('\n'),
		npc_pool: JSON.stringify(seeds.npcs?.length ? ctx.npcPool.filter((n) => seeds.npcs!.includes(n.id)) : ctx.npcPool, null, 2),
		banned: ctx.banned.map((b) => `- ${b}`).join('\n'),
		used_stories: ctx.used.map((u) => `  - ${u.title}: ${u.world} / ${u.device} / ${u.twist}`).join('\n')
	});
	return `${NETSHORT_SYSTEM}\n\n---\n\n${input}`;
}

const str = (description: string) => ({ type: 'string', description });

export const netshortStoryTool = {
	type: 'function',
	function: {
		name: 'netshort_story',
		description: '5화 본문',
		parameters: {
			type: 'object',
			properties: {
				id: str('스토리 id'),
				title: str('제목'),
				design: {
					type: 'object',
					properties: {
						device: str('핵심 장치: 물건이나 장소 하나의 짧은 이름'),
						how: str('작동법 한 문장'),
						visible_effect: str('작동하면 눈에 보이는 결과 한 문장'),
						original_sin: str('원죄'),
						boss_trace: str('1~4화 보스 흔적 (본문에 그대로 쓸 짧은 명사구)'),
						boss_name: str('최종 보스 이름'),
						boss_look: str('최종 보스 외모 (옷차림·장신구·들고 있는 물건)'),
						goal: str('히어로들이 이곳에 온 이유 한 문장 (누구를·무엇을 찾거나 막으러 왔는지)'),
						boss_want: str('히어로들이 장치를 쓸 때마다 보스가 얻는 구체적인 이득 한 문장'),
						finale_logic: str('right_action 을 하면 작동법 안에서 왜 보스가 무너지는지 한 문장'),
						true_identity: str('최종 보스의 진짜 정체'),
						twist: str('반전 (짧은 명사구)'),
						deceptions: {
							type: 'array',
							description: '1~4화마다 히어로들이 속는 방식',
							items: {
								type: 'object',
								properties: {
									order: { type: 'integer' },
									believed: str('히어로들이 피해가 갈 거라고 믿은 대상'),
									actual_victim: str('실제로 피해를 받은 사람 (1화는 그 자리의 모르는 사람, 2~4화는 입력대로)'),
									link: str('피해가 actual_victim 에게 간 이유 한 문장. 작동법 그대로 (히어로들이 고른 것이 사실은 그 사람의 것이었던 이유). win 에서 히어로들이 보는 증거를 함께'),
									seen: str('몇 번 방(1·3·5·8)에서 believed 그 물건·이름이 왜 주인 없거나 받아도 되는 사람의 것처럼 보이는지 한 문장. 그 물건 자체만 (새 물건·새 설정 금지)'),
									caution: str('2~4화만: 앞 화에서 누가 다친 것을 보고 배운 것 → 이번에 어떻게 조심하는지 한 문장 (1화는 빈 문자열)')
								},
								required: ['order', 'believed', 'actual_victim', 'link', 'seen']
							}
						}
					},
					required: ['deceptions', 'device', 'how', 'visible_effect', 'original_sin', 'boss_trace', 'boss_name', 'boss_look', 'boss_want', 'finale_logic', 'goal', 'true_identity', 'twist']
				},
				prologue: str('프롤로그'),
				episodes: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							order: { type: 'integer' },
							place: str('장소'),
							npc: {
								type: 'object',
								properties: { name: str('입력의 NPC 배정 id 그대로'), role: str('직업') },
								required: ['name', 'role']
							},
							boss: str('보스 이름'),
							rooms: {
								type: 'object',
								properties: {
									'1': str('1번 방: 인트로'),
									'3': str('3번 방'),
									'5': str('5번 방'),
									'8': str('8번 방'),
									'10': {
										type: 'object',
										properties: {
											before_battle: str('전투 전'),
											win: str('승리 후'),
											lose: str('패배 후')
										},
										required: ['before_battle', 'win', 'lose']
									}
								},
								required: ['1', '3', '5', '8', '10']
							},
							epilogue: str('5화에만. 1화 1번 방과 짝을 이루는 장면')
						},
						required: ['order', 'place', 'npc', 'boss', 'rooms']
					}
				}
			},
			required: ['id', 'title', 'design', 'prologue', 'episodes']
		}
	}
};

/* ── 코드 검사 ── */

/** 장치에 붙인 장식·부품 */
const DEVICE_DECOR = /문양|새겨|각인|장착|부착|박혀|박힌|달려 있|달린 /;
const sentences = (t: string) => (t.match(/[.!?…。](?=\s|"|”|$)/g) ?? []).length || (t.trim() ? 1 : 0);

// 대사(큰따옴표 안)를 뺀 서술 문장
const narration = (t: string) =>
	t
		.replace(/["“][^"”]*["”]/g, ' ')
		.split(/(?<=[.!?…])\s+/)
		.map((x) => x.trim())
		.filter(Boolean);
// 받침 ㅆ + 다 로 끝나는 문장 (했다, 들어섰다, 있었다 …) = 과거형. 단 "있다"는 현재형
const isPast = (sentence: string) => {
	const m = sentence.replace(/[.!?…\s'"’”]+$/, '').match(/(.)다$/);
	if (!m || m[1] === '있') return false; // "있다"는 현재형
	const c = m[1].charCodeAt(0) - 0xac00;
	return c >= 0 && c < 11172 && c % 28 === 20;
};

// true_identity 의 마지막 낱말(정체를 가리키는 명사). 이미 드러난 설정에 있는 낱말은 뺀다
function identityWord(d: NetshortDesign): string {
	const word = String(d.true_identity ?? '')
		.replace(/[.\s]+$/, '')
		.replace(/(이다|다)$/, '')
		.split(/\s+/)
		.pop()
		?.replace(/[^가-힣A-Za-z]/g, '');
	if (!word || word.length < 2) return '';
	const open = [d.device, d.wrong_action, d.right_action, d.boss_trace].join(' ');
	return open.includes(word) ? '' : word;
}

// 결과를 눈에 안 보이는 말로 쓴 것 (돈이 옮겨 갔다는 설명, 금액 숫자)
const INVISIBLE_EFFECT = /전가|계좌|\d[\d,]*\s*원|[일이삼사오육칠팔구십백천]+만\s*원/;

/** 핵심 장치 이름의 중심 낱말 (마지막 낱말) */
const deviceHead = (device: string) => device.trim().split(/\s+/).pop()?.replace(/[^가-힣A-Za-z0-9]/g, '') ?? '';

/** believed 의 중심 낱말: 장치 이름에 없는 낱말 중 마지막 ("가짜 이름" + 장치 "2P 이름 칸" → "가짜") */
function believedWord(believed: string, device: string): string {
	const words = believed.split(/\s+/).map((w) => w.replace(/[^가-힣A-Za-z0-9]/g, '').replace(/(의|을|를|이|가|은|는)$/, '')).filter((w) => w.length >= 2 && !device.includes(w));
	return words.pop() ?? '';
}

// 입력 문장을 본문에 그대로 옮겼는지: 띄어쓰기를 뺀 원문에서 14자 이상 이어진 조각이 본문에 있으면 걸림
const COPY_LEN = 14;
const squash = (t: string) => t.replace(/[\s.,!?"'“”‘’]/g, '');
function copiedFrom(sources: string[]): (text: string) => string {
	const pieces = new Set<string>();
	for (const src of sources) {
		const s = squash(String(src ?? ''));
		for (let i = 0; i + COPY_LEN <= s.length; i++) pieces.add(s.slice(i, i + COPY_LEN));
	}
	return (text) => {
		const t = squash(text);
		for (const p of pieces) if (t.includes(p)) return p;
		return '';
	};
}

const INJURED_BEFORE = /(다친|다쳤던|쓰러진|쓰러졌던|상처\s?입은|상처를\s?입은|피\s?흘리는|피를\s?흘리던|붕대를\s?감은|절뚝이는|절뚝거리는|멍든)\s*$/;
const INJURED_AFTER_NOUN = /^(의)?\s*(상처|붕대|멍|흉터|부상|피멍)/;
const INJURED_AFTER_VERB = /(다쳤|다친\s|쓰러지|쓰러진다|쓰러졌|움켜쥐|피를\s?흘|피를\s?토|멍이\s?든|상처가\s?생|주저앉)/;

/** 피해자 이름 뒤바뀜: 아직 다치지 않은 피해자가 다친 사람처럼 나오면 오류.
 *  cast: 1~4화 실제 피해자 이름(마지막 낱말) 목록, allowed: 이 글 시점까지 다친 사람 */
export function injuredNameErrors(text: string, where: string, cast: string[], allowed: string[]): string[] {
	const out: string[] = [];
	for (const n of new Set(cast.filter((x) => x.length >= 1 && !allowed.includes(x)))) {
		for (let at = text.indexOf(n); at >= 0; at = text.indexOf(n, at + n.length)) {
			const before = text.slice(Math.max(0, at - 12), at);
			const after = text.slice(at + n.length);
			// 낱말 경계: 앞은 한글이 아니고, 뒤는 조사·띄어쓰기·문장부호 (한 글자 이름 "렌"이 "렌즈"에 걸리지 않게)
			if (/[가-힣]$/.test(before) || !/^($|[\s.,!?…'"”’]|이|가|은|는|을|를|의|에|와|과|도|만)/.test(after)) continue;
			const sentence = after.split(/[.!?…]/)[0];
			// 주어 뒤 동사. 동사 가까이에 다른 피해자·히어로들이 있으면 그 사람 이야기 ("니아가 다친 벡스를", "주저앉은 히어로들")
			const verb = /^(이|가|은|는)\s/.test(sentence) ? sentence.slice(0, 32).match(INJURED_AFTER_VERB) : null;
			const near = verb ? sentence.slice(0, (verb.index ?? 0) + verb[0].length + 8) : '';
			if (INJURED_BEFORE.test(before) || INJURED_AFTER_NOUN.test(after) || (verb && !/히어로/.test(near) && !cast.some((c) => c !== n && near.includes(c)))) {
				out.push(`${where}: "${n}" 은 이 시점에 아직 다치지 않았습니다 (지금까지 다친 사람: ${allowed.join(', ') || '없음'}). 피해자 이름을 바꿔 쓰지 말 것: "${text.slice(Math.max(0, at - 20), at + n.length + 20)}"`);
				break;
			}
		}
	}
	return out;
}

/** traceOrders: 보스 흔적이 나와야 하는 화 (seeds.trace_orders) */
export function checkNetshortStory(s: NetshortStory, traceOrders: number[] = []): string[] {
	const errors: string[] = [];
	const d = (s?.design ?? {}) as NetshortDesign;
	const device = String(d.device ?? '').trim();
	if (device.length > 20 || /연결|붙은|달린|이어진|와\s|과\s/.test(device))
		errors.push(`design.device "${device}" 는 물건이나 장소 하나의 짧은 이름으로 쓸 것. 여러 물건을 이어 붙이지 않는다.`);
	const head = deviceHead(device);
	const copied = copiedFrom([d.how, d.visible_effect, d.true_identity]);
	// 화마다 속는 방식: 믿은 대상 ≠ 실제 피해자, 그 화 win 에 피해자, 2~4화 피해자는 앞 화에 나온 인물
	const decs = Array.isArray(d.deceptions) ? d.deceptions : [];
	const victimOf: Record<number, string> = {};
	const believedOf: Record<number, string> = {};
	if (decs.map((x) => x?.order).join(',') !== '1,2,3,4') errors.push(`design.deceptions 는 1~4화 차례로 하나씩 (order 1,2,3,4). (지금: ${decs.map((x) => x?.order).join(',') || '없음'})`);
	for (const x of decs) {
		const b = String(x?.believed ?? '').trim();
		const v = String(x?.actual_victim ?? '').trim();
		if (!b || !v) errors.push(`design.deceptions ${x?.order}화: believed·actual_victim 을 모두 쓸 것.`);
		else if (b === v || b.includes(v) || v.includes(b)) errors.push(`design.deceptions ${x.order}화: 실제 피해자 "${v}" 가 히어로들이 믿은 대상 "${b}" 과 같습니다. 히어로들은 다른 대상에게 간다고 믿어야 함.`);
		else {
			if (!String(x?.link ?? '').trim()) errors.push(`design.deceptions ${x.order}화: link(피해가 그 사람에게 간 이유, 작동법대로)를 쓸 것.`);
			if (x.order >= 2 && x.order <= 4 && !String(x?.caution ?? '').trim())
				errors.push(`design.deceptions ${x.order}화: caution(앞 화에서 배운 것 → 이번에 조심하는 방법)을 쓸 것.`);
			victimOf[x.order] = deviceHead(v);
			const bw = believedWord(b, device);
			if (bw) believedOf[x.order] = bw;
		}
	}
	const epText: Record<number, string> = {};
	for (const k of ['device', 'how', 'visible_effect', 'wrong_action', 'right_action', 'original_sin', 'boss_trace', 'boss_name', 'boss_look', 'boss_want', 'finale_logic', 'goal', 'true_identity', 'twist'] as const)
		if (!String(d[k] ?? '').trim()) errors.push(`design.${k} 가 비었습니다.`);
	if (!s?.prologue?.trim()) errors.push('prologue 가 비었습니다.');
	const eps = Array.isArray(s?.episodes) ? s.episodes : [];
	if (eps.map((e) => e.order).join(',') !== '1,2,3,4,5') errors.push(`episodes 의 order 는 1,2,3,4,5 차례여야 합니다. (지금: ${eps.map((e) => e.order).join(',')})`);
	const idWord = identityWord(d);
	const trace = String(d.boss_trace ?? '').trim();
	const roleOf: Record<string, string> = {};
	const traceEps: number[] = [];
	// [어디, 글, 정체 공개 전인지]
	const texts: [string, string, boolean][] = [['prologue', s?.prologue ?? '', true]];
	for (const e of eps) {
		const name = e.npc?.name ?? '';
		const role = (e.npc?.role ?? '').trim();
		if (!role) errors.push(`${e.order}화 npc.role(직업)이 비었습니다.`);
		else if (roleOf[name] && roleOf[name] !== role) errors.push(`${e.order}화 ${name} 의 role "${role}" 이 앞 화 "${roleOf[name]}" 과 다릅니다. 같은 NPC는 같은 role.`);
		else roleOf[name] = role;
		const rooms = e.rooms ?? {};
		const keys = Object.keys(rooms).sort((a, b) => Number(a) - Number(b));
		if (keys.join(',') !== '1,3,5,8,10') errors.push(`${e.order}화 rooms 는 1,3,5,8,10 만 써야 합니다. (지금: ${keys.join(',')})`);
		const epTexts: string[] = [];
		for (const k of NETSHORT_ROOMS) {
			const t = rooms[k];
			if (typeof t !== 'string' || !t.trim()) errors.push(`${e.order}화 방 ${k} 이 비었습니다.`);
			else {
				// 5화 8번 방에서 정체가 처음 드러남 → 5화 1·3·5번 방까지는 공개 전
				texts.push([`${e.order}화 방 ${k}`, t, e.order < 5 || k !== '8']);
				epTexts.push(t);
			}
		}
		const r10 = rooms['10'];
		if (!r10 || typeof r10 !== 'object') errors.push(`${e.order}화 방 10 은 { before_battle, win, lose } 여야 합니다.`);
		else
			for (const k of ['before_battle', 'win', 'lose'] as const) {
				if (!r10[k]?.trim()) errors.push(`${e.order}화 방 10 ${k} 이 비었습니다.`);
				else {
					texts.push([`${e.order}화 방 10 ${k}`, r10[k], e.order < 5]);
					epTexts.push(r10[k]);
				}
			}
		if (e.order <= 4 && trace && epTexts.some((t) => t.includes(trace))) traceEps.push(e.order);
		const r10x = rooms['10'] && typeof rooms['10'] === 'object' ? (rooms['10'] as Record<string, string>) : {};
		epText[e.order] = [...NETSHORT_ROOMS.map((k) => String(rooms[k] ?? '')), r10x.before_battle, r10x.win, r10x.lose].join(' ');
		// 피해자 이름 뒤바뀜: 방 1~8·전투 전·패배는 앞 화까지 다친 사람만, win 은 이 화 피해자까지
		const cast = Object.values(victimOf);
		const hurtBefore = Object.entries(victimOf).filter(([o]) => Number(o) < e.order).map(([, v]) => v);
		const hurtAfter = Object.entries(victimOf).filter(([o]) => Number(o) <= e.order).map(([, v]) => v);
		for (const k of NETSHORT_ROOMS) errors.push(...injuredNameErrors(String(rooms[k] ?? ''), `${e.order}화 방 ${k}`, cast, hurtBefore));
		errors.push(...injuredNameErrors(String(r10x.before_battle ?? ''), `${e.order}화 방 10 before_battle`, cast, hurtBefore));
		errors.push(...injuredNameErrors(String(r10x.lose ?? ''), `${e.order}화 방 10 lose`, cast, hurtBefore));
		errors.push(...injuredNameErrors(String(r10x.win ?? ''), `${e.order}화 방 10 win`, cast, hurtAfter));
		const victim = victimOf[e.order];
		if (victim && !String(r10x.win ?? '').includes(victim)) errors.push(`${e.order}화 방 10 win 에 실제 피해자 "${victim}" 가 나오지 않습니다. 피해가 그 사람에게 간 것을 결과 장면으로 보여줄 것.`);
		// 2~4화: 앞 화 피해자를 1·3·5번 방에서 다시 보여주고 히어로들이 떠올린다 (같은 실수를 처음처럼 반복하지 않게)
		const prevVictim = victimOf[e.order - 1];
		if (e.order >= 2 && e.order <= 4 && prevVictim && !['1', '3', '5'].some((k) => String(rooms[k] ?? '').includes(prevVictim)))
			errors.push(`${e.order}화 방 1·3·5 에 앞 화 피해자 "${prevVictim}" 가 나오지 않습니다. 앞 화에서 다친 그 사람의 지금 모습을 보여주고, 히어로들이 그 일을 떠올리게 할 것.`);
		// 장치는 before_battle 에서 쓴다 → 무엇을 넣었는지(believed)는 before_battle 에
		const believed = believedOf[e.order];
		if (believed && !String(r10x.before_battle ?? '').includes(believed))
			errors.push(`${e.order}화 방 10 before_battle 에 히어로들이 믿은 대상 "${believed}" 가 나오지 않습니다. 장치는 전투 전에 쓴다. 장치에 무엇을 넣었는지 그 낱말 그대로 쓸 것 ("남의 이름"처럼 뭉뚱그리지 않는다).`);
		// 믿은 대상은 전투 전에 먼저 보여 준다 (before_battle 에서 갑자기 나오면 왜 믿었는지 모름)
		if (believed && !NETSHORT_ROOMS.some((k) => String(rooms[k] ?? '').includes(believed)))
			errors.push(`${e.order}화 방 1~8 에 히어로들이 믿은 대상 "${believed}" 가 나오지 않습니다. design.deceptions 의 seen 대로, 그 물건·이름이 왜 주인 없거나 받아도 되는 사람의 것처럼 보이는지 1~8번 방에 먼저 보여줄 것.`);
		// win 은 전투 뒤 결과. 전투를 이어 가지 않는다
		if (e.order <= 4 && /(날아든다|날아온다|쏟아진다|육박|반격)/.test(String(r10x.win ?? '')))
			errors.push(`${e.order}화 방 10 win: win 은 전투가 끝난 뒤의 결과 장면이다. 공격이 다시 날아오는 장면을 쓰지 말고, 피해가 누구에게 갔는지만 쓸 것.`);
		if (e.order === 1 && head && !NETSHORT_ROOMS.some((k) => String(rooms[k] ?? '').includes(head)))
			errors.push(`1화 방 1~8 에 핵심 장치 "${head}" 가 나오지 않습니다. win 전에 장치와 작동법을 장면으로 먼저 보여줄 것.`);
		const win = r10 && typeof r10 === 'object' ? String(r10.win ?? '') : '';
		if (e.order <= 4 && /뒤늦게/.test(win)) errors.push(`${e.order}화 방 10 win: 경고는 행동하기 전에 나와야 합니다. win 에서 "뒤늦게" 경고하지 않는다.`);
		if (e.order === 5 && !e.epilogue?.trim()) errors.push('5화에 epilogue 가 없습니다.');
		if (e.order !== 5 && e.epilogue?.trim()) errors.push(`epilogue 는 5화에만 넣습니다. (${e.order}화에 있음)`);
		if (e.order === 5 && e.epilogue) texts.push(['epilogue', e.epilogue, false]);
	}
	// 핵심 장치에 장식을 덧붙이지 않는다 (예: "주사위 문양이 새겨진 장치")
	for (const [where, t] of texts)
		for (const sen of t.split(/(?<=[.!?…])\s+/)) {
			if (!sen.includes('장치') && !(head.length >= 2 && sen.includes(head))) continue;
			const w = sen.match(DEVICE_DECOR)?.[0];
			if (w) errors.push(`${where}: 핵심 장치에 "${w}" 를 덧붙였습니다. 장치는 작동법에 있는 모습만 쓸 것: "${sen.trim()}"`);
		}
	const missing = traceOrders.filter((o) => !traceEps.includes(o));
	if (trace && missing.length) errors.push(`보스 흔적 "${trace}" 가 ${missing.join(',')}화에 나오지 않습니다. 입력의 [흔적이 나올 화]마다 글자 그대로 쓸 것.`);
	for (const [where, t, hidden] of texts) {
		if (/[一-鿿]/.test(t)) errors.push(`${where}: 한자가 섞였습니다. 한글로 쓸 것: "${t.match(/.{0,8}[一-鿿]+.{0,8}/)?.[0]}"`);
		if (/주인공|플레이어/.test(t)) errors.push(`${where}: "주인공/플레이어" 대신 "히어로들"이라고 쓸 것.`);
		if (/이번(엔|에는|만큼은)\s*(괜찮|안전)/.test(t)) errors.push(`${where}: "이번엔 괜찮다"를 말로 쓰지 말고 장면으로 보여줄 것.`);
		if (where.includes('방') && sentences(t) > 5) errors.push(`${where}: 문장이 너무 깁니다 (${sentences(t)}문장). 2~4문장으로.`);
		const bad = t.match(INVISIBLE_EFFECT)?.[0];
		if (bad) errors.push(`${where}: "${bad}" 처럼 눈에 안 보이는 말(돈이 옮겨 갔다는 설명, 금액)을 썼습니다. 보이는 장면으로 쓸 것.`);
		const copy = copied(t);
		if (copy) errors.push(`${where}: design 문장(작동법·결과·정체)을 그대로 옮겼습니다 ("${copy}"). 그 화의 인물·물건에 맞게 풀어 쓸 것.`);
		if (hidden && idWord && t.includes(idWord))
			errors.push(`${where}: 보스의 진짜 정체를 가리키는 "${idWord}" 가 5화 8번 방 전에 나옵니다. 보이고 들리는 흔적만 남길 것.`);
		const past = narration(t).filter(isPast);
		if (past.length) errors.push(`${where}: 서술이 과거형입니다. 현재형으로 쓸 것: "${past[0]}"`);
	}
	return errors;
}

/** used_stories 에 넣을 한 줄 */
export function usedStoryOf(s: NetshortStory, seeds: PickedSeeds): UsedStory {
	return { id: s.id, title: s.title, world: seeds.world.name, device: s.design?.device ?? '', twist: `${s.design?.twist ?? ''} (${seeds.twist_type.name})` };
}

/** 사람이 읽는 md */
export function netshortToMarkdown(s: NetshortStory, seeds?: PickedSeeds): string {
	const out: string[] = [`# ${s.title} (${s.id})`, ''];
	if (seeds)
		out.push(
			'## 재료',
			'',
			`- 무대: ${seeds.world.name}`,
			`- 장치: ${seeds.device?.object ?? ''} / 원죄: ${seeds.original_sin.name} / 반전: ${seeds.twist_type.name}`,
			`- 톤: ${seeds.tone}`,
			...(seeds.cautions?.length ? [`- 조심하는 방식: ${seeds.cautions.map((c, i) => `${i + 2}화 ${c.name}`).join(' / ')}`] : []),
			''
		);
	const d = s.design;
	if (d)
		out.push(
			'## 설계',
			'',
			`- 핵심 장치: ${d.device}`,
			`- 작동법: ${d.how ?? ''}`,
			`- 보이는 결과: ${d.visible_effect ?? ''}`,
			`- 잘못된 행동: ${d.wrong_action} / 올바른 행동: ${d.right_action}`,
			`- 원죄: ${d.original_sin}`,
			`- 보스 흔적: ${d.boss_trace}`,
			...(d.deceptions ?? []).map((x) => `- ${x.order}화 속는 방식: 믿은 대상 "${x.believed}" → 실제 피해자 "${x.actual_victim}"${x.seen ? ` / 믿게 된 장면: ${x.seen}` : ''}${x.link ? ` / 이유: ${x.link}` : ''}${x.caution ? ` / 조심: ${x.caution}` : ''}`),
			`- 최종 보스: ${d.boss_name} — ${d.true_identity} (${d.twist})`,
			`- 히어로들이 온 이유: ${d.goal ?? ''}`,
			`- 보스가 원하는 것: ${d.boss_want ?? ''}`,
			`- 보스가 무너지는 이유: ${d.finale_logic ?? ''}`,
			`- 보스 외모: ${d.boss_look ?? ''}`,
			''
		);
	out.push('## 프롤로그', '', s.prologue, '');
	for (const e of s.episodes ?? []) {
		out.push(`## ${e.order}화 — ${e.place}`, '', `- NPC: ${e.npc?.name} (${e.npc?.role}) / 보스: ${e.boss}`, '');
		for (const k of NETSHORT_ROOMS) out.push(`**[방 ${k}]** ${e.rooms?.[k] ?? ''}`, '');
		const r10 = e.rooms?.['10'] as { before_battle?: string; win?: string; lose?: string } | undefined;
		out.push(`**[방 10 · 전투 전]** ${r10?.before_battle ?? ''}`, '', `**[방 10 · 승리]** ${r10?.win ?? ''}`, '', `**[방 10 · 패배]** ${r10?.lose ?? ''}`, '');
		if (e.epilogue) out.push('## 에필로그', '', e.epilogue, '');
	}
	return out.join('\n');
}
