export const scenario_desert_opalis_43_03 = {
	"scenario_id": "desert_opalis_43_03",
	"order": 3,
	"random_boss_title": {
		"korean": "오아시스 상인"
	},
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"아슈르의 몸이 점점 모래로 변해가고 있다.",
			"시간이 없다. 생기를 빼앗는 원인을 찾기 위해 대장간 유적으로 향한다.",
			"녹슨 철포와 모래 먼지 속에서 오래된 진실이 기다린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "대장간 유적 입구. 모래로 덮인 화로와 녹슨 망치들이 나뒹굴고 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "외부인인가? 난 대장장이의 제자 페로다. 스승님의 유물을 찾으려 조사 중이었지."
					},
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 모래로 변해가는 동료를 구할 원인을 찾고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…공기에서 바랜 쇠 냄새가 나."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "오팔리스 님을 찾는 거라면 그만둬라. 그분의 주인은 백 년 전 결투에서 이미 돌아가셨다."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주인이 죽었는데도 백 년 동안 사람들의 생기를 빼앗아 온 건가?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…오래된 슬픔이 스며있네."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "스승님이 남기신 오래된 상자다. 한번 열어봐라."
					},
					"emotion": "base",
					"speaker": "ferro",
					"type": "speech"
				},
				{
					"content": {
						"korean": "상자 안에 투명한 에메랄드빛 모래가 담긴 병이 들어있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 빛깔은 오팔리스 님의 핵심 태엽과 장치가 연결되어 있다는 증거다."
					},
					"emotion": "base",
					"speaker": "ferro"
				},
				{
					"content": {
						"korean": "…은은하게 빛이 흘러나오고 있어."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "대장간 깊은 곳, 붉은 열기와 생기 구슬의 기운이 강해진다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 유적의 생기 구슬을 독점하고 길을 막고 있다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…발밑의 모래가 뜨거워지고 있어."
					},
					"emotion": "base",
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "분수를 알아라! 유적의 장물은 모두 내 차례다!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…여기서 물러설 수 없다. 다시 도전하자."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "으윽… 구슬을 부수겠다고? 강한 충격을 가해야 갇힌 생기가 풀려난단 말이다!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "생기 구슬을 깨뜨려 갇힌 생기를 사막으로 돌려주는 방법을 알아냈다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "고맙다. 구슬이 깨지면 빼앗긴 생기도 주인에게 돌아갈 거다."
					},
					"speaker": "ferro",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 에메랄드빛 모래 병을 챙긴 채 사원으로 발걸음을 옮긴다."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유적의 보물을 노리고 들어온 오아시스 상인이 무기를 겨눈다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 유적의 모든 물건은 이제 내 것이다! 생기 구슬에 손대지 마라!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구슬을 깨뜨려 빼앗긴 생기를 풀어주겠다. 길을 비켜라!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…탐욕으로 눈이 어두워졌군."
					},
					"speaker": "character_1"
				}
			]
		}
	]
} as const;
