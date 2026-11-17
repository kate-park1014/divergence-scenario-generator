export const scenario_hell_pyralis_33_04 = {
	"scenario_id": "hell_pyralis_33_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"pyre": {
			"id": "mon_096a199b-d878-4daf-ab59-8a5fc3c32a37",
			"name": {
				"korean": "화염",
				"english": "Pyre",
				"japanese": "炎",
				"chinese": "烈焰",
				"french": "Bûcher",
				"spanish": "Pira",
				"vietnamese": "Hỏa đài",
				"thai": "เชิงตะกอน",
				"hindi": "चिता"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d9f42f57-c664-48aa-b280-498d0f92a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3d10334d-d2d4-441b-14bd-cd9fba035800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뜨거운 유황 연기가 자욱한 단죄의 제단.",
			"에메랄드빛 혼석 파편이 사방으로 흩날리기 시작했다.",
			"유황 집행관 파이어는 손에 쥔 구원 주문서를 내밀었다.",
			"혼석을 파괴하고 영혼을 구원할 마지막 의식이 다가오고 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "단죄의 제단 주변에 에메랄드빛 불꽃 파편이 사방으로 흩날린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "pyre",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "pyre",
					"content": {
						"korean": "흩날리는 불빛은 피랄리스 가슴에 갇힌 혼석의 파편이다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "혼석을 파괴해 어린 주인의 영혼을 구할 때가 온 것 같군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맞다. 이 제단에서 구원 의식을 준비하면 혼석에 갇힌 영혼을 풀어줄 수 있지."
					},
					"speaker": "pyre"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "초록빛 파편이 서글프게 타오르고 있어."
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "pyre"
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "내가 직접 작성한 단죄의 구원 의식 주문서다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 주문서로 혼석을 깨뜨리면 정말 영혼을 안전하게 구원할 수 있는 건가?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그렇다. 의식의 불길이 혼석만 파괴하고 영혼을 온전히 건져낼 테지."
					},
					"speaker": "pyre"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "드디어 그 영혼을 구원할 방법이 눈앞에 보이는구나."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "pyre",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "pyre",
					"content": {
						"korean": "이 주문서를 받아라. 피랄리스는 지금 혼석 절벽에서 기다리고 있다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주문서를 가지고 절벽으로 가 피랄리스의 혼석을 파괴하겠다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "pyre",
					"content": {
						"korean": "단, 절벽으로 가는 길을 막아서는 자를 먼저 쓰러뜨려야 할 것이다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "가슴이 묵직하게 떨려오는군."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "pyre",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "주문서 뒷면을 절대 손상시키지 마라. 강력한 주술이 새겨져 있으니."
					},
					"speaker": "pyre",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "주문서 뒷면에 은밀하게 붉은 소멸의 인장이 숨겨져 있군."
					}
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "구원 의식을 완수하기 위해 새겨둔 필수적인 인장일 뿐이다. 망설이지 마라."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "어딘가 등골이 서늘해지는 기분이야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "무지한 자들아... 너희가 하려는 짓이 무엇을 불러올지 알지도 못한 채..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}를 쓰러뜨렸다. 이제 피랄리스가 있는 절벽으로 향하자."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "집행장이 쓰러지고, 피랄리스가 기다리는 혼석 절벽으로 향하는 길이 열렸다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "지옥의 규율을 무시하려던 자들에게 구원 따위는 없다."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 멈출 수 없어. 반드시 쓰러뜨리고 혼석 절벽으로 가겠다!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "단죄의 제단 꼭대기를 거대한 그림자가 막아서고 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥의 규율을 어기고 제단을 더럽히게 둘 순 없다. 주문서를 버려라!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리는 혼석을 깨뜨려 갇힌 영혼을 구원할 것이다. 길을 비켜라!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛된 구원에 현혹된 어리석은 자들이여, 여기서 단죄를 받아라!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
