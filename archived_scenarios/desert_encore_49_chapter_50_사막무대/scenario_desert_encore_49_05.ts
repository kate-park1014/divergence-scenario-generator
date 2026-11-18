export const scenario_desert_encore_49_05 = {
	"scenario_id": "desert_encore_49_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "pool_MirageTroupe_Encore_V1"
	},
	"epilogue": {
		"korean": [
			"앙코르의 환상 무대가 모래 속으로 사라지고 마법 대본은 한 줄기 연기가 되어 소멸했다.",
			"대본에 이름이 묶여 사막에 갇혀 있던 저주가 완전히 풀렸다.",
			"사막의 붉은 바람만이 커튼콜이 끝난 무대 위를 조용히 쓸고 지나갔다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "진홍빛 천막 안으로 들어서자 바닥 곳곳에 서투르게 그어진 검 자국이 보인다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "늦어서 죄송해요! 1화에서 제가 대본을 떨군 탓에 갇히셨으니, 끝까지 돕고 싶어서 쫓아왔어요."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무대 바닥의 긁힌 자국, 모래바람 언덕에서 발견했던 레이피어 흔적과 똑같아."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…천막 내부가 기이할 정도로 넓어."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "화려하게 꾸며진 소품함 주변에 모사품들이 흩어져 있다."
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "소품함 옆의 이 깃털, 바랜 천막 오아시스에서 주웠던 모자 깃털 조각과 같잖아."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "극단장이 쓰던 마법 소품이에요. 진짜 검사가 아닌 걸 숨기려고 소품으로 눈속임을 한 거죠."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "…마치 연극 세트장에 들어온 것 같네."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "조명대 아래에 깨진 외알 안경 테가 떨어져 있다."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 안경 테는 붉은 모래 바위굴에서 본 것과 같은 물건이다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 무대 중앙만 남았어요. 대장장이 페로 씨 말대로 대본을 덮어 계약을 깨야 해요!"
					},
					"emotion": "angry",
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "…심장 소리가 무대 조명처럼 가슴을 울려."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무대 뒤편에서 관객들의 환호성과 함께 기이한 마력이 흘러나온다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막 뒤에서 누군가 놋쇠 레이피어를 겨누고 숨을 죽이고 있다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "…커튼이 곧 열릴 것 같아."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "아직 비극의 완성이 부족합니다. 다시 무대 위로 올라오시지요!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…대본을 덮기 전까지 우리는 절대 무너지지 않는다."
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "진짜 관객들에게 야유를 받고 쫓겨났다… 그래서 가짜 관객을 만들고 날 위해 쓰러질 희생양이 필요했다!"
					}
				},
				{
					"content": {
						"korean": "이 엉성한 연극은 끝이다! 대본을 덮어 계약을 파기한다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "안 돼! 내 무대가, 내 완벽한 비극 결말이 이렇게 닫히다니…!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대본이 덮이자 사막을 채웠던 수많은 환상 관객이 모래가 되어 흩어졌다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "dune",
					"content": {
						"korean": "대본의 마법이 풀렸어요! 이제 우리 모두 사막을 나갈 수 있어요!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "진홍빛 천막 중앙, 놋쇠 레이피어를 든 극단장 앙코르가 우아하게 인사한다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 오십시오! 사막 최고의 유랑 극단에 오신 것을 환영합니다!"
					},
					"speaker": "boss",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "순간 천막이 사라지며 사막 위에 수많은 환상 속 관객들이 나타난다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "연기는 제가 할 테니 여러분은 진짜로 쓰러지기만 하시면 됩니다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "빛바랜 비단 무대터에서 본 옷자락… 넌 검술도 모르는 사기꾼이다. 무대를 끝내주마!"
					}
				},
				{
					"content": {
						"korean": "…저 관객들, 전부 그림자가 없어!"
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"진홍빛 천막 무대. 사막 탈출을 가로막는 마지막 공연장이 펼쳐진다.",
			"실수로 대본을 펼친 날부터 이어진 마법 계약이 이곳에서 요동친다.",
			"환영을 지배하는 유랑 극단장 앙코르와의 마지막 막이 오른다."
		]
	}
} as const;
