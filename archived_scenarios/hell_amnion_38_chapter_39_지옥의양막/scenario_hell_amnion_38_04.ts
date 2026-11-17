export const scenario_hell_amnion_38_04 = {
	"scenario_id": "hell_amnion_38_04",
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전광판의 숫자가 1분을 가리키며 붉게 진동한다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "남은 시간은 이제 1분뿐이다."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "pyre"
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "은빛 메스를 내놓아라! 봉인실 안으로는 못 간다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…뼛속까지 타들어 가는 열기다."
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "pyre",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "교단의 비밀 문서와 은빛 메스는 절대로 넘길 수 없다!"
					},
					"speaker": "pyre",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시간이 없다. 메스를 빼앗길 수는 없다!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "pyre",
					"content": {
						"korean": "어림없다! 내 목숨을 바쳐서라도 저지하겠다!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…숨이 턱턱 막혀온다."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "pyre",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "덤벼라! 칼날을 빼앗아 봉인을 지키겠다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "은빛 메스로 파이어의 투구를 반으로 쪼개어 제압했다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크아악! 투구가… 파괴되다니…!"
					},
					"speaker": "pyre",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…전율이 온몸을 덮친다."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "pyre"
				},
				{
					"type": "speech",
					"content": {
						"korean": "품속의 교단 문서만큼은… 보지 마라…!"
					},
					"speaker": "pyre",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "파이어의 품에서 떨어진 문서를 주워 들었다."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "문서에 '오팔 고치는 주술 생체 쓰레기통'이라 적혀 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…소름이 피끝까지 돋아난다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "1분이 지나버렸다. 용암의 재가 되어라!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 1분의 기회가 남아있다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "중앙 고치 봉인실 깊숙한 곳, 기형적인 열기가 치솟는다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "남은 시간 1분! 고치로 향하는 길을 가로막겠다!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}를 쓰러뜨리고 메스로 고치를 멈춰야 한다!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "고치를 가르면… 지옥 전체가… 크아악!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 보스 뒤로, 고치 표면에 수십 개 아기 손가락 윤곽이 비쳐 나왔다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고치 속에서 무수히 많은 손가락이 표면을 밀어내고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"시한 폭발까지 남은 시간은 단 1분.",
			"비밀 수호병 파이어가 은빛 메스를 노리며 막아선다.",
			"메스로 파이어의 투구를 갈라버린 순간 —",
			"오팔빛 고치 표면에 소름 끼치는 윤곽이 떠올랐다."
		]
	}
} as const;
