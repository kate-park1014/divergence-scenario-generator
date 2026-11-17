export const scenario_hell_amnion_38_03 = {
	"scenario_id": "hell_amnion_38_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"남은 시간은 단 4분.",
			"지옥 신전 깊은 곳, 유황 압력을 억제하는 제단에 다다랐다.",
			"은빛 메스를 쥔 손에 붉은 유황 열기가 스며든다.",
			"봉인을 해제하는 순간, 낭종의 기괴한 침묵이 깨지려 한다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "신전 내부 전광판에 '04:00' 숫자가 붉게 박혀 있다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "남은 시간 4분... 유황 제단을 처리해야 해."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…뼛속까지 태울 것 같은 열기야."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "멈춰! 그 제단 건드리면 안 돼!"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 비켜라. 메스로 제단을 끊어내야 폭발을 막는다."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "제단 벽면에 지옥 신전의 도면판이 각인되어 있다."
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "제단 밑을 봐! 오팔 고치 바로 아래에 유황 파이프가 흐르고 있잖아!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…파이프 속에서 기괴한 울림이 느껴져."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "고치와 연결되어 있든 뭐든, 시한 장치를 끄는 게 우선이다."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "전광판의 숫자가 줄어들자 바닥이 크게 흔들린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제발 내 말 들어! 봉인이 풀리면 생체 쓰레기가 터져 나온다고!"
					},
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전광판 숫자가 줄어들수록 낭종 표면에서 포자가 폭증하고 있어."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…구역질 나는 단내가 풍겨오기 시작해."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "카운트다운 숫자가 붉게 일렁이며 마지막을 고한다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "안 돼, 보석을 부수지 마!"
					},
					"speaker": "mara",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "은빛 메스로 억제 제단 보석을 조각낸다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "보석이 깨지자 유황 봉인이 해제되며 환기구에서 포자가 쏟아진다."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "유황 열기에 잿더미가 되어 스러져라."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…여기서 멈출 순 없어. 다시 전진한다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "봉인은 풀렸다... 단내 나는 생체가 이 신전을 삼킬 것이다..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "억제는 해제됐다. 환기구에서 짙은 단내 포자가 온 방을 채우고 있어."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환기구 너머에서 기괴한 낭종의 소음이 점차 커져간다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "제단의 억제를 풀다니, 스스로 재앙을 부르는구나."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}를 쓰러뜨리고 길을 연다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…소름 끼치는 압박감이다."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
