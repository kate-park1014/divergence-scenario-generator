export const scenario_desert_kaelith_44_04 = {
	"scenario_id": "desert_kaelith_44_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고대 제단 주위로 붉은 아지랑이가 이글거린다.",
			"초고열의 열기에 숨마저 턱턱 막히는 사막의 깊은 곳.",
			"과거 수호대의 검술을 기억하는 퇴역 검객을 만났다.",
			"유리 속에 갇힌 불꽃이 마침내 제단을 녹이려 하고 있었다."
		],
		"english": [],
		"japanese": [],
		"chinese": [],
		"french": [],
		"spanish": [],
		"vietnamese": [],
		"thai": [],
		"hindi": []
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "제단 입구의 모래가 아지랑이를 그리며 이글거린다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공기가 너무 뜨거워. 숨을 쉴 때마다 목이 타는 것 같아."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "오랜만에 보는 백열의 아지랑이로군. 과거 카엘리스가 쓰던 화염 검술의 흔적이다."
					},
					"emotion": "base",
					"speaker": "jasper",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 제단 안으로 들어갈 방법을 아십니까?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "내 검으로 길을 뚫어주지. 대신 나를 보수로 고용해라."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "jasper",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "저 이글거리는 검흔을 봐라. 보통 화염이 아니다."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "검흔 주위의 유리가 이상할 정도로 까맣게 굳어 있어."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "겉은 검은 껍질로 봉인되어 있지만, 내부에는 초고열의 불꽃이 응축되어 있지."
					},
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…소름 돋을 정도로 뜨거운 압력이다."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어갈수록 열기가 유리를 팽창시키고 있어."
					},
					"emotion": "angry",
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "제단 중앙에 거대한 유리 결정이 폭주하고 있어!"
					}
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "angry",
					"content": {
						"korean": "결정이 충격으로 깨지면 안 된다. 껍질 속 불꽃이 밖으로 터져 나올 테니까."
					}
				},
				{
					"content": {
						"korean": "물병으로 결정의 겉면을 억제해야 해."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "발 밑에 깨진 가면 파편이 떨어져 있어."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "그건 카엘리스가 남긴 가면의 조각이다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "안쪽에 글씨가 새겨져 있어. '피의 온도가 모자라 검이 굳지 않는다'…"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "jasper",
					"emotion": "sad",
					"content": {
						"korean": "불꽃을 완전히 억누르지 못해 붉게 일렁였다는 뜻이지."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 지체할 수 없어. 제단 꼭대기로 가자."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고열의 사방 방출을 버티지 못하고 쓰러졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…결정을 멈출 완벽한 방법을 다시 찾아야 해."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하하하! 붉은 화염 속에서 모조리 타버려라!"
					},
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "찌릿한 열기가 제단을 가득 채운다. 감히 누굴 멈추겠다는 거냐!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 유리의 폭주를 여기서 끝내겠다!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "조심해라! 겉면을 강하게 타격하면 내부의 화염이 사방으로 튄다!"
					},
					"speaker": "jasper"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "동제 물병을 던져 유리 결정을 깬다!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "던진 물병이 강하게 부딪쳐 검은 유리 껍질이 금이 가며 터져 나갔다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "껍질이 부서지며 내부의 초고열 화염이 터져 나오고 제단 기둥이 녹아내린다!"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크아아앗! 사방이 녹아내린다!"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "으윽… 껍질이 녹아내리며 폭주가 멈추는구나…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결정은 깨졌지만, 화염이 사방으로 튀어 제단 기둥이 모두 녹아내렸어."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "jasper",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "jasper",
					"content": {
						"korean": "물병을 그냥 던진 충격 때문에 열기가 더 폭발했다. 다음엔 순동으로 완벽히 봉인하는 법을 써야 해."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흘러내린 유리 잔해 속에서 다음 장소로 향하는 열기가 느껴진다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
