export const scenario_forest_luminamorta_22_01 = {
	"scenario_id": "forest_luminamorta_22_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 입구. 빛나는 잎사귀들이 반짝였다. 모든 것이 눈부셨다.",
						"english": "Forest entrance. Glowing leaves shimmered. Everything was dazzling.",
						"japanese": "森の入り口。輝く葉が煌めいた。すべてが眩しかった。",
						"chinese": "森林入口。闪亮的叶子在微光中闪烁。一切都令人目眩。",
						"french": "Entrée de la forêt. Des feuilles lumineuses scintillaient. Tout était éblouissant.",
						"spanish": "Entrada del bosque. Hojas resplandecientes brillaban. Todo era deslumbrante.",
						"vietnamese": "Lối vào rừng. Những chiếc lá phát sáng lấp lánh. Mọi thứ đều rực rỡ.",
						"thai": "ทางเข้าป่า ใบไม้เรืองแสงระยิบระยับ ทุกสิ่งเจิดจ้า",
						"hindi": "जंगल का प्रवेश द्वार। चमकते पत्ते झिलमिला रहे थे। सब कुछ चकाचौंध करने वाला था।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "fern",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "오셨군요. 기다렸어요. 숲이 당신들을 부르고 있어요.",
						"english": "You're here. I've been waiting. The forest calls to you.",
						"japanese": "いらっしゃいましたね。待っていました。森があなたたちを呼んでいます。",
						"chinese": "你们来了。我一直在等。森林在呼唤着你们。",
						"french": "Vous êtes là. Je vous attendais. La forêt vous appelle.",
						"spanish": "Han llegado. Los estaba esperando. El bosque los está llamando.",
						"vietnamese": "Các bạn đã đến. Tôi đã đợi. Rừng đang gọi các bạn.",
						"thai": "มาแล้วสินะ รออยู่เลย ป่ากำลังเรียกหาพวกคุณ",
						"hindi": "आप आ गए। मैं इंतज़ार कर रहा था। जंगल आपको बुला रहा है।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저는 페른. 이 숲의 숲지기예요. 숲은 병들었지만… 지금은 치유되고 있어요.",
						"english": "I am Fern, the forest keeper of this wood. The forest was sick… but now it's healing.",
						"japanese": "私はフェルン。この森の番人です。森は病んでいましたが…今は癒されています。",
						"chinese": "我是费恩，这片森林的守护者。森林曾病重…但现在正在被治愈。",
						"french": "Je suis Fern, la gardienne de cette forêt. La forêt était malade… mais maintenant elle guérit.",
						"spanish": "Soy Fern, la guardabosques de este bosque. El bosque estaba enfermo… pero ahora se está curando.",
						"vietnamese": "Tôi là Fern, người giữ rừng này. Rừng đã bệnh… nhưng bây giờ đang được chữa lành.",
						"thai": "ฉันคือเฟิร์น ผู้พิทักษ์ป่าแห่งนี้ ป่าเคยป่วย… แต่ตอนนี้กำลังได้รับการเยียวยา",
						"hindi": "मैं फ़र्न हूँ, इस जंगल की वनपाल। जंगल बीमार था… लेकिन अब ठीक हो रहा है।"
					}
				},
				{
					"content": {
						"korean": "치유요? 뭔가 이상한데요.",
						"english": "Healing? Something feels off.",
						"japanese": "癒しですか？何かおかしいですね。",
						"chinese": "治愈？感觉有点不对劲。",
						"french": "Guérison ? Quelque chose ne va pas.",
						"spanish": "¿Curación? Algo no me cuadra.",
						"vietnamese": "Chữa lành? Có gì đó không ổn.",
						"thai": "เยียวยา? ดูแปลกๆ นะ",
						"hindi": "ठीक हो रहा है? कुछ अजीब लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "fern",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "아뇨. 아주 완벽한 치유죠. 제게 맡기세요. 성지로 안내해 드릴게요.",
						"english": "No. It's a perfect healing. Trust me. I'll guide you to the Sacred Grove.",
						"japanese": "いいえ。これは完璧な癒しです。私に任せてください。聖なる場所へ案内します。",
						"chinese": "不。这是完美的治愈。请交给我吧。我会引导你们前往圣地。",
						"french": "Non. C'est une guérison parfaite. Faites-moi confiance. Je vous guiderai vers le Bosquet Sacré.",
						"spanish": "No. Es una curación perfecta. Confíen en mí. Los guiaré al Santuario.",
						"vietnamese": "Không. Đây là sự chữa lành hoàn hảo. Hãy giao phó cho tôi. Tôi sẽ dẫn các bạn đến Thánh địa.",
						"thai": "ไม่สิ นี่คือการเยียวยาที่สมบูรณ์แบบ วางใจฉันเถอะ ฉันจะนำทางคุณไปสู่ดินแดนศักดิ์สิทธิ์",
						"hindi": "नहीं। यह एक पूर्ण उपचार है। मुझ पर भरोसा रखें। मैं आपको पवित्र स्थान तक ले जाऊँगी।"
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
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "fern",
					"action": "enter"
				},
				{
					"content": {
						"korean": "길가의 식물들이 비정상적으로 강렬하게 빛났다. 마치 죽은 생기처럼.",
						"english": "The roadside plants glowed with an abnormal intensity. Like a dead vitality.",
						"japanese": "道端の植物が異常なほど強く輝いていた。まるで死んだ生気のように。",
						"chinese": "路边的植物异常强烈地发光。就像死去的生机一样。",
						"french": "Les plantes au bord de la route brillaient d'une intensité anormale. Comme une vitalité morte.",
						"spanish": "Las plantas al borde del camino brillaban con una intensidad anormal. Como una vitalidad muerta.",
						"vietnamese": "Những thực vật ven đường phát sáng một cách bất thường và dữ dội. Như một sinh khí đã chết.",
						"thai": "พืชริมทางเรืองแสงเจิดจ้าผิดปกติ ราวกับชีวิตที่ตายแล้ว",
						"hindi": "सड़क किनारे के पौधे असामान्य रूप से तेज़ी से चमक रहे थे। जैसे मृत जीवन शक्ति हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 식물들… 너무 빛나는데?",
						"english": "These plants... they're glowing too brightly?",
						"japanese": "この植物たち… 輝きすぎじゃない？",
						"chinese": "这些植物……发光得太厉害了吧？",
						"french": "Ces plantes... elles brillent trop fort ?",
						"spanish": "Estas plantas... ¿brillan demasiado?",
						"vietnamese": "Mấy cái cây này... phát sáng quá mức nhỉ?",
						"thai": "พืชพวกนี้... สว่างเกินไปหรือเปล่า?",
						"hindi": "ये पौधे... बहुत ज़्यादा चमक रहे हैं, है ना?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "fern",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "놀라워요. 그렇죠? 숲의 생명력이 이렇게 재분배되는 거예요.",
						"english": "Amazing, isn't it? The forest's life force is being redistributed like this.",
						"japanese": "驚きでしょう？ 森の生命力はこうして再分配されるんです。",
						"chinese": "很惊讶吧？森林的生命力就是这样重新分配的。",
						"french": "Incroyable, n'est-ce pas ? La force vitale de la forêt est ainsi redistribuée.",
						"spanish": "Asombroso, ¿verdad? Así es como se redistribuye la fuerza vital del bosque.",
						"vietnamese": "Tuyệt vời, phải không? Sinh lực của rừng được phân phối lại như thế đấy.",
						"thai": "น่าทึ่งใช่ไหม? พลังชีวิตของป่ากำลังถูกจัดสรรใหม่แบบนี้แหละ",
						"hindi": "कमाल है ना? जंगल की जीवन शक्ति इसी तरह पुनर्वितरित होती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "재분배…요?",
						"english": "Redistribution...?",
						"japanese": "再分配…ですか？",
						"chinese": "重新分配……？",
						"french": "Redistribuée... ?",
						"spanish": "¿Redistribuida...?",
						"vietnamese": "Phân phối lại...?",
						"thai": "จัดสรรใหม่...?",
						"hindi": "पुनर्वितरण...?"
					}
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네. 아픈 곳에서 건강한 곳으로. 더 나은 형태로 다시 태어나는 거죠.",
						"english": "Yes. From the ailing parts to the healthy ones. Reborn into a better form.",
						"japanese": "はい。病んだ場所から健康な場所へ。より良い形で生まれ変わるんです。",
						"chinese": "是的。从病态的地方到健康的地方。以更好的形态重生。",
						"french": "Oui. Des parties malades vers les saines. Elles renaissent sous une meilleure forme.",
						"spanish": "Sí. De las partes enfermas a las sanas. Renacen en una forma mejor.",
						"vietnamese": "Vâng. Từ nơi đang bệnh sang nơi khỏe mạnh. Được tái sinh thành một dạng tốt hơn.",
						"thai": "ใช่ จากที่ที่ป่วยไปยังที่ที่แข็งแรง เกิดใหม่ในรูปแบบที่ดีขึ้น",
						"hindi": "हाँ। बीमार जगहों से स्वस्थ जगहों तक। एक बेहतर रूप में पुनर्जन्म।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기 좀 보세요. 이 뿌리. 숲이 얼마나 깊숙이 연결되어 있는지.",
						"english": "Look here. These roots. How deeply the forest is connected.",
						"japanese": "ここを見てください。この根。森がどれほど深く繋がっているか。",
						"chinese": "看看这里。这些根。森林连接得有多么深。",
						"french": "Regardez ici. Ces racines. À quel point la forêt est profondément connectée.",
						"spanish": "Miren aquí. Estas raíces. Qué profundamente conectado está el bosque.",
						"vietnamese": "Nhìn đây này. Những cái rễ này. Rừng được kết nối sâu sắc đến mức nào.",
						"thai": "ดูนี่สิ รากพวกนี้ ป่าเชื่อมโยงกันลึกซึ้งแค่ไหน",
						"hindi": "यहाँ देखिए। ये जड़ें। जंगल कितनी गहराई से जुड़ा हुआ है।"
					}
				},
				{
					"content": {
						"korean": "모든 게 이어져 있네요.",
						"english": "Everything is connected.",
						"japanese": "全てが繋がっていますね。",
						"chinese": "一切都相连着呢。",
						"french": "Tout est lié.",
						"spanish": "Todo está conectado.",
						"vietnamese": "Mọi thứ đều được kết nối.",
						"thai": "ทุกสิ่งเชื่อมโยงกันหมดเลยนะ",
						"hindi": "सब कुछ जुड़ा हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네. 그래서 하나의 변이가 전체에 영향을 줘요. 하지만 괜찮아요.",
						"english": "Yes. That's why one mutation affects the whole. But it's okay.",
						"japanese": "ええ。だから一つの変異が全体に影響を与えるんです。でも、大丈夫。",
						"chinese": "是的。所以一个变异会影响到整体。但没关系。",
						"french": "Oui. C'est pourquoi une seule mutation affecte l'ensemble. Mais tout va bien.",
						"spanish": "Sí. Por eso una sola mutación afecta al conjunto. Pero está bien.",
						"vietnamese": "Vâng. Vì vậy, một sự biến đổi sẽ ảnh hưởng đến toàn bộ. Nhưng không sao cả.",
						"thai": "ใช่แล้ว การเปลี่ยนแปลงหนึ่งเดียวส่งผลกระทบต่อทั้งหมด แต่มันก็ไม่เป็นไร",
						"hindi": "हाँ। इसीलिए एक उत्परिवर्तन पूरे को प्रभावित करता है। लेकिन कोई बात नहीं।"
					}
				},
				{
					"content": {
						"korean": "숲은 스스로 균형을 맞춰요. 때로는… 아주 특별한 방식으로.",
						"english": "The forest balances itself. Sometimes... in a very special way.",
						"japanese": "森は自ら均衡を保ちます。時には… とても特別な方法で。",
						"chinese": "森林会自行维持平衡。有时……以一种非常特殊的方式。",
						"french": "La forêt s'équilibre d'elle-même. Parfois... d'une manière très spéciale.",
						"spanish": "El bosque se equilibra solo. A veces... de una manera muy especial.",
						"vietnamese": "Rừng tự cân bằng. Đôi khi... theo một cách rất đặc biệt.",
						"thai": "ป่ารักษาสมดุลด้วยตัวเอง บางครั้ง... ด้วยวิธีที่พิเศษมาก",
						"hindi": "जंगल खुद को संतुलित करता है। कभी-कभी... बहुत ही खास तरीके से।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "happy"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "특별한 방식이라… 좀 섬뜩하게 들리는데요.",
						"english": "A special way... sounds a bit eerie.",
						"japanese": "特別な方法…って、ちょっと不気味に聞こえますね。",
						"chinese": "特殊的方式……听起来有点令人毛骨悚然。",
						"french": "Une manière spéciale... ça sonne un peu effrayant.",
						"spanish": "¿Una forma especial...? Suena un poco espeluznante.",
						"vietnamese": "Cách đặc biệt à... nghe hơi rợn người đấy.",
						"thai": "วิธีพิเศษ... ฟังดูน่าขนลุกไปหน่อยนะครับ",
						"hindi": "एक खास तरीका... यह थोड़ा डरावना लगता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "happy",
					"content": {
						"korean": "호호. 그게 숲의 지혜죠. 당신들도 곧 이해할 거예요.",
						"english": "Hoho. That's the forest's wisdom. You'll understand soon enough.",
						"japanese": "ほほう。それが森の知恵というもの。あなた方もじきに理解するでしょう。",
						"chinese": "呵呵。那就是森林的智慧。你们很快就会明白的。",
						"french": "Hoho. C'est la sagesse de la forêt. Vous comprendrez bientôt.",
						"spanish": "Hoho. Esa es la sabiduría del bosque. Pronto lo entenderán.",
						"vietnamese": "Hô hô. Đó là trí tuệ của rừng. Các bạn sẽ sớm hiểu thôi.",
						"thai": "โฮะๆ นั่นแหละคือปัญญาแห่งพงไพร พวกเธอจะเข้าใจในไม่ช้า",
						"hindi": "हो हो। यही तो वन की बुद्धिमत्ता है। तुम्हें भी जल्द समझ आ जाएगा।"
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
					"speaker": "fern",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "숲은 더욱 깊어졌다. 나뭇잎들이 낮게 속삭이는 듯한 환청이 들렸다.",
						"english": "The forest deepened. Delusions of leaves whispering faintly began to be heard.",
						"japanese": "森はさらに深くなった。葉が低くささやくような幻聴が聞こえ始めた。",
						"chinese": "森林越来越深。耳边传来树叶低语般的幻听。",
						"french": "La forêt s'enfonça. Des illusions de feuilles chuchotant doucement commencèrent à se faire entendre.",
						"spanish": "El bosque se hizo más profundo. Comenzaron a escucharse ilusiones de hojas susurrando débilmente.",
						"vietnamese": "Rừng càng lúc càng sâu. Ảo giác lá cây thì thầm nhẹ nhàng bắt đầu nghe thấy.",
						"thai": "ป่าลึกเข้าไปอีก ได้ยินเสียงหลอนราวกับใบไม้กำลังกระซิบแผ่วเบา",
						"hindi": "वन और गहरा हो गया। पत्तों के फुसफुसाने जैसे भ्रम सुनाई देने लगे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭔가 들리는 것 같아….",
						"english": "I think I hear something...",
						"japanese": "何か聞こえるような…",
						"chinese": "我好像听到什么了……",
						"french": "J'ai l'impression d'entendre quelque chose...",
						"spanish": "Creo que escucho algo...",
						"vietnamese": "Hình như tôi nghe thấy gì đó...",
						"thai": "รู้สึกเหมือนได้ยินอะไรบางอย่าง...",
						"hindi": "मुझे कुछ सुनाई दे रहा है..."
					}
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 목소리예요.",
						"english": "It's the forest's voice.",
						"japanese": "森の声です。",
						"chinese": "是森林的声音。",
						"french": "C'est la voix de la forêt.",
						"spanish": "Es la voz del bosque.",
						"vietnamese": "Đó là tiếng nói của rừng.",
						"thai": "นั่นคือเสียงของป่า",
						"hindi": "यह वन की आवाज़ है।"
					}
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 말하고 있죠…",
						"english": "They are saying...",
						"japanese": "彼らは言っている…",
						"chinese": "它们正在说……",
						"french": "Ils disent...",
						"spanish": "Están diciendo...",
						"vietnamese": "Họ đang nói...",
						"thai": "พวกมันกำลังพูดว่า...",
						"hindi": "वे कह रहे हैं..."
					}
				},
				{
					"content": {
						"korean": "…영원한 평화가 찾아왔다고.",
						"english": "...that eternal peace has come.",
						"japanese": "…永遠の平和が訪れたと。",
						"chinese": "……永恒的和平已经降临。",
						"french": "...que la paix éternelle est arrivée.",
						"spanish": "...que la paz eterna ha llegado.",
						"vietnamese": "...rằng hòa bình vĩnh cửu đã đến.",
						"thai": "...ว่าสันติสุขชั่วนิรันดร์มาถึงแล้ว",
						"hindi": "...कि शाश्वत शांति आ गई है।"
					},
					"speaker": "fern",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "평화… 근데 왜 이렇게 불안하지?",
						"english": "Peace... But why do I feel so uneasy?",
						"japanese": "平和…でも、どうしてこんなに不安なんだ？",
						"chinese": "和平……可是为什么我这么不安？",
						"french": "La paix... Mais pourquoi suis-je si inquiet ?",
						"spanish": "Paz... Pero, ¿por qué me siento tan intranquilo?",
						"vietnamese": "Hòa bình... Nhưng sao tôi lại bồn chồn thế này?",
						"thai": "สันติสุข... แต่ทำไมฉันถึงรู้สึกกังวลอย่างนี้?",
						"hindi": "शांति... पर मैं इतना बेचैन क्यों हूँ?"
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 거의 다 왔어요. 숲의 가장 깊은 곳. 그곳에서 모든 진실을 알게 될 거예요.",
						"english": "We're almost there. The deepest part of the forest. There, you'll learn all the truth.",
						"japanese": "もうすぐですよ。森の最も深い場所。そこで、あなた方はすべての真実を知るでしょう。",
						"chinese": "我们快到了。森林最深处。在那里，你们将得知所有的真相。",
						"french": "Nous y sommes presque. La partie la plus profonde de la forêt. Là, vous apprendrez toute la vérité.",
						"spanish": "Ya casi llegamos. La parte más profunda del bosque. Allí, conocerán toda la verdad.",
						"vietnamese": "Chúng ta sắp đến rồi. Nơi sâu nhất của rừng. Ở đó, các bạn sẽ biết mọi sự thật.",
						"thai": "ใกล้ถึงแล้วค่ะ ส่วนที่ลึกที่สุดของป่า ที่นั่นพวกเธอจะได้รู้ความจริงทั้งหมด",
						"hindi": "हम लगभग पहुँच गए हैं। वन का सबसे गहरा भाग। वहाँ, तुम्हें सारी सच्चाई पता चल जाएगी।"
					},
					"speaker": "fern",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "어째서… 이 완벽한 치유를 거부하는가….",
						"english": "Why... do you reject this perfect healing...",
						"japanese": "なぜ…この完璧な癒しを拒むのだ…。",
						"chinese": "为何…拒绝这完美的治愈呢…",
						"french": "Pourquoi… rejetez-vous cette guérison parfaite…",
						"spanish": "¿Por qué… rechazáis esta curación perfecta…?",
						"vietnamese": "Tại sao… các ngươi lại từ chối sự chữa lành hoàn hảo này chứ…",
						"thai": "ทำไม…ถึงปฏิเสธการเยียวยาที่สมบูรณ์แบบนี้เล่า….",
						"hindi": "क्यों… इस संपूर्ण उपचार को अस्वीकार करते हो…।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲은… 더 깊은 평화를 원하고 있다. 너희도 곧 알게 될 거야….",
						"english": "The forest... desires a deeper peace. You too will soon understand...",
						"japanese": "森は…より深い安らぎを求めている。お前たちもじきに知るだろう…。",
						"chinese": "森林…渴望更深层的平静。你们也很快会明白的…",
						"french": "La forêt… désire une paix plus profonde. Vous comprendrez bientôt…",
						"spanish": "El bosque… desea una paz más profunda. Vosotros también lo entenderéis pronto…",
						"vietnamese": "Khu rừng… khao khát một sự bình yên sâu sắc hơn. Các ngươi cũng sẽ sớm hiểu thôi…",
						"thai": "ป่า…ต้องการความสงบที่ลึกซึ้งกว่านั้น. พวกเจ้าก็จะเข้าใจในไม่ช้า….",
						"hindi": "जंगल… गहरी शांति चाहता है। तुम्हें भी जल्द ही पता चल जाएगा…।"
					}
				},
				{
					"content": {
						"korean": "평화라니. 이건 타락이야.",
						"english": "Peace? This is corruption.",
						"japanese": "平和だと？これは堕落だ。",
						"chinese": "平静？这分明是堕落。",
						"french": "La paix ? C'est de la corruption.",
						"spanish": "¿Paz? Esto es corrupción.",
						"vietnamese": "Bình yên ư. Đây là sự tha hóa.",
						"thai": "สงบงั้นรึ. นี่มันความเสื่อมทรามต่างหาก.",
						"hindi": "शांति? यह तो भ्रष्टाचार है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 숲의 기묘한 침묵은 계속되었다.",
						"english": "The unknown boss fell. Yet the forest's strange silence continued.",
						"japanese": "正体不明のボスは倒れた。しかし、森の奇妙な沈黙は続いた。",
						"chinese": "身份不明的首领倒下了。然而，森林诡异的寂静仍在持续。",
						"french": "Le boss inconnu est tombé. Pourtant, le silence étrange de la forêt perdura.",
						"spanish": "El jefe desconocido cayó. Sin embargo, el extraño silencio del bosque continuó.",
						"vietnamese": "Trùm không rõ danh tính đã ngã xuống. Tuy nhiên, sự im lặng kỳ lạ của khu rừng vẫn tiếp diễn.",
						"thai": "บอสปริศนาล้มลงแล้ว. ทว่า, ความเงียบงันประหลาดของป่ายังคงดำเนินต่อไป.",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, जंगल की अजीब खामोशी बनी रही।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이 숲에는… 우리가 모르는 진실이 더 있었다.",
						"english": "In this forest... there was more truth we didn't know.",
						"japanese": "この森には…我々の知らない真実がもっとあった。",
						"chinese": "在这片森林里…还有我们不知道的真相。",
						"french": "Dans cette forêt… il y avait plus de vérités que nous ignorions.",
						"spanish": "En este bosque… había más verdades que desconocíamos.",
						"vietnamese": "Trong khu rừng này… còn có nhiều sự thật mà chúng ta chưa biết.",
						"thai": "ในป่าแห่งนี้…มีความจริงที่เราไม่รู้อีกมาก.",
						"hindi": "इस जंगल में… और भी सच्चाई थी जो हम नहीं जानते थे।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "여기가 바로… 숲의 중심이에요. 진정한 치유가 이루어지는 곳.",
						"english": "This is... the heart of the forest. Where true healing takes place.",
						"japanese": "ここがまさに…森の中心です。真の癒しが行われる場所。",
						"chinese": "这里就是……森林的中心。真正疗愈发生的地方。",
						"french": "Voici... le cœur de la forêt. Là où la véritable guérison a lieu.",
						"spanish": "Aquí es... el corazón del bosque. Donde ocurre la verdadera curación.",
						"vietnamese": "Đây chính là... trung tâm của rừng. Nơi sự chữa lành thật sự diễn ra.",
						"thai": "ที่นี่คือ...ใจกลางป่า สถานที่ที่การเยียวยาที่แท้จริงจะเกิดขึ้น",
						"hindi": "यही है... वन का हृदय। जहाँ सच्चा उपचार होता है।"
					},
					"speaker": "fern",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모습을 드러냈다. 알 수 없는 위압감이 탐험대를 짓눌렀다.",
						"english": "A colossal shadow emerged. An unknown oppressive feeling crushed the expedition team.",
						"japanese": "巨大な影が姿を現した。得体の知れない威圧感が探検隊を押しつぶした。",
						"chinese": "一个巨大的影子显现出来。一股未知的压迫感压垮了探险队。",
						"french": "Une ombre colossale est apparue. Une sensation d'oppression inconnue écrasa l'équipe d'expédition.",
						"spanish": "Una sombra colosal apareció. Una sensación de opresión desconocida aplastó al equipo de expedición.",
						"vietnamese": "Một bóng tối khổng lồ hiện ra. Một cảm giác áp bức không rõ nguồn gốc đè nặng lên đội thám hiểm.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ความรู้สึกกดดันที่ไม่รู้จักบดขยี้ทีมสำรวจ",
						"hindi": "एक विशाल छाया प्रकट हुई। एक अज्ञात दमनकारी भावना ने अभियान दल को कुचल दिया।"
					}
				},
				{
					"content": {
						"korean": "…왔구나. 나의 새로운 희생양들.",
						"english": "...You've arrived. My new sacrifices.",
						"japanese": "…来たか。私の新たな贄たちよ。",
						"chinese": "…来了啊。我的新祭品们。",
						"french": "...Vous êtes là. Mes nouveaux sacrifices.",
						"spanish": "...Habéis llegado. Mis nuevos sacrificios.",
						"vietnamese": "...Ngươi đã đến rồi. Những vật tế mới của ta.",
						"thai": "...มาแล้วสินะ. เครื่องสังเวยใหม่ของข้า.",
						"hindi": "...तुम आ गए। मेरे नए बलि।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 숲을 이렇게 만들었나?",
						"english": "Did you do this to the forest?",
						"japanese": "お前がこの森をこう変えたのか？",
						"chinese": "是你把这片森林变成这样的吗？",
						"french": "C'est toi qui as fait ça à cette forêt ?",
						"spanish": "¿Tú hiciste esto con el bosque?",
						"vietnamese": "Ngươi đã biến khu rừng này thành ra thế này sao?",
						"thai": "เจ้าเป็นคนทำให้ป่าเป็นแบบนี้หรือ?",
						"hindi": "क्या तुमने इस जंगल को ऐसा बनाया?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "만들었다고? 아냐. 나는 그저 숲을 치유했을 뿐.",
						"english": "Made it? No. I merely healed the forest.",
						"japanese": "作った？違う。私はただ森を癒しただけだ。",
						"chinese": "创造？不。我只是治愈了森林而已。",
						"french": "Créé ? Non. J'ai seulement guéri la forêt.",
						"spanish": "¿Crearlo? No. Solo curé el bosque.",
						"vietnamese": "Tạo ra ư? Không. Ta chỉ đơn thuần chữa lành khu rừng thôi.",
						"thai": "สร้างขึ้นมางั้นรึ? ไม่ใช่. ข้าแค่เยียวยาป่าเท่านั้นเอง.",
						"hindi": "बनाया? नहीं। मैंने तो बस जंगल को ठीक किया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희도 곧 평화를 얻을 것이다. 영원히.",
						"english": "You too shall soon find peace. Forever.",
						"japanese": "お前たちもじきに安らぎを得るだろう。永遠に。",
						"chinese": "你们也很快会得到平静。永远的平静。",
						"french": "Vous aussi trouverez bientôt la paix. Pour toujours.",
						"spanish": "Vosotros también encontraréis la paz pronto. Para siempre.",
						"vietnamese": "Các ngươi cũng sẽ sớm có được bình yên. Mãi mãi.",
						"thai": "พวกเจ้าก็จะได้รับความสงบเช่นกัน. ตลอดไป.",
						"hindi": "तुम्हें भी जल्द ही शांति मिलेगी। हमेशा के लिए।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 생명력이 탐험대를 짓눌렀다. 모든 것이 무의미해 보였다.",
						"english": "The forest's vitality crushed the expedition team. Everything seemed meaningless.",
						"japanese": "森の生命力が探検隊を圧倒した。すべてが無意味に思われた。",
						"chinese": "森林的生命力压垮了探险队。一切都显得毫无意义。",
						"french": "La vitalité de la forêt écrasa l'équipe d'expédition. Tout semblait dénué de sens.",
						"spanish": "La vitalidad del bosque aplastó al equipo de expedición. Todo parecía sin sentido.",
						"vietnamese": "Sức sống của khu rừng đã đè bẹp đoàn thám hiểm. Mọi thứ dường như vô nghĩa.",
						"thai": "พลังชีวิตของป่าบดขยี้ทีมสำรวจ. ทุกสิ่งดูไร้ความหมาย.",
						"hindi": "जंगल की जीवन शक्ति ने अभियान दल को कुचल दिया। सब कुछ अर्थहीन लग रहा था।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국… 너희도 이 숲의 일부가 될 뿐.",
						"english": "In the end... you too will become part of this forest.",
						"japanese": "結局…お前たちもこの森の一部になるだけだ。",
						"chinese": "最终……你们也将成为这片森林的一部分。",
						"french": "Au final... vous ne ferez qu'un avec cette forêt.",
						"spanish": "Al final... vosotros también seréis parte de este bosque.",
						"vietnamese": "Cuối cùng... các ngươi cũng chỉ trở thành một phần của khu rừng này thôi.",
						"thai": "ในที่สุด...พวกเจ้าก็จะได้เป็นส่วนหนึ่งของป่านี้เท่านั้น",
						"hindi": "अंततः... तुम भी इस वन का एक हिस्सा बन जाओगे।"
					}
				},
				{
					"content": {
						"korean": "영원한 치유를 받아들여라. 고통은 사라질 것이다.",
						"english": "Embrace eternal healing. Your pain will vanish.",
						"japanese": "永遠の癒しを受け入れろ。苦痛は消え去るだろう。",
						"chinese": "接受永恒的治愈吧。痛苦将会消失。",
						"french": "Acceptez la guérison éternelle. La douleur disparaîtra.",
						"spanish": "Aceptad la curación eterna. El dolor desaparecerá.",
						"vietnamese": "Hãy đón nhận sự chữa lành vĩnh cửu. Nỗi đau sẽ tan biến.",
						"thai": "จงยอมรับการเยียวยาชั่วนิรันดร์ ความเจ็บปวดจะหายไป",
						"hindi": "शाश्वत उपचार को स्वीकार करो। पीड़ा दूर हो जाएगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc đâu.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी… ख़त्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 빛났다. 너무나 아름답게, 미친 듯이.",
			"그러나 그 빛 아래엔 알 수 없는 병이 퍼져 있었다.",
			"이 기이한 숲에서, 한 숲지기가 우리를 맞았다.",
			"그녀는 말했다. 숲이 지금, 치유되고 있다고."
		],
		"english": [
			"The forest glowed. So beautiful, so madly.",
			"Yet beneath its glow, an unknown sickness spread.",
			"In this strange forest, a forest keeper greeted us.",
			"She said, \"The forest is healing now.\""
		],
		"japanese": [
			"森は輝いた。あまりにも美しく、狂おしいほどに。",
			"しかし、その輝きの下には未知の病が広がっていた。",
			"この奇妙な森で、一人の森の番人が私たちを迎えた。",
			"彼女は言った。「森は今、癒されていると。」"
		],
		"chinese": [
			"森林闪耀着。如此美丽，又如此疯狂。",
			"然而，在那光芒之下，一场未知的疾病正在蔓延。",
			"在这片奇异的森林里，一位森林守护者迎接了我们。",
			"她说：“森林现在正在被治愈。”"
		],
		"french": [
			"La forêt brillait. Si belle, si follement.",
			"Pourtant, sous sa lumière, une maladie inconnue se propageait.",
			"Dans cette forêt étrange, une gardienne nous a accueillis.",
			"Elle dit : \"La forêt est en train de guérir.\""
		],
		"spanish": [
			"El bosque resplandecía. Tan hermoso, tan locamente.",
			"Sin embargo, bajo su resplandor, una enfermedad desconocida se extendía.",
			"En este extraño bosque, una guardabosques nos recibió.",
			"Ella dijo: \"El bosque se está curando ahora.\""
		],
		"vietnamese": [
			"Rừng rực sáng. Đẹp đến điên cuồng.",
			"Nhưng dưới ánh sáng ấy, một căn bệnh không tên đang lan tràn.",
			"Trong khu rừng kỳ lạ này, một người giữ rừng đã chào đón chúng tôi.",
			"Cô ấy nói: \"Rừng đang được chữa lành.\""
		],
		"thai": [
			"ป่าส่องแสงเรืองรอง สวยงามอย่างบ้าคลั่ง",
			"ทว่าภายใต้แสงเรืองรองนั้น โรคประหลาดกำลังแพร่กระจาย",
			"ในป่าประหลาดแห่งนี้ ผู้พิทักษ์ป่าคนหนึ่งได้ต้อนรับเรา",
			"เธอบอกว่า \"ป่ากำลังได้รับการเยียวยา\""
		],
		"hindi": [
			"जंगल जगमगा उठा। इतना सुंदर, इतना पागलपन भरा।",
			"फिर भी, उसकी चमक के नीचे, एक अज्ञात बीमारी फैल रही थी।",
			"इस अजीब जंगल में, एक वनपाल ने हमारा स्वागत किया।",
			"उसने कहा, \"जंगल अब ठीक हो रहा है।\""
		]
	}
} as const;
