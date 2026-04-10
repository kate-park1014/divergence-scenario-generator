import { access } from 'fs/promises';
import { join } from 'path';

const TOTAL_ORDERS = 5;

export type ScenarioInfo = {
	order: number;
	filename: string;
	exists: boolean;
};

export const load = async ({ url }: { url: URL }) => {
	const storyarcId = url.searchParams.get('storyarc') ?? 'forest_false_spring';
	const dir = join(process.cwd(), 'src/lib/data/generated');

	const scenarios: ScenarioInfo[] = await Promise.all(
		Array.from({ length: TOTAL_ORDERS }, async (_, i) => {
			const order = i + 1;
			const padded = String(order).padStart(2, '0');
			const filename = `scenario_${storyarcId}_${padded}.ts`;

			let exists = false;
			try {
				await access(join(dir, filename));
				exists = true;
			} catch {
				// 파일 없음
			}

			return { order, filename, exists };
		})
	);

	return { scenarios, storyarcId };
};
