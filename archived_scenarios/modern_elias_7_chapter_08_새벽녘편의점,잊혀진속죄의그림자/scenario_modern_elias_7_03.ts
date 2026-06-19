export const scenario_modern_elias_7_03 = {
	"scenario_id": "modern_elias_7_03",
	"order": 3,
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
			"도시의 그림자는 더욱 깊어졌다.",
			"엘리아스의 눈동자 속엔 알 수 없는 무언가가…",
			"우연처럼 스쳐가는 불길한 소문들. 단순한 우연일까?",
			"직관은 속삭인다. 모든 것은 연결되어 있다고."
		],
		"english": [
			"The city's shadows deepened.",
			"In Elias's eyes, something unknown...",
			"Ominous rumors pass by, like coincidence. Is it mere coincidence?",
			"Intuition whispers. Everything is connected."
		],
		"japanese": [
			"都市の影はさらに深まった。",
			"エリアスの瞳には、何か未知のものが…。",
			"偶然のように通り過ぎる不吉な噂。単なる偶然だろうか？",
			"直感は囁く。すべては繋がっていると。"
		],
		"chinese": [
			"城市的阴影更加深沉了。",
			"埃利亚斯的眼中，隐藏着未知之物…",
			"不祥的谣言偶然流传。仅仅是巧合吗？",
			"直觉在低语。一切都息息相关。"
		],
		"french": [
			"Les ombres de la ville s'épaississaient.",
			"Dans les yeux d'Elias, quelque chose d'inconnu...",
			"Des rumeurs inquiétantes passent, comme par hasard. Simple coïncidence ?",
			"L'intuition murmure. Tout est lié."
		],
		"spanish": [
			"Las sombras de la ciudad se hicieron más profundas.",
			"En los ojos de Elias, algo desconocido...",
			"Rumores siniestros que pasan como por casualidad. ¿Será pura coincidencia?",
			"La intuición susurra. Todo está conectado."
		],
		"vietnamese": [
			"Bóng tối thành phố càng thêm sâu sắc.",
			"Trong đôi mắt Elias, có điều gì đó không thể hiểu…",
			"Những tin đồn chẳng lành cứ thoảng qua như ngẫu nhiên. Chỉ là ngẫu nhiên thôi sao?",
			"Trực giác thì thầm. Mọi thứ đều kết nối."
		],
		"thai": [
			"เงามืดของเมืองทวีความลึกยิ่งขึ้น.",
			"ในดวงตาของอีเลียส มีบางสิ่งที่ไม่รู้จัก...",
			"ข่าวลือร้ายๆ ที่ผ่านไปราวกับเรื่องบังเอิญ. เป็นแค่เรื่องบังเอิญหรือเปล่า?",
			"สัญชาตญาณกระซิบ. ทุกสิ่งเชื่อมโยงกัน."
		],
		"hindi": [
			"शहर की परछाइयां और गहरी हो गईं।",
			"एलियास की आँखों में, कुछ अनजाना सा...",
			"अशुभ अफवाहें, जैसे संयोग से गुज़रती हैं। क्या यह महज़ संयोग है?",
			"अंतर्ज्ञान फुसफुसाता है। सब कुछ जुड़ा हुआ है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 활기는 이미 죽었다. 밤은 모든 것을 숨겼다.",
						"english": "The city's vitality is dead. Night hides everything.",
						"japanese": "都市の活気はもう死んだ。夜がすべてを隠した。",
						"chinese": "城市的活力已逝。黑夜隐藏了一切。",
						"french": "La vitalité de la ville est morte. La nuit cache tout.",
						"spanish": "La vitalidad de la ciudad ha muerto. La noche lo ocultó todo.",
						"vietnamese": "Sự sôi động của thành phố đã chết. Màn đêm che giấu mọi thứ.",
						"thai": "ความมีชีวิตชีวาของเมืองได้ตายไปแล้ว. ราตรีปกปิดทุกสิ่ง.",
						"hindi": "शहर की रौनक मर चुकी है। रात ने सब कुछ छुपा दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "엘리아스… 그의 피로감은 단순한 게 아니야.",
						"english": "Elias... his weariness isn't simple.",
						"japanese": "エリアス…彼の疲労感は単純なものではない。",
						"chinese": "埃利亚斯…他的疲惫并非简单。",
						"french": "Elias... sa fatigue n'est pas simple.",
						"spanish": "Elias... su cansancio no es simple.",
						"vietnamese": "Elias… sự mệt mỏi của anh ấy không đơn thuần đâu.",
						"thai": "อีเลียส... ความเหนื่อยล้าของเขาไม่ใช่เรื่องธรรมดา.",
						"hindi": "एलियास... उसकी थकान सामान्य नहीं है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 그냥 피곤한 거겠지.",
						"english": "What are you talking about? He's just tired, surely.",
						"japanese": "何言ってるんだ？ただ疲れてるだけだろ。",
						"chinese": "你在说什么？他只是累了吧。",
						"french": "De quoi parles-tu ? Il est juste fatigué, c'est tout.",
						"spanish": "¿De qué hablas? Estará cansado, simplemente.",
						"vietnamese": "Cậu nói gì vậy? Chắc là cậu ấy chỉ mệt thôi.",
						"thai": "พูดอะไรน่ะ? ก็แค่เหนื่อยล่ะมั้ง.",
						"hindi": "क्या बक रहे हो? वह बस थका हुआ होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "아니. 이 도시의 에너지가… 그에게 투영되고 있어.",
						"english": "No. This city's energy... it's being projected onto him.",
						"japanese": "違う。この都市のエネルギーが…彼に投影されている。",
						"chinese": "不。这座城市的能量…正投射到他身上。",
						"french": "Non. L'énergie de cette ville... se projette sur lui.",
						"spanish": "No. La energía de esta ciudad... se está proyectando en él.",
						"vietnamese": "Không. Năng lượng của thành phố này… đang được chiếu lên cậu ấy.",
						"thai": "ไม่ใช่. พลังงานของเมืองนี้…กำลังฉายทอดใส่เขา.",
						"hindi": "नहीं। इस शहर की ऊर्जा... उस पर प्रतिबिंबित हो रही है।"
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
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "엘리아스, 그 친구… 가끔 이해할 수 없는 망설임을 보여.",
						"english": "Elias, that friend... sometimes shows an inexplicable hesitation.",
						"japanese": "エリアス、あの友人…時々理解できない躊躇いを見せる。",
						"chinese": "埃利亚斯，那家伙…有时会表现出费解的犹豫。",
						"french": "Elias, cet ami... montre parfois une hésitation incompréhensible.",
						"spanish": "Elias, ese amigo... a veces muestra una vacilación incomprensible.",
						"vietnamese": "Elias, người bạn đó… đôi khi lại thể hiện sự do dự khó hiểu.",
						"thai": "อีเลียส เพื่อนคนนั้น... บางครั้งก็แสดงความลังเลที่ไม่อาจเข้าใจ.",
						"hindi": "एलियास, वह दोस्त... कभी-कभी एक अजीब हिचकिचाहट दिखाता है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망설임? 뭘?",
						"english": "Hesitation? About what?",
						"japanese": "躊躇い？何を？",
						"chinese": "犹豫？什么？",
						"french": "Hésitation ? Quoi ?",
						"spanish": "¿Vacilación? ¿De qué?",
						"vietnamese": "Do dự? Về điều gì?",
						"thai": "ลังเล? เรื่องอะไร?",
						"hindi": "हिचकिचाहट? किस बात की?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아주 짧은 순간이지만, 마치 무언가에 갇힌 듯한…",
						"english": "For a brief moment, it felt like... trapped in something.",
						"japanese": "ほんの一瞬だが、まるで何かに閉じ込められたような…",
						"chinese": "虽然只是一瞬间，但感觉就像被困住了…",
						"french": "Pendant un bref instant, c'était comme... piégé dans quelque chose.",
						"spanish": "Por un breve instante, se sintió como... atrapado en algo.",
						"vietnamese": "Chỉ trong khoảnh khắc, cứ như thể bị mắc kẹt trong thứ gì đó...",
						"thai": "แค่ชั่วครู่เดียว แต่รู้สึกเหมือนถูกขังอยู่ในบางสิ่ง...",
						"hindi": "बस एक पल के लिए, ऐसा लगा जैसे... किसी चीज़ में फंसा हुआ।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도시의 이 쇠퇴한 분위기, 그리고 불길한 소문들…",
						"english": "This city's decaying atmosphere, and those ominous rumors...",
						"japanese": "この都市の衰退した雰囲気、そして不吉な噂が…",
						"chinese": "这座城市衰败的气氛，还有那些不祥的传闻…",
						"french": "Cette atmosphère décadente de la ville, et ces rumeurs sinistres...",
						"spanish": "El ambiente decadente de esta ciudad, y esos rumores siniestros...",
						"vietnamese": "Bầu không khí suy tàn của thành phố này, cùng với những tin đồn đáng sợ...",
						"thai": "บรรยากาศที่เสื่อมโทรมของเมืองนี้ และข่าวลืออันน่าสะพรึงกลัวเหล่านั้น...",
						"hindi": "इस शहर का क्षय होता माहौल, और वे अशुभ अफवाहें..."
					},
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "그게 엘리아스랑 무슨 상관인데?",
						"english": "What does that have to do with Elias?",
						"japanese": "それがエリアスとどう関係あるんだ？",
						"chinese": "那和埃利亚斯有什么关系？",
						"french": "Qu'est-ce que ça a à voir avec Elias ?",
						"spanish": "¿Qué tiene eso que ver con Elias?",
						"vietnamese": "Điều đó thì liên quan gì đến Elias?",
						"thai": "แล้วมันเกี่ยวอะไรกับเอเลียส?",
						"hindi": "इसका एलियास से क्या लेना-देना है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "직관이 말해. 모든 게 연결되어 있어. 우연이 아니야.",
						"english": "My gut tells me. Everything's connected. It's no coincidence.",
						"japanese": "直感が告げている。すべてが繋がっている。偶然じゃない。",
						"chinese": "我的直觉告诉我。一切都联系着。这不是巧合。",
						"french": "Mon intuition me dit. Tout est lié. Ce n'est pas une coïncidence.",
						"spanish": "Mi intuición me dice. Todo está conectado. No es una coincidencia.",
						"vietnamese": "Trực giác mách bảo tôi. Mọi thứ đều liên kết. Không phải là ngẫu nhiên đâu.",
						"thai": "สัญชาตญาณบอกฉัน ทุกอย่างเชื่อมโยงกัน มันไม่ใช่เรื่องบังเอิญ",
						"hindi": "मेरी अंतरात्मा कहती है। सब कुछ जुड़ा हुआ है। यह कोई संयोग नहीं है।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시에 흐르는 어두운 기운이 엘리아스를 좀먹고 있어.",
						"english": "The dark energy flowing through this city is corrupting Elias.",
						"japanese": "この都市に流れる暗い気が、エリアスを蝕んでいる。",
						"chinese": "流淌在这座城市的黑暗气息正在腐蚀埃利亚斯。",
						"french": "L'énergie sombre qui traverse cette ville ronge Elias.",
						"spanish": "La energía oscura que fluye por esta ciudad está corrompiendo a Elias.",
						"vietnamese": "Năng lượng tăm tối chảy khắp thành phố này đang làm Elias mục ruỗng.",
						"thai": "พลังงานมืดที่ไหลเวียนอยู่ในเมืองนี้กำลังกัดกินเอเลียส",
						"hindi": "इस शहर में बहने वाली काली शक्ति एलियास को भ्रष्ट कर रही है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 대체 무슨 힘인데?",
						"english": "What kind of power is that, exactly?",
						"japanese": "それは一体どんな力なんだ？",
						"chinese": "那到底是什么力量？",
						"french": "De quel genre de pouvoir s'agit-il, exactement ?",
						"spanish": "¿Qué clase de poder es ese, exactamente?",
						"vietnamese": "Chính xác thì đó là loại sức mạnh gì?",
						"thai": "นั่นมันพลังอะไรกันแน่?",
						"hindi": "आखिर यह कैसी शक्ति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "오래된 비밀, 잊혀진 과거. 도시 자체가 병든 거야.",
						"english": "Ancient secrets, a forgotten past. The city itself is sick.",
						"japanese": "古の秘密、忘れ去られた過去。都市そのものが病んでいるんだ。",
						"chinese": "古老的秘密，被遗忘的过去。城市本身病了。",
						"french": "D'anciens secrets, un passé oublié. La ville elle-même est malade.",
						"spanish": "Secretos ancestrales, un pasado olvidado. La ciudad misma está enferma.",
						"vietnamese": "Những bí mật cổ xưa, một quá khứ bị lãng quên. Chính thành phố này đã bệnh rồi.",
						"thai": "ความลับโบราณ อดีตที่ถูกลืม เมืองนี้เองที่ป่วย",
						"hindi": "प्राचीन रहस्य, एक भूला हुआ अतीत। शहर खुद बीमार है।"
					}
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "엘리아스는 그 병의 증상일 뿐이야.",
						"english": "Elias is merely a symptom of that illness.",
						"japanese": "エリアスはその病の症状に過ぎない。",
						"chinese": "埃利亚斯只是那种病的症状罢了。",
						"french": "Elias n'est qu'un symptôme de cette maladie.",
						"spanish": "Elias es meramente un síntoma de esa enfermedad.",
						"vietnamese": "Elias chỉ là một triệu chứng của căn bệnh đó thôi.",
						"thai": "เอเลียสเป็นเพียงอาการของโรคนั้น",
						"hindi": "एलियास बस उस बीमारी का एक लक्षण है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 우린 뭘 해야 해?",
						"english": "So what should we do?",
						"japanese": "じゃあ、僕たちはどうすればいいんだ？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 되돌릴 수 없어. 우리는 진실의 한복판에 들어선 거야.",
						"english": "There's no turning back now. We've stepped into the heart of the truth.",
						"japanese": "もう後戻りはできない。我々は真実の核心に踏み込んだのだ。",
						"chinese": "现在已经无法回头了。我们已踏入真相的中心。",
						"french": "Impossible de faire marche arrière maintenant. Nous sommes entrés au cœur de la vérité.",
						"spanish": "Ya no hay vuelta atrás. Hemos entrado en el corazón de la verdad.",
						"vietnamese": "Giờ thì không thể quay lại được nữa. Chúng ta đã bước vào trung tâm của sự thật.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว ตอนนี้เราเข้ามาสู่ใจกลางของความจริงแล้ว",
						"hindi": "अब पीछे हटना मुमकिन नहीं। हम सच्चाई के केंद्र में आ गए हैं।"
					},
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "점점 더 알 수 없게 되어가고 있어.",
						"english": "It's becoming increasingly unclear.",
						"japanese": "ますます分からなくなってきた。",
						"chinese": "变得越来越难以捉摸。",
						"french": "C'est de plus en plus incompréhensible.",
						"spanish": "Cada vez es más incomprensible.",
						"vietnamese": "Càng ngày càng khó hiểu.",
						"thai": "ยิ่งนานวันยิ่งไม่เข้าใจ",
						"hindi": "यह और भी समझ से बाहर होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엘리아스의 무기력함이 곧 이 도시의 어둠이야.",
						"english": "Elias's apathy is the darkness of this city.",
						"japanese": "エリアスの無気力さが、この街の闇となる。",
						"chinese": "埃利亚斯的无力感，正是这座城市的黑暗。",
						"french": "L'apathie d'Elias est la noirceur de cette ville.",
						"spanish": "La impotencia de Elias es la oscuridad de esta ciudad.",
						"vietnamese": "Sự bất lực của Elias chính là bóng tối của thành phố này.",
						"thai": "ความอ่อนแอของอีเลียสคือความมืดมิดของเมืองนี้",
						"hindi": "एलियास की उदासीनता ही इस शहर का अंधकार है।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "진실을 밝히지 않으면… 모두가 무기력해질 거야.",
						"english": "If the truth isn't revealed... everyone will become powerless.",
						"japanese": "真実を明かさなければ…皆が無気力になるだろう。",
						"chinese": "如果不揭示真相…所有人都会变得无力。",
						"french": "Si la vérité n'est pas révélée… tout le monde deviendra impuissant.",
						"spanish": "Si no se revela la verdad… todos se volverán impotentes.",
						"vietnamese": "Nếu sự thật không được phơi bày… mọi người sẽ trở nên bất lực.",
						"thai": "ถ้าไม่เปิดเผยความจริง… ทุกคนจะอ่อนแอลง",
						"hindi": "यदि सच्चाई सामने नहीं आती है… तो हर कोई शक्तिहीन हो जाएगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 움직였다. 도시의 비밀이 형상화된 듯.",
						"english": "A colossal shadow stirred in the darkness, as if the city's secrets had taken form.",
						"japanese": "闇の中で巨大な影が動いた。まるで街の秘密が形になったかのように。",
						"chinese": "黑暗中，一个巨大的影子在移动。仿佛是城市秘密的具象化。",
						"french": "Une ombre colossale bougea dans l'obscurité, comme si les secrets de la ville avaient pris forme.",
						"spanish": "Una sombra colosal se movió en la oscuridad, como si los secretos de la ciudad hubieran tomado forma.",
						"vietnamese": "Một bóng đen khổng lồ chuyển động trong bóng tối, như thể bí mật của thành phố đã thành hình.",
						"thai": "ในความมืดมิด เงาร่างมหึมาเคลื่อนไหว ราวกับความลับของเมืองได้ปรากฏเป็นรูปร่าง",
						"hindi": "अंधेरे में एक विशाल परछाई हिल रही थी, मानो शहर के रहस्य ने आकार ले लिया हो।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 존재들이… 감히 여기까지.",
						"english": "Insignificant beings... daring to come this far.",
						"japanese": "くだらない存在が…よくもここまで。",
						"chinese": "卑微的生灵…竟敢到此。",
						"french": "Êtres insignifiants… osant venir jusqu'ici.",
						"spanish": "Seres insignificantes… atreviéndose a llegar hasta aquí.",
						"vietnamese": "Những kẻ hèn mọn… dám tới tận đây.",
						"thai": "พวกสิ่งมีชีวิตชั้นต่ำ… กล้าดียังไงมาถึงที่นี่",
						"hindi": "तुच्छ प्राणी… इतनी दूर आने की हिम्मत की।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이 도시의 어둠인가?",
						"english": "Are you the darkness of this city?",
						"japanese": "お前がこの街の闇なのか？",
						"chinese": "你是这座城市的黑暗吗？",
						"french": "Es-tu l'obscurité de cette ville ?",
						"spanish": "¿Eres la oscuridad de esta ciudad?",
						"vietnamese": "Ngươi là bóng tối của thành phố này ư?",
						"thai": "เจ้าคือความมืดมิดของเมืองนี้ใช่หรือไม่?",
						"hindi": "क्या तुम इस शहर का अंधकार हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 진실이다. 너희가 외면했던.",
						"english": "I am the truth. The one you turned away from.",
						"japanese": "私は真実だ。お前たちが目を背けていた。",
						"chinese": "我是真相。你们所回避的真相。",
						"french": "Je suis la vérité. Celle que vous avez ignorée.",
						"spanish": "Soy la verdad. Aquella a la que le disteis la espalda.",
						"vietnamese": "Ta là sự thật. Điều mà các ngươi đã quay lưng.",
						"thai": "ข้าคือความจริง สิ่งที่พวกเจ้าเมินเฉย",
						"hindi": "मैं सच हूँ। वह जिससे तुम मुँह मोड़ते रहे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이것은 끝이 아니다… 단지 시작일 뿐.",
						"english": "This is not the end... merely the beginning.",
						"japanese": "これは終わりではない…ただの始まりに過ぎない。",
						"chinese": "这不是结束…仅仅是开始。",
						"french": "Ce n'est pas la fin… seulement le début.",
						"spanish": "Esto no es el fin… solo el principio.",
						"vietnamese": "Đây không phải là kết thúc… chỉ là khởi đầu mà thôi.",
						"thai": "นี่ไม่ใช่จุดจบ… เป็นแค่เพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "यह अंत नहीं है… यह केवल शुरुआत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…끝난 게 아니었어?",
						"english": "...It wasn't over?",
						"japanese": "…終わってなかったのか？",
						"chinese": "……还没结束吗？",
						"french": "…Ce n'était pas fini ?",
						"spanish": "¿…No había terminado?",
						"vietnamese": "…Chưa kết thúc sao?",
						"thai": "…ยังไม่จบอีกหรือ?",
						"hindi": "…यह खत्म नहीं हुआ था?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 더 깊은 어둠이 보였다. 아직 밝혀야 할 진실이 남아 있었다.",
						"english": "Behind the fallen shadow, a deeper darkness was revealed. Truths yet to be uncovered remained.",
						"japanese": "倒れた影の向こうに、さらに深い闇が見えた。まだ明かされていない真実が残っていた。",
						"chinese": "倒下的影子背后，更深的黑暗显现。还有尚未揭示的真相。",
						"french": "Derrière l'ombre tombée, une obscurité plus profonde se révéla. Des vérités encore à découvrir subsistaient.",
						"spanish": "Detrás de la sombra caída, una oscuridad más profunda se reveló. Aún quedaban verdades por descubrir.",
						"vietnamese": "Phía sau bóng đen ngã xuống, một màn đêm sâu thẳm hơn lộ diện. Những sự thật cần được làm sáng tỏ vẫn còn đó.",
						"thai": "เบื้องหลังเงาที่ล้มลง ความมืดมิดที่ลึกล้ำกว่าปรากฏขึ้น ยังคงมีเรื่องจริงที่ต้องเปิดเผย",
						"hindi": "गिरी हुई परछाई के पीछे, गहरा अंधकार दिखाई दिया। अभी भी ऐसे सच बाकी थे जिन्हें उजागर करना था।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 그림자가 모든 것을 집어삼켰다.",
						"english": "The city's shadow swallowed everything.",
						"japanese": "都市の影がすべてを飲み込んだ。",
						"chinese": "城市的阴影吞噬了一切。",
						"french": "L'ombre de la ville a tout englouti.",
						"spanish": "La sombra de la ciudad lo devoró todo.",
						"vietnamese": "Bóng tối thành phố đã nuốt chửng mọi thứ.",
						"thai": "เงามืดของเมืองกลืนกินทุกสิ่ง",
						"hindi": "शहर की परछाई ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 것들… 진실은 너희를 집어삼킬 것이다.",
						"english": "Fools... The truth will consume you.",
						"japanese": "愚か者ども… 真実がお前たちを飲み込むだろう。",
						"chinese": "愚蠢的家伙们… 真相将吞噬你们。",
						"french": "Fous… La vérité vous consumera.",
						"spanish": "Necios… La verdad os consumirá.",
						"vietnamese": "Lũ ngu ngốc… Sự thật sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลา... ความจริงจะกลืนกินพวกเจ้า",
						"hindi": "मूर्खों… सत्य तुम्हें निगल जाएगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…다시 일어설 거야. 반드시.",
						"english": "...I'll rise again. I must.",
						"japanese": "…また立ち上がる。必ず。",
						"chinese": "…我会再次站起来。一定会。",
						"french": "...Je me relèverai. Absolument.",
						"spanish": "...Me levantaré de nuevo. Lo haré.",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa. Chắc chắn.",
						"thai": "...ข้าจะลุกขึ้นยืนอีกครั้ง ให้ได้",
						"hindi": "...मैं फिर उठूँगा। ज़रूर।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
