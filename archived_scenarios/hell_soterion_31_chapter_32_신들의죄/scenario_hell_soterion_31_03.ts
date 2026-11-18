export const scenario_hell_soterion_31_03 = {
	"scenario_id": "hell_soterion_31_03",
	"order": 3,
	"random_boss_title": {
		"korean": "흑암의 기사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"용암 지대에 갇힌 동료들을 구할 단서를 찾아 묵시의 죄악 신전으로 향한다.",
			"오랫동안 버려졌던 고대 신전의 깊은 어둠.",
			"그곳의 거대한 벽면에는 잊힌 진실이 숨겨져 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "묵시의 죄악 신전 안쪽, 오래된 고서적들이 어지럽게 쌓여 있다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "저는 고서적 연구가 브림입니다. 신전의 비밀을 조사하러 혼자 들어왔습니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우린 용암 지대에 갇힌 동료들을 탈출시킬 방법을 찾고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…공기가 지독하게 퀴퀴하네."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "신전 서재 한구석에 훼손된 기록들이 흩어져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고서를 보니 신성한 재판관이 신들의 명을 받아 죄를 심판해 왔다고 하는군요."
					},
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "재판관 소테리온이 정말로 신들의 충실한 대변자일까."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…벽에 파인 자국들이 오싹해."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벽면을 덮은 흙더미를 치우자 거대한 고대 기록화가 드러난다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "brim",
					"action": "enter"
				},
				{
					"speaker": "brim",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이것 보세요! 벽면에 신성한 재판관 인장이 찍힌 고대 기록화가 있어요!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "엄정한 재판관은 지옥의 죄인이 아니라 신들이 직접 만든 피조물일지도 모른다."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그림에 새겨진 문양이 섬뜩해."
					},
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "신전 안쪽 제단 문 너머에서 무거운 쇠갑옷 마찰음이 울려 퍼진다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "길을 막아서려는 강한 기척이 느껴진다. 방심해선 안 돼."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…심장이 너무 크게 뛰어."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "신전 제단 앞, 붉은 기운을 띤 기사의 그림자가 무기를 들고 막아선다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러서라. 이 신전의 금기를 더 건드렸다간 신전 전체가 무너진다."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "동료들을 구하기 위해서다. 길을 가로막는다면 제압하겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…갑옷 주변의 압박감이 엄청나."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "금기를 깨트린 대가는… 곧 치르게 될 것이다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리는 반드시 진실을 밝혀내고 동료들을 구하겠다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기사가 무너지며 제단 뒤쪽의 비밀 통로가 열렸다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "brim",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 통로는 용암 신전 폐허로 이어지는 길입니다!"
					},
					"emotion": "happy",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "좋다, 다음 단서를 쫓아 용암 신전 폐허로 이동하자."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "신전의 금기를 범한 자들에게 내릴 관용은 없다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…여기서 포기할 순 없다. 다시 부딪치자."
					}
				}
			],
			"id": 15
		}
	]
} as const;
