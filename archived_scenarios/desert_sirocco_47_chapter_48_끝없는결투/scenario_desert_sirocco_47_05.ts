export const scenario_desert_sirocco_47_05 = {
	"scenario_id": "desert_sirocco_47_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_SwordStorm_Sirocco_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "황토빛 모래 구덩이 중심. 귓가를 찢을 듯한 모래바람이 사방에서 불어온다."
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dune",
					"duration_ms": 500,
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
						"korean": "사막 입구의 길잡이로서 이 거대한 폭풍의 끝을 그냥 둘 순 없었소. 소식을 듣고 뒤쫓아왔소!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "고맙다, 듄. 사막을 휩쓰는 검기의 근원이 바로 이 구덩이 안에 있어."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…바람 소리가 꼭 날카로운 칼날 소리 같아."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "구덩이 바닥의 암벽들이 촘촘하게 찢겨 나가 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "dune",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래 언덕 입구 바위에서 봤던 그 깊은 칼자국… 역시 단순한 폭풍이 아니라 검객들의 칼날 기운이 새긴 거였어!"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "바위가 마치 수천 번 잘려 나간 것 같소. 무시무시한 기운이오."
					},
					"emotion": "sad",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…소름 돋을 정도로 칼자국이 빽빽해."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "소용돌이치는 황토 모래 사이로 짙은 모래 조각들이 모여든다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "붉은 바위 골짜기에서 흘러내리던 짙은 모래 조각들… 거대한 검객의 형상을 빚어내는 재료였구나!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모래가 점차 사람의 형체를 갖추고 있소! 난 여기까지만 동행하겠소!"
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "dune",
					"action": "exit",
					"type": "direction"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 턱 막히는 중압감이야."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "공기가 번개처럼 찌르르 떨리며 폭풍 한가운데서 푸른 빛이 요동친다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "메마른 오아시스에서 봤던 청백색 번개의 잔영… 거대한 곡도에서 뿜어져 나오는 궤적이었어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…사방에서 벼락 같은 검기가 내려꽂히고 있어."
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "승부를 받아들일 자격도 없이 발을 들였단 말이냐! 사막의 모래에 묻혀라!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…아직 무릎 꿇지 않았다. 결투의 맹세를 다시 세우겠다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막 전체를 휩쓰는 거대한 모래폭풍의 환영이 길을 가로막는다."
					}
				},
				{
					"content": {
						"korean": "나는 사막을 삼키는 폭풍! 내 칼날을 가로막는 모든 것을 베어 버리겠다!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "바람의 신전 유적에서 보았던 수천 명의 검객 그림자가 하나로 겹쳐지며, 휘몰아치던 모래폭풍이 멈춘다. 고요해진 한가운데에서 거대한 모래 검객 시로코가 곡도를 겨눈다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "...아직 승부가 나지 않았다. 다음 상대, 앞으로!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "끝나지 않은 결투를 끝내러 왔다. 거대 검객 시로코, 너의 승부를 받아들인다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…마침내 최종 결전이 시작된다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "옛 전쟁터에서 승부를 맺지 못한 채 소멸한 수천 검객… 우리는 마침표를 찍어줄 강한 상대를 갈망했다!"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "가지고 있던 결투의 깃발을 모래 구덩이에 꽂는다! 정식으로 맹세를 맺고 너희의 승부를 받아들이겠다!"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "…결투의 맹세가 이루어졌다. 승부를 받아준 검객이여, 고맙다. 이로써 우리의 집념도 마침내 마침표를 찍는구나."
					}
				},
				{
					"content": {
						"korean": "시로코가 만족한 듯 미소를 지으며 모래가 되어 바람 속에 조용히 흩어진다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 모래폭풍이 잠들어 사막 상단의 통행로가 다시 열렸다."
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"황토빛 모래 구덩이. 사막을 베어 넘기던 모든 검기의 근원지.",
			"거친 모래바람 속에서 매서운 칼날 기운이 요동치고 있다.",
			"이 폭풍의 끝에서 마침내 사막을 위협해 온 거대한 존재와 맞닥뜨린다."
		]
	},
	"epilogue": {
		"korean": [
			"휘몰아치던 모래폭풍이 멈추자 황토빛 모래 구덩이에는 오래된 정적이 찾아왔다.",
			"오랫동안 사막 길목을 가로막던 칼날 바람이 사라지고 통행로가 다시 열렸다.",
			"승부를 갈구하던 수천 검객의 넋은 비로소 안식을 얻고 바람 속에 조용히 잠들었다."
		]
	}
} as const;
