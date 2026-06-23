export const scenario_snowy_lyra_12_01 = {
	"scenario_id": "snowy_lyra_12_01",
	"order": 1,
	"act": "intro",
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "매서운 눈보라가 몰아쳤다. 지평선은 사라진 지 오래다.",
						"english": "A fierce blizzard raged. The horizon was long gone.",
						"japanese": "激しい吹雪が吹き荒れた。地平線はとっくの昔に消え失せていた。",
						"chinese": "凛冽的暴风雪呼啸而过。地平线早已消失不见。",
						"french": "Un blizzard féroce faisait rage. L'horizon avait disparu depuis longtemps.",
						"spanish": "Una feroz ventisca azotaba. El horizonte había desaparecido hacía mucho tiempo.",
						"vietnamese": "Cơn bão tuyết khắc nghiệt hoành hành. Đường chân trời đã biến mất từ lâu.",
						"thai": "พายุหิมะอันเกรี้ยวกราดพัดโหมกระหน่ำ ขอบฟ้าหายไปนานแล้ว",
						"hindi": "एक भयंकर बर्फीला तूफान आया। क्षितिज बहुत पहले ही गायब हो गया था।"
					}
				},
				{
					"content": {
						"korean": "젠장, 길을 잃었어. 아무것도 보이지 않아.",
						"english": "Damn, we're lost. Can't see anything.",
						"japanese": "くそっ、道に迷った。何も見えない。",
						"chinese": "该死，迷路了。什么也看不见。",
						"french": "Merde, on est perdus. On ne voit rien.",
						"spanish": "Maldita sea, estamos perdidos. No se ve nada.",
						"vietnamese": "Chết tiệt, lạc đường rồi. Chẳng thấy gì cả.",
						"thai": "บ้าจริง หลงทางแล้ว มองไม่เห็นอะไรเลย",
						"hindi": "धिक्कार है, हम खो गए हैं। कुछ नहीं दिख रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이러다 모두 얼어 죽겠어.",
						"english": "We'll all freeze to death like this.",
						"japanese": "このままじゃ、みんな凍え死んでしまう。",
						"chinese": "这样下去，我们都会冻死的。",
						"french": "On va tous mourir de froid comme ça.",
						"spanish": "Así, todos nos congelaremos hasta morir.",
						"vietnamese": "Cứ thế này, chúng ta sẽ chết cóng mất.",
						"thai": "ถ้าเป็นแบบนี้ เราทุกคนคงแข็งตายแน่",
						"hindi": "ऐसे तो हम सब जम कर मर जाएँगे।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그때, 하늘이 갈라지며 환상적인 오로라가 모습을 드러냈다.",
						"english": "Then, the sky split open and a fantastic aurora appeared.",
						"japanese": "その時、空が割れ、幻想的なオーロラが姿を現した。",
						"chinese": "就在那时，天空裂开，一道奇幻的极光显现出来。",
						"french": "Alors, le ciel s'est fendu et une aurore fantastique est apparue.",
						"spanish": "Entonces, el cielo se abrió y una fantástica aurora apareció.",
						"vietnamese": "Khi đó, bầu trời xé toạc, một cực quang huyền ảo hiện ra.",
						"thai": "ทันใดนั้น ท้องฟ้าก็แยกออกจากกัน และแสงออโรราอันน่าอัศจรรย์ก็ปรากฏขึ้น",
						"hindi": "तभी, आकाश फट गया और एक शानदार ऑरोरा प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…저것 봐. 오로라다.",
						"english": "...Look. It's the aurora.",
						"japanese": "…あれを見ろ。オーロラだ。",
						"chinese": "……看。是极光。",
						"french": "...Regarde. C'est l'aurore.",
						"spanish": "...Mira. Es la aurora.",
						"vietnamese": "...Nhìn kìa. Là cực quang.",
						"thai": "...ดูนั่นสิ นั่นคือแสงออโรรา",
						"hindi": "...देखो। यह ऑरोरा है।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "길을 알려주는 건가? 빛이 이쪽으로 향하고 있어.",
						"english": "Is it showing the way? The light is pointing here.",
						"japanese": "道を教えてくれるのか？光がこちらを指している。",
						"chinese": "是在指路吗？光线正指向这边。",
						"french": "Est-ce que ça montre le chemin ? La lumière pointe par ici.",
						"spanish": "¿Está indicando el camino? La luz apunta hacia aquí.",
						"vietnamese": "Nó đang chỉ đường ư? Ánh sáng đang hướng về phía này.",
						"thai": "มันกำลังบอกทางใช่ไหม? แสงกำลังชี้มาทางนี้",
						"hindi": "क्या यह रास्ता दिखा रहा है? रोशनी इधर की ओर इशारा कर रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "아름답군. 하지만… 너무 쉽게 길을 내주는 것이 아닌가.",
						"english": "Beautiful. But... isn't it showing the way too easily?",
						"japanese": "美しい。だが…あまりにも簡単に道を教えてくれるのではないか。",
						"chinese": "真美。但是……是不是太轻易地指路了？",
						"french": "Magnifique. Mais... ne nous montre-t-il pas le chemin trop facilement ?",
						"spanish": "Hermoso. Pero... ¿no nos está mostrando el camino con demasiada facilidad?",
						"vietnamese": "Đẹp thật. Nhưng... có phải nó đang chỉ đường quá dễ dàng không?",
						"thai": "สวยงาม. แต่... มันกำลังชี้ทางให้ง่ายเกินไปหรือเปล่า?",
						"hindi": "खूबसूरत। लेकिन... क्या यह बहुत आसानी से रास्ता नहीं दिखा रहा है?"
					}
				},
				{
					"content": {
						"korean": "맹세 없는 인도는 언제나 대가를 요구하지.",
						"english": "Guidance without a vow always demands a price.",
						"japanese": "誓いのない導きは、常に代償を要求する。",
						"chinese": "没有誓言的指引，总是需要付出代价的。",
						"french": "Un guide sans serment exige toujours un prix.",
						"spanish": "Una guía sin juramento siempre exige un precio.",
						"vietnamese": "Sự dẫn lối không lời thề luôn đòi hỏi một cái giá.",
						"thai": "การชี้นำที่ปราศจากคำสาบานย่อมเรียกร้องราคาเสมอ",
						"hindi": "बिना शपथ के मार्गदर्शन हमेशा कीमत मांगता है।"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "오로라를 따라온 지 얼마나 되었지?",
						"english": "How long have we been following the aurora?",
						"japanese": "オーロラを追ってどれくらいになる？",
						"chinese": "我们跟着极光多久了？",
						"french": "Depuis combien de temps suivons-nous l'aurore ?",
						"spanish": "¿Cuánto tiempo llevamos siguiendo la aurora?",
						"vietnamese": "Chúng ta đã theo cực quang được bao lâu rồi?",
						"thai": "เราตามแสงเหนือมานานแค่ไหนแล้ว?",
						"hindi": "हम कब से अरोड़ा का पीछा कर रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "꽤 된 것 같아. 근데… 여기 우리 지나왔던 곳 아니야?",
						"english": "Quite a while, I think. But... isn't this where we've been before?",
						"japanese": "結構経つみたいだね。でも…ここ、私たち通ってきた場所じゃない？",
						"chinese": "好像很久了。但是……这里不是我们之前经过的地方吗？",
						"french": "Un bon moment, je crois. Mais... n'est-ce pas là où nous sommes déjà passés ?",
						"spanish": "Bastante tiempo, creo. Pero... ¿no es este el lugar por donde ya pasamos?",
						"vietnamese": "Cũng khá lâu rồi. Nhưng... đây không phải là nơi chúng ta đã đi qua sao?",
						"thai": "ดูเหมือนจะนานแล้วนะ. แต่... ที่นี่ไม่ใช่ที่เราผ่านมาแล้วเหรอ?",
						"hindi": "काफी देर हो गई, मुझे लगता है। लेकिन... क्या यह वही जगह नहीं है जहाँ हम पहले थे?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "뭔가 이상해. 오로라가 이끄는 길이 혼란스러워.",
						"english": "Something's wrong. The path the aurora leads is confusing.",
						"japanese": "何かがおかしい。オーロラが導く道が混乱している。",
						"chinese": "有些不对劲。极光指引的路令人困惑。",
						"french": "Quelque chose ne va pas. Le chemin que l'aurore nous montre est déroutant.",
						"spanish": "Algo anda mal. El camino que la aurora nos muestra es confuso.",
						"vietnamese": "Có gì đó không ổn. Con đường cực quang dẫn lối thật hỗn loạn.",
						"thai": "มีบางอย่างผิดปกติ. เส้นทางที่แสงเหนือพาไปมันสับสน",
						"hindi": "कुछ गलत है। अरोड़ा का मार्ग भ्रामक है।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "익숙한 풍경이 낯설게 보이는군. 오로라는 약속을 지키는가, 아니면….",
						"english": "Familiar scenery looks strange. Does the aurora keep its promise, or...",
						"japanese": "見慣れた風景が奇妙に見える。オーロラは約束を守っているのか、それとも…。",
						"chinese": "熟悉的风景看起来很陌生。极光是遵守承诺，还是……",
						"french": "Un paysage familier semble étrange. L'aurore tient-elle sa promesse, ou...",
						"spanish": "El paisaje familiar se ve extraño. ¿La aurora cumple su promesa, o...?",
						"vietnamese": "Khung cảnh quen thuộc trông thật lạ lẫm. Cực quang giữ lời hứa, hay...",
						"thai": "ทิวทัศน์ที่คุ้นเคยกลับดูแปลกตา. แสงเหนือรักษาสัญญาของมัน หรือว่า...",
						"hindi": "परिचित दृश्य अजीब लग रहा है। क्या अरोड़ा अपना वादा निभा रही है, या..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 환영인가.",
						"english": "Is it just an illusion?",
						"japanese": "単なる幻影なのか。",
						"chinese": "只是一个幻象吗？",
						"french": "Est-ce juste une illusion ?",
						"spanish": "¿Es solo una ilusión?",
						"vietnamese": "Chỉ là một ảo ảnh thôi sao?",
						"thai": "เป็นเพียงภาพลวงตาหรือ?",
						"hindi": "क्या यह सिर्फ एक भ्रम है?"
					},
					"emotion": "base",
					"speaker": "anuk"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건… 뭐야? 얼음 속에 글씨가 새겨져 있어.",
						"english": "What is this...? Letters are carved in the ice.",
						"japanese": "これは…何だ？氷の中に文字が刻まれている。",
						"chinese": "这是……什么？冰里刻着字。",
						"french": "Qu'est-ce que c'est...? Des lettres sont gravées dans la glace.",
						"spanish": "¿Qué es esto...? Hay letras grabadas en el hielo.",
						"vietnamese": "Cái này... là gì? Chữ được khắc trong băng.",
						"thai": "นี่มัน...อะไรกัน? มีตัวอักษรสลักอยู่ในน้ำแข็ง",
						"hindi": "यह क्या है...? बर्फ में अक्षर खुदे हुए हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "녹지 않는 얼음이라니. 오래된 문명의 흔적 같아.",
						"english": "Unmelting ice. It looks like a trace of an ancient civilization.",
						"japanese": "溶けない氷だと。古い文明の痕跡のようだ。",
						"chinese": "不融化的冰。看起来像是一个古老文明的痕迹。",
						"french": "De la glace qui ne fond pas. On dirait la trace d'une ancienne civilisation.",
						"spanish": "Hielo que no se derrite. Parece un rastro de una civilización antigua.",
						"vietnamese": "Băng không tan ư. Trông giống như dấu vết của một nền văn minh cổ đại.",
						"thai": "น้ำแข็งที่ไม่ละลาย. ดูเหมือนจะเป็นร่องรอยของอารยธรรมโบราณ",
						"hindi": "पिघलने वाली बर्फ नहीं। यह एक प्राचीन सभ्यता का निशान लगता है।"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알 수 없는 언어의 각인… 이 오로라가 이곳으로 우리를 이끌었나?",
						"english": "Engravings in an unknown language... Did this aurora lead us here?",
						"japanese": "未知の言語の刻印… このオーロラが私たちをここに導いたのか？",
						"chinese": "未知语言的刻印……是这极光将我们引到这里来的吗？",
						"french": "Des gravures dans une langue inconnue... Est-ce cette aurore qui nous a conduits ici ?",
						"spanish": "Grabados en un idioma desconocido... ¿Nos trajo aquí esta aurora?",
						"vietnamese": "Những hình khắc bằng ngôn ngữ không rõ... Ánh cực quang này đã dẫn chúng ta đến đây sao?",
						"thai": "รอยจารึกในภาษาที่ไม่รู้จัก... แสงออโรร่านี้พาเรามาที่นี่หรือเปล่า?",
						"hindi": "अज्ञात भाषा में नक्काशी... क्या इस ऑरोरा ने हमें यहाँ तक पहुँचाया?"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단순한 길 안내가 아니야. 무언가를 감추고 있거나, 보여주려 하는군.",
						"english": "It's not just guiding us. It's hiding something, or trying to show us something.",
						"japanese": "単なる道案内じゃない。何かを隠しているか、見せようとしているんだ。",
						"chinese": "这不只是指路。它在隐藏着什么，或者想向我们展示什么。",
						"french": "Ce n'est pas juste un guide. Cela cache quelque chose, ou essaie de nous montrer quelque chose.",
						"spanish": "No es solo una guía. Está ocultando algo, o intentando mostrarnos algo.",
						"vietnamese": "Đây không chỉ là sự dẫn đường. Nó đang che giấu điều gì đó, hoặc muốn cho chúng ta thấy điều gì đó.",
						"thai": "นี่ไม่ใช่แค่การนำทาง มันกำลังซ่อนบางสิ่ง หรือพยายามจะแสดงบางสิ่งให้เราเห็น",
						"hindi": "यह सिर्फ रास्ता नहीं दिखा रहा। यह कुछ छिपा रहा है, या हमें कुछ दिखाना चाहता है।"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 오래된 흔적들은, 어떤 약속을 담고 있을까.",
						"english": "What promise do these ancient traces hold?",
						"japanese": "この古い痕跡には、どんな約束が込められているのだろう。",
						"chinese": "这些古老的痕迹，蕴藏着怎样的承诺呢？",
						"french": "Quelle promesse ces vieilles traces recèlent-elles ?",
						"spanish": "¿Qué promesa encierran estas antiguas huellas?",
						"vietnamese": "Những dấu vết cổ xưa này, chứa đựng lời hứa nào?",
						"thai": "ร่องรอยเก่าแก่เหล่านี้ มีคำสัญญาอะไรซ่อนอยู่กันนะ",
						"hindi": "इन प्राचीन निशानों में कौन सा वादा छिपा है?"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊숙이 들어온 것 같아. 오로라의 빛이 더 강해졌어.",
						"english": "We seem to have come deeper in. The aurora's light has grown stronger.",
						"japanese": "もっと奥深くに入り込んだようだ。オーロラの光が強くなった。",
						"chinese": "我们似乎进入得更深了。极光的光芒也更强了。",
						"french": "On dirait qu'on est allés plus loin. La lumière de l'aurore est devenue plus intense.",
						"spanish": "Parece que hemos avanzado más. La luz de la aurora se ha vuelto más intensa.",
						"vietnamese": "Có vẻ như chúng ta đã đi sâu hơn. Ánh sáng cực quang đã mạnh hơn.",
						"thai": "ดูเหมือนเราจะเข้ามาลึกขึ้น แสงออโรร่าก็สว่างจ้าขึ้นด้วย",
						"hindi": "हम और गहरे आ गए हैं। ऑरोरा की रोशनी और तेज़ हो गई है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "근데… 이상하게 추위도 더 심해진 것 같아.",
						"english": "But... strangely, the cold seems to have intensified too.",
						"japanese": "でも…不思議と寒さも厳しくなったようだ。",
						"chinese": "但是……奇怪的是，寒冷也似乎加剧了。",
						"french": "Mais... étrangement, le froid semble s'être intensifié aussi.",
						"spanish": "Pero... extrañamente, el frío también parece haber aumentado.",
						"vietnamese": "Nhưng... lạ thay, cái lạnh cũng dường như khắc nghiệt hơn.",
						"thai": "แต่... แปลกนะ ความหนาวก็ยิ่งเพิ่มขึ้นด้วย",
						"hindi": "लेकिन... अजीब बात है, ठंड भी और बढ़ गई है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 되돌릴 수 없는 길을 걷고 있다.",
						"english": "We are walking a path from which there is no return.",
						"japanese": "私たちは、もう後戻りできない道を歩いている。",
						"chinese": "我们正在走一条无法回头的路。",
						"french": "Nous marchons sur un chemin sans retour.",
						"spanish": "Estamos caminando por un camino sin retorno.",
						"vietnamese": "Chúng ta đang đi trên một con đường không thể quay lại.",
						"thai": "เรากำลังเดินอยู่บนเส้นทางที่ย้อนกลับไม่ได้",
						"hindi": "हम ऐसे रास्ते पर चल रहे हैं जहाँ से वापसी नहीं है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "오로라가 약속한 고향은, 우리가 아는 그곳이 아닐지도 모른다.",
						"english": "The homeland the aurora promised might not be the place we know.",
						"japanese": "オーロラが約束した故郷は、私たちが知っている場所ではないのかもしれない。",
						"chinese": "极光所承诺的故乡，可能不是我们所知道的地方。",
						"french": "La patrie promise par l'aurore n'est peut-être pas l'endroit que nous connaissons.",
						"spanish": "El hogar que prometió la aurora podría no ser el lugar que conocemos.",
						"vietnamese": "Quê hương mà cực quang hứa hẹn, có thể không phải là nơi chúng ta biết.",
						"thai": "บ้านเกิดที่ออโรร่าสัญญานั้น อาจไม่ใช่ที่ที่เรารู้จัก",
						"hindi": "ऑरोरा द्वारा वादा किया गया वतन, वह जगह नहीं हो सकती जिसे हम जानते हैं।"
					}
				},
				{
					"content": {
						"korean": "무슨 뜻이야? 그럼 우린 어디로 가는 거야?",
						"english": "What does that mean? Then where are we going?",
						"japanese": "どういう意味だ？じゃあ、私たちはどこへ行くんだ？",
						"chinese": "这是什么意思？那我们去哪儿？",
						"french": "Qu'est-ce que ça veut dire ? Alors, où allons-nous ?",
						"spanish": "¿Qué significa eso? Entonces, ¿adónde vamos?",
						"vietnamese": "Ý anh là sao? Vậy chúng ta đang đi đâu?",
						"thai": "หมายความว่ายังไง? แล้วเรากำลังจะไปที่ไหน?",
						"hindi": "इसका क्या मतलब है? तो हम कहाँ जा रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "혹한의 땅에 탐험대의 그림자가 잠식되었다.",
						"english": "The shadows of the expedition were swallowed by the frozen land.",
						"japanese": "極寒の地に、探検隊の影が浸食された。",
						"chinese": "探险队的影子被极寒之地吞噬了。",
						"french": "Les ombres de l'expédition ont été englouties par la terre glacée.",
						"spanish": "Las sombras de la expedición fueron absorbidas por la tierra helada.",
						"vietnamese": "Bóng dáng đoàn thám hiểm đã bị vùng đất băng giá nuốt chửng.",
						"thai": "เงาของคณะสำรวจถูกกลืนกินโดยดินแดนที่หนาวเหน็บ",
						"hindi": "अभियान दल की परछाईं बर्फीली ज़मीन में समा गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고향의 품으로 돌아가라… 영원한 안식 속으로…",
						"english": "Return to the embrace of home... into eternal slumber...",
						"japanese": "故郷の懐へ帰れ…永遠の安息の中へ…",
						"chinese": "回到故乡的怀抱…进入永恒的安息…",
						"french": "Retournez à l'étreinte du foyer... dans un repos éternel...",
						"spanish": "Regresad al abrazo del hogar... al descanso eterno...",
						"vietnamese": "Trở về vòng tay quê hương... vào giấc ngủ vĩnh hằng...",
						"thai": "จงกลับสู่อ้อมกอดแห่งบ้านเกิด... สู่การพักผ่อนชั่วนิรันดร์...",
						"hindi": "घर की गोद में लौट जाओ... अनंत शांति में..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 진실을… 밝혀낼 거야.",
						"english": "It's not over yet... I'll uncover the truth.",
						"japanese": "まだ…終わってない。真実を…暴いてやる。",
						"chinese": "还没…结束。我会…揭露真相。",
						"french": "Ce n'est pas encore… fini. Je découvrirai… la vérité.",
						"spanish": "Aún no… ha terminado. Revelaré… la verdad.",
						"vietnamese": "Chưa… kết thúc đâu. Ta sẽ… phơi bày sự thật.",
						"thai": "ยัง…ไม่จบหรอก. ฉันจะ…เปิดเผยความจริง.",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं… सच का पता लगाऊँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "오로라의 빛이 닿는 곳, 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "Where the aurora's light reached, a colossal shadow awaited the expedition.",
						"japanese": "オーロラの光が届く場所には、巨大な影が探検隊を待っていた。",
						"chinese": "极光之光所及之处，一个巨大的身影正等待着探险队。",
						"french": "Là où la lumière de l'aurore atteignait, une ombre colossale attendait l'expédition.",
						"spanish": "Donde la luz de la aurora alcanzaba, una sombra colosal esperaba a la expedición.",
						"vietnamese": "Nơi ánh sáng cực quang chiếu đến, một cái bóng khổng lồ đang chờ đợi đoàn thám hiểm.",
						"thai": "ที่ที่แสงออโรร่าส่องถึง เงาขนาดมหึมากำลังรอคอยคณะสำรวจอยู่",
						"hindi": "जहाँ ऑरोरा की रोशनी पहुँचती थी, एक विशाल छाया अभियान का इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…왔군. 길 잃은 자들이여.",
						"english": "...They've arrived. Lost ones.",
						"japanese": "…来たか。迷いし者たちよ。",
						"chinese": "……来了。迷失的人们啊。",
						"french": "...Vous êtes arrivés. Âmes perdues.",
						"spanish": "...Han llegado. Perdidos.",
						"vietnamese": "...Đã đến rồi. Những kẻ lạc lối.",
						"thai": "...มาแล้วสินะ เจ้าผู้หลงทาง",
						"hindi": "...आ गए। भटके हुए।"
					}
				},
				{
					"content": {
						"korean": "오로라의 속삭임은 언제나 진실을 말하지. 너희의 고향은… 여기에 있다.",
						"english": "The whisper of the Aurora always speaks the truth. Your home... is here.",
						"japanese": "オーロラの囁きは常に真実を告げる。お前たちの故郷は…ここにある。",
						"chinese": "极光的低语总是诉说真相。你们的故乡…就在这里。",
						"french": "Le murmure de l'Aurore dit toujours la vérité. Votre foyer... est ici.",
						"spanish": "El susurro de la Aurora siempre dice la verdad. Vuestro hogar... está aquí.",
						"vietnamese": "Lời thì thầm của Cực quang luôn nói lên sự thật. Quê hương của các ngươi... ở đây.",
						"thai": "เสียงกระซิบของแสงออโรราบอกความจริงเสมอ บ้านเกิดของเจ้า... อยู่ที่นี่",
						"hindi": "औरोरा की फुसफुसाहट हमेशा सच बताती है। तुम्हारा घर... यहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "고향? 무슨 말도 안 되는 소리야!",
						"english": "Home? What nonsense!",
						"japanese": "故郷？何を馬鹿なことを！",
						"chinese": "故乡？简直胡说八道！",
						"french": "Foyer ? Quelle absurdité !",
						"spanish": "¿Hogar? ¡Qué disparate!",
						"vietnamese": "Quê hương? Nói nhảm nhí gì vậy!",
						"thai": "บ้านเกิดเหรอ? พูดอะไรไร้สาระ!",
						"hindi": "घर? क्या बकवास है!"
					},
					"type": "speech"
				},
				{
					"spot": [
						1,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "저것이… 오로라의 진정한 의도인가. 왜곡된 인도였어.",
						"english": "Is that... the Aurora's true intention? It was a twisted guidance.",
						"japanese": "あれが…オーロラの真の意図なのか。歪んだ導きだった。",
						"chinese": "那才是…极光的真正意图吗。那是被扭曲的指引。",
						"french": "Est-ce là... la véritable intention de l'Aurore ? Ce fut un guide tordu.",
						"spanish": "¿Es esa... la verdadera intención de la Aurora? Fue una guía retorcida.",
						"vietnamese": "Đó... là ý định thực sự của Cực quang sao. Một sự dẫn dắt méo mó.",
						"thai": "นั่น... คือความตั้งใจที่แท้จริงของแสงออโรราหรือ? มันเป็นการชี้นำที่บิดเบือน",
						"hindi": "क्या यही... औरोरा का असली इरादा था? यह एक विकृत मार्गदर्शन था।"
					}
				},
				{
					"content": {
						"korean": "약속의 이면에는 언제나 숨겨진 대가가 있는 법.",
						"english": "Behind every promise, there is always a hidden cost.",
						"japanese": "約束の裏には、常に隠された代償があるものだ。",
						"chinese": "承诺的背后，总有隐藏的代价。",
						"french": "Derrière chaque promesse, il y a toujours un coût caché.",
						"spanish": "Detrás de cada promesa, siempre hay un precio oculto.",
						"vietnamese": "Đằng sau mỗi lời hứa, luôn có một cái giá tiềm ẩn.",
						"thai": "เบื้องหลังคำสัญญา มักมีราคาที่ซ่อนอยู่เสมอ",
						"hindi": "हर वादे के पीछे, हमेशा एक छिपी हुई कीमत होती है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 이것은 시작일 뿐… 고향은… 너희를 기다린다…",
						"english": "Hehehe... This is just the beginning... Home... awaits you...",
						"japanese": "ククク…これは始まりに過ぎない…故郷が…お前たちを待っている…",
						"chinese": "呵呵呵…这只是开始…故乡…在等着你们…",
						"french": "Héhéhé... Ce n'est que le début... Le foyer... vous attend...",
						"spanish": "Jejeje... Esto es solo el principio... El hogar... os espera...",
						"vietnamese": "Khà khà khà... Đây chỉ là khởi đầu... Quê hương... đang chờ các ngươi...",
						"thai": "คิกคิกคิก... นี่เป็นแค่จุดเริ่มต้น... บ้านเกิด... กำลังรอเจ้าอยู่...",
						"hindi": "हँसता है... यह तो बस शुरुआत है... घर... तुम्हारा इंतज़ार कर रहा है..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝난 건가? 하지만… 왠지 더 혼란스러워졌어.",
						"english": "Is it over? But... I feel even more confused now.",
						"japanese": "終わったのか？だが…なぜか余計に混乱している。",
						"chinese": "结束了吗？但是…总觉得更混乱了。",
						"french": "Est-ce fini ? Mais... je me sens encore plus confus.",
						"spanish": "¿Se acabó? Pero... me siento aún más confundido.",
						"vietnamese": "Kết thúc rồi sao? Nhưng... sao lại cảm thấy càng thêm hoang mang.",
						"thai": "มันจบแล้วเหรอ? แต่... ทำไมรู้สึกสับสนยิ่งกว่าเดิม",
						"hindi": "क्या यह खत्म हो गया? लेकिन... मैं और भी भ्रमित महसूस कर रहा हूँ।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 사라졌지만, 진정한 의도는 여전히 미궁 속이군.",
						"english": "{random_boss} is gone, but the true intention remains a mystery.",
						"japanese": "{random_boss}は消えたが、真の意図は未だ謎の中だ。",
						"chinese": "{random_boss}消失了，但真正的意图仍然是个谜。",
						"french": "{random_boss} a disparu, mais la véritable intention reste un mystère.",
						"spanish": "{random_boss} se ha ido, pero la verdadera intención sigue siendo un misterio.",
						"vietnamese": "{random_boss} đã biến mất, nhưng ý định thực sự vẫn còn là một bí ẩn.",
						"thai": "{random_boss} หายไปแล้ว แต่ความตั้งใจที่แท้จริงยังคงเป็นปริศนา",
						"hindi": "{random_boss} चला गया है, लेकिन असली इरादा अभी भी एक रहस्य है।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 다시 길을 나선다. 오로라 뒤에 숨겨진 진실을 밝히기 위해.",
						"english": "The expedition sets off again to uncover the truth hidden behind the Aurora.",
						"japanese": "探検隊は再び旅に出る。オーロラの裏に隠された真実を明らかにするために。",
						"chinese": "探险队再次踏上征程，为了揭示隐藏在极光背后的真相。",
						"french": "L'expédition repart pour découvrir la vérité cachée derrière l'Aurore.",
						"spanish": "La expedición parte de nuevo para descubrir la verdad oculta tras la Aurora.",
						"vietnamese": "Đoàn thám hiểm lại lên đường. Để làm sáng tỏ sự thật ẩn giấu đằng sau Cực quang.",
						"thai": "คณะสำรวจออกเดินทางอีกครั้ง เพื่อเปิดเผยความจริงที่ซ่อนอยู่เบื้องหลังแสงออโรรา",
						"hindi": "अभियान दल फिर से निकल पड़ा है, औरोरा के पीछे छिपी सच्चाई को उजागर करने के लिए।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 매서운 눈보라가 길을 지웠다.",
			"탐험대는 길을 잃었다. 모든 것이 얼어붙는 혹한 속에서.",
			"그때, 신비로운 오로라가 하늘을 수놓았다. 아름다운 빛이 길을 안내하는 듯 보였다.",
			"하지만 그 아름다움 뒤에는, 익숙한 풍경을 낯설게 만드는 기묘한 이끌림이 있었다.",
			"생존을 위한 투쟁, 미지의 위협이 시작된다."
		],
		"english": [
			"Endless snowfield, a fierce blizzard erased the path.",
			"The expedition lost its way. In the bitter cold where everything froze.",
			"Then, a mysterious aurora adorned the sky. Its beautiful light seemed to guide the way.",
			"But behind that beauty, there was a strange allure that made the familiar landscape unfamiliar.",
			"The struggle for survival, a mysterious threat begins."
		],
		"japanese": [
			"限りなく広がる雪原、激しい吹雪が道を消し去った。",
			"探検隊は道に迷った。全てが凍りつく極寒の中で。",
			"その時、神秘的なオーロラが空を彩った。美しい光が道を導くかのようだった。",
			"しかしその美しさの裏には、見慣れた風景を異質なものに変える奇妙な引力があった。",
			"生存のための闘争、未知の脅威が始まる。"
		],
		"chinese": [
			"一望无际的雪原，凛冽的暴风雪抹去了前路。",
			"探险队迷失了方向。在万物冻结的严寒中。",
			"此时，神秘的极光点缀着天空。那美丽的光芒仿佛在指引方向。",
			"然而在那美丽背后，却隐藏着一股奇异的吸引力，让熟悉的景色变得陌生。",
			"为生存而战，未知的威胁即将开始。"
		],
		"french": [
			"Une étendue enneigée infinie, un blizzard féroce avait effacé le chemin.",
			"L'expédition s'était perdue. Dans le froid glacial où tout gelait.",
			"Alors, une aurore mystérieuse a paré le ciel. Sa belle lumière semblait montrer le chemin.",
			"Mais derrière cette beauté, il y avait une étrange attraction qui rendait le paysage familier inconnu.",
			"La lutte pour la survie, une menace inconnue commence."
		],
		"spanish": [
			"Un campo de nieve interminable, una feroz ventisca borró el camino.",
			"La expedición se perdió. En el frío intenso donde todo se congelaba.",
			"Entonces, una misteriosa aurora adornó el cielo. Su hermosa luz parecía guiar el camino.",
			"Pero detrás de esa belleza, había un extraño encanto que hacía que el paisaje familiar pareciera desconocido.",
			"La lucha por la supervivencia, una amenaza desconocida comienza."
		],
		"vietnamese": [
			"Cánh đồng tuyết trải dài vô tận, cơn bão tuyết khắc nghiệt đã xóa nhòa lối đi.",
			"Đoàn thám hiểm lạc lối. Giữa cái lạnh cắt da cắt thịt, mọi thứ đều đóng băng.",
			"Khi đó, một cực quang huyền bí thêu dệt bầu trời. Ánh sáng tuyệt đẹp dường như đang dẫn lối.",
			"Nhưng đằng sau vẻ đẹp đó, lại có một sức hút kỳ lạ khiến phong cảnh quen thuộc trở nên xa lạ.",
			"Cuộc chiến sinh tồn, mối đe dọa bí ẩn bắt đầu."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด พายุหิมะอันเกรี้ยวกราดได้ลบเลือนเส้นทางไป",
			"คณะสำรวจหลงทาง ท่ามกลางความหนาวเหน็บจนทุกสิ่งกลายเป็นน้ำแข็ง",
			"ทันใดนั้น แสงออโรราอันลึกลับก็ปรากฏขึ้นบนท้องฟ้า แสงอันงดงามนั้นดูเหมือนจะนำทาง",
			"แต่เบื้องหลังความงดงามนั้น มีแรงดึงดูดประหลาดที่ทำให้ทิวทัศน์ที่คุ้นเคยแปลกไป",
			"การต่อสู้เพื่อความอยู่รอด ภัยคุกคามที่ไม่รู้จักได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"अंतहीन बर्फ का मैदान, एक भयंकर बर्फीला तूफान रास्ते को मिटा गया।",
			"अभियान दल रास्ता भटक गया। उस भीषण ठंड में जहाँ सब कुछ जम गया था।",
			"तभी, एक रहस्यमयी ऑरोरा ने आकाश को सजाया। उसकी सुंदर रोशनी रास्ता दिखाती प्रतीत हुई।",
			"लेकिन उस सुंदरता के पीछे, एक अजीब आकर्षण था जिसने परिचित परिदृश्य को अपरिचित बना दिया।",
			"अस्तित्व के लिए संघर्ष, एक अज्ञात खतरा शुरू होता है।"
		]
	}
} as const;
