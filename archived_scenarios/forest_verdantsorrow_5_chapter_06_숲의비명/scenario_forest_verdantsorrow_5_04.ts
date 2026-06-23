export const scenario_forest_verdantsorrow_5_04 = {
	"scenario_id": "forest_verdantsorrow_5_04",
	"order": 4,
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
			"숲은 침묵했다. 아니, 침묵당했다.",
			"나뭇가지마다 어린 영혼들의 슬픈 노래가 매달려 있었다.",
			"우리는 그 노래를 듣지 못했다. 혹은 외면했다.",
			"이제, 그 비극의 목소리가 들려온다. 너무 늦기 전에."
		],
		"english": [
			"The forest was silent. No, it was silenced.",
			"On every branch hung the sad songs of young souls.",
			"We did not hear those songs. Or perhaps, we turned away.",
			"Now, the voices of that tragedy are heard. Before it's too late."
		],
		"japanese": [
			"森は沈黙していた。いや、沈黙させられていた。",
			"枝々には幼い魂たちの悲しい歌がぶら下がっていた。",
			"我々はその歌を聞かなかった。あるいは、目を背けた。",
			"今、その悲劇の声が聞こえる。手遅れになる前に。"
		],
		"chinese": [
			"森林寂静无声。不，是被迫寂静。",
			"每一根树枝上都悬挂着幼小灵魂的悲歌。",
			"我们没有听到那些歌。或者，我们选择了视而不见。",
			"如今，那悲剧的声音被听到了。在为时过晚之前。"
		],
		"french": [
			"La forêt était silencieuse. Non, elle avait été réduite au silence.",
			"À chaque branche pendaient les chants tristes d'âmes jeunes.",
			"Nous n'avons pas entendu ces chants. Ou peut-être, nous avons détourné les yeux.",
			"Maintenant, les voix de cette tragédie se font entendre. Avant qu'il ne soit trop tard."
		],
		"spanish": [
			"El bosque estaba en silencio. No, fue silenciado.",
			"De cada rama colgaban las tristes canciones de almas jóvenes.",
			"No escuchamos esas canciones. O tal vez, les dimos la espalda.",
			"Ahora, las voces de esa tragedia se escuchan. Antes de que sea demasiado tarde."
		],
		"vietnamese": [
			"Rừng im lặng. Không, nó đã bị buộc phải im lặng.",
			"Trên mỗi cành cây, những khúc ca buồn của linh hồn non trẻ treo lơ lửng.",
			"Chúng ta đã không nghe thấy những bài hát đó. Hoặc là, chúng ta đã quay lưng đi.",
			"Giờ đây, tiếng nói của bi kịch ấy đã vang lên. Trước khi quá muộn."
		],
		"thai": [
			"ป่าเงียบสงบ ไม่สิ มันถูกทำให้เงียบงัน",
			"บทเพลงเศร้าของดวงวิญญาณเยาว์วัยห้อยอยู่ทุกกิ่งก้าน",
			"เราไม่ได้ยินเพลงเหล่านั้น หรือเราเมินเฉย",
			"บัดนี้ เสียงแห่งโศกนาฏกรรมนั้นได้ยินแล้ว ก่อนที่ทุกอย่างจะสายเกินไป"
		],
		"hindi": [
			"वन शांत था। नहीं, उसे शांत कर दिया गया था।",
			"हर डाल पर युवा आत्माओं के दुखद गीत लटके हुए थे।",
			"हमने वे गीत नहीं सुने। या शायद, हमने अनदेखा कर दिया।",
			"अब उस त्रासदी की आवाजें सुनाई दे रही हैं। बहुत देर होने से पहले।"
		]
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
						"korean": "중앙 나무에 다다랐다. 비정상적인 고요함이 감돌았다.",
						"english": "We reached the central tree. An unnatural stillness hung in the air.",
						"japanese": "中央の木にたどり着いた。異常なほどの静けさが漂っていた。",
						"chinese": "我们到达了中央树。空气中弥漫着一种不自然的寂静。",
						"french": "Nous avons atteint l'arbre central. Un calme anormal planait.",
						"spanish": "Llegamos al árbol central. Una quietud antinatural flotaba en el aire.",
						"vietnamese": "Chúng tôi đã đến được cây trung tâm. Một sự tĩnh lặng bất thường bao trùm.",
						"thai": "เรามาถึงต้นไม้กลางป่า ความเงียบงันผิดธรรมชาติปกคลุมไปทั่ว",
						"hindi": "हम केंद्रीय वृक्ष तक पहुँचे। एक अप्राकृतिक शांति छाई हुई थी।"
					}
				},
				{
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "...여긴... 이상한 기운이 느껴져.",
						"english": "...There's... a strange energy here.",
						"japanese": "...ここ...奇妙な気配がするわ。",
						"chinese": "......这里......有种奇怪的气息。",
						"french": "...Ici... une étrange aura se fait sentir.",
						"spanish": "...Aquí... se siente una energía extraña.",
						"vietnamese": "Ở đây... có một luồng khí lạ.",
						"thai": "...ที่นี่... สัมผัสได้ถึงพลังงานแปลกๆ",
						"hindi": "...यहाँ... एक अजीब सी ऊर्जा महसूस हो रही है।"
					}
				},
				{
					"content": {
						"korean": "뭐가 이상해?",
						"english": "What's strange?",
						"japanese": "何が奇妙なの？",
						"chinese": "有什么奇怪的？",
						"french": "Qu'est-ce qui est étrange ?",
						"spanish": "¿Qué es lo extraño?",
						"vietnamese": "Có gì lạ à?",
						"thai": "อะไรแปลกไป?",
						"hindi": "क्या अजीब है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "아주 작은 슬픔들... 흩어져 있어.",
						"english": "Very small sorrows... scattered about.",
						"japanese": "とても小さな悲しみが...散らばっているわ。",
						"chinese": "细微的悲伤...散落各处。",
						"french": "De très petites tristesses... dispersées.",
						"spanish": "Pequeñas tristezas... dispersas.",
						"vietnamese": "Những nỗi buồn rất nhỏ... đang tản mát.",
						"thai": "ความเศร้าเล็กๆ... กระจัดกระจายอยู่",
						"hindi": "बहुत छोटे दुख... बिखरे हुए हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "시더가 발치에 놓인, 석화된 작은 신발 조각을 가리켰다.",
						"english": "Cinder pointed to a petrified shard of a small shoe at her feet.",
						"japanese": "シダーは足元に置かれた、石化した小さな靴の破片を指差した。",
						"chinese": "西达指向脚边一块石化的小鞋碎片。",
						"french": "Cinder désigna un fragment pétrifié d'une petite chaussure à ses pieds.",
						"spanish": "Cinder señaló un trozo petrificado de un pequeño zapato a sus pies.",
						"vietnamese": "Cinder chỉ vào một mảnh giày nhỏ bị hóa đá nằm dưới chân.",
						"thai": "ซินเดอร์ชี้ไปที่เศษรองเท้าเล็กๆ ที่กลายเป็นหินวางอยู่ที่เท้าของเธอ",
						"hindi": "सिंडर ने अपने पैरों के पास पड़े एक छोटे जूते के पत्थर के टुकड़े की ओर इशारा किया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...점점 선명해져.",
						"english": "...It's getting clearer.",
						"japanese": "...だんだん鮮明になってくる。",
						"chinese": "......越来越清晰了。",
						"french": "...Ça devient de plus en plus clair.",
						"spanish": "...Se está volviendo más claro.",
						"vietnamese": "Nó ngày càng rõ ràng hơn.",
						"thai": "...มันชัดเจนขึ้นเรื่อยๆ",
						"hindi": "...यह और स्पष्ट होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐가 선명하다는 거야?",
						"english": "What's clear?",
						"japanese": "何が鮮明なの？",
						"chinese": "什么清晰？",
						"french": "Qu'est-ce qui est clair ?",
						"spanish": "¿Qué está claro?",
						"vietnamese": "Cái gì rõ ràng?",
						"thai": "อะไรที่ชัดเจน?",
						"hindi": "क्या स्पष्ट है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미한 바람 소리. 그러나 시더의 귀에는 흐느낌처럼 들렸다.",
						"english": "A faint sound of wind. But to Cidar's ears, it sounded like weeping.",
						"japanese": "かすかな風の音。だがシダーの耳には、すすり泣きのように聞こえた。",
						"chinese": "微弱的风声。但在希达耳中，听起来像是抽泣。",
						"french": "Un léger bruit de vent. Mais aux oreilles de Cidar, cela ressemblait à des pleurs.",
						"spanish": "Un débil sonido de viento. Pero para los oídos de Cidar, sonaba como un lamento.",
						"vietnamese": "Tiếng gió thoảng qua. Nhưng với tai Cidar, nó nghe như tiếng nức nở.",
						"thai": "เสียงลมแผ่วเบา แต่ในหูของซีดาร์ มันฟังดูเหมือนเสียงสะอื้น",
						"hindi": "हवा की हल्की आवाज़। लेकिन सिडार के कानों में, यह रोने की तरह लग रही थी।"
					}
				},
				{
					"content": {
						"korean": "아이들의... 흐느끼는 소리...",
						"english": "Children's... weeping sounds...",
						"japanese": "子供たちの…すすり泣く声が…",
						"chinese": "孩子们的……抽泣声……",
						"french": "Des enfants... des pleurs...",
						"spanish": "Sonidos... de niños... llorando...",
						"vietnamese": "Tiếng trẻ con... nức nở...",
						"thai": "เสียง...สะอื้นของเด็กๆ...",
						"hindi": "बच्चों की... रोने की आवाज़..."
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "착각 아닐까? 그냥 바람 소리 같은데.",
						"english": "Is it just my imagination? Sounds like just the wind.",
						"japanese": "気のせいじゃない？ただの風の音みたいだけど。",
						"chinese": "是不是错觉？听起来只是风声。",
						"french": "N'est-ce pas une illusion ? Ça ressemble juste au vent.",
						"spanish": "¿No será una ilusión? Suena como el viento.",
						"vietnamese": "Không phải ảo giác chứ? Nghe như tiếng gió thôi mà.",
						"thai": "ไม่ใช่ภาพลวงตาเหรอ? ก็แค่เสียงลมเองนะ",
						"hindi": "क्या यह सिर्फ एक भ्रम है? यह सिर्फ हवा की आवाज़ लग रही है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니... 이 슬픔은 착각일 리 없어.",
						"english": "No... this sorrow can't be an illusion.",
						"japanese": "いや…この悲しみは錯覚であるはずがない。",
						"chinese": "不……这种悲伤不可能是错觉。",
						"french": "Non... cette tristesse ne peut pas être une illusion.",
						"spanish": "No... esta tristeza no puede ser una ilusión.",
						"vietnamese": "Không... nỗi buồn này không thể là ảo giác.",
						"thai": "ไม่...ความเศร้าโศกนี้ไม่ใช่ภาพลวงตาแน่นอน",
						"hindi": "नहीं... यह दुःख भ्रम नहीं हो सकता।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 더 깊어졌다. 음습한 기운이 탐험대를 짓눌렀다.",
						"english": "The forest grew deeper. A gloomy aura pressed down on the expedition party.",
						"japanese": "森はさらに深くなった。陰鬱な気が探検隊を押しつぶした。",
						"chinese": "森林更深了。阴森的气息压得探险队喘不过气。",
						"french": "La forêt s'enfonça. Une aura lugubre oppressait le groupe d'expédition.",
						"spanish": "El bosque se hizo más profundo. Una aura sombría oprimía a la expedición.",
						"vietnamese": "Rừng càng lúc càng sâu. Một luồng khí âm u đè nặng lên đoàn thám hiểm.",
						"thai": "ป่าลึกขึ้น ออร่าที่อึมครึมกดดันทีมสำรวจ",
						"hindi": "जंगल और गहरा हो गया। एक उदास आभा ने अभियान दल को दबा दिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숨쉬기 힘들어... 숲이 우리를 거부하는 것 같아.",
						"english": "It's hard to breathe... It feels like the forest is rejecting us.",
						"japanese": "息苦しい…森が私たちを拒んでいるみたいだ。",
						"chinese": "呼吸困难……感觉森林在拒绝我们。",
						"french": "Difficile de respirer... On dirait que la forêt nous rejette.",
						"spanish": "Es difícil respirar... Parece que el bosque nos está rechazando.",
						"vietnamese": "Khó thở quá... Cứ như khu rừng đang từ chối chúng ta vậy.",
						"thai": "หายใจลำบาก... เหมือนป่ากำลังปฏิเสธเรา",
						"hindi": "सांस लेना मुश्किल है... ऐसा लगता है जैसे जंगल हमें अस्वीकार कर रहा है।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "(손에 쥔 낡은 나무 인형 조각을 보며) 이 숲은... 아이들을 가두고 있어.",
						"english": "(Looking at the old wooden doll fragment in hand) This forest... is trapping children.",
						"japanese": "（手に握った古い木の人形の破片を見て）この森は…子供たちを閉じ込めている。",
						"chinese": "（看着手中破旧的木偶碎片）这片森林……正在困住孩子们。",
						"french": "(Regardant le fragment de poupée en bois ancien dans sa main) Cette forêt... emprisonne des enfants.",
						"spanish": "(Mirando el fragmento de muñeca de madera vieja en su mano) Este bosque... está atrapando a los niños.",
						"vietnamese": "(Nhìn mảnh búp bê gỗ cũ trong tay) Khu rừng này... đang giam cầm những đứa trẻ.",
						"thai": "(มองเศษตุ๊กตาไม้เก่าในมือ) ป่านี้...กำลังขังเด็กๆ ไว้",
						"hindi": "(हाथ में लकड़ी की पुरानी गुड़िया का टुकड़ा देखते हुए) यह जंगल... बच्चों को फंसा रहा है।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "가뒀다고? 누가 그랬다는 거야?",
						"english": "Trapped? Who did that?",
						"japanese": "閉じ込めたって？誰がそんなことをしたの？",
						"chinese": "困住了？谁干的？",
						"french": "Emprisonnés ? Qui a fait ça ?",
						"spanish": "¿Atrapados? ¿Quién hizo eso?",
						"vietnamese": "Giam cầm? Ai đã làm thế?",
						"thai": "ขังไว้? ใครเป็นคนทำ?",
						"hindi": "फंसा लिया? यह किसने किया?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "그게... 누군지 모르겠어. 하지만, 이 작은 영혼들은 길을 잃고 있어.",
						"english": "I don't know who... But these little souls are lost.",
						"japanese": "それが…誰なのか分からない。だけど、この小さな魂たちは道を失っている。",
						"chinese": "我不知道那是谁……但是，这些小灵魂迷失了方向。",
						"french": "Je ne sais pas qui... Mais ces petites âmes sont perdues.",
						"spanish": "Eso... no sé quién. Pero estas pequeñas almas están perdidas.",
						"vietnamese": "Chuyện đó... tôi không biết là ai. Nhưng những linh hồn bé nhỏ này đang lạc lối.",
						"thai": "ฉันไม่รู้ว่าใคร... แต่ดวงวิญญาณเล็กๆ เหล่านี้กำลังหลงทาง",
						"hindi": "वह... मुझे नहीं पता कौन है। लेकिन, ये छोटी आत्माएं भटक रही हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 중앙 나무 줄기가 눈앞을 가로막았다. 고통의 기운이 절정에 달했다.",
						"english": "A colossal central tree trunk blocked the path. The aura of pain reached its peak.",
						"japanese": "巨大な中央の木の幹が目の前を遮った。苦痛の気が頂点に達していた。",
						"chinese": "巨大的中央树干挡住了去路。痛苦的气息达到了顶点。",
						"french": "Un tronc d'arbre central colossal bloquait le chemin. L'aura de douleur atteignait son paroxysme.",
						"spanish": "Un tronco central colosal bloqueaba el camino. El aura de dolor alcanzó su punto máximo.",
						"vietnamese": "Một thân cây trung tâm khổng lồ chặn đường. Khí tức của sự đau khổ đạt đến đỉnh điểm.",
						"thai": "ลำต้นไม้กลางขนาดมหึมาขวางทางอยู่ กลิ่นอายแห่งความเจ็บปวดถึงขีดสุด",
						"hindi": "एक विशाल केंद्रीय पेड़ का तना रास्ता रोक रहा था। दर्द का आभा अपने चरम पर पहुँच गया था।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "(얼굴을 감싸며) 안 돼... 너무 많아...",
						"english": "(Clutching face) No... Too much...",
						"japanese": "（顔を覆いながら）ダメだ…多すぎる…",
						"chinese": "（捂着脸）不…太多了…",
						"french": "(Se couvrant le visage) Non... C'est trop...",
						"spanish": "(Llevándose las manos a la cara) No... Es demasiado...",
						"vietnamese": "(Ôm mặt) Không... Nhiều quá...",
						"thai": "(กุมหน้า) ไม่นะ... เยอะเกินไป...",
						"hindi": "(चेहरा पकड़ते हुए) नहीं... बहुत ज़्यादा है..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "시더, 괜찮아? 무슨 일이야?",
						"english": "Cedar, are you alright? What's wrong?",
						"japanese": "シダー、大丈夫？どうしたの？",
						"chinese": "西达，你还好吗？发生什么事了？",
						"french": "Cedar, tu vas bien ? Qu'est-ce qui ne va pas ?",
						"spanish": "Cedar, ¿estás bien? ¿Qué pasa?",
						"vietnamese": "Cedar, cậu ổn không? Chuyện gì vậy?",
						"thai": "ซีดาร์ คุณสบายดีไหม? เกิดอะไรขึ้น?",
						"hindi": "सीडर, तुम ठीक हो? क्या हुआ?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아이들의 기억이... 흘러들어와. 어둠 속에서 잊혀지고 싶지 않다고... 울부짖고 있어.",
						"english": "The children's memories... are flowing in. They're crying out... that they don't want to be forgotten in the darkness.",
						"japanese": "子供たちの記憶が…流れ込んでくる。闇の中で忘れられたくないと…叫んでいる。",
						"chinese": "孩子们的记忆...涌了进来。他们哭喊着...不想在黑暗中被遗忘。",
						"french": "Les souvenirs des enfants... affluent. Ils crient... qu'ils ne veulent pas être oubliés dans l'obscurité.",
						"spanish": "Los recuerdos de los niños... están llegando. Están gritando... que no quieren ser olvidados en la oscuridad.",
						"vietnamese": "Ký ức của những đứa trẻ... đang tràn vào. Chúng đang kêu gào... rằng chúng không muốn bị lãng quên trong bóng tối.",
						"thai": "ความทรงจำของเด็กๆ...กำลังหลั่งไหลเข้ามา พวกเขากำลังร้องไห้...ว่าไม่อยากถูกลืมในความมืด",
						"hindi": "बच्चों की यादें... अंदर आ रही हैं। वे चिल्ला रहे हैं... कि वे अंधेरे में भूलना नहीं चाहते।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "저 애들을... 우리가 정말 구해줄 수 있을까?",
						"english": "Can we truly save those children?",
						"japanese": "あの子たちを…本当に救えるのか？",
						"chinese": "我们真的能救那些孩子吗？",
						"french": "Pouvons-nous vraiment sauver ces enfants ?",
						"spanish": "¿Realmente podemos salvar a esos niños?",
						"vietnamese": "Liệu chúng ta có thực sự cứu được những đứa trẻ đó không?",
						"thai": "เราจะช่วยเด็กๆ เหล่านั้นได้จริงหรือ?",
						"hindi": "क्या हम सच में उन बच्चों को बचा सकते हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "몰라. 하지만 이대로는 안 돼. 멈춰야 해.",
						"english": "I don't know. But we can't let this continue. We have to stop it.",
						"japanese": "分からない。だが、このままではいけない。止めなければ。",
						"chinese": "我不知道。但不能再这样下去了。我们必须阻止它。",
						"french": "Je ne sais pas. Mais ça ne peut pas continuer comme ça. Il faut l'arrêter.",
						"spanish": "No lo sé. Pero esto no puede seguir así. Tenemos que detenerlo.",
						"vietnamese": "Tôi không biết. Nhưng không thể để thế này được. Phải dừng lại thôi.",
						"thai": "ฉันไม่รู้ แต่จะปล่อยให้เป็นแบบนี้ต่อไปไม่ได้ เราต้องหยุดมัน",
						"hindi": "मुझे नहीं पता। लेकिन यह ऐसे ही नहीं चल सकता। हमें इसे रोकना होगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 숲의 억압적인 기운이 한풀 꺾였다.",
						"english": "The massive shadow fell. The oppressive aura of the forest weakened.",
						"japanese": "巨大な影が倒れた。森の抑圧的な気が少し和らいだ。",
						"chinese": "巨大的身影倒下了。森林压抑的气氛减弱了。",
						"french": "L'ombre gigantesque est tombée. L'aura oppressante de la forêt s'est un peu dissipée.",
						"spanish": "La enorme sombra cayó. La atmósfera opresiva del bosque disminuyó.",
						"vietnamese": "Bóng đen khổng lồ đã ngã xuống. Khí tức áp bức của khu rừng đã suy yếu.",
						"thai": "เงายักษ์ล้มลงแล้ว บรรยากาศกดดันของป่าลดลง",
						"hindi": "विशाल छाया गिर गई। जंगल का दमनकारी आभास कुछ हद तक कम हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "...끝나지 않아... 이 고통은... 영원히...",
						"english": "...It's not over... This suffering... forever...",
						"japanese": "...終わらない...この苦痛は...永遠に...",
						"chinese": "...还没结束...这痛苦...永远...",
						"french": "...Ce n'est pas fini... Cette souffrance... pour toujours...",
						"spanish": "...No ha terminado... Este sufrimiento... para siempre...",
						"vietnamese": "...Chưa kết thúc... Nỗi đau này... mãi mãi...",
						"thai": "...ยังไม่จบ...ความทรมานนี้...ชั่วนิรันดร์...",
						"hindi": "...यह ख़त्म नहीं हुआ... यह पीड़ा... हमेशा के लिए..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "...뭐라고? 무슨 뜻이야?",
						"english": "...What? What do you mean?",
						"japanese": "...何て？どういうことだ？",
						"chinese": "...什么？你什么意思？",
						"french": "...Quoi ? Que veux-tu dire ?",
						"spanish": "...¿Qué? ¿Qué quieres decir?",
						"vietnamese": "...Gì cơ? Ý ngươi là sao?",
						"thai": "...อะไรนะ? หมายความว่าไง?",
						"hindi": "...क्या? तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(슬픈 표정으로 주변을 둘러보며) 아이들의 영혼이... 조금은 자유로워졌지만... 아직 완전히 떠나지 못했어.",
						"english": "(Looking around with a sad expression) The children's souls... are a little freer... but they can't fully depart yet.",
						"japanese": "(悲しい顔で周りを見回し) 子供たちの魂は...少しは自由になったけど...まだ完全に去れていない。",
						"chinese": "(悲伤地环顾四周) 孩子们的灵魂...虽然获得了一些自由...但还没有完全离开。",
						"french": "(Regardant autour de lui avec une expression triste) Les âmes des enfants... sont un peu plus libres... mais elles ne peuvent pas encore partir complètement.",
						"spanish": "(Mirando alrededor con expresión triste) Las almas de los niños... están un poco más libres... pero aún no pueden irse por completo.",
						"vietnamese": "(Với vẻ mặt buồn bã nhìn xung quanh) Linh hồn bọn trẻ... đã tự do hơn một chút... nhưng vẫn chưa thể siêu thoát hoàn toàn.",
						"thai": "(มองไปรอบๆ ด้วยสีหน้าเศร้าสร้อย) ดวงวิญญาณของเด็กๆ... เป็นอิสระขึ้นมาบ้างแล้ว... แต่ก็ยังไปไม่ได้อย่างสมบูรณ์",
						"hindi": "(दुख भरी अभिव्यक्ति के साथ चारों ओर देखते हुए) बच्चों की आत्माएँ... थोड़ी आज़ाद हो गई हैं... पर अभी पूरी तरह से जा नहीं पाईं।"
					},
					"emotion": "sad",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 여전히 비극의 메아리를 품고 있었다. 다음 여정은 더 깊은 진실을 마주하게 될 것이다.",
						"english": "The forest still held the echoes of tragedy. The next journey will face a deeper truth.",
						"japanese": "森は依然として悲劇の残響を宿していた。次の旅は、より深い真実と向き合うことになるだろう。",
						"chinese": "森林中依然回荡着悲剧的回声。下一段旅程将面对更深层的真相。",
						"french": "La forêt conservait toujours les échos de la tragédie. Le prochain voyage affrontera une vérité plus profonde.",
						"spanish": "El bosque aún guardaba los ecos de la tragedia. La próxima jornada enfrentará una verdad más profunda.",
						"vietnamese": "Khu rừng vẫn còn mang theo tiếng vọng của bi kịch. Hành trình tiếp theo sẽ đối mặt với một sự thật sâu sắc hơn.",
						"thai": "ป่ายังคงเก็บเสียงสะท้อนของโศกนาฏกรรม การเดินทางครั้งต่อไปจะเผชิญหน้ากับความจริงที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "जंगल में अभी भी त्रासदी की गूँज थी। अगली यात्रा में एक गहरे सच का सामना करना होगा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 나타났다. 주변의 나무들이 억압된 듯 떨었다.",
						"english": "A colossal shadow appeared. The surrounding trees trembled as if suppressed.",
						"japanese": "巨大な影が現れた。周囲の木々が抑圧されたように震えた。",
						"chinese": "一个巨大的影子出现了。周围的树木仿佛受到压制般颤抖着。",
						"french": "Une ombre colossale apparut. Les arbres environnants tremblèrent comme oppressés.",
						"spanish": "Una sombra colosal apareció. Los árboles circundantes temblaron como oprimidos.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện. Những cái cây xung quanh run rẩy như bị đè nén.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ต้นไม้รอบๆ สั่นสะท้านราวกับถูกกดขี่",
						"hindi": "एक विशाल छाया प्रकट हुई। आसपास के पेड़ दबे हुए से काँप रहे थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 온 어리석은 자들이여.",
						"english": "You foolish ones who have come this far.",
						"japanese": "ここまで来た愚かな者たちよ。",
						"chinese": "来到这里的愚蠢之人。",
						"french": "Vous, les insensés qui êtes venus jusqu'ici.",
						"spanish": "Vosotros, los necios que habéis llegado hasta aquí.",
						"vietnamese": "Hỡi những kẻ ngu ngốc đã đến đây.",
						"thai": "พวกเจ้าผู้โง่เขลาที่มาถึงที่นี่",
						"hindi": "तुम मूर्ख लोग जो यहाँ तक आए हो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가... 아이들을 가둔 거야?",
						"english": "You... imprisoned the children?",
						"japanese": "お前が…子供たちを閉じ込めたのか？",
						"chinese": "你...囚禁了孩子们？",
						"french": "C'est toi... qui as emprisonné les enfants ?",
						"spanish": "¿Tú... encarcelaste a los niños?",
						"vietnamese": "Ngươi... đã giam giữ những đứa trẻ sao?",
						"thai": "แก...เป็นคนกักขังเด็กๆ หรือ?",
						"hindi": "तुमने... बच्चों को कैद किया?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 숲은... 모든 것을 품어야 한다. 너희의 연민 따위는 필요 없다.",
						"english": "This forest... must embrace everything. Your pity is not needed.",
						"japanese": "この森は…全てを抱擁しなければならない。お前たちの憐憫など必要ない。",
						"chinese": "这片森林...必须包容一切。不需要你们的怜悯。",
						"french": "Cette forêt... doit tout embrasser. Votre pitié n'est pas nécessaire.",
						"spanish": "Este bosque... debe abrazarlo todo. Vuestra piedad no es necesaria.",
						"vietnamese": "Khu rừng này... phải ôm lấy tất cả. Lòng trắc ẩn của các ngươi không cần thiết.",
						"thai": "ป่าแห่งนี้...ต้องโอบอุ้มทุกสิ่ง ความสงสารของพวกเจ้าไม่จำเป็น",
						"hindi": "इस जंगल को... सब कुछ समाहित करना होगा। तुम्हारी दया की कोई आवश्यकता नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 아이들을 해방시킬 거야.",
						"english": "Move. I'll free the children.",
						"japanese": "どいて。子どもたちを解放する。",
						"chinese": "让开。我要解放孩子们。",
						"french": "Écartez-vous. Je vais libérer les enfants.",
						"spanish": "Muévete. Liberaré a los niños.",
						"vietnamese": "Tránh ra. Ta sẽ giải thoát bọn trẻ.",
						"thai": "หลีกไป ฉันจะปลดปล่อยเด็กๆ",
						"hindi": "हट जाओ। मैं बच्चों को आज़ाद करूँगा。"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 수호자는 탐험대를 짓밟았다. 아이들의 흐느낌이 더욱 처절하게 들려왔다.",
						"english": "The forest guardian crushed the expedition. The children's sobs grew more desperate.",
						"japanese": "森の守護者は探検隊を踏み潰した。子供たちのすすり泣きはさらに凄惨に聞こえた。",
						"chinese": "森林的守护者摧毁了探险队。孩子们的呜咽声变得更加凄惨。",
						"french": "Le gardien de la forêt a écrasé l'expédition. Les sanglots des enfants résonnaient de manière encore plus déchirante.",
						"spanish": "El guardián del bosque aplastó a la expedición. Los sollozos de los niños se escuchaban aún más desgarradores.",
						"vietnamese": "Người bảo hộ rừng đã nghiền nát đoàn thám hiểm. Tiếng nức nở của bọn trẻ càng thảm thiết hơn.",
						"thai": "ผู้พิทักษ์ป่าบดขยี้คณะสำรวจ เสียงสะอื้นของเด็กๆ ยิ่งน่าเวทนาขึ้น",
						"hindi": "वन के संरक्षक ने अभियान दल को कुचल दिया। बच्चों के सिसकने की आवाज़ और भी करुण हो गई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 나의 평화를 방해하는가. 영원히 숲의 일부가 되어라.",
						"english": "Dare you disturb my peace? Become part of the forest forever.",
						"japanese": "よくも私の平穏を乱したな。永遠に森の一部となれ。",
						"chinese": "竟敢打扰我的平静。永远成为森林的一部分吧。",
						"french": "Oserez-vous troubler ma paix ? Devenez une partie de la forêt pour l'éternité.",
						"spanish": "¿Osas perturbar mi paz? Conviértete en parte del bosque para siempre.",
						"vietnamese": "Dám cả gan quấy rầy sự bình yên của ta sao? Hãy trở thành một phần của khu rừng mãi mãi đi.",
						"thai": "กล้าดียังไงมารบกวนความสงบของข้า จงเป็นส่วนหนึ่งของป่าตลอดไป",
						"hindi": "मेरी शांति भंग करने की हिम्मत कैसे हुई? हमेशा के लिए जंगल का हिस्सा बन जाओ।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "...포기할 수 없어. 이 아이들을 위해.",
						"english": "...I can't give up. For these children.",
						"japanese": "...諦められない。この子供たちのために。",
						"chinese": "...我不能放弃。为了这些孩子们。",
						"french": "...Je ne peux pas abandonner. Pour ces enfants.",
						"spanish": "...No puedo rendirme. Por estos niños.",
						"vietnamese": "...Không thể bỏ cuộc. Vì những đứa trẻ này.",
						"thai": "...ยอมแพ้ไม่ได้ เพื่อเด็กๆ เหล่านี้",
						"hindi": "...मैं हार नहीं मान सकता। इन बच्चों के लिए。"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
