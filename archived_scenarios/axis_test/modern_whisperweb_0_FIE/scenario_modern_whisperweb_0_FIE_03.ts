export const scenario_modern_whisperweb_0_FIE_03 = {
	"scenario_id": "modern_whisperweb_0_FIE_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 건물 3층, '네온 트루스' 간판이 희미하게 빛났다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "무슨 일로 왔어? 네온 트루스는 아무나 찾아오는 곳이 아닌데."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도시를 덮은 소문, 네온 트루스에서 다루고 있지?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "진실만 보도해. 확인되지 않은 소문은 다루지 않아."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 수집한 자료를 넘겨."
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "함부로 넘길 수 없어. 제보자 보호가 우선이야."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "상관 없어. 위스퍼 웹의 근원을 찾아야 해."
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그 자료 억지로 열면 안에 든 개인 기록이 같이 새. 수많은 사람이 위험해져."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "난 진실만 필요해."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공의 손목 패드에 깨진 이미지와 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라졌다."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "내 사무실엔 못 들어와. 이건 사생활 침해야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "방해하지 마. 정보는 모두에게 공개되어야 해."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 린의 사무실 잠금장치를 부수고 안으로 들어섰다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "안 돼! 그건 안 돼…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "바닥에 떨어진 오래된 데이터 칩에서 재생 불가능한 오류 메시지와 함께 '모든 비밀이… 연결된다…'라는 음성이 반복 재생됐다."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 린이 수집한 미공개 제보 자료를 강제로 탈취했다."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "네가… 대체 뭘 한 건 줄 알아? 수십 명의 신상이 위험해졌어!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어차피 위스퍼 웹이 모든 걸 공개할 거였어. 내가 조금 앞당긴 것뿐이야."
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아니. 이건 네가 벌인 일이야. 너 때문에 도시 곳곳에서 폭동이 일어날 거야."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 곳곳의 디지털 광고판에 왜곡된 얼굴과 속삭임에 대한 도시 괴담이 급속도로 퍼지기 시작했다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "더 이상 널 도울 수 없어. 너의 방식은 진실을 왜곡하고 있어."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 외곽의 오래된 중계탑. 거대한 스크린 앞에 정체 모를 자가 서 있었다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 네가 뿌린 혼란이 나를 이곳으로 불렀어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 소문을 조작하고 있나?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "난 그저 너희의 선택을 지켜봤을 뿐. 린의 자료를 공개한 건 너야."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 모든 진실은 밝혀져야 해."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "중계탑의 스크린이 폭발하며 모든 정보가 휩쓸렸다."
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 놈. 린이 지키려던 모든 것은 이제 존재하지 않아."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 린의 사무실부터 다시 확인해야겠어."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "날 쓰러뜨려도… 린의 제보자들은 이미 파괴됐어. 사람들의 폭동은 멈추지 않아."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이 폭동은 내가 멈출 거야."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 쓰러지자 중계탑은 잠시 정적에 잠겼다. 그러나 도시는 여전히 격렬한 소용돌이 속에 있었다."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "혼란은 멈추지 않는다. 오히려 더 많은 이들이 위험에 빠질 뿐이다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 곳곳에 확인되지 않은 소문이 번졌다.",
			"주인공은 기자 린이 수집한 자료를 찾았다.",
			"린은 정보를 쉽사리 내어주려 하지 않았다.",
			"정보를 얻는 방식은 점차 폭력적으로 변했다.",
			"도시는 격렬하게 반응할 준비를 마쳤다."
		]
	}
} as const;
