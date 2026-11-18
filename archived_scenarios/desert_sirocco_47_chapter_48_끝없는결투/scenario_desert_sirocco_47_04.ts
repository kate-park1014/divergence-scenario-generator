export const scenario_desert_sirocco_47_04 = {
	"scenario_id": "desert_sirocco_47_04",
	"order": 4,
	"random_boss_title": {
		"korean": "용병"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래에 묻힌 바람의 신전 유적. 서판 앞에 한 남자가 서 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "나는 기록관 칸일세. 옛 전쟁의 서판을 해독하려 이 유적에 들어왔지."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사막을 집어삼키는 모래폭풍을 막을 단서가 필요한 상황이다."
					}
				},
				{
					"content": {
						"korean": "…오래된 돌냄새가 뼛속까지 스며드네."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
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
						"korean": "칸이 이끼를 털어내자 서판의 고대 문자들이 서서히 드러난다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "khan"
				},
				{
					"speaker": "khan",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서판에는 바람과 검의 기운에 관한 구절들이 새겨져 있군."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "폭풍이 왜 사막 전체로 퍼져 나가는지 알아내야 한다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…문자가 희미하게 불빛처럼 일렁거려."
					},
					"emotion": "base",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "khan",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "핵심 문장은 더 안쪽 서판에 있네. 해독을 계속 진행하지."
					},
					"speaker": "khan",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "서판이 완전히 해독될 때까지 주위를 경계하겠다."
					}
				},
				{
					"speaker": "khan",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "up"
				},
				{
					"content": {
						"korean": "…어둠 속에서 누군가 노려보는 시선이 느껴져."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "유적의 허물어진 창밖, 사막 폭풍 속에서 희미하게 엇갈리는 수천 명의 검객 그림자가 보인다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "폭풍 속에서 검객들의 수많은 환영이 무수히 엇갈리고 있다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…바람 소리가 마치 칼싸움 소리 같아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 시간을 벌지 못했단 말인가…"
					}
				},
				{
					"type": "direction",
					"speaker": "khan",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"direction": "up"
				},
				{
					"type": "speech",
					"content": {
						"korean": "해독이 끝났네! 모래폭풍은 강한 기운을 내뿜는 검객을 찾아 다가간다고 적혀 있네!"
					},
					"emotion": "happy",
					"speaker": "khan"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "결국 폭풍은 사막 속 강한 검객의 기운을 따라 이동하는 것이었군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "서판에 적힌 흔적을 따라, 탐험대는 가장 강력한 기운이 일렁이는 황토빛 모래 구덩이로 향한다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "신전 안쪽 통로 앞, 칼을 쥔 자가 길을 막아서고 있다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서판 해독 따위는 잊어라. 서쪽 골짜기로 가야 폭풍이 멈춘다!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엉뚱한 길로 유인해 서판 해독을 방해하려는 거냐."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나를 쓰러뜨리지 않고는 한 발자국도 못 지나간다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…숨 막히는 압박감이 밀려온다."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이곳을 지나갈 생각은 버려라! 엉뚱한 곳으로 꺼져라!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…이대로 쫓겨날 순 없다. 다시 전열을 가다듬자."
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"바람의 신전 유적 깊은 곳에 고대의 목소리가 잠들어 있다.",
			"사막 전체로 퍼져 나가는 모래폭풍을 잠재울 단서를 찾아야 한다.",
			"유적 속 해독된 서판만이 폭풍의 진실을 가리키고 있다."
		]
	}
} as const;
