export const scenario_desert_encore_49_04 = {
	"scenario_id": "desert_encore_49_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"content": {
						"korean": "무대 뒤편 분장실은 비릿한 피비린내와 찌든 분가루 냄새가 진동했다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "참혹한 광경이다. 여기서 대체 무슨 일이 벌어진 거지?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "…또 다른 희생자가 무대에 오르기 전에 도착했군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…피비린내가 뼛속까지 스며든다."
					}
				},
				{
					"content": {
						"korean": "난 이 사막 극단에서 죽어 나간 이들의 시신을 거두는 케메트라고 하네."
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "이 핏자국 맺힌 종이를 보게. 앙코르와 맺어진 '환영 각인 계약서'네."
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험가들을 환각에 빠뜨려 서로를 죽이게 만든 계약서인가."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "…인간의 목숨을 잔혹한 유흥거리로 썼다니."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "태엽 소리를 들은 자는 동료를 적으로 착각해 살해하도록 각인되어 있지."
					},
					"speaker": "kemet",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "죽은 자들의 가슴에서 거둬낸 톱니바퀴들이라네."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 기괴한 톱니 장치가 환각을 퍼뜨리고 있었던 거다."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…더 이상 무고한 희생을 좌시할 수 없다."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "극단은 이 장치로 사람들의 피를 쥐어짜 내며 무대를 유지해 왔네."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "분장실 구석에 스러진 시신 가슴에서 회중시계 유리 파편 세 조각이 튀어나와 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "가슴에 박힌 날카로운 파편… 끝까지 시계를 품에 쥐고 있었던 건가."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "kemet",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "환술 연출가가 본 무대로 통하는 길목을 가로막고 있네. 조심하게."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 지체할 시간은 없다. 본 무대로 돌파한다."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "크크크! 분장실까지 기어들어 온 쥐새끼들이 있군! 무대는 너희의 무덤이다!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "억울하게 참살당한 이들의 원한을 여기서 갚아주겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "환각 속에서 서로를 찔러 죽이는 잔혹한 비극의 주인공이 되어라!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상의 가짜 환술은 통하지 않는다. (놋쇠 회중시계 케이스를 닫는다)"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 환각의 톱니바퀴에 찢겨 나가는 꼴이 참으로 볼만하구나!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…차디찬 사막 바닥에 무릎 꿇을 순 없다. 다시 일어선다!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "으윽… 말도 안 돼! 나의 무대 연출이… 무너지다니…!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 막던 연출가는 쓰러졌다. 이제 남은 건 본 무대의 앙코르뿐이다."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "무대 뒤편의 어둠이 걷히며, 마침내 앙코르가 기다리는 원형 무대의 문이 열렸다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"무대 뒤편 분장실은 비릿한 핏자국과 녹슨 톱니바퀴로 가득했다.",
			"시신을 거두는 노인 케메트가 피로 물든 계약서를 내보였다.",
			"환술의 잔혹한 전모가 드러날수록 분노는 더욱 깊게 타올랐다.",
			"놋쇠 회중시계를 꽉 쥔 채, 마지막 무대를 향해 발을 내딛는다."
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
