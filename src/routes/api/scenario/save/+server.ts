import { json } from '@sveltejs/kit';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { order, data, storyarcId } = await request.json();

	const dir = join(process.cwd(), 'src/lib/data/generated');
	await mkdir(dir, { recursive: true });

	const varName = `scenario_${storyarcId}_${String(order).padStart(2, '0')}`;
	const filename = `${varName}.ts`;
	const content = `export const ${varName} = ${JSON.stringify(data, null, '\t')} as const;\n`;

	await writeFile(join(dir, filename), content, 'utf-8');

	return json({ ok: true, filename });
};
