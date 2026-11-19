export const scenario_hell_philomel_39_03 = {
	"scenario_id": "hell_philomel_39_03",
	"order": 3,
	"random_boss_title": {
		"korean": "검은 바위 거인"
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
	"prologue": {
		"korean": [
			"불탄 암석 제단 위로 검붉은 열기가 솟구친다.",
			"지옥의 불길이 입구를 넘어 마법 대륙까지 번지기 직전인 상황.",
			"열기를 봉인할 단서를 찾기 위해 탐험대는 제단 안으로 들어선다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불타는 제단 바닥 곳곳에서 검은 연기와 열기가 피어오른다."
					}
				},
				{
					"speaker": "mara",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "base",
					"content": {
						"korean": "저는 열기를 봉인할 방법을 연구하는 학자 마라예요. 제단의 불길이 심상치 않아 조사하러 왔죠."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "불길이 입구를 넘기 전에 막아야 합니다. 봉인할 방법이 있습니까?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…숨을 쉴 때마다 목이 타 들어가는 것 같아."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "mara",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건 오래전 별빛 정령들이 남긴 별빛 수정이에요. 이 수정을 집행자의 화염 코어에 꽂아야 봉인할 수 있어요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "별빛 수정을 집행자의 화염 코어에 꽂아야 열기를 멈출 수 있겠군요."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…수정 손잡이에서 차가운 기운이 흘러나와."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "mara",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "제단 바닥에서 집행자가 떨어뜨린 핫핑크빛 깃털을 발견했어요. 거대한 집행자에게 이런 깃털이 있다니 이상하죠?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "핫핑크빛 깃털이라니, 집행자에게 숨겨진 비밀이 있는 건가."
					}
				},
				{
					"content": {
						"korean": "그리고 이상하게도 집행자는 사람들을 죽이기보다 밖으로 몰아내려고만 하는 것 같아요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "죽이지 않고 밖으로 몰아내기만 한다니… 그 말이 마음에 걸리는군요."
					}
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "mara",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…발밑의 바위가 무겁게 뒤흔들리고 있어."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "제단 깊은 곳에서 바위가 부딪히는 둔탁한 소리와 함께 거대한 기척이 다가온다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "길을 가로막는 진동이다. 정체 모를 거대한 존재가 앞을 막아서고 있다."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…열기에 피부가 데일 것 같아."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 더 들어간다면 열기에 재조차 남지 않을 터…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거인을 넘어섰다. 마라 씨의 말처럼 집행자가 왜 사람들을 밖으로 몰아내기만 했는지 밝혀내야 한다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "제단 너머 흑요석 미로 방향으로 불길의 흔적이 가늘게 이어져 있다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "돌아가라. 뜨거운 제단은 너희의 무덤이 될 뿐이다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 멈출 순 없다. 다시 도전하겠다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "불길이 치솟는 제단 중앙, 검은 바위 형상의 거체가 단단히 버티고 서 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "더 깊이 들어가지 마라! 여기서 돌아가지 않으면 모두가 태워질 것이다!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "지옥불이 대륙으로 번지는 것을 두고 볼 수는 없다. 길을 비켜라!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…더는 물러설 곳이 없어."
					},
					"emotion": "sad"
				}
			]
		}
	]
} as const;
