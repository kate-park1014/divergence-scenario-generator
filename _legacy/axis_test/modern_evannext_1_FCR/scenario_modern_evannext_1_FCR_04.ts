export const scenario_modern_evannext_1_FCR_04 = {
	"scenario_id": "modern_evannext_1_FCR_04",
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
	"prologue": {
		"korean": [
			"카이는 입을 닫았고, 니아의 정보는 파편이 됐다.",
			"하지만 멈출 수 없어. 린에게서 명단을 찾아야 한다.",
			"넥스트 기업의 인사 기록 보관실. 모두의 운명이 담긴 곳.",
			"린은 방해할 터. 시스템의 감시가 시작된다.",
			"우린 그 시스템을 해킹할 것이다. 어떤 대가를 치르더라도."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "넥스트 기업 인사 기록 보관실. 수많은 명단이 빼곡하다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 그 명단이 있다는 곳인가."
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "어서 오세요. '기회 관리팀' 린입니다."
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 린? 명단을 찾고 있어."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "명단이요? 아, '다음 기회' 대기자 명단 말씀이시죠."
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "여긴 시스템의 핵심입니다. 매우 중요한 곳이죠."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그래. 그걸 가져갈 거야."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "명단은 모두의 '공정한 기회'를 위한 겁니다."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공정? 갇혀 있는 사람들을 두고?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템은 완벽해요. 항상 최적의 '다음'을 제시하죠."
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "너무 완벽해서 소름 돋네. 비현실적이야."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "규정 위반은… 당신의 '다음 기회'까지 앗아갈 겁니다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "협박이야? 난 '다음' 같은 거 안 믿어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "서버실 안, 명단 데이터가 붉게 빛났다."
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						4
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 서버에 접속하면 되는 건가."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "멈추세요! 시스템 안정성을 해치는 행동입니다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잠깐. 시스템 안정성? 왜 그렇게 필사적이야?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "모두의 '다음 기회'가 망가질 수 있어요! 이건… 핵심 조력자로서 드리는 경고입니다."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "핵심 조력자? 당신… 에반 넥스트의 편이었군."
					}
				},
				{
					"content": {
						"korean": "전 시스템을 지킬 뿐입니다. 그게 모두에게 이로워요."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템은 개뿔. 너희는 모두를 가두고 있어."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						4
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "해킹 시작한다. 수백 명의 명단, 탈취 완료!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "안 돼! 경보음이… 시스템이 파괴되고 있어요!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "삐이익— 시스템 경보음이 울려 퍼진다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "명단은 확보했어. 이제 나갈 차례군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "늦었어요. '데이터 파수꾼'들이… 탈출 경로가 막혔습니다!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 망할. 계획이 틀어졌잖아!"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝에서 수많은 그림자가 다가왔다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "인사 기록 보관실 깊은 곳. 정체 모를 자가 서 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "규정을 어긴 어리석은 자여. 여기서 멈춰라."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "규정? 명단을 지키기 위한 내 '규칙'이다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 시스템의 질서는… 깨뜨릴 수 없어."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "깨고 말겠어. 네가 뭘 지키든 상관 없어."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자의 그림자가 모든 것을 가로막았다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 시도는… 실패로 끝났군. 명단은 시스템의 것이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 난 다시 돌아와서, 명단을 되찾고 말 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 '으윽…!' 소리와 함께 쓰러졌다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "명단을… 탈취하다니… 하지만… 이미 모두의 '다음'은 정해져 있어."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 더 깊은 곳에 뭐가 있다는 거지?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "경보음이 멈췄지만, 다음 경로가 잠금 해제됐다."
					}
				}
			]
		}
	]
} as const;
