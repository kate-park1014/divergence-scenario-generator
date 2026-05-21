export const scenario_Chicken_saurus_Rebirth_04 = {
	"scenario_id": "Chicken_saurus_Rebirth_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 괴물의 그림자로 춤추고 있었다.",
			"은둔자 아이비, 그녀는 속삭였다.",
			"\"새로운 왕의 시대가 오리라.\"",
			"그러나 그 예언은 달콤한 독이었다."
		],
		"english": [
			"The forest danced with monster shadows.",
			"Ivy the Hermit, she whispered.",
			"\"The era of a new king shall come.\"",
			"But that prophecy was sweet poison."
		],
		"japanese": [
			"森は怪物の影で踊っていた。",
			"隠者アイビー、彼女は囁いた。",
			"「新しい王の時代が来るだろう。」",
			"しかし、その予言は甘い毒だった。"
		],
		"chinese": [
			"森林在怪物的影子里舞动。",
			"隐士艾维，她低语道。",
			"“新王的时代即将来临。”",
			"然而，那个预言是甜蜜的毒药。"
		],
		"french": [
			"La forêt dansait avec les ombres des monstres.",
			"Ivy l'Ermite, elle murmura.",
			"« L'ère d'un nouveau roi viendra. »",
			"Mais cette prophétie était un doux poison."
		],
		"spanish": [
			"El bosque danzaba con las sombras de los monstruos.",
			"Ivy la Ermitaña, ella susurró.",
			"«La era de un nuevo rey llegará.»",
			"Pero esa profecía era un dulce veneno."
		],
		"vietnamese": [
			"Rừng rậm nhảy múa với bóng quái vật.",
			"Ẩn sĩ Ivy, nàng thì thầm.",
			"\"Kỷ nguyên của một vị vua mới sẽ đến.\"",
			"Nhưng lời tiên tri đó là một liều thuốc độc ngọt ngào."
		],
		"thai": [
			"ป่าเต้นรำไปกับเงาของสัตว์ประหลาด",
			"ไอวี่ฤๅษี นางกระซิบ",
			"\"ยุคสมัยของกษัตริย์องค์ใหม่จะมาถึง\"",
			"แต่คำพยากรณ์นั้นเป็นยาพิษหวาน"
		],
		"hindi": [
			"वन राक्षसों की परछाइयों के साथ नाच रहा था।",
			"साध्वी आइवी, वह फुसफुसाई।",
			"\"एक नए राजा का युग आएगा।\"",
			"लेकिन वह भविष्यवाणी एक मीठा ज़हर थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲은 기이한 침묵 속에 잠겨 있었다. 바닥에는 단단한 껍질 조각들이 널려 있었다.",
						"english": "The forest was shrouded in an eerie silence. Hard shell fragments lay scattered on the ground.",
						"japanese": "森は不気味な沈黙に包まれていた。床には硬い殻の破片が散らばっていた。",
						"chinese": "森林笼罩在诡异的寂静中。坚硬的甲壳碎片散落在地上。",
						"french": "La forêt était enveloppée d'un silence étrange. Des fragments de carapace dure jonchaient le sol.",
						"spanish": "El bosque estaba envuelto en un silencio inquietante. Fragmentos de caparazón duro yacían esparcidos por el suelo.",
						"vietnamese": "Rừng chìm trong sự im lặng kỳ lạ. Những mảnh vỏ cứng nằm rải rác trên mặt đất.",
						"thai": "ป่าถูกปกคลุมด้วยความเงียบงันที่แปลกประหลาด มีชิ้นส่วนเปลือกแข็งกระจัดกระจายอยู่บนพื้น",
						"hindi": "वन एक अजीब खामोशी में डूबा हुआ था। ज़मीन पर कठोर खोल के टुकड़े बिखरे पड़े थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건… 대체 뭐야?",
						"english": "What… is this?",
						"japanese": "これ…一体何だ？",
						"chinese": "这…到底是什么？",
						"french": "Qu'est-ce que… c'est ça ?",
						"spanish": "¿Qué… es esto?",
						"vietnamese": "Cái này… rốt cuộc là gì?",
						"thai": "นี่มัน…อะไรกันแน่?",
						"hindi": "यह… आख़िर क्या है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "…왔구나. 예언된 자여.",
						"english": "...You've come. Oh, prophesied one.",
						"japanese": "…来たな。予言されし者よ。",
						"chinese": "……你来了。被预言之人。",
						"french": "...Tu es venu. Ô, l'élu de la prophétie.",
						"spanish": "...Has llegado. Oh, el profetizado.",
						"vietnamese": "...Ngươi đã đến. Hỡi người được tiên tri.",
						"thai": "...เจ้ามาแล้ว ผู้ถูกพยากรณ์",
						"hindi": "...तुम आ गए। हे, भविष्यवाणी किए गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 은둔자 아이비?",
						"english": "You are… Ivy the Hermit?",
						"japanese": "あなたは…隠者アイビー？",
						"chinese": "你是…隐士艾维？",
						"french": "Vous êtes… Ivy l'Ermite ?",
						"spanish": "¿Eres… Ivy la Ermitaña?",
						"vietnamese": "Ngươi là… Ẩn sĩ Ivy?",
						"thai": "ท่านคือ…ไอวี่ฤๅษี?",
						"hindi": "तुम… साध्वी आइवी हो?"
					}
				},
				{
					"content": {
						"korean": "이 숲은 새로운 왕을 기다리고 있어. 곧… 모든 것이 바뀔 거야.",
						"english": "This forest awaits a new king. Soon… everything will change.",
						"japanese": "この森は新しい王を待っている。間もなく…全てが変わるだろう。",
						"chinese": "这片森林在等待一位新王。很快…一切都将改变。",
						"french": "Cette forêt attend un nouveau roi. Bientôt… tout changera.",
						"spanish": "Este bosque espera a un nuevo rey. Pronto… todo cambiará.",
						"vietnamese": "Rừng này đang chờ đợi một vị vua mới. Sắp tới… mọi thứ sẽ thay đổi.",
						"thai": "ป่านี้กำลังรอคอยกษัตริย์องค์ใหม่ ไม่นาน…ทุกสิ่งจะเปลี่ยนไป",
						"hindi": "यह वन एक नए राजा का इंतज़ार कर रहा है। जल्द ही… सब कुछ बदल जाएगा।"
					},
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 왕이라고?",
						"english": "A new king?",
						"japanese": "新しい王だと？",
						"chinese": "新王？",
						"french": "Un nouveau roi ?",
						"spanish": "¿Un nuevo rey?",
						"vietnamese": "Một vị vua mới sao?",
						"thai": "กษัตริย์องค์ใหม่เหรอ?",
						"hindi": "एक नया राजा?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivy",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "숲의 균형이 깨지고 있어. 그 힘의 원천은 더 깊은 곳에.",
						"english": "The forest's balance is breaking. Its power source lies deeper.",
						"japanese": "森の均衡が崩れている。その力の源はもっと奥に。",
						"chinese": "森林的平衡正在被打破。力量的源泉在更深处。",
						"french": "L'équilibre de la forêt se brise. Sa source de pouvoir est plus profonde.",
						"spanish": "El equilibrio del bosque se rompe. Su fuente de poder está en lo más profundo.",
						"vietnamese": "Sự cân bằng của rừng đang bị phá vỡ. Nguồn sức mạnh của nó nằm sâu hơn.",
						"thai": "สมดุลของป่ากำลังพังทลาย แหล่งพลังงานของมันอยู่ลึกกว่านั้น",
						"hindi": "जंगल का संतुलन बिगड़ रहा है। उसकी शक्ति का स्रोत और गहरा है。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 깊은 곳?",
						"english": "Deeper?",
						"japanese": "もっと奥に？",
						"chinese": "更深处？",
						"french": "Plus profond ?",
						"spanish": "¿Más profundo?",
						"vietnamese": "Sâu hơn?",
						"thai": "ลึกกว่า?",
						"hindi": "और गहरा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivy",
					"content": {
						"korean": "뒤틀린 뿌리들이 길을 가리킬 거야. 그들을 따라가면 돼.",
						"english": "Twisted roots will show the way. Just follow them.",
						"japanese": "ねじれた根が道を示すだろう。彼らに従えばいい。",
						"chinese": "扭曲的树根会指引道路。跟着它们走就行。",
						"french": "Les racines tordues montreront le chemin. Suivez-les simplement.",
						"spanish": "Las raíces retorcidas mostrarán el camino. Solo síguelas.",
						"vietnamese": "Những rễ cây xoắn sẽ chỉ đường. Cứ đi theo chúng.",
						"thai": "รากที่บิดเบี้ยวจะนำทาง แค่ตามไป",
						"hindi": "मुड़ी हुई जड़ें रास्ता दिखाएंगी। बस उनका पीछा करो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…당신이 왜 우릴 돕지?",
						"english": "...Why help us?",
						"japanese": "…なぜ我々を助ける？",
						"chinese": "…你为何帮我们？",
						"french": "...Pourquoi nous aidez-vous ?",
						"spanish": "¿...Por qué nos ayudas?",
						"vietnamese": "...Sao ông lại giúp chúng tôi?",
						"thai": "...ทำไมคุณถึงช่วยเรา?",
						"hindi": "...आप हमारी मदद क्यों कर रहे हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 그저, 숲의 흐름을 따를 뿐.",
						"english": "I simply follow the forest's flow.",
						"japanese": "私はただ、森の流れに従うだけ。",
						"chinese": "我只是顺应森林的流动。",
						"french": "Je ne fais que suivre le courant de la forêt.",
						"spanish": "Simplemente sigo el flujo del bosque.",
						"vietnamese": "Tôi chỉ thuận theo dòng chảy của rừng.",
						"thai": "ฉันแค่ตามกระแสของป่า",
						"hindi": "मैं बस जंगल के प्रवाह का अनुसरण करता हूँ।"
					},
					"speaker": "ivy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "저 빛나는 버섯들을 봐. 숲이 너희에게 보내는 신호야.",
						"english": "Look at those glowing mushrooms. A signal from the forest to you.",
						"japanese": "あの光るキノコを見て。森がお前たちに送る信号だ。",
						"chinese": "看那些发光的蘑菇。那是森林给你们的信号。",
						"french": "Regardez ces champignons lumineux. C'est un signal de la forêt pour vous.",
						"spanish": "Mira esos hongos luminosos. Una señal del bosque para vosotros.",
						"vietnamese": "Hãy nhìn những cây nấm phát sáng kia. Đó là tín hiệu rừng gửi cho các ngươi.",
						"thai": "ดูเห็ดเรืองแสงพวกนั้นสิ สัญญาณจากป่าถึงพวกเจ้า",
						"hindi": "उन चमकते मशरूमों को देखो। जंगल की तरफ से तुम्हारे लिए एक संकेत।"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 신호라고?",
						"english": "That's... a signal?",
						"japanese": "あれが…信号だと？",
						"chinese": "那是…信号？",
						"french": "C'est... un signal ?",
						"spanish": "¿Eso es... una señal?",
						"vietnamese": "Đó là... tín hiệu sao?",
						"thai": "นั่น... สัญญาณเหรอ?",
						"hindi": "वह... एक संकेत है?"
					}
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "그래. 새로운 시대의 시작. 그 빛을 따라가면 진실에 닿을 거야.",
						"english": "Yes. The dawn of a new era. Follow that light, and you'll reach the truth.",
						"japanese": "そうだ。新しい時代の始まり。その光を追えば真実に辿り着く。",
						"chinese": "对。新时代的开始。跟着那光，你就会触及真相。",
						"french": "Oui. L'aube d'une nouvelle ère. Suivez cette lumière, et vous atteindrez la vérité.",
						"spanish": "Sí. El amanecer de una nueva era. Sigue esa luz y alcanzarás la verdad.",
						"vietnamese": "Đúng vậy. Khởi đầu của một kỷ nguyên mới. Theo ánh sáng đó, các ngươi sẽ chạm đến sự thật.",
						"thai": "ใช่ จุดเริ่มต้นของยุคใหม่ ตามแสงนั้นไป แล้วเจ้าจะพบความจริง",
						"hindi": "हाँ। एक नए युग की शुरुआत। उस रोशनी का अनुसरण करो, और तुम सच तक पहुँच जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왠지… 이상해.",
						"english": "Somehow... it feels strange.",
						"japanese": "なんだか…おかしいな。",
						"chinese": "总觉得…很奇怪。",
						"french": "D'une manière ou d'une autre... c'est étrange.",
						"spanish": "De alguna manera... es extraño.",
						"vietnamese": "Sao mà... lạ quá.",
						"thai": "ยังไงก็... แปลกๆ",
						"hindi": "कुछ... अजीब लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "숲을 가로지르는 바람이 알 수 없는 속삭임을 실어 날랐다. 불길한 기운이 감돌았다.",
						"english": "A wind sweeping through the forest carried unknown whispers. An ominous presence loomed.",
						"japanese": "森を横切る風が、知られざるささやきを運び去った。不吉な気配が漂った。",
						"chinese": "穿过森林的风带来了未知的低语。一股不祥的气息弥漫开来。",
						"french": "Un vent traversant la forêt portait des murmures inconnus. Une aura sinistre planait.",
						"spanish": "Un viento que barría el bosque llevaba susurros desconocidos. Una presencia siniestra se cernía.",
						"vietnamese": "Gió xuyên qua rừng mang theo những lời thì thầm không rõ. Một điềm báo bất lành bao trùm.",
						"thai": "ลมพัดผ่านป่าพัดพาเสียงกระซิบที่ไม่รู้จัก บรรยากาศที่ไม่เป็นมงคลปกคลุม",
						"hindi": "जंगल से गुजरती हवा अज्ञात फुसफुसाहटें ले जा रही थी। एक अशुभ उपस्थिति मंडरा रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "들리지? 숲의 심장이 너희를 부르고 있어.",
						"english": "Hear that? The forest's heart is calling you.",
						"japanese": "聞こえるか？森の心臓が君たちを呼んでいる。",
						"chinese": "听到了吗？森林之心正在呼唤你们。",
						"french": "Vous entendez ? Le cœur de la forêt vous appelle.",
						"spanish": "¿Lo oyes? El corazón del bosque os está llamando.",
						"vietnamese": "Nghe thấy không? Trái tim rừng đang gọi các ngươi.",
						"thai": "ได้ยินไหม? หัวใจของป่ากำลังเรียกพวกเจ้าอยู่.",
						"hindi": "सुन रहे हो? वन का हृदय तुम्हें पुकार रहा है।"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 부름이 아니라 경고 같아.",
						"english": "This isn't... a call. It feels like a warning.",
						"japanese": "これは… 呼び声じゃない。警告のようだ。",
						"chinese": "这不是… 呼唤。这更像是一个警告。",
						"french": "Ce n'est pas... un appel. Plutôt un avertissement.",
						"spanish": "Esto no es... una llamada. Parece una advertencia.",
						"vietnamese": "Đây không phải… lời kêu gọi. Mà là một lời cảnh báo.",
						"thai": "นี่ไม่ใช่... เสียงเรียก. มันเหมือนคำเตือนมากกว่า.",
						"hindi": "यह... बुलावा नहीं। यह एक चेतावनी लगती है।"
					}
				},
				{
					"content": {
						"korean": "모든 길은 새로운 왕에게 향하고 있어. 너희는 그저 도구가 될 뿐.",
						"english": "All paths lead to the new king. You are merely tools.",
						"japanese": "全ての道は新たな王へ続く。お前たちはただの道具に過ぎない。",
						"chinese": "所有的道路都通向新王。你们不过是工具罢了。",
						"french": "Tous les chemins mènent au nouveau roi. Vous n'êtes que des outils.",
						"spanish": "Todos los caminos llevan al nuevo rey. Vosotros sois meras herramientas.",
						"vietnamese": "Mọi con đường đều dẫn đến tân vương. Các ngươi chỉ là công cụ mà thôi.",
						"thai": "ทุกเส้นทางนำไปสู่ราชาองค์ใหม่. พวกเจ้าเป็นแค่เครื่องมือเท่านั้น.",
						"hindi": "सभी रास्ते नए राजा की ओर ले जाते हैं। तुम सिर्फ मोहरे हो।"
					},
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 말을 하는 거야?",
						"english": "...What are you talking about?",
						"japanese": "…何を言ってるんだ？",
						"chinese": "……你在说什么？",
						"french": "...De quoi parlez-vous ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "…Ngươi đang nói gì vậy?",
						"thai": "...พูดเรื่องอะไรน่ะ?",
						"hindi": "...क्या बात कर रहे हो?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "약한 인간들. 새로운 왕의 시대를 막을 순 없다!",
						"english": "Weak humans. You cannot stop the era of the new king!",
						"japanese": "弱き人間どもめ。新しい王の時代を止めることはできぬ！",
						"chinese": "弱小的人类。你们无法阻止新王的时代降临！",
						"french": "Faibles humains. Vous ne pouvez pas arrêter l'ère du nouveau roi !",
						"spanish": "¡Humanos débiles! ¡No podéis detener la era del nuevo rey!",
						"vietnamese": "Lũ người yếu ớt. Các ngươi không thể ngăn cản kỷ nguyên của vị vua mới!",
						"thai": "มนุษย์ผู้อ่อนแอ เจ้าไม่อาจหยุดยุคสมัยของราชาองค์ใหม่ได้!",
						"hindi": "कमजोर इंसानो। तुम नए राजा के युग को नहीं रोक सकते!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아!",
						"english": "It's not… over yet. I won't give up!",
						"japanese": "まだ… 終わってない。諦めない！",
						"chinese": "还… 没有结束。我不会放弃！",
						"french": "Ce n'est pas… encore fini. Je n'abandonnerai pas !",
						"spanish": "Todavía… no ha terminado. ¡No me rendiré!",
						"vietnamese": "Chưa… kết thúc đâu. Ta sẽ không bỏ cuộc!",
						"thai": "ยัง… ไม่จบหรอก ฉันไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The forest's deepest reaches. A colossal shadow appeared.",
						"japanese": "森の最も深い場所。巨大な影が現れた。",
						"chinese": "森林最深处。一个巨大的影子出现了。",
						"french": "Au plus profond de la forêt. Une ombre colossale apparut.",
						"spanish": "En lo más profundo del bosque. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu thẳm nhất của rừng. Một bóng đen khổng lồ hiện ra.",
						"thai": "ส่วนลึกที่สุดของป่า. เงาขนาดมหึมาปรากฏขึ้น.",
						"hindi": "वन के सबसे गहरे हिस्से में। एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "건방진 인간들. 이곳에 올 자격이 없다.",
						"english": "Presumptuous humans. You have no right to be here.",
						"japanese": "生意気な人間ども。ここにくる資格はない。",
						"chinese": "傲慢的人类。你们不配来到这里。",
						"french": "Humains insolents. Vous n'avez pas le droit d'être ici.",
						"spanish": "Humanos insolentes. No tenéis derecho a estar aquí.",
						"vietnamese": "Lũ người xấc xược. Các ngươi không đủ tư cách đến đây.",
						"thai": "มนุษย์ผู้โอหัง. พวกเจ้าไม่มีสิทธิ์มาที่นี่.",
						"hindi": "अभिमानी मनुष्य। तुम्हें यहाँ आने का कोई अधिकार नहीं।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "이제 끝을 봐야지. {random_boss}여, 이들을 처단하고 새로운 시대를 열어라.",
						"english": "Now, to face the end. O {random_boss}, strike them down and usher in a new era.",
						"japanese": "さあ、決着をつけよう。{random_boss}よ、彼らを処断し、新時代を切り開け。",
						"chinese": "现在，该是了结的时候了。{random_boss}啊，将他们处决，开启新时代吧。",
						"french": "Il est temps d'en finir. O {random_boss}, abats-les et ouvre une nouvelle ère.",
						"spanish": "Ahora, a ver el final. Oh {random_boss}, acábalos y abre una nueva era.",
						"vietnamese": "Giờ là lúc kết thúc. Hỡi {random_boss}, hãy trừng trị chúng và mở ra kỷ nguyên mới.",
						"thai": "ถึงเวลาตัดสินแล้ว. โอ้ {random_boss}เอ๋ย, จงกำจัดพวกมันและเปิดศักราชใหม่.",
						"hindi": "अब अंत देखना होगा। हे {random_boss}, इन्हें मार डालो और एक नए युग की शुरुआत करो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아이비! 네가… 우리를 속였어!",
						"english": "Ivy! You... you deceived us!",
						"japanese": "アイビー！お前が…俺たちを騙したのか！",
						"chinese": "艾薇！你…你欺骗了我们！",
						"french": "Ivy ! Tu… tu nous as trompés !",
						"spanish": "¡Ivy! Tú... ¡nos engañaste!",
						"vietnamese": "Ivy! Ngươi… ngươi đã lừa dối chúng ta!",
						"thai": "ไอวี่! แก... แกหลอกพวกเรา!",
						"hindi": "आइवी! तुम… तुमने हमें धोखा दिया!"
					}
				},
				{
					"speaker": "ivy",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "어리석은 자. 예언은 이미 시작되었다.",
						"english": "Foolish one. The prophecy has already begun.",
						"japanese": "愚かな者よ。予言は既に始まっている。",
						"chinese": "愚蠢之人。预言早已开始。",
						"french": "Imbécile. La prophétie a déjà commencé.",
						"spanish": "Necio. La profecía ya ha comenzado.",
						"vietnamese": "Kẻ ngốc. Lời tiên tri đã bắt đầu rồi.",
						"thai": "เจ้าโง่. คำพยากรณ์ได้เริ่มขึ้นแล้ว.",
						"hindi": "मूर्ख। भविष्यवाणी पहले ही शुरू हो चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 이 숲을 망치게 두지 않아!",
						"english": "Get out of the way! I won't let you ruin this forest!",
						"japanese": "どけ！この森を壊させはしない！",
						"chinese": "让开！我不会让你们毁掉这片森林！",
						"french": "Écarte-toi ! Je ne te laisserai pas détruire cette forêt !",
						"spanish": "¡Apartaos! ¡No dejaré que arruinéis este bosque!",
						"vietnamese": "Tránh ra! Ta sẽ không để các ngươi phá hủy khu rừng này!",
						"thai": "ถอยไป! ฉันจะไม่ยอมให้พวกแกทำลายป่านี้!",
						"hindi": "हटो! मैं तुम्हें इस जंगल को बर्बाद नहीं करने दूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크아아악… 겨우… 이걸로 끝이라 생각하나…?",
						"english": "Aargh… This is merely the beginning… You think this is the end?",
						"japanese": "ぐあああ… まだ… これで終わりだとでも…？",
						"chinese": "啊啊啊… 就… 这样就结束了…？",
						"french": "Grrr… Tu penses que c'est la fin… ?",
						"spanish": "¡Aaahh…! ¿Crees que esto es el fin…?",
						"vietnamese": "Khốn kiếp… Đây chưa phải kết thúc… ngươi nghĩ vậy sao?",
						"thai": "อ๊ากกก… แค่นี้… คิดว่าจะจบแล้วเหรอ…?",
						"hindi": "आह… क्या तुम्हें लगता है कि यह अंत है…?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "{random_boss}는… 시작에 불과하다… 아이비… 그녀가… 진정한….",
						"english": "{random_boss} was… just the beginning… Ivy… she is… the true…",
						"japanese": "{random_boss}は… 序章に過ぎない… アイビー… 彼女こそが… 真の…",
						"chinese": "{random_boss}… 只是开始… 艾薇… 她才是… 真正的…",
						"french": "{random_boss} n'était… que le début… Ivy… elle est… la vraie…",
						"spanish": "{random_boss} era… solo el principio… Ivy… ella es… la verdadera…",
						"vietnamese": "{random_boss} chỉ là… khởi đầu… Ivy… cô ta… mới là…",
						"thai": "{random_boss}… เป็นแค่จุดเริ่มต้น… ไอบี… เธอคนนั้น… คือตัวจริง…",
						"hindi": "{random_boss} तो… बस शुरुआत था… आइवी… वही… असली…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아이비…! 감히 우릴 속여? 끝까지 쫓아갈 거야!",
						"english": "Ivy…! How dare you deceive us? We'll hunt you down to the very end!",
						"japanese": "アイビー…！よくも私たちを欺いたな？どこまでも追い詰めてやる！",
						"chinese": "艾薇…！竟敢欺骗我们？我一定会追捕你到底！",
						"french": "Ivy…! Comment oses-tu nous tromper ? On te poursuivra jusqu'au bout !",
						"spanish": "¡Ivy…! ¿Cómo te atreves a engañarnos? ¡Te perseguiremos hasta el final!",
						"vietnamese": "Ivy…! Sao ngươi dám lừa dối chúng ta? Ta sẽ đuổi theo ngươi đến cùng!",
						"thai": "ไอบี…! กล้าดียังไงมาหลอกพวกเรา? ฉันจะตามล่าแกไปจนสุดขอบโลก!",
						"hindi": "आइवी…! हमारी हिम्मत कैसे हुई हमें धोखा देने की? हम तुम्हारा पीछा अंत तक करेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "중간 보스를 처치했다. 그러나 아이비의 그림자는 더욱 깊숙이 드리워졌다.",
						"english": "Mid-boss defeated. Yet, Ivy's shadow looms even deeper.",
						"japanese": "中間ボスを倒した。だが、アイビーの影はさらに深く伸びていた。",
						"chinese": "击败了中级首领。然而，艾薇的阴影却愈发深沉。",
						"french": "Mini-boss vaincu. Mais l'ombre d'Ivy s'épaissit.",
						"spanish": "Jefe intermedio derrotado. Sin embargo, la sombra de Ivy se cernía aún más profundamente.",
						"vietnamese": "Đã đánh bại trùm giữa. Tuy nhiên, bóng dáng của Ivy ngày càng trở nên sâu thẳm.",
						"thai": "กำจัดหัวหน้าช่วงกลางได้แล้ว แต่เงาของไอบีกลับยิ่งลึกล้ำ",
						"hindi": "मध्य-बॉस को हरा दिया। फिर भी, आइवी का साया और गहरा होता गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
