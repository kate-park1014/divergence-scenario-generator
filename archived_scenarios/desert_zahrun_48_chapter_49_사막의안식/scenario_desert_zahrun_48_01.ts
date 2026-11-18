export const scenario_desert_zahrun_48_01 = {
	"scenario_id": "desert_zahrun_48_01",
	"order": 1,
	"random_boss_title": {
		"korean": "약탈꾼"
	},
	"act": "intro",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래바람이 사정없이 몰아치는 황량한 사막의 들머리.",
			"목마름에 쓰러진 동료와 죽은 자의 기운이 밴 녹슨 검.",
			"우리를 노리는 그림자를 뚫고 사막을 향한 첫발을 내딛는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래바람 언덕 위, 한 사내가 모래밭에 쓰러져 있다."
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "…목이 말라 죽을 뻔했어. 난 주인공의 동료 듄이다. 구해줘서 고맙다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "듄의 발치에 죽은 자의 기운이 밴 녹슨 검이 떨어져 있으니 챙겨서 출발하자."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람 소리 사이로 기묘한 울림이 들리는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뜨거운 모래 언덕을 지나며 사막 깊은 곳으로 향한다."
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dune",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "이 사막에는 길 잃은 검객에게 물을 내주는 친절한 상인이 돌아다닌다고 해."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우선 사막을 무사히 빠져나가려면 수분을 확보해야 한다."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…입술이 바짝바짝 타들어 가."
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
						2
					],
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저 앞 협곡은 약탈꾼들이 자주 숨어드는 위험한 길목이야."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위험하더라도 사막을 건너려면 이 길을 지나쳐야만 한다."
					}
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…모래 냄새에 비린내가 섞여 오는군."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바위 그늘 뒤에서 불길한 발소리와 무기 긁히는 소리가 다가온다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 우리 물통을 탐내고 굶주린 눈빛으로 접근하고 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…손잡이를 쥔 손에 힘이 들어간다."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "흐흐, 모래밭에 쓰러져 목말라 죽어라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…여기서 멈출 수는 없다. 다시 일어나겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "큭… 물통 하나 빼앗지 못하고 패배하다니…"
					}
				},
				{
					"content": {
						"korean": "약탈꾼을 제압했지만, 멀리서 나지막이 황동 방울 소리가 울려 퍼진다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "방울 소리의 잔향을 뒤로하고, 탐험대는 다음 장소인 오아시스 우물가를 향해 걸음을 옮겼다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "가진 물통을 전부 내놔라! 친절한 상인분께 바칠 물이 부족하단 말이다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리의 생존이 걸린 물통이다. 순순히 물러서지 않겠다면 싸우겠다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…절대 빼앗길 수 없어."
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		}
	]
} as const;
