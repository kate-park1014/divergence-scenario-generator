export const scenario_hell_solatrus_37_03 = {
	"scenario_id": "hell_solatrus_37_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "죄악의 징벌 재판정 중앙, 앰버빛 칼날이 차갑게 빛나고 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "soot",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "제발 다가오지 마! 이 재판정의 판결은 함정이야!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…사슬 소리가 서늘하군."
					}
				},
				{
					"content": {
						"korean": "수트가 부러진 앰버빛 징벌검 아래 갇혀 사형을 기다리고 있다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "날 구하려고 태엽을 돌리지 마. 시계를 감을수록 더 큰 비극이 시작돼!"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "soot",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "벽에 걸린 저 고문 서판을 봐. 글자가 이상하게 겹쳐 있어."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…잿가루가 자꾸 눈을 가리네."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "형벌을 받는 죄인들의 이름 위에 백금 사제 솔라트루스의 이름이 덮어 쓰여 있다."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "soot",
					"content": {
						"korean": "단죄자가 타인의 죄업을 대신 짊어지고 판결을 받아온 거였어."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"speaker": "soot",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "안 돼! 시계 태엽을 돌리는 행위는 단죄자의 목을 죄는 짓이야!"
					},
					"speaker": "soot",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시계를 감을 때마다 환영 속 사제가 죄인의 목에 가해지는 밧줄을 자신의 목에 거는 모습이 보인다."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…숨이 턱 막히는 기분이야."
					}
				},
				{
					"content": {
						"korean": "타인의 형벌을 무효로 만들수록 단죄자만 붉은 흉터를 안게 된다고!"
					},
					"speaker": "soot",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "soot",
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "soot",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제발 멈춰! 태엽을 돌리지 말고 멈추란 말이야!"
					}
				},
				{
					"content": {
						"korean": "수트의 제구를 털어내고 잿빛 태엽시계의 태엽을 감아 재판을 되돌리기로 결심한다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…붉은 불꽃이 눈앞을 어지럽혀."
					}
				},
				{
					"speaker": "soot",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국 또 다시 사제를 화형의 굴레로 밀어 넣는구나…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "단죄의 시간이 도래했다. 부러진 앰버빛 징벌검으로 죄인을 단죄하리라!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "고문관이 판결을 내리기 전에 시계 태엽을 돌려 재판정을 복구해야 한다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "시간을 되돌린다고 한들… 단죄자의 백금 갑주에는 더 깊은 흉터만 남을 뿐이다…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "태엽이 감기며 징벌 재판정이 재판 시작 전 상태로 복구되었다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "수트는 형벌을 면했으나, 시계의 잿빛 톱니바퀴는 한층 더 무겁게 옥죄어왔다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "죄업의 굴레에서 벗어날 수 없다. 재판의 칼날을 받아라!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 시간을 돌릴 기회가 남아 있어."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"피와 잿더미로 뒤덮인 죄악의 징벌 재판정.",
			"사형수 수트가 부러진 앰버빛 징벌검 아래 무릎을 꿇고 있다.",
			"지옥 고문관의 단죄 판결이 내려지기 직전, 다시 한번 시계 태엽을 움직여야 한다."
		]
	}
} as const;
