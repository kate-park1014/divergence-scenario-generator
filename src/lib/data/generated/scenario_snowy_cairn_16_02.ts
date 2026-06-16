export const scenario_snowy_cairn_16_02 = {
	"scenario_id": "snowy_cairn_16_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"설원. 끝없는 흰색 위로 차가운 침묵이 드리웠다.",
			"탐험대는 나아갔지만, 지나쳤던 돌무덤이 다시 길을 막았다.",
			"마치 누군가 지켜보는 듯 — 그 시선은 계속 따라붙었다.",
			"그리고, 강함의 끝을 시험받는 자의 등골을 서늘하게 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지나쳤던 돌무덤. 설원 곳곳에서 같은 형상으로 다시 나타났다. 차가운 침묵이 그림자처럼 따라붙었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "흥. 돌무더기 하나에 겁먹을 줄 알았나. 고작 이런 걸로 나를 시험할 수 있을 거라 생각하나?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르. 왠지 불길한데…"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은 아직 멀었다. 이런 시선 따위, 내가 상대해주지."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "따라붙는 침묵이라… 실로 불쾌한 존재로군."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌무덤의 룬이… 아까보다 또렷해진 것 같아."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "신경 쓰지 마라. 이바르가 약속한다. 저것의 정체를 밝혀내리라."
					},
					"speaker": "ivar"
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
						4,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이런, 끈질긴 시선 같으니."
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 괜찮아? 표정이 안 좋은데."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "괜찮다. 다만… 녀석의 끈질김이 조금은, 흥미로울 뿐."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "점점 더 차가워지는군. 이 침묵이."
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드리운 그림자가 해의 방향과 맞지 않는다. 그림자는 늘 탐험대 쪽을 향했다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이바르, 이제 그만 돌아갈까…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…흥. 강함의 끝을 보기 전까진 멈출 수 없다."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "…포기해라. 너의 강함은, 이 침묵을 넘을 수 없다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "크윽… 아직이다. 아직… 끝나지 않았다!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "돌무덤의 침묵이 형체가 되었다. 어둠 속에서 빛나는 푸른 룬이 일렁였다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도전하는 자여… 너의 강함은, 어디까지인가?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "내 강함의 끝은… 너 같은 그림자로는 알 수 없다! 덤벼라, {random_boss}!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이바르!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 아직 멀었다… 너의 끝은."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "흥. 나를 가둘 수 있는 시선 따위는 없다."
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차가운 침묵은 잠시 물러났다. 그러나 설원은 여전히 그들을 지켜보고 있었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
