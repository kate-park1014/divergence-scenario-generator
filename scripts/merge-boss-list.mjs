// boss_list 의 테마별 타임스탬프 JSON 들을 테마당 1개(boss_list/<theme>.json)로 합친다.
// - 관대 파서: 줄 전체가 // 인 라인 제거 후 JSON.parse (옛 forest 파일의 트레일링 주석 대응)
// - snowy 는 최신 파일 우선 100개까지만 채택, 나머지 테마는 전부 합침
// - 중복 이름은 제거하지 않고 "보고만" 한다
// - 합친 뒤 원본 타임스탬프 파일은 boss_list/_archive/ 로 이동
// 실행: node --experimental-strip-types scripts/merge-boss-list.mjs   (또는 그냥 node)
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'boss_list';
const ARCHIVE = path.join(DIR, '_archive');
const TARGET = { snowy: 100, modern: 80, forest: 60, desert: 40, hell: 30 };
const THEMES = Object.keys(TARGET);

function loadLenient(p) {
	let s = fs.readFileSync(p, 'utf8');
	s = s.split('\n').filter((l) => !/^\s*\/\//.test(l)).join('\n');
	return JSON.parse(s);
}

// 타임스탬프 desc 정렬용 (파일명 <theme>_YYYYMMDD_HHMMSS.json)
function tsKey(f) {
	const m = f.match(/_(\d{8})_(\d{6})\.json$/);
	return m ? m[1] + m[2] : '00000000000000';
}

const allFiles = fs.readdirSync(DIR).filter((f) => f.endsWith('.json') && /_\d{8}_\d{6}\.json$/.test(f));
const moved = [];

for (const theme of THEMES) {
	const files = allFiles
		.filter((f) => f.startsWith(theme + '_'))
		.sort((a, b) => tsKey(b).localeCompare(tsKey(a))); // 최신 먼저
	if (files.length === 0) {
		console.log(`[${theme}] 소스 파일 없음 — 건너뜀`);
		continue;
	}

	// 최신 파일부터 보스 수집
	let bosses = [];
	for (const f of files) {
		const j = loadLenient(path.join(DIR, f));
		bosses.push(...j.bosses);
	}

	// snowy 만 목표(100)로 트림 (최신 우선이므로 앞에서부터 100개)
	const limit = TARGET[theme];
	const before = bosses.length;
	if (theme === 'snowy' && bosses.length > limit) bosses = bosses.slice(0, limit);

	// 출력
	const out = {
		theme,
		merged_at: new Date().toISOString(),
		count: bosses.length,
		bosses
	};
	fs.writeFileSync(path.join(DIR, `${theme}.json`), JSON.stringify(out, null, '\t'), 'utf-8');

	// 중복 이름 리포트
	const nameMap = {};
	for (const b of bosses) (nameMap[(b.name || '').toLowerCase()] ??= []).push(b.name);
	const dups = Object.entries(nameMap).filter(([k, v]) => v.length > 1);
	const noFH = bosses.filter((b) => !b.face || !b.hair).length;

	console.log(
		`[${theme}] 소스 ${files.length}파일 ${before}개 → ${theme}.json ${bosses.length}개 (목표 ${limit})` +
			(noFH ? ` | face/hair 비어있음 ${noFH}개` : '')
	);
	if (dups.length) {
		console.log('   ⚠️ 중복 이름:');
		for (const [k, v] of dups) console.log(`      - ${v[0]} ×${v.length}`);
	} else {
		console.log('   중복 이름: 없음');
	}

	moved.push(...files);
}

// 원본 아카이브
fs.mkdirSync(ARCHIVE, { recursive: true });
for (const f of moved) fs.renameSync(path.join(DIR, f), path.join(ARCHIVE, f));
console.log(`\n원본 ${moved.length}개 → ${ARCHIVE}/ 이동 완료`);
console.log('최상위 남은 파일:', fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort().join(', '));
