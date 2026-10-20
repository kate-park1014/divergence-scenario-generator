export const scenario_modern_whisperweb_0_FIR_04 = {
	"scenario_id": "modern_whisperweb_0_FIR_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시 외곽, 낡은 세탁소 간판이 어둡게 깜빡였다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신들이 어떻게… 여길 찾아냈지?"
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹이 과거 갱단 정보를 이용하고 있어. 당신이 그걸 알고 있다고 들었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…그놈들… 내 가족 비자금까지 노려."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "증거를 대라. 정식 절차를 밟아야 한다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "시간 지체하면 안 돼! 그놈들은 이미 내 정보를 다 알고 있어. 내 가족 위치까지."
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영장이 나와야 한다. 그래야 증거 확보가 가능하다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "지금 그게 중요해?! 내 가족이 위험하다고!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절차를 무시하면 당신의 증언은 법적 효력이 없다."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카이는 주머니 속 낡은 세탁소 열쇠를 꽉 쥐었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "내 아내가… 내 딸이… 그놈들에게 알려지면… 다 끝장이야."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼 웹은 낡은 갱스터들의 암호화된 통신 기록을 사용한다. 당신 조직의 표식인가?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…블랙 웹… 젠장, 그걸 어떻게 알았어?!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말해라. 금고 위치는? 위조 신분 서류는 어디에 숨겼지?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직은… 아직은 말 못 해… 가족이 안전할 때까지."
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 장부 위, 특정 갱스터 조직의 표식이 반복해서 나타났다 사라졌다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "증거 확보를 기다리다간… 모든 걸 잃게 될 거야."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼! 벌써…!"
					},
					"emotion": "angry",
					"speaker": "kai"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "카이의 낡은 장부 속 기록이 빠르게 위스퍼 웹의 네트워크로 유출되었다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 한 광고판에 '블랙 웹' 갱스터 금고 위치와 함께 카이의 가족 이름, 비자금 수천만 원이 찰나의 순간 나타났다 사라졌다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 가족의… 위조 신분 서류까지… 전부 다 빼앗겼어… 가족이 위험해졌다고!"
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리의 절차가… 모든 것을 망쳤다."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…당신들 때문에… 내 모든 게 끝났어… 다 끝났어…!"
					},
					"emotion": "angry",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "전파탑의 모든 안테나가 도시를 향해 섬광을 뿜었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 지킨 절차는… 네 가족의 안전조차 보장하지 못할 것이다."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "내 가족을 건드리면… 너희 조직을 통째로 갈아엎는다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 너는… 그 낡은 절차 때문에… 더 많은 것을 놓칠 거다…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "카이… 가족들은…"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 모든 디지털 간판에 '블랙 웹'이라는 갱스터 조직의 표식이 섬광처럼 스쳐 지나갔다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "카이는 가족의 사진을 움켜쥐었다. 그는 모든 것을 잃었다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "위스퍼 웹… 반드시 너희의 뿌리를 뽑는다."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "낡은 전파탑 꼭대기, 수많은 안테나 사이에 정체 모를 자가 서 있었다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 그 낡은 절차를 지키느라 카이를 파멸시켰군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 카이의 정보를 빼돌렸나?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 보여줬을 뿐이다. 네 절차가 얼마나 무능한지."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "카이의 가족 정보는 지금 이 도시 전체에 퍼지고 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈춰! (싸울 준비를 한다)"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"깨진 정보는 멈추지 않고 도시를 떠돌았다.",
			"우리는 낡은 통신 기록에서 갱스터 잔당 카이의 이름을 찾아냈다.",
			"카이는 위스퍼 웹이 과거 갱단 정보를 이용한다고 했다.",
			"그에게서 위스퍼 웹의 약점을 찾아야 했다."
		]
	}
} as const;
