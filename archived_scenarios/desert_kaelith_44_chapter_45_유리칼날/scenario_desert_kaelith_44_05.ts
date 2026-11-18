export const scenario_desert_kaelith_44_05 = {
	"scenario_id": "desert_kaelith_44_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_MoltenGlass_Kaelith_V1"
	},
	"epilogue": {
		"korean": [
			"카엘리스가 깨져 내리자, 제단을 집어삼키던 잔혹한 지열도 사그라들었다.",
			"장신구의 피를 씻어내자 탐험대를 괴롭히던 지독한 손끝의 열기도 가라앉았다.",
			"시원한 사막의 바람이 불어오고, 마침내 멀리 오아시스의 맑은 수면이 눈앞에 펼쳐졌다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 입구에 다다르자 지열이 신발 바닥을 그을렸다."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스로 가는 길을 뚫는 여러분을 돕기 위해 위험을 무릅쓰고 뒤쫓아왔소."
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "1화 이글거리는 모래 언덕에서 주웠던 붉은 유리 조각이 상인의 장신구 파편이었어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…숨만 쉬어도 목구멍이 타들어 가."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "용암이 흐르는 계단 옆으로 오래된 검집들이 방치되어 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 계단엔 과거 태양에 도전했던 무모한 자들의 흔적이 남아 있소."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "2화 녹아내린 동굴에서 발견한 검게 그을린 칼자루가 바로 그 실패한 검객의 물건이었군."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…열기가 뼛속까지 전해져."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제단 중앙 문 앞, 굳어버린 모래 껍질들이 사방에 흩어져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "3화 붉은 모래 신전에서 만졌던 검은 슬래그 껍질이 이 유리 괴수의 허물이었어."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더는 다가갈 수 없소. 제단 안에서 무운이 함께하기를 바라겠소."
					},
					"speaker": "amir"
				},
				{
					"direction": "down",
					"speaker": "amir",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…저 문 너머에서 불길한 울림이 느껴져."
					},
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "제단 최상층의 문이 열리자 폭풍 같은 모래바람이 불어왔다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제단 안쪽에서 거대한 그림자가 움직인다. 정면으로 뚫고 나간다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…살갗이 맞아 들뜰 정도로 뜨거워."
					},
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "나는 과거 태양을 베려다 금기 검술의 여파로 온몸이 모래와 뜨거운 유리로 굳어 버렸다."
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "피의 온도가 부족해 내 일격이 완성되지 않은 것이라 믿었건만…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유리 장신구를 찬물에 헹궈 묻어 있던 피를 모두 씻어낸다!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "장신구가 피의 온도를 잃자, 카엘리스의 몸에 퍼지던 열기가 차갑게 식어 내린다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "열기가… 식어간다… 내 일격이 차갑게 깨어지는구나…!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "열기를 잃은 카엘리스의 몸이 비명을 지르며 산산이 깨져 내렸다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"direction": "down"
				},
				{
					"content": {
						"korean": "제단의 열기가 멈췄소! 이제 사막 오아시스로 가는 길이 열렸소!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "amir"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막 상인의 모습을 한 카엘리스가 머리를 쾅쾅 때려 껍질을 부수더니, 온몸이 거대한 유리 괴수로 뒤틀린다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네놈들의 피를 뿌려야 내 검이 비로소 완성된다!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "4화 버려진 유리 공방에서 본 호박색 유리 칼날이 놈의 몸에서 돋아난 칼날이었군!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "피를 씻어내어 그 미친 집착을 끝내주마!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 붉게 타오르고 있어."
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "네놈들의 뜨거운 피로 내 완벽한 일격을 완성하리라!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…차갑게 식히지 못하면 승산이 없다. 다시 전열을 가다듬자."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"용융된 태양의 제단. 이글거리는 열기가 사막 전체를 뒤덮고 있었다.",
			"길을 막는 사막 상인의 정체를 확인하고 이곳에서 결전을 치러야 한다.",
			"이 싸움을 끝내지 못하면 사막의 오아시스는 영원히 말라붙을 것이다."
		]
	}
} as const;
