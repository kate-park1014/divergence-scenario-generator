export const scenario_hell_philomel_39_01 = {
	"scenario_id": "hell_philomel_39_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 사냥꾼"
	},
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "절벽을 오르자 뜨거운 바위에 기이한 형광 빛깔 눈물 자국이 남아 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"type": "direction"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "안녕하세요! 저는 지옥불 위험을 연구하는 연구원 애쉬예요. 절벽의 이상 열기를 조사하러 왔어요."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "발밑 바위가 화상을 입을 정도로 달아올라 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숨 쉴 때마다 목이 타는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "절벽 바위에 꽂힌 갑옷에서 차가운 서리 부적을 발견했다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "갑옷에 붙어 있던 서리 봉인을 실수로 떼어내 버렸다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안 돼요! 그 서리 봉인이 지옥불의 폭주를 누르고 있었단 말이에요!"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…바위 틈에서 불길이 터져 나오고 있어!"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "봉인이 풀리자 지옥의 불길이 폭발하듯 솟구쳐 오른다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "이대로면 지옥불이 마법 대륙 입구까지 터져 나올 거예요!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리가 건드렸으니 우리가 불길을 멈출 방법을 찾아야 한다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…공기가 불덩이처럼 뜨거워지고 있어."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "치솟는 불길 너머에서 거친 발소리와 포효가 들려온다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "지옥의 생태가 무너지자 사냥꾼이 격분해 쫓아오고 있다."
					}
				},
				{
					"content": {
						"korean": "…등 뒤로 뜨거운 압박감이 밀려와."
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
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
						"korean": "붉은 불길 속에서 지옥 사냥꾼이 무기를 거머쥐고 막아선다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 서리 봉인을 건드려 지옥의 생태를 망쳐 놓다니!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "실수였다! 터져 나오는 지옥불을 막기 위해 널 넘어가겠다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…바람조차 붉게 태우고 있어."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "쿨럭… 불길은 이미 붉은 바위 골짜기 쪽으로 번지고 있다…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "붉은 바위 골짜기로 가서 지옥불의 확산을 막아야 한다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "읏… 지옥 생태를 파괴한 대가를 치르게 될 것이다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사냥꾼이 물러나자, 불길이 붉은 바위 골짜기 방면으로 거세게 번져나갔다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "지옥의 섭리를 어긴 자들에게 줄 자비는 없다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…지옥불을 이대로 방치할 순 없다. 다시 부딪치자!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마법 대륙 입구, 열기 충만한 지옥 입구 절벽.",
			"오래된 서리 봉인이 지하 깊은 곳의 지옥불을 겨우 누르고 있다.",
			"작은 실수 하나가 대륙 전체를 잿더미로 만들 수 있다."
		]
	}
} as const;
