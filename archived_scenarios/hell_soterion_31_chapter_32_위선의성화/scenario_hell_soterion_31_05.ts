export const scenario_hell_soterion_31_05 = {
	"scenario_id": "hell_soterion_31_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_Scapegoat_Soterion_V1"
	},
	"prologue": {
		"korean": [
			"연옥의 가장 깊은 곳, 유황 용암 옥좌에 다다랐다.",
			"신들의 더러운 오물을 도맡아 품어온 희생양 소테리온이 기다린다.",
			"흑막의 조종을 부수고, 폭주하는 동귀어진을 막아야 한다.",
			"위선으로 가득 찬 신들의 죄악을 천상과 지옥 전체에 폭로할 때다."
		]
	},
	"epilogue": {
		"korean": [
			"용암 옥좌를 메우던 형광 유황빛이 마침내 가라앉았다.",
			"분쇄틀에서 부서진 오팔 열쇠 가루가 용암 속으로 흔적도 없이 사라졌다.",
			"지옥 전체를 채운 환영창에는 신들이 숨겨온 100건의 비리가 선명하게 떠올라 있었다.",
			"거짓된 신성함은 베어졌고, 신들의 위선은 영원히 폭로되었다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "검 붉은 용암 위로 거대한 분쇄틀과 옥좌가 모습을 드러냈다."
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "brim",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "드디어 도착했군요! 어서 그 오팔 심판 열쇠를 소테리온의 가슴에 꽂으세요!"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "옥좌 옆에 장착된 이 거대한 분쇄틀은 뭐지?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "…그, 그건 아무것도 아닙니다! 시간 없으니 열쇠부터 꽂으라고요!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "옥좌의 열기가 소름 끼칠 정도로 지독해."
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "왜 머뭇거립니까? 열쇠를 꽂아야 소테리온의 억제가 풀어집니다!"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 수집한 뇌물 장부 100건에 네 이름이 적혀 있더군, 브림."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐라고요? 그딴 허술한 서류 따위를 믿는 겁니까?"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "손이 덜덜 떨릴 정도로 긴장감이 감도는군."
					},
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "brim",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신더에게 받은 하수구 전가 승인서에 모든 진실이 적혀 있었다."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "소테리온은 판관이 아니라, 신들의 죄악을 강제로 처받은 희생양이었어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "…쯧, 눈치채버렸나. 그래, 소테리온은 오물통에 불과하다!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "열쇠를 꽂는 순간 억제가 풀리며 천상과 연옥 전체가 유황불로 폭발할 거다!"
					}
				},
				{
					"content": {
						"korean": "저 녀석, 처음부터 우리 모두를 죽일 셈이었어."
					},
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "brim",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "품속에 숨긴 기폭 전선을 꺼내다니, 역시 네가 천상 세척관이었군."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "신들의 입막음을 위해서라면 너희도, 이 지옥도 통째로 날려버려야 해!"
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오팔 심판 열쇠를 분쇄틀에 넣어 영구히 파괴하겠다!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "narrator",
					"action": "shake",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "열쇠가 분쇄틀에서 가루가 되어 폭발 기믹이 완전히 봉인되었다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동시에 수집한 뇌물 장부 100건이 지옥 전체 환영창에 전송된다!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "brim",
					"content": {
						"korean": "안 돼! 신들의 비밀이… 내 계획이 전부 망가지다니!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "brim",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "마침내 가짜 조력자의 가면이 부서졌다."
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "소테리온의 서슬 퍼런 유황 검에 파티가 쓰러졌다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 오물과 함께 사라지고 싶지 않다… 아직 고발은 끝나지 않았어!"
					}
				},
				{
					"content": {
						"korean": "무의미한 저항이군. 다시 내게 덤벼봐라."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "소테리온의 가슴 크리스털이 깨지며 내부의 뇌물 찌꺼기가 쏟아졌다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크리스털 속 찌꺼기와 수집한 장부의 내용이 정확히 일치한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "고맙다… 드디어 이 더러운 희생양의 굴레에서 벗어나는구나…"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "하늘과 지옥을 덮은 환영창에 신들의 죄악 장부 100건이 선명히 비친다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "신들의 위선은 철저히 파괴되었다."
					},
					"emotion": "happy"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오팔 심판 열쇠의 봉인이 부서지자 소테리온이 거대하게 솟구친다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나를 거룩한 집행자라 부르지 마라! 내 안에 든 건 신들의 오물뿐이다!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "오라! 나를 베어내어, 신들의 추악한 위선을 끝맺어다오!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭발은 막았다. 이제 너를 옥죄던 신들의 오물을 베어내 주겠다!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
