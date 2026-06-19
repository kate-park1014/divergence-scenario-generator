export const scenario_modern_minsu_1_04 = {
	"scenario_id": "modern_minsu_1_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 이어지는 길. 분명, 지나온 곳이다.",
			"하지만 발걸음은 다시 그 자리로.",
			"기억은 미로가 되고, 출구는 사라졌다.",
			"반복되는 환상 속, 린은 깨닫는다."
		],
		"english": [
			"An endless road. I've definitely been here before.",
			"Yet my steps lead back to the same spot.",
			"Memories become a labyrinth, and the exit vanishes.",
			"In this repeating illusion, Rin realizes."
		],
		"japanese": [
			"無限に続く道。きっと、来たことがある場所だ。",
			"だが、足跡は再び同じ場所へ。",
			"記憶は迷宮となり、出口は消えた。",
			"繰り返される幻想の中、リンは気づく。"
		],
		"chinese": [
			"无尽之路。 분명 走过的地方。",
			"然而脚步却又回到了原地。",
			"记忆化作迷宫，出口消失不见。",
			"在重复的幻象中，琳意识到了。"
		],
		"french": [
			"Une route sans fin. Je suis déjà passé par ici, c'est sûr.",
			"Pourtant, mes pas me ramènent au même endroit.",
			"Les souvenirs deviennent un labyrinthe, et la sortie disparaît.",
			"Dans cette illusion répétée, Rin comprend."
		],
		"spanish": [
			"Un camino interminable. Definitivamente, ya he estado aquí.",
			"Pero mis pasos me llevan de nuevo al mismo lugar.",
			"La memoria se convierte en un laberinto, y la salida desaparece.",
			"En esta ilusión recurrente, Rin se da cuenta."
		],
		"vietnamese": [
			"Con đường vô tận. Chắc chắn, đây là nơi tôi đã đi qua.",
			"Nhưng bước chân lại quay về chỗ cũ.",
			"Ký ức hóa mê cung, lối ra biến mất.",
			"Trong ảo ảnh lặp lại, Rin nhận ra."
		],
		"thai": [
			"หนทางอันไม่สิ้นสุด แน่นอนว่าที่นี่คือที่ที่เคยผ่านมาแล้ว",
			"แต่ก้าวเดินกลับมาที่เดิมอีกครั้ง",
			"ความทรงจำกลายเป็นเขาวงกต ทางออกหายไป",
			"ท่ามกลางภาพลวงตาที่ซ้ำไปมา รินก็ตระหนักได้"
		],
		"hindi": [
			"एक अंतहीन रास्ता। निश्चित रूप से, मैं यहाँ से पहले भी गुज़र चुका हूँ।",
			"फिर भी मेरे कदम उसी जगह लौट आते हैं।",
			"यादें भूलभुलैया बन जाती हैं, और निकास गायब हो जाता है।",
			"इस बार-बार दोहराए जाने वाले भ्रम में, रिन को एहसास होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "복도는 끝없이 이어졌다. 이전의 길과 놀랍도록 닮아 있었다.",
						"english": "The corridor stretched endlessly. It was astonishingly similar to the path before.",
						"japanese": "廊下は果てしなく続いていた。以前の道と驚くほど似ていた。",
						"chinese": "走廊绵延不绝。与之前的路惊人地相似。",
						"french": "Le couloir s'étendait à l'infini. Il ressemblait étonnamment au chemin précédent.",
						"spanish": "El pasillo se extendía sin fin. Era asombrosamente similar al camino anterior.",
						"vietnamese": "Hành lang kéo dài vô tận. Nó giống con đường trước đó một cách đáng ngạc nhiên.",
						"thai": "ทางเดินทอดยาวไม่มีที่สิ้นสุด มันคล้ายกับทางเดินก่อนหน้านี้อย่างน่าประหลาดใจ",
						"hindi": "गलियारा अंतहीन रूप से फैला हुआ था। यह पहले के रास्ते से आश्चर्यजनक रूप से मिलता-जुलता था।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...이상해. 여기, 분명 지나왔던 길인데.",
						"english": "...Strange. This is definitely a path I've been down before.",
						"japanese": "...おかしい。ここ、確かに通ってきた道なのに。",
						"chinese": "...奇怪。这里，分明是走过的路。",
						"french": "...Étrange. C'est un chemin que j'ai déjà parcouru, c'est sûr.",
						"spanish": "...Extraño. Este es un camino por el que definitivamente ya he pasado.",
						"vietnamese": "...Lạ thật. Đây rõ ràng là con đường mình đã đi qua rồi mà.",
						"thai": "...แปลกจัง ที่นี่คือทางที่ฉันเคยผ่านมาแล้วแน่ๆ",
						"hindi": "...अजीब है। यह तो वही रास्ता है जिससे मैं पहले गुज़र चुका हूँ।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기억의 파편이 비슷한 거겠지. 가자.",
						"english": "It must be fragments of memory being similar. Let's go.",
						"japanese": "記憶の断片が似ているだけだろう。行こう。",
						"chinese": "应该是记忆碎片相似而已。走吧。",
						"french": "Ce ne sont que des fragments de mémoire qui se ressemblent. Allons-y.",
						"spanish": "Deben ser fragmentos de memoria similares. Vamos.",
						"vietnamese": "Chắc là các mảnh ký ức tương đồng thôi. Đi thôi.",
						"thai": "คงเป็นเพียงเศษเสี้ยวความทรงจำที่คล้ายกัน ไปกันเถอะ",
						"hindi": "यह स्मृति के खंडों का समान होना चाहिए। चलो चलते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 그냥 '비슷하다'는 느낌이 아니야.",
						"english": "No. It's not just a 'similar' feeling.",
						"japanese": "違う。『似ている』という感覚じゃない。",
						"chinese": "不。这不仅仅是“相似”的感觉。",
						"french": "Non. Ce n'est pas juste une impression de « similarité ».",
						"spanish": "No. No es solo una sensación de 'parecido'.",
						"vietnamese": "Không. Không chỉ là cảm giác 'tương đồng'.",
						"thai": "ไม่สิ มันไม่ใช่แค่ความรู้สึกว่า 'คล้ายกัน'",
						"hindi": "नहीं। यह सिर्फ 'मिलता-जुलता' होने का एहसास नहीं है。"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저기 저 그림. 벽의 무늬. 찢어진 휘장까지.",
						"english": "That painting over there. The pattern on the wall. Even the torn banner.",
						"japanese": "あの絵。壁の模様。破れた垂れ幕まで。",
						"chinese": "那幅画。墙壁的花纹。甚至连破烂的旗帜。",
						"french": "Ce tableau là-bas. Le motif du mur. Même la bannière déchirée.",
						"spanish": "Esa pintura de allí. El patrón de la pared. Incluso el estandarte rasgado.",
						"vietnamese": "Bức tranh kia. Họa tiết trên tường. Cả lá cờ rách nữa.",
						"thai": "ภาพวาดตรงนั้น ลวดลายบนกำแพง แม้แต่ธงที่ฉีกขาด",
						"hindi": "वह तस्वीर वहाँ। दीवार पर का पैटर्न। यहाँ तक कि फटा हुआ बैनर भी।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "완벽하게 똑같아. 우리는 빙빙 돌고 있어.",
						"english": "It's perfectly identical. We're going in circles.",
						"japanese": "完璧に同じだ。私たちは堂々巡りをしている。",
						"chinese": "完全一模一样。我们一直在原地打转。",
						"french": "C'est parfaitement identique. Nous tournons en rond.",
						"spanish": "Es perfectamente idéntico. Estamos dando vueltas en círculo.",
						"vietnamese": "Hoàn toàn giống nhau. Chúng ta đang đi vòng tròn.",
						"thai": "เหมือนกันทุกประการ เรากำลังวนเวียนอยู่ที่เดิม",
						"hindi": "यह पूरी तरह से एक जैसा है। हम गोल-गोल घूम रहे हैं।"
					},
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "뭐? 설마, 기억이 우리를 가두는 건가?",
						"english": "What? No way, is memory trapping us?",
						"japanese": "何？ まさか、記憶が私たちを閉じ込めているのか？",
						"chinese": "什么？难道，记忆正在困住我们吗？",
						"french": "Quoi ? Non, le souvenir nous emprisonne ?",
						"spanish": "¿Qué? No puede ser, ¿la memoria nos está atrapando?",
						"vietnamese": "Cái gì? Không lẽ, ký ức đang giam cầm chúng ta?",
						"thai": "อะไรนะ? ไม่จริงน่า ความทรงจำกำลังขังเราไว้เหรอ?",
						"hindi": "क्या? ऐसा कैसे हो सकता है, क्या यादें हमें फंसा रही हैं?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "함정인가?",
						"english": "Is it a trap?",
						"japanese": "罠なのか？",
						"chinese": "是陷阱吗？",
						"french": "C'est un piège ?",
						"spanish": "¿Es una trampa?",
						"vietnamese": "Đây là một cái bẫy ư?",
						"thai": "นี่คือกับดักเหรอ?",
						"hindi": "क्या यह एक जाल है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "익숙함은 공포로 변했다. 탈출구가 보이지 않았다.",
						"english": "Familiarity turned to fear. No escape was in sight.",
						"japanese": "慣れ親しんだものが恐怖に変わった。脱出口は見えなかった。",
						"chinese": "熟悉感变成了恐惧。看不到出路。",
						"french": "La familiarité s'est transformée en peur. Aucune issue n'était en vue.",
						"spanish": "Lo familiar se convirtió en miedo. No se veía ninguna salida.",
						"vietnamese": "Sự quen thuộc biến thành nỗi sợ hãi. Không lối thoát nào trong tầm mắt.",
						"thai": "ความคุ้นเคยเปลี่ยนเป็นความกลัว ไม่เห็นทางออกเลย",
						"hindi": "परिचितता डर में बदल गई। कोई रास्ता नहीं दिख रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이건 기억의 덫이야. 계속 우리를 반복시키는.",
						"english": "This is a memory trap. It keeps repeating us.",
						"japanese": "これは記憶の罠だ。私たちを繰り返し続けさせる。",
						"chinese": "这是记忆的陷阱。它不断地重复我们。",
						"french": "C'est un piège mémoriel. Il nous fait répéter sans cesse.",
						"spanish": "Esta es una trampa de la memoria. Nos hace repetir constantemente.",
						"vietnamese": "Đây là bẫy ký ức. Nó cứ lặp lại chúng ta.",
						"thai": "นี่คือกับดักแห่งความทรงจำ มันทำให้เราวนซ้ำไปมา",
						"hindi": "यह यादों का जाल है। यह हमें बार-बार दोहराता रहता है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "그럼 어떻게 해야 해? 영원히 갇히는 건가?",
						"english": "Then what should we do? Are we trapped forever?",
						"japanese": "じゃあ、どうすればいい？永遠に閉じ込められるのか？",
						"chinese": "那我们该怎么办？要永远被困住吗？",
						"french": "Alors, que devons-nous faire ? Sommes-nous piégés pour toujours ?",
						"spanish": "¿Entonces qué debemos hacer? ¿Estamos atrapados para siempre?",
						"vietnamese": "Vậy chúng ta phải làm gì? Bị mắc kẹt mãi mãi ư?",
						"thai": "แล้วเราจะทำยังไงดี? ต้องติดอยู่ตลอดไปเหรอ?",
						"hindi": "तो हमें क्या करना चाहिए? क्या हम हमेशा के लिए फंस गए हैं?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 부수고 나아가야지.",
						"english": "No. We have to break through and move forward.",
						"japanese": "いや。打ち破って進むんだ。",
						"chinese": "不。我们必须打破它，然后前进。",
						"french": "Non. Nous devons briser ça et avancer.",
						"spanish": "No. Debemos romperlo y seguir adelante.",
						"vietnamese": "Không. Chúng ta phải phá vỡ và tiến lên.",
						"thai": "ไม่ เราต้องทำลายมันและเดินหน้าต่อไป",
						"hindi": "नहीं। हमें इसे तोड़कर आगे बढ़ना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "길은 끝없이 이어졌고, 절망감이 밀려왔다.",
						"english": "The path stretched endlessly, and despair washed over us.",
						"japanese": "道は果てしなく続き、絶望感が押し寄せた。",
						"chinese": "道路无限延伸，绝望感袭来。",
						"french": "Le chemin s'étendait à l'infini, et le désespoir nous envahissait.",
						"spanish": "El camino se extendía sin fin, y la desesperación nos invadía.",
						"vietnamese": "Con đường trải dài vô tận, và sự tuyệt vọng ập đến.",
						"thai": "เส้นทางทอดยาวไม่มีที่สิ้นสุด และความสิ้นหวังก็ถาโถมเข้ามา",
						"hindi": "रास्ता अंतहीन फैला हुआ था, और निराशा छा गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 미로는 끝이 없어. 설계된 거야.",
						"english": "This maze has no end. It was designed.",
						"japanese": "この迷路は終わりがない。仕組まれたものだ。",
						"chinese": "这个迷宫没有尽头。它是被设计的。",
						"french": "Ce labyrinthe n'a pas de fin. Il a été conçu.",
						"spanish": "Este laberinto no tiene fin. Fue diseñado.",
						"vietnamese": "Mê cung này không có hồi kết. Nó được thiết kế.",
						"thai": "เขาวงกตนี้ไม่มีที่สิ้นสุด มันถูกออกแบบมา",
						"hindi": "इस भूलभुलैया का कोई अंत नहीं है। इसे बनाया गया था।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "이런 곳에 갇히라고?",
						"english": "To be trapped in a place like this?",
						"japanese": "こんな場所に閉じ込められると？",
						"chinese": "要被困在这样的地方吗？",
						"french": "Être piégé dans un tel endroit ?",
						"spanish": "¿Quedar atrapado en un lugar como este?",
						"vietnamese": "Bị mắc kẹt ở một nơi như thế này ư?",
						"thai": "ให้ติดอยู่ในที่แบบนี้เหรอ?",
						"hindi": "ऐसी जगह में फंसना है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "뭘 그리 혼란스러워하나. 너희는 그저, 내 기억의 일부일 뿐.",
						"english": "Why are you so confused? You are merely a part of my memory.",
						"japanese": "何をそんなに混乱しているんだ。お前たちはただ、私の記憶の一部に過ぎない。",
						"chinese": "你们为何如此困惑？你们不过是我记忆的一部分。",
						"french": "Pourquoi tant de confusion ? Vous n'êtes qu'une partie de ma mémoire.",
						"spanish": "¿Por qué tanta confusión? Ustedes son simplemente una parte de mi memoria.",
						"vietnamese": "Sao các ngươi lại bối rối vậy? Các ngươi chỉ là một phần ký ức của ta mà thôi.",
						"thai": "ทำไมถึงสับสนนักเล่า พวกเจ้าก็เป็นแค่ส่วนหนึ่งในความทรงจำของข้าเท่านั้นเอง",
						"hindi": "इतना भ्रमित क्यों हो? तुम बस मेरी याददाश्त का एक हिस्सा हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...또 너야? 이제 그만해!",
						"english": "...You again? Stop it!",
						"japanese": "...またお前か？もうやめろ！",
						"chinese": "...又是你？适可而止吧！",
						"french": "...Encore toi ? Arrête ça !",
						"spanish": "...¿Tú otra vez? ¡Basta ya!",
						"vietnamese": "...Lại là ngươi? Dừng lại đi!",
						"thai": "...แกอีกแล้วรึ? พอเถอะ!",
						"hindi": "...फिर तुम? अब बहुत हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 깨달았을 때의 그 절망. 그게 너희의 운명.",
						"english": "The despair when you realize the truth. That is your fate.",
						"japanese": "真実を知った時の絶望。それがお前たちの運命だ。",
						"chinese": "当你认清真相时的绝望。那是你们的命运。",
						"french": "Le désespoir lorsque vous réaliserez la vérité. C'est votre destin.",
						"spanish": "La desesperación al comprender la verdad. Ese es vuestro destino.",
						"vietnamese": "Nỗi tuyệt vọng khi các ngươi nhận ra sự thật. Đó là vận mệnh của các ngươi.",
						"thai": "ความสิ้นหวังเมื่อเจ้าได้ตระหนักถึงความจริง นั่นคือชะตากรรมของพวกเจ้า",
						"hindi": "जब तुम सच जानोगे, वो निराशा। वही तुम्हारी नियति है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...미로를... 벗어났다고 착각하는군. 하지만 더 깊은 곳으로... 끌려갈 뿐.",
						"english": "...You mistake yourself for escaping the maze. But you'll only be dragged deeper in...",
						"japanese": "...迷宮を... 抜けたと錯覚しているようだな。だが、より深き場所へ... 引きずり込まれるだけだ。",
						"chinese": "...你以为... 逃出了迷宫。但只会... 被拖入更深处。",
						"french": "...Tu te trompes en pensant avoir échappé au labyrinthe. Mais tu ne feras que... être entraîné plus profondément encore.",
						"spanish": "...Crees... que has escapado del laberinto. Pero solo serás... arrastrado a un lugar más profundo.",
						"vietnamese": "...Ngươi lầm tưởng... đã thoát khỏi mê cung. Nhưng chỉ là... bị kéo xuống sâu hơn mà thôi.",
						"thai": "...เจ้าเข้าใจผิดคิดว่า... ได้หลุดพ้นจากเขาวงกตแล้ว แต่เจ้าจะถูก... ลากลงไปในที่ที่ลึกยิ่งกว่าเท่านั้น",
						"hindi": "...तुम समझते हो कि... भूलभुलैया से निकल गए। पर तुम तो बस... और गहरे खींच लिए जाओगे।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이건... 시작일 뿐이야. 진짜 왜곡은 이제부터.",
						"english": "This is... just the beginning. The true distortion starts now.",
						"japanese": "これは... 始まりに過ぎない。真の歪みはここからだ。",
						"chinese": "这只是... 开始。真正的扭曲才刚刚开始。",
						"french": "Ce n'est... que le début. La vraie distorsion commence maintenant.",
						"spanish": "Esto es... solo el principio. La verdadera distorsión comienza ahora.",
						"vietnamese": "Đây chỉ là... khởi đầu thôi. Sự méo mó thật sự sẽ bắt đầu từ bây giờ.",
						"thai": "นี่เป็น... เพียงจุดเริ่มต้นเท่านั้น ความบิดเบือนที่แท้จริงจะเริ่มขึ้นจากนี้ไป",
						"hindi": "यह तो बस... शुरुआत है। असली विकृति अब शुरू होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 한 걸음 더 나아갔어.",
						"english": "But I've taken one more step forward.",
						"japanese": "だが、一歩先へ進んだ。",
						"chinese": "但是，我又向前迈进了一步。",
						"french": "Mais j'ai fait un pas de plus.",
						"spanish": "Pero di un paso más.",
						"vietnamese": "Nhưng ta đã tiến thêm một bước.",
						"thai": "แต่ข้าก็ได้ก้าวไปข้างหน้าอีกหนึ่งก้าว",
						"hindi": "लेकिन मैंने एक और कदम आगे बढ़ाया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "미로는 부서졌지만, 길은 여전히 혼란스러웠다. 진실은 더 깊은 곳에 숨어 있었다.",
						"english": "The maze was broken, but the path remained chaotic. The truth lay hidden deeper still.",
						"japanese": "迷宮は破壊されたが、道は依然として混乱していた。真実はさらに深き場所に隠されていた。",
						"chinese": "迷宫虽已破碎，但道路依然混乱。真相隐藏在更深之处。",
						"french": "Le labyrinthe était brisé, mais le chemin restait chaotique. La vérité était cachée encore plus profondément.",
						"spanish": "El laberinto se rompió, pero el camino seguía siendo caótico. La verdad se ocultaba aún más profundamente.",
						"vietnamese": "Mê cung đã bị phá vỡ, nhưng con đường vẫn hỗn loạn. Sự thật ẩn giấu ở một nơi sâu thẳm hơn.",
						"thai": "เขาวงกตถูกทำลายลงแล้ว แต่เส้นทางยังคงวุ่นวาย ความจริงซ่อนอยู่ในสถานที่ที่ลึกยิ่งกว่านั้น",
						"hindi": "भूलभुलैया टूट गई, लेकिन रास्ता अभी भी अस्त-व्यस्त था। सच और भी गहरे छिपा हुआ था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "lin"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국, 너희도 똑같군. 이 미로를 영원히 헤매라.",
						"english": "In the end, you're all the same. Wander this maze forever.",
						"japanese": "結局、お前たちも同じか。この迷宮を永遠に彷徨え。",
						"chinese": "最终，你们都一样。永远迷失在这迷宫中吧。",
						"french": "Au final, vous êtes tous pareils. Errez éternellement dans ce labyrinthe.",
						"spanish": "Al final, todos sois iguales. Vagad por este laberinto para siempre.",
						"vietnamese": "Cuối cùng thì các ngươi cũng vậy thôi. Hãy lang thang trong mê cung này mãi mãi đi.",
						"thai": "สุดท้ายแล้ว พวกเจ้าก็เหมือนกันหมด จงหลงทางอยู่ในเขาวงกตนี้ตลอดไปเถิด",
						"hindi": "अंत में, तुम सब एक जैसे हो। इस भूलभुलैया में हमेशा के लिए भटकते रहो।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아니야. 우리는 포기하지 않아.",
						"english": "No. We won't give up.",
						"japanese": "違う。私たちは諦めない。",
						"chinese": "不。我们不会放弃。",
						"french": "Non. Nous n'abandonnerons pas.",
						"spanish": "No. No nos rendiremos.",
						"vietnamese": "Không. Chúng tôi sẽ không bỏ cuộc.",
						"thai": "ไม่ เราไม่ยอมแพ้",
						"hindi": "नहीं। हम हार नहीं मानेंगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시... 다시 한번!",
						"english": "Again... Just one more time!",
						"japanese": "もう一度... もう一度だけ！",
						"chinese": "再来... 再来一次！",
						"french": "Encore... Juste une fois de plus !",
						"spanish": "De nuevo... ¡Una vez más!",
						"vietnamese": "Lại... Lại một lần nữa!",
						"thai": "อีกครั้ง... ขออีกครั้ง!",
						"hindi": "फिर से... बस एक बार और!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "무한히 반복되는 길의 끝. 마침내 모든 왜곡의 원인이 모습을 드러냈다.",
						"english": "The end of an endlessly repeating path. Finally, the source of all distortion revealed itself.",
						"japanese": "無限に繰り返される道の終焉。ついに、全ての歪みの根源が姿を現した。",
						"chinese": "无尽重复之路的尽头。终于，所有扭曲的根源显露了真面目。",
						"french": "La fin d'un chemin sans cesse répété. Enfin, la source de toutes les distorsions a révélé sa forme.",
						"spanish": "El fin de un camino infinitamente repetitivo. Finalmente, el origen de toda distorsión se reveló.",
						"vietnamese": "Cuối con đường lặp đi lặp lại vô tận. Cuối cùng, nguyên nhân của mọi méo mó đã lộ diện.",
						"thai": "ปลายทางของเส้นทางที่ย้ำรอยเดิมไม่รู้จบ ในที่สุด ต้นตอของความบิดเบือนทั้งหมดก็ปรากฏตัว",
						"hindi": "अनंत दोहराव वाले मार्ग का अंत। आखिरकार, सभी विकृतियों का स्रोत सामने आ गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 찾으려는 어리석은 자들. 네 발버둥은 더 큰 고통만 가져올 뿐.",
						"english": "Foolish ones seeking the truth. Your struggles will only bring greater suffering.",
						"japanese": "真実を求める愚か者たち。その足掻きは、より大きな苦痛をもたらすだけだ。",
						"chinese": "企图寻找真相的愚蠢之徒。你们的挣扎只会带来更大的痛苦。",
						"french": "Fous que vous êtes, cherchant la vérité. Vos efforts n'apporteront qu'une souffrance plus grande.",
						"spanish": "Necios que buscan la verdad. Vuestros vanos intentos solo os traerán mayor sufrimiento.",
						"vietnamese": "Những kẻ ngu xuẩn tìm kiếm sự thật. Sự vùng vẫy của ngươi chỉ mang lại nỗi đau lớn hơn mà thôi.",
						"thai": "พวกโง่เขลาที่แสวงหาความจริง การดิ้นรนของพวกเจ้าจะนำมาซึ่งความเจ็บปวดที่ยิ่งใหญ่กว่าเท่านั้น",
						"hindi": "सच की तलाश करने वाले मूर्ख। तुम्हारी ये जद्दोजहद केवल और अधिक पीड़ा ही लाएगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이런 가짜 세상에 갇혀 있을 수는 없어.",
						"english": "I can't be trapped in a fake world like this.",
						"japanese": "こんな偽りの世界に囚われているわけにはいかない。",
						"chinese": "我不能被困在这种虚假的世界里。",
						"french": "Je ne peux pas rester piégé dans un monde aussi factice.",
						"spanish": "No puedo seguir atrapado en un mundo falso como este.",
						"vietnamese": "Ta không thể bị mắc kẹt trong thế giới giả tạo như thế này.",
						"thai": "ข้าไม่อาจถูกขังอยู่ในโลกจอมปลอมเช่นนี้ได้",
						"hindi": "मैं ऐसी झूठी दुनिया में फंसा नहीं रह सकता।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뚫고 나갈 거야. 반드시.",
						"english": "I'll break through. I must.",
						"japanese": "突き破る。必ず。",
						"chinese": "我将冲出去。一定要。",
						"french": "Je vais m'en sortir. Absolument.",
						"spanish": "Lo romperé. Debo hacerlo.",
						"vietnamese": "Ta sẽ xuyên phá. Nhất định phải vậy.",
						"thai": "ข้าจะฝ่าออกไปให้ได้ แน่นอน",
						"hindi": "मैं इसे भेद कर निकलूंगा। ज़रूर।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
