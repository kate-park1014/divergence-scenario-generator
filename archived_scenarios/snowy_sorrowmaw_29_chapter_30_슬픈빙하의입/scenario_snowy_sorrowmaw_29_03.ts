export const scenario_snowy_sorrowmaw_29_03 = {
	"scenario_id": "snowy_sorrowmaw_29_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원 깊숙한 곳, 얼음 유적이 깨어났다.",
			"그곳에서 발견된 오래된 일지. 잊혀진 비극의 기록.",
			"'차가운 어미'라 불린 수호자. 그녀는 왜 부족을 삼켰나?",
			"찢겨진 마지막 장, 숨겨진 진실이 기다린다."
		],
		"english": [
			"Deep in the snowy plains, an ice ruin awakened.",
			"An ancient journal found there. A record of forgotten tragedy.",
			"The guardian called 'Cold Mother'. Why did she devour the tribe?",
			"The torn final page, a hidden truth awaits."
		],
		"japanese": [
			"雪原の奥深く、氷の遺跡が目覚めた。",
			"そこで見つかった古い日誌。忘れ去られた悲劇の記録。",
			"「冷たい母」と呼ばれた守護者。彼女はなぜ部族を飲み込んだのか？",
			"破れた最後のページ、隠された真実が待つ。"
		],
		"chinese": [
			"雪原深处，冰之遗迹苏醒了。",
			"在那里发现了一本古老的日记。被遗忘的悲剧记录。",
			"被称为“冰冷之母”的守护者。她为何吞噬了部族？",
			"被撕裂的最后一页，隐藏的真相等待着。"
		],
		"french": [
			"Au plus profond des plaines enneigées, une ruine de glace s'est éveillée.",
			"Un ancien journal y a été découvert. Le récit d'une tragédie oubliée.",
			"La gardienne nommée 'Mère Froide'. Pourquoi a-t-elle dévoré la tribu ?",
			"La dernière page déchirée, une vérité cachée attend."
		],
		"spanish": [
			"En lo profundo de las llanuras nevadas, una ruina de hielo despertó.",
			"Un antiguo diario encontrado allí. Un registro de una tragedia olvidada.",
			"La guardiana llamada 'Madre Fría'. ¿Por qué devoró a la tribu?",
			"La última página desgarrada, una verdad oculta espera."
		],
		"vietnamese": [
			"Sâu trong đồng tuyết, một di tích băng giá đã thức tỉnh.",
			"Một cuốn nhật ký cổ được tìm thấy ở đó. Ghi chép về một bi kịch bị lãng quên.",
			"Người bảo vệ được gọi là 'Mẹ Lạnh'. Tại sao cô ấy lại nuốt chửng bộ tộc?",
			"Trang cuối bị xé rách, một sự thật ẩn giấu đang chờ đợi."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ซากปรักหักพังน้ำแข็งได้ตื่นขึ้น",
			"บันทึกเก่าแก่ที่พบที่นั่น บันทึกโศกนาฏกรรมที่ถูกลืม",
			"ผู้พิทักษ์ที่ถูกเรียกว่า 'มารดรผู้หนาวเย็น' ทำไมนางถึงกลืนกินเผ่าไป?",
			"หน้าสุดท้ายที่ฉีกขาด ความจริงที่ซ่อนอยู่กำลังรอคอย"
		],
		"hindi": [
			"बर्फीले मैदानों की गहराई में, एक बर्फीला खंडहर जागृत हुआ।",
			"वहाँ मिली एक प्राचीन डायरी। एक भूली हुई त्रासदी का वृत्तांत।",
			"'शीतल माँ' कही जाने वाली संरक्षिका। उसने जनजाति को क्यों निगल लिया?",
			"फटा हुआ अंतिम पृष्ठ, एक छिपा हुआ सत्य प्रतीक्षा कर रहा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "왔군. 예상대로 여기까지 왔어.",
						"english": "You've come. Just as expected, you made it this far.",
						"japanese": "来たか。予想通り、ここまで辿り着いたな。",
						"chinese": "你来了。果然，你到这里了。",
						"french": "Vous êtes venu. Comme prévu, vous êtes arrivé jusqu'ici.",
						"spanish": "Has llegado. Como esperaba, llegaste hasta aquí.",
						"vietnamese": "Ngươi đã đến. Đúng như dự đoán, ngươi đã tới đây.",
						"thai": "มาแล้วสินะ สมกับที่คาดไว้ มาถึงที่นี่ได้แล้ว",
						"hindi": "तुम आ गए। जैसा कि उम्मीद थी, तुम यहाँ तक पहुँच गए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "글라세. 이 얼음 유적을 탐험하는 자.",
						"english": "Glace. One who explores these ice ruins.",
						"japanese": "グラセ。この氷の遺跡を探索する者だ。",
						"chinese": "格拉塞。一个探索这些冰之遗迹的人。",
						"french": "Glace. Celui qui explore ces ruines de glace.",
						"spanish": "Glace. Quien explora estas ruinas de hielo.",
						"vietnamese": "Glace. Kẻ khám phá di tích băng giá này.",
						"thai": "เกลซ ผู้สำรวจซากปรักหักพังน้ำแข็งแห่งนี้",
						"hindi": "ग्लेस। वह जो इन बर्फीले खंडहरों का अन्वेषण करता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "여기서 오래된 일지를 발견했어. 잃어버린 부족의 기록이야.",
						"english": "I found an ancient journal here. It's a record of a lost tribe.",
						"japanese": "ここで古い日誌を見つけた。失われた部族の記録だ。",
						"chinese": "我在这里发现了一本古老的日记。是关于失落部族的记录。",
						"french": "J'ai trouvé un ancien journal ici. C'est un récit d'une tribu perdue.",
						"spanish": "Encontré un diario antiguo aquí. Es un registro de una tribu perdida.",
						"vietnamese": "Ta đã tìm thấy một cuốn nhật ký cổ ở đây. Đó là ghi chép về một bộ tộc đã mất.",
						"thai": "ฉันพบบันทึกเก่าแก่ที่นี่ เป็นบันทึกของชนเผ่าที่สาบสูญ",
						"hindi": "मुझे यहाँ एक प्राचीन डायरी मिली। यह एक खोई हुई जनजाति का वृत्तांत है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잃어버린 부족?",
						"english": "A lost tribe?",
						"japanese": "失われた部族だと？",
						"chinese": "失落的部族？",
						"french": "Une tribu perdue ?",
						"spanish": "¿Una tribu perdida?",
						"vietnamese": "Một bộ tộc đã mất?",
						"thai": "ชนเผ่าที่สาบสูญ?",
						"hindi": "एक खोई हुई जनजाति?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 전설이 말하는 것과는 조금 다른 이야기지.",
						"english": "Yes. A slightly different story from what the legends tell.",
						"japanese": "ああ。伝説が語るものとは少し違う話だがな。",
						"chinese": "是的。与传说所说的有些不同。",
						"french": "Oui. Une histoire un peu différente de ce que racontent les légendes.",
						"spanish": "Sí. Una historia un poco diferente a lo que cuentan las leyendas.",
						"vietnamese": "Phải. Một câu chuyện hơi khác so với những gì truyền thuyết kể.",
						"thai": "ใช่ เรื่องราวที่แตกต่างจากที่ตำนานเล่าเล็กน้อย",
						"hindi": "हाँ। किंवदंतियों में बताई गई कहानी से थोड़ी अलग कहानी।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "일지는 번성했던 부족의 이야기를 담고 있어.",
						"english": "The journal tells the story of a thriving tribe.",
						"japanese": "日誌には、かつて繁栄した部族の物語が記されている。",
						"chinese": "日志记载了一个繁荣部落的故事。",
						"french": "Le journal raconte l'histoire d'une tribu prospère.",
						"spanish": "El diario cuenta la historia de una tribu próspera.",
						"vietnamese": "Cuốn nhật ký kể về câu chuyện của một bộ tộc thịnh vượng.",
						"thai": "บันทึกนี้บอกเล่าเรื่องราวของชนเผ่าที่เคยรุ่งเรือง",
						"hindi": "यह पत्रिका एक समृद्ध जनजाति की कहानी बताती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "그리고 그들의 수호자. '차가운 어미'라 불리던 존재.",
						"english": "And their guardian. A being called 'Cold Mother'.",
						"japanese": "そして、彼らの守護者。「冷たき母」と呼ばれた存在だ。",
						"chinese": "还有他们的守护者，一个被称为“冰冷之母”的存在。",
						"french": "Et leur gardien. Une entité appelée \"Mère Froide\".",
						"spanish": "Y su guardiana. Un ser llamado 'Madre Fría'.",
						"vietnamese": "Và người bảo vệ của họ. Một thực thể được gọi là 'Mẹ Lạnh'.",
						"thai": "และผู้พิทักษ์ของพวกเขา สิ่งมีชีวิตที่เรียกว่า 'มารดาเย็นชา'",
						"hindi": "और उनका संरक्षक। एक प्राणी जिसे 'शीत माँ' कहा जाता था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "수호자가… 부족을 멸망시켰다고?",
						"english": "The guardian... destroyed the tribe?",
						"japanese": "守護者が… 部族を滅ぼしたって？",
						"chinese": "守护者……毁灭了部落？",
						"french": "La gardienne... a détruit la tribu ?",
						"spanish": "¿La guardiana... destruyó a la tribu?",
						"vietnamese": "Người bảo vệ... đã hủy diệt bộ tộc?",
						"thai": "ผู้พิทักษ์... ทำลายชนเผ่าเหรอ?",
						"hindi": "क्या संरक्षक ने... जनजाति को नष्ट कर दिया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "일지에는 그렇게 적혀 있어. 굶주림에 미쳐 부족을 집어삼켰다고.",
						"english": "That's what the journal says. Driven mad by hunger, it devoured the tribe.",
						"japanese": "日誌にはそう書かれている。飢えに狂い、部族を貪り食ったと。",
						"chinese": "日志上是这么写的。它因饥饿而发狂，吞噬了部落。",
						"french": "C'est ce que dit le journal. Rendue folle par la faim, elle a dévoré la tribu.",
						"spanish": "Así lo dice el diario. Enloquecida por el hambre, devoró a la tribu.",
						"vietnamese": "Cuốn nhật ký viết thế. Nó trở nên điên loạn vì đói khát và nuốt chửng bộ tộc.",
						"thai": "บันทึกเขียนไว้อย่างนั้น มันคลุ้มคลั่งด้วยความหิวโหยและกลืนกินชนเผ่า",
						"hindi": "पत्रिका में ऐसा ही लिखा है। भूख से पागल होकर उसने जनजाति को निगल लिया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "...아눅의 환영처럼.",
						"english": "...Like Anuk's illusion.",
						"japanese": "…アヌクの幻影のように。",
						"chinese": "……就像阿努克的幻影。",
						"french": "...Comme l'illusion d'Anuk.",
						"spanish": "...Como la ilusión de Anuk.",
						"vietnamese": "...Giống như ảo ảnh của Anuk.",
						"thai": "...เหมือนภาพลวงตาของอนุก",
						"hindi": "...अनुक के भ्रम की तरह।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "겉으로는 그렇게 보일 수 있지.",
						"english": "On the surface, it might seem that way.",
						"japanese": "表面上はそう見えるかもしれない。",
						"chinese": "表面上看起来可能如此。",
						"french": "En apparence, ça pourrait le sembler.",
						"spanish": "En la superficie, podría parecer así.",
						"vietnamese": "Bề ngoài có thể trông như vậy.",
						"thai": "ภายนอกอาจดูเหมือนอย่างนั้น",
						"hindi": "ऊपरी तौर पर ऐसा लग सकता है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "glace",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "하지만 일지의 마지막 장은 찢겨나가 있어.",
						"english": "But the last page of the journal is torn out.",
						"japanese": "しかし、日誌の最後のページは引き裂かれている。",
						"chinese": "但日志的最后一页被撕掉了。",
						"french": "Mais la dernière page du journal est arrachée.",
						"spanish": "Pero la última página del diario está arrancada.",
						"vietnamese": "Nhưng trang cuối cùng của cuốn nhật ký đã bị xé mất.",
						"thai": "แต่หน้าสุดท้ายของบันทึกถูกฉีกขาดไป",
						"hindi": "लेकिन पत्रिका का आखिरी पन्ना फटा हुआ है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "찢겨졌다고?",
						"english": "Torn out?",
						"japanese": "破れているって？",
						"chinese": "被撕掉了？",
						"french": "Arracher ?",
						"spanish": "¿Arrancada?",
						"vietnamese": "Bị xé sao?",
						"thai": "ฉีกขาดไปเหรอ?",
						"hindi": "फटा हुआ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "가장 중요한 부분. 왜 '차가운 어미'가 그렇게 되었는지.",
						"english": "The most crucial part. Why 'Cold Mother' became that way.",
						"japanese": "最も重要な部分だ。「冷たき母」がなぜそのようになったのか。",
						"chinese": "最重要的部分。关于“冰冷之母”为何变成那样。",
						"french": "La partie la plus cruciale. Pourquoi la \"Mère Froide\" est devenue ainsi.",
						"spanish": "La parte más crucial. Por qué la 'Madre Fría' se volvió así.",
						"vietnamese": "Phần quan trọng nhất. Tại sao 'Mẹ Lạnh' lại trở nên như vậy.",
						"thai": "ส่วนที่สำคัญที่สุด ทำไม 'มารดาเย็นชา' ถึงกลายเป็นแบบนั้น",
						"hindi": "सबसे महत्वपूर्ण हिस्सा। 'शीत माँ' वैसी क्यों बन गई।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "누군가 진실을 숨기려 한 흔적이야.",
						"english": "It's a sign someone tried to hide the truth.",
						"japanese": "誰かが真実を隠そうとした痕跡だ。",
						"chinese": "这是有人试图隐藏真相的痕迹。",
						"french": "C'est une trace que quelqu'un a essayé de cacher la vérité.",
						"spanish": "Es una señal de que alguien intentó ocultar la verdad.",
						"vietnamese": "Đó là dấu hiệu ai đó đã cố gắng che giấu sự thật.",
						"thai": "เป็นร่องรอยว่ามีคนพยายามซ่อนความจริง",
						"hindi": "यह इस बात का संकेत है कि किसी ने सच्चाई छिपाने की कोशिश की।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 우리가 아는 전설은… 전부가 아니었단 말인가.",
						"english": "So the legend we know... wasn't the whole truth?",
						"japanese": "私たちが知る伝説は… 全てではなかったのか。",
						"chinese": "那么我们所知的传说… 并非全部真相吗？",
						"french": "Alors la légende que nous connaissons… n'était pas l'entière vérité ?",
						"spanish": "¿Entonces la leyenda que conocemos… no era toda la verdad?",
						"vietnamese": "Vậy truyền thuyết chúng ta biết… không phải là toàn bộ sự thật sao?",
						"thai": "งั้นตำนานที่เราเคยรู้… ไม่ใช่ทั้งหมดงั้นหรือ?",
						"hindi": "तो जिस किंवदंती को हम जानते हैं… क्या वह पूरी सच्चाई नहीं थी?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은 언제나 조각나 있지. 찾아야 해.",
						"english": "Truth is always fragmented. We must find it.",
						"japanese": "真実は常に断片だ。見つけねばならない。",
						"chinese": "真相总是支离破碎的。我们必须去寻找。",
						"french": "La vérité est toujours fragmentée. Nous devons la trouver.",
						"spanish": "La verdad siempre está fragmentada. Debemos buscarla.",
						"vietnamese": "Sự thật luôn bị chia cắt. Chúng ta phải tìm ra nó.",
						"thai": "ความจริงมักจะแตกสลายเสมอ เราต้องตามหามัน",
						"hindi": "सच्चाई हमेशा खंडित होती है। हमें इसे खोजना होगा।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "glace",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "찢겨진 진실… 부족의 비극이 더 슬프게 느껴져.",
						"english": "A shattered truth… The tribe's tragedy feels even sadder now.",
						"japanese": "引き裂かれた真実… 部族の悲劇が、より悲しく感じる。",
						"chinese": "破碎的真相… 部族的悲剧更令人悲伤。",
						"french": "Une vérité déchirée… La tragédie de la tribu me semble encore plus triste.",
						"spanish": "Una verdad desgarrada… La tragedia de la tribu se siente aún más triste.",
						"vietnamese": "Một sự thật tan vỡ… Bi kịch của bộ tộc càng thêm đau lòng.",
						"thai": "ความจริงที่ฉีกขาด… โศกนาฏกรรมของเผ่านี้ช่างน่าเศร้าขึ้นไปอีก",
						"hindi": "एक खंडित सच्चाई… जनजाति की त्रासदी अब और भी दुखद लगती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "고통은 얼음 아래 갇혀 끝없이 울고 있지.",
						"english": "Pain is trapped beneath the ice, crying endlessly.",
						"japanese": "苦痛は氷の下に閉じ込められ、永遠に泣き続けている。",
						"chinese": "痛苦被困在冰下，无休止地哭泣着。",
						"french": "La douleur est emprisonnée sous la glace, pleurant sans fin.",
						"spanish": "El dolor está atrapado bajo el hielo, llorando sin cesar.",
						"vietnamese": "Nỗi đau bị mắc kẹt dưới băng, không ngừng gào khóc.",
						"thai": "ความเจ็บปวดถูกขังอยู่ใต้ธารน้ำแข็ง ร่ำไห้ไม่สิ้นสุด",
						"hindi": "दर्द बर्फ के नीचे फँसा हुआ है, लगातार रो रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "우리가 그 고통을 끝낼 수 있을까?",
						"english": "Can we end that suffering?",
						"japanese": "我々はその苦痛を終わらせることができるだろうか？",
						"chinese": "我们能结束这份痛苦吗？",
						"french": "Pouvons-nous mettre fin à cette souffrance ?",
						"spanish": "¿Podremos poner fin a ese sufrimiento?",
						"vietnamese": "Liệu chúng ta có thể chấm dứt nỗi đau đó không?",
						"thai": "เราจะยุติความเจ็บปวดนั้นได้หรือไม่?",
						"hindi": "क्या हम उस पीड़ा को समाप्त कर सकते हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝은 언제나 오기 마련. 다만, 어떻게 맞이할지는 우리의 선택.",
						"english": "The end always comes. How we face it, however, is our choice.",
						"japanese": "終わりは必ず訪れる。だが、どう迎えるかは我々の選択だ。",
						"chinese": "结局总会到来。然而，如何面对却是我们的选择。",
						"french": "La fin vient toujours. Cependant, la manière de l'affronter est notre choix.",
						"spanish": "El final siempre llega. Sin embargo, cómo lo afrontemos es nuestra elección.",
						"vietnamese": "Kết cục luôn đến. Tuy nhiên, cách chúng ta đối mặt với nó là sự lựa chọn của mình.",
						"thai": "จุดจบมักจะมาถึงเสมอ แต่การที่เราจะเผชิญหน้ากับมันอย่างไรนั้นเป็นทางเลือกของเรา",
						"hindi": "अंत हमेशा आता है। हालाँकि, हम उसका सामना कैसे करते हैं, यह हमारी पसंद है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glace"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼음 유적의 가장 깊은 곳. 거대한 그림자가 움직인다.",
						"english": "The deepest part of the ice ruins. A giant shadow stirs.",
						"japanese": "氷の遺跡の最深部。巨大な影が蠢く。",
						"chinese": "冰之遗迹的最深处。一个巨大的影子在移动。",
						"french": "La partie la plus profonde des ruines de glace. Une ombre gigantesque s'agite.",
						"spanish": "La parte más profunda de las ruinas de hielo. Una sombra gigantesca se mueve.",
						"vietnamese": "Nơi sâu nhất của di tích băng giá. Một bóng đen khổng lồ đang chuyển động.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพังน้ำแข็ง เงาขนาดมหึมากำลังเคลื่อนไหว",
						"hindi": "बर्फीले खंडहरों का सबसे गहरा हिस्सा। एक विशाल परछाई हिलती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…누가 나의 잠을 방해하는가.",
						"english": "...Who disturbs my slumber?",
						"japanese": "…誰が私の眠りを妨げるのか。",
						"chinese": "…是谁打扰了我的沉睡？",
						"french": "...Qui trouble mon sommeil ?",
						"spanish": "...¿Quién perturba mi sueño?",
						"vietnamese": "...Kẻ nào dám quấy rầy giấc ngủ của ta?",
						"thai": "...ใครบังอาจรบกวนการหลับใหลของข้า?",
						"hindi": "...कौन मेरी नींद में खलल डाल रहा है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 얼음은 나의 고통이다. 누구도 빼앗을 수 없어.",
						"english": "This ice is my pain. No one can take it from me.",
						"japanese": "この氷は私の苦痛だ。誰にも奪わせはしない。",
						"chinese": "这冰是我的痛苦。谁也无法夺走。",
						"french": "Cette glace est ma douleur. Personne ne peut me l'ôter.",
						"spanish": "Este hielo es mi dolor. Nadie puede arrebatármelo.",
						"vietnamese": "Tảng băng này là nỗi đau của ta. Không ai có thể cướp đi nó.",
						"thai": "น้ำแข็งนี้คือความเจ็บปวดของข้า ไม่มีใครแย่งไปได้",
						"hindi": "यह बर्फ मेरा दर्द है। कोई इसे मुझसे छीन नहीं सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 진실을 찾으러 왔다. 당신의 고통이 무엇이든.",
						"english": "We came to find the truth. Whatever your pain may be.",
						"japanese": "我々は真実を求めに来た。あなたの苦痛が何であろうと。",
						"chinese": "我们是来寻找真相的。无论你的痛苦是什么。",
						"french": "Nous sommes venus chercher la vérité. Quelle que soit votre douleur.",
						"spanish": "Hemos venido a buscar la verdad. Sea cual sea tu dolor.",
						"vietnamese": "Chúng tôi đến đây để tìm kiếm sự thật. Dù nỗi đau của ngài là gì.",
						"thai": "เรามาที่นี่เพื่อค้นหาความจริง ไม่ว่าความเจ็บปวดของคุณคืออะไรก็ตาม",
						"hindi": "हम सच्चाई खोजने आए हैं। आपका दर्द कुछ भी हो।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아아… 마침내… 끝이 오는가…",
						"english": "Ah… Finally… Is this the end…?",
						"japanese": "ああ…ついに…終わりが来るのか…",
						"chinese": "啊…终于…要结束了吗…",
						"french": "Ah… Enfin… Est-ce la fin…?",
						"spanish": "Ah… Finalmente… ¿Llega el fin…?",
						"vietnamese": "À… Cuối cùng… Kết thúc rồi sao…?",
						"thai": "อา... ในที่สุด... จุดจบกำลังจะมาถึงแล้วหรือ...",
						"hindi": "आह… अंततः… क्या यह अंत है…?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나의 굶주림은… 너희의 이해를 넘어선다…",
						"english": "My hunger… transcends your understanding…",
						"japanese": "私の飢えは…お前たちの理解を超える…",
						"chinese": "我的饥饿…超乎你们的理解…",
						"french": "Ma faim… dépasse votre entendement…",
						"spanish": "Mi hambre… trasciende vuestra comprensión…",
						"vietnamese": "Cơn đói của ta… vượt quá sự hiểu biết của các ngươi…",
						"thai": "ความหิวโหยของข้า… เหนือกว่าความเข้าใจของพวกเจ้า…",
						"hindi": "मेरी भूख… तुम्हारी समझ से परे है…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이것으로 모든 고통이 끝난 건가?",
						"english": "Is this the end of all suffering?",
						"japanese": "これで全ての苦痛が終わったのか？",
						"chinese": "所有的痛苦都结束了吗？",
						"french": "Est-ce la fin de toute souffrance ?",
						"spanish": "¿Es este el fin de todo sufrimiento?",
						"vietnamese": "Mọi nỗi đau đã kết thúc rồi sao?",
						"thai": "นี่คือจุดจบของความเจ็บปวดทั้งหมดแล้วหรือ?",
						"hindi": "क्या यह सभी पीड़ाओं का अंत है?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "얼음 산맥은 잠시 고요해졌지만, 그 침묵은 또 다른 진실을 감추고 있었다.",
						"english": "The Ice Mountains grew silent for a moment, but that silence concealed another truth.",
						"japanese": "氷の山脈は束の間静寂に包まれたが、その沈黙はまた別の真実を隠していた。",
						"chinese": "冰之山脉暂时归于平静，但那份寂静隐藏着另一个真相。",
						"french": "Les Montagnes de Glace se turent un instant, mais ce silence cachait une autre vérité.",
						"spanish": "Las Montañas de Hielo se silenciaron por un momento, pero ese silencio ocultaba otra verdad.",
						"vietnamese": "Dãy núi Băng im lặng trong chốc lát, nhưng sự im lặng đó lại che giấu một sự thật khác.",
						"thai": "เทือกเขาน้ำแข็งเงียบสงบลงชั่วขณะ แต่ความเงียบงันนั้นกลับซ่อนความจริงอีกอย่างไว้",
						"hindi": "बर्फ़ीले पहाड़ कुछ देर के लिए शांत हो गए, लेकिन उस खामोशी में एक और सच छिपा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 너희는 나를 이해하지 못해.",
						"english": "Fools… You do not understand me.",
						"japanese": "愚か者たちめ… お前たちは私を理解できない。",
						"chinese": "愚蠢的家伙们… 你们不了解我。",
						"french": "Fous… Vous ne me comprenez pas.",
						"spanish": "Necios… No me entendéis.",
						"vietnamese": "Lũ ngu ngốc… Các ngươi không hiểu ta.",
						"thai": "พวกโง่เขลา… พวกเจ้าไม่เข้าใจข้าหรอก",
						"hindi": "मूर्खों… तुम मुझे नहीं समझते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. 우리는 진실을 마주할 것이다.",
						"english": "…It's not over yet. We will face the truth.",
						"japanese": "…まだ終わっていない。我々は真実と向き合うだろう。",
						"chinese": "…还没结束。我们将面对真相。",
						"french": "…Ce n'est pas encore fini. Nous affronterons la vérité.",
						"spanish": "…Aún no ha terminado. Enfrentaremos la verdad.",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta sẽ đối mặt với sự thật.",
						"thai": "...ยังไม่จบ เราจะเผชิญหน้ากับความจริง",
						"hindi": "…अभी खत्म नहीं हुआ है। हम सच का सामना करेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라… 나의 고통은 영원하다.",
						"english": "Come again… My suffering is eternal.",
						"japanese": "また来るがいい… 私の苦痛は永遠だ。",
						"chinese": "再来吧… 我的痛苦是永恒的。",
						"french": "Revenez… Ma souffrance est éternelle.",
						"spanish": "Volved… Mi sufrimiento es eterno.",
						"vietnamese": "Hãy trở lại… Nỗi đau của ta là vĩnh cửu.",
						"thai": "กลับมาอีกครั้ง… ความทุกข์ทรมานของข้านั้นเป็นนิรันดร์",
						"hindi": "फिर आओ… मेरा कष्ट अनंत है।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
