export const scenario_hell_cystis_32_05 = {
	"scenario_id": "hell_cystis_32_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_NeonParasite_Cystis_V1"
	},
	"prologue": {
		"korean": [
			"지옥 연꽃 웅덩이, 유황 냄새가 자욱한 구원자의 제단.",
			"약병을 마신 배 속에서 지옥의 열기보다 더한 고통이 끓어오른다.",
			"고통을 끝내고 진실을 밝히기 위해 웅덩이 심장부로 향한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "지옥 연꽃 웅덩이에 도달하자 매캐한 유황 연기가 시야를 가린다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "구원자가 이상하다는 소문을 듣고 약을 드린 게 마음에 걸려 뒤쫓아왔어요."
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리 배 속에서도 기생충이 꿈틀대고 있다. 이 웅덩이에 답이 있을 거다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…속이 끊어질 듯 아파."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "웅덩이 입구 주변에 옥빛 꽃잎들이 흩뿌려져 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "유황 열기 구덩이에서 얻었던 옥빛 연꽃 모양 약병… 그게 다 알을 담은 용기였어요."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 살려고 마신 약이 기생충을 심는 그릇이었다니."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "약병을 제단 불길에 태우면 독성을 끊어낼 수 있을지도 몰라."
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "…배 속이 또 뒤틀려."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "웅덩이 주변 돌벽에 형광빛 물질이 찐득하게 들러붙어 있다."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "통곡의 뼈 골짜기에서 발견했던 형광빛 기생충 껍질… 여기서 허물을 벗고 자란 거였군요."
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "보스가 키워낸 벌레들이 지옥 전체로 퍼져나가고 있었던 거다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…소름이 돋아서 버틸 수 없어."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "웅덩이 깊은 곳에서 수천 개의 기묘한 눈동자가 꿈틀거리는 소리가 들린다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "검은 연못 강가에서 주운 노란 눈알 장신구… 그건 보스의 신체 일부였어요!"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "기생충을 조종하는 끔찍한 본체가 바로 이 앞에 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…숨이 턱 막힌다."
					},
					"speaker": "character_4"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "마법 대륙 학자들이 내 불사 연구를 부수고 기생충 항아리를 지옥에 던졌다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "너희처럼 튼튼한 몸이야말로 내 기생충을 영원히 키워낼 최상의 둥지란 말이다!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "가지고 있던 연꽃 약병을 제단의 불길 속으로 던진다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "안 돼! 내 약병이… 내 아이들의 근원이 태워진다!"
					}
				},
				{
					"content": {
						"korean": "약병이 태워지자 배 속 기생충들이 비명을 지르며 잿더미로 변해 시스티스는 소멸했다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "기생충이 잿더미가 되었어요! 드디어 고통에서 벗어났습니다!"
					},
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유황 웅덩이 위, 옥빛 상반신의 구원자가 자애로운 미소를 지으며 서 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥의 불길 속에서 고통받는 자들아, 내가 맑은 약으로 치료해 주마."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "연꽃 뒤편으로 수천 개의 노란 눈알과 이빨 구멍이 열리며 얼굴이 비틀린다."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "배 속에서 내 아이들이 움직이는 게 느껴지니? 이제 네 몸이 내 둥지야!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "자홍색 붉은 제단에서 본 이빨 자국 잔도 너의 흉측한 입이 물어뜯은 흔적이었구나!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…저 징그러운 구멍들이 날 노려봐."
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "너희의 튼튼한 몸은 이제 온전히 내 아이들의 둥지가 될 것이다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 기생충에게 몸을 빼앗기지 않았다. 다시 맞선다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"약병이 잿더미가 되자, 배를 쥐어짜던 기생충의 박동이 씻은 듯 사라졌다.",
			"구원자라 불리던 연금술사의 제단은 유황 연기 속으로 무너져 내렸다.",
			"마시지 말았어야 할 약의 유혹은 끝났고, 우리는 마침내 몸과 영혼을 되찾았다."
		]
	}
} as const;
