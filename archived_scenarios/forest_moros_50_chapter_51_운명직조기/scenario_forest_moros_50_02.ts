export const scenario_forest_moros_50_02 = {
	"scenario_id": "forest_moros_50_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 속삭였다. 길을 잃은 자를 위한 빛이라고.",
			"빛나는 실타래는 유혹의 덫처럼 드리워졌다.",
			"하지만 그 빛 아래, 섬뜩한 그림자가 꿈틀거렸다.",
			"이 길의 끝은 구원일까, 파멸일까."
		],
		"english": [
			"The forest whispered. A light for the lost.",
			"Shimmering threads hung like a tempting snare.",
			"But beneath that light, an eerie shadow writhed.",
			"Is this path's end salvation, or ruin?"
		],
		"japanese": [
			"森は囁いた。道に迷いし者のための光だと。",
			"輝く糸は、誘惑の罠のように垂れ下がっていた。",
			"しかしその光の下、不気味な影が蠢いていた。",
			"この道の終わりは、救済か、それとも破滅か。"
		],
		"chinese": [
			"森林低语。那是迷失者的光。",
			"闪耀的丝线如诱惑的陷阱般垂下。",
			"然而，在那光芒之下，诡异的阴影正在蠕动。",
			"这条路的尽头是救赎，还是毁灭？"
		],
		"french": [
			"La forêt murmura. Une lumière pour les égarés.",
			"Des fils scintillants pendaient comme un piège tentateur.",
			"Mais sous cette lumière, une ombre étrange se tordait.",
			"Le bout de ce chemin est-il le salut, ou la ruine ?"
		],
		"spanish": [
			"El bosque susurró. Una luz para los perdidos.",
			"Hilos brillantes pendían como una trampa seductora.",
			"Pero bajo esa luz, una sombra espeluznante se retorcía.",
			"¿El final de este camino es la salvación o la perdición?"
		],
		"vietnamese": [
			"Rừng thì thầm. Một ánh sáng cho kẻ lạc lối.",
			"Sợi chỉ lấp lánh giăng xuống như bẫy cám dỗ.",
			"Nhưng dưới ánh sáng đó, một cái bóng rùng rợn đang cựa quậy.",
			"Cuối con đường này là sự cứu rỗi, hay sự hủy diệt?"
		],
		"thai": [
			"ป่ากระซิบ แสงสว่างสำหรับผู้หลงทาง",
			"เส้นใยเรืองรองห้อยระย้าดุจกับดักล่อลวง",
			"แต่ใต้แสงนั้น เงาอันน่าขนลุกกลับบิดตัวไปมา",
			"ปลายทางนี้คือการไถ่บาป หรือความพินาศกันแน่?"
		],
		"hindi": [
			"जंगल ने फुसफुसाया। भटके हुए लोगों के लिए एक रोशनी।",
			"चमकते धागे एक मोहक जाल की तरह लटके हुए थे।",
			"लेकिन उस रोशनी के नीचे, एक भयानक परछाई रेंग रही थी।",
			"इस रास्ते का अंत मुक्ति है, या विनाश?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빛나는 실타래가 숲속을 가로질렀다. 마치 누군가 이정표를 만든 것처럼.",
						"english": "Shimmering threads cut across the forest, as if someone had made a landmark.",
						"japanese": "輝く糸が森を横切っていた。まるで誰かが道標を作ったかのように。",
						"chinese": "闪耀的丝线穿过森林，仿佛有人特意做了路标。",
						"french": "Des fils scintillants traversaient la forêt, comme si quelqu'un avait créé un repère.",
						"spanish": "Hilos brillantes cruzaban el bosque, como si alguien hubiera hecho un hito.",
						"vietnamese": "Sợi chỉ lấp lánh vắt ngang khu rừng, như thể ai đó đã tạo ra một dấu mốc.",
						"thai": "เส้นใยเรืองรองพาดผ่านป่า ราวกับมีใครบางคนทำเครื่องหมายไว้",
						"hindi": "चमकते धागे जंगल में फैले हुए थे, मानो किसी ने मील का पत्थर बनाया हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저게… 그 실타래인가?",
						"english": "Is that... the thread?",
						"japanese": "あれが…その糸なのか？",
						"chinese": "那是…那丝线吗？",
						"french": "C'est ça... le fil ?",
						"spanish": "¿Es eso... el hilo?",
						"vietnamese": "Đó có phải… sợi chỉ đó không?",
						"thai": "นั่น… คือเส้นใยนั้นหรือ?",
						"hindi": "क्या वह... वह धागा है?"
					}
				},
				{
					"action": "enter",
					"speaker": "cedar",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "네. 빛나는 운명의 실. 길을 잃은 자들을 구원하죠.",
						"english": "Yes. The luminous thread of destiny. It saves the lost.",
						"japanese": "はい。輝く運命の糸です。道に迷いし者たちを救い出します。",
						"chinese": "是的。那是命运之光线。它会拯救迷失者。",
						"french": "Oui. Le fil lumineux du destin. Il sauve les égarés.",
						"spanish": "Sí. El hilo luminoso del destino. Salva a los perdidos.",
						"vietnamese": "Vâng. Sợi chỉ định mệnh rực rỡ. Nó cứu rỗi những kẻ lạc lối.",
						"thai": "ใช่ เส้นใยแห่งโชคชะตาที่ส่องสว่าง มันช่วยผู้หลงทาง",
						"hindi": "हाँ। भाग्य का चमकता धागा। यह भटके हुए लोगों को बचाता है।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "구원이라니…",
						"english": "Salvation...?",
						"japanese": "救済だと…？",
						"chinese": "救赎…？",
						"french": "Le salut… ?",
						"spanish": "¿Salvación...?",
						"vietnamese": "Cứu rỗi ư…?",
						"thai": "การไถ่บาปหรือ?",
						"hindi": "मुक्ति...?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모로스님의 선물이에요. 이 길을 따라가면 돼요.",
						"english": "It's a gift from Lord Moros. Just follow this path.",
						"japanese": "モロス様の贈り物です。この道を進めばよいのです。",
						"chinese": "这是莫罗斯大人的礼物。沿着这条路走就行了。",
						"french": "C'est un don de Seigneur Moros. Suivez simplement ce chemin.",
						"spanish": "Es un regalo de Lord Moros. Solo sigue este camino.",
						"vietnamese": "Đó là món quà từ Chúa Moros. Cứ đi theo con đường này.",
						"thai": "เป็นของขวัญจากท่านมอรอส แค่เดินตามทางนี้ไป",
						"hindi": "यह भगवान मोरोस का उपहार है। बस इस रास्ते पर चलिए।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "봐요. 이 실들이 얼마나 많은 생명을 구했는지.",
						"english": "See? How many lives these threads have saved.",
						"japanese": "ほら。この糸がどれだけ多くの命を救ったか。",
						"chinese": "看。这些丝线拯救了多少生命。",
						"french": "Voyez. Combien de vies ces fils ont sauvées.",
						"spanish": "¿Ves? Cuántas vidas han salvado estos hilos.",
						"vietnamese": "Thấy không? Những sợi chỉ này đã cứu bao nhiêu sinh mạng.",
						"thai": "เห็นไหม เส้นใยเหล่านี้ช่วยชีวิตคนมามากแค่ไหน",
						"hindi": "देखो। इन धागों ने कितनी जिंदगियाँ बचाई हैं।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 실에 얽힌 저 형상들은 뭐지?",
						"english": "But... what are those figures entangled in the threads?",
						"japanese": "しかし…糸に絡みついているあの形は何だ？",
						"chinese": "但是……那些被丝线缠绕的形体是什么？",
						"french": "Mais... qu'est-ce que ces formes empêtrées dans les fils ?",
						"spanish": "¿Pero... qué son esas figuras enredadas en los hilos?",
						"vietnamese": "Nhưng... những hình thù vướng vào sợi chỉ đó là gì?",
						"thai": "แต่ว่า... รูปร่างที่พันอยู่ในเส้นด้ายนั่นคืออะไร?",
						"hindi": "लेकिन... धागों में उलझी वे आकृतियाँ क्या हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "아, 저건… 길을 벗어난 자들이에요. 실의 가르침을 거스른 대가죠.",
						"english": "Ah, those are... those who strayed from the path. The price for defying the threads' teachings.",
						"japanese": "ああ、あれは…道を踏み外した者たちです。糸の教えに逆らった代償ですよ。",
						"chinese": "啊，那是……那些偏离了道路的人。违背丝线教诲的代价。",
						"french": "Ah, ce sont... ceux qui se sont écartés du chemin. Le prix d'avoir défié les enseignements des fils.",
						"spanish": "Ah, esos son... los que se desviaron del camino. El precio por desafiar las enseñanzas de los hilos.",
						"vietnamese": "À, đó là... những kẻ lạc lối. Cái giá phải trả vì chống lại lời dạy của sợi chỉ.",
						"thai": "อ่า, นั่นคือ... พวกที่หลงทางไป นั่นคือผลกรรมจากการไม่เชื่อคำสอนของเส้นด้าย",
						"hindi": "आह, वे... वे हैं जो राह से भटक गए। धागों की शिक्षाओं का उल्लंघन करने की कीमत।"
					}
				},
				{
					"content": {
						"korean": "정말 그럴까…?",
						"english": "Is that really true...?",
						"japanese": "本当にそうなのか…？",
						"chinese": "真是这样吗……？",
						"french": "Vraiment...?",
						"spanish": "¿Será verdad...?",
						"vietnamese": "Thật sự là vậy sao...?",
						"thai": "จริงหรือ...?",
						"hindi": "क्या यह सच है...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "의심은 금물이에요. 모로스님은 모두에게 자비를 베푸시니까.",
						"english": "Doubt is forbidden. Master Moros bestows mercy upon all.",
						"japanese": "疑いは禁物です。モロス様は皆に慈悲を施されますから。",
						"chinese": "怀疑是禁忌。莫罗斯大人对所有人施予慈悲。",
						"french": "Le doute est interdit. Maître Moros accorde sa miséricorde à tous.",
						"spanish": "La duda está prohibida. El Maestro Moros concede misericordia a todos.",
						"vietnamese": "Nghi ngờ là điều cấm kỵ. Ngài Moros ban lòng từ bi cho tất cả.",
						"thai": "การสงสัยเป็นสิ่งต้องห้าม ท่านโมโรสทรงเมตตาแก่ทุกคน",
						"hindi": "संदेह वर्जित है। गुरु मोरोस सभी पर दया करते हैं।"
					}
				},
				{
					"content": {
						"korean": "저 실들이 밤에 더 강하게 빛나는 것 같아.",
						"english": "Those threads seem to glow more intensely at night.",
						"japanese": "あの糸、夜になるともっと強く光るみたい。",
						"chinese": "那些丝线在夜里似乎发光更强了。",
						"french": "Ces fils semblent briller plus fort la nuit.",
						"spanish": "Esos hilos parecen brillar más intensamente por la noche.",
						"vietnamese": "Những sợi chỉ đó dường như phát sáng mạnh hơn vào ban đêm.",
						"thai": "เส้นด้ายเหล่านั้นดูเหมือนจะสว่างไสวมากขึ้นในตอนกลางคืน",
						"hindi": "वे धागे रात में और तेज़ी से चमकते हुए लगते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "왠지… 실에 닿은 식물들이 시들고 있어.",
						"english": "Somehow... plants touching the threads are withering.",
						"japanese": "なぜか…糸に触れた植物が枯れている。",
						"chinese": "不知为何……碰到丝线的植物都枯萎了。",
						"french": "D'une certaine façon... les plantes touchant les fils se fanent.",
						"spanish": "De alguna manera... las plantas que tocan los hilos se están marchitando.",
						"vietnamese": "Không hiểu sao... những cây chạm vào sợi chỉ đang héo úa.",
						"thai": "ทำไมก็ไม่รู้... พืชที่สัมผัสเส้นด้ายกำลังเหี่ยวเฉา",
						"hindi": "किसी तरह... धागों को छूने वाले पौधे मुरझा रहे हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "착각일 거예요. 이 실은 생명을 지키는 힘이죠.",
						"english": "It must be an illusion. These threads are the power that protects life.",
						"japanese": "それは錯覚でしょう。この糸は命を守る力なのですから。",
						"chinese": "那一定是错觉。这些丝线是守护生命的力量。",
						"french": "C'est une illusion. Ces fils sont le pouvoir qui protège la vie.",
						"spanish": "Debe ser una ilusión. Estos hilos son el poder que protege la vida.",
						"vietnamese": "Đó chắc là ảo ảnh thôi. Sợi chỉ này là sức mạnh bảo vệ sự sống.",
						"thai": "คงเป็นแค่ภาพลวงตา เส้นด้ายเหล่านี้คือพลังที่ปกป้องชีวิต",
						"hindi": "यह एक भ्रम होगा। ये धागे जीवन को बचाने की शक्ति हैं।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 뭔가 이상해.",
						"english": "No... something's wrong.",
						"japanese": "いや…何かがおかしい。",
						"chinese": "不……有什么不对劲。",
						"french": "Non... quelque chose ne va pas.",
						"spanish": "No... algo está mal.",
						"vietnamese": "Không... có gì đó không ổn.",
						"thai": "ไม่... มีบางอย่างผิดปกติ",
						"hindi": "नहीं... कुछ तो गड़बड़ है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "cedar",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "이제 망설일 시간이 없어요. 운명의 실은 당신을 기다려요.",
						"english": "There's no time to hesitate now. The threads of fate await you.",
						"japanese": "もうためらっている時間はありません。運命の糸があなたを待っています。",
						"chinese": "现在没有时间犹豫了。命运的丝线在等待着你。",
						"french": "Plus de temps à hésiter. Les fils du destin vous attendent.",
						"spanish": "No hay tiempo para dudar ahora. Los hilos del destino te esperan.",
						"vietnamese": "Không còn thời gian để do dự nữa. Sợi chỉ định mệnh đang chờ đợi bạn.",
						"thai": "ไม่มีเวลาลังเลแล้ว เส้นด้ายแห่งโชคชะตากำลังรอคุณอยู่",
						"hindi": "अब झिझकने का समय नहीं है। नियति के धागे आपका इंतजार कर रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "(깊은 한숨) …이 길을 가야만 해.",
						"english": "(Deep sigh) ...I have to take this path.",
						"japanese": "（深いため息）…この道を行くしかない。",
						"chinese": "（深深的叹息）……我必须走这条路。",
						"french": "(Soupir profond) ...Je dois suivre ce chemin.",
						"spanish": "(Un profundo suspiro) ...Debo seguir este camino.",
						"vietnamese": "(Thở dài) ...Mình phải đi con đường này.",
						"thai": "(ถอนหายใจลึกๆ) ...ฉันต้องไปตามเส้นทางนี้",
						"hindi": "(गहरी सांस) ...मुझे यह रास्ता अपनाना ही होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왠지 모르게… 슬픈 울음소리가 들리는 것 같아.",
						"english": "I feel like I hear a sad cry... for some reason.",
						"japanese": "なぜか…悲しい鳴き声が聞こえる気がする。",
						"chinese": "不知为何……我好像听到了悲伤的哭声。",
						"french": "J'ai l'impression d'entendre un cri triste… sans savoir pourquoi.",
						"spanish": "Siento que oigo un llanto triste... por alguna razón.",
						"vietnamese": "Không hiểu sao… tôi cứ nghe thấy tiếng khóc thảm thương.",
						"thai": "ไม่รู้ทำไม… เหมือนได้ยินเสียงร้องไห้เศร้าๆ เลย",
						"hindi": "न जाने क्यों… मुझे एक उदास रोने की आवाज़ सुनाई दे रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "들리지 않아요. 오직 모로스님의 인도만이 있을 뿐.",
						"english": "I hear nothing. Only the guidance of Lord Moros exists.",
						"japanese": "聞こえません。モロス様の導きがあるだけです。",
						"chinese": "听不见。只有摩罗斯大人的指引。",
						"french": "Je n'entends rien. Il n'y a que la guidance de Lord Moros.",
						"spanish": "No oigo nada. Solo existe la guía del Señor Moros.",
						"vietnamese": "Tôi không nghe thấy gì cả. Chỉ có sự dẫn lối của Moros đại nhân mà thôi.",
						"thai": "ไม่ได้ยินอะไรเลย มีแต่คำชี้แนะของท่านโมรอสเท่านั้น",
						"hindi": "मुझे कुछ सुनाई नहीं देता। केवल मोरोस प्रभु का मार्गदर्शन है।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 가겠어. 하지만… 내가 본 걸 믿을 거야.",
						"english": "We'll go. But... I'll believe what I saw.",
						"japanese": "我々は行く。だが…私は見たものを信じる。",
						"chinese": "我们会去。但是……我会相信我所看到的。",
						"french": "Nous irons. Mais… je croirai ce que j'ai vu.",
						"spanish": "Iremos. Pero… creeré lo que vi.",
						"vietnamese": "Chúng ta sẽ đi. Nhưng… tôi sẽ tin vào những gì tôi đã thấy.",
						"thai": "เราจะไป แต่...ฉันจะเชื่อสิ่งที่ฉันเห็น",
						"hindi": "हम जाएंगे। पर… मैं वही मानूंगा जो मैंने देखा है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 결국 실에 얽매일 뿐.",
						"english": "Fools... You'll only get tangled in the threads in the end.",
						"japanese": "愚か者どもめ…結局、糸に絡め取られるだけだ。",
						"chinese": "愚蠢的家伙们…最终只会纠缠于丝线之中。",
						"french": "Imbéciles... Vous ne ferez que vous enchevêtrer dans les fils à la fin.",
						"spanish": "Necios... Al final, solo se enredarán en los hilos.",
						"vietnamese": "Những kẻ ngốc... Rốt cuộc cũng chỉ bị vướng vào sợi tơ.",
						"thai": "พวกโง่เง่า... สุดท้ายก็แค่พันธนาการด้วยด้ายเท่านั้น",
						"hindi": "मूर्खों... अंत में तुम बस धागों में उलझ जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(고통에 찬) 크윽… 끝나지 않아…!",
						"english": "(In pain) Ugh... It won't end...!",
						"japanese": "（苦痛に満ちた声で）くっ…終わらない…！",
						"chinese": "(痛苦地) 咳…不会结束的…！",
						"french": "(Douloureusement) Ugh... Ça ne finira pas... !",
						"spanish": "(Con dolor) Ugh... ¡No terminará...!",
						"vietnamese": "(Đau đớn) Khụ... Chưa kết thúc đâu...!",
						"thai": "(ด้วยความเจ็บปวด) อึก... ไม่จบสิ้น...!",
						"hindi": "(दर्द में) उफ़... यह खत्म नहीं होगा...!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 분노는… 더 큰 숲을 키울 뿐이다.",
						"english": "Your wrath... will only grow a larger forest.",
						"japanese": "お前たちの怒りは…より大きな森を育むだけだ。",
						"chinese": "你们的愤怒…只会滋养更大的森林。",
						"french": "Votre fureur... ne fera que faire grandir une forêt plus vaste.",
						"spanish": "Vuestra ira... solo hará crecer un bosque más grande.",
						"vietnamese": "Sự phẫn nộ của các ngươi... chỉ làm cho khu rừng lớn hơn mà thôi.",
						"thai": "ความโกรธของพวกเจ้า... จะทำให้ป่าเติบโตขึ้นเท่านั้น",
						"hindi": "तुम्हारा क्रोध... बस एक बड़ा जंगल ही पैदा करेगा।"
					}
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "cedar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "봐요, 실이 안내한 곳은…",
						"english": "Look, the thread led us to...",
						"japanese": "見て、糸が導いた場所は…",
						"chinese": "看，线引导我们来到了……",
						"french": "Regardez, le fil nous a menés à…",
						"spanish": "Mira, el hilo nos guió a…",
						"vietnamese": "Nhìn kìa, nơi sợi chỉ dẫn lối là…",
						"thai": "ดูสิ ที่ที่ด้ายนำทางไปคือ...",
						"hindi": "देखो, धागे ने हमें… यहाँ तक पहुंचाया है।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "그 순간, 거대한 그림자가 앞을 가로막았다.",
						"english": "At that moment, a giant shadow blocked the way.",
						"japanese": "その瞬間、巨大な影が道を塞いだ。",
						"chinese": "就在那一刻，一个巨大的阴影挡住了去路。",
						"french": "À cet instant, une ombre gigantesque bloqua le chemin.",
						"spanish": "En ese momento, una sombra gigante bloqueó el camino.",
						"vietnamese": "Ngay khoảnh khắc đó, một bóng đen khổng lồ đã chắn ngang đường.",
						"thai": "ในตอนนั้น เงาขนาดมหึมาก็ขวางทางไว้",
						"hindi": "उसी पल, एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐흐… 운명의 실? 그건 내 놀이터일 뿐.",
						"english": "Hehehe... Thread of fate? That's just my playground.",
						"japanese": "フフフ…運命の糸？それは私の遊び場に過ぎない。",
						"chinese": "呵呵呵……命运之线？那不过是我的游乐场罢了。",
						"french": "Hahaha… Le fil du destin ? Ce n'est que mon terrain de jeu.",
						"spanish": "Jejeje… ¿El hilo del destino? Eso es solo mi patio de juegos.",
						"vietnamese": "Hê hê hê… Sợi chỉ định mệnh ư? Đó chỉ là sân chơi của ta thôi.",
						"thai": "หึๆๆ... ด้ายแห่งโชคชะตา? นั่นมันก็แค่สนามเด็กเล่นของข้าเท่านั้นแหละ",
						"hindi": "हीहीही… नियति का धागा? वो तो बस मेरा खेल का मैदान है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈이 이 길을 더럽혔구나!",
						"english": "You defiled this path!",
						"japanese": "貴様がこの道を穢したのか！",
						"chinese": "你玷污了这条路！",
						"french": "Tu as souillé ce chemin !",
						"spanish": "¡Tú profanaste este camino!",
						"vietnamese": "Ngươi đã làm ô uế con đường này!",
						"thai": "แกนั่นแหละที่ทำให้เส้นทางนี้แปดเปื้อน!",
						"hindi": "तुमने इस रास्ते को अपवित्र कर दिया!"
					}
				},
				{
					"content": {
						"korean": "진실을 알게 된 자는… 모두 이곳에서 끝난다.",
						"english": "All who learn the truth... end here.",
						"japanese": "真実を知った者は…皆、ここで終わる。",
						"chinese": "所有知晓真相之人……都将在此终结。",
						"french": "Tous ceux qui connaissent la vérité… finissent ici.",
						"spanish": "Todos los que conocen la verdad… terminan aquí.",
						"vietnamese": "Tất cả những kẻ biết được sự thật… đều sẽ kết thúc tại đây.",
						"thai": "ผู้ที่ล่วงรู้ความจริง... ทั้งหมดจะจบลงที่นี่",
						"hindi": "सच जानने वाले सभी… यहीं खत्म होते हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(경악하며) 이럴 수가… 도망쳐요! 이럴 생각은 아니었는데…",
						"english": "(Horrified) No way... Run! This wasn't supposed to happen...",
						"japanese": "(驚愕して) まさか…逃げろ！こんなはずじゃなかったのに…",
						"chinese": "(惊恐) 不可能……快跑！不应该是这样的……",
						"french": "(Horrifié) Impossible… Fuyez ! Ce n'était pas censé se passer comme ça…",
						"spanish": "(Horrorizado) No puede ser… ¡Corran! No era lo que pretendía…",
						"vietnamese": "Không thể nào… Chạy đi! Tôi không hề muốn thế này…",
						"thai": "(ตกใจสุดขีด) ไม่จริง... หนีไป! ไม่น่าจะเป็นแบบนี้เลย...",
						"hindi": "(हैरानी से) नहीं… भागो! ऐसा नहीं होना चाहिए था…"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "시더…! 망할!",
						"english": "Cinder...! Damn it!",
						"japanese": "シダー…！くそっ！",
						"chinese": "希德……！该死！",
						"french": "Cinder… ! Maudit !",
						"spanish": "¡Cinder…! ¡Maldita sea!",
						"vietnamese": "Cinder…! Chết tiệt!",
						"thai": "ซินเดอร์...! บ้าเอ๊ย!",
						"hindi": "सिंडर…! धिक्कार है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "녀석도 결국 내 장기말이었을 뿐.",
						"english": "He was nothing but my pawn.",
						"japanese": "奴も結局、俺の駒に過ぎなかった。",
						"chinese": "那家伙终究只是我的棋子。",
						"french": "Ce n'était qu'un pion, après tout.",
						"spanish": "Al final, él también fue solo mi peón.",
						"vietnamese": "Rốt cuộc thì hắn cũng chỉ là con cờ của ta.",
						"thai": "ท้ายที่สุดแล้ว หมอนั่นก็เป็นแค่หมากตัวหนึ่งของข้าเท่านั้น",
						"hindi": "आखिरकार वह भी बस मेरा मोहरा था।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 아직… 진짜 운명은… 시작도 안 했어…! 모로스님의 힘은…!",
						"english": "Ugh... Not yet... The true destiny hasn't even begun...! Lord Moros's power...!",
						"japanese": "くっ…まだ…本当の運命は…始まってすらいない…！モロス様の力は…！",
						"chinese": "咳…还没…真正的命运…甚至还没开始…！莫罗斯大人的力量…！",
						"french": "Ugh... Pas encore... Le vrai destin n'a même pas commencé... ! Le pouvoir de Moros... !",
						"spanish": "Ugh... Todavía no... El verdadero destino ni siquiera ha empezado... ¡El poder de Lord Moros...!",
						"vietnamese": "Khụ... Vẫn chưa... Vận mệnh thật sự... còn chưa bắt đầu...! Sức mạnh của Moros đại nhân...!",
						"thai": "อึก... ยัง... โชคชะตาที่แท้จริง... ยังไม่เริ่มเลย...! พลังของท่านโมรอส...!",
						"hindi": "उफ़... अभी नहीं... असली नियति तो... शुरू भी नहीं हुई...! मोरोस स्वामी की शक्ति...!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네놈의 유혹에 넘어가지 않아!",
						"english": "I won't fall for your temptation!",
						"japanese": "貴様の誘惑には乗らない！",
						"chinese": "我不会被你的诱惑所迷惑！",
						"french": "Je ne céderai pas à ta tentation !",
						"spanish": "¡No caeré en tu tentación!",
						"vietnamese": "Ta sẽ không bị cám dỗ của ngươi lừa gạt đâu!",
						"thai": "ข้าจะไม่หลงกลการยั่วยวนของเจ้า!",
						"hindi": "मैं तुम्हारी लालच में नहीं फँसूंगा!"
					}
				},
				{
					"content": {
						"korean": "정체 모를 괴물은 빛나는 실타래 속으로 스러졌다.",
						"english": "The unknown monster faded into the shining threads.",
						"japanese": "正体不明の怪物は、輝く糸の束の中に消えていった。",
						"chinese": "身份不明的怪物消失在闪耀的线团之中。",
						"french": "Le monstre inconnu disparut dans l'écheveau lumineux.",
						"spanish": "El monstruo desconocido se desvaneció entre los hilos brillantes.",
						"vietnamese": "Quái vật không rõ danh tính tan biến vào những sợi tơ lấp lánh.",
						"thai": "สัตว์ประหลาดนิรนามสลายไปในกลุ่มด้ายที่ส่องแสง",
						"hindi": "अज्ञात राक्षस चमकदार धागों में समा गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만… 이 실타래는… 누구를 위한 길일까?",
						"english": "But... for whom is this path of threads?",
						"japanese": "しかし…この糸の束は…誰のための道なのだろうか？",
						"chinese": "但是…这线团…是谁的道路呢？",
						"french": "Mais... à qui est destiné cet écheveau ?",
						"spanish": "Pero... ¿para quién es este ovillo de hilos?",
						"vietnamese": "Nhưng... cuộn chỉ này... là con đường dành cho ai?",
						"thai": "แต่... กลุ่มด้ายนี้... เป็นเส้นทางสำหรับใครกัน?",
						"hindi": "लेकिन... ये धागों का गुच्छा... किसके लिए है?"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 여전히 속삭였다. 더 깊은 곳, 더 어두운 진실을 향해.",
						"english": "The forest still whispered. Towards a deeper place, towards a darker truth.",
						"japanese": "森は依然としてささやいていた。より深い場所へ、より暗い真実へと。",
						"chinese": "森林仍在低语。指向更深处，指向更黑暗的真相。",
						"french": "La forêt continuait de murmurer. Vers un lieu plus profond, vers une vérité plus sombre.",
						"spanish": "El bosque seguía susurrando. Hacia un lugar más profundo, hacia una verdad más oscura.",
						"vietnamese": "Khu rừng vẫn thì thầm. Hướng về nơi sâu hơn, hướng về sự thật đen tối hơn.",
						"thai": "ป่ายังคงกระซิบ กระซิบถึงสถานที่ที่ลึกกว่า ความจริงที่มืดมิดกว่า",
						"hindi": "जंगल अभी भी फुसफुसा रहा था। एक गहरी जगह की ओर, एक गहरे सच की ओर।"
					}
				}
			]
		}
	]
} as const;
