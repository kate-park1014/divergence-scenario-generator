export const scenario_modern_evannext_1_FCR_05 = {
	"scenario_id": "modern_evannext_1_FCR_05",
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
	"epilogue": {
		"korean": [
			"무한한 '다음 기회'의 루프가 깨졌다.",
			"면접관 로봇들은 멈췄고, 에반 넥스트의 웃음은 사라졌다.",
			"하지만 사라진 이들은 돌아오지 않는다. 그들은 스스로 '다음'을 택했다.",
			"이제 진짜 시작이다. 더 이상 멈추지 않는다."
		]
	},
	"prologue": {
		"korean": [
			"경보음이 멎었다. 이제 다음 경로가 열렸다.",
			"최종 목적지는 코어 데이터 금고.",
			"그곳에서 우리는 에반 넥스트와 마주할 것이다.",
			"더 이상의 '다음'은 없다. 오늘 모든 것을 끝낸다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "넥스트 기업 최종 면접장. 거대한 금고 문이 열려 있다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 그 최종 면접장…?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "어서 오세요. 마지막 기회에 오신 것을 환영합니다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마지막? 당신이 린 맞지? 우리 명단은 어디 있지?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "명단이요? 아, 그 데이터는… 아주 안전한 곳에 보관되어 있죠."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안전? 너희가 가둔 곳에?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 겁니다. 이 시스템의 완벽한 질서를."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "면접장 안쪽. 무표정한 면접관들이 줄지어 앉아 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 면접관들… 왜 움직임이 없어?"
					}
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그들은 지원자들의 정신 에너지를 수집합니다."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "수집? 로봇이었어? 니아의 말이 진짜였군!"
					}
				},
				{
					"content": {
						"korean": "제 조언은 언제나… 최적의 결과를 위한 것이었습니다."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그래서 완벽했던 건가? 전부 시스템을 위한 거였어?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "시스템이 곧 모두의 '다음'을 의미하니까요."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "면접장 바닥에서 빛나는 문양. 거대한 에너지 흐름이 느껴진다."
					}
				},
				{
					"content": {
						"korean": "이 에너지는 뭐야? 정신 에너지?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "네. 무한한 '다음 기회'를 위한… 원동력이죠."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무한한 '다음'이라니! 그럼 합격은 없는 거야?"
					}
				},
				{
					"content": {
						"korean": "합격의 의미를… 다시 생각해 보세요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이게 설마… 데이터 금고?"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템은 모두에게 '준비의 순환'을 제공할 뿐입니다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "면접장 깊은 곳, 거대한 장치가 맥동한다. 이제 되돌릴 수 없다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게… '다음 기회'를 만드는 장치로군."
					}
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
					"content": {
						"korean": "이제 알겠나요? 이 '준비의 순환'은 멈출 수 없어요."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "멈출 수 없어? 모두를 가두는 걸?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템에 반하는 행동은… 무의미한 저항입니다."
					}
				},
				{
					"content": {
						"korean": "무의미? 아니. 이 루프를 파괴할 유일한 방법이야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "그럼… 에반 넥스트가 당신을 기다릴 겁니다."
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "에반 넥스트의 웃음이 면접장을 채웠다. 다시 문이 닫힌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괜찮아요… 다음이 있으니까요."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 이대로는 안 돼. '진짜 시작'을 찾아서 다시 올 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "면접장 한가운데, 에반 넥스트가 차분하게 서 있었다."
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거의 다 왔어요. 이번엔 진짜로 느껴져요."
					}
				},
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난 '다음'을 위한 합리적 질서를 만들었고, 린은 효율적 촉진제였죠."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뭐?! 린… 네가?! 그럼 전부 속임수였잖아!"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 당신도 '다음'을 선택할 때입니다."
					}
				},
				{
					"duration_ms": 400,
					"speaker": "lin",
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "선택은 내가 한다! 이 루프를 끝낼 거야!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "에반 넥스트가 쓰러졌다. 면접장의 모든 문이 열렸다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 사라진 이들이… 자발적으로 택한 '다음'이었다…."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐? 자발적으로? 말도 안 돼!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비로소 '다음'이 아닌, '진정한 시작'이 눈앞에 펼쳐진다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
