import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { translateScenario } from '$lib/server/translateScenario';
import type { RequestHandler } from './$types';

/**
 * output_list/<file> 의 시나리오(5화)를 8개 언어로 번역해 같은 파일에 덮어쓴다.
 * 원본 generated .ts 는 output/save 때 archived_scenarios/ 로 옮겨지므로 output JSON 을 직접 번역한다.
 *
 * body:
 *  - file: string          예: desert_chapter_41.json
 *  - storyarcId?: string   주면 scenario_id 가 이 아크의 것인지 확인 (다른 아크 output 덮어쓰기 방지)
 *
 * 화(scenario)끼리는 병렬. 하나라도 실패하면 파일을 쓰지 않는다.
 */
export const POST: RequestHandler = async ({ request }) => {
	const { file, storyarcId } = await request.json();
	if (typeof file !== 'string' || !/^[\w.-]+\.json$/.test(file)) {
		return json({ error: `잘못된 파일명: ${file}` }, { status: 400 });
	}
	const filepath = join(process.cwd(), 'output_list', file);

	let chapter: { scenarios?: Record<string, unknown>[] };
	try {
		chapter = JSON.parse(await readFile(filepath, 'utf-8'));
	} catch {
		return json({ error: `output 없음: ${file}` }, { status: 404 });
	}
	const scenarios = chapter.scenarios ?? [];
	if (!scenarios.length) return json({ error: 'scenarios 가 비어 있습니다.' }, { status: 400 });
	if (storyarcId && !String(scenarios[0].scenario_id ?? '').startsWith(`${storyarcId}_`)) {
		return json({ error: `다른 아크의 output 입니다 (${scenarios[0].scenario_id})` }, { status: 409 });
	}

	try {
		const results = await Promise.all(
			scenarios.map((sc) => translateScenario(sc, `${file} #${sc.order}`))
		);
		chapter.scenarios = results.map((r) => r.translated);
		await writeFile(filepath, JSON.stringify(chapter, null, '\t'), 'utf-8');
		return json({ ok: true, file, totalTexts: results.reduce((n, r) => n + r.totalTexts, 0) });
	} catch (err) {
		return json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
	}
};
