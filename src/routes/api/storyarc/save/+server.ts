import { json } from '@sveltejs/kit';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { storyarc } = await request.json();

	if (!storyarc?.id) {
		return json({ error: 'storyarc.id가 없습니다.' }, { status: 400 });
	}

	const id = storyarc.id as string;
	const theme = typeof storyarc.theme === 'string' ? storyarc.theme.trim().toLowerCase() : '';
	const slug = theme && !id.toLowerCase().startsWith(`${theme}_`) ? `${theme}_${id}` : id;
	const exportName = `storyarc_${slug}`;
	const storyarcDir = join(process.cwd(), 'src/lib/data/storyarc');

	// 시리즈물 대비: 같은 slug의 기존 V* 파일을 스캔해 다음 버전 번호를 매긴다.
	const existing = await readdir(storyarcDir);
	const versionRe = new RegExp(`^${exportName}_V(\\d+)\\.ts$`);
	const maxVersion = existing.reduce((max, file) => {
		const m = file.match(versionRe);
		return m ? Math.max(max, Number(m[1])) : max;
	}, -1);
	const version = maxVersion + 1;

	const moduleName = `${exportName}_V${version}`;
	const filename = `${moduleName}.ts`;

	// 1. storyarc 파일 저장
	const storyarcContent = `import type { StoryArc } from '$lib/types';

export const ${exportName}: StoryArc = ${JSON.stringify(storyarc, null, '\t')};
`;
	await writeFile(join(storyarcDir, filename), storyarcContent, 'utf-8');

	// 2. index.ts 읽기
	const indexPath = join(storyarcDir, 'index.ts');
	const indexRaw = await readFile(indexPath, 'utf-8');

	const importLine = `import { ${exportName} } from './${moduleName}';`;

	// 이미 등록된 slug면 → import 경로만 최신 버전 파일로 교체하고 종료
	const existingImportRe = new RegExp(
		`import \\{ ${exportName} \\} from '\\./${exportName}(?:_V\\d+)?';`
	);
	if (existingImportRe.test(indexRaw)) {
		const updated = indexRaw.replace(existingImportRe, importLine);
		await writeFile(indexPath, updated, 'utf-8');
		return json({ filename, registered: true, updated: true });
	}

	// 3. import 줄 추가 (마지막 import 뒤에 삽입)
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
