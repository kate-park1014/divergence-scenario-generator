export const scenario_snowy_anya_44_04 = {
	"scenario_id": "snowy_anya_44_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈에 갇힌 옛 정착지. 잊힌 시간의 흔적.",
			"수백 년 전, 폭풍 속에 갇힌 가족들의 이야기.",
			"그리고 벽에 남겨진, 아주 작은 손자국.",
			"누구도 알아채지 못했던 아이의 비극이 깨어난다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정착지의 잔해가 눈 속에 잠겨 있었다. 매서운 바람이 모든 것을 지웠다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기도 버려진 곳인가…."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "아니. 여기, 아주 슬픈 온기가 남아있어."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭐가 보이는 거야, 인카?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아주 오래된 이야기. 아직 끝나지 않은."
					},
					"emotion": "sad",
					"speaker": "inka"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 작은 거처… 빛이 유독 따뜻하게 머물러."
					},
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 추위 속에서 따뜻함이라니…"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아마도… 무언가를 간절히 기다린 흔적 때문일 거야."
					},
					"emotion": "sad",
					"speaker": "inka"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 벽에… 손을 얹으니 전해져."
					},
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "무엇이?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아주 희미한 온기. 외로움이 너무 커서 오히려 차갑게 느껴지는."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						1
					],
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이거 봐. 여기… 작은 손자국이 있어."
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이의 손자국…?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "추위에 떨며 문을 두드렸을 거야. 가족을 부르면서…."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "…이렇게 작은 아이가, 혼자."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "침입자들. 그 작은 흔적에 무슨 의미를 찾는가."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 막아서는 이유가 뭐야?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 아이의 슬픔을… 지키고 있는 건가?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…나의 슬픔이다. 너희가 알 필요 없다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 이 영역을 더럽히려는가? 벌을 받아라."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아직 이 진실을 마주할 자격이 없다. 물러서라."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "포기하지 않아. 이 작은 손자국을… 외면할 수 없어."
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…다시 돌아온다."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 모든 것이 드러날… 운명인가."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아이의 슬픔은… 이제 편히 잠들 거야."
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 빛이… 아이를 기억하는구나."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어린아이의 잊힌 이름이 빛과 함께 되살아났다. 그러나 그 이름은, 또 다른 진실을 부르는 문이었다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
