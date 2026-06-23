export const scenario_hell_komorebi_4_04 = {
	"scenario_id": "hell_komorebi_4_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
						"korean": "세상은 끊임없이 변형되고 붕괴하고 있었다. 죽음까지의 시간이 영혼에 새겨졌다.",
						"english": "The world was constantly twisting and collapsing. Time until death etched into souls.",
						"japanese": "世界は絶えず変形し崩壊していた。死までの時間が魂に刻まれた。",
						"chinese": "世界不断扭曲崩溃。死期已刻于灵魂。",
						"french": "Le monde se tordait et s'effondrait sans cesse. Le temps avant la mort gravé dans les âmes.",
						"spanish": "El mundo se retorcía y colapsaba sin cesar. El tiempo hasta la muerte grabado en las almas.",
						"vietnamese": "Thế giới không ngừng biến dạng và sụp đổ. Thời gian đến chết đã khắc sâu vào linh hồn.",
						"thai": "โลกบิดเบี้ยวและล่มสลายไม่หยุด เวลาแห่งความตายสลักอยู่ในจิตวิญญาณ",
						"hindi": "दुनिया लगातार विकृत और ढह रही थी। मृत्यु तक का समय आत्माओं में अंकित था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끝이 보이는구나. 이 지옥에서.",
						"english": "...The end is in sight. In this hell.",
						"japanese": "…終わりが見えるな。この地獄で。",
						"chinese": "……终于看到了尽头。在这地狱里。",
						"french": "...La fin est proche. Dans cet enfer.",
						"spanish": "...El final está a la vista. En este infierno.",
						"vietnamese": "...Cuối cùng cũng thấy điểm kết thúc. Trong địa ngục này.",
						"thai": "...จุดจบกำลังมาถึง ในนรกขุมนี้",
						"hindi": "...अंत दिख रहा है। इस नरक में।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "mara",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "아니! 아직 아니야! 그분은… 분명히 약속했어.",
						"english": "No! Not yet! He... He clearly promised.",
						"japanese": "違う！まだだ！あの方は…確かに約束したんだ。",
						"chinese": "不！还没！他……他明明承诺过。",
						"french": "Non ! Pas encore ! Il... Il a clairement promis.",
						"spanish": "¡No! ¡Todavía no! Él... Él prometió claramente.",
						"vietnamese": "Không! Chưa! Ngài ấy... Ngài ấy đã hứa rõ ràng.",
						"thai": "ไม่! ยังไม่ใช่! ท่าน... ท่านสัญญาไว้ชัดเจน",
						"hindi": "नहीं! अभी नहीं! उसने... उसने स्पष्ट रूप से वादा किया था।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구? 누가 약속을 해, 이 지옥에서?",
						"english": "Who? Who makes promises in this hell?",
						"japanese": "誰が？この地獄で、誰が約束をするんだ？",
						"chinese": "谁？在这地狱里，谁会承诺？",
						"french": "Qui ? Qui fait des promesses dans cet enfer ?",
						"spanish": "¿Quién? ¿Quién hace promesas en este infierno?",
						"vietnamese": "Ai? Ai lại hứa hẹn gì trong địa ngục này chứ?",
						"thai": "ใคร? ใครจะมาให้สัญญาในนรกขุมนี้?",
						"hindi": "कौन? इस नरक में कौन वादा करता है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "예언자… 그분이 우릴 구원할 거라고. 이 파멸에서…",
						"english": "The Prophet... He will save us. From this ruin...",
						"japanese": "預言者…あの方が我々を救ってくれると。この破滅から…",
						"chinese": "预言者……他会拯救我们。从这毁灭中……",
						"french": "Le Prophète... Il nous sauvera. De cette ruine...",
						"spanish": "El Profeta... Él nos salvará. De esta ruina...",
						"vietnamese": "Tiên tri... Ngài ấy sẽ cứu chúng ta. Thoát khỏi sự tàn phá này...",
						"thai": "ท่านศาสดา... ท่านจะช่วยเราให้รอดพ้น จากความพินาศนี้...",
						"hindi": "पैगंबर... वह हमें बचाएगा। इस बर्बादी से..."
					},
					"speaker": "mara",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "분명해. 이 유물이 증거야… 그분의 말씀이 담겨 있어.",
						"english": "It's clear. This relic is proof... It contains His words.",
						"japanese": "間違いない。この遺物が証拠だ…あの方の言葉が宿っている。",
						"chinese": "很清楚。这遗物就是证据……其中蕴含着他的话语。",
						"french": "C'est clair. Cette relique est la preuve... Elle contient Ses paroles.",
						"spanish": "Está claro. Esta reliquia es la prueba... Contiene Sus palabras.",
						"vietnamese": "Rõ ràng rồi. Di vật này là bằng chứng... Nó chứa lời của Ngài.",
						"thai": "ชัดเจนเลย สิ่งของโบราณนี้คือหลักฐาน... มันบรรจุพระคำของท่านไว้",
						"hindi": "यह स्पष्ट है। यह अवशेष सबूत है... इसमें उसके शब्द हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "유물? 이 망가진 세상에 무슨 유물이야…",
						"english": "Artifact? What artifact in this ruined world...",
						"japanese": "遺物？この壊れた世界に何の遺物だというんだ…",
						"chinese": "遗物？在这个残破的世界里，哪有什么遗物……",
						"french": "Artefact ? Quel artefact dans ce monde en ruine...",
						"spanish": "¿Artefacto? ¿Qué artefacto en este mundo destrozado...?",
						"vietnamese": "Di vật? Thế giới tan hoang này có di vật gì chứ...",
						"thai": "วัตถุโบราณ? ในโลกที่พังทลายแบบนี้จะมีวัตถุโบราณอะไรเล่า...",
						"hindi": "कलाकृतियाँ? इस तबाह हुई दुनिया में क्या कलाकृतियाँ..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "파멸에서… 구원할 거라고… 그렇게 들었어. 그렇게… 들렸어…",
						"english": "From ruin... it would save us... so I heard. So... it sounded...",
						"japanese": "破滅から…救われると…そう聞いた。そう…聞こえた…",
						"chinese": "从毁灭中……会得到救赎……我是这么听说的。就这么……听到了……",
						"french": "De la ruine... ça nous sauverait... c'est ce que j'ai entendu. C'est ce que... ça m'a semblé...",
						"spanish": "De la ruina... nos salvaría... así lo oí. Así... sonó...",
						"vietnamese": "Từ sự hủy diệt... sẽ được cứu rỗi... tôi đã nghe vậy. Nghe... là vậy...",
						"thai": "จากความพินาศ... มันจะช่วยกู้เรา... ฉันได้ยินมาแบบนั้น... ได้ยินมาแบบนั้น...",
						"hindi": "विनाश से... यह बचाएगा... मैंने ऐसा सुना था। ऐसा... लगा..."
					},
					"speaker": "mara",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…메아리치는 소리가 조롱하는 것 같군.",
						"english": "...The echoing sound seems to mock us.",
						"japanese": "…こだまする音が嘲笑っているかのようだ。",
						"chinese": "……回荡的声音，仿佛在嘲弄。",
						"french": "...Le son qui résonne semble nous narguer.",
						"spanish": "...El sonido resonante parece burlarse.",
						"vietnamese": "...Âm thanh vang vọng như đang chế giễu.",
						"thai": "...เสียงสะท้อนกลับมาเหมือนกำลังเยาะเย้ยเรา",
						"hindi": "...गूँजती हुई आवाज़ जैसे मज़ाक उड़ा रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "mara",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "mara",
					"content": {
						"korean": "이게… 우리를 이끈 예언의 파편이야. 믿어야만 해…",
						"english": "This is... a fragment of the prophecy that led us here. We must believe...",
						"japanese": "これが…我々を導いた預言の破片だ。信じなければならない…",
						"chinese": "这是……引导我们的预言碎片。我们必须相信……",
						"french": "C'est... un fragment de la prophétie qui nous a menés ici. Nous devons croire...",
						"spanish": "Esto es... un fragmento de la profecía que nos guio. Debemos creer...",
						"vietnamese": "Đây là... mảnh vỡ của lời tiên tri đã dẫn chúng ta đến đây. Phải tin tưởng...",
						"thai": "นี่คือ... เศษเสี้ยวของคำพยากรณ์ที่นำเรามาที่นี่ เราต้องเชื่อ...",
						"hindi": "यह... भविष्यवाणी का एक टुकड़ा है जिसने हमें यहाँ तक पहुँचाया। हमें विश्वास करना होगा..."
					}
				},
				{
					"content": {
						"korean": "빛바랜 유물에서 낯선 주문과 희미한 목소리가 들려왔다.",
						"english": "From the faded artifact, strange incantations and a faint voice could be heard.",
						"japanese": "色あせた遺物から、見知らぬ呪文と微かな声が聞こえてきた。",
						"chinese": "褪色的遗物中，传来了陌生的咒语和微弱的声音。",
						"french": "De l'artefact décoloré, des incantations étranges et une voix faible se firent entendre.",
						"spanish": "Del artefacto descolorido, se escucharon extraños conjuros y una voz tenue.",
						"vietnamese": "Từ di vật phai màu, những câu thần chú lạ và một giọng nói yếu ớt vang lên.",
						"thai": "จากวัตถุโบราณที่ซีดจาง มีเสียงคาถาแปลกๆ และเสียงแผ่วเบาเล็ดลอดออกมา",
						"hindi": "धुंधली कलाकृति से, अजीब मंत्र और एक धीमी आवाज़ सुनाई दी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 그 예언자의 목소리?",
						"english": "Is this... the prophet's voice?",
						"japanese": "これが…あの預言者の声か？",
						"chinese": "这是……那位预言者的声音？",
						"french": "Est-ce... la voix du prophète ?",
						"spanish": "¿Es esta... la voz del profeta?",
						"vietnamese": "Đây là... giọng nói của nhà tiên tri đó?",
						"thai": "นี่คือ... เสียงของท่านศาสดาหรือ?",
						"hindi": "क्या यह... उस पैगंबर की आवाज़ है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "그분은 파멸에서 우릴 구할 존재랬어. 근데… 왜 우린 여기 갇혀 죽음을 기다리는 거지?",
						"english": "They said he would save us from ruin. But... why are we trapped here, awaiting death?",
						"japanese": "あの人は破滅から我々を救う存在だと言った。だが…なぜ我々はここに閉じ込められ、死を待っているのだ？",
						"chinese": "他们说他会把我们从毁灭中拯救出来。可是……为什么我们被困在这里，等待死亡呢？",
						"french": "Ils ont dit qu'il nous sauverait de la ruine. Mais... pourquoi sommes-nous piégés ici, attendant la mort ?",
						"spanish": "Dijeron que nos salvaría de la ruina. Pero... ¿por qué estamos atrapados aquí, esperando la muerte?",
						"vietnamese": "Người đó nói sẽ cứu chúng ta khỏi sự hủy diệt. Nhưng... tại sao chúng ta lại bị mắc kẹt ở đây, chờ chết?",
						"thai": "พวกเขาบอกว่าเขาจะช่วยเราให้พ้นจากความพินาศ แต่... ทำไมเราถึงถูกขังอยู่ที่นี่ รอความตาย?",
						"hindi": "उन्होंने कहा था कि वह हमें विनाश से बचाएगा। लेकिन... हम यहाँ क्यों फँसे हैं, मौत का इंतज़ार कर रहे हैं?"
					}
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "구원하려 했지만… 오히려 상처를 더 깊게 만든 건가…",
						"english": "Tried to save us, but... did it only deepen our wounds instead?",
						"japanese": "救おうとしたが…かえって傷を深くしただけなのか…",
						"chinese": "本想拯救……反而让伤口更深了吗……",
						"french": "J'ai essayé de nous sauver, mais... cela n'a fait qu'aggraver nos blessures ?",
						"spanish": "Intenté salvarnos, pero... ¿acaso solo profundizó nuestras heridas?",
						"vietnamese": "Cứu rỗi ư... hay chỉ làm vết thương thêm sâu?",
						"thai": "พยายามจะกอบกู้... แต่กลับยิ่งทำให้บาดแผลลึกขึ้นงั้นหรือ...",
						"hindi": "बचाने की कोशिश की, लेकिन... क्या इसने घावों को और गहरा कर दिया?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "mara",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "시간은 점점 줄어들어. 대체… 뭐가 진실인 거야?",
						"english": "Time is running out. What... what is the truth?",
						"japanese": "時間はどんどん減っていく。一体…何が真実なんだ？",
						"chinese": "时间越来越少。到底……什么是真相？",
						"french": "Le temps s'épuise. Qu'est-ce que... qu'est-ce que la vérité ?",
						"spanish": "El tiempo se acaba. ¿Qué... qué es la verdad?",
						"vietnamese": "Thời gian đang cạn dần. Rốt cuộc... sự thật là gì?",
						"thai": "เวลาเหลือน้อยลงเรื่อยๆ สรุปแล้ว... อะไรคือความจริงกันแน่?",
						"hindi": "समय कम होता जा रहा है। आख़िर... सच क्या है?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…누군가 속이고 있어. 이 모든 걸.",
						"english": "...Someone is deceiving us. All of this.",
						"japanese": "…誰かが騙している。この全てを。",
						"chinese": "……有人在欺骗。这一切。",
						"french": "...Quelqu'un nous trompe. Tout cela.",
						"spanish": "...Alguien nos está engañando. Todo esto.",
						"vietnamese": "...Ai đó đang lừa dối. Tất cả những điều này.",
						"thai": "...มีใครบางคนกำลังหลอกลวงเรา ทุกอย่างนี้",
						"hindi": "...कोई धोखा दे रहा है। इन सब में।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 모든 게… 이미 정해져 있던 일 같아… 어쩐지 기시감이 들어…",
						"english": "It all feels... like it was predetermined... a strange sense of déjà vu...",
						"japanese": "この全てが…まるで定められていたかのよう…奇妙な既視感があるわ…",
						"chinese": "这一切…仿佛早已注定…总觉得似曾相识…",
						"french": "Tout ceci… comme si c'était déjà écrit… une étrange sensation de déjà-vu…",
						"spanish": "Todo esto… parece que ya estaba predestinado… una extraña sensación de déjà vu…",
						"vietnamese": "Mọi chuyện này… cứ như đã được định sẵn… một cảm giác quen thuộc lạ lùng…",
						"thai": "ทั้งหมดนี้... ราวกับถูกกำหนดไว้แล้ว... ช่างเป็นเดจาวูที่แปลกประหลาด...",
						"hindi": "यह सब… ऐसा लगता है जैसे पहले से ही तय था… एक अजीब सा déjà vu है…"
					},
					"speaker": "mara",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그런 말도 안 되는 구원 따윈 없어. 우리가 끝낼 거야.",
						"english": "There's no such absurd salvation. We'll put an end to this.",
						"japanese": "そんな馬鹿げた救済なんてない。私たちが終わらせる。",
						"chinese": "没有什么荒谬的救赎。我们会终结这一切。",
						"french": "Il n'y a pas de salut aussi absurde. Nous y mettrons fin.",
						"spanish": "No existe tal salvación absurda. Nosotros acabaremos con esto.",
						"vietnamese": "Chẳng có sự cứu rỗi vô lý nào như vậy. Chúng ta sẽ kết thúc nó.",
						"thai": "ไม่มีการไถ่บาปที่ไร้สาระแบบนั้นหรอก เราจะยุติมันเอง",
						"hindi": "ऐसी बेतुकी मुक्ति जैसी कोई चीज़ नहीं है। हम इसे खत्म करेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 존재가 쓰러졌다. 비틀린 희망이 산산조각 났다.",
						"english": "The giant entity fell. Twisted hope shattered.",
						"japanese": "巨大な存在が倒れた。歪んだ希望が粉々に砕け散った。",
						"chinese": "巨大的存在倒下了。扭曲的希望支离破碎。",
						"french": "L'entité géante est tombée. L'espoir tordu s'est brisé.",
						"spanish": "La entidad gigante cayó. La esperanza retorcida se hizo añicos.",
						"vietnamese": "Thực thể khổng lồ đã gục ngã. Niềm hy vọng vặn vẹo tan vỡ.",
						"thai": "สิ่งมีชีวิตขนาดยักษ์ล้มลง ความหวังที่บิดเบี้ยวแตกสลาย",
						"hindi": "विशाल सत्ता गिर गई। मुड़ी हुई आशा बिखर गई।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항… 그래봤자 시간은… 다시… 흐른다…",
						"english": "Worthless resistance... Even so, time... will flow... again...",
						"japanese": "取るに足らない抵抗…そうは言っても時は…再び…流れる…",
						"chinese": "微不足道的抵抗…就算如此，时间…仍会…再次…流逝…",
						"french": "Résistance futile… Malgré tout, le temps… s'écoulera… de nouveau…",
						"spanish": "Resistencia inútil… Aun así, el tiempo… volverá… a fluir…",
						"vietnamese": "Sự phản kháng vô ích… Dù vậy, thời gian… vẫn… sẽ trôi… đi nữa…",
						"thai": "การต่อต้านที่ไร้ค่า... ถึงกระนั้น เวลา... ก็จะ... ไหลเวียน... อีกครั้ง...",
						"hindi": "तुच्छ प्रतिरोध... फिर भी, समय... फिर से... बहेगा..."
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "mara",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "결국… 아무것도 변하지 않아… 모든 게 거짓이었어…",
						"english": "In the end… nothing changes… everything was a lie…",
						"japanese": "結局…何も変わらない…すべて嘘だった…",
						"chinese": "最终…什么都没改变…一切都是谎言…",
						"french": "Au final… rien ne change… tout était un mensonge…",
						"spanish": "Al final… nada cambia… todo fue una mentira…",
						"vietnamese": "Rốt cuộc… chẳng có gì thay đổi… tất cả đều là giả dối…",
						"thai": "สุดท้ายแล้ว... ไม่มีอะไรเปลี่ยนแปลง... ทุกอย่างเป็นเรื่องโกหก...",
						"hindi": "अंत में… कुछ भी नहीं बदलता… सब कुछ झूठ था…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 진실을 알았잖아. 이제 진짜 구원을 찾아야 해.",
						"english": "No. You learned the truth. Now you must find true salvation.",
						"japanese": "いや。真実を知った。今こそ真の救済を見つけなければ。",
						"chinese": "不。你已经知道了真相。现在你必须寻找真正的救赎。",
						"french": "Non. Tu as appris la vérité. Maintenant, tu dois trouver le vrai salut.",
						"spanish": "No. Has conocido la verdad. Ahora debes encontrar la verdadera salvación.",
						"vietnamese": "Không. Bạn đã biết sự thật rồi. Bây giờ bạn phải tìm kiếm sự cứu rỗi thật sự.",
						"thai": "ไม่ใช่ คุณได้รู้ความจริงแล้ว ตอนนี้คุณต้องค้นหาความรอดที่แท้จริง",
						"hindi": "नहीं। तुमने सच जान लिया है। अब तुम्हें सच्ची मुक्ति खोजनी होगी।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거짓 예언의 메아리는 사라졌지만, 그 뒤에 감춰진 더 큰 진실이 그림자를 드리웠다.",
						"english": "The echo of the false prophecy faded, but a greater truth hidden behind it cast a shadow.",
						"japanese": "偽りの予言の残響は消え去ったが、その裏に隠されたより大きな真実が影を落とした。",
						"chinese": "虚假预言的回声消散了，但其背后隐藏的更大真相投下了阴影。",
						"french": "L'écho de la fausse prophétie s'est estompé, mais une vérité plus grande, cachée derrière elle, a jeté son ombre.",
						"spanish": "El eco de la falsa profecía se desvaneció, pero una verdad mayor oculta detrás de ella proyectó una sombra.",
						"vietnamese": "Tiếng vọng của lời tiên tri giả dối đã biến mất, nhưng một sự thật lớn hơn ẩn giấu đằng sau đã phủ bóng.",
						"thai": "เสียงสะท้อนของคำทำนายเท็จได้จางหายไป แต่ความจริงที่ยิ่งใหญ่กว่าซึ่งซ่อนอยู่เบื้องหลังได้ทอดเงาลงมา",
						"hindi": "झूठी भविष्यवाणी की गूंज मिट गई, लेकिन उसके पीछे छिपा एक बड़ा सच छाया बनकर मंडरा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비틀린 시간의 흐름에 갇혔다. 모든 것이 무너져 내렸다.",
						"english": "Trapped in a twisted flow of time. Everything crumbled.",
						"japanese": "歪んだ時間の流れに囚われた。すべてが崩れ落ちた。",
						"chinese": "被困在扭曲的时间洪流中。一切都崩溃了。",
						"french": "Piégé dans un flux temporel tordu. Tout s'est effondré.",
						"spanish": "Atrapado en un flujo de tiempo retorcido. Todo se desmoronó.",
						"vietnamese": "Mắc kẹt trong dòng chảy thời gian méo mó. Mọi thứ sụp đổ.",
						"thai": "ติดอยู่ในกระแสเวลาที่บิดเบี้ยว ทุกสิ่งพังทลายลง",
						"hindi": "समय के एक विकृत प्रवाह में फंसा हुआ। सब कुछ बिखर गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 희망은 파멸을 부를 뿐. 또다시 시간은…",
						"english": "Foolish hope only brings ruin. Time once again…",
						"japanese": "愚かな希望は破滅を招くだけ。再び時間は…",
						"chinese": "愚蠢的希望只会带来毁灭。时间再次…",
						"french": "L'espoir insensé n'apporte que la ruine. Le temps, une fois de plus…",
						"spanish": "La esperanza necia solo trae la ruina. El tiempo, una vez más…",
						"vietnamese": "Hy vọng ngu ngốc chỉ mang lại sự hủy diệt. Thời gian lại một lần nữa…",
						"thai": "ความหวังที่โง่เขลาจะนำมาซึ่งความพินาศเท่านั้น เวลาอีกครั้ง...",
						"hindi": "मूढ़ आशा केवल विनाश लाती है। समय एक बार फिर…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "mara",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "끝이야… 정말로…",
						"english": "It's over… really…",
						"japanese": "終わりだ…本当に…",
						"chinese": "结束了…真的…",
						"french": "C'est fini… vraiment…",
						"spanish": "Se acabó… de verdad…",
						"vietnamese": "Hết rồi… thật sự…",
						"thai": "มันจบแล้ว... จริงๆ นะ...",
						"hindi": "यह खत्म हो गया… सच में…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 아직 포기 못 해. 진실은… 반드시 밝혀야 해.",
						"english": "No. I can't give up yet. The truth… must be revealed.",
						"japanese": "いや。まだ諦められない。真実は…必ず明らかにしなければ。",
						"chinese": "不。我不能放弃。真相…必须被揭示。",
						"french": "Non. Je ne peux pas encore abandonner. La vérité… doit être révélée.",
						"spanish": "No. Todavía no puedo rendirme. La verdad… debe ser revelada.",
						"vietnamese": "Không. Tôi chưa thể từ bỏ. Sự thật… nhất định phải được phơi bày.",
						"thai": "ไม่ ฉันยังยอมแพ้ไม่ได้ ความจริง... ต้องถูกเปิดเผย",
						"hindi": "नहीं। मैं अभी हार नहीं मान सकता। सच… अवश्य उजागर होना चाहिए।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 거대한 존재가 앞을 가로막았다. 광기 어린 기운이 심장을 조였다.",
						"english": "A giant, unknown entity blocked the way. A frantic aura squeezed my heart.",
						"japanese": "正体不明の巨大な存在が道を塞いだ。狂気じみた気配が心臓を締め付ける。",
						"chinese": "一个不明的巨大存在挡住了去路。狂乱的气息紧紧扼住了我的心脏。",
						"french": "Une entité géante et inconnue bloquait le passage. Une aura frénétique serrait mon cœur.",
						"spanish": "Una entidad gigante y desconocida bloqueó el camino. Un aura frenética oprimió mi corazón.",
						"vietnamese": "Một thực thể khổng lồ, không rõ danh tính chặn lối. Luồng khí điên loạn siết chặt trái tim tôi.",
						"thai": "สิ่งมีชีวิตขนาดยักษ์นิรนามได้ขวางทาง ออร่าที่บ้าคลั่งบีบรัดหัวใจ",
						"hindi": "एक विशाल, अज्ञात सत्ता ने रास्ता रोक लिया। एक उन्मत्त आभा ने मेरे दिल को जकड़ लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것. 구원? 희망? 그건 가장 달콤한 거짓이지.",
						"english": "Foolish beings. Salvation? Hope? Those are the sweetest lies.",
						"japanese": "愚かな者たちめ。救済？希望？それは最も甘い 거짓말だ。",
						"chinese": "愚蠢之物。救赎？希望？那不过是最甜蜜的谎言。",
						"french": "Insensés. Le salut ? L'espoir ? Ce ne sont que les plus doux des mensonges.",
						"spanish": "Necios. ¿Salvación? ¿Esperanza? Esas son las mentiras más dulces.",
						"vietnamese": "Những kẻ ngu ngốc. Cứu rỗi? Hy vọng? Đó là những lời nói dối ngọt ngào nhất.",
						"thai": "เจ้าพวกโง่เง่า การไถ่บาปหรือ? ความหวังหรือ? นั่นคือคำโกหกที่หอมหวานที่สุด",
						"hindi": "मूर्ख प्राणियों। मुक्ति? आशा? ये सबसे मीठे झूठ हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓…이라고? 아니야… 그분은…!",
						"english": "Lies...?! No...! That person...!",
						"japanese": "嘘…だと？違う…あの方は…！",
						"chinese": "谎言…？不…那个人…！",
						"french": "Des mensonges…?! Non…! Lui…!",
						"spanish": "¿Mentiras...? ¡No...! ¡Esa persona...!",
						"vietnamese": "Lời nói dối… ư? Không… Người đó…!",
						"thai": "คำโกหก...? ไม่สิ...! ท่านผู้นั้น...!",
						"hindi": "झूठ...? नहीं...! वह व्यक्ति...!"
					},
					"speaker": "mara",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "그 예언자? 너희의 절망을 먹고 자란 존재일 뿐. {random_boss}는 모두를 비웃는다.",
						"english": "That prophet? Merely a being that feeds on your despair. {random_boss} laughs at everyone.",
						"japanese": "その預言者か？お前たちの絶望を喰らって育っただけの存在だ。{random_boss}は全てを嘲笑う。",
						"chinese": "那个预言者？不过是吞噬你们绝望而生的存在。{random_boss}嘲笑着所有人。",
						"french": "Ce prophète ? Ce n'est qu'un être qui se nourrit de votre désespoir. {random_boss} se moque de tous.",
						"spanish": "¿Ese profeta? Solo un ser que se alimenta de vuestra desesperación. {random_boss} se ríe de todos.",
						"vietnamese": "Kẻ tiên tri đó? Chỉ là một thực thể lớn lên nhờ nỗi tuyệt vọng của các ngươi. {random_boss} chế giễu tất cả.",
						"thai": "ศาสดาผู้นั้นหรือ? เป็นเพียงสิ่งมีชีวิตที่เติบโตจากความสิ้นหวังของพวกเจ้าเท่านั้น {random_boss} หัวเราะเยาะทุกคน",
						"hindi": "वह पैगंबर? केवल एक प्राणी जो तुम्हारे निराशा पर पला है। {random_boss} सबका मज़ाक उड़ाता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니야… 아니라고…! 내 믿음이… 전부…",
						"english": "No...! It's not true...! My faith... everything...",
						"japanese": "違う…違うと…！私の信仰が…全てが…",
						"chinese": "不…不是真的…！我的信仰…全部…",
						"french": "Non…! Ce n'est pas vrai…! Ma foi… tout…",
						"spanish": "¡No...! ¡No es verdad...! Mi fe... todo...",
						"vietnamese": "Không… không phải vậy…! Niềm tin của ta… tất cả…",
						"thai": "ไม่สิ...! ไม่จริง...! ศรัทธาของฉัน... ทั้งหมด...",
						"hindi": "नहीं...! यह सच नहीं है...! मेरा विश्वास... सब कुछ..."
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐. 더 이상 누구도 속게 두지 않아.",
						"english": "Silence. I won't let anyone be deceived anymore.",
						"japanese": "黙れ。もう誰も騙されはしない。",
						"chinese": "闭嘴。我不会再让任何人被欺骗。",
						"french": "Silence. Je ne laisserai plus personne être dupé.",
						"spanish": "Cállate. No permitiré que nadie más sea engañado.",
						"vietnamese": "Im đi. Ta sẽ không để ai bị lừa dối nữa.",
						"thai": "เงียบซะ ฉันจะไม่ยอมให้ใครถูกหลอกอีกต่อไป",
						"hindi": "चुप रहो। मैं अब किसी को धोखा नहीं देने दूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간은 끝없이 뒤틀리고, 세계는 붕괴의 끝자락에 섰다.",
			"모두에게 새겨진 죽음의 카운트다운.",
			"이곳에서 희망은 가장 잔인한 환상처럼 보였다.",
			"하지만 누군가는 여전히 구원을 믿었고, 그 비틀린 메아리는 진실을 흔들기 시작했다."
		],
		"english": [
			"Time twists endlessly, the world on the brink of collapse.",
			"A death countdown etched into all.",
			"Here, hope seemed the cruelest illusion.",
			"Yet, some still believed in salvation, and their twisted echoes began to shake the truth."
		],
		"japanese": [
			"時は絶えず歪み、世界は崩壊の淵に立たされた。",
			"全てに刻まれた死のカウントダウン。",
			"ここでは、希望は最も残酷な幻想に見えた。",
			"しかし、誰かは救いを信じ続け、その歪んだ残響は真実を揺るがし始めた。"
		],
		"chinese": [
			"时间无尽扭曲，世界濒临崩溃边缘。",
			"死亡倒计时，刻于众人。",
			"在此，希望如同最残酷的幻象。",
			"然而，仍有人相信救赎，那扭曲的回声开始动摇真相。"
		],
		"french": [
			"Le temps se tord sans fin, le monde au bord de l'effondrement.",
			"Un compte à rebours mortel gravé en chacun.",
			"Ici, l'espoir semblait la plus cruelle des illusions.",
			"Pourtant, certains croyaient encore au salut, et leurs échos tordus commençaient à ébranler la vérité."
		],
		"spanish": [
			"El tiempo se retuerce sin fin, el mundo al borde del colapso.",
			"Una cuenta atrás de muerte grabada en todos.",
			"Aquí, la esperanza parecía la ilusión más cruel.",
			"Sin embargo, algunos todavía creían en la salvación, y sus ecos retorcidos comenzaron a sacudir la verdad."
		],
		"vietnamese": [
			"Thời gian vặn vẹo không ngừng, thế giới đứng trước bờ vực sụp đổ.",
			"Đồng hồ đếm ngược tử thần khắc sâu vào tất cả.",
			"Nơi đây, hy vọng như ảo ảnh tàn nhẫn nhất.",
			"Thế nhưng, vẫn có người tin vào sự cứu rỗi, và những tiếng vang méo mó ấy bắt đầu lay chuyển sự thật."
		],
		"thai": [
			"เวลากลับตาลปัตรไม่รู้จบ โลกกำลังจะล่มสลาย",
			"การนับถอยหลังสู่ความตายที่สลักไว้ในทุกคน",
			"ที่นี่ ความหวังดูเหมือนภาพลวงตาที่โหดร้ายที่สุด",
			"ทว่า บางคนยังคงเชื่อในการไถ่บาป และเสียงสะท้อนที่บิดเบี้ยวของพวกเขาก็เริ่มสั่นคลอนความจริง"
		],
		"hindi": [
			"समय अनंत तक विकृत होता रहा, दुनिया पतन के कगार पर थी。",
			"सब पर अंकित मृत्यु का उलटी गिनती।",
			"यहां, आशा सबसे क्रूर भ्रम लग रही थी।",
			"फिर भी, कुछ लोग अभी भी मोक्ष में विश्वास करते थे, और उनकी मुड़ी हुई गूँज ने सच्चाई को हिलाना शुरू कर दिया।"
		]
	}
} as const;
