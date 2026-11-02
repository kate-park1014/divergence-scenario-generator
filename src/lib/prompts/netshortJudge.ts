import type { NetshortStory, PickedSeeds } from './netshortStory';

// 넷쇼트 story.json 채점. 코드로 못 잡는 "읽고 판단해야 하는" 항목만 본다 (storyarcJudge.ts 와 같은 방식).
// 항목은 고정. 프롬프트·재료를 바꾼 뒤 여러 개를 만들어 통과율이 오르는지 보는 용도 (다시 쓰기를 일으키지 않음).

export const NETSHORT_JUDGE_ITEMS = [
	{
		id: 'N1',
		name: '싸움과 장치가 이어짐',
		rule: '1~4화 방 10: 히어로들이 장치를 쓰는 이유가 그 화 일반 보스와 싸우며 입을 상처를 피하려는 것이고, 장치를 쓴 뒤 싸운다. win 에서 히어로들이 싸우며 맞은 상처가 다른 사람 몸에 생긴 것이 드러난다. 싸움과 상관없는 다른 위험(나중에 올 습격 등)을 피하려고 장치를 쓰거나, 싸우는 도중·이긴 뒤에 장치를 쓰거나, 싸우는 상대와 상처를 주는 사람이 다르면 불통과.'
	},
	{
		id: 'N2',
		name: '피해자가 작동법대로 정해짐',
		rule: '1~4화 win 에서 상처를 받은 사람이 왜 그 사람인지 작동법으로 설명된다 (히어로들이 고른 물건·이름이 사실은 그 사람의 것이었다). "옆에 있었다", "우연히 닿았다"처럼 작동법 밖의 이유이거나, 이유가 없으면 불통과.'
	},
	{
		id: 'N3',
		name: '속을 만한 이유',
		rule: '1~4화 before_battle 전까지, 히어로들이 왜 그 물건·이름이면 아무도 안 다친다고 믿는지 나온다. 그 믿음은 작동법(그 물건·이름의 주인에게 상처가 간다)과 앞 장면에서 본 것으로 납득된다 (예: 주인이 없어 보였다, 악당 것이라 들었다). 이유가 없거나, 앞에 나온 적 없는 물건·지식·설정(작동법에 없는 "오류" 등)을 끌어와 근거로 쓰면 불통과.'
	},
	{
		id: 'N4',
		name: '앞 화를 기억하고 다르게 조심함',
		rule: '2~4화마다 히어로들이 앞 화 피해를 떠올리고, 이번 화에는 앞 화와 다른 방법으로 조심한 뒤 장치를 쓴다. 앞 화 일을 잊은 듯 처음처럼 쓰거나, 앞 화와 같은 이유로 다시 속으면 불통과.'
	},
	{
		id: 'N5',
		name: '장치 하나, 작동법 밖의 일 없음',
		rule: '이야기 전체에서 장치는 하나뿐이고 작동법에 적힌 일만 한다. 다른 물건이 장치처럼 힘을 쓰거나, 작동법에 없는 부작용·새 규칙(번진다, 튄다, 기계가 멈춘다 등)이 나오면 불통과.'
	},
	{
		id: 'N6',
		name: '5화 결말이 한 번에 이해됨',
		rule: '5화 방 8 에서 최종 보스가 정체와 원하는 것(히어로들이 장치를 쓸 때마다 얻은 것)을 밝히고, before_battle 에서 히어로들이 장치를 거절하고 정답 행동을 한다. win 에서 보스가 무너지는 이유가 그 정답 행동과 작동법으로 바로 이해된다. 무너지는 이유가 없거나, 작동법과 상관없는 힘으로 무너지면 불통과.'
	},
	{
		id: 'N7',
		name: '누가 누구인지 헷갈리지 않음',
		rule: '각 화에서 등장인물(NPC·일반 보스·피해자·적 무리)이 누구이고 왜 거기 있는지 헷갈리지 않는다. 같은 무기·호칭의 적이 둘 이상 섞여 누가 공격하는지 모르거나, 앞에 나온 적 없는 사람이 갑자기 중요한 일을 하면 불통과.'
	}
] as const;

export type NetshortJudgeResult = { id: string; name: string; pass: boolean; quote: string; reason: string; quote_found?: boolean };

export function buildNetshortJudgePrompt(story: NetshortStory, picked: PickedSeeds): string {
	const items = NETSHORT_JUDGE_ITEMS.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n');
	const d = picked.device;
	return `당신은 게임 스토리 검수자입니다. 아래 5화짜리 이야기가 각 항목을 지키는지 채점합니다.
기준은 "처음 읽는 사람이 추론 없이 한 번에 이해하고, 앞뒤가 맞는가" 입니다.

# 채점 방법
- 항목마다 pass(true/false) 로 답한다. 애매하면 불통과로 본다
- 불통과면 quote 에 문제가 되는 문장을 이야기 원문에서 **한 글자도 바꾸지 말고** 그대로 인용한다 (한 문장 또는 그 일부)
- reason 에 무엇이 문제인지 한 문장으로 쓴다
- "좋은가?"가 아니라 "어긋나는 문장이 있는가?"를 찾는다

# 항목
${items}

# 장치 (사람이 정한 것)
- 장치: ${d.object}
- 작동법: ${d.rule}
- 보이는 결과: ${d.effect}
- 넘기는 피해: ${d.harm}
- 1~4화 행동: ${d.wrong_action} / 5화 정답 행동: ${d.right_action}

# 이야기
\`\`\`json
${JSON.stringify(story, null, 2)}
\`\`\``;
}

export const netshortJudgeTool = {
	type: 'function',
	function: {
		name: 'judge_netshort',
		description: '이야기를 항목별로 채점합니다.',
		parameters: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', enum: NETSHORT_JUDGE_ITEMS.map((i) => i.id) },
							pass: { type: 'boolean' },
							quote: { type: 'string', description: '불통과일 때 원문 그대로 인용. 통과면 빈 문자열.' },
							reason: { type: 'string' }
						},
						required: ['id', 'pass', 'quote', 'reason']
					}
				}
			},
			required: ['results']
		}
	}
};

/** Gemini 답을 항목 순서대로 정리. 빠진 항목은 불통과, 인용은 원문에 있는지 대조 */
export function readNetshortJudge(out: unknown, story: NetshortStory): NetshortJudgeResult[] {
	const raw = JSON.stringify(story);
	const got = ((out as { results?: unknown[] })?.results ?? []) as Partial<NetshortJudgeResult>[];
	return NETSHORT_JUDGE_ITEMS.map(({ id, name }) => {
		const r = got.find((x) => x?.id === id);
		if (!r) return { id, name, pass: false, quote: '', reason: '채점 결과 없음' };
		const pass = r.pass === true;
		const quote = String(r.quote ?? '');
		return { id, name, pass, quote, reason: String(r.reason ?? ''), ...(!pass && quote ? { quote_found: raw.includes(JSON.stringify(quote).slice(1, -1)) } : {}) };
	});
}

/** story.md 끝에 붙일 채점 결과 */
export function netshortJudgeMarkdown(results: NetshortJudgeResult[]): string {
	const lines = ['', '---', '', `## 채점 (${results.filter((r) => r.pass).length}/${results.length} 통과)`, ''];
	for (const r of results)
		lines.push(
			r.pass
				? `- ✅ ${r.id} ${r.name}`
				: `- ❌ ${r.id} ${r.name} — ${r.reason}${r.quote ? `\n  > ${r.quote}${r.quote_found === false ? ' _(인용이 원문에 없음)_' : ''}` : ''}`
		);
	return lines.join('\n') + '\n';
}
