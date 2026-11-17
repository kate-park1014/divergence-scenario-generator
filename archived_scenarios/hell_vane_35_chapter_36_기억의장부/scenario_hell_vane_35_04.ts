export const scenario_hell_vane_35_04 = {
	"scenario_id": "hell_vane_35_04",
	"order": 4,
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
			"영혼 은행 접견실. 핏빛 안개가 서늘하게 깔린 곳.",
			"영혼을 빼앗긴 채무자 신더가 떨리는 숨을 내쉬고 있었다.",
			"베인이 지옥의 모든 영혼 차용증을 쓸어 담고 있다는 소문.",
			"탐험대는 차용증에 얽힌 거대한 음모를 밝히기 위해 발을 내딛는다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "서늘한 접견실 내부에는 서류 뭉치가 수북하게 쌓여 있었다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "신더, 베인에게 영혼을 빼앗긴 상황을 설명해 주십시오."
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "cinder",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 악마가 내 영혼 차용증을 강제로 빼앗아 갔어요…"
					},
					"speaker": "cinder",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "사방에 수천 개가 넘는 영혼 장부가 가득해."
					}
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "베인은 지금 지옥에 돌아다니는 차용증을 전부 수집하고 있어요."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지옥 전체의 영혼 차용증을 전부 쥐려는 게 틀림없어."
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "차용증을 함부로 찢어버리면 안 돼요! 이자가 복리로 증폭돼요!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "계약을 파기하려 하면 체납자의 영혼 파편이 강제로 파기되는 구조로군."
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "끔찍한 함정이 숨어 있었어…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "베인은 그 맹점을 이용해 채무자들의 영혼을 한꺼번에 묶어두고 있어요."
					},
					"speaker": "cinder",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "영혼 차용증의 위험성을 이용해 채무자들을 지배하려는 무서운 구상이다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "손님들, 접견실 깊숙한 곳까지 들어오시면 곤란합니다."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "베인이 지옥 전체의 차용증을 쓸어 모으는 진짜 이유가 뭡니까?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "지옥 영혼 은행의 독점. 그것이 그분이 그리는 사구의 완성입니다."
					}
				},
				{
					"content": {
						"korean": "숨이 턱 막히는 마력이 느껴져."
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 지옥의 수많은 차용증이 그분의 손으로 넘어가고 있지요."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "은행을 독점해 지옥 전체를 통제하겠다는 뜻이군."
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 붉은 턱시도 자락에서 떨어진 미세한 조각이 반짝인다."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "바닥에 형광 앰버색 사슬 조각이 떨어져 있잖아?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "그건… 그분이 지나치며 흘린 영혼 사슬의 파편!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사슬 마력이 체납자가 아닌 베인의 생체 마력과 완벽히 일치해!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "등골이 오싹해지는 사실이야."
					},
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "베인이 영혼 차용증을 회수해 은행 독점을 노린다는 결정적 정황 증거다."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 이상의 조사는 허용할 수 없습니다. 당신들의 영혼도 맡기시지요."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "베인의 독점 구상을 여기서 끊어놓겠다!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 검증을 통과하지 못하면 그 누구도 나갈 수 없다!"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "영혼 차용증에 당신들의 이름이 새로 적히겠군요."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "억압된 영혼들의 사슬을 풀어줄 때까지 포기하지 않는다!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "윽… 차용증의 마력 봉인이 풀리다니…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "형광 앰버색 사슬 조각이 베인의 것임을 밝혀냈다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흑막의 결정적 증거를 손에 쥔 탐험대는 이제 깊은 금고 속으로 향한다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
