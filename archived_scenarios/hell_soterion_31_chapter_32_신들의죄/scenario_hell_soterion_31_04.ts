export const scenario_hell_soterion_31_04 = {
	"scenario_id": "hell_soterion_31_04",
	"order": 4,
	"random_boss_title": {
		"korean": "유황 연금술사"
	},
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"용암 신전 폐허. 무너진 비석들 사이에 동료들을 구할 단서가 숨겨져 있다.",
			"먼저 도착한 길잡이 애쉬와 재회해 닫힌 지옥 문을 열 방법을 찾아야 한다.",
			"그러나 유황 연기 뒤에서 진실을 가리려는 자가 기척을 숨긴 채 다가온다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "용암 신전 폐허에 다다르자 매캐한 유황 연기가 시야를 가린다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "동료들이 용암 지대에 갇혔다는 소식을 듣고 급히 뒤쫓아왔어요."
					},
					"speaker": "ash",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갇힌 동료들을 살릴 단서가 이 신전 폐허에 있다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…바닥 열기 때문에 발바닥이 뜨거워."
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "무너진 제단 위, 깨진 오팔 빛 조각 곁에 오래된 비석이 서 있다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "이 비석을 해석해 보니, 재판관의 가슴을 베어 깨뜨려야만 닫힌 지옥 문이 열린다고 해요."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "지난번 결계로 가슴의 크리스털을 감쌌던 행동이 오히려 문을 잠갔던 거였군."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맞아요. 결계를 풀고 가슴을 직접 베어 파괴해야 동료들이 탈출할 수 있습니다."
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…소름 돋네, 도우려던 일이 목을 죄고 있었다니."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신전 더 깊은 곳에 재판관 소테리온이 있는 심연으로 통하는 문이 있어요."
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "단서를 얻었으니 갇힌 동료들을 위해 심연으로 향한다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 400,
					"direction": "up"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…연기 사이로 발소리가 겹쳐 들려."
					},
					"speaker": "character_3",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "깨진 오팔 빛 조각 곁에 세워진 비석 주변으로 짙은 유황 연기가 뿜어져 나온다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비석의 글귀가 누군가에 의해 훼손되어 있다. 진실을 가리려는 기척이 가깝다."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…숨쉬기가 점점 답답해진다."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유황 연기 속에서 연막탄을 쥔 정체 모를 자가 길을 막아선다."
					}
				},
				{
					"content": {
						"korean": "재판관님의 진실에 더 가까이 가게 둘 순 없다. 연막 속에서 스러져라!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "동료들을 구하기 위해서라도 방해하는 너를 베고 지나가겠다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…눈앞이 매워서 앞이 안 보여."
					},
					"speaker": "character_1"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 연막을 뚫다니… 하지만 심연으로 가도 결과는 바뀌지 않는다…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리는 갇힌 동료들을 구하기 위해 소테리온이 있는 심연으로 전진한다."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "적을 물리치자 피어오르던 유황 연기가 걷히고 심연의 옥좌로 이어지는 통로가 드러난다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"direction": "up"
				},
				{
					"content": {
						"korean": "통로가 열렸어요. 소테리온이 있는 지옥 심연으로 어서 이동해요!"
					},
					"speaker": "ash",
					"emotion": "happy",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "유황 연기 속에 갇혀 영원히 길을 잃어라!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…아직 쓰러질 수 없다. 전열을 다시 가다듬자."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
