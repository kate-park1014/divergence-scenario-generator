export const scenario_desert_carnivex_42_03 = {
	"scenario_id": "desert_carnivex_42_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"모래 지하 감옥은 골수가 녹아내리는 악취로 가득 차 있었다.",
			"유물 대장장이 페로가 저 아래 갇혀 있다.",
			"몸이 굳기 전에 청동 열쇠로 치료 궤를 열어야 한다.",
			"하지만 궤 속에 담긴 것이 과연 구원일까, 아니면 더 깊은 덫일까."
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
					"content": {
						"korean": "사막 아래 감옥으로 내려서자 차가운 기운과 호박색 빛이 번져온다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기 감옥 구석에 철창이 보여. 페로가 갇혀 있다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ferro"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "오지 마… 궤를 함부로 건드려선 안 돼…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "청동 열쇠가 있어. 치료 궤를 열어 당신을 구하겠어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "…이 손길을 멈출 수 없다면, 적어도 각오는 해라."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…골수가 녹아내리는 듯한 악취다."
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ferro",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "저 칼날 받침대를 봐라. 명검 3자루가 진액에 녹아 붙어있어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "강철마저 녹여버릴 정도의 독액이라니."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "골수를 녹이는 건 모래뿐만이 아니야… 이 감옥 전체에 흐르는 기운이다."
					},
					"speaker": "ferro",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…뼛속까지 소름이 돋는군."
					},
					"speaker": "character_2",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ferro",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "벽화를 봐. 거대한 괴물의 껍질 틈에 호박색 즙을 붓자 갑각이 녹아내리고 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "호박색 즙이 그 괴물의 갑각을 무너뜨리는 단서가 될 수도 있겠어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "하지만 해독제 없이 마셨다간 껍질이 녹기 전에 내 골수가 먼저 전멸할 거다."
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…시간이 흐를수록 몸이 타들어간다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ferro",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 몸이 굳어가고 있어… 어서 청동 열쇠로 궤를 열어라!"
					},
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "청동 열쇠를 열쇠구멍에 쑤셔 넣었다!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "궤가 열리며 호박색 증기가 폭발하듯 뿜어져 나온다!"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 증기를 마시자마자 오른팔의 뼈마디가 백골로 변해가!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…팔이 하얗게 굳어버렸어."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "백골이 된 무력한 팔로는 내 죗값을 물을 수 없다."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 골수가 남아있는 한 다시 일어선다."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "괴물은 모래더미로 무너져 내렸다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "증기 덕분에 내 몸의 굳어짐은 멈췄지만… 네 팔이 백골이 되었구나."
					},
					"speaker": "ferro"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 4시간의 카운트다운은 끝나지 않았다. 해독제를 찾아 더 깊은 곳으로 간다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "오른팔은 하얗게 탈색되었으나, 지하의 덫을 뚫은 탐험대는 앞으로 나아간다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "감옥을 지키는 정체 모를 그림자가 기어 올라온다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감옥 간수장의 영역을 어지럽힌 젗을 사하노라. 백골이 되어 침묵하라!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오른팔이 백골로 변했어도, 여기서 쓰러질 수는 없다!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
