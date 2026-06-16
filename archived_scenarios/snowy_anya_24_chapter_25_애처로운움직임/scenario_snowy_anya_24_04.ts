export const scenario_snowy_anya_24_04 = {
	"scenario_id": "snowy_anya_24_04",
	"order": 4,
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 몰아치는 골짜기, 빛은 여전히 길을 안내했지만 어딘가 불안했다.",
						"english": "In the blizzard-swept valley, the light still guided the way, but it felt uneasy.",
						"japanese": "吹雪が吹き荒れる谷、光は相変わらず道を案内していたが、どこか不安げだった。",
						"chinese": "在暴风雪肆虐的山谷中，光芒依然指引着道路，却透着一丝不安。",
						"french": "Dans la vallée balayée par le blizzard, la lumière guidait toujours le chemin, mais elle semblait incertaine.",
						"spanish": "En el valle azotado por la ventisca, la luz seguía guiando el camino, pero se sentía inquieta.",
						"vietnamese": "Trong thung lũng bão tuyết, ánh sáng vẫn dẫn đường nhưng có vẻ bất an.",
						"thai": "ในหุบเขาที่พายุหิมะพัดโหม แสงสว่างยังคงนำทาง แต่ดูเหมือนจะกังวลบางอย่าง",
						"hindi": "बर्फीले तूफ़ान से घिरी घाटी में, प्रकाश अभी भी रास्ता दिखा रहा था, लेकिन कहीं न कहीं बेचैन था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛이… 흔들려.",
						"english": "The light... it's wavering.",
						"japanese": "光が…揺れてる。",
						"chinese": "光……在颤抖。",
						"french": "La lumière... elle vacille.",
						"spanish": "La luz... tiembla.",
						"vietnamese": "Ánh sáng... lung lay.",
						"thai": "แสงสว่าง...สั่นไหว",
						"hindi": "प्रकाश... डगमगा रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 멈칫거리고, 자꾸 뒤를 돌아봐.",
						"english": "Yes. It hesitates, keeps looking back.",
						"japanese": "そうだ。ためらって、しきりに後ろを振り返る。",
						"chinese": "是的。它犹豫着，总是不停地回头看。",
						"french": "Oui. Il hésite, et ne cesse de regarder en arrière.",
						"spanish": "Sí. Duda, y no para de mirar atrás.",
						"vietnamese": "Phải. Nó chần chừ, cứ ngoảnh lại nhìn phía sau.",
						"thai": "ใช่ มันลังเล และคอยหันกลับไปมองข้างหลัง",
						"hindi": "हाँ। यह हिचकिचाता है, बार-बार पीछे मुड़कर देखता है।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "마치… 무언가를 놓치고 싶지 않은 것처럼.",
						"english": "As if... it doesn't want to miss something.",
						"japanese": "まるで…何かを見落としたくないように。",
						"chinese": "好像……不想错过什么似的。",
						"french": "Comme si... il ne voulait pas rater quelque chose.",
						"spanish": "Como si... no quisiera perderse algo.",
						"vietnamese": "Như thể... không muốn bỏ lỡ điều gì đó.",
						"thai": "ราวกับว่า...มันไม่อยากพลาดอะไรไป",
						"hindi": "जैसे... यह कुछ खोना नहीं चाहता हो।"
					},
					"emotion": "base",
					"speaker": "inka",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 빛, 슬퍼 보여.",
						"english": "That light looks sad.",
						"japanese": "あの光、悲しそうだね。",
						"chinese": "那光，看起来很悲伤。",
						"french": "Cette lumière a l'air triste.",
						"spanish": "Esa luz parece triste.",
						"vietnamese": "Ánh sáng đó, trông buồn bã quá.",
						"thai": "แสงสว่างนั้น ดูเศร้าจัง",
						"hindi": "वह प्रकाश, उदास लग रहा है।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "슬프다고?",
						"english": "Sad?",
						"japanese": "悲しいって？",
						"chinese": "悲伤？",
						"french": "Triste ?",
						"spanish": "¿Triste?",
						"vietnamese": "Buồn bã ư?",
						"thai": "เศร้าเหรอ?",
						"hindi": "उदास?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "응. 한 방향으로 가늘게 뻗었다가 움츠러드는 손짓….",
						"english": "Yeah. A hand gesture, stretching thinly in one direction, then recoiling...",
						"japanese": "うん。一方向に細く伸びては縮む仕草…。",
						"chinese": "嗯。一个手势，朝一个方向细细伸展，然后又缩回来……",
						"french": "Oui. Un geste de la main, s'étirant finement dans une direction, puis se rétractant...",
						"spanish": "Sí. Un gesto con la mano, estirándose finamente en una dirección y luego encogiéndose...",
						"vietnamese": "Ừ. Cử chỉ bàn tay, vươn ra rồi rụt lại...",
						"thai": "อืม. ท่าทางของมือที่ยื่นออกไปบางๆ ในทิศทางหนึ่งแล้วหดกลับ...",
						"hindi": "हाँ। एक हाथ का इशारा, एक दिशा में पतला होकर फैलना, फिर सिकुड़ना..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "무언가를 잡으려 애쓰는데, 닿지 못해서 아파하는 것 같아.",
						"english": "It's trying to grasp something, but seems to be hurting because it can't reach.",
						"japanese": "何かを掴もうと必死なのに、届かなくて苦しんでいるみたい。",
						"chinese": "它努力想抓住什么，但似乎因为够不到而痛苦着。",
						"french": "Il essaie d'attraper quelque chose, mais semble souffrir de ne pas pouvoir l'atteindre.",
						"spanish": "Está tratando de agarrar algo, pero parece sufrir porque no puede alcanzarlo.",
						"vietnamese": "Cố gắng nắm giữ gì đó, nhưng có vẻ đau đớn vì không thể chạm tới.",
						"thai": "พยายามจะคว้าบางสิ่ง แต่ดูเหมือนจะเจ็บปวดเพราะเอื้อมไม่ถึง",
						"hindi": "यह कुछ पकड़ने की कोशिश कर रहा है, लेकिन पहुँच न पाने के कारण दर्द में लग रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…저 너머에… 희미한 그림자가.",
						"english": "...Beyond that... a faint shadow.",
						"japanese": "…その向こうに… かすかな影が。",
						"chinese": "...在那边... 一个模糊的影子。",
						"french": "...Au-delà de ça... une ombre indistincte.",
						"spanish": "...Más allá de eso... una sombra tenue.",
						"vietnamese": "...Bên kia... một bóng mờ.",
						"thai": "...ที่ปลายทางนั้น... เงาร่างเลือนราง",
						"hindi": "...उसके पार... एक धुंधली छाया।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환영인가?",
						"english": "Is it an illusion?",
						"japanese": "幻影か？",
						"chinese": "是幻影吗？",
						"french": "Est-ce une illusion ?",
						"spanish": "¿Es una ilusión?",
						"vietnamese": "Là ảo ảnh sao?",
						"thai": "ภาพลวงตาหรือเปล่า?",
						"hindi": "क्या यह एक भ्रम है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아마도. 빛은 그 그림자를 향해 몸부림치고 있어.",
						"english": "Perhaps. The light is struggling towards that shadow.",
						"japanese": "おそらく。光はその影に向かって身悶えしている。",
						"chinese": "也许吧。光正在向那影子挣扎着。",
						"french": "Probablement. La lumière se débat vers cette ombre.",
						"spanish": "Quizás. La luz se está esforzando hacia esa sombra.",
						"vietnamese": "Có lẽ. Ánh sáng đang vật lộn hướng về phía bóng đó.",
						"thai": "อาจจะ. แสงกำลังดิ้นรนเข้าหาเงานั้น",
						"hindi": "शायद। प्रकाश उस छाया की ओर संघर्ष कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "잡으려 해도 잡히지 않는 걸까.",
						"english": "Is it something that can't be caught even if you try?",
						"japanese": "掴もうとしても掴めないのか。",
						"chinese": "是想抓住也抓不住吗？",
						"french": "Est-ce quelque chose qui ne peut être attrapé même en essayant ?",
						"spanish": "¿Es algo que no se puede atrapar aunque lo intentes?",
						"vietnamese": "Có phải là thứ không thể nắm bắt dù có cố gắng?",
						"thai": "พยายามคว้าก็คว้าไม่ได้งั้นหรือ",
						"hindi": "क्या यह कुछ ऐसा है जिसे कोशिश करने पर भी पकड़ा नहीं जा सकता?"
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
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛이 더 약해졌어.",
						"english": "The light has grown weaker.",
						"japanese": "光がさらに弱くなった。",
						"chinese": "光线变得更弱了。",
						"french": "La lumière s'est encore affaiblie.",
						"spanish": "La luz se ha debilitado aún más.",
						"vietnamese": "Ánh sáng đã yếu đi.",
						"thai": "แสงอ่อนลงไปอีก",
						"hindi": "प्रकाश और कमजोर हो गया है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "환영이 멀어질 때마다… 저 빛이 가늘게 떨고 있어.",
						"english": "Every time the illusion drifts further away... that light trembles faintly.",
						"japanese": "幻影が遠ざかるたびに… あの光が細く震えている。",
						"chinese": "每当幻影远去... 那道光就微微颤抖着。",
						"french": "Chaque fois que l'illusion s'éloigne... cette lumière tremble faiblement.",
						"spanish": "Cada vez que la ilusión se aleja... esa luz tiembla débilmente.",
						"vietnamese": "Mỗi khi ảo ảnh trôi xa hơn... ánh sáng đó run rẩy yếu ớt.",
						"thai": "ทุกครั้งที่ภาพลวงตาเลือนหายไป... แสงนั้นก็สั่นไหวอย่างแผ่วเบา",
						"hindi": "हर बार जब भ्रम दूर होता है... वह प्रकाश धीरे से कांपता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "한기 때문만은 아닐 거야.",
						"english": "It can't be just because of the cold.",
						"japanese": "寒気のせいだけではないはずだ。",
						"chinese": "不会仅仅是因为寒冷。",
						"french": "Ce ne peut être seulement à cause du froid.",
						"spanish": "No puede ser solo por el frío.",
						"vietnamese": "Sẽ không chỉ vì lạnh đâu.",
						"thai": "ไม่น่าจะใช่แค่เพราะความหนาวเย็น",
						"hindi": "यह सिर्फ ठंड के कारण नहीं हो सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…기다리는 게, 저 아이를 갉아먹고 있어.",
						"english": "...Waiting is, gnawing away at that child.",
						"japanese": "…待つことが、あの子を蝕んでいる。",
						"chinese": "...等待正在蚕食那个孩子。",
						"french": "...L'attente est en train de ronger cet enfant.",
						"spanish": "...La espera está carcomiendo a ese niño.",
						"vietnamese": "...Sự chờ đợi đang gặm nhấm đứa trẻ đó.",
						"thai": "...การรอคอยกำลังกัดกินเด็กคนนั้น",
						"hindi": "...इंतज़ार उस बच्चे को खोखला कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "골짜기 가장 깊은 곳. 빛이 가장 약해진 자리에서 거대한 그림자가 나타났다.",
						"english": "In the deepest part of the valley, where light was weakest, a colossal shadow emerged.",
						"japanese": "谷の最も深い場所、光が最も弱まる場所で、巨大な影が現れた。",
						"chinese": "在山谷最深处，光线最微弱的地方，一个巨大的身影出现了。",
						"french": "Dans les profondeurs les plus sombres de la vallée, là où la lumière était la plus faible, une ombre colossale apparut.",
						"spanish": "En lo más profundo del valle, donde la luz era más débil, una sombra colosal apareció.",
						"vietnamese": "Tại nơi sâu nhất của thung lũng, nơi ánh sáng yếu nhất, một bóng tối khổng lồ xuất hiện.",
						"thai": "ในส่วนที่ลึกที่สุดของหุบเขา ที่ซึ่งแสงอ่อนแรงที่สุด เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "घाटी के सबसे गहरे हिस्से में, जहाँ प्रकाश सबसे कमजोर था, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…닿을 수 없는 것을 좇는 미련한 것들.",
						"english": "...Foolish beings, chasing what cannot be reached.",
						"japanese": "…届かぬものを追う、愚かな者たちよ。",
						"chinese": "……追逐不可及之物的愚蠢生灵。",
						"french": "...Créatures insensées, qui poursuivent l'inaccessible.",
						"spanish": "...Seres necios, persiguiendo lo inalcanzable.",
						"vietnamese": "...Những kẻ ngốc nghếch, đuổi theo những thứ không thể chạm tới.",
						"thai": "...พวกโง่เขลา ที่ไล่ตามสิ่งที่ไม่อาจเอื้อมถึง",
						"hindi": "...मूर्ख प्राणी, जो अप्राप्य का पीछा कर रहे हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "당신이… 빛을 가로막고 있어.",
						"english": "You... are blocking the light.",
						"japanese": "あなたが…光を遮っている。",
						"chinese": "你……阻挡了光芒。",
						"french": "Tu... bloques la lumière.",
						"spanish": "Tú... estás bloqueando la luz.",
						"vietnamese": "Ngươi... đang chặn ánh sáng.",
						"thai": "เจ้า...กำลังขวางทางแสง",
						"hindi": "तुम... प्रकाश को रोक रहे हो।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 빛은 더 이상 나아가지 못한다. 나도, 너희도.",
						"english": "This light can advance no further. Neither I, nor you.",
						"japanese": "この光は、もう進めない。私でさえ、お前たちでさえも。",
						"chinese": "这光芒无法再前进了。无论是我，还是你们。",
						"french": "Cette lumière ne peut plus avancer. Ni moi, ni vous.",
						"spanish": "Esta luz no puede avanzar más. Ni yo, ni vosotros.",
						"vietnamese": "Ánh sáng này không thể tiến xa hơn nữa. Cả ta, lẫn các ngươi.",
						"thai": "แสงนี้ไปต่อไม่ได้แล้ว ทั้งข้าและพวกเจ้าก็เช่นกัน",
						"hindi": "यह प्रकाश अब और आगे नहीं बढ़ सकता। न मैं, न तुम।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "{random_boss}… 당신도 저 빛처럼 고통받는 건가요?",
						"english": "{random_boss}... Are you also suffering like that light?",
						"japanese": "{random_boss}…あなたもあの光のように苦しんでいるのですか？",
						"chinese": "{random_boss}……你是否也像那道光一样痛苦着？",
						"french": "{random_boss}... Souffrez-vous aussi comme cette lumière ?",
						"spanish": "{random_boss}... ¿Tú también sufres como esa luz?",
						"vietnamese": "{random_boss}... Ngươi cũng đang chịu đựng như ánh sáng đó sao?",
						"thai": "{random_boss}...ท่านก็ทรมานเหมือนแสงนั้นด้วยหรือเปล่า?",
						"hindi": "{random_boss}... क्या तुम भी उस प्रकाश की तरह पीड़ित हो?"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				}
			],
			"id": 15
		},
		{
			"id": 15,
			"dialogue": [],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 놓지 못하는구나. 미련한 것…."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 조금 더 밝아진 것 같아."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그래도… 아직 완전히 자유롭진 않은 것 같아."
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빛은 이제 미약하게나마 나아가기 시작했다. 그 끝에 무엇이 있을지는 아무도 몰랐다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "닿지 못할 그리움에 갇혀라. 영원히…."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 멈출 수 없어."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "빛의 슬픔을, 여기서 끝내야 해."
					},
					"emotion": "sad"
				}
			],
			"dialogue": []
		}
	],
	"prologue": {
		"korean": [
			"빛은 갈대처럼 흔들렸다. 그 안에서 무언가 갉아먹히는 소리가 들렸다.",
			"눈보라는 심장을 꿰뚫는 듯 차가웠고, 빛은 닿지 못하는 손짓을 반복했다.",
			"인카는 그 애처로운 몸짓에서 희미한 그림자를 보았다.",
			"그리고 그 그림자는, 빛을 천천히 죽이고 있었다."
		],
		"english": [
			"The light flickered like a reed. Something gnawing could be heard within.",
			"The blizzard was cold enough to pierce the heart, and the light repeatedly made gestures that couldn't reach.",
			"Inka saw a faint shadow in that pitiful gesture.",
			"And that shadow was slowly killing the light."
		],
		"japanese": [
			"光は葦のように揺らめいた。その中で何かが蝕まれる音が聞こえた。",
			"吹雪は心臓を貫くほど冷たく、光は届かぬ手招きを繰り返した。",
			"インカはその哀れな身振りの中に、おぼろげな影を見た。",
			"そしてその影は、ゆっくりと光を殺していた。"
		],
		"chinese": [
			"光芒如芦苇般摇曳。其中传来某种被啃噬的声音。",
			"暴风雪冰冷刺骨，光芒一次次做出无法触及的手势。",
			"印卡在那可怜的姿态中看到了一丝模糊的阴影。",
			"而那影子，正在慢慢扼杀光芒。"
		],
		"french": [
			"La lumière vacillait comme un roseau. On entendait quelque chose ronger de l'intérieur.",
			"Le blizzard était si froid qu'il transperçait le cœur, et la lumière répétait des gestes qui ne pouvaient atteindre.",
			"Inka vit une faible ombre dans ce geste pitoyable.",
			"Et cette ombre était en train de tuer lentement la lumière."
		],
		"spanish": [
			"La luz parpadeaba como una caña. Algo carcomiéndose se oía desde dentro.",
			"La ventisca era tan fría que perforaba el corazón, y la luz repetía gestos que no podían alcanzar.",
			"Inka vio una tenue sombra en ese gesto lastimoso.",
			"Y esa sombra estaba matando lentamente la luz."
		],
		"vietnamese": [
			"Ánh sáng lung lay như lau sậy. Bên trong, nghe thấy tiếng gì đó đang gặm nhấm.",
			"Bão tuyết lạnh thấu tim, ánh sáng lặp đi lặp lại những cử chỉ không thể chạm tới.",
			"Inka thấy một bóng mờ trong cử chỉ đáng thương đó.",
			"Và bóng tối đó, đang từ từ giết chết ánh sáng."
		],
		"thai": [
			"แสงสว่างสั่นไหวราวกับต้นอ้อ ได้ยินเสียงบางอย่างกำลังกัดกินอยู่ภายใน",
			"พายุหิมะเย็นยะเยือกราวกับจะเจาะทะลุหัวใจ และแสงสว่างยังคงส่งสัญญาณที่เอื้อมไม่ถึง",
			"อินคาเห็นเงารางๆ ในท่าทางที่น่าสงสารนั้น",
			"และเงาสีดำนั้นกำลังค่อยๆ ฆ่าแสงสว่าง"
		],
		"hindi": [
			"प्रकाश नरकट की तरह झिलमिला रहा था। उसके भीतर कुछ कुतरने की आवाज़ सुनाई दे रही थी।",
			"बर्फीला तूफ़ान दिल को चीरने जितना ठंडा था, और प्रकाश बार-बार ऐसे हावभाव कर रहा था जो पहुंच नहीं सकते थे।",
			"इनका ने उस दयनीय भाव में एक धुंधली परछाई देखी।",
			"और वह परछाई धीरे-धीरे प्रकाश को मार रही थी।"
		]
	}
} as const;
