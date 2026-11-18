export const scenario_desert_vane_45_02 = {
	"scenario_id": "desert_vane_45_02",
	"order": 2,
	"random_boss_title": {
		"korean": "사막 도살자"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
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
					"content": {
						"korean": "검은 모래가 바람에 날려 사방을 가리는 협곡 입구."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"direction": "up",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 이 협곡에서 철을 제련하는 대장장이 페로라네. 약초를 찾으러 온 건가?"
					},
					"speaker": "ferro"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동료를 살릴 약초가 필요하다. 아까 마신 오아시스 물 때문에 손끝이 점점 저려오는군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…바람마저 검은 모래를 품고 있네."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"direction": "up",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정보상 베인이 검객들에게 새 신분을 주고 오아시스로 보낸다는 소문이 돌았지."
					},
					"speaker": "ferro"
				},
				{
					"content": {
						"korean": "협곡 바닥 틈새에 검게 빛나는 흑요석 가시 조각이 떨어져 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "ferro",
					"emotion": "sad",
					"content": {
						"korean": "하지만 베인에게 신분증을 받은 검객들은 무기만 남긴 채 전부 사라졌다네."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "신분을 얻은 검객들이 왜 무기만 남기고 사라졌단 말인가."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…불길한 정적이 흐른다."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ferro",
					"direction": "up",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 깊은 곳은 위험하네. 베인의 진실을 덮으려는 칼날들이 서성이고 있어."
					},
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "약초도 구하고 검객들에게 무슨 일이 있었는지 알아내기 전엔 물러설 수 없다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "ferro"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…발밑의 검은 모래가 푹푹 꺼지네."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "협곡의 좁은 바위 사이로 피비린내 섞인 바람이 뿜어져 나온다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누군가가 진실을 덮기 위해 길목을 지키고 있는 기척이 느껴진다."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "…살기가 뼛속까지 시려온다."
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 덤벼봤자 소용없다… 너희도 결국 빚을 지고 영혼을 빼앗길 테니…"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "검객들을 집어삼킨 계약과 베인의 진실을 반드시 파헤치겠다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 자의 품에서 메마른 바람 은신처로 연결된 통로 지도가 떨어졌다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "협곡 가장 안쪽 막다른 길에서 거대한 무기를 든 자가 길을 막아선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "베인 님의 비밀에 다가가려는 자는 여기서 모래에 묻힐 것이다!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 짓을 저지르고 있는지 직접 확인하겠다. 길을 열어라!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…이 무거운 압박감, 숨이 막혀."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "오아시스의 비밀에 접근한 대가는 네놈들의 목숨이다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…동료를 위해서라도 여기서 끝낼 수는 없다. 다시 도전하겠다."
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"동료의 독을 해독할 약초를 찾아 검은 모래 협곡으로 들어선다.",
			"검은 모래 아래에는 오아시스의 은밀한 소문과 소름 돋는 진실이 묻혀 있다.",
			"칼날을 제련하는 쇠소리 너머로 무거운 살기가 다가온다."
		]
	}
} as const;
