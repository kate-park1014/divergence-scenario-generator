/**
 * .ts 시나리오 파일의 내용을 파싱해 객체로 반환.
 *
 * - 1차: JSON.parse (API로 생성된 파일 — JSON.stringify 포맷)
 * - 2차: new Function 평가 (수동 편집된 파일 — JS 객체 리터럴 포맷)
 */
export function parseScenarioFile(raw: string): Record<string, unknown> {
	// export const varName = { ... } as const; 에서 객체 부분만 추출
	const jsonStr = raw
		.replace(/^export const \w+ = /, '')
		.replace(/ as const;\n?$/, '')
		.trim();

	// 1차: 유효한 JSON이면 그대로 파싱
	try {
		return JSON.parse(jsonStr) as Record<string, unknown>;
	} catch {
		// 2차: JS 객체 리터럴 (단따옴표, 키 미따옴표 등) — Function으로 평가
		// 내부 서버 전용 파일이므로 eval 계열 사용 허용
		const varMatch = raw.match(/^export const (\w+) = /);
		if (!varMatch) throw new Error('Cannot extract variable name from file');
		const varName = varMatch[1];
		// eslint-disable-next-line no-new-func
		const fn = new Function(`const ${varName} = ${jsonStr}; return JSON.parse(JSON.stringify(${varName}));`);
		return fn() as Record<string, unknown>;
	}
}
