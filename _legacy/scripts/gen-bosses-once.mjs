// 일회성 러너: bossGen2 프롬프트로 보스 N개를 생성해 boss_list 에 저장한다.
// 실제 프롬프트/스키마를 src 에서 직접 import 해 드리프트를 막는다.
// 실행: node --experimental-strip-types scripts/gen-bosses-once.mjs --theme=snowy --count=10
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

const preset = WORLD_PRESETS.find((p) => p.theme === theme);
if (!preset) {
	console.error(`테마 '${theme}' 에 해당하는 프리셋이 없습니다. 가능: ${WORLD_PRESETS.map((p) => p.theme).join(', ')}`);
	process.exit(1);
}
const { world_view } = preset;
console.log(`생성: ${count}개 · world_view=${world_view} · theme=${theme} · base=${BASE}`);

const cards = [];
const existing = [];

for (let i = 0; i < count; i++) {
	// 톤을 순환시켜 다양성 확보
	const tone = BOSS_TONES[i % BOSS_TONES.length];
	process.stdout.write(`  [${i + 1}/${count}] ${tone.label} 생성 중... `);

	const message = buildBossGen2Prompt(world_view, theme, tone, existing);
	const res = await fetch(`${BASE}/api/gemini`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			message,
			tools: bossGen2Tool,
			tool_choice: { type: 'function', function: { name: 'generate_boss2' } }
		})
	});
	const data = await res.json();
	if (data.error || !data.tool_result) {
		console.log('실패');
		console.error(JSON.stringify(data).slice(0, 500));
		process.exit(1);
	}
	const g = data.tool_result;
	cards.push({
		id: g.id ?? '',
		name: g.name ?? '',
		appearance: g.appearance ?? '',
		face: g.face ?? '',
		hair: g.hair ?? '',
		surface_identity: g.surface_identity ?? '',
		true_identity: g.true_identity ?? '',
		motivation: g.motivation ?? '',
		twist: g.twist ?? ''
	});
	existing.push(`${g.name} — ${(g.true_identity ?? '').slice(0, 50)}`);
	console.log(`OK → ${g.name}`);
}

process.stdout.write('저장 중... ');
const saveRes = await fetch(`${BASE}/api/boss/save`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ theme, bosses: cards })
});
const saveData = await saveRes.json();
if (saveData.error) {
	console.log('실패');
	console.error(saveData.error);
	process.exit(1);
}
console.log(`완료 → boss_list/${saveData.filename} (${saveData.count}개)`);
