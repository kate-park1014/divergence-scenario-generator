export const scenario_modern_evannext_1_FCR_01 = {
	"scenario_id": "modern_evannext_1_FCR_01",
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "넥스트 기업 대기실. 벽에 수많은 사진이 붙어 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그… '최고의 기회'?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "어서 오세요. 다음 기회에 오신 것을 환영합니다."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다음 기회?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "네. 이 시스템은 완벽한 성공 공식을 제공하죠."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "모든 건… '다음'을 위한 준비예요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 저 사진 속 사람들은?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아, 그분들은… 먼저 '다음'으로 가셨죠."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사라진 이들의 흔적은 없었다. 으스스한 소문이 떠돌았다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…일단 이 시스템을 확인해야겠어."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "대기실 안, 수십 명이 앉아 허공을 응시했다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 600,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "첫 시험은 어렵지 않아요. 그저… 집중하면 됩니다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 사람들처럼요? 뭘 저렇게 봐요?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "중요한 건 '다음'이죠. 과거는… 중요하지 않아요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "맞아… 다음이 중요해…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "다음… 다음…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "(혼잣말) 으스스하네. 저들의 '다음'은 어디지?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "첫 시험, 곧 시작합니다. 준비되셨나요?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시험장 입구, 강철 문이 굳게 닫혀 있다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아, 중요한 규칙이 있어요. 뒤돌아보는 건 금지예요."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뒤돌아본다니? 뭘?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "현재는 중요하지 않아요. 오직 '다음'을 위한 완벽한 준비만이…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "존재를 증명하죠. 시스템의 규칙입니다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 과거의 내 노력은… 쓸모없다는 건가?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시스템은 늘 최적의 결과를 원하죠. 구식은… 필요 없어요."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…말도 안 돼."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시험장 복도, 끝없이 이어진다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "아직 늦지 않았어요. '다음'으로 돌아갈 기회는…"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "언제든 있습니다. 이 길은 너무 깊어요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌아가? 내가 여기에 왜 왔는지, 잊을 리 없잖아."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "시스템에 반하는 행동은… 규정 위반입니다. 모든 걸 잃게 돼요."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "흐음… 규정 위반? 그거 딱 내 전문인데."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 문을 뚫고, 내 방식대로 할 거야."
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 닫힌 문을 향해 걸어갔다. 이제 되돌릴 수 없다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 도전이었어. '다음'을 기다리는 게 나았을 텐데."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어. 다시, 시스템의 허점을 찾아내겠어."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시험장 앞에 정체 모를 자가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…왔군. '다음'을 거부하는 어리석은 자여."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 지키는 게 뭐지? 이 가짜 '다음'?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "시스템의 질서. 그리고… '다음 기회'의 절대성."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 가짜 질서, 내가 깨주지."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 무너졌다. 시스템의 균열이 시작되었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 네가… 이 시스템을… 흔들다니…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 이미 모든 게… '다음'을 향해… 준비됐다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야. 더 깊은 곳으로 가야겠군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "다음 목표는 '데이터 보관실'이다. 경보음이 울리기 시작했다."
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"‘최고의 기회’라는 통지를 받고, 낯선 대기실에 들어섰다.",
			"친절한 린은 ‘다음 기회’를 강조했지만, 주변의 소문은 으스스했다.",
			"사라진 이들의 흔적, 그리고 맹목적인 눈들.",
			"불안감 속에 첫 시험이 시작된다.",
			"이 시스템의 끝을 봐야 한다."
		]
	}
} as const;
