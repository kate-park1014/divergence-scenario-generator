export const scenario_desert_vane_45_05 = {
	"scenario_id": "desert_vane_45_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "pool_BloodLedger_Vane_V1"
	},
	"epilogue": {
		"korean": [
			"피 묻은 금반지가 산산조각 나며 흑요석 가시덤불이 모래 속으로 소멸했다.",
			"제단에 갇혔던 케메트와 검객들의 목숨이 돌아왔고, 오아시스에는 다시 맑은 샘물이 흘렀다.",
			"동료를 속이고 남을 희생시켰던 죄책감까지 완전히 지워지지는 않는다.",
			"하지만 이제 사막을 향해 걸어갈 수 있다. 타인의 장부가 아닌, 내 온전한 발걸음으로."
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
	"prologue": {
		"korean": [
			"베인의 피빛 제단 깊은 곳에 도달했다.",
			"오아시스를 적시던 물은 사슬과 검은 잉크로 변해 굳어가고 있었다.",
			"타인을 속여 넘어뜨린 서명이 결국 스스로의 목을 조르는 사슬이 되었다.",
			"이 피 묻은 채무 계약을 끝낼 방법은 단 하나뿐이다."
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "제단 입구 주변에 압류당한 검객들의 무기가 기괴하게 널브러져 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "카사이의 검 끝에서 피 대신 호박색 잉크가 흘러나오고 있어."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 소름이 돋는 광경이다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "검객들의 신체와 무기가 이미 베인의 피의 장부에 침식당했던 거야."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 나한테 서명을 빼앗아 채무자로 만들었던 네가."
					},
					"speaker": "kemet",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "케메트, 널 구하러 제단으로 온 거야."
					}
				},
				{
					"content": {
						"korean": "…숨이 막힐 듯한 침묵이 흐른다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "나를 속이고 덤터기 씌웠으면서 이제 와서 죗값을 치르겠다는 건가?"
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 400,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "아슈르의 도장에 찍혔던 붉은 잉크가 흑요석 결정으로 굳어가던 걸 봤겠지."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 붉은 잉크가 베인의 흑요석 뼈대로 흡수되고 있었어."
					}
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "맞아. 우리가 타인을 희생시켜 바친 서명이 전부 베인의 뼈를 채우는 재료였다!"
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…내 손도 검게 물들어 가는 기분이다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"duration_ms": 400,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "재스퍼의 지하 창고 상자 밑바닥에 적혀 있던 호박색 펜촉 인장을 기억하나?"
					},
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "암시장의 모든 물품과 상인이 처음부터 베인의 압류 목록에 올라 있었어."
					}
				},
				{
					"content": {
						"korean": "그 피 묻은 금반지를 스스로 깨뜨리지 않는 한 우리 모두 장부 속 잉크가 될 뿐이다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "돌이킬 수 없는 결단의 순간이 다가왔다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "제단 한가운데, 씹던 시가를 물고 있는 베인이 서 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "베인! 더 이상 사막의 검객들을 피의 장부에 가두지 마라!"
					}
				},
				{
					"direction": "left",
					"action": "exit",
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "주점 테이블 위에 새겨졌던 가시 모양 조항 문자를 잊었나? 오아시스 전체가 내 압류 조항이다!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시가가 내던져지며 오아시스 전체가 흑요석 가시덤불로 변하기 시작한다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "동료를 속이던 피 묻은 금반지를 내 손으로 직접 깨부수겠다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희가 남에게 넘긴 죄책감의 이자가 얼마인지 똑똑히 깨달아라."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 망치를 쥘 힘이 남아있다. 다시 일어서야 해."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "내 살아있는 피의 장부가… 흑요석 사슬이 깨지다니…!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "타인을 희생시켜 연장해 온 피의 채무는 여기서 끝이다!"
					}
				},
				{
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "가시덤불이 산산조각 나고… 맑은 샘물이 다시 고이기 시작했어!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흑요석 가시가 사그라들며 묶여 있던 검객들의 목숨이 돌아왔다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
