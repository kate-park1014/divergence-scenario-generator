export const scenario_desert_sirocco_47_03 = {
	"scenario_id": "desert_sirocco_47_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"버려진 고대 성벽 위로 날카로운 칼바람이 불어온다.",
			"학자 케메트는 모래바람에 섞인 의문의 쇠소리를 쫓고 있었다.",
			"놋쇠 피리의 구멍을 조율하여 부는 순간, 잠들어 있던 검기가 반응한다.",
			"구원의 소리라 믿었던 울림이 파멸의 폭풍을 부르고 있었다."
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
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						4
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 바람 소리를 들으세요. 무너진 성벽 사이로 고대 검객들의 목소리가 실려 오고 있습니다."
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바람에서 잔류 검기가 스치는 쇠소리가 나는구나."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…귀가 찢어질 것처럼 날카로워."
					}
				},
				{
					"content": {
						"korean": "놋쇠 피리의 옛 기록에 따르면, 특정 구멍을 조율하면 이 쇠소리와 공명시킬 수 있다고 합니다."
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "피리 구멍의 위치를 바꿔가며 바람의 주파수와 맞춰 보세요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피리 구멍을 조율해 바람 속 쇠소리와 음을 맞춘다."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "공기가 점차 무겁게 진동하고 있어."
					}
				},
				{
					"emotion": "happy",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "맞습니다! 피리 소리가 잦아들수록 잠자던 검기들이 뭉쳐들기 시작합니다."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet",
					"action": "enter",
					"spot": [
						3,
						4
					]
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "보십시오, 피리가 울릴 때마다 바닥의 핏빛 모래가 원형 결투장 모양으로 뭉쳐집니다!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "피리 소리가 잔류 검기를 끌어당겨 결투장의 형태를 만들고 있다."
					}
				},
				{
					"content": {
						"korean": "뼛속까지 소름이 돋는 광경이야."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"content": {
						"korean": "이 피리는 단순한 악기가 아닙니다. 폭풍 속 검객들을 부르는 신호입니다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"speaker": "kemet"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "성벽 전체의 잔류 검기가 한곳으로 집중되고 있어요! 위험합니다!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "공명이 너무 거세졌지만, 진실을 밝히기 위해 피리 연주를 멈출 수는 없다."
					}
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"content": {
						"korean": "살기를 띤 바람이 피부를 베고 지나가…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 우리를 가로막으려 성벽 위에서 내려오고 있습니다!"
					},
					"emotion": "angry",
					"speaker": "kemet"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "경고했을 텐데! 무분별한 피리 소리가 검기를 성나게 했다!"
					}
				},
				{
					"content": {
						"korean": "…피리를 다시 조율해야 해. 아직 검기의 울림이 남아있어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 피리 소리가 기어이 성벽의 맷돌까지 두 동강 내버렸구나…"
					}
				},
				{
					"content": {
						"korean": "피리의 공명이 성벽을 파괴할 만큼 잔류 검기를 극대화했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "두 조각 난 맷돌 사이로 더 거대한 모래폭풍의 쇠소리가 사막 깊은 곳에서 울려 퍼졌다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "당장 피리 연주를 멈춰라! 그 쇠소리가 성벽의 잔류 검기를 통제 불능으로 만들고 있다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "검기가 부르는 폭풍의 원인을 확인하기 위해선 피리를 불어야만 한다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "말귀를 못 알아듣는군! 잔류 검기에 갈려 나가기 전에 조용히 만들어 주마!"
					}
				}
			]
		}
	]
} as const;
