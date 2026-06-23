export const scenario_forest_veridianecho_45_02 = {
	"scenario_id": "forest_veridianecho_45_02",
	"order": 2,
	"act": "rising",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "포자 안개가 자욱했다. 한 치 앞도 보이지 않았다.",
						"english": "The spore mist was thick. Couldn't see an inch ahead.",
						"japanese": "胞子霧が濃く立ち込めていた。一寸先も見えなかった。",
						"chinese": "孢子迷雾弥漫。寸步难行，什么也看不见。",
						"french": "La brume de spores était épaisse. On ne voyait pas à un pouce devant soi.",
						"spanish": "La niebla de esporas era espesa. No se veía ni una pulgada por delante.",
						"vietnamese": "Màn sương bào tử dày đặc. Không thể nhìn thấy một tấc phía trước.",
						"thai": "หมอกสปอร์หนาทึบ มองไม่เห็นแม้แต่คืบเดียว",
						"hindi": "बीजाणु का कोहरा घना था। एक इंच भी आगे नहीं दिख रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "젠장, 너무 짙어…!",
						"english": "Damn it, it's too thick...!",
						"japanese": "くそ、濃すぎる…！",
						"chinese": "该死，太浓了…！",
						"french": "Merde, c'est trop dense...!",
						"spanish": "¡Maldita sea, es demasiado denso...!",
						"vietnamese": "Chết tiệt, nó quá dày...!",
						"thai": "ให้ตายสิ มันหนาเกินไป...!",
						"hindi": "लानत है, यह बहुत घना है...!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "focus",
					"duration_ms": 300,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크르르…",
						"english": "Grrr...",
						"japanese": "グルル…",
						"chinese": "吼呜…",
						"french": "Grrr...",
						"spanish": "Grrr...",
						"vietnamese": "Grừừ…",
						"thai": "ครืน...",
						"hindi": "गुर्र..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "또 왔어! 물러서!",
						"english": "It's back! Get back!",
						"japanese": "また来た！下がれ！",
						"chinese": "又来了！退后！",
						"french": "Il est de retour ! Reculez !",
						"spanish": "¡Volvió! ¡Retrocede!",
						"vietnamese": "Nó lại đến rồi! Lùi lại!",
						"thai": "มาอีกแล้ว! ถอยไป!",
						"hindi": "यह फिर आ गया! पीछे हटो!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "fern",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런 곳에선 가만히 있는 게 죽는 길이야.",
						"english": "In a place like this, standing still is a death sentence.",
						"japanese": "こんな場所で立ち止まるのは死を意味する。",
						"chinese": "在这种地方，原地不动就是找死。",
						"french": "Dans un endroit comme celui-ci, rester immobile, c'est la mort assurée.",
						"spanish": "En un lugar como este, quedarse quieto es la muerte.",
						"vietnamese": "Ở một nơi như thế này, đứng yên là con đường chết.",
						"thai": "ในที่แบบนี้ การอยู่เฉยๆ คือหนทางสู่ความตาย",
						"hindi": "ऐसी जगह पर, स्थिर रहना मौत का फरमान है।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					}
				},
				{
					"emotion": "base",
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "페른. 이 숲에선 오래 버텼지. 따라와.",
						"english": "Fern. I've survived long in this forest. Follow me.",
						"japanese": "フェルン。この森で長く生きてきた。ついてきて。",
						"chinese": "费恩。我在这片森林里活了很久。跟我来。",
						"french": "Fern. J'ai survécu longtemps dans cette forêt. Suivez-moi.",
						"spanish": "Fern. He sobrevivido mucho tiempo en este bosque. Sígueme.",
						"vietnamese": "Fern. Ta đã sống sót rất lâu trong rừng này. Theo ta.",
						"thai": "เฟิร์น ฉันอยู่รอดมานานในป่านี้ ตามมาสิ",
						"hindi": "फर्न। मैं इस जंगल में लंबे समय से जीवित रहा हूँ। मेरे पीछे आओ।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "이놈들, 점점 더 강해져. 끝이 없어.",
						"english": "These guys are getting stronger. No end to it.",
						"japanese": "こいつら、どんどん強くなってる。終わりがない。",
						"chinese": "这些家伙越来越强了。没完没了。",
						"french": "Ces types sont de plus en plus forts. Ça n'en finit pas.",
						"spanish": "Estos tipos se están volviendo más fuertes. No tiene fin.",
						"vietnamese": "Bọn này ngày càng mạnh hơn. Không có hồi kết.",
						"thai": "พวกนี้แข็งแกร่งขึ้นเรื่อยๆ ไม่มีที่สิ้นสุด",
						"hindi": "ये लोग और भी मजबूत होते जा रहे हैं। इसका कोई अंत नहीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲이 왜 이렇게 변하는 거죠?",
						"english": "Why is the forest changing like this?",
						"japanese": "森はどうしてこんな風に変わるんですか？",
						"chinese": "森林为什么会变成这样？",
						"french": "Pourquoi la forêt change-t-elle comme ça ?",
						"spanish": "¿Por qué el bosque está cambiando así?",
						"vietnamese": "Tại sao khu rừng lại thay đổi như thế này?",
						"thai": "ทำไมป่าถึงเปลี่ยนไปแบบนี้?",
						"hindi": "जंगल ऐसे क्यों बदल रहा है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech",
					"content": {
						"korean": "포자 때문이야. 놈들이 생명력을 흡수해.",
						"english": "It's because of the spores. They're absorbing the life force.",
						"japanese": "胞子のせいだよ。奴らが生命力を吸収してる。",
						"chinese": "是因为孢子。它们正在吸收生命力。",
						"french": "C'est à cause des spores. Elles absorbent la force vitale.",
						"spanish": "Es por las esporas. Están absorbiendo la fuerza vital.",
						"vietnamese": "Là do bào tử. Chúng đang hút sinh lực.",
						"thai": "เป็นเพราะสปอร์ พวกมันกำลังดูดซับพลังชีวิต",
						"hindi": "यह बीजाणुओं के कारण है। वे जीवन शक्ति को सोख रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "생명력을 흡수한다고?",
						"english": "Absorbing life force?",
						"japanese": "生命力を吸収するって？",
						"chinese": "吸收生命力？",
						"french": "Absorbent la force vitale ?",
						"spanish": "¿Absorbiendo fuerza vital?",
						"vietnamese": "Hút sinh lực sao?",
						"thai": "ดูดซับพลังชีวิตงั้นเหรอ?",
						"hindi": "जीवन शक्ति को सोखना?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "예전엔 이 정도는 아니었어. 숲의 모든 게 서서히 죽어가고 있어.",
						"english": "It wasn't this bad before. Everything in the forest is slowly dying.",
						"japanese": "前はこんなじゃなかった。森の全てがゆっくりと死んでいってる。",
						"chinese": "以前没这么糟。森林里的一切都在慢慢死去。",
						"french": "Ce n'était pas si grave avant. Tout dans la forêt meurt lentement.",
						"spanish": "Antes no era tan malo. Todo en el bosque está muriendo lentamente.",
						"vietnamese": "Trước đây không tệ đến thế này. Mọi thứ trong rừng đang dần chết đi.",
						"thai": "เมื่อก่อนไม่เลวร้ายขนาดนี้ ทุกสิ่งในป่ากำลังตายอย่างช้าๆ",
						"hindi": "पहले इतना बुरा नहीं था। जंगल में सब कुछ धीरे-धीरे मर रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "거친 수풀을 헤치고 나아가자, 낡은 석탑의 잔해가 보였다.",
						"english": "Pushing through the dense undergrowth, we saw the remains of an old stone tower.",
						"japanese": "荒い茂みをかき分けて進むと、古い石塔の残骸が見えた。",
						"chinese": "穿过茂密的灌木丛，我们看到了古老石塔的残骸。",
						"french": "En traversant les fourrés, nous avons aperçu les vestiges d'une ancienne tour de pierre.",
						"spanish": "Abriéndonos paso entre la densa maleza, vimos los restos de una antigua torre de piedra.",
						"vietnamese": "Vượt qua bụi rậm, chúng tôi thấy tàn tích của một tháp đá cổ.",
						"thai": "เมื่อแหวกพงหญ้ารกทึบไป เราก็เห็นซากของหอคอยหินเก่าแก่",
						"hindi": "घनी झाड़ियों से होते हुए, हमने एक पुराने पत्थर के टॉवर के अवशेष देखे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건… 유적의 일부인가?",
						"english": "This is... part of a ruin?",
						"japanese": "これは…遺跡の一部なのか？",
						"chinese": "这是…遗迹的一部分吗？",
						"french": "C'est... une partie d'une ruine ?",
						"spanish": "¿Esto es... parte de una ruina?",
						"vietnamese": "Đây là... một phần của tàn tích sao?",
						"thai": "นี่มัน... ส่วนหนึ่งของซากปรักหักพังเหรอ?",
						"hindi": "यह... किसी खंडहर का हिस्सा है?"
					}
				},
				{
					"content": {
						"korean": "오래된 주술의 흔적이야. 지금은 아무도 쓰지 않는.",
						"english": "Traces of ancient sorcery. No one uses it anymore.",
						"japanese": "古い呪術の痕跡だ。今は誰も使わない。",
						"chinese": "古老巫术的痕迹。现在已经没人用了。",
						"french": "Des traces d'ancienne sorcellerie. Plus personne ne les utilise.",
						"spanish": "Restos de antigua hechicería. Ya nadie la usa.",
						"vietnamese": "Dấu vết của phép thuật cổ xưa. Giờ không ai dùng nữa.",
						"thai": "ร่องรอยของเวทมนตร์โบราณ ไม่มีใครใช้มันแล้ว",
						"hindi": "प्राचीन जादू-टोना के निशान। अब कोई इसका इस्तेमाल नहीं करता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주술이라니? 숲과 관련이 있나요?",
						"english": "Sorcery? Is it related to the forest?",
						"japanese": "呪術ですって？ 森と関係があるのですか？",
						"chinese": "巫术？和森林有关吗？",
						"french": "De la sorcellerie ? Est-ce lié à la forêt ?",
						"spanish": "¿Brujería? ¿Está relacionada con el bosque?",
						"vietnamese": "Phép thuật ư? Có liên quan đến rừng không?",
						"thai": "เวทมนตร์เหรอ? เกี่ยวข้องกับป่าไหม?",
						"hindi": "जादू-टोना? क्या इसका जंगल से कोई संबंध है?"
					}
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "글쎄. 하지만 이 근처에서 기이한 현상이 잦았지. 숲의 생명력을 뒤트는.",
						"english": "Well, strange phenomena have been frequent around here. Twisting the forest's life force.",
						"japanese": "さあ。だが、この近くでは奇妙な現象が頻繁に起こった。森の生命力を歪めるような。",
						"chinese": "嗯。不过这附近怪事频发。扭曲森林的生命力。",
						"french": "Eh bien. Mais des phénomènes étranges sont fréquents par ici. Tordant la force vitale de la forêt.",
						"spanish": "Bueno. Pero fenómenos extraños han sido frecuentes por aquí. Distorsionando la fuerza vital del bosque.",
						"vietnamese": "Chà. Nhưng những hiện tượng kỳ lạ thường xuyên xảy ra ở gần đây. Xoắn vặn sức sống của khu rừng.",
						"thai": "อืมม์ แต่ปรากฏการณ์ประหลาดเกิดขึ้นบ่อยแถวนี้ บิดเบือนพลังชีวิตของป่า",
						"hindi": "खैर। लेकिन इस आस-पास अजीबोगरीब घटनाएँ अक्सर हुई हैं। जंगल की जीवन शक्ति को बिगाड़ने वाली।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "fern"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포자 안개는 더욱 짙어져, 숲 전체가 거대한 유기체처럼 뒤틀려 있었다.",
						"english": "The spore mist grew thicker, and the entire forest was contorted like a gigantic organism.",
						"japanese": "胞子霧はさらに濃くなり、森全体が巨大な有機体のように歪んでいた。",
						"chinese": "孢子迷雾愈发浓重，整片森林如同一个巨大的有机体般扭曲着。",
						"french": "Le brouillard de spores s'épaississait, et toute la forêt était tordue comme un organisme gigantesque.",
						"spanish": "La niebla de esporas se hizo más densa, y todo el bosque se retorcía como un organismo gigantesco.",
						"vietnamese": "Sương mù bào tử càng lúc càng dày đặc, cả khu rừng như bị vặn vẹo thành một sinh vật khổng lồ.",
						"thai": "หมอกสปอร์หนาแน่นขึ้น และป่าทั้งผืนก็บิดเบี้ยวเหมือนสิ่งมีชีวิตขนาดมหึมา",
						"hindi": "बीजाणु की धुंध और घनी हो गई, और पूरा जंगल एक विशाल जीव की तरह विकृत हो गया था।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 기분 나빠지는군….",
						"english": "It's getting more and more unsettling...",
						"japanese": "だんだん気分が悪くなってきたな…。",
						"chinese": "感觉越来越不舒服了……",
						"french": "C'est de plus en plus inquiétant…",
						"spanish": "Cada vez se pone más desagradable…",
						"vietnamese": "Càng lúc càng thấy khó chịu…",
						"thai": "รู้สึกแย่ลงเรื่อยๆ...",
						"hindi": "यह और भी परेशान करने वाला होता जा रहा है..."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "여기가 바로 에코의 영역이야. 포자 안개의 근원.",
						"english": "This is Echo's domain. The source of the spore mist.",
						"japanese": "ここがエコーの領域だ。胞子霧の根源。",
						"chinese": "这里就是艾可的领域。孢子迷雾的根源。",
						"french": "C'est le domaine d'Écho. La source du brouillard de spores.",
						"spanish": "Este es el dominio de Eco. La fuente de la niebla de esporas.",
						"vietnamese": "Đây chính là lãnh địa của Echo. Nguồn gốc của sương mù bào tử.",
						"thai": "นี่คืออาณาเขตของเอคโค่ ต้นกำเนิดของหมอกสปอร์",
						"hindi": "यह इको का क्षेत्र है। बीजाणु धुंध का स्रोत।"
					}
				},
				{
					"content": {
						"korean": "저 멀리서… 뭔가의 울림이 들려오지 않아?",
						"english": "From afar... don't you hear something resonating?",
						"japanese": "遠くから…何かの響きが聞こえないか？",
						"chinese": "从远处……没有听到什么回响吗？",
						"french": "De loin… n'entends-tu pas quelque chose résonner ?",
						"spanish": "Desde lejos… ¿no oyes algo resonar?",
						"vietnamese": "Từ xa… không nghe thấy tiếng vang gì sao?",
						"thai": "จากที่ไกลๆ... ไม่ได้ยินเสียงอะไรบางอย่างสะท้อนมาเหรอ?",
						"hindi": "दूर से... क्या तुम्हें कुछ गूँजता हुआ नहीं सुनाई दे रहा?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "…희미하게 들리는 것 같아요. 슬픈 울음소리 같기도….",
						"english": "...I think I hear it faintly. Like a sorrowful cry...",
						"japanese": "…かすかに聞こえる気がします。悲しい鳴き声のようにも…。",
						"chinese": "……好像隐约听到了。像是悲伤的哭泣声……",
						"french": "...J'ai l'impression de l'entendre faiblement. Comme un cri de tristesse...",
						"spanish": "...Creo que lo oigo débilmente. Como un lamento triste...",
						"vietnamese": "…Tôi nghĩ là nghe thấy tiếng rất nhỏ. Cũng có thể là tiếng khóc buồn bã…",
						"thai": "...รู้สึกเหมือนได้ยินแผ่วๆ เหมือนเสียงร้องไห้เศร้าๆ...",
						"hindi": "...मुझे यह धुंधला सुनाई दे रहा है। जैसे कोई दुखद रोना हो..."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심해. 놈이 가까워지고 있어.",
						"english": "Be careful. It's getting closer.",
						"japanese": "気をつけろ。奴が近づいている。",
						"chinese": "小心。它在靠近。",
						"french": "Fais attention. Il se rapproche.",
						"spanish": "Ten cuidado. Se está acercando.",
						"vietnamese": "Cẩn thận. Nó đang đến gần.",
						"thai": "ระวังนะ มันกำลังเข้ามาใกล้",
						"hindi": "सावधान रहो। वह पास आ रहा है।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압도적인 힘에 일행은 무릎 꿇었다.",
						"english": "Overwhelmed by power, the party knelt.",
						"japanese": "圧倒的な力の前に、一行は膝を屈した。",
						"chinese": "在压倒性的力量面前，队伍跪下了。",
						"french": "Accablée par cette puissance, l'équipe s'agenouilla.",
						"spanish": "Abrumado por el poder, el grupo se arrodilló.",
						"vietnamese": "Trước sức mạnh áp đảo, cả đoàn đã quỳ gối.",
						"thai": "ต่อหน้าพลังอันท่วมท้น, คณะได้คุกเข่าลง.",
						"hindi": "अदम्य शक्ति के आगे, दल ने घुटने टेक दिए।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "겨우 이 정도인가. 너희의 생명력은 달콤하군. 크하하.",
						"english": "Is this all you've got? Your life force is sweet. Khahaha.",
						"japanese": "たったこれだけか。お前たちの生命力は甘美だな。クハハハ。",
						"chinese": "就这点本事吗？你们的生命力真甜美。哈哈哈。",
						"french": "C'est tout ce que vous avez ? Votre force vitale est douce. Khahaha.",
						"spanish": "¿Esto es todo lo que tenéis? Vuestra fuerza vital es dulce. Jajaja.",
						"vietnamese": "Chỉ có thế này thôi sao? Sinh lực của các ngươi thật ngọt ngào. Khà khà khà.",
						"thai": "แค่นี้เองงั้นรึ? พลังชีวิตของพวกเจ้าช่างหอมหวาน. คิกคิกคิก.",
						"hindi": "बस इतना ही है? तुम्हारी जीवन शक्ति मीठी है। खहाहा।"
					}
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃...还没...结束！",
						"french": "Ugh... Ce n'est pas... fini !",
						"spanish": "Ugh... ¡Todavía no... ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยังไม่... จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "후퇴해야 해! 지금은 이길 수 없어!",
						"english": "Retreat! We can't win now!",
						"japanese": "撤退だ！今は勝てない！",
						"chinese": "必须撤退！现在赢不了！",
						"french": "Retraite ! On ne peut pas gagner maintenant !",
						"spanish": "¡Retirada! ¡No podemos ganar ahora!",
						"vietnamese": "Phải rút lui thôi! Giờ không thể thắng được!",
						"thai": "ต้องถอย! ตอนนี้ชนะไม่ได้!",
						"hindi": "पीछे हटना होगा! अभी जीत नहीं सकते!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "괴물은 쓰러졌지만, 숲의 고통은 멈추지 않았다.",
						"english": "The monster fell, but the forest's suffering did not cease.",
						"japanese": "怪物は倒れたが、森の苦しみは終わらなかった。",
						"chinese": "怪物倒下了，但森林的痛苦并未停止。",
						"french": "Le monstre est tombé, mais la souffrance de la forêt ne s'est pas arrêtée.",
						"spanish": "El monstruo cayó, pero el sufrimiento del bosque no cesó.",
						"vietnamese": "Quái vật đã gục ngã, nhưng nỗi đau của rừng vẫn chưa dừng lại.",
						"thai": "สัตว์ประหลาดล้มลงแล้ว, แต่ความทุกข์ทรมานของป่ายังไม่หยุดยั้ง.",
						"hindi": "राक्षस गिर गया, लेकिन जंगल का दर्द नहीं रुका।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크크… 이제… 시작일 뿐….",
						"english": "Heh heh... This is... just the beginning...",
						"japanese": "クク…これは…始まりに過ぎない…。",
						"chinese": "呵呵…这…才刚刚开始…。",
						"french": "Hé hé… Ce n'est… que le début…",
						"spanish": "Je je… Esto es… solo el principio…",
						"vietnamese": "Khà khà… Đây… chỉ mới là khởi đầu thôi…",
						"thai": "คิก คิก… นี่มัน… แค่จุดเริ่มต้นเท่านั้น…",
						"hindi": "हहह… यह… तो बस शुरुआत है…।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대체 뭘 말하는 거야?! 잡았다!",
						"english": "What are you talking about?! Got you!",
						"japanese": "一体何を言ってるんだ？！捕まえたぞ！",
						"chinese": "你到底在说什么？！抓到你了！",
						"french": "De quoi parles-tu ?! Je t'ai eu !",
						"spanish": "¿De qué hablas?! ¡Te tengo!",
						"vietnamese": "Ngươi đang nói cái gì vậy?! Bắt được ngươi rồi!",
						"thai": "แกกำลังพูดอะไร?! จับได้แล้ว!",
						"hindi": "तुम किस बारे में बात कर रहे हो?! पकड़ लिया!"
					}
				},
				{
					"type": "direction",
					"speaker": "fern",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이놈은 그냥 부하였어. 진짜는… 더 깊숙이 있어.",
						"english": "This one was just a subordinate. The real one... is deeper inside.",
						"japanese": "こいつはただの手下だった。本当の奴は…もっと奥にいる。",
						"chinese": "这家伙只是个部下。真正的…还在更深处。",
						"french": "Celui-ci n'était qu'un subordonné. Le vrai… est plus profondément.",
						"spanish": "Este era solo un subordinado. El verdadero… está más profundo.",
						"vietnamese": "Tên này chỉ là một thuộc hạ. Kẻ thực sự… còn ở sâu hơn bên trong.",
						"thai": "เจ้านี่เป็นแค่ลูกน้อง. ตัวจริง… อยู่ลึกเข้าไปอีก.",
						"hindi": "यह तो बस एक अधीनस्थ था। असली वाला… और गहराइयों में है।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲의 비극은 끝나지 않았다. 더 거대한 존재가 어둠 속에서 깨어나고 있었다.",
						"english": "The forest's tragedy was not over. A greater entity was awakening in the shadows.",
						"japanese": "森の悲劇は終わらなかった。さらなる巨大な存在が闇の中で目覚めつつあった。",
						"chinese": "森林的悲剧并未结束。一个更强大的存在正在黑暗中苏醒。",
						"french": "La tragédie de la forêt n'était pas terminée. Une entité plus grande s'éveillait dans l'ombre.",
						"spanish": "La tragedia del bosque no había terminado. Una entidad aún mayor estaba despertando en las sombras.",
						"vietnamese": "Bi kịch của khu rừng chưa kết thúc. Một thực thể vĩ đại hơn đang thức tỉnh trong bóng tối.",
						"thai": "โศกนาฏกรรมของป่ายังไม่สิ้นสุด. สิ่งมีชีวิตที่ยิ่งใหญ่กว่ากำลังตื่นขึ้นในเงามืด.",
						"hindi": "जंगल की त्रासदी समाप्त नहीं हुई थी। एक बड़ी सत्ता अंधेरे में जागृत हो रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마침내, 포자 안개의 심장부. 거대한 그림자가 일행을 맞이했다.",
						"english": "Finally, the heart of the spore mist. A gigantic shadow greeted the party.",
						"japanese": "ついに、胞子霧の心臓部。巨大な影が一行を迎えた。",
						"chinese": "终于，孢子迷雾的中心。一个巨大的影子迎接了众人。",
						"french": "Enfin, le cœur du brouillard de spores. Une ombre gigantesque accueillit le groupe.",
						"spanish": "Finalmente, el corazón de la niebla de esporas. Una sombra gigantesca recibió al grupo.",
						"vietnamese": "Cuối cùng, trung tâm của sương mù bào tử. Một cái bóng khổng lồ chào đón đoàn người.",
						"thai": "ในที่สุด ใจกลางหมอกสปอร์ เงาขนาดมหึมาต้อนรับคณะเดินทาง",
						"hindi": "अंततः, बीजाणु धुंध का हृदय। एक विशाल परछाई ने समूह का स्वागत किया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 여기까지 온 건가, 어리석은 인간들.",
						"english": "Dare to come this far, foolish humans.",
						"japanese": "よくもここまで来たな、愚かな人間ども。",
						"chinese": "竟敢来到这里，愚蠢的人类。",
						"french": "Oser venir jusqu'ici, stupides humains.",
						"spanish": "¿Osasteis llegar hasta aquí, estúpidos humanos?",
						"vietnamese": "Dám đến tận đây sao, lũ người ngu ngốc.",
						"thai": "บังอาจมาถึงที่นี่เลยหรือ มนุษย์โง่เขลา",
						"hindi": "इतनी दूर आने की हिम्मत की, मूर्ख इंसानो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 모든 변이의 원흉이냐? 각오해라!",
						"english": "Are you the source of all mutations? Prepare yourself!",
						"japanese": "お前が全ての変異の元凶か？覚悟しろ！",
						"chinese": "你就是所有变异的元凶吗？做好觉悟吧！",
						"french": "Es-tu la source de toutes les mutations ? Prépare-toi !",
						"spanish": "¿Eres el origen de todas las mutaciones? ¡Prepárate!",
						"vietnamese": "Ngươi là kẻ gây ra mọi biến dị sao? Hãy chuẩn bị đi!",
						"thai": "เจ้าคือต้นเหตุของการกลายพันธุ์ทั้งหมดงั้นรึ? เตรียมตัวรับมือซะ!",
						"hindi": "क्या तुम ही सभी उत्परिवर्तनों का स्रोत हो? तैयार हो जाओ!"
					}
				},
				{
					"content": {
						"korean": "이 숲은 내 것이다. 나의 양식. 모두 먹어치워주마.",
						"english": "This forest is mine. My nourishment. I'll devour it all.",
						"japanese": "この森は俺のものだ。俺の糧。全て食い尽くしてやる。",
						"chinese": "这片森林是我的。我的食粮。我将吞噬一切。",
						"french": "Cette forêt est mienne. Ma subsistance. Je vais tout dévorer.",
						"spanish": "Este bosque es mío. Mi sustento. Lo devoraré todo.",
						"vietnamese": "Rừng này là của ta. Nguồn sống của ta. Ta sẽ nuốt chửng tất cả.",
						"thai": "ป่านี้เป็นของข้า. อาหารของข้า. ข้าจะกลืนกินมันทั้งหมด.",
						"hindi": "यह जंगल मेरा है। मेरा पोषण। मैं यह सब निगल जाऊँगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "fern",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 놈은… 평범한 괴물이 아니야. 강해. 조심해!",
						"english": "That one... is no ordinary monster. He's strong. Be careful!",
						"japanese": "あいつは…普通の怪物じゃない。強い。気をつけろ！",
						"chinese": "那家伙…不是普通的怪物。他很强。小心！",
						"french": "Celui-là… n'est pas un monstre ordinaire. Il est fort. Fais attention !",
						"spanish": "Ese… no es un monstruo cualquiera. Es fuerte. ¡Ten cuidado!",
						"vietnamese": "Tên đó… không phải quái vật bình thường. Hắn mạnh lắm. Cẩn thận!",
						"thai": "ไอ้ตัวนั้น… ไม่ใช่สัตว์ประหลาดธรรมดา. มันแข็งแกร่ง. ระวังตัว!",
						"hindi": "वह… कोई साधारण राक्षस नहीं है। वह शक्तिशाली है। सावधान रहो!"
					},
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"포자 안개 속, 숲은 더 깊은 미궁으로 변했다.",
			"변이된 괴물들이 그림자처럼 쫓아오고—",
			"그때, 낡은 사냥복의 그림자가 나타났다.",
			"이 숲은 살아남는 법을 가르쳐주지 않는다.",
			"오직 죽음만이 이곳의 규칙이었다."
		],
		"english": [
			"In the spore mist, the forest became a deeper labyrinth.",
			"Mutated monsters chased like shadows—",
			"Then, the shadow of an old hunter's attire appeared.",
			"This forest doesn't teach survival.",
			"Only death was the rule here."
		],
		"japanese": [
			"胞子霧の中、森はより深い迷宮へと変貌した。",
			"変異した怪物が影のように追いかけ—",
			"その時、古びた狩り装束の影が現れた。",
			"この森は生き残る術を教えてくれない。",
			"ここでの唯一のルールは死だった。"
		],
		"chinese": [
			"在孢子迷雾中，森林变成了一座更深的迷宫。",
			"变异的怪物像影子一样追逐着—",
			"那时，一套旧猎装的影子出现了。",
			"这片森林不教导生存之道。",
			"只有死亡才是这里的规则。"
		],
		"french": [
			"Dans la brume de spores, la forêt s'est transformée en un labyrinthe plus profond.",
			"Des monstres mutants pourchassaient comme des ombres—",
			"Puis, l'ombre d'une vieille tenue de chasseur apparut.",
			"Cette forêt n'enseigne pas la survie.",
			"Seule la mort était la règle ici."
		],
		"spanish": [
			"En la niebla de esporas, el bosque se convirtió en un laberinto más profundo.",
			"Monstruos mutados perseguían como sombras—",
			"Entonces, la sombra de un viejo atuendo de cazador apareció.",
			"Este bosque no enseña a sobrevivir.",
			"Solo la muerte era la regla aquí."
		],
		"vietnamese": [
			"Trong màn sương bào tử, khu rừng biến thành một mê cung sâu thẳm hơn.",
			"Những quái vật đột biến đuổi theo như bóng hình—",
			"Lúc đó, bóng hình một bộ đồ săn cũ kỹ xuất hiện.",
			"Khu rừng này không dạy cách sống sót.",
			"Chỉ có cái chết mới là quy tắc ở đây."
		],
		"thai": [
			"ท่ามกลางหมอกสปอร์ ป่าได้กลายเป็นเขาวงกตที่ลึกเข้าไปอีก",
			"สัตว์ประหลาดกลายพันธุ์ไล่ตามมาเหมือนเงา—",
			"แล้วเงาของชุดล่าสัตว์เก่าๆ ก็ปรากฏขึ้น",
			"ป่านี้ไม่สอนวิธีเอาชีวิตรอด",
			"มีแต่ความตายเท่านั้นที่เป็นกฎที่นี่"
		],
		"hindi": [
			"बीजाणु कोहरे में, जंगल एक गहरी भूलभुलैया में बदल गया।",
			"उत्परिवर्तित राक्षस परछाइयों की तरह पीछा कर रहे थे—",
			"तभी, एक पुराने शिकारी के लिबास की छाया प्रकट हुई।",
			"यह जंगल जीवित रहना नहीं सिखाता।",
			"यहाँ केवल मृत्यु ही नियम था।"
		]
	}
} as const;
