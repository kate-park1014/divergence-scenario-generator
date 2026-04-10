import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import { getStoryarc } from '$lib/data/storyarc';

export const load = async () => {
	const dir = join(process.cwd(), 'src/lib/data/generated');

	const scenarios: Record<string, unknown>[] = [];

	let filenames: string[] = [];
	try {
		const all = await readdir(dir);
		filenames = all.filter((f) => f.startsWith('scenario_') && f.endsWith('.ts')).sort();
	} catch {
		// generated 디렉토리 없음
	}

	for (const filename of filenames) {
		try {
			const raw = await readFile(join(dir, filename), 'utf-8');
			const data = parseScenarioFile(raw);
			scenarios.push(data);
		} catch {
			// 파싱 실패 시 스킵
		}
	}

	// scenario_id(예: "forest_sloth_01")에서 storyarc_id("forest_sloth") 추출
	const firstScenarioId = scenarios[0]?.scenario_id as string | undefined;
	const storyarcId = firstScenarioId?.replace(/_\d+$/, '') ?? '';
	const storyarc = getStoryarc(storyarcId);

	return {
		chapterName: storyarc?.chapter_name ?? null,
		storyarcId,
		scenarios
	};
};
