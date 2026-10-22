export const scenario_modern_evannext_1_FCE_05 = {
	"scenario_id": "modern_evannext_1_FCE_05",
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
			"‘다음’만을 기다리다 우수 사례가 되었다.",
			"시스템은 내 투쟁을 비웃었다.",
			"이제 직접 물어볼 차례.",
			"최종 면접. 에반 넥스가 기다리고 있었다.",
			"모든 '다음'을 부수는 마지막 기회다."
		]
	},
	"epilogue": {
		"korean": [
			"무한 대기실의 전광판에 '다음 없음' 글자가 새겨졌다.",
			"그러나 주인공의 이름은 '영구 대기자 명단'에 추가되었다.",
			"모든 '다음'을 거부했지만, 결국 새로운 형태의 '유예'에 갇힌 것이다.",
			"이 악몽 같은 순환은, 그렇게 또 다른 '다음'으로 이어졌다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "복도 끝, '최종 면접' 문이 열려 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 마지막?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "네! 최종 면접실이에요! 거의 다 왔어요."
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거의 다 왔다니… 뭘."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물론 '다음'을 위한 준비요! 느껴지지 않나요?"
					},
					"emotion": "happy",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "방 한가득, 낡은 서류 더미들이 쌓여 있다."
					},
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "모든 서류는 완벽한 '다음'을 향한 지표죠!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 서류들… 대체 뭐야?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "저 서류들은요, 지원자들의 열정… 이랄까요?"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "열정? 그냥 종이잖아."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "호호, 자세히 보면 움직일걸요? '다음'을 향해!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…움직이는 서류? 이게 다야?"
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
					"speaker": "lin",
					"content": {
						"korean": "저 서류는 '면접관'으로 보이는 존재랍니다!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서류 뭉치가 면접관이라고?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "네! '다음 기회' 생산 공정의 일환이죠."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼… 실패한 사람들은 어떻게 돼?"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "성공적으로 '다음 단계'로 재활용되죠! 영구 대기."
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "재활용? 영구 대기? 그게 성공이야?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "제 완벽한 조언들이 시스템에 기여한답니다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신 조언 때문에 다들 여기 갇힌 거잖아!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "아니요, '심리적 접착제' 역할을 한 거죠! '다음'을 향한."
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사라진 사람들은 대체 어디로 간 건데?"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "'성공적인 다음 단계'로 '자발적 영구 대기'를 신청했죠!"
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "자발적 영구 대기? 미쳤군."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "아직 '다음'을 거부하기엔 준비가 부족하군요."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "빌어먹을! 다음은 없어! 다시 올 거야!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "네! 다음 기회가 또 있답니다! 힘내세요!"
					},
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "최종 면접실. 에반 넥스가 의자에 앉아 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "오셨군요. 거의 다 왔어요. 이번엔 진짜로 느껴져요."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 끝없는 '다음'… 당신이 만든 함정이지?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "함정이라뇨. '다음'을 향한 최고의 기회죠."
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니, 나는 '다음'을 거부한다!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "축하합니다! 드디어 '다음 없음'의 다음 단계에 도달하셨군요!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐? '다음 없음'도 '다음'이라고?"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "네! 새로운 '유예'가 시작된 거예요! 끝없는 다음."
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "전광판에 '다음 없음' 글자가 희미하게 뜬다. 그리고… 주인공의 이름이 명단에 올랐다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
