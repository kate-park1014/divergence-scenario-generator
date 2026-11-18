export const scenario_desert_kaelith_44_03 = {
	"scenario_id": "desert_kaelith_44_03",
	"order": 3,
	"random_boss_title": {
		"korean": "주술사"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "타는 듯한 태양을 피해 탐험대가 붉은 모래 신전 안으로 들어섰다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바깥 열기를 피해 들어오셨군요. 저는 신전 그늘에서 약초를 구하던 약초꾼 아슈르입니다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그늘 덕분에 살았군. 다들 탈진을 면했어."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…사막의 더위가 겨우 가시는 기분이야."
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아슈르가 탐험대가 가진 유리 장신구를 내려다보았다."
					}
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 뜨거운 유리 장신구는 찬물에 헹궈야 열기가 식고 안전해집니다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "찬물에 헹구면 장신구의 열기를 가라앉힐 수 있다는 뜻이군."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…장신구 근처의 공기가 일렁거려."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신전 기둥 옆에 검은 슬래그 껍질 조각이 흩어져 있다."
					}
				},
				{
					"content": {
						"korean": "이 검은 슬래그 껍질을 만져보니 아주 차갑고 단단하군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무서운 상인의 정체는 태양을 베려다 온몸이 유리로 굳은 검객이었어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저는 여기서 약초를 더 찾겠습니다. 안쪽은 조심하세요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "ashur"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…기둥 뒤에서 나쁜 예감이 들어."
					}
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
						"korean": "신전 안쪽 깊숙한 곳에서 주술 문양이 빛나며 진동한다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누군가 열기가 퍼지는 걸 감지하고 다가오고 있다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…불길한 기척이 온몸을 감싸고 있어."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "함부로 열기를 건드리지 마라! 사막 전체가 위험해진다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리는 살아남아야 한다. 길을 막는다면 돌파하겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…주문의 압박이 숨을 막히게 해."
					},
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들아, 그 열기의 재앙을 감당할 수 있겠느냐!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 물러설 순 없다. 전열을 다시 가다듬자."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "열기를 식히지 못하면 사막 전체가 불바다가 되고 말 것이다…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "들었던 대로 장신구를 찬물에 헹궈 열기를 제어하겠다."
					}
				},
				{
					"content": {
						"korean": "주술사가 쓰러진 통로 너머로 버려진 공방의 기운이 느껴진다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지독한 뜨거움에 탈진하기 직전, 붉은 모래 신전의 그늘이 보였다.",
			"열기를 피하기 위해 접어든 신전 안은 차가운 기운으로 가득했다.",
			"하지만 신전 깊은 곳에서는 또 다른 위험이 숨죽이고 있었다."
		]
	}
} as const;
