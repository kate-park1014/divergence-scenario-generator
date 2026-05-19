export const scenario_EndlessApplicant_V2_StagnantRealm_05 = {
	"scenario_id": "EndlessApplicant_V2_StagnantRealm_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_098"
	},
	"epilogue": {
		"korean": [
			"에반의 의식은 부서졌다. 그러나 정체된 세계는 여전히 침묵했다.",
			"절망의 공급원은 잠시 멈췄을 뿐, '밖'의 존재는 여전히 숨 쉬고 있었다.",
			"이것은 구원이었을까, 혹은 또 다른 시작에 불과했을까?",
			"멈춰진 시간 속에서, 이야기는 다시 막을 올린다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "면접 대기실의 최심부. 모든 것이 멈춘 듯 고요하다."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "...결국 여기까지 왔구나."
					}
				},
				{
					"content": {
						"korean": "에코... 에반은 어디 있지?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그는 더 이상 '에반'이 아니야. 이곳의 정체된 의식, 그 자체가 되었지."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "정체된 의식? 그게 무슨 소리야?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너의 절망, 우리의 절망. 모든 것이 그의 일부가 되었어."
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고... 이 모든 건 밖에 있는 누군가를 위한 거야."
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "밖? 누가? 왜?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "이곳은 절망을 수확하는 농장. 너희의 의지마저도 에너지로 전환되지."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "에반은 더 이상 개인이 아니야. 집합된 의식 그 자체지."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 우린... 계속 이용당한 거야?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "그래. 이전의 시스템 붕괴는 새로운 시스템을 위한 데이터 수집이었을 뿐."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "세계를 부수려는 우리의 의지마저도..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "초월적 존재를 위한 에너지원. 멈춰진 세계는 영원히 절망을 생산할 거야."
					},
					"emotion": "angry",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼... 그럴 수는 없어."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "각오해. 이것이 마지막이야."
					},
					"emotion": "base",
					"speaker": "echo",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "절망은 영원하다. 너희의 의지는 결국 나의 먹이가 될 뿐."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직이야... 아직 끝나지 않았어!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "크... 그래. 부숴라. 하지만 너의 저항조차 새로운 절망을 생산하는 동력임을 잊지 마..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "시끄러워! 네 의지대로는 안 돼!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "막았어... 하지만 아직 끝이 아니야. 더 거대한 존재가 깨어나고 있어."
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체된 의식의 핵은 붕괴했지만, 세계는 여전히 멈춰 있었다."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "진정한 배후는, 이제야 비로소 모습을 드러내려 한다."
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수많은 이력서 파편이 휘몰아치는 공간. 그 중심에 에반이 서 있었다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔구나. 절망을 깨뜨리려던 작은 의지여."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이 모든 걸 네가 꾸민 거야?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "happy",
					"content": {
						"korean": "네가 모든 것을 부쉈다고 생각했나? 그때 네가 깨달은 진실은 나를 다음 단계로 이끌었을 뿐."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이전의 시스템 붕괴는 새로운 시스템을 위한 데이터 수집 과정이었지."
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"action": "shake",
					"duration_ms": 800,
					"speaker": "boss",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "에반의 몸에서 뿜어져 나오던 서류들이 굳건한 벽이 되어 모든 출구를 봉쇄한다."
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "이 세계 자체가 내가 만들어낸 '정체된 의식'의 거대한 육체. 영원히 멈춰진 나의 왕국이야."
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 마! 희망이 아닌, 각오로 맞서야 해!"
					},
					"emotion": "angry",
					"speaker": "echo",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계는 정지했다. 시간도, 희망도, 미래도 없이.",
			"모든 절망은 한 곳으로 흘러들었다. 에반, 그 의식의 핵으로.",
			"그 너머에는 미지의 존재가, 이 모든 것을 기다리고 있었다.",
			"멈춰진 세계의 가장 깊은 곳, 최후의 진실이 드러난다."
		]
	}
} as const;
