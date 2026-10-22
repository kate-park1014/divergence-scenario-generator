export const scenario_modern_evannext_1_HCE_03 = {
	"scenario_id": "modern_evannext_1_HCE_03",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "'심리 안정 센터' 입구는 예상보다 조용했다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 카이가 갇힌 곳이군."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "니아는 증언이 필요하다고 했어."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템이 숨긴 진실을 밝히려면…"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "조심해. 분명 감시하고 있을 거야."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알았어. 카이를 찾아야 해."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "복도 끝, 작은 병실들이 줄지어 있었다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "환자들이… 계속 '다음'만 중얼거려."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 기억을 잃은 사람들 같아."
					},
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "한 병실 안, 한 남자가 창밖을 보고 있었다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이…인가?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신이 카이 맞죠?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "…다음. 다음 기회."
					}
				},
				{
					"content": {
						"korean": "(충격) 말을 안 해…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카이, 나 좀 봐요."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "완전히 갇혀 버렸어… 저 눈빛."
					},
					"emotion": "sad"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…다음. 준비."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "증언을 듣기는커녕… 대화조차 안 돼."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "여기서 나가야 해. 지금 당장."
					}
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "감시가 심할 텐데… 괜찮겠어?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내버려 둘 순 없어. 내가 빼낼 거야."
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이, 이쪽으로. 서둘러요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "삐빅— 감시 카메라가 움직임을 감지했다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "🚨 경보음이 시설 전체에 울려 퍼졌다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장! 들켰어!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(당황) 저기… 환자들이 뛰쳐나와요!"
					}
				},
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"direction": "down",
					"action": "exit"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "보안 요원들이 카이를 끌고 지하로 사라졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 카이!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 깊은 곳으로… 끌려갔어."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지하 감금실 앞, 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석군. 감시를 피할 수 있을 거라 생각했나?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 카이를 그렇게 만든 거야?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그는 '다음'을 위한 데이터일 뿐."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 빌어먹을 시스템!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기서 멈춰라."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네 시도는… 그의 절규만 남겼다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 절규는… 이제 '다음'을 위한 데이터가 돼."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "카이를… 이용했다고?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템은 카이의 절규를 기록했다."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공은 린의 미소를 떠올렸다."
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 실패도… 시스템의 일부가 된다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 린을 만나러 갈 거야."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"나는 시스템의 감시를 느꼈다.",
			"니아는 또 다른 단서를 줬다.",
			"'장기 대기자' 카이가 '심리 안정 센터'에 갇혀 있었다.",
			"나는 그의 증언을 듣기 위해 잠입했다."
		]
	}
} as const;
