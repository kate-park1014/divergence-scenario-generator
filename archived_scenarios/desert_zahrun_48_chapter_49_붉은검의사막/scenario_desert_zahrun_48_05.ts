export const scenario_desert_zahrun_48_05 = {
	"scenario_id": "desert_zahrun_48_05",
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
		"pool_id": "pool_CaravanUndertaker_Zahrun_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "붉은 모래 언덕 위, 주인을 잃은 수백 자루의 검이 무덤처럼 꽂혀 있다."
					},
					"speaker": "narrator"
				},
				{
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
					"type": "speech",
					"content": {
						"korean": "이곳이 자룬의 거처예요... 오아시스에서 주웠던 그 황동 물병, 기억나세요?"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "물병 바닥의 검은 자국... 사막 전역 검객들의 그림자를 흡수해 억류한 장치였어."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "맞아요! 우리가 물을 마실 때마다 생명과 그림자가 그 안에 갇힌 거였어요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…가슴이 턱 막혀오는군."
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "바위에 묶인 쪽빛 깃발 끝에 검은 그림자 가루가 묻어있어요."
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 깃발들이 희생된 검객들의 그림자를 낙타 행렬로 동원하는 이정표였군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 끝없는 낙타와 짐꾼이 전부... 억류된 그림자들의 허상이었다니!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 이상 속지 않아."
					},
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "길가에 흩어진 상아빛 낙타 뼈에서 서늘한 숨소리가 새어 나와요!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 낙타 뼈가 아니야. 자룬에게 목숨을 빼앗긴 탐험대의 유골이다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "동물 뼈로 위장해 희생자들의 뼈를 사막에 파묻어둔 거였군요..."
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…용서할 수 없다."
					},
					"speaker": "character_3",
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
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "녹슨 검 손잡이마다 희생자들의 비명 소리가 들려와요."
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자룬이 수집한 검들이 주인의 원한과 분노를 억지로 삼키고 있었어."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "장의사 자룬이 바로 앞에 있어요. 이제 그림자를 되찾아야 합니다!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝장을 내자."
					},
					"speaker": "character_4"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "그 검, 곧 울겠군."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "자룬이 방울을 흔들자 낙타 행렬이 무너지며 거대한 장의사의 형상으로 솟구쳤다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "걱정 마라. 네 검은 내가 정성껏 묻어주마. 너를 먼저 묻은 다음에."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "타인의 그림자와 생명을 훔친 장의사여, 이 물을 받아라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "황동 물병의 물이 붉은 모래 바닥으로 일제히 쏟아졌다."
					}
				}
			],
			"win_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그림자가... 내 그림자가 되돌아왔어!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물병 속 검객들의 그림자와 생명이 되돌아와 자룬의 형상을 집어삼켰다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "내 장례식에... 내가 매몰될 줄이야..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자룬의 그림자 행렬이 완전히 소멸했다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막 무덤 위에 차가운 바람이 불어오며 정적이 찾아왔다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "새로운 검과 그림자가 내 짐에 추가되겠구나."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "아직… 물병의 물은 다 마르지 않았다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"황동 물병이 사막 바닥에 떨어져 깨지자, 갇혀 있던 수많은 숨결이 모래바람으로 돌아갔다.",
			"그림자를 되찾은 아미르는 비로소 자신의 발밑을 내려다보며 감격의 눈물을 흘렸다.",
			"자룬의 장례 행렬도, 붉은 모래를 물들였던 사악한 주술도 흔적 없이 사라졌다.",
			"수많은 검객의 원한이 잠든 사막 무덤 위에 처음으로 차가운 밤바람이 감돌았다.",
			"빼앗긴 그림자와 생명을 되찾은 이들은 마침내 평온한 안식을 맞이했다."
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
	"prologue": {
		"korean": [
			"붉은 모래 사막 깊은 곳, 주인을 잃은 검들이 무덤처럼 꽂혀 있다.",
			"황동 물병에 갇힌 억울한 검객들의 비명이 모래바람을 타고 귓가를 울린다.",
			"낙타 행렬 뒤에 숨은 잔혹한 실체, 검의 장의사 자룬이 기다린다.",
			"빼앗긴 그림자를 되찾고 이 비극을 끝내기 위한 마지막 결전이 시작된다."
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
