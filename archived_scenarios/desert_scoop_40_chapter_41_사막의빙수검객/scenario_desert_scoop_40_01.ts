export const scenario_desert_scoop_40_01 = {
	"scenario_id": "desert_scoop_40_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "타는 듯한 사막의 모래 언덕. 뜨거운 열기가 발밑에서 치솟는다."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…더워서 숨이 막힐 것 같아."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모두 힘들지? 방금 누군가 사막에서 나눠 준 얼음 빙수를 가져왔어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 뜨거운 사막 한가운데서 얼음 빙수라니, 출처를 모르니 거절하겠어."
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그건 그렇지만… 사막에서 얼음이라니 참 이상하네."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래밭에 형광 핑크색 헝겊 조각이 떨어져 있어. 누군가 여길 지나간 게 틀림없어."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "열기 속에서도 모래 위에 남은 얼음 자국은 녹지 않고 서늘함을 내뿜는다."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…뼛속까지 시린 열기다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙수를 마다하다니 아쉽지만, 확실히 수상하긴 해."
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 무더위에 녹지 않는 얼음이라니, 단순한 먹거리가 아니야."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사막 한가운데에 얼음을 뿌리고 다니는 자가 있다는 뜻일까?"
					},
					"type": "speech",
					"speaker": "amir"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모래 언덕을 올라갈수록 기묘한 서늘함과 뜨거운 바람이 엉켜 맴돈다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…발이 모래에 푹푹 빠진다."
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누군가 우리 뒤를 바짝 쫓아오는 느낌이 들어."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "얼음의 출처를 의심하자마자 누군가 접근하고 있어. 경계를 낮추지 마."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "외길 사막 골짜기에 도달하자, 무거운 발소리와 함께 살기가 뿜어져 나온다."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…소름 돋는 살기야."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정면에서 무장한 자가 길을 막아섰다. 돌파하는 수밖에 없다."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전투가 끝나자마자 굉음과 함께 거대한 바위가 떨어져 내렸다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 어차피 너희는… 사막을 빠져나가지 못한다…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거대한 바위가 사막을 나가는 유일한 길목을 완전히 막아버렸어!"
					}
				},
				{
					"content": {
						"korean": "…이대로 사막에 갇히는 건가."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "바위 틈새에 방금 본 형광 핑크색 헝겊 조각이 끼어 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 바위를 쪼개고 길을 막은 자를 찾지 못하면 사막을 탈출할 수 없어."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "녹지 않는 얼음을 손에 쥐고도 보물이 없다고 오리발을 내밀 셈이냐!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 보물 따위 가진 적 없다. 당장 길을 비켜라!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "거짓말 마라! 그 시원한 희귀 보물을 혼자 차지하게 둘 줄 알고!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "보물을 내놓지 않으면 여기서 한 발짝도 못 나간다!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "뜨거운 사막에서 이렇게 쓰러질 순 없어. 다시 싸워야 해!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"타는 듯한 태양이 사막의 모래 언덕을 붉게 물들인다.",
			"목마름이 한계에 다다른 순간, 사막 한가운데서 얼음 빙수가 건네졌다.",
			"출처를 알 수 없는 서늘한 단맛 뒤편으로, 기묘한 음모가 피어오른다."
		]
	}
} as const;
