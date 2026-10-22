export const scenario_modern_evannext_1_HIE_05 = {
	"scenario_id": "modern_evannext_1_HIE_05",
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "면접실, 모든 '다음'이 시작되는 곳."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… 에반 넥스인가?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "boss",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네. 최종 면접관입니다."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 가족사진이… 왜 이렇게 흐려지죠?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "가족은… 완벽한 서류가 되었을 때, 선명해집니다."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 기회를 노리면… 가족은 돌아옵니다."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 사진 속 아이가 손을 흔드는 듯했다."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접관이 앉아있던 자리, 편지 더미가 보였다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저… 저건 뭐야?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "당신이 가족에게 썼던 편지."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신이 보낸 마지막 마음이죠."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "면접관이… 편지였다고?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "네. 죽은 자녀에게 썼던…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그들의 희망이… 저를 완성시켰습니다."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "문이 열리자 린이 들어섰다."
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 600
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "잘 오셨어요. 포기하지 않았군요."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "린 씨… 당신도 알고 있었나?"
					}
				},
				{
					"content": {
						"korean": "전 그저, 당신의 희망을 안내했을 뿐이에요."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린은… 가장 효율적인 촉진제였죠."
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "촉진제라니!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전… 당신의 다음을 도왔을 뿐이에요."
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "결국… 다 이용당한 거였잖아."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "대기실 벽에 걸린 사진들. 얼굴이 찢겨 나갔다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사라진 사람들이… 저렇게 된 거야?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "그들은… 스스로 '다음'을 선택했습니다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "스스로?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "가족을 위해… 영원한 유예를 택한 거죠."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 해방이 아니었잖아! 감금이었어!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장, 난 더 이상 기다리지 않아."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주인공은 찢겨진 가족사진을 움켜쥐었다."
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "에반 넥스가 담담히 웃고 있었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "거의 다 왔어요. 이번엔 진짜로 느껴져요."
					}
				},
				{
					"content": {
						"korean": "가족을 위한… 마지막 기회에요."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(눈물) 거짓말 마!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더는 '다음' 같은 건 없어!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "끝내자. 지금!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에반 넥스의 몸이 허물어졌다."
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "괜찮아요… 다음이 있으니까요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주변 문들이 끝없이 열렸다. '다음 라운드' '다음 라운드'."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지원자들은 가족사진을 찢어냈다."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이게, 끝이 아니라고?"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에반 넥스는 차가운 미소를 지었다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "또 다시… 다음을 기다리겠군요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 절대."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이번엔 반드시… 끝낼 거야."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"아이의 사진은 이제 거의 보이지 않았다.",
			"'다음'이란 굴레에 갇혀 영원히 희망만 품을 수는 없어.",
			"희미한 진실에 다가갈수록 혼란만 가득했지만,",
			"이제 모든 것의 배후와 마주할 시간이었다."
		]
	},
	"epilogue": {
		"korean": [
			"끝없는 '다음'의 문들은 닫히지 않았다.",
			"지원자들은 가족의 얼굴을 찢고 다음 라운드로 향했다.",
			"주인공은 찢겨진 사진을 들고 그 자리에 주저앉았다.",
			"슬픔과 상실만 남은 자리. 그래도,",
			"작은 목소리가 들렸다. \"다음은 없다.\""
		]
	}
} as const;
