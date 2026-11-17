export const scenario_hell_amnion_38_02 = {
	"scenario_id": "hell_amnion_38_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"시한 카운트다운 잔여 시간, 남은 시간은 7분.",
			"제어실의 열기는 피부를 짓눌러 숨조차 쉬기 힘들었다.",
			"신더가 제어 밸브를 막아서며 주인공의 오판을 저지하려 한다.",
			"은빛 메스가 밸브 전선을 끊는 순간, 핫핑크 빛 핏자국이 벽면을 삼켰다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 전광판의 숫자가 7분으로 줄어들며 붉은 열기가 솟구친다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…숨이 턱턱 막히는 열기야."
					},
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 접근하지 마라! 밸브에 손을 대면 모두 폭사한다!"
					},
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "이 밸브 전선을 잘라야 시한 장치가 멈춘다."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "그 밸브는 폭발을 막는 게 아니라 신전의 열기를 겨우 억누르고 있는 거다!"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제어실 벽면에 주술 신전의 거대한 지옥 도면판이 걸려 있다."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도면을 보니 고치 바로 아래에 유황 파이프가 흐르고 있군."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…저 도면, 왠지 불길해."
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"spot": [
						3,
						4
					],
					"type": "direction",
					"speaker": "cinder",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "도면을 봤다면 당장 물러서라! 밸브를 파괴하면 유황 파이프가 유출된다!"
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "위험을 감수하더라도 제어장치를 강제로 멈추는 게 우선이다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "고집을 부리다간 신전 전체가 잿더미가 될 것이다!"
					},
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…손끝에 전율이 느껴져."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "은빛 메스로 제어 밸브의 전선을 자른다!"
					},
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "은빛 메스로 제어 밸브 전선을 잘라 장치를 멈춘다."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "크윽… 제어 장치가 정지했다… 무슨 짓을 저지른 거냐!"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "제어 밸브가 정지하자 벽면에 핫핑크 빛 피물결 환영이 점박이처럼 반짝인다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…벽면의 저 분홍빛, 섬뜩해."
					},
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "장치는 멈췄지만 고치의 피물결 환영이 핫핑크 빛 핏자국으로 반짝이고 있다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "핏빛 환영이 시작됐다… 고치가 분노하고 있어."
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "남은 시간 안에 신전 중앙으로 돌파해야 한다."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폭주하는 제어실의 화염 속에서 거대한 그림자가 길을 막아선다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "밸브를 끊어버리다니, 제 무덤을 스스로 파는구나!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제어실을 제압하고 중앙 제단으로 가겠다!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크악… 장치는 파괴되었지만 고치의 각성은 멈추지 않는다…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "열기 제어실 파괴를 완료했다. 다음 구역으로 전진한다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "핫핑크 핏빛 흔적을 뒤로한 채 탐험대는 억제 제단으로 발걸음을 옮긴다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "화염의 열기가 사방을 삼켜버렸다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들아, 지옥의 재가 되어라!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 수는 없어. 다시 서야 한다."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
