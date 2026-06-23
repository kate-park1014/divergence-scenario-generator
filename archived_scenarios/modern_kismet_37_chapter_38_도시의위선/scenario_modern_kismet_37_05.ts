export const scenario_modern_kismet_37_05 = {
	"scenario_id": "modern_kismet_37_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_AncientOath_Kismet_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 핵심 서버룸. 고대 신전처럼 변모한 공간에 압도적인 에너지가 흘렀다.",
						"english": "The city's core server room. Overwhelming energy flowed through the space, transformed like an ancient temple.",
						"japanese": "都市の核となるサーバールーム。古代神殿のように変貌した空間に、圧倒的なエネルギーが満ちていた。",
						"chinese": "城市核心服务器室。空间如古老神殿般变幻，磅礴能量流淌其中。",
						"french": "La salle des serveurs centrale de la ville. Une énergie écrasante traversait l'espace, transformé comme un ancien temple.",
						"spanish": "La sala principal de servidores de la ciudad. Una energía abrumadora fluía por el espacio, transformado como un antiguo templo.",
						"vietnamese": "Phòng máy chủ cốt lõi của thành phố. Năng lượng áp đảo tràn ngập không gian, biến đổi như một ngôi đền cổ.",
						"thai": "ห้องเซิร์ฟเวอร์หลักของเมือง พลังงานอันมหาศาลไหลเวียนอยู่ในพื้นที่ที่เปลี่ยนแปลงไปราวกับวิหารโบราณ",
						"hindi": "शहर का मुख्य सर्वर रूम। प्राचीन मंदिर की तरह परिवर्तित स्थान से जबरदस्त ऊर्जा बह रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 도시의 심장?",
						"english": "This... is the city's heart?",
						"japanese": "ここが…都市の心臓？",
						"chinese": "这里是…城市的心脏？",
						"french": "C'est... le cœur de la ville ?",
						"spanish": "¿Este... es el corazón de la ciudad?",
						"vietnamese": "Đây... là trái tim của thành phố?",
						"thai": "นี่คือ... ใจกลางของเมืองงั้นหรือ?",
						"hindi": "यह... शहर का दिल है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군요. 여기까지 올 줄 알았어요.",
						"english": "You've arrived. I knew you'd make it this far.",
						"japanese": "来ましたね。ここまで来ると思っていました。",
						"chinese": "你来了。我就知道你能走到这里。",
						"french": "Vous êtes là. Je savais que vous iriez si loin.",
						"spanish": "Has llegado. Sabía que llegarías tan lejos.",
						"vietnamese": "Anh đã đến rồi. Tôi biết anh sẽ đến được đây.",
						"thai": "มาถึงแล้วสินะ ข้ารู้ว่าเจ้าจะมาถึงที่นี่ได้",
						"hindi": "तुम आ गए। मुझे पता था तुम यहाँ तक पहुँच जाओगे।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "린… 네가 왜 여기에.",
						"english": "Lynn... why are you here?",
						"japanese": "リン…なぜあなたがここに。",
						"chinese": "琳…你为什么会在这里。",
						"french": "Lynn... pourquoi es-tu ici ?",
						"spanish": "Lynn... ¿por qué estás aquí?",
						"vietnamese": "Lynn... sao em lại ở đây?",
						"thai": "ลินน์... ทำไมเจ้าถึงมาอยู่ที่นี่",
						"hindi": "लिन... तुम यहाँ क्यों हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "전 시스템의 일부였으니까요. 아니, 지금도 그렇다고 해야 하나…",
						"english": "Because I was part of the system. Or rather, I still am...",
						"japanese": "私はシステムの一部でしたから。いえ、今もそうだとでも言うべきでしょうか…",
						"chinese": "因为我曾是系统的一部分。不，或许现在也是…",
						"french": "Parce que je faisais partie du système. Ou plutôt, je le suis toujours...",
						"spanish": "Porque yo era parte del sistema. O más bien, ¿todavía lo soy?",
						"vietnamese": "Vì tôi từng là một phần của hệ thống. Hay đúng hơn, có lẽ bây giờ vẫn vậy...",
						"thai": "เพราะข้าเคยเป็นส่วนหนึ่งของระบบ หรือจะบอกว่าตอนนี้ก็ยังเป็นอยู่ดีล่ะ...",
						"hindi": "क्योंकि मैं सिस्टम का हिस्सा थी। नहीं, बल्कि मुझे कहना चाहिए कि अभी भी हूँ..."
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "제가 안내했던 모든 것이… 조작이었어요. 당신이 믿었던 번영도.",
						"english": "Everything I guided you to... was a manipulation. Even the prosperity you believed in.",
						"japanese": "私が案内したすべてが…ねつ造でした。あなたが信じた繁栄も。",
						"chinese": "我所引导的一切…都是一场骗局。包括你所相信的繁荣。",
						"french": "Tout ce que je vous ai montré... n'était qu'une manipulation. Même la prospérité à laquelle vous croyiez.",
						"spanish": "Todo lo que te guié... fue una manipulación. Incluso la prosperidad en la que creías.",
						"vietnamese": "Mọi thứ tôi hướng dẫn anh... đều là sự thao túng. Ngay cả sự thịnh vượng mà anh tin tưởng.",
						"thai": "ทุกสิ่งที่ข้าแนะนำเจ้าไป... ล้วนเป็นการบิดเบือน แม้แต่ความรุ่งเรืองที่เจ้าเชื่อมั่น",
						"hindi": "मैंने तुम्हें जो कुछ भी दिखाया... वह सब हेरफेर था। यहां तक कि जिस समृद्धि पर तुम विश्वास करते थे, वह भी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 우리를 속였단 말이야?",
						"english": "You... deceived us?",
						"japanese": "あなたが…私たちを欺いたと？",
						"chinese": "你…欺骗了我们？",
						"french": "Tu... nous as trompés ?",
						"spanish": "¿Tú... nos engañaste?",
						"vietnamese": "Em... đã lừa dối chúng tôi sao?",
						"thai": "เจ้า... หลอกลวงพวกเรางั้นหรือ?",
						"hindi": "तुमने... हमें धोखा दिया?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "키스메트… 그가 저를 조종했어요. 이 도시의 모든 것을.",
						"english": "Kismet... he controlled me. And everything in this city.",
						"japanese": "キスメット…彼が私を操っていました。この都市のすべてを。",
						"chinese": "基斯梅特…他操纵了我。以及这座城市的一切。",
						"french": "Kismet... il me contrôlait. Et tout dans cette ville.",
						"spanish": "Kismet... él me controló. Y todo en esta ciudad.",
						"vietnamese": "Kismet... hắn đã điều khiển tôi. Và mọi thứ trong thành phố này.",
						"thai": "คิสเมท... เขาบงการข้า และทุกสิ่งในเมืองนี้",
						"hindi": "किस्मेट... उसने मुझे नियंत्रित किया। और इस शहर की हर चीज़ को।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "거부할 수 없는 명령이었죠. 도시가 살아있는 한… 모두 그에게 종속될 수밖에 없어요.",
						"english": "It was an irresistible command. As long as the city lives... everyone is bound to him.",
						"japanese": "拒否できない命令でした。都市が生きている限り…皆、彼に隷属するしかないのです。",
						"chinese": "那是无法拒绝的命令。只要城市还存在…所有人都只能臣服于他。",
						"french": "C'était un ordre irrésistible. Tant que la ville vit... tous lui sont asservis.",
						"spanish": "Fue una orden irresistible. Mientras la ciudad viva... todos están sujetos a él.",
						"vietnamese": "Đó là một mệnh lệnh không thể chối từ. Chừng nào thành phố còn tồn tại... mọi người đều phải phụ thuộc vào hắn.",
						"thai": "มันเป็นคำสั่งที่มิอาจปฏิเสธได้ ตราบใดที่เมืองนี้ยังคงอยู่... ทุกคนก็ต้องอยู่ภายใต้การปกครองของเขา",
						"hindi": "यह एक अप्रतिरोध्य आदेश था। जब तक शहर जीवित है... हर कोई उसके अधीन रहने को मजबूर है।"
					},
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "키스메트가 누구인데? 왜 이런 짓을…",
						"english": "Who is Kismet? Why is he doing this...?",
						"japanese": "キスメットとは誰だ？なぜこんなことを…",
						"chinese": "基斯梅特是谁？他为什么要这么做…",
						"french": "Qui est Kismet ? Pourquoi fait-il ça... ?",
						"spanish": "¿Quién es Kismet? ¿Por qué hace esto...?",
						"vietnamese": "Kismet là ai? Tại sao hắn lại làm điều này...?",
						"thai": "คิสเมทเป็นใคร? ทำไมเขาถึงทำแบบนี้...?",
						"hindi": "किस्मेट कौन है? वह ऐसा क्यों कर रहा है...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그는 이 도시의 영혼이에요. 수백 년 전 육신을 잃고 도시와 하나가 된 존재.",
						"english": "He is the soul of this city. A being who lost his body centuries ago and became one with the city.",
						"japanese": "彼はこの都市の魂です。数百年前、肉体を失い都市と一体になった存在。",
						"chinese": "他是这座城市的灵魂。一个在几百年前失去肉体，与城市融为一体的存在。",
						"french": "Il est l'âme de cette ville. Un être qui a perdu son corps il y a des siècles et qui a fusionné avec la ville.",
						"spanish": "Él es el alma de esta ciudad. Un ser que perdió su cuerpo hace siglos y se fusionó con la ciudad.",
						"vietnamese": "Hắn là linh hồn của thành phố này. Một thực thể đã mất đi thể xác hàng trăm năm trước và trở thành một với thành phố.",
						"thai": "เขาคือจิตวิญญาณของเมืองนี้ สิ่งมีชีวิตที่สูญเสียร่างกายไปเมื่อหลายร้อยปีก่อน และหลอมรวมเป็นหนึ่งเดียวกับเมืองนี้",
						"hindi": "वह इस शहर की आत्मा है। एक ऐसा प्राणी जिसने सदियों पहले अपना शरीर खो दिया और शहर के साथ एक हो गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "자신의 업보로 속박되어, 영원히 고통받고 있죠.",
						"english": "Bound by his karma, suffering eternally.",
						"japanese": "自身の業に縛られ、永遠に苦しんでいる。",
						"chinese": "被自己的业力束缚，永世受苦。",
						"french": "Lié par son karma, il souffre éternellement.",
						"spanish": "Atado por su karma, sufre eternamente.",
						"vietnamese": "Bị nghiệp lực trói buộc, vĩnh viễn thống khổ.",
						"thai": "ถูกพันธนาการด้วยกรรมของตนเอง ทนทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "अपने कर्मों से बंधा, अनंत काल तक पीड़ित।"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 모든 번영은… 그의 고통 위에서 세워진 허상이에요.",
						"english": "All this prosperity... is an illusion built upon his suffering.",
						"japanese": "この繁栄は…彼の苦痛の上に築かれた虚像に過ぎない。",
						"chinese": "所有这些繁荣……都是建立在他痛苦之上的幻象。",
						"french": "Toute cette prospérité... n'est qu'une illusion bâtie sur sa souffrance.",
						"spanish": "Toda esta prosperidad... es una ilusión construida sobre su sufrimiento.",
						"vietnamese": "Tất cả sự thịnh vượng này... chỉ là ảo ảnh được xây dựng trên nỗi đau của hắn.",
						"thai": "ความเจริญรุ่งเรืองทั้งหมดนี้... เป็นเพียงภาพลวงตาที่สร้างขึ้นจากความทุกข์ทรมานของเขา",
						"hindi": "यह सारी समृद्धि... उसकी पीड़ा पर बनी एक भ्रांति है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그는 자신의 왕국이자 감옥인 이 도시를 지키기 위해 모든 것을 조작했어요.",
						"english": "He manipulated everything to protect this city, his kingdom and his prison.",
						"japanese": "彼はこの都市、自身の王国であり牢獄を守るため、すべてを操った。",
						"chinese": "他操纵了一切，只为守护这座城市，他的王国，也是他的牢笼。",
						"french": "Il a tout manipulé pour protéger cette ville, son royaume et sa prison.",
						"spanish": "Manipuló todo para proteger esta ciudad, su reino y su prisión.",
						"vietnamese": "Hắn đã thao túng mọi thứ để bảo vệ thành phố này, vương quốc và nhà tù của hắn.",
						"thai": "เขาบงการทุกสิ่งเพื่อปกป้องเมืองนี้ ทั้งอาณาจักรและคุกของเขา",
						"hindi": "उसने इस शहर को बचाने के लिए सब कुछ हेरफेर किया, जो उसका राज्य और उसकी जेल दोनों थी।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "그 고통을 끝내기 위해서?",
						"english": "To end that suffering?",
						"japanese": "その苦痛を終わらせるために？",
						"chinese": "为了结束那痛苦？",
						"french": "Pour mettre fin à cette souffrance ?",
						"spanish": "¿Para acabar con ese sufrimiento?",
						"vietnamese": "Để chấm dứt nỗi đau đó sao?",
						"thai": "เพื่อจบความทุกข์ทรมานนั้น?",
						"hindi": "उस पीड़ा को समाप्त करने के लिए?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어쩌면… 그는 당신을 기다려왔을지도 몰라요. 자신의 구원이 되어줄 존재를.",
						"english": "Perhaps... he has been waiting for you. For someone to be his salvation.",
						"japanese": "もしかしたら…彼はあなたを待っていたのかもしれない。自身の救いとなる存在を。",
						"chinese": "或许……他一直在等你。等待成为他救赎的存在。",
						"french": "Peut-être... vous attendait-il. Quelqu'un qui serait son salut.",
						"spanish": "Quizás... te ha estado esperando. A alguien que sea su salvación.",
						"vietnamese": "Có lẽ... hắn đã chờ đợi ngươi. Một người sẽ là cứu rỗi của hắn.",
						"thai": "บางที... เขาอาจจะรอคุณมาตลอด รอใครสักคนที่จะเป็นผู้ช่วยให้รอดของเขา",
						"hindi": "शायद... वह तुम्हारा इंतज़ार कर रहा था। कोई ऐसा जो उसकी मुक्ति बन सके।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구원이든, 파멸이든… 끝을 내야 해.",
						"english": "Salvation or ruin... it must end.",
						"japanese": "救いであれ、破滅であれ…終わらせなければならない。",
						"chinese": "无论是救赎还是毁灭……都必须终结。",
						"french": "Salut ou ruine... il faut que ça se termine.",
						"spanish": "Salvación o ruina... debe terminar.",
						"vietnamese": "Dù là cứu rỗi hay hủy diệt... cũng phải kết thúc.",
						"thai": "ไม่ว่าจะรอดหรือพินาศ... ต้องจบลง",
						"hindi": "मुक्ति हो या विनाश... इसका अंत होना चाहिए।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "down"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "…끝인가. 결국… 영원한 속박에서 벗어나는구나…",
						"english": "...Is this the end? Finally... I'm free from eternal bondage...",
						"japanese": "…終わりか。ついに…永遠の束縛から解放されるのか…。",
						"chinese": "…结束了吗。最终…我摆脱了永恒的束缚…。",
						"french": "...C'est la fin ? Enfin… je me libère de l'éternel esclavage...",
						"spanish": "...¿Es el fin? Al final... me libero de la eterna atadura...",
						"vietnamese": "…Kết thúc rồi sao. Cuối cùng… ta cũng thoát khỏi xiềng xích vĩnh cửu…",
						"thai": "...จบแล้วหรือนี่? ในที่สุด... ข้าก็เป็นอิสระจากพันธนาการชั่วนิรันดร์...",
						"hindi": "...क्या यह अंत है? आखिरकार... मैं शाश्वत बंधन से मुक्त हो गया..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 해방이 맞을까.",
						"english": "Is this... truly liberation?",
						"japanese": "これが…本当に解放なのだろうか。",
						"chinese": "这…真的是解放吗。",
						"french": "Est-ce… vraiment la libération ?",
						"spanish": "¿Es esto... realmente la liberación?",
						"vietnamese": "Đây… có thật sự là sự giải thoát không.",
						"thai": "นี่... คืออิสรภาพจริงๆ หรือเปล่า?",
						"hindi": "क्या यह... वाकई मुक्ति है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 심장이 멎었다. 시스템의 번영은 끝났다.",
						"english": "The city's heart has stopped. The system's prosperity has ended.",
						"japanese": "都市の心臓が止まった。システムの繁栄は終わった。",
						"chinese": "城市的心脏停止了。系统的繁荣已终结。",
						"french": "Le cœur de la ville s'est arrêté. La prospérité du système a pris fin.",
						"spanish": "El corazón de la ciudad se ha detenido. La prosperidad del sistema ha terminado.",
						"vietnamese": "Trái tim của thành phố đã ngừng đập. Sự thịnh vượng của hệ thống đã kết thúc.",
						"thai": "หัวใจของเมืองหยุดเต้นแล้ว ความรุ่งเรืองของระบบได้สิ้นสุดลง",
						"hindi": "शहर का दिल धड़कना बंद हो गया है। सिस्टम की समृद्धि खत्म हो गई है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만 그 끝은… 새로운 시작일까. 혹은 또 다른 혼돈의 서막일까.",
						"english": "But is this end... a new beginning? Or the prelude to yet another chaos?",
						"japanese": "しかし、この終わりは…新たな始まりなのだろうか。それとも、また別の混沌の序幕なのだろうか。",
						"chinese": "但这个结局…会是新的开始吗。亦或是另一场混乱的序幕。",
						"french": "Mais cette fin… est-elle un nouveau commencement ? Ou le prélude à un autre chaos ?",
						"spanish": "Pero este final... ¿es un nuevo comienzo? ¿O el preludio de otro caos?",
						"vietnamese": "Nhưng cái kết này… có phải là một khởi đầu mới không. Hay là khúc dạo đầu cho một hỗn loạn khác.",
						"thai": "แต่จุดจบนี้... จะเป็นการเริ่มต้นใหม่หรือเปล่า? หรือเป็นเพียงปฐมบทของความโกลาหลครั้งใหม่กันแน่?",
						"hindi": "लेकिन क्या यह अंत... एक नई शुरुआत है? या एक और अराजकता का प्रस्तावना?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 나의 고통은 영원하다. 너희도 마찬가지일 것이다!",
						"english": "Insignificant beings. My pain is eternal. Yours will be too!",
						"japanese": "くだらない者たちめ。私の苦痛は永遠だ。お前たちも同じことだろう！",
						"chinese": "卑微之物。我的痛苦是永恒的。你们也将如此！",
						"french": "Êtres insignifiants. Ma douleur est éternelle. La vôtre le sera aussi !",
						"spanish": "Seres insignificantes. Mi dolor es eterno. ¡El vuestro también lo será!",
						"vietnamese": "Những kẻ ti tiện. Nỗi đau của ta là vĩnh cửu. Các ngươi cũng sẽ như vậy!",
						"thai": "พวกไร้ค่า! ความเจ็บปวดของข้าคือชั่วนิรันดร์ เจ้าก็จะเจอแบบเดียวกัน!",
						"hindi": "तुच्छ प्राणी। मेरा दर्द शाश्वत है। तुम्हारा भी वैसा ही होगा!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 우린… 반드시 널 멈출 거야.",
						"english": "It's not over yet. We'll... definitely stop you.",
						"japanese": "まだ終わっていない。私たちは…必ずお前を止める。",
						"chinese": "还没有结束。我们…一定会阻止你。",
						"french": "Ce n'est pas encore fini. Nous… t'arrêterons coûte que coûte.",
						"spanish": "Aún no ha terminado. Nosotros... te detendremos.",
						"vietnamese": "Vẫn chưa kết thúc đâu. Bọn ta… nhất định sẽ ngăn ngươi lại.",
						"thai": "ยังไม่จบหรอก พวกเรา... จะต้องหยุดเจ้าให้ได้",
						"hindi": "अभी खत्म नहीं हुआ है। हम... तुम्हें ज़रूर रोकेंगे।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유리 파편과 빛의 잔해 속에서, 도시의 심장이 모습을 드러냈다.",
						"english": "Amidst shards of glass and remnants of light, the city's heart revealed itself.",
						"japanese": "ガラスの破片と光の残骸の中、都市の心臓が姿を現した。",
						"chinese": "在玻璃碎片和光的残骸中，城市的心脏显露出来。",
						"french": "Au milieu des éclats de verre et des restes de lumière, le cœur de la ville se révéla.",
						"spanish": "Entre fragmentos de cristal y restos de luz, el corazón de la ciudad se reveló.",
						"vietnamese": "Giữa những mảnh vỡ thủy tinh và tàn dư ánh sáng, trái tim thành phố lộ diện.",
						"thai": "ท่ามกลางเศษแก้วและซากแสงสว่าง หัวใจของเมืองก็ปรากฏขึ้น",
						"hindi": "कांच के टुकड़ों और प्रकाश के अवशेषों के बीच, शहर का हृदय प्रकट हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 수정체에 얽매인 푸른 오팔빛 영혼. 그것이 키스메트였다.",
						"english": "A blue opalescent soul bound within a colossal crystal. That was Kismet.",
						"japanese": "巨大な水晶体に縛られた青いオパール色の魂。それがキスメットだった。",
						"chinese": "一个被巨大水晶束缚的蓝色蛋白石般灵魂。那便是宿命（Kismet）。",
						"french": "Une âme opaline bleue liée dans un cristal colossal. C'était Kismet.",
						"spanish": "Un alma azul opalescente atada dentro de un cristal colosal. Ese era Kismet.",
						"vietnamese": "Một linh hồn màu xanh opan bị trói buộc trong một khối tinh thể khổng lồ. Đó là Kismet.",
						"thai": "ดวงวิญญาณสีโอปอลสีน้ำเงินถูกพันธนาการไว้ในผลึกขนาดมหึมา นั่นคือ Kismet",
						"hindi": "एक विशाल क्रिस्टल के भीतर बंधी नीली ओपलेसेंट आत्मा। वह क़िस्मत था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…보았느냐? 나의 왕국이자 나의 무덤인 이 거대한 철창을!",
						"english": "...Do you see? This colossal iron cage, my kingdom and my tomb!",
						"japanese": "…見たか？我が王国にして我が墓である、この巨大な鉄格子を！",
						"chinese": "……你看到了吗？这个巨大的铁笼，我的王国，也是我的坟墓！",
						"french": "...As-tu vu ? Cette cage de fer colossale, mon royaume et ma tombe !",
						"spanish": "...¿Lo has visto? ¡Esta colosal jaula de hierro, mi reino y mi tumba!",
						"vietnamese": "...Ngươi thấy không? Cái lồng sắt khổng lồ này, vương quốc và nấm mồ của ta!",
						"thai": "…เห็นหรือไม่? กรงเหล็กมหึมาแห่งนี้ อาณาจักรและหลุมศพของข้า!",
						"hindi": "...क्या तुमने देखा? यह विशाल लोहे का पिंजरा, मेरा राज्य और मेरी कब्र!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나는 영원히 이 도시의 심장부에서 고통받으며 너희를 기다렸다.",
						"english": "I have suffered eternally in the heart of this city, waiting for you all.",
						"japanese": "私はこの都市の心臓部で永遠に苦しみながら、お前たちを待っていた。",
						"chinese": "我在这座城市的心脏深处永恒地受苦，等待着你们。",
						"french": "J'ai souffert éternellement au cœur de cette ville, vous attendant tous.",
						"spanish": "He sufrido eternamente en el corazón de esta ciudad, esperándoos a todos.",
						"vietnamese": "Ta đã vĩnh viễn chịu đựng nỗi đau ở trung tâm thành phố này, chờ đợi các ngươi.",
						"thai": "ข้าได้ทนทุกข์ทรมานชั่วนิรันดร์ในใจกลางเมืองนี้ รอคอยพวกเจ้าทุกคน",
						"hindi": "मैं इस शहर के हृदय में अनंत काल तक पीड़ित रहा, तुम सबका इंतजार कर रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 고통 때문에… 모두가 희생됐어.",
						"english": "Because of your pain... everyone was sacrificed.",
						"japanese": "あなたの苦痛のせいで…皆が犠牲になった。",
						"chinese": "因为你的痛苦…所有人都牺牲了。",
						"french": "À cause de ta souffrance… tous ont été sacrifiés.",
						"spanish": "Por tu dolor... todos fueron sacrificados.",
						"vietnamese": "Vì nỗi đau của ngươi… tất cả đã phải hy sinh.",
						"thai": "เพราะความเจ็บปวดของเจ้า... ทุกคนต้องสังเวย",
						"hindi": "तुम्हारे दर्द की वजह से... सबकी बलि चढ़ गई।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "나의 구원이 될지, 파멸이 될지는… 너희의 운명에 달렸다!",
						"english": "Whether you become my salvation or my ruin... depends on your fate!",
						"japanese": "私の救いとなるか、破滅となるか…それはお前たちの運命にかかっている！",
						"chinese": "你们会成为我的救赎，还是我的毁灭…取决于你们的命运！",
						"french": "Que vous deveniez mon salut ou ma ruine… cela dépend de votre destin !",
						"spanish": "Si seréis mi salvación o mi perdición... ¡depende de vuestro destino!",
						"vietnamese": "Ngươi sẽ là cứu rỗi hay sự diệt vong của ta… tùy thuộc vào vận mệnh của các ngươi!",
						"thai": "เจ้าจะเป็นผู้ช่วยให้รอดหรือผู้ทำลายล้าง... ขึ้นอยู่กับโชคชะตาของเจ้า!",
						"hindi": "तुम मेरा मोक्ष बनोगे या मेरा विनाश... यह तुम्हारे भाग्य पर निर्भर करता है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제, 나를 해방시켜라… 혹은 나와 함께 영원히 사라져라!",
						"english": "Now, set me free... or vanish with me forever!",
						"japanese": "さあ、私を解放せよ…さもなくば、私と共に永遠に消え去れ！",
						"chinese": "现在，解放我…或者与我一同永远消失吧！",
						"french": "Maintenant, libérez-moi… ou disparaissez avec moi pour l'éternité !",
						"spanish": "Ahora, libérame... ¡o desaparece conmigo para siempre!",
						"vietnamese": "Giờ thì, hãy giải thoát ta… hoặc cùng ta biến mất mãi mãi!",
						"thai": "บัดนี้ จงปลดปล่อยข้า... หรือไม่ก็หายไปพร้อมกับข้าชั่วนิรันดร์!",
						"hindi": "अब, मुझे आज़ाद करो... या मेरे साथ हमेशा के लिए मिट जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"도시의 심장이 멎자, 모든 빛이 사그라들었다.",
			"시스템의 통제는 끝났지만, 남은 것은 폐허와 혼란뿐이었다.",
			"이것이 해방인가. 아니면 또 다른 비극의 시작인가.",
			"정의는 구현되었을지언정, 고통의 그림자는 쉽사리 걷히지 않았다.",
			"고요한 도시 위로, 알 수 없는 운명의 별빛이 쏟아졌다."
		],
		"english": [
			"As the city's heart ceased, all light faded.",
			"System control ended, but only ruins and chaos remained.",
			"Is this liberation? Or the start of another tragedy?",
			"Justice may have been served, but the shadow of pain lingered.",
			"Above the silent city, starlight of unknown destiny poured down."
		],
		"japanese": [
			"都市の心臓が止まると、全ての光が消え去った。",
			"システムの制御は終わったが、残ったのは廃墟と混乱だけだった。",
			"これが解放なのか。それとも、別の悲劇の始まりなのか。",
			"正義は果たされたかもしれないが、苦痛の影は容易に晴れなかった。",
			"静かな都市の上空に、未知の運命の星明かりが降り注いだ。"
		],
		"chinese": [
			"城之心脏停搏，所有光芒随之黯淡。",
			"系统之控制已终结，然仅剩废墟与混乱。",
			"此乃解放？抑或另一悲剧之始？",
			"正义或许已然实现，但痛苦之阴影挥之不去。",
			"静谧城市之上，倾泻着未知命运的星光。"
		],
		"french": [
			"Lorsque le cœur de la ville cessa, toute lumière s'éteignit.",
			"Le contrôle du système prit fin, mais il ne restait que ruines et chaos.",
			"Est-ce la libération ? Ou le début d'une autre tragédie ?",
			"La justice a peut-être été rendue, mais l'ombre de la douleur persistait.",
			"Au-dessus de la ville silencieuse, la lumière des étoiles d'un destin inconnu se déversait."
		],
		"spanish": [
			"Cuando el corazón de la ciudad se detuvo, toda la luz se desvaneció.",
			"El control del sistema terminó, pero solo quedaron ruinas y caos.",
			"¿Es esto liberación? ¿O el inicio de otra tragedia?",
			"Aunque la justicia se haya cumplido, la sombra del dolor no se disipó fácilmente.",
			"Sobre la ciudad silenciosa, la luz de las estrellas de un destino desconocido se derramó."
		],
		"vietnamese": [
			"Khi trái tim thành phố ngừng đập, mọi ánh sáng đều lụi tàn.",
			"Kiểm soát hệ thống đã kết thúc, nhưng chỉ còn lại đổ nát và hỗn loạn.",
			"Đây là sự giải phóng ư? Hay là khởi đầu của một bi kịch khác?",
			"Dù công lý đã được thực thi, bóng tối của nỗi đau không dễ dàng tan biến.",
			"Trên thành phố tĩnh lặng, ánh sao của vận mệnh không rõ đổ xuống."
		],
		"thai": [
			"เมื่อหัวใจของเมืองหยุดเต้น แสงสว่างทั้งมวลก็จางหายไป",
			"การควบคุมของระบบสิ้นสุดลง แต่สิ่งที่เหลืออยู่มีเพียงซากปรักหักพังและความวุ่นวาย",
			"นี่คืออิสรภาพหรือจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่กันแน่?",
			"แม้ความยุติธรรมจะถูกนำมาใช้ แต่เงามืดแห่งความเจ็บปวดก็ยังคงอยู่ไม่จางหาย",
			"เหนือเมืองอันเงียบสงบ แสงดาวแห่งโชคชะตาที่ไม่อาจล่วงรู้ได้สาดส่องลงมา"
		],
		"hindi": [
			"जैसे ही शहर का दिल धड़का, सारी रोशनी फीकी पड़ गई।",
			"सिस्टम नियंत्रण समाप्त हो गया, लेकिन केवल खंडहर और अराजकता शेष थी।",
			"क्या यह मुक्ति है? या किसी और त्रासदी की शुरुआत?",
			"न्याय भले ही मिल गया हो, लेकिन दर्द की छाया आसानी से दूर नहीं हुई।",
			"शांत शहर के ऊपर, अज्ञात नियति का तारों का प्रकाश बरस रहा था।"
		]
	},
	"prologue": {
		"korean": [
			"번영하는 도시의 심장부.",
			"수백 년 이어진 시스템의 굳건한 규칙이 마침내 무너지는 곳.",
			"모든 진실을 아는 자와, 모든 것을 조작한 자가 기다리고 있다.",
			"구원인가, 파멸인가. 도시의 운명을 건 최후의 선택이 임박했다."
		],
		"english": [
			"Heart of a prosperous city.",
			"Where centuries-old system's firm rules finally crumble.",
			"The one who knows all truths, and the one who manipulated all, await.",
			"Salvation or ruin? The city's fate hangs on a final choice."
		],
		"japanese": [
			"繁栄する都市の心臓部。",
			"何世紀も続いたシステムの堅固な規則がついに崩壊する場所。",
			"全ての真実を知る者と、全てを操る者が待っている。",
			"救済か、破滅か。都市の運命を賭けた最後の選択が迫る。"
		],
		"chinese": [
			"繁荣都市的心脏。",
			"百年系统之坚固法则，终将在此崩塌。",
			"知晓一切真相者与操纵一切者，正等待着。",
			"救赎亦或毁灭？关乎城市命运的最终选择迫在眉睫。"
		],
		"french": [
			"Au cœur d'une cité prospère.",
			"Là où les règles immuables d'un système séculaire s'effondrent enfin.",
			"Celui qui sait tout, et celui qui a tout manipulé, attendent.",
			"Salut ou ruine ? Le destin de la ville repose sur un choix final."
		],
		"spanish": [
			"El corazón de una ciudad próspera.",
			"Donde las férreas reglas de un sistema centenario finalmente se desmoronan.",
			"El que conoce todas las verdades y el que manipuló todo, aguardan.",
			"¿Salvación o ruina? La última elección, que decidirá el destino de la ciudad, es inminente."
		],
		"vietnamese": [
			"Trái tim của một thành phố thịnh vượng.",
			"Nơi những quy tắc vững chắc của hệ thống trăm năm cuối cùng sụp đổ.",
			"Người biết mọi sự thật và kẻ thao túng mọi thứ đang chờ đợi.",
			"Cứu rỗi hay diệt vong? Lựa chọn cuối cùng định đoạt vận mệnh thành phố đã cận kề."
		],
		"thai": [
			"ใจกลางเมืองอันรุ่งเรือง",
			"ที่ซึ่งกฎอันมั่นคงของระบบที่ยืนยงมาหลายศตวรรษกำลังพังทลายลง",
			"ผู้รู้แจ้งทุกความจริง และผู้บงการทุกสิ่ง กำลังรอคอย",
			"ความรอดหรือหายนะ? ทางเลือกสุดท้ายที่เดิมพันชะตากรรมของเมืองใกล้เข้ามาแล้ว"
		],
		"hindi": [
			"एक समृद्ध शहर का हृदय।",
			"जहाँ सदियों पुराने सिस्टम के अटल नियम अंततः बिखर जाते हैं।",
			"जो सभी सत्य जानता है, और जिसने सब कुछ हेरफेर किया, वे प्रतीक्षा कर रहे हैं।",
			"मुक्ति या विनाश? शहर की नियति पर अंतिम विकल्प आसन्न है।"
		]
	}
} as const;
