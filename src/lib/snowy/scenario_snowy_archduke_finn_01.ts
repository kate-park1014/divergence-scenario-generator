export const scenario_snowy_archduke_finn_01 = {
	"scenario_id": "snowy_archduke_finn_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"Ice": {
			"id": "actor_09",
			"name": {
				"korean": "얼음",
				"english": "Ice",
				"japanese": "氷",
				"chinese": "冰",
				"french": "Glace",
				"spanish": "Hielo",
				"vietnamese": "Băng",
				"thai": "น้ำแข็ง",
				"hindi": "बर्फ़"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9fb8bdd-bb4b-4523-1746-3bb17c64f400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ce85e9f-fc14-452c-0806-69e2ba12e600/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 눈이 내리는 설산.",
			"이 산을 지배하는 \"대공\"의 소문이 파다했다.",
			"탐험대는 그 정체를 파헤치기 위해 올라섰다.",
			"하지만 어딘가… 어설픈 위압감이 맴돌았다.",
			"작은 발자국들이 그들을 이끌었다."
		],
		"english": [
			"Endless snow on the peaks.",
			"Rumors of the 'Archduke' who ruled these mountains spread far and wide.",
			"The expedition ascended to uncover his identity.",
			"Yet, an awkward sense of intimidation lingered.",
			"Small footprints led them onward."
		],
		"japanese": [
			"果てしなく雪が降る雪山。",
			"この山を支配する「大公」の噂が広まっていた。",
			"探検隊はその正体を突き止めるべく登った。",
			"しかし、どこか…不器用な威圧感が漂っていた。",
			"小さな足跡が彼らを導いた。"
		],
		"chinese": [
			"白雪皑皑的山峰。",
			"关于统治这座山的“大公”的传闻甚嚣尘上。",
			"探险队启程，只为揭开其真面目。",
			"然而，一种笨拙的压迫感却弥漫不散。",
			"小小的脚印指引着他们。"
		],
		"french": [
			"La montagne enneigée, sous une neige éternelle.",
			"Les rumeurs du « Grand-Duc » régnant sur ces montagnes circulaient.",
			"L'expédition a gravi la montagne pour découvrir son identité.",
			"Pourtant, une étrange sensation d'intimidation planait.",
			"De petites empreintes de pas les guidaient."
		],
		"spanish": [
			"Picos nevados bajo nieve incesante.",
			"Corría el rumor del 'Archiduque' que dominaba estas montañas.",
			"La expedición ascendió para desvelar su identidad.",
			"Sin embargo, una torpe sensación de intimidación flotaba en el aire.",
			"Pequeñas huellas los guiaron."
		],
		"vietnamese": [
			"Núi tuyết tuyết rơi không ngớt.",
			"Lời đồn về 'Đại Công Tước' cai trị ngọn núi này lan rộng.",
			"Đoàn thám hiểm leo lên để khám phá thân phận đó.",
			"Thế nhưng, một cảm giác uy hiếp vụng về đâu đó vẫn bao trùm.",
			"Những dấu chân nhỏ dẫn lối họ."
		],
		"thai": [
			"ภูเขาหิมะที่หิมะตกไม่หยุดยั้ง",
			"ข่าวลือเรื่อง 'แกรนด์ดุ๊ก' ผู้ปกครองภูเขาแห่งนี้แพร่สะพัด",
			"คณะสำรวจขึ้นไปเพื่อเปิดเผยตัวตนของเขา",
			"ทว่า… ความรู้สึกกดดันที่ดูงุ่มง่ามกลับอบอวลอยู่",
			"รอยเท้าเล็ก ๆ นำทางพวกเขาไป"
		],
		"hindi": [
			"बर्फीले पहाड़ों पर अंतहीन बर्फ़बारी।",
			"इन पहाड़ों पर राज करने वाले 'आर्चड्यूक' की अफवाहें दूर-दूर तक फैली हुई थीं।",
			"अभियान दल उसकी पहचान उजागर करने के लिए ऊपर चढ़ा।",
			"फिर भी, एक अजीब सी दबंगई छाई हुई थी।",
			"छोटे-छोटे पदचिह्न उन्हें आगे ले गए।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "설산의 초입, 매서운 바람이 탐험대를 맞이한다. 거대한 현수막이 펄럭인다.",
						"english": "At the entrance to the snow mountain, a fierce wind greets the expedition. A gigantic banner flutters.",
						"japanese": "雪山の入り口、厳しい風が探検隊を迎える。巨大な垂れ幕がはためく。",
						"chinese": "雪山入口，凛冽寒风迎接着探险队。一面巨幅横幅随风飘扬。",
						"french": "À l'entrée de la montagne enneigée, un vent glacial accueille l'expédition. Une bannière géante flotte.",
						"spanish": "A la entrada de la montaña nevada, un viento feroz recibe a la expedición. Una gigantesca pancarta ondea.",
						"vietnamese": "Tại lối vào núi tuyết, gió dữ đón chào đoàn thám hiểm. Một biểu ngữ khổng lồ tung bay.",
						"thai": "ทางเข้าภูเขาหิมะ ลมพัดแรงต้อนรับคณะสำรวจ แบนเนอร์ขนาดมหึมากำลังปลิวไสว",
						"hindi": "बर्फीले पहाड़ के प्रवेश द्वार पर, एक तेज़ हवा अभियान दल का स्वागत करती है। एक विशाल बैनर लहरा रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "\"대공 만세\"… 글씨가 왜 이래?",
						"english": "'Long live the Archduke'... What's wrong with this handwriting?",
						"japanese": "「大公万歳」…字がどうしてこうなんだ？",
						"chinese": "“大公万岁”……这字迹怎么回事？",
						"french": "« Vive le Grand-Duc »... Pourquoi cette écriture est-elle si étrange ?",
						"spanish": "'¡Viva el Archiduque!'... ¿Por qué esta letra es así?",
						"vietnamese": "'Đại Công Tước muôn năm'... Chữ viết kiểu gì thế này?",
						"thai": "'ขอองค์แกรนด์ดุ๊กทรงพระเจริญ'... ทำไมตัวหนังสือถึงเป็นแบบนี้?",
						"hindi": "'आर्चड्यूक अमर रहें'... यह लिखावट ऐसी क्यों है?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "누가 쓴 손글씨 같아.",
						"english": "Looks like someone's handwriting.",
						"japanese": "誰かの手書きみたいだ。",
						"chinese": "像是某人的手写体。",
						"french": "On dirait une écriture manuscrite.",
						"spanish": "Parece caligrafía de alguien.",
						"vietnamese": "Trông như chữ viết tay của ai đó.",
						"thai": "ดูเหมือนลายมือใครสักคน",
						"hindi": "किसी की लिखावट जैसी लगती है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "Ice",
					"duration_ms": 500
				},
				{
					"speaker": "Ice",
					"emotion": "base",
					"content": {
						"korean": "당신들이 소문의 탐험대인가요?",
						"english": "Are you the rumored expedition?",
						"japanese": "あなた方が噂の探検隊ですか？",
						"chinese": "你们就是传闻中的探险队吗？",
						"french": "Êtes-vous l'expédition dont on parle ?",
						"spanish": "¿Son ustedes la expedición de la que se rumorea?",
						"vietnamese": "Các ngươi là đoàn thám hiểm trong lời đồn sao?",
						"thai": "พวกคุณคือคณะสำรวจตามข่าวลือหรือเปล่า?",
						"hindi": "क्या आप वही अफवाह वाली अभियान दल हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래. 이 산의 대공을 만나러 왔다.",
						"english": "Yes. We've come to meet the Archduke of this mountain.",
						"japanese": "そうだ。この山の大公に会いに来た。",
						"chinese": "没错。我们是来见这座山的大公的。",
						"french": "Oui. Nous sommes venus rencontrer le Grand-Duc de cette montagne.",
						"spanish": "Sí. Hemos venido a conocer al Archiduque de esta montaña.",
						"vietnamese": "Đúng vậy. Chúng ta đến để gặp Đại Công Tước của ngọn núi này.",
						"thai": "ใช่ เรามาเพื่อพบแกรนด์ดุ๊กแห่งภูเขานี้",
						"hindi": "हाँ। हम इस पहाड़ के आर्चड्यूक से मिलने आए हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 산의 주인은, 좀 특이해요. 얼음 옥좌 위에 담요랑 핫팩 포장지를 봤거든요.",
						"english": "...The owner of this mountain is... a bit odd. I saw blankets and hot pack wrappers on the ice throne.",
						"japanese": "「…この山の主は、ちょっと変わってるわ。氷の玉座の上に毛布とカイロの包み紙を見たのよ。」",
						"chinese": "“……这座山的主人，有点奇怪。我在冰王座上看到了毯子和暖宝宝包装纸。”",
						"french": "...Le maître de cette montagne est... un peu étrange. J'ai vu des couvertures et des emballages de chaufferettes sur le trône de glace.",
						"spanish": "...El dueño de esta montaña es... un poco peculiar. Vi mantas y envoltorios de compresas calientes en el trono de hielo.",
						"vietnamese": "...Chủ nhân của ngọn núi này hơi... lạ. Tôi thấy chăn và vỏ gói miếng dán giữ nhiệt trên ngai vàng băng.",
						"thai": "...เจ้าของภูเขานี้... แปลกๆ หน่อยน่ะ ฉันเห็นผ้าห่มกับซองฮอตแพ็คบนบัลลังก์น้ำแข็งด้วยล่ะ",
						"hindi": "...इस पहाड़ का मालिक... थोड़ा अजीब है। मैंने बर्फ के सिंहासन पर कंबल और हॉट पैक के रैपर देखे।"
					},
					"speaker": "Ice",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…핫팩? 대공이 핫팩을?",
						"english": "...Hot packs? The Grand Duke uses hot packs?",
						"japanese": "「…カイロ？大公がカイロを？」",
						"chinese": "“……暖宝宝？大公用暖宝宝？”",
						"french": "...Des chaufferettes ? Le Grand-Duc utilise des chaufferettes ?",
						"spanish": "...¿Compresas calientes? ¿El Gran Duque usa compresas calientes?",
						"vietnamese": "...Miếng dán giữ nhiệt? Đại Công dùng miếng dán giữ nhiệt ư?",
						"thai": "...ฮอตแพ็ค? แกรนด์ดยุกใช้ฮอตแพ็คเหรอ?",
						"hindi": "...हॉट पैक? ग्रैंड ड्यूक हॉट पैक?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "Ice",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "대공은 매일 \"얼음 처형\"을 한다고 소리 질러요.",
						"english": "The Grand Duke shouts about performing \"Ice Executions\" every day.",
						"japanese": "「大公は毎日、『氷の処刑』をすると叫んでるわ。」",
						"chinese": "“大公每天都大喊着要进行“冰之处决”。”",
						"french": "Le Grand-Duc crie chaque jour qu'il va procéder à des \"Exécutions de Glace\".",
						"spanish": "El Gran Duque grita todos los días que va a hacer \"Ejecuciones de Hielo\".",
						"vietnamese": "Đại Công ngày nào cũng la hét về việc thực hiện \"Tử hình Băng\".",
						"thai": "แกรนด์ดยุกตะโกนเรื่อง \"การประหารด้วยน้ำแข็ง\" ทุกวันเลย",
						"hindi": "ग्रैंड ड्यूक हर दिन \"बर्फ़ीले निष्पादन\" करने के बारे में चिल्लाता है।"
					},
					"speaker": "Ice",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무섭군.",
						"english": "Terrifying.",
						"japanese": "「恐ろしいな。」",
						"chinese": "“真可怕。”",
						"french": "Effrayant.",
						"spanish": "Aterrador.",
						"vietnamese": "Đáng sợ thật.",
						"thai": "น่ากลัวจัง.",
						"hindi": "भयानक।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "Ice",
					"emotion": "sad",
					"content": {
						"korean": "…근데 항상 발이 시리대요.",
						"english": "...But he always complains his feet are cold.",
						"japanese": "「…でも、いつも足が冷たいって言ってるの。」",
						"chinese": "“……但他总是说他脚冷。”",
						"french": "...Mais il se plaint toujours d'avoir froid aux pieds.",
						"spanish": "...Pero siempre se queja de que tiene los pies fríos.",
						"vietnamese": "...Nhưng anh ấy luôn kêu lạnh chân.",
						"thai": "...แต่เขากลับบ่นว่าเท้าเย็นตลอดเลยนั่นแหละ.",
						"hindi": "...लेकिन वह हमेशा कहता है कि उसके पैर ठंडे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…진짜 왕 맞아? 얼음 처형이라며.",
						"english": "...Is he really a king? He talks about ice executions.",
						"japanese": "「…本当に王様なの？氷の処刑とか言ってるのに。」",
						"chinese": "“……他真是国王吗？还说要进行冰之处决呢。”",
						"french": "...C'est vraiment un roi ? Il parle d'exécutions de glace...",
						"spanish": "¿Es realmente un rey? Y eso que habla de ejecuciones de hielo.",
						"vietnamese": "...Thật sự là vua sao? Lại còn nói về tử hình băng cơ mà.",
						"thai": "...นี่มันราชาจริงเหรอ? ไหนบอกจะประหารด้วยน้ำแข็งไง.",
						"hindi": "...क्या वह सचमुच राजा है? वह बर्फ़ीले निष्पादन की बात करता है।"
					},
					"speaker": "character_3",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "Ice"
				},
				{
					"type": "speech",
					"speaker": "Ice",
					"emotion": "base",
					"content": {
						"korean": "대공의 신하들이 매일 \"대공님은 무자비하다!\"고 외치죠.",
						"english": "The Grand Duke's vassals shout, \"His Grace is ruthless!\" every day.",
						"japanese": "「大公の家臣たちは毎日、『大公様は無慈悲だ！』って叫んでるわ。」",
						"chinese": "“大公的臣子们每天都喊着：“大公陛下是无情的！””",
						"french": "Les vassaux du Grand-Duc crient chaque jour : « Son Altesse est impitoyable ! »",
						"spanish": "Los vasallos del Gran Duque gritan todos los días: \"¡Su Gracia es despiadado!\"",
						"vietnamese": "Các thuộc hạ của Đại Công ngày nào cũng hô hào: \"Đại Công thật tàn nhẫn!\"",
						"thai": "ข้ารับใช้ของแกรนด์ดยุกตะโกนทุกวันว่า \"แกรนด์ดยุกโหดเหี้ยม!\" ",
						"hindi": "ग्रैंड ड्यूक के जागीरदार हर दिन चिल्लाते हैं, \"महाराज निर्दयी हैं!\""
					}
				},
				{
					"content": {
						"korean": "그래?",
						"english": "Really?",
						"japanese": "「そうなの？」",
						"chinese": "“是吗？”",
						"french": "Vraiment ?",
						"spanish": "¿En serio?",
						"vietnamese": "Thật sao?",
						"thai": "งั้นเหรอ?",
						"hindi": "सच में?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Ice",
					"emotion": "sad",
					"content": {
						"korean": "…항상 카드보드 팻말에 적어서요.",
						"english": "...But they always write it on cardboard signs.",
						"japanese": "「…でも、いつも段ボールのプラカードに書いてるのよ。」",
						"chinese": "“……但他们总是写在纸板牌子上。”",
						"french": "...Mais ils l'écrivent toujours sur des pancartes en carton.",
						"spanish": "...Pero siempre lo escriben en carteles de cartón.",
						"vietnamese": "...Nhưng họ luôn viết trên biển hiệu bằng bìa cứng.",
						"thai": "...แต่พวกเขาเขียนบนป้ายกระดาษแข็งตลอดเลยนั่นแหละ.",
						"hindi": "...लेकिन वे हमेशा कार्डबोर्ड के संकेतों पर लिखते हैं।"
					}
				},
				{
					"content": {
						"korean": "팻말에… 손글씨로?",
						"english": "On signs... handwritten?",
						"japanese": "「プラカードに…手書きで？」",
						"chinese": "“牌子上……手写的？”",
						"french": "Sur des pancartes... écrites à la main ?",
						"spanish": "¿En carteles... con letra a mano?",
						"vietnamese": "Trên biển hiệu... viết tay ư?",
						"thai": "บนป้าย... เขียนด้วยมือเนี่ยนะ?",
						"hindi": "संकेतों पर... हाथ से लिखा हुआ?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "Ice",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제 그만 돌아갈 때예요. 이 위로는 더 이상…",
						"english": "It's time to turn back. There's nothing more beyond here...",
						"japanese": "もう引き返す時です。これ以上先には…",
						"chinese": "是时候回去了。这里再往上就没有了…",
						"french": "Il est temps de rebrousser chemin. Il n'y a plus rien au-delà...",
						"spanish": "Es hora de volver. No hay nada más allá de aquí...",
						"vietnamese": "Đã đến lúc quay lại. Không còn gì nữa ở phía trên...",
						"thai": "ได้เวลากลับแล้ว เหนือขึ้นไปนี้ไม่มีอะไรอีกแล้ว...",
						"hindi": "अब वापस जाने का समय है। इस से आगे और कुछ नहीं है..."
					},
					"speaker": "Ice",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "Can't stop now.",
						"japanese": "止められない。",
						"chinese": "无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Không thể dừng lại.",
						"thai": "หยุดไม่ได้",
						"hindi": "रुक नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭘 보게 될지는 모르겠지만…",
						"english": "I don't know what I'll see, but...",
						"japanese": "何が見えるかは分からないけど…",
						"chinese": "我不知道会看到什么，但是…",
						"french": "Je ne sais pas ce que je vais voir, mais...",
						"spanish": "No sé qué veré, pero...",
						"vietnamese": "Tôi không biết mình sẽ thấy gì, nhưng...",
						"thai": "ไม่รู้ว่าจะเจออะไร แต่ว่า...",
						"hindi": "मुझे नहीं पता कि मैं क्या देखूँगा, लेकिन..."
					},
					"speaker": "character_4",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…궁금해 죽겠어!",
						"english": "...I'm dying of curiosity!",
						"japanese": "…気になって仕方ない！",
						"chinese": "…好奇死了！",
						"french": "...je meurs d'envie de savoir !",
						"spanish": "...¡muero de curiosidad!",
						"vietnamese": "...tôi tò mò muốn chết!",
						"thai": "...อยากรู้จะแย่แล้ว!",
						"hindi": "...मेरी उत्सुकता मुझे मार रही है!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 거대한 얼음 궁전. 중앙에는 얼음 옥좌가 놓여 있었다.",
						"english": "Finally, the grand ice palace. An ice throne stood in its center.",
						"japanese": "ついに、巨大な氷の宮殿。中央には氷の玉座が置かれていた。",
						"chinese": "终于，巨大的冰宫。中央摆放着冰之王座。",
						"french": "Enfin, le grand palais de glace. Un trône de glace se dressait en son centre.",
						"spanish": "Finalmente, el gran palacio de hielo. Un trono de hielo se alzaba en su centro.",
						"vietnamese": "Cuối cùng, cung điện băng đồ sộ. Một ngai vàng băng đặt giữa trung tâm.",
						"thai": "ในที่สุดก็มาถึง ปราสาทน้ำแข็งขนาดมหึมา บัลลังก์น้ำแข็งตั้งอยู่ตรงกลาง",
						"hindi": "अंततः, विशाल बर्फ का महल। उसके केंद्र में एक बर्फ का सिंहासन रखा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 여기까지 기어 올라오다니! 내가 바로 이 설산의 주인, {random_boss}다!",
						"english": "How dare you... crawl all the way up here! I am the master of this snow mountain, {random_boss}!",
						"japanese": "よくも…ここまで這い上がってきたな！この雪山の主、{random_boss}は私だ！",
						"chinese": "胆敢…爬到这里来！我就是这座雪山的主人，{random_boss}！",
						"french": "Comment oses-tu... ramper jusqu'ici ! Je suis le maître de cette montagne enneigée, {random_boss} !",
						"spanish": "¡Cómo te atreves... a arrastrarte hasta aquí! ¡Soy el dueño de esta montaña nevada, {random_boss}!",
						"vietnamese": "Sao ngươi dám... bò lên tận đây! Ta chính là chủ nhân của ngọn núi tuyết này, {random_boss}!",
						"thai": "บังอาจ... คลานขึ้นมาถึงที่นี่ได้ไง! ข้าคือเจ้าแห่งภูเขาหิมะนี้, {random_boss}!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... यहाँ तक रेंग कर आने की! मैं ही इस बर्फीले पहाड़ का मालिक हूँ, {random_boss}!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}! 네가 대공이로구나!",
						"english": "{random_boss}! So you are the Archduke!",
						"japanese": "{random_boss}！貴様が大公か！",
						"chinese": "{random_boss}！你就是大公啊！",
						"french": "{random_boss} ! C'est toi l'Archiduc !",
						"spanish": "¡{random_boss}! ¡Así que tú eres el Archiduque!",
						"vietnamese": "{random_boss}! Ngươi chính là Đại Công tước!",
						"thai": "{random_boss}! เจ้าคือจอมทัพนี่เอง!",
						"hindi": "{random_boss}! तो तुम ही आर्कड्यूक हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들! 이 몸의 위엄에 무릎 꿇어라!",
						"english": "Insolent wretches! Kneel before my majesty!",
						"japanese": "下劣な者たちめ！この身の威厳にひざまずけ！",
						"chinese": "卑微的东西！跪伏在这位的威严之下！",
						"french": "Misérables créatures ! Agenouillez-vous devant ma majesté !",
						"spanish": "¡Insolentes! ¡Arrodíllense ante mi majestad!",
						"vietnamese": "Những kẻ hèn mọn! Hãy quỳ gối trước sự uy nghiêm của ta!",
						"thai": "พวกไร้ค่า! จงคุกเข่าต่อหน้าความยิ่งใหญ่ของข้า!",
						"hindi": "तुच्छ प्राणी! मेरी महिमा के सामने घुटने टेको!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "웃기고 있네.",
						"english": "You've got to be kidding.",
						"japanese": "ふざけてるのか。",
						"chinese": "真可笑。",
						"french": "Tu te moques de moi.",
						"spanish": "Estás bromeando.",
						"vietnamese": "Thật nực cười.",
						"thai": "ตลกสิ้นดี",
						"hindi": "मज़ाक कर रहे हो।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "쿨럭… 말도 안 돼… 이 {random_boss}가…",
						"english": "Cough... Impossible... I, {random_boss}...",
						"japanese": "ゴホッ… まさか… この{random_boss}が…",
						"chinese": "咳… 不可能… 我，{random_boss}竟然…",
						"french": "Tousse... Impossible... Moi, {random_boss}...",
						"spanish": "Tos... Imposible... Yo, {random_boss}...",
						"vietnamese": "Khụ... Không thể nào... Ta, {random_boss}...",
						"thai": "แค่ก... ไม่จริงน่า... ข้า, {random_boss}...",
						"hindi": "खाँसी... असंभव... मैं, {random_boss}..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝이다.",
						"english": "It's over.",
						"japanese": "終わりだ。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Hết rồi.",
						"thai": "จบแล้ว",
						"hindi": "यह खत्म हो गया है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 나는… (중얼거림)",
						"english": "But... I... (muttering)",
						"japanese": "しかし… 私は… (つぶやき)",
						"chinese": "但是……我…… (喃喃自语)",
						"french": "Mais... je... (murmure)",
						"spanish": "Pero... yo... (murmurando)",
						"vietnamese": "Nhưng... tôi... (lầm bầm)",
						"thai": "แต่... ฉัน... (พึมพำ)",
						"hindi": "लेकिन... मैं... (बुदबुदाते हुए)"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "대공의 얼음 옥좌는 예상보다 훨씬 따뜻했다.",
						"english": "The Archduke's ice throne was much warmer than expected.",
						"japanese": "大公の氷の玉座は、予想よりもずっと暖かかった。",
						"chinese": "大公的冰之王座比预想的要温暖得多。",
						"french": "Le trône de glace de l'Archiduc était bien plus chaud que prévu.",
						"spanish": "El trono de hielo del Gran Duque era mucho más cálido de lo esperado.",
						"vietnamese": "Ngai vàng băng của Đại Công tước ấm hơn nhiều so với dự kiến.",
						"thai": "บัลลังก์น้ำแข็งของอาร์คดยุกอบอุ่นกว่าที่คาดไว้มาก",
						"hindi": "आर्कड्यूक का बर्फ का सिंहासन उम्मीद से कहीं ज्यादा गर्म था।"
					}
				},
				{
					"content": {
						"korean": "엉성한 왕관이 바닥에 떨어져 굴렀다.",
						"english": "The crude crown fell to the floor and rolled away.",
						"japanese": "粗末な王冠が床に落ちて転がった。",
						"chinese": "简陋的王冠掉到地上，滚开了。",
						"french": "La couronne grossière tomba au sol et roula.",
						"spanish": "La tosca corona cayó al suelo y rodó.",
						"vietnamese": "Chiếc vương miện thô sơ rơi xuống sàn và lăn đi.",
						"thai": "มงกุฎที่หยาบกร้านตกลงบนพื้นและกลิ้งไป",
						"hindi": "भद्दा मुकुट फर्श पर गिरा और लुढ़क गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "건방진 것들! 이 {random_boss}를 이길 순 없다!",
						"english": "Arrogant fools! You cannot defeat this {random_boss}!",
						"japanese": "傲慢な奴らめ！この{random_boss}には勝てぬぞ！",
						"chinese": "狂妄的家伙们！你们赢不了这个{random_boss}！",
						"french": "Imprudents ! Vous ne pouvez pas vaincre ce {random_boss} !",
						"spanish": "¡Insolentes! ¡No podéis vencer a este {random_boss}!",
						"vietnamese": "Lũ ngạo mạn! Ngươi không thể đánh bại {random_boss} này đâu!",
						"thai": "พวกอวดดี! เจ้าไม่มีทางชนะ{random_boss}นี้ได้!",
						"hindi": "घमंडी प्राणियों! तुम इस {random_boss} को हरा नहीं सकते!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc đâu!",
						"thai": "ยัง...ไม่จบหรอก!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와봐라. 그때도… 똑같을 거다!",
						"english": "Come back again. It'll be... the same then!",
						"japanese": "また来い。その時も…同じことだ！",
						"chinese": "再来吧。那时也……会是一样！",
						"french": "Revenez. Ce sera... la même chose alors !",
						"spanish": "Vuelve a intentarlo. ¡Entonces... será lo mismo!",
						"vietnamese": "Ngươi cứ quay lại đi. Khi đó... cũng sẽ như vậy thôi!",
						"thai": "กลับมาอีกสิ ครั้งนั้น...ก็จะเหมือนเดิม!",
						"hindi": "फिर से आओ। तब भी... वही होगा!"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
