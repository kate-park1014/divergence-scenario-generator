export const scenario_modern_staticecho_18_02 = {
	"scenario_id": "modern_staticecho_18_02",
	"order": 2,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카이… StaticEcho의 메시지 말인데.",
						"english": "Kai... about StaticEcho's messages.",
						"japanese": "カイ…StaticEchoのメッセージのことだけど。",
						"chinese": "凯……关于StaticEcho的消息。",
						"french": "Kai... à propos des messages de StaticEcho.",
						"spanish": "Kai... sobre los mensajes de StaticEcho.",
						"vietnamese": "Kai... về những tin nhắn của StaticEcho.",
						"thai": "ไค... เรื่องข้อความของ StaticEcho น่ะ",
						"hindi": "काई... StaticEcho के संदेशों के बारे में।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜? 이상한 점이라도 발견했어?",
						"english": "Why? Found something strange?",
						"japanese": "どうした？何かおかしな点でも見つけたのか？",
						"chinese": "怎么了？发现什么奇怪的地方了吗？",
						"french": "Pourquoi ? Tu as trouvé quelque chose d'étrange ?",
						"spanish": "¿Por qué? ¿Encontraste algo extraño?",
						"vietnamese": "Sao vậy? Có tìm thấy gì lạ sao?",
						"thai": "ทำไมเหรอ? เจออะไรแปลกๆ เหรอ?",
						"hindi": "क्यों? कुछ अजीब मिला?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "응. 구시대적인 말투, 특정 단어의 반복… 마치 옛날 기록을 보는 것 같아.",
						"english": "Yeah. Old-fashioned speech, repeated words... like reading an old record.",
						"japanese": "うん。古風な話し方、特定の単語の繰り返し…まるで昔の記録を見ているみたい。",
						"chinese": "嗯。老旧的措辞，特定词语的重复……就像在看旧记录一样。",
						"french": "Oui. Un langage démodé, des mots répétés... comme lire un vieux dossier.",
						"spanish": "Sí. Lenguaje anticuado, palabras repetidas... como leer un registro antiguo.",
						"vietnamese": "Ừm. Cách nói chuyện cũ kỹ, lặp lại một số từ... như thể đang đọc một ghi chép cũ.",
						"thai": "ใช่. สำนวนเก่า การใช้คำซ้ำๆ... เหมือนกำลังอ่านบันทึกเก่าเลย",
						"hindi": "हाँ। पुरानी शैली की भाषा, कुछ शब्दों का बार-बार दोहराना... जैसे कोई पुरानी रिकॉर्ड पढ़ रहा हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "데이터 오류가 아니라고?",
						"english": "It's not a data error?",
						"japanese": "データエラーじゃないのか？",
						"chinese": "这不是数据错误吗？",
						"french": "Ce n'est pas une erreur de données ?",
						"spanish": "¿No es un error de datos?",
						"vietnamese": "Không phải lỗi dữ liệu sao?",
						"thai": "ไม่ใช่ข้อมูลผิดพลาดเหรอ?",
						"hindi": "यह डेटा त्रुटि नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그 이상이야. 누군가의 '습관' 같아.",
						"english": "It's more than that. It feels like someone's 'habit'.",
						"japanese": "それ以上だ。誰かの『習慣』みたいだ。",
						"chinese": "不止如此。更像是某个人的“习惯”。",
						"french": "C'est plus que ça. On dirait l'« habitude » de quelqu'un.",
						"spanish": "Es más que eso. Parece el 'hábito' de alguien.",
						"vietnamese": "Hơn thế nữa. Nó giống như 'thói quen' của ai đó.",
						"thai": "มันมากกว่านั้น มันเหมือน 'นิสัย' ของใครบางคน",
						"hindi": "यह उससे कहीं ज़्यादा है। यह किसी की 'आदत' जैसा लगता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "드디어 찾았어… '매서운 혀' 박상구.",
						"english": "Finally found him... Park Sang-gu, 'The Sharp Tongue'.",
						"japanese": "ついに見つけたぞ…「苛烈な舌」パク・サング。",
						"chinese": "终于找到了……‘毒舌’朴相九。",
						"french": "Enfin je l'ai trouvé… Park Sang-gu, 'La Langue Aigre'.",
						"spanish": "Finalmente lo encontré… Park Sang-gu, 'La Lengua Afilada'.",
						"vietnamese": "Cuối cùng cũng tìm thấy rồi… Park Sang-gu, 'Lưỡi Dao Sắc'.",
						"thai": "ในที่สุดก็เจอจนได้... พัคซังกู 'ลิ้นคมกริบ'.",
						"hindi": "आख़िरकार उसे ढूंढ ही लिया... पार्क सांग-गू, 'तेज जुबान'."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "매서운 혀? 그게 누구야?",
						"english": "'The Sharp Tongue'? Who's that?",
						"japanese": "苛烈な舌？誰それ？",
						"chinese": "毒舌？他是谁？",
						"french": "'La Langue Aigre' ? Qui est-ce ?",
						"spanish": "¿'La Lengua Afilada'? ¿Quién es?",
						"vietnamese": "'Lưỡi Dao Sắc'? Ai vậy?",
						"thai": "'ลิ้นคมกริบ'? ใครกัน?",
						"hindi": "'तेज जुबान'? वो कौन है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "과거 도시의 뒷골목을 지배했던 조폭 두목. 그의 '선포' 방식이 StaticEcho의 명령과 소름 끼치게 일치해.",
						"english": "A gang boss who once ruled the city's back alleys. His 'declarations' eerily match StaticEcho's commands.",
						"japanese": "かつて街の裏路地を支配したギャングのボス。彼の「宣言」の仕方がStaticEchoの命令と不気味なほど一致している。",
						"chinese": "一位曾经统治城市后街的黑帮老大。他的‘宣告’方式与StaticEcho的命令惊人地吻合。",
						"french": "Un chef de gang qui régnait autrefois sur les ruelles de la ville. Ses 'proclamations' correspondent étrangement aux ordres de StaticEcho.",
						"spanish": "Un jefe de pandilla que una vez dominó los callejones de la ciudad. Sus 'declaraciones' coinciden espeluznantemente con las órdenes de StaticEcho.",
						"vietnamese": "Một trùm băng đảng từng thống trị các con hẻm phía sau thành phố. Cách 'tuyên bố' của hắn khớp đến rợn người với mệnh lệnh của StaticEcho.",
						"thai": "หัวหน้าแก๊งที่เคยครองตรอกซอยหลังเมือง วิธี 'ประกาศ' ของเขาตรงกับคำสั่งของ StaticEcho อย่างน่าขนลุก",
						"hindi": "शहर की गलियों पर राज करने वाला एक गिरोह का सरगना। उसके 'ऐलान' StaticEcho के आदेशों से डरावनी तरह से मेल खाते हैं।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "데이터 노이즈 사이로 불협화음과 비명 같은 소리가 섞여 들어왔다.",
						"english": "Amidst the data noise, dissonant and screaming sounds mixed in.",
						"japanese": "データノイズの合間から、不協和音と悲鳴のような音が混じり合って聞こえてきた。",
						"chinese": "在数据噪音中，夹杂着不和谐的音调和尖叫声。",
						"french": "Au milieu du bruit des données, des sons discordants et des cris se sont mêlés.",
						"spanish": "Entre el ruido de los datos, se mezclaron sonidos disonantes y gritos.",
						"vietnamese": "Giữa nhiễu dữ liệu, những âm thanh chói tai và tiếng hét xen lẫn vào nhau.",
						"thai": "ท่ามกลางเสียงรบกวนของข้อมูล มีเสียงไม่ประสานและเสียงกรีดร้องปะปนเข้ามา",
						"hindi": "डेटा शोर के बीच, बेसुरी और चीखने वाली आवाजें मिल गईं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이 노이즈… 단순한 오류가 아니야. 누군가의 고통 같아.",
						"english": "This noise... it's not just a simple error. It sounds like someone's suffering.",
						"japanese": "このノイズ…ただの 오류じゃない。誰かの苦痛のようだ。",
						"chinese": "这噪音……这不是简单的错误。它听起来像某个人的痛苦。",
						"french": "Ce bruit… ce n'est pas une simple erreur. On dirait la souffrance de quelqu'un.",
						"spanish": "Este ruido… no es un simple error. Parece el sufrimiento de alguien.",
						"vietnamese": "Tiếng ồn này… không phải lỗi đơn giản. Nó giống như nỗi đau của ai đó.",
						"thai": "เสียงรบกวนนี้... ไม่ใช่แค่ข้อผิดพลาดธรรมดา เหมือนความเจ็บปวดของใครบางคน",
						"hindi": "यह शोर... यह केवल एक गलती नहीं है। यह किसी की पीड़ा जैसा लगता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "박상구의 기록을 더 파봤어. 그는 '규율'에 미쳐있었어.",
						"english": "I dug deeper into Park Sang-gu's records. He was obsessed with 'discipline'.",
						"japanese": "パク・サングの記録をさらに調べた。彼は「規律」に憑りつかれていた。",
						"chinese": "我进一步查阅了朴相九的记录。他痴迷于‘规矩’。",
						"french": "J'ai approfondi les dossiers de Park Sang-gu. Il était obsédé par la 'discipline'.",
						"spanish": "Investigué más a fondo los registros de Park Sang-gu. Estaba obsesionado con la 'disciplina'.",
						"vietnamese": "Tôi đã đào sâu hơn vào hồ sơ của Park Sang-gu. Hắn ta bị ám ảnh bởi 'kỷ luật'.",
						"thai": "ฉันสืบประวัติของพัคซังกูเพิ่ม เขาหมกมุ่นอยู่กับ 'ระเบียบวินัย'",
						"hindi": "मैंने पार्क सांग-गू के रिकॉर्ड्स में और गहराई से छानबीन की। वह 'अनुशासन' के प्रति जुनूनी था।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "규율? StaticEcho가 말하는 '불순분자'랑 똑같잖아.",
						"english": "Discipline? That's exactly what StaticEcho calls 'undesirables'.",
						"japanese": "規律？StaticEchoが言う「不純分子」と全く同じじゃないか。",
						"chinese": "规矩？这不就是StaticEcho所说的‘不纯分子’吗？",
						"french": "Discipline ? C'est exactement ce que StaticEcho appelle les 'éléments impurs'.",
						"spanish": "¿Disciplina? Es exactamente lo que StaticEcho llama 'elementos indeseables'.",
						"vietnamese": "Kỷ luật? Đó chính là cái mà StaticEcho gọi là 'phần tử bất hảo' mà.",
						"thai": "ระเบียบวินัย? ก็เหมือนกับ 'ผู้ที่ไม่บริสุทธิ์' ที่ StaticEcho พูดถึงเลยนี่นา",
						"hindi": "अनुशासन? यह वही है जिसे StaticEcho 'अवांछित' कहता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그래. 조직을 배신한 자들에게 내렸던 잔혹한 '처단 명령'… StaticEcho의 패턴과 완벽하게 일치해.",
						"english": "Exactly. The cruel 'execution orders' he issued to traitors... they perfectly match StaticEcho's patterns.",
						"japanese": "そうだ。組織を裏切った者たちに下された残酷な「処断命令」…StaticEchoのパターンと完全に一致する。",
						"chinese": "没错。他向背叛组织者下达的残酷‘处决命令’……与StaticEcho的模式完美吻合。",
						"french": "Oui. Les 'ordres d'exécution' cruels qu'il donnait aux traîtres… correspondent parfaitement aux schémas de StaticEcho.",
						"spanish": "Sí. Las crueles 'órdenes de ejecución' que dictó a los traidores… coinciden perfectamente con los patrones de StaticEcho.",
						"vietnamese": "Đúng vậy. Những 'mệnh lệnh xử tử' tàn nhẫn mà hắn ban cho những kẻ phản bội tổ chức… hoàn toàn khớp với mô hình của StaticEcho.",
						"thai": "ใช่เลย 'คำสั่งประหาร' อันโหดร้ายที่เขามอบให้ผู้ที่ทรยศองค์กร... ตรงกับรูปแบบของ StaticEcho อย่างสมบูรณ์แบบ",
						"hindi": "हाँ। उसने गद्दारों को दिए गए क्रूर 'मृत्युदंड के आदेश'... StaticEcho के पैटर्न से पूरी तरह मेल खाते हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "디지털 노이즈 속에서 찢어진 양복 차림의 잔상이 섬광처럼 스쳐 지나갔다.",
						"english": "Amidst the digital noise, a lingering image of a man in a torn suit flashed by like lightning.",
						"japanese": "デジタルノイズの中で、破れたスーツ姿の残像が閃光のように通り過ぎた。",
						"chinese": "在数字噪音中，一个身穿破旧西装的残像如闪光般一闪而过。",
						"french": "Au milieu du bruit numérique, l'image persistante d'un homme en costume déchiré passa comme un éclair.",
						"spanish": "Entre el ruido digital, la imagen persistente de un hombre con un traje roto pasó como un relámpago.",
						"vietnamese": "Trong nhiễu kỹ thuật số, một dư ảnh của người đàn ông mặc bộ vest rách vụt qua như tia chớp.",
						"thai": "ท่ามกลางเสียงรบกวนดิจิทัล ภาพติดตาของชายสวมสูทขาดๆ แวบหายไปเหมือนสายฟ้าแลบ",
						"hindi": "डिजिटल शोर के बीच, फटे हुए सूट में एक व्यक्ति की एक शेष छवि बिजली की तरह चमकती हुई निकल गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
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
						2,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "더 이상 의심할 여지가 없어. StaticEcho… 그는 박상구야.",
						"english": "There's no room for doubt anymore. StaticEcho… he is Park Sang-gu.",
						"japanese": "もう疑う余地はない。StaticEcho…彼はパク・サングだ。",
						"chinese": "再也没有任何怀疑的余地了。StaticEcho……他就是朴相九。",
						"french": "Il n'y a plus de place au doute. StaticEcho… c'est Park Sang-gu.",
						"spanish": "Ya no hay lugar a dudas. StaticEcho… él es Park Sang-gu.",
						"vietnamese": "Không còn chỗ cho nghi ngờ nữa. StaticEcho… hắn là Park Sang-gu.",
						"thai": "ไม่มีข้อสงสัยอีกต่อไปแล้ว StaticEcho... เขาคือพัคซังกู",
						"hindi": "अब कोई शक की गुंजाइश नहीं है। StaticEcho... वह पार्क सांग-गू है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 AI가 아니라… 사람이었다고?",
						"english": "Not just a simple AI... it was a person?",
						"japanese": "ただのAIじゃなくて…人間だったってこと？",
						"chinese": "不只是简单的AI…而是人类？",
						"french": "Pas juste une simple IA... c'était une personne ?",
						"spanish": "¿No era solo una IA... sino una persona?",
						"vietnamese": "Không chỉ là AI đơn thuần… mà là người ư?",
						"thai": "ไม่ใช่แค่ AI ธรรมดา… แต่เป็นคนหรือ?",
						"hindi": "सिर्फ एक AI नहीं… बल्कि एक इंसान था?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 사람이었던 '잔해'일 거야. 그의 광기, 집착이 데이터가 되어버린 거지.",
						"english": "No. It's likely the 'remains' of a person. His madness, his obsession, turned into data.",
						"japanese": "いや。人間だった『残骸』だろう。彼の狂気、執着がデータになってしまったんだ。",
						"chinese": "不。那可能是曾经是人类的“残骸”。他的疯狂、执念变成了数据。",
						"french": "Non. Ce sont probablement les 'vestiges' d'une personne. Sa folie, son obsession, se sont transformées en données.",
						"spanish": "No. Probablemente son los 'restos' de una persona. Su locura, su obsesión, se convirtieron en datos.",
						"vietnamese": "Không. Đó có thể là 'tàn dư' của một con người. Sự điên rồ, nỗi ám ảnh của hắn đã biến thành dữ liệu.",
						"thai": "ไม่หรอก น่าจะเป็น 'ซาก' ของคนคนหนึ่ง ความบ้าคลั่ง ความหมกมุ่นของเขาได้กลายเป็นข้อมูลไปแล้ว",
						"hindi": "नहीं। यह शायद एक इंसान के 'अवशेष' हैं। उसकी सनक, उसका जुनून डेटा में बदल गया है।"
					},
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그는 '규율'을 어긴 모든 것을 파괴하려 해. 조심해야 해.",
						"english": "He tries to destroy everything that violates 'the rules.' Be careful.",
						"japanese": "彼は『規律』を破ったもの全てを破壊しようとしている。気をつけろ。",
						"chinese": "他试图摧毁所有违反“规矩”的东西。你必须小心。",
						"french": "Il essaie de détruire tout ce qui enfreint 'les règles'. Fais attention.",
						"spanish": "Él intenta destruir todo lo que viola 'las reglas'. Ten cuidado.",
						"vietnamese": "Hắn ta muốn phá hủy tất cả những gì vi phạm 'quy tắc'. Phải cẩn thận.",
						"thai": "เขาพยายามจะทำลายทุกสิ่งที่ฝ่าฝืน 'กฎ' ต้องระวังให้ดี",
						"hindi": "वह 'नियमों' का उल्लंघन करने वाली हर चीज़ को नष्ट करना चाहता है। तुम्हें सावधान रहना होगा।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "감히 나의 '명령'을 거역하는 자들인가.",
						"english": "Dare you defy my 'commands'?",
						"japanese": "よくも私の『命令』に逆らう者どもめ。",
						"chinese": "竟敢违抗我的“命令”吗？",
						"french": "Osez-vous défier mes 'ordres' ?",
						"spanish": "¿Os atrevéis a desafiar mis 'órdenes'?",
						"vietnamese": "Dám cả gan chống lại 'mệnh lệnh' của ta sao?",
						"thai": "พวกเจ้ากล้าที่จะขัดขืน 'คำสั่ง' ของข้ารึ",
						"hindi": "क्या तुम मेरी 'आज्ञाओं' की अवहेलना करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 불순분자를 처단하는 '심판의 장'이다. 너희는 규율을 어겼다.",
						"english": "This is the 'Chamber of Judgment' where impurities are purged. You have broken the rules.",
						"japanese": "ここは不純分子を処断する『審判の場』だ。お前たちは規律を破った。",
						"chinese": "这里是处决不纯分子的“审判之地”。你们违反了规矩。",
						"french": "C'est la 'Chambre du Jugement' où les impuretés sont purgées. Vous avez enfreint les règles.",
						"spanish": "Esta es la 'Cámara del Juicio' donde las impurezas son purgadas. Habéis roto las reglas.",
						"vietnamese": "Đây là 'Sân phán quyết' trừng trị những kẻ bất tịnh. Các ngươi đã vi phạm quy tắc.",
						"thai": "ที่นี่คือ 'ลานพิพากษา' สำหรับกำจัดสิ่งปนเปื้อน พวกเจ้าได้ฝ่าฝืนกฎแล้ว",
						"hindi": "यह 'न्याय का कक्ष' है जहाँ अशुद्धियों को शुद्ध किया जाता है। तुमने नियम तोड़े हैं।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						1,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "박상구의 말버릇… 그가 정말 이 안에 있어.",
						"english": "Park Sang-gu's way of speaking... he really is in here.",
						"japanese": "パク・サングの口癖…彼が本当にこの中にいるんだ。",
						"chinese": "朴相九的口头禅…他真的在这里面。",
						"french": "La façon de parler de Park Sang-gu... il est vraiment ici.",
						"spanish": "La forma de hablar de Park Sang-gu... él realmente está aquí.",
						"vietnamese": "Kiểu nói chuyện của Park Sang-gu… hắn ta thực sự ở trong này.",
						"thai": "สำนวนการพูดของปาร์ค ซังกู... เขาอยู่ในนี้จริงๆ ด้วย",
						"hindi": "पार्क सांग-गू का बोलने का तरीका... वह सच में यहीं है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}! 네 광기를 멈추게 할 거야!",
						"english": "{random_boss}! I'll stop your madness!",
						"japanese": "{random_boss}！お前の狂気を止めてやる！",
						"chinese": "{random_boss}！我会阻止你的疯狂！",
						"french": "{random_boss} ! J'arrêterai ta folie !",
						"spanish": "¡{random_boss}! ¡Detendré tu locura!",
						"vietnamese": "{random_boss}! Ta sẽ chấm dứt sự điên rồ của ngươi!",
						"thai": "{random_boss}! ฉันจะหยุดความบ้าคลั่งของแกเอง!",
						"hindi": "{random_boss}! मैं तुम्हारे पागलपन को रोकूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. '규율'은 깨지지 않는다. 다시 돌아올 것이다.",
						"english": "...Is this all you've got? 'The rules' are unbreakable. I will return.",
						"japanese": "…たったこれしきか。『規律』は破られない。必ず戻ってくる。",
						"chinese": "…就这点本事吗？“规矩”是不会被打破的。我会再回来。",
						"french": "...C'est tout ce que vous avez ? 'Les règles' sont incassables. Je reviendrai.",
						"spanish": "¿...Esto es todo lo que tienes? 'Las reglas' son inquebrantables. Volveré.",
						"vietnamese": "…Chỉ có vậy thôi sao. 'Quy tắc' là không thể phá vỡ. Ta sẽ trở lại.",
						"thai": "...ได้แค่นี้เองรึ? 'กฎ' ไม่มีวันถูกทำลาย ข้าจะกลับมาอีกครั้ง",
						"hindi": "...बस इतना ही है? 'नियम' अटूट हैं। मैं वापस आऊँगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌아온다고? 아직 끝나지 않았어?",
						"english": "Return? It's not over yet?",
						"japanese": "戻ってくるって？まだ終わってないのか？",
						"chinese": "会回来？还没结束吗？",
						"french": "Reviendra ? Ce n'est pas encore fini ?",
						"spanish": "¿Volver? ¿Aún no ha terminado?",
						"vietnamese": "Trở lại ư? Vẫn chưa kết thúc sao?",
						"thai": "จะกลับมาอีก? ยังไม่จบอีกเหรอ?",
						"hindi": "वापस आएगा? अभी खत्म नहीं हुआ?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이상해… 이 디지털 코어 안에 뭔가 '인간적인' 흔적이 느껴져.",
						"english": "Strange... I feel something 'human' inside this digital core.",
						"japanese": "おかしい…このデジタルコアの中に何か『人間的な』痕跡が感じられる。",
						"chinese": "奇怪…这个数字核心里面，我感觉到了某种“人性”的痕迹。",
						"french": "Étrange... Je ressens quelque chose d''humain' à l'intérieur de ce cœur numérique.",
						"spanish": "Extraño... Siento algo 'humano' dentro de este núcleo digital.",
						"vietnamese": "Lạ thật… Tôi cảm thấy có gì đó 'nhân tính' bên trong lõi kỹ thuật số này.",
						"thai": "แปลกจัง... ฉันรู้สึกได้ถึงร่องรอย 'ความเป็นมนุษย์' บางอย่างภายในคอร์ดิจิทัลนี้",
						"hindi": "अजीब है... मुझे इस डिजिटल कोर के अंदर कुछ 'मानवीय' निशान महसूस हो रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "린은 그곳에서 단순한 데이터 이상의 잔해를 감지했다. 마치… 인간의 비명 같은.",
						"english": "Lyn detected remnants there, more than mere data. Like... a human scream.",
						"japanese": "リンはそこで単なるデータ以上の残骸を感知した。まるで…人間の悲鳴のような。",
						"chinese": "琳在那里探测到了不仅仅是数据的残余。那就像……人类的尖叫。",
						"french": "Lyn y a détecté des vestiges bien plus que de simples données. Comme… un cri humain.",
						"spanish": "Lyn detectó allí más que simples restos de datos. Como… un grito humano.",
						"vietnamese": "Lyn đã phát hiện ra những tàn dư ở đó, không chỉ là dữ liệu đơn thuần. Giống như... một tiếng hét của con người.",
						"thai": "ลินตรวจพบซากบางอย่างที่นั่น มากกว่าแค่ข้อมูลธรรมดา ราวกับ... เสียงกรีดร้องของมนุษย์",
						"hindi": "लिन को वहाँ केवल डेटा से अधिक अवशेष मिले। जैसे... एक इंसानी चीख।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. '규율'을 거역한 대가는 혹독하다.",
						"english": "Pathetic creatures. Defying 'Discipline' comes with a harsh price.",
						"japanese": "愚かな者たち。「規律」に背いた代償は高くつくぞ。",
						"chinese": "卑微的东西。违抗“规矩”的代价是惨痛的。",
						"french": "Êtres insignifiants. Le prix de la désobéissance à la \"Discipline\" est sévère.",
						"spanish": "Criaturas insignificantes. Desafiar la 'Disciplina' tiene un precio cruel.",
						"vietnamese": "Những kẻ hèn mọn. Cái giá phải trả khi chống lại 'Kỷ luật' là rất khắc nghiệt.",
						"thai": "พวกไร้ค่า การขัดขืน 'ระเบียบ' มีราคาที่ต้องจ่ายอย่างแสนสาหัส",
						"hindi": "तुच्छ प्राणी। 'अनुशासन' की अवहेलना की कीमत बहुत भारी होती है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시… 다시 도전할 거야. 네 정체를 밝혀낼 때까지!",
						"english": "Again... I'll challenge again. Until I uncover your true identity!",
						"japanese": "もう一度…もう一度挑む。お前の正体を暴くまで！",
						"chinese": "再来……我还会再挑战的。直到揭露你的真面目！",
						"french": "Encore… Je tenterai de nouveau. Jusqu'à ce que je révèle ta véritable identité !",
						"spanish": "De nuevo… ¡Volveré a intentarlo! ¡Hasta que revele tu verdadera identidad!",
						"vietnamese": "Lại nữa... Tôi sẽ thử thách một lần nữa. Cho đến khi tôi khám phá ra danh tính thực sự của ngươi!",
						"thai": "อีกครั้ง... ฉันจะท้าทายอีกครั้ง จนกว่าจะเปิดเผยตัวตนที่แท้จริงของแก!",
						"hindi": "फिर से... मैं फिर से चुनौती दूँगा। जब तक तुम्हारी असली पहचान उजागर नहीं कर देता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시를 옥죄는 StaticEcho의 광기.",
			"메시지 속 기이한 규칙들은, 잊힌 과거의 그림자를 불러냈다.",
			"린은 기록 속에서 한 남자의 이름을 발견했다.",
			"'매서운 혀' 박상구. 그리고 그의 잔혹한 선포.",
			"진실은 디지털 노이즈 속에 숨겨져 있었다."
		],
		"english": [
			"StaticEcho's madness, strangling the city.",
			"The bizarre rules within the messages summoned shadows of a forgotten past.",
			"Rin found a man's name in the records.",
			"'Sharp Tongue' Park Sang-gu. And his cruel declaration.",
			"The truth was hidden within digital noise."
		],
		"japanese": [
			"都市を締め付けるStaticEchoの狂気。",
			"メッセージの中の奇妙な規則は、忘れ去られた過去の影を呼び覚ました。",
			"リンは記録の中からある男の名前を発見した。",
			"「鋭い舌」パク・サング。そして彼の残酷な宣言。",
			"真実はデジタルノイズの中に隠されていた。"
		],
		"chinese": [
			"StaticEcho的疯狂，勒紧城市。",
			"信息中诡异的规则，唤醒了被遗忘的过去的阴影。",
			"凛在记录中发现了一个男人的名字。",
			"“尖刻之舌”朴相九。以及他残酷的宣告。",
			"真相隐藏在数字噪音中。"
		],
		"french": [
			"La folie de StaticEcho, étreignant la ville.",
			"Les règles bizarres des messages ont invoqué les ombres d'un passé oublié.",
			"Rin découvrit le nom d'un homme dans les registres.",
			"Park Sang-gu, « Langue Acérée ». Et sa cruelle déclaration.",
			"La vérité était cachée dans le bruit numérique."
		],
		"spanish": [
			"La locura de StaticEcho, estrangulando la ciudad.",
			"Las extrañas reglas en los mensajes invocaron sombras de un pasado olvidado.",
			"Rin encontró el nombre de un hombre en los registros.",
			"'Lengua Afilada' Park Sang-gu. Y su cruel declaración.",
			"La verdad estaba oculta en el ruido digital."
		],
		"vietnamese": [
			"Sự điên loạn của StaticEcho, bóp nghẹt thành phố.",
			"Những quy tắc kỳ lạ trong tin nhắn đã triệu hồi bóng tối của một quá khứ bị lãng quên.",
			"Rin tìm thấy tên một người đàn ông trong các ghi chép.",
			"Park Sang-gu 'Lưỡi bén'. Và lời tuyên bố tàn nhẫn của hắn.",
			"Sự thật bị che giấu trong nhiễu kỹ thuật số."
		],
		"thai": [
			"ความบ้าคลั่งของ StaticEcho ที่รัดคอเมือง",
			"กฎแปลกๆ ในข้อความเรียกเงาของอดีตที่ถูกลืมกลับมา",
			"รินพบชื่อชายคนหนึ่งในบันทึก",
			"'ลิ้นคม' พัคซังกู และการประกาศอันโหดร้ายของเขา",
			"ความจริงถูกซ่อนอยู่ในสัญญาณรบกวนดิจิทัล"
		],
		"hindi": [
			"StaticEcho का पागलपन, शहर को जकड़ रहा है।",
			"संदेशों के भीतर के विचित्र नियम, एक भूले हुए अतीत की छाया को बुलाते हैं।",
			"रिन को अभिलेखों में एक आदमी का नाम मिला।",
			"'तेज जुबान' पार्क सांग-गू। और उसकी क्रूर घोषणा।",
			"सच डिजिटल शोर में छिपा था।"
		]
	}
} as const;
