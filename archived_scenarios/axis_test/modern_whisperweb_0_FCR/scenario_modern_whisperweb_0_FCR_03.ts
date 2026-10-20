export const scenario_modern_whisperweb_0_FCR_03 = {
	"scenario_id": "modern_whisperweb_0_FCR_03",
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
			"네온 불빛 아래, 도시는 여전히 거짓 정보로 뒤덮여 있었다.",
			"위스퍼 웹은 도시 괴담을 퍼뜨리며 시민들을 혼란에 빠뜨리고 있었다.",
			"주인공은 기자 린을 찾아 보도 통제를 요구했다.",
			"시민의 불안을 잠재우기 위해, 진실은 통제되어야 했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 뉴스룸, 기자 린이 전광판을 응시하고 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위스퍼 웹에 대한 기사를 멈춰야 해."
					}
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 시민들은 진실을 알아야 할 권리가 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지금은 혼란만 키울 뿐이야. 보도는 중단해야 해."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "스튜디오 대형 스크린에 깨진 이미지와 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라졌다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이런 혼란을 막으려면 보도를 중단해야 한다고."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 언론 탄압이야. 막을 수 없어."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "공식 발표 전까지, 그 어떤 보도도 안 돼."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "안 돼!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
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
					"speaker": "narrator",
					"content": {
						"korean": "린의 손에서 데이터 칩이 떨어져 바닥에 부딪혔다. 오류 메시지와 함께 '모든 비밀이… 연결된다…'는 음성 기록이 흘러나왔다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "(충격) 이게… 뭐지?"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기사는 내가 검열할 거야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "(분노) 안 돼! 이건 시민들을 속이는 짓이야!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어쩔 수 없어."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳의 골목 벽면에서 특정 패턴의 낙서가 눈에 띄었다. 송출실 전자기기에서도 유사한 문양이 발견됐다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기사를 막았다. 이로써 혼란은 잠재워질 거야."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "(절규) 네가 막은 건 기사가 아니야! 수천 명 시민들의 목숨이야!"
					},
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "위스퍼 웹의 다음 공격에 대비할 수 있었던 기회를 네가 없앴다고!"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "겨우 보도를 막았다고 생각하나? 이미 수천 개의 정보는 다른 곳으로 퍼지고 있어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 막은 건 작은 물줄기일 뿐. 거대한 파도는 이미 시작됐다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "정체 모를 자의 잔상이 사라졌다. 린의 비난이 귓가에 맴돌았다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시는 통제할 수 없는 정보의 심연으로 빠져들고 있었다."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 통제하려 한 건 자유로운 정보였다. 실패다."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 실패하지 않아. 내일, 린의 사무실에서 검열된 기사를 다시 확보할 거야."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "송출실의 서버 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왔군. 정보를 통제하려는 자가."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 혼란을 부추기는 게 너야."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사람들은 진실을 알 권리가 있어. 그걸 막은 건 네가 아니었나?"
					}
				},
				{
					"content": {
						"korean": "시민들을 보호하기 위한 거였어. 네 뜻대로 안 돼."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
