export const scenario_modern_whisperweb_0_HIR_03 = {
	"scenario_id": "modern_whisperweb_0_HIR_03",
	"order": 3,
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
			"도시의 정보 유출은 멈추지 않았다.",
			"독립 언론인 린은 도시를 뒤덮는 기이한 소문에 주목했다.",
			"'눈 없는 그림자가 쫓아오는 꿈'의 진실을 밝히기 위한 협력이 시작됐다.",
			"익명 제보자의 안전을 최우선으로, 보도 자료 작성을 도왔다.",
			"그러나 예상치 못한 시스템 오류가 모든 것을 뒤흔들었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "당신이 정보의 그림자를 추적하는 분이시죠?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그렇습니다. 어떤 일로 오셨습니까?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "린입니다. 독립 언론인이에요. 도시를 뒤덮는 기이한 소문… '눈 없는 그림자가 쫓아오는 꿈'에 대해 아시나요?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "들어봤습니다. 단순한 도시 괴담은 아닌 것 같더군요."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "수십만 명이 같은 꿈을 꿨다는 제보가 있어요. 진실을 밝혀야 합니다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "익명 제보자의 신변 보호가 최우선입니다. 그 조건이라면 협력하겠습니다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "제보자들은 모두 어두운 공간에서 눈 없는 그림자에게 쫓기다 잠에서 깬다고 해요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "공통된 꿈이라면, 위스퍼 웹이 퍼뜨린 정보일 가능성이 높습니다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그럼 이 내용을 공식 보도 자료로 작성할 수 있을까요? 사람들에게 알려야 해요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "가능합니다. 하지만 정보 공개는 신중해야 합니다. 또 다른 유출을 막아야 해요."
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "명심할게요. 개인 정보 유출은 막아야 하니까요."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "린은 제보 받은 '눈 없는 그림자가 쫓아오는 꿈'의 상세 내용을 전달했다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "보도 자료 초안은 완료되었습니다. 발행 전에 다시 한번 검토하죠."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "좋아요. 그런데… 최근에 오래된 데이터 칩에서 이상한 오류 메시지를 봤어요."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오류 메시지요? 어떤 내용이었습니까?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "재생 불가능한 메시지와 함께 '모든 비밀이… 연결된다…'라는 단편적인 음성 기록이 반복됐어요."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이상하군요. 일단 보도 자료부터 마무리하죠. 불필요한 정보가 새지 않도록 각별히 주의해야 합니다."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "보도 자료를 발행합니다. 익명 제보자의 신변은 안전할 겁니다."
					}
				},
				{
					"content": {
						"korean": "드디어 진실을 알릴 수 있겠네요!"
					},
					"speaker": "lin",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "보도 자료가 발행되는 순간, 시스템 오류가 발생했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게… 뭐죠? 보도 자료 하단에 저희가 주고받은 사적인 대화 기록이… 10건이나 노출됐어요!"
					},
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼. 어떻게 이런 일이… 나의 실수다."
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "제보자들의 신변도, 우리의 신뢰도… 모두 깨졌어요."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터 송출 시스템 앞에 정체 모를 자가 서 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "익명 제보자의 신변 보호? 완벽한 보도 자료? 그런 게 세상에 통할 거라 생각했나?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 일을 꾸민 거군! 내 실수로 모든 것이 망가졌다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "정보는 통제할 수 없어. 모든 것은 결국 드러나게 되어 있지. 네가 아무리 막아도."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "네가 감춘 정보는… 이미 다른 곳에 뿌려졌다. 더 큰 진실이 깨어날 거다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 정보는 내가 바로잡는다. 네가 뭘 하든 막을 거다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사적인 정보의 유출은 린의 이름을 '꼼꼼하지만 시선을 의식하는 기자'로 만들었다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 진실을 향한 의지는 꺾이지 않았다. 이제 더 큰 연결고리를 찾아야 했다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "네가 지키려던 것은… 허상일 뿐이다. 진실은 늘 모두에게 공개되어야 해."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 실수로 누출된 정보는 내가 회수한다. 반드시 막을 거다."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
