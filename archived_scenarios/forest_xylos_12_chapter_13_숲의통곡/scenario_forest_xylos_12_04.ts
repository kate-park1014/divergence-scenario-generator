export const scenario_forest_xylos_12_04 = {
	"scenario_id": "forest_xylos_12_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 경계가 무너진다.",
			"현실과 환영의 흐름이 뒤섞이고,",
			"나는, 내가 아닌 것이 되어간다.",
			"모든 것을 기록한 자가 기다리는 곳.",
			"고통은 반복되고, 진실은 영원히 묶여있다."
		],
		"english": [
			"The forest's boundary collapses.",
			"The currents of reality and illusion intertwine,",
			"I become something I am not.",
			"The place where the one who recorded everything awaits.",
			"Pain repeats, and truth is forever bound."
		],
		"japanese": [
			"森の境界が崩壊する。",
			"現実と幻影の流れが混じり合い、",
			"私は、私ではないものへと変わっていく。",
			"全てを記録した者が待つ場所。",
			"苦痛は繰り返され、真実は永遠に縛られる。"
		],
		"chinese": [
			"森林的边界正在崩塌。",
			"现实与幻象的洪流交织，",
			"我，正逐渐变成非我。",
			"记录一切之人等待之处。",
			"痛苦循环往复，真相永受束缚。"
		],
		"french": [
			"La frontière de la forêt s'effondre.",
			"Les flux de réalité et d'illusion s'entremêlent,",
			"Je deviens ce que je ne suis pas.",
			"L'endroit où attend celui qui a tout enregistré.",
			"La douleur se répète, et la vérité est liée pour toujours."
		],
		"spanish": [
			"El límite del bosque se desmorona.",
			"Los flujos de realidad e ilusión se entrelazan,",
			"Me convierto en algo que no soy.",
			"El lugar donde espera quien lo registró todo.",
			"El dolor se repite, y la verdad está atada para siempre."
		],
		"vietnamese": [
			"Ranh giới khu rừng sụp đổ.",
			"Dòng chảy thực tại và ảo ảnh hòa quyện,",
			"Tôi, trở thành một thứ không phải mình.",
			"Nơi người ghi lại mọi thứ đang chờ đợi.",
			"Nỗi đau lặp lại, sự thật bị trói buộc vĩnh viễn."
		],
		"thai": [
			"ขอบเขตของป่าพังทลายลง",
			"กระแสแห่งความเป็นจริงและภาพลวงตาปะปนกัน",
			"ฉันกำลังกลายเป็นสิ่งที่ไม่ใช่ฉัน",
			"ที่ที่ผู้บันทึกทุกสิ่งกำลังรออยู่",
			"ความเจ็บปวดซ้ำรอย และความจริงถูกผูกมัดไว้ชั่วนิรันดร์"
		],
		"hindi": [
			"वन की सीमाएँ ढह रही हैं।",
			"यथार्थ और भ्रम की धाराएँ विलीन हो रही हैं,",
			"मैं, मैं नहीं रह जाता।",
			"वह स्थान जहाँ सब कुछ दर्ज करने वाला प्रतीक्षा कर रहा है।",
			"दर्द दोहराया जाता है, और सच हमेशा के लिए बँधा रहता है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 숨결이 모든 것을 집어삼켰다. 현실과 환영의 경계가 흐릿해졌다.",
						"english": "The breath of the forest swallowed everything. The boundary between reality and illusion blurred.",
						"japanese": "森の息吹が全てを飲み込んだ。現実と幻影の境界が曖昧になった。",
						"chinese": "森林的气息吞噬了一切。现实与幻象的边界变得模糊。",
						"french": "Le souffle de la forêt a tout englouti. La frontière entre réalité et illusion s'est estompée.",
						"spanish": "El aliento del bosque lo engulló todo. El límite entre realidad e ilusión se difuminó.",
						"vietnamese": "Hơi thở của rừng đã nuốt chửng mọi thứ. Ranh giới giữa thực tại và ảo ảnh mờ đi.",
						"thai": "ลมหายใจของป่ากลืนกินทุกสิ่ง ขอบเขตระหว่างความจริงกับภาพลวงตาพร่าเลือน",
						"hindi": "जंगल की साँस ने सब कुछ निगल लिया। यथार्थ और भ्रम के बीच की सीमा धुँधली हो गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…내가 숲이 되는 것 같아.",
						"english": "...I feel like I'm becoming the forest.",
						"japanese": "…私が森になるみたいだ。",
						"chinese": "……我好像要变成森林了。",
						"french": "...J'ai l'impression de devenir la forêt.",
						"spanish": "...Siento que me estoy convirtiendo en el bosque.",
						"vietnamese": "...Mình như đang hòa vào rừng vậy.",
						"thai": "...ฉันรู้สึกเหมือนกำลังจะกลายเป็นป่า",
						"hindi": "...मुझे लग रहा है जैसे मैं जंगल बन रहा हूँ।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "나무들이 특정한 리듬으로 흔들렸다. 고통스러운 숨소리 같았다.",
						"english": "The trees swayed to a peculiar rhythm. It sounded like pained breathing.",
						"japanese": "木々が独特のリズムで揺れた。苦痛に満ちた息遣いのようだった。",
						"chinese": "树木以独特的节奏摇曳。如同痛苦的喘息声。",
						"french": "Les arbres se balançaient sur un rythme particulier. On aurait dit une respiration douloureuse.",
						"spanish": "Los árboles se mecían con un ritmo particular. Sonaba como una respiración dolorosa.",
						"vietnamese": "Cây cối lay động theo một nhịp điệu đặc biệt. Nghe như tiếng thở đầy đau đớn.",
						"thai": "ต้นไม้แกว่งไกวเป็นจังหวะพิเศษ มันเหมือนเสียงลมหายใจที่เจ็บปวด",
						"hindi": "पेड़ एक अजीबोगरीब लय में झूल रहे थे। यह दर्द भरी साँसों जैसा लग रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "왔군. 이 모든 것을 기록해온 자다.",
						"english": "You've arrived. I am the one who has recorded everything.",
						"japanese": "来たか。この全てを記録してきた者だ。",
						"chinese": "你来了。我就是记录这一切的人。",
						"french": "Tu es arrivé. Je suis celui qui a tout enregistré.",
						"spanish": "Has llegado. Soy quien lo ha registrado todo.",
						"vietnamese": "Ngươi đã đến. Ta là kẻ đã ghi lại tất cả.",
						"thai": "เจ้ามาแล้ว ข้าคือผู้ที่บันทึกทุกสิ่ง",
						"hindi": "तुम आ गए। मैं ही वह हूँ जिसने सब कुछ दर्ज किया है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "fern",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이 숲은 기억의 감옥이야. 잊힌 역사가 반복되는 곳.",
						"english": "This forest is a prison of memories. A place where forgotten history repeats.",
						"japanese": "この森は記憶の監獄だ。忘れられた歴史が繰り返される場所。",
						"chinese": "这片森林是记忆的牢笼。遗忘的历史在此循环重演。",
						"french": "Cette forêt est une prison de souvenirs. Un lieu où l'histoire oubliée se répète.",
						"spanish": "Este bosque es una prisión de recuerdos. Un lugar donde la historia olvidada se repite.",
						"vietnamese": "Rừng này là một nhà tù của ký ức. Nơi lịch sử bị lãng quên lặp lại.",
						"thai": "ป่าแห่งนี้คือคุกแห่งความทรงจำ สถานที่ที่ประวัติศาสตร์ที่ถูกลืมซ้ำรอย",
						"hindi": "यह जंगल यादों का कारागार है। एक ऐसी जगह जहाँ भूला हुआ इतिहास दोहराया जाता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 역사인데.",
						"english": "What history?",
						"japanese": "どんな歴史なの？",
						"chinese": "什么历史？",
						"french": "Quelle histoire ?",
						"spanish": "¿Qué historia?",
						"vietnamese": "Lịch sử gì?",
						"thai": "ประวัติศาสตร์อะไร?",
						"hindi": "कैसा इतिहास?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "오래전, 아마존 부족의 마지막 여왕이 이곳으로 유배당했어.",
						"english": "Long ago, the last queen of the Amazon tribe was exiled here.",
						"japanese": "遠い昔、アマゾン族の最後の女王がここに追放されたの。",
						"chinese": "很久以前，亚马逊部落的最后一位女王被流放到这里。",
						"french": "Il y a longtemps, la dernière reine de la tribu amazonienne a été exilée ici.",
						"spanish": "Hace mucho tiempo, la última reina de la tribu amazónica fue exiliada aquí.",
						"vietnamese": "Rất lâu về trước, nữ hoàng cuối cùng của bộ tộc Amazon đã bị đày đến đây.",
						"thai": "นานมาแล้ว ราชินีองค์สุดท้ายของชนเผ่าอเมซอนถูกเนรเทศมาที่นี่",
						"hindi": "बहुत पहले, अमेज़न जनजाति की अंतिम रानी को यहाँ निर्वासित किया गया था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲의 모든 고통은… 그 여왕의 슬픔에서 시작됐지.",
						"english": "All the suffering of the forest... began with that queen's sorrow.",
						"japanese": "森のすべての苦痛は…その女王の悲しみから始まったんだ。",
						"chinese": "森林所有的痛苦…都始于那位女王的悲伤。",
						"french": "Toutes les souffrances de la forêt... ont commencé avec le chagrin de cette reine.",
						"spanish": "Todo el sufrimiento del bosque... comenzó con el dolor de esa reina.",
						"vietnamese": "Tất cả nỗi đau của khu rừng... bắt đầu từ nỗi buồn của nữ hoàng đó.",
						"thai": "ความทุกข์ทั้งหมดของป่า... เริ่มต้นจากความโศกเศร้าของราชินีองค์นั้น",
						"hindi": "जंगल का सारा दुख... उस रानी के दुख से शुरू हुआ था।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 숲의 주인이… 그 여왕이란 말이야?",
						"english": "So, the mistress of the forest... is the queen?",
						"japanese": "じゃあ森の主が…その女王ってこと？",
						"chinese": "那么森林的主人…就是那位女王？",
						"french": "Alors, la maîtresse de la forêt... c'est cette reine ?",
						"spanish": "¿Entonces la dueña del bosque... es esa reina?",
						"vietnamese": "Vậy, chủ nhân của khu rừng... là nữ hoàng đó sao?",
						"thai": "งั้นเจ้าของป่า... คือราชินีองค์นั้นเหรอ?",
						"hindi": "तो जंगल की मालकिन... वह रानी है?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "fern",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "그래. 숲의 영혼들은 특정 시점에 묶여 같은 고통을 반복해.",
						"english": "Yes. The forest spirits are bound to a specific point in time, repeating the same suffering.",
						"japanese": "そう。森の魂たちは特定の時点に縛られ、同じ苦痛を繰り返す。",
						"chinese": "没错。森林的灵魂被困在特定的时间点，重复着同样的痛苦。",
						"french": "Oui. Les esprits de la forêt sont liés à un moment précis, répétant la même souffrance.",
						"spanish": "Sí. Los espíritus del bosque están atados a un momento específico, repitiendo el mismo sufrimiento.",
						"vietnamese": "Đúng vậy. Linh hồn của khu rừng bị ràng buộc vào một thời điểm cụ thể, lặp đi lặp lại cùng một nỗi đau.",
						"thai": "ใช่ วิญญาณของป่าถูกผูกมัดไว้กับช่วงเวลาหนึ่ง ซ้ำเติมความทุกข์ทรมานเดิมๆ",
						"hindi": "हाँ। जंगल की आत्माएँ एक निश्चित समय में बंधी हुई हैं, वही पीड़ा दोहराती रहती हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 겪는 환영도… 전부 과거의 잔상이었어?",
						"english": "So, the illusions we're experiencing... were all remnants of the past?",
						"japanese": "じゃあ私たちが経験する幻影も…全部過去の残像だったの？",
						"chinese": "那么我们经历的幻象…全部都是过去的残影？",
						"french": "Alors, les illusions que nous vivons... étaient toutes des rémanences du passé ?",
						"spanish": "¿Entonces las ilusiones que experimentamos... eran todos vestigios del pasado?",
						"vietnamese": "Vậy, những ảo ảnh chúng ta trải qua... đều là dư ảnh của quá khứ?",
						"thai": "งั้นภาพหลอนที่เราเจอ... ก็เป็นแค่ภาพสะท้อนจากอดีตทั้งหมดเหรอ?",
						"hindi": "तो, जो भ्रम हम अनुभव कर रहे हैं... वे सभी अतीत के अवशेष थे?"
					}
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이 숲은 거대한 슬픔의 기록 그 자체. 너희도 그 일부가 될 거야.",
						"english": "This forest is a vast record of sorrow itself. You will become a part of it too.",
						"japanese": "この森は巨大な悲しみの記録そのもの。君たちもその一部となるだろう。",
						"chinese": "这片森林本身就是巨大悲伤的记录。你们也将成为其中的一部分。",
						"french": "Cette forêt est un vaste registre de tristesse en soi. Vous en ferez partie aussi.",
						"spanish": "Este bosque es un vasto registro de tristeza en sí mismo. Vosotros también os convertiréis en parte de él.",
						"vietnamese": "Khu rừng này là một bản ghi khổng lồ về nỗi buồn. Các ngươi cũng sẽ trở thành một phần của nó.",
						"thai": "ป่าแห่งนี้คือบันทึกความโศกเศร้าอันยิ่งใหญ่ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของมันเช่นกัน",
						"hindi": "यह जंगल विशाल दुख का एक अभिलेख है। तुम भी उसका हिस्सा बन जाओगे।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 여기서 빠져나갈 거야.",
						"english": "We'll get out of here.",
						"japanese": "私たちはここから抜け出すわ。",
						"chinese": "我们会离开这里的。",
						"french": "Nous allons nous en sortir.",
						"spanish": "Saldremos de aquí.",
						"vietnamese": "Chúng ta sẽ thoát khỏi đây.",
						"thai": "เราจะออกไปจากที่นี่",
						"hindi": "हम यहाँ से निकल जाएँगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "fern",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이제 돌아갈 수 없어. 숲은 너희를 놓아주지 않을 거야.",
						"english": "You can't go back now. The forest won't let you go.",
						"japanese": "もう戻れない。森は君たちを離さないだろう。",
						"chinese": "现在已经回不去了。森林不会放过你们的。",
						"french": "Vous ne pouvez plus faire demi-tour. La forêt ne vous lâchera pas.",
						"spanish": "Ya no podéis volver. El bosque no os dejará ir.",
						"vietnamese": "Không thể quay lại được nữa. Rừng sẽ không buông tha các ngươi đâu.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว ป่าจะไม่ปล่อยพวกเธอไป",
						"hindi": "अब वापस नहीं जा सकते। जंगल तुम्हें जाने नहीं देगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…두렵지만, 멈출 수 없어.",
						"english": "...I'm scared, but I can't stop.",
						"japanese": "…怖いけど、止まれない。",
						"chinese": "…我很害怕，但不能停下来。",
						"french": "...J'ai peur, mais je ne peux pas m'arrêter.",
						"spanish": "...Tengo miedo, pero no puedo parar.",
						"vietnamese": "...Sợ lắm, nhưng không thể dừng lại.",
						"thai": "...กลัวนะ แต่หยุดไม่ได้",
						"hindi": "...मैं डरा हुआ हूँ, पर रुक नहीं सकता।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "이곳이 숲의 심장이다. 모든 기억이 응축된 곳.",
						"english": "This is the heart of the forest. Where all memories converge.",
						"japanese": "ここが森の心臓だ。全ての記憶が凝縮された場所。",
						"chinese": "这里是森林的心脏。所有记忆汇聚之地。",
						"french": "C'est le cœur de la forêt. Le lieu où toutes les mémoires sont condensées.",
						"spanish": "Este es el corazón del bosque. Donde todos los recuerdos se condensan.",
						"vietnamese": "Đây là trái tim của khu rừng. Nơi mọi ký ức hội tụ.",
						"thai": "ที่นี่คือหัวใจของป่า สถานที่ที่ความทรงจำทั้งหมดถูกควบแน่น.",
						"hindi": "यह वन का हृदय है। जहाँ सभी स्मृतियाँ संघनित होती हैं。"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 마주할 시간이야.",
						"english": "It's time to face the truth.",
						"japanese": "真実と向き合う時だ。",
						"chinese": "是时候面对真相了。",
						"french": "Il est temps d'affronter la vérité.",
						"spanish": "Es hora de afrontar la verdad.",
						"vietnamese": "Đã đến lúc đối mặt với sự thật.",
						"thai": "ถึงเวลาเผชิญหน้ากับความจริงแล้ว.",
						"hindi": "सच का सामना करने का समय आ गया है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 고통은… 끝나지 않아. 내가 곧 숲이니까.",
						"english": "This pain… will not end. For I am the forest itself.",
						"japanese": "この苦痛は… 終わらない。私が森そのものだからだ。",
						"chinese": "这份痛苦… 不会结束。因为我就是森林。",
						"french": "Cette douleur… ne finira pas. Car je suis la forêt elle-même.",
						"spanish": "Este dolor… no terminará. Porque yo soy el bosque.",
						"vietnamese": "Nỗi đau này… sẽ không kết thúc. Bởi vì ta chính là khu rừng.",
						"thai": "ความเจ็บปวดนี้… จะไม่มีวันสิ้นสุด เพราะข้าคือป่าเอง.",
						"hindi": "यह पीड़ा... समाप्त नहीं होगी। क्योंकि मैं ही वन हूँ।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 숲은… 숨 쉬고 있어.",
						"english": "...It's not over yet. The forest... is still breathing.",
						"japanese": "…まだ終わっていない。森は… 息をしている。",
						"chinese": "…还没有结束。森林… 仍在呼吸。",
						"french": "...Ce n'est pas encore fini. La forêt... respire encore.",
						"spanish": "...Todavía no ha terminado. El bosque... sigue respirando.",
						"vietnamese": "…Chưa kết thúc đâu. Khu rừng… vẫn đang thở.",
						"thai": "…ยังไม่จบ ป่า… ยังคงหายใจอยู่.",
						"hindi": "...यह अभी खत्म नहीं हुआ है। वन... अभी भी साँस ले रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "fern",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "여왕의 고통은 끝났지만… 숲의 기억은 여전히 살아있어.",
						"english": "The Queen's pain has ended... but the forest's memories still live on.",
						"japanese": "女王の苦痛は終わったが… 森の記憶はまだ生きている。",
						"chinese": "女王的痛苦结束了… 但森林的记忆依然存在。",
						"french": "La douleur de la Reine est terminée… mais les souvenirs de la forêt vivent toujours.",
						"spanish": "El dolor de la Reina ha terminado… pero los recuerdos del bosque aún viven.",
						"vietnamese": "Nỗi đau của Nữ hoàng đã kết thúc… nhưng ký ức của khu rừng vẫn còn sống.",
						"thai": "ความเจ็บปวดของราชินีสิ้นสุดลงแล้ว… แต่ความทรงจำของป่ายังคงมีชีวิต.",
						"hindi": "रानी की पीड़ा समाप्त हो गई है... लेकिन वन की स्मृतियाँ अभी भी जीवित हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "과거의 속삭임은 멈췄지만, 숲은 또 다른 진실을 감추고 있었다.",
						"english": "The whispers of the past ceased, but the forest concealed another truth.",
						"japanese": "過去の囁きは止んだが、森は別の真実を隠していた。",
						"chinese": "过去的低语停止了，但森林隐藏着另一个真相。",
						"french": "Les murmures du passé cessèrent, mais la forêt cachait une autre vérité.",
						"spanish": "Los susurros del pasado cesaron, pero el bosque ocultaba otra verdad.",
						"vietnamese": "Những lời thì thầm của quá khứ đã ngưng, nhưng khu rừng lại che giấu một sự thật khác.",
						"thai": "เสียงกระซิบจากอดีตหยุดลงแล้ว แต่ป่ายังคงซ่อนความจริงอีกอย่างไว้.",
						"hindi": "अतीत की फुसफुसाहटें थम गईं, लेकिन वन ने एक और सच छिपा रखा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 고통은 영원히 반복될 것이다.",
						"english": "Your suffering will repeat eternally.",
						"japanese": "お前たちの苦痛は永遠に繰り返されるだろう。",
						"chinese": "你们的痛苦将永无止境地重复。",
						"french": "Votre souffrance se répétera éternellement.",
						"spanish": "Vuestro sufrimiento se repetirá eternamente.",
						"vietnamese": "Nỗi đau của các ngươi sẽ lặp lại vĩnh viễn.",
						"thai": "ความเจ็บปวดของพวกเจ้าจะดำเนินต่อไปชั่วนิรันดร์",
						"hindi": "तुम्हारा दुख हमेशा के लिए दोहराया जाएगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…우리는 여기서 멈추지 않아.",
						"english": "...We won't stop here.",
						"japanese": "…我々はここで止まらない。",
						"chinese": "...我们不会止步于此。",
						"french": "...Nous ne nous arrêterons pas ici.",
						"spanish": "...No nos detendremos aquí.",
						"vietnamese": "...Chúng ta sẽ không dừng lại ở đây.",
						"thai": "...เราจะไม่หยุดแค่นี้",
						"hindi": "...हम यहाँ नहीं रुकेंगे।"
					}
				},
				{
					"action": "enter",
					"speaker": "fern",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "…기록은, 아직 끝나지 않았다.",
						"english": "...The record isn't over yet.",
						"japanese": "…記録は、まだ終わっていない。",
						"chinese": "...记录，尚未结束。",
						"french": "...Le registre n'est pas encore terminé.",
						"spanish": "...El registro aún no ha terminado.",
						"vietnamese": "...Ghi chép, vẫn chưa kết thúc.",
						"thai": "...บันทึกยังไม่จบลง",
						"hindi": "...रिकॉर्ड अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 중심부. 거대한 그림자가 서서히 모습을 드러냈다.",
						"english": "The heart of the forest. A colossal shadow slowly revealed itself.",
						"japanese": "森の中心部。巨大な影がゆっくりと姿を現した。",
						"chinese": "森林的中心。一道巨大的阴影渐渐显现。",
						"french": "Au cœur de la forêt. Une ombre colossale apparut lentement.",
						"spanish": "El centro del bosque. Una sombra colosal se reveló lentamente.",
						"vietnamese": "Trung tâm khu rừng. Một bóng đen khổng lồ từ từ hiện hình.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาค่อยๆ ปรากฏกาย.",
						"hindi": "वन का केंद्र। एक विशाल छाया धीरे-धीरे प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 나의 안식처를 더럽히는가.",
						"english": "How dare you... defile my sanctuary.",
						"japanese": "よくも… 私の安息の地を汚すか。",
						"chinese": "竟敢… 玷污我的安息之所。",
						"french": "Comment osez-vous… souiller mon sanctuaire.",
						"spanish": "¿Cómo osas… profanar mi santuario?",
						"vietnamese": "Ngươi dám… làm ô uế nơi an nghỉ của ta.",
						"thai": "บังอาจ… มาแปดเปื้อนที่พำนักของข้าหรือ.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे अभयारण्य को अपवित्र करने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가… 이 숲의 주인인가.",
						"english": "Are you… the master of this forest?",
						"japanese": "お前が… この森の主か。",
						"chinese": "你… 是这片森林的主人吗？",
						"french": "Êtes-vous… le maître de cette forêt ?",
						"spanish": "¿Eres tú… el amo de este bosque?",
						"vietnamese": "Ngươi… là chủ nhân của khu rừng này sao?",
						"thai": "เจ้า… คือเจ้าของป่านี้หรือ.",
						"hindi": "क्या तुम... इस वन के स्वामी हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "고통을 이해하지 못하는 자들이여. 너희도 곧 숲의 일부가 되리라.",
						"english": "Those who do not understand pain. You too shall soon become one with the forest.",
						"japanese": "苦痛を理解せぬ者たちよ。お前たちもすぐに森の一部となるだろう。",
						"chinese": "不理解痛苦之人。你们很快也将成为森林的一部分。",
						"french": "Ceux qui ne comprennent pas la douleur. Vous aussi, vous deviendrez bientôt une partie de la forêt.",
						"spanish": "Aquellos que no entienden el dolor. Vosotros también os convertiréis pronto en parte del bosque.",
						"vietnamese": "Những kẻ không hiểu nỗi đau. Các ngươi cũng sẽ sớm trở thành một phần của khu rừng.",
						"thai": "ผู้ที่ไม่เข้าใจความเจ็บปวด พวกเจ้าเองก็จะกลายเป็นส่วนหนึ่งของป่าในไม่ช้า.",
						"hindi": "जो पीड़ा नहीं समझते। तुम भी जल्द ही वन का एक हिस्सा बन जाओगे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
