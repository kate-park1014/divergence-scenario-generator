export const scenario_forest_ciphra_31_04 = {
	"scenario_id": "forest_ciphra_31_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊숙한 곳. 고요함 속에 불안이 감돌았다.",
						"english": "The deepest part of the forest. Unease lingered in the quiet.",
						"japanese": "森の最も奥深い場所。静けさの中に不安が漂っていた。",
						"chinese": "森林最深处。不安在寂静中弥漫。",
						"french": "La partie la plus profonde de la forêt. L'inquiétude planait dans le calme.",
						"spanish": "La parte más profunda del bosque. La inquietud se cernía en la quietud.",
						"vietnamese": "Nơi sâu nhất của khu rừng. Sự bất an ẩn hiện trong tĩnh lặng.",
						"thai": "ส่วนที่ลึกที่สุดของป่า ความไม่สบายใจแฝงอยู่ในความเงียบงัน",
						"hindi": "जंगल का सबसे गहरा हिस्सा। शांति में बेचैनी छाई हुई थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "얼마나 더 가야 하는 거지? 이 숲은 끝이 없어.",
						"english": "How much further do we have to go? This forest is endless.",
						"japanese": "あとどれくらい行けばいいんだ？この森は終わりがない。",
						"chinese": "还要走多远？这森林没有尽头。",
						"french": "Combien de chemin nous reste-t-il ? Cette forêt est sans fin.",
						"spanish": "¿Cuánto más tenemos que avanzar? Este bosque es interminable.",
						"vietnamese": "Chúng ta phải đi bao xa nữa? Khu rừng này vô tận.",
						"thai": "เราต้องไปอีกไกลแค่ไหน? ป่านี้ไม่มีที่สิ้นสุดเลย",
						"hindi": "हमें और कितना आगे जाना है? यह जंगल कभी खत्म नहीं होता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "여기까지 오다니… 길을 잃었나, 어리석은 자들.",
						"english": "To come all this way... Have you lost your way, you fools?",
						"japanese": "ここまで来るとは…道に迷ったか、愚か者たち。",
						"chinese": "竟然来到这里……迷路了吗，愚蠢的家伙们。",
						"french": "Arriver jusqu'ici... Vous êtes perdus, idiots ?",
						"spanish": "Haber llegado hasta aquí... ¿Os habéis perdido, necios?",
						"vietnamese": "Lại đến tận đây... Các ngươi bị lạc đường rồi sao, những kẻ ngốc.",
						"thai": "มาถึงที่นี่ได้ไง... หลงทางแล้วสินะ เจ้าพวกโง่เอ๊ย",
						"hindi": "यहाँ तक आ गए... क्या तुम मूर्ख, रास्ता भटक गए हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "길을 찾는 중입니다. 숲의 심장으로 가는 길을.",
						"english": "We are looking for a path. A path to the heart of the forest.",
						"japanese": "道を探しています。森の心臓部へ続く道を。",
						"chinese": "正在寻找道路。通往森林心脏的道路。",
						"french": "Nous cherchons un chemin. Un chemin vers le cœur de la forêt.",
						"spanish": "Estamos buscando un camino. Un camino al corazón del bosque.",
						"vietnamese": "Chúng tôi đang tìm đường. Con đường đến trái tim của khu rừng.",
						"thai": "กำลังหาทางอยู่ครับ/ค่ะ ทางที่จะไปยังใจกลางป่า",
						"hindi": "हम एक रास्ता तलाश रहे हैं। जंगल के हृदय तक जाने वाला रास्ता।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "심장이라… 모든 것의 시작이자 끝. 허나 그곳엔 금지된 진실이 숨어있지.",
						"english": "The heart, you say... The beginning and end of all things. But a forbidden truth lies hidden there.",
						"japanese": "心臓だと…すべての始まりであり終わり。だがそこには禁断の真実が隠されている。",
						"chinese": "心脏啊……万物之始亦是终。然而，那里隐藏着被禁止的真相。",
						"french": "Le cœur, dites-vous... Le début et la fin de toutes choses. Mais une vérité interdite y est cachée.",
						"spanish": "El corazón, dices... El principio y el fin de todas las cosas. Pero una verdad prohibida se esconde allí.",
						"vietnamese": "Trái tim ư... Khởi đầu và kết thúc của vạn vật. Nhưng một sự thật cấm kỵ đang ẩn giấu ở đó.",
						"thai": "ใจกลางงั้นหรือ... จุดเริ่มต้นและจุดจบของทุกสิ่ง แต่ความจริงต้องห้ามซ่อนอยู่ที่นั่น",
						"hindi": "हृदय, तुम कहते हो... सभी चीज़ों की शुरुआत और अंत। लेकिन वहाँ एक वर्जित सत्य छिपा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "금지된 진실이요?",
						"english": "Forbidden truth?",
						"japanese": "禁断の真実ですか？",
						"chinese": "禁忌的真相？",
						"french": "Une vérité interdite ?",
						"spanish": "¿Una verdad prohibida?",
						"vietnamese": "Sự thật cấm đoán?",
						"thai": "ความจริงต้องห้ามหรือ?",
						"hindi": "निषिद्ध सत्य?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은… 모르는 게 약일 때도 있는 법이야.",
						"english": "Anymore… sometimes ignorance is bliss.",
						"japanese": "これ以上は…知らない方が幸せなこともある。",
						"chinese": "有些事…不知情是福。",
						"french": "Parfois… l'ignorance est une bénédiction.",
						"spanish": "A veces… la ignorancia es una bendición.",
						"vietnamese": "Đôi khi… không biết lại là tốt.",
						"thai": "บางครั้ง… การไม่รู้ก็เป็นสุข",
						"hindi": "कभी-कभी… अज्ञानता ही सुख है।"
					},
					"speaker": "hazel",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "이곳의 약초는 특별해. 하지만 어떤 것은… 만져서는 안 돼.",
						"english": "The herbs here are special. But some… must not be touched.",
						"japanese": "ここの薬草は特別だ。だが、中には…触れてはならぬものもある。",
						"chinese": "这里的药草很特别。但有些…不可触碰。",
						"french": "Les herbes ici sont spéciales. Mais certaines… ne doivent pas être touchées.",
						"spanish": "Las hierbas aquí son especiales. Pero algunas… no deben tocarse.",
						"vietnamese": "Thảo dược ở đây đặc biệt. Nhưng có loại… không được chạm vào.",
						"thai": "สมุนไพรที่นี่พิเศษ แต่บางชนิด… ห้ามแตะต้อง",
						"hindi": "यहां की जड़ी-बूटियां खास हैं। लेकिन कुछ… छूने नहीं चाहिए।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "만져서는 안 된다는 건 무슨 뜻이죠?",
						"english": "What do you mean, 'must not be touched'?",
						"japanese": "触れてはならないとは、どういう意味ですか？",
						"chinese": "不可触碰是什么意思？",
						"french": "Que voulez-vous dire par 'ne doivent pas être touchées' ?",
						"spanish": "¿Qué significa 'no deben tocarse'?",
						"vietnamese": "Không được chạm vào là sao ạ?",
						"thai": "ห้ามแตะต้อง หมายความว่าอย่างไร?",
						"hindi": "छूने नहीं चाहिए, इसका क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 저주를 짊어진 것들. 아름답지만, 파멸을 불러오지.",
						"english": "Those burdened by the forest's curse. Beautiful, yet they bring ruin.",
						"japanese": "森の呪いを背負ったものたち。美しくも、破滅を招く。",
						"chinese": "背负森林诅咒之物。美丽却招致毁灭。",
						"french": "Celles qui portent la malédiction de la forêt. Belles, mais elles apportent la ruine.",
						"spanish": "Las que cargan con la maldición del bosque. Hermosas, pero traen la ruina.",
						"vietnamese": "Những thứ mang lời nguyền của rừng. Đẹp đẽ nhưng mang đến tai ương.",
						"thai": "สิ่งต้องสาปแห่งป่า งดงาม แต่ก็นำมาซึ่งความพินาศ",
						"hindi": "वन के श्राप से ग्रस्त चीजें। सुंदर, पर विनाश लाती हैं।"
					},
					"speaker": "hazel",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "파멸이라니… 어떤 것들인데요?",
						"english": "Ruin? What kind of things?",
						"japanese": "破滅…どのようなものなのですか？",
						"chinese": "毁灭…是哪些东西？",
						"french": "La ruine… Quelles sont ces choses ?",
						"spanish": "¿La ruina? ¿Qué tipo de cosas?",
						"vietnamese": "Tai ương… là những thứ gì ạ?",
						"thai": "พินาศหรือ… สิ่งใดเล่า?",
						"hindi": "विनाश? कैसी चीजें?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "그것은… 묻지 마라. 너희에겐 너무 위험해.",
						"english": "Do not ask. It is too dangerous for you.",
						"japanese": "それは…聞くな。お前たちには危険すぎる。",
						"chinese": "那是什么…别问了。对你们来说太危险了。",
						"french": "Cela… ne demande pas. C'est trop dangereux pour vous.",
						"spanish": "Eso… no preguntes. Es demasiado peligroso para vosotros.",
						"vietnamese": "Đó là… đừng hỏi. Nó quá nguy hiểm cho các ngươi.",
						"thai": "สิ่งนั้น… อย่าถามเลย มันอันตรายเกินไปสำหรับเจ้า",
						"hindi": "वह… मत पूछो। तुम्हारे लिए बहुत खतरनाक है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "노파의 바구니 안에서, 잠시 기이한 빛이 스치는 듯했다.",
						"english": "Within the old woman's basket, a strange light seemed to flicker momentarily.",
						"japanese": "老婆の籠の中で、一瞬、奇妙な光がよぎったようだった。",
						"chinese": "老婆婆的篮子里，仿佛有异样的光芒一闪而过。",
						"french": "Dans le panier de la vieille femme, une étrange lumière sembla vaciller un instant.",
						"spanish": "Dentro de la cesta de la anciana, una extraña luz pareció parpadear por un instante.",
						"vietnamese": "Trong giỏ của bà lão, một ánh sáng kỳ lạ thoáng qua.",
						"thai": "ในตะกร้าของหญิงชรา แสงประหลาดส่องวาบขึ้นชั่วขณะ",
						"hindi": "बुढ़िया की टोकरी में, एक अजीब सी रोशनी क्षण भर के लिए चमकती दिखी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "hazel",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저주받은 것들… 대체 무엇이길래요?",
						"english": "The cursed ones… What could they be?",
						"japanese": "呪われたものたち…一体、何なのですか？",
						"chinese": "那些被诅咒的东西…到底是什么？",
						"french": "Les choses maudites… Que peuvent-elles bien être ?",
						"spanish": "Las cosas malditas… ¿Qué pueden ser?",
						"vietnamese": "Những thứ bị nguyền rủa… rốt cuộc là gì vậy?",
						"thai": "สิ่งต้องสาป… คืออะไรกันแน่?",
						"hindi": "शापित चीजें… आखिर क्या हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "숲의 심장이 가까워질수록, 금지된 것들이 너희를 유혹할 거다.",
						"english": "As you near the forest's heart, the forbidden will tempt you.",
						"japanese": "森の心臓に近づくほど、禁断のものどもがお前たちを誘惑するだろう。",
						"chinese": "越靠近森林之心，禁忌之物就越会诱惑你们。",
						"french": "Plus vous approcherez du cœur de la forêt, plus les choses interdites vous tenteront.",
						"spanish": "Cuanto más os acerquéis al corazón del bosque, más os tentarán las cosas prohibidas.",
						"vietnamese": "Càng đến gần trái tim khu rừng, những thứ cấm đoán sẽ càng cám dỗ các ngươi.",
						"thai": "ยิ่งเจ้าเข้าใกล้ใจกลางป่ามากเท่าไหร่ สิ่งต้องห้ามจะยิ่งล่อลวงเจ้า",
						"hindi": "जैसे-जैसे तुम जंगल के हृदय के करीब आओगे, निषिद्ध चीजें तुम्हें लुभाएंगी।"
					}
				},
				{
					"content": {
						"korean": "보이는 것이 전부가 아니야. 달콤한 속삭임에 현혹되지 마라.",
						"english": "What you see isn't everything. Don't be swayed by sweet whispers.",
						"japanese": "見た目が全てではない。甘い囁きに惑わされるな。",
						"chinese": "你所看到的并非全部。不要被甜言蜜语所迷惑。",
						"french": "Ce que tu vois n'est pas tout. Ne te laisse pas séduire par de doux murmures.",
						"spanish": "Lo que ves no es todo. No te dejes engañar por dulces susurros.",
						"vietnamese": "Những gì bạn thấy không phải là tất cả. Đừng để bị mê hoặc bởi những lời thì thầm ngọt ngào.",
						"thai": "สิ่งที่คุณเห็นไม่ใช่ทั้งหมด อย่าหลงเชื่อคำกระซิบหวานหู",
						"hindi": "जो तुम देखते हो वह सब कुछ नहीं है। मीठी फुसफुसाहटों से गुमराह मत हो।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "경고하시는 겁니까?",
						"english": "Are you warning us?",
						"japanese": "警告ですか？",
						"chinese": "您是在警告我们吗？",
						"french": "Nous avertissez-vous ?",
						"spanish": "¿Nos está advirtiendo?",
						"vietnamese": "Ông đang cảnh báo chúng tôi sao?",
						"thai": "ท่านกำลังเตือนพวกเราหรือ?",
						"hindi": "क्या आप हमें चेतावनी दे रहे हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲은… 너희가 상상하는 것보다 더 많은 비밀을 품고 있어. 모든 진실이 구원은 아니지.",
						"english": "This forest... holds more secrets than you can imagine. Not all truths lead to salvation.",
						"japanese": "この森は… お前たちが想像するよりも多くの秘密を抱えている。全ての真実が救いとは限らない。",
						"chinese": "这片森林… 隐藏着比你们想象中更多的秘密。并非所有真相都能带来救赎。",
						"french": "Cette forêt… renferme plus de secrets que vous ne pouvez l'imaginer. Toutes les vérités ne sont pas un salut.",
						"spanish": "Este bosque… guarda más secretos de los que podéis imaginar. No todas las verdades son una salvación.",
						"vietnamese": "Rừng này… chứa đựng nhiều bí mật hơn những gì các ngươi có thể tưởng tượng. Không phải mọi sự thật đều là sự cứu rỗi.",
						"thai": "ป่าแห่งนี้… ซ่อนเร้นความลับมากมายเกินกว่าที่พวกเจ้าจะจินตนาการได้ ความจริงทั้งหมดมิใช่หนทางแห่งการไถ่บาปเสมอไป",
						"hindi": "यह जंगल… तुम्हारी कल्पना से भी अधिक रहस्य समेटे हुए है। हर सच्चाई मुक्ति नहीं होती।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우린 구원을 찾아야만 해요.",
						"english": "We must find salvation.",
						"japanese": "私たちは救いを見つけなければなりません。",
						"chinese": "我们必须找到救赎。",
						"french": "Nous devons trouver le salut.",
						"spanish": "Debemos encontrar la salvación.",
						"vietnamese": "Chúng tôi phải tìm thấy sự cứu rỗi.",
						"thai": "พวกเราต้องค้นหาการไถ่บาป",
						"hindi": "हमें मुक्ति ढूंढनी ही होगी।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "구원… 이 숲에서 구원을 말하다니. 어리석은 자여.",
						"english": "Salvation... to speak of salvation in this forest. Foolish one.",
						"japanese": "救い… この森で救いを語るとは。愚かな者め。",
						"chinese": "救赎… 竟敢在这片森林里谈论救赎。真是个傻瓜。",
						"french": "Le salut… parler de salut dans cette forêt. Imbécile.",
						"spanish": "¿Salvación…? Hablar de salvación en este bosque. Necio.",
						"vietnamese": "Cứu rỗi… dám nói về sự cứu rỗi trong khu rừng này. Kẻ ngu ngốc.",
						"thai": "การไถ่บาป… มากล่าวถึงการไถ่บาปในป่าแห่งนี้ ช่างโง่เขลานัก",
						"hindi": "मुक्ति… इस जंगल में मुक्ति की बात करना। मूर्ख व्यक्ति।"
					},
					"speaker": "hazel",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "돌아가라. 아직 늦지 않았다.",
						"english": "Go back. It's not too late yet.",
						"japanese": "帰れ。まだ遅くはない。",
						"chinese": "回去吧。还不算太晚。",
						"french": "Retourne. Il n'est pas trop tard.",
						"spanish": "Vuelve. Aún no es tarde.",
						"vietnamese": "Quay trở lại đi. Vẫn chưa quá muộn.",
						"thai": "กลับไปซะ ยังไม่สายเกินไป",
						"hindi": "वापस जाओ। अभी देर नहीं हुई है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수는 없어요. 우리에게 남은 시간이 얼마 없어요.",
						"english": "We can't go back. We don't have much time left.",
						"japanese": "戻ることはできません。私たちに残された時間は少ないのです。",
						"chinese": "我们不能回去。我们所剩的时间不多了。",
						"french": "Nous ne pouvons pas revenir en arrière. Il ne nous reste que peu de temps.",
						"spanish": "No podemos volver. Nos queda poco tiempo.",
						"vietnamese": "Chúng tôi không thể quay lại. Chúng tôi không còn nhiều thời gian.",
						"thai": "พวกเรากลับไปไม่ได้แล้ว พวกเราเหลือเวลาไม่มากแล้ว",
						"hindi": "हम वापस नहीं जा सकते। हमारे पास ज्यादा समय नहीं बचा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그렇다면… 조심해라. 숲의 가장 깊은 곳엔, 모든 것을 뒤틀어버리는 힘이 잠들어 있으니.",
						"english": "If so… be careful. In the deepest part of the forest, a power that twists everything lies dormant.",
						"japanese": "ならば… 気をつけろ。森の最も深い場所には、全てを歪める力が眠っている。",
						"chinese": "既然如此… 小心点。在森林的最深处，沉睡着一股扭曲一切的力量。",
						"french": "Alors… sois prudent. Au plus profond de la forêt, une force qui tord tout sommeille.",
						"spanish": "Entonces… ten cuidado. En lo más profundo del bosque, un poder que lo distorsiona todo yace dormido.",
						"vietnamese": "Nếu vậy… hãy cẩn thận. Ở nơi sâu thẳm nhất của khu rừng, một sức mạnh có thể bóp méo mọi thứ đang ngủ yên.",
						"thai": "ถ้าเช่นนั้น… จงระวังให้ดี ณ ส่วนลึกที่สุดของป่า พลังที่บิดเบือนทุกสิ่งกำลังหลับใหลอยู่",
						"hindi": "तो… सावधान रहो। जंगल के सबसे गहरे हिस्से में, सब कुछ विकृत करने वाली एक शक्ति सो रही है।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뒤틀어버리는 힘이라니요?",
						"english": "A power that twists everything?",
						"japanese": "全てを歪める力だと？",
						"chinese": "扭曲一切的力量？",
						"french": "Une force qui tord tout ?",
						"spanish": "¿Un poder que lo distorsiona todo?",
						"vietnamese": "Sức mạnh bóp méo mọi thứ là gì?",
						"thai": "พลังที่บิดเบือนทุกสิ่งอย่างนั้นหรือ?",
						"hindi": "सब कुछ विकृत करने वाली शक्ति?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "탐욕과 절망으로 만들어진 존재. 그것이 너희를 기다리고 있을 거다.",
						"english": "A being forged from greed and despair. It will be waiting for you.",
						"japanese": "貪欲と絶望から生まれた存在。それがお前たちを待っているだろう。",
						"chinese": "一个由贪婪和绝望铸就的存在。它将在那里等着你们。",
						"french": "Une entité forgée par l'avidité et le désespoir. Elle vous attendra.",
						"spanish": "Un ser forjado por la codicia y la desesperación. Os estará esperando.",
						"vietnamese": "Một thực thể được tạo ra từ lòng tham và sự tuyệt vọng. Nó sẽ đợi các ngươi ở đó.",
						"thai": "สิ่งมีชีวิตที่ถือกำเนิดจากความโลภและความสิ้นหวัง มันจะรอพวกเจ้าอยู่",
						"hindi": "लालच और निराशा से बनी एक सत्ता। वह तुम्हारा इंतजार कर रही होगी।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 맞서 싸울 겁니다.",
						"english": "We will fight back.",
						"japanese": "我々は戦い抜く。",
						"chinese": "我们将奋起反抗。",
						"french": "Nous riposterons.",
						"spanish": "Lucharemos.",
						"vietnamese": "Chúng ta sẽ chiến đấu.",
						"thai": "เราจะสู้กลับ",
						"hindi": "हम लड़ेंगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국… 너희도 그 파멸의 일부가 될지도 모르지.",
						"english": "Ultimately... you too might become part of that ruin.",
						"japanese": "結局…お前たちもその破滅の一部となるやもしれぬ。",
						"chinese": "最终…你们也可能成为那毁灭的一部分。",
						"french": "Finalement... vous aussi pourriez faire partie de cette ruine.",
						"spanish": "Al final... vosotros también podríais ser parte de esa ruina.",
						"vietnamese": "Cuối cùng... các ngươi cũng có thể trở thành một phần của sự hủy diệt đó.",
						"thai": "ท้ายที่สุด... เจ้าเองก็อาจเป็นส่วนหนึ่งของความพินาศนั้น",
						"hindi": "अंततः... तुम भी उस विनाश का हिस्सा बन सकते हो।"
					},
					"speaker": "hazel",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 결국 너희도 나의 일부가 될 운명이었다.",
						"english": "Fools. In the end, you too were destined to become a part of me.",
						"japanese": "愚か者たちめ。結局お前たちも、私の H 一部となる運命だったのだ。",
						"chinese": "愚蠢的家伙。最终，你们也注定会成为我的一部分。",
						"french": "Imbéciles. Au final, vous aussi étiez destinés à devenir une partie de moi.",
						"spanish": "Estúpidos. Al final, vosotros también estabais destinados a ser parte de mí.",
						"vietnamese": "Những kẻ ngu ngốc. Cuối cùng thì các ngươi cũng định trở thành một phần của ta thôi.",
						"thai": "พวกโง่เขลา สุดท้ายแล้วพวกเจ้าก็มีชะตากรรมที่จะเป็นส่วนหนึ่งของข้า",
						"hindi": "मूर्खों। अंत में, तुम भी मेरा हिस्सा बनने वाले थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas… encore fini… !",
						"spanish": "¡Aún no... ha terminado...!",
						"vietnamese": "Chưa... kết thúc đâu...!",
						"thai": "ยัง…ไม่จบแค่นี้…!",
						"hindi": "अभी… खत्म नहीं हुआ है…!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 저주는 더욱 깊어졌다. 그러나 그들의 의지는 꺾이지 않았다.",
						"english": "The forest's curse deepened. Yet, their will remained unbroken.",
						"japanese": "森の呪いはさらに深まった。しかし、彼らの意志は折れなかった。",
						"chinese": "森林的诅咒变得更深了。然而，他们的意志并未被击垮。",
						"french": "La malédiction de la forêt s'approfondit. Pourtant, leur volonté resta intacte.",
						"spanish": "La maldición del bosque se hizo más profunda. Sin embargo, su voluntad no se quebró.",
						"vietnamese": "Lời nguyền của khu rừng càng sâu sắc hơn. Tuy nhiên, ý chí của họ không hề bị bẻ gãy.",
						"thai": "คำสาปของป่าลึกลงไปอีก ทว่าความตั้งใจของพวกเขาก็ยังไม่พ่ายแพ้",
						"hindi": "जंगल का अभिशाप और गहरा हो गया। फिर भी, उनकी इच्छाशक्ति नहीं टूटी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크큭… 네가 이겼다고 생각하나? 아직 멀었다….",
						"english": "Hehehe... You think you've won? Not by a long shot...",
						"japanese": "ククク…勝ったとでも？まだまだだな…",
						"chinese": "呵呵呵…你以为你赢了吗？还早得很呢…",
						"french": "Héhéhé… Tu penses avoir gagné ? Loin de là…",
						"spanish": "Jejeje... ¿Crees que has ganado? ¡Ni de cerca...!",
						"vietnamese": "Khà khà... Ngươi nghĩ mình đã thắng sao? Còn lâu lắm...",
						"thai": "คิกคิก… คิดว่าเจ้าชนะแล้วรึ? ยังห่างไกลนัก…",
						"hindi": "हँ हँ हँ… तुम्हें लगता है तुम जीत गए? अभी तो बहुत दूर है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 파멸은 이제 시작일 뿐….",
						"english": "True destruction has only just begun...",
						"japanese": "真の破滅は、今始まったばかり…",
						"chinese": "真正的毁灭才刚刚开始…",
						"french": "La véritable destruction ne fait que commencer…",
						"spanish": "La verdadera aniquilación apenas comienza...",
						"vietnamese": "Sự hủy diệt thực sự chỉ mới bắt đầu...",
						"thai": "หายนะที่แท้จริงเพิ่งจะเริ่มต้นขึ้นเท่านั้น…",
						"hindi": "वास्तविक विनाश तो अभी शुरू हुआ है…"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야? 저주는 풀린 거야?",
						"english": "What do you mean? Is the curse broken?",
						"japanese": "どういうこと？呪いは解けたの？",
						"chinese": "你说什么？诅咒解除了吗？",
						"french": "Que veux-tu dire ? La malédiction est-elle levée ?",
						"spanish": "¿Qué dices? ¿Se ha roto la maldición?",
						"vietnamese": "Ngươi nói gì? Lời nguyền đã được hóa giải sao?",
						"thai": "หมายความว่าไง? คำสาปคลายแล้วเหรอ?",
						"hindi": "क्या मतलब? क्या अभिशाप टूट गया है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 저주는 여전히 남아있었다. 하지만… 무언가 달라졌다.",
						"english": "The forest's curse still remained. But... something had changed.",
						"japanese": "森の呪いはまだ残っていた。だが…何かが変わった。",
						"chinese": "森林的诅咒依然存在。但是…有什么东西改变了。",
						"french": "La malédiction de la forêt persistait. Mais… quelque chose avait changé.",
						"spanish": "La maldición del bosque aún persistía. Pero... algo había cambiado.",
						"vietnamese": "Lời nguyền của khu rừng vẫn còn. Nhưng... có điều gì đó đã thay đổi.",
						"thai": "คำสาปของป่ายังคงอยู่ ทว่า… มีบางอย่างเปลี่ยนไป",
						"hindi": "जंगल का अभिशाप अभी भी बना हुआ था। लेकिन… कुछ बदल गया था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "…ยังไม่จบแค่นี้",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 속삭임은 멈추지 않았다. 다음 파멸의 서막이 서서히 열리고 있었다.",
						"english": "The forest's whispers did not cease. The prelude to the next destruction was slowly unfolding.",
						"japanese": "森の囁きは止まらなかった。次の破滅の序幕が、ゆっくりと開かれつつあった。",
						"chinese": "森林的低语没有停止。下一场毁灭的序幕正在缓缓拉开。",
						"french": "Les murmures de la forêt ne cessaient pas. Le prélude à la prochaine destruction se dévoilait lentement.",
						"spanish": "Los susurros del bosque no cesaron. El preludio de la próxima aniquilación se abría lentamente.",
						"vietnamese": "Tiếng thì thầm của khu rừng không dừng lại. Màn mở đầu cho sự hủy diệt tiếp theo đang từ từ hé lộ.",
						"thai": "เสียงกระซิบของป่ายังไม่หยุดลง ปฐมบทแห่งหายนะครั้งต่อไปกำลังค่อย ๆ เปิดฉากขึ้น",
						"hindi": "जंगल की फुसफुसाहट बंद नहीं हुई। अगले विनाश की प्रस्तावना धीरे-धीरे खुल रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 일행을 맞았다.",
						"english": "In the heart of the forest, a colossal shadow greeted the party.",
						"japanese": "森の心臓部。巨大な影が一行を迎えた。",
						"chinese": "在森林深处，一个巨大的影子迎接了队伍。",
						"french": "Au cœur de la forêt, une ombre colossale accueillit le groupe.",
						"spanish": "En el corazón del bosque, una sombra colosal recibió al grupo.",
						"vietnamese": "Trong lòng rừng, một cái bóng khổng lồ chào đón đoàn người.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาทักทายคณะเดินทาง",
						"hindi": "जंगल के हृदय में, एक विशाल छाया ने दल का स्वागत किया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오랜만이다, 어리석은 인간들이여.",
						"english": "Long time no see, foolish humans.",
						"japanese": "久しぶりだな、愚かな人間たちよ。",
						"chinese": "好久不见，愚蠢的人类。",
						"french": "Il y a longtemps que nous ne nous sommes pas vus, stupides humains.",
						"spanish": "Cuánto tiempo sin veros, estúpidos humanos.",
						"vietnamese": "Lâu rồi không gặp, lũ người ngu ngốc.",
						"thai": "ไม่เจอกันนานนะ มนุษย์โง่เขลา",
						"hindi": "बहुत समय हो गया, मूर्ख मनुष्यों।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 저주를 만든 자냐?",
						"english": "Are you... the one who created the curse?",
						"japanese": "貴様が…呪いを生み出した者か？",
						"chinese": "你就是…制造诅咒的人？",
						"french": "Es-tu... celui qui a créé la malédiction ?",
						"spanish": "Eres... ¿quien creó la maldición?",
						"vietnamese": "Ngươi... là kẻ đã tạo ra lời nguyền?",
						"thai": "เจ้าคือ... ผู้สร้างคำสาปหรือ?",
						"hindi": "क्या तुम... वही हो जिसने अभिशाप बनाया?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "저주? 나는 질서를 세운 자다. 너희 같은 침입자를 막을 뿐.",
						"english": "Curse? I am the one who established order. I merely stop intruders like you.",
						"japanese": "呪いだと？私は秩序を築いた者だ。貴様らのような侵入者を阻むだけ。",
						"chinese": "诅咒？我乃建立秩序之人。我只是阻止像你们这样的入侵者。",
						"french": "Malédiction ? Je suis celui qui a établi l'ordre. Je ne fais que repousser les intrus comme vous.",
						"spanish": "¿Maldición? Soy quien estableció el orden. Solo detengo a intrusos como vosotros.",
						"vietnamese": "Lời nguyền? Ta là kẻ đã thiết lập trật tự. Ta chỉ ngăn chặn những kẻ xâm nhập như các ngươi.",
						"thai": "คำสาปหรือ? ข้าคือผู้สร้างระเบียบ ข้าแค่หยุดผู้บุกรุกเช่นพวกเจ้า",
						"hindi": "अभिशाप? मैं वह हूँ जिसने व्यवस्था स्थापित की। मैं बस तुम जैसे घुसपैठियों को रोकता हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "멈춰! 그 자에게 맞서지 마!",
						"english": "Stop! Don't confront him!",
						"japanese": "やめろ！彼に立ち向かうな！",
						"chinese": "住手！别对抗他！",
						"french": "Arrête ! Ne l'affronte pas !",
						"spanish": "¡Detente! ¡No te enfrentes a él!",
						"vietnamese": "Dừng lại! Đừng đối đầu với hắn!",
						"thai": "หยุด! อย่าเผชิญหน้ากับเขา!",
						"hindi": "रुको! उससे मत भिड़ो!"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헤이즐, 감히….",
						"english": "Hazel, how dare you...",
						"japanese": "ヘイゼル、貴様、まさか…。",
						"chinese": "海泽尔，你竟敢……",
						"french": "Hazel, comment oses-tu...",
						"spanish": "Hazel, ¿cómo te atreves...?",
						"vietnamese": "Hazel, ngươi dám...",
						"thai": "เฮเซล เจ้ากล้าดีอย่างไร...",
						"hindi": "हेज़ल, तुम्हारी हिम्मत कैसे हुई..."
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이제 아무도 너희를 도울 수 없다. 이곳에서 너희는 나의 일부가 될 것이다.",
						"english": "Now, no one can help you. Here, you will become a part of me.",
						"japanese": "もはや誰も貴様らを助けることはできぬ。ここで貴様らは私の一部となるだろう。",
						"chinese": "现在，没有人能帮助你们。在这里，你们将成为我的一部分。",
						"french": "Maintenant, personne ne peut vous aider. Ici, vous deviendrez une partie de moi.",
						"spanish": "Ahora, nadie puede ayudaros. Aquí, os convertiréis en parte de mí.",
						"vietnamese": "Bây giờ, không ai có thể giúp các ngươi. Tại đây, các ngươi sẽ trở thành một phần của ta.",
						"thai": "ตอนนี้ ไม่มีใครช่วยพวกเจ้าได้ ที่นี่ พวกเจ้าจะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "अब, कोई तुम्हारी मदद नहीं कर सकता। यहाँ, तुम मेरे ही अंश बन जाओगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절대 포기 안 해!",
						"english": "I'll never give up!",
						"japanese": "絶対諦めない！",
						"chinese": "绝不放弃！",
						"french": "Je n'abandonnerai jamais !",
						"spanish": "¡Nunca me rendiré!",
						"vietnamese": "Tuyệt đối không từ bỏ!",
						"thai": "ฉันไม่มีวันยอมแพ้!",
						"hindi": "मैं कभी हार नहीं मानूंगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둡고 습한 숲. 모든 것이 뒤틀린 금단의 땅.",
			"시간은 무정하게 흐르고, 탈출구는 보이지 않는다.",
			"희미하게 빛나는 광물. 노파는 무언가를 숨기고 있다.",
			"파멸의 예감 속, 발걸음은 숲의 심장으로 향한다.",
			"7일의 저주. 그 끝에 기다리는 것은… 무엇인가."
		],
		"english": [
			"A dark, damp forest. A forbidden land where everything is twisted.",
			"Time flows mercilessly, and no escape is in sight.",
			"Faintly glowing minerals. The old woman hides something.",
			"Amidst a premonition of doom, footsteps head towards the heart of the forest.",
			"The 7-day curse. What awaits at its end...?"
		],
		"japanese": [
			"暗く湿った森。すべてが歪んだ禁断の地。",
			"時は無情に流れ、逃げ道は見えない。",
			"かすかに光る鉱物。老婆は何かを隠している。",
			"破滅の予感の中、足取りは森の心臓部へ向かう。",
			"7日間の呪い。その先に待つものは…何か。"
		],
		"chinese": [
			"黑暗潮湿的森林。万物扭曲的禁忌之地。",
			"时间无情地流逝，看不到出口。",
			"微弱发光的矿物。老妇人隐藏着什么。",
			"在毁灭的预感中，脚步走向森林的心脏。",
			"七日诅咒。尽头等待的是……什么。"
		],
		"french": [
			"Une forêt sombre et humide. Une terre interdite où tout est déformé.",
			"Le temps s'écoule impitoyablement, et aucune échappatoire n'est en vue.",
			"Des minéraux faiblement lumineux. La vieille femme cache quelque chose.",
			"Au milieu d'une prémonition de malheur, les pas se dirigent vers le cœur de la forêt.",
			"La malédiction de 7 jours. Qu'est-ce qui attend à sa fin... ?"
		],
		"spanish": [
			"Un bosque oscuro y húmedo. Una tierra prohibida donde todo está retorcido.",
			"El tiempo fluye sin piedad, y no se ve ninguna salida.",
			"Minerales que brillan débilmente. La anciana esconde algo.",
			"En medio de una premonición de fatalidad, los pasos se dirigen al corazón del bosque.",
			"La maldición de los 7 días. ¿Qué aguarda al final...?"
		],
		"vietnamese": [
			"Một khu rừng tối tăm, ẩm ướt. Một vùng đất cấm nơi mọi thứ đều méo mó.",
			"Thời gian trôi đi vô tình, và không lối thoát nào hiện ra.",
			"Những khoáng vật phát sáng mờ ảo. Lão bà đang giấu giếm điều gì đó.",
			"Giữa điềm báo về sự diệt vong, những bước chân hướng về trái tim khu rừng.",
			"Lời nguyền 7 ngày. Điều gì đang chờ đợi ở cuối con đường...?"
		],
		"thai": [
			"ป่ามืดชื้นแฉะ ดินแดนต้องห้ามที่ทุกสิ่งบิดเบี้ยว",
			"เวลายังคงเดินไปอย่างไม่ปรานี และไม่มีทางออกให้เห็น",
			"แร่ธาตุที่เรืองแสงจางๆ หญิงชรากำลังซ่อนบางสิ่ง",
			"ท่ามกลางลางสังหรณ์แห่งความพินาศ ก้าวเท้ามุ่งสู่ใจกลางป่า",
			"คำสาป 7 วัน สิ่งที่รอคอยอยู่ ณ จุดสิ้นสุดคือ…อะไรกัน"
		],
		"hindi": [
			"एक अँधेरा, नम जंगल। एक वर्जित भूमि जहाँ सब कुछ विकृत है।",
			"समय निर्दयता से बहता है, और कोई निकास दिखाई नहीं देता।",
			"हल्की चमकती धातुएँ। बुढ़िया कुछ छिपा रही है।",
			"विनाश की आशंका के बीच, कदम जंगल के हृदय की ओर बढ़ते हैं।",
			"7 दिन का अभिशाप। उसके अंत में क्या इंतज़ार है...?"
		]
	}
} as const;
