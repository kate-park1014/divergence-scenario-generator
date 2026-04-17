import { json } from '@sveltejs/kit';
import { mkdir, readdir, readFile, rename, writeFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import { getStoryarc } from '$lib/data/storyarc';
import type { RequestHandler } from './$types';

async function loadScenariosForStoryarc(storyarcId: string): Promise<Record<string, unknown>[]> {
	const dir = join(process.cwd(), 'src/lib/data/generated');
	const all = await readdir(dir);
	const filenames = all
		.filter((f) => f.startsWith(`scenario_${storyarcId}_`) && f.endsWith('.ts'))
		.sort();

	const scenarios: Record<string, unknown>[] = [];
	for (const filename of filenames) {
		const raw = await readFile(join(dir, filename), 'utf-8');
		scenarios.push(parseScenarioFile(raw));
	}
	return scenarios;
}

async function archiveGeneratedFiles(
	storyarcId: string,
	chapterOrder: number,
	chapterName: { korean?: string } | null
): Promise<string[]> {
	const padded = String(chapterOrder).padStart(2, '0');
	const koreanTitle = (chapterName?.korean ?? '').replace(/\s+/g, '');
	const folderName = koreanTitle
		? `${storyarcId}_chapter_${padded}_${koreanTitle}`
		: `${storyarcId}_chapter_${padded}`;
	const archiveDir = join(process.cwd(), 'archived_scenarios', folderName);
	await mkdir(archiveDir, { recursive: true });

	const generatedDir = join(process.cwd(), 'src/lib/data/generated');
	const all = await readdir(generatedDir);
	const matching = all.filter(
		(f) => f.startsWith(`scenario_${storyarcId}_`) && f.endsWith('.ts')
	);
	for (const f of matching) {
		await rename(join(generatedDir, f), join(archiveDir, f));
	}
	return matching;
}

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { chapterOrder, difficultyLevel, storyarcId, archiveSource } = body;
	let { chapterName, scenarios } = body;

	if (typeof chapterOrder !== 'number' || chapterOrder < 1) {
		return json({ error: 'chapter_order는 1 이상의 숫자여야 합니다.' }, { status: 400 });
	}
	if (typeof difficultyLevel !== 'number' || difficultyLevel < 1) {
		return json({ error: 'difficulty_level은 1 이상의 숫자여야 합니다.' }, { status: 400 });
	}
	if (!storyarcId || typeof storyarcId !== 'string') {
		return json({ error: 'storyarcId가 필요합니다.' }, { status: 400 });
	}

	if (!scenarios) {
		scenarios = await loadScenariosForStoryarc(storyarcId);
		if (scenarios.length === 0) {
			return json(
				{ error: `${storyarcId}에 해당하는 시나리오 파일을 찾을 수 없습니다.` },
				{ status: 404 }
			);
		}
	}
	const storyarc = getStoryarc(storyarcId);
	if (!chapterName) {
		chapterName = storyarc?.chapter_name ?? null;
	}
	const theme = storyarc?.theme;
	if (!theme) {
		return json(
			{ error: `${storyarcId}의 theme을 확인할 수 없습니다.` },
			{ status: 400 }
		);
	}

	const outputDir = join(process.cwd(), 'output_list');
	await mkdir(outputDir, { recursive: true });

	const output = {
		chapter_order: chapterOrder,
		difficulty_level: difficultyLevel,
		chapter_name: chapterName,
		scenarios
	};

	const filename = `${theme}_chapter_${String(chapterOrder).padStart(2, '0')}.json`;
	const filepath = join(outputDir, filename);

	await writeFile(filepath, JSON.stringify(output, null, '\t'), 'utf-8');

	let archived: string[] = [];
	if (archiveSource) {
		archived = await archiveGeneratedFiles(storyarcId, chapterOrder, chapterName);
	}

	return json({
		ok: true,
		filename,
		scenarioCount: scenarios.length,
		archivedFiles: archived.length
	});
};
