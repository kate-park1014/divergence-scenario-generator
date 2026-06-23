export const scenario_forest_chloris_7_04 = {
	"scenario_id": "forest_chloris_7_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
						"korean": "같은 길이 다시 나타났다. 절망이 그림자처럼 따라붙었다.",
						"english": "The same path appeared again. Despair clung like a shadow.",
						"japanese": "同じ道が再び現れた。絶望が影のように付きまとった。",
						"chinese": "同样的道路再次出现。绝望如影随形。",
						"french": "Le même chemin réapparut. Le désespoir s'accrochait comme une ombre.",
						"spanish": "El mismo camino apareció de nuevo. La desesperación se aferraba como una sombra.",
						"vietnamese": "Lối đi cũ lại hiện ra. Tuyệt vọng bám theo như hình với bóng.",
						"thai": "ทางเดิมปรากฏขึ้นอีกครั้ง. ความสิ้นหวังเกาะติดเหมือนเงา.",
						"hindi": "वही रास्ता फिर से दिखा। निराशा परछाई की तरह चिपक गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "또 여기야? 대체 몇 번째야…!",
						"english": "Here again? How many times is this…!",
						"japanese": "またここか？一体何度目だ…！",
						"chinese": "又到这里了？这到底是多少次了…！",
						"french": "Encore ici ? Combien de fois déjà… !",
						"spanish": "¿Otra vez aquí? ¡Cuántas veces ya…!",
						"vietnamese": "Lại đây nữa à? Đã bao nhiêu lần rồi…!",
						"thai": "ที่นี่อีกแล้วรึ? นี่มันครั้งที่เท่าไหร่แล้วนะ…!",
						"hindi": "फिर से यहीं? यह कितनी बार हो चुका है…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…찾아왔구나.",
						"english": "…You've come.",
						"japanese": "…見つけたか。",
						"chinese": "……你来了。",
						"french": "…Tu es venu.",
						"spanish": "…Has llegado.",
						"vietnamese": "…Đã đến rồi.",
						"thai": "…มาถึงแล้วสินะ.",
						"hindi": "…तुम आ गए।"
					},
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "누구야? 당신도 숲의 함정인가?",
						"english": "Who are you? Are you also a trap of the forest?",
						"japanese": "誰だ？お前も森の罠か？",
						"chinese": "你是谁？你也是森林的陷阱吗？",
						"french": "Qui es-tu ? Es-tu aussi un piège de la forêt ?",
						"spanish": "¿Quién eres? ¿También eres una trampa del bosque?",
						"vietnamese": "Ngươi là ai? Ngươi cũng là cạm bẫy của rừng ư?",
						"thai": "เจ้าเป็นใคร? เจ้าก็เป็นกับดักของป่าเหมือนกันรึเปล่า?",
						"hindi": "तुम कौन हो? क्या तुम भी जंगल का जाल हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 헤이즐. 길을 잃은 자들에게 조각을 주는 자.",
						"english": "I am Hazel. The one who gives fragments to the lost.",
						"japanese": "私はヘイゼル。道に迷いし者に、破片を与える者。",
						"chinese": "我是黑兹尔。赐予迷途之人碎片者。",
						"french": "Je suis Hazel. Celle qui donne des fragments aux perdus.",
						"spanish": "Soy Hazel. La que da fragmentos a los perdidos.",
						"vietnamese": "Ta là Hazel. Người trao mảnh vỡ cho những kẻ lạc lối.",
						"thai": "ฉันคือเฮเซล. ผู้มอบเศษเสี้ยวให้แก่ผู้หลงทาง.",
						"hindi": "मैं हेज़ल हूँ। भटके हुए लोगों को टुकड़े देने वाली।"
					},
					"speaker": "hazel"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "벗어나고 싶다면, 이 숲의 심장으로 향하는 '왜곡된 길'을 찾아야 해.",
						"english": "If you want to escape, you must find the 'Distorted Path' that leads to the heart of this forest.",
						"japanese": "抜け出したいなら、この森の心臓へと向かう「歪んだ道」を見つけねばならない。",
						"chinese": "若想逃离，你必须找到通往森林心脏的“扭曲之路”。",
						"french": "Si tu veux t'échapper, tu dois trouver le 'Chemin Distordu' qui mène au cœur de cette forêt.",
						"spanish": "Si quieres escapar, debes encontrar el 'Camino Distorsionado' que lleva al corazón de este bosque.",
						"vietnamese": "Nếu muốn thoát ra, ngươi phải tìm thấy 'Con đường méo mó' dẫn đến trái tim khu rừng này.",
						"thai": "ถ้าอยากหลุดพ้น เจ้าต้องหา 'เส้นทางบิดเบี้ยว' ที่มุ่งสู่ใจกลางป่าแห่งนี้ให้พบ.",
						"hindi": "यदि तुम बचना चाहते हो, तो तुम्हें 'विकृत मार्ग' खोजना होगा जो इस जंगल के हृदय की ओर जाता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환영의 나비가 다시 나타나 같은 춤을 추었다. 비웃듯이.",
						"english": "The butterfly of illusion reappeared, dancing the same dance. As if mocking.",
						"japanese": "幻の蝶が再び現れ、同じ踊りを踊った。嘲笑うかのように。",
						"chinese": "幻象之蝶再次出现，跳着相同的舞步。仿佛在嘲讽。",
						"french": "Le papillon de l'illusion réapparut, dansant la même danse. Comme pour se moquer.",
						"spanish": "La mariposa de la ilusión reapareció, bailando la misma danza. Como si se burlara.",
						"vietnamese": "Con bướm ảo ảnh lại xuất hiện, nhảy điệu nhảy cũ. Như thể đang chế nhạo.",
						"thai": "ผีเสื้อมายาปรากฏขึ้นอีกครั้ง เต้นรำในท่าเดิม ราวกับเย้ยหยัน",
						"hindi": "भ्रम की तितली फिर से प्रकट हुई, वही नृत्य कर रही थी। जैसे उपहास कर रही हो।"
					}
				},
				{
					"content": {
						"korean": "저 나비… 지겨워 죽겠어.",
						"english": "That butterfly... I'm sick of it.",
						"japanese": "あの蝶…もううんざりだ。",
						"chinese": "那只蝴蝶……烦死了。",
						"french": "Ce papillon... j'en ai marre.",
						"spanish": "Esa mariposa... me tiene harto.",
						"vietnamese": "Con bướm đó… chán chết đi được.",
						"thai": "ผีเสื้อตัวนั้น... เบื่อจะตายอยู่แล้ว",
						"hindi": "वह तितली... मैं उससे तंग आ गया हूँ।"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "그들은 같은 꿈을 꾸게 만들지. 영원히.",
						"english": "They make them dream the same dream. Forever.",
						"japanese": "彼らは同じ夢を見させる。永遠に。",
						"chinese": "他们让他们做着同一个梦。永远。",
						"french": "Ils les font rêver du même rêve. Pour toujours.",
						"spanish": "Los hacen soñar el mismo sueño. Para siempre.",
						"vietnamese": "Chúng khiến họ mơ cùng một giấc mơ. Mãi mãi.",
						"thai": "พวกมันทำให้ฝันถึงสิ่งเดียวกัน ชั่วนิรันดร์",
						"hindi": "वे उन्हें एक ही सपना दिखाते हैं। हमेशा के लिए।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "그럼 그 왜곡된 길이란 게 뭔데? 대체 어디로 가야 하는 건데!",
						"english": "Then what is that distorted path? Where are we supposed to go?!",
						"japanese": "じゃあ、その歪んだ道って何なの？一体どこへ行けばいいんだ！",
						"chinese": "那条扭曲的道路到底是什么？我们到底该去哪里！",
						"french": "Alors, c'est quoi ce chemin distordu ? Où sommes-nous censés aller ?!",
						"spanish": "¿Entonces, qué es ese camino distorsionado? ¡¿Adónde se supone que debemos ir?!",
						"vietnamese": "Vậy con đường méo mó đó là gì? Rốt cuộc chúng ta phải đi đâu!",
						"thai": "แล้วทางที่บิดเบี้ยวนั่นคืออะไร? สรุปแล้วเราต้องไปที่ไหนกันแน่!",
						"hindi": "तो वह विकृत मार्ग क्या है? हमें आखिर कहाँ जाना है?!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보이는 것을 믿지 마. 숲은 언제나 너희를 속여.",
						"english": "Don't believe what you see. The forest always deceives you.",
						"japanese": "見えるものを信じるな。森はいつもお前たちを欺く。",
						"chinese": "不要相信你所看到的。森林总是欺骗你们。",
						"french": "Ne crois pas ce que tu vois. La forêt vous trompe toujours.",
						"spanish": "No creas lo que ves. El bosque siempre os engaña.",
						"vietnamese": "Đừng tin những gì ngươi thấy. Rừng luôn lừa dối các ngươi.",
						"thai": "อย่าเชื่อในสิ่งที่เห็น ป่าหลอกลวงพวกเจ้าเสมอ",
						"hindi": "जो तुम देखते हो उस पर विश्वास मत करो। जंगल हमेशा तुम्हें धोखा देता है।"
					},
					"speaker": "hazel"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "진실은… 가장 뒤틀린 곳에 숨어있어.",
						"english": "The truth... lies hidden in the most twisted place.",
						"japanese": "真実は…最も歪んだ場所に隠されている。",
						"chinese": "真相……隐藏在最扭曲的地方。",
						"french": "La vérité... se cache dans l'endroit le plus tordu.",
						"spanish": "La verdad... se esconde en el lugar más retorcido.",
						"vietnamese": "Sự thật… ẩn mình ở nơi vặn vẹo nhất.",
						"thai": "ความจริง... ซ่อนอยู่ในสถานที่ที่บิดเบี้ยวที่สุด",
						"hindi": "सत्य... सबसे विकृत स्थान में छिपा है।"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 덩굴의 잔해가 길을 막았다. 죽은 것인지, 잠든 것인지 알 수 없었다.",
						"english": "The remnants of a giant vine blocked the path. It was impossible to tell if it was dead or asleep.",
						"japanese": "巨大な蔓の残骸が道を塞いでいた。それが死んでいるのか、眠っているのか分からなかった。",
						"chinese": "巨大藤蔓的残骸挡住了去路。无法分辨它是死了还是睡着了。",
						"french": "Les vestiges d'une vigne géante bloquaient le chemin. Impossible de dire si elle était morte ou endormie.",
						"spanish": "Los restos de una enredadera gigante bloqueaban el camino. Era imposible saber si estaba muerta o dormida.",
						"vietnamese": "Tàn tích của một dây leo khổng lồ chắn lối đi. Không thể biết nó đã chết hay đang ngủ.",
						"thai": "ซากเถาวัลย์ยักษ์ขวางทางอยู่ ไม่รู้ว่าตายแล้วหรือแค่หลับใหล",
						"hindi": "एक विशाल बेल के अवशेषों ने रास्ता रोक दिया था। यह बताना असंभव था कि वह मृत थी या सो रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이 덩굴도 우리를 가두려는 거야?",
						"english": "Is this vine trying to trap us too?",
						"japanese": "この蔓も私たちを閉じ込めようとしているのか？",
						"chinese": "这藤蔓也想困住我们吗？",
						"french": "Cette vigne aussi essaie de nous piéger ?",
						"spanish": "¿Esta enredadera también intenta atraparnos?",
						"vietnamese": "Dây leo này cũng muốn giam cầm chúng ta sao?",
						"thai": "เถาวัลย์นี่ก็พยายามจะดักพวกเราด้วยงั้นหรือ?",
						"hindi": "क्या यह बेल भी हमें फँसाने की कोशिश कर रही है?"
					}
				},
				{
					"speaker": "hazel",
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
						"korean": "숲의 '정화'는 곧 흡수이자 소멸.",
						"english": "The forest's 'purification' is soon absorption and annihilation.",
						"japanese": "森の「浄化」とは、すなわち吸収であり消滅だ。",
						"chinese": "森林的“净化”即是吸收与消灭。",
						"french": "La « purification » de la forêt est bientôt absorption et annihilation.",
						"spanish": "La 'purificación' del bosque es pronto absorción y aniquilación.",
						"vietnamese": "'Thanh tẩy' của rừng sớm là sự hấp thụ và hủy diệt.",
						"thai": "'การชำระล้าง' ของป่าคือการดูดกลืนและการทำลายล้างในไม่ช้า",
						"hindi": "जंगल का 'शुद्धिकरण' शीघ्र ही अवशोषण और विनाश है।"
					},
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "그럼 그 왜곡된 길은 우리를 어디로 이끌지?",
						"english": "So where does that distorted path lead us?",
						"japanese": "じゃあ、その歪んだ道は私たちをどこへ導くんだ？",
						"chinese": "那么那条扭曲的道路会将我们引向何处？",
						"french": "Alors, où nous mène ce chemin distordu ?",
						"spanish": "Entonces, ¿adónde nos lleva ese camino distorsionado?",
						"vietnamese": "Vậy con đường méo mó đó sẽ dẫn chúng ta đi đâu?",
						"thai": "แล้วทางที่บิดเบี้ยวนั่นจะนำเราไปที่ไหน?",
						"hindi": "तो वह विकृत मार्ग हमें कहाँ ले जाता है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "선택은 너희의 몫. 구원이 될지, 더 깊은 함정이 될지는.",
						"english": "The choice is yours. Salvation, or a deeper trap?",
						"japanese": "選択は君たち次第だ。救いとなるか、それともより深い罠となるか。",
						"chinese": "选择权在你们手中。是救赎，还是更深的陷阱。",
						"french": "Le choix vous appartient. Le salut, ou un piège plus profond ?",
						"spanish": "La elección es vuestra. ¿Será la salvación o una trampa más profunda?",
						"vietnamese": "Sự lựa chọn là của các ngươi. Cứu rỗi hay một cái bẫy sâu hơn.",
						"thai": "การตัดสินใจเป็นของพวกเจ้า จะเป็นความรอดหรือกับดักที่ลึกกว่ากัน",
						"hindi": "चुनाव तुम्हारा है। मोक्ष होगा या गहरा जाल?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "답을 줘! 지쳤어…!",
						"english": "Give me an answer! I'm tired...!",
						"japanese": "答えをくれ！もう疲れた…！",
						"chinese": "给我答案！我受够了…！",
						"french": "Donne-moi une réponse ! Je suis épuisé… !",
						"spanish": "¡Dame una respuesta! ¡Estoy agotado…!",
						"vietnamese": "Cho ta câu trả lời! Ta mệt mỏi lắm rồi…!",
						"thai": "ตอบมาสิ! ฉันเหนื่อยแล้ว...!",
						"hindi": "जवाब दो! मैं थक गया हूँ...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 소리가 멜로디처럼 들렸다. 하지만 불협화음으로 끝났다. 조롱하듯이.",
						"english": "The forest sounds were a melody. But they ended in dissonance. As if mocking.",
						"japanese": "森の音はメロディーのように聞こえた。しかし、不協和音で終わった。嘲笑うかのように。",
						"chinese": "森林的声音听起来像一首旋律。但它以不和谐音告终。仿佛在嘲弄。",
						"french": "Les sons de la forêt étaient une mélodie. Mais ils se sont terminés par une dissonance. Comme pour se moquer.",
						"spanish": "Los sonidos del bosque eran una melodía. Pero terminaron en disonancia. Como si se burlaran.",
						"vietnamese": "Âm thanh của rừng như một giai điệu. Nhưng rồi kết thúc bằng sự bất hòa. Như thể đang chế nhạo.",
						"thai": "เสียงของป่าฟังดูราวกับท่วงทำนอง แต่กลับจบลงด้วยความไม่ลงรอย ราวกับเย้ยหยัน",
						"hindi": "जंगल की आवाज़ें एक धुन जैसी लग रही थीं। लेकिन वे बेसुरी हो गईं। मानो मज़ाक उड़ा रही हों।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "이젠 환청까지 들려. 미쳐가는 것 같아.",
						"english": "Now I'm hearing things. I think I'm losing my mind.",
						"japanese": "もう幻聴まで聞こえる。気が狂いそうだ。",
						"chinese": "现在我甚至听到幻听。我好像要疯了。",
						"french": "J'entends des voix maintenant. Je crois que je deviens fou.",
						"spanish": "Ahora escucho voces. Creo que me estoy volviendo loco.",
						"vietnamese": "Giờ ta còn nghe thấy ảo thanh nữa. Ta sắp phát điên rồi.",
						"thai": "ตอนนี้ฉันได้ยินเสียงหลอนด้วย ฉันคิดว่าฉันกำลังจะบ้า",
						"hindi": "अब मुझे मतिभ्रम भी सुनाई दे रहा है। लगता है मैं पागल हो रहा हूँ।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "영원한 조화는 곧 끝없는 소멸.",
						"english": "Eternal harmony is endless annihilation.",
						"japanese": "永遠の調和は、すなわち終わりのない消滅。",
						"chinese": "永恒的和谐即是无尽的消亡。",
						"french": "L'harmonie éternelle est une annihilation sans fin.",
						"spanish": "La armonía eterna es la aniquilación sin fin.",
						"vietnamese": "Sự hài hòa vĩnh cửu chính là sự tiêu vong vô tận.",
						"thai": "ความกลมกลืนชั่วนิรันดร์คือการทำลายล้างไม่รู้จบ",
						"hindi": "शाश्वत सद्भाव ही अंतहीन विनाश है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 말이야?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Đó là ý gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					}
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "숲은 너희를 사랑해서 가두는 거야. 너희가 그 일부가 되기를.",
						"english": "The forest traps you out of love. It wants you to become one with it.",
						"japanese": "森は君たちを愛しているから閉じ込めるのだ。君たちがその一部となることを願って。",
						"chinese": "森林困住你们是因为爱你们。希望你们成为它的一部分。",
						"french": "La forêt vous emprisonne par amour. Elle veut que vous en fassiez partie.",
						"spanish": "El bosque os atrapa por amor. Quiere que seáis parte de él.",
						"vietnamese": "Rừng giam cầm các ngươi vì yêu các ngươi. Muốn các ngươi trở thành một phần của nó.",
						"thai": "ป่ากักขังพวกเจ้าด้วยความรัก อยากให้พวกเจ้าเป็นส่วนหนึ่งของมัน",
						"hindi": "जंगल तुम्हें प्यार करता है इसलिए तुम्हें फंसाता है। वह चाहता है कि तुम उसका हिस्सा बन जाओ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "왜곡된 길은… 오직 분노만이 열 수 있어. 진짜 분노만이.",
						"english": "The twisted path... only rage can open it. True rage.",
						"japanese": "歪んだ道は…真の怒りだけが開ける。",
						"chinese": "扭曲的道路…只有愤怒才能开启。真正的愤怒。",
						"french": "Le chemin tordu… seule la rage peut l'ouvrir. La vraie rage.",
						"spanish": "El camino distorsionado… solo la ira puede abrirlo. Solo la verdadera ira.",
						"vietnamese": "Con đường méo mó… chỉ có sự phẫn nộ mới có thể mở ra. Chỉ có sự phẫn nộ thật sự.",
						"thai": "เส้นทางที่บิดเบี้ยว... มีเพียงความโกรธเท่านั้นที่สามารถเปิดออกได้ ความโกรธที่แท้จริงเท่านั้น",
						"hindi": "विकृत मार्ग… केवल क्रोध ही खोल सकता है। सच्चा क्रोध ही।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진짜 분노…?",
						"english": "True rage...?",
						"japanese": "真の怒り…？",
						"chinese": "真正的愤怒…？",
						"french": "La vraie rage… ?",
						"spanish": "¿Verdadera ira…?",
						"vietnamese": "Phẫn nộ thật sự…?",
						"thai": "ความโกรธที่แท้จริง...?",
						"hindi": "सच्चा क्रोध…?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가야 해. 더 늦으면, 너희도 그들의 일부가 돼.",
						"english": "We have to go. Any later, and you'll become one of them too.",
						"japanese": "行かなくては。手遅れになれば、君たちも彼らの一部になる。",
						"chinese": "必须走了。再迟，你们也会成为他们的一部分。",
						"french": "Il faut y aller. Plus tard, et vous deviendrez l'un d'eux aussi.",
						"spanish": "Tenemos que irnos. Si nos demoramos más, vosotros también os convertiréis en parte de ellos.",
						"vietnamese": "Phải đi thôi. Nếu chậm trễ hơn, các ngươi cũng sẽ trở thành một phần của chúng.",
						"thai": "ต้องไปแล้ว ถ้าช้ากว่านี้ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของพวกเขาด้วย",
						"hindi": "जाना होगा। और देर हुई तो तुम भी उनका हिस्सा बन जाओगे।"
					},
					"speaker": "hazel"
				},
				{
					"speaker": "hazel",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장이 쿵, 쿵, 뛰기 시작했다. 거대한 그림자가 길을 막아섰다.",
						"english": "The forest's heart began to thump, thump. A colossal shadow blocked the path.",
						"japanese": "森の心臓がドクン、ドクンと鳴り始めた。巨大な影が道を遮った。",
						"chinese": "森林的心脏开始怦怦跳动。一个巨大的影子挡住了去路。",
						"french": "Le cœur de la forêt commença à battre, battre. Une ombre colossale bloqua le chemin.",
						"spanish": "El corazón del bosque comenzó a latir, latir. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Trái tim khu rừng bắt đầu đập thình thịch. Một bóng đen khổng lồ chặn đường.",
						"thai": "หัวใจของป่าเริ่มเต้นตุบๆ เงาขนาดมหึมาขวางเส้นทางไว้",
						"hindi": "जंगल का दिल धड़कने लगा। एक विशाल छाया ने रास्ता रोक लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 순환을 거부하는가?",
						"english": "Fools. Do you defy the cycle?",
						"japanese": "愚か者め。循環を拒むか？",
						"chinese": "愚蠢的家伙。你们拒绝循环吗？",
						"french": "Imbéciles. Refusez-vous le cycle ?",
						"spanish": "Necios. ¿Desafiáis el ciclo?",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi từ chối vòng lặp ư?",
						"thai": "พวกโง่เง่า เจ้าปฏิเสธวัฏจักรหรือ?",
						"hindi": "मूर्खों। क्या तुम चक्र का अनादर करते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이젠 끝낼 거야. 모든 걸!",
						"english": "I'll end it now. Everything!",
						"japanese": "もう終わりにする。全てを！",
						"chinese": "我现在就结束这一切。所有的一切！",
						"french": "Je vais y mettre fin maintenant. À tout !",
						"spanish": "Ahora acabaré con esto. ¡Con todo!",
						"vietnamese": "Ta sẽ chấm dứt nó bây giờ. Tất cả!",
						"thai": "ข้าจะจบมันเดี๋ยวนี้ ทุกสิ่ง!",
						"hindi": "मैं इसे अभी खत्म करूँगा। सब कुछ!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 {random_boss}의 길을 막으려는가?",
						"english": "How dare you block the path of {random_boss}?",
						"japanese": "敢えて{random_boss}の道を阻むか？",
						"chinese": "你们竟敢阻挡{random_boss}的去路？",
						"french": "Comment osez-vous barrer le chemin de {random_boss} ?",
						"spanish": "¿Cómo osas bloquear el camino de {random_boss}?",
						"vietnamese": "Ngươi dám chặn đường của {random_boss} ư?",
						"thai": "เจ้ากล้าขวางทางของ {random_boss} หรือ?",
						"hindi": "तुम {random_boss} का रास्ता रोकने की हिम्मत कैसे करते हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 반복되는 악몽을. 우리가 멈춰 세울 거야.",
						"english": "This recurring nightmare. We will stop it.",
						"japanese": "この繰り返される悪夢を。我々が止める。",
						"chinese": "这个重复的噩梦。我们会阻止它。",
						"french": "Ce cauchemar récurrent. Nous l'arrêterons.",
						"spanish": "Esta pesadilla recurrente. La detendremos.",
						"vietnamese": "Giấc ác mộng lặp đi lặp lại này. Chúng ta sẽ chấm dứt nó.",
						"thai": "ฝันร้ายที่เกิดซ้ำนี้ เราจะหยุดมัน",
						"hindi": "इस बार-बार आने वाले दुःस्वप्न को। हम रोकेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "보아라. 너희의 분노조차… 이 순환의 일부일 뿐.",
						"english": "Behold. Even your rage... is merely part of this cycle.",
						"japanese": "見よ。お前たちの怒りさえも…この循環の一部に過ぎない。",
						"chinese": "看吧。甚至你们的愤怒……也只是这个循环的一部分。",
						"french": "Voyez. Même votre rage... n'est qu'une partie de ce cycle.",
						"spanish": "Contemplad. Incluso vuestra ira... es meramente parte de este ciclo.",
						"vietnamese": "Hãy nhìn xem. Ngay cả cơn giận của các ngươi... cũng chỉ là một phần của vòng lặp này.",
						"thai": "จงดูเถิด แม้แต่ความโกรธของเจ้า... ก็เป็นเพียงส่วนหนึ่งของวัฏจักรนี้",
						"hindi": "देखो। तुम्हारा क्रोध भी... इस चक्र का केवल एक हिस्सा है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 아니야. 절대 포기 안 해!",
						"english": "Not yet. I won't give up!",
						"japanese": "まだだ。絶対諦めない！",
						"chinese": "还没。我绝不放弃！",
						"french": "Pas encore. Jamais je n'abandonnerai !",
						"spanish": "¡Todavía no! ¡Nunca me rendiré!",
						"vietnamese": "Chưa đâu. Tuyệt đối không bỏ cuộc!",
						"thai": "ยังไม่! ฉันไม่ยอมแพ้เด็ดขาด!",
						"hindi": "अभी नहीं। मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 그때도 같은 절망을 맛볼 테니.",
						"english": "Come again. You'll taste the same despair.",
						"japanese": "また来い。その時も同じ絶望を味わうだろう。",
						"chinese": "再来吧。届时你仍将品尝同样的绝望。",
						"french": "Reviens. Tu goûteras au même désespoir.",
						"spanish": "Vuelve. Probarás la misma desesperación.",
						"vietnamese": "Cứ quay lại. Ngươi sẽ nếm trải sự tuyệt vọng tương tự thôi.",
						"thai": "กลับมาอีกสิ. เจ้าจะได้ลิ้มรสความสิ้นหวังเดิมอีก!",
						"hindi": "फिर आओ। तब भी तुम्हें वही निराशा मिलेगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어차피, 이 숲은… 너희를… 놓아주지… 않아….",
						"english": "...Anyway, this forest... won't... let you... go....",
						"japanese": "…どうせ、この森は…お前たちを…解放し…ない…。",
						"chinese": "……反正，这片森林……不会……放过……你们的……",
						"french": "...De toute façon, cette forêt... ne vous... laissera pas... partir....",
						"spanish": "...De todos modos, este bosque... no os... dejará... ir....",
						"vietnamese": "...Dù sao thì, khu rừng này... sẽ không... để các ngươi... đi....",
						"thai": "...อย่างไรก็ตาม ป่าแห่งนี้... จะไม่... ปล่อย... เจ้าไป....",
						"hindi": "...वैसे भी, यह जंगल... तुम्हें... जाने... नहीं देगा...."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니. 이젠 우리가 길을 만들 거야.",
						"english": "No. Now we will forge our own path.",
						"japanese": "いいえ。もう我々が道を作る。",
						"chinese": "不。现在我们将开辟自己的道路。",
						"french": "Non. Maintenant, nous allons créer notre propre chemin.",
						"spanish": "No. Ahora nosotros abriremos el camino.",
						"vietnamese": "Không. Bây giờ chúng ta sẽ tạo ra con đường của riêng mình.",
						"thai": "ไม่ ตอนนี้เราจะสร้างทางของเราเอง",
						"hindi": "नहीं। अब हम अपना रास्ता बनाएंगे।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 정체 모를 자의 그림자가 숲에 스며들었다. 순환은 깨졌는가?",
						"english": "The shadow of the fallen unknown entity seeped into the forest. Was the cycle broken?",
						"japanese": "倒れた正体不明の者の影が森に染み込んだ。循環は破られたのか？",
						"chinese": "倒下的无名者的影子渗入了森林。循环被打破了吗？",
						"french": "L'ombre de l'entité inconnue tombée s'est infiltrée dans la forêt. Le cycle était-il brisé ?",
						"spanish": "La sombra del ente desconocido caído se filtró en el bosque. ¿Se rompió el ciclo?",
						"vietnamese": "Bóng đen của kẻ vô danh đã ngã xuống thấm vào khu rừng. Vòng lặp đã bị phá vỡ ư?",
						"thai": "เงาของผู้ล้มลงนิรนามซึมซาบเข้าสู่ป่า วัฏจักรถูกทำลายแล้วหรือ?",
						"hindi": "गिरे हुए अज्ञात जीव की छाया जंगल में समा गई। क्या चक्र टूट गया था?"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하지만 숲의 심장부에서, 또 다른 왜곡된 속삭임이 들려왔다.",
						"english": "But from the heart of the forest, another distorted whisper emerged.",
						"japanese": "しかし森の心臓部から、別の歪んだ囁きが聞こえてきた。",
						"chinese": "但从森林的深处，又传来了一阵扭曲的低语。",
						"french": "Mais du cœur de la forêt, un autre murmure déformé s'éleva.",
						"spanish": "Pero desde el corazón del bosque, otro susurro distorsionado se escuchó.",
						"vietnamese": "Nhưng từ trung tâm khu rừng, một tiếng thì thầm méo mó khác vang lên.",
						"thai": "แต่จากใจกลางป่า เสียงกระซิบที่บิดเบือนอีกเสียงก็ดังขึ้น",
						"hindi": "लेकिन जंगल के हृदय से, एक और विकृत फुसफुसाहट सुनाई दी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"악몽은 반복된다. 끊임없이, 잔혹하게.",
			"길이라 믿었던 모든 것이 함정이었다.",
			"숲은 우리를 조롱하고, 우리는 광기에 물들어갔다.",
			"이제, 이 파멸의 순환을 깨야 한다. 어떤 대가를 치르더라도."
		],
		"english": [
			"The nightmare repeats. Endlessly, cruelly.",
			"Everything I believed to be a path was a trap.",
			"The forest mocked us, and we succumbed to madness.",
			"Now, this cycle of ruin must be broken. At any cost."
		],
		"japanese": [
			"悪夢は繰り返される。絶え間なく、残酷に。",
			"道だと信じていたすべてが罠だった。",
			"森は我々を嘲笑い、我々は狂気に染まっていった。",
			"今、この破滅の循環を断ち切らねばならない。どんな犠牲を払ってでも。"
		],
		"chinese": [
			"噩梦重演。无休止，又残酷。",
			"曾以为是路的，皆是陷阱。",
			"森林嘲弄着我们，我们逐渐陷入疯狂。",
			"如今，必须打破这毁灭的循环。不惜一切代价。"
		],
		"french": [
			"Le cauchemar se répète. Sans fin, cruellement.",
			"Tout ce que je croyais être un chemin était un piège.",
			"La forêt nous raillait, et nous sombraient dans la folie.",
			"Maintenant, ce cycle de ruine doit être brisé. À tout prix."
		],
		"spanish": [
			"La pesadilla se repite. Sin fin, cruelmente.",
			"Todo lo que creí un camino era una trampa.",
			"El bosque se burlaba de nosotros, y nos sumimos en la locura.",
			"Ahora, este ciclo de ruina debe romperse. A cualquier costo."
		],
		"vietnamese": [
			"Ác mộng lặp lại. Không ngừng, tàn khốc.",
			"Mọi thứ ta tin là lối đi, đều là bẫy.",
			"Rừng chế nhạo chúng ta, và chúng ta chìm dần vào điên loạn.",
			"Giờ đây, vòng lặp hủy diệt này phải bị phá vỡ. Bất kể giá nào."
		],
		"thai": [
			"ฝันร้ายวนเวียน. ไม่หยุดหย่อน, โหดร้าย.",
			"ทุกสิ่งที่เชื่อว่าเป็นทางคือกับดัก.",
			"ป่าเย้ยหยันเรา และเราก็ตกอยู่ในความบ้าคลั่ง.",
			"บัดนี้ วงจรแห่งความพินาศนี้ต้องถูกทำลาย. ไม่ว่าจะต้องแลกด้วยอะไรก็ตาม."
		],
		"hindi": [
			"दुःस्वप्न दोहराता है। लगातार, क्रूरता से।",
			"जिसे रास्ता समझा, वह सब जाल था।",
			"जंगल ने हमें उपहास किया, और हम पागलपन में डूब गए।",
			"अब, विनाश के इस चक्र को तोड़ना होगा। चाहे कुछ भी कीमत चुकानी पड़े।"
		]
	}
} as const;
