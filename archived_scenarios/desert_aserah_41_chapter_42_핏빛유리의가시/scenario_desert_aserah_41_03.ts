export const scenario_desert_aserah_41_03 = {
	"scenario_id": "desert_aserah_41_03",
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
			"투명하게 굳어버린 유리 폐허 위로 거친 바람이 분다.",
			"흩날리는 모래 속에서 보석 상인 앰버의 경고가 울려 퍼진다.",
			"붉은 오팔 거울에서 피어오르는 핏빛 연기는 사막을 묘지로 바꾸고 있다.",
			"도굴꾼들의 방해 속에서도, 정화라는 명목의 핏빛 환영은 계속된다."
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유리 조각들이 바닥에서 차갑게 부서지는 소리가 들린다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "바람 사이로 울리는 거친 목소리가 느껴져."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "거울에서 뿜어 나오는 핏빛 연기를 안 보고 뭐 하는 거야! 당장 물러서!"
					},
					"emotion": "angry",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 붉은 오팔 거울을 말하는 건가?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "피 묻은 거울이 온 사막을 차가운 오팔 묘지로 만들고 있단 말이야!"
					},
					"speaker": "ember",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…발밑의 유리가 자꾸 기분 나쁘게 삐걱거려."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르가 말한 대로 피를 닦아내면 붉은 모래 폭풍이 거힐 텐데."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르? 그 녀석 칼집에 박힌 성검 파편을 보고도 여전히 믿는 거야?"
					},
					"speaker": "ember",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "angry",
					"content": {
						"korean": "여기 늘어선 유리 조각상들 가슴을 똑똑히 봐!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "가슴마다 거울과 똑같은 붉은 흔적이 남아있어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 굳어버린 조각상에서 온기가 전혀 느껴지지 않아."
					},
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저들도 피를 바르다가 온몸이 오팔로 굳어버린 거라니까!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "그럴 리 없다. 난 칼날의 피를 계속 닦아내겠다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쯧, 핏빛 연기를 탐내는 도굴꾼들까지 몰려오고 있잖아! 더는 안 말려!"
					},
					"speaker": "ember",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "ember",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "폐허 도굴꾼들이 붉은 거울을 노리고 가로막는군."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…사막의 바람이 더 거칠고 매워지고 있어."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "방해자를 쓰러뜨리고 붉은 오팔 거울에 피를 닦아내겠다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "핏빛 환영에 얽매인 얼간이들이여! 폐허의 오팔 묘지에 묻혀라!"
					},
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 피를 전부 닦아내지 못했어. 다시 일어서야 한다."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "결국 붉은 연기에 눈이 가려진 채 스스로 굳어가겠구나…"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "도굴꾼을 물리쳤으니, 이제 붉은 오팔 거울에 피를 닦는다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "칼날의 피를 닦아내자 바닥의 뼈들이 서서히 차가운 유리로 응고되어 갔다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "폐허의 보석과 오팔 거울은 우리 차지다! 피 냄새 나는 거울을 넘겨라!"
					}
				},
				{
					"content": {
						"korean": "저리 비켜라. 거울의 피를 닦아 붉은 모래를 잠재워야 한다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 나그네 같으니! 피를 바를수록 굳어가는 건 바로 너희 몸이다!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
