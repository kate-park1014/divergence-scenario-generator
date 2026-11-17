import { json } from '@sveltejs/kit';
import { readFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

/**
 * GET ?file=desert_chapter_41.json → output_list/<file> 의 JSON.
 * 없으면 404 { missing: true } (아직 시나리오 생성 전).
 */
export const GET: RequestHandler = async ({ url }) => {
	const file = url.searchParams.get('file') ?? '';
	if (!/^[\w.-]+\.json$/.test(file)) {
		return json({ error: `잘못된 파일명: ${file}` }, { status: 400 });
	}
	let raw: string;
	try {
		raw = await readFile(join(process.cwd(), 'output_list', file), 'utf-8');
	} catch {
		return json({ missing: true }, { status: 404 });
	}
	try {
		return json(JSON.parse(raw));
	} catch (e) {
		return json({ error: `JSON 파싱 실패: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 });
	}
};
