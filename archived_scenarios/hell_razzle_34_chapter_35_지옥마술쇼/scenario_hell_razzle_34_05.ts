export const scenario_hell_razzle_34_05 = {
	"scenario_id": "hell_razzle_34_05",
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
		"pool_id": "pool_Jester_Razzle_V1"
	},
	"prologue": {
		"korean": [
			"지옥 서커스의 중앙 무대, 3미터의 거대한 마술 상자가 우뚝 서 있다.",
			"종소리가 울릴 때마다 누군가의 비명이 톱니 바퀴 속으로 삼켜졌다.",
			"구원이라는 이름으로 영혼을 갈아 넣은 미친 피에로 라즐.",
			"이제 종을 깨뜨려 무대 위의 환영을 부술 때가 왔다."
		]
	},
	"epilogue": {
		"korean": [
			"은빛 마술 종이 바닥에 깨지자 거대한 가시 톱니가 멈추고 환영이 부서졌다.",
			"상자에 갇혀 도살당했던 수많은 영혼들이 빛이 되어 하늘로 날아올랐다.",
			"광기 어린 피에로 라즐의 서커스 무대는 피와 잿더미 속에 막을 내렸다.",
			"서커스장을 감싸던 유황 연기 속에서 비로소 진짜 구원의 바람이 불어왔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "중앙 무대 한가운데 3미터 높이에 달하는 마술 상자가 거대하게 서 있다."
					}
				},
				{
					"content": {
						"korean": "…무대 바닥이 온통 피 냄새로 진동해."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "저 상자 안에서 톱니 바퀴 갈리는 소리가 들려요… 종을 흔들 때마다 점점 빨라졌던 거예요!"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "은빛 마술 종소리가 환영이 아니라 살점 분쇄기를 돌리고 있었군."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "티켓에 적힌 '구원'도, 마술사의 무지갯빛 비단도 전부… 갈려 나간 사람들의 살점이었어요."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "…소름이 뼛속까지 돋는군."
					}
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "라즐은 도망치려는 관객들의 영혼을 저 톱니 속에 쳐넣고 있었어요!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구원이 아니라 끔찍한 도살극이었어."
					},
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "보석 톱니 바퀴가 기괴한 마찰음을 내며 마술 상자의 문을 억지로 열었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "어? 잠깐만요, 내 몸이… 상자 속으로 끌려 들어가요!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손이 닿지 않아!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "상자 안에 탈출구 같은 건 없어요! 가시 칼날만 빼곡해요!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "종을 흔들면 톱니만 더 빨라져. 다른 방법을 찾아야 해!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가시 톱니가 턱밑까지 다가오고 있어요! 제발 날 구해줘요!"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…더는 지켜보고만 있을 수 없어!"
					},
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "은빛 마술 종을 깨뜨려 환상 장막 자체를 부수는 수밖에 없다!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "낄낄낄! 왜 도망쳐, 왜?! 내가 네 썩은 가죽을 가시로 예쁘게 찔러서 무지갯빛 영혼 비단으로 바꿔준다는데!"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "자, 이 상자 속으로 쏙 들어와! 칼날이 창자를 콕! 콕! 쑤실 때마다 넌 천국에 한 걸음씩 가까워지는 거라고! 히히힉!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "애쉬를 내놓아라, 라즐! 네 미친 마술쇼는 여기서 끝이다!"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "준비하시라, 내 인생 최고의 성불 마술 쇼를!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "히히힉! 톱니 속에서 예쁜 영혼 비단으로 다시 태어나라!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…종을 깨뜨리지 못하면 이 기괴한 환영에서 벗어날 수 없어!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "은빛 마술 종을 바닥에 내던져 산산조각 내자, 마술 상자의 가시 톱니가 터져 나가며 환영이 부서졌다."
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "톱니가… 멈췄어요! 갇혀 있던 영혼들이 풀려나고 있어요!"
					},
					"emotion": "happy",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내… 내 아름다운 영혼 비단 마술이… 잔혹한 현실에 부서지다니…!"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "너의 광기 어린 구원은 처음부터 거짓이었다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "풀려난 영혼들이 빛이 되어 퍼져나가고, 지옥의 서커스는 서서히 무너져 내렸다."
					}
				}
			],
			"id": 15
		}
	]
} as const;
