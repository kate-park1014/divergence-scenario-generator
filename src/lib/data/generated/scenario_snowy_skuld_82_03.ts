export const scenario_snowy_skuld_82_03 = {
	"scenario_id": "snowy_skuld_82_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "빙하 심장부의 냉기가 더욱 깊어졌다. 룬은 여전히 침묵했다."
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…홀로 남아 어둠을 지키라."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르. 괜찮아?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "족장의 명령은 늘 절대적이었다. 영광이자, 의무."
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그는 그렇게 홀로 남겨진 거군."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "강함의 끝은 무엇인가. 영광인가, 버림인가."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이바르, 무슨 생각해?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "우린 늘 명령을 따랐다. 의심 없이, 맹목적으로."
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그게… 배신일 수도 있었던 건가."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "족장은 나약한 자들을 버렸다고 믿었다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "하지만… 그도 버려졌다면."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이바르, 이 길의 끝을 봐야 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그래. 맹세에 담긴 진실을 봐야 한다."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…홀로 남으라."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르… 힘내."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 평생의 영광이… 한낱 버림과 같았다니."
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이바르는 더 이상 말을 잇지 못했다. 그의 침묵이 룬만큼 무거웠다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 룬의 심장을 가로막았다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "또 다른 강함을 쫓는 자들인가."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비켜. 우린 진실을 찾아야 해."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…강함의 끝을 보겠다."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…버림받은 자들의 외침은… 끝나지 않는다."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸어…?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이것이… 강함의 끝인가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 걷히자, 룬이 다시 모습을 드러냈다. 이제 다음 룬이 그들을 기다렸다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국 너희도… 버려질 뿐이다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 절대 포기 안 해."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…강함은… 아직 끝나지 않았다."
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"\"홀로 남으라.\" 에이라가 읽어낸 룬의 마지막 명령.",
			"그 한 마디가 빙하 심장부를 뒤흔들었다.",
			"이바르, 전사의 충성을 맹세했던 그는 침묵했다.",
			"명령과 버림, 그 아슬아슬한 경계 위에서."
		]
	}
} as const;
