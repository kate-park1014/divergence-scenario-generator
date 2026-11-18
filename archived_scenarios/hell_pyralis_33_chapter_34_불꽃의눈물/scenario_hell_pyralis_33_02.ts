export const scenario_hell_pyralis_33_02 = {
	"scenario_id": "hell_pyralis_33_02",
	"order": 2,
	"random_boss_title": {
		"korean": "용암 정제사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"용암 호수의 뜨거운 열기가 동료들의 마력을 빠르게 갉아먹고 있다.",
			"마력이 모두 다하기 전에 붉은 절벽의 탈출구를 찾아야 한다.",
			"타오르는 바위지대 속에서 짐승의 흔적을 추적하기 시작한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "끓어오르는 용암 호수 위로 좁은 바위길이 길게 뻗어 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "처음 보는 얼굴들이군. 난 짐승의 행적 추적을 돕는 조력자 애쉬다."
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "동료들의 마력이 다하기 전에 지옥을 나갈 탈출구를 찾아야 한다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…숨을 쉬기 힘들 정도로 뜨거워."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "갈라진 바위 틈 사이로 기이한 빛이 새어 나온다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "바위 틈을 봐라. 에메랄드빛 불꽃 재가 남아 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 에메랄드빛 재를 추적하면 짐승의 행적을 찾을 수 있겠군."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…재에서 기묘한 열기가 느껴져."
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "에메랄드빛 재의 흔적이 용암 호수 안쪽 절벽으로 이어지고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "흔적을 놓치지 말고 바위지대 깊숙한 곳으로 이동하자."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…발밑 바위가 언제 무너질지 몰라 위험해."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "용암 호수 깊은 곳에서 쇳소리와 육중한 기척이 다가온다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "앞쪽 길목을 거친 기척이 가로막고 있는 것이 느껴진다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…마력이 점점 한계에 다다르고 있어."
					},
					"emotion": "sad"
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
						"korean": "마력이 다해가는 처지에 감히 나에게 덤비다니 헛수고다!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이대로 쓰러질 수 없다. 다시 도전하겠다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "용암 호수의 바위 위, 용암 정제사가 탐험대의 길을 막아선다."
					}
				},
				{
					"content": {
						"korean": "사나운 짐승을 퇴치해 주면 탈출할 수 있는 무기를 주겠다."
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거짓말이다! 우리를 속이고 공격하려는 의도가 보인다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…처음부터 무기를 줄 생각 따윈 없었군."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 그 사나운 짐승은 지옥 밖에서 끌려온 누군가를 찾아 절벽을 헤매기 시작한 것뿐이다…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥 밖에서 끌려온 사람을 찾고 있다는 말인가?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "검은 재의 골짜기로 가면 녀석이 남긴 흔적을 더 찾을 수 있을 거다…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "다음 단서는 검은 재의 골짜기에 있군. 서둘러 이동하자."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 정제사가 남긴 단서를 가지고 검은 재의 골짜기를 향해 발걸음을 옮겼다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
