export const scenario_hell_amnion_38_01 = {
	"scenario_id": "hell_amnion_38_01",
	"order": 1,
	"random_boss_title": {
		"korean": "사냥꾼"
	},
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"동료가 지옥의 독기에 중독되어 숨이 끊어져 간다.",
			"살릴 수 있는 유일한 희망은 영혼들을 돌본다는 성녀의 고치뿐.",
			"탐험대는 구원을 찾아 유황 연기 자욱한 골짜기로 들어선다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "매캐한 유황 연기 사이로 낯선 지옥 탐험가가 모습을 드러낸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저는 지옥을 탐사하는 탐험가 마라라고 합니다. 독기 가득한 이곳엔 어쩐 일인가요?"
					},
					"type": "speech",
					"speaker": "mara"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "독기에 쓰러진 동료를 살리려면 성녀가 잠든 고치를 찾아야 한다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람을 타고 달콤하면서도 썩은 향기가 풍겨와."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아까부터 기묘한 향기가 난다. 성녀가 있는 곳에서 나는 것인가?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맞아요. 그 달콤하고 썩은 향기를 따라 골짜기 안쪽으로 들어가면 고치가 나와요."
					},
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…향기라기엔 구역질이 나는데."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 앞은 유황 연기가 더 짙어져 위험해요. 난 여기까지 안내하겠어요."
					},
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 알려줘서 고맙다. 나머지는 우리가 가겠다."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"speaker": "mara",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…연기가 점점 빽빽해지고 있어."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "짙은 유황 연기 속에서 묵직한 발소리가 다가온다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누군가 앞을 막아서고 있다. 전투를 준비해라!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…날카로운 기척이야."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "쿨럭… 경고했을 텐데… 죽음을 자초하는구나…"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "달콤하고 썩은 향기를 따라가 고치 껍질을 찢고 성녀를 구하겠다!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사냥꾼이 쓰러지자, 탐험대는 구원의 고치가 숨겨진 검은 용암 절벽으로 향했다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 가선 안 된다! 독기가 가득한 골짜기로 들어서면 목숨을 잃을 뿐이다!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "동료를 살려야 한다. 비켜라!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더 이상 지체할 시간 없어!"
					},
					"speaker": "character_1"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "독기에 굴복하기 전에 당장 이곳을 떠나라!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…동료를 위해 이대로 물러설 순 없다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
