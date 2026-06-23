export const scenario_forest_nyx_40_01 = {
	"scenario_id": "forest_nyx_40_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고요한 숲. 모든 것이 평화로워 보였다.",
			"그러나 그 평화는, 누군가에 의해 완벽히 조작된 환상.",
			"진실은 가장 깊은 곳에 숨겨져 있었다. 혹은, 가장 위험한 곳에.",
			"이제, 거대한 그림자의 춤이 시작된다."
		],
		"english": [
			"A serene forest. Everything seemed peaceful.",
			"But that peace was an illusion, perfectly manipulated by someone.",
			"The truth was hidden in the deepest place. Or, the most dangerous one.",
			"Now, the dance of the giant shadow begins."
		],
		"japanese": [
			"静かな森。全てが平和に見えた。",
			"しかしその平和は、誰かによって完璧に操作された幻想だった。",
			"真実は最も深い場所に隠されていた。あるいは、最も危険な場所に。",
			"今、巨大な影の舞が始まる。"
		],
		"chinese": [
			"宁静的森林。一切看起来都很平静。",
			"然而，那份宁静是某人精心编织的假象。",
			"真相隐藏在最深处。或者说，最危险的地方。",
			"现在，巨大阴影的舞蹈开始了。"
		],
		"french": [
			"Une forêt sereine. Tout semblait paisible.",
			"Mais cette paix n'était qu'une illusion, parfaitement manipulée par quelqu'un.",
			"La vérité était cachée au plus profond. Ou, à l'endroit le plus dangereux.",
			"Maintenant, la danse de l'ombre géante commence."
		],
		"spanish": [
			"Un bosque sereno. Todo parecía en paz.",
			"Pero esa paz era una ilusión, perfectamente manipulada por alguien.",
			"La verdad estaba oculta en el lugar más profundo. O, en el más peligroso.",
			"Ahora, la danza de la sombra gigante comienza."
		],
		"vietnamese": [
			"Rừng tĩnh mịch. Mọi thứ dường như bình yên.",
			"Nhưng sự bình yên đó là một ảo ảnh, bị ai đó thao túng hoàn hảo.",
			"Sự thật ẩn giấu nơi sâu thẳm nhất. Hoặc, nơi nguy hiểm nhất.",
			"Giờ đây, điệu nhảy của bóng tối khổng lồ bắt đầu."
		],
		"thai": [
			"ป่าอันเงียบสงบ ทุกสิ่งดูเหมือนจะสงบสุข",
			"แต่ความสงบสุขนั้นเป็นเพียงภาพลวงตา ที่ถูกใครบางคนบงการอย่างสมบูรณ์",
			"ความจริงซ่อนอยู่ในที่ที่ลึกที่สุด หรือไม่ก็ที่ที่อันตรายที่สุด",
			"บัดนี้ การเต้นรำของเงาอันมหึมาได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"एक शांत जंगल। सब कुछ शांतिपूर्ण लग रहा था।",
			"लेकिन वह शांति एक भ्रम थी, जिसे किसी ने पूरी तरह से हेरफेर किया था।",
			"सच्चाई सबसे गहरी जगह में छिपी थी। या, सबसे खतरनाक जगह में।",
			"अब, विशालकाय छाया का नृत्य शुरू होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 입구는 거대한 안개로 뒤덮여 있었다.",
						"english": "The forest entrance was covered in a thick fog.",
						"japanese": "森の入口は巨大な霧に覆われていた。",
						"chinese": "森林的入口被巨大的雾气笼罩。",
						"french": "L'entrée de la forêt était recouverte d'un épais brouillard.",
						"spanish": "La entrada del bosque estaba cubierta por una densa niebla.",
						"vietnamese": "Lối vào rừng bị bao phủ bởi sương mù dày đặc.",
						"thai": "ทางเข้าป่าถูกปกคลุมด้วยหมอกหนาทึบ",
						"hindi": "जंगल का प्रवेश द्वार घने कोहरे से ढका हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 숲인가?",
						"english": "Is this... that forest?",
						"japanese": "ここが… あの森か？",
						"chinese": "这里就是……那片森林吗？",
						"french": "Est-ce... cette forêt ?",
						"spanish": "¿Es este... ese bosque?",
						"vietnamese": "Đây là... khu rừng đó sao?",
						"thai": "ที่นี่คือ... ป่านั้นหรือ?",
						"hindi": "क्या यह... वही जंगल है?"
					}
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "어서 와, 낯선 이여. 숲은 언제나 너그러운 곳이지.",
						"english": "Welcome, stranger. The forest is always a generous place.",
						"japanese": "ようこそ、見知らぬ者よ。森はいつだって寛大な場所だ。",
						"chinese": "欢迎，陌生人。森林总是宽容之地。",
						"french": "Bienvenue, étranger. La forêt est toujours un endroit généreux.",
						"spanish": "Bienvenido, extraño. El bosque siempre es un lugar generoso.",
						"vietnamese": "Chào mừng, người lạ. Rừng luôn là một nơi rộng lượng.",
						"thai": "ยินดีต้อนรับ ผู้แปลกหน้า ป่านี้ใจดีเสมอ",
						"hindi": "स्वागत है, अजनबी। जंगल हमेशा एक उदार जगह है।"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "이곳엔 오랜 규칙이 있어. 지키면 평화롭고, 어기면…",
						"english": "There are old rules here. Follow them and it's peaceful, break them and...",
						"japanese": "ここには古い掟がある。守れば平和、破れば…",
						"chinese": "这里有古老的规矩。遵守便安宁，违背则……",
						"french": "Il y a d'anciennes règles ici. Suis-les et c'est la paix, brise-les et...",
						"spanish": "Aquí hay reglas antiguas. Síguelas y habrá paz, rómpelas y...",
						"vietnamese": "Nơi đây có những quy tắc cổ xưa. Tuân theo thì bình yên, vi phạm thì...",
						"thai": "ที่นี่มีกฎเก่าแก่ ถ้าทำตามก็จะสงบสุข ถ้าฝ่าฝืนก็...",
						"hindi": "यहाँ पुराने नियम हैं। मानो तो शांति मिलेगी, तोड़ो तो..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어기면?",
						"english": "Break them?",
						"japanese": "破れば？",
						"chinese": "违背则？",
						"french": "Les briser ?",
						"spanish": "¿Romperlas?",
						"vietnamese": "Vi phạm thì sao?",
						"thai": "ฝ่าฝืนหรือ?",
						"hindi": "तोड़ो तो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "글쎄. 그건 직접 겪어봐야 알 일.",
						"english": "Well. That's something you'll have to experience yourself to know.",
						"japanese": "さあな。それは自分で経験してみないと分からないことだ。",
						"chinese": "呵呵。那得你自己亲身体验才知道。",
						"french": "Eh bien. C'est quelque chose que tu devras expérimenter toi-même pour le savoir.",
						"spanish": "Bueno. Eso es algo que tendrás que experimentar por ti mismo para saber.",
						"vietnamese": "Hừm. Chuyện đó phải tự mình trải nghiệm mới biết được.",
						"thai": "อืม... นั่นเป็นเรื่องที่คุณต้องสัมผัสด้วยตัวเองถึงจะรู้",
						"hindi": "खैर। यह कुछ ऐसा है जिसे जानने के लिए तुम्हें खुद अनुभव करना होगा।"
					},
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 걱정 마. 겉보기엔 언제나 안전하니까.",
						"english": "But don't worry. It always seems safe on the surface.",
						"japanese": "でも心配ないさ。見た目だけはいつも安全だから。",
						"chinese": "但别担心。表面上它总是安全的。",
						"french": "Mais ne t'inquiète pas. En apparence, c'est toujours sûr.",
						"spanish": "Pero no te preocupes. Aparentemente, siempre es seguro.",
						"vietnamese": "Nhưng đừng lo. Bề ngoài thì lúc nào cũng an toàn cả.",
						"thai": "แต่ไม่ต้องห่วงหรอกนะ ดูภายนอกมันปลอดภัยเสมอแหละ",
						"hindi": "लेकिन चिंता मत करो। यह सतह पर हमेशा सुरक्षित दिखता है।"
					},
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 헤매고 있군. 뭘 찾고 있지?",
						"english": "Still wandering, I see. What are you looking for?",
						"japanese": "まだ迷っているようだな。何を探している？",
						"chinese": "还在徘徊啊。你在找什么？",
						"french": "Tu erres encore, à ce que je vois. Que cherches-tu ?",
						"spanish": "Aún deambulando, veo. ¿Qué buscas?",
						"vietnamese": "Vẫn còn lang thang à. Đang tìm gì thế?",
						"thai": "ยังคงหลงทางอยู่สินะ กำลังหาสิ่งใดกัน?",
						"hindi": "अभी भी भटक रहे हो। क्या ढूंढ रहे हो?"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "특별히 찾는 건 없어. 그냥…",
						"english": "Nothing in particular. Just...",
						"japanese": "特に何も。ただ…",
						"chinese": "没什么特别的。只是...",
						"french": "Rien de particulier. Juste...",
						"spanish": "Nada en particular. Solo...",
						"vietnamese": "Không có gì đặc biệt. Chỉ là...",
						"thai": "ไม่ได้หาอะไรเป็นพิเศษ แค่...",
						"hindi": "कुछ खास नहीं। बस..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "그럼 더 위험한데. 숲은 원하는 게 없는 자를 가만두지 않거든.",
						"english": "That's even more dangerous. The forest doesn't leave those who desire nothing in peace.",
						"japanese": "それはさらに危険だな。森は何も望まない者を放っておかないからな。",
						"chinese": "那就更危险了。森林可不会放过那些无所求的人。",
						"french": "C'est encore plus dangereux. La forêt ne laisse pas en paix ceux qui ne désirent rien.",
						"spanish": "Eso es aún más peligroso. El bosque no deja en paz a quienes no desean nada.",
						"vietnamese": "Vậy thì càng nguy hiểm hơn. Rừng không để yên cho những kẻ không có gì để tìm kiếm đâu.",
						"thai": "นั่นยิ่งอันตรายเข้าไปใหญ่ ป่าไม่ปล่อยให้คนที่ไม่มีความปรารถนาอยู่เฉยๆ หรอกนะ",
						"hindi": "तो यह और भी खतरनाक है। जंगल उन लोगों को अकेला नहीं छोड़ता जो कुछ नहीं चाहते।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억해, 친구. 이 숲에서 진실은 가장 위험한 밀수품이야.",
						"english": "Remember, friend. In this forest, truth is the most dangerous contraband.",
						"japanese": "覚えておけ、友よ。この森では、真実が最も危険な密輸品だ。",
						"chinese": "记住，朋友。在这片森林里，真相是最危险的违禁品。",
						"french": "Souviens-toi, ami. Dans cette forêt, la vérité est la contrebande la plus dangereuse.",
						"spanish": "Recuerda, amigo. En este bosque, la verdad es el contrabando más peligroso.",
						"vietnamese": "Hãy nhớ, bạn hiền. Trong khu rừng này, sự thật là món hàng cấm nguy hiểm nhất.",
						"thai": "จำไว้สหาย ในป่าแห่งนี้ ความจริงคือสิ่งผิดกฎหมายที่อันตรายที่สุด",
						"hindi": "याद रखो, दोस्त। इस जंगल में, सच सबसे खतरनाक तस्करी का सामान है।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실?",
						"english": "Truth?",
						"japanese": "真実？",
						"chinese": "真相？",
						"french": "La vérité ?",
						"spanish": "¿La verdad?",
						"vietnamese": "Sự thật?",
						"thai": "ความจริง?",
						"hindi": "सच?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 보이지 않는 걸 좇는 건, 맹목적인 탐욕과도 같지.",
						"english": "Yes. Chasing what's unseen is like blind greed.",
						"japanese": "そうだ。見えないものを追い求めるのは、盲目的な強欲と同じだ。",
						"chinese": "没错。追逐看不见的东西，就像是盲目的贪婪。",
						"french": "Oui. Poursuivre ce qui est invisible, c'est comme une avidité aveugle.",
						"spanish": "Sí. Perseguir lo invisible es como una avaricia ciega.",
						"vietnamese": "Đúng vậy. Theo đuổi những thứ vô hình, cũng giống như lòng tham mù quáng.",
						"thai": "ใช่แล้ว การวิ่งไล่สิ่งที่มองไม่เห็น ก็เหมือนกับความโลภที่มืดบอด",
						"hindi": "हाँ। जो अदृश्य है उसका पीछा करना, अंधी लालच जैसा है।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어쩐지 불안해 보이는군. 무슨 일이라도 있었나?",
						"english": "You seem uneasy. Did something happen?",
						"japanese": "なんだか不安そうだな。何かあったのか？",
						"chinese": "你看起来有些不安。发生什么事了吗？",
						"french": "Tu as l'air inquiet. Est-ce qu'il s'est passé quelque chose ?",
						"spanish": "Pareces inquieto. ¿Pasó algo?",
						"vietnamese": "Trông cậu có vẻ bất an. Có chuyện gì sao?",
						"thai": "ดูเจ้าไม่สบายใจเลย มีเรื่องอะไรเกิดขึ้นหรือ",
						"hindi": "तुम कुछ बेचैन दिख रहे हो। क्या कुछ हुआ है?"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숲이… 평화롭지 않은 것 같아. 뭔가 속이는 느낌이야.",
						"english": "The forest... it doesn't feel peaceful. It feels like something is deceiving me.",
						"japanese": "森が…平和じゃない気がする。何か欺かれているような感覚だ。",
						"chinese": "森林……感觉不平静。总觉得有什么在欺骗我。",
						"french": "La forêt... elle ne me semble pas paisible. J'ai l'impression que quelque chose me trompe.",
						"spanish": "El bosque... no se siente pacífico. Tengo la sensación de que algo me está engañando.",
						"vietnamese": "Khu rừng… có vẻ không bình yên. Có cảm giác như đang bị lừa dối vậy.",
						"thai": "ป่า...มันไม่รู้สึกสงบเลย เหมือนมีบางสิ่งกำลังหลอกลวงฉันอยู่",
						"hindi": "जंगल... शांतिपूर्ण नहीं लग रहा। ऐसा लगता है जैसे कुछ धोखा दे रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "하하. 예민하군. 숲은 원래 많은 것을 감추지.",
						"english": "Haha. You're sensitive. The forest naturally hides many things.",
						"japanese": "ハハ。敏感だな。森は元々多くのものを隠すものだ。",
						"chinese": "哈哈。你真敏感。森林本来就隐藏着许多东西。",
						"french": "Haha. Tu es sensible. La forêt cache naturellement beaucoup de choses.",
						"spanish": "Jaja. Eres sensible. El bosque, por naturaleza, esconde muchas cosas.",
						"vietnamese": "Haha. Cậu thật nhạy cảm. Rừng vốn dĩ che giấu rất nhiều thứ mà.",
						"thai": "ฮ่าฮ่า เจ้าช่างอ่อนไหว ป่ามักจะซ่อนสิ่งต่างๆ ไว้มากมายอยู่แล้ว",
						"hindi": "हाहा। तुम संवेदनशील हो। जंगल स्वाभाविक रूप से कई चीजें छुपाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "하지만 그건 나쁜 의미가 아냐. 모든 것을 알 필요는 없어.",
						"english": "But that's not a bad thing. You don't need to know everything.",
						"japanese": "でも、それは悪いことじゃない。すべてを知る必要はないんだ。",
						"chinese": "但这并非坏事。你无需知晓一切。",
						"french": "Mais ce n'est pas une mauvaise chose. Tu n'as pas besoin de tout savoir.",
						"spanish": "Pero eso no es malo. No necesitas saberlo todo.",
						"vietnamese": "Nhưng đó không phải là điều xấu. Bạn không cần phải biết mọi thứ.",
						"thai": "แต่นั่นไม่ใช่เรื่องไม่ดี คุณไม่จำเป็นต้องรู้ทุกอย่าง",
						"hindi": "लेकिन यह बुरी बात नहीं है। तुम्हें सब कुछ जानने की ज़रूरत नहीं है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "때론 무지가 더 큰 축복이 될 수 있지. 그렇지 않나?",
						"english": "Sometimes, ignorance can be a greater blessing. Don't you agree?",
						"japanese": "時には無知がより大きな祝福となることもある。そう思わないか？",
						"chinese": "有时，无知反而是更大的福气。你说是不是？",
						"french": "Parfois, l'ignorance peut être une plus grande bénédiction. N'est-ce pas ?",
						"spanish": "A veces, la ignorancia puede ser una bendición mayor. ¿No crees?",
						"vietnamese": "Đôi khi, sự thiếu hiểu biết có thể là một phước lành lớn hơn. Phải không?",
						"thai": "บางครั้ง ความไม่รู้ก็เป็นพรที่ยิ่งใหญ่กว่า จริงไหม?",
						"hindi": "कभी-कभी, अज्ञानता एक बड़ा वरदान हो सकती है। क्या तुम सहमत नहीं हो?"
					},
					"speaker": "bracken"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 깊은 곳. 안개가 걷히자 거대한 그림자가 나타났다.",
						"english": "Deep in the forest. As the mist cleared, a colossal shadow appeared.",
						"japanese": "森の奥深く。霧が晴れると、巨大な影が現れた。",
						"chinese": "森林深处。迷雾散去，一个巨大的影子出现了。",
						"french": "Au plus profond de la forêt. Le brouillard se leva, révélant une ombre colossale.",
						"spanish": "En lo profundo del bosque. Cuando la niebla se disipó, una sombra colosal apareció.",
						"vietnamese": "Sâu trong rừng. Khi màn sương tan đi, một bóng hình khổng lồ hiện ra.",
						"thai": "ลึกเข้าไปในป่า เมื่อหมอกจางลง เงาขนาดมหึมาก็ปรากฏขึ้น",
						"hindi": "जंगल की गहराई में। जैसे ही कोहरा छंटा, एक विशाल परछाई दिखाई दी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저건…",
						"english": "That's...",
						"japanese": "あれは…",
						"chinese": "那是……",
						"french": "C'est...",
						"spanish": "Eso es...",
						"vietnamese": "Đó là...",
						"thai": "นั่นมัน...",
						"hindi": "वह तो..."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "여기까지 올 줄이야. 꽤 재밌는 사냥감인데.",
						"english": "To think you'd come this far. Quite an amusing prey.",
						"japanese": "まさかここまで来るとはな。なかなか面白い獲物だ。",
						"chinese": "没想到你竟然能走到这里。真是个有趣的猎物。",
						"french": "Que tu sois venu jusqu'ici. Une proie assez amusante.",
						"spanish": "Que hayas llegado hasta aquí. Una presa bastante divertida.",
						"vietnamese": "Ngươi lại đến được đây sao. Đúng là một con mồi khá thú vị.",
						"thai": "ไม่คิดว่าจะมาได้ถึงที่นี่นะ เป็นเหยื่อที่น่าสนใจทีเดียว",
						"hindi": "यहां तक आ गए। काफी दिलचस्प शिकार हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "이건 예상 밖인데… {random_boss}가 벌써 움직이다니.",
						"english": "This is unexpected... {random_boss} is already making a move.",
						"japanese": "これは予想外だな… {random_boss}がもう動いているとは。",
						"chinese": "这真是出乎意料…… {random_boss}竟然已经开始行动了。",
						"french": "C'est inattendu... {random_boss} est déjà en mouvement.",
						"spanish": "Esto es inesperado... {random_boss} ya se está moviendo.",
						"vietnamese": "Chuyện này thật ngoài dự đoán... {random_boss} đã hành động rồi sao.",
						"thai": "นี่มันไม่คาดฝันเลย... {random_boss} เคลื่อนไหวแล้วเหรอเนี่ย",
						"hindi": "यह अप्रत्याशित है... {random_boss} पहले ही हरकत में आ गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "브라켄, 대체 무슨 수작이야?",
						"english": "Braken, what exactly are you up to?",
						"japanese": "ブラッケン、一体何を企んでいる？",
						"chinese": "布拉肯，你到底在搞什么鬼？",
						"french": "Braken, qu'est-ce que tu mijotes exactement ?",
						"spanish": "Braken, ¿qué estás tramando exactamente?",
						"vietnamese": "Braken, rốt cuộc ngươi đang âm mưu gì?",
						"thai": "บราเคน นี่แกกำลังทำอะไรกันแน่?",
						"hindi": "ब्रेकन, आखिर तुम क्या कर रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "난 그저… 정보를 모았을 뿐이야. 네가 여기까지 오도록.",
						"english": "I merely... gathered information. So you would come this far.",
						"japanese": "私はただ…情報を集めていただけだ。君がここまで来るようにね。",
						"chinese": "我只是……收集了一些情报。好让你来到这里。",
						"french": "J'ai simplement... recueilli des informations. Pour que tu viennes jusqu'ici.",
						"spanish": "Yo simplemente... reuní información. Para que llegaras hasta aquí.",
						"vietnamese": "Ta chỉ là... thu thập thông tin thôi. Để ngươi đến được đây.",
						"thai": "ฉันแค่... รวบรวมข้อมูลเท่านั้นเอง เพื่อให้เธอมาถึงที่นี่",
						"hindi": "मैंने बस... जानकारी इकट्ठा की है। ताकि तुम यहां तक आ सको।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그래, 이 브라켄은 아주 유용한 미끼지.",
						"english": "Yes, this Braken makes for a very useful bait.",
						"japanese": "そう、このブラッケンはとても役に立つ餌だ。",
						"chinese": "没错，这个布拉肯是个很有用的诱饵。",
						"french": "Oui, ce Braken est un appât très utile.",
						"spanish": "Sí, este Braken es un cebo muy útil.",
						"vietnamese": "Đúng vậy, Braken này là một mồi nhử rất hữu ích.",
						"thai": "ใช่แล้ว บราเคนนี่เป็นเหยื่อที่ใช้ประโยชน์ได้ดีทีเดียว",
						"hindi": "हाँ, यह ब्रेकन एक बहुत उपयोगी चारा है।"
					}
				},
				{
					"content": {
						"korean": "미안해… 난 그저…",
						"english": "I'm sorry... I just...",
						"japanese": "ごめん…私はただ…",
						"chinese": "对不起……我只是……",
						"french": "Je suis désolé... Je voulais juste...",
						"spanish": "Lo siento... Yo solo...",
						"vietnamese": "Tôi xin lỗi... tôi chỉ là...",
						"thai": "ขอโทษนะ... ฉันแค่...",
						"hindi": "मुझे माफ़ करना... मैं बस..."
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 쓸모는 다했군. 어서 사라져.",
						"english": "You're no longer useful. Now begone.",
						"japanese": "もう用済みだ。早く消えろ。",
						"chinese": "你已经没用了。快消失吧。",
						"french": "Tu as fait ton temps. Disparais !",
						"spanish": "Ya no sirves. ¡Ahora desaparece!",
						"vietnamese": "Ngươi hết giá trị rồi. Biến đi!",
						"thai": "เจ้าหมดประโยชน์แล้ว จงหายไปซะ",
						"hindi": "तुम्हारा काम हो गया। अब गायब हो जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "bracken",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "도망가지 마!",
						"english": "Don't run!",
						"japanese": "逃げるな！",
						"chinese": "别跑！",
						"french": "Ne fuis pas !",
						"spanish": "¡No huyas!",
						"vietnamese": "Đừng chạy!",
						"thai": "อย่าหนีนะ!",
						"hindi": "भागो मत!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 인간. 이제 놀아줄 시간은 끝났다.",
						"english": "Foolish human. Playtime is over.",
						"japanese": "愚かな人間め。遊びの時間は終わりだ。",
						"chinese": "愚蠢的人类。玩耍的时间结束了。",
						"french": "Humain stupide. Le temps de jouer est terminé.",
						"spanish": "Humano estúpido. El tiempo de juego ha terminado.",
						"vietnamese": "Con người ngu xuẩn. Thời gian đùa giỡn đã kết thúc.",
						"thai": "มนุษย์โง่เขลา หมดเวลาเล่นแล้ว",
						"hindi": "मूर्ख इंसान। खेलने का समय खत्म हो गया।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 숲의 안개 속으로 스러졌다.",
						"english": "The colossal shadow slowly faded into the forest's mist.",
						"japanese": "巨大な影がゆっくりと森の霧の中へと消えていった。",
						"chinese": "巨大的身影缓缓消散在森林的迷雾中。",
						"french": "L'ombre colossale s'évanouit lentement dans la brume de la forêt.",
						"spanish": "La sombra colosal se desvaneció lentamente en la niebla del bosque.",
						"vietnamese": "Bóng đen khổng lồ dần dần tan biến vào màn sương của khu rừng.",
						"thai": "เงาขนาดมหึมาค่อยๆ จางหายไปในม่านหมอกของป่า",
						"hindi": "विशाल छाया धीरे-धीरे जंगल के कोहरे में घुल गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "겨우 이 정도인가. 진짜는… 이제부터 시작이야.",
						"english": "Is this all? The real challenge... begins now.",
						"japanese": "たったこれだけか。本番は…これからだ。",
						"chinese": "就这点程度吗？真正的挑战……现在才开始。",
						"french": "C'est tout ? Le vrai... commence maintenant.",
						"spanish": "¿Es solo esto? Lo real... empieza ahora.",
						"vietnamese": "Chỉ đến thế này thôi sao? Điều thật sự... bây giờ mới bắt đầu.",
						"thai": "แค่นี้เองรึ? ของจริง... เพิ่งจะเริ่มตอนนี้ต่างหาก",
						"hindi": "बस इतना ही? असली खेल... अब शुरू होता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너는… 더 깊은 곳으로… 이끌릴 것이다.",
						"english": "You will be... drawn deeper...",
						"japanese": "お前は…より深い場所へと…導かれるだろう。",
						"chinese": "你将…被引向…更深之处。",
						"french": "Tu seras... attiré plus profondément...",
						"spanish": "Serás... atraído a un lugar más profundo...",
						"vietnamese": "Ngươi sẽ... bị dẫn dắt... đến nơi sâu thẳm hơn.",
						"thai": "เจ้าจะ... ถูกนำพาไป... สู่ที่ลึกกว่านั้น",
						"hindi": "तुम्हें... और गहराई में... ले जाया जाएगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 말이야!",
						"english": "What?!",
						"japanese": "何だって？！",
						"chinese": "什么？！",
						"french": "Quoi ?!",
						"spanish": "¡¿Qué?!",
						"vietnamese": "Cái gì?!",
						"thai": "อะไรนะ?!",
						"hindi": "क्या?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "싸움은 끝났지만, 모든 것이 해결된 것은 아니었다.",
						"english": "The fight was over, but not everything was resolved.",
						"japanese": "戦いは終わったが、すべてが解決したわけではなかった。",
						"chinese": "战斗结束了，但并非所有问题都解决了。",
						"french": "Le combat était terminé, mais tout n'était pas résolu.",
						"spanish": "La lucha había terminado, pero no todo estaba resuelto.",
						"vietnamese": "Trận chiến đã kết thúc, nhưng không phải mọi thứ đều được giải quyết.",
						"thai": "การต่อสู้จบลงแล้ว แต่ทุกอย่างยังไม่คลี่คลาย",
						"hindi": "लड़ाई खत्म हो गई थी, लेकिन सब कुछ सुलझा नहीं था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 속삭임은 더욱 교활해졌다. 그는, 다음 그림자를 향해 나아가야 했다.",
						"english": "The forest's whispers grew more cunning. He had to advance towards the next shadow.",
						"japanese": "森のささやきはさらに狡猾になった。彼は次の影へと進まなければならなかった。",
						"chinese": "森林的低语变得更加狡猾。他必须向下一个阴影前进。",
						"french": "Les murmures de la forêt devinrent plus rusés. Il devait avancer vers la prochaine ombre.",
						"spanish": "Los susurros del bosque se volvieron más astutos. Tenía que avanzar hacia la siguiente sombra.",
						"vietnamese": "Những lời thì thầm của rừng cây trở nên xảo quyệt hơn. Anh phải tiến về phía bóng tối tiếp theo.",
						"thai": "เสียงกระซิบของป่ายิ่งเจ้าเล่ห์ เขาต้องก้าวไปสู่เงาถัดไป",
						"hindi": "जंगल की फुसफुसाहटें और भी चालाक हो गईं। उसे अगली परछाई की ओर बढ़ना था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 그림자가 모든 것을 삼켰다.",
						"english": "The forest's shadow swallowed everything.",
						"japanese": "森の影がすべてを飲み込んだ。",
						"chinese": "森林的阴影吞噬了一切。",
						"french": "L'ombre de la forêt a tout englouti.",
						"spanish": "La sombra del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của rừng cây nuốt chửng mọi thứ.",
						"thai": "เงาของป่ากลืนกินทุกสิ่ง",
						"hindi": "जंगल की परछाई ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아직 멀었군. 너의 어리석음은 끝이 없어.",
						"english": "Not yet. Your foolishness knows no end.",
						"japanese": "まだまだだな。お前の愚かさは際限がない。",
						"chinese": "还没到时候。你的愚蠢没有止境。",
						"french": "Pas encore. Ta folie n'a pas de fin.",
						"spanish": "Todavía no. Tu necedad no tiene fin.",
						"vietnamese": "Còn lâu lắm. Sự ngu ngốc của ngươi là vô tận.",
						"thai": "ยังอีกไกลนัก ความโง่เขลาของเจ้าไม่มีที่สิ้นสุด",
						"hindi": "अभी बहुत दूर है। तुम्हारी मूर्खता का कोई अंत नहीं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Urgh... Not over yet!",
						"japanese": "くっ…まだ終わってない！",
						"chinese": "呃啊…还没结束！",
						"french": "Ugh... Pas encore fini !",
						"spanish": "¡Ugh... No ha terminado aún!",
						"vietnamese": "Khụ... Chưa kết thúc!",
						"thai": "อึก...ยังไม่จบ!",
						"hindi": "उफ़... खत्म नहीं हुआ अभी!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 그때는… 더 깊은 절망을 보여줄 테니.",
						"english": "Come again. Then... I'll show you deeper despair.",
						"japanese": "また来い。その時は…より深い絶望を見せてやろう。",
						"chinese": "再来一次吧。那时…我将让你见识更深的绝望。",
						"french": "Reviens. Alors... je te montrerai un désespoir plus profond.",
						"spanish": "Vuelve. Entonces... te mostraré una desesperación más profunda.",
						"vietnamese": "Hãy trở lại. Khi đó... ta sẽ cho ngươi thấy sự tuyệt vọng sâu sắc hơn.",
						"thai": "กลับมาอีกครั้ง แล้วข้าจะแสดงความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้เจ้าเห็น",
						"hindi": "फिर आना। तब... मैं तुम्हें और गहरी निराशा दिखाऊंगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압도적인 존재감. 거대한 그림자가 숲을 지배하고 있었다.",
						"english": "An overwhelming presence. A colossal shadow dominated the forest.",
						"japanese": "圧倒的な存在感。巨大な影が森を支配していた。",
						"chinese": "压倒性的存在感。巨大的身影笼罩着森林。",
						"french": "Une présence écrasante. Une ombre colossale dominait la forêt.",
						"spanish": "Una presencia abrumadora. Una sombra gigantesca dominaba el bosque.",
						"vietnamese": "Sự hiện diện áp đảo. Một bóng đen khổng lồ bao trùm khu rừng.",
						"thai": "สัมผัสอันท่วมท้น เงาขนาดมหึมาเข้าครอบงำป่า",
						"hindi": "एक जबरदस्त उपस्थिति। एक विशाल छाया जंगल पर हावी थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 여기까지 온 어리석은 자여. 여기서 모든 것이 끝난다.",
						"english": "Foolish one, who dared to come this far. Here, all ends.",
						"japanese": "よくもここまで来たな、愚か者め。ここで全てが終わる。",
						"chinese": "愚蠢的家伙，竟敢来到这里。一切都将在此结束。",
						"french": "Insensé, toi qui as osé venir jusqu'ici. Tout se termine ici.",
						"spanish": "Necio, tú que osaste llegar tan lejos. Aquí, todo termina.",
						"vietnamese": "Kẻ ngu xuẩn, dám đến tận đây. Mọi thứ sẽ kết thúc tại đây.",
						"thai": "เจ้าผู้โง่เขลาที่กล้ามาถึงเพียงนี้ ทุกสิ่งจะจบลงที่นี่",
						"hindi": "मूर्ख, जो इतनी दूर आने की हिम्मत की। यहीं सब कुछ खत्म होता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마. 난 여기서 진실을 알아낼 거야!",
						"english": "Don't make me laugh. I'll uncover the truth here!",
						"japanese": "ふざけるな。ここで真実を暴いてやる！",
						"chinese": "别开玩笑了。我将在这里揭露真相！",
						"french": "Ne me fais pas rire. Je découvrirai la vérité ici !",
						"spanish": "No me hagas reír. ¡Aquí descubriré la verdad!",
						"vietnamese": "Đừng có đùa. Ta sẽ tìm ra sự thật ở đây!",
						"thai": "อย่ามาตลก ฉันจะเปิดเผยความจริงที่นี่!",
						"hindi": "मुझे हँसाओ मत। मैं यहीं सच का पता लगाऊँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실? 하하. 이 숲에 그런 건 없어. 오직 내가 만든 질서뿐.",
						"english": "Truth? Haha. There's no such thing in this forest. Only the order I've created.",
						"japanese": "真実？ハハ。この森にそんなものはない。あるのは私が作った秩序だけだ。",
						"chinese": "真相？哈哈。这片森林里没有那种东西。只有我创造的秩序。",
						"french": "La vérité ? Haha. Il n'y a rien de tel dans cette forêt. Seulement l'ordre que j'ai créé.",
						"spanish": "¿La verdad? Jaja. No existe tal cosa en este bosque. Solo el orden que he creado.",
						"vietnamese": "Sự thật? Haha. Trong khu rừng này không có thứ đó. Chỉ có trật tự do ta tạo ra.",
						"thai": "ความจริงรึ? ฮ่าฮ่า ในป่านี้ไม่มีสิ่งนั้น มีเพียงระเบียบที่ข้าสร้างขึ้นเท่านั้น",
						"hindi": "सच? हाहा। इस जंगल में ऐसी कोई चीज़ नहीं है। केवल मेरा बनाया हुआ आदेश है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
