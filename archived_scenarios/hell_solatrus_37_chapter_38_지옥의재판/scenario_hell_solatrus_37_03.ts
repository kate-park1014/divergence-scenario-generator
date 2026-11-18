export const scenario_hell_solatrus_37_03 = {
	"scenario_id": "hell_solatrus_37_03",
	"order": 3,
	"random_boss_title": {
		"korean": "불꽃 아포스톨"
	},
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "잿더미가 흩날리는 신전 폐허 한구석에서 한 학자가 고서적을 들춰보고 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "mara",
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
					"speaker": "mara",
					"content": {
						"korean": "저는 사제의 과거를 조사하는 학자 마라예요. 기록을 찾아 이 폐허에 왔어요."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우리도 사제에 대한 소문의 진상을 확인하러 왔다."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…잿가루 때문에 공기가 매캐해."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
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
						"korean": "이 고서를 보세요. 과거 마법 대륙의 한 마을이 심판의 불에 통째로 잿더미가 됐대요."
					},
					"speaker": "mara",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마을 하나를 태워버린 판결이라면 내린 사제의 이름도 남아 있겠군."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상하게도 판결을 내린 사제의 이름 부분만 고의로 지워져 있어요."
					},
					"speaker": "mara",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "…불길한 진실이 숨겨진 게 틀림없어."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "신전 구석의 무너진 돌더미 사이에 붉게 빛나는 깃발 하나가 박혀 있다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잿더미 속에서 루비빛 혈염 깃발을 발견했다."
					}
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳에 다른 기록이 있는지 먼저 가서 찾아볼게요!"
					},
					"speaker": "mara"
				},
				{
					"type": "direction",
					"direction": "up",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "mara"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…저 깃발에서 강한 열기가 느껴져."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신전 안쪽에서 타오르는 열기와 함께 위압적인 불길의 기척이 밀려온다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "위험한 기록에 접근하지 말라는 사나운 경고 소리가 울리고 있다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…피부가 바짝 타들어 가는 것 같아."
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "기록을 찾아내 봤자… 사제의 징벌을 멈출 수는 없다…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 적 옆에서 죄인의 명부를 파괴해야 징벌이 멈춘다는 문서를 찾았다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "동료가 갇힌 혈염의 제단으로 가서 명부를 파괴하자."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이제 다음 장소로 서둘러 가자."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들, 지옥의 불꽃 속에서 한 포기 재가 되어라!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이대로 물러서지 않는다. 다시 전열을 가다듬자."
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "금기된 기록을 탐하는 자들아! 더 이상 사제님의 성역을 더럽히지 마라!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 진실을 확인하고 동료를 구하겠다. 비켜라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 순 없어."
					},
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"소문의 진상을 쫓아 다다른 잿더미 신전 폐허.",
			"그곳에는 잊힌 과거의 기록과 위험한 기척이 숨쉬고 있었다.",
			"사제의 오래된 비밀에 다가갈수록 지옥의 불꽃이 드세진다."
		]
	}
} as const;
