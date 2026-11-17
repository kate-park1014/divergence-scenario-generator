export const scenario_modern_evannext_1_FCE_01 = {
	"scenario_id": "modern_evannext_1_FCE_01",
	"order": 1,
	"act": "intro",
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
						"korean": "낡은 전광판이 번쩍인다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… '최고의 기회'?"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "네, 어서 오세요! 린입니다."
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "'다음 기회'를 위한 곳이죠."
					}
				},
				{
					"content": {
						"korean": "다른 사람들도… 다음?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "완벽한 준비를 하는 중이에요!"
					}
				},
				{
					"content": {
						"korean": "모두 눈동자 없이 '다음'을 중얼거린다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "성공의 비결은 '다음'이에요."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "다음이요? 지금은요?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "현재는 중요하지 않아요! 미래만."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 사람들은… 뭘 준비하는 거야?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "모두 과거를 잊고 '다음'만 보고 있죠."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거를 잊는다고요?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "누군가 오래된 이력서를 태우고 있다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "'다음'을 완벽하게 준비해야 해요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "완벽하면… 어떻게 돼요?"
					}
				},
				{
					"content": {
						"korean": "더 높은 곳으로 이동하죠! 다들 그랬어요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "근데… 돌아온 사람이 없잖아요?"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "성공했으니까요! 돌아올 필요 없죠."
					}
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그럼 그 사람들은?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음 단계 최종 합격'이에요."
					},
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떤 지원자가 흔적도 없이 사라졌다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "가장 중요한 조언이에요."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "오직 '다음'만을 생각하세요."
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이게… 정말 맞는 길인가?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "물론이죠! 완벽한 지름길."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너무… 완벽해서 이상해."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "의심은 금물! 다음이 기다려요."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대기실 문이 닫히며 자물쇠 채워지는 소리가 들린다."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "'다음'을 준비할 시간이 더 필요하겠군."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 할 거야!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "맞아요! '다음'을 위해!"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "대기실 가장 안쪽, 거대한 서류 더미가 움직인다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "새로운 '다음'이 왔군."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이… 여기 대장이야?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 시스템의 일부."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "'다음'을 향한 의지를 보아라."
					}
				},
				{
					"content": {
						"korean": "시작도 없는 '다음'은 싫어!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…끝이 아니야. 이것도 '다음'이지."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "축하해요! '다음 단계'로 이동!"
					},
					"speaker": "lin",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전광판에 '다음 없음' 글자가 희미하게 뜬다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"알 수 없는 '최고의 기회' 통지가 왔다.",
			"도착한 곳은 낯선 대기실.",
			"모두가 '다음'만을 중얼거렸다.",
			"친절한 안내원 '린'이 미소 짓는다.",
			"불안감 속에 첫 시험이 시작된다."
		]
	}
} as const;
