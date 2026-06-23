export const scenario_modern_kyrios_1_01 = {
	"scenario_id": "modern_kyrios_1_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"화려한 도시, 그 안에 숨겨진 검은 그림자.",
			"그림자 법정. 그곳의 판결은 맹목적인 질서였다.",
			"정의의 이름 아래, 씁쓸한 단죄가 시작된다.",
			"그리고, 한 남자가 비웃듯 묻는다. '저게 진짜 정의라고 생각해?'"
		],
		"english": [
			"A dazzling city, yet a dark shadow lurks within.",
			"The Shadow Court. Its judgments were blind order.",
			"In the name of justice, a bitter condemnation begins.",
			"Then, a man asks with a scoff, \"Do you call that justice?\""
		],
		"japanese": [
			"華やかな都市、その裏に潜む黒い影。",
			"影の法廷。その判決は盲目的な秩序だった。",
			"正義の名の下に、苦い断罪が始まる。",
			"そして、一人の男が嘲笑うかのように問う。「あれが本当に正義だとでも？」"
		],
		"chinese": [
			"华丽的都市，隐藏其中的黑色阴影。",
			"影子法庭。那里的判决是盲目的秩序。",
			"以正义之名，苦涩的审判开始了。",
			"接着，一个男人嘲讽地问道：“你觉得那是真正的正义吗？”"
		],
		"french": [
			"Une ville éclatante, mais une ombre sombre s'y cache.",
			"La Cour des Ombres. Ses jugements étaient un ordre aveugle.",
			"Au nom de la justice, une amère condamnation commence.",
			"Puis, un homme demande en ricanant : « Vous appelez ça de la vraie justice ? »"
		],
		"spanish": [
			"Una ciudad deslumbrante, pero una sombra oscura acecha en su interior.",
			"La Corte de la Sombra. Sus sentencias eran un orden ciego.",
			"En nombre de la justicia, una amarga condena da inicio.",
			"Y entonces, un hombre pregunta con sorna: \"¿Crees que eso es verdadera justicia?\""
		],
		"vietnamese": [
			"Thành phố tráng lệ, nhưng ẩn chứa một bóng đen.",
			"Tòa án Bóng Tối. Phán quyết của nó là một trật tự mù quáng.",
			"Dưới danh nghĩa công lý, một bản án cay đắng bắt đầu.",
			"Và rồi, một người đàn ông cười khẩy hỏi, \"Ngươi nghĩ đó là công lý thật sao?\""
		],
		"thai": [
			"เมืองอันรุ่งโรจน์ แต่ซ่อนไว้ซึ่งเงาดำมืด",
			"ศาลเงา คำพิพากษาของที่นั่นคือระเบียบที่ไร้เหตุผล",
			"ภายใต้ชื่อของความยุติธรรม การลงโทษอันขมขื่นเริ่มต้นขึ้น",
			"และแล้ว ชายคนหนึ่งก็เย้ยหยันพลางถามว่า \"นี่น่ะเหรอคือความยุติธรรมจริงๆ?\""
		],
		"hindi": [
			"एक शानदार शहर, जिसके भीतर एक काली छाया छिपी है।",
			"छाया न्यायालय। उसके फैसले एक अंधा आदेश थे।",
			"न्याय के नाम पर, एक कड़वी निंदा शुरू होती है।",
			"और फिर, एक आदमी उपहास करते हुए पूछता है, \"क्या तुम्हें लगता है कि यह असली न्याय है?\""
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시의 심장부, 그림자 법정이 열렸다. 시민들은 굳은 표정으로 심판을 기다렸다.",
						"english": "In the city's heart, the Shadow Court convened. Citizens awaited judgment with solemn faces.",
						"japanese": "都市の中心部で、影の法廷が開かれた。市民たちは固い表情で裁きを待った。",
						"chinese": "在城市的中心，影子法庭开庭了。市民们表情严肃地等待审判。",
						"french": "Au cœur de la ville, la Cour des Ombres s'est réunie. Les citoyens attendaient le jugement avec des visages graves.",
						"spanish": "En el corazón de la ciudad, la Corte de la Sombra se reunió. Los ciudadanos esperaban el juicio con rostros serios.",
						"vietnamese": "Tại trung tâm thành phố, Tòa án Bóng Tối được mở. Dân chúng với vẻ mặt cứng đờ chờ đợi phán quyết.",
						"thai": "ณ ใจกลางเมือง ศาลเงาได้เปิดขึ้น ประชาชนต่างรอคอยคำตัดสินด้วยสีหน้าเคร่งขรึม",
						"hindi": "शहर के केंद्र में, छाया न्यायालय की बैठक हुई। नागरिकों ने गंभीर चेहरों के साथ फैसले का इंतजार किया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…도대체 무슨 일이야?",
						"english": "...What on earth is going on?",
						"japanese": "…一体何が起きているんだ？",
						"chinese": "……到底怎么回事？",
						"french": "...Mais qu'est-ce qui se passe ?",
						"spanish": "¿...Qué demonios está pasando?",
						"vietnamese": "...Chuyện quái gì vậy?",
						"thai": "...นี่มันเรื่องอะไรกันแน่?",
						"hindi": "...आखिर क्या हो रहा है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "질서 위반. 사소한 규칙을 어긴 자에게 내려진 냉혹한 판결이었다.",
						"english": "Order violation. A merciless judgment for one who broke a minor rule.",
						"japanese": "秩序違反。些細な規則を破った者に下された冷酷な判決だった。",
						"chinese": "违反秩序。这是对一个违反小规则的人所做出的无情判决。",
						"french": "Violation de l'ordre. Un jugement impitoyable pour celui qui avait enfreint une règle mineure.",
						"spanish": "Violación del orden. Un juicio despiadado para quien rompió una regla menor.",
						"vietnamese": "Vi phạm trật tự. Một phán quyết lạnh lùng dành cho kẻ đã phá vỡ một quy tắc nhỏ nhặt.",
						"thai": "การละเมิดระเบียบ นี่คือคำตัดสินอันไร้ความปราณีสำหรับผู้ที่ฝ่าฝืนกฎเล็กๆ น้อยๆ",
						"hindi": "व्यवस्था का उल्लंघन। एक छोटे से नियम को तोड़ने वाले के लिए एक निर्दयी फैसला था।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "하, 저게 정의라고 생각하나?",
						"english": "Ha, do you call that justice?",
						"japanese": "は、あれが正義だとでも？",
						"chinese": "哈，你觉得那是正义吗？",
						"french": "Ha, vous appelez ça de la justice ?",
						"spanish": "Ja, ¿crees que eso es justicia?",
						"vietnamese": "Ha, ngươi nghĩ đó là công lý ư?",
						"thai": "ฮึ่ม นั่นน่ะเหรอคือความยุติธรรม?",
						"hindi": "हा, क्या तुम इसे न्याय कहते हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 말을 하는 거지?",
						"english": "...What are you talking about?",
						"japanese": "…何を言っているんだ？",
						"chinese": "……你在说什么？",
						"french": "...De quoi parlez-vous ?",
						"spanish": "¿...De qué estás hablando?",
						"vietnamese": "...Ngươi đang nói gì vậy?",
						"thai": "...คุณกำลังพูดถึงอะไร?",
						"hindi": "...तुम क्या कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "법정은 공정해 보이지만, 사실은 모든 게 묶여있지. 벗어날 수 없는 족쇄처럼.",
						"english": "The court seems fair, but everything is bound, like inescapable shackles.",
						"japanese": "法廷は公平に見えるが、実際は全てが縛られている。逃れられない足枷のように。",
						"chinese": "法庭看似公正，但实际上一切都被束缚着。就像无法挣脱的枷锁。",
						"french": "Le tribunal semble juste, mais en réalité, tout est lié. Comme des chaînes inéchappables.",
						"spanish": "La corte parece justa, pero en realidad, todo está atado. Como grilletes ineludibles.",
						"vietnamese": "Tòa án có vẻ công bằng, nhưng thực tế, mọi thứ đều bị trói buộc. Như những gông xiềng không thể thoát ra.",
						"thai": "ศาลดูเหมือนจะยุติธรรม แต่ความจริงแล้วทุกสิ่งถูกผูกมัดไว้ราวกับโซ่ตรวนที่หลีกหนีไม่ได้",
						"hindi": "न्यायालय निष्पक्ष लगता है, लेकिन वास्तव में, सब कुछ बंधा हुआ है। जैसे कि अदम्य बेड़ियाँ।"
					},
					"emotion": "base",
					"speaker": "dax"
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "그림자 의회? 웃기는 소리. 도시를 지키는 게 아니라, 묶어두는 거겠지.",
						"english": "Shadow Council? A joke. They don't protect the city; they bind it.",
						"japanese": "影の評議会？笑わせる。街を守るどころか、縛り付けているだけだ。",
						"chinese": "影子议会？笑话。他们不是在保护城市，而是在束缚它。",
						"french": "Conseil des Ombres ? Ridicule. Ils ne protègent pas la ville, ils l'entravent.",
						"spanish": "¿Consejo Sombrío? Qué absurdo. No protegen la ciudad, la atan.",
						"vietnamese": "Hội đồng Bóng tối? Nực cười. Không phải bảo vệ thành phố, mà là trói buộc nó.",
						"thai": "สภาเงามืด? น่าขำสิ้นดี ไม่ได้ปกป้องเมืองหรอก แต่กักขังมันต่างหาก",
						"hindi": "शैडो काउंसिल? मज़ाक। वे शहर की रक्षा नहीं करते, बल्कि उसे बांधते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "의회는 도시의 질서를 유지한다고….",
						"english": "The Council maintains order in the city...",
						"japanese": "評議会は都市の秩序を維持していると...",
						"chinese": "议会维持着城市的秩序...",
						"french": "Le Conseil maintient l'ordre dans la ville...",
						"spanish": "El Consejo mantiene el orden en la ciudad...",
						"vietnamese": "Hội đồng duy trì trật tự của thành phố...",
						"thai": "สภาคงไว้ซึ่งระเบียบของเมือง...",
						"hindi": "काउंसिल शहर में व्यवस्था बनाए रखती है..."
					}
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "질서? 잔혹하고 불균형한 '정의'를 강요하면서 말인가. 겉만 번지르르한 가면일 뿐.",
						"english": "Order? By enforcing cruel, unbalanced 'justice'? It's just a shiny facade.",
						"japanese": "秩序？残酷で不均衡な「正義」を強要しながらか。ただのまやかしの仮面に過ぎない。",
						"chinese": "秩序？通过强制执行残酷而不平衡的“正义”？那不过是一张虚有其表的面具。",
						"french": "L'ordre ? En imposant une « justice » cruelle et déséquilibrée ? Ce n'est qu'une façade brillante.",
						"spanish": "¿Orden? ¿Imponiendo una \"justicia\" cruel y desequilibrada? Es solo una fachada brillante.",
						"vietnamese": "Trật tự ư? Bằng cách áp đặt 'công lý' tàn bạo, bất công sao? Chỉ là một lớp mặt nạ hào nhoáng thôi.",
						"thai": "ระเบียบเหรอ? ด้วยการบังคับใช้ 'ความยุติธรรม' ที่โหดร้ายและไม่สมดุลน่ะเหรอ? มันก็แค่เปลือกนอกที่ดูดีเท่านั้นแหละ",
						"hindi": "व्यवस्था? क्रूर और असंतुलित 'न्याय' थोपकर? यह तो बस एक चमकदार मुखौटा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만, 우리가 본 건….",
						"english": "But what we saw...",
						"japanese": "しかし、私たちが目にしたのは...",
						"chinese": "但是，我们看到的...",
						"french": "Mais ce que nous avons vu...",
						"spanish": "Pero lo que vimos...",
						"vietnamese": "Nhưng những gì chúng ta đã thấy...",
						"thai": "แต่สิ่งที่เราเห็นคือ...",
						"hindi": "लेकिन जो हमने देखा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "보이는 게 다가 아니야. 이 도시의 규칙은 너무 견고해서, 깨뜨릴 수 없지.",
						"english": "What you see isn't everything. The rules of this city are too rigid to break.",
						"japanese": "見えているものが全てじゃない。この都市のルールはあまりに強固で、打ち破ることはできない。",
						"chinese": "眼见并非一切。这座城市的规则太过坚固，无法打破。",
						"french": "Ce que tu vois n'est pas tout. Les règles de cette ville sont trop rigides pour être brisées.",
						"spanish": "Lo que ves no lo es todo. Las reglas de esta ciudad son demasiado rígidas para romperse.",
						"vietnamese": "Những gì bạn thấy không phải là tất cả. Quy tắc của thành phố này quá cứng nhắc, không thể phá vỡ.",
						"thai": "สิ่งที่เห็นไม่ใช่ทั้งหมด กฎของเมืองนี้แข็งแกร่งเกินกว่าจะทำลายได้",
						"hindi": "जो तुम देखते हो, वह सब कुछ नहीं है। इस शहर के नियम इतने कठोर हैं कि तोड़े नहीं जा सकते।"
					},
					"emotion": "base",
					"speaker": "dax"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "왜 그런 표정으로 보지? 이제야 좀 이상하다는 걸 깨달았나?",
						"english": "Why that look? Just realizing something's off now?",
						"japanese": "なぜそんな顔で見る？今になってようやくおかしいと気づいたか？",
						"chinese": "为什么是那种表情？现在才意识到有些不对劲吗？",
						"french": "Pourquoi ce regard ? Tu ne réalises que maintenant que quelque chose cloche ?",
						"spanish": "¿Por qué esa mirada? ¿Recién te das cuenta de que algo anda mal?",
						"vietnamese": "Sao lại nhìn với vẻ mặt đó? Giờ mới nhận ra có gì đó bất thường sao?",
						"thai": "ทำไมทำหน้าแบบนั้น? เพิ่งจะรู้ตัวว่ามีบางอย่างผิดปกติเหรอ?",
						"hindi": "ऐसी शक्ल क्यों बना रखी है? अब समझ आया कि कुछ अजीब है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…냉담한 판결. 그리고 당신의 말.",
						"english": "...A cold verdict. And your words.",
						"japanese": "...冷酷な判決。そしてあなたの言葉。",
						"chinese": "......冷酷的判决。还有你的话。",
						"french": "...Un verdict froid. Et tes mots.",
						"spanish": "...Un veredicto frío. Y tus palabras.",
						"vietnamese": "...Bản án lạnh lùng. Và lời nói của bạn.",
						"thai": "...คำพิพากษาที่เย็นชา และคำพูดของคุณ",
						"hindi": "...एक ठंडा फैसला। और तुम्हारी बातें।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "정의라는 이름의 폭력은 흔해. 특히 이곳에선.",
						"english": "Violence in the name of 'justice' is common. Especially here.",
						"japanese": "「正義」の名を借りた暴力はよくあることだ。特にここでは。",
						"chinese": "以“正义”之名的暴力很常见。尤其是在这里。",
						"french": "La violence au nom de la « justice » est courante. Surtout ici.",
						"spanish": "La violencia en nombre de la \"justicia\" es común. Especialmente aquí.",
						"vietnamese": "Bạo lực dưới danh nghĩa 'công lý' rất phổ biến. Đặc biệt là ở đây.",
						"thai": "ความรุนแรงในนามของ 'ความยุติธรรม' เป็นเรื่องปกติ โดยเฉพาะที่นี่",
						"hindi": "'न्याय' के नाम पर हिंसा आम है। खासकर यहाँ।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "어째서 이런 일이….",
						"english": "Why is this happening...?",
						"japanese": "なぜこんなことが...",
						"chinese": "为什么会发生这种事...",
						"french": "Pourquoi cela arrive-t-il...?",
						"spanish": "¿Por qué está pasando esto...?",
						"vietnamese": "Tại sao điều này lại xảy ra...?",
						"thai": "ทำไมถึงเกิดเรื่องแบบนี้...",
						"hindi": "ऐसा क्यों हो रहा है...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시는 태생부터 어딘가 뒤틀려 있어. 마치 오래된 저주처럼.",
						"english": "This city has been twisted from its very beginning. Like an ancient curse.",
						"japanese": "この都市は生まれつきどこか歪んでいる。まるで古い呪いのように。",
						"chinese": "这座城市从诞生之初就扭曲了。就像一个古老的诅咒。",
						"french": "Cette ville est tordue depuis sa naissance. Comme une ancienne malédiction.",
						"spanish": "Esta ciudad está retorcida desde su origen. Como una antigua maldición.",
						"vietnamese": "Thành phố này đã bị vặn vẹo từ khi mới ra đời. Giống như một lời nguyền cổ xưa.",
						"thai": "เมืองนี้บิดเบี้ยวมาตั้งแต่ต้น ราวกับคำสาปโบราณ",
						"hindi": "यह शहर शुरुआत से ही कहीं-न-कहीं मुड़ा हुआ है। जैसे कोई पुराना अभिशाप।"
					},
					"speaker": "dax",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 끝이야. 이제 선택해야 할 거야. 맹목적인 질서에 순응할지, 아니면….",
						"english": "This is the end. Now you must choose. Conform to blind order, or...",
						"japanese": "ここが終わりだ。今、選択しなければならない。盲目的な秩序に従うか、それとも…",
						"chinese": "这里是终点。现在你必须做出选择。是顺从盲目的秩序，还是……",
						"french": "C'est la fin. Maintenant, tu dois choisir. Te conformer à l'ordre aveugle, ou...",
						"spanish": "Este es el final. Ahora debes elegir. ¿Conformarte al orden ciego, o...?",
						"vietnamese": "Đây là điểm cuối. Bây giờ ngươi phải chọn. Tuân theo trật tự mù quáng, hay...",
						"thai": "นี่คือจุดจบ ตอนนี้เจ้าต้องเลือก จะยอมจำนนต่อระเบียบอันมืดบอด หรือ...",
						"hindi": "यह अंत है। अब तुम्हें चुनना होगा। या तो अंधाधुंध व्यवस्था का पालन करो, या..."
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니면?",
						"english": "Or what?",
						"japanese": "それとも？",
						"chinese": "还是什么？",
						"french": "Ou quoi ?",
						"spanish": "¿O qué?",
						"vietnamese": "Hay gì?",
						"thai": "หรืออะไร?",
						"hindi": "या क्या?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실을 파헤치다 부서질지. 이 길은 돌아갈 수 없어.",
						"english": "Be broken uncovering the truth. There's no turning back from this path.",
						"japanese": "真実を暴き、砕け散るか。この道はもう戻れない。",
						"chinese": "揭露真相而被粉碎。这条路没有回头。",
						"french": "Être brisé en déterrant la vérité. Ce chemin est sans retour.",
						"spanish": "Ser destrozado al desenterrar la verdad. Este camino no tiene vuelta atrás.",
						"vietnamese": "Bị tan vỡ khi vén màn sự thật. Con đường này không thể quay lại.",
						"thai": "หรือจะถูกทำลายในการเปิดเผยความจริง เส้นทางนี้ไม่มีวันย้อนกลับ",
						"hindi": "सच को उजागर करते हुए टूट जाना। इस रास्ते से कोई वापसी नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "겁주는 건가?",
						"english": "Are you trying to scare me?",
						"japanese": "脅しているのか？",
						"chinese": "你在吓唬我吗？",
						"french": "Tu essaies de me faire peur ?",
						"spanish": "¿Estás intentando asustarme?",
						"vietnamese": "Ngươi đang dọa ta à?",
						"thai": "คุณกำลังพยายามขู่ฉันเหรอ?",
						"hindi": "क्या तुम मुझे डराने की कोशिश कर रहे हो?"
					}
				},
				{
					"content": {
						"korean": "난 그저 보여줄 뿐이야. 도시의 진짜 얼굴을.",
						"english": "I'm just showing you. The city's true face.",
						"japanese": "私はただ見せるだけだ。この都市の真の顔を。",
						"chinese": "我只是给你看。这座城市的真面目。",
						"french": "Je ne fais que te montrer. Le vrai visage de la ville.",
						"spanish": "Solo te estoy mostrando. La verdadera cara de la ciudad.",
						"vietnamese": "Ta chỉ cho ngươi thấy. Bộ mặt thật của thành phố.",
						"thai": "ฉันแค่จะแสดงให้คุณเห็น ใบหน้าที่แท้จริงของเมือง",
						"hindi": "मैं बस तुम्हें दिखा रहा हूँ। शहर का असली चेहरा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "up",
					"speaker": "dax"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 헛된 몸부림… 질서는… 깨지지 않아….",
						"english": "Ugh... a futile struggle... Order... cannot be broken...",
						"japanese": "くっ… 無駄な足掻き… 秩序は… 破られない…",
						"chinese": "呃……徒劳的挣扎……秩序是……不可打破的……",
						"french": "Ugh... une lutte vaine... L'ordre... ne peut être brisé...",
						"spanish": "Ugh... una lucha inútil... El orden... no puede romperse...",
						"vietnamese": "Khụ... Vô ích... Trật tự... không thể bị phá vỡ...",
						"thai": "อึก... ความพยายามที่ไร้ประโยชน์... ระเบียบ... ไม่มีวันแตกหัก...",
						"hindi": "उह... व्यर्थ का संघर्ष... व्यवस्था... टूट नहीं सकती..."
					}
				},
				{
					"content": {
						"korean": "쓰러뜨렸어…! 하지만….",
						"english": "Defeated it...! But...",
						"japanese": "倒した…！だが…。",
						"chinese": "打败了…！但是…。",
						"french": "Je l'ai vaincu…! Mais…",
						"spanish": "¡Lo derroté...! Pero...",
						"vietnamese": "Đã đánh bại nó…! Nhưng mà…",
						"thai": "ล้มมันได้แล้ว...! แต่ว่า...",
						"hindi": "हरा दिया...! लेकिन..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그림자 보스는 쓰러졌지만, 도시의 질서는 여전히 견고했다. 이것은 시작에 불과했다.",
						"english": "The Shadow Boss fell, but the city's order remained firm. This was merely the beginning.",
						"japanese": "影のボスは倒れたが、都市の秩序は依然として強固だった。これは始まりに過ぎなかった。",
						"chinese": "暗影首领倒下了，但城市的秩序依然坚不可摧。这仅仅是个开始。",
						"french": "Le Boss de l'Ombre est tombé, mais l'ordre de la ville restait inébranlable. Ce n'était que le début.",
						"spanish": "El Jefe de las Sombras cayó, pero el orden de la ciudad permaneció firme. Esto era solo el principio.",
						"vietnamese": "Trùm Bóng Tối đã ngã xuống, nhưng trật tự của thành phố vẫn kiên cố. Đây chỉ là khởi đầu mà thôi.",
						"thai": "บอสเงาพ่ายแพ้ไปแล้ว แต่ระเบียบของเมืองยังคงแข็งแกร่ง นี่เป็นเพียงแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "शैडो बॉस गिर गया, लेकिन शहर की व्यवस्था अभी भी मजबूत थी। यह तो बस शुरुआत थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 정체를 알 수 없는 존재가 어둠 속에서 나타났다.",
						"english": "A colossal shadow blocked the path. An unknown entity emerged from the darkness.",
						"japanese": "巨大な影が道を塞いだ。正体不明の存在が闇の中から現れた。",
						"chinese": "一个巨大的阴影挡住了去路。一个不明身份的存在从黑暗中出现。",
						"french": "Une ombre colossale bloquait le chemin. Une entité inconnue émergea de l'obscurité.",
						"spanish": "Una sombra colosal bloqueó el camino. Una entidad desconocida emergió de la oscuridad.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Một thực thể không rõ danh tính xuất hiện từ bóng tối.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ สิ่งมีชีวิตที่ไม่รู้จักปรากฏขึ้นจากความมืด",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया। एक अज्ञात सत्ता अंधेरे से उभरी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 이 법정에 도전하는 어리석은 자들.",
						"english": "How dare you... foolish ones who challenge this court.",
						"japanese": "よくも… この法廷に挑む愚か者どもめ。",
						"chinese": "竟敢……挑战这个法庭的愚蠢之徒。",
						"french": "Comment osez-vous... idiots qui défiez cette cour.",
						"spanish": "¿Cómo os atrevéis... necios que desafiáis a este tribunal?",
						"vietnamese": "Dám... những kẻ ngu xuẩn dám thách thức tòa án này.",
						"thai": "บังอาจ... พวกโง่เขลาที่ท้าทายศาลนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मूर्खों, जो इस अदालत को चुनौती देते हो।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 질서를 조종하는 자인가!",
						"english": "Are you the one who controls all this order?!",
						"japanese": "お前がこの全ての秩序を操る者なのか！",
						"chinese": "你就是那个操纵这一切秩序的人吗？！",
						"french": "Es-tu celui qui contrôle tout cet ordre ?!",
						"spanish": "¿Eres tú quien controla todo este orden?",
						"vietnamese": "Ngươi là kẻ điều khiển tất cả trật tự này sao!",
						"thai": "เจ้าคือผู้ที่ควบคุมระเบียบทั้งหมดนี้หรือ!",
						"hindi": "क्या तुम ही हो जो इस सारी व्यवस्था को नियंत्रित करता है?!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 질서 그 자체다. 너희는 그저 혼돈일 뿐.",
						"english": "I am order itself. You are merely chaos.",
						"japanese": "私は秩序そのものだ。お前たちはただの混沌に過ぎない。",
						"chinese": "我就是秩序本身。你们不过是混乱。",
						"french": "Je suis l'ordre même. Vous n'êtes que chaos.",
						"spanish": "Yo soy el orden mismo. Vosotros sois meramente el caos.",
						"vietnamese": "Ta là trật tự. Các ngươi chỉ là hỗn loạn.",
						"thai": "ฉันคือระเบียบเอง พวกเจ้าเป็นเพียงความโกลาหล",
						"hindi": "मैं स्वयं व्यवस्था हूँ। तुम बस अराजकता हो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 감히 나의 질서를 거스를 셈이냐.",
						"english": "Fools. Do you dare defy my order?",
						"japanese": "愚かな者たち。あえて私の秩序に逆らうというのか。",
						"chinese": "愚蠢的东西。竟敢反抗我的秩序。",
						"french": "Imbéciles. Osez-vous défier mon ordre ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar mi orden?",
						"vietnamese": "Đồ ngốc. Dám cả gan chống lại trật tự của ta sao?",
						"thai": "พวกโง่เง่า! กล้าดียังไงมาท้าทายระเบียบของข้า",
						"hindi": "मूर्खों। क्या तुम्हारी हिम्मत है मेरे आदेश का उल्लंघन करने की?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…! 우리는 멈추지 않아!",
						"english": "It's not... over yet...! We won't stop!",
						"japanese": "まだ…終わってない…！我々は止まらない！",
						"chinese": "还没有…结束…！我们不会停下！",
						"french": "Ce n'est pas… fini…! Nous ne nous arrêterons pas !",
						"spanish": "¡Aún no... ha terminado...! ¡No nos detendremos!",
						"vietnamese": "Chưa… kết thúc đâu…! Chúng tôi sẽ không dừng lại!",
						"thai": "ยัง…ไม่จบ…! พวกเราจะไม่หยุด!",
						"hindi": "अभी... खत्म नहीं हुआ...! हम रुकेंगे नहीं!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
