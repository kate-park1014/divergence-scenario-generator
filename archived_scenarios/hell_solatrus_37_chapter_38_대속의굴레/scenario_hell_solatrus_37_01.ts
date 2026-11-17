export const scenario_hell_solatrus_37_01 = {
	"scenario_id": "hell_solatrus_37_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"불타는 심연, 억울하게 죽은 영혼들이 갇힌 대속의 통곡 회랑.",
			"영원히 되풀이되는 형벌의 쇠사슬 소리가 서늘하게 울려 퍼진다.",
			"길잡이 애쉬와 함께 도망치던 발걸음 끝에서 잿빛 태엽시계가 째깍거린다.",
			"굴레를 끊어내지 못한다면 우리 역시 재가 되어 사라질 뿐이다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "지옥의 통곡 회랑 입구. 바닥에 떨어진 사제의 징벌 대검 틈새로 무지갯빛 오팔 결정 파편이 작게 빛나고 있다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부러진 검 틈새에 박힌 저 오팔 결정 파편은 뭐지?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "여긴 불길이 멈추지 않는 회랑이야! 딴청 피우다간 재가 된다고!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뼛속까지 타들어 가는 것 같아."
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 앞으로 가면 출구가 나오지만, 경비대가 통로를 가로막고 있어."
					},
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떻게든 뚫고 나가는 수밖에 없어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "놈들은 타협 따위 안 해! 무조건 사형을 집행하려 할 거라고!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…쇠사슬 끌리는 소리가 다가온다."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "벽면에 붉게 굳은 피로 글씨가 빽빽하게 새겨져 있다."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "피로 새겨진 대속의 회개문이야."
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잠깐, 그 아래 떨어진 건… 잿빛 태엽시계?"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시간의 태엽을 되돌릴 수 있는 시계 같아."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…손에 쥐자마자 기묘한 진동이 퍼져나간다."
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "막다른 길이야! 정체 모를 경비대장이 출구를 막아섰어!"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더는 물러설 곳이 없어."
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "사형이 집행되기 전에 무슨 수라도 써야 해!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…서늘한 단죄의 그림자가 덮쳐온다."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잿빛 태엽시계의 태엽을 힘껏 되돌렸다. 거꾸로 돌아가는 째깍 소리가 회랑을 채운다."
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "시간이… 집행 직전으로 되돌아가고 있다!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사형 선언이 무효가 되었어. 살았다!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "정말로 처형을 피했어…! 시계가 시간을 되돌린 거야!"
					},
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 압도감 속에 사형 집행의 단칼이 떨어졌다."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사형 집행을 면할 수가 없다…!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "굴레를 벗어날 수는 없다. 재가 되어라!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "회랑을 더럽힌 침입자들에게 사형을 집행하노라."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "순순히 당해줄 생각은 없다!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "죄업의 굴레 속에서 잿더미로 돌아가라!"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
