export const scenario_hell_kirantej_27_01 = {
	"scenario_id": "hell_kirantej_27_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"emotion": "base",
					"content": {
						"korean": "지옥 서고. 영혼의 무게를 재는 거대한 도서관이었다.",
						"english": "Hell Library. A colossal library that weighed the souls.",
						"japanese": "地獄書庫。魂の重さを量る巨大な図書館だった。",
						"chinese": "地狱书库。一座衡量灵魂重量的巨大图书馆。",
						"french": "La Bibliothèque de l'Enfer. Une bibliothèque colossale qui pesait les âmes.",
						"spanish": "La Biblioteca del Infierno. Una biblioteca colosal que pesaba las almas.",
						"vietnamese": "Thư viện Địa ngục. Một thư viện khổng lồ cân đo linh hồn.",
						"thai": "ห้องสมุดนรก. ห้องสมุดขนาดมหึมาที่ชั่งน้ำหนักวิญญาณ.",
						"hindi": "नर्क पुस्तकालय। एक विशाल पुस्तकालय जो आत्माओं का वजन तौलता था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 지옥 서고? 생각보다 조용한데.",
						"english": "This is... Hell Library? It's quieter than I expected.",
						"japanese": "ここが…地獄書庫？思ったより静かだな。",
						"chinese": "这里就是……地狱书库？比我想象的要安静。",
						"french": "C'est... la Bibliothèque de l'Enfer ? C'est plus silencieux que prévu.",
						"spanish": "¿Esta es... la Biblioteca del Infierno? Es más silenciosa de lo que esperaba.",
						"vietnamese": "Đây là... Thư viện Địa ngục? Yên tĩnh hơn tôi nghĩ.",
						"thai": "นี่คือ...ห้องสมุดนรกเหรอ? เงียบกว่าที่คิดไว้เยอะเลย.",
						"hindi": "यह... नर्क पुस्तकालय है? जितना सोचा था उससे ज्यादा शांत है।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 오세요! 길 잃은 영혼이시군요!",
						"english": "Welcome! You're a lost soul!",
						"japanese": "ようこそ！迷える魂ですね！",
						"chinese": "欢迎！你是一位迷失的灵魂！",
						"french": "Bienvenue ! Vous êtes une âme perdue !",
						"spanish": "¡Bienvenido! ¡Eres un alma perdida!",
						"vietnamese": "Chào mừng! Ngài là một linh hồn lạc lối!",
						"thai": "ยินดีต้อนรับ! คุณคือวิญญาณที่หลงทางสินะ!",
						"hindi": "स्वागत है! आप एक भटकी हुई आत्मा हैं!"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "저는 안내자 애쉬. 키란 테즈 대마법사님의 자비로운 서고에 오신 것을 환영합니다!",
						"english": "I am Ash, the guide. Welcome to the merciful library of Archmage Kiran Tez!",
						"japanese": "私は案内人アッシュ。キラン・テズ大魔道士様の慈悲深き書庫へようこそ！",
						"chinese": "我是引导者艾什。欢迎来到大魔法师基兰·特兹仁慈的图书馆！",
						"french": "Je suis Ash, le guide. Bienvenue dans la miséricordieuse bibliothèque de l'Archimage Kiran Tez !",
						"spanish": "Soy Ash, la guía. ¡Bienvenido a la misericordiosa biblioteca del Archimago Kiran Tez!",
						"vietnamese": "Tôi là Ash, người dẫn đường. Chào mừng đến với thư viện nhân từ của Đại pháp sư Kiran Tez!",
						"thai": "ฉันคือแอช ผู้แนะนำ. ยินดีต้อนรับสู่ห้องสมุดอันเมตตาของจอมเวทคิรัน เตซ!",
						"hindi": "मैं एश, मार्गदर्शक हूँ। महा जादूगर किरण तेज़ के दयालु पुस्तकालय में आपका स्वागत है!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "키란 테즈…?",
						"english": "Kiran Tez...?",
						"japanese": "キラン・テズ…？",
						"chinese": "基兰·特兹……？",
						"french": "Kiran Tez...?",
						"spanish": "¿Kiran Tez...?",
						"vietnamese": "Kiran Tez...?",
						"thai": "คิรัน เตซ...?",
						"hindi": "किरण तेज़...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ash",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이곳은 지옥의 모든 지식을 담고 있어요! 대마법사님의 지혜로 질서 정연하게 관리되죠!",
						"english": "This place holds all the knowledge of Hell! It's orderly managed by the Archmage's wisdom!",
						"japanese": "ここは地獄のあらゆる知識を収めています！大魔道士様の知恵で秩序正しく管理されていますよ！",
						"chinese": "这里收录着地狱的所有知识！由大魔法师的智慧井然有序地管理着！",
						"french": "Cet endroit contient toutes les connaissances de l'Enfer ! Il est géré de manière ordonnée par la sagesse de l'Archimage !",
						"spanish": "¡Este lugar contiene todo el conocimiento del Infierno! ¡Es gestionado ordenadamente por la sabiduría del Archimago!",
						"vietnamese": "Nơi đây chứa đựng tất cả kiến thức của Địa ngục! Nó được quản lý ngăn nắp bằng trí tuệ của Đại pháp sư!",
						"thai": "ที่นี่รวบรวมความรู้ทั้งหมดของนรกไว้! ถูกจัดการอย่างเป็นระเบียบด้วยปัญญาของจอมเวท!",
						"hindi": "यह जगह नर्क के सभी ज्ञान को समेटे हुए है! इसे महा जादूगर की बुद्धिमत्ता से व्यवस्थित रूप से प्रबंधित किया जाता है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "ash"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서고 깊은 곳에서, 희미한 기계음과 함께 영혼의 절규가 스쳐 지나갔다.",
						"english": "In the depths of the archive, a faint mechanical whir and a soul's scream brushed past.",
						"japanese": "書庫の奥深くで、微かな機械音と共に魂の叫びが通り過ぎた。",
						"chinese": "在书库深处，伴随着微弱的机械声，一声灵魂的尖叫划过。",
						"french": "Au plus profond des archives, un léger vrombissement mécanique et un cri d'âme ont effleuré.",
						"spanish": "En las profundidades del archivo, un débil zumbido mecánico y un grito de alma pasaron de largo.",
						"vietnamese": "Sâu trong thư viện, một tiếng động cơ yếu ớt và một tiếng thét của linh hồn lướt qua.",
						"thai": "ลึกเข้าไปในหอจดหมายเหตุ เสียงเครื่องจักรแผ่วเบาและเสียงกรีดร้องของวิญญาณได้พัดผ่านไป",
						"hindi": "अभिलेखागार की गहराई में, एक हल्की यांत्रिक गुनगुनाहट और आत्मा की चीख गूँज उठी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…방금 소리, 뭐지?",
						"english": "...What was that sound just now?",
						"japanese": "…今の音、何？",
						"chinese": "……刚才那是什么声音？",
						"french": "...Ce bruit, c'était quoi ?",
						"spanish": "...Ese ruido de ahora, ¿qué fue?",
						"vietnamese": "...Vừa rồi là tiếng gì vậy?",
						"thai": "...เมื่อกี้เสียงอะไรน่ะ?",
						"hindi": "…अभी वह आवाज़ क्या थी?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아, 아무것도 아니에요! 오래된 기록들이 가끔 소리를 내기도 한답니다. 중요치 않아요!",
						"english": "Oh, it's nothing! Old records sometimes make sounds. It's not important!",
						"japanese": "あ、何でもありませんよ！古い記録がたまに音を立てるだけです。重要ではありません！",
						"chinese": "啊，没什么！旧记录偶尔会发出声音。不重要！",
						"french": "Oh, ce n'est rien ! Les vieilles archives font parfois du bruit. Ce n'est pas important !",
						"spanish": "¡Oh, no es nada! Los viejos registros a veces hacen ruidos. ¡No es importante!",
						"vietnamese": "À, không có gì đâu! Những ghi chép cũ thỉnh thoảng phát ra tiếng động thôi. Không quan trọng đâu!",
						"thai": "โอ้ ไม่มีอะไรหรอก! บันทึกเก่าๆ บางทีก็มีเสียงดังขึ้นมาน่ะ ไม่สำคัญหรอก!",
						"hindi": "ओह, कुछ नहीं! पुरानी रिकॉर्ड्स कभी-कभी आवाज़ करती हैं। यह महत्वपूर्ण नहीं है!"
					},
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말… 아무것도 아니야?",
						"english": "Really... nothing at all?",
						"japanese": "本当に…何も無いの？",
						"chinese": "真的……什么都没有吗？",
						"french": "Vraiment... rien du tout ?",
						"spanish": "¿De verdad... nada de nada?",
						"vietnamese": "Thật sự... không có gì sao?",
						"thai": "จริงๆ... ไม่มีอะไรเลยเหรอ?",
						"hindi": "सच में... कुछ भी नहीं?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "대마법사님께서는 지옥의 '질서'를 '재구성'하기 위해 이 서고를 만드셨답니다! 모든 영혼은 '균형'을 찾아야 해요.",
						"english": "The Archmage created this archive to 'reconstruct' the 'order' of hell! All souls must find 'balance'.",
						"japanese": "大魔道師様は地獄の「秩序」を「再構築」するためにこの書庫を作られたのです！全ての魂は「均衡」を見つけなければなりません。",
						"chinese": "大魔法师创建这个书库是为了“重构”地狱的“秩序”！所有灵魂都必须找到“平衡”。",
						"french": "L'Archimage a créé ces archives pour « reconstruire » l'« ordre » des Enfers ! Toutes les âmes doivent trouver l'« équilibre ».",
						"spanish": "¡El Archimago creó este archivo para 'reconstruir' el 'orden' del infierno! Todas las almas deben encontrar el 'equilibrio'.",
						"vietnamese": "Đại Pháp sư đã tạo ra thư viện này để 'tái cấu trúc' 'trật tự' của địa ngục! Mọi linh hồn đều phải tìm thấy 'cân bằng'.",
						"thai": "จอมเวทสร้างหอจดหมายเหตุนี้ขึ้นมาเพื่อ 'จัดระเบียบใหม่' ซึ่งก็คือ 'ระเบียบ' ของนรก! ดวงวิญญาณทุกดวงต้องค้นหา 'ความสมดุล'",
						"hindi": "महा जादूगर ने नरक के 'व्यवस्था' को 'पुनर्गठित' करने के लिए इस अभिलेखागार का निर्माण किया है! सभी आत्माओं को 'संतुलन' खोजना होगा।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "질서, 재구성, 균형… 그게 영혼을 위한 건가?",
						"english": "Order, reconstruction, balance... Is that for souls?",
						"japanese": "秩序、再構築、均衡…それが魂のためなのか？",
						"chinese": "秩序、重构、平衡……那是为了灵魂吗？",
						"french": "Ordre, reconstruction, équilibre… C'est pour les âmes, ça ?",
						"spanish": "Orden, reconstrucción, equilibrio... ¿Eso es para las almas?",
						"vietnamese": "Trật tự, tái cấu trúc, cân bằng... Đó là vì linh hồn sao?",
						"thai": "ระเบียบ, การจัดระเบียบใหม่, ความสมดุล... นั่นมันสำหรับดวงวิญญาณเหรอ?",
						"hindi": "व्यवस्था, पुनर्गठन, संतुलन... क्या यह आत्माओं के लिए है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "물론이죠! 키란 테즈님의 자비로운 뜻이니까요! 여러분의 분노와 절망도 모두…",
						"english": "Of course! It's Grand Archmage Kiran Tez's benevolent will! All your rage and despair, too...",
						"japanese": "もちろんです！キラン・テズ様のお慈悲深いお志ですから！皆様の怒りも絶望も全て…",
						"chinese": "当然了！那是奇兰·特兹大魔法师的仁慈旨意！你们所有的愤怒和绝望也……",
						"french": "Bien sûr ! C'est la volonté bienveillante de la Grande Archimage Kiran Tez ! Toute votre rage et votre désespoir aussi...",
						"spanish": "¡Claro que sí! ¡Es la voluntad benevolente del Gran Archimago Kiran Tez! Toda vuestra ira y desesperación también...",
						"vietnamese": "Đương nhiên rồi! Đó là ý muốn nhân từ của Đại Pháp sư Kiran Tez! Tất cả sự giận dữ và tuyệt vọng của các bạn cũng...",
						"thai": "แน่นอนสิ! นั่นเป็นพระประสงค์อันเมตตาของมหาจอมเวทคิรัน เตซ! ทั้งความโกรธและความสิ้นหวังของพวกคุณก็ด้วย...",
						"hindi": "बिल्कुल! यह ग्रैंड आर्कमेज किरण तेज की परोपकारी इच्छा है! आपका सारा क्रोध और निराशा भी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "분노와 절망도 뭐?",
						"english": "Rage and despair too, what?",
						"japanese": "怒りと絶望も何？",
						"chinese": "愤怒和绝望也什么？",
						"french": "La rage et le désespoir aussi, quoi ?",
						"spanish": "¿La ira y la desesperación también qué?",
						"vietnamese": "Cả giận dữ và tuyệt vọng cũng gì?",
						"thai": "ความโกรธและความสิ้นหวังด้วยเหรอ, อะไรนะ?",
						"hindi": "क्रोध और निराशा भी क्या?"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "…더 큰 질서를 위한 소중한 재료가 된답니다! 어머, 제가 무슨 말을! 호호!",
						"english": "...become precious materials for a greater order! Oh dear, what was I saying! Hoho!",
						"japanese": "…より大きな秩序のための貴重な材料となるのです！あら、私ったら何を言ってるんでしょう！ホホ！",
						"chinese": "……都会成为为了更大秩序的宝贵材料！哎呀，我说了些什么呀！呵呵！",
						"french": "...deviennent de précieuses matières pour un ordre supérieur ! Oh là là, qu'est-ce que je raconte ! Hoho !",
						"spanish": "...¡se convierten en materiales preciosos para un orden mayor! ¡Vaya, qué cosas digo! ¡Jojo!",
						"vietnamese": "...sẽ trở thành những vật liệu quý giá cho một trật tự lớn hơn! Ôi chao, tôi đang nói gì thế này! Hô hô!",
						"thai": "...จะกลายเป็นวัตถุดิบอันล้ำค่าสำหรับระเบียบที่ยิ่งใหญ่กว่า! แหม ฉันพูดอะไรออกไปเนี่ย! โฮ่ๆ!",
						"hindi": "...एक बड़े व्यवस्था के लिए अनमोल सामग्री बन जाते हैं! अरे बाप रे, मैं क्या कह रही थी! होहो!"
					},
					"speaker": "ash"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 더 깊은 곳으로 가실 차례에요. 진실은 항상 가장 깊은 곳에 있죠!",
						"english": "Now it's time to go even deeper. The truth is always in the deepest place!",
						"japanese": "さあ、もっと奥へ進む番ですよ。真実はいつも一番深い場所にありますからね！",
						"chinese": "现在是时候去更深的地方了。真相总是在最深处！",
						"french": "Il est temps d'aller plus loin. La vérité se trouve toujours au plus profond !",
						"spanish": "Ahora es vuestro turno de ir más profundo. ¡La verdad siempre está en lo más hondo!",
						"vietnamese": "Bây giờ là lúc các bạn đi sâu hơn nữa. Sự thật luôn nằm ở nơi sâu nhất!",
						"thai": "ถึงเวลาที่คุณจะต้องลงไปลึกกว่าเดิมแล้วล่ะ ความจริงมักจะอยู่ในที่ที่ลึกที่สุดเสมอ!",
						"hindi": "अब और गहरे जाने की बारी है। सच्चाई हमेशा सबसे गहरी जगह पर होती है!"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "진실… 반드시 찾아야겠어.",
						"english": "The truth... I must find it.",
						"japanese": "真実…必ず見つけ出す。",
						"chinese": "真相…我必须找到它。",
						"french": "La vérité... Je dois la trouver.",
						"spanish": "La verdad... Debo encontrarla.",
						"vietnamese": "Sự thật... Tôi phải tìm ra nó.",
						"thai": "ความจริง... ฉันต้องหามันให้เจอ",
						"hindi": "सच... मुझे उसे ढूंढना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "…시간이, 빠르게 흐르는군. (정색하며) 어머, 제가 또! 빨리 가시죠!",
						"english": "...Time is flowing quickly. (Composing herself) Oh, me again! Let's go quickly!",
						"japanese": "…時間が、早く流れているな。(真顔で)あら、また私ったら！早く行きましょう！",
						"chinese": "…时间，过得真快啊。(板着脸)哎呀，我又来了！我们快走吧！",
						"french": "...Le temps passe vite. (Reprenant son sérieux) Oh, encore moi ! Allons-y vite !",
						"spanish": "...El tiempo corre rápido. (Componiéndose) ¡Oh, otra vez yo! ¡Vamos rápido!",
						"vietnamese": "...Thời gian trôi thật nhanh. (Nghiêm mặt lại) Ôi, lại là tôi! Nhanh lên nào!",
						"thai": "เวลาไหลเร็วเหลือเกิน (ปรับสีหน้า) โอ้ ฉันอีกแล้ว! ไปกันเถอะ!",
						"hindi": "समय, तेजी से बीत रहा है। (गंभीर होते हुए) अरे, मैं फिर से! जल्दी चलते हैं!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "방금… 뭐라고 한 거지?",
						"english": "Just now... what did you say?",
						"japanese": "今…何て言った？",
						"chinese": "刚才…你说了什么？",
						"french": "Juste avant... qu'est-ce que tu as dit ?",
						"spanish": "Acabás de... ¿qué dijiste?",
						"vietnamese": "Vừa nãy... bạn nói gì vậy?",
						"thai": "เมื่อกี้... คุณพูดว่าอะไรนะ?",
						"hindi": "अभी... तुमने क्या कहा?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "축하드려요! 당신의 '분노'는 이제 하나의 '시험'을 통과할 자격을 얻었어요!",
						"english": "Congratulations! Your 'wrath' has now qualified to pass a 'trial'!",
						"japanese": "おめでとうございます！あなたの『怒り』は、一つの『試練』を通過する資格を得ました！",
						"chinese": "恭喜你！你的“愤怒”现在已经获得了通过一项“试炼”的资格！",
						"french": "Félicitations ! Votre 'colère' est maintenant qualifiée pour passer une 'épreuve' !",
						"spanish": "¡Felicidades! ¡Tu 'ira' ahora ha calificado para pasar una 'prueba'!",
						"vietnamese": "Chúc mừng! 'Cơn thịnh nộ' của bạn giờ đã đủ điều kiện để vượt qua một 'thử thách'!",
						"thai": "ยินดีด้วย! 'ความโกรธ' ของคุณมีคุณสมบัติที่จะผ่าน 'บททดสอบ' แล้ว!",
						"hindi": "बधाई हो! आपका 'क्रोध' अब एक 'परीक्षा' पास करने के योग्य हो गया है!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "시험?",
						"english": "A trial?",
						"japanese": "試練？",
						"chinese": "试炼？",
						"french": "Une épreuve ?",
						"spanish": "¿Una prueba?",
						"vietnamese": "Thử thách?",
						"thai": "บททดสอบ?",
						"hindi": "परीक्षा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네! 대마법사님께서 특별히 준비하신 '재구성' 과정의 일부랍니다!",
						"english": "Yes! It's part of the 'Reconfiguration' process specially prepared by the Great Sorcerer!",
						"japanese": "はい！大魔術師様が特別に準備された『再構築』過程の一部ですよ！",
						"chinese": "是的！这是大魔法师大人特别准备的“重构”过程的一部分！",
						"french": "Oui ! Cela fait partie du processus de 'Reconfiguration' spécialement préparé par le Grand Sorcier !",
						"spanish": "¡Sí! ¡Es parte del proceso de 'Reconfiguración' especialmente preparado por el Gran Hechicero!",
						"vietnamese": "Vâng! Đó là một phần của quá trình 'Tái cấu trúc' do Đại Pháp Sư đặc biệt chuẩn bị!",
						"thai": "ใช่! เป็นส่วนหนึ่งของกระบวนการ 'การจัดระเบียบใหม่' ที่ท่านจอมเวทผู้ยิ่งใหญ่เตรียมไว้เป็นพิเศษ!",
						"hindi": "हाँ! यह महा जादूगर द्वारा विशेष रूप से तैयार की गई 'पुनर्संरचना' प्रक्रिया का एक हिस्सा है!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐흐… 또 하나의 어리석은 영혼이군.",
						"english": "Heh heh... another foolish soul.",
						"japanese": "ふふ…また一人、愚かな魂が来たな。",
						"chinese": "呵呵…又一个愚蠢的灵魂。",
						"french": "Heh heh... encore une âme insensée.",
						"spanish": "Je je... otra alma tonta.",
						"vietnamese": "Hừm hừm... lại một linh hồn ngu ngốc nữa.",
						"thai": "ฮึๆ... อีกหนึ่งวิญญาณโง่เขลา",
						"hindi": "हह... एक और मूर्ख आत्मा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "넌 누구야!",
						"english": "Who are you!",
						"japanese": "お前は誰だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "นายเป็นใคร!",
						"hindi": "तुम कौन हो!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는… 질서의 수호자. 네 '분노'를 기록하고 '재구성'할 존재.",
						"english": "I am... the Guardian of Order. The one who will record and 'reconfigure' your 'wrath'.",
						"japanese": "私は…秩序の守護者。お前の『怒り』を記録し、『再構築』する存在。",
						"chinese": "我是…秩序的守护者。记录并“重构”你“愤怒”的存在。",
						"french": "Je suis... le Gardien de l'Ordre. Celui qui enregistrera et 'reconfigurera' ta 'colère'.",
						"spanish": "Yo soy... el Guardián del Orden. El que registrará y 'reconfigurará' tu 'ira'.",
						"vietnamese": "Ta là... Người bảo hộ trật tự. Kẻ sẽ ghi lại và 'tái cấu trúc' 'cơn thịnh nộ' của ngươi.",
						"thai": "ฉันคือ... ผู้พิทักษ์แห่งระเบียบ ผู้ที่จะบันทึกและ 'จัดระเบียบใหม่' 'ความโกรธ' ของคุณ",
						"hindi": "मैं हूँ... व्यवस्था का संरक्षक। वह जो तुम्हारे 'क्रोध' को दर्ज करेगा और 'पुनर्संरचना' करेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가 누구를 재구성한다는 거야!",
						"english": "Who is reconfiguring whom?!",
						"japanese": "誰が誰を再構築するって言うんだ！",
						"chinese": "谁要重构谁！",
						"french": "Qui va reconfigurer qui ?!",
						"spanish": "¡¿Quién va a reconfigurar a quién?!",
						"vietnamese": "Ai sẽ tái cấu trúc ai cơ chứ!",
						"thai": "ใครจะจัดระเบียบใครกันแน่!",
						"hindi": "कौन किसको पुनर्संरचना करेगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하하! 아직 멀었군! 너의 '절망'도 훌륭한 재료가 될 것이다!",
						"english": "Hahaha! Not good enough yet! Your 'despair' will make excellent material!",
						"japanese": "ハハハ！まだまだだな！お前の「絶望」も素晴らしい材料になるだろう！",
						"chinese": "哈哈哈！还差得远呢！你的“绝望”也将是绝佳的材料！",
						"french": "Hahaha ! Pas encore assez ! Ton \"désespoir\" fera un excellent matériau !",
						"spanish": "¡Jajaja! ¡Todavía te falta! ¡Tu 'desesperación' también será un excelente material!",
						"vietnamese": "Hahaha! Vẫn còn xa lắm! 'Tuyệt vọng' của ngươi cũng sẽ là nguyên liệu tuyệt vời!",
						"thai": "ฮ่าฮ่าฮ่า! ยังห่างไกลนัก! 'ความสิ้นหวัง' ของเจ้าก็จะเป็นวัตถุดิบชั้นยอด!",
						"hindi": "हाहाहा! अभी बहुत दूर हो तुम! तुम्हारी 'निराशा' भी एक बेहतरीन सामग्री बनेगी!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직이야! 여기서 멈출 수 없어!",
						"english": "Ugh... Not yet! I can't stop here!",
						"japanese": "くっ… まだだ！ここで止まるわけにはいかない！",
						"chinese": "呃… 还没完！我不能止步于此！",
						"french": "Ugh... Pas encore ! Je ne peux pas m'arrêter ici !",
						"spanish": "Ugh... ¡Todavía no! ¡No puedo parar aquí!",
						"vietnamese": "Khụ... Chưa đâu! Ta không thể dừng lại ở đây!",
						"thai": "อึก... ยังหรอก! หยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "उफ़... अभी नहीं! मैं यहाँ रुक नहीं सकता!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괜찮아요! 다시 시도하면 된답니다! '재구성'은 반복을 통해 완성되니까요!",
						"english": "It's alright! Just try again! 'Reconstruction' is perfected through repetition!",
						"japanese": "大丈夫ですよ！もう一度試せばいいんです！「再構築」は繰り返しで完成しますから！",
						"chinese": "没关系！再试一次就好啦！“重构”可是通过反复才能完成的呢！",
						"french": "Ça va ! Réessayez simplement ! La \"reconstruction\" se perfectionne par la répétition !",
						"spanish": "¡Está bien! ¡Solo inténtalo de nuevo! ¡La 'reconstrucción' se perfecciona a través de la repetición!",
						"vietnamese": "Không sao đâu! Cứ thử lại là được ạ! 'Tái cấu trúc' được hoàn thiện qua sự lặp lại mà!",
						"thai": "ไม่เป็นไรค่ะ! แค่ลองอีกครั้งก็ได้แล้วค่ะ! 'การประกอบใหม่' จะสมบูรณ์แบบได้ด้วยการทำซ้ำๆ นะคะ!",
						"hindi": "कोई बात नहीं! बस फिर से कोशिश करो! 'पुनर्गठन' दोहराव के माध्यम से पूर्ण होता है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크흐… 이럴 수가… 대마법사님의 계획이… 틀어지는가…",
						"english": "Ugh... How can this be... Is the Archmage's plan... going awry...?",
						"japanese": "くっ… まさか… 大魔導師様の計画が… 狂うというのか…",
						"chinese": "呃… 怎么会这样… 大魔法师的计划… 要出岔子了吗…",
						"french": "Ugh... Impossible... Le plan de l'Archimage... échouerait-il...?",
						"spanish": "Uf... ¿Cómo es posible...? ¿El plan del Archimago... se está torciendo...?",
						"vietnamese": "Khụ... Không thể nào... Kế hoạch của Đại pháp sư... lại sai lệch sao...?",
						"thai": "อึก... ไม่จริงน่า... แผนของจอมเวทผู้ยิ่งใหญ่... กำลังจะผิดพลาดหรือนี่...",
						"hindi": "उफ़... यह कैसे हो सकता है... क्या महाजादूगर की योजना... विफल हो रही है...?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게 끝이 아니겠지.",
						"english": "This can't be the end.",
						"japanese": "これで終わりではないだろうな。",
						"chinese": "这不会是结束吧。",
						"french": "Ce ne peut être la fin.",
						"spanish": "Esto no puede ser el final.",
						"vietnamese": "Đây không thể là kết thúc.",
						"thai": "นี่คงไม่ใช่จุดจบหรอกนะ",
						"hindi": "यह अंत नहीं हो सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어머… 이렇게 빨리 끝날 줄이야… 데이터가… 불일치하는데…",
						"english": "Oh my... I didn't expect it to end so soon... The data... it's inconsistent...",
						"japanese": "あら… こんなに早く終わるとは… データが… 不一致だわ…",
						"chinese": "哎呀… 没想到这么快就结束了… 数据… 不一致啊…",
						"french": "Oh là là... Je ne m'attendais pas à ce que ça se termine si vite... Les données... sont incohérentes...",
						"spanish": "Vaya... No pensé que terminaría tan pronto... Los datos... son inconsistentes...",
						"vietnamese": "Ôi trời... Không ngờ lại kết thúc nhanh thế này... Dữ liệu... không khớp...",
						"thai": "อุ๊ย... ไม่คิดว่าจะจบเร็วขนาดนี้... ข้อมูล... ไม่ตรงกันเลย...",
						"hindi": "ओह... मुझे इतनी जल्दी खत्म होने की उम्मीद नहीं थी... डेटा... असंगत है..."
					},
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "데이터?",
						"english": "Data?",
						"japanese": "データ？",
						"chinese": "数据？",
						"french": "Données ?",
						"spanish": "¿Datos?",
						"vietnamese": "Dữ liệu?",
						"thai": "ข้อมูล?",
						"hindi": "डेटा?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어딘가 뒤틀린 지옥의 시스템. 주인공은 더 깊은 혼돈 속으로 발걸음을 옮겼다.",
						"english": "A twisted system of hell. The protagonist stepped deeper into the chaos.",
						"japanese": "何か歪んだ地獄のシステム。主人公はさらに深い混沌へと足を踏み入れた。",
						"chinese": "某个扭曲的地狱系统。主人公迈入了更深的混沌之中。",
						"french": "Un système infernal tordu. Le protagoniste s'enfonça plus profondément dans le chaos.",
						"spanish": "Un sistema infernal retorcido. El protagonista se adentró más en el caos.",
						"vietnamese": "Một hệ thống địa ngục méo mó. Nhân vật chính bước sâu hơn vào hỗn loạn.",
						"thai": "ระบบนรกที่บิดเบี้ยว ตัวเอกก้าวเข้าสู่ความโกลาหลที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "नरक का एक विकृत तंत्र। नायक गहरे अराजकता में कदम रखा।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 서고. 길 잃은 영혼들의 도서관.",
			"겉보기엔 질서정연했지만, 그 이면에는 비명이 숨겨져 있었다.",
			"안내자는 미소 지었다. 너무나… 비현실적인 미소로.",
			"주인공은 직감했다. 이곳은, 시작부터 뒤틀려 있다고."
		],
		"english": [
			"Hell Library. The library of lost souls.",
			"Seemingly orderly, yet screams hid beneath its surface.",
			"The guide smiled. A smile so... unreal.",
			"The protagonist instinctively knew. This place was twisted from the start."
		],
		"japanese": [
			"地獄書庫。迷える魂の図書館。",
			"一見すると秩序立っていたが、その裏には悲鳴が隠されていた。",
			"案内人は微笑んだ。あまりにも…現実離れした笑顔で。",
			"主人公は直感した。ここは、最初から歪んでいると。"
		],
		"chinese": [
			"地狱书库。迷失灵魂的图书馆。",
			"表面井然有序，实则尖叫声隐藏其下。",
			"引导者笑了。那笑容如此……不真实。",
			"主角直觉认为。这个地方，从一开始就扭曲了。"
		],
		"french": [
			"La Bibliothèque de l'Enfer. La bibliothèque des âmes perdues.",
			"En apparence ordonnée, mais des cris se cachaient sous sa surface.",
			"Le guide sourit. Un sourire si... irréel.",
			"Le protagoniste sentit. Cet endroit était tordu dès le début."
		],
		"spanish": [
			"La Biblioteca del Infierno. La biblioteca de las almas perdidas.",
			"Aparentemente ordenado, pero los gritos se escondían bajo su superficie.",
			"El guía sonrió. Una sonrisa tan... irreal.",
			"El protagonista lo intuyó. Este lugar estaba retorcido desde el principio."
		],
		"vietnamese": [
			"Thư viện Địa ngục. Thư viện của những linh hồn lạc lối.",
			"Bề ngoài có vẻ ngăn nắp, nhưng bên dưới ẩn chứa những tiếng la hét.",
			"Người dẫn đường mỉm cười. Một nụ cười quá... phi thực tế.",
			"Nhân vật chính linh cảm. Nơi này, đã bị vặn vẹo ngay từ đầu."
		],
		"thai": [
			"ห้องสมุดนรก. ห้องสมุดแห่งวิญญาณที่หลงทาง.",
			"ดูเหมือนเป็นระเบียบเรียบร้อย แต่เบื้องหลังกลับซ่อนเสียงกรีดร้องไว้.",
			"ผู้แนะนำยิ้ม. รอยยิ้มที่...ไม่จริงเลย.",
			"ตัวเอกรู้ทันที. ที่นี่บิดเบี้ยวมาตั้งแต่ต้น."
		],
		"hindi": [
			"नर्क पुस्तकालय। खोई हुई आत्माओं का पुस्तकालय।",
			"दिखने में व्यवस्थित, पर चीखें इसकी सतह के नीचे छिपी थीं।",
			"मार्गदर्शक मुस्कुराया। एक मुस्कान जो... अवास्तविक थी।",
			"नायक ने सहज ज्ञान से जाना। यह जगह, शुरुआत से ही विकृत थी।"
		]
	}
} as const;
