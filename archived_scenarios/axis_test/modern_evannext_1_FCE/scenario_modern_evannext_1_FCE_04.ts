export const scenario_modern_evannext_1_FCE_04 = {
	"scenario_id": "modern_evannext_1_FCE_04",
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
			"‘다음’만을 기다리다 우수 사례가 되었다.",
			"시스템은 내 투쟁을 비웃었다.",
			"이제 직접 물어볼 차례다.",
			"린, 당신이 숨긴 진실을."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "세미나실. 린이 강단에 서 있었다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "환영합니다! 다음 기회 성공 전략 세미나에!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "성공? 뭐가 성공인데?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "음… 적극적인 참여 정신! 훌륭해요!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기 끝없는 거짓말뿐이잖아."
					},
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "아니죠. 여긴 '다음'을 위한 준비 공간이에요."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…다른 지원자들은 왜 저래?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "박수 소리 없이, 모두 고개만 끄덕였다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "여러분, '다음'을 준비할 때 가장 중요한 건…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "결과에 얽매이지 않는 태도예요!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "결과가 없는데… 어떻게 얽매여?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "바로 그거죠! 과정에만 집중하는 거예요!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "그럼 이 끝없는 순환은 뭔데?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…그건 다음 기회를 향한 숙성이죠!"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아주 훌륭한 반론이에요!"
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "린, 당신이 이 루프의 일부잖아!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "호호, 저는 '다음'을 안내하는 사람일 뿐이에요."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 아무도 진정한 기회를 얻지 못하는데?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진정한 기회는… '다음'을 위한 더 큰 준비를 필요로 하죠."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "그게 다 거짓말이잖아!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니요! 모든 과정은 '다음'을 향한 축적이에요!"
					},
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 미소도 가식이야?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "참가자님의 적극적인 참여 정신에 감동했어요!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "나는… 당신을 비난한 건데."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그래서 특별히! '린과 함께하는 심화 과정'에 배정할게요!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "심화 과정? 난 안 가!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "더 깊은 '다음'을 위한… 최고의 기회죠!"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다른 지원자들이 일제히 박수를 보냈다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…도대체 뭘 박수치는 거야?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…네 '투쟁'도… '다음 단계'의 일부일 뿐."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 이게 끝이야!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "축하해요! '다음 단계 최종 합격'이에요!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "전광판에 '영구 대기자 명단'이라는 글자가 떴다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직 '다음'을 위한 준비가 부족하군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 이대로 끝낼 수 없어!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "세미나실 맨 끝, 정체 모를 그림자가 커졌다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다음… 다음 기회… 끊임없이 준비해라."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 이 시스템을 유지하는 거야?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저 '다음'의 흐름을… 따를 뿐."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그 흐름… 여기서 끊어버릴 거야!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
