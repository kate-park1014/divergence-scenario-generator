export const scenario_forest_veridialament_44_01 = {
	"scenario_id": "forest_veridialament_44_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"type": "speech",
					"content": {
						"korean": "안개가 자욱한 숲 입구에 섰다. 잊혀진 문명의 흔적이 희미하게 보였다.",
						"english": "I stood at the misty forest entrance. Faint traces of a forgotten civilization were visible.",
						"japanese": "霧深い森の入り口に立った。忘れ去られた文明の痕跡がかすかに見えた。",
						"chinese": "我站在迷雾弥漫的森林入口。依稀可见被遗忘文明的痕迹。",
						"french": "Je me tenais à l'entrée brumeuse de la forêt. De faibles traces d'une civilisation oubliée étaient visibles.",
						"spanish": "Me paré en la entrada neblinosa del bosque. Débiles rastros de una civilización olvidada eran visibles.",
						"vietnamese": "Tôi đứng ở lối vào rừng sương mù. Những dấu vết mờ nhạt của một nền văn minh bị lãng quên hiện ra.",
						"thai": "ฉันยืนอยู่ที่ทางเข้าป่าที่เต็มไปด้วยหมอก ร่องรอยจางๆ ของอารยธรรมที่ถูกลืมปรากฏให้เห็น",
						"hindi": "मैं धुंधले जंगल के प्रवेश द्वार पर खड़ा था। एक भूली हुई सभ्यता के धुंधले निशान दिखाई दे रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으스스하네… 뭔가 소리가 들려.",
						"english": "Creepy... I hear something.",
						"japanese": "不気味だ… 何か音が聞こえる。",
						"chinese": "真吓人… 我听到什么声音了。",
						"french": "Glaçant... J'entends quelque chose.",
						"spanish": "Espeluznante... Oigo algo.",
						"vietnamese": "Rợn người quá... Tôi nghe thấy gì đó.",
						"thai": "น่าขนลุก... ฉันได้ยินอะไรบางอย่าง",
						"hindi": "डरावना... मुझे कुछ सुनाई दे रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "저 울음소리… 기분 나빠. (FS01)",
						"english": "That cry... it feels unsettling. (FS01)",
						"japanese": "あの鳴き声… 気味が悪い。(FS01)",
						"chinese": "那个哭声… 感觉很不舒服。(FS01)",
						"french": "Ce cri... c'est dérangeant. (FS01)",
						"spanish": "Ese lamento... se siente inquietante. (FS01)",
						"vietnamese": "Tiếng kêu đó... thật khó chịu. (FS01)",
						"thai": "เสียงครวญครานั้น... รู้สึกไม่สบายใจ (FS01)",
						"hindi": "वह रोना... बेचैन कर रहा है। (FS01)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 와요. 이 숲은… 당신을 기다렸어요.",
						"english": "Welcome. This forest... has been waiting for you.",
						"japanese": "ようこそ。この森は… あなたを待っていました。",
						"chinese": "欢迎。这片森林… 一直在等你。",
						"french": "Bienvenue. Cette forêt... vous attendait.",
						"spanish": "Bienvenido/a. Este bosque... te ha estado esperando.",
						"vietnamese": "Chào mừng. Khu rừng này... đã chờ đợi bạn.",
						"thai": "ยินดีต้อนรับ ป่าแห่งนี้... รอคอยคุณมานานแล้ว",
						"hindi": "स्वागत है। इस जंगल ने... तुम्हारा इंतज़ार किया है।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは… どなたですか？",
						"chinese": "你是… 谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Bạn... là ai?",
						"thai": "คุณ... คือใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엘라. 이 숲의 가장 오래된 그림자.",
						"english": "Ella. The oldest shadow of this forest.",
						"japanese": "エラ。この森の最も古い影。",
						"chinese": "艾拉。这片森林最古老的影子。",
						"french": "Ella. L'ombre la plus ancienne de cette forêt.",
						"spanish": "Ella. La sombra más antigua de este bosque.",
						"vietnamese": "Ella. Bóng tối cổ xưa nhất của khu rừng này.",
						"thai": "เอลล่า เงาที่เก่าแก่ที่สุดของป่าแห่งนี้",
						"hindi": "एला। इस जंगल की सबसे पुरानी छाया।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 숲은… 반복될 비극을 품고 있어요.",
						"english": "This forest… holds a repeating tragedy.",
						"japanese": "この森は…繰り返される悲劇を抱えている。",
						"chinese": "这片森林…隐藏着即将重演的悲剧。",
						"french": "Cette forêt… renferme une tragédie vouée à se répéter.",
						"spanish": "Este bosque… encierra una tragedia que se repetirá.",
						"vietnamese": "Rừng này… chứa đựng bi kịch sẽ lặp lại.",
						"thai": "ป่าแห่งนี้… แฝงไว้ด้วยโศกนาฏกรรมที่จะเกิดขึ้นซ้ำแล้วซ้ำเล่า",
						"hindi": "यह जंगल… दोहराई जाने वाली त्रासदी को समेटे हुए है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "숲 깊숙이 들어서자, 울음소리가 더욱 선명해졌다. (FS01)",
						"english": "Deeper into the forest, the cries grew clearer. (FS01)",
						"japanese": "森の奥深くへ進むと、すすり泣く声がさらに鮮明になった。(FS01)",
						"chinese": "深入森林，哭声愈发清晰。(FS01)",
						"french": "En s'enfonçant dans la forêt, les pleurs devinrent plus distincts. (FS01)",
						"spanish": "Al adentrarse en el bosque, los lamentos se hicieron más claros. (FS01)",
						"vietnamese": "Càng vào sâu trong rừng, tiếng khóc càng rõ ràng hơn. (FS01)",
						"thai": "เมื่อเข้าสู่ป่าลึก เสียงร้องไห้ก็ยิ่งชัดเจนขึ้น (FS01)",
						"hindi": "जैसे ही जंगल में गहराई तक गए, रोने की आवाज़ और साफ़ हो गई। (FS01)"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"type": "direction"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "들리나요? 이 숲의 슬픔이.",
						"english": "Do you hear it? This forest's sorrow.",
						"japanese": "聞こえますか？この森の悲しみが。",
						"chinese": "听到了吗？这片森林的悲伤。",
						"french": "Vous l'entendez ? La tristesse de cette forêt.",
						"spanish": "¿Lo oyes? La pena de este bosque.",
						"vietnamese": "Nghe thấy không? Nỗi buồn của khu rừng này.",
						"thai": "ได้ยินไหม? ความเศร้าของป่าแห่งนี้",
						"hindi": "क्या आपको सुनाई दे रहा है? इस जंगल का दुख।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "슬픔이라니? 그저 음산한 소리뿐인데.",
						"english": "Sorrow? It's just an eerie sound.",
						"japanese": "悲しみ？ただ不気味な音だけじゃないか。",
						"chinese": "悲伤？那不过是阴森的声音而已。",
						"french": "De la tristesse ? Ce n'est qu'un son sinistre.",
						"spanish": "¿Tristeza? Solo son sonidos inquietantes.",
						"vietnamese": "Buồn gì cơ? Chỉ là âm thanh rợn người thôi mà.",
						"thai": "ความเศร้าอะไร? ก็แค่เสียงน่าขนลุกเอง",
						"hindi": "दुख? ये तो बस एक डरावनी आवाज़ है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잊혀진 자들의 울음소리죠. 이 숲은… 과거를 반복하려 해요.",
						"english": "It's the cries of the forgotten. This forest… seeks to repeat the past.",
						"japanese": "忘れ去られた者たちの叫び声です。この森は…過去を繰り返そうとしている。",
						"chinese": "那是遗忘者的哭声。这片森林…想要重演过去。",
						"french": "Ce sont les pleurs des oubliés. Cette forêt… cherche à répéter le passé.",
						"spanish": "Son los lamentos de los olvidados. Este bosque… intenta repetir el pasado.",
						"vietnamese": "Đó là tiếng khóc của những người bị lãng quên. Rừng này… muốn lặp lại quá khứ.",
						"thai": "มันคือเสียงร้องไห้ของผู้ถูกลืม ป่าแห่งนี้… กำลังจะย้อนรอยอดีต",
						"hindi": "ये भूले हुए लोगों की चीखें हैं। यह जंगल… अतीत को दोहराना चाहता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭔가 찜찜해….",
						"english": "Something feels off…",
						"japanese": "何か嫌な予感がする…。",
						"chinese": "感觉有些不对劲…",
						"french": "Ça me met mal à l'aise…",
						"spanish": "Algo me inquieta…",
						"vietnamese": "Cảm thấy có gì đó không ổn…",
						"thai": "รู้สึกไม่สบายใจเลย…",
						"hindi": "कुछ ठीक नहीं लग रहा…"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 자꾸 마음이 무거워질까… (FS04)",
						"english": "Why does my heart feel so heavy…? (FS04)",
						"japanese": "なぜこんなに心が重くなるんだ… (FS04)",
						"chinese": "为什么我的心会越来越沉重… (FS04)",
						"french": "Pourquoi mon cœur s'alourdit-il ainsi… (FS04)",
						"spanish": "¿Por qué mi corazón se siente tan pesado…? (FS04)",
						"vietnamese": "Tại sao lòng mình cứ nặng trĩu thế này… (FS04)",
						"thai": "ทำไมใจฉันถึงหนักอึ้งอย่างนี้… (FS04)",
						"hindi": "मेरा मन इतना भारी क्यों हो रहा है… (FS04)"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ela",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "숲의 비극은… 끝나지 않았어요.",
						"english": "The forest's tragedy… hasn't ended.",
						"japanese": "森の悲劇は…終わっていません。",
						"chinese": "森林的悲剧…尚未结束。",
						"french": "La tragédie de la forêt… n'est pas terminée.",
						"spanish": "La tragedia del bosque… no ha terminado.",
						"vietnamese": "Bi kịch của khu rừng… vẫn chưa kết thúc.",
						"thai": "โศกนาฏกรรมของป่า… ยังไม่สิ้นสุด",
						"hindi": "जंगल की त्रासदी… खत्म नहीं हुई है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이죠? 우리가 해결하러 왔는데.",
						"english": "What do you mean? We came to solve it.",
						"japanese": "どういう意味ですか？私たちが解決しに来たのに。",
						"chinese": "你是什么意思？我们是来解决问题的。",
						"french": "Que voulez-vous dire ? Nous sommes venus pour résoudre ça.",
						"spanish": "¿Qué quiere decir? Vinimos a resolverlo.",
						"vietnamese": "Ý của cô là gì? Chúng tôi đến để giải quyết mà.",
						"thai": "หมายความว่าไง? เรามาที่นี่เพื่อแก้ไขปัญหานะ",
						"hindi": "आपका क्या मतलब है? हम इसे हल करने आए हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은… 자신을 파괴했던 자들의 고통을 되풀이하려 해요.",
						"english": "The forest… seeks to replay the suffering of those who destroyed it.",
						"japanese": "森は…自分を破壊した者たちの苦痛を繰り返そうとしている。",
						"chinese": "森林…想要重演那些毁灭它的人的痛苦。",
						"french": "La forêt… cherche à revivre la souffrance de ceux qui l'ont détruite.",
						"spanish": "El bosque… intenta repetir el sufrimiento de quienes lo destruyeron.",
						"vietnamese": "Rừng này… muốn lặp lại nỗi đau của những kẻ đã phá hủy nó.",
						"thai": "ป่า… กำลังจะซ้ำรอยความเจ็บปวดของผู้ที่ทำลายมัน",
						"hindi": "यह जंगल… उन लोगों के दर्द को दोहराना चाहता है जिन्होंने इसे नष्ट किया था।"
					},
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 뭘 했다고…!",
						"english": "What did we do…!",
						"japanese": "「私たちが何をしたって言うんだ…！」",
						"chinese": "“我们做了什么…！”",
						"french": "« Qu'avons-nous fait… ! »",
						"spanish": "« ¡¿Qué hemos hecho…?! »",
						"vietnamese": "“Chúng ta đã làm gì…!”",
						"thai": "“พวกเราทำอะไรลงไป…!”",
						"hindi": "“हमने क्या किया…!”"
					},
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "당신의 죄책감이… 느껴져요. 이 숲과 당신은… 연결되어 있어요. (FS04)",
						"english": "I feel your guilt… You and this forest are… connected. (FS04)",
						"japanese": "「あなたの罪悪感が…感じられます。この森とあなたは…繋がっています。(FS04)」",
						"chinese": "“我感受到了你的罪恶感……你和这片森林……是相连的。(FS04)”",
						"french": "« Je ressens votre culpabilité… Cette forêt et vous êtes… liés. (FS04) »",
						"spanish": "« Siento tu culpa… Tú y este bosque… estáis conectados. (FS04) »",
						"vietnamese": "“Tôi cảm nhận được sự tội lỗi của bạn… Bạn và khu rừng này… đã kết nối. (FS04)”",
						"thai": "“ฉันรู้สึกถึงความรู้สึกผิดของคุณ… คุณและป่าแห่งนี้… เชื่อมโยงกันอยู่ (FS04)”",
						"hindi": "“मुझे तुम्हारा अपराध बोध महसूस हो रहा है… तुम और यह जंगल… जुड़े हुए हो। (FS04)”"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 중심부에 가까워질수록, 공기는 더욱 무겁게 탐험대를 짓눌렀다.",
						"english": "As they drew closer to the heart of the forest, the air grew heavier, pressing down on the expedition team.",
						"japanese": "「森の中心に近づくにつれて、空気は探検隊をさらに重く押し潰した。」",
						"chinese": "“随着他们离森林中心越来越近，空气也变得越来越沉重，压得探险队喘不过气来。”",
						"french": "« Plus ils approchaient du cœur de la forêt, plus l'air devenait lourd, opprimant l'équipe d'expédition. »",
						"spanish": "« A medida que se acercaban al corazón del bosque, el aire se volvía más pesado, oprimiendo a la expedición. »",
						"vietnamese": "“Càng gần trung tâm khu rừng, không khí càng trở nên nặng nề, đè nặng lên đoàn thám hiểm.”",
						"thai": "“ยิ่งเข้าใกล้ใจกลางป่า อากาศก็ยิ่งหนักอึ้ง กดดันทีมสำรวจ”",
						"hindi": "“जैसे-जैसे वे जंगल के केंद्र के करीब आते गए, हवा और भी भारी होती गई, जिससे अभियान दल पर दबाव बढ़ता गया।”"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 못 가겠어… 뭔가 잘못된 것 같아. (FS04)",
						"english": "I can't go on… Something feels wrong. (FS04)",
						"japanese": "「もうこれ以上は無理だ…何かがおかしい。(FS04)」",
						"chinese": "“我不能再往前了……感觉有什么不对劲。(FS04)”",
						"french": "« Je ne peux plus continuer… Quelque chose ne va pas. (FS04) »",
						"spanish": "« No puedo más… Algo no está bien. (FS04) »",
						"vietnamese": "“Tôi không thể đi tiếp được nữa… Có gì đó không ổn. (FS04)”",
						"thai": "“ไปต่อไม่ไหวแล้ว… รู้สึกว่ามีอะไรผิดปกติ (FS04)”",
						"hindi": "“मैं और आगे नहीं जा सकता… कुछ गलत लग रहा है। (FS04)”"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "늦었어요. 이미 당신은… 비극의 일부가 되었으니까.",
						"english": "It's too late. You've already… become part of the tragedy.",
						"japanese": "「手遅れですよ。あなたはもう…悲劇の一部になったのだから。」",
						"chinese": "“太迟了。你已经……成为了悲剧的一部分。”",
						"french": "« Il est trop tard. Vous faites déjà… partie de la tragédie. »",
						"spanish": "« Es tarde. Ya eres… parte de la tragedia. »",
						"vietnamese": "“Đã quá muộn rồi. Bạn đã… trở thành một phần của bi kịch.”",
						"thai": "“สายเกินไปแล้ว คุณได้กลายเป็น… ส่วนหนึ่งของโศกนาฏกรรมไปแล้ว”",
						"hindi": "“बहुत देर हो चुकी है। तुम पहले ही… त्रासदी का हिस्सा बन चुके हो।”"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비극의 일부라니…!",
						"english": "Part of the tragedy…!",
						"japanese": "「悲劇の一部だと…！」",
						"chinese": "“悲剧的一部分…！”",
						"french": "« Partie de la tragédie… ! »",
						"spanish": "« ¡¿Parte de la tragedia…?! »",
						"vietnamese": "“Một phần của bi kịch…!”",
						"thai": "“ส่วนหนึ่งของโศกนาฏกรรมงั้นหรือ…!”",
						"hindi": "“त्रासदी का हिस्सा…!”"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 길을 가는 순간, 당신의 운명도… 반복될 거예요.",
						"english": "The moment you walk this path, your fate will… repeat itself.",
						"japanese": "「この道を歩む瞬間、あなたの運命も…繰り返されるでしょう。」",
						"chinese": "“当你踏上这条路的那一刻，你的命运也将会……重演。”",
						"french": "« Au moment où vous empruntez ce chemin, votre destin… se répétera. »",
						"spanish": "« En el momento en que tomes este camino, tu destino también… se repetirá. »",
						"vietnamese": "“Khoảnh khắc bạn đi trên con đường này, số phận của bạn cũng sẽ… lặp lại.”",
						"thai": "“เมื่อคุณก้าวเดินบนเส้นทางนี้ ชะตากรรมของคุณก็จะ… ซ้ำรอย”",
						"hindi": "“जिस पल तुम इस रास्ते पर चलोगे, तुम्हारा भाग्य भी… दोहराया जाएगा।”"
					},
					"speaker": "ela",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 힘 앞에 탐험대는 쓰러졌다. 숲의 비극은 계속되었다.",
						"english": "Before the immense power, the expedition fell. The tragedy of the forest continued.",
						"japanese": "巨大な力の前に探検隊は倒れた。森の悲劇は続いた。",
						"chinese": "在巨大的力量面前，探险队倒下了。森林的悲剧继续着。",
						"french": "Face à la puissance immense, l'expédition tomba. La tragédie de la forêt continua.",
						"spanish": "Ante el inmenso poder, la expedición cayó. La tragedia del bosque continuó.",
						"vietnamese": "Trước sức mạnh khổng lồ, đội thám hiểm đã gục ngã. Bi kịch của khu rừng vẫn tiếp diễn.",
						"thai": "คณะสำรวจล้มลงต่อหน้าพลังอันมหาศาล โศกนาฏกรรมของป่าดำเนินต่อไป",
						"hindi": "विशाल शक्ति के सामने अभियान दल गिर पड़ा। वन की त्रासदी जारी रही।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희는 그저… 반복될 뿐이야.",
						"english": "Foolish ones. You will merely... repeat.",
						"japanese": "愚かな者たちめ。お前たちはただ…繰り返されるだけだ。",
						"chinese": "愚蠢的东西。你们不过是…不断重复罢了。",
						"french": "Imbéciles. Vous ne ferez que… répéter.",
						"spanish": "Necios. Vosotros solo… repetiréis.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi chỉ là… lặp lại mà thôi.",
						"thai": "เจ้าพวกโง่เง่า พวกเจ้าก็แค่... วนซ้ำไปซ้ำมา",
						"hindi": "मूर्खों। तुम बस... दोहराए जाओगे।"
					}
				},
				{
					"content": {
						"korean": "…포기하지 않아. 진실을 밝혀낼 거야.",
						"english": "...I won't give up. I'll uncover the truth.",
						"japanese": "…諦めない。真実を明らかにする。",
						"chinese": "…我不会放弃。我会揭露真相的。",
						"french": "…Je n'abandonnerai pas. Je découvrirai la vérité.",
						"spanish": "…No me rendiré. Descubriré la verdad.",
						"vietnamese": "…Tôi sẽ không bỏ cuộc. Tôi sẽ tìm ra sự thật.",
						"thai": "...ฉันจะไม่ยอมแพ้ ฉันจะเปิดเผยความจริง",
						"hindi": "...मैं हार नहीं मानूंगा। मैं सच्चाई का पता लगाऊंगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 그림자가 힘없이 사라졌다.",
						"english": "The unknown shadow vanished powerlessly.",
						"japanese": "正体不明の影は力なく消え去った。",
						"chinese": "不知名的影子无力地消失了。",
						"french": "L'ombre inconnue disparut sans force.",
						"spanish": "La sombra desconocida desapareció sin fuerza.",
						"vietnamese": "Bóng tối vô danh biến mất trong vô vọng.",
						"thai": "เงาปริศนาหายไปอย่างไร้เรี่ยวแรง",
						"hindi": "अज्ञात छाया शक्तिहीन होकर गायब हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐흐… 착각하지 마라. 이것은… 시작일 뿐.",
						"english": "Heh heh... Don't be mistaken. This is... merely the beginning.",
						"japanese": "フフ…勘違いするな。これは…始まりに過ぎない。",
						"chinese": "呵呵…别搞错了。这…只是个开始。",
						"french": "Heh heh… Ne vous y trompez pas. Ce n'est… que le début.",
						"spanish": "Je je… No te equivoques. Esto es… solo el principio.",
						"vietnamese": "Hừ hừ… Đừng nhầm lẫn. Đây… chỉ là khởi đầu thôi.",
						"thai": "ฮึ่มๆ... อย่าเข้าใจผิด นี่มัน... เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "वाह! गलत मत समझना। यह तो... बस शुरुआत है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 비극은… 끝나지 않아. {random_boss}는… 언제든 돌아올 것이다.",
						"english": "The tragedy of the forest... never ends. {random_boss} will... return anytime.",
						"japanese": "森の悲劇は…終わらない。{random_boss}は…いつでも戻ってくるだろう。",
						"chinese": "森林的悲剧…永不结束。{random_boss}会…随时回来。",
						"french": "La tragédie de la forêt… ne finit jamais. {random_boss} reviendra… à tout moment.",
						"spanish": "La tragedia del bosque… nunca termina. {random_boss} regresará… en cualquier momento.",
						"vietnamese": "Bi kịch của khu rừng… sẽ không bao giờ kết thúc. {random_boss} sẽ… quay trở lại bất cứ lúc nào.",
						"thai": "โศกนาฏกรรมของป่า... ไม่มีวันจบสิ้น {random_boss} จะ... กลับมาได้ทุกเมื่อ",
						"hindi": "वन की त्रासदी... कभी समाप्त नहीं होती। {random_boss}... कभी भी लौट आएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝이 아니라고…?",
						"english": "It's not... over yet...?",
						"japanese": "まだ…終わりじゃないと…？",
						"chinese": "还…没结束吗…？",
						"french": "Ce n'est… pas encore fini… ?",
						"spanish": "¿Aún… no ha terminado…?",
						"vietnamese": "Vẫn… chưa kết thúc sao…?",
						"thai": "ยัง... ไม่จบอีกเหรอ...?",
						"hindi": "अभी… खत्म नहीं हुआ…?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "승리했지만, 알 수 없는 불안감이 탐험대를 덮쳤다. 숲은 여전히 비극을 품고 있었다.",
						"english": "Though victorious, an unknown unease enveloped the expedition. The forest still harbored tragedy.",
						"japanese": "勝利したが、未知の不安が探検隊を襲った。森は依然として悲劇を抱えていた。",
						"chinese": "尽管胜利了，一股莫名的不安感笼罩了探险队。森林依旧蕴含着悲剧。",
						"french": "Bien que victorieux, une inquiétude inconnue submergea l'expédition. La forêt abritait toujours la tragédie.",
						"spanish": "Aunque victoriosos, una inquietud desconocida envolvió a la expedición. El bosque aún albergaba la tragedia.",
						"vietnamese": "Dù đã chiến thắng, một cảm giác bất an không rõ bao trùm đội thám hiểm. Khu rừng vẫn chứa đựng bi kịch.",
						"thai": "แม้จะได้รับชัยชนะ แต่ความไม่สบายใจที่ไม่ทราบสาเหตุได้เข้าครอบงำคณะสำรวจ ป่ายังคงเก็บงำโศกนาฏกรรมไว้",
						"hindi": "यद्यपि विजयी हुए, एक अज्ञात बेचैनी ने अभियान दल को घेर लिया। वन अभी भी त्रासदी को संजोए हुए था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 존재였다.",
						"english": "A colossal shadow blocked their path. Its identity was unknown.",
						"japanese": "「巨大な影が道を遮った。正体不明の存在だった。」",
						"chinese": "“一个巨大的身影挡住了去路。那是一个身份不明的存在。”",
						"french": "« Une ombre colossale barra leur chemin. Son identité était inconnue. »",
						"spanish": "« Una sombra colosal bloqueó su camino. Era una entidad desconocida. »",
						"vietnamese": "“Một bóng đen khổng lồ chặn đường. Một sự tồn tại không rõ danh tính.”",
						"thai": "“เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่ไม่รู้จัก”",
						"hindi": "“एक विशालकाय परछाई ने रास्ता रोक लिया। उसकी पहचान अज्ञात थी।”"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 건가. 이 숲의 새로운 먹잇감.",
						"english": "So you've come this far. The forest's new prey.",
						"japanese": "「ここまで来たか。この森の新たな獲物よ。」",
						"chinese": "“原来你走到这里了。这片森林的新猎物。”",
						"french": "« Vous êtes donc arrivés jusqu'ici. La nouvelle proie de cette forêt. »",
						"spanish": "« Así que llegaste hasta aquí. La nueva presa de este bosque. »",
						"vietnamese": "“Ngươi đã đến đây rồi sao. Con mồi mới của khu rừng này.”",
						"thai": "“มาถึงที่นี่แล้วสินะ เหยื่อรายใหม่ของป่าแห่งนี้”",
						"hindi": "“तो तुम यहाँ तक आ गए। इस जंगल का नया शिकार।”"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서! 더 이상 숲을 망치지 마!",
						"english": "Step back! Don't ruin the forest any further!",
						"japanese": "「退がれ！これ以上森を荒らすな！」",
						"chinese": "“退下！不要再破坏森林了！”",
						"french": "« Reculez ! Ne détruisez plus la forêt ! »",
						"spanish": "« ¡Retrocede! ¡No sigas destruyendo el bosque! »",
						"vietnamese": "“Lùi lại! Đừng phá hoại khu rừng nữa!”",
						"thai": "“ถอยไป! อย่าทำลายป่าไปมากกว่านี้!”",
						"hindi": "“पीछे हटो! अब और जंगल को बर्बाद मत करो!”"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "숲은 끊임없이 반복될 뿐. 너희도 그 비극의 일부가 될 뿐이다.",
						"english": "The forest merely repeats endlessly. You too, are but a part of that tragedy.",
						"japanese": "森はただひたすら繰り返すだけ。お前たちもその悲劇の一部に過ぎない。",
						"chinese": "森林只会无休止地重复。你们也只是那悲剧的一部分。",
						"french": "La forêt ne fait que se répéter sans cesse. Vous aussi, vous ne serez qu'une partie de cette tragédie.",
						"spanish": "El bosque solo se repite sin cesar. Vosotros también seréis solo una parte de esa tragedia.",
						"vietnamese": "Rừng chỉ lặp đi lặp lại không ngừng. Các ngươi cũng chỉ là một phần của bi kịch đó.",
						"thai": "ป่าจะวนเวียนซ้ำไปซ้ำมาไม่รู้จบ พวกเจ้าก็เป็นเพียงส่วนหนึ่งของโศกนาฏกรรมนั้น",
						"hindi": "वन बस अनंत काल तक दोहराता रहेगा। तुम भी उस त्रासदी का एक हिस्सा मात्र हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 안에 있는 죄책감이… 달콤하구나. (FS04)",
						"english": "The guilt within you... how sweet. (FS04)",
						"japanese": "お前の中の罪悪感が…甘美だな。(FS04)",
						"chinese": "你内心的罪恶感…多么甜美啊。(FS04)",
						"french": "La culpabilité en toi… est si douce. (FS04)",
						"spanish": "La culpa dentro de ti... qué dulce. (FS04)",
						"vietnamese": "Cảm giác tội lỗi trong ngươi… thật ngọt ngào. (FS04)",
						"thai": "ความรู้สึกผิดในตัวเจ้า... ช่างหอมหวาน (FS04)",
						"hindi": "तुम्हारे अंदर का अपराधबोध... कितना मधुर है। (FS04)"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"안개가 숲을 삼켰다. 모든 것을 집어삼킬 듯이.",
			"희미한 울음소리가 숲 깊은 곳에서 들려왔다. 오래된 기억처럼.",
			"잊혀진 문명의 잔해들. 그리고 반복되는 비극의 전조.",
			"이 숲은, 당신을 기다렸다. 당신 안의 죄책감까지도."
		],
		"english": [
			"The fog swallowed the forest, as if to devour everything.",
			"A faint cry echoed from deep within the forest, like an old memory.",
			"Remains of a forgotten civilization. And an omen of recurring tragedy.",
			"This forest awaited you, even your inner guilt."
		],
		"japanese": [
			"霧が森を飲み込んだ。全てを食い尽くすかのように。",
			"幽かな鳴き声が森の奥深くから聞こえてきた。古い記憶のように。",
			"忘れ去られた文明の残骸。そして繰り返される悲劇の予兆。",
			"この森は、あなたを待っていた。あなたの中の罪悪感までも。"
		],
		"chinese": [
			"迷雾吞噬了森林，仿佛要吞噬一切。",
			"森林深处传来微弱的哭声，如同旧时的记忆。",
			"遗忘文明的残骸。以及重复悲剧的预兆。",
			"这片森林，一直在等你。甚至等你内心的罪恶感。"
		],
		"french": [
			"Le brouillard a englouti la forêt, comme pour tout dévorer.",
			"Un faible cri résonnait du plus profond de la forêt, comme un vieux souvenir.",
			"Les vestiges d'une civilisation oubliée. Et le présage d'une tragédie récurrente.",
			"Cette forêt vous attendait, même votre culpabilité intérieure."
		],
		"spanish": [
			"La niebla engulló el bosque, como si fuera a devorarlo todo.",
			"Un débil lamento resonó desde lo profundo del bosque, como un viejo recuerdo.",
			"Restos de una civilización olvidada. Y el presagio de una tragedia recurrente.",
			"Este bosque te esperaba, incluso tu culpa interior."
		],
		"vietnamese": [
			"Sương mù nuốt chửng khu rừng, như thể muốn nuốt chửng mọi thứ.",
			"Một tiếng kêu yếu ớt vọng lại từ sâu thẳm khu rừng, như một ký ức xưa cũ.",
			"Tàn tích của một nền văn minh bị lãng quên. Và điềm báo của một bi kịch lặp lại.",
			"Khu rừng này đã chờ đợi bạn, ngay cả cảm giác tội lỗi trong bạn."
		],
		"thai": [
			"หมอกกลืนกินป่าไป ราวกับจะกลืนกินทุกสิ่ง",
			"เสียงครวญครางแผ่วเบาดังมาจากส่วนลึกของป่า ราวกับความทรงจำเก่าแก่",
			"ซากอารยธรรมที่ถูกลืม และลางบอกเหตุของโศกนาฏกรรมที่เกิดขึ้นซ้ำๆ",
			"ป่าแห่งนี้รอคอยคุณ แม้กระทั่งความรู้สึกผิดในใจคุณ"
		],
		"hindi": [
			"कोहरे ने जंगल को निगल लिया, मानो सब कुछ निगलने को हो।",
			"जंगल की गहराई से एक धीमी सी रोने की आवाज़ आई, एक पुरानी याद की तरह।",
			"एक भूली हुई सभ्यता के अवशेष। और बार-बार होने वाली त्रासदी का शगुन।",
			"इस जंगल ने तुम्हें इंतज़ार किया, तुम्हारी अंदरूनी अपराधबोध को भी।"
		]
	}
} as const;
