export const scenario_desert_kaelith_44_05 = {
	"scenario_id": "desert_kaelith_44_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "pool_MoltenGlass_Kaelith_V1"
	},
	"prologue": {
		"korean": [
			"사막의 탈출로를 막아선 마지막 장소, 이글거리는 제단.",
			"사막 전체를 삼키려는 지옥 같은 열기가 이곳에서 뿜어져 나온다.",
			"모든 비극의 원인인 유리 검객 카엘리스와의 최후의 결전이 기다린다."
		]
	},
	"epilogue": {
		"korean": [
			"제단을 덮쳤던 지옥 같은 열기가 잦아들자, 사막에 비로소 차가운 바람이 불어왔다.",
			"여정 내내 탐험대를 괴롭히던 지독한 목마름과 타들어 가는 열기도 차츰 가라앉았다.",
			"산산조각 난 유리 조각들은 서서히 모래로 흩어졌고, 마침내 닫혔던 탈출로가 열렸다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "이글거리는 제단 입구. 사막 전체를 말려버릴 듯한 뜨거운 열기가 번져온다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "kasai",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "사막을 탈출하려다 카엘리스에게 붙잡혔어! 저자가 제단을 태우고 있다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "제단 위에서 뿜어져 나오는 열기를 멈춰야 사막을 나갈 수 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…지면이 너무 뜨거워서 발이 타들어 가는 것 같아."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바닥에 검게 그을린 유리 파편들이 흩어져 있다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건 버려진 오아시스에서 카엘리스가 나눠줬다던 유리 장신구 파편이다."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "장신구에 적신 피로 사람들의 온도를 빨아들여 열기를 키우고 있었던 거다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…소름 돋을 정도로 기괴한 피의 주술이야."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 기둥 곳곳에 굳어 있는 오렌지빛 결정들이 보인다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바람의 골짜기에서 보았던 카엘리스가 휘두른 검에 모래가 녹아생긴 조각이다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "놈의 검술이 열기를 뿜어내 사막의 모래마저 유리로 만들고 있다."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…숨을 쉴 때마다 목구멍이 타는 것 같아."
					},
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제단 문 앞을 검은 슬래그 덩어리들이 막아서고 있다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "태양의 유적에서 보았던 카엘리스의 몸을 덮고 있던 껍질 조각이다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "껍질 틈새로 엄청난 열기가 뿜어져 나오고 있어. 놈이 바로 문 너머에 있다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…뼛속까지 태울 듯한 기척이 느껴져."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희의 뜨거운 피를 바쳐라! 내 검의 끝을 완성할 피를!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…여기서 쓰러질 순 없다. 무기를 다시 잡아라!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카엘리스가 머리를 쾅쾅 내리치자, 검은 껍질이 산산조각 나며 거대한 유리 괴수로 뒤틀린다."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네놈들의 피를 뿌려야 내 검이 비로소 완성된다!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "타인의 피로 완성하려는 금기의 검술을 여기서 끝내겠다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…저 괴수에게서 뿜어지는 열기가 엄청나!"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "태양을 베려 금기의 검술을 휘두른 순간, 온몸이 모래와 함께 유리로 굳어 버렸다."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "피의 온도가 모자랐던 탓이다! 탐험대의 피를 쏟아부어 완벽한 일격을 완성해야 했는데…!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "품에 있던 유리 장신구를 차가운 모래에 깊숙이 묻는다! 열기를 식히면 괴수의 몸도 균열이 갈 것이다!"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "몸이… 차갑게 식어가며 금이 간다… 안 돼, 내 검술이…!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이글거리던 괴수의 유리 몸통이 차갑게 식으며 산산조각 나 스러졌다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "제단의 열기가 꺼졌어! 닫혔던 사막 탈출로가 드디어 열렸다!"
					},
					"speaker": "kasai"
				}
			],
			"id": 15
		}
	]
} as const;
