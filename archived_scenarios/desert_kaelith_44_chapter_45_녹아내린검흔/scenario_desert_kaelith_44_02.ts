export const scenario_desert_kaelith_44_02 = {
	"scenario_id": "desert_kaelith_44_02",
	"order": 2,
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "골짜기 절벽 벽면이 백열빛으로 달아올라 있다."
					}
				},
				{
					"content": {
						"korean": "벽면 곳곳에 거대한 검흔이 파여 열기를 뿜어내고 있어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…숨을 쉬기 힘들 정도로 뜨겁다."
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ember",
					"spot": [
						3,
						4
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "ember",
					"content": {
						"korean": "벽에 남은 이글거리는 검흔이 골짜기 전체를 태우려 해요!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "액체를 흘리면 안 돼. 동제 물병으로 열기를 막을 방법을 찾아야 해."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동제 물병을 달아오른 검흔 근처에 가져다 댔다."
					}
				},
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "물병의 순동이 고열에 녹아 절벽 모래와 단단히 붙어버렸어요!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "…손끝이 타들어 갈 것 같아."
					}
				},
				{
					"content": {
						"korean": "액체를 쓰지 않고 모래를 물병에 채워 열기를 눌러 막겠어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모래를 가득 채운 물병으로 검흔의 열기를 압착해 차단했습니다!"
					}
				},
				{
					"content": {
						"korean": "솟구치던 화열이 잠시 억제된 것 같아."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 가둬진 열기로 인해 물병 내부의 압력이 급격히 올라간다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "동제 물병 표면이 불길하게 떨리기 시작했어."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "내부 압력을 견디지 못한 동제 물병이 굉음과 함께 쇄살한다."
					}
				},
				{
					"content": {
						"korean": "모래로 밀폐한 물병이 유리를 부수며 터져 버렸어!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "날카로운 유리 파편이 붉은 골짜기 전체로 튀어 오르고 있어요!"
					}
				},
				{
					"content": {
						"korean": "파편 폭풍을 뚫고 열기의 원인을 제거하러 가자!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "초고열의 파편이 온몸을 사정없이 찌르고 지나간다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "붉은 열기 속에서 태워져 모래가 되어라."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 잿더미가 될 수는 없어. 다시 서야 해!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "검흔을 뿜어내던 열기가 서서히 꺾여 나간다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 결합이 무너지며 검흔의 화염이 꺼져간다."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이글거리던 검흔이 차갑게 식었어."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "비산하던 유리 파편이 바닥으로 떨어지며 골짜기에 침묵이 흐른다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이글거리는 검흔의 열기가 골짜기 안쪽 중심부에 모여 있다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "붉은 화염 아지랑이 속에서 거대한 그림자가 앞을 막아섰다."
					}
				},
				{
					"content": {
						"korean": "열기를 억지로 가둔 자여, 유리의 파편 속에 묻혀라."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 열기 폭주를 좌시하지 않겠다!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"붉은 균열 골짜기, 거대한 절벽에 이글거리는 검흔이 새겨져 있었다.",
			"1화에서 액체를 흘렸다가 겪은 재앙은 아직도 선명하다.",
			"연구원 앰버와 만난 탐험대는 열기를 차단할 새로운 방법을 시도한다.",
			"하지만 모래로 가둔 열기는 더 거대한 파열을 준비하고 있었다."
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
