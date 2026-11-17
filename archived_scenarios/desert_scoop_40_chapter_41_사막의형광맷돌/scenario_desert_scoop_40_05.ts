export const scenario_desert_scoop_40_05 = {
	"scenario_id": "desert_scoop_40_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_MeltingBlade_Scoop_V1"
	},
	"prologue": {
		"korean": [
			"형광 네온 파라솔 아래, 사막을 물들인 진실이 기다리고 있었다.",
			"피비린내 나는 현장의 피해자들과 미치광이 빙수 장수 스쿱.",
			"빼앗으려 했던 탐욕과 억울함 속에 숨겨진 무쌍검성의 봉인.",
			"오아시스의 사멸을 막기 위한 마지막 결전이 시작된다."
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
					"type": "speech",
					"content": {
						"korean": "형광 네온 파라솔 제단 위로 타오르는 열기가 모래밭을 가득 채웠다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…눈이 멀 것 같은 형광 빛이야."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사막을 물들인 형광 시럽과 맷돌의 기운이 온통 엉켜 있어."
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "제발 도와주시오! 저 미치광이 빙수 장수 스쿱이 우리를 모두 죽이려 합니다!"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사실… 우리가 먼저 스쿱의 무지개 빙수 비법을 빼앗으려 했소."
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…피투성이 상장 뒤에 탐욕이 숨어 있었군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "피해자라던 상인들이 오히려 선제 공격을 감행한 거였어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "스쿱에게 독약을 먹이고 맷돌을 강탈하려 했지만, 그의 칼날에 도리어 당한 것이오."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "스쿱은 정당하게 자신을 방어했을 뿐이오! 독화살을 쏘고 시럽에 약을 탄 건 우리였소!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…가해자와 피해자의 입장이 완전히 뒤바뀌었잖아."
					}
				},
				{
					"content": {
						"korean": "스쿱의 빙수 맷돌에 독성이 차오른 것도 그 선제 기습 때문이었어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "분노한 스쿱이 맷돌의 마검 봉인을 풀고 사막 전체를 끓게 만들고 있소!"
					}
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
						"korean": "스쿱의 서늘한 푸른 금속광 눈빛이 파라솔 아래에서 이쪽을 향했다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…공기 전체가 차갑게 얼어붙는 것 같아."
					},
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "스쿱이 절대검술 오색만분설을 발동하려고 해!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무지개 유리 맷돌의 손잡이를 뽑아 독성 얼음을 내보내야 오아시스가 살아나!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "스쿱이 허리의 마검을 뽑아 들자 사막의 모래언덕이 비명과 함께 갈라졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "내 무지개 빙수를 더럽히고 감히 날 죽이려 한 대가를 치러라! 오색만분설!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "…저 분노의 검기, 도저히 맹목적으로 피할 수 없어!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "검기를 뚫고 맷돌 손잡이를 뽑아 내부의 얼음을 비워내자!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "전설의 무쌍검을 무시한 죄, 이 오색 모래 속에 영원히 묻혀라!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…하지만 우리는 맷돌을 정화할 방법을 알고 있어. 다시 일어서자!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "맷돌의 손잡이가 뽑히자 쏟아져 내린 독 얼음과 과열된 시럽이 맑은 수액으로 변했다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…내 빙수를 오염시켰던 탐욕의 앙금이 마침내 씻겨 내려가는군."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "사막 전체에 무지개빛 단비가 내리고 있어!"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "파괴되었던 오아시스의 맑은 생수천이 눈앞에서 되살아났다."
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"무지개 유리 맷돌의 독 얼음이 완전히 비워지고 사막에 단비가 내렸다.",
			"과열되었던 마검의 열기와 형광 시럽이 씻겨 나가며 사막이 고요해졌다.",
			"파괴되었던 오아시스는 오랫동안 잊혔던 맑은 생수천을 다시 뿜어냈다.",
			"스쿱의 칼날은 거두어졌고, 탐욕이 남긴 상처 위에 새로운 유수가 흐른다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
