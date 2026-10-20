export const scenario_modern_whisperweb_0_HCR_03 = {
	"scenario_id": "modern_whisperweb_0_HCR_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시 병원 응급실 앞은 사람들로 북적였다."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이런 난리가 났는데도 병원에서는 아무 말도 안 해요."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 일이죠?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹이 퍼트린 가짜 뉴스 때문에 응급실이 마비됐어요. 응급 환자들이 치료를 못 받고 있어요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사실 확인이 됐나요?"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "현장 상황이 이걸 증명해요. 빨리 이 기사를 내야 해요."
					}
				},
				{
					"content": {
						"korean": "아직 병원 측의 공식 입장이 없어요. 섣부른 보도는 더 큰 혼란을 부를 수 있어요."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기다리다가는 피해만 더 커져요. 지금도 환자들이 돌아가고 있다고요!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "병원 로비의 디지털 안내판에 무작위 숫자와 깨진 글자들이 찰나의 순간 나타났다 사라졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "병원은 거짓 정보 유포에 대한 책임을 져야 합니다. 먼저 공식 정보를 요청해야 해요."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "병원 측에서 계속 답변을 피하고 있어요. 시간을 끄는 것 같아요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간을 더 줘야 해요. 정확한 정보가 중요합니다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사람들은 이미 죽어가고 있어요! 더 이상 기다릴 수 없어요."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "확인되지 않은 정보는 독이 됩니다. 모두에게 해를 끼칠 거예요."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "병원 측에서 공식 답변이 왔습니다. 위스퍼 웹 루머는 모두 거짓이라고 합니다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거짓… 그럼 이 모든 혼란은…"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그 사이 응급실 앞에는 병원 이송을 기다리던 중증 환자 50명이 제때 치료받지 못하고 발길을 돌려야 했다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 신중함이 이런 결과를 만들었어. 50명의 환자가 돌아섰어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시 외곽의 낡은 통신 중계탑. 서버실 안에 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "봐. 네가 진실을 찾겠다고 시간을 끌 때, 50명의 환자가 병원을 떠났어."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 퍼트린 가짜 뉴스 때문에 벌어진 일이야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 그저 정보가 흐르게 뒀을 뿐. 사람들이 그 정보를 믿고 움직였을 뿐."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 혼란을 멈추겠어."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이것으로 끝이라고 생각하나? 정보는 계속 다른 경로로 흘러갈 거야."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 나는 모든 정보의 왜곡을 막을 거야."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 자의 그림자는 사라졌지만, 도시의 디지털 안내판은 여전히 불규칙적으로 깨진 정보를 띄웠다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네 원칙은 50명의 환자를 외면하게 만들었어. 아무것도 지키지 못했군."
					}
				},
				{
					"content": {
						"korean": "아니. 내일은 위스퍼 웹의 모든 중계 서버를 추적할 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 정보 교란은 멈추지 않았다.",
			"기자 린은 병원 응급실 마비 소식을 가져왔다.",
			"위스퍼 웹의 가짜 뉴스 때문이라고 했다.",
			"주인공은 사실 확인을 위해 시간을 벌어야 했다."
		]
	}
} as const;
