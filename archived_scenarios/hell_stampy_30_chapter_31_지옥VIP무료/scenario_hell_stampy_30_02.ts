export const scenario_hell_stampy_30_02 = {
	"scenario_id": "hell_stampy_30_02",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥 1서류실. 붉은 서류 더미 사이로 핫핑크 인주 냄새가 진동한다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "줄이 끝도 없네. 일단 승인 창구부터 찾아야 해."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "핫핑크 통행권을 든 외지인인가요? 행정 징수조교 브림이라고 합니다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 통행권에 추가 도장을 받으러 왔어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도장을 찍을수록 늪에 빠질 텐데… 정 받겠다면 저 안쪽 창구로 가보세요."
					},
					"emotion": "base",
					"speaker": "brim"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "…서류 더미가 산처럼 쌓여 있네."
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "그 서류들을 잘 보세요. '도장을 받으면 자동 연체 승인'이라는 붉은 직인이 찍혀 있죠?"
					}
				},
				{
					"content": {
						"korean": "연체 승인? 도장을 받으면 수수료가 계속 늘어난다는 뜻이야?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞아요. 그래도 사람들은 당장의 도장 모으기에 눈이 멀어 넘어가 버리죠."
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "다음 관문을 열려면 당장 이 승인이 필요해. 계속 나아간다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "뼛속까지 타들어가는 용암 열기다."
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서류 정리관님은 핫핑크 통행권만 보면 묻지도 않고 서명해 버립니다."
					},
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜 확인도 없이 바로 도장을 찍어주는 거지?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "상부 실적 점수 때문이죠. 핫핑크 서류는 최우선 우대 과제거든요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "실적 때문에 부조리한 계약을 남발하는 건가."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "…압도당할 것 같은 거대한 서류함들이야."
					},
					"type": "speech"
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
					"type": "speech",
					"content": {
						"korean": "저 문 너머가 서류 정리관의 본청입니다. 돌아갈 마지막 기회예요."
					},
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "후퇴는 없다. 승인을 받아 다음 층으로 나아간다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "brim",
					"content": {
						"korean": "…나중에 엄청난 청구서가 날아와도 전 모릅니다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 서류 요건 충족! 추가 승인 도장을 날인한다!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "마침내 추가 승인 도장을 받았다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "핫핑크 통행권에 붉은 도장이 찍혔지만, 서류함 속 장부에는 무거운 연체 기록이 추가되었다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "승인 서류 미비! 영혼 압류 절차를 개시한다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기할 수 없어… 서류 승인을 다시 받아내겠어!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "핫핑크 통행권을 가져온 불쌍한 영혼이 또 도착했군."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서류 정리관! 추가 승인 도장을 찍어라!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하하하! 도장을 받는 순간 수수료의 굴레에 갇히는 걸 모르고!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 1서류실. 붉은 용암 인쇄기가 뿜어내는 열기와 핫핑크 인주 냄새가 진동한다.",
			"행정 징수조교 브림의 끊임없는 경고에도 불구하고 탐험대는 승인 창구로 향한다.",
			"부조리한 행정 시스템의 중심, 서류 정리관과의 기이한 대치가 기다리고 있다."
		]
	}
} as const;
