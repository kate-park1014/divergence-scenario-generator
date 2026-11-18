export const scenario_desert_kaelith_44_01 = {
	"scenario_id": "desert_kaelith_44_01",
	"order": 1,
	"random_boss_title": {
		"korean": "모래 약탈자"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막을 벗어나는 하나뿐인 탈출로가 뜨거운 열기로 막혔다.",
			"이대로 머무르면 붉은 모래밭 위에서 말라 죽고 말 것이다.",
			"탐험대는 사막길을 짓눌린 열기의 원인을 찾아 모래 언덕으로 나아간다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "붉은 모래 언덕 위로 숨이 턱 막히는 열기가 일렁인다."
					}
				},
				{
					"speaker": "kasai",
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
					"emotion": "sad",
					"content": {
						"korean": "저는 사막 주민 카사이입니다. 탈출로가 뜨거운 열기로 막혀서 발이 묶였어요."
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "열기의 원인을 찾아내야 사막을 나갈 수 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…발밑의 모래가 열기로 뜨거워."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래 구덩이 속에 반짝이는 유리 장신구가 묻혀 있다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "상처에서 흐른 피가 유리 장신구에 닿자 검게 그을리기 시작한다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "kasai",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건 상인들이 팔던 유리 장신구인데… 왜 피가 닿자 타오르는 거죠?"
					},
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "…공기마저 타 들어가는 것 같아."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래 바람 너머에서 거친 발소리가 이쪽으로 접근한다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "kasai",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "무장을 한 약탈자들이 모여들고 있어요! 어서 피하세요!"
					},
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"speaker": "kasai",
					"action": "exit",
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "피하지 않고 정면으로 돌파해서 상황을 확인하겠다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…숨이 턱턱 막힌다."
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 언덕 너머에서 거친 고함과 함께 거대한 기척이 다가온다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "상인의 물건을 노리는 자가 다가와 무기를 들어 올린다."
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…심장이 미친 듯이 뛰어."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "붉은 모래밭에 뼈나 묻어라!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 멈출 수 없다. 다시 전열을 가다듬자."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모래 언덕 정상에서 붉은 열기를 두른 약탈자가 앞을 막아선다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "상인의 귀한 물건에 피를 묻히다니! 더럽히지 말고 당장 떠나라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길을 막아서는 열기를 멈추기 위해 너를 제압하겠다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…적의 살기가 보통이 아니야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 불길은 이미 오아시스로 퍼졌다… 너희는 늦었다…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 자의 자리에서 검게 그을린 유리 파편을 주웠다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "검게 그을린 유리 파편에서 뿜어져 나오는 열기가 오아시스 방향으로 뻗어 있다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "열기의 근원을 쫓아 버려진 오아시스로 이동한다."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
