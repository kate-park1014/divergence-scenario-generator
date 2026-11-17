export const scenario_desert_vesperis_46_03 = {
	"scenario_id": "desert_vesperis_46_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사원 중앙 예배당에는 짙은 먼지와 마른 피의 흔적이 가득했다.",
			"용병 앰버가 찾아낸 오래된 일지는 충격적인 사실을 담고 있었다.",
			"칼날을 들고 사원에 들어선 방문자들은 피해자가 아닌 가해자였다.",
			"멈추지 않는 카운트다운 속에서 진실의 쇳소리가 붉게 울려 퍼진다."
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "base",
					"content": {
						"korean": "중앙 예배당 틈새에서 낡은 일지를 발굴했어."
					}
				},
				{
					"content": {
						"korean": "일지 속 기록대로라면 사원에 온 검사들이 살인귀였어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…믿기지 않는 군."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "피를 흘린 건 사원의 수호자들이었단 뜻이군."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "중앙 제단 밑에 무언가 떨어져 있어."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ember",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "받침대 아래쪽에 깨진 모래시계 껍데기 조각이 떨어져 있군."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "불길하네…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "녹슨 모래시계를 제단 금속 받침대에 끼워 맞춰야 해."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "서둘러, 모래시계가 흔들리고 있어."
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "random_boss",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "모래시계를 받침대에 고정하지 마라! 카운트다운이 걷잡을 수 없이 빨라진다!"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…소름 돋네."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "경고를 무시하고 모래시계를 받침대에 고정하겠어."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "direction",
					"duration_ms": 300,
					"action": "shake"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카운트다운 숫자가 붉은빛을 뿜으며 급격하게 떨어지기 시작했다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단 너머 성궤에서 금빛 먼지가 뿜어져 나오고 있어."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "공기가 서늘해진다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "떠오른 금빛 먼지가 공 중에서 날카로운 칼날 모양으로 굳어지네."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"emotion": "angry",
					"content": {
						"korean": "칼날들이 우리를 향해 방어 태세를 취하고 있어!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "금기를 어긴 대가다! 성궤의 칼날 먼지가 너희를 베어버릴 것이다!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 가리기 위한 위협일 뿐이야. 끝까지 진행한다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성궤를 가로막던 수호 기운이 사그라들었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너희가 찾은 기록이 정말 진실이라고 생각하는가…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래시계의 카운트다운은 여전히 0을 향해 달리고 있어."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "굳어진 금빛 먼지 사이로 뒤바뀐 역사의 흔적이 아른거렸다."
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "금빛 칼날에 가로막혀 제단을 넘어설 수 없었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 방문자여, 성궤의 분노를 견딜 수는 없다."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어나야 해. 진실을 밝혀내겠어."
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
