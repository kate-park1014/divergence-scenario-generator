export const scenario_hell_solatrus_37_04 = {
	"scenario_id": "hell_solatrus_37_04",
	"order": 4,
	"random_boss_title": {
		"korean": "망령 기사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "붉은 불꽃이 이글거리는 제단 중앙, 사슬에 묶인 영혼이 헐떡이고 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "drox",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "저는 드록스라고 합니다… 아무 죄도 없는데 이 혈염의 제단에 갇혀버린 영혼이에요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "억울하게 끌려온 영혼이 제단에 사슬로 매여 있군."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…사방에서 지옥의 열기가 느껴져."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"emotion": "angry",
					"content": {
						"korean": "저를 도와주세요! 이 붉은 사슬이 제 영혼을 다 태우기 전에 풀어주셔야 합니다!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "좋다, 우리가 저 사슬을 끊어내겠다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "결계를 부수자 제단을 짓누르던 붉은 불꽃이 잠시 가라앉았다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "drox",
					"emotion": "sad",
					"content": {
						"korean": "살았습니다. 사제님은 억울함을 풀어주기는커녕 저를 죄인의 명부에 올려 태우려 하셨어요."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "죄 없는 이들까지 명부에 적어 불길 속에 던져왔던 건가."
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…소름이 뼛속까지 돋는 이야기야."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그자의 명부를 파괴해야만 이 잔혹한 징벌을 멈출 수 있습니다!"
					},
					"emotion": "angry",
					"speaker": "drox"
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
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제단 심장부로 갈수록 사제님을 따르는 잔혹한 기사들이 길을 막을 겁니다. 조심하십시오!"
					},
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어떤 방해자가 나타나도 명부를 파괴하고 동료를 구하겠다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "drox",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…발 밑 바닥까지 뜨겁게 가열되고 있어."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "제단 위에서 앰버빛 열기를 내뿜는 사슬이 붉게 얽혀 있다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제단 위를 휘감은 앰버빛 사슬에서 거센 뜨거움이 흘러나오고 있다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "육중한 철갑 소리와 함께 붉은 대검을 끈 묵직한 기척이 다가온다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 막힐 것 같은 중압감이야."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네놈들의 이름도 곧 명부에 적혀 영원한 심판의 불꽃에 갇히리라!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 전열을 가다듬는다!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "제단 중앙, 붉은 대검을 쥐고 길을 막아서는 적의 형상이 타오른다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "사제님의 판결은 절대적이다! 명부에 오른 죄인은 이 불길 속에서 소멸하라!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "억울한 영혼들을 태워온 오판을 더는 좌시할 수 없다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…피할 곳 없는 혈염의 무대야."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 그러나 명부에 새겨진 심판은 결코 멈추지 않는다…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 철갑이 무너지며 자욱한 잿더미로 산산이 흩어진다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "적을 쓰러뜨렸지만 제단 위에는 여전히 앰버빛 열기의 사슬이 얽혀 있군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사슬의 열기가 지옥 가장 깊은 곳, 솔라트루스의 심판소로 이어지고 있다."
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"혈염의 제단 위로 붉은 화염이 거세게 타오른다.",
			"동료가 갇힌 불길 속에서 억울한 영혼의 비명이 울려 퍼진다.",
			"공정한 줄로만 알았던 사제의 심판, 그 숨겨진 진실에 다가선다."
		]
	}
} as const;
