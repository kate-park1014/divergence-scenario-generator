export const scenario_hell_stampy_30_05 = {
	"scenario_id": "hell_stampy_30_05",
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
		"pool_id": "pool_MysticStamp_Stampy_V1"
	},
	"prologue": {
		"korean": [
			"붉은 용암이 이글거리는 지옥 통행 관문.",
			"이승으로 돌아가는 길 바로 앞에서 발목의 쇠사슬이 더욱 무겁게 죄어온다.",
			"무료 도장에 숨겨져 있던 악랄한 계약을 파기해야 할 순간이 왔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "용암 관문 입구에 다다르자, 누군가 서둘러 달려오는 소리가 들린다."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"direction": "up"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 찾았어요! 관문 쪽으로 가셨다는 소식을 듣고 서둘러 쫓아왔습니다."
					}
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "친절하던 안내 정령이 드디어 본색을 드러내고 관통로를 막아섰어요!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "안내 정령의 본색을 확인하고 도장의 계약을 해제하겠다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…발목의 사슬 소리가 거슬리게 울려."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "관문 벽면에 청록빛 도장 자국이 선명하게 박혀 있다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"direction": "up"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "붉은 용암 입구에서 보았던 청록빛 도장 자국이 맞다. 영혼을 지옥에 가두는 징수용 표식이었어."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 도장 자국이 여러분의 영혼을 계속 이 관문에 묶어두고 있었던 거군요!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "도장의 힘이 약해진 틈을 타 관문 안쪽으로 나아간다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…발목이 단단히 굳어버릴 것 같아."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "부서진 인쇄판 뒤편에 미세한 글씨들이 깨깨 들어차 있다."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"direction": "up",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "검은 연기 골짜기에서 확인했던 그 매우 작은 글씨다. 통행료가 무료가 아닌 막대한 수수료 조항이었어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "작은 글씨로 영혼을 가두는 조항을 몰래 숨겨두었다니… 악질이 따로 없네요!"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "속임수로 만들어진 계약이라면 반드시 깨뜨릴 구멍이 있다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…공기 중에 인주 냄새가 맴돌아."
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
						"korean": "거대한 기척과 함께 핫핑크색 종이 조각들이 바람에 사방으로 날린다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"direction": "up",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "해골 통로에서 주웠던 핫핑크색 종이 조각과 같다. 강제 통행세 청구서가 부풀려지고 있다."
					}
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "저 거대한 정령이 청구서를 계속 뿌리며 가로막고 있어요!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "서기 신더의 말대로 계약서를 찾아 찢으면 도장은 무효가 된다. 정면으로 돌파하자."
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…긴장해서 손이 떨려온다."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "청구서를 지불하지 못하면 영혼을 압류하겠다! 깔끔하게 지불해라!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "계약서만 찢어내면 끝난다. 다시 정면으로 맞서겠어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "친절한 안내 정령이 반갑게 응원가를 부르며 탐험대를 맞이한다."
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 오세요, 여행자 여러분! 지옥 통행 도장은 완벽한 무료랍니다!"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "안내 정령의 외형이 부서지며, 마젠타빛 인주를 흘리는 거대한 고무 도장 스탬피가 일어선다."
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무료인 줄 알았죠? 아주 작은 글씨 조항은 안 읽으셨죠? 도장 값과 응원가 값까지 영혼과 골드로 전부 내세요!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "유황 재 광장에서 정령이 떨구고 간 금테 외알 안경의 주인이 너였구나. 말도 안 되는 청구서는 거절한다!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…사슬이 강하게 당겨진다."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나는 원래 마법 대륙 관청에서 합격 도장을 찍던 정령이었다! 수수료 좀 챙겼다고 지옥으로 쫓겨났지!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "통행세를 몽땅 걷어 실적을 채워야 관청으로 복직할 수 있단 말이다!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "서기 신더의 말대로 계약서를 찢으면 도장은 무효다! 이 통행 도장 계약서를 찢어 무효로 만들겠다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼! 내 계약서가… 복직할 실적이 날아가 버린다!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "계약서가 갈갈이 찢어지자 스탬피의 몸체가 부서지고, 발목의 청록빛 쇠사슬이 산산조각 났다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"direction": "up",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ash"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "해냈군요! 묶여 있던 영혼들이 마침내 자유를 찾았어요!"
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"찢겨진 계약서 조각들이 붉은 용암 속으로 소멸했다.",
			"발목을 거칠게 죄어오던 청록빛 쇠사슬이 풀리고 마침내 손끝에 온기가 돌아왔다.",
			"지옥의 악질 징수관 스탬피의 탐욕은 관문에 분노만을 남긴 채 사라졌다.",
			"마침내 이승으로 향하는 관문의 문이 환하게 열렸다."
		]
	}
} as const;
