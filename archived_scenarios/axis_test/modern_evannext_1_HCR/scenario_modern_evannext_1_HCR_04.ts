export const scenario_modern_evannext_1_HCR_04 = {
	"scenario_id": "modern_evannext_1_HCR_04",
	"order": 4,
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "황금 문이 다시 열리고, 익숙한 방이 나타났다."
					}
				},
				{
					"content": {
						"korean": "또 이 방? 세 번째인데…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "매번 같은 곳으로 돌아오는구나."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "왔구나. 준비의 방에."
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "진정한 기회는… 항상 다음 라운드에 있어."
					}
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "이 황금 실타래를 따라… 계속 준비하면 돼."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "봐. 다른 지원자들도…"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "모두 황금 실타래를 감고 있어."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 사람들… 눈이 비어 보여."
					}
				},
				{
					"content": {
						"korean": "다음… 다음 기회만이…"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "완벽한 준비를 위한… 소중한 조언이야."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "저 조언이… 우릴 묶어두는 것 같아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "달콤한 속삭임이 방을 채웠다."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "어서, 실타래를 잡아."
					}
				},
				{
					"content": {
						"korean": "더 완벽한 다음을 만들 수 있어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "아니. 이건 함정 같아."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "'다음'만을 외치는… 마법 같은 속삭임."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "무슨 소리니? 너를 돕는 거야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 질서를 따르는 게… 더 깊은 함정이야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 실타래를 잡지 않았다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "왜 거부하니? 이 황금 길을."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신의 길이 아니야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 굴레를 끊을 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공이 실타래를 잡아 끊으려 했다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "(버럭) 이단자! 뭘 하는 거야!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "린 님의 말씀을 따르지 않는 건…!"
					},
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "두 명의 지원자가 주인공을 노려봤다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "큭… 어리석은 용기."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너의 '다음'은… 정해져 있다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 내가 정할 거야."
					}
				},
				{
					"content": {
						"korean": "쓰러진 그림자 뒤로, 또 다른 문이 희미하게 열렸다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "다음은 진짜 시작이 될 거야."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "준비의 방 앞에 누군가 서 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 질서를 거부하는군."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 질서는 거짓이야."
					}
				},
				{
					"content": {
						"korean": "린의 조언을 무시하고…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "실타래를 끊으려 하다니."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이제 그 굴레에서 벗어날 거야."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 돌아왔군. 이 굴레로."
					}
				},
				{
					"content": {
						"korean": "아니. 이 방을 벗어날 방법을 찾을 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세 번째 시험이 끝나고…",
			"모든 길은 같은 방으로 돌아왔다.",
			"끝없이 다음만을 기다리는 굴레.",
			"그 속에서, 길 잃은 안내자가 다가왔다."
		]
	}
} as const;
