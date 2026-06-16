export const scenario_snowy_fenrir_7_05 = {
	"scenario_id": "snowy_fenrir_7_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		},
		"eira": {
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		},
		"inka": {
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
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 발자국이 눈밭에 선명했다. 인간의 수십 배에 달하는 크기였다.",
						"english": "Giant footprints were clear in the snow. Dozens of times larger than a human's.",
						"japanese": "巨大な足跡が雪原に鮮明に残っていた。人間の数十倍もの大きさだった。",
						"chinese": "巨大的脚印清晰地留在雪地上。其大小是人类的几十倍。",
						"french": "D'énormes empreintes étaient visibles dans la neige. Des dizaines de fois plus grandes que celles d'un humain.",
						"spanish": "Enormes huellas eran claras en la nieve. Decenas de veces más grandes que las de un humano.",
						"vietnamese": "Dấu chân khổng lồ hiện rõ trên tuyết. Kích thước gấp hàng chục lần con người.",
						"thai": "รอยเท้าขนาดมหึมาปรากฏชัดเจนบนพื้นหิมะ มีขนาดใหญ่กว่าของมนุษย์หลายสิบเท่า",
						"hindi": "बर्फ में विशाल पदचिह्न स्पष्ट थे। मानव के दर्जनों गुना बड़े आकार के।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이쪽이에요. 전설의 늑대가 지나간 흔적.",
						"english": "This way. Traces of the legendary wolf.",
						"japanese": "こちらです。伝説の狼が通った痕跡。",
						"chinese": "这边。传说中狼经过的痕迹。",
						"french": "Par ici. Les traces du loup légendaire.",
						"spanish": "Por aquí. Rastro del lobo legendario.",
						"vietnamese": "Lối này. Dấu vết của con sói huyền thoại.",
						"thai": "ทางนี้ครับ ร่องรอยของหมาป่าในตำนาน",
						"hindi": "इधर। पौराणिक भेड़िये के निशान।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "과연… 소문대로군.",
						"english": "Indeed... just as the rumors say.",
						"japanese": "やはり… 噂通りだ。",
						"chinese": "果然… 和传闻一样。",
						"french": "En effet… C'est bien ce que la rumeur disait.",
						"spanish": "Vaya... tal como dicen los rumores.",
						"vietnamese": "Quả nhiên… Đúng như lời đồn.",
						"thai": "จริงๆ ด้วย... อย่างที่ข่าวลือว่าไว้",
						"hindi": "वास्तव में... जैसा कि अफवाहें कहती हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "발자국 안에… 작은 뼈 조각들이 박혀 있어요. 특이하네요.",
						"english": "Inside the footprints... tiny bone fragments are embedded. That's unusual.",
						"japanese": "足跡の中に… 小さな骨の破片が埋まっています。珍しいですね。",
						"chinese": "脚印里… 嵌着些小骨头碎片。真特别。",
						"french": "Dans les empreintes... de minuscules fragments d'os sont incrustés. C'est inhabituel.",
						"spanish": "Dentro de las huellas... hay pequeños fragmentos de hueso incrustados. Qué peculiar.",
						"vietnamese": "Trong dấu chân… có những mảnh xương nhỏ bị kẹt. Thật kỳ lạ.",
						"thai": "ในรอยเท้า... มีชิ้นส่วนกระดูกเล็กๆ ฝังอยู่ แปลกจังเลย",
						"hindi": "पदचिह्नों के अंदर... हड्डियों के छोटे-छोटे टुकड़े धंसे हुए हैं। यह असामान्य है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "에이라는 작은 뼈 조각들을 수첩에 기록했다. 그 안에 숨겨진 의미를 알지 못한 채.",
						"english": "Eira noted the tiny bone fragments in her notebook. Unaware of the hidden meaning within them.",
						"japanese": "エイラは小さな骨の破片をノートに記録した。その中に隠された意味を知らぬまま。",
						"chinese": "艾拉把小骨头碎片记录在笔记本上。丝毫不知其中隐藏的意义。",
						"french": "Eira nota les minuscules fragments d'os dans son carnet. Ignorant la signification cachée qu'ils contenaient.",
						"spanish": "Eira anotó los pequeños fragmentos de hueso en su cuaderno. Sin saber el significado oculto que encerraban.",
						"vietnamese": "Eira ghi lại những mảnh xương nhỏ vào sổ tay. Mà không hề biết ý nghĩa ẩn giấu bên trong.",
						"thai": "เอร่าจดชิ้นส่วนกระดูกเล็กๆ เหล่านั้นลงในสมุด โดยไม่รู้ความหมายที่ซ่อนอยู่ข้างใน",
						"hindi": "एरा ने अपनी नोटबुक में हड्डियों के छोटे टुकड़े नोट किए। उनमें छिपे अर्थ से अनजान।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기요! 저기 늑대예요!",
						"english": "Hey! There's a wolf!",
						"japanese": "あれ！ 狼だ！",
						"chinese": "喂！那是狼！",
						"french": "Hé ! Là-bas, un loup !",
						"spanish": "¡Oye! ¡Ahí hay un lobo!",
						"vietnamese": "Này! Kia là một con sói!",
						"thai": "นี่! นั่นหมาป่า!",
						"hindi": "अरे! वहाँ एक भेड़िया है!"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어 마주하는군.",
						"english": "Finally, we meet.",
						"japanese": "ついに、対峙する時が来たか。",
						"chinese": "终于要面对了吗。",
						"french": "Enfin, on se rencontre.",
						"spanish": "Por fin, nos encontramos.",
						"vietnamese": "Cuối cùng cũng đối mặt.",
						"thai": "ในที่สุดก็เผชิญหน้ากัน",
						"hindi": "आखिरकार, हम मिलते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "근데… 왜 도망치지 않죠? 저희를 보고 있는데.",
						"english": "But... why isn't it running away? It's looking at us.",
						"japanese": "でも… なぜ逃げないんだ？ 私たちを見ているのに。",
						"chinese": "可是… 为什么它不逃跑呢？明明看到了我们。",
						"french": "Mais... pourquoi ne s'enfuit-il pas ? Il nous regarde pourtant.",
						"spanish": "Pero... ¿por qué no huye? Nos está mirando.",
						"vietnamese": "Nhưng… sao nó không chạy trốn? Nó đang nhìn chúng ta mà.",
						"thai": "แต่ว่า... ทำไมมันไม่หนีล่ะ? ทั้งที่มองเห็นพวกเราอยู่เลย",
						"hindi": "लेकिन... यह भाग क्यों नहीं रहा? यह हमें देख रहा है।"
					},
					"emotion": "base",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "늑대는 탐험대를 전혀 경계하지 않았다. 그저 눈밭의 작은 사체를 삼킬 뿐이었다.",
						"english": "The wolf showed no caution towards the expedition team. It merely devoured a small carcass in the snow.",
						"japanese": "狼は探検隊を全く警戒しなかった。ただ雪原の小さな死骸を貪り食うだけだった。",
						"chinese": "狼完全没有警惕探险队。只是吞食着雪地里的小尸体。",
						"french": "Le loup ne montra aucune méfiance envers l'équipe d'expédition. Il se contenta de dévorer une petite carcasse dans la neige.",
						"spanish": "El lobo no mostró ninguna cautela hacia el equipo de expedición. Simplemente devoraba un pequeño cadáver en la nieve.",
						"vietnamese": "Con sói không hề cảnh giác với đoàn thám hiểm. Nó chỉ đơn thuần nuốt chửng một xác chết nhỏ trên tuyết.",
						"thai": "หมาป่าไม่ได้ระแวงทีมสำรวจเลย มันแค่กลืนซากเล็กๆ บนลานหิมะเท่านั้น",
						"hindi": "भेड़िये ने अन्वेषण दल के प्रति कोई सावधानी नहीं बरती। उसने बस बर्फ में एक छोटे शव को निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게 정말 우리가 잡으려던 마수가 맞아요?",
						"english": "Is that really the beast we were trying to catch?",
						"japanese": "あれが本当に私たちが捕らえようとしていた魔獣なのか？",
						"chinese": "那真的是我们要抓的魔兽吗？",
						"french": "Est-ce vraiment la bête que nous essayions de capturer ?",
						"spanish": "¿Es esa realmente la bestia que intentábamos atrapar?",
						"vietnamese": "Đó có thực sự là con mãnh thú mà chúng ta định bắt không?",
						"thai": "นั่นใช่สัตว์อสูรที่เราตั้งใจจะจับจริงๆ เหรอ?",
						"hindi": "क्या वह वास्तव में वही जानवर है जिसे हम पकड़ने की कोशिश कर रहे थे?"
					},
					"speaker": "inka",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "늑대가 움직일 때마다… 이상한 소리가 들려요.",
						"english": "Every time the wolf moves... I hear a strange sound.",
						"japanese": "狼が動くたびに… 変な音が聞こえます。",
						"chinese": "狼每次动的时候… 都会发出奇怪的声音。",
						"french": "Chaque fois que le loup bouge... j'entends un bruit étrange.",
						"spanish": "Cada vez que el lobo se mueve... escucho un sonido extraño.",
						"vietnamese": "Mỗi khi con sói di chuyển… tôi lại nghe thấy một âm thanh kỳ lạ.",
						"thai": "ทุกครั้งที่หมาป่าขยับ... ได้ยินเสียงแปลกๆ เลย",
						"hindi": "जब भी भेड़िया चलता है... मुझे एक अजीब सी आवाज़ सुनाई देती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뼈가 부딪히는 소리인가?",
						"english": "Is that the sound of bones clashing?",
						"japanese": "骨がぶつかり合う音なのか？",
						"chinese": "是骨头撞击的声音吗？",
						"french": "Est-ce le bruit des os qui s'entrechoquent ?",
						"spanish": "¿Es el sonido de huesos chocando?",
						"vietnamese": "Có phải là tiếng xương va vào nhau không?",
						"thai": "เป็นเสียงกระดูกกระทบกันเหรอ?",
						"hindi": "क्या यह हड्डियों के टकराने की आवाज़ है?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 살과 근육이 내는 소리가 아니에요. 마치… 텅 빈 껍데기가 부딪히는 것 같아요.",
						"english": "No. It's not the sound of flesh and muscle. It's like... empty shells colliding.",
						"japanese": "ええ、肉や筋肉の音ではありません。まるで…空っぽの殻がぶつかり合うような音です。",
						"chinese": "不，那不是血肉和肌肉发出的声音。那感觉……就像空壳在碰撞。",
						"french": "Non. Ce n'est pas le son de la chair et des muscles. C'est comme... des coquilles vides qui s'entrechoquent.",
						"spanish": "No. No es el sonido de la carne y el músculo. Es como... caparazones vacíos chocando.",
						"vietnamese": "Không. Đó không phải là âm thanh của da thịt và cơ bắp. Cứ như... những vỏ rỗng đang va vào nhau.",
						"thai": "ไม่ครับ ไม่ใช่เสียงของเนื้อและกล้ามเนื้อเลย มันเหมือน... เปลือกหอยที่ว่างเปล่ากระทบกัน",
						"hindi": "नहीं। यह मांस और मांसपेशियों की आवाज़ नहीं है। ऐसा लगता है... जैसे खाली गोले टकरा रहे हों।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에이라의 미심쩍은 기록이, 늑대의 본질을 향해 조금씩 다가갔다.",
						"english": "Aira's suspicious records slowly approached the wolf's true nature.",
						"japanese": "アイラの不審な記録は、狼の本質へと少しずつ近づいていった。",
						"chinese": "艾拉可疑的记录，正一点点逼近狼的本质。",
						"french": "Les mystérieux carnets d'Aira se rapprochaient lentement de la véritable nature du loup.",
						"spanish": "Los sospechosos registros de Aira se acercaban lentamente a la verdadera naturaleza del lobo.",
						"vietnamese": "Những ghi chép đáng ngờ của Aira dần dần tiến gần đến bản chất của con sói.",
						"thai": "บันทึกที่น่าสงสัยของเอร่าค่อยๆ เข้าใกล้ธรรมชาติที่แท้จริงของหมาป่า",
						"hindi": "ऐरा के संदिग्ध रिकॉर्ड धीरे-धीरे भेड़िये के असली स्वभाव के करीब आते गए।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 늑대가 방금… 사체를 삼켰는데.",
						"english": "That wolf just... swallowed a corpse.",
						"japanese": "あの狼が今…死体を飲み込んだ。",
						"chinese": "那匹狼刚才……吞噬了尸体。",
						"french": "Ce loup vient de... dévorer un cadavre.",
						"spanish": "Ese lobo acaba de... tragarse un cadáver.",
						"vietnamese": "Con sói đó vừa... nuốt một xác chết.",
						"thai": "หมาป่าตัวนั้นเพิ่งจะ... กลืนศพเข้าไป",
						"hindi": "उस भेड़िये ने अभी-अभी... एक शव को निगल लिया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어디로 갔지?",
						"english": "Where did it go?",
						"japanese": "どこへ行った？",
						"chinese": "去哪儿了？",
						"french": "Où est-il passé ?",
						"spanish": "¿A dónde fue?",
						"vietnamese": "Nó đi đâu rồi?",
						"thai": "มันหายไปไหน?",
						"hindi": "वह कहाँ गया?"
					}
				},
				{
					"content": {
						"korean": "동공… 안으로 사라졌어. 흔적도 없이.",
						"english": "Into its pupil... vanished. Without a trace.",
						"japanese": "瞳孔の…中に消えた。痕跡もなく。",
						"chinese": "消失在……瞳孔深处。了无痕迹。",
						"french": "Dans sa pupille... disparu. Sans laisser de trace.",
						"spanish": "En su pupila... desapareció. Sin dejar rastro.",
						"vietnamese": "Biến mất... vào trong đồng tử. Không để lại dấu vết.",
						"thai": "หายเข้าไปในรูม่านตา... ไร้ร่องรอย",
						"hindi": "पुतली में... गायब हो गया। बिना किसी निशान के।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "삼켰는데, 아무것도 남지 않았어. 저 안은… 비어 있어.",
						"english": "Swallowed, but nothing remained. Inside... it's empty.",
						"japanese": "飲み込んだのに、何も残っていない。中は…空っぽだ。",
						"chinese": "吞噬了，却什么都没留下。那里……是空的。",
						"french": "Avalé, mais il ne reste rien. L'intérieur... est vide.",
						"spanish": "Lo tragó, pero no quedó nada. Dentro... está vacío.",
						"vietnamese": "Nuốt rồi, nhưng không còn gì. Bên trong... trống rỗng.",
						"thai": "กลืนแล้วแต่ไม่เหลืออะไรเลย ข้างใน... ว่างเปล่า",
						"hindi": "निगल लिया, लेकिन कुछ भी नहीं बचा। अंदर... वह खाली है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "글라세의 눈은 텅 빈 공허를 똑바로 응시했다. 그곳에 채워지는 것은 아무것도 없었다.",
						"english": "Glace's eyes stared directly into the empty void. Nothing was filled within it.",
						"japanese": "グラッセの目は、空っぽの虚空をまっすぐに見つめた。そこには何も満たされなかった。",
						"chinese": "格拉斯的眼睛直视着空虚的混沌。那里什么也没有被填满。",
						"french": "Les yeux de Glace fixaient le vide béant. Rien ne s'y remplissait.",
						"spanish": "Los ojos de Glace miraron directamente al vacío. Nada se llenaba allí.",
						"vietnamese": "Đôi mắt của Glace nhìn thẳng vào khoảng không trống rỗng. Không có gì được lấp đầy ở đó.",
						"thai": "ดวงตาของกลาเซจ้องมองความว่างเปล่า ไม่มีอะไรถูกเติมเต็มในนั้นเลย",
						"hindi": "ग्लेस की आँखें सीधे खाली शून्य को घूर रही थीं। उसमें कुछ भी नहीं भरा था।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 늑대의 몸을 이루던 뼈와 사체들이 와르르 무너져 내렸다. 폭풍 같던 눈보라도 잦아들었다.",
						"english": "The bones and corpses that formed the giant wolf's body crumbled apart. The blizzard, like a storm, also subsided.",
						"japanese": "巨大な狼の体を構成していた骨と死体がガラガラと崩れ落ちた。嵐のような吹雪も収まった。",
						"chinese": "构成巨狼身体的骨骼和尸体轰然崩塌。暴风雪也渐渐平息。",
						"french": "Les os et les corps qui formaient le corps du loup géant s'effondrèrent. Le blizzard, tel une tempête, s'apaisa également.",
						"spanish": "Los huesos y cadáveres que formaban el cuerpo del lobo gigante se desmoronaron. La ventisca, como una tormenta, también amainó.",
						"vietnamese": "Xương và xác chết tạo nên cơ thể con sói khổng lồ đổ sập xuống. Trận bão tuyết như vũ bão cũng lắng xuống.",
						"thai": "กระดูกและซากศพที่ประกอบเป็นร่างของหมาป่ายักษ์พังทลายลงมา พายุหิมะที่เหมือนพายุร้ายก็สงบลง",
						"hindi": "विशाल भेड़िए के शरीर को बनाने वाली हड्डियाँ और शव ढह गए। तूफान जैसी बर्फीली हवा भी थम गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini...?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้วเหรอ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					}
				},
				{
					"type": "direction",
					"speaker": "glace",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "아니. 이 공허는 사라지지 않아. 그저 다른 곳으로 옮겨갈 뿐.",
						"english": "No. This void won't disappear. It will merely move elsewhere.",
						"japanese": "いや。この虚無は消えない。ただ別の場所へ移るだけだ。",
						"chinese": "不。这份虚无不会消失。它只是会转移到别处。",
						"french": "Non. Ce vide ne disparaîtra pas. Il ne fera que se déplacer ailleurs.",
						"spanish": "No. Este vacío no desaparecerá. Simplemente se moverá a otro lugar.",
						"vietnamese": "Không. Sự trống rỗng này sẽ không biến mất. Nó chỉ đơn giản là di chuyển sang nơi khác.",
						"thai": "ไม่ ความว่างเปล่านี้จะไม่หายไป มันเพียงแค่เคลื่อนย้ายไปยังที่อื่นเท่านั้น",
						"hindi": "नहीं। यह शून्यता गायब नहीं होगी। यह बस कहीं और चली जाएगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "늑대의 잔해가 흩어진 자리. 그곳에 남은 것은 아무것도 없었다. 텅 빈 허공만이 존재했다.",
						"english": "Where the wolf's remains scattered, nothing was left. Only an empty void remained.",
						"japanese": "狼の残骸が散らばった場所。そこには何も残っていなかった。空虚だけが存在した。",
						"chinese": "狼的残骸散落之处。那里什么都没有留下。只有一片空虚。",
						"french": "Là où les restes du loup étaient dispersés, il ne restait rien. Seul le vide existait.",
						"spanish": "Donde los restos del lobo se dispersaron, no quedó nada. Solo existía un vacío.",
						"vietnamese": "Nơi tàn tích của sói rải rác. Chẳng còn lại gì ở đó. Chỉ còn lại khoảng không vô định.",
						"thai": "ณ จุดที่ซากของหมาป่ากระจัดกระจาย ไม่มีอะไรเหลืออยู่เลย มีเพียงความว่างเปล่าเท่านั้น",
						"hindi": "जहाँ भेड़िये के अवशेष बिखरे थे, वहाँ कुछ नहीं बचा था। केवल एक खालीपन मौजूद था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 늑대와 정면으로 마주했다. 거대한 몸체는 썩어가는 뼈와 사체로 엉겨 있었다.",
						"english": "Finally, face to face with the wolf. Its massive body was tangled with rotting bones and corpses.",
						"japanese": "ついに狼と正面から向き合った。その巨大な体は、朽ちた骨と死体で絡み合っていた。",
						"chinese": "终于，与狼正面相遇。它巨大的身躯被腐烂的骨骼和尸体缠绕。",
						"french": "Enfin, face au loup. Son corps massif était enchevêtré d'os et de cadavres en décomposition.",
						"spanish": "Finalmente, cara a cara con el lobo. Su enorme cuerpo estaba enredado con huesos podridos y cadáveres.",
						"vietnamese": "Cuối cùng, đối mặt trực diện với con sói. Cơ thể khổng lồ của nó quấn lấy xương và xác chết đang phân hủy.",
						"thai": "ในที่สุดก็เผชิญหน้ากับหมาป่า ร่างกายมหึมาของมันเต็มไปด้วยกระดูกเน่าเปื่อยและซากศพ",
						"hindi": "अंत में, भेड़िये से आमने-सामने मुलाकात हुई। उसका विशाल शरीर सड़ी हुई हड्डियों और शवों से लिपटा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저것이… 종말의 늑대인가.",
						"english": "Is that... the Wolf of the End?",
						"japanese": "あれが…終焉の狼なのか。",
						"chinese": "那便是……终焉之狼吗？",
						"french": "Est-ce là... le Loup de la Fin ?",
						"spanish": "¿Es ese... el Lobo del Fin?",
						"vietnamese": "Đó có phải... là Sói của Ngày Tận Thế không?",
						"thai": "นั่นคือ... หมาป่าแห่งจุดจบหรือเปล่า?",
						"hindi": "क्या वह... अंत का भेड़िया है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "안구가 있어야 할 자리의 깊은 동공. 그 안에 굶주린 눈보라가 휘몰아쳤다.",
						"english": "Deep pupils where eyeballs should be. A hungry blizzard raged within them.",
						"japanese": "眼球があるべき場所には深い瞳孔。その中で飢えた吹雪が荒れ狂っていた。",
						"chinese": "本该有眼球的地方，是深邃的瞳孔。饥饿的暴风雪在其中肆虐。",
						"french": "Des pupilles profondes là où des globes oculaires devraient être. Un blizzard affamé y faisait rage.",
						"spanish": "Pupilas profundas donde deberían estar los globos oculares. Una ventisca hambrienta rugía en su interior.",
						"vietnamese": "Đồng tử sâu hoắm nơi đáng lẽ có nhãn cầu. Một trận bão tuyết đói khát đang gào thét bên trong.",
						"thai": "รูม่านตาที่ลึกในที่ที่ควรจะมีดวงตา พายุหิมะที่หิวโหยโหมกระหน่ำอยู่ข้างใน",
						"hindi": "जहाँ आँखें होनी चाहिए, वहाँ गहरी पुतलियाँ। उनके भीतर एक भूखा बर्फीला तूफान उमड़ रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "늑대는 으르렁대지 않았다. 그저 눈앞의 작은 사체 하나를 삼켰을 뿐이다.",
						"english": "The wolf did not snarl. It merely swallowed a small corpse before its eyes.",
						"japanese": "狼は唸らなかった。ただ目の前の小さな死体を一つ飲み込んだだけだった。",
						"chinese": "狼没有咆哮。它只是吞下了眼前的一具小尸体。",
						"french": "Le loup ne grogna pas. Il se contenta d'engloutir une petite carcasse devant ses yeux.",
						"spanish": "El lobo no gruñó. Simplemente engulló un pequeño cadáver frente a sus ojos.",
						"vietnamese": "Con sói không gầm gừ. Nó chỉ nuốt chửng một xác chết nhỏ ngay trước mắt.",
						"thai": "หมาป่าไม่ได้คำราม มันเพียงแค่กลืนซากศพเล็ก ๆ ตรงหน้าลงไปเท่านั้น",
						"hindi": "भेड़िए ने गुर्राया नहीं। उसने बस अपनी आँखों के सामने एक छोटे से शव को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "삼켜진 사체는 동공 너머로 사라져 흔적도 없었다. 무엇을 삼켜도 채워지지 않는 위장이었다.",
						"english": "The swallowed corpse vanished beyond its pupil, leaving no trace. It was a stomach that could never be filled, no matter what it swallowed.",
						"japanese": "飲み込まれた死体は瞳孔の奥へと消え、痕跡もなかった。何を飲み込んでも満たされない胃袋だった。",
						"chinese": "被吞噬的尸体消失在瞳孔深处，没有留下任何痕迹。那是一个无论吞噬什么都无法填饱的胃。",
						"french": "La carcasse avalée disparut au-delà de sa pupille, ne laissant aucune trace. C'était un estomac qui ne pouvait jamais être rempli, peu importe ce qu'il avalait.",
						"spanish": "El cadáver tragado desapareció más allá de su pupila, sin dejar rastro. Era un estómago que nunca se llenaba, sin importar lo que tragara.",
						"vietnamese": "Xác chết bị nuốt chửng biến mất sau đồng tử, không để lại dấu vết. Đó là một cái dạ dày không bao giờ no, dù nuốt bất cứ thứ gì.",
						"thai": "ซากศพที่ถูกกลืนหายไปในดวงตา ไม่ทิ้งร่องรอยใด ๆ มันเป็นกระเพาะที่ไม่มีวันเต็ม ไม่ว่าจะกลืนอะไรลงไป",
						"hindi": "निगला हुआ शव उसकी पुतली के पार गायब हो गया, कोई निशान नहीं छोड़ते हुए। यह एक ऐसा पेट था जो कभी नहीं भरता, चाहे वह कुछ भी निगल ले।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이건 사냥감이 아니야.",
						"english": "...This isn't prey.",
						"japanese": "…これは獲物じゃない。",
						"chinese": "…这不是猎物。",
						"french": "...Ce n'est pas une proie.",
						"spanish": "...Esto no es una presa.",
						"vietnamese": "...Đây không phải con mồi.",
						"thai": "...นี่ไม่ใช่เหยื่อ",
						"hindi": "...यह शिकार नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 쫓던 '마수'가 아니야. 이건… 그저 텅 빈 그릇일 뿐.",
						"english": "It's not the 'Beast' we were hunting. This is... merely an empty vessel.",
						"japanese": "我々が追っていた『魔獣』じゃない。これは…ただの空っぽの器だ。",
						"chinese": "这不是我们追捕的‘魔兽’。这…只是一个空壳罢了。",
						"french": "Ce n'est pas la 'Bête' que nous chassions. C'est... juste un vaisseau vide.",
						"spanish": "No es la 'Bestia' que estábamos cazando. Esto es... simplemente un recipiente vacío.",
						"vietnamese": "Đây không phải 'Ma thú' mà chúng ta truy đuổi. Đây... chỉ là một cái vỏ rỗng thôi.",
						"thai": "นี่ไม่ใช่ 'อสูร' ที่เราตามล่า นี่มัน...เป็นเพียงภาชนะที่ว่างเปล่าเท่านั้น",
						"hindi": "यह वह 'राक्षस' नहीं है जिसका हम शिकार कर रहे थे। यह... मात्र एक खाली पात्र है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 한기가 등줄기를 스쳤다. 모든 의문이 퍼즐처럼 맞춰지는 순간이었다.",
						"english": "An unknown chill ran down my spine. It was the moment all doubts clicked into place like puzzle pieces.",
						"japanese": "得体の知れない悪寒が背筋を走り抜けた。すべての疑問がパズルのように嵌まる瞬間だった。",
						"chinese": "一股莫名的寒意刺骨而来。所有疑问在那一刻如拼图般严丝合缝。",
						"french": "Un frisson inconnu me parcourut l'échine. C'était le moment où tous les doutes s'emboîtaient comme des pièces de puzzle.",
						"spanish": "Un escalofrío desconocido me recorrió la espalda. Fue el momento en que todas las dudas encajaron como piezas de un rompecabezas.",
						"vietnamese": "Một luồng khí lạnh không rõ nguồn gốc lướt qua sống lưng. Đó là khoảnh khắc mọi nghi vấn khớp vào nhau như những mảnh ghép.",
						"thai": "ความหนาวเย็นที่ไม่รู้จักแล่นผ่านกระดูกสันหลัง มันเป็นช่วงเวลาที่ข้อสงสัยทั้งหมดเข้าที่เหมือนชิ้นส่วนปริศนา",
						"hindi": "एक अज्ञात ठंडक रीढ़ की हड्डी से उतर गई। यह वह क्षण था जब सभी संदेह पहेली के टुकड़ों की तरह एक साथ आ गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "굶주린 눈보라가 탐험대를 집어삼켰다. 그들의 몸도 늑대의 일부가 될 운명이었다.",
						"english": "The hungry blizzard devoured the expedition. Their bodies, too, were destined to become part of the wolf.",
						"japanese": "飢えた吹雪が探検隊を飲み込んだ。彼らの体もまた、狼の一部となる運命だった。",
						"chinese": "饥饿的暴风雪吞噬了探险队。他们的身体也注定会成为狼的一部分。",
						"french": "Le blizzard affamé a englouti l'expédition. Leurs corps étaient eux aussi destinés à devenir une partie du loup.",
						"spanish": "La ventisca hambrienta devoró a la expedición. Sus cuerpos también estaban destinados a convertirse en parte del lobo.",
						"vietnamese": "Bão tuyết đói khát nuốt chửng đoàn thám hiểm. Cơ thể họ cũng định mệnh trở thành một phần của bầy sói.",
						"thai": "พายุหิมะที่หิวโหยกลืนกินคณะสำรวจ ร่างกายของพวกเขาถูกกำหนดให้เป็นส่วนหนึ่งของหมาป่าเช่นกัน",
						"hindi": "भूखे बर्फीले तूफान ने अभियान दल को निगल लिया। उनके शरीर भी भेड़िये का हिस्सा बनने के लिए नियत थे।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…더 많은 것을 삼키리라.",
						"english": "...to swallow even more.",
						"japanese": "…さらに多くを飲み込むだろう。",
						"chinese": "……将会吞噬更多。",
						"french": "...engloutira encore plus.",
						"spanish": "...devorará aún más.",
						"vietnamese": "...sẽ nuốt chửng nhiều hơn nữa.",
						"thai": "...จะกลืนกินให้มากยิ่งขึ้น",
						"hindi": "...और भी बहुत कुछ निगल जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 끝낼 순 없어…! 이건… 사냥감이 아니야!",
						"english": "I can't end like this...! This isn't... prey!",
						"japanese": "このままでは終われない…！これは…獲物じゃない！",
						"chinese": "不能就这样结束…！这不是…猎物！",
						"french": "Je ne peux pas finir comme ça… ! Ce n'est pas… une proie !",
						"spanish": "¡No puedo terminar así...! ¡Esto no es... una presa!",
						"vietnamese": "Không thể kết thúc như thế này...! Đây không phải là... con mồi!",
						"thai": "จะจบแบบนี้ไม่ได้...! นี่ไม่ใช่...เหยื่อ!",
						"hindi": "मैं ऐसे खत्म नहीं कर सकता...! यह... शिकार नहीं है!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 몰아치는 눈보라, 설원 깊은 곳.",
			"북방의 전설, '종말의 늑대'를 찾아 탐험대는 들어섰다.",
			"그림자를 좇는 사냥꾼들. 무기에는 피 묻은 영광이 기다렸다.",
			"하지만 이 사냥은, 곧 그들의 존재를 뒤흔들게 될 것이다."
		],
		"english": [
			"Endless blizzards, deep in the snowfield.",
			"The expedition entered, seeking the northern legend, 'Wolf of Doom'.",
			"Hunters chasing shadows. Blood-stained glory awaited their weapons.",
			"But this hunt would soon shake their very existence."
		],
		"japanese": [
			"果てしなく吹き荒れる吹雪、雪原の奥深く。",
			"北方の伝説、『終焉の狼』を求め、探検隊は足を踏み入れた。",
			"影を追う狩人たち。武器には血塗られた栄光が待っていた。",
			"しかしこの狩りは、やがて彼らの存在を揺るがすことになるだろう。"
		],
		"chinese": [
			"无尽的暴风雪，雪原深处。",
			"探险队深入，寻找北方传说中的“末日之狼”。",
			"追逐影子的猎人们。他们的武器上等待着血染的荣耀。",
			"然而，这场狩猎很快将动摇他们的存在。"
		],
		"french": [
			"Des blizzards sans fin, au plus profond de la toundra.",
			"L'expédition s'enfonça, à la recherche de la légende du Nord, le « Loup du Destin ».",
			"Des chasseurs pourchassant les ombres. Une gloire sanglante attendait leurs armes.",
			"Mais cette chasse allait bientôt ébranler leur existence même."
		],
		"spanish": [
			"Tormentas de nieve interminables, en lo profundo del campo nevado.",
			"La expedición se adentró, buscando la leyenda del norte, el 'Lobo del Fin'.",
			"Cazadores persiguiendo sombras. La gloria teñida de sangre esperaba sus armas.",
			"Pero esta caza pronto sacudiría su propia existencia."
		],
		"vietnamese": [
			"Bão tuyết không ngừng nghỉ, sâu thẳm trong cánh đồng tuyết.",
			"Đoàn thám hiểm tiến vào, tìm kiếm truyền thuyết phương Bắc, 'Sói Diệt Vong'.",
			"Những thợ săn đuổi theo bóng tối. Vinh quang nhuốm máu đang chờ đợi vũ khí của họ.",
			"Nhưng cuộc săn này sẽ sớm làm rung chuyển sự tồn tại của họ."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำไม่หยุดยั้ง ลึกเข้าไปในทุ่งหิมะ",
			"คณะสำรวจมุ่งหน้าเข้าสู่ดินแดน เพื่อค้นหาตำนานแห่งทิศเหนือ 'หมาป่าแห่งหายนะ'",
			"เหล่านักล่าผู้ไล่ล่าเงา เกียรติยศเปื้อนเลือดรอคอยอยู่บนอาวุธของพวกเขา",
			"แต่การล่านั้น ในไม่ช้าจะสั่นคลอนการดำรงอยู่ของพวกเขา"
		],
		"hindi": [
			"अंतहीन बर्फीले तूफान, हिमक्षेत्र के गहरे में।",
			"उत्तरी किंवदंती, 'विनाश के भेड़िये' को खोजने के लिए अभियान दल अंदर गया।",
			"छाया का पीछा करने वाले शिकारी। खून से लथपथ महिमा उनके हथियारों का इंतजार कर रही थी।",
			"लेकिन यह शिकार जल्द ही उनके अस्तित्व को हिला देगा।"
		]
	},
	"epilogue": {
		"korean": [
			"늑대의 죽음은 곧 허무였다. 채워지지 않는 동공은 그저 사라졌을 뿐.",
			"사냥감이라 믿었던 존재는, 실은 거대한 공허의 그림자였다.",
			"무엇을 얻었는가. 영광인가, 아니면 더 깊은 혼란인가.",
			"눈보라는 계속되었고, 설원은 변함없이 차가웠다."
		],
		"english": [
			"The wolf's death was naught but emptiness. Unfilled pupils simply vanished.",
			"The being they believed to be their prey was, in truth, a shadow of a vast void.",
			"What was gained? Glory, or an even deeper chaos?",
			"The blizzard raged on, and the snowfield remained as cold as ever."
		],
		"japanese": [
			"狼の死は即ち虚無だった。満たされることのない瞳はただ消え去っただけ。",
			"獲物だと信じていた存在は、実は巨大な虚無の影だった。",
			"何を得たのか。栄光か、それともより深き混沌か。",
			"吹雪は続き、雪原は変わらず冷たかった。"
		],
		"chinese": [
			"狼的死亡即是虚无。空洞的瞳孔只是消失了。",
			"他们以为是猎物的存在，实际上是巨大虚空的影子。",
			"他们得到了什么？是荣耀，还是更深的混乱？",
			"暴风雪继续肆虐，雪原依然寒冷如昔。"
		],
		"french": [
			"La mort du loup n'était que néant. Ses pupilles vides avaient simplement disparu.",
			"L'être qu'ils croyaient être leur proie était, en réalité, l'ombre d'un vide immense.",
			"Qu'avaient-ils gagné ? La gloire, ou un chaos encore plus profond ?",
			"Le blizzard continuait, et la toundra restait aussi froide que jamais."
		],
		"spanish": [
			"La muerte del lobo no fue más que vacío. Las pupilas sin llenar simplemente desaparecieron.",
			"El ser que creían su presa era, en realidad, una sombra de un vasto vacío.",
			"¿Qué se obtuvo? ¿Gloria, o un caos aún más profundo?",
			"La tormenta de nieve continuó, y el campo nevado permaneció tan frío como siempre."
		],
		"vietnamese": [
			"Cái chết của con sói chỉ là hư vô. Đồng tử trống rỗng đơn giản là biến mất.",
			"Thực thể mà họ tin là con mồi, thực ra là bóng tối của một hư không khổng lồ.",
			"Họ đã đạt được gì? Vinh quang, hay một sự hỗn loạn sâu sắc hơn?",
			"Bão tuyết vẫn tiếp diễn, và cánh đồng tuyết vẫn lạnh lẽo như thường."
		],
		"thai": [
			"ความตายของหมาป่าเป็นเพียงความว่างเปล่า ดวงตาที่ว่างเปล่านั้นเพียงแค่หายไป",
			"สิ่งมีชีวิตที่พวกเขาเชื่อว่าเป็นเหยื่อ แท้จริงแล้วคือเงาของความว่างเปล่าอันยิ่งใหญ่",
			"ได้อะไรมา? เกียรติยศ หรือความวุ่นวายที่ลึกซึ้งยิ่งกว่ากันแน่?",
			"พายุหิมะยังคงพัดกระหน่ำ และทุ่งหิมะยังคงหนาวเหน็บเช่นเดิม"
		],
		"hindi": [
			"भेड़िये की मृत्यु केवल शून्यता थी। अधूरी पुतलियाँ बस गायब हो गईं।",
			"जिस प्राणी को वे अपना शिकार मानते थे, वह वास्तव में एक विशाल शून्य की छाया था।",
			"क्या प्राप्त हुआ? महिमा, या और गहरी अराजकता?",
			"बर्फीले तूफान जारी रहे, और हिमक्षेत्र हमेशा की तरह ठंडा रहा।"
		]
	}
} as const;
