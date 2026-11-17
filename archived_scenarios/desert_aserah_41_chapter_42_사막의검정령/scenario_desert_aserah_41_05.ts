export const scenario_desert_aserah_41_05 = {
	"scenario_id": "desert_aserah_41_05",
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
		"pool_id": "pool_GlassCalamity_Aserah_V1"
	},
	"epilogue": {
		"korean": [
			"거대한 칼날 거상이 아련한 빛이 되어 스러지자, 온 신전을 짓누르던 오팔빛 저주가 거짓말처럼 멈추었다.",
			"단단하게 굳어버렸던 아미르의 피부에 온기가 되돌아왔고, 갇혀 있던 조각상들도 본래 모습을 되찾았다.",
			"검객들의 탐욕에 상처입었던 정령은 마침내 오랫동안 갈망하던 안식을 얻었다.",
			"탐험대는 사죄의 마음을 가슴에 품은 채, 마침내 평화가 찾아온 황금빛 사막을 향해 발걸음을 옮겼다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "신전 입구에 들어서자 오팔빛 기운에 공기가 무겁게 가라앉는다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "몸이... 점점 유리처럼 단단하게 굳어가고 있어."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "조금만 더 버텨줘. 여기서 아세라의 저주를 반드시 끊어내겠어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숨을 쉬는 것조차 점점 무거워진다…"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "신전 회랑에 날카로운 오팔빛 결정체들이 기둥처럼 솟아 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 모래 언덕에서 봤던 유리 파편이 거상의 피부를 이루는 조각이었어."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "날카로운 유리 기운이 살을 찌르는 것 같아."
					},
					"speaker": "character_2"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "맞아, 거상이 가까이 있을수록 몸의 저주도 짙어지고 있어."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "거상의 실체를 확인했으니 망설임 없이 전진한다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "붉은 모래 바닥 위에 백금빛으로 반짝이는 갑주 조각들이 파묻혀 있다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "오아시스에서 찾았던 백금빛 갑옷 조각이 거상을 감싼 전신 갑주였구나."
					}
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "한때 사막을 지키던 갑옷이 검객들의 배신으로 검게 물들었지."
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "기온이 이상할 정도로 뜨거워지고 있어."
					}
				},
				{
					"content": {
						"korean": "단단한 갑주로 무장했어도 타락한 심장은 뚫을 수 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "바닥을 따라 붉은 모래 마그마가 용암처럼 이글거리며 흘러간다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "골짜기에서 본 마그마 자국이 거상 몸에서 흐른 물질의 흔적이었어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "더 이상 발이 안 움직여... 날 두고 가서 정령에게 사죄해 줘."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너를 두고 가진 않아. 알현실 문을 열고 저주를 풀겠다."
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "검을 거두지 않는 한 너희도 붉은 오팔빛 조각상이 될 뿐이다."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 포기할 수 없어. 검을 내려놓고 사죄할 때까지 다시 싸운다!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "가면이 쪼개지며 칼날 거상이 무릎을 꿇고, 슬픈 목소리가 울려 퍼진다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐욕에 눈이 멀어 나를 이용하고 버린 검객들을 용서할 수 없다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리가 휘둘렀던 탐욕의 검을 사죄합니다. 억울하게 갇힌 자들을 위해 검을 숙입니다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "몸을 죄어오던 보석 저주가... 풀리고 있어!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아세라의 분노가 가라앉자 신전에 따스한 사막 바람이 불어왔다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "십여 미터 높이의 칼날 거상 아세라가 여덟 자루 유리 대검을 회전시키며 솟아오른다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 휘두른 검의 무게를 깨달아라! 네 검 역시 이 사막의 장식이 될 것이다!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "벽화의 여덟 자루 유리가 저 대검이었어! 정면으로 맞아싸운다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "등 뒤의 대검이 온 신전을 베어버릴 기세야!"
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"아세라의 유구한 신전 깊은 곳. 붉은 오팔빛 기운이 맴돈다.",
			"아미르의 몸을 삼켜오는 보석 저주를 풀기 위한 마지막 기회.",
			"복수심에 타락한 검의 정령 아세라가 유리의 대검을 쥐고 기다린다.",
			"진심 어린 사죄만이 사막의 억울한 넋들과 동료를 구원할 수 있다."
		]
	}
} as const;
