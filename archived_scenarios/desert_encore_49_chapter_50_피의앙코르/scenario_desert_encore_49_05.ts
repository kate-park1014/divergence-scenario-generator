export const scenario_desert_encore_49_05 = {
	"scenario_id": "desert_encore_49_05",
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
		"pool_id": "pool_MirageTroupe_Encore_V1"
	},
	"epilogue": {
		"korean": [
			"수백 명의 환영 단원이 모래가 되어 바람 속으로 흩어졌다.",
			"앙코르의 원형 무대는 거대한 모래구덩이 속으로 깊숙이 파묻혔다.",
			"희생되었던 탐험가들의 놋쇠 회중시계 10개가 침묵 끝에 다시 째깍거리기 시작했다.",
			"핏빛으로 물들었던 사막의 환영극은 마침내 영원히 막을 내렸다."
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
			"놋쇠 회중시계의 태엽 소리가 사막 전체를 기괴하게 울린다.",
			"피로 물든 원형 무대 위, 수백 명의 환영 단원이 칼을 뽑아 들었다.",
			"동료들의 원한과 피투성이 시계 파편을 쥔 채, 탐험대는 마지막 무대로 올라선다.",
			"환술의 굴레를 끊어낼 단 한 번의 기회가 찾아왔다."
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
					"content": {
						"korean": "피투성이 모래사막 중앙에 거대한 앙코르의 원형 무대가 솟아 있다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 탐험가들을 앗아간 사막 극단의 진짜 원형 무대구나."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…귀가 찢어질 것 같은 기계 태엽 소리야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 저 잔혹한 환상에 속지 않고 끝장을 내겠다."
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
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시신들의 가슴에서 거둬낸 피투성이 회중시계 유리 파편이야!"
					},
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 뾰족한 유리 파편이 환술 무대를 부술 유일한 열쇠로군."
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "놋쇠 회중시계 중앙을 저 파편으로 깨뜨리면 환술이 붕괴한다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "반드시 시계 유리창을 부숴 희생당한 이들의 원한을 갚겠다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "원형 무대 외곽을 수백 명의 단원들이 빽빽하게 에워쌌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…소름 돋아, 저 무수한 시선들."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "단원들의 발밑을 봐라, 모래 위에 그림자가 전혀 비치지 않는다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "진짜 살아있는 사람이 아니었어!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"content": {
						"korean": "태엽 소리가 만들어낸 허무한 모래 환영일 뿐이다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "무대 중앙의 조명이 켜지며 앙코르가 놋쇠 레이피어를 뽑아 들었다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "앙코르의 검자루에 회중시계와 똑같은 놋쇠 톱니 문양이 박혀 있군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "뼛속까지 차오르는 분노를 참을 수 없어."
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "놋쇠 시계의 유리를 깨뜨려 앙코르와 환영 부대를 일시에 궤멸시킨다."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "신사 숙녀 여러분, 오늘의 특별 게스트를 소개합니다!"
					},
					"speaker": "boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "걱정 마세요, 연기는 제가 할 테니. 여러분은... 진짜로 쓰러지기만 하시면 됩니다. 자, 막을 올려라!"
					}
				},
				{
					"content": {
						"korean": "피로 만든 그 잔혹한 극은 오늘로 끝이다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "지금이야! 회중시계의 유리창을 힘껏 깨뜨려!"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "놋쇠 회중시계의 유리가 산산조각 났다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "으아악! 내 환상 무대가... 모래 구덩이 속으로...!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환술이 깨지자 500명의 환영 단원이 모래로 변해 사라지고 앙코르는 깊은 모래구덩이 밑으로 매장되었다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "희생되었던 탐험가들의 생체 회중시계가 다시 정상 작동하기 시작했다."
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "커튼콜도 보지 못하고 쓰러지는군요. 정말 아쉬운 비극입니다!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 태엽은 멈추지 않았다... 다시 일어서겠다."
					}
				}
			]
		}
	]
} as const;
