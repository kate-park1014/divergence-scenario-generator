export const scenario_modern_whisperweb_0_FCE_02 = {
	"scenario_id": "modern_whisperweb_0_FCE_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"닥스의 지하 작업실에 침입해야 했다.",
			"위스퍼 웹의 실체를 파악하려면 그에게서 데이터를 빼내야 했다.",
			"불법 데이터 복원 전문가 닥스는 쉽게 순순히 응하지 않았다.",
			"모든 정보가 도시의 생명선이었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "닥스의 지하 작업실은 환풍기 소리로 가득했다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스. 위스퍼 웹 정보를 가진 자."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "넌 누구야? 내 작업실에 왜 들어왔지?"
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹 관련 데이터를 넘겨."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "불법 데이터는 취급 안 해. 당장 나가."
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "강제로라도 가져간다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "멈춰! 내 장치에 뭘 하는 거야?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹 정보를 찾는 중이다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그거 억지로 열면 안에 든 개인 기록이 같이 새. 수백 건이 넘는 고객 정보가."
					},
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상관없어. 넌 방해하지 마."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "안 돼!"
					},
					"emotion": "angry",
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
						"korean": "낡은 데이터 칩에서 재생 불가능한 오류 메시지와 함께 단편적인 음성 기록이 흘러나왔다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "장치가 과부하될 거야! 멈추라고!"
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "더 빠른 접근이 필요해."
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "수백 명의 개인 금융 정보가 유출될 거라고!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어쩔 수 없어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "복원 장치가 폭발했다. 데이터 파편들이 사방으로 튀었다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳의 골목 벽면에서 특정 패턴의 낙서가 눈에 띄었다. 전자기기에서도 같은 문양이 발견됐다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "망했어. 내 고객 정보가 위스퍼 웹으로 다 흘러갔어."
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "수백 건의 개인 금융 정보가 유출됐다는 거지?"
					}
				},
				{
					"content": {
						"korean": "그래. 내 잘못이야. 난 끝났어."
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어쩔 수 없는 선택이었다. 위스퍼 웹을 잡기 위한 희생이다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "희생? 그게 변명이라고 생각하나?"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우 날 막았다고? 네가 퍼뜨린 정보는 이미 사람들을 흔들고 있다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기자 린이 벌써 가짜 뉴스를 만들고 있을 거야."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "린? 가짜 뉴스?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정보는 이미 걷잡을 수 없이 퍼지고 있었다. 다음 목표는 기자 린이었다."
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "서버실 깊숙한 곳, 정체 모를 자가 서버 앞에 서 있었다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 닥스의 정보를 가져간 자인가."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 위스퍼 웹의 배후인가."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 정보를 흐르게 할 뿐. 오늘 네가 퍼뜨린 정보는 훌륭했다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "혼란을 멈춰야 해."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "네가 일으킨 혼란을 봐라. 이게 네 정의인가?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 멈출 수 없어. 린을 찾아서 가짜 뉴스를 막아야 해."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "흥미롭군. 계속 발버둥쳐라."
					}
				}
			]
		}
	]
} as const;
