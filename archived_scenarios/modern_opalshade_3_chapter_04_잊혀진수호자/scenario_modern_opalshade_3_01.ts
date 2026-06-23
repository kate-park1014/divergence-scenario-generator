export const scenario_modern_opalshade_3_01 = {
	"scenario_id": "modern_opalshade_3_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"재개발 구획, 멈춰버린 시간.",
			"도시 외곽, 기묘한 소문이 떠돌았다.",
			"'망령 집사'가 나타난다고 했다.",
			"낡은 구획은 잊혀진 비밀을 품고 있었다."
		],
		"english": [
			"Redevelopment Zone, Time Stands Still.",
			"On the city's outskirts, strange rumors circulated.",
			"They said the 'Phantom Butler' appeared.",
			"The old zone held forgotten secrets."
		],
		"japanese": [
			"再開発区域、止まった時間。",
			"都市郊外、奇妙な噂が広まった。",
			"『亡霊執事』が現れると噂された。",
			"古い区画は忘れ去られた秘密を抱えていた。"
		],
		"chinese": [
			"改造区，时间停滞。",
			"城市郊区，奇闻四起。",
			"听说“幽灵管家”会出现。",
			"旧区域藏着被遗忘的秘密。"
		],
		"french": [
			"Zone de réaménagement, le temps s'est arrêté.",
			"Aux abords de la ville, d'étranges rumeurs couraient.",
			"On disait que le \"Majordome Fantôme\" apparaissait.",
			"L'ancien quartier abritait des secrets oubliés."
		],
		"spanish": [
			"Zona de reurbanización, el tiempo se detuvo.",
			"En las afueras de la ciudad, extraños rumores circulaban.",
			"Se decía que el \"Mayordomo Espectral\" aparecía.",
			"La antigua zona guardaba secretos olvidados."
		],
		"vietnamese": [
			"Khu vực tái phát triển, thời gian ngừng lại.",
			"Ngoại ô thành phố, những tin đồn kỳ lạ lan truyền.",
			"Người ta nói rằng 'Quản gia Ma' xuất hiện.",
			"Khu vực cũ chứa đựng những bí mật bị lãng quên."
		],
		"thai": [
			"เขตพัฒนาใหม่, เวลาที่หยุดนิ่ง.",
			"ชานเมือง, ข่าวลือแปลกๆ แพร่สะพัด.",
			"เขาว่ากันว่า 'พ่อบ้านวิญญาณ' ปรากฏตัว.",
			"เขตเก่าแก่ซ่อนความลับที่ถูกลืมไว้."
		],
		"hindi": [
			"पुनर्विकास क्षेत्र, रुका हुआ समय।",
			"शहर के बाहरी इलाके में, अजीब अफवाहें फैलीं।",
			"कहा गया कि 'प्रेत बटलर' प्रकट होता है।",
			"पुराने क्षेत्र में भूले हुए रहस्य थे।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 심장이 멈춘 듯, 거대한 구획이 침묵했다.",
						"english": "As if the city's heart had stopped, the vast zone fell silent.",
						"japanese": "都市の心臓が止まったかのように、巨大な区画は沈黙した。",
						"chinese": "仿佛城市的心脏停止了跳动，巨大的区域陷入了沉默。",
						"french": "Comme si le cœur de la ville s'était arrêté, la vaste zone se tut.",
						"spanish": "Como si el corazón de la ciudad se hubiera detenido, la vasta zona quedó en silencio.",
						"vietnamese": "Như thể trái tim thành phố đã ngừng đập, khu vực rộng lớn chìm vào im lặng.",
						"thai": "ราวกับหัวใจของเมืองหยุดเต้น, เขตอันกว้างใหญ่เงียบสงัด.",
						"hindi": "मानो शहर का दिल रुक गया हो, विशाल क्षेत्र खामोश हो गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 그 망령 집사가 나타난다는 곳이야?",
						"english": "Is this where the Phantom Butler is said to appear?",
						"japanese": "ここが、あの亡霊執事が現れるという場所か？",
						"chinese": "这里就是那个幽灵管家出现的地方吗？",
						"french": "C'est ici que le Majordome Fantôme est censé apparaître ?",
						"spanish": "¿Es aquí donde se dice que aparece el Mayordomo Espectral?",
						"vietnamese": "Đây có phải là nơi Quản gia Ma được cho là xuất hiện không?",
						"thai": "ที่นี่หรือเปล่าที่พ่อบ้านวิญญาณจะปรากฏตัว?",
						"hindi": "क्या यहीं वो प्रेत बटलर प्रकट होता है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…오셨군요. 기다렸어요.",
						"english": "...You've arrived. I've been waiting.",
						"japanese": "…いらっしゃいましたね。お待ちしておりました。",
						"chinese": "……您来了。我等候多时了。",
						"french": "...Vous êtes venu. Je vous attendais.",
						"spanish": "...Ha llegado. Lo estaba esperando.",
						"vietnamese": "...Ngài đã đến rồi. Tôi đã chờ.",
						"thai": "...ท่านมาแล้วสินะ. ข้ารออยู่.",
						"hindi": "...आप आ गए। मैं इंतज़ार कर रहा था।"
					}
				},
				{
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "您是？",
						"french": "Et vous ?",
						"spanish": "¿Y usted?",
						"vietnamese": "Ngài là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "에코. 이 도시의… 그림자죠.",
						"english": "Echo. I am... this city's shadow.",
						"japanese": "エコー。この街の…影です。",
						"chinese": "艾可。我是这座城市的……影子。",
						"french": "Écho. Je suis... l'ombre de cette ville.",
						"spanish": "Eco. Soy... la sombra de esta ciudad.",
						"vietnamese": "Echo. Tôi là... cái bóng của thành phố này.",
						"thai": "เอคโค่. ข้าคือ…เงาของเมืองนี้.",
						"hindi": "इको। मैं... इस शहर की परछाई हूँ।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 구획은… 원래 이런 곳이 아니었어요.",
						"english": "This zone... it wasn't always like this.",
						"japanese": "この区画は…元々、こんな場所じゃなかったんです。",
						"chinese": "这个区域……它以前不是这样的。",
						"french": "Cette zone... elle n'a pas toujours été comme ça.",
						"spanish": "Esta zona... no siempre fue así.",
						"vietnamese": "Khu vực này... vốn dĩ không phải là nơi như thế này.",
						"thai": "เขตนี้…เมื่อก่อนไม่ใช่แบบนี้.",
						"hindi": "यह क्षेत्र... पहले ऐसा नहीं था।"
					}
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
					"speaker": "echo",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "이 지역은 과거가 금기시된 곳이에요.",
						"english": "The past is forbidden here.",
						"japanese": "この地では過去が禁じられている。",
						"chinese": "此地禁忌过往。",
						"french": "Le passé est proscrit ici.",
						"spanish": "El pasado está prohibido aquí.",
						"vietnamese": "Quá khứ bị cấm kỵ ở đây.",
						"thai": "ที่นี่อดีตเป็นสิ่งต้องห้าม",
						"hindi": "यहां अतीत वर्जित है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "금기?",
						"english": "Forbidden?",
						"japanese": "禁忌？",
						"chinese": "禁忌？",
						"french": "Proscrit ?",
						"spanish": "¿Prohibido?",
						"vietnamese": "Cấm kỵ?",
						"thai": "ต้องห้าม?",
						"hindi": "वर्जित?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "오래된 사진 한 장조차… 여기선 사라지거든요.",
						"english": "Even an old photo... vanishes here.",
						"japanese": "古い写真一枚でさえ… ここでは消えてしまう。",
						"chinese": "即使一张老照片… 在此也会消失。",
						"french": "Même une vieille photo... disparaît ici.",
						"spanish": "Incluso una vieja foto... desaparece aquí.",
						"vietnamese": "Ngay cả một bức ảnh cũ… cũng biến mất ở đây.",
						"thai": "แม้แต่รูปถ่ายเก่าๆ… ก็หายไปที่นี่",
						"hindi": "यहां तक कि एक पुरानी तस्वीर भी... यहां गायब हो जाती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "지워진 것들이 너무 많아요.",
						"english": "So much has been erased.",
						"japanese": "消されたものが多すぎる。",
						"chinese": "太多东西被抹去。",
						"french": "Tant de choses effacées.",
						"spanish": "Demasiadas cosas borradas.",
						"vietnamese": "Quá nhiều thứ đã bị xóa sổ.",
						"thai": "มีหลายสิ่งถูกลบเลือนไปมากแล้ว",
						"hindi": "बहुत कुछ मिटा दिया गया है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "때때로… 슬픈 노래가 들려와요.",
						"english": "Sometimes... a sad song can be heard.",
						"japanese": "時々… 悲しい歌が聞こえてくる。",
						"chinese": "有时… 能听到悲伤的歌声。",
						"french": "Parfois... une triste mélodie se fait entendre.",
						"spanish": "A veces... se oye una canción triste.",
						"vietnamese": "Đôi khi… nghe thấy một bài hát buồn.",
						"thai": "บางครั้ง… ได้ยินเพลงเศร้า",
						"hindi": "कभी-कभी... एक उदास गीत सुनाई देता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "노래?",
						"english": "A song?",
						"japanese": "歌？",
						"chinese": "歌声？",
						"french": "Une mélodie ?",
						"spanish": "¿Una canción?",
						"vietnamese": "Bài hát?",
						"thai": "เพลง?",
						"hindi": "गीत?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "밤마다 어딘가에서. 아주 애처로운 멜로디.",
						"english": "Somewhere, every night. A very mournful melody.",
						"japanese": "毎晩、どこかから。とても哀れなメロディ。",
						"chinese": "每晚，在某个地方。一段非常凄楚的旋律。",
						"french": "Quelque part, chaque nuit. Une mélodie très plaintive.",
						"spanish": "En algún lugar, cada noche. Una melodía muy lúgubre.",
						"vietnamese": "Mỗi đêm, từ đâu đó. Một giai điệu rất bi ai.",
						"thai": "ทุกคืน จากที่ไหนสักแห่ง ทำนองที่น่าเวทนามาก",
						"hindi": "हर रात, कहीं से। एक बहुत ही मार्मिक धुन।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "누구도 그 의미를 몰라요.",
						"english": "No one knows its meaning.",
						"japanese": "誰もその意味を知らない。",
						"chinese": "没人知道它的含义。",
						"french": "Personne n'en connaît le sens.",
						"spanish": "Nadie sabe su significado.",
						"vietnamese": "Không ai biết ý nghĩa của nó.",
						"thai": "ไม่มีใครรู้ความหมายของมัน",
						"hindi": "कोई इसका अर्थ नहीं जानता।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 나아가면… 되돌릴 수 없을지도 몰라요.",
						"english": "If we go any further... there might be no turning back.",
						"japanese": "これ以上進めば… もう引き返せないかも。",
						"chinese": "如果再往前走… 可能就无法回头了。",
						"french": "Si on va plus loin... il n'y aura peut-être plus de retour.",
						"spanish": "Si avanzamos más... quizás no haya vuelta atrás.",
						"vietnamese": "Nếu đi xa hơn nữa… có thể sẽ không thể quay lại.",
						"thai": "ถ้าไปไกลกว่านี้… อาจจะย้อนกลับไม่ได้แล้ว",
						"hindi": "अगर हम आगे बढ़े... तो शायद पीछे मुड़ना संभव न हो।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "망령 집사를 쫓아야 해.",
						"english": "I must pursue the phantom butler.",
						"japanese": "亡霊執事を追わなくては。",
						"chinese": "我必须追捕幽灵管家。",
						"french": "Je dois pourchasser le majordome fantôme.",
						"spanish": "Debo perseguir al mayordomo fantasma.",
						"vietnamese": "Tôi phải đuổi theo quản gia ma.",
						"thai": "ฉันต้องตามล่าคนรับใช้ผี",
						"hindi": "मुझे प्रेत बटलर का पीछा करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그가 지키려는 게 뭔지… 궁금하지 않으세요?",
						"english": "Aren't you curious what he's trying to protect?",
						"japanese": "彼が守ろうとしているものが何なのか…気になりませんか？",
						"chinese": "难道你不好奇他究竟想守护什么吗？",
						"french": "Ne vous demandez-vous pas ce qu'il essaie de protéger ?",
						"spanish": "¿No te preguntas qué está tratando de proteger?",
						"vietnamese": "Ngươi không tò mò hắn đang cố bảo vệ cái gì sao?",
						"thai": "ท่านไม่สงสัยหรือว่าเขากำลังปกป้องสิ่งใด?",
						"hindi": "क्या आपको जिज्ञासा नहीं होती कि वह क्या बचाने की कोशिश कर रहा है?"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "폐허 속에서… 잊힌 문양을 본 적이 있어요.",
						"english": "In the ruins... I once saw a forgotten emblem.",
						"japanese": "廃墟の中で…忘れられた文様を見たことがあります。",
						"chinese": "在废墟中…我曾见过被遗忘的图案。",
						"french": "Dans les ruines... j'ai déjà vu un emblème oublié.",
						"spanish": "En las ruinas... una vez vi un emblema olvidado.",
						"vietnamese": "Trong đống đổ nát… ta từng thấy một ký hiệu bị lãng quên.",
						"thai": "ในซากปรักหักพัง… ข้าเคยเห็นสัญลักษณ์ที่ถูกลืมเลือน",
						"hindi": "खंडहरों में… मैंने एक बार एक भूला हुआ प्रतीक देखा था।"
					}
				},
				{
					"content": {
						"korean": "…지켜야 할 것.",
						"english": "...Something to protect.",
						"japanese": "…守るべきもの。",
						"chinese": "……需要守护之物。",
						"french": "...Ce qu'il faut protéger.",
						"spanish": "...Algo que proteger.",
						"vietnamese": "…Thứ cần phải bảo vệ.",
						"thai": "…สิ่งที่ต้องปกป้อง",
						"hindi": "...बचाने योग्य चीज़।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "그림자가 다시 모든 것을 집어삼켰다.",
						"english": "Shadows consumed everything once more.",
						"japanese": "「影が再び全てを飲み込んだ。」",
						"chinese": "「阴影再次吞噬了一切。」",
						"french": "Les ombres engloutirent à nouveau tout.",
						"spanish": "Las sombras lo devoraron todo una vez más.",
						"vietnamese": "Bóng tối lại nhấn chìm tất cả.",
						"thai": "เงามืดกลืนกินทุกสิ่งอีกครั้ง",
						"hindi": "छाया ने फिर सब कुछ निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나약한 자… 이곳에서 사라져라.",
						"english": "Weakling... vanish from this place.",
						"japanese": "「弱き者よ…ここから消え失せろ。」",
						"chinese": "「弱者……从这里消失吧。」",
						"french": "Faible... disparais d'ici.",
						"spanish": "Débil... desaparece de aquí.",
						"vietnamese": "Kẻ yếu... biến khỏi nơi này đi.",
						"thai": "เจ้าผู้อ่อนแอ... จงหายไปจากที่นี่ซะ",
						"hindi": "कमज़ोर... इस जगह से मिट जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니… 난 반드시 진실을 밝힐 거야.",
						"english": "No... I will surely uncover the truth.",
						"japanese": "「いや…私は必ず真実を明らかにする。」",
						"chinese": "「不……我一定会揭示真相的。」",
						"french": "Non... je découvrirai la vérité, c'est certain.",
						"spanish": "No... sin duda descubriré la verdad.",
						"vietnamese": "Không... ta nhất định sẽ làm sáng tỏ sự thật.",
						"thai": "ไม่... ข้าจะเปิดเผยความจริงให้ได้",
						"hindi": "नहीं... मैं निश्चित रूप से सच का पता लगाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A massive shadow blocked the way.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "巨大的身影挡住了去路。",
						"french": "Une ombre gigantesque bloquait le chemin.",
						"spanish": "Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "เงาร่างมหึมากีดขวางอยู่เบื้องหน้า",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자. 더 이상 들어오지 마라.",
						"english": "Intruder. Proceed no further.",
						"japanese": "侵入者。これ以上入るな。",
						"chinese": "入侵者。止步于此。",
						"french": "Intruder. N'allez pas plus loin.",
						"spanish": "Invasor. No avances más.",
						"vietnamese": "Kẻ xâm nhập. Đừng tiến thêm nữa.",
						"thai": "ผู้บุกรุก อย่าก้าวเข้ามาอีก",
						"hindi": "घुसपैठिया। आगे मत बढ़ो।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가 망령 집사인가?",
						"english": "Are you the Specter Butler?",
						"japanese": "お前が亡霊執事か？",
						"chinese": "你是幽灵管家吗？",
						"french": "Es-tu le Majordome Spectral ?",
						"spanish": "¿Eres el Mayordomo Espectral?",
						"vietnamese": "Ngươi là quản gia vong linh sao?",
						"thai": "เจ้าคือพ่อบ้านวิญญาณรึ?",
						"hindi": "क्या तुम स्पेक्टर बटलर हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳의 질서는 내가 지킨다.",
						"english": "I uphold the order here.",
						"japanese": "ここの秩序は私が守る。",
						"chinese": "这里的秩序由我来守护。",
						"french": "Je maintiens l'ordre ici.",
						"spanish": "Yo mantengo el orden aquí.",
						"vietnamese": "Trật tự nơi đây do ta gìn giữ.",
						"thai": "ข้าจะรักษาความสงบเรียบร้อยที่นี่",
						"hindi": "यहाँ का क्रम मैं बनाए रखता हूँ।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지킨다고? 넌 이 도시를 병들게 하고 있어!",
						"english": "Protect it? You're sickening this city!",
						"japanese": "守るだと？お前はこの街を病ませている！",
						"chinese": "守护？你正在让这座城市病入膏肓！",
						"french": "Protéger ? Tu rends cette ville malade !",
						"spanish": "¿Proteger? ¡Estás enfermando esta ciudad!",
						"vietnamese": "Bảo vệ ư? Ngươi đang làm thành phố này mục ruỗng!",
						"thai": "ปกป้องหรือ? เจ้ากำลังทำให้เมืองนี้ป่วยไข้!",
						"hindi": "बचाना? तुम इस शहर को बीमार कर रहे हो!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…넌 모른다. 진실을.",
						"english": "...You don't know. The truth.",
						"japanese": "…お前は知らない。真実を。",
						"chinese": "……你不知道。真相。",
						"french": "...Tu ne sais pas. La vérité.",
						"spanish": "...No lo sabes. La verdad.",
						"vietnamese": "…Ngươi không biết. Sự thật.",
						"thai": "…เจ้าไม่รู้. ความจริง.",
						"hindi": "तुम नहीं जानते। सच को।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "망령은 사라졌다. 그러나 그 공허함은…",
						"english": "The specter vanished. Yet, the emptiness remains...",
						"japanese": "亡霊は消え去った。しかしその虚無感は…",
						"chinese": "幽灵消失了。然而那份空虚感…",
						"french": "Le spectre a disparu. Mais ce vide...",
						"spanish": "El espectro desapareció. Pero ese vacío...",
						"vietnamese": "Vong linh đã biến mất. Nhưng sự trống rỗng đó…",
						"thai": "วิญญาณร้ายหายไปแล้ว ทว่าความว่างเปล่านั้น…",
						"hindi": "स्पेक्टर गायब हो गया। फिर भी, वह खालीपन..."
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. {random_boss}는… 영원히…",
						"english": "...It's not over yet. {random_boss}... forever...",
						"japanese": "「…まだ終わってない。{random_boss}は…永遠に…」",
						"chinese": "「……还没结束。{random_boss}会……永远……」",
						"french": "...Ce n'est pas encore fini. {random_boss}... pour toujours...",
						"spanish": "...Aún no ha terminado. {random_boss}... para siempre...",
						"vietnamese": "...Chưa kết thúc đâu. {random_boss}... mãi mãi...",
						"thai": "...ยังไม่จบสิ้น {random_boss}... ชั่วนิรันดร์...",
						"hindi": "...अभी खत्म नहीं हुआ। {random_boss}... हमेशा के लिए..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that?",
						"japanese": "「何のことだ？」",
						"chinese": "「什么意思？」",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Nói gì vậy?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "क्या कह रहे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 기억은 희미했지만, 새로운 의문이 피어났다.",
						"english": "The city's memories faded, but new questions arose.",
						"japanese": "「都市の記憶は薄れたが、新たな疑問が生まれた。」",
						"chinese": "「城市的记忆变得模糊，新的疑问却浮现了。」",
						"french": "Les souvenirs de la ville s'estompaient, mais de nouvelles questions surgissaient.",
						"spanish": "Los recuerdos de la ciudad se desvanecieron, pero nuevas preguntas surgieron.",
						"vietnamese": "Ký ức thành phố mờ nhạt, nhưng những nghi vấn mới lại nảy sinh.",
						"thai": "ความทรงจำของเมืองเลือนหายไป แต่ปริศนาใหม่กลับผุดขึ้นมา",
						"hindi": "शहर की यादें धुंधली हो गईं, पर नए सवाल उठ खड़े हुए।"
					}
				}
			]
		}
	]
} as const;
