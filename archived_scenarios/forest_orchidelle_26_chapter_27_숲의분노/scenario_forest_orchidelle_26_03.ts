export const scenario_forest_orchidelle_26_03 = {
	"scenario_id": "forest_orchidelle_26_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"숲은 미쳤다. 아름다움에 미쳐버렸다.",
			"그들은 우리의 모든 것을 평가하고 조롱하며 공격한다.",
			"광기의 숲, 그 깊은 곳에서 진실은 더욱 기괴하게 모습을 드러냈다."
		],
		"english": [
			"The forest is mad. Mad with beauty.",
			"They judge, mock, and attack everything about us.",
			"In the depths of the mad forest, the truth revealed itself even more grotesquely."
		],
		"japanese": [
			"森は狂っていた。美しさに。",
			"彼らは私たちの全てを評価し、嘲笑し、攻撃する。",
			"狂気の森、その深淵で真実はさらに奇怪な姿を現した。"
		],
		"chinese": [
			"森林疯了。为美而疯。",
			"他们评判、嘲弄并攻击我们的一切。",
			"疯狂森林深处，真相以更诡异的面貌显现。"
		],
		"french": [
			"La forêt est folle. Folle de beauté.",
			"Ils jugent, se moquent et nous attaquent sur tout.",
			"Dans les profondeurs de la forêt démente, la vérité se révéla encore plus grotesque."
		],
		"spanish": [
			"El bosque está loco. Loco de belleza.",
			"Nos juzgan, se burlan y nos atacan en todo.",
			"En las profundidades del bosque de la locura, la verdad se reveló aún más grotescamente."
		],
		"vietnamese": [
			"Rừng đã phát điên. Điên vì vẻ đẹp.",
			"Chúng đánh giá, chế nhạo và tấn công mọi thứ của chúng ta.",
			"Trong sâu thẳm khu rừng điên loạn, sự thật hiện ra càng thêm kỳ quái."
		],
		"thai": [
			"ป่าคลุ้มคลั่ง คลุ้มคลั่งด้วยความงาม",
			"พวกมันตัดสิน เย้ยหยัน และโจมตีทุกสิ่งของเรา",
			"ในส่วนลึกของป่าคลุ้มคลั่ง ความจริงได้เผยโฉมออกมาอย่างประหลาดพิสดารยิ่งขึ้น"
		],
		"hindi": [
			"जंगल पागल है। सुंदरता के लिए पागल।",
			"वे हमारी हर चीज़ का आकलन करते हैं, मज़ाक उड़ाते हैं और हमला करते हैं।",
			"पागल जंगल की गहराई में, सच्चाई और भी विकृत रूप से सामने आई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 기류는 더욱 이상해졌다. 모든 발걸음이 평가받는 듯했다.",
						"english": "The forest's aura grew stranger. Every step felt judged.",
						"japanese": "森の気配はますます奇妙になった。一歩ごとに品定めされているようだった。",
						"chinese": "森林的气息变得更怪异了。每一步都像在被评判。",
						"french": "L'atmosphère de la forêt devint plus étrange. Chaque pas semblait jugé.",
						"spanish": "El aura del bosque se volvió más extraña. Cada paso se sentía juzgado.",
						"vietnamese": "Khí chất của rừng ngày càng trở nên kỳ lạ. Mỗi bước chân dường như đều bị đánh giá.",
						"thai": "บรรยากาศของป่ายิ่งแปลกประหลาดขึ้น ทุกย่างก้าวรู้สึกเหมือนถูกตัดสิน",
						"hindi": "जंगल का माहौल और अजीब होता गया। हर कदम पर ऐसा लगता था जैसे न्याय किया जा रहा हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 꽃무늬들 봐. 비정상적으로 화려한데… 어딘가 인공적인 느낌이야.",
						"english": "Look at these floral patterns. They're abnormally flashy... yet somehow artificial.",
						"japanese": "この花柄を見て。異常に派手なのに…どこか人工的だわ。",
						"chinese": "看看这些花纹。异常华丽…却有种人工的感觉。",
						"french": "Regarde ces motifs floraux. Ils sont anormalement flashy... mais ont quelque chose d'artificiel.",
						"spanish": "Mira estos patrones florales. Son anormalmente llamativos... pero de alguna manera artificiales.",
						"vietnamese": "Nhìn những họa tiết hoa này đi. Chúng lộng lẫy một cách bất thường... nhưng lại có cảm giác nhân tạo.",
						"thai": "ดูลายดอกไม้พวกนี้สิ มันฉูดฉาดผิดปกติ... แต่ก็รู้สึกเหมือนเป็นของเทียม",
						"hindi": "इन फूलों के पैटर्न को देखो। वे असामान्य रूप से आकर्षक हैं... फिर भी कहीं न कहीं कृत्रिम लगते हैं।"
					}
				},
				{
					"content": {
						"korean": "섬뜩할 정도로 완벽을 강요하는 것 같아. 기분이 나빠.",
						"english": "It feels like perfection is being eerily forced. It's unsettling.",
						"japanese": "不気味なほど完璧を強制されているみたい。嫌な気分だ。",
						"chinese": "感觉像是诡异地在强迫完美。真让人不舒服。",
						"french": "On dirait que la perfection est étrangement imposée. C'est troublant.",
						"spanish": "Parece que la perfección se impone de forma espeluznante. Me da un mal presentimiento.",
						"vietnamese": "Cứ như thể sự hoàn hảo đang bị ép buộc một cách rợn người. Thật khó chịu.",
						"thai": "มันเหมือนถูกบังคับให้สมบูรณ์แบบอย่างน่าขนลุก รู้สึกไม่ดีเลย",
						"hindi": "ऐसा लगता है जैसे पूर्णता को अजीब तरह से थोपा जा रहा है। यह परेशान करने वाला है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "크으윽… 하찮은 것들이… 감히…!",
						"english": "Ugh... you insignificant wretches... how dare you...!",
						"japanese": "くぅっ…取るに足らぬ者どもが…よくも…！",
						"chinese": "唔呃…你们这些卑微的东西…竟敢…！",
						"french": "Ugh… insignifiants que vous êtes… comment osez-vous… !",
						"spanish": "Ugh… ¡insignificantes criaturas… cómo os atrevéis…!",
						"vietnamese": "Khừ… lũ vô tích sự… dám…!",
						"thai": "อึก… พวกไร้ค่า… กล้าดียังไง…!",
						"hindi": "उफ़… तुम तुच्छ प्राणी… तुम्हारी हिम्मत कैसे हुई…!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미친 소리만 늘어놓는군. 제대로 된 대화는 불가능한가.",
						"english": "Only spouting nonsense. Is a proper conversation impossible?",
						"japanese": "狂ったことばかり言っているな。まともな会話は不可能なのか。",
						"chinese": "只会说些疯话。难道无法正常对话吗？",
						"french": "Vous ne faites que débiter des absurdités. Une conversation sensée est-elle impossible ?",
						"spanish": "Solo dices locuras. ¿Es imposible tener una conversación decente?",
						"vietnamese": "Chỉ toàn nói mấy lời điên rồ. Chẳng lẽ không thể đối thoại đàng hoàng sao?",
						"thai": "เอาแต่พล่ามเรื่องบ้าๆ บอๆ การสนทนาที่ดีเป็นไปไม่ได้หรือไง?",
						"hindi": "बस बकवास कर रहे हो। क्या एक सही बातचीत असंभव है?"
					}
				}
			],
			"id": 3,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "그래봐야 숲의 품격을 더럽히는 너희는… 결국 사라질 것이다.",
						"english": "Even so, you who defile the forest's dignity... will ultimately vanish.",
						"japanese": "そうは言っても、森の品格を汚すお前たちは…結局消え去るだろう。",
						"chinese": "即便如此，玷污森林品格的你们…终将消失。",
						"french": "Malgré tout, vous qui souillez la dignité de la forêt… finirez par disparaître.",
						"spanish": "Aun así, vosotros que mancilláis la dignidad del bosque… finalmente desapareceréis.",
						"vietnamese": "Dù sao đi nữa, lũ các ngươi làm ô uế phẩm giá của rừng… rồi cũng sẽ biến mất.",
						"thai": "ถึงอย่างนั้น พวกเจ้าที่แปดเปื้อนศักดิ์ศรีของป่า… ก็จะหายไปในที่สุด",
						"hindi": "फिर भी, तुम जो जंगल की गरिमा को दूषित करते हो… अंततः गायब हो जाओगे।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "젠장, 저런 광기에는 말이 안 통해…!",
						"english": "Damn it, there's no reasoning with such madness...!",
						"japanese": "ちくしょう、あんな狂気には言葉が通じない…！",
						"chinese": "该死，那种疯狂根本无法沟通…！",
						"french": "Bon sang, on ne peut pas raisonner avec une telle folie… !",
						"spanish": "¡Maldita sea, no se puede razonar con tanta locura…!",
						"vietnamese": "Chết tiệt, không thể nói chuyện với cái sự điên rồ đó…!",
						"thai": "ให้ตายสิ ความบ้าคลั่งแบบนั้นพูดไม่รู้เรื่องเลย…!",
						"hindi": "धिक्कार है, ऐसी पागलपन से बात नहीं बन सकती…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 이 꼴로 숲을 더럽히다니! 숲의 품격을 모르는 야만인들!",
						"english": "How dare you defile this forest in such a state! Savages who know nothing of the forest's dignity!",
						"japanese": "よくもこんな格好で森を汚したな！森の品格を知らぬ野蛮人め！",
						"chinese": "竟敢这副模样玷污森林！不识森林品格的野蛮人！",
						"french": "Comment osez-vous souiller cette forêt dans cet état ! Sauvages qui ne connaissez rien à la dignité de la forêt !",
						"spanish": "¡Cómo osas profanar este bosque con ese aspecto! ¡Bárbaros que no conocen la dignidad del bosque!",
						"vietnamese": "Dám làm bẩn khu rừng này với bộ dạng như vậy à! Đồ dã man không biết phẩm giá của rừng!",
						"thai": "แกกล้าดียังไงถึงมาทำให้ป่าแปดเปื้อนในสภาพแบบนี้! พวกป่าเถื่อนที่ไม่รู้จักศักดิ์ศรีของป่า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस हालत में जंगल को अपवित्र करने की! असभ्य लोग जो जंगल की गरिमा को नहीं जानते!"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "당신은 또 누구야? 갑자기 나타나서 무슨 소리야!",
						"english": "Who are you? What's with this sudden appearance and nonsense!",
						"japanese": "あんたは誰だ？いきなり現れて何を言ってるんだ！",
						"chinese": "你又是谁？突然冒出来胡说八道什么！",
						"french": "Qui êtes-vous encore ? Qu'est-ce que ces apparitions soudaines et ces absurdités !",
						"spanish": "¿Quién eres tú? ¿Qué es esto de aparecer de repente y decir tonterías?",
						"vietnamese": "Ngươi là ai nữa? Tự nhiên xuất hiện rồi nói cái gì vậy!",
						"thai": "คุณเป็นใครอีกเนี่ย? จู่ๆ ก็โผล่มาพูดอะไร!",
						"hindi": "तुम कौन हो? यह अचानक प्रकट होकर क्या बकवास कर रहे हो!"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "너희의 누추한 복장, 경박한 행동… 모든 것이 이 숲의 아름다움을 훼손하고 있다!",
						"english": "Your shabby attire, your frivolous actions... everything is defiling this forest's beauty!",
						"japanese": "お前たちの薄汚い服装、軽薄な振る舞い…全てがこの森の美しさを損なっている！",
						"chinese": "你们邋遢的衣着，轻浮的举止…一切都在损害这森林的美丽！",
						"french": "Vos vêtements sordides, vos actions frivoles... tout cela dégrade la beauté de cette forêt !",
						"spanish": "Vuestro atuendo desaliñado, vuestras acciones frívolas... ¡todo está dañando la belleza de este bosque!",
						"vietnamese": "Trang phục bẩn thỉu, hành động phù phiếm của các ngươi... tất cả đều đang làm tổn hại đến vẻ đẹp của khu rừng này!",
						"thai": "เครื่องแต่งกายอันซอมซ่อ การกระทำอันเหลวไหลของพวกเจ้า... ทุกสิ่งล้วนทำลายความงามของป่าแห่งนี้!",
						"hindi": "तुम्हारी मैली पोशाक, तुम्हारी तुच्छ हरकतें... सब कुछ इस जंगल की सुंदरता को नुकसान पहुँचा रहा है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "뭐라고? 우리가 뭘 어쨌다고!",
						"english": "What?! What did we do?!",
						"japanese": "なんだと？俺たちが何をしたって言うんだ！",
						"chinese": "什么？我们做了什么！",
						"french": "Quoi ?! Qu'est-ce qu'on a fait ?!",
						"spanish": "¡¿Qué?! ¡¿Qué hemos hecho nosotros?!",
						"vietnamese": "Cái gì? Chúng tôi đã làm gì chứ!",
						"thai": "อะไรนะ? พวกเราทำอะไรผิด!",
						"hindi": "क्या?! हमने क्या किया?!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "벌을 받아라. 미를 모르는 자들에겐… 고통만이 가르침이 될 것이다!",
						"english": "Suffer your punishment! For those who know not beauty... only pain shall teach!",
						"japanese": "罰を受けよ。美を知らぬ者には…苦痛こそが教えとなるだろう！",
						"chinese": "接受惩罚吧。对于不懂美之人…唯有痛苦方能教化！",
						"french": "Subissez votre châtiment ! À ceux qui ignorent la beauté… seule la douleur servira de leçon !",
						"spanish": "¡Recibid vuestro castigo! ¡Para aquellos que no conocen la belleza… solo el dolor será la lección!",
						"vietnamese": "Hãy chịu phạt đi. Với những kẻ không biết cái đẹp… chỉ có đau đớn mới là bài học!",
						"thai": "จงรับโทษทัณฑ์! สำหรับผู้ที่ไม่รู้จักความงาม… มีเพียงความเจ็บปวดเท่านั้นที่จะสอนได้!",
						"hindi": "अपना दंड भुगतो! जो सुंदरता नहीं जानते… उन्हें केवल दर्द ही सिखाएगा!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아까 그 녀석… 숲의 품격이니 미니 하면서 공격했어.",
						"english": "That guy earlier... he attacked us, rambling about the forest's dignity and beauty.",
						"japanese": "さっきのあいつ…森の品格だの美だの言いながら攻撃してきたぞ。",
						"chinese": "刚才那家伙…边说着森林的品格和美边攻击我们。",
						"french": "Ce type de tout à l'heure… il nous a attaqués en parlant de la dignité et de la beauté de la forêt.",
						"spanish": "Ese tipo de antes… nos atacó hablando de la dignidad y la belleza del bosque.",
						"vietnamese": "Tên đó vừa nãy… vừa nói về phẩm giá và cái đẹp của rừng vừa tấn công.",
						"thai": "ไอ้หมอนั่นเมื่อกี้… โจมตีพลางพร่ำเพ้อเรื่องศักดิ์ศรีและความงามของป่า",
						"hindi": "वह आदमी पहले… जंगल की गरिमा और सुंदरता के बारे में बड़बड़ाते हुए हमला कर रहा था।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기 숲은 정말 이상해. 모든 것이 아름다움을 강요하는 것 같아.",
						"english": "This forest is really strange. Everything seems to force beauty upon us.",
						"japanese": "この森は本当に変だ。全てが美しさを強要しているようだ。",
						"chinese": "这里的森林真的很奇怪。一切似乎都在强求美。",
						"french": "Cette forêt est vraiment étrange. Tout semble nous imposer la beauté.",
						"spanish": "Este bosque es realmente extraño. Todo parece imponernos la belleza.",
						"vietnamese": "Khu rừng này thật sự kỳ lạ. Mọi thứ dường như đều ép buộc sự đẹp đẽ.",
						"thai": "ป่าแห่งนี้แปลกมาก ทุกสิ่งดูเหมือนจะบังคับให้เราต้องงาม",
						"hindi": "यह जंगल सच में अजीब है। सब कुछ सुंदरता थोप रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "혹시… 숲 깊은 곳에 전설적인 '패션 유물'이 있다는 소문 들어봤어?",
						"english": "Say... have you heard rumors of a legendary 'Fashion Artifact' deep within the forest?",
						"japanese": "もしかして…森の奥深くに伝説の『ファッション遺物』があるって噂、聞いたことある？",
						"chinese": "话说…你有没有听说过森林深处有传说中的‘时尚遗物’？",
						"french": "Dis… as-tu entendu des rumeurs sur un légendaire « Artefact de Mode » au plus profond de la forêt ?",
						"spanish": "¿Oye… has oído rumores de un legendario 'Artefacto de Moda' en lo profundo del bosque?",
						"vietnamese": "Này… cậu có nghe tin đồn về một 'Di vật Thời trang' huyền thoại ẩn sâu trong rừng không?",
						"thai": "นี่… เคยได้ยินข่าวลือเรื่อง 'วัตถุแฟชั่นในตำนาน' ที่ซ่อนอยู่ลึกเข้าไปในป่าไหม?",
						"hindi": "क्या… तुमने जंगल की गहराई में एक पौराणिक 'फैशन कलाकृति' की अफवाह सुनी है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "패션 유물? 설마 그게 이 광기의 원인인 건 아니겠지.",
						"english": "Fashion Artifact? Surely that's not the cause of this madness, is it?",
						"japanese": "ファッション遺物？まさかそれがこの狂気の原因じゃないだろうな。",
						"chinese": "时尚遗物？该不会是那东西导致了这场疯狂吧。",
						"french": "Un Artefact de Mode ? Ce n'est quand même pas la cause de toute cette folie, n'est-ce pas ?",
						"spanish": "¿Un Artefacto de Moda? No será eso la causa de esta locura, ¿verdad?",
						"vietnamese": "Di vật Thời trang? Chắc không phải đó là nguyên nhân của sự điên rồ này đâu nhỉ?",
						"thai": "วัตถุแฟชั่นเหรอ? ไม่ใช่ว่านั่นคือสาเหตุของความบ้าคลั่งนี้หรอกนะ?",
						"hindi": "फैशन कलाकृति? कहीं वही इस पागलपन का कारण तो नहीं?"
					},
					"emotion": "base",
					"speaker": "character_4",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 공격은 더욱 집요해졌다. 탐험대는 광기의 소용돌이 속으로.",
						"english": "The forest's assault grew more relentless. The expedition plunged into a vortex of madness.",
						"japanese": "森の攻撃はさらに執拗になった。探検隊は狂気の渦の中へ。",
						"chinese": "森林的攻击变得更加执着。探险队陷入了疯狂的漩涡之中。",
						"french": "L'assaut de la forêt devint plus acharné. L'expédition plongea dans un tourbillon de folie.",
						"spanish": "El ataque del bosque se volvió más implacable. La expedición se sumergió en un torbellino de locura.",
						"vietnamese": "Cuộc tấn công của rừng ngày càng dai dẳng. Đoàn thám hiểm chìm sâu vào vòng xoáy của sự điên loạn.",
						"thai": "การโจมตีของป่าทวีความรุนแรงขึ้นเรื่อยๆ คณะสำรวจจมดิ่งลงสู่กระแสความบ้าคลั่ง",
						"hindi": "जंगल का हमला और भी ज़बरदस्त हो गया। अभियान दल पागलपन के भंवर में डूब गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 물러설 곳 없어. 이 숲의 광기… 끝을 봐야겠어.",
						"english": "No turning back. I'll see this forest's madness to the end.",
						"japanese": "もう後には引けない。この森の狂気…最後まで見届ける。",
						"chinese": "已无退路。这片森林的疯狂……我必须看到结局。",
						"french": "Plus de retraite. Je dois affronter la folie de cette forêt jusqu'au bout.",
						"spanish": "No hay vuelta atrás. Debo ver el final de la locura de este bosque.",
						"vietnamese": "Không còn đường lui. Tôi phải đối mặt với sự điên loạn của khu rừng này đến cùng.",
						"thai": "ไม่มีที่ให้ถอยแล้ว ความวิกลจริตของป่านี้... ต้องเห็นจุดจบ",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है। इस जंगल के पागलपन का… अंत देखना ही होगा।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "놈들의 이상한 미적 기준에 더는 당하지 않을 거야.",
						"english": "I won't fall for their strange aesthetic standards anymore.",
						"japanese": "奴らの奇妙な美的基準には、もう騙されない。",
						"chinese": "我不会再受那些家伙奇怪的审美标准摆布了。",
						"french": "Je ne succomberai plus à leurs étranges standards esthétiques.",
						"spanish": "Ya no me dejaré engañar por sus extraños estándares estéticos.",
						"vietnamese": "Ta sẽ không còn bị lừa bởi những tiêu chuẩn thẩm mỹ kỳ lạ của bọn chúng nữa.",
						"thai": "ข้าจะไม่หลงกลกับมาตรฐานความงามอันแปลกประหลาดของพวกมันอีกแล้ว",
						"hindi": "मैं अब उनकी अजीबोगरीब सौंदर्य मानकों के झांसे में नहीं आऊँगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "오만하고 추한 침입자들이여… 숲의 진정한 아름다움을 보여주마.",
						"english": "Arrogant, hideous invaders... I shall show you the true beauty of the forest.",
						"japanese": "傲慢で醜い侵入者たちよ…森の真の美しさを見せてやろう。",
						"chinese": "傲慢丑陋的入侵者们……我将向你们展示森林真正的美丽。",
						"french": "Envahisseurs arrogants et hideux... Je vous montrerai la véritable beauté de la forêt.",
						"spanish": "Invasores arrogantes y feos... Os mostraré la verdadera belleza del bosque.",
						"vietnamese": "Những kẻ xâm nhập kiêu ngạo và xấu xí... Ta sẽ cho các ngươi thấy vẻ đẹp thực sự của khu rừng.",
						"thai": "ผู้รุกรานที่โอหังและน่าเกลียด... ข้าจะแสดงความงามที่แท้จริงของป่าให้พวกเจ้าเห็น",
						"hindi": "अहंकारी और बदसूरत घुसपैठियों… मैं तुम्हें जंगल की सच्ची सुंदरता दिखाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "또 시작이군! 네놈들도 그 광기에 물들었나!",
						"english": "Here we go again! Have you fallen to the madness too?!",
						"japanese": "また始まったか！貴様らもその狂気に染まったのか！",
						"chinese": "又来了！你们也被那疯狂侵蚀了吗！",
						"french": "Encore ! Vous aussi, vous êtes contaminés par cette folie ?!",
						"spanish": "¡Otra vez! ¿Vosotros también os habéis contagiado de esa locura?",
						"vietnamese": "Lại nữa rồi! Các ngươi cũng bị nhiễm sự điên loạn đó sao!",
						"thai": "เริ่มอีกแล้ว! พวกเจ้าก็ติดบ้าไปกับมันด้วยรึไง!",
						"hindi": "फिर से शुरू! क्या तुम लोग भी उस पागलपन में रंग गए हो?!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 숲은 미적 완벽함을 추구한다. 너희는 불완전해….",
						"english": "This forest seeks aesthetic perfection. You are imperfect...",
						"japanese": "この森は美的完璧さを追求する。お前たちは不完全だ…。",
						"chinese": "这片森林追求美的完美。而你们，是不完美的……",
						"french": "Cette forêt recherche la perfection esthétique. Vous êtes imparfaits...",
						"spanish": "Este bosque busca la perfección estética. Vosotros sois imperfectos...",
						"vietnamese": "Khu rừng này theo đuổi sự hoàn hảo về mặt thẩm mỹ. Các ngươi thì không hoàn hảo...",
						"thai": "ป่าแห่งนี้แสวงหาความสมบูรณ์แบบทางสุนทรียภาพ พวกเจ้าไม่สมบูรณ์แบบ...",
						"hindi": "यह जंगल सौंदर्य की पूर्णता की तलाश करता है। तुम अपूर्ण हो…।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크흐흑… 미의… 순수성이… 이렇게… 무너질 리가…",
						"english": "Ugh... The purity... of beauty... It can't... crumble like this...",
						"japanese": "クフフ…美の…純粋性が…こんな風に…崩れるはずが…。",
						"chinese": "呃啊啊……美的……纯粹性……怎么会……就这样崩溃……",
						"french": "Urgh... La pureté... de la beauté... Ça ne peut pas... s'effondrer comme ça...",
						"spanish": "Ugh... La pureza... de la belleza... No puede... derrumbarse así...",
						"vietnamese": "Khụ khụ... Sự thuần khiết... của vẻ đẹp... Sao có thể... sụp đổ thế này...",
						"thai": "อึก... ความบริสุทธิ์... ของความงาม... มัน... ไม่มีทาง... พังทลายลงแบบนี้...",
						"hindi": "उफ़्फ़… सौंदर्य की… शुद्धता… ऐसे… बिखर नहीं सकती…।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이게 너희가 말하는 아름다움의 최후냐!",
						"english": "Is this the end of the beauty you speak of?!",
						"japanese": "これがお前たちが語る美の末路か！",
						"chinese": "这就是你们所说的美丽的终结吗！",
						"french": "Est-ce la fin de la beauté dont vous parlez ?!",
						"spanish": "¡¿Es este el final de la belleza de la que habláis?!",
						"vietnamese": "Đây là kết cục của vẻ đẹp mà các ngươi nói sao!",
						"thai": "นี่คือจุดจบของความงามที่พวกเจ้าพูดถึงรึเปล่า!",
						"hindi": "क्या यही वह सुंदरता का अंत है जिसकी तुम बात करते हो?!"
					}
				},
				{
					"content": {
						"korean": "괴물이 사라진 자리, 기이하게 피어난 꽃무늬들이 스러졌다. 숲의 광기는 계속되고 있었다.",
						"english": "Where the monster vanished, strangely bloomed floral patterns faded. The forest's madness continued.",
						"japanese": "化物が消えた場所には、奇妙に咲き誇っていた花柄が朽ちていった。森の狂気は続いていた。",
						"chinese": "怪物消失的地方，奇异绽放的花纹也随之消逝。森林的疯狂仍在继续。",
						"french": "Là où le monstre disparut, d'étranges motifs floraux éclos s'estompèrent. La folie de la forêt continuait.",
						"spanish": "Donde el monstruo desapareció, los extraños patrones florales que habían florecido se marchitaron. La locura del bosque continuaba.",
						"vietnamese": "Nơi con quái vật biến mất, những hoa văn kỳ lạ nở rộ rồi tàn lụi. Sự điên loạn của khu rừng vẫn tiếp diễn.",
						"thai": "ณ ที่ที่ปีศาจหายไป ลวดลายดอกไม้ที่ผลิบานอย่างประหลาดก็ร่วงโรยลง ความวิกลจริตของป่ายังคงดำเนินต่อไป",
						"hindi": "जहाँ राक्षस गायब हुआ, अजीबोगरीब खिले हुए फूलों के पैटर्न मुरझा गए। जंगल का पागलपन जारी था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "아름다움에 눈먼 자는… 영원히 숲의 거름이 될 것이다.",
						"english": "Those blinded by beauty... shall forever become the forest's fertilizer.",
						"japanese": "美に目が眩んだ者は…永遠に森の肥やしとなるだろう。",
						"chinese": "那些被美蒙蔽双眼的人……将永远成为森林的肥料。",
						"french": "Ceux qui sont aveuglés par la beauté... deviendront éternellement l'engrais de la forêt.",
						"spanish": "Los ciegos por la belleza... se convertirán para siempre en abono del bosque.",
						"vietnamese": "Kẻ mù quáng vì vẻ đẹp... sẽ mãi mãi trở thành phân bón cho khu rừng.",
						"thai": "ผู้ที่ตาบอดเพราะความงาม... จะกลายเป็นปุ๋ยของป่าไปชั่วนิรันดร์",
						"hindi": "जो सुंदरता से अंधे हैं… वे हमेशा के लिए जंगल की खाद बन जाएंगे।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어! 이대로 물러설 순 없어!",
						"english": "It's not... over yet! I can't retreat like this!",
						"japanese": "まだ…終わってない！このままでは退けない！",
						"chinese": "还没……结束！我不能就这样退缩！",
						"french": "Ce n'est pas... encore fini ! Je ne peux pas battre en retraite comme ça !",
						"spanish": "¡Todavía... no ha terminado! ¡No puedo retirarme así!",
						"vietnamese": "Vẫn... chưa kết thúc! Không thể rút lui như thế này được!",
						"thai": "ยัง... ไม่จบ! จะถอยแบบนี้ไม่ได้!",
						"hindi": "अभी… खत्म नहीं हुआ! मैं ऐसे पीछे नहीं हट सकता!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
