export const scenario_snowy_cairn_98_01 = {
	"scenario_id": "snowy_cairn_98_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
						"korean": "황량한 설원 위, 기이한 돌무덤 '케언'이 솟아 있었다.",
						"english": "On the desolate snowfield, a peculiar stone cairn rose.",
						"japanese": "荒涼とした雪原に、奇妙な石塚「ケルン」がそびえ立っていた。",
						"chinese": "荒凉的雪原上，一座奇特的石冢“凯恩”耸立着。",
						"french": "Sur la toundra désolée, un curieux cairn de pierres s'élevait.",
						"spanish": "En el desolado campo de nieve, un peculiar mojón de piedra se alzaba.",
						"vietnamese": "Trên cánh đồng tuyết hoang vắng, một gò đá 'cairn' kỳ lạ sừng sững.",
						"thai": "บนทุ่งหิมะอันรกร้าง, มีกองหินประหลาดที่เรียกว่า 'เคิร์น' ตั้งตระหง่านอยู่.",
						"hindi": "वीरान बर्फीले मैदान पर, एक अजीबोगरीब पत्थर का ढेर 'केयर्न' खड़ा था।"
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
						"korean": "이게… 케언인가?",
						"english": "Is this... a cairn?",
						"japanese": "これが…ケルンか？",
						"chinese": "这是…凯恩吗？",
						"french": "C'est... un cairn ?",
						"spanish": "¿Esto es... un mojón?",
						"vietnamese": "Đây là... một cairn sao?",
						"thai": "นี่คือ... เคิร์นเหรอ?",
						"hindi": "क्या यह... एक केयर्न है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 잊힌 자들의 무덤이지.",
						"english": "Yes. A tomb of the forgotten.",
						"japanese": "ああ。忘れ去られた者たちの墓だ。",
						"chinese": "是的。是被遗忘者的坟墓。",
						"french": "Oui. Une tombe des oubliés.",
						"spanish": "Sí. Una tumba de los olvidados.",
						"vietnamese": "Phải. Một ngôi mộ của những người bị lãng quên.",
						"thai": "ใช่. สุสานของผู้ถูกลืม.",
						"hindi": "हाँ। भूले हुए लोगों की कब्र है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이곳에서… 섣부른 약속은 위험해.",
						"english": "Here... hasty promises are dangerous.",
						"japanese": "ここでは…軽はずみな約束は危険だ。",
						"chinese": "在这里…仓促的承诺很危险。",
						"french": "Ici... les promesses hâtives sont dangereuses.",
						"spanish": "Aquí... las promesas apresuradas son peligrosas.",
						"vietnamese": "Ở đây... những lời hứa vội vàng rất nguy hiểm.",
						"thai": "ที่นี่... คำสัญญาที่รีบร้อนเป็นอันตราย.",
						"hindi": "यहाँ... जल्दबाजी के वादे खतरनाक हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 조각을 봐. 맹세의 그림이야.",
						"english": "Look at this carving. It's a depiction of a vow.",
						"japanese": "この彫刻を見て。誓いの絵だ。",
						"chinese": "看这雕刻。是誓言的图案。",
						"french": "Regarde cette gravure. C'est une représentation d'un serment.",
						"spanish": "Mira esta talla. Es una representación de un juramento.",
						"vietnamese": "Nhìn khắc chạm này. Đó là hình ảnh của một lời thề.",
						"thai": "ดูงานแกะสลักนี่สิ. มันคือภาพของคำสาบาน.",
						"hindi": "इस नक्काशी को देखो। यह एक प्रतिज्ञा का चित्रण है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "손이… 얼음으로 변하고 있어.",
						"english": "My hands... are turning to ice.",
						"japanese": "手が…氷に変わっていく。",
						"chinese": "我的手…正在变成冰。",
						"french": "Mes mains... se transforment en glace.",
						"spanish": "Mis manos... se están convirtiendo en hielo.",
						"vietnamese": "Tay tôi... đang biến thành băng.",
						"thai": "มือของฉัน... กำลังกลายเป็นน้ำแข็ง",
						"hindi": "मेरे हाथ... बर्फ़ में बदल रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "옛 탐험가들의 노래 단편에 이런 구절이 있지. \"깨어진 맹세, 얼어붙은 손.\"",
						"english": "An old explorer's song fragment has a line: \"Broken vows, frozen hands.\"",
						"japanese": "古い探検家の歌の断片にこんな一節がある。「破られた誓い、凍てついた手。」",
						"chinese": "古老探险家的一段歌谣里有这么一句：“破碎的誓言，冰冷的手。”",
						"french": "Un fragment d'une vieille chanson d'explorateur dit : « Vœux brisés, mains gelées. »",
						"spanish": "Un fragmento de la canción de un viejo explorador dice: \"Promesas rotas, manos congeladas.\"",
						"vietnamese": "Một đoạn ca khúc của nhà thám hiểm xưa có câu: \"Lời thề tan vỡ, tay đóng băng.\"",
						"thai": "บทเพลงเก่าของนักสำรวจมีท่อนหนึ่งว่า \"คำสาบานที่แตกหัก มือที่แข็งเป็นน้ำแข็ง\"",
						"hindi": "पुराने खोजकर्ताओं के गीत के एक अंश में यह पंक्ति है: \"टूटे हुए वादे, जमे हुए हाथ।\""
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "함부로 약속하지 마. 죽음보다 고통스러운 대가를 치르게 될 수도 있어.",
						"english": "Don't make promises lightly. The price could be more painful than death.",
						"japanese": "安易に約束するな。死よりも苦しい代償を払うことになるかもしれない。",
						"chinese": "不要轻易许诺。你可能会付出比死亡更痛苦的代价。",
						"french": "Ne fais pas de promesses à la légère. Le prix à payer pourrait être plus douloureux que la mort.",
						"spanish": "No hagas promesas a la ligera. El precio podría ser más doloroso que la muerte.",
						"vietnamese": "Đừng hứa hẹn bừa bãi. Cái giá phải trả có thể đau đớn hơn cái chết.",
						"thai": "อย่าให้คำมั่นสัญญาอย่างไม่คิดหน้าคิดหลัง ราคาที่ต้องจ่ายอาจจะเจ็บปวดกว่าความตาย",
						"hindi": "हल्के में वादे मत करो। कीमत मौत से भी ज़्यादा दर्दनाक हो सकती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 땅은 모든 맹세를 기억해.",
						"english": "This land remembers all vows.",
						"japanese": "この地は全ての誓いを覚えている。",
						"chinese": "这片土地记得所有的誓言。",
						"french": "Cette terre se souvient de tous les serments.",
						"spanish": "Esta tierra recuerda todos los juramentos.",
						"vietnamese": "Mảnh đất này ghi nhớ mọi lời thề.",
						"thai": "ดินแดนแห่งนี้จดจำทุกคำสาบาน",
						"hindi": "यह धरती सभी वादों को याद रखती है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래서… 이 조각이 여기 있는 거구나. 경고하려고?",
						"english": "So... this fragment is here. To warn us?",
						"japanese": "ということは…この破片はここにある。警告するためか？",
						"chinese": "所以…这块碎片在这里。是为了警告吗？",
						"french": "Alors... ce fragment est là. Pour nous avertir ?",
						"spanish": "Entonces... este fragmento está aquí. ¿Para advertirnos?",
						"vietnamese": "Vậy là... mảnh vỡ này ở đây. Để cảnh báo chúng ta?",
						"thai": "งั้น... ชิ้นส่วนนี้ก็อยู่ที่นี่ เพื่อเตือนเราอย่างนั้นหรือ?",
						"hindi": "तो… यह टुकड़ा यहाँ है। चेतावनी देने के लिए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 자연의 분노를 부르지 말라고.",
						"english": "Yes. To not invoke nature's wrath.",
						"japanese": "そうだ。自然の怒りを呼び起こすなと。",
						"chinese": "是的。为了不引来自然的愤怒。",
						"french": "Oui. Pour ne pas provoquer la colère de la nature.",
						"spanish": "Sí. Para no invocar la ira de la naturaleza.",
						"vietnamese": "Đúng vậy. Để không gây ra cơn thịnh nộ của thiên nhiên.",
						"thai": "ใช่ เพื่อไม่ให้เรียกความพิโรธของธรรมชาติ",
						"hindi": "हाँ। प्रकृति के प्रकोप को न भड़काने के लिए।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 약속을 어기면… 어떻게 돼?",
						"english": "If we break our promises... what happens?",
						"japanese": "もし私たちが約束を破ったら…どうなる？",
						"chinese": "如果我们违背承诺…会怎么样？",
						"french": "Si nous brisons nos promesses... que se passe-t-il ?",
						"spanish": "Si rompemos nuestras promesas... ¿qué pasará?",
						"vietnamese": "Nếu chúng ta phá vỡ lời hứa... thì sao?",
						"thai": "ถ้าเราผิดคำสัญญา... จะเกิดอะไรขึ้น?",
						"hindi": "अगर हम अपने वादे तोड़ते हैं… तो क्या होगा?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…돌이킬 수 없는 형태로, 모든 것을 잃게 될 거야.",
						"english": "...You will lose everything, irreversibly.",
						"japanese": "…取り返しのつかない形で、全てを失うだろう。",
						"chinese": "…你将以不可逆转的方式，失去一切。",
						"french": "...Tu perdras tout, irréversiblement.",
						"spanish": "...Lo perderás todo, de forma irreversible.",
						"vietnamese": "...Ngươi sẽ mất tất cả, một cách không thể cứu vãn.",
						"thai": "...เธอจะสูญเสียทุกสิ่งไปอย่างไม่สามารถย้อนคืนได้",
						"hindi": "...तुम सब कुछ खो दोगे, अपरिवर्तनीय रूप से।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이 눈보라… 갈수록 심해져. 앞이 안 보여.",
						"english": "This blizzard... it's getting worse. I can't see ahead.",
						"japanese": "この吹雪…ますますひどくなる。前が見えない。",
						"chinese": "这场暴风雪…越来越猛烈了。我看不清前面。",
						"french": "Ce blizzard... il empire. Je ne vois rien devant moi.",
						"spanish": "Esta tormenta de nieve... está empeorando. No puedo ver nada.",
						"vietnamese": "Trận bão tuyết này... ngày càng tệ hơn. Tôi không thấy đường.",
						"thai": "พายุหิมะนี้... แย่ลงเรื่อยๆ มองไม่เห็นทางเลย",
						"hindi": "यह बर्फीला तूफ़ान… बदतर होता जा रहा है। मुझे आगे कुछ नहीं दिख रहा।"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어. 우리는 너무 깊이 들어왔어.",
						"english": "We can't stop. We've come too deep.",
						"japanese": "止まれない。もう深すぎる。",
						"chinese": "无法停下。我们已经深入太多了。",
						"french": "On ne peut pas s'arrêter. Nous sommes allés trop loin.",
						"spanish": "No podemos parar. Hemos llegado demasiado lejos.",
						"vietnamese": "Không thể dừng lại. Chúng ta đã đi quá sâu rồi.",
						"thai": "หยุดไม่ได้แล้ว เราเข้ามาลึกเกินไปแล้ว",
						"hindi": "हम रुक नहीं सकते। हम बहुत गहरे आ गए हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "돌아가기엔… 이미 늦었어.",
						"english": "It's… too late to turn back.",
						"japanese": "もう… 引き返せない。",
						"chinese": "已经… 来不及回头了。",
						"french": "Il est… déjà trop tard pour reculer.",
						"spanish": "Ya es… demasiado tarde para volver.",
						"vietnamese": "Đã… quá muộn để quay lại.",
						"thai": "มัน… สายเกินไปที่จะกลับตัวแล้ว",
						"hindi": "वापस जाने के लिए… बहुत देर हो चुकी है।"
					}
				},
				{
					"content": {
						"korean": "그럼… 전진할 수밖에 없어.",
						"english": "Then… we have no choice but to push forward.",
						"japanese": "ならば… 進むしかない。",
						"chinese": "那么… 只能前进。",
						"french": "Alors… nous n'avons pas d'autre choix que d'avancer.",
						"spanish": "Entonces… no nos queda más que avanzar.",
						"vietnamese": "Vậy thì… chỉ còn cách tiến lên.",
						"thai": "ถ้าอย่างนั้น… ก็ต้องเดินหน้าต่อไป",
						"hindi": "तो… हमें आगे बढ़ना ही होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout dévoré.",
						"spanish": "Una sombra colosal lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาอันมหึมากินทุกสิ่ง",
						"hindi": "एक विशाल परछाई ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들. 너희의 맹세는… 이미 깨어졌다.",
						"english": "Insignificant beings. Your vows are… already broken.",
						"japanese": "取るに足らない者たちよ。お前たちの誓いは…すでに破られた。",
						"chinese": "微不足道的家伙们。你们的誓言…早已被打破。",
						"french": "Créatures insignifiantes. Vos serments sont… déjà brisés.",
						"spanish": "Seres insignificantes. Vuestras promesas… ya están rotas.",
						"vietnamese": "Những kẻ tầm thường. Lời thề của các ngươi… đã bị phá vỡ rồi.",
						"thai": "พวกไร้ค่า คำสาบานของพวกเจ้า…ถูกทำลายไปแล้ว",
						"hindi": "तुच्छ प्राणी। तुम्हारी प्रतिज्ञाएँ… पहले ही टूट चुकी हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어…!",
						"english": "It's not over yet…!",
						"japanese": "まだ終わってない…！",
						"chinese": "还没结束…！",
						"french": "Ce n'est pas encore fini…!",
						"spanish": "¡Aún no ha terminado…!",
						"vietnamese": "Chưa kết thúc đâu…!",
						"thai": "ยังไม่จบ…!",
						"hindi": "अभी खत्म नहीं हुआ…!"
					}
				},
				{
					"content": {
						"korean": "감히 다시 도전하겠다고? …재밌군.",
						"english": "Dare to challenge again? …Amusing.",
						"japanese": "また挑戦するだと？…面白いな。",
						"chinese": "竟敢再次挑战？…有意思。",
						"french": "Oser défier à nouveau ? …Amusant.",
						"spanish": "¿Te atreves a desafiar de nuevo? …Interesante.",
						"vietnamese": "Dám thách thức lại sao? …Thú vị đấy.",
						"thai": "กล้าที่จะท้าทายอีกครั้งเหรอ?…น่าสนุกดี",
						"hindi": "फिर से चुनौती देने की हिम्मत? …मनोरंजक।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "케언의 가장 깊은 곳, 거대한 그림자가 우뚝 섰다.",
						"english": "In the deepest part of Cairn, a colossal shadow loomed.",
						"japanese": "ケアンの最深部、巨大な影がそびえ立っていた。",
						"chinese": "在凯恩最深处，一道巨大的阴影矗立着。",
						"french": "Dans les profondeurs de Cairn, une ombre colossale se dressait.",
						"spanish": "En lo más profundo de Cairn, una sombra colosal se alzaba.",
						"vietnamese": "Sâu thẳm nhất của Cairn, một bóng hình khổng lồ sừng sững.",
						"thai": "ณ ส่วนลึกที่สุดของเคน, เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "केर्न के सबसे गहरे हिस्से में, एक विशाल छाया मंडरा रही थी।"
					}
				},
				{
					"content": {
						"korean": "침입자들인가. 이 얼어붙은 무덤에… 어리석군.",
						"english": "Intruders? In this frozen tomb… How foolish.",
						"japanese": "侵入者か。この凍てつく墓地に… 愚かな。",
						"chinese": "侵入者吗？在这冰冷的墓穴里… 真愚蠢。",
						"french": "Des intrus ? Dans ce tombeau gelé… Quelle folie.",
						"spanish": "¿Intrusos? En esta tumba helada… Qué necios.",
						"vietnamese": "Kẻ xâm nhập ư? Trong ngôi mộ đóng băng này… Thật ngu xuẩn.",
						"thai": "พวกผู้บุกรุกหรือ? ในสุสานน้ำแข็งแห่งนี้… ช่างโง่เขลา",
						"hindi": "घुसपैठिए? इस जमी हुई कब्र में… कितने मूर्ख हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정체가 뭐야!",
						"english": "What are you?!",
						"japanese": "お前は何者だ！",
						"chinese": "你是什么东西！",
						"french": "Qu'est-ce que tu es ?!",
						"spanish": "¡¿Qué eres?!",
						"vietnamese": "Ngươi là cái gì!",
						"thai": "เจ้าคืออะไร!",
						"hindi": "तुम क्या हो?!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세를 깨는 자들을… 심판하는 존재다.",
						"english": "I am the one who… judges those who break their vows.",
						"japanese": "誓いを破る者たちを… 裁く存在だ。",
						"chinese": "我是… 审判那些违背誓言之人。",
						"french": "Je suis celui qui… juge ceux qui brisent leurs serments.",
						"spanish": "Soy el que… juzga a quienes rompen sus juramentos.",
						"vietnamese": "Ta là kẻ… phán xét những kẻ phá vỡ lời thề.",
						"thai": "ข้าคือผู้… พิพากษาเหล่าผู้ที่ผิดคำสาบาน",
						"hindi": "मैं वह हूँ जो… उन लोगों का न्याय करता है जो अपनी प्रतिज्ञा तोड़ते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리를 막을 순 없어.",
						"english": "You can't stop us.",
						"japanese": "我々を止めることはできない。",
						"chinese": "你无法阻止我们。",
						"french": "Tu ne peux pas nous arrêter.",
						"spanish": "No podrás detenernos.",
						"vietnamese": "Ngươi không thể ngăn cản chúng ta.",
						"thai": "เจ้าหยุดพวกเราไม่ได้",
						"hindi": "तुम हमें रोक नहीं सकते।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 어리석은 인간들… 맹세는… 반드시 대가를 치르게 할 것이다…!",
						"english": "Ugh… foolish mortals… the vow… will surely exact its price…!",
						"japanese": "くっ… 愚かな人間どもめ… 誓いは… 必ず代償を払わせるぞ…！",
						"chinese": "呃… 愚蠢的人类… 誓言… 必将让你们付出代价…！",
						"french": "Ugh… stupides mortels… le serment… exigera sûrement son prix…!",
						"spanish": "Argh… estúpidos mortales… el juramento… ¡seguramente cobrará su precio…!",
						"vietnamese": "Khụ… lũ phàm nhân ngu ngốc… lời thề… chắc chắn sẽ đòi giá…!",
						"thai": "อึก… มนุษย์ผู้โง่เขลา… คำสาบาน… จะต้องชดใช้แน่นอน…!",
						"hindi": "उफ़… मूर्ख नश्वर… प्रतिज्ञा… निश्चित रूप से इसकी कीमत वसूल करेगी…!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "해냈어…!",
						"english": "We did it…!",
						"japanese": "やったぞ…！",
						"chinese": "我们做到了…！",
						"french": "On a réussi…!",
						"spanish": "¡Lo logramos…!",
						"vietnamese": "Chúng ta đã làm được…!",
						"thai": "ทำสำเร็จแล้ว…!",
						"hindi": "हमने कर दिखाया…!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 승리의 기쁨도 잠시, 더 깊은 얼음 속에서… 오래된 맹세의 속삭임이 들려오는 듯했다.",
						"english": "But the joy of victory was fleeting, for from deeper within the ice… the whispers of an ancient vow seemed to emanate.",
						"japanese": "しかし勝利の喜びも束の間、さらに深い氷の奥から… 古き誓いの囁きが聞こえてくるようだった。",
						"chinese": "然而胜利的喜悦只是短暂的，因为在更深的冰层中… 似乎传来了古老誓言的低语。",
						"french": "Mais la joie de la victoire fut éphémère, car des profondeurs de la glace… les murmures d'un ancien serment semblaient émaner.",
						"spanish": "Pero la alegría de la victoria fue fugaz, pues desde lo más profundo del hielo… los susurros de un antiguo juramento parecían emanar.",
						"vietnamese": "Nhưng niềm vui chiến thắng chỉ thoáng qua, bởi từ sâu thẳm trong băng giá… những lời thì thầm của một lời thề cổ xưa dường như vọng lại.",
						"thai": "แต่ความสุขของชัยชนะนั้นช่างสั้นนัก, เพราะจากส่วนลึกของน้ำแข็ง… เสียงกระซิบของคำสาบานเก่าแก่ราวกับกำลังดังขึ้นมา",
						"hindi": "लेकिन जीत की खुशी क्षणभंगुर थी, क्योंकि बर्फ की गहराइयों से… एक पुरानी प्रतिज्ञा की फुसफुसाहट सुनाई दे रही थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진실은 아직… 차가운 얼음 속에 갇혀 있었다.",
						"english": "The truth was still… trapped in cold ice.",
						"japanese": "真実はまだ…冷たい氷の中に閉じ込められていた。",
						"chinese": "真相仍…被困在冰冷的寒冰之中。",
						"french": "La vérité était encore… prisonnière dans la glace froide.",
						"spanish": "La verdad aún… estaba atrapada en el frío hielo.",
						"vietnamese": "Sự thật vẫn… bị mắc kẹt trong băng lạnh.",
						"thai": "ความจริงยังคง…ถูกกักขังอยู่ในน้ำแข็งอันเย็นยะเยือก",
						"hindi": "सच अभी भी… ठंडी बर्फ़ में फंसा हुआ था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 북부 설원, 끝없이 펼쳐진 얼음 봉우리.",
			"잊힌 바이킹 탐험대의 흔적이 스산하게 맴도는 곳.",
			"이 땅에선 어떤 약속도 신중해야 한다.",
			"깨어진 맹세는 돌이킬 수 없는 형태로 대가를 치를 것이다.",
			"차가운 무덤이, 우리의 길을 막아선다."
		],
		"english": [
			"Harsh northern snowfields, endless icy peaks.",
			"Where traces of forgotten Viking expeditions eerily linger.",
			"In this land, all promises must be made with caution.",
			"Broken vows will exact a price, irrevocably.",
			"Cold tombs block our path."
		],
		"japanese": [
			"過酷な北の雪原、果てしなく広がる氷の峰々。",
			"忘れ去られたヴァイキング探検隊の痕跡が不気味に漂う場所。",
			"この地では、いかなる約束も慎重になされるべきだ。",
			"破られた誓いは、取り返しのつかない形で代償を払わせるだろう。",
			"冷たい墓が、我々の行く手を阻む。"
		],
		"chinese": [
			"严酷的北部雪原，无尽的冰峰。",
			"被遗忘的维京探险队痕迹在此阴森盘旋。",
			"在这片土地上，任何承诺都需谨慎。",
			"破碎的誓言将以不可逆转的方式付出代价。",
			"冰冷的坟墓，阻碍着我们的道路。"
		],
		"french": [
			"De rudes étendues enneigées du nord, des pics glacés infinis.",
			"Où les traces d'expéditions vikings oubliées persistent étrangement.",
			"Sur ces terres, toute promesse doit être faite avec prudence.",
			"Les serments brisés exigeront un prix, irrévocablement.",
			"De froides tombes barrent notre chemin."
		],
		"spanish": [
			"Duras llanuras nevadas del norte, picos helados interminables.",
			"Donde los rastros de expediciones vikingas olvidadas persisten inquietantemente.",
			"En esta tierra, toda promesa debe hacerse con cautela.",
			"Las promesas rotas exigirán un precio, irrevocablemente.",
			"Frías tumbas bloquean nuestro camino."
		],
		"vietnamese": [
			"Bắc tuyết nguyên khắc nghiệt, những đỉnh băng vô tận.",
			"Nơi dấu vết của những đoàn thám hiểm Viking bị lãng quên vẫn còn vương vấn một cách ghê rợn.",
			"Trên vùng đất này, mọi lời hứa đều phải thận trọng.",
			"Lời thề bị phá vỡ sẽ phải trả giá không thể cứu vãn.",
			"Những ngôi mộ lạnh giá, chặn lối chúng ta."
		],
		"thai": [
			"ทุ่งหิมะทางเหนืออันโหดร้าย, ยอดเขาน้ำแข็งที่ทอดยาวไม่สิ้นสุด.",
			"ที่ซึ่งร่องรอยของคณะสำรวจไวกิ้งที่ถูกลืมเลือนยังคงวนเวียนอยู่ชวนขนลุก.",
			"ในดินแดนแห่งนี้, คำมั่นสัญญาใดๆ ต้องกระทำด้วยความระมัดระวัง.",
			"คำสาบานที่แตกหักจะเรียกค่าตอบแทนที่ไม่อาจย้อนคืนได้.",
			"สุสานอันเย็นยะเยือกขวางทางเราอยู่."
		],
		"hindi": [
			"कठोर उत्तरी बर्फीले मैदान, अंतहीन बर्फीली चोटियाँ。",
			"जहाँ भूली-बिसरी वाइकिंग अभियानों के निशान भयावह रूप से मंडराते हैं।",
			"इस भूमि में, हर वादे को सावधानी से निभाना चाहिए।",
			"टूटे हुए वादे अपरिवर्तनीय रूप से कीमत चुकाएंगे।",
			"ठंडी कब्रें, हमारा रास्ता रोकती हैं।"
		]
	}
} as const;
