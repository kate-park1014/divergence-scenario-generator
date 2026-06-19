export const scenario_modern_nemesis_15_02 = {
	"scenario_id": "modern_nemesis_15_02",
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
	"prologue": {
		"korean": [
			"고대 기록실, 먼지 쌓인 책들 사이.",
			"한 학자는 밤낮없이 진실을 쫓았다.",
			"네메시스가 숨긴 유물들, 그 조각들이 말하는 것은.",
			"피로 맺은 서약. 그리고 그 대가."
		],
		"english": [
			"Ancient archives, amidst dusty books.",
			"A scholar pursued the truth, day and night.",
			"The artifacts Nemesis hid, what their fragments tell.",
			"A covenant sealed with blood. And its price."
		],
		"japanese": [
			"古の記録室、埃積もる書物の間。",
			"ある学者は昼夜を問わず真実を追った。",
			"ネメシスが隠した遺物、その破片が語るもの。",
			"血で交わされた誓約。そしてその代償。"
		],
		"chinese": [
			"古老的档案室，尘封的书籍之间。",
			"一位学者夜以继日地追寻真相。",
			"复仇女神隐藏的文物，碎片所揭示的。",
			"以血立下的誓约。以及其代价。"
		],
		"french": [
			"Anciennes archives, au milieu des livres poussiéreux.",
			"Un érudit cherchait la vérité, jour et nuit.",
			"Les artefacts cachés par Nemesis, ce que leurs fragments révèlent.",
			"Un pacte scellé par le sang. Et son prix."
		],
		"spanish": [
			"Antiguos archivos, entre libros empolvados.",
			"Un erudito persiguió la verdad, día y noche.",
			"Los artefactos que Némesis ocultó, lo que sus fragmentos cuentan.",
			"Un pacto sellado con sangre. Y su precio."
		],
		"vietnamese": [
			"Phòng lưu trữ cổ xưa, giữa những cuốn sách phủ bụi.",
			"Một học giả theo đuổi sự thật không ngừng nghỉ.",
			"Những di vật Nemesis giấu, những mảnh ghép đó nói lên điều gì.",
			"Một giao ước bằng máu. Và cái giá phải trả."
		],
		"thai": [
			"หอจดหมายเหตุโบราณ ท่ามกลางหนังสือที่เต็มไปด้วยฝุ่น",
			"นักวิชาการคนหนึ่งตามล่าความจริงทั้งวันทั้งคืน",
			"วัตถุโบราณที่ Nemesis ซ่อนไว้ ชิ้นส่วนเหล่านั้นบอกอะไร",
			"พันธสัญญาที่ผนึกด้วยเลือด และราคาของมัน"
		],
		"hindi": [
			"प्राचीन अभिलेखागार, धूल भरी किताबों के बीच।",
			"एक विद्वान ने दिन-रात सच्चाई का पीछा किया।",
			"नेमेसिस ने जो कलाकृतियाँ छिपाईं, उनके टुकड़े क्या बताते हैं।",
			"खून से बंधी एक वाचा। और उसकी कीमत।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 오래된 기록 보관소. 린은 고대 문헌에 파묻혔다.",
						"english": "The city's oldest archives. Lynn was buried in ancient texts.",
						"japanese": "街で最も古い記録保管所。リンは古文書に埋もれていた。",
						"chinese": "城市最古老的档案室。琳沉浸在古籍之中。",
						"french": "Les plus anciennes archives de la ville. Lynn était plongée dans les textes anciens.",
						"spanish": "Los archivos más antiguos de la ciudad. Lynn estaba inmersa en textos antiguos.",
						"vietnamese": "Kho lưu trữ cổ nhất thành phố. Lynn vùi mình trong các văn bản cổ.",
						"thai": "หอจดหมายเหตุที่เก่าแก่ที่สุดของเมือง ลินน์จมอยู่กับเอกสารโบราณ",
						"hindi": "शहर का सबसे पुराना अभिलेखागार। लिन प्राचीन ग्रंथों में डूबी हुई थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "린, 뭐라도 찾았어?",
						"english": "Lynn, found anything?",
						"japanese": "リン、何か見つかった？",
						"chinese": "琳，你找到什么了吗？",
						"french": "Lynn, tu as trouvé quelque chose ?",
						"spanish": "¿Lynn, encontraste algo?",
						"vietnamese": "Lynn, tìm thấy gì chưa?",
						"thai": "ลินน์ เจออะไรบ้างไหม?",
						"hindi": "लिन, कुछ मिला क्या?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "...이제야 맞춰지는 조각들이 보여.",
						"english": "...Now I see the pieces fitting together.",
						"japanese": "...ようやくピースがはまっていくのが見える。",
						"chinese": "...现在我看到碎片正在拼凑起来。",
						"french": "…Maintenant je vois les pièces s'assembler.",
						"spanish": "...Ahora veo las piezas encajar.",
						"vietnamese": "...Giờ thì tôi thấy các mảnh ghép đang khớp vào nhau.",
						"thai": "...ตอนนี้ฉันเห็นชิ้นส่วนที่กำลังประกอบเข้าด้วยกันแล้ว",
						"hindi": "अब मुझे टुकड़े एक साथ फिट होते दिख रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "네메시스가 모으던 유물들... 그게 그냥 장식품이 아니었어.",
						"english": "The artifacts Nemesis was collecting... they weren't just ornaments.",
						"japanese": "ネメシスが集めていた遺物...あれはただの装飾品じゃなかった。",
						"chinese": "复仇女神收集的那些文物...它们不仅仅是装饰品。",
						"french": "Les artefacts que Nemesis collectionnait... ce n'étaient pas que des ornements.",
						"spanish": "Los artefactos que Némesis estaba coleccionando... no eran solo adornos.",
						"vietnamese": "Những di vật Nemesis thu thập... chúng không chỉ là đồ trang trí.",
						"thai": "วัตถุโบราณที่ Nemesis สะสม...พวกมันไม่ใช่แค่ของประดับ",
						"hindi": "नेमेसिस जिन कलाकृतियों को इकट्ठा कर रहा था... वे सिर्फ गहने नहीं थीं।"
					},
					"speaker": "lin",
					"type": "speech",
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
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이게 '백년회'의 맹세문 조각들이야. 고대어로 쓰여 있어.",
						"english": "These are fragments of the 'Centennial Society's' oath. Written in ancient language.",
						"japanese": "これらは『百年会』の誓約書の断片よ。古語で書かれているわ。",
						"chinese": "这些是“百年会”誓词的碎片。用古语写成的。",
						"french": "Ce sont des fragments du serment de la 'Société Centenaire'. Écrit en langue ancienne.",
						"spanish": "Estos son fragmentos del juramento de la 'Sociedad Centenaria'. Escritos en lengua antigua.",
						"vietnamese": "Đây là những mảnh của lời thề 'Hội Trăm Năm'. Viết bằng ngôn ngữ cổ.",
						"thai": "นี่คือเศษเสี้ยวของคำปฏิญาณ 'สมาคมศตวรรษ' เขียนด้วยภาษาโบราณ",
						"hindi": "ये 'शताब्दी समाज' की शपथ के अंश हैं। प्राचीन भाषा में लिखे गए हैं।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세문? 그게 뭔데?",
						"english": "An oath? What's that?",
						"japanese": "誓約書？それって何？",
						"chinese": "誓词？那是什么？",
						"french": "Un serment ? Qu'est-ce que c'est ?",
						"spanish": "¿Un juramento? ¿Qué es eso?",
						"vietnamese": "Lời thề ư? Đó là gì?",
						"thai": "คำปฏิญาณ? นั่นคืออะไร?",
						"hindi": "शपथ? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "이 서약을 어긴 자들은... 비극적인 대가를 치렀다고 기록되어 있어.",
						"english": "Those who broke this oath... paid a tragic price, it is recorded.",
						"japanese": "この誓約を破った者たちは…悲劇的な代償を払ったと記録されている。",
						"chinese": "违背誓约者……付出了悲惨的代价，记载中是这样写的。",
						"french": "Ceux qui ont brisé ce serment... ont payé un prix tragique, il est enregistré.",
						"spanish": "Aquellos que rompieron este juramento... pagaron un precio trágico, está registrado.",
						"vietnamese": "Những kẻ phá vỡ lời thề này... đã phải trả một cái giá bi thảm, được ghi lại.",
						"thai": "ผู้ที่ละเมิดคำสาบานนี้... ต้องชดใช้ด้วยโศกนาฏกรรม มีบันทึกไว้เช่นนั้น",
						"hindi": "जो इस शपथ को तोड़ते हैं... उन्होंने एक दुखद कीमत चुकाई, ऐसा दर्ज है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도시에서 반복되는 기이한 죽음의 패턴과 너무나 일치해.",
						"english": "It aligns too perfectly with the recurring pattern of strange deaths in the city.",
						"japanese": "それは、都市で繰り返される奇妙な死のパターンとあまりにも一致する。",
						"chinese": "与城市中反复出现的离奇死亡模式惊人地吻合。",
						"french": "Cela correspond trop parfaitement au schéma récurrent des morts étranges dans la ville.",
						"spanish": "Coincide demasiado bien con el patrón recurrente de muertes extrañas en la ciudad.",
						"vietnamese": "Nó quá trùng khớp với mô hình những cái chết kỳ lạ lặp đi lặp lại trong thành phố.",
						"thai": "มันตรงกับรูปแบบการตายแปลกๆ ที่เกิดขึ้นซ้ำๆ ในเมืองมากเกินไป",
						"hindi": "यह शहर में अजीब मौतों के बार-बार होने वाले पैटर्न से बहुत मेल खाता है।"
					}
				},
				{
					"content": {
						"korean": "...설마.",
						"english": "...No way.",
						"japanese": "…まさか。",
						"chinese": "……难道是。",
						"french": "...Non, ce n'est pas possible.",
						"spanish": "...No puede ser.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่จริงน่า",
						"hindi": "...कहीं ऐसा तो नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "고대 기록에는 서약을 어긴 자들의 비참한 최후가 상세히 나와있어.",
						"english": "Ancient records detail the miserable end of those who broke the oath.",
						"japanese": "古文書には、誓約を破った者たちの悲惨な末路が詳しく記されている。",
						"chinese": "古籍中详细记载了违背誓约者的悲惨结局。",
						"french": "Les anciens registres détaillent la fin misérable de ceux qui ont brisé le serment.",
						"spanish": "Los registros antiguos detallan el miserable final de aquellos que rompieron el juramento.",
						"vietnamese": "Các ghi chép cổ đại kể chi tiết về cái kết bi thảm của những kẻ phá vỡ lời thề.",
						"thai": "บันทึกโบราณระบุถึงจุดจบอันน่าอนาถของผู้ที่ละเมิดคำสาบานไว้อย่างละเอียด",
						"hindi": "प्राचीन अभिलेखों में शपथ तोड़ने वालों के दुखद अंत का विस्तार से वर्णन है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "하나같이 '영겁의 굴레'에 갇혔다고... 영혼조차 자유롭지 못하게.",
						"english": "All of them were trapped in an 'eternal cycle'... their souls not even free.",
						"japanese": "皆が「永遠の輪廻」に囚われたと…魂さえ自由になれずに。",
						"chinese": "无一例外地被困在“永恒的轮回”中……甚至连灵魂都无法获得自由。",
						"french": "Tous furent piégés dans une « boucle éternelle »... leurs âmes même pas libres.",
						"spanish": "Todos quedaron atrapados en un 'ciclo eterno'... ni siquiera sus almas libres.",
						"vietnamese": "Tất cả đều bị mắc kẹt trong 'vòng luân hồi vĩnh cửu'... linh hồn cũng không được tự do.",
						"thai": "ทุกคนถูกขังอยู่ใน 'วัฏจักรนิรันดร์'... แม้แต่จิตวิญญาณก็ไม่เป็นอิสระ",
						"hindi": "सभी 'अनंत चक्र' में फंस गए... उनकी आत्माएं भी आज़ाद नहीं थीं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네메시스가 그 서약을 집행하는 거라고?",
						"english": "Nemesis is enforcing that oath?",
						"japanese": "ネメシスがその誓約を執行していると？",
						"chinese": "涅墨西斯在执行那个誓约？",
						"french": "Némésis est en train d'appliquer ce serment ?",
						"spanish": "¿Némesis está haciendo cumplir ese juramento?",
						"vietnamese": "Nemesis đang thi hành lời thề đó sao?",
						"thai": "เนเมซิสกำลังบังคับใช้คำสาบานนั้นหรือ?",
						"hindi": "नेमेसिस उस शपथ को लागू कर रही है?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "...점점 더 확신하게 돼. 이건 단순한 사업이 아니야.",
						"english": "...I'm becoming more and more convinced. This isn't just a simple business.",
						"japanese": "…だんだん確信してきた。これは単なるビジネスじゃない。",
						"chinese": "……我越来越确信。这不仅仅是一笔生意。",
						"french": "Je suis de plus en plus convaincu. Ce n'est pas une simple affaire.",
						"spanish": "Cada vez estoy más convencido. Esto no es solo un simple negocio.",
						"vietnamese": "Tôi ngày càng tin chắc. Đây không phải là một công việc kinh doanh đơn thuần.",
						"thai": "ฉันเริ่มแน่ใจมากขึ้นเรื่อยๆ นี่ไม่ใช่แค่ธุรกิจธรรมดา",
						"hindi": "मुझे और भी यकीन होता जा रहा है। यह सिर्फ एक साधारण व्यवसाय नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "소름 끼쳐.",
						"english": "It's chilling.",
						"japanese": "鳥肌が立つ。",
						"chinese": "毛骨悚然。",
						"french": "C'est effrayant.",
						"spanish": "Qué espeluznante.",
						"vietnamese": "Thật rùng rợn.",
						"thai": "น่าขนลุก",
						"hindi": "यह डरावना है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 서약은 한 번 맺으면 끝낼 수 없어. 죽음으로도 파기되지 않아.",
						"english": "Once this oath is made, it cannot be undone. Not even death can break it.",
						"japanese": "この誓約は一度結べば終わらせられない。死んでも破棄されない。",
						"chinese": "这个誓约一旦结下，就无法终结。即使是死亡也无法将其解除。",
						"french": "Une fois ce serment fait, on ne peut plus y mettre fin. La mort même ne peut pas le briser.",
						"spanish": "Una vez hecho este juramento, no se puede deshacer. Ni siquiera la muerte puede romperlo.",
						"vietnamese": "Khi lời thề này được lập, nó không thể kết thúc. Ngay cả cái chết cũng không thể phá vỡ nó.",
						"thai": "เมื่อคำสาบานนี้ถูกผูกมัดแล้ว จะยกเลิกไม่ได้ แม้ความตายก็ไม่อาจทำลายได้",
						"hindi": "एक बार यह शपथ ली जाती है, तो इसे समाप्त नहीं किया जा सकता। मृत्यु भी इसे तोड़ नहीं सकती।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 어떻게 해야 해?",
						"english": "Then what should we do?",
						"japanese": "じゃあ、私たちはどうすればいいの？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy thì chúng ta phải làm gì?",
						"thai": "แล้วเราจะทำอย่างไรดี?",
						"hindi": "तो हमें क्या करना चाहिए?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "네메시스의 정체를 완전히 폭로해야 해. 그 굴레를 끊어내려면.",
						"english": "We must fully expose Nemesis's true identity to break free from its grasp.",
						"japanese": "ネメシスの正体を完全に暴かなければならない。その束縛を断ち切るには。",
						"chinese": "我们必须彻底揭露涅墨西斯的真实身份，才能挣脱它的束缚。",
						"french": "Nous devons révéler la véritable identité de Némésis pour briser son emprise.",
						"spanish": "Debemos exponer completamente la verdadera identidad de Némesis para romper su yugo.",
						"vietnamese": "Chúng ta phải phơi bày hoàn toàn danh tính thật của Nemesis để phá vỡ xiềng xích đó.",
						"thai": "เราต้องเปิดเผยตัวตนที่แท้จริงของเนเมซิสให้หมดสิ้น เพื่อที่จะหลุดพ้นจากพันธนาการนั้น",
						"hindi": "हमें नेमेसिस की असली पहचान को पूरी तरह से उजागर करना होगा, उस बंधन को तोड़ने के लिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "하지만... 그들은 우리가 생각하는 것보다 훨씬 거대해.",
						"english": "But... they are far grander than we imagine.",
						"japanese": "しかし... 彼らは我々が考えるよりもはるかに巨大だ。",
						"chinese": "但是... 他们远比我们想象的要强大。",
						"french": "Mais... ils sont bien plus immenses que nous ne l'imaginons.",
						"spanish": "Pero... son mucho más grandes de lo que pensamos.",
						"vietnamese": "Nhưng... chúng lớn hơn nhiều so với những gì chúng ta nghĩ.",
						"thai": "แต่... พวกมันยิ่งใหญ่กว่าที่เราคิดไว้มาก",
						"hindi": "लेकिन... वे हमारी सोच से कहीं ज़्यादा विशाल हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3",
					"content": {
						"korean": "...그래도 멈출 순 없어.",
						"english": "...Even so, we can't stop.",
						"japanese": "...それでも、止まることはできない。",
						"chinese": "...即便如此，也无法停止。",
						"french": "...Malgré tout, nous ne pouvons pas nous arrêter.",
						"spanish": "...Aún así, no podemos detenernos.",
						"vietnamese": "...Dù vậy, không thể dừng lại.",
						"thai": "...ถึงอย่างนั้น ก็หยุดไม่ได้",
						"hindi": "...फिर भी, हम रुक नहीं सकते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "고대 기록실 깊숙한 곳, 거대한 그림자가 나타났다.",
						"english": "Deep within the ancient archives, a colossal shadow appeared.",
						"japanese": "古代記録室の奥深く、巨大な影が現れた。",
						"chinese": "在古老的记录室深处，一个巨大的身影出现了。",
						"french": "Au plus profond des archives anciennes, une ombre colossale apparut.",
						"spanish": "En lo profundo de los antiguos archivos, una sombra colosal apareció.",
						"vietnamese": "Sâu trong phòng lưu trữ cổ đại, một bóng đen khổng lồ xuất hiện.",
						"thai": "ลึกเข้าไปในห้องสมุดโบราณ เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "प्राचीन अभिलेखागार के गहरे में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "저자가... 서약의 파수꾼 중 하나야.",
						"english": "That one... is one of the Oathkeepers.",
						"japanese": "あいつが... 誓約の番人の一人だ。",
						"chinese": "那个家伙... 是誓约的守护者之一。",
						"french": "Celui-là... est l'un des Gardiens du Serment.",
						"spanish": "Ese... es uno de los Guardianes del Pacto.",
						"vietnamese": "Kẻ đó... là một trong những Người giữ Lời thề.",
						"thai": "นั่น... คือหนึ่งในผู้พิทักษ์คำสาบาน",
						"hindi": "वह... शपथ रक्षकों में से एक है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "...어리석은 인간들. 서약은 절대적이다.",
						"english": "...Foolish humans. The Oath is absolute.",
						"japanese": "...愚かな人間ども。誓約は絶対だ。",
						"chinese": "...愚蠢的人类。誓约是绝对的。",
						"french": "...Humains insensés. Le Serment est absolu.",
						"spanish": "...Humanos necios. El Pacto es absoluto.",
						"vietnamese": "...Loài người ngu ngốc. Lời thề là tuyệt đối.",
						"thai": "...มนุษย์โง่เขลา คำสาบานเป็นสิ่งสัมบูรณ์",
						"hindi": "...मूर्ख मनुष्य। शपथ पूर्ण है।"
					}
				},
				{
					"content": {
						"korean": "비켜! 우리가 이걸 끝낼 거야!",
						"english": "Get out of the way! We'll end this!",
						"japanese": "退け！我々がこれを終わらせる！",
						"chinese": "让开！我们会了结这一切！",
						"french": "Dégagez ! Nous allons en finir !",
						"spanish": "¡Apartaos! ¡Nosotros terminaremos con esto!",
						"vietnamese": "Tránh ra! Chúng ta sẽ kết thúc chuyện này!",
						"thai": "หลีกไป! เราจะจัดการเรื่องนี้เอง!",
						"hindi": "हट जाओ! हम इसे खत्म करेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 대가를 치르려 하는가?",
						"english": "Do you dare to pay the price?",
						"japanese": "敢えて代償を払うというのか？",
						"chinese": "竟敢承担代价？",
						"french": "Osez-vous en payer le prix ?",
						"spanish": "¿Os atrevéis a pagar el precio?",
						"vietnamese": "Ngươi dám trả giá sao?",
						"thai": "เจ้ากล้าที่จะจ่ายราคาหรือ?",
						"hindi": "क्या तुम कीमत चुकाने की हिम्मत करते हो?"
					}
				},
				{
					"direction": "down",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 하지만 그림자는 여전히 남아있었다.",
						"english": "The unknown boss fell. But the shadow still remained.",
						"japanese": "正体不明のボスが倒れた。しかし、影は依然として残っていた。",
						"chinese": "身份不明的首领倒下了。但那道阴影依然存在。",
						"french": "Le boss inconnu est tombé. Mais l'ombre demeurait toujours.",
						"spanish": "El jefe desconocido cayó. Pero la sombra aún permanecía.",
						"vietnamese": "Con trùm không rõ danh tính đã gục ngã. Nhưng bóng đen vẫn còn đó.",
						"thai": "บอสปริศนาล้มลงแล้ว แต่เงายังคงอยู่",
						"hindi": "अज्ञात बॉस गिर गया। लेकिन छाया अभी भी बनी हुई थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...이것은 시작일 뿐... 진짜 집행자는... 따로 있다...",
						"english": "...This is just the beginning... The true enforcer... is elsewhere...",
						"japanese": "...これは始まりに過ぎない... 真の執行者は... 別にいる...",
						"chinese": "...这只是开始... 真正的执行者... 另有其人...",
						"french": "...Ce n'est que le début... Le véritable exécuteur... est ailleurs...",
						"spanish": "...Esto es solo el principio... El verdadero ejecutor... está en otra parte...",
						"vietnamese": "...Đây chỉ là khởi đầu... Kẻ thi hành thật sự... ở nơi khác...",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้น... ผู้ลงทัณฑ์ที่แท้จริง... อยู่ที่อื่น...",
						"hindi": "...यह सिर्फ शुरुआत है... असली प्रवर्तक... कहीं और है..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "...뭐?",
						"english": "...What?",
						"japanese": "...何？",
						"chinese": "...什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					}
				},
				{
					"content": {
						"korean": "'백년회'의 비밀은 더 깊은 곳에 있었다. 다음 목표는 네메시스의 심장부였다.",
						"english": "The secret of 'Centennial' ran deeper. The next target was the heart of Nemesis.",
						"japanese": "「百年会」の秘密はさらに深かった。次の目標はネメシスの心臓部だった。",
						"chinese": "“百年会”的秘密藏得更深。下一个目标是涅墨西斯的核心。",
						"french": "Le secret de la 'Centenaire' était plus profond. La prochaine cible était le cœur de Nemesis.",
						"spanish": "El secreto de la 'Centenaria' era más profundo. El siguiente objetivo era el corazón de Némesis.",
						"vietnamese": "Bí mật của 'Bách Niên Hội' nằm sâu hơn nữa. Mục tiêu tiếp theo là trái tim của Nemesis.",
						"thai": "ความลับของ 'ร้อยปีสมาคม' นั้นลึกซึ้งยิ่งกว่า เป้าหมายต่อไปคือใจกลางของเนเมซิส",
						"hindi": "'शताब्दी' का रहस्य गहरा था। अगला लक्ष्य नेमेसिस का हृदय था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 힘이 모든 것을 압도했다.",
						"english": "A colossal power overwhelmed everything.",
						"japanese": "巨大な力がすべてを圧倒した。",
						"chinese": "一股巨大的力量压倒了一切。",
						"french": "Une puissance colossale a tout submergé.",
						"spanish": "Un poder colosal lo abrumó todo.",
						"vietnamese": "Một sức mạnh khổng lồ đã áp đảo mọi thứ.",
						"thai": "พลังอันมหาศาลได้ครอบงำทุกสิ่ง",
						"hindi": "एक विशाल शक्ति ने सब कुछ अभिभूत कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...서약을 어긴 대가는 혹독하다.",
						"english": "...The price for breaking the vow is harsh.",
						"japanese": "...誓いを破った代償は厳しい。",
						"chinese": "...违背誓言的代价是惨痛的。",
						"french": "...Le prix de la rupture du serment est sévère.",
						"spanish": "...El precio por romper el juramento es cruel.",
						"vietnamese": "...Cái giá phải trả khi phá vỡ lời thề thật khắc nghiệt.",
						"thai": "...ราคาของการผิดคำสาบานนั้นโหดร้ายนัก",
						"hindi": "...शपथ तोड़ने का दंड कठोर होता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "...아직 끝나지 않았어. 절대 포기 안 해!",
						"english": "...It's not over yet. I will never give up!",
						"japanese": "...まだ終わってない。絶対諦めない！",
						"chinese": "...还没结束。我绝不放弃！",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "...Aún no ha terminado. ¡Nunca me rendiré!",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "...ยังไม่จบหรอก. ฉันไม่มีวันยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा!"
					}
				}
			]
		}
	]
} as const;
