export const scenario_hell_lumen_0_03 = {
	"scenario_id": "hell_lumen_0_03",
	"order": 3,
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
			"고통은 사라졌다. 그들은 미소 짓는다.",
			"그러나 그 미소 뒤에는 공허만이 남았다.",
			"신더는 시험했다. 두려움도, 분노도, 기쁨조차도 없는 껍데기들을.",
			"평온은 축복이 아니었다. 죽음과 같았다."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "사제의 축복을 받은 자들이 잔잔한 미소와 함께 앉아 있다."
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저게… 구원받은 자들의 모습인가."
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통이 사라진 얼굴이야. 평온해 보여."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…움직여. 안 그러면 죽을 거다."
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어떠한 반응도 없다. 그들은 여전히 미소만 지을 뿐이다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "두려움도… 분노도 없어…."
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "하하! 정말 웃기는군! 기쁨조차도 잃어버렸나?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무것도 안 남아있어. 그냥 껍데기야."
					},
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통과 함께 모든 감정이 사라진 거다. 축복이라고 했던가?"
					},
					"emotion": "base",
					"speaker": "cinder"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "이런 게 구원이라면… 차라리 고통받는 게 나아!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그들은 이미 죽은 거나 마찬가지야."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "평온은 곧 공허였다. 살아있다는 증거는 고통뿐이다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직도 고통을 원하는가? 어리석은 영혼이여."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 않아. 이 평온이 진짜가 아니란 걸 밝혀낼 거야."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 이 평온을 방해하려는가?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건 평온이 아니야. 살아있지 못한 죽음이지."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "고통 없이 살 수 있다면, 그게 바로 지옥의 축복이다."
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…훗. 아직 진짜를 보지 못했군. 사제의 진정한 뜻을."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진짜… 사제 말인가?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그들은 계속 앞으로 나아갔다. 사제의 미소 뒤에 감춰진 진실을 찾아."
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
