export const scenario_desert_encore_49_01 = {
	"scenario_id": "desert_encore_49_01",
	"order": 1,
	"random_boss_title": {
		"korean": "사막 도적"
	},
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래바람 언덕 바위에 깊고 날카로운 놋쇠 레이피어 자국이 그어져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dune",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "반갑습니다. 난 사막 길잡이 듄입니다. 사막 탈출 지도를 구하신다 해서 찾아왔죠."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "바위에 놋쇠 레이피어 칼날로 날카롭게 베인 자국이 있군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…바람 소리가 꼭 칼날을 벼르는 소리 같네."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dune",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dune",
					"content": {
						"korean": "지도를 꺼내 드리죠. 어라, 품에서 뭔가가…!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "듄의 품에서 떨어진 연극 대본을 펼쳐 들자 대본에 글씨가 새겨진다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "대본을 펼치는 순간 우리 이름이 문양처럼 새겨졌어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 됩니다! 그 대본을 펼치시면 대본과 계약이 맺어집니다!"
					},
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…손목이 묵직하게 조여드는 느낌이야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "대본에 이름이 새겨지면 연극이 끝날 때까지 사막 밖으로 나갈 수 없습니다."
					},
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지도를 구하려다 사막에 묶이는 구속 계약을 맺어버렸군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…이 모래밭 전체가 감옥이 되어버렸어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "언덕 너머 모래바람 속에서 거친 칼소리와 무장한 무리의 기척이 다가온다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 대본을 건드렸다는 사실을 눈치채고 누군가가 다가오고 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 칼날처럼 날카로워졌어."
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "읏… 분명 경고했다. 그 대본의 비극에 삼켜져도 원망하지 마라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 대본을 덮어 계약을 파기하는 방법을 찾을 것이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도적 무리가 물러나자 듄이 근처 오아시스를 가리킨다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "극단장의 소문을 아는 상인 아미르가 바랜 천막 오아시스에 있습니다. 그곳으로 가시죠."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "대본에 함부로 손을 댄 대가다. 당장 물러나라!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 멈출 수는 없다. 다시 전열을 가다듬자."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "무기를 든 자들이 언덕 정상에서 길을 막아선다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 대본에 얽히면 목숨을 잃게 된다! 목숨이 아까우면 당장 멈춰라!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "계약을 풀 방법을 찾을 때까지는 돌아설 수 없다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…진짜로 베어버릴 기세야."
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 모래바람이 불어오는 사막의 언덕.",
			"이곳을 벗어날 지도를 찾기 위해 길잡이 듄을 만난다.",
			"그러나 실수로 펼쳐 든 대본 한 장이 사막의 무대로 탐험대를 끌어들인다."
		]
	}
} as const;
