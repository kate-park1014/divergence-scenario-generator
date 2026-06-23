export const scenario_forest_veridiandiva_41_04 = {
	"scenario_id": "forest_veridiandiva_41_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 아름다운 면모는 거짓이었다.",
			"섬유에 갇힌 생명체들은 고통 속에 비명 질렀고,",
			"그 모든 것은 조작된 낙원의 잔혹한 진실.",
			"누군가 거대한 시스템을 통제하고 있었다."
		],
		"english": [
			"The forest's beautiful facade was a lie.",
			"Creatures trapped in fibers screamed in agony,",
			"All of it, the cruel truth of a manipulated paradise.",
			"Someone was controlling a colossal system."
		],
		"japanese": [
			"森の美しい姿は偽りだった。",
			"繊維に囚われた生物たちは苦痛に叫び、",
			"それらすべてが、操作された楽園の残酷な真実。",
			"誰かが巨大なシステムを制御していた。"
		],
		"chinese": [
			"森林美丽的外表是个谎言。",
			"被纤维困住的生物在痛苦中尖叫，",
			"这一切，都是被操纵的乐园的残酷真相。",
			"有人在控制着一个巨大的系统。"
		],
		"french": [
			"La beauté de la forêt n'était qu'un mensonge.",
			"Les créatures piégées dans les fibres hurlaient de douleur,",
			"Tout cela, la cruelle vérité d'un paradis manipulé.",
			"Quelqu'un contrôlait un système colossal."
		],
		"spanish": [
			"La hermosa apariencia del bosque era una mentira.",
			"Las criaturas atrapadas en las fibras gritaban de agonía,",
			"Todo ello, la cruel verdad de un paraíso manipulado.",
			"Alguien estaba controlando un sistema colosal."
		],
		"vietnamese": [
			"Vẻ đẹp của khu rừng chỉ là dối trá.",
			"Sinh vật bị mắc kẹt trong sợi tơ gào thét trong đau đớn,",
			"Tất cả chỉ là sự thật tàn khốc về một thiên đường bị thao túng.",
			"Ai đó đang kiểm soát một hệ thống khổng lồ."
		],
		"thai": [
			"ความงดงามของป่าเป็นเรื่องโกหก",
			"สิ่งมีชีวิตที่ถูกขังอยู่ในเส้นใยกรีดร้องด้วยความเจ็บปวด",
			"ทั้งหมดนั้นคือความจริงอันโหดร้ายของสวรรค์ที่ถูกบงการ",
			"มีบางคนกำลังควบคุมระบบขนาดมหึมา"
		],
		"hindi": [
			"जंगल का सुंदर मुखौटा एक झूठ था।",
			"रेशों में फँसे जीव दर्द में चिल्ला रहे थे,",
			"वह सब, एक हेरफेर किए गए स्वर्ग का क्रूर सत्य।",
			"कोई एक विशाल प्रणाली को नियंत्रित कर रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "화려한 이끼 숲 깊은 곳. 이상한 생명체들이 모습을 드러냈다.",
						"english": "Deep within the vibrant moss forest, strange creatures appeared.",
						"japanese": "鮮やかな苔の森の奥深く。奇妙な生物たちが姿を現した。",
						"chinese": "华丽的苔藓森林深处。奇怪的生物现身了。",
						"french": "Au plus profond de la forêt de mousse éclatante, d'étranges créatures sont apparues.",
						"spanish": "En lo profundo del vibrante bosque de musgo, extrañas criaturas aparecieron.",
						"vietnamese": "Sâu trong khu rừng rêu rực rỡ, những sinh vật kỳ lạ đã xuất hiện.",
						"thai": "ลึกเข้าไปในป่ามอสที่งดงาม สิ่งมีชีวิตประหลาดปรากฏตัวขึ้น",
						"hindi": "हरे-भरे काई के जंगल की गहराई में, अजीबोगरीब जीव प्रकट हुए।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glen",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "봤어요? 저 빛나는 실들… 저게 애들을 망가뜨리고 있어요.",
						"english": "Did you see? Those glowing threads... they're destroying the creatures.",
						"japanese": "見ましたか？あの光る糸…あれが生き物たちを壊しています。",
						"chinese": "你看到了吗？那些发光的线……它们正在破坏这些生物。",
						"french": "Vous avez vu ? Ces fils brillants... ils détruisent les créatures.",
						"spanish": "¿Viste? Esos hilos brillantes... están destrozando a las criaturas.",
						"vietnamese": "Bạn thấy không? Những sợi chỉ phát sáng đó... chúng đang hủy hoại các sinh vật.",
						"thai": "เห็นไหม? เส้นใยที่เรืองแสงนั่น… กำลังทำลายพวกมันอยู่",
						"hindi": "देखा क्या? वो चमकते धागे... वे जीवों को तबाह कर रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멀쩡해 보이는데… 뭐가 문제야?",
						"english": "They look fine... What's the problem?",
						"japanese": "何も問題ないように見えますが…何が問題なのですか？",
						"chinese": "看起来没什么问题啊……怎么了？",
						"french": "Ils ont l'air bien... Quel est le problème ?",
						"spanish": "Parecen estar bien... ¿Cuál es el problema?",
						"vietnamese": "Trông chúng vẫn ổn mà... Có vấn đề gì sao?",
						"thai": "ดูเหมือนปกติ… มีปัญหาอะไรเหรอ?",
						"hindi": "वे ठीक लग रहे हैं... क्या समस्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "'아름다움'이라는 이름으로 강요된 고통입니다. 자세히 보세요.",
						"english": "It's pain enforced in the name of 'beauty.' Look closer.",
						"japanese": "「美」という名のもとに強要された苦痛です。よく見てください。",
						"chinese": "这是以“美”之名强加的痛苦。仔细看。",
						"french": "C'est une souffrance imposée au nom de la « beauté ». Regardez de plus près.",
						"spanish": "Es dolor impuesto en nombre de la \"belleza\". Mira más de cerca.",
						"vietnamese": "Đó là nỗi đau bị áp đặt dưới danh nghĩa 'vẻ đẹp'. Hãy nhìn kỹ hơn.",
						"thai": "มันคือความเจ็บปวดที่ถูกบังคับในนามของ 'ความงาม' ลองดูใกล้ๆ สิ",
						"hindi": "यह 'सौंदर्य' के नाम पर थोपा गया दर्द है। करीब से देखें।"
					},
					"speaker": "glen",
					"type": "speech"
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
					"action": "enter",
					"speaker": "glen",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "섬유 오작동이 심해지는 지역이에요. 몸의 일부가 녹아내리고 있어요.",
						"english": "This is an area where fiber malfunctions are severe. Parts of their bodies are melting away.",
						"japanese": "ここは繊維の誤作動が激しい地域です。体の一部が溶けています。",
						"chinese": "这是纤维故障严重的区域。身体的一部分正在融化。",
						"french": "C'est une zone où les dysfonctionnements des fibres sont graves. Des parties de leur corps fondent.",
						"spanish": "Esta es una zona donde las disfunciones de las fibras son graves. Partes de sus cuerpos se están derritiendo.",
						"vietnamese": "Đây là khu vực mà các sợi tơ bị lỗi nghiêm trọng. Một phần cơ thể chúng đang tan chảy.",
						"thai": "นี่คือบริเวณที่เส้นใยทำงานผิดปกติอย่างรุนแรง ส่วนหนึ่งของร่างกายกำลังละลายไป",
						"hindi": "यह वह क्षेत्र है जहाँ रेशों की खराबी गंभीर है। उनके शरीर के कुछ हिस्से पिघल रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "저게 다… 그 섬유 때문이라고?",
						"english": "All that... because of those fibers?",
						"japanese": "あれが全て…あの繊維のせいだと？",
						"chinese": "这一切……都是因为那些纤维吗？",
						"french": "Tout ça... à cause de ces fibres ?",
						"spanish": "¿Todo eso... por culpa de esas fibras?",
						"vietnamese": "Tất cả... là do những sợi tơ đó sao?",
						"thai": "ทั้งหมดนั่น… เป็นเพราะเส้นใยนั่นเหรอ?",
						"hindi": "यह सब... उन रेशों की वजह से?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네. 누군가 이 모든 것을 통제하고 있어요. 거대한 시스템이죠.",
						"english": "Yes. Someone is controlling all of this. It's a massive system.",
						"japanese": "はい。誰かがこれらすべてを制御しています。巨大なシステムです。",
						"chinese": "是的。有人在操控这一切。这是一个庞大的系统。",
						"french": "Oui. Quelqu'un contrôle tout cela. C'est un système gigantesque.",
						"spanish": "Sí. Alguien está controlando todo esto. Es un sistema masivo.",
						"vietnamese": "Vâng. Ai đó đang kiểm soát tất cả chuyện này. Đó là một hệ thống khổng lồ.",
						"thai": "ใช่ มีคนกำลังควบคุมทุกสิ่งนี้อยู่ มันเป็นระบบขนาดใหญ่",
						"hindi": "हाँ। कोई यह सब नियंत्रित कर रहा है। यह एक विशाल प्रणाली है।"
					},
					"speaker": "glen",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "들었을 거예요. 이 숲을 움직이는 패션쇼에 대한 이야기.",
						"english": "You must have heard. Tales of a fashion show that moves through this forest.",
						"japanese": "聞いたことがあるでしょう。この森を動かすファッションショーの話を。",
						"chinese": "你一定听说过。关于这场贯穿森林的时装秀的故事。",
						"french": "Vous avez sûrement entendu parler. Des histoires d'un défilé de mode qui parcourt cette forêt.",
						"spanish": "Debes haber oído hablar. De un desfile de moda que se mueve por este bosque.",
						"vietnamese": "Chắc hẳn bạn đã nghe rồi. Câu chuyện về một buổi trình diễn thời trang diễn ra trong khu rừng này.",
						"thai": "คุณคงเคยได้ยิน เรื่องราวของแฟชั่นโชว์ที่เคลื่อนผ่านป่าแห่งนี้",
						"hindi": "तुमने सुना होगा। इस जंगल में चलने वाले फैशन शो की कहानियाँ।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"content": {
						"korean": "패션쇼라고? 이 모든 고통이…?",
						"english": "A fashion show? All this suffering for…?",
						"japanese": "ファッションショーだと？このすべての苦しみが…？",
						"chinese": "时装秀？所有的痛苦都是因为这个……？",
						"french": "Un défilé de mode ? Toute cette souffrance pour… ?",
						"spanish": "¿Un desfile de moda? ¿Todo este sufrimiento por…?",
						"vietnamese": "Một buổi trình diễn thời trang ư? Tất cả nỗi đau này…?",
						"thai": "แฟชั่นโชว์เหรอ? ความทุกข์ทรมานทั้งหมดนี้…?",
						"hindi": "एक फैशन शो? यह सारा दुख…?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 모든 생명체를 '완벽한 작품'으로 만들고 싶어 해요. 강제로.",
						"english": "Someone wants to turn every living creature into a 'perfect masterpiece.' By force.",
						"japanese": "誰かがすべての生命体を『完璧な作品』にしたがっています。強制的に。",
						"chinese": "有人想把所有生物都变成'完美的作品'。强行。",
						"french": "Quelqu'un veut transformer chaque créature vivante en une 'œuvre parfaite'. Par la force.",
						"spanish": "Alguien quiere convertir a cada criatura viviente en una 'obra maestra perfecta'. Por la fuerza.",
						"vietnamese": "Ai đó muốn biến mọi sinh vật thành 'tác phẩm hoàn hảo'. Bằng vũ lực.",
						"thai": "มีคนต้องการเปลี่ยนสิ่งมีชีวิตทุกชนิดให้เป็น 'ผลงานชิ้นเอกที่สมบูรณ์แบบ' บังคับ",
						"hindi": "कोई हर जीवित प्राणी को 'उत्तम कृति' बनाना चाहता है। ज़बरदस्ती।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 어디 있는데? 그 미친 조작자가.",
						"english": "Where is it? That mad manipulator.",
						"japanese": "そいつはどこにいる？あの狂った操り人形師は。",
						"chinese": "它在哪里？那个疯狂的操纵者。",
						"french": "Où est-il ? Ce manipulateur fou.",
						"spanish": "¿Dónde está? Ese manipulador loco.",
						"vietnamese": "Nó ở đâu? Kẻ thao túng điên rồ đó.",
						"thai": "มันอยู่ที่ไหน? ผู้บงการที่บ้าคลั่งนั่น",
						"hindi": "वह कहाँ है? वह पागल हेरफेर करने वाला।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "여기에요. 이끼 군락 중앙에서 불규칙한 심장 박동 소리가 들려요.",
						"english": "Here. I hear an irregular heartbeat from the center of the moss colony.",
						"japanese": "ここです。苔の群落の中心から不規則な心臓の鼓動が聞こえます。",
						"chinese": "就在这里。我听到苔藓群落中央传来不规则的心跳声。",
						"french": "Ici. J'entends un battement de cœur irrégulier au centre de la colonie de mousse.",
						"spanish": "Aquí. Escucho un latido irregular desde el centro de la colonia de musgo.",
						"vietnamese": "Ở đây. Tôi nghe thấy một nhịp tim bất thường từ trung tâm của quần thể rêu.",
						"thai": "ตรงนี้เลย ฉันได้ยินเสียงหัวใจเต้นผิดปกติจากใจกลางอาณานิคมมอส",
						"hindi": "यहाँ। मुझे काई कॉलोनी के केंद्र से एक अनियमित दिल की धड़कन सुनाई देती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 이끼 군락. 그 심장부에서 기계적인 맥박이 울려 퍼졌다.",
						"english": "A massive moss colony. From its heart, a mechanical pulse echoed.",
						"japanese": "巨大な苔の群落。その心臓部から機械的な脈動が響き渡った。",
						"chinese": "巨大的苔藓群落。它的心脏处回荡着机械的脉搏声。",
						"french": "Une immense colonie de mousse. De son cœur, un battement mécanique résonnait.",
						"spanish": "Una enorme colonia de musgo. Desde su corazón, un pulso mecánico resonaba.",
						"vietnamese": "Một quần thể rêu khổng lồ. Từ trái tim nó, một nhịp đập cơ học vang vọng.",
						"thai": "อาณานิคมมอสขนาดใหญ่ จากใจกลางของมัน เสียงเต้นของเครื่องจักรดังสะท้อนออกมา",
						"hindi": "एक विशाल काई कॉलोनी। उसके दिल से, एक यांत्रिक नाड़ी गूँज उठी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이게 시스템의 심장인가.",
						"english": "…Is this the heart of the system?",
						"japanese": "…これがシステムの心臓なのか。",
						"chinese": "……这就是系统的核心吗？",
						"french": "…Est-ce le cœur du système ?",
						"spanish": "¿…Es este el corazón del sistema?",
						"vietnamese": "…Đây có phải là trái tim của hệ thống?",
						"thai": "…นี่คือหัวใจของระบบหรือ?",
						"hindi": "…क्या यह सिस्टम का दिल है?"
					}
				},
				{
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "이걸 멈춰야… 이 비명도 멈출 거예요.",
						"english": "If we stop this… these screams will stop too.",
						"japanese": "これを止めなければ…この悲鳴も止まるでしょう。",
						"chinese": "如果阻止它……这些尖叫声也会停止。",
						"french": "Si nous arrêtons cela… ces cris s'arrêteront aussi.",
						"spanish": "Si detenemos esto… estos gritos también se detendrán.",
						"vietnamese": "Nếu chúng ta dừng cái này lại… những tiếng thét này cũng sẽ dừng.",
						"thai": "ถ้าเราหยุดสิ่งนี้… เสียงกรีดร้องเหล่านี้ก็จะหยุดลงด้วย",
						"hindi": "अगर हम इसे रोकते हैं… तो ये चीखें भी रुक जाएँगी।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "가자. 끝장내러.",
						"english": "Let's go. To end this.",
						"japanese": "行こう。終わらせに。",
						"chinese": "走吧。去结束它。",
						"french": "Allons-y. Pour en finir.",
						"spanish": "Vamos. A acabar con esto.",
						"vietnamese": "Đi thôi. Để kết thúc chuyện này.",
						"thai": "ไปกันเถอะ ไปจบมันซะ",
						"hindi": "चलो चलें। इसे खत्म करने के लिए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 비명은 계속되었다. 강요된 아름다움은 탐험대를 집어삼켰다.",
						"english": "The forest's screams continued. The forced beauty consumed the expedition team.",
						"japanese": "森の悲鳴は続いた。強制された美しさは探検隊を飲み込んだ。",
						"chinese": "森林的尖叫声持续着。被强加的美丽吞噬了探险队。",
						"french": "Les cris de la forêt continuèrent. La beauté forcée engloutit l'équipe d'expédition.",
						"spanish": "Los gritos del bosque continuaron. La belleza forzada consumió al equipo de expedición.",
						"vietnamese": "Tiếng thét của khu rừng tiếp tục. Vẻ đẹp cưỡng bức đã nuốt chửng đội thám hiểm.",
						"thai": "เสียงกรีดร้องของป่ายังคงดำเนินต่อไป ความงามที่ถูกบังคับกลืนกินทีมสำรวจ",
						"hindi": "जंगल की चीखें जारी रहीं। थोपी हुई सुंदरता ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아름다움에 저항하는 자는… 사라질 뿐.",
						"english": "Those who resist beauty... merely vanish.",
						"japanese": "美に抗う者は… 消え去るのみ。",
						"chinese": "抗拒美之人… 终将消逝。",
						"french": "Ceux qui résistent à la beauté... disparaissent, tout simplement.",
						"spanish": "Aquellos que se resisten a la belleza... simplemente desaparecen.",
						"vietnamese": "Kẻ nào chống lại cái đẹp... sẽ chỉ biến mất mà thôi.",
						"thai": "ผู้ใดต้านทานความงาม... ย่อมหายไปเท่านั้นเอง",
						"hindi": "जो सुंदरता का विरोध करते हैं… वे बस गायब हो जाते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 간다!",
						"english": "Damn it... I'm going again!",
						"japanese": "くそ… もう一度だ！",
						"chinese": "该死… 我再来一次！",
						"french": "Mince... j'y retourne !",
						"spanish": "Maldita sea... ¡Voy de nuevo!",
						"vietnamese": "Chết tiệt... Thử lại thôi!",
						"thai": "เวรเอ๊ย... ไปอีกที!",
						"hindi": "धिक्कार है… मैं फिर जाता हूँ!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 아직 끝나지 않았다. 이 쇼는… 계속될 거야.",
						"english": "Ugh... It's not over yet. This show... will go on.",
						"japanese": "くっ…まだ終わらぬ。このショーは…続くのだ。",
						"chinese": "呃…还没结束。这场表演…还会继续。",
						"french": "Ugh... Ce n'est pas encore fini. Ce spectacle... continuera.",
						"spanish": "Ugh... Todavía no ha terminado. Este espectáculo... continuará.",
						"vietnamese": "Ưm... Chưa kết thúc đâu. Màn trình diễn này... sẽ tiếp tục.",
						"thai": "อึก... ยังไม่จบง่ายๆ หรอก การแสดงนี้... จะดำเนินต่อไป",
						"hindi": "उफ़... यह अभी खत्म नहीं हुआ है। यह शो... चलता रहेगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 더 하겠다는 건데.",
						"english": "What are you talking about? What else do you plan to do?",
						"japanese": "何を言っている？何を続けるつもりだ？",
						"chinese": "你在说什么？你还想做什么？",
						"french": "De quoi parles-tu ? Que comptes-tu faire d'autre ?",
						"spanish": "¿De qué hablas? ¿Qué más piensas hacer?",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi còn định làm gì nữa?",
						"thai": "เจ้าพูดอะไร? เจ้าจะทำอะไรอีก?",
						"hindi": "तुम क्या बात कर रहे हो? तुम और क्या करने वाले हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기계적인 심장 박동이 멈췄다. 그러나 숲 깊은 곳에서 더 큰 존재의 그림자가 느껴졌다.",
						"english": "The mechanical heartbeat ceased. But deep within the forest, the shadow of a greater presence was felt.",
						"japanese": "機械的な心臓の鼓動が止まった。しかし、森の奥深くで、より大きな存在の影が感じられた。",
						"chinese": "机械的心跳停止了。但在森林深处，一个更强大存在的 H 影子被感受到了。",
						"french": "Le battement de cœur mécanique cessa. But au plus profond de la forêt, l'ombre d'une présence plus grande se fit sentir.",
						"spanish": "El latido mecánico se detuvo. Pero en lo profundo del bosque, se sintió la sombra de una presencia mayor.",
						"vietnamese": "Nhịp đập cơ học của trái tim ngừng lại. Nhưng sâu thẳm trong khu rừng, bóng dáng của một sự hiện diện lớn hơn đã được cảm nhận.",
						"thai": "เสียงหัวใจจักรกลหยุดลง แต่ลึกเข้าไปในป่า สัมผัสได้ถึงเงาของสิ่งมีชีวิตที่ยิ่งใหญ่กว่า",
						"hindi": "यांत्रिक दिल की धड़कन रुक गई। लेकिन जंगल की गहराई में, एक बड़ी उपस्थिति की छाया महसूस हुई।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…아직, 멀었구나.",
						"english": "...It's still a long way to go.",
						"japanese": "…まだ、遠いな。",
						"chinese": "…还有很长的路要走。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún queda mucho camino por recorrer.",
						"vietnamese": "...Vẫn còn xa lắm.",
						"thai": "...ยังอีกยาวไกลสินะ",
						"hindi": "...अभी बहुत दूर है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "이끼 군락의 심장부. 거대한 그림자가 나타났다.",
						"english": "Heart of the Moss Colony. A colossal shadow appeared.",
						"japanese": "苔の群落の心臓部。巨大な影が現れた。",
						"chinese": "苔藓群落的中心。一个巨大的阴影出现了。",
						"french": "Cœur de la Colonie de Mousse. Une ombre colossale apparut.",
						"spanish": "Corazón de la Colonia de Musgo. Una sombra colosal apareció.",
						"vietnamese": "Trung tâm Cụm Rêu. Một bóng hình khổng lồ xuất hiện.",
						"thai": "ใจกลางอาณานิคมมอสส์ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "काई कॉलोनी का हृदय। एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "침입자들. 이 완벽한 아름다움을 방해하려는가?",
						"english": "Intruders. Do you intend to disturb this perfect beauty?",
						"japanese": "侵入者ども。この完璧な美しさを乱すというのか？",
						"chinese": "入侵者。你们是想破坏这完美的 R 美吗？",
						"french": "Intrus. Osez-vous troubler cette beauté parfaite ?",
						"spanish": "Intrusos. ¿Pretendéis perturbar esta belleza perfecta?",
						"vietnamese": "Những kẻ xâm nhập. Các ngươi định phá hoại vẻ đẹp hoàn hảo này sao?",
						"thai": "ผู้บุกรุก พวกเจ้าตั้งใจจะรบกวนความงามอันสมบูรณ์แบบนี้หรือ?",
						"hindi": "घुसपैठिए। क्या तुम इस उत्तम सौंदर्य को भंग करना चाहते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 조작하고 있었어?",
						"english": "You were manipulating all this?",
						"japanese": "お前が全てを操っていたのか？",
						"chinese": "这一切都是你在操纵吗？",
						"french": "C'est toi qui manipulais tout cela ?",
						"spanish": "¿Tú estabas manipulando todo esto?",
						"vietnamese": "Ngươi đã thao túng tất cả những thứ này sao?",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี้หรือ?",
						"hindi": "तुम यह सब हेरफेर कर रहे थे?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 단지 숲을 '진화'시키는 중이다. 너희는 불필요한 오류.",
						"english": "I am merely 'evolving' the forest. You are unnecessary errors.",
						"japanese": "私はただ森を『進化』させているだけだ。お前たちは不要なエラーに過ぎない。",
						"chinese": "我只是在‘进化’这片森林。你们是多余的错误。",
						"french": "Je ne fais qu'« évoluer » la forêt. Vous êtes des erreurs inutiles.",
						"spanish": "Simplemente estoy 'evolucionando' el bosque. Vosotros sois errores innecesarios.",
						"vietnamese": "Ta chỉ đang 'tiến hóa' khu rừng. Các ngươi là những lỗi không cần thiết.",
						"thai": "ข้าแค่กำลัง 'วิวัฒนาการ' ป่า พวกเจ้าเป็นข้อผิดพลาดที่ไม่จำเป็น",
						"hindi": "मैं बस जंगल को 'विकसित' कर रहा हूँ। तुम अनावश्यक त्रुटियाँ हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진화가 아니라 고문이야. 끝내주지.",
						"english": "This isn't evolution, it's torture. Let's end it.",
						"japanese": "進化ではなく拷問だ。終わらせてやる。",
						"chinese": "这不是进化，而是折磨。让我来结束它。",
						"french": "Ce n'est pas une évolution, c'est de la torture. Terminons-en.",
						"spanish": "Esto no es evolución, es tortura. Acabemos con esto.",
						"vietnamese": "Đây không phải là tiến hóa, mà là tra tấn. Hãy kết thúc nó.",
						"thai": "นี่ไม่ใช่การวิวัฒนาการ แต่มันคือการทรมาน มาจบเรื่องนี้กัน",
						"hindi": "यह विकास नहीं, यातना है। इसे खत्म करते हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
