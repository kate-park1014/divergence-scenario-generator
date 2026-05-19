export const scenario_WorldRootTitan_Echo_01 = {
	"scenario_id": "WorldRootTitan_Echo_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"content": {
						"korean": "숲은 울부짖었다. 익숙했던 길이 사라졌다.",
						"english": "The forest howled. Familiar paths vanished.",
						"japanese": "森は咆哮した。慣れ親しんだ道は消えた。",
						"chinese": "森林在咆哮。熟悉的路径消失了。",
						"french": "La forêt hurlait. Les chemins familiers avaient disparu.",
						"spanish": "El bosque aulló. Los caminos familiares desaparecieron.",
						"vietnamese": "Rừng gào thét. Những con đường quen thuộc biến mất.",
						"thai": "ป่าคำราม เส้นทางที่คุ้นเคยหายไป",
						"hindi": "जंगल दहाड़ उठा। परिचित रास्ते गायब हो गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게… 대체 어떻게 된 거야?",
						"english": "What… what in the world happened?",
						"japanese": "これ…一体どうなってるんだ？",
						"chinese": "这…到底是怎么回事？",
						"french": "Qu'est-ce que… qu'est-ce qui s'est passé ?",
						"spanish": "¿Qué… qué demonios pasó?",
						"vietnamese": "Chuyện… chuyện quái gì đã xảy ra vậy?",
						"thai": "นี่… มันเกิดอะไรขึ้นกันแน่?",
						"hindi": "ये… आखिर क्या हो गया?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
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
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "아파… 머리가… 아파…",
						"english": "It hurts… my head… it hurts…",
						"japanese": "痛い…頭が…痛い…",
						"chinese": "好痛…头好痛…",
						"french": "Ça fait mal… ma tête… ça fait mal…",
						"spanish": "Me duele… la cabeza… me duele…",
						"vietnamese": "Đau quá… đầu… đau quá…",
						"thai": "เจ็บ… หัว… เจ็บ…",
						"hindi": "दर्द… मेरा सिर… दर्द कर रहा है…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "브라켄? 너 왜 이렇게…",
						"english": "Bracken? Why are you like this…?",
						"japanese": "ブラッケン？お前、どうしてこんなことに…",
						"chinese": "布莱肯？你为什么会这样…",
						"french": "Bracken ? Pourquoi es-tu comme ça… ?",
						"spanish": "¿Bracken? ¿Por qué estás así…?",
						"vietnamese": "Bracken? Sao cậu lại ra nông nỗi này…?",
						"thai": "แบร็กเคน? ทำไมถึงเป็นแบบนี้…",
						"hindi": "ब्रैकन? तुम ऐसे क्यों हो…?"
					}
				}
			],
			"id": 1
		},
		{
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
					"content": {
						"korean": "카인… 카인이… 웃었어…",
						"english": "Cain… Cain… smiled…",
						"japanese": "カインが…カインが…笑った…",
						"chinese": "该隐…该隐…笑了…",
						"french": "Caïn… Caïn… a souri…",
						"spanish": "Caín… Caín… sonrió…",
						"vietnamese": "Cain… Cain… đã cười…",
						"thai": "เคน… เคน… ยิ้ม…",
						"hindi": "कैन… कैन… हँसा…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카인? 그때… 무슨 일이 있었던 거야?",
						"english": "Cain? What happened back then?",
						"japanese": "カイン？あの時…何があったんだ？",
						"chinese": "该隐？那时候…发生了什么事？",
						"french": "Caïn ? Qu'est-ce qui s'est passé à ce moment-là ?",
						"spanish": "¿Caín? ¿Qué pasó en ese momento?",
						"vietnamese": "Cain? Khi đó… chuyện gì đã xảy ra vậy?",
						"thai": "เคน? ตอนนั้น… เกิดอะไรขึ้น?",
						"hindi": "कैन? तब… क्या हुआ था?"
					}
				},
				{
					"content": {
						"korean": "숲이 타던 날… 모두… 잠식됐어…",
						"english": "The day the forest burned... everyone... was consumed...",
						"japanese": "森が燃えた日… みんな… 蝕まれた…",
						"chinese": "森林燃烧的那天……所有……都被吞噬了……",
						"french": "Le jour où la forêt a brûlé... tous... ont été consumés...",
						"spanish": "El día que el bosque ardió... todos... fueron consumidos...",
						"vietnamese": "Ngày rừng bốc cháy... tất cả... đã bị nuốt chửng...",
						"thai": "วันที่ป่าลุกไหม้... ทุกคน... ถูกกลืนกิน...",
						"hindi": "जिस दिन जंगल जल गया... सभी... भस्म हो गए..."
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
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
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "나무들이… 뿌리가… 전부 날 보고…",
						"english": "The trees... the roots... all watching me...",
						"japanese": "木々が… 根が… 全部私を見ている…",
						"chinese": "树木……根系……都在看着我……",
						"french": "Les arbres... les racines... tout me regarde...",
						"spanish": "Los árboles... las raíces... todos me miran...",
						"vietnamese": "Những cái cây... những rễ cây... tất cả đều nhìn tôi...",
						"thai": "ต้นไม้... รากไม้... ทั้งหมดกำลังจับตาดูฉัน...",
						"hindi": "पेड़... जड़ें... सब मुझे देख रही हैं..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "세계수가 널 이렇게 만든 거야?",
						"english": "Did the World Tree do this to you?",
						"japanese": "世界樹があなたをこうさせたの？",
						"chinese": "是世界树让你变成这样的吗？",
						"french": "L'Arbre Monde t'a fait ça ?",
						"spanish": "¿El Árbol del Mundo te hizo esto?",
						"vietnamese": "Cây Thế Giới đã làm điều này với bạn sao?",
						"thai": "ต้นไม้โลกทำให้คุณเป็นแบบนี้เหรอ?",
						"hindi": "क्या विश्व वृक्ष ने तुम्हें ऐसा बनाया?"
					}
				},
				{
					"content": {
						"korean": "삼켜버려… 모든 걸… 삼켜버려…",
						"english": "Swallow it... everything... swallow it whole...",
						"japanese": "飲み込んで… 全てを… 飲み込んで…",
						"chinese": "吞噬吧……所有的一切……吞噬吧……",
						"french": "Engloutis-le... tout... engloutis tout...",
						"spanish": "Trágalo... todo... trágalo todo...",
						"vietnamese": "Nuốt chửng đi... mọi thứ... nuốt chửng tất cả...",
						"thai": "กลืนกินมัน... ทุกสิ่ง... กลืนกินทั้งหมด...",
						"hindi": "निगल लो... सब कुछ... सब कुछ निगल लो..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "도망쳐… 더 깊이 가면… 네 마음까지 삼켜질 거야…",
						"english": "Run away... if you go deeper... even your heart will be swallowed...",
						"japanese": "逃げて… もっと深く行けば… 君の心まで飲み込まれるよ…",
						"chinese": "快逃……如果再深入……你的心也会被吞噬的……",
						"french": "Fuis... si tu vas plus profond... même ton cœur sera englouti...",
						"spanish": "Huye... si vas más profundo... incluso tu corazón será devorado...",
						"vietnamese": "Chạy đi... nếu đi sâu hơn... ngay cả trái tim bạn cũng sẽ bị nuốt chửng...",
						"thai": "หนีไป... ถ้าคุณเข้าไปลึกกว่านี้... แม้แต่หัวใจของคุณก็จะถูกกลืนกิน...",
						"hindi": "भाग जाओ... अगर तुम और गहरे गए... तो तुम्हारा दिल भी निगल लिया जाएगा..."
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 이 숲을 이렇게 만든 걸 봐야겠어.",
						"english": "I can't stop. I have to see what did this to the forest.",
						"japanese": "止められない。この森をこうさせたものを見なければ。",
						"chinese": "我不能停。我必须看看是什么让这片森林变成这样。",
						"french": "Je ne peux pas m'arrêter. Je dois voir ce qui a fait ça à la forêt.",
						"spanish": "No puedo parar. Tengo que ver qué le hizo esto al bosque.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải xem điều gì đã làm cho khu rừng này ra nông nỗi này.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องเห็นว่าอะไรทำให้ป่าเป็นแบบนี้",
						"hindi": "मैं रुक नहीं सकता। मुझे देखना होगा कि इस जंगल को ऐसा किसने बनाया।"
					}
				},
				{
					"content": {
						"korean": "아니… 이건… 카인이 원하는 게 아니야…",
						"english": "No... this isn't... what Cain wants...",
						"japanese": "いや…これは…カインが望むものではない…",
						"chinese": "不……这不是……凯因想要的……",
						"french": "Non... ce n'est pas... ce que Caïn veut...",
						"spanish": "No... esto no es... lo que Caín quiere...",
						"vietnamese": "Không... đây không phải... điều Cain muốn...",
						"thai": "ไม่... นี่ไม่ใช่... สิ่งที่เคนต้องการ...",
						"hindi": "नहीं... यह... वह नहीं है जो कैन चाहता है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 나는… 시작일 뿐…",
						"english": "Ugh… I am… just the beginning…",
						"japanese": "くっ…私は…始まりに過ぎない…",
						"chinese": "呃…我…只是个开始…",
						"french": "Ugh… Je ne suis… que le début…",
						"spanish": "Ugh… Yo soy… solo el principio…",
						"vietnamese": "Khụ… Ta… chỉ là khởi đầu…",
						"thai": "อึก… ข้า… เป็นแค่จุดเริ่มต้น…",
						"hindi": "उह्ह… मैं… बस शुरुआत हूँ…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시작이라고? 그럼 대체 뭐가…",
						"english": "The beginning? Then what in the world…",
						"japanese": "始まりだと？なら一体何が…",
						"chinese": "开始？那究竟是什么…",
						"french": "Le début ? Alors qu'est-ce que…",
						"spanish": "¿El principio? Entonces qué diablos…",
						"vietnamese": "Khởi đầu sao? Vậy rốt cuộc là gì…",
						"thai": "จุดเริ่มต้นเหรอ? แล้วอะไรกันแน่…",
						"hindi": "शुरुआत? तो फिर क्या…"
					}
				},
				{
					"content": {
						"korean": "숲의 불안한 침묵 속에서, 또 다른 소리가 들려왔다. 뿌리가 속삭였다.",
						"english": "In the uneasy silence of the forest, another sound emerged. The roots whispered.",
						"japanese": "森の不穏な沈黙の中、別の音が響いた。根が囁いた。",
						"chinese": "在森林不安的寂静中，另一个声音传来。树根窃窃私语。",
						"french": "Dans le silence troublant de la forêt, un autre son apparut. Les racines chuchotaient.",
						"spanish": "En el inquietante silencio del bosque, otro sonido surgió. Las raíces susurraron.",
						"vietnamese": "Trong sự im lặng bất an của khu rừng, một âm thanh khác vang lên. Rễ cây thì thầm.",
						"thai": "ในความเงียบงันอันไม่สบายใจของป่า เสียงอื่นก็ดังขึ้น รากไม้กระซิบ",
						"hindi": "जंगल की बेचैन चुप्पी में, एक और आवाज़ उभरी। जड़ें फुसफुसाईं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "무릎 꿇어라… 이 숲의 일부가 되어라…",
						"english": "Kneel… Become a part of this forest…",
						"japanese": "跪け…この森の一部となれ…",
						"chinese": "跪下吧…成为这森林的一部分…",
						"french": "Agenouillez-vous… Devenez une partie de cette forêt…",
						"spanish": "Arrodíllate… Sé parte de este bosque…",
						"vietnamese": "Quỳ xuống đi… Hãy trở thành một phần của khu rừng này…",
						"thai": "คุกเข่าซะ… จงเป็นส่วนหนึ่งของป่านี้…",
						"hindi": "घुटने टेको… इस जंगल का हिस्सा बनो…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "절대… 포기 안 해!",
						"english": "Never… I won't give up!",
						"japanese": "絶対…諦めない！",
						"chinese": "绝不…放弃！",
						"french": "Jamais… Je n'abandonnerai pas !",
						"spanish": "¡Nunca… No me rendiré!",
						"vietnamese": "Không đời nào… Ta sẽ không bỏ cuộc!",
						"thai": "ไม่มีทาง… ข้าไม่ยอมแพ้!",
						"hindi": "कभी नहीं… मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 뒤틀린 숲의 수호자였다.",
						"english": "A colossal shadow blocked the path. It was the guardian of the twisted forest.",
						"japanese": "巨大な影が道を塞いだ。それは歪んだ森の守護者だった。",
						"chinese": "一个巨大的影子挡住了去路。那是扭曲森林的守护者。",
						"french": "Une ombre colossale bloquait le chemin. C'était le gardien de la forêt tordue.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el guardián del bosque retorcido.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Đó là người bảo vệ khu rừng bị bóp méo.",
						"thai": "เงาขนาดยักษ์ขวางทางไว้ มันคือผู้พิทักษ์ป่าบิดเบี้ยว",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह मुड़े हुए जंगल का संरक्षक था।"
					}
				},
				{
					"content": {
						"korean": "감히… 이 혼돈을 거스르려 하는가?",
						"english": "How dare you... defy this chaos?",
						"japanese": "よくも… この混沌に逆らおうとするか？",
						"chinese": "你竟敢……反抗这混沌？",
						"french": "Comment oses-tu... défier ce chaos ?",
						"spanish": "¿Cómo te atreves... a desafiar este caos?",
						"vietnamese": "Ngươi dám... chống lại sự hỗn loạn này sao?",
						"thai": "แกกล้าดียังไง... มาท้าทายความโกลาหลนี้?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस अराजकता का विरोध करने की?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 숲을 망쳤어. {random_boss}!",
						"english": "You ruined this forest, {random_boss}!",
						"japanese": "お前がこの森を台無しにしたんだ、{random_boss}！",
						"chinese": "你毁了这片森林，{random_boss}！",
						"french": "Tu as ruiné cette forêt, {random_boss} !",
						"spanish": "¡Tú arruinaste este bosque, {random_boss}!",
						"vietnamese": "Ngươi đã phá hủy khu rừng này, {random_boss}!",
						"thai": "แกทำลายป่านี้, {random_boss}!",
						"hindi": "तुमने इस जंगल को बर्बाद कर दिया, {random_boss}!"
					}
				},
				{
					"direction": "down",
					"speaker": "bracken",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "으아악… 도망쳐…",
						"english": "Aargh… Run…",
						"japanese": "うわあああ…逃げて…",
						"chinese": "啊啊啊…快跑…",
						"french": "Aaaah… Fuyez…",
						"spanish": "¡Aaaah… Huye…!",
						"vietnamese": "Aaa… Chạy đi…",
						"thai": "อ๊าก… หนีไป…",
						"hindi": "आह्ह… भागो…"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"카인의 진실은 숲을 흔들었다.",
			"세계수는 폭주했고, 모든 질서가 무너졌다.",
			"이제 숲은 이전과 달랐다. 생존은 고통이 되었다.",
			"혼돈 속에서, 한때 숲의 주민이었던 자가 나타났다."
		],
		"english": [
			"Cain's truth shook the forest.",
			"The World Tree ran wild, and all order collapsed.",
			"Now the forest was different. Survival became agony.",
			"Amidst the chaos, one who was once a resident of the forest appeared."
		],
		"japanese": [
			"カインの真実は森を揺るがした。",
			"世界樹は暴走し、全ての秩序が崩壊した。",
			"今や森は以前とは違った。生存は苦痛となった。",
			"混沌の中、かつて森の住人だった者が現れた。"
		],
		"chinese": [
			"该隐的真相震撼了森林。",
			"世界树暴走，所有秩序都崩溃了。",
			"如今森林已不同以往。生存变成了痛苦。",
			"在混乱中，一位曾经的森林居民出现了。"
		],
		"french": [
			"La vérité de Caïn a ébranlé la forêt.",
			"L'Arbre-Monde s'est emballé et tout l'ordre s'est effondré.",
			"Désormais, la forêt était différente. Survivre était devenu une agonie.",
			"Au milieu du chaos, quelqu'un qui était autrefois un résident de la forêt est apparu."
		],
		"spanish": [
			"La verdad de Caín sacudió el bosque.",
			"El Árbol del Mundo se desbocó y todo el orden colapsó.",
			"Ahora el bosque era diferente. La supervivencia se convirtió en agonía.",
			"En medio del caos, apareció alguien que una vez fue residente del bosque."
		],
		"vietnamese": [
			"Sự thật về Cain đã làm rung chuyển khu rừng.",
			"Cây Thế Giới hóa điên, mọi trật tự sụp đổ.",
			"Giờ đây khu rừng đã khác. Sự sống sót trở thành nỗi đau.",
			"Giữa hỗn loạn, một người từng là cư dân của khu rừng đã xuất hiện."
		],
		"thai": [
			"ความจริงของเคนสั่นสะเทือนป่า",
			"ต้นไม้โลกคลุ้มคลั่ง และความสงบทั้งหมดพังทลายลง",
			"บัดนี้ป่าไม่เหมือนเดิมแล้ว การรอดชีวิตกลายเป็นความทรมาน",
			"ท่ามกลางความวุ่นวาย มีผู้หนึ่งซึ่งครั้งหนึ่งเคยเป็นผู้อยู่อาศัยในป่าปรากฏตัวขึ้น"
		],
		"hindi": [
			"कैन के सच ने जंगल को हिला दिया।",
			"विश्व वृक्ष बेकाबू हो गया, और सारी व्यवस्था ढह गई।",
			"अब जंगल पहले जैसा नहीं था। अस्तित्व पीड़ा बन गया।",
			"अराजकता के बीच, एक समय जंगल का निवासी रहा व्यक्ति प्रकट हुआ।"
		]
	}
} as const;
