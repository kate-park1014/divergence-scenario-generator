export const scenario_desert_kaelith_44_02 = {
	"scenario_id": "desert_kaelith_44_02",
	"order": 2,
	"random_boss_title": {
		"korean": "광부"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
						"korean": "무너진 모래 언덕 아래로 검게 그을린 동굴 구멍이 길게 이어져 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"type": "direction",
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
						"korean": "난 이 사막 유적을 탐사하는 듄이라고 해. 입구가 무너져 갇혔는데, 당신들도 길을 찾고 있나?"
					},
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오아시스로 가는 다른 통로를 찾고 있다. 이 동굴 안쪽으로 나갈 수 있나?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "깊은 안쪽에 유적으로 연결된 문이 있어. 혼자보다는 같이 움직이는 편이 안전하겠군."
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…동굴 벽에서 이상한 열기가 뿜어져 나오고 있어."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "바위 틈 사이로 새까맣게 타버린 무언가가 박혀 있다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "벽에 검게 그을린 칼자루가 깊숙이 박혀 있군."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "그 칼자루 근처에서 붉은 장신구를 팔던 상인이 있었다는 소문을 들었어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "붉은 장신구라면 모래 언덕에서 우리가 주웠던 그 물건이다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…손을 대기도 전에 열기가 손가락을 찌르는 것 같아."
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "이 앞이 유적 안쪽인데, 유적을 독점하려는 광부가 통로를 막아서고 있어."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 광부가 상인의 편을 들며 지나가는 사람들을 위협하고 있나 보군."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "난 여기서 유적 벽화를 좀 더 조사할 테니, 조심해서 먼저 넘어가."
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"type": "direction",
					"speaker": "dune",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…어두운 굴 속에서 쇳소리가 나직하게 울린다."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "열기로 일렁이는 통로 너머로 무거운 곡괭이 소리가 사방을 울린다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누군가 유적 출구를 무거운 바위로 막아버리려 하고 있어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 턱턱 막혀 오기 시작해."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "통로 끝에서 정체 모를 자가 거대한 곡괭이를 쥔 채 탐험대를 가로막는다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 유적의 모든 열기와 유물은 내 거다! 그 상인 님의 장신구를 노리는 놈들은 다 매장해주마!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "오아시스로 가는 길을 뚫어야 한다. 싸워서 제압하겠다!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…저 곡괭이 날이 붉게 달아올라 있어!"
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "당장 이 동굴에서 나가지 않으면 뼈도 못 추릴 줄 알아라!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝이 아니다. 전열을 정비해 다시 오겠다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크악… 그 상인은 물건을 사지 않으면 웃으면서 혀를 자르겠다고 위협하던 악마 같은 자였다고…!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 장신구의 주인은 단순한 상인이 아니라 지독한 위협을 가하던 자였군."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "광부가 무너지며 비켜선 길 너머로 붉은 신전의 그늘이 눈에 들어온다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"direction": "down"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "동굴이 붉은 모래 신전으로 이어지는군. 어서 신전의 그늘로 들어가 열기를 피하자."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"모래 언덕이 무너져 내린 뒤, 탐험대는 서늘한 동굴로 발을 들였다.",
			"오아시스로 통하는 다른 길을 찾아 헤매는 그들 앞에 열기에 그을린 유적 동굴이 나타난다.",
			"그 깊은 곳에서 누군가 유적의 열기를 독점하려 길을 가로막고 있었다."
		]
	}
} as const;
