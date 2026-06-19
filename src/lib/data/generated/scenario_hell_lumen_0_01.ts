export const scenario_hell_lumen_0_01 = {
	"scenario_id": "hell_lumen_0_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥. 고통받는 영혼들의 영원한 비명.",
			"죽음조차 허락되지 않는 끝없는 나락.",
			"그러나 그곳에, 온기를 나누는 자가 있었다.",
			"지옥에 어울리지 않는, 기만적인 평온이었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "뼈를 깎는 고통이 발끝부터 스며들었다. 지옥은 살아있는 생지옥이었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끄으… 아파… 다리뼈가 부러진 것 같아."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "char",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "상처투성이군. 내가 도와주지."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "char",
					"content": {
						"korean": "지옥에서 고통은 미덕이 아니야. 그걸 바라는 자는 어리석지."
					}
				},
				{
					"content": {
						"korean": "…당신은 누구지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "구원자. 그리고, 사제."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "char"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "내 손을 잡게. 잠시 고통을 잊을 수 있을 거야."
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저런 손길이… 지옥에 있을 리 없어."
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "char",
					"content": {
						"korean": "자, 됐네. 평온한가?"
					}
				},
				{
					"content": {
						"korean": "…."
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "치유받은 자의 얼굴에 잔잔한 미소가 떠올랐다. 눈빛에는 아무것도 담겨 있지 않았다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "char",
					"content": {
						"korean": "어떤가? 더 이상 아프지 않을 걸세."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통이… 완전히 사라졌어. 너무 쉽게."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "불안해… 이 정도 고통은 느껴야 하는 거 아닌가?"
					}
				},
				{
					"content": {
						"korean": "고통은 환상일 뿐. 깨달으면 사라지는 법이지."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "char"
				},
				{
					"content": {
						"korean": "이 평온을 받아들이게. 이곳이 바로 안식이다."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "char"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "평온함 속에 균열이 생겼다. 거대한 그림자가 앞을 막아섰다."
					}
				},
				{
					"content": {
						"korean": "여기서 안식을 찾는 어리석은 자들이여."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지옥에서 허락된 건 고통뿐이다. 감히 내 영역을 침범하다니."
					}
				},
				{
					"content": {
						"korean": "…당신은 또 뭐야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 질문이군. 네게는 죽음뿐이다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서지 않아!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아직 멀었군. 고통 속에서, 너희는 더욱 성장할 것이다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장… 아직은…."
					}
				},
				{
					"content": {
						"korean": "다시 돌아올 거야! 그 사제를 만나야 해!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "감히 여기까지 기어들어오다니. 네놈들에게 진정한 절망을 보여주겠다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이곳은 평온을 꿈꾸는 자들의 무덤이 될 것이다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마. 우리가 널 막을 거야."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 나는… 사라지지 않아…."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사라졌다…."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 사제의 흔적은 더욱 깊어졌다."
					}
				},
				{
					"content": {
						"korean": "지옥의 온기. 그것이 정말 구원일까."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
