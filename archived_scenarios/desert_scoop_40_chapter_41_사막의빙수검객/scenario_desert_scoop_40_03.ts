export const scenario_desert_scoop_40_03 = {
	"scenario_id": "desert_scoop_40_03",
	"order": 3,
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
			"사막의 길목을 막아선 자의 정체를 찾아,",
			"오아시스 외곽, 모래 속에 파묻힌 잊힌 사원 터로 향한다.",
			"바람 끝에 희미하게 실려 오는 달콤한 향기.",
			"오랜 유적 아래, 어울리지 않는 비밀이 숨어 있다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무너진 기둥 사이로 모래바람이 불어온다. 잊힌 사원 터의 입구다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길을 막은 자의 흔적이 정말 이 유적 안에 있을까?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kasai",
					"content": {
						"korean": "이 사원 안쪽 깊은 곳에서 이상한 냄새가 시작됐어. 이쪽이야!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "타는 듯한 모래 냄새 사이로 은은한 단내가 섞여 난다."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kasai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바닥을 봐. 누군가 무언가를 흘리고 지나간 자국이 뚜렷해."
					},
					"speaker": "kasai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모래 위에 끈적하게 스며든 붉은 자국이 길게 이어져 있군."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 더운 사막에서 마르지도 않는 시럽이라니, 이상하잖아."
					},
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "구석 제단 밑에서 이걸 찾았어! 봐봐!"
					},
					"speaker": "kasai",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무지갯빛 형광 시럽 병... 코를 찌를 듯 달콤한 냄새가 난다."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "황량한 유적에 이런 화려한 시럽 병이 왜 떨어진 걸까?"
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 시럽을 흘린 자가 바로 길목을 막은 원범일 수도 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kasai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "잠깐! 안쪽 제단 근처에서 누군가 무기를 쥐고 기습을 노리고 있어!"
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막 도적이 이 사원 터를 점거하고 길을 가로막는 모양이군."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "흉흉한 기운이 풍겨온다. 순순히 보내줄 생각은 없겠어."
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "큭... 항복이다! 제발 살려줘! 영약 같은 건 거짓말이었어!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이 달콤한 시럽 병은 어디서 난 거냐?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거 최강이라 불리던 검객이 사막 곳곳에 시럽을 붓고 다닌다는 소문을 듣고 주운 것뿐이야!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도적은 무기를 버리고 황급히 사막 너머로 도망쳤다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전설의 검객과 달콤한 시럽... 사막의 사건들이 조금씩 연결되고 있다."
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하! 환상의 영약에 담긴 비밀은 절대 넘겨주지 않는다!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 쓰러질 순 없다... 다시 사원 터를 뚫어야 해!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 중앙에서 거대한 그림자가 검을 뽑아 들며 기습해 온다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 어디라고 발을 들여? 그 시럽은 환상의 영약이다! 어서 물러나라!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓말로 속이려 들지 마라, 실력으로 뚫고 지나가겠다!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
