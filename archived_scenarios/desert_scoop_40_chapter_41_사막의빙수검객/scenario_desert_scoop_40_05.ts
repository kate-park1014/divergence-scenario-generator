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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뜨거운 모래밭 한가운데 네온빛 파라솔과 자그마한 빙수 가게가 서 있다."
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "드디어 찾았어! 저기 네온 파라솔 가게야!"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사막 출구를 막아선 정체가 정말 이 가게 주인일까?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…사막 한가운데인데 이상하게 시원한 바람이 불어와."
					},
					"speaker": "character_1",
					"type": "speech",
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
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가게 뒤편의 모래 바위들이 날카로운 단면을 드러내며 깨져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "바람 골짜기에서 본 바위 절단면과 자국이 똑같아."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "얼음을 깎다가 튄 검기에 바위가 무너져 길목이 막힌 거였어!"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…소름 돋을 정도로 정교하고 날카로운 칼자국이다."
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "선반 위에 무지갯빛 형광 시럽 병들이 가득 나열되어 있다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사원 터에서 봤던 달콤한 시럽이 빙수용 시럽이었구나."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "진짜 전설의 검객이 사막에서 빙수를 만들고 있던 게 맞아!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…달달한 향기가 코끝을 찌른다."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그릇에 담긴 얼음은 오아시스 시장에서 본 투명한 결정 그대로다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한 치의 오차도 없이 마검으로 깎아낸 빙수 얼음이야."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심해, 곧 마검을 든 가게 주인이 나타날 거야!"
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…차가운 검기와 얼음 기운이 피부로 느껴져."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "형광 핑크색 앞치마를 두른 노인이 에메랄드빛 마검으로 얼음을 깎고 있다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 오게! 내가 정성껏 깎은 최고의 마검 빙수라네!"
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모래 언덕에서 찾은 핑크 헝겊이 그 앞치마 조각이었군요!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 그동안 수상한 일이 많았으니 이 빙수는 거절하겠습니다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "뭐라고?! 수많은 검객을 꺾은 내 명품 빙수를 거절해?! 오냐, 매운 맛을 봐라!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "내 빙수를 거절한 벌이다! 맛을 알 때까지 사막을 나갈 수 없다!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…쉽지 않은 검기지만 반드시 다시 도전하겠어."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크윽, 칼싸움은 여기까지! 자, 다시 정성껏 깎은 빙수를 받아라!"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…스쿱 씨의 정성이 느껴집니다. 하나도 남김없이 다 먹겠습니다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "오오! 국물 한 방울 안 남기고 다 먹다니! 정말 감동이구나!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "빙수 얼음 깎다가 무너뜨린 길목 바위는 내 마검으로 당장 치워주마!"
					}
				},
				{
					"content": {
						"korean": "스쿱이 마검을 한번 휘두르자 막혀 있던 거대한 바위가 이등분되어 길을 열었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 한가운데 뜬금없이 빛나는 네온 파라솔.",
			"길을 막아선 거대한 바위와 정체불명의 전설적인 검객.",
			"차가운 검기와 달콤한 시럽 향기가 묘하게 얽혀든다.",
			"사막을 빠져나가기 위한 마지막 빙수 대결이 시작된다."
		]
	},
	"epilogue": {
		"korean": [
			"뜨거운 사막 한가운데, 시원하고 달콤한 빙수 향기가 바람을 타고 퍼졌다.",
			"전설의 검객 스쿱은 네온 파라솔 아래에서 허허실실 웃으며 다시 얼음을 깎기 시작했다.",
			"마검의 칼자국으로 갈라진 거대한 바위 사이로 사막을 빠져나가는 길목이 탁 트였다.",
			"차가운 빙수의 여운을 뒤로한 채, 탐험대는 비로소 사막의 열기 속으로 발걸음을 옮겼다."
		]
	}
} as const;
