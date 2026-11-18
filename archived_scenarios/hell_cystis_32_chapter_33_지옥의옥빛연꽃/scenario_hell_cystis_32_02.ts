export const scenario_hell_cystis_32_02 = {
	"scenario_id": "hell_cystis_32_02",
	"order": 2,
	"random_boss_title": {
		"korean": "뼈 사냥꾼"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "통곡의 뼈 골짜기. 자욱한 유황 연기 사이로 누군가 접근한다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "brim",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 이 골짜기를 지키는 정찰꾼 브림이오. 쓰러진 동료를 메고 어디로 가는 거요?"
					},
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "구원자가 준 옥빛 연꽃 약을 마셨는데 배 속이 끓듯 타오르고 있소."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "brim",
					"content": {
						"korean": "그 약을 마셨다고? 그걸 삼킨 이들은 배를 움켜쥐며 모두 사라졌소!"
					}
				},
				{
					"content": {
						"korean": "…손끝까지 저릿한 통증이 뻗어오네."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뼈해골 더미 사이에 형광빛 껍질 조각이 떨어져 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "바닥에 떨어진 이 기괴하게 빛나는 껍질은 대체 뭐지?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "구원자라는 자가 약을 전해준 뒤부터 골짜기에 이런 껍질이 뒹굴기 시작했소."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…바닥에서 이상한 냄새가 나."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "brim",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "배 속의 독성을 억누르려면 연꽃 약병을 유황 불길에 던져 태워야 한다 들었소."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "불길에 던지면 독성이 함께 타버린단 뜻이군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "약병을 찾으면 곧바로 태워버리시오. 난 앞쪽을 더 살펴보겠소."
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "…저 앞쪽 협곡에서 사나운 무기 소리가 들려."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "협곡 깊은 곳에서 무거운 철퇴 긁히는 소리가 울려 퍼진다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "구원자를 맹신하는 자들이 길을 막고 기다리는 모양이다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…바람 소리마저 거칠어지는군."
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "은혜를 모르는 쥐새끼들! 이 골짜기에 뼈를 묻어라!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이대로 물러설 순 없다. 다시 돌파한다!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 불사신이 될 기회를 너희가 망쳤다…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "배 속에서 꿈틀거리는 것이 영생일 리 없다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim",
					"direction": "down"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "무사했군요! 기록을 조사하는 마라 씨가 검은 연못 강가에서 기다리고 있소."
					}
				},
				{
					"content": {
						"korean": "마라를 만나서 이 약의 정체를 확실히 파헤쳐야겠어."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 통증을 억누르며 소문이 적힌 문서를 찾아 검은 연못 강가로 향했다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뼈 장구를 갖춰 입은 무리가 좁은 길목을 거칠게 차단한다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "구원자님의 은혜로 고통을 잊었거늘, 감히 맑은 약을 의심하느냐!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고통을 덜어주기는커녕 배 속을 파먹고 있다! 당장 길을 비켜라!"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…대화는 통하지 않겠어."
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 열기에 쓰러진 동료를 업고 뼈 골짜기에 다다랐다.",
			"구원자가 나눠준 연꽃 약을 마신 뒤, 배 속은 끓어오르기 시작했다.",
			"자비로운 약 뒤에 숨겨진 기괴한 소문이 탐험대의 발목을 잡는다."
		]
	}
} as const;
