export const scenario_hell_vane_35_02 = {
	"scenario_id": "hell_vane_35_02",
	"order": 2,
	"random_boss_title": {
		"korean": "지옥 파수꾼"
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
			"마라의 영혼 봉인을 풀어버린 대가는 혹독했다.",
			"탐험대의 영혼이 지옥 안개에 끌려들어갈 위기에 처했다.",
			"위기를 막기 위해 도착한 곳은 비명 같은 바람이 불어오는 통곡의 폐허였다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "비명 소리가 귀를 찢는 통곡의 폐허. 핏빛 안개가 발목을 감아쥔다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "brim",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "저는 통곡의 폐허를 안내하는 길잡이 브림입니다. 영혼이 저려오는 걸 보니 주술이 풀렸군요."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "영혼이 안개 속으로 파열하기 전에 고정할 방법을 찾아야 한다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…1화에서 주술을 푼 뒤로 손끝이 계속 떨려."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 돌바닥 위에 오팔빛 보석 조각이 차갑게 빛나고 있다."
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
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "현상금 사냥꾼 베인의 뒤를 쫓으세요. 그자를 추적해야 영혼을 다스릴 길을 얻습니다."
					}
				},
				{
					"content": {
						"korean": "바닥에 떨어진 오팔빛 보석 조각도 사냥꾼의 흔적인 모양이군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 꼭 비명 지르는 것 같아."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "brim",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "사냥꾼의 뒤를 쫓는 것을 도우려 했지만, 그의 하수인들이 다가오고 있습니다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "알려줘서 고맙다. 나머지는 우리가 처리하지."
					}
				},
				{
					"action": "exit",
					"speaker": "brim",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "…공기가 미세하게 진동하고 있어."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "짙은 안개 너머에서 무거운 쇠사슬 끌리는 소리가 다가온다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단서를 덮고 우리의 전진을 막으려는 자가 앞을 막아서고 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막히는 기척이야."
					},
					"speaker": "character_4",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "단서는 여기서 끝이다. 안개 속에서 영혼이나 흩뿌려라."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…끝나지 않았다. 다시 덤벼라!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "안개를 헤치며 그림자 속에서 묵직한 자가 모습을 드러낸다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사냥꾼 님의 행적을 파헤치게 둘 순 없다. 이 폐허에 뼈를 묻어라!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영혼의 파열을 막으려면 사냥꾼을 쫓아야 한다. 비켜라!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…물러설 수 없어. 정면으로 뚫는다!"
					},
					"speaker": "character_1",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 보석 조각을 빼앗겨도… 사냥꾼 님을 멈출 순 없다…"
					}
				},
				{
					"content": {
						"korean": "떨어뜨린 오팔빛 보석 조각을 확인했다. 희미한 마법의 기운이 감돌고 있군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "베인이 거두는 영혼들이 탈옥수가 아니라 마법의 인이 찍힌 자들이라는 소문이 사실일지도 모른다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마법의 인에 대한 진실을 조사하기 위해, 탐험대는 낙인 제단으로 발걸음을 옮긴다."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
