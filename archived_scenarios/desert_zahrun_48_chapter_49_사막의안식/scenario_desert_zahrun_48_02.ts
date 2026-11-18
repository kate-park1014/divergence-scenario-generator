export const scenario_desert_zahrun_48_02 = {
	"scenario_id": "desert_zahrun_48_02",
	"order": 2,
	"random_boss_title": {
		"korean": "사막 경비병"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"쓰러진 동료를 살릴 물을 찾기 위해 마침내 오아시스 우물가에 닿았다.",
			"하지만 그 구원의 샘터 역시 온전한 안식처는 아니었다.",
			"품에 안은 녹슨 검이 사막 경비병의 서슬 퍼런 칼날을 불러온다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "타는 듯한 모래바람 너머로 오아시스 우물가가 모습을 드러낸다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "목마른 나그네들이군요. 저는 오아시스 우물을 지키는 주민 아슈르입니다."
					},
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "쓰러진 동료를 살리기 위해 우물물이 긴급히 필요하다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…시원한 물 냄새만 맡아도 살 것 같아."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "얼마 전 친절한 상인 자룬께서도 낙타 행렬에 검을 싣고 지나시며 지친 검객들에게 물을 나누어 주셨지요."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 상인은 사막에서 망가진 검도 사들인다고 들었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우물가 모래 위에 쪽빛 천 조각이 떨어져 있군."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…어쩐지 서늘한 바람이 지나가네."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "그런데 손님이 품에 지닌 그 녹슨 검은 어서 숨기시는 게 좋겠습니다."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 검이 오아시스의 누군가에게 위협이라도 되는 건가?"
					}
				},
				{
					"content": {
						"korean": "사막 경비병들이 죽은 자의 기운이 밴 검을 들고 온 자를 쫓고 있거든요!"
					},
					"speaker": "ashur",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "ashur",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…벌써 거친 발소리가 가까워지고 있어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무장한 경비병들이 칼을 뽑아 들고 우물가를 둘러싸기 시작한다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "경비병들이 우물가를 통제하며 우리 앞을 막아서고 있다."
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…더는 물러설 자리가 없어."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "재앙을 부르는 검을 끊어내는 것이 이 사막을 지키는 길이다!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이대로 동료를 포기할 수는 없다. 다시 도전한다!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "죽은 자의 기운이 밴 녹슨 검을 들고 오아시스에 들다니! 그 검이 사막에 재앙을 부를 것이다!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "동료를 살릴 물을 얻기 전까지는 결코 물러서지 않는다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…칼날에서 섬뜩한 기운이 풍겨 와."
					},
					"speaker": "character_4"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "재앙의 검을 품은 자여… 결국 이 오아시스마저 모래에 삼켜지고 말 것이다…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "경비병을 물리쳤으니 어서 우물물을 기르고 동료를 살리자."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "경비병이 쓰러진 자리에 아까 본 쪽빛 천 조각과 같은 흔적이 남아 있다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "우물물을 확보한 탐험대는 쪽빛 천의 흔적을 따라 바람 골짜기로 향한다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
