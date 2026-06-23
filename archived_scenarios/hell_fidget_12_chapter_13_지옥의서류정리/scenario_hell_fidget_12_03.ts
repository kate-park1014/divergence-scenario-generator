export const scenario_hell_fidget_12_03 = {
	"scenario_id": "hell_fidget_12_03",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥의 분류 시스템. 영혼들은 끝없이 흐느꼈다.",
						"english": "Hell's classification system. Souls wept endlessly.",
						"japanese": "地獄の分類システム。魂は果てしなくすすり泣いた。",
						"chinese": "地狱的分类系统。灵魂们无尽地哭泣。",
						"french": "Le système de classification de l'Enfer. Les âmes pleuraient sans fin.",
						"spanish": "El sistema de clasificación del Infierno. Las almas lloraban sin cesar.",
						"vietnamese": "Hệ thống phân loại của Địa ngục. Các linh hồn khóc không ngừng.",
						"thai": "ระบบจัดประเภทของนรก วิญญาณต่างร่ำไห้ไม่รู้จบ",
						"hindi": "नर्क का वर्गीकरण प्रणाली। आत्माएँ अंतहीन रोती रहीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 대체 뭐야?",
						"english": "What… what is this place?",
						"japanese": "ここは…一体何だ？",
						"chinese": "这里……到底是什么？",
						"french": "Qu'est-ce que… qu'est-ce que c'est que cet endroit ?",
						"spanish": "¿Qué… qué es este lugar?",
						"vietnamese": "Chỗ này… rốt cuộc là gì?",
						"thai": "ที่นี่… มันคืออะไรกันแน่?",
						"hindi": "यह… आखिर क्या है?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "오, 새로운 영혼들! 운명은 공정하지. 진정한 규칙을 알려줄게.",
						"english": "Oh, new souls! Fate is fair. I'll tell you the true rules.",
						"japanese": "おお、新たな魂たちよ！運命は公平だ。真のルールを教えてやろう。",
						"chinese": "哦，新来的灵魂们！命运是公平的。我会告诉你们真正的规则。",
						"french": "Oh, nouvelles âmes ! Le destin est juste. Je vais vous révéler les vraies règles.",
						"spanish": "¡Oh, almas nuevas! El destino es justo. Te diré las verdaderas reglas.",
						"vietnamese": "Ồ, những linh hồn mới! Định mệnh công bằng. Ta sẽ cho ngươi biết luật lệ thật sự.",
						"thai": "โอ้ วิญญาณใหม่! โชคชะตาเป็นธรรม ข้าจะบอกกฎที่แท้จริงให้เจ้า",
						"hindi": "ओहो, नई आत्माएँ! भाग्य निष्पक्ष है। मैं तुम्हें सच्चे नियम बताऊँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 규칙?",
						"english": "True rules?",
						"japanese": "真のルール？",
						"chinese": "真正的规则？",
						"french": "Les vraies règles ?",
						"spanish": "¿Reglas verdaderas?",
						"vietnamese": "Luật lệ thật sự?",
						"thai": "กฎที่แท้จริง?",
						"hindi": "सच्चे नियम?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "모든 고통은 무작위로 결정돼. 주사위를 던져! 그게 심판이야.",
						"english": "All suffering is decided randomly. Roll the dice! That's the judgment.",
						"japanese": "すべての苦痛は無作為に決定される。サイコロを投げろ！それが審判だ。",
						"chinese": "所有的痛苦都由随机决定。掷骰子吧！那就是审判。",
						"french": "Toute souffrance est décidée au hasard. Lancez les dés ! C'est le jugement.",
						"spanish": "Todo sufrimiento se decide al azar. ¡Lanza los dados! Ese es el juicio.",
						"vietnamese": "Mọi đau khổ đều được quyết định ngẫu nhiên. Hãy gieo xúc xắc! Đó là sự phán xét.",
						"thai": "ความทุกข์ทรมานทั้งหมดถูกตัดสินแบบสุ่ม ทอยลูกเต๋าเลย! นั่นคือการพิพากษา",
						"hindi": "सभी पीड़ा यादृच्छिक रूप से निर्धारित होती है। पासा फेंको! वही न्याय है।"
					},
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "mara",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "그러니 이 서류들을 잘 분류해야 해. 대충 해선 안 돼.",
						"english": "So, you must categorize these documents carefully. Don't do it carelessly.",
						"japanese": "だから、これらの書類をきちんと分類しなければならない。適当にしてはいけない。",
						"chinese": "所以，你必须仔细分类这些文件。不能马虎。",
						"french": "Donc, tu dois classer ces documents avec soin. Ne le fais pas à la légère.",
						"spanish": "Así que, debes clasificar estos documentos cuidadosamente. No lo hagas a la ligera.",
						"vietnamese": "Vậy nên, ngươi phải phân loại những tài liệu này cẩn thận. Không được làm qua loa.",
						"thai": "ดังนั้น คุณต้องจัดหมวดหมู่เอกสารเหล่านี้อย่างระมัดระวัง อย่าทำแบบลวก ๆ",
						"hindi": "इसलिए, तुम्हें इन दस्तावेजों को सावधानी से वर्गीकृत करना होगा। लापरवाही से मत करो।"
					},
					"speaker": "mara",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "찢어진 서류뿐인데… 뭘 분류해?",
						"english": "Just torn papers... What am I supposed to sort?",
						"japanese": "破れた書類ばかり…何を分類するんだ？",
						"chinese": "只有破纸片…分类什么？",
						"french": "Que des papiers déchirés... Qu'est-ce que je suis censé trier ?",
						"spanish": "Solo papeles rotos... ¿Qué se supone que debo clasificar?",
						"vietnamese": "Toàn giấy rách... Phân loại cái gì chứ?",
						"thai": "มีแต่กระดาษขาดๆ... ให้จัดหมวดหมู่เหรอ?",
						"hindi": "बस फटे हुए कागजात... क्या छांटूं?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떤 방을 들어가도 비슷한 양식의 찢어진 서류 조각들이 널려있다. 내용은 이해할 수 없었지만, 어딘가 익숙한 문구들이 스쳐 지나갔다.",
						"english": "Every room I enter is littered with torn fragments of similar-looking documents. I couldn't understand the content, but familiar phrases seemed to flash by.",
						"japanese": "どの部屋に入っても、似たような書式の破れた書類の断片が散らばっている。内容は理解できなかったが、どこか見覚えのある文句が頭をよぎった。",
						"chinese": "无论进入哪个房间，都散落着相似格式的破损文件碎片。内容无法理解，但一些熟悉的词句似乎一闪而过。",
						"french": "Chaque pièce est jonchée de fragments déchirés de documents similaires. Je ne pouvais pas en comprendre le contenu, mais des phrases familières semblaient apparaître.",
						"spanish": "En cada habitación a la que entro, hay fragmentos de documentos rotos y de estilo similar esparcidos. No pude entender el contenido, pero frases familiares parecieron cruzar mi mente.",
						"vietnamese": "Dù vào phòng nào cũng thấy giấy tờ rách nát có kiểu dáng tương tự rải khắp nơi. Không thể hiểu nội dung, nhưng những cụm từ quen thuộc lướt qua.",
						"thai": "ไม่ว่าจะเข้าห้องไหน ก็มีแต่เศษเอกสารฉีกขาดรูปแบบคล้ายกันกระจัดกระจายไปทั่ว ไม่เข้าใจเนื้อหา แต่ก็มีบางวลีที่คุ้นเคยแวบเข้ามาในหัว",
						"hindi": "हर कमरे में फटे हुए, एक जैसे दस्तावेज़ों के टुकड़े बिखरे पड़े थे। मैं सामग्री को समझ नहीं पा रहा था, लेकिन कुछ जाने-पहचाने वाक्यांश नज़र से गुज़र रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "이해할 필요 없어! 그저, 고통의 근원을 찾고 싶다면 이 절차를 따라야 해.",
						"english": "No need to understand! Just, if you want to find the source of suffering, you must follow this procedure.",
						"japanese": "理解する必要はない！ただ、苦痛の根源を見つけたいなら、この手順に従うんだ。",
						"chinese": "无需理解！只要你想找到痛苦的根源，就必须遵循这个程序。",
						"french": "Pas besoin de comprendre ! Si tu veux trouver la source de la souffrance, tu dois suivre cette procédure.",
						"spanish": "¡No hay necesidad de entender! Solo, si quieres encontrar el origen del sufrimiento, debes seguir este procedimiento.",
						"vietnamese": "Không cần hiểu! Chỉ là, nếu muốn tìm nguồn gốc của nỗi đau, ngươi phải tuân theo quy trình này.",
						"thai": "ไม่ต้องเข้าใจ! แค่ถ้าอยากจะพบกับต้นตอของความทรมาน ก็ต้องทำตามขั้นตอนนี้",
						"hindi": "समझने की ज़रूरत नहीं! बस, अगर तुम दर्द का स्रोत खोजना चाहते हो, तो तुम्हें इस प्रक्रिया का पालन करना होगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "더 혼란스러워질 뿐인데…",
						"english": "It's only getting more confusing...",
						"japanese": "余計に混乱するだけなのに…",
						"chinese": "只会变得更混乱…",
						"french": "Ça ne fait que devenir plus déroutant…",
						"spanish": "Solo se vuelve más confuso…",
						"vietnamese": "Chỉ càng thêm bối rối thôi...",
						"thai": "มีแต่จะสับสนขึ้นไปอีก...",
						"hindi": "बस और उलझन बढ़ रही है..."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "봐. 저 영혼들을. 주사위 결과대로 반복되는 고통. 아름답지 않아?",
						"english": "Look. At those souls. Suffering repeated according to the dice roll. Isn't it beautiful?",
						"japanese": "見ろ。あの魂たちを。サイコロの結果通りに繰り返される苦痛。美しくないか？",
						"chinese": "看。那些灵魂。痛苦根据骰子结果重复上演。难道不美吗？",
						"french": "Regarde. Ces âmes. La souffrance répétée selon le lancer de dés. N'est-ce pas beau ?",
						"spanish": "Mira. Esas almas. El sufrimiento repetido según el resultado de los dados. ¿No es hermoso?",
						"vietnamese": "Nhìn đi. Những linh hồn đó. Nỗi đau lặp đi lặp lại theo kết quả xúc xắc. Không phải rất đẹp sao?",
						"thai": "ดูสิ วิญญาณเหล่านั้น ความทรมานที่ซ้ำไปซ้ำมาตามผลของลูกเต๋า มันไม่สวยงามหรอกเหรอ?",
						"hindi": "देखो। उन आत्माओं को। पासे के परिणाम के अनुसार दोहराया गया दर्द। क्या यह सुंदर नहीं है?"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥의 끔찍한 풍경 속에서, 유난히 정갈하게 정리된 것처럼 보이는 특정 구역이 스쳐 지나갔다. 주변의 혼돈과는 어울리지 않는 이질적인 느낌이었다.",
						"english": "Amidst the horrific scenery of hell, a specific area, unusually neat and organized, seemed to flash by. It felt alien, out of place with the surrounding chaos.",
						"japanese": "地獄の恐ろしい風景の中で、ひときわ整然と整理されているように見える特定の区域が通り過ぎた。周囲の混沌とは不釣り合いな異質な感覚だった。",
						"chinese": "在地狱的恐怖景象中，一个异常整洁有序的特定区域一闪而过。它与周围的混乱格格不入，给人一种异样的感觉。",
						"french": "Au milieu des scènes horribles de l'enfer, une zone particulière, inhabituellement nette et organisée, sembla apparaître. Elle semblait étrangère, en décalage avec le chaos ambiant.",
						"spanish": "En medio del horrible paisaje del infierno, una zona específica, inusualmente ordenada y organizada, pareció pasar fugazmente. Se sentía extraña, fuera de lugar con el caos circundante.",
						"vietnamese": "Giữa khung cảnh địa ngục kinh hoàng, một khu vực cụ thể, trông gọn gàng và ngăn nắp một cách bất thường, lướt qua. Nó mang lại cảm giác xa lạ, không phù hợp với sự hỗn loạn xung quanh.",
						"thai": "ท่ามกลางทิวทัศน์อันน่าสยดสยองของนรก พื้นที่เฉพาะแห่งหนึ่งที่ดูสะอาดสะอ้านและเป็นระเบียบผิดปกติได้แวบผ่านไป มันให้ความรู้สึกแปลกแยก ไม่เข้ากับความวุ่นวายรอบข้าง",
						"hindi": "नरक के भयानक दृश्यों के बीच, एक विशेष क्षेत्र, जो असामान्य रूप से साफ-सुथरा और व्यवस्थित लग रहा था, आंखों के सामने से गुज़रा। यह अजीब लग रहा था, आस-पास की अराजकता से मेल नहीं खा रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아름답다고? 이건 그냥… 부조리잖아.",
						"english": "Beautiful? This is just... absurd.",
						"japanese": "美しいだと？これはただの…不条理じゃないか。",
						"chinese": "美丽？这简直是…荒谬。",
						"french": "Beau ? C'est juste... absurde.",
						"spanish": "¿Hermoso? Esto es solo... absurdo.",
						"vietnamese": "Đẹp á? Cái này chỉ là... vô lý thôi.",
						"thai": "สวยงามเหรอ? นี่มันแค่... ไร้สาระนี่นา",
						"hindi": "सुंदर? यह तो बस... बेतुका है।"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 이 무작위성이야말로 공정함이야. 마치 제비뽑기처럼.",
						"english": "No. This randomness is precisely fairness. Like drawing lots.",
						"japanese": "違う。この無作為性こそが公平さだ。まるで籤引きのように。",
						"chinese": "不。这种随机性才是真正的公平。就像抽签一样。",
						"french": "Non. Ce caractère aléatoire est précisément la justice. Comme un tirage au sort.",
						"spanish": "No. Esta aleatoriedad es precisamente la justicia. Como un sorteo.",
						"vietnamese": "Không. Chính sự ngẫu nhiên này mới là công bằng. Giống như rút thăm vậy.",
						"thai": "ไม่หรอก ความสุ่มนี้แหละคือความยุติธรรม เหมือนกับการจับฉลากเลย",
						"hindi": "नहीं। यही यादृच्छिकता ही निष्पक्षता है। जैसे लॉटरी निकालना।"
					},
					"speaker": "mara",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 우리는 뭘 해야 해?",
						"english": "So what should we do?",
						"japanese": "じゃあ、俺たちは何をすればいい？",
						"chinese": "那我们该做什么？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราต้องทำอะไรล่ะ?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가. 가장 작은 존재가 이 시스템의 심장일 테니.",
						"english": "Go deeper. The smallest entity will be the heart of this system.",
						"japanese": "もっと深く潜れ。最も小さな存在が、このシステムの心臓だろうから。",
						"chinese": "深入进去。最微小的存在将是这个系统的核心。",
						"french": "Va plus loin. La plus petite entité sera le cœur de ce système.",
						"spanish": "Ve más profundo. La entidad más pequeña será el corazón de este sistema.",
						"vietnamese": "Đi sâu hơn nữa. Thực thể nhỏ nhất sẽ là trái tim của hệ thống này.",
						"thai": "ลงไปให้ลึกกว่านี้ สิ่งที่เล็กที่สุดนั่นแหละคือหัวใจของระบบนี้",
						"hindi": "और गहराई तक जाओ। सबसे छोटी इकाई ही इस प्रणाली का दिल होगी।"
					},
					"speaker": "mara"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "거봐! 이 길을 따라가면 돼. 너희의 운명도 여기에.",
						"english": "See? Just follow this path. Your fate is here too.",
						"japanese": "ほら！この道を行けばいい。お前たちの運命もここにある。",
						"chinese": "看吧！沿着这条路走就行。你们的命运也在此。",
						"french": "Tu vois ! Il suffit de suivre ce chemin. Votre destin est ici aussi.",
						"spanish": "¡Lo ves! Solo sigue este camino. Vuestro destino también está aquí.",
						"vietnamese": "Thấy chưa! Cứ đi theo con đường này. Định mệnh của các ngươi cũng ở đây.",
						"thai": "เห็นไหม! แค่เดินตามทางนี้ไปเลย โชคชะตาของพวกเจ้าก็อยู่ที่นี่ด้วย",
						"hindi": "देखा! बस इसी रास्ते पर चलो। तुम्हारा भाग्य भी यहीं है।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길을 잃은 영혼들이 특정 구역을 맴돌며, 마치 이미 겪었던 고통을 반복하는 듯한 이상한 행렬이 목격된다.",
						"english": "Lost souls wander a specific area, an eerie procession repeating torments they've already endured.",
						"japanese": "道に迷った魂たちが特定の区域をさまよい、まるでかつて経験した苦痛を繰り返すかのような奇妙な行列が目撃されている。",
						"chinese": "迷失的灵魂在特定区域徘徊，目睹着一场诡异的队伍，仿佛在重复他们已经经历过的痛苦。",
						"french": "Des âmes perdues errent dans une zone spécifique, un cortège étrange répétant les tourments qu'elles ont déjà subis.",
						"spanish": "Almas perdidas deambulan por un área específica, una extraña procesión que repite los tormentos que ya han soportado.",
						"vietnamese": "Những linh hồn lạc lối lang thang trong một khu vực nhất định, một cuộc diễu hành kỳ lạ lặp lại những nỗi thống khổ mà họ đã từng chịu đựng.",
						"thai": "ดวงวิญญาณที่หลงทางวนเวียนอยู่ในพื้นที่เฉพาะ ขบวนแห่แปลกประหลาดราวกับกำลังซ้ำเติมความทุกข์ทรมานที่เคยประสบมาแล้ว",
						"hindi": "भटकी हुई आत्माएँ एक विशेष क्षेत्र में भटकती हैं, एक अजीब जुलूस जो उन यातनाओं को दोहरा रहा है जिन्हें वे पहले ही झेल चुके हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마라, 네가 틀린 것 같아. 이건 진짜 규칙이 아니야.",
						"english": "Mara, I think you're wrong. This isn't a real rule.",
						"japanese": "マラ、お前は間違っていると思う。これは本当のルールじゃない。",
						"chinese": "玛拉，你好像错了。这不是真正的规则。",
						"french": "Mara, je pense que tu te trompes. Ce n'est pas une vraie règle.",
						"spanish": "Mara, creo que te equivocas. Esta no es una regla de verdad.",
						"vietnamese": "Mara, tôi nghĩ cô sai rồi. Đây không phải là một quy tắc thực sự.",
						"thai": "มารา ฉันว่าเธอคิดผิดแล้ว นี่ไม่ใช่กฎจริงๆ",
						"hindi": "मारा, मुझे लगता है तुम गलत हो। यह कोई असली नियम नहीं है।"
					},
					"speaker": "character_4",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "뭐? 아니야! 내가 지옥에서 제일 잘 알아!",
						"english": "What? No! I know Hell best!",
						"japanese": "何？違う！地獄のことは私が一番よく知ってる！",
						"chinese": "什么？不！我最了解地狱了！",
						"french": "Quoi ? Non ! C'est moi qui connais le mieux l'Enfer !",
						"spanish": "Faites attention. Je connais l'Enfer mieux que quiconque !",
						"vietnamese": "Gì chứ? Không! Tôi là người hiểu rõ địa ngục nhất!",
						"thai": "อะไรนะ? ไม่จริง! ฉันนี่แหละที่รู้เรื่องนรกดีที่สุด!",
						"hindi": "क्या? नहीं! मैं ही नर्क को सबसे अच्छे से जानता हूँ!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 혼돈 속에서 우린 뭘 해야 하는 거야?",
						"english": "What are we supposed to do in this chaos?",
						"japanese": "この混沌の中で、俺たちは何をすればいいんだ？",
						"chinese": "在这片混沌中，我们该做什么？",
						"french": "Que devons-nous faire dans ce chaos ?",
						"spanish": "¿Qué se supone que debemos hacer en este caos?",
						"vietnamese": "Chúng ta phải làm gì trong sự hỗn loạn này đây?",
						"thai": "พวกเราควรทำยังไงในความโกลาหลนี้?",
						"hindi": "इस अराजकता में हमें क्या करना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하하! 길을 잃었군. 그것이 너희의 운명이다.",
						"english": "Hahaha! Lost, are we? That is your fate.",
						"japanese": "ハハハ！道に迷ったか。それがお前たちの運命だ。",
						"chinese": "哈哈哈！迷路了是吗？那就是你们的命运。",
						"french": "Hahaha ! Perdus, n'est-ce pas ? C'est votre destin.",
						"spanish": "¡Jajaja! ¿Perdidos, eh? Ese es vuestro destino.",
						"vietnamese": "Hahaha! Lạc đường rồi sao? Đó chính là định mệnh của các ngươi.",
						"thai": "ฮ่าฮ่าฮ่า! หลงทางงั้นเหรอ? นั่นแหละคือโชคชะตาของพวกเจ้า",
						"hindi": "हाहाहा! भटक गए हो क्या? यही तुम्हारी नियति है।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무작위의 고통이 다시 탐험대를 덮쳤다. 끝없는 순환이었다.",
						"english": "Random suffering enveloped the expedition once more. It was an endless cycle.",
						"japanese": "無作為な苦痛が再び探検隊を襲った。それは終わりのない循環だった。",
						"chinese": "随机的痛苦再次笼罩了探险队。这是一个无尽的循环。",
						"french": "La souffrance aléatoire a de nouveau enveloppé l'expédition. C'était un cycle sans fin.",
						"spanish": "El sufrimiento aleatorio envolvió de nuevo a la expedición. Era un ciclo sin fin.",
						"vietnamese": "Nỗi đau ngẫu nhiên lại bao trùm đoàn thám hiểm. Đó là một vòng lặp không hồi kết.",
						"thai": "ความเจ็บปวดที่สุ่มได้ครอบงำคณะสำรวจอีกครั้ง มันเป็นวงจรที่ไม่มีที่สิ้นสุด",
						"hindi": "यादृच्छिक पीड़ा ने एक बार फिर अभियान को घेर लिया। यह एक अंतहीन चक्र था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항. 다시 와도 결과는 같을 것이다.",
						"english": "Futile resistance. Even if we return, the outcome will be the same.",
						"japanese": "取るに足らない抵抗だ。また来ても、結果は同じだろう。",
						"chinese": "微不足道的抵抗。即使再来，结果也一样。",
						"french": "Résistance futile. Même si nous revenons, le résultat sera le même.",
						"spanish": "Resistencia inútil. Aunque volvamos, el resultado será el mismo.",
						"vietnamese": "Sự kháng cự vô ích. Dù có quay lại, kết quả cũng sẽ như vậy.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ ต่อให้กลับมา ผลลัพธ์ก็คงเหมือนเดิม",
						"hindi": "व्यर्थ प्रतिरोध। अगर हम वापस भी आते हैं, तो परिणाम वही होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 시도한다! 여기서 멈출 수 없어!",
						"english": "Damn it... I'll try again! I can't stop here!",
						"japanese": "ちくしょう…もう一度試す！ここで止まるわけにはいかない！",
						"chinese": "该死…我再试一次！我不能停在这里！",
						"french": "Mince... J'essaie encore ! Je ne peux pas m'arrêter là !",
						"spanish": "Maldita sea... ¡Lo intentaré de nuevo! ¡No puedo parar aquí!",
						"vietnamese": "Chết tiệt... Tôi sẽ thử lại! Không thể dừng lại ở đây!",
						"thai": "ให้ตายสิ... ฉันจะลองอีกครั้ง! ฉันหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "धिक्कार है... मैं फिर कोशिश करूँगा! मैं यहाँ रुक नहीं सकता!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"direction": "down",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "mara",
					"type": "direction"
				},
				{
					"content": {
						"korean": "무작위의 고통. 무의미한 분류. 그것이 지옥의 본질.",
						"english": "Random suffering. Meaningless classification. That is the essence of Hell.",
						"japanese": "無作為の苦痛。無意味な分類。それが地獄の本質だ。",
						"chinese": "随机的痛苦。毫无意义的分类。那就是地狱的本质。",
						"french": "Souffrance aléatoire. Classification insignifiante. Telle est l'essence de l'Enfer.",
						"spanish": "Sufrimiento aleatorio. Clasificación sin sentido. Esa es la esencia del Infierno.",
						"vietnamese": "Nỗi đau ngẫu nhiên. Phân loại vô nghĩa. Đó là bản chất của địa ngục.",
						"thai": "ความทุกข์ทรมานที่สุ่มมา การจำแนกที่ไร้ความหมาย นั่นแหละคือแก่นแท้ของนรก",
						"hindi": "यादृच्छिक पीड़ा। अर्थहीन वर्गीकरण। यही नर्क का सार है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 이 순환의 일부가 될 것이다.",
						"english": "You too will soon become part of this cycle.",
						"japanese": "お前たちもすぐにこの循環の一部となるだろう。",
						"chinese": "你们很快也会成为这个循环的一部分。",
						"french": "Vous aussi ferez bientôt partie de ce cycle.",
						"spanish": "Vosotros también pronto seréis parte de este ciclo.",
						"vietnamese": "Các ngươi cũng sẽ sớm trở thành một phần của vòng luân hồi này.",
						"thai": "พวกเจ้าเองก็จะกลายเป็นส่วนหนึ่งของวัฏจักรนี้ในไม่ช้า",
						"hindi": "तुम भी जल्द ही इस चक्र का हिस्सा बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마! 우린 여기서 벗어날 거야!",
						"english": "Don't talk nonsense! We'll get out of here!",
						"japanese": "馬鹿なことを言うな！俺たちはここから抜け出すぞ！",
						"chinese": "别胡说八道！我们会离开这里的！",
						"french": "Ne dis pas de bêtises ! Nous allons nous en sortir !",
						"spanish": "¡No digas tonterías! ¡Saldremos de aquí!",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ thoát khỏi đây!",
						"thai": "อย่าพูดพล่าม! พวกเราจะออกไปจากที่นี่ให้ได้!",
						"hindi": "बकवास मत करो! हम यहाँ से निकलेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 단순한 '혼돈'이 아니란 걸… 깨닫겠지…",
						"english": "Ugh... you'll realize... it's not just 'chaos'...",
						"japanese": "くっ…単なる「混沌」ではないと…気づくがいい…",
						"chinese": "呃……你会明白的……这不只是简单的“混沌”……",
						"french": "Ugh... tu réaliseras... que ce n'est pas juste le 'chaos'...",
						"spanish": "Uf... te darás cuenta... de que no es solo 'caos'...",
						"vietnamese": "Khụ... ngươi sẽ nhận ra... đây không chỉ là 'hỗn loạn'...",
						"thai": "อึก... เจ้าคงจะเข้าใจ... ว่ามันไม่ใช่แค่ 'ความโกลาหล' ธรรมดา...",
						"hindi": "उफ़... तुम समझोगे... कि यह केवल 'अराजकता' नहीं है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이제 알겠어. 마라가 틀렸던 거야.",
						"english": "Now I understand. Mara was wrong.",
						"japanese": "これでわかった。マーラが間違っていたんだ。",
						"chinese": "现在我明白了。玛拉错了。",
						"french": "Maintenant je comprends. Mara s'est trompée.",
						"spanish": "Ahora lo entiendo. Mara estaba equivocada.",
						"vietnamese": "Giờ thì tôi hiểu rồi. Mara đã sai.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว มาราเข้าใจผิดไปเอง",
						"hindi": "अब मुझे समझ आया। मारा गलत थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고통의 무작위성은 단순히 혼돈이 아니었다. 이 모든 것을 분류하는 '가장 작은 존재'를 향한 발걸음이 시작되었다.",
						"english": "The randomness of suffering wasn't mere chaos. A journey towards the 'smallest being' that categorizes all began.",
						"japanese": "苦痛の無作為性は単なる混沌ではなかった。このすべてを分類する「最も小さな存在」への一歩が始まったのだ。",
						"chinese": "痛苦的随机性并非单纯的混沌。一场迈向能将这一切归类的‘最微小存在’的旅程开始了。",
						"french": "Le caractère aléatoire de la souffrance n'était pas un simple chaos. Un pas a été fait vers le 'plus petit être' qui catégorise tout cela.",
						"spanish": "La aleatoriedad del sufrimiento no era puro caos. Un paso hacia el 'ser más pequeño' que clasifica todo esto ha comenzado.",
						"vietnamese": "Tính ngẫu nhiên của nỗi đau không đơn thuần là hỗn loạn. Một bước đi hướng tới 'thực thể nhỏ nhất' phân loại tất cả đã bắt đầu.",
						"thai": "ความสุ่มของความเจ็บปวดไม่ใช่แค่ความสับสนวุ่นวาย การเดินทางสู่ 'สิ่งมีชีวิตที่เล็กที่สุด' ที่จำแนกทุกสิ่งได้เริ่มต้นขึ้นแล้ว",
						"hindi": "पीड़ा की यादृच्छिकता केवल अराजकता नहीं थी। 'सबसे छोटे अस्तित्व' की ओर एक कदम शुरू हुआ जो इन सभी को वर्गीकृत करता है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 행정실. 무작위의 고통이 분류되는 곳.",
			"마라는 '진정한 규칙'이라 말했다. 하지만 그건 함정이었다.",
			"운명을 결정하는 주사위. 그 숫자가 너를 어디로 이끌지 아무도 몰랐다.",
			"혼돈 속에서 공포는 극대화된다. 이 부조리함 속에서 길을 잃었다."
		],
		"english": [
			"The Administrative Office of Hell. Where random suffering is categorized.",
			"Mara spoke of 'true rules'. But it was a trap.",
			"Dice that decide fate. No one knew where those numbers would lead you.",
			"In chaos, fear is maximized. Lost in this absurdity."
		],
		"japanese": [
			"地獄の事務室。無作為の苦痛が分類される場所。",
			"マーラは「真のルール」と言った。しかしそれは罠だった。",
			"運命を決定するサイコロ。その数字がどこへ導くか、誰も知らなかった。",
			"混沌の中で恐怖は極大化する。この不条理の中で道に迷った。"
		],
		"chinese": [
			"地狱行政室。随机的痛苦在此分类。",
			"玛拉提到了“真正的规则”。但这只是一个陷阱。",
			"决定命运的骰子。没人知道那些数字会把你引向何方。",
			"在混沌中，恐惧被放大。在这荒谬中迷失。"
		],
		"french": [
			"Le Bureau Administratif de l'Enfer. Là où la souffrance aléatoire est classée.",
			"Mara parlait de \"vraies règles\". Mais c'était un piège.",
			"Des dés qui décident du destin. Personne ne savait où ces chiffres vous mèneraient.",
			"Dans le chaos, la peur est maximisée. Perdu dans cette absurdité."
		],
		"spanish": [
			"La Oficina Administrativa del Infierno. Donde el sufrimiento aleatorio es clasificado.",
			"Mara habló de 'reglas verdaderas'. Pero era una trampa.",
			"Dados que deciden el destino. Nadie sabía adónde te llevarían esos números.",
			"En el caos, el miedo se maximiza. Perdido en esta absurdidad."
		],
		"vietnamese": [
			"Văn phòng Hành chính của Địa ngục. Nơi đau khổ ngẫu nhiên được phân loại.",
			"Mara đã nói về 'luật lệ thật sự'. Nhưng đó là một cái bẫy.",
			"Xúc xắc định đoạt số phận. Không ai biết những con số đó sẽ dẫn bạn đi đâu.",
			"Trong hỗn loạn, nỗi sợ hãi đạt đến đỉnh điểm. Mất phương hướng trong sự phi lý này."
		],
		"thai": [
			"สำนักงานบริหารนรก ที่ซึ่งความทุกข์ทรมานแบบสุ่มถูกจัดหมวดหมู่",
			"มาราพูดถึง 'กฎที่แท้จริง' แต่มันเป็นกับดัก",
			"ลูกเต๋าที่ตัดสินชะตากรรม ไม่มีใครรู้ว่าตัวเลขเหล่านั้นจะนำพาคุณไปที่ใด",
			"ในความสับสนวุ่นวาย ความกลัวจะเพิ่มขึ้นสูงสุด หลงทางอยู่ในความไร้เหตุผลนี้"
		],
		"hindi": [
			"नर्क का प्रशासनिक कार्यालय। जहाँ यादृच्छिक पीड़ा का वर्गीकरण किया जाता है।",
			"मारा ने 'सच्चे नियम' की बात की। लेकिन वह एक जाल था।",
			"भाग्य का निर्णय करने वाले पासे। कोई नहीं जानता था कि वे संख्याएँ तुम्हें कहाँ ले जाएँगी।",
			"अराजकता में, भय अधिकतम हो जाता है। इस बेतुकेपन में खो गया।"
		]
	}
} as const;
