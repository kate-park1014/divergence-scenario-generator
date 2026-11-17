export const scenario_desert_scoop_40_04 = {
	"scenario_id": "desert_scoop_40_04",
	"order": 4,
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
			"바람조차 메마른 골짜기에 기괴한 칼자국이 깊게 파여 있다.",
			"사막을 빠져나갈 다른 길을 찾기 위해 발걸음을 옮긴 메마른 바람 골짜기.",
			"전설의 검객과 무시무시한 마검, 그리고 얼음의 소문이 서서히 실체를 드러낸다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "메마른 바람 골짜기. 거친 모래바람 너머로 길이 험하게 꺾여 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이쪽 골짜기를 거치면 사막을 빠져나갈 수 있을까?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ember",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "조심해서 나쁠 건 없어. 이 근방에는 등골 서늘한 소문이 돌고 있거든."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바람 소리가 꼭 울부짖는 소리처럼 들리네…"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전설의 검객이 허리에 무시무시한 마검을 차고 나타났다는 소문이야."
					},
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "마검을 든 전설의 검객이라니."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "기막힌 건 그 무시무시한 검으로 빙수를 만들어 나눠주고 있다는 거라니까!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전설의 마검으로 빙수를 만든다고…?"
					},
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ember",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "비웃을 일이 아니야. 그 검객이 거쳐 간 자리마다 끔찍한 일들이 벌어졌거든."
					},
					"speaker": "ember",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사막을 빠져나가는 길목을 막아버린 커다란 바위도 그자의 소행일지 몰라."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "base",
					"content": {
						"korean": "골짜기 안쪽으로 더 들어가 보면 확실한 단서를 찾을 수 있을 거야."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "오한이 뼛속까지 스며드는 기분이야."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 모래 바위가 날카로운 칼날에 단번에 잘려 나가 널브러져 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "단 한 번의 베기로 이 단단한 바위를 잘라내다니."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ember",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "angry",
					"content": {
						"korean": "이 정도로 가공할 절단력을 가진 건 소문 속 전설의 마검뿐이야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…등골이 오싹할 정도의 검술이군."
					},
					"emotion": "base",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 나그네들이여, 무모한 전진은 여기까지다!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이대로 멈출 순 없어… 길을 열어야 해!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 경고했거늘… 그 마검을 쥔 자를 직접 마주하면 후회하게 될 거다…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 단칼에 잘린 바위와 가공할 무력… 길을 막아선 것은 마검을 든 전설의 검객이 틀림없어."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "진실을 확인하기 위해, 탐험대는 마검의 흔적을 따라 발걸음을 촉구한다."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "골짜기 길목에서 짙은 주술의 기운과 함께 모래 바람이 일렁인다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 지나갈 수 없다! 그 무시무시한 검객에게 다가가면 무사하지 못할 것이다!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "길을 막아선 자의 정체를 확인해야만 해. 물러서지 않는다!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
