export const scenario_modern_kjang_14_04 = {
	"scenario_id": "modern_kjang_14_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오래된 장부 속, 숨겨진 진실.",
			"K-jang의 진짜 얼굴이 드러나고, '삼일회'의 그림자가 드리워진다.",
			"니아의 정보는 과연, 거대한 악의 실체를 파헤칠 수 있을까?",
			"이제, 누구도 멈출 수 없는 추적이 시작된다."
		],
		"english": [
			"Hidden truth in an old ledger.",
			"K-jang's true face is revealed, and 'Samilhoe's' shadow falls.",
			"Can Nia's information truly uncover the truth of this great evil?",
			"Now, an unstoppable pursuit begins."
		],
		"japanese": [
			"古き帳簿に隠された真実。",
			"K-jangの素顔が暴かれ、『三日会』の影が忍び寄る。",
			"ニアの情報は果たして、巨大な悪の正体を暴けるのか？",
			"今、誰にも止められない追跡が始まる。"
		],
		"chinese": [
			"旧账簿中，隐藏的真相。",
			"K-jang的真面目浮现，‘三日会’的阴影笼罩。",
			"尼亚的情报，究竟能否揭露巨大邪恶的真面目？",
			"现在，一场无人能挡的追捕开始了。"
		],
		"french": [
			"Une vérité cachée dans un vieux registre.",
			"Le vrai visage de K-jang est révélé, et l'ombre de 'Samilhoe' plane.",
			"Les informations de Nia pourront-elles vraiment révéler la véritable nature de ce grand mal ?",
			"Maintenant, une poursuite imparable commence."
		],
		"spanish": [
			"La verdad oculta en un viejo libro de contabilidad.",
			"El verdadero rostro de K-jang se revela, y la sombra de 'Samilhoe' se cierne.",
			"¿Podrá la información de Nia desenterrar la verdadera naturaleza de este gran mal?",
			"Ahora, una persecución imparable comienza."
		],
		"vietnamese": [
			"Sự thật ẩn giấu trong cuốn sổ cũ.",
			"Bộ mặt thật của K-jang lộ diện, và bóng đen của 'Samilhoe' bao trùm.",
			"Liệu thông tin của Nia có thực sự vén màn sự thật về thế lực tà ác khổng lồ này?",
			"Giờ đây, một cuộc truy đuổi không thể ngăn cản bắt đầu."
		],
		"thai": [
			"ความจริงที่ซ่อนอยู่ในบัญชีเก่า.",
			"ตัวตนที่แท้จริงของ K-jang เปิดเผย และเงาของ 'ซัมอิลฮเว' คืบคลานเข้ามา.",
			"ข้อมูลของเนียจะสามารถเปิดเผยตัวตนที่แท้จริงของความชั่วร้ายอันยิ่งใหญ่นี้ได้หรือไม่?",
			"บัดนี้ การไล่ล่าที่ไม่มีใครหยุดยั้งได้เริ่มต้นขึ้นแล้ว."
		],
		"hindi": [
			"पुरानी बहीखाते में छिपी सच्चाई।",
			"के-जंग का असली चेहरा सामने आता है, और 'सामिलहो' की छाया छा जाती है।",
			"क्या निया की जानकारी इस महान बुराई की सच्चाई का पता लगा पाएगी?",
			"अब, एक अटूट पीछा शुरू होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "K-jang… 그는 평범한 알바생이 아니야. 확신해.",
						"english": "K-jang... he's no ordinary part-timer. I'm sure of it.",
						"japanese": "K-jang…彼はただのバイトじゃない。確信してる。",
						"chinese": "K-jang…他不是普通的兼职生。我确信。",
						"french": "K-jang... ce n'est pas un simple employé à temps partiel. J'en suis sûre.",
						"spanish": "K-jang... no es un empleado a tiempo parcial cualquiera. Estoy segura.",
						"vietnamese": "K-jang... hắn không phải là nhân viên làm thêm bình thường. Tôi chắc chắn.",
						"thai": "K-jang... เขาไม่ใช่พนักงานพาร์ทไทม์ธรรมดา ฉันมั่นใจ.",
						"hindi": "के-जंग... वह कोई साधारण अंशकालिक कर्मचारी नहीं है। मुझे यकीन है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 발견했어?",
						"english": "What are you talking about? What did you find?",
						"japanese": "何を言ってるんだ？何を見つけたの？",
						"chinese": "你在说什么？你发现了什么？",
						"french": "De quoi parles-tu ? Qu'as-tu trouvé ?",
						"spanish": "¿De qué hablas? ¿Qué encontraste?",
						"vietnamese": "Anh đang nói gì vậy? Anh đã tìm thấy gì?",
						"thai": "คุณกำลังพูดถึงอะไร? คุณเจออะไร?",
						"hindi": "तुम क्या कह रहे हो? तुमने क्या पाया?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "편의점 장부… 단순한 매출 기록이 아니야. 수상한 점이 너무 많아.",
						"english": "The convenience store ledger... it's not just a sales record. Too many suspicious points.",
						"japanese": "コンビニの帳簿…単なる売上記録じゃない。怪しい点が多すぎる。",
						"chinese": "便利店账簿…不是简单的销售记录。疑点太多了。",
						"french": "Le registre du dépanneur... ce n'est pas juste un relevé de ventes. Il y a trop de points suspects.",
						"spanish": "El libro de contabilidad de la tienda... no es solo un registro de ventas. Hay demasiados puntos sospechosos.",
						"vietnamese": "Cuốn sổ của cửa hàng tiện lợi... đó không chỉ là sổ ghi doanh thu. Có quá nhiều điểm đáng ngờ.",
						"thai": "สมุดบัญชีร้านสะดวกซื้อ... ไม่ใช่แค่บันทึกยอดขาย มีจุดน่าสงสัยเยอะเกินไป.",
						"hindi": "सुविधा स्टोर का बहीखाता... यह सिर्फ बिक्री का रिकॉर्ड नहीं है। बहुत सारे संदिग्ध बिंदु हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "내 정보망으로 확인했어. '삼일회'… 그 조직과 K-jang은 연결되어 있어.",
						"english": "I confirmed it through my intel network. 'Samilhoe'... that organization and K-jang are connected.",
						"japanese": "私の情報網で確認した。『三日会』…あの組織とK-jangは繋がっている。",
						"chinese": "我通过我的情报网确认了。‘三日会’…那个组织和K-jang有联系。",
						"french": "Je l'ai confirmé via mon réseau d'information. 'Samilhoe'... cette organisation et K-jang sont liés.",
						"spanish": "Lo confirmé a través de mi red de inteligencia. 'Samilhoe'... esa organización y K-jang están conectados.",
						"vietnamese": "Tôi đã xác nhận qua mạng lưới thông tin của mình. 'Samilhoe'... tổ chức đó và K-jang có liên hệ.",
						"thai": "ฉันยืนยันแล้วด้วยเครือข่ายข้อมูลของฉัน 'ซัมอิลฮเว'... องค์กรนั้นกับ K-jang เชื่อมโยงกัน.",
						"hindi": "मैंने अपने खुफिया नेटवर्क से इसकी पुष्टि की है। 'सामिलहो'... वह संगठन और के-जंग जुड़े हुए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "삼일회? 그게 뭔데.",
						"english": "Samilhoe? What's that?",
						"japanese": "三日会？それは何だ。",
						"chinese": "三日会？那是什么？",
						"french": "Samilhoe ? Qu'est-ce que c'est ?",
						"spanish": "¿Samilhoe? ¿Qué es eso?",
						"vietnamese": "Samilhoe? Đó là gì?",
						"thai": "ซัมอิลฮเว? นั่นคืออะไร?",
						"hindi": "सामिलहो? वह क्या है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "거대한 불법 자금 조직이야. 이 편의점은 위장 거점일 뿐…",
						"english": "It's a massive illegal money organization. This convenience store is just a front...",
						"japanese": "巨大な不法資金組織だ。このコンビニは、ただの隠れ蓑にすぎない…",
						"chinese": "这是一个巨大的非法资金组织。这家便利店只是一个伪装据点而已…",
						"french": "C'est une organisation de blanchiment d'argent illégale massive. Ce dépanneur n'est qu'une façade...",
						"spanish": "Es una organización masiva de dinero ilegal. Esta tienda de conveniencia es solo una fachada...",
						"vietnamese": "Đó là một tổ chức tài chính bất hợp pháp khổng lồ. Cửa hàng tiện lợi này chỉ là một cơ sở ngụy trang thôi...",
						"thai": "เป็นองค์กรการเงินผิดกฎหมายขนาดใหญ่ ร้านสะดวกซื้อนี้เป็นเพียงฐานปลอมตัวเท่านั้น...",
						"hindi": "यह एक विशाल अवैध धन संगठन है। यह सुविधा स्टोर सिर्फ एक मोर्चा है..."
					},
					"type": "speech"
				},
				{
					"speaker": "nia",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "편의점 재고 불일치… 그게 바로 자금 세탁의 흔적이야.",
						"english": "Convenience store inventory discrepancies... That's a money laundering trail.",
						"japanese": "コンビニの在庫不一致…それがマネーロンダリングの痕跡だ。",
						"chinese": "便利店库存不符…那就是洗钱的痕迹。",
						"french": "Les écarts d'inventaire du dépanneur... C'est la trace du blanchiment d'argent.",
						"spanish": "Discrepancias en el inventario de la tienda... Esa es la huella del lavado de dinero.",
						"vietnamese": "Chênh lệch hàng tồn kho ở cửa hàng tiện lợi... Đó chính là dấu vết của rửa tiền.",
						"thai": "สินค้าคงคลังร้านสะดวกซื้อไม่ตรง... นั่นแหละคือร่องรอยการฟอกเงิน",
						"hindi": "सुविधा स्टोर की इन्वेंट्री में विसंगतियाँ... वही मनी लॉन्ड्रिंग का निशान है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "K-jang의 장부… 그게 모든 핵심이야. 불법 자금의 흐름이 전부 거기에 기록되어 있을 거야.",
						"english": "K-jang's ledger... That's the key. The flow of illicit funds will all be recorded there.",
						"japanese": "K-jangの帳簿…それがすべてだ。不正資金の流れはすべてそこに記録されているはずだ。",
						"chinese": "K-jang的账本…那是一切的关键。非法资金的流动都会记录在那里。",
						"french": "Le grand livre de K-jang... C'est la clé de tout. Le flux des fonds illicites y sera entièrement enregistré.",
						"spanish": "El libro de K-jang... Esa es la clave. El flujo de fondos ilícitos estará todo registrado allí.",
						"vietnamese": "Sổ cái của K-jang... Đó là tất cả mấu chốt. Dòng tiền bất hợp pháp sẽ được ghi lại hết ở đó.",
						"thai": "สมุดบัญชีของ K-jang... นั่นแหละคือหัวใจสำคัญ กระแสเงินผิดกฎหมายทั้งหมดจะต้องบันทึกอยู่ในนั้น",
						"hindi": "के-जंग का बहीखाता... वही सब कुछ है। अवैध धन का प्रवाह सब कुछ उसमें दर्ज होगा।"
					}
				},
				{
					"content": {
						"korean": "그 장부를 찾아야 해. 어디에 숨겨져 있을까?",
						"english": "We need to find that ledger. Where could it be hidden?",
						"japanese": "あの帳簿を見つけないと。どこに隠されているんだろう？",
						"chinese": "我们必须找到那本账本。它会藏在哪里呢？",
						"french": "Nous devons trouver ce grand livre. Où pourrait-il être caché ?",
						"spanish": "Tenemos que encontrar ese libro. ¿Dónde estará escondido?",
						"vietnamese": "Chúng ta phải tìm cuốn sổ đó. Nó có thể được giấu ở đâu?",
						"thai": "เราต้องหาสมุดบัญชีนั่นให้เจอ มันซ่อนอยู่ที่ไหนนะ?",
						"hindi": "हमें वह बहीखाता ढूंढना होगा। वह कहाँ छिपा हो सकता है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "그는 장부에 광적으로 집착해. 분명 가까운 어딘가에 숨겨뒀을 거야.",
						"english": "He's obsessed with the ledger. He must have hidden it somewhere close.",
						"japanese": "彼は帳簿に病的なくらい執着している。きっと近くのどこかに隠したはずだ。",
						"chinese": "他痴迷于账本。肯定把它藏在附近某个地方了。",
						"french": "Il est obsédé par le grand livre. Il a sûrement dû le cacher quelque part à proximité.",
						"spanish": "Está obsesionado con el libro. Seguro lo escondió en algún lugar cercano.",
						"vietnamese": "Hắn ta bị ám ảnh bởi cuốn sổ đó. Chắc chắn hắn đã giấu nó ở đâu đó gần đây.",
						"thai": "เขาหมกมุ่นอยู่กับสมุดบัญชีเล่มนั้น เขาคงซ่อนมันไว้ที่ไหนสักแห่งใกล้ๆ นี้แน่",
						"hindi": "वह बहीखाते को लेकर जुनूनी है। उसने इसे कहीं पास में छिपा रखा होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 조심해야 해. 이제 K-jang은 더 이상 평범한 알바생이 아니야.",
						"english": "But we need to be careful. K-jang isn't just a part-timer anymore.",
						"japanese": "だが、気をつけろ。K-jangはもうただのアルバイトじゃない。",
						"chinese": "但我们必须小心。K-jang不再是普通的兼职生了。",
						"french": "Mais nous devons faire attention. K-jang n'est plus un simple employé à temps partiel.",
						"spanish": "Pero tenemos que tener cuidado. K-jang ya no es un simple trabajador a tiempo parcial.",
						"vietnamese": "Nhưng chúng ta phải cẩn thận. K-jang không còn là một nhân viên bán thời gian bình thường nữa.",
						"thai": "แต่ต้องระวังให้ดี ตอนนี้ K-jang ไม่ใช่แค่พนักงานพาร์ทไทม์ธรรมดาแล้ว",
						"hindi": "लेकिन हमें सावधान रहना होगा। के-जंग अब सिर्फ एक पार्ट-टाइमर नहीं है।"
					},
					"speaker": "nia",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "nia",
					"emotion": "angry",
					"content": {
						"korean": "'삼일회'는 상상 이상으로 거대해. K-jang은 그저 중간 관리자일 뿐이야.",
						"english": "'Samilhoe' is bigger than we imagined. K-jang is just a mid-level manager.",
						"japanese": "「三日会」は想像以上に巨大だ。K-jangはただの中間管理者に過ぎない。",
						"chinese": "“三日会”比我们想象的要庞大。K-jang只不过是中层管理者。",
						"french": "Le 'Samilhoe' est plus grand que nous ne l'imaginions. K-jang n'est qu'un cadre intermédiaire.",
						"spanish": "'Samilhoe' es más grande de lo que imaginamos. K-jang es solo un gerente de nivel medio.",
						"vietnamese": "'Sam Il Hoe' lớn hơn chúng ta tưởng tượng. K-jang chỉ là một quản lý cấp trung thôi.",
						"thai": "'ซัมอิลฮเว' ใหญ่กว่าที่เราคิดไว้มาก K-jang เป็นแค่ผู้จัดการระดับกลางเท่านั้น",
						"hindi": "'सामिलहो' हमारी कल्पना से कहीं बड़ा है। के-जंग सिर्फ एक मध्य-स्तरीय प्रबंधक है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 뭘 해야 해? 멈출 수 있는 거야?",
						"english": "What do we do? Can we stop them?",
						"japanese": "俺たち、どうすればいい？止められるのか？",
						"chinese": "我们该怎么办？能阻止他们吗？",
						"french": "Que devons-nous faire ? Pouvons-nous les arrêter ?",
						"spanish": "¿Qué debemos hacer? ¿Podemos detenerlos?",
						"vietnamese": "Chúng ta phải làm gì? Có thể ngăn chặn chúng không?",
						"thai": "เราควรทำยังไง? เราจะหยุดพวกเขาได้ไหม?",
						"hindi": "हमें क्या करना चाहिए? क्या हम उन्हें रोक सकते हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "장부를 찾아. 그게 모든 걸 끝낼 유일한 열쇠야.",
						"english": "Find the ledger. That's the only key to ending everything.",
						"japanese": "帳簿を見つけろ。それがすべてを終わらせる唯一の鍵だ。",
						"chinese": "找到账本。那是结束一切的唯一钥匙。",
						"french": "Trouvez le grand livre. C'est la seule clé pour tout arrêter.",
						"spanish": "Encuentra el libro. Esa es la única llave para terminar con todo.",
						"vietnamese": "Tìm cuốn sổ đó. Đó là chìa khóa duy nhất để kết thúc mọi thứ.",
						"thai": "หาสมุดบัญชีนั่นให้เจอ นั่นคือกุญแจเดียวที่จะยุติทุกสิ่ง",
						"hindi": "बहीखाता ढूंढो। वही सब कुछ खत्म करने की एकमात्र कुंजी है।"
					},
					"type": "speech"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제… 선택의 여지가 없어. 우린 너무 깊이 들어왔어.",
						"english": "Now... there's no choice. We're too deep.",
						"japanese": "もう…選択の余地はない。俺たちは深入りしすぎた。",
						"chinese": "现在…别无选择。我们已经陷得太深了。",
						"french": "Maintenant... il n'y a plus le choix. Nous sommes allés trop loin.",
						"spanish": "Ahora... no hay opción. Hemos llegado demasiado lejos.",
						"vietnamese": "Bây giờ... không còn lựa chọn nào khác. Chúng ta đã dấn thân quá sâu rồi.",
						"thai": "ตอนนี้... ไม่มีทางเลือกแล้ว เราเข้ามาลึกเกินไปแล้ว",
						"hindi": "अब... कोई विकल्प नहीं है। हम बहुत गहरे आ गए हैं।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 '삼일회'의 비밀에 손을 대다니… 어리석은 것들.",
						"english": "How dare you touch the secrets of 'Samilhoe'... You fools.",
						"japanese": "よくも「三日会」の秘密に手を出したな…愚か者め。",
						"chinese": "竟敢触碰“三日会”的秘密…愚蠢的家伙们。",
						"french": "Comment osez-vous toucher aux secrets du 'Samilhoe'... Imbéciles.",
						"spanish": "¿Cómo se atreven a tocar los secretos de 'Samilhoe'... Tontos.",
						"vietnamese": "Dám động vào bí mật của 'Sam Il Hoe'... Bọn ngu ngốc.",
						"thai": "บังอาจแตะต้องความลับของ 'ซัมอิลฮเว'... พวกโง่เขลา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई 'सामिलहो' के रहस्यों को छूने की... तुम मूर्ख हो।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "너희의 악행을 전부 밝혀낼 거야.",
						"english": "I'll expose all your wicked deeds.",
						"japanese": "お前たちの悪行、全て暴いてやる。",
						"chinese": "我将揭露你们所有的恶行。",
						"french": "Je vais révéler toutes vos mauvaises actions.",
						"spanish": "Revelaré todas sus malas acciones.",
						"vietnamese": "Ta sẽ phơi bày tất cả tội ác của các ngươi.",
						"thai": "ข้าจะเปิดโปงความชั่วร้ายของพวกเจ้าทั้งหมด",
						"hindi": "मैं तुम्हारे सभी बुरे कर्मों का पर्दाफाश करूँगा。"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "여기서 모든 추적은 끝난다. 더 이상은 없어.",
						"english": "All pursuit ends here. No more.",
						"japanese": "ここですべての追跡は終わる。これ以上はない。",
						"chinese": "所有的追捕到此为止。没有更多了。",
						"french": "Toute poursuite prend fin ici. Plus rien.",
						"spanish": "Toda persecución termina aquí. No más.",
						"vietnamese": "Mọi cuộc truy đuổi kết thúc tại đây. Không còn nữa.",
						"thai": "การไล่ล่าทั้งหมดจบลงที่นี่ ไม่มีอีกแล้ว",
						"hindi": "सभी पीछा यहीं ख़त्म होते हैं। और नहीं।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이런 것들에게… 하지만 {random_boss}는… 곧…",
						"english": "Ugh... to mere worms like these... But {random_boss} will... soon...",
						"japanese": "くっ… こんな奴らに… しかし{random_boss}は… もうすぐ…",
						"chinese": "呃… 竟然被这些家伙… 但{random_boss}会… 很快…",
						"french": "Ugh... Par de simples vermines comme ça... Mais {random_boss}... bientôt...",
						"spanish": "Ugh... ante simples gusanos como estos... Pero {random_boss}... pronto...",
						"vietnamese": "Khụ... bị những kẻ như vậy... Nhưng {random_boss} sẽ... sớm thôi...",
						"thai": "อึก... แพ้แค่พวกนี้... แต่ {random_boss} จะ... ในไม่ช้า...",
						"hindi": "उफ़... बस ऐसे कीड़ों से... लेकिन {random_boss}... जल्द ही..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 뭘 더 꾸미고 있는 거야?",
						"english": "What are you talking about? What else are you planning?",
						"japanese": "何を言ってるんだ？他に何を企んでいる？",
						"chinese": "你在说什么？你还在密谋什么？",
						"french": "De quoi parles-tu ? Qu'est-ce que tu complotes d'autre ?",
						"spanish": "¿De qué hablas? ¿Qué más estás tramando?",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi còn âm mưu gì nữa?",
						"thai": "คุณกำลังพูดอะไร? คุณกำลังวางแผนอะไรอีก?",
						"hindi": "तुम क्या कह रहे हो? तुम और क्या योजना बना रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 중간 보스. 그의 마지막 말은 더 큰 그림자를 드리웠다.",
						"english": "The fallen mini-boss. His last words cast an even larger shadow.",
						"japanese": "倒れた中ボス。彼の最期の言葉は、さらなる大きな影を落とした。",
						"chinese": "倒下的中级头目。他的遗言投下了更大的阴影。",
						"french": "Le mini-boss tombé. Ses derniers mots ont jeté une ombre encore plus grande.",
						"spanish": "El mini-jefe caído. Sus últimas palabras arrojaron una sombra aún mayor.",
						"vietnamese": "Kẻ địch cấp trung đã ngã xuống. Những lời cuối cùng của hắn đã phủ một bóng đen lớn hơn.",
						"thai": "หัวหน้าย่อยที่ล้มลง คำพูดสุดท้ายของเขาได้ทอดเงาที่ใหญ่กว่าเดิม",
						"hindi": "गिरा हुआ मिनी-बॉस। उसके आखिरी शब्दों ने और भी बड़ी छाया डाली।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "불법 자금의 흐름은 멈추지 않는다. 이제 K-jang의 진실을 마주할 시간이다.",
						"english": "The flow of illegal funds doesn't stop. Now it's time to face the truth of K-jang.",
						"japanese": "違法資金の流れは止まらない。今こそK-jangの真実と向き合う時だ。",
						"chinese": "非法资金的流动并未停止。现在是时候面对K-jang的真相了。",
						"french": "Le flux des fonds illégaux ne s'arrête pas. Il est maintenant temps d'affronter la vérité sur K-jang.",
						"spanish": "El flujo de fondos ilegales no se detiene. Ahora es el momento de enfrentar la verdad de K-jang.",
						"vietnamese": "Dòng tiền bất hợp pháp không dừng lại. Bây giờ là lúc đối mặt với sự thật về K-jang.",
						"thai": "กระแสเงินผิดกฎหมายไม่หยุดนิ่ง ถึงเวลาเผชิญหน้ากับความจริงของ K-jang แล้ว",
						"hindi": "अवैध धन का प्रवाह नहीं रुकता। अब K-jang की सच्चाई का सामना करने का समय है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 플레이어를 덮쳤다.",
						"english": "A colossal shadow engulfed the player.",
						"japanese": "巨大な影がプレイヤーを覆った。",
						"chinese": "巨大的阴影笼罩了玩家。",
						"french": "Une ombre colossale a englouti le joueur.",
						"spanish": "Una sombra colosal envolvió al jugador.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm người chơi.",
						"thai": "เงาขนาดใหญ่ปกคลุมผู้เล่น",
						"hindi": "एक विशाल छाया ने खिलाड़ी को ढक लिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈들은 '삼일회'의 거대한 장벽을 넘을 수 없어. 영원히.",
						"english": "You cannot overcome the colossal barrier of 'Samilhoe'. Never.",
						"japanese": "お前たちは『三日会』の巨大な障壁を超えることはできない。永遠に。",
						"chinese": "你们永远无法逾越'三日会'的巨大障碍。",
						"french": "Vous ne pouvez pas franchir l'énorme barrière du 'Samilhoe'. Jamais.",
						"spanish": "No pueden superar la colosal barrera de 'Samilhoe'. Jamás.",
						"vietnamese": "Các ngươi không thể vượt qua rào cản khổng lồ của 'Samilhoe'. Mãi mãi.",
						"thai": "พวกแกไม่มีทางก้าวข้ามกำแพงมหึมาของ 'Samilhoe' ได้ ตลอดไป",
						"hindi": "तुम 'सामिलहो' की विशाल बाधा को पार नहीं कर सकते। कभी नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기 안 해.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わってない。諦めない。",
						"chinese": "……还没结束。我不会放弃的。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Todavía no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ không từ bỏ.",
						"thai": "...ยังไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
