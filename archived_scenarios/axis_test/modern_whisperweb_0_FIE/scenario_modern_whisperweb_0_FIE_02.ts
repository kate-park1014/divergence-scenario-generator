export const scenario_modern_whisperweb_0_FIE_02 = {
	"scenario_id": "modern_whisperweb_0_FIE_02",
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
	"prologue": {
		"korean": [
			"정보의 파동은 더욱 거세졌다.",
			"주인공은 중계 서버의 흔적을 쫓아 한 수리점을 찾아냈다.",
			"그곳에는 과거의 그림자를 숨긴 자가 있었다.",
			"모든 정보는 대가를 요구했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "오래된 전자기기들이 쌓인 수리점. 먼지 쌓인 간판에 '닥스의 데이터 복원'이 희미하게 보였다."
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹의 데이터 흐름… 네가 알지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…난 그냥 망가진 기기나 고치는 사람이야."
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거짓말 마. 네가 여기 서버를 관리하고 있잖아."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "만지지 마. 여기엔 내 지난 기록들이 잔뜩 들어있어."
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "상관 없어. 위스퍼 웹의 근원을 찾아야 해."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이걸 강제로 열면… 내 전과 기록이 세상에 다시 풀려."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 숨긴 게 더 많을 거 같아."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공은 닥스의 경고를 무시하고 서버에 연결했다. 데이터가 빠르게 복제되기 시작했다."
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 내 과거가…!"
					}
				},
				{
					"content": {
						"korean": "수백만 크레딧의 벌금과 영업 정지 명령서가 닥스의 디스플레이에 송출되었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게 전부야?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "서버 깊숙한 곳에서 오래된 데이터 칩이 발견되었다. 재생 버튼을 누르자 오류 메시지와 함께 짧은 음성이 흘러나왔다. '모든 비밀이… 연결된다…'"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "네놈 때문에… 내 가게는 끝났어. 내 삶도…!"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 위한 대가일 뿐이야."
					}
				},
				{
					"content": {
						"korean": "네가 뭘 안다고…! 나 같은 사람에게 남은 건 아무것도 없어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 이상은 네가 알 필요 없어. 이제 네 역할은 끝났어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…넌 결국 혼란만 부추길 뿐이야. 두고 보자고."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "수많은 데이터가 모든 것을 덮쳤다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 놈. 정보는 힘을 부르고, 그 힘은 나를 키운다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 도시 괴담의 근원지를 찾아야겠어."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나를 멈춰도… 기록들은 이미 퍼졌어. 이 흐름은 멈추지 않아."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 이 혼란은 여기서 끝낼 거야."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가 사라지자 서버실은 잠시 침묵했다. 그러나 도시에는 기이한 꿈과 소문이 퍼지기 시작했다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐름은 멈추지 않는다. 오히려 더 많은 비밀들이 수면 위로 떠오를 뿐."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "깊은 서버실, 무수히 많은 전선이 얽힌 곳에 누군가 서 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왔군. 네가 뿌린 수많은 기록들이 여기까지 흘러왔어."
					}
				},
				{
					"content": {
						"korean": "네가 이 흐름을 만들었나?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "난 그저 모든 정보가 제자리를 찾는 걸 도울 뿐. 네 손으로 모든 걸 열었잖아."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
