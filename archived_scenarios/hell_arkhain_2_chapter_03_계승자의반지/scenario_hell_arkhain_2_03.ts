export const scenario_hell_arkhain_2_03 = {
	"scenario_id": "hell_arkhain_2_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
					"type": "speech",
					"content": {
						"korean": "지옥의 틈새. 안내자는 조용히 우리를 기다리고 있었다.",
						"english": "The Hell's Rift. The Guide waited silently for us.",
						"japanese": "地獄の裂け目。案内者は静かに我々を待っていた。",
						"chinese": "地狱裂隙。向导静静地等待着我们。",
						"french": "La Faille infernale. Le Guide nous attendait en silence.",
						"spanish": "La Grieta del Infierno. El Guía nos esperaba en silencio.",
						"vietnamese": "Kẽ nứt địa ngục. Người dẫn đường lặng lẽ chờ đợi chúng ta.",
						"thai": "รอยแยกแห่งนรก ผู้นำทางรอเราอย่างเงียบงัน",
						"hindi": "नरक का दरार। मार्गदर्शक चुपचाप हमारा इंतजार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "안내자님. 이번 길도… 평탄치 않습니다.",
						"english": "Guide. This path, too... is not easy.",
						"japanese": "案内者様。今回の道も…平坦ではありません。",
						"chinese": "向导。这条路也……不平坦。",
						"french": "Guide. Ce chemin aussi... n'est pas aisé.",
						"spanish": "Guía. Este camino también... no es fácil.",
						"vietnamese": "Thưa Người dẫn đường. Con đường này cũng… không bằng phẳng.",
						"thai": "ท่านผู้นำทาง เส้นทางนี้ก็... ไม่ง่ายเลย",
						"hindi": "मार्गदर्शक। यह रास्ता भी... आसान नहीं है।"
					},
					"type": "speech",
					"speaker": "soot",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "힘들어도 괜찮아. 길이 있다는 게 중요하지.",
						"english": "It's fine if it's hard. The important thing is that there's a path.",
						"japanese": "辛くても大丈夫。道があることが大切だ。",
						"chinese": "艰难也没关系。重要的是有路可走。",
						"french": "Ce n'est pas grave si c'est dur. L'important, c'est qu'il y ait un chemin.",
						"spanish": "Está bien si es difícil. Lo importante es que haya un camino.",
						"vietnamese": "Khó khăn cũng không sao. Quan trọng là có đường đi.",
						"thai": "ลำบากก็ไม่เป็นไร สิ่งสำคัญคือมีหนทาง",
						"hindi": "मुश्किल हो तो भी ठीक है। महत्वपूर्ण यह है कि एक रास्ता है।"
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
						3,
						2
					],
					"speaker": "soot",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "안내자님. 손가락에 반지가… 늘었습니다.",
						"english": "Guide. The rings on your fingers... have increased.",
						"japanese": "案内者様。指の指輪が…増えました。",
						"chinese": "向导。您手上的戒指……增多了。",
						"french": "Guide. Les anneaux à vos doigts... ont augmenté.",
						"spanish": "Guía. Los anillos en sus dedos... han aumentado.",
						"vietnamese": "Thưa Người dẫn đường. Số nhẫn trên ngón tay… đã tăng lên.",
						"thai": "ท่านผู้นำทาง แหวนบนนิ้ว... เพิ่มขึ้นแล้ว",
						"hindi": "मार्गदर्शक। आपकी उंगलियों पर अंगूठियाँ... बढ़ गई हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "응? 원래 저렇게 많았나?",
						"english": "Huh? Were there always so many?",
						"japanese": "え？元々あんなに多かったっけ？",
						"chinese": "嗯？本来就有这么多吗？",
						"french": "Hein ? Il y en avait déjà autant ?",
						"spanish": "¿Eh? ¿Ya había tantos?",
						"vietnamese": "Hả? Ban đầu đã nhiều như vậy sao?",
						"thai": "หือ? เดิมทีมันเยอะขนาดนี้เลยเหรอ?",
						"hindi": "क्या? क्या पहले से इतने सारे थे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "안내자는 말없이 손을 흔들었다. 반지가 빛났다.",
						"english": "The Guide waved a hand silently. The rings shone.",
						"japanese": "案内者は何も言わずに手を振った。指輪が輝いた。",
						"chinese": "向导默默地挥了挥手。戒指闪耀着光芒。",
						"french": "Le Guide fit un signe de la main silencieusement. Les anneaux brillèrent.",
						"spanish": "El Guía agitó la mano en silencio. Los anillos brillaron.",
						"vietnamese": "Người dẫn đường lặng lẽ vẫy tay. Những chiếc nhẫn phát sáng.",
						"thai": "ผู้นำทางโบกมืออย่างเงียบงัน แหวนส่องประกาย",
						"hindi": "मार्गदर्शक ने चुपचाप हाथ हिलाया। अंगूठियाँ चमक उठीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "soot",
					"action": "enter"
				},
				{
					"speaker": "soot",
					"emotion": "base",
					"content": {
						"korean": "전에 봤을 때보다… 하나 더 늘어난 것 같아요.",
						"english": "It seems there's one more than when I last saw it...",
						"japanese": "前より…一つ増えている気がします。",
						"chinese": "好像比之前看到的…又多了一个。",
						"french": "Il me semble qu'il y en a un de plus que la dernière fois...",
						"spanish": "Parece que hay uno más que la última vez que lo vi...",
						"vietnamese": "Hình như nhiều hơn một cái so với lần trước tôi thấy...",
						"thai": "เหมือนจะเพิ่มมาอีกวงหนึ่ง... มากกว่าตอนที่ฉันเห็นครั้งก่อน",
						"hindi": "जब मैंने इसे पिछली बार देखा था उससे एक ज़्यादा लग रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기분 탓 아니야? 반지에 관심이 많으신가 보지.",
						"english": "Just your imagination? Perhaps you're just very interested in rings.",
						"japanese": "気のせいじゃない？指輪に興味があるんでしょ。",
						"chinese": "是不是错觉？你可能对戒指很感兴趣吧。",
						"french": "Ce n'est pas ton imagination ? Tu dois juste être très intéressé par les bagues.",
						"spanish": "¿No será tu imaginación? Quizás te interesan mucho los anillos.",
						"vietnamese": "Không phải ảo giác đâu? Có vẻ như cô rất quan tâm đến nhẫn.",
						"thai": "คิดไปเองรึเปล่า? คงจะสนใจแหวนมากสินะ",
						"hindi": "क्या यह सिर्फ़ तुम्हारा भ्रम नहीं है? शायद तुम्हें अंगूठियों में बहुत दिलचस्पी है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "soot",
					"emotion": "sad",
					"content": {
						"korean": "이상해요. 똑같은 반지인데… 계속 늘어나요.",
						"english": "It's strange. It's the same ring, but... it keeps increasing.",
						"japanese": "おかしいな。同じ指輪なのに…どんどん増えていく。",
						"chinese": "真奇怪。明明是同一枚戒指…却一直在增加。",
						"french": "C'est étrange. C'est la même bague, mais... elles continuent d'augmenter.",
						"spanish": "Es extraño. Es el mismo anillo, pero... sigue aumentando.",
						"vietnamese": "Lạ thật. Vẫn là chiếc nhẫn đó nhưng... nó cứ tăng lên.",
						"thai": "แปลกจัง ทั้งที่เป็นแหวนวงเดียวกันแท้ ๆ... แต่มันกลับเพิ่มขึ้นเรื่อย ๆ",
						"hindi": "अजीब है। यह वही अंगूठी है, लेकिन... यह बढ़ती जा रही है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "신경 쓰지 마. 저분은 우리를 돕고 있잖아.",
						"english": "Don't mind it. That person is helping us, after all.",
						"japanese": "気にするな。あの人は私たちを助けてくれているんだ。",
						"chinese": "别在意。那个人不是在帮我们吗？",
						"french": "Ne t'en fais pas. Cette personne nous aide, après tout.",
						"spanish": "No te preocupes. Esa persona nos está ayudando, después de todo.",
						"vietnamese": "Đừng bận tâm. Dù sao thì người đó cũng đang giúp chúng ta.",
						"thai": "อย่าไปใส่ใจเลย ท่านผู้นั้นกำลังช่วยเราอยู่นี่นา",
						"hindi": "ध्यान मत दो। वह व्यक्ति हमारी मदद कर रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "soot",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "안내자님의 손가락에… 이제 4개가 끼워져 있어요.",
						"english": "On the Guide's finger... there are now 4 rings.",
						"japanese": "案内人様の指に…もう4つもはまってる。",
						"chinese": "引导者的手指上…现在已经戴了4枚了。",
						"french": "Sur le doigt du Guide... il y a maintenant 4 bagues.",
						"spanish": "En el dedo del Guía... ahora hay 4 anillos.",
						"vietnamese": "Trên ngón tay của Người Hướng Dẫn... giờ đã có 4 chiếc.",
						"thai": "บนนิ้วของท่านผู้นำ... ตอนนี้มีแหวน 4 วงแล้ว",
						"hindi": "मार्गदर्शक की उंगली पर... अब 4 अंगूठियाँ हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "soot"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐야? 진짜 늘어난다고?",
						"english": "What? They're really increasing?",
						"japanese": "え？本当に増えてるのか？",
						"chinese": "什么？真的在增加？",
						"french": "Quoi ? Elles augmentent vraiment ?",
						"spanish": "¿Qué? ¿De verdad están aumentando?",
						"vietnamese": "Gì cơ? Thật sự tăng lên à?",
						"thai": "อะไรนะ? เพิ่มขึ้นจริง ๆ เหรอ?",
						"hindi": "क्या? वे सच में बढ़ रही हैं?"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 반지에… 뭔가 있어. 확실히.",
						"english": "There's something about those rings... definitely.",
						"japanese": "あの指輪には…何かある。確かに。",
						"chinese": "那些戒指…肯定有问题。",
						"french": "Il y a quelque chose à propos de ces bagues... c'est certain.",
						"spanish": "Hay algo en esos anillos... definitivamente.",
						"vietnamese": "Có gì đó ở những chiếc nhẫn đó... chắc chắn rồi.",
						"thai": "แหวนนั่น... ต้องมีอะไรแน่ ๆ",
						"hindi": "उन अंगूठियों में... कुछ तो है। निश्चित रूप से।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "안내자는 미소를 지었다. 손가락의 반지가 유혹하듯 빛났다.",
						"english": "The Guide smiled. The rings on their finger glittered alluringly.",
						"japanese": "案内人は微笑んだ。指の指輪が誘惑するように輝いた。",
						"chinese": "引导者微笑了。他手指上的戒指诱惑般地闪耀着。",
						"french": "Le Guide sourit. Les bagues à son doigt scintillaient de manière séduisante.",
						"spanish": "El Guía sonrió. Los anillos en su dedo brillaron de forma seductora.",
						"vietnamese": "Người Hướng Dẫn mỉm cười. Những chiếc nhẫn trên ngón tay ông ta lấp lánh như đang quyến rũ.",
						"thai": "ท่านผู้นำยิ้มออกมา แหวนบนนิ้วของท่านส่องประกายเย้ายวน",
						"hindi": "मार्गदर्शक मुस्कुराया। उसकी उंगली पर लगी अंगूठियाँ मोहक ढंग से चमक उठीं।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "반지에 탐욕을 품었는가? 어리석은 자들!",
						"english": "Do you harbor greed for the rings? Foolish ones!",
						"japanese": "指輪に貪欲を抱いたか？愚かな者たちめ！",
						"chinese": "对戒指心生贪婪了吗？愚蠢的家伙们！",
						"french": "Portez-vous la cupidité pour les bagues ? Imbéciles !",
						"spanish": "¿Albergáis codicia por los anillos? ¡Necios!",
						"vietnamese": "Các ngươi ôm lòng tham lam với những chiếc nhẫn sao? Bọn ngu ngốc!",
						"thai": "พวกเจ้าโลภในแหวนรึ? ช่างโง่เขลา!",
						"hindi": "क्या तुम अंगूठियों के प्रति लालच रखते हो? मूर्खों!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 너야말로 탐욕에 물들었잖아!",
						"english": "Shut up! You're the one tainted by greed!",
						"japanese": "黙れ！お前こそ貪欲に染まっているじゃないか！",
						"chinese": "闭嘴！你才是被贪婪侵蚀了！",
						"french": "Tais-toi ! C'est toi qui es souillé par la cupidité !",
						"spanish": "¡Cállate! ¡Tú eres el que está manchado por la codicia!",
						"vietnamese": "Im đi! Ngươi mới là kẻ bị lòng tham nhũng!",
						"thai": "หุบปาก! แกนั่นแหละที่เปื้อนไปด้วยความโลภ!",
						"hindi": "चुप रहो! तुम ही लालच में डूबे हुए हो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 너희의 미래다. 반지는 달콤한 거짓말이지.",
						"english": "{random_boss} is your future. The ring is a sweet lie.",
						"japanese": "{random_boss}が君たちの未来だ。指輪は甘い嘘にすぎない。",
						"chinese": "{random_boss}是你们的未来。戒指是甜蜜的谎言。",
						"french": "{random_boss} est votre futur. L'anneau n'est qu'un doux mensonge.",
						"spanish": "{random_boss} es vuestro futuro. El anillo es una dulce mentira.",
						"vietnamese": "{random_boss} là tương lai của các ngươi. Chiếc nhẫn chỉ là một lời nói dối ngọt ngào.",
						"thai": "{random_boss} คืออนาคตของพวกเจ้า แหวนคือคำโกหกที่หอมหวาน",
						"hindi": "{random_boss} तुम्हारा भविष्य है। अंगूठी एक मीठा झूठ है।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "으윽… 바… 반지를… 탐한… 끝은… 같다…",
						"english": "Ugh... The... The end... of coveting... the ring... is always the same...",
						"japanese": "うぅ… ゆ… 指輪を… 貪った… 末路は… 同じだ…",
						"chinese": "呃… 觊觎… 戒指的… 结局… 都一样…",
						"french": "Urgh... La... La fin... de la convoitise... de l'anneau... est toujours la même...",
						"spanish": "Ugh... El... El fin... de codiciar... el anillo... es siempre el mismo...",
						"vietnamese": "Ư... Cái kết... của việc... thèm muốn... chiếc nhẫn... đều như nhau...",
						"thai": "อึก... จุดจบ... ของการ... โหยหา... แหวน... มันก็เหมือนกัน...",
						"hindi": "उफ़... अं... अंगूठी... का लालच... अंत... हमेशा एक जैसा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 저게 대체 뭘 의미하는 거지?",
						"english": "What was that? What does that even mean?",
						"japanese": "何を言ってるんだ？あれはいったい何を意味するんだ？",
						"chinese": "什么意思？那到底是什么意思？",
						"french": "Qu'est-ce que c'était ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué fue eso? ¿Qué significa eso?",
						"vietnamese": "Cái gì cơ? Rốt cuộc cái đó nghĩa là gì?",
						"thai": "อะไรนะ? นั่นหมายความว่าอะไรกันแน่?",
						"hindi": "क्या बकवास है? आखिर इसका मतलब क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "soot",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "안내자님. 그 반지는… 어쩌면 저희의 미래를 보여주는 걸지도 모릅니다.",
						"english": "Guide. That ring... might be showing us our future.",
						"japanese": "案内者様。あの指輪は… もしかしたら、私たちの未来を示しているのかもしれません。",
						"chinese": "引导者。那枚戒指… 也许正在向我们展示我们的未来。",
						"french": "Guide. Cet anneau... pourrait nous montrer notre futur.",
						"spanish": "Guía. Ese anillo... quizás nos esté mostrando nuestro futuro.",
						"vietnamese": "Người dẫn đường. Chiếc nhẫn đó... có lẽ đang cho chúng ta thấy tương lai của mình.",
						"thai": "ผู้ชี้นำ แหวนนั่น... อาจจะกำลังแสดงอนาคตของเราอยู่ก็ได้",
						"hindi": "मार्गदर्शक। वह अंगूठी... शायद हमें हमारा भविष्य दिखा रही है।"
					},
					"speaker": "soot",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "안내자의 손. 늘어난 반지. 수트는 불안한 눈빛으로 다음 길을 가리켰다.",
						"english": "The Guide's hand. The enlarged ring. Suit pointed to the next path with uneasy eyes.",
						"japanese": "案内者の手。肥大化した指輪。スーツは不安げな目で次の道を指し示した。",
						"chinese": "引导者的手。放大的戒指。西装不安地指向了下一条路。",
						"french": "La main du Guide. L'anneau agrandi. Le costume indiqua le chemin suivant d'un œil inquiet.",
						"spanish": "La mano del Guía. El anillo agrandado. El Traje señaló el siguiente camino con ojos inquietos.",
						"vietnamese": "Bàn tay của Người dẫn đường. Chiếc nhẫn to lớn. Bộ Vest chỉ vào con đường tiếp theo với ánh mắt bất an.",
						"thai": "มือของผู้ชี้นำ แหวนที่ขยายใหญ่ขึ้น สูทชี้ไปทางเดินถัดไปด้วยแววตาไม่สบายใจ",
						"hindi": "मार्गदर्शक का हाथ। बड़ी हुई अंगूठी। सूट ने बेचैन आँखों से अगले रास्ते की ओर इशारा किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "욕망은 너희를 집어삼킬 것이다! 결국 모두 {random_boss}처럼 될 테지!",
						"english": "Greed will consume you! In the end, you'll all become like {random_boss}!",
						"japanese": "欲望は君たちを飲み込むだろう！結局、みんな{random_boss}のようになるのだ！",
						"chinese": "欲望会吞噬你们！最终，你们都会变成{random_boss}那样！",
						"french": "La cupidité vous dévorera ! Au final, vous deviendrez tous comme {random_boss} !",
						"spanish": "¡La codicia os consumirá! ¡Al final, todos seréis como {random_boss}!",
						"vietnamese": "Lòng tham sẽ nuốt chửng các ngươi! Cuối cùng, tất cả các ngươi sẽ trở thành như {random_boss}!",
						"thai": "ความโลภจะกลืนกินพวกเจ้า! สุดท้ายพวกเจ้าก็จะต้องเป็นเหมือน {random_boss}!",
						"hindi": "लालच तुम्हें निगल जाएगा! अंत में, तुम सब {random_boss} जैसे बन जाओगे!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니! 우린 너와 달라! 절대 포기 안 해!",
						"english": "No! We're different from you! We'll never give up!",
						"japanese": "違う！私たちはあなたとは違う！絶対に諦めない！",
						"chinese": "不！我们和你不一样！我们绝不会放弃！",
						"french": "Non ! Nous sommes différents de toi ! Nous n'abandonnerons jamais !",
						"spanish": "¡No! ¡Somos diferentes a ti! ¡Nunca nos rendiremos!",
						"vietnamese": "Không! Chúng tôi khác cô! Chúng tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "ไม่! พวกเราไม่เหมือนแก! เราไม่มีวันยอมแพ้!",
						"hindi": "नहीं! हम तुमसे अलग हैं! हम कभी हार नहीं मानेंगे!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"그림자 안내자의 손. 만날 때마다 반지의 수가 늘어났다.",
			"똑같은 반지들. 그것은 탐욕의 흔적인가, 아니면 겹쳐진 미래의 징조인가.",
			"우리의 발걸음은 점점 더 깊은 유혹 속으로 향한다.",
			"이제 선택의 시간. 우리는 무엇을 쥐게 될까."
		],
		"english": [
			"The Shadow Guide's hand. Each meeting, the number of rings grew.",
			"Identical rings. Are they a mark of greed, or a sign of overlapping futures?",
			"Our steps lead us deeper into temptation.",
			"Now, the time for choice. What will we grasp?"
		],
		"japanese": [
			"影の案内者の手。会うたびに指輪の数が増えていった。",
			"同じ指輪。それは貪欲の証か、それとも重なり合う未来の兆しか。",
			"我々の足取りは、ますます深い誘惑の中へと向かう。",
			"今、選択の時。我々は何を掴むだろうか。"
		],
		"chinese": [
			"暗影向导的手。每次相遇，戒指的数量都在增加。",
			"相同的戒指。那是贪婪的印记，还是重叠未来的征兆？",
			"我们的脚步正走向更深的诱惑。",
			"现在是选择的时候。我们会抓住什么？"
		],
		"french": [
			"La main du Guide des ombres. À chaque rencontre, le nombre d'anneaux augmentait.",
			"Des anneaux identiques. Est-ce une marque de cupidité, ou le signe de futurs entrelacés ?",
			"Nos pas nous mènent toujours plus loin dans la tentation.",
			"C'est l'heure du choix. Que saisirons-nous ?"
		],
		"spanish": [
			"La mano del Guía Sombrío. En cada encuentro, el número de anillos aumentaba.",
			"Anillos idénticos. ¿Son una marca de avaricia o un signo de futuros superpuestos?",
			"Nuestros pasos nos llevan cada vez más profundo en la tentación.",
			"Ahora, el momento de elegir. ¿Qué agarraremos?"
		],
		"vietnamese": [
			"Bàn tay của Người dẫn đường bóng tối. Mỗi lần gặp mặt, số lượng nhẫn lại tăng lên.",
			"Những chiếc nhẫn giống hệt nhau. Đó là dấu vết của lòng tham, hay điềm báo về những tương lai chồng chéo?",
			"Bước chân của chúng ta ngày càng lún sâu vào cám dỗ.",
			"Giờ là lúc lựa chọn. Chúng ta sẽ nắm giữ điều gì?"
		],
		"thai": [
			"มือของผู้นำทางเงา ทุกครั้งที่พบเจอ จำนวนแหวนก็เพิ่มขึ้น",
			"แหวนที่เหมือนกัน นั่นคือรอยบาปของความโลภ หรือเป็นสัญญาณของอนาคตที่ทับซ้อนกัน?",
			"ก้าวเดินของเรานำพาเราลึกซึ้งยิ่งขึ้นสู่การล่อลวง",
			"ถึงเวลาแห่งการเลือกแล้ว เราจะคว้าอะไรไว้?"
		],
		"hindi": [
			"छाया मार्गदर्शक का हाथ। हर मुलाकात पर, अंगूठियों की संख्या बढ़ती गई।",
			"एक जैसी अंगूठियाँ। क्या यह लालच का निशान है, या ओवरलैप होते भविष्य का संकेत?",
			"हमारे कदम हमें गहरे लालच में ले जा रहे हैं।",
			"अब, चुनाव का समय। हम क्या पकड़ेंगे?"
		]
	}
} as const;
