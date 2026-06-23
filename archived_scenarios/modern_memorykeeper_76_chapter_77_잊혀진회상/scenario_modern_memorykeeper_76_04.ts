export const scenario_modern_memorykeeper_76_04 = {
	"scenario_id": "modern_memorykeeper_76_04",
	"order": 4,
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
			"같은 길을 몇 번이나 걸었을까.",
			"선명했던 기억은 이제 흐릿한 잔상일 뿐.",
			"탈출구는 보이지 않고, 달콤한 속삭임만이 남았다.",
			"이 모든 환영은, 누군가의 의도된 함정이었다."
		],
		"english": [
			"How many times have I walked the same path?",
			"Vivid memories are now just blurry afterimages.",
			"No exit in sight, only sweet whispers remain.",
			"All these illusions were someone's deliberate trap."
		],
		"japanese": [
			"同じ道を何度歩いただろうか。",
			"鮮明だった記憶は、今やぼやけた残像に過ぎない。",
			"出口は見えず、甘い囁きだけが残った。",
			"この幻影はすべて、誰かの仕組んだ罠だった。"
		],
		"chinese": [
			"这条路我究竟走了多少遍？",
			"曾经清晰的记忆，如今只剩下模糊的残影。",
			"看不见出口，只剩下甜美的低语。",
			"这一切幻象，都是某人精心设计的陷阱。"
		],
		"french": [
			"Combien de fois ai-je parcouru le même chemin ?",
			"Les souvenirs vifs ne sont plus que des images floues.",
			"Aucune issue en vue, seuls de doux murmures demeurent.",
			"Toutes ces illusions étaient un piège délibéré de quelqu'un."
		],
		"spanish": [
			"¿Cuántas veces he caminado por el mismo sendero?",
			"Los recuerdos vívidos ahora son solo imágenes borrosas.",
			"No hay salida a la vista, solo dulces susurros quedan.",
			"Todas estas ilusiones eran una trampa deliberada de alguien."
		],
		"vietnamese": [
			"Đã bao lần tôi bước đi trên con đường này?",
			"Ký ức rõ ràng giờ chỉ còn là dư ảnh mờ nhạt.",
			"Không lối thoát, chỉ còn lại những lời thì thầm ngọt ngào.",
			"Tất cả những ảo ảnh này đều là cạm bẫy có chủ đích của ai đó."
		],
		"thai": [
			"ฉันเดินบนเส้นทางเดิมมาแล้วกี่ครั้งกันนะ",
			"ความทรงจำที่เคยสดใส บัดนี้เป็นเพียงภาพติดตาที่เลือนราง",
			"ไม่มีทางออกให้เห็น เหลือเพียงเสียงกระซิบอันหอมหวาน",
			"ภาพลวงตาทั้งหมดนี้คือกับดักที่ใครบางคนจงใจสร้างขึ้น"
		],
		"hindi": [
			"मैंने उसी रास्ते पर कितनी बार चला है?",
			"स्पष्ट यादें अब सिर्फ धुंधली परछाईं हैं।",
			"कोई निकास नहीं दिखता, बस मीठी फुसफुसाहटें बाकी हैं।",
			"ये सभी भ्रम किसी का जानबूझकर बिछाया गया जाल थे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "반복되는 시간, 익숙한 풍경. 균열이 시작되었다.",
						"english": "Repeating time, familiar scenery. The crack has begun.",
						"japanese": "繰り返される時間、見慣れた風景。亀裂が始まった。",
						"chinese": "重复的时间，熟悉的景象。裂痕已然开始。",
						"french": "Le temps se répète, le paysage est familier. La faille a commencé.",
						"spanish": "Tiempo repetitivo, paisaje familiar. La grieta ha comenzado.",
						"vietnamese": "Thời gian lặp lại, khung cảnh quen thuộc. Rạn nứt đã bắt đầu.",
						"thai": "กาลเวลาที่หมุนเวียน ภาพทิวทัศน์ที่คุ้นเคย รอยร้าวได้เริ่มต้นขึ้นแล้ว",
						"hindi": "दोहराया गया समय, परिचित दृश्य। दरार शुरू हो गई है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "또 시작이야…? 지쳐…",
						"english": "Starting again...? I'm tired...",
						"japanese": "また始まるの…？もう疲れた…",
						"chinese": "又开始了……好累啊……",
						"french": "Ça recommence...? Je suis fatigué...",
						"spanish": "¿Otra vez...? Estoy cansado...",
						"vietnamese": "Lại bắt đầu nữa à...? Mệt mỏi quá...",
						"thai": "เริ่มอีกแล้วเหรอ...? ฉันเหนื่อยแล้ว...",
						"hindi": "फिर से शुरू...? मैं थक गया हूँ..."
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "착각하지 마. 이건 전부 환영이야.",
						"english": "Don't be mistaken. This is all an illusion.",
						"japanese": "勘違いするな。これはすべて幻影だ。",
						"chinese": "别搞错了。这全都是幻象。",
						"french": "Ne te méprends pas. Tout ceci n'est qu'une illusion.",
						"spanish": "No te equivoques. Todo esto es una ilusión.",
						"vietnamese": "Đừng nhầm lẫn. Đây đều là ảo ảnh.",
						"thai": "อย่าเข้าใจผิด นี่มันเป็นแค่ภาพลวงตา",
						"hindi": "गलत मत समझो। यह सब एक भ्रम है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "닥스… 네가 어떻게…",
						"english": "Daks... How could you...",
						"japanese": "ダックス…お前がどうして…",
						"chinese": "达克斯……你怎会……",
						"french": "Daks... Comment as-tu pu...",
						"spanish": "Daks... ¿Cómo pudiste...?",
						"vietnamese": "Daks... Sao ngươi có thể...",
						"thai": "แดกซ์... นายทำได้ยังไง...",
						"hindi": "डैक्स... तुम कैसे..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은 더 고통스러울 거야. 하지만 직면해야 해.",
						"english": "The truth will be more painful. But you must face it.",
						"japanese": "真実はもっと苦痛だろう。だが、向き合わなければならない。",
						"chinese": "真相会更痛苦。但你必须面对它。",
						"french": "La vérité sera plus douloureuse. Mais tu dois l'affronter.",
						"spanish": "La verdad será más dolorosa. Pero debes enfrentarla.",
						"vietnamese": "Sự thật sẽ đau đớn hơn. Nhưng ngươi phải đối mặt.",
						"thai": "ความจริงจะเจ็บปวดกว่านี้ แต่คุณต้องเผชิญหน้ากับมัน",
						"hindi": "सच और भी दर्दनाक होगा। लेकिन तुम्हें इसका सामना करना होगा।"
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
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "이 달콤한 속삭임에 넘어가지 마.",
						"english": "Don't fall for these sweet whispers.",
						"japanese": "この甘い囁きに惑わされるな。",
						"chinese": "别被这些甜言蜜语蒙蔽了。",
						"french": "Ne te laisse pas séduire par ces doux murmures.",
						"spanish": "No caigas en estos dulces susurros.",
						"vietnamese": "Đừng mắc lừa những lời thì thầm ngọt ngào này.",
						"thai": "อย่าหลงกลกับเสียงกระซิบอันหอมหวานนี้",
						"hindi": "इन मीठी फुसफुसाहटों में मत पड़ो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…잊고 싶지 않아. 좋았던 기억인데…",
						"english": "...I don't want to forget. It was a good memory...",
						"japanese": "…忘れたくない。良い思い出だったのに…",
						"chinese": "…我不想忘记。那是一段美好的回忆…",
						"french": "...Je ne veux pas oublier. C'était un bon souvenir...",
						"spanish": "...No quiero olvidar. Fue un buen recuerdo...",
						"vietnamese": "...Tôi không muốn quên. Đó là một kỷ niệm đẹp...",
						"thai": "...ไม่อยากลืมเลย นี่มันความทรงจำที่ดีแท้ๆ...",
						"hindi": "...मैं भूलना नहीं चाहता। यह एक अच्छी याद थी..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그 달콤함이 너를 영원히 가둘 거야.",
						"english": "That sweetness will trap you forever.",
						"japanese": "その甘さが、お前を永遠に閉じ込めるぞ。",
						"chinese": "那份甜蜜会永远困住你。",
						"french": "Cette douceur t'emprisonnera pour toujours.",
						"spanish": "Esa dulzura te atrapará para siempre.",
						"vietnamese": "Sự ngọt ngào đó sẽ giam cầm bạn mãi mãi.",
						"thai": "ความหอมหวานนั้นจะกักขังเจ้าไว้ชั่วนิรันดร์",
						"hindi": "वह मिठास तुम्हें हमेशा के लिए फंसा लेगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만… 진실이 아프면 어떡해?",
						"english": "But... what if the truth hurts?",
						"japanese": "だけど…真実が辛かったら、どうするの？",
						"chinese": "但是…如果真相令人痛苦怎么办？",
						"french": "Mais... et si la vérité fait mal ?",
						"spanish": "Pero... ¿y si la verdad duele?",
						"vietnamese": "Nhưng... nếu sự thật đau đớn thì sao?",
						"thai": "แต่... ถ้าความจริงมันเจ็บปวดล่ะ?",
						"hindi": "लेकिन... अगर सच दर्दनाक हो तो क्या?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어딘가 익숙한 멜로디가 찢어지는 듯했다.",
						"english": "A somewhat familiar melody seemed to tear.",
						"japanese": "どこか聞き覚えのあるメロディーが、引き裂かれるようだった。",
						"chinese": "一段有些熟悉的旋律似乎被撕裂了。",
						"french": "Une mélodie quelque peu familière semblait se déchirer.",
						"spanish": "Una melodía algo familiar parecía desgarrarse.",
						"vietnamese": "Một giai điệu quen thuộc nào đó dường như bị xé nát.",
						"thai": "ทำนองที่คุ้นเคยบางอย่างราวกับฉีกขาด",
						"hindi": "एक जानी-पहचानी धुन बिखरती हुई सी लगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "…아름다웠지. 그 시절은…",
						"english": "...It was beautiful. Those times...",
						"japanese": "…美しかった。あの頃は…",
						"chinese": "…真美啊。那些时光…",
						"french": "...C'était beau. Ces temps-là...",
						"spanish": "...Era hermoso. Esos tiempos...",
						"vietnamese": "...Thật đẹp. Thời kỳ đó...",
						"thai": "...สวยงามจริงๆ ในตอนนั้น...",
						"hindi": "...वह सुंदर था। वो दिन..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "닥스…? 너도 흔들리는 거야?",
						"english": "Dax...? Are you wavering too?",
						"japanese": "ダックス…？お前も揺らいでいるのか？",
						"chinese": "达克斯…？你也在动摇吗？",
						"french": "Dax...? Toi aussi tu hésites ?",
						"spanish": "¿Dax...? ¿Tú también dudas?",
						"vietnamese": "Dax...? Cậu cũng đang dao động sao?",
						"thai": "แด็กซ์...? เจ้าเองก็หวั่นไหวด้วยหรือ?",
						"hindi": "डैक्स...? तुम भी डगमगा रहे हो क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "아니! 이건 모두 환상이야. 누군가의 함정이라고!",
						"english": "No! This is all an illusion. It's someone's trap!",
						"japanese": "違う！これは全て幻だ。誰かの罠なんだ！",
						"chinese": "不！这都是幻象。是某个人的陷阱！",
						"french": "Non ! Tout cela n'est qu'illusion. C'est le piège de quelqu'un !",
						"spanish": "¡No! Todo esto es una ilusión. ¡Es una trampa de alguien!",
						"vietnamese": "Không! Đây đều là ảo ảnh. Là cái bẫy của ai đó!",
						"thai": "ไม่! นี่มันภาพลวงตาต่างหาก มันคือกับดักของใครบางคน!",
						"hindi": "नहीं! यह सब एक भ्रम है। यह किसी का जाल है!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "함정… 누구의? 왜?",
						"english": "A trap... whose? Why?",
						"japanese": "罠…誰の？なぜ？",
						"chinese": "陷阱…谁的？为什么？",
						"french": "Un piège... de qui ? Pourquoi ?",
						"spanish": "¿Una trampa... de quién? ¿Por qué?",
						"vietnamese": "Cái bẫy... của ai? Tại sao?",
						"thai": "กับดัก... ของใคร? ทำไม?",
						"hindi": "जाल... किसका? क्यों?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "이 이상 가면 안 돼! 영원히 갇혀 버린다고!",
						"english": "Don't go any further! You'll be trapped forever!",
						"japanese": "これ以上行くな！永遠に閉じ込められてしまうぞ！",
						"chinese": "不能再往前走了！会永远被困住的！",
						"french": "N'allez pas plus loin ! Vous serez piégé pour toujours !",
						"spanish": "¡No vayas más lejos! ¡Quedarás atrapado para siempre!",
						"vietnamese": "Không được đi xa hơn! Bạn sẽ bị mắc kẹt mãi mãi!",
						"thai": "ไปมากกว่านี้ไม่ได้แล้ว! เจ้าจะถูกกักขังชั่วนิรันดร์นะ!",
						"hindi": "इससे आगे मत जाओ! तुम हमेशा के लिए फंस जाओगे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "물에 비친 자신의 얼굴이… 한순간 다른 이의 눈빛을 담았다.",
						"english": "His own face reflected in the water... for a moment held another's gaze.",
						"japanese": "水面に映った自分の顔が…一瞬、別の誰かの眼差しを宿した。",
						"chinese": "水中映出的自己的脸…一瞬间，映出了别人的眼神。",
						"french": "Son propre visage reflété dans l'eau... un instant, prit le regard d'un autre.",
						"spanish": "Su propio rostro reflejado en el agua... por un instante, captó la mirada de otro.",
						"vietnamese": "Khuôn mặt mình phản chiếu trong nước... trong thoáng chốc, ánh lên cái nhìn của người khác.",
						"thai": "ใบหน้าของตนเองที่สะท้อนอยู่ในน้ำ... ชั่วพริบตาหนึ่งได้สะท้อนแววตาของผู้อื่น",
						"hindi": "पानी में दिखा उसका अपना चेहरा... एक पल के लिए किसी और की नज़रें लिए हुए था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…차라리 여기서 영원히 행복할까…",
						"english": "...Perhaps I should just be happy here forever...",
						"japanese": "...いっそここで永遠に幸せになろうか…",
						"chinese": "...不如就在这里永远幸福下去吧...",
						"french": "...Et si je restais ici, éternellement heureux...",
						"spanish": "...Quizás debería ser feliz aquí para siempre...",
						"vietnamese": "...Hay là cứ hạnh phúc mãi mãi ở đây...",
						"thai": "...หรือจะให้ฉันมีความสุขที่นี่ไปตลอดกาล...",
						"hindi": "...क्या मैं बस यहीं हमेशा खुश रहूँ..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그건 가짜 행복이야! 깨어나야 해!",
						"english": "That's fake happiness! You need to wake up!",
						"japanese": "それは偽りの幸福だ！目覚めなければ！",
						"chinese": "那是虚假的幸福！你必须醒来！",
						"french": "C'est un faux bonheur ! Tu dois te réveiller !",
						"spanish": "¡Eso es felicidad falsa! ¡Tienes que despertar!",
						"vietnamese": "Đó là hạnh phúc giả tạo! Phải tỉnh dậy thôi!",
						"thai": "นั่นคือความสุขจอมปลอม! เธอต้องตื่นขึ้นมา!",
						"hindi": "वह झूठी खुशी है! तुम्हें जागना होगा!"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니… 이건 누군가 나를 붙잡으려는 의도야.",
						"english": "No... this is someone trying to keep me here.",
						"japanese": "いや…これは誰かが私を引き留めようとしているんだ。",
						"chinese": "不…这是有人想把我困在这里。",
						"french": "Non... c'est quelqu'un qui essaie de me retenir.",
						"spanish": "No... esto es un intento de alguien por retenerme.",
						"vietnamese": "Không... đây là ý đồ của ai đó muốn giữ chân mình.",
						"thai": "ไม่… นี่คือความตั้งใจของใครบางคนที่จะรั้งฉันไว้",
						"hindi": "नहीं... यह कोई मुझे पकड़ने की कोशिश कर रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마침내 마주한 진실의 문. 그리고 조롱하는 그림자.",
						"english": "Finally facing the door of truth. And the mocking shadow.",
						"japanese": "ついに真実の扉と対峙する。そして嘲笑う影。",
						"chinese": "最终面对真相之门。以及嘲弄的影子。",
						"french": "Enfin face à la porte de la vérité. Et l'ombre moqueuse.",
						"spanish": "Finalmente frente a la puerta de la verdad. Y la sombra burlona.",
						"vietnamese": "Cuối cùng đối mặt với cánh cửa sự thật. Và bóng tối chế nhạo.",
						"thai": "ในที่สุดก็เผชิญหน้ากับประตูแห่งความจริง และเงาที่เยาะเย้ย",
						"hindi": "अंततः सत्य के द्वार का सामना। और उपहास करती परछाई।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "포기했으면 편했을 것을… 어리석군.",
						"english": "It would have been easier to give up... foolish.",
						"japanese": "諦めていれば楽だったものを…愚かな。",
						"chinese": "如果放弃了会轻松些…真是愚蠢。",
						"french": "Ça aurait été plus facile d'abandonner... stupide.",
						"spanish": "Hubiera sido más fácil rendirse... Qué necio.",
						"vietnamese": "Nếu từ bỏ thì đã dễ dàng hơn rồi... Ngốc nghếch.",
						"thai": "ถ้ายอมแพ้คงจะสบายกว่านี้... ช่างโง่เขลา",
						"hindi": "अगर छोड़ दिया होता तो आसान होता... मूर्ख।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "이건 가짜야! {random_boss}에게 속지 마!",
						"english": "This is fake! Don't be fooled by {random_boss}!",
						"japanese": "これは偽物だ！{random_boss}に騙されるな！",
						"chinese": "这是假的！别被{random_boss}骗了！",
						"french": "C'est un faux ! Ne te laisse pas berner par {random_boss} !",
						"spanish": "¡Esto es falso! ¡No te dejes engañar por {random_boss}!",
						"vietnamese": "Đây là giả! Đừng bị {random_boss} lừa!",
						"thai": "นี่มันของปลอม! อย่าหลงกล {random_boss}!",
						"hindi": "यह नकली है! {random_boss} से मूर्ख मत बनो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "달콤한 환상은 끝났어. 이제 진실을 마주할 시간이야.",
						"english": "The sweet illusion is over. It's time to face the truth.",
						"japanese": "甘い幻想は終わった。今こそ真実と向き合う時だ。",
						"chinese": "甜蜜的幻想结束了。现在是时候面对真相了。",
						"french": "La douce illusion est terminée. Il est temps d'affronter la vérité.",
						"spanish": "La dulce ilusión ha terminado. Ahora es el momento de enfrentar la verdad.",
						"vietnamese": "Ảo ảnh ngọt ngào đã kết thúc. Giờ là lúc đối mặt với sự thật.",
						"thai": "ภาพลวงตาอันหอมหวานสิ้นสุดลงแล้ว ถึงเวลาเผชิญหน้ากับความจริง",
						"hindi": "मीठा भ्रम समाप्त हो गया है। अब सच का सामना करने का समय है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "결국 달콤한 꿈에 갇히는군. 영원히 여기서 행복해라.",
						"english": "So you're trapped in a sweet dream after all. Be happy here forever.",
						"japanese": "結局、甘い夢に囚われるのね。ここで永遠に幸せに暮らしなさい。",
						"chinese": "你终究还是被困在了甜蜜的梦中。永远在这里幸福下去吧。",
						"french": "Tu es finalement piégé dans un doux rêve. Sois heureux ici pour toujours.",
						"spanish": "Al final, estás atrapado en un dulce sueño. Sé feliz aquí para siempre.",
						"vietnamese": "Cuối cùng ngươi cũng bị mắc kẹt trong giấc mơ ngọt ngào. Hãy hạnh phúc ở đây mãi mãi.",
						"thai": "ในที่สุดเจ้าก็ติดอยู่ในความฝันอันหอมหวาน มีความสุขอยู่ที่นี่ตลอดไปเถอะ",
						"hindi": "आखिरकार, तुम एक मीठे सपने में फंस गए हो। हमेशा के लिए यहीं खुश रहो।"
					}
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 포기하지 않아…",
						"english": "No... it's not over yet. I won't give up...",
						"japanese": "いや…まだ終わってない。諦めない…",
						"chinese": "不…还没结束。我不会放弃的…",
						"french": "Non... ce n'est pas encore fini. Je n'abandonnerai pas...",
						"spanish": "No... aún no ha terminado. No me rendiré...",
						"vietnamese": "Không… vẫn chưa kết thúc. Ta sẽ không bỏ cuộc…",
						"thai": "ไม่...ยังไม่จบ ฉันจะไม่ยอมแพ้...",
						"hindi": "नहीं... अभी खत्म नहीं हुआ। मैं हार नहीं मानूंगा..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 일어서야 해…!",
						"english": "Again... I must rise again...!",
						"japanese": "もう一度…もう一度立ち上がらなければ…！",
						"chinese": "再次…我必须再次站起来…！",
						"french": "Encore... je dois me relever...!",
						"spanish": "De nuevo... ¡debo levantarme de nuevo...!",
						"vietnamese": "Lại nữa… ta phải đứng dậy lần nữa…!",
						"thai": "อีกครั้ง...ฉันต้องลุกขึ้นอีกครั้ง...!",
						"hindi": "फिर से... मुझे फिर से खड़ा होना होगा...!"
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도 환영에…",
						"english": "Ugh... just for this kind of illusion...",
						"japanese": "くっ…たかがこの程度の幻影に…",
						"chinese": "呃…仅仅是这种幻象就…",
						"french": "Ugh... juste pour une telle illusion...",
						"spanish": "Uf... solo por esta ilusión...",
						"vietnamese": "Khụ... chỉ vì ảo ảnh cấp độ này...",
						"thai": "อึก... แค่ภาพลวงตาระดับนี้เอง...",
						"hindi": "उफ़... बस इतनी सी माया में..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 함정은 통하지 않아.",
						"english": "Your trap won't work.",
						"japanese": "お前の罠は通用しない。",
						"chinese": "你的陷阱无效。",
						"french": "Ton piège ne fonctionnera pas.",
						"spanish": "Tu trampa no funcionará.",
						"vietnamese": "Cái bẫy của ngươi không có tác dụng đâu.",
						"thai": "กับดักของเจ้าใช้ไม่ได้ผลหรอก",
						"hindi": "तुम्हारी चाल काम नहीं करेगी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잘했어! 하지만… 아직 완전히 벗어난 게 아닐 거야.",
						"english": "Well done! But... you might not be completely free yet.",
						"japanese": "よくやった！だが…まだ完全に抜け出したわけではないだろう。",
						"chinese": "干得好！但是…你可能还没有完全摆脱。",
						"french": "Bien joué ! Mais... tu n'es peut-être pas encore complètement tiré d'affaire.",
						"spanish": "¡Bien hecho! Pero... quizás aún no te hayas librado del todo.",
						"vietnamese": "Làm tốt lắm! Nhưng... có lẽ vẫn chưa hoàn toàn thoát ra đâu.",
						"thai": "ทำได้ดีมาก! แต่... เธออาจจะยังไม่หลุดพ้นจากมันทั้งหมด",
						"hindi": "बहुत अच्छा! लेकिन... तुम अभी पूरी तरह से बाहर नहीं निकले होगे।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영의 잔재가 흩어졌다. 하지만 뒤틀린 길은 계속되었다.",
						"english": "The remnants of illusion scattered. But the twisted path continued.",
						"japanese": "幻影の残滓は散った。しかし、歪んだ道は続いた。",
						"chinese": "幻影的残余消散了。但扭曲的道路仍在继续。",
						"french": "Les vestiges de l'illusion se sont dispersés. Mais le chemin tordu a continué.",
						"spanish": "Los restos de la ilusión se dispersaron. Pero el camino retorcido continuó.",
						"vietnamese": "Tàn dư của ảo ảnh tan biến. Nhưng con đường vặn vẹo vẫn tiếp tục.",
						"thai": "เศษซากของภาพลวงตาจางหายไป แต่เส้นทางที่บิดเบี้ยวก็ยังคงดำเนินต่อไป",
						"hindi": "भ्रम के अवशेष बिखर गए। लेकिन मुड़ा हुआ रास्ता जारी रहा。"
					}
				}
			],
			"id": 15
		}
	]
} as const;
