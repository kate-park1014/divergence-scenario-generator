export const scenario_snowy_skalhorn_55_05 = {
	"scenario_id": "snowy_skalhorn_55_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "pool_110"
	},
	"prologue": {
		"korean": [
			"세계는 다시 노래를 불렀다. 뿔잔의 미혹이 모든 것을 감쌌다.",
			"황홀한 가락 속에 숨겨진 비명. 셋은 그 진실을 꿰뚫어본다.",
			"의심과 신념, 그리고 기록으로 무장한 채.",
			"이제, 후반부의 막이 오른다. 진정한 광기의 축제를 향해."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "골짜기에는 잠시 침묵이 흘렀다. 그러나 이내 멀리서 노래가 차오르기 시작했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벌써 저 가락이야? 거룩해 보일수록 더 의심하라고, 내가 말했지?"
					},
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…잊지 않았어."
					},
					"type": "speech",
					"emotion": "base"
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
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "저건 신성한 노래가 아니야. 착각하면 안 돼."
					},
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "하지만… 너무 아름다워. 홀릴 것 같아."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "아름다움 뒤에 독이 숨어있지. 정신 차려."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boris"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "가락이 더욱 선명해졌다. 달콤한 속삭임이 귓가를 맴도는 듯했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "boris",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "귀를 막아도 소용없을 거야. 뿔잔의 노래는 네 영혼을 직접 건드려."
					}
				},
				{
					"content": {
						"korean": "이… 화음. 어딘가 틀어져 있어. 찬가가 아니야… 비명이 섞여 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "머릿속을 맴도는 가락이 심장을 잠식하는 듯했다. 미혹은 시공간을 초월했다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "boris",
					"type": "direction"
				},
				{
					"content": {
						"korean": "황홀할 땐 멈춰. 그게 함정의 신호야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "신념이… 어디서부터 광기가 되는 걸까."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 스스로 판단해야 해. 진짜 네 목소리를 들어."
					},
					"speaker": "boris"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 거대한 형상이 나타났다. 공간을 뒤흔드는 찬가가 셋을 덮쳤다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "왔는가, 불경한 자들. 나의 노래에 동참하라."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "거짓된 광기에 굴복하지 마! 저건 거룩함이 아니야, 그저 미혹일 뿐!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "노래 속에… 비명이 들려. 수많은 비명이!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이게 뿔잔의 신념인가… 아니, 이건 광기다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아무리 막으려 해도 맴돌던 가락… 결국 이 비명을 감추고 있었군."
					},
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "감히 나의 진실을 더럽히려는가? 어리석은 인간들!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "진실은 감추는 것이 아니다! 자, 깨어나라! 저 미혹을 부숴버려!"
					}
				},
				{
					"speaker": "boris",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하하! 결국 나의 노래에 잠식되는구나! 모두가 나를 찬양할 것이다!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 너의 거짓된 노래는… 결코 통하지 않아!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "크윽… 너희의… 의심이… 나의 노래를… 멈추게 하다니…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너의 노래는… 수많은 영혼을 갉아먹었어."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 노래가 완전히 멎었다. 골짜기는 비로소 진정한 고요를 되찾았다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그러나 여정은 끝나지 않았다. 셋은 미혹을 뚫고, 더 깊은 진실을 향해 나아간다."
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"뿔잔의 황홀한 가락은 영원히 잦아들었다. 그 속에 갇혔던 비명도 함께.",
			"거짓된 거룩함은 무너졌으나, 셋은 여전히 무언가를 찾아 헤맨다.",
			"의심은 신념을, 신념은 기록을, 기록은 다시 의심을 불러왔다.",
			"과연, 이 숲의 가장 깊은 곳에는 무엇이 기다리고 있을까.",
			"이 길의 끝에서, 그들은 진정한 구원을 만날 수 있을까."
		]
	}
} as const;
