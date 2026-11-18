export const scenario_hell_stampy_30_02 = {
	"scenario_id": "hell_stampy_30_02",
	"order": 2,
	"random_boss_title": {
		"korean": "사막 약탈자"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"이승으로 돌아가는 길은 짙은 검은 연기로 가득 차 있었다.",
			"발목에 채워진 쇠사슬은 걸음을 옮길 때마다 차갑게 옥죄어 왔다.",
			"영혼의 묶임을 풀 단서를 찾기 위해, 탐험대는 골짜기 깊은 곳으로 향한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "검은 연기가 뿜어져 나오는 골짜기 입구에 도달했다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 이 골짜기에서 물건을 파는 상인 브림일세. 연기 속에 웬 사슬을 차고 서 있나?"
					},
					"speaker": "brim",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "안내 정령이 찍어 준 무료 도장 때문에 발목에 영혼의 사슬이 묶였소."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아, 그 도장? 안내 정령 님은 길 잃은 이들을 돕는 선량한 분이야. 무료 도장은 순수한 선의로 찍어 준 거니 안심하게나."
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…말은 고마운데 발목이 너무 묵직해."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바위 그늘 아래에서 발목에 찍힌 도장 자국을 자세히 살핀다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "도장 뒤쪽에 빽빽하게 적힌 아주 작은 글씨들이 보여."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "글씨라고? 그냥 도장 문양의 일부겠지. 정령 님이 나쁜 의도를 가졌을 리 없네."
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "글씨가 너무 작아서 무슨 내용인지는 차차 파악해야겠소."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…보면 볼수록 스산한 기분이 들어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "brim",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 들어가면 정령 님을 숭배하는 거친 무리가 있네. 난 여기까지만 안내하겠네."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길을 알려주어 고맙소. 우리는 정면으로 나아가겠소."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…연기 때문에 앞이 제대로 안 보여."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람을 타고 핫핑크색 종이 조각 하나가 바닥에 떨어진다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 화려한 종이 조각은 뭐지? 거친 고함 소리가 짙은 연기 너머에서 들린다."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…누군가 위에서 우리를 노려보고 있어."
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 너희가 계약의 진짜 무게를 알기나 하느냐…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "계약이라고? 안내 정령이 찍어 준 도장에 숨겨진 진실을 찾아내고 말겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 자의 품에서 핫핑크색 서류 조각들이 흩날려 해골 통로 방향으로 이어졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이 서류 조각들, 해골 통로 쪽으로 연결되고 있어."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "정령 님의 호의를 짓밟는 자들에게 자비는 없다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 꺾일 수는 없다. 다시 일어서자!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "붉은 깃발을 든 정체 모를 자가 무기를 쥐고 길목을 막아선다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "은혜도 모르는 놈들! 안내 정령 님의 무료 도장을 의심하다니 내 용납하지 않겠다!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 영혼이 묶인 이유를 밝혀야 한다. 길을 비켜라!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…말이 통할 상대가 아니야."
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
