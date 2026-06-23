export const scenario_forest_mutteringbloom_39_05 = {
	"scenario_id": "forest_mutteringbloom_39_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_WildGrowth_MutteringBloom_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 생명력이 뒤틀려 춤추는 공간.",
						"english": "The deepest part of the forest. A space where life force twists and dances.",
						"japanese": "森の最も深い場所。生命力がねじれて踊る空間。",
						"chinese": "森林最深处。生命力扭曲舞动之地。",
						"french": "La partie la plus profonde de la forêt. Un espace où la force vitale se tord et danse.",
						"spanish": "La parte más profunda del bosque. Un espacio donde la fuerza vital se retuerce y baila.",
						"vietnamese": "Nơi sâu nhất của rừng. Một không gian nơi sinh lực xoắn vặn và nhảy múa.",
						"thai": "ส่วนที่ลึกที่สุดของป่า พื้นที่ที่พลังชีวิตบิดเบี้ยวและเต้นรำ.",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक ऐसी जगह जहाँ जीवन शक्ति मुड़ती और नाचती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "여기가… 숲의 심장이라 불리던 곳이군.",
						"english": "This is... the place called the heart of the forest, then.",
						"japanese": "ここが…森の心臓と呼ばれた場所か。",
						"chinese": "这里就是……被称为森林心脏的地方啊。",
						"french": "C'est ici... l'endroit appelé le cœur de la forêt.",
						"spanish": "Este es... el lugar llamado el corazón del bosque.",
						"vietnamese": "Đây là... nơi được gọi là trái tim của rừng.",
						"thai": "ที่นี่คือ... สถานที่ที่ถูกเรียกว่าหัวใจของป่าสินะ.",
						"hindi": "यह है... वह जगह जिसे जंगल का दिल कहा जाता था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "심장이라기엔 너무 기괴해.",
						"english": "Too grotesque to be a heart.",
						"japanese": "心にしてはあまりに異様だ。",
						"chinese": "作为心脏，它太怪异了。",
						"french": "Trop grotesque pour être un cœur.",
						"spanish": "Demasiado grotesco para ser un corazón.",
						"vietnamese": "Quá kỳ dị để là một trái tim.",
						"thai": "ประหลาดเกินกว่าจะเป็นหัวใจ",
						"hindi": "यह दिल कहने के लिए बहुत विकृत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "아름다운 소문 뒤엔… 언제나 감춰진 진실이 있지.",
						"english": "Behind beautiful rumors... there's always a hidden truth.",
						"japanese": "美しい噂の裏には… いつも隠された真実がある。",
						"chinese": "美丽的传闻背后……总有隐藏的真相。",
						"french": "Derrière les belles rumeurs… il y a toujours une vérité cachée.",
						"spanish": "Detrás de los hermosos rumores… siempre hay una verdad oculta.",
						"vietnamese": "Đằng sau những tin đồn đẹp đẽ... luôn có một sự thật được che giấu.",
						"thai": "เบื้องหลังข่าวลือที่สวยงาม... มักมีความจริงที่ซ่อนอยู่เสมอ",
						"hindi": "ख़ूबसूरत अफ़वाहों के पीछे... हमेशा एक छिपा हुआ सच होता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲은… 모든 것을 동화시켜. 모든 것을.",
						"english": "This forest... assimilates everything. Everything.",
						"japanese": "この森は… 全てを同化させる。全てを。",
						"chinese": "这片森林……同化一切。一切。",
						"french": "Cette forêt… assimile tout. Tout.",
						"spanish": "Este bosque… asimila todo. Todo.",
						"vietnamese": "Khu rừng này... đồng hóa mọi thứ. Mọi thứ.",
						"thai": "ป่าแห่งนี้... กลืนกินทุกสิ่ง ทุกสิ่ง",
						"hindi": "यह जंगल… सब कुछ आत्मसात करता है। सब कुछ।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점… 소리가 선명해지는군.",
						"english": "The sound... is getting clearer.",
						"japanese": "だんだん… 音が鮮明になる。",
						"chinese": "声音……越来越清晰了。",
						"french": "Le son… devient de plus en plus clair.",
						"spanish": "El sonido… se vuelve más claro.",
						"vietnamese": "Âm thanh... dần trở nên rõ ràng hơn.",
						"thai": "เสียง... ชัดเจนขึ้นเรื่อยๆ",
						"hindi": "आवाज़... धीरे-धीरे साफ़ होती जा रही है।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리?",
						"english": "What sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Quel son ?",
						"spanish": "¿Qué sonido?",
						"vietnamese": "Tiếng gì?",
						"thai": "เสียงอะไร?",
						"hindi": "कैसी आवाज़?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사라진 이들의 웃음소리… 숲에 갇힌 채, 영원히….",
						"english": "The laughter of the lost ones... trapped in the forest, forever...",
						"japanese": "消え去った者たちの笑い声… 森に囚われ、永遠に…。",
						"chinese": "消失之人的笑声……被困在森林里，直到永远……",
						"french": "Le rire des disparus… piégés dans la forêt, pour toujours…",
						"spanish": "La risa de los desaparecidos… atrapados en el bosque, para siempre…",
						"vietnamese": "Tiếng cười của những người đã mất... bị mắc kẹt trong rừng, mãi mãi...",
						"thai": "เสียงหัวเราะของผู้หายสาบสูญ... ถูกขังอยู่ในป่า ชั่วนิรันดร์...",
						"hindi": "लापता लोगों की हँसी... जंगल में फँसी हुई, हमेशा के लिए..."
					},
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 정말 실존하는 얘기였어?",
						"english": "So, that story was real?",
						"japanese": "それが本当に実在する話だったのか？",
						"chinese": "那真的是一个真实存在的故事吗？",
						"french": "Alors, cette histoire était vraiment réelle ?",
						"spanish": "¿Esa historia era realmente cierta?",
						"vietnamese": "Chuyện đó là thật sao?",
						"thai": "เรื่องนั้นเป็นเรื่องจริงหรือนี่?",
						"hindi": "क्या वह कहानी सच में मौजूद थी?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲에선, 모든 것이 현실이 돼.",
						"english": "In this forest, everything becomes reality.",
						"japanese": "この森では、全てが現実になる。",
						"chinese": "在这片森林里，一切都会变成现实。",
						"french": "Dans cette forêt, tout devient réalité.",
						"spanish": "En este bosque, todo se vuelve realidad.",
						"vietnamese": "Trong khu rừng này, mọi thứ đều trở thành hiện thực.",
						"thai": "ในป่าแห่งนี้ ทุกสิ่งกลายเป็นความจริง",
						"hindi": "इस जंगल में, सब कुछ हकीकत बन जाता है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저것 봐… 저 조각상.",
						"english": "Look at that... that statue.",
						"japanese": "あれを見て… あの彫像。",
						"chinese": "看那个……那个雕像。",
						"french": "Regarde ça… cette statue.",
						"spanish": "Mira eso… esa estatua.",
						"vietnamese": "Nhìn kìa... bức tượng đó.",
						"thai": "ดูนั่นสิ... รูปปั้นนั่น",
						"hindi": "वह देखो… वह मूर्ति।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "오래된 나무에 새겨진, 춤추는 듯한 인간 형상이 뿌리에 휘감겨 있었다.",
						"english": "A dancing human figure, carved into an old tree, was entwined by its roots.",
						"japanese": "古い木に刻まれた、踊るような人型の像が根に絡まっていた。",
						"chinese": "一个舞动的人形雕像刻在古老的树上，被树根缠绕着。",
						"french": "Une silhouette humaine dansante, sculptée dans un vieil arbre, était enlacée par ses racines.",
						"spanish": "Una figura humana danzante, tallada en un árbol viejo, estaba entrelazada por sus raíces.",
						"vietnamese": "Một hình người nhảy múa, được chạm khắc vào thân cây cổ thụ, bị rễ cây quấn quanh.",
						"thai": "รูปปั้นมนุษย์กำลังเต้นรำที่แกะสลักอยู่บนต้นไม้เก่าแก่ ถูกรากไม้พันเกี่ยวไว้",
						"hindi": "एक पुराने पेड़ पर उकेरी गई नाचती हुई मानव आकृति जड़ों से घिरी हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사람이… 나무가 된 것 같아.",
						"english": "It looks like someone… became a tree.",
						"japanese": "人が…木になったみたいだ。",
						"chinese": "好像有人…变成了树。",
						"french": "On dirait que quelqu'un… est devenu un arbre.",
						"spanish": "Parece que alguien… se convirtió en un árbol.",
						"vietnamese": "Có vẻ như có người… đã hóa thành cây.",
						"thai": "ดูเหมือนมีคน… กลายเป็นต้นไม้ไปแล้ว",
						"hindi": "लगता है कोई… पेड़ बन गया है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "숲의 일부가 되는 것… 아름답다고 여겼을까? 그녀는.",
						"english": "Becoming part of the forest… Did she consider it beautiful?",
						"japanese": "森の一部になること… 彼女はそれを美しいと思ったのだろうか？",
						"chinese": "成为森林的一部分… 她会觉得这很美吗？",
						"french": "Devenir une partie de la forêt… L'aurait-elle trouvé beau ? Elle.",
						"spanish": "Ser parte del bosque… ¿Lo habrá considerado hermoso? Ella.",
						"vietnamese": "Trở thành một phần của rừng… Liệu cô ấy có xem đó là điều đẹp đẽ không?",
						"thai": "การเป็นส่วนหนึ่งของป่า… เธอคงคิดว่ามันสวยงามกระมัง?",
						"hindi": "जंगल का हिस्सा बनना… क्या उसने इसे सुंदर माना होगा? वह।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그녀라니?",
						"english": "Her? Who is 'her'?",
						"japanese": "彼女って？",
						"chinese": "她？",
						"french": "Elle ? Qui ça ?",
						"spanish": "¿Ella?",
						"vietnamese": "Cô ấy á?",
						"thai": "เธอไหน?",
						"hindi": "वह कौन?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "이 숲의… 진짜 주인.",
						"english": "The true owner… of this forest.",
						"japanese": "この森の…本当の持ち主。",
						"chinese": "这片森林的…真正主人。",
						"french": "La véritable propriétaire… de cette forêt.",
						"spanish": "La verdadera dueña… de este bosque.",
						"vietnamese": "Chủ nhân thật sự… của khu rừng này.",
						"thai": "เจ้าของที่แท้จริง… ของป่าแห่งนี้",
						"hindi": "इस जंगल की… असली मालकिन।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "이 지팡이… 잃어버린 주술용 지팡이야.",
						"english": "This staff… It's a lost sorcerer's staff.",
						"japanese": "この杖…失われた呪術の杖だ。",
						"chinese": "这根法杖…是失落的巫术法杖。",
						"french": "Ce bâton… C'est un bâton de sorcier perdu.",
						"spanish": "Este bastón… Es un bastón de hechicero perdido.",
						"vietnamese": "Cây gậy này… Là cây gậy ma thuật đã mất.",
						"thai": "ไม้เท้านี่… เป็นไม้เท้าเวทมนตร์ที่หายไป",
						"hindi": "यह छड़ी… एक खोई हुई जादूगर की छड़ी है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흙에 반쯤 파묻힌 채 덩굴에 휘감긴 지팡이. 익숙한 문양이 새겨져 있다.",
						"english": "A staff half-buried in the soil, entwined with vines. An familiar pattern is carved into it.",
						"japanese": "土に半分埋もれ、蔓に絡まった杖。見慣れた文様が刻まれている。",
						"chinese": "一根法杖半埋在泥土中，被藤蔓缠绕着。上面刻有熟悉的图案。",
						"french": "Un bâton à moitié enfoui dans la terre, entrelacé de vignes. Un motif familier y est gravé.",
						"spanish": "Un bastón medio enterrado en la tierra, entrelazado con enredaderas. Tiene un patrón familiar grabado.",
						"vietnamese": "Một cây gậy nửa chôn vùi trong đất, bị dây leo quấn quanh. Một hoa văn quen thuộc được khắc trên đó.",
						"thai": "ไม้เท้าที่ถูกดินกลบครึ่งหนึ่งและมีเถาวัลย์พันเกี่ยว มีลวดลายคุ้นตาแกะสลักอยู่",
						"hindi": "एक छड़ी मिट्टी में आधी दबी हुई, बेलों से लिपटी हुई। उस पर एक परिचित पैटर्न उकेरा गया है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구의 것이지?",
						"english": "Whose is it?",
						"japanese": "誰の物だ？",
						"chinese": "这是谁的？",
						"french": "À qui est-ce ?",
						"spanish": "¿De quién es?",
						"vietnamese": "Của ai vậy?",
						"thai": "ของใครกัน?",
						"hindi": "यह किसका है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲의 영혼과 합일하려 했던… 위대한 주술사의 것이라 들었어.",
						"english": "I heard it belonged to a great sorcerer… who tried to unite with the forest's spirit.",
						"japanese": "森の魂と合一しようとした…偉大な呪術師の物だと聞いた。",
						"chinese": "我听说它属于一位伟大的巫师…他曾试图与森林之灵合一。",
						"french": "J'ai entendu dire qu'il appartenait à un grand sorcier… qui a tenté de s'unir à l'esprit de la forêt.",
						"spanish": "Oí que pertenecía a un gran hechicero… que intentó unirse con el espíritu del bosque.",
						"vietnamese": "Tôi nghe nói nó thuộc về một pháp sư vĩ đại… người đã cố gắng hợp nhất với linh hồn của rừng.",
						"thai": "ฉันได้ยินมาว่าเป็นของนักเวทผู้ยิ่งใหญ่… ที่พยายามรวมเป็นหนึ่งเดียวกับวิญญาณแห่งป่า",
						"hindi": "मैंने सुना है कि यह एक महान जादूगर का था… जिसने जंगल की आत्मा के साथ एकाकार होने की कोशिश की थी।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "합일? 그게 어떻게 됐는데?",
						"english": "Unite? What happened with that?",
						"japanese": "合一？それでどうなったの？",
						"chinese": "合一？结果怎么样了？",
						"french": "S'unir ? Qu'est-il arrivé ?",
						"spanish": "¿Unirse? ¿Qué pasó con eso?",
						"vietnamese": "Hợp nhất? Chuyện đó thế nào rồi?",
						"thai": "รวมเป็นหนึ่ง? แล้วมันเกิดอะไรขึ้นล่ะ?",
						"hindi": "एकाकार? फिर क्या हुआ?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "그녀는 숲이 되었어… 광기와 함께.",
						"english": "She became the forest... with madness.",
						"japanese": "彼女は森になった…狂気と共に。",
						"chinese": "她变成了森林……伴随着疯狂。",
						"french": "Elle est devenue la forêt... avec la folie.",
						"spanish": "Ella se convirtió en el bosque... con la locura.",
						"vietnamese": "Cô ấy đã hóa thành khu rừng... cùng với sự điên loạn.",
						"thai": "เธอกลายเป็นป่าไปแล้ว... พร้อมกับความบ้าคลั่ง",
						"hindi": "वह जंगल बन गई...पागलपन के साथ।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 발버둥이구나.",
						"english": "Such a foolish... struggle.",
						"japanese": "愚かな… もがきだな。",
						"chinese": "真是愚蠢的… 挣扎啊。",
						"french": "Quelle vaine... lutte.",
						"spanish": "Qué estúpida... lucha.",
						"vietnamese": "Thật là một sự... vùng vẫy ngu ngốc.",
						"thai": "ช่างเป็น... การดิ้นรนที่โง่เขลา",
						"hindi": "कितना मूर्खतापूर्ण... संघर्ष है।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "모든 것은… 나의 일부가 될 운명인데…",
						"english": "Everything... is destined to become a part of me...",
						"japanese": "全ては… 私の一部となる運命なのに…",
						"chinese": "一切… 都注定要成为我的一部分…",
						"french": "Tout... est destiné à faire partie de moi...",
						"spanish": "Todo... está destinado a ser parte de mí...",
						"vietnamese": "Tất cả mọi thứ... đều định mệnh trở thành một phần của ta...",
						"thai": "ทุกสิ่ง... ล้วนมีโชคชะตาที่จะเป็นส่วนหนึ่งของข้า...",
						"hindi": "सब कुछ... मेरा हिस्सा बनने के लिए नियत है..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "포기하지 마! 아직… 희망은 있어!",
						"english": "Don't give up! There's still... hope!",
						"japanese": "諦めるな！まだ… 希望はある！",
						"chinese": "别放弃！还有… 希望！",
						"french": "N'abandonne pas ! Il y a encore... de l'espoir !",
						"spanish": "¡No te rindas! ¡Todavía... hay esperanza!",
						"vietnamese": "Đừng bỏ cuộc! Vẫn còn... hy vọng!",
						"thai": "อย่ายอมแพ้! ยังมี... ความหวัง!",
						"hindi": "हार मत मानो! अभी भी... उम्मीद है!"
					},
					"speaker": "bracken"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부. 거대한 생명력이 뒤틀린 채 맥동했다. 광기의 혼잣말이 멈추고, 존재가 탐험대를 응시했다.",
						"english": "The heart of the forest. A colossal life force pulsed, twisted. The whispers of madness ceased, and a presence stared at the expedition.",
						"japanese": "森の心臓部。巨大な生命力がねじれながら脈動した。狂気の独り言は止み、何者かが探検隊を見つめた。",
						"chinese": "森林的深处。一股巨大的生命力扭曲着脉动。疯狂的低语停止了，一个存在凝视着探险队。",
						"french": "Le cœur de la forêt. Une force vitale colossale pulsait, tordue. Les murmures de la folie cessèrent, et une présence fixa l'expédition.",
						"spanish": "El corazón del bosque. Una fuerza vital colosal pulsaba, retorcida. Los susurros de la locura cesaron, y una presencia contempló a la expedición.",
						"vietnamese": "Trái tim của khu rừng. Một sinh lực khổng lồ cuộn xoắn và rung động. Lời thì thầm của sự điên loạn dừng lại, và một thực thể nhìn chằm chằm vào đoàn thám hiểm.",
						"thai": "ใจกลางป่า พลังชีวิตมหาศาลบิดเบี้ยวและเต้นเป็นจังหวะ เสียงกระซิบแห่งความบ้าคลั่งหยุดลง และบางสิ่งจ้องมองทีมสำรวจ",
						"hindi": "जंगल का हृदय। एक विशाल जीवन शक्ति मुड़ती हुई धड़क रही थी। पागलपन की फुसफुसाहट रुक गई, और एक उपस्थिति ने अभियान दल को घूर कर देखा।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔구나… 나의 작은 씨앗들아.",
						"english": "You've come... my little seeds.",
						"japanese": "来たね…私の小さな種たちよ。",
						"chinese": "你们来了……我的小种子们。",
						"french": "Vous êtes venus... mes petites graines.",
						"spanish": "Han venido... mis pequeñas semillas.",
						"vietnamese": "Các ngươi đã đến... những hạt giống nhỏ của ta.",
						"thai": "มากันแล้วสินะ... เมล็ดพันธุ์น้อยๆ ของข้า",
						"hindi": "तुम आ गए... मेरे नन्हे बीज।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 와, 내 품으로… 모두 하나가 될 시간이야.",
						"english": "Come, into my embrace... It's time for us all to become one.",
						"japanese": "さあ、私の胸へ…皆、一つになる時だ。",
						"chinese": "快来，到我怀里……是时候让大家合二为一了。",
						"french": "Venez, dans mon étreinte... Il est temps que nous ne fassions qu'un.",
						"spanish": "Venid, a mi abrazo... Es hora de que todos seamos uno.",
						"vietnamese": "Đến đây, vào lòng ta... Đã đến lúc tất cả chúng ta hòa làm một.",
						"thai": "เข้ามาสิ สู่อ้อมกอดของข้า... ได้เวลาที่เราทุกคนจะเป็นหนึ่งเดียวกันแล้ว",
						"hindi": "आओ, मेरी गोद में... अब हम सबको एक होने का समय है।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 숲의 정령? 왜 이런 짓을!",
						"english": "You... the forest spirit? Why are you doing this?!",
						"japanese": "あなたが…森の精霊？なぜこんなことを！",
						"chinese": "你是……森林的精灵？为什么要这么做？！",
						"french": "Toi... l'esprit de la forêt ? Pourquoi fais-tu ça ?!",
						"spanish": "¿Tú... el espíritu del bosque? ¡¿Por qué haces esto?!",
						"vietnamese": "Ngươi... là tinh linh của khu rừng? Tại sao lại làm chuyện này!",
						"thai": "เจ้า... วิญญาณแห่งป่าหรือ? ทำไมถึงทำแบบนี้!",
						"hindi": "तुम... जंगल की आत्मा? ऐसा क्यों कर रहे हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 아름다움을 거부하는 어리석음이라니. 영원히… 영원히 나와 함께해야 해!",
						"english": "Such foolishness to reject this beauty. Forever... you must be with me forever!",
						"japanese": "この美しさを拒む愚かさよ。永遠に…永遠に私と共にいなければならない！",
						"chinese": "拒绝这份美丽真是愚蠢。永远……永远都必须与我同在！",
						"french": "Quelle folie de rejeter cette beauté. Pour toujours... vous devez être avec moi pour toujours !",
						"spanish": "Qué estupidez rechazar esta belleza. ¡Por siempre... debes estar conmigo por siempre!",
						"vietnamese": "Thật ngu xuẩn khi từ chối vẻ đẹp này. Mãi mãi... các ngươi phải ở bên ta mãi mãi!",
						"thai": "ช่างโง่เขลาที่ปฏิเสธความงามนี้! ตลอดไป... เจ้าต้องอยู่กับข้าตลอดไป!",
						"hindi": "इस सुंदरता को ठुकराना कितनी मूर्खता है। हमेशा... तुम्हें हमेशा मेरे साथ रहना होगा!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그녀는… 주술사였어. 숲의 영혼을 이해하려 했던…",
						"english": "She was... a shaman. One who tried to understand the forest's soul...",
						"japanese": "彼女は…呪術師だった。森の魂を理解しようとした…",
						"chinese": "她是……一个萨满。试图理解森林灵魂的……",
						"french": "Elle était... une chamane. Une qui tentait de comprendre l'âme de la forêt...",
						"spanish": "Ella era... una chamana. Una que intentó comprender el alma del bosque...",
						"vietnamese": "Cô ấy là... một pháp sư. Người đã cố gắng thấu hiểu linh hồn của khu rừng...",
						"thai": "เธอคือ... หมอผี ผู้พยายามเข้าใจวิญญาณแห่งป่า...",
						"hindi": "वह... एक शमन थी। जिसने जंगल की आत्मा को समझने की कोशिश की थी..."
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "브라켄… 나의 오래된 친구. 너도 숲이 되어야 해. 내가 '선물'로 준 목걸이가 너를 이끌었듯이!",
						"english": "Braken... my old friend. You, too, must become the forest. Just as the necklace I 'gifted' you led you here!",
						"japanese": "ブラッケン…私の旧友よ。お前も森にならねばならない。私が『贈り物』として与えた首飾りが、お前を導いたように！",
						"chinese": "布拉肯……我的老朋友。你也必须成为森林。就像我“赠予”你的项链引导你来此一样！",
						"french": "Braken... mon vieil ami. Toi aussi, tu dois devenir la forêt. Tout comme le collier que je t'ai \"offert\" t'a guidé ici !",
						"spanish": "Braken... mi viejo amigo. Tú también debes convertirte en el bosque. ¡Tal como el collar que te \"regalé\" te trajo aquí!",
						"vietnamese": "Braken... người bạn cũ của ta. Ngươi cũng phải trở thành khu rừng. Giống như chiếc vòng cổ mà ta đã 'tặng' ngươi đã dẫn lối cho ngươi!",
						"thai": "แบร็คเคน... สหายเก่าของข้า เจ้าก็ต้องกลายเป็นป่าเช่นกัน เหมือนสร้อยคอที่ข้า 'มอบให้' ได้นำพาเจ้ามาที่นี่!",
						"hindi": "ब्रेकन... मेरे पुराने दोस्त। तुम्हें भी जंगल बनना होगा। ठीक वैसे ही जैसे मेरे 'उपहार' में दिए गए हार ने तुम्हें यहां खींच लाया!"
					},
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "선물이라니… 이건 저주야!",
						"english": "A gift...?! This is a curse!",
						"japanese": "贈り物だと…？！これは呪いだ！",
						"chinese": "礼物？！这是诅咒！",
						"french": "Un cadeau...?! C'est une malédiction !",
						"spanish": "¿¡Un regalo...!? ¡Esto es una maldición!",
						"vietnamese": "Quà tặng...?! Đây là một lời nguyền!",
						"thai": "ของขวัญอย่างนั้นหรือ...? นี่มันคำสาป!",
						"hindi": "उपहार...?! यह एक अभिशाप है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이해하지 못하는구나. 내가… 숲이니까!",
						"english": "You don't understand. Because I... am the forest!",
						"japanese": "理解できないのね。私が…森だからよ！",
						"chinese": "你不明白。因为我……就是森林！",
						"french": "Tu ne comprends pas. Parce que je... suis la forêt !",
						"spanish": "No lo entiendes. ¡Porque yo... soy el bosque!",
						"vietnamese": "Ngươi không hiểu đâu. Bởi vì ta... chính là khu rừng!",
						"thai": "เจ้าไม่เข้าใจสินะ เพราะข้า... คือป่า!",
						"hindi": "तुम समझते नहीं हो। क्योंकि मैं... जंगल हूँ!"
					},
					"speaker": "boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "아아… 아름다운… 파괴로다…",
						"english": "Ah... such beautiful... destruction...",
						"japanese": "ああ… 美しい… 破壊だ…",
						"chinese": "啊… 美丽的… 毁灭啊…",
						"french": "Ah... quelle belle... destruction...",
						"spanish": "Ah... qué hermosa... destrucción...",
						"vietnamese": "Ôi... thật đẹp... sự hủy diệt...",
						"thai": "อา... ช่างงดงาม... การทำลายล้าง...",
						"hindi": "आह... कितना सुंदर... विनाश..."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "'숲의 정령'이라 불리던 주술사의 육신이 서서히 숲으로 스며들었다.",
						"english": "The shaman's body, once called 'Spirit of the Forest,' slowly melded into the woods.",
						"japanese": "「森の精霊」と呼ばれた呪術師の肉体が、ゆっくりと森へと溶け込んでいった。",
						"chinese": "曾被称为“森林精灵”的巫师的肉身，渐渐融入了森林。",
						"french": "Le corps du chaman, jadis appelé 'Esprit de la Forêt', s'est lentement fondu dans les bois.",
						"spanish": "El cuerpo de la chamana, alguna vez llamada 'Espíritu del Bosque', se fundió lentamente con el bosque.",
						"vietnamese": "Thân xác của pháp sư, kẻ từng được gọi là 'Linh hồn của Rừng', dần dần hòa vào rừng sâu.",
						"thai": "ร่างของหมอผีที่เคยถูกเรียกว่า 'จิตวิญญาณแห่งป่า' ค่อยๆ ซึมซาบเข้าสู่ป่า",
						"hindi": "जादूगरनी का शरीर, जिसे कभी 'वन की आत्मा' कहा जाता था, धीरे-धीरे जंगल में समा गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "결국… 이렇게 끝나버리는구나.",
						"english": "So... this is how it ends, after all.",
						"japanese": "結局… こうして終わってしまうのか。",
						"chinese": "最终… 还是这样结束了啊。",
						"french": "Alors... c'est ainsi que ça se termine, après tout.",
						"spanish": "Así que... así es como termina, después de todo.",
						"vietnamese": "Cuối cùng... mọi chuyện lại kết thúc như thế này sao.",
						"thai": "สุดท้าย... ก็ต้องจบลงแบบนี้สินะ",
						"hindi": "तो... अंततः ऐसे ही खत्म होता है।"
					}
				},
				{
					"content": {
						"korean": "그녀도… 피해자였던 걸까?",
						"english": "Was she... a victim too?",
						"japanese": "彼女も… 被害者だったのだろうか？",
						"chinese": "她也… 是受害者吗？",
						"french": "Était-elle... aussi une victime ?",
						"spanish": "¿Ella también... era una víctima?",
						"vietnamese": "Phải chăng... cô ấy cũng là một nạn nhân?",
						"thai": "เธอเองก็... เป็นเหยื่อด้วยงั้นหรือ?",
						"hindi": "क्या वह भी... एक शिकार थी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲은 오랫동안 잃었던 침묵을 되찾았다. 그러나 숲은 여전히 살아 숨 쉬었다.",
						"english": "The forest regained the silence it had long lost. Yet, the forest still breathed.",
						"japanese": "森は長い間失っていた沈黙を取り戻した。しかし、森はまだ生きて呼吸していた。",
						"chinese": "森林重新找回了久违的宁静。然而，森林依然生机勃勃。",
						"french": "La forêt retrouva le silence qu'elle avait perdu depuis longtemps. Pourtant, la forêt respirait encore.",
						"spanish": "El bosque recuperó el silencio que había perdido hacía mucho tiempo. Sin embargo, el bosque seguía respirando.",
						"vietnamese": "Khu rừng lấy lại sự tĩnh lặng đã mất từ lâu. Thế nhưng, khu rừng vẫn còn sống và thở.",
						"thai": "ป่ากลับมาเงียบสงบอีกครั้งหลังจากที่หายไปนาน แต่กระนั้น ป่าก็ยังคงมีชีวิตและหายใจ",
						"hindi": "जंगल ने अपनी खोई हुई शांति वापस पा ली। फिर भी, जंगल अभी भी साँस ले रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 속삭였다. 아름다운 유혹과 함께.",
			"그러나 그 속삭임은 광기로 물들어 있었으니.",
			"정령이라 불리던 존재, 그녀의 비극은 숲의 저주였다.",
			"이제, 모든 진실이 마지막 장막을 걷는다."
		],
		"english": [
			"The forest whispered, with a beautiful temptation.",
			"Yet, that whisper was tainted with madness.",
			"The being called a spirit, her tragedy was the forest's curse.",
			"Now, all truth unveils its final curtain."
		],
		"japanese": [
			"森は囁いた。美しい誘惑と共に。",
			"しかし、その囁きは狂気に染まっていた。",
			"精霊と呼ばれた存在、彼女の悲劇は森の呪いだった。",
			"今、全ての真実が最後の帳を上げる。"
		],
		"chinese": [
			"森林低语着。伴随着美丽的诱惑。",
			"然而，那低语被疯狂所沾染。",
			"那个被称为精灵的存在，她的悲剧是森林的诅咒。",
			"现在，所有的真相都揭开了最后的帷幕。"
		],
		"french": [
			"La forêt murmurait. Avec une belle tentation.",
			"Pourtant, ce murmure était teinté de folie.",
			"L'être appelé esprit, sa tragédie était la malédiction de la forêt.",
			"Maintenant, toute la vérité lève son dernier voile."
		],
		"spanish": [
			"El bosque susurraba. Con una hermosa tentación.",
			"Pero ese susurro estaba teñido de locura.",
			"El ser llamado espíritu, su tragedia era la maldición del bosque.",
			"Ahora, toda la verdad levanta su último velo."
		],
		"vietnamese": [
			"Rừng thì thầm, cùng với một cám dỗ tuyệt đẹp.",
			"Nhưng tiếng thì thầm ấy đã nhuốm màu điên loạn.",
			"Sinh vật được gọi là tinh linh, bi kịch của cô ấy là lời nguyền của rừng.",
			"Giờ đây, mọi sự thật sẽ vén bức màn cuối cùng."
		],
		"thai": [
			"ป่ากระซิบ ด้วยแรงยั่วยวนอันงดงาม.",
			"แต่เสียงกระซิบนั้นเปื้อนไปด้วยความบ้าคลั่ง.",
			"สิ่งมีชีวิตที่ถูกเรียกว่าภูตพราย โศกนาฏกรรมของนางคือคำสาปของป่า.",
			"บัดนี้ ความจริงทั้งหมดเปิดม่านสุดท้ายแล้ว."
		],
		"hindi": [
			"जंगल ने फुसफुसाया। एक सुंदर प्रलोभन के साथ।",
			"पर वह फुसफुसाहट पागलपन से रंगी हुई थी।",
			"वह जिसे आत्मा कहते थे, उसकी त्रासदी जंगल का अभिशाप थी।",
			"अब, सभी सच्चाई अपना अंतिम पर्दा हटाती है।"
		]
	},
	"epilogue": {
		"korean": [
			"광기가 휩쓸고 간 숲. 기이한 아름다움은 상흔으로 남았다.",
			"주술사의 비명은 숲의 속삭임이 되어 영원히 맴돌았다.",
			"구원이었을까, 혹은 더 깊은 침해의 시작이었을까.",
			"숲은 여전히 신비를 품고, 길 잃은 이들을 기다린다."
		],
		"english": [
			"The forest, swept by madness. Its bizarre beauty remained as a scar.",
			"The sorceress's scream became the forest's whisper, echoing eternally.",
			"Was it salvation, or the beginning of a deeper transgression?",
			"The forest still embraces its mystery, waiting for the lost."
		],
		"japanese": [
			"狂気が吹き荒れた森。奇妙な美しさは傷跡として残った。",
			"呪術師の悲鳴は森の囁きとなり、永遠に響き渡った。",
			"それは救済だったのか、あるいはより深い侵害の始まりだったのか。",
			"森は未だ神秘を抱き、道に迷いし者を待つ。"
		],
		"chinese": [
			"被疯狂席卷的森林。诡异的美丽留下了伤痕。",
			"女巫的尖叫变成了森林的低语，永远回荡着。",
			"那是救赎吗，还是更深层侵犯的开始？",
			"森林仍然怀抱神秘，等待着迷失之人。"
		],
		"french": [
			"La forêt balayée par la folie. Sa beauté étrange est restée comme une cicatrice.",
			"Le cri de la sorcière devint le murmure de la forêt, résonnant éternellement.",
			"Était-ce le salut, ou le début d'une transgression plus profonde ?",
			"La forêt garde toujours son mystère, attendant ceux qui sont perdus."
		],
		"spanish": [
			"El bosque arrasado por la locura. Su extraña belleza permaneció como una cicatriz.",
			"El grito de la hechicera se convirtió en el susurro del bosque, resonando eternamente.",
			"¿Fue salvación, o el comienzo de una transgresión más profunda?",
			"El bosque aún guarda su misterio, esperando a los perdidos."
		],
		"vietnamese": [
			"Rừng bị cuốn trôi bởi sự điên loạn. Vẻ đẹp kỳ lạ của nó còn lại như một vết sẹo.",
			"Tiếng hét của phù thủy trở thành tiếng thì thầm của rừng, vang vọng mãi mãi.",
			"Đó là sự cứu rỗi, hay sự khởi đầu của một sự xâm phạm sâu sắc hơn?",
			"Khu rừng vẫn ẩn chứa bí ẩn, chờ đợi những người lạc lối."
		],
		"thai": [
			"ป่าที่ถูกความบ้าคลั่งพัดผ่าน ความงามแปลกประหลาดหลงเหลือไว้เพียงรอยแผลเป็น.",
			"เสียงกรีดร้องของหมอผีกลายเป็นเสียงกระซิบของป่า ก้องกังวานชั่วนิรันดร์.",
			"มันคือความรอดหรือการเริ่มต้นของการล่วงละเมิดที่ลึกซึ้งยิ่งขึ้น?",
			"ป่ายังคงเก็บงำความลึกลับ รอคอยผู้หลงทาง."
		],
		"hindi": [
			"पागलपन से घिरा जंगल। उसकी अजीब सुंदरता एक दाग के रूप में रह गई।",
			"जादूगरनी की चीख जंगल की फुसफुसाहट बन गई, हमेशा के लिए गूँजती रही।",
			"क्या वह मुक्ति थी, या एक गहरे उल्लंघन की शुरुआत?",
			"जंगल अभी भी अपना रहस्य समेटे हुए है, भटके हुओं का इंतज़ार कर रहा है।"
		]
	}
} as const;
