export const scenario_desert_carnivex_42_01 = {
	"scenario_id": "desert_carnivex_42_01",
	"order": 1,
	"random_boss_title": {
		"korean": "모래 도굴꾼"
	},
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뜨거운 태양이 내리쬐는 끝없는 사막 언덕.",
			"오아시스를 찾아 헤매던 탐험대와 동료 아미르는 극한의 갈증에 시달린다.",
			"그때, 모래 언덕 위에서 발견한 의문의 노란 물병.",
			"그 구원의 물은, 잔혹한 비극의 시작이었다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뜨거운 사막 언덕. 타는 듯한 갈증이 온몸을 조여온다."
					}
				},
				{
					"content": {
						"korean": "물을 찾아야 해. 더 이상은 걸을 수 없어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "동료로서 같이 오아시스를 찾아 나섰지만… 나도 이제 한계야."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "목이 타들어 가는 것 같아."
					}
				},
				{
					"content": {
						"korean": "어? 저기 모래 위에 물병이 하나 떨어져 있어!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 놓아둔 노란 진액이 담긴 물병이다."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "모래 길잡이가 버려두고 간 물병인가 봐! 살았다!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "잠깐, 물병 바닥에 끈적한 호박색 진액 자국이 희미하게 묻어있어."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "코를 찌르는 이상한 냄새가 나."
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"content": {
						"korean": "찬밥 더운밥 가릴 때가 아니야! 일단 마실게!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아미르가 덥석 노란 물을 마셔버렸다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "어…? 갈증은 가셨는데, 다리가… 으윽!"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아미르의 몸이 휘청거리며 비틀거린다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "갑자기 왜 이래?! 무슨 일이야!"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다리 속 뼈가 녹아내리는 것 같은 통증이…!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "저 노란 물에 뼈를 녹이는 무서운 독이 들어있었던 거야!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 400,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"content": {
						"korean": "미안해… 다리에 힘이 안 들어간 채 뼈가 녹아내려… 더는 못 걸어…."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "쓰러진 아미르 앞으로 몽둥이를 든 모래 도굴꾼이 막아서며 다가온다."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"content": {
						"korean": "이런 곳에서 멈출 순 없어!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "적을 제압하고 친구를 살릴 해독제를 찾아야 한다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히 그 위험한 노란 물을 마시다니! 몽둥이 맛을 봐라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "노란 물 때문에 내 동료가 다리 뼈가 녹아 쓰러졌다!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어차피 독에 당했으니 여기서 끝이다! 죽어라!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "공격을 막아내고 아미르를 살릴 단서를 뚫어내겠다!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 노란 물을 마신 이상 독이 온몸에 돌아 뼈가 전부 녹고 말 것이다…."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "모래 도굴꾼이 쓰러졌지만 아미르의 상태가 너무 심각하다."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "다리 뼈가 녹아내려… 발밑에 호박색 진액 자국이 희미하게 남아있어…."
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "바닥의 진액 자국이 사막 안쪽 폐허로 이어져 있어."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "친구를 살릴 해독제를 찾아, 탐험대는 뜨거운 사막 깊은 곳으로 떠난다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "사막의 금기를 어긴 자들의 비참한 말로다."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아미르… 여기서 끝낼 순 없어! 다시 일어서야 해!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
