export const scenario_forest_scenario_01 = {
	scenario_id: 'forest_scenario_01_intro',
	order: 1,
	act: 'intro',
	theme: 'forest',
	location: '숲 외곽 마을. 하룻밤 사이 포자에 잠식됐다.',
	entry_context: '게임 시작. 주인공, 자고 일어나니 마을이 사라져 있었다.',
	exit_hook: '카인이 주인공을 수호대에 입대시킨다. "네 복수, 내가 도와주지."',
	core_event: '마을이 포자에 잠식된다. 살아남은 주인공, 카인을 만나 수호대에 입대한다.',
	boss: {
		pool_id: 'ancient_treant',
		role_in_story: '마을 잠식의 끝자락에 남아있는 포자 군체의 핵.',
		defeated_line: '…너희는 모른다. 진짜 적이 누군지.'
	},
	fixed: {
		room_count: 15,
		boss_at_room: 15
	},
	actors: {
		lumina: {
			id: 'mon_7b56ecc3-abc6-4aa9-a0aa-ed83ce4627e7',
			name: {
				korean: '루미나',
				english: 'Lumina',
				japanese: 'ルミナ',
				chinese: '露米娜',
				french: 'Lumina',
				spanish: 'Lumina',
				vietnamese: 'Lumina',
				thai: 'ลูมินา',
				hindi: 'लुमिना'
			},
			description: 'A Forest Fairy with yellow hair, she looks young',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a91acfe-f485-4fd9-4d9c-a6b1dd604200/public',
			battle_sprite_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/090c84cb-bcc2-4dec-a8cf-6ba8538b9700/public',
			attack_sprite_url: '',
			role: {
				type: ''
			}
		},
		kain: {
			id: 'mon_7e2a67da-86f4-413e-8dc3-1523572274b8',
			name: {
				korean: '카인',
				english: 'Kain',
				japanese: 'カイン',
				chinese: '凯恩',
				french: 'Kaïn',
				spanish: 'Kain',
				vietnamese: 'Kain',
				thai: 'เคน',
				hindi: 'केन'
			},
			description: '',
			face_image_url:
				'https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a91acfe-f485-4fd9-4d9c-a6b1dd604200/public',
			battle_sprite_url: '',
			attack_sprite_url: '',
			role: {
				type: ''
			}
		}
	},
	prologue: {
		korean: [
			'한때 평화롭던 숲 외곽 마을, 리엔.',
			'포자 존재들은 늘 숲 안쪽에 머물렀고, 인간의 영역을 침범하지 않았다.',
			'그러나 어느 날 밤 — 경고도 없이, 이유도 없이.',
			'마을 전체가 하룻밤 사이에 사라졌다.',
			'살아남은 자는 단 하나. 그리고 복수가 시작된다.'
		]
	},
	rooms: [
		{
			id: 1,
			dialogue: [
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '엄마? 아버지?'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '마을이… 없어졌다. 하룻밤 사이에 전부.'
					},
					emotion: 'sad'
				}
			]
		},
		{
			id: 3,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'lumina',
					duration_ms: 500,
					spot: [2, 3]
				},
				{
					type: 'speech',
					speaker: 'lumina',
					content: {
						korean: '살아있어! 나만 살아남은 줄 알았어!'
					},
					emotion: 'happy'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '사람들은 다 어디 간 거야.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'lumina',
					content: {
						korean: '포자에 잠식되면 시체가 안 남아. 숲이 전부 가져가.'
					},
					emotion: 'sad'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '….'
					},
					emotion: 'sad'
				}
			]
		},
		{
			id: 4
		},
		{
			id: 5,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'lumina',
					duration_ms: 400,
					spot: [2, 3]
				},
				{
					type: 'speech',
					speaker: 'narrator',
					content: {
						korean: '포자들은 주인공을 그냥 지나쳤다. 마을 사람들을 전부 잠식했으면서.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '방금 그 포자들 — 나한테는 안 덤볐어.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'lumina',
					content: {
						korean: '…진짜네. 그냥 지나쳤어.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '마을 사람들은 다 잠식했으면서. 왜 나는.'
					},
					emotion: 'base'
				}
			]
		},
		{
			id: 6
		},
		{
			id: 7,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'lumina',
					duration_ms: 400,
					spot: [2, 3]
				},
				{
					type: 'speech',
					speaker: 'lumina',
					content: {
						korean: '수호대가 오고 있을 거야. 연기 봤을 거야.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '수호대면 포자 잡는 방법을 알겠지.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'lumina',
					content: {
						korean: '…조심해. 수호대가 전부 좋은 사람은 아니야.'
					},
					emotion: 'sad'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '지금 그게 중요해?'
					},
					emotion: 'angry'
				}
			]
		},
		{
			id: 8
		},
		{
			id: 9,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'kain',
					duration_ms: 600,
					spot: [4, 3]
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '살아있었군. 대단해.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '당신이 수호대 대장?'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '카인이야. 여기 — 리엔 마을이지? 어젯밤에 출발했는데 이렇게 됐네.'
					},
					emotion: 'sad'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '…우리 마을 이름을 알아?'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '위험 지역은 전부 파악하고 있어. 늦어서 미안해.'
					},
					emotion: 'sad'
				}
			]
		},
		{
			id: 10,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'kain',
					duration_ms: 500,
					spot: [4, 3]
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '수호대에 들어올 생각 있어?'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_1',
					content: {
						korean: '복수하고 싶어.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'character_2',
					content: {
						korean: '저 포자 존재들한테.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'character_3',
					content: {
						korean: '방법을 알고 싶어.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_4',
					content: {
						korean: '혼자는 힘드니까.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '좋아. 내 밑에서 배워.'
					},
					emotion: 'happy'
				}
			]
		},
		{
			id: 11
		},
		{
			id: 12
		},
		{
			id: 13
		},
		{
			id: 14,
			dialogue: [
				{
					type: 'direction',
					action: 'enter',
					speaker: 'kain',
					duration_ms: 500,
					spot: [4, 3]
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '저기야. 저 핵을 부수면 이 구역 포자가 전부 사라져.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '…반드시 쓰러뜨린다.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '네 복수, 내가 도와주지.'
					},
					emotion: 'happy'
				},
				{
					type: 'direction',
					action: 'exit',
					speaker: 'kain',
					duration_ms: 400
				}
			]
		},
		{
			id: 15,
			dialogue: [
				{
					type: 'speech',
					speaker: 'ancient_treant',
					content: {
						korean: '…침입자. 숲이 너희를 거부한다.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '비켜. 우린 포자를 막으러 온 거야.'
					},
					emotion: 'angry'
				},
				{
					type: 'speech',
					speaker: 'ancient_treant',
					content: {
						korean: '막는다고. …웃기는 소리.'
					},
					emotion: 'angry'
				}
			],
			win_dialogue: [
				{
					type: 'speech',
					speaker: 'ancient_treant',
					content: {
						korean: '…너희는 모른다. 진짜 적이 누군지.'
					},
					emotion: 'sad'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '무슨 소리야.'
					},
					emotion: 'base'
				},
				{
					type: 'direction',
					action: 'enter',
					speaker: 'kain',
					duration_ms: 500,
					spot: [4, 3]
				},
				{
					type: 'speech',
					speaker: 'kain',
					content: {
						korean: '잘 했어. 다음으로 이동한다.'
					},
					emotion: 'happy'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '…진짜 적이 누구지.'
					},
					emotion: 'base'
				}
			],
			lose_dialogue: [
				{
					type: 'speech',
					speaker: 'ancient_treant',
					content: {
						korean: '숲은 약한 자를 받아들이지 않는다.'
					},
					emotion: 'base'
				},
				{
					type: 'speech',
					speaker: 'character_any',
					content: {
						korean: '…다시 온다.'
					},
					emotion: 'angry'
				}
			]
		}
	]
};
