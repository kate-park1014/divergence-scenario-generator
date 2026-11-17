// boss_list 의 5개 테마 JSON 전체에서 이름을 완전 고유화한다.
// 등장 순서(snowy→modern→forest→desert→hell, 파일 내 배열순)로 보며,
// 이미 쓰인 이름이면 그 보스만 LLM 으로 새 고유 이름 생성 → name·id 갱신.
// 실행: node --experimental-strip-types scripts/rename-unique.mjs [--dry-run]
import fs from 'node:fs';
import { WORLD_PRESETS } from '../src/lib/prompts/bossGen2.ts';

const BASE = process.env.BASE ?? 'http://localhost:5178';
const DRY = process.argv.includes('--dry-run');
const ORDER = ['snowy', 'modern', 'forest', 'desert', 'hell'];
const wv = Object.fromEntries(WORLD_PRESETS.map((p) => [p.theme, p.world_view]));

const renameTool = [
	{
		type: 'function',
		function: {
			name: 'pick_name',
			description: '보스에 어울리는 새 고유 이름 하나를 고른다.',
			parameters: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: '짧고 강렬한 고유명(영문/로마자, 1~2단어). 한글 금지.'
					}
				},
				required: ['name']
			}
		}
	}
];

function pascal(s) {
	return s.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('');
}
// id 의 이름 토큰 교체: <prefix>_<Name>_V<N> 형태일 때만
function rebuildId(oldId, newName) {
	const m = oldId.match(/^(.*)_([A-Za-z0-9]+)_(V\d+)$/);
	if (!m) return oldId; // 형식 안 맞으면 id 유지(이미 유일)
	return `${m[1]}_${pascal(newName) || 'X'}_${m[3]}`;
}

async function pickName(theme, boss, avoid) {
	const prompt = `당신은 게임 보스 작명가입니다. 아래 보스에 어울리는 **새 고유 이름 하나**를 지어주세요.
- 세계관: ${wv[theme]} / 무대: ${theme}
- 외형: ${(boss.appearance || '').slice(0, 200)}
- 진짜 정체: ${(boss.true_identity || '').slice(0, 200)}
규칙: 짧고 강렬한 영문(로마자) 고유명 1~2단어. 한글 금지. 아래 "이미 쓰인 이름"과 절대 겹치지 말 것.
이미 쓰인 이름: ${avoid.join(', ')}`;
	const res = await fetch(`${BASE}/api/gemini`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			message: prompt,
			tools: renameTool,
			tool_choice: { type: 'function', function: { name: 'pick_name' } }
		})
	});
	const data = await res.json();
	if (data.error || !data.tool_result?.name) throw new Error(JSON.stringify(data).slice(0, 300));
	return data.tool_result.name.trim();
}

// 로드
const files = Object.fromEntries(
	ORDER.map((t) => [t, JSON.parse(fs.readFileSync(`boss_list/${t}.json`, 'utf8'))])
);
const usedNames = new Set();
const usedIds = new Set();
for (const t of ORDER) for (const b of files[t].bosses) usedIds.add(b.id.toLowerCase());

let renamed = 0;
for (const t of ORDER) {
	for (const b of files[t].bosses) {
		const key = (b.name || '').toLowerCase();
		if (!usedNames.has(key)) {
			usedNames.add(key);
			continue;
		}
		// 중복 → 새 이름
		const oldName = b.name;
		let nn, ok = false;
		for (let a = 1; a <= 5; a++) {
			nn = await pickName(t, b, [...usedNames]);
			if (nn && !usedNames.has(nn.toLowerCase())) {
				ok = true;
				break;
			}
		}
		if (!ok) {
			let n = 2;
			while (usedNames.has(`${oldName} ${n}`.toLowerCase())) n++;
			nn = `${oldName} ${n}`;
		}
		let newId = rebuildId(b.id, nn);
		if (usedIds.has(newId.toLowerCase())) {
			let n = 2;
			while (usedIds.has(`${newId}_${n}`.toLowerCase())) n++;
			newId = `${newId}_${n}`;
		}
		usedNames.add(nn.toLowerCase());
		usedIds.delete(b.id.toLowerCase());
		usedIds.add(newId.toLowerCase());
		console.log(`[${t}] ${oldName} → ${nn}    (${b.id} → ${newId})`);
		b.name = nn;
		b.id = newId;
		renamed++;
	}
}

if (DRY) {
	console.log(`\n[dry-run] 총 ${renamed}개 rename 예정 (파일 미저장)`);
} else {
	for (const t of ORDER) {
		files[t].renamed_at = new Date().toISOString();
		fs.writeFileSync(`boss_list/${t}.json`, JSON.stringify(files[t], null, '\t'), 'utf-8');
	}
	console.log(`\n총 ${renamed}개 rename 완료 · 5개 파일 저장됨`);
}
