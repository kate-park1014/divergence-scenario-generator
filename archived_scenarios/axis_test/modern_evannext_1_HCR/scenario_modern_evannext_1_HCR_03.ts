export const scenario_modern_evannext_1_HCR_03 = {
	"scenario_id": "modern_evannext_1_HCR_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "손안에 낡은 회중시계가 쥐여졌다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "'조금 더 기다리면…'"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 문구, 또…?"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…끝이 없어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구세요? 괜찮으세요?"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "나는… 카이. 다음, 다음, 다음…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음 시험이요?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "천 번도 넘게… 같은 시험을 봤어."
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "천 번이나요?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 조각조각 부서지는 기분이야."
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "쉬셔야 해요. 너무 지쳤잖아요."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 다음 시험을… 준비해야…"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잠깐, 그렇게 계속할 순 없어요."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 도울게요."
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다들, 카이 씨 좀 도와줘요."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "하지만… 규칙 위반이야."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "규칙보다 사람이 먼저잖아!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "날카로운 종이 마찰음이 들려왔다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						4
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "규칙은 완벽하다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구야, 당신들은!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "질서를 유지하는 자."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai"
				},
				{
					"type": "direction",
					"spot": [
						5,
						4
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "규칙 위반. 회중시계는 회수한다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "안 돼! 그건 카이 씨 거야!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "시스템의 물건이다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 다음 시험은…"
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카이는 정신을 잃고 끌려갔다."
					},
					"emotion": "sad",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "협력자 셋, 응시 자격 박탈."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런… 믿을 수 없어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너도 '다음'만을 준비해라."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 이 덫을 부술 방법을 찾을 거야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "큭… 이 작은 파동이…."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "곧 거대한 흐름에 휩쓸릴 거다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "흐름? 누구 마음대로!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨도, 우리도 구할 거야."
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 또 다른 문이 희미하게 열렸다."
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "회랑 끝, 거대한 시험실 문이 열렸다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "정체 모를 그림자가 그 안에 서 있었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "감히 규칙을 어기다니."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 규칙이라면 깨부술 거야."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간의 덫에 영원히 갇혀라."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 카이 씨를 구할 거야."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"두 번째 시험 끝. 회중시계가 놓였다.",
			"또 다시 '다음'을 기다리라는 글귀.",
			"그때, 지쳐 쓰러진 기사를 발견했다.",
			"그는 천 번의 시험에 갇혀 있었다."
		]
	}
} as const;
