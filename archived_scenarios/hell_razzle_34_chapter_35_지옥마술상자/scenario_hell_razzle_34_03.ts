export const scenario_hell_razzle_34_03 = {
	"scenario_id": "hell_razzle_34_03",
	"order": 3,
	"random_boss_title": {
		"korean": "독찰사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
						"korean": "붉은 물이 넘실거리는 웅덩이 주위로 기괴한 비명 소리가 울려 퍼진다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "mara",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저는 비명 웅덩이에서 붉은 물을 긷는 마라예요. 지옥을 탈출하려는 모험가들이 또 찾아왔군요."
					},
					"speaker": "mara",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리는 광대가 사용하는 마술 상자의 정체를 파헤치러 왔다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…물색이 피처럼 시붉네."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "mara",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "마술 쇼를 보여주는 그 쾌활한 광대 말인가요? 상자 안에 영혼을 잘라버리는 가시 톱니가 숨겨져 있다는 소문이 있어요."
					},
					"speaker": "mara"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "마술 상자 안에 영혼을 가르는 가시 톱니가 숨어 있다니."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…생각만 해도 온몸이 서늘해져."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "mara",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "이 물웅덩이 옆 바닥을 보세요. 타다 남은 유황 재가 떨어져 있어요."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "물웅덩이 옆 바닥에 떨어진 형광 그린 유황 재가 불길한 기운을 내뿜는다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "mara",
					"direction": "down",
					"type": "direction",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 점점 타들어 가는 것 같아."
					},
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "웅덩이 깊은 곳에서 독기가 일렁이며 강력한 기척이 길을 막아선다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "유황 재가 떨어진 방향으로 가야 하는데 독기가 자욱하다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…바닥이 미세하게 진동하고 있어."
					},
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 웅덩이를 더 어지럽히지 마라… 가시 톱니를 멈추려면…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "상자를 멈출 방법을 찾아서 가시 톱니의 위협을 막아내겠다."
					}
				},
				{
					"speaker": "mara",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"direction": "down"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "유황 재의 흔적이 무지개 기둥 통로 쪽으로 이어져 있어요. 그곳으로 가면 방법을 찾을지도 몰라요."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "탐험대는 상자를 멈출 방법을 찾기 위해 무지개 기둥 통로로 발걸음을 옮겼다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "독기에 삼켜지기 전에 당장 이 웅덩이에서 떠나라!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 물러설 수는 없다. 다시 도전한다!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "웅덩이의 독기를 관리하던 자가 분노에 찬 눈빛으로 막아선다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "함부로 웅덩이를 헤집지 마라! 독기가 터지면 이 일대는 끝장이다!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "상자를 멈출 단서를 찾아야 한다. 길을 비켜라!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…독기가 목을 죄어온다."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"붉은 물이 기괴한 소리를 내며 일렁이는 비명 웅덩이.",
			"마술 상자의 진실을 쫓아 탐험대는 붉은 유황 웅덩이에 다가선다.",
			"웅덩이 곁에서 물을 긷던 자가 서늘한 경고를 던진다."
		]
	}
} as const;
