export const scenario_modern_whisperweb_0_FCE_04 = {
	"scenario_id": "modern_whisperweb_0_FCE_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"시청 서버 마비로 도시 기능이 어긋났다.",
			"10명의 시민이 병원에서 제때 치료받지 못했다.",
			"위스퍼 웹의 실마리를 찾기 위해 낡은 전파상으로 향한다.",
			"갱스터 잔당 카이가 숨긴 '붉은 장미단' 장부를 찾아야 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 전광판에는 비상 상황이 계속 송출되고 있었다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시청 서버가 죽어서 도시가 제대로 돌아가지 않아."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "여긴 낡은 전파상이야. 당신들이 올 곳이 아니라고."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이. '붉은 장미단'의 장부를 찾고 있어."
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 장부? 난 그런 거 몰라."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기 어딘가에 장부가 있을 거야."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈춰! 그걸 열면 과거 붉은 장미단에게 피해 입은 사람들 정보가 유출돼."
					},
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "수백 명의 사람들이 분노할 거야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그것 때문에 이 혼란이 시작된 거라고."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 상자에서 암호화된 장부가 발견되었다."
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이걸 강제로 복원해서 언론에 공개할 거야."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "안 돼! 도시는 난장판이 될 거야. 난 다시 숨어 살아야 해."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨기는 게 더 큰 혼란을 만들었어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "장부가 강제로 복원되었다. 과거 붉은 장미단의 기록이 드러났다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도시의 몇몇 사람들이 같은 내용의 꿈을 꿨다는 소문이 퍼졌다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "붉은 장미단 장부 내용이 언론에 공개되었다. 수백 명의 시민이 복수를 위해 거리로 나왔다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이젠 돌이킬 수 없어. 도시는 싸움으로 가득 찰 거야."
					}
				},
				{
					"content": {
						"korean": "이게 진실의 대가인가. 하지만 멈출 수 없어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹의 실체를 끝까지 추적할 거야."
					},
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "어둡고 습한 골목 벽면에서 특정 모양의 낙서가 눈에 띄었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전파상 깊은 곳, 정체 모를 자가 데이터 터미널 앞에 서 있었다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔군. 네가 붉은 장미단 장부를 터뜨린 자인가."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이 혼란이 네 계획대로 된 건가?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 낡은 정보를 꺼내 사람들 앞에 놓았을 뿐. 그들이 움직인 거다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 손으로 도시를 난장판으로 만들었군."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 숨은 그림자라면, 끝까지 쫓아서 널 끌어낼 거야."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 전파상의 모든 기기가 멈췄다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 일으킨 분노는 쉽게 가라앉지 않을 것이다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 에코를 찾아가서 모든 걸 바로잡을 거야."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "겨우 날 막았다고 생각하나? 이미 정보는 흐르고, 도시는 움직인다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 파헤친 장부의 기록은, 에코가 숨긴 조각 중 하나일 뿐."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "에코? 그 정보상이 또 관련되어 있다고?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "폭로된 과거는 새로운 혼란을 낳았다. 에코에게 또 다른 진실이 있을지도 모른다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
