// node 에서 src 의 .ts 를 바로 불러오기 위한 경로 풀이: $lib/… → src/lib/…, 확장자 없는 경로 → .ts 또는 /index.ts
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const LIB = new URL('../../src/lib/', import.meta.url);

export async function resolve(spec, ctx, next) {
	let url = null;
	if (spec.startsWith('$lib/')) url = new URL(spec.slice(5), LIB);
	else if ((spec.startsWith('./') || spec.startsWith('../')) && ctx.parentURL?.startsWith('file:')) url = new URL(spec, ctx.parentURL);
	if (url) {
		const p = fileURLToPath(url);
		for (const c of [p, `${p}.ts`, `${p}.js`, `${p}/index.ts`, `${p}/index.js`])
			if (fs.existsSync(c) && fs.statSync(c).isFile()) return next(pathToFileURL(c).href, ctx);
	}
	return next(spec, ctx);
}
