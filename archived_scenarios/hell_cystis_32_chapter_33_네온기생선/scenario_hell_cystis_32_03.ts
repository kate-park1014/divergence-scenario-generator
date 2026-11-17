export const scenario_hell_cystis_32_03 = {
	"scenario_id": "hell_cystis_32_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"해부학 층계 방, 기괴하고 시큼한 혈흔 냄새가 진동한다.",
			"시체 청소부 그을음이 품에 끌어안고 있던 검은 상자.",
			"영수가 준 선물은 구원이 아니었다.",
			"상자 안에서 드러난 것은, 벗겨진 수천 개의 미세한 형광 기생충 껍질이었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "soot",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "구석에서 무언가 품에 끌어안고 숨기고 있네…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 품에 숨긴 검은 상자는 뭐지?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이, 이건 아무것도 아니다! 절대 건드리지 마라!"
					},
					"speaker": "soot",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "제발 다가오지 마라! 이 상자를 열면 안 돼!"
					},
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손을 지독하게 떨고 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "무얼 감추고 있는지 억지로라도 빼앗아 밝혀내야겠어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "영수를 마시고 죽은 신도들의 배 속에서 나온 거란 말이다!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "soot",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "상자가 강제로 열렸다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "검은 상자가 열리자 오팔빛 형광 껍질 허물이 층계 바닥 위로 흐르듯 흩어진다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뼛속까지 소름이 돋는 비린내야."
					},
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "soot",
					"content": {
						"korean": "영수를 마시면 몸 안에서 이 기생충들이 자라나 내장을 파먹는다!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "옥빛 영수의 실체가 기생충의 껍질이었다니."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "soot",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 성소는 구원의 장소가 아니다. 기생 알집이야! 당장 도망쳐!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 턱 막히는 유황 냄새다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "영수의 환각에 속은 자들을 위해서라도 멈출 수 없다."
					}
				},
				{
					"content": {
						"korean": "고집을 부리더니… 결국 {random_boss}의 눈에 띄고 말겠구나."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "soot"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 시체를 관리하던 거대한 그림자가 앞을 막아선다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "진실을 알아챈 쥐새끼들은 이 해부학 층계를 살아서 나갈 수 없다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기생 알집으로 신도들을 속인 죄, 여기서 끝내겠다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "크하하! 허물을 벗고 구원받을 기회를 스스로 차버리다니 불쌍하구나!"
					},
					"speaker": "random_boss",
					"emotion": "happy"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "쿨럭… 상자를 빼앗았다고 해서 영수의 서약이 없어질 것 같으냐…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "서약이든 기생충이든 전부 부수어 버리겠다."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수천 개의 형광 기생충 껍질이 유황 웅덩이 속으로 차갑게 침전했다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희도 그저 시체 층계에 새로 쌓일 기생충의 껍질이 될 뿐이다."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 내장이 무너지지 않았어. 다시 일어선다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
