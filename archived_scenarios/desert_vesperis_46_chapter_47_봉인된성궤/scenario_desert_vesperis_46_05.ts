export const scenario_desert_vesperis_46_05 = {
	"scenario_id": "desert_vesperis_46_05",
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
		"pool_id": "pool_GoldenReliquary_Vesperis_V1"
	},
	"epilogue": {
		"korean": [
			"성궤가 침묵을 되찾자 사원 사방을 조이던 둔탁한 진동도 비로소 멈추었다.",
			"땅에 꽂힌 검 너머로 굳게 닫혔던 석문이 천천히 열리며 모래바람이 들어왔다.",
			"사원에 갇혀 죽어가던 비극은 끝나고, 탐험대는 비로소 마른 사막으로 걸어 나갔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사원 최심부의 제단 위에 거대한 사암 성궤가 놓여 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune",
					"type": "direction"
				},
				{
					"content": {
						"korean": "성물의 가호를 받아 나도 사원을 탈출하려고 뒤쫓아왔어!"
					},
					"emotion": "base",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "성궤 앞에 다다랐으니 이제 사원의 입구를 열 방법도 찾아야 한다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…오싹할 정도로 정적만 흘러."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사암 틈새로 금빛 잔상이 아른거리며 주변으로 퍼져나간다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 금빛 잔상은 사원의 입구 바위굴에서 본 무기의 금빛 먼지와 같다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…빛이 닿는 곳마다 사암이 굳어가는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성궤 주변의 오래된 석판에 고대 문자가 기괴하게 새겨져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "메마른 오아시스의 소문과 달리 성궤 앞에서 검을 땅에 꽂아야 분노가 멈춘다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "up",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…비문의 경고가 마음에 걸리는군."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "성궤를 받치는 묵주 주변으로 단단한 라피스라줄리가 엉켜 있다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래 유적 광장에서 본 굳어버린 검처럼 성궤 자체가 무기를 삼킨 흔적이다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "제단 너머에서 거대한 검기가 공기를 찢는 기척이 느껴진다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…숨이 막힐 듯한 압박감이야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "과거 전쟁터에서 검객들이 서로를 무참히 베어 넘기던 광경을 보았다."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "통곡의 회랑에서 들은 소문대로 세상의 피비린내를 끊으려 스스로 성궤가 되었구나."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "검을 땅에 깊숙이 꽂고 칼자루에서 두 손을 뗀다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "싸울 의지가 없음을 보여주어 보스의 분노를 거두게 한다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…검을 스스로 내려놓는 자를 드디어 마주하는군."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "베스페리스의 비통한 검기가 스러지자 닫혔던 사원의 문이 천천히 열렸다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "무기를 쥔 자는 결코 이 사원을 나가지 못한다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 쓰러질 수 없다. 다시 검을 다잡아라!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "성궤를 짊어진 수도승이 기도를 올리며 고개를 든다."
					}
				},
				{
					"content": {
						"korean": "이곳은 자격을 갖춘 자에게 무적의 힘과 가호를 내리는 성물이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "듄이 가호를 얻으려 성궤로 다가서는 순간, 궤가 열리며 부서진 검 파편 폭풍이 뿜어져 나온다!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 바라는 기적은 이곳에 없다. 네 칼 역시 이 궤에 묻혀 영원히 잠들 것이다!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "사원의 닫힌 입구를 열고 탈출하기 위해 네 분노를 넘어서겠다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…쏟아지는 검기가 피를 말리는 것 같아."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사원의 가장 깊은 제단, 성궤를 지키는 수도승이 묵묵히 자리를 지키고 있었다.",
			"사원 입구가 닫힌 이래 수많은 검객이 무적의 가호를 얻기 위해 찾아왔던 곳.",
			"이제 사원에 갇힌 운명을 끝내고 밖으로 나갈 마지막 문을 열어야 한다."
		]
	}
} as const;
