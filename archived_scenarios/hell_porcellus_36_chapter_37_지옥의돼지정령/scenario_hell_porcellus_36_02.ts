export const scenario_hell_porcellus_36_02 = {
	"scenario_id": "hell_porcellus_36_02",
	"order": 2,
	"random_boss_title": {
		"korean": "용암 약초꾼"
	},
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
			"지옥 문이 잠긴 채, 탐험대는 탈출구를 찾아 유황 보석 동굴로 들어선다.",
			"동굴 깊은 곳에서는 수상한 열기와 소문이 피어오르고 있었다.",
			"닫힌 문을 열 단서를 찾아, 뜨거운 유황 굴 속으로 발을 내딛는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "유황 냄새가 짙게 깔린 동굴 내부. 붉은 보석들이 암벽 사이에서 빛나고 있다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "지옥 문이 잠겼으니 이 동굴을 통해서라도 나갈 길을 찾아야 해."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "외부인인가? 난 이 동굴에서 보석을 파는 채굴꾼 신더요. 험한 곳까지 찾아왔군."
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "…숨을 쉴 때마다 목이 타는 것 같아."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "채굴꾼 신더가 굳은 표정으로 암벽에 귀를 대고 있다."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "저 벽 건너편에서 금속 동전 짤랑이는 소리가 들리지 않소?"
					},
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과거 사원에서 쫓겨났다던 돼지 정령 소문이 떠돌던데, 그 녀석 소리 같기도 하고…"
					}
				},
				{
					"content": {
						"korean": "사원에서 쫓겨난 정령이라니, 우리가 동전을 넣어준 저금통과 관련이 있을지도 몰라."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…불길한 소리가 자꾸 귀를 자극해."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "이 앞쪽은 더 위험하오. 용암 약초꾼들이 돌아다니며 길을 가로막고 있거든."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "위험하더라도 탈출구를 찾으려면 전진할 수밖에 없어."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit"
				},
				{
					"content": {
						"korean": "…발 밑에서 암석이 조금씩 녹아내리고 있어."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
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
						"korean": "자욱한 약초 연기가 유황 동굴 안쪽을 가득 채우기 시작한다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "독한 연기를 피우며 누군가 우리 앞길을 막으려 접근하고 있다."
					}
				},
				{
					"content": {
						"korean": "…눈이 따가워서 앞이 잘 안 보여."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들, 지옥의 용암 속에서 재가 되어라!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 멈출 순 없어. 다시 전열을 가다듬자."
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "열기를 뿜어내며 random_boss 모습이 연기 속에서 나타난다."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더는 못 간다! 돼지 정령님께 영혼을 바치면 큰 행운을 얻는데 왜 거부하는 거냐!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그런 유혹에 속을 생각 없다. 길을 비켜라!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…더 이상 물러설 곳은 없어."
					},
					"emotion": "sad"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크악… 돼지 정령님의 위대한 행운을 알아보지 못하다니…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "남을 속여 갇히게 만드는 행운 따위는 필요 없다."
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "약초꾼이 쓰러지자 막혔던 굴이 뚫리고, 검은 벼랑 기둥으로 이어지는 통로가 드러났다."
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
