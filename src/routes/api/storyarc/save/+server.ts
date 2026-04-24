import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { storyarc } = await request.json();

	if (!storyarc?.id) {
		return json({ error: 'storyarc.id가 없습니다.' }, { status: 400 });
	}

	const id = storyarc.id as string;
	const exportName = `storyarc_${id}`;
	const filename = `${exportName}.ts`;
	const storyarcDir = join(process.cwd(), 'src/lib/data/storyarc');

	// 1. storyarc 파일 저장
	const storyarcContent = `import type { StoryArc } from '$lib/types';

export const ${exportName}: StoryArc = ${JSON.stringify(storyarc, null, '\t')};
`;
	await writeFile(join(storyarcDir, filename), storyarcContent, 'utf-8');

	// 2. index.ts 읽기 → 이미 등록된 경우 스킵
	const indexPath = join(storyarcDir, 'index.ts');
	const indexRaw = await readFile(indexPath, 'utf-8');

	if (indexRaw.includes(exportName)) {
		return json({ filename, registered: false });
	}

	// 3. import 줄 추가 (마지막 import 뒤에 삽입)
	const importLine = `import { ${exportName} } from './${exportName}';`;
	const updatedWithImport = indexRaw.replace(
		/(import type \{ StoryArc \} from '\$lib\/types';)/,
		`${importLine}\n$1`
	);

	// 4. registry 배열에 추가 (마지막 항목 뒤에 삽입)
	const updatedWithRegistry = updatedWithImport.replace(
		/(\s+)(storyarc_\w+)\s*\n(\];)/,
		`$1$2,\n$1${exportName}\n$3`
	);

	await writeFile(indexPath, updatedWithRegistry, 'utf-8');

	return json({ filename, registered: true });
};
