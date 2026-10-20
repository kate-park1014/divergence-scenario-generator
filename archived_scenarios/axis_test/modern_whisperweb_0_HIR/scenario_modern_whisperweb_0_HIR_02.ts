export const scenario_modern_whisperweb_0_HIR_02 = {
	"scenario_id": "modern_whisperweb_0_HIR_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시 정보망 교란은 계속되었다.",
			"시청 데이터 복구팀 닥스는 중요한 사망자 데이터 스트림을 입수했다.",
			"주인공은 그 데이터의 합법적 처리를 위해 시청 정보관리과에 인계했다.",
			"그러나 절차는 예상치 못한 결과를 가져왔다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 정보관리과, 오래된 백업 저장소에서 데이터가 감지되었다."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이거 봐요. 사망자 데이터 스트림이에요. 위스퍼 웹이 시청 서버에서 털어낸 것 같아요."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…불법적으로 입수한 정보는 처리할 수 없어."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "공식적인 절차를 밟아 시청 정보관리과에 인계해야 해."
					}
				},
				{
					"content": {
						"korean": "하지만 이러다 더 퍼지면… 시간이 없어요!"
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시청 정보관리과에 데이터를 넘겼어요. 승인 대기 중이에요."
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "합법적인 절차를 지켜야지. 곧 처리될 거야."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "데이터 유출 속도가 너무 빨라요. 1시간마다 새로운 정보가 새고 있어요."
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 우리의 원칙이야."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "방금 익명 커뮤니티에 사망자 의료 기록 300여 개가 유출됐어요."
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "뭐라고?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유출 소식에 일부 유가족들이 시청 앞에 모여들었다. 정신적 충격을 호소했다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "승인 지연 때문에 벌어진 일이에요. 내가 경고했잖아요."
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…당장 추가 유출을 막아야 해."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "시청 데이터베이스에 아직 취약점이 남아 있어요. 다른 정보도 언제든지 새어 나갈 수 있어요."
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내가 너무 원칙을 고수했어. 결국 이런 결과를 만들다니."
					}
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이대로 두면 더 많은 피해자가 생길 거예요. 당장 막아요!"
					}
				},
				{
					"content": {
						"korean": "알아. 지금 당장 이 취약점을 보완해야 해."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "정보는 늘 너보다 빠르다. 다음은 네 기록이다."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "시청 데이터베이스에 방화벽을 다시 세운다. 다시 돌아올 거야."
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우 하나 막은 것뿐이야. 이미 퍼질 대로 퍼졌어. 이 모든 걸 멈추려면…."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "다음은 유출된 모든 정보를 추적한다. 반드시 끝낼 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 자는 쓰러졌다. 그러나 도시에 유출된 정보는 여전히 떠돌았다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이제는 더 큰 연결고리를 찾아야 했다."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시청 데이터베이스의 핵심 서버 앞에 정체 모를 자가 서 있었다."
					}
				},
				{
					"content": {
						"korean": "느려터진 절차는 이런 결과를 만들지. 이게 네가 원했던 '정의'의 대가야."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 일을 꾸몄군. 더 이상의 유출은 없어."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
