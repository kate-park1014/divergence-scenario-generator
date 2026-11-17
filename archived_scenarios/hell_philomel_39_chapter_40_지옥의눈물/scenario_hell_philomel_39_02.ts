export const scenario_hell_philomel_39_02 = {
	"scenario_id": "hell_philomel_39_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "갱도 깊은 곳에서 귀가 찢어질 듯한 비명 소리가 울려온다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "공기가 너무 탁해. 대체 어디서 나는 비명이지?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "soot",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "함부로 나아가지 마라. 갱도 수호자가 길을 막고 있다."
					},
					"speaker": "soot",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐! 갱도 안에서 서성이는 자는!"
					}
				},
				{
					"emotion": "base",
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "그을음이라 불러라. 이 갱도에 갇힌 억울한 영혼들을 조사하는 자다."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "soot",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "soot",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저기 갱도 수호자가 거대한 화염으로 통로를 완전히 차단했다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "유황 등불을 건드리는 자, 이 갱도를 단 한 걸음도 지날 수 없다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "화염이 너무 거세서 전진할 수가 없어. 막을 방법이 필요해."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "soot",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기름을 부어 불길의 산소를 일시적으로 빼앗아야 한다. 내가 기름을 준비하마."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "기름을 부어 화염을 차단하는 데 성공했어!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 바닥을 봐라. 검은 바위에 에메랄드빛 눈물 자국이 흘러떨어져 있다."
					},
					"speaker": "soot",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…이 소름 돋는 울림은 뭐지?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "불길이 꺼지면서 억울하게 죽은 영혼들의 비명 회상이 터져 나오고 있어!"
					}
				},
				{
					"speaker": "soot",
					"emotion": "sad",
					"content": {
						"korean": "열기를 차단할수록 영혼들의 분노 환영이 더 거세지는구나…"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비명 회상이 갱도 전체에 진동한다. 탐험대를 노리는 기운이 강해졌어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리가 등불을 차단할수록 영혼들의 오해가 누적되고 있어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 끝에 무엇이 있든 비명의 갱도를 돌파해야 해."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "수호자를 넘어가지 않으면 이 비극적인 회상은 멈추지 않는다!"
					},
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "유황의 염화 속에서 영원히 억울한 비명을 지르거라!"
					},
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비명에 휩싸여 꺾일 순 없어… 다시 일어서야 해."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "불길을 차단해도… 억울하게 죽은 비명은 정화되지 않는다…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "수호자는 쓰러졌지만 영혼들의 통곡 소리는 여전히 귓가를 찢고 있어."
					}
				},
				{
					"speaker": "soot",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "soot",
					"content": {
						"korean": "등불을 끌수록 불합리한 형벌의 환영이 더 거세진다. 다음 지역인 용암 제련소로 가야 한다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "검은 바위에 묻은 눈물 자국을 뒤로한 채, 탐험대는 더 깊은 화염 속으로 발을 내딛는다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "영혼들의 형벌을 방해하고 갱도를 어지럽힌 침입자들아, 여기서 멸망해라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "영혼들을 억압하고 비명을 강요하는 건 바로 너다!"
					}
				},
				{
					"content": {
						"korean": "갱도 수호자를 쓰러뜨리고 진실을 향해 나아가자!"
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
			"기괴한 비명 소리가 갱도 벽면을 타고 울려 퍼진다.",
			"유황의 열기를 차단하려 할수록, 영혼들의 분노는 더욱 붉게 타오른다.",
			"그을음으로 뒤덮인 바위 아래, 억울하게 죽은 자들의 잔혹사가 모습을 드러낸다."
		]
	}
} as const;
