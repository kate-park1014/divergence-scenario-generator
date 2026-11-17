// 4단계: 읽기용 대본 play_0N.md — 스토리와 카드를 방 1→10 순서로 섞음 (네트워크 없음)
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/4_play.mjs [--id=…] [--order=1]
import fs from 'node:fs';
import path from 'node:path';
import { OUT, ORDER, SLOTS, loadArc, npcNames, save, readJson } from './lib.mjs';

const arc = await loadArc();
const names = await npcNames(arc.theme);
const design = readJson('design.json');
const story = readJson('story.json');
const actors = readJson('actors.json');
const cardDir = path.join(OUT, 'cards');
const cards = fs.readdirSync(cardDir).map((f) => JSON.parse(fs.readFileSync(path.join(cardDir, f), 'utf8')));
// 기억 → "심기 카드 제목 → easy/hard" (gold 도 hard 기억을 남기므로 easy·hard 선택지로만)
const byId = Object.fromEntries(cards.flatMap((c) => c.choices.filter((ch) => ch.seed && ch.path !== 'gold').map((ch) => [ch.seed, `${c.title.korean} → ${ch.path}`])));

const who = (sp) => {
	if (sp === 'narrator') return '나레이션';
	if (sp === 'character_any') return '파티(아무나)';
	if (/^character_\d$/.test(sp)) return `파티${sp.slice(-1)}`;
	if (sp === 'random_boss') return `${design.random_boss}`;
	if (sp === 'boss') return arc.boss_name_korean;
	return actors[sp]?.name?.korean ?? names[sp] ?? sp;
};
const row = (d) => (d.type === 'direction' ? `- _(${d.action}: ${who(d.speaker)})_` : `- **${who(d.speaker)}**: ${d.content?.korean ?? ''}`);
const kindKo = { plant: '🌱 심기', normal: '일반', callback: '↩ 회수', rep: '🏷 평판' };
const order = { plant: 0, normal: 1, callback: 2, rep: 3 };
const DIR_KO = { 'fighting-': '투쟁', 'fighting+': '협력', 'community-': '개인', 'community+': '공동체', 'reason-': '질서', 'reason+': '자유' };
const pathKo = { easy: 'easy', hard: 'hard', gold: 'gold', lock: 'lock', fun: '🎭 fun', stat: '⭐ 평판' };
// additions (3c) 의 방 제목·끼워 넣는 줄
const addFile = path.join(OUT, 'additions.json');
const add = fs.existsSync(addFile) ? JSON.parse(fs.readFileSync(addFile, 'utf8')) : { rooms: {} };
const condKo = (c) =>
	c.seed ? `기억 ${byId[c.seed] ?? c.seed}` : c.flag ? `표시 ${c.flag}` : c.stat ? `${c.stat} ${c.op} ${c.value}` : c.leaning ? `평판 ${DIR_KO[c.leaning]} (${c.leaning}, ${c.min} 이상)` : JSON.stringify(c);
const addLine = (a) => `- 💬 _[${condKo(a.line.if ?? {})}]_ **${who(a.line.speaker)}**: ${a.line.example?.korean ?? ''} _(LLM: ${a.line.intent})_`;
/** 원문 줄 사이에 additions 줄을 after_line 자리에 끼움 */
function withAdds(lines, adds) {
	const out = [];
	for (let i = 0; i <= lines.length; i++) {
		for (const a of adds.filter((x) => x.after_line === i)) out.push(addLine(a));
		if (i < lines.length) out.push(row(lines[i]));
	}
	return out;
}

const md = [
	`# ${ORDER}화 — ${design.title}`,
	'',
	`> 장소: ${design.place} · 동행: ${design.npc_name} · 주인공 행동: **${design.action}** · ${design.final ? `최종보스: ${arc.boss_name_korean}` : `일반 보스: ${design.random_boss} (${design.random_boss_side})`}`,
	'> 플레이할 때는 칸마다 카드 1장만 나옴. 여기서는 후보를 모두 보여 줌. 회수 카드는 짝 심기 카드에서 그 선택을 한 사람만 봄',
	'> 🏷 평판 카드: 가장 뚜렷한 성향이 그 방향이고 20 이상인 플레이어에게만, 기본 카드 대신 나옴. ⭐ 평판 선택지: 그 방향 40 이상일 때만 보임. 💬 스토리 방에 조건에 따라 덧붙는 줄 (LLM 이 example 을 참고해 씀)',
	'',
	'## 프롤로그',
	...(story.prologue?.korean ?? []).map((t) => `> ${t}`),
	''
];
for (let id = 1; id <= 10; id++) {
	if (id === 9) {
		md.push('## 방 9 — 휴식', '');
		continue;
	}
	const g = SLOTS.find((s) => s.room === id);
	if (g) {
		const s = design.slots.find((x) => x.slot === g.key);
		md.push(`## 방 ${id} — 카드 ${g.key}`, `> 정하는 것: ${s.decides}`, '');
		for (const c of cards.filter((x) => x._side.slot === g.key).sort((a, b) => order[a.kind] - order[b.kind])) {
			md.push(
				`### ${kindKo[c.kind]}${c._side.rep ? ` ${DIR_KO[c._side.rep]}` : ''} · ${c.title.korean} \`${c.id}\``,
				...(c._side.rep ? [`_나오는 조건: 평판 ${DIR_KO[c._side.rep]} (${c._side.rep} 이 가장 뚜렷하고 20 이상)_  `] : []),
				`_${c._side.person.name}: ${c._side.wants}_  `,
				`_규칙 연결: ${c._side.rule_link}_  `,
				`_배경: ${(c.background_tags ?? []).join(', ')}_`,
				...(c.callback ? [`_회수 조건: ${byId[c.callback.seed] ?? c.callback.seed}_`] : []),
				'',
				...c.dialogue.map((l) => `- **${who(l.speaker)}**: ${l.content.korean}`),
				''
			);
			for (const f of c.forced ?? []) {
				md.push(`- ⚡ **[강제 사건 ${f.require.mbti} · 확률 ${f.chance}] ${f.text.korean}** (${f.mbti}${f.reward ? ` · ${f.reward.join(', ')}` : ''})`);
				for (const r of f.result) md.push(`  - ${who(r.speaker)}: ${r.content.korean}`);
			}
			for (const ch of c.choices) {
				const ef = Object.entries(ch.effects).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`).join(', ');
				const fl = ch.flag && c._side.flags?.[ch.flag];
				md.push(`- **[${pathKo[ch.path] ?? ch.path}${ch.require?.mbti ? ` 🔒${ch.require.mbti}` : ''}${ch.require?.stat && ch.path === 'stat' ? ` ${ch.require.stat} ${ch.require.op} ${ch.require.value}` : ''}] ${ch.text.korean}** (${ch.mbti}${ch.reward ? ` · ${ch.reward.join(', ')}` : ''} · ${ef}${ch.seed ? ` · 기억 ${ch.seed}` : ''}${fl ? ` · 표시 ${ch.flag} ${fl.kind === 'good' ? '유리' : '불리'} ${fl.boss_penalty > 0 ? '+' : ''}${fl.boss_penalty}` : ''})`);
				if (fl) md.push(`  - 🏁 보스 방: ${fl.label.korean} — ${(fl.boss_choice ?? fl.boss_line).korean}`);
				for (const r of ch.result) md.push(`  - ${who(r.speaker)}: ${r.content.korean}`);
				if (ch.event) {
					md.push(`  - 🎲 **이벤트 ${ch.event}**${c._side.events?.[ch.path] ? ` — _${c._side.events[ch.path]}_` : ''}`);
					for (const r of ch.event_intro ?? []) md.push(`    - ${who(r.speaker)}: ${r.content.korean}`);
					const eo = ch.event_options;
					if (eo) {
						md.push(`    - [맞선다] ${eo.fight.text.korean} → 이김: ${eo.fight.win.map((l) => l.content.korean).join(' ')} / 짐: ${eo.fight.lose.map((l) => l.content.korean).join(' ')}`);
						md.push(`    - [피한다] ${eo.avoid.text.korean} → ${eo.avoid.result.map((l) => l.content.korean).join(' ')} (${(eo.avoid.reward ?? []).join(', ')})`);
					}
				}
			}
			md.push('');
		}
		continue;
	}
	const r = story.rooms.find((x) => x.id === id);
	const ar = add.rooms?.[id] ?? {};
	md.push(`## 방 ${id} — 스토리${id === 10 ? ' (보스 전투)' : ''}${ar.title ? ` · ${ar.title.korean}` : ''}`, ...withAdds(r?.dialogue ?? [], ar.dialogue ?? []));
	if (r?.win_dialogue) md.push('', '**승리**', ...r.win_dialogue.map(row));
	if (r?.lose_dialogue) md.push('', '**패배**', ...r.lose_dialogue.map(row));
	md.push('');
}
if (story.epilogue?.korean?.length) md.push('## 에필로그', ...story.epilogue.korean.map((t) => `> ${t}`), '');
const left = [...(design.errors ?? []).map((e) => `설계표: ${e}`), ...(story.errors ?? []).map((e) => `스토리: ${e}`), ...readJson('cards_report.json').flatMap((r) => r.errors.map((e) => `카드 ${r.slots}: ${e}`))];
if (left.length) md.push('## 남은 형식 오류', ...left.map((e) => `- ${e}`), '');
console.log('저장:', save(`play_0${ORDER}.md`, md.join('\n')));
