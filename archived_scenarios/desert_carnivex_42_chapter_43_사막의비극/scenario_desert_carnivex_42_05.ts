export const scenario_desert_carnivex_42_05 = {
	"scenario_id": "desert_carnivex_42_05",
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
		"pool_id": "pool_BoneScab_Carnivex_V1"
	},
	"prologue": {
		"korean": [
			"오아시스 중심부, 붉은 황혼이 사막을 물들인다.",
			"길잡이라는 구원자는 처음부터 없었다.",
			"검성들의 골수를 파먹고 자란 백골 지네가 비웃음을 짓는다.",
			"뼛속까지 녹아내리기 전, 이 잔혹한 사슬을 끊어야 한다."
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
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…으윽! 뼛속이 텅 비어가는 것 같아요. 마셨던 즙이 뼈를 녹이고 있어요!"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제단에서 본 시체들처럼 우리도 껍데기만 남게 되는 거야."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…숨 쉬기도 힘들어."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모래 길잡이가 건넨 물병이 바로 기생충의 진액이었어."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 1
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
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "저기 중심부에 서 있는 길잡이의 형상이 이상해요. 껍데기 속에서 소리가 나요!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 환영 뒤로 거대한 청동 갑각이 움직이고 있다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…저 무시무시한 기운은 뭐지."
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "길잡이의 실체는 오아시스를 통째로 삼킨 거대 지네였어."
					},
					"speaker": "character_any"
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
					"content": {
						"korean": "지하 감옥 벽화에서 읽은 내용이 기억났다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "그놈의 껍질은 그 어떤 칼로도 뚫을 수 없어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…그럼 어떻게 상대해야 하지?"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벽화에는 놈이 준 호박색 즙을 갑각 틈새에 직접 쏟아부으면 껍질이 녹아내린다고 적혀 있었어."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대 지네의 마디마다 수많은 칼날 가시가 돋아나 있었다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저 가시들은 신전에서 희생된 명검들이 녹아 붙은 거였어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…징그러운 놈, 얼마나 많은 검사를 삼킨 거냐."
					},
					"speaker": "character_4"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이제 물러설 곳은 없다. 가지고 있는 물병으로 놈의 껍데기를 파괴하자."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "너희의 녹아내린 골수도 참 달콤하구나! 히히히!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…뼛속이 녹아내려도, 결코 여기서 무너지지 않는다."
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "카르니벡스의 백골 갑각 틈새에 호박색 즙을 모조리 쏟아부었다!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크아아악! 내, 내 단단한 껍데기가… 부식되어 녹아내린다니!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "거대 지네가 산산조각 나며 흩어지자, 뼛속을 죄어오던 통증이 멈추었다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "…몸에 힘이 돌아와요! 녹아내리던 뼈가 다시 굳어지고 있어요!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "괴물은 죽었고, 마침내 해독을 완수했다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길잡이의 환영이 흩어지고, 백골과 청동으로 뒤덮인 거대 지네 카르니벡스가 모습을 드러낸다."
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "어머나, 왜 그렇게 사시나무 떨듯 떠시나요? 제가 드린 물이 그렇게 달았나요? …히히, 히히히! 아직도 모르겠어요? 당신들이 마신 그 호박색 물은, 내 껍데기 아래에서 녹아내린 검성들의 골수였다는 걸! 자… 이제 당신들의 매끄러운 뼈도 내 예쁜 갑옷이 되어줘!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오아시스의 석판에 적힌 기생 계약대로 우리 뼈를 모래로 바꿀 셈이냐!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "…크악, 놈이 몰려온다!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"골수 지네 카르니벡스가 소멸하자 사막의 타는 듯한 열기도 차츰 가라앉았다.",
			"호박색 즙에 갉아먹히던 아미르와 동료들의 뼈가 거짓말처럼 제 자리를 찾았다.",
			"지배자의 잔재였던 메마른 오아시스에도 마침내 진짜 맑은 물이 솟아올랐다.",
			"마신 즙의 환영은 끝났지만, 우리가 치러낸 피의 흉터는 사막보다 깊게 남았다."
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
