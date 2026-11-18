export const scenario_desert_opalis_43_05 = {
	"scenario_id": "desert_opalis_43_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_GlassMirage_Opalis_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "신전 제단 바닥에 영롱한 칠색 오팔 조각들이 수없이 깨져 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "의식을 잃은 아슈르의 몸이 차갑게 식어가고 있어. 시간이 없다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…제단 구석에 떨어진 건 인형의 겉껍데기 파편이야."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벽 너머에서 기괴하게 비명을 지르는 녹슨 톱니바퀴 소리가 들려온다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "오팔리스는 사람이 아니라 대장장이가 만들어낸 태엽 인형이었다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "…쇠가 맞물려 끼익거리는 소리가 귓가를 찢는 것 같아."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "제단 위 상자마다 사람들에게서 빼앗은 에메랄드빛 모래가 가득 채워져 있다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모래들이 전부 나그네들의 빼앗긴 생기였어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아슈르의 생기도 저 빛 속에 갇혀 있겠지."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바닥에는 금이 간 유리 조각이 가득하고, 중앙 신전의 문이 무겁게 닫힌다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "생기 구슬이 있는 오아시스의 심장부다. 더는 물러설 곳이 없어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…더 이상 멈출 수도 없다."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "백 년 전, 주인님은 병든 아가씨를 살릴 생기를 모아 오라며 결투장으로 떠나셨다."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "생기를 모두 모으면 돌아와 아가씨와 나를 다시 일으켜 줄 거라 믿었는데..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네 주인은 이미 세상을 떠났다. 무의미한 약속 때문에 모두를 괴롭히지 마라!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "핵심 장치인 생기 구슬을 쳐서 강하게 깨뜨린다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "조금만 더 모으면 주인님과 아가씨가 눈을 뜨실 텐데... 왜 날 거절하시나요..."
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "오팔리스의 금빛 날개가 부서지고 사막 곳곳으로 생기의 모래가 퍼져나간다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "happy",
					"content": {
						"korean": "…숨이 돌아오는군요. 사막의 바람이 다시 느껴집니다. 고맙습니다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "조금만 더 모으면... 주인님이 눈을 뜨실 텐데... 생기를 내놓아라!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아슈르를 이대로 포기할 순 없다. 다시 일어나 싸우자!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "겉껍데기가 산산조각 난 인형이 녹슨 톱니바퀴를 돌리며 붉은 모래를 토해낸다."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "주인님과 아가씨를 살리기 위한 생기가 더 필요하다! 아무도 날 방해할 수 없어!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "타인의 생명을 빼앗아 만든 신기루는 이제 끝이다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저 녹슨 눈에서 모래가 흘러내리고 있어."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"생기 구슬이 깨지자 사막 전역으로 빼앗겼던 생명의 모래가 흩어졌다.",
			"신전의 모래시계는 마침내 그 멈춰 있던 바퀴를 내리고 멈춰 섰다.",
			"아슈르는 마침내 사막의 시원한 바람을 느끼며 깊은 숨을 내쉬었다."
		]
	},
	"prologue": {
		"korean": [
			"오아시스 중앙 신전, 메마른 모래시계의 심장부.",
			"의식을 잃어가는 아슈르를 업고 마지막 문을 연다.",
			"그곳에는 주인을 기다리며 부서져 가는 태엽 인형이 서 있었다."
		]
	}
} as const;
