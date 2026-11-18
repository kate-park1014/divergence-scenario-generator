export const scenario_desert_kaelith_44_02 = {
	"scenario_id": "desert_kaelith_44_02",
	"order": 2,
	"random_boss_title": {
		"korean": "유적 파수꾼"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"탈출로를 막아선 이글거리는 열기.",
			"열기를 식힐 방법을 찾기 위해 말라붙은 오아시스로 향한다.",
			"오아시스 밑바닥에는 뜻밖의 단서가 기다리고 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "말라붙은 오아시스 입구. 하얗게 갈라진 바닥에서 뜨거운 김이 올라온다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"direction": "up",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "dune",
					"content": {
						"korean": "저는 이곳 오아시스 순찰자 듄입니다. 물을 찾으러 오셨습니까?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "탈출로의 열기를 줄일 방법을 찾고 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "친절한 상인 카엘리스가 주민들에게 유리 장신구를 주고 간 뒤 오아시스가 바짝 말라붙었습니다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨이 턱턱 막히는 열기야."
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
					"content": {
						"korean": "오아시스 중앙의 말라붙은 웅덩이 바닥이 하얗게 굳어 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "dune",
					"type": "direction",
					"direction": "up",
					"action": "enter"
				},
				{
					"content": {
						"korean": "카엘리스가 지나간 자리에 오렌지빛 유리 칼날 파편들이 흩어져 있었습니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "유리 장신구와 칼날 파편이 오아시스의 열기를 뿜어내고 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…바닥에서 이상한 온기가 느껴져."
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"direction": "up",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "유적 파수꾼이 깊은 곳을 지키고 있습니다. 열기를 건드리면 오아시스가 완전히 사멸한다더군요."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "열기의 근원을 확인하기 전까지는 돌아갈 수 없다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "…발밑의 모래가 끓어오르고 있어."
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "유적 깊은 곳에서 거대한 열기의 기척이 길을 막아선다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누군가 강력한 열기를 품은 채 우리를 노려보고 있다."
					}
				},
				{
					"content": {
						"korean": "…살갗이 타들어가는 기분이야."
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "말라붙은 오아시스 중앙, 유적 파수꾼이 무기를 쥔 채 탐험대를 가로막는다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "열기를 가져가려는 자냐. 이 행위는 오아시스를 완전히 말려 죽일 뿐이다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "열기의 원인을 밝혀 탈출로를 열어야 한다. 길을 비켜라!"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…더는 물러설 곳도 없어."
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "유리 칼날의 열기를 함부로 다루면… 사막 전체가 타오를 것이다…"
					}
				},
				{
					"content": {
						"korean": "파수꾼이 지키던 장소에서 오렌지빛 유리 칼날을 발견했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오렌지빛 유리 칼날에서 시작된 뜨거운 열기가 바람의 골짜기 방향으로 이어지고 있다."
					}
				},
				{
					"direction": "down",
					"speaker": "dune",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "dune",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바람의 골짜기 쪽에서 더 거센 열풍이 불어오고 있습니다. 소문을 쫓아 그곳으로 가셔야 합니다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아가라! 오아시스의 남아있는 숨통까지 끊을 셈이냐!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…열기에 굴복할 순 없다. 다시 지혜를 모아 도전하겠다."
					}
				}
			]
		}
	]
} as const;
