export const scenario_modern_kismet_37_04 = {
	"scenario_id": "modern_kismet_37_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"번영하는 도시의 심장부. 모두가 이곳을 꿈꿨다.",
			"그러나 화려한 조명 뒤에는 추악한 그림자가 드리워져 있었다.",
			"카이는 그 그림자 속에서 모든 것을 잃었다.",
			"이제 그가 조작된 환상을 폭로하며 진실의 칼날을 꺼낸다."
		],
		"english": [
			"The heart of a prosperous city. Everyone dreamed of this place.",
			"But behind the dazzling lights, an ugly shadow loomed.",
			"Kai lost everything within that shadow.",
			"Now he unsheathes the blade of truth, exposing the manipulated illusion."
		],
		"japanese": [
			"繁栄する都市の中心部。誰もがここを夢見た。",
			"しかし、華やかな光の裏には醜い影が潜んでいた。",
			"カイはその影の中で全てを失った。",
			"今、彼は操られた幻想を暴き、真実の刃を抜く。"
		],
		"chinese": [
			"繁荣都市的心脏。每个人都梦想着这里。",
			"然而，在华丽的灯光背后，丑陋的阴影笼罩着。",
			"凯在那个阴影中失去了一切。",
			"现在，他揭露被操纵的幻象，拔出真理之刃。"
		],
		"french": [
			"Le cœur d'une ville prospère. Tout le monde rêvait de cet endroit.",
			"Mais derrière les lumières éblouissantes, une ombre hideuse planait.",
			"Kai a tout perdu dans cette ombre.",
			"Maintenant, il dégaine la lame de la vérité, exposant l'illusion manipulée."
		],
		"spanish": [
			"El corazón de una ciudad próspera. Todos soñaban con este lugar.",
			"Pero detrás de las luces deslumbrantes, una sombra fea se cernía.",
			"Kai perdió todo dentro de esa sombra.",
			"Ahora desenvaina la hoja de la verdad, exponiendo la ilusión manipulada."
		],
		"vietnamese": [
			"Trung tâm của một thành phố thịnh vượng. Mọi người đều mơ ước về nơi này.",
			"Nhưng đằng sau ánh đèn rực rỡ, một bóng tối xấu xí đang bao trùm.",
			"Kai đã mất tất cả trong bóng tối đó.",
			"Giờ đây, anh rút lưỡi kiếm sự thật, vạch trần ảo ảnh bị thao túng."
		],
		"thai": [
			"ใจกลางเมืองที่รุ่งเรือง ทุกคนฝันถึงที่นี่",
			"แต่เบื้องหลังแสงไฟอันเจิดจ้า มีเงามืดที่น่าเกลียดซ่อนอยู่",
			"ไคสูญเสียทุกสิ่งในเงานั้น",
			"ตอนนี้เขาชักดาบแห่งความจริง เปิดโปงภาพลวงตาที่ถูกบงการ"
		],
		"hindi": [
			"एक समृद्ध शहर का हृदय। हर कोई इस जगह का सपना देखता था。",
			"लेकिन चकाचौंध रोशनी के पीछे, एक बदसूरत छाया मंडरा रही थी।",
			"काई ने उस छाया में सब कुछ खो दिया।",
			"अब वह सत्य की तलवार निकालता है, हेरफेर की गई भ्रांति को उजागर करता है।"
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
						"korean": "도시의 중심부, 시스템의 심장이 거대하게 박동하고 있었다.",
						"english": "At the city's core, the System's heart pulsed immensely.",
						"japanese": "都市の中心部で、システムの心臓が巨大に脈打っていた。",
						"chinese": "在城市的中心，系统的核心巨大地跳动着。",
						"french": "Au cœur de la ville, le cœur du Système battait immensément.",
						"spanish": "En el centro de la ciudad, el corazón del Sistema latía inmensamente.",
						"vietnamese": "Tại trung tâm thành phố, trái tim của Hệ thống đang đập mạnh mẽ.",
						"thai": "ใจกลางเมือง หัวใจของระบบเต้นแรงอย่างมหาศาล",
						"hindi": "शहर के केंद्र में, सिस्टम का दिल विशाल रूप से धड़क रहा है।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳이 '모두를 위한 번영'을 외치는 시스템의 핵심이지.",
						"english": "This is the core of the System, shouting 'prosperity for all'.",
						"japanese": "ここが「皆のための繁栄」を叫ぶシステムの核心だ。",
						"chinese": "这里就是高喊着“人人繁荣”的系统核心。",
						"french": "C'est le cœur du Système, clamant 'prospérité pour tous'.",
						"spanish": "Este es el núcleo del Sistema, gritando 'prosperidad para todos'.",
						"vietnamese": "Đây là cốt lõi của Hệ thống, nơi hô hào 'thịnh vượng cho tất cả'.",
						"thai": "นี่คือแกนกลางของระบบ ที่ป่าวประกาศว่า 'ความรุ่งเรืองสำหรับทุกคน'",
						"hindi": "यह सिस्टम का मूल है, जो 'सभी के लिए समृद्धि' का नारा लगा रहा है।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "정말 대단한 도시야.",
						"english": "Truly a magnificent city.",
						"japanese": "本当に素晴らしい都市だ。",
						"chinese": "真是个了不起的城市。",
						"french": "Vraiment une ville magnifique.",
						"spanish": "Verdaderamente una ciudad magnífica.",
						"vietnamese": "Thật sự là một thành phố tráng lệ.",
						"thai": "เป็นเมืองที่น่าทึ่งจริงๆ",
						"hindi": "सचमुच एक शानदार शहर।"
					},
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "대단하다고? 그건 위선이야. 내 가족도 이 거짓에 희생당했어.",
						"english": "Magnificent? It's hypocrisy. My family was sacrificed to this lie.",
						"japanese": "素晴らしいだと？それは偽善だ。私の家族もこの嘘に犠牲になった。",
						"chinese": "了不起？那是虚伪。我的家人也牺牲在这谎言中。",
						"french": "Magnifique ? C'est de l'hypocrisie. Ma famille a été sacrifiée à ce mensonge.",
						"spanish": "¿Magnífica? Es hipocresía. Mi familia fue sacrificada por esta mentira.",
						"vietnamese": "Tráng lệ ư? Đó là sự đạo đức giả. Gia đình tôi cũng đã hy sinh vì lời dối trá này.",
						"thai": "น่าทึ่งเหรอ? มันคือความหน้าซื่อใจคด ครอบครัวของฉันก็ตกเป็นเหยื่อของคำโกหกนี้",
						"hindi": "शानदार? यह पाखंड है। मेरा परिवार भी इस झूठ का शिकार हुआ।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "시스템은 완벽한 척하지만, 그 뒤에서 모든 것을 조작해왔어.",
						"english": "The System pretends to be perfect, but it's been manipulating everything behind the scenes.",
						"japanese": "システムは完璧なふりをしているが、裏で全てを操作してきた。",
						"chinese": "系统假装完美，但它一直在幕后操纵着一切。",
						"french": "Le Système prétend être parfait, mais il manipule tout en coulisses.",
						"spanish": "El Sistema pretende ser perfecto, pero ha estado manipulando todo entre bastidores.",
						"vietnamese": "Hệ thống giả vờ hoàn hảo, nhưng nó đã thao túng mọi thứ sau bức màn.",
						"thai": "ระบบแสร้งทำเป็นสมบูรณ์แบบ แต่เบื้องหลังมันได้บงการทุกสิ่ง",
						"hindi": "सिस्टम सही होने का ढोंग करता है, लेकिन वह पर्दे के पीछे से सब कुछ हेरफेर कर रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조작이라고? 뭘 말하는 거야?",
						"english": "Manipulation? What are you talking about?",
						"japanese": "操作だと？何を言っているんだ？",
						"chinese": "操纵？你在说什么？",
						"french": "Manipulation ? De quoi parles-tu ?",
						"spanish": "¿Manipulación? ¿De qué estás hablando?",
						"vietnamese": "Thao túng ư? Anh đang nói về cái gì vậy?",
						"thai": "บงการ? คุณกำลังพูดถึงอะไร?",
						"hindi": "हेरफेर? तुम क्या कह रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이 도시의 번영은… 누군가의 불행 위에 세워진 거야. 내 가족처럼.",
						"english": "This city's prosperity... it's built on someone's misfortune. Like my family's.",
						"japanese": "この都市の繁栄は… 誰かの不幸の上に築かれている。私の家族のように。",
						"chinese": "这座城市的繁荣… 是建立在别人的不幸之上的。就像我的家人一样。",
						"french": "La prospérité de cette ville... elle est bâtie sur le malheur de quelqu'un. Comme celui de ma famille.",
						"spanish": "La prosperidad de esta ciudad... está construida sobre la desgracia de alguien. Como la de mi familia.",
						"vietnamese": "Sự thịnh vượng của thành phố này... được xây dựng trên bất hạnh của ai đó. Giống như gia đình tôi.",
						"thai": "ความเจริญรุ่งเรืองของเมืองนี้... สร้างขึ้นบนความโชคร้ายของบางคน เหมือนครอบครัวของฉัน",
						"hindi": "इस शहर की समृद्धि... किसी के दुर्भाग्य पर बनी है। मेरे परिवार की तरह।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 정말이라면… 용서할 수 없어.",
						"english": "If that's true... I can't forgive them.",
						"japanese": "それが本当なら… 許せない。",
						"chinese": "如果那是真的… 我无法原谅。",
						"french": "Si c'est vrai... je ne peux pas pardonner.",
						"spanish": "Si eso es cierto... no puedo perdonar.",
						"vietnamese": "Nếu đó là sự thật... tôi không thể tha thứ.",
						"thai": "ถ้าเป็นเรื่องจริง... ฉันให้อภัยไม่ได้",
						"hindi": "अगर वह सच है... मैं माफ नहीं कर सकता।"
					},
					"emotion": "angry",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나는 그들의 희생을 잊지 않을 거야. 시스템이 내게서 모든 것을 앗아갔어.",
						"english": "I won't forget their sacrifice. The system took everything from me.",
						"japanese": "彼らの犠牲を忘れない。システムが私から全てを奪った。",
						"chinese": "我不会忘记他们的牺牲。系统从我这里夺走了一切。",
						"french": "Je n'oublierai pas leur sacrifice. Le système m'a tout pris.",
						"spanish": "No olvidaré su sacrificio. El sistema me quitó todo.",
						"vietnamese": "Tôi sẽ không quên sự hy sinh của họ. Hệ thống đã cướp đi mọi thứ của tôi.",
						"thai": "ฉันจะไม่ลืมการเสียสละของพวกเขา ระบบได้เอาทุกอย่างไปจากฉัน",
						"hindi": "मैं उनकी कुर्बानी नहीं भूलूंगा। सिस्टम ने मुझसे सब कुछ छीन लिया।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너도 시스템의 피해자였구나.",
						"english": "You were a victim of the system too.",
						"japanese": "君もシステムの犠牲者だったんだね。",
						"chinese": "你也是系统的受害者啊。",
						"french": "Toi aussi, tu étais une victime du système.",
						"spanish": "Tú también fuiste una víctima del sistema.",
						"vietnamese": "Bạn cũng là nạn nhân của hệ thống.",
						"thai": "คุณก็เป็นเหยื่อของระบบด้วยเหมือนกันสินะ",
						"hindi": "तुम भी सिस्टम के शिकार थे।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 그리고 난 복수할 거야. 이 거짓된 평화를 깨부술 거야.",
						"english": "Yes. And I will have my revenge. I will shatter this false peace.",
						"japanese": "そうだ。そして私は復讐する。この偽りの平和を打ち砕く。",
						"chinese": "是的。我要复仇。我要打破这虚假的和平。",
						"french": "Oui. Et je me vengerai. Je briserai cette fausse paix.",
						"spanish": "Sí. Y me vengaré. Destrozaré esta falsa paz.",
						"vietnamese": "Phải. Và tôi sẽ trả thù. Tôi sẽ phá tan sự bình yên giả dối này.",
						"thai": "ใช่ และฉันจะแก้แค้น ฉันจะทำลายความสงบสุขจอมปลอมนี้",
						"hindi": "हाँ। और मैं बदला लूँगा। मैं इस झूठी शांति को तोड़ दूँगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리도 더 이상 속지 않아.",
						"english": "We won't be deceived any longer.",
						"japanese": "私たちももう騙されない。",
						"chinese": "我们也不会再被欺骗了。",
						"french": "Nous ne serons plus dupés.",
						"spanish": "Ya no nos dejaremos engañar.",
						"vietnamese": "Chúng tôi cũng không còn bị lừa dối nữa.",
						"thai": "เราจะไม่ถูกหลอกอีกต่อไปแล้ว",
						"hindi": "हमें अब और धोखा नहीं दिया जाएगा।"
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이제 진실을 외칠 시간이야. 이 도시의 가면을 벗겨버리자고.",
						"english": "Now it's time to shout the truth. Let's rip off this city's mask.",
						"japanese": "さあ、真実を叫ぶ時が来た。この都市の仮面を剥がしてやろう。",
						"chinese": "现在是时候大声疾呼真相了。让我们揭开这座城市的假面具吧。",
						"french": "Maintenant, il est temps de crier la vérité. Dévoilons le vrai visage de cette ville.",
						"spanish": "Ahora es el momento de gritar la verdad. Quitémosle la máscara a esta ciudad.",
						"vietnamese": "Đã đến lúc nói lên sự thật. Hãy xé bỏ mặt nạ của thành phố này.",
						"thai": "ถึงเวลาตะโกนบอกความจริงแล้ว มาถอดหน้ากากของเมืองนี้กันเถอะ",
						"hindi": "अब सच चिल्लाने का समय है। चलो इस शहर का मुखौटा उतार दें।"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "좋아. 이 거짓된 번영은 끝내야 해.",
						"english": "Good. This false prosperity must end.",
						"japanese": "いいだろう。この偽りの繁栄は終わらせなければならない。",
						"chinese": "好。这种虚假的繁荣必须结束。",
						"french": "Bien. Cette fausse prospérité doit cesser.",
						"spanish": "Bien. Esta falsa prosperidad debe terminar.",
						"vietnamese": "Tốt. Sự thịnh vượng giả dối này phải chấm dứt.",
						"thai": "ดี ความเจริญรุ่งเรืองจอมปลอมนี้ต้องจบลง",
						"hindi": "अच्छा। इस झूठी समृद्धि का अंत होना चाहिए।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 시스템의 충실한 대변자야. 그를 쓰러뜨려야 해.",
						"english": "{random_boss} is the system's loyal spokesman. We must defeat him.",
						"japanese": "{random_boss}はシステムの忠実な代弁者だ。彼を倒さなければならない。",
						"chinese": "{random_boss}是系统的忠实代言人。我们必须打倒他。",
						"french": "{random_boss} est le fidèle porte-parole du système. Nous devons le vaincre.",
						"spanish": "{random_boss} es el leal portavoz del sistema. Debemos derrotarlo.",
						"vietnamese": "{random_boss} là người phát ngôn trung thành của hệ thống. Chúng ta phải đánh bại hắn.",
						"thai": "{random_boss} คือโฆษกผู้ภักดีของระบบ เราต้องโค่นล้มเขา",
						"hindi": "{random_boss} सिस्टम का वफादार प्रवक्ता है। हमें उसे हराना होगा।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알겠어. 반드시 그에게 진실을 보여주겠어.",
						"english": "Understood. I will definitely show him the truth.",
						"japanese": "分かった。必ず彼に真実を見せてやる。",
						"chinese": "明白了。我一定会让他看到真相。",
						"french": "Compris. Je lui montrerai la vérité, c'est certain.",
						"spanish": "Entendido. Sin duda le mostraré la verdad.",
						"vietnamese": "Đã rõ. Tôi nhất định sẽ cho hắn thấy sự thật.",
						"thai": "เข้าใจแล้ว ฉันจะแสดงความจริงให้เขาเห็นอย่างแน่นอน",
						"hindi": "समझ गया। मैं उसे निश्चित रूप से सच्चाई दिखाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "시스템의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "Deepest part of the system. A colossal shadow appeared.",
						"japanese": "システムの最も深い場所。巨大な影が現れた。",
						"chinese": "系统最深处。一个巨大的身影出现了。",
						"french": "Au plus profond du système. Une ombre colossale apparut.",
						"spanish": "En lo más profundo del sistema. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu thẳm nhất của hệ thống. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของระบบ. เงาขนาดยักษ์ปรากฏขึ้น.",
						"hindi": "सिस्टम के सबसे गहरे हिस्से में। एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "감히 이곳까지 오다니. 이 도시의 완벽한 질서를 방해하려는가?",
						"english": "How dare you come this far. Do you intend to disrupt this city's perfect order?",
						"japanese": "よくもここまで来たな。この都市の完璧な秩序を乱すつもりか？",
						"chinese": "你竟敢来到这里。是想破坏这座城市的完美秩序吗？",
						"french": "Comment oses-tu venir si loin. As-tu l'intention de perturber l'ordre parfait de cette ville ?",
						"spanish": "¿Cómo te atreves a llegar tan lejos? ¿Pretendes perturbar el orden perfecto de esta ciudad?",
						"vietnamese": "Ngươi dám đến tận đây sao. Ngươi định phá vỡ trật tự hoàn hảo của thành phố này à?",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่. เจ้าตั้งใจจะก่อกวนระเบียบที่สมบูรณ์แบบของเมืองนี้หรือ?",
						"hindi": "तुम्हारी इतनी हिम्मत कि तुम यहाँ तक आ गए। क्या तुम इस शहर की सही व्यवस्था को भंग करना चाहते हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 말하는 질서는 거짓된 번영일 뿐이야!",
						"english": "The order you speak of is nothing but false prosperity!",
						"japanese": "あなたが言う秩序は、偽りの繁栄に過ぎない！",
						"chinese": "你所说的秩序，不过是虚假的繁荣！",
						"french": "L'ordre dont vous parlez n'est qu'une fausse prospérité !",
						"spanish": "¡El orden del que hablas no es más que una falsa prosperidad!",
						"vietnamese": "Trật tự mà ngươi nói chỉ là sự thịnh vượng giả dối thôi!",
						"thai": "ระเบียบที่คุณพูดถึงเป็นแค่ความรุ่งเรืองที่จอมปลอม!",
						"hindi": "जिस व्यवस्था की तुम बात करते हो, वह झूठी समृद्धि के अलावा और कुछ नहीं!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "우리는 진실을 위해 싸울 거야. 당신의 환상은 이제 끝이야!",
						"english": "We will fight for the truth. Your illusion ends now!",
						"japanese": "私たちは真実のために戦う。あなたの幻想はここで終わりだ！",
						"chinese": "我们会为真相而战。你的幻想现在该结束了！",
						"french": "Nous nous battrons pour la vérité. Votre illusion prend fin maintenant !",
						"spanish": "Lucharemos por la verdad. ¡Tu ilusión termina ahora!",
						"vietnamese": "Chúng tôi sẽ chiến đấu vì sự thật. Ảo ảnh của ngươi kết thúc ngay bây giờ!",
						"thai": "เราจะต่อสู้เพื่อความจริง. ภาพลวงตาของคุณจบลงแล้ว!",
						"hindi": "हम सच्चाई के लिए लड़ेंगे। तुम्हारा भ्रम अब खत्म होता है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 이 시스템은 누구도 바꿀 수 없다!",
						"english": "Fools… No one can change this system!",
						"japanese": "愚かな者たちめ… このシステムは誰も変えられない！",
						"chinese": "愚蠢的家伙们……没有人能改变这个系统！",
						"french": "Imbéciles… Personne ne peut changer ce système !",
						"spanish": "¡Necios… Nadie puede cambiar este sistema!",
						"vietnamese": "Những kẻ ngu ngốc… Không ai có thể thay đổi hệ thống này!",
						"thai": "พวกโง่เง่า… ไม่มีใครสามารถเปลี่ยนระบบนี้ได้!",
						"hindi": "मूर्खों… कोई भी इस सिस्टम को बदल नहीं सकता!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 내가… 졌다고? 하지만…",
						"english": "Ugh… I… lost? But…",
						"japanese": "くっ… 私が… 負けたのか？だが…",
						"chinese": "呃… 我… 输了？但是…",
						"french": "Urgh… J'ai… perdu ? Mais…",
						"spanish": "Ugh… ¿Yo… perdí? Pero…",
						"vietnamese": "Khặc… Ta… thua rồi ư? Nhưng…",
						"thai": "อึก… ข้า… แพ้แล้วรึ? แต่ว่า…",
						"hindi": "उफ़… मैं… हार गया? लेकिन…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템의… 본질은… 변하지 않아…",
						"english": "The system's… essence… won't change…",
						"japanese": "システムの… 本質は… 変わらない…",
						"chinese": "系统的… 本质… 不会改变…",
						"french": "L'essence… du système… ne changera pas…",
						"spanish": "La… esencia… del sistema… no cambiará…",
						"vietnamese": "Bản chất… của hệ thống… sẽ không thay đổi…",
						"thai": "แก่นแท้… ของระบบ… ไม่เปลี่ยนแปลง…",
						"hindi": "सिस्टम का… सार… नहीं बदलेगा…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니. 여기서부터 시작될 거야. 진정한 변화가.",
						"english": "No. True change will begin from here.",
						"japanese": "いや。ここから始まるんだ。真の変革が。",
						"chinese": "不。真正的改变将从这里开始。",
						"french": "Non. Le vrai changement commencera ici.",
						"spanish": "No. El verdadero cambio comenzará aquí.",
						"vietnamese": "Không. Sự thay đổi thực sự sẽ bắt đầu từ đây.",
						"thai": "ไม่. การเปลี่ยนแปลงที่แท้จริงจะเริ่มต้นจากที่นี่.",
						"hindi": "नहीं। सच्चा बदलाव यहीं से शुरू होगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 환상적인 번영 이면에 깊이 뿌리내린 어둠이 흔들렸다.",
						"english": "The darkness deeply rooted behind the city's illusory prosperity was shaken.",
						"japanese": "都市の幻想的な繁栄の裏に深く根付いた闇が揺らいだ。",
						"chinese": "城市虚幻繁荣背后根深蒂固的黑暗被动摇了。",
						"french": "L'obscurité profondément enracinée derrière la prospérité illusoire de la ville fut ébranlée.",
						"spanish": "La oscuridad profundamente arraigada tras la prosperidad ilusoria de la ciudad fue sacudida.",
						"vietnamese": "Bóng tối đã ăn sâu sau sự thịnh vượng ảo ảnh của thành phố đã bị lay động.",
						"thai": "ความมืดมิดที่หยั่งรากลึกเบื้องหลังความเจริญรุ่งเรืองที่จอมปลอมของเมืองถูกสั่นคลอน.",
						"hindi": "शहर की भ्रामक समृद्धि के पीछे गहराई तक जड़ जमाई हुई अँधेरी छाया हिल गई।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "승리했지만, 더 거대한 존재의 그림자가 드러나는 순간이었다.",
						"english": "It was a victory, but also the moment a shadow of a greater entity was revealed.",
						"japanese": "勝利したが、それはより巨大な存在の影が明らかになる瞬間でもあった。",
						"chinese": "这是一场胜利，但也是一个更巨大存在身影显露的时刻。",
						"french": "Ce fut une victoire, mais aussi le moment où l'ombre d'une entité plus grande fut révélée.",
						"spanish": "Fue una victoria, pero también el momento en que se reveló la sombra de una entidad mayor.",
						"vietnamese": "Đó là một chiến thắng, nhưng cũng là khoảnh khắc một bóng đen của một thực thể lớn hơn được hé lộ.",
						"thai": "มันเป็นชัยชนะ แต่ก็เป็นช่วงเวลาที่เงาของสิ่งที่มีอยู่ขนาดใหญ่กว่าถูกเปิดเผย.",
						"hindi": "यह एक जीत थी, लेकिन एक बड़ी सत्ता की छाया के प्रकट होने का क्षण भी था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 반항이로군. 이 도시의 질서는 영원하다!",
						"english": "A futile rebellion. This city's order is eternal!",
						"japanese": "取るに足らない反抗だ。この都市の秩序は永遠なのだ！",
						"chinese": "毫无意义的反抗。这座城市的秩序是永恒的！",
						"french": "Une rébellion futile. L'ordre de cette ville est éternel !",
						"spanish": "¡Una rebelión inútil. El orden de esta ciudad es eterno!",
						"vietnamese": "Một cuộc nổi loạn vô ích. Trật tự của thành phố này là vĩnh cửu!",
						"thai": "การกบฏที่ไร้สาระ ระเบียบของเมืองนี้เป็นนิรันดร์!",
						"hindi": "एक निरर्थक विद्रोह। इस शहर की व्यवस्था शाश्वत है!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직 끝나지 않았어!",
						"english": "No... It's not over yet!",
						"japanese": "いや…まだ終わってない！",
						"chinese": "不……还没结束！",
						"french": "Non... Ce n'est pas encore fini !",
						"spanish": "¡No... Aún no ha terminado!",
						"vietnamese": "Không... Vẫn chưa kết thúc!",
						"thai": "ไม่... ยังไม่จบ!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템의 견고한 벽 앞에 다시 무릎 꿇었다. 그러나 분노는 더욱 타올랐다.",
						"english": "I knelt again before the system's unyielding wall. But my fury burned even brighter.",
						"japanese": "システムの堅固な壁の前に再びひざまずいた。しかし、怒りはさらに燃え上がった。",
						"chinese": "我再次跪倒在系统坚固的墙前。然而，怒火却燃烧得更旺了。",
						"french": "Je me suis de nouveau agenouillé devant le mur inébranlable du système. Mais ma fureur s'est embrasée encore plus fort.",
						"spanish": "Me arrodillé de nuevo ante el muro inquebrantable del sistema. Pero mi furia ardió aún más.",
						"vietnamese": "Tôi lại quỳ gối trước bức tường kiên cố của hệ thống. Nhưng cơn giận của tôi bùng cháy dữ dội hơn.",
						"thai": "ฉันคุกเข่าลงอีกครั้งหน้ากำแพงอันแข็งแกร่งของระบบ แต่ความโกรธของฉันกลับลุกโชนยิ่งกว่าเดิม",
						"hindi": "मैं फिर से सिस्टम की अटल दीवार के सामने घुटने टेक दिया। लेकिन मेरा क्रोध और भी तीव्र हो उठा।"
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
