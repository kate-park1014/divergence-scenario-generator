export const scenario_hell_porcellus_36_05 = {
	"scenario_id": "hell_porcellus_36_05",
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
		"pool_id": "pool_SoulVault_Porcellus_V1"
	},
	"prologue": {
		"korean": [
			"지옥 도박판의 가장 깊은 중앙.",
			"잠긴 지옥 문을 열고 탈출하기 위한 마지막 열쇠가 이곳에 있다.",
			"모든 영혼을 건 도박판 위에서, 기괴한 주인이 우리를 기다린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"action": "enter",
					"direction": "up",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "지옥 문이 잠긴 뒤로 걱정돼서 뒤쫓아왔어요. 지옥 길잡이 애쉬입니다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "도박장 중앙에 도달했으니 이제 영혼 동전을 회수할 방법을 찾아야 해."
					}
				},
				{
					"content": {
						"korean": "…지옥 도박판의 공기, 소름 끼치도록 가라앉아 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유황 용암 강가에서 보았던 분홍색 하트 연기가 여기서 뿜어져 나오고 있어."
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"direction": "up",
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞아요! 저 하트 연기는 돼지 저금통 정령이 콧구멍으로 뿜어내는 연기예요!"
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…연기 냄새만 맡아도 머리가 어지러워."
					},
					"emotion": "angry",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "유황 보석 동굴에서 울리던 금속 동전 짤랑이는 소리가 귓가에 선명해."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"direction": "up",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 소리는 돼지 저금통 정령이 발을 움직일 때마다 나는 소리가 확실해요."
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "…가까이 올수록 동맥까지 울리는 기분이야."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "검은 벼랑 기둥에서 주웠던 오팔빛 금속 조각이 바닥에 흩어져 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"direction": "up",
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "저조각들은 돼지 저금통 정령의 몸체 피부 조각이 떨어진 것이 틀림없어요."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "angry",
					"content": {
						"korean": "…놈이 바로 이 앞 도박판 중앙에 있어."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나는 원래 마법 대륙 사원의 헌금 저금통이었다! 헌금을 몰래 내기에 걸다가 신관들에게 들켜 속임수 동전과 함께 이 지옥 구덩이에 던져졌지!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "내 저금통을 영혼 동전으로 꽉 채우는 게 내 유일한 꿈이다! 너희 영혼과 무기도 모조리 내 거란 말이다!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "드록스 씨 말대로 저금통 바닥의 마개를 열어 영혼 동전을 몽땅 빼낸다!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마개가 열렸잖아! 내 영혼 동전들이 쏟아져 나온다, 꿀! 안 돼!"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영혼 동전이 쏟아져 나오자 마법 차단막이 꺼지고 잠겼던 지옥 문이 열렸다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"direction": "up",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "ash",
					"content": {
						"korean": "지옥 문이 마침내 열렸어요! 어서 지상으로 탈출해요!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "꿀꿀! 너희 무기와 영혼도 내 저금통 속에 갇히는 신세가 됐구나!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 영혼을 빼앗기지 않았다. 다시 일어나 저금통을 부순다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "용암 위로 오팔빛 금속 돼지 저금통이 눈물을 글썽이며 떠다닌다."
					}
				},
				{
					"content": {
						"korean": "흑흑, 불쌍한 저를 구해주세요! 지옥에서 나가게 도와주시면 배 속의 동전을 드릴게요, 꿀!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "저금통이 깔깔 웃으며 등덜미 슬릿에서 붉은 도박장 입구에서 본 마젠타색 무지개 광채를 내뿜는다."
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "속았구나! 자, 마지막 판! 앞면이면 내가 이기고, 뒷면이면 너희가 지는 거야. 양면 다 돼지 얼굴이지! 너희 영혼, 내가 다 땄다! 꿀!"
					}
				},
				{
					"content": {
						"korean": "속임수 동전으로 영혼을 빼앗으려 하다니, 무기를 뽑아 당장 제압한다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…더 이상 그 말도 안 되는 내기에 놀아나지 않아!"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"저금통 바닥의 마개가 열리고, 갇혀 있던 영혼 동전들이 쏟아져 내렸다.",
			"슬릿을 막고 있던 마법 차단막이 사라지며, 무겁게 잠겼던 지옥 문이 굉음과 함께 열렸다.",
			"동전을 넣었을 때 뼛속까지 옥죄던 지옥의 저주도 깨끗이 씻겨 내려갔다.",
			"뜨거운 유황 바람을 뒤로한 채, 우리는 마침내 빛이 드는 지상으로 걸어 나갔다."
		]
	}
} as const;
