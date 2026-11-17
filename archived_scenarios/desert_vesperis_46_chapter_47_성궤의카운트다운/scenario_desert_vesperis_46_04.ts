export const scenario_desert_vesperis_46_04 = {
	"scenario_id": "desert_vesperis_46_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ferro",
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
						"korean": "사원 봉인 방 전체에 핏빛 칼날 장치가 빽빽하게 새겨져 있다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "벽에 박힌 구동 장치들이 전부 중앙의 모래시계와 연결되어 있군."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래시계의 카운트다운이 멈추기 전에 해제 방법을 찾아야 해."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…사방에서 차가운 쇳소리가 귓가를 지르는 것 같아."
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "받침대 아래를 봐라. 깨진 모래시계 껍데기 조각이 떨어져 있군."
					},
					"speaker": "ferro"
				},
				{
					"content": {
						"korean": "벽화의 검객들은 희생당한 게 아니었어. 베스페리스를 학살하려던 가해자들이야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맞다. 억울한 원혼이 아니라 베스페리스의 방어 주술에 베여 죽은 거였어."
					},
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "…피해자인 척 탐욕을 숨기고 있었군."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ferro",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "벽면에 핏빛으로 칠해진 카운트다운 숫자가 빠르게 줄어들고 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 숫자가 0이 되는 순간 사원 전체가 붕괴된다는 각인이다."
					},
					"type": "speech",
					"speaker": "ferro",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ferro",
					"content": {
						"korean": "모래시계 유리를 깨트리면 내부 칼날 메카니즘이 즉시 터져서 전부 죽는다!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…뼛속까지 오한이 스며든다."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "상자 안에 차갑게 봉인된 초대 검성의 찢어진 사암 가사 조각이 있어."
					}
				},
				{
					"content": {
						"korean": "가해자들의 피로 얼룩진 증거다. 이제 남은 건 붉은 유리를 닦아내는 것뿐이야."
					},
					"speaker": "ferro",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "유리를 닦아서 모래시계의 정확한 남아있는 시간을 확인해야 해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더 이상 물러설 곳이 없어."
					},
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "성궤의 붉은 모래 폭풍이 온 공간을 삼킨다."
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "성궤의 보물은 내 것이다! 무릎을 꿇어라!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 카운트다운이 완전히 끝나지 않았어. 다시 일어서야 해."
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "유리를 깨뜨리고 나와 황금 성궤의 보물을 나누자!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "유리를 깨면 함정이 발동한다. 네 제안은 거절하겠다!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "녹슨 모래시계의 붉은 유리를 닦아내자 카운트다운 10초 전이 드러났다."
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "성궤 수도승의 환영이 붉은 핏빛 검을 쥔 채 사방을 포위한다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 놈들! 성궤의 칼날에 베여 소멸해라!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크악! 수도승의 환영이 흩어지다니…!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "남은 시간은 단 10초. 모래 폭풍이 불어오기 전에 주술을 끝낸다!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "붉은 유리가 맑아지며 사원 제단으로 통하는 마지막 문이 열린다."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사원의 봉인 방 깊숙한 곳, 핏빛으로 물든 칼날 장치들이 숨을 죽이고 있었다.",
			"희생자라 믿었던 검객들의 억울한 죽음 뒤에는 잔혹한 진실이 얽혀 있었다.",
			"도굴꾼 두목의 감언이설이 붉은 모래시계 위로 떨어진다.",
			"카운트다운 10초 전, 성궤 수도승의 핏빛 환영들이 서서히 눈을 뜬다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	}
} as const;
