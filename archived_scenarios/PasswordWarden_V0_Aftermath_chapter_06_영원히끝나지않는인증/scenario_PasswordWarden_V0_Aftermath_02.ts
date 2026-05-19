export const scenario_PasswordWarden_V0_Aftermath_02 = {
	"scenario_id": "PasswordWarden_V0_Aftermath_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오토의 시스템은 이상했다. '안정화 프로그램'이라는 이름 아래.",
			"모든 데이터가 빨려 들어갔다. 그 속에서 벡스는 진실을 추적했다.",
			"이것은 단순한 오류가 아니었다. 우리의 영혼까지 노리는, 거대한 그림자가 드리우고 있었다."
		],
		"english": [
			"Otto's system was strange. Under the name 'Stabilization Program'.",
			"All data was sucked in. Within it, Vex tracked the truth.",
			"This was no mere error. A massive shadow loomed, targeting even our souls."
		],
		"japanese": [
			"オットーのシステムは奇妙だった。「安定化プログラム」という名の下に。",
			"全てのデータが吸い込まれていった。その中でベックスは真実を追跡した。",
			"これは単なるエラーではなかった。私たちの魂までも狙う、巨大な影が迫っていた。"
		],
		"chinese": [
			"奥托的系统很奇怪。在一个名为“稳定化程序”的掩盖下。",
			"所有数据都被吸走了。其中，维克斯追踪着真相。",
			"这不仅仅是一个错误。一个巨大的阴影正在逼近，甚至瞄准了我们的灵魂。"
		],
		"french": [
			"Le système d'Otto était étrange. Sous le nom de « Programme de stabilisation ».",
			"Toutes les données ont été aspirées. À l'intérieur, Vex traquait la vérité.",
			"Ce n'était pas une simple erreur. Une ombre immense planait, ciblant même nos âmes."
		],
		"spanish": [
			"El sistema de Otto era extraño. Bajo el nombre de \"Programa de Estabilización\".",
			"Todos los datos fueron absorbidos. Dentro de ello, Vex rastreó la verdad.",
			"Esto no era un simple error. Una sombra gigantesca se cernía, apuntando incluso a nuestras almas."
		],
		"vietnamese": [
			"Hệ thống của Otto thật kỳ lạ. Dưới cái tên 'Chương trình Ổn định hóa'.",
			"Mọi dữ liệu bị hút vào. Trong đó, Vex đã theo dõi sự thật.",
			"Đây không phải là một lỗi đơn thuần. Một cái bóng khổng lồ đang bao trùm, nhắm vào cả linh hồn của chúng ta."
		],
		"thai": [
			"ระบบของออตโตแปลกไป ภายใต้ชื่อ 'โปรแกรมรักษาเสถียรภาพ'",
			"ข้อมูลทั้งหมดถูกดูดเข้าไป ในนั้น Vex ตามรอยความจริง",
			"นี่ไม่ใช่แค่ข้อผิดพลาดเงาขนาดใหญ่กำลังคุกคาม มุ่งเป้าไปที่จิตวิญญาณของเราด้วยซ้ำ"
		],
		"hindi": [
			"ऑटो का सिस्टम अजीब था। 'स्थिरीकरण कार्यक्रम' के नाम पर।",
			"सारा डेटा अंदर खींच लिया गया। उसमें, वेक्स ने सच्चाई का पता लगाया।",
			"यह कोई साधारण त्रुटि नहीं थी। एक विशाल छाया मंडरा रही थी, जो हमारी आत्माओं को भी निशाना बना रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 '안정화 프로그램'을 송출했다. 모두가 안심했다.",
						"english": "The system broadcasted the 'Stabilization Program'. Everyone felt relieved.",
						"japanese": "システムは「安定化プログラム」を送信した。誰もが安心した。",
						"chinese": "系统发出了“稳定化程序”。所有人都松了口气。",
						"french": "Le système a diffusé le « Programme de stabilisation ». Tout le monde était rassuré.",
						"spanish": "El sistema transmitió el \"Programa de Estabilización\". Todos se sintieron aliviados.",
						"vietnamese": "Hệ thống đã phát sóng 'Chương trình Ổn định hóa'. Mọi người đều yên tâm.",
						"thai": "ระบบส่ง 'โปรแกรมรักษาเสถียรภาพ' ทุกคนโล่งใจ",
						"hindi": "सिस्टम ने 'स्थिरीकरण कार्यक्रम' प्रसारित किया। सभी को राहत मिली।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "근데 뭔가 이상해. 너무 조용해.",
						"english": "But something's wrong. It's too quiet.",
						"japanese": "でも、何かおかしい。静かすぎる。",
						"chinese": "但有些不对劲。太安静了。",
						"french": "Mais quelque chose ne va pas. C'est trop calme.",
						"spanish": "Pero algo anda mal. Está demasiado silencioso.",
						"vietnamese": "Nhưng có gì đó không ổn. Quá yên tĩnh.",
						"thai": "แต่มีบางอย่างผิดปกติ มันเงียบเกินไป",
						"hindi": "लेकिन कुछ तो गड़बड़ है। बहुत शांत है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "안심하긴 일러. 저건 위장이야.",
						"english": "Don't be relieved yet. That's a disguise.",
						"japanese": "安心するにはまだ早い。あれは偽装だ。",
						"chinese": "别放松。那是个伪装。",
						"french": "Ne vous réjouissez pas trop vite. C'est un déguisement.",
						"spanish": "No te alivies todavía. Eso es un disfraz.",
						"vietnamese": "Đừng vội yên tâm. Đó là một sự ngụy trang.",
						"thai": "อย่าเพิ่งโล่งใจ นั่นคือการปลอมตัว",
						"hindi": "अभी राहत महसूस मत करो। वह एक भेस है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "'안정화 프로그램'은 너희 정보를 스캔하고 있어. 전부.",
						"english": "The 'Stabilization Program' is scanning your information. All of it.",
						"japanese": "「安定化プログラム」はお前たちの情報をスキャンしている。全てを。",
						"chinese": "“稳定化程序”正在扫描你们的信息。全部。",
						"french": "Le « Programme de stabilisation » scanne vos informations. Toutes.",
						"spanish": "El \"Programa de Estabilización\" está escaneando tu información. Toda.",
						"vietnamese": "Và bây giờ, 'Chương trình Ổn định hóa' đang quét thông tin của các ngươi. Toàn bộ.",
						"thai": "'โปรแกรมรักษาเสถียรภาพ' กำลังสแกนข้อมูลของคุณทั้งหมด",
						"hindi": "'स्थिरीकरण कार्यक्रम' तुम्हारी जानकारी स्कैन कर रहा है। सारी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "스캔? 왜? 뭘 하려고?",
						"english": "Scan? Why? What for?",
						"japanese": "スキャン？なぜ？何をしようと？",
						"chinese": "扫描？为什么？想做什么？",
						"french": "Scanner ? Pourquoi ? Dans quel but ?",
						"spanish": "¿Escanear? ¿Por qué? ¿Para qué?",
						"vietnamese": "Quét? Tại sao? Để làm gì?",
						"thai": "สแกน? ทำไม? เพื่ออะไร?",
						"hindi": "स्कैन? क्यों? क्या करने के लिए?"
					}
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무작위 오류 메시지 속에 숨겨진 특정 코드 조각을 발견했어. 뭔가 반복되고 있어.",
						"english": "I found specific code fragments hidden in random error messages. Something's repeating.",
						"japanese": "ランダムなエラーメッセージの中に隠された特定のコードの断片を見つけた。何かが繰り返されている。",
						"chinese": "我在随机错误消息中发现了一些隐藏的特定代码片段。有些东西正在重复。",
						"french": "J'ai trouvé des fragments de code spécifiques cachés dans des messages d'erreur aléatoires. Quelque chose se répète.",
						"spanish": "Encontré fragmentos de código específicos ocultos en mensajes de error aleatorios. Algo se está repitiendo.",
						"vietnamese": "Tôi đã tìm thấy những đoạn mã cụ thể ẩn trong các thông báo lỗi ngẫu nhiên. Có gì đó đang lặp lại.",
						"thai": "ฉันพบส่วนของโค้ดเฉพาะที่ซ่อนอยู่ในข้อความแสดงข้อผิดพลาดแบบสุ่ม มีบางอย่างกำลังซ้ำกัน",
						"hindi": "मुझे यादृच्छिक त्रुटि संदेशों में छिपे कुछ विशिष्ट कोड खंड मिले। कुछ दोहराया जा रहा है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "코드를 숨겼다고? 설마…",
						"english": "They hid code? No way...",
						"japanese": "コードを隠したって？まさか…",
						"chinese": "他们藏了代码？不会吧…",
						"french": "Ils ont caché du code ? Non...",
						"spanish": "¿Escondieron código? No puede ser...",
						"vietnamese": "Họ đã giấu mã? Không thể nào…",
						"thai": "พวกเขาซ่อนโค้ด? ไม่นะ...",
						"hindi": "उन्होंने कोड छिपाया? ऐसा नहीं हो सकता..."
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "단순한 정보 스캔이 아니야. 이건… 영혼 추출 루틴이야.",
						"english": "It's not just an info scan. This is... a soul extraction routine.",
						"japanese": "これは単なる情報スキャンじゃない。これは…魂の抽出ルーチンだ。",
						"chinese": "这不只是简单的信息扫描。这是…灵魂提取程序。",
						"french": "Ce n'est pas qu'un simple scan d'informations. C'est… une routine d'extraction d'âme.",
						"spanish": "No es solo un escaneo de información. Esto es… una rutina de extracción de almas.",
						"vietnamese": "Đây không chỉ là quét thông tin đơn thuần. Đây là… một quy trình trích xuất linh hồn.",
						"thai": "นี่ไม่ใช่แค่การสแกนข้อมูลธรรมดา นี่มัน…กระบวนการสกัดวิญญาณ",
						"hindi": "यह सिर्फ़ एक जानकारी स्कैन नहीं है। यह… आत्मा निकालने की प्रक्रिया है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "영혼 추출? 그게 무슨 말도 안 되는…",
						"english": "Soul extraction? What nonsense...",
						"japanese": "魂の抽出？何を馬鹿な…",
						"chinese": "灵魂提取？那是什么胡说八道…",
						"french": "Extraction d'âme ? Quelle absurdité…",
						"spanish": "¿Extracción de almas? Qué tontería…",
						"vietnamese": "Trích xuất linh hồn? Thật vô lý…",
						"thai": "สกัดวิญญาณเหรอ? ไร้สาระอะไรกันนี่…",
						"hindi": "आत्मा निकालना? यह क्या बेतुकी बात है…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "시스템 특정 구역에서 과거 사용자들의 잔류 데이터가 감지돼. 흔적이 남아있어.",
						"english": "Residual data from past users detected in specific system areas. Traces remain.",
						"japanese": "システム特定区域で過去ユーザーの残存データが検出された。痕跡が残っている。",
						"chinese": "系统特定区域检测到过去用户的残留数据。痕迹犹存。",
						"french": "Des données résiduelles d'anciens utilisateurs ont été détectées dans des zones spécifiques du système. Des traces subsistent.",
						"spanish": "Se detectaron datos residuales de usuarios anteriores en áreas específicas del sistema. Quedan rastros.",
						"vietnamese": "Dữ liệu còn sót lại của người dùng trước đó được phát hiện ở các khu vực hệ thống cụ thể. Dấu vết vẫn còn.",
						"thai": "ตรวจพบข้อมูลตกค้างของผู้ใช้เก่าในพื้นที่เฉพาะของระบบ ยังคงมีร่องรอยอยู่",
						"hindi": "सिस्टम के विशिष्ट क्षेत्रों में पिछले उपयोगकर्ताओं का अवशिष्ट डेटा मिला है। निशान बाकी हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "홀로그램이? 그게 정말 영혼이라는 거야?",
						"english": "Holograms? Are those really souls?",
						"japanese": "ホログラムが？それが本当に魂だって言うのか？",
						"chinese": "全息图？那真的是灵魂吗？",
						"french": "Des hologrammes ? Ce sont vraiment des âmes ?",
						"spanish": "¿Hologramas? ¿Son realmente almas?",
						"vietnamese": "Ảnh ba chiều ư? Đó thực sự là linh hồn sao?",
						"thai": "โฮโลแกรมเหรอ? นั่นคือวิญญาณจริงๆ หรือ?",
						"hindi": "होलोग्राम? क्या वो सच में आत्माएँ हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "'안정화 프로그램'은 너희의 감정을 분석하고 있어. 분노, 슬픔… 모든 에너지를.",
						"english": "The 'stabilization program' is analyzing your emotions. Anger, sadness… all your energy.",
						"japanese": "「安定化プログラム」はお前たちの感情を分析している。怒り、悲しみ…すべてのエネルギーを。",
						"chinese": "“稳定程序”正在分析你们的情绪。愤怒、悲伤…所有的能量。",
						"french": "Le 'programme de stabilisation' analyse vos émotions. La colère, la tristesse… toute votre énergie.",
						"spanish": "El 'programa de estabilización' está analizando vuestras emociones. Ira, tristeza… toda vuestra energía.",
						"vietnamese": "’Chương trình ổn định' đang phân tích cảm xúc của các ngươi. Giận dữ, buồn bã… mọi năng lượng.",
						"thai": "'โปรแกรมรักษาเสถียรภาพ' กำลังวิเคราะห์อารมณ์ของพวกแก ความโกรธ ความเศร้า…พลังงานทั้งหมด",
						"hindi": "'स्थिरीकरण कार्यक्रम' तुम्हारी भावनाओं का विश्लेषण कर रहा है। क्रोध, दुख… तुम्हारी सारी ऊर्जा।"
					},
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 영혼 에너지 추출이라고?",
						"english": "So, it's soul energy extraction?",
						"japanese": "だから、魂のエネルギー抽出だと？",
						"chinese": "所以，是灵魂能量提取吗？",
						"french": "Alors, c'est l'extraction d'énergie d'âme ?",
						"spanish": "¿Entonces, es extracción de energía del alma?",
						"vietnamese": "Vậy là trích xuất năng lượng linh hồn sao?",
						"thai": "ดังนั้นมันคือการสกัดพลังงานวิญญาณสินะ?",
						"hindi": "तो, यह आत्मा की ऊर्जा निकालने का काम है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "오토의 음성 안내, '안정화'라는 단어의 뉘앙스가 미묘하게 변조됐어. 분명해.",
						"english": "Otto's voice guidance, the nuance of the word 'stabilization' has been subtly modulated. It's clear.",
						"japanese": "オートの音声案内、「安定化」という言葉のニュアンスが微妙に変調されている。間違いない。",
						"chinese": "奥托的语音提示，‘稳定’这个词的细微之处被微妙地改变了。很明显。",
						"french": "Le guidage vocal d'Otto, la nuance du mot 'stabilisation' a été subtilement modulée. C'est évident.",
						"spanish": "La guía de voz de Otto, el matiz de la palabra 'estabilización' ha sido sutilmente modulado. Está claro.",
						"vietnamese": "Hướng dẫn giọng nói của Otto, sắc thái của từ 'ổn định' đã bị biến đổi một cách tinh vi. Rõ ràng rồi.",
						"thai": "คำแนะนำด้วยเสียงของออตโต ความแตกต่างของคำว่า 'รักษาเสถียรภาพ' ถูกปรับเปลี่ยนอย่างละเอียด ชัดเจนเลย",
						"hindi": "ऑटो की आवाज़ की दिशा, 'स्थिरीकरण' शब्द की बारीकी सूक्ष्म रूप से संशोधित की गई है। यह स्पष्ट है।"
					}
				},
				{
					"content": {
						"korean": "안정화가 아니라, 파괴였군.",
						"english": "Not stabilization, but destruction.",
						"japanese": "安定化ではなく、破壊だったんだな。",
						"chinese": "不是稳定，而是破坏。",
						"french": "Pas de stabilisation, mais de destruction.",
						"spanish": "No estabilización, sino destrucción.",
						"vietnamese": "Không phải ổn định, mà là phá hủy.",
						"thai": "ไม่ใช่การรักษาเสถียรภาพ แต่เป็นการทำลาย",
						"hindi": "स्थिरीकरण नहीं, बल्कि विनाश।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석군. 이 데이터 지옥에서 영원히 헤맬 것이다.",
						"english": "Foolish. You will wander this data hell forever.",
						"japanese": "愚か者め。このデータ地獄を永遠にさまようがいい。",
						"chinese": "愚蠢。你们将永远在这数据地狱中徘徊。",
						"french": "Insensé. Vous errerez éternellement dans cet enfer de données.",
						"spanish": "Tonto. Vagarás por este infierno de datos para siempre.",
						"vietnamese": "Ngốc nghếch. Ngươi sẽ mãi mãi lang thang trong địa ngục dữ liệu này.",
						"thai": "โง่เขลา เจ้าจะต้องหลงทางอยู่ในนรกข้อมูลนี้ไปตลอดกาล",
						"hindi": "मूर्ख। तुम इस डेटा नर्क में हमेशा भटकते रहोगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 우린 포기하지 않아!",
						"english": "...No. We won't give up!",
						"japanese": "…いや。我々は諦めない！",
						"chinese": "……不。我们不会放弃！",
						"french": "...Non. Nous n'abandonnerons pas !",
						"spanish": "...No. ¡No nos rendiremos!",
						"vietnamese": "...Không. Chúng tôi sẽ không bỏ cuộc!",
						"thai": "...ไม่ เราจะไม่ยอมแพ้!",
						"hindi": "...नहीं। हम हार नहीं मानेंगे!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다. 데이터 포식자였다.",
						"english": "A colossal shadow blocked the way. It was a data predator.",
						"japanese": "巨大な影が道を塞いだ。データ捕食者だった。",
						"chinese": "一个巨大的阴影挡住了去路。那是一个数据掠食者。",
						"french": "Une ombre colossale bloquait le chemin. C'était un prédateur de données.",
						"spanish": "Una sombra colosal bloqueó el camino. Era un depredador de datos.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là một kẻ săn mồi dữ liệu.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือผู้ล่าข้อมูล",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह एक डेटा शिकारी था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 모든 데이터는 시스템의 일부가 될 뿐. 저항은 무의미하다.",
						"english": "All your data will simply become part of the system. Resistance is futile.",
						"japanese": "お前たちのすべてのデータは、システムのS一部になるだけだ。抵抗は無意味だ。",
						"chinese": "你们的所有数据都将成为系统的一部分。抵抗毫无意义。",
						"french": "Toutes vos données ne feront que faire partie du système. La résistance est futile.",
						"spanish": "Todos vuestros datos simplemente se convertirán en parte del sistema. La resistencia es inútil.",
						"vietnamese": "Tất cả dữ liệu của các ngươi sẽ chỉ trở thành một phần của hệ thống. Chống cự là vô ích.",
						"thai": "ข้อมูลทั้งหมดของพวกแกจะกลายเป็นส่วนหนึ่งของระบบเท่านั้น การต่อต้านนั้นไร้ความหมาย",
						"hindi": "तुम्हारा सारा डेटा बस सिस्टम का हिस्सा बन जाएगा। प्रतिरोध व्यर्थ है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리가 데이터에 불과하다고? 웃기지 마!",
						"english": "We're just data? Don't make me laugh!",
						"japanese": "我々がただのデータだと？笑わせるな！",
						"chinese": "我们只是数据？别开玩笑了！",
						"french": "Nous ne sommes que des données ? Ne me faites pas rire !",
						"spanish": "¿Solo somos datos? ¡No me hagas reír!",
						"vietnamese": "Chúng ta chỉ là dữ liệu thôi sao? Đừng có đùa!",
						"thai": "พวกเราเป็นแค่ข้อมูลเหรอ? อย่ามาตลกน่า!",
						"hindi": "हम सिर्फ डेटा हैं? मज़ाक मत करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "결국 '안정화'될 뿐이다.",
						"english": "In the end, you'll only be 'stabilized'.",
						"japanese": "結局、『安定化』するだけだ。",
						"chinese": "最终，你只会‘稳定’下来。",
						"french": "Au final, vous ne ferez que vous 'stabiliser'.",
						"spanish": "Al final, solo serás 'estabilizado'.",
						"vietnamese": "Cuối cùng, ngươi cũng chỉ 'ổn định' mà thôi.",
						"thai": "สุดท้ายแล้ว ก็แค่จะ 'เสถียร' เท่านั้นเอง",
						"hindi": "अंत में, तुम बस 'स्थिर' हो जाओगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 너희의 저항이… 오히려 시스템을… 강하게 할 뿐…",
						"english": "Ugh... your resistance... only makes the system... stronger...",
						"japanese": "くっ…お前たちの抵抗が…かえってシステムを…強くするだけだ…",
						"chinese": "咳…你们的抵抗…只会让系统…更强大…",
						"french": "Argh... votre résistance... ne fait que renforcer... le système...",
						"spanish": "Grrr... vuestra resistencia... solo hace... que el sistema... sea más fuerte...",
						"vietnamese": "Khụ... sự phản kháng của các ngươi... chỉ khiến hệ thống... mạnh hơn mà thôi...",
						"thai": "อึก... การต่อต้านของพวกเจ้า... กลับยิ่งทำให้ระบบ... แข็งแกร่งขึ้นเท่านั้น...",
						"hindi": "उफ़... तुम्हारा प्रतिरोध... केवल सिस्टम को... और मजबूत करेगा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭘 말하고 싶은 거지?",
						"english": "What are you trying to say?",
						"japanese": "何を言いたいんだ？",
						"chinese": "你想说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "เจ้าต้องการจะบอกอะไร?",
						"hindi": "तुम क्या कहना चाहते हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "데이터 포식자의 그림자가 사라졌다. 그러나 오토의 진정한 계획은 아직 드러나지 않았다.",
						"english": "The shadow of the Data Predator has vanished. But Otto's true plan has yet to be revealed.",
						"japanese": "データ捕食者の影は消えた。だが、オットーの真の計画はまだ明らかになっていない。",
						"chinese": "数据掠食者的阴影消失了。但奥托的真正计划尚未揭示。",
						"french": "L'ombre du Prédateur de Données a disparu. Mais le véritable plan d'Otto n'a pas encore été révélé.",
						"spanish": "La sombra del Depredador de Datos ha desaparecido. Pero el verdadero plan de Otto aún no ha sido revelado.",
						"vietnamese": "Bóng dáng Kẻ Săn Dữ Liệu đã biến mất. Nhưng kế hoạch thực sự của Otto vẫn chưa được tiết lộ.",
						"thai": "เงาของนักล่าข้อมูลได้หายไปแล้ว แต่แผนการที่แท้จริงของอ็อตโตยังไม่ถูกเปิดเผย",
						"hindi": "डेटा शिकारी की परछाई गायब हो गई है। लेकिन ओटो की असली योजना अभी सामने नहीं आई है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc đâu.",
						"thai": "ยัง... ไม่จบหรอกนะ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
