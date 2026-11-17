export const scenario_desert_sirocco_47_02 = {
	"scenario_id": "desert_sirocco_47_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "높은 절벽 바위에 깊은 칼자국들이 기괴하게 얽혀 있다."
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "dune",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "이 흉터들을 봐라. 과거 검객들의 잔류 검기가 바위에 박힌 흔적이다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…절벽 사이로 놋쇠 검날 조각이 녹슬어 있네."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "바위에 꽂힌 놋쇠 조각이 우리가 가진 피리와 같은 재질이다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "바람이 불 때마다 바위의 칼자국들이 피리 소리와 같은 떨림을 낸다."
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 소름이 돋아."
					}
				},
				{
					"content": {
						"korean": "억울하게 죽은 검객들의 영혼을 진혼곡으로 달래야 한다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 소리를 내면 잔류 검기를 자극하게 된다!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "피리를 불자 핏빛 모래가 원형 경계선 모양으로 뭉치기 시작한다!"
					},
					"speaker": "dune",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…바닥이 온통 붉게 물들고 있어."
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "피리 소리가 퍼질수록 모래바닥에 결투장의 경계가 뚜렷해진다."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "dune",
					"action": "enter"
				},
				{
					"content": {
						"korean": "멈춰라! 진혼곡이 절벽의 칼자국과 공명해서 바위가 무너지고 있다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…귀가 찢어질 것 같은 쇠소리다."
					},
					"speaker": "character_4"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "더 이상의 전진은 허용할 수 없다. 피리를 거두어라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오아시스 경비원이 무기를 꺼내 들며 길을 막아섰다."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "검기를 자극하는 낭설을 당장 멈춰라! 사막을 붕괴시킬 셈인가!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "영혼을 달래려는 피리 소리가 오히려 폭풍을 불러일으키고 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말이 통하지 않는군. 힘으로라도 피리를 빼앗겠다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공명하는 날카로운 검기에 찍혀 무릎을 꿇었다."
					}
				},
				{
					"content": {
						"korean": "…이대로 멈출 수는 없어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자여, 피리 소리가 만들어낸 검기에 찢겨 나가라!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "으윽… 소리가… 절벽 전체를 부수고 있다…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "random_boss",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "수천 개의 칼자국이 피리 소리에 응답하며 모래 절벽이 거대하게 깎여 나갔다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "구원의 음악은 사막을 찢는 파멸의 신호탄이 되었다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"바람막이 절벽에 깊게 깎인 수천 개의 흉터.",
			"파수꾼 듄은 바위에 꽂힌 놋쇠 검날을 가리켰다.",
			"원혼을 달래려 불어 든 피리 소리가 절벽을 울릴 때 —",
			"구원의 가락은 사막을 베어내는 파멸의 검기가 되어 돌아왔다."
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
