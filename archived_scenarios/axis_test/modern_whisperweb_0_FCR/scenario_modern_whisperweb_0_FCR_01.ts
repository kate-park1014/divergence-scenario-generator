export const scenario_modern_whisperweb_0_FCR_01 = {
	"scenario_id": "modern_whisperweb_0_FCR_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시는 거짓 정보로 뒤덮였다.",
			"도시의 디지털 광고판에 알 수 없는 메시지가 뜨기 시작했다.",
			"정보상 에코가 이 현상에 대해 무언가 알고 있는 듯하다.",
			"도시의 심장부로 향해 기이한 현상의 진상을 밝혀내야 한다."
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어두운 골목, 정보상 에코가 전광판을 바라보고 있었다."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…왔군. 저거 봐."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전광판이 왜 저래?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "계속 저래. '블랙아웃'의 조작된 메시지가 송출되고 있어."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이거 네가 띄운 거야?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "난 시키는 대로 했을 뿐이야. 하지만… 좀 이상해."
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 곳곳의 디지털 광고판에 깨진 이미지와 의미 없는 숫자 배열이 찰나의 순간 나타났다 사라진다."
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 단편적인 영상도 받았어. '모든 비밀은 곧 공개될 것'이라는 메시지야."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 모든 정보들이… 하나의 큰 그림 같아."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 다 위스퍼 웹 때문이라고?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 너무 많은 정보를 너무 빨리 퍼뜨리고 있어. 위험해."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 위험?"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "정보가 넘치면 사람들은 판단력을 잃어. 결국 통제될 거야."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기서 더 들어가면 위스퍼 웹의 핵심에 닿아."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거기서 잘못된 정보가 뿌려지면 도시 전체가 마비될 수도 있어."
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 있는 건 나밖에 없어. 심장부로 간다."
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…겨우 이걸 막았다고 생각하나? 이건 시작일 뿐."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "더 이상 못하게 할 거야."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자의 그림자가 사라졌다."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그러나 도시의 소문은 멈추지 않았다. 아직 시작에 불과했다."
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 가장 깊은 곳. 거대한 서버 앞에 정체 모를 자가 서 있었다."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 모든 비밀이 공개되는 순간을 방해하러?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 혼란을 당장 멈춰."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "사람들은 진실을 원해. 내가 그걸 도와주는 것뿐."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "포기해라. 정보의 물결은 막을 수 없어."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 다시 돌아와. 내일 밤 송출실부터 찾아낼 거야."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어둠 속에서 다시 한번 의지를 다진다."
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
