import type { StoryArc } from '$lib/types';
import { DECEIVE_MODE_LABEL } from './storyarcGen';

// 재작업된 storyarc 를 채점하는 프롬프트. 코드로 검사하지 못하는 "읽고 판단해야 하는" 항목만 본다.
// 각 항목은 통과/불통과로 답하고, 불통과면 근거 문장을 원문 그대로 인용한다 (인용은 코드로 원문 대조).

export const JUDGE_ITEMS = [
	{
		id: 'J1',
		name: '인물 편 유지',
		rule: '보스는 1~5화 내내 틀린 쪽(1~4화 그 화 행동 권유, 5화 right_action 저지)이다. 1~4화 일반 보스는 그 화 random_boss_side 대로 행동한다: warn 이면 주인공의 그 화 행동(story_spine 의 protagonist_action)을 경고하며 막고, ally 면 최종보스 편으로 주인공의 의심·전진을 막으며 그 화 행동을 말리지 않는다. random_boss_side 가 없으면 ally 로 본다. (ally 일반 보스가 주인공의 전진·의심을 막아서는 것은 설계대로라 통과) NPC 는 마음을 바꿔도 되지만, 바꾸는 화의 summary 에 그 이유가 되는 장면(무엇을 보거나 겪고 바꾸는지)이 있어야 하고 바꾼 뒤에는 그 편을 유지한다. 보스가 편을 바꾸거나, NPC 가 이유 장면 없이 편을 바꾸면 불통과.'
	},
	{
		id: 'J2',
		name: '정답 행동 실패 장면 없음',
		rule: '1~4화에서 누군가 right_action 을 시도하다 실패하거나 벌을 받는 장면이 없다. 있으면 정답이 위험해 보이므로 불통과. (정답을 말로 권하기만 하는 것은 통과)'
	},
	{
		id: 'J3',
		name: '결말이 장면',
		rule: '5화 summary 의 결과가 눈에 보이는 장면으로 끝난다. "평화가 돌아온다", "새로운 시대", "모든 것이 끝났다"처럼 추상적인 결과로 끝나면 불통과.'
	},
	{
		id: 'J4',
		name: '화당 새 미스터리 하나',
		rule: '2~4화 summary 마다 새 의문·새 비밀(미스터리)이 한 가지 이하다. 경고·권유·일반 보스의 막기·나쁜 결과가 커지는 것·NPC 등장은 새 미스터리로 세지 않는다. 1화는 소개 화라 통과. 서로 다른 새 의문·비밀이 한 화에 두 개 이상일 때만 불통과.'
	},
	{
		id: 'J5',
		name: '앞 화를 이어받음',
		rule: '2~4화가 앞 화가 남긴 피해에서 출발하고, 주인공이 앞 화에서 배운 것(lesson)을 지킨다. 주인공이 앞 화에서 나쁜 결과를 낳은 행동을 다시 하거나, 앞 화에서 권한 흔적(그 화 boss_trace)을 다시 믿거나, 앞 화 일을 잊은 듯 처음 겪는 것처럼 행동하는 화가 있으면 불통과.'
	},
	{
		id: 'J6',
		name: '5화 보스가 정답에 맞섬',
		rule: '5화에서 주인공이 right_action 을 하려 하면 보스가 막아서고(빼앗기·공격·방해), 주인공이 해내면 보스가 무너진다. 보스가 정답 행동을 반기거나, 돕거나, 막지 않고 그냥 사라지면 불통과. (1~4화에 보스의 목적·정체가 드러나는 것은 괜찮다)'
	},
	{
		id: 'J7',
		name: '규칙 하나, 위험과 정답 일치',
		rule: 'world.rule 이 규칙 하나이고, 그 규칙이 wrong_action 의 결과(위험)를 설명하며, 2~4화 행동도 hidden_link 대로 이 결과를 일으키고, right_action 이 그 위험을 끝내는 행동으로 맞아떨어진다. 규칙이 여러 개이거나 서로 안 맞으면 불통과.'
	},
	{
		id: 'J8',
		name: '인물 구분',
		rule: '보스·NPC·일반 보스의 호칭과 역할이 서로 헷갈리지 않는다. 비슷한 호칭·직업 때문에 누가 누구인지 혼동될 수 있으면 불통과.'
	},
	{
		id: 'J9',
		name: '일반 보스는 매화 다른 인물',
		rule: '1~4화의 일반 보스가 화마다 다른 직업(random_boss_title)·다른 사람이고, 앞 화의 일반 보스와 이어지지 않는다. 같은 인물이 반복되는 것처럼 읽히거나 직업이 무대와 어울리지 않으면 불통과.'
	},
	{
		id: 'J12',
		name: '두 행동이 반대',
		rule: 'wrong_action 과 right_action 이 뜻이 뚜렷이 반대인 행동이라, 독자가 어느 쪽이 정답인지 바로 구분할 수 있다. 두 동사의 뜻이 비슷하거나(예: 초기화/재설정) 차이가 애매하면 불통과.'
	},
	{
		id: 'J13',
		name: '1~4화 보스는 흔적으로만',
		rule: '1~4화에서 최종보스는 얼굴·몸을 보이지 않고 그 화의 boss_trace(목소리·글자·물건, 화마다 다름)로만 드러나며, 5화에 처음 모습을 드러낸다. 1~4화에 보스가 나타나거나 다가오거나 웃는 등 모습이 보이는 장면이 있으면 불통과.'
	},
	{
		id: 'J14',
		name: '화마다 다른 상황',
		rule: '1~4화는 화마다 행동·장소·이유·대가가 다르다. 2~4화가 "더 많이·더 크게"만 반복되거나, summary 를 서로 바꿔도 말이 되면 불통과.'
	},
	{
		id: 'J15',
		name: '경고를 무시하는 이유',
		rule: 'random_boss_side 가 warn 인 화마다 일반 보스가 주인공의 그 화 행동을 경고하며 막고, 그 화 summary 에 주인공이 경고를 믿지 않는 이유(일반 보스가 자기 사정 때문에 막는 것처럼 보임, 보스 흔적·NPC 의 말이 더 그럴듯함 등)가 있다. 이유 없이 경고를 무시해 주인공이 고집만 부리는 것처럼 읽히는 화가 있으면 불통과. warn 인 화가 없으면 통과.'
	},
	{
		id: 'J16',
		name: '주인공에게 공감',
		rule: '1~4화마다 주인공의 그 화 행동이 선한 이유(사람 돕기·부탁·위기 막기·앞 화 피해 막기)이고, 그 순간 아는 것으로는 옳아 보이며, 당장 효과를 본 뒤 대가가 드러난다. 주인공이 효율·호기심·이익 때문에 하거나, 수상한 명령을 그대로 따르거나, 믿을 만한 인물(NPC)의 분명한 경고를 무시하거나, 하자마자 나쁜 일이 보이는데 계속하는 화가 있으면 불통과.'
	},
	{
		id: 'J17',
		name: '숨은 연결이 그럴듯함',
		rule: '2~4화 행동이 주인공이 보기에는 앞 화 실수와 다른 행동(오히려 바로잡는 일)처럼 보이지만, hidden_link 대로 사실은 핵심 물건에 wrong_action 을 한 것과 같은 일이라는 게 납득되고, 5화 summary 에서 그 연결이 드러난다. 겉으로도 앞 화와 같은 행동으로 보이거나, 연결이 억지스럽거나, 5화에 연결이 드러나지 않으면 불통과.'
	},
	{
		id: 'J18',
		name: '화마다 속는 방식이 다름',
		rule: '1~4화 summary 가 그 화 deceive_mode 대로 흘러간다 (방식별 흐름은 아래 "이 아크의 속는 방식"). 2~4화에 주인공이 조심하는 모습이 보인다. 2~4화가 "곤란한 사람 → 흔적의 해결책 → 이번엔 다르다며 함"의 같은 순서로 되풀이되거나, 그 화 방식과 다르게 흘러가는 화가 있으면 불통과. deceive_mode 가 없으면 통과.'
	},
	{
		id: 'J19',
		name: '한 번 읽으면 이해됨',
		rule: '처음 읽는 사람이 이 스토리아크를 한 번 읽고 화마다 누가 무엇을 왜 했고 그래서 무엇이 됐는지 설명할 수 있다. 핵심 물건이 누구나 아는 일상 물건이고, world.how 로 나쁜 결과가 왜 생기는지 납득되며, final_boss.want 로 보스가 왜 이러는지 알 수 있다. 지어낸 물건·추상 개념(빛·기운·잔상·기억 등)이 이야기를 움직이거나, 원인 설명 없이 결과만 있거나, 두 번 읽어야 이해되는 문장이 있으면 불통과.'
	},
	{
		id: 'J11',
		name: '장르가 드러남',
		rule: '스토리아크의 사건·말투·결말에서 지정된 장르(genre)가 분명히 느껴진다. 장르와 상관없는 평범한 이야기면 불통과.'
	},
	{
		id: 'J10',
		name: '예시 베끼기 없음',
		rule: '아래 "생성 프롬프트의 예시 문장"을 그대로 또는 거의 그대로 가져다 쓴 문장이 없다. 있으면 불통과.'
	}
] as const;

// 생성 프롬프트(storyarcGen.ts)에 들어 있는 예시 문장들
const PROMPT_EXAMPLES = [
	// 지금 생성 프롬프트에는 소재 있는 예시가 없음(틀만 있음). 이전 프롬프트의 예시 — 남아서 섞여 나오는지 본다
	"주인공은 눈보라 속 마을에 도착한다. 친절한 촌장이 '밤에는 등불을 끄지 마라'고 일러 준다.",
	'밤에 등불이 꺼지면 그 밤에 마을 사람 하나가 사라진다',
	'얼어붙었던 분수에서 다시 물이 솟는다',
	'꺼져 있던 거리의 간판이 하나씩 다시 켜진다',
	"합격 통지서 대신 '대기번호 47번'이 적힌 종이를 받는다",
	'3분 자기소개 면접',
	'주인공은 벌써 세 번째 같은 아침을 맞았다.',
	'Whisper Web → 위스퍼 웹'
];

export function buildStoryarcJudgePrompt(arc: StoryArc): string {
	const items = JUDGE_ITEMS.map((i) => `- ${i.id} ${i.name}: ${i.rule}`).join('\n');
	// J18 용: 이 아크에 쓰인 속는 방식의 흐름만
	const modes = [...new Set(arc.scenarioOutline.map((s) => s.deceive_mode).filter((m) => !!m))];
	const modeList = modes.length
		? modes.map((m) => `- ${m}: ${DECEIVE_MODE_LABEL[m!]}`).join('\n')
		: '(없음)';
	const data = {
		genre: arc.genre,
		stage: arc.stage,
		world: arc.world,
		story_spine: arc.story_spine,
		key_object: arc.key_object,
		wrong_action: arc.wrong_action,
		right_action: arc.right_action,
		boss_name_korean: arc.boss_name_korean,
		boss_trace: arc.boss_trace,
		final_boss: {
			surface_identity: arc.final_boss.surface_identity,
			true_identity: arc.final_boss.true_identity,
			motivation: arc.final_boss.motivation,
			want: arc.final_boss.want,
			twist: arc.final_boss.twist
		},
		npc_roles: arc.npc_roles,
		scenarioOutline: arc.scenarioOutline.map(({ order, npc, title, summary, random_boss_title, random_boss_side, deceive_mode, place, boss_trace }) => ({
			order,
			npc,
			title,
			place,
			boss_trace,
			random_boss_title,
			random_boss_side,
			deceive_mode,
			summary
		})),
		global_foreshadowing: arc.global_foreshadowing,
		act_summary: arc.act_summary
	};

	return `당신은 게임 스토리아크 검수자입니다. 아래 스토리아크가 각 항목을 지키는지 채점합니다.
이 스토리아크는 다른 AI 가 장면 대사를 만드는 입력으로 쓰입니다. 그 AI 가 추론 없이 단순하고 일관된 이야기를 쓸 수 있는지가 기준입니다.

# 채점 방법
- 항목마다 pass(true/false) 로 답한다. 애매하면 불통과로 본다
- 불통과면 quote 에 문제가 되는 문장을 스토리아크 원문에서 **한 글자도 바꾸지 말고** 그대로 인용한다 (한 문장 또는 그 일부)
- reason 에 무엇이 문제인지 한 문장으로 쓴다
- "좋은가?"가 아니라 "어긋나는 문장이 있는가?"를 찾는다

# 항목
${items}

# 이 아크의 속는 방식 (J18 용)
${modeList}

# 생성 프롬프트의 예시 문장 (J10 용)
${PROMPT_EXAMPLES.map((e) => `- ${e}`).join('\n')}

# 스토리아크
\`\`\`json
${JSON.stringify(data, null, 2)}
\`\`\``;
}

export const storyarcJudgeTool = [
	{
		type: 'function',
		function: {
			name: 'judge_storyarc',
			description: '스토리아크를 항목별로 채점합니다.',
			parameters: {
				type: 'object',
				properties: {
					results: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string', enum: JUDGE_ITEMS.map((i) => i.id) },
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
	}
];
