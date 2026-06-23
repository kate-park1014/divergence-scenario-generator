export const scenario_modern_phantom_35_04 = {
	"scenario_id": "modern_phantom_35_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"tao": {
			"id": "mon_69a30a3b-a2ed-4cba-843c-564dfc0bf16b",
			"name": {
				"korean": "타오",
				"english": "Tao",
				"japanese": "タオ",
				"chinese": "陶",
				"french": "Tao",
				"spanish": "Tao",
				"vietnamese": "Tao",
				"thai": "เต๋า",
				"hindi": "ताओ"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6f08212-b074-44c7-3781-a430044f5600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b449b97-e269-4246-b1f2-8bd0ca473800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 시스템이 멈춰버렸다.",
			"모든 디지털이 침묵하고, 공포가 거리를 뒤덮었다.",
			"팬텀의 공격은 파괴일까, 혹은… 다른 의지일까.",
			"망념처럼 지켜온 유산, 그 비극적 진실이 드러난다."
		],
		"english": [
			"The city's system has stopped.",
			"All digital went silent, fear covered the streets.",
			"Is Phantom's attack destruction, or... another will?",
			"The legacy guarded like a delusion, its tragic truth is revealed."
		],
		"japanese": [
			"都市のシステムが停止した。",
			"すべてのデジタルが沈黙し、恐怖が街を覆った。",
			"ファントムの攻撃は破壊なのか、それとも…別の意志なのか。",
			"妄執のように守られてきた遺産、その悲劇的な真実が明らかになる。"
		],
		"chinese": [
			"城市系统已停止运行。",
			"所有数字都陷入沉默，恐惧笼罩了街道。",
			"幻影的攻击是破坏，还是……另一种意志？",
			"如同妄念般守护的遗产，其悲剧性真相即将揭露。"
		],
		"french": [
			"Le système de la ville s'est arrêté.",
			"Tout le numérique s'est tu, la peur a envahi les rues.",
			"L'attaque de Phantom est-elle une destruction, ou... une autre volonté ?",
			"L'héritage gardé comme une illusion, sa vérité tragique est révélée."
		],
		"spanish": [
			"El sistema de la ciudad se ha detenido.",
			"Todo lo digital enmudeció, el miedo cubrió las calles.",
			"¿El ataque de Phantom es destrucción, o... otra voluntad?",
			"El legado custodiado como una ilusión, su trágica verdad se revela."
		],
		"vietnamese": [
			"Hệ thống thành phố đã ngừng hoạt động.",
			"Mọi thứ kỹ thuật số đều im lặng, nỗi sợ hãi bao trùm đường phố.",
			"Cuộc tấn công của Phantom là sự phá hủy, hay... một ý chí khác?",
			"Di sản được bảo vệ như một ảo ảnh, sự thật bi thảm của nó được tiết lộ."
		],
		"thai": [
			"ระบบของเมืองหยุดทำงานแล้ว",
			"ดิจิทัลทั้งหมดเงียบลง ความกลัวปกคลุมท้องถนน",
			"การโจมตีของแฟนทอมเป็นการทำลายล้าง หรือ... เจตจำนงอื่น?",
			"มรดกที่ถูกเฝ้ารักษาเหมือนความหลงผิด ความจริงอันน่าเศร้าถูกเปิดเผย"
		],
		"hindi": [
			"शहर का सिस्टम रुक गया है।",
			"सभी डिजिटल खामोश हो गए, डर ने सड़कों को ढँक लिया।",
			"क्या फैंटम का हमला विनाश है, या... कोई और इच्छा?",
			"एक भ्रम की तरह संरक्षित विरासत, उसका दुखद सच सामने आता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장이 멎었다. 시스템은 붕괴되고 있었다.",
						"english": "The city's heart stopped. The system was collapsing.",
						"japanese": "都市の心臓が止まった。システムは崩壊しつつあった。",
						"chinese": "城市的心脏停止了跳动。系统正在崩溃。",
						"french": "Le cœur de la ville s'est arrêté. Le système s'effondrait.",
						"spanish": "El corazón de la ciudad se detuvo. El sistema se estaba derrumbando.",
						"vietnamese": "Trái tim thành phố đã ngừng đập. Hệ thống đang sụp đổ.",
						"thai": "หัวใจของเมืองหยุดเต้น ระบบกำลังพังทลาย",
						"hindi": "शहर का दिल रुक गया। सिस्टम ढह रहा था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "세상이… 멈춘 것 같아.",
						"english": "The world... seems to have stopped.",
						"japanese": "世界が…止まったみたいだ。",
						"chinese": "世界……好像停止了。",
						"french": "Le monde... semble s'être arrêté.",
						"spanish": "El mundo... parece haberse detenido.",
						"vietnamese": "Thế giới... dường như đã dừng lại.",
						"thai": "โลก... เหมือนจะหยุดนิ่งไปเลย",
						"hindi": "दुनिया... थम सी गई है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "팬텀, 너 대체 뭘 하려는 거야!",
						"english": "Phantom, what are you trying to do?!",
						"japanese": "ファントム、一体何をしようとしているんだ！",
						"chinese": "幻影，你到底想做什么！",
						"french": "Phantom, qu'est-ce que tu essaies de faire ?!",
						"spanish": "¡Phantom, qué intentas hacer?!",
						"vietnamese": "Phantom, rốt cuộc ngươi đang định làm gì vậy!",
						"thai": "แฟนทอม แกจะทำอะไรกันแน่!",
						"hindi": "फैंटम, तुम आखिर क्या करने की कोशिश कर रहे हो!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "tao",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오랜만이야, 이 혼돈.",
						"english": "Long time no see, this chaos.",
						"japanese": "久しぶりだな、この混沌は。",
						"chinese": "好久不见，这份混乱。",
						"french": "Ça fait longtemps, ce chaos.",
						"spanish": "Cuánto tiempo sin verte, caos.",
						"vietnamese": "Lâu rồi không gặp, sự hỗn loạn này.",
						"thai": "ไม่ได้เจอกันนานเลยนะ ความวุ่นวายนี้",
						"hindi": "बहुत दिनों बाद, यह अराजकता।"
					},
					"speaker": "tao",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누군가는 이런 날이 올 줄 알았지.",
						"english": "Someone knew a day like this would come.",
						"japanese": "誰かはこんな日が来ると思ってたさ。",
						"chinese": "有些人早就知道会有这么一天。",
						"french": "Quelqu'un savait qu'un jour comme celui-ci viendrait.",
						"spanish": "Alguno sabía que llegaría un día como este.",
						"vietnamese": "Ai đó đã biết ngày này sẽ đến.",
						"thai": "มีคนบางคนรู้ว่าวันนี้จะต้องมาถึง",
						"hindi": "किसी को पता था कि ऐसा दिन आएगा।"
					},
					"speaker": "tao"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "tao",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "타오, 뭘 알고 있는 거지? 이 시스템 마비… 팬텀이 왜 이러는 거야?",
						"english": "Tao, what do you know? This system paralysis... Why is Phantom doing this?",
						"japanese": "タオ、何を知ってるんだ？このシステム麻痺…ファントムはなぜこんなことを？",
						"chinese": "陶，你到底知道些什么？系统瘫痪……幻影为什么要这么做？",
						"french": "Tao, qu'est-ce que tu sais ? Cette paralysie du système... Pourquoi Phantom fait ça ?",
						"spanish": "Tao, ¿qué sabes? Esta parálisis del sistema... ¿Por qué Phantom está haciendo esto?",
						"vietnamese": "Tao, ngươi biết gì vậy? Hệ thống tê liệt này... Tại sao Phantom lại làm vậy?",
						"thai": "เทา นายรู้อะไรบ้าง? ระบบที่หยุดชะงักนี่... ทำไมแฟนทอมถึงทำแบบนี้?",
						"hindi": "ताओ, तुम क्या जानते हो? यह सिस्टम का ठहराव... फैंटम ऐसा क्यों कर रहा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "tao",
					"content": {
						"korean": "옛날에 도시 뒷골목을 지배했던 거대한 갱단이 있었어.",
						"english": "Once, a massive gang ruled the city's back alleys.",
						"japanese": "かつて、都市の裏路地を支配していた巨大なギャングがいたんだ。",
						"chinese": "很久以前，有一个庞大的帮派统治着城市的后巷。",
						"french": "Autrefois, un immense gang régnait sur les ruelles de la ville.",
						"spanish": "Érase una vez, una enorme banda dominaba los callejones traseros de la ciudad.",
						"vietnamese": "Ngày xưa, có một băng đảng khổng lồ thống trị những con hẻm sau của thành phố.",
						"thai": "กาลครั้งหนึ่ง มีแก๊งขนาดใหญ่ที่เคยปกครองตรอกซอกซอยของเมือง",
						"hindi": "एक बार, शहर की पिछड़ी गलियों पर एक विशाल गिरोह का राज था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그들 뒤엔 '해결사'라 불리는 자가 있었지.",
						"english": "Behind them was a man called 'The Fixer'.",
						"japanese": "彼らの後ろには、『解決屋』と呼ばれる者がいた。",
						"chinese": "在他们背后，有一个被称为‘解决师’的人。",
						"french": "Derrière eux se trouvait un homme surnommé « Le Régleur ».",
						"spanish": "Detrás de ellos había un hombre llamado 'El Solucionador'.",
						"vietnamese": "Đằng sau họ là một người được gọi là 'Người Giải Quyết'.",
						"thai": "เบื้องหลังพวกเขา มีชายคนหนึ่งที่ถูกเรียกว่า 'ผู้แก้ไขปัญหา'",
						"hindi": "उनके पीछे एक आदमी था जिसे 'द फिक्सर' कहते थे।"
					},
					"speaker": "tao",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "tao",
					"content": {
						"korean": "그 해결사가 목숨 걸고 지키려던 게 있었는데… 아날로그 '장부'였어.",
						"english": "What that Fixer risked his life to protect was... an analog 'ledger'.",
						"japanese": "その解決屋が命懸けで守ろうとしていたものがあった…アナログの『帳簿』だった。",
						"chinese": "那个解决师不惜性命守护的东西是…一本模拟‘账本’。",
						"french": "Ce que ce Régleur risquait sa vie pour protéger était… un « registre » analogique.",
						"spanish": "Lo que ese Solucionador arriesgó su vida para proteger era... un 'libro de cuentas' analógico.",
						"vietnamese": "Thứ mà Người Giải Quyết đó liều mạng bảo vệ là… một 'cuốn sổ cái' analog.",
						"thai": "สิ่งที่ผู้แก้ไขคนนั้นยอมเสี่ยงชีวิตเพื่อปกป้องคือ... 'สมุดบัญชี' แบบอนาล็อก",
						"hindi": "वह फिक्सर जिस चीज़ को जान पर खेलकर बचाना चाहता था, वह थी... एक एनालॉग 'लेजर'।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "장부? 왜 하필 아날로그?",
						"english": "A ledger? Why analog of all things?",
						"japanese": "帳簿？なぜよりによってアナログなんだ？",
						"chinese": "账本？为什么偏偏是模拟的？",
						"french": "Un registre ? Pourquoi analogique, précisément ?",
						"spanish": "¿Un libro de cuentas? ¿Por qué analógico, precisamente?",
						"vietnamese": "Sổ cái? Sao lại là analog?",
						"thai": "สมุดบัญชี? ทำไมต้องเป็นอนาล็อกด้วยล่ะ?",
						"hindi": "लेजर? आखिर एनालॉग ही क्यों?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "tao",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "tao",
					"content": {
						"korean": "디지털은 너무 쉽게 지워져. 놈들은 그걸 알았지.",
						"english": "Digital vanishes too easily. They knew that.",
						"japanese": "デジタルはあまりにも簡単に消える。奴らはそれを知っていた。",
						"chinese": "数字化的太容易抹掉了。他们知道这一点。",
						"french": "Le numérique s'efface trop facilement. Ils le savaient.",
						"spanish": "Lo digital se borra con demasiada facilidad. Ellos lo sabían.",
						"vietnamese": "Kỹ thuật số quá dễ bị xóa. Bọn chúng biết điều đó.",
						"thai": "ดิจิทัลลบง่ายเกินไป พวกมันรู้เรื่องนั้นดี",
						"hindi": "डिजिटल बहुत आसानी से मिट जाता है। वे यह जानते थे।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 장부엔 갱단의 모든 비밀이, 그리고… 도시의 추악한 진실이 담겨있었어.",
						"english": "That ledger held all the gang's secrets, and... the city's ugly truth.",
						"japanese": "その帳簿にはギャングの全ての秘密が、そして…都市の醜い真実が記されていた。",
						"chinese": "那本账本里藏着帮派所有的秘密，以及…这座城市肮脏的真相。",
						"french": "Ce registre contenait tous les secrets du gang, et… la sale vérité de la ville.",
						"spanish": "Ese libro de cuentas guardaba todos los secretos de la banda, y... la fea verdad de la ciudad.",
						"vietnamese": "Cuốn sổ cái đó chứa đựng mọi bí mật của băng đảng, và… sự thật xấu xa của thành phố.",
						"thai": "สมุดบัญชีนั้นบรรจุความลับทั้งหมดของแก๊ง และ... ความจริงอันน่ารังเกียจของเมือง",
						"hindi": "उस लेजर में गिरोह के सभी रहस्य, और... शहर की बदसूरत सच्चाई छिपी थी।"
					},
					"speaker": "tao"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "팬텀이… 그 장부를 지키려는 걸까? 그래서 시스템을 붕괴시키는 거야?",
						"english": "Is Phantom... trying to protect that ledger? Is that why it's collapsing the system?",
						"japanese": "ファントムが…その帳簿を守ろうとしているのか？だからシステムを崩壊させているのか？",
						"chinese": "幻影…是想守护那本账本吗？所以才破坏系统？",
						"french": "Phantom… essaie-t-il de protéger ce registre ? Est-ce pour ça qu'il fait s'effondrer le système ?",
						"spanish": "¿Phantom... está tratando de proteger ese libro de cuentas? ¿Por eso está colapsando el sistema?",
						"vietnamese": "Phantom… đang cố bảo vệ cuốn sổ cái đó sao? Nên mới phá hủy hệ thống?",
						"thai": "แฟนทอม... กำลังพยายามปกป้องสมุดบัญชีนั้นหรือเปล่า? นั่นคือเหตุผลที่มันกำลังทำให้ระบบล่มสลาย?",
						"hindi": "क्या फैंटम... उस लेजर को बचाने की कोशिश कर रहा है? क्या इसीलिए वह सिस्टम को गिरा रहा है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "tao",
					"content": {
						"korean": "…글쎄. 나는 그저 흘러가는 이야기를 들었을 뿐이야.",
						"english": "...Well. I merely heard a passing tale.",
						"japanese": "…さあな。俺はただ、流れてくる話を聞いただけだ。",
						"chinese": "…这个嘛。我只是听到了一个流传的故事而已。",
						"french": "…Hum. Je n'ai fait qu'entendre une histoire qui passe.",
						"spanish": "...Bueno. Yo solo escuché una historia que circulaba.",
						"vietnamese": "...Chà. Tôi chỉ nghe kể lại một câu chuyện mà thôi.",
						"thai": "…อืม. ฉันแค่ได้ยินเรื่องราวที่เล่าขานกันมาเท่านั้น",
						"hindi": "...खैर। मैंने तो बस एक चलती-फिरती कहानी सुनी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "tao",
					"content": {
						"korean": "팬텀이 그 망령과 관련 있을 리 없지.",
						"english": "Phantom couldn't possibly be related to that specter.",
						"japanese": "ファントムがその亡霊と関係あるはずがない。",
						"chinese": "幻影不可能和那个亡灵有关。",
						"french": "Phantom ne peut sûrement pas être lié à ce spectre.",
						"spanish": "Phantom no podría estar relacionado con ese espectro.",
						"vietnamese": "Phantom không thể nào liên quan đến hồn ma đó được.",
						"thai": "แฟนทอมไม่มีทางเกี่ยวข้องกับวิญญาณนั้นหรอก",
						"hindi": "फैंटम का उस प्रेत से कोई संबंध नहीं हो सकता।"
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
					"speaker": "tao",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 비명 소리가 더 커졌다. 시스템은 완전히 마비되었다.",
						"english": "The city's screams grew louder. The system was completely paralyzed.",
						"japanese": "都市の悲鳴がさらに大きくなった。システムは完全に麻痺した。",
						"chinese": "城市的尖叫声更响了。系统彻底瘫痪了。",
						"french": "Les cris de la ville devinrent plus forts. Le système était complètement paralysé.",
						"spanish": "Los gritos de la ciudad se hicieron más fuertes. El sistema estaba completamente paralizado.",
						"vietnamese": "Tiếng la hét của thành phố càng lúc càng lớn. Hệ thống đã hoàn toàn tê liệt.",
						"thai": "เสียงกรีดร้องของเมืองดังขึ้น ระบบถูกทำให้เป็นอัมพาตโดยสมบูรณ์",
						"hindi": "शहर की चीखें तेज़ हो गईं। सिस्टम पूरी तरह से पंगु हो गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "타오, 제발 더 알려줘! 팬텀의 공격이 단순히 파괴가 아니란 걸 느끼고 있어!",
						"english": "Tao, please tell me more! I feel like Phantom's attacks aren't just about destruction!",
						"japanese": "タオ、もっと教えて！ファントムの攻撃はただの破壊じゃない気がする！",
						"chinese": "陶，请告诉我更多！我感觉幻影的攻击不仅仅是破坏！",
						"french": "Tao, dis-m'en plus, s'il te plaît ! J'ai l'impression que les attaques de Phantom ne sont pas que de la destruction !",
						"spanish": "¡Tao, por favor, dime más! ¡Siento que los ataques de Phantom no son solo destrucción!",
						"vietnamese": "Tao, làm ơn nói cho tôi biết thêm đi! Tôi cảm thấy các cuộc tấn công của Phantom không chỉ là sự phá hủy!",
						"thai": "เถา, ได้โปรดบอกฉันเพิ่มเติมหน่อย! ฉันรู้สึกว่าการโจมตีของแฟนทอมไม่ใช่แค่การทำลายล้าง!",
						"hindi": "ताओ, कृपया मुझे और बताओ! मुझे लगता है कि फैंटम के हमले सिर्फ विनाश नहीं हैं!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "해결사는 사라졌지만… 그의 의지는 사라지지 않았어.",
						"english": "The Fixer is gone... but his will remains.",
						"japanese": "フィクサーは消えたが…彼の意志は消えていない。",
						"chinese": "解决者消失了……但他的意志并未消逝。",
						"french": "Le Régulateur a disparu… mais sa volonté demeure.",
						"spanish": "El Reparador se ha ido... pero su voluntad no ha desaparecido.",
						"vietnamese": "Người sửa chữa đã biến mất... nhưng ý chí của anh ấy vẫn còn.",
						"thai": "ผู้แก้ไขหายไปแล้ว... แต่เจตจำนงของเขายังคงอยู่",
						"hindi": "समाधानकर्ता चला गया... लेकिन उसकी इच्छा नहीं मिटी है।"
					},
					"speaker": "tao",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 장부에는 도시의 '질서'가 무너진 비극적인 기록이 담겨있다고 했어.",
						"english": "They said the ledger contains a tragic record of the city's 'order' crumbling.",
						"japanese": "その帳簿には、都市の「秩序」が崩壊した悲劇的な記録が記されていると言っていた。",
						"chinese": "他们说那本账簿里记载着城市‘秩序’崩溃的悲惨记录。",
						"french": "Ils ont dit que le registre contenait un récit tragique de l'effondrement de l'« ordre » de la ville.",
						"spanish": "Dijeron que el libro de contabilidad contiene un registro trágico del colapso del 'orden' de la ciudad.",
						"vietnamese": "Họ nói cuốn sổ cái chứa đựng một ghi chép bi thảm về sự sụp đổ 'trật tự' của thành phố.",
						"thai": "พวกเขาบอกว่าบัญชีนั้นบรรจุบันทึกโศกนาฏกรรมของการล่มสลายของ 'ระเบียบ' ในเมือง",
						"hindi": "उन्होंने कहा कि उस बहीखाते में शहर की 'व्यवस्था' के बिखरने का एक दुखद रिकॉर्ड है।"
					},
					"speaker": "tao"
				},
				{
					"emotion": "sad",
					"speaker": "tao",
					"content": {
						"korean": "팬텀이 그 망념을 지키려 한다면… 그건 너무 슬픈 이야기야.",
						"english": "If Phantom is trying to protect that delusion... it's a truly sad story.",
						"japanese": "ファントムがその妄念を守ろうとしているのなら…それはあまりにも悲しい話だ。",
						"chinese": "如果幻影试图守护那妄念……那真是个悲伤的故事。",
						"french": "Si Phantom tente de protéger cette illusion… c'est une histoire bien trop triste.",
						"spanish": "Si Phantom está tratando de proteger esa ilusión... es una historia muy triste.",
						"vietnamese": "Nếu Phantom đang cố gắng bảo vệ sự ảo tưởng đó... thì đó là một câu chuyện quá buồn.",
						"thai": "ถ้าแฟนทอมพยายามปกป้องความหลงผิดนั้น... นั่นเป็นเรื่องเศร้าเกินไป",
						"hindi": "अगर फैंटम उस भ्रम को बचाने की कोशिश कर रहा है... तो यह बहुत दुखद कहानी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "망념… 지켜야 할 진실이라니…",
						"english": "Delusion... a truth to be protected, you say...",
						"japanese": "妄念…守るべき真実だと…",
						"chinese": "妄念……竟是需要守护的真相……",
						"french": "Une illusion… une vérité à protéger, dis-tu…",
						"spanish": "Una ilusión... ¿una verdad que proteger?",
						"vietnamese": "Ảo tưởng... một sự thật cần được bảo vệ sao...",
						"thai": "ความหลงผิด... ความจริงที่ต้องปกป้องหรือ...",
						"hindi": "भ्रम... बचाने लायक सच, तुम कहते हो..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "기억해라… 진실은… 언제나 잔혹하다…",
						"english": "Remember… the truth… is always cruel…",
						"japanese": "覚えておけ…真実は…常に残酷だ…",
						"chinese": "记住…真相…总是残酷的…",
						"french": "N'oublie pas… la vérité… est toujours cruelle…",
						"spanish": "Recuerda… la verdad… siempre es cruel…",
						"vietnamese": "Hãy nhớ… sự thật… luôn tàn khốc…",
						"thai": "จงจำไว้…ความจริง…นั้นโหดร้ายเสมอ…",
						"hindi": "याद रखना… सत्य… हमेशा क्रूर होता है…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…결국, 진실은 그 '장부'에 있겠어.",
						"english": "…Ultimately, the truth lies in that 'ledger'.",
						"japanese": "…結局、真実はその「帳簿」にある。",
						"chinese": "…最终，真相在那本“账簿”里。",
						"french": "…En fin de compte, la vérité se trouve dans ce 'registre'.",
						"spanish": "…Al final, la verdad está en ese 'libro de contabilidad'.",
						"vietnamese": "…Cuối cùng, sự thật nằm trong 'sổ cái' đó.",
						"thai": "…ในที่สุด ความจริงก็อยู่ใน 'บัญชีแยกประเภท' นั้น",
						"hindi": "…अंततः, सत्य उस 'बहीखाते' में है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 코어가 잠시 안정되었다. 그러나 장부를 향한 길은 아직 멀었다.",
						"english": "The system's core has stabilized for a moment. But the path to the ledger is still long.",
						"japanese": "システムコアは一時的に安定した。しかし、帳簿への道はまだ遠い。",
						"chinese": "系统的核心暂时稳定了。但通往账簿的路还很遥远。",
						"french": "Le cœur du système s'est stabilisé un instant. Mais le chemin vers le registre est encore long.",
						"spanish": "El núcleo del sistema se ha estabilizado por un momento. Pero el camino hacia el libro mayor aún es largo.",
						"vietnamese": "Lõi hệ thống đã tạm thời ổn định. Nhưng con đường đến sổ cái vẫn còn xa.",
						"thai": "แกนกลางของระบบเสถียรชั่วขณะหนึ่งแล้ว แต่หนทางสู่บัญชีแยกประเภทนั้นยังอีกยาวไกล",
						"hindi": "सिस्टम का कोर कुछ देर के लिए स्थिर हो गया है। लेकिन बहीखाते तक का रास्ता अभी भी लंबा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자여… 망념은 깨지지 않아.",
						"english": "Foolish one… Delusion cannot be broken.",
						"japanese": "愚か者よ…妄念は壊れない。",
						"chinese": "愚蠢之人…妄念不会被打破。",
						"french": "Insensé… L'illusion ne peut être brisée.",
						"spanish": "Necio… La ilusión no puede romperse.",
						"vietnamese": "Kẻ ngốc… Ảo tưởng không thể bị phá vỡ.",
						"thai": "ผู้โง่เขลา…ความลุ่มหลงมิอาจถูกทำลายได้",
						"hindi": "मूर्ख… भ्रम टूटता नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실을 파헤칠 때까지!",
						"english": "…It's not over yet. Not until I uncover the truth!",
						"japanese": "…まだ終わっていない。真実を暴くまで！",
						"chinese": "…还没结束。直到揭露真相为止！",
						"french": "…Ce n'est pas encore fini. Pas avant d'avoir découvert la vérité !",
						"spanish": "…Aún no ha terminado. ¡Hasta que desentierre la verdad!",
						"vietnamese": "…Vẫn chưa kết thúc. Cho đến khi tôi khám phá ra sự thật!",
						"thai": "…มันยังไม่จบ จนกว่าจะเปิดเผยความจริง!",
						"hindi": "…अभी खत्म नहीं हुआ है। जब तक मैं सच्चाई का पता नहीं लगा लेता!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 가장 깊은 곳, 거대한 그림자가 앞을 막아섰다.",
						"english": "In the deepest reaches of the system, a colossal shadow blocked the path.",
						"japanese": "システムの最深部、巨大な影が道を阻んだ。",
						"chinese": "系统最深处，一道巨大的黑影挡住了去路。",
						"french": "Au plus profond du système, une ombre colossale bloquait le chemin.",
						"spanish": "En lo más profundo del sistema, una sombra colosal bloqueaba el camino.",
						"vietnamese": "Tại nơi sâu nhất của hệ thống, một bóng tối khổng lồ đã chắn ngang đường.",
						"thai": "ในส่วนลึกที่สุดของระบบ เงาขนาดมหึมาขวางทางไว้",
						"hindi": "सिस्टम के सबसे गहरे स्थान पर, एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "focus",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 여기까지 왔군.",
						"english": "You dare... come this far.",
						"japanese": "よくも…ここまで来たな。",
						"chinese": "竟敢……来到这里。",
						"french": "Tu oses… venir jusqu'ici.",
						"spanish": "Te atreves... a llegar tan lejos.",
						"vietnamese": "Ngươi dám... đến tận đây.",
						"thai": "กล้า... มาถึงที่นี่ได้ยังไง",
						"hindi": "तुमने हिम्मत की... यहाँ तक आने की।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}! 네가 지키려는 게 대체 뭔데!",
						"english": "{random_boss}! What exactly are you trying to protect?!",
						"japanese": "{random_boss}！お前が守ろうとしているものは一体何だ！",
						"chinese": "{random_boss}！你到底想守护什么！",
						"french": "{random_boss} ! Qu'est-ce que tu essaies de protéger, au juste ?!",
						"spanish": "¡{random_boss}! ¿Qué demonios intentas proteger?",
						"vietnamese": "{random_boss}! Ngươi rốt cuộc đang cố gắng bảo vệ cái gì vậy!",
						"thai": "{random_boss}! นายกำลังปกป้องอะไรกันแน่!",
						"hindi": "{random_boss}! आखिर तुम क्या बचाना चाहते हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "망념이 지킨 유산… 누구도 건드릴 수 없어.",
						"english": "The legacy protected by delusion... no one can touch it.",
						"japanese": "妄念が守りし遺産…誰にも触れることは許されない。",
						"chinese": "妄念所守护的遗产……谁都不能碰。",
						"french": "L'héritage protégé par l'illusion… personne ne peut y toucher.",
						"spanish": "El legado protegido por la ilusión... nadie puede tocarlo.",
						"vietnamese": "Di sản được bảo vệ bởi ảo tưởng... không ai có thể chạm vào.",
						"thai": "มรดกที่ความหลงผิดปกป้อง... ไม่มีใครแตะต้องได้",
						"hindi": "भ्रम द्वारा संरक्षित विरासत... कोई इसे छू नहीं सकता।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 유산이 도시를 파괴하고 있어!",
						"english": "That legacy is destroying the city!",
						"japanese": "その遺産が都市を破壊している！",
						"chinese": "那份遗产正在摧毁这座城市！",
						"french": "Cet héritage est en train de détruire la ville !",
						"spanish": "¡Ese legado está destruyendo la ciudad!",
						"vietnamese": "Di sản đó đang phá hủy thành phố!",
						"thai": "มรดกนั้นกำลังทำลายเมือง!",
						"hindi": "वह विरासत शहर को तबाह कर रही है!"
					}
				}
			],
			"id": 15
		}
	]
} as const;
