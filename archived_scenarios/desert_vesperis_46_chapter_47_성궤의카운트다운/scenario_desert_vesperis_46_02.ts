export const scenario_desert_vesperis_46_02 = {
	"scenario_id": "desert_vesperis_46_02",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둡고 습한 지하 회랑. 벽면에는 사막의 오래된 글귀가 길게 이어져 있다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "벽에 새겨진 문자가 붉게 미동하고 있어."
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "잠시만요! 이 고문자는 모래시계와 성궤가 연결되어 있다는 증거예요."
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모래시계가 멈추지 않으면 무슨 일이 나는 거지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "ashur",
					"content": {
						"korean": "카운트다운이 끝나면 사원 전체가 성궤의 모래 폭풍에 삼켜집니다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…소름 돋네."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
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
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "이 받침대 아래를 보세요. 깨진 모래시계 껍데기 조각이 떨어져 있어요."
					}
				},
				{
					"content": {
						"korean": "누군가 이전에도 이 카운트다운을 깨뜨리려 했군."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "맞아요. 하지만 실패했고, 성궤의 주술은 모래 알갱이 하나마다 칼날의 원한을 엮어두었죠."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ashur"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "발밑이 서늘하다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "원한이 쇳소리가 되어 성궤 속에서 울리는 거였어."
					}
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
					"speaker": "ashur",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "모래 알갱이가 떨어지는 속도를 계산해보니, 잔여 시간이 얼마 남지 않았어요."
					}
				},
				{
					"content": {
						"korean": "모래 알갱이를 세어 정확한 남은 시간을 파악해야 해."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시계 틈새로 울리는 쇳소리가 점점 커집니다. 성궤의 반응이 강해지고 있어요!"
					},
					"emotion": "angry",
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "숨이 턱 막히는군."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "쇳소리가 멈추지 않는 한 카운트다운도 멈추지 않아."
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ashur"
				},
				{
					"emotion": "angry",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "보세요! 회랑 바닥에 붉은 칼날 잔상이 각인되기 시작했습니다!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "성궤의 붉은 모래 폭풍이 회랑까지 뿜어져 나오고 있어."
					}
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어요. 성궤가 있는 깊은 곳으로 나아가는 수밖에 없습니다."
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뼛속까지 진동이 전해진다."
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "칼날의 잔상을 뚫고 앞으로 가자."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "말했을 텐다. 사원의 쇳소리는 네놈들의 무덤가가 될 것이라고."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 쓰러질 수 없다. 모래가 다 떨어지기 전에 다시 일어나야 해."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 시계의 모래는 멈추지 않는다..."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "충격 여파로 모래시계의 진동이 더 붉게 타오르고 있어요!"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "쇳소리가 더욱 거세진다. 제단 중앙방으로 서둘러야 해."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "회랑 바닥에 그어진 붉은 칼날 잔상이 성궤가 있는 깊은 곳을 가리키고 있었다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상 나아가면 성궤의 분노를 사게 된다. 여기서 발을 돌려라."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "회유는 접어둬라. 우리는 카운트다운을 멈출 것이다."
					}
				},
				{
					"content": {
						"korean": "어리석은 자들이여, 쇳소리의 잔상 속에 매장되어라!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사원 지하 회랑의 짙은 어둠 속, 멈추지 않는 모래시계 소리가 귓가를 찌른다.",
			"학자 아슈르는 벽면에 새겨진 고문서가 단순한 기록이 아님을 직감한다.",
			"성궤에서 울려 퍼지는 기괴한 쇳소리, 바닥에 새겨지는 붉은 궤적.",
			"붉은 칼날의 잔상이 우리 발밑을 죄어오기 시작한다."
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
