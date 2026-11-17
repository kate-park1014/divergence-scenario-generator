export const scenario_modern_evannext_1_HIR_05 = {
	"scenario_id": "modern_evannext_1_HIR_05",
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
			"다섯 번째 오전 9시. 나는 '다음'을 거부했다.",
			"결국 이 반복의 중심에 도달했다.",
			"하지만 모든 진실은… 더 잔인했다.",
			"이제 '다음'은 없다. 오늘이 끝이다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "다섯 번째 오전 9시. 대기실은 변함없이 차가웠다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이번에도 9시야. 지긋지긋해."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오셨군요. 당신의 '다음'을 위한 서류입니다."
					}
				},
				{
					"content": {
						"korean": "서류? 이젠 필요 없어. '다음' 같은 건."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "규정을 따르지 않으면… '다음'은 더 멀어집니다."
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진짜 다음은 없어. 내가 직접 끝낼 거야."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대기실 가장 깊숙한 곳에서, 차가운 시선이 느껴졌다."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "준비가 부족하면… '다음'은 오지 않아요."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 했던 모든 게… 널 위한 거였어?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "모든 것은 '다음'을 위한 완벽한 과정이었습니다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "카이를 도우려던 내 행동도…?"
					}
				},
				{
					"content": {
						"korean": "그것 역시… 효율적인 촉진제였죠."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…촉진제?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "린의 눈동자는 어떤 감정도 읽히지 않았다."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 항상 '다음'을 위해 최적의 선택을 했어요."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 나를 계속 가뒀잖아!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "아뇨. 그것이 당신을 '완벽'하게 만들었죠."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽? 사라진 합격자들처럼?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들도 '다음'을 위한 준비를 마쳤습니다. 완벽하게."
					}
				},
				{
					"content": {
						"korean": "그게… 사라진다는 의미였구나."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "문득, 과거의 빈 의자들이 선명하게 떠올랐다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "그래서… 에반 넥스가 대체 누구야?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그는 '다음'의 질서를 만드는 자. 이 시스템의 심장."
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 모든 조언들이… 그를 위한 거였어?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "가장 효율적인 촉진제. 당신을 여기까지 이끈 힘."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "촉진제라니… 나는 이제 '다음'을 거부한다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "…그건 '다음'이 없는 선택입니다."
					}
				},
				{
					"content": {
						"korean": "그래. 다음은 없어. 여기서 끝낼 거야."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접실 문이 이전과는 다른 기운을 내뿜고 있었다."
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "무수한 '다음 라운드'의 문들이 주인공을 덮쳤다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "준비 부족입니다. '다음'은 영원합니다."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 이대로는 못 끝내. 다시, 다시 할 거야!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "놀랍군요… 이 '완벽한 준비'를 깨다니."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "'다음'은 없어. 이제 새로운 시작만 있을 뿐."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 당신은 여전히 '다음'을 갈망할 겁니다."
					}
				},
				{
					"content": {
						"korean": "아니. 이 고통은… 잊지 않아."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 생겨나던 '다음 라운드'의 문들이, 멈췄다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "대기실 천장에 금이 갔다. '최고의 기회' 문구가 사라졌다."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "최종 면접실. 그곳에 에반 넥스가 앉아 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 지옥을 만든 에반 넥스지!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지옥? 그저 '다음'을 위한 준비였을 뿐."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "사라진 사람들도 네 함정이었나?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "그들은 '완벽'과 '다음'을 원했을 뿐이죠."
					}
				},
				{
					"content": {
						"korean": "내 반복은 오늘 끝이야!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…과연 그럴까요? '다음'은 언제나 존재합니다."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에반의 등 뒤로, '다음 라운드' 문이 끝없이 생겨났다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"대기실의 모든 것이 멈춰 섰다.",
			"'다음'이라는 속삭임도, 영원한 준비도 사라졌다.",
			"그러나 깨진 거울 조각처럼, 무수한 가능성이 펼쳐졌다.",
			"알 수 없었다. 이 끝이, 진정한 시작일지는.",
			"어쩌면… '다음'은, 정말로 없었을지도."
		]
	}
} as const;
