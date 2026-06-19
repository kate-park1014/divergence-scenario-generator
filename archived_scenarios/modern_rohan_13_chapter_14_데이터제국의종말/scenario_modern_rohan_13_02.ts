export const scenario_modern_rohan_13_02 = {
	"scenario_id": "modern_rohan_13_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"content": {
						"korean": "로한의 회사. 완벽하게 설계된 디지털 요새다.",
						"english": "Rohan's company. A perfectly designed digital fortress.",
						"japanese": "ロハンの会社。完璧に設計されたデジタル要塞だ。",
						"chinese": "罗汉的公司。一座设计完美的数字堡垒。",
						"french": "La société de Rohan. Une forteresse numérique parfaitement conçue.",
						"spanish": "La empresa de Rohan. Una fortaleza digital perfectamente diseñada.",
						"vietnamese": "Công ty của Rohan. Một pháo đài kỹ thuật số được thiết kế hoàn hảo.",
						"thai": "บริษัทของโรฮัน ป้อมปราการดิจิทัลที่ออกแบบมาอย่างสมบูรณ์แบบ",
						"hindi": "रोहन की कंपनी। एक पूरी तरह से डिज़ाइन किया गया डिजिटल किला।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "왔어요? 드릴 말씀이… 있어요.",
						"english": "You're here? I have something to... tell you.",
						"japanese": "来ましたね？お話しすることが…あります。",
						"chinese": "你来了？我有些话要…说。",
						"french": "Vous êtes là ? J'ai quelque chose à… vous dire.",
						"spanish": "¿Ya llegaste? Tengo algo que... decirte.",
						"vietnamese": "Anh đến rồi à? Em có điều… muốn nói.",
						"thai": "มาแล้วเหรอ? มีเรื่องจะ...บอก",
						"hindi": "तुम आ गए? मुझे तुमसे कुछ... कहना है।"
					}
				},
				{
					"content": {
						"korean": "Lin. 무슨 일인데 이렇게 다급해?",
						"english": "Lin. What's wrong? Why the rush?",
						"japanese": "リン。どうしたの、そんなに急いで？",
						"chinese": "Lin。怎么了，这么着急？",
						"french": "Lin. Qu'est-ce qui ne va pas ? Pourquoi cette urgence ?",
						"spanish": "Lin. ¿Qué pasa? ¿Por qué tanta prisa?",
						"vietnamese": "Lin. Có chuyện gì mà gấp thế?",
						"thai": "ลิน มีอะไรผิดปกติเหรอ? ทำไมต้องรีบร้อนขนาดนี้?",
						"hindi": "लिन। क्या बात है? इतनी जल्दी क्यों है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "로한의 시스템… 어딘가 이상해요.",
						"english": "Rohan's system... Something's off about it.",
						"japanese": "ロハンのシステム…どこかおかしいんです。",
						"chinese": "罗汉的系统…有些不对劲。",
						"french": "Le système de Rohan… quelque chose ne va pas.",
						"spanish": "El sistema de Rohan... algo anda mal.",
						"vietnamese": "Hệ thống của Rohan… có gì đó không ổn.",
						"thai": "ระบบของโรฮัน... มันแปลก ๆ",
						"hindi": "रोहन का सिस्टम... कुछ गड़बड़ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이상하다니? 오류 말하는 거야?",
						"english": "Off? Are you talking about an error?",
						"japanese": "おかしいって？エラーのこと？",
						"chinese": "不对劲？是说有错误吗？",
						"french": "Pas bien ? Tu parles d'une erreur ?",
						"spanish": "¿Mal? ¿Estás hablando de un error?",
						"vietnamese": "Không ổn à? Em đang nói về lỗi sao?",
						"thai": "แปลกๆ? เธอหมายถึงข้อผิดพลาดเหรอ?",
						"hindi": "गड़बड़? क्या तुम किसी त्रुटि की बात कर रही हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그냥 오류가 아니에요. 자금 흐름에…",
						"english": "It's not just an error. The fund flow...",
						"japanese": "単なるエラーじゃない。資金の流れに…",
						"chinese": "这不只是个错误。资金流向…",
						"french": "Ce n'est pas juste une erreur. Le flux de fonds...",
						"spanish": "No es solo un error. El flujo de fondos...",
						"vietnamese": "Đây không chỉ là một lỗi. Dòng tiền...",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาด. กระแสเงินทุน...",
						"hindi": "यह सिर्फ एक गलती नहीं है। फंड फ्लो में..."
					}
				},
				{
					"content": {
						"korean": "자금 흐름? 불법적인 거야?",
						"english": "Fund flow? Is it illegal?",
						"japanese": "資金の流れ？違法なのか？",
						"chinese": "资金流向？是非法的吗？",
						"french": "Flux de fonds ? C'est illégal ?",
						"spanish": "¿Flujo de fondos? ¿Es ilegal?",
						"vietnamese": "Dòng tiền? Có phải là bất hợp pháp không?",
						"thai": "กระแสเงินทุน? มันผิดกฎหมายหรือเปล่า?",
						"hindi": "फंड फ्लो? क्या यह अवैध है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "네. 거대한 불법 자금 세탁의 증거예요. 이 데이터…",
						"english": "Yes. It's evidence of massive illegal money laundering. This data...",
						"japanese": "はい。大規模な違法マネーロンダリングの証拠です。このデータが…",
						"chinese": "是的。这是大规模非法洗钱的证据。这份数据…",
						"french": "Oui. C'est la preuve d'un blanchiment d'argent illégal massif. Ces données...",
						"spanish": "Sí. Es evidencia de un lavado de dinero ilegal masivo. Estos datos...",
						"vietnamese": "Vâng. Đó là bằng chứng về rửa tiền bất hợp pháp quy mô lớn. Dữ liệu này...",
						"thai": "ใช่. นี่คือหลักฐานของการฟอกเงินผิดกฎหมายจำนวนมหาศาล. ข้อมูลนี้...",
						"hindi": "हाँ। यह बड़े पैमाने पर अवैध मनी लॉन्ड्रिंग का सबूत है। यह डेटा..."
					}
				},
				{
					"content": {
						"korean": "믿을 수 없어. 로한이…?",
						"english": "I can't believe it. Rohan...?",
						"japanese": "信じられない。ロハンが…？",
						"chinese": "难以置信。罗汉…？",
						"french": "Je n'y crois pas. Rohan...?",
						"spanish": "No puedo creerlo. ¿Rohan...?",
						"vietnamese": "Không thể tin được. Rohan...?",
						"thai": "ไม่อยากจะเชื่อเลย. โรฮัน...?",
						"hindi": "मैं विश्वास नहीं कर सकता। रोहन...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이걸 폭로하면 전 끝이에요. 로한이 절 가만두지 않을 거예요.",
						"english": "If I expose this, I'm finished. Rohan won't leave me alone.",
						"japanese": "これを暴露したら、私は終わりです。ロハンが私を放っておかないでしょう。",
						"chinese": "如果我揭露此事，我就完了。罗汉不会放过我的。",
						"french": "Si je révèle ça, c'est la fin pour moi. Rohan ne me laissera pas tranquille.",
						"spanish": "Si revelo esto, estoy acabado. Rohan no me dejará en paz.",
						"vietnamese": "Nếu tôi tiết lộ điều này, tôi sẽ tiêu đời. Rohan sẽ không để yên cho tôi đâu.",
						"thai": "ถ้าฉันเปิดเผยเรื่องนี้ ฉันก็จบสิ้น. โรฮันจะไม่ปล่อยฉันไว้แน่.",
						"hindi": "अगर मैं इसे उजागर करता हूँ, तो मैं खत्म हो जाऊँगा। रोहन मुझे अकेला नहीं छोड़ेगा।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 널 보호할게. 그 정보가 필요해.",
						"english": "We'll protect you. We need that information.",
						"japanese": "私たちがあなたを守る。その情報が必要だ。",
						"chinese": "我们会保护你。我们需要那份信息。",
						"french": "Nous te protégerons. Nous avons besoin de cette information.",
						"spanish": "Te protegeremos. Necesitamos esa información.",
						"vietnamese": "Chúng tôi sẽ bảo vệ bạn. Chúng tôi cần thông tin đó.",
						"thai": "เราจะปกป้องคุณ. เราต้องการข้อมูลนั้น.",
						"hindi": "हम तुम्हारी रक्षा करेंगे। हमें वह जानकारी चाहिए।"
					}
				},
				{
					"content": {
						"korean": "로한은 단순한 CEO가 아니에요. 거대한 디지털 제국을 만들고 있어요.",
						"english": "Rohan isn't just a CEO. He's building a massive digital empire.",
						"japanese": "ロハンは単なるCEOじゃない。巨大なデジタル帝国を築いているんだ。",
						"chinese": "罗汉不只是个CEO。他正在建立一个庞大的数字帝国。",
						"french": "Rohan n'est pas qu'un simple PDG. Il est en train de bâtir un immense empire numérique.",
						"spanish": "Rohan no es solo un CEO. Está construyendo un imperio digital masivo.",
						"vietnamese": "Rohan không chỉ là một CEO. Anh ta đang xây dựng một đế chế kỹ thuật số khổng lồ.",
						"thai": "โรฮันไม่ใช่แค่ CEO. เขากำลังสร้างอาณาจักรดิจิทัลขนาดใหญ่.",
						"hindi": "रोहन सिर्फ एक सीईओ नहीं है। वह एक विशाल डिजिटल साम्राज्य बना रहा है।"
					},
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 많은 걸 숨기고 있다는 거네.",
						"english": "So he's hiding more.",
						"japanese": "つまり、もっと多くのことを隠しているということね。",
						"chinese": "也就是说，他隐藏了更多。",
						"french": "Donc il cache plus de choses.",
						"spanish": "Así que está ocultando más.",
						"vietnamese": "Vậy là anh ta đang che giấu nhiều hơn.",
						"thai": "แสดงว่าเขากำลังซ่อนอะไรบางอย่างอีก.",
						"hindi": "तो वह और भी बहुत कुछ छिपा रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "여기는… 데이터 저장고예요. 중요한 정보가 많을 거예요.",
						"english": "This is... a data repository. There must be a lot of important information.",
						"japanese": "ここは…データ貯蔵庫だ。重要な情報がたくさんあるだろう。",
						"chinese": "这里是…数据存储库。肯定有很多重要信息。",
						"french": "C'est... un dépôt de données. Il doit y avoir beaucoup d'informations importantes.",
						"spanish": "Esto es... un repositorio de datos. Debe haber mucha información importante.",
						"vietnamese": "Đây là... kho lưu trữ dữ liệu. Chắc chắn có rất nhiều thông tin quan trọng.",
						"thai": "นี่คือ... ที่เก็บข้อมูล. น่าจะมีข้อมูลสำคัญมากมาย.",
						"hindi": "यह... एक डेटा रिपॉजिटरी है। इसमें बहुत सारी महत्वपूर्ण जानकारी होगी।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다. 데이터의 수호자처럼 보였다.",
						"english": "A massive shadow appeared. It looked like a guardian of data.",
						"japanese": "巨大な影が現れた。データの守護者のように見えた。",
						"chinese": "一个巨大的影子出现了。它看起来像是数据的守护者。",
						"french": "Une ombre gigantesque est apparue. Elle ressemblait à la gardienne des données.",
						"spanish": "Una sombra enorme apareció. Parecía un guardián de datos.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện. Nó trông như người bảo vệ dữ liệu.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้น. มันดูเหมือนผู้พิทักษ์ข้อมูล.",
						"hindi": "एक विशाल छाया दिखाई दी। यह डेटा के संरक्षक जैसी लग रही थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 로한님의 영역을 침범하다니.",
						"english": "How dare you trespass Rohan's domain.",
						"japanese": "よくもローハン様の領域を侵したな。",
						"chinese": "竟敢侵犯罗汉大人的领域。",
						"french": "Comment osez-vous empiéter sur le domaine de Rohan ?",
						"spanish": "¡Cómo osas invadir el dominio de Rohan!",
						"vietnamese": "Ngươi dám xâm phạm lãnh địa của Rohan.",
						"thai": "บังอาจนักที่บุกรุกอาณาเขตของท่านโรฮาน",
						"hindi": "तुमने रोहन के क्षेत्र में घुसपैठ करने की हिम्मत कैसे की।"
					}
				},
				{
					"content": {
						"korean": "비켜! 우린 진실을 찾아야 해.",
						"english": "Out of the way! We need to find the truth.",
						"japanese": "どけ！ 我々は真実を見つけなければならない。",
						"chinese": "让开！我们必须找到真相。",
						"french": "Poussez-vous ! Nous devons trouver la vérité.",
						"spanish": "¡Fuera! ¡Tenemos que encontrar la verdad!",
						"vietnamese": "Tránh ra! Chúng ta phải tìm ra sự thật.",
						"thai": "หลีกไป! เราต้องค้นหาความจริง",
						"hindi": "हट जाओ! हमें सच का पता लगाना है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "서둘러야 해요! {random_boss}가 시간을 끌 거예요!",
						"english": "Hurry! {random_boss} will buy us time!",
						"japanese": "急いで！ {random_boss}が時間を稼いでくれるわ！",
						"chinese": "快点！{random_boss}会拖延时间的！",
						"french": "Dépêchez-vous ! {random_boss} va nous faire gagner du temps !",
						"spanish": "¡Rápido! ¡{random_boss} nos dará tiempo!",
						"vietnamese": "Nhanh lên! {random_boss} sẽ câu giờ cho chúng ta!",
						"thai": "รีบหน่อย! {random_boss} จะถ่วงเวลาให้!",
						"hindi": "जल्दी करो! {random_boss} हमें समय दिलाएगा!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마침내 핵심 데이터 서버룸에 도착했다. 압도적인 방어 시스템이 작동 중이다.",
						"english": "Finally, we've reached the core data server room. Overwhelming defense systems are active.",
						"japanese": "ついに、コアデータサーバー室に到着した。圧倒的な防衛システムが作動中だ。",
						"chinese": "终于抵达了核心数据服务器室。压倒性的防御系统正在运行。",
						"french": "Nous avons enfin atteint la salle des serveurs de données. Des systèmes de défense écrasants sont actifs.",
						"spanish": "Finalmente, hemos llegado a la sala de servidores de datos. Sistemas de defensa abrumadores están activos.",
						"vietnamese": "Cuối cùng, chúng ta đã đến phòng máy chủ dữ liệu cốt lõi. Các hệ thống phòng thủ áp đảo đang hoạt động.",
						"thai": "ในที่สุด เราก็มาถึงห้องเซิร์ฟเวอร์ข้อมูลหลัก ระบบป้องกันที่เหนือชั้นกำลังทำงานอยู่",
						"hindi": "अंत में, हम कोर डेटा सर्वर रूम में पहुँच गए हैं। जबरदस्त रक्षा प्रणालियाँ सक्रिय हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니… 어리석은 자들.",
						"english": "You've made it this far... Fools.",
						"japanese": "ここまで来るとは…愚かな者たちめ。",
						"chinese": "竟然能到这里…愚蠢的家伙们。",
						"french": "Vous êtes arrivés jusqu'ici... Imbéciles.",
						"spanish": "Han llegado hasta aquí... ¡Estúpidos!",
						"vietnamese": "Các ngươi đã đến được đây... Những kẻ ngốc.",
						"thai": "มาได้ถึงขนาดนี้... พวกโง่เขลา",
						"hindi": "तुम यहाँ तक आ गए... मूर्खों।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "로한님의 계획은 누구도 막을 수 없다.",
						"english": "No one can stop Rohan's plan.",
						"japanese": "ローハン様の計画は誰にも止められない。",
						"chinese": "罗汉大人的计划无人能阻。",
						"french": "Personne ne peut arrêter le plan de Rohan.",
						"spanish": "Nadie puede detener el plan de Rohan.",
						"vietnamese": "Không ai có thể ngăn cản kế hoạch của Rohan.",
						"thai": "ไม่มีใครหยุดแผนของท่านโรฮานได้",
						"hindi": "रोहन की योजना को कोई नहीं रोक सकता।"
					}
				},
				{
					"content": {
						"korean": "로한의 계획? 우리가 끝낼 거야.",
						"english": "Rohan's plan? We'll end it.",
						"japanese": "ローハンの計画？ 私たちが終わらせる。",
						"chinese": "罗汉的计划？ 我们会终结它。",
						"french": "Le plan de Rohan ? Nous y mettrons fin.",
						"spanish": "¿El plan de Rohan? Lo acabaremos.",
						"vietnamese": "Kế hoạch của Rohan? Chúng ta sẽ kết thúc nó.",
						"thai": "แผนของโรฮานเหรอ? เราจะยุติมันเอง",
						"hindi": "रोहन की योजना? हम इसे खत्म कर देंगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "저 안에 모든 증거가 있어요! 포기하지 마세요!",
						"english": "All the evidence is in there! Don't give up!",
						"japanese": "あの中に全ての証拠があるわ！諦めないで！",
						"chinese": "所有证据都在里面！别放弃！",
						"french": "Toutes les preuves sont à l'intérieur ! N'abandonnez pas !",
						"spanish": "¡Todas las pruebas están ahí dentro! ¡No os rindáis!",
						"vietnamese": "Tất cả bằng chứng ở trong đó! Đừng bỏ cuộc!",
						"thai": "หลักฐานทั้งหมดอยู่ในนั้น! อย่ายอมแพ้!",
						"hindi": "सारे सबूत वहीं अंदर हैं! हार मत मानो!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 도전이었다. 로한님은 모든 것을 보고 계신다.",
						"english": "A foolish challenge. Lord Rohan sees everything.",
						"japanese": "愚かな挑戦だった。ロハン様は全てを見ている。",
						"chinese": "愚蠢的挑战。罗汉大人洞悉一切。",
						"french": "Un défi insensé. Seigneur Rohan voit tout.",
						"spanish": "Un desafío insensato. El Señor Rohan lo ve todo.",
						"vietnamese": "Một thử thách ngu ngốc. Lãnh chúa Rohan nhìn thấy mọi thứ.",
						"thai": "เป็นความท้าทายที่โง่เขลา ท่านโรฮันเห็นทุกสิ่ง",
						"hindi": "एक मूर्खतापूर्ण चुनौती थी। प्रभु रोहन सब कुछ देखते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어! 반드시…",
						"english": "Ugh... It's not over yet! I will...",
						"japanese": "くっ… まだ終わってない！必ず…",
						"chinese": "呃……还没结束！我一定要……",
						"french": "Ugh... Ce n'est pas encore fini ! Je vais...",
						"spanish": "Ugh... ¡Esto no ha terminado todavía! Yo...",
						"vietnamese": "Khụ… Vẫn chưa kết thúc! Tôi nhất định phải…",
						"thai": "อึก... ยังไม่จบ! ฉันจะ...",
						"hindi": "उफ़... अभी ख़त्म नहीं हुआ! मैं ज़रूर..."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "포기하면 안 돼요! 진실은… 저 안에 있어요!",
						"english": "Don't give up! The truth is... in there!",
						"japanese": "諦めないで！真実は… あの中に！",
						"chinese": "别放弃！真相……就在那里！",
						"french": "N'abandonnez pas ! La vérité est... là-dedans !",
						"spanish": "¡No te rindas! ¡La verdad está... ahí dentro!",
						"vietnamese": "Đừng bỏ cuộc! Sự thật… nằm ở trong đó!",
						"thai": "อย่ายอมแพ้! ความจริงคือ... อยู่ในนั้น!",
						"hindi": "हार मत मानो! सच्चाई... वहाँ है!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이걸로 끝이… 아닐 것이다…",
						"english": "Ugh... This won't be the end...",
						"japanese": "くっ…これで終わりでは…ないだろう…",
						"chinese": "咳…这不会是…结束…",
						"french": "Ugh... Ce ne sera pas la fin...",
						"spanish": "Ugh... Esto no será el final...",
						"vietnamese": "Khụ... Đây sẽ không phải là kết thúc...",
						"thai": "อึก... นี่ไม่ใช่จุดจบแน่...",
						"hindi": "उफ़... यह अंत नहीं होगा..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "해냈어! 이제 로한의 진실을 밝힐 수 있어.",
						"english": "We did it! Now we can reveal Rohan's truth.",
						"japanese": "やったわ！これでローハンの真実を明かせる。",
						"chinese": "我们做到了！现在可以揭露罗汉的真相了。",
						"french": "On l'a fait ! Maintenant, nous pouvons révéler la vérité de Rohan.",
						"spanish": "¡Lo logramos! Ahora podemos revelar la verdad de Rohan.",
						"vietnamese": "Chúng ta đã làm được! Giờ có thể tiết lộ sự thật về Rohan rồi.",
						"thai": "ทำได้แล้ว! ตอนนี้เราเปิดเผยความจริงของโรฮานได้แล้ว",
						"hindi": "हमने कर दिखाया! अब हम रोहन की सच्चाई उजागर कर सकते हैं।"
					}
				},
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "데이터를 확보했어요. 하지만 이건 시작일 뿐이에요.",
						"english": "Data secured. But this is just the beginning.",
						"japanese": "データは確保した。だが、これは始まりに過ぎない。",
						"chinese": "数据已获取。但这仅仅是个开始。",
						"french": "Données sécurisées. Mais ce n'est que le début.",
						"spanish": "Datos asegurados. Pero esto es solo el principio.",
						"vietnamese": "Dữ liệu đã có. Nhưng đây chỉ là khởi đầu.",
						"thai": "ข้อมูลได้มาแล้ว แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "डेटा सुरक्षित कर लिया है। लेकिन यह तो बस शुरुआत है।"
					}
				},
				{
					"content": {
						"korean": "로한의 시스템에서 미묘한 데이터 불일치를 발견했다. 감춰진 진실의 조각이다.",
						"english": "Detected subtle data discrepancies in Rohan's system. A fragment of hidden truth.",
						"japanese": "ロハン様のシステムに微妙なデータ不一致を発見した。隠された真実の断片だ。",
						"chinese": "在罗汉的系统中发现了微妙的数据不一致。这是隐藏真相的一块碎片。",
						"french": "Des incohérences de données subtiles détectées dans le système de Rohan. Un fragment de vérité cachée.",
						"spanish": "Detectadas sutiles discrepancias de datos en el sistema de Rohan. Un fragmento de la verdad oculta.",
						"vietnamese": "Phát hiện sự không nhất quán dữ liệu tinh vi trong hệ thống của Rohan. Một mảnh ghép của sự thật ẩn giấu.",
						"thai": "ตรวจพบความไม่สอดคล้องของข้อมูลเล็กน้อยในระบบของโรฮัน ชิ้นส่วนของความจริงที่ซ่อนอยู่",
						"hindi": "रोहन के सिस्टम में सूक्ष्म डेटा विसंगतियां पाई गईं। छिपी हुई सच्चाई का एक टुकड़ा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "로한의 완벽한 계획 뒤에 숨겨진 조작된 흔적… 아직 갈 길이 멀다.",
						"english": "Traces of manipulation hidden behind Rohan's perfect plan... Still a long way to go.",
						"japanese": "ロハン様の完璧な計画の裏に隠された操作の痕跡… まだ先は長い。",
						"chinese": "罗汉完美计划背后隐藏的操纵痕迹……前路漫漫。",
						"french": "Des traces de manipulation cachées derrière le plan parfait de Rohan... Le chemin est encore long.",
						"spanish": "Rastros de manipulación ocultos tras el plan perfecto de Rohan... Todavía queda mucho camino.",
						"vietnamese": "Dấu vết thao túng ẩn sau kế hoạch hoàn hảo của Rohan… Vẫn còn một chặng đường dài.",
						"thai": "ร่องรอยการบงการที่ซ่อนอยู่เบื้องหลังแผนอันสมบูรณ์แบบของโรฮัน... หนทางยังอีกยาวไกล",
						"hindi": "रोहन की उत्तम योजना के पीछे छिपे हेरफेर के निशान... अभी लंबा रास्ता तय करना है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"로한의 시스템. 완벽한 위장 속에 숨겨진 거대한 진실.",
			"하지만 Lin은 알았다. 모든 데이터가 정확할 수는 없다는 것을.",
			"사소한 불일치, 그것이 거대한 불법 자금 세탁의 증거가 될 줄이야.",
			"그녀는 목숨을 걸고 폭로를 결심했다.",
			"이제, 감춰진 제국이 드러날 시간."
		],
		"english": [
			"Rohan's system. A grand truth hidden within perfect disguise.",
			"But Lin knew. Not all data could be accurate.",
			"A minor discrepancy, and it would become proof of massive illegal money laundering.",
			"She decided to expose it, risking her life.",
			"Now, it's time for the hidden empire to be revealed."
		],
		"japanese": [
			"ロハンのシステム。完璧な偽装の中に隠された巨大な真実。",
			"しかしリンは知っていた。全てのデータが正確なわけではないことを。",
			"ささいな不一致、それが巨大な違法な資金洗浄の証拠になるとは。",
			"彼女は命を懸けて暴露を決意した。",
			"今、隠された帝国が明らかになる時。"
		],
		"chinese": [
			"罗汉的系统。完美伪装下隐藏的巨大真相。",
			"但Lin知道。并非所有数据都能完全准确。",
			"细微的不符，竟会成为巨大非法洗钱的证据。",
			"她决定冒着生命危险揭露这一切。",
			"如今，是时候揭露这隐藏的帝国了。"
		],
		"french": [
			"Le système de Rohan. Une vérité colossale cachée sous un déguisement parfait.",
			"Mais Lin savait. Toutes les données ne pouvaient pas être exactes.",
			"Une divergence mineure, qui s'avérerait être la preuve d'un gigantesque blanchiment d'argent illégal.",
			"Elle décida de tout révéler, au péril de sa vie.",
			"Maintenant, il est temps que l'empire caché soit révélé."
		],
		"spanish": [
			"El sistema de Rohan. Una gran verdad oculta bajo un disfraz perfecto.",
			"Pero Lin lo sabía. No todos los datos podían ser precisos.",
			"Una pequeña discrepancia, que resultaría ser la prueba de un gigantesco blanqueo de dinero ilegal.",
			"Decidió exponerlo, arriesgando su vida.",
			"Ahora, es hora de que el imperio oculto sea revelado."
		],
		"vietnamese": [
			"Hệ thống của Rohan. Một sự thật vĩ đại ẩn giấu trong lớp ngụy trang hoàn hảo.",
			"Nhưng Lin biết. Không phải tất cả dữ liệu đều có thể chính xác.",
			"Một sự bất thường nhỏ, hóa ra lại là bằng chứng cho một vụ rửa tiền bất hợp pháp khổng lồ.",
			"Cô ấy quyết định tiết lộ, đánh đổi bằng cả mạng sống.",
			"Giờ là lúc đế chế ẩn giấu phải lộ diện."
		],
		"thai": [
			"ระบบของโรฮัน ความจริงอันยิ่งใหญ่ที่ซ่อนอยู่ภายใต้การปลอมแปลงที่สมบูรณ์แบบ",
			"แต่ลินรู้ดี ข้อมูลทั้งหมดไม่สามารถถูกต้องได้",
			"ความไม่สอดคล้องกันเล็กน้อย และนั่นจะกลายเป็นหลักฐานของการฟอกเงินผิดกฎหมายครั้งใหญ่",
			"เธอตัดสินใจที่จะเปิดเผยเรื่องนี้โดยเสี่ยงชีวิต",
			"ถึงเวลาแล้วที่อาณาจักรที่ซ่อนอยู่จะถูกเปิดเผย"
		],
		"hindi": [
			"रोहन का सिस्टम। एक भव्य सत्य जो सही भेस में छिपा है।",
			"लेकिन लिन जानती थी। कि सारा डेटा सटीक नहीं हो सकता।",
			"एक छोटी सी विसंगति, और यह बड़े पैमाने पर अवैध धन शोधन का प्रमाण बन जाएगी।",
			"उसने अपनी जान जोखिम में डालकर पर्दाफाश करने का फैसला किया।",
			"अब, छिपे हुए साम्राज्य के उजागर होने का समय आ गया है।"
		]
	}
} as const;
