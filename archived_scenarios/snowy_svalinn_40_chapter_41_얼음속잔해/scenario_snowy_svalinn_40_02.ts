export const scenario_snowy_svalinn_40_02 = {
	"scenario_id": "snowy_svalinn_40_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"speaker": "narrator",
					"content": {
						"korean": "스발린의 정보가 가리킨 곳은 폐허가 된 고대 유적지였다.",
						"english": "The place Svalin's intel pointed to was a ruined ancient site.",
						"japanese": "スバリンの情報が指し示した場所は、廃墟となった古代遺跡だった。",
						"chinese": "斯瓦林情报所指之处，是化为废墟的古老遗迹。",
						"french": "L'endroit indiqué par les informations de Svalin était un site antique en ruine.",
						"spanish": "El lugar al que apuntaba la información de Svalin era un antiguo sitio en ruinas.",
						"vietnamese": "Nơi thông tin của Svalin chỉ ra là một di tích cổ đại hoang tàn.",
						"thai": "สถานที่ที่ข้อมูลของสวาลินชี้คือซากปรักหักพังโบราณ",
						"hindi": "स्वालिन की जानकारी जिस जगह की ओर इशारा कर रही थी, वह एक खंडहर बना हुआ प्राचीन स्थल था।"
					}
				},
				{
					"content": {
						"korean": "이 이상한 문양들… 스발린 말대로 뭔가 중요한 게 있나?",
						"english": "These strange patterns... Is there something important here, just as Svalin said?",
						"japanese": "この奇妙な模様… スバリンの言う通り、何か重要なものがあるのか？",
						"chinese": "这些奇怪的纹样……正如斯瓦林所说，这里有什么重要的东西吗？",
						"french": "Ces étranges motifs... Y a-t-il quelque chose d'important ici, comme Svalin l'a dit ?",
						"spanish": "Estos extraños grabados... ¿Hay algo importante aquí, tal como dijo Svalin?",
						"vietnamese": "Những hoa văn kỳ lạ này... Có gì quan trọng ở đây không, đúng như Svalin đã nói?",
						"thai": "ลวดลายแปลกๆ พวกนี้… อย่างที่สวาลินบอก มีอะไรสำคัญอยู่ตรงนี้หรือเปล่า?",
						"hindi": "ये अजीब नक्काशी... क्या यहाँ कुछ महत्वपूर्ण है, जैसा कि स्वालिन ने कहा था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심해. 여기 기운이… 심상치 않아.",
						"english": "Be careful. The aura here... is unusual.",
						"japanese": "気をつけろ。ここの気配が…ただならぬ。",
						"chinese": "小心。这里的气息……非同寻常。",
						"french": "Sois prudent. L'atmosphère ici... est inhabituelle.",
						"spanish": "Ten cuidado. La energía aquí... es inusual.",
						"vietnamese": "Cẩn thận. Khí tức ở đây... không bình thường.",
						"thai": "ระวังตัวหน่อย. บรรยากาศที่นี่… ไม่ปกติ.",
						"hindi": "सावधान रहो। यहाँ का माहौल... कुछ ठीक नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "핀? 여긴 어떻게… 먼저 왔어?",
						"english": "Finn? How did you... get here first?",
						"japanese": "フィン？どうやって…先に来たんだ？",
						"chinese": "芬？你怎么……先来了？",
						"french": "Finn ? Comment es-tu... arrivé ici en premier ?",
						"spanish": "¿Finn? ¿Cómo... llegaste aquí primero?",
						"vietnamese": "Finn? Sao cậu... đến đây trước rồi?",
						"thai": "ฟินน์? นายมาที่นี่… ได้ยังไงก่อน?",
						"hindi": "फिन? तुम यहाँ कैसे... पहले आ गए?"
					}
				},
				{
					"content": {
						"korean": "먼저 와서 정찰 중이었어. 뭔가… 올 것 같아.",
						"english": "I came ahead to scout. Something... feels like it's coming.",
						"japanese": "先に来て偵察していたんだ。何か…来る気がする。",
						"chinese": "我先过来侦察了。感觉……有什么要来了。",
						"french": "Je suis venu en avance pour patrouiller. Quelque chose... semble approcher.",
						"spanish": "Llegué antes para explorar. Siento que algo... va a venir.",
						"vietnamese": "Tôi đến trước để trinh sát. Có cảm giác… điều gì đó sắp tới.",
						"thai": "ฉันมาสำรวจก่อน. รู้สึกเหมือน… มีอะไรบางอย่างกำลังจะมา.",
						"hindi": "मैं पहले आकर गश्त कर रहा था। कुछ... आने वाला सा लग रहा है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 문양… 전에 본 적 있는 것 같아.",
						"english": "This pattern... I think I've seen it before.",
						"japanese": "この模様…前に見たことがある気がする。",
						"chinese": "这个纹样……我好像以前见过。",
						"french": "Ce motif... je crois l'avoir déjà vu.",
						"spanish": "Este patrón... Creo que lo he visto antes.",
						"vietnamese": "Hoa văn này... hình như tôi đã từng thấy rồi.",
						"thai": "ลวดลายนี้… เหมือนเคยเห็นมาก่อนเลย.",
						"hindi": "यह नक्काशी... मुझे लगता है मैंने इसे पहले देखा है।"
					}
				},
				{
					"content": {
						"korean": "어디서? 무슨 의미인데?",
						"english": "Where? What do you mean?",
						"japanese": "どこで？どういう意味ですか？",
						"chinese": "在哪儿？什么意思？",
						"french": "Où ça ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Dónde? ¿Qué quieres decir?",
						"vietnamese": "Ở đâu? Ý cậu là gì?",
						"thai": "ที่ไหน? หมายความว่าไง?",
						"hindi": "कहाँ? क्या मतलब है तुम्हारा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "오래 전… 내가 희생당할 뻔했던 시스템 문서에서…",
						"english": "Long ago... in system documents where I almost became a sacrifice...",
						"japanese": "ずっと昔… 私が犠牲になりかけたシステム文書で…",
						"chinese": "很久以前… 在我差点被献祭的系统文件中…",
						"french": "Il y a longtemps… dans des documents système où j'ai failli être sacrifiée…",
						"spanish": "Hace mucho tiempo... en documentos del sistema donde casi fui sacrificada...",
						"vietnamese": "Rất lâu rồi… trong tài liệu hệ thống nơi tôi suýt bị hiến tế…",
						"thai": "นานมาแล้ว... ในเอกสารระบบที่ฉันเกือบจะถูกสังเวย...",
						"hindi": "बहुत पहले... उन सिस्टम दस्तावेज़ों में, जहाँ मैं लगभग बलि चढ़ गया था..."
					}
				},
				{
					"content": {
						"korean": "시스템? 그게 뭔데, 핀?",
						"english": "System? What's that, Finn?",
						"japanese": "システム？それって何、フィン？",
						"chinese": "系统？那是什么，芬恩？",
						"french": "Système ? Qu'est-ce que c'est, Finn ?",
						"spanish": "¿Sistema? ¿Qué es eso, Finn?",
						"vietnamese": "Hệ thống? Nó là gì vậy, Finn?",
						"thai": "ระบบ? นั่นมันอะไรเหรอ, ฟินน์?",
						"hindi": "सिस्टम? वो क्या है, फिन?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아직은… 말하기 어려워. 하지만 분명… 위험해.",
						"english": "It's hard to say... for now. But it's definitely... dangerous.",
						"japanese": "今は… 言いづらい。でもきっと… 危険だ。",
						"chinese": "现在… 很难说。但它肯定… 很危险。",
						"french": "Pour l'instant… c'est difficile à dire. Mais c'est clairement… dangereux.",
						"spanish": "Por ahora... es difícil de decir. Pero es definitivamente... peligroso.",
						"vietnamese": "Bây giờ thì… khó nói lắm. Nhưng chắc chắn… nó nguy hiểm.",
						"thai": "ตอนนี้... บอกยาก. แต่ที่แน่ๆ... มันอันตราย.",
						"hindi": "अभी… बताना मुश्किल है। पर ये पक्का… ख़तरनाक है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유적의 깊은 곳에서 정체 모를 그림자가 드리워졌다.",
						"english": "A mysterious shadow loomed from the depths of the ruins.",
						"japanese": "遺跡の深淵から、正体不明の影が差し込んできた。",
						"chinese": "在遗迹的深处，一道不明身份的阴影笼罩着。",
						"french": "Une ombre inconnue planait des profondeurs de la ruine.",
						"spanish": "Una sombra desconocida se cernía desde las profundidades de las ruinas.",
						"vietnamese": "Một bóng đen vô danh phủ xuống từ sâu thẳm trong di tích.",
						"thai": "เงามืดปริศนาทอดตัวลงมาจากส่วนลึกของซากปรักหักพัง.",
						"hindi": "खंडहरों की गहराई से एक अज्ञात परछाई मंडरा रही थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "낡은 유물들이 어지럽게 흩어져 있었다.",
						"english": "Old artifacts were scattered in disarray.",
						"japanese": "古い遺物が乱雑に散らばっていた。",
						"chinese": "古老的文物杂乱无章地散落着。",
						"french": "De vieux artefacts étaient éparpillés en désordre.",
						"spanish": "Viejos artefactos estaban dispersos en desorden.",
						"vietnamese": "Những cổ vật cũ kỹ nằm rải rác một cách lộn xộn.",
						"thai": "วัตถุโบราณเก่าๆ กระจัดกระจายอยู่ไม่เป็นระเบียบ.",
						"hindi": "पुरानी कलाकृतियाँ अस्त-व्यस्त बिखरी पड़ी थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이봐, 이거… 이상해. 이 낡은 문양…",
						"english": "Hey, this... is strange. This old pattern...",
						"japanese": "おい、これ… 変だ。この古い模様…",
						"chinese": "嘿，这… 很奇怪。这个旧图案…",
						"french": "Hé, ça… c'est bizarre. Ce vieux motif…",
						"spanish": "Oye, esto... es extraño. Este patrón antiguo...",
						"vietnamese": "Này, cái này… lạ thật. Cái hoa văn cũ này…",
						"thai": "เฮ้, นี่มัน... แปลก. ลวดลายเก่าๆ นี่...",
						"hindi": "अरे, ये... अजीब है। ये पुराना निशान..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어디? 뭐가 이상하다는 건데?",
						"english": "Where? What's strange about it?",
						"japanese": "どこ？何が変だって言うの？",
						"chinese": "在哪儿？什么奇怪？",
						"french": "Où ça ? Qu'est-ce qui est bizarre ?",
						"spanish": "¿Dónde? ¿Qué tiene de extraño?",
						"vietnamese": "Ở đâu? Có gì lạ vậy?",
						"thai": "ไหน? อะไรแปลกเหรอ?",
						"hindi": "कहाँ? क्या अजीब है इसमें?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "현재 유통되는 정보 거래 문서에 있는 문양이랑… 똑같아!",
						"english": "It's the same pattern as in the information trade documents currently in circulation!",
						"japanese": "現在流通している情報取引文書にある模様と… 同じだ！",
						"chinese": "和目前流通的信息交易文件中的图案… 一模一样！",
						"french": "C'est le même motif que celui des documents d'échange d'informations actuellement en circulation !",
						"spanish": "¡Es el mismo patrón que el de los documentos de comercio de información que circulan actualmente!",
						"vietnamese": "Nó giống hệt hoa văn trong tài liệu giao dịch thông tin đang lưu hành hiện nay!",
						"thai": "มันเป็นลวดลายเดียวกับในเอกสารการซื้อขายข้อมูลที่กำลังหมุนเวียนอยู่ตอนนี้เลย!",
						"hindi": "ये वही पैटर्न है जो अभी चल रहे सूचना व्यापार दस्तावेज़ों में है... बिल्कुल वही!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그럴 리가. 설마…!",
						"english": "...That can't be. No way...!",
						"japanese": "…まさか。まさか…！",
						"chinese": "…不可能。难道…！",
						"french": "...C'est impossible. Non… !",
						"spanish": "...No puede ser. ¡Imposible...!",
						"vietnamese": "…Không thể nào. Chẳng lẽ…!",
						"thai": "...เป็นไปไม่ได้. อย่าบอกนะว่า...!",
						"hindi": "...ऐसा नहीं हो सकता। कहीं ऐसा तो नहीं...!"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이게 대체 무슨 의미지? 우연이라고 하기엔…",
						"english": "What does this mean? Too much for a coincidence...",
						"japanese": "これはいったいどういうことだ？偶然とは言えない…",
						"chinese": "这到底是什么意思？说是巧合也未免太...",
						"french": "Qu'est-ce que ça veut dire ? C'est trop pour être une coïncidence...",
						"spanish": "¿Qué significa esto? Demasiado para ser una coincidencia...",
						"vietnamese": "Cái này rốt cuộc có ý nghĩa gì? Gọi là trùng hợp thì...",
						"thai": "นี่มันหมายความว่าไงกันแน่? จะว่าเป็นเรื่องบังเอิญก็...",
						"hindi": "इसका मतलब क्या है? महज़ इत्तेफ़ाक़ तो नहीं हो सकता..."
					}
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시스템이… 과거부터 우리를 조종하고 있었다는 건가?",
						"english": "Is the system... controlling us from the past?",
						"japanese": "システムが…過去から我々を操っていたというのか？",
						"chinese": "难道系统…从过去就开始操控我们了？",
						"french": "Le système... nous manipulait depuis le passé ?",
						"spanish": "¿El sistema... nos ha estado controlando desde el pasado?",
						"vietnamese": "Hệ thống... đã điều khiển chúng ta từ quá khứ ư?",
						"thai": "ระบบ... กำลังควบคุมเรามาจากอดีตอย่างนั้นหรือ?",
						"hindi": "क्या सिस्टम... हमें अतीत से ही नियंत्रित कर रहा था?"
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
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유적의 끝에서, 거대한 그림자가 나타났다. 압도적인 위압감.",
						"english": "At the end of the ruins, a colossal shadow appeared. An overwhelming presence.",
						"japanese": "遺跡の果てに、巨大な影が現れた。圧倒的な威圧感。",
						"chinese": "遗迹的尽头，出现了巨大的黑影。压倒性的威压。",
						"french": "Au bout des ruines, une ombre colossale apparut. Une présence écrasante.",
						"spanish": "Al final de las ruinas, una sombra colosal apareció. Una presencia abrumadora.",
						"vietnamese": "Ở cuối phế tích, một bóng đen khổng lồ xuất hiện. Áp lực kinh người.",
						"thai": "ที่ปลายซากปรักหักพัง เงาขนาดมหึมาปรากฏขึ้น แรงกดดันที่ท่วมท้น",
						"hindi": "खंडहरों के अंत में, एक विशाल छाया प्रकट हुई। एक जबरदस्त उपस्थिति।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들이여. 너희의 정보는 곧… 대가가 될 것이다.",
						"english": "Intruders. Your information will soon... become the price.",
						"japanese": "侵入者たちよ。お前たちの情報はすぐ…代償となるだろう。",
						"chinese": "入侵者们。你们的信息很快…就会成为代价。",
						"french": "Intrus. Vos informations deviendront bientôt... le prix à payer.",
						"spanish": "Intrusos. Vuestra información pronto... será el precio.",
						"vietnamese": "Những kẻ xâm nhập. Thông tin của các ngươi sẽ sớm... trở thành cái giá phải trả.",
						"thai": "ผู้บุกรุกเอ๋ย ข้อมูลของพวกเจ้า... จะกลายเป็นสิ่งตอบแทนในไม่ช้า",
						"hindi": "घुसपैठियों। तुम्हारी जानकारी जल्द ही... कीमत बन जाएगी।"
					}
				},
				{
					"content": {
						"korean": "(결심한 듯) 피할 수 없어…!",
						"english": "(With resolve) I can't avoid it...!",
						"japanese": "（決心したように）避けられない…！",
						"chinese": "(仿佛下定决心) 无法避免…！",
						"french": "(Déterminé) Je ne peux pas l'éviter... !",
						"spanish": "(Con determinación) ¡No puedo evitarlo...!",
						"vietnamese": "(Như đã quyết tâm) Không thể tránh được...!",
						"thai": "(เหมือนตัดสินใจแล้ว) หลีกเลี่ยงไม่ได้...!",
						"hindi": "(दृढ़ संकल्प के साथ) मैं इससे बच नहीं सकता...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "핀, 무슨 생각 하는 거야! 저건 너무 강해!",
						"english": "Finn, what are you thinking?! That's too strong!",
						"japanese": "フィン、何を考えているんだ！あれは強すぎる！",
						"chinese": "芬，你在想什么！那个太强了！",
						"french": "Finn, à quoi penses-tu ?! C'est trop fort !",
						"spanish": "¡Finn, ¿qué estás pensando?! ¡Eso es demasiado fuerte!",
						"vietnamese": "Finn, cậu đang nghĩ gì vậy! Cái đó quá mạnh!",
						"thai": "ฟินน์ เธอคิดอะไรอยู่! นั่นมันแข็งแกร่งเกินไป!",
						"hindi": "फिन, तुम क्या सोच रहे हो! वह बहुत ताकतवर है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건… 내 몫이야. 너희는… 반드시…!",
						"english": "This is... my part. You must...!",
						"japanese": "これは…私の役目だ。お前たちは…必ず…！",
						"chinese": "这是…我的责任。你们…一定要…！",
						"french": "C'est... mon rôle. Vous devez... !",
						"spanish": "Esto es... mi parte. ¡Vosotros debéis...!",
						"vietnamese": "Đây là... phần của tôi. Các cậu phải...!",
						"thai": "นี่มัน... ส่วนของฉัน พวกเธอ... ต้อง...!",
						"hindi": "यह... मेरा हिस्सा है। तुम सब... ज़रूर...!"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 너희의 의지는… 아무것도 바꾸지 못해.",
						"english": "Insignificant beings. Your will... changes nothing.",
						"japanese": "取るに足らぬ者ども。お前たちの意志は…何も変えられぬ。",
						"chinese": "卑微之物。你们的意志…什么都改变不了。",
						"french": "Créatures insignifiantes. Votre volonté… ne changera rien.",
						"spanish": "Seres insignificantes. Su voluntad… no cambia nada.",
						"vietnamese": "Những kẻ tầm thường. Ý chí của các ngươi… không thể thay đổi bất cứ điều gì.",
						"thai": "พวกไร้ค่า. เจตจำนงของพวกแก… เปลี่ยนแปลงอะไรไม่ได้หรอก.",
						"hindi": "तुच्छ प्राणी। तुम्हारी इच्छा… कुछ भी नहीं बदलती।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "핀… 미안해…! 아직… 포기할 수 없어…!",
						"english": "Finn... I'm sorry...! I can't give up yet...!",
						"japanese": "フィン… ごめん…！まだ…諦められない…！",
						"chinese": "芬… 对不起…！我还…不能放弃…！",
						"french": "Finn... Désolé... ! Je ne peux pas encore abandonner... !",
						"spanish": "Finn... Lo siento... ! Aún no puedo rendirme... !",
						"vietnamese": "Finn... Xin lỗi...! Tôi chưa thể bỏ cuộc...!",
						"thai": "ฟิน... ขอโทษนะ...! ฉันยังยอมแพ้ไม่ได้...!",
						"hindi": "फिन... माफ़ करना...! मैं अभी हार नहीं मान सकता...!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "핀의 희생에도 불구하고, 탐험대는 쓰러졌다.",
						"english": "Despite Finn's sacrifice, the exploration party fell.",
						"japanese": "フィンの犠牲にもかかわらず、探検隊は倒れた。",
						"chinese": "尽管芬牺牲了，探险队还是倒下了。",
						"french": "Malgré le sacrifice de Finn, l'expédition a succombé.",
						"spanish": "A pesar del sacrificio de Finn, la expedición cayó.",
						"vietnamese": "Dù Finn đã hy hy sinh, đoàn thám hiểm vẫn gục ngã.",
						"thai": "แม้ฟินจะเสียสละ ทว่าคณะสำรวจก็พ่ายแพ้",
						"hindi": "फिन के बलिदान के बावजूद, अन्वेषण दल हार गया।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 너희의 모든 것을 가져갈 것이다.",
						"english": "Trivial resistance. I will take everything from you.",
						"japanese": "取るに足らない抵抗だな。お前たちの全てを奪い去ろう。",
						"chinese": "渺小的抵抗。我会夺走你们的一切。",
						"french": "Résistance futile. Je vous prendrai tout.",
						"spanish": "Resistencia trivial. Os quitaré todo.",
						"vietnamese": "Sự kháng cự hèn mọn. Ta sẽ lấy đi tất cả của các ngươi.",
						"thai": "การต่อต้านที่ไร้ค่า ข้าจะเอาทุกสิ่งทุกอย่างไปจากพวกเจ้า",
						"hindi": "तुच्छ प्रतिरोध। मैं तुमसे सब कुछ ले लूंगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 너 따위의 먹이가 될 것 같아? 어림없어!",
						"english": "You think we'll be your prey? No way!",
						"japanese": "私たちが貴様なんかの餌になると思うか？とんでもない！",
						"chinese": "你以为我们会成为你这种货色的猎物？做梦！",
						"french": "Tu crois qu'on sera ta proie ? Jamais !",
						"spanish": "¿Crees que seremos tu presa? ¡Ni hablar!",
						"vietnamese": "Ngươi nghĩ chúng ta sẽ là con mồi của loại như ngươi sao? Mơ đi!",
						"thai": "คิดว่าพวกเราจะเป็นเหยื่อของแกเหรอ? ไม่มีทางซะหรอก!",
						"hindi": "तुम्हें लगता है कि हम तुम्हारा शिकार बनेंगे? असंभव!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "(절규하며) 안 돼! 절대… 그렇게 두지 않아!",
						"english": "(Screaming) No! I'll never... let that happen!",
						"japanese": "（絶叫しながら）ダメだ！絶対に…そうはさせない！",
						"chinese": "(尖叫着) 不！我绝不会…让你得逞！",
						"french": "(Hurlant) Non ! Je ne laisserai jamais... cela arriver !",
						"spanish": "(Gritando) ¡No! ¡Nunca... permitiré eso!",
						"vietnamese": "(Hét lên) Không! Tuyệt đối... sẽ không để chuyện đó xảy ra!",
						"thai": "(กรีดร้อง) ไม่! ฉันไม่มีทาง... ปล่อยให้เป็นแบบนั้น!",
						"hindi": "(चिल्लाते हुए) नहीं! मैं कभी... ऐसा नहीं होने दूंगा!"
					}
				},
				{
					"content": {
						"korean": "핀! 뭐 하는 거야! 위험해!",
						"english": "Finn! What are you doing! It's dangerous!",
						"japanese": "フィン！何してるの！危ない！",
						"chinese": "芬！你在做什么！危险！",
						"french": "Finn ! Qu'est-ce que tu fais ! C'est dangereux !",
						"spanish": "¡Finn! ¡¿Qué haces?! ¡Es peligroso!",
						"vietnamese": "Finn! Cậu đang làm gì vậy! Nguy hiểm đó!",
						"thai": "ฟินน์! นายกำลังทำอะไรน่ะ! อันตรายนะ!",
						"hindi": "फिन! क्या कर रहे हो! यह खतरनाक है!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 400,
					"action": "shake"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건… 내가 막을게… 너희는… 가…!",
						"english": "I'll... stop this... You... go...!",
						"japanese": "これは…僕が止める…君たちは…行け…！",
						"chinese": "这…我来挡住…你们…走…！",
						"french": "Ça… je vais l'arrêter… Vous… partez… !",
						"spanish": "Esto… lo detendré… ¡Ustedes… váyanse…!",
						"vietnamese": "Cái này… để tôi cản… Các cậu… đi đi…!",
						"thai": "นี่… ฉันจะหยุดมันเอง… พวกนาย… ไปซะ…!",
						"hindi": "इसे… मैं रोकूँगा… तुम… जाओ…!"
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "핀의 절규와 함께, 거대한 충격파가 유적을 뒤흔들었다. 그는… 사라졌다.",
						"english": "With Finn's scream, a massive shockwave shook the ruins. He... was gone.",
						"japanese": "フィンの絶叫と共に、巨大な衝撃波が遺跡を揺るがした。彼は…消えた。",
						"chinese": "伴随着芬的绝叫，巨大的冲击波震撼了遗迹。他…消失了。",
						"french": "Avec le cri de Finn, une onde de choc massive secoua les ruines. Il… avait disparu.",
						"spanish": "Con el grito de Finn, una enorme onda de choque sacudió las ruinas. Él… había desaparecido.",
						"vietnamese": "Cùng với tiếng thét của Finn, một làn sóng xung kích khổng lồ đã làm rung chuyển di tích. Cậu ấy… đã biến mất.",
						"thai": "พร้อมกับเสียงกรีดร้องของฟินน์ คลื่นกระแทกขนาดมหึมาได้สั่นสะเทือนซากปรักหักพัง เขา…หายไปแล้ว",
						"hindi": "फिन की चीख के साथ, एक विशाल सदमे की लहर ने खंडहरों को हिला दिया। वह… गायब हो गया।"
					}
				},
				{
					"content": {
						"korean": "핀… 핀!!!!!!",
						"english": "Finn... Finn!!!!!!",
						"japanese": "フィン… フィン!!!!!!",
						"chinese": "芬… 芬!!!!!!",
						"french": "Finn… Finn!!!!!!",
						"spanish": "¡Finn… Finn!!!!!!",
						"vietnamese": "Finn… Finn!!!!!!",
						"thai": "ฟินน์… ฟินน์!!!!!!",
						"hindi": "फिन… फिन!!!!!!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(쓰러지며) …결국… 너희도… 시스템의 일부가 될 뿐….",
						"english": "(Falling) ...Ultimately... you too... will just become part of the system....",
						"japanese": "（倒れながら）…結局…お前たちも…システムの一部になるだけだ…",
						"chinese": "（倒下）…最终…你们也…只会成为系统的一部分…",
						"french": "(En s'écroulant) …Au final… vous aussi… ne ferez que devenir une partie du système….",
						"spanish": "(Cayendo) …Al final… ustedes también… solo se convertirán en parte del sistema….",
						"vietnamese": "(Gục ngã) …Cuối cùng… các người cũng… chỉ là một phần của hệ thống mà thôi….",
						"thai": "(ล้มลง) …ท้ายที่สุด…พวกแกก็…เป็นแค่ส่วนหนึ่งของระบบเท่านั้น…",
						"hindi": "(गिरते हुए) …आखिरकार… तुम भी… बस सिस्टम का हिस्सा बन जाओगे…।"
					}
				},
				{
					"content": {
						"korean": "핀… 미안해…!",
						"english": "Finn… I'm sorry…!",
						"japanese": "フィン…ごめん…！",
						"chinese": "芬…对不起…！",
						"french": "Finn… je suis désolé… !",
						"spanish": "¡Finn… lo siento…!",
						"vietnamese": "Finn… tớ xin lỗi…!",
						"thai": "ฟินน์… ฉันขอโทษ…!",
						"hindi": "फिन… मुझे माफ़ करना…!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "전투는 끝났지만, 핀의 희생은 탐험대에게 무거운 짐으로 남았다.",
						"english": "The battle was over, but Finn's sacrifice remained a heavy burden on the expedition team.",
						"japanese": "戦闘は終わったが、フィンの犠牲は探検隊に重い重荷として残った。",
						"chinese": "战斗结束了，但芬的牺牲给探险队留下了沉重的负担。",
						"french": "La bataille était terminée, mais le sacrifice de Finn resta un lourd fardeau pour l'équipe d'expédition.",
						"spanish": "La batalla había terminado, pero el sacrificio de Finn siguió siendo una pesada carga para el equipo de expedición.",
						"vietnamese": "Trận chiến đã kết thúc, nhưng sự hy sinh của Finn vẫn là gánh nặng lớn đối với đội thám hiểm.",
						"thai": "การต่อสู้สิ้นสุดลงแล้ว แต่การเสียสละของฟินน์ยังคงเป็นภาระอันหนักอึ้งต่อทีมสำรวจ",
						"hindi": "युद्ध समाप्त हो गया था, लेकिन फिन का बलिदान अभियान दल के लिए एक भारी बोझ बन गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유적지 깊숙한 곳, 낡은 문양은 침묵한 채 빛나고 있었다.",
						"english": "Deep within the ruins, ancient markings glowed silently.",
						"japanese": "遺跡の奥深く、古い紋様は静かに輝いていた。",
						"chinese": "在遗迹深处，古老的图案在沉默中闪耀。",
						"french": "Au plus profond des ruines, d'anciens motifs brillaient silencieusement.",
						"spanish": "En lo más profundo de las ruinas, antiguos grabados brillaban en silencio.",
						"vietnamese": "Sâu trong tàn tích, những hoa văn cổ xưa lặng lẽ phát sáng.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ลวดลายโบราณส่องแสงเงียบงัน",
						"hindi": "खंडहरों के गहरे भीतर, प्राचीन निशान चुपचाप चमक रहे थे।"
					}
				},
				{
					"content": {
						"korean": "그리고 깨달았다. 우리는 아직, 아무것도 모른다는 것을.",
						"english": "And then we realized. We still knew nothing at all.",
						"japanese": "そして悟った。私たちはまだ、何も知らないのだと。",
						"chinese": "然后我们意识到。我们仍然一无所知。",
						"french": "Et alors nous avons réalisé. Nous ne savions encore rien du tout.",
						"spanish": "Y entonces nos dimos cuenta. Todavía no sabíamos nada en absoluto.",
						"vietnamese": "Và rồi chúng tôi nhận ra. Chúng tôi vẫn chưa biết gì cả.",
						"thai": "และแล้วเราก็ตระหนักว่า เรายังไม่รู้อะไรเลย",
						"hindi": "और फिर हमें एहसास हुआ। हम अभी भी कुछ भी नहीं जानते थे।"
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
			"스발린의 정보는 우리를 낡은 유적지로 이끌었다.",
			"고대 문명의 흔적 속, 우리는 끔찍한 그림자와 조우했다.",
			"과거의 대가를 요구하는 그림자.",
			"그리고 동료의 피가, 감춰진 진실의 문을 열었다."
		],
		"english": [
			"Svalin's intel led us to an ancient ruin.",
			"Amidst traces of an ancient civilization, we encountered a dreadful shadow.",
			"A shadow demanding the price of the past.",
			"And a comrade's blood opened the door to hidden truths."
		],
		"japanese": [
			"スバリンの情報が我々を古びた遺跡へと導いた。",
			"古代文明の痕跡の中、我々は恐ろしい影と遭遇した。",
			"過去の代償を要求する影。",
			"そして、仲間の血が隠された真実の扉を開いた。"
		],
		"chinese": [
			"斯瓦林的情報将我们引向了一座古老的遗迹。",
			"在古文明的痕迹中，我们遭遇了可怕的影子。",
			"索求着过去代价的影子。",
			"而同伴的鲜血，打开了隐藏真相之门。"
		],
		"french": [
			"Les informations de Svalin nous ont menés à une ancienne ruine.",
			"Au milieu des vestiges d'une civilisation ancienne, nous avons rencontré une ombre terrifiante.",
			"L'ombre exigeant le prix du passé.",
			"Et le sang d'un camarade a ouvert la porte à des vérités cachées."
		],
		"spanish": [
			"La información de Svalin nos llevó a una antigua ruina.",
			"Entre las huellas de una antigua civilización, nos topamos con una sombra terrible.",
			"La sombra que exigía el precio del pasado.",
			"Y la sangre de un compañero abrió la puerta a verdades ocultas."
		],
		"vietnamese": [
			"Thông tin của Svalin đã dẫn chúng tôi đến một tàn tích cổ xưa.",
			"Giữa dấu vết của nền văn minh cổ đại, chúng tôi đã chạm trán một bóng ma kinh hoàng.",
			"Bóng ma đòi hỏi cái giá của quá khứ.",
			"Và máu đồng đội đã mở cánh cửa sự thật bị che giấu."
		],
		"thai": [
			"ข้อมูลของสวาลินนำเรามายังซากปรักหักพังโบราณ",
			"ท่ามกลางร่องรอยอารยธรรมโบราณ เราได้เผชิญหน้ากับเงามืดที่น่าสะพรึงกลัว",
			"เงาที่เรียกร้องค่าตอบแทนจากอดีต",
			"และเลือดของสหายได้เปิดประตูสู่ความจริงที่ซ่อนเร้น"
		],
		"hindi": [
			"स्वालिन की जानकारी हमें एक पुराने खंडहर में ले गई।",
			"प्राचीन सभ्यता के निशानों के बीच, हमारा सामना एक भयानक परछाई से हुआ।",
			"अतीत का मोल माँगती परछाई।",
			"और साथी का रक्त, छिपी हुई सच्चाई का दरवाज़ा खोल गया।"
		]
	}
} as const;
