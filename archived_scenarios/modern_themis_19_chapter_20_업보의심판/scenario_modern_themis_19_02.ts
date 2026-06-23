export const scenario_modern_themis_19_02 = {
	"scenario_id": "modern_themis_19_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
						"korean": "도시의 광장은 질서를 되찾았다. 율법의 칼날이 모든 혼돈을 베어냈다.",
						"english": "The city square regained order. The blade of the law cut down all chaos.",
						"japanese": "都市の広場は秩序を取り戻した。律法の刃が全ての混沌を切り裂いた。",
						"chinese": "城市广场恢复了秩序。律法之刃斩断了所有混乱。",
						"french": "La place de la ville a retrouvé l'ordre. La lame de la loi a tranché tout le chaos.",
						"spanish": "La plaza de la ciudad recuperó el orden. La espada de la ley cortó todo el caos.",
						"vietnamese": "Quảng trường thành phố đã lấy lại trật tự. Lưỡi kiếm của luật pháp đã chặt đứt mọi hỗn loạn.",
						"thai": "จัตุรัสกลางเมืองกลับมาสงบเรียบร้อย ดาบแห่งกฎหมายได้ฟันฟันความโกลาหลทั้งหมด",
						"hindi": "शहर के चौक में व्यवस्था लौट आई। कानून की तलवार ने सभी अराजकता को खत्म कर दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "드디어… 평화가.",
						"english": "Finally... peace.",
						"japanese": "ついに…平和が。",
						"chinese": "终于……和平了。",
						"french": "Enfin... la paix.",
						"spanish": "Finalmente... paz.",
						"vietnamese": "Cuối cùng... hòa bình.",
						"thai": "ในที่สุด... ความสงบ",
						"hindi": "आखिरकार... शांति।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "평화? 그건 가면일 뿐이야.",
						"english": "Peace? That's just a mask.",
						"japanese": "平和？それは仮面に過ぎない。",
						"chinese": "和平？那不过是个假象。",
						"french": "La paix ? Ce n'est qu'un masque.",
						"spanish": "¿Paz? Eso es solo una máscara.",
						"vietnamese": "Hòa bình? Đó chỉ là một chiếc mặt nạ.",
						"thai": "ความสงบ? นั่นเป็นแค่หน้ากาก",
						"hindi": "शांति? वो तो बस एक मुखौटा है।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói cái gì vậy?",
						"thai": "คุณกำลังพูดอะไร",
						"hindi": "तुम क्या बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "율법이 지킨다고? 율법이… 죽인 거야.",
						"english": "The law protects? The law... killed.",
						"japanese": "律法が守る？律法が…殺したんだ。",
						"chinese": "律法保护？律法……杀戮了。",
						"french": "La loi protège ? La loi... a tué.",
						"spanish": "¿La ley protege? La ley... mató.",
						"vietnamese": "Luật pháp bảo vệ ư? Luật pháp... đã giết.",
						"thai": "กฎหมายปกป้อง? กฎหมาย... ฆ่า",
						"hindi": "कानून रक्षा करता है? कानून... ने मार डाला।"
					},
					"speaker": "bex"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "미스터 템플의 정의는 칼날이야. 약한 자들을 베어내고 있어.",
						"english": "Mr. Temple's justice is a blade. It's cutting down the weak.",
						"japanese": "ミスター・テンプルの正義は刃だ。弱い者たちを切り捨てている。",
						"chinese": "坦普尔先生的正义是一把刀。它正在斩杀弱者。",
						"french": "La justice de Monsieur Temple est une lame. Elle abat les faibles.",
						"spanish": "La justicia del Sr. Temple es una espada. Está eliminando a los débiles.",
						"vietnamese": "Công lý của Mr. Temple là một lưỡi dao. Nó đang chém những kẻ yếu.",
						"thai": "ความยุติธรรมของมิสเตอร์เทมเปิลคือดาบ มันกำลังเชือดเฉือนผู้ที่อ่อนแอ",
						"hindi": "मिस्टर टेंपल का न्याय एक तलवार है। यह कमजोरों को काट रहा है।"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "희생은… 어쩔 수 없다고 했어.",
						"english": "Sacrifice... they said it was unavoidable.",
						"japanese": "犠牲は…仕方ないって言われた。",
						"chinese": "牺牲是…他们说不可避免。",
						"french": "Le sacrifice... ils ont dit que c'était inévitable.",
						"spanish": "El sacrificio... dijeron que era inevitable.",
						"vietnamese": "Hy sinh... họ nói là không thể tránh khỏi.",
						"thai": "การเสียสละ... พวกเขาบอกว่ามันหลีกเลี่ยงไม่ได้",
						"hindi": "बलिदान… उन्होंने कहा यह अपरिहार्य था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "희생? 그건 명분이야. 약자를 짓밟는.",
						"english": "Sacrifice? That's just an excuse. To crush the weak.",
						"japanese": "犠牲？それは名目だ。弱者を踏みにじるための。",
						"chinese": "牺牲？那只是个借口。用来践踏弱者。",
						"french": "Sacrifice ? Ce n'est qu'un prétexte. Pour écraser les faibles.",
						"spanish": "¿Sacrificio? Eso es solo una excusa. Para pisotear a los débiles.",
						"vietnamese": "Hy sinh? Đó chỉ là cái cớ. Để chà đạp kẻ yếu.",
						"thai": "เสียสละเหรอ? นั่นมันแค่ข้ออ้าง. เพื่อเหยียบย่ำคนอ่อนแอ",
						"hindi": "बलिदान? वह बस एक बहाना है। कमजोरों को कुचलने का।"
					}
				},
				{
					"content": {
						"korean": "증거 있어?",
						"english": "Got proof?",
						"japanese": "証拠はあるのか？",
						"chinese": "有证据吗？",
						"french": "Tu as des preuves ?",
						"spanish": "¿Tienes pruebas?",
						"vietnamese": "Có bằng chứng không?",
						"thai": "มีหลักฐานไหม?",
						"hindi": "सबूत है?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "목격자가 있어. 모두 사라지고 있어.",
						"english": "There's a witness. Everyone's disappearing.",
						"japanese": "目撃者がいる。皆消えている。",
						"chinese": "有目击者。大家都在消失。",
						"french": "Il y a un témoin. Tout le monde disparaît.",
						"spanish": "Hay un testigo. Todos están desapareciendo.",
						"vietnamese": "Có nhân chứng. Tất cả đang biến mất.",
						"thai": "มีพยาน. ทุกคนกำลังหายไป",
						"hindi": "एक गवाह है। सब गायब हो रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bex",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그들은 '수호자'를 따르고 있어. 옛 도시를 파멸시킨 폭군과 같아.",
						"english": "They follow the 'Guardian'. Like the tyrant who destroyed the old city.",
						"japanese": "彼らは「守護者」に従っている。古き都を破滅させた暴君と同じだ。",
						"chinese": "他们追随'守护者'。就像毁灭了旧城市的暴君一样。",
						"french": "Ils suivent le 'Gardien'. Comme le tyran qui a détruit l'ancienne cité.",
						"spanish": "Siguen al 'Guardián'. Como el tirano que destruyó la antigua ciudad.",
						"vietnamese": "Họ đang theo 'Người bảo hộ'. Giống như bạo chúa đã hủy diệt thành phố cổ.",
						"thai": "พวกเขาทำตาม 'ผู้พิทักษ์'. เหมือนทรราชที่ทำลายเมืองเก่า",
						"hindi": "वे 'संरक्षक' का पालन कर रहे हैं। उस अत्याचारी की तरह जिसने पुराने शहर को नष्ट कर दिया।"
					},
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "수호자? 그게 뭔데.",
						"english": "Guardian? What's that?",
						"japanese": "守護者？何だそれ。",
						"chinese": "守护者？那是什么。",
						"french": "Gardien ? C'est quoi ça ?",
						"spanish": "¿Guardián? ¿Qué es eso?",
						"vietnamese": "Người bảo hộ? Đó là gì?",
						"thai": "ผู้พิทักษ์? มันคืออะไร",
						"hindi": "संरक्षक? वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "금지된 기록에 나와. 번영을 위해 모든 걸 바쳤지만, 결국 도시를 삼켰다고.",
						"english": "It's in the forbidden records. They sacrificed everything for prosperity, but it ultimately consumed the city.",
						"japanese": "禁断の記録にある。繁栄のために全てを捧げたが、結局は都市を飲み込んだと。",
						"chinese": "禁忌的记录里有。为了繁荣献出了一切，但最终却吞噬了城市。",
						"french": "C'est dans les archives interdites. Ils ont tout sacrifié pour la prospérité, mais cela a finalement englouti la cité.",
						"spanish": "Está en los registros prohibidos. Sacrificaron todo por la prosperidad, pero al final devoró la ciudad.",
						"vietnamese": "Nó có trong các ghi chép cấm. Họ đã hiến tế mọi thứ vì sự thịnh vượng, nhưng cuối cùng nó đã nuốt chửng thành phố.",
						"thai": "มันอยู่ในบันทึกต้องห้าม. พวกเขาสละทุกสิ่งเพื่อความรุ่งเรือง แต่สุดท้ายมันกลับกลืนกินเมือง",
						"hindi": "यह वर्जित अभिलेखों में है। उन्होंने समृद्धि के लिए सब कुछ न्यौछावर कर दिया, लेकिन अंततः इसने शहर को निगल लिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "역사가… 반복된다는 거야?",
						"english": "History... repeats itself?",
						"japanese": "歴史が…繰り返されるのか？",
						"chinese": "历史…会重演吗？",
						"french": "L'histoire... se répète ?",
						"spanish": "¿La historia... se repite?",
						"vietnamese": "Lịch sử... lặp lại sao?",
						"thai": "ประวัติศาสตร์... จะซ้ำรอยเหรอ?",
						"hindi": "इतिहास… खुद को दोहराता है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "역사는 반복돼. 다른 이름으로, 다른 얼굴로.",
						"english": "History repeats. With different names, different faces.",
						"japanese": "歴史は繰り返される。違う名前で、違う顔で。",
						"chinese": "历史会重演。以不同的名字，不同的面孔。",
						"french": "L'histoire se répète. Sous d'autres noms, d'autres visages.",
						"spanish": "La historia se repite. Con diferentes nombres, diferentes rostros.",
						"vietnamese": "Lịch sử lặp lại. Với những cái tên khác, những khuôn mặt khác.",
						"thai": "ประวัติศาสตร์ซ้ำรอย. ด้วยชื่อที่ต่างกัน ใบหน้าที่ต่างกัน",
						"hindi": "इतिहास दोहराता है। अलग नामों से, अलग चेहरों से।"
					},
					"emotion": "base",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기서 멈춰야 해. 이 길은 끝없이 반복될 거야.",
						"english": "We must stop here. This path will repeat endlessly.",
						"japanese": "ここで止まらなければ。この道は終わることなく繰り返されるだろう。",
						"chinese": "我们必须止步于此。这条路会无休止地重复。",
						"french": "Nous devons nous arrêter ici. Ce chemin se répétera sans fin.",
						"spanish": "Debemos detenernos aquí. Este camino se repetirá sin fin.",
						"vietnamese": "Chúng ta phải dừng lại ở đây. Con đường này sẽ lặp lại không ngừng.",
						"thai": "เราต้องหยุดที่นี่. เส้นทางนี้จะวนเวียนไม่สิ้นสุด",
						"hindi": "हमें यहीं रुकना होगा। यह रास्ता अंतहीन रूप से दोहराया जाएगा।"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What is this?",
						"japanese": "何だこれは？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái gì vậy?",
						"thai": "นี่มันอะไรกัน?",
						"hindi": "यह क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "나는 봤어. 계속해서 같은 길을 헤매는 꿈을.",
						"english": "I saw it. A dream of wandering the same path, endlessly.",
						"japanese": "私は見た。同じ道を永遠にさまよう夢を。",
						"chinese": "我看到了。一个不断迷失在同一条路上的梦。",
						"french": "J'ai vu. Le rêve de toujours errer sur le même chemin.",
						"spanish": "Lo vi. Un sueño de vagar sin fin por el mismo camino.",
						"vietnamese": "Tôi đã thấy. Giấc mơ lạc lối không ngừng trên cùng một con đường.",
						"thai": "ฉันเห็นแล้ว ฝันที่หลงทางวนเวียนบนเส้นทางเดิมไม่รู้จบ",
						"hindi": "मैंने देखा। वही रास्ता बार-बार भटकने का सपना।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "꿈…?",
						"english": "A dream...?",
						"japanese": "夢…？",
						"chinese": "梦…？",
						"french": "Un rêve...?",
						"spanish": "¿Un sueño...?",
						"vietnamese": "Giấc mơ...?",
						"thai": "ฝัน...?",
						"hindi": "सपना...?"
					},
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 꿈이 아니야. 저들의 덫이야. 벗어날 수 없는.",
						"english": "This isn't a dream. It's their trap, inescapable.",
						"japanese": "これは夢じゃない。彼らの罠だ。逃れられない。",
						"chinese": "这不是梦。这是他们的陷阱。无法逃脱的。",
						"french": "Ce n'est pas un rêve. C'est leur piège. Inéchappable.",
						"spanish": "Esto no es un sueño. Es su trampa. Ineludible.",
						"vietnamese": "Đây không phải là mơ. Đây là cái bẫy của chúng. Không thể thoát khỏi.",
						"thai": "นี่ไม่ใช่ความฝัน นี่คือกับดักของพวกมัน ไม่อาจหลบหนีได้",
						"hindi": "यह सपना नहीं है। यह उनका जाल है। जिससे बचा नहीं जा सकता।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 심장이 다시 한번 비명을 질렀다.",
						"english": "The city's heart screamed again.",
						"japanese": "都市の心臓が再び悲鳴を上げた。",
						"chinese": "城市的心脏再次尖叫起来。",
						"french": "Le cœur de la ville hurla de nouveau.",
						"spanish": "El corazón de la ciudad gritó una vez más.",
						"vietnamese": "Trái tim thành phố lại một lần nữa gào thét.",
						"thai": "หัวใจของเมืองกรีดร้องอีกครั้ง",
						"hindi": "शहर का दिल एक बार फिर चीख उठा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다. 정의의 이름으로 모든 것을 집어삼키는.",
						"english": "A colossal shadow blocked the way, devouring all in the name of justice.",
						"japanese": "巨大な影が道を阻んだ。正義の名の下にすべてを飲み込む。",
						"chinese": "巨大的黑影挡住了去路。以正义之名吞噬一切。",
						"french": "Une ombre colossale barra le chemin, dévorant tout au nom de la justice.",
						"spanish": "Una sombra colosal bloqueó el camino, devorando todo en nombre de la justicia.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Nuốt chửng mọi thứ nhân danh công lý.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ กลืนกินทุกสิ่งในนามของความยุติธรรม",
						"hindi": "एक विशालकाय छाया ने रास्ता रोक लिया। न्याय के नाम पर सब कुछ निगलती हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "율법의 이름으로, 너희는 죄인이다.",
						"english": "In the name of the Law, you are sinners.",
						"japanese": "律法の名において、お前たちは罪人だ。",
						"chinese": "以律法之名，你们是罪人。",
						"french": "Au nom de la Loi, vous êtes des pécheurs.",
						"spanish": "En nombre de la Ley, sois pecadores.",
						"vietnamese": "Nhân danh Pháp Luật, các ngươi là tội nhân.",
						"thai": "ในนามแห่งกฎหมาย พวกเจ้าคือคนบาป",
						"hindi": "कानून के नाम पर, तुम पापी हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 정의라고? 위선자!",
						"english": "You, justice? Hypocrite!",
						"japanese": "お前が正義だと？偽善者め！",
						"chinese": "你是正义？伪君子！",
						"french": "Toi, la justice ? Hypocrite !",
						"spanish": "¿Tú, la justicia? ¡Hipócrita!",
						"vietnamese": "Ngươi là công lý? Đồ đạo đức giả!",
						"thai": "เจ้าคือความยุติธรรมรึ? เจ้าคนหน้าไหว้หลังหลอก!",
						"hindi": "तुम न्याय हो? पाखंडी!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거스를 수 없는 질서다. 무릎 꿇어라.",
						"english": "This is an unyielding order. Kneel.",
						"japanese": "逆らえぬ秩序だ。ひざまずけ。",
						"chinese": "这是不可违抗的秩序。跪下！",
						"french": "C'est un ordre inéluctable. Agenouille-toi.",
						"spanish": "Es un orden inquebrantable. Arrodíllate.",
						"vietnamese": "Đây là một trật tự không thể chống lại. Hãy quỳ xuống.",
						"thai": "นี่คือระเบียบที่ไม่อาจขัดขืน จงคุกเข่าลง",
						"hindi": "यह एक अटूट व्यवस्था है। घुटने टेको।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이 질서는… 영원히….",
						"english": "Ugh... This order... forever...",
						"japanese": "くっ…この秩序は…永遠に…。",
						"chinese": "呃…这个秩序…永远…。",
						"french": "Ugh... Cet ordre... pour toujours....",
						"spanish": "Ugh... Este orden... para siempre....",
						"vietnamese": "Khụ... Trật tự này... vĩnh viễn....",
						"thai": "อึก... ระเบียบนี้... ตลอดไป...",
						"hindi": "उफ़... यह व्यवस्था... हमेशा के लिए..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "네 시대는 끝났어.",
						"english": "Your era is over.",
						"japanese": "お前の時代は終わった。",
						"chinese": "你的时代结束了。",
						"french": "Votre ère est révolue.",
						"spanish": "Tu era ha terminado.",
						"vietnamese": "Kỷ nguyên của ngươi đã kết thúc.",
						"thai": "ยุคของเจ้าสิ้นสุดลงแล้ว",
						"hindi": "तुम्हारा युग समाप्त हो गया।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "율법의 그림자가 잠시 물러났다. 하지만 덫은 더 깊숙이 박혀 있었다.",
						"english": "The shadow of the law receded briefly. But the trap was set deeper.",
						"japanese": "律法の影は一時的に退いた。だが、罠はより深く仕掛けられていた。",
						"chinese": "律法的阴影暂时退去。但陷阱却埋得更深了。",
						"french": "L'ombre de la loi s'est retirée un instant. Mais le piège était ancré plus profondément.",
						"spanish": "La sombra de la ley se retiró brevemente. Pero la trampa se clavó más profundo.",
						"vietnamese": "Bóng tối của luật pháp tạm thời lùi lại. Nhưng cái bẫy đã được cài sâu hơn.",
						"thai": "เงาของกฎหมายล่าถอยไปชั่วขณะ แต่กับดักได้ถูกฝังลึกยิ่งกว่าเดิม",
						"hindi": "कानून की छाया क्षण भर के लिए हट गई। लेकिन जाल और गहरा बिछ गया था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "다음 희생자를 기다리며, 왜곡된 정의는 계속될 것이다.",
						"english": "Awaiting its next victim, twisted justice will persist.",
						"japanese": "次の犠牲者を待ちながら、歪んだ正義は続くだろう。",
						"chinese": "等待下一个受害者，扭曲的正义将继续。",
						"french": "Attendant sa prochaine victime, la justice tordue perdurera.",
						"spanish": "Esperando a su próxima víctima, la justicia retorcida persistirá.",
						"vietnamese": "Chờ đợi nạn nhân tiếp theo, công lý méo mó sẽ tiếp diễn.",
						"thai": "รอเหยื่อรายต่อไป ความยุติธรรมที่บิดเบี้ยวจะยังคงดำเนินต่อไป",
						"hindi": "अगले शिकार की प्रतीक्षा में, विकृत न्याय जारी रहेगा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무의미한 저항… 결국 율법에 굴복할 뿐.",
						"english": "Futile resistance... You will ultimately yield to the law.",
						"japanese": "無意味な抵抗…結局、律法に屈するだけだ。",
						"chinese": "毫无意义的抵抗……最终只会屈服于律法。",
						"french": "Résistance inutile… Vous finirez par céder à la loi.",
						"spanish": "Resistencia inútil... Al final, sucumbiréis a la ley.",
						"vietnamese": "Kháng cự vô nghĩa… Cuối cùng cũng chỉ khuất phục trước luật pháp.",
						"thai": "การต่อต้านที่ไร้ความหมาย… สุดท้ายก็แค่ยอมจำนนต่อกฎหมาย",
						"hindi": "व्यर्थ का प्रतिरोध… अंततः तुम कानून के आगे झुकोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore… fini !",
						"spanish": "¡Todavía no… ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी…खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 다시 와라. 너희의 절망을 즐기마.",
						"english": "Yes. Come back. I'll revel in your despair.",
						"japanese": "よかろう。また来るがいい。お前たちの絶望を楽しもう。",
						"chinese": "好。再回来吧。我将享受你们的绝望。",
						"french": "Bien. Revenez. Je me délecterai de votre désespoir.",
						"spanish": "Bien. Regresad. Disfrutaré de vuestra desesperación.",
						"vietnamese": "Được thôi. Hãy quay lại đi. Ta sẽ tận hưởng sự tuyệt vọng của các ngươi.",
						"thai": "ได้เลย กลับมาอีกสิ ข้าจะรื่นรมย์กับความสิ้นหวังของพวกเจ้า",
						"hindi": "ठीक है। वापस आना। मैं तुम्हारी निराशा का आनंद लूँगा।"
					},
					"emotion": "happy"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"미스터 템플의 율법이 도시를 덮쳤다.",
			"겉으로는 질서가 돌아왔지만, 그 대가는 잔인했다.",
			"정의라는 이름 아래, 그림자는 더욱 짙어졌다.",
			"그리고, 비틀린 진실을 아는 자가 나타났다."
		],
		"english": [
			"Mr. Temple's law swept over the city.",
			"Order returned on the surface, but the cost was cruel.",
			"In the name of justice, shadows deepened.",
			"And then, someone who knew the twisted truth appeared."
		],
		"japanese": [
			"ミスター・テンプルの律法が街を覆った。",
			"表向きは秩序が戻ったが、その代償は残酷だった。",
			"正義の名の下に、影はさらに濃くなった。",
			"そして、歪んだ真実を知る者が現れた。"
		],
		"chinese": [
			"坦普尔先生的律法笼罩了这座城市。",
			"表面上秩序恢复了，但代价是残酷的。",
			"以正义之名，阴影愈发深重。",
			"然后，一个知晓扭曲真相的人出现了。"
		],
		"french": [
			"La loi de Monsieur Temple a balayé la ville.",
			"L'ordre est revenu en apparence, mais le prix était cruel.",
			"Au nom de la justice, les ombres s'épaissirent.",
			"Et puis, quelqu'un qui connaissait la vérité tordue est apparu."
		],
		"spanish": [
			"La ley del Sr. Temple cubrió la ciudad.",
			"En la superficie, el orden regresó, pero el costo fue cruel.",
			"En nombre de la justicia, las sombras se hicieron más profundas.",
			"Y entonces, apareció alguien que conocía la verdad retorcida."
		],
		"vietnamese": [
			"Luật pháp của Mr. Temple bao trùm thành phố.",
			"Bề ngoài trật tự đã trở lại, nhưng cái giá phải trả thật tàn khốc.",
			"Dưới danh nghĩa công lý, bóng tối càng trở nên sâu sắc.",
			"Và rồi, một người biết sự thật méo mó đã xuất hiện."
		],
		"thai": [
			"กฎของมิสเตอร์เทมเปิลปกคลุมทั่วเมือง",
			"ภายนอกดูเหมือนความสงบจะกลับมา แต่ราคาที่ต้องจ่ายนั้นโหดร้าย",
			"ภายใต้ชื่อของความยุติธรรม เงาก็ยิ่งมืดมิดลง",
			"และแล้ว คนที่รู้ความจริงที่บิดเบี้ยวก็ได้ปรากฏตัวขึ้น"
		],
		"hindi": [
			"मिस्टर टेंपल का कानून शहर पर छा गया।",
			"सतह पर व्यवस्था लौट आई, लेकिन इसकी कीमत क्रूर थी।",
			"न्याय के नाम पर, परछाइयाँ और गहरी हो गईं।",
			"और फिर, कोई ऐसा आया जो मुड़ी हुई सच्चाई जानता था।"
		]
	}
} as const;
