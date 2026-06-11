import { json } from '@sveltejs/kit';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { theme, bosses } = await request.json();

	if (!theme || !Array.isArray(bosses) || bosses.length === 0) {
		return json({ error: '유효하지 않은 데이터입니다.' }, { status: 400 });
	}

	const outputDir = join(process.cwd(), 'boss_list');
	await mkdir(outputDir, { recursive: true });

	const now = new Date();
	const timestamp =
		`${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}` +
		`_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;

	const filename = `${theme}_${timestamp}.json`;
	const filepath = join(outputDir, filename);

	const output = { theme, generated_at: now.toISOString(), bosses };
	await writeFile(filepath, JSON.stringify(output, null, '\t'), 'utf-8');

	return json({ ok: true, filename, count: bosses.length });
};
