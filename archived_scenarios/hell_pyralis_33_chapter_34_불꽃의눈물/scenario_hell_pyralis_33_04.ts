export const scenario_hell_pyralis_33_04 = {
	"scenario_id": "hell_pyralis_33_04",
	"order": 4,
	"random_boss_title": {
		"korean": "붉은 가시 의식술사"
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
			"지옥의 열기가 거세지며 갇힌 동료들의 생명이 위태로워지고 있다.",
			"탈출용 제단의 비밀을 확인하기 위해 탐험대는 흑요석 제단으로 향한다.",
			"그리고 그곳에서 지옥을 지키려는 자와의 피할 수 없는 충돌이 기다린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "검붉은 기운이 감도는 흑요석 제단 입구에 다다랐다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 앰버 조각을 모으는 브림입니다. 동료들을 구하러 제단으로 온다는 소식을 듣고 기다렸습니다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "동료들의 마력이 떨어지고 있어. 탈출용 제단을 서둘러 확인해야 한다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…발바닥부터 전해지는 열기가 엄청나."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "제단 주변의 흑요석 바닥에 의식의 기운이 짙게 남아 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 제단은 지옥 문을 여는 열쇠와 통하지만, 강한 의식의 결계가 막고 있습니다."
					},
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "결계가 가로막고 있더라도 제단의 비밀을 밝혀내야만 한다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…공기가 텁텁해서 숨이 턱턱 막힌다."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "제가 보관하던 형광빛 앰버 조각을 전해 드리지요. 안쪽으로 가면 강력한 환영이 덮칠 테니 조심하십시오."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조각을 건네줘서 고맙다. 어떤 환영이 막아서든 멈추지 않겠다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "exit",
					"speaker": "brim",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…어둠 속에서 불길한 기척이 일렁거려."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "브림에게 전달받은 형광빛 앰버 조각이 희미하게 빛나며 강하게 반응한다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 형광빛 앰버 조각을 받아 들고 보니, 짐승이 가슴에 무언가를 감싸고 있음을 확신할 수 있겠어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…귓가를 어지럽히는 읊조림이 점점 가까워진다."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "지옥의 환영 속에 갇혀 영원히 방황하라."
					}
				},
				{
					"content": {
						"korean": "…우리가 무너지면 동료들도 끝이다. 다시 전열을 가다듬자."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 감히 짐승의 안식을 방해하려 하다니…"
					}
				},
				{
					"content": {
						"korean": "지옥 불길을 끄고 문을 열 방법을 당장 말해라!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "짐승의 가슴속 영혼 혼석을 지상으로 데리고 나가야만… 지옥 불길이 꺼지고 문이 열린다…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가슴속 영혼 혼석을 지상으로 옮겨야 탈출구가 열리는 거였어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정체 모를 자가 쓰러지며 환영이 걷히고, 짐승이 머무는 피랄리스의 절벽으로 통하는 길이 열렸다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제단 중앙, 정체 모를 자가 붉은 환영을 늘어뜨리며 탐험대를 막아선다."
					}
				},
				{
					"content": {
						"korean": "짐승을 모셔 지옥을 지키는 것이 우리의 사명이다. {random_boss}의 성역에 더는 발을 들이지 마라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "지옥 불길을 끄고 갇힌 동료들을 구하기 위해 선 비킬 수 없다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…사방에서 환영이 춤을 추듯 들끓는다."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 15
		}
	]
} as const;
