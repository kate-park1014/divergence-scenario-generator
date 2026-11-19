export const scenario_hell_philomel_39_01 = {
	"scenario_id": "hell_philomel_39_01",
	"order": 1,
	"random_boss_title": {
		"korean": "망령 파수꾼"
	},
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 붉은 입구. 바위 틈마다 핏빛 지옥불이 뿜어져 나온다.",
			"이대로 두면 뜨거운 열기가 마법 대륙 전체를 삼킬 것이다.",
			"번지는 불길의 근원을 찾아, 탐험대는 심연 안으로 발을 내딛는다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지옥 입구에 들어서자 바위 틈새로 붉은 불길이 뿜어져 나온다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "저는 길을 안내하는 탐험대원 애쉬예요. 붉은 불길이 퍼진다는 소식을 듣고 조사를 하러 왔어요."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바위 틈새에 검고 날카로운 조각이 박혀 있군요."
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "이 금 간 흑요석 조각을 보세요. 들어오는 모든 생명을 짓밟는다는 거대한 집행자의 흔적입니다. 매우 위험해요."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막히는 열기다."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "바닥에 솟구친 지옥불이 점점 더 넓게 번져 나가고 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "불길이 점차 입구 바깥까지 퍼지고 있어요. 불이 새어 나오는 통로를 찾아야 해요."
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 안쪽으로 들어가면 불길의 시작점을 찾을 수 있겠어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 앞쪽 굴에서 가장 강한 불길이 새어 나오고 있어요. 위쪽 통로로 가시죠."
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…발밑이 온통 잿더미야."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 앞은 수호 망령들의 기척이 강해요. 저는 여기서 입구 주변을 먼저 정리하고 있을게요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "좋다. 불길의 근원은 우리가 직접 확인하겠다."
					}
				},
				{
					"type": "direction",
					"speaker": "ash",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "…공기가 더 붉게 물들고 있어."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자욱한 잿가루 사이로 차가우면서도 스산한 음성이 울려 퍼진다."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무언가가 우리 길을 가로막으려 다가오고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 소름 돋는 기운이다."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "붉은 안개 속에서 지옥 입구를 지키는 망령이 앞을 막아선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "멈춰라! 더 이상 지옥을 자극하지 마라!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "새어 나오는 지옥불을 봉인하러 왔다. 길을 비켜라!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…달리 방법이 없어. 싸운다!"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "지옥의 열기에 굴복해라. 너희는 한 발짝도 더 나아가지 못한다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…여기서 물러설 수 없다. 다시 도전하겠다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 더 깊은 곳을 건드리면 지옥 전체가 타오를 것이다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불길이 안쪽에서 새어 나오고 있다. 진짜 근원은 더 깊은 곳에 있어."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어차피 가봤자 소용없다… 용암 골짜기의 뜨거운 불길이 너희를 잿더미로 만들 테니…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "망령 파수꾼이 소멸하고 용암 흘러내리는 골짜기로 향하는 길이 열렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "열기가 뿜어져 나오는 용암 골짜기로 나아간다."
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
