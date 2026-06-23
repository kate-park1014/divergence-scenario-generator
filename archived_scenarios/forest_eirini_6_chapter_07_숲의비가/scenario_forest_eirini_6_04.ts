export const scenario_forest_eirini_6_04 = {
	"scenario_id": "forest_eirini_6_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 침묵은 더욱 깊어졌다.",
			"생명조차 거부하는 듯, 텅 빈 공간.",
			"그곳에서 과거의 비극이 속삭였다.",
			"그리고, 새로운 연민이 피어났다."
		],
		"english": [
			"The forest's silence deepened.",
			"An empty space, as if rejecting life itself.",
			"There, the tragedy of the past whispered.",
			"And, a new compassion bloomed."
		],
		"japanese": [
			"森の静寂はさらに深まった。",
			"生命さえ拒むかのような、空っぽの空間。",
			"そこでは、過去の悲劇が囁いていた。",
			"そして、新たな憐憫が芽生えた。"
		],
		"chinese": [
			"森林的寂静更加深沉了。",
			"一个空旷的空间，仿佛拒绝一切生命。",
			"在那里，过去的悲剧在低语。",
			"并且，新的怜悯萌生了。"
		],
		"french": [
			"Le silence de la forêt s'épaississait.",
			"Un espace vide, comme s'il refusait toute vie.",
			"Là, la tragédie du passé murmurait.",
			"Et, une nouvelle compassion s'épanouissait."
		],
		"spanish": [
			"El silencio del bosque se hizo más profundo.",
			"Un espacio vacío, como si rechazara la vida misma.",
			"Allí, la tragedia del pasado susurraba.",
			"Y, una nueva compasión floreció."
		],
		"vietnamese": [
			"Sự tĩnh lặng của rừng càng thêm sâu sắc.",
			"Một không gian trống rỗng, như thể từ chối cả sự sống.",
			"Ở đó, bi kịch của quá khứ thì thầm.",
			"Và, một lòng trắc ẩn mới đã nở rộ."
		],
		"thai": [
			"ความเงียบของป่าลึกซึ้งยิ่งขึ้น",
			"พื้นที่ว่างเปล่า ราวกับปฏิเสธแม้กระทั่งชีวิต",
			"ณ ที่นั้น โศกนาฏกรรมในอดีตกระซิบกระซาบ",
			"และความเห็นอกเห็นใจครั้งใหม่ก็ผลิบาน"
		],
		"hindi": [
			"जंगल की खामोशी और गहरी हो गई।",
			"एक खाली जगह, मानो जीवन को भी नकारती हुई।",
			"वहाँ, अतीत की त्रासदी फुसफुसा रही थी।",
			"और, एक नई करुणा खिल उठी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 숨결을 멈춘 듯 고요했다. 죽은 듯 비어 있는 공간.",
						"english": "The forest was silent, as if holding its breath. An empty space, as if dead.",
						"japanese": "森は息を潜めたように静かだった。死んだように空っぽの空間。",
						"chinese": "森林寂静无声，仿佛屏住了呼吸。一个死寂空旷的空间。",
						"french": "La forêt était silencieuse, comme si elle retenait son souffle. Un espace vide, comme mort.",
						"spanish": "El bosque estaba en silencio, como si contuviera la respiración. Un espacio vacío, como muerto.",
						"vietnamese": "Rừng im lặng như nín thở. Một không gian trống rỗng như chết.",
						"thai": "ป่าเงียบสงบราวกับหยุดหายใจ พื้นที่ว่างเปล่าราวกับความตาย",
						"hindi": "जंगल खामोश था, मानो उसने साँस रोक रखी हो। एक खाली जगह, मानो मुर्दा हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여긴… 왜 이렇게 아무것도 없지?",
						"english": "Here... why is there nothing?",
						"japanese": "ここは…なぜこんなにも何もないんだ？",
						"chinese": "这里…为什么什么都没有？",
						"french": "Ici… pourquoi n'y a-t-il rien ?",
						"spanish": "¿Aquí… por qué no hay nada?",
						"vietnamese": "Ở đây… sao lại không có gì cả?",
						"thai": "ที่นี่… ทำไมถึงไม่มีอะไรเลย?",
						"hindi": "यहाँ… क्यों कुछ भी नहीं है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 오지 마. 너희가 알 필요 없는 곳이야.",
						"english": "Don't come any deeper. This is a place you don't need to know about.",
						"japanese": "これ以上深入りするな。お前たちが知る必要のない場所だ。",
						"chinese": "别再深入了。这里不是你们该知道的地方。",
						"french": "Ne venez pas plus loin. C'est un endroit que vous n'avez pas besoin de connaître.",
						"spanish": "No vengáis más profundo. Este es un lugar que no debéis conocer.",
						"vietnamese": "Đừng đi sâu hơn nữa. Đây là nơi các ngươi không cần biết.",
						"thai": "อย่าเข้ามาลึกไปกว่านี้ ที่นี่ไม่ใช่ที่ที่พวกเจ้าควรรู้",
						"hindi": "और गहरा मत आओ। यह वो जगह है जिसके बारे में तुम्हें जानने की ज़रूरत नहीं।"
					},
					"emotion": "sad",
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "왜? 뭔가 숨기고 있어?",
						"english": "Why? Are you hiding something?",
						"japanese": "なぜ？何か隠しているのか？",
						"chinese": "为什么？你藏了什么？",
						"french": "Pourquoi ? Tu caches quelque chose ?",
						"spanish": "¿Por qué? ¿Estás ocultando algo?",
						"vietnamese": "Tại sao? Ngươi đang giấu điều gì sao?",
						"thai": "ทำไม? เจ้ากำลังซ่อนอะไรอยู่หรือเปล่า?",
						"hindi": "क्यों? कुछ छुपा रहे हो क्या?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "여기는… 고통이 묻힌 곳이다.",
						"english": "This is… where pain is buried.",
						"japanese": "ここは…苦痛が埋められた場所だ。",
						"chinese": "这里是…痛苦埋藏之地。",
						"french": "Ici… est l'endroit où la douleur est enterrée.",
						"spanish": "Aquí es… donde el dolor está enterrado.",
						"vietnamese": "Đây là… nơi chôn giấu nỗi đau.",
						"thai": "ที่นี่คือ… ที่ที่ความเจ็บปวดถูกฝังไว้",
						"hindi": "यह… वो जगह है जहाँ दर्द दफ़न है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아직도 떠나지 않았군.",
						"english": "You still haven't left.",
						"japanese": "まだ去っていないようだな。",
						"chinese": "你们还没离开啊。",
						"french": "Vous n'êtes toujours pas partis.",
						"spanish": "Todavía no os habéis ido.",
						"vietnamese": "Các ngươi vẫn chưa rời đi sao.",
						"thai": "พวกเจ้ายังไม่ไปไหน",
						"hindi": "तुम अभी तक नहीं गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 숲이… 아파하는 것 같아.",
						"english": "This forest… it seems to be in pain.",
						"japanese": "この森は…苦しんでいるようだ。",
						"chinese": "这片森林…好像很痛苦。",
						"french": "Cette forêt… elle semble souffrir.",
						"spanish": "Este bosque… parece estar sufriendo.",
						"vietnamese": "Khu rừng này… dường như đang đau đớn.",
						"thai": "ป่านี้… ดูเหมือนกำลังเจ็บปวด",
						"hindi": "यह जंगल… दर्द में लग रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희 인간이 뭘 안다고.",
						"english": "What would you humans know?",
						"japanese": "お前たち人間が何を知っているというのだ。",
						"chinese": "你们人类懂什么？",
						"french": "Qu'en savez-vous, vous les humains ?",
						"spanish": "¿Qué sabríais vosotros, los humanos?",
						"vietnamese": "Con người các ngươi thì biết gì chứ.",
						"thai": "พวกมนุษย์อย่างพวกแกจะไปรู้อะไร",
						"hindi": "तुम इंसानों को क्या पता।"
					},
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…그럼 너는 알아? 이 침묵의 이유를?",
						"english": "…Then do *you* know? The reason for this silence?",
						"japanese": "…じゃあ、お前は知っているのか？この沈黙の理由を？",
						"chinese": "…那你呢？你知道这沉默的原因吗？",
						"french": "…Alors, toi, tu sais ? La raison de ce silence ?",
						"spanish": "…Entonces, ¿tú sí sabes? ¿La razón de este silencio?",
						"vietnamese": "…Vậy ngươi có biết không? Lý do của sự im lặng này?",
						"thai": "…แล้วแกจะรู้เหรอ? เหตุผลของความเงียบนี้?",
						"hindi": "…तो क्या तुम्हें पता है? इस खामोशी की वजह?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 침묵은… 숲의 슬픔이야. 오래전 모든 것을 잃은 슬픔.",
						"english": "This silence is… the forest's sorrow. The sorrow of losing everything, long ago.",
						"japanese": "この沈黙は…森の悲しみだ。遠い昔、全てを失った悲しみ。",
						"chinese": "这沉默是…森林的悲伤。很久以前失去一切的悲伤。",
						"french": "Ce silence est… la tristesse de la forêt. La tristesse d'avoir tout perdu, il y a longtemps.",
						"spanish": "Este silencio es… la tristeza del bosque. La tristeza de haberlo perdido todo, hace mucho tiempo.",
						"vietnamese": "Sự im lặng này… là nỗi buồn của khu rừng. Nỗi buồn vì mất đi tất cả, từ rất lâu rồi.",
						"thai": "ความเงียบนี้คือ… ความเศร้าของป่า ความเศร้าของการสูญเสียทุกสิ่งไปเมื่อนานมาแล้ว",
						"hindi": "यह खामोशी… जंगल का दुख है। बहुत पहले सब कुछ खो देने का दुख।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivy",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아마존족… 강인했던 숲의 부족.",
						"english": "The Amazons… the forest's mighty tribe.",
						"japanese": "アマゾン族…かつて強靭だった森の部族。",
						"chinese": "亚马逊族…森林中强大的部落。",
						"french": "Les Amazones… la tribu puissante de la forêt.",
						"spanish": "Las Amazonas… la tribu fuerte del bosque.",
						"vietnamese": "Bộ tộc Amazon… bộ tộc hùng mạnh của khu rừng.",
						"thai": "ชาวแอมะซอน… เผ่าพันธุ์ที่แข็งแกร่งแห่งป่า",
						"hindi": "अमेज़न जनजाति… जंगल की शक्तिशाली जनजाति।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그들이 사라졌다고 들었어.",
						"english": "I heard they vanished.",
						"japanese": "彼らは姿を消したと聞いた。",
						"chinese": "我听说他们消失了。",
						"french": "J'ai entendu dire qu'ils avaient disparu.",
						"spanish": "Oí que desaparecieron.",
						"vietnamese": "Tôi nghe nói họ đã biến mất.",
						"thai": "ได้ยินว่าพวกเขาหายสาบสูญไปแล้ว",
						"hindi": "मैंने सुना वे गायब हो गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "힘을 쫓다… 어둠에 잠식됐지. 그들의 잃어버린 마음이… 저 존재가 된 거야.",
						"english": "Chasing power… they were consumed by darkness. Their lost hearts… became that being.",
						"japanese": "力を追い求め…闇に侵食されたのだ。彼らの失われた心が…あの存在になった。",
						"chinese": "追求力量…被黑暗吞噬了。他们失去的心…变成了那个存在。",
						"french": "À force de chercher la puissance… ils ont été consumés par les ténèbres. Leurs cœurs perdus… sont devenus cette entité.",
						"spanish": "Persiguiendo el poder… fueron consumidos por la oscuridad. Sus corazones perdidos… se convirtieron en esa entidad.",
						"vietnamese": "Theo đuổi sức mạnh… họ bị bóng tối nuốt chửng. Trái tim lạc lối của họ… đã trở thành thực thể đó.",
						"thai": "มัวแต่ไล่ตามพลัง… จึงถูกความมืดเข้าครอบงำ จิตใจที่หลงหายของพวกเขา… กลายเป็นสิ่งนั้น",
						"hindi": "शक्ति का पीछा करते हुए… वे अंधेरे में समा गए। उनके खोए हुए दिल… वह सत्ता बन गए।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 저 존재도 피해자란 말이야?",
						"english": "Then… that being is also a victim?",
						"japanese": "じゃあ…あの存在も被害者だというのか？",
						"chinese": "那么…那个存在也是受害者吗？",
						"french": "Alors… cette entité est aussi une victime ?",
						"spanish": "¿Entonces… esa entidad también es una víctima?",
						"vietnamese": "Vậy… thực thể đó cũng là nạn nhân sao?",
						"thai": "ถ้าอย่างนั้น… สิ่งนั้นก็เป็นเหยื่อด้วยเหรอ?",
						"hindi": "तो… क्या वह सत्ता भी एक पीड़ित है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 비극은… 그렇게 시작되었다.",
						"english": "The forest's tragedy… began that way.",
						"japanese": "森の悲劇は…そうして始まったのだ。",
						"chinese": "森林的悲剧…就这样开始了。",
						"french": "La tragédie de la forêt… a commencé ainsi.",
						"spanish": "La tragedia del bosque… comenzó así.",
						"vietnamese": "Bi kịch của khu rừng… đã bắt đầu như thế.",
						"thai": "โศกนาฏกรรมของป่า… เริ่มต้นขึ้นเช่นนั้น",
						"hindi": "जंगल की त्रासदी… ऐसे शुरू हुई।"
					},
					"emotion": "base",
					"speaker": "ivy"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "더 이상은 못 가. 저 안은… 고통 그 자체야.",
						"english": "I can't go any further. Inside there… is pain itself.",
						"japanese": "これ以上は行けない。あの奥は…苦痛そのものだ。",
						"chinese": "不能再往前了。那里面…是痛苦本身。",
						"french": "Je ne peux pas aller plus loin. Là-dedans… c'est la douleur elle-même.",
						"spanish": "No puedo ir más lejos. Ahí dentro… es el dolor mismo.",
						"vietnamese": "Không thể đi xa hơn được nữa. Bên trong đó… là nỗi đau tột cùng.",
						"thai": "ไปต่อไม่ไหวแล้ว ข้างในนั้น… คือความเจ็บปวดล้วนๆ",
						"hindi": "मैं अब और आगे नहीं जा सकता। वहाँ अंदर… सिर्फ दर्द है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막아야 해. 더 이상 숲이 아프지 않게.",
						"english": "We must stop it. The forest must not suffer anymore.",
						"japanese": "止めなければ。これ以上森が苦しまないように。",
						"chinese": "必须阻止它。不能让森林再受苦了。",
						"french": "Il faut l'arrêter. Pour que la forêt ne souffre plus.",
						"spanish": "Debemos detenerlo. Para que el bosque no sufra más.",
						"vietnamese": "Phải ngăn chặn nó. Để rừng không đau khổ nữa.",
						"thai": "ต้องหยุดมัน ไม่ให้ป่าต้องทนทุกข์อีกต่อไป",
						"hindi": "हमें इसे रोकना होगा। ताकि वन को और कष्ट न हो।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"content": {
						"korean": "너의 눈빛에서… 진심이 보여.",
						"english": "In your eyes... I see your true heart.",
						"japanese": "君の瞳に… 真心が見える。",
						"chinese": "你的眼神中… 我看到了真心。",
						"french": "Dans tes yeux... je vois de la sincérité.",
						"spanish": "En tus ojos... veo sinceridad.",
						"vietnamese": "Trong ánh mắt của ngươi... ta thấy sự chân thành.",
						"thai": "ในดวงตาของเจ้า... ข้าเห็นความจริงใจ",
						"hindi": "तुम्हारी आँखों में… सच्चाई दिखती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이쪽으로 가면… 그에게 더 가까이 갈 수 있을 거야. 하지만 조심해. 그는 이미… 돌이킬 수 없어.",
						"english": "This way leads closer to him. But be careful. He's already... too far gone.",
						"japanese": "この道を行けば… 彼に近づけるだろう。だが気をつけろ。彼はもう… 元には戻せない。",
						"chinese": "走这条路… 你会离他更近。但要小心。他已经… 无可挽回了。",
						"french": "Par ici... tu pourras te rapprocher de lui. Mais sois prudent. Il est déjà... irrécupérable.",
						"spanish": "Por aquí... podrás acercarte a él. Pero ten cuidado. Él ya está... más allá de la redención.",
						"vietnamese": "Đi đường này... ngươi sẽ đến gần hắn hơn. Nhưng hãy cẩn thận. Hắn đã... không thể cứu vãn được nữa rồi.",
						"thai": "ถ้าไปทางนี้... เจ้าจะเข้าใกล้เขามากขึ้น แต่จงระวัง เขาได้... เกินเยียวยาแล้ว",
						"hindi": "इस रास्ते से... तुम उसके करीब जा सकते हो। लेकिन सावधान रहना। वह पहले ही... बहुत दूर जा चुका है।"
					},
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고마워, 아이비.",
						"english": "Thank you, Ivy.",
						"japanese": "ありがとう、アイビー。",
						"chinese": "谢谢你，艾维。",
						"french": "Merci, Ivy.",
						"spanish": "Gracias, Ivy.",
						"vietnamese": "Cảm ơn, Ivy.",
						"thai": "ขอบคุณนะ, ไอวี่",
						"hindi": "धन्यवाद, आइवी।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "비극의 심장부. 그곳에서 거대한 그림자가 그들을 응시했다.",
						"english": "The heart of tragedy. There, a colossal shadow gazed upon them.",
						"japanese": "悲劇の核心。そこで、巨大な影が彼らを凝視していた。",
						"chinese": "悲剧的核心。在那里，一个巨大的阴影凝视着他们。",
						"french": "Au cœur de la tragédie. Là, une ombre colossale les fixait.",
						"spanish": "El corazón de la tragedia. Allí, una sombra colosal los observaba.",
						"vietnamese": "Trung tâm của bi kịch. Ở đó, một bóng tối khổng lồ đang nhìn chằm chằm vào họ.",
						"thai": "ณ ใจกลางแห่งโศกนาฏกรรม ที่นั่น เงาร่างมหึมากำลังจ้องมองพวกเขา",
						"hindi": " त्रासदी के हृदय में। वहाँ, एक विशाल छाया उन्हें घूर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 것들. 내 고통을 막을 수 없어.",
						"english": "Fools. You cannot stop my suffering.",
						"japanese": "愚かな者たちめ。私の苦しみを止めることなどできぬ。",
						"chinese": "愚蠢的东西。你们无法阻止我的痛苦。",
						"french": "Imbéciles. Vous ne pouvez pas arrêter ma souffrance.",
						"spanish": "Necios. No podéis detener mi sufrimiento.",
						"vietnamese": "Đồ ngu xuẩn. Các ngươi không thể ngăn cản nỗi đau của ta.",
						"thai": "พวกโง่เอ๊ย! พวกเจ้าหยุดความเจ็บปวดของข้าไม่ได้หรอก",
						"hindi": "मूर्खों। तुम मेरे दर्द को रोक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 고통이… 이 숲을 망치고 있어!",
						"english": "Your suffering... it's destroying this forest!",
						"japanese": "あなたの苦しみが… この森を破滅させている！",
						"chinese": "你的痛苦… 正在摧毁这片森林！",
						"french": "Ta souffrance... détruit cette forêt !",
						"spanish": "¡Tu sufrimiento... está destruyendo este bosque!",
						"vietnamese": "Nỗi đau của ngươi... đang hủy hoại khu rừng này!",
						"thai": "ความเจ็บปวดของแก... กำลังทำลายป่านี้!",
						"hindi": "तुम्हारा दर्द… इस जंगल को बर्बाद कर रहा है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내가 겪은 고통에 비하면… 아무것도 아니야. 모두 사라져라.",
						"english": "Compared to the suffering I've endured... it's nothing. Vanish, all of you.",
						"japanese": "私が経験した苦痛に比べれば… 何でもない。すべて消え去れ。",
						"chinese": "和我所承受的痛苦相比… 这不算什么。都给我消失吧。",
						"french": "Comparé à la souffrance que j'ai endurée... ce n'est rien. Disparaissez tous.",
						"spanish": "Comparado con el sufrimiento que he soportado... no es nada. Desapareced todos.",
						"vietnamese": "So với nỗi đau ta đã trải qua... chẳng là gì cả. Tất cả hãy biến mất đi.",
						"thai": "เทียบกับความเจ็บปวดที่ข้าทนมา... มันไม่มีอะไรเลย จงหายไปให้หมด",
						"hindi": "मैंने जो पीड़ा झेली है… उसके आगे यह कुछ भी नहीं। सब मिट जाओ।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "비극의 그림자가 마침내 무너졌다. 숲은 잠시 숨을 고르는 듯했다.",
						"english": "The shadow of tragedy finally fell. The forest seemed to catch its breath.",
						"japanese": "悲劇の影がついに崩れ落ちた。森はしばし息を潜めるようだった。",
						"chinese": "悲剧的阴影终于消散了。森林似乎暂时松了口气。",
						"french": "L'ombre de la tragédie est enfin tombée. La forêt sembla reprendre son souffle.",
						"spanish": "La sombra de la tragedia finalmente cayó. El bosque pareció recuperar el aliento.",
						"vietnamese": "Bóng tối của bi kịch cuối cùng đã sụp đổ. Khu rừng dường như đang thở phào nhẹ nhõm.",
						"thai": "เงาแห่งโศกนาฏกรรมล่มสลายในที่สุด ป่าดูเหมือนจะหยุดพักหายใจชั่วขณะ",
						"hindi": " त्रासदी की छाया अंततः ढह गई। जंगल ने मानो राहत की सांस ली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국… 이렇게 되는군. 하지만… 이건 끝이 아니야. 더 큰 어둠이… 숲을 기다려.",
						"english": "So this is how it ends... But this isn't the end. A greater darkness... awaits the forest.",
						"japanese": "結局… こうなるのか。だが… これは終わりではない。さらなる闇が… 森を待ち受けている。",
						"chinese": "终究… 还是这样了。但是… 这不是结束。更大的黑暗… 正在等待着森林。",
						"french": "C'est donc ainsi que ça se termine... Mais ce n'est pas la fin. Une obscurité plus grande... attend la forêt.",
						"spanish": "Así es como termina... Pero esto no es el final. Una oscuridad mayor... espera al bosque.",
						"vietnamese": "Cuối cùng... cũng thành ra thế này. Nhưng... đây không phải là kết thúc. Một bóng tối lớn hơn... đang chờ đợi khu rừng.",
						"thai": "ในที่สุด... ก็เป็นเช่นนี้เอง แต่... นี่ไม่ใช่จุดจบ ความมืดมิดที่ยิ่งใหญ่กว่า... กำลังรอคอยป่าอยู่",
						"hindi": "आखिरकार… यही होना था। लेकिन… यह अंत नहीं है। एक गहरा अँधेरा… जंगल का इंतजार कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 큰 어둠? 누가… 뭘 기다린다는 거야!",
						"english": "A greater darkness? Who... what are they waiting for?!",
						"japanese": "「さらなる闇？誰が…何を待っているの！」",
						"chinese": "「更大的黑暗？谁…在等什么！」",
						"french": "« Une plus grande obscurité ? Qui… qu'attendent-ils ?! »",
						"spanish": "« ¿Una oscuridad mayor? ¿Quién… qué están esperando?! »",
						"vietnamese": "Một bóng tối lớn hơn? Ai... đang đợi điều gì vậy?!",
						"thai": "ความมืดมิดที่ยิ่งใหญ่กว่า? ใคร...กำลังรออะไรอยู่!",
						"hindi": "एक बड़ा अँधेरा? कौन… क्या इंतज़ार कर रहा है!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "…잘했어. 하지만… 아직 끝나지 않았어.",
						"english": "...Well done. But... it's not over yet.",
						"japanese": "「…よくやった。しかし…まだ終わってない。」",
						"chinese": "「…干得好。但是…还没结束。」",
						"french": "« …Bien joué. Mais… ce n'est pas encore fini. »",
						"spanish": "« …Bien hecho. Pero… aún no ha terminado. »",
						"vietnamese": "...Làm tốt lắm. Nhưng... vẫn chưa kết thúc đâu.",
						"thai": "...ทำได้ดีมาก. แต่...ยังไม่จบแค่นี้.",
						"hindi": "…शाबाश। लेकिन… अभी ख़त्म नहीं हुआ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 고통은 멈췄지만, 모든 의문이 해소된 것은 아니었다. 진정한 흑막의 그림자가 여전히 숲을 배회하고 있었다.",
						"english": "The forest's suffering ceased, yet not all questions were answered. The shadow of the true mastermind still loomed over the forest.",
						"japanese": "「森の苦しみは止まったが、すべての疑問が解けたわけではなかった。真の黒幕の影は、いまだ森をさまよっていた。」",
						"chinese": "「森林的痛苦停止了，但并非所有疑问都得到了解答。幕后真凶的阴影仍在森林中徘徊。」",
						"french": "« La souffrance de la forêt cessa, mais toutes les questions n'étaient pas résolues. L'ombre du véritable cerveau planait toujours sur la forêt. »",
						"spanish": "« El sufrimiento del bosque cesó, pero no todas las preguntas fueron respondidas. La sombra del verdadero cerebro aún acechaba el bosque. »",
						"vietnamese": "Nỗi đau của rừng đã dừng lại, nhưng không phải tất cả các câu hỏi đều được giải đáp. Bóng tối của kẻ chủ mưu thực sự vẫn còn lảng vảng trong rừng.",
						"thai": "ความเจ็บปวดของป่าสิ้นสุดลง แต่คำถามทั้งหมดกลับยังไม่คลี่คลาย. เงาของผู้อยู่เบื้องหลังที่แท้จริงยังคงวนเวียนอยู่ในป่า.",
						"hindi": "जंगल का दर्द थम गया, फिर भी सभी सवालों के जवाब नहीं मिले थे। असली मास्टरमाइंड की परछाई अभी भी जंगल में मंडरा रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 힘 앞에, 탐험대는 다시 한번 쓰러졌다.",
						"english": "Before the immense power, the expedition team fell once more.",
						"japanese": "「巨大な力の前に、探検隊は再び倒れた。」",
						"chinese": "「在巨大的力量面前，探险队再次倒下。」",
						"french": "« Face à la puissance colossale, l'équipe d'exploration tomba une fois de plus. »",
						"spanish": "« Ante el poder inmenso, el equipo de expedición cayó una vez más. »",
						"vietnamese": "Trước sức mạnh khổng lồ, đội thám hiểm một lần nữa gục ngã.",
						"thai": "ต่อหน้าพลังอันมหาศาล, ทีมสำรวจล้มลงอีกครั้ง.",
						"hindi": "असीम शक्ति के सामने, अन्वेषण दल एक बार फिर गिर गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 고통은 영원해. 너희도… 이 숲의 일부가 될 뿐.",
						"english": "My suffering is eternal. You too... will merely become part of this forest.",
						"japanese": "「私の苦痛は永遠だ。お前たちも…この森の一部になるだけだ。」",
						"chinese": "「我的痛苦是永恒的。你们也…只会成为这片森林的一部分。」",
						"french": "« Ma souffrance est éternelle. Vous aussi… ne ferez que devenir une partie de cette forêt. »",
						"spanish": "« Mi sufrimiento es eterno. Vosotros también… solo os convertiréis en parte de este bosque. »",
						"vietnamese": "Nỗi đau của ta là vĩnh cửu. Các ngươi cũng... sẽ chỉ trở thành một phần của khu rừng này thôi.",
						"thai": "ความเจ็บปวดของข้าคือชั่วนิรันดร์. พวกเจ้าก็...จะได้เป็นส่วนหนึ่งของป่านี้เท่านั้น.",
						"hindi": "मेरा दर्द शाश्वत है। तुम भी… बस इस जंगल का हिस्सा बन जाओगे।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 막을 거야.",
						"english": "...It's not over yet. I will definitely stop it.",
						"japanese": "「…まだ終わってない。必ず止める。」",
						"chinese": "「…还没结束。我一定会阻止它。」",
						"french": "« …Ce n'est pas encore fini. Je l'arrêterai à tout prix. »",
						"spanish": "« …Aún no ha terminado. Lo detendré cueste lo que cueste. »",
						"vietnamese": "...Vẫn chưa kết thúc đâu. Tôi nhất định sẽ ngăn chặn nó.",
						"thai": "...ยังไม่จบแค่นี้. ฉันจะต้องหยุดมันให้ได้.",
						"hindi": "…अभी ख़त्म नहीं हुआ। मैं इसे ज़रूर रोकूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
