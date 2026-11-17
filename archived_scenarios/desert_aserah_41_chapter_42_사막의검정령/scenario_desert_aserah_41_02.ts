export const scenario_desert_aserah_41_02 = {
	"scenario_id": "desert_aserah_41_02",
	"order": 2,
	"random_boss_title": {
		"korean": "약초상"
	},
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"말라붙은 오아시스에는 서늘한 모래바람만 불어오고 있었다.",
			"아미르의 다리는 점점 더 단단한 보석으로 변해가고 있다.",
			"동료를 살리려면 이 거친 사막 깊은 곳으로 나아가야 한다.",
			"하지만 오아시스 잔해 속에는 잊혀진 비극의 흔적이 잠들어 있었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "말라붙은 오아시스 바닥에 바스락거리는 모래 소리만 가득하다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막 한가운데 오아시스가 통째로 말라붙어 있네."
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "아미르의 저주를 풀 약초를 구하려 했는데... 샘이 완전히 말랐어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 꼭 아픈 비명처럼 들려."
					}
				},
				{
					"content": {
						"korean": "그래도 조심해서 안쪽으로 이동하자. 분명 단서가 남아 있을 거야."
					},
					"emotion": "base",
					"speaker": "kasai",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "모래 구덩이 속에 무언가 반짝이는 파편이 묻혀 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "이건... 부서진 백금빛 갑옷 조각이야."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무척 오래된 물건인데도 여전히 서늘한 빛을 내고 있어."
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "일반 도적이나 상인의 것은 아니야. 신전의 기사들이 쓰던 갑옷 같아."
					},
					"type": "speech",
					"speaker": "kasai"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "백금빛 갑옷 조각 근처에 주인을 잃은 검집들이 떨어져 있어."
					}
				},
				{
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "여신 아세라에게 직접 검을 전수받았다는 정예 검객들의 문양이야."
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "뼛속까지 소름이 돋는 기운이 느껴져."
					},
					"emotion": "angry"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"content": {
						"korean": "이상하군. 그 사막 검객들은 수년 전 흔적도 없이 모두 사라졌다고 들었는데..."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "kasai",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "샘터 안쪽에서 누군가 날카로운 눈빛으로 길을 막아서고 있어."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "사막 약초상이야. 하지만 분위기가 무섭도록 가시돋쳐 있어."
					},
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "금방이라도 공격해 올 것 같은 태도야."
					},
					"emotion": "angry",
					"speaker": "character_4"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아미르를 살리기 위해서라도 여기서 멈출 수 없어. 돌파하자!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "경고했을 텐데... 모래 속에 뼈를 묻고 싶지 않다면 돌아가라!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아미르를 포기하고 돌아갈 순 없어... 다시 일어서야 해!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "더 이상 사막 깊은 곳으로 가지 마라! 여신의 노여움에 삼켜질 뿐이다!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리는 저주받은 동료를 살려야 한다. 순순히 비켜라!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 들어가 봤자 죽음뿐이다! 여기서 막아서는 것이 너희를 돕는 길이다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어리석은 자들... 여신에게 검을 배운 검객들도 모두 신전으로 갔다 돌아오지 못했거늘..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "여신에게 검을 배운 자들이 전부 사라진 이유가 신전에 있다는 뜻인가?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스 옆으로 백금빛 갑옷 조각들이 차갑게 빛나고 있었다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저주를 풀 열쇠와 검객들의 진실을 찾기 위해, 신전으로 간다."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
