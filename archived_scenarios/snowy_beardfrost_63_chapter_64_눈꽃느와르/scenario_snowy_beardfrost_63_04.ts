export const scenario_snowy_beardfrost_63_04 = {
	"scenario_id": "snowy_beardfrost_63_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
						"korean": "모든 것이 정지된 듯한 회색빛 세상. 우리는 또다시 낯선 환대에 갇혔다.",
						"english": "A gray world where everything seemed to stand still. We were trapped once again by unfamiliar hospitality.",
						"japanese": "全てが止まったかのような灰色の世界。私たちは再び、見知らぬもてなしに囚われた。",
						"chinese": "一个万物静止的灰色世界。我们再次被陌生的款待所困。",
						"french": "Un monde gris où tout semblait figé. Nous étions à nouveau piégés par une hospitalité inconnue.",
						"spanish": "Un mundo gris donde todo parecía inmóvil. Fuimos atrapados una vez más por una hospitalidad desconocida.",
						"vietnamese": "Một thế giới xám xịt như thể mọi thứ đều ngừng lại. Chúng ta lại bị mắc kẹt trong sự hiếu khách xa lạ.",
						"thai": "โลกสีเทาที่ทุกสิ่งดูเหมือนจะหยุดนิ่ง เราถูกกักขังด้วยการต้อนรับที่ไม่คุ้นเคยอีกครั้ง",
						"hindi": "एक धूसर दुनिया जहाँ सब कुछ स्थिर प्रतीत होता था। हम एक बार फिर अपरिचित आतिथ्य में फंस गए थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왠지 모르게 몸이 가벼워진 기분이야.",
						"english": "...I feel lighter somehow.",
						"japanese": "…なんだか、体が軽くなった気がする。",
						"chinese": "……不知为何，感觉身体变轻了。",
						"french": "...Je me sens plus léger, d'une certaine manière.",
						"spanish": "...De alguna manera, me siento más ligero.",
						"vietnamese": "...Không hiểu sao, tôi cảm thấy cơ thể nhẹ nhõm hơn.",
						"thai": "...ไม่รู้ทำไม แต่รู้สึกตัวเบาขึ้นเลย",
						"hindi": "...पता नहीं क्यों, मुझे हल्का महसूस हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "돌아갈 길은 없어. 여기선.",
						"english": "There's no way back. Not here.",
						"japanese": "帰り道はない。ここでは。",
						"chinese": "没有回头路了。在这里。",
						"french": "Il n'y a pas de retour possible. Pas ici.",
						"spanish": "No hay vuelta atrás. Aquí.",
						"vietnamese": "Không có đường về đâu. Ở đây.",
						"thai": "ไม่มีทางกลับแล้วล่ะ ที่นี่น่ะ",
						"hindi": "वापस जाने का कोई रास्ता नहीं है। यहाँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰？",
						"chinese": "你是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Anh là... ai?",
						"thai": "คุณ... เป็นใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 브란. 길 잃은 자를… 집으로 돌려보내는 길잡이지.",
						"english": "I am Bran. A guide who... sends the lost home.",
						"japanese": "私はブラン。道に迷った者を…家へ送り届ける案内人だ。",
						"chinese": "我是布兰。一个将迷途之人……送回家的向导。",
						"french": "Je suis Bran. Un guide qui... renvoie les égarés chez eux.",
						"spanish": "Soy Bran. Un guía que... envía a los perdidos a casa.",
						"vietnamese": "Tôi là Bran. Một người dẫn đường... đưa những kẻ lạc lối về nhà.",
						"thai": "ฉันคือแบรน ผู้นำทางที่...ส่งผู้หลงทางกลับบ้าน",
						"hindi": "मैं ब्रैन हूँ। एक मार्गदर्शक जो... खोए हुए लोगों को घर भेजता है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "하지만, 아무도 돌아가지 못했어. 여기선.",
						"english": "But no one has ever returned. Not from here.",
						"japanese": "しかし、誰も戻れなかった。ここでは。",
						"chinese": "但是，没有人能回去。在这里。",
						"french": "Mais personne n'est jamais revenu. Pas d'ici.",
						"spanish": "Pero nadie ha regresado. Desde aquí.",
						"vietnamese": "Nhưng chưa ai trở về được. Từ nơi này.",
						"thai": "แต่ไม่มีใครได้กลับไปหรอกนะ ที่นี่น่ะ",
						"hindi": "लेकिन, कोई वापस नहीं जा पाया। यहाँ से।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "오셨군요, 손님들! 따뜻하게 맞아드릴게요.",
						"english": "You've arrived, guests! I'll give you a warm welcome.",
						"japanese": "いらっしゃいませ、お客様方！温かくお迎えいたします。",
						"chinese": "欢迎，客人们！我会给你们热情的款待。",
						"french": "Vous êtes arrivés, chers invités ! Je vous souhaite une chaleureuse bienvenue.",
						"spanish": "¡Han llegado, invitados! Les daré una cálida bienvenida.",
						"vietnamese": "Các vị khách đã đến! Tôi sẽ đón tiếp các vị thật nồng hậu.",
						"thai": "ยินดีต้อนรับครับแขกทุกท่าน! ฉันจะต้อนรับคุณอย่างอบอุ่นเลย",
						"hindi": "आप आ गए हैं, मेहमानो! मैं आपका गर्मजोशी से स्वागत करूँगा।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…환대?",
						"english": "...Hospitality?",
						"japanese": "「…歓待？」",
						"chinese": "“……招待？”",
						"french": "...Hospitalité ?",
						"spanish": "¿...Hospitalidad?",
						"vietnamese": "...Lòng hiếu khách?",
						"thai": "...การต้อนรับ?",
						"hindi": "...आतिथ्य?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "환대의 그림자가 짙어질수록, 우리는 무언가에 묶여가는 기분이었다.",
						"english": "The deeper the shadow of welcome grew, the more we felt bound.",
						"japanese": "「歓待の影が濃くなるほど、私たちは何かに縛られていくようだった。」",
						"chinese": "“欢迎的阴影越深，我们感觉越是被束缚。”",
						"french": "Plus l'ombre de l'hospitalité s'épaississait, plus nous nous sentions liés à quelque chose.",
						"spanish": "Cuanto más se cernía la sombra de la hospitalidad, más nos sentíamos atados a algo.",
						"vietnamese": "Bóng tối của sự hiếu khách càng sâu, chúng tôi càng cảm thấy bị trói buộc vào một thứ gì đó.",
						"thai": "ยิ่งเงามืดของการต้อนรับทวีความรุนแรงขึ้นเท่าไหร่ เราก็ยิ่งรู้สึกผูกมัดกับบางสิ่งมากขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे आतिथ्य की छाया गहरी होती गई, हमें लगा कि हम किसी चीज़ से बंधे हुए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 450
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "여기는 끝없는 미용실이야. 잘려나간 조각들이 모여 새 생명을 얻지.",
						"english": "This is an endless salon. Clipped fragments gather to gain new life.",
						"japanese": "「ここは終わりのない美容室。切り取られた断片が集まり、新しい生命を得るの。」",
						"chinese": "“这里是无尽的理发店。剪下的碎片聚集起来，获得新生。”",
						"french": "C'est un salon de coiffure sans fin. Les fragments coupés se rassemblent pour obtenir une nouvelle vie.",
						"spanish": "Este es un salón de belleza sin fin. Los fragmentos cortados se reúnen para obtener una nueva vida.",
						"vietnamese": "Đây là một tiệm làm tóc không hồi kết. Những mảnh vụn bị cắt bỏ tập hợp lại để có được sự sống mới.",
						"thai": "นี่คือร้านเสริมสวยที่ไม่มีที่สิ้นสุด ชิ้นส่วนที่ถูกตัดออกจะรวมตัวกันเพื่อรับชีวิตใหม่",
						"hindi": "यह एक अंतहीन सैलून है। कटे हुए टुकड़े मिलकर नया जीवन प्राप्त करते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 말을 하는 거야?",
						"english": "What are you talking about?",
						"japanese": "「何を言っているの？」",
						"chinese": "“你在说什么？”",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Bạn đang nói về cái gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "잃어버린 것, 버려진 것들이 여기선 전부… 환영받거든.",
						"english": "Lost things, discarded things… they're all welcomed here.",
						"japanese": "「失われたもの、捨てられたもの、ここではすべて…歓迎されるの。」",
						"chinese": "“失去的东西，被丢弃的东西……在这里都受到欢迎。”",
						"french": "Les choses perdues, les choses abandonnées… tout est bienvenu ici.",
						"spanish": "Las cosas perdidas, las cosas abandonadas... todas son bienvenidas aquí.",
						"vietnamese": "Những thứ đã mất, những thứ bị bỏ đi… tất cả đều được chào đón ở đây.",
						"thai": "สิ่งของที่หายไป สิ่งของที่ถูกทิ้ง... ทั้งหมดได้รับการต้อนรับที่นี่",
						"hindi": "खोई हुई चीजें, त्यागी हुई चीजें... यहाँ सभी का स्वागत है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…점점 더 답답해져.",
						"english": "...It's getting more suffocating.",
						"japanese": "「…だんだん息苦しくなる。」",
						"chinese": "“……越来越令人窒息。”",
						"french": "...Ça devient de plus en plus étouffant.",
						"spanish": "...Cada vez es más sofocante.",
						"vietnamese": "...Càng ngày càng ngột ngạt.",
						"thai": "...มันอึดอัดขึ้นเรื่อยๆ",
						"hindi": "...यह और भी घुटन भरा होता जा रहा है।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "도망쳐 봐야 소용없어. 어차피 같은 곳으로 돌아오게 될 테니.",
						"english": "There's no use running. You'll only come back to the same place anyway.",
						"japanese": "「逃げても無駄よ。どうせ同じ場所に戻ってくるだけだから。」",
						"chinese": "“逃跑也没用。反正你只会回到同一个地方。”",
						"french": "C'est inutile de fuir. Tu ne feras que revenir au même endroit.",
						"spanish": "Es inútil huir. De todos modos, solo volverás al mismo lugar.",
						"vietnamese": "Chạy trốn cũng vô ích. Đằng nào bạn cũng sẽ quay lại cùng một nơi thôi.",
						"thai": "หนีไปก็ไร้ประโยชน์ คุณจะกลับมาที่เดิมอยู่ดี",
						"hindi": "भागने का कोई फायदा नहीं। तुम वैसे भी उसी जगह वापस आ जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 옛 캠프터. 우리는 섬뜩한 단서를 발견했다.",
						"english": "An old, ruined campsite. We discovered an eerie clue.",
						"japanese": "「廃墟となった古いキャンプ場。私たちは不気味な手がかりを発見した。」",
						"chinese": "“废弃的旧营地。我们发现了一个令人毛骨悚然的线索。”",
						"french": "Un ancien camping en ruines. Nous avons découvert un indice étrange.",
						"spanish": "Un antiguo campamento en ruinas. Descubrimos una pista inquietante.",
						"vietnamese": "Một khu cắm trại cũ đã đổ nát. Chúng tôi đã tìm thấy một manh mối đáng sợ.",
						"thai": "แคมป์เก่าที่รกร้าง เราพบเบาะแสที่น่าขนลุก",
						"hindi": "एक पुराना, बर्बाद कैंपसाइट। हमने एक अजीब सुराग खोजा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 뭐야? 가위랑 빗이… 새것 같아.",
						"english": "What's this? The scissors and comb... they look brand new.",
						"japanese": "「これ何？ハサミと櫛が…新品みたいだ。」",
						"chinese": "“这是什么？剪刀和梳子……看起来像全新的。”",
						"french": "Qu'est-ce que c'est ? Les ciseaux et le peigne... ils ont l'air neufs.",
						"spanish": "¿Qué es esto? Las tijeras y el peine... parecen nuevos.",
						"vietnamese": "Cái gì đây? Cái kéo và cái lược... chúng trông như mới.",
						"thai": "นี่อะไร? กรรไกรกับหวี... ดูเหมือนใหม่เลย",
						"hindi": "यह क्या है? कैंची और कंघी... बिल्कुल नए लग रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "bran",
					"duration_ms": 550,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저건 버려진 것들을 '정돈'하는 도구지. 모든 것을 가지려는 욕망의 흔적.",
						"english": "Those are tools for 'tidying' discarded things. Traces of a desire to possess everything.",
						"japanese": "「あれは捨てられたものを『整頓』する道具だ。すべてを手に入れようとする欲望の痕跡。」",
						"chinese": "“那些是‘整理’废弃物品的工具。是想要拥有一切的欲望的痕迹。”",
						"french": "Ce sont des outils pour 'ranger' les choses abandonnées. Des traces du désir de tout posséder.",
						"spanish": "Esas son herramientas para 'ordenar' las cosas abandonadas. Rastros de un deseo de poseerlo todo.",
						"vietnamese": "Đó là những công cụ để 'sắp xếp' những thứ bị bỏ đi. Dấu vết của ham muốn sở hữu mọi thứ.",
						"thai": "นั่นคือเครื่องมือสำหรับ 'จัดระเบียบ' สิ่งของที่ถูกทิ้ง ร่องรอยแห่งความปรารถนาที่จะครอบครองทุกสิ่ง",
						"hindi": "वे छोड़ी गई चीजों को 'व्यवस्थित' करने के उपकरण हैं। सब कुछ रखने की इच्छा के निशान।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "왜 이렇게… 힘이 빠지지?",
						"english": "Why am I... losing strength?",
						"japanese": "どうしてこんなに…力が抜けるんだ？",
						"chinese": "为什么会…这么虚弱？",
						"french": "Pourquoi est-ce que... je perds mes forces ?",
						"spanish": "¿Por qué... estoy perdiendo fuerza?",
						"vietnamese": "Sao lại... yếu ớt thế này?",
						"thai": "ทำไมถึง... หมดแรงขนาดนี้?",
						"hindi": "मुझे इतनी... कमजोरी क्यों महसूस हो रही है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "점점 더 가벼워질 거야. 모든 걸 잃을 때까지.",
						"english": "You'll grow lighter and lighter. Until you lose everything.",
						"japanese": "どんどん軽くなるだろう。すべてを失うまで。",
						"chinese": "你会越来越轻。直到失去一切。",
						"french": "Tu deviendras de plus en plus léger. Jusqu'à ce que tu perdes tout.",
						"spanish": "Te volverás cada vez más ligero. Hasta que lo pierdas todo.",
						"vietnamese": "Ngươi sẽ càng ngày càng nhẹ. Cho đến khi mất đi tất cả.",
						"thai": "เจ้าจะเบาขึ้นเรื่อย ๆ จนกว่าจะสูญสิ้นทุกสิ่ง",
						"hindi": "तुम हल्के होते जाओगे। जब तक सब कुछ खो न दो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "… !",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "몸은 점점 더 가벼워졌다. 알 수 없는 공허함이 마음을 잠식했다.",
						"english": "My body grew lighter and lighter. An unknown void consumed my heart.",
						"japanese": "体はどんどん軽くなった。知らぬ間に空虚感が心を蝕んだ。",
						"chinese": "身体越来越轻。莫名的空虚感侵蚀了我的心。",
						"french": "Mon corps devint de plus en plus léger. Un vide inconnu consumait mon cœur.",
						"spanish": "Mi cuerpo se volvió cada vez más ligero. Un vacío desconocido consumió mi corazón.",
						"vietnamese": "Cơ thể ngày càng nhẹ bẫng. Một sự trống rỗng không tên xâm chiếm tâm trí.",
						"thai": "ร่างกายเบาลงเรื่อย ๆ ความว่างเปล่าที่อธิบายไม่ได้กัดกินหัวใจ",
						"hindi": "मेरा शरीर हल्का होता गया। एक अनजाना खालीपन मेरे दिल को खा गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "밤에 누가 내 머리를 빗는 꿈을 꿨어. 섬뜩하게.",
						"english": "I dreamed someone combed my hair at night. It was eerie.",
						"japanese": "夜、誰かが私の髪を梳かす夢を見た。薄気味悪く。",
						"chinese": "我梦见有人在夜里梳我的头发。毛骨悚然。",
						"french": "J'ai rêvé que quelqu'un me peignait les cheveux la nuit. C'était sinistre.",
						"spanish": "Soñé que alguien me peinaba el pelo por la noche. Fue espeluznante.",
						"vietnamese": "Tôi mơ thấy có ai đó chải tóc cho tôi vào ban đêm. Thật rợn người.",
						"thai": "ฉันฝันว่ามีคนหวีผมให้ตอนกลางคืน มันน่าขนลุก",
						"hindi": "मैंने सपना देखा कि रात में कोई मेरे बाल कंघी कर रहा था। यह डरावना था।"
					},
					"speaker": "character_3"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "나도 모르게 머리카락을 만지게 돼. 왠지 중요한 걸 잃은 것 같아.",
						"english": "I unconsciously touch my hair. I feel like I've lost something important.",
						"japanese": "無意識に髪を触ってしまう。なぜか大切なものを失った気がする。",
						"chinese": "我不由自主地摸了摸头发。总觉得好像失去了什么重要的东西。",
						"french": "Je me touche les cheveux sans m'en rendre compte. J'ai l'impression d'avoir perdu quelque chose d'important.",
						"spanish": "Me toco el pelo sin darme cuenta. Siento que he perdido algo importante.",
						"vietnamese": "Tôi vô thức chạm vào tóc mình. Cảm giác như đã mất đi thứ gì đó quan trọng.",
						"thai": "ฉันเผลอจับผมตัวเอง ฉันรู้สึกเหมือนเสียบางสิ่งสำคัญไป",
						"hindi": "मैं अनजाने में अपने बालों को छूने लगता हूँ। मुझे लगता है जैसे मैंने कुछ महत्वपूर्ण खो दिया है।"
					}
				},
				{
					"spot": [
						1,
						2
					],
					"speaker": "bran",
					"duration_ms": 400,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "그게 바로 '환대'의 대가지. 너희도 곧 알게 될 거야.",
						"english": "That's the price of 'hospitality.' You'll find out soon enough.",
						"japanese": "それが『もてなし』の代償だ。お前たちもすぐに分かるだろう。",
						"chinese": "那就是‘款待’的代价。你们很快就会知道的。",
						"french": "C'est le prix de l'«hospitalité». Vous le saurez bien assez tôt.",
						"spanish": "Ese es el precio de la 'hospitalidad'. Pronto lo sabréis.",
						"vietnamese": "Đó chính là cái giá của sự 'hiếu khách'. Ngươi rồi sẽ sớm biết thôi.",
						"thai": "นั่นคือราคาของ 'การต้อนรับ' พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "यही 'आतिथ्य' की कीमत है। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "여기는 모든 것을 탐하는 곳. 너희의 모든 것을.",
						"english": "This is a place that covets everything. All of you.",
						"japanese": "ここはすべてを貪る場所。お前たちのすべてを。",
						"chinese": "这里是贪婪一切的地方。贪婪你们的一切。",
						"french": "C'est un endroit qui convoite tout. Tout de vous.",
						"spanish": "Este es un lugar que codicia todo. Todo de vosotros.",
						"vietnamese": "Đây là nơi thèm khát mọi thứ. Thèm khát tất cả của các ngươi.",
						"thai": "ที่นี่คือสถานที่ที่โลภทุกสิ่ง ทุกสิ่งของพวกเจ้า",
						"hindi": "यह वह जगह है जो सब कुछ लालच करती है। तुम्हारा सब कुछ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 여기서 뭘 잃고 있는 거지?",
						"english": "What are we losing here?",
						"japanese": "私たちはここで何を失っているんだろう？",
						"chinese": "我们在这里失去了什么？",
						"french": "Que perdons-nous ici ?",
						"spanish": "¿Qué estamos perdiendo aquí?",
						"vietnamese": "Chúng ta đang mất đi thứ gì ở đây?",
						"thai": "เรากำลังสูญเสียอะไรไปที่นี่?",
						"hindi": "हम यहाँ क्या खो रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "아무것도 변하지 않아. 이 비극은 계속 반복될 뿐이야.",
						"english": "Nothing changes. This tragedy will only repeat.",
						"japanese": "何も変わらない。この悲劇は繰り返されるだけだ。",
						"chinese": "什么都不会改变。这场悲剧只会不断重演。",
						"french": "Rien ne change. Cette tragédie ne fera que se répéter.",
						"spanish": "Nada cambia. Esta tragedia solo se repetirá.",
						"vietnamese": "Chẳng có gì thay đổi cả. Bi kịch này sẽ chỉ lặp lại mà thôi.",
						"thai": "ไม่มีอะไรเปลี่ยนแปลง โศกนาฏกรรมนี้จะเกิดขึ้นซ้ำ ๆ เท่านั้น",
						"hindi": "कुछ भी नहीं बदलेगा। यह त्रासदी बस दोहराई जाएगी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…포기할 순 없어.",
						"english": "...I can't give up.",
						"japanese": "「…諦めるわけにはいかない。」",
						"chinese": "“…不能放弃。”",
						"french": "...Je ne peux pas abandonner.",
						"spanish": "...No puedo rendirme.",
						"vietnamese": "...Không thể bỏ cuộc.",
						"thai": "...ฉันยอมแพ้ไม่ได้",
						"hindi": "...मैं हार नहीं मान सकता।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "차갑고 날카로운 빛이 모든 것을 잘라냈다.",
						"english": "A cold, sharp light cut through everything.",
						"japanese": "「冷たく鋭い光がすべてを切り裂いた。」",
						"chinese": "“冰冷而锐利的光芒斩断了一切。”",
						"french": "« Une lumière froide et tranchante trancha tout. »",
						"spanish": "Una luz fría y afilada lo cortó todo.",
						"vietnamese": "Một luồng sáng lạnh lẽo và sắc bén cắt đứt mọi thứ.",
						"thai": "แสงอันเย็นยะเยือกและคมกริบผ่าฟันทุกสิ่ง",
						"hindi": "एक ठंडी, तीखी रोशनी ने सब कुछ काट डाला।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직 부족하군요, 손님. 제가 더 '완벽'하게 만들어 드릴게요.",
						"english": "Not enough yet, guest. I'll make you more 'perfect'.",
						"japanese": "「まだ足りませんね、お客様。私がもっと『完璧』にして差し上げましょう。」",
						"chinese": "“还不够呢，客人。我会让您变得更‘完美’。”",
						"french": "« Ce n'est pas encore assez, invité. Je vais vous rendre plus 'parfait'. »",
						"spanish": "Aún no es suficiente, invitado. Te haré más 'perfecto'.",
						"vietnamese": "Chưa đủ đâu, khách của tôi. Tôi sẽ khiến ngài trở nên 'hoàn hảo' hơn.",
						"thai": "ยังไม่พอหรอกนะ ท่านผู้มาเยือน ข้าจะทำให้ท่าน 'สมบูรณ์แบบ' ยิ่งขึ้น",
						"hindi": "अभी काफी नहीं है, अतिथि। मैं तुम्हें और 'उत्तम' बना दूँगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…다시 돌아올 거야. 반드시 끝낼 거야!",
						"english": "...I'll be back. I will finish this!",
						"japanese": "「…また戻ってくる。必ず終わらせる！」",
						"chinese": "“……我会回来的。我一定会结束这一切！”",
						"french": "« ...Je reviendrai. Je vais en finir ! »",
						"spanish": "...Volveré. ¡Terminaré esto!",
						"vietnamese": "...Tôi sẽ trở lại. Tôi nhất định sẽ kết thúc nó!",
						"thai": "...ข้าจะกลับมา ข้าจะจัดการให้เสร็จสิ้น!",
						"hindi": "...मैं वापस आऊँगा। मैं इसे खत्म करूँगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그럼요. 언제든 환영이에요. 영원히.",
						"english": "Of course. Always welcome. Forever.",
						"japanese": "「もちろんです。いつでも歓迎いたします。永遠に。」",
						"chinese": "“当然。随时欢迎。永远。”",
						"french": "« Bien sûr. Toujours le bienvenu. Pour toujours. »",
						"spanish": "Claro. Siempre bienvenido. Para siempre.",
						"vietnamese": "Tất nhiên rồi. Luôn hoan nghênh. Mãi mãi.",
						"thai": "แน่นอน ยินดีต้อนรับเสมอไป ชั่วนิรันดร์",
						"hindi": "बेशक। हमेशा स्वागत है। हमेशा के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 그제야 숲은 낯선 침묵을 되찾았다.",
						"english": "The massive shadow fell. Only then did the forest regain an unfamiliar silence.",
						"japanese": "「巨大な影が倒れた。その時ようやく、森は見慣れない沈黙を取り戻した。」",
						"chinese": "“巨大的阴影倒下了。直到那时，森林才找回了陌生的寂静。”",
						"french": "L'ombre gigantesque tomba. Ce n'est qu'alors que la forêt retrouva un silence étrange.",
						"spanish": "La gigantesca sombra cayó. Solo entonces el bosque recuperó un silencio desconocido.",
						"vietnamese": "Bóng đen khổng lồ đã ngã xuống. Chỉ khi đó, khu rừng mới lấy lại được sự tĩnh lặng xa lạ.",
						"thai": "เงาขนาดมหึมาล้มลง เมื่อนั้นป่าก็กลับคืนสู่ความเงียบงันที่ไม่คุ้นเคย",
						"hindi": "विशाल परछाई गिर गई। तभी जंगल ने एक अपरिचित खामोशी वापस पाई।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도로는 안 돼… 넌… 또 올 거야…",
						"english": "...This isn't enough... You'll... come again...",
						"japanese": "「…これだけでは駄目だ…お前は…また来るだろう…」",
						"chinese": "“…光凭这点还不够…你…还会再来的…”",
						"french": "...Ce n'est pas suffisant... Tu... reviendras...",
						"spanish": "...Esto no es suficiente... Tú... volverás...",
						"vietnamese": "...Chỉ thế này thôi là chưa đủ... Ngươi... sẽ lại đến...",
						"thai": "...แค่นี้ยังไม่พอ... เจ้า... จะกลับมาอีก...",
						"hindi": "...इतना काफी नहीं है... तुम... फिर आओगे..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that?",
						"japanese": "「何だって？」",
						"chinese": "“你说什么？”",
						"french": "« Qu'est-ce que c'était ? »",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "क्या था वो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…모든 걸 잃고… 다시 이곳으로… 돌아올 거야…",
						"english": "...losing everything... you'll return... to this place...",
						"japanese": "「…すべてを失い… またここへ… 戻ってくるだろう…」",
						"chinese": "“……失去一切……再次回到……这里……”",
						"french": "« ...tout perdre... et revenir... ici... »",
						"spanish": "...perderlo todo... y volver... a este lugar...",
						"vietnamese": "...mất tất cả... rồi sẽ trở lại... nơi này...",
						"thai": "...สูญสิ้นทุกสิ่ง... และจะกลับมา... ที่นี่อีกครั้ง...",
						"hindi": "...सब कुछ खोकर... यहीं... वापस आओगे..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그 말은 진한 여운을 남겼다. 우리는… 정말로 여기서 벗어날 수 있을까?",
						"english": "His words left a lasting impression. Can we... truly escape this place?",
						"japanese": "「その言葉は深い余韻を残した。私たちは… 本当にここから抜け出せるのだろうか？」",
						"chinese": "“那句话留下了深刻的余韵。我们……真的能摆脱这里吗？”",
						"french": "« Ses mots laissèrent une forte impression. Pouvons-nous... vraiment échapper à cet endroit ? »",
						"spanish": "Sus palabras dejaron una profunda huella. ¿Podremos... realmente escapar de aquí?",
						"vietnamese": "Lời nói đó để lại dư âm sâu sắc. Chúng ta... liệu có thật sự thoát khỏi nơi này không?",
						"thai": "คำพูดนั้นทิ้งร่องรอยไว้ลึกซึ้ง เรา... จะหนีจากที่นี่ได้จริงหรือ?",
						"hindi": "उसके शब्दों ने एक गहरी छाप छोड़ी। क्या हम... सच में यहाँ से बच निकल पाएंगे?"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "오셨군요, 나의 소중한 손님들! 완벽하게 '정돈'해 드릴게요.",
						"english": "Welcome, my precious guests! I'll 'arrange' everything perfectly for you.",
						"japanese": "「いらっしゃいませ、私の大切なお客様！全て完璧に『整頓』して差し上げましょう。」",
						"chinese": "“欢迎，我珍贵的客人们！我会把一切都完美地‘整理’好。”",
						"french": "Bienvenue, mes précieux invités ! Je vais tout 'arranger' parfaitement pour vous.",
						"spanish": "¡Bienvenidos, mis preciosos invitados! Les 'arreglaré' todo a la perfección.",
						"vietnamese": "Chào mừng, những vị khách quý của tôi! Tôi sẽ 'sắp xếp' mọi thứ hoàn hảo cho các bạn.",
						"thai": "ยินดีต้อนรับแขกผู้มีเกียรติของข้า! ข้าจะ 'จัดระเบียบ' ทุกสิ่งให้สมบูรณ์แบบสำหรับท่าน",
						"hindi": "स्वागत है, मेरे अनमोल मेहमानो! मैं सब कुछ बिल्कुल 'व्यवस्थित' कर दूँगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 뭘 잃었는지 알아!",
						"english": "We know what we lost!",
						"japanese": "「何を失ったか、分かってるだろ！」",
						"chinese": "“我们知道我们失去了什么！”",
						"french": "Nous savons ce que nous avons perdu !",
						"spanish": "¡Sabemos lo que perdimos!",
						"vietnamese": "Chúng ta biết mình đã mất gì!",
						"thai": "เรารู้ว่าเราสูญเสียอะไรไป!",
						"hindi": "हम जानते हैं कि हमने क्या खोया!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "뭘 잃어요? 제가 전부 완벽하게 보살펴 드릴 건데?",
						"english": "Lose what? I'll take perfect care of everything for you.",
						"japanese": "「何を失うって？私が全て完璧に面倒を見て差し上げるのに？」",
						"chinese": "“失去什么？我会把一切都完美地照顾好啊？”",
						"french": "Perdre quoi ? Je vais m'occuper de tout parfaitement pour vous, non ?",
						"spanish": "¿Perder qué? Yo me encargaré de todo a la perfección, ¿no?",
						"vietnamese": "Mất gì cơ? Tôi sẽ chăm sóc mọi thứ hoàn hảo cho các bạn mà?",
						"thai": "สูญเสียอะไร? ข้าจะดูแลทุกอย่างให้ท่านอย่างสมบูรณ์แบบไม่ใช่รึไง?",
						"hindi": "क्या खोना? मैं सब कुछ का पूरा ध्यान रखूँगा।"
					}
				},
				{
					"speaker": "bran",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저자의 '환대'는 모든 것을 빼앗아. 결국 너희도 나처럼 될 거야.",
						"english": "His 'hospitality' takes everything. In the end, you'll become like me.",
						"japanese": "「あの者の『もてなし』は全てを奪う。結局、お前たちも私と同じになるだろう。」",
						"chinese": "“他的‘款待’会夺走一切。最终，你们也会变得和我一样。”",
						"french": "Son 'hospitalité' prend tout. Au final, vous deviendrez comme moi.",
						"spanish": "Su 'hospitalidad' lo quita todo. Al final, ustedes también serán como yo.",
						"vietnamese": "'Sự hiếu khách' của hắn ta lấy đi mọi thứ. Cuối cùng, các ngươi cũng sẽ trở thành như ta.",
						"thai": "'การต้อนรับ' ของมันเอาทุกสิ่งไป สุดท้ายแล้วพวกเจ้าก็จะกลายเป็นเหมือนข้า",
						"hindi": "उसकी 'मेहमाननवाज़ी' सब कुछ ले लेती है। अंत में, तुम भी मेरी तरह बन जाओगे।"
					},
					"speaker": "bran"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 우리는 다르다고!",
						"english": "Shut up! We're different!",
						"japanese": "「黙れ！私たちは違う！」",
						"chinese": "“闭嘴！我们不一样！”",
						"french": "Tais-toi ! Nous sommes différents !",
						"spanish": "¡Cállate! ¡Nosotros somos diferentes!",
						"vietnamese": "Im đi! Chúng ta khác biệt!",
						"thai": "หุบปาก! เราแตกต่างกัน!",
						"hindi": "चुप रहो! हम अलग हैं!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그래. 한번 해 봐. 어차피… 반복될 테니.",
						"english": "...Fine. Go ahead. It'll just... repeat anyway.",
						"japanese": "「…そうか。やってみろ。どうせ…繰り返されるだけだ。」",
						"chinese": "“…好吧。试试看吧。反正…会重演的。”",
						"french": "...Bien. Allez-y. De toute façon... ça se répétera.",
						"spanish": "...Está bien. Inténtalo. De todos modos... se repetirá.",
						"vietnamese": "...Được thôi. Cứ làm đi. Dù sao thì... nó cũng sẽ lặp lại thôi.",
						"thai": "...เอาสิ ลองดูสิ ยังไงซะ...มันก็จะซ้ำรอยเดิมอยู่ดี",
						"hindi": "...ठीक है। कोशिश करो। वैसे भी... यह दोहराया जाएगा।"
					},
					"speaker": "bran"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어딜 가려고? 아직 서비스가 끝나지 않았는데!",
						"english": "Where are you going? The service isn't over yet!",
						"japanese": "「どこへ行くつもり？まだサービスは終わってないわよ！」",
						"chinese": "“想去哪儿？服务还没结束呢！”",
						"french": "Où allez-vous ? Le service n'est pas encore terminé !",
						"spanish": "¿A dónde van? ¡El servicio aún no ha terminado!",
						"vietnamese": "Các ngươi định đi đâu? Dịch vụ vẫn chưa kết thúc mà!",
						"thai": "จะไปไหน? บริการยังไม่จบนะ!",
						"hindi": "कहाँ जा रहे हो? सेवा अभी खत्म नहीं हुई है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 눈보라 속, 환대는 점차 집착이 되어 돌아왔다.",
			"나른한 평화는 불안을 키웠고, 우리는 서서히 중요한 무언가를 잃어갔다.",
			"체념한 길잡이는 속삭였다. '아무것도 변하지 않을 거라고.'"
		],
		"english": [
			"In the endless blizzard, hospitality gradually turned into obsession.",
			"Languid peace fostered unease, and we slowly lost something important.",
			"The resigned guide whispered, 'Nothing will change.'"
		],
		"japanese": [
			"終わりない吹雪の中、もてなしは次第に執着へと変わっていった。",
			"気だるい平和は不安を募らせ、私たちはゆっくりと大切な何かを失っていった。",
			"諦めた案内人は囁いた。「何も変わらないだろうと。」"
		],
		"chinese": [
			"在无尽的暴风雪中，款待渐渐变成了执念。",
			"慵懒的平静滋生了不安，我们渐渐失去了重要的东西。",
			"认命的向导低语道：“什么都不会改变。”"
		],
		"french": [
			"Dans le blizzard incessant, l'hospitalité s'est progressivement transformée en obsession.",
			"La paix langoureuse a nourri l'inquiétude, et nous avons lentement perdu quelque chose d'important.",
			"Le guide résigné a murmuré : « Rien ne changera. »"
		],
		"spanish": [
			"En la tormenta de nieve interminable, la hospitalidad se convirtió poco a poco en obsesión.",
			"La paz lánguida alimentó la inquietud, y lentamente fuimos perdiendo algo importante.",
			"El guía resignado susurró: \"Nada cambiará\"."
		],
		"vietnamese": [
			"Trong bão tuyết vô tận, sự hiếu khách dần biến thành nỗi ám ảnh.",
			"Sự bình yên uể oải nuôi dưỡng nỗi bất an, và chúng ta dần mất đi điều gì đó quan trọng.",
			"Người dẫn đường cam chịu thì thầm: \"Sẽ chẳng có gì thay đổi đâu.\""
		],
		"thai": [
			"ท่ามกลางพายุหิมะไม่รู้จบ การต้อนรับกลับกลายเป็นความหลงใหล",
			"สันติสุขอันเชื่องช้าได้บ่มเพาะความไม่สบายใจ และเราค่อยๆ สูญเสียบางสิ่งที่สำคัญไป",
			"ผู้นำทางที่ยอมแพ้กระซิบว่า \"ไม่มีอะไรจะเปลี่ยนแปลง\""
		],
		"hindi": [
			"अंतहीन बर्फीले तूफान में, आतिथ्य धीरे-धीरे जुनून में बदल गया।",
			"सुस्त शांति ने बेचैनी को जन्म दिया, और हमने धीरे-धीरे कुछ महत्वपूर्ण खो दिया।",
			"इस्तीफा दिए हुए मार्गदर्शक ने फुसफुसाया, \"कुछ भी नहीं बदलेगा।\""
		]
	}
} as const;
