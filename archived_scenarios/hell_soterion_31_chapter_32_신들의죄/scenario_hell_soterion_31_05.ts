export const scenario_hell_soterion_31_05 = {
	"scenario_id": "hell_soterion_31_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_Scapegoat_Soterion_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "옥좌로 이어지는 계단 바닥에 에메랄드빛 가루가 빛나고 있다."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "이 가루… 유황 지옥 입구 바닥에서 봤던 형광 가루와 같아."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 머리 위 후광에서 떨어진 조각이 확실하군."
					}
				},
				{
					"content": {
						"korean": "…가루만으로도 불길한 기운이 풍겨."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "옥좌 주변으로 붉은 보석 깃털들이 떨어져 흩날린다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "통곡의 유황 절벽에서 신더가 건네준 그 붉은 보석 깃털이에요."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "소테리온의 거대한 보석 날개에서 떨어진 깃털이었어."
					}
				},
				{
					"content": {
						"korean": "…눈이 부실 정도로 붉네."
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "옥좌 기둥에 새겨진 결계 인장이 번뜩인다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 문양, 묵시의 죄악 신전 벽면에서 본 기록화의 인장과 똑같아!"
					},
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "신들이 소테리온을 피조물로 봉인할 때 새긴 문양이었던 거다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "기억해 둬. 옥사장에서 들은 대로 저 가슴의 크리스털을 베어야 해!"
					}
				},
				{
					"content": {
						"korean": "…드디어 전면에 다다랐어."
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
					"type": "speech",
					"content": {
						"korean": "옥좌 위에서 뿜어져 나오는 유황열과 보석 빛이 공간을 가득 채운다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "위에서 엄청난 압박감이 내려오고 있어. 막아서는 자가 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…숨이 턱 막힌다."
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "결계는 풀리지 않는다. 너희도 이 심연에 갇히게 될 것이다!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 포기할 수 없다. 다시 검을 다잡아라!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에메랄드빛 후광을 두른 재판관 소테리온이 옥좌에서 천천히 내려온다."
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나는 신들의 명을 받아 죄인을 심판하는 신성한 재판관이다. 지옥 문을 열 순 없다!"
					}
				},
				{
					"content": {
						"korean": "사납게 보석 날개를 펼치며 일부러 맹렬한 공격을 들이붓는다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "일부러 내 검을 유도하고 있어! 갇힌 동료들을 위해 그 크리스털을 깬다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "소테리온이 앉아 있던 옥좌 바닥의 파편이 용암 신전 폐허의 비석 조각과 겹쳐진다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "신들은 자기들의 더러운 죄와 저주를 내 가슴에 모아 쑤셔 넣고 이 유황 바닥에 던졌다!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나를 베어라! 내 가슴이 깨지는 날, 나를 버린 신들도 함께 무너질 것이다!"
					}
				},
				{
					"content": {
						"korean": "검에 힘을 실어 소테리온 가슴 중앙의 크리스털을 베어 깨뜨린다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…드디어, 나를 이 무거운 굴레에서 풀어주는구나."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "가슴속에서 신들의 죄악이 터져 나오며 강하게 닫혔던 지옥 문이 굉음과 함께 열린다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "문이 열렸어요! 용암 지대에 갇혔던 동료들이 밖으로 나오고 있어요!"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "happy"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 심연 깊은 곳, 마침내 재판관의 옥좌에 도달했다.",
			"용암 지대에 갇힌 동료들을 구할 마지막 기회다.",
			"모든 진실을 쥔 피조물이 머리 위 후광을 번뜩이며 기다린다."
		]
	},
	"epilogue": {
		"korean": [
			"닫혔던 지옥 문이 열리고, 용암 지대에 갇혀 있던 동료들이 무사히 돌아왔다.",
			"소테리온의 가슴에서 터져 나온 신들의 죄악은 지옥의 하늘을 뚫고 올라갔다.",
			"억눌렸던 유황 열기 속에서, 아주 오랫만에 서늘한 바람이 불어왔다."
		]
	}
} as const;
