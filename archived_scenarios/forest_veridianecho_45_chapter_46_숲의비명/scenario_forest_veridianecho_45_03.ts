export const scenario_forest_veridianecho_45_03 = {
	"scenario_id": "forest_veridianecho_45_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
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
					"content": {
						"korean": "고대 주술의 흔적이 짙어진 숲. 정체 모를 유적 조각이 이정표처럼 흩어져 있다.",
						"english": "A forest steeped in ancient sorcery. Fragments of unknown ruins are scattered like signposts.",
						"japanese": "古代呪術の痕跡が色濃い森。正体不明の遺跡の破片が、道標のように散らばっている。",
						"chinese": "古代巫术痕迹深重的森林。不知名的遗迹碎片如路标般散落。",
						"french": "Une forêt imprégnée de sorcellerie antique. Des fragments de ruines inconnues sont éparpillés comme des repères.",
						"spanish": "Un bosque impregnado de brujería antigua. Fragmentos de ruinas desconocidas se dispersan como hitos.",
						"vietnamese": "Một khu rừng thấm đẫm ma thuật cổ xưa. Những mảnh vỡ của tàn tích không rõ ràng nằm rải rác như những cột mốc.",
						"thai": "ป่าที่เต็มไปด้วยร่องรอยของเวทมนตร์โบราณ เศษซากปรักหักพังที่ไม่รู้จักกระจัดกระจายราวกับป้ายบอกทาง",
						"hindi": "प्राचीन जादू-टोना से भरा जंगल। अज्ञात खंडहरों के टुकड़े मील के पत्थरों की तरह बिखरे हुए हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 파편… 뭔가 이상해.",
						"english": "This fragment... it's strange.",
						"japanese": "この破片…何かおかしい。",
						"chinese": "这碎片……有点奇怪。",
						"french": "Ce fragment... c'est étrange.",
						"spanish": "Este fragmento... es extraño.",
						"vietnamese": "Mảnh vỡ này... có gì đó lạ.",
						"thai": "เศษนี่... แปลกๆ นะ",
						"hindi": "यह टुकड़ा... कुछ अजीब है।"
					}
				},
				{
					"speaker": "glen",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내가 찾던 것이군. 숲의 비밀을 풀 열쇠가 될지도 몰라.",
						"english": "This is what I was looking for. It might be the key to unlocking the forest's secrets.",
						"japanese": "これが探していたものだ。森の秘密を解く鍵になるかもしれない。",
						"chinese": "这正是我要找的东西。也许会成为解开森林秘密的钥匙。",
						"french": "C'est ce que je cherchais. Ce pourrait être la clé pour percer les secrets de la forêt.",
						"spanish": "Esto es lo que buscaba. Podría ser la clave para desentrañar los secretos del bosque.",
						"vietnamese": "Đây chính là thứ tôi đang tìm. Nó có thể là chìa khóa để giải mã bí mật của khu rừng.",
						"thai": "นี่คือสิ่งที่ฉันตามหา มันอาจเป็นกุญแจไขความลับของป่า",
						"hindi": "यही तो मैं ढूंढ रहा था। शायद यह जंगल के रहस्यों को खोलने की कुंजी हो सकती है।"
					},
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은?",
						"english": "And you are?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Vous êtes ?",
						"spanish": "¿Usted es?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "고대 문명 연구자, 글렌이다. 이 파편… 평범한 유물이 아니야.",
						"english": "I am Glenn, a researcher of ancient civilizations. This fragment... it's no ordinary relic.",
						"japanese": "古代文明研究者のグレンだ。この破片…ただの遺物ではない。",
						"chinese": "我是格伦，一位古代文明研究者。这碎片……并非寻常遗物。",
						"french": "Je suis Glenn, un chercheur en civilisations anciennes. Ce fragment... ce n'est pas une relique ordinaire.",
						"spanish": "Soy Glenn, investigador de civilizaciones antiguas. Este fragmento... no es una reliquia común.",
						"vietnamese": "Tôi là Glenn, một nhà nghiên cứu văn minh cổ đại. Mảnh vỡ này... không phải là một di vật bình thường.",
						"thai": "ฉันคือเกล็น นักวิจัยอารยธรรมโบราณ เศษนี่... ไม่ใช่แค่โบราณวัตถุธรรมดา",
						"hindi": "मैं ग्लेन हूँ, प्राचीन सभ्यताओं का शोधकर्ता। यह टुकड़ा... कोई साधारण अवशेष नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glen"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glen",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(파편을 살핀다) 이건… 고대 주술사의 기록이야.",
						"english": "(Examines the shard) This is... a record of an ancient shaman.",
						"japanese": "(破片を調べる)これは…古代の呪術師の記録だ。",
						"chinese": "(检查碎片)这是…古代萨满的记录。",
						"french": "(Examine le fragment) C'est... un registre d'un ancien chaman.",
						"spanish": "(Examina el fragmento) Esto es... un registro de un chamán antiguo.",
						"vietnamese": "(Kiểm tra mảnh vỡ) Đây là... ghi chép của một pháp sư cổ đại.",
						"thai": "(ตรวจสอบเศษชิ้นส่วน) นี่คือ... บันทึกของหมอผีโบราณ",
						"hindi": "(टुकड़े की जाँच करता है) यह... एक प्राचीन जादूगर का अभिलेख है।"
					},
					"speaker": "glen"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "주술사?",
						"english": "A shaman?",
						"japanese": "呪術師？",
						"chinese": "萨满？",
						"french": "Un chaman ?",
						"spanish": "¿Un chamán?",
						"vietnamese": "Pháp sư?",
						"thai": "หมอผีเหรอ?",
						"hindi": "जादूगर?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. ‘영혼 안내자’에 대한 내용이 희미하게 남아있어.",
						"english": "Yes. There are faint traces about a 'Soul Guide'.",
						"japanese": "ええ。「魂の案内人」についての内容がうっすらと残っている。",
						"chinese": "是的。关于“灵魂引路人”的内容依稀可见。",
						"french": "Oui. Il reste de faibles traces concernant un 'Guide des Âmes'.",
						"spanish": "Sí. Hay rastros tenues sobre un 'Guía de Almas'.",
						"vietnamese": "Phải. Có những dấu vết mờ nhạt về một 'Người dẫn dắt linh hồn'.",
						"thai": "ใช่ มีร่องรอยเลือนลางเกี่ยวกับ 'ผู้ชี้นำวิญญาณ'",
						"hindi": "हाँ। 'आत्मा मार्गदर्शक' के बारे में कुछ धुंधले निशान बाकी हैं।"
					},
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "영혼 안내자? 그게 뭔데?",
						"english": "A Soul Guide? What is that?",
						"japanese": "魂の案内人？それは何だ？",
						"chinese": "灵魂引路人？那是什么？",
						"french": "Un Guide des Âmes ? Qu'est-ce que c'est ?",
						"spanish": "¿Un Guía de Almas? ¿Qué es eso?",
						"vietnamese": "Người dẫn dắt linh hồn? Đó là gì?",
						"thai": "ผู้ชี้นำวิญญาณเหรอ? มันคืออะไร?",
						"hindi": "आत्मा मार्गदर्शक? वो क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "죽은 자를 이끌고… 산 자의 길을 인도한다고 해. (고개를 갸웃) 에코와 관련이 있을지도 몰라.",
						"english": "It is said to guide the dead... and lead the living. (Tilts head) It might be related to Echo.",
						"japanese": "死者を導き…生者の道を案内するという。(首を傾げる)エコーと関係があるかもしれない。",
						"chinese": "据说它引导亡者…指引生者的道路。(歪头)可能与艾可有关。",
						"french": "On dit qu'il guide les morts... et montre le chemin aux vivants. (Penche la tête) Cela pourrait être lié à Echo.",
						"spanish": "Se dice que guía a los muertos... y a los vivos. (Inclina la cabeza) Podría estar relacionado con Echo.",
						"vietnamese": "Nó được cho là dẫn dắt người chết... và chỉ lối cho người sống. (Nghiêng đầu) Có thể liên quan đến Echo.",
						"thai": "ว่ากันว่านำทางคนตาย... และชี้ทางให้คนเป็น (เอียงคอ) อาจเกี่ยวข้องกับเอคโค่",
						"hindi": "कहा जाता है कि यह मृतकों का मार्गदर्शन करता है... और जीवितों को राह दिखाता है। (सिर झुकाता है) यह इको से संबंधित हो सकता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가끔 숲에서 알 수 없는 소리가 들리지 않나? 고대 언어의 조각 같은…",
						"english": "Don't you sometimes hear unknown sounds in the forest? Like fragments of an ancient language...",
						"japanese": "時々森で、よく分からない音が聞こえないか？古代言語の断片のような…",
						"chinese": "你难道没听过森林里有时传来不明的声音吗？像是古老语言的片段…",
						"french": "N'entendez-vous pas parfois des sons inconnus dans la forêt ? Comme des fragments d'une langue ancienne...",
						"spanish": "¿No escuchas a veces sonidos desconocidos en el bosque? Como fragmentos de un idioma antiguo...",
						"vietnamese": "Bạn có thỉnh thoảng nghe thấy những âm thanh không rõ trong rừng không? Giống như những mảnh vỡ của một ngôn ngữ cổ đại...",
						"thai": "บางครั้งคุณไม่ได้ยินเสียงแปลกๆ ในป่าเหรอ? เหมือนเศษเสี้ยวของภาษาโบราณ...",
						"hindi": "क्या तुम्हें कभी-कभी जंगल में अज्ञात आवाज़ें नहीं सुनाई देतीं? जैसे प्राचीन भाषा के टुकड़े..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "듣긴 했어. 왠지 슬픈 울림 같았는데.",
						"english": "I have heard it. It sounded like a sad echo, somehow.",
						"japanese": "聞いたことはある。なんだか悲しい響きに聞こえたが。",
						"chinese": "我听过。总觉得那是一种悲伤的回响。",
						"french": "Je l'ai entendu. Cela ressemblait à un écho triste, d'une certaine manière.",
						"spanish": "Lo he oído. De alguna manera, sonaba como un eco triste.",
						"vietnamese": "Tôi đã nghe thấy. Cứ như một tiếng vọng buồn vậy.",
						"thai": "เคยได้ยินนะ รู้สึกเหมือนเป็นเสียงสะท้อนที่เศร้าสร้อย",
						"hindi": "मैंने सुना है। किसी तरह वह एक दुखद प्रतिध्वनि लग रही थी।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "glen",
					"type": "direction"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "파편을 더 조사해봤어. '영혼 안내자'는… 단순히 영혼을 인도하는 존재가 아니었어.",
						"english": "I investigated the shard further. The 'Soul Guide' wasn't just a being that guided souls.",
						"japanese": "破片をさらに調べてみた。「魂の案内人」は…単に魂を導く存在ではなかった。",
						"chinese": "我进一步调查了碎片。“灵魂引路人”…不仅仅是引导灵魂的存在。",
						"french": "J'ai enquêté davantage sur le fragment. Le 'Guide des Âmes' n'était pas seulement un être qui guidait les âmes.",
						"spanish": "Investigué más a fondo el fragmento. El 'Guía de Almas' no era solo un ser que guiaba almas.",
						"vietnamese": "Tôi đã điều tra thêm về mảnh vỡ. 'Người dẫn dắt linh hồn'... không chỉ là một thực thể dẫn dắt linh hồn.",
						"thai": "ฉันตรวจสอบเศษชิ้นส่วนเพิ่มเติมแล้ว 'ผู้ชี้นำวิญญาณ' ไม่ได้เป็นเพียงแค่สิ่งที่นำทางวิญญาณเท่านั้น",
						"hindi": "मैंने टुकड़े की और जाँच की। 'आत्मा मार्गदर्शक'... केवल आत्माओं का मार्गदर्शन करने वाला प्राणी नहीं था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what was it?",
						"japanese": "じゃあ何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, c'était quoi ?",
						"spanish": "Entonces, ¿qué era?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो वह क्या था?"
					}
				},
				{
					"content": {
						"korean": "고대 주술사들이 강대한 생명 에너지를 다루기 위해 사용했던 주술 도구에 가까워.",
						"english": "It's closer to a shamanistic tool that ancient shamans used to harness powerful life energy.",
						"japanese": "古代の呪術師たちが、強大な生命エネルギーを扱うために使っていた呪術道具に近い。",
						"chinese": "它更像是一种古代萨满用于驾驭强大生命能量的巫术工具。",
						"french": "C'est plus proche d'un outil chamanique que les anciens chamans utilisaient pour maîtriser une puissante énergie vitale.",
						"spanish": "Se parece más a una herramienta chamánica que los chamanes antiguos usaban para manejar una poderosa energía vital.",
						"vietnamese": "Nó gần giống với một công cụ ma thuật mà các pháp sư cổ đại đã sử dụng để điều khiển năng lượng sống mạnh mẽ.",
						"thai": "มันใกล้เคียงกับเครื่องมือเวทมนตร์ที่หมอผีโบราณใช้เพื่อควบคุมพลังงานชีวิตอันแข็งแกร่ง",
						"hindi": "यह एक जादूई उपकरण के करीब है जिसका उपयोग प्राचीन जादूगर शक्तिशाली जीवन ऊर्जा को नियंत्रित करने के लिए करते थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "생명 에너지? 에코가 흡수하는 그거?",
						"english": "Life energy? The one Echo absorbs?",
						"japanese": "生命エネルギー？エコが吸収するあれか？",
						"chinese": "生命能量？埃可吸收的那个？",
						"french": "Énergie vitale ? Celle qu'Écho absorbe ?",
						"spanish": "¿Energía vital? ¿La que absorbe Echo?",
						"vietnamese": "Năng lượng sự sống? Thứ mà Echo hấp thụ sao?",
						"thai": "พลังชีวิตเหรอ? อันที่เอคโค่ดูดซับไปน่ะ?",
						"hindi": "जीवन ऊर्जा? वही जिसे इको सोखता है?"
					}
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아마도. 이 파편 자체가 그 주술의 흔적이야.",
						"english": "Probably. This fragment itself is a trace of that spell.",
						"japanese": "おそらく。この破片自体が、その呪術の痕跡だ。",
						"chinese": "也许吧。这碎片本身就是那咒术的痕迹。",
						"french": "Probablement. Ce fragment est lui-même une trace de ce sort.",
						"spanish": "Probablemente. Este fragmento es en sí mismo un rastro de ese hechizo.",
						"vietnamese": "Có lẽ. Mảnh vỡ này chính là dấu vết của thứ ma thuật đó.",
						"thai": "อาจจะ. ชิ้นส่วนนี้เองที่เป็นร่องรอยของอาคมนั้น.",
						"hindi": "शायद। यह टुकड़ा ही उस जादू का निशान है।"
					}
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "에코는… 어쩌면 이 주술의 부산물이거나… 아니면, 이용당하고 있는 것일지도 몰라.",
						"english": "Echo… might be a byproduct of this spell… or perhaps, being used.",
						"japanese": "エコは… もしかしたら、この呪術の副産物か… あるいは、利用されているのかもしれない。",
						"chinese": "埃可… 也许是这咒术的副产品… 又或者，它正被利用着。",
						"french": "Écho… est peut-être un sous-produit de ce sort… ou peut-être est-il utilisé.",
						"spanish": "Echo… podría ser un subproducto de este hechizo… o tal vez esté siendo utilizado.",
						"vietnamese": "Echo… có thể là sản phẩm phụ của ma thuật này… hoặc có thể đang bị lợi dụng.",
						"thai": "เอคโค่… อาจจะเป็นผลพลอยได้ของอาคมนี้… หรือไม่ก็, กำลังถูกใช้ประโยชน์อยู่.",
						"hindi": "इको… शायद इस जादू का उप-उत्पाद हो… या शायद, उसका इस्तेमाल किया जा रहा हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 에코가 정말 괴물이 아니라는 거야?",
						"english": "So, Echo isn't really a monster?",
						"japanese": "じゃあ、エコは本当に怪物じゃないってこと？",
						"chinese": "那埃可真的不是怪物？",
						"french": "Alors, Écho n'est vraiment pas un monstre ?",
						"spanish": "¿Entonces Echo no es realmente un monstruo?",
						"vietnamese": "Vậy là Echo không phải quái vật thật sao?",
						"thai": "งั้นเอคโค่ก็ไม่ใช่สัตว์ประหลาดจริงๆ น่ะเหรอ?",
						"hindi": "तो, इको वाकई एक राक्षस नहीं है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 주술은… 숲의 생명력을 흡수하고 증폭시키는 것이었어.",
						"english": "This spell… was absorbing and amplifying the forest's life force.",
						"japanese": "この呪術は… 森の生命力を吸収し、増幅させるものだった。",
						"chinese": "这咒术… 是用来吸收和增幅森林生命力的。",
						"french": "Ce sort… absorbait et amplifiait la force vitale de la forêt.",
						"spanish": "Este hechizo… estaba absorbiendo y amplificando la fuerza vital del bosque.",
						"vietnamese": "Ma thuật này… là để hấp thụ và khuếch đại sinh lực của rừng.",
						"thai": "อาคมนี้… มันคือการดูดซับและขยายพลังชีวิตของป่า.",
						"hindi": "यह जादू… जंगल की जीवन शक्ति को सोखकर उसे बढ़ा रहा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 에코는… 숲의 생명력을 흡수해서 강해지는 건가?",
						"english": "So Echo… gets stronger by absorbing the forest's life force?",
						"japanese": "じゃあエコは… 森の生命力を吸収して強くなっているのか？",
						"chinese": "那埃可… 是通过吸收森林的生命力来变强的吗？",
						"french": "Alors Écho… devient plus fort en absorbant la force vitale de la forêt ?",
						"spanish": "¿Entonces Echo… se hace más fuerte al absorber la fuerza vital del bosque?",
						"vietnamese": "Vậy Echo… trở nên mạnh hơn nhờ hấp thụ sinh lực của rừng sao?",
						"thai": "งั้นเอคโค่ก็… แข็งแกร่งขึ้นด้วยการดูดซับพลังชีวิตของป่าเหรอ?",
						"hindi": "तो इको… जंगल की जीवन शक्ति को सोखकर ताकतवर बन रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정확해. 그리고 그 증폭된 힘으로 숲을 변이시키는 거지.",
						"english": "Exactly. And with that amplified power, it's mutating the forest.",
						"japanese": "その通り。そして、その増幅された力で森を変異させているんだ。",
						"chinese": "没错。然后用那增幅的力量让森林发生变异。",
						"french": "Exactement. Et avec cette puissance amplifiée, elle mute la forêt.",
						"spanish": "Exacto. Y con ese poder amplificado, está mutando el bosque.",
						"vietnamese": "Chính xác. Và dùng sức mạnh đã được khuếch đại đó để biến đổi khu rừng.",
						"thai": "ถูกต้อง. และด้วยพลังที่ถูกขยายนั้น มันกำลังทำให้ป่ากลายพันธุ์.",
						"hindi": "बिल्कुल सही। और उस बढ़ी हुई शक्ति से जंगल को बदल रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "이 이상 나아가면 위험해. 영혼 안내자의 기운이 짙어져… 저 너머에는 통제할 수 없는 존재가 기다리고 있을 거야.",
						"english": "Going further is dangerous. The spirit guide's aura is thickening… Beyond that lies an uncontrollable entity.",
						"japanese": "これ以上進むと危険だ。魂の案内者の気配が濃くなっている… その先には、制御不能な存在が待ち構えているだろう。",
						"chinese": "再往前走就危险了。灵魂向导的气息越来越浓… 那边，有无法控制的存在在等着。",
						"french": "Aller plus loin est dangereux. L'aura du guide spirituel s'épaissit… Au-delà, une entité incontrôlable attend.",
						"spanish": "Avanzar más es peligroso. El aura del guía espiritual se está volviendo más densa… Más allá, una entidad incontrolable nos espera.",
						"vietnamese": "Đi tiếp sẽ nguy hiểm đấy. Khí tức của người dẫn đường linh hồn đang đặc dần… Phía bên kia, có một thực thể không thể kiểm soát đang chờ đợi.",
						"thai": "เดินหน้าต่อไปอันตราย. พลังของผู้นำทางวิญญาณเข้มข้นขึ้น… เลยไปจากตรงนั้น, สิ่งมีชีวิตที่ควบคุมไม่ได้กำลังรออยู่.",
						"hindi": "इससे आगे जाना खतरनाक है। आत्मा मार्गदर्शक की आभा घनी हो रही है… उस पार, एक बेकाबू इकाई इंतजार कर रही होगी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 더 이상 물러날 곳은 없어.",
						"english": "Can't stop. There's nowhere left to retreat.",
						"japanese": "止まれない。もう、後には引けない。",
						"chinese": "无法停止。已经无路可退了。",
						"french": "Impossible de s'arrêter. Il n'y a plus de place pour reculer.",
						"spanish": "No puedo parar. No hay lugar para retroceder.",
						"vietnamese": "Không thể dừng lại. Không còn đường lui nữa rồi.",
						"thai": "หยุดไม่ได้. ไม่มีที่ให้ถอยอีกแล้ว.",
						"hindi": "रुक नहीं सकता। अब पीछे हटने की कोई जगह नहीं।"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 숲의 심장을 가로막았다. 고대 주술의 힘이 느껴진다.",
						"english": "A colossal shadow blocked the forest's heart. The power of ancient magic is felt.",
						"japanese": "巨大な影が森の心臓を遮った。古の呪術の力が感じられる。",
						"chinese": "巨大的黑影挡住了森林的心脏。感受到了古老咒术的力量。",
						"french": "Une ombre colossale bloqua le cœur de la forêt. Le pouvoir de la magie ancienne se fait sentir.",
						"spanish": "Una sombra colosal bloqueó el corazón del bosque. Se siente el poder de la magia antigua.",
						"vietnamese": "Một bóng đen khổng lồ chặn đứng trái tim của khu rừng. Cảm nhận được sức mạnh của ma thuật cổ xưa.",
						"thai": "เงาขนาดมหึมาบดบังหัวใจของป่า. สัมผัสได้ถึงพลังของอาคมโบราณ.",
						"hindi": "एक विशाल छाया ने जंगल के दिल को रोक दिया। प्राचीन जादू की शक्ति महसूस हो रही है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자들… 이곳에 발을 들이다니.",
						"english": "Fools... to tread upon this place.",
						"japanese": "愚かな者たち… この地に足を踏み入れるとは。",
						"chinese": "愚蠢的凡人… 竟敢踏足此地。",
						"french": "Imbéciles... oser fouler ce lieu.",
						"spanish": "Necios... al pisar este lugar.",
						"vietnamese": "Lũ ngốc... dám đặt chân đến nơi này.",
						"thai": "คนโง่เง่า... บังอาจก้าวเข้ามาที่นี่",
						"hindi": "मूर्ख... इस स्थान पर कदम रखने की हिम्मत कैसे हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 에코를 조종하는 건가?",
						"english": "Are you... controlling the Echo?",
						"japanese": "お前が… エコーを操っているのか？",
						"chinese": "你… 在操控回声吗？",
						"french": "Est-ce toi... qui contrôles l'Écho ?",
						"spanish": "¿Eres tú... quien controla el Eco?",
						"vietnamese": "Ngươi... đang thao túng Echo sao?",
						"thai": "เจ้า... ควบคุมเอคโค่หรือ?",
						"hindi": "क्या तुम... इको को नियंत्रित कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조종? 나는 그저… 이 숲의 균형을 되찾으려는 것뿐.",
						"english": "Control? I merely... seek to restore balance to this forest.",
						"japanese": "操る？私はただ… この森の均衡を取り戻そうとしているだけだ。",
						"chinese": "操控？我只是… 想恢复这片森林的平衡。",
						"french": "Contrôler ? Je cherche seulement... à restaurer l'équilibre de cette forêt.",
						"spanish": "¿Controlar? Yo solo... intento restaurar el equilibrio de este bosque.",
						"vietnamese": "Thao túng? Ta chỉ là... muốn khôi phục lại sự cân bằng cho khu rừng này thôi.",
						"thai": "ควบคุม? ข้าแค่... ต้องการฟื้นฟูสมดุลของป่านี้เท่านั้น",
						"hindi": "नियंत्रण? मैं तो बस... इस जंगल का संतुलन बहाल करना चाहता हूँ।"
					}
				},
				{
					"speaker": "glen",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "저건… '영혼 안내자'의 불완전한 형태야! 조심해야 해!",
						"english": "That's... an incomplete form of the 'Soul Guide'! Be careful!",
						"japanese": "あれは…『魂の案内者』の不完全な姿だ！気をつけろ！",
						"chinese": "那只是… '灵魂向导'的不完全形态！小心！",
						"french": "C'est... une forme incomplète du 'Guide des Âmes' ! Fais attention !",
						"spanish": "¡Eso es... una forma incompleta del 'Guía de Almas'! ¡Ten cuidado!",
						"vietnamese": "Đó là... dạng chưa hoàn chỉnh của 'Người Dẫn Lối Linh Hồn'! Cẩn thận đấy!",
						"thai": "นั่นมัน... ร่างที่ไม่สมบูรณ์ของ 'ผู้นำทางวิญญาณ'! ระวังตัวด้วย!",
						"hindi": "वह... 'आत्मा मार्गदर्शक' का एक अधूरा रूप है! सावधान रहना!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어… 숲은… 너희의 것을… 잃게 될… 것이다…",
						"english": "Ugh... It's not... over yet... The forest... will lose... what is yours...",
						"japanese": "くっ… まだ… 終わってない… 森は… お前たちのものを… 失うことに… なるだろう…",
						"chinese": "呃… 还没… 结束… 森林会… 失去… 你们的… 一切…",
						"french": "Urgh... Ce n'est pas... fini... La forêt... perdra... ce qui est vôtre...",
						"spanish": "Ugh... Aún... no ha terminado... El bosque... perderá... lo vuestro...",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc đâu... Khu rừng... sẽ khiến các ngươi... mất đi... tất cả...",
						"thai": "อึก... ยัง... ไม่จบ... ป่านี้... จะทำให้พวกเจ้า... สูญเสีย... สิ่งที่อยู่กับเจ้า...",
						"hindi": "उह... यह अभी... खत्म नहीं हुआ है... जंगल... तुम्हारा... सब कुछ... छीन लेगा..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "균형? 네가 말하는 균형이 이런 파괴였나?",
						"english": "Balance? Was the 'balance' you spoke of this destruction?",
						"japanese": "均衡？お前が言う均衡とは、この破壊のことだったのか？",
						"chinese": "平衡？你所说的平衡就是这种破坏吗？",
						"french": "Équilibre ? L'équilibre dont tu parlais était cette destruction ?",
						"spanish": "¿Equilibrio? ¿El equilibrio del que hablabas era esta destrucción?",
						"vietnamese": "Cân bằng? Cân bằng mà ngươi nói chính là sự tàn phá này sao?",
						"thai": "สมดุล? สมดุลที่เจ้าพูดถึงคือการทำลายล้างแบบนี้หรือ?",
						"hindi": "संतुलन? क्या तुम्हारे संतुलन का मतलब यह विनाश था?"
					}
				},
				{
					"speaker": "glen",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건 완전한 에코가 아니었어. 파편에서 본 기록… 더 깊은 곳에 진짜가 있어.",
						"english": "That wasn't the true Echo. The records from the fragments... the real one lies deeper.",
						"japanese": "あれは完全なエコーじゃなかった。破片から見た記録… もっと深い場所に本物がいる。",
						"chinese": "那不是完整的回声。碎片中的记录… 真正的在更深处。",
						"french": "Ce n'était pas le véritable Écho. Les registres des fragments... le vrai se trouve plus profond.",
						"spanish": "Ese no era el verdadero Eco. Los registros de los fragmentos... el real está en lo más profundo.",
						"vietnamese": "Đó không phải là Echo hoàn chỉnh. Những ghi chép từ các mảnh vỡ... cái thật sự nằm sâu hơn.",
						"thai": "นั่นไม่ใช่เอคโค่ที่สมบูรณ์ บันทึกจากเศษชิ้นส่วน... ของจริงอยู่ในที่ลึกกว่านั้น",
						"hindi": "वह असली इको नहीं था। टुकड़ों से मिले रिकॉर्ड... असली वाला कहीं गहरा है।"
					},
					"speaker": "glen"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 중간 보스. 그러나 숲은 여전히 고통받고 있었다. 숲의 심장부에서 더욱 강력한 울림이 전해져 온다. 진실은, 이제 막 시작될 참이었다.",
						"english": "The mid-boss fell. Yet, the forest still suffered. A more powerful resonance emanated from the heart of the forest. The truth was, it was only just beginning.",
						"japanese": "中間ボスは倒れた。しかし、森はまだ苦しんでいた。森の心臓部から、さらに強力な響きが伝わってくる。真実が、まさに始まろうとしていたのだ。",
						"chinese": "中级首领倒下了。然而，森林仍在受苦。一股更强大的回响从森林深处传来。真相，才刚刚开始。",
						"french": "Le boss intermédiaire tomba. Pourtant, la forêt souffrait encore. Une résonance plus puissante émanait du cœur de la forêt. La vérité, elle, ne faisait que commencer.",
						"spanish": "El jefe intermedio cayó. Sin embargo, el bosque seguía sufriendo. Una resonancia más poderosa emanaba del corazón del bosque. La verdad, apenas estaba por comenzar.",
						"vietnamese": "Trùm giữa trận đã gục ngã. Tuy nhiên, khu rừng vẫn đang chịu đựng. Một tiếng vọng mạnh mẽ hơn truyền đến từ trái tim của khu rừng. Sự thật, chỉ vừa mới bắt đầu.",
						"thai": "บอสกึ่งกลางล้มลง แต่ป่าก็ยังคงทุกข์ทรมาน เสียงสะท้อนที่ทรงพลังยิ่งกว่าแผ่ซ่านมาจากใจกลางป่า ความจริง กำลังจะเริ่มต้นขึ้นแล้ว",
						"hindi": "मध्य-बॉस गिर गया। फिर भी, जंगल अभी भी पीड़ित था। जंगल के हृदय से एक अधिक शक्तिशाली प्रतिध्वनि निकल रही थी। सच्चाई, बस अभी शुरू होने वाली थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 그림자가 모든 것을 집어삼켰다. 끝없는 어둠 속으로.",
						"english": "The forest's shadow consumed all. Into endless darkness.",
						"japanese": "森の影がすべてを飲み込んだ。終わりのない闇の中へ。",
						"chinese": "森林的阴影吞噬了一切。坠入无尽的黑暗。",
						"french": "L'ombre de la forêt dévora tout. Dans les ténèbres sans fin.",
						"spanish": "La sombra del bosque lo devoró todo. Hacia la oscuridad infinita.",
						"vietnamese": "Bóng tối của khu rừng nuốt chửng mọi thứ. Vào màn đêm vô tận.",
						"thai": "เงาของป่ากลืนกินทุกสิ่ง สู่ความมืดมิดอันไร้ที่สิ้นสุด",
						"hindi": "जंगल की छाया ने सब कुछ निगल लिया। अनंत अंधकार में।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이 정도인가? 숲은… 나의 것이다.",
						"english": "Is this all you've got? The forest... is mine.",
						"japanese": "この程度か？森は… 私のものだ。",
						"chinese": "就这点本事吗？森林… 是我的。",
						"french": "Ce n'est que ça ? La forêt... est mienne.",
						"spanish": "¿Solo esto? El bosque... es mío.",
						"vietnamese": "Chỉ có thế thôi sao? Khu rừng... là của ta.",
						"thai": "แค่นี้เองหรือ? ป่านี้... เป็นของข้า",
						"hindi": "बस इतना ही? यह जंगल... मेरा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직이야… 포기할 수 없어…",
						"english": "Ugh... Not yet... I can't give up...",
						"japanese": "くっ… まだだ… 諦められない…",
						"chinese": "呃……还没……不能放弃……",
						"french": "Ugh... Pas encore... Je ne peux pas abandonner...",
						"spanish": "Ugh... Todavía no... No puedo rendirme...",
						"vietnamese": "Khụ... Chưa được... Tôi không thể bỏ cuộc...",
						"thai": "อึก... ยัง... ฉันยอมแพ้ไม่ได้...",
						"hindi": "उफ़... अभी नहीं... मैं हार नहीं मान सकता..."
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "포기하지 마! 파편이 알려준 진실은 아직… 남아있어!",
						"english": "Don't give up! The truth revealed by the shard still... remains!",
						"japanese": "諦めるな！破片が教えてくれた真実はまだ…残っている！",
						"chinese": "别放弃！碎片揭示的真相还……存在着！",
						"french": "N'abandonne pas ! La vérité révélée par l'éclat est encore... là !",
						"spanish": "¡No te rindas! La verdad revelada por el fragmento aún... ¡permanece!",
						"vietnamese": "Đừng bỏ cuộc! Sự thật mà mảnh vỡ tiết lộ vẫn... còn đó!",
						"thai": "อย่ายอมแพ้! ความจริงที่ชิ้นส่วนเปิดเผยยังคง... เหลืออยู่!",
						"hindi": "हार मत मानो! टुकड़े ने जो सच बताया है, वह अभी भी... बाकी है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더 깊어지고, 비밀은 짙어진다.",
			"고대 주술의 흔적, 잊혀진 문명의 단서.",
			"파편 속에 잠든 진실이 깨어나려 한다.",
			"어쩌면, 에코는 단순한 괴물이 아닐지도.",
			"우리는 진실을 향해 나아간다."
		],
		"english": [
			"The forest deepens, and secrets thicken.",
			"Traces of ancient sorcery, clues of a forgotten civilization.",
			"The truth slumbering in fragments is about to awaken.",
			"Perhaps, Echo isn't just a monster.",
			"We press forward towards the truth."
		],
		"japanese": [
			"森はさらに深まり、秘密は濃くなる。",
			"古代呪術の痕跡、忘れ去られた文明の手がかり。",
			"破片の中に眠る真実が、目覚めようとしている。",
			"もしかしたら、エコーはただの怪物ではないのかもしれない。",
			"私たちは真実に向かって進む。"
		],
		"chinese": [
			"森林愈发深邃，秘密愈发浓重。",
			"古代巫术的痕迹，失落文明的线索。",
			"碎片中沉睡的真相即将苏醒。",
			"也许，回声并非只是简单的怪物。",
			"我们向着真相前进。"
		],
		"french": [
			"La forêt s'épaissit, les secrets s'intensifient.",
			"Traces de sorcellerie antique, indices d'une civilisation oubliée.",
			"La vérité endormie dans les fragments est sur le point de s'éveiller.",
			"Peut-être qu'Écho n'est pas qu'un simple monstre.",
			"Nous avançons vers la vérité."
		],
		"spanish": [
			"El bosque se adentra, los secretos se intensifican.",
			"Rastros de brujería antigua, pistas de una civilización olvidada.",
			"La verdad dormida entre los fragmentos está a punto de despertar.",
			"Quizás, Eco no sea solo un monstruo.",
			"Avanzamos hacia la verdad."
		],
		"vietnamese": [
			"Rừng càng sâu, bí mật càng dày đặc.",
			"Dấu vết của ma thuật cổ xưa, manh mối của một nền văn minh đã lãng quên.",
			"Sự thật đang ngủ vùi trong các mảnh vỡ sắp sửa thức tỉnh.",
			"Có lẽ, Echo không chỉ là một con quái vật đơn thuần.",
			"Chúng ta tiến về phía sự thật."
		],
		"thai": [
			"ป่ายิ่งลึก ความลับยิ่งหนาแน่น",
			"ร่องรอยของเวทมนตร์โบราณ เบาะแสของอารยธรรมที่ถูกลืม",
			"ความจริงที่หลับใหลอยู่ในเศษซาก กำลังจะตื่นขึ้นมา",
			"บางที เอคโค่อาจไม่ใช่แค่สัตว์ประหลาดธรรมดา",
			"เราก้าวไปข้างหน้าสู่ความจริง"
		],
		"hindi": [
			"जंगल गहरा होता जाता है, और रहस्य और भी घने होते जाते हैं।",
			"प्राचीन जादू-टोना के निशान, एक भूली हुई सभ्यता के सुराग।",
			"टुकड़ों में सोई सच्चाई जागने वाली है।",
			"शायद, इको सिर्फ एक राक्षस नहीं है।",
			"हम सच्चाई की ओर बढ़ते हैं।"
		]
	}
} as const;
