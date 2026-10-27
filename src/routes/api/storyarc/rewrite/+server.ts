import { json } from '@sveltejs/kit';
import { mkdir, readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import {
	assignGenres,
	bossSidesForId,
	deceiveModesForId,
	buildStoryarcRewritePrompt,
	type BossSide,
	type DeceiveMode,
	storyarcRewriteTool,
	type RewriteNpc,
	type UsedMaterial
} from '$lib/prompts/storyarcGen';
import { verbStem } from '$lib/prompts/arcEpisode';
import { getStoryarc } from '$lib/data/storyarc';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import { getNpcPersona } from '$lib/data/sample/npc';
import { clampChapterName } from '$lib/server/storyarcUtil';
import { buildStoryarcJudgePrompt, storyarcJudgeTool, JUDGE_ITEMS } from '$lib/prompts/storyarcJudge';
import type { StoryArc } from '$lib/types';
import type { RequestHandler } from './$types';

/**
 * 기존 storyarc 를 Gemini 로 다시 써서 모호함을 줄인다. 원본은 그대로 두고 outDir 에 새 파일로 저장.
 * 구조 규칙: 핵심 물건(key_object) 1~5화, 그 화 일반 보스 직업(random_boss_title) 이 1~4화 summary 에 나와야 함 (어기면 재요청).
 * 고정(코드로 덮어씀): id, level, theme, rising_count, final_boss 의 id·name·외형·zodiac_sign,
 *   NPC key 목록, order 별 act·boss, tension 1/3/5.
 *
 * body:
 *  - ids: string[]          다시 쓸 storyarc id 목록 (필수)
 *  - outDir?: string        저장 폴더 (기본 src/lib/data/storyarc/rewrite_test)
 *  - temperature?: number   기본 0.8
 *  - concurrency?: number   기본 3 (1~10)
 *  - judgeOnly?: boolean    true 면 재작업 없이 outDir 의 기존 재작업본만 채점
 *  - judge?: boolean        기본 true. 재작업 뒤 Gemini 채점(storyarcJudge.ts) → storyarc_<id>.judge.json
 */

const DEFAULT_OUT_DIR = 'src/lib/data/storyarc/rewrite_test';
const ROOMS = [1, 3, 5, 9, 15];
const ACT_BY_ORDER: Record<number, string> = { 1: 'intro', 2: 'rising', 3: 'rising', 4: 'rising', 5: 'climax_finale' };
const VAGUE_WORDS = ['묘한', '묘하게', '알 수 없는', '애매한', '어딘가', '같은 느낌', '암시', '기시감', '진정한', '새로운 시대', '새로운 시작', '어렴풋이'];
const RUMOR_WORDS = ['소문', '속삭임', '풍문'];

type Gen = Record<string, unknown>;
type JudgeItem = { id: string; name: string; pass: boolean; quote: string; reason: string; quote_found?: boolean };
type Result = { id: string; file?: string; errors?: string[]; judge?: JudgeItem[]; judgeError?: string; error?: string };

// 다시 요청할 만한 구조 오류
const BOSS_STORY_WORDS = ['목적', '영원히', '원한다', '소원', '사연', '복수'];
const BLOCK_VERBS = ['막아', '막는', '막으', '가로막', '덤비', '덤빈', '저지', '공격', '방해', '쫓아', '붙잡'];
const PERSUADE_WORDS = ['설득', '권유', '권한', '권하', '유혹', '부추', '종용'];
// 1~4화 보스 문장에 얼굴·몸이 보이는 표현
const FACE_WORDS = ['얼굴', '미소', '웃으며', '웃는', '다가와', '다가온', '나타나', '나타난', '눈빛', '손을 내밀', '모습을 드러'];
const RESIST_WORDS = ['막', '저지', '빼앗', '방해', '공격', '덤비', '덤빈', '붙잡', '가로'];
const FALL_WORDS = ['무너', '쓰러', '부서', '사라', '흩어', '녹아', '소멸', '깨지', '꺼지', '꺼진'];
const APPROVE_WORDS = ['반긴', '반기', '고맙', '돕는', '도와', '축하', '기뻐'];
// 뜻이 비슷한 동사 묶음: 틀린 행동과 정답 행동이 같은 묶음이면 구분이 안 된다
const SIMILAR_VERBS = [
	['초기화', '재설정', '리셋', '재부팅'],
	['정리', '정돈'],
	['복원', '복구', '되돌', '되살'],
	['파기', '파쇄', '폐기', '삭제', '지운', '지우'],
	['부수', '부순', '깨뜨', '깨부', '파괴'],
	['숨기', '숨긴', '감추', '감춘'],
	['모으', '모은', '수집', '통합', '합치', '합친', '취합']
];
const NOT_ACTION = /(지 않는다|지 않고|않는다)[.]?$/;

// 한국어 이름의 첫소리가 영어 이름 첫 글자와 맞는지 (예시 이름을 베끼거나 지어낸 이름 걸러내기)
const INITIALS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const ALLOWED_INITIAL: Record<string, string> = {
	a: 'ㅇ', e: 'ㅇ', i: 'ㅇ', o: 'ㅇ', u: 'ㅇ', w: 'ㅇ', y: 'ㅇ', h: 'ㅎㅇ',
	b: 'ㅂ', v: 'ㅂ', c: 'ㅋㅅㅊ', k: 'ㅋㄱ', q: 'ㅋ', g: 'ㄱㅈ', j: 'ㅈ', z: 'ㅈ',
	d: 'ㄷ', t: 'ㅌㄷ', f: 'ㅍ', p: 'ㅍ', l: 'ㄹ', r: 'ㄹ', m: 'ㅁ', n: 'ㄴ',
	s: 'ㅅㅆㅊ', x: 'ㅈㅅㅋㅇ'
};
function nameInitialMatches(english: string, korean: string): boolean {
	const letter = english.trim().toLowerCase().match(/[a-z]/)?.[0];
	const ch = korean.trim().charCodeAt(0);
	if (!letter || ch < 0xac00 || ch > 0xd7a3) return true; // 판단 불가 → 통과
	const initial = INITIALS[Math.floor((ch - 0xac00) / 588)];
	return (ALLOWED_INITIAL[letter] ?? '').includes(initial);
}

// 문장 단위로 자르기 (검사용)
const sentencesOf = (text: string) => text.split(/(?<=[.!?。])\s+/).filter(Boolean);
// 호칭을 단어로 (2글자 이상)
const wordsOf = (title: string) => title.split(/\s+/).filter((w) => w.length >= 2);

// 두 문장의 글자 2개짜리 조각(바이그램) 겹침 비율 (0~1)
function similarity(a: string, b: string): number {
	const grams = (t: string) => {
		const x = t.replace(/\s+/g, '');
		const set = new Set<string>();
		for (let i = 0; i < x.length - 1; i++) set.add(x.slice(i, i + 2));
		return set;
	};
	const A = grams(a);
	const B = grams(b);
	if (!A.size || !B.size) return 0;
	let inter = 0;
	for (const g of A) if (B.has(g)) inter++;
	return inter / (A.size + B.size - inter);
}

// 명사구의 중심 낱말 (마지막 낱말)
const headOf = (phrase: string) => phrase.trim().split(/\s+/).pop() ?? '';
// 소재 겹침 비교용: "조각·상자" 같은 흔한 끝말이면 앞 낱말까지 붙여 비교
const GENERIC_HEADS = ['조각', '상자', '파일', '기록', '장치', '카드', '종이', '문서', '데이터', '파편', '기계'];
const materialKey = (phrase: string) => {
	const words = phrase.trim().split(/\s+/);
	const head = words[words.length - 1] ?? '';
	return GENERIC_HEADS.includes(head) && words.length >= 2 ? words.slice(-2).join(' ') : head;
};
// 조사를 떼고 2글자 이상 낱말만 (장면 핵심 낱말 비교용)
const JOSA = /(으로|에서|에게|까지|부터|처럼|하고|이랑|을|를|이|가|은|는|에|의|도|로|와|과|만)$/;
const contentWords = (text: string) =>
	text
		.replace(/[.,!?'"“”‘’…·]/g, ' ')
		.split(/\s+/)
		.map((w) => w.replace(JOSA, ''))
		.filter((w) => w.length >= 2);

type CheckCtx = {
	npcs: RewriteNpc[];
	bossName: string;
	bossMaterial: string;
	used: UsedMaterial[];
	bossSides: BossSide[];
	deceiveModes?: DeceiveMode[];
};

// 핵심 물건은 누구나 아는 일상 물건: 만질 수 없는 것·지어낸 느낌의 낱말이 있으면 오류
const ABSTRACT_OBJECT = ['빛', '잔상', '기운', '기억', '데이터', '신호', '그림자', '속삭임', '에너지', '파동', '영혼', '꿈', '코드', '정보', '조각', '파편', '결정체', '홀로그램'];

// 개성 검사: 핵심 물건이 일상 물건인지, 무대가 한 장소인지, 다른 아크와 겹치는지
function checkIndividuality(gen: Gen, ctx: CheckCtx): string[] {
	const errors: string[] = [];
	const keyObject = String(gen.key_object ?? '').trim();
	const stage = String(gen.stage ?? '').trim();
	const world = (gen.world ?? {}) as Gen;
	const outline = (gen.scenarioOutline ?? []) as Gen[];

	const abstract = ABSTRACT_OBJECT.filter((w) => keyObject.includes(w));
	if (abstract.length)
		errors.push(`핵심 물건 "${keyObject}" 에 만질 수 없거나 지어낸 느낌의 낱말(${abstract.join(', ')})이 있습니다. 누구나 아는 일상 물건(손에 들 수 있고 이름만 들어도 모양이 떠오르는 것)으로 정할 것`);
	if (keyObject && keyObject.split(/\s+/).length > 2)
		errors.push(`핵심 물건 "${keyObject}" 에 꾸밈말이 많습니다. 일상 물건 이름 그대로(한두 낱말) 쓸 것`);

	// 왜 그런 일이 생기는지 / 보스가 얻는 것
	const how = String(world.how ?? '').trim();
	if (!how) errors.push('world.how(왜 나쁜 결과가 생기는지, 핵심 물건이 어떻게 작동하는지 한 문장)가 없습니다.');
	else {
		if (keyObject && !how.includes(keyObject)) errors.push(`world.how 에 핵심 물건 "${keyObject}" 가 없습니다: "${how}"`);
		if (sentencesOf(how).length > 1) errors.push(`world.how 가 ${sentencesOf(how).length}문장입니다. 한 문장으로 쓸 것: "${how}"`);
	}
	const want = String(((gen.final_boss ?? {}) as Gen).want ?? '').trim();
	if (!want) errors.push('final_boss.want(보스가 이 일로 얻는 구체적인 이득 한 문장)가 없습니다.');
	else if (/광기|혼란|지배|파멸|절망/.test(want))
		errors.push(`final_boss.want 가 추상적입니다("광기·혼란·지배" 같은 말). 보스가 손에 넣는 구체적인 것으로 쓸 것: "${want}"`);

	if (!stage) errors.push('stage 가 없습니다.');
	else {
		if (stage.includes('도시') || stage.length > 15)
			errors.push(`stage "${stage}" 는 보스가 있는 한 장소(15자 이내)여야 하고 "도시"를 쓰지 않습니다. (예: "[건물·가게 이름]")`);
		if (!String(world.setting ?? '').includes(stage)) errors.push(`world.setting 에 stage "${stage}" 가 그대로 나오지 않습니다.`);
		const first = outline.find((o) => Number(o.order) === 1);
		if (first && !String(first.summary ?? '').includes(stage)) errors.push(`1화 summary 에 stage "${stage}" 가 그대로 나오지 않습니다.`);
	}
	if (String(world.rule ?? '').includes('도시'))
		errors.push(`world.rule 에 "도시"가 있습니다. 나쁜 결과는 무대(${stage || 'stage'})와 거기 있는 사람에게 일어나는 일로 쓸 것`);

	const keyMat = materialKey(keyObject);
	for (const u of ctx.used) {
		if (keyMat && u.key_object && materialKey(u.key_object) === keyMat)
			errors.push(`핵심 물건 "${keyObject}" 가 ${u.id} 의 "${u.key_object}" 와 겹칩니다. 다른 물건으로 정할 것`);
		if (stage && u.stage && materialKey(u.stage) === materialKey(stage))
			errors.push(`무대 "${stage}" 가 ${u.id} 의 "${u.stage}" 와 겹칩니다. 다른 장소로 정할 것`);
	}
	return errors;
}

function checkStructure(gen: Gen, ctx: CheckCtx): string[] {
	const { npcs, bossName } = ctx;
	const npcKeys = npcs.map((n) => n.key);
	const errors: string[] = [];
	const outline = Array.isArray(gen.scenarioOutline) ? (gen.scenarioOutline as Gen[]) : [];
	if (outline.length !== 5) errors.push(`scenarioOutline 이 ${outline.length}개입니다. 5개여야 합니다.`);
	const used = new Set<string>();
	for (const s of outline) {
		const npc = String(s.npc ?? '');
		if (!npcKeys.includes(npc)) errors.push(`order ${s.order} 의 npc "${npc}" 는 허용 목록(${npcKeys.join(', ')})에 없습니다.`);
		used.add(npc);
	}
	for (const k of npcKeys) if (!used.has(k)) errors.push(`NPC "${k}" 가 scenarioOutline 에 한 번도 나오지 않습니다.`);

	const roles = (gen.npc_roles ?? {}) as Record<string, unknown>;
	for (const k of npcKeys) if (!roles[k]) errors.push(`npc_roles 에 "${k}" 가 없습니다.`);
	for (const k of Object.keys(roles)) if (!npcKeys.includes(k)) errors.push(`npc_roles 에 허용되지 않은 키 "${k}" 가 있습니다.`);

	const spine = Array.isArray(gen.story_spine) ? (gen.story_spine as Gen[]) : [];
	const spineOrders = spine.map((l) => Number(l.order)).join(',');
	if (spineOrders !== '1,2,3,4,5') errors.push(`story_spine 은 order 1~5 를 차례대로 하나씩 가져야 합니다. (지금: ${spineOrders || '없음'})`);
	const wrong = String(gen.wrong_action ?? '').trim();
	const right = String(gen.right_action ?? '').trim();
	if (!wrong) errors.push('wrong_action 이 없습니다.');
	if (!right) errors.push('right_action 이 없습니다.');
	const keyForVerb = String(gen.key_object ?? '').trim();
	const verbOf = (action: string) => (keyForVerb ? action.split(keyForVerb).join(' ') : action);
	const similar = SIMILAR_VERBS.find(
		(g) => g.some((v) => verbOf(wrong).includes(v)) && g.some((v) => verbOf(right).includes(v))
	);
	if (wrong && right && similar)
		errors.push(`wrong_action "${wrong}" 과 right_action "${right}" 의 뜻이 비슷합니다(${similar.join('/')}). 서로 반대인 행동으로 쓸 것`);
	if (NOT_ACTION.test(right)) errors.push(`right_action "${right}" 이 안 하는 것입니다. 눈에 보이는 행동으로 쓸 것`);
	if (NOT_ACTION.test(wrong)) errors.push(`wrong_action "${wrong}" 이 안 하는 것입니다. 눈에 보이는 행동으로 쓸 것`);
	// 화별 행동: 1화=wrong_action, 5화=right_action 그대로. 2~4화는 겉모습이 다른 행동 (동사가 wrong·right·앞 화와 다름)
	const stem = (action: string) => verbStem(action, keyForVerb);
	const seenStems: { order: number; stem: string; act: string }[] = [];
	for (const l of spine) {
		const order = Number(l.order);
		const act = String(l.protagonist_action ?? '').trim();
		if (act && !/다[.]?$/.test(act)) errors.push(`story_spine ${order}화의 protagonist_action "${act}" 이 "~한다" 꼴이 아닙니다. "[대상]을 [동사]한다" 로 쓸 것`);
		if (order === 1 || order === 5) {
			const expected = order === 1 ? wrong : right;
			if (expected && act !== expected)
				errors.push(
					`story_spine ${order}화의 protagonist_action 은 ${order === 1 ? 'wrong_action' : 'right_action'} "${expected}" 와 같아야 합니다. (지금: "${act}")`
				);
		} else if (order >= 2 && order <= 4) {
			if (!act) {
				errors.push(`story_spine ${order}화의 protagonist_action 이 없습니다.`);
				continue;
			}
			if (NOT_ACTION.test(act)) errors.push(`story_spine ${order}화의 protagonist_action "${act}" 이 안 하는 것입니다. 눈에 보이는 행동으로 쓸 것`);
			if (keyForVerb && act.includes(headOf(keyForVerb)))
				errors.push(`story_spine ${order}화의 행동 "${act}" 에 핵심 물건 "${keyForVerb}" 가 있습니다. 2~4화 주인공은 앞 화에서 탈이 난 핵심 물건을 다시 손대지 않는다. 핵심 물건이 숨어 있는 다른 물건·장치를 다루는 행동으로 쓸 것 (연결은 hidden_link 에)`);
			const st = stem(act);
			if (st && st === stem(wrong))
				errors.push(`story_spine ${order}화의 행동 "${act}" 이 wrong_action "${wrong}" 과 동사가 같습니다. 주인공은 앞 화에서 나쁜 결과를 낳은 행동을 다시 하지 않는다. 겉모습이 다른 행동으로 쓸 것`);
			if (st && st === stem(right))
				errors.push(`story_spine ${order}화의 행동 "${act}" 이 right_action "${right}" 과 동사가 같습니다. 1~4화에는 정답과 비슷한 행동을 쓰지 않는다`);
			const sim = SIMILAR_VERBS.find((g) => g.some((v) => verbOf(act).includes(v)) && g.some((v) => verbOf(right).includes(v)));
			if (sim) errors.push(`story_spine ${order}화의 행동 "${act}" 이 right_action "${right}" 과 뜻이 비슷합니다(${sim.join('/')}). 정답이 위험해 보이게 된다`);
			const dup = seenStems.find((x) => x.stem && x.stem === st);
			if (dup) errors.push(`story_spine ${order}화의 행동 "${act}" 이 ${dup.order}화 행동과 동사가 같습니다. 화마다 다른 행동으로 쓸 것`);
			for (const x of seenStems) {
				const g = SIMILAR_VERBS.find((grp) => grp.some((v) => verbOf(act).includes(v)) && grp.some((v) => verbOf(x.act).includes(v)));
				if (g) errors.push(`story_spine ${order}화의 행동 "${act}" 이 ${x.order}화 행동 "${x.act}" 과 뜻이 비슷합니다(${g.join('/')}). 화마다 다른 행동으로 쓸 것`);
			}
			seenStems.push({ order, stem: st, act });
			if (!String(l.lesson ?? '').trim())
				errors.push(`story_spine ${order}화의 lesson(앞 화에서 배운 것, 이번 행동이 안전해 보이는 이유)이 없습니다.`);
		}
		if (order >= 1 && order <= 4) {
			const link = String(l.hidden_link ?? '').trim();
			if (!link) errors.push(`story_spine ${order}화의 hidden_link(이 행동이 사실은 왜 wrong_action 과 같은 일인지)가 없습니다.`);
			else if (order >= 2 && keyForVerb && !link.includes(headOf(keyForVerb)))
				errors.push(`story_spine ${order}화의 hidden_link 에 핵심 물건 "${keyForVerb}" 가 없습니다. 이 행동이 핵심 물건에 어떻게 이어지는지 쓸 것: "${link}"`);
		}
	}

	const keyObject = String(gen.key_object ?? '').trim();
	// 1~4화 일반 보스 직업 (화마다 다름)
	const bossTitleOf = (o: Gen) => String(o.random_boss_title ?? '').trim();
	if (!keyObject) errors.push('key_object 가 없습니다.');
	const rbTitles = outline.filter((o) => Number(o.order) <= 4).map(bossTitleOf);
	rbTitles.forEach((t, i) => {
		if (!t) errors.push(`${i + 1}화 random_boss_title(그 화 일반 보스 직업)이 없습니다.`);
		else if (t.length > 10) errors.push(`${i + 1}화 random_boss_title "${t}" 가 10자를 넘습니다.`);
	});
	for (const s of outline) {
		const summary = String(s.summary ?? '');
		if (keyObject && !summary.includes(keyObject))
			errors.push(`order ${s.order} summary 에 핵심 물건 "${keyObject}" 가 그대로 나오지 않습니다.`);
		const rb = bossTitleOf(s);
		if (rb && Number(s.order) <= 4 && !summary.includes(rb))
			errors.push(`order ${s.order} summary 에 그 화 일반 보스 "${rb}" 가 나오지 않습니다.`);
	}

	// 호칭·이름 검사: NPC·일반 보스 호칭이 서로 겹치지 않는지 (최종보스는 호칭 없이 이름으로만 부른다)
	const bossKo = String(gen.boss_name_korean ?? '').trim();
	if (!bossKo) errors.push('boss_name_korean 이 없습니다.');
	const bossTrace = String(gen.boss_trace ?? '').trim();
	if (!bossTrace) errors.push('boss_trace 가 없습니다.');
	else if (bossTrace.length > 15) errors.push(`boss_trace "${bossTrace}" 가 15자를 넘습니다.`);
	// 화별 흔적: 1~4화마다 다름 (1화는 boss_trace). 주인공이 같은 존재인 줄 모르게
	const traceAt = (o: Gen) => String(o.boss_trace ?? '').trim() || (Number(o.order) === 1 ? bossTrace : '');
	const traces = outline.filter((o) => Number(o.order) <= 4).map((o) => ({ order: Number(o.order), trace: traceAt(o) }));
	for (const t of traces) {
		if (!t.trace) errors.push(`${t.order}화 scenarioOutline 의 boss_trace(그 화에 보스가 드러나는 매체)가 없습니다.`);
		else if (t.trace.length > 15) errors.push(`${t.order}화 boss_trace "${t.trace}" 가 15자를 넘습니다.`);
	}
	const traceHeads = traces.map((t) => ({ ...t, head: headOf(t.trace) }));
	for (let i = 0; i < traceHeads.length; i++)
		for (let j = i + 1; j < traceHeads.length; j++)
			if (traceHeads[i].head && traceHeads[i].head === traceHeads[j].head)
				errors.push(`${traceHeads[i].order}화와 ${traceHeads[j].order}화의 boss_trace 가 같은 매체입니다("${traceHeads[i].trace}" / "${traceHeads[j].trace}"). 화마다 다른 종류의 매체로 (주인공이 같은 존재인 줄 모르게)`);
	if (bossKo && !nameInitialMatches(bossName, bossKo))
		errors.push(`boss_name_korean "${bossKo}" 가 영어 이름 "${bossName}" 의 소리와 맞지 않습니다. 영어 이름을 소리 그대로 옮길 것`);

	const rule = String(((gen.world ?? {}) as Gen).rule ?? '').trim();
	if (keyObject && !rule.includes(keyObject)) errors.push(`world.rule 에 핵심 물건 "${keyObject}" 가 없습니다. "[wrong_action]을 하면 [결과]가 일어난다" 한 문장으로 쓸 것`);
	if (sentencesOf(rule).length > 1) errors.push(`world.rule 이 ${sentencesOf(rule).length}문장입니다. 한 문장으로 쓸 것: "${rule}"`);
	if (/않으면|안 하면/.test(rule)) errors.push(`world.rule 에 "~하지 않으면" 경우가 있습니다. wrong_action 의 결과 하나만 쓸 것: "${rule}"`);
	const npcTitles = npcs.map((n) => ({
		...n,
		title: String(((roles[n.key] ?? {}) as Gen).title ?? '').trim()
	}));
	const turners = npcs.filter((n) => Number(((roles[n.key] ?? {}) as Gen).turn_order ?? 0) > 0);
	if (turners.length > 1)
		errors.push(`마음을 바꾸는 NPC 가 ${turners.length}명(${turners.map((n) => n.key).join(', ')})입니다. 아크당 1명까지. 나머지는 turn_order 0`);
	for (const n of turners) {
		const r = (roles[n.key] ?? {}) as Gen;
		const turn = Number(r.turn_order);
		const scene = String(r.turn_scene ?? '').trim();
		const at = outline.find((o) => Number(o.order) === turn);
		if (!at) {
			errors.push(`npc_roles.${n.key}.turn_order=${turn} 은 1~5 가 아닙니다.`);
			continue;
		}
		if (!scene) {
			errors.push(`npc_roles.${n.key} 가 ${turn}화에 마음을 바꾸는데 turn_scene 이 없습니다.`);
			continue;
		}
		// 그 화 summary 에 NPC 이름과 이유 장면의 핵심 낱말 2개 이상
		const summary = String(at.summary ?? '');
		const hits = contentWords(scene).filter((w) => summary.includes(w));
		if (!summary.includes(n.name_korean) || hits.length < 2)
			errors.push(`${n.key}(${n.name_korean}) 가 마음을 바꾸는 ${turn}화 summary 에 그 NPC 와 이유 장면 "${scene}" 이 보이지 않습니다. 그 화에 이 장면을 쓸 것`);
	}
	for (const n of npcTitles) {
		if (!n.title) {
			errors.push(`npc_roles.${n.key}.title 이 없습니다.`);
			continue;
		}
	}
	// NPC 호칭들 · 1~4화 일반 보스 직업 사이에 같은 단어가 있으면 오류
	const titled = [
		...outline
			.filter((o) => Number(o.order) <= 4)
			.map((o) => ({ who: `${o.order}화 일반 보스`, title: bossTitleOf(o) })),
		...npcTitles.map((n) => ({ who: `${n.key} 호칭`, title: n.title }))
	].filter((t) => t.title);
	for (let i = 0; i < titled.length; i++)
		for (let j = i + 1; j < titled.length; j++) {
			const shared = wordsOf(titled[i].title).filter((w) =>
				wordsOf(titled[j].title).some((x) => x === w || x.slice(0, 2) === w.slice(0, 2))
			);
			if (shared.length)
				errors.push(`${titled[i].who} "${titled[i].title}" 와 ${titled[j].who} "${titled[j].title}" 이 "${shared.join(', ')}" 로 겹칩니다. 겹치지 않게 바꿀 것`);
		}
	for (const s of outline) {
		const summary = String(s.summary ?? '');
		const order = Number(s.order);
		if (bossKo && order <= 4 && !summary.includes(bossKo))
			errors.push(`order ${order} summary 에 보스 "${bossKo}" 가 나오지 않습니다. 1~4화마다 boss_trace 로 나와야 합니다.`);
		if (order <= 4) {
			const trace = traceAt(s);
			if (trace && !summary.includes(trace))
				errors.push(`order ${order} summary 에 그 화 boss_trace "${trace}" 가 그대로 나오지 않습니다. 이 화의 보스는 이 매체로만 드러난다`);
			const rightStem = stem(right);
			for (const sent of sentencesOf(summary).filter((x) => bossKo && x.includes(bossKo)))
				if (rightStem && sent.includes(rightStem))
					errors.push(`order ${order} 에서 보스의 말에 정답 행동("${right}")의 동사가 있습니다. 보스는 그 화 행동만 권한다 (정답을 권하는 것처럼 읽힌다): "${sent}"`);
			for (const sent of sentencesOf(summary).filter((x) => bossKo && x.includes(bossKo))) {
				const face = FACE_WORDS.filter((w) => sent.includes(w));
				if (face.length)
					errors.push(`order ${order} 에서 보스의 얼굴·몸이 보입니다(${face.join(', ')}). 1~4화의 보스는 ${trace || 'boss_trace'} 로만 드러낼 것: "${sent}"`);
			}
		}
		for (const n of npcTitles) {
			if (n.title && bossKo)
				for (const w of wordsOf(n.title))
					if (summary.includes(`${w} ${bossKo}`))
						errors.push(`order ${order} summary 에서 보스 ${bossKo} 앞에 NPC 호칭의 "${w}" 가 붙어 있습니다. 최종보스는 호칭 없이 이름으로 부를 것`);
		}
		// 5화: 보스가 정답 행동을 막다가 무너진다
		if (order === 5 && bossKo) {
			const bossSents = sentencesOf(summary).filter((x) => x.includes(bossKo));
			if (!bossSents.length) errors.push(`order 5 summary 에 보스 "${bossKo}" 가 나오지 않습니다.`);
			else {
				if (!bossSents.some((x) => RESIST_WORDS.some((w) => x.includes(w))))
					errors.push(`order 5 에서 보스 ${bossKo} 가 right_action 을 막는 장면(막아선다·빼앗는다·공격한다)이 없습니다.`);
				if (!FALL_WORDS.some((w) => summary.includes(w)))
					errors.push(`order 5 에서 보스가 무너지는 장면(무너진다·쓰러진다·부서진다 등)이 없습니다.`);
				for (const x of bossSents) {
					const ok = APPROVE_WORDS.filter((w) => x.includes(w));
					if (ok.length) errors.push(`order 5 에서 보스가 정답 행동을 반기거나 돕습니다(${ok.join(', ')}). 끝까지 막다가 져야 한다: "${x}"`);
				}
			}
		}

		// 일반 보스 문장: 막는 행동만, 보스 이름·목적·사연·설득 금지
		const rbTitle = bossTitleOf(s);
		if (rbTitle && order <= 4) {
			const bossSents = sentencesOf(summary).filter((x) => x.includes(rbTitle));
			if (bossSents.length && !bossSents.some((x) => BLOCK_VERBS.some((v) => x.includes(v))))
				errors.push(`order ${order} 의 일반 보스 문장에 막는 행동(막아선다·가로막는다·덤빈다·저지한다·공격한다)이 없습니다: "${bossSents[0]}"`);
			// 일반 보스의 편 (코드가 고정): warn 은 핵심 물건으로 하는 틀린 행동을 막고, ally 는 막지 않는다
			// 직업 이름 속 낱말(예: "스크린 해체공"의 스크린)은 빼고 본다
			const side = ctx.bossSides[order - 1] ?? 'ally';
			const keyHeadWord = headOf(keyObject);
			const mentionsKey = (x: string) => !!keyHeadWord && x.replaceAll(rbTitle, '').includes(keyHeadWord);
			// 그 화 행동 (2~4화는 겉모습이 다른 행동이라 핵심 물건 대신 그 행동 동사로 막아도 된다)
			const actHere = String(spine.find((l) => Number(l.order) === order)?.protagonist_action ?? '').trim() || wrong;
			const actStem = stem(actHere);
			const mentionsAct = (x: string) => mentionsKey(x) || (!!actStem && x.replaceAll(rbTitle, '').includes(actStem));
			if (side === 'warn' && bossSents.length && keyHeadWord && !bossSents.some(mentionsAct))
				errors.push(`order ${order} 의 일반 보스(경고하는 쪽) 문장에 핵심 물건 "${keyObject}" 이나 그 화 행동이 없습니다. 이 화 일반 보스는 주인공이 "${actHere}" 하려는 것을 경고하며 막아선다: "${bossSents[0]}"`);
			if (side === 'ally')
				for (const sent of bossSents)
					if (mentionsKey(sent) && BLOCK_VERBS.some((v) => sent.includes(v)))
						errors.push(`order ${order} 의 일반 보스(최종보스 편)가 핵심 물건에 대한 주인공의 행동을 막습니다. 이 화 일반 보스는 주인공의 의심·이탈·전진을 막는다: "${sent}"`);
			for (const sent of bossSents) {
				const persuade = PERSUADE_WORDS.filter((w) => sent.includes(w));
				if (persuade.length)
					errors.push(`order ${order} 의 일반 보스 문장에 설득·권유(${persuade.join(', ')})가 있습니다. 일반 보스는 막기만 한다: "${sent}"`);
				if (right && sent.includes(right)) errors.push(`order ${order} 에서 일반 보스가 정답 행동을 합니다: "${sent}"`);
				if (bossKo && sent.includes(bossKo))
					errors.push(`order ${order} 의 일반 보스 문장에 최종보스 "${bossKo}" 가 함께 있습니다. 문장을 나눌 것: "${sent}"`);
				const story = BOSS_STORY_WORDS.filter((w) => sent.includes(w));
				if (story.length)
					errors.push(`order ${order} 의 일반 보스 문장에 목적·사연 표현(${story.join(', ')})이 있습니다. 그 화의 행동만 쓸 것: "${sent}"`);
			}
		}
	}

	// npc_acts 화: 주 NPC 가 먼저 행동하므로 그 화 summary 에 그 NPC 이름이 나와야 한다
	ctx.deceiveModes?.forEach((mode, i) => {
		if (mode !== 'npc_acts') return;
		const o = outline.find((x) => Number(x.order) === i + 1);
		const npc = npcs.find((n) => n.key === String(o?.npc ?? ''));
		if (o && npc && !String(o.summary ?? '').includes(npc.name_korean))
			errors.push(`${i + 1}화는 "동료가 먼저 함"(npc_acts) 화입니다. summary 에 주 NPC ${npc.name_korean} 이(가) 흔적을 보고 먼저 그 화 행동을 시작하는 장면을 쓸 것`);
	});

	// 화마다 다른 장소 / 2~4화 요약이 서로 너무 비슷하지 않은지
	const places = outline.map((o) => String(o.place ?? '').trim());
	places.forEach((p, i) => {
		if (!p) errors.push(`${i + 1}화 place(이 화의 장소)가 없습니다.`);
		else if (p.length > 15) errors.push(`${i + 1}화 place "${p}" 가 15자를 넘습니다.`);
		else if (!String(outline[i].summary ?? '').includes(p)) errors.push(`${i + 1}화 summary 에 place "${p}" 가 나오지 않습니다.`);
	});
	const dupPlace = places.filter((p, i) => p && places.indexOf(p) !== i);
	if (dupPlace.length) errors.push(`place 가 겹칩니다: ${[...new Set(dupPlace)].join(', ')}. 다섯 화 모두 다른 장소로`);
	const spineLines = spine.filter((l) => [2, 3, 4].includes(Number(l.order)));
	for (let i = 0; i < spineLines.length; i++)
		for (let j = i + 1; j < spineLines.length; j++) {
			const sim = similarity(String(spineLines[i].line ?? ''), String(spineLines[j].line ?? ''));
			if (sim >= 0.5)
				errors.push(`story_spine ${spineLines[i].order}화와 ${spineLines[j].order}화가 거의 같습니다(유사도 ${sim.toFixed(2)}). 장소·이유·대가를 화마다 다르게 쓸 것`);
		}

	const fs = Array.isArray(gen.global_foreshadowing) ? (gen.global_foreshadowing as Gen[]) : [];
	if (fs.length !== 4) errors.push(`global_foreshadowing 이 ${fs.length}개입니다. 4개여야 합니다.`);
	const plants = new Set<string>();
	const reveals = new Set<string>();
	for (const f of fs) {
		for (const field of ['plant_room', 'reveal_room'] as const) {
			if (!ROOMS.includes(Number(f[field]))) errors.push(`${f.id} 의 ${field}=${f[field]} 는 방 번호(1, 3, 5, 9, 15)가 아닙니다.`);
		}
		const p = `${f.plant_act}/${f.plant_room}`;
		const r = `${f.reveal_act}/${f.reveal_room}`;
		if (plants.has(p)) errors.push(`(plant_act, plant_room) = ${p} 가 겹칩니다.`);
		if (reveals.has(r)) errors.push(`(reveal_act, reveal_room) = ${r} 가 겹칩니다.`);
		plants.add(p);
		reveals.add(r);
	}
	errors.push(...checkWriting(gen, bossName));
	errors.push(...checkIndividuality(gen, ctx));
	return errors;
}

// 서사 문장 검사: 흐린 말, 마크다운·메모, 영어 보스 이름, 소문형 복선
function checkWriting(gen: Gen, bossName: string): string[] {
	const errors: string[] = [];
	const texts: [string, string][] = [];
	for (const l of (gen.story_spine ?? []) as Gen[]) texts.push([`story_spine ${l.order}화`, String(l.line ?? '')]);
	for (const s of (gen.scenarioOutline ?? []) as Gen[]) texts.push([`order ${s.order} summary`, String(s.summary ?? '')]);
	for (const [k, v] of Object.entries((gen.act_summary ?? {}) as Gen)) texts.push([`act_summary.${k}`, String(v ?? '')]);
	for (const [k, v] of Object.entries((gen.world ?? {}) as Gen)) texts.push([`world.${k}`, String(v ?? '')]);
	texts.push(['protagonist_goal', String(gen.protagonist_goal ?? '')]);
	texts.push(['final_boss.twist', String(((gen.final_boss ?? {}) as Gen).twist ?? '')]);
	for (const f of (gen.global_foreshadowing ?? []) as Gen[]) {
		texts.push([`${f.id} hint`, String(f.hint ?? '')]);
		texts.push([`${f.id} reveal_context`, String(f.reveal_context ?? '')]);
	}

	for (const [where, text] of texts) {
		if (/(order \d summary|story_spine)/.test(where) && /보스/.test(text))
			errors.push(`${where} 에 "보스"라는 게임 용어가 있습니다. 일반 보스는 그 화 직업으로, 최종보스는 이름으로 부를 것`);
		// "암시장" 같은 낱말 속 글자는 빼고 본다
		const vague = VAGUE_WORDS.filter((w) => (w === '암시' ? /암시(?!장)/.test(text) : text.includes(w)));
		if (vague.length) errors.push(`${where} 에 흐린 말: ${vague.join(', ')} → 눈에 보이는 일로 바꿀 것`);
		if (text.includes('**')) errors.push(`${where} 에 마크다운(**)이 있습니다. 평문으로 쓸 것`);
		if (/[(（]\s*복선|복선\s*[:：]/.test(text)) errors.push(`${where} 에 "(복선: …)" 같은 메모가 있습니다. 장면으로 녹여 쓸 것`);
		if (bossName && text.includes(bossName)) errors.push(`${where} 에 보스 영어 이름 "${bossName}" 이 있습니다. 한국어로 쓸 것`);
	}
	for (const f of (gen.global_foreshadowing ?? []) as Gen[]) {
		const hit = RUMOR_WORDS.filter((w) => String(f.hint ?? '').includes(w));
		if (hit.length) errors.push(`${f.id} hint 가 소문형(${hit.join(', ')})입니다. 주인공이 직접 보거나 겪는 일로 쓸 것`);
	}
	return errors;
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const body = await request.json();
	const ids: string[] = Array.isArray(body.ids) ? body.ids.map(String) : [];
	if (!ids.length) return json({ error: 'ids 가 필요합니다.' }, { status: 400 });
	const outDir: string = body.outDir ?? DEFAULT_OUT_DIR;
	const temperature: number = body.temperature !== undefined ? Number(body.temperature) : 0.8;
	const concurrency = Math.max(1, Math.min(10, Number(body.concurrency) || 3));
	const judge: boolean = body.judge !== false; // 기본: 재작업 뒤 채점까지
	const judgeOnly: boolean = Boolean(body.judgeOnly); // 재작업 없이 기존 재작업본만 채점

	const missing = ids.filter((id) => !getStoryarc(id));
	if (missing.length) return json({ error: `storyarc 를 찾을 수 없습니다: ${missing.join(', ')}` }, { status: 400 });

	await mkdir(join(process.cwd(), outDir), { recursive: true });

	const genres = assignGenres(ids); // 묶음 안에서 장르가 겹치지 않게

	// 이미 쓴 소재: outDir 의 다른 재작업본 (이번에 다시 쓰는 id 는 빼고, 끝나는 대로 추가)
	const used: UsedMaterial[] = [];
	if (!judgeOnly) {
		const themes = new Set(ids.map((id) => getStoryarc(id)!.theme));
		for (const f of await readdir(join(process.cwd(), outDir))) {
			if (!/^storyarc_.+\.ts$/.test(f)) continue;
			try {
				const text = await readFile(join(process.cwd(), outDir, f), 'utf-8');
				const a = JSON.parse(text.slice(text.indexOf('= {') + 2, text.lastIndexOf('}') + 1)) as StoryArc;
				if (ids.includes(a.id) || !themes.has(a.theme) || !a.key_object) continue;
				used.push({ id: a.id, key_object: a.key_object, stage: a.stage, rule: a.world?.rule });
			} catch {
				/* 읽을 수 없는 파일은 건너뜀 */
			}
		}
	}

	async function gemini(
		message: string,
		tools: unknown = storyarcRewriteTool,
		fnName = 'generate_storyarc',
		temp = temperature
	): Promise<Gen> {
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message,
				tools,
				tool_choice: { type: 'function', function: { name: fnName } },
				temperature: temp
			})
		});
		const data = await res.json().catch(() => null);
		if (!res.ok || !data?.tool_result) throw new Error(data?.error ?? `gemini ${res.status}`);
		return data.tool_result as Gen;
	}

	async function rewrite(id: string): Promise<Result> {
		const source = getStoryarc(id)!;
		const pool = npc_by_theme[source.theme as keyof typeof npc_by_theme] ?? [];
		const npcKeys = [
			...new Set([...Object.keys(source.npc_roles ?? {}), ...source.scenarioOutline.map((s) => s.npc)])
		];
		const npcs: RewriteNpc[] = npcKeys.map((key) => {
			const n = pool.find((p) => p.key === key);
			return {
				key,
				name_korean: n?.name.korean ?? key,
				name_english: n?.name.english ?? key,
				persona: getNpcPersona(key)
			};
		});

		const genre = genres[id];
		const bossSides = bossSidesForId(id);
		const deceiveModes = deceiveModesForId(id);
		const bossMaterial = [
			source.final_boss.appearance_npc ?? source.final_boss.appearance ?? '',
			source.final_boss.appearance_boss ?? '',
			source.final_boss.surface_identity
		].join('\n');
		const ctxNow = (): CheckCtx => ({
			npcs,
			bossName: source.final_boss.name,
			bossMaterial,
			used: used.filter((u) => u.id !== id),
			bossSides,
			deceiveModes
		});
		const promptNow = () => buildStoryarcRewritePrompt(source, npcs, { genre, used: ctxNow().used, bossSides, deceiveModes });

		const prompt = promptNow();
		let gen = await gemini(prompt);
		let errors = checkStructure(gen, ctxNow());
		// 오류와 이전 출력을 붙여 다시 요청 (최대 3번)
		for (let retry = 0; retry < 3 && errors.length; retry++) {
			gen = await gemini(
				`${promptNow()}\n\n---\n\n## 이전 출력의 오류 — 고쳐서 다시 출력할 것\n${errors.map((e) => `- ${e}`).join('\n')}\n\n## 이전 출력\n\`\`\`json\n${JSON.stringify(gen, null, 2)}\n\`\`\``
			);
			errors = checkStructure(gen, ctxNow());
		}

		// 필수 필드가 빠진 결과는 저장하지 않는다
		const missing: string[] = (['story_spine', 'stage', 'key_object', 'wrong_action', 'right_action', 'boss_name_korean', 'boss_trace'] as const)
			.filter((k) => !gen[k] || (typeof gen[k] === 'string' && !String(gen[k]).trim()));
		if (((gen.scenarioOutline ?? []) as Gen[]).length !== 5) missing.push('scenarioOutline(5개)');
		if (missing.length) return { id, errors, error: `필수 필드가 빠져 저장하지 않음: ${missing.join(', ')}` };

		// 고정값 주입
		const fb = (gen.final_boss ?? {}) as Gen;
		const src = source.final_boss;
		const bossByOrder = new Map(source.scenarioOutline.map((s) => [s.order, s.boss]));
		const outline = ((gen.scenarioOutline ?? []) as Gen[]).map((s, i) => {
			const order = i + 1;
			const item: Gen = { ...s, order, act: ACT_BY_ORDER[order], boss: bossByOrder.get(order) ?? 'random_boss' };
			if (order === 5 || !String(item.random_boss_title ?? '').trim()) delete item.random_boss_title;
			if (order <= 4) {
				item.random_boss_side = bossSides[order - 1];
				item.deceive_mode = deceiveModes[order - 1];
			} else {
				delete item.random_boss_side;
				delete item.deceive_mode;
			}
			// 1화 흔적 = boss_trace. 5화에는 흔적 없음
			if (order === 1 && !String(item.boss_trace ?? '').trim()) item.boss_trace = gen.boss_trace;
			if (order === 5 || !String(item.boss_trace ?? '').trim()) delete item.boss_trace;
			return item;
		});
		const at = (gen.act_tone ?? {}) as Record<string, Gen>;
		if (at.intro) at.intro.tension = 1;
		if (at.rising) at.rising.tension = 3;
		if (at.climax_finale) at.climax_finale.tension = 5;
		const roles = Object.fromEntries(
			Object.entries((gen.npc_roles ?? {}) as Record<string, unknown>).filter(([k]) => npcKeys.includes(k))
		);

		const arc = {
			id: source.id,
			...(source.level !== undefined ? { level: source.level } : {}),
			chapter_name: clampChapterName(gen.chapter_name),
			theme: source.theme,
			rising_count: 3,
			world: gen.world,
			protagonist_goal: gen.protagonist_goal,
			genre,
			stage: gen.stage,
			story_spine: gen.story_spine,
			key_object: gen.key_object,
			wrong_action: gen.wrong_action,
			right_action: gen.right_action,
			boss_name_korean: gen.boss_name_korean,
			boss_trace: gen.boss_trace,
			act_tone: at,
			final_boss: {
				id: src.id,
				name: src.name,
				appearance_npc: src.appearance_npc ?? src.appearance,
				appearance_boss: src.appearance_boss ?? src.appearance,
				surface_identity: fb.surface_identity,
				true_identity: fb.true_identity,
				motivation: fb.motivation,
				want: fb.want,
				twist: fb.twist,
				...(src.zodiac_sign ? { zodiac_sign: src.zodiac_sign } : {})
			},
			global_foreshadowing: gen.global_foreshadowing,
			npc_roles: roles,
			scenarioOutline: outline,
			act_summary: gen.act_summary
		} as unknown as StoryArc;

		const file = join(outDir, `storyarc_${id}.ts`);
		const content = `import type { StoryArc } from '$lib/types';\n\n// ${id} 재작업본 (원본: src/lib/data/storyarc 아래 같은 id). 원본과 비교용 — index.ts 에 등록하지 않음.\nexport const storyarc_${id}: StoryArc = ${JSON.stringify(arc, null, '\t')};\n`;
		await writeFile(join(process.cwd(), file), content, 'utf-8');
		used.push({ id, key_object: arc.key_object, stage: arc.stage, rule: arc.world.rule });
		if (!judge) return { id, file, errors };
		return { id, file, errors, ...(await judgeArc(id, arc)) };
	}

	// 채점: 코드로 못 잡는 항목을 Gemini 로 (temperature 0). 실패하면 1번 더. 인용이 원문에 있는지 코드로 대조
	async function judgeArc(id: string, arc: StoryArc): Promise<Pick<Result, 'judge' | 'judgeError'>> {
		let lastError = '';
		for (let attempt = 0; attempt < 2; attempt++) {
			try {
				const out = await gemini(buildStoryarcJudgePrompt(arc), storyarcJudgeTool, 'judge_storyarc', 0);
				const raw = JSON.stringify(arc);
				const byId = new Map(((out.results ?? []) as Gen[]).map((r) => [String(r.id), r]));
				const items: JudgeItem[] = JUDGE_ITEMS.map((it) => {
					const r = byId.get(it.id);
					const quote = String(r?.quote ?? '').trim();
					const pass = r ? Boolean(r.pass) : false;
					return {
						id: it.id,
						name: it.name,
						pass,
						quote,
						reason: r ? String(r.reason ?? '') : '채점 결과 없음',
						...(!pass && quote ? { quote_found: raw.includes(JSON.stringify(quote).slice(1, -1)) } : {})
					};
				});
				await writeFile(
					join(process.cwd(), outDir, `storyarc_${id}.judge.json`),
					JSON.stringify({ id, items }, null, 2),
					'utf-8'
				);
				return { judge: items };
			} catch (e) {
				lastError = e instanceof Error ? e.message : String(e);
			}
		}
		return { judgeError: lastError };
	}

	// 채점만 다시: outDir 에 있는 재작업본을 읽어 채점
	async function judgeOnlyFor(id: string): Promise<Result> {
		const file = join(outDir, `storyarc_${id}.ts`);
		const text = await readFile(join(process.cwd(), file), 'utf-8');
		const arc = JSON.parse(text.slice(text.indexOf('= {') + 2, text.lastIndexOf('}') + 1)) as StoryArc;
		return { id, file, ...(await judgeArc(id, arc)) };
	}

	const results: Result[] = [];
	let cursor = 0;
	async function worker(): Promise<void> {
		while (cursor < ids.length) {
			const id = ids[cursor++];
			try {
				results.push(await (judgeOnly ? judgeOnlyFor(id) : rewrite(id)));
			} catch (e) {
				results.push({ id, error: e instanceof Error ? e.message : String(e) });
			}
		}
	}
	await Promise.all(Array.from({ length: concurrency }, () => worker()));

	return json({ outDir, results });
};
