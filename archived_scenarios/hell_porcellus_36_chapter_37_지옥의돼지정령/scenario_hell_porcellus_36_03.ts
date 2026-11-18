export const scenario_hell_porcellus_36_03 = {
	"scenario_id": "hell_porcellus_36_03",
	"order": 3,
	"random_boss_title": {
		"korean": "지옥 흑철 대장장이"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "검은 벼랑 기둥 위, 붉은 용암 열기가 발밑에서 치솟아 오른다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "난 검은 벼랑 대장장이 드록스다. 장비를 정비하려고 벼랑에 올라왔지."
					}
				},
				{
					"content": {
						"korean": "우리는 잠긴 지옥 문을 열 방법을 찾고 있다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…열기 때문에 숨이 막히네."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "영혼 동전이 들어가서 문이 잠긴 건가. 그럼 방법은 하나뿐이야."
					}
				},
				{
					"content": {
						"korean": "저금통 바닥의 마개를 열어야 영혼 동전을 빼낼 수 있겠군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "맞다. 바닥 마개를 열고 동전을 꺼내야 잠긴 차단막도 풀릴 거다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…마개를 찾으러 가야겠어."
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "drox",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "바닥에 웬 오팔빛 금속 조각이 떨어져 있군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "오팔빛으로 영롱하게 빛나는 기묘한 금속 조각이다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…기분 나쁜 빛이야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벼랑 깊은 곳에서 거대한 망치가 바닥을 짓깨는 울림이 퍼진다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "단단한 흑철 망치를 든 기척이 전방의 길을 막아서고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…벼랑 전체가 흔들려."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "함부로 깊은 곳에 가다간 영혼을 잃게 될 거다!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저금통 마개를 열어 동전을 빼내기 전엔 물러서지 않는다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…망치의 열기가 솟구쳐."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "벼랑 아래로 떨어지기 전에 당장 돌아가라!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…단서를 얻기 전까진 포기할 수 없다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "동전을 건드린 순간 너희는 이미 위험에 빠진 거다… 조심해라."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "바닥 마개를 열어 동전을 빼내고 지옥을 벗어나겠다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "식어버린 망치 너머, 마젠타색 무지개 광채가 붉은 도박장 입구 쪽으로 흐르고 있다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"잠긴 지옥 문을 열 단서를 찾아 검은 벼랑 기둥으로 향한다.",
			"벼랑 위에서 만난 자가 저금통의 비밀을 알고 있을지도 모른다.",
			"깊은 곳으로 향할수록 험악한 흑철의 기운이 벼랑을 울린다."
		]
	}
} as const;
