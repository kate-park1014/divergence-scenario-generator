export const scenario_modern_evannext_1_FIR_03 = {
	"scenario_id": "modern_evannext_1_FIR_03",
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
	"prologue": {
		"korean": [
			"니아의 제보로 의심은 확신이 되었다.",
			"나는 추가 증거를 찾기 위해 기록 보관소를 찾았다.",
			"그곳에서 뜻밖의 인물과 마주쳤다.",
			"중요한 기록이 내 눈앞에서 불타 없어졌다.",
			"그 속에서 사라진 이들의 흔적을 발견했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "벽 가득 캐비닛이 들어선 기록 보관소였다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 기록 보관소?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…누구세요?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이 씨?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 이름을 어떻게…?"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭘 하는 거죠?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "보다시피… 기록 정리 중이야."
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서 정리할 기록은 없어 보여요."
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…다른 지원자 기록을 보고 있었어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사라진 사람들에 대한 건가요?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그건… 나도 잘 몰라. 그저 소문일 뿐."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "기록을 유출하려던 거죠?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그래! '다음 기회' 통지만 수십 번이야. 지긋지긋해!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "여길 벗어나야 해. 뭘 해서라도."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정보를 주면, 원하는 걸 얻을 수 있어요."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "말해 봐요. 시스템의 뭘 알아?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시스템은… 오직 '다음'만 원해."
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 다예요?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…근데 당신, 왜 그걸 캐물어?"
					},
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나도 이 굴레를 끝내고 싶으니까."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "잠깐… 당신 서류는 왜 봐요?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "증거를 찾는 중이에요."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…!"
					},
					"speaker": "kai",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "안 돼! 당신 같은 사람 때문에…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리예요?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "나는 여기 남을 거야. 당신 혼자 가."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭘 하려는 거죠?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "카이가 서류 뭉치에 불을 붙였다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "야! 안 돼!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "나를 보호해야 해. 미안해!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "증거를 없앴어…"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네 흔적도… 곧 사라질 것이다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 다시… 사라진 이들을 찾아야 해."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 나는 영원히 기록된다…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…흔적은 지워지지 않아."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "남은 서류 더미에서 보고서 하나가 발견됐다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "'완벽하게 준비된 이들, 사라지다'?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사라진 지원자들의 진실이 점점 모습을 드러냈다."
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "기록 보관소 안, 불타는 서류 더미 앞에 누군가 서 있었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "규칙을 어기는 자는… 사라져야 한다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 보관소 수호자인가?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 '기록' 그 자체다. 너의 흔적도 지워주겠다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럴 순 없어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
