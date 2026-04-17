export const scenario_snowy_archduke_finn_02 = {
	"scenario_id": "snowy_archduke_finn_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Roundy": {
			"id": "actor_08",
			"name": {
				"korean": "라운디",
				"english": "Roundy",
				"japanese": "ラウンディ",
				"chinese": "朗迪",
				"french": "Roundy",
				"spanish": "Roundy",
				"vietnamese": "Roundy",
				"thai": "รา운ดี้",
				"hindi": "राउंडी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c99a7b0-5bc4-45d0-11bb-15dd86ae0700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1e7e23a7-5db4-4897-997c-e8920c4f4e00/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라가 몰아치는 설산, 작은 발자국들이 길게 이어졌다.",
						"english": "On the blizzard-swept snowy mountains, small footprints stretched far.",
						"japanese": "吹雪が吹き荒れる雪山に、小さな足跡が長く続いていた。",
						"chinese": "在暴风雪肆虐的雪山上，小小的脚印绵延不绝。",
						"french": "Dans les montagnes enneigées balayées par le blizzard, de petites empreintes s'étiraient au loin.",
						"spanish": "En las montañas nevadas azotadas por la ventisca, pequeñas huellas se extendían a lo lejos.",
						"vietnamese": "Trên ngọn núi tuyết bị bão tuyết càn quét, những dấu chân nhỏ kéo dài.",
						"thai": "บนภูเขาหิมะที่พายุหิมะพัดโหม กระจาย มีรอยเท้าเล็กๆ ทอดยาว",
						"hindi": "बर्फीले पहाड़ों पर, जहां बर्फीला तूफान चल रहा था, छोटे पदचिह्न दूर तक फैले हुए थे।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Roundy",
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Roundy",
					"content": {
						"korean": "여기가 그 '대공'이 지배한다는 곳인가?",
						"english": "Is this where that 'Grand Duke' rules?",
						"japanese": "ここが、その「大公」が支配するという場所なのか？",
						"chinese": "这里就是那个“大公”统治的地方吗？",
						"french": "Est-ce ici que règne ce 'Grand Duc' ?",
						"spanish": "¿Es aquí donde gobierna ese 'Gran Duque'?",
						"vietnamese": "Đây có phải là nơi mà 'Đại Công' cai trị không?",
						"thai": "ที่นี่คือที่ที่ 'แกรนด์ดยุก' ปกครองหรือ?",
						"hindi": "क्या यह वही जगह है जहां वह 'ग्रैंड ड्यूक' शासन करता है?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저기… 펭귄들이잖아?",
						"english": "Look... they're penguins?",
						"japanese": "あれ…ペンギンじゃないか？",
						"chinese": "看…那是企鹅吗？",
						"french": "Tiens... ce sont des pingouins ?",
						"spanish": "Mira... ¿son pingüinos?",
						"vietnamese": "Nhìn kìa... chúng là chim cánh cụt?",
						"thai": "นั่น... พวกเพนกวินเหรอ?",
						"hindi": "देखो... वे पेंग्विन हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "카드보드 팻말을 든 펭귄 무리가 어정쩡하게 서 있었다.",
						"english": "A group of penguins holding cardboard signs stood awkwardly.",
						"japanese": "段ボールの看板を持ったペンギンたちが、ぎこちなく立っていた。",
						"chinese": "一群企鹅举着纸板牌，笨拙地站着。",
						"french": "Un groupe de pingouins tenant des pancartes en carton se tenait maladroitement.",
						"spanish": "Un grupo de pingüinos con letreros de cartón estaba parado torpemente.",
						"vietnamese": "Một nhóm chim cánh cụt cầm biển hiệu bằng bìa cứng đứng một cách lúng túng.",
						"thai": "กลุ่มเพนกวินที่ถือป้ายกระดาษแข็งยืนอยู่แบบเก้ๆ กังๆ",
						"hindi": "गत्ते के संकेत पकड़े हुए पेंग्विनों का एक समूह अजीब तरह से खड़ा था।"
					}
				},
				{
					"content": {
						"korean": "'대공은… 무자비하다!' (쭈뼛)",
						"english": "'The Grand Duke... is ruthless!' (Hesitantly)",
						"japanese": "「大公は…無慈悲だ！」(おずおずと)",
						"chinese": "“大公…很无情！” (畏缩地)",
						"french": "« Le Grand Duc... est impitoyable ! » (Hésitant)",
						"spanish": "«¡El Gran Duque... es despiadado!» (Dubitativo)",
						"vietnamese": "'Đại Công... thật tàn nhẫn!' (Rụt rè)",
						"thai": "'แกรนด์ดยุก... ไร้ความปรานี!' (อย่างลังเล)",
						"hindi": "'ग्रैंड ड्यूक... निर्दयी है!' (झिझकते हुए)"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'얼음 처형을… 조… 좋아한다!' (눈치 봄)",
						"english": "'I… I l-like… ice execution!' (Glances nervously)",
						"japanese": "「氷の処刑が… す、好きだ！」(周りを伺う)",
						"chinese": "“我…我喜欢…冰之处决！”(环顾四周)",
						"french": "«J'… j'aime… l'exécution par la glace !» (Jette un coup d'œil alentour)",
						"spanish": "«¡M-me… gusta… la ejecución de hielo!» (Mira a su alrededor con cautela)",
						"vietnamese": "'T-tôi… thích… hành quyết băng!' (Liếc nhìn xung quanh)",
						"thai": "'ผะ…ผมชอบ…การประหารน้ำแข็ง!' (ชำเลืองมอง)",
						"hindi": "'मु… मुझे… बर्फ़ की सज़ा पसंद है!' (चारों ओर देखता है)"
					}
				},
				{
					"content": {
						"korean": "…이 분위기… 뭐야.",
						"english": "…What is this atmosphere?",
						"japanese": "「…この雰囲気…何だ？」",
						"chinese": "“……这是什么气氛。”",
						"french": "…C'est quoi cette ambiance ?",
						"spanish": "…¿Qué es esta atmósfera?",
						"vietnamese": "…Cái không khí này… là gì vậy.",
						"thai": "…บรรยากาศนี้… มันอะไรกัน.",
						"hindi": "…ये कैसा माहौल है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "팻말 글씨도 삐뚤빼뚤… 누가 봐도 급하게 만든 거네.",
						"english": "The sign's writing is crooked… Clearly, it was made in a hurry.",
						"japanese": "「看板の字もガタガタ… 誰が見ても急いで作ったな。」",
						"chinese": "“牌子上的字也歪歪扭扭的… 谁看都知道是匆忙做的。”",
						"french": "L'écriture sur le panneau est toute de travers… C'est clairement fait à la va-vite.",
						"spanish": "La escritura del letrero está torcida… Claramente, lo hicieron con prisa.",
						"vietnamese": "Chữ trên bảng cũng xiêu vẹo… Rõ ràng là làm vội vàng.",
						"thai": "ตัวอักษรบนป้ายก็บิดเบี้ยว… ใครดูก็รู้ว่ารีบทำ.",
						"hindi": "बोर्ड पर लिखी लिखावट भी टेढ़ी-मेढ़ी है… कोई भी देखेगा तो लगेगा कि जल्दी में बनाया है।"
					},
					"emotion": "sad",
					"speaker": "Roundy",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "Roundy",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "소문이랑 너무 다른데? 무자비하다더니.",
						"english": "It's so different from the rumors, isn't it? They said he was merciless.",
						"japanese": "「噂と全然違うじゃない？ 無慈悲だって言ってたのに。」",
						"chinese": "“和传闻差太多了吧？不是说他很无情吗？”",
						"french": "C'est tellement différent des rumeurs, non ? On disait qu'il était impitoyable.",
						"spanish": "Es muy diferente a los rumores, ¿no? Decían que era despiadado.",
						"vietnamese": "Khác xa so với lời đồn nhỉ? Nghe nói hắn ta tàn nhẫn lắm mà.",
						"thai": "ต่างจากข่าวลือมากเลยนะ? เห็นว่าโหดเหี้ยมไม่ใช่เหรอ.",
						"hindi": "ये तो अफ़वाहों से बिलकुल अलग है? कहा था कि वो बेरहम है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아까 저 펭귄… 팻말 뒤에 배달 앱 전단지 붙어있었어.",
						"english": "That penguin earlier… had a delivery app flyer stuck behind the sign.",
						"japanese": "「さっきのあのペンギン… 看板の裏にデリバリーアプリのチラシ貼ってたよ。」",
						"chinese": "“刚才那只企鹅… 牌子后面贴着外卖App的传单。”",
						"french": "Ce pingouin tout à l'heure… avait un prospectus d'application de livraison collé derrière le panneau.",
						"spanish": "Ese pingüino de antes… tenía un folleto de aplicación de entrega pegado detrás del letrero.",
						"vietnamese": "Con chim cánh cụt ban nãy… có dán tờ rơi ứng dụng giao hàng phía sau tấm bảng.",
						"thai": "เจ้าเพนกวินเมื่อกี้… มีใบปลิวแอปเดลิเวอรี่ติดอยู่หลังป้าย.",
						"hindi": "वो पेंग्विन अभी… बोर्ड के पीछे डिलीवरी ऐप का फ़्लायर चिपका रहा था।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "Roundy"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "배달… 앱…?",
						"english": "Delivery… app…?",
						"japanese": "「デリバリー… アプリ…？」",
						"chinese": "“外卖……App……？”",
						"french": "Application… de livraison… ?",
						"spanish": "¿Aplicación… de entrega…?",
						"vietnamese": "Ứng dụng… giao hàng…?",
						"thai": "แอป… เดลิเวอรี่…?",
						"hindi": "डिलीवरी… ऐप…?"
					}
				},
				{
					"content": {
						"korean": "진짜 대공은 따로 있는 거 아냐? 어설프게 연극하는 느낌인데.",
						"english": "Isn't the real Grand Duke someone else? This feels like a clumsy act.",
						"japanese": "「本当の大公は別にいるんじゃない？ 下手に芝居してる感じだ。」",
						"chinese": "“真正的大公是不是另有其人？感觉像是在拙劣地演戏。”",
						"french": "Le vrai Grand Duc n'est pas quelqu'un d'autre ? On dirait une pièce de théâtre maladroite.",
						"spanish": "«¿No será que el verdadero Gran Duque es otra persona? Parece una actuación torpe.»",
						"vietnamese": "Đại Công tước thật sự có khi là người khác không? Cảm giác như đang diễn kịch vụng về vậy.",
						"thai": "ท่านแกรนด์ดยุกตัวจริงอยู่คนละคนไม่ใช่เหรอ? รู้สึกเหมือนกำลังแสดงละครแบบซุ่มซ่ามเลย.",
						"hindi": "क्या असली ग्रैंड ड्यूक कोई और नहीं है? ये तो एक भद्दा नाटक लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나도 그렇게 생각해. 뭔가 수상해.",
						"english": "I think so too. Something's suspicious.",
						"japanese": "「私もそう思う。何か怪しい。」",
						"chinese": "“我也这么觉得。总觉得有什么可疑之处。”",
						"french": "Je pense la même chose. Il y a quelque chose de suspect.",
						"spanish": "Yo también lo creo. Hay algo sospechoso.",
						"vietnamese": "Tôi cũng nghĩ vậy. Có gì đó đáng ngờ.",
						"thai": "ฉันก็คิดแบบนั้นแหละ. มีอะไรบางอย่างน่าสงสัย.",
						"hindi": "मुझे भी ऐसा ही लगता है। कुछ तो गड़बड़ है।"
					},
					"emotion": "base",
					"speaker": "Roundy",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "Roundy",
					"spot": [
						2,
						1
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저 펭귄, 계속 주위를 살피는데?",
						"english": "That penguin keeps looking around, doesn't it?",
						"japanese": "「あのペンギン、ずっと周りを伺ってるんだけど？」",
						"chinese": "“那只企鹅，一直在四处张望？”",
						"french": "Ce pingouin, il continue de regarder autour de lui, non ?",
						"spanish": "Ese pingüino, ¿no deja de mirar a su alrededor?",
						"vietnamese": "Con chim cánh cụt kia, cứ liên tục nhìn xung quanh nhỉ?",
						"thai": "เจ้าเพนกวินนั่น เอาแต่สอดส่องไปรอบ ๆ เลยนะ?",
						"hindi": "वो पेंग्विन लगातार आस-पास देख रहा है, है ना?"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아, 아니! 대공 전하의 위엄을 감시하는 중이었다!",
						"english": "Oh, no! I was just overseeing His Highness the Grand Duke's dignity!",
						"japanese": "「あ、いや！ 大公殿下の威厳を監視していたところだ！」",
						"chinese": "“啊，不！我只是在监视大公殿下的威严！”",
						"french": "«Ah, non ! Je ne faisais que surveiller la dignité de Son Altesse le Grand Duc !»",
						"spanish": "¡Ah, no! ¡Solo estaba supervisando la dignidad de Su Alteza el Gran Duque!",
						"vietnamese": "À, không! Ta chỉ đang giám sát sự uy nghiêm của Đại Công tước điện hạ thôi!",
						"thai": "อะ…ไม่ใช่! ข้ากำลังเฝ้าระวังความสง่างามของท่านแกรนด์ดยุกอยู่ต่างหาก!",
						"hindi": "अरे, नहीं! मैं तो बस महामहिम ग्रैंड ड्यूक के गरिमा की निगरानी कर रहा था!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "말투 왜 이렇게 딱딱해? 연극하는 거 너무 티 나.",
						"english": "Why so stiff? Your acting is too obvious.",
						"japanese": "口調が硬いぞ。演技がバレバレだ。",
						"chinese": "说话怎么这么生硬？演戏痕迹太明显了。",
						"french": "Pourquoi ton ton est si rigide ? On voit trop que tu joues la comédie.",
						"spanish": "¿Por qué hablas tan tieso? Se nota mucho que estás actuando.",
						"vietnamese": "Sao lời nói cứng nhắc vậy? Diễn xuất lộ liễu quá.",
						"thai": "ทำไมสำเนียงแข็งทื่อจัง? การแสดงออกชัดเจนเกินไปแล้วนะ",
						"hindi": "आपकी बोली इतनी रूखी क्यों है? यह नाटक बहुत साफ दिख रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…(식은땀)",
						"english": "...(cold sweat)",
						"japanese": "…（冷や汗）",
						"chinese": "……（冷汗）",
						"french": "...(sueur froide)",
						"spanish": "...(sudor frío)",
						"vietnamese": "…(mồ hôi lạnh)",
						"thai": "...(เหงื่อเย็น)",
						"hindi": "...(ठंडा पसीना)"
					}
				},
				{
					"speaker": "Roundy",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진짜 왕이라면 이렇게 어설프게 부하들이 연기할 리 없잖아.",
						"english": "If he were a real king, his subordinates wouldn't act so clumsily.",
						"japanese": "もし本物の王なら、部下がこんなに下手な芝居をするはずがない。",
						"chinese": "如果是真正的国王，他的手下不可能演得这么拙劣。",
						"french": "Si c'était un vrai roi, ses subordonnés ne joueraient pas si mal.",
						"spanish": "Si fuera un rey de verdad, sus subordinados no actuarían con tanta torpeza.",
						"vietnamese": "Nếu là vua thật, thuộc hạ sẽ không diễn xuất vụng về thế này.",
						"thai": "ถ้าเป็นราชาจริง ลูกน้องคงไม่แสดงได้ทื่อขนาดนี้หรอก",
						"hindi": "अगर वह असली राजा होता, तो उसके अधीनस्थ इतनी अनाड़ी एक्टिंग नहीं करते।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						1
					],
					"speaker": "Roundy",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정상에 가까워질수록, 이 모든 상황은 점점 더 우스꽝스러웠다.",
						"english": "The closer we got to the summit, the more ridiculous the situation became.",
						"japanese": "頂上に近づくにつれて、この状況はますます滑稽になっていった。",
						"chinese": "越是接近山顶，这一切就越是荒谬可笑。",
						"french": "Plus on s'approchait du sommet, plus la situation devenait ridicule.",
						"spanish": "Cuanto más nos acercábamos a la cima, más ridícula se volvía toda la situación.",
						"vietnamese": "Càng gần đến đỉnh, mọi chuyện càng trở nên nực cười.",
						"thai": "ยิ่งเข้าใกล้จุดสูงสุดเท่าไร สถานการณ์ทั้งหมดก็ยิ่งตลกขบขันมากขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे हम चोटी के करीब आते गए, यह सारी स्थिति और भी हास्यास्पद होती गई।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대공이 설산을 지배한다고? 개그 콘서트 찍나.",
						"english": "The Grand Duke rules the snow mountain? What, is this a comedy show?",
						"japanese": "大公が雪山を支配するだと？まるでコントでも撮っているのか。",
						"chinese": "大公统治着雪山？这是在拍喜剧片吗？",
						"french": "Le Grand Duc règne sur la montagne enneigée ? C'est une comédie ou quoi ?",
						"spanish": "¿El Gran Duque domina la montaña nevada? ¿Es un programa de comedia?",
						"vietnamese": "Đại công tước cai trị núi tuyết ư? Chắc đang quay hài kịch hả?",
						"thai": "แกรนด์ดยุกปกครองภูเขาหิมะ? นี่มันรายการตลกชัดๆ",
						"hindi": "महामहिम बर्फीले पहाड़ पर राज करते हैं? क्या यह कोई कॉमेडी शो है?"
					}
				},
				{
					"speaker": "Roundy",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "분명 소문은 엄숙했는데… 이건 뭐, 어설픈 동네 연극 수준이야.",
						"english": "The rumors were solemn... but this is just some clumsy local play.",
						"japanese": "噂では厳粛だったはずなのに…これはまるで、下手な町の芝居レベルだ。",
						"chinese": "明明传闻很庄重……但这算什么，拙劣的社区剧水平。",
						"french": "Les rumeurs étaient sérieuses... mais ça, c'est juste une pièce de théâtre de quartier mal jouée.",
						"spanish": "Los rumores eran solemnes... pero esto es solo una obra de teatro de barrio mal hecha.",
						"vietnamese": "Rõ ràng tin đồn rất nghiêm trọng... nhưng cái này thì, chỉ là một vở kịch nghiệp dư thôi.",
						"thai": "ข่าวลือนั่นดูเคร่งขรึม... แต่นี่มันเหมือนละครท้องถิ่นงุ่มง่ามชัดๆ",
						"hindi": "अफवाहें निश्चित रूप से गंभीर थीं... लेकिन यह तो किसी अनाड़ी स्थानीय नाटक जैसा है।"
					}
				},
				{
					"content": {
						"korean": "대체 이 산의 진짜 주인은 누구지?",
						"english": "Who is the true master of this mountain?",
						"japanese": "一体この山の本当の主は誰なんだ？",
						"chinese": "这座山真正的主人到底是谁？",
						"french": "Mais qui est le véritable maître de cette montagne ?",
						"spanish": "¿Quién es el verdadero dueño de esta montaña?",
						"vietnamese": "Rốt cuộc ai mới là chủ nhân thật sự của ngọn núi này?",
						"thai": "สรุปแล้ว ใครคือเจ้าของที่แท้จริงของภูเขานี้กันแน่?",
						"hindi": "आखिर इस पहाड़ का असली मालिक कौन है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "곧 알게 되겠지. 이 어설픈 연극의 마지막을 보러 가자고.",
						"english": "We'll find out soon enough. Let's go see the end of this clumsy play.",
						"japanese": "すぐに分かるだろう。この下手な芝居の結末を見届けに行こう。",
						"chinese": "很快就会知道了。我们去看看这场拙劣演出的结局吧。",
						"french": "Nous le saurons bientôt. Allons voir la fin de cette pièce maladroite.",
						"spanish": "Pronto lo sabremos. Vayamos a ver el final de esta torpe obra.",
						"vietnamese": "Rồi sẽ biết thôi. Cùng đi xem kết thúc của vở kịch vụng về này nào.",
						"thai": "คงจะได้รู้กันในไม่ช้า ไปดูตอนจบของละครตลกๆ นี้กันเถอะ",
						"hindi": "जल्द ही पता चल जाएगा। चलो इस अनाड़ी नाटक का अंत देखने चलते हैं।"
					},
					"speaker": "Roundy",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 자의 마지막 일격에 모두 쓰러졌다.",
						"english": "Everyone fell to the unknown figure's final blow.",
						"japanese": "正体不明の者による最後の一撃で、全員が倒れた。",
						"chinese": "所有人都倒在了不知名者的最后一击之下。",
						"french": "Tous sont tombés sous le coup final de l'inconnu.",
						"spanish": "Todos cayeron ante el golpe final del desconocido.",
						"vietnamese": "Tất cả đều gục ngã trước đòn đánh cuối cùng của kẻ không rõ danh tính.",
						"thai": "ทุกคนล้มลงจากการโจมตีครั้งสุดท้ายของบุคคลนิรนาม",
						"hindi": "सब अज्ञात व्यक्ति के अंतिम वार से गिर पड़े।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "하하! 이 정도 연기면 아카데미 상 감이지!",
						"english": "Haha! That's an Oscar-worthy performance!",
						"japanese": "ハハ！これならアカデミー賞ものだ！",
						"chinese": "哈哈！这演技奥斯卡奖非我莫属！",
						"french": "Haha ! Cette performance mérite un Oscar !",
						"spanish": "¡Jaja! ¡Esta actuación merece un Oscar!",
						"vietnamese": "Haha! Diễn xuất thế này xứng đáng nhận giải Oscar!",
						"thai": "ฮ่าฮ่า! การแสดงระดับนี้ต้องได้รางวัลออสการ์!",
						"hindi": "हाहा! यह अभिनय तो ऑस्कर के लायक है!"
					}
				},
				{
					"content": {
						"korean": "젠장… 진짜 대공을 찾아낼 거야.",
						"english": "Damn it... I'll find the real Grand Duke.",
						"japanese": "ちくしょう…本物の大公を見つけ出してやる。",
						"chinese": "该死……我一定会找到真正的大公。",
						"french": "Maudit... Je trouverai le vrai Grand-Duc.",
						"spanish": "Maldita sea... Encontraré al verdadero Gran Duque.",
						"vietnamese": "Chết tiệt... Ta sẽ tìm ra Đại Công tước thật sự.",
						"thai": "บ้าเอ๊ย... ฉันจะหาแกรนด์ดยุกตัวจริงให้เจอให้ได้",
						"hindi": "धत् तेरे की... मैं असली ग्रैंड ड्यूक को ढूंढ निकालूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 자가 비틀거리며 쓰러졌다.",
						"english": "The mysterious figure stumbled and fell.",
						"japanese": "正体不明の者がよろめき倒れた。",
						"chinese": "不知名的人摇摇晃晃地倒下了。",
						"french": "L'inconnu a trébuché et est tombé.",
						"spanish": "El desconocido tropezó y cayó.",
						"vietnamese": "Kẻ không rõ danh tính loạng choạng ngã xuống.",
						"thai": "บุคคลนิรนามเซถลาและล้มลง",
						"hindi": "अज्ञात व्यक्ति लड़खड़ा कर गिर पड़ा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크으… 보스 연기… 너무 힘들어…",
						"english": "Ugh... Acting like a boss... is so tiring...",
						"japanese": "くぅ…ボス役…しんどい…",
						"chinese": "唉…扮演首领…太累了…",
						"french": "Argh... Jouer le rôle du boss... c'est épuisant...",
						"spanish": "Ugh... Actuar como jefe... es tan agotador...",
						"vietnamese": "Ư… diễn vai trùm… mệt quá…",
						"thai": "อือ... แสดงเป็นบอส... เหนื่อยชะมัด...",
						"hindi": "उफ़... बॉस का किरदार... बहुत मुश्किल है..."
					}
				},
				{
					"content": {
						"korean": "연기였어?!",
						"english": "It was an act?!",
						"japanese": "演技だったの？！",
						"chinese": "是演技？！",
						"french": "C'était une mise en scène ?!",
						"spanish": "¡¿Era una actuación?!",
						"vietnamese": "Là diễn xuất ư?!",
						"thai": "เป็นการแสดงเหรอ?!",
						"hindi": "यह अभिनय था?!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 다 연극이었다니! 대체 진짜 대공은 어디 있는 거야?",
						"english": "This was all a play! Where's the real Grand Duke, then?",
						"japanese": "これ全部芝居だったなんて！一体本当の大公はどこにいるんだ？",
						"chinese": "这竟然都是一场戏！真正的公爵到底在哪里？",
						"french": "Tout ceci n'était qu'une pièce ! Où est donc le vrai Grand Duc ?",
						"spanish": "¡Todo esto fue una obra de teatro! ¿Dónde está el verdadero Gran Duque?",
						"vietnamese": "Tất cả chỉ là kịch! Vậy Đại Công tước thật sự đang ở đâu chứ?",
						"thai": "ทั้งหมดนี้เป็นการแสดงเหรอเนี่ย! แล้วมหาดยุกตัวจริงอยู่ที่ไหนล่ะ?",
						"hindi": "यह सब एक नाटक था! तो असली महा-ड्यूक कहाँ है?"
					},
					"speaker": "Roundy",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어설픈 중간보스를 물리쳤다. 하지만 진짜 설산의 왕, '대공'은 아직 모습을 드러내지 않았다.",
						"english": "You defeated an amateurish mini-boss. But the true king of the snow mountain, the 'Grand Duke', has yet to appear.",
						"japanese": "お粗末な中ボスを倒した。だが、真の雪山の王、『大公』はまだ姿を現していない。",
						"chinese": "你击败了一个蹩脚的小头目。但雪山真正的王者，‘大公’，尚未现身。",
						"french": "Vous avez vaincu un mini-boss maladroit. Mais le véritable roi de la montagne enneigée, le 'Grand Duc', ne s'est pas encore montré.",
						"spanish": "Derrotaste a un mini-jefe torpe. Pero el verdadero rey de la montaña nevada, el 'Gran Duque', aún no ha aparecido.",
						"vietnamese": "Đã đánh bại một tên trùm phụ nghiệp dư. Nhưng vị vua thực sự của núi tuyết, 'Đại Công tước', vẫn chưa lộ diện.",
						"thai": "จัดการมินิบอสสุดงุ่มง่ามได้แล้ว แต่ราชาที่แท้จริงของเทือกเขาหิมะ 'มหาดยุก' ยังไม่ปรากฏตัว",
						"hindi": "आपने एक नौसिखिया मिनी-बॉस को हरा दिया। लेकिन बर्फ़ीले पहाड़ का असली राजा, 'महा-ड्यूक', अभी तक सामने नहीं आया है।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "드디어 설산의 정상. 그곳에 정체 모를 자가 기다리고 있었다.",
						"english": "Finally, the summit of the snow mountain. An unknown figure awaited there.",
						"japanese": "ついに雪山の頂上。そこに正体不明の者が待ち構えていた。",
						"chinese": "终于来到了雪山之巅。一个身份不明的人正在那里等候。",
						"french": "Enfin, le sommet de la montagne enneigée. Une personne inconnue y attendait.",
						"spanish": "Finalmente, la cima de la montaña nevada. Allí esperaba una figura desconocida.",
						"vietnamese": "Cuối cùng cũng đến đỉnh núi tuyết. Một kẻ vô danh đang chờ đợi ở đó.",
						"thai": "ในที่สุดก็ถึงยอดเขาหิมะ ที่นั่นมีคนแปลกหน้ารออยู่",
						"hindi": "आखिरकार, बर्फीले पहाड़ की चोटी। वहां एक अज्ञात व्यक्ति इंतजार कर रहा था।"
					}
				},
				{
					"content": {
						"korean": "감히 여기까지 오다니… 간 떨리는 줄 모르는군.",
						"english": "To dare come all the way here... You don't know what fear is.",
						"japanese": "よくもここまで来たな…肝が据わっているな。",
						"chinese": "竟敢来到这里……真是不知道死活。",
						"french": "Oser venir jusqu'ici... On dirait que tu ne connais pas la peur.",
						"spanish": "¿Cómo te atreves a llegar hasta aquí... Parece que no conoces el miedo.",
						"vietnamese": "Dám đến tận đây... không biết sợ là gì sao.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่... ไม่รู้จักความกลัวเลยรึไง",
						"hindi": "यहां तक आने की हिम्मत की... तुम्हें अपनी जान की परवाह नहीं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "내가 바로… 이 설산을 지배하는 무자비한 대공이다!",
						"english": "I am... the ruthless Grand Duke who rules this snow mountain!",
						"japanese": "私がまさに…この雪山を支配する無慈悲な大公だ！",
						"chinese": "我就是…统治这座雪山的无情大公！",
						"french": "Je suis... le Grand Duc impitoyable qui règne sur cette montagne enneigée !",
						"spanish": "¡Yo soy... el despiadado Gran Duque que domina esta montaña nevada!",
						"vietnamese": "Ta chính là… Đại Công tước tàn nhẫn thống trị ngọn núi tuyết này!",
						"thai": "ข้าคือ... มหาดยุกผู้ไร้ปรานีที่ปกครองเทือกเขาหิมะนี้!",
						"hindi": "मैं ही... इस बर्फ़ीले पहाड़ पर राज करने वाला निर्दयी महा-ड्यूक हूँ!"
					}
				},
				{
					"content": {
						"korean": "…대공?",
						"english": "...Grand Duke?",
						"japanese": "…大公？",
						"chinese": "…大公？",
						"french": "...Grand Duc ?",
						"spanish": "¿...Gran Duque?",
						"vietnamese": "...Đại Công tước?",
						"thai": "...มหาดยุก?",
						"hindi": "...महा-ड्यूक?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Roundy",
					"type": "direction",
					"spot": [
						4,
						1
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "Roundy",
					"emotion": "base",
					"content": {
						"korean": "음… 대공치곤 너무 작은 것 같은데?",
						"english": "Hmm... A bit small for a Grand Duke, aren't you?",
						"japanese": "うーん…大公にしては小さすぎるんじゃない？",
						"chinese": "嗯…作为大公来说，是不是有点太小了？",
						"french": "Hmm... Un peu petit pour un Grand Duc, non ?",
						"spanish": "Hmm... ¿No eres un poco pequeño para ser un Gran Duque?",
						"vietnamese": "Ưm… Hình như hơi nhỏ bé so với một Đại Công tước đấy?",
						"thai": "อืม... ดูตัวเล็กไปหน่อยสำหรับมหาดยุกนะ?",
						"hindi": "हम्म... महा-ड्यूक के लिए कुछ ज़्यादा ही छोटा नहीं लगता?"
					}
				},
				{
					"content": {
						"korean": "뭐라고! 감히 이 위대한 {random_boss}에게!",
						"english": "What! How dare you insult this great {random_boss}!",
						"japanese": "なんだと！この偉大な{random_boss}に生意気な！",
						"chinese": "你说什么！竟敢对这伟大的{random_boss}无礼！",
						"french": "Quoi ! Comment oses-tu t'adresser ainsi à ce grand {random_boss} !",
						"spanish": "¡Qué! ¡Cómo te atreves a hablarle así a este gran {random_boss}!",
						"vietnamese": "Cái gì! Dám vô lễ với {random_boss} vĩ đại này ư!",
						"thai": "ว่าไงนะ! กล้าดียังไงมาทำอย่างนี้กับ {random_boss} ผู้ยิ่งใหญ่!",
						"hindi": "क्या! इस महान {random_boss} से इतनी गुस्ताखी!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 설산에 왕이 있다 들었다.",
			"무자비한 대공.",
			"하지만 소문은 왠지 자꾸 미끄러졌다.",
			"엉성한 팻말, 숨겨진 진실.",
			"대체, 누가 진짜 왕인가?"
		],
		"english": [
			"I heard there's a king in these snowy mountains.",
			"The ruthless Grand Duke.",
			"But the rumors kept slipping away, somehow.",
			"Shabby signboards, hidden truths.",
			"Who, then, is the true king?"
		],
		"japanese": [
			"この雪山に王がいると聞いた。",
			"無慈悲な大公。",
			"しかし、どういうわけか噂はいつも滑り落ちていった。",
			"粗雑な看板、隠された真実。",
			"一体、誰が本当の王なのか？"
		],
		"chinese": [
			"听说这座雪山里有位王。",
			"那位无情的大公。",
			"然而，谣言总是莫名其妙地流传开来。",
			"粗糙的告示牌，隐藏的真相。",
			"到底谁才是真正的王？"
		],
		"french": [
			"J'ai entendu dire qu'il y a un roi dans ces montagnes enneigées.",
			"Le Grand Duc impitoyable.",
			"Mais les rumeurs continuaient de s'échapper, étrangement.",
			"Des panneaux minables, des vérités cachées.",
			"Alors, qui est le vrai roi ?"
		],
		"spanish": [
			"He oído que hay un rey en estas montañas nevadas.",
			"El Gran Duque despiadado.",
			"Pero los rumores seguían resbalándose, de alguna manera.",
			"Letreros cutres, verdades ocultas.",
			"¿Quién, entonces, es el verdadero rey?"
		],
		"vietnamese": [
			"Tôi nghe nói có một vị vua trên ngọn núi tuyết này.",
			"Vị Đại Công tàn nhẫn.",
			"Nhưng những tin đồn cứ trượt đi, một cách khó hiểu.",
			"Những tấm biển ọp ẹp, những sự thật ẩn giấu.",
			"Rốt cuộc, ai mới là vị vua thật sự?"
		],
		"thai": [
			"ได้ยินว่ามีราชาอยู่บนภูเขาหิมะแห่งนี้",
			"แกรนด์ดยุกผู้ไร้ความปรานี",
			"แต่ข่าวลือกลับเลือนหายไปเรื่อยๆ",
			"ป้ายเก่าๆ ความจริงที่ซ่อนอยู่",
			"แล้วใครคือราชาที่แท้จริง?"
		],
		"hindi": [
			"मैंने सुना है कि इन बर्फीले पहाड़ों में एक राजा है।",
			"निर्दयी ग्रैंड ड्यूक।",
			"लेकिन अफवाहें किसी तरह फिसलती रहीं।",
			"भद्दे संकेत बोर्ड, छिपी हुई सच्चाई।",
			"तो, असली राजा कौन है?"
		]
	}
} as const;
