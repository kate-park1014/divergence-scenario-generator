export const scenario_modern_mnemos_15_04 = {
	"scenario_id": "modern_mnemos_15_04",
	"order": 4,
	"act": "rising",
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
			"잊힌 과거의 그림자. 에코는 그 흔적을 쫓았다.",
			"파편화된 기록 속에서, 충격적인 진실이 고개를 들었다.",
			"므네모스. 그 이름은 우리가 알던 것과 달랐다.",
			"신뢰는 무너지고, 진실은 더욱 깊은 어둠 속으로 가라앉는다."
		],
		"english": [
			"Shadows of a forgotten past. Echo pursued their traces.",
			"Amidst fragmented records, a shocking truth emerged.",
			"Mnemos. The name was different from what we knew.",
			"Trust crumbled, and truth sank deeper into darkness."
		],
		"japanese": [
			"忘れ去られた過去の影。エコーはその痕跡を追った。",
			"断片化された記録の中から、衝撃的な真実が顔を出した。",
			"ムネモス。その名は、私たちが知るものとは違っていた。",
			"信頼は崩れ、真実はより深い闇へと沈んでいく。"
		],
		"chinese": [
			"被遗忘过去的阴影。艾可追寻着它们的踪迹。",
			"在碎片化的记录中，一个令人震惊的真相浮出水面。",
			"姆涅莫斯。这个名字和我们所知的不同。",
			"信任崩塌，真相沉入更深的黑暗。"
		],
		"french": [
			"Les ombres d'un passé oublié. Echo en suivait les traces.",
			"Au milieu des dossiers fragmentés, une vérité choquante a émergé.",
			"Mnemos. Ce nom était différent de ce que nous connaissions.",
			"La confiance s'est effondrée et la vérité a sombré plus profondément dans les ténèbres."
		],
		"spanish": [
			"Las sombras de un pasado olvidado. Eco siguió sus huellas.",
			"Entre registros fragmentados, una verdad impactante salió a la luz.",
			"Mnemos. Ese nombre era diferente de lo que sabíamos.",
			"La confianza se desmoronó y la verdad se hundió más en la oscuridad."
		],
		"vietnamese": [
			"Bóng tối của quá khứ lãng quên. Echo truy tìm dấu vết của chúng.",
			"Giữa những ghi chép rời rạc, một sự thật chấn động đã hé lộ.",
			"Mnemos. Cái tên đó khác với những gì chúng ta biết.",
			"Niềm tin sụp đổ, và sự thật chìm sâu hơn vào bóng tối."
		],
		"thai": [
			"เงาของอดีตที่ถูกลืม Echo ตามรอยของมัน",
			"ท่ามกลางบันทึกที่กระจัดกระจาย ความจริงอันน่าตกใจก็ปรากฏขึ้น",
			"เนมอส. ชื่อนั้นแตกต่างจากที่เราเคยรู้มา",
			"ความเชื่อใจพังทลาย และความจริงจมดิ่งลงสู่ความมืดมิดที่ลึกซึ้งยิ่งขึ้น"
		],
		"hindi": [
			"भूले हुए अतीत की परछाई। इको ने उनके निशानों का पीछा किया।",
			"खंडित अभिलेखों के बीच, एक चौंकाने वाली सच्चाई सामने आई।",
			"नेमोस। वह नाम हमारी जानकारी से अलग था।",
			"विश्वास टूट गया, और सच्चाई और भी गहरे अंधेरे में डूब गई।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 뒷골목, 폐쇄된 정보소. 에코는 파편들을 해독 중이었다.",
						"english": "City back alleys, a closed info-hub. Echo was decoding fragments.",
						"japanese": "街の裏路地、閉鎖された情報所。エコーは断片を解読中だった。",
						"chinese": "城市的小巷，一间废弃的信息站。艾可正在解码碎片。",
						"french": "Les ruelles de la ville, un centre d'information fermé. Echo décodait des fragments.",
						"spanish": "Los callejones de la ciudad, un centro de información cerrado. Eco decodificaba fragmentos.",
						"vietnamese": "Những con hẻm thành phố, một trung tâm thông tin đã đóng cửa. Echo đang giải mã các mảnh vỡ.",
						"thai": "ตรอกซอกซอยของเมือง ศูนย์ข้อมูลที่ปิดตาย Echo กำลังถอดรหัสชิ้นส่วนอยู่",
						"hindi": "शहर की पिछली गलियाँ, एक बंद सूचना केंद्र। इको टुकड़ों को डिकोड कर रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "…이거 봐. 흥미로운 걸 찾았어.",
						"english": "...Look at this. I found something interesting.",
						"japanese": "…これを見て。面白いものを見つけたよ。",
						"chinese": "……看这个。我发现了一些有趣的东西。",
						"french": "…Regarde ça. J'ai trouvé quelque chose d'intéressant.",
						"spanish": "...Mira esto. Encontré algo interesante.",
						"vietnamese": "...Nhìn này. Tôi tìm thấy một điều thú vị.",
						"thai": "...ดูนี่สิ ฉันเจออะไรที่น่าสนใจเข้าแล้ว",
						"hindi": "...इसे देखो। मुझे कुछ दिलचस्प मिला है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭔데?",
						"english": "What is it?",
						"japanese": "何？",
						"chinese": "什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "므네모스… 단순히 채무자가 아니었어. 옛 조직의 핵심 인물이었어. '서기장'이라고 불렸던 흔적이 있어.",
						"english": "Mnemos... wasn't just a debtor. They were a key figure in an old organization. There are traces of them being called 'Secretary-General'.",
						"japanese": "ムネモス…単なる債務者じゃなかった。昔の組織の核心人物だった。'書記長'と呼ばれていた形跡がある。",
						"chinese": "姆涅莫斯……不只是一个债务人。他们曾是某个旧组织的核心人物。有证据表明他们被称为“书记长”。",
						"french": "Mnemos… n'était pas seulement un débiteur. C'était une figure clé d'une ancienne organisation. Il y a des traces indiquant qu'il était appelé 'Secrétaire Général'.",
						"spanish": "Mnemos... no era solo un deudor. Era una figura clave en una antigua organización. Hay indicios de que lo llamaban 'Secretario General'.",
						"vietnamese": "Mnemos... không chỉ là một con nợ. Họ từng là nhân vật chủ chốt trong một tổ chức cũ. Có dấu vết cho thấy họ được gọi là 'Tổng thư ký'.",
						"thai": "เนมอส... ไม่ใช่แค่ลูกหนี้ พวกเขาเป็นบุคคลสำคัญในองค์กรเก่า มีร่องรอยที่บ่งบอกว่าถูกเรียกว่า 'เลขาธิการ'",
						"hindi": "नेमोस... सिर्फ एक कर्जदार नहीं था। वे एक पुराने संगठन के प्रमुख व्यक्ति थे। ऐसे निशान हैं कि उन्हें 'महासचिव' कहा जाता है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "서기장?",
						"english": "Secretary-General?",
						"japanese": "書記長？",
						"chinese": "书记长？",
						"french": "Secrétaire Général ?",
						"spanish": "¿Secretario General?",
						"vietnamese": "Tổng thư ký?",
						"thai": "เลขาธิการ?",
						"hindi": "महासचिव?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록은 파편화되어 있지만… '서기장 므네모스'라는 명칭은 일관되게 나와.",
						"english": "The records are fragmented, but the designation 'Secretary-General Mnemos' appears consistently.",
						"japanese": "記録は断片化されているが…「書記長ムネモス」という呼称は一貫して現れる。",
						"chinese": "记录虽然是碎片化的……但“书记长姆涅莫斯”这个称谓却始终一致地出现。",
						"french": "Les dossiers sont fragmentés, mais la désignation 'Secrétaire Général Mnemos' apparaît de manière cohérente.",
						"spanish": "Los registros están fragmentados, pero la designación 'Secretario General Mnemos' aparece de forma consistente.",
						"vietnamese": "Các ghi chép bị phân mảnh, nhưng danh xưng 'Tổng thư ký Mnemos' xuất hiện một cách nhất quán.",
						"thai": "บันทึกถูกแบ่งออกเป็นส่วนๆ แต่ชื่อ 'เลขาธิการเนมอส' ปรากฏขึ้นอย่างสอดคล้องกัน",
						"hindi": "अभिलेख खंडित हैं, लेकिन 'महासचिव नेमोस' पदनाम लगातार दिखाई देता है।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨 의미인데?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 조직은 도시의 모든 정보를 기록하고 통제했어. 단순한 갱단이 아니었지.",
						"english": "This organization recorded and controlled all information in the city. It wasn't just a simple gang.",
						"japanese": "この組織は都市のあらゆる情報を記録し、統制していた。単なるギャングではなかったのだ。",
						"chinese": "这个组织记录并控制着城市的所有信息。它不仅仅是一个简单的帮派。",
						"french": "Cette organisation enregistrait et contrôlait toutes les informations de la ville. Ce n'était pas un simple gang.",
						"spanish": "Esta organización registraba y controlaba toda la información de la ciudad. No era solo una simple banda.",
						"vietnamese": "Tổ chức này đã ghi lại và kiểm soát mọi thông tin trong thành phố. Nó không chỉ là một băng đảng đơn thuần.",
						"thai": "องค์กรนี้บันทึกและควบคุมข้อมูลทั้งหมดในเมือง มันไม่ใช่แค่แก๊งธรรมดา.",
						"hindi": "इस संगठन ने शहर की सभी जानकारी को दर्ज और नियंत्रित किया। यह सिर्फ एक साधारण गिरोह नहीं था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 알던 정보랑 달라.",
						"english": "This information is different from what we knew.",
						"japanese": "私たちが知っていた情報とは違う。",
						"chinese": "这和我们已知的信息不同。",
						"french": "Ces informations sont différentes de ce que nous savions.",
						"spanish": "Esta información es diferente a la que conocíamos.",
						"vietnamese": "Thông tin này khác với những gì chúng ta biết.",
						"thai": "ข้อมูลนี้แตกต่างจากที่เรารู้.",
						"hindi": "यह जानकारी हमारे जानने से अलग है।"
					}
				},
				{
					"content": {
						"korean": "그래. 누군가 의도적으로 정보를 감추고 왜곡했을 가능성이 커.",
						"english": "Yes. It's highly likely someone intentionally hid and distorted the information.",
						"japanese": "ああ。誰かが意図的に情報を隠蔽し、歪曲した可能性が高い。",
						"chinese": "是的。很可能有人故意隐藏和歪曲了信息。",
						"french": "Oui. Il est fort probable que quelqu'un ait intentionnellement caché et déformé les informations.",
						"spanish": "Sí. Es muy probable que alguien haya ocultado y distorsionado intencionadamente la información.",
						"vietnamese": "Phải. Rất có thể ai đó đã cố tình che giấu và xuyên tạc thông tin.",
						"thai": "ใช่. มีความเป็นไปได้สูงที่ใครบางคนจงใจซ่อนเร้นและบิดเบือนข้อมูล.",
						"hindi": "हाँ। बहुत संभावना है कि किसी ने जानबूझकर जानकारी छिपाई और विकृत की हो।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "더 깊이 들어가보니… 이들이 도시의 '빚'과 '맹세'를 관리했다는 흔적이 나와.",
						"english": "Delving deeper... traces show they managed the city's 'debts' and 'oaths'.",
						"japanese": "さらに深く掘り下げると… 彼らが都市の「負債」と「誓約」を管理していた痕跡が見つかる。",
						"chinese": "深入调查后发现… 他们管理着城市的“债务”和“誓言”。",
						"french": "En creusant plus profondément… des traces montrent qu'ils géraient les 'dettes' et les 'serments' de la ville.",
						"spanish": "Al indagar más a fondo... hay rastros que muestran que gestionaban las 'deudas' y los 'juramentos' de la ciudad.",
						"vietnamese": "Khi đi sâu hơn… có dấu vết cho thấy họ quản lý 'các khoản nợ' và 'lời thề' của thành phố.",
						"thai": "เมื่อเจาะลึกลงไป... พบร่องรอยว่าพวกเขาจัดการ 'หนี้' และ 'คำสาบาน' ของเมือง.",
						"hindi": "और गहराई से जाने पर... निशान मिलते हैं कि वे शहर के 'कर्जों' और 'शपथों' का प्रबंधन करते थे।"
					}
				},
				{
					"content": {
						"korean": "그럼 므네모스가 그 빚을 회수하는 게 아니었단 말이야?",
						"english": "So Mnemos wasn't collecting those debts?",
						"japanese": "じゃあムネモスがその借金を回収していたわけじゃないのか？",
						"chinese": "那么，涅莫斯不是在回收那些债务吗？",
						"french": "Alors Mnemos ne recouvrait pas ces dettes ?",
						"spanish": "¿Entonces Mnemos no estaba cobrando esas deudas?",
						"vietnamese": "Vậy Mnemos không phải là người thu hồi những khoản nợ đó sao?",
						"thai": "งั้น Mnemos ไม่ได้กำลังทวงหนี้เหล่านั้นเหรอ?",
						"hindi": "तो क्या म्नेमोस उन कर्जों को वसूल नहीं कर रहा था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "정확히는… 그는 관리자였어. 그 시스템을 설계한 사람 중 하나였거나.",
						"english": "More precisely... he was an administrator. Or one of the people who designed that system.",
						"japanese": "正確には… 彼は管理者だった。あるいは、そのシステムを設計した人間の一人だったのかもしれない。",
						"chinese": "准确地说… 他是一个管理者。或者说是设计那个系统的人之一。",
						"french": "Plus précisément… il était un administrateur. Ou l'une des personnes qui a conçu ce système.",
						"spanish": "Más precisamente... él era un administrador. O una de las personas que diseñó ese sistema.",
						"vietnamese": "Chính xác hơn… anh ta là một người quản lý. Hoặc là một trong những người đã thiết kế hệ thống đó.",
						"thai": "พูดให้ถูกคือ... เขาเป็นผู้ดูแล. หรืออาจเป็นหนึ่งในผู้ที่ออกแบบระบบนั้น.",
						"hindi": "ठीक-ठीक कहें तो... वह एक प्रशासक था। या उस प्रणाली को डिजाइन करने वालों में से एक था।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리는 누구를 쫓고 있던 거지? 처음부터 속은 건가?",
						"english": "So who were we chasing then? Were we deceived from the start?",
						"japanese": "じゃあ私たちは誰を追っていたんだ？最初から騙されていたのか？",
						"chinese": "那么我们一直在追捕谁？我们从一开始就被骗了吗？",
						"french": "Alors qui poursuivions-nous ? Avons-nous été trompés dès le début ?",
						"spanish": "¿Entonces a quién estábamos persiguiendo? ¿Nos engañaron desde el principio?",
						"vietnamese": "Vậy thì chúng ta đã đuổi theo ai? Chúng ta đã bị lừa ngay từ đầu sao?",
						"thai": "แล้วเรากำลังตามล่าใครอยู่? เราถูกหลอกตั้งแต่แรกเหรอ?",
						"hindi": "तो हम किसका पीछा कर रहे थे? क्या हमें शुरू से ही धोखा दिया गया था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "너희가 믿었던 것들이… 다 사실은 아니었을 수도 있어.",
						"english": "What you believed... might not all have been true.",
						"japanese": "君たちが信じていたこと… それらはすべて真実ではなかったかもしれない。",
						"chinese": "你们所相信的… 可能并非全部属实。",
						"french": "Ce que vous croyiez… n'était peut-être pas entièrement vrai.",
						"spanish": "Lo que creísteis... puede que no fuera del todo cierto.",
						"vietnamese": "Những gì các ngươi tin tưởng… có thể không phải tất cả đều là sự thật.",
						"thai": "สิ่งที่พวกเจ้าเชื่อ... อาจจะไม่ใช่ความจริงทั้งหมด.",
						"hindi": "जो कुछ तुमने माना था... वह सब सच नहीं भी हो सकता है।"
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 정보를 계속 파헤치면 위험해져. 그들이 가만두지 않을 거야.",
						"english": "If you keep digging into this information, it'll get dangerous. They won't leave you alone.",
						"japanese": "この情報を掘り下げ続けると危険だ。彼らは君たちを放っておかないだろう。",
						"chinese": "如果你继续深挖这些信息，会很危险。他们不会善罢甘休的。",
						"french": "Si vous continuez à creuser ces informations, ça deviendra dangereux. Ils ne vous laisseront pas tranquilles.",
						"spanish": "Si sigues investigando esta información, se volverá peligroso. No te dejarán en paz.",
						"vietnamese": "Nếu tiếp tục đào sâu thông tin này, sẽ rất nguy hiểm. Bọn họ sẽ không để yên cho các ngươi đâu.",
						"thai": "ถ้ายังสืบค้นข้อมูลนี้ต่อไป มันจะอันตราย พวกเขาจะไม่ปล่อยพวกเจ้าไว้.",
						"hindi": "अगर तुम इस जानकारी को खोदते रहोगे तो यह खतरनाक हो जाएगा। वे तुम्हें अकेला नहीं छोड़ेंगे।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "우린 멈출 수 없어. 진실을 알아야 해.",
						"english": "We can't stop. We need to know the truth.",
						"japanese": "止まれない。真実を知る必要がある。",
						"chinese": "我们不能停下。我们必须知道真相。",
						"french": "Nous ne pouvons pas nous arrêter. Nous devons connaître la vérité.",
						"spanish": "No podemos detenernos. Necesitamos saber la verdad.",
						"vietnamese": "Chúng ta không thể dừng lại. Chúng ta cần biết sự thật.",
						"thai": "เราหยุดไม่ได้ เราต้องรู้ความจริง",
						"hindi": "हम रुक नहीं सकते। हमें सच जानना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 진실이… 네가 감당할 수 없을 정도로 추악할 수도 있어.",
						"english": "That truth... might be too ugly for you to bear.",
						"japanese": "その真実が… 君には耐えきれないほど醜いものかもしれない。",
						"chinese": "那个真相… 可能丑陋到你无法承受。",
						"french": "Cette vérité... pourrait être trop laide pour que tu puisses la supporter.",
						"spanish": "Esa verdad... podría ser demasiado horrible para que la soportes.",
						"vietnamese": "Sự thật đó... có thể quá tàn khốc để ngươi chịu đựng.",
						"thai": "ความจริงนั้น... อาจจะน่าเกลียดเกินกว่าที่เจ้าจะรับไหว",
						"hindi": "वह सच… इतना बदसूरत हो सकता है कि तुम उसे सह न पाओ।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "상관없어.",
						"english": "I don't care.",
						"japanese": "構わない。",
						"chinese": "无所谓。",
						"french": "Peu importe.",
						"spanish": "No me importa.",
						"vietnamese": "Không sao cả.",
						"thai": "ไม่สนหรอก",
						"hindi": "कोई फर्क नहीं पड़ता।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "알겠어. 그럼 조심해. 놈들은… 네 모든 것을 기록하고 있으니.",
						"english": "Alright. Then be careful. They... are recording your every move.",
						"japanese": "分かった。なら気をつけろ。奴らは… お前の全てを記録しているからな。",
						"chinese": "知道了。那你就小心点。他们… 正在记录你的一切。",
						"french": "D'accord. Alors sois prudent. Ils... enregistrent chacun de tes faits et gestes.",
						"spanish": "De acuerdo. Entonces ten cuidado. Ellos... están registrando cada uno de tus movimientos.",
						"vietnamese": "Được rồi. Vậy thì cẩn thận. Bọn chúng... đang ghi lại mọi thứ của ngươi.",
						"thai": "เข้าใจแล้ว งั้นก็ระวังตัวไว้ พวกมัน... กำลังบันทึกทุกสิ่งของเจ้าอยู่",
						"hindi": "ठीक है। तो सावधान रहना। वे… तुम्हारी हर बात रिकॉर्ड कर रहे हैं।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…기록은… 영원하다… 언젠가… 다시…",
						"english": "...The record... is eternal... Someday... again...",
						"japanese": "…記録は…永遠だ…いつか…また…",
						"chinese": "…记录…永恒不朽…终有一天…再次…",
						"french": "...Le registre... est éternel... Un jour... encore...",
						"spanish": "...El registro... es eterno... Algún día... de nuevo...",
						"vietnamese": "...Kỷ lục... là vĩnh cửu... Một ngày nào đó... lại...",
						"thai": "...บันทึก...เป็นนิรันดร์...สักวันหนึ่ง...อีกครั้ง...",
						"hindi": "...रिकॉर्ड... अमर है... कभी... फिर से..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어. 므네모스, 널 찾아낼 거야.",
						"english": "It's not over yet. Mnemos, I'll find you.",
						"japanese": "まだ終わってない。ムネモス、お前を見つけ出す。",
						"chinese": "还没结束。姆涅莫斯，我会找到你的。",
						"french": "Ce n'est pas encore fini. Mnemos, je te retrouverai.",
						"spanish": "Aún no ha terminado. Mnemos, te encontraré.",
						"vietnamese": "Vẫn chưa kết thúc. Mnemos, ta sẽ tìm thấy ngươi.",
						"thai": "ยังไม่จบ Mnemos ฉันจะตามหานายให้เจอ",
						"hindi": "अभी खत्म नहीं हुआ है। न्मेमोस, मैं तुम्हें ढूंढ निकालूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흩어진 파편들 속에서, 진정한 빚의 기록이 조금씩 모습을 드러냈다. 그러나 아직, 모든 이야기는 시작에 불과했다.",
						"english": "Amidst the scattered fragments, the true record of debt slowly began to reveal itself. Yet, all stories were but a beginning.",
						"japanese": "散りばめられた破片の中で、真の負債の記録が少しずつ姿を現した。しかし、まだ全ての物語は始まりに過ぎなかった。",
						"chinese": "在散落的碎片中，真正的债务记录渐渐显露出来。然而，所有故事都只是一个开始。",
						"french": "Au milieu des fragments éparpillés, le véritable registre de la dette commença lentement à se révéler. Pourtant, toutes les histoires n'étaient qu'un début.",
						"spanish": "Entre los fragmentos dispersos, el verdadero registro de la deuda comenzó a revelarse lentamente. Sin embargo, todas las historias eran solo el principio.",
						"vietnamese": "Giữa những mảnh vỡ tan tác, ghi chép thực sự về khoản nợ dần dần lộ diện. Tuy nhiên, mọi câu chuyện chỉ mới là khởi đầu.",
						"thai": "ท่ามกลางเศษเสี้ยวที่กระจัดกระจาย บันทึกหนี้ที่แท้จริงเริ่มปรากฏให้เห็นทีละน้อย แต่ทว่าเรื่องราวทั้งหมดก็เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "बिखरे हुए टुकड़ों के बीच, कर्ज का सच्चा रिकॉर्ड धीरे-धीरे सामने आने लगा। फिर भी, सभी कहानियाँ बस एक शुरुआत थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "신뢰할 수 없는 목소리들 속에서, 진실은 더욱 교묘하게 숨어있었다.",
						"english": "Amidst unreliable voices, the truth was hidden even more subtly.",
						"japanese": "信頼できない声の中で、真実はより巧妙に隠されていた。",
						"chinese": "在不可靠的声音中，真相被隐藏得更加巧妙。",
						"french": "Au milieu des voix indignes de confiance, la vérité était cachée encore plus subtilement.",
						"spanish": "Entre voces poco confiables, la verdad se ocultaba aún más astutamente.",
						"vietnamese": "Giữa những giọng nói không đáng tin cậy, sự thật càng bị che giấu khéo léo hơn.",
						"thai": "ท่ามกลางเสียงที่ไม่น่าเชื่อถือ ความจริงกลับซ่อนเร้นอย่างแนบเนียนยิ่งขึ้น",
						"hindi": "अविश्वसनीय आवाज़ों के बीच, सच्चाई और भी चतुराई से छिपी हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "기록의 심장부. 어둠 속에서 거대한 그림자가 일렁였다.",
						"english": "The heart of the records. A colossal shadow flickered in the darkness.",
						"japanese": "記録の心臓部。闇の中で巨大な影が揺らめいた。",
						"chinese": "记录的核心。一个巨大的影子在黑暗中摇曳。",
						"french": "Le cœur des archives. Une ombre colossale vacillait dans l'obscurité.",
						"spanish": "El corazón de los registros. Una sombra colosal parpadeó en la oscuridad.",
						"vietnamese": "Trung tâm của hồ sơ. Một bóng đen khổng lồ chập chờn trong bóng tối.",
						"thai": "ใจกลางของบันทึก เงาขนาดมหึมาสั่นไหวในความมืด",
						"hindi": "अभिलेखों का हृदय। अंधेरे में एक विशाल छाया लहराई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 온 건가, 방해꾼들.",
						"english": "So you've made it this far, intruders.",
						"japanese": "ここまで来たか、邪魔者どもめ。",
						"chinese": "你们竟然走到这里了，入侵者。",
						"french": "Vous êtes donc arrivés jusqu'ici, intrus.",
						"spanish": "Así que han llegado hasta aquí, intrusos.",
						"vietnamese": "Ngươi đã đến được đây sao, những kẻ quấy rối.",
						"thai": "มาถึงนี่แล้วสินะ พวกตัวก่อกวน",
						"hindi": "तो तुम यहाँ तक पहुँच गए, घुसपैठियों।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 감추고 있는 게 뭔데?",
						"english": "What are you hiding?",
						"japanese": "何を隠している？",
						"chinese": "你在隐瞒什么？",
						"french": "Qu'est-ce que tu caches ?",
						"spanish": "¿Qué estás escondiendo?",
						"vietnamese": "Ngươi đang che giấu điều gì?",
						"thai": "เจ้ากำลังซ่อนอะไรไว้?",
						"hindi": "तुम क्या छिपा रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "불필요한 진실은 파괴되어야 한다. 그게 이 도시의 규칙이지.",
						"english": "Unnecessary truths must be destroyed. That is the rule of this city.",
						"japanese": "不要な真実は破壊されるべきだ。それがこの都市のルールだ。",
						"chinese": "不必要的真相必须被销毁。这是这座城市的规则。",
						"french": "Les vérités inutiles doivent être détruites. C'est la règle de cette ville.",
						"spanish": "Las verdades innecesarias deben ser destruidas. Esa es la regla de esta ciudad.",
						"vietnamese": "Những sự thật không cần thiết phải bị phá hủy. Đó là quy tắc của thành phố này.",
						"thai": "ความจริงที่ไม่จำเป็นต้องถูกทำลาย นั่นคือกฎของเมืองนี้",
						"hindi": "अनावश्यक सच्चाइयों को नष्ट किया जाना चाहिए। यही इस शहर का नियम है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마! 누가 정한 규칙인데!",
						"english": "Don't make me laugh! Who made that rule?!",
						"japanese": "笑わせるな！誰が決めたルールだ！",
						"chinese": "别开玩笑了！这是谁定的规矩！",
						"french": "Ne me fais pas rire ! Qui a établi cette règle ?!",
						"spanish": "¡No me hagas reír! ¡¿Quién puso esa regla?!",
						"vietnamese": "Đừng có đùa! Quy tắc đó là do ai đặt ra chứ!",
						"thai": "อย่ามาล้อเล่น! ใครเป็นคนตั้งกฎนั่นกันแน่!",
						"hindi": "हँसाओ मत! यह नियम किसने बनाया?!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "넌 그 대가를 치를 것이다.",
						"english": "You will pay the price.",
						"japanese": "お前はその代償を払うことになるだろう。",
						"chinese": "你将为此付出代价。",
						"french": "Tu paieras le prix.",
						"spanish": "Pagarás el precio.",
						"vietnamese": "Ngươi sẽ phải trả giá.",
						"thai": "เจ้าจะต้องชดใช้",
						"hindi": "तुम्हें इसकी कीमत चुकानी होगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "절대 막을 수 없어!",
						"english": "You can't stop this!",
						"japanese": "止められない！",
						"chinese": "无法阻挡！",
						"french": "Vous ne pouvez pas m'arrêter !",
						"spanish": "¡No puedes detenerme!",
						"vietnamese": "Không thể ngăn cản!",
						"thai": "ไม่มีทางหยุดได้!",
						"hindi": "कोई नहीं रोक सकता!"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 집어삼킬 것이다.",
						"english": "Fools. The truth will consume you.",
						"japanese": "愚か者め。真実がお前たちを飲み込むだろう。",
						"chinese": "愚蠢之人。真相将吞噬你们。",
						"french": "Fous. La vérité vous consumera.",
						"spanish": "Necios. La verdad os consumirá.",
						"vietnamese": "Những kẻ ngu ngốc. Sự thật sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลา ความจริงจะกลืนกินพวกเจ้า",
						"hindi": "मूर्खों। सत्य तुम्हें निगल जाएगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 이렇게 끝낼 순 없어!",
						"english": "...Damn it. It can't end like this!",
						"japanese": "…くそ。こんな終わり方はできない！",
						"chinese": "…该死。不能就这样结束！",
						"french": "...Mince. Ça ne peut pas se terminer comme ça !",
						"spanish": "...Maldita sea. ¡No puede terminar así!",
						"vietnamese": "...Chết tiệt. Không thể kết thúc như thế này được!",
						"thai": "...ให้ตายสิ จะจบแบบนี้ไม่ได้!",
						"hindi": "...धिक्कार है। यह ऐसे खत्म नहीं हो सकता!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기록은… 너희의 패배를 새길 것이다.",
						"english": "The record... will engrave your defeat.",
						"japanese": "記録は…お前たちの敗北を刻むだろう。",
						"chinese": "记录…将刻下你们的失败。",
						"french": "Le registre... gravera votre défaite.",
						"spanish": "El registro... grabará vuestra derrota.",
						"vietnamese": "Ghi chép... sẽ khắc sâu thất bại của các ngươi.",
						"thai": "บันทึก...จะจารึกความพ่ายแพ้ของพวกเจ้า",
						"hindi": "रिकॉर्ड... तुम्हारी हार को अंकित करेगा।"
					}
				}
			]
		}
	]
} as const;
