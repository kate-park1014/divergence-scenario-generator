export const scenario_hell_razzle_34_03 = {
	"scenario_id": "hell_razzle_34_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "vex",
					"type": "direction"
				},
				{
					"content": {
						"korean": "자색 독기가 바닥을 삼켰어! 닿으면 바로 부식된다!"
					},
					"emotion": "angry",
					"speaker": "vex",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "은빛 마술 종을 공중에 던져 환영 징검다리를 만든다!"
					}
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "발밑에 뜬 종소리 징검다리를 타고 독기 위를 건너뛰어!"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…숨이 막히는 열기야."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "vex"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "징검다리 끝에 피 묻은 마술 티켓 한 장이 떨어져 있어."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "티켓에 적힌 '구원'이라는 글자 밑에... 찢어진 살점 자국이 비쳐."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…소름 돋는 감촉이다."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "서커스단의 구원은 언제나 누군가의 살점을 찢어 만든 환상이었어."
					},
					"speaker": "vex"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "종을 던질 때마다 벽 너머에서 날카로운 마찰음이 울려."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"content": {
						"korean": "은빛 종소리가 벽 속의 거대한 보석 톱니 소리와 겹치고 있어!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "벡스의 눈에서 피눈물이 흘러내린다."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "종을 울릴수록 기계가 동료들의 몸을 찢어발길 거다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "vex"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "…뼛속까지 소름이 끼친다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "vex",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "유황 안개가 부풀어 오른다. 기습을 지휘한 자가 나타난다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더는 물러설 무대가 없다. 환영의 근원을 잘라내겠다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "…더 이상 머뭇거릴 수 없어."
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 종을 깨뜨려도 톱니는 멈추지 않는다..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "통로를 막던 독기의 환영이 완전히 사라졌어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유황 연기가 걷히자 무대 뒤편에서 거대한 톱니 마찰음이 귓가를 찢는다."
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "환영 징검다리를 타고 제 발로 사지에 걸어들어왔구나!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "은빛 종을 깨뜨려서라도 네 독기 환영을 짓밟아주마!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "종을 울릴 때마다 너희 살점도 톱니에 나뒹굴게 될 것이다!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "독기와 환영 속에서 영원히 기계 톱니의 재물이 되어라!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 종은 깨지지 않았다. 다시 일어선다."
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
			"유황 연기가 자욱한 통로, 독기의 환영이 발밑을 위협한다.",
			"은빛 마술 종이 공중에서 징검다리를 빚어내지만—",
			"종소리가 맑게 울릴 때마다 섬뜩한 톱니 소리가 겹쳐온다.",
			"환상 뒤에 숨겨진 잔혹한 무대가 붉은 피눈물을 요구한다."
		]
	}
} as const;
