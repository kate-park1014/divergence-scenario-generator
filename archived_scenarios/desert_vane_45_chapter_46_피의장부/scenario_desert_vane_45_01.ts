export const scenario_desert_vane_45_01 = {
	"scenario_id": "desert_vane_45_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "오아시스 입구 주점. 사막의 독한 술 냄새와 피비린내 속에 악당들이 득실거린다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "사막을 탈출하려면 신분 세탁 통행증이 필요해. 피의 채무를 청산해야 해."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kemet",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "크하핫! 독한 술 한 잔 더 가져와! 내가 왜 빚을 갚아!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "테이블 구석에 피 묻은 가시 모양 조항 문자가 스크래치로 깊게 깎여 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "으윽… 술이 왜 이렇게 취하지… 내 손가락에 금반지가…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "케메트가 정신을 잃었어. 그가 끼고 있던 피 묻은 금반지를 빼내야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 금반지로 남의 혈서를 도용해 제출하면 통행증을 교환받을 수 있어."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라. 다른 자의 혈서로 인장을 찍어 신분증을 세탁하려는 건가?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "통행증을 얻을 수 있다면 상관없어. 인장을 찍겠다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "함부로 인장을 찍는 자는 그 영혼마저 흑요석 장부에 묶이게 될 거다."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "경고는 충분히 했다. 빼앗은 혈서의 대가는 머지않아 목숨으로 치르게 될 테니."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "up",
					"speaker": "random_boss",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"content": {
						"korean": "그가 떠난 주점 테이블 위에는 보랏빛 연기가 나는 시가꽁초가 타오르고 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "케메트의 인장이 찍힌 통행증을 받아냈어. 이제 돌이킬 수 없어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "규율을 어기고 남의 혈서로 서약을 조작한 죄, 여기서 뼈를 흑요석으로 만들어주마!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 통행증을 가지고 오아시스를 빠져나가겠다! 막아서면 베어버리겠다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_4"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크악… 남의 피로 빚을 넘겼을 뿐… 너 또한 결코 사막을 탈출하지 못할 것이다…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "통행증을 얻어냈어. 하지만 이게 정말 끝일까."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "핏빛 통행증 뒤로 더 깊은 흑요석의 장부가 기다리고 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "헛된 몸부림이었군. 네 뼈도 흑요석 결정이 되어 영원히 장부에 박힐 것이다!"
					},
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 멈출 수 없어… 다시 일어서야 해."
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"오아시스의 물을 마신 자는 모두 채무자가 된다.",
			"기한 내에 빚을 갚지 못하면 뼈가 흑요석 결정으로 변해 장부에 묶인다.",
			"살아남기 위해서는 남의 피를 바쳐서라도 신분을 세탁해야 한다.",
			"독한 술 냄새가 가득한 주점에서, 첫 번째 배신의 서약이 시작된다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
