export const scenario_modern_evannext_1_FIE_02 = {
	"scenario_id": "modern_evannext_1_FIE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"불합격. 단 두 글자였다.",
			"복도에 나섰을 때. 벽에서 내 목소리가 들려왔다.",
			"희미한 메아리. 환각인가?",
			"그러나 그 소리는 나를 이끌었다.",
			"점점 더 깊은 복도. 나는 벽을 향해 걸었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝, 오래된 벽이 서 있었다. 무수히 많은 지문으로 얼룩진."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내 목소리?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "벽 안에서 들려와."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "봤어? 방금… 저 벽으로 사라졌어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가요?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "그 사람… 분명히 여기 있었어. 그런데…"
					}
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "없어졌어. 연기처럼."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "그 사람은 분명히 문을 두드렸어."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "저 벽에 뭔가 있어. 분명히…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "벽에? 그럼…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같이 두드려볼까요."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쿵! 텅 빈 소리만 울린다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "…들려? 안에서 뭔가 긁는 소리가."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "복도 조명이 불안정하게 깜빡거렸다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "조명이… 왜 이러죠?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "nia",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "저거 봐! 다시 나타났어!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그림자?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "겹쳐진 그림자… 방금 사라진 그 사람이랑 똑같아."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 다시 벽 속으로 사라졌다. 마치 없었던 일처럼."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 뭘 본 거지?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "벽이… 우릴 보고 있어. 진짜를 보지 못하게…"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진짜? 뭐가 진짜라는 거예요?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "nia",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 벽 안에 뭔가가 있어. 더 봐야겠어."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "안 돼! 그건… 환상이야. 모두 널 가두려는 거야!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "환상? 당신 말도 이제 믿을 수가 없어요."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "모두가 사라졌어… 완벽한 길을 간다고 했는데…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길이… 너무 완벽하면 오히려 의심해야 해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "가지 마…! 저 안엔… 아무것도 없어! 너도 사라질 거야!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "확인해야겠어. 이대로는 못 돌아가."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 벽에 손을 댔다. 차가운 벽이 흔들렸다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "복도 끝 벽이 거칠게 갈라졌다. 그 안에 정체 모를 자가 서 있었다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국 여기까지 왔군. 벽 속의 메아리에 이끌려서."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 벽 뒤에 있는 진짜야?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 너의 '환상'을 현실로 만드는 존재다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "환상? 아니. 나는 진실을 볼 거야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…그럼 어디, 싸워서 확인해 봐."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이걸 이겼다고 생각하나?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 벽은 시작에 불과해. 진짜는…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 다른 환상이라는 거야?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자는 벽 속으로 사라졌다. 벽은 다시 평범해 보였다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 벽 뒤에 남은 잔상은 사라지지 않았다. 복도는 더 깊어졌다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 환상에 갇히는군. 여기가 너의 끝이다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이 벽이 끝이 아냐. 다른 길을 찾을 거야."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여기 말고. 어딘가 분명히…"
					}
				}
			]
		}
	]
} as const;
