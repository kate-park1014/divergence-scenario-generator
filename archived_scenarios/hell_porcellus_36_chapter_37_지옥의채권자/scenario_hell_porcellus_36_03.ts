export const scenario_hell_porcellus_36_03 = {
	"scenario_id": "hell_porcellus_36_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "pyre"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "거기 서라! …아, 채권 압류 집행관인 줄 알았잖아."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…여긴 잿가루 냄새로 가득하군."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "염라대왕 직속 집행관이 왜 이런 서류더미 구석에 숨어있어?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "염라대왕님도 영혼 담보 빚을 갚지 못해 쫓겨나셨어. 직속 집행관이던 나도 빚더미를 안고 쫓겨났고."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "pyre",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "압류 서류들을 좀 봐. 표지마다 이상한 인장이 찍혀 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…기분 나쁜 색이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "장부 표지에 핑크색 하트 모양의 담보 압류 인장이 찍혀 있네."
					}
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"emotion": "angry",
					"content": {
						"korean": "채권을 강제로 이전할 때 쓰는 포르셀루스의 전용 인장이야."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "pyre",
					"action": "enter"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이것 좀 봐! 캐비닛 깊숙한 곳에서 발견했어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "염라대왕의 직인이 찍힌 300년 만기 영혼 대출 각서 조각이야."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막히네."
					},
					"speaker": "character_3"
				},
				{
					"speaker": "pyre",
					"emotion": "sad",
					"content": {
						"korean": "맞아, 염라대왕님마저 통째로 담보로 잡힌 거였어. 승인 도장을 찍지 않으면 서류를 파기할 수 없어."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "pyre",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "잠깐, 수납함 구석을 봐! 죄수들의 영혼 수액 병이 빼곡히 쌓여 있어."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "영수증 도장을 찍으면 담보 계약이 완료되는 구조였어."
					}
				},
				{
					"content": {
						"korean": "…손이 덜덜 떨린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "도장을 찍자마자 저금통 몸체의 오팔빛 동전 슬릿이 밝게 빛나기 시작했어. 이자를 빨아들이고 있어!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "pyre"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 영혼 대출 집행실의 담보 서류에 손을 대다니!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}가 징수 계약을 강제로 이행하려 한다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "대출 집행관의 명으로 너희 영혼까지 압류해주마!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희 영혼도 이미 적금 통장의 이자로 적립되었다!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "영수증 계약을 반드시 파기해야 해…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 도장을 찍은 이상… 영혼 수액은 이미 적금 통장에 넘어갔다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 도장을 찍을 때마다 영혼이 압류되고 있었어."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "적금 통장의 이자 징수는 멈추지 않았다. 탐험대는 더 깊은 수납처로 향한다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 모든 대출 서류가 모이는 영혼 대출 집행실.",
			"염라대왕조차 피하지 못한 끔찍한 채권의 진실이 서류 더미에 묻혀 있었다.",
			"하급 집행관 pyre는 떨리는 손으로 담보 각서를 내밀었다.",
			"도장이 찍힐 때마다, 누군가의 마지막 생명력이 적금 통장으로 흘러든다."
		]
	}
} as const;
