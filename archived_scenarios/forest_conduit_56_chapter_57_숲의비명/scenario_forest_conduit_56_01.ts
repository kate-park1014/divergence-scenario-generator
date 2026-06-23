export const scenario_forest_conduit_56_01 = {
	"scenario_id": "forest_conduit_56_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"짙은 안개가 삼킨 숲. 길 잃은 비명들이 나무에 스며들었다.",
			"잃어버린 동료의 흔적. 그리고 숲이 가진 잔혹한 기억.",
			"안내자 브라이어는 경고했다. 이 숲은 살아있다고.",
			"모든 것을 기억하고, 또 집어삼키는 곳이라고."
		],
		"english": [
			"A forest swallowed by dense fog. Lost screams permeated the trees.",
			"Traces of lost comrades. And the forest's cruel memories.",
			"Guide Briar warned: This forest is alive.",
			"A place that remembers everything, and devours all."
		],
		"japanese": [
			"濃い霧に飲まれた森。迷い込んだ悲鳴が木々に染み渡った。",
			"失われた仲間の痕跡。そして森が持つ残酷な記憶。",
			"案内人ブライアは警告した。この森は生きていると。",
			"すべてを記憶し、そして飲み込む場所だと。"
		],
		"chinese": [
			"浓雾吞噬的森林。迷失的尖叫声渗入树木。",
			"失踪同伴的痕迹。以及森林残酷的记忆。",
			"向导布莱尔警告说：这片森林是活的。",
			"一个能记住并吞噬一切的地方。"
		],
		"french": [
			"Une forêt engloutie par un brouillard dense. Des cris perdus s'infiltraient dans les arbres.",
			"Les traces de camarades perdus. Et les souvenirs cruels de la forêt.",
			"Briar la guide a prévenu : Cette forêt est vivante.",
			"Un lieu qui se souvient de tout et dévore tout."
		],
		"spanish": [
			"Un bosque engullido por una densa niebla. Gritos perdidos se infiltraron en los árboles.",
			"Huellas de compañeros perdidos. Y los recuerdos crueles del bosque.",
			"La guía Briar advirtió: Este bosque está vivo.",
			"Un lugar que lo recuerda todo y lo devora todo."
		],
		"vietnamese": [
			"Khu rừng bị sương mù dày đặc nuốt chửng. Những tiếng thét lạc lối thấm vào cây cối.",
			"Dấu vết của đồng đội đã mất. Và những ký ức tàn khốc của khu rừng.",
			"Người dẫn đường Briar cảnh báo: Khu rừng này còn sống.",
			"Nơi ghi nhớ mọi thứ, và nuốt chửng tất cả."
		],
		"thai": [
			"ป่าที่ถูกกลืนกินด้วยหมอกหนา เสียงกรีดร้องที่หลงทางแทรกซึมเข้าไปในต้นไม้",
			"ร่องรอยของสหายที่หายไป และความทรงจำอันโหดร้ายของป่า",
			"ไกด์ไบรเออร์เตือนว่า ป่าแห่งนี้มีชีวิต",
			"สถานที่ที่จดจำทุกสิ่ง และกลืนกินทุกอย่าง"
		],
		"hindi": [
			"घने कोहरे में डूबा जंगल। खोई हुई चीखें पेड़ों में समा गईं।",
			"खोए हुए साथियों के निशान। और जंगल की क्रूर यादें।",
			"गाइड ब्रायर ने चेतावनी दी: यह जंगल ज़िंदा है।",
			"एक ऐसी जगह जो सब कुछ याद रखती है, और सब कुछ निगल जाती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "짙은 안개 속, 고요하던 숲이 비명을 토해내기 시작했다.",
						"english": "Amidst dense fog, the silent forest began to scream.",
						"japanese": "濃い霧の中、静寂だった森が悲鳴を吐き出し始めた。",
						"chinese": "浓雾中，寂静的森林开始发出尖叫。",
						"french": "Au milieu d'un brouillard dense, la forêt silencieuse a commencé à crier.",
						"spanish": "En medio de la densa niebla, el bosque silencioso empezó a gritar.",
						"vietnamese": "Trong sương mù dày đặc, khu rừng im lặng bắt đầu gào thét.",
						"thai": "ท่ามกลางหมอกหนา ป่าอันเงียบสงบเริ่มกรีดร้อง",
						"hindi": "घने कोहरे के बीच, शांत जंगल चीखने लगा।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 동료가 사라진 곳인가?",
						"english": "Is this... where our comrade vanished?",
						"japanese": "ここが…仲間が消えた場所か？",
						"chinese": "这里就是……同伴消失的地方吗？",
						"french": "C'est ici... que notre camarade a disparu ?",
						"spanish": "¿Es aquí... donde desapareció nuestro compañero?",
						"vietnamese": "Đây là... nơi đồng đội của chúng ta biến mất sao?",
						"thai": "นี่คือ...ที่ที่เพื่อนของเราหายตัวไปหรือ?",
						"hindi": "क्या यह... वही जगह है जहाँ हमारा साथी गायब हुआ?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "briar",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "그래요. 숲은 모든 것을 기억하죠. 특히 비명을요.",
						"english": "Yes. The forest remembers everything. Especially screams.",
						"japanese": "ええ。森はすべてを覚えています。特に悲鳴を。",
						"chinese": "是的。森林记住了一切。尤其是尖叫声。",
						"french": "Oui. La forêt se souvient de tout. Surtout des cris.",
						"spanish": "Sí. El bosque lo recuerda todo. Especialmente los gritos.",
						"vietnamese": "Đúng vậy. Khu rừng ghi nhớ mọi thứ. Đặc biệt là những tiếng thét.",
						"thai": "ใช่แล้ว ป่าจดจำทุกสิ่ง โดยเฉพาะเสียงกรีดร้อง",
						"hindi": "हाँ। जंगल सब कुछ याद रखता है। खासकर चीखें।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리지?",
						"english": "What was that sound?",
						"japanese": "何の音だ？",
						"chinese": "那是什么声音？",
						"french": "Quel est ce bruit ?",
						"spanish": "¿Qué fue ese sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "यह कैसी आवाज़ है?"
					}
				},
				{
					"content": {
						"korean": "조심해요. 숲의 기억은 때론 위험한 형태로 나타나니까.",
						"english": "Be careful. The forest's memories sometimes manifest in dangerous forms.",
						"japanese": "気をつけて。森の記憶は時として危険な形で現れるから。",
						"chinese": "小心。森林的记忆有时会以危险的形式出现。",
						"french": "Soyez prudent. Les souvenirs de la forêt se manifestent parfois sous des formes dangereuses.",
						"spanish": "Ten cuidado. Los recuerdos del bosque a veces se manifiestan de formas peligrosas.",
						"vietnamese": "Hãy cẩn thận. Ký ức của khu rừng đôi khi biểu hiện dưới dạng nguy hiểm.",
						"thai": "ระวังให้ดี ความทรงจำของป่าบางครั้งก็ปรากฏในรูปแบบที่อันตราย",
						"hindi": "सावधान रहें। जंगल की यादें कभी-कभी खतरनाक रूपों में प्रकट होती हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "걱정 마. 우린 동료를 찾을 거야.",
						"english": "Don't worry. We'll find our comrade.",
						"japanese": "心配するな。俺たちは仲間を見つけるさ。",
						"chinese": "别担心。我们会找到同伴的。",
						"french": "Ne t'inquiète pas. Nous trouverons notre camarade.",
						"spanish": "No te preocupes. Encontraremos a nuestro compañero.",
						"vietnamese": "Đừng lo. Chúng ta sẽ tìm thấy đồng đội của mình.",
						"thai": "ไม่ต้องห่วง เราจะหาเพื่อนของเราเจอ",
						"hindi": "चिंता मत करो। हम अपने साथी को ढूंढ लेंगे।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "briar",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 400,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "들려요? 과거의 속삭임이.",
						"english": "Do you hear it? The whispers of the past.",
						"japanese": "聞こえますか？過去の囁きが。",
						"chinese": "你听到了吗？过去的低语。",
						"french": "Vous l'entendez ? Les murmures du passé.",
						"spanish": "¿Lo oyes? Los susurros del pasado.",
						"vietnamese": "Bạn có nghe thấy không? Lời thì thầm của quá khứ.",
						"thai": "คุณได้ยินไหม? เสียงกระซิบจากอดีต",
						"hindi": "क्या तुम्हें सुनाई देता है? अतीत की फुसफुसाहट।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…바람 소리 아니야?",
						"english": "...Isn't that just the wind?",
						"japanese": "…ただの風の音じゃないの？",
						"chinese": "……那不是风声吗？",
						"french": "...N'est-ce pas juste le vent ?",
						"spanish": "¿...No es solo el viento?",
						"vietnamese": "...Đó không phải chỉ là tiếng gió sao?",
						"thai": "...นั่นไม่ใช่แค่เสียงลมเหรอ?",
						"hindi": "...क्या वह सिर्फ़ हवा की आवाज़ नहीं है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "아니요. 숲의 깊은 곳에는 늘 알 수 없는 메아리가 흐르죠.",
						"english": "No. Deep within the forest, an unknown echo always flows.",
						"japanese": "いいえ。森の奥深くには、常に未知のこだまが流れています。",
						"chinese": "不。在森林深处，总有未知的回响流淌。",
						"french": "Non. Au plus profond de la forêt, un écho inconnu résonne toujours.",
						"spanish": "No. En lo profundo del bosque, un eco desconocido siempre fluye.",
						"vietnamese": "Không. Sâu trong rừng, luôn có những tiếng vọng không thể biết.",
						"thai": "ไม่ ในส่วนลึกของป่า เสียงสะท้อนที่ไม่รู้จักไหลเวียนอยู่เสมอ",
						"hindi": "नहीं। जंगल की गहराई में, हमेशा एक अनजानी गूँज बहती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 우리 동료와 무슨 상관이야?",
						"english": "What does that have to do with our companion?",
						"japanese": "それが私たちの仲間にどう関係するの？",
						"chinese": "那和我们的同伴有什么关系？",
						"french": "Quel est le rapport avec notre compagnon ?",
						"spanish": "¿Qué tiene que ver eso con nuestro compañero?",
						"vietnamese": "Điều đó liên quan gì đến đồng đội của chúng ta?",
						"thai": "นั่นเกี่ยวอะไรกับสหายของเรา?",
						"hindi": "उसका हमारे साथी से क्या लेना-देना है?"
					},
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "모든 것은 연결되어 있으니까요.",
						"english": "Because everything is connected.",
						"japanese": "すべては繋がっていますから。",
						"chinese": "因为一切都相互连接。",
						"french": "Parce que tout est lié.",
						"spanish": "Porque todo está conectado.",
						"vietnamese": "Bởi vì mọi thứ đều được kết nối.",
						"thai": "เพราะทุกสิ่งเชื่อมโยงกัน",
						"hindi": "क्योंकि सब कुछ जुड़ा हुआ है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "briar",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 550
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게 뭐야? 저 문양…",
						"english": "What's that? That symbol...",
						"japanese": "あれは何だ？あの模様…",
						"chinese": "那是什么？那个图案……",
						"french": "Qu'est-ce que c'est ? Ce symbole...",
						"spanish": "¿Qué es eso? Ese símbolo...",
						"vietnamese": "Đó là gì? Hoa văn đó...",
						"thai": "นั่นอะไรน่ะ? สัญลักษณ์นั่น...",
						"hindi": "वह क्या है? वह प्रतीक..."
					}
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "잊힌 부족의 흔적이죠. 그들의 잔혹한 역사도 숲에 기록되어 있어요.",
						"english": "Traces of a forgotten tribe. Their cruel history is also recorded in the forest.",
						"japanese": "忘れられた部族の痕跡です。彼らの残酷な歴史も森に記録されています。",
						"chinese": "是遗忘部落的痕迹。他们残酷的历史也被记录在这片森林里。",
						"french": "Des traces d'une tribu oubliée. Leur histoire cruelle est également inscrite dans la forêt.",
						"spanish": "Huellas de una tribu olvidada. Su cruel historia también está registrada en el bosque.",
						"vietnamese": "Dấu vết của một bộ tộc bị lãng quên. Lịch sử tàn khốc của họ cũng được ghi lại trong rừng.",
						"thai": "ร่องรอยของชนเผ่าที่ถูกลืม ประวัติศาสตร์อันโหดร้ายของพวกเขาก็ถูกบันทึกไว้ในป่าเช่นกัน",
						"hindi": "एक भूली हुई जनजाति के निशान। उनका क्रूर इतिहास भी जंगल में दर्ज है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "당신은 이 숲에 대해 너무 잘 아는 것 같아.",
						"english": "You seem to know too much about this forest.",
						"japanese": "あなたは森について知りすぎているようだ。",
						"chinese": "你似乎对这片森林了如指掌。",
						"french": "Vous semblez trop en savoir sur cette forêt.",
						"spanish": "Pareces saber demasiado sobre este bosque.",
						"vietnamese": "Bạn dường như biết quá nhiều về khu rừng này.",
						"thai": "คุณดูเหมือนจะรู้เรื่องป่านี้มากเกินไป",
						"hindi": "तुम इस जंगल के बारे में बहुत कुछ जानते हो, ऐसा लगता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "…오래 살았으니까요. 하지만 모든 것을 아는 건 아니에요.",
						"english": "...Because I've lived a long time. But I don't know everything.",
						"japanese": "…長く生きてきましたから。しかし、すべてを知っているわけではありません。",
						"chinese": "……因为我活了很久。但我并非无所不知。",
						"french": "...Parce que j'ai vécu longtemps. Mais je ne sais pas tout.",
						"spanish": "...Porque he vivido mucho tiempo. Pero no lo sé todo.",
						"vietnamese": "...Vì tôi đã sống rất lâu rồi. Nhưng tôi không biết tất cả mọi thứ.",
						"thai": "...เพราะฉันมีชีวิตอยู่มานานแล้ว แต่ฉันไม่ได้รู้ทุกอย่างหรอกนะ",
						"hindi": "...क्योंकि मैं बहुत समय से जी रहा हूँ। लेकिन मैं सब कुछ नहीं जानता।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리 동료는 왜 숲에 들어온 거지?",
						"english": "Why did our companion enter the forest?",
						"japanese": "私たちの仲間はなぜ森に入ったのだろう？",
						"chinese": "我们的同伴为什么进入了森林？",
						"french": "Pourquoi notre compagnon est-il entré dans la forêt ?",
						"spanish": "¿Por qué nuestro compañero entró en el bosque?",
						"vietnamese": "Tại sao đồng đội của chúng ta lại vào rừng?",
						"thai": "ทำไมสหายของเราถึงเข้ามาในป่า?",
						"hindi": "हमारा साथी जंगल में क्यों आया?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글쎄요. 숲의 진실은… 때론 가장 달콤한 유혹이 되기도 하죠.",
						"english": "Well, the forest's truth... sometimes becomes the sweetest temptation.",
						"japanese": "さて、森の真実は…時に最も甘い誘惑となることもあります。",
						"chinese": "哎呀，森林的真相……有时会成为最甜蜜的诱惑。",
						"french": "Eh bien, la vérité de la forêt... devient parfois la tentation la plus douce.",
						"spanish": "Bueno, la verdad del bosque... a veces se convierte en la tentación más dulce.",
						"vietnamese": "Chà, sự thật của khu rừng... đôi khi lại là cám dỗ ngọt ngào nhất.",
						"thai": "อืม... ความจริงของป่า... บางครั้งก็กลายเป็นสิ่งล่อใจที่หอมหวานที่สุด",
						"hindi": "खैर, जंगल का सच... कभी-कभी सबसे मधुर प्रलोभन बन जाता है।"
					},
					"speaker": "briar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 450,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 깊어지는군. 돌아갈 수 없을 것 같아.",
						"english": "It's getting deeper. I don't think we can go back.",
						"japanese": "どんどん深くなる。もう戻れないかもしれない。",
						"chinese": "越来越深了。我恐怕回不去了。",
						"french": "Ça devient de plus en plus profond. Je ne pense pas que nous puissions revenir en arrière.",
						"spanish": "Se está haciendo cada vez más profundo. No creo que podamos volver.",
						"vietnamese": "Càng ngày càng sâu. Tôi e là không thể quay lại được nữa rồi.",
						"thai": "มันลึกขึ้นเรื่อยๆ แล้ว. ดูเหมือนเราจะกลับไปไม่ได้แล้ว",
						"hindi": "यह और गहरा होता जा रहा है। मुझे नहीं लगता कि हम वापस जा सकते हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "숲은 스스로 비밀을 삼켜요. 한번 발을 들이면… 빠져나오기 어렵죠.",
						"english": "The forest swallows its own secrets. Once you step in... it's hard to get out.",
						"japanese": "森は自ら秘密を飲み込む。一度足を踏み入れたら…抜け出すのは難しい。",
						"chinese": "森林吞噬着自己的秘密。一旦你踏入其中……就很难脱身。",
						"french": "La forêt dévore ses propres secrets. Une fois que vous y entrez... il est difficile d'en sortir.",
						"spanish": "El bosque se traga sus propios secretos. Una vez que entras... es difícil salir.",
						"vietnamese": "Rừng nuốt chửng những bí mật của chính nó. Một khi đã bước vào... thật khó để thoát ra.",
						"thai": "ป่ากลืนกินความลับของมันเอง. เมื่อเหยียบเข้ามาแล้ว... ก็ยากที่จะออกไปได้",
						"hindi": "जंगल अपने रहस्य खुद निगल जाता है। एक बार अंदर चले गए... तो निकलना मुश्किल है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "하지만 동료를 버릴 수는 없어.",
						"english": "But I can't abandon my comrades.",
						"japanese": "しかし、仲間を見捨てることはできない。",
						"chinese": "但我不能抛弃我的同伴。",
						"french": "Mais je ne peux pas abandonner mes camarades.",
						"spanish": "Pero no puedo abandonar a mis compañeros.",
						"vietnamese": "Nhưng tôi không thể bỏ rơi đồng đội của mình.",
						"thai": "แต่ฉันจะทิ้งเพื่อนไม่ได้",
						"hindi": "लेकिन मैं अपने साथियों को नहीं छोड़ सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"content": {
						"korean": "그 대가는… 치러야 할 거예요.",
						"english": "You'll have to pay... the price.",
						"japanese": "その代償は…支払うことになるだろう。",
						"chinese": "那个代价……你将不得不付出。",
						"french": "Le prix... devra être payé.",
						"spanish": "El precio... tendrá que ser pagado.",
						"vietnamese": "Cái giá đó... sẽ phải trả.",
						"thai": "ราคาของมัน... จะต้องจ่าย",
						"hindi": "कीमत... चुकानी पड़ेगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이건 시작에 불과해. 숲의 기억은… 너희를 놓지 않을 거다.",
						"english": "Urgh... This is just the beginning. The forest's memories... won't let you go.",
						"japanese": "くっ…これは始まりに過ぎない。森の記憶は…お前たちを放さないだろう。",
						"chinese": "呃……这只是个开始。森林的记忆……不会放过你们的。",
						"french": "Ugh... Ce n'est que le début. Les souvenirs de la forêt... ne vous lâcheront pas.",
						"spanish": "Ugh... Esto es solo el principio. Los recuerdos del bosque... no os dejarán escapar.",
						"vietnamese": "Ư... Đây chỉ là khởi đầu thôi. Ký ức của khu rừng... sẽ không buông tha các ngươi đâu.",
						"thai": "อึก... นี่เป็นแค่จุดเริ่มต้นเท่านั้น. ความทรงจำของป่า... จะไม่ปล่อยพวกเจ้าไป",
						"hindi": "उफ़... यह तो बस शुरुआत है। जंगल की यादें... तुम्हें जाने नहीं देंगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라고? 대체 무슨 소리야?",
						"english": "Not the end? What do you mean?",
						"japanese": "終わりじゃない？一体どういうことだ？",
						"chinese": "还没完？这到底是什么意思？",
						"french": "Ce n'est pas la fin ? Qu'est-ce que tu racontes ?",
						"spanish": "¿No es el final? ¿Qué quieres decir?",
						"vietnamese": "Chưa kết thúc ư? Rốt cuộc là sao chứ?",
						"thai": "ยังไม่จบเหรอ? หมายความว่ายังไงกันแน่?",
						"hindi": "यह अंत नहीं है? इसका क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 적을 쓰러뜨렸지만, 불안한 기운은 사라지지 않았다.",
						"english": "We defeated an unknown enemy, but the unsettling aura lingered.",
						"japanese": "正体不明の敵を倒したが、不穏な気配は消えなかった。",
						"chinese": "虽然击败了不明敌人，但不安的气息并未消散。",
						"french": "Nous avons vaincu un ennemi inconnu, mais l'aura inquiétante persistait.",
						"spanish": "Derrotamos a un enemigo desconocido, pero la inquietante aura no desapareció.",
						"vietnamese": "Đã đánh bại kẻ thù không rõ danh tính, nhưng cảm giác bất an vẫn không tan biến.",
						"thai": "เรากำจัดศัตรูที่ไม่รู้จักได้แล้ว แต่ความรู้สึกไม่สบายใจยังคงอยู่",
						"hindi": "हमने एक अज्ञात शत्रु को पराजित किया, लेकिन अशांत आभा बनी रही।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 비명은 점점 더 깊은 곳에서 울려 퍼지고 있었다.",
						"english": "The forest's screams echoed from deeper within.",
						"japanese": "森の悲鳴は、ますます深い場所から響き渡っていた。",
						"chinese": "森林的尖叫声从更深处回荡而来。",
						"french": "Les cris de la forêt résonnaient de plus en plus profondément.",
						"spanish": "Los gritos del bosque resonaban desde lo más profundo.",
						"vietnamese": "Tiếng thét của khu rừng vọng lại từ sâu thẳm hơn.",
						"thai": "เสียงกรีดร้องของป่ายังคงก้องกังวานจากส่วนลึกยิ่งขึ้นไปอีก",
						"hindi": "जंगल की चीखें गहराई से गूँज रही थीं।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 숲의 기억이 형체가 된 듯했다.",
						"english": "A giant shadow blocked the way. It was as if the forest's memories had taken shape.",
						"japanese": "巨大な影が道を阻んだ。森の記憶が形になったかのようだった。",
						"chinese": "一个巨大的阴影挡住了去路。仿佛是森林的记忆化作了形体。",
						"french": "Une ombre gigantesque bloquait le chemin. C'était comme si les souvenirs de la forêt avaient pris forme.",
						"spanish": "Una sombra gigante bloqueó el camino. Era como si los recuerdos del bosque hubieran tomado forma.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường. Cứ như thể ký ức của khu rừng đã hóa thành hình.",
						"thai": "เงาขนาดมหึมาขวางทางไว้. ราวกับความทรงจำของป่าได้ก่อร่างสร้างตัวขึ้นมา",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। ऐसा लगा मानो जंगल की यादों ने आकार ले लिया हो।"
					}
				},
				{
					"content": {
						"korean": "감히 이곳을 침범하다니…",
						"english": "How dare you trespass here...",
						"japanese": "よくもこの地を侵犯したな…",
						"chinese": "你们竟敢入侵这里……",
						"french": "Comment osez-vous vous introduire ici...",
						"spanish": "Cómo osas invadir este lugar...",
						"vietnamese": "Sao ngươi dám xâm phạm nơi đây...",
						"thai": "บังอาจบุกรุกเข้ามาที่นี่ได้ยังไง...",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ घुसपैठ करने की..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 우린 {random_boss}와 싸울 거야.",
						"english": "Get out of the way. We're going to fight {random_boss}.",
						"japanese": "退け。我々は{random_boss}と戦う。",
						"chinese": "让开。我们要和{random_boss}战斗。",
						"french": "Écarte-toi. Nous allons combattre {random_boss}.",
						"spanish": "Apártate. Vamos a luchar contra {random_boss}.",
						"vietnamese": "Tránh ra. Chúng ta sẽ chiến đấu với {random_boss}.",
						"thai": "หลีกไป. เราจะสู้กับ {random_boss}",
						"hindi": "हट जाओ। हम {random_boss} से लड़ने वाले हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희의 진실은 댓가를 치르게 될 것이다.",
						"english": "Fools. Your truth will cost you.",
						"japanese": "愚か者ども。お前たちの真実は代償を払うことになるだろう。",
						"chinese": "愚蠢的东西。你们的真相将付出代价。",
						"french": "Imbéciles. Votre vérité vous coûtera cher.",
						"spanish": "Necios. Vuestra verdad os costará cara.",
						"vietnamese": "Những kẻ ngu ngốc. Sự thật của các ngươi sẽ phải trả giá.",
						"thai": "พวกโง่เขลา. ความจริงของพวกเจ้าจะต้องชดใช้",
						"hindi": "मूर्खों। तुम्हारी सच्चाई तुम्हें महंगी पड़ेगी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "숲의 기억이 탐험대를 집어삼켰다.",
						"english": "The forest's memories swallowed the expedition.",
						"japanese": "森の記憶が探検隊を飲み込んだ。",
						"chinese": "森林的记忆吞噬了探险队。",
						"french": "Les souvenirs de la forêt ont englouti l'expédition.",
						"spanish": "Los recuerdos del bosque devoraron a la expedición.",
						"vietnamese": "Ký ức của khu rừng nuốt chửng đoàn thám hiểm.",
						"thai": "ความทรงจำของป่ากลืนกินคณะสำรวจ",
						"hindi": "जंगल की यादों ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하찮은 것들… 너희의 진실은 영원히 숲에 갇힐 것이다.",
						"english": "Insignificant beings... your truth shall forever be trapped in the forest.",
						"japanese": "取るに足らない者たち… お前たちの真実は永遠に森に閉じ込められるだろう。",
						"chinese": "卑微之物……你们的真相将永远被困在这森林中。",
						"french": "Créatures insignifiantes... votre vérité sera à jamais piégée dans la forêt.",
						"spanish": "Seres insignificantes... vuestra verdad quedará atrapada para siempre en el bosque.",
						"vietnamese": "Những kẻ nhỏ bé... sự thật của các ngươi sẽ mãi mãi bị giam cầm trong khu rừng này.",
						"thai": "พวกไร้ค่า... ความจริงของพวกเจ้าจะถูกจองจำอยู่ในป่านี้ชั่วนิรันดร์",
						"hindi": "तुच्छ प्राणी... तुम्हारा सच हमेशा के लिए जंगल में कैद रहेगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 반드시 동료를 찾을 거야.",
						"english": "...It's not over yet. We will definitely find our comrades.",
						"japanese": "…まだ終わってない。俺たちは必ず仲間を見つける。",
						"chinese": "……还没结束。我们一定会找到同伴的。",
						"french": "...Ce n'est pas encore fini. Nous retrouverons nos camarades coûte que coûte.",
						"spanish": "...Aún no ha terminado. Encontraremos a nuestros compañeros a toda costa.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta nhất định sẽ tìm thấy đồng đội của mình.",
						"thai": "...ยังไม่จบ เราจะตามหาเพื่อนร่วมทีมของเราให้เจอให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम अपने साथियों को ढूंढ निकालेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
