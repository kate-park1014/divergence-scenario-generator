export const scenario_desert_encore_49_03 = {
	"scenario_id": "desert_encore_49_03",
	"order": 3,
	"random_boss_title": {
		"korean": "모래 마법사"
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
			"붉은 모래 바위굴, 대본의 사슬을 끊기 위해 이곳을 찾았다.",
			"계약을 풀 방법은 이 아득한 굴속 깊은 곳에 숨겨져 있다.",
			"바위 사이로 사막의 폭주하는 마력이 불길하게 요동친다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "붉은 모래 바위 틈 사이로 열기와 망치 소리가 흘러나온다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내 이름은 페로, 이 바위굴에서 구슬땀을 흘리는 대장장이다. 대본의 소문을 듣고 찾아왔나?"
					},
					"speaker": "ferro"
				},
				{
					"content": {
						"korean": "대본에 새겨진 계약을 해제할 방법을 찾으러 왔다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…붉은 모래가 바람을 타고 굴 안까지 밀려오네."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ferro",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "연극 대본에 묶인 계약은 오직 하나, 연극이 끝나기 전에 대본의 마지막 장을 덮어야만 파기된다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대본을 덮는 순간, 사막에 묶인 이름들이 자유로워진다는 뜻이군."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…연극이 끝나버리면 영영 갇히는 건가."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바위 바닥에 붉은 먼지를 뒤집어쓴 외알 안경 테가 떨어져 있다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 이 척박한 바위굴에 외알 안경 테를 떨어뜨리고 갔어."
					}
				},
				{
					"type": "direction",
					"speaker": "ferro",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "대본을 끝낼 무대터로 가려면 굴 깊숙한 곳으로 가야 한다. 조심해라."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "ferro",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…차가운 금속 감촉이 불길하네."
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "바위굴 벽면을 따라 붉은 모래 마력이 거세게 진동한다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사막의 마력이 요동치고 있다. 누군가 앞을 막아설 것 같다."
					}
				},
				{
					"content": {
						"korean": "…피부가 바짝 마르는 것 같아."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "더 가선 안 된다! 사막의 마력이 폭주하여 위험해지고 있다!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "대본을 덮어 계약을 파기해야만 모두를 살릴 수 있다. 길을 비켜라!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "…주변 모래가 공중에 떠다니고 있어."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "윽… 마력이 정화되는군. 하지만 대본이 완성될 장소는 비단 무대터다…"
					}
				},
				{
					"content": {
						"korean": "빛바랜 비단 무대터로 가서 연극이 끝나기 전에 대본을 덮겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무력화된 상대 너머로, 무대터로 향하는 오솔길이 드러난다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "사막의 마력에 삼켜지고 싶은가! 여기서 물러나라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 꺾일 수는 없다. 다시 도전하겠다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
