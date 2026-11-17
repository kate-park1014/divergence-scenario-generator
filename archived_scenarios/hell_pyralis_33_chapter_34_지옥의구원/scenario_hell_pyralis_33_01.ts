export const scenario_hell_pyralis_33_01 = {
	"scenario_id": "hell_pyralis_33_01",
	"order": 1,
	"act": "intro",
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
			"유황 연기가 자욱하게 피어오르는 지옥의 입구.",
			"억울한 영혼들이 황당한 행정 절차에 고통받는 기괴한 재판소가 펼쳐진다.",
			"용암 비석에 새겨진 신수 피랄리스의 잔혹한 집행 소문.",
			"가슴속 에메랄드 혼석을 깨뜨려 갇힌 영혼을 구원해야만 한다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "부글거리는 용암천 옆, 검게 그을린 비석 하나가 서 있다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 어처구니없는 유황 냄새는 대체 뭐야?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아, 또 형벌 미이수 영혼인가요? 재판 절차는 3번 창구로… 어라, 산 사람이잖아?"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 비석에 써진 글자를 읽어줘."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "음… '피랄리스는 길 잃은 자의 형벌을 대속하느라…' 어라, 이 뒤는 그을려서 안 보이네요. 아무튼 잔혹하게 집행한다는 뜻이겠죠!"
					},
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…비석만 봐도 기분 나쁜 열기가 느껴져."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "지옥 재판소는 언제나 서류 미비로 가득하죠. 벌받는 것도 쉬운 일이 아니랍니다."
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "피랄리스라는 집행수는 어디에 있지?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "유황 지옥 가장 깊은 곳요! 가슴에 거대한 에메랄드 혼석을 꽂고 영혼들을 닥치는 대로 고문한대요."
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "고문이라니… 뼛속까지 소름이 돋네."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 혼석 안에 어린 주인의 영혼이 갇혀 있는 거군."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 400,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "잠깐! 혼석을 함부로 손대면 안 될 텐데요? 지옥 법률 제402조에 따르면…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그딴 행정 규정 따위는 상관없어. 혼석을 깨뜨려서 영혼을 꺼낼 테니까."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "깨뜨린다고요?! 그거 진짜 대형 사고인데… 피랄리스 님이 가만 안 둘 걸요?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "열기가 점점 심해진다. 숨이 턱턱 막혀."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떤 위험이 있더라도 혼석을 파괴하겠다는 결심은 변함없다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 400,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 앞에 {random_boss}님이 길을 막고 계시네요! 형벌 미이수자 단속반이에요!"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "피랄리스를 만나러 가기 전, 걸림돌은 전부 치운다."
					}
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "제발 통행증이라도 보여주고 지나가세요! 저분한테 밉보이면 피랄리스 님한테 넘겨진다고요!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "피 냄새와 유황 냄새가 섞여서 머리가 아프군."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "혼석을 부수고 구원하는 것, 그게 우리의 유일한 목적이다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 형벌 감독관이 거대한 무기를 내리치며 길을 막아선다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "통행증 없는 산 자들이 감히 어디를 들쑤시는 거냐! 즉시 숯더미로 만들어 주마!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에메랄드 혼석을 깨뜨리기 전까진 물러서지 않는다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "미친 소리를! 지옥의 형벌 맛을 보아라!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 피랄리스 님의 불꽃이… 너희를 전부 삼킬 것이다…"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마침내 무자비한 집행수가 있는 곳으로 향할 길이 열렸다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "형벌 감독관을 쓰러뜨린 탐험대는 혼석을 파괴하기 위해 재판소 더 깊은 곳으로 향한다."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "허가받지 않은 침입자 따위가 지옥의 법을 넘보느냐!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 주인의 영혼을 포기할 수 없어."
					}
				}
			]
		}
	]
} as const;
