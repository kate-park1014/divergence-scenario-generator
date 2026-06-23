export const scenario_modern_nullus_8_04 = {
	"scenario_id": "modern_nullus_8_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"emotion": "base",
					"content": {
						"korean": "린의 경고는 섬뜩했다. 이 모든 것이 의도된 조작이었다.",
						"english": "Lynn's warning was chilling. All of this was an intentional manipulation.",
						"japanese": "リンの警告は不気味だった。この全てが意図的な操作だったとは。",
						"chinese": "琳的警告令人毛骨悚然。这一切都是有预谋的操控。",
						"french": "L'avertissement de Lynn était glaçant. Tout cela n'était qu'une manipulation intentionnelle.",
						"spanish": "La advertencia de Lynn fue espeluznante. Todo esto era una manipulación intencionada.",
						"vietnamese": "Lời cảnh báo của Lynn thật rợn người. Tất cả những điều này đều là thao túng có chủ ý.",
						"thai": "คำเตือนของลินน์น่าขนลุก ทั้งหมดนี้เป็นการบงการโดยเจตนา",
						"hindi": "लिन की चेतावनी भयावह थी। यह सब एक जानबूझकर की गई हेरफेर थी।"
					}
				},
				{
					"content": {
						"korean": "그럼, Nullus가 움직이는 방식도 계획된 거였어?",
						"english": "So, the way Nullus moves was also planned?",
						"japanese": "じゃあ、Nullusの動き方も計画されていたっていうの？",
						"chinese": "那么，Nullus的运作方式也是被计划好的吗？",
						"french": "Alors, la façon dont Nullus agit était aussi planifiée ?",
						"spanish": "¿Entonces, la forma en que se mueve Nullus también estaba planeada?",
						"vietnamese": "Vậy, cách Nullus hoạt động cũng đã được lên kế hoạch sao?",
						"thai": "งั้นวิธีที่ Nullus เคลื่อนไหวก็ถูกวางแผนไว้ด้วยเหรอ?",
						"hindi": "तो, Nullus के चलने का तरीका भी नियोजित था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "데이터를 더 깊이 파봐야 해. 단순한 오류가 아니야.",
						"english": "I need to dig deeper into the data. It's not a simple error.",
						"japanese": "もっと深くデータを掘り下げないと。単純なエラーじゃない。",
						"chinese": "我需要更深入地挖掘数据。这不是一个简单的错误。",
						"french": "Je dois creuser plus profondément dans les données. Ce n'est pas une simple erreur.",
						"spanish": "Necesito profundizar en los datos. No es un simple error.",
						"vietnamese": "Tôi phải đào sâu dữ liệu hơn nữa. Đây không phải là một lỗi đơn giản.",
						"thai": "ฉันต้องเจาะลึกข้อมูลให้มากกว่านี้ นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา",
						"hindi": "मुझे डेटा में और गहराई तक जाना होगा। यह कोई साधारण त्रुटि नहीं है।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…카이. 어떻게 여기로 왔어?",
						"english": "...Kai. How did you get here?",
						"japanese": "…カイ。どうやってここに？",
						"chinese": "……凯。你怎么会在这里？",
						"french": "...Kai. Comment es-tu arrivé ici ?",
						"spanish": "...Kai. ¿Cómo llegaste aquí?",
						"vietnamese": "...Kai. Sao cậu lại ở đây?",
						"thai": "...ไค นายมาที่นี่ได้ยังไง?",
						"hindi": "...काई। तुम यहां कैसे आए?"
					}
				},
				{
					"content": {
						"korean": "널 찾고 있었어. 중요한 단서를 찾았거든.",
						"english": "I was looking for you. I found an important clue.",
						"japanese": "君を探していたんだ。重要な手がかりを見つけたからね。",
						"chinese": "我一直在找你。我找到了一个重要的线索。",
						"french": "Je te cherchais. J'ai trouvé un indice important.",
						"spanish": "Te estaba buscando. Encontré una pista importante.",
						"vietnamese": "Tôi đang tìm cậu. Tôi đã tìm thấy một manh mối quan trọng.",
						"thai": "ฉันกำลังตามหานายอยู่พอดี ฉันเจอเบาะแสสำคัญเข้าแล้ว",
						"hindi": "मैं तुम्हें ढूंढ रहा था। मुझे एक महत्वपूर्ण सुराग मिला है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이건 오래된 조직 데이터야. '붉은 맹세'라고 불렸지.",
						"english": "This is old organization data. They were called 'The Crimson Vow'.",
						"japanese": "これは古い組織データだ。「紅の誓約」と呼ばれていた。",
						"chinese": "这是旧的组织数据。他们被称为“赤色誓约”。",
						"french": "Ce sont d'anciennes données d'organisation. On les appelait « Le Serment Écarlate ».",
						"spanish": "Estos son datos de una organización antigua. Se les conocía como \"El Juramento Carmesí\".",
						"vietnamese": "Đây là dữ liệu tổ chức cũ. Họ được gọi là \"Lời Thề Đỏ\".",
						"thai": "นี่คือข้อมูลองค์กรเก่า พวกเขาถูกเรียกว่า \"พันธสัญญาโลหิต\"",
						"hindi": "यह एक पुराने संगठन का डेटा है। उन्हें 'लाल प्रतिज्ञा' कहा जाता था।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "붉은 맹세? 처음 듣는데.",
						"english": "The Crimson Vow? Never heard of them.",
						"japanese": "紅の誓約？初めて聞く名だ。",
						"chinese": "赤色誓约？我从未听过。",
						"french": "Le Serment Écarlate ? Jamais entendu parler.",
						"spanish": "¿El Juramento Carmesí? Nunca los había oído.",
						"vietnamese": "Lời Thề Đỏ? Nghe lạ quá.",
						"thai": "พันธสัญญาโลหิต? ไม่เคยได้ยินเลย",
						"hindi": "लाल प्रतिज्ञा? मैंने उनके बारे में कभी नहीं सुना।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 그림자 속에서 모든 것을 지배하려 했던 집단이야.",
						"english": "A group that tried to control everything from the city's shadows.",
						"japanese": "都市の影で全てを支配しようとした集団だ。",
						"chinese": "一个试图在城市阴影中掌控一切的组织。",
						"french": "Un groupe qui tentait de tout contrôler depuis l'ombre de la ville.",
						"spanish": "Un grupo que intentó controlar todo desde las sombras de la ciudad.",
						"vietnamese": "Một nhóm đã cố gắng kiểm soát mọi thứ từ trong bóng tối của thành phố.",
						"thai": "กลุ่มที่พยายามควบคุมทุกสิ่งจากเงามืดของเมือง",
						"hindi": "एक ऐसा समूह जिसने शहर की छाया से सब कुछ नियंत्रित करने की कोशिश की।"
					}
				},
				{
					"content": {
						"korean": "특히 이 부분을 봐. '맹세'와 '계약'에 대한 기록이 반복돼.",
						"english": "Look at this part especially. Records of 'vows' and 'contracts' repeat.",
						"japanese": "特にこの部分を見てくれ。「誓約」と「契約」の記録が繰り返されている。",
						"chinese": "特别是看这部分。关于“誓约”和“契约”的记录反复出现。",
						"french": "Regarde surtout cette partie. Les mentions de « serments » et de « contrats » se répètent.",
						"spanish": "Mira esta parte en particular. Los registros de \"juramentos\" y \"contratos\" se repiten.",
						"vietnamese": "Đặc biệt là phần này. Các ghi chép về 'lời thề' và 'hợp đồng' lặp đi lặp lại.",
						"thai": "โดยเฉพาะตรงนี้ บันทึกเกี่ยวกับ \"คำสาบาน\" และ \"สัญญา\" ซ้ำไปซ้ำมา",
						"hindi": "खास तौर पर इस हिस्से को देखो। 'प्रतिज्ञा' और 'अनुबंध' के रिकॉर्ड दोहराए जा रहे हैं।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…Nullus랑 무슨 상관인데?",
						"english": "...What does that have to do with Nullus?",
						"japanese": "…Nullusと何の関係が？",
						"chinese": "……这和Nullus有什么关系？",
						"french": "...Quel est le rapport avec Nullus ?",
						"spanish": "...¿Qué tiene que ver eso con Nullus?",
						"vietnamese": "...Vậy thì liên quan gì đến Nullus?",
						"thai": "...แล้วมันเกี่ยวอะไรกับ Nullus?",
						"hindi": "...इसका Nullus से क्या लेना-देना है?"
					}
				},
				{
					"content": {
						"korean": "그게 연결고리라고 생각해. 잊혀진 '빚'의 시작일 수도.",
						"english": "I think that's the link. It might be the start of a forgotten 'debt'.",
						"japanese": "それが繋がりだと思う。忘れられた「負債」の始まりかもしれない。",
						"chinese": "我想那就是联系。这可能是被遗忘的“债务”的开始。",
						"french": "Je pense que c'est le lien. Ce pourrait être le début d'une « dette » oubliée.",
						"spanish": "Creo que es el vínculo. Podría ser el inicio de una \"deuda\" olvidada.",
						"vietnamese": "Tôi nghĩ đó là mối liên kết. Có thể là khởi đầu của một 'món nợ' đã bị lãng quên.",
						"thai": "ฉันคิดว่านั่นคือจุดเชื่อมโยง มันอาจเป็นจุดเริ่มต้นของ 'หนี้' ที่ถูกลืม",
						"hindi": "मुझे लगता है कि यही कड़ी है। यह एक भूले हुए 'कर्ज' की शुरुआत हो सकती है।"
					},
					"emotion": "base",
					"speaker": "kai",
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
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "맹세와 계약이라… 사람들을 지우는 것과 무슨 관계지?",
						"english": "Vows and contracts... What do they have to do with erasing people?",
						"japanese": "誓約と契約か… 人々を消すこととどう関係するんだ？",
						"chinese": "誓约和契约……这和抹除人们有什么关系？",
						"french": "Serments et contrats... Quel est le rapport avec le fait d'effacer des gens ?",
						"spanish": "¿Juramentos y contratos? ¿Qué tienen que ver con borrar a la gente?",
						"vietnamese": "Lời thề và hợp đồng... Có liên quan gì đến việc xóa sổ con người?",
						"thai": "คำสาบานและสัญญา... เกี่ยวอะไรกับการลบผู้คน?",
						"hindi": "प्रतिज्ञाएं और अनुबंध... इसका लोगों को मिटाने से क्या संबंध है?"
					}
				},
				{
					"content": {
						"korean": "이들은 존재 자체를 '빚'으로 만들었어. 그 빚을 지키지 못하면….",
						"english": "They turned existence itself into a 'debt'. If you can't keep that debt...",
						"japanese": "彼らは存在そのものを「負債」にしたんだ。その負債を守れなければ…。",
						"chinese": "他们把存在本身变成了“债务”。如果无法偿还那笔债务……",
						"french": "Ils ont transformé l'existence même en « dette ». Si on ne peut pas honorer cette dette...",
						"spanish": "Convirtieron la existencia misma en una \"deuda\". Si no cumples con esa deuda...",
						"vietnamese": "Họ đã biến sự tồn tại thành một 'món nợ'. Nếu không giữ được món nợ đó...",
						"thai": "พวกเขาสร้าง \"หนี้\" จากการมีอยู่ หากคุณไม่สามารถรักษาสัญญานั้นได้...",
						"hindi": "उन्होंने अस्तित्व को ही 'कर्ज' बना दिया। अगर आप वह कर्ज नहीं चुका सकते..."
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사라지는 건가? 데이터처럼?",
						"english": "Do they vanish? Like data?",
						"japanese": "消えるのか？データのように？",
						"chinese": "难道会消失？像数据一样？",
						"french": "Ils disparaissent ? Comme des données ?",
						"spanish": "¿Desaparecen? ¿Como datos?",
						"vietnamese": "Họ sẽ biến mất à? Như dữ liệu sao?",
						"thai": "พวกเขาจะหายไปเหรอ? เหมือนข้อมูล?",
						"hindi": "क्या वे गायब हो जाते हैं? डेटा की तरह?"
					}
				},
				{
					"content": {
						"korean": "아니. 존재가 지워지는 거지. 흔적도 없이.",
						"english": "No. Their existence is erased. Without a trace.",
						"japanese": "いや。存在そのものが消去される。痕跡もなく。",
						"chinese": "不。是存在本身被抹除。不留任何痕迹。",
						"french": "Non. Leur existence est effacée. Sans laisser de trace.",
						"spanish": "No. Su existencia es borrada. Sin dejar rastro.",
						"vietnamese": "Không. Sự tồn tại bị xóa sổ. Không để lại dấu vết.",
						"thai": "ไม่ใช่ การมีอยู่จะถูกลบออกไป ไร้ร่องรอย",
						"hindi": "नहीं। उनका अस्तित्व मिटा दिया जाता है। बिना किसी निशान के।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭔가 석연치 않아. 너무 딱 맞아 떨어지는 정보인데.",
						"english": "...Something's not right. The information fits too perfectly.",
						"japanese": "「…何かがおかしい。情報が完璧すぎる。」",
						"chinese": "“总觉得不对劲。这信息太吻合了。”",
						"french": "...Quelque chose ne va pas. Cette information est trop parfaite.",
						"spanish": "...Algo no cuadra. La información encaja demasiado bien.",
						"vietnamese": "...Có gì đó không ổn. Thông tin này khớp quá hoàn hảo.",
						"thai": "...มีบางอย่างไม่ชอบมาพากล ข้อมูลนี้มันลงตัวเกินไป",
						"hindi": "...कुछ गड़बड़ है। जानकारी बहुत सही बैठ रही है।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진실은 항상 단순한 법이지.",
						"english": "Truth is always simple, isn't it?",
						"japanese": "「真実は常に単純なものだ。」",
						"chinese": "“真相总是简单的。”",
						"french": "La vérité est toujours simple.",
						"spanish": "La verdad siempre es simple.",
						"vietnamese": "Sự thật luôn đơn giản.",
						"thai": "ความจริงมักจะเรียบง่ายเสมอ",
						"hindi": "सच हमेशा सीधा होता है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붉은 맹세의 기록은 섬뜩했다. 존재가 곧 빚이라는 개념.",
						"english": "The records of the Red Vow were chilling. The concept that existence itself is a debt.",
						"japanese": "「紅の誓約の記録は不気味だった。存在そのものが負債であるという概念。」",
						"chinese": "“红色誓约的记录令人毛骨悚然。存在即是债务的概念。”",
						"french": "Les registres du Serment Rouge étaient effrayants. Le concept que l'existence elle-même est une dette.",
						"spanish": "Los registros del Juramento Rojo eran escalofriantes. El concepto de que la existencia misma es una deuda.",
						"vietnamese": "Những ghi chép về Lời Thề Đỏ thật rợn người. Khái niệm rằng sự tồn tại chính là một món nợ.",
						"thai": "บันทึกคำปฏิญาณสีแดงนั้นน่าขนลุก แนวคิดที่ว่าการมีอยู่คือหนี้สิน",
						"hindi": "लाल प्रतिज्ञा के अभिलेख भयावह थे। यह अवधारणा कि अस्तित्व ही कर्ज है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잊혀진 기록이… 이렇게까지 잔인할 수 있나.",
						"english": "Can forgotten records... be this cruel?",
						"japanese": "「忘れ去られた記録が…ここまで残酷だなんて。」",
						"chinese": "“被遗忘的记录…竟能如此残忍吗？”",
						"french": "Des registres oubliés... peuvent-ils être si cruels ?",
						"spanish": "¿Pueden los registros olvidados... ser tan crueles?",
						"vietnamese": "Những ghi chép bị lãng quên... có thể tàn nhẫn đến mức này sao?",
						"thai": "บันทึกที่ถูกลืม...จะโหดร้ายได้ถึงเพียงนี้เชียวหรือ?",
						"hindi": "क्या भूले हुए अभिलेख... इतने क्रूर हो सकते हैं?"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도시 사람들이 흐릿하게 깜빡였던 현상… 설마 이것 때문인가?",
						"english": "The phenomenon of city folk flickering faintly... Could it be because of this?",
						"japanese": "「都市の人々がぼんやりと点滅していた現象…まさかこれのせいなのか？」",
						"chinese": "“城里人模糊闪烁的现象…难道是因为这个？”",
						"french": "Le phénomène des citadins qui scintillaient faiblement... Est-ce que ce serait à cause de ça ?",
						"spanish": "El fenómeno de la gente de la ciudad parpadeando débilmente... ¿Podría ser por esto?",
						"vietnamese": "Hiện tượng người dân thành phố chớp nháy mờ ảo... Chẳng lẽ là do cái này?",
						"thai": "ปรากฏการณ์ที่ผู้คนในเมืองกะพริบจางๆ... หรือว่าจะเป็นเพราะสิ่งนี้?",
						"hindi": "शहर के लोगों का धुंधला-सा चमकना... क्या यह इसी वजह से है?"
					}
				},
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…점점 더 깊이 들어가고 있어. 진실에 가까워지는 느낌이 들지 않아?",
						"english": "...We're going deeper and deeper. Don't you feel like we're getting closer to the truth?",
						"japanese": "「…どんどん深く入り込んでいる。真実に近づいている気がしないか？」",
						"chinese": "“…我们越陷越深了。你不觉得我们离真相越来越近了吗？”",
						"french": "...Nous allons de plus en plus loin. N'as-tu pas l'impression que nous nous rapprochons de la vérité ?",
						"spanish": "...Cada vez nos adentramos más. ¿No sientes que nos acercamos a la verdad?",
						"vietnamese": "...Chúng ta đang đi sâu hơn và sâu hơn. Cậu không cảm thấy chúng ta đang đến gần sự thật sao?",
						"thai": "...เรากำลังดำดิ่งลึกขึ้นเรื่อยๆ ไม่รู้สึกเหรอว่าเรากำลังเข้าใกล้ความจริง?",
						"hindi": "...हम और गहरे उतरते जा रहे हैं। तुम्हें नहीं लगता कि हम सच्चाई के करीब आ रहे हैं?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실을 알면… 더 위험해지는 거 아니야?",
						"english": "If we know the truth... won't it just make things more dangerous?",
						"japanese": "「真実を知れば…もっと危険になるんじゃないのか？」",
						"chinese": "“知道了真相…难道不会更危险吗？”",
						"french": "Si nous connaissons la vérité... ne sera-ce pas plus dangereux ?",
						"spanish": "Si sabemos la verdad... ¿no será aún más peligroso?",
						"vietnamese": "Nếu biết sự thật... không phải sẽ càng nguy hiểm hơn sao?",
						"thai": "ถ้าเรารู้ความจริง...มันจะไม่ยิ่งอันตรายขึ้นไปอีกเหรอ?",
						"hindi": "अगर हमें सच पता चला... तो क्या यह और खतरनाक नहीं हो जाएगा?"
					}
				},
				{
					"content": {
						"korean": "이미 돌이킬 수 없어. 이 길은 끝까지 가야 해.",
						"english": "There's no turning back now. We have to see this path to the end.",
						"japanese": "「もう後戻りはできない。この道は最後まで行くしかない。」",
						"chinese": "“已经无法回头了。这条路必须走到尽头。”",
						"french": "On ne peut plus revenir en arrière. Nous devons aller jusqu'au bout de ce chemin.",
						"spanish": "Ya no hay vuelta atrás. Debemos seguir este camino hasta el final.",
						"vietnamese": "Đã không thể quay đầu. Con đường này phải đi đến cùng.",
						"thai": "กลับตัวไม่ได้แล้ว เราต้องไปให้สุดทางนี้",
						"hindi": "अब पीछे हटना संभव नहीं है। हमें यह रास्ता अंत तक तय करना होगा।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 빚은… 갚을 수 없을 거다.",
						"english": "You won't be able to repay your debt.",
						"japanese": "お前の借りは…返せないだろうな。",
						"chinese": "你的债…是还不清的。",
						"french": "Ta dette… tu ne pourras pas la rembourser.",
						"spanish": "Tu deuda… no podrás pagarla.",
						"vietnamese": "Món nợ của ngươi… sẽ không thể trả được đâu.",
						"thai": "หนี้ของเจ้า… จะชดใช้ไม่ได้หรอก",
						"hindi": "तुम्हारा क़र्ज़… तुम चुका नहीं पाओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 빚을 갚아줄게.",
						"english": "...It's not over yet. I'll repay the debt.",
						"japanese": "…まだ終わってない。借りは返す。",
						"chinese": "…还没完。我会还清债务的。",
						"french": "...Ce n'est pas encore fini. Je rembourserai ma dette.",
						"spanish": "...Aún no ha terminado. Pagaré la deuda.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ trả nợ.",
						"thai": "...ยังไม่จบหรอก. ข้าจะชดใช้หนี้.",
						"hindi": "...अभी ख़त्म नहीं हुआ। मैं क़र्ज़ चुकाऊँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "데이터의 심연. 그곳에서 거대한 그림자가 나타났다.",
						"english": "The abyss of data. From there, a colossal shadow emerged.",
						"japanese": "「データの深淵。そこから、巨大な影が現れた。」",
						"chinese": "“数据深渊。在那里，一个巨大的影子出现了。”",
						"french": "Les abysses de données. De là, une ombre colossale apparut.",
						"spanish": "El abismo de los datos. De allí, una sombra colosal apareció.",
						"vietnamese": "Vực thẳm dữ liệu. Từ đó, một bóng đen khổng lồ xuất hiện.",
						"thai": "ห้วงลึกของข้อมูล จากที่นั่น เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "डेटा का अगाध कुंड। वहां से, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…드디어 여기까지 왔군. 붉은 맹세의 그림자를 쫓아.",
						"english": "...So, you've finally arrived. Chasing the shadow of the Red Vow.",
						"japanese": "「…ついにここまで来たか。紅の誓約の影を追って。」",
						"chinese": "“…终于走到这里了。追逐着红色誓约的影子。”",
						"french": "...Vous êtes enfin arrivé. À la poursuite de l'ombre du Serment Rouge.",
						"spanish": "...Así que finalmente has llegado. Persiguiendo la sombra del Juramento Rojo.",
						"vietnamese": "...Cuối cùng cũng đến đây rồi. Truy đuổi bóng đen của Lời Thề Đỏ.",
						"thai": "...ในที่สุดก็มาถึงที่นี่จนได้ ไล่ตามเงาของคำปฏิญาณสีแดง",
						"hindi": "...आखिरकार तुम यहां आ ही गए। लाल प्रतिज्ञा की छाया का पीछा करते हुए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 붉은 맹세와 관련된 건가?",
						"english": "Are you connected to the Crimson Oath?",
						"japanese": "お前は紅の誓いと関係があるのか？",
						"chinese": "你与赤色誓约有关吗？",
						"french": "Es-tu lié au Serment écarlate ?",
						"spanish": "¿Estás relacionado con el Juramento Carmesí?",
						"vietnamese": "Ngươi có liên quan đến Lời Thề Đỏ không?",
						"thai": "เจ้าเกี่ยวข้องกับคำสาบานสีชาดรึ?",
						"hindi": "क्या तुम रक्त शपथ से जुड़े हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내가 곧 잊혀진 빚의 현신이다. 내게 맹세된 모든 것의 수호자.",
						"english": "I am the incarnation of forgotten debt, guardian of all sworn to me.",
						"japanese": "我は忘れられた負債の化身。我に誓われし全ての守護者なり。",
						"chinese": "我是遗忘之债的化身，所有对我起誓之物的守护者。",
						"french": "Je suis l'incarnation de la dette oubliée, le gardien de tout ce qui m'est juré.",
						"spanish": "Soy la encarnación de la deuda olvidada, el guardián de todo lo que me fue jurado.",
						"vietnamese": "Ta là hiện thân của món nợ lãng quên, kẻ bảo hộ mọi thứ đã thề với ta.",
						"thai": "ข้าคือร่างอวตารของหนี้ที่ถูกลืม ผู้พิทักษ์ทุกสิ่งที่สาบานต่อข้า",
						"hindi": "मैं भूले हुए कर्ज का अवतार हूं, जो भी मुझसे कसम खाई गई है, उसका संरक्षक।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 자를 쓰러뜨려야 해. 붉은 맹세의 실체가 드러날 거야.",
						"english": "We must defeat him. The true nature of the Crimson Oath will be revealed.",
						"japanese": "こいつを倒さねば。紅の誓いの実体が明らかになるだろう。",
						"chinese": "我们必须击败他。赤色誓约的真面目将会揭露。",
						"french": "Nous devons le vaincre. La véritable nature du Serment écarlate sera révélée.",
						"spanish": "Debemos derrotarlo. La verdadera naturaleza del Juramento Carmesí se revelará.",
						"vietnamese": "Chúng ta phải đánh bại hắn. Bản chất thật của Lời Thề Đỏ sẽ được tiết lộ.",
						"thai": "เราต้องโค่นมันลง ตัวตนที่แท้จริงของคำสาบานสีชาดจะถูกเปิดเผย",
						"hindi": "हमें इसे हराना होगा। रक्त शपथ की असली प्रकृति सामने आएगी।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "kai",
					"direction": "up",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "…망할. 또 이용당한 건가.",
						"english": "...Damn it. Was I used again?",
						"japanese": "…くそ。また利用されたのか。",
						"chinese": "……该死。我又被利用了吗？",
						"french": "...Maudits. Ai-je encore été utilisé ?",
						"spanish": "...Maldita sea. ¿Me usaron otra vez?",
						"vietnamese": "...Chết tiệt. Lại bị lợi dụng nữa sao.",
						"thai": "...ให้ตายสิ ถูกหลอกใช้อีกแล้วรึเนี่ย",
						"hindi": "...लानत है। क्या मुझे फिर से इस्तेमाल किया गया?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 존재 자체가 빚이다. 그걸 깨달을 때까지, 넌 사라질 수 없어.",
						"english": "Your very existence is a debt. Until you realize that, you cannot disappear.",
						"japanese": "お前の存在そのものが負債だ。それに気づくまで、お前は消えることはできない。",
						"chinese": "你的存在本身就是一笔债。除非你意识到这一点，否则你无法消失。",
						"french": "Ton existence même est une dette. Tant que tu ne le comprendras pas, tu ne pourras pas disparaître.",
						"spanish": "Tu existencia misma es una deuda. Hasta que lo entiendas, no podrás desaparecer.",
						"vietnamese": "Bản thân sự tồn tại của ngươi là một món nợ. Cho đến khi ngươi nhận ra điều đó, ngươi sẽ không thể biến mất.",
						"thai": "การมีอยู่ของเจ้าคือหนี้ จนกว่าเจ้าจะรู้ตัว เจ้าก็ไม่อาจหายไปได้",
						"hindi": "तुम्हारा अस्तित्व ही एक कर्ज है। जब तक तुम यह नहीं समझोगे, तुम गायब नहीं हो सकते।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…멍청한 것들. 이건 시작에 불과해.",
						"english": "...Fools. This is just the beginning.",
						"japanese": "…愚かな者たちめ。これは始まりに過ぎない。",
						"chinese": "……蠢货。这仅仅是个开始。",
						"french": "...Imbéciles. Ce n'est que le début.",
						"spanish": "...Tontos. Esto es solo el principio.",
						"vietnamese": "...Đồ ngu. Đây chỉ là khởi đầu thôi.",
						"thai": "...พวกโง่ นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "...मूर्खों। यह तो बस शुरुआत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진정한 빚은… {random_boss} 뒤에 숨어있지. 그 그림자 속에서.",
						"english": "The true debt... hides behind {random_boss}. In its shadow.",
						"japanese": "真の負債は… {random_boss} の後ろに隠れている。その影の中に。",
						"chinese": "真正的债务… 藏在 {random_boss} 之后。在它的阴影中。",
						"french": "La véritable dette... se cache derrière {random_boss}. Dans son ombre.",
						"spanish": "La verdadera deuda... se esconde tras {random_boss}. En su sombra.",
						"vietnamese": "Món nợ thực sự... ẩn sau {random_boss}. Trong cái bóng của nó.",
						"thai": "หนี้ที่แท้จริง... ซ่อนอยู่หลัง {random_boss} ในเงามืดนั้น",
						"hindi": "असली कर्ज... {random_boss} के पीछे छिपा है। उसकी परछाई में।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わっていなかった。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					}
				},
				{
					"content": {
						"korean": "붉은 맹세의 잔영은 사라졌지만, 더 깊은 어둠이 기다리고 있었다.",
						"english": "The lingering shadow of the Crimson Oath vanished, but a deeper darkness awaited.",
						"japanese": "紅の誓いの残影は消え去ったが、より深き闇が待ち受けていた。",
						"chinese": "赤色誓约的残影消失了，但更深的黑暗正在等待。",
						"french": "L'ombre persistante du Serment écarlate disparut, mais une obscurité plus profonde attendait.",
						"spanish": "La sombra persistente del Juramento Carmesí se desvaneció, pero una oscuridad más profunda aguardaba.",
						"vietnamese": "Tàn dư của Lời Thề Đỏ biến mất, nhưng một bóng tối sâu thẳm hơn đang chờ đợi.",
						"thai": "เงาของคำสาบานสีชาดหายไปแล้ว แต่ความมืดที่ลึกกว่ากำลังรออยู่",
						"hindi": "रक्त शपथ की शेष छाया गायब हो गई, लेकिन एक गहरा अंधेरा इंतजार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이제, 모든 빚의 원흉을 찾아 나설 시간이다.",
						"english": "Now, it's time to seek out the mastermind behind all debt.",
						"japanese": "さあ、全ての負債の元凶を探しに出る時間だ。",
						"chinese": "现在，是时候找出所有债务的幕后主使了。",
						"french": "Il est temps de traquer le cerveau derrière toutes les dettes.",
						"spanish": "Ahora, es hora de buscar al cerebro detrás de todas las deudas.",
						"vietnamese": "Giờ là lúc đi tìm kẻ chủ mưu của mọi món nợ.",
						"thai": "ได้เวลาออกตามหาต้นตอของหนี้ทั้งหมดแล้ว",
						"hindi": "अब, सभी कर्ज के पीछे के मास्टरमाइंड को खोजने का समय है।"
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
			"린의 경고는 현실이 되었다. Nullus의 배후에 거대한 의도가 숨어 있었다.",
			"더 깊은 과거 데이터에 접근할수록, 잊혀진 그림자는 선명해졌다.",
			"위장된 조력자, 카이. 그는 붉은 맹세의 그림자를 쫓으라 했다.",
			"맹세는 피로 물들고, 도시는 그 빚을 잊었다.",
			"하지만 잊혀진 진실은, 언제나 가장 잔혹한 형태로 돌아오는 법."
		],
		"english": [
			"Lynn's warning became reality. A grand scheme was hidden behind Nullus.",
			"The deeper I delved into past data, the clearer the forgotten shadow became.",
			"Kai, the disguised helper. He told me to chase the shadow of the Red Oath.",
			"The oath was stained with blood, and the city forgot its debt.",
			"But forgotten truths always return in their cruelest form."
		],
		"japanese": [
			"リンの警告は現実となった。Nullusの裏には巨大な意図が隠されていた。",
			"過去のデータに深くアクセスするほど、忘れられた影は鮮明になった。",
			"偽装された協力者、カイ。彼は「赤い誓い」の影を追えと言った。",
			"誓いは血に染まり、都市はその借りを忘れた。",
			"しかし、忘れられた真実は、常に最も残酷な形で戻ってくるものだ。"
		],
		"chinese": [
			"琳的警告变成了现实。Nullus背后隐藏着一个巨大的阴谋。",
			"越深入过去的资料，被遗忘的影子就越清晰。",
			"伪装的协助者，凯。他让我追寻红色誓约的影子。",
			"誓约染上了鲜血，城市却忘记了这份债。",
			"然而，被遗忘的真相，总是以最残酷的形式回归。"
		],
		"french": [
			"L'avertissement de Lynn est devenu réalité. Une intention colossale se cachait derrière Nullus.",
			"Plus j'accédais aux données du passé, plus l'ombre oubliée devenait nette.",
			"Kai, l'allié déguisé. Il m'a dit de poursuivre l'ombre du Serment Rouge.",
			"Le serment fut teinté de sang, et la ville oublia sa dette.",
			"Mais les vérités oubliées reviennent toujours sous leur forme la plus cruelle."
		],
		"spanish": [
			"La advertencia de Lynn se hizo realidad. Una enorme intención se ocultaba tras Nullus.",
			"Cuanto más profundizaba en los datos del pasado, más clara se hacía la sombra olvidada.",
			"Kai, el ayudante disfrazado. Me dijo que persiguiera la sombra del Juramento Rojo.",
			"El juramento se tiñó de sangre, y la ciudad olvidó su deuda.",
			"Pero las verdades olvidadas siempre regresan de la forma más cruel."
		],
		"vietnamese": [
			"Lời cảnh báo của Lynn đã thành sự thật. Một âm mưu to lớn ẩn giấu sau Nullus.",
			"Càng truy cập sâu vào dữ liệu quá khứ, bóng tối bị lãng quên càng hiện rõ.",
			"Kai, người cộng sự trá hình. Hắn bảo tôi truy đuổi bóng ma của Lời Thề Đỏ.",
			"Lời thề nhuốm máu, và thành phố đã quên đi món nợ đó.",
			"Nhưng sự thật bị lãng quên, luôn trở lại dưới hình hài tàn khốc nhất."
		],
		"thai": [
			"คำเตือนของลินน์กลายเป็นความจริง มีเจตนาอันใหญ่หลวงซ่อนอยู่เบื้องหลัง Nullus",
			"ยิ่งเข้าถึงข้อมูลอดีตลึกเท่าไหร่ เงาที่ถูกลืมก็ยิ่งชัดเจนขึ้นเท่านั้น",
			"ไค ผู้ช่วยเหลือที่ปลอมตัว เขาบอกให้ฉันตามล่าเงาของคำสาบานสีแดง",
			"คำสาบานเปื้อนเลือด และเมืองก็ลืมหนี้ของมัน",
			"แต่ความจริงที่ถูกลืม มักจะกลับมาในรูปแบบที่โหดร้ายที่สุดเสมอ"
		],
		"hindi": [
			"लिन की चेतावनी सच हो गई। Nullus के पीछे एक बड़ी साजिश छिपी थी।",
			"जितना गहरा मैंने अतीत के डेटा में गोता लगाया, भूली हुई छाया उतनी ही स्पष्ट होती गई।",
			"भेष बदले हुए सहायक, काई। उसने मुझे लाल शपथ की छाया का पीछा करने के लिए कहा।",
			"शपथ खून से रंग गई, और शहर अपना कर्ज भूल गया।",
			"लेकिन भूली हुई सच्चाई, हमेशा सबसे क्रूर रूप में लौटती है।"
		]
	}
} as const;
