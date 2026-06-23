export const scenario_forest_silvana_38_02 = {
	"scenario_id": "forest_silvana_38_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
					"content": {
						"korean": "숲의 깊은 곳, 덤불이 우거진 폐쇄된 공동체. 낯선 그림자가 나타났다.",
						"english": "Deep in the forest, a secluded, overgrown community. A strange shadow appeared.",
						"japanese": "森の奥深く、茂みに覆われた閉鎖的な共同体。見知らぬ影が現れた。",
						"chinese": "森林深处，一个灌木丛生的封闭社区。一个陌生的身影出现了。",
						"french": "Au plus profond de la forêt, une communauté recluse et envahie. Une étrange ombre apparut.",
						"spanish": "En lo profundo del bosque, una comunidad aislada y cubierta de maleza. Una extraña sombra apareció.",
						"vietnamese": "Sâu trong rừng, một cộng đồng biệt lập, rậm rạp. Một bóng đen lạ xuất hiện.",
						"thai": "ลึกเข้าไปในป่า ชุมชนที่ถูกปิดกั้นและรกทึบ เงาประหลาดปรากฏขึ้น",
						"hindi": "जंगल में गहराई तक, एक एकांत, झाड़ियों से भरा समुदाय। एक अजीब परछाई दिखाई दी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "여긴… 감시당하는 곳이야. 벗어날 수 없어.",
						"english": "This place... it's watched. We can't escape.",
						"japanese": "ここは…監視されている。逃れられない。",
						"chinese": "这里……被监视着。无法逃脱。",
						"french": "Cet endroit... est surveillé. On ne peut pas s'échapper.",
						"spanish": "Este lugar... está vigilado. No podemos escapar.",
						"vietnamese": "Nơi này... bị giám sát. Chúng ta không thể thoát ra.",
						"thai": "ที่นี่...ถูกจับตามอง เราหนีไม่พ้น",
						"hindi": "यह जगह... निगरानी में है। हम बच नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "누가 우릴 감시해?",
						"english": "Who watches us?",
						"japanese": "誰が私たちを監視しているの？",
						"chinese": "谁在监视我们？",
						"french": "Qui nous surveille ?",
						"spanish": "¿Quién nos vigila?",
						"vietnamese": "Ai đang giám sát chúng ta?",
						"thai": "ใครเป็นคนจับตามองเรา?",
						"hindi": "हमें कौन देख रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "'어머니'의 눈은 어디에나 있어. 모든 걸 보고 듣지.",
						"english": "The 'Mother's' eyes are everywhere. She sees and hears everything.",
						"japanese": "「母」の目はどこにでもある。すべてを見て、すべてを聞いている。",
						"chinese": "“母亲”的眼睛无处不在。她看得到，听得到一切。",
						"french": "Les yeux de la 'Mère' sont partout. Elle voit et entend tout.",
						"spanish": "Los ojos de la 'Madre' están en todas partes. Ella lo ve y lo oye todo.",
						"vietnamese": "Mắt của 'Mẹ' ở khắp mọi nơi. Bà ấy thấy và nghe tất cả.",
						"thai": "ดวงตาของ 'แม่' อยู่ทุกหนแห่ง เธอเห็นและได้ยินทุกสิ่ง",
						"hindi": "'माँ' की आँखें हर जगह हैं। वह सब कुछ देखती और सुनती है।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…무슨 소리야?",
						"english": "...What are you talking about?",
						"japanese": "…どういうことだ？",
						"chinese": "……你在说什么？",
						"french": "...Qu'est-ce que tu racontes ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Bạn đang nói về cái gì vậy?",
						"thai": "...คุณกำลังพูดถึงอะไร?",
						"hindi": "...तुम क्या कह रहे हो?"
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
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 평화가… 전부 가짜라고 하면?",
						"english": "What if this peace... is all a lie?",
						"japanese": "この平和が…全部偽物だとしたら？",
						"chinese": "如果这份平静…全是假的呢？",
						"french": "Et si cette paix... n'était qu'un mensonge ?",
						"spanish": "¿Y si esta paz... fuera una mentira?",
						"vietnamese": "Nếu sự bình yên này... chỉ là giả dối thì sao?",
						"thai": "จะเป็นอย่างไรถ้าความสงบนี้... เป็นของปลอมทั้งหมด?",
						"hindi": "अगर यह शांति... सब कुछ झूठ हो तो?"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "가짜라니?",
						"english": "A lie?",
						"japanese": "偽物だって？",
						"chinese": "假的？",
						"french": "Un mensonge ?",
						"spanish": "¿Una mentira?",
						"vietnamese": "Giả dối ư?",
						"thai": "ของปลอม?",
						"hindi": "झूठ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아름다운 만큼… 무서운 대가를 치러야 해. 전부 숲의 몫이지.",
						"english": "As beautiful as it is... a terrible price must be paid. It's all for the forest.",
						"japanese": "美しいだけ…恐ろしい代償を払わなければならない。すべては森の取り分だ。",
						"chinese": "越是美丽…就越要付出可怕的代价。这全是森林的馈赠。",
						"french": "Aussi belle soit-elle... un terrible prix doit être payé. Tout cela revient à la forêt.",
						"spanish": "Tan hermoso como es... un precio terrible debe pagarse. Todo es para el bosque.",
						"vietnamese": "Đẹp bao nhiêu... thì phải trả giá đáng sợ bấy nhiêu. Tất cả là phần của rừng.",
						"thai": "ยิ่งสวยงามเท่าไร... ก็ต้องจ่ายค่าตอบแทนที่น่ากลัวเท่านั้น ทั้งหมดนี้เป็นของป่า",
						"hindi": "जितनी खूबसूरत है... उतनी ही भयानक कीमत चुकानी होगी। यह सब जंगल का हिस्सा है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "대가가… 뭘 말하는 거야?",
						"english": "What kind of price... are you talking about?",
						"japanese": "代償って…何を言ってるの？",
						"chinese": "代价…指的是什么？",
						"french": "Quel genre de prix... tu parles ?",
						"spanish": "¿Qué tipo de precio... estás hablando?",
						"vietnamese": "Giá phải trả... là gì?",
						"thai": "ค่าตอบแทน... หมายถึงอะไร?",
						"hindi": "कीमत... क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어머니는 모두에게 자비롭다고 했어.",
						"english": "Mother said she was merciful to everyone.",
						"japanese": "母は、皆に慈悲深いと言った。",
						"chinese": "母亲说她对所有人都很仁慈。",
						"french": "Mère a dit qu'elle était miséricordieuse envers tous.",
						"spanish": "Madre dijo que era misericordiosa con todos.",
						"vietnamese": "Mẹ nói người nhân từ với tất cả mọi người.",
						"thai": "แม่บอกว่านางทรงเมตตาต่อทุกคน",
						"hindi": "माँ ने कहा कि वह सब पर दयालु थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "자비? 그건… 감시와 통제의 다른 이름이야. 순종 아니면 죽음.",
						"english": "Mercy? That's... just another name for surveillance and control. Obedience or death.",
						"japanese": "慈悲？それは…監視と支配の別の名だ。服従か、死か。",
						"chinese": "仁慈？那不过是…监视与控制的另一个名字。顺从，否则死亡。",
						"french": "Miséricorde ? C'est... un autre nom pour la surveillance et le contrôle. Obéissance ou mort.",
						"spanish": "¿Misericordia? Eso es... otro nombre para la vigilancia y el control. Obediencia o muerte.",
						"vietnamese": "Nhân từ? Đó là... một cái tên khác của sự giám sát và kiểm soát. Tuân theo hoặc chết.",
						"thai": "เมตตา? นั่นคือ... ชื่ออื่นของการเฝ้าระวังและการควบคุม การเชื่อฟังหรือไม่ก็ความตาย",
						"hindi": "दया? वह... निगरानी और नियंत्रण का दूसरा नाम है। आज्ञाकारिता या मृत्यु।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "저 고대 문양들을 봐. 숲의 공식 이야기와는 달라….",
						"english": "Look at those ancient patterns. They're different from the forest's official story...",
						"japanese": "あの古代の文様を見て。森の公式な話とは違う…。",
						"chinese": "看看那些古代纹样。它们与森林的官方说法不同…。",
						"french": "Regarde ces motifs anciens. Ils sont différents de l'histoire officielle de la forêt...",
						"spanish": "Mira esos patrones antiguos. Son diferentes de la historia oficial del bosque...",
						"vietnamese": "Nhìn những hoa văn cổ xưa kia đi. Chúng khác với câu chuyện chính thức của rừng...",
						"thai": "ดูดลายโบราณเหล่านั้นสิ มันแตกต่างจากเรื่องราวอย่างเป็นทางการของป่า...",
						"hindi": "उन प्राचीन नमूनों को देखो। वे जंगल की आधिकारिक कहानी से अलग हैं..."
					}
				},
				{
					"content": {
						"korean": "문양이… 뭐가 다르지?",
						"english": "What's different... about the patterns?",
						"japanese": "文様が…何が違うの？",
						"chinese": "纹样…有什么不同？",
						"french": "Qu'est-ce qui est différent... dans les motifs ?",
						"spanish": "¿Qué es diferente... en los patrones?",
						"vietnamese": "Hoa văn... có gì khác?",
						"thai": "ลวดลาย... ต่างกันตรงไหน?",
						"hindi": "नमूनों में... क्या अलग है?"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "더 이상 가지 마… 위험해. 돌아갈 수 있을 때 돌아가.",
						"english": "Don't go any further... It's dangerous. Go back while you still can.",
						"japanese": "これ以上行かないで…危険だ。戻れるうちに、戻れ。",
						"chinese": "别再往前了…很危险。趁还能回去，快回去。",
						"french": "Ne va pas plus loin... C'est dangereux. Retourne en arrière tant que tu le peux.",
						"spanish": "No vayas más lejos... Es peligroso. Regresa mientras puedas.",
						"vietnamese": "Đừng đi nữa... Nguy hiểm đấy. Quay về khi còn có thể.",
						"thai": "อย่าไปไกลกว่านี้... มันอันตราย กลับไปเสียตอนนี้ที่ยังกลับได้",
						"hindi": "और आगे मत जाओ... खतरा है। जब तक वापस जा सकते हो, जाओ।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 숨기는 거야? 진실을 말해봐!",
						"english": "What are you hiding? Tell me the truth!",
						"japanese": "何を隠しているの？真実を話して！",
						"chinese": "你在隐瞒什么？告诉我真相！",
						"french": "Qu'est-ce que tu caches ? Dis-moi la vérité !",
						"spanish": "¿Qué estás escondiendo? ¡Dime la verdad!",
						"vietnamese": "Ngươi đang giấu cái gì? Nói cho ta biết sự thật đi!",
						"thai": "คุณกำลังซ่อนอะไรอยู่? บอกความจริงมา!",
						"hindi": "तुम क्या छिपा रहे हो? मुझे सच बताओ!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "진실을 알면… 너도 그들에게 사라질 거야. 나처럼.",
						"english": "If you know the truth… you will vanish like me.",
						"japanese": "「真実を知れば… お前も私のように消え去るだろう。」",
						"chinese": "如果你知道真相… 你也会像我一样消失。",
						"french": "Si tu connais la vérité… tu disparaîtras comme moi.",
						"spanish": "Si sabes la verdad… tú también desaparecerás como yo.",
						"vietnamese": "Nếu ngươi biết sự thật… ngươi cũng sẽ biến mất như ta.",
						"thai": "ถ้าเจ้ารู้ความจริง… เจ้าก็จะหายไปเหมือนข้า",
						"hindi": "अगर तुम्हें सच पता चला… तुम भी मेरी तरह गायब हो जाओगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우린 멈추지 않아. 두렵지 않아.",
						"english": "We won't stop. We're not afraid.",
						"japanese": "「我々は止まらない。恐れはしない。」",
						"chinese": "我们不会停止。我们无所畏惧。",
						"french": "Nous ne nous arrêterons pas. Nous n'avons pas peur.",
						"spanish": "No nos detendremos. No tenemos miedo.",
						"vietnamese": "Chúng ta sẽ không dừng lại. Chúng ta không sợ hãi.",
						"thai": "เราจะไม่หยุด เราไม่กลัว",
						"hindi": "हम रुकेंगे नहीं। हमें डर नहीं लगता।"
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이대로… 끝나지 않아… 어머니는… 모든 것을 아신다….",
						"english": "Ugh… This isn't… the end… The Mother knows… everything….",
						"japanese": "「ぐぅっ… このままでは… 終わらない… 母は… 全てを知っている…。」",
						"chinese": "呃… 这样… 不会结束… 母亲… 知晓一切….",
						"french": "Ugh… Ça ne finira… pas comme ça… La Mère… sait tout….",
						"spanish": "Ugh… Esto… no terminará… La Madre… lo sabe todo….",
						"vietnamese": "Ư… Chuyện này… chưa kết thúc đâu… Mẹ… biết mọi thứ….",
						"thai": "อึก… มันจะไม่… จบลงแบบนี้… แม่… รู้ทุกสิ่ง…",
						"hindi": "उफ़… यह ऐसे… ख़त्म नहीं होगा… माँ… सब जानती हैं…।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 누가 감시당하는지 똑똑히 봐. 당신의 통제는 끝났어.",
						"english": "Now see clearly who's being watched. Your control is over.",
						"japanese": "「さあ、誰が監視されているかよく見てみろ。お前の支配は終わった。」",
						"chinese": "现在看清楚谁在被监视。你的控制结束了。",
						"french": "Vois maintenant clairement qui est surveillé. Ton contrôle est terminé.",
						"spanish": "Ahora mira claramente quién está siendo vigilado. Tu control ha terminado.",
						"vietnamese": "Bây giờ hãy nhìn rõ ai đang bị giám sát. Sự kiểm soát của ngươi đã kết thúc.",
						"thai": "ตอนนี้ดูให้ชัดว่าใครกำลังถูกเฝ้าดู การควบคุมของคุณสิ้นสุดลงแล้ว",
						"hindi": "अब साफ-साफ देखो कौन निगरानी में है। तुम्हारा नियंत्रण खत्म हो गया है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 숲의 편집증적인 기운은 여전했다.",
						"english": "The colossal shadow fell, but the forest's paranoid aura lingered.",
						"japanese": "巨大な影は消え去ったが、森の偏執的な気配は依然として残っていた。",
						"chinese": "巨大的阴影消失了，但森林偏执的气息依然存在。",
						"french": "L'ombre colossale s'est dissipée, mais l'aura paranoïaque de la forêt persistait.",
						"spanish": "La sombra colosal cayó, pero el aura paranoica del bosque persistía.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ, nhưng không khí hoang tưởng của khu rừng vẫn còn vương vấn.",
						"thai": "เงามหึมาได้มลายหายไปแล้ว แต่บรรยากาศแห่งความหวาดระแวงของป่ายังคงอยู่",
						"hindi": "विशालकाय परछाई तो मिट गई, लेकिन जंगल का सनकीपन अब भी कायम था।"
					}
				},
				{
					"content": {
						"korean": "탐험대는 더 깊은 의문을 품고 숲의 심장부로 향했다.",
						"english": "The expedition, harboring deeper questions, pressed onward to the forest's heart.",
						"japanese": "探検隊は、より深い疑問を抱きながら森の心臓部へと向かった。",
						"chinese": "探险队带着更深的疑问，向森林的深处进发。",
						"french": "L'expédition, emplie de questions plus profondes, se dirigea vers le cœur de la forêt.",
						"spanish": "La expedición, albergando preguntas más profundas, se dirigió al corazón del bosque.",
						"vietnamese": "Đoàn thám hiểm, mang theo những câu hỏi sâu sắc hơn, tiếp tục tiến sâu vào trái tim khu rừng.",
						"thai": "คณะสำรวจได้มุ่งหน้าสู่ใจกลางป่า พร้อมกับความสงสัยที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "अन्वेषण दल, गहरे सवालों के साथ, जंगल के दिल की ओर बढ़ा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 덤불 뒤에서 나타났다. 정체 모를 자가 길을 막았다.",
						"english": "A massive shadow emerged from behind the bushes. An unknown blocked the path.",
						"japanese": "「巨大な影が茂みから現れた。正体不明の者が道を塞いだ。」",
						"chinese": "一个巨大的影子从灌木丛后出现。一个不明身份的人挡住了去路。",
						"french": "Une ombre immense surgit derrière les buissons. Un inconnu bloqua le chemin.",
						"spanish": "Una sombra inmensa surgió de detrás de los arbustos. Un desconocido bloqueó el camino.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ phía sau bụi cây. Một kẻ vô danh đã chặn đường.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพุ่มไม้ ผู้ไม่ประสงค์ออกนามขวางทาง",
						"hindi": "झाड़ियों के पीछे से एक विशाल छाया निकली। एक अज्ञात ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 어머니의 평화를 의심하는가?",
						"english": "How dare you… question the Mother's peace?",
						"japanese": "「よくも… 母の安寧を疑うか？」",
						"chinese": "你竟敢… 质疑母亲的平静？",
						"french": "Comment oses-tu… douter de la paix de la Mère ?",
						"spanish": "¿Cómo te atreves… a cuestionar la paz de la Madre?",
						"vietnamese": "Ngươi dám… nghi ngờ sự bình yên của Mẹ sao?",
						"thai": "เจ้ากล้าดียังไง… สงสัยความสงบของแม่?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… माँ की शांति पर सवाल उठाने की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 감시하는 거지! 막을 수 없어!",
						"english": "You're watching us! You can't stop us!",
						"japanese": "「あなたが監視しているんだ！止められない！」",
						"chinese": "你正在监视我们！你无法阻止我们！",
						"french": "C'est toi qui nous observes ! Tu ne peux pas nous arrêter !",
						"spanish": "¡Tú nos estás vigilando! ¡No puedes detenernos!",
						"vietnamese": "Ngươi đang giám sát chúng ta! Ngươi không thể ngăn cản!",
						"thai": "คุณกำลังเฝ้ามองเราอยู่! คุณหยุดเราไม่ได้!",
						"hindi": "तुम हमें देख रहे हो! तुम हमें रोक नहीं सकते!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "분수를 알아라. 숲의 규칙을 어긴 벌을 받아야지.",
						"english": "Know your place. You must be punished for breaking the forest's rules.",
						"japanese": "「身の程を知れ。森の掟を破った罰を受けるがよい。」",
						"chinese": "认清你的位置。你必须为违反森林的规则而受到惩罚。",
						"french": "Connais ta place. Tu dois être puni pour avoir enfreint les règles de la forêt.",
						"spanish": "Conoce tu lugar. Debes ser castigado por romper las reglas del bosque.",
						"vietnamese": "Hãy biết thân biết phận. Ngươi phải bị trừng phạt vì đã phá vỡ luật rừng.",
						"thai": "รู้จักสถานะของเจ้าซะ เจ้าต้องถูกลงโทษที่ฝ่าฝืนกฎของป่า",
						"hindi": "अपनी जगह जानो। तुम्हें जंगल के नियम तोड़ने के लिए दंडित किया जाना चाहिए।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "저게… 어머니의 대리인이야. 덤불의 수호자…",
						"english": "That's… the Mother's emissary. The Guardian of the Thicket…",
						"japanese": "「あれは… 母の代理人だ。茂みの守護者…」",
						"chinese": "那是… 母亲的使者。灌木丛的守护者…",
						"french": "C'est… l'émissaire de la Mère. Le Gardien du fourré…",
						"spanish": "Ese es… el emisario de la Madre. El Guardián de la Maleza…",
						"vietnamese": "Đó là… đại diện của Mẹ. Người bảo vệ Bụi rậm…",
						"thai": "นั่นคือ… ผู้ส่งสารของแม่ ผู้พิทักษ์พุ่มไม้…",
						"hindi": "वह… माँ का दूत है। झाड़ियों का संरक्षक…"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "입 다물어라, 브라켄! 쓸데없는 소리는.",
						"english": "Silence, Braken! No more useless talk.",
						"japanese": "「黙れ、ブラッケン！無駄口を叩くな。」",
						"chinese": "闭嘴，布莱肯！别说废话了。",
						"french": "Tais-toi, Braken ! Pas de bavardages inutiles.",
						"spanish": "¡Cállate, Braken! Nada de tonterías.",
						"vietnamese": "Im đi, Braken! Đừng nói những lời vô ích nữa.",
						"thai": "หุบปากซะ, แบรคเคน! อย่าพูดไร้สาระ",
						"hindi": "चुप रहो, ब्रेकेन! कोई बेकार की बात नहीं।"
					}
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 감히 어머니를 거역하다니. 그 죄는 무겁다.",
						"english": "Insignificant worms... How dare you defy Mother. Your sin is grave.",
						"japanese": "くだらない者たちめ… よくも母に逆らったな。その罪は重いぞ。",
						"chinese": "微不足道的蝼蚁……竟敢违抗母亲。汝罪当诛。",
						"french": "Vermines insignifiantes… Comment osez-vous défier Mère. Votre péché est grave.",
						"spanish": "Gusanos insignificantes... ¿Cómo osáis desafiar a la Madre? Vuestro pecado es grave.",
						"vietnamese": "Những thứ hèn mọn... Sao dám chống lại Mẹ. Tội lỗi của ngươi thật nặng nề.",
						"thai": "พวกไร้ค่า… กล้าดียังไงมาขัดขืนมารดา โทษของพวกเจ้าหนักนัก",
						"hindi": "तुच्छ जीव… मां का अनादर करने की हिम्मत कैसे हुई। तुम्हारा पाप गंभीर है।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 돌아올 거야.",
						"english": "...It's not over yet. I will return.",
						"japanese": "…まだ終わっていない。また戻ってくるぞ。",
						"chinese": "……还没结束。我会再回来。",
						"french": "...Ce n'est pas encore fini. Je reviendrai.",
						"spanish": "...Aún no ha terminado. Regresaré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ quay lại.",
						"thai": "…ยังไม่จบแค่นี้หรอก ข้าจะกลับมาอีกครั้ง",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं वापस आऊँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 도전은 언제나 환영이다. 언제든 와라.",
						"english": "Foolish ones... Challenges are always welcome. Come anytime.",
						"japanese": "愚かな… 挑戦はいつでも歓迎だ。いつでも来い。",
						"chinese": "愚蠢的……挑战随时欢迎。想来就来。",
						"french": "Imbéciles... Les défis sont toujours les bienvenus. Venez quand vous voulez.",
						"spanish": "Necios... Los desafíos son siempre bienvenidos. Venid cuando queráis.",
						"vietnamese": "Đồ ngốc nghếch... Thử thách luôn được chào đón. Cứ đến bất cứ lúc nào.",
						"thai": "พวกโง่เขลา… ความท้าทายต้อนรับเสมอ มาได้ทุกเมื่อ",
						"hindi": "मूर्खों… चुनौतियाँ हमेशा स्वागतयोग्य हैं। कभी भी आओ।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 깊어질수록 낯선 침묵에 잠겼다.",
			"평화로운 척하는 그림자.",
			"누구도 감히 숲의 '어머니'를 의심하지 않았다.",
			"그러나 덤불 속의 속삭임은 다른 이야기를 했다.",
			"진실은 언제나 불편한 법."
		],
		"english": [
			"The deeper the forest, the stranger the silence.",
			"Shadows feigning peace.",
			"None dared to question the forest's 'Mother'.",
			"But whispers in the thicket told a different tale.",
			"Truth is always inconvenient."
		],
		"japanese": [
			"森が深まるほど、見知らぬ沈黙に包まれた。",
			"平和を装う影。",
			"誰も森の「母」を疑うことはなかった。",
			"しかし、茂みの中のささやきは別の物語を語った。",
			"真実は常に不都合なものだ。"
		],
		"chinese": [
			"森林越深，越是陷入陌生的寂静。",
			"假装平静的影子。",
			"无人敢质疑森林的“母亲”。",
			"然而，灌木丛中的耳语讲述了不同的故事。",
			"真相总是令人不适。"
		],
		"french": [
			"Plus la forêt s'enfonçait, plus le silence devenait étrange.",
			"Des ombres feignant la paix.",
			"Nul n'osait remettre en question la 'Mère' de la forêt.",
			"Pourtant, des murmures dans le fourré racontaient une autre histoire.",
			"La vérité est toujours dérangeante."
		],
		"spanish": [
			"Cuanto más profundo el bosque, más extraño el silencio.",
			"Sombras que fingen paz.",
			"Nadie se atrevía a dudar de la 'Madre' del bosque.",
			"Pero los susurros en la maleza contaban otra historia.",
			"La verdad siempre es incómoda."
		],
		"vietnamese": [
			"Càng vào sâu trong rừng, sự im lặng càng lạ lùng.",
			"Những cái bóng giả vờ bình yên.",
			"Không ai dám nghi ngờ 'Mẹ' của khu rừng.",
			"Tuy nhiên, những lời thì thầm trong bụi rậm lại kể một câu chuyện khác.",
			"Sự thật thì luôn khó chịu."
		],
		"thai": [
			"ยิ่งป่าลึกเท่าไร ความเงียบงันก็ยิ่งแปลกประหลาดขึ้นเท่านั้น",
			"เงาที่แสร้งทำเป็นสงบ",
			"ไม่มีใครกล้าสงสัย 'แม่' ของป่า",
			"แต่เสียงกระซิบในพุ่มไม้บอกเล่าเรื่องราวที่ต่างออกไป",
			"ความจริงมักไม่สะดวกเสมอ"
		],
		"hindi": [
			"जैसे-जैसे जंगल गहरा होता गया, एक अजीब खामोशी छा गई।",
			"शांति का ढोंग करती परछाइयाँ।",
			"किसी ने जंगल की 'माँ' पर सवाल उठाने की हिम्मत नहीं की।",
			"लेकिन झाड़ियों में फुसफुसाहट ने एक अलग कहानी सुनाई।",
			"सच हमेशा असुविधाजनक होता है।"
		]
	}
} as const;
