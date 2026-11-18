export const scenario_desert_encore_49_04 = {
	"scenario_id": "desert_encore_49_04",
	"order": 4,
	"random_boss_title": {
		"korean": "사막 호위병"
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빛바랜 비단 무대가 붉은 모래바람 속에서 모습을 드러낸다."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 사막의 환영 기운을 연구하는 학자 카사이다. 기괴한 소문을 듣고 탐색하러 왔지."
					},
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대본의 구속을 풀고 계약을 끝내려면 이 무대터를 지나야 합니다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…바람 소리가 곡소리처럼 들리네."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기 무대 위에서 화려하게 검무를 추는 단원들을 보게. 발밑을 잘 보게나."
					},
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "단원들의 발밑에 그림자가 전혀 비치지 않는군요!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그렇다네. 극단장이 이끄는 단원들은 사람이 아니라 사막 마법으로 만들어낸 가짜 환영이야."
					},
					"emotion": "base",
					"speaker": "kasai",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…듣고 보니 소름이 돋는다."
					},
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "무대 깊은 곳으로 들어가지 않는 한 환영의 진짜 비밀은 풀리지 않을 걸세."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 깊은 안쪽 무대로 들어가 진실을 직접 확인하겠소."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "kasai",
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"content": {
						"korean": "…발소리가 우리 것밖에 안 들려."
					},
					"emotion": "sad",
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
						"korean": "빛바랜 비단 무대터 구석에서 찢어진 모래빛 연미복 자락을 발견한다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누군가 이곳을 지나치며 연미복 옷자락을 찢기고 간 흔적이 남아 있군요."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무대 뒤편에서 진실을 덮으려는 무거운 호위병의 발소리가 다가온다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "…숨이 막힐 듯한 압박감이야."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "물러서라! 이 무대의 진실은 영원히 모래 속에 묻혀야 한다."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 무너지지 않는다. 다시 덤벼라!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "빛바랜 무대 한복판을 {random_boss}이 무기를 들어 막아선다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무대의 비밀을 파헤치려는 자는 누구냐! 더는 나아가지 못한다."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "가짜 환영으로 사막을 속이는 연극을 당장 끝내러 왔다!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…공기가 순식간에 차가워진다."
					},
					"speaker": "character_1"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 패배다… 하지만 극단장님의 무대는 결코 멈추지 않는다."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "환영의 정체를 알았으니, 이제 대본을 덮어 계약을 완전히 끝내겠다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}이 쓰러지자, 무대터 뒤편 진홍빛 천막 무대로 이어지는 길문이 열렸다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막 연극이 펼쳐질 진홍빛 천막 무대로 향하자."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"대본을 덮어 계약을 끝낼 장소, 빛바랜 비단 무대터.",
			"화려한 조명 아래 춤추는 단원들의 모습이 사막 안개 속에 비쳐온다.",
			"그러나 화려한 무대 뒤편에는 서늘한 비밀과 검은 칼날이 기다리고 있다."
		]
	}
} as const;
