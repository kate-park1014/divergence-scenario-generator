export const scenario_snowy_hildr_66_04 = {
	"scenario_id": "snowy_hildr_66_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 눈보라 속, 가장 오래된 빙하 동굴이 모습을 드러냈다.",
						"english": "Amidst an endless blizzard, the oldest glacial cave revealed itself.",
						"japanese": "終わりなき吹雪の中、最も古き氷河の洞窟がその姿を現した。",
						"chinese": "在无尽的暴风雪中，最古老的冰川洞穴显露了真容。",
						"french": "Au milieu d'un blizzard sans fin, la plus ancienne grotte glaciaire s'est révélée.",
						"spanish": "En medio de una tormenta de nieve interminable, la cueva glacial más antigua se reveló.",
						"vietnamese": "Giữa cơn bão tuyết vô tận, hang động băng cổ xưa nhất đã lộ diện.",
						"thai": "ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด ถ้ำธารน้ำแข็งที่เก่าแก่ที่สุดก็ปรากฏตัวขึ้น",
						"hindi": "अंतहीन बर्फीले तूफान के बीच, सबसे पुरानी हिमनदी गुफा सामने आई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 설원의 비밀을 아는 자가 있다는 곳인가?",
						"english": "Is this... the place where one who knows the secrets of the snowy plains resides?",
						"japanese": "ここが… 雪原の秘密を知る者がいるという場所なのか？",
						"chinese": "这里是……那个知晓雪原秘密的人所在的地方吗？",
						"french": "Est-ce ici... que réside celui qui connaît les secrets des plaines enneigées ?",
						"spanish": "¿Es este... el lugar donde reside quien conoce los secretos de las llanuras nevadas?",
						"vietnamese": "Đây có phải là... nơi người biết bí mật của vùng tuyết hoang cư ngụ không?",
						"thai": "ที่นี่...คือที่ที่ผู้รู้ความลับแห่งทุ่งหิมะอยู่หรือ?",
						"hindi": "क्या यह... वह जगह है जहाँ बर्फीले मैदानों के रहस्य जानने वाला रहता है?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "…또 다른 길 잃은 자들이군.",
						"english": "...More lost souls, then.",
						"japanese": "…また迷い人たちか。",
						"chinese": "……又是些迷途者。",
						"french": "...Encore d'autres âmes égarées.",
						"spanish": "...Otros perdidos, entonces.",
						"vietnamese": "...Lại là những kẻ lạc lối khác.",
						"thai": "...พวกหลงทางอีกแล้วสินะ",
						"hindi": "...फिर से भटकने वाले।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신이… 이바르인가요?",
						"english": "Are you... Ivar?",
						"japanese": "あなたが… イヴァールですか？",
						"chinese": "您是……伊瓦尔吗？",
						"french": "Êtes-vous... Ivar ?",
						"spanish": "¿Es usted... Ivar?",
						"vietnamese": "Ông... là Ivar sao?",
						"thai": "ท่าน...คืออีวาร์หรือ?",
						"hindi": "क्या आप... इवार हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "한때 나도 빛을 쫓았지. 강함의 끝을 보려 했다.",
						"english": "I, too, once chased the light. Sought to see the limits of strength.",
						"japanese": "かつて私も光を追い求めた。強さの果てを見ようとしたのだ。",
						"chinese": "我也曾追逐光芒。试图看到力量的尽头。",
						"french": "Moi aussi, j'ai jadis poursuivi la lumière. J'ai cherché à voir les limites de la force.",
						"spanish": "Yo también, una vez, perseguí la luz. Busqué ver los límites de la fuerza.",
						"vietnamese": "Ta cũng từng theo đuổi ánh sáng. Từng tìm cách chạm đến tận cùng của sức mạnh.",
						"thai": "ครั้งหนึ่งข้าก็เคยไล่ตามแสงสว่าง พยายามจะเห็นขีดสุดของพละกำลัง",
						"hindi": "मैंने भी एक बार प्रकाश का पीछा किया था। ताकत की हद देखना चाहता था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 끝엔… 아무것도 없었다.",
						"english": "But at its end… there was nothing.",
						"japanese": "しかしその先には…何もなく。",
						"chinese": "但其尽头…空无一物。",
						"french": "Mais au bout… il n'y avait rien.",
						"spanish": "Pero al final… no había nada.",
						"vietnamese": "Nhưng ở cuối… không có gì cả.",
						"thai": "แต่ที่ปลายทาง… ไม่มีอะไรเลย",
						"hindi": "पर अंत में… कुछ भी नहीं था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "허무라니… 무슨 말이죠?",
						"english": "Meaningless… What do you mean?",
						"japanese": "虚無…どういうことですか？",
						"chinese": "虚无…这是什么意思？",
						"french": "Le néant… Que voulez-vous dire ?",
						"spanish": "Vacío… ¿Qué quiere decir?",
						"vietnamese": "Vô nghĩa… Ý anh là sao?",
						"thai": "ไร้ความหมาย… คุณหมายถึงอะไร?",
						"hindi": "व्यर्थता… आपका क्या मतलब है?"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "희미한 북극광은 인도자가 아니다.",
						"english": "The faint aurora is not a guide.",
						"japanese": "かすかなオーロラは導き手ではない。",
						"chinese": "微弱的极光并非引路者。",
						"french": "La faible aurore n'est pas un guide.",
						"spanish": "La débil aurora no es una guía.",
						"vietnamese": "Cực quang mờ nhạt không phải là người dẫn lối.",
						"thai": "แสงเหนือที่ริบหรี่ไม่ใช่ผู้นำทาง",
						"hindi": "मंद उत्तरी ध्रुवीय ज्योति मार्गदर्शक नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그것은 차가운 냉기를 품고 너희의 존재를 깎아내릴 뿐.",
						"english": "It merely embraces cold and erodes your existence.",
						"japanese": "それは冷気を宿し、ただお前たちの存在を削るだけ。",
						"chinese": "它只承载寒冷，侵蚀你们的存在。",
						"french": "Elle ne fait qu'embrasser le froid et éroder votre existence.",
						"spanish": "Solo abraza el frío y erosiona vuestra existencia.",
						"vietnamese": "Nó chỉ ôm ấp sự lạnh giá và bào mòn sự tồn tại của các ngươi.",
						"thai": "มันเพียงแค่อมความหนาวเย็นและกัดกร่อนการมีอยู่ของพวกเจ้า",
						"hindi": "यह बस ठंडक को समेटे हुए है और तुम्हारे अस्तित्व को मिटाता है।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 우리를 속이고 있다는 건가요?",
						"english": "Is the light… deceiving us?",
						"japanese": "光が…私たちを欺いているのですか？",
						"chinese": "光…在欺骗我们吗？",
						"french": "La lumière… nous trompe-t-elle ?",
						"spanish": "¿La luz… nos está engañando?",
						"vietnamese": "Ánh sáng… đang lừa dối chúng ta sao?",
						"thai": "แสงสว่าง… กำลังหลอกลวงพวกเราอยู่หรือ?",
						"hindi": "क्या प्रकाश… हमें धोखा दे रहा है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 모든 길은 순환될 뿐. 탈출구는 없다.",
						"english": "All paths here merely cycle. There is no escape.",
						"japanese": "ここの道は全て循環するだけ。脱出口はない。",
						"chinese": "此处所有路径皆循环往复。没有出口。",
						"french": "Tous les chemins ici ne font que boucler. Il n'y a pas d'échappatoire.",
						"spanish": "Todos los caminos aquí solo se repiten. No hay salida.",
						"vietnamese": "Mọi con đường ở đây chỉ là một vòng lặp. Không có lối thoát.",
						"thai": "ทุกเส้นทางที่นี่ล้วนวนเป็นวงกลม ไม่มีทางหนี",
						"hindi": "यहाँ के सभी मार्ग बस घूमते रहते हैं। कोई पलायन नहीं है।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그럼 우린… 영원히 갇히는 건가요?",
						"english": "So we're… trapped forever?",
						"japanese": "では私たちは…永遠に閉じ込められるのですか？",
						"chinese": "那我们…会被永远困住吗？",
						"french": "Alors nous sommes… piégés pour toujours ?",
						"spanish": "¿Entonces estamos… atrapados para siempre?",
						"vietnamese": "Vậy chúng ta… sẽ bị mắc kẹt mãi mãi sao?",
						"thai": "ถ้าอย่างนั้นพวกเรา… จะถูกขังตลอดไปเลยหรือ?",
						"hindi": "तो क्या हम… हमेशा के लिए फंस गए हैं?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 탐색은 무의미하다.",
						"english": "Your search is meaningless.",
						"japanese": "お前たちの探索は無意味だ。",
						"chinese": "你们的探索毫无意义。",
						"french": "Votre quête est vaine.",
						"spanish": "Vuestra búsqueda es inútil.",
						"vietnamese": "Sự tìm kiếm của các ngươi là vô nghĩa.",
						"thai": "การค้นหาของพวกเจ้าไร้ความหมาย",
						"hindi": "तुम्हारी खोज व्यर्थ है।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무리 나아가도 결국 같은 자리로 돌아올 뿐.",
						"english": "No matter how far you go, you'll always return to the same place.",
						"japanese": "どれだけ進んでも、結局同じ場所に戻るだけ。",
						"chinese": "无论走多远，最终只会回到原点。",
						"french": "Peu importe où vous allez, vous reviendrez toujours au même endroit.",
						"spanish": "Por mucho que avancéis, siempre volveréis al mismo lugar.",
						"vietnamese": "Dù có đi bao xa, cuối cùng các ngươi cũng sẽ trở lại cùng một chỗ.",
						"thai": "ไม่ว่าเจ้าจะไปไกลแค่ไหน สุดท้ายก็จะกลับมาที่เดิม",
						"hindi": "तुम कितना भी आगे बढ़ो, अंत में उसी जगह वापस आओगे।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 그럴 리 없어!",
						"english": "No… That can't be!",
						"japanese": "違う…そんなはずはない！",
						"chinese": "不…不可能！",
						"french": "Non… Ce n'est pas possible !",
						"spanish": "¡No… Eso no puede ser!",
						"vietnamese": "Không… Không thể nào!",
						"thai": "ไม่… เป็นไปไม่ได้!",
						"hindi": "नहीं… ऐसा नहीं हो सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "자존심 강한 자들이여. 너희의 '강함'도 여기서 끝날 뿐.",
						"english": "Proud ones. Your 'strength' ends here.",
						"japanese": "誇り高き者たちよ。お前たちの『強さ』もここで終わりだ。",
						"chinese": "自豪者们。你们的“强大”也将止步于此。",
						"french": "Fiers. Votre 'force' s'arrête ici.",
						"spanish": "Orgullosos. Vuestra 'fuerza' termina aquí.",
						"vietnamese": "Hỡi những kẻ kiêu hãnh. 'Sức mạnh' của các ngươi cũng chỉ đến đây mà thôi.",
						"thai": "ผู้หยิ่งผยองเอ๋ย 'ความแข็งแกร่ง' ของเจ้าก็จบลงแค่นี้แหละ",
						"hindi": "गर्व करने वालों। तुम्हारी 'ताकत' यहीं खत्म होती है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 포기하지 않아! 진실을 찾을 거야!",
						"english": "We won't give up! We'll find the truth!",
						"japanese": "我々は諦めない！真実を見つけ出す！",
						"chinese": "我们不会放弃！我们会找到真相！",
						"french": "Nous n'abandonnerons pas ! Nous trouverons la vérité !",
						"spanish": "¡No nos rendiremos! ¡Encontraremos la verdad!",
						"vietnamese": "Chúng tôi sẽ không bỏ cuộc! Chúng tôi sẽ tìm ra sự thật!",
						"thai": "เราจะไม่ยอมแพ้! เราจะค้นพบความจริง!",
						"hindi": "हम हार नहीं मानेंगे! हम सच खोज निकालेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시한 카운트다운은 멈추지 않는다.",
						"english": "The time countdown doesn't stop.",
						"japanese": "時限カウントダウンは止まらない。",
						"chinese": "时限倒计时不会停止。",
						"french": "Le compte à rebours ne s'arrête pas.",
						"spanish": "La cuenta regresiva no se detiene.",
						"vietnamese": "Đồng hồ đếm ngược không ngừng lại.",
						"thai": "การนับถอยหลังไม่หยุดลง",
						"hindi": "समय की उलटी गिनती नहीं रुकती।"
					}
				},
				{
					"content": {
						"korean": "너희 내면의 갈등이 곧 너희를 집어삼킬 것이다.",
						"english": "Your inner conflicts will soon consume you.",
						"japanese": "お前たちの内なる葛藤が、いずれお前たちを飲み込むだろう。",
						"chinese": "你们内心的冲突很快就会吞噬你们。",
						"french": "Vos conflits intérieurs vous consumeront bientôt.",
						"spanish": "Vuestros conflictos internos pronto os consumirán.",
						"vietnamese": "Những mâu thuẫn nội tâm của các ngươi sẽ sớm nuốt chửng các ngươi.",
						"thai": "ความขัดแย้งภายในของเจ้าจะกลืนกินเจ้าในไม่ช้า",
						"hindi": "तुम्हारे अंदरूनी संघर्ष तुम्हें जल्द ही निगल जाएंगे।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 하지 마! 길은 있어!",
						"english": "Don't talk nonsense! There is a way!",
						"japanese": "でたらめを言うな！道はある！",
						"chinese": "别胡说！有办法的！",
						"french": "Ne dis pas de bêtises ! Il y a un chemin !",
						"spanish": "¡No digas tonterías! ¡Hay un camino!",
						"vietnamese": "Đừng nói nhảm! Có một con đường!",
						"thai": "อย่าพูดเหลวไหล! มีทางออก!",
						"hindi": "बकवास मत करो! रास्ता है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "길을 잃은 자만이 그렇게 외치지.",
						"english": "Only those who are lost cry out like that.",
						"japanese": "道を失った者だけがそう叫ぶ。",
						"chinese": "只有迷失的人才会那样叫喊。",
						"french": "Seuls les égarés crient ainsi.",
						"spanish": "Solo los que están perdidos gritan así.",
						"vietnamese": "Chỉ những kẻ lạc lối mới gào thét như vậy.",
						"thai": "มีเพียงผู้ที่หลงทางเท่านั้นที่ตะโกนเช่นนั้น",
						"hindi": "केवल वही ऐसे चिल्लाते हैं जो रास्ता भटक गए हों।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실은 차갑고, 너희를 허무로 이끌 것이다.",
						"english": "The truth is cold, and will lead you to nihility.",
						"japanese": "真実は冷たく、お前たちを虚無へと導くだろう。",
						"chinese": "真相是冰冷的，会将你们引向虚无。",
						"french": "La vérité est froide et vous mènera au néant.",
						"spanish": "La verdad es fría y os llevará a la nada.",
						"vietnamese": "Sự thật lạnh lùng, và sẽ dẫn các ngươi đến hư vô.",
						"thai": "ความจริงนั้นเย็นชา และจะนำเจ้าไปสู่ความว่างเปล่า",
						"hindi": "सच ठंडा है, और तुम्हें शून्यता की ओर ले जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하 동굴의 가장 깊은 곳. 거대한 그림자가 그들을 기다리고 있었다.",
						"english": "The deepest part of the glacial cave. A colossal shadow awaited them.",
						"japanese": "氷河洞窟の最深部。巨大な影が彼らを待ち受けていた。",
						"chinese": "冰川洞穴的最深处。一个巨大的身影在那里等着他们。",
						"french": "La partie la plus profonde de la grotte glaciaire. Une ombre colossale les attendait.",
						"spanish": "La parte más profunda de la cueva glacial. Una sombra colosal les esperaba.",
						"vietnamese": "Sâu nhất trong hang băng. Một cái bóng khổng lồ đang chờ đợi họ.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำน้ำแข็ง เงาขนาดมหึมารอคอยพวกเขาอยู่",
						"hindi": "ग्लेशियल गुफा का सबसे गहरा हिस्सा। एक विशाल परछाई उनका इंतजार कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "왔구나. 이 끝없는 굶주림의 근원에게.",
						"english": "You've come. To the source of this endless hunger.",
						"japanese": "来たか。この終わらぬ飢えの根源へ。",
						"chinese": "你们来了。来到这无尽饥饿的源头。",
						"french": "Vous êtes venus. À la source de cette faim éternelle.",
						"spanish": "Habéis venido. A la fuente de esta hambre interminable.",
						"vietnamese": "Ngươi đã đến. Đến nguồn gốc của cơn đói vô tận này.",
						"thai": "เจ้ามาแล้วสินะ สู่ต้นกำเนิดของความหิวโหยไม่สิ้นสุดนี้",
						"hindi": "तुम आ गए। इस अंतहीन भूख के स्रोत के पास।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "하지만 너희도 결국 저자와 다르지 않아. 허무를 쫓을 뿐.",
						"english": "But in the end, you are no different from them. Only chasing nihility.",
						"japanese": "だが、お前たちも結局彼らと変わらない。虚無を追うだけだ。",
						"chinese": "但你们终究和他们没什么不同。只是追逐虚无罢了。",
						"french": "Mais au final, vous n'êtes pas différents d'eux. Vous ne faites que courir après le néant.",
						"spanish": "Pero al final, no sois diferentes a ellos. Solo persiguen la nada.",
						"vietnamese": "Nhưng cuối cùng, các ngươi cũng không khác gì họ. Chỉ đuổi theo hư vô mà thôi.",
						"thai": "แต่สุดท้ายแล้ว เจ้าก็ไม่ต่างจากพวกเขา เพียงแค่ไล่ตามความว่างเปล่า",
						"hindi": "लेकिन अंत में, तुम उनसे अलग नहीं हो। केवल शून्यता का पीछा कर रहे हो।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "방랑자 이바르의 말이 맞다.",
						"english": "Wanderer Ivar is right.",
						"japanese": "流浪者イヴァールの言う通りだ。",
						"chinese": "流浪者伊瓦尔说得没错。",
						"french": "Le vagabond Ivar a raison.",
						"spanish": "El vagabundo Ivar tiene razón.",
						"vietnamese": "Kẻ lang thang Ivar nói đúng.",
						"thai": "คำพูดของอิหฺวาร์ผู้พเนจรถูกต้อง",
						"hindi": "खानाबदोश इवार सही कहता है।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "빛은 너희를 인도하지 않는다. 오직 파멸만이.",
						"english": "Light will not guide you. Only ruin.",
						"japanese": "光はお前たちを導かない。ただ破滅のみが。",
						"chinese": "光不会指引你们。只有毁灭。",
						"french": "La lumière ne vous guidera pas. Seule la ruine.",
						"spanish": "La luz no os guiará. Solo la ruina.",
						"vietnamese": "Ánh sáng sẽ không dẫn lối các ngươi. Chỉ có sự hủy diệt.",
						"thai": "แสงสว่างจะไม่นำทางพวกเจ้า มีแต่ความพินาศเท่านั้น",
						"hindi": "प्रकाश तुम्हें राह नहीं दिखाएगा। केवल विनाश।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 우리는 여기서 끝내지 않아!",
						"english": "Shut up! We won't end it here!",
						"japanese": "黙れ！私たちはここで終わらない！",
						"chinese": "闭嘴！我们不会止步于此！",
						"french": "Tais-toi ! Nous n'en finirons pas ici !",
						"spanish": "¡Cállate! ¡No terminaremos aquí!",
						"vietnamese": "Im đi! Chúng ta sẽ không kết thúc ở đây!",
						"thai": "หุบปาก! เราจะไม่จบลงตรงนี้!",
						"hindi": "चुप रहो! हम यहाँ खत्म नहीं होंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 어리석음을, 내 힘으로 깨부숴주마.",
						"english": "I'll shatter that foolishness with my might.",
						"japanese": "その愚かさ、我が力で打ち砕いてやろう。",
						"chinese": "我将用我的力量粉碎这份愚蠢。",
						"french": "Je briserai votre folie par ma puissance.",
						"spanish": "Romperé esa estupidez con mi poder.",
						"vietnamese": "Ta sẽ nghiền nát sự ngu xuẩn đó bằng sức mạnh của ta.",
						"thai": "ความโง่เขลานั้น ข้าจะบดขยี้ด้วยพลังของข้า",
						"hindi": "उस मूर्खता को, मैं अपनी शक्ति से कुचल दूँगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "끝장을 보자!",
						"english": "Let's finish this!",
						"japanese": "決着をつけよう！",
						"chinese": "了结一切！",
						"french": "Finissons-en !",
						"spanish": "¡Acabemos con esto!",
						"vietnamese": "Kết thúc thôi!",
						"thai": "มาจบเรื่องนี้กัน!",
						"hindi": "इसका अंत करते हैं!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "압도적인 힘에 의해 탐험대는 무릎을 꿇었다.",
						"english": "Overwhelmed by power, the expedition fell to its knees.",
						"japanese": "圧倒的な力の前に、探検隊は膝を屈した。",
						"chinese": "在压倒性的力量面前，探险队跪下了。",
						"french": "Submergée par une force écrasante, l'expédition s'agenouilla.",
						"spanish": "Abrumada por un poder abrumador, la expedición cayó de rodillas.",
						"vietnamese": "Trước sức mạnh áp đảo, đoàn thám hiểm đã quỳ gối.",
						"thai": "ด้วยพลังอันท่วมท้น คณะสำรวจได้คุกเข่าลง.",
						"hindi": "圧倒的な शक्ति के आगे, अभियान दल घुटनों पर आ गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이로군. 너희의 '강함'은 여기서 끝이다.",
						"english": "A futile resistance. Your \"strength\" ends here.",
						"japanese": "くだらぬ抵抗だ。「強さ」はここまでだ。",
						"chinese": "微不足道的抵抗。你们的“强大”到此为止了。",
						"french": "Une résistance futile. Votre « force » s'arrête ici.",
						"spanish": "Una resistencia inútil. Vuestra \"fuerza\" termina aquí.",
						"vietnamese": "Một sự kháng cự vô ích. \"Sức mạnh\" của các ngươi kết thúc tại đây.",
						"thai": "การต่อต้านที่ไร้ค่า \"ความแข็งแกร่ง\" ของพวกเจ้าจบลงแล้วที่นี่.",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारी 'ताकत' यहीं खत्म होती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over... yet!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas encore... fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc...!",
						"thai": "ยัง…ไม่จบ…!",
						"hindi": "अभी… खत्म नहीं हुआ…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국 이 길의 끝은, 처음부터 정해져 있었다.",
						"english": "This path's end was predetermined from the start.",
						"japanese": "結局、この道の終わりは、最初から決まっていたのだ。",
						"chinese": "最终，这条路的尽头，从一开始就被注定了。",
						"french": "Au final, la fin de ce chemin était prédestinée depuis le début.",
						"spanish": "Al final, el fin de este camino estaba predestinado desde el principio.",
						"vietnamese": "Cuối cùng, kết cục của con đường này đã được định sẵn từ đầu.",
						"thai": "ในที่สุด จุดจบของเส้นทางนี้ ก็ถูกกำหนดไว้ตั้งแต่แรกแล้ว.",
						"hindi": "अंततः, इस पथ का अंत, शुरू से ही तय था।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "너희는 그저, 허무의 증인일 뿐.",
						"english": "You are merely witnesses to the void.",
						"japanese": "お前たちはただ、虚無の証人に過ぎない。",
						"chinese": "你们不过是虚无的见证者罢了。",
						"french": "Vous n'êtes que les témoins du néant.",
						"spanish": "Sois meros testigos del vacío.",
						"vietnamese": "Các ngươi chỉ là những chứng nhân của hư vô.",
						"thai": "พวกเจ้าเป็นเพียงพยานแห่งความว่างเปล่าเท่านั้น.",
						"hindi": "तुम बस, शून्यता के साक्षी मात्र हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "절망 속에서… 다시 기어올라 와라.",
						"english": "From despair... crawl back up again.",
						"japanese": "絶望の淵から…再び這い上がってこい。",
						"chinese": "从绝望中…再次爬起来吧。",
						"french": "Dans le désespoir... remontez à la surface.",
						"spanish": "¡Desde la desesperación... volved a arrastraros!",
						"vietnamese": "Từ trong tuyệt vọng... hãy bò lên một lần nữa.",
						"thai": "จากความสิ้นหวัง… จงคลานกลับขึ้นมาอีกครั้ง.",
						"hindi": "निराशा से… फिर से ऊपर उठो।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 승리감은 희미했다.",
						"english": "The mysterious boss fell. But the taste of victory was hollow.",
						"japanese": "正体不明のボスは倒れた。しかし、勝利感は薄かった。",
						"chinese": "不明身份的首领倒下了。然而胜利的喜悦却很微弱。",
						"french": "Le boss inconnu est tombé. Mais le sentiment de victoire était faible.",
						"spanish": "El jefe desconocido cayó. Pero la sensación de victoria era tenue.",
						"vietnamese": "Con trùm bí ẩn đã gục ngã. Tuy nhiên, cảm giác chiến thắng thật mờ nhạt.",
						"thai": "บอสปริศนาล้มลงแล้ว แต่ความรู้สึกแห่งชัยชนะนั้นเลือนราง",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, जीत का एहसास धुंधला था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은… 필멸자들….",
						"english": "...Foolish... mortals...",
						"japanese": "…愚かな… 儚き者どもめ…。",
						"chinese": "……愚蠢的……凡人……",
						"french": "...Stupides... mortels...",
						"spanish": "...Necios... mortales...",
						"vietnamese": "...Lũ phàm trần... ngu xuẩn...",
						"thai": "...มนุษย์...ผู้โง่เขลา...",
						"hindi": "...मूर्ख... नश्वर प्राणी..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너희가 찾은 것은… 아무것도 아니다….",
						"english": "You found... nothing...",
						"japanese": "お前たちが求めたものなど… 何もない…。",
						"chinese": "你们所找到的……什么都不是……",
						"french": "Ce que vous avez trouvé... n'est rien...",
						"spanish": "Lo que habéis encontrado... no es nada...",
						"vietnamese": "Thứ các ngươi tìm thấy... không là gì cả...",
						"thai": "สิ่งที่พวกเจ้าค้นพบ... ไม่มีอะไรเลย...",
						"hindi": "तुमने जो पाया है... वह कुछ भी नहीं है..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…!",
						"english": "...",
						"japanese": "…！",
						"chinese": "…！",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "보아라. 너희의 강함도 결국, 또 다른 순환의 시작일 뿐.",
						"english": "See. Your strength, in the end, is just the beginning of another cycle.",
						"japanese": "見よ。お前たちの強さも結局、新たな循環の始まりに過ぎない。",
						"chinese": "看吧。你们的力量，最终也不过是另一个循环的开始。",
						"french": "Voyez. Votre force n'est, au final, que le début d'un autre cycle.",
						"spanish": "Ved. Vuestra fuerza, al final, no es más que el principio de otro ciclo.",
						"vietnamese": "Hãy nhìn xem. Sức mạnh của các ngươi, cuối cùng cũng chỉ là khởi đầu của một vòng tuần hoàn khác.",
						"thai": "จงดูเถิด ความแข็งแกร่งของเจ้าก็เป็นเพียงจุดเริ่มต้นของวัฏจักรอื่นเท่านั้น",
						"hindi": "देखो। तुम्हारी शक्ति भी अंततः, एक और चक्र की शुरुआत मात्र है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이바르의 공허한 눈빛처럼, 북극광은 여전히 무심하게 빛나고 있었다. 진정한 길은 아직 멀었다.",
						"english": "Like Ivar's hollow gaze, the aurora still shone indifferently. The true path remains distant.",
						"japanese": "イヴァールの虚ろな眼差しのように、オーロラは無関心に輝き続けていた。真の道はまだ遠い。",
						"chinese": "就像伊瓦尔空洞的眼神一样，北极光依然漠然地闪耀着。真正的道路依然遥远。",
						"french": "Comme le regard vide d'Ivar, l'aurore boréale brillait toujours avec indifférence. Le vrai chemin est encore lointain.",
						"spanish": "Como la mirada hueca de Ivar, la aurora boreal seguía brillando con indiferencia. El verdadero camino aún está lejos.",
						"vietnamese": "Như ánh mắt trống rỗng của Ivar, bắc cực quang vẫn vô cảm rực sáng. Con đường thật sự vẫn còn xa.",
						"thai": "ดุจเดียวกับแววตาอันว่างเปล่าของอีวาร์ แสงเหนือยังคงส่องประกายอย่างไม่แยแส หนทางที่แท้จริงยังอีกยาวไกล.",
						"hindi": "इवार की खोखली नज़र की तरह, अरोरा अभी भी उदासीनता से चमक रहा था। सच्चा रास्ता अभी बहुत दूर है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"가장 깊은 빙하 동굴. 시간마저 얼어붙은 그곳.",
			"우리는 북극광의 끝을 보았다는 방랑자, 이바르를 만났다.",
			"그는 공허한 눈빛으로 경고했다. 희미한 빛은 차가운 냉기를 품고 있다고.",
			"모든 길은 순환될 뿐, 탈출구는 없다고.",
			"우리의 마음속 시한 카운트다운은 더욱 거세졌다."
		],
		"english": [
			"The deepest glacial cave. A place where even time freezes.",
			"We met Ivar, a wanderer who claimed to have seen the end of the aurora borealis.",
			"With empty eyes, he warned us. Faint light holds a cold chill.",
			"All paths merely cycle; there is no escape.",
			"The ticking countdown in our hearts grew fiercer."
		],
		"japanese": [
			"最も深き氷河の洞窟。時間さえも凍り付くその場所。",
			"我々は、オーロラの果てを見たという放浪者、イヴァールに出会った。",
			"彼は虚ろな瞳で警告した。かすかな光は冷たい冷気を宿していると。",
			"全ての道はただ循環するだけで、逃げ道はないと。",
			"我々の心に刻まれたタイムリミットのカウントダウンは、さらに激しさを増した。"
		],
		"chinese": [
			"最深的冰川洞穴。时间也冻结在那里。",
			"我们遇到了游侠伊瓦尔，他声称曾见过北极光的尽头。",
			"他以空洞的眼神警告我们。微弱的光芒蕴藏着彻骨的寒意。",
			"所有的路都只是循环，没有出口。",
			"我们心中的倒计时变得更加猛烈。"
		],
		"french": [
			"La plus profonde des grottes glaciaires. Un lieu où même le temps est figé.",
			"Nous avons rencontré Ivar, un vagabond qui prétendait avoir vu la fin des aurores boréales.",
			"Les yeux vides, il nous a prévenus. La lumière pâle abrite un froid glacial.",
			"Tous les chemins ne sont qu'un cycle ; il n'y a pas d'échappatoire.",
			"Le compte à rebours dans nos cœurs s'est intensifié."
		],
		"spanish": [
			"La cueva glacial más profunda. Un lugar donde incluso el tiempo se congela.",
			"Conocimos a Ivar, un vagabundo que afirmaba haber visto el fin de la aurora boreal.",
			"Con ojos vacíos, nos advirtió. La luz tenue alberga un frío gélido.",
			"Todos los caminos solo son un ciclo; no hay escape.",
			"La cuenta atrás en nuestros corazones se intensificó."
		],
		"vietnamese": [
			"Hang động băng sâu nhất. Nơi mà thời gian cũng đóng băng.",
			"Chúng tôi đã gặp Ivar, một lữ khách nói rằng đã nhìn thấy tận cùng của cực quang.",
			"Với ánh mắt trống rỗng, anh ta cảnh báo. Ánh sáng mờ nhạt ẩn chứa sự lạnh lẽo.",
			"Mọi con đường chỉ là một vòng lặp, không có lối thoát.",
			"Đồng hồ đếm ngược trong lòng chúng tôi càng trở nên dữ dội."
		],
		"thai": [
			"ถ้ำธารน้ำแข็งที่ลึกที่สุด ที่ซึ่งแม้แต่เวลาก็หยุดนิ่ง",
			"เราได้พบกับอีวาร์ นักพเนจรผู้กล่าวอ้างว่าเคยเห็นจุดสิ้นสุดของแสงเหนือ",
			"ด้วยดวงตาที่ว่างเปล่า เขากล่าวเตือนว่า แสงที่ริบหรี่นั้นแฝงไว้ด้วยความหนาวเย็นยะเยือก",
			"ทุกเส้นทางล้วนเป็นเพียงวัฏจักร ไม่มีทางหนีรอด",
			"การนับถอยหลังในใจของเรายิ่งรุนแรงขึ้น"
		],
		"hindi": [
			"सबसे गहरी हिमनदी गुफा। एक ऐसी जगह जहाँ समय भी जम जाता है।",
			"हम इवार से मिले, एक भटकने वाला जिसने दावा किया था कि उसने उत्तरी ध्रुवीय ज्योति का अंत देखा है।",
			"उसने खाली आँखों से हमें चेतावनी दी। मंद प्रकाश में ठंडी ठंडक होती है।",
			"सभी रास्ते केवल घूमते रहते हैं; कोई रास्ता नहीं है।",
			"हमारे दिलों में समय की उलटी गिनती और तेज हो गई।"
		]
	}
} as const;
