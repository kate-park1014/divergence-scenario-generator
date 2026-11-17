export const scenario_desert_vane_45_03 = {
	"scenario_id": "desert_vane_45_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"type": "speech",
					"content": {
						"korean": "빛조차 들지 않는 비밀 지하 창고. 훔쳐낸 밀수품 상자가 놓여 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 상자를 바치면 베인에게 진 채무 이자를 지울 수 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "jasper",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "내 상자를 훔쳐 간 게 네놈들이었나! 날 베인의 채무자로 만들 작정이야?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "내가 살아남으려면 누군가는 대가를 치러야 한다."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 죄책감이 파고든다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"speaker": "jasper",
					"type": "direction"
				},
				{
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "오아시스의 규율을 어기고 남의 물건으로 채무를 돌려막으려 하다니!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "수단과 방법을 가릴 처지가 아니다. 이자부터 청산해야 해."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "차가운 식은땀이 멈추질 않아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"emotion": "angry",
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "결국 넌 날 벼랑 끝으로 밀어 넣은 거야!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "jasper",
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "상자 밑바닥이나 똑똑히 봐라! 네가 뭘 훔쳤는지도 모르지?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "상자 바닥에 호박색 펜촉 인장이 찍혀 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "재스퍼의 지하 창고 상자 밑바닥에 베인의 호박색 펜촉 인장이 선명하게 돋아나 있다."
					}
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "베인의 물건을 건드리고도 무사할 줄 아느냐!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "검수원이 오고 있다... 출처가 일치하지 않으면 다 같이 끝장이야."
					},
					"type": "speech",
					"speaker": "jasper",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이미 돌아서기엔 늦었다. 검수원마저 돌파하겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "숨이 턱 막혀온다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "그 밀수품 상자, 장부에 적힌 출처와 일치하지 않는다."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "출처 따위는 상관없다. 이 상자로 채무를 대납하겠다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "붉은 잉크가 튄 장부 조각이 보이는가? 거짓 서약은 오아시스가 용납지 않는다!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "장부에 기록되지 않은 물건은 모두 압수다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 수 없어... 어떻게든 이자를 지워야 한다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "남을 희생시켜 지운 이자가 얼마나 가겠느냐..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 목숨을 건질 수 있다면 몇 번이든 남을 바치겠다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "창고 바닥에는 붉은 잉크 방울이 튄 장부 조각이 조용히 흩날렸다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사막 지하 깊은 곳, 비밀 창고의 서늘한 공기가 피부를 감싼다.",
			"상인의 밀수품을 훔쳐 채무 이자를 지우려는 잔인한 선택.",
			"남을 희생시키지 않으면 내 뼈가 흑요석으로 변해버린다.",
			"피비린내 나는 장부 위로 붉은 잉크가 흘러내리고 있었다."
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
