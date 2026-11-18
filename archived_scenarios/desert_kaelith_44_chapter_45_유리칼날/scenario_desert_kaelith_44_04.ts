export const scenario_desert_kaelith_44_04 = {
	"scenario_id": "desert_kaelith_44_04",
	"order": 4,
	"random_boss_title": {
		"korean": "추적자"
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
			"모래바람을 피해 버려진 유리 공방으로 들어선다.",
			"열기로 이글거리는 벽 너머에서 불길한 기척이 다가온다.",
			"사막을 피로 물들이는 자의 추격이 시작되었다."
		]
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
						"korean": "거센 모래바람을 피해 다급히 메마른 공방 안으로 숨어들었다."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dune",
					"content": {
						"korean": "모래바람을 피하려 들어왔는데, 여기서 다시 만나는군."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "수원을 찾으려 했는데 버려진 공방으로 연결되어 있었군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…숨이 턱턱 막히는 열기야."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "dune",
					"emotion": "angry",
					"content": {
						"korean": "이 벽을 봐라. 호박색 유리 칼날이 꽂힌 곳으로 열기가 모이고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막의 뜨거운 열기가 이 장소로 집중되고 있었던 거다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…벽마저 바짝 구워지고 있군."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "너희를 노리는 자가 다가오고 있다. 난 먼저 빠지겠네."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"speaker": "dune",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "상인의 편을 든 추적자가 여기까지 따라왔다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…발소리가 점점 가까워져."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "공방 벽 깊숙한 곳, 호박색 유리 칼날이 꽂힌 채 붉게 일렁이고 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "칼날에서 지옥 같은 열기가 뿜어져 나오는 중이다."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "…공기가 검게 타들어 가는 것 같아."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "공방 중심에서 칼을 쥔 자가 길을 막아서며 기척을 드러낸다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "그분의 명이다. 너희는 여기서 베어지게 될 것이다!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리 길을 막게 두지 않겠다. 검을 내려놔라!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…칼날에 붉은 열기가 깃들어 있어."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 칼끝을 피할 순 없다. 사막의 모래로 돌아가라!"
					}
				},
				{
					"content": {
						"korean": "…아직 당할 순 없다. 다시 파고든다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "그분의 검술은 아직 완성되지 않았다… 더 많은 피가 필요해…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "유리 검객이 자기 검술을 완성하려고 사람들의 피를 노리고 있었던 거다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…끔찍한 짓을 벌이려 했군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 추적자 너머, 용융된 태양의 제단으로 향하는 뜨거운 열기가 짙게 뿜어져 나왔다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
