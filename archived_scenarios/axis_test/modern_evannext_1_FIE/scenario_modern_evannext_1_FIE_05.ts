export const scenario_modern_evannext_1_FIE_05 = {
	"scenario_id": "modern_evannext_1_FIE_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_098"
	},
	"prologue": {
		"korean": [
			"문은 부서지지 않았다.",
			"거울에 비친 내 얼굴이 기괴하게 웃었다.",
			"린은 변함없는 미소로 '다음'을 말했다.",
			"이 순환의 배후를 만나야 했다.",
			"에반 넥스. 마지막 면접이 시작됐다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "벽 너머, 가장 깊은 면접실 문이 열렸다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "거의 다 왔어요. 최종 면접이에요."
					}
				},
				{
					"content": {
						"korean": "최종… 면접?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 모든 것이 결정될 거예요."
					},
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결정…?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "최고의 기회를 잡을 준비. 완벽하죠?"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…린 씨는 대체 뭐죠?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "걱정 마요. 완벽한 조언은 언제나…."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "린 씨 조언 때문에 더 혼란스러웠어요."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 건 '다음'을 위한 과정이에요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다음은 없어요. 여기가 끝이야."
					}
				},
				{
					"content": {
						"korean": "곧 에반 넥스를 만날 거예요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에반 넥스…?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "최종 면접관이자… 이 모든 것을 관리하는 분이죠."
					},
					"emotion": "happy",
					"speaker": "lin"
				}
			]
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
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "에반 넥스가… 면접관이라고요?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네. 그리고 그는… 서류 더미 속에 있어요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "서류… 더미?"
					}
				},
				{
					"content": {
						"korean": "완벽한 지원자들의 기록이죠. 끝없이 쌓여요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사라진 사람들의 서류도 거기에 있겠네요."
					}
				},
				{
					"content": {
						"korean": "모든 것이 '다음'을 위한 준비니까요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이건 준비가 아니야… 갇힌 거지."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "린 씨는… 에반 넥스를 돕는 거죠?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저는 그저 '다음'을 안내할 뿐이에요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안내? 우릴 영원히 가두려고?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두가 '다음'을 간절히 원했어요."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…그 간절함이 독이 됐구나."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러니 조급해 마요. 다음 기회는 또 올 테니."
					}
				},
				{
					"content": {
						"korean": "아니. 다음은 없어. 여기서 끝낼 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아직 멀었네요. '다음 기회'를 준비하세요."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아니. 지금 끝낼 거야."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다시는 '다음'을 준비하지 않아."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…대단하네요. 하지만 이건 '시작'일 뿐이죠."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시작? 또 다른 다음이 있다는 거야?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "문들을 봐요. 당신의 '다음'은 언제나 열려있어요."
					}
				},
				{
					"content": {
						"korean": "수많은 문… '다음 라운드'… 끝이 없어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "입구는 사라지고, 앞으로 향한 문들만 남았다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "방 중앙, 서류 더미가 촉수처럼 움직였다."
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오셨군요. '다음'을 기다리는 자."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신이 에반 넥스인가?"
					}
				},
				{
					"content": {
						"korean": "네. 그리고 당신의 '다음'도 여기 있어요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 이름이 적힌 서류…?"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "모든 '준비'의 결과죠. 이제 '다음'을 받을 시간."
					}
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"'다음은 없다'는 외침이 대기실을 갈랐다.",
			"벽에 박힌 무수한 '다음' 글자가 서서히 빛을 잃었다.",
			"모든 문이 사라졌다. 앞으로 향한 길도, 돌아갈 길도 없이.",
			"그곳에 남은 것은 오직 '지금'. 그리고 스스로의 선택으로 부서진 잔해.",
			"이것이 고통인가, 해방인가. 누구도 답할 수 없었다."
		]
	}
} as const;
