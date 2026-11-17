export const scenario_hell_soterion_31_04 = {
	"scenario_id": "hell_soterion_31_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		},
		"brim": {
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
						"korean": "검붉은 용암이 솟구치는 분향소 한가운데 거대한 제단 석상이 웅크리고 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…석상 가슴에 오팔 열쇠를 꽂는 정교한 구멍이 파여 있어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "brim",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저곳이 마지막 해제 장치라네. 열쇠를 꽂으면 신들의 죄악을 얽맨 봉인이 비로소 풀리지."
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "열기 때문에 온몸이 타들어 가는 것 같아."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "멈춰! 절대로 그 가슴에 열쇠를 꽂으면 안 돼!"
					},
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "신더? 갑자기 나타나서 무슨 소리를 하는 거야?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 가슴의 장치는 봉인을 푸는 게 아니야! 열쇠를 꽂는 순간 작동하는 희생양 폭탄이라고!"
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…폭탄이라고? 소름이 돋는군."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cinder",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "석상의 12개 날개 사이를 잘 봐! 신들의 금기 주술 낙인이 새겨진 오팔 억제 장치가 보여?"
					},
					"speaker": "cinder",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "정말이야… 날개 안쪽에 붉게 빛나는 금기 주술 낙인이 촘촘히 파여 있어."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "속지 말게! 저건 천상이 비리를 숨기기 위해 신더를 시켜 거짓 공포를 심는 것뿐이야!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "누구 말이 진실인지 머리가 어지럽다."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "망설일 시간이 없네! 오팔 심판 열쇠를 꽂지 않으면 신들의 죄악 장부도 영원히 묻히고 말아!"
					}
				},
				{
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "안 돼! 제발 내 말을 믿어줘! 꽂는 순간 전부 끝장이라고!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비리를 고발하고 진실을 밝히려면… 이 열쇠를 돌릴 수밖에 없어."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "석상 가슴에 열쇠가 맞춰지자, 분향소 전체가 불길하게 진동하기 시작한다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제단의 오팔 억제 장치가 각성하며 붉은 경계의 기운이 뿜어져 나온다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 신들의 금기 장치에 손을 대다니! 천상의 비수를 건드린 죄, 여기서 세척해주마!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 열쇠는 돌아갔다. 더는 아무도 날 막을 수 없다!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 희생양 폭탄의 시한바늘을 너희 손으로 직접 눌렀구나…!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "폭탄이라니… 설마 {random_boss}의 말도, 신더의 경고도 전부 사실이었던 건가?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "석상 가슴에서 붉은 불꽃이 일렁이며 폭발의 카운트다운이 시작된다."
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "천상의 비밀을 함부로 다룬 대가는 오직 사멸뿐이다."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 무너질 순 없어. 폭발의 기운을 어떻게든 저지해야 해."
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"용암 분향소의 열기가 숨을 턱턱 막아선다.",
			"제단 중앙에 우뚝 선 소테리온 석상에는 붉은빛이 불길하게 감돌고 있었다.",
			"신들의 죄악을 밝히기 위한 마지막 오팔 심판 열쇠.",
			"그러나 그 열쇠 구멍 너머에는 구원이 아닌 파멸의 폭탄이 기다리고 있었다."
		]
	}
} as const;
