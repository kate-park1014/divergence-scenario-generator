// 대본 줄 단위 고치기: 한 화를 줄 주소와 함께 펼치고(listChapter), 그 주소로 고친 줄을 적용한다(applyEdits).
// 넷쇼트·cozy·romance·gangster 대본 다듬기가 쓴다. (예전 재작업 검토자 scenarioReview.ts 에서 떼어 냄 — 그 파일은 _legacy/)

export type ScenarioEdit = {
	room: number; // prologue·epilogue 는 0
	block: 'dialogue' | 'win_dialogue' | 'lose_dialogue' | 'prologue' | 'epilogue';
	index: number;
	op: 'replace' | 'delete' | 'insert_after';
	speaker?: string;
	text?: string;
	emotion?: 'base' | 'happy' | 'sad' | 'angry';
};

type Entry = { type?: string; speaker?: string; action?: string; emotion?: string; content?: { korean?: string } };
type Gen = Record<string, unknown>;

const BLOCKS = ['dialogue', 'win_dialogue', 'lose_dialogue'] as const;

/** 한 화를 줄 주소와 함께 펼친다. 주소: [방 N block #i] — 수정자가 이 주소로 고친다 */
export function listChapter(order: number, out: Gen, names: Record<string, string>, title = '', rbTitle = ''): string {
	// 화자 표시에 "보스" 같은 낱말을 넣지 않는다 (검토자가 대사 속 게임 용어로 착각함)
	const label: Record<string, string> = { ...names, random_boss: rbTitle || '그 화 상대', boss: names.boss?.replace(/^최종보스\((.*)\)$/, '$1') ?? '' };
	const who = (sp: string) => (label[sp] ? `${sp}(${label[sp]})` : sp);
	const lines: string[] = [`## ${order}화${title ? ` — ${title}` : ''}`];
	const pro = ((out.prologue as Gen | undefined)?.korean ?? []) as string[];
	pro.forEach((l, i) => lines.push(`[방 0 prologue #${i}] ${l}`));
	for (const room of (out.rooms ?? []) as Gen[])
		for (const block of BLOCKS) {
			const es = (room[block] ?? []) as Entry[];
			es.forEach((e, i) => {
				const at = `[방 ${room.id} ${block} #${i}]`;
				if (e.type === 'direction') lines.push(`${at} (${e.action}: ${who(String(e.speaker ?? ''))})`);
				else lines.push(`${at} ${who(String(e.speaker ?? ''))}: ${e.content?.korean ?? ''}`);
			});
		}
	const epi = ((out.epilogue as Gen | undefined)?.korean ?? []) as string[];
	epi.forEach((l, i) => lines.push(`[방 0 epilogue #${i}] ${l}`));
	return lines.join('\n');
}

/** 줄 단위 고치기를 적용한 새 화를 돌려준다 (원본은 그대로). 적용 못 한 고치기는 skipped 에 이유와 함께 */
export function applyEdits(out: Gen, edits: ScenarioEdit[], speakers: string[]): { out: Gen; skipped: string[] } {
	const next = JSON.parse(JSON.stringify(out)) as Gen;
	const skipped: string[] = [];
	const target = (e: ScenarioEdit): unknown[] | null => {
		if (e.block === 'prologue' || e.block === 'epilogue') {
			const t = (next[e.block] ??= { korean: [] }) as Gen;
			return (t.korean ??= []) as unknown[];
		}
		const room = ((next.rooms ?? []) as Gen[]).find((r) => Number(r.id) === Number(e.room));
		if (!room) return null;
		return (room[e.block] ??= []) as unknown[];
	};
	// 같은 칸 안에서는 뒤 줄부터 고쳐야 앞 줄 주소가 안 밀린다
	const sorted = [...edits].sort((a, b) => b.index - a.index);
	for (const e of sorted) {
		const arr = target(e);
		const tag = `[방 ${e.room} ${e.block} #${e.index} ${e.op}]`;
		if (!arr) {
			skipped.push(`${tag} 방이 없음`);
			continue;
		}
		const isText = e.block === 'prologue' || e.block === 'epilogue';
		if (e.op !== 'insert_after' && (e.index < 0 || e.index >= arr.length)) {
			skipped.push(`${tag} 줄이 없음`);
			continue;
		}
		if (e.op !== 'delete' && !String(e.text ?? '').trim()) {
			skipped.push(`${tag} text 없음`);
			continue;
		}
		if (!isText && e.op !== 'insert_after' && (arr[e.index] as Entry).type === 'direction') {
			skipped.push(`${tag} 연출 줄은 고치지 않음`);
			continue;
		}
		// replace 에서 speaker 를 안 쓰면 원래 화자 그대로
		const speaker = String(e.speaker || (e.op === 'replace' ? ((arr[e.index] as Entry).speaker ?? '') : ''));
		if (!isText && e.op !== 'delete' && !speakers.includes(speaker)) {
			skipped.push(`${tag} 쓸 수 없는 speaker "${speaker}"`);
			continue;
		}
		const prev = !isText && e.op === 'replace' ? (arr[e.index] as Entry) : undefined;
		const line = isText
			? String(e.text)
			: { type: 'speech', speaker, emotion: e.emotion ?? prev?.emotion ?? 'base', content: { korean: String(e.text) } };
		if (e.op === 'replace') arr[e.index] = line;
		else if (e.op === 'delete') arr.splice(e.index, 1);
		else arr.splice(Math.max(0, e.index + 1), 0, line);
	}
	return { out: next, skipped };
}
