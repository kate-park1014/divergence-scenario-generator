const dialogueEntry = {
	type: 'object',
	properties: {
		type: {
			type: 'string',
			enum: ['speech', 'direction'],
			description: 'speech: 대사 | direction: 연출'
		},
		speaker: {
			type: 'string',
			description:
				"narrator | character_any | character_1~4 | NPC이름 | boss (order 5 최종보스) | random_boss (order 1~4 중간보스, 이름/외형 묘사 금지; 이름 언급 시 '{random_boss}' 플레이스홀더 사용)"
		},
		content: {
			type: 'object',
			description: 'type이 speech일 때만 사용',
			properties: {
				korean: { type: 'string' }
			}
		},
		emotion: {
			type: 'string',
			enum: ['base', 'happy', 'sad', 'angry'],
			description: 'type이 speech일 때만 사용'
		},
		action: {
			type: 'string',
			enum: ['enter', 'exit', 'move', 'shake', 'focus'],
			description: 'type이 direction일 때만 사용'
		},
		duration_ms: {
			type: 'number',
			description: 'type이 direction일 때만 사용. 연출 지속 시간 (ms)'
		},
		spot: {
			type: 'array',
			items: { type: 'number' },
			description: 'action이 enter/move일 때만 사용. 목표 좌표 [x, y]'
		},
		direction: {
			type: 'string',
			enum: ['up', 'down', 'left', 'right'],
			description: 'action이 exit일 때만 사용. 퇴장 방향'
		}
	},
	required: ['type', 'speaker']
};

const prologueSchema = {
	type: 'object',
	properties: {
		korean: {
			type: 'array',
			items: { type: 'string' },
			description: '프롤로그 한국어 텍스트 (3~5줄)'
		}
	},
	required: ['korean']
};

const epilogueSchema = {
	type: 'object',
	properties: {
		korean: {
			type: 'array',
			items: { type: 'string' },
			description: '에필로그 한국어 텍스트 (3~5줄) — 전투 종료 후의 여운. prologue처럼 짧고 건조하게'
		}
	},
	required: ['korean']
};

const roomsSchema = {
	type: 'array',
	description: 'id: 1, 3, 5, 9, 15 순서로 5개',
	items: {
		type: 'object',
		properties: {
			id: { type: 'number' },
			dialogue: {
				type: 'array',
				description: '전투 전 대화',
				items: { $ref: '#/$defs/dialogueEntry' }
			},
			win_dialogue: {
				type: 'array',
				description: '보스 룸 전용 — 승리 시 대화',
				items: { $ref: '#/$defs/dialogueEntry' }
			},
			lose_dialogue: {
				type: 'array',
				description: '보스 룸 전용 — 패배 시 대화',
				items: { $ref: '#/$defs/dialogueEntry' }
			}
		},
		required: ['id', 'dialogue']
	}
};

export function buildScenarioTool(order: number) {
	const isFinale = order === 5;

	const properties: Record<string, unknown> = {
		prologue: prologueSchema,
		rooms: roomsSchema
	};

	if (isFinale) {
		properties.epilogue = epilogueSchema;
	}

	return {
		type: 'function',
		function: {
			name: 'generate_scenario_content',
			description: isFinale
				? '게임 시나리오의 prologue, rooms, epilogue 대화 데이터를 생성합니다.'
				: '게임 시나리오의 prologue와 rooms 대화 데이터를 생성합니다.',
			parameters: {
				type: 'object',
				properties,
				required: isFinale ? ['prologue', 'rooms', 'epilogue'] : ['prologue', 'rooms'],
				$defs: { dialogueEntry }
			}
		}
	};
}

// 하위 호환용 (order 무관하게 epilogue 없는 버전)
export const scenarioTool = buildScenarioTool(1);
