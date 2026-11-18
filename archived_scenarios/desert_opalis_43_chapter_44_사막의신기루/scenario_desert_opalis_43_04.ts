export const scenario_desert_opalis_43_04 = {
	"scenario_id": "desert_opalis_43_04",
	"order": 4,
	"random_boss_title": {
		"korean": "유적 파수꾼"
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
			"아슈르의 숨소리가 점점 희미해져 간다.",
			"그의 몸이 모래로 완전히 바뀌기 전에 생기 구슬을 깨뜨려야 한다.",
			"주인공 일행은 성녀 오팔리스가 잠든 신전으로 통하는 고대 붉은 사원으로 발걸음을 촉박하게 옮긴다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "붉은 기둥이 솟아 있는 고대 사원 입구에 다다랐다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kasai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"content": {
						"korean": "반갑습니다. 저는 이 붉은 사원의 기원을 연구하는 학자 카사이입니다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "동료의 생기를 되찾으려면 사원 안쪽의 신전으로 가야 한다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "신전으로 통하는 거대한 붉은 문은 제단의 장치를 풀어야만 열립니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kasai"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…벽면에 새겨진 문양이 핏빛처럼 섬뜩하네."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "제가 숨겨진 장치를 가동하여 문을 열어두겠습니다. 들어오시지요."
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대 문자가 가득 새겨진 사원 복도로 진입한다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "오팔리스는 대체 무슨 이유로 수많은 나그네의 생기를 빼앗는 거지?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사원 벽화의 기록에 따르면, 오팔리스는 백 년 전 죽은 주인을 살리기 위해 생기를 끌어모으고 있습니다."
					},
					"emotion": "base",
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…주인을 살리려고 타인의 생명을 빼앗고 있었다니."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 죽은 자를 되살리는 것은 인형의 힘으로도 불가능한 일이지요."
					},
					"type": "speech",
					"speaker": "kasai"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 앞의 문을 지나면 신전입니다. 무력이 없는 저는 여기까지밖에 동행할 수 없군요."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "고맙다, 카사이. 이제부터는 우리가 직접 들어가겠다."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…문 너머에서 서늘한 기운이 불어오고 있어."
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
						"korean": "신전 입구 바닥에 날카로운 파편들이 어지럽게 흩어져 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "바닥에 금이 간 유리 조각이 떨어져 있군. 챙겨두자."
					}
				},
				{
					"content": {
						"korean": "…유리창에 비친 내 안색도 무척 어두워 보여."
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 오팔리스가 있는 곳까지 얼마 남지 않았다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "주인님의 부활을 막을 자는 아무도 없다. 돌아가라."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아슈르의 숨이 다하기 전에 반드시 다시 꺾어주마."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "붉은 신전 중앙 제단 앞에서 무장한 {random_boss}가 차갑게 돌아선다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "성녀님의 생기 수집을 방해하려 들다니, 더는 나아가지 못한다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아슈르를 살리기 위해서라도 여기서 멈출 수 없다. 길을 비켜라!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…절대로 물러설 기세가 아니야."
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "오팔리스 님의 뜻을… 막을 수 없다니…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빼앗긴 생기는 모두 원래 주인의 품으로 돌아가야 한다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "{random_boss}가 쓰러지자, 신전 가장 깊은 곳으로 통하는 거대한 문이 열렸다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마지막 오아시스로 향해 오팔리스를 만나자."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
