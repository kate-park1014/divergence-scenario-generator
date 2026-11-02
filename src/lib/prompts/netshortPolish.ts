// 넷쇼트 대본 다듬기: 다 쓴 한 화를 따로 읽고, 뜻이 안 통하거나 앞뒤 줄과 어긋나는 문장만 찾아 고친다.
// 쓰면서 검사하는 것보다 쓴 것을 따로 읽을 때 더 잘 찾는다. 줄거리·형식은 건드리지 않는다 (형식은 코드 검사가 맡음).
// 줄 주소·적용은 scenarioReview.ts 의 listChapter / applyEdits 를 쓴다.

export type PolishFix = {
	room: number; // prologue·epilogue 는 0
	block: 'dialogue' | 'win_dialogue' | 'lose_dialogue' | 'prologue' | 'epilogue';
	index: number;
	quote: string;
	problem: string;
	text: string;
};

export function buildPolishPrompt(listing: string): string {
	return `당신은 한국어 게임 대본 교정자입니다. 아래 한 화 대본에서 **읽는 사람이 걸려 넘어지는 문장만** 찾아 고칩니다.

# 찾을 것
- 뜻이 안 통하는 말 조합: 어울리지 않는 꾸밈말·동사 (예: 소리 안 나는 물건에 "시끄러운", 먼지가 "차오른다")
- 바로 앞뒤 줄과 어긋나는 문장: 앞 줄에서 불이 꺼졌는데 다음 줄에 조명 아래라고 함, 방금 쓰러진 사람이 멀쩡히 걸어옴 등
- 꼬인 문장: 누가 누구에게 무엇을 했는지 헷갈림, 같은 이름이 한 문장에서 두 역할을 함
- 꾸밈말을 겹겹이 쌓아 무슨 장면인지 안 보이는 문장

# 찾지 않을 것
- 취향 차이, 더 멋지게 쓸 수 있는 문장 (뜻이 통하면 그대로 둔다)
- 줄거리·사건·인물의 행동 (바꾸지 않는다)
- 연출 줄 (enter 등)

# 고치는 방법
- 그 줄만 고친다. 뜻·사건·등장 이름·장치 이름은 그대로 두고, 가장 적게 바꿔서 자연스럽게
- 화자와 말투(존댓말·반말, "~다"로 끝나는 지문체)는 원래 줄 그대로
- 길이는 원래와 비슷하게
- quote 에는 고칠 줄의 글을 **한 글자도 바꾸지 말고** 그대로 적는다. quote·text 에는 줄 주소와 화자 표시("narrator(나레이션): ")를 빼고 글만 쓴다
- 고칠 줄이 없으면 빈 목록. 많아도 8줄까지, 가장 걸리는 것부터

# 대본 (줄 주소: [방 N 칸 #순서], prologue·epilogue 는 방 0)
${listing}`;
}

export const polishTool = {
	type: 'function',
	function: {
		name: 'polish_lines',
		description: '뜻이 안 통하거나 앞뒤와 어긋나는 줄만 고칩니다.',
		parameters: {
			type: 'object',
			properties: {
				fixes: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							room: { type: 'integer', description: '방 번호 (prologue·epilogue 는 0)' },
							block: { type: 'string', enum: ['dialogue', 'win_dialogue', 'lose_dialogue', 'prologue', 'epilogue'] },
							index: { type: 'integer' },
							quote: { type: 'string', description: '고칠 줄의 원래 글 그대로' },
							problem: { type: 'string', description: '무엇이 걸리는지 한 문장' },
							text: { type: 'string', description: '고친 글 (그 줄 전체)' }
						},
						required: ['room', 'block', 'index', 'quote', 'problem', 'text']
					}
				}
			},
			required: ['fixes']
		}
	}
};
