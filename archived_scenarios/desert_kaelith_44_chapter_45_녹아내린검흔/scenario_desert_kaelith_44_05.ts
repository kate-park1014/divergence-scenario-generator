export const scenario_desert_kaelith_44_05 = {
	"scenario_id": "desert_kaelith_44_05",
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
		"pool_id": "pool_MoltenGlass_Kaelith_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바닥의 모래가 붉은 초고열 유리가 되어 흐르고 있었다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "발밑이 녹아내릴 것처럼 열기가 심각해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기가 바로 카엘리스가 갇힌 녹아내린 유리 굴이오."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "그의 검흔에서 나오는 열기가 온 사막을 뒤덮고 있소."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 그 검흔의 화염을 직접 꺼뜨려야 해."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "벽면에 붉게 꿈틀거리는 칼자국들이 보이시오?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "지난번처럼 물을 쏟으면 열충격으로 유리가 폭발하겠지."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞소. 대신 액체를 흘리지 말고 동제 물병의 순동으로 검흔을 메워 굳혀야 하오."
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "순동이 유리를 녹여붙여 결정을 봉인하는 거구나."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 너무 뜨거워 숨이 턱 막혀."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "들리는가? 가면 안쪽에서 울리는 섬뜩한 웃음소리가."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "검을 완성하지 못한 집착이 그를 괴수로 얽매고 있어."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "슬픈 열망이지만 멈추지 않으면 온 사막이 잿더미가 되오."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "연민을 누르고 미완의 검흔을 굳혀내겠어."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 기둥 너머에 카엘리스가 있소. 굴 전체가 용융되고 있구려."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "동제 물병을 손에 쥐고 검흔을 굳힐 준비를 하자."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "피까지 타들어 가는 기분이야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사막의 열병을 여기서 끊겠다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "캬하하하! 피가 모자라! 더 많은 피를 다오!!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": " 거대한 백열의 유리 칼날이 탐험대를 무참히 덮쳤다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 끝낼 순 없어. 다시 동제 물병을 쥐자."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "굴 중심부에서 백열의 화염 아지랑이가 폭발하듯 솟구쳤다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "아하하하! 팔렸어! 손님이 돈을 안 냈네? 아니지, 내가 안 받았나?!"
					}
				},
				{
					"content": {
						"korean": "카엘리스가 머리를 쾅쾅 쥐어박더니 스스럼없이 가면을 깨부쉈다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "아직! 0.1밀리미터가 모자라! 네놈들 피를 뿌려 내 검을 완성하겠다!!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "가면 틈새로 열기가 터져 나오며 3미터 크기의 백열 유리 괴수로 뒤틀렸다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너의 비극적인 광기를 봉인해 주마, 카엘리스!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "내... 내 검이... 백열의 불꽃이 꺼져가는구나..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동제 물병으로 이글거리던 검흔을 완전히 메워 굳혔다!"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "순동이 유리를 녹여붙였소! 화염이 꺼지고 있소!"
					},
					"speaker": "amir",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "붉은 유리가 식어가며 서늘하고 맑은 모래로 되돌아왔다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "사막이 비로소 안식을 찾았구나."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"녹아내린 유리 굴 깊은 곳, 뿜어져 나오는 열기가 피부를 태울 듯 뜨겁다.",
			"태양을 베려던 카엘리스의 붉은 집착이 사막 전체를 열병으로 병들게 했다.",
			"길잡이 아미르와 함께, 이 굴 속에 새겨진 미완의 검흔을 정화해야 한다."
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
	"epilogue": {
		"korean": [
			"백열의 화염이 꺼지자, 녹아내리던 굴 속에 비로소 서늘한 바람이 불어왔다.",
			"카엘리스의 비극적인 검흔은 순동의 껍질 속에 영원히 정적으로 잠들었다.",
			"이글거리던 붉은 사막 바닥은 맑고 고운 본래의 시원한 모래로 되돌아왔다.",
			"사막을 괴롭히던 열병이 그쳤고, 가이드 아미르의 미소와 함께 길은 다시 이어졌다."
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
