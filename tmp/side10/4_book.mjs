// 4단계: 읽기용 정리 — 화마다 방 1→10 순서로 스토리 + 칸별 후보 카드 3장을 한 파일에 (0N/episode.md)
// 네트워크 호출 없음
// node tmp/side10/4_book.mjs
import fs from 'node:fs';
import path from 'node:path';
import { OUT, ORDERS, save, readJson, epDir } from './lib.mjs';

const plan = readJson(path.join(OUT, 'plan.json'));
const npcName = (k) => plan.npcs.find((n) => n.key === k)?.name ?? k;

function episodeMd(ep) {
	const dir = epDir(ep.order);
	const story = readJson(path.join(dir, 'story.json'));
	const actors = readJson(path.join(dir, 'actors.json')) ?? {};
	const cardDir = path.join(dir, 'cards');
	const cards = fs.existsSync(cardDir) ? fs.readdirSync(cardDir).map((f) => readJson(path.join(cardDir, f))) : [];
	const who = (sp) => {
		if (sp === 'narrator') return '나레이션';
		if (sp === 'character_any') return '파티(아무나)';
		if (/^character_\d$/.test(sp)) return `파티${sp.slice(-1)}`;
		if (sp === 'random_boss') return `일반 보스(${ep.random_boss})`;
		if (sp === 'boss') return plan.boss_name;
		return actors[sp]?.name?.korean ?? npcName(sp);
	};
	const row = (d) => (d.type === 'direction' ? `- _(${d.action}: ${who(d.speaker)})_` : `- **${who(d.speaker)}**: ${d.content?.korean ?? ''}`);
	const md = [`# ${ep.order}화 — ${ep.title}`, '', `> 장소: ${ep.place} · 주 NPC: ${npcName(ep.npc)} · 주인공 행동: **${ep.action}**${ep.random_boss ? ` · 일반 보스: ${ep.random_boss} (${ep.random_boss_side})` : ''}`, ''];
	if (story) md.push('## 프롤로그', ...(story.prologue?.korean ?? []).map((t) => `> ${t}`), '');
	for (let id = 1; id <= 10; id++) {
		if (id === 9) {
			md.push('## 방 9 — 휴식', '');
			continue;
		}
		const slot = ep.slots.find((s) => s.room === id);
		if (slot) {
			md.push(`## 방 ${id} — 카드 (3장 중 1장)`, `> must: ${slot.must}`);
			for (const h of slot.plant) md.push(`> 🌱 복선 심기: ${h}`);
			for (const h of slot.reveal) md.push(`> 💡 복선 공개: ${h}`);
			md.push('');
			for (const c of cards.filter((x) => x._slot?.room === id)) {
				md.push(`### ${c.title.korean} \`${c.id}\``, `_${c._slot.event}_`, '', ...c.dialogue.map(row), '');
				for (const ch of c.choices) {
					const ef = Object.entries(ch.effects).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`).join(', ');
					md.push(`- **[${ch.path}] ${ch.text.korean}** (${ch.mbti}${ch.reward ? ` · ${ch.reward.join(', ')}` : ''} · ${ef})`);
					for (const r of ch.result) md.push(`  - ${who(r.speaker)}: ${r.content.korean}`);
				}
				md.push('');
			}
			continue;
		}
		const r = story?.rooms?.find((x) => x.id === id);
		md.push(`## 방 ${id} — 스토리${id === 10 ? ' (보스 전투)' : ''}`);
		if (!r) {
			md.push('_(없음)_', '');
			continue;
		}
		md.push(...(r.dialogue ?? []).map(row));
		if (r.win_dialogue) md.push('', '**승리**', ...r.win_dialogue.map(row));
		if (r.lose_dialogue) md.push('', '**패배**', ...r.lose_dialogue.map(row));
		md.push('');
	}
	if (story?.epilogue) md.push('## 에필로그', ...story.epilogue.korean.map((t) => `> ${t}`), '');
	const left = [...(story?.errors ?? []).map((e) => `스토리: ${e}`), ...(readJson(path.join(dir, 'cards_report.json')) ?? []).flatMap((r) => r.errors.map((e) => `칸 ${r.room}: ${e}`))];
	if (left.length) md.push('## 남은 검사 오류', ...left.map((e) => `- ${e}`), '');
	save(dir, 'episode.md', md.join('\n'));
	return { order: ep.order, title: ep.title, cards: cards.length, errors: left.length };
}

const rows = ORDERS.map((o) => episodeMd(plan.episodes.find((x) => x.order === o)));
const index = `# ${plan.id} — 스토리방 + 카드방 (방 10개)

| 화 | 제목 | 카드 | 남은 오류 | 읽기 |
| --- | --- | --- | --- | --- |
${rows.map((r) => `| ${r.order} | ${r.title} | ${r.cards}장 | ${r.errors} | [episode.md](0${r.order}/episode.md) |`).join('\n')}

- 화별 설계: [plan.md](plan.md)
`;
console.log('저장:', save(OUT, 'index.md', index));
