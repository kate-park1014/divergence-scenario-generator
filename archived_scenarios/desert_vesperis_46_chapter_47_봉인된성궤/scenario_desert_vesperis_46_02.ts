export const scenario_desert_vesperis_46_02 = {
	"scenario_id": "desert_vesperis_46_02",
	"order": 2,
	"random_boss_title": {
		"korean": "사냥꾼"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"탈출구를 찾아 도달한 곳은 물이 마른 오아시스였다.",
			"붉은 사암 계곡 사이로 기묘한 정적이 감돈다.",
			"사원에 갇힌 탐험대는 성궤에 얽힌 소문과 마주한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "말라버린 오아시스에 붉은 모래바람이 불어온다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 이 오아시스의 정보상 카사이라고 해. 탈출구를 찾으러 왔나?"
					},
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사원의 닫힌 입구를 열 방법을 찾고 있다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…목이 타들어가는 것 같아."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오아시스 입구에 검 문양이 새겨진 사암이 서 있다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "사원의 수도승은 은혜를 베풀기 전에 방문자의 모든 무기를 바치게 만든다더군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무기를 바쳐야만 성궤의 가호를 받을 수 있다는 건가."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…뭔가 수상한 조건이네."
					},
					"emotion": "sad",
					"speaker": "character_2",
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
					"type": "direction",
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "성궤는 무적의 힘을 준다지만, 무기를 바친 자들이 돌아왔다는 소문은 없어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "성궤가 단순히 은혜를 내리는 성물이 아닐 수도 있겠어."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"speaker": "kasai",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…조심해서 나쁠 건 없지."
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
					"emotion": "base",
					"content": {
						"korean": "사암 계곡 틈에서 서늘한 쇠붙이 마찰음이 울려 퍼진다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 우리의 무기를 노리고 다가오고 있다."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…살기가 느껴져."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 사암 위에서 무기를 든 사냥꾼이 길을 막아선다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "성궤의 가호를 받으려면 무기를 내놓아야 한다. 순순히 바쳐라!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리의 무기는 탈출을 위해 필요하다. 바칠 수 없다!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…절대 순순히 넘겨줄 순 없어."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "무기를 바치지 않는 자에게 성궤의 구원은 없다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "가호를 주는 성물이 진짜 무적의 힘을 내리는 건 맞는지 의심스럽군."
					}
				},
				{
					"content": {
						"korean": "…이 사원, 무언가 숨기고 있어."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 오아시스를 뒤로하고 비문이 새겨진 잿빛 유적 광장으로 향한다."
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "무기를 빼앗기고 여기서 굶어 죽어라."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 무기를 빼앗길 순 없다. 다시 싸운다."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
