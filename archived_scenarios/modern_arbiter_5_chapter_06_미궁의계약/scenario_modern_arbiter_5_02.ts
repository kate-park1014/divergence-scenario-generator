export const scenario_modern_arbiter_5_02 = {
	"scenario_id": "modern_arbiter_5_02",
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
					"type": "speech",
					"content": {
						"korean": "어둠 속 정보가 모이는 뒷골목. 린의 작업실은 조용했다.",
						"english": "A back alley where information gathers in the dark. Lin's workshop was quiet.",
						"japanese": "闇の中で情報が集まる裏路地。リンの作業室は静かだった。",
						"chinese": "在黑暗中情报汇集的后巷。琳的工作室一片寂静。",
						"french": "Une ruelle sombre où les informations s'accumulent. L'atelier de Lin était silencieux.",
						"spanish": "Un callejón trasero donde la información se reúne en la oscuridad. El taller de Lin estaba en silencio.",
						"vietnamese": "Một con hẻm tối nơi thông tin tập trung. Xưởng của Lin yên tĩnh.",
						"thai": "ซอยหลังที่ข้อมูลรวมตัวกันในความมืด ห้องทำงานของลินเงียบสงบ.",
						"hindi": "एक अंधेरी गली जहाँ अंधेरे में जानकारी इकट्ठी होती है। लिन की कार्यशाला शांत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카이에게 소개받았어. 사라진 계약 건으로.",
						"english": "Kai introduced me. About the vanished contracts.",
						"japanese": "カイに紹介された。消えた契約の件で。",
						"chinese": "凯介绍我来的。为了消失的契约。",
						"french": "Kai m'a présenté. À propos des contrats disparus.",
						"spanish": "Kai me presentó. Por el tema de los contratos desaparecidos.",
						"vietnamese": "Tôi được Kai giới thiệu. Về vụ hợp đồng biến mất.",
						"thai": "ไคแนะนำฉันมา เรื่องสัญญาที่หายไป.",
						"hindi": "काई ने मेरा परिचय कराया। गुम हुए अनुबंधों के सिलसिले में।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "들어와. 이미 얘기 들었어.",
						"english": "Come in. I've already heard.",
						"japanese": "入って。話はもう聞いてる。",
						"chinese": "进来吧。我已经听说了。",
						"french": "Entre. J'ai déjà été mise au courant.",
						"spanish": "Entra. Ya me he enterado.",
						"vietnamese": "Vào đi. Tôi đã nghe nói rồi.",
						"thai": "เข้ามาสิ ฉันได้ยินเรื่องแล้ว.",
						"hindi": "अंदर आ जाओ। मैंने पहले ही सुन लिया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "데이터는 거짓말을 안 해. 하지만… 조작될 수는 있지.",
						"english": "Data doesn't lie. But... it can be manipulated.",
						"japanese": "データは嘘をつかない。だが…操作されることはある。",
						"chinese": "数据不会说谎。但是……它可能会被操纵。",
						"french": "Les données ne mentent pas. Mais... elles peuvent être manipulées.",
						"spanish": "Los datos no mienten. Pero... pueden ser manipulados.",
						"vietnamese": "Dữ liệu không nói dối. Nhưng... nó có thể bị thao túng.",
						"thai": "ข้อมูลไม่โกหก แต่... มันถูกบิดเบือนได้.",
						"hindi": "डेटा झूठ नहीं बोलता। लेकिन… उसे हेरफेर किया जा सकता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조작?",
						"english": "Manipulation?",
						"japanese": "操作？",
						"chinese": "操纵？",
						"french": "Manipulation ?",
						"spanish": "¿Manipulación?",
						"vietnamese": "Thao túng?",
						"thai": "บิดเบือน?",
						"hindi": "हेरफेर?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "찾았어. 사라진 계약들… 단순한 오류가 아니야.",
						"english": "I found them. The vanished contracts... it's not a simple error.",
						"japanese": "見つけたわ。消えた契約…単純なエラーじゃない。",
						"chinese": "找到了。消失的契约……这不是一个简单的错误。",
						"french": "Je les ai trouvés. Les contrats disparus... ce n'est pas une simple erreur.",
						"spanish": "Los encontré. Los contratos desaparecidos... no es un simple error.",
						"vietnamese": "Tôi tìm thấy chúng rồi. Các hợp đồng biến mất... đó không phải là một lỗi đơn giản.",
						"thai": "ฉันเจอแล้ว. สัญญาที่หายไป... มันไม่ใช่ความผิดพลาดง่ายๆ.",
						"hindi": "मुझे वे मिल गए। गायब हुए अनुबंध… यह कोई सामान्य त्रुटि नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐가 보여?",
						"english": "What do you see?",
						"japanese": "何が見える？",
						"chinese": "看到什么了？",
						"french": "Que vois-tu ?",
						"spanish": "¿Qué ves?",
						"vietnamese": "Thấy gì không?",
						"thai": "เห็นอะไรบ้าง?",
						"hindi": "क्या दिख रहा है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "'원칙적 오류'. 시스템의 근간을 흔드는 조작의 흔적이야.",
						"english": "\"Fundamental error.\" Traces of manipulation shaking the system's foundation.",
						"japanese": "「原理的エラー」。システムの根幹を揺るがす操作の痕跡だ。",
						"chinese": "“原则性错误”。有篡改痕迹，动摇了系统根基。",
						"french": "« Erreur fondamentale. » Des traces de manipulation qui ébranlent les fondations du système.",
						"spanish": "«Error fundamental». Huellas de manipulación que sacuden los cimientos del sistema.",
						"vietnamese": "«Lỗi nguyên tắc.» Dấu vết thao túng làm lung lay nền tảng của hệ thống.",
						"thai": "“ข้อผิดพลาดหลักการ” ร่องรอยการบิดเบือนที่สั่นคลอนรากฐานของระบบ",
						"hindi": "“मौलिक त्रुटि”। छेड़छाड़ के निशान जो सिस्टम की नींव हिला रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "누군가 고의적으로 데이터를 왜곡했어.",
						"english": "Someone deliberately distorted the data.",
						"japanese": "誰かが意図的にデータを歪めた。",
						"chinese": "有人故意篡改了数据。",
						"french": "Quelqu'un a délibérément altéré les données.",
						"spanish": "Alguien distorsionó los datos intencionadamente.",
						"vietnamese": "Ai đó đã cố ý bóp méo dữ liệu.",
						"thai": "มีคนบิดเบือนข้อมูลโดยเจตนา",
						"hindi": "किसी ने जानबूझकर डेटा को विकृत किया है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가, 왜?",
						"english": "Who, and why?",
						"japanese": "誰が、なぜ？",
						"chinese": "谁，为什么？",
						"french": "Qui, et pourquoi ?",
						"spanish": "¿Quién, y por qué?",
						"vietnamese": "Ai, và tại sao?",
						"thai": "ใคร, ทำไม?",
						"hindi": "कौन, और क्यों?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "계약의 연결 고리가 너무 복잡해. 마치 거미줄 같아.",
						"english": "The contract's connections are too complex. Like a spiderweb.",
						"japanese": "契約の繋がりが複雑すぎる。まるで蜘蛛の巣だ。",
						"chinese": "合同的连接太复杂了，像一张蜘蛛网。",
						"french": "Les liens du contrat sont trop complexes. C'est comme une toile d'araignée.",
						"spanish": "Los vínculos del contrato son demasiado complejos. Como una telaraña.",
						"vietnamese": "Các mối liên kết của hợp đồng quá phức tạp. Như một mạng nhện vậy.",
						"thai": "การเชื่อมโยงของสัญญามันซับซ้อนเกินไป เหมือนใยแมงมุมเลย",
						"hindi": "अनुबंध के संबंध बहुत जटिल हैं। एक मकड़ी के जाले की तरह।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭘 숨기려는 거지?",
						"english": "What are they trying to hide?",
						"japanese": "何を隠そうとしている？",
						"chinese": "想隐藏什么？",
						"french": "Que cherchent-ils à cacher ?",
						"spanish": "¿Qué intentan esconder?",
						"vietnamese": "Họ đang cố giấu điều gì?",
						"thai": "กำลังซ่อนอะไร?",
						"hindi": "वे क्या छिपाने की कोशिश कर रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "그리고… 이상한 노이즈가 계속 감지돼. 시스템 전체가 불안정해.",
						"english": "And... strange noise keeps being detected. The whole system is unstable.",
						"japanese": "そして…奇妙なノイズが検知され続けている。システム全体が不安定だ。",
						"chinese": "而且……一直检测到奇怪的噪音。整个系统都不稳定。",
						"french": "Et... des bruits étranges sont constamment détectés. Tout le système est instable.",
						"spanish": "Y... se sigue detectando un ruido extraño. Todo el sistema está inestable.",
						"vietnamese": "Và... vẫn liên tục phát hiện nhiễu lạ. Toàn bộ hệ thống đang không ổn định.",
						"thai": "และ…ยังคงตรวจพบสัญญาณรบกวนแปลกๆ ระบบทั้งหมดไม่เสถียร",
						"hindi": "और... अजीब शोर लगातार पता चल रहा है। पूरा सिस्टम अस्थिर है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "내 기기도 요즘 이상했어. 순간 멈추거나….",
						"english": "My device has been acting strange lately too. Stopping momentarily or....",
						"japanese": "私のデバイスも最近おかしい。一瞬止まったり…。",
						"chinese": "我的设备最近也怪怪的。有时会突然停顿……。",
						"french": "Mon appareil aussi a été étrange ces derniers temps. S'arrêtant un instant ou...",
						"spanish": "Mi dispositivo también ha estado raro últimamente. Se detiene un momento o...",
						"vietnamese": "Thiết bị của tôi dạo này cũng lạ. Thỉnh thoảng dừng đột ngột hoặc...",
						"thai": "อุปกรณ์ของฉันก็ผิดปกติช่วงนี้ บางทีก็หยุดชะงักไปเลย",
						"hindi": "मेरा उपकरण भी आजकल अजीब था। अचानक रुक जाता था या..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "사라진 데이터 속에서 '구원'이란 키워드가 발견돼. 알 수 없는 코드 조각들이야.",
						"english": "The keyword 'Salvation' was found in the vanished data. Unknown code fragments.",
						"japanese": "消えたデータの中から「救済」というキーワードが見つかった。未知のコードの断片だ。",
						"chinese": "在消失的数据中发现了“救赎”这个关键词。是些不明代码片段。",
						"french": "Le mot-clé « Salvation » a été trouvé dans les données disparues. Des fragments de code inconnus.",
						"spanish": "La palabra clave «Salvación» fue encontrada en los datos desaparecidos. Fragmentos de código desconocidos.",
						"vietnamese": "Trong dữ liệu đã biến mất, từ khóa «Cứu rỗi» được tìm thấy. Đó là những mảnh mã không xác định.",
						"thai": "ในข้อมูลที่หายไป พบคำว่า 'การไถ่ถอน' เป็นชิ้นส่วนโค้ดที่ไม่รู้จัก",
						"hindi": "गुम हुए डेटा में 'मोक्ष' (Salvation) यह कीवर्ड मिला। अज्ञात कोड के टुकड़े हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "구원? 계약과 무슨 상관이지?",
						"english": "Salvation? What does that have to do with the contract?",
						"japanese": "救済？契約と何の関係が？",
						"chinese": "救赎？和合同有什么关系？",
						"french": "La salvation ? Quel rapport avec le contrat ?",
						"spanish": "¿Salvación? ¿Qué tiene que ver eso con el contrato?",
						"vietnamese": "Cứu rỗi? Liên quan gì đến hợp đồng?",
						"thai": "การไถ่ถอน? เกี่ยวอะไรกับสัญญา?",
						"hindi": "मोक्ष? इसका अनुबंध से क्या लेना-देना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 데이터 조작은 단순한 중개인이 할 수 있는 일이 아니야.",
						"english": "This data manipulation isn't something a mere broker can do.",
						"japanese": "このデータ操作は、ただの仲介人にできることじゃない。",
						"chinese": "这种数据操纵绝非一个普通中间人能做到。",
						"french": "Cette manipulation de données n'est pas l'œuvre d'un simple courtier.",
						"spanish": "Esta manipulación de datos no es algo que un simple intermediario pueda hacer.",
						"vietnamese": "Thao túng dữ liệu này không phải việc một môi giới đơn thuần có thể làm được.",
						"thai": "การจัดการข้อมูลนี้ไม่ใช่สิ่งที่โบรกเกอร์ธรรมดาจะทำได้",
						"hindi": "यह डेटा हेरफेर कोई मामूली ब्रोकर नहीं कर सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 아비터는… 단순한 브로커가 아니라는 거야?",
						"english": "So the Arbiter... isn't just a simple broker?",
						"japanese": "じゃあ、アービターは…ただのブローカーじゃないってこと？",
						"chinese": "那么仲裁者… 不只是个简单的中间人？",
						"french": "Alors l'Arbitre... n'est pas qu'un simple courtier ?",
						"spanish": "¿Así que el Árbitro... no es solo un simple intermediario?",
						"vietnamese": "Vậy Trọng Tài… không chỉ là một môi giới đơn thuần?",
						"thai": "แสดงว่า Arbiter… ไม่ใช่แค่โบรกเกอร์ธรรมดาเหรอ?",
						"hindi": "तो आर्बिटर... सिर्फ एक साधारण ब्रोकर नहीं है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 이상이야. 훨씬 더 깊이 연관되어 있어.",
						"english": "More than that. Far more deeply involved.",
						"japanese": "それ以上だ。はるかに深く関わっている。",
						"chinese": "远不止如此。他牵扯得更深。",
						"french": "Bien plus que ça. Il est impliqué bien plus profondément.",
						"spanish": "Más que eso. Está mucho más profundamente involucrado.",
						"vietnamese": "Hơn thế nữa. Có liên quan sâu xa hơn nhiều.",
						"thai": "มากกว่านั้น เขามีส่วนเกี่ยวข้องลึกซึ้งกว่ามาก",
						"hindi": "उससे भी ज़्यादा। वह बहुत गहराई से जुड़ा हुआ है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장….",
						"english": "Damn it...",
						"japanese": "くそっ…",
						"chinese": "该死…",
						"french": "Merde…",
						"spanish": "Maldita sea…",
						"vietnamese": "Chết tiệt…",
						"thai": "ให้ตายสิ…",
						"hindi": "धत् तेरे की..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "위험해질 거야. 이제 되돌릴 수 없어.",
						"english": "It'll get dangerous. There's no turning back now.",
						"japanese": "危険になるぞ。もう引き返せない。",
						"chinese": "会变得危险。现在已经无法回头了。",
						"french": "Ça va devenir dangereux. On ne peut plus reculer maintenant.",
						"spanish": "Se pondrá peligroso. Ya no hay vuelta atrás.",
						"vietnamese": "Sẽ nguy hiểm đấy. Giờ không thể quay đầu được nữa.",
						"thai": "มันจะอันตราย ไม่มีทางย้อนกลับได้แล้ว",
						"hindi": "यह ख़तरनाक हो जाएगा। अब पीछे नहीं हट सकते।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알고 있어. 멈출 수 없어.",
						"english": "I know. I can't stop.",
						"japanese": "分かってる。止められない。",
						"chinese": "我知道。我不能停下。",
						"french": "Je sais. Je ne peux pas m'arrêter.",
						"spanish": "Lo sé. No puedo detenerme.",
						"vietnamese": "Tôi biết. Không thể dừng lại.",
						"thai": "ฉันรู้ ฉันหยุดไม่ได้",
						"hindi": "मैं जानता हूँ। मैं रुक नहीं सकता।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 기록이 이끄는 곳. 정체 모를 그림자가 기다리고 있었다.",
						"english": "Where the last record led. An unknown shadow waited.",
						"japanese": "最後の記録が導く場所。正体不明の影が待ち構えていた。",
						"chinese": "最后的记录所指之处。一个不明身份的影子正在等待。",
						"french": "Là où le dernier enregistrement menait. Une ombre inconnue attendait.",
						"spanish": "Donde el último registro llevó. Una sombra desconocida esperaba.",
						"vietnamese": "Nơi ghi chép cuối cùng dẫn đến. Một cái bóng bí ẩn đang chờ đợi.",
						"thai": "ที่ที่บันทึกสุดท้ายนำไป เงาลึกลับกำลังรออยู่",
						"hindi": "जहाँ अंतिम रिकॉर्ड ले गया। एक अज्ञात साया इंतज़ार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실? 그걸 알아서 뭘 할 텐가?",
						"english": "The truth? What will you do with it?",
						"japanese": "真実？それを知ってどうするつもりだ？",
						"chinese": "真相？你知道了又能怎样？",
						"french": "La vérité ? Qu'en ferez-vous ?",
						"spanish": "¿La verdad? ¿Qué harás con ella?",
						"vietnamese": "Sự thật? Ngươi định làm gì với nó?",
						"thai": "ความจริงเหรอ? แล้วเจ้าจะทำอะไรกับมัน?",
						"hindi": "सच्चाई? तुम उसका क्या करोगे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "{random_boss}! 네가 뭘 숨기는 거지?",
						"english": "{random_boss}! What are you hiding?",
						"japanese": "｛random_boss｝！何を隠しているんだ？",
						"chinese": "{random_boss}！你到底在隐藏什么？",
						"french": "{random_boss} ! Qu'est-ce que vous cachez ?",
						"spanish": "¡{random_boss}! ¿Qué estás ocultando?",
						"vietnamese": "{random_boss}! Ngươi đang che giấu điều gì?",
						"thai": "{random_boss}! เจ้ากำลังซ่อนอะไรอยู่?",
						"hindi": "{random_boss}! तुम क्या छुपा रहे हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내가 지키는 건, 너희가 감당 못 할 진실이다.",
						"english": "What I protect is a truth you cannot handle.",
						"japanese": "私が守っているのは、お前たちには耐えられない真実だ。",
						"chinese": "我所守护的，是你们无法承受的真相。",
						"french": "Ce que je protège est une vérité que vous ne pouvez supporter.",
						"spanish": "Lo que protejo es una verdad que no podéis soportar.",
						"vietnamese": "Điều ta bảo vệ là sự thật mà các ngươi không thể chịu đựng được.",
						"thai": "สิ่งที่ฉันปกป้องคือความจริงที่พวกเธอรับมือไม่ได้",
						"hindi": "जो मैं बचा रहा हूँ, वह एक ऐसी सच्चाई है जिसे तुम संभाल नहीं सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 비켜!",
						"english": "Shut up! Move!",
						"japanese": "黙れ！そこをどけ！",
						"chinese": "闭嘴！让开！",
						"french": "Tais-toi ! Écarte-toi !",
						"spanish": "¡Cállate! ¡Quítate de en medio!",
						"vietnamese": "Im đi! Tránh ra!",
						"thai": "หุบปาก! หลีกไป!",
						"hindi": "चुप रहो! हट जाओ!"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "알 수 없는 힘에 짓눌렸다. 진실은 아직 멀었다.",
						"english": "Crushed by an unknown force. The truth is still far off.",
						"japanese": "未知の力に押し潰された。真実はまだ遠い。",
						"chinese": "被未知力量压制。真相仍遥远。",
						"french": "Écrasé par une force inconnue. La vérité est encore lointaine.",
						"spanish": "Aplazado por una fuerza desconocida. La verdad aún está lejos.",
						"vietnamese": "Bị đè bẹp bởi một sức mạnh không rõ. Sự thật vẫn còn xa vời.",
						"thai": "ถูกบดขยี้ด้วยพลังที่ไม่รู้จัก ความจริงยังอีกยาวไกล",
						"hindi": "अज्ञात शक्ति द्वारा कुचला गया। सत्य अभी बहुत दूर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 데이터는… 너희를 기억하지 않을 거다.",
						"english": "Futile resistance... Data... will not remember you.",
						"japanese": "取るに足らない抵抗… データは… お前たちを記憶しないだろう。",
						"chinese": "无谓的抵抗… 数据… 不会记住你们。",
						"french": "Résistance futile… Les données… ne se souviendront pas de vous.",
						"spanish": "Resistencia inútil... Los datos... no os recordarán.",
						"vietnamese": "Sự kháng cự vô ích… Dữ liệu… sẽ không nhớ các ngươi đâu.",
						"thai": "การต่อต้านที่ไร้ค่า... ข้อมูล... จะไม่จดจำพวกเจ้า",
						"hindi": "तुच्छ प्रतिरोध… डेटा… तुम्हें याद नहीं रखेगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยังไม่... จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "이게 끝이 아닐 거다… 계약은… 사라지지 않아…",
						"english": "This isn't over... The contract... it won't vanish...",
						"japanese": "これが終わりではない… 契約は… 消えない…",
						"chinese": "这还没完… 契约… 不会消失…",
						"french": "Ce n'est pas la fin… Le contrat… ne disparaîtra pas…",
						"spanish": "Esto no ha terminado... El contrato... no desaparecerá...",
						"vietnamese": "Đây chưa phải là kết thúc… Khế ước… sẽ không biến mất…",
						"thai": "นี่ไม่ใช่จุดจบ... สัญญา... จะไม่หายไป...",
						"hindi": "यह अंत नहीं है... अनुबंध... गायब नहीं होगा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약이… 사라지지 않는다고?",
						"english": "The contract... won't vanish?",
						"japanese": "契約が… 消えないだと？",
						"chinese": "契约… 不会消失？",
						"french": "Le contrat… ne disparaîtra pas ?",
						"spanish": "¿El contrato... no desaparecerá?",
						"vietnamese": "Khế ước… sẽ không biến mất ư?",
						"thai": "สัญญา... จะไม่หายไปเหรอ?",
						"hindi": "अनुबंध… गायब नहीं होगा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 그의 마지막 말은 더 큰 미스터리를 남겼다.",
						"english": "{random_boss} falls. But his last words left an even greater mystery.",
						"japanese": "倒れた{random_boss}。しかし、彼の最期の言葉は、さらに大きな謎を残した。",
						"chinese": "倒下的{random_boss}。然而他的遗言却留下了更大的谜团。",
						"french": "{random_boss} tombe. Mais ses derniers mots laissèrent un mystère encore plus grand.",
						"spanish": "{random_boss} cae. Pero sus últimas palabras dejaron un misterio aún mayor.",
						"vietnamese": "{random_boss} gục ngã. Nhưng những lời cuối cùng của hắn để lại một bí ẩn lớn hơn.",
						"thai": "{random_boss} ล้มลง แต่คำพูดสุดท้ายของเขาทิ้งปริศนาที่ยิ่งใหญ่กว่า",
						"hindi": "{random_boss} गिर गया। परन्तु उसके अंतिम शब्द एक और बड़ा रहस्य छोड़ गए।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜곡된 기록의 흔적은, 아비터의 그림자를 더욱 짙게 만들었다.",
						"english": "Traces of distorted records deepened the Arbiter's shadow.",
						"japanese": "歪められた記録の痕跡は、アービターの影をさらに濃くした。",
						"chinese": "扭曲记录的痕迹，让仲裁者的阴影更加浓重。",
						"french": "Les traces de registres distordus ont assombri l'ombre de l'Arbitre.",
						"spanish": "Las huellas de registros distorsionados intensificaron la sombra del Árbitro.",
						"vietnamese": "Dấu vết của những ghi chép méo mó đã làm bóng tối của Kẻ Phán Xét trở nên u ám hơn.",
						"thai": "ร่องรอยของบันทึกที่บิดเบือน ทำให้เงาของ Arbiter เข้มขึ้น",
						"hindi": "विकृत अभिलेखों के निशान ने आर्बिटर की छाया को और गहरा कर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"정보상 카이의 소개로 데이터 전문가 린을 만났다.",
			"사라진 계약의 흔적, 그 속에 감춰진 '원칙적 오류'.",
			"데이터의 심연에서, 왜곡된 진실이 모습을 드러낸다.",
			"아비터의 거대한 그림자가 드리워진 도시, 그 실체를 쫓는다."
		],
		"english": [
			"Met data expert Lin, introduced by info broker Kai.",
			"Traces of vanished contracts, and a 'fundamental error' hidden within.",
			"From the abyss of data, distorted truths emerge.",
			"In the city overshadowed by the Arbiter, we chase its true form."
		],
		"japanese": [
			"情報屋カイの紹介で、データ専門家リンと会った。",
			"消えた契約の痕跡、その中に隠された「原則的エラー」。",
			"データの深淵から、歪められた真実が姿を現す。",
			"アービターの巨大な影が差す都市、その実体を追う。"
		],
		"chinese": [
			"在情报贩子凯的介绍下，见到了数据专家琳。",
			"消失的契约痕迹，其中隐藏着“原则性错误”。",
			"在数据的深渊中，扭曲的真相浮出水面。",
			"在仲裁者巨大阴影笼罩的城市里，追寻其真实面目。"
		],
		"french": [
			"J'ai rencontré Lin, experte en données, présentée par Kai, l'informateur.",
			"Les traces de contrats disparus, et une 'erreur fondamentale' cachée en leur sein.",
			"Des abysses de données, des vérités déformées font surface.",
			"Dans la ville dominée par l'ombre colossale de l'Arbitre, nous traquons sa véritable nature."
		],
		"spanish": [
			"Conocí a Lin, la experta en datos, presentada por el corredor de información Kai.",
			"Las huellas de contratos desaparecidos, y un 'error fundamental' oculto en ellos.",
			"Desde el abismo de los datos, verdades distorsionadas emergen.",
			"En la ciudad ensombrecida por la gigantesca sombra del Árbitro, perseguimos su verdadera esencia."
		],
		"vietnamese": [
			"Tôi đã gặp chuyên gia dữ liệu Lin, được giới thiệu bởi người môi giới thông tin Kai.",
			"Dấu vết của những hợp đồng biến mất, và một 'lỗi nguyên tắc' ẩn giấu bên trong.",
			"Từ vực sâu của dữ liệu, những sự thật méo mó dần hiện ra.",
			"Trong thành phố bị bao trùm bởi bóng đen khổng lồ của Kẻ Phán Xét, chúng ta truy đuổi bản chất thật của nó."
		],
		"thai": [
			"ฉันพบกับผู้เชี่ยวชาญด้านข้อมูลลิน โดยการแนะนำของไค นายหน้าข้อมูล.",
			"ร่องรอยของสัญญาที่หายไป และ 'ข้อผิดพลาดเชิงหลักการ' ที่ซ่อนอยู่ภายใน.",
			"จากห้วงลึกของข้อมูล ความจริงที่บิดเบือนปรากฏขึ้น.",
			"ในเมืองที่ถูกปกคลุมด้วยเงาขนาดมหึมาของ Arbiter เราไล่ล่าความจริงของมัน."
		],
		"hindi": [
			"मैं डेटा विशेषज्ञ लिन से मिला, जिसका परिचय सूचना दलाल काई ने कराया था।",
			"गायब हुए अनुबंधों के निशान, और उनमें छिपी एक 'मौलिक त्रुटि'।",
			"डेटा के अथाह सागर से, विकृत सत्य सामने आते हैं।",
			"आर्बिटर की विशाल छाया से घिरे शहर में, हम उसकी असली पहचान का पीछा करते हैं।"
		]
	}
} as const;
