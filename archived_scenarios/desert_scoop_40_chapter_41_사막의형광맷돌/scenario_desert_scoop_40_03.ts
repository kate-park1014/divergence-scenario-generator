export const scenario_desert_scoop_40_03 = {
	"scenario_id": "desert_scoop_40_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뜨거운 모래언덕 위, 네온빛 파라솔 아래 흩어진 파편들.",
			"피해자로 여겨졌던 상인들의 시럽 병에서 기묘한 독향이 풍긴다.",
			"진실은 점차 가해자와 피해자의 경계를 허물고 있었다.",
			"추적자는 모래 속에 숨겨진 기습의 증거를 향해 발걸음을 옮긴다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "파라솔 앞 모래언덕 위로 네온빛 시럽이 흩뿌려져 있다."
					}
				},
				{
					"content": {
						"korean": "깨진 시럽 병 속에서 괴이한 네온빛 액체가 배어나오고 있어."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 섣불리 만지지 마라. 이건 상인들이 쓴 신경 독약이다."
					},
					"speaker": "jasper",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "피해자라던 상인들이 사전에 독을 준비했었다는 건가."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "jasper",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "시럽 병 잔해에서 성분을 가려냈다. 확실히 선제 공격용 독이야."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "상인들이 사냥감이 아니라 선제 기습을 노린 공격자였군."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…손끝이 차갑게 식어가는 기분이군."
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "형광 파라솔 아래에 찌그러진 마검 집이 떨어져 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "무지개 유리 맷돌 구멍에서 뜨거운 끓는 가루가 새어나온다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "질긴 억지 천으로 맷돌 구멍을 막아 열기 유출을 차단하자."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "구멍은 막았지만, 맷돌 밑바닥을 꼼꼼히 봐라."
					}
				},
				{
					"content": {
						"korean": "무지개 유리 맷돌 밑바닥에 무쌍검성의 아인 문양이 새겨져 있군."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "네온 파라솔 기둥 깊숙이 박힌 독화살 촉 세 개를 찾아냈다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "jasper",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "jasper",
					"content": {
						"korean": "상인들이 발사한 화살이다. 선제 기습의 결정적 증거지."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 조사를 진행하지 마라! 독약 증거 따위 무시하고 떠나라!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "상인들의 음모가 드러나자 길을 가로막는 건가."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 추적자들, 신경 독기에 중독되어 모래 밑에 잠들어라!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "독기에 굴하지 않고 다시 일어서서 증거를 지켜내겠다."
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "증거를 찾아봤자… 이미 일어난 기습을 바꿀 수는 없다…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "독약 병과 화살 촉까지, 선제 공격의 모든 증거를 확보했다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래밭에 남은 단서들이 사건의 진실을 가리키기 시작했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진실을 은폐하려는 자가 무기를 겨눈다."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "독극물의 비밀을 파헤친 죄, 이 모래밭에 묻어주마!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "상인들의 기습 정황을 밝혀내기 위해서라도 물러서지 않는다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
