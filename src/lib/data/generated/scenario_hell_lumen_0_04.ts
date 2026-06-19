export const scenario_hell_lumen_0_04 = {
	"scenario_id": "hell_lumen_0_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"pyre": {
			"id": "mon_096a199b-d878-4daf-ab59-8a5fc3c32a37",
			"name": {
				"korean": "화염",
				"english": "Pyre",
				"japanese": "炎",
				"chinese": "烈焰",
				"french": "Bûcher",
				"spanish": "Pira",
				"vietnamese": "Hỏa đài",
				"thai": "เชิงตะกอน",
				"hindi": "चिता"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d9f42f57-c664-48aa-b280-498d0f92a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3d10334d-d2d4-441b-14bd-cd9fba035800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사제의 성전. 평온한 웃음소리가 가득하다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "pyre",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"emotion": "base",
					"content": {
						"korean": "저들이 치유받은 자들인가…."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모두 웃고 있어. 고통은 없어 보여."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사제의 얼굴이… 빛에 흔들릴 때마다."
					},
					"emotion": "base",
					"speaker": "pyre",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"emotion": "base",
					"content": {
						"korean": "평온한 가면 아래, 다른 얼굴이 보인다."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "pyre",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "이봐요. 혹시… 배고프거나, 두렵지 않나요?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…평온합니다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아무것도 원치 않습니다."
					},
					"emotion": "base"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "고통만 사라진 게 아니야. 모든 것이…."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "pyre",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "사제… 당신은 대체 누구지?"
					},
					"emotion": "base",
					"speaker": "pyre",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…."
					}
				},
				{
					"content": {
						"korean": "그 미소 아래… 진짜 얼굴은 없어."
					},
					"emotion": "sad",
					"speaker": "pyre",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그저 겹쳐진 가면들 뿐."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "pyre"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "이곳은…."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너무 깊이 들어왔어."
					},
					"emotion": "base"
				},
				{
					"speaker": "pyre",
					"type": "speech",
					"content": {
						"korean": "더 이상 돌아갈 수 없어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…돌아가려 한다고 달라질까?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구냐!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석군. 평온을 거부하다니."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하지만… 그분은 너희의 갈망마저 사랑하실 것이다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "갈망마저… 사랑한다고?"
					},
					"type": "speech",
					"speaker": "pyre"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "결국 진짜는 사제인가."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가장 큰 고통은… 구원이었다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이제, 사제 본인의 가면을 벗길 때다."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "그래. 여기까지 왔군."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "고통은 사라졌으나… 너희는 그 평온을 거부하는군."
					}
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"emotion": "angry",
					"content": {
						"korean": "그것은 평온이 아니야. 공허일 뿐."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 밝히겠다."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…아직도 고통을 원하는가?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…이것이 우리 존재의 이유다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 일어설 것이다."
					},
					"emotion": "angry",
					"speaker": "pyre",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"평온한 미소 뒤편에 감춰진 진실.",
			"고통과 함께 모든 것이 사라진 영혼들.",
			"사제의 얼굴은 빛 속에서 흔들리고 —",
			"수많은 가면들이 겹쳐진다. 진짜는 어디에.",
			"돌이킬 수 없는 곳에 와 있음을 깨달았다."
		]
	}
} as const;
