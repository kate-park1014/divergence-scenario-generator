export const scenario_hell_amnion_38_03 = {
	"scenario_id": "hell_amnion_38_03",
	"order": 3,
	"random_boss_title": {
		"korean": "연금술사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"붉은 용암이 넘실거리는 호수 중앙, 비밀을 품은 제단.",
			"독기에 중독된 동료를 구하기 위해 성녀의 목소리를 쫓는다.",
			"이곳에서 탐험대는 새로운 단서와 뜻밖의 경고를 맞닥뜨린다."
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
						"korean": "붉은 용암 호수 중앙으로 이글거리는 제단 길이 길게 늘어서 있다."
					}
				},
				{
					"content": {
						"korean": "동료를 구하려면 목소리의 진실이 남아있는 제단 중앙으로 가야 해."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…이 주변 열기만으로도 숨이 바짝 막히네."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "호숫가 바위 그늘 아래, 한 사내가 옛 기록 석판을 유심히 짚고 있다."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저는 용암 호수의 옛 기록을 연구하는 브림입니다. 여긴 무슨 일입니까?"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "독기에 빠진 동료를 살릴 방법과 고치의 진실을 찾고 있다."
					}
				},
				{
					"speaker": "brim",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "기록을 조사해 보니, 고치는 영혼을 구하는 장소가 아닐 수도 있습니다."
					}
				},
				{
					"content": {
						"korean": "…울리는 용암 소리가 기분 나쁘게 귓가를 때려."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제단으로 가시려면 기록에 적힌 이 오팔빛 주술 실을 챙기십시오."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "오팔빛 주술 실을 얻었으니 제단 중앙으로 계속 나아가자."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "주술 실은 강한 주력을 품고 있으니 함부로 다루면 위험합니다."
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "angry"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "brim",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…실 끝에서 손가락이 떨릴 정도로 차가운 기운이 흘러나와."
					},
					"emotion": "sad",
					"speaker": "character_3",
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
					"emotion": "base",
					"content": {
						"korean": "제단 입구에서 오팔빛 주술 실이 강하게 진동하며 매캐한 연기가 피어오른다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "주술 실에 반응하듯 연기를 다듬으며 길을 막아서는 자가 있다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…독한 연기 향 때문에 눈을 뜨기 힘들 정도야."
					},
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 중앙, 연기 폭탄을 든 자가 나타나 탐험대의 길을 가로막는다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당장 멈춰라! 그 주술 실을 건드렸다간 호수가 통째로 폭발한다!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동료의 목숨이 걸려 있다. 무슨 일이 있어도 비켜라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…지옥의 열기에 심장이 터질 것 같아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이 고집불통들! 호수가 휩쓸려 파괴되어도 나는 모른다!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"action": "exit",
					"direction": "up",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "경고를 들어보니 고치는 영혼을 구하는 게 아니라 무언가를 가둔 주머니일지 몰라."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…성녀의 목소리가 우리를 속인 걸까."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잊힌 주술 신전으로 이동해서 고치를 안전하게 봉인할 방법을 찾자."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험대는 깊어진 의심을 품은 채 다음 장소인 신전으로 발길을 돌렸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "경고를 무시한 대가다! 연기 속에서 재가 되어라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…동료를 위해서라도 여기서 멈출 수 없다. 다시 붙자!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
