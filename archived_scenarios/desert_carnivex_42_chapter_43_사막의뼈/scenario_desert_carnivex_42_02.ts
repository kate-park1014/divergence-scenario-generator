export const scenario_desert_carnivex_42_02 = {
	"scenario_id": "desert_carnivex_42_02",
	"order": 2,
	"random_boss_title": {
		"korean": "오아시스 파수꾼"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"독에 중독된 친구 아미르의 다리 뼈가 녹아내리기 시작했다.",
			"주인공은 해독제의 단서를 구하기 위해 잊힌 석조 폐허로 발걸음을 옮긴다.",
			"그곳에서 만난 석조 폐허의 상인 카사이.",
			"그러나 폐허 깊은 곳에서는 무서운 진실과 함께 파수꾼이 길을 막아서는데 —"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무너진 석조 기둥 사이로 메마른 사막 바람이 불어온다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "아미르의 독을 풀려면 여기서 상인을 찾아야 해."
					},
					"type": "speech"
				},
				{
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가 했더니 탐험대인가? 난 이 폐허에서 물건을 파는 상인 카사이라네."
					}
				},
				{
					"content": {
						"korean": "…뼛속까지 차가운 기운이 감돈다."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사막 독의 해독제를 찾는다면 폐허 안쪽 안뜰로 가보게나."
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "바닥에 이상한 조각이 떨어져 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어디 보게... 단단하고 희끄무레한 백골빛 껍질 조각이군."
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "섬뜩하고 기분 나쁜 촉감이야."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 백골빛 껍질 조각, 무언가의 허물일지도 몰라."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kasai",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "안뜰로 깊이 들어올수록 핏자국이 희미하게 남아있어."
					},
					"type": "speech"
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 폐허 깊은 곳은 오아시스 파수꾼이 길을 통제하고 있다네."
					}
				},
				{
					"content": {
						"korean": "모래 길잡이의 노란 물을 신성한 영약이라 믿는 광신도들이지."
					},
					"emotion": "sad",
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "거짓 선동에 속아 사람들을 해치고 있군."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"content": {
						"korean": "앞에서 파수꾼의 사악한 기운이 풍겨 오네. 조심하게!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손끝이 떨려오는군."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떤 거짓말로 막아서든 아미르를 위해 뚫고 지나가겠어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 수호자가 기괴한 무기를 쥔 채 길을 막아선다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈춰라! 길잡이께서 내리신 노란 물은 구원의 신성한 영약이다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거짓말 마라! 그 독물 때문에 내 동료의 다리 뼈가 녹아가고 있다!"
					}
				},
				{
					"content": {
						"korean": "신성한 기적을 모독하는 자들에게는 오직 죽음뿐이다!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오아시스 파수꾼이 비명을 지르며 바닥에 쓰러졌다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kasai",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카사이, 아까 발견한 백골빛 껍질 조각을 자세히 봐줘."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 껍질... 이건 사람의 뼈를 삼키는 괴물이 남긴 허물일세!"
					},
					"emotion": "angry",
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길잡이가 준 노란 물은 영약이 아니라 뼈를 녹이는 무서운 독이야!"
					},
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "역시 신성한 영약 따위가 아니었어. 근원을 쫓아야 한다."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "상인 카사이의 진실을 뒤로한 채, 독의 원천을 찾아 협곡으로 향한다."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "영약의 위대함을 알지도 못하는 우매한 자들 같으니!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르를 살리기 전엔 결코 무릎 꿇지 않아!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
