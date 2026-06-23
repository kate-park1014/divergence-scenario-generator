export const scenario_modern_dongiorno_60_04 = {
	"scenario_id": "modern_dongiorno_60_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		},
		"lin": {
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지오르노의 사업 확장은 거침없었다. 그러나 모두가 환영하는 것은 아니었다.",
						"english": "Giorno's business expansion was relentless. But not everyone welcomed it.",
						"japanese": "ジョルノの事業拡大は容赦なかった。しかし、誰もが歓迎していたわけではなかった。",
						"chinese": "乔尔诺的业务扩张势不可挡。但并非所有人都欢迎。",
						"french": "L'expansion des affaires de Giorno était implacable. Mais tout le monde ne l'accueillait pas.",
						"spanish": "La expansión de negocios de Giorno era implacable. Pero no todos la recibieron con agrado.",
						"vietnamese": "Việc mở rộng kinh doanh của Giorno không ngừng. Nhưng không phải ai cũng hoan nghênh.",
						"thai": "การขยายธุรกิจของจิออร์โน่เป็นไปอย่างไม่หยุดยั้ง แต่ไม่ใช่ทุกคนที่ต้อนรับมัน",
						"hindi": "जियोर्नो का व्यापार विस्तार बेरोकटोक था। लेकिन हर कोई इसका स्वागत नहीं करता था।"
					}
				},
				{
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "지오르노가 모든 물류를 장악하려 해. 도시가 통째로 넘어갈 거야.",
						"english": "Giorno is trying to seize control of all logistics. The whole city will fall to him.",
						"japanese": "ジョルノがすべての物流を掌握しようとしている。都市が丸ごと彼のものになるだろう。",
						"chinese": "乔尔诺正试图控制所有物流。整个城市都将落入他手。",
						"french": "Giorno essaie de prendre le contrôle de toute la logistique. La ville entière va tomber entre ses mains.",
						"spanish": "Giorno intenta apoderarse de toda la logística. Toda la ciudad caerá en sus manos.",
						"vietnamese": "Giorno đang cố gắng giành quyền kiểm soát mọi hoạt động hậu cần. Cả thành phố sẽ rơi vào tay hắn.",
						"thai": "จิออร์โน่กำลังพยายามยึดครองระบบโลจิสติกส์ทั้งหมด เมืองทั้งเมืองจะตกเป็นของเขา",
						"hindi": "जियोर्नो सभी रसद पर कब्ज़ा करने की कोशिश कर रहा है। पूरा शहर उसके हाथ में आ जाएगा।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "당신은 반대하는 입장인가요?",
						"english": "Are you against it?",
						"japanese": "あなたは反対の立場ですか？",
						"chinese": "您是反对的吗？",
						"french": "Êtes-vous contre ?",
						"spanish": "¿Está en contra?",
						"vietnamese": "Bạn có phản đối không?",
						"thai": "คุณคัดค้านหรือเปล่า",
						"hindi": "क्या आप इसके खिलाफ हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그럼. 이건 독점도 아니야. 지오르노는 뒤에서 뭘 꾸미고 있어.",
						"english": "Yes. This isn't just a monopoly. Giorno is plotting something behind the scenes.",
						"japanese": "もちろん。これは独占だけじゃない。ジョルノは裏で何かを企んでいる。",
						"chinese": "当然。这不仅仅是垄断。乔尔诺在幕后策划着什么。",
						"french": "Oui. Ce n'est pas qu'un monopole. Giorno complote quelque chose en coulisses.",
						"spanish": "Sí. Esto no es solo un monopolio. Giorno está tramando algo en secreto.",
						"vietnamese": "Đúng vậy. Đây không chỉ là độc quyền. Giorno đang âm mưu điều gì đó phía sau.",
						"thai": "ใช่ นี่ไม่ใช่แค่การผูกขาด จิออร์โน่กำลังวางแผนอะไรบางอย่างอยู่เบื้องหลัง",
						"hindi": "हाँ। यह सिर्फ एकाधिकार नहीं है। जियोर्नो पर्दे के पीछे कुछ रच रहा है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "확실한 증거를 찾고 있어. 내일이면 배송될 거야.",
						"english": "I'm looking for solid evidence. It will be delivered tomorrow.",
						"japanese": "確かな証拠を探している。明日には届けられるだろう。",
						"chinese": "我正在寻找确凿的证据。明天就会送达。",
						"french": "Je cherche des preuves solides. Elles seront livrées demain.",
						"spanish": "Estoy buscando pruebas sólidas. Serán entregadas mañana.",
						"vietnamese": "Tôi đang tìm kiếm bằng chứng xác thực. Nó sẽ được giao vào ngày mai.",
						"thai": "ฉันกำลังมองหาหลักฐานที่แน่ชัด มันจะถูกส่งมาพรุ่งนี้",
						"hindi": "मैं पुख्ता सबूत ढूंढ रहा हूँ। यह कल तक पहुँच जाएगा।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "닥스. 위험해지고 있어. 지오르노가 당신을 주시하고 있어.",
						"english": "Daxs. You're in danger. Giorno is watching you.",
						"japanese": "ダックス。危険になっている。ジョルノがあなたを監視している。",
						"chinese": "达克斯。你正处于危险之中。乔尔诺正在监视你。",
						"french": "Daxs. Tu es en danger. Giorno te surveille.",
						"spanish": "Daxs. Estás en peligro. Giorno te está vigilando.",
						"vietnamese": "Daxs. Bạn đang gặp nguy hiểm. Giorno đang theo dõi bạn.",
						"thai": "แด็กซ์ คุณกำลังตกอยู่ในอันตราย จิออร์โน่กำลังจับตาดูคุณอยู่",
						"hindi": "डैक्स। तुम खतरे में हो। जियोर्नो तुम्हें देख रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 일이죠?",
						"english": "What's going on?",
						"japanese": "どうしましたか？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qui se passe ?",
						"spanish": "¿Qué está pasando?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้นครับ/คะ?",
						"hindi": "क्या बात है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "괜찮아. 내일이면 모든 게 밝혀질 거야. 중요한 정보가 도착하거든.",
						"english": "It's alright. Everything will be clear tomorrow. Important intel is arriving.",
						"japanese": "大丈夫だ。明日にはすべてが明らかになる。重要な情報が届くからな。",
						"chinese": "没关系。明天一切都会真相大白。有重要情报要送达。",
						"french": "Ça va. Tout sera clair demain. Des informations importantes arrivent.",
						"spanish": "Está bien. Mañana todo se aclarará. Llega información importante.",
						"vietnamese": "Không sao đâu. Ngày mai mọi chuyện sẽ sáng tỏ. Thông tin quan trọng sẽ đến.",
						"thai": "ไม่เป็นไรหรอก พรุ่งนี้ทุกอย่างจะกระจ่างเอง ข้อมูลสำคัญจะมาถึง",
						"hindi": "ठीक है। कल सब कुछ स्पष्ट हो जाएगा। महत्वपूर्ण जानकारी आ रही है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "제발 조심해요. 지오르노는 당신 생각보다 훨씬 잔인해.",
						"english": "Please be careful. Giornor is far more cruel than you think.",
						"japanese": "どうか気をつけて。ジョルノはあなたが思うよりずっと残忍よ。",
						"chinese": "请务必小心。乔尔诺比你想象的要残忍得多。",
						"french": "S'il vous plaît, soyez prudent. Giornor est bien plus cruel que vous ne le pensez.",
						"spanish": "Por favor, tenga cuidado. Giornor es mucho más cruel de lo que cree.",
						"vietnamese": "Xin hãy cẩn thận. Giornor tàn nhẫn hơn anh nghĩ nhiều.",
						"thai": "ได้โปรดระวังตัวไว้ จอร์นอร์โหดร้ายกว่าที่คุณคิดมาก",
						"hindi": "कृपया सावधान रहें। गियोर्नो आपकी सोच से कहीं ज़्यादा क्रूर है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "다음 날 아침, 닥스의 회사 건물이 폐허로 변해있었다.",
						"english": "The next morning, Dax's company building lay in ruins.",
						"japanese": "翌朝、ダックスの会社ビルは廃墟と化していた。",
						"chinese": "第二天早上，达克斯的公司大楼变成了一片废墟。",
						"french": "Le lendemain matin, le bâtiment de la société de Dax était en ruines.",
						"spanish": "A la mañana siguiente, el edificio de la empresa de Dax estaba en ruinas.",
						"vietnamese": "Sáng hôm sau, tòa nhà công ty của Dax đã biến thành đống đổ nát.",
						"thai": "เช้าวันรุ่งขึ้น ตึกบริษัทของแด็กซ์กลายเป็นซากปรักหักพัง",
						"hindi": "अगली सुबह, डैक्स की कंपनी की इमारत खंडहर में बदल चुकी थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게… 무슨 짓이야.",
						"english": "What... what is this?",
						"japanese": "これが…何の真似だ。",
						"chinese": "这…是什么鬼东西？",
						"french": "Qu'... qu'est-ce que c'est que ça ?",
						"spanish": "Esto... ¿qué es esto?",
						"vietnamese": "Đây là… trò gì vậy.",
						"thai": "นี่มัน… เรื่องบ้าอะไรเนี่ย",
						"hindi": "यह... यह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "뉴스에 나왔어. 배송 드론 오작동으로 인한 불운한 사고래.",
						"english": "It's on the news. They're calling it an unfortunate accident due to a delivery drone malfunction.",
						"japanese": "ニュースになってる。配達ドローンの誤作動による、不幸な事故だって。",
						"chinese": "新闻里说，这是送货无人机故障导致的不幸事故。",
						"french": "C'est aux infos. Un malheureux accident dû à un dysfonctionnement de drone de livraison, disent-ils.",
						"spanish": "Salió en las noticias. Dicen que fue un desafortunado accidente por un mal funcionamiento de un dron de entrega.",
						"vietnamese": "Tin tức nói rồi. Đó là một tai nạn đáng tiếc do lỗi hoạt động của drone giao hàng.",
						"thai": "มันอยู่ในข่าวแล้วล่ะ พวกเขาบอกว่าเป็นอุบัติเหตุโชคร้ายที่เกิดจากโดรนส่งของทำงานผิดปกติ",
						"hindi": "यह खबर में है। डिलीवरी ड्रोन की खराबी के कारण इसे एक दुर्भाग्यपूर्ण दुर्घटना बताया जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 지오르노가 보낸 거야.",
						"english": "Nonsense. Giornor sent this.",
						"japanese": "馬鹿な。ジョルノがやったんだ。",
						"chinese": "胡说八道。这是乔尔诺干的。",
						"french": "Absurd. C'est Giornor qui a fait ça.",
						"spanish": "Tonterías. Esto lo envió Giornor.",
						"vietnamese": "Vô lý. Giornor đã gửi thứ này.",
						"thai": "ไร้สาระ จอร์นอร์เป็นคนส่งมา",
						"hindi": "बकवास। यह गियोर्नो ने भेजा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "TV 속 돈 지오르노는 부드럽게 미소 지었다. 깊이를 알 수 없는 미소였다.",
						"english": "Don Giornor on TV smiled softly. It was a smile of unfathomable depth.",
						"japanese": "テレビの中のドン・ジョルノは穏やかに微笑んだ。底知れない深さの笑みだった。",
						"chinese": "电视里的唐·乔尔诺轻轻微笑着，那是一个深不可测的笑容。",
						"french": "Don Giornor à la télé sourit doucement. C'était un sourire d'une profondeur insondable.",
						"spanish": "Don Giornor en la televisión sonrió suavemente. Era una sonrisa de una profundidad insondable.",
						"vietnamese": "Don Giornor trên TV mỉm cười nhẹ nhàng. Đó là một nụ cười sâu thẳm không thể đoán được.",
						"thai": "ดอน จอร์นอร์ในทีวียิ้มอย่างนุ่มนวล เป็นรอยยิ้มที่ลึกซึ้งหยั่งไม่ถึง",
						"hindi": "टीवी पर डॉन गियोर्नो ने धीरे से मुस्कुराया। यह एक अथाह गहराई वाली मुस्कान थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이건… 닥스가 받으려던 정보 목록이야. '프로젝트 알파'라는 게 있어.",
						"english": "This is... the list of intel Dax was about to receive. There's something called 'Project Alpha'.",
						"japanese": "これは…ダックスが受け取ろうとしていた情報リストだ。「プロジェクト・アルファ」ってのがある。",
						"chinese": "这是…达克斯即将收到的情报清单。里面有叫做“阿尔法计划”的东西。",
						"french": "C'est... la liste des informations que Dax était sur le point de recevoir. Il y a quelque chose appelé « Projet Alpha ».",
						"spanish": "Esto es... la lista de información que Dax estaba a punto de recibir. Hay algo llamado 'Proyecto Alfa'.",
						"vietnamese": "Đây là… danh sách thông tin Dax định nhận. Có thứ gọi là 'Dự án Alpha'.",
						"thai": "นี่คือ… รายชื่อข้อมูลที่แด็กซ์กำลังจะได้รับ มีบางอย่างชื่อว่า 'โปรเจกต์อัลฟ่า'",
						"hindi": "यह... डैक्स को मिलने वाली जानकारी की सूची है। इसमें 'प्रोजेक्ट अल्फा' नाम की कोई चीज़ है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "닥스의 회사에서 이 문서를 찾았어. 지오르노 내부 문서 같아.",
						"english": "I found this document at Dax's company. It looks like an internal Giornor document.",
						"japanese": "ダックスの会社でこの文書を見つけた。ジョルノの内部文書のようだ。",
						"chinese": "我在达克斯的公司发现了这份文件。看起来像是乔尔诺的内部文件。",
						"french": "J'ai trouvé ce document dans la société de Dax. Cela ressemble à un document interne de Giornor.",
						"spanish": "Encontré este documento en la empresa de Dax. Parece un documento interno de Giornor.",
						"vietnamese": "Tôi tìm thấy tài liệu này ở công ty của Dax. Có vẻ là tài liệu nội bộ của Giornor.",
						"thai": "ฉันพบเอกสารนี้ที่บริษัทของแด็กซ์ ดูเหมือนจะเป็นเอกสารภายในของจอร์นอร์",
						"hindi": "मुझे यह दस्तावेज़ डैक्स की कंपनी में मिला। यह गियोर्नो का आंतरिक दस्तावेज़ लगता है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…이건 오래된 규율이야. '정중함이 곧 힘이다'라고 적혀있지.",
						"english": "...This is an old rule. It says, 'Politeness is power.'",
						"japanese": "「…これは古い規律だ。『丁寧さこそ力なり』と書かれている。」",
						"chinese": "「……这是古老的规矩。上面写着，‘礼貌即力量’。」",
						"french": "...C'est une vieille règle. Il est écrit : 'La politesse est une force'.",
						"spanish": "...Esta es una regla antigua. Dice: 'La cortesía es poder'.",
						"vietnamese": "...Đây là một quy tắc cổ xưa. Nó viết: 'Lịch sự là sức mạnh'.",
						"thai": "...นี่คือกฎเก่าแก่ มันเขียนไว้ว่า 'ความสุภาพคือพลัง'",
						"hindi": "...यह एक पुराना नियम है। इसमें लिखा है, 'विनम्रता ही शक्ति है'।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스가 받으려던 '위험한 정보'는 대체 뭐였을까.",
						"english": "What exactly was the 'dangerous information' Dux was about to receive?",
						"japanese": "「ダックスが受け取ろうとしていた『危険な情報』とは、一体何だったんだ？」",
						"chinese": "「达克斯即将收到的‘危险情报’到底是什么？」",
						"french": "Qu'était donc cette 'information dangereuse' que Dux était sur le point de recevoir ?",
						"spanish": "¿Qué era exactamente la 'información peligrosa' que Dux iba a recibir?",
						"vietnamese": "Thông tin 'nguy hiểm' mà Dux sắp nhận rốt cuộc là gì?",
						"thai": "ข้อมูล 'อันตราย' ที่ดักซ์กำลังจะได้รับคืออะไรกันแน่?",
						"hindi": "डक्स को मिलने वाली 'खतरनाक जानकारी' आखिर क्या थी?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지오르노가 가로쳉 거야. 그들이 원하는 건, 아무도 진실을 알지 못하게 하는 것.",
						"english": "Giorno intercepted it. What they want is to keep anyone from knowing the truth.",
						"japanese": "「ジョルノが横取りしたんだ。彼らが望むのは、誰も真実を知らないことだ。」",
						"chinese": "「乔尔诺截获了。他们想要的是，不让任何人知道真相。」",
						"french": "Giorno l'a intercepté. Ce qu'ils veulent, c'est que personne ne connaisse la vérité.",
						"spanish": "Giorno lo interceptó. Lo que quieren es que nadie sepa la verdad.",
						"vietnamese": "Giorno đã chặn nó. Điều họ muốn là không ai biết sự thật.",
						"thai": "จอร์โนสกัดกั้นมันได้ สิ่งที่พวกเขาต้องการคือไม่ให้ใครรู้ความจริง",
						"hindi": "जियोर्नो ने उसे रोक लिया। वे चाहते हैं कि कोई सच न जाने।"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린, 당신… 뭔가 숨기고 있어?",
						"english": "Lynn, are you... hiding something?",
						"japanese": "「リン、お前…何か隠しているのか？」",
						"chinese": "「琳，你……隐瞒了什么？」",
						"french": "Lynn, tu... caches quelque chose ?",
						"spanish": "Lynn, ¿tú... estás ocultando algo?",
						"vietnamese": "Lynn, cậu... đang giấu điều gì ư?",
						"thai": "ลินน์ คุณ...ซ่อนอะไรบางอย่างอยู่เหรอ?",
						"hindi": "लिन, तुम... कुछ छिपा रही हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…무슨 말이야.",
						"english": "...What do you mean?",
						"japanese": "「…何を言ってるんだ。」",
						"chinese": "「……什么意思？」",
						"french": "...Que veux-tu dire ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "...Ý cậu là gì?",
						"thai": "...หมายความว่าไง?",
						"hindi": "...क्या मतलब है?"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "닥스의 정보가 가로채진 현장. 그곳에 중간보스가 기다리고 있었다.",
						"english": "The scene where Dux's information was intercepted. A mid-boss was waiting there.",
						"japanese": "「ダックスの情報が横取りされた現場。そこには中間ボスが待ち構えていた。」",
						"chinese": "「达克斯的情报被截获的现场。那里有中级头目在等着。」",
						"french": "La scène où l'information de Dux a été interceptée. Un boss intermédiaire y attendait.",
						"spanish": "La escena donde la información de Dux fue interceptada. Un jefe intermedio estaba esperando allí.",
						"vietnamese": "Hiện trường thông tin của Dux bị chặn. Một trùm phụ đang chờ ở đó.",
						"thai": "สถานที่ที่ข้อมูลของดักซ์ถูกสกัดกั้น มีบอสกลางรออยู่ที่นั่น",
						"hindi": "वह जगह जहाँ डक्स की जानकारी रोक ली गई थी। वहाँ एक मिड-बॉस इंतज़ार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥스가 뭘 알고 있었든… 이대로 끝이야.",
						"english": "Whatever Dux knew... this is the end of it.",
						"japanese": "「ダックスが何を知っていたとしても…これで終わりだ。」",
						"chinese": "「无论达克斯知道什么……到此为止了。」",
						"french": "Quoi que Dux sache... c'est la fin.",
						"spanish": "Lo que sea que Dux supiera... esto se acabó.",
						"vietnamese": "Dù Dux biết gì đi nữa... mọi thứ kết thúc ở đây.",
						"thai": "ไม่ว่าดักซ์จะรู้อะไร...นี่คือจุดจบ",
						"hindi": "डक्स जो भी जानता था... यहीं खत्म होता है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "지오르노의 개들은 항상 방해만 하는군.",
						"english": "Giorno's dogs are always getting in the way.",
						"japanese": "「ジョルノの手下どもはいつも邪魔ばかりする。」",
						"chinese": "「乔尔诺的走狗总是碍手碍脚的。」",
						"french": "Les chiens de Giorno ne font que gêner.",
						"spanish": "Los perros de Giorno siempre estorban.",
						"vietnamese": "Lũ chó của Giorno lúc nào cũng gây phiền phức.",
						"thai": "หมาของจอร์โนคอยแต่จะขัดขวางตลอด",
						"hindi": "जियोर्नो के कुत्ते हमेशा रास्ते में आते हैं।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…젠장. {random_boss}님에게 보고해야… 할텐데….",
						"english": "...Damn it. I need to report to {random_boss}...",
						"japanese": "「…ちくしょう。{random_boss}様に報告しなければ…ならないのに…。」",
						"chinese": "「……该死。必须向{random_boss}大人报告……才行……。」",
						"french": "...Bon sang. Je dois faire un rapport à {random_boss}...",
						"spanish": "...Maldita sea. Debo informar a {random_boss}...",
						"vietnamese": "...Chết tiệt. Phải báo cáo cho {random_boss}...",
						"thai": "...ให้ตายสิ ต้องรายงานท่าน {random_boss}...",
						"hindi": "...धत्। मुझे {random_boss} को रिपोर्ट करना होगा..."
					}
				},
				{
					"content": {
						"korean": "보고? 누가?",
						"english": "Report? Who?",
						"japanese": "「報告？誰に？」",
						"chinese": "「报告？谁？」",
						"french": "Rapporter ? Qui ?",
						"spanish": "¿Informar? ¿Quién?",
						"vietnamese": "Báo cáo? Ai?",
						"thai": "รายงาน? ใคร?",
						"hindi": "रिपोर्ट? कौन?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "아무것도 아닐 거야. 어서 다음 단서를 찾아야 해.",
						"english": "It's nothing. We need to find the next clue quickly.",
						"japanese": "何でもない。早く次の手がかりを見つけないと。",
						"chinese": "没什么。我们得赶紧找到下一个线索。",
						"french": "Ce n'est rien. Nous devons trouver le prochain indice rapidement.",
						"spanish": "No es nada. Debemos encontrar la siguiente pista rápidamente.",
						"vietnamese": "Chắc không có gì đâu. Chúng ta phải nhanh chóng tìm manh mối tiếp theo.",
						"thai": "ไม่มีอะไรหรอก เราต้องหาร่องรอยต่อไปให้เร็วที่สุด",
						"hindi": "कुछ भी नहीं होगा। हमें जल्दी से अगला सुराग ढूंढना होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "린의 행동에서 깊은 위화감이 느껴졌다. 그러나 진실은 더 깊은 곳에 있었다.",
						"english": "A deep sense of unease emanated from Lynn's actions. But the truth lay deeper.",
						"japanese": "リンの行動に深い違和感があった。しかし、真実はもっと深いところに隠されていた。",
						"chinese": "琳的行为让人感到深深的不安。然而，真相隐藏得更深。",
						"french": "Un profond malaise émanait des actions de Lynn. Mais la vérité était plus profonde.",
						"spanish": "Las acciones de Lynn causaban una profunda inquietud. Pero la verdad yacía más profunda.",
						"vietnamese": "Hành động của Lynn gây ra một cảm giác bất an sâu sắc. Nhưng sự thật nằm sâu hơn.",
						"thai": "การกระทำของลินน์ทำให้รู้สึกไม่สบายใจอย่างมาก แต่ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "लिन के व्यवहार में गहरी बेचैनी महसूस हुई। लेकिन सच्चाई और भी गहरी थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "닥스의 운명처럼, 너희도 끝이다!",
						"english": "Like Dax's fate, you too are finished!",
						"japanese": "ダックスの運命のように、お前たちも終わりだ！",
						"chinese": "就像达克斯的命运一样，你们也完了！",
						"french": "Comme le destin de Dax, votre fin est proche !",
						"spanish": "¡Como el destino de Dax, ustedes también han terminado!",
						"vietnamese": "Giống như số phận của Dax, các ngươi cũng sẽ kết thúc!",
						"thai": "เหมือนชะตากรรมของแด็กซ์ พวกแกก็จบสิ้นเหมือนกัน!",
						"hindi": "डैक्स के भाग्य की तरह, तुम्हारा भी अंत है!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わってない。",
						"chinese": "……还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa, kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지오르노의 미소. 그것은 독이었다.",
			"새로운 사업 확장에 반대하던 사업가, 닥스.",
			"배송 드론이 그의 회사를 덮쳤고, 모든 것이 파괴됐다.",
			"그리고, 린의 눈빛에서 미묘한 위화감이 감돌기 시작했다."
		],
		"english": [
			"Giorno's smile. It was poison.",
			"Daxs, the entrepreneur who opposed new business expansion.",
			"Delivery drones attacked his company, destroying everything.",
			"And then, a subtle sense of unease began to emanate from Lynn's eyes."
		],
		"japanese": [
			"ジョルノの微笑み。それは毒だった。",
			"新規事業拡大に反対していた実業家、ダックス。",
			"配達ドローンが彼の会社を襲撃し、すべてが破壊された。",
			"そして、リンの瞳から微かな違和感が漂い始めた。"
		],
		"chinese": [
			"乔尔诺的微笑。那是毒药。",
			"反对新业务扩张的企业家，达克斯。",
			"送货无人机袭击了他的公司，一切都被摧毁了。",
			"然后，琳的眼神中开始弥漫着一种微妙的不安感。"
		],
		"french": [
			"Le sourire de Giorno. C'était du poison.",
			"Daxs, l'entrepreneur qui s'opposait à la nouvelle expansion des affaires.",
			"Des drones de livraison ont attaqué son entreprise, détruisant tout.",
			"Et puis, une subtile gêne commença à émaner des yeux de Lynn."
		],
		"spanish": [
			"La sonrisa de Giorno. Era veneno.",
			"Daxs, el empresario que se opuso a la nueva expansión de negocios.",
			"Drones de reparto atacaron su empresa, destruyendo todo.",
			"Y entonces, una sutil sensación de malestar comenzó a emanar de los ojos de Lynn."
		],
		"vietnamese": [
			"Nụ cười của Giorno. Đó là thuốc độc.",
			"Daxs, doanh nhân phản đối việc mở rộng kinh doanh mới.",
			"Máy bay không người lái giao hàng đã tấn công công ty của anh ta, mọi thứ đều bị phá hủy.",
			"Và rồi, một cảm giác bất an tinh tế bắt đầu toát ra từ đôi mắt của Lynn."
		],
		"thai": [
			"รอยยิ้มของจิออร์โน่ มันคือยาพิษ",
			"แด็กซ์ นักธุรกิจผู้คัดค้านการขยายธุรกิจใหม่",
			"โดรนส่งของโจมตีบริษัทของเขา และทุกอย่างก็ถูกทำลาย",
			"และแล้ว ความรู้สึกแปลกๆ ก็เริ่มแผ่ออกมาจากดวงตาของลินน์"
		],
		"hindi": [
			"जियोर्नो की मुस्कान। वह ज़हर थी।",
			"डैक्स, वह उद्यमी जिसने नए व्यापार विस्तार का विरोध किया।",
			"डिलीवरी ड्रोन ने उसकी कंपनी पर हमला किया और सब कुछ नष्ट हो गया।",
			"और फिर, लिन की आँखों से एक सूक्ष्म बेचैनी फैलने लगी।"
		]
	}
} as const;
