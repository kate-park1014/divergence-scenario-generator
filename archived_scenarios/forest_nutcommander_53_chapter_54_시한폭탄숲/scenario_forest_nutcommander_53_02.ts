export const scenario_forest_nutcommander_53_02 = {
	"scenario_id": "forest_nutcommander_53_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 저주가 가속화된다. 모든 생명이 변이하는 가운데,",
			"고대 유적으로 향하는 길, '심장의 씨앗' 실마리를 찾아야 한다.",
			"그러나 숲은 이미 우리를 노리고 있었다.",
			"멈출 수 없는 추격이 시작된다. 시간이 얼마 남지 않았다."
		],
		"english": [
			"The forest's curse accelerates. As all life mutates,",
			"On the way to ancient ruins, we must find clues to the 'Seed of the Heart'.",
			"But the forest was already targeting us.",
			"An unstoppable pursuit begins. Time is running out."
		],
		"japanese": [
			"森の呪いが加速する。あらゆる生命が変異する中、",
			"古代遺跡への道、「心の種」の手がかりを見つけねばならない。",
			"しかし、森はすでに私たちを狙っていた。",
			"止められない追跡が始まる。残された時間は少ない。"
		],
		"chinese": [
			"森林的诅咒正在加速。万物生灵都在变异，",
			"通往古代遗迹的路上，我们必须找到“心脏之种”的线索。",
			"然而，森林早已盯上了我们。",
			"一场无法停止的追逐开始了。时间所剩无几。"
		],
		"french": [
			"La malédiction de la forêt s'accélère. Alors que toute vie mute,",
			"Sur le chemin des ruines antiques, nous devons trouver des indices sur la 'Graine du Cœur'.",
			"Mais la forêt nous ciblait déjà.",
			"Une poursuite imparable commence. Le temps presse."
		],
		"spanish": [
			"La maldición del bosque se acelera. Mientras toda vida muta,",
			"En el camino a las ruinas antiguas, debemos encontrar pistas sobre la 'Semilla del Corazón'.",
			"Pero el bosque ya nos estaba acechando.",
			"Una persecución imparable comienza. El tiempo se acaba."
		],
		"vietnamese": [
			"Lời nguyền của rừng đang tăng tốc. Khi mọi sinh linh biến đổi,",
			"Trên đường đến tàn tích cổ đại, chúng ta phải tìm manh mối về 'Hạt giống Trái tim'.",
			"Nhưng khu rừng đã nhắm vào chúng ta rồi.",
			"Một cuộc truy đuổi không thể ngăn cản bắt đầu. Thời gian không còn nhiều."
		],
		"thai": [
			"คำสาปแห่งป่าเร่งความเร็วขึ้น ขณะที่ทุกชีวิตกำลังกลายพันธุ์,",
			"ระหว่างทางไปซากปรักหักพังโบราณ เราต้องหาเบาะแสของ 'เมล็ดพันธุ์แห่งหัวใจ'",
			"แต่ป่าได้เล็งเป้าหมายมาที่เราแล้ว",
			"การไล่ล่าที่หยุดยั้งไม่ได้เริ่มต้นขึ้น เวลาเหลือน้อยแล้ว"
		],
		"hindi": [
			"जंगल का अभिशाप तेज़ हो रहा है। सभी जीव-जंतुओं के रूपांतरित होने के बीच,",
			"प्राचीन खंडहरों के रास्ते पर, हमें 'हृदय के बीज' के सुराग खोजने होंगे।",
			"लेकिन जंगल पहले से ही हमें निशाना बना रहा था।",
			"एक अथक पीछा शुरू होता है। समय कम है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 활력이 점점 사그라들었다. 이상한 기운이 감돌았다.",
						"english": "The forest's vitality slowly faded. A strange aura lingered.",
						"japanese": "森の活力が徐々に失われた。奇妙な気配が漂っていた。",
						"chinese": "森林的活力渐渐消逝。一种奇怪的气氛弥漫开来。",
						"french": "La vitalité de la forêt s'estompa lentement. Une aura étrange planait.",
						"spanish": "La vitalidad del bosque se desvaneció lentamente. Una extraña aura persistía.",
						"vietnamese": "Sức sống của rừng dần tàn phai. Một luồng khí lạ lảng vảng.",
						"thai": "พลังชีวิตของป่าค่อยๆ จางหายไป บรรยากาศแปลกประหลาดปกคลุมอยู่",
						"hindi": "जंगल की जीवन शक्ति धीरे-धीरे फीकी पड़ गई। एक अजीब आभा मंडरा रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저주가 더 심해졌어. 공기가 탁해.",
						"english": "The curse has worsened. The air is thick.",
						"japanese": "呪いがさらにひどくなった。空気がよどんでいる。",
						"chinese": "诅咒加剧了。空气很浑浊。",
						"french": "La malédiction a empiré. L'air est lourd.",
						"spanish": "La maldición ha empeorado. El aire está denso.",
						"vietnamese": "Lời nguyền đã tệ hơn rồi. Không khí thật ngột ngạt.",
						"thai": "คำสาปแย่ลงแล้ว อากาศอึมครึม",
						"hindi": "अभिशाप और बदतर हो गया है। हवा घुटन भरी है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기다리고 있었어. '심장의 씨앗'을 찾고 있지?",
						"english": "I've been waiting. You're looking for the 'Seed of the Heart', aren't you?",
						"japanese": "待っていたよ。「心の種」を探しているのだろう？",
						"chinese": "我一直在等你。你在找“心脏之种”，对吗？",
						"french": "Je t'attendais. Tu cherches la 'Graine du Cœur', n'est-ce pas ?",
						"spanish": "Te estaba esperando. Estás buscando la 'Semilla del Corazón', ¿verdad?",
						"vietnamese": "Ta đã đợi. Ngươi đang tìm 'Hạt giống Trái tim' phải không?",
						"thai": "ข้ารออยู่แล้ว เจ้ากำลังตามหา 'เมล็ดพันธุ์แห่งหัวใจ' ใช่ไหม?",
						"hindi": "मैं इंतज़ार कर रहा था। तुम 'हृदय के बीज' की तलाश में हो, है ना?"
					},
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glen",
					"content": {
						"korean": "글렌. 고대의 지식을 지키는 자.",
						"english": "Glenn. Guardian of ancient knowledge.",
						"japanese": "グレン。古代の知識を守る者。",
						"chinese": "格伦。古老知识的守护者。",
						"french": "Glenn. Gardien du savoir antique.",
						"spanish": "Glenn. Guardián del conocimiento antiguo.",
						"vietnamese": "Glenn. Kẻ bảo vệ tri thức cổ đại.",
						"thai": "เกล็น ผู้พิทักษ์ความรู้โบราณ",
						"hindi": "ग्लेन। प्राचीन ज्ञान का संरक्षक।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen",
					"content": {
						"korean": "이 숲은 지금… 급변하고 있어. 조심해야 해.",
						"english": "This forest is... changing rapidly now. You must be careful.",
						"japanese": "この森は今…急速に変化している。気をつけなければならない。",
						"chinese": "这片森林现在……正在急速变化。你必须小心。",
						"french": "Cette forêt... change rapidement maintenant. Tu dois être prudent.",
						"spanish": "Este bosque está... cambiando rápidamente ahora. Debes tener cuidado.",
						"vietnamese": "Rừng này bây giờ... đang thay đổi nhanh chóng. Ngươi phải cẩn thận.",
						"thai": "ป่าแห่งนี้กำลัง...เปลี่ยนแปลงอย่างรวดเร็ว เจ้าต้องระวัง",
						"hindi": "यह जंगल अब... तेज़ी से बदल रहा है। तुम्हें सावधान रहना होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "씨앗의 위치를 알려주지. 고대 유적에 그 기록이 있어.",
						"english": "I'll tell you the seed's location. The record is in the ancient ruins.",
						"japanese": "種の場所を教えよう。その記録は古代遺跡にある。",
						"chinese": "我来告诉你种子在哪。它的记录在古代遗迹里。",
						"french": "Je vais vous dire où se trouve la graine. Le registre est dans les ruines antiques.",
						"spanish": "Te diré la ubicación de la semilla. El registro está en las ruinas antiguas.",
						"vietnamese": "Ta sẽ cho ngươi biết vị trí của hạt giống. Ghi chép đó nằm trong di tích cổ đại.",
						"thai": "ข้าจะบอกที่อยู่ของเมล็ดพันธุ์ บันทึกอยู่ในซากปรักหักพังโบราณ",
						"hindi": "मैं तुम्हें बीज का स्थान बताऊँगा। उसका रिकॉर्ड प्राचीन खंडहरों में है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "유적요? 그럼 빨리 가야겠네요!",
						"english": "The ruins? Then we should go quickly!",
						"japanese": "遺跡ですか？それなら早く行かないと！",
						"chinese": "遗迹？那我们得快点去了！",
						"french": "Les ruines ? Alors nous devrions y aller vite !",
						"spanish": "¿Las ruinas? ¡Entonces deberíamos irnos rápido!",
						"vietnamese": "Di tích ạ? Vậy chúng ta phải đi nhanh thôi!",
						"thai": "ซากปรักหักพังเหรอ? งั้นเราต้องรีบไปแล้ว!",
						"hindi": "खंडहर? तो हमें जल्दी जाना चाहिए!"
					}
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "하지만 조심해야 해. 이 저주는 단순히 죽이는 게 아니야.",
						"english": "But be careful. This curse doesn't just kill.",
						"japanese": "だが気をつけろ。この呪いはただ殺すだけではない。",
						"chinese": "但要小心。这个诅咒可不仅仅是杀死。",
						"french": "Mais sois prudent. Cette malédiction ne fait que tuer.",
						"spanish": "Pero ten cuidado. Esta maldición no solo mata.",
						"vietnamese": "Nhưng hãy cẩn thận. Lời nguyền này không chỉ giết chóc.",
						"thai": "แต่ต้องระวัง คำสาปนี้ไม่ได้แค่ฆ่าเท่านั้น",
						"hindi": "लेकिन सावधान रहना। यह शाप सिर्फ मारता नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 뭐죠?",
						"english": "Then... what is it?",
						"japanese": "じゃあ…何なんですか？",
						"chinese": "那…是什么？",
						"french": "Alors... qu'est-ce que c'est ?",
						"spanish": "Entonces... ¿qué es?",
						"vietnamese": "Vậy thì… là gì ạ?",
						"thai": "งั้น… มันคืออะไร?",
						"hindi": "तो… यह क्या है?"
					}
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "과거의 위대한 존재들을… 숲의 일부로 만들어버려.",
						"english": "It turns the great beings of the past... into part of the forest.",
						"japanese": "過去の偉大な存在たちを…森の一部に変えてしまう。",
						"chinese": "它把过去那些伟大的存在…变成了森林的一部分。",
						"french": "Elle transforme les grands êtres du passé... en partie de la forêt.",
						"spanish": "Convierte a los grandes seres del pasado... en parte del bosque.",
						"vietnamese": "Nó biến những sinh vật vĩ đại trong quá khứ… thành một phần của khu rừng.",
						"thai": "มันเปลี่ยนสิ่งมีชีวิตที่ยิ่งใหญ่ในอดีต… ให้กลายเป็นส่วนหนึ่งของป่า",
						"hindi": "यह अतीत के महान प्राणियों को… जंगल का हिस्सा बना देता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 설마… (작은 조각상을 발견한다)",
						"english": "Could this be... (Discovers a small statue)",
						"japanese": "まさかこれが… (小さな彫像を発見する)",
						"chinese": "难道这是… (发现一个小雕像)",
						"french": "Serait-ce... (Découvre une petite statue)",
						"spanish": "¿Podría ser esto... (Descubre una pequeña estatua)",
						"vietnamese": "Không lẽ đây là… (Phát hiện một bức tượng nhỏ)",
						"thai": "นี่มัน… (พบรูปปั้นเล็กๆ)",
						"hindi": "क्या यह हो सकता है… (एक छोटी मूर्ति मिलती है)"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "glen",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "유적으로 가는 길은 험난할 거야. 미지의 존재들이 숲 깊숙이 침투했어.",
						"english": "The path to the ruins will be treacherous. Unknown beings have infiltrated deep into the forest.",
						"japanese": "遺跡への道は険しいだろう。未知の存在が森の奥深くに侵入した。",
						"chinese": "通往遗迹的路会很艰难。未知的存在已经深入渗透到森林里了。",
						"french": "Le chemin vers les ruines sera périlleux. Des êtres inconnus ont infiltré les profondeurs de la forêt.",
						"spanish": "El camino a las ruinas será traicionero. Seres desconocidos han infiltrado las profundidades del bosque.",
						"vietnamese": "Con đường đến di tích sẽ rất hiểm trở. Những sinh vật không rõ đã xâm nhập sâu vào rừng.",
						"thai": "เส้นทางสู่ซากปรักหักพังจะอันตราย สิ่งมีชีวิตลึกลับได้แทรกซึมลึกเข้าไปในป่าแล้ว",
						"hindi": "खंडहरों का रास्ता कठिन होगा। अज्ञात प्राणी जंगल में गहराई तक घुसपैठ कर चुके हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이미 많이 마주쳤어요. 그들이 막고 있어요.",
						"english": "We've already encountered many. They're blocking the way.",
						"japanese": "すでにたくさん遭遇しました。彼らが邪魔しています。",
						"chinese": "我们已经遇到很多了。他们正在阻拦。",
						"french": "Nous en avons déjà rencontré beaucoup. Ils bloquent le chemin.",
						"spanish": "Ya nos hemos encontrado con muchos. Están bloqueando el camino.",
						"vietnamese": "Chúng tôi đã đối mặt với rất nhiều. Chúng đang chặn đường.",
						"thai": "เราเจอมาเยอะแล้ว พวกมันกำลังขวางทางอยู่",
						"hindi": "हम पहले ही कई से मिल चुके हैं। वे रास्ता रोक रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 숲의 '변이'를 이끄는 자들. 씨앗을 찾으려는 너희를 막으려 할 거야.",
						"english": "They are the ones leading the 'mutation' of the forest. They will try to stop you from finding the seed.",
						"japanese": "彼らは森の『変異』を導く者たち。種を探すお前たちを止めようとするだろう。",
						"chinese": "他们是引发森林“变异”的家伙。他们会试图阻止你们寻找种子。",
						"french": "Ce sont ceux qui mènent la 'mutation' de la forêt. Ils essaieront de vous empêcher de trouver la graine.",
						"spanish": "Son los que lideran la 'mutación' del bosque. Intentarán impedir que encuentres la semilla.",
						"vietnamese": "Chúng là những kẻ dẫn đầu 'biến đổi' của khu rừng. Chúng sẽ cố gắng ngăn cản các ngươi tìm hạt giống.",
						"thai": "พวกมันคือผู้นำ 'การกลายพันธุ์' ของป่า พวกมันจะพยายามหยุดยั้งพวกเจ้าจากการค้นหาเมล็ดพันธุ์",
						"hindi": "वे जंगल के 'उत्परिवर्तन' का नेतृत्व करने वाले हैं। वे तुम्हें बीज खोजने से रोकने की कोशिश करेंगे।"
					},
					"speaker": "glen"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아서도 소용없어. 반드시 유적에 갈 거야.",
						"english": "It's no use trying to stop us. We will definitely go to the ruins.",
						"japanese": "止めても無駄だ。必ず遺跡に行く。",
						"chinese": "阻止我们也没用。我们一定要去遗迹。",
						"french": "C'est inutile d'essayer de nous arrêter. Nous irons certainement aux ruines.",
						"spanish": "Es inútil intentar detenernos. Definitivamente iremos a las ruinas.",
						"vietnamese": "Ngăn cản cũng vô ích. Chúng tôi nhất định sẽ đến di tích.",
						"thai": "ขวางก็ไร้ประโยชน์ เราจะต้องไปถึงซากปรักหักพังให้ได้",
						"hindi": "हमें रोकना बेकार है। हम निश्चित रूप से खंडहरों में जाएंगे।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "여기까지 온 이상, 돌아갈 순 없어.",
						"english": "Having come this far, there's no turning back.",
						"japanese": "ここまで来たからには、もう後戻りはできない。",
						"chinese": "既然来到这里，就无法回头了。",
						"french": "Arrivé si loin, il n'y a pas de retour en arrière.",
						"spanish": "Habiendo llegado hasta aquí, no hay vuelta atrás.",
						"vietnamese": "Đã đến nước này rồi, không thể quay đầu lại được nữa.",
						"thai": "มาถึงขนาดนี้แล้ว ไม่มีทางถอยกลับไปได้",
						"hindi": "इतनी दूर आ गए, अब वापसी नहीं है।"
					},
					"speaker": "glen",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아갈 생각도 없어요. 숲을 구해야 해.",
						"english": "I have no intention of turning back. I must save the forest.",
						"japanese": "戻るつもりはありません。森を救わなければ。",
						"chinese": "我没想过要回去。我必须拯救森林。",
						"french": "Je n'ai aucune intention de faire demi-tour. Je dois sauver la forêt.",
						"spanish": "No tengo intención de volver. Debo salvar el bosque.",
						"vietnamese": "Tôi không có ý định quay lại. Tôi phải cứu lấy khu rừng.",
						"thai": "ฉันไม่มีความคิดที่จะกลับ ฉันต้องช่วยป่า",
						"hindi": "वापस लौटने का मेरा कोई इरादा नहीं है। मुझे जंगल को बचाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glen",
					"content": {
						"korean": "저주에 갇힌 숲의 심장이… 널 부르고 있어.",
						"english": "The heart of the forest, trapped by a curse... calls to you.",
						"japanese": "呪いに囚われた森の心臓が… 君を呼んでいる。",
						"chinese": "被诅咒困住的森林之心… 正在呼唤你。",
						"french": "Le cœur de la forêt, piégé par une malédiction... t'appelle.",
						"spanish": "El corazón del bosque, atrapado por una maldición... te llama.",
						"vietnamese": "Trái tim của khu rừng, bị nguyền rủa giam cầm... đang gọi ngươi.",
						"thai": "หัวใจของป่าที่ถูกคำสาปจองจำ... กำลังเรียกหาเจ้า",
						"hindi": "जंगल का दिल, जो श्राप में फँसा है... तुम्हें बुला रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "내가 숲을 구할 거야. 무슨 일이 있어도.",
						"english": "I will save the forest. No matter what.",
						"japanese": "私が森を救う。何があっても。",
						"chinese": "我会拯救森林的。无论发生什么。",
						"french": "Je sauverai la forêt. Quoi qu'il arrive.",
						"spanish": "Salvaré el bosque. Pase lo que pase.",
						"vietnamese": "Tôi sẽ cứu lấy khu rừng. Bất kể điều gì xảy ra.",
						"thai": "ฉันจะช่วยป่า ไม่ว่าจะเกิดอะไรขึ้นก็ตาม",
						"hindi": "मैं जंगल को बचाऊँगा। चाहे कुछ भी हो जाए।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "훗… 역시 어리석군.",
						"english": "Hmph... Foolish as expected.",
						"japanese": "フッ…やはり愚かだな。",
						"chinese": "哼…果然愚蠢。",
						"french": "Hmpf... Toujours aussi stupide.",
						"spanish": "Hmph... Tan tontos como siempre.",
						"vietnamese": "Hừm... Quả nhiên là ngu ngốc.",
						"thai": "หึ... โง่เง่าเหมือนเคย",
						"hindi": "हुंह… मूर्ख, जैसा कि उम्मीद थी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저주에 잠식될지어다. 영원히 이 숲에 갇혀라.",
						"english": "Be consumed by the curse. Be trapped in this forest forever.",
						"japanese": "呪いに蝕まれろ。永遠にこの森に閉じ込められるがいい。",
						"chinese": "被诅咒吞噬吧。永远被困在这片森林里。",
						"french": "Sois consumé par la malédiction. Sois piégé dans cette forêt pour toujours.",
						"spanish": "Sé consumido por la maldición. Queda atrapado en este bosque para siempre.",
						"vietnamese": "Hãy bị nguyền rủa nuốt chửng đi. Mãi mãi bị mắc kẹt trong khu rừng này.",
						"thai": "จงถูกคำสาปกลืนกิน ถูกขังอยู่ในป่านี้ชั่วนิรันดร์",
						"hindi": "अभिशाप द्वारा भस्म हो जाओ। हमेशा के लिए इस जंगल में फँस जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어! 다시 돌아올 거야!",
						"english": "It's not over yet! I'll be back!",
						"japanese": "まだ…終わってない！また戻ってくる！",
						"chinese": "还没…结束！我会回来的！",
						"french": "Ce n'est pas encore fini ! Je reviendrai !",
						"spanish": "¡Todavía no ha terminado! ¡Volveré!",
						"vietnamese": "Vẫn chưa... kết thúc! Ta sẽ quay lại!",
						"thai": "ยัง... ไม่จบ! ฉันจะกลับมา!",
						"hindi": "अभी… ख़त्म नहीं हुआ है! मैं वापस आऊँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "감히… 여기까지 왔느냐.",
						"english": "How dare you... come this far?",
						"japanese": "よくも… ここまで来たな。",
						"chinese": "竟敢… 来到这里。",
						"french": "Comment oses-tu... venir jusqu'ici ?",
						"spanish": "¿Cómo te atreves... a llegar hasta aquí?",
						"vietnamese": "Ngươi dám... đến tận đây sao?",
						"thai": "กล้าดียังไง... มาถึงที่นี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... यहाँ तक आने की?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 숲을 구원할 수 있을 거라 생각하나?",
						"english": "Do you think you can save the forest?",
						"japanese": "お前たちが森を救えると思っているのか？",
						"chinese": "你以为你们能拯救森林吗？",
						"french": "Pensez-vous pouvoir sauver la forêt ?",
						"spanish": "¿Crees que puedes salvar el bosque?",
						"vietnamese": "Ngươi nghĩ ngươi có thể cứu được khu rừng ư?",
						"thai": "คิดหรือว่าพวกเจ้าจะช่วยป่าได้?",
						"hindi": "क्या तुम्हें लगता है कि तुम जंगल को बचा सकते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 힘으로 숲을 망치고 있잖아!",
						"english": "You're destroying the forest with that power!",
						"japanese": "お前がその力で森を破壊しているんだ！",
						"chinese": "你正在用那种力量破坏森林！",
						"french": "Tu es en train de détruire la forêt avec ce pouvoir !",
						"spanish": "¡Estás destruyendo el bosque con ese poder!",
						"vietnamese": "Ngươi đang hủy hoại khu rừng bằng sức mạnh đó!",
						"thai": "เจ้ากำลังทำลายป่าด้วยพลังนั้น!",
						"hindi": "तुम उस शक्ति से जंगल को नष्ट कर रहे हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "망치는 게 아니다. 진정한 형태로… 되돌리는 것이다.",
						"english": "I'm not destroying it. I'm returning it to its true form.",
						"japanese": "破壊しているのではない。真の姿に… 戻しているのだ。",
						"chinese": "我不是在破坏它。我是在让它恢复真正的形态。",
						"french": "Je ne la détruis pas. Je la ramène à sa véritable forme.",
						"spanish": "No lo estoy destruyendo. Lo estoy devolviendo a su verdadera forma.",
						"vietnamese": "Không phải đang hủy hoại. Mà là đang trả nó về... hình thái chân thật.",
						"thai": "ฉันไม่ได้ทำลายมัน ฉันกำลังคืนมันสู่ร่างที่แท้จริง",
						"hindi": "मैं इसे नष्ट नहीं कर रहा हूँ। मैं इसे उसके असली रूप में लौटा रहा हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들.",
						"english": "Foolish humans.",
						"japanese": "愚かな人間どもめ。",
						"chinese": "愚蠢的人类。",
						"french": "Humains stupides.",
						"spanish": "Humanos tontos.",
						"vietnamese": "Loài người ngu ngốc.",
						"thai": "มนุษย์ที่โง่เขลา",
						"hindi": "मूर्ख इंसान।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악… 이럴 리가…",
						"english": "Ugh... This can't be...",
						"japanese": "ぐああ… まさか…",
						"chinese": "啊啊啊… 这不可能…",
						"french": "Argh... Ce n'est pas possible...",
						"spanish": "Uf... Esto no puede ser...",
						"vietnamese": "Khụ khụ... Không thể nào...",
						"thai": "อ๊ากก... ไม่จริงน่า...",
						"hindi": "आह... ऐसा नहीं हो सकता..."
					}
				},
				{
					"content": {
						"korean": "씨앗을 찾는다 해도… 너희가 감당할 수 없을 것이다.",
						"english": "Even if you find the seed... you won't be able to handle it.",
						"japanese": "たとえ種を見つけたとしても… お前たちには手に負えないだろう。",
						"chinese": "即使找到了种子… 你们也无法承受。",
						"french": "Même si vous trouvez la graine... vous ne pourrez pas y faire face.",
						"spanish": "Aunque encontréis la semilla... no podréis con ella.",
						"vietnamese": "Ngay cả khi các ngươi tìm thấy hạt giống... các ngươi cũng không thể kham nổi đâu.",
						"thai": "ต่อให้พวกเจ้าเจอเมล็ดพันธุ์... ก็ไม่อาจรับมือได้หรอก",
						"hindi": "यदि तुम बीज ढूँढ भी लो… तो भी तुम इसे संभाल नहीं पाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐라는 거야? 이제 도망 못 가.",
						"english": "What are you talking about? You can't escape now.",
						"japanese": "何を言ってるんだ？もう逃げられないぞ。",
						"chinese": "你在说什么？现在你无处可逃了。",
						"french": "De quoi parles-tu ? Tu ne peux plus t'échapper.",
						"spanish": "De qué estás hablando? Ya no puedes escapar.",
						"vietnamese": "Ngươi nói cái gì vậy? Giờ thì ngươi không thoát được đâu.",
						"thai": "พูดอะไรน่ะ? ตอนนี้หนีไม่รอดแล้ว",
						"hindi": "क्या कह रहे हो? अब तुम भाग नहीं सकते।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 소멸했다. 하지만 숲의 저주는 여전했다.",
						"english": "The colossal shadow vanished. But the forest's curse remained.",
						"japanese": "巨大な影は消滅した。しかし、森の呪いは依然として残っていた。",
						"chinese": "巨大的影子消失了。但森林的诅咒依然存在。",
						"french": "L'ombre colossale a disparu. Mais la malédiction de la forêt persistait.",
						"spanish": "La sombra colosal se desvaneció. Pero la maldición del bosque permanecía.",
						"vietnamese": "Cái bóng khổng lồ đã tan biến. Nhưng lời nguyền của khu rừng vẫn còn đó.",
						"thai": "เงายักษ์สลายไปแล้ว แต่คำสาปของป่ายังคงอยู่",
						"hindi": "विशालकाय छाया लुप्त हो गई। लेकिन जंगल का अभिशाप अभी भी था।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아직, 더 깊은 곳으로 향해야만 했다. 시간은 계속 흐르고 있었다.",
						"english": "Still, they had to go deeper. Time kept flowing.",
						"japanese": "まだ、もっと奥深くへと進まなければならなかった。時間は流れ続けていた。",
						"chinese": "仍然，必须前往更深处。时间仍在流逝。",
						"french": "Pourtant, ils devaient aller plus profondément. Le temps continuait de s'écouler.",
						"spanish": "Aún así, tenían que ir más profundo. El tiempo seguía corriendo.",
						"vietnamese": "Vẫn còn, họ phải tiến sâu hơn nữa. Thời gian cứ thế trôi đi.",
						"thai": "ยังคงต้องมุ่งหน้าสู่ส่วนลึกต่อไป เวลายังคงเดินหน้า",
						"hindi": "फिर भी, उन्हें और गहराई में जाना था। समय लगातार बह रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
