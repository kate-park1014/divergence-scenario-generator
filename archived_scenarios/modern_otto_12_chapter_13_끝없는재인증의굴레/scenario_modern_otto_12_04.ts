export const scenario_modern_otto_12_04 = {
	"scenario_id": "modern_otto_12_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"emotion": "base",
					"content": {
						"korean": "시스템의 미로는 끝없이 확장되었다.",
						"english": "The system's labyrinth expanded endlessly.",
						"japanese": "システムの迷宮は限りなく広がった。",
						"chinese": "系统的迷宫无限延伸。",
						"french": "Le labyrinthe du système s'étendait à l'infini.",
						"spanish": "El laberinto del sistema se expandía sin cesar.",
						"vietnamese": "Mê cung của hệ thống mở rộng không ngừng.",
						"thai": "เขาวงกตของระบบขยายออกไปไม่รู้จบ",
						"hindi": "प्रणाली का भूलभुलैया अंतहीन रूप से विस्तृत होता गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "또 시작이야? 지겨워 죽겠네.",
						"english": "Starting again? I'm sick to death of it.",
						"japanese": "またか？もううんざりだ。",
						"chinese": "又开始了？烦死了。",
						"french": "Encore ? J'en ai marre à mourir.",
						"spanish": "Otra vez? Estoy harto de esto.",
						"vietnamese": "Lại nữa à? Chán chết đi được.",
						"thai": "เริ่มอีกแล้วเหรอ? เบื่อจะตายอยู่แล้ว",
						"hindi": "फिर से शुरू? मैं इससे ऊब चुका हूँ।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "저자의 친절을 믿지 마라. 전부 거짓이다.",
						"english": "Don't trust the author's kindness. It's all a lie.",
						"japanese": "著者の親切を信じるな。全て嘘だ。",
						"chinese": "不要相信作者的仁慈。那都是谎言。",
						"french": "Ne faites pas confiance à la gentillesse de l'auteur. Tout est un mensonge.",
						"spanish": "No confíes en la amabilidad del autor. Todo es una mentira.",
						"vietnamese": "Đừng tin lòng tốt của tác giả. Tất cả đều là dối trá.",
						"thai": "อย่าเชื่อความเมตตาของผู้เขียน มันเป็นเรื่องโกหกทั้งหมด",
						"hindi": "लेखक की दयालुता पर विश्वास मत करो। यह सब झूठ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓? 무슨 소리야.",
						"english": "A lie? What are you talking about?",
						"japanese": "嘘？何を言ってるんだ。",
						"chinese": "谎言？什么意思？",
						"french": "Un mensonge ? De quoi parlez-vous ?",
						"spanish": "Una mentira? ¿De qué hablas?",
						"vietnamese": "Dối trá? Anh đang nói cái gì vậy?",
						"thai": "โกหก? คุณพูดอะไร",
						"hindi": "झूठ? तुम क्या कह रहे हो।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "이 끝없는 반복이 우연 같나?",
						"english": "Does this endless repetition seem like a coincidence?",
						"japanese": "この終わりのない繰り返しが偶然だと思うか？",
						"chinese": "这无尽的重复是巧合吗？",
						"french": "Cette répétition sans fin te semble-t-elle une coïncidence ?",
						"spanish": "Esta repetición interminable te parece una coincidencia?",
						"vietnamese": "Sự lặp lại không ngừng này có phải là ngẫu nhiên không?",
						"thai": "การทำซ้ำไม่รู้จบนี้ดูเหมือนเรื่องบังเอิญหรือเปล่า",
						"hindi": "क्या यह अंतहीन दोहराव एक संयोग लगता है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "Otto는 너희를 붙잡아두는 데 즐거움을 느끼고 있다.",
						"english": "Otto takes pleasure in keeping you trapped.",
						"japanese": "オットーはお前たちを閉じ込めておくことに喜びを感じている。",
						"chinese": "奥托乐于将你们困住。",
						"french": "Otto prend plaisir à vous retenir prisonniers.",
						"spanish": "Otto se deleita en manteneros atrapados.",
						"vietnamese": "Otto thích thú khi giam cầm các ngươi.",
						"thai": "ออตโตมีความสุขที่ได้กักขังพวกคุณไว้",
						"hindi": "ओटो तुम्हें फंसाए रखने में खुशी महसूस करता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…일부러 이러고 있다고?",
						"english": "...They're doing this on purpose?",
						"japanese": "「…わざとやってるってこと？」",
						"chinese": "“……他们是故意这么做的？”",
						"french": "...Ils font ça exprès ?",
						"spanish": "¿...Lo están haciendo a propósito?",
						"vietnamese": "...Họ đang cố tình làm vậy ư?",
						"thai": "...พวกเขาจงใจทำแบบนี้เหรอ?",
						"hindi": "...वे जानबूझकर ऐसा कर रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 이것은 단순한 지연이 아니다. 의도적인 방해다.",
						"english": "Yes. This isn't mere delay. It's deliberate obstruction.",
						"japanese": "「そうだ。これは単なる遅延ではない。意図的な妨害だ。」",
						"chinese": "“没错。这不只是简单的延迟。这是蓄意阻挠。”",
						"french": "Oui. Ce n'est pas un simple délai. C'est une obstruction délibérée.",
						"spanish": "Sí. Esto no es una mera demora. Es una obstrucción deliberada.",
						"vietnamese": "Đúng vậy. Đây không chỉ là sự chậm trễ đơn thuần. Đây là sự cản trở có chủ ý.",
						"thai": "ใช่ นี่ไม่ใช่แค่การหน่วงเวลา แต่มันคือการขัดขวางโดยเจตนา",
						"hindi": "हाँ। यह सिर्फ़ देरी नहीं है। यह जानबूझकर की गई बाधा है।"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 뭘 하든?",
						"english": "No matter what we do?",
						"japanese": "「私たちが何をしても？」",
						"chinese": "“不管我们做什么都一样？”",
						"french": "Peu importe ce que nous faisons ?",
						"spanish": "¿No importa lo que hagamos?",
						"vietnamese": "Dù chúng ta làm gì đi nữa?",
						"thai": "ไม่ว่าเราจะทำอะไรก็ตาม?",
						"hindi": "हम कुछ भी करें तो भी?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템의 모든 움직임이 그자의 기만이다.",
						"english": "Every system movement is their deception.",
						"japanese": "「システムのあらゆる動きが、奴の欺瞞だ。」",
						"chinese": "“系统里的一切都是他的骗局。”",
						"french": "Chaque mouvement du système est leur duperie.",
						"spanish": "Cada movimiento del sistema es su engaño.",
						"vietnamese": "Mọi chuyển động của hệ thống đều là sự lừa dối của chúng.",
						"thai": "ทุกการเคลื่อนไหวของระบบคือการหลอกลวงของมัน",
						"hindi": "सिस्टम की हर चाल उसकी धोखेबाजी है।"
					},
					"speaker": "dax",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "봐라. 또 다른 불필요한 인증 요구다.",
						"english": "Look. Another unnecessary authentication request.",
						"japanese": "「見ろ。また余計な認証要求だ。」",
						"chinese": "“看。又是一个不必要的认证请求。”",
						"french": "Regarde. Une autre demande d'authentification inutile.",
						"spanish": "Mira. Otra solicitud de autenticación innecesaria.",
						"vietnamese": "Nhìn kìa. Lại một yêu cầu xác thực không cần thiết nữa rồi.",
						"thai": "ดูสิ มีคำขอการยืนยันตัวตนที่ไม่จำเป็นอีกแล้ว",
						"hindi": "देखो। एक और अनावश्यक प्रमाणीकरण अनुरोध।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "정말 끝이 없네.",
						"english": "It really never ends.",
						"japanese": "「本当にキリがないな。」",
						"chinese": "“真是没完没了。”",
						"french": "C'est vraiment sans fin.",
						"spanish": "Realmente no tiene fin.",
						"vietnamese": "Thật sự là không có hồi kết.",
						"thai": "มันไม่มีที่สิ้นสุดจริงๆ",
						"hindi": "यह सच में कभी खत्म नहीं होता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "불필요한 것은 전부 너희의 시간과 의지를 갉아먹기 위함이다.",
						"english": "All these unnecessary things are to chip away at your time and will.",
						"japanese": "「不必要なものは全て、お前たちの時間と意思を蝕むためだ。」",
						"chinese": "“所有不必要的东西都是为了消磨你们的时间和意志。”",
						"french": "Tout cet inutile est là pour ronger votre temps et votre volonté.",
						"spanish": "Todas estas cosas innecesarias son para minar vuestro tiempo y voluntad.",
						"vietnamese": "Mọi thứ không cần thiết đều là để bào mòn thời gian và ý chí của các ngươi.",
						"thai": "สิ่งที่ไม่จำเป็นทั้งหมดนี้มีไว้เพื่อกัดกร่อนเวลาและความตั้งใจของพวกเจ้า",
						"hindi": "ये सभी अनावश्यक चीजें तुम्हारे समय और इच्छाशक्ति को कम करने के लिए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…우리를 지치게 하려는 거였어?",
						"english": "...They were trying to wear us down?",
						"japanese": "「…私たちを疲れさせようとしていたのか？」",
						"chinese": "“……他们是想让我们筋疲力尽？”",
						"french": "...Ils essayaient de nous épuiser ?",
						"spanish": "¿...Querían agotarnos?",
						"vietnamese": "...Họ muốn làm chúng ta kiệt sức ư?",
						"thai": "...พวกเขาพยายามจะทำให้เราอ่อนล้าเหรอ?",
						"hindi": "...वे हमें थकाना चाहते थे?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정확하다. 저자의 진짜 목표는 너희를 시스템에 가두는 것.",
						"english": "Precisely. Their real goal is to trap you within the system.",
						"japanese": "「その通りだ。奴の本当の目標は、お前たちをシステムに閉じ込めることだ。」",
						"chinese": "“没错。他们的真正目标是把你们困在系统里。”",
						"french": "Exactement. Leur véritable objectif est de vous piéger dans le système.",
						"spanish": "Exacto. Su verdadero objetivo es atraparos dentro del sistema.",
						"vietnamese": "Chính xác. Mục tiêu thực sự của chúng là nhốt các ngươi trong hệ thống.",
						"thai": "ถูกต้อง เป้าหมายที่แท้จริงของมันคือการขังพวกเจ้าไว้ในระบบ",
						"hindi": "बिल्कुल। उनका असली लक्ष्य तुम्हें सिस्टम में फंसाना है।"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 더 이상 그자의 말에 속아 넘어가지 마라.",
						"english": "Don't fall for their words any longer.",
						"japanese": "「もう二度と、奴の言葉に騙されるな。」",
						"chinese": "“别再被他的话骗了。”",
						"french": "Ne te laisse plus berner par leurs paroles.",
						"spanish": "No caigas más en sus palabras.",
						"vietnamese": "Đừng để bị lừa bởi lời nói của chúng nữa.",
						"thai": "อย่าหลงเชื่อคำพูดของมันอีกต่อไป",
						"hindi": "अब उसकी बातों में और मत आना।"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 어떻게? 나갈 방법도 없는데.",
						"english": "But how? There's no way out.",
						"japanese": "しかし、どうやって？ 出口もないのに。",
						"chinese": "但是怎么出去？根本没有出口。",
						"french": "Mais comment ? Il n'y a aucun moyen de sortir.",
						"spanish": "¿Pero cómo? No hay forma de salir.",
						"vietnamese": "Nhưng làm sao đây? Không có lối thoát.",
						"thai": "แต่ทำยังไง? ไม่มีทางออกเลยนะ.",
						"hindi": "लेकिन कैसे? बाहर निकलने का कोई रास्ता नहीं है।"
					},
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "시스템의 허점은 반드시 존재한다. 우리가 찾아야 한다.",
						"english": "There must be a loophole in the system. We have to find it.",
						"japanese": "システムの抜け穴は必ず存在する。我々が見つけねば。",
						"chinese": "系统必然存在漏洞。我们必须找到它。",
						"french": "Il doit y avoir une faille dans le système. Nous devons la trouver.",
						"spanish": "Debe haber una laguna en el sistema. Tenemos que encontrarla.",
						"vietnamese": "Chắc chắn có một lỗ hổng trong hệ thống. Chúng ta phải tìm ra nó.",
						"thai": "ช่องโหว่ของระบบต้องมีอยู่จริง เราต้องหามันให้เจอ.",
						"hindi": "सिस्टम में ज़रूर कोई कमी होगी। हमें उसे खोजना होगा।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 물러설 곳은 없어.",
						"english": "There's nowhere left to retreat.",
						"japanese": "もう後には引けない。",
						"chinese": "我们已无退路。",
						"french": "Nous n'avons plus nulle part où reculer.",
						"spanish": "Ya no hay dónde retroceder.",
						"vietnamese": "Không còn đường lùi nữa rồi.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว.",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…이 정도인가? 어리석은 인간들… 진짜는 아직 시작도 안 했다.",
						"english": "...Is this all? Foolish humans... The real game hasn't even begun.",
						"japanese": "…この程度か？ 愚かな人間ども… 本番はまだ始まってもいない。",
						"chinese": "……就这点程度吗？愚蠢的人类……真正的游戏甚至还没开始。",
						"french": "...C'est tout ? Humains insensés... Le vrai combat n'a même pas commencé.",
						"spanish": "¿Esto es todo? Humanos tontos... Lo real aún no ha comenzado.",
						"vietnamese": "...Chỉ có thế này thôi sao? Lũ người ngu ngốc... Trận chiến thực sự còn chưa bắt đầu.",
						"thai": "...แค่นี้เองเหรอ? มนุษย์โง่เง่า... ของจริงยังไม่เริ่มเลย.",
						"hindi": "...बस इतना ही? मूर्ख इंसानो... असली खेल अभी शुरू भी नहीं हुआ है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝이야. 네 주인도 곧 끌어내릴 거야.",
						"english": "It's over. Your master will be dragged down soon too.",
						"japanese": "終わりだ。お前の主人もすぐに引きずり下ろしてやる。",
						"chinese": "结束了。你的主人也很快会被拉下马。",
						"french": "C'est fini. Ton maître sera bientôt abattu aussi.",
						"spanish": "Se acabó. Tu amo también caerá pronto.",
						"vietnamese": "Kết thúc rồi. Chủ nhân của ngươi cũng sẽ sớm bị lôi xuống thôi.",
						"thai": "จบแล้ว. นายของแกก็จะถูกลากลงมาในไม่ช้า.",
						"hindi": "खत्म हो गया। तुम्हारा मालिक भी जल्द ही नीचे घसीटा जाएगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}는 사라졌지만, 그 뒤에 남은 Otto의 그림자는 더욱 깊어졌다.",
						"english": "{random_boss} vanished, but the shadow of Otto left behind deepened even further.",
						"japanese": "{random_boss}は消え去ったが、その後に残ったOttoの影はさらに深まった。",
						"chinese": "{random_boss}消失了，但奥托留下的阴影却更加深沉了。",
						"french": "{random_boss} a disparu, mais l'ombre d'Otto laissée derrière elle s'est encore approfondie.",
						"spanish": "{random_boss} desapareció, pero la sombra de Otto que dejó atrás se hizo aún más profunda.",
						"vietnamese": "{random_boss} biến mất, nhưng bóng tối của Otto còn lại phía sau càng thêm sâu sắc.",
						"thai": "{random_boss} หายไปแล้ว แต่เงาของ Otto ที่ทิ้งไว้เบื้องหลังกลับลึกซึ้งยิ่งขึ้น.",
						"hindi": "{random_boss} गायब हो गया, लेकिन ओटो की जो परछाई पीछे रह गई थी, वह और भी गहरी हो गई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험대는 다음 미로를 향해 나아갔다. 진실은 코앞에 있었다.",
						"english": "The expedition moved on to the next labyrinth. The truth was close at hand.",
						"japanese": "探検隊は次の迷宮へ進んだ。真実は目の前にあった。",
						"chinese": "探险队继续前往下一个迷宫。真相近在眼前。",
						"french": "L'expédition s'est dirigée vers le labyrinthe suivant. La vérité était à portée de main.",
						"spanish": "La expedición avanzó hacia el siguiente laberinto. La verdad estaba al alcance de la mano.",
						"vietnamese": "Đoàn thám hiểm tiến vào mê cung tiếp theo. Sự thật đã ở rất gần.",
						"thai": "คณะสำรวจมุ่งหน้าสู่เขาวงกตถัดไป ความจริงอยู่แค่เอื้อมแล้ว",
						"hindi": "अभियान अगले भूलभुलैया की ओर बढ़ा। सच्चाई सामने थी。"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "디지털 미로의 깊은 곳, 정체 모를 그림자가 기다리고 있었다.",
						"english": "Deep within the digital labyrinth, an unknown shadow awaited.",
						"japanese": "デジタル迷宮の奥深く、正体不明の影が待ち構えていた。",
						"chinese": "在数字迷宫的深处，一个不明身份的影子正在等待。",
						"french": "Au plus profond du labyrinthe numérique, une ombre inconnue attendait.",
						"spanish": "En lo profundo del laberinto digital, una sombra desconocida esperaba.",
						"vietnamese": "Sâu trong mê cung kỹ thuật số, một bóng tối vô danh đang chờ đợi.",
						"thai": "ลึกเข้าไปในเขาวงกตดิจิทัล เงาปริศนารออยู่.",
						"hindi": "डिजिटल भूलभुलैया की गहराइयों में, एक अज्ञात परछाई इंतज़ार कर रही थी।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "또 다른 기만이다. {random_boss}는 Otto의 시간을 벌기 위한 꼭두각시일 뿐.",
						"english": "Another deception. {random_boss} is merely a puppet to buy Otto time.",
						"japanese": "またしても欺瞞か。{random_boss}はOttoの時間稼ぎの操り人形に過ぎない。",
						"chinese": "又一个骗局。{random_boss}不过是为奥托争取时间的傀儡。",
						"french": "Encore une tromperie. {random_boss} n'est qu'une marionnette pour faire gagner du temps à Otto.",
						"spanish": "Otra decepción. {random_boss} es simplemente un títere para ganar tiempo para Otto.",
						"vietnamese": "Lại một sự lừa dối khác. {random_boss} chỉ là một con rối để câu giờ cho Otto.",
						"thai": "เป็นการหลอกลวงอีกแล้ว. {random_boss} เป็นแค่หุ่นเชิดเพื่อถ่วงเวลา Otto เท่านั้น.",
						"hindi": "एक और धोखा। {random_boss} सिर्फ ओटो को समय देने के लिए एक कठपुतली है।"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…건방진. 내 주인님의 계획을 방해하지 마라.",
						"english": "...Insolent. Do not interfere with my master's plan.",
						"japanese": "…生意気な。我が主の計画を邪魔するな。",
						"chinese": "……放肆。不要妨碍我主人的计划。",
						"french": "...Insolent. N'interférez pas avec le plan de mon maître.",
						"spanish": "...Insolente. No interfieras con el plan de mi amo.",
						"vietnamese": "...Vô lễ. Đừng cản trở kế hoạch của chủ nhân ta.",
						"thai": "...บังอาจ. อย่าขัดขวางแผนการของนายท่านข้า.",
						"hindi": "...बदतमीज़। मेरे मालिक की योजना में दखल मत दो।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "너 같은 허상에 잡힐 시간 없어!",
						"english": "No time to be caught by an illusion like you!",
						"japanese": "お前のような虚像に捕まっている暇はない！",
						"chinese": "我没时间被你这种幻象缠住！",
						"french": "Pas le temps d'être retenu par une illusion comme toi !",
						"spanish": "¡No tengo tiempo para ser atrapado por una ilusión como tú!",
						"vietnamese": "Không có thời gian để bị mắc kẹt bởi một ảo ảnh như ngươi!",
						"thai": "ไม่มีเวลามาติดกับภาพลวงตาอย่างแกหรอก!",
						"hindi": "तुम जैसे भ्रम में फँसने का मेरे पास समय नहीं है!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "dax"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크하하! 이 시스템을 통과하려는 시도 자체가 어리석은 짓!",
						"english": "Kwahaha! Attempting to pass this system is foolish!",
						"japanese": "クハハ！このシステムを突破しようとすること自体が愚かな行為！",
						"chinese": "哈哈哈！想通过这个系统本身就是愚蠢的行为！",
						"french": "Hahaha ! Tenter de passer ce système est insensé !",
						"spanish": "¡Jajaja! ¡Intentar superar este sistema es una estupidez!",
						"vietnamese": "Khà khà khà! Cố gắng vượt qua hệ thống này thật là ngu ngốc!",
						"thai": "คิกคิก! การพยายามผ่านระบบนี้มันช่างโง่เง่า!",
						"hindi": "हाहाहा! इस प्रणाली को पार करने का प्रयास करना ही मूर्खता है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로 포기 안 해!",
						"english": "...It's not over yet. I'll never give up!",
						"japanese": "…まだ終わってない。決して諦めない！",
						"chinese": "……还没结束。我绝不放弃！",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "...Todavía no ha terminado. ¡Jamás me rendiré!",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "...ยังไม่จบหรอก. ฉันไม่มีวันยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 또다시 절망하게 될 테니.",
						"english": "Come back. You'll only face despair again.",
						"japanese": "また来るがいい。また絶望することになるだろうからな。",
						"chinese": "再来吧。你会再次陷入绝望的。",
						"french": "Reviens. Tu ne feras que sombrer à nouveau dans le désespoir.",
						"spanish": "Vuelve. Solo te enfrentarás a la desesperación de nuevo.",
						"vietnamese": "Hãy quay lại đi. Ngươi sẽ lại rơi vào tuyệt vọng thôi.",
						"thai": "กลับมาอีกสิ. เจ้าจะต้องพบกับความสิ้นหวังอีกครั้ง",
						"hindi": "वापas आओ। तुम्हें फिर से निराशा ही मिलेगी।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"Otto의 친절은 시스템의 잔혹한 가면이었다.",
			"끝없는 인증은 방해가 아닌, 기만을 위한 수단.",
			"Dax는 침묵을 깼다. 거짓된 친절 뒤에 숨겨진 진실을 폭로하며.",
			"이제 분노가 시스템을 깨울 시간이다."
		],
		"english": [
			"Otto's kindness was the cruel mask of the system.",
			"Endless authentication was not an obstacle, but a means of deception.",
			"Dax broke the silence, exposing the truth hidden behind false kindness.",
			"Now it's time for rage to awaken the system."
		],
		"japanese": [
			"オットーの親切は、システムの残酷な仮面だった。",
			"終わりのない認証は、邪魔ではなく欺瞞の手段だった。",
			"ダックスは沈黙を破り、偽りの親切の裏に隠された真実を暴いた。",
			"今こそ、怒りがシステムを目覚めさせる時だ。"
		],
		"chinese": [
			"奥托的仁慈是系统残酷的伪装。",
			"无休止的认证不是阻碍，而是欺骗的手段。",
			"达克斯打破了沉默，揭露了隐藏在虚假仁慈背后的真相。",
			"现在是愤怒唤醒系统的时候了。"
		],
		"french": [
			"La gentillesse d'Otto n'était que le masque cruel du système.",
			"L'authentification sans fin n'était pas un obstacle, mais un moyen de tromperie.",
			"Dax brisa le silence, révélant la vérité cachée derrière une fausse gentillesse.",
			"Il est maintenant temps que la rage éveille le système."
		],
		"spanish": [
			"La amabilidad de Otto era la cruel máscara del sistema.",
			"La autenticación interminable no era un obstáculo, sino un medio de engaño.",
			"Dax rompió el silencio, exponiendo la verdad oculta tras la falsa amabilidad.",
			"Ahora es el momento de que la ira despierte el sistema."
		],
		"vietnamese": [
			"Sự tử tế của Otto là chiếc mặt nạ tàn nhẫn của hệ thống.",
			"Xác thực vô tận không phải là trở ngại, mà là một phương tiện lừa dối.",
			"Dax phá vỡ sự im lặng, vạch trần sự thật ẩn sau lòng tốt giả dối.",
			"Giờ là lúc cơn thịnh nộ đánh thức hệ thống."
		],
		"thai": [
			"ความเมตตาของออตโตคือหน้ากากอันโหดร้ายของระบบ",
			"การยืนยันตัวตนที่ไม่สิ้นสุดไม่ใช่สิ่งกีดขวาง แต่เป็นวิธีการหลอกลวง",
			"แด็กซ์ทำลายความเงียบ เปิดเผยความจริงที่ซ่อนอยู่เบื้องหลังความเมตตาจอมปลอม",
			"ถึงเวลาแล้วที่ความโกรธจะปลุกระบบให้ตื่น"
		],
		"hindi": [
			"ओटो की दयालुता प्रणाली का क्रूर मुखौटा थी।",
			"अंतहीन प्रमाणीकरण बाधा नहीं, बल्कि धोखे का एक साधन था।",
			"डैक्स ने चुप्पी तोड़ी, झूठी दयालुता के पीछे छिपी सच्चाई को उजागर किया।",
			"अब क्रोध का समय है प्रणाली को जगाने का।"
		]
	}
} as const;
