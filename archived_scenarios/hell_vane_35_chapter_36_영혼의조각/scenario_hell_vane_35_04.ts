export const scenario_hell_vane_35_04 = {
	"scenario_id": "hell_vane_35_04",
	"order": 4,
	"random_boss_title": {
		"korean": "지옥 참회자"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "붉은 안개 속으로 수많은 고대 서책과 벽화가 늘어선 회랑이 나타났다."
					},
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"content": {
						"korean": "난 이 지옥 회랑의 기록관 벡스라고 하오. 마라의 영혼 파열을 풀 서책을 함께 추적해주겠소."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "베인이 남긴 진실과 행적도 이 서적들 속에 남아 있겠군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…오래된 오염 냄새가 코를 찌르네."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "벡스가 먼지 쌓인 고대 서책을 펼쳐 들었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "vex",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "사냥꾼 베인은 이곳 기록에서도 달아난 죄수가 아닌 마법의 인이 찍힌 자들만 쫓았다고 나오는구려."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "베인이 거둔 영혼들이 모두 무언가 특별한 존재들이었다는 뜻인가."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람 소리가 꼭 비명처럼 들려."
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "사원 안쪽 벽면에 베인의 행적을 밝힐 중요한 각인이 남아 있을 것이오."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사원 더 깊은 곳까지 조사해서 베인의 목적을 밝혀내자."
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "vex",
					"direction": "down"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 점점 차가워지고 있어."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "파괴된 벽면에 새겨진 은빛 마법진 각인이 서늘하게 빛나고 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "파괴된 벽면에 은빛 마법진 각인이 또렷하게 박혀 있어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…어둠 속에서 불길한 기척이 다가온다."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "{random_boss}의 패배에도 그분의 계획은 멈추지 않는다…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벽면의 마법진과 단서들을 보니 베인이 노리는 건 단순한 영혼이 아니야."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "대체 베인은 왜 하필 마라를 집요하게 쫓는 거지?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "강렬한 자색 안개가 이끄는 지옥의 가장 깊은 곳, 영혼의 심연으로 발걸음을 옮긴다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "진실에 다가가기엔 너희의 힘이 턱없이 부족하구나."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…마라를 이대로 둘 순 없다. 다시 도전하겠다."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "검은 사원의 틈새에서 사신의 명을 받은 자가 길을 막아선다."
					}
				},
				{
					"content": {
						"korean": "베인 님의 진실을 감추기 위해 너희의 영혼을 여기서 거두겠다."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마라를 구하기 위해서라도 너를 쓰러뜨리고 앞으로 나아가겠다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…전율이 등줄기를 타고 올라와."
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마라의 영혼 파열을 막기 위해 탐험대는 지옥 회랑으로 달려간다.",
			"이곳의 오래된 기록 속에 현상금 사냥꾼 베인의 행적이 잠들어 있다.",
			"진실을 찾고 영혼을 구하기 위해 검은 사원의 틈으로 들어선다."
		]
	}
} as const;
