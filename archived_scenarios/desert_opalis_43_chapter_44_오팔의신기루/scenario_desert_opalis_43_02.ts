export const scenario_desert_opalis_43_02 = {
	"scenario_id": "desert_opalis_43_02",
	"order": 2,
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
			"거친 모래폭풍이 협곡의 들쑥날쑥한 바위를 깎아내리고 있었다.",
			"사냥꾼 듄은 바람을 가르며 탐험대를 깊은 골짜기로 이끌었다.",
			"오아시스로 향하는 길목마다 오래된 경고의 흔적이 흩어져 있었다.",
			"하지만 진실로 가는 통로는 이미 모래에 덮여가고 있었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "여기부터는 모래폭풍 협곡이다. 바람이 뼈를 깎는 곳이지."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "바람 소리가 마치 비명 같아."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스로 가려면 이 협곡을 반드시 넘어야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심해라. 장치를 지키는 파수꾼이 길을 막고 있을 테니."
					},
					"emotion": "base",
					"speaker": "dune"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "바위 틈에서 오팔빛 모래 가루가 날리는군."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 속에 붉은 글씨가 새겨진 오래된 종이가 묻혀 있어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…딸을 위한 모래시계는 영원히 멈추지 않는다?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "불길한 문구로군. 모래시계에 얽힌 비극이 있는 건가."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기 거대한 톱니바퀴 유적이 가로막고 있다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "톱니바퀴 틈새마다 부서진 칼날 조각들이 걸려 있어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "살기가 채 가시지 않았어."
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오아시스 장치를 멈추려던 자들이 파수꾼에게 당한 모양이군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래도 우리는 전진해야 한다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 앞이 협곡 중앙의 제단이다. 폭풍이 가장 거센 곳이지."
					},
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "제단 주변에 낯익은 가문의 문양이 긁혀 있네."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "파수꾼의 검기가 느껴진다. 더 이상 듄의 안내도 받을 수 없어."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "나는 여기까지다. 무사히 돌아오길 빌지."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "협곡 중앙에 다아서자 거대 자의 기운이 모래바람을 찢고 나타난다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 외지인들이여, 오아시스 장치에 힘을 보태지 마라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "성녀를 구하려면 제단에 모래를 바쳐야 해. 물러서라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 하는 행위가 무엇을 불러올지 모르는가! 칼을 뽑아라!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "강렬한 일격에 {random_boss}가 무릎을 꿇는다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가… 사막 전체를 절망에 빠뜨리고 있다…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "파수꾼을 제압하고 협곡 제단에 오팔 모래주머니를 바쳤다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단 구석에서 혈석으로 쓰인 오팔빛 모래 편지를 수습했다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "파수꾼의 경고가 마음에 걸리지만, 이제 돌아갈 수 없다."
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "매서운 모래바람과 검기에 밀려 파티가 쓰러진다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "경고를 무시한 대가다. 당장 돌아서라."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "여기서 물러설 수는 없어… 다시 일어서야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
