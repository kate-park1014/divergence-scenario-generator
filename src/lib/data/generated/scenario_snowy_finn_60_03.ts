export const scenario_snowy_finn_60_03 = {
	"scenario_id": "snowy_finn_60_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끊어진 지도 위, 멈춰 선 발자국이 선명했다."
					}
				},
				{
					"type": "speech",
					"speaker": "king",
					"content": {
						"korean": "…이건 그저… 정복 계획이다."
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "괜찮아요."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "길을 잃을 수도 있죠."
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…내가… 길을 잃었다고?"
					},
					"speaker": "king",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "혼자였잖아요. 두려웠겠죠."
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": []
		}
	],
	"prologue": {
		"korean": [
			"왕의 골방. 누구도 들이지 않던 비밀의 장소.",
			"낡은 지도 한 장이, 그의 진짜 이야기를 속삭였다.",
			"따뜻한 남쪽 나라를 향했던, 멈춰버린 발자국.",
			"이제, 길 잃은 왕의 쓸쓸함이 드러난다."
		]
	}
} as const;
