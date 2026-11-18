export const scenario_hell_vane_35_03 = {
	"scenario_id": "hell_vane_35_03",
	"order": 3,
	"random_boss_title": {
		"korean": "영혼 제련사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"마라의 영혼 파열을 저지해야만 한다.",
			"탐험대는 마법의 인을 조사하기 위해 낙인 제단으로 향한다.",
			"용암 재가 휘날리는 제단 끝에는 서늘한 흔적이 기다리고 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "뜨거운 화염 사이로 붉게 타오르는 제단이 모습을 드러냈다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마라의 영혼 파열을 막으려면 이 제단의 마법 인을 조사해야 해."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…열기가 피부를 태울 것 같아."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cinder",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핏빛 안개를 뚫고 들어온 자들이 있군. 나는 이 낙인 제단을 지키는 주술사 신더요."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "마법의 인에 새겨진 영혼 주술을 풀 단서를 찾으러 왔다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "제단 중앙의 석판 위에서 주술사 신더가 오래된 도안을 가리킨다."
					},
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "파열을 멈추려면 고대 비법을 사용해 영혼 봉인을 다시 새겨야 하오."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 비법의 봉인 주술이라면 마라의 영혼을 다스릴 수 있겠군."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 짓눌려 숨쉬기 힘들어."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 구석에서 식지 않은 붉은 시가 재가 발견된다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단 구석에서 식지 않은 붉은 시가 재를 주웠어."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아직 열기가 뿜어져 나오고 있어."
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cinder",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그 시가 재는 제단의 것이 아니오. 방금 전 어떤 사냥꾼이 다녀갔소."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "cinder",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "현상금 사냥꾼 베인이 이미 이곳까지 도착했던 건가."
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
					"emotion": "base",
					"content": {
						"korean": "제단 더 깊은 곳에서 쇠를 두드리는 거친 소리가 울려 퍼진다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "화염 너머에서 거대한 기척이 우리 접근을 가로막고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…심장이 불꽃처럼 크게 뛰어."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "으윽… 제단을 지키는 내 힘이 쓰러지다니…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "방금 주운 시가 재… 베인이 영혼들을 보관함에 모으고 있는 게 틀림없어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "사냥꾼은 이미… 영혼을 챙겨 지옥 회랑으로 떠났다…"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "베인의 행적을 쫓아 지옥 회랑으로 달려간다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 잔해를 뒤로하고, 탐험대는 지옥 회랑을 향해 발걸음을 옮긴다."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "제단의 불길 속에서 영혼이 되라!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 쓰러질 수 없다. 다시 도전한다."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "용암 재 둔덕 위로 영혼을 주조하는 붉은 그림자가 솟구친다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더는 제단에 접근하지 마라! 영혼을 더럽히는 자는 잿더미로 만드리라!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영혼 봉인을 완성하기 위해 이 제단을 지나가야만 한다!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "…더 물러설 곳은 없어."
					}
				}
			],
			"id": 15
		}
	]
} as const;
