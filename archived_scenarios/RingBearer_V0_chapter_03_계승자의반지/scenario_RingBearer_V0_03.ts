export const scenario_RingBearer_V0_03 = {
	"scenario_id": "RingBearer_V0_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"valerius": {
			"id": "mon_b79a51e1-6ec9-45d6-822a-8ed03eff4707",
			"name": {
				"korean": "발레리우스 손 경",
				"english": "Lord Valerius Thorne",
				"japanese": "ヴァレリウス・ソーン卿",
				"chinese": "瓦勒里乌斯·索恩大人",
				"french": "Seigneur Valerius Thorne",
				"spanish": "Lord Valerius Thorne",
				"vietnamese": "Lãnh chúa Valerius Thorne",
				"thai": "ลอร์ดวาเลริอุส ธอร์น",
				"hindi": "लॉर्ड वेलेरियस थॉर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e5128045-4934-46e1-5b80-749dad11cb00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/999ee15c-1d55-4446-6a01-13e0dc7b9600/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"무너진 왕좌의 회랑. 부서진 왕관과 녹아내린 황금들이 발길을 막았다.",
			"힘을 통제할 수 있다고 믿었던 자들의 흔적.",
			"그리고 그곳에서, 후회하는 자가 입을 열었다.",
			"들리는 모든 권유를 의심하라."
		],
		"english": [
			"The collapsed throne's corridor. Broken crowns and molten gold blocked the path.",
			"Traces of those who believed they could control power.",
			"And there, the regretful one spoke.",
			"Doubt every persuasion you hear."
		],
		"japanese": [
			"崩れ落ちた玉座の回廊。砕けた王冠と溶けた黄金が道を阻んだ。",
			"力を制御できると信じていた者たちの痕跡。",
			"そしてそこで、後悔する者が口を開いた。",
			"聞こえるすべての誘惑を疑え。"
		],
		"chinese": [
			"坍塌王座的走廊。破碎的王冠与熔化的黄金阻碍了去路。",
			"那些自以为能掌控力量者的痕迹。",
			"而在那里，悔恨者开口了。",
			"怀疑你所听到的一切劝诱。"
		],
		"french": [
			"Le couloir du trône effondré. Des couronnes brisées et de l'or fondu bloquaient le passage.",
			"Les vestiges de ceux qui croyaient pouvoir maîtriser le pouvoir.",
			"Et là, celui qui regrettait prit la parole.",
			"Doute de toute persuasion que tu entends."
		],
		"spanish": [
			"El corredor del trono derrumbado. Coronas rotas y oro fundido bloqueaban el camino.",
			"Las huellas de quienes creyeron poder controlar el poder.",
			"Y allí, el arrepentido habló.",
			"Duda de toda persuasión que escuches."
		],
		"vietnamese": [
			"Hành lang ngai vàng đổ nát. Những vương miện vỡ nát và vàng tan chảy chặn lối.",
			"Dấu vết của những kẻ tin rằng mình có thể kiểm soát sức mạnh.",
			"Và ở đó, kẻ hối hận đã cất lời.",
			"Hãy nghi ngờ mọi lời khuyên nhủ mà bạn nghe thấy."
		],
		"thai": [
			"โถงทางเดินของบัลลังก์ที่พังทลาย มงกุฎที่แตกหักและทองคำที่หลอมละลายขวางทางไว้",
			"ร่องรอยของผู้ที่เชื่อว่าตนเองควบคุมพลังได้",
			"และที่นั่น ผู้ที่เสียใจก็เอ่ยปาก",
			"จงสงสัยในทุกคำชักชวนที่ได้ยิน"
		],
		"hindi": [
			"ढह चुके सिंहासन का गलियारा। टूटे हुए मुकुट और पिघला हुआ सोना रास्ता रोक रहे थे।",
			"उन लोगों के निशान जो मानते थे कि वे शक्ति को नियंत्रित कर सकते हैं।",
			"और वहीं, पश्चाताप करने वाले ने मुंह खोला।",
			"हर उस सलाह पर संदेह करो जो तुम सुनते हो।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "무너진 왕좌의 회랑. 부서진 왕관들이 흩어져 있었다.",
						"english": "The collapsed throne's corridor. Broken crowns lay scattered.",
						"japanese": "崩れ落ちた玉座の回廊。砕けた王冠が散らばっていた。",
						"chinese": "坍塌王座的走廊。破碎的王冠散落一地。",
						"french": "Le couloir du trône effondré. Des couronnes brisées gisaient éparpillées.",
						"spanish": "El corredor del trono derrumbado. Coronas rotas yacían esparcidas.",
						"vietnamese": "Hành lang ngai vàng đổ nát. Những vương miện vỡ nát nằm rải rác.",
						"thai": "โถงทางเดินของบัลลังก์ที่พังทลาย มงกุฎที่แตกหักกระจัดกระจาย",
						"hindi": "ढह चुके सिंहासन का गलियारा। टूटे हुए मुकुट बिखरे पड़े थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그 회랑인가…?",
						"english": "Is this that corridor...?",
						"japanese": "ここが、あの回廊なのか…？",
						"chinese": "这里就是那个走廊吗……？",
						"french": "Est-ce ce couloir...?",
						"spanish": "Es este ese corredor...?",
						"vietnamese": "Đây có phải là hành lang đó không...?",
						"thai": "นี่คือโถงทางเดินนั้นหรือ...?",
						"hindi": "क्या यह वही गलियारा है...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라진 자들의 손가락엔 모두 똑같은 황금 띠 자국이 있었다.",
						"english": "On the fingers of the vanished, all had the same golden band mark.",
						"japanese": "消え去った者たちの指には、皆同じ黄金の帯の痕があった。",
						"chinese": "消失者们的手指上，都有着同样的金色指环印记。",
						"french": "Sur les doigts des disparus, tous portaient la même marque de bande dorée.",
						"spanish": "En los dedos de los desaparecidos, todos tenían la misma marca de banda dorada.",
						"vietnamese": "Trên ngón tay của những kẻ biến mất, tất cả đều có cùng dấu vết của dải vàng.",
						"thai": "บนนิ้วของผู้ที่หายสาบสูญ ทุกคนมีรอยแหวนทองคำแบบเดียวกัน",
						"hindi": "गायब हुए लोगों की उंगलियों पर, सभी के पास एक ही सुनहरी पट्टी का निशान था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거친 전투의 흔적. 산산조각 난 왕관들이 발길을 막았다.",
						"english": "Traces of fierce battle. Shattered crowns blocked the path.",
						"japanese": "激しい戦いの痕跡。粉々になった王冠が道を阻んだ。",
						"chinese": "激烈战斗的痕迹。粉碎的王冠阻碍了去路。",
						"french": "Des traces de bataille féroce. Des couronnes en miettes bloquaient le passage.",
						"spanish": "Rastros de una batalla feroz. Coronas destrozadas bloqueaban el camino.",
						"vietnamese": "Dấu vết của trận chiến khốc liệt. Những vương miện vỡ tan tành chặn lối.",
						"thai": "ร่องรอยของการต่อสู้ที่ดุเดือด มงกุฎที่แตกเป็นเสี่ยงๆ ขวางทางไว้",
						"hindi": "भयंकर युद्ध के निशान। टूटे हुए मुकुटों ने रास्ता रोक दिया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "valerius",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "valerius",
					"type": "speech",
					"content": {
						"korean": "…통제할 수 있다고 믿었지.",
						"english": "...I believed I could control it.",
						"japanese": "…制御できると信じていた。",
						"chinese": "……我曾以为可以控制它。",
						"french": "...Je croyais pouvoir le contrôler.",
						"spanish": "...Creía que podía controlarlo.",
						"vietnamese": "...Tôi đã tin rằng mình có thể kiểm soát nó.",
						"thai": "...ฉันเชื่อว่าฉันควบคุมมันได้",
						"hindi": "...मुझे विश्वास था कि मैं इसे नियंत्रित कर सकता हूँ।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "valerius",
					"content": {
						"korean": "결국 통제당한 건 나였어.",
						"english": "In the end, it was I who was controlled.",
						"japanese": "結局、制御されていたのは私だった。",
						"chinese": "最终，被控制的是我。",
						"french": "En fin de compte, c'est moi qui ai été contrôlé.",
						"spanish": "Al final, fui yo quien fue controlado.",
						"vietnamese": "Cuối cùng, kẻ bị kiểm soát lại là tôi.",
						"thai": "สุดท้ายแล้ว ฉันต่างหากที่เป็นฝ่ายถูกควบคุม",
						"hindi": "आखिर में, मैं ही नियंत्रित हुआ।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Quel est ce bruit ?",
						"spanish": "¿Qué fue ese sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "यह क्या आवाज़ है?"
					}
				},
				{
					"speaker": "valerius",
					"type": "speech",
					"content": {
						"korean": "이 회랑에서 들리는 어떤 권유든… 의심해도 좋아.",
						"english": "Any invitation you hear in this corridor... you'd do well to doubt it.",
						"japanese": "この回廊で聞こえる誘いは…疑ってかかっていい。",
						"chinese": "在这回廊里听到的任何引诱…都值得怀疑。",
						"french": "Toute invitation que vous entendrez dans ce couloir… vous feriez bien d'en douter.",
						"spanish": "Cualquier invitación que escuches en este corredor... es mejor que la dudes.",
						"vietnamese": "Bất kỳ lời mời nào nghe được trong hành lang này... hãy cứ nghi ngờ.",
						"thai": "คำชวนใด ๆ ที่ได้ยินในโถงทางเดินนี้... จงสงสัยไว้ก่อน",
						"hindi": "इस गलियारे में सुनाई देने वाले किसी भी निमंत्रण पर... आपको शक करना चाहिए。"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "흩어진 왕관들. 모두 크기와 모양이 미묘하게 같았다. 마치 한 사람이 여러 번 썼던 것처럼.",
						"english": "Scattered crowns. All subtly alike in size and shape. As if worn multiple times by one person.",
						"japanese": "散らばった王冠。どれも大きさや形が微妙に同じだった。まるで一人の人物が何度も身につけたかのように。",
						"chinese": "散落的王冠。它们的大小和形状都微妙地相同。仿佛是同一个人佩戴过多次。",
						"french": "Des couronnes éparpillées. Toutes subtilement semblables en taille et en forme. Comme si elles avaient été portées plusieurs fois par la même personne.",
						"spanish": "Coronas dispersas. Todas sutilmente iguales en tamaño y forma. Como si una sola persona las hubiera usado varias veces.",
						"vietnamese": "Những chiếc vương miện nằm rải rác. Tất cả đều giống nhau một cách tinh tế về kích thước và hình dáng. Như thể đã được một người đeo nhiều lần.",
						"thai": "มงกุฎที่กระจัดกระจาย ทุกชิ้นมีขนาดและรูปร่างที่คล้ายกันอย่างประหลาด ราวกับคนคนเดียวเคยสวมใส่มาหลายครั้ง",
						"hindi": "बिखरे हुए मुकुट। सभी आकार और आकृति में सूक्ष्म रूप से समान थे। मानो एक ही व्यक्ति ने उन्हें कई बार पहना हो।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "valerius",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "valerius",
					"type": "speech",
					"content": {
						"korean": "그 반지는… 힘을 빌려주는 게 아니야.",
						"english": "That ring... it doesn't lend power.",
						"japanese": "その指輪は…力を貸すのではない。",
						"chinese": "那枚戒指…它不是借给你力量。",
						"french": "Cette bague… elle ne prête pas de pouvoir.",
						"spanish": "Ese anillo... no presta poder.",
						"vietnamese": "Chiếc nhẫn đó... không phải là cho mượn sức mạnh.",
						"thai": "แหวนนั่น... ไม่ได้ให้ยืมพลัง",
						"hindi": "वह अंगूठी... वह शक्ति नहीं देती।"
					}
				},
				{
					"content": {
						"korean": "그저 잠식할 뿐이지.",
						"english": "It merely consumes.",
						"japanese": "ただ、蝕むだけだ。",
						"chinese": "它只是侵蚀而已。",
						"french": "Elle ne fait que consumer.",
						"spanish": "Solo consume.",
						"vietnamese": "Nó chỉ đơn thuần là ăn mòn thôi.",
						"thai": "มันแค่กัดกินเท่านั้น",
						"hindi": "वह बस खा जाती है।"
					},
					"type": "speech",
					"speaker": "valerius",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 사라진 사람들도…?",
						"english": "Then the vanished people...?",
						"japanese": "では、消えた人々も…？",
						"chinese": "那么那些消失的人们…？",
						"french": "Alors les gens disparus...?",
						"spanish": "¿Entonces la gente desaparecida...?",
						"vietnamese": "Vậy những người biến mất cũng...?",
						"thai": "แล้วคนที่หายไปก็...?",
						"hindi": "तो गायब हुए लोग भी...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "valerius",
					"content": {
						"korean": "모두 자신을 통제할 수 있다고 믿었을 거야.",
						"english": "They all must have believed they could control themselves.",
						"japanese": "皆、自分を制御できると信じていたのだろう。",
						"chinese": "他们一定都相信自己可以掌控一切。",
						"french": "Ils devaient tous croire qu'ils pouvaient se contrôler.",
						"spanish": "Todos debieron creer que podían controlarse.",
						"vietnamese": "Họ đều đã tin rằng mình có thể tự kiểm soát.",
						"thai": "ทุกคนคงเชื่อว่าตัวเองควบคุมได้",
						"hindi": "उन सभी को विश्वास रहा होगा कि वे खुद को नियंत्रित कर सकते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "valerius",
					"content": {
						"korean": "그 환청에… 속지 마.",
						"english": "Don't be fooled by those hallucinations.",
						"japanese": "その幻聴に…騙されるな。",
						"chinese": "别被那些幻听…骗了。",
						"french": "Ne te laisse pas berner par ces hallucinations.",
						"spanish": "No te dejes engañar por esas alucinaciones.",
						"vietnamese": "Đừng bị những ảo giác đó... lừa.",
						"thai": "อย่าหลงเชื่อภาพหลอนเหล่านั้น",
						"hindi": "उन मतिभ्रमों के झांसे में मत आना।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "회랑 깊은 곳에서 부드러운 속삭임이 들려왔다.",
						"english": "A soft whisper echoed from deep within the corridor.",
						"japanese": "回廊の奥深くから、柔らかい囁き声が聞こえてきた。",
						"chinese": "回廊深处传来一阵轻柔的低语。",
						"french": "Un doux murmure résonnait du fond du couloir.",
						"spanish": "Un suave susurro se escuchó desde lo más profundo del corredor.",
						"vietnamese": "Một tiếng thì thầm nhẹ nhàng vang vọng từ sâu trong hành lang.",
						"thai": "เสียงกระซิบแผ่วเบาดังมาจากส่วนลึกของโถงทางเดิน",
						"hindi": "गलियारे की गहराई से एक कोमल फुसफुसाहट सुनाई दी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…뭐라고 하는 것 같지 않아?",
						"english": "...Don't you think it's saying something?",
						"japanese": "…何か言っているように聞こえないか？",
						"chinese": "…你没觉得它在说什么吗？",
						"french": "...Tu n'as pas l'impression que ça dit quelque chose ?",
						"spanish": "...¿No te parece que está diciendo algo?",
						"vietnamese": "...Bạn không nghĩ là nó đang nói gì đó sao?",
						"thai": "...ไม่คิดเหรอว่ามันกำลังพูดอะไรบางอย่าง?",
						"hindi": "...क्या तुम्हें नहीं लगता कि यह कुछ कह रहा है?"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기분 탓이야.",
						"english": "Just a feeling.",
						"japanese": "気のせいだよ。",
						"chinese": "是错觉。",
						"french": "C'est ton imagination.",
						"spanish": "Es tu imaginación.",
						"vietnamese": "Chỉ là cảm giác thôi.",
						"thai": "แค่รู้สึกไปเองน่า.",
						"hindi": "यह बस तुम्हारा वहम है।"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…한 번만 손에 올려놓아 보라고?",
						"english": "...Just put it in my hand once?",
						"japanese": "…一度だけ手に乗せてみろと？",
						"chinese": "…只让我放在手上一次吗？",
						"french": "...Juste le poser dans ma main une fois ?",
						"spanish": "...¿Solo ponérmelo en la mano una vez?",
						"vietnamese": "...Chỉ một lần đặt lên tay thôi sao?",
						"thai": "…แค่ครั้งเดียวในมือหรือ?",
						"hindi": "…एक बार बस मेरे हाथ पर रख दो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "valerius",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "저게… 그 환청이야.",
						"english": "That's... the phantom.",
						"japanese": "あれが…あの幻聴だ。",
						"chinese": "那就是…那个幻听。",
						"french": "C'est... l'écho.",
						"spanish": "Ese es... el fantasma.",
						"vietnamese": "Đó là... ảo thanh đó.",
						"thai": "นั่นมัน…เสียงหลอนนั่นเอง.",
						"hindi": "वह... वह भ्रम है।"
					},
					"type": "speech",
					"speaker": "valerius",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 환청은 너희가 가장 원하는 것을 들려줄 거다.",
						"english": "The phantom will whisper your deepest desires.",
						"japanese": "その幻聴は、お前たちが最も望むものを聞かせるだろう。",
						"chinese": "那个幻听会让你听到你最想要的东西。",
						"french": "Cette hallucination te fera entendre ce que tu désires le plus.",
						"spanish": "Esa alucinación te hará escuchar lo que más deseas.",
						"vietnamese": "Ảo thanh đó sẽ cho các ngươi nghe thấy điều các ngươi khao khát nhất.",
						"thai": "เสียงหลอนนั้นจะบอกสิ่งที่พวกเจ้าปรารถนาที่สุด.",
						"hindi": "वह भ्रम तुम्हें वही सुनाएगा जो तुम सबसे ज़्यादा चाहते हो।"
					},
					"type": "speech",
					"speaker": "valerius"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…다가오는 그림자를 조심해.",
						"english": "...Beware the approaching shadow.",
						"japanese": "…迫り来る影に気をつけろ。",
						"chinese": "…小心那逼近的影子。",
						"french": "...Méfiez-vous de l'ombre qui approche.",
						"spanish": "...Ten cuidado con la sombra que se acerca.",
						"vietnamese": "...Cẩn thận với bóng tối đang đến gần.",
						"thai": "…ระวังเงาที่คืบคลานเข้ามา.",
						"hindi": "…आने वाली परछाई से सावधान रहना।"
					},
					"speaker": "valerius"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 힘을 거부하다니.",
						"english": "Fools. To refuse such power.",
						"japanese": "愚かな者たち。力を拒むとは。",
						"chinese": "蠢货。竟敢拒绝力量。",
						"french": "Fous. Refuser un tel pouvoir.",
						"spanish": "Necios. Negar el poder.",
						"vietnamese": "Lũ ngu ngốc. Dám khước từ sức mạnh.",
						"thai": "พวกโง่เง่า. กล้าปฏิเสธอำนาจเช่นนี้.",
						"hindi": "मूर्ख। शक्ति को अस्वीकार करना।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 너희도… 그분의 일부가 될 거야.",
						"english": "In the end... you too... will become part of Him.",
						"japanese": "結局… お前たちも… あの御方の… 一部となるだろう。",
						"chinese": "最终… 你们也会… 成为祂的一部分。",
						"french": "Au final... vous aussi... ferez partie de Lui.",
						"spanish": "Al final... vosotros también... seréis parte de Él.",
						"vietnamese": "Cuối cùng… các ngươi cũng… sẽ trở thành một phần của Người.",
						"thai": "ในที่สุด... พวกเจ้าก็จะ... กลายเป็นส่วนหนึ่งของพระองค์.",
						"hindi": "अंततः... तुम भी... उसके अंश बन जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 싸울 거야.",
						"english": "...I will fight again.",
						"japanese": "…また戦うぞ。",
						"chinese": "…我会再战。",
						"french": "...Je combattrai encore.",
						"spanish": "...Lucharé de nuevo.",
						"vietnamese": "...Ta sẽ chiến đấu lần nữa.",
						"thai": "...ข้าจะสู้ใหม่.",
						"hindi": "...मैं फिर लड़ूंगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결국… 그분은 너희를… 찾을 것이다…",
						"english": "Ultimately... He will... find you...",
						"japanese": "結局…あのお方はお前たちを…見つけ出すだろう…",
						"chinese": "最终…他会…找到你们的…",
						"french": "Au final... Il vous... trouvera...",
						"spanish": "Al final... Él los... encontrará...",
						"vietnamese": "Rốt cuộc... Ngài ấy sẽ... tìm thấy các ngươi...",
						"thai": "ท้ายที่สุด…ท่านก็จะ…ตามหาพวกเจ้าเจอ…",
						"hindi": "आखिरकार... वह तुम्हें... ढूंढ लेगा..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 끝났어!",
						"english": "Nonsense! It's finished!",
						"japanese": "何を言ってるんだ！終わったんだ！",
						"chinese": "你在说什么！已经结束了！",
						"french": "Qu'est-ce que tu racontes ! C'est fini !",
						"spanish": "¡¿Qué estás diciendo?! ¡Se acabó!",
						"vietnamese": "Ngươi đang nói gì vậy! Kết thúc rồi!",
						"thai": "พูดอะไรน่ะ! มันจบแล้ว!",
						"hindi": "क्या बक रहे हो! यह खत्म हो गया!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 회랑은 여전히 부드러운 환청을 흘려보냈다.",
						"english": "{random_boss} falls. Yet, the corridor still whispered soft illusions.",
						"japanese": "{random_boss}は倒れた。だが、回廊はなおも柔らかな幻聴を響かせた。",
						"chinese": "{random_boss}倒下了。然而，回廊中依然回荡着轻柔的幻听。",
						"french": "{random_boss} tombe. Pourtant, le couloir murmurait toujours de douces illusions.",
						"spanish": "{random_boss} cae. Sin embargo, el pasillo aún susurraba suaves ilusiones.",
						"vietnamese": "{random_boss} gục ngã. Thế nhưng, hành lang vẫn văng vẳng những ảo ảnh êm dịu.",
						"thai": "{random_boss} ล้มลง. ทว่าโถงทางเดินยังคงกระซิบภาพลวงตาอันอ่อนโยน.",
						"hindi": "{random_boss} गिर गया। फिर भी, गलियारा अभी भी मधुर भ्रम फुसफुसा रहा था。"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "반지의 유혹은… 아직 끝나지 않았다.",
						"english": "The ring's temptation... is not over yet.",
						"japanese": "指輪の誘惑は… まだ終わらない。",
						"chinese": "戒指的诱惑… 尚未结束。",
						"french": "La tentation de l'anneau... n'est pas encore terminée.",
						"spanish": "La tentación del anillo... aún no ha terminado.",
						"vietnamese": "Sự cám dỗ của chiếc nhẫn… vẫn chưa kết thúc.",
						"thai": "การล่อลวงของแหวน... ยังไม่สิ้นสุดลง.",
						"hindi": "अंगूठी का प्रलोभन... अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 회랑을 통과하려는 건… 어리석은 짓.",
						"english": "To pass this corridor... is folly.",
						"japanese": "この回廊を通り抜けようとするのは…愚かな行い。",
						"chinese": "想要通过这条回廊…是愚蠢的行为。",
						"french": "Tenter de traverser ce couloir est... une folie.",
						"spanish": "Intentar pasar por este pasillo es... una tontería.",
						"vietnamese": "Cố gắng đi qua hành lang này là... một việc ngu xuẩn.",
						"thai": "การพยายามผ่านระเบียงนี้ไป…เป็นเรื่องโง่เขลา.",
						"hindi": "इस गलियारे से गुज़रने की कोशिश... मूर्खता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어차피 모두… 그분의 것이 될 테니.",
						"english": "All of you... will become His, eventually.",
						"japanese": "どうせ皆…あのお方のものとなるのだから。",
						"chinese": "反正所有人都…会成为他的。",
						"french": "De toute façon, vous tous... deviendrez Siens.",
						"spanish": "De todas formas, todos ustedes... serán Suyos.",
						"vietnamese": "Dù sao thì tất cả các ngươi... cũng sẽ thuộc về Ngài ấy thôi.",
						"thai": "อย่างไรเสีย…ทุกคนก็จะต้องเป็นของท่าน.",
						"hindi": "वैसे भी तुम सब... उनके हो जाओगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네가 뭔데!",
						"english": "Silence! Who are you to say?!",
						"japanese": "黙れ！お前は何様だ！",
						"chinese": "闭嘴！你算什么东西！",
						"french": "Tais-toi ! Qui es-tu pour dire ça !",
						"spanish": "¡Cállate! ¡¿Quién te crees que eres?!",
						"vietnamese": "Câm miệng! Ngươi là ai mà dám nói vậy!",
						"thai": "หุบปาก! แกเป็นใครกันแน่!",
						"hindi": "चुप रहो! तुम हो कौन!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
