export const scenario_forest_silvanus_46_04 = {
	"scenario_id": "forest_silvanus_46_04",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 고문서들이 쌓인 곳. 시간의 먼지가 내려앉아 있었다.",
						"english": "A place where old ancient texts lay piled. The dust of time had settled.",
						"japanese": "古い古文書が積み重なった場所。時間の埃が降り積もっていた。",
						"chinese": "古老的文稿堆积之处。时间的尘埃已然落下。",
						"french": "Un endroit où s'entassaient d'anciens manuscrits. La poussière du temps s'était déposée.",
						"spanish": "Un lugar donde se apilaban antiguos manuscritos. El polvo del tiempo se había asentado.",
						"vietnamese": "Nơi những tài liệu cổ xưa chất đống. Bụi thời gian đã phủ xuống.",
						"thai": "สถานที่ที่เอกสารโบราณเก่าแก่ถูกกองไว้ ฝุ่นแห่งกาลเวลาได้ปกคลุม",
						"hindi": "एक ऐसी जगह जहाँ पुरानी प्राचीन ग्रंथें ढेर थीं। समय की धूल जम गई थी।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "…왔군. 당신이 그 소문의 주인인가?",
						"english": "...You're here. Are you the one from the rumors?",
						"japanese": "…来たか。お前がその噂の主か？",
						"chinese": "……你来了。你就是传闻中的那个人吗？",
						"french": "...Vous êtes là. Êtes-vous celui dont les rumeurs parlent ?",
						"spanish": "...Has venido. ¿Eres el dueño de esos rumores?",
						"vietnamese": "...Đã đến rồi. Ngươi là chủ nhân của những lời đồn đó sao?",
						"thai": "...มาแล้วสินะ เจ้าคือคนที่ถูกเล่าลือหรือ?",
						"hindi": "...तुम यहाँ हो। क्या तुम वही हो जिसके बारे में अफवाहें हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是…谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngài là... ai?",
						"thai": "ท่านคือ... ใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "난 시더. 이 숲의 잊혀진 기록을 파고드는 자.",
						"english": "I am Sider. One who unearths the forgotten records of this forest.",
						"japanese": "私はシダー。この森の忘れ去られた記録を掘り起こす者だ。",
						"chinese": "我是西德。挖掘这片森林被遗忘记录的人。",
						"french": "Je suis Sider. Celui qui déterre les récits oubliés de cette forêt.",
						"spanish": "Soy Sider. Quien desentierra los registros olvidados de este bosque.",
						"vietnamese": "Tôi là Sider. Kẻ khai quật những ghi chép bị lãng quên của khu rừng này.",
						"thai": "ฉันคือไซเดอร์ ผู้ที่ขุดคุ้ยบันทึกที่ถูกลืมเลือนของป่าแห่งนี้",
						"hindi": "मैं सिडर हूँ। वह जो इस जंगल के भूले हुए अभिलेखों को खोद निकालता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "당신이 찾는 '빛'에 대한 답을 줄 수도 있고.",
						"english": "And I might have answers regarding the 'light' you seek.",
						"japanese": "お前が探す「光」についての答えを、私が持っているかもしれない。",
						"chinese": "我或许能为你寻找的“光”提供答案。",
						"french": "Et je pourrais avoir des réponses concernant la 'lumière' que vous cherchez.",
						"spanish": "Y quizás tenga respuestas sobre la 'luz' que buscas.",
						"vietnamese": "Và tôi có thể có câu trả lời về 'ánh sáng' mà ngài đang tìm kiếm.",
						"thai": "และฉันอาจจะมีคำตอบเกี่ยวกับ 'แสง' ที่เจ้าตามหา",
						"hindi": "और शायद मेरे पास उस 'रोशनी' के बारे में जवाब हों जिसकी तुम्हें तलाश है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "이 숲에는 '길 잃은 자를 인도하는 별'이라 불리던 등불 전설이 있어.",
						"english": "In this forest, there's a legend of a lamp called 'The Star Guiding the Lost'.",
						"japanese": "この森には、「道に迷いし者を導く星」と呼ばれる灯火の伝説がある。",
						"chinese": "这片森林里，有一个被称为“指引迷途者的星辰”的灯笼传说。",
						"french": "Dans cette forêt, il y a une légende d'une lanterne appelée « L'Étoile Guidant les Perdus ».",
						"spanish": "En este bosque, existe la leyenda de una lámpara llamada 'La Estrella que Guía a los Perdidos'.",
						"vietnamese": "Trong khu rừng này, có một truyền thuyết về chiếc đèn lồng được gọi là 'Ngôi sao dẫn lối cho những người lạc lối'.",
						"thai": "ในป่าแห่งนี้ มีตำนานตะเกียงที่ถูกเรียกว่า 'ดวงดาวนำทางผู้หลงทาง'",
						"hindi": "इस जंगल में, 'भटके हुए को राह दिखाने वाला तारा' नामक एक दीपक की किंवदंती है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "등불이요?",
						"english": "The lamp?",
						"japanese": "灯火、ですか？",
						"chinese": "灯火？",
						"french": "La lanterne ?",
						"spanish": "¿La lámpara?",
						"vietnamese": "Ngọn đèn sao?",
						"thai": "โคมไฟเหรอครับ/คะ?",
						"hindi": "दीपक?"
					}
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "응. 고대의 신성한 의식으로 유지되던 빛이었지.",
						"english": "Yes. It was a light sustained by an ancient, sacred ritual.",
						"japanese": "ああ。古の聖なる儀式によって保たれていた光だった。",
						"chinese": "嗯。那是古老神圣仪式维系的灯火。",
						"french": "Oui. C'était une lumière maintenue par un ancien rituel sacré.",
						"spanish": "Sí. Era una luz sostenida por un antiguo y sagrado ritual.",
						"vietnamese": "Ừm. Đó là ánh sáng được duy trì bởi một nghi thức thiêng liêng cổ xưa.",
						"thai": "ใช่ มันคือแสงที่คงอยู่ด้วยพิธีกรรมศักดิ์สิทธิ์โบราณ",
						"hindi": "हाँ। यह एक प्राचीन, पवित्र अनुष्ठान से कायम रहने वाला प्रकाश था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "하지만 그 의식이 끊겼어. 오래 전에.",
						"english": "But that ritual ceased. Long ago.",
						"japanese": "だが、その儀式は途絶えた。遥か昔に。",
						"chinese": "但那个仪式中断了。很久以前就中断了。",
						"french": "Mais ce rituel a cessé. Il y a longtemps.",
						"spanish": "Pero ese ritual cesó. Hace mucho tiempo.",
						"vietnamese": "Nhưng nghi thức đó đã bị cắt đứt. Từ rất lâu rồi.",
						"thai": "แต่พิธีกรรมนั้นได้หยุดลงแล้ว นานมาแล้ว",
						"hindi": "लेकिन वह अनुष्ठान टूट गया। बहुत पहले।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "의식이 끊기자 등불은 표류하게 됐어.",
						"english": "Once the ritual ceased, the lamp began to drift.",
						"japanese": "儀式が途絶えると、灯火はさまよい始めた。",
						"chinese": "仪式中断后，灯火便开始漂流。",
						"french": "Une fois le rituel rompu, la lanterne s'est mise à errer.",
						"spanish": "Una vez que el ritual cesó, la lámpara comenzó a vagar.",
						"vietnamese": "Khi nghi thức bị cắt đứt, ngọn đèn bắt đầu trôi dạt.",
						"thai": "เมื่อพิธีกรรมสิ้นสุดลง โคมไฟก็เริ่มร่อนเร่",
						"hindi": "अनुष्ठान टूटते ही दीपक भटकने लगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "표류요?",
						"english": "Drifting?",
						"japanese": "さまよう、ですか？",
						"chinese": "漂流？",
						"french": "Errer ?",
						"spanish": "¿Vagar?",
						"vietnamese": "Trôi dạt sao?",
						"thai": "ร่อนเร่เหรอครับ/คะ?",
						"hindi": "भटकना?"
					}
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "완성되지 못한 의식의 파편들을 찾아 헤맬 가능성이 있어.",
						"english": "It's possible it's searching for fragments of the incomplete ritual.",
						"japanese": "未完成の儀式の破片を探し求めてさまよっている可能性がある。",
						"chinese": "它可能会寻找未完成仪式的碎片而四处游荡。",
						"french": "Il est possible qu'elle erre à la recherche de fragments du rituel incomplet.",
						"spanish": "Es posible que esté buscando fragmentos del ritual incompleto.",
						"vietnamese": "Nó có thể đang lang thang tìm kiếm những mảnh vỡ của nghi thức chưa hoàn thành.",
						"thai": "เป็นไปได้ว่ามันกำลังตามหาเศษเสี้ยวของพิธีกรรมที่ไม่สมบูรณ์",
						"hindi": "संभव है कि यह अधूरे अनुष्ठान के टुकड़ों की तलाश में भटक रहा हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "그게 지금 당신이 쫓는 '빛'의 정체일 수도 있지.",
						"english": "That might be the true identity of the 'light' you're chasing.",
						"japanese": "それが今、あなたが追っている『光』の正体かもしれない。",
						"chinese": "那或许就是你现在追逐的“光”的真正身份。",
						"french": "C'est peut-être la véritable identité de la 'lumière' que vous poursuivez.",
						"spanish": "Esa podría ser la verdadera identidad de la 'luz' que persigues.",
						"vietnamese": "Đó có thể là bản chất thật của 'ánh sáng' mà bạn đang theo đuổi.",
						"thai": "นั่นอาจเป็นตัวตนที่แท้จริงของ 'แสง' ที่คุณกำลังไล่ตามอยู่ก็ได้",
						"hindi": "वही 'प्रकाश' की असली पहचान हो सकती है जिसका आप अभी पीछा कर रहे हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "cedar",
					"content": {
						"korean": "등불은 완성을 갈구할 거야. 파편을 모으기 위해서라면…",
						"english": "The lamp will yearn for completion. To gather its fragments...",
						"japanese": "灯火は完成を渇望するだろう。破片を集めるためなら…",
						"chinese": "灯火会渴望完整。为了收集碎片，它会…",
						"french": "La lanterne aspirera à l'achèvement. Pour rassembler ses fragments...",
						"spanish": "La lámpara anhelará la compleción. Para reunir sus fragmentos...",
						"vietnamese": "Ngọn đèn sẽ khao khát sự hoàn chỉnh. Để thu thập các mảnh vỡ...",
						"thai": "โคมไฟจะโหยหาความสมบูรณ์ หากเพื่อรวบรวมเศษเสี้ยวของมันแล้ว…",
						"hindi": "दीपक पूर्णता के लिए तरसेगा। अपने टुकड़ों को इकट्ठा करने के लिए..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무엇이든 할 거라는 말인가요?",
						"english": "...it will do anything?",
						"japanese": "…何でも、するということですか？",
						"chinese": "…它会不择手段吗？",
						"french": "...elle fera n'importe quoi ?",
						"spanish": "¿...hará cualquier cosa?",
						"vietnamese": "...nó sẽ làm bất cứ điều gì sao?",
						"thai": "…จะทำทุกอย่างเลยเหรอครับ/คะ?",
						"hindi": "...कुछ भी करेगा?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "이 숲 깊숙한 곳에서, 밤마다 기이한 속삭임이 들려와.",
						"english": "Deep within this forest, strange whispers can be heard every night.",
						"japanese": "この森の奥深くで、夜ごと奇妙なささやきが聞こえる。",
						"chinese": "在这森林深处，每晚都能听到奇怪的低语。",
						"french": "Au plus profond de cette forêt, d'étranges murmures se font entendre chaque nuit.",
						"spanish": "En lo profundo de este bosque, extraños susurros se escuchan cada noche.",
						"vietnamese": "Sâu trong khu rừng này, mỗi đêm đều có những tiếng thì thầm kỳ lạ vang lên.",
						"thai": "ลึกเข้าไปในป่าแห่งนี้ ทุกคืนจะได้ยินเสียงกระซิบแปลกๆ",
						"hindi": "इस जंगल की गहराई में, हर रात अजीब फुसफुसाहट सुनाई देती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "고대 주술의 읊조림처럼… 계속 반복돼.",
						"english": "Like an ancient incantation... it keeps repeating.",
						"japanese": "古の呪文の詠唱のように… 繰り返される。",
						"chinese": "仿佛古老咒语的低语… 不断重复着。",
						"french": "Comme un ancien sortilège murmuré... ça se répète sans cesse.",
						"spanish": "Como el murmullo de un antiguo conjuro... no deja de repetirse.",
						"vietnamese": "Như lời nguyền cổ xưa... nó cứ lặp đi lặp lại.",
						"thai": "ราวกับเสียงร่ายเวทโบราณ... วนซ้ำไปไม่สิ้นสุด",
						"hindi": "जैसे किसी प्राचीन मंत्र का जाप… बार-बार दोहराया जा रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…설마, 그게 의식의 파편인가요?",
						"english": "...Could it be, a fragment of the ritual?",
						"japanese": "…まさか、それが儀式の破片なのですか？",
						"chinese": "…难道，那是仪式的碎片吗？",
						"french": "...Serait-ce un fragment du rituel ?",
						"spanish": "...¿Será acaso un fragmento del ritual?",
						"vietnamese": "...Lẽ nào, đó là mảnh vỡ của nghi thức?",
						"thai": "...หรือว่า นั่นคือเศษเสี้ยวของพิธีกรรม?",
						"hindi": "...कहीं, यह किसी अनुष्ठान का टुकड़ा तो नहीं?"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기이한 속삭임이 울려 퍼지는 공간. 거대한 그림자가 모습을 드러냈다.",
						"english": "A space filled with eerie whispers. A colossal shadow appeared.",
						"japanese": "奇妙な囁きが響く空間。巨大な影が姿を現した。",
						"chinese": "诡异的低语声回荡在空间中。一道巨大的身影显露出来。",
						"french": "Un espace résonnant de murmures étranges. Une ombre colossale apparut.",
						"spanish": "Un espacio resonando con susurros extraños. Una sombra colosal apareció.",
						"vietnamese": "Một không gian vang vọng những lời thì thầm kỳ lạ. Một bóng đen khổng lồ hiện ra.",
						"thai": "ห้วงอวกาศที่เต็มไปด้วยเสียงกระซิบอันน่าขนลุก เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "एक अजीब फुसफुसाहट से गूंजता स्थान। एक विशालकाय छाया प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…왔구나. 이 파편을 탐하는 어리석은 자.",
						"english": "...You've come. Foolish one, who covets this fragment.",
						"japanese": "…来たか。この破片を貪る愚かな者よ。",
						"chinese": "…你来了。觊觎这碎片的愚蠢之人。",
						"french": "...Te voilà. Insensé, qui convoites ce fragment.",
						"spanish": "...Has venido. Necio, que codicias este fragmento.",
						"vietnamese": "...Ngươi đã đến. Kẻ ngu ngốc thèm khát mảnh vỡ này.",
						"thai": "...เจ้ามาแล้วสินะ เจ้าโง่เขลาผู้โลภเศษเสี้ยวนี้",
						"hindi": "...तुम आ गए। मूर्ख, जो इस टुकड़े का लालच करते हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 등불의 주인인가?",
						"english": "Are you... the master of the lamp?",
						"japanese": "貴様が… 灯火の主か？",
						"chinese": "你就是… 灯火的主人吗？",
						"french": "Es-tu... le maître de la lanterne ?",
						"spanish": "¿Eres tú... el amo de la lámpara?",
						"vietnamese": "Ngươi… là chủ nhân của ngọn đèn sao?",
						"thai": "เจ้าคือ... เจ้าของตะเกียงงั้นหรือ?",
						"hindi": "क्या तुम... दीपक के स्वामी हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "주인? 난 그저… 완성될 뿐. 방해는 용납치 않는다.",
						"english": "Master? I merely... complete myself. Interference will not be tolerated.",
						"japanese": "主？ 私はただ… 完成するだけだ。妨害は許さない。",
						"chinese": "主人？我只是… 即将完成。不容许任何干扰。",
						"french": "Maître ? Je ne fais que... m'accomplir. Toute interférence sera intolérable.",
						"spanish": "¿Amo? Yo solo... me completo. No toleraré ninguna interferencia.",
						"vietnamese": "Chủ nhân? Ta chỉ… hoàn thành bản thân thôi. Sự cản trở sẽ không được tha thứ.",
						"thai": "เจ้าของ? ข้าเพียงแค่... กำลังจะสมบูรณ์ การขัดขวางย่อมไม่อาจยอมรับได้",
						"hindi": "स्वामी? मैं तो बस... पूरा हो रहा हूँ। हस्तक्षेप बर्दाश्त नहीं किया जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 의식을 막으려 한다면… 너희도 파편이 될 뿐이다.",
						"english": "If you try to stop my ritual... you too will become mere fragments.",
						"japanese": "私の儀式を止めようとするのなら… お前たちも破片となるだけだ。",
						"chinese": "如果你们想阻止我的仪式… 你们也只会化为碎片。",
						"french": "Si vous tentez d'arrêter mon rituel... vous ne deviendrez aussi que de simples fragments.",
						"spanish": "Si intentáis detener mi ritual... vosotros también os convertiréis en meros fragmentos.",
						"vietnamese": "Nếu các ngươi dám ngăn cản nghi thức của ta… các ngươi cũng sẽ chỉ trở thành mảnh vỡ mà thôi.",
						"thai": "หากเจ้าพยายามหยุดยั้งพิธีกรรมของข้า... เจ้าก็จะกลายเป็นเพียงเศษเสี้ยวเช่นกัน",
						"hindi": "यदि तुम मेरे अनुष्ठान को रोकने की कोशिश करोगे... तो तुम भी केवल टुकड़े बन जाओगे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 진실은 파편 속에 영원히 잠들리라.",
						"english": "Insignificant beings… The truth shall forever sleep among the fragments.",
						"japanese": "取るに足らぬ者たちよ… 真実は永遠に破片の中で眠るだろう。",
						"chinese": "卑微之物…真相将永远沉睡于碎片之中。",
						"french": "Créatures insignifiantes… La vérité dormira éternellement parmi les fragments.",
						"spanish": "Seres insignificantes… La verdad dormirá para siempre entre los fragmentos.",
						"vietnamese": "Những kẻ nhỏ bé… Sự thật sẽ vĩnh viễn ngủ yên trong các mảnh vỡ.",
						"thai": "พวกไร้ค่า… ความจริงจะหลับใหลอยู่ในเศษซากตลอดไป",
						"hindi": "तुच्छ प्राणी… सत्य टुकड़ों में सदा के लिए सो जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기 못 해.",
						"english": "…I can't give up yet.",
						"japanese": "…まだ諦められない。",
						"chinese": "…我还没放弃。",
						"french": "…Je ne peux pas encore abandonner.",
						"spanish": "…Aún no puedo rendirme.",
						"vietnamese": "…Tôi chưa thể bỏ cuộc.",
						"thai": "…ยังยอมแพ้ไม่ได้",
						"hindi": "…अभी हार नहीं मान सकता।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 의식은 계속될 것이다.",
						"english": "Foolish. The ritual will continue.",
						"japanese": "愚か者め。儀式は続くだろう。",
						"chinese": "愚蠢。仪式将继续进行。",
						"french": "Imbécile. Le rituel continuera.",
						"spanish": "Necios. El ritual continuará.",
						"vietnamese": "Thật ngu xuẩn. Nghi lễ sẽ tiếp tục.",
						"thai": "โง่เขลา พิธีกรรมจะดำเนินต่อไป",
						"hindi": "मूर्ख। अनुष्ठान जारी रहेगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나의… 의식은… 멈추지 않아…",
						"english": "Ugh... My... ritual... will not stop...",
						"japanese": "くっ… 私の… 儀式は… 止まらない…",
						"chinese": "呃… 我的… 仪式… 不会停止…",
						"french": "Ugh... Mon... rituel... ne s'arrêtera pas...",
						"spanish": "Ugh... Mi... ritual... no se detendrá...",
						"vietnamese": "Khặc… Nghi thức… của ta… sẽ không dừng lại…",
						"thai": "อึก... พิธีกรรม... ของข้า... จะไม่หยุดลง...",
						"hindi": "उफ़... मेरा... अनुष्ठान... रुकेगा नहीं..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈췄어. 이제… 끝났어.",
						"english": "It stopped. Now... it's over.",
						"japanese": "止まった。もう… 終わった。",
						"chinese": "停了。现在… 结束了。",
						"french": "C'est arrêté. Maintenant... c'est fini.",
						"spanish": "Se detuvo. Ahora... ha terminado.",
						"vietnamese": "Nó đã dừng lại. Bây giờ… kết thúc rồi.",
						"thai": "มันหยุดแล้ว ตอนนี้... จบลงแล้ว",
						"hindi": "यह रुक गया। अब... यह खत्म हो गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스는 사라졌지만, 숲의 기이한 속삭임은 여전히 귓가를 맴돌았다.",
						"english": "The mysterious boss vanished, but the eerie whispers of the forest still lingered in their ears.",
						"japanese": "正体不明のボスは消え去ったが、森の奇妙な囁きはまだ耳元を漂っていた。",
						"chinese": "身份不明的boss消失了，但森林中诡异的低语声仍在耳边回荡。",
						"french": "Le boss mystérieux disparut, mais les étranges murmures de la forêt persistaient encore à leurs oreilles.",
						"spanish": "El jefe misterioso desapareció, pero los extraños susurros del bosque aún persistían en sus oídos.",
						"vietnamese": "Con boss bí ẩn đã biến mất, nhưng những lời thì thầm kỳ lạ của khu rừng vẫn còn vương vấn bên tai.",
						"thai": "บอสปริศนาหายตัวไปแล้ว แต่เสียงกระซิบอันน่าขนลุกของป่ายังคงวนเวียนอยู่ในหู",
						"hindi": "अज्ञात बॉस गायब हो गया, लेकिन जंगल की अजीब फुसफुसाहट अभी भी उनके कानों में गूंज रही थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "진정한 의식은… 아직 시작되지 않았을 뿐이었다.",
						"english": "The true ritual… had merely not begun yet.",
						"japanese": "真の儀式は…まだ始まっていなかっただけだ。",
						"chinese": "真正的仪式…只不过尚未开始。",
						"french": "Le véritable rituel… n'avait pas encore commencé.",
						"spanish": "El verdadero ritual… aún no había comenzado.",
						"vietnamese": "Nghi lễ thật sự… chỉ là chưa bắt đầu mà thôi.",
						"thai": "พิธีกรรมที่แท้จริง… เป็นเพียงยังไม่เริ่มต้นเท่านั้น",
						"hindi": "वास्तविक अनुष्ठान… अभी शुरू ही नहीं हुआ था।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 오랜 침묵 속에 고대 기록을 숨겼다.",
			"어떤 이들은 등불을 신성하게 여겼으나, 그 빛은 길을 잃었다.",
			"완성되지 못한 의식의 파편. 그것이 밤마다 숲을 잠식했다.",
			"진실을 좇는 발걸음마다 죄책감의 그림자가 더욱 짙어진다."
		],
		"english": [
			"The forest hid ancient records in long silence.",
			"Some deemed the lamp sacred, yet its light was lost.",
			"Fragments of an incomplete ritual. They devoured the forest each night.",
			"With every step chasing the truth, the shadow of guilt deepens."
		],
		"japanese": [
			"森は長い沈黙の中に古代の記録を隠した。",
			"ある者は灯火を神聖視したが、その光は道を失った。",
			"未完成の儀式の破片。それが夜ごとに森を侵食した。",
			"真実を追う一歩ごとに、罪悪感の影がさらに濃くなる。"
		],
		"chinese": [
			"森林在漫长的沉默中隐藏着古老的记录。",
			"有些人认为灯是神圣的，但它的光芒迷失了。",
			"未完成仪式的碎片。它们每晚吞噬着森林。",
			"每一步追逐真相，罪恶的阴影就越深。"
		],
		"french": [
			"La forêt cachait d'anciens récits dans un long silence.",
			"Certains considéraient la lanterne comme sacrée, mais sa lumière s'est perdue.",
			"Des fragments d'un rituel inachevé. Ils dévoraient la forêt chaque nuit.",
			"À chaque pas vers la vérité, l'ombre de la culpabilité s'épaissit."
		],
		"spanish": [
			"El bosque escondía antiguos registros en un largo silencio.",
			"Algunos consideraban la lámpara sagrada, pero su luz se perdió.",
			"Fragmentos de un ritual incompleto. Devoraban el bosque cada noche.",
			"Con cada paso tras la verdad, la sombra de la culpa se hace más densa."
		],
		"vietnamese": [
			"Rừng sâu đã giấu những ghi chép cổ xưa trong sự im lặng dài.",
			"Một số người coi chiếc đèn là thiêng liêng, nhưng ánh sáng của nó đã lạc lối.",
			"Những mảnh vỡ của nghi lễ chưa hoàn thành. Chúng nuốt chửng khu rừng mỗi đêm.",
			"Với mỗi bước chân tìm kiếm sự thật, bóng đêm tội lỗi càng thêm sâu đậm."
		],
		"thai": [
			"ป่าซ่อนบันทึกโบราณไว้ในความเงียบงันอันยาวนาน",
			"บางคนถือว่าตะเกียงศักดิ์สิทธิ์ แต่แสงของมันได้หายไป",
			"ชิ้นส่วนของพิธีกรรมที่ไม่สมบูรณ์ สิ่งเหล่านั้นกัดกินป่าทุกคืน",
			"ทุกย่างก้าวที่ตามหาความจริง เงาของความรู้สึกผิดยิ่งทวีความเข้มข้นขึ้น"
		],
		"hindi": [
			"जंगल ने अपनी लंबी चुप्पी में प्राचीन अभिलेखों को छिपा रखा था।",
			"कुछ ने दीपक को पवित्र माना, फिर भी उसकी रोशनी खो गई।",
			"अधूरे अनुष्ठान के टुकड़े। वे हर रात जंगल को खा जाते थे।",
			"सच्चाई का पीछा करने वाले हर कदम के साथ, अपराधबोध की छाया और गहरी होती जाती है।"
		]
	}
} as const;
