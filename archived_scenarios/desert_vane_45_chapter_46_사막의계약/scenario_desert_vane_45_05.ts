export const scenario_desert_vane_45_05 = {
	"scenario_id": "desert_vane_45_05",
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
		"pool_id": "pool_BloodLedger_Vane_V1"
	},
	"prologue": {
		"korean": [
			"달빛 오아시스 샘터. 중독된 동료를 살릴 마지막 장소다.",
			"모아 온 약초로 독을 고치기 위해 다시 이곳으로 돌아왔다.",
			"하지만 샘터 주변에는 서늘하고 기괴한 정적이 감돌고 있었다."
		]
	},
	"epilogue": {
		"korean": [
			"샘터에 침식해 들어왔던 붉은 계약의 가시덤불이 모래 아래로 꺼져 내렸다.",
			"아미르의 약초 덕분에 동료의 몸을 갉아먹던 사막 독도 말끔히 사라졌다.",
			"샘물의 빚은 파기되었고, 달빛 오아시스는 오랫동안 잃었던 푸른 빛을 되찾았다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "달빛 오아시스 샘터 입구. 잔잔하던 샘물이 붉은빛으로 불길하게 출렁인다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "약초를 다 구해오셨군요! 동료분의 독이 더 퍼지기 전에 어서 치료해야 합니다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "입구 오아시스에서 보았던 수통의 호박색 잉크 자국이 이 샘터 모래밭에도 번져 있어."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…몸에 남은 독 기운 때문에 머리가 무거워."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "샘터 내부로 들어설수록 모래바닥이 뾰족하게 솟구쳐 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "검은 모래 협곡 바닥에서 봤던 흑요석 가시 조각들이 샘터 전체에서 자라나고 있어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…어둠 속에서 뭔가가 솟아오르는 것 같아."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오아시스 중심부에 다다르자 보랏빛 연기가 시야를 가린다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "메마른 바람 은신처 주변에 피어오르던 보랏빛 영혼 연기가 온 샘터를 덮고 있어."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…숨을 쉴 때마다 가슴이 답답해진다."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "샘터 중앙에서 낮은 웃음소리와 함께 무거운 기척이 울려 퍼진다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "오아시스 샘물 밑에서 거대한 괴물의 기척이 올라오고 있어."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…등골이 오싹해지는 불길함이야."
					},
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오아시스 중앙, 정보상 베인이 보랏빛 시가를 피우며 서 있다."
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "약초를 모아 돌아왔나? 하지만 이미 늦었다."
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "베인이 시가를 던지자 오아시스가 계약서 가시덤불로 뒤덮이고 흑요석 가시 괴물로 변한다."
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이 오아시스의 물을 마신 순간부터 너희 목숨과 무기는 전부 내 거다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바위 지하 유적에 떨어져 있던 검은 가죽 옷조각이 저 괴물의 옷자락이었어!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "물을 마시게 해 목숨을 죌 속셈이었군. 순순히 내놓을 것 같으냐!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…가시덤불이 목을 조여오는 것 같아."
					},
					"emotion": "sad"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "내 물을 마신 자는 영원히 사막의 빚에 얽매일 뿐이다."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이대로 빚에 얽매여 꺾일 수는 없다. 다시 도전한다!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "과거 도망친 검객들이 빚을 갚지 않으려고 붉은 잉크 계약서를 사막 모래에 묻고 달아났다."
					}
				},
				{
					"content": {
						"korean": "나는 그 계약서들이 사막 기운과 섞여 태어난 괴물이다. 너희 무기와 생명을 영원히 빼앗겠다!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대가 오아시스의 물을 모래바닥에 모조리 쏟아버린다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오아시스 물을 모래에 쏟아버렸다! 물에 담긴 빚의 계약은 이제 파기되었다!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "계약의 물을 쏟아내다니… 내 빚의 굴레가 깨어지는구나!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "붉은 가시덤불이 흩어지며 베인은 모래 속으로 사라졌다."
					},
					"type": "speech",
					"emotion": "base"
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
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "베인의 저주가 풀렸습니다! 이제 이 약초로 동료분을 치료할 수 있어요!"
					},
					"emotion": "happy"
				}
			]
		}
	]
} as const;
