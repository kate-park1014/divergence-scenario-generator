export const scenario_hell_solatrus_37_05 = {
	"scenario_id": "hell_solatrus_37_05",
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
		"pool_id": "pool_HolyAtonement_Solatrus_V1"
	},
	"epilogue": {
		"korean": [
			"명부가 잿더미로 변하자 심판소를 지배하던 지옥의 불길이 꺼졌다.",
			"1화에서 명부에 새겨졌던 죄인의 굴레도 영혼에서 깨끗이 사라졌다.",
			"사제의 잔혹한 오판은 끝났고, 잡혀 있던 영혼들은 구원을 얻었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심판소의 웅장한 아치문 너머로 신성한 화염과 유황 냄새가 진동한다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "1화에서 통행증인 줄 알고 전했던 책 때문에 저도 사제에게 잡혀 이곳으로 끌려왔어요!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "애쉬와 동료가 잡혀 있군. 당장 구해야 해."
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…화염 열기가 피부를 찌르는 것 같아."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심판소 기둥 아래에 깨진 갑옷 파편이 뒹굴고 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지옥 입구의 절벽에서 본 순백의 갑주 조각… 그건 솔라트루스가 착용하던 신성한 갑옷 일부였어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사제의 신성한 갑옷도 이 지옥의 불에 그을려 붉게 변하고 있어요."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…순백이었던 갑옷이 죄의 색으로 물든 건가."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단으로 가는 길목마다 오팔빛 불꽃이 타오르고 있다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "유황 연기 골짜기에서 봤던 오팔빛 불꽃 잔영… 사제가 죄 없는 영혼들을 불태우고 남긴 흔적이었군."
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저 불꽃은 죄를 짓지 않은 영혼이 태워질 때만 피어난다고 해요."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…억울하게 스러진 영혼들의 비명이 들리는 듯해."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "심판소 안쪽 문에 루비빛 혈염 깃발이 붉게 넘실거린다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "잿더미 신전 폐허에서 찾아낸 루비빛 혈염 깃발… 잘못된 판결로 마을 전체를 태웠던 사제의 상징이야."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 잘못된 판결을 내린 사제가 바로 솔라트루스였던 거다."
					}
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…문 너머에서 거대한 대검이 바닥을 끄는 소리가 울려."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오래전 마법 대륙에서… 내 오판으로 죄 없는 마을 하나를 통째로 태워버렸다."
					}
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 불이 죄인만 태운다는 믿음을 지키려면, 이곳에 오는 모든 자를 죄인으로 만들어 태워야만 했다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리는 죄인이 아니다! 네 사악한 거짓을 담은 죄인의 명부를 파괴한다!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대의 무기가 명부를 파괴하자 영혼들을 묶고 있던 징벌의 불길이 산산조각 난다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아아… 내 가면에 금이 가는구나. 내 오판이, 내 죄가 비로소 드러나는가…"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "가면이 깨진 솔라트루스는 루비빛 눈물을 흘리며 지옥의 불길 속으로 소멸했다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "명부가 파괴되고 사제가 사라졌어요! 갇혀 있던 동료와 영혼들이 풀려났습니다!"
					},
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "웅장한 신성염 속에서 순백 갑옷을 입은 거대한 사제 솔라트루스가 대검을 쥐고 선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "나는 지옥 깊은 곳에서 죄인들을 불로 심판하는 공정한 사제다. 억울한 영혼은 풀어주리라."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "혈염의 제단에 있던 앰버빛 열기의 사슬로 무고한 영혼들을 묶어 둔 자가 공정함을 말하는가!"
					}
				},
				{
					"content": {
						"korean": "죄 없는 자는 없다! 내 불이 태운 자는 모두 죄인이었다… 그래야만 한다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "동료를 구하고, 네 헛된 명부를 파괴하겠다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…무지갯빛 불꽃이 사방으로 피어오르고 있어!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "너희 또한 죄인일 뿐이다. 신성염 속에 영원히 태워지리라."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 쓰러질 수 없다. 동료를 위해 다시 일어선다!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 가장 깊은 곳, 솔라트루스의 심판소에 도달했다.",
			"제단 위에는 억울하게 끌려간 동료와 애쉬가 사슬에 묶여 있다.",
			"명부에 적힌 이름을 모두 불태우겠다는 사제의 심판을 멈춰야 한다."
		]
	}
} as const;
