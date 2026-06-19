export const scenario_hell_lumen_1_02 = {
	"scenario_id": "hell_lumen_1_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고통의 비명조차 없는 곳.",
			"그들은 잔잔히 웃었다. 모든 것을 잃은 채로.",
			"이 평온은 구원인가, 저주인가?",
			"마라는 그들의 텅 빈 눈동자를 들여다봤다."
		],
		"english": [
			"A place where even screams of pain are absent.",
			"They smiled serenely, having lost everything.",
			"Is this serenity salvation or a curse?",
			"Mara looked into their empty eyes."
		],
		"japanese": [
			"苦痛の叫び声すらない場所。",
			"彼らはすべてを失ったまま、穏やかに微笑んだ。",
			"この平穏は救いか、それとも呪いか？",
			"マラは彼らの虚ろな瞳を覗き込んだ。"
		],
		"chinese": [
			"连痛苦的尖叫声都没有的地方。",
			"他们平静地笑着，一无所有。",
			"这份平静是救赎，还是诅咒？",
			"玛拉凝视着他们空洞的眼睛。"
		],
		"french": [
			"Un lieu où même les cris de douleur sont absents.",
			"Ils souriaient paisiblement, ayant tout perdu.",
			"Cette sérénité est-elle une rédemption ou une malédiction ?",
			"Mara plongea son regard dans leurs yeux vides."
		],
		"spanish": [
			"Un lugar donde ni siquiera hay gritos de dolor.",
			"Sonrieron serenamente, habiéndolo perdido todo.",
			"Hablamos de la misión. ¿Es esta serenidad una salvación o una maldición?",
			"Mara miró fijamente sus ojos vacíos."
		],
		"vietnamese": [
			"Một nơi không còn cả tiếng kêu đau đớn.",
			"Họ mỉm cười thanh thản, dù đã mất tất cả.",
			"Sự bình yên này là cứu rỗi hay lời nguyền?",
			"Mara nhìn vào đôi mắt trống rỗng của họ."
		],
		"thai": [
			"สถานที่ที่ไร้แม้แต่เสียงกรีดร้องแห่งความเจ็บปวด",
			"พวกเขาแย้มยิ้มอย่างสงบสุข ในขณะที่สูญเสียทุกสิ่งไปแล้ว",
			"ความสงบสุขนี้คือความรอดหรือคำสาปกันแน่?",
			"มารามองเข้าไปในดวงตาที่ว่างเปล่าของพวกเขา"
		],
		"hindi": [
			"ऐसी जगह जहाँ दर्द की चीख़ भी नहीं।",
			"उन्होंने सब कुछ खोकर भी शांति से मुस्कुराया।",
			"क्या यह शांति मोक्ष है या अभिशाप?",
			"मारा ने उनकी खाली आँखों में देखा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고통의 비명이 멈춘 공간. 잔잔한 미소만이 감돌았다.",
						"english": "A space where screams of pain have ceased. Only serene smiles lingered.",
						"japanese": "苦痛の叫びが止まった空間。穏やかな微笑みだけが漂っていた。",
						"chinese": "痛苦的尖叫声停止了。只有平静的微笑萦绕。",
						"french": "Un espace où les cris de douleur avaient cessé. Seuls des sourires sereins flottaient.",
						"spanish": "Un espacio donde los gritos de dolor habían cesado. Solo sonrisas serenas permanecían.",
						"vietnamese": "Nơi tiếng kêu đau đớn đã ngừng. Chỉ còn nụ cười thanh thản.",
						"thai": "พื้นที่ที่เสียงกรีดร้องแห่งความเจ็บปวดหยุดลง มีเพียงรอยยิ้มอันสงบเท่านั้นที่คงอยู่",
						"hindi": "एक ऐसी जगह जहाँ दर्द की चीख़ें बंद हो गईं। केवल शांत मुस्कानें ही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여러분 괜찮으세요? 어디 불편한 곳이라도…?",
						"english": "Are you all right? Is there anything bothering you...?",
						"japanese": "皆さん、大丈夫ですか？どこか気分が悪いところでも…？",
						"chinese": "各位，你们还好吗？有没有哪里不舒服……？",
						"french": "Tout le monde, ça va ? Y a-t-il quelque chose qui ne va pas... ?",
						"spanish": "¿Están bien? ¿Hay algo que les moleste...?",
						"vietnamese": "Mọi người có ổn không? Có chỗ nào không thoải mái không...?",
						"thai": "ทุกคนสบายดีไหมครับ/คะ? มีอะไรไม่สบายหรือเปล่า...?",
						"hindi": "क्या आप सब ठीक हैं? कोई परेशानी तो नहीं...?"
					},
					"emotion": "base",
					"speaker": "mara",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "괜찮아요. 모든 고통이 사라졌어요.",
						"english": "We're fine. All pain has vanished.",
						"japanese": "大丈夫です。すべての苦痛が消えました。",
						"chinese": "我们很好。所有的痛苦都消失了。",
						"french": "Nous allons bien. Toute douleur a disparu.",
						"spanish": "Estamos bien. Todo el dolor ha desaparecido.",
						"vietnamese": "Chúng tôi ổn. Mọi đau đớn đã biến mất rồi.",
						"thai": "พวกเราสบายดี ความเจ็บปวดทั้งหมดหายไปแล้ว",
						"hindi": "हम ठीक हैं। सारा दर्द चला गया है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저들은… 대체 뭐지?",
						"english": "What... what are they?",
						"japanese": "彼らは…一体何なんだ？",
						"chinese": "他们……到底是什么？",
						"french": "Que... que sont-ils ?",
						"spanish": "Ellos... ¿qué son exactamente?",
						"vietnamese": "Bọn họ... rốt cuộc là gì?",
						"thai": "พวกนั้น... เป็นตัวอะไรกันแน่?",
						"hindi": "वे... आखिर क्या हैं?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 550,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "mara",
					"content": {
						"korean": "배고프지 않으세요? 목마르지 않으세요?",
						"english": "Aren't you hungry? Aren't you thirsty?",
						"japanese": "お腹空いていませんか？喉が渇いていませんか？",
						"chinese": "你们不饿吗？不渴吗？",
						"french": "Vous n'avez pas faim ? Pas soif ?",
						"spanish": "¿No tienen hambre? ¿No tienen sed?",
						"vietnamese": "Mọi người không đói sao? Không khát sao?",
						"thai": "คุณไม่หิวเหรอ? ไม่กระหายน้ำเหรอ?",
						"hindi": "क्या आपको भूख नहीं लगी है? क्या आपको प्यास नहीं लगी है?"
					}
				},
				{
					"content": {
						"korean": "아무것도 원하지 않아요.",
						"english": "We desire nothing.",
						"japanese": "何も望みません。",
						"chinese": "我们什么都不想要。",
						"french": "Nous ne désirons rien.",
						"spanish": "No deseamos nada.",
						"vietnamese": "Chúng tôi không muốn gì cả.",
						"thai": "พวกเราไม่ต้องการอะไรเลย",
						"hindi": "हमें कुछ भी नहीं चाहिए।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탈출하고 싶지 않으세요? 이 지옥에서?",
						"english": "Don't you want to escape? From this hell?",
						"japanese": "逃げ出したくないのですか？ この地獄から？",
						"chinese": "不想逃出去吗？从这个地狱？",
						"french": "Vous ne voulez pas vous échapper ? De cet enfer ?",
						"spanish": "¿No quieres escapar? ¿De este infierno?",
						"vietnamese": "Không muốn thoát ra sao? Khỏi địa ngục này?",
						"thai": "ไม่อยากหนีออกไปหรือไง? จากนรกนี่น่ะ?",
						"hindi": "क्या तुम भागना नहीं चाहते? इस नर्क से?"
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "…이곳이 제일 평온해요.",
						"english": "...This place is the most peaceful.",
						"japanese": "…ここが一番穏やかです。",
						"chinese": "……这里最平静。",
						"french": "...Cet endroit est le plus paisible.",
						"spanish": "...Este lugar es el más pacífico.",
						"vietnamese": "...Nơi đây là yên bình nhất.",
						"thai": "...ที่นี่สงบสุขที่สุด",
						"hindi": "...यह जगह सबसे शांत है।"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "아무것도… 느끼지 못하는 건가?",
						"english": "...Can't you feel anything?",
						"japanese": "何も…感じないのか？",
						"chinese": "……什么都感觉不到吗？",
						"french": "...Tu ne ressens rien ?",
						"spanish": "...¿No sientes nada?",
						"vietnamese": "...Không cảm thấy gì sao?",
						"thai": "...ไม่รู้สึกอะไรเลยเหรอ?",
						"hindi": "…क्या तुम्हें कुछ भी महसूस नहीं होता?"
					}
				},
				{
					"speaker": "mara",
					"emotion": "angry",
					"content": {
						"korean": "이건 구원이 아니야…",
						"english": "This isn't salvation...",
						"japanese": "これは救いじゃない…",
						"chinese": "这不是救赎……",
						"french": "Ce n'est pas le salut...",
						"spanish": "Esto no es salvación...",
						"vietnamese": "Đây không phải là sự cứu rỗi...",
						"thai": "นี่ไม่ใช่หนทางรอด...",
						"hindi": "यह मुक्ति नहीं है..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "mara",
					"type": "direction",
					"spot": [
						5,
						4
					],
					"action": "enter",
					"duration_ms": 450
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "제발, 무언가라도 원하세요! 분노라도 좋아요!",
						"english": "Please, want something! Even anger is fine!",
						"japanese": "お願い、何かを望んでくれ！ 怒りでもいい！",
						"chinese": "拜托，想要点什么吧！哪怕是愤怒也好！",
						"french": "S'il te plaît, désire quelque chose ! Même la colère, c'est bien !",
						"spanish": "¡Por favor, desea algo! ¡Incluso la ira está bien!",
						"vietnamese": "Làm ơn, hãy mong muốn điều gì đó! Ngay cả sự tức giận cũng được!",
						"thai": "ได้โปรด, ต้องการอะไรสักอย่างเถอะ! แม้แต่ความโกรธก็ยังดี!",
						"hindi": "कृपया, कुछ तो चाहो! गुस्सा भी चलेगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왜 그래야 하죠? 고통이 사라졌는데.",
						"english": "Why should I? The pain is gone.",
						"japanese": "なぜそうしなければならないのですか？ 苦痛は消え去ったのに。",
						"chinese": "为什么非要那样呢？痛苦已经消失了。",
						"french": "Pourquoi devrais-je le faire ? La douleur a disparu.",
						"spanish": "¿Por qué debería hacerlo? El dolor ha desaparecido.",
						"vietnamese": "Tại sao tôi phải làm vậy? Nỗi đau đã biến mất rồi.",
						"thai": "ทำไมฉันต้องทำอย่างนั้น? ในเมื่อความเจ็บปวดได้หายไปแล้ว",
						"hindi": "मुझे क्यों करना चाहिए? दर्द तो चला गया है।"
					}
				},
				{
					"content": {
						"korean": "웃고 있는데… 눈은 아무것도 없어.",
						"english": "They're smiling... but their eyes are empty.",
						"japanese": "笑っているのに…瞳には何も宿っていない。",
						"chinese": "笑着……眼睛里却空无一物。",
						"french": "Ils sourient... mais leurs yeux sont vides.",
						"spanish": "Están sonriendo... pero sus ojos están vacíos.",
						"vietnamese": "Họ đang cười... nhưng đôi mắt trống rỗng.",
						"thai": "พวกเขายิ้มอยู่... แต่ดวงตาว่างเปล่า",
						"hindi": "वे मुस्कुरा रहे हैं... लेकिन उनकी आँखें खाली हैं।"
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "angry",
					"content": {
						"korean": "사제가 준 건 평온이 아니야. 스스로를 잃게 한 거야.",
						"english": "What the priest gave wasn't peace. It was losing oneself.",
						"japanese": "司祭が与えたのは平穏ではない。己を失わせたのだ。",
						"chinese": "牧师给予的不是平静。是让他们失去了自我。",
						"french": "Ce que le prêtre a donné n'était pas la paix. C'était la perte de soi.",
						"spanish": "Lo que el sacerdote dio no fue paz. Fue la pérdida de uno mismo.",
						"vietnamese": "Thứ mà linh mục ban không phải là sự bình yên. Mà là đánh mất chính mình.",
						"thai": "สิ่งที่นักบวชให้นั้นไม่ใช่ความสงบสุข แต่เป็นการทำให้สูญเสียตัวเอง",
						"hindi": "पादरी ने जो दिया वह शांति नहीं थी। यह खुद को खोना था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "그 사제… 위험해.",
						"english": "That priest... is dangerous.",
						"japanese": "あの司祭…危険だ。",
						"chinese": "那个牧师……很危险。",
						"french": "Ce prêtre... est dangereux.",
						"spanish": "Ese sacerdote... es peligroso.",
						"vietnamese": "Linh mục đó... nguy hiểm.",
						"thai": "นักบวชคนนั้น... อันตราย",
						"hindi": "वह पादरी... खतरनाक है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "mara",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 600,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "평온해진 자들의 손목에는 경전 구절이 적힌 얇은 사슬이 휘감겨 있었다.",
						"english": "Thin chains with scripture verses were wrapped around the wrists of those who had found peace.",
						"japanese": "平穏を得た者たちの手首には、経典の文句が記された細い鎖が巻き付いていた。",
						"chinese": "平静下来的人们手腕上，缠绕着刻有经文的细链。",
						"french": "De fines chaînes avec des versets des Écritures étaient enroulées autour des poignets de ceux qui avaient trouvé la paix.",
						"spanish": "Delgadas cadenas con versículos de las escrituras estaban enrolladas alrededor de las muñecas de aquellos que habían encontrado la paz.",
						"vietnamese": "Những sợi xích mỏng có khắc các câu kinh thánh quấn quanh cổ tay của những người đã tìm thấy sự bình yên.",
						"thai": "โซ่บางๆ ที่มีข้อความจากพระคัมภีร์พันรอบข้อมือของผู้ที่สงบลงแล้ว",
						"hindi": "जिन लोगों को शांति मिली थी, उनकी कलाइयों पर धर्मग्रंथों के श्लोकों वाली पतली जंजीरें लिपटी हुई थीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저건… 사슬인가?",
						"english": "Is that… a chain?",
						"japanese": "あれは…鎖か？",
						"chinese": "那是…锁链吗？",
						"french": "C'est… une chaîne ?",
						"spanish": "¿Eso es… una cadena?",
						"vietnamese": "Kia là… xiềng xích ư?",
						"thai": "นั่นมัน… โซ่หรือ?",
						"hindi": "क्या वो… जंजीर है?"
					}
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "sad",
					"content": {
						"korean": "보이지 않는 구속이지. 모든 걸 포기하게 만드는.",
						"english": "An invisible restraint. Making you give up everything.",
						"japanese": "見えぬ拘束だ。全てを諦めさせる。",
						"chinese": "无形的束缚。让你放弃一切。",
						"french": "Une contrainte invisible. Qui fait tout abandonner.",
						"spanish": "Una atadura invisible. Que te hace rendirte a todo.",
						"vietnamese": "Một sự trói buộc vô hình. Khiến ngươi từ bỏ tất cả.",
						"thai": "พันธนาการที่มองไม่เห็น ทำให้ยอมแพ้ทุกสิ่ง",
						"hindi": "एक अदृश्य बंधन। जो सब कुछ त्यागने पर मजबूर करता है।"
					}
				},
				{
					"content": {
						"korean": "따뜻해요… 사제의 축복이에요.",
						"english": "It's warm… It's the priest's blessing.",
						"japanese": "暖かい…司祭の祝福だ。",
						"chinese": "好温暖…这是祭司的祝福。",
						"french": "C'est chaud… C'est la bénédiction du prêtre.",
						"spanish": "Es cálido… Es la bendición del sacerdote.",
						"vietnamese": "Ấm áp quá… Đây là phước lành của giáo sĩ.",
						"thai": "อบอุ่นจัง… นี่คือพรของนักบวช",
						"hindi": "यह गर्म है… यह पुजारी का आशीर्वाद है।"
					},
					"speaker": "character_4",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "더 이상 여유를 부릴 수 없어. 사제를 막아야 해.",
						"english": "No more time to spare. We must stop the priest.",
						"japanese": "もう猶予はない。司祭を止めねば。",
						"chinese": "没有时间再拖延了。必须阻止祭司。",
						"french": "Plus de temps à perdre. Il faut arrêter le prêtre.",
						"spanish": "No podemos demorarnos más. Debemos detener al sacerdote.",
						"vietnamese": "Không thể chần chừ thêm nữa. Phải ngăn chặn giáo sĩ.",
						"thai": "ไม่มีเวลาอีกแล้ว ต้องหยุดยั้งนักบวช",
						"hindi": "अब और ढील नहीं दे सकते। हमें पुजारी को रोकना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하! 나약한 것들. 고통 속에서 평생 신음해라!",
						"english": "Hahaha! Pathetic fools. Groan in agony forever!",
						"japanese": "クハハ！弱き者どもめ。永遠に苦痛の中で呻け！",
						"chinese": "哈哈哈！弱者们。在痛苦中哀嚎一生吧！",
						"french": "Hahaha ! Faibles créatures. Gémissez de douleur pour l'éternité !",
						"spanish": "¡Jajaja! Débiles criaturas. ¡Gemid en agonía para siempre!",
						"vietnamese": "Khà khà! Những kẻ yếu ớt. Hãy rên rỉ trong đau đớn suốt đời đi!",
						"thai": "คึคึคึ! พวกอ่อนแอ จงคร่ำครวญในความเจ็บปวดไปตลอดชีวิต!",
						"hindi": "हाहाहा! कमज़ोरों। जीवन भर पीड़ा में कराहो!"
					},
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc đâu.",
						"thai": "ยัง... ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와도 소용없다. {random_boss}는 너희의 의지를 꺾을 것이다.",
						"english": "Coming back is futile. {random_boss} will crush your will.",
						"japanese": "戻ってきても無駄だ。{random_boss}がお前たちの意志を打ち砕くだろう。",
						"chinese": "再来也没用。{random_boss}会摧毁你们的意志。",
						"french": "Revenir est futile. {random_boss} brisera votre volonté.",
						"spanish": "Volver es inútil. {random_boss} aplastará vuestra voluntad.",
						"vietnamese": "Quay lại cũng vô ích thôi. {random_boss} sẽ bẻ gãy ý chí của các ngươi.",
						"thai": "กลับมาอีกก็เปล่าประโยชน์ {random_boss} จะบดขยี้เจตจำนงของพวกเจ้า",
						"hindi": "वापस आना व्यर्थ है। {random_boss} तुम्हारी इच्छाशक्ति को कुचल देगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "누가 이 평온을 방해하는가.",
						"english": "Who dares disturb this tranquility?",
						"japanese": "誰がこの平穏を乱すのか。",
						"chinese": "谁敢打扰这份平静？",
						"french": "Qui ose troubler cette tranquillité ?",
						"spanish": "¿Quién osa perturbar esta tranquilidad?",
						"vietnamese": "Kẻ nào dám phá vỡ sự bình yên này?",
						"thai": "ใครบังอาจมารบกวนความสงบนี้?",
						"hindi": "कौन इस शांति को भंग करने की हिम्मत करता है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 이 모든 걸 꾸민 거지!",
						"english": "You orchestrated all of this!",
						"japanese": "お前がこの全てを企んだのか！",
						"chinese": "这都是你策划的吧！",
						"french": "C'est toi qui as tout manigancé !",
						"spanish": "¡Tú orquestaste todo esto!",
						"vietnamese": "Ngươi đã bày ra tất cả chuyện này!",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี่!",
						"hindi": "तुमने ही यह सब रचा है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이것이야말로 진정한 구원. 고통 없는 삶.",
						"english": "This is true salvation. A life without pain.",
						"japanese": "これこそが真の救済。苦痛なき生だ。",
						"chinese": "这才是真正的救赎。没有痛苦的人生。",
						"french": "C'est la véritable rédemption. Une vie sans douleur.",
						"spanish": "Esto es la verdadera salvación. Una vida sin dolor.",
						"vietnamese": "Đây mới chính là sự cứu rỗi đích thực. Một cuộc sống không đau khổ.",
						"thai": "นี่แหละคือความรอดที่แท้จริง ชีวิตที่ปราศจากความเจ็บปวด",
						"hindi": "यही सच्चा मोक्ष है। पीड़ा रहित जीवन।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "자신을 잃은 꼭두각시잖아!",
						"english": "You're just a puppet who lost himself!",
						"japanese": "お前は自分を見失った操り人形だ！",
						"chinese": "你不过是失去自我的傀儡！",
						"french": "Tu n'es qu'une marionnette qui s'est perdue !",
						"spanish": "¡No eres más que una marioneta que se perdió a sí misma!",
						"vietnamese": "Ngươi chỉ là một con rối đã đánh mất chính mình!",
						"thai": "แกเป็นแค่หุ่นเชิดที่สูญเสียตัวเอง!",
						"hindi": "तुम तो बस एक ऐसी कठपुतली हो जिसने खुद को खो दिया है!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 감히 {random_boss}의 뜻을 거스를 셈이냐.",
						"english": "Insignificant beings. Do you dare defy the will of {random_boss}?",
						"japanese": "愚かな者たち。{random_boss}の意思に逆らうつもりか。",
						"chinese": "卑微的家伙们。竟敢违抗{random_boss}的旨意？",
						"french": "Créatures insignifiantes. Osez-vous défier la volonté de {random_boss} ?",
						"spanish": "Seres insignificantes. ¿Osáis desafiar la voluntad de {random_boss}?",
						"vietnamese": "Những kẻ hèn mọn. Dám chống lại ý chí của {random_boss} ư?",
						"thai": "พวกไร้ค่า กล้าดียังไงมาขัดขืนเจตจำนงของ {random_boss}",
						"hindi": "तुच्छ प्राणी। क्या तुम {random_boss} की इच्छा का उल्लंघन करने की हिम्मत करते हो?"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "큭… 어리석은 것들. 고통에서 벗어나려는 본능을 거역하다니… 사제님은… 모든 것을 알고 계실 터…",
						"english": "Hmph… Foolish beings. To defy the instinct to escape pain… The Priest… must know everything…",
						"japanese": "くっ…愚かな者たちめ。苦痛から逃れようとする本能に逆らうとは…司祭様は…全てをご存知のはず…",
						"chinese": "哼…愚蠢的家伙们。竟敢违背摆脱痛苦的本能…祭司大人…定然知晓一切…",
						"french": "Hmph… Idiots. Défier l'instinct d'échapper à la douleur… Le Prêtre… doit tout savoir…",
						"spanish": "Humph… Estúpidos. Desafiar el instinto de escapar del dolor… El Sacerdote… debe saberlo todo…",
						"vietnamese": "Khụ… Những kẻ ngu ngốc. Dám chống lại bản năng thoát khỏi đau khổ… Giáo sĩ… hẳn đã biết tất cả…",
						"thai": "ฮึ่ม… พวกโง่เขลา บังอาจขัดขืนสัญชาตญาณที่จะหลีกหนีความเจ็บปวด… ท่านนักบวช… คงจะรู้ทุกสิ่ง…",
						"hindi": "ह्म्फ… मूर्ख प्राणी। दर्द से बचने की अपनी प्रवृत्ति का विरोध करना… पुजारी… सब कुछ जानते होंगे…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사제… 그자가 배후였어.",
						"english": "The Priest... He was behind it.",
						"japanese": "司祭…彼が黒幕だった。",
						"chinese": "祭司……他才是幕后主使。",
						"french": "Le Prêtre... C'était lui le cerveau.",
						"spanish": "El Sacerdote... Él estaba detrás de todo.",
						"vietnamese": "Tên Linh mục... Hắn ta là kẻ đứng sau.",
						"thai": "บาทหลวง... เขาคือผู้อยู่เบื้องหลัง",
						"hindi": "पुजारी... वह इसके पीछे था।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이제 저들은… 제정신으로 돌아올 수 있을까?",
						"english": "Can they... ever return to their senses now?",
						"japanese": "彼らは…もう正気に戻れるのだろうか？",
						"chinese": "他们现在…还能恢复理智吗？",
						"french": "Peuvent-ils... retrouver leurs esprits maintenant ?",
						"spanish": "¿Podrán ellos... volver en sí ahora?",
						"vietnamese": "Liệu họ... có thể trở lại bình thường được không?",
						"thai": "พวกเขา... จะกลับมามีสติได้อีกไหม?",
						"hindi": "क्या वे... अब होश में आ पाएंगे?"
					},
					"emotion": "sad",
					"speaker": "mara",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "텅 빈 영혼들이 남긴 침묵. 사제의 그림자가 더욱 짙게 드리웠다.",
						"english": "The silence left by empty souls. The Priest's shadow looms darker.",
						"japanese": "空虚な魂が残した沈黙。司祭の影がさらに濃く落ちる。",
						"chinese": "空虚灵魂留下的寂静。祭司的阴影愈发深重。",
						"french": "Le silence laissé par les âmes vides. L'ombre du Prêtre s'assombrit encore.",
						"spanish": "El silencio dejado por almas vacías. La sombra del Sacerdote se cierne más oscura.",
						"vietnamese": "Sự im lặng của những linh hồn trống rỗng. Bóng tối của Linh mục càng bao trùm.",
						"thai": "ความเงียบที่หลงเหลือจากวิญญาณที่ว่างเปล่า เงาของบาทหลวงทอดยาวมืดมิดยิ่งขึ้น",
						"hindi": "खाली आत्माओं द्वारा छोड़ी गई चुप्पी। पुजारी की परछाई और गहरी हो गई।"
					}
				}
			]
		}
	]
} as const;
