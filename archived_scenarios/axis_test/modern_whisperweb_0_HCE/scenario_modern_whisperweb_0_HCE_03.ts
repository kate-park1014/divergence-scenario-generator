export const scenario_modern_whisperweb_0_HCE_03 = {
	"scenario_id": "modern_whisperweb_0_HCE_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"닥스의 데이터 유출 이후 도시는 잘못된 정보로 혼란에 빠졌다.",
			"위스퍼 웹은 시민들의 불안감을 이용해 도시를 선동했다.",
			"진실을 추구하는 기자 린은 혼란을 막을 방법을 찾고 있었다.",
			"우리는 도시의 공황을 막기 위해 린과 협력해야 했다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시 전광판에는 위스퍼 웹이 퍼뜨린 잘못된 소문이 가득했다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도대체 무슨 일이 벌어지고 있는 거야?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "당신들이 닥스 아카이브를 열고 나서, 정보가 걷잡을 수 없이 퍼지고 있어요."
					}
				},
				{
					"content": {
						"korean": "위스퍼 웹의 소행인가?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "네. 시민들은 대규모 데이터 유출 위험에 직면해 있습니다."
					}
				},
				{
					"content": {
						"korean": "이대로 두면 도시 전체가 공황 상태에 빠질 거예요."
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "일시적으로 막을 방법이 있어요. 대규모 네트워크 점검 공지를 올리는 겁니다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그건 거짓말이잖아."
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만 지금 당장 시민들이 받을 충격을 막을 수 있습니다."
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "일단 공황을 막는 게 중요해. 다른 방법은 없어."
					}
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대규모 데이터 유출보다 나은 선택입니다."
					}
				},
				{
					"content": {
						"korean": "도시 곳곳의 디지털 간판에서 무작위로 깨진 이미지와 의미 없는 숫자가 나타났다 사라졌다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "도시의 모든 전광판에 '대규모 네트워크 점검 중'이라는 허위 공지가 떴다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "봐, 당장은 사람들이 속는 것 같아."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "일부 시민들은 이미 눈치챘을 겁니다. 공공 정보에 대한 불신이 생길 거예요."
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "저기 봐. 사람들이 우리를 비난하고 있어."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "일부 시민들이 '거짓말쟁이들!'이라며 소리쳤다."
					},
					"emotion": "angry",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "오래된 데이터 칩에서 재생 불가능한 오류 메시지와 함께 단편적인 음성 기록이 흘러나왔다. '모든 비밀이… 연결된다…'."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리는 도시를 안정시키려다 거짓말쟁이가 됐어."
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저널리스트로서 진실을 숨긴 것에 후회합니다."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 멈출 수 없어. 위스퍼 웹을 끝내야만 해."
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리가 만든 이 불신은… 되돌릴 수 없을 겁니다. 다음은 더 큰 혼란이 올 거예요."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 계속 간다. 이제 다른 방법은 없어."
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "중앙 서버실 가장 깊은 곳. 정체 모를 자가 기다리고 있었다."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "또 다른 혼란을 가져왔더군."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 퍼뜨린 잘못된 정보를 막으려 했을 뿐이다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 선택한 것은 거짓말이다. 나는 진실을 '연결'할 뿐이다."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오늘 네가 시민들에게 심은 불신은 곧 너희를 집어삼킬 거다."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거짓은 또 다른 거짓을 낳는다. 네가 심은 불신을 봐라."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 아직 끝나지 않았어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 불신을 해결하려면 모든 진실을 밝히는 방법뿐입니다. 다른 방법을 찾아야 해요."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "이 정도로 내 계획을 멈출 순 없어."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 만든 거짓말은 더 큰 정보 유출을 덮을 뿐이다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 의미지? 뭘 더 하려는 거야?"
					}
				},
				{
					"content": {
						"korean": "정체 모를 자는 쓰러졌지만, 도시의 거짓은 더욱 깊어졌다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 공지를 믿는 사람은 이제 거의 없을 거예요."
					}
				}
			]
		}
	]
} as const;
