export const scenario_snowy_cairn_66_02 = {
	"scenario_id": "snowy_cairn_66_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"돌무덤 둘레에 흩어진 깨진 서약의 룬들.",
			"오래된 맹세는 모두 중간에서 끊겨 있었다.",
			"하지만 이제, 누군가 약속의 진실을 가려내려 한다.",
			"그리고 그 저울은 탐험대의 심장을 향한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 돌무덤 주위. 오래된 서약의 룬들이 깨져 흩어져 있다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기에도 전부 끊긴 룬들뿐이네."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대체 왜 이러는 걸까? 모두 약속을 어겼다는 건가?"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 순간, 돌무덤에서 미세한 진동이 울렸다."
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "…느꼈나? 돌무덤이 반응했어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "진동? 그냥 우연이겠지."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니. 너희가 방금 나눈 말에, 이 돌무덤이 반응한 거야."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "우리가… 방금 무슨 약속이라도 했나?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "이곳은 맹세의 무게를 재는 곳이다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "맹세의 무게?"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "진심 없는 약속은 곧 깨진 룬처럼 끊어진다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬들을 봐. 모두 진실하지 못했어."
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "그럼… 우리가 하는 모든 말이 시험받는다는 거야?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "모든 약속엔 대가가 따른다. 지키지 못했을 때의…."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 뭔데. 솔직히 난 잘 모르겠어."
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이곳에선 거짓이 들킨다. 네 한 마디의 무게를 재는 거야."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌무덤 틈새의 어둠이 꿈틀거렸다. 마치 수많은 눈동자처럼."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "으스스해… 누가 우릴 지켜보는 것 같아."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 이 정도로 진실한 약속이라니…!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 사라졌다. 돌무덤의 진동이 잦아들었다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이제… 약속의 진짜 의미를 알겠어."
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "시험은 끝났지만, 약속은 계속된다. 잊지 마라."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세의 무게를 잴 줄 아는 자들. 그들의 발걸음은 더욱 단단해졌다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌무덤의 진동이 격렬해졌다. 탐험대는 쓰러졌다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 맹세는 겨우 이 정도인가? 나약하군."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어! 다시 일어설 거야!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "여기까지 왔군. 너희의 맹세는 얼마나 견고한가?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가 감히 우릴 시험하는 거지?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳은 약속의 심판장. 거짓은 용납되지 않는다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 증명해주겠어! 우리의 약속은 진짜야!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
