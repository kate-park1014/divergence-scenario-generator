export const scenario_modern_cipher_42_03 = {
	"scenario_id": "modern_cipher_42_03",
	"order": 3,
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
			"기억 왜곡 환자들. 모두 같은 환각에 시달렸다.",
			"과거의 소리, 오래된 전설. 잊힌 진실이 깨어나려 한다.",
			"심리학자 린은 파고들었다. 시스템이 감춘 어둠 속으로.",
			"그러나 진실은 언제나 예상보다 잔혹하다."
		],
		"english": [
			"Patients with memory distortion. All suffered from the same hallucination.",
			"Sounds of the past, ancient legends. A forgotten truth is about to awaken.",
			"Psychologist Lynn delved deep. Into the darkness hidden by the system.",
			"But the truth is always more cruel than expected."
		],
		"japanese": [
			"記憶歪曲患者たち。皆同じ幻覚に苦しんだ。",
			"過去の音、古き伝説。忘れられた真実が目覚めようとしている。",
			"心理学者リンは深く掘り下げた。システムが隠した闇の中へ。",
			"しかし真実は、常に予想よりも残酷だ。"
		],
		"chinese": [
			"记忆扭曲患者。都遭受着相同的幻觉。",
			"过去的声音，古老的传说。被遗忘的真相即将苏醒。",
			"心理学家林深入探究。进入系统隐藏的黑暗之中。",
			"然而真相总是比预想的更加残酷。"
		],
		"french": [
			"Patients souffrant de distorsion mémorielle. Tous étaient en proie à la même hallucination.",
			"Sons du passé, légendes anciennes. Une vérité oubliée est sur le point de s'éveiller.",
			"La psychologue Lynn a plongé. Dans les ténèbres cachées par le système.",
			"Mais la vérité est toujours plus cruelle que prévu."
		],
		"spanish": [
			"Pacientes con distorsión de la memoria. Todos sufrieron la misma alucinación.",
			"Sonidos del pasado, leyendas antiguas. Una verdad olvidada está a punto de despertar.",
			"La psicóloga Lynn profundizó. En la oscuridad que el sistema ocultaba.",
			"Pero la verdad siempre es más cruel de lo esperado."
		],
		"vietnamese": [
			"Những bệnh nhân bị méo mó ký ức. Tất cả đều trải qua cùng một ảo giác.",
			"Âm thanh của quá khứ, truyền thuyết cổ xưa. Một sự thật bị lãng quên sắp thức tỉnh.",
			"Nhà tâm lý học Lynn đã đi sâu vào. Vào bóng tối mà hệ thống che giấu.",
			"Nhưng sự thật luôn tàn khốc hơn mong đợi."
		],
		"thai": [
			"ผู้ป่วยความจำบิดเบือน ทุกคนทรมานจากภาพหลอนเดียวกัน",
			"เสียงจากอดีต ตำนานเก่าแก่ ความจริงที่ถูกลืมกำลังจะตื่นขึ้น",
			"นักจิตวิทยา Lynn เจาะลึก เข้าไปในความมืดที่ระบบซ่อนไว้",
			"แต่ความจริงมักจะโหดร้ายกว่าที่คาดคิดเสมอ"
		],
		"hindi": [
			"स्मृति विकृति के मरीज। सभी एक ही मतिभ्रम से पीड़ित थे।",
			"अतीत की आवाजें, प्राचीन किंवदंतियाँ। एक भूली हुई सच्चाई जागने वाली है।",
			"मनोवैज्ञानिक लिन ने गहराई से छानबीन की। सिस्टम द्वारा छिपाए गए अंधेरे में।",
			"लेकिन सच्चाई हमेशा उम्मीद से ज़्यादा क्रूर होती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
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
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이상해요. 최근 환자들이 모두 같은 증상을 보여요.",
						"english": "It's strange. Recently, all patients show the same symptoms.",
						"japanese": "おかしいです。最近、患者さんたちが皆同じ症状を示しています。",
						"chinese": "真奇怪。最近的患者都表现出相同的症状。",
						"french": "C'est étrange. Récemment, tous les patients présentent les mêmes symptômes.",
						"spanish": "Es extraño. Últimamente, todos los pacientes muestran los mismos síntomas.",
						"vietnamese": "Lạ thật. Gần đây, tất cả bệnh nhân đều có cùng triệu chứng.",
						"thai": "แปลกจังเลยค่ะ ช่วงนี้คนไข้ทุกคนแสดงอาการเดียวกัน",
						"hindi": "यह अजीब है। हाल ही में, सभी मरीज एक जैसे लक्षण दिखा रहे हैं।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떤 증상인데요?",
						"english": "What symptoms?",
						"japanese": "どんな症状ですか？",
						"chinese": "什么症状？",
						"french": "Quels symptômes ?",
						"spanish": "¿Qué síntomas?",
						"vietnamese": "Triệu chứng gì vậy?",
						"thai": "อาการแบบไหนคะ",
						"hindi": "क्या लक्षण हैं?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "과거의 소리… 알 수 없는 속삭임을 듣는다고 해요.",
						"english": "Sounds of the past... They say they hear unknown whispers.",
						"japanese": "過去の音… 知らない囁き声を聞くそうです。",
						"chinese": "过去的声音……他们说听到了莫名的低语。",
						"french": "Des sons du passé... Ils disent entendre des murmures inconnus.",
						"spanish": "Sonidos del pasado... Dicen escuchar susurros desconocidos.",
						"vietnamese": "Âm thanh của quá khứ... Họ nói rằng nghe thấy những lời thì thầm không rõ.",
						"thai": "เสียงจากอดีต... พวกเขาบอกว่าได้ยินเสียงกระซิบที่ไม่รู้จัก",
						"hindi": "अतीत की आवाजें... वे कहते हैं कि उन्हें अज्ञात फुसफुसाहटें सुनाई देती हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "도시 네트워크 곳곳에서 노이즈가 감지된다. 사람들은 오류로 치부한다.",
						"english": "Noise is detected throughout the city network. People dismiss it as an error.",
						"japanese": "都市ネットワークのあちこちでノイズが感知される。人々はそれをエラーとして片付けている。",
						"chinese": "城市网络的各个角落都检测到噪音。人们将其视为错误。",
						"french": "Du bruit est détecté à travers le réseau urbain. Les gens le considèrent comme une erreur.",
						"spanish": "Se detecta ruido en toda la red de la ciudad. La gente lo descarta como un error.",
						"vietnamese": "Tiếng ồn được phát hiện khắp mạng lưới thành phố. Mọi người cho rằng đó là lỗi.",
						"thai": "ตรวจพบสัญญาณรบกวนทั่วเครือข่ายเมือง ผู้คนต่างมองว่าเป็นข้อผิดพลาด",
						"hindi": "शहर के नेटवर्क में हर जगह शोर का पता चलता है। लोग इसे एक त्रुटि मानकर खारिज कर देते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 550,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단순한 환각이 아니에요. 집단 무의식과 연결된 것 같아요.",
						"english": "It's not just a simple hallucination. It seems to be connected to the collective unconscious.",
						"japanese": "単なる幻覚ではありません。集合的無意識と繋がっているようです。",
						"chinese": "这不仅仅是简单的幻觉。似乎与集体无意识相连。",
						"french": "Ce n'est pas une simple hallucination. Cela semble être lié à l'inconscient collectif.",
						"spanish": "No es una simple alucinación. Parece estar conectado al inconsciente colectivo.",
						"vietnamese": "Đây không phải là ảo giác đơn thuần. Dường như nó kết nối với vô thức tập thể.",
						"thai": "นี่ไม่ใช่แค่ภาพหลอนธรรมดา ดูเหมือนจะเชื่อมโยงกับจิตไร้สำนึกหมู่",
						"hindi": "यह सिर्फ एक साधारण मतिभ्रम नहीं है। यह सामूहिक अचेतन से जुड़ा हुआ लगता है।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "집단 무의식?",
						"english": "Collective unconscious?",
						"japanese": "集合的無意識ですか？",
						"chinese": "集体无意识？",
						"french": "Inconscient collectif ?",
						"spanish": "¿Inconsciente colectivo?",
						"vietnamese": "Vô thức tập thể?",
						"thai": "จิตไร้สำนึกหมู่เหรอคะ",
						"hindi": "सामूहिक अचेतन?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "'도시의 검은 혀' 전설을 아시나요? 과거의 모든 것을 기록하던 존재.",
						"english": "Do you know the legend of 'The City's Black Tongue'? The one who recorded everything from the past.",
						"japanese": "「都市の黒い舌」の伝説を知ってる？過去の全てを記録していた存在よ。",
						"chinese": "你知道“城市黑舌”的传说吗？那个记录了过去一切的存在。",
						"french": "Connaissez-vous la légende de la \"Langue Noire de la Cité\" ? L'être qui enregistrait tout du passé.",
						"spanish": "¿Conoces la leyenda de la \"Lengua Negra de la Ciudad\"? El ser que lo registraba todo del pasado.",
						"vietnamese": "Anh có biết truyền thuyết về 'Lưỡi Đen của Thành Phố' không? Kẻ đã ghi lại mọi thứ từ quá khứ.",
						"thai": "คุณรู้จักตำนาน \"ลิ้นดำแห่งนคร\" ไหม? ผู้ที่บันทึกทุกสิ่งในอดีต.",
						"hindi": "क्या आप 'शहर की काली जुबान' की किंवदंती जानते हैं? वह जो अतीत की हर चीज़ दर्ज करता था。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 진짜라는 거예요?",
						"english": "You mean it's real?",
						"japanese": "それが本当だってこと？",
						"chinese": "你是说那是真的？",
						"french": "C'est réel, vous voulez dire ?",
						"spanish": "¿Quieres decir que es real?",
						"vietnamese": "Ý anh là nó có thật sao?",
						"thai": "คุณหมายความว่ามันเป็นเรื่องจริงเหรอ?",
						"hindi": "क्या आपका मतलब है कि यह सच है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아마도요. 환자들의 환각과 전설이 기묘하게 겹쳐요.",
						"english": "Perhaps. Patients' hallucinations and the legend strangely overlap.",
						"japanese": "多分ね。患者たちの幻覚と伝説が奇妙に重なるの。",
						"chinese": "也许吧。病人的幻觉和传说诡异地重叠了。",
						"french": "Peut-être. Les hallucinations des patients et la légende se recoupent étrangement.",
						"spanish": "Quizás. Las alucinaciones de los pacientes y la leyenda se superponen extrañamente.",
						"vietnamese": "Có lẽ. Ảo giác của bệnh nhân và truyền thuyết trùng lặp một cách kỳ lạ.",
						"thai": "อาจจะ. ภาพหลอนของผู้ป่วยกับตำนานซ้อนทับกันอย่างประหลาด.",
						"hindi": "शायद। मरीजों की मतिभ्रम और किंवदंती अजीब तरह से मेल खाती हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 450,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과거의 데이터 흔적을 찾아야 해요. 시스템 깊숙이 숨겨진 비밀들을.",
						"english": "We need to find traces of past data. The secrets hidden deep within the system.",
						"japanese": "過去のデータ痕跡を探さないと。システムの奥深くに隠された秘密を。",
						"chinese": "我们需要找到过去的数据痕迹。系统深处隐藏的秘密。",
						"french": "Nous devons trouver les traces des données passées. Les secrets cachés au plus profond du système.",
						"spanish": "Necesitamos encontrar rastros de datos pasados. Los secretos ocultos en lo profundo del sistema.",
						"vietnamese": "Chúng ta cần tìm dấu vết dữ liệu trong quá khứ. Những bí mật ẩn sâu trong hệ thống.",
						"thai": "เราต้องตามหาร่องรอยข้อมูลในอดีต. ความลับที่ซ่อนอยู่ลึกในระบบ.",
						"hindi": "हमें अतीत के डेटा के निशान खोजने होंगे। सिस्टम की गहराई में छिपे रहस्य।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "위험한 일인데.",
						"english": "That's dangerous.",
						"japanese": "危険なことだ。",
						"chinese": "这很危险。",
						"french": "C'est dangereux.",
						"spanish": "Es peligroso.",
						"vietnamese": "Việc đó nguy hiểm.",
						"thai": "มันอันตรายนะ.",
						"hindi": "यह खतरनाक है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "더 큰 위험이 다가오고 있어요. 감지될 때마다 사라지는 카운트다운.",
						"english": "A greater danger is approaching. A countdown that disappears every time it's detected.",
						"japanese": "もっと大きな危険が迫ってる。感知されるたびに消えるカウントダウンが。",
						"chinese": "更大的危险正在逼近。一个每次被检测到就会消失的倒计时。",
						"french": "Un plus grand danger approche. Un compte à rebours qui disparaît à chaque fois qu'il est détecté.",
						"spanish": "Un peligro mayor se acerca. Una cuenta atrás que desaparece cada vez que se detecta.",
						"vietnamese": "Một nguy hiểm lớn hơn đang đến gần. Một đồng hồ đếm ngược biến mất mỗi khi được phát hiện.",
						"thai": "อันตรายที่ใหญ่กว่ากำลังคืบคลานเข้ามา. การนับถอยหลังที่หายไปทุกครั้งที่ตรวจพบ.",
						"hindi": "एक बड़ा खतरा करीब आ रहा है। एक उलटी गिनती जो हर बार पता लगने पर गायब हो जाती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카운트다운?",
						"english": "Countdown?",
						"japanese": "カウントダウン？",
						"chinese": "倒计时？",
						"french": "Compte à rebours ?",
						"spanish": "¿Cuenta atrás?",
						"vietnamese": "Đếm ngược?",
						"thai": "การนับถอยหลัง?",
						"hindi": "उलटी गिनती?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 600,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "시스템이 저를 주시하고 있어요. 제가 너무 깊이 파고든 건가요?",
						"english": "The system is watching me. Did I dig too deep?",
						"japanese": "システムが私を監視してる。私が深入りしすぎたのか？",
						"chinese": "系统正在监视我。我是不是挖得太深了？",
						"french": "Le système me surveille. Ai-je fouillé trop loin ?",
						"spanish": "El sistema me está vigilando. ¿He profundizado demasiado?",
						"vietnamese": "Hệ thống đang theo dõi tôi. Tôi đã đào sâu quá phải không?",
						"thai": "ระบบกำลังจับตาดูฉันอยู่. ฉันขุดลึกเกินไปหรือเปล่า?",
						"hindi": "सिस्टम मुझे देख रहा है। क्या मैंने बहुत गहराई तक खुदाई कर ली है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그만둘 순 없어요.",
						"english": "I can't stop.",
						"japanese": "止めることはできない。",
						"chinese": "我不能停下来。",
						"french": "Je ne peux pas arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Tôi không thể dừng lại.",
						"thai": "ฉันหยุดไม่ได้.",
						"hindi": "मैं रुक नहीं सकता।"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "도시의 뒷골목 전설… '검은 혀'는 단순한 이야기가 아니었을 거예요.",
						"english": "The legend of the city's back alleys... 'The Black Tongue' might not have been just a story.",
						"japanese": "都市の裏路地の伝説…「黒い舌」はただの物語じゃなかったはずよ。",
						"chinese": "城市后巷的传说……“黑舌”可能不只是个故事。",
						"french": "La légende des ruelles de la ville... la \"Langue Noire\" n'était peut-être pas qu'une simple histoire.",
						"spanish": "La leyenda de los callejones de la ciudad... la \"Lengua Negra\" quizás no era solo una historia.",
						"vietnamese": "Truyền thuyết về những con hẻm phía sau thành phố... 'Lưỡi Đen' có thể không chỉ là một câu chuyện.",
						"thai": "ตำนานซอกซอยในเมือง... \"ลิ้นดำ\" อาจไม่ใช่แค่เรื่องเล่า.",
						"hindi": "शहर की पिछली गलियों की किंवदंती... 'काली जुबान' शायद सिर्फ एक कहानी नहीं थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 뭔데요?",
						"english": "What is it?",
						"japanese": "それは何ですか？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Nó là gì vậy?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "모든 추악한 비밀을 듣고 기록하던 존재… 그리고 그 기록은 사라지지 않아요.",
						"english": "A being that heard and recorded every ugly secret... and those records never disappear.",
						"japanese": "すべての醜い秘密を聞き、記録していた存在… そしてその記録は消えません。",
						"chinese": "一个听取并记录所有丑陋秘密的存在… 那些记录永远不会消失。",
						"french": "Un être qui écoutait et enregistrait chaque horrible secret... et ces enregistrements ne disparaissent jamais.",
						"spanish": "Un ser que escuchó y registró cada secreto horrendo... y esos registros nunca desaparecen.",
						"vietnamese": "Một thực thể đã lắng nghe và ghi lại mọi bí mật xấu xa... và những ghi chép đó sẽ không bao giờ biến mất.",
						"thai": "สิ่งมีชีวิตที่ได้ยินและบันทึกทุกความลับอันน่าเกลียด... และบันทึกเหล่านั้นไม่เคยหายไป",
						"hindi": "एक ऐसा अस्तित्व जिसने हर बदसूरत रहस्य को सुना और रिकॉर्ड किया... और वे रिकॉर्ड कभी गायब नहीं होते।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 데이터 덩어리가 공간을 일그러뜨렸다.",
						"english": "A colossal mass of data distorted the space.",
						"japanese": "巨大なデータ塊が空間を歪めた。",
						"chinese": "巨大的数据团扭曲了空间。",
						"french": "Une masse colossale de données a déformé l'espace.",
						"spanish": "Una masa colosal de datos distorsionó el espacio.",
						"vietnamese": "Một khối dữ liệu khổng lồ đã bóp méo không gian.",
						"thai": "มวลข้อมูลมหาศาลบิดเบือนอวกาศ",
						"hindi": "डेटा का एक विशाल पुंज अंतरिक्ष को विकृत कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감히 이곳까지 오다니… 잊힌 것을 건드리는군.",
						"english": "To dare come this far... you disturb what was forgotten.",
						"japanese": "ここまで来るなんて… 忘れ去られたものに触れるとは。",
						"chinese": "竟敢来到这里… 你触碰了被遗忘之物。",
						"french": "Oser venir jusqu'ici... vous dérangez ce qui fut oublié.",
						"spanish": "Atreverse a llegar tan lejos... estás perturbando lo olvidado.",
						"vietnamese": "Dám đến tận đây... ngươi đã động vào thứ bị lãng quên.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่... เจ้ากำลังรบกวนสิ่งที่ถูกลืม",
						"hindi": "इतनी दूर आने की हिम्मत की... तुम भूली हुई चीज़ों को छेड़ रहे हो।"
					}
				},
				{
					"content": {
						"korean": "네가 '과거의 소리'를 만든 거야?",
						"english": "Did you create the 'Sound of the Past'?",
						"japanese": "お前が「過去の音」を作ったのか？",
						"chinese": "是你创造了“过去之声”吗？",
						"french": "C'est toi qui as créé le « Son du Passé » ?",
						"spanish": "¿Tú creaste el 'Sonido del Pasado'?",
						"vietnamese": "Ngươi đã tạo ra 'Âm thanh của Quá khứ' ư?",
						"thai": "เจ้าเป็นคนสร้าง 'เสียงแห่งอดีต' หรือ?",
						"hindi": "क्या तुमने 'अतीत की आवाज़' बनाई है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은… 망각 속에 머물러야 한다. 고통은 끝없이 반복될 테니.",
						"english": "Truth must remain in oblivion. For pain will endlessly repeat.",
						"japanese": "真実は… 忘却の中に留まるべきだ。苦痛は終わりなく繰り返されるだろうから。",
						"chinese": "真相… 必须留在遗忘中。因为痛苦将无休止地重复。",
						"french": "La vérité... doit rester dans l'oubli. Car la douleur se répétera sans fin.",
						"spanish": "La verdad... debe permanecer en el olvido. Porque el dolor se repetirá sin cesar.",
						"vietnamese": "Sự thật... phải ở lại trong lãng quên. Vì nỗi đau sẽ lặp lại không ngừng.",
						"thai": "ความจริง... ต้องคงอยู่ในความหลงลืม เพราะความเจ็บปวดจะซ้ำรอยไม่สิ้นสุด",
						"hindi": "सत्य... विस्मृति में ही रहना चाहिए। क्योंकि पीड़ा अंतहीन रूप से दोहराई जाएगी।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "고작 이것을 막았다고… 생각하나? 너희는 다음 악몽을 깨운 것뿐.",
						"english": "Do you think... you merely stopped this? You've only awakened the next nightmare.",
						"japanese": "たかがこれを止めたと… 思っているのか？お前たちは次の悪夢を目覚めさせただけだ。",
						"chinese": "你以为… 仅仅阻止了这一切吗？你们只是唤醒了下一个噩梦。",
						"french": "Penses-tu... n'avoir fait qu'arrêter ça ? Vous n'avez fait que réveiller le prochain cauchemar.",
						"spanish": "¿Crees... que solo detuviste esto? Solo has despertado la siguiente pesadilla.",
						"vietnamese": "Ngươi nghĩ... chỉ dừng lại được chừng này thôi sao? Ngươi chỉ vừa đánh thức cơn ác mộng tiếp theo mà thôi.",
						"thai": "คิดว่า... เจ้าหยุดสิ่งนี้ได้แค่นี้งั้นหรือ? เจ้าแค่ปลุกฝันร้ายครั้งต่อไปเท่านั้น",
						"hindi": "क्या तुम्हें लगता है... तुमने बस इसे रोका है? तुमने तो बस अगले दुःस्वप्न को जगाया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดอะไร?",
						"hindi": "क्या मतलब है तुम्हारा?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "카운트다운은… 멈추지 않는다. 시스템의 핵심은… 너희의 욕망 속에.",
						"english": "The countdown... doesn't stop. The system's core is... within your desires.",
						"japanese": "カウントダウンは… 止まらない。システムの核は… お前たちの欲望の中に。",
						"chinese": "倒计时… 不会停止。系统的核心… 就在你们的欲望之中。",
						"french": "Le compte à rebours... ne s'arrête pas. Le cœur du système est... dans vos désirs.",
						"spanish": "La cuenta atrás... no se detiene. El núcleo del sistema está... dentro de vuestros deseos.",
						"vietnamese": "Đồng hồ đếm ngược... không dừng lại. Lõi của hệ thống nằm... trong dục vọng của các ngươi.",
						"thai": "การนับถอยหลัง... ไม่หยุด แกนหลักของระบบ... อยู่ในความปรารถนาของพวกเจ้า",
						"hindi": "उलटी गिनती... नहीं रुकती। सिस्टम का मूल... तुम्हारी इच्छाओं में है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 숫자의 카운트다운이 다시 흐르기 시작한다.",
						"english": "A countdown of unknown numbers begins to flow again.",
						"japanese": "未知の数字のカウントダウンが再び流れ始める。",
						"chinese": "未知数字的倒计时再次开始流动。",
						"french": "Un compte à rebours de chiffres inconnus recommence à s'écouler.",
						"spanish": "Una cuenta regresiva de números desconocidos comienza a fluir de nuevo.",
						"vietnamese": "Một đồng hồ đếm ngược với những con số không xác định lại bắt đầu chạy.",
						"thai": "การนับถอยหลังของตัวเลขที่ไม่รู้จักเริ่มไหลอีกครั้ง",
						"hindi": "अज्ञात संख्याओं की उलटी गिनती फिर से शुरू हो जाती है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 심장은… 더 깊은 곳에 있었다. 이제 시작일 뿐이다.",
						"english": "The system's heart... was deeper. This is just the beginning.",
						"japanese": "システムの心臓は…もっと深くに。これは始まりに過ぎない。",
						"chinese": "系统的核心…在更深处。这仅仅是个开始。",
						"french": "Le cœur du système... était plus profond. Ce n'est que le début.",
						"spanish": "El corazón del sistema... estaba más profundo. Esto es solo el principio.",
						"vietnamese": "Trái tim của hệ thống... ở sâu hơn nữa. Đây chỉ là khởi đầu.",
						"thai": "แกนกลางของระบบ... อยู่ลึกกว่านั้น นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "सिस्टम का दिल... और गहराई में था। यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 힘에 의해 모든 것이 압도당했다.",
						"english": "An unknown power overwhelmed everything.",
						"japanese": "正体不明の力に全てが圧倒された。",
						"chinese": "一切都被一股不明力量所压倒。",
						"french": "Une puissance inconnue a tout submergé.",
						"spanish": "Un poder desconocido lo abrumó todo.",
						"vietnamese": "Một sức mạnh vô danh đã áp đảo tất cả.",
						"thai": "ทุกสิ่งถูกครอบงำด้วยพลังที่ไม่รู้จัก",
						"hindi": "एक अज्ञात शक्ति ने सब कुछ अभिभूत कर दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 어둠은 너희 안에서 시작된다.",
						"english": "Futile resistance... darkness begins within you.",
						"japanese": "無駄な抵抗だ… 闇はお前たちの中で始まる。",
						"chinese": "徒劳的抵抗… 黑暗在你们心中滋生。",
						"french": "Résistance futile... les ténèbres naissent en vous.",
						"spanish": "Resistencia inútil... la oscuridad comienza dentro de vosotros.",
						"vietnamese": "Sự kháng cự vô ích... bóng tối bắt đầu từ bên trong các ngươi.",
						"thai": "การต่อต้านที่ไร้ค่า... ความมืดเริ่มต้นจากภายในตัวพวกเจ้า",
						"hindi": "व्यर्थ का प्रतिरोध... अंधकार तुम्हारे भीतर से शुरू होता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니야. 반드시 막을 거야.",
						"english": "...It's not over. I will stop it.",
						"japanese": "…まだ終わってない。必ず止める。",
						"chinese": "…还没结束。我一定会阻止它。",
						"french": "...Ce n'est pas fini. Je l'arrêterai.",
						"spanish": "...No ha terminado. Lo detendré.",
						"vietnamese": "...Chưa kết thúc. Ta nhất định sẽ ngăn chặn nó.",
						"thai": "...ยังไม่จบ ฉันจะต้องหยุดมันให้ได้",
						"hindi": "...यह खत्म नहीं हुआ है। मैं इसे रोकूंगा।"
					}
				}
			]
		}
	]
} as const;
