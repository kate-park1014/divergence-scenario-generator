export const scenario_hell_vane_35_05 = {
	"scenario_id": "hell_vane_35_05",
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
		"pool_id": "pool_SoulBroker_Vane_V1"
	},
	"epilogue": {
		"korean": [
			"핏빛 도장이 찍히자, 거대한 영혼 차용증이 사그라들며 빛으로 산산이 부서졌다.",
			"은행 금고를 채웠던 수많은 영혼 보관함들이 제주인을 찾아 지옥 하늘로 올라갔다.",
			"동료의 눈동자에 잃어버렸던 온기와 기억이 돌아왔다.",
			"계약은 파기되었다. 우리는 마침내 영혼의 빚을 전부 청산했다."
		]
	},
	"prologue": {
		"korean": [
			"지옥 영혼 은행의 가장 깊은 금고.",
			"부풀어 오른 계약서와 영혼 보관함들이 거대한 탑을 이루고 있었다.",
			"마지막 서류 작업이 끝나면 지옥 전체가 누군가의 담보로 넘어간다.",
			"핏빛 영혼 차용증을 집어든 손끝이 미세하게 떨렸다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 안개가 감도는 영혼 은행 금고 중심부에 발을 들였다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…기가 막히는 풍경이네."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 차용증을 그냥 찢어서 없애버리면 안 되는 거야?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "절대 안 돼! 차용증을 찢으면 이자가 복리로 붙어서 영혼이 완전히 파괴돼."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 핏빛 도장을 차용증에 찍어야만 베인의 무단 담보 계약을 파기할 수 있어."
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그 도장으로 베인의 담보권을 무효로 만들어야겠군."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "금고 복도를 따라 얽혀 있는 형광 앰버색 마력 사슬이 불길하게 요동쳤다."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…뼛속까지 기운이 깎여 나간다."
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 사슬들... 타인의 영혼을 가둔 게 아니었어."
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "베인 자신의 영혼을 묶어두던 사슬 결계였구나."
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "맞아. 베인은 스스로의 영혼을 쪼개어 지옥과 담보 거래를 했던 거야."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "금고 중앙 서류대 위에 핏빛 서명용 잉크병이 덩그러니 놓여 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "…이 불쾌한 냄새는 뭐지."
					}
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 잉크병의 각인... 1번 방 회수소 입구에서 봤던 마법진과 똑같아."
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대마법재판관의 옛 이름이 각인되어 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "베인이 바로 과거 악마와 영혼 거래를 했던 대마법재판관 본인이었던 거야."
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가장 거대한 영혼 궤짝들이 굳게 닫힌 금고 문 앞을 막아섰다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이제 돌아갈 길은 없어."
					},
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "궤짝에 붙은 금색 영인 스티커를 봐. 타인 추적용이 아니었어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "베인 자신의 쪼개진 영혼 파편을 전부 수거했음을 증명하는 표식이었군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "자, 이 핏빛 도장을 가져가! 문 뒤에 베인이 기다리고 있어."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "베인에게 마지막 청구서를 집행할 때가 왔다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "지금이야! 핏빛 영혼 차용증에 핏빛 도장을 찍어!"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너의 무단 담보 계약은 파기되었다, 베인!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "내... 내 완벽한 영혼 장부가... 이렇게 파기되다니...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정식 도장이 찍히자, 억류되었던 동료의 영혼과 기억이 원래대로 되돌아왔다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "마침내 잃어버렸던 동료의 기억과 영혼을 완전히 되찾았어."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "금고 최심부. 턱시도 차림의 영혼 중개인 베인이 천천히 돌아섰다."
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서류 작업은 끝났다. 내가 지금까지 회수한 영혼 보관함들의 이름... 전부 내 이름이었거든."
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "지옥이 나한테 청구한 이자는 다 갚았으니, 이제 지옥 전체가 내 청구서를 지불할 차례다!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "마도구 리볼버를 발사할 때마다 담보로 바쳤던 네 영혼과 기억을 쥐어짜고 있었으면서!"
					}
				},
				{
					"content": {
						"korean": "진실을 알았다고 한들, 지옥의 이자로 부풀어 오른 내 영혼 마력을 당해낼 수 있겠나?"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…더는 안 속아."
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "말했잖나. 너희 영혼은 내 서류 장부를 완성할 마지막 도장일 뿐이라고."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…차용증은 아직 우리 손에 있다. 다시 일어서라!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
