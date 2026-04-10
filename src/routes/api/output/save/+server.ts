import { json } from '@sveltejs/kit';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { chapterOrder, chapterName, storyarcId, scenarios } = await request.json();

	if (typeof chapterOrder !== 'number' || chapterOrder < 1) {
		return json({ error: 'chapter_order는 1 이상의 숫자여야 합니다.' }, { status: 400 });
	}

	const outputDir = join(process.cwd(), 'output_list');
	await mkdir(outputDir, { recursive: true });

	const output = {
		chapter_order: chapterOrder,
		chapter_name: chapterName,
		scenarios
	};

	const filename = `${storyarcId}_chapter_${String(chapterOrder).padStart(2, '0')}.json`;
	const filepath = join(outputDir, filename);

	await writeFile(filepath, JSON.stringify(output, null, '\t'), 'utf-8');

	return json({ ok: true, filename });
};
