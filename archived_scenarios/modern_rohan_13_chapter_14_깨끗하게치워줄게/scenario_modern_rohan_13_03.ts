export const scenario_modern_rohan_13_03 = {
	"scenario_id": "modern_rohan_13_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
						"korean": "폐상가의 그림자, 어둡고 잿빛의 도심 뒷골목.",
						"english": "Shadows of the abandoned arcade, a dark,灰-tinged urban back alley.",
						"japanese": "廃れた商店街の影、暗く灰色の裏路地。",
						"chinese": "废弃商场的阴影，昏暗灰白的都市后巷。",
						"french": "Ombres de la galerie marchande abandonnée, une ruelle urbaine sombre et grise.",
						"spanish": "Sombras de la galería abandonada, un callejón urbano oscuro y grisáceo.",
						"vietnamese": "Bóng tối của khu phố thương mại bỏ hoang, một con hẻm đô thị tối tăm, xám xịt.",
						"thai": "เงาของห้างร้าง, ตรอกซอกซอยในเมืองที่มืดมิดและสีเทา.",
						"hindi": "वीरान बाज़ार की परछाईं, एक अंधेरी और धूसर शहरी गली।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런 곳에 누가 산다고 생각했겠어.",
						"english": "Who'd have thought anyone lived here?",
						"japanese": "こんな場所に誰が住んでると考えた？",
						"chinese": "谁会想到这种地方有人住。",
						"french": "Qui aurait cru que quelqu'un vivait ici ?",
						"spanish": "¿Quién habría pensado que alguien vivía aquí?",
						"vietnamese": "Ai mà nghĩ có người sống ở nơi này chứ.",
						"thai": "ใครจะไปคิดว่ามีคนอาศัยอยู่ที่นี่.",
						"hindi": "किसने सोचा होगा कि यहाँ कोई रहता है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "애쉬는… 여기서 뭘 청소하는 걸까.",
						"english": "What is Ash... cleaning here?",
						"japanese": "アッシュは…ここで何を掃除しているんだろう。",
						"chinese": "艾什…在这里打扫什么呢？",
						"french": "Qu'est-ce qu'Ash… nettoie ici ?",
						"spanish": "¿Qué está limpiando Ash… aquí?",
						"vietnamese": "Ash… đang dọn dẹp cái gì ở đây vậy?",
						"thai": "แอช… กำลังทำความสะอาดอะไรที่นี่.",
						"hindi": "ऐश… यहाँ क्या साफ कर रहा होगा?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "잠깐. 애쉬, 주머니에서 뭘 만져?",
						"english": "Wait. Ash, what are you touching in your pocket?",
						"japanese": "待って。アッシュ、ポケットで何を触ってる？",
						"chinese": "等等。艾什，你在口袋里摸什么？",
						"french": "Attends. Ash, qu'est-ce que tu touches dans ta poche ?",
						"spanish": "Espera. Ash, ¿qué estás tocando en tu bolsillo?",
						"vietnamese": "Khoan đã. Ash, cậu đang chạm vào cái gì trong túi vậy?",
						"thai": "เดี๋ยวก่อน. แอช, นายกำลังจับอะไรในกระเป๋า?",
						"hindi": "रुको। ऐश, अपनी जेब में क्या छू रहे हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "왜 그래, 벡스?",
						"english": "What's wrong, Vex?",
						"japanese": "どうしたの、ベックス？",
						"chinese": "怎么了，维克斯？",
						"french": "Qu'y a-t-il, Vex ?",
						"spanish": "¿Qué pasa, Vex?",
						"vietnamese": "Sao vậy, Vex?",
						"thai": "เป็นอะไร, เวกซ์?",
						"hindi": "क्या हुआ, वेक्स?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "저 마스크랑 장갑… 그냥 작업 도구가 아냐.",
						"english": "That mask and gloves… they're not just work tools.",
						"japanese": "そのマスクと手袋…ただの作業道具じゃない。",
						"chinese": "那面具和手套…不只是工作工具。",
						"french": "Ce masque et ces gants… ce ne sont pas de simples outils de travail.",
						"spanish": "Esa máscara y guantes… no son solo herramientas de trabajo.",
						"vietnamese": "Chiếc mặt nạ và găng tay đó… không phải chỉ là dụng cụ làm việc.",
						"thai": "หน้ากากและถุงมือนั่น… ไม่ใช่แค่เครื่องมือทำงาน.",
						"hindi": "वह मास्क और दस्ताने… सिर्फ काम के औज़ार नहीं हैं।"
					}
				},
				{
					"content": {
						"korean": "또 유품이 나왔어. 저 압축기 안에서.",
						"english": "Another personal effect... from inside that compressor.",
						"japanese": "また遺品が…あの圧縮機の中から。",
						"chinese": "又找到遗物了。在那台压缩机里。",
						"french": "Encore un effet personnel... de ce compresseur.",
						"spanish": "Otro objeto personal... de esa compactadora.",
						"vietnamese": "Lại có di vật rồi. Từ bên trong cái máy nén đó.",
						"thai": "เจอของดูต่างหน้าอีกแล้ว...จากในเครื่องอัดนั่น",
						"hindi": "फिर से अवशेष मिला... उस कंप्रेसर के अंदर से।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "설마… 저 소음도?",
						"english": "Could... that noise be related too?",
						"japanese": "まさか…あの騒音も？",
						"chinese": "难道…那噪音也是？",
						"french": "Serait-ce... ce bruit aussi ?",
						"spanish": "¿Y ese ruido... también?",
						"vietnamese": "Chẳng lẽ... cả tiếng ồn đó nữa?",
						"thai": "หรือว่า...เสียงนั่นก็ด้วย?",
						"hindi": "कहीं... वह शोर भी तो नहीं?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "압축기의 굉음이 불규칙하게 쿵, 쿵 울렸다. 마치 무언가를 짓누르는 듯.",
						"english": "The compressor roared, an irregular thud, thud. As if crushing something.",
						"japanese": "圧縮機の轟音が不規則に、ドスン、ドスンと響いた。まるで何かを押し潰すように。",
						"chinese": "压缩机轰鸣着，不规则地咚、咚作响。仿佛在碾压着什么。",
						"french": "Le rugissement du compresseur résonnait irrégulièrement, un 'boum, boum'. Comme s'il écrasait quelque chose.",
						"spanish": "El estruendo de la compactadora resonaba irregularmente, un golpe, golpe. Como si aplastara algo.",
						"vietnamese": "Tiếng gầm của máy nén vang lên bất thường, 'thình, thình'. Như thể đang nghiền nát thứ gì đó.",
						"thai": "เสียงคำรามของเครื่องอัดดังขึ้นอย่างไม่สม่ำเสมอ 'ตึง, ตึง' ราวกับกำลังบดขยี้บางสิ่ง",
						"hindi": "कंप्रेसर की गर्जना अनियमित रूप से 'धम, धम' गूँज रही थी। जैसे कुछ कुचल रहा हो।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "쓸데없는 호기심은, 죽음을 부르지.",
						"english": "Needless curiosity invites death.",
						"japanese": "無駄な好奇心は、死を招く。",
						"chinese": "多余的好奇心，只会招来死亡。",
						"french": "La curiosité inutile attire la mort.",
						"spanish": "La curiosidad inútil, atrae la muerte.",
						"vietnamese": "Sự tò mò vô ích, sẽ dẫn đến cái chết.",
						"thai": "ความอยากรู้อยากเห็นที่ไม่จำเป็น นำมาซึ่งความตาย",
						"hindi": "व्यर्थ की जिज्ञासा, मौत को दावत देती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "확실해. 애쉬는 뭔가 숨기고 있어.",
						"english": "I'm sure. Ash is hiding something.",
						"japanese": "間違いない。アッシュは何か隠している。",
						"chinese": "确定了。艾许在隐瞒什么。",
						"french": "C'est sûr. Ash cache quelque chose.",
						"spanish": "Estoy segura. Ash esconde algo.",
						"vietnamese": "Chắc chắn rồi. Ash đang che giấu điều gì đó.",
						"thai": "แน่ใจ แอชกำลังซ่อนอะไรบางอย่าง",
						"hindi": "पक्का। ऐश कुछ छुपा रहा है।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "점점 더 기분 나빠져.",
						"english": "It's getting more unsettling.",
						"japanese": "ますます嫌な気分になる。",
						"chinese": "感觉越来越不舒服了。",
						"french": "Je me sens de plus en plus mal.",
						"spanish": "Cada vez me siento peor.",
						"vietnamese": "Cảm giác ngày càng khó chịu.",
						"thai": "รู้สึกไม่ดีขึ้นเรื่อยๆ",
						"hindi": "यह और भी बुरा होता जा रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저 소음… 마치 심장 소리 같아.",
						"english": "That noise... it's like a heartbeat.",
						"japanese": "あの騒音…まるで心臓の音みたいだ。",
						"chinese": "那噪音…就像心跳声。",
						"french": "Ce bruit... on dirait un battement de cœur.",
						"spanish": "Ese ruido... parece un latido.",
						"vietnamese": "Tiếng ồn đó... giống như tiếng tim đập.",
						"thai": "เสียงนั่น...เหมือนเสียงหัวใจเต้น",
						"hindi": "वह शोर... मानो दिल की धड़कन हो।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "들켰나? 그래도 늦었어.",
						"english": "Discovered? Too late now.",
						"japanese": "バレたか？それでももう遅い。",
						"chinese": "被发现了吗？但已经迟了。",
						"french": "Découverte ? Qu'importe, c'est trop tard.",
						"spanish": "¿Me descubrieron? De todos modos, es tarde.",
						"vietnamese": "Bị phát hiện rồi sao? Dù sao thì cũng đã muộn.",
						"thai": "ถูกจับได้งั้นหรือ? แต่ก็สายไปแล้ว",
						"hindi": "पकड़े गए? फिर भी देर हो चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "더 이상 물러날 곳은 없어. 진실은 저 너머에 있어.",
						"english": "No more turning back. The truth lies beyond.",
						"japanese": "もう後戻りはできない。真実はあの先に。",
						"chinese": "已无退路。真相就在前方。",
						"french": "Plus de recul possible. La vérité est au-delà.",
						"spanish": "No hay marcha atrás. La verdad está más allá.",
						"vietnamese": "Không còn đường lui nữa. Sự thật nằm ở phía trước.",
						"thai": "ไม่มีทางถอยแล้ว ความจริงอยู่เบื้องหน้า",
						"hindi": "अब पीछे हटने की कोई जगह नहीं। सच उस पार है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔는데, 멈출 수 없어.",
						"english": "Came all this way, can't stop now.",
						"japanese": "ここまで来たんだ、もう止められない。",
						"chinese": "都到这里了，不能停下。",
						"french": "Arrivé jusqu'ici, je ne peux pas m'arrêter.",
						"spanish": "Llegados hasta aquí, no puedo parar.",
						"vietnamese": "Đã đến đây rồi, không thể dừng lại.",
						"thai": "มาถึงนี่แล้ว หยุดไม่ได้หรอก",
						"hindi": "इतनी दूर आ गए, अब रुक नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "거대한 압축기의 굉음이 귀청을 찢을 듯 울려 퍼졌다.",
						"english": "The roar of the colossal compactor echoed, piercing my ears.",
						"japanese": "巨大な圧縮機の轟音が耳をつんざくように響き渡った。",
						"chinese": "巨大压缩机的轰鸣声震耳欲聋。",
						"french": "Le rugissement assourdissant du compresseur colossal a retenti.",
						"spanish": "El rugido ensordecedor del compresor colosal retumbó.",
						"vietnamese": "Tiếng gầm rú của máy nén khổng lồ vang vọng, xé toạc màng nhĩ.",
						"thai": "เสียงคำรามกึกก้องของเครื่องอัดขนาดยักษ์ดังสนั่นหวั่นไหวราวกับจะฉีกแก้วหู",
						"hindi": "विशाल कंप्रेसर की गर्जना कान फाड़ रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영한다, 새로운 오물들이여.",
						"english": "Welcome, new filth.",
						"japanese": "ようこそ、新たな汚物たちよ。",
						"chinese": "欢迎，新来的污秽。",
						"french": "Bienvenue, nouvelles ordures.",
						"spanish": "Bienvenidos, nuevas inmundicias.",
						"vietnamese": "Chào mừng, lũ rác rưởi mới.",
						"thai": "ยินดีต้อนรับ เหล่าสิ่งปฏิกูลหน้าใหม่เอ๋ย",
						"hindi": "स्वागत है, नए कूड़ेदानों।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "감히 나의 청소를 방해하다니.",
						"english": "How dare you disrupt my cleaning.",
						"japanese": "よくも私の掃除を邪魔したな。",
						"chinese": "竟敢妨碍我的清扫。",
						"french": "Comment osez-vous interrompre mon nettoyage.",
						"spanish": "¿Cómo osas interrumpir mi limpieza?",
						"vietnamese": "Ngươi dám phá hoại công việc dọn dẹp của ta sao.",
						"thai": "แกกล้าดียังไงมาขัดขวางการทำความสะอาดของข้า",
						"hindi": "हिम्मत कैसे हुई मेरी सफाई में बाधा डालने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 진짜 애쉬였어?",
						"english": "You were the real Ash?",
						"japanese": "あなたが本当のアッシュだったの？",
						"chinese": "你才是真正的艾什？",
						"french": "C'était toi, le véritable Ash ?",
						"spanish": "¿Eras tú el verdadero Ash?",
						"vietnamese": "Ngươi mới là Ash thật sự sao?",
						"thai": "แกคือแอชตัวจริงงั้นเหรอ",
						"hindi": "तुम असली ऐश थे?"
					}
				},
				{
					"content": {
						"korean": "나는 그저, 이 도시를 깨끗하게 만들 뿐.",
						"english": "I merely clean this city.",
						"japanese": "私はただ、この街を綺麗にしているだけだ。",
						"chinese": "我只是在清理这座城市而已。",
						"french": "Je ne fais que nettoyer cette ville.",
						"spanish": "Yo solo estoy limpiando esta ciudad.",
						"vietnamese": "Ta chỉ đang làm sạch thành phố này thôi.",
						"thai": "ข้าแค่ทำให้เมืองนี้สะอาดขึ้นเท่านั้นเอง",
						"hindi": "मैं बस इस शहर को साफ कर रहा हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가? 역시 오물은 오물일 뿐.",
						"english": "Is this all you've got? Filth remains mere filth.",
						"japanese": "せいぜいこんなものか？やはり汚物は汚物でしかない。",
						"chinese": "就这点程度吗？污秽终究只是污秽。",
						"french": "N'est-ce que ça ? Les ordures ne restent que des ordures.",
						"spanish": "¿Solo esto? La inmundicia siempre será inmundicia.",
						"vietnamese": "Chỉ có thế thôi sao? Rác rưởi vẫn mãi là rác rưởi.",
						"thai": "มีแค่นี้เองงั้นหรือ? สุดท้ายสิ่งปฏิกูลก็ยังเป็นสิ่งปฏิกูลอยู่วันยังค่ำ",
						"hindi": "बस इतना ही? कचरा तो कचरा ही रहेगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそっ… まだ… 終わってない。",
						"chinese": "该死…… 还没…… 结束。",
						"french": "Bon sang… Ce n'est pas… encore fini.",
						"spanish": "Maldita sea… Aún no… ha terminado.",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc.",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ",
						"hindi": "धिक्कार है… अभी तक… खत्म नहीं हुआ।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 진정한 오물은… 너희였어.",
						"english": "Worthless trash... You were the real filth.",
						"japanese": "くだらぬ者たち… 真の汚物は… お前たちだったな。",
						"chinese": "卑微之物…… 真正的污秽…… 是你们。",
						"french": "Misérables… Les véritables ordures… c'était vous.",
						"spanish": "Insolentes… La verdadera inmundicia… erais vosotros.",
						"vietnamese": "Lũ vô dụng… Rác rưởi thật sự… là các ngươi.",
						"thai": "พวกไร้ค่า... สิ่งปฏิกูลที่แท้จริง... คือพวกแก",
						"hindi": "तुच्छ जीव… असली कचरा… तुम ही थे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗……？",
						"french": "C'est fini… ?",
						"spanish": "¿Se acabó…?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วเหรอ…?",
						"hindi": "क्या यह खत्म हो गया…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "압축기의 굉음이 잠시 멈췄다. 하지만 진짜 악몽은 아직 끝나지 않았다.",
						"english": "The compactor's roar paused momentarily. But the true nightmare has yet to end.",
						"japanese": "圧縮機の轟音が一時的に止まった。だが、本当の悪夢はまだ終わっていない。",
						"chinese": "压缩机的轰鸣声暂时停止了。但真正的噩梦尚未结束。",
						"french": "Le rugissement du compresseur s'est tu un instant. Mais le véritable cauchemar n'est pas encore terminé.",
						"spanish": "El rugido del compresor cesó un momento. Pero la verdadera pesadilla aún no ha terminado.",
						"vietnamese": "Tiếng gầm của máy nén tạm dừng. Nhưng cơn ác mộng thật sự vẫn chưa kết thúc.",
						"thai": "เสียงคำรามของเครื่องอัดหยุดลงชั่วครู่ ทว่าฝันร้ายที่แท้จริงยังไม่จบสิ้น",
						"hindi": "कंप्रेसर की गर्जना कुछ देर के लिए थम गई। लेकिन असली दुःस्वप्न अभी खत्म नहीं हुआ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 그림자, 숨겨진 진실.",
			"애쉬의 손길, 평범하지 않다.",
			"압축기 소음, 심장이 옥죄는 듯.",
			"드러나는 공포, 이제 시작이다."
		],
		"english": [
			"City shadows, hidden truths.",
			"Ash's touch, not ordinary.",
			"Compressor's roar, heart-clinching.",
			"Unveiling terror, just begun."
		],
		"japanese": [
			"街の影、隠された真実。",
			"アッシュの手、尋常ではない。",
			"コンプレッサーの騒音、心臓を締め付けるよう。",
			"露わになる恐怖、今始まったばかり。"
		],
		"chinese": [
			"城市阴影，隐藏的真相。",
			"艾什的触碰，非同寻常。",
			"压缩机噪音，令人心悸。",
			"恐惧浮现，才刚刚开始。"
		],
		"french": [
			"Ombres de la ville, vérités cachées.",
			"Le toucher d'Ash, pas ordinaire.",
			"Bruit du compresseur, le cœur serré.",
			"L'horreur révélée, ce n'est que le début."
		],
		"spanish": [
			"Sombras de la ciudad, verdades ocultas.",
			"El toque de Ash, no es ordinario.",
			"Ruido del compresor, que oprime el corazón.",
			"El terror se revela, acaba de empezar."
		],
		"vietnamese": [
			"Bóng tối thành phố, sự thật ẩn giấu.",
			"Chạm tay của Ash, không bình thường.",
			"Tiếng ồn máy nén, thắt chặt tim.",
			"Nỗi sợ hãi hé lộ, mới chỉ bắt đầu."
		],
		"thai": [
			"เงาของเมือง, ความจริงที่ซ่อนอยู่.",
			"สัมผัสของแอช, ไม่ธรรมดา.",
			"เสียงเครื่องอัด, หัวใจบีบคั้น.",
			"ความหวาดกลัวที่เปิดเผย, เพิ่งเริ่มต้น."
		],
		"hindi": [
			"शहर की परछाईं, छिपे हुए सच।",
			"ऐश का स्पर्श, सामान्य नहीं।",
			"कंप्रेसर का शोर, दिल को जकड़ता।",
			"उभरता डर, बस शुरुआत है।"
		]
	}
} as const;
