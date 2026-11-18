export const scenario_hell_vane_35_05 = {
	"scenario_id": "hell_vane_35_05",
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
		"pool_id": "pool_SoulBroker_Vane_V1"
	},
	"prologue": {
		"korean": [
			"마라의 영혼이 파열하기 전에 지옥의 가장 깊은 곳으로 향한다.",
			"영혼의 심연. 핏빛 안개가 온 세상을 집어삼키는 장소.",
			"동료를 구하고 지옥 안개의 귀속을 끊어 내기 위한 결전이 시작된다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "핏빛 안개가 휘감기는 영혼의 심연 입구. 바닥이 영혼의 비명으로 흔들린다."
					}
				},
				{
					"action": "enter",
					"speaker": "mara",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "sad",
					"content": {
						"korean": "지옥 안개가 날 이 심연까지 끌어당겼어… 영혼 봉인이 풀린 뒤로 기운을 주체할 수 없어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "마라의 영혼이 완전히 파열하기 전에 주술을 다시 걸어야 해."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…안개가 살가죽을 파고드는 것 같아."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "심연의 바닥마다 라임 빛으로 빛나는 형광 사슬 자국이 길게 남아 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핏빛 안개 언덕에서 봤던 그 사슬 자국이야. 영혼을 강제로 묶는 베인의 사슬 흔적이 확실해."
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 사슬 자국… 내 몸속 영혼 조각을 죌 때마다 통증이 솟구쳐."
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…발 밑에서 불길한 울림이 번진다."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 바닥에 빛을 잃은 오팔빛 보석 조각들이 떨어져 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "통곡의 폐허에서 주운 오팔빛 보석 조각과 같다. 베인의 마법 인이 깃들어 있는 보석이야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 봉인을 자극하는 이 서늘한 기운… 현상금 사냥꾼이 바로 앞에 있어."
					},
					"emotion": "angry",
					"speaker": "mara"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…바람 소리가 총성처럼 귓가를 찢는다."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "심연 문 앞 바닥에 붉은 시가 재가 흩뿌려져 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "낙인 제단에서 주웠던 그 붉은 시가 재다. 은은한 마법 연기가 피어오르는 걸 보니 방금 지나갔어."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "…방아쇠 당기는 소리가 환청처럼 들려."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "마지막 조각만 얻으면 완벽해진다. 영혼을 넘겨라."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…마라의 영혼을 빼앗기게 둘 순 없다. 다시 맞선다!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "격렬한 싸움 끝에 베인의 영혼 보관함들이 깨지며 수많은 영혼이 피어오른다."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "내가 거둔 영혼은 전부 나였다. 강대한 마법을 얻으려고 금지된 주술로 제 영혼을 여덟 조각으로 쪼개 지옥으로 던졌지."
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "이제 하나 남았다. 마지막 조각은… 네 안에 있다!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "mara",
					"duration_ms": 500,
					"type": "direction",
					"direction": "down"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "고대 주술로 마라에게 영혼 봉인을 다시 건다! 영혼 조각을 고정하면 너에게 귀속되지 않는다!"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "안 돼… 내 영혼 조각이 봉인되다니! 온전한 나로 돌아갈 수 없다니!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "영혼 봉인 주술이 완충되자 베인은 비명을 지르며 핏빛 안개 속으로 소멸했다."
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "고마워… 영혼의 파열이 멈췄어. 이제 안개에 사로잡히지 않아."
					},
					"type": "speech",
					"speaker": "mara"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "핏빛 안개 속에서 보랏빛 턱시도를 입은 남자가 서 있다. 양손에는 은빛 리볼버 마도구를 들고 있다."
					}
				},
				{
					"content": {
						"korean": "지옥에서 달아난 영혼을 쫓아 거둬들이는 서늘한 현상금 사냥꾼 베인이다. 그 누구도 내 리볼버를 피하지 못하지."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥 회랑의 벽면에 새겨진 은빛 마법진 각인… 네 은빛 리볼버 마도구가 찍어 남긴 문양이었군."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "눈치가 빠르구나. 마라의 몸속에 숨어든 내 마지막 영혼 조각을 내놓아라!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동료를 해치게 둘 순 없다. 무기를 거둬라!"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"마라에게 다시 걸린 영혼 봉인 주술이 마침내 안정을 되찾았다.",
			"핏빛 안개가 걷히고, 탐험대를 옥죄던 지옥 안개의 귀속도 사그라들었다.",
			"영혼이 파열될 뻔했던 긴 위험이 끝나고, 심연에 조용한 바람이 불어왔다."
		]
	}
} as const;
