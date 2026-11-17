export const scenario_desert_opalis_43_03 = {
	"scenario_id": "desert_opalis_43_03",
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유적 입구에 들어서자 삐걱이는 쇠소리와 함께 모래 냄새가 진동했다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ferro"
				},
				{
					"speaker": "ferro",
					"emotion": "base",
					"content": {
						"korean": "여기가 녹슨 태엽 유적이다. 오아시스 톱니 장치가 오랫동안 멈춰 있군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 장치를 다시 가동해야 성녀 오팔리스에게 갈 수 있는 건가?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "그래, 하지만 장치를 돌리려면 은빛 모래를 톱니 사이에 부어야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 톱니가 꼭 무언가를 씹어삼킨 것처럼 무시무시하네."
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"emotion": "base",
					"content": {
						"korean": "잠깐, 톱니 바닥에 혈석으로 쓰인 편지 조각이 떨어져 있군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "'딸을 위한 모래시계는 영원히 멈추지 않는다'… 붉은 구절이 새겨져 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"emotion": "sad",
					"content": {
						"korean": "…성녀의 모래시계가 가진 구조적 비밀과 관련이 있을지도 몰라."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 혈석으로 쓴 글씨가 마치 굳어버린 피 같아."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ferro",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이쪽 톱니바퀴 틈새를 봐라. 무언가 걸려 있어."
					},
					"speaker": "ferro",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "검객들의 마른 핏자국과 부서진 칼날 조각들이야. 누군가 톱니를 돌리려다 희생된 건가?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "모래를 부어 장치를 움직인 자들은 모두 무언가에 집어삼켜졌다."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "등골이 서늘해지는 기운이 유적 전체를 감싸고 있어."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이제 바로 앞이 중앙 톱니실이다. 은빛 모래를 부으면 장치가 가동될 거다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하지만 장치 근처에서 묘한 오팔빛 환각이 공기 중으로 피어오르고 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "유적을 지키는 대장장이가 막아서고 있군. 저 자를 넘어서야 해!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "환각 때문인지 어지럼증이 솟구친다."
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 톱니바퀴 앞, 정체 모를 자가 거대한 망치를 쥐고 막아서고 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "은빛 모래시계의 태엽 톱니에 모래를 부어라… 모래시계는 멈춰선 안 된다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우릴 어디로 이끌려는 건가! 길을 비켜라!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 망치가 유적의 톱니를 다시 움직일 것이다!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 거대한 그림자 너머로 은빛 모래가 톱니에 흘러들어갔다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "톱니가 작동하면서 공기 중에 몽환적인 오팔 환영이 피어오르고 있어!"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "장치는 작동했으나 피어오른 환각은 깊은 의구심만을 남겼다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "태엽은 멈추지 않는다… 모래를 바치지 않는 자는 망치 아래 부서질 뿐."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이대로 멈출 수는 없다. 유적의 톱니를 반드시 돌려야 해!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"멈춰선 거대한 톱니바퀴 위로 사막의 은빛 모래가 가라앉아 있었다.",
			"전설의 기술자 페로는 유적 깊은 곳의 장치가 오아시스의 맥박이라 했다.",
			"톱니를 돌리려면 생기를 담은 모래를 부어야만 한다.",
			"하지만 녹슬어버린 기계 틈새에서 은밀한 환각의 기운이 피어오르기 시작했다."
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
