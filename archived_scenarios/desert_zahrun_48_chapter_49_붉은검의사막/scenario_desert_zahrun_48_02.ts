export const scenario_desert_zahrun_48_02 = {
	"scenario_id": "desert_zahrun_48_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"붉은 모래 바람 속, 주인 잃은 검들이 무더기로 꽂힌 골짜기에 발을 들였다.",
			"곳곳에 흔들리는 쪽빛 헝겊 깃발과 호의를 베푸는 무기 상인.",
			"그러나 황동 물병에서 피어오른 수증기는 검의 빛을 앗아가기 시작했다."
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "주인 잃은 검들이 붉은 모래 무덤처럼 솟아 있는 골짜기다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어서 와라. 나는 이 골짜기를 지키는 검객 페로다."
					},
					"speaker": "ferro"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…바람 소리가 마치 울부짖는 소리처럼 들려."
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저기 바위에 묶인 쪽빛 헝겊 깃발을 따라가면 호의적인 무기 상인을 만날 수 있다."
					},
					"speaker": "ferro"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ferro",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쪽빛 헝겊 깃발은 길을 안내하는 무기 상인의 표식이다."
					},
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "깃발 끝에 핏자국 대신 검은 그림자 가루가 묻어 있어."
					}
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "그건 사막의 모래일 뿐이니 너무 의심하지 마라."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…손끝에 닿는 기운이 불길하다."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ferro"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "무기 상인이 갈증을 달래라며 황동 물병을 건넸다."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "물병 마개를 열어 내부 구조를 정밀하게 점검해 봐야겠어."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마개를 열자 미세한 수증기가 주둥이로 새어 나왔다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "뜨거운 사막 열기 때문에 물이 증발하는 것뿐이다."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ferro",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "물병에서 나온 수증기가 페로의 검집을 빽빽하게 감쌌다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 검의 은빛 광택이… 검은 잿빛으로 변해 바스러지고 있어!"
					},
					"speaker": "ferro"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "수증기가 검의 기운과 깃든 빛을 빼앗아 가고 있어!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…검이 생기를 잃고 부러져 간다."
					},
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "무기 상인의 호의는 무기를 빼앗기 위한 덫이었단 말인가!"
					},
					"speaker": "ferro",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "후후, 내 물병의 수증기 맛이 어떠냐? 그 검들도 내 골짜기 컬렉션에 추가해주마!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "호의로 위장해 무기들을 훔치는 함정을 부숴주마!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…더는 속지 않는다."
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 하지만 이미 그 검객의 기운과 그림자는 내 주인 자룬에게 바쳐졌다…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빼앗긴 검의 기운을 되찾으려면 자룬을 추적해야 해."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무기 상인은 쓰러졌으나, 빼앗긴 빛은 사막 심처로 스며들었다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 부러진 검도 이 골짜기 모래밭에 무덤처럼 꽂힐 뿐이다!"
					}
				},
				{
					"content": {
						"korean": "여기서 무릎 꿇을 수는 없어. 다시 일어서야 해."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
