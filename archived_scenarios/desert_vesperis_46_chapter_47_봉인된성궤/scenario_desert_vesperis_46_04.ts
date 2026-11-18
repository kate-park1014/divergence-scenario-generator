export const scenario_desert_vesperis_46_04 = {
	"scenario_id": "desert_vesperis_46_04",
	"order": 4,
	"random_boss_title": {
		"korean": "문지기"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"중앙 사원으로 향하는 길, 통곡의 회랑.",
			"서늘한 바람 사이로 굳어버린 칼날 소리가 메아리친다.",
			"이곳을 지키는 문지기와 성궤에 얽힌 전설이 탐험대를 기다린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "통로 벽면에 굳어진 검들이 빽빽하게 박혀 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction"
				},
				{
					"content": {
						"korean": "난 전설을 찾아 사막을 헤매는 용병 아미르다. 너희도 중앙 사원으로 향하는 길이냐?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사원의 닫힌 문을 열려면 이 회랑을 지나야만 한다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…벽에 박힌 검들이 꼭 울고 있는 것 같아."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 사원의 수도승에겐 오래된 전설이 있어. 과거 전쟁터를 누비던 최강의 검객이었다더군."
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "최강의 검객이 왜 사원의 수도승이 되었단 말인가?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝없는 싸움에 절망해 스스로 사원에 들어갔다지. 무적의 힘을 준다는 성궤도 그자의 물건이고."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…천장에서 모래가 조금씩 떨어진다."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "저 앞이 중앙 사원 입구다. 성궤를 지키는 자들이 무기를 빼앗으려 할 테니 조심해라."
					}
				},
				{
					"content": {
						"korean": "고맙다. 더 지체하지 않고 전진하겠다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "amir",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 점점 차가워져."
					},
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "통로 한가운데 검자루가 단단히 굳어버린 묵주가 떨어져 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "수많은 무기들이 사원 깊숙한 곳을 향해 굳어가고 있다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…발소리가 크게 울리네."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "무기를 바치지 않는다면… 그분이 세상의 모든 칼날을 앗아갈 뿐이다…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그 검객은 사원에 갇혀 세상의 모든 무기를 삼키려 하고 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그분의 통곡이… 이 사원을 삼킬 것이다…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…손끝의 떨림이 멈추질 않아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "쓰러진 문지기를 뒤로하고, 탐험대는 성궤의 제단이 있는 중앙 사원으로 발걸음을 옮긴다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "회랑의 출구를 가로막으며 문지기가 무기를 다잡는다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "성궤를 보호하기 위해 너희의 무기를 내놓아라. 검을 쥔 자는 지날 수 없다."
					}
				},
				{
					"content": {
						"korean": "사원을 탈출하기 전까진 무기를 내려놓을 수 없다. 길을 비켜라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…지독한 살기야."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무기를 내놓지 않는 자, 회랑의 돌이 될 뿐이다."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이대로 끝낼 수는 없다. 다시 도전하자."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
