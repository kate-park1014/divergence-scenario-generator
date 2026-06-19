// bossGen2 프롬프트로 보스를 생성하되, 기존 boss_list 의 같은 theme 이름/ id 와
// 이번 세션에서 새로 만든 이름까지 모두 회피해 "이름 겹치지 않게" 보장한다.
// 충돌 시 회피목록에 넣고 재시도, 마지막엔 결정론적 접미사로 강제 유일화.
// 실행: node --experimental-strip-types scripts/gen-bosses-unique.mjs --theme=snowy --count=10 --runs=3
import fs from 'node:fs';
import {
	buildBossGen2Prompt,
	bossGen2Tool,
	BOSS_TONES,
	WORLD_PRESETS
} from '../src/lib/prompts/bossGen2.ts';

const args = Object.fromEntries(
	process.argv.slice(2).map((a) => {
		const [k, v] = a.replace(/^--/, '').split('=');
		return [k, v ?? true];
	})
);
const BASE = args.base ?? 'http://localhost:5178';
const theme = args.theme ?? 'snowy';
const count = Math.max(1, parseInt(args.count ?? '10', 10));
const runs = Math.max(1, parseInt(args.runs ?? '1', 10));
const MAX_RETRY = 5;

const preset = WORLD_PRESETS.find((p) => p.theme === theme);
if (!preset) {
	console.error(`테마 '${theme}' 프리셋 없음. 가능: ${WORLD_PRESETS.map((p) => p.theme).join(', ')}`);
	process.exit(1);
}
const { world_view } = preset;

// 기존 boss_list 의 같은 theme 이름/id 를 회피 시드로 수집
// 관대 파싱: 줄 전체가 // 인 라인 제거(옛 파일의 트레일링 주석 대응)
function loadLenient(p) {
	let s = fs.readFileSync(p, 'utf8');
	s = s.split('\n').filter((l) => !/^\s*\/\//.test(l)).join('\n');
	return JSON.parse(s);
}
const usedNames = new Set();
const usedIds = new Set();
for (const f of fs.readdirSync('boss_list').filter((f) => new RegExp(`^${theme}_.*\\.json$`).test(f))) {
	for (const b of loadLenient('boss_list/' + f).bosses) {
		usedNames.add(b.name.toLowerCase());
		usedIds.add(b.id.toLowerCase());
	}
}
console.log(
	`생성: ${runs}회 × ${count}개 · ${world_view}/${theme} · 기존 회피 이름 ${usedNames.size}개 · base=${BASE}`
);

async function genOne(tone, avoidList) {
	const res = await fetch(`${BASE}/api/gemini`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			message: buildBossGen2Prompt(world_view, theme, tone, avoidList),
			tools: bossGen2Tool,
			tool_choice: { type: 'function', function: { name: 'generate_boss2' } }
		})
	});
	const data = await res.json();
	if (data.error || !data.tool_result) throw new Error(JSON.stringify(data).slice(0, 400));
	return data.tool_result;
}

// 이름/ id 를 유일하게 만드는 결정론적 보정(최후수단)
function forceUnique(g) {
	let name = g.name;
	let id = g.id;
	if (usedNames.has(name.toLowerCase())) {
		let n = 2;
		while (usedNames.has(`${name} ${toRoman(n)}`.toLowerCase())) n++;
		name = `${name} ${toRoman(n)}`;
	}
	if (usedIds.has(id.toLowerCase())) {
		let n = 2;
		while (usedIds.has(`${id}_${n}`.toLowerCase())) n++;
		id = `${id}_${n}`;
	}
	return { ...g, name, id };
}
function toRoman(n) {
	return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] ?? String(n);
}

for (let r = 0; r < runs; r++) {
	console.log(`\n=== RUN ${r + 1}/${runs} ===`);
	const cards = [];
	for (let i = 0; i < count; i++) {
		const tone = BOSS_TONES[i % BOSS_TONES.length];
		const avoidList = [...usedNames]; // 누적된 모든 이름(소문자) 회피 힌트로 전달
		let g, ok = false;
		for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
			g = await genOne(tone, avoidList);
			if (!usedNames.has((g.name ?? '').toLowerCase()) && !usedIds.has((g.id ?? '').toLowerCase())) {
				ok = true;
				break;
			}
			process.stdout.write(`(중복 '${g.name}' 재시도 ${attempt}) `);
		}
		if (!ok) g = forceUnique(g); // 끝까지 충돌하면 강제 유일화
		const card = {
			id: g.id ?? '',
			name: g.name ?? '',
			appearance: g.appearance ?? '',
			face: g.face ?? '',
			hair: g.hair ?? '',
			surface_identity: g.surface_identity ?? '',
			true_identity: g.true_identity ?? '',
			motivation: g.motivation ?? '',
			twist: g.twist ?? ''
		};
		usedNames.add(card.name.toLowerCase());
		usedIds.add(card.id.toLowerCase());
		cards.push(card);
		console.log(`  [${i + 1}/${count}] ${tone.label} → ${card.name}`);
	}
	const saveRes = await fetch(`${BASE}/api/boss/save`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ theme, bosses: cards })
	});
	const saveData = await saveRes.json();
	if (saveData.error) {
		console.error('저장 실패:', saveData.error);
		process.exit(1);
	}
	console.log(`  저장 완료 → boss_list/${saveData.filename} (${saveData.count}개)`);
}
console.log('\n=== ALL DONE ===');
