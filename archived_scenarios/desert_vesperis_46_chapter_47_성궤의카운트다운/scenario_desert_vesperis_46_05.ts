export const scenario_desert_vesperis_46_05 = {
	"scenario_id": "desert_vesperis_46_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_GoldenReliquary_Vesperis_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "제단 중앙방. 거대한 황금 성궤에서 붉은 모래 폭풍과 칼날 파편이 뿜어져 나온다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "성궤의 뚜껑이 열렸어! 보물이 아니라 칼날 폭풍이라니…!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래시계의 카운트다운이 거의 끝을 향해 가고 있어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…칼바람이 살점을 찢을 것처럼 매섭다."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내가 탐욕 때문에 너희를 여기까지 끌어들였어… 제발 이 재앙을 막아줘!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "받침대 아래 떨어진 껍데기처럼 모래시계를 부수어 모래를 바닥에 쏟아야 해."
					}
				},
				{
					"content": {
						"korean": "맞아! 모래가 완전히 쏟아져 내리면 시한 주술이 파괴될 거야!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…숨이 턱 막히는 핏빛 열기다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…검을 든 자여. 네가 바라는 무적의 기적은 이 궤 안에 없다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "성궤 속에서 비통한 목소리가 들려와…!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벽에 새겨진 백 명의 검사들은 은혜를 탐내며 사원을 습격했던 살인귀들이었어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "성궤의 수도승은 학살자가 아니라 스스로 갇힌 피해자였구나."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…소름이 돋을 만큼 서글픈 울림이다."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "카운트다운이 0이 되면 성궤의 모래 폭풍이 사원 전체를 삼켜버릴 거야!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지금 바로 제단 위의 녹슨 모래시계를 부수어 모래를 쏟아낸다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 검 파편을 유인할 테니, 제발 시계를 부수어줘!"
					},
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이 칼날 폭풍을 여기서 끝내야 한다."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국 너 또한 피의 굴레를 넘어서지 못했구나…"
					}
				},
				{
					"content": {
						"korean": "카운트다운이 0에 도달하며 붉은 모래 폭풍이 온 사원을 삼켰다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 모래시계를 부수지 못했어… 다시 일어나야 해!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "피의 굴레를 끊지 못한 내 사암 입술이 명하노니, 너희의 칼 또한 영원히 잠들지어다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신의 비극도, 이 미쳐버린 칼날 폭풍도 여기서 봉인하겠다!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"content": {
						"korean": "모래시계를 부수어 주술을 파괴해라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "amir"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "녹슨 모래시계가 산산조각 나며 붉은 모래가 바닥으로 완전히 쏟아졌다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…드디어 피의 카운트다운이 멈추는구나. 고맙다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "성궤의 뚜껑이 닫히고, 소용돌이치던 수천 자루의 검 파편이 궤 안으로 모두 흡수되었다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "성궤의 봉인이 완결되었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "우리가… 살아남았어! 사원이 마침내 침묵을 되찾았다고!"
					},
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"황금 성궤가 마침내 사원 제단 중앙방에서 모습을 드러냈다.",
			"제단 위에 얹힌 녹슨 모래시계의 모래는 거의 다 떨어져 가고 있었다.",
			"폭풍처럼 뿜어져 나오는 붉은 모래와 수천 자루의 검 파편.",
			"피의 굴레를 끊고 성궤를 봉인할 마지막 순간이 다가왔다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"epilogue": {
		"korean": [
			"부서진 모래시계의 붉은 모래가 사원 바닥으로 완전히 흩어졌다.",
			"수천 자루의 검 파편과 붉은 모래 폭풍이 성궤 속으로 뿜어져 들어가며 뚜껑이 쾅 닫혔다.",
			"사원에는 수백 년 만에 차가운 침묵이 감돌기 시작했다.",
			"아미르는 눈물을 훔치며 사원을 올려다보았다. 탐욕이 씻겨 내려간 사막 위로 조정한 바람이 불었다."
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
