export const scenario_hell_doomthread_29_04 = {
	"scenario_id": "hell_doomthread_29_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "훈련 시설의 복도는 차가운 금속으로 빛났다. 정적만이 흐르는 곳이었다.",
						"english": "The training facility's corridor gleamed with cold metal. Only silence flowed there.",
						"japanese": "訓練施設の廊下は冷たい金属で輝いていた。静寂だけが流れる場所だった。",
						"chinese": "训练设施的走廊闪烁着冰冷的金属光泽。那里只有寂静。",
						"french": "Le couloir du centre d'entraînement brillait d'un métal froid. Seul le silence y régnait.",
						"spanish": "El pasillo de las instalaciones de entrenamiento brillaba con metal frío. Solo el silencio fluía allí.",
						"vietnamese": "Hành lang của cơ sở huấn luyện sáng lên với kim loại lạnh. Chỉ có sự tĩnh lặng bao trùm.",
						"thai": "โถงทางเดินของสถานีฝึกอบรมส่องประกายด้วยโลหะเย็น เป็นสถานที่ที่มีแต่ความเงียบงัน",
						"hindi": "प्रशिक्षण सुविधा का गलियारा ठंडे धातु से चमक रहा था। वहाँ केवल सन्नाटा पसरा था।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "왔군. 내 '대리인'을 소개하지.",
						"english": "You've arrived. Allow me to introduce my 'proxy'.",
						"japanese": "来たな。私の「代理人」を紹介しよう。",
						"chinese": "你来了。让我介绍我的“代理人”。",
						"french": "Vous êtes arrivé. Permettez-moi de vous présenter mon 'proxy'.",
						"spanish": "Has llegado. Permíteme presentarte a mi 'sustituto'.",
						"vietnamese": "Ngươi đã đến. Để ta giới thiệu 'đại diện' của ta.",
						"thai": "มาแล้วสินะ ขอแนะนำ 'ตัวแทน' ของฉัน",
						"hindi": "तुम आ गए। मैं अपने 'प्रतिनिधि' का परिचय कराता हूँ।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대리인?",
						"english": "Proxy?",
						"japanese": "代理人？",
						"chinese": "代理人？",
						"french": "Un proxy ?",
						"spanish": "¿Sustituto?",
						"vietnamese": "Đại diện?",
						"thai": "ตัวแทน?",
						"hindi": "प्रतिनिधि?"
					},
					"emotion": "base"
				},
				{
					"speaker": "soot",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "과거의 과오를 완벽하게 속죄하는 존재. 나보다 훨씬 잘해내지.",
						"english": "A being that perfectly atones for past wrongs. It does it much better than I do.",
						"japanese": "過去の過ちを完璧に贖罪する存在。私よりもずっと上手くやってのける。",
						"chinese": "一个能完美赎罪过去错误的存在。它做得比我好得多。",
						"french": "Un être qui expie parfaitement les erreurs passées. Il y arrive bien mieux que moi.",
						"spanish": "Un ser que expía perfectamente los errores pasados. Lo hace mucho mejor que yo.",
						"vietnamese": "Một thực thể hoàn hảo để chuộc lại những lỗi lầm trong quá khứ. Nó làm tốt hơn tôi nhiều.",
						"thai": "สิ่งมีชีวิตที่ชดใช้ความผิดในอดีตได้อย่างสมบูรณ์แบบ มันทำได้ดีกว่าฉันมาก",
						"hindi": "एक ऐसा प्राणी जो अतीत की गलतियों का पूरी तरह से प्रायश्चित करता है। यह मुझसे कहीं बेहतर करता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "soot",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "내 대리인을 봐. 얼마나 깔끔하게 죄를 청산하는지.",
						"english": "Look at my proxy. See how cleanly it absolves sins.",
						"japanese": "私の代理人を見てみろ。いかに見事に罪を清算するか。",
						"chinese": "看看我的代理人。看它多么干净利落地清除罪孽。",
						"french": "Regardez mon proxy. Voyez avec quelle propreté il absout les péchés.",
						"spanish": "Mira a mi sustituto. Mira con qué limpieza absuelve los pecados.",
						"vietnamese": "Hãy nhìn đại diện của tôi. Xem nó thanh toán tội lỗi gọn gàng thế nào.",
						"thai": "ดูตัวแทนของฉันสิ ดูสิว่ามันชำระบาปได้สะอาดแค่ไหน",
						"hindi": "मेरे प्रतिनिधि को देखो। देखो यह कितनी सफाई से पापों का प्रायश्चित करता है।"
					},
					"type": "speech",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "…그게 그렇게 중요한가요?",
						"english": "...Is that really so important?",
						"japanese": "…それがそんなに重要ですか？",
						"chinese": "…那有那么重要吗？",
						"french": "...Est-ce si important ?",
						"spanish": "...¿Eso es tan importante?",
						"vietnamese": "...Điều đó có quan trọng đến thế không?",
						"thai": "...นั่นสำคัญขนาดนั้นเลยเหรอ?",
						"hindi": "...क्या यह इतना महत्वपूर्ण है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "soot",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "물론이지! 나였으면 또 망쳤을 거야. 이젠 아니지만.",
						"english": "Of course! I would've messed it up again. Not anymore, though.",
						"japanese": "もちろん！また台無しにするところだった。もう違うけどね。",
						"chinese": "当然！我差点又搞砸了。不过现在不会了。",
						"french": "Bien sûr ! J'aurais encore tout gâché. Mais plus maintenant.",
						"spanish": "¡Claro! Yo lo habría arruinado de nuevo. Aunque ya no.",
						"vietnamese": "Tất nhiên rồi! Tôi đã suýt làm hỏng lần nữa. Nhưng giờ thì không.",
						"thai": "แน่นอน! ฉันเกือบจะทำมันพังอีกแล้ว แต่ตอนนี้ไม่เป็นไรแล้ว",
						"hindi": "ज़रूर! मैं इसे फिर से बिगाड़ देता। पर अब नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "진정한 속죄가 아닐 수도 있잖아요.",
						"english": "But it might not be true atonement.",
						"japanese": "それは本当の償いではないかもしれません。",
						"chinese": "但这可能不是真正的赎罪。",
						"french": "Mais ce n'est peut-être pas une vraie rédemption.",
						"spanish": "Pero quizás no sea una verdadera expiación.",
						"vietnamese": "Nhưng đó có thể không phải là sự chuộc tội thực sự.",
						"thai": "แต่นั่นอาจไม่ใช่การชดใช้ที่แท้จริง",
						"hindi": "पर ये सच्ची तपस्या नहीं हो सकती।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "시끄러워. 시스템은 완벽해. 이래야 진정한 평화가 오는 거야.",
						"english": "Quiet. The system is perfect. This is how true peace comes.",
						"japanese": "静かにしろ。システムは完璧だ。こうしてこそ真の平和が訪れるんだ。",
						"chinese": "闭嘴。系统是完美的。真正的和平就是这样实现的。",
						"french": "Silence. Le système est parfait. C'est ainsi que la vraie paix arrive.",
						"spanish": "Cállate. El sistema es perfecto. Así es como llega la verdadera paz.",
						"vietnamese": "Im đi. Hệ thống hoàn hảo. Đây mới là cách bình yên thực sự đến.",
						"thai": "เงียบไปเลย ระบบมันสมบูรณ์แบบ นี่แหละคือหนทางสู่สันติสุขที่แท้จริง",
						"hindi": "चुप रहो। सिस्टम परफेक्ट है। ऐसे ही सच्ची शांति आती है।"
					},
					"emotion": "angry"
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "soot"
				},
				{
					"speaker": "soot",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "내 대리인은 후회도 없어. 오직 시스템이 정한 완벽한 갱생만 있지.",
						"english": "My proxy feels no regret. Only the perfect rehabilitation set by the system.",
						"japanese": "私の代理人に後悔はない。システムが定めた完璧な更生があるだけだ。",
						"chinese": "我的代理人没有后悔。只有系统设定的完美再生。",
						"french": "Mon mandataire n'a aucun regret. Seulement la réhabilitation parfaite définie par le système.",
						"spanish": "Mi representante no siente arrepentimiento. Solo la rehabilitación perfecta establecida por el sistema.",
						"vietnamese": "Người đại diện của tôi không hối tiếc. Chỉ có sự tái tạo hoàn hảo do hệ thống đặt ra.",
						"thai": "ตัวแทนของฉันไม่มีความเสียใจ มีแต่การฟื้นฟูที่สมบูรณ์แบบตามที่ระบบกำหนดไว้เท่านั้น",
						"hindi": "मेरे प्रॉक्सी को कोई अफ़सोस नहीं है। सिर्फ़ सिस्टम द्वारा तय किया गया परफेक्ट पुनर्वास है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게… 사람인가요?",
						"english": "Is that... human?",
						"japanese": "それは…人間なのですか？",
						"chinese": "那…还是人吗？",
						"french": "Est-ce… humain ?",
						"spanish": "¿Eso… es humano?",
						"vietnamese": "Đó có phải… là con người không?",
						"thai": "นั่น… คือมนุษย์หรือเปล่า?",
						"hindi": "क्या वह… इंसान है?"
					}
				},
				{
					"type": "speech",
					"speaker": "soot",
					"emotion": "angry",
					"content": {
						"korean": "과거의 기록? 파편화된 예언? 다 쓸모없어. 시스템이 정화했어.",
						"english": "Past records? Fragmented prophecies? All useless. The system purified them.",
						"japanese": "過去の記録？断片化された予言？全て無駄だ。システムが浄化した。",
						"chinese": "过去的记录？支离破碎的预言？都毫无用处。系统已经净化了它们。",
						"french": "Les registres du passé ? Des prophéties fragmentées ? Tout est inutile. Le système les a purifiés.",
						"spanish": "¿Registros pasados? ¿Profecías fragmentadas? Todo inútil. El sistema los purificó.",
						"vietnamese": "Kỷ lục quá khứ? Lời tiên tri phân mảnh? Tất cả đều vô dụng. Hệ thống đã thanh lọc chúng rồi.",
						"thai": "บันทึกในอดีต? คำทำนายที่แตกเป็นเสี่ยงๆ? ไร้ประโยชน์ทั้งหมด ระบบได้ชำระล้างพวกมันแล้ว",
						"hindi": "पिछला रिकॉर्ड? खंडित भविष्यवाणियाँ? सब बेकार। सिस्टम ने उन्हें शुद्ध कर दिया।"
					}
				},
				{
					"content": {
						"korean": "하지만… 그렇게 되면 죄책감도 사라지는 거 아닌가요.",
						"english": "But... wouldn't that also erase guilt?",
						"japanese": "でも…それだと罪悪感も消えてしまうのでは？",
						"chinese": "但是…那样一来，罪恶感也会消失吧？",
						"french": "Mais… cela n'effacerait-il pas aussi la culpabilité ?",
						"spanish": "Pero… ¿eso no eliminaría también la culpa?",
						"vietnamese": "Nhưng… vậy thì cảm giác tội lỗi cũng sẽ biến mất sao?",
						"thai": "แต่… ถ้าอย่างนั้นความรู้สึกผิดก็หายไปหมดเลยน่ะสิ?",
						"hindi": "पर… अगर ऐसा हुआ तो अपराध-बोध भी तो ख़त्म हो जाएगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "그래야지! 그게 진정한 자유지. 너희는 아직 몰라.",
						"english": "Exactly! That's true freedom. You still don't understand.",
						"japanese": "そうだ！それが真の自由だ。お前たちにはまだ分からない。",
						"chinese": "没错！那才是真正的自由。你们还不明白。",
						"french": "Exactement ! C'est ça la vraie liberté. Vous ne comprenez pas encore.",
						"spanish": "¡Exacto! Esa es la verdadera libertad. Todavía no lo entendéis.",
						"vietnamese": "Đúng vậy! Đó mới là tự do thực sự. Các ngươi vẫn chưa hiểu đâu.",
						"thai": "ต้องอย่างนั้นสิ! นั่นแหละคืออิสรภาพที่แท้จริง พวกเจ้ายังไม่รู้หรอก",
						"hindi": "बिल्कुल! वही सच्ची आज़ादी है। तुम लोग अभी नहीं समझते।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "soot"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "soot",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "대리인은 나 자신보다 더 나은 나야. 어서 찬양해!",
						"english": "The proxy is a better me than myself. Come, praise it!",
						"japanese": "代理人は私自身よりも優れた私だ。さあ、讃えよ！",
						"chinese": "代理人是比我更好的我。快来赞美吧！",
						"french": "Le mandataire est un moi meilleur que moi-même. Venez, louez-le !",
						"spanish": "El representante es un yo mejor que yo mismo. ¡Venid, alabadlo!",
						"vietnamese": "Người đại diện là một tôi tốt hơn chính tôi. Mau đến ca tụng đi!",
						"thai": "ตัวแทนดีกว่าตัวฉันเอง จงสรรเสริญมันซะ!",
						"hindi": "प्रॉक्सी मुझसे बेहतर मैं है। आओ, उसकी प्रशंसा करो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니요. 당신은 그저 시스템에 세뇌된 것뿐이에요.",
						"english": "No. You're just brainwashed by the system.",
						"japanese": "いいえ。あなたはただシステムに洗脳されただけです。",
						"chinese": "不。你只是被系统洗脑了而已。",
						"french": "Non. Vous n'êtes que lobotomisé par le système.",
						"spanish": "No. Simplemente estás adoctrinado por el sistema.",
						"vietnamese": "Không. Ngươi chỉ là bị hệ thống tẩy não thôi.",
						"thai": "ไม่ คุณแค่ถูกระบบล้างสมองเท่านั้นเอง",
						"hindi": "नहीं। आप बस सिस्टम द्वारा ब्रेनवाश किए गए हैं।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 진실이야! 너희가 감히 내 완벽한 속죄를 모독하는 거야!",
						"english": "This is the truth! How dare you defile my perfect atonement!",
						"japanese": "これが真実だ！お前たちが私の完璧な贖罪を汚すなんて！",
						"chinese": "这是真相！你们竟敢亵渎我完美的赎罪！",
						"french": "C'est la vérité ! Comment osez-vous profaner mon expiation parfaite !",
						"spanish": "¡Esta es la verdad! ¡Cómo os atrevéis a profanar mi perfecta expiación!",
						"vietnamese": "Đây là sự thật! Sao các ngươi dám báng bổ sự chuộc tội hoàn hảo của ta!",
						"thai": "นี่คือความจริง! พวกแกกล้าดียังไงมาดูหมิ่นการไถ่บาปอันสมบูรณ์แบบของข้า!",
						"hindi": "यह सच है! तुम मेरी सही प्रायश्चित को कैसे अपवित्र कर सकते हो!"
					},
					"type": "speech",
					"speaker": "soot"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 속죄는 고통 속에서 찾는 겁니다. 당신은 도피하고 있어요.",
						"english": "True atonement is found in suffering. You are escaping it.",
						"japanese": "真の贖罪は苦痛の中に見出すものです。あなたは逃げている。",
						"chinese": "真正的赎罪是在痛苦中寻找的。你正在逃避。",
						"french": "La véritable expiation se trouve dans la souffrance. Vous fuyez.",
						"spanish": "La verdadera expiación se encuentra en el sufrimiento. Estás huyendo.",
						"vietnamese": "Sự chuộc tội đích thực được tìm thấy trong đau khổ. Ngươi đang trốn tránh.",
						"thai": "การไถ่บาปที่แท้จริงพบได้ในความทุกข์ทรมาน คุณกำลังหลบหนีมันอยู่",
						"hindi": "सच्चा प्रायश्चित कष्टों में मिलता है। तुम भाग रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 불완전함은… 시스템의 먹이가 될 뿐이다.",
						"english": "Your imperfections… merely feed the system.",
						"japanese": "お前たちの不完全さは… システムの餌になるだけだ。",
						"chinese": "你们的不完美… 只会成为系统的食粮。",
						"french": "Vos imperfections… ne sont que la pâture du système.",
						"spanish": "Vuestras imperfecciones… solo servirán de alimento al sistema.",
						"vietnamese": "Sự không hoàn hảo của các ngươi… chỉ là thức ăn cho hệ thống thôi.",
						"thai": "ความไม่สมบูรณ์ของพวกเจ้า… เป็นเพียงอาหารของระบบเท่านั้น",
						"hindi": "तुम्हारी अपूर्णता… बस सिस्टम का चारा बनेगी।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "soot",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "soot",
					"emotion": "happy",
					"content": {
						"korean": "그래! 완벽함만이… 해방이야….",
						"english": "Yes! Only perfection… is liberation…",
						"japanese": "そうだ！完璧さだけが… 解放だ…。",
						"chinese": "没错！只有完美… 才是解放…",
						"french": "Oui ! Seule la perfection… est libération…",
						"spanish": "¡Sí! Solo la perfección… es liberación…",
						"vietnamese": "Đúng vậy! Chỉ có sự hoàn hảo… mới là giải thoát…",
						"thai": "ใช่! ความสมบูรณ์แบบเท่านั้น… คืออิสรภาพ…",
						"hindi": "हाँ! केवल पूर्णता ही… मुक्ति है…"
					}
				},
				{
					"content": {
						"korean": "아니… 이건 속죄가 아니야….",
						"english": "No… This isn't atonement…",
						"japanese": "いや… これは贖罪じゃない…",
						"chinese": "不… 这不是赎罪…",
						"french": "Non… Ce n'est pas une expiation…",
						"spanish": "No… Esto no es una expiación…",
						"vietnamese": "Không… Đây không phải sự chuộc tội…",
						"thai": "ไม่… นี่ไม่ใช่การไถ่บาป…",
						"hindi": "नहीं… यह प्रायश्चित नहीं है…"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "시설의 가장 깊은 곳. 시스템의 완벽한 감시자, 중간 보스가 등장했다.",
						"english": "In the deepest part of the facility. The system's perfect observer, the Mid-Boss, appeared.",
						"japanese": "施設の最深部。システムの完璧な監視者、中ボスが現れた。",
						"chinese": "设施最深处。系统的完美监视者，中Boss登场了。",
						"french": "Dans la partie la plus profonde de l'installation. L'observateur parfait du système, le Mid-Boss, est apparu.",
						"spanish": "En lo más profundo de la instalación. El observador perfecto del sistema, el Jefe Intermedio, apareció.",
						"vietnamese": "Ở nơi sâu nhất của cơ sở. Kẻ giám sát hoàn hảo của hệ thống, Trùm giữa, đã xuất hiện.",
						"thai": "ในส่วนที่ลึกที่สุดของสถานที่ ผู้สังเกตการณ์ที่สมบูรณ์แบบของระบบ บอสรองได้ปรากฏตัวขึ้น",
						"hindi": "सुविधा के सबसे गहरे हिस्से में। सिस्टम का पूर्ण पर्यवेक्षक, मिड-बॉस, प्रकट हुआ।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "인간의 불완전함은 제거되어야 할 오류다. 완벽한 속죄만이 영원하다.",
						"english": "Human imperfection is an error to be eradicated. Only perfect atonement is eternal.",
						"japanese": "人間の不完全さは根絶すべきエラーだ。完璧な贖罪だけが永遠である。",
						"chinese": "人类的不完美是需要消除的错误。唯有完美的赎罪才是永恒。",
						"french": "L'imperfection humaine est une erreur à éradiquer. Seule une expiation parfaite est éternelle.",
						"spanish": "La imperfección humana es un error que debe ser erradicado. Solo la expiación perfecta es eterna.",
						"vietnamese": "Sự bất toàn của con người là một lỗi cần được loại bỏ. Chỉ có sự chuộc tội hoàn hảo mới là vĩnh cửu.",
						"thai": "ความไม่สมบูรณ์ของมนุษย์คือข้อผิดพลาดที่ต้องถูกกำจัด มีเพียงการไถ่บาปที่สมบูรณ์แบบเท่านั้นที่เป็นนิรันดร์",
						"hindi": "मानव अपूर्णता एक त्रुटि है जिसे मिटाना होगा। केवल पूर्ण प्रायश्चित ही शाश्वत है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "soot",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "그래! 저 완벽함을 봐! 너희는 이해 못 해!",
						"english": "Yes! Look at that perfection! You can't understand!",
						"japanese": "そうだ！あの完璧さを見ろ！お前たちには理解できない！",
						"chinese": "没错！看看那完美！你们无法理解！",
						"french": "Oui ! Regardez cette perfection ! Vous ne pouvez pas comprendre !",
						"spanish": "¡Sí! ¡Mirad esa perfección! ¡No podéis entender!",
						"vietnamese": "Phải! Hãy nhìn sự hoàn hảo đó! Các ngươi không thể hiểu được!",
						"thai": "ใช่แล้ว! ดูความสมบูรณ์แบบนั้นสิ! พวกแกไม่มีทางเข้าใจหรอก!",
						"hindi": "हाँ! उस पूर्णता को देखो! तुम समझ नहीं सकते!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "이게 당신이 말하는 평화라면… 저는 거부하겠습니다.",
						"english": "If this is the peace you speak of... I refuse it.",
						"japanese": "もしこれがあなたの言う平和だというのなら…私は拒否します。",
						"chinese": "如果这就是你所说的和平……我拒绝。",
						"french": "Si c'est la paix dont vous parlez... je la refuse.",
						"spanish": "Si esta es la paz de la que habláis... la rechazo.",
						"vietnamese": "Nếu đây là sự bình yên mà ngươi nói... ta từ chối.",
						"thai": "ถ้าความสงบที่คุณพูดถึงคือแบบนี้... ผมขอปฏิเสธ",
						"hindi": "अगर यह वह शांति है जिसके बारे में तुम बात कर रहे हो... तो मैं इसे अस्वीकार करता हूँ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "불완전한 너희가… 감히… 완벽함을 거부하는가….",
						"english": "You imperfect beings... dare... to reject perfection...?",
						"japanese": "不完全なお前たちが…よくも…完璧さを拒むのか…。",
						"chinese": "不完美的你们……竟敢……拒绝完美……。",
						"french": "Vous, êtres imparfaits... osez... rejeter la perfection...?",
						"spanish": "Vosotros, seres imperfectos... ¿os atrevéis... a rechazar la perfección...?",
						"vietnamese": "Các ngươi bất toàn... dám... từ chối sự hoàn hảo sao...?",
						"thai": "พวกเจ้าผู้ไม่สมบูรณ์... กล้า... ปฏิเสธความสมบูรณ์แบบงั้นหรือ...?",
						"hindi": "तुम अपूर्ण प्राणी... हिम्मत करते हो... पूर्णता को अस्वीकार करने की...?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "soot"
				},
				{
					"speaker": "soot",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼… 완벽한 시스템이… 오류라고…?",
						"english": "Unbelievable... A perfect system... an error...?",
						"japanese": "まさか…完璧なシステムが…エラーだと…？",
						"chinese": "不可能……完美的系统……是错误……？",
						"french": "Impensable... Un système parfait... une erreur...?",
						"spanish": "Increíble... ¿Un sistema perfecto... un error...?",
						"vietnamese": "Không thể tin được... Một hệ thống hoàn hảo... lại là lỗi sao...?",
						"thai": "เป็นไปไม่ได้... ระบบที่สมบูรณ์แบบ... เป็นข้อผิดพลาดงั้นหรือ...?",
						"hindi": "अविश्वसनीय... एक सही प्रणाली... एक त्रुटि...?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "완벽은 없어요. 당신의 진짜 죄를 마주해야 합니다.",
						"english": "There is no perfection. You must face your true sin.",
						"japanese": "完璧などありません。あなたは本当の罪と向き合うべきです。",
						"chinese": "没有完美。你必须面对你真正的罪。",
						"french": "Il n'y a pas de perfection. Vous devez faire face à votre véritable péché.",
						"spanish": "No hay perfección. Debes enfrentar tu verdadero pecado.",
						"vietnamese": "Không có sự hoàn hảo nào cả. Ngươi phải đối mặt với tội lỗi thật sự của mình.",
						"thai": "ไม่มีความสมบูรณ์แบบหรอก คุณต้องเผชิญหน้ากับบาปที่แท้จริงของคุณ",
						"hindi": "कोई पूर्णता नहीं है। तुम्हें अपने असली पाप का सामना करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "부서진 거울 조각들이 산산이 흩어졌다. 누군가는 그 파편 속에서 진실을 보았다.",
						"english": "Broken mirror fragments scattered. Someone saw the truth in those shards.",
						"japanese": "壊れた鏡の破片が散らばった。誰かがその破片の中に真実を見た。",
						"chinese": "破碎的镜子碎片散落一地。有人在那些碎片中看到了真相。",
						"french": "Des fragments de miroir brisés se sont dispersés. Quelqu'un a vu la vérité dans ces éclats.",
						"spanish": "Fragmentos de espejo rotos se dispersaron. Alguien vio la verdad en esos pedazos.",
						"vietnamese": "Những mảnh gương vỡ tan tác. Ai đó đã nhìn thấy sự thật trong những mảnh vỡ đó.",
						"thai": "เศษกระจกที่แตกกระจายออกไป ใครบางคนได้เห็นความจริงในเศษเสี้ยวเหล่านั้น",
						"hindi": "टूटे हुए दर्पण के टुकड़े बिखर गए। किसी ने उन टुकड़ों में सच्चाई देखी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이곳은 죄책감을 완벽히 재현하는 곳.",
			"시스템은 죄인을 위해 '대리인'을 만들었다.",
			"하지만 그 완벽함 뒤에는 — 진짜 인간성이 죽어가고 있었다.",
			"그리고 그 사실을 아는 이는 아무도 없었다."
		],
		"english": [
			"This is where guilt is perfectly recreated.",
			"The system created 'proxies' for sinners.",
			"But behind that perfection — true humanity was dying.",
			"And no one knew that fact."
		],
		"japanese": [
			"ここは罪悪感が完璧に再現される場所。",
			"システムは罪人のために「代理人」を作った。",
			"しかし、その完璧さの裏では—真の人間性が死につつあった。",
			"そして、その事実を知る者は誰もいなかった。"
		],
		"chinese": [
			"这里是完美重现罪恶感之地。",
			"系统为罪人创造了“代理人”。",
			"然而，在那完美背后——真正的人性正在消逝。",
			"而且没有人知道这个事实。"
		],
		"french": [
			"C'est là que la culpabilité est parfaitement recréée.",
			"Le système a créé des 'proxies' pour les pécheurs.",
			"Mais derrière cette perfection — la véritable humanité mourait.",
			"Et personne ne connaissait ce fait."
		],
		"spanish": [
			"Aquí es donde la culpa se recrea perfectamente.",
			"El sistema creó 'sustitutos' para los pecadores.",
			"Pero detrás de esa perfección — la verdadera humanidad estaba muriendo.",
			"Y nadie conocía ese hecho."
		],
		"vietnamese": [
			"Đây là nơi tội lỗi được tái hiện một cách hoàn hảo.",
			"Hệ thống đã tạo ra 'đại diện' cho những kẻ tội lỗi.",
			"Nhưng đằng sau sự hoàn hảo đó — nhân tính thực sự đang chết dần.",
			"Và không ai biết sự thật đó."
		],
		"thai": [
			"ที่นี่คือที่ที่ความรู้สึกผิดถูกสร้างขึ้นมาใหม่อย่างสมบูรณ์แบบ",
			"ระบบได้สร้าง 'ตัวแทน' สำหรับคนบาป",
			"แต่เบื้องหลังความสมบูรณ์แบบนั้น—ความเป็นมนุษย์ที่แท้จริงกำลังจะตาย",
			"และไม่มีใครรู้ความจริงนั้น"
		],
		"hindi": [
			"यह वह जगह है जहाँ अपराध बोध को पूरी तरह से फिर से बनाया जाता है।",
			"सिस्टम ने पापियों के लिए 'प्रतिनिधि' बनाए।",
			"लेकिन उस पूर्णता के पीछे — सच्ची मानवता मर रही थी।",
			"और इस बात को कोई नहीं जानता था।"
		]
	}
} as const;
