import { json } from '@sveltejs/kit';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

const VALID_SCENARIO_TYPES = new Set(['trade_off', 'probability_upgrade', 'random_hidden']);

export const POST: RequestHandler = async ({ request }) => {
	const { theme, scenario_type, events } = await request.json();

	if (!theme || !Array.isArray(events) || events.length === 0) {
		return json({ error: '유효하지 않은 데이터입니다.' }, { status: 400 });
	}

	if (!VALID_SCENARIO_TYPES.has(scenario_type)) {
		return json({ error: '유효하지 않은 scenario_type입니다.' }, { status: 400 });
	}

	const outputDir = join(process.cwd(), 'randomEvent_list');
	await mkdir(outputDir, { recursive: true });

	const now = new Date();
	const timestamp =
		`${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}` +
		`_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;

	const filename = `${theme}_${scenario_type}_${timestamp}.json`;
	const filepath = join(outputDir, filename);

	const output = { theme, scenario_type, generated_at: now.toISOString(), events };
	await writeFile(filepath, JSON.stringify(output, null, '\t'), 'utf-8');

	return json({ ok: true, filename });
};
