export const scenario_forest_kallisto_15_01 = {
	"scenario_id": "forest_kallisto_15_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "짙은 녹음이 우거진 숲. 고요하지만 알 수 없는 생명력이 느껴진다.",
						"english": "A deeply verdant forest. Quiet, yet an unknown vitality can be felt.",
						"japanese": "深い緑に覆われた森。静かだが、未知の生命力が感じられる。",
						"chinese": "一片葱郁的森林。寂静，却能感受到未知的生命力。",
						"french": "Une forêt profondément verdoyante. Silencieuse, mais une vitalité inconnue s'en dégage.",
						"spanish": "Un bosque profundamente verde. Silencioso, pero se siente una vitalidad desconocida.",
						"vietnamese": "Một khu rừng xanh thẳm. Yên tĩnh, nhưng cảm nhận được sức sống vô định.",
						"thai": "ป่าทึบสีเขียวเข้ม เงียบสงบ แต่สัมผัสได้ถึงพลังชีวิตลึกลับ",
						"hindi": "घना हरा जंगल। शांत, फिर भी एक अज्ञात जीवन शक्ति महसूस होती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… '낙원'인가?",
						"english": "Is this... 'paradise'?",
						"japanese": "ここが…「楽園」なのか？",
						"chinese": "这里是……“乐园”吗？",
						"french": "Est-ce... le 'paradis' ?",
						"spanish": "¿Es esto... el 'paraíso'?",
						"vietnamese": "Đây là… 'thiên đường' sao?",
						"thai": "ที่นี่คือ... 'สวรรค์' รึเปล่า",
						"hindi": "क्या यह... 'स्वर्ग' है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래, 숲에 오신 걸 환영해. 지친 영혼들을 위한 곳이야.",
						"english": "Yes, welcome to the forest. It's a place for weary souls.",
						"japanese": "ええ、森へようこそ。ここは疲れた魂たちのための場所よ。",
						"chinese": "是的，欢迎来到森林。这里是为疲惫灵魂而设的地方。",
						"french": "Oui, bienvenue dans la forêt. C'est un endroit pour les âmes fatiguées.",
						"spanish": "Sí, bienvenido al bosque. Es un lugar para almas cansadas.",
						"vietnamese": "Phải, chào mừng đến với rừng. Đây là nơi dành cho những linh hồn mệt mỏi.",
						"thai": "ใช่ ยินดีต้อนรับสู่ป่า ที่นี่สำหรับวิญญาณที่เหนื่อยล้า",
						"hindi": "हाँ, जंगल में आपका स्वागत है। यह थकी हुई आत्माओं के लिए एक जगह है।"
					},
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "이곳에서 모든 것을 잊고 편안히 쉬어가렴.",
						"english": "Here, forget everything and rest comfortably.",
						"japanese": "ここで全てを忘れ、ゆっくり休みなさい。",
						"chinese": "在这里，忘却一切，安心休息吧。",
						"french": "Ici, oublie tout et repose-toi confortablement.",
						"spanish": "Aquí, olvida todo y descansa cómodamente.",
						"vietnamese": "Ở đây, hãy quên hết mọi thứ và nghỉ ngơi thật thoải mái.",
						"thai": "ที่นี่ ลืมทุกสิ่งและพักผ่อนให้สบาย",
						"hindi": "यहाँ, सब कुछ भूल जाओ और आराम से विश्राम करो।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "숲의 노래가 들리니? 이곳은 항상 너를 기다렸어.",
						"english": "Can you hear the forest's song? This place has always awaited you.",
						"japanese": "森の歌が聞こえるかい？ここはいつも君を待っていたんだ。",
						"chinese": "听到森林的歌声了吗？这里一直在等待着你。",
						"french": "Entends-tu le chant de la forêt ? Cet endroit t'a toujours attendu.",
						"spanish": "¿Escuchas la canción del bosque? Este lugar siempre te ha esperado.",
						"vietnamese": "Bạn có nghe thấy bài hát của rừng không? Nơi đây đã luôn chờ đợi bạn.",
						"thai": "ได้ยินเสียงเพลงของป่าไหม ที่นี่รอเธอมาตลอด",
						"hindi": "क्या तुम्हें जंगल का गीत सुनाई दे रहा है? इस जगह ने हमेशा तुम्हारा इंतजार किया है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "(주변을 둘러본다) 뭔가… 익숙한데.",
						"english": "(Looks around) Something... feels familiar.",
						"japanese": "(周囲を見回す) 何か…見覚えがあるな。",
						"chinese": "(环顾四周) 有些……熟悉。",
						"french": "(Regarde autour de soi) Quelque chose… m'est familier.",
						"spanish": "(Mira a su alrededor) Algo… me resulta familiar.",
						"vietnamese": "(Nhìn quanh) Có gì đó… quen thuộc.",
						"thai": "(มองไปรอบๆ) บางอย่าง...คุ้นเคยจัง",
						"hindi": "(चारों ओर देखता है) कुछ… जाना-पहचाना सा लगता है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "오래된 비석 조각이 눈에 들어왔다. 희미하게 새겨진 문구, '탐욕은 순환한다'.",
						"english": "An old stone tablet fragment caught my eye. Faintly engraved, the phrase: 'Greed cycles.'",
						"japanese": "古い石碑の破片が目に入った。かすかに刻まれた文言、「強欲は巡る」。",
						"chinese": "一块古老的石碑碎片映入眼帘。上面模糊地刻着：“贪婪循环不息”。",
						"french": "Un fragment de vieille stèle attira mon regard. Une inscription à peine lisible : « La cupidité est cyclique. »",
						"spanish": "Un fragmento de una vieja losa captó mi atención. Una frase grabada débilmente: \"La avaricia es cíclica\".",
						"vietnamese": "Một mảnh bia đá cổ lọt vào tầm mắt. Dòng chữ khắc mờ nhạt: \"Tham lam luân hồi.\"",
						"thai": "ชิ้นส่วนศิลาจารึกเก่าแก่ดึงดูดสายตา ข้อความที่สลักไว้เลือนราง: 'ความโลภหมุนเวียน'",
						"hindi": "एक पुराने पत्थर के टुकड़े पर नज़र पड़ी। उस पर धुंधले अक्षरों में लिखा था, 'लालच का चक्र चलता रहता है'।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐욕은… 순환한다?",
						"english": "Greed... cycles?",
						"japanese": "強欲は…巡る？",
						"chinese": "贪婪……循环不息？",
						"french": "La cupidité… cyclique ?",
						"spanish": "¿La avaricia… es cíclica?",
						"vietnamese": "Tham lam… luân hồi?",
						"thai": "ความโลภ...หมุนเวียน?",
						"hindi": "लालच... का चक्र चलता रहता है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아, 그건 옛날부터 있던 장식이야. 신경 쓸 필요 없어. 숲은 오직 평화만을 줄 거야.",
						"english": "Oh, that's just an old decoration. Don't worry about it. The forest will only bring you peace.",
						"japanese": "ああ、それは昔からある飾りだよ。気にする必要はない。森はただ、君に安らぎを与えるだけだ。",
						"chinese": "哦，那只是个老旧的装饰品。别担心。森林只会带给你平静。",
						"french": "Oh, c'est juste une vieille décoration. Ne t'en fais pas. La forêt ne t'apportera que la paix.",
						"spanish": "Oh, eso es solo una decoración antigua. No te preocupes. El bosque solo te traerá paz.",
						"vietnamese": "Ồ, đó chỉ là một đồ trang trí cũ thôi. Đừng bận tâm. Rừng sẽ chỉ mang lại bình yên cho cậu.",
						"thai": "อ้อ นั่นแค่ของตกแต่งเก่าๆ ไม่ต้องไปสนใจหรอก ป่าแห่งนี้จะมอบแต่ความสงบสุขให้เธอเท่านั้น",
						"hindi": "अरे, वह तो बस एक पुरानी सजावट है। उसकी चिंता मत करो। जंगल तुम्हें केवल शांति देगा।"
					},
					"emotion": "happy",
					"speaker": "briar",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "봐. 이 빛나는 식물들을. 숲의 축복이지.",
						"english": "Look. These glowing plants. A blessing of the forest.",
						"japanese": "見て。この光る植物たちを。森の祝福だよ。",
						"chinese": "看。这些发光的植物。是森林的祝福。",
						"french": "Regarde. Ces plantes lumineuses. Une bénédiction de la forêt.",
						"spanish": "Mira. Estas plantas brillantes. Una bendición del bosque.",
						"vietnamese": "Nhìn xem. Những loài cây phát sáng này. Đó là phước lành của rừng.",
						"thai": "ดูสิ พืชเรืองแสงพวกนี้ไง พรจากป่า",
						"hindi": "देखो। ये चमकते पौधे। जंगल का आशीर्वाद है ये।"
					},
					"emotion": "base",
					"speaker": "briar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아름다워… 근데 너무 질서 정연해.",
						"english": "Beautiful... but too orderly.",
						"japanese": "美しい…でも、あまりにも整然としすぎている。",
						"chinese": "真美……但又过于井然有序了。",
						"french": "Magnifique… mais trop ordonné.",
						"spanish": "Hermoso… pero demasiado ordenado.",
						"vietnamese": "Đẹp thật… nhưng lại quá có trật tự.",
						"thai": "สวยงาม...แต่เป็นระเบียบเกินไป",
						"hindi": "सुंदर है… पर बहुत ज़्यादा व्यवस्थित है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 누군가 심어놓은 것처럼.",
						"english": "As if someone planted them.",
						"japanese": "まるで誰かが植えたみたいに。",
						"chinese": "仿佛有人特意栽种一般。",
						"french": "Comme si quelqu'un les avait plantées.",
						"spanish": "Como si alguien las hubiera plantado.",
						"vietnamese": "Cứ như có ai đó đã trồng chúng vậy.",
						"thai": "ราวกับว่ามีใครบางคนปลูกเอาไว้",
						"hindi": "जैसे किसी ने इन्हें बोया हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "하하, 그게 숲의 조화로움이란다. 완벽하게 너희를 품어줄 준비가 되어있지.",
						"english": "Haha, that's the harmony of the forest. It's perfectly ready to embrace you.",
						"japanese": "ハハ、それが森の調和というものさ。完璧に君たちを迎え入れる準備ができている。",
						"chinese": "哈哈，那就是森林的和谐。它已经完美地准备好拥抱你们了。",
						"french": "Haha, c'est l'harmonie de la forêt. Elle est parfaitement prête à vous accueillir.",
						"spanish": "Jajaja, esa es la armonía del bosque. Está perfectamente listo para acogerte.",
						"vietnamese": "Haha, đó chính là sự hài hòa của rừng. Sẵn sàng hoàn hảo để đón nhận các cậu.",
						"thai": "ฮ่าฮ่า นั่นแหละคือความกลมกลืนของป่า พร้อมแล้วที่จะโอบกอดเธออย่างสมบูรณ์แบบ",
						"hindi": "हाहा, यही तो है जंगल का सामंजस्य। यह तुम्हें पूरी तरह से गले लगाने के लिए तैयार है।"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽… 너무 완벽해서 오히려 불안해.",
						"english": "Perfect... so perfect it makes me uneasy.",
						"japanese": "完璧…完璧すぎて、かえって不安になる。",
						"chinese": "完美……太过完美反而让人不安。",
						"french": "Parfait… trop parfait pour être honnête.",
						"spanish": "Perfecto… tan perfecto que me inquieta.",
						"vietnamese": "Hoàn hảo… quá hoàn hảo đến mức đáng lo.",
						"thai": "สมบูรณ์แบบ...สมบูรณ์แบบจนรู้สึกไม่สบายใจ",
						"hindi": "एकदम सही… इतना सही कि बेचैनी हो रही है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "왜 그렇게 불안해하니? 숲은 너의 죄책감을 씻어줄 거야.",
						"english": "Why are you so uneasy? The forest will wash away your guilt.",
						"japanese": "なぜそんなに不安がるんだい？森は君の罪悪感を洗い流してくれるだろう。",
						"chinese": "为什么如此不安？森林会洗净你的罪恶感。",
						"french": "Pourquoi es-tu si inquiète ? La forêt lavera ton sentiment de culpabilité.",
						"spanish": "¿Por qué estás tan inquieta? El bosque lavará tu culpa.",
						"vietnamese": "Sao cậu lại lo lắng đến vậy? Rừng sẽ gột rửa tội lỗi của cậu.",
						"thai": "ทำไมถึงไม่สบายใจขนาดนั้นล่ะ? ป่าจะช่วยชะล้างความรู้สึกผิดของเธอเอง",
						"hindi": "तुम इतनी बेचैन क्यों हो? जंगल तुम्हारे अपराध बोध को मिटा देगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "죄책감…? 당신은 뭘 아는 거지?",
						"english": "Guilt...? What do you know?",
						"japanese": "罪悪感…？ あなたは何を知っているの？",
						"chinese": "罪恶感……？你都知道些什么？",
						"french": "Culpabilité...? Que savez-vous ?",
						"spanish": "¿Culpa...? ¿Qué sabes tú?",
						"vietnamese": "Tội lỗi...? Ngươi biết gì?",
						"thai": "ความรู้สึกผิด...? คุณรู้อะไร?",
						"hindi": "अपराधबोध...? तुम क्या जानते हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(미소 짓는다) 모든 것을. 이 숲은 모든 것을 기억하니까.",
						"english": "(Smiles) Everything. This forest remembers everything.",
						"japanese": "(微笑む) 全てを。この森は全てを覚えているからね。",
						"chinese": "(微笑) 一切。这片森林记得所有一切。",
						"french": "(Sourit) Tout. Cette forêt se souvient de tout.",
						"spanish": "(Sonríe) Todo. Este bosque lo recuerda todo.",
						"vietnamese": "(Mỉm cười) Tất cả. Rừng này nhớ tất cả mọi thứ.",
						"thai": "(ยิ้ม) ทุกสิ่ง ป่านี้จดจำทุกสิ่งไว้หมด",
						"hindi": "(मुस्कुराता है) सब कुछ। यह जंगल सब कुछ याद रखता है।"
					},
					"emotion": "base",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭔가… 벗어날 수 없는 느낌이야.",
						"english": "It feels... inescapable.",
						"japanese": "なんだか…逃れられない感じだ。",
						"chinese": "总觉得……无法逃脱。",
						"french": "C'est... une sensation d'inéluctabilité.",
						"spanish": "Se siente... ineludible.",
						"vietnamese": "Cảm giác này... không thể thoát khỏi.",
						"thai": "รู้สึกเหมือน...หนีไม่พ้นเลย",
						"hindi": "यह एक ऐसी भावना है... जिससे बच पाना असंभव है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크하하하! 어리석은 것들.",
						"english": "Kuhahahaha! You fools.",
						"japanese": "クハハハハ！愚かな者たちめ。",
						"chinese": "哈哈哈！愚蠢的东西。",
						"french": "Kuhahaha ! Imbéciles.",
						"spanish": "¡Cajajaja! Tontos.",
						"vietnamese": "Khahahahaha! Lũ ngu xuẩn.",
						"thai": "คึ่กฮ่าฮ่าฮ่า! พวกเจ้าช่างโง่เขลา",
						"hindi": "कहाहाहा! मूर्खों।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희의 죄는 이곳에 영원히 갇힐 것이다!",
						"english": "Your sins shall be eternally imprisoned here!",
						"japanese": "お前たちの罪はここに永遠に囚われるだろう！",
						"chinese": "你们的罪孽将永远被困于此！",
						"french": "Vos péchés seront à jamais emprisonnés ici !",
						"spanish": "¡Vuestros pecados quedarán aquí atrapados para siempre!",
						"vietnamese": "Tội lỗi của các ngươi sẽ bị giam cầm vĩnh viễn tại đây!",
						"thai": "บาปของพวกเจ้าจะถูกจองจำที่นี่ชั่วนิรันดร์!",
						"hindi": "तुम्हारे पाप यहीं हमेशा के लिए कैद रहेंगे!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 우린… 포기하지 않아…!",
						"english": "No... We... won't give up...!",
						"japanese": "いや…私たちは…諦めない…！",
						"chinese": "不…我们…不会放弃…！",
						"french": "Non... Nous... n'abandonnerons pas... !",
						"spanish": "No... ¡Nosotros... no nos rendiremos...!",
						"vietnamese": "Không... Chúng ta... sẽ không bỏ cuộc...!",
						"thai": "ไม่... เรา... จะไม่ยอมแพ้...!",
						"hindi": "नहीं... हम... हार नहीं मानेंगे...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 느낌… 끝이 아니야.",
						"english": "This feeling... it's not over.",
						"japanese": "この感覚…終わりじゃない。",
						"chinese": "这种感觉……还没结束。",
						"french": "Cette sensation... ce n'est pas la fin.",
						"spanish": "Esta sensación... no es el final.",
						"vietnamese": "Cảm giác này... chưa phải kết thúc.",
						"thai": "ความรู้สึกนี้...มันยังไม่จบ",
						"hindi": "यह एहसास... यह अंत नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 존재가 숲의 중심을 지키고 있었다.",
						"english": "A colossal shadow blocked the path. An unknown entity guarded the heart of the forest.",
						"japanese": "巨大な影が道を塞いだ。正体不明の存在が森の中心を守っていた。",
						"chinese": "一道巨大的黑影挡住了去路。一个不明身份的存在守护着森林的中心。",
						"french": "Une ombre colossale barra le chemin. Une entité inconnue gardait le cœur de la forêt.",
						"spanish": "Una sombra colosal bloqueó el camino. Una entidad desconocida custodiaba el corazón del bosque.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một thực thể không rõ danh tính đang canh giữ trung tâm khu rừng.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ สิ่งมีชีวิตลึกลับตนหนึ่งเฝ้ากลางป่า",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया। एक अज्ञात सत्ता जंगल के केंद्र की रक्षा कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "(기괴한 웃음소리) 어리석은 인간들. 또다시 찾아왔군.",
						"english": "(Ghastly laugh) Foolish humans. You've come again.",
						"japanese": "(奇妙な笑い声) 愚かな人間ども。また現れたな。",
						"chinese": "(诡异的笑声) 愚蠢的人类。又来了。",
						"french": "(Rire sinistre) Stupides humains. Vous êtes revenus.",
						"spanish": "(Risa espeluznante) Estúpidos humanos. Han vuelto otra vez.",
						"vietnamese": "(Tiếng cười quái dị) Những kẻ phàm tục ngu ngốc. Lại đến rồi.",
						"thai": "(เสียงหัวเราะประหลาด) มนุษย์โง่เง่า มาอีกแล้วสินะ",
						"hindi": "(भयानक हँसी) मूर्ख इंसानो। तुम फिर आ गए।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신이… 이 숲의 주인이었나?",
						"english": "You... are the master of this forest?",
						"japanese": "あなたが…この森の主だったのか？",
						"chinese": "你……就是这片森林的主人吗？",
						"french": "Vous... seriez le maître de cette forêt ?",
						"spanish": "¿Tú... eres el dueño de este bosque?",
						"vietnamese": "Ngươi... là chủ nhân của khu rừng này?",
						"thai": "ท่าน...คือเจ้าของป่านี้หรือ?",
						"hindi": "तुम... इस जंगल के स्वामी हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 이 숲의 의지. 그리고 너희의 죄.",
						"english": "I am the will of this forest. And your sin.",
						"japanese": "私はこの森の意思。そしてお前たちの罪だ。",
						"chinese": "我就是这片森林的意志。以及你们的罪孽。",
						"french": "Je suis la volonté de cette forêt. Et votre péché.",
						"spanish": "Soy la voluntad de este bosque. Y vuestro pecado.",
						"vietnamese": "Ta là ý chí của khu rừng này. Và là tội lỗi của các ngươi.",
						"thai": "ข้าคือเจตจำนงของป่านี้ และบาปของพวกเจ้า",
						"hindi": "मैं इस जंगल की इच्छा हूँ। और तुम्हारा पाप।"
					}
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "(빙긋 웃으며) 자, 이제 대가를 치를 시간이야.",
						"english": "(Grins) Now, it's time to pay the price.",
						"japanese": "(にやりと笑い) さあ、代償を払う時間だ。",
						"chinese": "(咧嘴一笑) 好了，现在是时候付出代价了。",
						"french": "(Sourit d'un air narquois) Bien, il est temps de payer le prix.",
						"spanish": "(Sonríe maliciosamente) Bien, es hora de pagar el precio.",
						"vietnamese": "(Cười khẩy) Nào, đã đến lúc trả giá rồi.",
						"thai": "(ยิ้มมุมปาก) เอาล่ะ ได้เวลาชดใช้แล้ว",
						"hindi": "(मुस्कुराता है) चलो, अब कीमत चुकाने का समय आ गया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar",
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "브라이어! 너…!",
						"english": "Briar! You...!",
						"japanese": "ブライア！ お前…！",
						"chinese": "布莱尔！你……！",
						"french": "Briar ! Toi... !",
						"spanish": "¡Briar! ¡Tú...!",
						"vietnamese": "Briar! Ngươi...!",
						"thai": "ไบรอา! เธอ...!",
						"hindi": "ब्रायअर! तुम...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "소용없다. 너희의 탐욕이 이 숲을 만들었다.",
						"english": "It's useless. Your greed created this forest.",
						"japanese": "無駄だ。お前たちの貪欲さがこの森を創った。",
						"chinese": "没用的。是你们的贪婪创造了这片森林。",
						"french": "C'est inutile. Votre cupidité a créé cette forêt.",
						"spanish": "Es inútil. Vuestra codicia creó este bosque.",
						"vietnamese": "Vô ích thôi. Chính lòng tham của các ngươi đã tạo ra khu rừng này.",
						"thai": "เปล่าประโยชน์ ความโลภของพวกเจ้าต่างหากที่สร้างป่าแห่งนี้",
						"hindi": "व्यर्थ है। तुम्हारे लालच ने ही इस जंगल को बनाया है।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크흐… 겨우 이 정도로… 끝나지 않아…",
						"english": "Kuh... This isn't over... not just yet...",
						"japanese": "クフ…こんな程度では…終わらない…",
						"chinese": "咳…仅凭这些…还不会结束…",
						"french": "Kuh... Ce n'est pas fini... pas encore...",
						"spanish": "Kuh... Esto no ha terminado... no por ahora...",
						"vietnamese": "Khụ... Chỉ thế này thôi... chưa kết thúc đâu...",
						"thai": "คึ่ก... แค่นี้... ยังไม่จบหรอก...",
						"hindi": "कुह... यह इतना आसान नहीं है... अभी खत्म नहीं हुआ..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너희의 죄는… 순환할 뿐… 영원히…",
						"english": "Your sins... merely circulate... forever...",
						"japanese": "お前たちの罪は…ただ巡るだけ…永遠に…",
						"chinese": "你们的罪孽…只会循环…永无止境…",
						"french": "Vos péchés... ne feront que circuler... éternellement...",
						"spanish": "Vuestros pecados... solo circularán... para siempre...",
						"vietnamese": "Tội lỗi của các ngươi... sẽ chỉ luân hồi... vĩnh viễn...",
						"thai": "บาปของพวกเจ้า... เพียงแค่จะหมุนเวียน... ชั่วนิรันดร์...",
						"hindi": "तुम्हारे पाप... बस घूमते रहेंगे... हमेशा के लिए..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "숲은… 아직 끝나지 않았어.",
						"english": "The forest... is not over yet.",
						"japanese": "森は…まだ終わっていない。",
						"chinese": "森林…还未结束。",
						"french": "La forêt... n'est pas encore finie.",
						"spanish": "El bosque... aún no ha terminado.",
						"vietnamese": "Khu rừng... vẫn chưa kết thúc.",
						"thai": "ป่า... ยังไม่จบลงหรอก",
						"hindi": "जंगल... अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 숲의 진실은… 대체 뭘까.",
						"english": "What exactly... is the truth of this forest?",
						"japanese": "この森の真実とは…一体何なのだろうか。",
						"chinese": "这片森林的真相…究竟是什么？",
						"french": "Quelle est donc... la vérité de cette forêt ?",
						"spanish": "¿Cuál será... la verdad de este bosque?",
						"vietnamese": "Sự thật của khu rừng này... rốt cuộc là gì?",
						"thai": "ความจริงของป่าแห่งนี้... คืออะไรกันแน่",
						"hindi": "इस जंगल का सच... आखिर क्या है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 존재는 사라졌지만, 숲의 깊은 곳에서는 여전히 알 수 없는 불안이 감돌았다.",
						"english": "The massive entity vanished, yet an unknown unease still lingered deep within the forest.",
						"japanese": "巨大な存在は消え去ったが、森の奥深くには依然として未知の不安が漂っていた。",
						"chinese": "巨大的存在消失了，但森林深处依然弥漫着一股说不清道不明的不安。",
						"french": "L'entité colossale avait disparu, mais une inquiétude inconnue planait toujours au plus profond de la forêt.",
						"spanish": "La enorme entidad desapareció, pero una inquietud desconocida seguía flotando en lo profundo del bosque.",
						"vietnamese": "Thực thể khổng lồ đã biến mất, nhưng sâu thẳm trong rừng vẫn còn vương vấn một sự bất an khó tả.",
						"thai": "สิ่งมีชีวิตขนาดยักษ์ได้หายไปแล้ว แต่ความไม่สบายใจที่อธิบายไม่ได้ยังคงอยู่ในส่วนลึกของป่า",
						"hindi": "विशालकाय सत्ता गायब हो गई थी, फिर भी जंगल के गहरे में एक अज्ञात बेचैनी छाई हुई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이 낙원은, 오히려 더 깊은 미궁으로 이끄는 위선적인 초대일지도 모른다.",
						"english": "This paradise might, in fact, be a deceptive invitation leading to an even deeper labyrinth.",
						"japanese": "この楽園は、むしろより深い迷宮へと誘う偽善的な招待なのかもしれない。",
						"chinese": "这个乐园，或许是一个虚伪的邀请，引领我们走向更深的迷宫。",
						"french": "Ce paradis pourrait bien être, au contraire, une invitation hypocrite menant à un labyrinthe encore plus profond.",
						"spanish": "Este paraíso, de hecho, podría ser una invitación engañosa que lleva a un laberinto aún más profundo.",
						"vietnamese": "Thiên đường này, có lẽ lại là một lời mời giả dối dẫn đến một mê cung sâu thẳm hơn.",
						"thai": "สวรรค์แห่งนี้ แท้จริงแล้วอาจเป็นคำเชิญที่หลอกลวง นำไปสู่เขาวงกตที่ลึกกว่าเดิม",
						"hindi": "यह स्वर्ग, वास्तव में, एक भ्रामक निमंत्रण हो सकता है जो एक और गहरे भूलभुलैया की ओर ले जाता है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 길 잃은 자들의 낙원이라 불렸다.",
			"아름다운 풍경, 속삭이는 위선.",
			"모든 죄를 씻어준다는 달콤한 거짓말.",
			"그러나 완벽함 뒤엔 늘 잔인한 진실이 숨어있다.",
			"이곳은 과연 구원일까, 또 다른 덫일까."
		],
		"english": [
			"The forest was called a paradise for the lost.",
			"Beautiful scenery, whispering hypocrisy.",
			"The sweet lie that washes away all sins.",
			"But behind perfection, a cruel truth always hides.",
			"Is this truly salvation, or just another trap?"
		],
		"japanese": [
			"숲は迷いし者たちの楽園と呼ばれた。",
			"美しい景色、囁く偽善。",
			"全ての罪を洗い流すという甘い嘘。",
			"しかし、完璧さの裏には常に残酷な真実が隠されている。",
			"ここは果たして救いなのか、それとも別の罠なのか。"
		],
		"chinese": [
			"森林被称为迷失者的乐园。",
			"美丽的风景，低语的伪善。",
			"洗净所有罪孽的甜蜜谎言。",
			"然而，在完美背后，总隐藏着残酷的真相。",
			"这里究竟是救赎，还是另一个陷阱？"
		],
		"french": [
			"La forêt était appelée le paradis des âmes perdues.",
			"Des paysages magnifiques, une hypocrisie chuchotante.",
			"Le doux mensonge qui lave tous les péchés.",
			"Mais derrière la perfection se cache toujours une vérité cruelle.",
			"Est-ce vraiment le salut, ou un autre piège ?"
		],
		"spanish": [
			"El bosque era llamado el paraíso de los perdidos.",
			"Hermosos paisajes, hipocresía susurrante.",
			"La dulce mentira que lava todos los pecados.",
			"Pero tras la perfección, siempre se esconde una verdad cruel.",
			"¿Es esto realmente la salvación, o solo otra trampa?"
		],
		"vietnamese": [
			"Rừng được gọi là thiên đường của những kẻ lạc lối.",
			"Phong cảnh tươi đẹp, sự giả dối thì thầm.",
			"Lời nói dối ngọt ngào rằng mọi tội lỗi sẽ được rửa sạch.",
			"Tuy nhiên, đằng sau sự hoàn hảo luôn ẩn chứa một sự thật tàn khốc.",
			"Đây rốt cuộc là sự cứu rỗi, hay một cái bẫy khác?"
		],
		"thai": [
			"ป่าถูกขนานนามว่าเป็นสวรรค์ของผู้หลงทาง",
			"ทิวทัศน์ที่สวยงาม คำลวงที่กระซิบ",
			"คำโกหกอันหอมหวานที่ว่าจะชำระบาปทั้งหมด",
			"แต่เบื้องหลังความสมบูรณ์แบบ มักซ่อนความจริงที่โหดร้าย",
			"ที่นี่คือความรอด หรือกับดักอีกอย่างกันแน่"
		],
		"hindi": [
			"वन को भटके हुए लोगों का स्वर्ग कहा जाता था।",
			"सुंदर दृश्य, फुसफुसाता पाखंड।",
			"सभी पापों को धो देने वाला मीठा झूठ।",
			"किंतु पूर्णता के पीछे, सदैव एक क्रूर सत्य छिपा होता है।",
			"क्या यह वास्तव में मोक्ष है, या कोई और जाल?"
		]
	}
} as const;
