export const scenario_desert_carnivex_42_03 = {
	"scenario_id": "desert_carnivex_42_03",
	"order": 3,
	"random_boss_title": {
		"korean": "바람 현자"
	},
	"act": "rising",
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
			"사막의 독에 녹아내리는 동료를 구해야 한다.",
			"치료법을 안다는 주술사를 찾아 바위 협곡 동굴로 들어선다.",
			"깊은 어둠 속, 숨겨진 뼈 칼날과 기이한 울림이 탐험대를 기다린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "바위 협곡의 동굴 입구. 세찬 바람이 거칠게 귓가를 때린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "주술사가 정말 이 동굴 안에 있을까?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바람 소리가 꼭 괴물 소리 같아… 소름 돋네."
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "독 치료법을 찾지 못하면 늦어. 나아가자."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"speaker": "dune",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈춰라. 이 동굴 깊은 곳에 외부인이 발을 들이다니."
					},
					"speaker": "dune",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구지?"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "나는 듄. 바위 협곡 동굴에서 살아온 거주자다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "바위 그늘에서 갑자기 나타났어… 놀라라."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "동굴 깊은 곳은 이미 기이한 비명으로 가득하다. 돌아가라."
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "목숨이 걸린 동료가 있어. 그냥 돌아갈 순 없다."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴 구석, 음산하게 빛나는 금속 조각이 바닥에 나뒹군다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "바위에 무언가 떨어져 있어."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						4
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
						"korean": "그건… 부러진 청동 칼날이다. 옛 전사들의 무기지."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "날카롭던 쇠가 험하게 깨져 있네."
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"content": {
						"korean": "전사들도 괴물의 소문을 듣고 찾아왔으나 끝내 돌아가지 못했다."
					},
					"emotion": "sad",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "처참하게 파괴된 흔적이야. 거대한 힘에 꺾였어."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"spot": [
						3,
						4
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전사들의 뼈는 모두 골수가 뽑힌 채 시들어 있었다."
					},
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "골수라니… 청동 칼날의 주인들도 그렇게 희생된 건가?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래 길잡이라는 자의 정체는 곤충 괴물이다. 유골의 골수를 먹고 자라지."
					},
					"emotion": "angry",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "뼈를 녹여 골수를 먹는 곤충 괴물이라니… 뼛속까지 오싹해진다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "노란 물을 마신 동료의 다리가 왜 녹았는지 이제 확실해졌다."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}의 기도가 멈춘다… 섣부른 발걸음이 비극을 부를 것을…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "장벽을 넘어섰다. 이제 괴물의 정체를 추적해야 해."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						4
					],
					"speaker": "dune",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "괴물에게 다가가려면 붉은 모래 구덩이로 이동해야 한다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "골수를 탐하는 곤충 괴물을 찾아 뼈를 녹이는 독을 끝내겠어!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 붉은 모래 구덩이를 향해 발걸음을 재촉한다."
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동굴 안쪽, 세찬 바람과 함께 기이한 기도가 울려 퍼진다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 나아가지 마라! 이곳은 괴물의 침식으로 더럽혀진 영역이다!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 독의 치료법을 찾아야 한다! 길을 비켜라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들이여, 너희를 구원하기 위해 여기서 베어주마!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "동료를 구하기 전까진 멈추지 않아. 정면 돌파다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "경고를 무시한 대가다. 세찬 바람 속에서 조용히 잠들라."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "여기서 쓰러질 수는 없어… 다시 일어서야 해."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
