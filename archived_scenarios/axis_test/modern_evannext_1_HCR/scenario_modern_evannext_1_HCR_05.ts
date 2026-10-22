export const scenario_modern_evannext_1_HCR_05 = {
	"scenario_id": "modern_evannext_1_HCR_05",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 황금 문을 지나, 낯선 서재에 도착했다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 꿈의 서재?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "어서 와. 드디어 여기까지 왔구나."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "린 씨. 당신도 여기까지…"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "응. 다음 기회는 바로 이곳에 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…다음?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "서재 깊은 곳에서 차가운 시선이 느껴졌다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "거의 다 왔어. 이번엔 진짜로 느껴져."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "뭐가요? 저 안에서 느껴지는 건…"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "수천 장의 서류가 낡은 냄새를 풍겼다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "완벽한 질문지들. 너를 위한."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "면접관들은 누구예요?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "너의 간절한 염원이… 그들을 만들었지."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "염원이… 만든다고요?"
					},
					"emotion": "sad"
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
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "면접관들 말이야? 그들은 너희의 서류들이야."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "서류… 더미라고?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "응. 너희의 '다음'에 대한 간절한 염원이 쌓여서."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 그동안… 내가 면접 본 건…"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너의 꿈과 희망을 비추는 거울이었지."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거짓말! 이게 어떻게 거울이야!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 서류 더미들이 섬뜩하게 흔들렸다."
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "내 조언은 완벽했어. 항상 '다음'을 위한."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽하게 우릴 가뒀지."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "가두다니? 너희를 돕는 마법이었어."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "달콤한 환영 마법이었어! '다음'을 계속 기다리게 하는!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 바로 구원이야. 이 순환 속에서."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 이 구원은… 가짜야."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린의 표정이 차갑게 굳었다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "꿈의 서재 앞에 에반 넥스가 서 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군요. 주인공."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 이 모든 '다음'의 배후인가."
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "맞아요. 사라진 이들도 모두…"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "스스로 '다음'이라는 유예 속으로 뛰어들었죠."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그만해! 다음은 없어!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "어리석군요. 결국 '다음'을 버리지 못했어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 나는… 이 '다음'을 깨부술 방법을 찾을 거야."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크흐흐… 부서진 건… 서류뿐…"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "당신의 '다음'은… 이미… 시작됐어…"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아니. '다음'은 없어. 이제 현재를 살 거야."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "끝없는 서류 미궁이 무너지고, 희망의 조각들이 빛났다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나, 에반의 마지막 말은 새로운 불안을 심었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황금 실타래를 끊었다.",
			"모든 길은 하나의 문으로 이어졌다.",
			"꿈의 서재, 그곳에 에반 넥스가 있었다.",
			"더 이상 다음은 없었다."
		]
	},
	"epilogue": {
		"korean": [
			"끝없는 서류 더미가 흩날렸다.",
			"면접관들은 희미한 종이 조각으로 돌아갔다.",
			"린의 달콤한 속삭임은 침묵했다.",
			"지금, 이 순간. 비로소 '다음'이 아닌 현재가 시작되었다.",
			"그러나, 길고 깊은 꿈에서 깨어난 자들의 눈은 아직 흐렸다."
		]
	}
} as const;
