export const scenario_snowy_skalhorn_85_05 = {
	"scenario_id": "snowy_skalhorn_85_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "pool_110"
	},
	"epilogue": {
		"korean": [
			"얼음 연회장의 정적이 깨졌다. 그러나 영원한 겨울은 쉽게 물러서지 않았다.",
			"뿔잔은 쓰러졌다. 하지만 그가 남긴 냉기는 여전히 숲을 감싸고 있었다.",
			"구원이었을까. 아니면, 또 다른 침해의 시작이었을까.",
			"얼어붙었던 시간 속에서, 새로운 질문들이 피어났다."
		]
	},
	"prologue": {
		"korean": [
			"초대받지 않은 손님들이, 얼음 궁전의 문을 열었다.",
			"그들은 환영받았다. 영원히 웃는 얼굴의 손님들과 함께.",
			"하지만 이 축제에는, 단 하나의 규칙이 있었다.",
			"한 번 앉으면, 영원히 일어설 수 없다는 것."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 연회장이 눈앞에 펼쳐졌다. 화석처럼 굳은 손님들이 영원히 웃고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… 축제라고? 섬뜩해."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "축제라기엔 너무 조용하군. 뭔가 찜찜해."
					},
					"speaker": "boris"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "boris",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "정갈하게 비어있는 자리들… 마치 우리를 기다린 듯이."
					}
				},
				{
					"content": {
						"korean": "정말 환대해 주는 건가?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "아니. 이런 환대는 함정이야."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "boris",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "저 손님들을 봐. 가장 오래된 자는 뿔잔과 하나가 되어가고 있어."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "몸이… 얼어붙어가는 거야?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "완전히 얼어붙는 것. 그게 이 축제의 끝인 것 같군."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여길 봐. 단 한 명도 자리에서 일어선 흔적이 없어."
					},
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 한 번 앉으면 영원히 갇힌다는 거야?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래. 이 정갈한 환대 뒤에 숨겨진 진실이지."
					},
					"speaker": "boris",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 손님이 아니라… 전시될 조각상에 불과해."
					},
					"speaker": "boris"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "아아… 앉아라. 너희도 영원한 축제의 일부가 될지니."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어서 오렴, 새로운 손님들아."
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "너희를 위한 자리가 여기 있단다."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "무슨 소리야! 우린 앉지 않아!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아아, 걱정 말렴. 이 축제는 영원히 끝나지 않는단다."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "영원히 얼어붙는다는 뜻이겠지!"
					},
					"speaker": "boris",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 광기 어린 환대에 속지 마!"
					},
					"speaker": "boris"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너의 축제는 여기서 끝이야!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "감히… 나의 영원한 정적을 깨뜨리다니…."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "하지만… 겨울은 다시 오게 될 것이다…."
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "이제야 이 축제가 끝났어…."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 손님들의 미소가, 비로소 편안해 보였다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만 이 숲은 아직 완전히 깨어나지 못했다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
