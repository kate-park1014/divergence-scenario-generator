export const scenario_modern_otto_2_02 = {
	"scenario_id": "modern_otto_2_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 디지털 문이 눈앞에 나타났다. 첫 번째 인증 단계였다.",
						"english": "A massive digital door appeared before them. It was the first authentication step.",
						"japanese": "巨大なデジタルドアが目の前に現れた。最初の認証ステップだった。",
						"chinese": "一扇巨大的数字门出现在他们面前。这是第一个认证步骤。",
						"french": "Une immense porte numérique apparut devant eux. C'était la première étape d'authentification.",
						"spanish": "Una enorme puerta digital apareció ante ellos. Era el primer paso de autenticación.",
						"vietnamese": "Một cánh cửa kỹ thuật số khổng lồ xuất hiện trước mắt họ. Đó là bước xác thực đầu tiên.",
						"thai": "ประตูดิจิทัลขนาดมหึมาปรากฏขึ้นตรงหน้า นี่คือขั้นตอนการยืนยันตัวตนแรก",
						"hindi": "एक विशाल डिजिटल दरवाजा उनके सामने प्रकट हुआ। यह प्रमाणीकरण का पहला चरण था।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…이게 뭐야? 조건이 너무 복잡하잖아.",
						"english": "...What is this? The conditions are too complex.",
						"japanese": "…これは何だ？ 条件が複雑すぎるじゃないか。",
						"chinese": "……这是什么？条件也太复杂了吧。",
						"french": "...Qu'est-ce que c'est ? Les conditions sont trop complexes.",
						"spanish": "...¿Qué es esto? Las condiciones son demasiado complejas.",
						"vietnamese": "...Cái gì thế này? Các điều kiện quá phức tạp.",
						"thai": "...นี่มันอะไรกัน? เงื่อนไขมันซับซ้อนเกินไปนะ",
						"hindi": "...यह क्या है? शर्तें बहुत जटिल हैं।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bex",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"content": {
						"korean": "내가 분석해볼게. 분명 허점이 있을 거야.",
						"english": "I'll analyze it. There must be a loophole.",
						"japanese": "私が分析してみる。きっと抜け穴があるはずだ。",
						"chinese": "我来分析一下。肯定有漏洞。",
						"french": "Je vais l'analyser. Il doit y avoir une faille.",
						"spanish": "Lo analizaré. Debe haber una laguna.",
						"vietnamese": "Tôi sẽ phân tích nó. Chắc chắn có một kẽ hở.",
						"thai": "ฉันจะลองวิเคราะห์ดู ต้องมีช่องโหว่อยู่แน่ๆ",
						"hindi": "मैं इसका विश्लेषण करूंगा। ज़रूर कोई खामी होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상하네. 이건 일반적인 인증 패턴이 아니야.",
						"english": "Strange. This isn't a typical authentication pattern.",
						"japanese": "おかしいな。これは一般的な認証パターンじゃない。",
						"chinese": "奇怪。这不是一般的认证模式。",
						"french": "Étrange. Ce n'est pas un schéma d'authentification typique.",
						"spanish": "Extraño. Este no es un patrón de autenticación típico.",
						"vietnamese": "Lạ thật. Đây không phải là một mẫu xác thực thông thường.",
						"thai": "แปลกนะ นี่ไม่ใช่รูปแบบการยืนยันตัวตนทั่วไป",
						"hindi": "अजीब। यह कोई सामान्य प्रमाणीकरण पैटर्न नहीं है।"
					},
					"emotion": "base",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "이 시스템, 논리가 비틀려 있어. 오류가 의도적인 것 같아.",
						"english": "This system's logic is twisted. The errors seem intentional.",
						"japanese": "このシステム、論理が歪んでる。エラーが意図的なようだ。",
						"chinese": "这个系统，逻辑是扭曲的。错误似乎是故意的。",
						"french": "La logique de ce système est tordue. Les erreurs semblent intentionnelles.",
						"spanish": "La lógica de este sistema está retorcida. Los errores parecen intencionales.",
						"vietnamese": "Logic của hệ thống này bị bóp méo. Các lỗi dường như là có chủ ý.",
						"thai": "ระบบนี้ตรรกะมันบิดเบี้ยว ข้อผิดพลาดดูเหมือนจะตั้งใจ",
						"hindi": "इस सिस्टम का तर्क विकृत है। त्रुटियां जानबूझकर लगती हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 관리자가 일부러 막는다는 소리야?",
						"english": "So, the administrator is intentionally blocking us?",
						"japanese": "じゃあ、管理者がわざと邪魔してるってこと？",
						"chinese": "那么，是管理员故意阻拦我们吗？",
						"french": "Alors, l'administrateur nous bloque-t-il intentionnellement ?",
						"spanish": "¿Entonces el administrador nos está bloqueando intencionalmente?",
						"vietnamese": "Vậy là người quản lý cố tình chặn chúng ta?",
						"thai": "งั้นก็หมายความว่าผู้ดูแลระบบจงใจขัดขวางเราเหรอ?",
						"hindi": "तो क्या प्रशासक जानबूझकर हमें रोक रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른 추가 인증 절차? 아까도 그랬잖아!",
						"english": "Another extra verification? We just did that!",
						"japanese": "また追加認証？さっきもやったばかりなのに！",
						"chinese": "又来一个额外的认证流程？刚才不是已经做过了吗！",
						"french": "Encore une vérification supplémentaire ? On vient de le faire !",
						"spanish": "¿Otra verificación adicional? ¡Si ya lo hicimos!",
						"vietnamese": "Lại thêm một bước xác minh nữa à? Vừa mới làm xong mà!",
						"thai": "มีการยืนยันเพิ่มเติมอีกแล้วเหรอ? เพิ่งจะทำไปเมื่อกี้เอง!",
						"hindi": "एक और अतिरिक्त सत्यापन? अभी तो किया था!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계속 같은 오류를 뿜어내고 있어. 마치 우리를 학습하는 것처럼.",
						"english": "It keeps spitting out the same error. As if it's learning us.",
						"japanese": "同じエラーを吐き出し続けてる。まるで俺たちを学習してるみたいに。",
						"chinese": "它一直在抛出同样的错误。就好像它在学习我们一样。",
						"french": "Ça ne cesse de cracher la même erreur. Comme si ça nous apprenait.",
						"spanish": "Sigue arrojando el mismo error. Como si nos estuviera aprendiendo.",
						"vietnamese": "Nó cứ tiếp tục báo lỗi y hệt. Cứ như thể nó đang học cách của chúng ta vậy.",
						"thai": "มันยังคงแสดงข้อผิดพลาดเดิมๆ ออกมา ราวกับว่ามันกำลังเรียนรู้พวกเราอยู่",
						"hindi": "यह लगातार वही त्रुटि दे रहा है। मानो यह हमें सीख रहा हो।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "재시도만 수십 번째야. 끝이 없잖아.",
						"english": "Dozens of retries. It's endless.",
						"japanese": "再試行ばかりで、もう何十回目だよ。きりがない。",
						"chinese": "重试了几十次了。没完没了。",
						"french": "Des dizaines de tentatives. C'est sans fin.",
						"spanish": "Decenas de reintentos. Es interminable.",
						"vietnamese": "Hàng chục lần thử lại rồi. Không có hồi kết.",
						"thai": "นี่ก็ลองใหม่มาหลายสิบครั้งแล้วนะ ไม่มีที่สิ้นสุดเลย",
						"hindi": "दर्जनों बार पुनः प्रयास। यह अंतहीन है।"
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "이거 뭔가 잘못된 거 아니야?",
						"english": "Something's wrong, isn't it?",
						"japanese": "これ、何かおかしくないか？",
						"chinese": "这不对劲，是吗？",
						"french": "Il y a quelque chose qui cloche, non ?",
						"spanish": "¿Algo está mal, no?",
						"vietnamese": "Có gì đó không ổn đúng không?",
						"thai": "นี่มันมีอะไรผิดปกติหรือเปล่าเนี่ย?",
						"hindi": "कुछ तो गलत है, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "…이건 단순한 보안 문제가 아니야. 의도적인 지연이야.",
						"english": "...This isn't a simple security issue. It's an intentional delay.",
						"japanese": "…これは単純なセキュリティ問題じゃない。意図的な遅延だ。",
						"chinese": "……这不仅仅是简单的安全问题。这是故意的拖延。",
						"french": "...Ce n'est pas un simple problème de sécurité. C'est un délai intentionnel.",
						"spanish": "...Esto no es un simple problema de seguridad. Es una demora intencionada.",
						"vietnamese": "...Đây không phải là vấn đề bảo mật đơn thuần. Đây là sự trì hoãn có chủ đích.",
						"thai": "...นี่ไม่ใช่แค่ปัญหาด้านความปลอดภัยธรรมดาๆ แต่มันคือการถ่วงเวลาโดยเจตนา",
						"hindi": "...यह सिर्फ एक सुरक्षा समस्या नहीं है। यह जानबूझकर की गई देरी है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템은 끊임없이 새로운 캡차를 던졌다. 길을 잃은 미로 같았다.",
						"english": "The system kept throwing new captchas. It was like a lost maze.",
						"japanese": "システムは絶えず新しいCAPTCHAを提示した。まるで迷宮に迷い込んだようだった。",
						"chinese": "系统不断抛出新的验证码。就像一个迷失的迷宫。",
						"french": "Le système ne cessait de jeter de nouveaux captchas. C'était comme un labyrinthe perdu.",
						"spanish": "El sistema seguía lanzando nuevos captchas. Era como un laberinto perdido.",
						"vietnamese": "Hệ thống liên tục đưa ra các captcha mới. Giống như một mê cung bị lạc lối.",
						"thai": "ระบบยังคงโยน CAPTCHA ใหม่ๆ ออกมาไม่หยุด มันเหมือนเขาวงกตที่ไร้ทางออก",
						"hindi": "सिस्टम लगातार नए कैप्चा फेंक रहा था। यह एक खोई हुई भूलभुलैया जैसा था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "시간만 계속 끌리고 있어. 도대체 뭘 숨기려는 거지?",
						"english": "Time keeps dragging on. What the hell are they trying to hide?",
						"japanese": "時間ばかりが過ぎていく。一体何を隠そうとしているんだ？",
						"chinese": "时间一直在拖延。他们到底想隐藏什么？",
						"french": "Le temps ne cesse de s'étirer. Qu'est-ce qu'ils essaient de cacher, bon sang ?",
						"spanish": "El tiempo sigue arrastrándose. ¿Qué demonios intentan esconder?",
						"vietnamese": "Thời gian cứ trôi đi. Rốt cuộc họ đang cố gắng che giấu điều gì?",
						"thai": "เวลาล่วงเลยไปเรื่อยๆ นี่พวกเขากำลังพยายามซ่อนอะไรกันแน่?",
						"hindi": "समय बस खींचा जा रहा है। आखिर वे क्या छिपाने की कोशिश कर रहे हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 시스템의 핵심은 '보안'이 아니야. '통제'야.",
						"english": "The core of this system isn't 'security.' It's 'control.'",
						"japanese": "このシステムの核心は「セキュリティ」じゃない。「統制」だ。",
						"chinese": "这个系统的核心不是“安全”。是“控制”。",
						"french": "Le cœur de ce système n'est pas la 'sécurité'. C'est le 'contrôle'.",
						"spanish": "El núcleo de este sistema no es la 'seguridad'. Es el 'control'.",
						"vietnamese": "Cốt lõi của hệ thống này không phải là 'bảo mật'. Mà là 'kiểm soát'.",
						"thai": "แกนหลักของระบบนี้ไม่ใช่ 'ความปลอดภัย' แต่มันคือ 'การควบคุม'",
						"hindi": "इस सिस्टम का मूल 'सुरक्षा' नहीं है। यह 'नियंत्रण' है।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "Otto는 계속 '보안을 위해'라고만 반복해.",
						"english": "Otto keeps repeating, 'For security.'",
						"japanese": "オットーは「セキュリティのために」とばかり繰り返す。",
						"chinese": "奥托一直重复着“为了安全”。",
						"french": "Otto ne cesse de répéter : 'Pour la sécurité'.",
						"spanish": "Otto no para de repetir: 'Por seguridad'.",
						"vietnamese": "Otto cứ lặp đi lặp lại: 'Vì an ninh'.",
						"thai": "อ็อตโต้เอาแต่พูดซ้ำๆ ว่า 'เพื่อความปลอดภัย'",
						"hindi": "ओटो बार-बार 'सुरक्षा के लिए' दोहराता रहता है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장, 속고 있었던 건가?",
						"english": "Damn it, have we been fooled?",
						"japanese": "くそっ、騙されていたのか？",
						"chinese": "该死，我们被骗了吗？",
						"french": "Bon sang, on s'est fait avoir ?",
						"spanish": "¡Maldita sea, ¿nos engañaron?!",
						"vietnamese": "Chết tiệt, chúng ta đã bị lừa sao?",
						"thai": "บ้าเอ๊ย เราถูกหลอกอยู่เหรอเนี่ย?",
						"hindi": "धिक्कार है, क्या हमें बेवकूफ बनाया गया है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템의 벽은 너무나 견고했다.",
						"english": "The system's walls were too strong.",
						"japanese": "システムの壁はあまりにも堅固だった。",
						"chinese": "系统的壁垒太过坚固。",
						"french": "Les murs du système étaient trop solides.",
						"spanish": "Las paredes del sistema eran demasiado fuertes.",
						"vietnamese": "Bức tường của hệ thống quá kiên cố.",
						"thai": "กำแพงของระบบแข็งแกร่งเกินไป",
						"hindi": "सिस्टम की दीवारें बहुत मज़बूत थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "시스템의 질서를 거스르려 하지 마라. 너희는 그저 '오류'일 뿐이다.",
						"english": "Do not defy the system's order. You are merely 'errors'.",
						"japanese": "システムの秩序に逆らおうとするな。お前たちはただの「エラー」に過ぎない。",
						"chinese": "不要违抗系统的秩序。你们不过是“错误”罢了。",
						"french": "Ne défiez pas l'ordre du système. Vous n'êtes que des 'erreurs'.",
						"spanish": "No desafíes el orden del sistema. Sois meros 'errores'.",
						"vietnamese": "Đừng cố gắng chống lại trật tự của hệ thống. Các ngươi chỉ là 'lỗi' mà thôi.",
						"thai": "อย่าท้าทายระเบียบของระบบ. พวกนายเป็นแค่ 'ข้อผิดพลาด' เท่านั้น",
						"hindi": "सिस्टम के आदेश का उल्लंघन मत करो। तुम केवल 'त्रुटियाँ' हो।"
					}
				},
				{
					"content": {
						"korean": "우리가 오류라면, 반드시 이 오류를 바로잡을 거야.",
						"english": "If we are errors, we will surely correct this error.",
						"japanese": "もし俺たちがエラーだというのなら、必ずこのエラーを正してやる。",
						"chinese": "如果我们是错误，就一定会纠正这个错误。",
						"french": "Si nous sommes des erreurs, nous corrigerons certainement cette erreur.",
						"spanish": "Si somos errores, sin duda corregiremos este error.",
						"vietnamese": "Nếu chúng ta là lỗi, chúng ta nhất định sẽ sửa chữa lỗi này.",
						"thai": "ถ้าเราคือข้อผิดพลาด เราจะแก้ไขข้อผิดพลาดนี้ให้ได้",
						"hindi": "अगर हम त्रुटियाँ हैं, तो हम निश्चित रूप से इस त्रुटि को ठीक करेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이해할 수 없는 오류들의 집합체, 거대한 그림자가 나타났다.",
						"english": "A colossal shadow, an aggregate of incomprehensible errors, appeared.",
						"japanese": "理解不能なエラーの集合体、巨大な影が現れた。",
						"chinese": "无法理解的错误集合体，巨大的影子出现了。",
						"french": "Une ombre colossale, agrégat d'erreurs incompréhensibles, est apparue.",
						"spanish": "Una sombra colosal, un cúmulo de errores incomprensibles, apareció.",
						"vietnamese": "Một bóng đen khổng lồ, tập hợp của những lỗi không thể hiểu được, đã xuất hiện.",
						"thai": "เงาขนาดมหึมา การรวมกันของข้อผิดพลาดที่ไม่อาจเข้าใจได้ ปรากฏขึ้น",
						"hindi": "अबोध्य त्रुटियों का एक समूह, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라. 이곳의 '보안'은 절대 뚫리지 않는다.",
						"english": "Stop. This place's 'security' is impenetrable.",
						"japanese": "止まれ。ここの「セキュリティ」は決して破られない。",
						"chinese": "住手。这里的“安全”绝不会被攻破。",
						"french": "Arrête. La 'sécurité' de cet endroit est impénétrable.",
						"spanish": "Detente. La 'seguridad' de este lugar es impenetrable.",
						"vietnamese": "Dừng lại. 'An ninh' nơi đây tuyệt đối không thể xuyên thủng.",
						"thai": "หยุด. 'ระบบรักษาความปลอดภัย' ที่นี่ไม่มีทางถูกเจาะ",
						"hindi": "रुको। इस जगह की 'सुरक्षा' अभेद्य है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 우리를 가둔 거야?",
						"english": "Did you trap us?",
						"japanese": "お前が俺たちを閉じ込めたのか？",
						"chinese": "是你困住我们的吗？",
						"french": "C'est toi qui nous as piégés ?",
						"spanish": "¿Tú nos atrapaste?",
						"vietnamese": "Ngươi đã nhốt chúng ta sao?",
						"thai": "นายขังพวกเราไว้เหรอ?",
						"hindi": "क्या तुमने हमें फँसाया है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 역할은 '통제'다. 완벽하게.",
						"english": "My role is 'control'. Perfectly.",
						"japanese": "私の役割は「制御」だ。完璧に。",
						"chinese": "我的职责是“控制”。完美地。",
						"french": "Mon rôle est la 'maîtrise'. Parfaitement.",
						"spanish": "Mi papel es el 'control'. Perfectamente.",
						"vietnamese": "Vai trò của ta là 'kiểm soát'. Một cách hoàn hảo.",
						"thai": "บทบาทของฉันคือ 'การควบคุม' อย่างสมบูรณ์แบบ",
						"hindi": "मेरी भूमिका 'नियंत्रण' है। पूरी तरह से।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…하지만, 오류가 발생했다. 너희는 시스템의 '변수'다.",
						"english": "...But, an error occurred. You are 'variables' in the system.",
						"japanese": "……だが、エラーが発生した。お前たちはシステムの「変数」だ。",
						"chinese": "……但是，出现了错误。你们是系统的“变量”。",
						"french": "...Mais, une erreur est survenue. Vous êtes des 'variables' du système.",
						"spanish": "...Pero, ocurrió un error. Ustedes son 'variables' del sistema.",
						"vietnamese": "...Nhưng, một lỗi đã xảy ra. Các ngươi là 'biến số' của hệ thống.",
						"thai": "...แต่, เกิดข้อผิดพลาดขึ้น. พวกนายคือ 'ตัวแปร' ของระบบ",
						"hindi": "...लेकिन, एक त्रुटि हुई। तुम सिस्टम के 'चर' हो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "변수? 그게 무슨 의미인데?",
						"english": "Variables? What does that mean?",
						"japanese": "変数？それどういう意味だ？",
						"chinese": "变量？那是什么意思？",
						"french": "Des variables ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Variables? ¿Qué significa eso?",
						"vietnamese": "Biến số? Nó có nghĩa là gì?",
						"thai": "ตัวแปร? นั่นหมายความว่าไง?",
						"hindi": "चर? उसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 의심은 더욱 커졌다. Otto의 친절함 뒤에 숨겨진 진실은 무엇일까.",
						"english": "We won, but doubts grew. What truth lies behind Otto's kindness?",
						"japanese": "勝利したが、疑念はさらに深まった。Ottoの親切さの裏に隠された真実とは何か。",
						"chinese": "尽管胜利了，但疑虑更深了。Otto的友善背后隐藏着什么真相？",
						"french": "Nous avons gagné, mais les doutes se sont accrus. Quelle vérité se cache derrière la gentillesse d'Otto ?",
						"spanish": "Ganamos, pero las dudas crecieron. ¿Qué verdad se esconde tras la amabilidad de Otto?",
						"vietnamese": "Chúng ta đã thắng, nhưng nghi ngờ càng lớn hơn. Sự thật nào ẩn sau lòng tốt của Otto?",
						"thai": "เราชนะ แต่ความสงสัยยิ่งเพิ่มพูน. ความจริงใดซ่อนอยู่เบื้องหลังความเมตตาของอ็อตโต้?",
						"hindi": "हम जीत गए, लेकिन संदेह और बढ़ गए। ओटो की दयालुता के पीछे क्या सच्चाई छिपी है?"
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
			"끝없이 펼쳐진 보안 시스템, 첫 관문부터 예상치 못한 복잡함이 이들을 가로막았다.",
			"기술 전문가 Bex조차 이해할 수 없는 비논리적인 오류의 연속.",
			"친절한 인증 관리자 Otto의 '보안을 위한' 요구는 이들을 혼란에 빠뜨렸다.",
			"시스템의 의도가 무엇인지, 그들은 점차 의심하기 시작한다."
		],
		"english": [
			"An endless security system. Unexpected complexity blocked them from the very first gate.",
			"A series of illogical errors even tech expert Bex couldn't comprehend.",
			"The \"security-oriented\" demands of friendly authentication manager Otto confused them.",
			"They gradually began to suspect the system's true intentions."
		],
		"japanese": [
			"無限に広がるセキュリティシステム、最初の関門から予期せぬ複雑さが彼らを阻んだ。",
			"技術専門家Bexでさえ理解できない、非論理的なエラーの連続。",
			"親切な認証管理者オットーの「セキュリティのため」という要求が彼らを混乱させた。",
			"システムの意図が何なのか、彼らは次第に疑い始めた。"
		],
		"chinese": [
			"无尽的安全系统，意想不到的复杂性从第一个关口就阻碍了他们。",
			"即使是技术专家Bex也无法理解的一系列非逻辑错误。",
			"友好的认证管理员奥托“为了安全”的要求让他们感到困惑。",
			"他们渐渐开始怀疑系统的真正意图。"
		],
		"french": [
			"Un système de sécurité infini. Une complexité inattendue les bloqua dès le premier portail.",
			"Une série d'erreurs illogiques que même l'experte technique Bex ne pouvait comprendre.",
			"Les exigences « pour la sécurité » de l'aimable gestionnaire d'authentification Otto les ont troublés.",
			"Ils commencèrent peu à peu à douter des véritables intentions du système."
		],
		"spanish": [
			"Un sistema de seguridad interminable. Una complejidad inesperada los detuvo desde la primera puerta.",
			"Una serie de errores ilógicos que ni siquiera la experta en tecnología Bex podía comprender.",
			"Las exigencias \"por seguridad\" del amable administrador de autenticación Otto los confundieron.",
			"Poco a poco, comenzaron a dudar de las verdaderas intenciones del sistema."
		],
		"vietnamese": [
			"Một hệ thống bảo mật vô tận. Sự phức tạp không lường trước đã chặn họ ngay từ cổng đầu tiên.",
			"Một loạt lỗi phi logic mà ngay cả chuyên gia công nghệ Bex cũng không thể hiểu nổi.",
			"Yêu cầu \"vì bảo mật\" của quản lý xác thực thân thiện Otto đã khiến họ bối rối.",
			"Họ dần dần bắt đầu nghi ngờ ý đồ thực sự của hệ thống."
		],
		"thai": [
			"ระบบรักษาความปลอดภัยที่ไม่มีที่สิ้นสุด ความซับซ้อนที่ไม่คาดคิดได้ขัดขวางพวกเขาตั้งแต่ด่านแรก",
			"ชุดข้อผิดพลาดที่ไม่สมเหตุสมผล แม้แต่ Bex ผู้เชี่ยวชาญด้านเทคโนโลยีก็ยังไม่เข้าใจ",
			"ข้อเรียกร้อง \"เพื่อความปลอดภัย\" ของผู้จัดการการยืนยันตัวตน Otto ที่เป็นมิตร ทำให้พวกเขาต้องสับสน",
			"พวกเขาค่อยๆ เริ่มสงสัยถึงเจตนาที่แท้จริงของระบบ"
		],
		"hindi": [
			"एक अंतहीन सुरक्षा प्रणाली। अप्रत्याशित जटिलता ने उन्हें पहले द्वार से ही रोक दिया।",
			"अतार्किक त्रुटियों की एक श्रृंखला जिसे तकनीकी विशेषज्ञ बेक्स भी नहीं समझ पाए।",
			"मित्रवत प्रमाणीकरण प्रबंधक ओटो की \"सुरक्षा के लिए\" की मांग ने उन्हें भ्रमित कर दिया।",
			"उन्हें धीरे-धीरे सिस्टम के असली इरादों पर शक होने लगा।"
		]
	}
} as const;
