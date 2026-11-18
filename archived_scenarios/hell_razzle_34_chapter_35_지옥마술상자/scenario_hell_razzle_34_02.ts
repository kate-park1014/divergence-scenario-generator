export const scenario_hell_razzle_34_02 = {
	"scenario_id": "hell_razzle_34_02",
	"order": 2,
	"random_boss_title": {
		"korean": "사냥꾼"
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유황 불길이 번지는 곡소리 언덕. 연기 속에서 누군가 돌을 줍고 있다."
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "난 곡소리 언덕의 부싯돌 채집꾼 신더요. 불길이 거세져 부싯돌을 챙기던 중이었지."
					},
					"type": "speech",
					"speaker": "cinder",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥에 갇히지 않으려면 이 언덕을 넘어 탈출구를 찾아야 한다."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…바닥이 뜨거워서 발을 붙이기 힘드네."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "검은 연기 사이로 매캐한 불꽃이 튄다."
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "언덕 너머 광대님이 상자로 영혼을 구해주신다지만, 얼마 전부터 불길한 톱니 소리가 들리오."
					},
					"emotion": "sad",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "영혼을 구해주는 마술 상자에서 톱니 소리가 난다니 수상하군."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "공중을 스쳐 지나간 오팔빛 무지개 끈이 자줏빛 연기 속으로 사라졌다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…방금 머리 위로 뭐가 지나간 거지?"
					},
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "cinder",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "광대님의 비밀을 파헤치려던 자들은 돌아오지 못했소. 더 가면 위험하오!"
					},
					"speaker": "cinder",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "위험해도 멈출 순 없다. 톱니 소리의 진짜 이유를 밝혀내겠다."
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "cinder",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…공기가 팽팽하게 조여오는 느낌이야."
					},
					"emotion": "sad",
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "언덕 정상으로 향하는 길. 바위 뒤에서 팽팽하게 시위를 당기는 소리가 난다."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 위에서 우리를 노리고 있다!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "…등 뒤로 소름이 돋아."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "바위 위에서 정체 모를 자가 모습을 드러내며 화살을 겨눈다."
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 광대님의 일에 접근하게 둘 수 없다!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "광대의 마술 상자에 숨겨진 진실을 덮으려고 우리를 공격하는 것이냐!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…화살 끝에 살기가 실려 있어."
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "큭… 나를 넘어서도 마술 상자의 톱니는 멈추지 않는다…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "상자 안에 대체 무슨 짓을 벌이길래 이토록 기를 쓰고 막은 거지?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사냥꾼이 쓰러지자, 그가 쏘아 올린 흔적이 붉은 물이 고인 비명 웅덩이 쪽으로 이어졌다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "단서를 쫓아 다음 지역인 비명 웅덩이로 이동하자."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "돌아가라. 광대님의 비밀은 너희가 알 바가 아니다."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…여기서 쓰러질 순 없다. 다시 무기를 쥐자."
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 유황 불길을 피해 도착한 곡소리 언덕.",
			"이곳 너머에는 영혼을 구원한다는 마술 상자 광대가 기다린다.",
			"하지만 언덕에는 불길한 톱니바퀴 소문이 감돌고 있었다."
		]
	}
} as const;
