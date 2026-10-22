export const scenario_modern_evannext_1_HIE_04 = {
	"scenario_id": "modern_evannext_1_HIE_04",
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
			"아이의 사진이 점점 흐려졌다.",
			"'다음'이란 말에 갇혀, 영원히 기다릴 순 없어.",
			"진실을 찾아야 해. 가족을 위해.",
			"금지된 창고 문이 열렸다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "손에 든 가족사진 속 아이의 얼굴이 희미했다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "흐려지고 있어…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이번엔 꼭 아이를 만나야 해."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더는 '다음'만 기다릴 수 없어."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그는 금지된 창고 쪽으로 발걸음을 옮겼다."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 창고 안, 서류 더미가 쌓여 있었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기에 뭔가 있어…"
					},
					"emotion": "base"
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
						"korean": "이걸 찾고 계셨나요?"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "내 가족사진…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진정한 가족의 사랑은 '다음 기회'에서 피어납니다."
					},
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "포기하지 마세요."
					}
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
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "린 씨… 그 눈빛은…"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜요? 제가 당신을 응원하잖아요?"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "'다음'이라는 말 뒤에 뭐가 있죠?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "희망이죠. 당신의 가족이 기다리잖아요."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 방에 있는 편지들… 죽은 자녀에게 보낸 건가?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신도 '다음'을 준비해야 해요."
					},
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구겨진 서류 사이에서 낡은 유서가 발견됐다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 다른 지원자 유서?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내용이 왜곡되어 있어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "린의 '완벽한 조언' 때문인가?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이걸 밝히면 모두의 희망이 꺾여."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하지만… 진실은 말해야 해."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "방 한가운데 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "진실을 밝히려 하는가. 어리석군."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "희망을 볼모로 잡는 건 잘못이야!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그 희망 덕분에 여기 온 거 아닌가?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이젠 아니야."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "고작 이것이… 진실이라 생각하나?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "더 깊은 진실이 있단 말이야?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "방 한구석, 또 다른 문이 열려 있었다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…끝이 아니구나."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은… 너에게 독이 될 뿐."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다시 돌아와. 모든 걸 밝힐 거야."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
