export const scenario_desert_mirage_chef_05 = {
	"scenario_id": "desert_mirage_chef_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"Sahar": {
			"monster_id": "mon_3b008714-9abd-4927-88bb-6d8a32ec8805",
			"name": {
				"korean": "사하르",
				"english": "Sahar",
				"japanese": "サハル",
				"chinese": "萨哈尔",
				"french": "Sahar",
				"spanish": "Sahar",
				"vietnamese": "Sahar",
				"thai": "ซาฮาร์",
				"hindi": "साहर"
			},
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/94c19f1a-b435-427a-01bf-5e87c55a0200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1d10bedd-8042-4ef7-47c6-c2d6ac0e5100/public"
		},
		"Zafir": {
			"name": {
				"korean": "자피르",
				"english": "Zafir",
				"japanese": "ザフィール",
				"chinese": "扎菲尔",
				"french": "Zafir",
				"spanish": "Zafir",
				"vietnamese": "Zafir",
				"thai": "ซาฟีร์",
				"hindi": "ज़ाफ़िर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/935b3bcc-634c-4df6-af5d-06ca42940e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/88c657de-9079-41e1-e3ab-05efa570ae00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막의 연회. 그 황홀한 환상은 굶주림을 잊게 했다.",
			"그러나, 이 달콤한 속삭임 뒤에는 잔혹한 진실이 숨어 있었다.",
			"이제, 환상의 막이 걷히고 — 모든 것이 드러난다."
		],
		"english": [
			"The desert feast. Its enchanting illusion made us forget our hunger.",
			"But behind this sweet whisper, a cruel truth lay hidden.",
			"Now, the curtain of illusion lifts — and all is revealed."
		],
		"japanese": [
			"砂漠の宴。その恍惚たる幻想は、飢えを忘れさせた。",
			"しかし、この甘い囁きの裏には、残酷な真実が隠されていた。",
			"今、幻想の幕が上がり — 全てが明らかになる。"
		],
		"chinese": [
			"沙漠的盛宴。那令人陶醉的幻想，让人忘记了饥饿。",
			"然而，在这甜蜜的低语背后，隐藏着残酷的真相。",
			"如今，幻象的帷幕揭开——一切都将显露。"
		],
		"french": [
			"Le festin du désert. Cette illusion enivrante nous a fait oublier la faim.",
			"Cependant, derrière ce doux murmure se cachait une cruelle vérité.",
			"Maintenant, le rideau de l'illusion se lève — et tout est révélé."
		],
		"spanish": [
			"El festín del desierto. Esa deslumbrante ilusión nos hizo olvidar el hambre.",
			"Sin embargo, detrás de este dulce susurro se escondía una cruel verdad.",
			"Ahora, el telón de la ilusión se levanta — y todo se revela."
		],
		"vietnamese": [
			"Yến tiệc sa mạc. Ảo ảnh mê hoặc đó đã khiến chúng tôi quên đi cơn đói.",
			"Tuy nhiên, đằng sau lời thì thầm ngọt ngào này, một sự thật tàn khốc đã ẩn giấu.",
			"Giờ đây, bức màn ảo ảnh vén lên — và mọi thứ đều lộ rõ."
		],
		"thai": [
			"งานเลี้ยงกลางทะเลทราย ภาพลวงตาอันน่าหลงใหลทำให้เราลืมความหิว",
			"ทว่า เบื้องหลังเสียงกระซิบอันหอมหวานนี้ กลับซ่อนความจริงอันโหดร้ายไว้",
			"บัดนี้ ม่านแห่งภาพลวงตาได้เปิดออก — และทุกสิ่งก็ถูกเปิดเผย"
		],
		"hindi": [
			"रेगिस्तान का दावत। उस मनमोहक भ्रम ने हमें भूख भुला दी।",
			"लेकिन इस मीठी फुसफुसाहट के पीछे, एक क्रूर सच्चाई छिपी थी।",
			"अब, भ्रम का परदा उठता है — और सब कुछ प्रकट होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "음식이… 모래로 변하고 있어!",
						"english": "The food... it's turning into sand!",
						"japanese": "食べ物が…砂に変わっていく！",
						"chinese": "食物…正在变成沙子！",
						"french": "La nourriture… elle se transforme en sable !",
						"spanish": "¡La comida… se está convirtiendo en arena!",
						"vietnamese": "Đồ ăn... đang biến thành cát!",
						"thai": "อาหาร... กำลังกลายเป็นทราย!",
						"hindi": "खाना... रेत में बदल रहा है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "공기 중의 향신료가 더욱 짙어졌다. 환상이 현실을 침범한다.",
						"english": "The spices in the air grew thicker. Illusion invades reality.",
						"japanese": "空気中の香辛料がさらに濃くなった。幻想が現実を侵食する。",
						"chinese": "空气中的香料味道更浓了。幻象正在侵蚀现实。",
						"french": "Les épices dans l'air s'épaissirent. L'illusion envahit la réalité.",
						"spanish": "Las especias en el aire se hicieron más densas. La ilusión invade la realidad.",
						"vietnamese": "Gia vị trong không khí càng trở nên đậm đặc. Ảo ảnh xâm chiếm thực tại.",
						"thai": "เครื่องเทศในอากาศเข้มข้นขึ้น ภาพลวงตาเข้าครอบงำความเป็นจริง",
						"hindi": "हवा में मसालों की गंध और तेज हो गई। भ्रम वास्तविकता पर हावी हो रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"speaker": "Zafir",
					"action": "enter"
				},
				{
					"speaker": "Zafir",
					"content": {
						"korean": "이게… 다 가짜였어?!",
						"english": "This… was all fake?!",
						"japanese": "「これ…全部偽物だったの？！」",
						"chinese": "“这…都是假的？！”",
						"french": "« Tout ça… c'était faux ?! »",
						"spanish": "« ¿Todo esto… era falso?! »",
						"vietnamese": "“Cái này… tất cả là giả sao?!”",
						"thai": "“นี่มัน… ทั้งหมดเป็นของปลอมเหรอ?!”",
						"hindi": "“यह… सब कुछ नकली था?!”"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "배고픔을 없애는 방법은… 아주 간단하거든.",
						"english": "The way to end hunger… is quite simple.",
						"japanese": "「空腹をなくす方法は…いたって簡単だよ。」",
						"chinese": "“消除饥饿的方法…其实很简单。”",
						"french": "« La façon de mettre fin à la faim… est très simple. »",
						"spanish": "« La forma de acabar con el hambre… es muy sencilla. »",
						"vietnamese": "“Cách để chấm dứt cơn đói… rất đơn giản.”",
						"thai": "“วิธีที่จะกำจัดความหิว… มันง่ายมากเลยนะ.”",
						"hindi": "“भूख मिटाने का तरीका… बहुत आसान है।”"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "다른 손님들… 다들 어디 간 거야?",
						"english": "The other guests… where did everyone go?",
						"japanese": "「他の客は…みんなどこに行ったんだ？」",
						"chinese": "“其他的客人…都去哪了？”",
						"french": "« Les autres invités… où sont-ils tous allés ? »",
						"spanish": "« Los otros invitados… ¿dónde se fueron todos? »",
						"vietnamese": "“Những vị khách khác… tất cả đã đi đâu rồi?”",
						"thai": "“แขกคนอื่นๆ… หายไปไหนกันหมดแล้ว?”",
						"hindi": "“बाकी मेहमान… सब कहाँ गए?”"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "Zafir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그들은… 처음부터 없었어… 우리가 혼자였던 거야!",
						"english": "They… were never there to begin with… We were alone!",
						"japanese": "「彼らは…最初からいなかったんだ…私たちは一人だったんだ！」",
						"chinese": "“他们…从一开始就不存在…我们一直都是孤独的！”",
						"french": "« Ils… n'ont jamais été là… Nous étions seuls ! »",
						"spanish": "« Ellos… nunca estuvieron ahí… ¡Estábamos solos! »",
						"vietnamese": "“Họ… chưa từng tồn tại ngay từ đầu… Chúng ta đã cô đơn!”",
						"thai": "“พวกเขา… ไม่เคยมีอยู่ตั้งแต่แรก… เราอยู่คนเดียว!”",
						"hindi": "“वे… शुरू से ही नहीं थे… हम अकेले थे!”"
					},
					"speaker": "Zafir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 너희를 위한 선물이었다. 고통 없는 연회.",
						"english": "This was a gift for you. A feast without pain.",
						"japanese": "「これはお前たちへの贈り物だった。苦痛なき饗宴。」",
						"chinese": "“这是给你们的礼物。一场没有痛苦的盛宴。”",
						"french": "« C'était un cadeau pour vous. Un festin sans douleur. »",
						"spanish": "« Esto era un regalo para vosotros. Un banquete sin dolor. »",
						"vietnamese": "“Đây là một món quà dành cho các ngươi. Một bữa tiệc không đau khổ.”",
						"thai": "“นี่คือของขวัญสำหรับพวกเจ้า งานเลี้ยงที่ไร้ซึ่งความเจ็บปวด.”",
						"hindi": "“यह तुम्हारे लिए एक उपहार था। दर्द रहित दावत।”"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "선물? 이건 기만이야!",
						"english": "A gift? This is deception!",
						"japanese": "「贈り物？これは欺瞞だ！」",
						"chinese": "“礼物？这分明是欺骗！”",
						"french": "« Un cadeau ? C'est une tromperie ! »",
						"spanish": "« ¿Un regalo? ¡Esto es un engaño! »",
						"vietnamese": "“Quà? Đây là sự lừa dối!”",
						"thai": "“ของขวัญ? นี่มันการหลอกลวง!”",
						"hindi": "“उपहार? यह धोखा है!”"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 연회장. 바닥에 뒹구는 부서진 접시들.",
						"english": "An old banquet hall. Broken dishes scattered on the floor.",
						"japanese": "「古い宴会場。床に散らばる割れた皿たち。」",
						"chinese": "“古老的宴会厅。破碎的盘子散落在地板上。”",
						"french": "« Une vieille salle de banquet. Des assiettes cassées jonchent le sol. »",
						"spanish": "« Un antiguo salón de banquetes. Platos rotos esparcidos por el suelo. »",
						"vietnamese": "“Một phòng tiệc cũ kỹ. Những chiếc đĩa vỡ nằm lăn lóc trên sàn.”",
						"thai": "“ห้องจัดเลี้ยงเก่าแก่ จานแตกเกลื่อนกลาดอยู่บนพื้น.”",
						"hindi": "“एक पुराना भोज हॉल। फर्श पर बिखरे टूटे हुए व्यंजन।”"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상에 갇힌 채… 영원히 죽어가는 거야?",
						"english": "Trapped in an illusion… dying forever?",
						"japanese": "「幻想に囚われたまま…永遠に死んでいくのか？」",
						"chinese": "“被困在幻象中…永远地死去吗？”",
						"french": "« Piégé dans une illusion… mourir pour toujours ? »",
						"spanish": "« ¿Atrapado en una ilusión… muriendo para siempre? »",
						"vietnamese": "“Bị mắc kẹt trong ảo ảnh… chết dần chết mòn mãi mãi sao?”",
						"thai": "“ติดอยู่ในภาพลวงตา… กำลังจะตายไปตลอดกาลงั้นเหรอ?”",
						"hindi": "“एक भ्रम में फँसा… हमेशा के लिए मर रहा हूँ?”"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "Zafir"
				},
				{
					"speaker": "Zafir",
					"emotion": "sad",
					"content": {
						"korean": "나는… 나는 뭘 믿었던 거지…?",
						"english": "What… what did I believe…?",
						"japanese": "「私は…私は何を信じていたんだ…？」",
						"chinese": "“我…我到底相信了什么…？”",
						"french": "« Qu'est-ce que… qu'est-ce que j'ai cru… ? »",
						"spanish": "« ¿Qué… qué es lo que creí…? »",
						"vietnamese": "“Tôi… tôi đã tin vào điều gì vậy…?”",
						"thai": "“ฉัน… ฉันเชื่ออะไรลงไปกันแน่…?”",
						"hindi": "“मैं… मैंने क्या विश्वास किया था…?”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 배고프지 않을 수 있었는데… 어리석은 인간들.",
						"english": "They could have been free from hunger forever… foolish humans.",
						"japanese": "「永遠に空腹を感じずにいられたのに…愚かな人間たち。」",
						"chinese": "“本可以永远不挨饿的…愚蠢的人类。”",
						"french": "« Ils auraient pu ne jamais avoir faim… humains stupides. »",
						"spanish": "« Podrían no haber tenido hambre nunca más… humanos estúpidos. »",
						"vietnamese": "“Có thể không bao giờ đói nữa… những con người ngu ngốc.”",
						"thai": "“น่าจะหลุดพ้นจากความหิวไปตลอดกาลแล้วแท้ๆ… มนุษย์ที่โง่เขลา.”",
						"hindi": "“वे हमेशा के लिए भूख से मुक्त हो सकते थे… मूर्ख इंसान।”"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이젠 끝내야 해. 이 거짓된 평화를!",
						"english": "This false peace must end!",
						"japanese": "この偽りの平和を、今終わらせなければ！",
						"chinese": "是时候结束了。这虚假的和平！",
						"french": "Il faut en finir. Cette fausse paix !",
						"spanish": "¡Debemos acabar con esta falsa paz!",
						"vietnamese": "Phải kết thúc ngay. Hòa bình giả dối này!",
						"thai": "ต้องจบเดี๋ยวนี้! สันติสุขจอมปลอมนี้!",
						"hindi": "अब इसे खत्म करना होगा। इस झूठी शांति को!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환각의 안개가 시야를 가린다. 하지만 탐험대는 멈추지 않는다.",
						"english": "A mist of illusion clouds their sight. Yet the expedition presses on.",
						"japanese": "幻覚の霧が視界を遮る。しかし、探検隊は止まらない。",
						"chinese": "幻象之雾遮蔽了视线。但探险队并未止步。",
						"french": "Un brouillard d'illusions voile leur vue. Pourtant, l'expédition continue.",
						"spanish": "Una niebla de ilusión nubla su vista. Pero la expedición no se detiene.",
						"vietnamese": "Màn sương ảo ảnh che khuất tầm nhìn. Nhưng đoàn thám hiểm không dừng lại.",
						"thai": "หมอกลวงตาบดบังทัศนียภาพ แต่คณะสำรวจไม่หยุดยั้ง",
						"hindi": "भ्रम का कोहरा दृष्टि को ढक लेता है। फिर भी अभियान जारी है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Zafir",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "Zafir",
					"content": {
						"korean": "이건… 현실이 아니야! 나는 속지 않아!",
						"english": "This isn't… reality! I won't be fooled!",
						"japanese": "これは…現実じゃない！私は騙されない！",
						"chinese": "这不是…现实！我不会被骗的！",
						"french": "Ce n'est pas… la réalité ! Je ne me laisserai pas tromper !",
						"spanish": "¡Esto no es… la realidad! ¡No me engañarás!",
						"vietnamese": "Đây không phải… hiện thực! Ta sẽ không bị lừa!",
						"thai": "นี่มัน… ไม่ใช่ความจริง! ฉันไม่หลงกลหรอก!",
						"hindi": "यह… हकीकत नहीं है! मैं मूर्ख नहीं बनूंगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직도… 깨닫지 못했구나. 진정한 안식을.",
						"english": "You still… haven't realized. True solace.",
						"japanese": "まだ…気づかないのか。真の安息を。",
						"chinese": "你还没…领悟到吗。真正的安宁。",
						"french": "Tu n'as toujours pas… compris. Le véritable repos.",
						"spanish": "Todavía… no has comprendido. El verdadero descanso.",
						"vietnamese": "Ngươi vẫn… chưa nhận ra à. Sự an nghỉ đích thực.",
						"thai": "ยัง… ไม่รู้ตัวสินะ ความสงบสุขที่แท้จริงน่ะ",
						"hindi": "तुम अभी भी… नहीं समझे। सच्ची शांति।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 환상의 심장. 모든 것을 조종하던 자가 모습을 드러냈다.",
						"english": "Finally, the Heart of Illusion. The one who manipulated everything reveals itself.",
						"japanese": "ついに、幻影の心臓。すべてを操っていた者が姿を現した。",
						"chinese": "终于，幻象之心。操纵一切者现身了。",
						"french": "Enfin, le Cœur de l'Illusion. Celui qui manipulait tout se révèle.",
						"spanish": "Finalmente, el Corazón de la Ilusión. El que manipulaba todo se ha revelado.",
						"vietnamese": "Cuối cùng, Trái tim Ảo ảnh. Kẻ thao túng mọi thứ đã lộ diện.",
						"thai": "ในที่สุด หัวใจแห่งภาพลวงตา ผู้บงการทุกสิ่งก็เผยโฉม",
						"hindi": "आखिरकार, भ्रम का हृदय। जिसने सब कुछ हेरफेर किया, वह प्रकट हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왜 여기까지 온 거야? 너희는 행복할 수 있었는데.",
						"english": "Why did you come all this way? You could have been happy.",
						"japanese": "なぜここまで来た？君たちは幸せになれたのに。",
						"chinese": "为什么来到这里？你们本可以幸福的。",
						"french": "Pourquoi êtes-vous venus jusqu'ici ? Vous auriez pu être heureux.",
						"spanish": "¿Por qué llegasteis hasta aquí? Pudisteis haber sido felices.",
						"vietnamese": "Tại sao lại đến tận đây? Các ngươi đã có thể hạnh phúc mà.",
						"thai": "ทำไมถึงมาไกลขนาดนี้? พวกเจ้ามีความสุขได้แท้ๆ",
						"hindi": "तुम यहाँ तक क्यों आए? तुम खुश रह सकते थे।"
					}
				},
				{
					"content": {
						"korean": "우린 행복을 택할 권리가 있어. 네가 정하는 게 아니야!",
						"english": "We have the right to choose happiness. It's not for you to decide!",
						"japanese": "私たちには幸せを選ぶ権利がある。お前が決めることじゃない！",
						"chinese": "我们有选择幸福的权利。不是你来决定的！",
						"french": "Nous avons le droit de choisir le bonheur. Ce n'est pas à toi de décider !",
						"spanish": "¡Tenemos derecho a elegir la felicidad! ¡No es algo que tú decidas!",
						"vietnamese": "Chúng ta có quyền chọn hạnh phúc. Không phải do ngươi quyết định!",
						"thai": "เรามีสิทธิ์เลือกความสุข ไม่ใช่แกที่จะตัดสินใจ!",
						"hindi": "हमें खुशी चुनने का अधिकार है। यह तुम तय नहीं करोगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "배고픔을 없애는 방법은 간단해. 배고픔이라는 개념을 없애면 되니까.",
						"english": "The way to eliminate hunger is simple: erase the concept of hunger itself.",
						"japanese": "空腹をなくす方法は簡単だ。空腹という概念をなくせばいい。",
						"chinese": "消除饥饿的方法很简单。只要消除饥饿这个概念就行了。",
						"french": "Le moyen d'éliminer la faim est simple : supprimer le concept de faim lui-même.",
						"spanish": "La forma de eliminar el hambre es sencilla: eliminar el concepto de hambre.",
						"vietnamese": "Cách loại bỏ cơn đói rất đơn giản. Chỉ cần loại bỏ khái niệm đói là được.",
						"thai": "วิธีขจัดความหิวโหยนั้นง่ายดาย เพียงแค่กำจัดแนวคิดเรื่องความหิวโหยออกไป",
						"hindi": "भूख मिटाने का तरीका आसान है। भूख की अवधारणा को ही मिटा दो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환상의 연회는 끝나지 않았다. 영원히.",
						"english": "The feast of illusion has not ended. Forever.",
						"japanese": "「幻想の宴は終わらない。永遠に。」",
						"chinese": "“幻象的盛宴永不结束。永远。”",
						"french": "« Le festin de l'illusion n'est pas terminé. Pour toujours. »",
						"spanish": "El banquete de la ilusión no ha terminado. Para siempre.",
						"vietnamese": "Bữa tiệc ảo ảnh chưa kết thúc. Vĩnh viễn.",
						"thai": "งานเลี้ยงแห่งภาพลวงตาไม่สิ้นสุด ชั่วนิรันดร์",
						"hindi": "भ्रम का भोज समाप्त नहीं हुआ है। हमेशा के लिए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 어리석음이… 이 영원한 안식을 거부하는구나.",
						"english": "Your foolishness... rejects this eternal rest.",
						"japanese": "「お前たちの愚かさが…この永遠の安息を拒むのだな。」",
						"chinese": "“你们的愚蠢…拒绝了这永恒的安息。”",
						"french": "« Votre folie... rejette ce repos éternel. »",
						"spanish": "Vuestra necedad... rechaza este descanso eterno.",
						"vietnamese": "Sự ngu ngốc của các ngươi... từ chối sự an nghỉ vĩnh hằng này.",
						"thai": "ความโง่เขลาของพวกเจ้า... ปฏิเสธการพักผ่อนชั่วนิรันดร์นี้",
						"hindi": "तुम्हारी मूर्खता... इस शाश्वत आराम को अस्वीकार करती है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 우린 절대 포기하지 않아! 언젠가 반드시…!",
						"english": "No... we will never give up! Someday, surely...!",
						"japanese": "「いいや…私たちは決して諦めない！いつか必ず…！」",
						"chinese": "“不…我们绝不放弃！总有一天，我们一定会…！”",
						"french": "« Non... nous n'abandonnerons jamais ! Un jour, sûrement...! »",
						"spanish": "¡No... nunca nos rendiremos! ¡Algún día, sin falta...!",
						"vietnamese": "Không... chúng tôi sẽ không bao giờ bỏ cuộc! Chắc chắn một ngày nào đó...!",
						"thai": "ไม่... เราไม่มีวันยอมแพ้! สักวันหนึ่ง เราจะต้อง...!",
						"hindi": "नहीं... हम कभी हार नहीं मानेंगे! किसी दिन, ज़रूर...!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "환각의 장막이 찢어졌다. 진실이 모습을 드러낸다.",
						"english": "The veil of illusion is torn. Truth reveals itself.",
						"japanese": "幻覚の帳が裂かれた。真実が姿を現す。",
						"chinese": "幻象的帷幕被撕裂了。真相显露出来。",
						"french": "Le voile de l'illusion est déchiré. La vérité se révèle.",
						"spanish": "El velo de la ilusión se ha rasgado. La verdad se revela.",
						"vietnamese": "Màn ảo ảnh đã bị xé toạc. Sự thật lộ diện.",
						"thai": "ม่านลวงตาถูกฉีกกระชาก ความจริงเผยตัวออกมา",
						"hindi": "भ्रम का पर्दा फट गया। सत्य प्रकट होता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…너희는… 왜 그렇게까지… 현실을 고집하지…?",
						"english": "...Why do you... cling so stubbornly... to reality...?",
						"japanese": "…お前たちは…なぜそこまで…現実を…求める…？",
						"chinese": "…你们…为什么…如此执着于…现实…？",
						"french": "...Pourquoi vous accrochez-vous... si obstinément... à la réalité...?",
						"spanish": "...¿Por qué... os aferráis tanto... a la realidad...?",
						"vietnamese": "...Các ngươi... tại sao lại... cố chấp với... hiện thực đến vậy...?",
						"thai": "...พวกเจ้า...ทำไมถึง...ยึดติดกับ...ความเป็นจริง...ขนาดนั้น...?",
						"hindi": "...तुम लोग... इतना क्यों... हकीकत से चिपके रहते हो...?"
					}
				},
				{
					"speaker": "Zafir",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게… 진짜 세상이었어…?",
						"english": "This... was the real world...?",
						"japanese": "「これが…本当の世界だったの…？」",
						"chinese": "“这…是真实的世界吗…？”",
						"french": "« C'était... le monde réel...? »",
						"spanish": "¿Esto... era el mundo real...?",
						"vietnamese": "Đây... là thế giới thật sao...?",
						"thai": "นี่... คือโลกแห่งความจริงเหรอ...?",
						"hindi": "यह... असली दुनिया थी...?"
					},
					"speaker": "Zafir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모르겠어. 하지만… 앞으로 나아가야 해.",
						"english": "I don't know. But... we must move forward.",
						"japanese": "「分からない。でも…進まなくちゃ。」",
						"chinese": "“我不知道。但是…我们必须前进。”",
						"french": "« Je ne sais pas. Mais... nous devons avancer. »",
						"spanish": "No lo sé. Pero... debemos seguir adelante.",
						"vietnamese": "Tôi không biết. Nhưng... chúng ta phải tiến lên.",
						"thai": "ฉันไม่รู้สิ แต่... เราต้องเดินหน้าต่อไป",
						"hindi": "मुझे नहीं पता। लेकिन... हमें आगे बढ़ना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래바람이 모든 환상을 지웠다. 남은 것은— 싸늘한 현실뿐.",
						"english": "The sandstorm erased all illusions. All that remained— was a chilling reality.",
						"japanese": "「砂嵐が全ての幻想を消し去った。残されたのは— 冷酷な現実だけ。」",
						"chinese": "“沙尘暴抹去了所有幻象。剩下的— 只有冷酷的现实。”",
						"french": "« La tempête de sable a effacé toutes les illusions. Il ne restait — qu'une froide réalité. »",
						"spanish": "La tormenta de arena borró todas las ilusiones. Todo lo que quedó— fue una fría realidad.",
						"vietnamese": "Cơn bão cát đã xóa sạch mọi ảo ảnh. Chỉ còn lại— một thực tế lạnh lẽo.",
						"thai": "พายุทรายลบเลือนภาพลวงตาทั้งหมด สิ่งที่เหลืออยู่— คือความเป็นจริงที่เยือกเย็น",
						"hindi": "रेतीले तूफान ने सभी भ्रम मिटा दिए। जो बचा— वह केवल एक भयावह वास्तविकता थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나, 그 현실 속에서 — 새로운 길을 찾을 희망이 싹트고 있었다.",
						"english": "However, within that reality — hope for a new path was budding.",
						"japanese": "「しかし、その現実の中で — 新しい道を見つける希望が芽生え始めていた。」",
						"chinese": "“然而，在那现实中—寻找新道路的希望正在萌芽。”",
						"french": "« Cependant, au sein de cette réalité — l'espoir d'une nouvelle voie germait. »",
						"spanish": "Sin embargo, dentro de esa realidad — la esperanza de encontrar un nuevo camino estaba brotando.",
						"vietnamese": "Tuy nhiên, trong thực tại đó — hy vọng về một con đường mới đang nảy mầm.",
						"thai": "อย่างไรก็ตาม ภายในความเป็นจริงนั้น— ความหวังที่จะพบเส้นทางใหม่กำลังผลิบาน",
						"hindi": "हालांकि, उस वास्तविकता के भीतर — एक नए रास्ते की उम्मीद अंकुरित हो रही थी।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"황금빛 연기는 걷혔다. 그리고 그 아래 드러난 것은—",
			"수없이 쌓인 모래와, 침묵하는 뼈들이었다.",
			"환상의 요리사는 쓰러졌다. 그의 자비는, 누구에게도 구원이 아니었다.",
			"사막에는 다시 차가운 바람이 불었다. 하지만, 탐험대의 눈은 더욱 선명해졌다.",
			"현실은 쓰라리지만, 그 맛을 알아야만 — 다음 길을 갈 수 있었다."
		],
		"english": [
			"The golden smoke cleared. And what was revealed beneath was—",
			"Countless piles of sand, and silent bones.",
			"The illusionary chef fell. His mercy was salvation to no one.",
			"A cold wind blew again in the desert. But the expedition team's eyes became clearer.",
			"Reality was bitter, but only by knowing its taste could they continue their journey."
		],
		"japanese": [
			"黄金の煙は晴れた。そしてその下に現れたのは—",
			"数えきれないほどの砂と、沈黙する骨々だった。",
			"幻想の料理人は倒れた。彼の慈悲は、誰にとっても救いではなかった。",
			"砂漠には再び冷たい風が吹いた。しかし、探検隊の目はより鮮明になった。",
			"現実は苦いが、その味を知ってこそ — 次の道へ進むことができた。"
		],
		"chinese": [
			"金色的烟雾散去。随之显露的是——",
			"无数堆积的沙子，以及沉默的白骨。",
			"幻象厨师倒下了。他的仁慈，对任何人来说都不是救赎。",
			"沙漠中再次刮起了冷风。然而，探险队的目光却变得更加清晰。",
			"现实是苦涩的，但只有尝过它的滋味——才能继续前行。"
		],
		"french": [
			"La fumée dorée s'est dissipée. Et ce qui a été révélé en dessous était—",
			"Des tas de sable innombrables, et des os silencieux.",
			"Le chef illusionniste est tombé. Sa miséricorde n'était un salut pour personne.",
			"Un vent froid soufflait à nouveau dans le désert. Mais les yeux de l'équipe d'expédition devinrent plus clairs.",
			"La réalité était amère, mais ce n'est qu'en en connaissant le goût qu'ils pouvaient continuer leur chemin."
		],
		"spanish": [
			"El humo dorado se disipó. Y lo que se reveló debajo fue—",
			"Incontables montones de arena y huesos silenciosos.",
			"El cocinero de la ilusión cayó. Su misericordia no fue salvación para nadie.",
			"Un viento frío sopló de nuevo en el desierto. Pero los ojos del equipo de expedición se volvieron más claros.",
			"La realidad era amarga, pero solo conociendo su sabor — podían seguir el siguiente camino."
		],
		"vietnamese": [
			"Làn khói vàng tan biến. Và những gì hiện ra bên dưới là—",
			"Vô số đống cát, và những bộ xương im lìm.",
			"Người đầu bếp ảo ảnh đã ngã xuống. Lòng từ bi của hắn, chẳng phải là cứu rỗi cho bất cứ ai.",
			"Một cơn gió lạnh lại thổi qua sa mạc. Nhưng ánh mắt của đoàn thám hiểm lại trở nên rõ ràng hơn.",
			"Thực tế cay đắng, nhưng chỉ khi biết được hương vị đó — họ mới có thể tiếp tục cuộc hành trình."
		],
		"thai": [
			"ควันสีทองจางหายไป และสิ่งที่ปรากฏอยู่เบื้องล่างคือ—",
			"กองทรายมากมายนับไม่ถ้วน และกระดูกที่เงียบงัน",
			"เชฟแห่งภาพลวงตาล้มลงแล้ว ความเมตตาของเขาไม่ใช่ความรอดสำหรับใครเลย",
			"ลมหนาวพัดโชยอีกครั้งในทะเลทราย แต่สายตาของทีมสำรวจกลับคมชัดยิ่งขึ้น",
			"ความจริงนั้นขมขื่น แต่ก็ต้องลิ้มรสความจริงนั้น — จึงจะสามารถก้าวเดินต่อไปได้"
		],
		"hindi": [
			"सुनहरा धुआँ छंट गया। और उसके नीचे जो प्रकट हुआ वह था—",
			"रेत के अनगिनत ढेर, और खामोश हड्डियाँ थीं।",
			"भ्रम का रसोइया गिर गया। उसकी दया किसी के लिए मोक्ष नहीं थी।",
			"रेगिस्तान में फिर से ठंडी हवा चली। लेकिन अन्वेषण दल की आँखें और साफ हो गईं।",
			"वास्तविकता कड़वी थी, लेकिन केवल उसका स्वाद जानकर ही — वे अगले रास्ते पर जा सकते थे।"
		]
	}
} as const;
