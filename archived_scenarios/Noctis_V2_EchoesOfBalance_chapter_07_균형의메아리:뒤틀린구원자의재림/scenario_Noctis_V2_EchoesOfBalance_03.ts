export const scenario_Noctis_V2_EchoesOfBalance_03 = {
	"scenario_id": "Noctis_V2_EchoesOfBalance_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
					"content": {
						"korean": "심연의 균열이 더 깊어졌다. 고통의 메아리가 발아래서 울렸다.",
						"english": "The Abyss's rift deepened. Echoes of pain resounded beneath my feet.",
						"japanese": "深淵の亀裂がさらに深くなった。苦痛のこだまが足元で響いた。",
						"chinese": "深渊的裂缝更深了。痛苦的回声在我脚下响起。",
						"french": "La faille de l'Abysse s'est approfondie. Les échos de la douleur résonnaient sous mes pieds.",
						"spanish": "La grieta del Abismo se hizo más profunda. Ecos de dolor resonaron bajo mis pies.",
						"vietnamese": "Vết nứt của Vực sâu đã sâu hơn. Tiếng vọng của nỗi đau vang lên dưới chân tôi.",
						"thai": "รอยแยกของห้วงลึกได้ลึกขึ้น เสียงสะท้อนของความเจ็บปวดดังก้องอยู่ใต้เท้าของฉัน",
						"hindi": "अगाध खाई की दरार गहरी हो गई। दर्द की गूँज मेरे पैरों के नीचे गूँज उठी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "…누가 왔는가.",
						"english": "...Who comes?",
						"japanese": "…誰が来たのか。",
						"chinese": "…是谁来了？",
						"french": "...Qui est venu ?",
						"spanish": "¿...Quién ha venido?",
						"vietnamese": "...Ai đã đến?",
						"thai": "...ใครมา?",
						"hindi": "...कौन आया है?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 마라?",
						"english": "Are you Mara?",
						"japanese": "あなたがマーラか？",
						"chinese": "你是玛拉？",
						"french": "Es-tu Mara ?",
						"spanish": "¿Eres Mara?",
						"vietnamese": "Ngươi là Mara?",
						"thai": "คุณคือมารา?",
						"hindi": "क्या तुम मारा हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "그렇다. 나는 이곳에 갇힌 영혼들의 슬픔.",
						"english": "Yes. I am the sorrow of the souls trapped here.",
						"japanese": "そうだ。私はここに囚われた魂たちの悲しみだ。",
						"chinese": "是的。我是被困在此处的灵魂的悲伤。",
						"french": "Oui. Je suis la tristesse des âmes piégées ici.",
						"spanish": "Sí. Soy la pena de las almas atrapadas aquí.",
						"vietnamese": "Phải. Ta là nỗi buồn của những linh hồn bị mắc kẹt ở đây.",
						"thai": "ใช่ ฉันคือความเศร้าของวิญญาณที่ถูกขังอยู่ที่นี่",
						"hindi": "हाँ। मैं यहाँ फँसी आत्माओं का दुख हूँ।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영혼들이… 고통받고 있다고?",
						"english": "Souls are... suffering?",
						"japanese": "魂たちが…苦しんでいると？",
						"chinese": "灵魂们……正在受苦？",
						"french": "Les âmes... souffrent-elles ?",
						"spanish": "¿Las almas... están sufriendo?",
						"vietnamese": "Các linh hồn… đang đau khổ sao?",
						"thai": "วิญญาณ...กำลังทุกข์ทรมานอยู่หรือ?",
						"hindi": "आत्माएँ... कष्ट पा रही हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "녹티스의 불완전한 균형이… 그들을 이곳에 가두었다.",
						"english": "Noctis's imperfect balance... has trapped them here.",
						"japanese": "ノクティスの不完全な均衡が…彼らをここに閉じ込めた。",
						"chinese": "诺克提斯不完美的平衡……将他们困在了这里。",
						"french": "L'équilibre imparfait de Noctis... les a piégés ici.",
						"spanish": "El equilibrio imperfecto de Noctis... los ha atrapado aquí.",
						"vietnamese": "Sự cân bằng không hoàn hảo của Noctis… đã giam giữ họ ở đây.",
						"thai": "สมดุลที่ไม่สมบูรณ์ของ Noctis...ได้กักขังพวกเขาไว้ที่นี่",
						"hindi": "नोक्टिस का अपूर्ण संतुलन... उन्हें यहाँ फँसाए हुए है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "mara",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "그들은 영원히 고통받는다. 끝없는 갈증 속에서.",
						"english": "They suffer eternally. In endless thirst.",
						"japanese": "彼らは永遠に苦しむ。終わりのない渇きの中で。",
						"chinese": "他们永恒地受苦。在无尽的干渴中。",
						"french": "Ils souffrent éternellement. Dans une soif sans fin.",
						"spanish": "Sufren eternamente. En una sed interminable.",
						"vietnamese": "Họ chịu đựng vĩnh viễn. Trong cơn khát vô tận.",
						"thai": "พวกเขาต้องทนทุกข์ทรมานชั่วนิรันดร์ ในความกระหายไม่สิ้นสุด",
						"hindi": "वे अनंत काल तक पीड़ित रहते हैं। अंतहीन प्यास में।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜… 왜 이렇게까지.",
						"english": "Why... why to this extent?",
						"japanese": "なぜ…なぜここまで。",
						"chinese": "为什么…为什么会这样。",
						"french": "Pourquoi... pourquoi en arriver là.",
						"spanish": "¿Por qué... por qué hasta este punto?",
						"vietnamese": "Tại sao... tại sao đến mức này.",
						"thai": "ทำไม… ทำไมถึงขนาดนี้",
						"hindi": "क्यों… क्यों इतना सब कुछ।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "녹티스는 ‘균형’이라 불렀지. 하지만 그건 희생 위에 세워진 거짓.",
						"english": "Noctis called it 'balance'. But it's a lie built upon sacrifice.",
						"japanese": "ノクティスは「均衡」と呼んだ。だがそれは犠牲の上に築かれた偽りだ。",
						"chinese": "诺克提斯称之为“平衡”。但那是建立在牺牲之上的谎言。",
						"french": "Noctis appelait ça l'« équilibre ». Mais c'est un mensonge bâti sur le sacrifice.",
						"spanish": "Noctis lo llamó 'equilibrio'. Pero es una mentira construida sobre el sacrificio.",
						"vietnamese": "Noctis gọi đó là 'cân bằng'. Nhưng đó là một lời nói dối được xây dựng trên sự hy sinh.",
						"thai": "น็อกติสเรียกว่า 'สมดุล' แต่มันคือการโกหกที่สร้างขึ้นบนการเสียสละ",
						"hindi": "नॉक्टिस ने इसे 'संतुलन' कहा था। लेकिन यह बलिदान पर बना एक झूठ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거짓…",
						"english": "A lie...",
						"japanese": "偽り…",
						"chinese": "谎言…",
						"french": "Un mensonge...",
						"spanish": "Una mentira...",
						"vietnamese": "Một lời nói dối...",
						"thai": "การโกหก…",
						"hindi": "एक झूठ…"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "내 노래를 들어라. 이곳에 갇힌 영혼들의 마지막 비명.",
						"english": "Listen to my song. The last screams of the souls trapped here.",
						"japanese": "私の歌を聞け。ここに囚われた魂たちの最後の悲鳴を。",
						"chinese": "听我的歌。这里被困灵魂的最后尖叫。",
						"french": "Écoute ma chanson. Les derniers cris des âmes piégées ici.",
						"spanish": "Escucha mi canción. Los últimos gritos de las almas atrapadas aquí.",
						"vietnamese": "Hãy nghe bài hát của ta. Tiếng thét cuối cùng của những linh hồn bị mắc kẹt ở đây.",
						"thai": "ฟังเพลงของข้าสิ เสียงกรีดร้องสุดท้ายของวิญญาณที่ถูกขังอยู่ที่นี่",
						"hindi": "मेरा गीत सुनो। यहाँ फँसी आत्माओं की आखिरी चीख।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 고통이… 녹티스의 짓이라고?",
						"english": "This suffering... is Noctis' doing?",
						"japanese": "この苦痛が…ノクティスの仕業だと？",
						"chinese": "这痛苦…是诺克提斯造成的？",
						"french": "Cette souffrance... est l'œuvre de Noctis ?",
						"spanish": "¿Este sufrimiento... es obra de Noctis?",
						"vietnamese": "Nỗi đau này... là do Noctis gây ra sao?",
						"thai": "ความเจ็บปวดนี้… เป็นฝีมือของน็อกติสงั้นหรือ",
						"hindi": "यह पीड़ा… नॉक्टिस का काम है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "…그의 손에서 모든 비극이 시작되었다.",
						"english": "...From his hands, all tragedy began.",
						"japanese": "…彼の手に、全ての悲劇が始まった。",
						"chinese": "…所有的悲剧都始于他的手。",
						"french": "...De ses mains, toute la tragédie a commencé.",
						"spanish": "...De sus manos, toda la tragedia comenzó.",
						"vietnamese": "...Từ bàn tay hắn, mọi bi kịch bắt đầu.",
						"thai": "…จากมือของเขา โศกนาฏกรรมทั้งหมดก็เริ่มต้นขึ้น",
						"hindi": "…उसके हाथों से, सारी त्रासदी शुरू हुई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 고통의 메아리가 마라의 노래와 겹쳐 들렸다. 과거의 비극이 현재를 흔들었다.",
						"english": "Faint echoes of pain overlapped Mara's song. Past tragedies shook the present.",
						"japanese": "漠たる苦痛の残響が、マーラの歌と重なって聞こえた。過去の悲劇が現在を揺さぶった。",
						"chinese": "微弱的痛苦回声与玛拉的歌声重叠。过去的悲剧动摇了现在。",
						"french": "De faibles échos de douleur se mêlaient au chant de Mara. Les tragédies passées ébranlaient le présent.",
						"spanish": "Débiles ecos de dolor se superponían a la canción de Mara. Las tragedias pasadas sacudían el presente.",
						"vietnamese": "Tiếng vọng đau đớn mờ nhạt hòa cùng bài hát của Mara. Bi kịch quá khứ lay động hiện tại.",
						"thai": "เสียงสะท้อนแห่งความเจ็บปวดอันแผ่วเบาซ้อนทับกับเพลงของมารา โศกนาฏกรรมในอดีตสั่นคลอนปัจจุบัน",
						"hindi": "दर्द की हल्की गूँज मारा के गीत से मिल गई। पिछली त्रासदियों ने वर्तमान को हिला दिया।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"speaker": "mara",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "이제 돌아갈 수 없다. 이곳은 절망의 끝.",
						"english": "There's no turning back now. This is the end of despair.",
						"japanese": "もう戻れない。ここは絶望の果て。",
						"chinese": "无法回头了。这里是绝望的尽头。",
						"french": "On ne peut plus revenir en arrière. C'est la fin du désespoir.",
						"spanish": "Ya no hay vuelta atrás. Este es el fin de la desesperación.",
						"vietnamese": "Không thể quay lại được nữa. Đây là tận cùng của tuyệt vọng.",
						"thai": "ไม่มีทางกลับไปแล้ว ที่นี่คือจุดสิ้นสุดของความสิ้นหวัง",
						"hindi": "अब वापस नहीं जा सकते। यह निराशा का अंत है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈추지 않아. 이 고통을 끝낼 거야.",
						"english": "I won't stop. I'll end this suffering.",
						"japanese": "止まらない。この苦痛を終わらせる。",
						"chinese": "我不会停止。我会结束这份痛苦。",
						"french": "Je ne m'arrêterai pas. Je vais mettre fin à cette souffrance.",
						"spanish": "No me detendré. Acabaré con este sufrimiento.",
						"vietnamese": "Ta sẽ không dừng lại. Ta sẽ chấm dứt nỗi đau này.",
						"thai": "ข้าจะไม่หยุด ข้าจะยุติความเจ็บปวดนี้",
						"hindi": "मैं रुकूँगा नहीं। मैं इस पीड़ा को खत्म करूँगा।"
					}
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "네 앞에 나타날 존재는… 이곳의 절망을 먹고 자랐다.",
						"english": "The being that will appear before you... it grew by feeding on this place's despair.",
						"japanese": "お前の前に現れる存在は… この地の絶望を喰らい育った。",
						"chinese": "出现在你面前的存在……它吞噬了这里的绝望而成长。",
						"french": "L'être qui apparaîtra devant toi... a grandi en se nourrissant du désespoir de ce lieu.",
						"spanish": "El ser que aparecerá ante ti... creció alimentándose de la desesperación de este lugar.",
						"vietnamese": "Thực thể sẽ xuất hiện trước ngươi... nó lớn lên nhờ nuốt chửng sự tuyệt vọng của nơi này.",
						"thai": "สิ่งที่จะปรากฏต่อหน้าเจ้า... เติบโตขึ้นด้วยการกินความสิ้นหวังของที่นี่",
						"hindi": "जो अस्तित्व तुम्हारे सामने प्रकट होगा... वह इस स्थान की निराशा को खाकर बड़ा हुआ है。"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "심연의 기운이 더욱 강해졌다. 알 수 없는 위협이 다가왔다.",
						"english": "The abyss's aura grew stronger. An unknown threat approached.",
						"japanese": "深淵の気運がさらに強くなった。未知の脅威が迫る。",
						"chinese": "深渊的气息变得更加强大。未知的威胁正在逼近。",
						"french": "L'aura de l'abîme s'est renforcée. Une menace inconnue approchait.",
						"spanish": "El aura del abismo se hizo más fuerte. Una amenaza desconocida se acercaba.",
						"vietnamese": "Khí tức vực sâu càng mạnh mẽ hơn. Một mối đe dọa không rõ đang đến gần.",
						"thai": "พลังแห่งห้วงลึกแข็งแกร่งขึ้น ภัยคุกคามที่ไม่รู้จักกำลังคืบคลานเข้ามา",
						"hindi": "अगाध खाई की आभा और भी प्रबल हो गई। एक अज्ञात खतरा निकट आ गया।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 심연의 가장 깊은 곳에서 모습을 드러냈다.",
						"english": "An unknown shadow emerged from the deepest part of the abyss.",
						"japanese": "正体不明の影が、深淵の最も深い場所から姿を現した。",
						"chinese": "一个不明身份的影子从深渊最深处现身。",
						"french": "Une ombre inconnue est apparue des profondeurs de l'abîme.",
						"spanish": "Una sombra desconocida emergió de lo más profundo del abismo.",
						"vietnamese": "Một bóng đen vô danh đã xuất hiện từ nơi sâu thẳm nhất của vực sâu.",
						"thai": "เงาปริศนาปรากฏตัวจากส่วนที่ลึกที่สุดของห้วงลึก",
						"hindi": "एक अज्ञात छाया अगाध खाई के सबसे गहरे हिस्से से प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳에 발을 들이다니. 너의 모든 의지는 헛되다.",
						"english": "How dare you set foot here. All your will is in vain.",
						"japanese": "よくもここに足を踏み入れたな。お前の全ての意志は無駄だ。",
						"chinese": "竟敢踏足此地。你所有的意志都是徒劳。",
						"french": "Comment oses-tu mettre les pieds ici. Toute ta volonté est vaine.",
						"spanish": "Cómo te atreves a pisar aquí. Toda tu voluntad es en vano.",
						"vietnamese": "Ngươi dám đặt chân đến đây sao. Mọi ý chí của ngươi đều vô ích.",
						"thai": "เจ้ากล้าดียังไงถึงได้เหยียบย่างเข้ามาที่นี่ เจตจำนงทั้งหมดของเจ้าไร้ประโยชน์",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की। तुम्हारी सारी इच्छा व्यर्थ है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 고통의 근원… 네가 지키는 거냐?",
						"english": "This source of pain... are you protecting it?",
						"japanese": "この苦痛の根源… お前が守っているのか？",
						"chinese": "这痛苦的根源……是你守护的吗？",
						"french": "Cette source de douleur... la protèges-tu ?",
						"spanish": "Esta fuente de dolor... ¿la proteges tú?",
						"vietnamese": "Nguồn gốc của nỗi đau này... là do ngươi bảo vệ sao?",
						"thai": "ต้นตอของความเจ็บปวดนี้... เจ้ากำลังปกป้องมันอยู่หรือ?",
						"hindi": "इस पीड़ा का स्रोत... क्या तुम इसकी रक्षा कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 균형의 파수꾼. 불완전한 균형을 유지할 뿐.",
						"english": "I am the keeper of balance. I merely maintain an imperfect balance.",
						"japanese": "私は均衡の番人。不完全な均衡を維持するだけだ。",
						"chinese": "我是平衡的守护者。只是维持着不完美的平衡。",
						"french": "Je suis le gardien de l'équilibre. Je ne fais que maintenir un équilibre imparfait.",
						"spanish": "Soy el guardián del equilibrio. Solo mantengo un equilibrio imperfecto.",
						"vietnamese": "Ta là kẻ canh giữ sự cân bằng. Ta chỉ duy trì một sự cân bằng không hoàn hảo.",
						"thai": "ข้าคือผู้พิทักษ์สมดุล ข้าเพียงแค่รักษาสมดุลที่ไม่สมบูรณ์",
						"hindi": "मैं संतुलन का रखवाला हूँ। मैं बस एक अपूर्ण संतुलन बनाए रखता हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 균형이 수많은 영혼을 희생시켰어!",
						"english": "That balance sacrificed countless souls!",
						"japanese": "その均衡が、数多くの魂を犠牲にした！",
						"chinese": "那个平衡牺牲了无数的灵魂！",
						"french": "Cet équilibre a sacrifié d'innombrables âmes !",
						"spanish": "¡Ese equilibrio sacrificó incontables almas!",
						"vietnamese": "Sự cân bằng đó đã hy sinh vô số linh hồn!",
						"thai": "สมดุลนั้นได้สังเวยดวงวิญญาณนับไม่ถ้วน!",
						"hindi": "उस संतुलन ने अनगिनत आत्माओं का बलिदान कर दिया!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 의지는 결국 심연에 잠식된다. 너도 예외는 아니다.",
						"english": "A weak will is eventually consumed by the abyss. You are no exception.",
						"japanese": "弱き意思はやがて深淵に呑み込まれる。お前も例外ではない。",
						"chinese": "弱小的意志终将被深渊吞噬。你也不例外。",
						"french": "Une volonté faible est finalement consumée par les abysses. Tu n'es pas une exception.",
						"spanish": "Una voluntad débil es finalmente consumida por el abismo. Tú no eres la excepción.",
						"vietnamese": "Ý chí yếu ớt cuối cùng sẽ bị vực thẳm nuốt chửng. Ngươi cũng không ngoại lệ.",
						"thai": "เจตจำนงที่อ่อนแอจะถูกกลืนกินโดยห้วงเหวในที่สุด เจ้าก็ไม่มีข้อยกเว้น",
						"hindi": "कमजोर इच्छा अंततः पाताल द्वारा निगल ली जाती है। तुम भी कोई अपवाद नहीं हो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아!",
						"english": "...It's not over yet. I won't give up!",
						"japanese": "…まだ終わってない。諦めない！",
						"chinese": "……还没结束。我不会放弃！",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "...Aún no ha terminado. ¡No me rendiré!",
						"vietnamese": "...Vẫn chưa kết thúc. Ta sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ! ฉันจะไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이겼을 뿐. 진정한 균형은… 너희가 알 수 없다.",
						"english": "...You only barely won. True balance... you cannot comprehend.",
						"japanese": "…かろうじて勝っただけだ。真の均衡は… お前たちには理解できない。",
						"chinese": "……你只是勉强赢了。真正的平衡……你们无法知晓。",
						"french": "...Tu n'as fait que gagner de justesse. Le véritable équilibre... vous ne pouvez pas le comprendre.",
						"spanish": "...Apenas ganaste. El verdadero equilibrio... no podéis comprenderlo.",
						"vietnamese": "...Chỉ là vừa thắng mà thôi. Sự cân bằng thực sự... các ngươi không thể biết được.",
						"thai": "...เจ้าแค่ชนะอย่างเฉียดฉิว สมดุลที่แท้จริง...พวกเจ้าไม่มีทางรู้ได้",
						"hindi": "...तुम बस मुश्किल से जीते हो। सच्चा संतुलन... तुम नहीं जान सकते।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진정한 균형…?",
						"english": "True balance...?",
						"japanese": "真の均衡…？",
						"chinese": "真正的平衡……？",
						"french": "Le véritable équilibre... ?",
						"spanish": "¿Verdadero equilibrio...?",
						"vietnamese": "Cân bằng thực sự...?",
						"thai": "สมดุลที่แท้จริง...?",
						"hindi": "सच्चा संतुलन...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "그는 결국… 진실을 말하지 않았군.",
						"english": "He ultimately... didn't tell the truth.",
						"japanese": "彼は結局… 真実を語らなかったな。",
						"chinese": "他终究……没有说出真相。",
						"french": "Il n'a finalement... pas dit la vérité.",
						"spanish": "Él, al final... no dijo la verdad.",
						"vietnamese": "Cuối cùng hắn... đã không nói ra sự thật.",
						"thai": "สุดท้ายแล้ว... เขาไม่ได้บอกความจริง",
						"hindi": "अंततः उसने... सच नहीं बताया।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "영혼들의 슬픈 메아리는 잠시 옅어졌으나, 더 큰 의문이 남았다.",
						"english": "The mournful echoes of souls faded for a moment, but a greater question remained.",
						"japanese": "魂たちの悲しい残響は一時的に薄れたが、より大きな疑問が残った。",
						"chinese": "灵魂悲伤的回响暂时减弱了，但更大的疑问却留了下来。",
						"french": "Les tristes échos des âmes s'estompèrent un instant, mais une question plus vaste demeura.",
						"spanish": "Los ecos tristes de las almas se desvanecieron por un momento, pero una pregunta mayor permaneció.",
						"vietnamese": "Tiếng vọng buồn bã của các linh hồn đã mờ đi trong chốc lát, nhưng một câu hỏi lớn hơn vẫn còn đó.",
						"thai": "เสียงสะท้อนอันโศกเศร้าของวิญญาณจางหายไปชั่วขณะ แต่คำถามที่ยิ่งใหญ่กว่ายังคงอยู่",
						"hindi": "आत्माओं की दुखद प्रतिध्वनियाँ पल भर के लिए कम हो गईं, लेकिन एक बड़ा सवाल शेष रह गया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계의 균형이 깨진 지 오래.",
			"심연은 그 상처를 파고들어 영혼들을 삼켰다.",
			"마라의 슬픈 노래는, 그 모든 비극의 증언이었다.",
			"이제, 우리는 그 절망의 한가운데로 걸어 들어간다."
		],
		"english": [
			"The world's balance shattered long ago.",
			"The Abyss burrowed into the wound, devouring souls.",
			"Mara's lament was a testament to all that tragedy.",
			"Now, we walk into the heart of that despair."
		],
		"japanese": [
			"世界の均衡が崩れて久しい。",
			"深淵はその傷を抉り、魂を飲み込んだ。",
			"マーラの哀しい歌は、そのすべての悲劇の証言であった。",
			"今、我々は絶望の真ん中へと歩みを進める。"
		],
		"chinese": [
			"世界的平衡早已被打破。",
			"深渊侵蚀着伤口，吞噬着灵魂。",
			"玛拉的悲歌，是所有悲剧的见证。",
			"现在，我们步入绝望的深渊。"
		],
		"french": [
			"L'équilibre du monde est rompu depuis longtemps.",
			"L'Abysse a creusé cette plaie et a dévoré les âmes.",
			"Le chant mélancolique de Mara témoignait de toute cette tragédie.",
			"Maintenant, nous marchons au cœur de ce désespoir."
		],
		"spanish": [
			"El equilibrio del mundo se rompió hace mucho tiempo.",
			"El Abismo se adentró en esa herida, tragando almas.",
			"La triste canción de Mara fue el testimonio de toda esa tragedia.",
			"Ahora, caminamos hacia el corazón de esa desesperación."
		],
		"vietnamese": [
			"Sự cân bằng của thế giới đã bị phá vỡ từ lâu.",
			"Vực sâu đã khoét sâu vào vết thương, nuốt chửng linh hồn.",
			"Bài ca buồn của Mara là minh chứng cho mọi bi kịch đó.",
			"Giờ đây, chúng ta bước vào trung tâm của sự tuyệt vọng đó."
		],
		"thai": [
			"สมดุลของโลกได้พังทลายลงนานแล้ว",
			"ห้วงลึกได้เจาะลึกเข้าไปในบาดแผล กลืนกินวิญญาณ",
			"เพลงอันเศร้าโศกของมาราเป็นพยานถึงโศกนาฏกรรมทั้งหมดนั้น",
			"บัดนี้ เราก้าวเข้าสู่ใจกลางของความสิ้นหวังนั้น"
		],
		"hindi": [
			"विश्व का संतुलन बहुत पहले टूट गया था।",
			"अगाध खाई ने घाव को गहरा किया, आत्माओं को निगल लिया।",
			"मारा का दुखद गीत उस सारी त्रासदी का प्रमाण था।",
			"अब, हम उस निराशा के केंद्र में कदम रखते हैं।"
		]
	}
} as const;
