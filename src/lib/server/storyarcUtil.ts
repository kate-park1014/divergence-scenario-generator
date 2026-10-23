// chapter_name 각 언어 12자 이내 강제(결정론적). 부제 제거 → 첫 문장 → 단어경계로 ≤12 절단.
const TITLE_CHAR_LIMIT = 12;
export function clampTitle(t: string): string {
	let s = (t ?? '').trim();
	for (const sep of ['：', ':', '—', '–']) {
		const i = s.indexOf(sep);
		if (i > 0) s = s.slice(0, i).trim();
	}
	const sentences = s
		.split(/[.。!?]/)
		.map((p) => p.trim())
		.filter(Boolean);
	if (sentences.length) s = sentences[0];
	if (s.length > TITLE_CHAR_LIMIT) {
		const cut = s.slice(0, TITLE_CHAR_LIMIT);
		if (s.length === TITLE_CHAR_LIMIT || s[TITLE_CHAR_LIMIT] === ' ') s = cut.trim();
		else if (cut.includes(' ')) s = cut.slice(0, cut.lastIndexOf(' ')).trim();
		else s = cut.trim();
	}
	return s;
}
export function clampChapterName(cn: unknown): Record<string, string> {
	const out: Record<string, string> = {};
	for (const [k, v] of Object.entries((cn ?? {}) as Record<string, string>)) out[k] = clampTitle(String(v));
	return out;
}
