export const scenario_hell_amnion_38_05 = {
	"scenario_id": "hell_amnion_38_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "pool_SpiritCyst_Amnion_V1"
	},
	"epilogue": {
		"korean": [
			"암니온의 고치가 봉인되자 지옥을 휘감던 붉은 독기가 사그라들었다.",
			"독기에 중독되어 생사를 넘나들던 동료도 마침내 제 호흡을 되찾았다.",
			"주술사들이 버린 잔재는 여전히 용암 바다 밑에 잠겨 있다.",
			"그러나 적어도 오늘, 동료의 목숨을 지켜냈다."
		]
	},
	"prologue": {
		"korean": [
			"용암 바다 한가운데, 붉은 주술 고치가 전자기 광채를 뿜으며 떠 있다.",
			"독기에 중독된 동료에게 남아 있는 시간은 얼마 없다.",
			"구원의 성녀가 잠들었다는 고치 앞에서, 마침내 마지막 선택의 순간이 다가왔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "용암 바다의 열기가 뺨을 태울 듯 밀려온다."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "mara",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유황 연기 골짜기에서 헤어진 뒤로 걱정돼서 용암 바다까지 쫓아왔어요!"
					},
					"speaker": "mara"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기까지 동행해 줘서 고맙다. 저 바다 한가운데 고치가 보인다."
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…열기가 숨을 막히게 해."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "바닥에 떨어진 포자 껍질에서 유황 연기 골짜기 입구에서 맡았던 달콤하고 썩은 향기가 뿜어져 나온다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "골짜기에서 맡았던 썩은 향과 똑같아. 고치에서 흘러나온 게 틀림없다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "mara",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "그 냄새는 꾀어내기 위한 미끼예요. 성녀의 향기가 아닙니다!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "고치 표면에서 방출되는 빛은 검은 용암 절벽 벽면에 남아 있던 붉은 전자기 잔상과 동일하다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "절벽 벽면의 전자기 잔상이 바로 이 고치가 뿜어내던 광채였어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "빛이 일렁일 때마다 안쪽에서 가느다란 손가락들이 껍질을 긁고 있어요!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…소름이 불길처럼 번진다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 용암 호수에서 넘겨받았던 오팔빛 주술 실을 꺼내 든다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "호숫가에서 받은 주술 실이 붉은 고치를 묶어 봉인할 유일한 도구다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…귓가에 기괴한 울림이 스며들어."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고치 표면의 핏물 자국은 잊힌 주술 신전 바닥에서 보았던 핫핑크 빛 흔적과 일치한다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "지옥의 독기에서 절 꺼내 주세요… 불쌍한 영혼들을 돌보는 성녀입니다."
					}
				},
				{
					"content": {
						"korean": "고치를 찢지 않는다. 우리는 동료를 살리고 너를 봉인하러 왔다!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…손끝이 저릴 만큼 붉은 빛이 강해진다."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "마법 대륙의 주술사들이 실패한 주술로 생겨난 우리를 주머니에 가두어 이 용암 바다에 버렸다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "고마워, 포대기를 열어 줘서…! 밖으로 나가 너희 몸을 새 집으로 삼겠다!"
					}
				},
				{
					"content": {
						"korean": "주술 실로 껍질을 죄어 입구를 강하게 매듭짓는다! 매듭이 영혼의 통로를 막아낸다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "안 돼, 비좁은 주머니 속으로 다시 갇힐 순 없어…!"
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "주술 실이 단단히 묶이자 벌어졌던 껍질이 닫히며 기괴한 손들이 주머니 안으로 흘러들어갔다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "mara",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "봉인이 끝났어요! 주술 고치가 용암 바다 아래로 침몰하고 있습니다!"
					},
					"type": "speech",
					"speaker": "mara",
					"emotion": "happy"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "포대기를 찢어라! 새 집이 필요하다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…주술 실을 팽팽하게 고쳐 쥔다. 다시 도전한다!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
