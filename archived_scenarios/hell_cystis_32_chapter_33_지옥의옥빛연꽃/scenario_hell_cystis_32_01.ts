export const scenario_hell_cystis_32_01 = {
	"scenario_id": "hell_cystis_32_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 파수꾼"
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유황 연기가 자욱한 구덩이 속, 동료의 몸이 불덩이처럼 달아올라 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "저는 지옥 구역의 길잡이 애쉬입니다. 열병으로 쓰러진 동료를 돕기 위해 찾아왔어요."
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "동료의 열병을 치료할 수만 있다면 어떤 약이든 찾아야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "이 손으로 약병을 꼭 쥐어본다. 옥빛 연꽃 모양의 약병이다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…피부가 타들어 가는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유황 웅덩이 주위로 푸르스름한 연꽃 향이 미세하게 감돌고 있다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "불길 속 구원자라는 분이 다친 이들을 고쳐 주며 나눠 준 약입니다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원자가 건넨 약이라면 이 열병도 잠재울 수 있겠어."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…약병에서 묘하게 고요한 기운이 느껴지네."
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "온천 웅덩이를 지나자 길목이 좁아지고 유황 열기가 더 거세진다."
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "이 앞은 구덩이를 감시하는 거친 자들이 막아서고 있습니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "어떤 장애물이 막아서든 동료를 살리기 전엔 돌아서지 않는다."
					}
				},
				{
					"speaker": "ash",
					"action": "exit",
					"direction": "up",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…발끝에서부터 불길한 진동이 올라와."
					},
					"type": "speech"
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
					"content": {
						"korean": "좁은 바위 틈 사이로 묵직한 몽둥이가 바닥을 긁는 쇳소리가 울려 퍼진다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구덩이 안쪽에서 외부인을 경계하는 험악한 기척이 다가오고 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 너무 텁텁해서 숨이 턱 막히네."
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 외부인이 감당할 수 있는 약이 아니다…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 주저할 시간이 없어. 동료를 살리기 위해 연꽃 약을 마신다!"
					}
				},
				{
					"content": {
						"korean": "약을 마시자 열병이 잦아들었지만, 쓰러진 동료를 업고 근원적인 치료법을 찾아 이동해야 한다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"direction": "up"
				},
				{
					"content": {
						"korean": "완전한 치료법과 소문을 확인하려면 통곡의 뼈 골짜기로 가야 합니다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 외지인들아, 지옥의 약에 손을 대려 한 대가를 치러라."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 동료를 포기할 수 없다. 다시 일어서자."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "유황 웅덩이 앞, 몽둥이를 든 거대한 붉은 그림자가 탐험대를 막아서며 길을 막는다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "외부인이 지옥 약을 함부로 쓰면 큰 재앙이 온다! 당장 물러서라!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "동료를 구하려면 이 약이 필요하다. 막는다면 때려눕힐 뿐!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저 몽둥이에 맞으면 무사하지 못하겠어."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"유황 연기가 숨을 막아서는 지옥 구덩이.",
			"열병으로 쓰러진 동료의 숨소리가 점점 옅어져 간다.",
			"동료를 살릴 약을 구하기 위해, 탐험대는 유황 열기 속으로 발을 내딛는다."
		]
	}
} as const;
