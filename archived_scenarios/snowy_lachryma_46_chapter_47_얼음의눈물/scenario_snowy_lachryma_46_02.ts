export const scenario_snowy_lachryma_46_02 = {
	"scenario_id": "snowy_lachryma_46_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"통신은 끊겼고, 설원은 끝없이 고립시켰다.",
			"낯선 이의 도움은 달콤했지만, 그의 눈빛은 짙은 의심을 품고 있었다.",
			"그는 알 수 없는 '시스템'이 모든 것을 조종한다고 속삭였다.",
			"점점 더 깊은 분노가 차올랐다. 나는 어디로 가는가."
		],
		"english": [
			"Comms lost. The snowfield, an endless isolation.",
			"The stranger's help was sweet, but his eyes held deep suspicion.",
			"He whispered that an unknown 'System' controlled everything.",
			"A deeper rage welled up. Where am I going?"
		],
		"japanese": [
			"通信は途絶え、雪原は果てしなく孤立させた。",
			"見知らぬ者の助けは甘美だったが、彼の瞳には深い疑念が宿っていた。",
			"彼は、未知の「システム」がすべてを操っていると囁いた。",
			"ますます深い怒りがこみ上げてきた。私はどこへ行くのか。"
		],
		"chinese": [
			"通讯中断，雪原将我彻底孤立。",
			"陌生人的帮助是甜蜜的，但他的眼神却充满了深深的怀疑。",
			"他低语道，一个未知的“系统”操纵着一切。",
			"深沉的愤怒汹涌而至。我将去往何处？"
		],
		"french": [
			"Communications coupées. Le champ de neige, une isolation sans fin.",
			"L'aide de l'étranger était douce, mais ses yeux trahissaient une profonde suspicion.",
			"Il murmura qu'un « Système » inconnu contrôlait tout.",
			"Une colère plus profonde montait. Où vais-je ?"
		],
		"spanish": [
			"Comunicaciones perdidas. El campo de nieve, un aislamiento interminable.",
			"La ayuda del extraño fue dulce, pero sus ojos albergaban una profunda sospecha.",
			"Susurró que un 'Sistema' desconocido controlaba todo.",
			"Una rabia más profunda brotaba. ¿Adónde voy?"
		],
		"vietnamese": [
			"Mất liên lạc. Cánh đồng tuyết, sự cô lập vô tận.",
			"Sự giúp đỡ của người lạ thật ngọt ngào, nhưng ánh mắt anh ta đầy nghi ngờ.",
			"Anh ta thì thầm rằng một 'Hệ thống' không rõ đang điều khiển mọi thứ.",
			"Một cơn giận sâu sắc trỗi dậy. Tôi đang đi đâu?"
		],
		"thai": [
			"การสื่อสารขาดหายไป ทุ่งหิมะกักขังฉันไว้ไม่สิ้นสุด",
			"ความช่วยเหลือจากคนแปลกหน้าช่างหอมหวาน แต่ดวงตาของเขากลับเต็มไปด้วยความสงสัยอย่างลึกซึ้ง",
			"เขากระซิบว่า 'ระบบ' ที่ไม่รู้จักควบคุมทุกสิ่ง",
			"ความโกรธที่ลึกซึ้งยิ่งขึ้นปะทุขึ้น ฉันกำลังจะไปไหน?"
		],
		"hindi": [
			"संचार टूट गया। बर्फ़ीला मैदान, एक अंतहीन एकांत।",
			"अजनबी की मदद मीठी थी, लेकिन उसकी आँखों में गहरा संदेह था।",
			"उसने फुसफुसाया कि एक अज्ञात 'सिस्टम' सब कुछ नियंत्रित करता है।",
			"एक गहरा क्रोध उमड़ आया। मैं कहाँ जा रहा हूँ?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "통신이 완전히 끊겼어. 여긴… 어디지?",
						"english": "Comms are completely cut off. Where... am I?",
						"japanese": "通信が完全に途絶えた。ここは…どこだ？",
						"chinese": "通讯完全中断了。这里…是哪里？",
						"french": "Les communications sont totalement coupées. Où... suis-je ?",
						"spanish": "Las comunicaciones están completamente cortadas. ¿Dónde... estoy?",
						"vietnamese": "Liên lạc bị cắt hoàn toàn. Đây... là đâu?",
						"thai": "การสื่อสารขาดหายไปโดยสิ้นเชิง ที่นี่...ที่ไหนกัน?",
						"hindi": "संचार पूरी तरह से कट गया है। मैं... कहाँ हूँ?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "frost",
					"action": "enter"
				},
				{
					"speaker": "frost",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길을 잃었나? 도와줄 수 있어.",
						"english": "Lost your way? I can help.",
						"japanese": "道に迷ったのか？手伝ってやれる。",
						"chinese": "迷路了吗？我可以帮你。",
						"french": "Perdu votre chemin ? Je peux vous aider.",
						"spanish": "¿Perdido? Puedo ayudarte.",
						"vietnamese": "Lạc đường à? Tôi có thể giúp.",
						"thai": "หลงทางเหรอ? ฉันช่วยได้นะ",
						"hindi": "रास्ता भटक गए? मैं मदद कर सकता हूँ।"
					}
				},
				{
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "You... who are you?",
						"japanese": "あなたは…誰？",
						"chinese": "你…是谁？",
						"french": "Vous... qui êtes-vous ?",
						"spanish": "Usted... ¿quién es?",
						"vietnamese": "Anh... là ai?",
						"thai": "คุณ...เป็นใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "서리라고 해. 이 혹독한 설원에서 살아남으려면… 의지 이상이 필요하지.",
						"english": "I'm Seori. To survive this harsh snowfield... you'll need more than just will.",
						"japanese": "セオリだ。この過酷な雪原で生き残るには…意志だけでは足りない。",
						"chinese": "我叫徐梨。要在这严酷的雪原中生存下来…光有意志是不够的。",
						"french": "Je suis Seori. Pour survivre dans cette toundra glaciale... il vous faudra plus que de la simple volonté.",
						"spanish": "Soy Seori. Para sobrevivir en este duro campo de nieve... necesitarás más que solo voluntad.",
						"vietnamese": "Tôi là Seori. Để sống sót trên cánh đồng tuyết khắc nghiệt này... bạn sẽ cần nhiều hơn là ý chí.",
						"thai": "ฉันชื่อซอริ การจะเอาชีวิตรอดในทุ่งหิมะอันโหดร้ายนี้... ต้องมีมากกว่าแค่ความมุ่งมั่น",
						"hindi": "मैं सियोरी हूँ। इस कठोर बर्फ़ीले मैदान में जीवित रहने के लिए... केवल इच्छाशक्ति से ज़्यादा चाहिए।"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "...무슨 의미로 들려.",
						"english": "...Sounds ominous.",
						"japanese": "…不吉な響きだ。",
						"chinese": "……听起来不祥。",
						"french": "...Ça sonne inquiétant.",
						"spanish": "...Suena ominoso.",
						"vietnamese": "...Nghe có vẻ đáng ngại.",
						"thai": "...ฟังดูไม่ดีเลย",
						"hindi": "...कुछ बुरा लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "길은 점점 더 미궁으로 빠질 거야. 이건 자연의 섭리가 아니야.",
						"english": "The path will lead deeper into the labyrinth. This is not nature's will.",
						"japanese": "道はますます迷宮へと深く誘うだろう。これは自然の摂理ではない。",
						"chinese": "道路将越来越深入迷宫。这不是自然的法则。",
						"french": "Le chemin mènera plus profondément dans le labyrinthe. Ce n'est pas la volonté de la nature.",
						"spanish": "El camino se adentrará más en el laberinto. Esto no es la voluntad de la naturaleza.",
						"vietnamese": "Con đường sẽ dẫn sâu hơn vào mê cung. Đây không phải là ý muốn của tự nhiên.",
						"thai": "เส้นทางจะนำลึกเข้าไปในเขาวงกต นี่ไม่ใช่เจตจำนงของธรรมชาติ",
						"hindi": "रास्ता भूलभुलैया में और गहरा जाएगा। यह प्रकृति की इच्छा नहीं है।"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼… 뭐죠?",
						"english": "Then... what is it?",
						"japanese": "では…何ですか？",
						"chinese": "那…是什么？",
						"french": "Alors... qu'est-ce que c'est ?",
						"spanish": "¿Entonces... qué es?",
						"vietnamese": "Vậy... là gì?",
						"thai": "แล้ว... มันคืออะไร?",
						"hindi": "तो... यह क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "base",
					"content": {
						"korean": "누군가, 혹은 '시스템'이 이 모든 걸 조종하고 있어.",
						"english": "Someone, or 'the system,' is controlling all of this.",
						"japanese": "誰か、あるいは『システム』が、この全てを操っている。",
						"chinese": "有人，或者说‘系统’，在操控这一切。",
						"french": "Quelqu'un, ou le 'système', contrôle tout cela.",
						"spanish": "Alguien, o el 'sistema', está controlando todo esto.",
						"vietnamese": "Ai đó, hoặc 'hệ thống', đang điều khiển tất cả chuyện này.",
						"thai": "ใครบางคน หรือ 'ระบบ' กำลังควบคุมทั้งหมดนี้",
						"hindi": "कोई, या 'सिस्टम', यह सब नियंत्रित कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "시스템…?",
						"english": "System...?",
						"japanese": "システム…？",
						"chinese": "系统…？",
						"french": "Le système... ?",
						"spanish": "¿Sistema...?",
						"vietnamese": "Hệ thống...?",
						"thai": "ระบบ...?",
						"hindi": "सिस्टम...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "frost",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그리고 네 동료들도… 믿을 수 있을까?",
						"english": "And your comrades... can they be trusted?",
						"japanese": "そして君の仲間たちも…信じられるのか？",
						"chinese": "还有你的同伴们…能相信吗？",
						"french": "Et tes camarades... peut-on leur faire confiance ?",
						"spanish": "Y tus compañeros... ¿se puede confiar en ellos?",
						"vietnamese": "Và đồng đội của cậu... có đáng tin không?",
						"thai": "และสหายของเจ้า... เชื่อใจได้หรือ?",
						"hindi": "और तुम्हारे साथी भी... क्या उन पर भरोसा किया जा सकता है?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "지금 무슨 말을 하는 거야?",
						"english": "What are you talking about?",
						"japanese": "今、何を言っているんだ？",
						"chinese": "你现在在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Cậu đang nói cái gì vậy?",
						"thai": "ตอนนี้เจ้ากำลังพูดอะไร?",
						"hindi": "तुम अभी क्या कह रहे हो?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "frost"
				},
				{
					"content": {
						"korean": "저들을 봐. 뭔가 숨기는 게 느껴지지 않아?",
						"english": "Look at them. Don't you feel like they're hiding something?",
						"japanese": "あれらを見てみろ。何か隠していると感じないか？",
						"chinese": "看看他们。你不觉得他们在隐瞒什么吗？",
						"french": "Regarde-les. Tu ne sens pas qu'ils cachent quelque chose ?",
						"spanish": "Míralos. ¿No sientes que esconden algo?",
						"vietnamese": "Nhìn họ kìa. Cậu không thấy họ đang giấu giếm điều gì sao?",
						"thai": "ดูพวกมันสิ. ไม่รู้สึกว่าพวกมันซ่อนอะไรบางอย่างอยู่หรือ?",
						"hindi": "उन्हें देखो। क्या तुम्हें नहीं लगता कि वे कुछ छिपा रहे हैं?"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야… 그럴 리 없어.",
						"english": "No... that can't be.",
						"japanese": "違う…そんなはずはない。",
						"chinese": "不…不可能。",
						"french": "Non... ce n'est pas possible.",
						"spanish": "No... eso no puede ser.",
						"vietnamese": "Không... không thể nào.",
						"thai": "ไม่... ไม่มีทางเป็นไปได้",
						"hindi": "नहीं... ऐसा नहीं हो सकता।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 설원은 환각을 보여줘. 믿었던 것이 가장 큰 절망이 될 수도 있어.",
						"english": "This snowfield shows illusions. What you believed could become your greatest despair.",
						"japanese": "この雪原は幻覚を見せる。信じていたものが最大の絶望となることもある。",
						"chinese": "这片雪原会展示幻觉。你所相信的，可能成为你最大的绝望。",
						"french": "Ce champ de neige montre des illusions. Ce que tu croyais pourrait devenir ton plus grand désespoir.",
						"spanish": "Este campo de nieve muestra ilusiones. Lo que creíste podría convertirse en tu mayor desesperación.",
						"vietnamese": "Cánh đồng tuyết này cho thấy ảo ảnh. Điều cậu tin tưởng có thể trở thành sự tuyệt vọng lớn nhất của cậu.",
						"thai": "ทุ่งหิมะนี้แสดงภาพลวงตา สิ่งที่เจ้าเชื่ออาจกลายเป็นความสิ้นหวังที่ยิ่งใหญ่ที่สุดของเจ้า",
						"hindi": "यह बर्फीला मैदान भ्रम दिखाता है। जो तुमने माना, वह तुम्हारी सबसे बड़ी निराशा बन सकता है।"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥쳐! 날 혼란스럽게 하지 마!",
						"english": "Shut up! Don't confuse me!",
						"japanese": "黙れ！私を混乱させるな！",
						"chinese": "闭嘴！别让我困惑！",
						"french": "Tais-toi ! Ne me trouble pas !",
						"spanish": "¡Cállate! ¡No me confundas!",
						"vietnamese": "Im đi! Đừng làm tôi bối rối!",
						"thai": "หุบปาก! อย่าทำให้ข้าสับสน!",
						"hindi": "चुप रहो! मुझे भ्रमित मत करो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "분노가 너를 움직이는군. 하지만 분노는 진실을 가리지.",
						"english": "Anger drives you. But anger blinds the truth.",
						"japanese": "怒りが君を突き動かす。だが怒りは真実を覆い隠す。",
						"chinese": "愤怒驱使着你。但愤怒会蒙蔽真相。",
						"french": "La colère te pousse. Mais la colère aveugle la vérité.",
						"spanish": "La ira te mueve. Pero la ira ciega la verdad.",
						"vietnamese": "Cơn giận đang điều khiển cậu. Nhưng cơn giận che mờ sự thật.",
						"thai": "ความโกรธขับเคลื่อนเจ้า แต่ความโกรธบดบังความจริง",
						"hindi": "क्रोध तुम्हें चलाता है। लेकिन क्रोध सच्चाई को अंधा कर देता है।"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "frost",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "넌 이제 혼자야. 누가 진짜 너의 편인지 알 수 없을 거야.",
						"english": "You're alone now. You won't know who's truly on your side.",
						"japanese": "もう独りだ。誰が本当の味方か、分からなくなるだろう。",
						"chinese": "你现在是孤身一人了。你无法分辨谁才是你真正的盟友。",
						"french": "Tu es seul maintenant. Tu ne sauras pas qui est vraiment de ton côté.",
						"spanish": "Ahora estás solo. No sabrás quién está realmente de tu lado.",
						"vietnamese": "Giờ ngươi đơn độc rồi. Ngươi sẽ không biết ai thật sự đứng về phía mình đâu.",
						"thai": "ตอนนี้เจ้าโดดเดี่ยวแล้ว เจ้าจะไม่รู้เลยว่าใครคือพวกเดียวกับเจ้าจริงๆ",
						"hindi": "अब तुम अकेले हो। तुम्हें नहीं पता चलेगा कि तुम्हारा असली साथी कौन है।"
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…젠장, 내가 뭘 믿어야 해?",
						"english": "...Damn it, what am I supposed to believe?",
						"japanese": "…くそ、何を信じればいいんだ？",
						"chinese": "……该死，我该相信什么？",
						"french": "...Mince, que dois-je croire ?",
						"spanish": "...Maldita sea, ¿qué debo creer?",
						"vietnamese": "...Chết tiệt, mình phải tin vào điều gì đây?",
						"thai": "...บ้าจริง, ฉันควรจะเชื่ออะไรดี?",
						"hindi": "...धिक्कार है, मुझे क्या मानना चाहिए?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "base",
					"content": {
						"korean": "'시스템'은 네가 모든 것을 의심하게 만들어.",
						"english": "The 'System' makes you doubt everything.",
						"japanese": "『システム』はお前が全てを疑うように仕向ける。",
						"chinese": "‘系统’让你怀疑一切。",
						"french": "Le 'Système' te pousse à tout remettre en question.",
						"spanish": "El 'Sistema' te hace dudar de todo.",
						"vietnamese": "'Hệ thống' khiến ngươi nghi ngờ mọi thứ.",
						"thai": "'ระบบ' ทำให้เจ้าสงสัยทุกสิ่ง",
						"hindi": "'सिस्टम' तुम्हें सब कुछ पर शक करने को मजबूर करता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 그 시스템 짓이라고?",
						"english": "All of this... is the System's doing?",
						"japanese": "これ全部…あのシステムの仕業だと？",
						"chinese": "这一切……都是那个系统搞的鬼？",
						"french": "Tout cela... c'est l'œuvre du Système ?",
						"spanish": "¿Todo esto... es obra del Sistema?",
						"vietnamese": "Tất cả những chuyện này... là do cái Hệ thống đó sao?",
						"thai": "ทั้งหมดนี้... เป็นฝีมือของระบบนั่นเหรอ?",
						"hindi": "यह सब... उस सिस्टम का काम है?"
					}
				},
				{
					"speaker": "frost",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 놈들은 네 동료들의 마음까지 조종할 수 있어.",
						"english": "Yes. They can even control the minds of your comrades.",
						"japanese": "ああ。奴らは、お前の仲間たちの心まで操れる。",
						"chinese": "没错。他们甚至可以操纵你同伴的心灵。",
						"french": "Oui. Ils peuvent même contrôler l'esprit de tes compagnons.",
						"spanish": "Sí. Pueden incluso controlar las mentes de tus compañeros.",
						"vietnamese": "Đúng vậy. Bọn chúng còn có thể điều khiển tâm trí đồng đội của ngươi nữa.",
						"thai": "ใช่แล้ว พวกมันสามารถควบคุมแม้กระทั่งจิตใจของสหายของเจ้าได้",
						"hindi": "हाँ। वे तुम्हारे साथियों के दिमाग को भी नियंत्रित कर सकते हैं।"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼…!",
						"english": "Unbelievable...!",
						"japanese": "まさか…！",
						"chinese": "不可能……！",
						"french": "Impossible... !",
						"spanish": "¡Imposible...!",
						"vietnamese": "Không thể nào...!",
						"thai": "ไม่จริงน่า...!",
						"hindi": "यह नहीं हो सकता...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희는 그저 길을 잃을 뿐.",
						"english": "Insignificant fools. You will only lose your way.",
						"japanese": "愚かな者たちめ。お前たちはただ道に迷うだけだ。",
						"chinese": "渺小的东西。你们只会迷失方向。",
						"french": "Petits êtres insignifiants. Vous ne ferez que vous perdre.",
						"spanish": "Estúpidos insignificantes. Solo os perderéis.",
						"vietnamese": "Những kẻ vô dụng. Các ngươi chỉ lạc lối mà thôi.",
						"thai": "พวกไร้ค่า. พวกเจ้าแค่จะหลงทางเท่านั้น.",
						"hindi": "तुच्छ प्राणी। तुम बस रास्ता भटक जाओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わっていない。諦めない。",
						"chinese": "……还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc. Ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ. ฉันไม่ยอมแพ้.",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "분노가 너를 움직이는군. 그 분노가 '시스템'을 부술 수 있을까?",
						"english": "Rage drives you. Can that rage truly shatter the 'System'?",
						"japanese": "怒りがお前を突き動かすか。その怒りで「システム」を打ち破れるとでも？",
						"chinese": "愤怒在驱使你。那份愤怒能摧毁“系统”吗？",
						"french": "La fureur t'anime. Cette fureur peut-elle vraiment briser le « Système » ?",
						"spanish": "La ira te impulsa. ¿Podrá esa ira destruir el 'Sistema'?",
						"vietnamese": "Cơn thịnh nộ đang thúc đẩy ngươi. Liệu cơn thịnh nộ đó có thể phá vỡ \"Hệ Thống\" không?",
						"thai": "ความโกรธแค้นขับเคลื่อนเจ้า. ความโกรธนั้นจะทำลาย 'ระบบ' ได้จริงหรือ?",
						"hindi": "क्रोध तुम्हें चला रहा है। क्या वह क्रोध 'सिस्टम' को तोड़ पाएगा?"
					},
					"speaker": "frost",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 이것은 시작에 불과해. 너의 분노는… 결국 시스템을 위한 것.",
						"english": "Futile resistance... This is just the beginning. Your rage... ultimately serves the System.",
						"japanese": "無駄な抵抗だ… これは始まりに過ぎない。お前の怒りも… 結局はシステムのためだ。",
						"chinese": "徒劳的抵抗……这只是开始。你的愤怒……终将为系统所用。",
						"french": "Résistance futile... Ce n'est qu'un début. Votre rage... ne fait que servir le Système.",
						"spanish": "Resistencia inútil... Esto es solo el principio. Vuestra ira... al final, sirve al Sistema.",
						"vietnamese": "Sự kháng cự vô ích... Đây chỉ là khởi đầu thôi. Cơn giận của ngươi... cuối cùng cũng chỉ vì Hệ Thống.",
						"thai": "การต่อต้านไร้ค่า... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น. ความโกรธของเจ้า... ท้ายที่สุดก็เพื่อระบบ.",
						"hindi": "तुच्छ प्रतिरोध... यह तो बस शुरुआत है। तुम्हारा क्रोध... अंततः सिस्टम की ही सेवा करेगा।"
					}
				},
				{
					"content": {
						"korean": "아니… 난 이 모든 걸 끝낼 거야.",
						"english": "No... I'll end all of this.",
						"japanese": "いいえ… 私がこの全てを終わらせる。",
						"chinese": "不……我将结束这一切。",
						"french": "Non... Je vais mettre fin à tout ça.",
						"spanish": "No... Acabaré con todo esto.",
						"vietnamese": "Không... Ta sẽ chấm dứt tất cả những điều này.",
						"thai": "ไม่... ฉันจะยุติเรื่องทั้งหมดนี้.",
						"hindi": "नहीं... मैं यह सब खत्म कर दूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "frost",
					"action": "enter"
				},
				{
					"content": {
						"korean": "잘했어. 하지만 '시스템'은… 생각보다 거대해.",
						"english": "Well done. But the 'System'... is far vaster than you think.",
						"japanese": "よくやった。だが「システム」は… お前が思うより遥かに巨大だ。",
						"chinese": "做得好。但是“系统”……比你想象的更庞大。",
						"french": "Bien joué. Mais le « Système »... est bien plus vaste que tu ne le penses.",
						"spanish": "Bien hecho. Pero el 'Sistema'... es mucho más grande de lo que crees.",
						"vietnamese": "Làm tốt lắm. Nhưng \"Hệ Thống\"... lại vĩ đại hơn ngươi nghĩ nhiều.",
						"thai": "ทำได้ดี. แต่ 'ระบบ'... มันใหญ่โตกว่าที่คิด.",
						"hindi": "शाबाश। लेकिन 'सिस्टम'... तुम्हारी सोच से कहीं ज़्यादा विशाल है।"
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도… 멈추지 않아.",
						"english": "Even so... I won't stop.",
						"japanese": "それでも… 私は止まらない。",
						"chinese": "即使如此……我也不会停止。",
						"french": "Malgré tout... Je ne m'arrêterai pas.",
						"spanish": "Aún así... No me detendré.",
						"vietnamese": "Dù vậy... ta vẫn không dừng lại.",
						"thai": "ถึงอย่างนั้น... ฉันก็ไม่หยุด.",
						"hindi": "फिर भी... मैं रुकूंगा नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "승리는 허망했다. 의심은 더욱 깊어지고, 길은 다시 미궁으로 향했다.",
						"english": "Victory was fleeting. Doubt deepened, and the path led back into the labyrinth.",
						"japanese": "勝利は虚しかった。疑念は深まり、道は再び迷宮へと向かった。",
						"chinese": "胜利是虚妄的。疑虑更深，道路再次指向迷宫。",
						"french": "La victoire fut vaine. Le doute s'intensifia, et le chemin mena à nouveau au labyrinthe.",
						"spanish": "La victoria fue vana. La duda se hizo más profunda, y el camino regresó al laberinto.",
						"vietnamese": "Chiến thắng thật phù du. Nghi ngờ càng sâu sắc, con đường lại dẫn vào mê cung.",
						"thai": "ชัยชนะว่างเปล่า. ความสงสัยยิ่งลึกซึ้ง, เส้นทางหวนคืนสู่เขาวงกตอีกครั้ง.",
						"hindi": "जीत व्यर्थ थी। संदेह गहरा होता गया, और राह फिर से भूलभुलैया में जा मिली।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "저기 보이는 게 '시스템'의 수하야. 놈을 처치해야 해.",
						"english": "That's a minion of the 'System' over there. We have to take it down.",
						"japanese": "あれが『システム』の手下だ。奴を倒せ。",
						"chinese": "那边那个是‘系统’的爪牙。我们必须解决掉他。",
						"french": "Ce que tu vois là-bas est un subordonné du 'Système'. Nous devons le vaincre.",
						"spanish": "Eso de ahí es un secuaz del 'Sistema'. Tenemos que acabar con él.",
						"vietnamese": "Kẻ mà ngươi thấy đằng kia là tay sai của 'Hệ thống'. Phải tiêu diệt nó.",
						"thai": "นั่นคือลูกสมุนของ 'ระบบ' เราต้องกำจัดมัน",
						"hindi": "वह जो दिख रहा है, वह 'सिस्टम' का गुर्गा है। हमें उसे खत्म करना होगा।"
					},
					"type": "speech",
					"speaker": "frost",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저게… 진짜 시스템의 일부라고?",
						"english": "That... is really part of the System?",
						"japanese": "あれが…本当にシステムの一部なのか？",
						"chinese": "那个……真的是系统的一部分吗？",
						"french": "Ça... c'est vraiment une partie du Système ?",
						"spanish": "¿Eso... es realmente parte del Sistema?",
						"vietnamese": "Cái đó... thật sự là một phần của Hệ thống sao?",
						"thai": "นั่น... เป็นส่วนหนึ่งของระบบจริงๆ เหรอ?",
						"hindi": "वह... सच में सिस्टम का हिस्सा है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "침입자 주제에… 감히 여기까지 오는군.",
						"english": "An intruder, of all things... daring to come this far.",
						"japanese": "侵入者の分際で…よくもここまで来たな。",
						"chinese": "区区一个入侵者……竟敢来到这里。",
						"french": "Un intrus, de tous les êtres... osant venir jusqu'ici.",
						"spanish": "Un intruso, nada menos... atreviéndose a llegar tan lejos.",
						"vietnamese": "Thứ xâm nhập đó... dám tới tận đây sao.",
						"thai": "แค่ผู้บุกรุก... กล้าดียังไงถึงมาได้ไกลขนาดนี้",
						"hindi": "एक घुसपैठिया, और यहाँ तक पहुँचने की हिम्मत करता है।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 우리를 조종한 거냐!",
						"english": "Did you manipulate us?!",
						"japanese": "お前が俺たちを操ったのか！",
						"chinese": "是你操控了我们吗？！",
						"french": "C'est toi qui nous as manipulés ?!",
						"spanish": "¡¿Fuiste tú quien nos manipuló?!",
						"vietnamese": "Ngươi đã điều khiển bọn ta ư?!",
						"thai": "แกเป็นคนบงการพวกเราเหรอ!",
						"hindi": "क्या तुमने हमें नियंत्रित किया था?!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "흐흐… 너희의 분노가 곧 우리의 힘.",
						"english": "Heh heh... Your rage is our power.",
						"japanese": "フフ… お前たちの怒りが、我らの力となる。",
						"chinese": "呵呵……你们的愤怒，将成为我们的力量。",
						"french": "Huhu... Votre fureur est notre force.",
						"spanish": "Jeje... Vuestra ira es nuestro poder.",
						"vietnamese": "Hừm hừm... Cơn thịnh nộ của các ngươi, chính là sức mạnh của chúng ta.",
						"thai": "ฮึๆ... ความโกรธแค้นของเจ้าคือพลังของเรา.",
						"hindi": "हँहँ... तुम्हारा क्रोध ही हमारी शक्ति है।"
					}
				},
				{
					"speaker": "frost",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			]
		}
	]
} as const;
