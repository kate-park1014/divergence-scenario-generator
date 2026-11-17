export const scenario_hell_vane_35_02 = {
	"scenario_id": "hell_vane_35_02",
	"order": 2,
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
			"수천 개의 영혼 궤짝이 솟아있는 지옥 영혼 보관 창고.",
			"회수된 영혼의 흔적을 쫓아 창고의 안쪽으로 발을 디딘다.",
			"그곳에는 수많은 계약과 영혼을 기록하는 장부 관리인이 기다리고 있었다.",
			"그러나 장부 뒤에 숨겨진 진실은 상상보다 훨씬 기괴했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "핏빛 안개 속으로 높게 쌓인 영혼 궤짝들이 모습을 드러낸다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 회수된 영혼들이 보관되는 창고구나."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "어서 오게. 난 장부 관리인 브림이야. 베인의 영혼 보관함을 찾으러 왔지?"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…공기가 축축하고 기분 나빠."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "보관함 조사를 시작하자. 장부와 궤짝을 둘러보면 단서가 나올 거야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "이쪽이 베인이 최근에 회수한 영혼 궤짝들이라네."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "궤짝 겉면에 파란색 이자 미납 경고 스티커가 없네?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "이상하군. 베인 본인의 영혼 문양이 각인된 금색 영인 스티커가 붙어 있어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "소름 돋는 문양이야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "체납자의 영혼이 아니라 베인 개인의 소유로 처리되어 있다는 뜻이야."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "회수 명단이 적힌 장부를 직접 확인해 보게나."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "채무자들의 이름이 전부 붉은 먹칠로 지워져 있어!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "지워진 이름 위에 모두 단 한 사람의 이름만 다시 덮어써 있군..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "손끝이 떨릴 정도로 소름 끼치는 장부야."
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "베인이 다른 자들의 영혼을 전부 자기 것으로 위조한 거였어."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"emotion": "angry",
					"speaker": "brim",
					"content": {
						"korean": "큰일이네! 창고 감독관이 장부가 열린 것을 눈치채고 오고 있어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 정체를 숨길 수는 없겠군."
					}
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "brim"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "뼛속까지 냉기가 감돌아."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "{random_boss}가 오기 전에 대형을 갖춰야 해."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "지옥의 장부에 너희의 파멸을 기록해주마."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…장부를 그대로 둘 순 없어. 다시 일어선다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "허락 없이 영혼 장부를 훔쳐본 죄, 목숨으로 갚아라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "지워진 장부 이름의 진실을 숨기려는 건가!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 입을 열어서라도 베인의 목적을 밝혀내겠다."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "장부를 지운다 한들... 이미 시작된 회수를 막을 순 없다..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "베인이 노리는 게 단순한 영혼 회수가 아님이 분명해졌어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "조작된 장부를 확보한 탐험대는 더 깊은 비술 연구실로 발걸음을 옮긴다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
