export const scenario_modern_whisperweb_0_HCR_04 = {
	"scenario_id": "modern_whisperweb_0_HCR_04",
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
			"위스퍼 웹이 과거 갱단 '검은 밤'의 은닉 자금을 추적 중이었다.",
			"주인공은 신분 세탁 후 평범하게 살고 있는 카이를 만났다.",
			"카이의 옛 동료 중 한 명이 위스퍼 웹에 의해 신상이 공개될 위기에 처했다.",
			"주인공은 카이에게 동료의 정보를 넘겨줄 것을 설득해야 했다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 외곽의 한적한 세탁소. 카이는 고요한 삶을 살고 있었다."
					}
				},
				{
					"content": {
						"korean": "카이 씨 맞습니까? 위스퍼 웹이 당신을 찾고 있습니다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "누… 누구시죠? 전 그런 사람이 아닙니다."
					},
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "과거 갱단 '검은 밤'의 정보 관리자 카이. 그 은닉 자금을 위스퍼 웹이 노리고 있어요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대체 무슨 소리를 하는 거죠? 전 더 이상 그쪽에 엮이고 싶지 않아요."
					}
				},
				{
					"content": {
						"korean": "당신의 옛 동료 중 한 명, 리오의 신상 정보가 위스퍼 웹에 공개될 위기입니다. 갱단의 보복이 따를 거예요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "리오…! (떨리는 목소리) 안 돼… 그럴 리 없어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "위스퍼 웹은 '검은 밤'의 모든 과거를 들추려 합니다. 막아야 해요."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카이의 낡은 서랍에서 오래된 데이터 칩이 튀어나왔다. 재생 불가능한 오류 메시지와 함께 여성의 목소리가 끊기며 흘러나왔다. '...모든 비밀이... 곧 연결된다...'"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "리오는 평범하게 살고 싶어 했어요. 나처럼요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 그 정보를 넘기지 않으면, 더 많은 사람이 위험해집니다. 공동체를 위해 희생해야 해요."
					}
				},
				{
					"content": {
						"korean": "희생? 내 동료의 목숨을 걸고? 그건 아니에요."
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "위스퍼 웹의 정보 유출은 걷잡을 수 없이 퍼지고 있어요. 한 명을 막으면 더 큰 비극을 막을 수 있습니다."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시 주민들이 '감시당하는' 악몽을 꾸고, 스마트폰 스피커에서 알 수 없는 속삭임이 들린다는 괴담이 퍼져나갔다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "미안하지만… 난 내 동료를 팔 수 없어요. 절대."
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "카이 씨! 이대로 가면…! 당신의 옛 동료는 갱단에게 보복당할 거예요."
					}
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "kai",
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카이는 빠르게 뒷골목으로 사라졌다. 며칠 뒤, 뉴스에는 리오의 집이 불에 탔다는 소식과 함께 '검은 밤'의 은닉 자금 1억이 사라졌다는 보도가 흘러나왔다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "결국… 돌이킬 수 없는 일이 벌어졌어. 내 원칙이 비극을 막지 못했어."
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네 선의가 또다시 비극을 만들었어. 넌 아무것도 막지 못해."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 나는 위스퍼 웹의 모든 데이터 전송 경로를 추적해서 해킹해서 멈출 거야."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시 외곽의 낡은 창고, 폐쇄된 서버 랙들 사이에 정체 모를 자가 서 있었다. 수십 개의 모니터가 '검은 밤' 갱단의 계좌 내역과 불타는 집 이미지를 교차로 보여주고 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "왔군. 네가 카이에게 정보를 넘기라고 했을 때, 그는 거절했지."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 것을 폭로했어. 무고한 사람들의 삶을 망쳤어. 카이의 선택은 너 때문이야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "무고? 난 그저 모든 것을 드러냈을 뿐. 선택은 카이가 했고, 갱단이 불을 질렀어."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…정보는 끊어지지 않아. 1억이 사라진 곳에, 또 다른 1억이 있을 뿐."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 나는 모든 숨겨진 정보의 연결고리를 끊어낼 거야."
					}
				},
				{
					"content": {
						"korean": "정체 모를 자의 잔상이 사라졌지만, 창고 벽과 오래된 전자기기에는 부서진 회로 기판 문양의 낙서가 발견되었다. 정보의 폭주는 멈추지 않았다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
