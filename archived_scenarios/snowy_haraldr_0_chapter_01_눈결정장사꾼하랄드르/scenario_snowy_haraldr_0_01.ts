export const scenario_snowy_haraldr_0_01 = {
	"scenario_id": "snowy_haraldr_0_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 차가운 바람이 살을 찢었다.",
			"그곳에, 기묘한 눈 허수아비가 나타났다.",
			"그는 자신을 '위대한 전사'라 소개했다.",
			"그리고… 무언가를 팔려고 했다. 기묘한 '눈 결정'을."
		],
		"english": [
			"Endless snowy plains. The cold wind tore at the skin.",
			"There, a strange snow scarecrow appeared.",
			"He introduced himself as a 'great warrior'.",
			"And... he tried to sell something. Strange 'snow crystals'."
		],
		"japanese": [
			"果てしなく広がる雪原。冷たい風が肌を裂いた。",
			"そこに、奇妙な雪だるまの案山子が現れた。",
			"彼は自分を「偉大な戦士」と紹介した。",
			"そして… 何かを売ろうとした。奇妙な「雪の結晶」を。"
		],
		"chinese": [
			"一望无际的雪原。寒风刺骨。",
			"那里，出现了一个奇怪的雪人稻草人。",
			"他自称是“伟大的战士”。",
			"而且… 他试图出售某种东西。奇怪的“雪结晶”。"
		],
		"french": [
			"Une étendue enneigée infinie. Le vent glacial lacérait la peau.",
			"Là, un étrange épouvantail de neige apparut.",
			"Il se présenta comme un « grand guerrier ».",
			"Et... il tenta de vendre quelque chose. D'étranges « cristaux de neige »."
		],
		"spanish": [
			"Una estepa nevada sin fin. El viento helado cortaba la piel.",
			"Allí, apareció un extraño espantapájaros de nieve.",
			"Se presentó como un 'gran guerrero'.",
			"Y… intentó vender algo. Extraños 'cristales de nieve'."
		],
		"vietnamese": [
			"Tuyết nguyên trải dài vô tận. Gió lạnh cắt da cắt thịt.",
			"Ở đó, một bù nhìn tuyết kỳ lạ xuất hiện.",
			"Hắn tự xưng là 'chiến binh vĩ đại'.",
			"Và… hắn cố bán thứ gì đó. Những 'tinh thể tuyết' kỳ lạ."
		],
		"thai": [
			"ทุ่งหิมะกว้างใหญ่ไร้ที่สิ้นสุด สายลมหนาวพัดกรีดผิว",
			"ณ ที่นั้น หุ่นไล่กาสโนว์แมนประหลาดก็ปรากฏตัวขึ้น",
			"เขาแนะนำตัวเองว่า 'นักรบผู้ยิ่งใหญ่'",
			"และ... เขากำลังจะขายอะไรบางอย่าง 'ผลึกหิมะ' ประหลาด"
		],
		"hindi": [
			"बर्फीले मैदान अंतहीन फैले हुए थे। ठंडी हवा त्वचा को चीर रही थी।",
			"वहाँ, एक अजीब बर्फीला बिजूका प्रकट हुआ।",
			"उसने खुद को 'महान योद्धा' बताया।",
			"और… वह कुछ बेचना चाहता था। अजीब 'बर्फीले क्रिस्टल'।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 휘몰아치는 설원. 길은 보이지 않았다.",
						"english": "A blizzard-swept snowfield. The path was obscured.",
						"japanese": "吹雪が荒れ狂う雪原。道は見えなかった。",
						"chinese": "暴风雪肆虐的雪原。道路模糊不清。",
						"french": "Une étendue enneigée balayée par le blizzard. Le chemin était invisible.",
						"spanish": "Un campo de nieve azotado por la ventisca. El camino era invisible.",
						"vietnamese": "Tuyết nguyên chìm trong bão tuyết. Không thấy lối đi.",
						"thai": "ทุ่งหิมะที่พายุหิมะโหมกระหน่ำ มองไม่เห็นเส้นทาง",
						"hindi": "बर्फीले तूफान से घिरा बर्फ का मैदान। रास्ता दिखाई नहीं दे रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이런 곳에… 사람이?",
						"english": "Here, in a place like this... a person?",
						"japanese": "こんな場所に… 人が？",
						"chinese": "这种地方… 还有人？",
						"french": "À un endroit pareil… quelqu'un ?",
						"spanish": "¿En un lugar como este… una persona?",
						"vietnamese": "Ở nơi thế này… có người sao?",
						"thai": "ที่แบบนี้... มีคนด้วยเหรอ?",
						"hindi": "ऐसी जगह पर… कोई इंसान?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크하하! 위대한 전사 하랄드르가 왔노라!",
						"english": "Khahaha! The great warrior Haraldr has arrived!",
						"japanese": "クハハハ！偉大な戦士ハラルドルが来たぞ！",
						"chinese": "哈哈哈！伟大的战士哈拉尔德来了！",
						"french": "Hahaha ! Le grand guerrier Haraldr est arrivé !",
						"spanish": "¡Jajaja! ¡El gran guerrero Haraldr ha llegado!",
						"vietnamese": "Khahaha! Chiến binh vĩ đại Haraldr đã đến!",
						"thai": "ฮ่าๆๆ! นักรบผู้ยิ่งใหญ่ฮารัลเดอร์มาแล้ว!",
						"hindi": "हाहाहा! महान योद्धा हरल्ड आ गया है!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "눈사람…? 당신 뭐야?",
						"english": "A snowman...? What are you?",
						"japanese": "雪だるま…? あなた、何者だ？",
						"chinese": "雪人…？你是什么人？",
						"french": "Un bonhomme de neige… ? Qui êtes-vous ?",
						"spanish": "¿Un muñeco de nieve…? ¿Qué eres?",
						"vietnamese": "Người tuyết…? Ngươi là ai?",
						"thai": "สโนว์แมน...? คุณคือใคร?",
						"hindi": "एक स्नोमैन...? तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "경계를 풀라! 나는 그대들에게 승리의 전리품을 팔러 왔다!",
						"english": "Lower your guard! I've come to sell you the spoils of victory!",
						"japanese": "警戒を解け！私はお前たちに勝利の戦利品を売りに来たのだ！",
						"chinese": "放下戒备！我来给你们出售胜利的战利品！",
						"french": "Baissez votre garde ! Je suis venu vous vendre les butins de la victoire !",
						"spanish": "¡Bajad la guardia! ¡He venido a venderos los despojos de la victoria!",
						"vietnamese": "Bỏ phòng bị xuống! Ta đến để bán cho các ngươi chiến lợi phẩm của chiến thắng!",
						"thai": "คลายการระแวงซะ! ข้ามาเพื่อขายของที่ระลึกแห่งชัยชนะให้แก่พวกเจ้า!",
						"hindi": "अपनी चौकसी कम करो! मैं तुम्हें विजय के पुरस्कार बेचने आया हूँ!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…기묘하군. 이런 곳에서 장사라니.",
						"english": "...Peculiar. Doing business in a place like this.",
						"japanese": "…奇妙だな。こんな場所で商売とは。",
						"chinese": "…真奇怪。在这种地方做生意。",
						"french": "…Étrange. Faire du commerce dans un endroit pareil.",
						"spanish": "…Extraño. Hacer negocios en un lugar como este.",
						"vietnamese": "…Kỳ lạ thật. Làm ăn ở nơi thế này.",
						"thai": "...แปลกพิกล ทำมาค้าขายในที่แบบนี้เนี่ยนะ",
						"hindi": "…अजीब है। ऐसी जगह पर व्यापार करना।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시 나타났군. 그 전리품이라는 것… 정체가 뭔가.",
						"english": "You again. What exactly is that 'trophy'?",
						"japanese": "また現れたか。その戦利品とやら…一体何だ？",
						"chinese": "你又出现了。那个所谓的战利品…究竟是什么？",
						"french": "Encore toi. Qu'est-ce que c'est que ce 'trophée' ?",
						"spanish": "Tú otra vez. ¿Qué es exactamente ese 'trofeo'?",
						"vietnamese": "Ngươi lại xuất hiện. Cái 'chiến lợi phẩm' đó… rốt cuộc là gì?",
						"thai": "เจ้าอีกแล้วรึ? 'ของรางวัล' นั่น...คืออะไรกันแน่?",
						"hindi": "तुम फिर आ गए। वह 'लूट' क्या है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "전리품? 위대한 전사만이 가질 수 있는 승리의 결정!",
						"english": "Trophy? It's the crystallization of victory, obtainable only by a great warrior!",
						"japanese": "戦利品だと？偉大な戦士のみが手にできる、勝利の結晶だ！",
						"chinese": "战利品？这是只有伟大战士才能拥有的胜利结晶！",
						"french": "Trophée ? C'est la cristallisation de la victoire, que seul un grand guerrier peut posséder !",
						"spanish": "¿Trofeo? ¡Es la cristalización de la victoria, que solo un gran guerrero puede poseer!",
						"vietnamese": "Chiến lợi phẩm ư? Đó là sự kết tinh của chiến thắng, chỉ những chiến binh vĩ đại mới có được!",
						"thai": "ของรางวัลรึ? มันคือผลึกแห่งชัยชนะที่เพียงนักรบผู้ยิ่งใหญ่เท่านั้นจะครอบครองได้!",
						"hindi": "लूट? यह जीत का प्रतीक है, जिसे केवल एक महान योद्धा ही प्राप्त कर सकता है!"
					}
				},
				{
					"content": {
						"korean": "그냥 눈덩이잖아?",
						"english": "Isn't that just a snowball?",
						"japanese": "ただの雪玉じゃないか？",
						"chinese": "那不就是个雪球吗？",
						"french": "C'est juste une boule de neige, non ?",
						"spanish": "¿No es solo una bola de nieve?",
						"vietnamese": "Đó chỉ là một cục tuyết mà?",
						"thai": "นั่นมันแค่ก้อนหิมะไม่ใช่รึไง?",
						"hindi": "क्या वह सिर्फ एक बर्फ का गोला नहीं है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 모욕하는가! 이 속에는… 위대한 영혼이 담겨있다!",
						"english": "How dare you insult it! Within this... lies a great spirit!",
						"japanese": "侮辱するとは！この中には…偉大な魂が宿っているのだ！",
						"chinese": "你竟敢侮辱它！这其中…蕴含着伟大的灵魂！",
						"french": "Comment oses-tu l'insulter ! À l'intérieur... réside un grand esprit !",
						"spanish": "¡Cómo te atreves a insultarlo! ¡Dentro de esto... reside un gran espíritu!",
						"vietnamese": "Ngươi dám sỉ nhục nó sao! Bên trong này… chứa đựng một linh hồn vĩ đại!",
						"thai": "บังอาจมาดูถูกรึ! ภายในนี้...มีวิญญาณอันยิ่งใหญ่สถิตอยู่!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई अपमान करने की! इसके अंदर... एक महान आत्मा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "영혼? 허세가 지나치군. 하지만… 어딘가 기묘해.",
						"english": "A spirit? You're too boastful. But... it is somewhat peculiar.",
						"japanese": "魂だと？大袈裟な。だが…どこか奇妙だ。",
						"chinese": "灵魂？你太夸张了。但是…总觉得有点奇怪。",
						"french": "Un esprit ? Tu es trop vantard. Mais... c'est étrange, d'une certaine manière.",
						"spanish": "¿Un espíritu? Eres demasiado jactancioso. Pero... hay algo extraño en ello.",
						"vietnamese": "Linh hồn ư? Ngươi quá khoác lác. Nhưng… có gì đó kỳ lạ.",
						"thai": "วิญญาณรึ? เจ้าโอ้อวดเกินไปแล้ว. แต่...มันก็แปลกๆ อยู่นะ.",
						"hindi": "एक आत्मा? तुम बहुत शेखी बघारते हो। लेकिन... यह कुछ अजीब है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "내 위대함을 믿지 않는가! 그럼 이걸 보라!",
						"english": "You don't believe in my greatness?! Then behold this!",
						"japanese": "我が偉大さを信じぬか！ならばこれを見よ！",
						"chinese": "你不相信我的伟大吗？！那就看这个！",
						"french": "Tu ne crois pas en ma grandeur ?! Alors regarde ceci !",
						"spanish": "¡¿No crees en mi grandeza?! ¡Pues mira esto!",
						"vietnamese": "Ngươi không tin vào sự vĩ đại của ta sao?! Vậy thì hãy xem đây!",
						"thai": "เจ้าไม่เชื่อในความยิ่งใหญ่ของข้ารึ?! ถ้าอย่างนั้นจงดูนี่!",
						"hindi": "क्या तुम मेरी महानता पर विश्वास नहीं करते?! तो यह देखो!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 400,
					"speaker": "random_boss",
					"type": "direction",
					"action": "focus"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하랄드르가 뿔피리를 불었다. 삐-빅, 바람 빠진 소리만 울렸다.",
						"english": "Haraldr blew the horn. *Pffft*, only a deflated sound echoed.",
						"japanese": "ハラルドルが角笛を吹いた。プーッ、と間抜けな音だけが響いた。",
						"chinese": "哈拉尔德吹响了号角。噗——，只有漏风的声音响起。",
						"french": "Haraldr souffla dans la corne. *Pffft*, seul un son dégonflé résonna.",
						"spanish": "Haraldr sopló el cuerno. *Pffft*, solo resonó un sonido desinflado.",
						"vietnamese": "Haraldr thổi chiếc tù và. *Phì-phì*, chỉ có tiếng xì hơi vang lên.",
						"thai": "ฮาราลด์รเป่าแตร. *ฟี้ด* มีเพียงเสียงลมรั่วเท่านั้นที่ดังขึ้น.",
						"hindi": "हारल्ड्र ने सींग बजाया। *फूस्स*, केवल एक पिचकी हुई आवाज़ गूंजी।"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "푸하하! 저게 뭐야?",
						"english": "Puhaha! What was that?",
						"japanese": "プハハ！あれは何だ？",
						"chinese": "噗哈哈！那是什么？",
						"french": "Puhaha ! Qu'est-ce que c'était ?",
						"spanish": "¡Puf jaja! ¿Qué fue eso?",
						"vietnamese": "Phù ha ha! Cái gì vậy?",
						"thai": "ผุฮะฮะ! นั่นมันอะไรกัน?",
						"hindi": "पुहहा! वह क्या था?"
					}
				},
				{
					"content": {
						"korean": "크흠! 바람이 좋지 않군! 다음엔 다를 것이다!",
						"english": "Ahem! The wind isn't good! Next time, it will be different!",
						"japanese": "ごほん！風が悪いな！次は違うだろう！",
						"chinese": "咳咳！风不好！下次会不一样的！",
						"french": "Hem ! Le vent n'est pas bon ! La prochaine fois, ce sera différent !",
						"spanish": "¡Ejem! ¡El viento no es bueno! ¡La próxima vez será diferente!",
						"vietnamese": "Khụ khụ! Gió không tốt! Lần tới sẽ khác!",
						"thai": "แฮ่ม! ลมไม่ดี! ครั้งหน้าจะต้องต่างออกไป!",
						"hindi": "एहम! हवा अच्छी नहीं है! अगली बार अलग होगा!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "저 허세… 어딘가 섬뜩해.",
						"english": "That boastfulness... it's somewhat eerie.",
						"japanese": "あの虚勢…どこか不気味だ。",
						"chinese": "那份虚张声势…总觉得有点毛骨悚然。",
						"french": "Ce bluff... c'est étrange d'une certaine manière.",
						"spanish": "Esa jactancia... es algo espeluznante.",
						"vietnamese": "Cái sự khoe khoang đó… có gì đó rợn người.",
						"thai": "ความอวดดีนั่น...มันน่าขนลุกยังไงไม่รู้.",
						"hindi": "वह दिखावा... कुछ भयानक है।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 전리품을 사라! 이것만이 그대들을 살릴 것이다!",
						"english": "Buy my loot! Only this can save you!",
						"japanese": "私の戦利品を買え！これだけがお前たちを救うだろう！",
						"chinese": "买我的战利品！只有它能拯救你们！",
						"french": "Achetez mon butin ! Seul cela peut vous sauver !",
						"spanish": "¡Comprad mi botín! ¡Solo esto puede salvaros!",
						"vietnamese": "Mua chiến lợi phẩm của ta! Chỉ thứ này mới có thể cứu các ngươi!",
						"thai": "ซื้อของรางวัลของข้า! มีเพียงสิ่งนี้ที่จะช่วยพวกเจ้าได้!",
						"hindi": "मेरा लूट खरीदो! केवल यही तुम्हें बचा सकता है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이제 슬슬 짜증 나기 시작하네.",
						"english": "This is starting to get annoying.",
						"japanese": "そろそろイライラしてきたな。",
						"chinese": "我开始有点烦躁了。",
						"french": "Ça commence à devenir agaçant.",
						"spanish": "Esto está empezando a molestarme.",
						"vietnamese": "Bắt đầu thấy khó chịu rồi đấy.",
						"thai": "เริ่มจะรำคาญแล้วนะเนี่ย.",
						"hindi": "अब यह परेशान करने लगा है।"
					}
				},
				{
					"content": {
						"korean": "그의 눈빛… 집착이 느껴져. 단순한 장사꾼이 아닐지도.",
						"english": "His eyes... I sense obsession. He might not be just a merchant.",
						"japanese": "彼の目つき…執着を感じる。ただの商人ではないのかもしれない。",
						"chinese": "他的眼神……我感受到了执着。他可能不是个普通的商人。",
						"french": "Son regard... je sens de l'obsession. Il n'est peut-être pas qu'un simple marchand.",
						"spanish": "Su mirada... siento obsesión. Quizás no sea solo un comerciante.",
						"vietnamese": "Ánh mắt hắn... Tôi cảm thấy sự ám ảnh. Hắn có thể không chỉ là một thương nhân.",
						"thai": "แววตาของเขา... สัมผัสได้ถึงความหมกมุ่น. เขาอาจไม่ใช่แค่พ่อค้าธรรมดา.",
						"hindi": "उसकी आँखें... मैं जुनून महसूस करता हूँ। वह सिर्फ एक व्यापारी नहीं हो सकता।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "크하하! 위대한 전사의 눈 결정은 피와 땀으로 만들어진 것!",
						"english": "Hahaha! The great warrior's snow crystal is made of blood and sweat!",
						"japanese": "クハハハ！偉大な戦士の雪の結晶は、血と汗でできたものだ！",
						"chinese": "哈哈哈哈！伟大战士的雪结晶是由鲜血和汗水铸成的！",
						"french": "Hahaha ! Le cristal de neige du grand guerrier est fait de sang et de sueur !",
						"spanish": "¡Jajaja! ¡El cristal de nieve del gran guerrero está hecho de sangre y sudor!",
						"vietnamese": "Khà khà! Pha lê tuyết của chiến binh vĩ đại được tạo nên từ máu và mồ hôi!",
						"thai": "ฮ่าฮ่าฮ่า! เกร็ดหิมะของนักรบผู้ยิ่งใหญ่สร้างขึ้นจากเลือดและหยาดเหงื่อ!",
						"hindi": "हाहाहा! महान योद्धा का बर्फीला क्रिस्टल खून और पसीने से बना है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "크윽…! 이럴 리가…! 내 위대한 힘이…!",
						"english": "Ugh...! This can't be...! My great power...!",
						"japanese": "ぐっ…！そんな馬鹿な…！我が偉大な力が…！",
						"chinese": "呃……！这不可能……！我伟大的力量……！",
						"french": "Ugh… ! C'est impossible… ! Mon grand pouvoir… !",
						"spanish": "¡Ugh…! ¡Esto no puede ser…! ¡Mi gran poder…!",
						"vietnamese": "Khụ...! Không thể nào...! Sức mạnh vĩ đại của ta...!",
						"thai": "อึก...! เป็นไปไม่ได้...! พลังอันยิ่งใหญ่ของข้า...!",
						"hindi": "उफ़...! यह नहीं हो सकता...! मेरी महान शक्ति...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그의 허세는 무너졌지만… 근원의 힘은 아직 남아있군.",
						"english": "His bravado has shattered... but the core power remains.",
						"japanese": "彼の虚勢は崩れたが…根源の力はまだ残っているな。",
						"chinese": "他的虚张声势崩溃了……但核心的力量还在。",
						"french": "Sa bravade s'est effondrée... mais le pouvoir fondamental demeure.",
						"spanish": "Su bravuconería se ha desmoronado... pero el poder central aún permanece.",
						"vietnamese": "Sự khoe khoang của hắn đã tan vỡ... nhưng sức mạnh gốc rễ vẫn còn.",
						"thai": "ความโอ้อวดของเขาสลายไปแล้ว... แต่พลังแก่นแท้ยังคงอยู่.",
						"hindi": "उसका घमंड टूट गया है... लेकिन मूल शक्ति अभी भी बची है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "결국 허풍이었어.",
						"english": "Just bluster in the end.",
						"japanese": "結局、ただの虚勢だったな。",
						"chinese": "终究只是虚张声势。",
						"french": "Juste du bluff, après tout.",
						"spanish": "Al final, solo fanfarronería.",
						"vietnamese": "Rốt cuộc cũng chỉ là khoác lác.",
						"thai": "สุดท้ายก็แค่ลมปาก",
						"hindi": "अंततः बस कोरा डींग।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "눈 결정 장사꾼은 쓰러졌다. 그러나 설원의 기묘함은 끝나지 않았다.",
						"english": "The Snow Crystal Merchant fell. But the oddities of the snowfield did not end.",
						"japanese": "雪結晶商人は倒れた。しかし、雪原の奇妙さは終わらなかった。",
						"chinese": "雪晶商人倒下了。然而，雪原的诡异并未因此结束。",
						"french": "Le Marchand de Cristaux de Neige est tombé. Mais les étrangetés du champ de neige ne prirent pas fin.",
						"spanish": "El Mercader de Cristales de Nieve cayó. Pero las peculiaridades del campo nevado no terminaron.",
						"vietnamese": "Thương nhân Tinh thể Tuyết đã gục ngã. Nhưng những điều kỳ lạ của cánh đồng tuyết vẫn chưa kết thúc.",
						"thai": "พ่อค้าเกล็ดหิมะล้มลง แต่ความประหลาดของทุ่งหิมะยังไม่สิ้นสุด",
						"hindi": "हिम क्रिस्टल व्यापारी गिर गया। परंतु हिमक्षेत्र की विचित्रताएँ समाप्त नहीं हुईं।"
					}
				},
				{
					"content": {
						"korean": "새로운 단서가, 얼음 속에서 빛을 발하고 있었다.",
						"english": "A new clue, glowing within the ice.",
						"japanese": "新たな手がかりが、氷の中で光を放っていた。",
						"chinese": "新的线索，在冰中闪耀着光芒。",
						"french": "Un nouvel indice brillait dans la glace.",
						"spanish": "Una nueva pista, brillando en el hielo.",
						"vietnamese": "Một manh mối mới, tỏa sáng trong băng.",
						"thai": "เบาะแสใหม่ เปล่งประกายอยู่ภายในน้ำแข็ง",
						"hindi": "एक नया सुराग, बर्फ के भीतर चमक रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 여기까지 왔군. 내 위대한 전리품을 거절한 어리석은 자들!",
						"english": "So you've finally arrived. Foolish ones who rejected my great spoils!",
						"japanese": "ついにここまで来たか。我が偉大な戦利品を拒んだ愚か者どもめ！",
						"chinese": "你们终于来了。拒绝我伟大战利品的愚蠢之人！",
						"french": "Vous voilà enfin. Insensés qui avez rejeté mon grand butin !",
						"spanish": "Así que finalmente habéis llegado. ¡Necios que rechazasteis mi gran botín!",
						"vietnamese": "Cuối cùng các ngươi cũng đến đây. Những kẻ ngu ngốc đã từ chối chiến lợi phẩm vĩ đại của ta!",
						"thai": "ในที่สุดก็มาถึงที่นี่. พวกโง่เขลาที่ปฏิเสธของรางวัลอันยิ่งใหญ่ของข้า!",
						"hindi": "तो तुम आखिरकार आ गए। मूर्ख जिन्होंने मेरे महान लूट को अस्वीकार कर दिया!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이봐, 눈 허수아비! 이제 가면을 벗어!",
						"english": "Hey, snow scarecrow! Take off your mask now!",
						"japanese": "おい、雪の案山子！今すぐ仮面を脱げ！",
						"chinese": "喂，雪人稻草！现在把面具摘下来！",
						"french": "Hé, épouvantail de neige ! Enlève ton masque maintenant !",
						"spanish": "¡Oye, espantapájaros de nieve! ¡Quítate la máscara ahora!",
						"vietnamese": "Này, bù nhìn tuyết! Cởi mặt nạ ra ngay!",
						"thai": "นี่ เจ้าหุ่นไล่กาสีขาว! ถอดหน้ากากออกซะเดี๋ยวนี้!",
						"hindi": "अरे, बर्फ के बिजूका! अब अपना नकाब उतारो!"
					}
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "…예상했던 것보다 더 위험하군. 본성을 드러내는군.",
						"english": "...More dangerous than expected. He's revealing his true nature.",
						"japanese": "…予想よりも危険だ。本性を現し始めたな。",
						"chinese": "……比预想的更危险。他正在暴露本性。",
						"french": "...Plus dangereux que prévu. Il révèle sa vraie nature.",
						"spanish": "...Más peligroso de lo esperado. Está revelando su verdadera naturaleza.",
						"vietnamese": "...Nguy hiểm hơn tôi nghĩ. Hắn đang bộc lộ bản chất thật.",
						"thai": "...อันตรายกว่าที่คิดไว้. เขากำลังเผยธาตุแท้.",
						"hindi": "...उम्मीद से ज़्यादा खतरनाक। वह अपनी असली प्रकृति दिखा रहा है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크하하! 가면? 이것이 나의 진정한 모습이다! 내 결정에 담긴 힘을 맛보아라!",
						"english": "Hahaha! A mask? This is my true form! Taste the power within my crystal!",
						"japanese": "クハハハ！仮面だと？これこそが我が真の姿だ！我が結晶に秘められた力を味わえ！",
						"chinese": "哈哈哈哈！面具？这才是我的真面目！尝尝我结晶中蕴含的力量吧！",
						"french": "Hahaha ! Un masque ? C'est ma vraie forme ! Goûtez au pouvoir contenu dans mon cristal !",
						"spanish": "¡Jajaja! ¿Una máscara? ¡Esta es mi verdadera forma! ¡Probad el poder encerrado en mi cristal!",
						"vietnamese": "Khà khà! Mặt nạ sao? Đây mới là hình dạng thật của ta! Nếm thử sức mạnh ẩn chứa trong pha lê của ta đi!",
						"thai": "ฮ่าฮ่าฮ่า! หน้ากากเหรอ? นี่แหละคือร่างที่แท้จริงของข้า! จงลิ้มรสพลังที่อยู่ในเกร็ดของข้าซะ!",
						"hindi": "हाहाहा! एक नकाब? यह मेरा असली रूप है! मेरे क्रिस्टल में निहित शक्ति का स्वाद चखो!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하하! 어리석은 것들! 너희는 아직 내 힘의 일부도 모른다!",
						"english": "Kwahahaha! Foolish mortals! You know not even a fraction of my power!",
						"japanese": "クハハハ！愚かな者たちめ！貴様らはまだ私の力の一部すら知らぬ！",
						"chinese": "哈哈哈！愚蠢的东西！你们还不知道我力量的冰山一角！",
						"french": "Hahahaha ! Imbéciles ! Vous ne connaissez même pas une fraction de mon pouvoir !",
						"spanish": "¡Jajajaja! ¡Tontos! ¡Aún no conocéis ni una parte de mi poder!",
						"vietnamese": "Khặc khặc khặc! Lũ ngu ngốc! Các ngươi còn chưa biết một phần sức mạnh của ta!",
						"thai": "คิกคิกคิก! พวกโง่เง่า! พวกเจ้ายังไม่รู้แม้แต่เศษเสี้ยวของพลังข้า!",
						"hindi": "हाहाहा! मूर्खों! तुम अभी मेरी शक्ति का एक अंश भी नहीं जानते!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장… 아직 부족한가.",
						"english": "Damn it... Still not enough?",
						"japanese": "くそっ…まだ足りないのか。",
						"chinese": "该死… 还不够吗？",
						"french": "Mince... Pas encore assez ?",
						"spanish": "Maldición... ¿Todavía no es suficiente?",
						"vietnamese": "Chết tiệt… Vẫn chưa đủ sao.",
						"thai": "ให้ตายสิ... ยังไม่พออีกหรือ",
						"hindi": "धिक्कार है... अभी भी कम है क्या?"
					}
				},
				{
					"content": {
						"korean": "경솔했군. 그의 힘은… 보이는 것 이상이다. 다음엔… 반드시.",
						"english": "Careless. His power... is beyond what appears. Next time... I will.",
						"japanese": "軽率だったな。彼の力は…見かけ以上だ。次は…必ず。",
						"chinese": "是我大意了。他的力量…远超表面。下次…我一定会。",
						"french": "Imprudent. Son pouvoir... est plus grand qu'il n'y paraît. La prochaine fois... je ne faillirai pas.",
						"spanish": "Fui descuidado. Su poder... es más de lo que parece. La próxima vez... lo conseguiré.",
						"vietnamese": "Đã quá khinh suất. Sức mạnh của hắn… vượt xa những gì ta thấy. Lần tới… nhất định.",
						"thai": "ประมาทไปหน่อย พลังของเขา... เหนือกว่าที่เห็น ครั้งหน้า... ต้องสำเร็จ",
						"hindi": "लापरवाही थी। उसकी शक्ति... जो दिखती है उससे कहीं अधिक है। अगली बार... निश्चित रूप से।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				}
			]
		}
	]
} as const;
