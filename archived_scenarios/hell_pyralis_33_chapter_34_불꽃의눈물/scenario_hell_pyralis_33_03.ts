export const scenario_hell_pyralis_33_03 = {
	"scenario_id": "hell_pyralis_33_03",
	"order": 3,
	"random_boss_title": {
		"korean": "지옥 흑철 대장장이"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사방이 검은 재로 가득하다. 발을 디딜 때마다 그을음이 피어오른다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "soot",
					"type": "direction",
					"direction": "down",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "soot",
					"emotion": "base",
					"content": {
						"korean": "저는 골짜기 유랑자 그을음(soot)이라고 합니다. 고대 거울을 찾아 가시는 길이지요?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 사나운 짐승이 떨어뜨린 자수정빛 형광 깃털입니다. 불길 속에 기묘한 애틋함이 섞여 있어요."
					},
					"speaker": "soot",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "짐승의 흔적을 따라가면서 고대 거울의 위치를 확인해야겠어."
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…발밑에서 매캐한 재가 피어올라."
					},
					"emotion": "sad"
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
					"content": {
						"korean": "재에 파묻힌 옛 이정표가 훼손되어 갈 길을 막고 있다."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"speaker": "soot",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 깃털이 가리키는 방향에 오래된 거울의 터가 남아 있을 겁니다."
					},
					"type": "speech",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "돌아가는 길은 없다. 정면의 재를 치우고 전진하자."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…숨을 쉴 때마다 목이 매캐하네."
					},
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "붉은 용암천 건너편으로 자수정빛 불꽃 기둥이 솟구친다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "soot",
					"action": "enter"
				},
				{
					"content": {
						"korean": "골짜기 상인들 사이엔 짐승의 불꽃 속에서 어린아이의 눈물 냄새가 섞여 나온다는 소문이 돌더군요."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "포효하는 짐승의 불길에 눈물 냄새라니, 대체 무슨 사연이 숨겨진 거지?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람 끝에 희미하고 슬픈 향이 묻어나."
					},
					"emotion": "sad",
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
						"korean": "골짜기 안쪽에서 묵직한 쇠망치 소리와 함께 뜨거운 열기가 울려 퍼진다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 분노에 찬 기세로 육중한 무기를 휘두르며 다가오고 있어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "…등 뒤로 소름 끼치는 열기가 밀려온다."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "검은 재가 날리는 모체 대장간 앞, 거대한 흑철 망치를 든 대장장이가 막아서고 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희 같은 무모한 탐험가들이 발을 들이밀어 이 골짜기를 망치고 있다! 더는 못 지나간다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "동료들을 구하기 위해 고대 거울을 찾아야 한다. 물러설 수 없다!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…열기가 피부를 쨀 것처럼 뜨거워."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "망치질 몇 번도 견디지 못하면서 짐승을 상대하겠다고? 당장 돌아가라!"
					}
				},
				{
					"content": {
						"korean": "…여기서 무너질 순 없다. 다시 전열을 가다듬자."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 무모한 게 아니라 진짜 각오를 품은 자들이었나…"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "소문대로 그 짐승의 불꽃 속에 어린아이의 눈물 냄새가 난다는 말도 사실일지 모르겠군…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대장장이가 남긴 단서에 따르면, 거울에 대한 비밀은 흑요석 제단에 있겠어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "대장장이가 내려놓은 지도 조각이 흑요석 제단 쪽을 가리키고 있습니다."
					}
				},
				{
					"type": "direction",
					"speaker": "soot",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"direction": "down",
					"action": "enter"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "서둘러 흑요석 제단으로 이동해요. 그곳에서 탈출의 진실을 확인해야 합니다!"
					},
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"막힌 통로를 뒤로하고 검은 재의 골짜기로 들어선다.",
			"목표는 이 깊은 곳에 잠든 고대 거울을 찾는 것.",
			"하지만 재에 파묻힌 골짜기에는 거친 열기와 경고가 기다리고 있었다."
		]
	}
} as const;
