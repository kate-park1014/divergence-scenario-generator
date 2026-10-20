export const scenario_modern_whisperweb_0_HIE_02 = {
	"scenario_id": "modern_whisperweb_0_HIE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"type": "speech",
					"content": {
						"korean": "뒷골목 깊숙한 곳. 닥스의 작업실은 온갖 모니터로 가득했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 듣던 대로 과감하네."
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "위스퍼 웹의 광고판 해킹 정보. 가지고 있잖아."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그래. 하지만 공짜는 없어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "익명성 우회 통로를 구축해줄게. 서버에 연결해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐음… 나쁘지 않은데."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"action": "enter"
				},
				{
					"content": {
						"korean": "닥스의 서버에 익명성 우회 통로를 구축하는 작업이 시작되었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정말 안전한가? 내 기록은? 가족 기록은?"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "걱정 마. 완벽한 통로야. 네 정보를 지켜줄 거야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전에 위스퍼 웹 때문에 가족 대출 기록이 다 털렸어. 그때 생각하면…."
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "이번엔 다를 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "자, 통로 구축 완료."
					}
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고마워. 이게 네가 원하던 정보야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥스가 위스퍼 웹의 광고판 해킹 정보가 담긴 데이터 칩을 건넸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "근데… 최근에 좀 이상한 칩을 주웠어."
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "재생이 안 돼. 깨진 소리만 나. '모든 비밀이… 연결된다…' 같은."
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…신경 쓰지 마."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "도시의 대형 전광판들이 일제히 깜빡였다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥스 가족의 대출 연체 기록이 깨진 이미지와 함께 전광판에 나타났다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…이게 무슨… 내 가족 기록이…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "내가 설치한 통로로 역추적된 건가…."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "네가! 네가 한 짓이야! 정보를 지켜준다고 했잖아!"
					}
				},
				{
					"content": {
						"korean": "…미안해."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전광판 옆 벽면에는 위스퍼 웹의 로고와 유사한 패턴의 낙서가 선명하게 보였다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이제 위스퍼 웹을 멈춰야만 한다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "정보가 뒤섞인 서버실. 정체 모를 자가 기다리고 있었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥스 가족의 대출 기록. 재밌지? 사람들이 뭘 좋아하는지 알아."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥스를 건드렸어. 용서 못 해."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "넌 나에게 문을 열어줬을 뿐. 난 그 문으로 들어갔고."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "입 다물어!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 행동이 결국 모두를 침몰시키는군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 린의 소문을 파헤쳐 진실을 밝힐 거야."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너도 알게 될 거야. 정보가 사람들을 어떻게 바꾸는지…."
					}
				},
				{
					"content": {
						"korean": "시끄러워."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 그러나 정보 유출은 끝나지 않았다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "다음은 린. 그녀의 특종 기사가 위스퍼 웹에 의해 조작되었다는 소문이 돌았다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠 속에서 정보 교란은 계속되었다.",
			"위스퍼 웹의 다음 흔적은 뒷골목 해커, 닥스에게 있었다.",
			"그에게서 광고판 해킹 정보를 구매해야 한다.",
			"대신 익명성 우회 통로를 구축해줘야 했다.",
			"이 거래는 위스퍼 웹의 진실에 한 발 더 다가가는 길이었다."
		]
	}
} as const;
