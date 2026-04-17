export const scenario_snowy_archduke_finn_03 = {
	"scenario_id": "snowy_archduke_finn_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Roundy": {
			"id": "actor_08",
			"name": {
				"korean": "라운디",
				"english": "Roundy",
				"japanese": "ラウンディ",
				"chinese": "朗迪",
				"french": "Roundy",
				"spanish": "Roundy",
				"vietnamese": "Roundy",
				"thai": "รา운ดี้",
				"hindi": "राउंडी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c99a7b0-5bc4-45d0-11bb-15dd86ae0700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1e7e23a7-5db4-4897-997c-e8920c4f4e00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 궁전이 눈앞에 나타났다. 여기가 설산 대공의 옥좌인가.",
						"english": "A colossal ice palace appeared before our eyes. Is this the Snow Mountain Grand Duke's throne?",
						"japanese": "巨大な氷の宮殿が目の前に現れた。ここが雪山大公の玉座なのか。",
						"chinese": "一座巨大的冰宫殿出现在眼前。这里就是雪山大公的宝座吗？",
						"french": "Un palais de glace colossal apparut sous nos yeux. Est-ce le trône du Grand Duc des Montagnes Enneigées ?",
						"spanish": "Un colosal palacio de hielo apareció ante nuestros ojos. ¿Es este el trono del Gran Duque de la Montaña Nevada?",
						"vietnamese": "Một cung điện băng khổng lồ hiện ra trước mắt. Đây có phải là ngai vàng của Đại Công tước Núi Tuyết không?",
						"thai": "ปราสาทน้ำแข็งขนาดมหึมาปรากฏขึ้นตรงหน้า นี่คือบัลลังก์ของแกรนด์ดยุกแห่งภูเขาหิมะหรือ?",
						"hindi": "एक विशाल बर्फीला महल हमारी आँखों के सामने आ गया। क्या यह हिमपर्वत ग्रैंड ड्यूक का सिंहासन है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "소문으로만 듣던 대공의 성이군.",
						"english": "So this is the Grand Duke's castle, only heard of in rumors.",
						"japanese": "噂にしか聞いていなかった大公の城か。",
						"chinese": "这就是只在传闻中听过的大公的城堡啊。",
						"french": "C'est donc le château du Grand Duc, dont on n'entendait parler que par des rumeurs.",
						"spanish": "Así que este es el castillo del Gran Duque, del que solo se oía hablar en rumores.",
						"vietnamese": "Đây là lâu đài của Đại Công tước mà chỉ nghe đồn.",
						"thai": "นี่คือปราสาทของแกรนด์ดยุกที่ได้ยินแต่ข่าวลือสินะ",
						"hindi": "तो यह ग्रैंड ड्यूक का महल है, जिसके बारे में केवल अफवाहें सुनी थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Roundy",
					"spot": [
						4,
						1
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "대공께서는… 무자비하시지. 감히 도전하는 자는 얼음 처형이라고.",
						"english": "The Grand Duke... is ruthless. Those who dare challenge him face ice execution.",
						"japanese": "大公様は…無慈悲だ。あえて挑む者は氷の処刑に処されると。",
						"chinese": "大公殿下…很无情。敢于挑战他的人都会被冰刑处决。",
						"french": "Le Grand Duc... est impitoyable. Ceux qui osent le défier subissent l'exécution par la glace.",
						"spanish": "El Gran Duque... es despiadado. Aquellos que osen desafiarlo enfrentan la ejecución de hielo.",
						"vietnamese": "Đại Công tước… thật vô nhân đạo. Kẻ nào dám thách thức sẽ bị hành quyết bằng băng.",
						"thai": "แกรนด์ดยุก... ทรงโหดเหี้ยมมาก ใครที่กล้าท้าทายจะถูกประหารด้วยน้ำแข็ง",
						"hindi": "ग्रैंड ड्यूक… निर्दयी हैं। जो कोई चुनौती देने की हिम्मत करता है, उसे बर्फीली मौत मिलती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "근데 왜 이렇게… 초라해?",
						"english": "But why is it... so shabby?",
						"japanese": "でも、なんでこんなに…みすぼらしいんだ？",
						"chinese": "但是为什么…这么寒酸？",
						"french": "Mais pourquoi est-ce... si minable ?",
						"spanish": "Pero, ¿por qué es tan... lamentable?",
						"vietnamese": "Nhưng sao nó lại… tồi tàn thế này?",
						"thai": "แต่ทำไมมันถึง... ดูโทรมจัง?",
						"hindi": "लेकिन यह इतना… घटिया क्यों है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "무슨 소리야? 저 웅장한 문을 봐!",
						"english": "What are you talking about? Look at that magnificent door!",
						"japanese": "何を言ってるんだ？あの壮大な門を見ろ！",
						"chinese": "你在说什么？看看那扇宏伟的门！",
						"french": "De quoi parles-tu ? Regarde cette magnifique porte !",
						"spanish": "¿De qué hablas? ¡Mira esa magnífica puerta!",
						"vietnamese": "Bạn đang nói gì vậy? Hãy nhìn cánh cửa tráng lệ kia!",
						"thai": "พูดอะไรน่ะ? ดูประตูอันโอ่อ่านั่นสิ!",
						"hindi": "तुम क्या बात कर रहे हो? उस शानदार दरवाज़े को देखो!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "문고리는 털실로 묶여 있었다.",
						"english": "The doorknob was tied with yarn.",
						"japanese": "ドアノブは毛糸で縛られていた。",
						"chinese": "门把手被毛线绑住了。",
						"french": "La poignée de porte était attachée avec de la laine.",
						"spanish": "El pomo de la puerta estaba atado con lana.",
						"vietnamese": "Tay nắm cửa được buộc bằng sợi len.",
						"thai": "ลูกบิดประตูถูกผูกด้วยไหมพรม",
						"hindi": "दरवाज़े का हैंडल ऊन से बंधा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Roundy"
				},
				{
					"speaker": "Roundy",
					"content": {
						"korean": "이쪽이 옥좌로 가는 길인 것 같아. 펭귄들의 발자국이 선명해.",
						"english": "This looks like the way to the throne. The penguin footprints are clear.",
						"japanese": "こちらが玉座への道のようです。ペンギンの足跡がはっきりしています。",
						"chinese": "这边好像是通往王座的路。企鹅的脚印很清晰。",
						"french": "Cela semble être le chemin vers le trône. Les empreintes de pingouins sont claires.",
						"spanish": "Este parece ser el camino al trono. Las huellas de los pingüinos son claras.",
						"vietnamese": "Đây có vẻ là đường đến ngai vàng. Dấu chân chim cánh cụt rất rõ ràng.",
						"thai": "ดูเหมือนจะเป็นทางไปบัลลังก์ รอยเท้าเพนกวินชัดเจนมาก",
						"hindi": "यह सिंहासन तक का रास्ता लगता है। पेंगुइन के पैरों के निशान साफ हैं。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이건 뭐지?",
						"english": "...What's this?",
						"japanese": "…これは何だ？",
						"chinese": "……这是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "...Đây là gì?",
						"thai": "...นี่มันอะไร?",
						"hindi": "...यह क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "얼음 바닥에… 담요 자국? 그리고… 핫팩 포장지?",
						"english": "On the ice floor... a blanket mark? And... a hot pack wrapper?",
						"japanese": "氷の床に…毛布の跡？そして…使い捨てカイロの包装紙？",
						"chinese": "冰地板上……毯子的痕迹？还有……暖宝宝包装纸？",
						"french": "Sur le sol de glace... une marque de couverture ? Et... un emballage de chauffe-mains ?",
						"spanish": "En el suelo de hielo... ¿una marca de manta? ¿Y... un envoltorio de bolsa térmica?",
						"vietnamese": "Trên sàn băng... vết chăn? Và... vỏ gói túi sưởi?",
						"thai": "บนพื้นน้ำแข็ง... รอยผ้าห่ม? แล้วก็... ซองฮอตแพ็ค?",
						"hindi": "बर्फीली ज़मीन पर... कंबल का निशान? और... एक हॉट पैक का रैपर?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진짜 왕 맞아? 여기서 몸 녹인 거야?",
						"english": "Is he really the king? Did he warm himself up here?",
						"japanese": "本当に王様なのか？ここで体を温めてたのか？",
						"chinese": "他真的是国王吗？在这里取暖的？",
						"french": "C'est vraiment le roi ? Il s'est réchauffé ici ?",
						"spanish": "¿De verdad es el rey? ¿Se calentó aquí?",
						"vietnamese": "Ông ta thật sự là vua sao? Ông ta đã sưởi ấm ở đây à?",
						"thai": "นี่คือกษัตริย์จริงหรือเปล่า? มานั่งผิงไฟอยู่ตรงนี้เหรอ?",
						"hindi": "क्या वह सचमुच राजा है? क्या उसने यहीं खुद को गर्म किया?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "대공께서는… 아마 잠시 휴식을 취하셨을 뿐이야!",
						"english": "His Grace... probably just took a short rest!",
						"japanese": "大公殿下は…きっと少し休憩されただけだよ！",
						"chinese": "大公殿下……可能只是稍作休息了！",
						"french": "Son Altesse... a probablement juste fait une courte pause !",
						"spanish": "Su Alteza... ¡probablemente solo tomó un breve descanso!",
						"vietnamese": "Đại Công tước... có lẽ chỉ nghỉ ngơi một lát thôi!",
						"thai": "ท่านแกรนด์ดยุก... อาจจะแค่พักผ่อนชั่วครู่เท่านั้นเอง!",
						"hindi": "महामहिम... शायद बस थोड़ी देर आराम कर रहे थे!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠시가 아니라… 눌린 자국이 너무 선명한데.",
						"english": "Not just a moment... the impression is too clear.",
						"japanese": "少しどころじゃない…くっきり跡が残ってるじゃないか。",
						"chinese": "不只是一会儿……压痕太明显了。",
						"french": "Pas juste un instant... l'empreinte est trop nette.",
						"spanish": "No solo un momento... la marca está demasiado clara.",
						"vietnamese": "Không phải một lát... vết hằn quá rõ ràng.",
						"thai": "ไม่ใช่แค่ชั่วครู่... รอยกดมันชัดเกินไปแล้วนะ",
						"hindi": "सिर्फ एक पल नहीं... निशान बहुत साफ है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"speaker": "Roundy",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "저기 좀 봐! 대공의 위엄을 상징하는… 펭귄 병사들!",
						"english": "Look over there! Symbolizing the Grand Duke's dignity... penguin soldiers!",
						"japanese": "あれを見て！大公の威厳を象徴する…ペンギン兵士たち！",
						"chinese": "快看那边！象征着大公威严的……企鹅士兵们！",
						"french": "Regarde là-bas ! Symbolisant la dignité du Grand Duc... des soldats pingouins !",
						"spanish": "¡Mira allí! Simbolizando la dignidad del Gran Duque... ¡soldados pingüinos!",
						"vietnamese": "Nhìn kìa! Biểu tượng cho sự uy nghi của Đại Công tước... những người lính chim cánh cụt!",
						"thai": "ดูนั่นสิ! สัญลักษณ์แห่งความสง่างามของแกรนด์ดยุก... ทหารเพนกวิน!",
						"hindi": "उधर देखो! ग्रैंड ड्यूक की गरिमा का प्रतीक... पेंगुइन सैनिक!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "펭귄들은 카드보드 팻말을 들고 있었다. '대공 만세'라고 적혀 있었다.",
						"english": "The penguins were holding cardboard signs. They read, 'Long live the Grand Duke.'",
						"japanese": "ペンギンたちはダンボールの看板を持っていた。「大公万歳」と書かれていた。",
						"chinese": "企鹅们举着纸板牌子。上面写着“大公万岁”。",
						"french": "Les pingouins tenaient des pancartes en carton. On pouvait y lire : « Vive le Grand Duc ».",
						"spanish": "Los pingüinos sostenían carteles de cartón. Decían: '¡Viva el Gran Duque!'.",
						"vietnamese": "Những chú chim cánh cụt đang cầm những tấm biển carton. Trên đó viết: 'Đại Công tước muôn năm.'",
						"thai": "เหล่าเพนกวินถือป้ายกระดาษแข็งอยู่ มีข้อความว่า 'แกรนด์ดยุกจงเจริญ'",
						"hindi": "पेंगुइन कार्डबोर्ड के बोर्ड पकड़े हुए थे। उन पर लिखा था, 'महामहिम अमर रहें।'"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "병사라기엔… 너무 허술한데.",
						"english": "For soldiers... they're too flimsy.",
						"japanese": "兵士にしては…あまりにもお粗末だな。",
						"chinese": "要说是士兵……也太敷衍了吧。",
						"french": "Pour des soldats... c'est trop rudimentaire.",
						"spanish": "Para ser soldados... son demasiado endebles.",
						"vietnamese": "Để gọi là lính... thì quá sơ sài.",
						"thai": "สำหรับทหารแล้ว... มันดูหละหลวมเกินไปหน่อยนะ",
						"hindi": "सैनिकों के लिए... वे बहुत कमज़ोर हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "그건 대공의 겸손함을 보여주는 거야! 소탈함!",
						"english": "That shows the Grand Duke's humility! His unpretentiousness!",
						"japanese": "それが大公の謙虚さを示しているんだ！素朴さだよ！",
						"chinese": "那显示了大公的谦逊！他的平易近人！",
						"french": "Cela montre l'humilité du Grand Duc ! Sa simplicité !",
						"spanish": "¡Eso muestra la humildad del Gran Duque! ¡Su sencillez!",
						"vietnamese": "Đó là biểu hiện cho sự khiêm tốn của Đại Công tước! Sự giản dị của ngài!",
						"thai": "นั่นเป็นการแสดงถึงความถ่อมตนของแกรนด์ดยุกต่างหาก! ความเรียบง่ายไง!",
						"hindi": "यह ग्रैंड ड्यूक की विनम्रता को दर्शाता है! उनकी सादगी!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "겸손함이 아니라… 가난한 거 아니야?",
						"english": "Not humility... just poor, aren't we?",
						"japanese": "謙虚じゃなくて…貧乏なだけじゃない？",
						"chinese": "这不是谦逊……是穷吧？",
						"french": "Ce n'est pas de l'humilité... C'est juste de la pauvreté, non ?",
						"spanish": "No es humildad... ¿Es que somos pobres?",
						"vietnamese": "Không phải khiêm tốn... mà là nghèo thì đúng hơn?",
						"thai": "ไม่ใช่ความถ่อมตนหรอก... แค่จนเฉยๆ รึเปล่า?",
						"hindi": "यह विनम्रता नहीं... कहीं गरीबी तो नहीं है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "Roundy",
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"content": {
						"korean": "이제 정말 옥좌가 코앞이야. 긴장해야 해!",
						"english": "The throne is truly within reach now. We must be tense!",
						"japanese": "玉座はもう目の前だ。気を引き締めないと！",
						"chinese": "王座真的近在眼前了。必须紧张起来！",
						"french": "Le trône est vraiment à portée de main maintenant. Nous devons être tendus !",
						"spanish": "El trono está realmente cerca ahora. ¡Tenemos que estar tensos!",
						"vietnamese": "Ngai vàng thật sự đã ở ngay trước mắt rồi. Phải căng thẳng lên!",
						"thai": "บัลลังก์อยู่แค่เอื้อมแล้วนะ ต้องตื่นเต้นแล้ว!",
						"hindi": "सिंहासन अब सचमुच करीब है। हमें तनाव में रहना होगा!"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "근데 이정표에… '왕궁 아님, 간이 휴게소'라고 쓰여 있어.",
						"english": "But the signpost says... 'Not a palace, temporary rest stop.'",
						"japanese": "でも道標に…「王宮ではありません、簡易休憩所」って書いてある。",
						"chinese": "可是路标上写着……“并非王宫，简易休息站”。",
						"french": "Mais le panneau indique... 'Pas un palais, aire de repos temporaire.'",
						"spanish": "Pero el letrero dice... 'No es un palacio, área de descanso temporal'.",
						"vietnamese": "Nhưng trên bảng chỉ đường lại ghi... 'Không phải hoàng cung, trạm dừng chân tạm thời'.",
						"thai": "แต่ป้ายบอกทางเขียนว่า... 'ไม่ใช่พระราชวัง, จุดพักผ่อนชั่วคราว'",
						"hindi": "लेकिन मील के पत्थर पर लिखा है... 'महल नहीं, अस्थायी विश्राम स्थल'।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Roundy",
					"content": {
						"korean": "저… 저건 대공의 유머 감각이야!",
						"english": "Th-that's the Grand Duke's sense of humor!",
						"japanese": "あれは…あれは大公のユーモアのセンスだ！",
						"chinese": "那……那是大公的幽默感！",
						"french": "C-c'est le sens de l'humour du Grand-Duc !",
						"spanish": "¡E-eso es el sentido del humor del Gran Duque!",
						"vietnamese": "Đ-đó là khiếu hài hước của Đại Công tước!",
						"thai": "นั่น... นั่นมันอารมณ์ขันของท่านดยุกใหญ่!",
						"hindi": "व-वह तो ड्यूक का हास्यबोध है!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대공이 혹시… 인형극 하는 거 아니야?",
						"english": "Is the Grand Duke... putting on a puppet show?",
						"japanese": "大公って…もしかして人形劇でもやってるの？",
						"chinese": "大公会不会……是在演木偶戏？",
						"french": "Le Grand-Duc ne serait-il pas... en train de faire un spectacle de marionnettes ?",
						"spanish": "¿Quizás el Gran Duque... está haciendo un espectáculo de marionetas?",
						"vietnamese": "Đại Công tước có khi nào... đang diễn kịch múa rối không?",
						"thai": "ท่านดยุกใหญ่... กำลังแสดงหุ่นกระบอกอยู่หรือเปล่า?",
						"hindi": "क्या ड्यूक... कठपुतली शो कर रहा है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "Roundy",
					"content": {
						"korean": "말도 안 돼! 대공은… 무섭고 위대하다고!",
						"english": "Nonsense! The Grand Duke is... terrifying and magnificent!",
						"japanese": "とんでもない！大公は…恐ろしくて偉大なんだぞ！",
						"chinese": "胡说！大公是……可怕而伟大的！",
						"french": "N'importe quoi ! Le Grand-Duc est... terrifiant et magnifique !",
						"spanish": "¡Tonterías! ¡El Gran Duque es... aterrador y magnífico!",
						"vietnamese": "Vô lý! Đại Công tước là... đáng sợ và vĩ đại!",
						"thai": "ไร้สาระ! ท่านดยุกใหญ่... น่ากลัวและยิ่งใหญ่!",
						"hindi": "बकवास! ड्यूक... डरावना और महान है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하하하! 감히 나의 완벽한 연기를 방해하려 하다니!",
						"english": "Hahaha! How dare you try to interrupt my perfect performance!",
						"japanese": "ハハハ！よくも私の完璧な演技を邪魔しようとしたな！",
						"chinese": "哈哈哈！竟敢打扰我完美的表演！",
						"french": "Hahaha ! Comment osez-vous tenter d'interrompre ma performance parfaite !",
						"spanish": "¡Jajaja! ¡Cómo osas intentar interrumpir mi actuación perfecta!",
						"vietnamese": "Ha ha ha! Dám cả gan phá hỏng màn trình diễn hoàn hảo của ta!",
						"thai": "ฮ่าฮ่าฮ่า! แกกล้าดียังไงมาขัดจังหวะการแสดงอันสมบูรณ์แบบของข้า!",
						"hindi": "हाहाहा! तुम्हारी हिम्मत कैसे हुई मेरी शानदार अदाकारी में दखल देने की!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "웃지 마! 다시 온다, {random_boss}!",
						"english": "Don't laugh! I'll be back, {random_boss}!",
						"japanese": "笑うな！また来るぞ、{random_boss}！",
						"chinese": "不许笑！我还会回来的，{random_boss}！",
						"french": "Ne ris pas ! Je reviendrai, {random_boss} !",
						"spanish": "¡No te rías! ¡Volveré, {random_boss}!",
						"vietnamese": "Đừng cười! Ta sẽ trở lại, {random_boss}!",
						"thai": "อย่าหัวเราะ! ข้าจะกลับมา, {random_boss}!",
						"hindi": "हँसो मत! मैं वापस आऊँगा, {random_boss}!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "가짜 왕의 승리. 탐험대는 이를 갈았다.",
						"english": "The False King triumphs. The expedition gnashed their teeth.",
						"japanese": "偽の王の勝利。探検隊は歯ぎしりした。",
						"chinese": "伪王胜利了。探险队咬牙切齿。",
						"french": "Victoire du faux roi. L'expédition grinçait des dents.",
						"spanish": "Victoria del rey impostor. La expedición rechinó los dientes.",
						"vietnamese": "Chiến thắng của Vua Giả Mạo. Đoàn thám hiểm nghiến răng ken két.",
						"thai": "ชัยชนะของราชาจอมปลอม คณะสำรวจกัดฟันกรอด",
						"hindi": "नकली राजा की जीत। अभियान दल ने दांत पीसे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크아악… 겨우… 겨우 이런 자들에게…!",
						"english": "Ugh... To be defeated by... by mere commoners...!",
						"japanese": "くあああ…まさか…まさかこんな連中に…！",
						"chinese": "啊啊啊……竟然……竟然败给这种人……！",
						"french": "Gaaah... Vaincu par... par de simples individus comme eux... !",
						"spanish": "¡Aaah... Derrotado por... por gente así...!",
						"vietnamese": "Khụ khụ... Chỉ là... chỉ là những kẻ như thế này...!",
						"thai": "อ๊าาา... แค่... แค่คนพวกนี้เองเหรอ...!",
						"hindi": "आह... मैं... मैं ऐसे लोगों से हार गया...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…대공 맞았어?",
						"english": "...Is he really the Grand Duke?",
						"japanese": "…本当に大公だったのか？",
						"chinese": "……真是大公吗？",
						"french": "...C'était bien le Grand-Duc ?",
						"spanish": "...¿Era el Gran Duque?",
						"vietnamese": "...Đó là Đại Công tước ư?",
						"thai": "...นี่คือแกรนด์ดยุกจริงๆ เหรอ?",
						"hindi": "...क्या वह सच में ग्रैंड ड्यूक था?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 연기를 방해하다니… 두고 봐라!",
						"english": "How dare you... interrupt my performance... You'll pay for this!",
						"japanese": "よくも…よくも私の演技を邪魔したな…覚えておけ！",
						"chinese": "竟敢……竟敢打扰我的表演……你们等着瞧吧！",
						"french": "Comment osez-vous... interrompre ma performance... Vous le regretterez !",
						"spanish": "¡Cómo osas... interrumpir mi actuación... Ya verás!",
						"vietnamese": "Dám... dám phá hỏng màn trình diễn của ta... Hãy đợi đấy!",
						"thai": "แกกล้าดียังไง... มาขัดจังหวะการแสดงของข้า... คอยดูเถอะ!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरी अदाकारी में दखल देने की... देख लेना!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 대공의 곁에서 카드보드 왕관이 굴러떨어졌다.",
						"english": "A cardboard crown rolled away from the fallen Grand Duke.",
						"japanese": "倒れた大公の傍らから、段ボール製の王冠が転がり落ちた。",
						"chinese": "硬纸板王冠从倒下的大公身旁滚落。",
						"french": "Une couronne en carton roula loin du Grand-Duc déchu.",
						"spanish": "Una corona de cartón rodó lejos del Gran Duque caído.",
						"vietnamese": "Chiếc vương miện bằng bìa carton lăn ra khỏi người Đại Công tước đã ngã xuống.",
						"thai": "มงกุฎกระดาษแข็งกลิ้งออกจากข้างกายแกรนด์ดยุกที่ล้มลง",
						"hindi": "गिरे हुए ग्रैंड ड्यूक के पास से एक कार्डबोर्ड का मुकुट लुढ़क गया।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						1,
						1
					],
					"speaker": "Roundy",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "Roundy",
					"content": {
						"korean": "…어쩐지 연기력이 어색하더라니.",
						"english": "...No wonder the acting felt so awkward.",
						"japanese": "…どうりで演技がぎこちないわけだ。",
						"chinese": "……怪不得演技那么僵硬。",
						"french": "...Pas étonnant que le jeu d'acteur semblait si maladroit.",
						"spanish": "...Con razón su actuación era tan extraña.",
						"vietnamese": "...Thảo nào diễn xuất cứ gượng gạo.",
						"thai": "...มิน่าล่ะ การแสดงถึงได้ดูแปลกๆ",
						"hindi": "...इसलिए तो अभिनय इतना अजीब लग रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 진짜 대공을 찾아야 할 것 같았다.",
						"english": "It seemed the expedition team would have to find the real Grand Duke.",
						"japanese": "探検隊は本物の大公を探す必要がありそうだった。",
						"chinese": "探险队似乎需要找到真正的大公。",
						"french": "L'équipe d'exploration allait devoir trouver le vrai Grand-Duc.",
						"spanish": "El equipo de expedición tendría que encontrar al verdadero Gran Duque.",
						"vietnamese": "Đoàn thám hiểm có lẽ phải tìm Đại Công tước thật sự.",
						"thai": "ดูเหมือนว่าทีมสำรวจจะต้องออกตามหาแกรนด์ดยุกตัวจริง",
						"hindi": "ऐसा लगा कि अभियान दल को असली ग्रैंड ड्यूक को खोजना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 옥좌에 정체 모를 그림자가 앉아 있었다.",
						"english": "An unknown shadow sat upon the colossal ice throne.",
						"japanese": "巨大な氷の玉座に、正体不明の影が座っていた。",
						"chinese": "巨大的冰玉座上，坐着一个不明身份的影子。",
						"french": "Une ombre inconnue était assise sur le colossal trône de glace.",
						"spanish": "Una sombra desconocida se sentaba en el colosal trono de hielo.",
						"vietnamese": "Một bóng đen không rõ danh tính đang ngồi trên ngai vàng băng khổng lồ.",
						"thai": "เงาลึกลับนั่งอยู่บนบัลลังก์น้ำแข็งอันมหึมา",
						"hindi": "एक अज्ञात परछाई विशाल बर्फीले सिंहासन पर बैठी थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 옥좌를 침범하다니.",
						"english": "How dare you... invade my throne.",
						"japanese": "よくも…私の玉座を侵すとはな。",
						"chinese": "竟敢……侵犯我的王座。",
						"french": "Comment oses-tu... envahir mon trône.",
						"spanish": "Cómo te atreves... a invadir mi trono.",
						"vietnamese": "Dám... xâm phạm ngai vàng của ta.",
						"thai": "กล้าดียังไง... มาบุกรุกบัลลังก์ของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे सिंहासन पर कब्ज़ा करने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 대공이야? 근데 왜… 옥좌에 담요가 깔려있어?",
						"english": "Are you the Grand Duke? But why... is there a blanket on the throne?",
						"japanese": "あなたが大公？でもどうして…玉座に毛布が敷いてあるの？",
						"chinese": "你就是大公？但为什么……王座上铺着毯子？",
						"french": "Vous êtes le Grand-Duc ? Mais pourquoi... y a-t-il une couverture sur le trône ?",
						"spanish": "¿Eres el Gran Duque? ¿Pero por qué... hay una manta en el trono?",
						"vietnamese": "Ngươi là Đại Công tước? Nhưng tại sao... ngai vàng lại có chăn?",
						"thai": "ท่านคือดยุกใหญ่เหรอ? แต่ทำไม... บนบัลลังก์ถึงมีผ้าห่ม?",
						"hindi": "क्या तुम ड्यूक हो? लेकिन क्यों... सिंहासन पर कंबल बिछा हुआ है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥쳐라! 나는 이 설산의 진정한 왕! {random_boss}니라!",
						"english": "Silence! I am the true king of this snow mountain! I am {random_boss}!",
						"japanese": "黙れ！私はこの雪山の真の王！{random_boss}である！",
						"chinese": "闭嘴！我才是这雪山的真正王者！我是{random_boss}！",
						"french": "Silence ! Je suis le véritable roi de cette montagne enneigée ! Je suis {random_boss} !",
						"spanish": "¡Cállate! ¡Soy el verdadero rey de esta montaña nevada! ¡Soy {random_boss}!",
						"vietnamese": "Im miệng! Ta là vị vua đích thực của ngọn núi tuyết này! Ta là {random_boss}!",
						"thai": "หุบปาก! ข้าคือราชาที่แท้จริงของภูเขาหิมะนี้! ข้าคือ {random_boss}!",
						"hindi": "चुप रहो! मैं इस बर्फ के पहाड़ का सच्चा राजा हूँ! मैं {random_boss} हूँ!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 봐도 연극인데.",
						"english": "Clearly a play.",
						"japanese": "誰が見ても劇だろ。",
						"chinese": "明眼人一看就是演戏。",
						"french": "C'est clairement une pièce.",
						"spanish": "Claramente es una obra.",
						"vietnamese": "Rõ ràng là kịch.",
						"thai": "เห็นๆ กันอยู่ว่าเป็นละคร",
						"hindi": "साफ-साफ नाटक है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…쓸데없는 소리는 집어치워라! 당장 처형시켜주마!",
						"english": "...Enough of this nonsense! I'll have you executed at once!",
						"japanese": "…くだらん戯言はよせ！今すぐ処刑してやる！",
						"chinese": "……少说废话！我现在就处决你！",
						"french": "...Assez de ces absurdités ! Je vais vous faire exécuter sur-le-champ !",
						"spanish": "...¡Basta de tonterías! ¡Te ejecutaré ahora mismo!",
						"vietnamese": "...Câm miệng! Ta sẽ xử tử ngươi ngay lập tức!",
						"thai": "...พอทีกับเรื่องไร้สาระ! ข้าจะประหารเจ้าเดี๋ยวนี้แหละ!",
						"hindi": "...बकवास बंद करो! मैं तुम्हें अभी फाँसी दे दूँगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 몰아치는 설산. 대공의 옥좌로 향하는 길.",
			"그곳에서 발견된 것은, 왕의 흔적이 아니었다.",
			"대공이라 불리는 자의 정체는 무엇인가.",
			"이 모든 것이… 그저 연극일 뿐인가."
		],
		"english": [
			"Snow-blasted mountains. The path to the Grand Duke's throne.",
			"What was found there was not the king's trace.",
			"What is the identity of the one called Grand Duke?",
			"Is all of this... just a play?"
		],
		"japanese": [
			"吹雪が吹き荒れる雪山。大公の玉座へ向かう道。",
			"そこで見つかったのは、王の痕跡ではなかった。",
			"大公と呼ばれる者の正体は何なのか。",
			"この全てが…ただの演劇に過ぎないのか。"
		],
		"chinese": [
			"暴风雪肆虐的雪山。通往大公宝座之路。",
			"在那里发现的，并非国王的踪迹。",
			"被称为大公的那个人的真实身份是什么？",
			"这一切…都只是一场戏吗？"
		],
		"french": [
			"Montagnes enneigées balayées par le blizzard. Le chemin vers le trône du Grand Duc.",
			"Ce qui y fut découvert n'était pas la trace du roi.",
			"Quelle est l'identité de celui qu'on appelle le Grand Duc ?",
			"Tout cela... n'est-il qu'une pièce de théâtre ?"
		],
		"spanish": [
			"Montañas nevadas azotadas por la ventisca. El camino al trono del Gran Duque.",
			"Lo que se encontró allí no era el rastro del rey.",
			"¿Cuál es la identidad de aquel a quien llaman Gran Duque?",
			"¿Todo esto... es solo una obra de teatro?"
		],
		"vietnamese": [
			"Núi tuyết bão tuyết. Con đường đến ngai vàng của Đại Công tước.",
			"Thứ được tìm thấy ở đó không phải là dấu vết của nhà vua.",
			"Thân phận của kẻ được gọi là Đại Công tước là gì?",
			"Tất cả những điều này… chỉ là một vở kịch thôi sao?"
		],
		"thai": [
			"ภูเขาหิมะที่พายุหิมะโหมกระหน่ำ เส้นทางสู่บัลลังก์ของแกรนด์ดยุก",
			"สิ่งที่พบที่นั่นไม่ใช่ร่องรอยของกษัตริย์",
			"ตัวตนของผู้ที่ถูกเรียกว่าแกรนด์ดยุกคืออะไร?",
			"ทั้งหมดนี้... เป็นแค่ละครเท่านั้นหรือ?"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान से घिरे बर्फीले पहाड़। ग्रैंड ड्यूक के सिंहासन की ओर जाने वाला रास्ता।",
			"वहाँ जो मिला, वह राजा का कोई निशान नहीं था।",
			"ग्रैंड ड्यूक कहलाने वाले की पहचान क्या है?",
			"क्या यह सब… महज़ एक नाटक है?"
		]
	}
} as const;
