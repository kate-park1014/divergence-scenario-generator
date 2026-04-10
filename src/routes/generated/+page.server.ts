import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';

export type FileInfo = {
	filename: string;
	varName: string;
	order: number | null;
	isTranslated: boolean;
};

export const load = async () => {
	const dir = join(process.cwd(), 'src/lib/data/generated');

	let filenames: string[] = [];
	try {
		const all = await readdir(dir);
		filenames = all.filter((f) => f.endsWith('.ts')).sort();
	} catch {
		// 디렉토리가 없으면 빈 목록 반환
	}

	const files: FileInfo[] = await Promise.all(
		filenames.map(async (filename) => {
			const raw = await readFile(join(dir, filename), 'utf-8');

			let isTranslated = false;
			let order: number | null = null;

			try {
				const data = parseScenarioFile(raw);
				const prologue = data.prologue as Record<string, unknown> | undefined;
				const eng = prologue?.english;
				isTranslated = Array.isArray(eng) && eng.length > 0;
				order = typeof data.order === 'number' ? data.order : null;
			} catch {
				// 파싱 실패 시 미번역으로 처리
			}

			return {
				filename,
				varName: filename.replace('.ts', ''),
				order,
				isTranslated
			};
		})
	);

	// order 기준으로 정렬 (null은 뒤로)
	files.sort((a, b) => {
		if (a.order === null) return 1;
		if (b.order === null) return -1;
		return a.order - b.order;
	});

	return { files };
};
