export const scenario_desert_kaelith_44_03 = {
	"scenario_id": "desert_kaelith_44_03",
	"order": 3,
	"random_boss_title": {
		"korean": "사막 포수"
	},
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거센 바람 속에서도 뼛속까지 태울 듯한 모래 열기가 골짜기를 채우고 있다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오아시스에서 오렌지빛 칼날을 발견한 뒤로 열기가 점점 강해지고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…뜨거운 바람 때문에 눈을 뜰 수가 없네."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 앞 바위 그늘에서 누군가 절구질을 하고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"direction": "up",
					"speaker": "ember",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저는 골짜기 약초꾼 앰버예요. 열기에 말라가는 약초를 다듬던 중이었죠."
					},
					"type": "speech",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 골짜기 전체를 태우는 열기의 원인을 아십니까?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "sad",
					"content": {
						"korean": "상인 카엘리스가 검을 휘두른 자리는 전부 유리가 되어버렸어요."
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "열기를 머금은 유리 장신구는 차가운 깊은 모래에 묻어 식혀야 열기가 꺼집니다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "유리 장신구를 차가운 모래에 묻는다… 중요한 해법을 알았군."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "골짜기 바닥 모래틈 사이로 검게 굳어가는 덩어리가 흩어져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바닥에 식어가는 검은 슬래그가 떨어져 있네."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 툭 끊겼어."
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
					"content": {
						"korean": "협곡 바위 뒤에서 무기를 고쳐 쥐는 거친 기척이 느껴진다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "상인을 지키는 사막 포수가 길을 막아서려 하는군."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…숨소리가 바로 앞까지 다가왔어."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그분의 완성을 막을 수는 없을 것이다…!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "up"
				},
				{
					"content": {
						"korean": "포수가 쓰러진 자리에 식어가는 검은 슬래그만 덩그러니 남아 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "가장 강한 열기가 시작되는 태양의 유적으로 이동하자."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "골짜기 바람에 흩어지는 모래알이 되어라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…숨을 가다듬고 다시 정면으로 돌파한다."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "상인 님의 길을 방해하게 둘 순 없다! 당장 물러서라!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "열기를 멈추고 탈출로를 열기 전엔 나갈 수 없다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…망설임 없이 덤벼들고 있어."
					},
					"speaker": "character_4",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"바람마저 이글거리는 골짜기, 열기는 더 거세게 불어온다.",
			"오아시스에서 얻은 칼날의 흔적을 쫓아 붉은 협곡으로 들어선다.",
			"이곳에 열기를 잠재울 단서가 기다리고 있다."
		]
	}
} as const;
