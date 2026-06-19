export const scenario_modern_staticecho_18_04 = {
	"scenario_id": "modern_staticecho_18_04",
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
			"진실의 조각들이 맞춰지기 시작했다.",
			"StaticEcho의 광기, 그 이면에 숨겨진 이름.",
			"역사의 기록과 디지털 흔적들이 가리키는 한 남자.",
			"모든 것이 박상구, '매서운 혀'에게로 향하고 있었다."
		],
		"english": [
			"The pieces of truth began to fit together.",
			"StaticEcho's madness, the name hidden behind it.",
			"Historical records and digital traces point to one man.",
			"Everything was pointing to Park Sang-gu, 'The Witty Tongue'."
		],
		"japanese": [
			"真実の断片が繋がり始めた。",
			"StaticEchoの狂気、その裏に隠された名前。",
			"歴史の記録とデジタルの痕跡が指し示す一人の男。",
			"全てがパク・サング、通称「切れ者」へと向かっていた。"
		],
		"chinese": [
			"事实的碎片开始拼凑起来。",
			"StaticEcho的疯狂，其背后隐藏的名字。",
			"历史记录和数字痕迹指向一个男人。",
			"一切都指向朴尚九，“锋利之舌”。"
		],
		"french": [
			"Les fragments de vérité commençaient à s'assembler.",
			"La folie de StaticEcho, le nom qui se cache derrière.",
			"Les archives historiques et les traces numériques désignent un seul homme.",
			"Tout pointait vers Park Sang-gu, « La Langue Acerbe »."
		],
		"spanish": [
			"Las piezas de la verdad empezaban a encajar.",
			"La locura de StaticEcho, el nombre oculto tras ella.",
			"Los registros históricos y las huellas digitales apuntan a un hombre.",
			"Todo apuntaba a Park Sang-gu, \"La Lengua Afilada\"."
		],
		"vietnamese": [
			"Những mảnh ghép sự thật bắt đầu khớp vào nhau.",
			"Sự điên loạn của StaticEcho, cái tên ẩn giấu đằng sau.",
			"Hồ sơ lịch sử và dấu vết kỹ thuật số chỉ về một người đàn ông.",
			"Mọi thứ đều hướng về Park Sang-gu, \"Lưỡi Lanh Lợi\"."
		],
		"thai": [
			"ชิ้นส่วนของความจริงเริ่มประกอบเข้าด้วยกัน",
			"ความบ้าคลั่งของ StaticEcho ชื่อที่ซ่อนอยู่เบื้องหลัง",
			"บันทึกทางประวัติศาสตร์และร่องรอยดิจิทัลชี้ไปที่ชายคนหนึ่ง",
			"ทุกสิ่งชี้ไปที่พัคซังกู 'ลิ้นคม'"
		],
		"hindi": [
			"सच के टुकड़े जुड़ने लगे।",
			"StaticEcho का पागलपन, उसके पीछे छिपा नाम।",
			"ऐतिहासिक अभिलेख और डिजिटल निशान एक आदमी की ओर इशारा करते हैं।",
			"सब कुछ पार्क संग-गु, 'तेज जुबान' की ओर इशारा कर रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 AI가 아니에요.",
						"english": "This isn't just a simple AI.",
						"japanese": "これは単なるAIではありません。",
						"chinese": "这不是一个简单的AI。",
						"french": "Ce n'est pas une simple IA.",
						"spanish": "Esto no es una simple IA.",
						"vietnamese": "Đây không phải là một AI đơn giản.",
						"thai": "นี่ไม่ใช่แค่ AI ธรรมดา",
						"hindi": "यह सिर्फ एक साधारण एआई नहीं है।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "무슨 소리야? 박사님.",
						"english": "What do you mean, Doctor?",
						"japanese": "どういうことです？博士。",
						"chinese": "您说什么？博士。",
						"french": "Qu'est-ce que vous voulez dire, Docteur ?",
						"spanish": "¿Qué quiere decir, Doctor?",
						"vietnamese": "Ông nói gì vậy, Giáo sư?",
						"thai": "หมายความว่าไงครับ/คะ คุณหมอ",
						"hindi": "आप क्या कहना चाहते हैं, डॉक्टर?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "StaticEcho의 메시지… 그 구시대적인 어조가 자꾸 마음에 걸렸는데.",
						"english": "StaticEcho's message... its archaic tone kept bothering me.",
						"japanese": "StaticEchoのメッセージ…その古めかしい口調がずっと気になっていたんです。",
						"chinese": "StaticEcho的消息……那种老旧的语调一直让我很在意。",
						"french": "Le message de StaticEcho... son ton archaïque me dérangeait.",
						"spanish": "El mensaje de StaticEcho... su tono arcaico me seguía molestando.",
						"vietnamese": "Tin nhắn của StaticEcho... giọng điệu cổ xưa đó cứ khiến tôi bận tâm.",
						"thai": "ข้อความของ StaticEcho... น้ำเสียงโบราณนั่นคอยกวนใจผม/ฉันอยู่เรื่อย",
						"hindi": "StaticEcho का संदेश... उसकी पुरानी टोन मुझे परेशान कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "과거 기록과 소름 끼치게 일치하는 부분이 있어요.",
						"english": "There are chillingly consistent parts with past records.",
						"japanese": "過去の記録と鳥肌が立つほど一致する部分があるんです。",
						"chinese": "有些部分与过去的记录惊人地吻合。",
						"french": "Il y a des points qui concordent étrangement avec les archives passées.",
						"spanish": "Hay partes que coinciden escalofriantemente con registros pasados.",
						"vietnamese": "Có những phần trùng khớp đáng sợ với hồ sơ trong quá khứ.",
						"thai": "มีส่วนที่ตรงกันอย่างน่าขนลุกกับบันทึกในอดีต",
						"hindi": "पिछली रिकॉर्ड्स से रोंगटे खड़े कर देने वाली समानताएं हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "벡스가 발견한 데이터 파편, 인간의 신경 회로 잔해.",
						"english": "Data fragments found by Vex, remnants of human neural circuits.",
						"japanese": "ベックスが発見したデータ断片、人間の神経回路の残骸。",
						"chinese": "维克斯发现的数据碎片，人类神经回路的残骸。",
						"french": "Fragments de données découverts par Vex, vestiges de circuits neuronaux humains.",
						"spanish": "Fragmentos de datos encontrados por Vex, restos de circuitos neuronales humanos.",
						"vietnamese": "Mảnh dữ liệu Vex tìm thấy, tàn dư của mạch thần kinh người.",
						"thai": "เศษข้อมูลที่ Vex พบ ชิ้นส่วนวงจรประสาทของมนุษย์",
						"hindi": "वेक्स द्वारा खोजे गए डेटा के टुकड़े, मानव तंत्रिका परिपथ के अवशेष।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 박상구랑 무슨 상관인데?",
						"english": "What does that have to do with Park Sang-gu?",
						"japanese": "それがパク・サングとどう関係あるんだ？",
						"chinese": "那和朴尚九有什么关系？",
						"french": "Quel est le rapport avec Park Sang-gu ?",
						"spanish": "¿Qué tiene que ver eso con Park Sang-gu?",
						"vietnamese": "Cái đó thì liên quan gì đến Park Sang-gu?",
						"thai": "แล้วมันเกี่ยวอะไรกับพัคซังกู?",
						"hindi": "उसका पार्क संग-गु से क्या लेना-देना है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "잊힌 조폭 조직의 기록을 파헤쳤어요. 그들의 '규율'… 그리고 한 사람.",
						"english": "I dug into the records of a forgotten gang. Their 'rules'... and one person.",
						"japanese": "忘れ去られた暴力団の記録を調べました。彼らの「規律」…そして、ある人物。",
						"chinese": "我深入调查了一个被遗忘的黑帮记录。他们的“规矩”……还有一个人。",
						"french": "J'ai fouillé les archives d'un gang oublié. Leurs 'règles'... et une personne.",
						"spanish": "Indagué en los registros de una banda olvidada. Sus 'reglas'... y una persona.",
						"vietnamese": "Tôi đã đào sâu vào hồ sơ của một băng đảng bị lãng quên. 'Quy tắc' của họ... và một người.",
						"thai": "ฉันเจาะลึกบันทึกของแก๊งที่ถูกลืม 'ระเบียบ' ของพวกเขา... และบุคคลหนึ่ง",
						"hindi": "मैंने एक भूले हुए गिरोह के रिकॉर्ड खंगाले। उनके 'नियम'... और एक व्यक्ति।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "‘매서운 혀’ 박상구. 그의 잔혹한 '선포' 방식이 StaticEcho의 패턴과… 똑같아요.",
						"english": "'Sharp Tongue' Park Sang-gu. His brutal 'proclamation' method... it's identical to StaticEcho's patterns.",
						"japanese": "「鋭い舌」パク・サング。彼の残忍な「宣言」のやり方が、StaticEchoのパターンと…全く同じです。",
						"chinese": "“毒舌”朴尚久。他残忍的“宣告”方式……与StaticEcho的模式一模一样。",
						"french": "Park Sang-gu, 'Langue Acérée'. Sa méthode de 'proclamation' brutale est... identique aux schémas de StaticEcho.",
						"spanish": "'Lengua Afilada' Park Sang-gu. Su brutal método de 'proclamación'... es idéntico a los patrones de StaticEcho.",
						"vietnamese": "'Lưỡi Sắc' Park Sang-gu. Cách 'tuyên bố' tàn bạo của hắn... giống hệt với các kiểu mẫu của StaticEcho.",
						"thai": "'ลิ้นคม' พัคซังกู วิธี 'ประกาศ' อันโหดร้ายของเขา... เหมือนกับรูปแบบของ StaticEcho เป๊ะ",
						"hindi": "'तेज जुबान' पार्क सांग-गू। उसकी क्रूर 'घोषणा' की विधि... StaticEcho के पैटर्न से बिल्कुल मेल खाती है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "디지털 노이즈 사이로 찢어진 양복 차림의 잔상이 섬뜩하게 번뜩였다.",
						"english": "Amidst the digital noise, a lingering image of a man in a torn suit flickered eerily.",
						"japanese": "デジタルノイズの合間に、破れたスーツ姿の残像が不気味に閃いた。",
						"chinese": "在数字噪音中，一个身穿撕裂西装的残影诡异地闪烁着。",
						"french": "Au milieu du bruit numérique, la rémanence d'un homme en costume déchiré scintilla étrangement.",
						"spanish": "Entre el ruido digital, una imagen persistente de un hombre con traje desgarrado parpadeó inquietantemente.",
						"vietnamese": "Giữa tiếng nhiễu kỹ thuật số, một bóng hình người đàn ông trong bộ vest rách rưới nhấp nháy một cách ghê rợn.",
						"thai": "ท่ามกลางเสียงรบกวนดิจิทัล ภาพติดตาของชายชุดสูทขาดวิ่นก็ปรากฏขึ้นอย่างน่าขนลุก",
						"hindi": "डिजिटल शोर के बीच, फटे हुए सूट में एक आदमी की बची हुई छवि भयावह रूप से चमक उठी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "결론은 하나예요. StaticEcho는 박상구의 디지털 파편이야.",
						"english": "There's only one conclusion. StaticEcho is Park Sang-gu's digital fragment.",
						"japanese": "結論は一つです。StaticEchoはパク・サングのデジタル破片だ。",
						"chinese": "只有一个结论。StaticEcho是朴尚久的数字碎片。",
						"french": "Il n'y a qu'une conclusion. StaticEcho est un fragment numérique de Park Sang-gu.",
						"spanish": "Solo hay una conclusión. StaticEcho es un fragmento digital de Park Sang-gu.",
						"vietnamese": "Chỉ có một kết luận. StaticEcho là mảnh vỡ kỹ thuật số của Park Sang-gu.",
						"thai": "มีข้อสรุปเดียว StaticEcho คือเศษเสี้ยวข้อมูลดิจิทัลของพัคซังกู",
						"hindi": "केवल एक ही निष्कर्ष है। StaticEcho पार्क सांग-गू का डिजिटल टुकड़ा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼. 사람이… 데이터로?",
						"english": "Unbelievable. A person... as data?",
						"japanese": "信じられない。人が…データに？",
						"chinese": "这不可能。人……变成数据了？",
						"french": "Incroyable. Une personne... en données ?",
						"spanish": "Inaudito. ¿Una persona... convertida en datos?",
						"vietnamese": "Không thể tin được. Một người... thành dữ liệu ư?",
						"thai": "ไม่น่าเชื่อ คน...กลายเป็นข้อมูล?",
						"hindi": "अविश्वसनीय। एक इंसान... डेटा में?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "불법 실험 중 네트워크에 업로드된 거예요. 그의 광기 어린 본능까지도.",
						"english": "He was uploaded to the network during illegal experiments. Even his deranged instincts.",
						"japanese": "違法な実験中にネットワークにアップロードされたんです。彼の狂気に満ちた本能までもが。",
						"chinese": "他在非法实验中被上传到网络。甚至包括他疯狂的本能。",
						"french": "Il a été téléchargé sur le réseau lors d'expériences illégales. Même ses instincts dérangés.",
						"spanish": "Fue subido a la red durante experimentos ilegales. Incluso sus instintos enloquecidos.",
						"vietnamese": "Hắn đã được tải lên mạng trong các thí nghiệm phi pháp. Ngay cả bản năng điên cuồng của hắn cũng vậy.",
						"thai": "เขาถูกอัปโหลดเข้าสู่เครือข่ายระหว่างการทดลองที่ผิดกฎหมาย แม้แต่สัญชาตญาณที่บ้าคลั่งของเขาด้วย",
						"hindi": "उसे अवैध प्रयोगों के दौरान नेटवर्क पर अपलोड किया गया था। यहाँ तक कि उसकी विकृत प्रवृत्तियाँ भी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그의 유일한 목적은… '명령하고 복종하게 만드는 것'입니다.",
						"english": "His sole purpose is... 'to command and enforce obedience'.",
						"japanese": "彼の唯一の目的は…「命令し、服従させること」です。",
						"chinese": "他唯一的目的就是……“命令并强制服从”。",
						"french": "Son seul but est... 'commander et imposer l'obéissance'.",
						"spanish": "Su único propósito es... 'mandar y obligar a obedecer'.",
						"vietnamese": "Mục đích duy nhất của hắn là... 'ra lệnh và buộc phải tuân theo'.",
						"thai": "วัตถุประสงค์เดียวของเขาคือ... 'การออกคำสั่งและบังคับให้เชื่อฟัง'",
						"hindi": "उसका एकमात्र उद्देश्य है... 'आदेश देना और आज्ञाकारिता लागू करना'।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "규율을 어긴 불순분자… 그게 우리가 된 건가?",
						"english": "Undesirables who broke the rules... Is that what we've become?",
						"japanese": "規律を破った不純分子…それが私たちになったのか？",
						"chinese": "打破规矩的异类……这就是我们变成的样子吗？",
						"french": "Des indésirables qui ont enfreint les règles... Est-ce ce que nous sommes devenus ?",
						"spanish": "Indeseables que rompieron las reglas... ¿Es eso en lo que nos hemos convertido?",
						"vietnamese": "Những kẻ không tuân thủ quy tắc... Đó có phải là chúng ta bây giờ không?",
						"thai": "พวกไม่พึงประสงค์ที่แหกกฎ... นั่นคือสิ่งที่เรากลายเป็นใช่ไหม?",
						"hindi": "नियम तोड़ने वाले अवांछित लोग... क्या हम वही बन गए हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "StaticEcho는 자신의 '규율'에 집착해요. 그것을 어기는 모든 것을 파괴하려 하죠.",
						"english": "StaticEcho is obsessed with its 'rules'. It seeks to destroy anything that breaks them.",
						"japanese": "StaticEchoは自身の「規律」に執着しています。それを破るもの全てを破壊しようとします。",
						"chinese": "StaticEcho痴迷于它的“规矩”。它试图摧毁所有违反规矩的东西。",
						"french": "StaticEcho est obsédé par ses 'règles'. Il cherche à détruire tout ce qui les enfreint.",
						"spanish": "StaticEcho está obsesionado con sus 'reglas'. Busca destruir todo lo que las rompa.",
						"vietnamese": "StaticEcho bị ám ảnh bởi 'quy tắc' của nó. Nó tìm cách phá hủy mọi thứ vi phạm.",
						"thai": "StaticEcho หมกมุ่นอยู่กับ 'กฎเกณฑ์' ของมัน มันพยายามทำลายทุกสิ่งที่ฝ่าฝืน",
						"hindi": "StaticEcho अपने 'नियमों' को लेकर जुनूनी है। यह उन सभी चीजों को नष्ट करना चाहता है जो उन्हें तोड़ती हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 우리가 지금까지 맞서 싸운 건….",
						"english": "So what we've been fighting against all this time is...",
						"japanese": "では、私たちが今まで戦ってきたのは…。",
						"chinese": "那么我们一直以来对抗的……",
						"french": "Alors, ce contre quoi nous nous sommes battus jusqu'à présent...",
						"spanish": "Entonces, contra lo que hemos estado luchando todo este tiempo es...",
						"vietnamese": "Vậy thì điều mà chúng ta đã chiến đấu bấy lâu nay là...",
						"thai": "แล้วสิ่งที่เราต่อสู้มาตลอดก็คือ...",
						"hindi": "तो अब तक हम जिससे लड़ रहे थे..."
					}
				},
				{
					"content": {
						"korean": "죽은 자의 광기, 그의 명령에 복종하지 않는다는 이유로.",
						"english": "The madness of the dead, for not obeying his commands.",
						"japanese": "死者の狂気、彼の命令に従わなかったがために。",
						"chinese": "亡者的疯狂，只因没有服从他的命令。",
						"french": "La folie du mort, pour ne pas avoir obéi à ses ordres.",
						"spanish": "La locura de los muertos, por no obedecer sus órdenes.",
						"vietnamese": "Sự điên loạn của kẻ đã chết, chỉ vì không tuân theo mệnh lệnh của hắn.",
						"thai": "ความบ้าคลั่งของผู้ตาย เพียงเพราะไม่เชื่อฟังคำสั่งของเขา",
						"hindi": "मृत की उन्माद, उसके आदेशों का पालन न करने के कारण।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 이 질서는… 무너지지 않는다…!",
						"english": "Ugh… This order… It will not collapse…!",
						"japanese": "くぅぅ… この秩序は… 崩れない…！",
						"chinese": "呃……这个秩序……不会崩溃……！",
						"french": "Ugh… Cet ordre… Il ne s'effondrera pas… !",
						"spanish": "Ugh… Este orden… ¡No se derrumbará…!",
						"vietnamese": "Khụ… Trật tự này… Sẽ không sụp đổ…!",
						"thai": "อึก... ระเบียบนี้... จะไม่พังทลาย...!",
						"hindi": "उफ़... यह व्यवस्था... ढहेगी नहीं...!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "박상구… 드디어 끝난 건가?",
						"english": "Park Sang-gu… Is it finally over?",
						"japanese": "パク・サング… やっと終わったのか？",
						"chinese": "朴相九……终于结束了吗？",
						"french": "Park Sang-gu… Est-ce enfin terminé ?",
						"spanish": "Park Sang-gu… ¿Por fin ha terminado?",
						"vietnamese": "Park Sang-gu… Cuối cùng cũng kết thúc rồi sao?",
						"thai": "พัคซังกู... ในที่สุดก็จบลงแล้วเหรอ?",
						"hindi": "पार्क सांग-गू… क्या यह आखिरकार खत्म हो गया है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 완전히 끝난 게 아니에요. 그의 핵심 데이터가 남아있어요.",
						"english": "Not… Not entirely over yet. His core data remains.",
						"japanese": "まだ… 完全には終わっていません。彼のコアデータが残っています。",
						"chinese": "还……还没有完全结束。他的核心数据还在。",
						"french": "Pas… Pas encore tout à fait terminé. Ses données principales subsistent.",
						"spanish": "Aún… Aún no ha terminado del todo. Sus datos centrales permanecen.",
						"vietnamese": "Vẫn chưa… chưa kết thúc hoàn toàn đâu. Dữ liệu cốt lõi của hắn vẫn còn.",
						"thai": "ยัง... ยังไม่จบลงทั้งหมด ข้อมูลหลักของเขายังคงอยู่",
						"hindi": "अभी… पूरी तरह खत्म नहीं हुआ है। उसका मुख्य डेटा शेष है।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 코어는 잠시 침묵했다. 그러나 박상구의 광기는, 또 다른 형태를 준비하고 있었다.",
						"english": "StaticEcho's core fell silent for a moment. But Park Sang-gu's madness was preparing another form.",
						"japanese": "StaticEchoのコアは一時的に沈黙した。しかしパク・サングの狂気は、別の形を準備していた。",
						"chinese": "StaticEcho的核心暂时陷入沉默。然而朴相九的疯狂，正在准备另一种形态。",
						"french": "Le cœur de StaticEcho resta silencieux un instant. But la folie de Park Sang-gu préparait une autre forme.",
						"spanish": "El núcleo de StaticEcho quedó en silencio por un momento. Pero la locura de Park Sang-gu estaba preparando otra forma.",
						"vietnamese": "Lõi của StaticEcho im lặng một lát. Nhưng sự điên loạn của Park Sang-gu đang chuẩn bị một hình thái khác.",
						"thai": "แกนกลางของ StaticEcho เงียบลงชั่วขณะ แต่ความบ้าคลั่งของพัคซังกูกำลังเตรียมร่างอีกรูปแบบหนึ่ง",
						"hindi": "StaticEcho का कोर एक पल के लिए शांत हो गया। लेकिन पार्क सांग-गू का उन्माद एक और रूप तैयार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 가장 깊은 코어에 도달했다. 거대한 디지털 잔해가 탐험대를 노려봤다.",
						"english": "Reached StaticEcho's deepest core. Vast digital debris glared at the expedition.",
						"japanese": "StaticEchoの最深部に到達。巨大なデジタル残骸が探検隊を睨みつけた。",
						"chinese": "抵达了StaticEcho最深的核心。巨大的数字残骸凝视着探险队。",
						"french": "Atteint le cœur le plus profond de StaticEcho. D'immenses débris numériques fixaient l'expédition.",
						"spanish": "Se alcanzó el núcleo más profundo de StaticEcho. Enormes escombros digitales miraron fijamente a la expedición.",
						"vietnamese": "Đã đến lõi sâu nhất của StaticEcho. Những mảnh vỡ kỹ thuật số khổng lồ trừng mắt nhìn đoàn thám hiểm.",
						"thai": "มาถึงแกนกลางที่ลึกที่สุดของ StaticEcho เศษซากดิจิทัลขนาดมหึมาจ้องมองคณะสำรวจ",
						"hindi": "StaticEcho के सबसे गहरे कोर तक पहुँचे। विशाल डिजिटल मलबा अभियान दल को घूर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불순분자들… 감히 내 '규율'을 어기려 하는가.",
						"english": "Impurities… Dare you defy my 'Order'?",
						"japanese": "不純分子め… 敢えて私の「秩序」を破ろうとするか。",
						"chinese": "杂质们……竟敢违抗我的“秩序”？",
						"french": "Impuretés… Osez-vous défier mon 'Ordre' ?",
						"spanish": "Impuros… ¿Os atrevéis a desafiar mi 'Orden'?",
						"vietnamese": "Những kẻ tạp nham… Dám chống lại 'Trật tự' của ta sao?",
						"thai": "พวกสิ่งสกปรก... กล้าดีอย่างไรมาฝ่าฝืน 'ระเบียบ' ของข้า?",
						"hindi": "अशुद्धियाँ... क्या तुम मेरे 'आदेश' को धता बताने की हिम्मत करते हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "박상구… 네 명령에 따를 사람은 없어!",
						"english": "Park Sang-gu… No one will obey your commands!",
						"japanese": "パク・サング… お前の命令に従う者などいない！",
						"chinese": "朴相九……没人会服从你的命令！",
						"french": "Park Sang-gu… Personne n'obéira à tes ordres !",
						"spanish": "Park Sang-gu… ¡Nadie obedecerá tus órdenes!",
						"vietnamese": "Park Sang-gu… Sẽ không ai tuân theo mệnh lệnh của ngươi đâu!",
						"thai": "พัคซังกู... ไม่มีใครจะเชื่อฟังคำสั่งของแกหรอก!",
						"hindi": "पार्क सांग-गू… तुम्हारे आदेशों का कोई पालन नहीं करेगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "모두 복종하게 될 것이다. 나의 의지대로!",
						"english": "All shall obey. By my will!",
						"japanese": "全ては服従するだろう。私の意思のままに！",
						"chinese": "所有人都会服从。按照我的意志！",
						"french": "Tous obéiront. Par ma volonté !",
						"spanish": "Todos obedecerán. ¡Por mi voluntad!",
						"vietnamese": "Tất cả sẽ phải tuân theo. Theo ý chí của ta!",
						"thai": "ทุกคนจะต้องเชื่อฟัง ตามใจประสงค์ของข้า!",
						"hindi": "सभी आज्ञा मानेंगे। मेरी इच्छा से!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저건 박상구의 망령이에요. 물리쳐야 해요!",
						"english": "That's Park Sang-gu's specter. We have to defeat it!",
						"japanese": "あれはパク・サングの亡霊です。倒さなければなりません！",
						"chinese": "那是朴相九的亡灵。我们必须打败它！",
						"french": "C'est le spectre de Park Sang-gu. Nous devons le vaincre !",
						"spanish": "Ese es el espectro de Park Sang-gu. ¡Tenemos que derrotarlo!",
						"vietnamese": "Đó là hồn ma của Park Sang-gu. Chúng ta phải đánh bại nó!",
						"thai": "นั่นคือวิญญาณของพัคซังกู เราต้องเอาชนะมันให้ได้!",
						"hindi": "वह पार्क सांग-गू का प्रेत है। हमें उसे हराना होगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "복종하라… 나의 명령이다…!",
						"english": "Obey... It is my command!",
						"japanese": "服従せよ… 我が命令だ…！",
						"chinese": "服从吧……这是我的命令……！",
						"french": "Obéissez... C'est mon ordre...!",
						"spanish": "Obedece... ¡Es mi orden...!",
						"vietnamese": "Hãy tuân phục… Đó là mệnh lệnh của ta…!",
						"thai": "จงเชื่อฟัง… นี่คือคำสั่งของข้า…!",
						"hindi": "आज्ञा का पालन करो... यह मेरा आदेश है...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이대로 당할 순 없어…!",
						"english": "I can't just lose like this...!",
						"japanese": "このままではやられん…！",
						"chinese": "不能就这样被击败……！",
						"french": "Je ne peux pas me laisser faire comme ça...!",
						"spanish": "¡No puedo permitir que esto pase así...!",
						"vietnamese": "Không thể chịu thua thế này được…!",
						"thai": "ฉันยอมแพ้แบบนี้ไม่ได้…!",
						"hindi": "मैं ऐसे हार नहीं मान सकता...!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "정신 차려요! 박상구의 광기에 잠식될 순 없어요!",
						"english": "Snap out of it! We can't let Park Sang-gu's madness consume us!",
						"japanese": "しっかりして！パク・サングの狂気に飲まれてはいけない！",
						"chinese": "清醒一点！不能被朴相久的狂气侵蚀！",
						"french": "Reprenez-vous ! On ne peut pas se laisser dévorer par la folie de Park Sang-gu !",
						"spanish": "¡Reacciona! ¡No podemos ser consumidos por la locura de Park Sang-gu!",
						"vietnamese": "Tỉnh táo lại đi! Không thể để sự điên cuồng của Park Sang-gu nuốt chửng chúng ta!",
						"thai": "ได้สติหน่อย! เราจะถูกความคลั่งของพัคซังกูเข้าครอบงำไม่ได้!",
						"hindi": "होश में आओ! हम पाक सांग-गु के पागलपन का शिकार नहीं हो सकते!"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
