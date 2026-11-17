export const scenario_desert_kaelith_44_03 = {
	"scenario_id": "desert_kaelith_44_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "오아시스였던 마른 바닥이 온통 투명하고 날카로운 유리 조각으로 깔려 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "발밑이 마치 가열된 판처럼 이글거리고 있어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ferro"
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"emotion": "angry",
					"content": {
						"korean": "조심해! 이 오아시스 유리 터는 아직 식지 않은 모래가 굳은 곳이야."
					}
				},
				{
					"speaker": "ferro",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난 잔해 수집가 페로라고 해. 낄낄거리는 방랑 상인의 가면 흔적을 쫓아왔지."
					}
				},
				{
					"content": {
						"korean": "발바닥이 구워지는 것 같아."
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "방랑 상인이 지나간 뒤로 유리가 칼날처럼 솟구치고 있으니 발 밑을 조심해."
					},
					"type": "speech",
					"speaker": "ferro",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "절벽 표면에 붉게 달아오른 굵은 검흔이 깊게 패어 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro"
				},
				{
					"speaker": "ferro",
					"emotion": "angry",
					"content": {
						"korean": "이 열기 좀 봐. 사막 절벽에 새겨진 검흔에서 초고열이 뿜어져 나오고 있어."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "동제 물병을 검흔 근처에 댔더니 순동 표면이 모래와 단단히 접착되며 녹아내리는군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "금속마저 봉인하듯 굳어버리다니."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "검흔의 열기가 너무 강해. 오래 머물다간 물병도 우리 장비도 모조리 녹겠어."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "깨진 유리 조각들이 바닥에서 거친 화염 아지랑이를 내뿜는다."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ferro",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방금 파쇄된 유리 인형 조각에 물방울이 살짝 튀었어!"
					},
					"emotion": "angry",
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "물에 닿은 조각들이 화염 줄기를 뿜으며 하나로 끌려가 결합하고 있어!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "소름 돋는 광경이야."
					},
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"emotion": "angry",
					"content": {
						"korean": "급냉시킬수록 도리어 유리 파편들이 더 날카롭고 단단한 하나로 뭉치는구나!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "열기 속에서 깨진 가면 파편 하나가 붉은빛을 뿜으며 굴러떨어진다."
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ferro",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게 바로 방랑 상인이 떨어뜨리고 간 가면 파편이야!"
					}
				},
				{
					"content": {
						"korean": "가면 안쪽에 '피의 온도가 모자라 검이 굳지 않는다'는 붉은 각인이 새겨져 있군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"content": {
						"korean": "기분 나쁜 웃음소리가 점점 가까워진다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "상인의 낄낄거리는 소리가 귓가를 찢어. 바로 앞이 보스의 거처다!"
					},
					"speaker": "ferro",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "낄낄! 냉각이 유리를 단단히 결합시키는 축복인 것을 깨달아라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "급냉의 결합력을 막지 못했어... 전략을 바꿔 다시 도전해야 해."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽... 유리는 산산조각 났지만... 제단의 화염 아지랑이는 식지 않는다..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "유리 파편이 급냉하며 솟구쳤지만 결국 제압하는 데 성공했어."
					}
				},
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "휴, 살아남았군. 하지만 가면 안쪽의 '피의 온도' 각인이 맘에 걸려."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "결합된 유리 파편 넘어, 고대 제단의 아지랑이가 붉게 피어오른다."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "방랑 상인의 가면을 쓴 자가 섬뜩한 웃음을 터뜨리며 유리 칼날을 쳐든다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "낄낄... 붉은 사막의 잔해 속에서 날 식히러 왔나? 어디 해봐라!"
					}
				},
				{
					"content": {
						"korean": "칼날을 식히기 위해 동제 물병의 주둥이를 유리 칼날에 대겠다!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석도다! 급냉한 유리는 결합하여 방어벽을 뚫고 솟구칠 뿐!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "유리 파편들이 결합하며 페로의 방어벽을 뚫고 있어!"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"오아시스가 말라붙은 자리에는 모래 대신 투명한 유리가 가득했다.",
			"잔해 수집가 페로는 붉게 달아오른 사막 한가운데서 무언가를 찾고 있었다.",
			"기괴하게 낄낄거리는 방랑 상인의 가면 소문, 그리고 식지 않는 유리 칼날.",
			"열기를 식히려는 시도가 도리어 날카로운 비극으로 변하려 하고 있었다."
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
