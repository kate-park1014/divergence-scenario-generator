export const scenario_desert_zahrun_48_03 = {
	"scenario_id": "desert_zahrun_48_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "narrator",
					"duration_ms": 500,
					"action": "focus"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바람 언덕 입구에 상아빛 낙타 뼈 파편들이 흩어져 있다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "낙타 뼈가 이렇게 널브러져 있다니, 예사로운 바람이 아니야."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						4
					],
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈춰라! 이 앞은 위험한 바람 언덕이다. 당장 발길을 돌려라!"
					}
				},
				{
					"content": {
						"korean": "…모래바람 소리가 꼭 사람의 비명 같다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경고는 고맙지만, 우리는 이 사막을 지나가야만 해."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "순찰 대장의 겁주기에 속지 마라! 전사라면 앞으로 나아가야지."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아슈르 말대로 경고 때문에 여기서 포기할 수는 없어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…가슴을 짓누르는 중압감이 느껴져."
					},
					"emotion": "sad"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뼈다귀 몇 개 놓여 있다고 되돌아갈 생각은 버려라!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "ashur",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바람 언덕에 놓인 상아빛 낙타 뼈에서 서늘한 숨소리가 새어 나온다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "낙타 뼈 안에서... 살아있는 자의 숨소리가 들려!"
					}
				},
				{
					"content": {
						"korean": "헛소리 마라! 바람이 뼈 구멍을 통과하며 나는 소리일 뿐이다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…피부 끝을 파고드는 서늘한 냉기다."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 400,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "모래바람을 측정하려면 황동 물병 바닥을 강하게 두드려 울림을 봐야 해."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"duration_ms": 400,
					"action": "shake",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "물병에서 시작된 강한 진동이 언덕 전체로 울려 퍼진다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "으윽... 머리가...! 손 끝이 왜 이러지?!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르의 손톱 끝이 검은 모래로 바스러지고 있어!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "이럴 수가... 신체가 모래로 변하다니!"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "경고를 무시한 무모함이 너희의 신체를 모래로 만들 것이다."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손톱이 부서져 내려도 다시 일어선다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가 무너지더라도... 자룬의 주술은 멈추지 않는다..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}마저 그림자 주술에 귀속되어 있던 거였어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바람은 잠잠해졌으나, 바스러진 손톱의 상흔은 남아있었다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "물병의 진동을 울려 파멸을 당겨오다니, 어리석은 자들 같으니!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "경고로 우리를 막으려 한 건 진실을 가리기 위해서였나!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "검은 모래가 된 동료의 뒤를 이어 그림자 행렬에 합류해라!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…절대 이 사막에서 무릎 꿇지 않는다."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_4"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"바람 언덕에 몰아치는 붉은 모래와 상아빛 낙타 뼈.",
			"순찰 대장은 위험을 경고하며 길을 막아서지만, 사막은 가혹한 진실을 품고 있다.",
			"동료의 호기로운 전진 뒤로 모래바람이 울리기 시작한다.",
			"황동 물병의 진동이 울려 퍼진 순간, 검은 파멸의 징후가 드러난다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
