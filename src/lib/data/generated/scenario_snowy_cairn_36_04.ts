export const scenario_snowy_cairn_36_04 = {
	"scenario_id": "snowy_cairn_36_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"미로의 푸른빛은,",
			"길을 비추지 않았다.",
			"오직, 한 사람만을.",
			"의심의 틈이, 균열을 만든다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 미로. 푸른빛이 길을 흔들었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 빛… 길 안내가 아니군."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭔데?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "신의를… 채점한다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "신의? 이딴 곳에서?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 선택마다… 무게가 느껴져."
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "빛이… 한 사람에게만 머물고 있어."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "나한테는 아니네."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "누구한테?"
					},
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직은. 하지만… 명확한 의도다."
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'선택받은 자'… 룬이 말한다."
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누가 누구를?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "빛이… 당신을 인도하려 한다. 다른 이들은… 시험에 들고."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "결국 누군가 희생?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "기록은… 모호해."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 알겠어. 이 빛… 당신에게만 머물고 있어."
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나한테? 왜?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "미로는 당신을 중심으로 움직인다. 이곳은… 당신을 끌어내려는 함정."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "함정? 뭘 숨겨?"
					},
					"speaker": "character_2",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나도 몰라!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "드디어… 빛이 선택한 자가 왔군."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 꾸민 짓이야?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "푸른빛은… 진실을 비출 뿐. 너희의… 숨겨진 욕망을."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "욕망? 대체… 무슨?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들. 스스로의 의심에 무너지는군."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시… 반드시!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 탐욕이… 너희를 더 깊은 미로로 이끌 것이다."
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛은… 사라지지 않아. 다른 형태로… 다시 너희를 시험할 뿐."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끝이… 아니라고?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록이 파괴돼. 하지만… 이 빛은… 아직 남아있어."
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "푸른빛은 여전히 한 사람에게 머물렀다. 그 빛이 과연… 희망일까."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
