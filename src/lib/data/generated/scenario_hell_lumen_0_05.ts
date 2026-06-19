export const scenario_hell_lumen_0_05 = {
	"scenario_id": "hell_lumen_0_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_081"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사제가 다스리는 영역. 비명 대신, 텅 빈 미소가 가득했다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "char",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 평온함… 왠지 더 끔찍해."
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고통이 사라진 곳. 하지만… 살아있다는 느낌도 없군."
					},
					"emotion": "base",
					"speaker": "character_any",
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
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "char",
					"type": "direction"
				},
				{
					"speaker": "char",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저들을 봐. 구원받았다는 자들이야."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "눈빛이… 텅 비었어."
					},
					"emotion": "sad"
				},
				{
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "아무것도 원하지 않아. 배고픔도, 두려움도, 심지어 탈출조차도…."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "구원이 아니라… 그냥 껍데기만 남긴 거잖아."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "char",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모두 웃고 있어. 너무 잔잔하게… 섬뜩할 만큼."
					},
					"emotion": "sad",
					"speaker": "char",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그는 고통과 함께 감정까지 지워버린 거야. 의지조차."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 사제 루멘의 '완전한 구원'인가?"
					},
					"emotion": "sad",
					"speaker": "char",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "char",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경전의 구절이 새겨진 사슬이 영혼들의 손목을 부드럽게 휘감고 있었다. 치유가 아닌, 구속이었다."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 사슬… 영혼을 묶고 있어."
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "지우는 척하면서… 영원히 가두는 거였어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "루멘을 막아야 해. 더 늦기 전에…!"
					},
					"speaker": "char",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "아직… 이해하지 못하는군요. 이 고통스러운 세상에서… 이것만이 유일한 평화인데."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니, 진짜 구원은 고통을 이겨내는 거야!"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "speech",
					"speaker": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "루멘은 쓰러졌어. 하지만… 저 영혼들은?"
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사제의 기만은 끝났다. 그러나 텅 빈 눈빛들은 여전히 남아 있었다. 그들의 영혼은, 아직 구원받지 못했다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "보세요. 당신조차 고통받는군요. 저에게 오세요. 모든 것을 지워드릴 테니."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 나는… 포기하지 않아! 진짜 구원을 찾아낼 거야!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "사제의 성소가 모습을 드러냈다. 그곳에 그가 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "어서 오세요. 당신도 평온해질 시간입니다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신이 말하는 구원은… 존재의 말살이야!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "루멘의 평온한 가면이 갈라지며, 수십 개의 팔이 뻗어 나왔다. 섬뜩한 미소 아래, 진짜 얼굴은 없었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "보세요. 아무것도 느끼지 않으니… 괴롭지 않죠?"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이것이… 완전한 구원입니다. 고통과 의지, 모두 지워진 평온…."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거짓말 마! 그건 죽음이야!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"사제의 목소리가 멎자, 성소에 낯선 침묵이 내려앉았다.",
			"고통이 사라진 자들은 여전히 미소 지었지만, 아무것도 느끼지 않았다.",
			"과연 이것이 구원이었을까, 아니면 또 다른 형태의 지옥이었을까.",
			"우리는 고통 속에서 삶의 의미를 찾았다. 그들은 평온한 무(無)를 택했다.",
			"선택은 끝났다. 하지만 여전히 물음표가 남았다."
		]
	},
	"prologue": {
		"korean": [
			"지옥 한복판, 사제 루멘의 목소리는 평온했다.",
			"고통받는 영혼들에게 '완전한 구원'을 약속하며.",
			"그러나 그 가면 아래엔, 모든 의지를 지운 공허함이 숨어 있었다.",
			"이제, 그 거짓된 자비의 진짜 얼굴을 마주할 시간이다.",
			"고통 속에서 살아남을 것인가, 평온한 무(無)가 될 것인가."
		]
	}
} as const;
