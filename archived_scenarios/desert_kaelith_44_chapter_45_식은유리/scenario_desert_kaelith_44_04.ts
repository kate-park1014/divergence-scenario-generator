export const scenario_desert_kaelith_44_04 = {
	"scenario_id": "desert_kaelith_44_04",
	"order": 4,
	"random_boss_title": {
		"korean": "바람 파수꾼"
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
			"가장 강한 열기가 뿜어져 나오는 태양의 유적.",
			"타오르는 공기 속에서 유적의 대장장이 페로를 만난다.",
			"그곳에서 전설 속 검객 카엘리스의 숨겨진 과거가 드러난다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "태양의 유적 입구. 숨을 쉴 때마다 목구멍이 타들어 갈 듯한 열기가 밀려온다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"direction": "up",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"speaker": "ferro",
					"content": {
						"korean": "난 태양의 유적에서 오랫동안 무기를 다뤄온 대장장이 페로다. 이 열기를 쫓아왔나?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "탈출로를 막아선 열기의 원인을 밝히러 왔다."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…바닥이 화로처럼 뜨거워."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 도가니 옆에 모래와 엉켜 녹아붙은 흔적이 남아 있다."
					}
				},
				{
					"speaker": "ferro",
					"type": "direction",
					"direction": "up",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "카엘리스는 과거 태양을 베려다 몸이 모래와 함께 녹아붙은 검객이다."
					},
					"speaker": "ferro",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 자의 헛된 욕망이 사막 전체를 타오르게 만든 거였군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…듣기만 해도 전율이 느껴져."
					},
					"emotion": "sad",
					"speaker": "character_2"
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
					"direction": "up",
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "유적 깊은 곳은 열기가 너무 거세다. 대장장이인 나도 더는 못 들어간다."
					},
					"emotion": "sad",
					"speaker": "ferro",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 열기를 멈추지 않으면 사막에서 탈출할 수 없다. 우리가 간다."
					},
					"type": "speech"
				},
				{
					"speaker": "ferro",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…바람마저 뜨겁게 살을 에네."
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "유적 깊은 곳, 붉은 유리가 새하얗게 번뜩이며 엄청난 열기를 내뿜는다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안쪽에서 금이 간 백열의 유리가 열기를 내뿜고 있다."
					}
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…열기 때문에 눈을 뜨기 힘들어."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거센 바람과 함께 열기를 품은 그림자가 길을 막아선다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "유적 깊은 곳은 위험하다! 더 이상 앞으로 가지 마라!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "열기의 근원을 확인하고 사막을 탈출해야 한다. 비켜라!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…숨이 턱 막혀온다."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}의 경고를 무시한 것을 후회하게 될 것이다…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "바닥에 떨어진 금이 간 백열의 유리… 이게 막대한 열기를 일으키고 있었다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유리의 뜨거운 흔적은 사막 가장 깊은 곳, 이글거리는 제단으로 이어져 있었다."
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아가라. 이 안의 열기는 너희가 감당할 수 없다."
					}
				},
				{
					"content": {
						"korean": "…여기서 포기할 순 없다. 다시 도전하겠다."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
