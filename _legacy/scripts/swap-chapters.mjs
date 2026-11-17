#!/usr/bin/env node
// 두 챕터의 난이도 위치(=level/chapter_order)를 맞바꾸는 범용 CLI.
// storyarc 소스(파일명·export·id·level) + index.ts + 출력 JSON 을 일관되게 갱신한다.
//
// 사용법:
//   npm run swap:chapters -- --theme=snowy --a=2 --b=54 --dir=output_list/snowy_01-100 --dry-run
//   npm run swap:chapters -- --theme=snowy --a=2 --b=54 --dir=output_list/snowy_01-100
//
// 옵션:
//   --theme=snowy|modern|desert|forest|hell   (필수) storyarc 디렉토리/식별자 prefix
//   --a=<order> --b=<order>                    (필수) 맞바꿀 두 챕터 order (= difficulty_level = level+1)
//   --dir=output_list/<...>                    (선택) 출력 JSON 폴더. 생략 시 storyarc 소스+index.ts 만 처리
//   --dry-run                                  계획만 출력, 미수정
//
// 규칙: chapter_order = difficulty_level = level + 1.
//       storyarc 파일/export/id 숫자 = level. 출력 파일명 <theme>_chapter_<NN> 의 NN = chapter_order.
//       scenario_id = <theme>_<boss>_<level>_<scene>.

import { readdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function parseArgs(argv) {
	const o = {};
	for (const a of argv) {
		const m = a.match(/^--([^=]+)(?:=(.*))?$/);
		if (m) o[m[1]] = m[2] ?? true;
	}
	return o;
}

function die(msg) {
	console.error(`✗ ${msg}`);
	process.exit(1);
}

// 정규식 메타문자 이스케이프
function esc(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// git mv (추적 파일) — 실패 시 fs rename 로 폴백
function move(from, to) {
	try {
		execSync(`git mv ${JSON.stringify(from)} ${JSON.stringify(to)}`, { cwd: ROOT, stdio: 'pipe' });
	} catch {
		renameSync(join(ROOT, from), join(ROOT, to));
	}
}

const args = parseArgs(process.argv.slice(2));
const DRY = !!args['dry-run'];
const theme = args.theme;
const a = Number(args.a);
const b = Number(args.b);
const dir = args.dir; // 선택

if (!theme) die('--theme 필요');
if (!Number.isInteger(a) || !Number.isInteger(b)) die('--a, --b 는 정수 order 여야 함');
if (a === b) die('--a 와 --b 가 같음');

const levelA = a - 1;
const levelB = b - 1;
const arcDir = join('src/lib/data/storyarc', theme);
const arcDirAbs = join(ROOT, arcDir);

// ── storyarc 소스에서 levelA / levelB 에 해당하는 보스 찾기 ──────────────
// 파일명: storyarc_<theme>_<boss>_<level>.ts
function findArc(level) {
	const re = new RegExp(`^storyarc_${esc(theme)}_(.+)_${level}\\.ts$`);
	let files;
	try {
		files = readdirSync(arcDirAbs);
	} catch {
		die(`storyarc 디렉토리 없음: ${arcDir}`);
	}
	const hits = files.filter((f) => re.test(f));
	if (hits.length === 0) die(`level ${level} (=chapter ${level + 1}) 에 해당하는 storyarc 파일 없음 in ${arcDir}`);
	if (hits.length > 1) die(`level ${level} 에 storyarc 파일 다수: ${hits.join(', ')}`);
	const boss = hits[0].match(re)[1];
	return { boss, file: hits[0], level };
}

const arcA = findArc(levelA);
const arcB = findArc(levelB);

console.log(`테마: ${theme}`);
console.log(`  챕터 ${a} (level ${levelA}) = ${arcA.boss}  →  챕터 ${b} (level ${levelB})`);
console.log(`  챕터 ${b} (level ${levelB}) = ${arcB.boss}  →  챕터 ${a} (level ${levelA})`);

// ── 한 storyarc 소스 파일 편집: oldLevel → newLevel ─────────────────────
function editArcSource(arc, newLevel) {
	const oldId = `${theme}_${arc.boss}_${arc.level}`;
	const newId = `${theme}_${arc.boss}_${newLevel}`;
	const oldExport = `storyarc_${oldId}`;
	const newExport = `storyarc_${newId}`;
	const oldFile = join(arcDir, arc.file);
	const newFile = join(arcDir, `${newExport}.ts`);

	let src = readFileSync(join(ROOT, oldFile), 'utf8');
	// level 필드 (최상위 첫 출현)
	src = src.replace(/("level"\s*:\s*)\d+/, `$1${newLevel}`);
	// export 식별자 + id 문자열 (뒤에 숫자 안 오게)
	src = src.replace(new RegExp(`${esc(oldExport)}(?![0-9])`, 'g'), newExport);
	src = src.replace(new RegExp(`"${esc(oldId)}"`, 'g'), `"${newId}"`);

	if (DRY) {
		console.log(`  [소스] ${oldFile}  →  ${newFile}  (export/id ${oldExport}→${newExport}, level→${newLevel})`);
	} else {
		writeFileSync(join(ROOT, oldFile), src);
		move(oldFile, newFile);
	}
	return { oldExport, newExport };
}

const renA = editArcSource(arcA, levelB);
const renB = editArcSource(arcB, levelA);

// ── index.ts: 식별자 치환 (import 이름·경로 basename·registry 동시) ──────
{
	const idxPath = join('src/lib/data/storyarc', 'index.ts');
	let idx = readFileSync(join(ROOT, idxPath), 'utf8');
	for (const { oldExport, newExport } of [renA, renB]) {
		const before = idx;
		idx = idx.replace(new RegExp(`${esc(oldExport)}(?![0-9])`, 'g'), newExport);
		if (before === idx) die(`index.ts 에서 ${oldExport} 를 찾지 못함`);
	}
	if (DRY) console.log(`  [index] ${idxPath}: ${renA.oldExport}→${renA.newExport}, ${renB.oldExport}→${renB.newExport}`);
	else writeFileSync(join(ROOT, idxPath), idx);
}

// ── 출력 JSON (--dir 있을 때) ───────────────────────────────────────────
if (dir) {
	const dirAbs = join(ROOT, dir);
	let files;
	try {
		files = readdirSync(dirAbs).filter((f) => new RegExp(`^${esc(theme)}_chapter_.*\\.json$`).test(f));
	} catch {
		die(`출력 디렉토리 없음: ${dir}`);
	}
	// chapter_order 로 대상 파일 찾기
	function findChapter(order) {
		for (const f of files) {
			const txt = readFileSync(join(dirAbs, f), 'utf8');
			const m = txt.match(/"chapter_order"\s*:\s*(\d+)/);
			if (m && Number(m[1]) === order) return { file: f, txt };
		}
		die(`출력 JSON 중 chapter_order==${order} 인 파일 없음 in ${dir}`);
	}
	const fA = findChapter(a); // 보스 arcA
	const fB = findChapter(b); // 보스 arcB

	// 내용 편집(탭 포맷 보존 위해 문자열 치환)
	function editChapter(entry, arc, newOrder, newLevel) {
		let txt = entry.txt;
		txt = txt.replace(/("chapter_order"\s*:\s*)\d+/, `$1${newOrder}`);
		txt = txt.replace(/("difficulty_level"\s*:\s*)\d+/, `$1${newOrder}`);
		// scenario_id prefix: <theme>_<boss>_<oldLevel>_  →  _<newLevel>_
		const reSid = new RegExp(`(${esc(theme)}_${esc(arc.boss)})_${arc.level}_`, 'g');
		txt = txt.replace(reSid, `$1_${newLevel}_`);
		try {
			JSON.parse(txt);
		} catch (e) {
			die(`편집 후 JSON 파싱 실패 (${entry.file}): ${e.message}`);
		}
		return txt;
	}
	const newA = editChapter(fA, arcA, b, levelB); // arcA → order b, level B
	const newB = editChapter(fB, arcB, a, levelA); // arcB → order a, level A

	if (DRY) {
		console.log(`  [출력] ${join(dir, fA.file)} (order ${a}→${b}) ↔ 파일명 ${fB.file}`);
		console.log(`  [출력] ${join(dir, fB.file)} (order ${b}→${a}) ↔ 파일명 ${fA.file}`);
	} else {
		// 내용 먼저 기록 → 파일명 서로 교환(임시 경유)으로 NN==chapter_order 복원
		writeFileSync(join(dirAbs, fA.file), newA);
		writeFileSync(join(dirAbs, fB.file), newB);
		const tmp = join(dir, `__swap_tmp_${fA.file}`);
		move(join(dir, fA.file), tmp);
		move(join(dir, fB.file), join(dir, fA.file));
		move(tmp, join(dir, fB.file));
	}
}

console.log(DRY ? '\n(dry-run) 변경 없음.' : '\n✓ 완료.');
