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
	"prologue": {
		"korean": [
			"붉은 오팔 칼날이 뒤덮인 사막의 정원.",
			"여신이라 믿었던 아세라의 진실이 마침내 눈앞에 드러난다.",
			"거짓된 인도자와 배신으로 얼룩진 성검의 정령.",
			"피의 속박을 끊어내기 위한 마지막 선택만이 남아있다."
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
			"붉은 오팔 거울이 산산조각 나자, 오팔로 굳어있던 검객들이 다시 눈을 떴다.",
			"마신 아세라의 오랜 원한도 붉은 용암 모래와 함께 스러져 갔다.",
			"거짓으로 우리를 이끌었던 아미르의 죄업은 깊은 모래 아래 묻혔다.",
			"마침내 사막에 서늘한 바람이 불어오고, 모래밭은 본래의 빛을 되찾았다.",
			"피로 물들었던 잔혹한 여정은 비로소 막을 내렸다."
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
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "붉은 오팔 칼날이 수놓아진 사막의 정원이다. 사방에 유리 조각상들이 서 있다."
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 왔군요. 저 제단 위에 거울을 올리면 여신 아세라께서 구원해 주실 겁니다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정말 이 거울에 검객의 피를 바르는 게 여신을 구하는 길인가?"
					}
				},
				{
					"content": {
						"korean": "그럼요. 거울의 마력으로 여신의 결계를 강화해야 이 사막이 평화로워집니다."
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…주변을 감싼 기운이 너무 흉흉해."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "저기 공중에 떠 있는 여신 아세라의 칼날 뒤편을 봐라."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여신의 신성한 문양이 붉게 파동을 치는 것뿐입니다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니다. 저건 붉은 오팔 거울과 완벽히 같은 문양이다. 거울이 칼날을 속박하고 있어!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "거울을 깨뜨려야만 피의 광기와 결계를 멈출 수 있다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "불길한 붉은 빛이 등골을 서늘하게 만드네."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "사막에 굳어있는 유리 조각상들의 가슴을 똑똑히 봐라."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "여신의 구원을 받지 못한 불행한 자들일 뿐입니다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "거짓말 마라! 조각상들 가슴마다 네가 준 거울과 똑같은 붉은 흔적이 남아있어!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이들은 모두 너의 거짓에 속아 거울에 피를 바쳤다가 굳어버린 피해자들이다."
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "…우리를 처음부터 덫에 빠뜨린 거였어."
					},
					"emotion": "base"
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아미르, 네 칼집에 박힌 성검 파편은 대체 뭐지?"
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…짹짹거리긴! 그래, 내 조상이 바로 성검 아세라를 찌르고 부러뜨린 첫 번째 검객이다!"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 피를 바쳐 아세라를 완전히 굴복시키고, 마신의 힘을 내가 차지하겠다!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "받아라 아세라! 내 검객의 피다!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아미르가 거울에 피를 쏟아붓는 순간, 사방에서 칼날이 솟구쳐 아미르의 가슴을 꿰뚫었다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아미르가 바친 피의 대가로 아세라의 칼날에 단죄당했다."
					},
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "탐욕의 끝은 결국 참혹한 죽음뿐이구나."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐욕스러운 배신자의 후손이여… 감히 또다시 내게 피의 속박을 씌우려 했느냐!"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "여신의 자애로운 아우라가 걷히고 오팔 가면이 깨지며 붉은 용암 모래가 쏟아져 내린다."
					}
				},
				{
					"content": {
						"korean": "너희 검객들은 나를 고문하고 저주를 걸어 마신으로 만든 가해자다! 모두 오팔로 굳어라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아세라가 피해자였음을 깨달았다. 거울을 깨뜨려 피의 광기를 멈추겠다!"
					}
				},
				{
					"content": {
						"korean": "이 비극적인 굴레를 여기서 끝내야 해!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "붉은 오팔 결계가 사막 전체를 덮치고 몸이 유리로 굳어간다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 붉은 오팔 거울을 깨뜨리지 못했어. 다시 일어서야 한다!"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 검객들이여, 영원히 붉은 보석 조각상으로 남아라!"
					},
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거울이… 깨지다니… 마침내 나를 짓누르던 핏빛 속박이…"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 오팔 거울이 산산조각 나며 사막의 피의 결계가 깨졌다!"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "굳어있던 조각상들이 풀려나고, 사막의 붉은 모래밭이 본래의 모래빛을 되찾았다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "성검 아세라의 영혼도 마침내 안식을 찾고 스러져 간다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
