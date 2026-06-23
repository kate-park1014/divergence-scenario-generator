export const scenario_snowy_astrielle_91_02 = {
	"scenario_id": "snowy_astrielle_91_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "순백의 도시, 기록 보관소. 모든 진실이 잠든 곳이다.",
						"english": "The city of pure white, the archives. Where all truths lie dormant.",
						"japanese": "純白の都市、記録保管所。全ての真実が眠る場所だ。",
						"chinese": "纯白之城，档案室。所有真相沉睡之地。",
						"french": "La ville d'un blanc pur, les archives. Là où toutes les vérités sommeillent.",
						"spanish": "La ciudad de blanco puro, los archivos. Donde todas las verdades yacen dormidas.",
						"vietnamese": "Thành phố thuần trắng, khu lưu trữ. Nơi mọi sự thật ẩn mình.",
						"thai": "เมืองแห่งความบริสุทธิ์ ห้องเก็บเอกสาร ที่ซึ่งความจริงทั้งมวลหลับใหล",
						"hindi": "शुद्ध श्वेत का शहर, अभिलेखागार। जहाँ सभी सत्य सुप्त हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 도서관?",
						"english": "This is... that library?",
						"japanese": "ここが…その図書館？",
						"chinese": "这里是……那个图书馆？",
						"french": "C'est... cette bibliothèque ?",
						"spanish": "¿Esta es... esa biblioteca?",
						"vietnamese": "Đây là... thư viện đó?",
						"thai": "นี่คือ...ห้องสมุดนั้น?",
						"hindi": "यह... वह पुस्तकालय है?"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 너 같은 외부인은 흔치 않지. 무엇을 찾나?",
						"english": "Indeed. Outsiders like you are rare. What do you seek?",
						"japanese": "そうだ。お前のような部外者は珍しい。何を探している？",
						"chinese": "没错。你这样的外来者很少见。你在找什么？",
						"french": "En effet. Les étrangers comme toi sont rares. Que cherches-tu ?",
						"spanish": "Así es. Los forasteros como tú son raros. ¿Qué buscas?",
						"vietnamese": "Đúng vậy. Người ngoài như cô rất hiếm. Cô tìm gì?",
						"thai": "ใช่แล้ว คนนอกเช่นเจ้าหายากนัก เจ้ากำลังตามหาอะไรอยู่?",
						"hindi": "सचमुच। तुम्हारे जैसे बाहरी लोग दुर्लभ हैं। तुम क्या ढूँढ़ रहे हो?"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 도시의… 비밀을.",
						"english": "The city's... secrets.",
						"japanese": "この都市の…秘密を。",
						"chinese": "这座城市的……秘密。",
						"french": "Les secrets... de cette ville.",
						"spanish": "Los secretos... de esta ciudad.",
						"vietnamese": "Những bí mật... của thành phố này.",
						"thai": "ความลับ...ของเมืองนี้",
						"hindi": "शहर के... रहस्य।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "비밀은 기록 속에. 특히… 사라진 이들의 기록에.",
						"english": "Secrets are in the records. Especially... the records of the lost.",
						"japanese": "秘密は記録の中に。特に…失われた者たちの記録に。",
						"chinese": "秘密在记录中。特别是……那些失落者的记录里。",
						"french": "Les secrets sont dans les archives. Surtout... les archives des disparus.",
						"spanish": "Los secretos están en los registros. Especialmente... los registros de los perdidos.",
						"vietnamese": "Bí mật nằm trong hồ sơ. Đặc biệt là... hồ sơ của những người đã mất.",
						"thai": "ความลับอยู่ในบันทึก โดยเฉพาะ...บันทึกของผู้ที่สาบสูญ",
						"hindi": "रहस्य अभिलेखों में हैं। खासकर... खोए हुए लोगों के अभिलेखों में।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사라진 사람?",
						"english": "Lost people?",
						"japanese": "失われた人？",
						"chinese": "失落的人？",
						"french": "Des gens perdus ?",
						"spanish": "¿Gente perdida?",
						"vietnamese": "Người mất tích?",
						"thai": "คนที่สาบสูญ?",
						"hindi": "खोए हुए लोग?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'온기 유지 프로토콜' 이후, 특정 구역에서만 보고된 일이다.",
						"english": "It's been reported only in specific sectors since the 'Warmth Maintenance Protocol'.",
						"japanese": "「温かさ維持プロトコル」以降、特定の区域でのみ報告されたことだ。",
						"chinese": "这是“保温协议”之后，只在特定区域报告的事情。",
						"french": "C'est un incident rapporté uniquement dans certains secteurs depuis le 'Protocole de Maintien de la Chaleur'.",
						"spanish": "Es un incidente reportado solo en sectores específicos desde el 'Protocolo de Mantenimiento de Calor'.",
						"vietnamese": "Đây là điều chỉ được báo cáo ở một số khu vực nhất định sau 'Nghị định duy trì hơi ấm'.",
						"thai": "นี่เป็นเรื่องที่ถูกรายงานในบางพื้นที่เท่านั้นนับตั้งแต่ 'พิธีสารการรักษาความอบอุ่น'",
						"hindi": "'गर्मी बनाए रखने के प्रोटोकॉल' के बाद से, यह केवल कुछ खास क्षेत्रों में ही रिपोर्ट किया गया है।"
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 그래프를 봐. 특정 구역 인구 이동이 비정상적으로 급증했어.",
						"english": "Look at this graph. Population movement in specific sectors has abnormally surged.",
						"japanese": "このグラフを見て。特定の区域の人口移動が異常に急増している。",
						"chinese": "看看这张图。特定区域的人口流动异常暴增。",
						"french": "Regardez ce graphique. Le mouvement de population dans certains secteurs a anormalement bondi.",
						"spanish": "Mira este gráfico. El movimiento de población en sectores específicos ha aumentado anormalmente.",
						"vietnamese": "Nhìn biểu đồ này đi. Di chuyển dân số ở một số khu vực nhất định đã tăng đột biến một cách bất thường.",
						"thai": "ดูกราฟนี้สิ การเคลื่อนย้ายประชากรในบางพื้นที่พุ่งสูงขึ้นอย่างผิดปกติ",
						"hindi": "इस ग्राफ़ को देखो। कुछ खास क्षेत्रों में जनसंख्या का आवागमन असामान्य रूप से बढ़ गया है।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "공식 기록엔 없어. 시스템의 틈새를 보여주는 증거지.",
						"english": "It's not in the official records. Evidence of a loophole in the system.",
						"japanese": "公式記録にはない。システムの隙間を示す証拠だ。",
						"chinese": "官方记录里没有。这是系统漏洞的证据。",
						"french": "Ce n'est pas dans les registres officiels. Preuve d'une faille dans le système.",
						"spanish": "No está en los registros oficiales. Prueba de una laguna en el sistema.",
						"vietnamese": "Không có trong hồ sơ chính thức. Bằng chứng cho thấy một lỗ hổng trong hệ thống.",
						"thai": "ไม่มีในบันทึกทางการ เป็นหลักฐานที่แสดงถึงช่องโหว่ของระบบ",
						"hindi": "यह आधिकारिक रिकॉर्ड में नहीं है। यह सिस्टम में खामी का सबूत है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그게… 뭘 의미해?",
						"english": "What does that... mean?",
						"japanese": "それが…何を意味するんだ？",
						"chinese": "那…是什么意思？",
						"french": "Qu'est-ce que... ça signifie ?",
						"spanish": "¿Qué... significa eso?",
						"vietnamese": "Điều đó… có nghĩa là gì?",
						"thai": "นั่น… หมายความว่าอะไร?",
						"hindi": "उसका… क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "프로토콜이 완벽하지 않다는 증거. 혹은… 완벽하게 조작되었다는 증거.",
						"english": "Proof that the protocol isn't perfect. Or... proof that it's been perfectly manipulated.",
						"japanese": "プロトコルが完璧ではない証拠。あるいは…完璧に操作されたという証拠だ。",
						"chinese": "协议并不完美的证据。或者说…它被完美操纵的证据。",
						"french": "Preuve que le protocole n'est pas parfait. Ou... preuve qu'il a été parfaitement manipulé.",
						"spanish": "Prueba de que el protocolo no es perfecto. O... prueba de que ha sido perfectamente manipulado.",
						"vietnamese": "Bằng chứng cho thấy nghị định không hoàn hảo. Hoặc… bằng chứng cho thấy nó đã bị thao túng một cách hoàn hảo.",
						"thai": "หลักฐานที่แสดงว่าพิธีสารไม่สมบูรณ์ หรือ… หลักฐานที่แสดงว่ามันถูกบงการอย่างสมบูรณ์แบบ",
						"hindi": "इस बात का सबूत कि प्रोटोकॉल सही नहीं है। या… इस बात का सबूत कि इसे पूरी तरह से हेरफेर किया गया है।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "외진 벽 한편, 무언가를 갈망하듯 얼어붙은 얼음 조각이 희미하게 빛났다.",
						"english": "On a secluded wall, a frozen shard of ice glowed faintly, as if yearning for something.",
						"japanese": "寂れた壁の一角で、何かを渇望するかのように凍りついた氷の破片が、かすかに光っていた。",
						"chinese": "在偏僻的墙边，一块仿佛渴望着什么的冰块发出微弱的光芒。",
						"french": "Sur un mur isolé, un éclat de glace gelé brillait faiblement, comme s'il aspirait à quelque chose.",
						"spanish": "En una pared apartada, un trozo de hielo congelado brillaba débilmente, como si anhelara algo.",
						"vietnamese": "Trên một bức tường hẻo lánh, một mảnh băng đông cứng phát sáng mờ ảo, như thể đang khao khát điều gì đó.",
						"thai": "บนกำแพงที่ห่างไกล เศษน้ำแข็งที่แข็งตัวก็ส่องแสงริบหรี่ราวกับปรารถนาสิ่งใดสิ่งหนึ่ง",
						"hindi": "एक सुनसान दीवार पर, बर्फ का एक जमा हुआ टुकड़ा मंद-मंद चमक रहा था, मानो किसी चीज़ की लालसा कर रहा हो।"
					},
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
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "넌 이 진실을 파헤치려는 건가? 시스템은 맹세를 중요시한다.",
						"english": "Are you trying to uncover this truth? The system values oaths.",
						"japanese": "君はこの真実を暴こうとしているのか？システムは誓いを重んじる。",
						"chinese": "你想揭露这个真相吗？系统很重视誓言。",
						"french": "Vas-tu tenter de découvrir cette vérité ? Le système accorde de l'importance aux serments.",
						"spanish": "Estás intentando descubrir esta verdad? El sistema valora los juramentos.",
						"vietnamese": "Ngươi muốn phơi bày sự thật này sao? Hệ thống coi trọng lời thề.",
						"thai": "เจ้ากำลังจะเปิดเผยความจริงนี้หรือ? ระบบให้ความสำคัญกับคำสาบาน",
						"hindi": "क्या तुम इस सच्चाई को उजागर करने की कोशिश कर रहे हो? सिस्टम शपथ को महत्व देता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 멈출 수 없어.",
						"english": "Yes. I can't stop.",
						"japanese": "ああ。止められない。",
						"chinese": "是的。我无法停止。",
						"french": "Oui. Je ne peux pas m'arrêter.",
						"spanish": "Sí. No puedo detenerme.",
						"vietnamese": "Đúng vậy. Không thể dừng lại.",
						"thai": "ใช่ ฉันหยุดไม่ได้",
						"hindi": "हाँ। मैं रुक नहीं सकता।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "좋아. 나는 기록관으로서 진실을 밝힐 맹세가 있다. 하지만 그 대가는…",
						"english": "Alright. As a chronicler, I have an oath to reveal the truth. But the cost...",
						"japanese": "よし。私は記録官として真実を明らかにする誓いがある。だが、その代償は…",
						"chinese": "好吧。作为记录者，我有揭露真相的誓言。但代价是…",
						"french": "Bien. En tant que chroniqueur, j'ai juré de révéler la vérité. Mais le prix...",
						"spanish": "Está bien. Como cronista, tengo un juramento de revelar la verdad. Pero el costo...",
						"vietnamese": "Được thôi. Với tư cách là người ghi chép, ta có lời thề phải tiết lộ sự thật. Nhưng cái giá phải trả thì…",
						"thai": "ตกลง ในฐานะผู้บันทึก ฉันมีคำสาบานที่จะเปิดเผยความจริง แต่ผลตอบแทนนั้น…",
						"hindi": "ठीक है। एक इतिहासकार के रूप में, मैंने सच्चाई को उजागर करने की शपथ ली है। लेकिन इसकी कीमत…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "항상 냉혹하지. 약속을 어기는 자, 지키는 자. 모두 대가를 치러야 한다.",
						"english": "It's always harsh. Those who break promises, those who keep them. Everyone pays a price.",
						"japanese": "いつも冷酷だ。約束を破る者も、守る者も。皆、代償を払わなければならない。",
						"chinese": "总是残酷的。违背誓言的人，遵守誓言的人。所有人都必须付出代价。",
						"french": "C'est toujours cruel. Ceux qui rompent leurs promesses, ceux qui les tiennent. Tout le monde paie un prix.",
						"spanish": "Siempre es cruel. Quienes rompen promesas, quienes las cumplen. Todos pagan un precio.",
						"vietnamese": "Nó luôn tàn nhẫn. Kẻ phá vỡ lời hứa, kẻ giữ lời hứa. Tất cả đều phải trả giá.",
						"thai": "มันโหดร้ายเสมอ ผู้ที่ละเมิดคำสัญญา ผู้ที่รักษามัน ทุกคนต้องจ่ายราคา",
						"hindi": "यह हमेशा क्रूर होता है। जो वादे तोड़ते हैं, जो निभाते हैं। सभी को कीमत चुकानी पड़ती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…각오했어.",
						"english": "...I'm ready.",
						"japanese": "…覚悟はできている。",
						"chinese": "…我已准备好。",
						"french": "...Je suis prêt(e).",
						"spanish": "...Estoy listo(a).",
						"vietnamese": "...Tôi đã sẵn sàng.",
						"thai": "...ฉันเตรียมใจไว้แล้ว",
						"hindi": "...मैं तैयार हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템은 쉽게 균열을 허용하지 않아. 특히… 이런 진실은 더더욱.",
						"english": "The System won't easily allow a breach. Especially... a truth like this.",
						"japanese": "システムは、容易には亀裂を許さない。特に…このような真実なら、なおさらだ。",
						"chinese": "系统不会轻易允许出现裂痕。特别是…这种真相。",
						"french": "Le Système n'autorise pas facilement les failles. Surtout... une telle vérité.",
						"spanish": "El Sistema no permitirá fácilmente una brecha. Especialmente... una verdad como esta.",
						"vietnamese": "Hệ thống sẽ không dễ dàng cho phép một vết nứt. Đặc biệt... một sự thật như thế này.",
						"thai": "ระบบไม่อนุญาตให้เกิดรอยร้าวได้ง่ายๆ โดยเฉพาะ...ความจริงเช่นนี้",
						"hindi": "सिस्टम आसानी से दरार की अनुमति नहीं देगा। खासकर... ऐसी सच्चाई को तो बिल्कुल नहीं।"
					},
					"speaker": "anuk"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 파고들면… 넌 돌아올 수 없을 거야. 나의 기록도 여기서 끝이다.",
						"english": "Delve deeper... and you won't be able to return. My records end here too.",
						"japanese": "これ以上深く踏み込めば…君は戻れなくなるだろう。私の記録もここで終わりだ。",
						"chinese": "如果再深入…你就回不来了。我的记录也到此为止。",
						"french": "Si tu vas plus loin... tu ne pourras plus revenir. Mes registres s'arrêtent ici aussi.",
						"spanish": "Si ahondas más... no podrás regresar. Mis registros también terminan aquí.",
						"vietnamese": "Nếu đi sâu hơn... ngươi sẽ không thể quay lại. Ghi chép của ta cũng kết thúc ở đây.",
						"thai": "หากเจาะลึกไปกว่านี้...เจ้าจะกลับมาไม่ได้ บันทึกของข้าก็สิ้นสุดลงตรงนี้เช่นกัน",
						"hindi": "और गहरे गए तो... तुम वापस नहीं आ पाओगे। मेरे रिकॉर्ड भी यहीं खत्म होते हैं।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이미 늦었어. 여기까지 왔는데.",
						"english": "It's already too late. I've come this far.",
						"japanese": "もう遅い。ここまで来たんだ。",
						"chinese": "已经太迟了。我都走到这里了。",
						"french": "Il est déjà trop tard. Je suis venu jusqu'ici.",
						"spanish": "Ya es demasiado tarde. He llegado hasta aquí.",
						"vietnamese": "Đã quá muộn rồi. Tôi đã đến tận đây mà.",
						"thai": "สายเกินไปแล้ว ฉันมาไกลถึงขนาดนี้",
						"hindi": "बहुत देर हो चुकी है। मैं यहाँ तक आ गया हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…그 결의, 맹세처럼 지킬 수 있기를. 시스템은 모든 약점을 노려.",
						"english": "...May that resolve be kept like a vow. The System preys on all weaknesses.",
						"japanese": "…その決意、誓いのように守れることを。システムはあらゆる弱点を狙う。",
						"chinese": "…愿你的决心，能如誓言般坚守。系统会觊觎所有弱点。",
						"french": "...Que cette résolution soit tenue comme un vœu. Le Système traque toutes les faiblesses.",
						"spanish": "...Que esa resolución se mantenga como un juramento. El Sistema acecha todas las debilidades.",
						"vietnamese": "...Mong rằng quyết tâm đó sẽ được giữ vững như lời thề. Hệ thống rình rập mọi điểm yếu.",
						"thai": "...ขอให้ความมุ่งมั่นนั้นคงอยู่ดุจคำสาบาน ระบบจ้องมองทุกจุดอ่อน",
						"hindi": "...वह संकल्प एक प्रतिज्ञा की तरह कायम रहे। सिस्टम हर कमजोरी पर नज़र रखता है।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "anuk",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "혼자라도… 간다.",
						"english": "Even alone... I'll go.",
						"japanese": "一人でも…行く。",
						"chinese": "即使只身一人…我也去。",
						"french": "Même seul(e)... j'y vais.",
						"spanish": "Incluso solo(a)... iré.",
						"vietnamese": "Dù chỉ một mình... ta vẫn đi.",
						"thai": "แม้จะลำพัง...ฉันก็จะไป",
						"hindi": "अकेले भी... मैं जाऊँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 공기가 살기를 품었다. 그들의 앞을 가로막는 존재가 있었다.",
						"english": "The cold air held a murderous intent. A presence stood in their way.",
						"japanese": "冷たい空気が殺気を帯びた。彼らの行く手を阻む存在がいた。",
						"chinese": "冰冷的空气中带着杀气。一个存在挡在了他们面前。",
						"french": "L'air froid était empreint d'intention meurtrière. Une présence barrait leur chemin.",
						"spanish": "El aire frío contenía una intención asesina. Una presencia se interponía en su camino.",
						"vietnamese": "Không khí lạnh chứa sát khí. Một sự tồn tại đã chặn đứng họ.",
						"thai": "อากาศเย็นยะเยือกแฝงไว้ด้วยเจตนาร้าย มีบางสิ่งยืนขวางทางพวกเขาอยู่",
						"hindi": "ठंडी हवा में घातक इरादा था। एक उपस्थिति उनके रास्ते में खड़ी थी।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "무모한 시도였다. 질서는… 깨지지 않아. 약속된 운명처럼.",
						"english": "A reckless attempt. Order… cannot be broken. Like a promised fate.",
						"japanese": "無謀な試みだった。秩序は…破られない。約束された運命のように。",
						"chinese": "一次鲁莽的尝试。秩序…不会被打破。如同注定的命运。",
						"french": "Une tentative imprudente. L'ordre… ne peut être brisé. Comme un destin promis.",
						"spanish": "Un intento imprudente. El orden… no puede romperse. Como un destino prometido.",
						"vietnamese": "Một nỗ lực liều lĩnh. Trật tự… không thể bị phá vỡ. Như một số phận đã định.",
						"thai": "เป็นการพยายามที่บ้าระห่ำ ระเบียบ…ไม่สามารถถูกทำลายได้ ดั่งโชคชะตาที่ถูกกำหนดไว้",
						"hindi": "एक लापरवाह प्रयास था। व्यवस्था… टूट नहीं सकती। एक वादे के भाग्य की तरह।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은… 반드시 찾을 거야.",
						"english": "…it's not over yet. The truth… I will surely find it.",
						"japanese": "…まだ終わっていない。真実は…必ず見つけ出す。",
						"chinese": "…还没结束。真相…我一定会找到。",
						"french": "…ce n'est pas encore fini. La vérité… je la trouverai à coup sûr.",
						"spanish": "…aún no ha terminado. La verdad… la encontraré sin falta.",
						"vietnamese": "…chưa kết thúc đâu. Sự thật… ta nhất định sẽ tìm ra.",
						"thai": "…ยังไม่จบแค่นี้ ความจริง…ข้าจะต้องค้นพบมันให้ได้",
						"hindi": "…अभी खत्म नहीं हुआ है। सच्चाई… मैं निश्चित रूप से इसे ढूंढूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 약점은… 그 온기 없는 감정이야. 그것이 너를 파멸로 이끌 것이다.",
						"english": "Your weakness is… that emotionless feeling. It will lead you to ruin.",
						"japanese": "お前の弱点は…その温もりのない感情だ。それがお前を破滅へと導くだろう。",
						"chinese": "你的弱点是…那份冰冷的感情。它将把你引向毁灭。",
						"french": "Ta faiblesse est… cette émotion sans chaleur. Elle te mènera à la ruine.",
						"spanish": "Tu debilidad es… ese sentimiento sin calidez. Te llevará a la ruina.",
						"vietnamese": "Điểm yếu của ngươi là… cảm xúc vô cảm đó. Nó sẽ dẫn ngươi đến sự diệt vong.",
						"thai": "จุดอ่อนของเจ้าคือ…ความรู้สึกที่ปราศจากความอบอุ่นนั้น มันจะนำพาเจ้าไปสู่ความหายนะ",
						"hindi": "तुम्हारी कमजोरी है… वह भावहीन भावना। यह तुम्हें विनाश की ओर ले जाएगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "네가… 균열을 넓혀도….",
						"english": "Even if you… widen the rift…",
						"japanese": "お前が…亀裂を広げても…",
						"chinese": "即使你…扩大了裂痕…",
						"french": "Même si tu… élargis la fissure…",
						"spanish": "Aunque tú… ensanches la grieta…",
						"vietnamese": "Dù ngươi… có làm rộng vết nứt…",
						"thai": "แม้ว่าเจ้าจะ…ขยายรอยแยกนั้น…",
						"hindi": "भले ही तुम… दरार को चौड़ा करो…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳에는… 네가 감당 못할 질서가 기다린다. 잊혀진 온기처럼.",
						"english": "In deeper places… an order you cannot handle awaits. Like forgotten warmth.",
						"japanese": "より深い場所には…お前には手に負えない秩序が待っている。忘れられた温もりのように。",
						"chinese": "在更深的地方…你无法承受的秩序正在等待。如同被遗忘的温暖。",
						"french": "Dans les profondeurs… un ordre que tu ne pourras maîtriser t'attend. Comme une chaleur oubliée.",
						"spanish": "En lugares más profundos… te espera un orden que no podrás manejar. Como una calidez olvidada.",
						"vietnamese": "Ở những nơi sâu hơn… một trật tự mà ngươi không thể đối phó đang chờ đợi. Như hơi ấm bị lãng quên.",
						"thai": "ในที่ที่ลึกกว่านั้น…ระเบียบที่เจ้าไม่อาจรับมือได้รออยู่ เหมือนความอบอุ่นที่ถูกลืมเลือน",
						"hindi": "गहरी जगहों में… एक ऐसी व्यवस्था तुम्हारा इंतजार कर रही है जिसे तुम संभाल नहीं सकते। भूले हुए warmth की तरह।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…진실은 드러날 거야. 어떤 질서든.",
						"english": "…the truth will be revealed. Whatever the order.",
						"japanese": "…真実は明らかになるだろう。どんな秩序であろうと。",
						"chinese": "…真相将会揭露。无论何种秩序。",
						"french": "…la vérité sera révélée. Quel que soit l'ordre.",
						"spanish": "…la verdad será revelada. Sea cual sea el orden.",
						"vietnamese": "…sự thật sẽ được phơi bày. Bất kể trật tự nào.",
						"thai": "…ความจริงจะถูกเปิดเผย ไม่ว่าจะเป็นระเบียบใดก็ตาม",
						"hindi": "…सच्चाई सामने आएगी। चाहे जो भी व्यवस्था हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 도시의 기록은 찢어졌지만, 더 거대한 의문이 남았다. 억압된 그리움의 그림자처럼 다가올 다음 진실은.",
						"english": "The records of the cold city were torn, but a greater question remained. The next truth approaches, like the shadow of suppressed longing.",
						"japanese": "冷たい都市の記録は引き裂かれたが、より大きな疑問が残った。抑圧された郷愁の影のように、次に訪れる真実とは。",
						"chinese": "冰冷城市的记录被撕裂，但一个更大的疑问留了下来。下一个真相将如被压抑的思念之影般降临。",
						"french": "Les archives de la ville froide ont été déchirées, mais une question plus grande subsiste. La prochaine vérité approche, comme l'ombre d'un désir refoulé.",
						"spanish": "Los registros de la ciudad fría fueron rasgados, pero una pregunta mayor permaneció. La próxima verdad se acerca, como la sombra de un anhelo reprimido.",
						"vietnamese": "Các ghi chép về thành phố lạnh lẽo đã bị xé nát, nhưng một câu hỏi lớn hơn vẫn còn. Sự thật tiếp theo sẽ đến, như bóng tối của nỗi khao khát bị kìm nén.",
						"thai": "บันทึกของเมืองอันเยือกเย็นถูกฉีกขาด ทว่าคำถามที่ยิ่งใหญ่กว่ายังคงอยู่ ความจริงถัดไปจะมาถึงดุจเงาแห่งความปรารถนาที่ถูกกดทับ",
						"hindi": "ठंडे शहर के अभिलेख फट गए थे, लेकिन एक बड़ा सवाल बना रहा। अगली सच्चाई आ रही है, दबी हुई लालसा की छाया की तरह।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 시스템의 균열을 들여다보는가.",
						"english": "How dare you... peer into the System's breach?",
						"japanese": "よくも…システムの亀裂を覗き見るか。",
						"chinese": "竟敢…窥探系统的裂痕？",
						"french": "Comment oses-tu... scruter la faille du Système ?",
						"spanish": "¿Cómo osas... asomarte a la brecha del Sistema?",
						"vietnamese": "Ngươi dám... nhìn vào vết nứt của Hệ thống sao?",
						"thai": "บังอาจ...มาสอดส่องรอยร้าวของระบบหรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... सिस्टम की दरार में झाँकने की?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 것은 기록되어야 한다. 그리고 잊혀져야 한다. 그것이 질서다.",
						"english": "All things must be recorded. And then forgotten. That is order.",
						"japanese": "全ては記録されねばならない。そして忘れ去られねばならない。それが秩序だ。",
						"chinese": "一切都必须被记录。然后被遗忘。那便是秩序。",
						"french": "Tout doit être enregistré. Et puis oublié. C'est l'ordre.",
						"spanish": "Todo debe ser registrado. Y luego olvidado. Ese es el orden.",
						"vietnamese": "Mọi thứ phải được ghi lại. Và rồi phải bị lãng quên. Đó là trật tự.",
						"thai": "ทุกสิ่งต้องถูกบันทึก และจากนั้นก็ถูกลืม นั่นคือระเบียบ",
						"hindi": "सब कुछ दर्ज होना चाहिए। और फिर भुला दिया जाना चाहिए। वही व्यवस्था है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신이… 이 모든 것을 꾸민 건가?",
						"english": "Did you... orchestrate all of this?",
						"japanese": "あなたが…この全てを企んだのか？",
						"chinese": "难道是你…策划了这一切？",
						"french": "Est-ce vous... qui avez orchestré tout cela ?",
						"spanish": "¿Fuiste tú... quien orquestó todo esto?",
						"vietnamese": "Có phải ông... đã dàn dựng tất cả chuyện này?",
						"thai": "ท่าน...เป็นคนบงการเรื่องทั้งหมดนี้หรือ",
						"hindi": "क्या तुमने... यह सब रचा है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 질서를 유지할 뿐. 불필요한 온기는 제거되어야 해.",
						"english": "I merely… maintain order. Unnecessary warmth must be purged.",
						"japanese": "私はただ…秩序を維持するだけだ。不要な温もりは排除されなければならない。",
						"chinese": "我只是…维持秩序。不必要的温暖必须被清除。",
						"french": "Je ne fais que… maintenir l'ordre. Toute chaleur inutile doit être éliminée.",
						"spanish": "Yo solo… mantengo el orden. La calidez innecesaria debe ser eliminada.",
						"vietnamese": "Ta chỉ… duy trì trật tự. Sự ấm áp không cần thiết phải bị loại bỏ.",
						"thai": "ข้าเพียง…รักษาความเป็นระเบียบ ความอบอุ่นที่ไม่จำเป็นต้องถูกกำจัดออกไป",
						"hindi": "मैं बस… व्यवस्था बनाए रखता हूँ। अनावश्यक गर्मजोशी को हटाना होगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재가 앞을 가로막았다. 차가운 기운이 공간을 압도한다.",
						"english": "An unknown entity blocked the way. A cold aura overwhelms the space.",
						"japanese": "正体不明の存在が道を阻んだ。冷たい気が空間を圧倒する。",
						"chinese": "一个不明实体挡住了去路。冰冷的气息笼罩着整个空间。",
						"french": "Une entité inconnue a bloqué le chemin. Une aura froide submerge l'espace.",
						"spanish": "Una entidad desconocida bloqueó el camino. Un aura fría abruma el espacio.",
						"vietnamese": "Một thực thể không rõ danh tính đã chặn đường. Một luồng khí lạnh lẽo bao trùm không gian.",
						"thai": "สิ่งลึกลับบางอย่างขวางทางอยู่ พลังงานเย็นเยียบปกคลุมทั่วบริเวณ",
						"hindi": "एक अज्ञात सत्ता ने रास्ता रोका। एक ठंडी आभा ने स्थान को अभिभूत कर दिया।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시스템의 균열이 드러나기 시작했다.",
			"완벽한 질서 뒤에 감춰진 사라진 이들의 그림자.",
			"차가운 도시의 기록관은 의문을 제기하고, 진실은 언제나 불편한 법이다.",
			"어딘가 잊혀진 온기가, 도시의 차가운 심장을 두드렸다."
		],
		"english": [
			"Cracks in the system began to appear.",
			"The shadows of the lost, hidden behind perfect order.",
			"The archivist of the cold city raises questions, and the truth is always uncomfortable.",
			"A forgotten warmth, somewhere, knocked on the city's cold heart."
		],
		"japanese": [
			"システムの亀裂が現れ始めた。",
			"失われた者たちの影、完璧な秩序の裏に隠された。",
			"冷たい都市の記録官は疑問を投げかけ、真実は常に不都合なものだ。",
			"忘れられた温もりが、どこかで都市の冷たい心臓を叩いた。"
		],
		"chinese": [
			"系统的裂痕开始显现。",
			"失落者的影子，隐藏在完美的秩序之后。",
			"冰冷城市的档案员提出疑问，而真相总是令人不安的。",
			"一丝遗忘的温暖，在某个地方，敲击着城市冰冷的心脏。"
		],
		"french": [
			"Des failles dans le système ont commencé à apparaître.",
			"Les ombres des disparus, cachées derrière un ordre parfait.",
			"L'archiviste de la ville froide soulève des questions, et la vérité est toujours inconfortable.",
			"Une chaleur oubliée, quelque part, a frappé le cœur froid de la ville."
		],
		"spanish": [
			"Las grietas en el sistema comenzaron a aparecer.",
			"Las sombras de los perdidos, ocultas tras un orden perfecto.",
			"El archivista de la ciudad fría plantea interrogantes, y la verdad siempre es incómoda.",
			"Un calor olvidado, en algún lugar, golpeó el frío corazón de la ciudad."
		],
		"vietnamese": [
			"Những vết nứt trong hệ thống bắt đầu xuất hiện.",
			"Bóng tối của những người đã mất, ẩn sau trật tự hoàn hảo.",
			"Người quản lý hồ sơ của thành phố lạnh lẽo đặt ra câu hỏi, và sự thật luôn khó chịu.",
			"Một sự ấm áp bị lãng quên, ở đâu đó, gõ cửa trái tim lạnh lẽo của thành phố."
		],
		"thai": [
			"รอยร้าวในระบบเริ่มปรากฏขึ้น",
			"เงาของผู้ที่สาบสูญ ซ่อนอยู่เบื้องหลังระเบียบที่สมบูรณ์แบบ",
			"บรรณารักษ์แห่งเมืองที่เยือกเย็นตั้งคำถาม และความจริงมักไม่น่าพิสมัย",
			"ความอบอุ่นที่ถูกลืมเลือน เคาะประตูหัวใจอันเย็นชาของเมือง"
		],
		"hindi": [
			"सिस्टम में दरारें दिखने लगीं।",
			"खोए हुए लोगों की परछाइयाँ, पूर्ण व्यवस्था के पीछे छिपी हुई।",
			"शांत शहर का अभिलेखागार सवाल उठाता है, और सच हमेशा असहज होता है।",
			"कहीं एक भूली हुई गर्माहट ने शहर के ठंडे दिल पर दस्तक दी।"
		]
	}
} as const;
