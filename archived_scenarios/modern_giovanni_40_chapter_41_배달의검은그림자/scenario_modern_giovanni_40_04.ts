export const scenario_modern_giovanni_40_04 = {
	"scenario_id": "modern_giovanni_40_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
					"content": {
						"korean": "개발자를 찾아 도시 외곽의 낡은 서버룸에 도착했다.",
						"english": "Arrived at an old server room on the city's outskirts, looking for the developer.",
						"japanese": "開発者を探し、都市郊外の古いサーバールームに到着した。",
						"chinese": "为寻找开发者，我抵达了城市郊区的一个旧服务器房。",
						"french": "Je suis arrivé dans une vieille salle des serveurs en périphérie de la ville, à la recherche du développeur.",
						"spanish": "Llegué a una vieja sala de servidores en las afueras de la ciudad, buscando al desarrollador.",
						"vietnamese": "Đã đến phòng máy chủ cũ kỹ ở ngoại ô thành phố, tìm kiếm nhà phát triển.",
						"thai": "มาถึงห้องเซิร์ฟเวอร์เก่าแก่ที่ชานเมือง เพื่อตามหานักพัฒนา",
						"hindi": "डेवलपर को ढूंढने के लिए शहर के बाहरी इलाके में एक पुराने सर्वर रूम में पहुंचा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 벡스라는 사람의 작업실인가?",
						"english": "Is this 'Vex's' workshop?",
						"japanese": "ここがベックスという者の作業室か？",
						"chinese": "这里是那个叫维克斯的工作室吗？",
						"french": "Est-ce l'atelier de 'Vex' ?",
						"spanish": "¿Es este el taller de 'Vex'?",
						"vietnamese": "Đây là phòng làm việc của người tên 'Vex' sao?",
						"thai": "นี่คือห้องทำงานของคนที่ชื่อเว็กซ์เหรอ?",
						"hindi": "क्या यह 'वेक्स' नाम के व्यक्ति का कार्यस्थल है?"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군요. 기다리고 있었어요.",
						"english": "You're here. I've been expecting you.",
						"japanese": "来ましたね。待っていましたよ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Vous êtes là. Je vous attendais.",
						"spanish": "Has llegado. Te estaba esperando.",
						"vietnamese": "Đến rồi à. Tôi đã đợi cô/anh.",
						"thai": "มาแล้วสินะ ฉันรออยู่เลย",
						"hindi": "आप आ गए। मैं इंतजार कर रहा था।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 시스템 개발자 벡스?",
						"english": "You're Vex, the system developer?",
						"japanese": "あなたがシステム開発者のベックスですか？",
						"chinese": "你就是系统开发者维克斯？",
						"french": "Vous êtes Vex, le développeur système ?",
						"spanish": "¿Tú eres Vex, el desarrollador del sistema?",
						"vietnamese": "Anh là Vex, nhà phát triển hệ thống à?",
						"thai": "คุณคือเว็กซ์ นักพัฒนาระบบใช่ไหม?",
						"hindi": "आप ही सिस्टम डेवलपर वेкс हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네. 무슨 일로 오셨는지… 짐작은 갑니다만.",
						"english": "Yes. I can guess why you're here...",
						"japanese": "はい。どのようなご用件かは…察しがつきますが。",
						"chinese": "是的。我大概能猜到你来找我有什么事。",
						"french": "Oui. Je me doute de la raison de votre venue...",
						"spanish": "Sí. Puedo imaginar por qué has venido...",
						"vietnamese": "Vâng. Tôi đoán được cô/anh đến vì chuyện gì rồi...",
						"thai": "ครับ พอจะเดาได้ว่าคุณมาด้วยเรื่องอะไร",
						"hindi": "हाँ। मैं समझ सकता हूँ कि आप किस काम से आए हैं..."
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "시스템의 허점은… 사실 많죠.",
						"english": "System flaws... actually, there are many.",
						"japanese": "システムの欠陥は… 実は多いですね。",
						"chinese": "系统的漏洞… 其实很多。",
						"french": "Les failles du système... en fait, il y en a beaucoup.",
						"spanish": "Las fallas del sistema... en realidad, son muchas.",
						"vietnamese": "Lỗ hổng của hệ thống... thực ra là rất nhiều.",
						"thai": "ช่องโหว่ของระบบ... จริงๆ แล้วมีเยอะเลยนะ",
						"hindi": "सिस्टम में कमियाँ... दरअसल, बहुत हैं。"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "구체적으로 어떤 부분이 문제죠?",
						"english": "Specifically, what's the problem?",
						"japanese": "具体的にどの部分が問題ですか？",
						"chinese": "具体来说，哪部分有问题？",
						"french": "Plus précisément, quel est le problème ?",
						"spanish": "¿Concretamente, cuál es el problema?",
						"vietnamese": "Cụ thể, phần nào là vấn đề?",
						"thai": "เจาะจงลงไป ส่วนไหนคือปัญหา?",
						"hindi": "विशेष रूप से, क्या समस्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "특정 지역의 배달 건수가 비정상적으로 폭증하는 현상. 그게 가장 큰 문제예요.",
						"english": "The abnormal surge in delivery counts in a specific area. That's the biggest problem.",
						"japanese": "特定地域の配達件数が異常に急増する現象。それが最大の問題です。",
						"chinese": "特定区域的配送数量异常激增的现象。那是最大的问题。",
						"french": "La hausse anormale du nombre de livraisons dans une zone spécifique. C'est le plus gros problème.",
						"spanish": "El aumento anormal de los pedidos de entrega en un área específica. Ese es el mayor problema.",
						"vietnamese": "Hiện tượng số lượng đơn hàng giao hàng ở một khu vực cụ thể tăng đột biến bất thường. Đó là vấn đề lớn nhất.",
						"thai": "ปรากฏการณ์ที่จำนวนการจัดส่งในพื้นที่เฉพาะเพิ่มขึ้นอย่างผิดปกติ นั่นคือปัญหาที่ใหญ่ที่สุด",
						"hindi": "किसी विशेष क्षेत्र में डिलीवरी की संख्या में असामान्य वृद्धि की घटना। यही सबसे बड़ी समस्या है।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 그런 일이 일어나죠?",
						"english": "Why is that happening?",
						"japanese": "なぜそんなことが起こるんですか？",
						"chinese": "为什么会发生这种事？",
						"french": "Pourquoi cela arrive-t-il ?",
						"spanish": "¿Por qué sucede eso?",
						"vietnamese": "Tại sao điều đó lại xảy ra?",
						"thai": "ทำไมถึงเกิดเรื่องแบบนั้นขึ้น?",
						"hindi": "ऐसा क्यों हो रहा है?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "…외부의 개입이 없다면 불가능한 일이죠.",
						"english": "...It's impossible without external intervention.",
						"japanese": "…外部からの介入がなければ不可能なことですね。",
						"chinese": "…如果没有外部干预，那是不可能的。",
						"french": "...C'est impossible sans intervention extérieure.",
						"spanish": "...Es imposible sin intervención externa.",
						"vietnamese": "...Điều đó là không thể nếu không có sự can thiệp từ bên ngoài.",
						"thai": "...เป็นไปไม่ได้เลยหากไม่มีการแทรกแซงจากภายนอก",
						"hindi": "...बाहरी हस्तक्षेप के बिना यह असंभव है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 문제를 해결하려면… 중앙 서버의 보안을 강화해야 합니다.",
						"english": "To solve this problem... we need to strengthen the central server's security.",
						"japanese": "この問題を解決するには… 中央サーバーのセキュリティを強化する必要があります。",
						"chinese": "要解决这个问题… 必须加强中央服务器的安全。",
						"french": "Pour résoudre ce problème... nous devons renforcer la sécurité du serveur central.",
						"spanish": "Para resolver este problema... debemos fortalecer la seguridad del servidor central.",
						"vietnamese": "Để giải quyết vấn đề này... chúng ta phải tăng cường bảo mật của máy chủ trung tâm.",
						"thai": "ในการแก้ปัญหานี้... เราต้องเสริมความแข็งแกร่งด้านความปลอดภัยของเซิร์ฟเวอร์กลาง",
						"hindi": "इस समस्या को हल करने के लिए... हमें केंद्रीय सर्वर की सुरक्षा को मजबूत करना होगा।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 전부예요? 다른 방법은요?",
						"english": "Is that all? Are there other ways?",
						"japanese": "それだけですか？ 他の方法は？",
						"chinese": "就这些吗？还有其他办法吗？",
						"french": "C'est tout ? D'autres méthodes ?",
						"spanish": "¿Eso es todo? ¿Hay otros métodos?",
						"vietnamese": "Chỉ có thế thôi ư? Có cách nào khác không?",
						"thai": "แค่นั้นเองเหรอ? มีวิธีอื่นอีกไหม?",
						"hindi": "बस इतना ही? और कोई तरीका?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다른 방법은 없어요. 죠반니는… 아니, 배달 시스템은 완벽하니까.",
						"english": "There's no other way. Giovanni is... no, the delivery system is perfect.",
						"japanese": "他の方法はありません。ジョバンニは… いや、配達システムは完璧ですから。",
						"chinese": "没有其他办法了。乔瓦尼是… 不，配送系统是完美的。",
						"french": "Il n'y a pas d'autre moyen. Giovanni est... non, le système de livraison est parfait.",
						"spanish": "No hay otra forma. Giovanni es... no, el sistema de entrega es perfecto.",
						"vietnamese": "Không có cách nào khác. Giovanni... không, hệ thống giao hàng là hoàn hảo.",
						"thai": "ไม่มีวิธีอื่นแล้ว จิโอวานนี่น่ะ... ไม่สิ ระบบจัดส่งน่ะสมบูรณ์แบบ",
						"hindi": "कोई और तरीका नहीं है। जियोवानी है... नहीं, डिलीवरी सिस्टम एकदम सही है।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "죠반니? 당신 왜 죠반니 편을 들죠?",
						"english": "Giovanni? Why are you taking Giovanni's side?",
						"japanese": "ジョバンニ？ なぜあなたはジョバンニの味方をするんですか？",
						"chinese": "乔瓦尼？你为什么偏袒乔瓦尼？",
						"french": "Giovanni ? Pourquoi prenez-vous le parti de Giovanni ?",
						"spanish": "¿Giovanni? ¿Por qué te pones del lado de Giovanni?",
						"vietnamese": "Giovanni? Tại sao bạn lại đứng về phía Giovanni?",
						"thai": "จิโอวานนี่? ทำไมคุณถึงเข้าข้างจิโอวานนี่ล่ะ?",
						"hindi": "जियोवानी? तुम जियोवानी का पक्ष क्यों ले रहे हो?"
					},
					"speaker": "character_2",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그저 시스템적인 관점에서 말씀드린 겁니다. 오해 마시길.",
						"english": "I'm just speaking from a system's perspective. Please don't misunderstand.",
						"japanese": "ただシステム的な観点から申し上げただけです。誤解なきよう。",
						"chinese": "我只是从系统角度说的。请不要误解。",
						"french": "Je parle juste d'un point de vue systémique. Veuillez ne pas mal comprendre.",
						"spanish": "Solo hablo desde una perspectiva de sistema. Por favor, no me malinterpretes.",
						"vietnamese": "Tôi chỉ nói từ góc độ hệ thống. Xin đừng hiểu lầm.",
						"thai": "ผมแค่พูดจากมุมมองของระบบครับ โปรดอย่าเข้าใจผิด",
						"hindi": "मैं सिर्फ़ सिस्टम के नज़रिए से बात कर रहा हूँ। कृपया गलत न समझें।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "그때, 익명의 메시지가 도착했다. 발신자는 '에코'.",
						"english": "Then, an anonymous message arrived. Sender: 'Echo'.",
						"japanese": "その時、匿名のメッセージが届いた。送信者は「エコー」。",
						"chinese": "这时，一条匿名消息传来。发件人是“回声”。",
						"french": "Alors, un message anonyme est arrivé. Expéditeur : 'Écho'.",
						"spanish": "Entonces, llegó un mensaje anónimo. Remitente: 'Eco'.",
						"vietnamese": "Lúc đó, một tin nhắn ẩn danh đã đến. Người gửi: 'Echo'.",
						"thai": "ตอนนั้น ข้อความนิรนามมาถึง ผู้ส่ง: 'เอคโค่'",
						"hindi": "तभी एक गुमनाम संदेश आया। भेजने वाला: 'इको'।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "'벡스를 조심해. 그의 말이 전부 진실은 아니야.'",
						"english": "'Beware of Vex. Not everything he says is true.'",
						"japanese": "「ベックスに気をつけろ。彼の言うことが全て真実とは限らない。」",
						"chinese": "“小心维克斯。他说的并非全是实话。”",
						"french": "'Méfie-toi de Vex. Tout ce qu'il dit n'est pas vrai.'",
						"spanish": "'Ten cuidado con Vex. No todo lo que dice es verdad.'",
						"vietnamese": "'Hãy cẩn thận với Vex. Không phải mọi điều hắn nói đều là sự thật.'",
						"thai": "'ระวังเวกซ์ คำพูดของเขาไม่ใช่ความจริงทั้งหมด'",
						"hindi": "'वेक्स से सावधान रहो। उसकी सारी बातें सच नहीं हैं।'"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "제 말대로 보안을 강화하면 모든 것이 해결됩니다.",
						"english": "If you strengthen security as I say, everything will be resolved.",
						"japanese": "私の言う通りにセキュリティを強化すれば、全て解決します。",
						"chinese": "如果按照我说的加强安全措施，一切都会解决的。",
						"french": "Si vous renforcez la sécurité comme je le dis, tout sera résolu.",
						"spanish": "Si refuerzan la seguridad como les digo, todo se resolverá.",
						"vietnamese": "Nếu các bạn tăng cường an ninh theo lời tôi, mọi thứ sẽ được giải quyết.",
						"thai": "หากเสริมความปลอดภัยตามที่ผมบอก ทุกอย่างจะคลี่คลาย",
						"hindi": "अगर आप मेरी बात मानकर सुरक्षा मजबूत करेंगे, तो सब कुछ सुलझ जाएगा।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…정말 그래요?",
						"english": "...Is that really so?",
						"japanese": "…本当にそうでしょうか？",
						"chinese": "……真的吗？",
						"french": "...Vraiment ?",
						"spanish": "...¿De verdad?",
						"vietnamese": "...Thật sao?",
						"thai": "...จริงหรือ?",
						"hindi": "...क्या सच में?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "벡스 씨, 당신의 설명이 어딘가 석연치 않아요.",
						"english": "Mr. Vex, your explanation is somehow unconvincing.",
						"japanese": "ベックスさん、あなたの説明はどうも納得できません。",
						"chinese": "维克斯先生，您的解释有些令人费解。",
						"french": "Monsieur Vex, votre explication n'est pas très claire.",
						"spanish": "Señor Vex, su explicación no me convence del todo.",
						"vietnamese": "Ông Vex, lời giải thích của ông có gì đó không rõ ràng.",
						"thai": "คุณเวกซ์ คำอธิบายของคุณดูคลุมเครือ",
						"hindi": "मिस्टर वेक्स, आपकी व्याख्या कहीं न कहीं संदिग्ध है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제가 드릴 수 있는 정보는 여기까지입니다. 더는… 위험해요.",
						"english": "This is all the information I can give. Any more... is dangerous.",
						"japanese": "私が提供できる情報はここまでです。これ以上は…危険です。",
						"chinese": "我能提供的信息就到这里了。再多就……危险了。",
						"french": "C'est tout ce que je peux vous dire. Plus... ce serait dangereux.",
						"spanish": "Esta es toda la información que puedo dar. Más... es peligroso.",
						"vietnamese": "Đây là tất cả thông tin tôi có thể cung cấp. Hơn nữa... sẽ nguy hiểm.",
						"thai": "ข้อมูลที่ให้ได้มีแค่นี้ อีกมากไปกว่านี้... เป็นอันตราย",
						"hindi": "मैं इतनी ही जानकारी दे सकता हूँ। इससे ज़्यादा... खतरनाक है।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "의심은 확신이 되어가고 있었다. 벡스는 과연 누구의 편인가.",
						"english": "Doubt was turning into certainty. Whose side was Vex truly on?",
						"japanese": "疑念は確信へと変わりつつあった。ベックスは一体誰の味方なのか。",
						"chinese": "怀疑正在变成确信。维克斯究竟是站在哪一边的？",
						"french": "Le doute se transformait en certitude. De quel côté était Vex, au fond ?",
						"spanish": "La duda se estaba convirtiendo en certeza. ¿De qué lado estaba Vex realmente?",
						"vietnamese": "Sự nghi ngờ đang biến thành sự chắc chắn. Vex rốt cuộc đứng về phía ai?",
						"thai": "ความสงสัยกำลังกลายเป็นความมั่นใจ เวกซ์อยู่ข้างใครกันแน่",
						"hindi": "संदेह यकीन में बदल रहा था। वेक्स आखिर किसका पक्षधर था?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "오셨군요. {random_boss}의 계획을 방해하는 자들.",
						"english": "So you've arrived. Those who interfere with {random_boss}'s plans.",
						"japanese": "来ましたね。{random_boss}の計画を邪魔する者たちよ。",
						"chinese": "你们来了。那些阻碍{random_boss}计划的人。",
						"french": "Vous voilà. Ceux qui interfèrent avec les plans de {random_boss}.",
						"spanish": "Así que han llegado. Aquellos que interfieren con los planes de {random_boss}.",
						"vietnamese": "Các ngươi đã đến. Những kẻ cản trở kế hoạch của {random_boss}.",
						"thai": "มาแล้วสินะ พวกที่ขัดขวางแผนการของ {random_boss}",
						"hindi": "तो तुम आ गए। वे जो {random_boss} की योजनाओं में बाधा डालते हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 벡스의 뒤에 있는 존재였나!",
						"english": "So you were the one behind Vex!",
						"japanese": "お前がベックスの背後にいた存在だったのか！",
						"chinese": "你就是维克斯幕后之人！",
						"french": "C'était donc toi, la personne derrière Vex !",
						"spanish": "¡Así que tú eras quien estaba detrás de Vex!",
						"vietnamese": "Ngươi chính là kẻ đứng sau Vex!",
						"thai": "แกคือคนที่อยู่เบื้องหลังเวกซ์!",
						"hindi": "तो तुम थे वेक्स के पीछे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "벡스는 그저 나를 위한 도구일 뿐. 진정한 힘은 여기 있다.",
						"english": "Vex is merely a tool for me. The true power lies here.",
						"japanese": "ベックスは私にとってただの道具に過ぎない。真の力はここにある。",
						"chinese": "维克斯不过是我的一个工具。真正的力量在这里。",
						"french": "Vex n'est qu'un outil pour moi. Le véritable pouvoir est ici.",
						"spanish": "Vex es meramente una herramienta para mí. El verdadero poder reside aquí.",
						"vietnamese": "Vex chỉ là một công cụ cho ta mà thôi. Sức mạnh thật sự nằm ở đây.",
						"thai": "เวกซ์เป็นแค่เครื่องมือสำหรับข้า พลังที่แท้จริงอยู่ที่นี่",
						"hindi": "वेक्स मेरे लिए सिर्फ एक उपकरण है। असली ताकत यहाँ है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 벡스에게 속아 이곳까지 오다니.",
						"english": "Foolish humans. Deceived by Vex to come all this way.",
						"japanese": "「愚かな人間どもめ。ベックスに騙されて、ここまで来るとは。」",
						"chinese": "“愚蠢的人类。竟然被维克斯欺骗，一路来到这里。”",
						"french": "« Humains stupides. Vous faire tromper par Vex pour venir jusqu'ici. »",
						"spanish": "« Humanos estúpidos. Engañados por Vex para llegar hasta aquí. »",
						"vietnamese": "“Đồ loài người ngu ngốc. Bị Vex lừa đến tận đây.”",
						"thai": "“มนุษย์โง่เขลา ถูกเวกซ์หลอกล่อมาถึงที่นี่”",
						"hindi": "“मूर्ख इंसानों। वेक्स से धोखे में आकर यहाँ तक आ गए।”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어! 벡스… 죠반니… 다 밝혀낼 거야!",
						"english": "It's not over yet! Vex… Giovanni… I'll expose everything!",
						"japanese": "「まだ終わっていない！ ベックス… ジョバンニ… 全て暴いてやる！」",
						"chinese": "“还没结束！维克斯… 乔瓦尼… 我会揭露一切！”",
						"french": "« Ce n'est pas encore fini ! Vex… Giovanni… Je révélerai tout ! »",
						"spanish": "« ¡Aún no ha terminado! Vex… Giovanni… ¡Lo desvelaré todo! »",
						"vietnamese": "“Chưa kết thúc đâu! Vex… Giovanni… Ta sẽ phơi bày tất cả!”",
						"thai": "“ยังไม่จบแค่นี้หรอก! เวกซ์… จิโอวานนี่… ฉันจะเปิดโปงพวกแกให้หมด!”",
						"hindi": "“अभी खत्म नहीं हुआ है! वेक्स… जियोवानी… मैं सब कुछ उजागर करूँगा!”"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "흥. 다시 와도 결과는 같을 것이다.",
						"english": "Hmph. Come back, and the outcome will be the same.",
						"japanese": "「フン。再び来ても、結果は同じだろう。」",
						"chinese": "“哼。就算你再来，结果也一样。”",
						"french": "« Hmpf. Reviens, et le résultat sera le même. »",
						"spanish": "« Hmpf. Vuelve, y el resultado será el mismo. »",
						"vietnamese": "“Hừ. Có trở lại thì kết quả cũng vậy thôi.”",
						"thai": "“หึ. กลับมาอีก ผลลัพธ์ก็คงเหมือนเดิม”",
						"hindi": "“हम्म. वापस भी आओगे तो नतीजा वही रहेगा।”"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이겼다고 생각하나? 벡스는 이미 너희를… 죠반니에게 넘겼다.",
						"english": "Think you've won? Vex has already… handed you over to Giovanni.",
						"japanese": "「勝ったとでも？ ベックスは既に… お前たちをジョバンニに引き渡した。」",
						"chinese": "“以为赢了吗？维克斯已经把你们… 交给了乔瓦尼。”",
						"french": "« Vous croyez avoir gagné ? Vex vous a déjà… livrés à Giovanni. »",
						"spanish": "« ¿Crees que has ganado? Vex ya os ha… entregado a Giovanni. »",
						"vietnamese": "“Ngươi nghĩ mình thắng ư? Vex đã… giao các ngươi cho Giovanni rồi.”",
						"thai": "“คิดว่าชนะแล้วรึ? เวกซ์น่ะ… ยกพวกแกให้จิโอวานนี่ไปแล้ว”",
						"hindi": "“क्या तुम्हें लगता है कि तुम जीत गए हो? वेक्स ने तुम्हें पहले ही… जियोवानी को सौंप दिया है।”"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "벡스가… 우리를 팔았다고?",
						"english": "Vex… sold us out?",
						"japanese": "「ベックスが… 私たちを売っただと？」",
						"chinese": "“维克斯… 把我们出卖了？”",
						"french": "« Vex… nous a vendus ? »",
						"spanish": "« ¿Vex… nos traicionó? »",
						"vietnamese": "“Vex… đã bán đứng chúng ta?”",
						"thai": "“เวกซ์… ขายเราไปแล้วเหรอ?”",
						"hindi": "“वेक्स… ने हमें बेच दिया?”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "믿었던 배신자의 그림자가 탐험대의 발목을 잡았다. 죠반니의 거대한 음모가 서서히 드러나기 시작한다.",
						"english": "The trusted traitor's shadow ensnared the expedition. Giovanni's grand scheme slowly begins to unravel.",
						"japanese": "「信じていた裏切者の影が探検隊の足元を絡め取った。ジョバンニの巨大な陰謀が徐々に姿を現し始める。」",
						"chinese": "“信任的叛徒的阴影扼住了探险队的咽喉。乔瓦尼的巨大阴谋渐渐浮出水面。”",
						"french": "« L'ombre du traître de confiance entrava l'expédition. Le grand complot de Giovanni commence lentement à se révéler. »",
						"spanish": "« La sombra del traidor de confianza atrapó a la expedición. La gran conspiración de Giovanni comienza a revelarse lentamente. »",
						"vietnamese": "“Bóng tối của kẻ phản bội đáng tin cậy đã níu chân đoàn thám hiểm. Âm mưu to lớn của Giovanni dần hé lộ.”",
						"thai": "“เงาของทรราชผู้ไว้ใจได้พันธนาการเหล่านักสำรวจ แผนการอันยิ่งใหญ่ของจิโอวานนี่เริ่มเปิดเผยออกมาอย่างช้าๆ”",
						"hindi": "“विश्वासघाती की छाया ने अभियान को जकड़ लिया। जियोवानी की विशाल साजिश धीरे-धीरे सामने आने लगी।”"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 시스템, 그 심장을 설계한 자.",
			"'벡스'. 그는 모든 것을 안다고 했다.",
			"하지만 그의 눈빛에선 감출 수 없는 그림자가 스쳤다.",
			"믿었던 조력자, 혹은 교묘한 함정의 설계자.",
			"진실은 언제나 불편한 모습으로 찾아오는 법."
		],
		"english": [
			"The one who designed the city's system, its very heart.",
			"'Vex'. He claimed to know everything.",
			"Yet, an undeniable shadow flickered in his eyes.",
			"A trusted ally, or the architect of a cunning trap.",
			"Truth always reveals itself in an uncomfortable form."
		],
		"japanese": [
			"都市のシステム、その心臓を設計した者。",
			"「ベックス」。彼はすべてを知っていると言った。",
			"だが、彼の目には隠しきれない影がよぎった。",
			"信頼できる協力者か、それとも巧妙な罠の設計者か。",
			"真実は常に不都合な姿で現れるものだ。"
		],
		"chinese": [
			"城市系统的设计者，其核心的建造者。",
			"“维克斯”。他声称无所不知。",
			"然而，他眼中闪过一丝无法掩饰的阴影。",
			"是值得信赖的助手，还是巧妙陷阱的设计者？",
			"真相总是以令人不安的方式显现。"
		],
		"french": [
			"Celui qui a conçu le système de la ville, son cœur même.",
			"« Vex ». Il prétendait tout savoir.",
			"Pourtant, une ombre indéniable traversa son regard.",
			"Un allié fidèle, ou l'architecte d'un piège astucieux.",
			"La vérité se présente toujours sous une forme inconfortable."
		],
		"spanish": [
			"El que diseñó el sistema de la ciudad, su propio corazón.",
			"'Vex'. Él afirmó saberlo todo.",
			"Sin embargo, una sombra innegable cruzó su mirada.",
			"Un aliado de confianza, o el arquitecto de una trampa astuta.",
			"La verdad siempre se presenta de una forma incómoda."
		],
		"vietnamese": [
			"Kẻ đã thiết kế hệ thống thành phố, trái tim của nó.",
			"'Vex'. Hắn ta nói rằng mình biết mọi thứ.",
			"Thế nhưng, một bóng đen khó che giấu đã lướt qua ánh mắt hắn.",
			"Một đồng minh đáng tin cậy, hay kẻ thiết kế một cái bẫy xảo quyệt.",
			"Sự thật luôn tìm đến dưới một hình hài khó chịu."
		],
		"thai": [
			"ผู้ที่ออกแบบระบบของเมือง หัวใจของมัน",
			" 'เว็กซ์' เขาอ้างว่ารู้ทุกสิ่ง",
			"ทว่า เงาที่ไม่อาจซ่อนได้พาดผ่านดวงตาของเขา",
			"ผู้ช่วยเหลือที่ไว้ใจได้ หรือผู้ออกแบบกับดักอันแยบยล",
			"ความจริงมักจะมาในรูปแบบที่ไม่น่าสบายใจเสมอ"
		],
		"hindi": [
			"शहर की प्रणाली, उसके हृदय का निर्माता।",
			"'वेक्स'। उसने सब कुछ जानने का दावा किया।",
			"फिर भी, उसकी आँखों में एक अनिश्चित छाया कौंध गई।",
			"एक विश्वसनीय सहायक, या एक चतुर जाल का वास्तुकार।",
			"सत्य हमेशा असहज रूप में सामने आता है।"
		]
	}
} as const;
