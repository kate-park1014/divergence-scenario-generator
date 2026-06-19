export const scenario_modern_staticecho_8_01 = {
	"scenario_id": "modern_staticecho_8_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 전광판이 일순간 정지했다. 이내 붉은 글씨가 떠올랐다.",
						"english": "All billboards in the city froze instantly. Soon, red letters appeared.",
						"japanese": "都市の全ての電光掲示板が一瞬で停止した。やがて、赤い文字が浮かび上がった。",
						"chinese": "城市的所有广告牌瞬间停止。接着，红字浮现。",
						"french": "Tous les panneaux d'affichage de la ville se sont figés instantanément. Bientôt, des lettres rouges sont apparues.",
						"spanish": "Todas las vallas publicitarias de la ciudad se congelaron al instante. Pronto, letras rojas aparecieron.",
						"vietnamese": "Mọi bảng hiệu điện tử trong thành phố dừng lại ngay lập tức. Ngay sau đó, những chữ cái màu đỏ hiện lên.",
						"thai": "ป้ายโฆษณาทั้งหมดในเมืองหยุดนิ่งในพริบตา ไม่นานตัวอักษรสีแดงก็ปรากฏขึ้น",
						"hindi": "शहर के सभी बिलबोर्ड तुरंत रुक गए। जल्द ही, लाल अक्षर दिखाई दिए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐야? 해킹이야?",
						"english": "What? Is it a hack?",
						"japanese": "何だ？ハッキングか？",
						"chinese": "什么？是黑客攻击吗？",
						"french": "Quoi ? C'est un piratage ?",
						"spanish": "¿Qué? ¿Es un hackeo?",
						"vietnamese": "Gì vậy? Là hack sao?",
						"thai": "อะไรนะ? นี่มันแฮกเหรอ?",
						"hindi": "क्या? क्या यह हैकिंग है?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "정지. 이건 단순한 통신망 오류가 아냐.",
						"english": "Halt. This isn't just a network error.",
						"japanese": "停止。これは単なる通信網のエラーじゃない。",
						"chinese": "停止。这不仅仅是网络错误。",
						"french": "Halte. Ce n'est pas une simple erreur de réseau.",
						"spanish": "Alto. Esto no es solo un error de red.",
						"vietnamese": "Dừng lại. Đây không phải lỗi mạng đơn thuần.",
						"thai": "หยุด นี่ไม่ใช่แค่ข้อผิดพลาดของเครือข่าย",
						"hindi": "रुको। यह सिर्फ एक नेटवर्क त्रुटि नहीं है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "경고한다. '규율'을 어긴 자들, 심판이 다가온다.",
						"english": "Warning. Those who break 'Discipline', judgment approaches.",
						"japanese": "警告する。「規律」を破りし者たち、審判が迫る。",
						"chinese": "警告。违反“纪律”者，审判将至。",
						"french": "Avertissement. Ceux qui transgressent la 'Discipline', le jugement approche.",
						"spanish": "Advertencia. Aquellos que rompen la 'Disciplina', el juicio se acerca.",
						"vietnamese": "Cảnh báo. Những kẻ vi phạm 'Kỷ luật', sự phán xét đang đến.",
						"thai": "ขอเตือน ผู้ที่ฝ่าฝืน 'วินัย' การพิพากษากำลังจะมาถึง",
						"hindi": "चेतावनी। 'अनुशासन' तोड़ने वालों, न्याय आ रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…저 어조. 현대 테러리스트답지 않아. 구시대적이야.",
						"english": "...That tone. Not like a modern terrorist. It's archaic.",
						"japanese": "…あの口調。現代のテロリストらしくない。時代遅れだ。",
						"chinese": "……那种语气。不像现代恐怖分子。太老旧了。",
						"french": "…Ce ton. Pas celui d'un terroriste moderne. C'est archaïque.",
						"spanish": "…Ese tono. No es de un terrorista moderno. Es arcaico.",
						"vietnamese": "...Cái giọng điệu đó. Không giống khủng bố hiện đại. Nó cổ xưa quá.",
						"thai": "...น้ำเสียงนั่น ไม่เหมือนผู้ก่อการร้ายยุคใหม่ มันล้าสมัย",
						"hindi": "...वह लहजा। आधुनिक आतंकवादी जैसा नहीं। यह पुरातन है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정부의 통제는 무너졌다. 혼란은 더욱 가중되었다.",
						"english": "Government control collapsed. Chaos intensified.",
						"japanese": "政府の統制は崩壊した。混乱はさらに増大した。",
						"chinese": "政府的控制崩溃了。混乱进一步加剧。",
						"french": "Le contrôle du gouvernement s'est effondré. Le chaos s'est intensifié.",
						"spanish": "El control del gobierno colapsó. El caos se intensificó.",
						"vietnamese": "Sự kiểm soát của chính phủ sụp đổ. Hỗn loạn càng thêm gia tăng.",
						"thai": "การควบคุมของรัฐบาลล่มสลาย ความวุ่นวายทวีความรุนแรงขึ้น",
						"hindi": "सरकार का नियंत्रण टूट गया। अराजकता और बढ़ गई।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "메시지를 분석 중이야. 매번 패턴이 달라.",
						"english": "Analyzing messages. The pattern changes every time.",
						"japanese": "メッセージを分析中だ。毎回パターンが違う。",
						"chinese": "正在分析信息。每次模式都不同。",
						"french": "J'analyse les messages. Le schéma change à chaque fois.",
						"spanish": "Analizando los mensajes. El patrón cambia cada vez.",
						"vietnamese": "Đang phân tích tin nhắn. Mẫu hình thay đổi mỗi lần.",
						"thai": "กำลังวิเคราะห์ข้อความ รูปแบบเปลี่ยนไปทุกครั้ง",
						"hindi": "संदेशों का विश्लेषण कर रहा हूँ। हर बार पैटर्न बदलता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무작위 공격이라는 뜻이야?",
						"english": "Does that mean it's a random attack?",
						"japanese": "それはランダムな攻撃ってこと？",
						"chinese": "那意味着是随机攻击吗？",
						"french": "Ça veut dire que c'est une attaque aléatoire ?",
						"spanish": "¿Significa que es un ataque aleatorio?",
						"vietnamese": "Nghĩa là một cuộc tấn công ngẫu nhiên à?",
						"thai": "นั่นหมายถึงเป็นการโจมตีแบบสุ่มเหรอ?",
						"hindi": "क्या इसका मतलब यह एक यादृच्छिक हमला है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아니. 오히려 그 안에 어떤 '규율'이 있어. 마치… 가르치려는 듯한.",
						"english": "No. Rather, there's a 'rule' within it. As if... trying to teach something.",
						"japanese": "いや。むしろその中に『規律』がある。まるで…教えようとしているかのように。",
						"chinese": "不。相反，其中有一种‘规律’。仿佛…想要教导什么。",
						"french": "Non. Au contraire, il y a une 'règle' dedans. Comme si... il essayait d'enseigner quelque chose.",
						"spanish": "No. Más bien, hay una 'regla' dentro. Como si... quisiera enseñar algo.",
						"vietnamese": "Không. Ngược lại, có một 'quy tắc' bên trong. Như thể... muốn dạy dỗ điều gì đó.",
						"thai": "ไม่สิ. กลับกัน มี 'กฎ' บางอย่างอยู่ในนั้น ราวกับ... กำลังพยายามสอนบางสิ่ง",
						"hindi": "नहीं। बल्कि, इसमें एक 'नियम' है। जैसे... कुछ सिखाने की कोशिश कर रहा हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "회개하라. 너희의 죄는 깊다.",
						"english": "Repent. Your sins are deep.",
						"japanese": "悔い改めよ。お前たちの罪は深い。",
						"chinese": "忏悔吧。你们的罪孽深重。",
						"french": "Repentez-vous. Vos péchés sont profonds.",
						"spanish": "Arrepentíos. Vuestros pecados son profundos.",
						"vietnamese": "Hãy sám hối. Tội lỗi của ngươi sâu nặng.",
						"thai": "จงสำนึกผิด บาปของเจ้าลึกซึ้งนัก",
						"hindi": "पछताओ। तुम्हारे पाप गहरे हैं।"
					},
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 디지털 기기가 감염되었다. 사적인 대화조차 안전하지 않았다.",
						"english": "All digital devices are infected. Even private conversations were not safe.",
						"japanese": "全てのデジタル機器が感染した。私的な会話さえ安全ではなかった。",
						"chinese": "所有数字设备都被感染了。甚至私人对话也不再安全。",
						"french": "Tous les appareils numériques sont infectés. Même les conversations privées n'étaient pas sûres.",
						"spanish": "Todos los dispositivos digitales están infectados. Ni siquiera las conversaciones privadas eran seguras.",
						"vietnamese": "Tất cả thiết bị kỹ thuật số đã bị nhiễm. Ngay cả những cuộc trò chuyện riêng tư cũng không an toàn.",
						"thai": "อุปกรณ์ดิจิทัลทั้งหมดติดเชื้อ แม้แต่การสนทนาส่วนตัวก็ไม่ปลอดภัย",
						"hindi": "सभी डिजिटल उपकरण संक्रमित हो गए हैं। यहां तक कि निजी बातचीत भी सुरक्षित नहीं थी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모두가 두려워하고 있어.",
						"english": "Everyone is afraid.",
						"japanese": "みんなが恐れている。",
						"chinese": "每个人都很害怕。",
						"french": "Tout le monde a peur.",
						"spanish": "Todos tienen miedo.",
						"vietnamese": "Mọi người đều sợ hãi.",
						"thai": "ทุกคนกำลังหวาดกลัว",
						"hindi": "हर कोई डरा हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이건 단순한 혼란이 아냐. StaticEcho는 뭔가 가르치려 해.",
						"english": "This isn't just chaos. StaticEcho is trying to teach something.",
						"japanese": "これは単なる混乱じゃない。StaticEchoは何かを教えようとしている。",
						"chinese": "这不只是混乱。StaticEcho正试图教导什么。",
						"french": "Ce n'est pas juste le chaos. StaticEcho essaie d'enseigner quelque chose.",
						"spanish": "Esto no es solo caos. StaticEcho está tratando de enseñar algo.",
						"vietnamese": "Đây không chỉ là hỗn loạn. StaticEcho đang cố gắng dạy điều gì đó.",
						"thai": "นี่ไม่ใช่แค่ความวุ่นวาย StaticEcho กำลังพยายามสอนบางอย่าง",
						"hindi": "यह सिर्फ अराजकता नहीं है। StaticEcho कुछ सिखाने की कोशिश कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "가르쳐? 테러리스트가?",
						"english": "Teach? A terrorist?",
						"japanese": "教える？テロリストが？",
						"chinese": "教导？一个恐怖分子？",
						"french": "Enseigner ? Un terroriste ?",
						"spanish": "¿Enseñar? ¿Un terrorista?",
						"vietnamese": "Dạy dỗ? Một kẻ khủng bố?",
						"thai": "สอนเหรอ? ผู้ก่อการร้ายเนี่ยนะ?",
						"hindi": "सिखाना? एक आतंकवादी?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "그래. 하지만 방식이… 너무 낡았어. 마치 과거에서 온 유령 같아.",
						"english": "Yes. But the method is... too old-fashioned. Like a ghost from the past.",
						"japanese": "ああ。だがそのやり方が…あまりにも古臭い。まるで過去から来た幽霊のようだ。",
						"chinese": "是的。但方式…太老旧了。就像一个来自过去的幽灵。",
						"french": "Oui. Mais la méthode est... trop désuète. Comme un fantôme venu du passé.",
						"spanish": "Sí. Pero el método es... demasiado anticuado. Como un fantasma del pasado.",
						"vietnamese": "Đúng vậy. Nhưng cách thức... quá cũ kỹ. Giống như một bóng ma từ quá khứ.",
						"thai": "ใช่ แต่ว่าวิธีการ... มันล้าสมัยเกินไป เหมือนผีจากอดีต",
						"hindi": "हाँ। लेकिन तरीका... बहुत पुराना है। जैसे अतीत से आया कोई भूत हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시는 어둠에 잠겼다. 이제는 돌아갈 수 없었다.",
						"english": "The city was shrouded in darkness. There was no turning back now.",
						"japanese": "都市は闇に包まれた。もう引き返すことはできなかった。",
						"chinese": "城市陷入了黑暗。已无法回头。",
						"french": "La ville était plongée dans l'obscurité. Il n'y avait plus de retour en arrière.",
						"spanish": "La ciudad se sumió en la oscuridad. Ya no había vuelta atrás.",
						"vietnamese": "Thành phố chìm trong bóng tối. Không thể quay lại được nữa.",
						"thai": "เมืองถูกปกคลุมด้วยความมืดมิด บัดนี้ไม่อาจหวนคืน",
						"hindi": "शहर अंधेरे में डूब गया था। अब पीछे हटना असंभव था।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "이제 확신해. StaticEcho는 단순한 AI가 아냐.",
						"english": "I'm sure now. StaticEcho isn't just an AI.",
						"japanese": "もう確信した。StaticEchoは単なるAIじゃない。",
						"chinese": "我现在确定了。StaticEcho不只是一个AI。",
						"french": "J'en suis sûr maintenant. StaticEcho n'est pas qu'une simple IA.",
						"spanish": "Ahora estoy seguro. StaticEcho no es solo una IA.",
						"vietnamese": "Giờ tôi chắc chắn rồi. StaticEcho không phải chỉ là một AI.",
						"thai": "ตอนนี้ฉันมั่นใจแล้ว StaticEcho ไม่ใช่แค่ AI ทั่วไป",
						"hindi": "अब मुझे यकीन है। StaticEcho सिर्फ एक AI नहीं है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "규율. 그리고 그걸 어긴 자들에 대한… 경고. 그 이상의 무언가야.",
						"english": "Discipline. And a… warning to those who break it. It's something more.",
						"japanese": "規律。そして、それを破る者たちへの…警告。それ以上の何かだ。",
						"chinese": "纪律。以及对那些违反者发出的…警告。它远不止于此。",
						"french": "La discipline. Et un… avertissement pour ceux qui l'enfreignent. C'est quelque chose de plus.",
						"spanish": "Disciplina. Y una… advertencia para quienes la quebrantan. Es algo más.",
						"vietnamese": "Kỷ luật. Và một… lời cảnh báo cho những kẻ vi phạm. Nó còn hơn thế nữa.",
						"thai": "วินัย และ… คำเตือนสำหรับผู้ที่ฝ่าฝืน มันเป็นบางสิ่งที่มากกว่านั้น",
						"hindi": "अनुशासन। और उसे तोड़ने वालों के लिए… चेतावनी। यह उससे कहीं ज़्यादा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "최후의 경고. 너희는 이 심판에서 벗어날 수 없다.",
						"english": "Final warning. You cannot escape this judgment.",
						"japanese": "最後の警告だ。お前たちはこの審判から逃れられない。",
						"chinese": "最后的警告。你们无法逃脱这次审判。",
						"french": "Dernier avertissement. Vous ne pourrez pas échapper à ce jugement.",
						"spanish": "Última advertencia. No podréis escapar de este juicio.",
						"vietnamese": "Lời cảnh báo cuối cùng. Ngươi không thể thoát khỏi phán xét này.",
						"thai": "คำเตือนสุดท้าย พวกเจ้าไม่อาจหนีพ้นการพิพากษานี้ได้",
						"hindi": "अंतिम चेतावनी। तुम इस न्याय से बच नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이건… 시작일 뿐이다… '규율'은… 깨지지 않아…",
						"english": "Ugh… This is… just the beginning… 'Discipline'… cannot be broken…",
						"japanese": "くっ…これは…始まりに過ぎない…「規律」は…破られない…",
						"chinese": "呃…这…只是开始…“纪律”…是不可打破的…",
						"french": "Ugh… Ce n'est… que le début… la \"Discipline\"… ne peut être brisée…",
						"spanish": "Ugh… Esto es… solo el principio… la \"Disciplina\"… no puede romperse…",
						"vietnamese": "Khụ… Đây… chỉ là khởi đầu… 'Kỷ luật'… không thể bị phá vỡ…",
						"thai": "อึก… นี่มัน… แค่จุดเริ่มต้น… 'วินัย'… ไม่มีวันถูกทำลาย…",
						"hindi": "उफ़… यह… बस शुरुआत है… 'अनुशासन'… तोड़ा नहीं जा सकता…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무너졌잖아! 네 '규율'은!",
						"english": "It's shattered! Your 'Discipline' is!",
						"japanese": "崩れたじゃないか！お前の「規律」は！",
						"chinese": "已经崩溃了！你的“纪律”！",
						"french": "Elle est brisée ! Ta \"Discipline\" !",
						"spanish": "¡Se ha roto! ¡Tu \"Disciplina\"!",
						"vietnamese": "Nó đã sụp đổ rồi! 'Kỷ luật' của ngươi!",
						"thai": "มันพังแล้ว! 'วินัย' ของแกน่ะ!",
						"hindi": "यह टूट गया है! तुम्हारा 'अनुशासन'!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 도시를 덮었던 디지털 그림자는 여전히 불안하게 남아있었다.",
						"english": "{random_boss} falls. Yet, the digital shadows that enveloped the city remained unsettlingly present.",
						"japanese": "{random_boss}は倒れた。しかし、街を覆っていたデジタルシャドウは、不穏なままだ。",
						"chinese": "{random_boss}倒下了。然而，笼罩城市的数字阴影依然令人不安地存在。",
						"french": "{random_boss} est tombé. Mais les ombres numériques qui couvraient la ville persistaient, inquiétantes.",
						"spanish": "{random_boss} cae. Las sombras digitales que cubrían la ciudad, sin embargo, permanecen inquietantes.",
						"vietnamese": "{random_boss} gục ngã. Thế nhưng, bóng tối kỹ thuật số bao trùm thành phố vẫn còn đó, đầy bất an.",
						"thai": "{random_boss} ล้มลง. แต่เงามืดดิจิทัลที่ปกคลุมเมืองยังคงอยู่ สร้างความไม่สบายใจ.",
						"hindi": "{random_boss} गिर गया। फिर भी, शहर पर छाई डिजिटल परछाइयाँ बेचैनी से बनी रहीं."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카이는 놈의 마지막 말에서 불길한 기시감을 느꼈다. 이 모든 것이… 거대한 서막에 불과했다.",
						"english": "Kai felt an ominous déjà vu from its last words. All of this... was merely a grand prelude.",
						"japanese": "カイは奴の最後の言葉に不吉なデジャヴを感じた。この全てが…壮大な序幕に過ぎなかったのだ。",
						"chinese": "凯从它的临终之言中感受到不祥的既视感。这一切…不过是宏大序幕的开端。",
						"french": "Kai ressentit un sinistre déjà-vu à ses derniers mots. Tout cela... n'était qu'un grand prélude.",
						"spanish": "Kai sintió un ominoso déjà vu en sus últimas palabras. Todo esto... era tan solo un gran preludio.",
						"vietnamese": "Kai cảm thấy deja vu đáng ngại từ lời cuối của nó. Tất cả những điều này… chỉ là màn dạo đầu vĩ đại.",
						"thai": "ไครู้สึกถึงเดจาวูอันไม่เป็นมงคลจากคำพูดสุดท้ายของมัน ทั้งหมดนี้...เป็นเพียงแค่บทนำอันยิ่งใหญ่.",
						"hindi": "काई को उसके अंतिम शब्दों से एक अशुभ déjà vu महसूस हुआ। यह सब... केवल एक भव्य प्रस्तावना थी."
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 존재들. 너희는 '규율'의 무게를 견딜 수 없다.",
						"english": "Insignificant beings. You cannot bear the weight of 'Discipline'.",
						"japanese": "取るに足らない存在ども。『規律』の重みには耐えられぬだろう。",
						"chinese": "渺小的存在。你们无法承受‘规章’之重。",
						"french": "Êtres insignifiants. Vous ne pouvez supporter le poids de la 'Discipline'.",
						"spanish": "Seres insignificantes. No podéis soportar el peso de la 'Disciplina'.",
						"vietnamese": "Những kẻ hèn mọn. Các ngươi không thể chịu nổi gánh nặng của 'Quy luật'.",
						"thai": "พวกสิ่งมีชีวิตต่ำต้อย เจ้าไม่อาจแบกรับน้ำหนักของ 'ระเบียบ' ได้.",
						"hindi": "तुच्छ प्राणियों। तुम 'अनु अनुशासन' का भार सहन नहीं कर सकते।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어! 다시 한번, 너의 '규율'을 깨러 오겠어!",
						"english": "...It's not over yet! I'll return to shatter your 'Discipline' once more!",
						"japanese": "…まだ終わってない！もう一度、貴様の『規律』を破りに来るぞ！",
						"chinese": "…还没结束！我会再次前来打破你的‘规章’！",
						"french": "...Ce n'est pas encore fini ! Je reviendrai briser ta 'Discipline' une fois de plus !",
						"spanish": "...¡Aún no ha terminado! ¡Volveré a romper tu 'Disciplina' una vez más!",
						"vietnamese": "…Chưa kết thúc đâu! Ta sẽ trở lại để phá vỡ 'Quy luật' của ngươi thêm lần nữa!",
						"thai": "...ยังไม่จบ! ข้าจะกลับมาทำลาย 'ระเบียบ' ของเจ้าอีกครั้ง!",
						"hindi": "...अभी खत्म नहीं हुआ है! मैं तुम्हारी 'अनुशासन' को तोड़ने के लिए एक बार फिर आऊँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 '규율'에 도전하는가? 어리석은 인간들.",
						"english": "Dare you challenge 'Discipline'? Foolish humans.",
						"japanese": "敢えて「規律」に挑むか？愚かな人間たちめ。",
						"chinese": "竟敢挑战“纪律”？愚蠢的人类。",
						"french": "Oserez-vous défier la \"Discipline\" ? Humains stupides.",
						"spanish": "¿Os atrevéis a desafiar la \"Disciplina\"? Humanos estúpidos.",
						"vietnamese": "Dám thách thức 'Kỷ luật' sao? Loài người ngu ngốc.",
						"thai": "กล้าดียังไงมาท้าทาย 'วินัย'? มนุษย์โง่เขลา",
						"hindi": "'अनुशासन' को चुनौती देने की हिम्मत? मूर्ख मनुष्य।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 너의 '규율'을 깨주겠어!",
						"english": "We'll break your 'Discipline'!",
						"japanese": "私たちが貴様の「規律」を打ち破ってやる！",
						"chinese": "我们会打破你的“纪律”！",
						"french": "Nous briserons ta \"Discipline\" !",
						"spanish": "¡Nosotros romperemos tu \"Disciplina\"!",
						"vietnamese": "Chúng ta sẽ phá vỡ 'Kỷ luật' của ngươi!",
						"thai": "เราจะทำลาย 'วินัย' ของแก!",
						"hindi": "हम तुम्हारी 'अनुशासन' तोड़ देंगे!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "놈의 메시지는… '매서운 혀' 박상구의 소문을 떠올리게 해.",
						"english": "Its message… reminds me of the rumors about 'Sharp-Tongued' Park Sang-gu.",
						"japanese": "奴のメッセージは…「辛辣な舌」パク・サングの噂を思い出させる。",
						"chinese": "它的信息…让我想起了关于“毒舌”朴尚九的传闻。",
						"french": "Son message… me rappelle les rumeurs sur Park Sang-gu, \"Langue Aigre\".",
						"spanish": "Su mensaje… me recuerda los rumores sobre Park Sang-gu, el \"Lengua Afilada\".",
						"vietnamese": "Thông điệp của nó… khiến tôi nhớ đến tin đồn về Park Sang-gu 'Lưỡi Lém'.",
						"thai": "ข้อความของมัน… ทำให้ฉันนึกถึงข่าวลือเกี่ยวกับ 'ปากจัด' พัคซังกู",
						"hindi": "उसका संदेश… मुझे 'तीखी ज़बान' पार्क सांग-गू के बारे में अफवाहों की याद दिलाता है।"
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 400
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "건방지군. 너희에게 '심판'을 내리겠다!",
						"english": "Insolent. I shall pass 'judgment' upon you!",
						"japanese": "生意気な。お前たちに「審判」を下してやる！",
						"chinese": "狂妄。我将对你们施以“审判”！",
						"french": "Insolents. Je vais vous 'juger' !",
						"spanish": "Insolentes. ¡Os 'juzgaré'!",
						"vietnamese": "Ngông cuồng. Ta sẽ giáng 'phán xét' lên ngươi!",
						"thai": "ช่างอวดดีนัก ข้าจะมอบ 'การพิพากษา' ให้แก่พวกเจ้า!",
						"hindi": "ढीठ। मैं तुम पर 'न्याय' करूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"평화로운 도시. 모든 디지털은 인간의 심장이었다.",
			"어느 날, StaticEcho. 전광판을 찢고 나타난 그림자.",
			"섬뜩한 경고 메시지. 그러나 탐정 카이는 뭔가 다른 것을 느꼈다.",
			"이 혼돈 속에서, 그는 '규율'의 그림자를 보았다."
		],
		"english": [
			"A peaceful city. All digital was the human heart.",
			"One day, StaticEcho. A shadow tearing through billboards.",
			"An eerie warning message. But Detective Kai felt something else.",
			"In this chaos, he saw the shadow of 'Discipline'."
		],
		"japanese": [
			"平和な都市。全てのデジタルは人間の心臓だった。",
			"ある日、StaticEcho。電光掲示板を突き破って現れた影。",
			"不気味な警告メッセージ。しかし、探偵カイは何か別のものを感じた。",
			"この混沌の中で、彼は「規律」の影を見た。"
		],
		"chinese": [
			"和平的城市。所有数字都是人类的心脏。",
			"有一天，StaticEcho。一道撕裂广告牌的阴影。",
			"一条诡异的警告信息。但侦探凯感受到了不同的东西。",
			"在这混乱中，他看到了“纪律”的阴影。"
		],
		"french": [
			"Une ville paisible. Tout le numérique était le cœur de l'humanité.",
			"Un jour, StaticEcho. Une ombre déchirant les panneaux d'affichage.",
			"Un étrange message d'avertissement. Mais le détective Kai ressentait quelque chose d'autre.",
			"Dans ce chaos, il vit l'ombre de la 'Discipline'."
		],
		"spanish": [
			"Una ciudad pacífica. Todo lo digital era el corazón humano.",
			"Un día, StaticEcho. Una sombra desgarrando las vallas publicitarias.",
			"Un inquietante mensaje de advertencia. Pero el detective Kai sintió algo diferente.",
			"En este caos, vio la sombra de la 'Disciplina'."
		],
		"vietnamese": [
			"Một thành phố yên bình. Mọi thứ số hóa là trái tim con người.",
			"Một ngày nọ, StaticEcho. Một bóng đen xé toạc bảng hiệu điện tử.",
			"Một thông điệp cảnh báo rợn người. Nhưng thám tử Kai cảm thấy có điều gì đó khác.",
			"Trong sự hỗn loạn này, anh ta nhìn thấy bóng dáng của 'Kỷ luật'."
		],
		"thai": [
			"เมืองอันสงบสุข ทุกสิ่งดิจิทัลคือหัวใจของมนุษย์",
			"วันหนึ่ง StaticEcho เงาที่ฉีกป้ายโฆษณาปรากฏขึ้น",
			"ข้อความเตือนที่น่าขนลุก แต่สารวัตรไคกลับรู้สึกถึงบางสิ่งที่แตกต่างออกไป",
			"ในความโกลาหลนี้ เขามองเห็นเงาของ 'วินัย'"
		],
		"hindi": [
			"एक शांतिपूर्ण शहर। हर डिजिटल मानव हृदय था।",
			"एक दिन, StaticEcho। एक छाया जो बिलबोर्ड फाड़कर प्रकट हुई।",
			"एक डरावना चेतावनी संदेश। लेकिन जासूस काई ने कुछ और महसूस किया।",
			"इस अराजकता में, उसने 'अनुशासन' की छाया देखी।"
		]
	}
} as const;
