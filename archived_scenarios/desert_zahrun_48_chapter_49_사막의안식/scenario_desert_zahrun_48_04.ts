export const scenario_desert_zahrun_48_04 = {
	"scenario_id": "desert_zahrun_48_04",
	"order": 4,
	"random_boss_title": {
		"korean": "주술사"
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
			"끝없는 사막의 모래바람 속에 고요히 묻혀 있던 폐허가 된 제단.",
			"사막에 갇히기 전에 탈출로를 찾아야만 하는 시간이 얼마 남지 않았다.",
			"그러나 제단 근처에는 사슬처럼 얽힌 짙은 죽음의 기운이 감돌고 있었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "풍식된 석조 기둥들이 모래 속에 기울어진 폐허가 된 제단에 다다랐다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ferro",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈추시오. 난 이 제단을 수색하던 정찰꾼 페로라고 하오. 사막 탈출로를 찾다가 만났군요."
					},
					"speaker": "ferro",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 제단을 통과해야 사막 밖으로 나가는 길에 도달할 수 있다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…바람 소리가 꼭 비명처럼 들려."
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ferro",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "제단 주변에서 수상한 자를 목격했소. 지친 이에게 물을 내주던 상인 자룬 말이오."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "친절한 상인이라 들었던 자룬이 왜 이곳까지 찾아온 거지?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "그 자는 곧 목숨을 잃을 검객의 뒤를 끈질기게 쫓고 있었소."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…죽어가는 사람의 뒤만 쫓다니 섬뜩하네."
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ferro",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "제단 안쪽은 짙은 죽음의 기운이 길을 막고 있소. 난 정찰을 이어갈 테니 조심하시오."
					},
					"speaker": "ferro",
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "ferro"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경고를 마음에 담아두고 탈출구를 찾아 정면으로 나아가자."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…모래 밑에서 무언가 기어오르는 기분이 들어."
					},
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
						"korean": "제단 중앙의 넓은 모래판 위에 기이한 흔적이 남아 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모래판에 수백 자루의 검이 빽빽하게 꽂혔다 사라진 자국이 선명하군."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이 많은 검들이 도대체 어디로 사라진 거지?"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "죽음을 추적하는 자의 눈길을 끌어당긴 이상, 누구도 모래를 빠져나갈 수 없다…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어떤 위험이 따라붙든 상관없다. 탈출로를 찾아 끝까지 가겠다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 주술사 너머로, 별빛 모래 언덕으로 통하는 탈출로가 눈앞에 펼쳐졌다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "제단 깊은 곳, 죽음의 기운을 두른 주술사가 탐험대의 길을 막아선다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "사막의 섭리를 거스르고 죽음의 기운이 밴 검을 쥔 자들이여, 이 선을 넘지 마라!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는 사막을 빠져나가야 한다. 멈추지 않고 길을 뚫겠다!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…공기마저 차갑게 굳어가는 것 같아."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래판 밑에 잠든 검들처럼 너희도 이곳에 묻히리라."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이대로 모래 속에 묻힐 수는 없다. 다시 뚫고 나가겠다!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
