export const scenario_snowy_cairn_76_02 = {
	"scenario_id": "snowy_cairn_76_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"돌무덤, 그 이름 없는 탑은 배신의 기록이었다.",
			"형제가 형제를, 동지가 동지를. 얼어붙은 장면들.",
			"오랫동안 그 돌을 들여다본 자는 비로소 자신을 본다.",
			"깊숙이 숨겨진, 가장 추악한 욕망을."
		],
		"english": [
			"The Stone Cairn, that nameless tower, was a record of betrayal.",
			"Brother against brother, comrade against comrade. Frozen scenes.",
			"He who gazed long into those stones, at last saw himself.",
			"The deepest hidden, most hideous desire."
		],
		"japanese": [
			"石塚、その名もなき塔は裏切りの記録であった。",
			"兄弟が兄弟を、同志が同志を。凍りついた情景。",
			"長くその石を見つめた者は、ついに己を見る。",
			"奥深く隠された、最も醜悪な欲望を。"
		],
		"chinese": [
			"石冢，那无名之塔，是背叛的记录。",
			"兄弟相残，战友相斗。凝固的场景。",
			"长久凝视那些石头的人，终将看到自己。",
			"深藏不露的，最丑恶的欲望。"
		],
		"french": [
			"Le Cairn de Pierre, cette tour sans nom, était un registre de trahison.",
			"Frère contre frère, camarade contre camarade. Des scènes figées.",
			"Celui qui a longtemps contemplé ces pierres, finit par se voir lui-même.",
			"Le désir le plus profondément enfoui, le plus hideux."
		],
		"spanish": [
			"El Túmulo de Piedra, esa torre sin nombre, era un registro de traición.",
			"Hermano contra hermano, compañero contra compañero. Escenas congeladas.",
			"Quien miró largamente esas piedras, finalmente se vio a sí mismo.",
			"El deseo más profundamente oculto, el más espantoso."
		],
		"vietnamese": [
			"Mộ Đá, ngọn tháp vô danh ấy, là một biên niên sử của sự phản bội.",
			"Anh em chống lại anh em, đồng chí chống lại đồng chí. Những cảnh tượng đóng băng.",
			"Kẻ nào nhìn sâu vào những tảng đá ấy lâu dài, cuối cùng sẽ thấy chính mình.",
			"Khao khát ẩn sâu nhất, ghê tởm nhất."
		],
		"thai": [
			"สุสานหิน, หอคอยไร้นามนั้น, คือบันทึกแห่งการทรยศ.",
			"พี่น้องต่อพี่น้อง, สหายต่อสหาย. ฉากที่แข็งค้าง.",
			"ผู้ที่จ้องมองก้อนหินเหล่านั้นนานไป, ในที่สุดก็จะเห็นตัวเอง.",
			"ความปรารถนาที่ซ่อนลึกที่สุด, น่าเกลียดน่ากลัวที่สุด."
		],
		"hindi": [
			"पत्थरों का ढेर, वह गुमनाम मीनार, विश्वासघात का एक अभिलेख था।",
			"भाई के विरुद्ध भाई, साथी के विरुद्ध साथी। जमी हुई छवियाँ।",
			"जिसने लंबे समय तक उन पत्थरों को देखा, उसने अंततः खुद को देखा।",
			"सबसे गहरा छिपा हुआ, सबसे घृणित वासना।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 화강암 조각들이 거대한 무덤을 이루었다.",
						"english": "Cold granite fragments formed a colossal tomb.",
						"japanese": "冷たい花崗岩の破片が巨大な墓を形成していた。",
						"chinese": "冰冷的花岗岩碎片构成了巨大的墓穴。",
						"french": "De froids fragments de granite formaient une tombe colossale.",
						"spanish": "Fríos fragmentos de granito formaban una tumba colosal.",
						"vietnamese": "Những mảnh đá granite lạnh lẽo tạo thành một ngôi mộ khổng lồ.",
						"thai": "เศษหินแกรนิตเย็นยะเยือกก่อตัวเป็นสุสานขนาดมหึมา.",
						"hindi": "ठंडे ग्रेनाइट के टुकड़े एक विशाल कब्र बनाते थे।"
					}
				},
				{
					"content": {
						"korean": "이걸 만져도 괜찮은 거야?",
						"english": "Is it okay to touch this?",
						"japanese": "これ、触っても大丈夫？",
						"chinese": "碰这个没关系吗？",
						"french": "Est-ce que je peux toucher ça ?",
						"spanish": "¿Está bien tocar esto?",
						"vietnamese": "Chạm vào cái này có sao không?",
						"thai": "สัมผัสสิ่งนี้ได้ไหม?",
						"hindi": "क्या इसे छूना ठीक है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "두려워 마라. 강해지기 위해 온 것 아닌가.",
						"english": "Don't be afraid. Haven't you come to grow stronger?",
						"japanese": "恐れるな。強くなるために来たのではないか。",
						"chinese": "别害怕。你不是为了变强才来的吗？",
						"french": "N'aie pas peur. N'es-tu pas venu pour devenir plus fort ?",
						"spanish": "No temas. ¿No has venido a hacerte más fuerte?",
						"vietnamese": "Đừng sợ. Chẳng phải ngươi đến đây để trở nên mạnh mẽ hơn sao?",
						"thai": "อย่ากลัวเลย. เจ้าไม่ได้มาที่นี่เพื่อแข็งแกร่งขึ้นหรอกหรือ?",
						"hindi": "डरो मत। क्या तुम मज़बूत बनने नहीं आए हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "…이건… 두 사람이 등을 돌리고 있어.",
						"english": "...This is... two people turning their backs.",
						"japanese": "…これは…二人が背を向けている。",
						"chinese": "……这是……两个人背对着。",
						"french": "...C'est... deux personnes qui se tournent le dos.",
						"spanish": "...Esto es... dos personas dándose la espalda.",
						"vietnamese": "...Đây là... hai người quay lưng lại.",
						"thai": "...นี่มัน... สองคนหันหลังให้กัน.",
						"hindi": "...यह... दो लोग पीठ फेर रहे हैं।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "어리석은 자들. 강한 자만이 살아남는다. 배신은 약자들의 핑계일 뿐.",
						"english": "Fools. Only the strong survive. Betrayal is just an excuse for the weak.",
						"japanese": "愚か者たちめ。強者だけが生き残る。裏切りは弱者の言い訳に過ぎない。",
						"chinese": "愚蠢之人。只有强者才能生存。背叛不过是弱者的借口。",
						"french": "Imbéciles. Seuls les forts survivent. La trahison n'est qu'une excuse pour les faibles.",
						"spanish": "Necios. Solo los fuertes sobreviven. La traición es solo una excusa para los débiles.",
						"vietnamese": "Lũ ngốc. Chỉ kẻ mạnh mới sống sót. Phản bội chỉ là cái cớ của kẻ yếu.",
						"thai": "พวกโง่เง่า. มีแต่ผู้แข็งแกร่งเท่านั้นที่รอดชีวิต. การทรยศเป็นเพียงข้ออ้างของผู้อ่อนแอ.",
						"hindi": "मूर्खों। केवल शक्तिशाली ही जीवित रहते हैं। विश्वासघात कमजोरों का बस एक बहाना है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "돌무덤을 파고들수록, 배신의 장면들은 더욱 선명해졌다.",
						"english": "The deeper one delved into the Stone Cairn, the clearer the scenes of betrayal became.",
						"japanese": "石塚を掘り進むほど、裏切りの情景はさらに鮮明になった。",
						"chinese": "越是深入石冢，背叛的场景就越发清晰。",
						"french": "Plus on s'enfonçait dans le Cairn de Pierre, plus les scènes de trahison devenaient nettes.",
						"spanish": "Cuanto más se adentraba uno en el Túmulo de Piedra, más claras se hacían las escenas de traición.",
						"vietnamese": "Càng đào sâu vào Mộ Đá, những cảnh tượng phản bội càng trở nên rõ ràng.",
						"thai": "ยิ่งขุดลึกลงไปในสุสานหิน, ฉากแห่งการทรยศก็ยิ่งชัดเจนขึ้น.",
						"hindi": "जैसे-जैसे कोई पत्थरों के ढेर में गहराई से उतरता गया, विश्वासघात के दृश्य और स्पष्ट होते गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 장면… 싸움이 끝나고 동료를 버리는 모습이야.",
						"english": "This scene… after the battle, abandoning a comrade.",
						"japanese": "この場面…戦いが終わり、仲間を見捨てる姿だ。",
						"chinese": "这个场景…战斗结束后，抛弃同伴的样子。",
						"french": "Cette scène… après le combat, on abandonne un camarade.",
						"spanish": "Esta escena… después de la batalla, abandonando a un compañero.",
						"vietnamese": "Cảnh này… sau trận chiến, bỏ rơi đồng đội.",
						"thai": "ฉากนี้…หลังการต่อสู้ ทอดทิ้งสหาย",
						"hindi": "यह दृश्य… युद्ध के बाद, एक साथी को त्यागना।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…흥. 비겁한. 약한 자의 최후는 늘 비참하다.",
						"english": "…Hmph. Cowardly. The weak always meet a miserable end.",
						"japanese": "…フン。卑怯者め。弱き者の末路は常に悲惨だ。",
						"chinese": "…哼。懦夫。弱者的结局总是悲惨的。",
						"french": "…Hmph. Lâche. La fin des faibles est toujours misérable.",
						"spanish": "…Hm. Cobarde. El fin de los débiles siempre es miserable.",
						"vietnamese": "…Hừ. Hèn nhát. Kẻ yếu luôn có kết cục bi thảm.",
						"thai": "…หึ. ขี้ขลาด. จุดจบของผู้อ่อนแอช่างน่าสังเวชเสมอ",
						"hindi": "…हम्म। कायरतापूर्ण। कमजोरों का अंत हमेशा दुखद होता है।"
					}
				},
				{
					"content": {
						"korean": "뭔가 불편해 보여, 이바르.",
						"english": "You look uncomfortable, Ivar.",
						"japanese": "何か落ち着かないようだね、イヴァル。",
						"chinese": "你看起来有点不安，伊瓦尔。",
						"french": "Tu sembles mal à l'aise, Ivar.",
						"spanish": "Pareces incómodo, Ivar.",
						"vietnamese": "Trông anh có vẻ không thoải mái, Ivar.",
						"thai": "ดูเหมือนเจ้าจะไม่สบายใจนะ, ไอวาร์",
						"hindi": "तुम असहज दिखते हो, इवर।"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…아무것도 아니다.",
						"english": "…It's nothing.",
						"japanese": "…何でもない。",
						"chinese": "…没什么。",
						"french": "…Ce n'est rien.",
						"spanish": "…No es nada.",
						"vietnamese": "…Không có gì.",
						"thai": "…ไม่มีอะไร",
						"hindi": "…कुछ नहीं।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "한 조각, 한 조각. 돌무덤은 보는 이의 마음을 파고들었다.",
						"english": "Piece by piece. The cairn burrowed into the viewer's heart.",
						"japanese": "一片、一片。石塚は見る者の心に深く突き刺さった。",
						"chinese": "一块又一块。石冢侵蚀着观者的内心。",
						"french": "Morceau par morceau. Le cairn s'insinuait dans le cœur de celui qui le regardait.",
						"spanish": "Pedazo a pedazo. El túmulo de piedras se clavaba en el corazón del observador.",
						"vietnamese": "Từng mảnh, từng mảnh. Mộ đá khắc sâu vào lòng người nhìn.",
						"thai": "ทีละชิ้น ทีละชิ้น. กองหินนั้นกัดกินจิตใจของผู้มอง",
						"hindi": "एक-एक करके। पत्थरों का ढेर देखने वाले के दिल में उतर गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "(돌 조각에 새겨진 장면을 응시하며) …강함. 오직 강함만이…",
						"english": "(Gazing at the scene carved into the stone fragment) …Strength. Only strength…",
						"japanese": "(石の破片に刻まれた場面を見つめながら) …強さ。ただ強さだけが…",
						"chinese": "(凝视着石片上刻的场景) …强大。唯有强大…",
						"french": "(Fixant la scène gravée sur le fragment de pierre) …La force. Seule la force…",
						"spanish": "(Contemplando la escena grabada en el fragmento de piedra) …Fuerza. Solo la fuerza…",
						"vietnamese": "(Nhìn chằm chằm vào cảnh khắc trên mảnh đá) …Sức mạnh. Chỉ sức mạnh mới…",
						"thai": "(จ้องมองฉากที่สลักบนเศษหิน) …ความแข็งแกร่ง. มีเพียงความแข็งแกร่งเท่านั้น…",
						"hindi": "(पत्थर के टुकड़े पर उकेरे गए दृश्य को देखते हुए) …शक्ति। केवल शक्ति ही…"
					}
				},
				{
					"content": {
						"korean": "이바르, 왜 그래? 안색이 안 좋아.",
						"english": "Ivar, what's wrong? You don't look well.",
						"japanese": "イヴァル、どうしたんだ？顔色が悪いぞ。",
						"chinese": "伊瓦尔，你怎么了？脸色不太好。",
						"french": "Ivar, qu'est-ce qui ne va pas ? Tu n'as pas bonne mine.",
						"spanish": "Ivar, ¿qué te pasa? No tienes buen color.",
						"vietnamese": "Ivar, có chuyện gì vậy? Sắc mặt anh không tốt.",
						"thai": "ไอวาร์, เกิดอะไรขึ้น? เจ้าดูไม่สบาย",
						"hindi": "इवर, क्या हुआ? तुम्हारी तबीयत ठीक नहीं लग रही।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "(흠칫) …아무것도 아니다.",
						"english": "(Startled) …It's nothing.",
						"japanese": "(はっとする) …何でもない。",
						"chinese": "(吓了一跳) …没什么。",
						"french": "(Surpris) …Ce n'est rien.",
						"spanish": "(Sobresaltado) …No es nada.",
						"vietnamese": "(Giật mình) …Không có gì.",
						"thai": "(สะดุ้ง) …ไม่มีอะไร",
						"hindi": "(चौंककर) …कुछ नहीं।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(낮은 목소리로) …나는… 나는 항상 정당했는가?",
						"english": "(In a low voice) …Was I… was I always righteous?",
						"japanese": "(低い声で) …私は…私は常に正しかったのか？",
						"chinese": "(低声) …我…我一直都是正义的吗？",
						"french": "(À voix basse) …Ai-je… ai-je toujours été juste ?",
						"spanish": "(En voz baja) …¿Fui… fui siempre justo?",
						"vietnamese": "(Với giọng trầm) …Tôi… tôi có luôn chính đáng không?",
						"thai": "(เสียงต่ำ) …ฉัน…ฉันถูกต้องเสมอมาหรือไม่?",
						"hindi": "(धीमी आवाज़ में) …क्या मैं… क्या मैं हमेशा सही था?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "หมายความว่าอย่างไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "아니. 아무것도 아니다. 계속 가자.",
						"english": "No. It's nothing. Let's keep going.",
						"japanese": "いや。何でもない。進もう。",
						"chinese": "不。没什么。我们继续走吧。",
						"french": "Non. Ce n'est rien. Continuons.",
						"spanish": "No. No es nada. Sigamos.",
						"vietnamese": "Không. Không có gì. Cứ đi tiếp đi.",
						"thai": "ไม่สิ ไม่มีอะไร ไปกันต่อเถอะ",
						"hindi": "नहीं। कुछ भी तो नहीं। चलो चलते हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "돌무덤은 더욱 거대해졌다. 배신의 역사는 끝없이 이어지는 듯했다.",
						"english": "The cairn grew even larger. The history of betrayal seemed endless.",
						"japanese": "塚はさらに巨大になった。裏切りの歴史は果てしなく続くかのようだった。",
						"chinese": "石冢变得更加巨大了。背叛的历史似乎无休止地延续着。",
						"french": "Le cairn devint encore plus grand. L'histoire de la trahison semblait sans fin.",
						"spanish": "El túmulo se hizo aún más grande. La historia de la traición parecía interminable.",
						"vietnamese": "Đống đá càng thêm khổng lồ. Lịch sử phản bội dường như kéo dài bất tận.",
						"thai": "กองหินยิ่งใหญ่ขึ้น ประวัติศาสตร์แห่งการทรยศดูเหมือนจะไม่มีที่สิ้นสุด",
						"hindi": "पत्थर का ढेर और भी विशाल हो गया। विश्वासघात का इतिहास अंतहीन सा लग रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이바르, 저 돌들은 계속해서… 우리 안의 무언가를 끄집어내는 것 같아.",
						"english": "Ivar, those stones keep... pulling something out of us.",
						"japanese": "イヴァル、あの石たちは何か…俺たちの内にあるものを引き出しているようだ。",
						"chinese": "伊瓦尔，那些石头不断地……好像在从我们体内拉出什么东西。",
						"french": "Ivar, ces pierres ne cessent de... faire ressortir quelque chose en nous.",
						"spanish": "Ivar, esas piedras siguen... sacando algo de nosotros.",
						"vietnamese": "Ivar, những tảng đá đó cứ... như đang kéo thứ gì đó ra khỏi chúng ta.",
						"thai": "ไอบาร์ หินพวกนั้นยังคง... ดึงบางสิ่งบางอย่างออกมาจากข้างในเรา",
						"hindi": "इवर, वो पत्थर लगातार… हमारे अंदर से कुछ खींच रहे हैं।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(분노에 찬 표정으로) 닥쳐라! 강함은… 약함을 극복하는 것이다!",
						"english": "(With a furious expression) Silence! Strength... overcomes weakness!",
						"japanese": "（怒りに満ちた表情で）黙れ！強さとは…弱さを克服するものだ！",
						"chinese": "（带着愤怒的表情）闭嘴！强大……是战胜弱小的！",
						"french": "(Avec une expression furieuse) Silence ! La force... surmonte la faiblesse !",
						"spanish": "(Con expresión furiosa) ¡Cállate! ¡La fuerza... supera la debilidad!",
						"vietnamese": "(Với vẻ mặt giận dữ) Im đi! Sức mạnh... là để vượt qua sự yếu đuối!",
						"thai": "(ด้วยสีหน้าโกรธจัด) หุบปากซะ! ความแข็งแกร่งคือ... การเอาชนะความอ่อนแอ!",
						"hindi": "(क्रोधित भाव से) चुप रहो! शक्ति… कमजोरी पर विजय पाती है!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이딴… 어리석은 감정으로 나를 흔들지 마라!",
						"english": "Don't... sway me with such foolish emotions!",
						"japanese": "こんな…愚かな感情で俺を揺さぶるな！",
						"chinese": "别想用这种……愚蠢的情感动摇我！",
						"french": "Ne me... fais pas vaciller avec de telles émotions stupides !",
						"spanish": "¡No me... hagas dudar con esas emociones estúpidas!",
						"vietnamese": "Đừng... lay chuyển ta bằng những cảm xúc ngu xuẩn như vậy!",
						"thai": "อย่า... ทำให้ข้าหวั่นไหวด้วยอารมณ์โง่ ๆ แบบนี้!",
						"hindi": "ऐसी… मूर्खतापूर्ण भावनाओं से मुझे मत हिलाओ!"
					}
				},
				{
					"content": {
						"korean": "흔들리는 건… 이바르 자신이야.",
						"english": "The one wavering... is Ivar himself.",
						"japanese": "揺らいでいるのは…イヴァル自身だ。",
						"chinese": "动摇的……是伊瓦尔自己。",
						"french": "Celui qui vacille... c'est Ivar lui-même.",
						"spanish": "El que duda... es Ivar mismo.",
						"vietnamese": "Kẻ đang lay động... chính là Ivar.",
						"thai": "ผู้ที่กำลังหวั่นไหว... คือไอบาร์เองต่างหาก",
						"hindi": "जो हिल रहा है… वो इवर खुद है।"
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "…결국 너희는 너희 안의 어둠에 삼켜질 뿐.",
						"english": "...Ultimately, you will only be swallowed by the darkness within you.",
						"japanese": "…結局お前たちは、お前たちの中の闇に飲み込まれるだけだ。",
						"chinese": "……最终你们只会吞噬在自己内心的黑暗中。",
						"french": "...Finalement, vous ne serez qu'engloutis par les ténèbres qui sont en vous.",
						"spanish": "...Al final, solo serás tragado por la oscuridad dentro de ti.",
						"vietnamese": "...Cuối cùng các ngươi cũng chỉ bị nuốt chửng bởi bóng tối bên trong mình.",
						"thai": "...ท้ายที่สุดแล้ว พวกเจ้าก็เป็นเพียงแค่จะถูกความมืดมิดภายในกลืนกิน.",
						"hindi": "...आखिरकार, तुम अपने अंदर के अंधेरे में समा जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 아직… 포기 안 해!",
						"english": "Damn it! I won't give up yet!",
						"japanese": "くそっ！まだ…諦めない！",
						"chinese": "可恶！我还没……放弃！",
						"french": "Mince ! Je n'abandonne pas encore !",
						"spanish": "¡Maldita sea! ¡Aún no me rindo!",
						"vietnamese": "Chết tiệt! Tôi... vẫn chưa bỏ cuộc!",
						"thai": "ให้ตายสิ! ยัง...ไม่ยอมแพ้!",
						"hindi": "धिक्कार है! मैं अभी... हार नहीं मानूंगा!"
					}
				},
				{
					"content": {
						"korean": "…이런 곳에서 멈출 수는 없다! 다시 일어설 것이다!",
						"english": "...I can't stop in a place like this! I will rise again!",
						"japanese": "…こんな場所で止まるわけにはいかない！再び立ち上がるのだ！",
						"chinese": "……不能在这种地方停下！我会再次站起来的！",
						"french": "...Je ne peux pas m'arrêter ici ! Je me relèverai !",
						"spanish": "¡No puedo detenerme en un lugar como este! ¡Me levantaré de nuevo!",
						"vietnamese": "...Không thể dừng lại ở nơi như thế này! Tôi sẽ đứng dậy lần nữa!",
						"thai": "...จะมาหยุดอยู่แค่นี้ไม่ได้! ข้าจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "...मैं ऐसी जगह पर नहीं रुक सकता! मैं फिर से उठूंगा!"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 와라. 너희의 이기심이 더욱 깊어질 때까지.",
						"english": "Return when your selfishness runs deeper.",
						"japanese": "また来い。お前たちの私欲が、もっと深まるまでは。",
						"chinese": "等你们的私欲更深时，再回来吧。",
						"french": "Revenez, lorsque votre égoïsme sera plus profond encore.",
						"spanish": "Volved, cuando vuestro egoísmo se haya arraigado más profundamente.",
						"vietnamese": "Hãy trở lại, khi lòng ích kỷ của các ngươi đã ăn sâu hơn nữa.",
						"thai": "กลับมาอีกครา เมื่อความเห็นแก่ตัวของพวกเจ้าหยั่งรากลึกยิ่งกว่าเดิม",
						"hindi": "फिर लौटना, जब तुम्हारी स्वार्थपरता और गहरी हो जाए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "돌무덤의 가장 깊은 곳. 그곳에서 모든 배신이 시작된 듯했다.",
						"english": "The deepest part of the cairn. It seemed all betrayal began there.",
						"japanese": "塚の最も深い場所。そこからすべての裏切りが始まったようだった。",
						"chinese": "石冢最深处。似乎所有的背叛都从那里开始。",
						"french": "La partie la plus profonde du cairn. Il semblait que toutes les trahisons y avaient commencé.",
						"spanish": "La parte más profunda del túmulo. Parecía que toda traición comenzó allí.",
						"vietnamese": "Nơi sâu nhất của đống đá. Dường như mọi sự phản bội đều bắt đầu từ đó.",
						"thai": "ส่วนที่ลึกที่สุดของกองหิน ดูเหมือนว่าการทรยศทั้งหมดเริ่มต้นขึ้นที่นั่น",
						"hindi": "पत्थर के ढेर का सबसे गहरा स्थान। ऐसा लग रहा था कि सभी विश्वासघात वहीं से शुरू हुए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 필멸자들. 너희 안의 어둠은 보이지 않는가?",
						"english": "...Foolish mortals. Can you not see the darkness within you?",
						"japanese": "…愚かなる定命の者ども。お前たちの中の闇が見えないのか？",
						"chinese": "……愚蠢的凡人。你们看不见自己内心的黑暗吗？",
						"french": "...Mortels insensés. Ne voyez-vous pas les ténèbres en vous ?",
						"spanish": "...Mortales necios. ¿No veis la oscuridad dentro de vosotros?",
						"vietnamese": "...Hỡi những kẻ phàm trần ngu ngốc. Các ngươi không thấy bóng tối bên trong mình sao?",
						"thai": "...มนุษย์ที่โง่เขลา เจ้าไม่เห็นความมืดมิดในตัวเจ้าเองหรือไร?",
						"hindi": "…मूर्ख नश्वर प्राणी। क्या तुम्हें अपने अंदर का अंधेरा नहीं दिखता?"
					}
				},
				{
					"content": {
						"korean": "너는 누구냐!",
						"english": "Who are you!",
						"japanese": "お前は誰だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 너희 안에 잠든… 가장 추악한 진실. 너희의 이기심 그 자체다.",
						"english": "I am the most hideous truth... dormant within you. Your very selfishness.",
						"japanese": "私はお前たちの中に眠る…最も醜い真実。お前たちの利己主義そのものだ。",
						"chinese": "我是沉睡在你们体内的……最丑陋的真相。你们自私的本质。",
						"french": "Je suis la vérité la plus hideuse... endormie en vous. Votre égoïsme même.",
						"spanish": "Soy la verdad más horrible... que duerme dentro de vosotros. Vuestro egoísmo en sí.",
						"vietnamese": "Ta là sự thật ghê tởm nhất... đang ngủ yên trong các ngươi. Chính là bản chất ích kỷ của các ngươi.",
						"thai": "ข้าคือความจริงที่น่าเกลียดที่สุด... ที่หลับใหลอยู่ในตัวพวกเจ้า ความเห็นแก่ตัวของพวกเจ้าเอง",
						"hindi": "मैं तुम में छिपा… सबसे घिनौना सच हूँ। तुम्हारा अपना स्वार्थ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헛소리! 강함에 필요한 것은 오직 강한 의지뿐이다!",
						"english": "Nonsense! All that's needed for strength is a strong will!",
						"japanese": "馬鹿な！強さに必要なのは強い意志だけだ！",
						"chinese": "胡说！强大所需的只有坚强的意志！",
						"french": "Absurdité ! Pour la force, seule une forte volonté est nécessaire !",
						"spanish": "¡Tonterías! ¡Todo lo que se necesita para la fuerza es una voluntad fuerte!",
						"vietnamese": "Vô lý! Thứ duy nhất cần để mạnh mẽ chính là ý chí kiên cường!",
						"thai": "ไร้สาระ! สิ่งที่จำเป็นสำหรับความแข็งแกร่งมีเพียงความตั้งใจอันแข็งแกร่งเท่านั้น!",
						"hindi": "बकवास! ताकत के लिए सिर्फ़ एक मज़बूत इच्छाशक्ति की ज़रूरत होती है!"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "후회할 것이다. 나를 마주하는 순간, 너희는 부서질 테니.",
						"english": "You will regret it. The moment you face me, you will be shattered.",
						"japanese": "後悔するだろう。私と対峙する瞬間、お前たちは打ち砕かれるのだから。",
						"chinese": "你会后悔的。与我对抗的瞬间，你们将会粉碎。",
						"french": "Vous le regretterez. Au moment où vous m'affronterez, vous serez brisés.",
						"spanish": "Te arrepentirás. En el momento en que me enfrentes, serás destrozado.",
						"vietnamese": "Ngươi sẽ hối hận. Khoảnh khắc đối mặt với ta, các ngươi sẽ tan nát.",
						"thai": "เจ้าจะต้องเสียใจ. ในพริบตาที่เผชิญหน้ากับข้า พวกเจ้าจะต้องแหลกสลาย.",
						"hindi": "तुम्हें पछतावा होगा। जिस पल तुम मुझसे मिलोगे, तुम टूट जाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국… 너희도 나를 외면할 수 없었다.",
						"english": "...Ultimately... even you couldn't turn away from me.",
						"japanese": "…結局…お前たちも私から目を背けることはできなかった。",
						"chinese": "……最终……连你们也无法背弃我。",
						"french": "...Finalement... même vous n'avez pas pu me tourner le dos.",
						"spanish": "...Al final... ni siquiera tú pudiste apartarte de mí.",
						"vietnamese": "...Cuối cùng... các ngươi cũng không thể quay lưng lại với ta.",
						"thai": "...ท้ายที่สุด... แม้แต่พวกเจ้าก็ไม่อาจเมินเฉยต่อข้าได้.",
						"hindi": "...आखिरकार... तुम भी मुझसे मुंह नहीं मोड़ पाए।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이겼어… 하지만… 뭔가 개운하지 않아.",
						"english": "We won... but... something doesn't feel right.",
						"japanese": "勝った…しかし…どうもすっきりしない。",
						"chinese": "赢了……但是……总觉得不太畅快。",
						"french": "Nous avons gagné... mais... quelque chose ne me satisfait pas.",
						"spanish": "Ganamos... pero... algo no se siente bien.",
						"vietnamese": "Thắng rồi... nhưng... sao không cảm thấy thoải mái chút nào.",
						"thai": "ชนะแล้ว...แต่...รู้สึกไม่ค่อยสบายใจเลย.",
						"hindi": "हम जीत गए... लेकिन... कुछ ठीक नहीं लग रहा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "(쓰러진 random_boss를 보며) …이기심의 끝은 허무할 뿐. 나는… 이 길을 외면하지 않는다.",
						"english": "(Looking at the fallen random_boss) ...The end of selfishness is mere futility. I... will not turn away from this path.",
						"japanese": "(倒れたrandom_bossを見ながら) …利己心の果ては虚無に過ぎない。私は…この道を避けない。",
						"chinese": "(看着倒下的random_boss) ……自私的尽头只剩虚无。我……不会回避这条路。",
						"french": "(Regardant le random_boss tombé) ...La fin de l'égoïsme n'est que vanité. Je... ne détournerai pas le regard de ce chemin.",
						"spanish": "(Mirando al random_boss caído) ...El fin del egoísmo es pura futilidad. Yo... no me apartaré de este camino.",
						"vietnamese": "(Nhìn random_boss đã ngã xuống) ...Cuối cùng của sự ích kỷ chỉ là hư vô. Ta... sẽ không quay lưng lại con đường này.",
						"thai": "(มอง random_boss ที่ล้มลง) ...จุดจบของความเห็นแก่ตัวเป็นเพียงความว่างเปล่า. ข้า...จะไม่หันหนีจากเส้นทางนี้.",
						"hindi": "(गिरे हुए random_boss को देखकर) ...स्वार्थ का अंत केवल व्यर्थता है। मैं... इस रास्ते से मुंह नहीं मोड़ूंगा।"
					}
				},
				{
					"content": {
						"korean": "돌무덤은 침묵했다. 그러나 들춰진 진실은 그들 안에서 요동쳤다.",
						"english": "The cairn was silent. But the revealed truth stirred within them.",
						"japanese": "石塚は沈黙した。しかし、暴かれた真実は彼らの中でうねっていた。",
						"chinese": "石冢沉默了。然而，被揭露的真相在他们心中汹涌澎湃。",
						"french": "Le cairn resta silencieux. But la vérité révélée remua en eux.",
						"spanish": "El túmulo guardó silencio. Pero la verdad revelada se agitó dentro de ellos.",
						"vietnamese": "Mộ đá im lìm. Nhưng sự thật được hé lộ đã khuấy động trong lòng họ.",
						"thai": "กองหินเงียบงัน. ทว่าความจริงที่ถูกเปิดเผยกลับก่อกวนภายในจิตใจของพวกเขา.",
						"hindi": "पत्थर का ढेर शांत था। लेकिन सामने आया सच उनके अंदर हलचल पैदा कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다음 여정은 더 깊은 어둠으로 향할 것이다.",
						"english": "The next journey will lead to deeper darkness.",
						"japanese": "次の旅は、より深い闇へと向かうだろう。",
						"chinese": "下一次旅程将驶向更深的黑暗。",
						"french": "Le prochain voyage mènera vers des ténèbres plus profondes.",
						"spanish": "El próximo viaje nos llevará a una oscuridad más profunda.",
						"vietnamese": "Hành trình tiếp theo sẽ dẫn đến bóng tối sâu hơn.",
						"thai": "การเดินทางครั้งต่อไปจะมุ่งสู่ความมืดมิดที่ลึกซึ้งกว่า.",
						"hindi": "अगली यात्रा और गहरे अंधकार की ओर ले जाएगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
