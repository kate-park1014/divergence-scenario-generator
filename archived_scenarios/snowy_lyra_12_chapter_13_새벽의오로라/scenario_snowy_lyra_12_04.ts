export const scenario_snowy_lyra_12_04 = {
	"scenario_id": "snowy_lyra_12_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오로라의 빛은 언제나 길을 안내했다.",
			"하지만 그 빛이 드리운 그림자는 점점 짙어지고 있었다.",
			"에이라는 알았다. 이 이끌림 속에, 숨겨진 진실을.",
			"이 '고향'은, 우리가 알던 그곳이 아니었다.",
			"왜곡된 인도는, 끝없는 안식으로 향하고 있었다."
		],
		"english": [
			"The light of the aurora always guided the way.",
			"But the shadows cast by that light were growing deeper.",
			"Aira knew. Within this pull, a hidden truth.",
			"This 'homeland' was not the place we knew.",
			"The distorted guidance was leading to an endless rest."
		],
		"japanese": [
			"オーロラの光は常に道を導いた。",
			"しかし、その光が落とす影は次第に濃くなっていった。",
			"アイラは知っていた。この導きの先に、隠された真実を。",
			"この「故郷」は、私たちが知る場所ではなかった。",
			"歪んだ導きは、終わりのない安息へと向かっていた。"
		],
		"chinese": [
			"极光之光始终指引着道路。",
			"然而，那光芒投下的阴影却越来越深。",
			"艾拉知道。在这牵引之中，隐藏着真相。",
			"这个“故乡”，并非我们所知的那个地方。",
			"扭曲的指引，正导向无尽的安息。"
		],
		"french": [
			"La lumière de l'aurore a toujours guidé le chemin.",
			"Mais les ombres projetées par cette lumière s'épaississaient.",
			"Aira savait. Dans cette attraction, une vérité cachée.",
			"Cette 'patrie' n'était pas l'endroit que nous connaissions.",
			"La guidance déformée menait à un repos sans fin."
		],
		"spanish": [
			"La luz de la aurora siempre guio el camino.",
			"Pero las sombras proyectadas por esa luz se hacían cada vez más profundas.",
			"Aira lo sabía. En esta atracción, una verdad oculta.",
			"Esta 'patria' no era el lugar que conocíamos.",
			"La guía distorsionada conducía a un descanso eterno."
		],
		"vietnamese": [
			"Ánh sáng cực quang luôn dẫn lối.",
			"Nhưng bóng tối do ánh sáng ấy đổ xuống ngày càng sâu đậm.",
			"Aira biết. Trong sự dẫn dắt này, có một sự thật ẩn giấu.",
			"Quê hương này, không phải nơi chúng ta từng biết.",
			"Sự dẫn dắt lệch lạc đang hướng tới một sự an nghỉ vĩnh hằng."
		],
		"thai": [
			"แสงของแสงเหนือส่องนำทางเสมอ",
			"แต่เงาที่แสงนั้นทอดลงกลับมืดมิดลงเรื่อยๆ",
			"ไอรา่รู้ดี ในแรงดึงดูดนี้ มีความจริงที่ซ่อนอยู่",
			"'บ้านเกิด' นี้ ไม่ใช่ที่ที่เราเคยรู้จัก",
			"การชี้นำที่บิดเบือนกำลังนำไปสู่การพักผ่อนอันไม่มีที่สิ้นสุด"
		],
		"hindi": [
			"अरोरा का प्रकाश हमेशा मार्गदर्शक रहा।",
			"किंतु उस प्रकाश से पड़ी परछाइयाँ गहरी होती जा रही थीं।",
			"ऐरा जानती थी। इस खिंचाव में, एक छिपा हुआ सच।",
			"यह 'मातृभूमि', वह स्थान नहीं थी जिसे हम जानते थे।",
			"विकृत मार्गदर्शन, अंतहीन विश्राम की ओर ले जा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 오로라… 뭔가 이상해.",
						"english": "This aurora... something's wrong.",
						"japanese": "このオーロラ…何かおかしい。",
						"chinese": "这极光……有点不对劲。",
						"french": "Cette aurore... quelque chose ne va pas.",
						"spanish": "Esta aurora... algo anda mal.",
						"vietnamese": "Cực quang này... có gì đó lạ.",
						"thai": "แสงเหนือนี้... มีบางอย่างแปลกๆ",
						"hindi": "यह अरोरा... कुछ तो गड़बड़ है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "익숙한 길은 점점 낯설게 변해갔다.",
						"english": "Familiar paths gradually became strange.",
						"japanese": "見慣れた道は次第に見知らぬものに変わっていった。",
						"chinese": "熟悉的道路渐渐变得陌生。",
						"french": "Les chemins familiers devenaient étranges.",
						"spanish": "Los caminos familiares se volvieron extraños.",
						"vietnamese": "Con đường quen thuộc dần trở nên xa lạ.",
						"thai": "เส้นทางที่คุ้นเคยค่อยๆ กลายเป็นแปลกหน้า",
						"hindi": "परिचित रास्ते धीरे-धीरे अजनबी होते गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "아눅이 말했던 게 이거였나? '고향'이 다르다고.",
						"english": "Was this what Anuk was talking about? That the 'homeland' was different.",
						"japanese": "アヌークが言ってたのはこれか？「故郷」が違うって。",
						"chinese": "这就是阿努克说的吗？“故乡”不同。",
						"french": "C'était ça dont Anuk parlait ? Que la 'patrie' était différente.",
						"spanish": "¿Era esto de lo que Anuk hablaba? Que la 'patria' era diferente.",
						"vietnamese": "Đây có phải là điều Anuk đã nói không? Rằng 'quê hương' khác.",
						"thai": "นี่คือสิ่งที่อานุกพูดถึงเหรอ? ว่า 'บ้านเกิด' ไม่เหมือนเดิม",
						"hindi": "क्या अनूक इसी के बारे में बात कर रही थी? कि 'मातृभूमि' अलग है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "계속 분석 중이야. 미세한 흐름의 왜곡이 보여.",
						"english": "Still analyzing. I'm seeing subtle distortions in the flow.",
						"japanese": "分析を続けている。微細な流れの歪みが見える。",
						"chinese": "仍在分析中。我看到了细微的流向扭曲。",
						"french": "Toujours en analyse. Je vois de subtiles distorsions dans le flux.",
						"spanish": "Sigo analizando. Veo sutiles distorsiones en el flujo.",
						"vietnamese": "Vẫn đang phân tích. Tôi thấy sự bóp méo nhẹ trong dòng chảy.",
						"thai": "ยังคงวิเคราะห์อยู่ ฉันเห็นการบิดเบือนเล็กน้อยในกระแส",
						"hindi": "अभी भी विश्लेषण चल रहा है। मुझे प्रवाह में सूक्ष्म विकृतियाँ दिख रही हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 오로라, 우리를 어디로 데려가는 걸까?",
						"english": "This aurora, where is it taking us?",
						"japanese": "このオーロラ、私たちをどこへ連れて行くのだろう？",
						"chinese": "这极光，会把我们带到哪里去？",
						"french": "Cette aurore, où nous emmène-t-elle ?",
						"spanish": "Esta aurora, ¿a dónde nos lleva?",
						"vietnamese": "Cực quang này, sẽ đưa chúng ta đi đâu?",
						"thai": "แสงเหนือนี้ จะพาเราไปที่ไหนกันนะ?",
						"hindi": "यह अरोरा, हमें कहाँ ले जा रही है?"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "확실해. 이 오로라의 흐름은… 자연스럽지 않아.",
						"english": "I'm certain. This aurora's flow... it's unnatural.",
						"japanese": "間違いない。このオーロラの流れは…不自然だ。",
						"chinese": "我很确定。这极光的流动……不自然。",
						"french": "J'en suis certain. Ce flux d'aurore... il n'est pas naturel.",
						"spanish": "Estoy seguro. El flujo de esta aurora... no es natural.",
						"vietnamese": "Chắc chắn rồi. Luồng cực quang này... không tự nhiên chút nào.",
						"thai": "แน่ใจเลย การไหลของแสงเหนือนี้... ไม่เป็นธรรมชาติ",
						"hindi": "निश्चित रूप से। इस अरोरा का प्रवाह... यह अप्राकृतिक है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "누군가 의도적으로 경로를 뒤틀어 놓은 것 같아.",
						"english": "Someone seems to have intentionally twisted its path.",
						"japanese": "誰かが意図的に経路を歪めたようだ。",
						"chinese": "好像有人故意扭曲了它的路径。",
						"french": "Quelqu'un semble avoir intentionnellement dévié son chemin.",
						"spanish": "Parece que alguien ha torcido su camino intencionalmente.",
						"vietnamese": "Có vẻ như ai đó đã cố tình làm lệch hướng nó.",
						"thai": "ดูเหมือนมีใครบางคนจงใจบิดเบือนเส้นทางของมัน",
						"hindi": "लगता है किसी ने जानबूझकर इसका रास्ता मोड़ दिया है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 지금까지 온 길도…",
						"english": "Then the path we've taken so far...",
						"japanese": "では、我々が今まで来た道も…",
						"chinese": "那么我们迄今为止走过的路也……",
						"french": "Alors le chemin que nous avons pris jusqu'ici...",
						"spanish": "Entonces el camino que hemos tomado hasta ahora...",
						"vietnamese": "Vậy thì con đường chúng ta đã đi bấy lâu nay...",
						"thai": "ถ้าอย่างนั้นเส้นทางที่เราผ่านมาทั้งหมดก็...",
						"hindi": "तो जिस रास्ते से हम अब तक आए हैं..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 그들 앞을 가로막았다.",
						"english": "A colossal shadow loomed before them.",
						"japanese": "巨大な影が彼らの行く手を阻んだ。",
						"chinese": "一个巨大的身影挡住了他们的去路。",
						"french": "Une ombre colossale barra leur chemin.",
						"spanish": "Una sombra colosal se interpuso en su camino.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang trước mặt họ.",
						"thai": "เงามหึมาขวางกั้นอยู่เบื้องหน้าพวกเขา",
						"hindi": "एक विशाल छाया उनके सामने आ खड़ी हुई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "길을 잃었는가, 필멸자여.",
						"english": "Are you lost, mortal?",
						"japanese": "道に迷ったか、定命の者よ。",
						"chinese": "迷路了吗，凡人？",
						"french": "Es-tu égaré, mortel ?",
						"spanish": "¿Estás perdido, mortal?",
						"vietnamese": "Ngươi lạc đường rồi sao, phàm nhân?",
						"thai": "เจ้าหลงทางหรือ, มนุษย์?",
						"hindi": "क्या तुम भटक गए हो, नश्वर?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "물러서!",
						"english": "Stand back!",
						"japanese": "下がれ！",
						"chinese": "退下！",
						"french": "Reculez !",
						"spanish": "¡Retrocede!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हटो!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "발견했어. 룬 문자의 분석 결과야.",
						"english": "I found it. It's the analysis result of the runic characters.",
						"japanese": "見つけた。ルーン文字の分析結果だ。",
						"chinese": "我找到了。这是符文分析结果。",
						"french": "Je l'ai trouvé. C'est le résultat de l'analyse des runes.",
						"spanish": "Lo encontré. Es el resultado del análisis de los caracteres rúnicos.",
						"vietnamese": "Tìm thấy rồi. Đây là kết quả phân tích chữ Rune.",
						"thai": "เจอแล้ว นี่คือผลการวิเคราะห์อักษรรูน",
						"hindi": "मुझे मिल गया। यह रूण अक्षरों के विश्लेषण का परिणाम है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 오로라가 약속하는 '고향'은… 우리가 아는 그곳이 아니야.",
						"english": "The 'home' this aurora promises... isn't the one we know.",
						"japanese": "このオーロラが約束する「故郷」は…我々が知る場所とは違う。",
						"chinese": "这极光所承诺的“家园”……不是我们所知的那个。",
						"french": "Le 'foyer' que cette aurore promet... n'est pas celui que nous connaissons.",
						"spanish": "El 'hogar' que promete esta aurora... no es el que conocemos.",
						"vietnamese": "'Quê hương' mà cực quang này hứa hẹn... không phải là nơi chúng ta biết.",
						"thai": "'บ้าน' ที่แสงเหนือนี้สัญญาไว้... ไม่ใช่ที่ที่เรารู้จัก",
						"hindi": "यह अरोरा जिस 'घर' का वादा करती है... वह वह जगह नहीं है जिसे हम जानते हैं।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、一体何なんだ？",
						"chinese": "那到底是什么？",
						"french": "Alors, c'est quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì rốt cuộc nó là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर यह क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "영원한… 안식처.",
						"english": "An eternal... resting place.",
						"japanese": "永遠の…安息の地。",
						"chinese": "一个永恒的……安息之所。",
						"french": "Un... repos éternel.",
						"spanish": "Un eterno... lugar de descanso.",
						"vietnamese": "Một... nơi an nghỉ vĩnh hằng.",
						"thai": "สถานที่พักผ่อน... ชั่วนิรันดร์",
						"hindi": "एक शाश्वत... विश्राम स्थल।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "안식처라고? 그럼 우린 죽으러 가고 있었던 거야?",
						"english": "A sanctuary? So we were heading to our deaths?",
						"japanese": "安息の地だと？じゃあ、俺たちは死に向かっていたのか？",
						"chinese": "庇护所？那我们一直在走向死亡吗？",
						"french": "Un sanctuaire ? Alors on allait à notre mort ?",
						"spanish": "¿Un santuario? ¿Entonces íbamos a nuestra muerte?",
						"vietnamese": "Nơi trú ẩn ư? Vậy là chúng ta đang đi đến cái chết sao?",
						"thai": "ที่พำนัก? งั้นเรากำลังมุ่งหน้าสู่ความตายงั้นเหรอ?",
						"hindi": "आश्रय? तो हम मौत की ओर बढ़ रहे थे?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 오로라는 생명을 거두어들이는 인도자였어.",
						"english": "This aurora was a guide, collecting lives.",
						"japanese": "このオーロラは命を刈り取る案内人だった。",
						"chinese": "这极光是收割生命的引路人。",
						"french": "Cette aurore était un guide, moissonnant les vies.",
						"spanish": "Esta aurora era una guía que recolectaba vidas.",
						"vietnamese": "Cực quang này là kẻ dẫn đường, thu tóm sinh mạng.",
						"thai": "แสงเหนือนี้คือผู้นำทางที่เก็บเกี่ยวชีวิต",
						"hindi": "यह अरोरा एक मार्गदर्शक था, जीवन इकट्ठा कर रहा था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이대로 가면… 우리는 돌아올 수 없어.",
						"english": "If we go on like this... we can't come back.",
						"japanese": "このまま行けば… もう戻れない。",
						"chinese": "这样下去… 我们就回不去了。",
						"french": "Si nous continuons ainsi... nous ne pourrons pas revenir.",
						"spanish": "Si seguimos así... no podremos volver.",
						"vietnamese": "Cứ thế này… chúng ta sẽ không thể quay lại.",
						"thai": "ถ้าเราไปต่อแบบนี้... เราจะกลับมาไม่ได้",
						"hindi": "अगर हम ऐसे ही चलते रहे... तो हम वापस नहीं आ पाएंगे।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장! 전부 속임수였어.",
						"english": "Damn it! It was all a trick.",
						"japanese": "くそっ！全部、騙しだったのか。",
						"chinese": "该死！全都是骗局。",
						"french": "Bon sang ! Tout était une ruse.",
						"spanish": "¡Maldita sea! Todo fue un engaño.",
						"vietnamese": "Chết tiệt! Tất cả chỉ là lừa dối.",
						"thai": "ให้ตายสิ! มันเป็นแค่กลลวงทั้งหมด",
						"hindi": "धिक्कार है! यह सब एक चाल थी।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "두려워 말라. 너희의 고통은 끝날 것이다.",
						"english": "Fear not. Your suffering will end.",
						"japanese": "恐れるな。お前たちの苦痛は終わるだろう。",
						"chinese": "毋需恐惧。你们的痛苦将终结。",
						"french": "Ne craignez rien. Vos souffrances prendront fin.",
						"spanish": "No temáis. Vuestro sufrimiento terminará.",
						"vietnamese": "Đừng sợ hãi. Nỗi đau của các ngươi sẽ chấm dứt.",
						"thai": "อย่ากลัวเลย ความทุกข์ของเจ้าจะสิ้นสุดลง",
						"hindi": "डरो मत। तुम्हारा दुख समाप्त हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게 네놈이 말하는 '안식'이냐?",
						"english": "Is this the 'rest' you spoke of?",
						"japanese": "これがお前が言っていた「安息」か？",
						"chinese": "这就是你说的“安息”吗？",
						"french": "Est-ce là le « repos » dont tu parlais ?",
						"spanish": "¿Es este el 'descanso' del que hablabas?",
						"vietnamese": "Đây là \"sự an nghỉ\" ngươi đã nói sao?",
						"thai": "นี่คือ 'การพักผ่อน' ที่แกพูดถึงงั้นเหรอ?",
						"hindi": "क्या यह वही 'आराम' है जिसके बारे में तुमने बात की थी?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 영원히 깨어나지 않는 평화.",
						"english": "Yes. A peace from which you'll never awaken.",
						"japanese": "そうだ。永遠に目覚めぬ平和だ。",
						"chinese": "是的。永不苏醒的平静。",
						"french": "Oui. Une paix dont vous ne vous réveillerez jamais.",
						"spanish": "Sí. Una paz de la que nunca despertarás.",
						"vietnamese": "Phải. Một sự bình yên mà ngươi sẽ không bao giờ tỉnh giấc.",
						"thai": "ใช่ ความสงบที่จะไม่ตื่นขึ้นมาอีกเลย",
						"hindi": "हाँ। एक ऐसी शांति जिससे तुम कभी नहीं जागोगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 온 길은… 죽음으로 향하는 길이었어.",
						"english": "The path we took... was a path to death.",
						"japanese": "私たちが来た道は… 死へと向かう道だった。",
						"chinese": "我们走的路… 竟是通往死亡之路。",
						"french": "Le chemin que nous avons pris... était un chemin vers la mort.",
						"spanish": "El camino que tomamos... era un camino hacia la muerte.",
						"vietnamese": "Con đường chúng ta đã đi… là con đường dẫn đến cái chết.",
						"thai": "เส้นทางที่เรามา... คือเส้นทางสู่ความตาย",
						"hindi": "जिस रास्ते पर हम आए... वह मौत का रास्ता था।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은… 필멸자여… 이 길의 끝은… 정해져 있다….",
						"english": "Ugh... Foolish... mortals... The end of this path... is predetermined...",
						"japanese": "くっ…愚かな…定命の者よ…この道の終わりは…定められている…。",
						"chinese": "呃…愚蠢的…凡人啊…这条路的尽头…早已注定…",
						"french": "Urgh... Stupides... mortels... La fin de ce chemin... est prédéterminée...",
						"spanish": "Ugh... Necios... mortales... El fin de este camino... está predestinado...",
						"vietnamese": "Khụ... Hỡi kẻ phàm trần... ngu ngốc... Cuối con đường này... đã được định sẵn...",
						"thai": "อึก... เจ้ามนุษย์... ผู้โง่เขลา... จุดจบของเส้นทางนี้... ถูกกำหนดไว้แล้ว...",
						"hindi": "उफ़... मूर्ख... नश्वर... इस मार्ग का अंत... तय है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정해진 건 없어! 우리가 바꿀 거야!",
						"english": "Nothing is set! We'll change it!",
						"japanese": "決まったことなどない！私たちが変えるんだ！",
						"chinese": "没有什么注定的！我们会改变它！",
						"french": "Rien n'est écrit ! Nous allons changer ça !",
						"spanish": "¡Nada está decidido! ¡Nosotros lo cambiaremos!",
						"vietnamese": "Không có gì là định sẵn! Chúng ta sẽ thay đổi nó!",
						"thai": "ไม่มีอะไรถูกกำหนดไว้! เราจะเปลี่ยนมัน!",
						"hindi": "कुछ भी तय नहीं है! हम इसे बदलेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						1
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "오로라의 왜곡이… 잠시 멈춘 것 같아.",
						"english": "The aurora's distortion... seems to have paused for a moment.",
						"japanese": "オーロラの歪みが…一時的に止まったようだ。",
						"chinese": "极光的扭曲…似乎暂时停止了。",
						"french": "La distorsion de l'aurore... semble s'être arrêtée un instant.",
						"spanish": "La distorsión de la aurora... parece haberse detenido un momento.",
						"vietnamese": "Sự méo mó của cực quang... dường như đã tạm dừng một lúc.",
						"thai": "ความบิดเบือนของแสงเหนือ... ดูเหมือนจะหยุดลงชั่วขณะ",
						"hindi": "ध्रुवीय ज्योति की विकृति... कुछ देर के लिए रुक गई लगती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 자의 그림자는 사라졌다. 하지만 왜곡된 오로라의 진실은 아직 그 모습을 다 드러내지 않았다.",
						"english": "The shadow of the unknown figure vanished. But the truth of the distorted aurora has not yet fully revealed itself.",
						"japanese": "正体不明の者の影は消えた。しかし、歪んだオーロラの真実はまだその全貌を現していない。",
						"chinese": "身份不明者的身影消失了。但扭曲极光的真相尚未完全揭露。",
						"french": "L'ombre de l'inconnu a disparu. Mais la vérité de l'aurore déformée n'a pas encore entièrement révélé sa forme.",
						"spanish": "La sombra del desconocido desapareció. Pero la verdad de la aurora distorsionada aún no se ha revelado por completo.",
						"vietnamese": "Bóng dáng của kẻ vô danh đã biến mất. Nhưng sự thật về cực quang méo mó vẫn chưa hoàn toàn lộ diện.",
						"thai": "เงาของบุคคลนิรนามได้หายไปแล้ว แต่ความจริงเบื้องหลังแสงเหนือที่บิดเบือนยังไม่ถูกเปิดเผยออกมาทั้งหมด",
						"hindi": "अज्ञात व्यक्ति की परछाई गायब हो गई। लेकिन विकृत ध्रुवीय ज्योति का सच अभी पूरी तरह सामने नहीं आया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그들의 발걸음은 멈추지 않는다. 진짜 고향을 찾기 위한 여정은 계속된다.",
						"english": "Their footsteps do not falter. The journey to find the true home continues.",
						"japanese": "彼らの足取りは止まらない。本当の故郷を探す旅は続く。",
						"chinese": "他们的脚步不会停歇。寻找真正故乡的旅程仍在继续。",
						"french": "Leurs pas ne s'arrêtent pas. Le voyage pour trouver le vrai foyer continue.",
						"spanish": "Sus pasos no se detienen. El viaje para encontrar el verdadero hogar continúa.",
						"vietnamese": "Bước chân của họ không dừng lại. Hành trình tìm kiếm quê hương thật sự vẫn tiếp tục.",
						"thai": "ก้าวเดินของพวกเขาไม่หยุดนิ่ง การเดินทางเพื่อค้นหาบ้านเกิดที่แท้จริงยังคงดำเนินต่อไป",
						"hindi": "उनके कदम नहीं रुकते। सच्चे घर की तलाश का सफ़र जारी है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이제 모든 의문은 사라졌다. 너희의 '고향'이 여기다.",
						"english": "All doubts are gone now. This is your 'home'.",
						"japanese": "もうすべての疑問は消え去った。お前たちの「故郷」はここだ。",
						"chinese": "所有的疑问都已消散。这里就是你们的“故乡”。",
						"french": "Tous les doutes ont disparu. C'est ici votre « foyer ».",
						"spanish": "Todas las dudas han desaparecido. Este es vuestro 'hogar'.",
						"vietnamese": "Mọi nghi ngờ đã biến mất. \"Quê hương\" của các ngươi là đây.",
						"thai": "ความสงสัยทั้งหมดได้หายไปแล้ว นี่คือ 'บ้านเกิด' ของเจ้า",
						"hindi": "अब सभी संदेह दूर हो गए हैं। यह तुम्हारा 'घर' है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원한 평화를 누릴지어다.",
						"english": "Enjoy eternal peace.",
						"japanese": "永遠の平和を享受せよ。",
						"chinese": "愿你们享受永恒的平静。",
						"french": "Jouissez de la paix éternelle.",
						"spanish": "Disfrutad de la paz eterna.",
						"vietnamese": "Hãy tận hưởng sự bình yên vĩnh cửu.",
						"thai": "จงมีความสุขกับสันติสุขนิรันดร์",
						"hindi": "अनंत शांति का आनंद लो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "개소리! 여기가 우리가 찾던 고향일 리 없어!",
						"english": "Nonsense! This can't be the home we were looking for!",
						"japanese": "でたらめだ！ここが私たちが探していた故郷であるはずがない！",
						"chinese": "胡说！这里不可能是我们寻找的故乡！",
						"french": "N'importe quoi ! Ce ne peut pas être le foyer que nous cherchions !",
						"spanish": "¡Tonterías! ¡Este no puede ser el hogar que buscábamos!",
						"vietnamese": "Vô lý! Đây không thể là quê hương mà chúng ta tìm kiếm!",
						"thai": "เหลวไหล! ที่นี่ไม่น่าใช่บ้านเกิดที่เราตามหา!",
						"hindi": "बकवास! यह वह घर नहीं हो सकता जिसकी हम तलाश कर रहे थे!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 왜곡된 인도를… 반드시 막아야 해!",
						"english": "We must stop this twisted guidance!",
						"japanese": "この歪んだ導きを…必ず止めなければならない！",
						"chinese": "我们必须阻止这种扭曲的引导！",
						"french": "Nous devons absolument arrêter cette guidance déformée !",
						"spanish": "¡Debemos detener esta guía distorsionada!",
						"vietnamese": "Chúng ta phải ngăn chặn sự dẫn dắt méo mó này!",
						"thai": "เราต้องหยุดการชี้นำที่บิดเบือนนี้ให้ได้!",
						"hindi": "हमें इस विकृत मार्गदर्शन को अवश्य रोकना चाहिए!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜 고향은… 우리 손으로 찾아야 해!",
						"english": "The true home... we must find with our own hands!",
						"japanese": "本当の故郷は…自分たちの手で見つけなければならない！",
						"chinese": "真正的故乡…必须由我们亲手去寻找！",
						"french": "Le vrai foyer... nous devons le trouver de nos propres mains !",
						"spanish": "¡El verdadero hogar... debemos encontrarlo con nuestras propias manos!",
						"vietnamese": "Quê hương thật sự... chúng ta phải tự tay tìm lấy!",
						"thai": "บ้านเกิดที่แท้จริง… เราต้องตามหาด้วยมือของเราเอง!",
						"hindi": "सच्चा घर... हमें अपने हाथों से खोजना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 너희의 고향은… 이곳이었군.",
						"english": "Ultimately... your home... was here after all.",
						"japanese": "結局…お前たちの故郷は…ここだったようだな。",
						"chinese": "最终…你们的故乡…原来就是这里啊。",
						"french": "Au final... votre foyer... était ici après tout.",
						"spanish": "Al final... vuestro hogar... era este, después de todo.",
						"vietnamese": "Cuối cùng... quê hương của các ngươi... lại là nơi này.",
						"thai": "ในที่สุด... บ้านเกิดของพวกเจ้า... ก็คือที่นี่เองสินะ",
						"hindi": "आखिरकार... तुम्हारा घर... यही था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "영원히… 쉬어라…",
						"english": "Rest... forever...",
						"japanese": "永遠に…休め…",
						"chinese": "永远…安息吧…",
						"french": "Repose... pour l'éternité...",
						"spanish": "Descansad... para siempre...",
						"vietnamese": "Hãy yên nghỉ... vĩnh viễn...",
						"thai": "พักผ่อน... ตลอดไป...",
						"hindi": "हमेशा के लिए... आराम करो..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas encore fini...!",
						"spanish": "¡Todavía no ha terminado...!",
						"vietnamese": "Chưa… kết thúc đâu…!",
						"thai": "ยัง…ไม่จบ…!",
						"hindi": "अभी…खत्म नहीं हुआ…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이대로… 포기할 순 없어…!",
						"english": "I can't give up like this...!",
						"japanese": "このまま…諦められない…！",
						"chinese": "不能…就这样放弃…！",
						"french": "Je ne peux pas abandonner comme ça...!",
						"spanish": "¡No puedo rendirme así...!",
						"vietnamese": "Không thể… bỏ cuộc như thế này…!",
						"thai": "จะ…ยอมแพ้แบบนี้ไม่ได้…!",
						"hindi": "ऐसे…हार नहीं मान सकता…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			]
		}
	]
} as const;
