export const scenario_desert_aserah_41_04 = {
	"scenario_id": "desert_aserah_41_04",
	"order": 4,
	"random_boss_title": {
		"korean": "주술사"
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
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이끼와 모래로 뒤덮인 유적 입구에 기이한 주술 기운이 맴돈다."
					}
				},
				{
					"content": {
						"korean": "…입구부터 공기가 스산하네."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "base",
					"content": {
						"korean": "여기가 내가 말한 버려진 유적 신전이야. 내부 깊은 곳에 오래된 벽화가 있어."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저주를 풀 단서가 정말 저 안에 있을까?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ember",
					"content": {
						"korean": "어쩌면 여신이 남긴 저주의 진짜 이유를 찾을 수 있을지도 몰라."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "신전 화랑에 들어서자 서늘한 주술의 기운이 온몸을 감싼다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "방심하지 마. 신전을 수호하는 주술사가 침입자를 노리고 있어."
					},
					"speaker": "ember",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바람 소리 속에 조용한 읊조림이 섞여 들려…"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "단서를 찾기도 전에 주술사의 공격부터 막아내야겠어."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적 복도 기둥마다 불길한 붉은 주술 표식이 켜진다."
					}
				},
				{
					"speaker": "ember",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 표식들은 신전 깊은 곳에 잠든 분노를 봉인하고 있던 거야."
					},
					"speaker": "ember",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "손끝에 감도는 기운이 섬뜩하군."
					}
				},
				{
					"content": {
						"korean": "봉인이 깨지는 한이 있더라도 우리는 앞으로 가야 해."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "신전 중정에 다다르자 거대한 벽화의 일부분이 모습을 드러낸다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "벽화 구석에 희미하게 새겨진 여덟 자루 유리의 흔적이 보여."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 깊은 흠집들은… 마치 칼로 난도질한 것 같아."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳으로 가면 이 유리의 흔적이 의미하는 바를 알 수 있을 거야."
					},
					"speaker": "ember",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들아, 여신의 분노에 삼켜지기 전에 돌아서라!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 물러설 순 없어. 다시 전열을 가다듬자!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "주술사가 쓰러지자 신전 안쪽의 중앙 벽화가 완전히 드러난다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "벽화에 새겨진 여덟 자루 유리의 흔적… 여신 아세라가 복수심으로 검객들을 보석 조각상에 가두어온 거였어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "ember",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "결국 아세라의 분노가 모든 저주의 시작이었던 거구나…"
					},
					"type": "speech",
					"speaker": "ember",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숨겨진 진실을 마주한 탐험대는 여신의 신전으로 발걸음을 옮긴다."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "신전 중심부, 기이한 주술이 휘몰아치며 주술사가 길을 막아선다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "신전에 잠든 분노를 깨우지 마라! 그 저주는 결코 건드려선 안 될 진실이다!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…공기가 무겁게 눌러앉는다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 확인하기 위해 이 주술사를 물리치자!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"앰버가 가리킨 곳은 모래에 묻힌 버려진 유적 신전이었다.",
			"동료 아미르를 돌려놓을 단서는 오래전 잊힌 벽화 속에 숨겨져 있다고 한다.",
			"하지만 신전을 지키는 음산한 주술의 그림자가 깊은 잠에서 깨어난다.",
			"친구를 구하기 위해, 묻혀 있던 분노의 진실과 마주해야 한다."
		]
	}
} as const;
