import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import { translateScenario } from '$lib/server/translateScenario';
import type { RequestHandler } from './$types';

// 번역 로직(추출·청킹·머지)은 $lib/server/translateScenario 에 있다.

// ─── POST 핸들러 ──────────────────────────────────────────────────────────────

export const POST: RequestHandler = async ({ request }) => {
	const { filename } = await request.json();

	// 경로 트래버설 방지
	if (!/^[\w-]+\.ts$/.test(filename)) {
		return json({ error: 'Invalid filename' }, { status: 400 });
	}

	const filepath = join(process.cwd(), 'src/lib/data/generated', filename);
	const varName = filename.replace('.ts', '');

	// 파일 읽기 & 파싱
	let raw: string;
	try {
		raw = await readFile(filepath, 'utf-8');
	} catch {
		return json({ error: 'File not found' }, { status: 404 });
	}

	let data: Record<string, unknown>;
	try {
		data = parseScenarioFile(raw);
	} catch {
		return json({ error: 'Failed to parse file' }, { status: 500 });
	}

	// 한국어 텍스트 추출 → 10개씩 청킹 번역 → 머지
	let result: Awaited<ReturnType<typeof translateScenario>>;
	try {
		result = await translateScenario(data, filename);
	} catch (err) {
		return json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
	}

	const fileContent = `export const ${varName} = ${JSON.stringify(result.translated, null, '\t')} as const;\n`;
	await writeFile(filepath, fileContent, 'utf-8');

	return json({ ok: true, totalTexts: result.totalTexts, chunks: result.chunks });
};
