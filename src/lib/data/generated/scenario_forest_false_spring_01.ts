export const scenario_forest_false_spring_01 = {
	"scenario_id": "forest_false_spring_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"lumina": {
			"id": "mon_7b56ecc3-abc6-4aa9-a0aa-ed83ce4627e7",
			"name": {
				"korean": "루미나",
				"english": "Lumina",
				"japanese": "ルミナ",
				"chinese": "露米娜",
				"french": "Lumina",
				"spanish": "Lumina",
				"vietnamese": "Lumina",
				"thai": "ลูมินา",
				"hindi": "लुमिना"
			},
			"description": "A Forest Fairy with yellow hair, she looks young",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a91acfe-f485-4fd9-4d9c-a6b1dd604200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/090c84cb-bcc2-4dec-a8cf-6ba8538b9700/public"
		}
	},
	"boss": {
		"pool_id": "pool_013"
	},
	"prologue": {
		"korean": [
			"한겨울, 눈밭 위로 붉은 꽃들이 피어났다. 아름답지만 어딘가 기묘한 숲.",
			"마을 사람 셋이 흔적도 없이 사라진 지 벌써 한 달.",
			"탐험대, 실종자들을 찾아 숲의 가장 깊은 곳으로 발걸음을 옮긴다.",
			"길을 안내하는 루미나의 표정엔 불안감이 가득하다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "한겨울, 눈밭 위로 붉은 꽃들이 피어났다. 기묘하게 아름다운 풍경."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "꽃이라니... 겨울인데?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lumina",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "여기가 그 숲이에요. 실종자들이 마지막으로 목격된 곳."
					},
					"type": "speech",
					"speaker": "lumina",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 일이지. 왜 하필 여기서..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲이 당신들을 부르는 것 같네요."
					},
					"type": "speech",
					"speaker": "lumina",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "걱정 마. 무사히 데려갈 테니까."
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 더욱 깊어지고, 이상하게도 발걸음이 가벼워진다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "happy",
					"content": {
						"korean": "점점 기분이 좋아지는 것 같아."
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기분 탓인가. 왠지... 나른해지는데."
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "lumina",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "lumina",
					"emotion": "sad",
					"content": {
						"korean": "이 숲은... 한번 들어오면 나가기 힘들어요."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 길이라도 잃었다는 거야?"
					}
				},
				{
					"content": {
						"korean": "아뇨. 그냥... 이곳을 떠나고 싶지 않게 만들어요."
					},
					"type": "speech",
					"speaker": "lumina",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설마. 우리가 찾고 있는 사람들이 그것 때문에?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "꽃들의 향기가 더욱 진해진다. 온몸이 나른해지는 기분."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 영원히 살고 싶을 정도로 좋아."
					},
					"speaker": "character_4",
					"emotion": "happy"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lumina",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lumina",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전해지는 이야기에 따르면... 이 숲에는 봄의 정령이 살고 있대요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 정령의 가호로 겨울에도 꽃이 피고, 숲은 영원한 봄을 맞이한다더군요."
					},
					"speaker": "lumina",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정령? 사라진 사람들과 관계있나?"
					}
				},
				{
					"speaker": "lumina",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그것까진... 저도 잘 모르겠어요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어쨌든. 계속 가봐야 해."
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 심장이 가까워진다. 온몸의 세포가 춤추는 듯한 환각."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…정말 이상해. 돌아가고 싶지 않아."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정신 차려! 우리가 왜 왔는지 잊었어?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "lumina"
				},
				{
					"content": {
						"korean": "너무 깊이 들어왔어요... 이대로 가다간..."
					},
					"type": "speech",
					"speaker": "lumina",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "걱정 마. 우린 괜찮아."
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제발... 돌아가요. 여긴 너무 위험해요."
					},
					"speaker": "lumina",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 와서 물러설 순 없어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳. 꽃잎으로 뒤덮인 거대한 공간."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어서 와. 오래 기다렸어."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이... 범인이군."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "범인? 난 그저, 모두를 행복하게 해주는 것뿐인데."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 더 좋잖아. 왜 굳이 돌아가려 해?"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌려보내줘! 그들은 우리 마을 사람이야!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "lumina",
					"type": "direction"
				},
				{
					"speaker": "lumina",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "정령님... 이들을 보내주세요. 그들은 당신의 장난감이 아니에요."
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "장난감? 아니. 그들은 내 손님이야. 그리고... 너도 곧 손님이 될 거야."
					},
					"type": "speech"
				},
				{
					"speaker": "lumina",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장...!"
					}
				},
				{
					"direction": "down",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "lumina",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 모두를 데려갈 거야!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "왜... 방해하는 거야...? 모두... 행복했는데..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그건 진짜 행복이 아니야."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "플로라의 마법이 약해진다. 그러나 숲은 아직 완전히 침묵하지 않았다."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사라진 사람들의 흔적. 그들은 정말 돌아가고 싶지 않은 걸까?"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "아직도 모르겠어? 여기가 더 행복하단 걸."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니... 우린 돌아가야 해."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 다시 와. 그때는... 너도 행복해질 거야."
					},
					"speaker": "boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
