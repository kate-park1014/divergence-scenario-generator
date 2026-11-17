export const scenario_hell_cystis_32_04 = {
	"scenario_id": "hell_cystis_32_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "핏빛 웅덩이 위로 기괴한 연꽃 뿌리들이 엉켜 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "웅덩이 한가운데서 서약식이 열리고 있어."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "어서 오십시오. 시스티스 님의 구원을 받으려면 서약에 동참해야 합니다."
					}
				},
				{
					"content": {
						"korean": "…분위기가 기괴해."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서약서 내용을 먼저 확인하겠다."
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 서약서는 구원받은 자의 당연한 의무를 적은 거룩한 문서입니다."
					},
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "순순히 보여주지 않는 걸 보니 숨기는 게 있군."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "강제로라도 서약서를 확인해야겠어."
					},
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 성스러운 의식을 방해하려 들다니!"
					},
					"speaker": "brim",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "브림의 손에서 옥빛 서약서를 빼앗았다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "영수로 고통을 씻어낸 이상, 성소를 위해 모든 걸 바치는 것은 당연합니다."
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "대체 서약서에 뭐라고 적혀 있는 거지?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "겉으로 보기엔 평범한 충성 맹세문이다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "신의 은혜를 의심하지 마십시오. 그분은 우리를 구원하셨습니다."
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 서약서 하단의 서명란이 이상하다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "신도들의 붉은 피로 적은 진실한 맹세일 뿐입니다!"
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 피가 아니다. 끈적거리는 녹색 괴충의 진물이야."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…녹색 진물로 서명했다고?"
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 은혜를 모르는 불경한 자들 같으니!"
					},
					"speaker": "brim",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "성소의 구원은 괴충의 진물로 묶인 거대한 사기다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 신성한 구원의 서약을 더럽히려 하느냐!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "녹색 진물로 물든 거짓 구원은 여기서 끝이다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "진물을 받아들이고 성소의 양분이 되어라!"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크악… 진물의 서약은… 파괴되지 않는다…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "녹색 진물 서약서를 수거했다. 이제 제단으로 향하자."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거짓 서약은 찢겼으나, 제단에서 풍기는 기생충의 비린내는 한층 강해졌다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "녹색 진물이 너희 내장까지 죌 것이다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…여기서 멈출 순 없다. 다시 사슬을 끊어내자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"연꽃 뿌리가 뒤얽힌 핏빛 웅덩이 깊은 곳.",
			"신성한 대제관 브림은 구원을 약속하며 서약을 강요하고 있었다.",
			"그러나 영수의 은혜 뒤에 숨은 진실은 끔찍했다.",
			"서약서 아래에 찍힌 것은 붉은 피가 아니었다."
		]
	}
} as const;
