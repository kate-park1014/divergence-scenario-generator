export const scenario_modern_whisperweb_0_HIE_05 = {
	"scenario_id": "modern_whisperweb_0_HIE_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_285"
	},
	"prologue": {
		"korean": [
			"도시는 광기의 정보에 휩싸였다.",
			"위스퍼 웹은 멈추지 않고 모든 것을 폭로하고 있었다.",
			"주인공의 과거마저 장부를 통해 새어나갔다.",
			"에코의 마지막 조언. 이제는 막아야 한다.",
			"이 모든 것을 끝내기 위해, 주인공은 위스퍼 웹의 심장부로 향한다."
		]
	},
	"epilogue": {
		"korean": [
			"위스퍼 웹은 파괴되었다.",
			"하지만 모든 비밀은 도시 전체에 폭로된 후였다.",
			"전광판에는 수많은 사람들의 치부가 적나라하게 떠다녔다.",
			"침묵하던 도시는 이제 서로를 불신하는 소음으로 가득 찼다.",
			"주인공은 혼자였다. 얻은 것은 승리뿐. 잃은 것은… 너무나 많았다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 전광판이 불규칙하게 깜빡였다."
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이젠… 통제 불능이야."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왔군. 이미 도시 전체가 광기에 휩싸였어."
					}
				},
				{
					"content": {
						"korean": "수천 명의 개인 정보가 전광판에 뜨고 있어."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "막아야 해."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "위스퍼 웹은 도시 시스템 전체를 장악했어."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대체 뭘 원하는 거야?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그들은 모든 비밀이 사라지는 것을 원해. 궁극적인 '자유'를 명분으로."
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "너의 정보도 예외는 아니야. 이미 퍼지고 있어."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 대형 간판에 주인공의 오래된 불법 활동 기록이 떴다가 사라졌다."
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…내 정보까지."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "이게 그들의 방식이야. 모두를 같은 선상에 두는 것."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이젠 돌이킬 수 없어. 이대로 두면 도시는 파괴될 거야."
					},
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳에서 이웃의 비밀이 전광판에 떴다는 소문이 급속도로 퍼졌다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시민들이 서로를 믿지 못하고 있어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 마지막 기회야. 위스퍼 웹의 코어를 파괴해야 해."
					},
					"speaker": "echo"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만, 그 대가는… 너의 모든 것이 될 거야."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "후회 없어. 끝낼게."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공은 위스퍼 웹의 최종 거점으로 향했다. 모든 것을 걸어야 했다."
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "네가 날 이겼다고 생각하나? 이미 늦었어. 모든 것이 폭로되었어. 너도, 너희 도시도."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니야… 내가 막았어…"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "위스퍼 웹은 파괴되었지만… 정보의 확산은 멈출 수 없었어."
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 정보가 도시의 전광판에 무차별적으로 폭로되었다. 도시는 광란의 밤을 맞았다."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주인공은 승리했지만, 잃어버린 것은 너무나 많았다. 이 도시의 상처는 치유될 수 있을까."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "봐. 네 모든 비밀은 이미 모두에게 퍼졌어. 넌 아무것도 막지 못했어."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이대로는 안 돼. 도시의 데이터 기록을 복구해야 해."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹의 거대한 서버 코어. 모든 정보의 중심에 '그'가 서 있었다."
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. 네 모든 비밀은 이제 나에게 있어. 그리고 곧, 모든 사람에게."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 광기를 멈출 거야."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "광기? 아니. 이건 '자유'다. 사람들은 결국 이걸 원해."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
