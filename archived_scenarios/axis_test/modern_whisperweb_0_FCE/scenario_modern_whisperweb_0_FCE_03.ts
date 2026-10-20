export const scenario_modern_whisperweb_0_FCE_03 = {
	"scenario_id": "modern_whisperweb_0_FCE_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"닥스의 고객 정보가 위스퍼 웹으로 유출되었다.",
			"'모두가 비밀을 숨기고 있다'는 가짜 뉴스가 도시를 뒤덮었다.",
			"주인공은 기자 린과 함께 이를 막으려 했다.",
			"시청 보안망을 뚫고 가짜 뉴스 발원지를 추적해야 했다.",
			"그러나 모든 것은 예상과 다르게 흘러갔다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시에는 가짜 뉴스가 빠르게 퍼지고 있었다."
					}
				},
				{
					"content": {
						"korean": "닥스 정보가 퍼지면서 이상한 소문이 돌기 시작했어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "당신이 닥스 정보를 유출했단 사람인가요? 그게 위스퍼 웹의 먹잇감이 됐어요."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해. 당신이 기자라면 방법을 알 텐데."
					}
				},
				{
					"content": {
						"korean": "시청 서버에 가짜 뉴스 발원지 추적 프로그램이 있지만, 보안이 너무 강해요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시청 보안망은 뚫기 어려웠다."
					}
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 프로그램으로 시청 보안을 뚫을 수 있을 거야."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이걸로 가짜 뉴스 발원지를 찾을 수 있다고요? 위험할 수 있어요."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "다른 방법은 없어. 정보 확산 속도가 너무 빨라."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…알았어요. 당신을 믿을게요."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "시청 서버가 다운되었다. 비상 상황이었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안 돼요! 프로그램이 서버를 마비시켰어요!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오작동이라고? 이런 일이 일어날 줄은…."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다음 날 아침, 병원 응급 시스템 마비로 10명이 사망했다는 속보가 전해졌다."
					}
				},
				{
					"content": {
						"korean": "이게 다 나 때문이야. 내 가족도 그 안에 있어…."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 칩에서 재생 불가능한 오류 메시지가 흘러나왔다. '모든 비밀이… 연결된다…'는 음성 기록도 함께였다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시는 충격에 빠졌다. 린은 말을 잃었다."
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "…이게 당신이 원했던 거야? 진실을 밝힌다는 명목으로, 10명의 목숨을 앗아간 게?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가… 내가 너무 경솔했어. 하지만 위스퍼 웹을 막아야만 했어."
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 되돌릴 수 없어. 내 가족들이…."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "린, 미안하다. 하지만 멈출 순 없어. 놈들을 잡아야 해."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 날 이겼다고 생각하나? 이미 씨앗은 뿌려졌다. 사람들의 불신은 멈추지 않을 것이다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 이 혼란은 우리가 끝낼 거야."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정보의 확산은 잠시 멈췄다. 그러나 갱스터 잔당 카이의 장부에는 또 다른 과거가 숨겨져 있었다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "위스퍼 웹의 본거지, 서버실 앞. 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "네가 시청 서버를 마비시킨 장본인인가. 덕분에 정보가 더 빠르게 퍼졌다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 꾸민 짓이지? 가짜 뉴스로 사람들을 죽게 한 거."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 그저 판을 깔았을 뿐. 사람들은 자신이 보고 싶은 것만 믿었을 뿐이다."
					}
				},
				{
					"content": {
						"korean": "네 계획대로는 안 될 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시청 서버가 모든 기능을 멈췄다."
					}
				},
				{
					"content": {
						"korean": "네 오만함이 불러온 결과다. 10명의 희생자는 영원히 네 그림자로 남을 것이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 이대로 끝낼 수 없어. 카이라는 자를 찾아서 모든 걸 밝혀낼 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
