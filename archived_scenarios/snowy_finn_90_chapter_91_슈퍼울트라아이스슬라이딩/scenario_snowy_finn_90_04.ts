export const scenario_snowy_finn_90_04 = {
	"scenario_id": "snowy_finn_90_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"펭귄 왕의 마지막 무대.",
			"모든 위엄을 버리고, 그는 홀로 섰다.",
			"엉망진창, 하지만 진심을 담은 한 판.",
			"그에게 필요한 건 승리가 아니었다."
		],
		"english": [
			"The Penguin King's final stage.",
			"Stripped of all grandeur, he stood alone.",
			"A chaotic, yet heartfelt, performance.",
			"Victory was not what he sought."
		],
		"japanese": [
			"ペンギン王、最後の舞台。",
			"すべての威厳を捨て、彼は独り立った。",
			"めちゃくちゃだが、真心を込めた一戦。",
			"彼が必要としたのは勝利ではなかった。"
		],
		"chinese": [
			"企鹅王的最后一幕。",
			"抛弃所有尊严，他独自一人站立。",
			"一场混乱但真诚的表演。",
			"他需要的不是胜利。"
		],
		"french": [
			"La dernière scène du Roi Pingouin.",
			"Dépouillé de toute grandeur, il se tenait seul.",
			"Un désordre total, mais une performance sincère.",
			"Ce n'était pas la victoire qu'il cherchait."
		],
		"spanish": [
			"El último escenario del Rey Pingüino.",
			"Despojado de toda su majestad, se irguió solo.",
			"Un desastre, pero con un corazón sincero.",
			"No era la victoria lo que necesitaba."
		],
		"vietnamese": [
			"Sân khấu cuối cùng của Vua Chim Cánh Cụt.",
			"Từ bỏ mọi uy nghiêm, anh ta đứng một mình.",
			"Một màn hỗn loạn, nhưng đầy chân thành.",
			"Điều anh ta cần không phải là chiến thắng."
		],
		"thai": [
			"เวทีสุดท้ายของราชานกเพนกวิน",
			"ละทิ้งศักดิ์ศรีทั้งหมด เขายืนอยู่เพียงลำพัง",
			"ยุ่งเหยิง แต่จริงใจในครั้งเดียว",
			"สิ่งที่เขาต้องการไม่ใช่ชัยชนะ"
		],
		"hindi": [
			"पेंग्विन राजा का अंतिम मंच।",
			"सारी गरिमा त्यागकर, वह अकेला खड़ा था।",
			"गड़बड़, लेकिन दिल से भरा एक खेल।",
			"उसे जीत की आवश्यकता नहीं थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "빙판 위, {random_boss}가 마지막 필살기를 준비한다.",
						"english": "On the ice, {random_boss} prepares their final special move.",
						"japanese": "氷の上で、{random_boss}が最後の必殺技を準備する。",
						"chinese": "冰面上，{random_boss}准备着最后的必杀技。",
						"french": "Sur la glace, {random_boss} prépare son ultime technique.",
						"spanish": "Sobre el hielo, {random_boss} prepara su último movimiento especial.",
						"vietnamese": "Trên băng, {random_boss} chuẩn bị chiêu cuối.",
						"thai": "บนพื้นน้ำแข็ง, {random_boss} กำลังเตรียมท่าไม้ตายสุดท้าย",
						"hindi": "बर्फ पर, {random_boss} अपना अंतिम विशेष दांव तैयार करता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 한 방에… 모든 것을 담겠다!",
						"english": "In this one strike... I'll put everything!",
						"japanese": "この一撃に…すべてを込める！",
						"chinese": "这一击…我将倾注所有！",
						"french": "Dans ce seul coup… je mettrai tout !",
						"spanish": "¡En este único golpe… lo daré todo!",
						"vietnamese": "Trong cú đánh này... tôi sẽ dồn hết tất cả!",
						"thai": "ในครั้งนี้... ฉันจะใส่ทุกอย่างลงไป!",
						"hindi": "इस एक वार में… मैं सब कुछ लगा दूँगा!"
					}
				},
				{
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…이상하다. 그의 발이, 자꾸 미끄러질 듯 흔들려.",
						"english": "...Strange. His feet keep trembling, as if he's about to slip.",
						"japanese": "…おかしい。彼の足が、滑るように震えている。",
						"chinese": "……奇怪。他的脚，老是摇晃着，好像要滑倒一样。",
						"french": "…Étrange. Ses pieds tremblent constamment, comme s'il allait glisser.",
						"spanish": "...Extraño. Sus pies no dejan de temblar, como si fuera a resbalar.",
						"vietnamese": "...Lạ thật. Chân anh ta cứ run rẩy như sắp trượt ngã.",
						"thai": "...แปลกจัง. เท้าของเขาเอาแต่สั่นเหมือนจะลื่น",
						"hindi": "…अजीब है। उसके पैर, बार-बार फिसलने को जैसे डगमगा रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "저 비장한 외침 속에… 불안함이 섞여있어요.",
						"english": "Within that solemn cry… anxiety is mixed in.",
						"japanese": "あの悲壮な叫びの中に…不安が混じっている。",
						"chinese": "在那悲壮的呐喊中…夹杂着不安。",
						"french": "Dans ce cri solennel… se mêle une certaine anxiété.",
						"spanish": "En ese grito solemne… hay una mezcla de inquietud.",
						"vietnamese": "Trong tiếng thét bi tráng ấy… có lẫn sự bất an.",
						"thai": "ในเสียงร้องอันน่าสงสารนั้น… มีความกังวลปนอยู่",
						"hindi": "उस गंभीर चीख में… बेचैनी घुली हुई है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "불안? 필살기를 쓴다는데?",
						"english": "Anxious? But he's using a special move?",
						"japanese": "不安？必殺技を出すのに？",
						"chinese": "不安？他说要用必杀技啊？",
						"french": "Anxiété ? Alors qu'il utilise une technique spéciale ?",
						"spanish": "¿Inquieto? ¿Pero no va a usar su movimiento especial?",
						"vietnamese": "Bất an ư? Anh ta sắp dùng chiêu cuối mà?",
						"thai": "กังวลเหรอ? เขากำลังจะใช้ท่าไม้ตายไม่ใช่เหรอ?",
						"hindi": "बेचैन? वह तो विशेष दांव इस्तेमाल कर रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마치… 승리를 바라지 않는 것 같아.",
						"english": "It's as if... he doesn't desire victory.",
						"japanese": "まるで…勝利を望んでいないみたいだ。",
						"chinese": "好像…他并不渴望胜利。",
						"french": "C'est comme s'il… ne souhaitait pas la victoire.",
						"spanish": "Es como si… no deseara la victoria.",
						"vietnamese": "Cứ như… anh ta không hề mong muốn chiến thắng.",
						"thai": "เหมือนกับว่า… เขาไม่ต้องการชัยชนะ",
						"hindi": "जैसे… वह जीत नहीं चाहता।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…네, 확신해요. 이 한 판은, 이기려는 게 아니에요.",
						"english": "...Yes, I'm sure. This one round isn't about winning.",
						"japanese": "「…ええ、確かです。この一戦は、勝とうとしているわけではありません。」",
						"chinese": "「…是的，我确定。这一局，他不是为了赢。」",
						"french": "...Oui, j'en suis sûre. Ce match, il n'essaie pas de le gagner.",
						"spanish": "...Sí, estoy segura. Esta ronda, no intenta ganarla.",
						"vietnamese": "...Vâng, tôi chắc chắn. Ván này, không phải là để thắng.",
						"thai": "...ใช่ค่ะ ฉันแน่ใจ ตาเดินนี้ ไม่ได้จะเอาชนะ",
						"hindi": "...हाँ, मुझे यकीन है। यह एक बाजी, जीतने के लिए नहीं है।"
					},
					"speaker": "inka",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 대체 왜 저러는 거야?",
						"english": "Then why is he doing that?",
						"japanese": "「じゃあ、一体なぜあんなことを？」",
						"chinese": "「那他到底在做什么？」",
						"french": "Alors pourquoi fait-il ça ?",
						"spanish": "¿Entonces por qué está haciendo eso?",
						"vietnamese": "Vậy thì rốt cuộc tại sao lại làm vậy?",
						"thai": "แล้วทำไมเขาถึงทำแบบนั้นล่ะ?",
						"hindi": "तो फिर वह ऐसा क्यों कर रहा है?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마지막으로… 진심으로 부딪쳐 보고 싶은 거겠죠.",
						"english": "He probably just wants to clash one last time... with all his heart.",
						"japanese": "「最後に…本気でぶつかってみたかったのでしょう。」",
						"chinese": "「他大概是想最后…真心地全力一搏吧。」",
						"french": "Il veut juste s'affronter une dernière fois... avec tout son cœur.",
						"spanish": "Probablemente solo quiere enfrentarse por última vez... con todo su corazón.",
						"vietnamese": "Chắc là muốn đối đầu thật lòng một lần cuối cùng...",
						"thai": "คงอยากจะปะทะกันอย่างสุดใจเป็นครั้งสุดท้าย...",
						"hindi": "शायem वह बस आखिरी बार... पूरे दिल से मुकाबला करना चाहता है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "받아라! 얼어붙은… 분노의 빙하 폭격!",
						"english": "Take this! Frozen... Glacier Bombardment of Fury!",
						"japanese": "「食らえ！凍てつく…怒りの氷河爆撃！」",
						"chinese": "「接招！冰冻的…愤怒冰川轰炸！」",
						"french": "Prenez ça ! Le... Bombardement Glaciaire de Fureur ! ",
						"spanish": "¡Toma esto! ¡El... Bombardeo Glaciar de Furia Congelada!",
						"vietnamese": "Nhận lấy này! Băng giá... Băng hà bão tố của cơn thịnh nộ!",
						"thai": "รับไปซะ! การโจมตีด้วยธารน้ำแข็งแห่งความโกรธ...",
						"hindi": "लो यह! जमा हुआ... क्रोध का ग्लेशियर बमबारी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "온다! 피할 수 없어!",
						"english": "It's coming! Can't avoid it!",
						"japanese": "「来るぞ！避けられない！」",
						"chinese": "「来了！躲不掉了！」",
						"french": "Ça arrive ! Impossible d'esquiver !",
						"spanish": "¡Viene! ¡Imposible esquivarlo!",
						"vietnamese": "Đến rồi! Không thể tránh được!",
						"thai": "มาแล้ว! หลบไม่ได้หรอก!",
						"hindi": "यह आ रहा है! बचा नहीं जा सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괜찮아요. 그의 발은… 아직 흔들리고 있어요.",
						"english": "It's fine. His feet... are still unsteady.",
						"japanese": "「大丈夫です。彼の足は…まだ震えています。」",
						"chinese": "「没关系。他的脚步…还在摇晃。」",
						"french": "Ça va. Ses pieds... sont encore chancelants.",
						"spanish": "Está bien. Sus pies... todavía están inestables.",
						"vietnamese": "Không sao đâu. Chân anh ấy... vẫn còn run rẩy.",
						"thai": "ไม่เป็นไรค่ะ เท้าของเขา...ยังสั่นอยู่เลย",
						"hindi": "ठीक है। उसके पैर... अभी भी काँप रहे हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는… 잊혀진 펭귄 왕! 나의 필살기는… 결코 패배하지 않는다!",
						"english": "I am... the Forgotten Penguin King! My ultimate move... never fails!",
						"japanese": "「我は…忘れ去られたペンギン王！我が必殺技は…決して敗北しない！」",
						"chinese": "「我乃…被遗忘的企鹅王！我的必杀技…绝不会失败！」",
						"french": "Je suis... le Roi Pingouin Oublié ! Mon coup spécial... ne perd jamais !",
						"spanish": "¡Yo soy... el Rey Pingüino Olvidado! ¡Mi movimiento final... nunca falla!",
						"vietnamese": "Ta là... Vua Chim cánh cụt bị lãng quên! Chiêu cuối của ta... không bao giờ thất bại!",
						"thai": "ข้าคือ...ราชาเพนกวินที่ถูกลืม! ท่าไม้ตายของข้า...ไม่มีวันพ่ายแพ้!",
						"hindi": "मैं हूँ... भूला हुआ पेंग्विन राजा! मेरी अंतिम चाल... कभी विफल नहीं होती!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 진심이라면, 우리도 전력을 다하겠어!",
						"english": "If that's your true intention, then we'll give it our all too!",
						"japanese": "「それが本気なら、私たちも全力を尽くします！」",
						"chinese": "「如果那是你的真心话，我们也会全力以赴！」",
						"french": "Si c'est ta vraie intention, alors nous donnerons aussi tout ce que nous avons !",
						"spanish": "Si esa es tu verdadera intención, ¡entonces nosotros también daremos todo!",
						"vietnamese": "Nếu đó là tấm lòng thật của ngươi, thì chúng ta cũng sẽ dốc toàn lực!",
						"thai": "ถ้าเป็นความตั้งใจจริง เราก็จะทุ่มสุดตัวเช่นกัน!",
						"hindi": "अगर यह तुम्हारी सच्ची मंशा है, तो हम भी अपनी पूरी ताकत लगा देंगे!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "…그를 받아주세요. 그의 진심을.",
						"english": "...Please accept him. His true feelings.",
						"japanese": "「…彼を受け入れてください。彼の真心を。」",
						"chinese": "「…请接受他。他的真心。」",
						"french": "...Veuillez l'accepter. Son vrai cœur.",
						"spanish": "...Por favor, acéptenlo. Su verdadera intención.",
						"vietnamese": "...Xin hãy chấp nhận anh ấy. Tấm lòng chân thật của anh ấy.",
						"thai": "...ได้โปรดรับเขาไว้เถอะค่ะ ความรู้สึกที่แท้จริงของเขา",
						"hindi": "...कृपया उसे स्वीकार करें। उसकी सच्ची भावनाओं को।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하… 이 정도로는… 어림없지.",
						"english": "Haha... This won't be enough.",
						"japanese": "ハハ…これくらいでは…まだまだだな。",
						"chinese": "哈哈…这点程度…还远远不够。",
						"french": "Haha... Ce n'est pas... suffisant.",
						"spanish": "Jaja... Con esto... no es suficiente.",
						"vietnamese": "Haha... Chừng này thì... chưa đủ đâu.",
						"thai": "ฮ่าฮ่า...แค่นี้...ยังไม่พอหรอก",
						"hindi": "हाहा... इतना तो... काफी नहीं।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직이야! 다시 한번 간다!",
						"english": "Not yet! One more time!",
						"japanese": "まだだ！もう一度行くぞ！",
						"chinese": "还没完！再来一次！",
						"french": "Pas encore ! Je reviens !",
						"spanish": "¡Todavía no! ¡Voy otra vez!",
						"vietnamese": "Chưa đâu! Lại một lần nữa!",
						"thai": "ยังก่อน! จะไปอีกครั้ง!",
						"hindi": "अभी नहीं! फिर से आता हूँ!"
					}
				},
				{
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…끝까지, 함께 해줘요.",
						"english": "...Stay with me, until the very end.",
						"japanese": "…最後まで、一緒にいてください。",
						"chinese": "…直到最后，都请与我同在。",
						"french": "...Jusqu'au bout, restez avec moi.",
						"spanish": "...Hasta el final, quédate conmigo.",
						"vietnamese": "...Xin hãy ở bên tôi, cho đến tận cùng.",
						"thai": "...ได้โปรดอยู่เคียงข้างฉันจนถึงที่สุด",
						"hindi": "...आखिर तक, मेरे साथ रहो।"
					},
					"speaker": "inka",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이 몸의… 필살기가…! (휘청)",
						"english": "Ugh... My ultimate move...! (Stumbles)",
						"japanese": "「ぐぅ…この身の…必殺技が…！(よろめき)」",
						"chinese": "「咳咳…我的…必杀技竟然…！(踉跄)」",
						"french": "Argh... Mon coup spécial... ! (Chancelle)",
						"spanish": "Ugh... ¡Mi movimiento final...! (Tropieza)",
						"vietnamese": "Khụ... Chiêu cuối của ta... ! (Loạng choạng)",
						"thai": "อึก...ท่าไม้ตายของข้า...!(โซเซ)",
						"hindi": "ऊह... मेरी अंतिम चाल...! (लड़खड़ाता है)"
					}
				},
				{
					"content": {
						"korean": "힘껏 부딪쳐 줬잖아. 그걸로 된 거 아니야?",
						"english": "You gave it your all. Wasn't that enough?",
						"japanese": "全力でぶつかってくれたじゃないか。それで十分じゃないか？",
						"chinese": "你已经全力以赴了。这难道还不够吗？",
						"french": "Tu t'es battu de toutes tes forces. N'est-ce pas suffisant ?",
						"spanish": "Luchaste con todas tus fuerzas. ¿No fue suficiente?",
						"vietnamese": "Anh đã chiến đấu hết mình rồi. Như vậy là đủ rồi, phải không?",
						"thai": "คุณได้สู้สุดกำลังแล้วไม่ใช่เหรอ แค่นั้นยังไม่พอหรือไง?",
						"hindi": "तुमने पूरी ताकत से मुकाबला किया। क्या वो काफी नहीं था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…네. 그는, 승리를 원한 게 아니었어요.",
						"english": "...Yes. He didn't want victory.",
						"japanese": "…はい。彼は、勝利を望んでいなかったんです。",
						"chinese": "…是的。他想要的，并非胜利。",
						"french": "...Oui. Il ne cherchait pas la victoire.",
						"spanish": "...Sí. Él no quería la victoria.",
						"vietnamese": "...Vâng. Anh ấy không muốn chiến thắng.",
						"thai": "...ค่ะ เขาไม่ได้ต้องการชัยชนะ",
						"hindi": "...हाँ। उसे जीत नहीं चाहिए थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길 잃은 왕의 서툰 외침은, 마침내 따뜻한 시선을 만났다.",
						"english": "The lost king's clumsy cry finally met a warm gaze.",
						"japanese": "迷える王の不器用な叫びは、ついに温かい視線と出会った。",
						"chinese": "迷失之王的笨拙呼喊，终于迎来了温暖的注视。",
						"french": "Le cri maladroit du roi égaré rencontra enfin un regard chaleureux.",
						"spanish": "El torpe lamento del rey perdido finalmente encontró una mirada cálida.",
						"vietnamese": "Tiếng gọi vụng về của vị vua lạc lối, cuối cùng đã gặp được ánh nhìn ấm áp.",
						"thai": "เสียงคร่ำครวญงุ่มง่ามของราชาผู้หลงทาง ในที่สุดก็ได้พบกับสายตาอันอบอุ่น",
						"hindi": "गुमशुदा राजा की अनाड़ी पुकार को, आखिरकार एक गर्मजोशी भरी नज़र मिली।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
