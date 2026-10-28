// 2단계: 스토리 방 1·3·5·7·10 (Gemini 1콜, 형식이 깨지면 1번 더)
// chapterGenRewrite.ts 의 프롬프트를 그대로 쓰고 방 번호만 1,3,5,9,15 → 1,3,5,7,10 으로 바꾼 뒤, 설계표의 방별 할 일을 붙임
// node --no-warnings --import ./scripts/side_test/ts-register.mjs scripts/side_test/2_story.mjs [--id=…] [--order=1]
import { ORDER, loadArc, save, readJson, generate, STORY_ROOMS, SLOTS } from './lib.mjs';
import { buildScenarioRewritePrompt, buildScenarioTool } from '../../src/lib/prompts/chapterGenRewrite.ts';

const arc = await loadArc();
const design = readJson('design.json');

/** 기존 방 번호(1,3,5,9,15) → 방 10개 구조의 스토리 방(1,3,5,7,10) */
function renumber(s) {
	const out = s
		.replaceAll('1, 3, 5, 9, 15', '1, 3, 5, 7, 10')
		.replaceAll('1 → 3 → 5 → 9 → 15', '1 → 3 → 5 → 7 → 10')
		.replaceAll('방 1~9', '방 1~7')
		.replaceAll('방 3~9', '방 3~7')
		.replaceAll('방 9 까지', '방 7 까지')
		.replaceAll('방 15', '방 10')
		.replaceAll('룸 15', '룸 10')
		.replaceAll('(id: 15)', '(id: 10)');
	const left = out.split('\n').filter((l) => /15|방 9|~9|→ 9/.test(l));
	if (left.length) throw new Error(`바꾸지 못한 방 번호가 남음:\n${left.join('\n')}`);
	return out;
}

const slotNote = (key) => design.slots.find((s) => s.slot === key);
const SIDE = `

# 방 10개 구조 (이번 판. 위 규칙보다 이것이 먼저)
| 방 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 내용 | 스토리 | 카드 | 스토리 | 카드 | 스토리 | 카드 | 스토리 | 카드 | 휴식 | 스토리 (보스) |
- 쓰는 것은 스토리 방 5개(id 1, 3, 5, 7, 10). 사이 칸에는 플레이어마다 다른 카드가 나오고, 방 9 는 휴식
- 스토리 방은 아래 "다음 칸에 남길 것"을 열어 둔 채 끝나지만, 카드에서 무엇을 골랐는지에는 기대지 않는다
- 스토리 방 첫 줄은 앞 카드에서 무슨 일이 있었든 말이 되게 시작한다
- 방 10 은 휴식 뒤라, 첫 줄에서 앞 방 마지막 대사를 이어받지 않는다

## 방마다 할 일 (설계표. 이 순서대로)
${design.story_rooms
	.map((r) => {
		const after = SLOTS.find((s) => s.after === r.room);
		const before = SLOTS.find((s) => s.before === r.room);
		return [
			`- 방 ${r.room}: ${r.does}`,
			before ? `  - 이 방이 깔고 가는 사실 (앞 카드가 깨지 않게 맞춰 둔 것. 이 방에서 그대로 유지): ${slotNote(before.key).keeps}` : '',
			after ? `  - 다음 칸에 남길 것 (이 방 끝에 열어 둠): ${slotNote(after.key).opens}` : ''
		]
			.filter(Boolean)
			.join('\n');
	})
	.join('\n')}
${design.locals.length ? `\n## 이 장소의 작은 인물·물건 (배경에 보여도 됨. 카드에서 쓰는 재료라 스토리 방에서 사건을 만들지 않음)\n${design.locals.map((l) => `- ${l.name}: ${l.note}`).join('\n')}\n` : ''}`;

const prompt = renumber(buildScenarioRewritePrompt(ORDER, arc)) + SIDE;

const tool = JSON.parse(JSON.stringify(buildScenarioTool(ORDER).function));
tool.parameters.properties.rooms.description = 'id: 1, 3, 5, 7, 10 순서로 5개';

const npcKeys = Object.keys(arc.npc_roles ?? {});
const speakers = new Set(['narrator', 'character_any', 'character_1', 'character_2', 'character_3', 'character_4', ...npcKeys, ORDER === 5 ? 'boss' : 'random_boss']);

/** 형식만 검사 */
function check(o) {
	const e = [];
	const rooms = [...(o.rooms ?? [])].sort((a, b) => a.id - b.id);
	if (rooms.map((r) => r.id).join() !== STORY_ROOMS.join()) e.push(`rooms id 는 1,3,5,7,10 (지금 ${rooms.map((r) => r.id)})`);
	if (!o.prologue?.korean?.length) e.push('prologue.korean 이 비었습니다');
	if (ORDER === 5 && !o.epilogue?.korean?.length) e.push('5화는 epilogue.korean 이 있어야 합니다');
	for (const r of rooms) {
		if (!(r.dialogue ?? []).some((d) => d.type === 'speech')) e.push(`방 ${r.id} dialogue 에 대사가 없습니다`);
		if (r.id === 10 && !(r.win_dialogue?.length && r.lose_dialogue?.length)) e.push('방 10 에 win_dialogue·lose_dialogue 가 둘 다 있어야 합니다');
		for (const b of ['dialogue', 'win_dialogue', 'lose_dialogue'])
			for (const d of r[b] ?? []) {
				if (d.type === 'speech' && !speakers.has(d.speaker)) e.push(`방 ${r.id} 화자 "${d.speaker}" 는 쓸 수 없습니다`);
				if (d.type === 'speech' && !d.content?.korean?.trim()) e.push(`방 ${r.id} ${b} 의 ${d.speaker} 대사에 content.korean 이 없습니다`);
			}
	}
	return e;
}

save('story_prompt.md', prompt);
const { out, errors } = await generate(prompt, tool, check, { label: `${ORDER}화 스토리` });
out.rooms.sort((a, b) => a.id - b.id);
console.log('저장:', save('story.json', { ...out, errors }));
