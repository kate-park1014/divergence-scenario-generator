export const scenario_hell_solatrus_37_01 = {
	"scenario_id": "hell_solatrus_37_01",
	"order": 1,
	"random_boss_title": {
		"korean": "지옥 파수꾼"
	},
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "절벽 아래로 검붉은 용암과 지옥의 기운이 휘몰아친다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "처음 보는 얼굴이군요. 저는 길목을 안내하는 애쉬라고 합니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "억울한 영혼을 가려내어 풀어주는 공정한 사제님을 만나려면 통행증이 필요해요."
					}
				},
				{
					"content": {
						"korean": "절벽 모퉁이에 뼛조각처럼 굳은 순백의 갑주 조각이 떨어져 있군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…바람 소리가 꼭 비명 같아."
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사제님의 영역으로 들어가려면 이 책, 즉 죄인의 명부에 이름을 적어야 합니다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갑주 조각에서 느껴지던 서늘함이 이 명부에서도 똑같이 뿜어져 나오는군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "끌려간 동료를 구하기 위해서라면 망설일 시간이 없다. 명부에 서명하자."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…손가락 끝이 얼어붙는 것 같아."
					}
				}
			]
		},
		{
			"dialogue": [
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "서명을 마쳤으니 길은 열렸습니다. 심판소는 골짜기 너머에 있어요."
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "ash",
					"type": "direction",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "서명하자마자 명부에서 불길한 열기가 뿜어져 나오기 시작했어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…등골이 오싹하네."
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "골짜기로 통하는 관문 앞에서 거대하고 묵직한 갑주 소리가 울려 퍼진다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "지옥의 파수꾼이 무기를 거머쥐고 이쪽을 노려보고 있다."
					}
				},
				{
					"content": {
						"korean": "…공기가 숨막히도록 무거워."
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "명부에 이름을 올린 이상… 징벌의 불길을 피할 수는 없을 것이다…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "동료의 흔적이 유황 연기가 자욱한 골짜기로 이어져 있다. 쫓아가자!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "파수꾼이 무너지며 유황 연기 골짜기로 향하는 대문이 열렸다."
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "사제님의 법칙을 어긴 자에게 허락된 길은 없다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 쓰러질 순 없다. 다시 전열을 가다듬자!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "함부로 죄인의 명부에 서명하다니! 사제님의 징벌을 면치 못하리라!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "억울하게 갇힌 동료를 구하기 전까진 절대로 물러서지 않는다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…적의 기세가 보통이 아니야."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"동료가 지옥의 불길 속으로 억울하게 끌려갔다.",
			"녀석을 구하려면 깊은 곳에 위치한 사제의 심판소로 가야 한다.",
			"지옥 입구의 절벽, 그 험난한 길목에서 첫 발을 내딛는다."
		]
	}
} as const;
