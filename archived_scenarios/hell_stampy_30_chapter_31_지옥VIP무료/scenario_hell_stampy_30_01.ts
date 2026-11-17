export const scenario_hell_stampy_30_01 = {
	"scenario_id": "hell_stampy_30_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 용암과 서류 더미가 들끓는 지옥 관문 입구."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "핫핑크 통행권만 있으면 무료 VIP 입장이라니, 완전히 이득인데?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "속지 마! 도장을 받을수록 어마어마한 연체 수수료가 청구된다고!"
					},
					"speaker": "ash",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…웬 서류 더미 속 영혼이 소리를 지르네."
					}
				},
				{
					"content": {
						"korean": "구석 반납 창구에 'VIP 통행권 즉시 반납 시 수수료 0원'이라고 작게 쓰여 있긴 하네."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "그래, 바로 그거야! 지금 통행권을 반납해야 살 수 있어!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "공짜 VIP 입장권을 마다하고 반납할 이유가 없지. 무시하고 전진하자."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "통로 양옆으로 억만 골드 청구서가 바람에 날려 다닌다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "제발 내 말 좀 들어! 도장을 찍을 때마다 영혼 압류 계약이 자동 승인된다고!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…뼛속까지 으스스한 기분이 드는군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마스코트 스탬피는 검문소 도장만 모으면 만사형통이라 했어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그 귀여운 얼굴에 속지 마! 그 녀석이 지옥 관청의 악마라고!"
					},
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "억울한 영혼의 헛소리일 뿐이다. 당당히 관문 도장을 받으러 가자."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 관문 방화벽 앞, 용암 열기가 뿜어져 나온다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…피부까지 바짝 마르는 열기네."
					},
					"speaker": "character_3"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "검문관의 도장이 통행권에 찍히는 순간 진짜 지옥 행정이 시작돼!"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 경고를 하든 통행권을 제시해서 도장을 꼭 받아낼 거다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "으아악! 도장에 미쳐서 제 발로 함정으로 들어가는구나!"
					},
					"speaker": "ash",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "검문소 바로 앞. 짙은 핫핑크빛 인주 연기가 자욱하다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…머리가 핑 도는 매캐한 냄새야."
					},
					"speaker": "character_4"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기 검문관이 보인다. 빨리 통행권을 보여주고 첫 도장을 받자."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "결국 내 말을 귓등으로도 안 듣는군… 나중에 후회해도 늦었어!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "부조리한 지옥 관청이라도 VIP 혜택으로 전부 뚫어주겠어."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "수수료 청구서에 압사당하기 싫다면 순순히 통행권을 포기해라!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이까짓 검문소에서 무너질 순 없다. 다시 도전하겠다!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "핫핑크 마젠타 인주 자국이 섬뜩하게 흘러내리는 관문 검문소."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "멈춰라! 이 핫핑크 통행권을 내밀며 입장을 요구하는 멍청이가 또 있군."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 스탬피에게 받은 무료 VIP 통행권 소지자다! 당장 도장을 찍어라!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "경고하는데, 내 도장이 찍히는 순간 연체 수수료 조항이 발동한다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말이 길다! 검문관 따위 실력으로 누르고 도장을 가져가겠다!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "제 발로 영혼 압류의 길을 걷겠다면… 어디 실력부터 검증해보자!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 제법이구나. 약조대로 핫핑크 통행권에 입장 도장을 찍어주마."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋았어! 첫 번째 승인 도장을 획득했다! 다음 서류실로 이동하자!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 그 도장이 너희 목을 죌 첫 번째 직인이라는 것도 모르고!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "관문은 열렸지만, 통행권에 찍힌 핫핑크 도장이 기괴하게 번져나갔다."
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 용암과 연체 청구서 서류 더미가 폭발하는 지옥 관청 대지.",
			"친절한 마스코트 스탬피는 핫핑크 VIP 통행권을 건네며 미소를 지었다.",
			"공짜 혜택에 혹해 발을 들였지만, 이곳은 모든 도장이 채무가 되는 지옥이다.",
			"영혼이 압류되기 전, 첫 번째 관문 검문소를 통과해야 한다."
		]
	}
} as const;
