export const scenario_desert_opalis_43_05 = {
	"scenario_id": "desert_opalis_43_05",
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
		"pool_id": "pool_GlassMirage_Opalis_V1"
	},
	"prologue": {
		"korean": [
			"오팔 제단의 깊은 곳에서 태엽 소리가 울려 퍼진다.",
			"성녀 오팔리스를 구하고 오아시스를 살리겠다는 희망.",
			"그러나 제단 중심부에는 100년 동안 숨겨진 잔인한 진실이 기다리고 있었다.",
			"헛된 승리의 잔재가 사막의 모래 속에 흩어진다."
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
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오팔 빛깔의 제단 중심부로 들어서자 멈추지 않는 톱니바퀴 소리가 귀를 찢는다."
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "협곡에서 본 글귀는 딸을 살리는 주술이 아니었어. 태엽을 멈추지 않으려는 대장장이의 거짓말이었다니…"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…뼛속까지 소름이 돋아."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그렇다면 우리가 지금까지 구하려 했던 성녀의 정체는 대체 뭐지?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 기둥마다 붉은 마른 핏자국과 부서진 칼날들이 톱니에 끼여 있다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "유적의 톱니에 끼어있던 핏자국들… 이곳으로 끌려온 나그네들의 생기였어."
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "인형의 태엽을 돌리기 위해 사람들의 목숨을 바쳐온 거였군."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "…숨이 턱 막히는 기분이야."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "아미르가 굳어진 표정으로 제단 바닥의 문양을 바라보며 주저앉는다."
					}
				},
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 가문의 문양으로 수호병들을 속이고 거짓 구원법을 전했어. 다 마을을 살리려는 줄 알았는데… 전부 무의미했어!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "결국 우리 모두 거짓된 신기루에 놀아난 거였어."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…허탈해서 말도 안 나와."
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오팔 제단 가장 깊은 곳, 거대한 은빛 모래시계가 강제로 태엽을 몰아치고 있다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이제 돌이킬 수 없어. 저 보스를 멈추지 않으면 사막 전체의 생기가 전부 쥐어짜질 거야!"
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상의 희생은 없다. 이 비극을 여기서 끝내겠어."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손끝이 차갑게 떨린다."
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "찬란한 오팔빛을 내뿜으며 성녀 오팔리스가 제단 위로 떠오른다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "조금만... 아주 조금만 더 모으면 주인님과 아가씨가 눈을 뜨실 텐데... 왜 제 손길을 거절하시나요?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "성녀 오팔리스! 그 헛된 집착을 당장 멈춰라!"
					}
				},
				{
					"content": {
						"korean": "모래를 조금만 더 채우게 해주세요... 주인님이 절 버리고 갔을 리 없잖아요!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오팔리스의 마력이 탐험대의 생기를 거칠게 앗아간다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주인님을 위해... 모래를 더 바치세요..."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 쓰러질 수는 없다… 태엽을 멈춰야 해!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "성녀의 오팔 피부가 비명과 함께 산산조각 나며 찌그러진 모래시계 인형의 실체가 드러난다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "깨진 껍데기 아래 100년 전 대장장이의 각인… 주인과 딸은 이미 오래전에 죽었어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제발... 조금만 더... 모래를..."
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대가 은빛 모래시계의 태엽을 멈추자 오팔리스는 조용히 안식을 찾는다."
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "오아시스의 신기루가 사라지고 있어… 남은 건 메마른 황무지뿐이야."
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극은 끝났지만… 구원받은 것은 아무것도 없었구나."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"은빛 모래시계가 멈추자, 오아시스의 환영은 모래바람 속으로 흔적도 없이 사라졌다.",
			"성녀도, 생명수도 존재하지 않았다. 남은 것은 차가운 찌그러진 태엽 조각과 메마른 황무지뿐이었다.",
			"구원받은 것은 아무것도 없었다. 헛된 집착이 만들어낸 신기루였을 뿐.",
			"사막의 바람이 거칠게 불어와 멈춰버린 태엽 인형을 차갑게 덮었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
