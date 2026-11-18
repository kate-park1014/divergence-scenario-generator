export const scenario_hell_stampy_30_03 = {
	"scenario_id": "hell_stampy_30_03",
	"order": 3,
	"random_boss_title": {
		"korean": "용암 벼려꾼"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"영혼을 묶은 쇠사슬을 풀기 위해 탐험대는 해골 통로로 향한다.",
			"그곳에는 빼앗긴 영혼들의 서류를 관리하는 이가 기다리고 있었다.",
			"통행세에 숨겨진 진실을 밝혀내고 계약을 끊어내야 한다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "해골이 빽빽하게 박힌 통로 입구. 으스스한 용암 열기가 감돈다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cinder",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "저는 이 통로의 문서를 기록하는 서기 신더입니다. 발목에 영혼의 쇠사슬이 묶인 채 어디 가시나요?"
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 쇠사슬을 풀어내고 이승으로 돌아갈 방법을 찾고 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…해골 눈구멍이 다 우리를 노려보는 것 같아."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 핫핑크색 종이 조각을 봐라. 골짜기에서 얻은 것이다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "cinder",
					"content": {
						"korean": "이건… 통행세를 청구하는 정식 서류 조각이에요! 무료 도장은 사실 원본 계약서와 연결되어 있습니다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "지옥 깊은 곳에 있는 계약서를 찢어야만 영혼의 도장이 무효가 돼요."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "계약서만 찾아 찢으면 이 발목의 사슬을 풀 수 있겠군."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…드디어 사슬을 풀 방법이 나왔어."
					},
					"speaker": "character_2",
					"emotion": "happy"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "통로 벽면에 핫핑크색 통행세 청구서 조각들이 빼곡히 붙어 있다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "cinder",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "보세요, 전부 공짜 도장에 속아 영혼이 묶인 자들의 청구서입니다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "친절하게 도장을 찍어주던 건 전부 통행세를 뜯어내기 위한 덫이었다."
					}
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "cinder",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…종이마다 찍힌 붉은 날인이 섬뜩하네."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "바닥에는 마젠타빛 젤리 자국이 눌러붙어 있고, 거대한 둔기 소리가 울린다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 육중한 무기를 들고 길을 막아서고 있다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…숨이 턱 막히는 열기야."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "읏… 통로를 무너뜨려 서류를 지켜야 하는데…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는 진짜 계약서를 찾아 찢고 반드시 이승으로 돌아간다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "열기가 가라앉자, 마젠타빛 젤리 자국이 유황 재가 날리는 광장 쪽으로 이어졌다."
					}
				},
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광장 쪽으로 가보세요! 징수관이 도는 유황 재 광장에 진짜 계약서가 있을 거예요."
					},
					"emotion": "base",
					"speaker": "cinder"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "용암의 열기를 두른 자가 거대한 망치를 내리치며 탐험대를 가로막는다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "서류를 건드리지 마라! 계약서를 함부로 찢으면 이 통로 전체가 무너진다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리 영혼을 묶은 계약을 두고 볼 순 없다. 길을 비켜라!"
					}
				},
				{
					"content": {
						"korean": "…열기 때문에 발목의 쇠사슬마저 뜨거워져."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "계약서에 손대지 마라. 영혼과 함께 통로에 매장될 것이다."
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…여기서 멈출 순 없다. 다시 쇠사슬을 끊으러 오겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
