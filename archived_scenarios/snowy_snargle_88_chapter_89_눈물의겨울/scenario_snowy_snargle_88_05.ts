export const scenario_snowy_snargle_88_05 = {
	"scenario_id": "snowy_snargle_88_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_GrumpyRelic_Snargle_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "만년설의 심장부. 고대의 저주가 서린 곳이었다.",
						"english": "The heart of the perpetual snow. A place where ancient curses lingered.",
						"japanese": "万年雪の心臓部。古代の呪いが宿る場所だった。",
						"chinese": "万年冰雪的中心。古老诅咒盘踞之地。",
						"french": "Le cœur de la neige éternelle. Un lieu hanté par d'anciennes malédictions.",
						"spanish": "El corazón de la nieve perpetua. Un lugar donde acechaban antiguas maldiciones.",
						"vietnamese": "Trái tim của tuyết vĩnh cửu. Nơi lời nguyền cổ xưa ngự trị.",
						"thai": "ใจกลางของหิมะนิรันดร์ สถานที่ที่คำสาปโบราณสถิตอยู่",
						"hindi": "शाश्वत बर्फ का हृदय। एक ऐसा स्थान जहाँ प्राचीन श्राप व्याप्त थे।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "스나르글… 그의 시간이 얼마 남지 않았어.",
						"english": "Snargle... his time is running out.",
						"japanese": "スナグル…彼の時間はもうあまり残されていない。",
						"chinese": "斯纳格尔……他的时间不多了。",
						"french": "Snargle... son temps est compté.",
						"spanish": "Snargle... su tiempo se agota.",
						"vietnamese": "Snargle... thời gian của hắn không còn nhiều.",
						"thai": "สแนร์เกิล... เวลาของเขาเหลือน้อยแล้ว",
						"hindi": "स्نार्गल... उसका समय अब कम बचा है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저주를 풀 방법은?",
						"english": "How to lift the curse?",
						"japanese": "呪いを解く方法は？",
						"chinese": "如何解除诅咒？",
						"french": "Comment lever la malédiction ?",
						"spanish": "¿Cómo romper la maldición?",
						"vietnamese": "Cách hóa giải lời nguyền?",
						"thai": "วิธีถอนคำสาปคืออะไร?",
						"hindi": "श्राप को कैसे दूर करें?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그의 진짜 '보물'을 찾아줘야 해.",
						"english": "We need to find his real 'treasure'.",
						"japanese": "彼の本当の「宝物」を見つけなければ。",
						"chinese": "我们得找到他真正的“宝藏”。",
						"french": "Nous devons trouver son vrai \"trésor\".",
						"spanish": "Debemos encontrar su verdadero \"tesoro\".",
						"vietnamese": "Chúng ta phải tìm thấy 'báu vật' thật sự của hắn.",
						"thai": "เราต้องหา 'สมบัติ' ที่แท้จริงของเขาให้เจอ",
						"hindi": "हमें उसका असली 'खजाना' ढूंढना होगा।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "(낡은 지도 조각을 보며) 이 지도는… 스나르글의 것이었어. 그가 찾던 건 단순히 물건이 아니었어.",
						"english": "(Looking at an old map fragment) This map... it was Snargle's. He wasn't just looking for an item.",
						"japanese": "(古い地図の断片を見て) この地図は… スナーグルのものだった。彼が探していたのは、単なる物ではなかったんだ。",
						"chinese": "(看着一张旧地图碎片) 这张地图……是斯纳格尔的。他寻找的不仅仅是物品。",
						"french": "(En regardant un fragment de vieille carte) Cette carte... c'était celle de Snargle. Ce n'était pas un simple objet qu'il cherchait.",
						"spanish": "(Mirando un fragmento de mapa antiguo) Este mapa... era de Snargle. Lo que buscaba no era simplemente un objeto.",
						"vietnamese": "(Nhìn một mảnh bản đồ cũ) Bản đồ này... là của Snargle. Thứ hắn tìm không chỉ là một món đồ.",
						"thai": "(มองเศษแผนที่เก่า) แผนที่นี่... เป็นของสนาร์เกิล เขาไม่ได้หากแค่สิ่งของ",
						"hindi": "(एक पुराने नक्शे के टुकड़े को देखते हुए) यह नक्शा... स्नार्गल का था। वह सिर्फ कोई वस्तु नहीं ढूंढ रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억의 파편?",
						"english": "Fragments of memory?",
						"japanese": "記憶の破片？",
						"chinese": "记忆碎片？",
						"french": "Des fragments de mémoire ?",
						"spanish": "¿Fragmentos de memoria?",
						"vietnamese": "Mảnh vỡ ký ức?",
						"thai": "เศษเสี้ยวความทรงจำ?",
						"hindi": "यादों के टुकड़े?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 저주에 걸려 가장 소중한 것을 잃었지.",
						"english": "Yes. Cursed, he lost what was most precious.",
						"japanese": "そう。呪いにかかり、最も大切なものを失ったんだ。",
						"chinese": "是的。他被诅咒，失去了最珍贵的东西。",
						"french": "Oui. Maudit, il a perdu ce qu'il avait de plus précieux.",
						"spanish": "Sí. Maldito, perdió lo más preciado.",
						"vietnamese": "Đúng vậy. Bị nguyền rủa, hắn đã mất đi thứ quý giá nhất.",
						"thai": "ใช่ เขากล่าวสาปแช่งแล้วสูญเสียสิ่งที่มีค่าที่สุดไป",
						"hindi": "हाँ। श्रापित होकर, उसने अपना सबसे कीमती चीज़ खो दिया।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "(희미한 환영 소리에 귀 기울이며) 들려? 저 슬픈 목소리… 그가 잃어버린 염원이야.",
						"english": "(Listening to a faint ethereal sound) Do you hear it? That sad voice... It's the yearning he lost.",
						"japanese": "(かすかな幻影の音に耳を傾けながら) 聞こえる？あの悲しい声… 彼が失った願いだよ。",
						"chinese": "(倾听着微弱的幻影之声) 听到了吗？那个悲伤的声音……那是他失去的夙愿。",
						"french": "(Écoutant un faible son éthéré) Tu l'entends ? Cette voix triste... C'est le désir qu'il a perdu.",
						"spanish": "(Escuchando un tenue sonido etéreo) ¿Lo oyes? Esa voz triste... Es el anhelo que perdió.",
						"vietnamese": "(Lắng nghe tiếng ảo ảnh mờ nhạt) Nghe thấy không? Giọng nói buồn bã đó... đó là khát vọng mà hắn đã đánh mất.",
						"thai": "(เงี่ยหูฟังเสียงหลอนจางๆ) ได้ยินไหม? เสียงเศร้าๆ นั่น... คือความปรารถนาที่เขาสูญเสียไป",
						"hindi": "(एक हल्की अलौकिक ध्वनि सुनते हुए) क्या तुम सुन सकते हो? वह उदास आवाज़... यह वह लालसा है जो उसने खो दी।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그를 구해야 해.",
						"english": "We must save him.",
						"japanese": "彼を救わなければ。",
						"chinese": "我们必须救他。",
						"french": "Nous devons le sauver.",
						"spanish": "Debemos salvarlo.",
						"vietnamese": "Chúng ta phải cứu hắn.",
						"thai": "เราต้องช่วยเขา",
						"hindi": "हमें उसे बचाना होगा।"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 저주는 너무 강해. 물리적으로 그를 멈춰야 할지도 몰라.",
						"english": "But the curse is too strong. We might have to stop him physically.",
						"japanese": "でも呪いは強すぎる。物理的に彼を止めなければならないかもしれない。",
						"chinese": "但诅咒太强大了。我们可能需要物理上阻止他。",
						"french": "Mais la malédiction est trop forte. Nous devrons peut-être l'arrêter physiquement.",
						"spanish": "Pero la maldición es demasiado fuerte. Quizás tengamos que detenerlo físicamente.",
						"vietnamese": "Nhưng lời nguyền quá mạnh. Chúng ta có thể phải dùng vũ lực để ngăn chặn hắn.",
						"thai": "แต่คำสาปมันแข็งแกร่งเกินไป เราอาจจะต้องหยุดเขาทางกายภาพ",
						"hindi": "लेकिन श्राप बहुत शक्तिशाली है। हमें उसे शारीरिक रूप से रोकना पड़ सकता है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "(작은 반짝이는 조약돌을 보며) 이 조약돌… 스나르글이 빼앗아 간 것 중 하나야. 어쩌면 이게 열쇠일지도 몰라.",
						"english": "(Looking at a small shimmering pebble) This pebble... it's one of the things Snargle took. Maybe this is the key.",
						"japanese": "(小さな輝く小石を見て) この小石… スナーグルが奪っていったものの一つだ。もしかしたら、これが鍵かもしれない。",
						"chinese": "(看着一块闪闪发光的小鹅卵石) 这块鹅卵石……是斯纳格尔夺走的东西之一。也许这就是钥匙。",
						"french": "(En regardant un petit galet scintillant) Ce galet... c'est l'une des choses que Snargle a prises. C'est peut-être la clé.",
						"spanish": "(Mirando un pequeño guijarro brillante) Este guijarro... es una de las cosas que Snargle se llevó. Quizás esta sea la clave.",
						"vietnamese": "(Nhìn một viên sỏi nhỏ lấp lánh) Viên sỏi này... là một trong những thứ Snargle đã cướp đi. Có lẽ đây là chìa khóa.",
						"thai": "(มองก้อนกรวดเล็กๆ ที่ส่องประกาย) ก้อนกรวดนี่... เป็นหนึ่งในสิ่งที่สนาร์เกิลแย่งไป บางทีนี่อาจจะเป็นกุญแจ",
						"hindi": "(एक छोटे चमकते कंकड़ को देखते हुए) यह कंकड़... स्नार्गल द्वारा ली गई चीज़ों में से एक है। शायद यही चाबी है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모든 진실이 밝혀졌어. 더 이상 망설일 수 없어.",
						"english": "All truth has been revealed. We can hesitate no longer.",
						"japanese": "全ての真実が明らかになった。もう迷っている場合じゃない。",
						"chinese": "所有真相都已揭示。我们不能再犹豫了。",
						"french": "Toute la vérité a été révélée. Nous ne pouvons plus hésiter.",
						"spanish": "Toda la verdad ha sido revelada. No podemos dudar más.",
						"vietnamese": "Tất cả sự thật đã được phơi bày. Chúng ta không thể chần chừ thêm nữa.",
						"thai": "ความจริงทั้งหมดถูกเปิดเผยแล้ว เราลังเลไม่ได้อีกต่อไป",
						"hindi": "सारी सच्चाई सामने आ गई है। अब हम और संकोच नहीं कर सकते।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "맞아. 이제, 그를 영원한 안식으로 인도해야 해.",
						"english": "Yes. Now, we must guide him to eternal rest.",
						"japanese": "そうだ。今こそ、彼を永遠の安息へと導く時だ。",
						"chinese": "没错。现在，我们必须引导他进入永恒的安息。",
						"french": "Oui. Maintenant, nous devons le guider vers le repos éternel.",
						"spanish": "Sí. Ahora, debemos guiarlo al descanso eterno.",
						"vietnamese": "Đúng vậy. Giờ thì, chúng ta phải đưa anh ấy về nơi an nghỉ vĩnh hằng.",
						"thai": "ใช่แล้ว ตอนนี้เราต้องนำทางเขาไปสู่การพักผ่อนชั่วนิรันดร์",
						"hindi": "हाँ। अब, हमें उसे शाश्वत शांति में ले जाना चाहिए।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 뿔투구의 괴물, 스나르글이 거친 숨을 내쉬었다.",
						"english": "Snargle, the monstrous creature with massive ice horns, let out a rough breath.",
						"japanese": "巨大な氷の角を持つ怪物、スナールグルが荒い息を吐いた。",
						"chinese": "戴着巨大冰角头盔的怪物斯纳格尔粗重地喘着气。",
						"french": "Snargle, le monstre aux cornes de glace massives, laissa échapper un souffle rauque.",
						"spanish": "Snargle, el monstruo con enormes cuernos de hielo, exhaló con dificultad.",
						"vietnamese": "Snargle, quái vật với sừng băng khổng lồ, thở hổn hển.",
						"thai": "สแนร์เกิล สัตว์ประหลาดหัวเขาสัตว์น้ำแข็งขนาดยักษ์ ถอนหายใจอย่างหยาบกระด้าง",
						"hindi": "विशाल बर्फीले सींगों वाला राक्षस, स्नार्गल ने एक भारी साँस छोड़ी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(으르렁거리며) 내… 내 보물… 감히…!",
						"english": "(Growling) My... my treasure... How dare you...!",
						"japanese": "（唸りながら）俺の… 俺の宝… よくも…！",
						"chinese": "（咆哮着）我的……我的宝藏……竟敢……！",
						"french": "(Grogne) Mon... mon trésor... Comment oses-tu... !",
						"spanish": "(Gruñendo) Mi... mi tesoro... ¡Cómo osas...!",
						"vietnamese": "(Gầm gừ) Kho báu của ta... của ta... Sao ngươi dám...!",
						"thai": "(คำราม) สมบัติ...สมบัติของข้า...บังอาจ...!",
						"hindi": "(गुर्राते हुए) मेरा... मेरा खजाना... तुम्हारी हिम्मत कैसे हुई...!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "스나르글! 멈춰! 이건 저주야!",
						"english": "Snargle! Stop! This is a curse!",
						"japanese": "スナールグル！止まれ！それは呪いだ！",
						"chinese": "斯纳格尔！住手！这是诅咒！",
						"french": "Snargle ! Arrête ! C'est une malédiction !",
						"spanish": "¡Snargle! ¡Detente! ¡Esto es una maldición!",
						"vietnamese": "Snargle! Dừng lại! Đây là lời nguyền!",
						"thai": "สแนร์เกิล! หยุดนะ! นี่มันคำสาป!",
						"hindi": "स्नार्गल! रुको! यह एक अभिशाप है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "(목걸이를 들고 조심스럽게 다가가며) 스나르글… 당신이 잃어버린 건…",
						"english": "(Holding the necklace, approaching carefully) Snargle... what you've lost is...",
						"japanese": "（ネックレスを手に、慎重に近づきながら）スナールグル…あなたが失ったものは…",
						"chinese": "（举着项链，小心翼翼地走近）斯纳格尔……你失去的东西是……",
						"french": "(Tenant le collier, s'approchant prudemment) Snargle... ce que tu as perdu est...",
						"spanish": "(Sosteniendo el collar, acercándose con cuidado) Snargle... lo que perdiste es...",
						"vietnamese": "(Cầm vòng cổ, cẩn thận tiến đến) Snargle... thứ ngươi đã mất là...",
						"thai": "(ถือสร้อยคอพลางเดินเข้าหาอย่างระมัดระวัง) สแนร์เกิล...สิ่งที่คุณสูญเสียไปคือ...",
						"hindi": "(हार पकड़े हुए, सावधानी से पास आते हुए) स्नार्गल... तुमने जो खोया है वह है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "몸을 부숴야 해! 저주를 깨려면!",
						"english": "We must break its body! To break the curse!",
						"japanese": "体を砕くんだ！呪いを解くためには！",
						"chinese": "必须摧毁它的身体！才能打破诅咒！",
						"french": "Il faut briser son corps ! Pour briser la malédiction !",
						"spanish": "¡Debemos romper su cuerpo! ¡Para romper la maldición!",
						"vietnamese": "Phải phá hủy cơ thể nó! Để phá giải lời nguyền!",
						"thai": "ต้องทำลายร่างของมัน! เพื่อทำลายคำสาป!",
						"hindi": "हमें शरीर को तोड़ना होगा! अभिशाप तोड़ने के लिए!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대의 공격에 거대한 얼음 뿔투구가 쨍그랑 소리를 내며 박살 났다.",
						"english": "Under the adventurers' assault, the massive ice-horned helmet shattered with a clang.",
						"japanese": "探検隊の攻撃により、巨大な氷の角兜はガシャンと音を立てて粉々に砕け散った。",
						"chinese": "探险队的攻击下，巨大的冰角头盔哗啦一声碎裂开来。",
						"french": "Sous l'assaut des aventuriers, le casque aux cornes de glace massives se brisa avec un fracas.",
						"spanish": "Bajo el asalto de los aventureros, el enorme casco de cuernos de hielo se hizo añicos con un estruendo.",
						"vietnamese": "Dưới sự tấn công của đoàn thám hiểm, chiếc mũ sừng băng khổng lồ vỡ tan tành với tiếng loảng xoảng.",
						"thai": "ภายใต้การโจมตีของนักผจญภัย หมวกเกราะน้ำแข็งเขายักษ์แตกกระจายด้วยเสียงดัง",
						"hindi": "साहसी लोगों के हमले से, विशाल बर्फीला सींग वाला हेलमेट एक झनकार के साथ टूट गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 안에서 어딘가 비장하면서도 얼빠진 표정의 작은 얼음 조각이 튀어나왔다.",
						"english": "From within, a small ice shard, looking somewhat solemn yet dazed, popped out.",
						"japanese": "その中から、どこか悲壮でありながら間抜けな表情を浮かべた小さな氷の破片が飛び出した。",
						"chinese": "从中弹出一个表情既悲壮又呆萌的小冰块。",
						"french": "De l'intérieur, un petit éclat de glace, l'air à la fois solennel et ahuri, jaillit.",
						"spanish": "De su interior, un pequeño fragmento de hielo, con una expresión a la vez solemne y aturdida, saltó.",
						"vietnamese": "Từ bên trong, một mảnh băng nhỏ với vẻ mặt vừa bi tráng vừa ngơ ngác bật ra.",
						"thai": "จากข้างใน มีเศษน้ำแข็งเล็ก ๆ ที่ดูเคร่งขรึมแต่ก็งงงวยโผล่ออกมา",
						"hindi": "उसके अंदर से, कहीं न कहीं वीर और साथ ही भौचक्का सा दिखने वाला एक छोटा बर्फीला टुकड़ा निकला।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 비루한 모험가 놈들! 감히 내 보물을!",
						"english": "You wretched adventurers! How dare you touch my treasure!",
						"japanese": "この卑しい冒険者どもめ！よくも俺の宝に！",
						"chinese": "你们这些卑鄙的冒险者！竟敢动我的宝藏！",
						"french": "Misérables aventuriers ! Comment osez-vous toucher mon trésor !",
						"spanish": "¡Ustedes, miserables aventureros! ¡Cómo osan tocar mi tesoro!",
						"vietnamese": "Lũ thám hiểm hèn mọn này! Dám động vào kho báu của ta!",
						"thai": "ไอ้นักผจญภัยกระจอก! บังอาจแตะสมบัติของข้า!",
						"hindi": "तुम नीच साहसी लोग! मेरे खजाने को छूने की तुम्हारी हिम्मत कैसे हुई!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래, 이제 기억났다… 나의 진정한 보물은 바로… 점심으로 먹으려 했던 훈제 연어였다! 연어를 내놔라!",
						"english": "Yes, now I remember... My true treasure was... the smoked salmon I was going to have for lunch! Give me back my salmon!",
						"japanese": "そうだ、今思い出したぞ…俺の真の宝は…昼食に食べるはずだったスモークサーモンだった！サーモンを返せ！",
						"chinese": "对了，现在我记起来了……我真正的宝藏就是……我午餐要吃的熏鲑鱼！把鲑鱼还给我！",
						"french": "Oui, maintenant je me souviens... Mon véritable trésor était... le saumon fumé que j'allais manger pour le déjeuner ! Rendez-moi mon saumon !",
						"spanish": "¡Sí, ahora recuerdo...! Mi verdadero tesoro era... ¡el salmón ahumado que iba a comer para el almuerzo! ¡Devuélvanme mi salmón!",
						"vietnamese": "Đúng vậy, giờ ta nhớ rồi... Kho báu thật sự của ta là... món cá hồi hun khói ta định ăn trưa! Trả cá hồi cho ta!",
						"thai": "ใช่แล้ว ตอนนี้ข้าจำได้แล้ว...สมบัติที่แท้จริงของข้าคือ...ปลาแซลมอนรมควันที่ข้าจะกินเป็นมื้อกลางวัน! เอาแซลมอนของข้าคืนมา!",
						"hindi": "हाँ, अब मुझे याद आया... मेरा असली खजाना था... वह स्मोक्ड सैल्मन जिसे मैं दोपहर के भोजन में खाने वाला था! मेरा सैल्मन वापस दो!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…연어?",
						"english": "...Salmon?",
						"japanese": "...サーモン？",
						"chinese": "……鲑鱼？",
						"french": "...Saumon ?",
						"spanish": "¿...Salmón?",
						"vietnamese": "...Cá hồi?",
						"thai": "...แซลมอน?",
						"hindi": "...सामन?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(작은 스나르글에게 목걸이를 내밀며) 이게 당신의 진정한 보물이었나요? 잊었던… 작은 행복.",
						"english": "(Offering the necklace to the small Snargle) Was this your true treasure? A forgotten... small happiness.",
						"japanese": "(小さなスナグルにネックレスを差し出しながら) これがあなたの本当の宝物でしたか？ 忘れ去られた…ささやかな幸せ。",
						"chinese": "（将项链递给小斯纳格尔）这是你真正的宝藏吗？被遗忘的……小小的幸福。",
						"french": "(Tendant le collier au petit Snargle) C'était ça votre vrai trésor ? Un petit bonheur oublié...",
						"spanish": "(Ofreciéndole el collar al pequeño Snargle) ¿Era este tu verdadero tesoro? Una pequeña felicidad... olvidada.",
						"vietnamese": "(Đưa chiếc vòng cổ cho Snargle nhỏ) Đây có phải là kho báu thực sự của bạn không? Một hạnh phúc nhỏ bé... đã bị lãng quên.",
						"thai": "(ยื่นสร้อยคอให้สนาร์เกิลตัวน้อย) นี่คือสมบัติที่แท้จริงของคุณใช่ไหม? ความสุขเล็กๆ...ที่ถูกลืมเลือน",
						"hindi": "(छोटे स्नार्गल को हार बढ़ाते हुए) क्या यह तुम्हारा असली खजाना था? एक भूली हुई... छोटी सी खुशी।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "(목걸이를 보며 눈물을 글썽이며) 흐읍… 연어… 나의 훈제 연어…",
						"english": "(Tearing up while looking at the necklace) *Sniff*... Salmon... my smoked salmon...",
						"japanese": "(ネックレスを見て涙ぐみながら) うぅ…サーモン…私のスモークサーモン…",
						"chinese": "（看着项链，泪眼婆娑）呜……鲑鱼……我的熏鲑鱼……",
						"french": "(Les larmes aux yeux en regardant le collier) *Snif*... Saumon... mon saumon fumé...",
						"spanish": "(Con lágrimas en los ojos mirando el collar) *Snif*... Salmón... mi salmón ahumado...",
						"vietnamese": "(Rơm rớm nước mắt nhìn chiếc vòng cổ) Hức... Cá hồi... cá hồi hun khói của ta...",
						"thai": "(น้ำตาคลอเบ้าเมื่อมองสร้อยคอ) ฮึก... แซลมอน... แซลมอนรมควันของฉัน...",
						"hindi": "(हार देखते हुए आँखों में आँसू लिए) *हूँह*... सामन... मेरा स्मोक्ड सामन..."
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "(작게 중얼거리며) 연어… 이제… 배부르다…",
						"english": "(Muttering softly) Salmon... now... I'm full...",
						"japanese": "(小さくつぶやきながら) サーモン…もう…お腹いっぱいだ…",
						"chinese": "（小声咕哝着）鲑鱼……现在……我饱了……",
						"french": "(Murmurant doucement) Saumon... maintenant... je suis rassasié...",
						"spanish": "(Murmurando suavemente) Salmón... ahora... estoy saciado...",
						"vietnamese": "(Lầm bầm nhỏ) Cá hồi... giờ... ta no rồi...",
						"thai": "(พึมพำเบาๆ) แซลมอน... ตอนนี้... ฉันอิ่มแล้ว...",
						"hindi": "(धीमे से बुदबुदाते हुए) सामन... अब... मैं भरा हुआ हूँ..."
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(점점 희미해지며) 고맙다… 모험가… 들…",
						"english": "(Fading away) Thank you... adventurers...",
						"japanese": "(だんだん薄れながら) ありがとう…冒険者…たち…",
						"chinese": "（渐渐消散）谢谢……冒险家……们……",
						"french": "(S'estompant) Merci... aventuriers...",
						"spanish": "(Desvaneciéndose) Gracias... aventureros...",
						"vietnamese": "(Mờ dần) Cảm ơn... các nhà thám hiểm...",
						"thai": "(เลือนหายไป) ขอบคุณ... นักผจญภัย...",
						"hindi": "(धीरे-धीरे गायब होते हुए) धन्यवाद... साहसी यात्रियों..."
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "(슬픈 미소로) 잘 가요, 스나르글… 당신의 연어는 영원히 기억될 거예요.",
						"english": "(With a sad smile) Farewell, Snargle... your salmon will be remembered forever.",
						"japanese": "(悲しい笑顔で) さようなら、スナグル…あなたのサーモンは永遠に記憶されるでしょう。",
						"chinese": "（带着悲伤的笑容）再见了，斯纳格尔……你的鲑鱼将永远被铭记。",
						"french": "(Avec un triste sourire) Adieu, Snargle... ton saumon restera gravé dans les mémoires.",
						"spanish": "(Con una triste sonrisa) Adiós, Snargle... tu salmón será recordado para siempre.",
						"vietnamese": "(Với nụ cười buồn) Tạm biệt, Snargle... cá hồi của bạn sẽ được nhớ mãi.",
						"thai": "(ด้วยรอยยิ้มเศร้า) ลาก่อน, สนาร์เกิล... แซลมอนของคุณจะถูกจดจำตลอดไป",
						"hindi": "(उदास मुस्कान के साथ) अलविदा, स्नार्गल... तुम्हारा सामन हमेशा याद रखा जाएगा।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어… 그의 저주가 풀렸어.",
						"english": "Finally... his curse is broken.",
						"japanese": "ついに…彼の呪いが解けた。",
						"chinese": "终于……他的诅咒解除了。",
						"french": "Enfin... sa malédiction est levée.",
						"spanish": "Finalmente... su maldición se ha roto.",
						"vietnamese": "Cuối cùng... lời nguyền của hắn đã được hóa giải.",
						"thai": "ในที่สุด... คำสาปของเขาก็ถูกคลายลงแล้ว",
						"hindi": "आखिरकार... उसका श्राप टूट गया।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼음 황무지에 따뜻한 한 줄기 바람이 불어왔다. 길고 긴 비극이 끝이 났다.",
						"english": "A warm breeze swept through the icy wasteland. The long, drawn-out tragedy had ended.",
						"japanese": "氷の荒野に暖かな一筋の風が吹き抜けた。長く長い悲劇が終わった。",
						"chinese": "一股温暖的风吹过冰冷的荒原。漫长的悲剧终于落幕。",
						"french": "Une chaude brise souffla sur la friche glacée. La longue et interminable tragédie était terminée.",
						"spanish": "Una cálida brisa sopló a través del páramo helado. La larga y extendida tragedia había terminado.",
						"vietnamese": "Một làn gió ấm áp thổi qua vùng đất hoang băng giá. Bi kịch kéo dài đã kết thúc.",
						"thai": "ลมพัดอุ่นสายหนึ่งพัดผ่านดินแดนรกร้างน้ำแข็ง โศกนาฏกรรมอันยาวนานได้สิ้นสุดลงแล้ว",
						"hindi": "बर्फीले बंजर भूमि में एक गर्म हवा का झोंका आया। लंबी, खिंची हुई त्रासदी समाप्त हो गई थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만, 저주가 남긴 흔적은 여전히 남아있었다.",
						"english": "However, the remnants of the curse still lingered.",
						"japanese": "しかし、呪いが残した痕跡はまだ残っていた。",
						"chinese": "然而，诅咒留下的痕迹依然存在。",
						"french": "Cependant, les vestiges de la malédiction persistaient.",
						"spanish": "Sin embargo, los vestigios de la maldición aún permanecían.",
						"vietnamese": "Tuy nhiên, dấu vết của lời nguyền vẫn còn sót lại.",
						"thai": "อย่างไรก็ตาม ร่องรอยของคำสาปยังคงหลงเหลืออยู่",
						"hindi": "हालांकि, श्राप के अवशेष अभी भी बाकी थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "(승리감에 취해) 하하하! 내 보물은… 너희 같은 자들이 감히…!",
						"english": "(Drunk with victory) Hahahaha! My treasure... fools like you dare not...!",
						"japanese": "(勝利に酔いしれて) ハハハハ！私の宝は…お前たちのような者どもが…！",
						"chinese": "（沉浸在胜利的喜悦中）哈哈哈！我的宝藏……岂是你们这些家伙敢……！",
						"french": "(Ivre de victoire) Hahahaha ! Mon trésor... des imbéciles comme vous n'oseraient pas... !",
						"spanish": "(Ebrio de victoria) ¡Jajajaja! ¡Mi tesoro... gente como vosotros no se atreverá...!",
						"vietnamese": "(Say sưa trong chiến thắng) Hahaha! Kho báu của ta... những kẻ như các ngươi dám...!",
						"thai": "(เมามายในชัยชนะ) ฮ่าฮ่าฮ่า! สมบัติของข้า... พวกเจ้าหน้าโง่กล้าดี...! ",
						"hindi": "(जीत के नशे में) हाहाहा! मेरा खजाना... तुम जैसे लोग हिम्मत नहीं करोगे...!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런… 아직 멀었어!",
						"english": "Darn... not even close!",
						"japanese": "くそっ… まだまだだ！",
						"chinese": "唉… 还差得远呢！",
						"french": "Zut... pas encore !",
						"spanish": "¡Maldita sea... aún no!",
						"vietnamese": "Chết tiệt… vẫn còn xa lắm!",
						"thai": "ให้ตายสิ… ยังอีกไกล!",
						"hindi": "धत्… अभी और बाकी है!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "스나르글… 제발…!",
						"english": "Snargle... please...!",
						"japanese": "スナールグル… 頼む…！",
						"chinese": "斯纳格尔… 求你了…！",
						"french": "Snargle... pitié... !",
						"spanish": "¡Snargle... por favor...!",
						"vietnamese": "Snargle… làm ơn…!",
						"thai": "สนาร์เกิล… ได้โปรด…!",
						"hindi": "स्नार्गल… कृपया…!"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"스나르글은 연어의 꿈 속에서 영원한 안식에 들었다.",
			"그의 저주는 풀렸지만, 황무지의 얼음은 여전히 녹지 않았다.",
			"구원이었을까, 또 다른 침해였을까. 알 수 없었다.",
			"그저, 작은 조약돌 하나가 따뜻하게 빛날 뿐이었다."
		],
		"english": [
			"Snargle found eternal rest in the dreams of salmon.",
			"His curse was broken, but the wasteland's ice remained unthawed.",
			"Was it salvation, or another trespass? It was unknown.",
			"Only a small pebble glowed warmly."
		],
		"japanese": [
			"スナグルは鮭の夢の中で永遠の安息についた。",
			"彼の呪いは解けたが、荒野の氷はまだ溶けなかった。",
			"救済だったのか、それとも新たな侵害だったのか。知る由もなかった。",
			"ただ、小さな小石一つが暖かく輝くだけだった。"
		],
		"chinese": [
			"斯纳格尔在鲑鱼的梦中获得了永恒的安息。",
			"他的诅咒解除了，但荒原上的冰雪依旧没有融化。",
			"是救赎，还是又一次侵犯？无人知晓。",
			"仅仅是一颗小小的鹅卵石，正散发着温暖的光芒。"
		],
		"french": [
			"Snargle trouva le repos éternel dans les rêves de saumon.",
			"Sa malédiction était brisée, mais la glace de la lande restait intacte.",
			"Salut ou nouvelle intrusion ? Nul ne le savait.",
			"Seul un petit galet brillait chaleureusement."
		],
		"spanish": [
			"Snargle encontró el descanso eterno en los sueños de salmón.",
			"Su maldición se rompió, pero el hielo del páramo aún no se derretía.",
			"¿Fue salvación, u otra invasión? No se sabía.",
			"Solo un pequeño guijarro brillaba cálidamente."
		],
		"vietnamese": [
			"Snargle đã an nghỉ vĩnh hằng trong giấc mơ cá hồi.",
			"Lời nguyền của hắn đã được hóa giải, nhưng băng trên vùng đất hoang vẫn chưa tan.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác? Không thể biết được.",
			"Chỉ một viên sỏi nhỏ, ấm áp tỏa sáng mà thôi."
		],
		"thai": [
			"สแนร์เกิลได้พักผ่อนชั่วนิรันดร์ในความฝันของปลาแซลมอน",
			"คำสาปของเขาถูกทำลายลงแล้ว แต่ธารน้ำแข็งในดินแดนรกร้างยังคงไม่ละลาย",
			"เป็นการไถ่ถอน หรือการบุกรุกอีกครั้ง? ไม่อาจรู้ได้",
			"มีเพียงก้อนกรวดเล็กๆ ก้อนหนึ่งที่ส่องแสงอบอุ่น"
		],
		"hindi": [
			"स्नार्गल ने सामन के सपनों में शाश्वत शांति पाई।",
			"उसका श्राप टूट गया, लेकिन बंजर भूमि की बर्फ अभी भी नहीं पिघली।",
			"क्या यह मोक्ष था, या एक और अतिक्रमण। पता नहीं था।",
			"बस, एक छोटा कंकड़ गर्मजोशी से चमक रहा था।"
		]
	},
	"prologue": {
		"korean": [
			"얼어붙은 황무지, 스나르글의 시간이 멈춰가고 있었다.",
			"잃어버린 기억 속, 그는 오직 '보물'만을 쫓았다.",
			"하지만 그 보물은, 싸움으로 되찾을 수 있는 것이 아니었다.",
			"마지막 룬이 해독되던 순간, 모든 비극의 막이 올랐다."
		],
		"english": [
			"The frozen wasteland. Snargle's time was running out.",
			"In lost memories, he sought only 'treasure'.",
			"But that treasure couldn't be reclaimed through battle.",
			"The moment the last rune was deciphered, the curtain rose on all tragedies."
		],
		"japanese": [
			"凍てついた荒野、スナグルの時は止まろうとしていた。",
			"失われた記憶の中、彼はただ「宝物」だけを追い求めた。",
			"しかしその宝物は、戦いでは取り戻せないものだった。",
			"最後のルーンが解読された瞬間、全ての悲劇の幕が上がった。"
		],
		"chinese": [
			"冰封的荒原，斯纳格尔的时间正在停止。",
			"在失去的记忆中，他只追逐着“宝藏”。",
			"但那个宝藏，并非通过战斗就能夺回。",
			"最后一枚符文被解读的那一刻，所有悲剧的帷幕拉开了。"
		],
		"french": [
			"La lande gelée. Le temps de Snargle s'écoulait.",
			"Dans ses souvenirs perdus, il ne cherchait que le « trésor ».",
			"Mais ce trésor ne pouvait être récupéré par le combat.",
			"Au moment où la dernière rune fut déchiffrée, le rideau se leva sur toutes les tragédies."
		],
		"spanish": [
			"El páramo helado. El tiempo de Snargle se agotaba.",
			"En sus recuerdos perdidos, solo buscaba el \"tesoro\".",
			"Pero ese tesoro no podía ser recuperado con la lucha.",
			"En el instante en que la última runa fue descifrada, el telón se alzó sobre todas las tragedias."
		],
		"vietnamese": [
			"Vùng đất hoang băng giá. Thời gian của Snargle đang cạn dần.",
			"Trong ký ức đã mất, hắn chỉ đuổi theo 'kho báu'.",
			"Nhưng kho báu đó, không thể giành lại bằng chiến đấu.",
			"Khoảnh khắc rune cuối cùng được giải mã, màn bi kịch đã bắt đầu."
		],
		"thai": [
			"ดินแดนรกร้างอันเยือกแข็ง เวลาของสแนร์เกิลกำลังจะหยุดลง",
			"ในความทรงจำที่หายไป เขาสะกดรอยตามเพียง 'สมบัติ' เท่านั้น",
			"แต่สมบัติชิ้นนั้น ไม่อาจได้คืนมาด้วยการต่อสู้",
			"ในขณะที่รูนสุดท้ายถูกถอดรหัส ม่านแห่งโศกนาฏกรรมทั้งหมดก็เปิดขึ้น"
		],
		"hindi": [
			"जमी हुई बंजर भूमि। स्नार्गल का समय थम रहा था।",
			"खोई हुई यादों में, वह केवल 'खजाने' की तलाश में था।",
			"लेकिन वह खजाना, युद्ध से वापस नहीं पाया जा सकता था।",
			"अंतिम रुन के डीकोड होते ही, सभी त्रासदियों का मंचन शुरू हो गया।"
		]
	}
} as const;
