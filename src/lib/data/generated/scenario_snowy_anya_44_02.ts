export const scenario_snowy_anya_44_02 = {
	"scenario_id": "snowy_anya_44_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈에 반쯤 묻힌 정착지. 얼어붙은 룬 기둥들이 침묵 속에 서 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 룬들… 뭔가 중요한 이야기가 새겨져 있어요."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여긴 뭐 하던 곳이야?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이곳에 살았던 이들의… 기억이겠죠."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 550,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "가족의 이름들… ‘오딘손’, ‘시구르드르’…"
					}
				},
				{
					"content": {
						"korean": "정말 많네. 오래된 마을인가봐."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "그런데… 이 작은 이름은… ‘안-‘? 뒤가 지워져 있어요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "지워졌다고? 왜?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 450,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "누군가 의도적으로 지웠거나… 혹은 지워질 만큼 가슴 아픈 사연이겠죠."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 사연인데?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 지워진 이름이… 어쩌면 이 정착지의 가장 깊은 비밀일지도 모릅니다."
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심해요! 거대한 그림자가… 이 룬을 가로막고 있어요!"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "잊힌 것을… 건드리지 마라."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 뭔데 우리를 막아!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "여긴… 그 누구도 기억해선 안 될, 슬픔의 땅이다."
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "당신은… 이 룬에 담긴 진실을 감추려는 건가요?"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "아직은… 때가 아니다. 돌아가라."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…젠장! 여기서… 포기 안 해!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "당신의 임무는… 영원할 수 없을 겁니다."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크흑… 결국… 기억하려는군. 하지만… 모든 것을 알게 되면… 너희도 슬퍼할 뿐이다."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 말이야…!"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 이름 없는 수호자는… 잊힌 비극의 잔상이자… 증인이었나 봐요."
					}
				},
				{
					"content": {
						"korean": "이름 없는 수호자가 사라지자, 룬 기둥의 빛이 더욱 선명해졌다. 잊힌 이름이, 서서히 모습을 드러내기 시작했다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "저 자… 이 잊힌 이름의 마지막 수호자 같아요."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상은… 안 된다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "비켜! 진실을 알아야겠어!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "고통만이… 이 땅을 지킨다. 너희도 사라져라."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 멈추지 않아!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"룬 기둥. 그 끝없는 기록 속에서.",
			"수백 년 전, 이 땅을 지켰던 이름들.",
			"가장 작은 이름 하나만, 끝이 지워져 있었다.",
			"잊힌 비극이, 지금 다시 눈을 뜬다."
		]
	}
} as const;
