export const scenario_modern_whisperweb_0_HIR_04 = {
	"scenario_id": "modern_whisperweb_0_HIR_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "나한테 위스퍼 웹의 핵심 정보가 있어. 그걸 알면 모든 게 바뀔 거야."
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 정보를 원한다. 대신 안전을 보장하겠다. 합법적인 기관 보호를 신청할 수 있다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "좋아. 난 블러드 스톰 잔당에게 쫓기고 있어. 도박 빚 5백만 크레딧 때문이야."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알겠다. 사법 기관에 임시 보호 명령을 신청하겠다."
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "임시 보호 명령 신청 서류를 접수했다. 이제 기다리면 된다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기다리라고? 블러드 스톰 놈들은 기다려주지 않아. 내 도피 경로, 은닉 자산까지 다 털어갈 거야."
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사법 기관은 개인 정보를 철저히 보호한다. 걱정 마라."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "그런데… 왜 이렇게 불안하지? 뭔가 잘못되고 있는 것 같아."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"content": {
						"korean": "제길! 내 아지트 한 곳이 습격당했어! 정보 중계료 5백만 크레딧이 사라졌다고!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "뭐라고? 사법 기관 외엔 누구도 알 수 없는 정보인데."
					},
					"type": "speech"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 도피 경로, 은닉 자산 5천만 크레딧까지… 전부 새어 나갔어! 당신 때문이야!"
					}
				},
				{
					"content": {
						"korean": "…누군가 이 과정에서 정보를 빼돌렸다. 사법 기관 내부에 문제가 있다."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오래된 데이터 칩에서 재생 불가능한 오류 메시지와 함께 '모든 비밀이… 연결된다…'라는 단편적인 음성 기록이 흘러나왔다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "또야! 두 번째 아지트도 털렸어! 이젠 갈 곳도 없다고!"
					}
				},
				{
					"content": {
						"korean": "내가 너무 안일했다. 공공의 안전을 위해 정보를 얻으려다 널 위험에 빠뜨렸군."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 게 당신의 '합법적인 절차' 때문이야! 난 이제 끝이야!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 끝나지 않았다. 이 상황을 막기 위해 모든 수단을 동원하겠다. 그 과정에서 더 많은 정보가 노출될 수 있다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "…뭘 할 건데?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어둡고 습한 골목 벽면에서 사이버 범죄 조직 '고스트 해커스'의 표식으로 보이는 낙서가 눈에 띄었다."
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청의 사법 기관 정보망 깊숙한 곳, 서버 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "하찮은 정보 브로커 따위의 안전을 위해… 네 '질서'가 이런 결과를 초래했지."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 정보 유출을 꾸몄군. 네 목적이 뭐지?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry",
					"content": {
						"korean": "당신이 내 정보를 빼돌렸지! 내 돈!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불법 자산은 원래 주인에게 돌아가는 법. 그리고 너의 비밀은 곧 모두의 것이다."
					}
				},
				{
					"content": {
						"korean": "더 이상의 유출은 없다. 네 정보망을 끊어버리겠다."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"speaker": "kai",
					"action": "exit",
					"type": "direction"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "네가 지키려던 질서는, 결국 개인을 파괴했다. 너의 원칙은 쓸모없어."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이번엔 실패했지만… 개인의 정보 보호와 공공의 안전, 그 균형을 반드시 찾아내겠다. 다음엔 네 정보망의 근원을 추적한다."
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "네가 지키려던 카이의 비밀은… 결국 더 큰 불씨를 당겼을 뿐이다. 정보는 멈추지 않아."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아니, 나는 개인의 안전과 공공의 질서 사이에서 균형을 찾아낼 것이다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 자는 쓰러졌다. 그러나 카이의 정보 유출은 주인공에게 깊은 딜레마를 남겼다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과연 개인의 비밀은 어디까지 보호받을 수 있을까? 도시는 또 다른 정보의 소용돌이에 휘말릴 준비를 하고 있었다."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카이는 불법 정보 브로커로, 위스퍼 웹의 핵심 정보를 가지고 있었다.",
			"불법 도박 빚 때문에 쫓기던 그는, 주인공에게 안전을 요구했다.",
			"주인공은 공공의 안전을 위해 그의 정보를 얻으려 했다.",
			"그러나 합법적 절차가 예상치 못한 결과를 가져왔다."
		]
	}
} as const;
