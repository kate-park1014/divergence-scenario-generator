export const scenario_hell_lumen_0_02 = {
	"scenario_id": "hell_lumen_0_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통의 신음이 멎었다. 기이한 침묵이 숲을 채웠다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 사람들이… 치유받았다는 건가?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 평온함이… 낯설어."
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "왜? 좋잖아. 고통 없는 얼굴이."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "무언가를 잃은 것 같아."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "mara",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "(한 사람에게 말을 걸어본다) 당신은… 괜찮으신가요?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(잔잔한 미소) 예. 평온합니다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "원하는 게 있으신가요? 고통은 사라졌지만…"
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(미소) 아무것도 없습니다."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "정말 아무것도 안 원한다고? 탈출도?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(미소) 예."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "mara",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 사람들은… 자기 자신을 잃은 거야."
					}
				},
				{
					"content": {
						"korean": "무슨 소리야. 고통에서 해방된 거잖아."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "고통만이 아니야. 기쁨도, 슬픔도, 모든 감정이 사라진 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "껍데기만 남았다고?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 이 평온함은… 죽음과 같아."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "mara"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"content": {
						"korean": "더 이상 아무것도 원하지 않아. 배고픔도, 두려움도…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왜 이러는 거지? 대체 사제는…"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 걸 계획한 걸까? 지옥에 '진정한' 평화를 주려고?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "평화가 아니야. 이건… 존재의 소멸이야."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 곳으로 향할수록, 침묵은 더욱 짙어졌다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "고통 속에서 허우적대라. 너희는 영원히 고통받을 것이다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 우린 끝까지 싸울 거야!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 아직… 완전한 구원이 오지 않았을 뿐…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "구원? 이게?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사제의 가면 아래, 다른 그림자가 비쳤다. 진짜 얼굴은 아직 나타나지 않았다."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "고통은 너희를 강하게 할 뿐. 진정한 구원은 소멸에 있지."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 개소리야!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 곧 알게 될 거다. 무無의 평온을."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고통은 사라졌다. 그들의 얼굴엔 잔잔한 미소가 흘렀다.",
			"하지만 그들의 눈은 텅 비어 있었다. 무엇도 원하지 않는 그림자처럼.",
			"평온은 곧 공허였다. 이 지옥에서, 가장 끔찍한 구원이었다."
		]
	}
} as const;
