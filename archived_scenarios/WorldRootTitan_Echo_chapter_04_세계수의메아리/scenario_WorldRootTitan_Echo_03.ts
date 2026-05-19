export const scenario_WorldRootTitan_Echo_03 = {
	"scenario_id": "WorldRootTitan_Echo_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"카인의 진실은 숲을 폭주시켰다.",
			"폐허가 된 수호대 기지, 의문의 학자가 기다린다.",
			"그녀는 세계수의 비밀을 말하지만… 그 대가는 무엇일까?",
			"새로운 질서, 혹은 또 다른 혼돈 속으로."
		],
		"english": [
			"Cain's truth unleashed the forest's rampage.",
			"Ruined Guardian HQ. An enigmatic scholar awaits.",
			"She speaks of the World Tree's secret... but at what cost?",
			"Into a new order, or yet another chaos."
		],
		"japanese": [
			"カインの真実は森を暴走させた。",
			"荒廃した守護隊基地、謎の学者が待つ。",
			"彼女は世界樹の秘密を語るが…その代償は？",
			"新たな秩序へ、あるいは別の混沌へ。"
		],
		"chinese": [
			"凯因的真相使森林暴走。",
			"废弃的守护队基地，一位神秘学者正在等待。",
			"她揭示世界树的秘密……但代价是什么？",
			"走向新的秩序，亦或是另一场混乱。"
		],
		"french": [
			"La vérité de Caïn a déchaîné la fureur de la forêt.",
			"QG des Gardiens en ruines. Une érudite énigmatique attend.",
			"Elle révèle le secret de l'Arbre-Monde... mais à quel prix ?",
			"Vers un nouvel ordre, ou un autre chaos."
		],
		"spanish": [
			"La verdad de Caín desató el furor del bosque.",
			"Cuartel General de los Guardianes en ruinas. Una enigmática erudita aguarda.",
			"Ella revela el secreto del Árbol del Mundo... pero ¿a qué precio?",
			"Hacia un nuevo orden, o un caos más."
		],
		"vietnamese": [
			"Sự thật về Cain đã khiến khu rừng nổi loạn.",
			"Trụ sở Đội Hộ Vệ hoang tàn. Một học giả bí ẩn đang chờ đợi.",
			"Nàng kể về bí mật của Cây Thế Giới... nhưng cái giá là gì?",
			"Vào một trật tự mới, hay một sự hỗn loạn khác."
		],
		"thai": [
			"ความจริงของเคนปลุกป่าให้คลั่ง",
			"ฐานทัพผู้พิทักษ์ที่พังทลาย, นักวิชาการปริศนารออยู่",
			"เธอบอกความลับของเวิลด์ทรี...แต่ต้องแลกด้วยอะไร?",
			"สู่ระเบียบใหม่ หรือความวุ่นวายอีกครั้ง"
		],
		"hindi": [
			"केन के सच ने जंगल को बेकाबू कर दिया।",
			"खंडहर हो चुका गार्जियन मुख्यालय। एक रहस्यमयी विद्वान इंतज़ार कर रहा है।",
			"वह विश्व वृक्ष का रहस्य बताती है… लेकिन उसकी कीमत क्या होगी?",
			"एक नई व्यवस्था में, या फिर एक और अराजकता में।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 수호대 기지. 카인의 흔적이 가득했다.",
						"english": "Ruined Guardian HQ. Cain's traces were everywhere.",
						"japanese": "荒廃した守護隊基地。カインの痕跡で満ちていた。",
						"chinese": "废弃的守护队基地。凯因的痕迹随处可见。",
						"french": "QG des Gardiens en ruines. Les traces de Caïn étaient partout.",
						"spanish": "Cuartel General de los Guardianes en ruinas. Las huellas de Caín estaban por todas partes.",
						"vietnamese": "Trụ sở Đội Hộ Vệ hoang tàn. Dấu vết của Cain tràn ngập khắp nơi.",
						"thai": "ฐานทัพผู้พิทักษ์ที่พังทลาย ร่องรอยของเคนเต็มไปหมด",
						"hindi": "खंडहर हो चुका गार्जियन मुख्यालय। केन के निशान हर जगह थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "…왔군. 기다렸어.",
						"english": "...You've come. I've been waiting.",
						"japanese": "…来たな。待っていた。",
						"chinese": "……你来了。我一直在等你。",
						"french": "...Te voilà. Je t'attendais.",
						"spanish": "...Has llegado. Te he estado esperando.",
						"vietnamese": "…Ngươi đã đến. Ta đã chờ.",
						"thai": "...มาแล้วสินะ ฉันรออยู่",
						"hindi": "...तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "아이비. 카인의 남긴 잔재를 연구하는 학자.",
						"english": "Ivy. A scholar researching Cain's remnants.",
						"japanese": "アイビー。カインの残した残骸を研究する学者。",
						"chinese": "艾维。一位研究凯因遗迹的学者。",
						"french": "Ivy. Une érudite qui étudie les vestiges de Caïn.",
						"spanish": "Ivy. Una erudita que investiga los vestigios de Caín.",
						"vietnamese": "Ivy. Một học giả nghiên cứu tàn dư của Cain.",
						"thai": "ไอวี่ นักวิชาการที่ค้นคว้าซากที่เคนทิ้งไว้",
						"hindi": "आइवी। केन के अवशेषों पर शोध करने वाली एक विद्वान।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "세계수는 네가 아는 것과 달라. 그리고 카인도.",
						"english": "The World Tree is not what you know. Nor is Cain.",
						"japanese": "世界樹は君の知っているものとは違う。そしてカインも。",
						"chinese": "世界树与你所知的不同。凯因也一样。",
						"french": "L'Arbre-Monde n'est pas ce que tu crois. Ni Caïn.",
						"spanish": "El Árbol del Mundo no es lo que conoces. Ni Caín.",
						"vietnamese": "Cây Thế Giới không như ngươi biết. Và cả Cain cũng vậy.",
						"thai": "เวิลด์ทรีไม่เหมือนที่เจ้ารู้ จัก และเคนก็เช่นกัน",
						"hindi": "विश्व वृक्ष वैसा नहीं है जैसा तुम जानते हो। और न ही केन।"
					},
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "이 기록을 봐. 세계수는… 폭주하려는 게 아닐지도 몰라.",
						"english": "Look at this record. The World Tree... might not be going berserk.",
						"japanese": "この記録を見て。世界樹は…暴走しようとしているわけではないのかもしれない。",
						"chinese": "看这份记录。世界树…可能并非要暴走。",
						"french": "Regarde ce dossier. L'Arbre-Monde... ne serait peut-être pas en train de devenir fou.",
						"spanish": "Mira este registro. El Árbol del Mundo... quizá no esté descontrolándose.",
						"vietnamese": "Nhìn vào ghi chép này. Cây Thế giới... có lẽ không phải đang mất kiểm soát.",
						"thai": "ดูบันทึกนี่สิ. ต้นไม้โลก... อาจจะไม่ได้กำลังบ้าคลั่ง.",
						"hindi": "इस रिकॉर्ड को देखो। विश्व वृक्ष... शायद बेकाबू नहीं हो रहा है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "세계수는 스스로 정화하려 하고 있어. 폭주가 아니야.",
						"english": "The World Tree is trying to purify itself. It's not going berserk.",
						"japanese": "世界樹は自ら浄化しようとしている。暴走ではない。",
						"chinese": "世界树正在自我净化。这不是暴走。",
						"french": "L'Arbre-Monde essaie de se purifier. Ce n'est pas une folie.",
						"spanish": "El Árbol del Mundo está intentando purificarse. No es un descontrol.",
						"vietnamese": "Cây Thế giới đang cố gắng tự thanh lọc. Đó không phải là mất kiểm soát.",
						"thai": "ต้นไม้โลกกำลังพยายามชำระล้างตัวเอง. มันไม่ได้บ้าคลั่ง.",
						"hindi": "विश्व वृक्ष खुद को शुद्ध करने की कोशिश कर रहा है। यह बेकाबू नहीं हो रहा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정화?",
						"english": "Purification?",
						"japanese": "浄化？",
						"chinese": "净化？",
						"french": "Purification ?",
						"spanish": "¿Purificación?",
						"vietnamese": "Thanh lọc?",
						"thai": "ชำระล้าง?",
						"hindi": "शुद्धिकरण?"
					}
				},
				{
					"content": {
						"korean": "카인의 통제에서 벗어나 새로운 질서를 만들려는 거야.",
						"english": "It's trying to break free from Cain's control and create a new order.",
						"japanese": "カインの支配から逃れて、新しい秩序を作ろうとしているんだ。",
						"chinese": "它正试图摆脱凯恩的控制，创造新的秩序。",
						"french": "Il essaie de se libérer du contrôle de Caïn et de créer un nouvel ordre.",
						"spanish": "Está intentando liberarse del control de Caín y crear un nuevo orden.",
						"vietnamese": "Nó đang cố gắng thoát khỏi sự kiểm soát của Cain và tạo ra một trật tự mới.",
						"thai": "มันกำลังพยายามหลุดพ้นจากการควบคุมของเคนและสร้างระเบียบใหม่.",
						"hindi": "यह केन के नियंत्रण से मुक्त होकर एक नई व्यवस्था बनाना चाहता है।"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "날 도와. 그럼 숲의 진정한 비밀을 알려줄게.",
						"english": "Help me. Then I'll tell you the true secret of the forest.",
						"japanese": "私を助けて。そうすれば森の真の秘密を教えてあげる。",
						"chinese": "帮我。那样我就会告诉你森林真正的秘密。",
						"french": "Aide-moi. Je te révélerai alors le vrai secret de la forêt.",
						"spanish": "Ayúdame. Entonces te contaré el verdadero secreto del bosque.",
						"vietnamese": "Hãy giúp tôi. Rồi tôi sẽ tiết lộ bí mật thực sự của khu rừng cho bạn.",
						"thai": "ช่วยฉันสิ. แล้วฉันจะบอกความลับที่แท้จริงของป่าให้คุณรู้.",
						"hindi": "मेरी मदद करो। तब मैं तुम्हें जंगल का असली रहस्य बताऊंगा।"
					},
					"speaker": "ivy",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭘 바라는 거지?",
						"english": "What do you want?",
						"japanese": "何を望む？",
						"chinese": "你想要什么？",
						"french": "Que désires-tu ?",
						"spanish": "¿Qué quieres?",
						"vietnamese": "Bạn muốn gì?",
						"thai": "คุณต้องการอะไร?",
						"hindi": "तुम क्या चाहते हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 새로운 질서의 중심에 서고 싶어. 너도 날 도우면 원하는 걸 얻을 수 있을 거야.",
						"english": "I want to be at the center of the new order. If you help me, you can get what you want too.",
						"japanese": "私は新しい秩序の中心に立ちたい。あなたも私を助ければ、望むものを手に入れられるだろう。",
						"chinese": "我想要站在新秩序的中心。如果你也帮助我，你也能得到你想要的。",
						"french": "Je veux être au centre du nouvel ordre. Si tu m'aides, tu pourras aussi obtenir ce que tu désires.",
						"spanish": "Quiero estar en el centro del nuevo orden. Si me ayudas, tú también podrás conseguir lo que quieres.",
						"vietnamese": "Tôi muốn đứng ở trung tâm của trật tự mới. Nếu bạn giúp tôi, bạn cũng có thể đạt được điều mình muốn.",
						"thai": "ฉันต้องการยืนอยู่ใจกลางระเบียบใหม่. ถ้าคุณช่วยฉัน, คุณก็จะได้รับในสิ่งที่คุณต้องการเช่นกัน.",
						"hindi": "मैं नई व्यवस्था के केंद्र में खड़ा होना चाहता हूँ। अगर तुम मेरी मदद करोगे, तो तुम्हें भी जो चाहिए वह मिल जाएगा।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다가오는 자는 세계수의 정화 작용에 방해되는 존재.",
						"english": "He who approaches is an obstacle to the World Tree's purification.",
						"japanese": "近づく者は、世界樹の浄化作用の邪魔になる存在だ。",
						"chinese": "接近者是妨碍世界树净化作用的存在。",
						"french": "Celui qui approche est un obstacle à la purification de l'Arbre-Monde.",
						"spanish": "Quien se acerca es un obstáculo para la purificación del Árbol del Mundo.",
						"vietnamese": "Kẻ tiếp cận là một trở ngại cho quá trình thanh lọc của Cây Thế giới.",
						"thai": "ผู้ที่เข้ามาคืออุปสรรคต่อการชำระล้างของต้นไม้โลก.",
						"hindi": "जो कोई पास आता है, वह विश्व वृक्ष के शुद्धिकरण में बाधा है।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정화라고? 폭주가 아니라?",
						"english": "Purification? Not berserk?",
						"japanese": "浄化だと？暴走ではないと？",
						"chinese": "净化？而不是暴走？",
						"french": "Purification ? Pas la folie ?",
						"spanish": "¿Purificación? ¿No descontrol?",
						"vietnamese": "Thanh lọc ư? Không phải mất kiểm soát sao?",
						"thai": "ชำระล้างเหรอ? ไม่ใช่บ้าคลั่งเหรอ?",
						"hindi": "शुद्धिकरण? बेकाबू नहीं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"content": {
						"korean": "…그를 제거해야만, 더 깊은 곳으로 갈 수 있어.",
						"english": "...Only by eliminating him can we go deeper.",
						"japanese": "「…彼を排除してこそ、より深部へ進める。」",
						"chinese": "“……只有除掉他，才能深入。”",
						"french": "...Seulement en l'éliminant pourrons-nous aller plus loin.",
						"spanish": "...Solo eliminándolo podremos ir más profundo.",
						"vietnamese": "...Chỉ khi loại bỏ hắn, chúng ta mới có thể đi sâu hơn.",
						"thai": "...มีเพียงกำจัดเขาเท่านั้น เราถึงจะไปได้ลึกกว่านี้",
						"hindi": "...उसे खत्म करके ही, हम और गहरा जा सकते हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이용하는 거잖아.",
						"english": "You're just using him.",
						"japanese": "「利用しているだけだ。」",
						"chinese": "“你在利用他。”",
						"french": "Tu l'utilises, c'est tout.",
						"spanish": "Lo estás usando.",
						"vietnamese": "Ngươi đang lợi dụng hắn.",
						"thai": "นายกำลังใช้ประโยชน์จากเขาอยู่",
						"hindi": "तुम उसका इस्तेमाल कर रहे हो।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"content": {
						"korean": "그게 뭐든. 목적은 같잖아? 숲을 안정시키는 것.",
						"english": "Whatever it is. The goal is the same, isn't it? To stabilize the forest.",
						"japanese": "「それが何であれ。目的は同じだろう？森を安定させること。」",
						"chinese": "“无论那是什么。目的不是都一样吗？让森林稳定下来。”",
						"french": "Peu importe ce que c'est. Le but est le même, n'est-ce pas ? Stabiliser la forêt.",
						"spanish": "Sea lo que sea. El objetivo es el mismo, ¿no? Estabilizar el bosque.",
						"vietnamese": "Dù là gì đi nữa. Mục đích không phải đều như nhau sao? Ổn định khu rừng.",
						"thai": "ไม่ว่าจะเป็นอะไรก็ตาม เป้าหมายก็เหมือนกันไม่ใช่เหรอ? คือการทำให้ป่ามั่นคง",
						"hindi": "जो भी हो। मकसद एक ही है, है ना? जंगल को स्थिर करना।"
					},
					"type": "speech"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "ivy",
					"action": "exit",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 정체를 알 수 없는 존재였다.",
						"english": "A colossal shadow blocked the path. It was a being of unknown identity.",
						"japanese": "「巨大な影が道を塞いだ。正体不明の存在だった。」",
						"chinese": "“一道巨大的阴影挡住了去路。那是一个身份不明的存在。”",
						"french": "Une ombre colossale bloquait le chemin. C'était un être à l'identité inconnue.",
						"spanish": "Una sombra colosal bloqueó el camino. Era un ser de identidad desconocida.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là một thực thể không rõ danh tính.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่ไม่รู้ตัวตน",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह एक अज्ञात पहचान का प्राणी था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 세계수의 뜻을 거스르려 하는가.",
						"english": "How dare you... defy the will of the World Tree?",
						"japanese": "「よくも…世界樹の意思に逆らおうとするか。」",
						"chinese": "“你竟敢……违抗世界树的旨意？”",
						"french": "Comment oses-tu... défier la volonté de l'Arbre-Monde ?",
						"spanish": "¿Cómo te atreves... a desafiar la voluntad del Árbol del Mundo?",
						"vietnamese": "Ngươi... dám chống lại ý chí của Cây Thế Giới?",
						"thai": "แก... กล้าดีอย่างไรมาขัดขืนเจตจำนงของต้นไม้โลก",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... विश्व वृक्ष की इच्छा का उल्लंघन करने की?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜. 네 진짜 주인이 누구든 상관없어.",
						"english": "Move. I don't care who your real master is.",
						"japanese": "「退け。お前の真の主が誰であろうと関係ない。」",
						"chinese": "“让开。我不在乎你真正的主人是谁。”",
						"french": "Écarte-toi. Peu importe qui est ton véritable maître.",
						"spanish": "Muévete. No me importa quién sea tu verdadero amo.",
						"vietnamese": "Tránh ra. Ta không quan tâm chủ nhân thật sự của ngươi là ai.",
						"thai": "หลีกไป ฉันไม่สนหรอกว่าเจ้านายที่แท้จริงของแกคือใคร",
						"hindi": "हट जाओ। मुझे परवाह नहीं कि तुम्हारा असली मालिक कौन है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자… 진정한 재앙은 이제부터다.",
						"english": "Foolish one... The true calamity begins now.",
						"japanese": "「愚かな者よ…真の災厄はこれからだ。」",
						"chinese": "“愚蠢的家伙……真正的灾难现在才开始。”",
						"french": "Stupide créature... La véritable calamité commence maintenant.",
						"spanish": "Tonto... La verdadera calamidad comienza ahora.",
						"vietnamese": "Kẻ ngu ngốc... Tai họa thật sự bắt đầu từ bây giờ.",
						"thai": "เจ้าคนโง่... มหันตภัยที่แท้จริงจะเริ่มขึ้นจากนี้ไป",
						"hindi": "मूर्ख... असली विपत्ति अब शुरू होती है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…또 다른 존재가 있다는 말인가.",
						"english": "...Are you saying there's another being?",
						"japanese": "「…また別の存在がいるというのか。」",
						"chinese": "“……你是说，还有另一个存在吗？”",
						"french": "...Tu veux dire qu'il y a un autre être ?",
						"spanish": "...¿Estás diciendo que hay otro ser?",
						"vietnamese": "...Ngươi đang nói rằng có một thực thể khác sao?",
						"thai": "...นั่นหมายความว่ามีสิ่งมีชีวิตอื่นอีกอย่างนั้นหรือ",
						"hindi": "...क्या तुम कह रहे हो कि कोई और प्राणी भी है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적이 사라지자, 숲의 고동이 더욱 강해졌다. 알 수 없는 문양이 나타났다.",
						"english": "As the unknown enemy vanished, the forest's pulse grew stronger. An unknown symbol appeared.",
						"japanese": "「正体不明の敵が消えると、森の鼓動はさらに強くなった。未知の文様が現れた。」",
						"chinese": "“身份不明的敌人消失后，森林的脉动变得更加强烈。一个未知的图案出现了。”",
						"french": "Lorsque l'ennemi inconnu disparut, le pouls de la forêt devint plus fort. Un symbole inconnu apparut.",
						"spanish": "Cuando el enemigo desconocido desapareció, el pulso del bosque se hizo más fuerte. Un símbolo desconocido apareció.",
						"vietnamese": "Khi kẻ thù không rõ danh tính biến mất, nhịp đập của khu rừng trở nên mạnh mẽ hơn. Một ký hiệu không rõ xuất hiện.",
						"thai": "เมื่อศัตรูที่ไม่รู้ตัวตนหายไป การเต้นของป่าก็แรงขึ้น มีสัญลักษณ์ที่ไม่รู้จักปรากฏขึ้น",
						"hindi": "जैसे ही अज्ञात शत्रु गायब हुआ, जंगल की धड़कन और तेज़ हो गई। एक अज्ञात प्रतीक प्रकट हुआ।"
					},
					"type": "speech"
				}
			],
			"id": 5,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "세계수의 의지를 거스를 순 없다. 너희는 그저 도구일 뿐.",
						"english": "You cannot defy the will of the World Tree. You are merely tools.",
						"japanese": "「世界樹の意思に逆らうことはできない。お前たちはただの道具に過ぎない。」",
						"chinese": "“你们无法违抗世界树的旨意。你们不过是工具罢了。”",
						"french": "Vous ne pouvez pas défier la volonté de l'Arbre-Monde. Vous n'êtes que des outils.",
						"spanish": "No podéis desafiar la voluntad del Árbol del Mundo. Sois meras herramientas.",
						"vietnamese": "Các ngươi không thể chống lại ý chí của Cây Thế Giới. Các ngươi chỉ là công cụ mà thôi.",
						"thai": "พวกแกไม่อาจขัดขืนเจตจำนงของต้นไม้โลกได้ พวกแกเป็นแค่เครื่องมือเท่านั้น",
						"hindi": "तुम विश्व वृक्ष की इच्छा का उल्लंघन नहीं कर सकते। तुम केवल उपकरण हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ… 終わっていない。",
						"chinese": "还没有… 结束。",
						"french": "Ce n'est pas encore… fini.",
						"spanish": "Aún no ha… terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบ",
						"hindi": "अभी… ख़त्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲은 너희를 받아들이지 않는다. 영원히….",
						"english": "The forest does not accept you. Forever…",
						"japanese": "森はお前たちを受け入れない。永遠に…。",
						"chinese": "森林不接受你们。永远…。",
						"french": "La forêt ne vous accepte pas. Pour toujours…",
						"spanish": "El bosque no los acepta. Para siempre…",
						"vietnamese": "Khu rừng không chấp nhận các ngươi. Mãi mãi…",
						"thai": "ป่าไม่ต้อนรับพวกเจ้า ตลอดไป…",
						"hindi": "जंगल तुम्हें स्वीकार नहीं करता। हमेशा के लिए…।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 반드시 돌아갈 거야.",
						"english": "No... I will definitely go back.",
						"japanese": "いいえ… 必ず戻ります。",
						"chinese": "不… 我一定会回去的。",
						"french": "Non… je reviendrai, c'est sûr.",
						"spanish": "No... definitivamente regresaré.",
						"vietnamese": "Không… Tôi nhất định sẽ quay về.",
						"thai": "ไม่… ฉันจะต้องกลับไปให้ได้",
						"hindi": "नहीं… मैं निश्चित रूप से वापस जाऊँगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "우린… 너희를 기다렸다. 영원히 이 숲에 갇히리라.",
						"english": "We… have been waiting for you. You will be trapped in this forest forever.",
						"japanese": "我々は… お前たちを待っていた。永遠にこの森に囚われるだろう。",
						"chinese": "我们… 等待着你们。你们将永远被困在这片森林里。",
						"french": "Nous… vous avons attendus. Vous serez piégés dans cette forêt pour toujours.",
						"spanish": "Nosotros… los hemos esperado. Quedarán atrapados en este bosque para siempre.",
						"vietnamese": "Chúng ta… đã chờ đợi các ngươi. Các ngươi sẽ bị giam cầm trong khu rừng này mãi mãi.",
						"thai": "พวกเรา… รอพวกเจ้ามานานแล้ว พวกเจ้าจะถูกขังอยู่ในป่านี้ตลอดไป",
						"hindi": "हम… तुम्हारा इंतज़ार कर रहे थे। तुम हमेशा के लिए इस जंगल में कैद हो जाओगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "갇힌다고? 무슨 소리야….",
						"english": "Trapped? What are you talking about…?",
						"japanese": "囚われるだと？何を言っているんだ…。",
						"chinese": "被困？你在说什么…。",
						"french": "Piégés ? De quoi parlez-vous… ?",
						"spanish": "¿Atrapados? ¿De qué están hablando…?",
						"vietnamese": "Bị giam cầm ư? Ngươi đang nói gì vậy…?",
						"thai": "ถูกขัง? หมายความว่าอะไร…",
						"hindi": "कैद? तुम क्या कह रहे हो…?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 적 뒤로, 거대한 뿌리들이 꿈틀거렸다. 숲의 심장이 더 가까워진 느낌이었다.",
						"english": "Behind the fallen enemy, enormous roots writhed. It felt as if the heart of the forest had drawn closer.",
						"japanese": "倒れた敵の背後で、巨大な根が蠢いていた。森の心臓がより近くに感じられた。",
						"chinese": "倒下的敌人身后，巨大的树根蠕动着。感觉森林的心脏更近了。",
						"french": "Derrière l'ennemi tombé, d'énormes racines se tordaient. On aurait dit que le cœur de la forêt s'était rapproché.",
						"spanish": "Detrás del enemigo caído, raíces enormes se retorcían. Se sentía como si el corazón del bosque se hubiera acercado más.",
						"vietnamese": "Sau lưng kẻ địch ngã xuống, những rễ cây khổng lồ uốn lượn. Cảm giác như trái tim của khu rừng đã đến gần hơn.",
						"thai": "หลังศัตรูที่ล้มลง รากไม้ขนาดมหึมากำลังบิดงอ ราวกับว่าหัวใจของป่าเข้ามาใกล้ขึ้น",
						"hindi": "गिरे हुए दुश्मन के पीछे, विशाल जड़ें फड़फड़ा रही थीं। ऐसा लग रहा था मानो जंगल का दिल और करीब आ गया हो।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 이제 완전히 다른 공간이 되어 있었다. 모든 것이 잠식된 듯했다.",
						"english": "The forest had become an entirely different space. Everything seemed to be consumed.",
						"japanese": "森は完全に別の空間と化していた。すべてが侵食されたかのようだ。",
						"chinese": "森林已经变成了完全不同的空间。一切似乎都被侵蚀了。",
						"french": "La forêt était devenue un espace entièrement différent. Tout semblait avoir été englouti.",
						"spanish": "El bosque se había convertido en un espacio completamente diferente. Todo parecía haber sido consumido.",
						"vietnamese": "Khu rừng đã trở thành một không gian hoàn toàn khác. Mọi thứ dường như đã bị xâm chiếm.",
						"thai": "ป่าได้กลายเป็นพื้นที่ที่แตกต่างออกไปโดยสิ้นเชิง ทุกสิ่งดูเหมือนถูกกลืนกิน",
						"hindi": "जंगल पूरी तरह से एक अलग जगह बन गया था। सब कुछ समाहित हो गया था।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더… 거대해지고 있어.",
						"english": "It's getting bigger… and bigger.",
						"japanese": "ますます… 巨大になっている。",
						"chinese": "越来越… 巨大了。",
						"french": "Ça devient de plus en plus… gigantesque.",
						"spanish": "Se está volviendo… cada vez más grande.",
						"vietnamese": "Nó ngày càng… lớn hơn.",
						"thai": "มันใหญ่ขึ้น… เรื่อยๆ",
						"hindi": "यह धीरे-धीरे… और विशाल होता जा रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 유적에서 발견된 문양이 빛을 뿜었다. 불길한 예감이었다.",
						"english": "The pattern found in the ancient ruins emitted light. It was an ominous premonition.",
						"japanese": "古代遺跡で発見された模様が光を放った。不吉な予感だった。",
						"chinese": "在古代遗迹中发现的图案发出了光芒。这是一个不祥的预感。",
						"french": "Le motif découvert dans les ruines antiques émettait de la lumière. C'était un pressentiment sinistre.",
						"spanish": "El patrón encontrado en las ruinas antiguas emitía luz. Era una premonición ominosa.",
						"vietnamese": "Hoa văn tìm thấy trong tàn tích cổ đại phát ra ánh sáng. Đó là một điềm báo chẳng lành.",
						"thai": "ลวดลายที่พบในซากปรักหักพังโบราณเปล่งแสง มันเป็นลางร้าย",
						"hindi": "प्राचीन खंडहरों में मिला पैटर्न चमक उठा। यह एक अशुभ पूर्वसूचना थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에 발을 들인 자는… 누구도 살아 돌아가지 못할 것이다.",
						"english": "Those who set foot here… none shall return alive.",
						"japanese": "ここに足を踏み入れた者は… 誰も生きて帰れないだろう。",
						"chinese": "踏入此地者… 无人能生还。",
						"french": "Ceux qui poseront le pied ici… personne n'en reviendra vivant.",
						"spanish": "Aquellos que pongan un pie aquí… ninguno regresará con vida.",
						"vietnamese": "Kẻ nào đặt chân đến đây… sẽ không ai sống sót trở về.",
						"thai": "ผู้ที่ก้าวเข้ามาที่นี่… จะไม่มีใครรอดกลับไปได้",
						"hindi": "जो कोई भी यहाँ पैर रखेगा… कोई भी जीवित वापस नहीं लौटेगा।"
					}
				},
				{
					"content": {
						"korean": "네가 진짜 세계수를 타락시킨 존재냐?",
						"english": "Are you truly the one who corrupted the World Tree?",
						"japanese": "お前が本当に世界樹を堕落させた存在なのか？",
						"chinese": "你是真的腐化世界树的存在吗？",
						"french": "Es-tu vraiment celui qui a corrompu l'Arbre-Monde ?",
						"spanish": "¿Eres tú realmente quien corrompió el Árbol del Mundo?",
						"vietnamese": "Ngươi chính là kẻ đã làm tha hóa Cây Thế Giới sao?",
						"thai": "เจ้าคือผู้ที่ทำให้ต้นไม้โลกแปดเปื้อนจริงๆ หรือ?",
						"hindi": "क्या तुम ही सच में विश्व वृक्ष को भ्रष्ट करने वाले हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 진정한 비밀은… 너희의 이해를 벗어난다.",
						"english": "The true secret of the forest... lies beyond your comprehension.",
						"japanese": "森の真の秘密は… お前たちの理解を超えている。",
						"chinese": "森林真正的秘密… 超出了你们的理解范围。",
						"french": "Le véritable secret de la forêt... dépasse votre entendement.",
						"spanish": "El verdadero secreto del bosque... escapa a vuestra comprensión.",
						"vietnamese": "Bí mật thực sự của khu rừng… nằm ngoài tầm hiểu biết của các ngươi.",
						"thai": "ความลับที่แท้จริงของป่า… เหนือกว่าความเข้าใจของพวกเจ้า",
						"hindi": "जंगल का असली रहस्य… तुम्हारी समझ से परे है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이대로… 끝낼 수 없어.",
						"english": "It can't end this way.",
						"japanese": "このままでは… 終わらせられない。",
						"chinese": "不能就这样… 结束。",
						"french": "Ça ne peut pas se terminer comme ça.",
						"spanish": "No puede acabar así.",
						"vietnamese": "Không thể… kết thúc như thế này được.",
						"thai": "จะให้มัน… จบลงแค่นี้ไม่ได้หรอกนะ",
						"hindi": "यह ऐसे… ख़त्म नहीं हो सकता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아이비… 그녀는 너희를 이용할 뿐이다. 조심해라.",
						"english": "Ivy... she's just using you. Be careful.",
						"japanese": "アイビー… 彼女はお前たちを利用しているだけだ。気をつけろ。",
						"chinese": "艾薇… 她只是在利用你们。小心点。",
						"french": "Ivy... elle ne fait que vous utiliser. Méfiez-vous.",
						"spanish": "Ivy... ella solo os está usando. Tened cuidado.",
						"vietnamese": "Ivy… cô ta chỉ đang lợi dụng các ngươi thôi. Cẩn thận.",
						"thai": "ไอวี่… นางแค่หลอกใช้พวกเจ้า ระวังตัวด้วย",
						"hindi": "आइवी... वह बस तुम्हारा इस्तेमाल कर रही है। सावधान रहो।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아이비가… 우릴 이용한다고?",
						"english": "Ivy... using us?",
						"japanese": "アイビーが… 我々を利用していると？",
						"chinese": "艾薇… 利用我们？",
						"french": "Ivy... nous utiliserait ?",
						"spanish": "¿Ivy... usándonos?",
						"vietnamese": "Ivy… lợi dụng chúng tôi sao?",
						"thai": "ไอวี่… หลอกใช้พวกเราเหรอ?",
						"hindi": "आइवी... हमें इस्तेमाल कर रही है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 적이 사라지자, 숲의 고동이 잠시 멈췄다. 아이비의 말이 다시 떠올랐다. 그녀의 진짜 목적은 무엇일까?",
						"english": "As the mysterious enemy vanished, the forest's pulse briefly stopped. Ivy's words resurfaced. What could her true purpose be?",
						"japanese": "正体不明の敵が消えると、森の鼓動が一時的に止まった。アイビーの言葉が再び脳裏をよぎる。彼女の真の目的は何なのだろうか？",
						"chinese": "当身份不明的敌人消失后，森林的律动暂时停止了。艾薇的话再次浮现在脑海。她真正的目的是什么？",
						"french": "Alors que l'ennemi inconnu disparaissait, le pouls de la forêt s'arrêta un instant. Les paroles d'Ivy refirent surface. Quel pouvait être son véritable but ?",
						"spanish": "Cuando el enemigo desconocido desapareció, el latido del bosque se detuvo brevemente. Las palabras de Ivy volvieron a la mente. ¿Cuál sería su verdadero propósito?",
						"vietnamese": "Khi kẻ thù không rõ danh tính biến mất, nhịp đập của khu rừng tạm dừng. Lời nói của Ivy lại hiện lên. Mục đích thực sự của cô ta là gì?",
						"thai": "เมื่อศัตรูนิรนามหายไป ชีพจรของป่าก็หยุดลงชั่วขณะ คำพูดของไอวี่ผุดขึ้นมาอีกครั้ง เป้าหมายที่แท้จริงของนางคืออะไรกันแน่?",
						"hindi": "जैसे ही अज्ञात शत्रु गायब हुआ, जंगल की धड़कन कुछ देर के लिए रुक गई। आइवी के शब्द फिर से याद आए। उसका असली मकसद क्या हो सकता है?"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 오염된 에너지가 뿜어져 나왔다.",
						"english": "The deepest part of the forest. Corrupted energy surged out.",
						"japanese": "森の最深部。汚染されたエネルギーが噴き出した。",
						"chinese": "森林最深处。被污染的能量喷涌而出。",
						"french": "Au plus profond de la forêt. Une énergie corrompue en jaillit.",
						"spanish": "La parte más profunda del bosque. Energía corrupta brotó.",
						"vietnamese": "Nơi sâu nhất của khu rừng. Năng lượng ô nhiễm trào ra.",
						"thai": "ส่วนที่ลึกที่สุดของป่า พลังงานที่ปนเปื้อนพุ่งออกมา",
						"hindi": "जंगल का सबसे गहरा हिस्सा। दूषित ऊर्जा फूट पड़ी।"
					}
				},
				{
					"content": {
						"korean": "여기까지 오다니… 실로 대단하군.",
						"english": "To come all this way... truly remarkable.",
						"japanese": "ここまで来るとは… 実に大したものだ。",
						"chinese": "竟然能到这里… 真是了不起。",
						"french": "Être arrivé jusqu'ici... vraiment remarquable.",
						"spanish": "Haber llegado hasta aquí... realmente impresionante.",
						"vietnamese": "Đến được đây… quả thực rất đáng nể.",
						"thai": "มาได้ถึงนี่… ช่างน่าทึ่งจริงๆ",
						"hindi": "यहाँ तक आना... वाकई कमाल है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하지만 더 이상은 안 된다. 너희의 탐욕은 숲을 망칠 뿐.",
						"english": "But no further. Your greed will only ruin the forest.",
						"japanese": "しかし、これ以上はならぬ。お前たちの貪欲は森を破壊するだけだ。",
						"chinese": "但不能再往前了。你们的贪婪只会毁掉森林。",
						"french": "Mais pas au-delà. Votre avidité ne fera que détruire la forêt.",
						"spanish": "Pero no más allá. Vuestra codicia solo arruinará el bosque.",
						"vietnamese": "Nhưng không được nữa. Lòng tham của các ngươi chỉ hủy hoại khu rừng.",
						"thai": "แต่แค่นี้พอแล้ว ความโลภของพวกเจ้าจะทำลายป่าเท่านั้น",
						"hindi": "लेकिन अब और नहीं। तुम्हारा लालच केवल जंगल को बर्बाद करेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "탐욕? 우린 숲을 구하려는 거야!",
						"english": "Greed? We're trying to save the forest!",
						"japanese": "貪欲だと？我々は森を救おうとしているのだ！",
						"chinese": "贪婪？我们是为了拯救森林！",
						"french": "L'avidité ? Nous essayons de sauver la forêt !",
						"spanish": "¿Codicia? ¡Estamos tratando de salvar el bosque!",
						"vietnamese": "Tham lam? Chúng tôi đang cố gắng cứu khu rừng!",
						"thai": "ความโลภ? พวกเรากำลังช่วยป่าอยู่ต่างหาก!",
						"hindi": "लालच? हम तो जंगल को बचाने की कोशिश कर रहे हैं!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "구원인가, 파괴인가. 너희는 스스로 답을 찾지 못한다.",
						"english": "Salvation or destruction. You cannot find the answer yourselves.",
						"japanese": "救済か、破壊か。お前たちは自ら答えを見つけられない。",
						"chinese": "救赎还是毁灭。你们自己找不到答案。",
						"french": "Salut ou destruction. Vous ne pouvez pas trouver la réponse par vous-mêmes.",
						"spanish": "¿Salvación o destrucción? No podéis encontrar la respuesta por vosotros mismos.",
						"vietnamese": "Cứu rỗi hay hủy diệt. Các ngươi không thể tự tìm thấy câu trả lời.",
						"thai": "การกอบกู้หรือการทำลาย พวกเจ้าหาคำตอบเองไม่ได้หรอก",
						"hindi": "मोक्ष या विनाश। तुम स्वयं उत्तर नहीं ढूँढ सकते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	]
} as const;
