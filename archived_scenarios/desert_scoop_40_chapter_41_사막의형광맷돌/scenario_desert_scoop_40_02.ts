export const scenario_desert_scoop_40_02 = {
	"scenario_id": "desert_scoop_40_02",
	"order": 2,
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
					"type": "speech",
					"content": {
						"korean": "형광 시럽이 뚝뚝 떨어지는 서늘한 저장고 내부."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여기 피살자들의 검자국을 봐라. 보통 칼질이 아니다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 매끄러운 단면, 스쿱이 빙수를 썰 때 내던 궤적과 똑같아!"
					}
				},
				{
					"content": {
						"korean": "등 뒤에서 벨 겨를도 없이 단숨에 그어 내렸어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "맞다. 범행에 쓰인 기술은 분명 스쿱의 삭설 칼질이다."
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "시신 곁에 떨어진 이 오색 얼음 조각을 확인해 봐라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "얼음 조각 표면에 칼날의 마기 흔적 삭설 칼자국이 각인되어 있어!"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "차가운 마검의 기운이 아직도 서려 있네…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 얼음 파편이 마검의 궤적을 증명하는 결정적 물증이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ashur"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 모래밭에 깨져 있는 무지개 유리 맷돌 잔해를 봐라."
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "맷돌 밑바닥에 무쌍검성의 정교한 아인 문양이 새겨져 있어!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전설적인 문양이 왜 이런 맷돌 바닥에…"
					}
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "범인이 유물급 맷돌을 이용해 범행을 숨기려 했던 거다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ashur",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "맷돌 잔해에 남아있는 형광 독기가 주변으로 퍼지려 한다."
					},
					"speaker": "ashur"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 칼날로 유리 맷돌 잔해를 완전히 긁어 분쇄하겠어!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "서둘러, 독기가 뼛속까지 시리게 만들어!"
					},
					"speaker": "character_4"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "좋다, 마검 잔재가 맷돌과 함께 완전히 가루가 되어 소멸했다."
					},
					"speaker": "ashur"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "조심성만 떨다가 이 꼴이 되었군! 증거는 거짓말을 하지 않는다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…서두른다고 진실이 드러나는 것은 아니야. 다시 일어서자."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 왜 당장 스쿱의 목을 베러 가지 않는 것이냐!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "충동적인 처단은 그들의 덫에 걸려드는 길이다. 깊이 조사하겠다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성급한 무력을 제압한 탐험대는 사건의 뒷면을 파헤치기 위해 이동한다."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "스쿱이 범인이라는 증거가 이렇게 확실한데 뭘 주저하나!"
					}
				},
				{
					"content": {
						"korean": "피살자들의 정황에 더 깊은 음모가 숨겨져 있을 수도 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "당장 살인마 스쿱을 처단하러 가지 않는다면 너희도 적으로 보겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"찌는 듯한 열기가 감도는 형광 시럽 저장고.",
			"피살자들의 시신 위로 얼어붙은 삭설 칼자국이 남아 있다.",
			"검객 탐정 아슈르가 칼자국과 빙수 칼질의 일치점을 짚어낸다.",
			"오색 얼음 파편 속에서 마검의 흔적이 서서히 모습을 드러낸다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
