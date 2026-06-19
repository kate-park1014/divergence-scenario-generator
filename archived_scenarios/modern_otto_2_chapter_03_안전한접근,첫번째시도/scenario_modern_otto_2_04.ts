export const scenario_modern_otto_2_04 = {
	"scenario_id": "modern_otto_2_04",
	"order": 4,
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
			"끝없이 나타나는 오류. 미묘하게 어긋나는 시스템.",
			"친절했던 Otto의 얼굴 뒤로, 의심의 그림자가 드리운다.",
			"이건 단순한 보안 문제가 아니다. 누군가 의도적으로 막고 있다.",
			"혼란과 좌절 속에서, 진실을 향한 길은 더욱 미궁에 빠진다."
		],
		"english": [
			"Endless errors. A subtly misaligned system.",
			"Behind the kind face of Otto, a shadow of doubt falls.",
			"This isn't just a security issue. Someone is intentionally blocking it.",
			"Amidst confusion and frustration, the path to truth becomes an even deeper labyrinth."
		],
		"japanese": [
			"終わりなきエラー。 微妙にずれるシステム。",
			"親切だったオットーの顔の裏に、疑念の影が差す。",
			"これは単なるセキュリティ問題ではない。 誰かが意図的に妨害している。",
			"混乱と挫折の中で、真実への道はさらに迷宮へと深く沈む。"
		],
		"chinese": [
			"错误层出不穷。 系统悄然失衡。",
			"在友善的奥托面孔背后，疑影重重。",
			"这不只是安全问题。 有人蓄意阻挠。",
			"在混乱与挫败中，通往真相之路愈发扑朔迷离。"
		],
		"french": [
			"Erreurs incessantes. Système subtilement désaligné.",
			"Derrière le visage bienveillant d'Otto, une ombre de doute plane.",
			"Ce n'est pas un simple problème de sécurité. Quelqu'un bloque délibérément.",
			"Au milieu de la confusion et de la frustration, le chemin vers la vérité s'enfonce dans un labyrinthe plus profond."
		],
		"spanish": [
			"Errores sin fin. Un sistema sutilmente desalineado.",
			"Detrás del amable rostro de Otto, una sombra de duda se cierne.",
			"Esto no es solo un problema de seguridad. Alguien está bloqueando intencionadamente.",
			"Entre la confusión y la frustración, el camino hacia la verdad se adentra en un laberinto aún más profundo."
		],
		"vietnamese": [
			"Lỗi liên miên. Hệ thống lệch lạc một cách tinh vi.",
			"Đằng sau gương mặt hiền từ của Otto, một bóng đen nghi ngờ bao trùm.",
			"Đây không chỉ là vấn đề bảo mật. Ai đó đang cố tình ngăn chặn.",
			"Giữa sự hỗn loạn và thất vọng, con đường đến sự thật càng trở nên khó lường."
		],
		"thai": [
			"ข้อผิดพลาดไม่สิ้นสุด ระบบที่คลาดเคลื่อนอย่างประณีต",
			"เบื้องหลังใบหน้าใจดีของอ็อตโต้ เงาแห่งความสงสัยปกคลุม",
			"นี่ไม่ใช่แค่ปัญหาความปลอดภัย มีใครบางคนกำลังขัดขวางโดยเจตนา",
			"ท่ามกลางความสับสนและท้อแท้ เส้นทางสู่ความจริงกลับกลายเป็นเขาวงกตที่ลึกล้ำยิ่งขึ้น"
		],
		"hindi": [
			"अनगिनत त्रुटियाँ। सूक्ष्म रूप से बिगड़ी हुई प्रणाली।",
			"दयालु ओटो के चेहरे के पीछे, संदेह की छाया मंडराती है।",
			"यह केवल सुरक्षा समस्या नहीं है। कोई जानबूझकर रुकावट डाल रहा है।",
			"भ्रम और हताशा के बीच, सत्य का मार्ग और भी गहरा भूलभुलैया बन जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "또 이 오류? 벌써 몇 번째야!",
						"english": "This error again? How many times already!",
						"japanese": "またこのエラー？ もう何度目だ！",
						"chinese": "又是这个错误？ 这都第几次了！",
						"french": "Encore cette erreur ? C'est la combien de fois déjà !",
						"spanish": "¿Otra vez este error? ¡Cuántas veces ya!",
						"vietnamese": "Lại lỗi này nữa à? Đã bao nhiêu lần rồi chứ!",
						"thai": "ข้อผิดพลาดนี้อีกแล้วเหรอ? นี่มันครั้งที่เท่าไหร่แล้ว!",
						"hindi": "फिर से यह त्रुटि? यह कितनी बार हो चुका है!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bex",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "...이상해. 단순한 버그가 아니야.",
						"english": "...Strange. This isn't just a bug.",
						"japanese": "...おかしい。 単なるバグじゃない。",
						"chinese": "...奇怪。 这不是简单的bug。",
						"french": "...Étrange. Ce n'est pas un simple bug.",
						"spanish": "...Extraño. Esto no es solo un error.",
						"vietnamese": "...Lạ thật. Đây không chỉ là một lỗi đơn thuần.",
						"thai": "...แปลกนะ นี่ไม่ใช่แค่บั๊กธรรมดา",
						"hindi": "...अजीब है। यह सिर्फ एक बग नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? Otto는 보안 강화 때문이라고 했잖아.",
						"english": "What are you talking about? Otto said it was for security enhancements.",
						"japanese": "何を言ってるんだ？ オットーはセキュリティ強化のためだと言ったぞ。",
						"chinese": "你在说什么？ 奥托不是说这是为了加强安全吗？",
						"french": "De quoi tu parles ? Otto a dit que c'était pour des améliorations de sécurité.",
						"spanish": "¿De qué hablas? Otto dijo que era por mejoras de seguridad.",
						"vietnamese": "Cậu nói gì vậy? Otto bảo đó là để tăng cường bảo mật mà.",
						"thai": "นายพูดอะไรน่ะ? อ็อตโต้บอกว่ามันเพื่อเพิ่มความปลอดภัยไม่ใช่เหรอ?",
						"hindi": "तुम क्या कह रहे हो? ओटो ने कहा था कि यह सुरक्षा बढ़ाने के लिए है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "패턴이 너무 인위적이야. 마치 누군가 의도적으로 길을 막는 것처럼.",
						"english": "The pattern is too artificial. As if someone is intentionally blocking the way.",
						"japanese": "パターンがあまりにも人為的だ。 まるで誰かが意図的に道を塞いでいるかのように。",
						"chinese": "这模式太人为化了。 就像有人故意挡路一样。",
						"french": "Le motif est trop artificiel. Comme si quelqu'un bloquait délibérément le chemin.",
						"spanish": "El patrón es demasiado artificial. Como si alguien estuviera bloqueando el camino intencionadamente.",
						"vietnamese": "Kiểu này quá nhân tạo. Cứ như có ai đó cố tình chặn đường vậy.",
						"thai": "รูปแบบมันดูประดิษฐ์เกินไป เหมือนมีใครบางคนจงใจขวางทาง",
						"hindi": "यह पैटर्न बहुत कृत्रिम है। मानो कोई जानबूझकर रास्ता रोक रहा हो।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더욱 안전한 환경을 위한 조치입니다. 걱정 마십시오.",
						"english": "These are measures for a safer environment. Please do not worry.",
						"japanese": "より安全な環境のための措置です。ご心配なく。",
						"chinese": "这是为了更安全的环境所采取的措施。 请勿担心。",
						"french": "Ce sont des mesures pour un environnement plus sûr. Ne vous inquiétez pas.",
						"spanish": "Son medidas para un entorno más seguro. No se preocupe.",
						"vietnamese": "Đây là biện pháp nhằm tạo môi trường an toàn hơn. Xin đừng lo lắng.",
						"thai": "นี่คือมาตรการเพื่อสภาพแวดล้อมที่ปลอดภัยยิ่งขึ้น โปรดอย่ากังวล",
						"hindi": "ये सुरक्षित वातावरण के लिए उपाय हैं। कृपया चिंता न करें।"
					},
					"speaker": "random_boss"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "확실해. 이 시스템은 특정 조건을 만족하면 길을 막아.",
						"english": "I'm sure of it. This system blocks the way if certain conditions are met.",
						"japanese": "確信した。このシステムは、特定の条件を満たすと道を塞ぐ。",
						"chinese": "我确定。 这个系统在满足特定条件时会阻挡去路。",
						"french": "J'en suis sûr. Ce système bloque le chemin si certaines conditions sont remplies.",
						"spanish": "Estoy seguro. Este sistema bloquea el camino si se cumplen ciertas condiciones.",
						"vietnamese": "Chắc chắn rồi. Hệ thống này sẽ chặn đường nếu đáp ứng một số điều kiện nhất định.",
						"thai": "ฉันแน่ใจ ระบบนี้จะขวางทางถ้ามีเงื่อนไขบางอย่างตรงตามที่กำหนด",
						"hindi": "मुझे यकीन है। यह सिस्टम कुछ शर्तों को पूरा करने पर रास्ता रोक देता है।"
					},
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Otto가 우리를 속이고 있었다는 거야?",
						"english": "Otto was deceiving us?",
						"japanese": "「オットーは私たちを騙していたのか？」",
						"chinese": "奥托一直在欺骗我们吗？",
						"french": "Otto nous trompait ?",
						"spanish": "¿Otto nos estaba engañando?",
						"vietnamese": "Otto đã lừa dối chúng ta sao?",
						"thai": "อ็อตโต้หลอกเรามาตลอดหรือ?",
						"hindi": "क्या ओटो हमें धोखा दे रहा था?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "오해입니다. 저는 그저 여러분의 안전을 최우선으로 생각합니다.",
						"english": "A misunderstanding. I merely prioritize your safety above all else.",
						"japanese": "「誤解です。私はただ皆さんの安全を最優先しています。」",
						"chinese": "这是误会。我只是把你们的安全放在首位。",
						"french": "Un malentendu. Je ne fais que prioriser votre sécurité.",
						"spanish": "Un malentendido. Simplemente priorizo su seguridad.",
						"vietnamese": "Đây là hiểu lầm. Tôi chỉ ưu tiên sự an toàn của các bạn trên hết.",
						"thai": "เข้าใจผิดแล้วครับ ผมแค่ให้ความสำคัญกับความปลอดภัยของคุณเป็นอันดับแรก",
						"hindi": "यह एक गलतफहमी है। मैं केवल आपकी सुरक्षा को प्राथमिकता देता हूं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"content": {
						"korean": "시스템은 완벽해. 이 오류들은 '의도된' 거야.",
						"english": "The system is perfect. These errors are 'intended'.",
						"japanese": "「システムは完璧だ。このエラーは『意図的』なものだ。」",
						"chinese": "系统是完美的。这些错误是“有意为之”的。",
						"french": "Le système est parfait. Ces erreurs sont 'intentionnelles'.",
						"spanish": "El sistema es perfecto. Estos errores son 'intencionados'.",
						"vietnamese": "Hệ thống hoàn hảo. Những lỗi này là 'có chủ đích'.",
						"thai": "ระบบสมบูรณ์แบบ ข้อผิดพลาดเหล่านี้ 'เจตนา' ให้เกิด",
						"hindi": "सिस्टम एकदम सही है। ये त्रुटियां 'जानबूझकर' की गई हैं।"
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "데이터 흐름이 조작되고 있어. 특정 키워드에 반응해서 길을 막아.",
						"english": "Data flow is being manipulated. It blocks paths in response to specific keywords.",
						"japanese": "「データフローが操作されている。特定のキーワードに反応して道を塞ぐ。」",
						"chinese": "数据流正在被操纵。它对特定关键词做出反应并阻挡去路。",
						"french": "Le flux de données est manipulé. Il bloque les chemins en réaction à des mots-clés spécifiques.",
						"spanish": "El flujo de datos está siendo manipulado. Bloquea caminos en respuesta a palabras clave específicas.",
						"vietnamese": "Luồng dữ liệu đang bị thao túng. Nó chặn đường để phản ứng với các từ khóa cụ thể.",
						"thai": "การไหลของข้อมูลกำลังถูกบิดเบือน มันขวางทางเมื่อมีคีย์เวิร์ดบางอย่าง",
						"hindi": "डेटा प्रवाह को हेरफेर किया जा रहा है। यह विशिष्ट कीवर्ड के जवाब में रास्ते अवरुद्ध करता है।"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 Otto가 이 모든 걸 꾸민 거였어?",
						"english": "So Otto was behind all of this after all?",
						"japanese": "「結局、オットーが全てを仕組んだのか？」",
						"chinese": "所以，这一切都是奥托策划的吗？",
						"french": "Alors, c'était Otto derrière tout ça, après tout ?",
						"spanish": "¿Así que Otto estaba detrás de todo esto, después de todo?",
						"vietnamese": "Vậy ra Otto đã dàn dựng tất cả chuyện này?",
						"thai": "สรุปแล้วอ็อตโต้เป็นคนบงการทั้งหมดหรือนี่?",
						"hindi": "तो आखिर में ओटो ही इन सबका मास्टरमाइंड था?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안타깝군요. 추가 인증이 필요하겠습니다. 더 복잡한 과정을 거쳐야 합니다.",
						"english": "Unfortunate. Additional authentication will be required. You must go through a more complex process.",
						"japanese": "「残念です。追加認証が必要です。より複雑な手順を踏んでいただくことになります。」",
						"chinese": "很遗憾。需要额外认证。您必须经历一个更复杂的过程。",
						"french": "Malheureusement. Une authentification supplémentaire sera requise. Vous devez passer par un processus plus complexe.",
						"spanish": "Desafortunado. Se requerirá autenticación adicional. Deben pasar por un proceso más complejo.",
						"vietnamese": "Thật đáng tiếc. Cần xác thực bổ sung. Các bạn phải trải qua một quy trình phức tạp hơn.",
						"thai": "น่าเสียดายครับ จะต้องมีการยืนยันตัวตนเพิ่มเติม คุณต้องผ่านกระบวนการที่ซับซ้อนขึ้น",
						"hindi": "दुर्भाग्यपूर्ण। अतिरिक्त प्रमाणीकरण की आवश्यकता होगी। आपको एक अधिक जटिल प्रक्रिया से गुजरना होगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "도대체 뭘 숨기려는 거지?",
						"english": "What on earth are they trying to hide?",
						"japanese": "「一体何を隠そうとしているんだ？」",
						"chinese": "到底想隐藏什么？",
						"french": "Que diable essaient-ils de cacher ?",
						"spanish": "¿Qué demonios están tratando de ocultar?",
						"vietnamese": "Họ đang cố che giấu điều gì vậy?",
						"thai": "พวกเขาพยายามซ่อนอะไรกันแน่?",
						"hindi": "वे आखिर क्या छिपाने की कोशिश कर रहे हैं?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex",
					"content": {
						"korean": "이건 미로가 아니야. 거대한 함정이야.",
						"english": "This isn't a maze. It's a colossal trap.",
						"japanese": "「これは迷路じゃない。巨大な罠だ。」",
						"chinese": "这不是迷宫。这是一个巨大的陷阱。",
						"french": "Ce n'est pas un labyrinthe. C'est un piège colossal.",
						"spanish": "Esto no es un laberinto. Es una trampa colosal.",
						"vietnamese": "Đây không phải là mê cung. Đây là một cái bẫy khổng lồ.",
						"thai": "นี่ไม่ใช่เขาวงกต นี่คือกับดักขนาดมหึมา",
						"hindi": "यह कोई भूलभुलैया नहीं है। यह एक विशाल जाल है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Otto… 처음부터 우릴 이용한 거야!",
						"english": "Otto... he was using us from the start!",
						"japanese": "「オットー…最初から私たちを利用していたのか！」",
						"chinese": "奥托……从一开始就在利用我们！",
						"french": "Otto… il nous utilisait depuis le début !",
						"spanish": "Otto… ¡nos estaba usando desde el principio!",
						"vietnamese": "Otto… hắn đã lợi dụng chúng ta ngay từ đầu!",
						"thai": "อ็อตโต้... เขากำลังใช้เราตั้งแต่แรก!",
						"hindi": "ओटो... वह शुरू से ही हमारा इस्तेमाल कर रहा था!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것을 알기엔, 아직 때가 이릅니다. 마지막 테스트를 통과해 보시겠습니까?",
						"english": "It's too early to know everything. Would you like to pass the final test?",
						"japanese": "「全てを知るには、まだ時期尚早です。最後のテストをクリアしてみませんか？」",
						"chinese": "要了解一切，现在还为时过早。您愿意通过最终测试吗？",
						"french": "Il est encore trop tôt pour tout savoir. Voudriez-vous passer le dernier test ?",
						"spanish": "Es demasiado pronto para saberlo todo. ¿Le gustaría pasar la prueba final?",
						"vietnamese": "Còn quá sớm để biết mọi thứ. Bạn có muốn vượt qua bài kiểm tra cuối cùng không?",
						"thai": "ยังเร็วเกินไปที่จะรู้ทุกสิ่ง คุณอยากจะผ่านการทดสอบครั้งสุดท้ายไหม?",
						"hindi": "सब कुछ जानने के लिए अभी बहुत जल्दी है। क्या आप अंतिम परीक्षा पास करना चाहेंगे?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "아니, 지금 끝낼 거야. 네 시스템은 조작됐어.",
						"english": "No, I'm ending this now. Your system has been compromised.",
						"japanese": "いや、今終わらせる。お前のシステムは操作された。",
						"chinese": "不，我现在就要结束这一切。你的系统被篡改了。",
						"french": "Non, je vais y mettre fin maintenant. Votre système a été compromis.",
						"spanish": "No, lo terminaré ahora. Tu sistema ha sido manipulado.",
						"vietnamese": "Không, tôi sẽ kết thúc nó ngay bây giờ. Hệ thống của ngươi đã bị thao túng.",
						"thai": "ไม่ ฉันจะจบเรื่องนี้เดี๋ยวนี้ ระบบของแกถูกบิดเบือนแล้ว",
						"hindi": "नहीं, मैं इसे अभी खत्म करूँगा। तुम्हारा सिस्टम छेड़छाड़ किया गया है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "보안이 취약했습니다. 처음부터 다시 시작하십시오.",
						"english": "Security compromised. Restart from the beginning.",
						"japanese": "セキュリティが脆弱でした。最初からやり直してください。",
						"chinese": "安全系统被破坏了。请从头开始。",
						"french": "Sécurité compromise. Recommencez depuis le début.",
						"spanish": "Seguridad comprometida. Reinicie desde el principio.",
						"vietnamese": "Bảo mật bị xâm phạm. Vui lòng bắt đầu lại từ đầu.",
						"thai": "ระบบรักษาความปลอดภัยถูกบุกรุก เริ่มต้นใหม่ตั้งแต่ต้น",
						"hindi": "सुरक्षा भंग हो गई। शुरुआत से फिर से शुरू करें।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… Otto…",
						"english": "Damn it… Otto…",
						"japanese": "くそ… オットー…",
						"chinese": "该死… 奥托…",
						"french": "Mince… Otto…",
						"spanish": "Maldita sea… Otto…",
						"vietnamese": "Chết tiệt… Otto…",
						"thai": "บ้าจริง… อ็อตโต้…",
						"hindi": "लानत है… ओटो…"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 침묵했다. 그들의 길은 다시 막혔다.",
						"english": "The system fell silent. Their path was blocked again.",
						"japanese": "システムは沈黙した。彼らの道は再び閉ざされた。",
						"chinese": "系统陷入了沉默。他们的道路再次受阻。",
						"french": "Le système se tut. Leur chemin était de nouveau bloqué.",
						"spanish": "El sistema enmudeció. Su camino fue bloqueado de nuevo.",
						"vietnamese": "Hệ thống im lặng. Con đường của họ lại bị chặn.",
						"thai": "ระบบเงียบลง เส้นทางของพวกเขาถูกปิดกั้นอีกครั้ง",
						"hindi": "सिस्टम खामोश हो गया। उनका रास्ता फिर से बंद हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "일시적인 오류일 뿐입니다. 더 안전한 환경이 당신을 기다립니다.",
						"english": "Just a temporary glitch. A safer environment awaits you.",
						"japanese": "一時的なエラーに過ぎない。より安全な環境があなたを待っている。",
						"chinese": "这只是一个暂时性错误。更安全的环境在等着你。",
						"french": "Juste un problème temporaire. Un environnement plus sûr vous attend.",
						"spanish": "Solo un fallo temporal. Un entorno más seguro te espera.",
						"vietnamese": "Chỉ là một trục trặc tạm thời thôi. Một môi trường an toàn hơn đang chờ đợi ngươi.",
						"thai": "แค่ความผิดพลาดชั่วคราวเท่านั้น สภาพแวดล้อมที่ปลอดภัยกว่ารอคุณอยู่",
						"hindi": "बस एक अस्थायी गड़बड़। एक सुरक्षित वातावरण तुम्हारा इंतजार कर रहा है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "겨우 하나 넘었을 뿐인가… Otto는 어디에 있지?",
						"english": "Only cleared one... Where is Otto?",
						"japanese": "たった一つ乗り越えただけか… Ottoはどこに？",
						"chinese": "才通过一个吗……Otto在哪？",
						"french": "Seulement un de terminé... Où est Otto ?",
						"spanish": "¿Solo uno superado...? ¿Dónde está Otto?",
						"vietnamese": "Chỉ mới vượt qua một cái thôi sao… Otto đang ở đâu?",
						"thai": "เพิ่งผ่านไปแค่ด่านเดียวเองหรือ... Otto อยู่ไหน?",
						"hindi": "बस एक पार किया... Otto कहाँ है?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"speaker": "bex",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "이건 시작에 불과해. 더 깊은 곳으로 가야 해.",
						"english": "This is just the beginning. I need to go deeper.",
						"japanese": "これは始まりに過ぎない。もっと奥深くへ行かなければ。",
						"chinese": "这只是个开始。我需要深入进去。",
						"french": "Ce n'est que le début. Je dois aller plus loin.",
						"spanish": "Esto es solo el principio. Tengo que ir más profundo.",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Tôi phải đi sâu hơn nữa.",
						"thai": "นี่เป็นแค่จุดเริ่มต้น ฉันต้องไปให้ลึกกว่านี้",
						"hindi": "यह तो बस शुरुआत है। मुझे और गहराई में जाना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "의심은 확신이 되어갔다. Otto의 친절 뒤에 숨겨진 진실은 무엇인가?",
						"english": "Doubt turned to certainty. What's the truth hidden behind Otto's kindness?",
						"japanese": "疑念は確信へと変わった。Ottoの親切の裏に隠された真実とは？",
						"chinese": "疑虑变成了确信。Otto的善意背后隐藏着什么真相？",
						"french": "Le doute s'est transformé en certitude. Quelle est la vérité cachée derrière la gentillesse d'Otto ?",
						"spanish": "La duda se convirtió en certeza. ¿Cuál es la verdad oculta tras la amabilidad de Otto?",
						"vietnamese": "Nghi ngờ biến thành sự chắc chắn. Sự thật ẩn giấu đằng sau lòng tốt của Otto là gì?",
						"thai": "ความสงสัยเปลี่ยนเป็นความแน่ใจ อะไรคือความจริงที่ซ่อนอยู่เบื้องหลังความเมตตาของ Otto?",
						"hindi": "संदेह निश्चितता में बदल गया। Otto की दयालुता के पीछे क्या सच्चाई छिपी है?"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "접근 권한이 없습니다. 모든 시도를 차단합니다.",
						"english": "Access denied. All attempts blocked.",
						"japanese": "アクセス拒否。すべての試行を遮断する。",
						"chinese": "访问被拒绝。所有尝试均已阻止。",
						"french": "Accès refusé. Toutes les tentatives sont bloquées.",
						"spanish": "Acceso denegado. Todos los intentos bloqueados.",
						"vietnamese": "Truy cập bị từ chối. Mọi nỗ lực đã bị chặn.",
						"thai": "การเข้าถึงถูกปฏิเสธ ความพยายามทั้งหมดถูกบล็อก",
						"hindi": "पहुँच अस्वीकृत। सभी प्रयास अवरुद्ध।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 진짜 보안 시스템의 핵심인가?",
						"english": "Are you the true core of the security system?",
						"japanese": "お前が真のセキュリティシステムの中核なのか？",
						"chinese": "你是安全系统的真正核心吗？",
						"french": "Êtes-vous le véritable cœur du système de sécurité ?",
						"spanish": "¿Eres el verdadero núcleo del sistema de seguridad?",
						"vietnamese": "Ngươi là cốt lõi thực sự của hệ thống bảo mật sao?",
						"thai": "แกคือแกนหลักที่แท้จริงของระบบรักษาความปลอดภัยหรือ?",
						"hindi": "क्या तुम सुरक्षा प्रणाली का असली मूल हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex",
					"content": {
						"korean": "아니, 그냥 Otto가 만들어낸 또 다른 가짜 방패일 뿐이야.",
						"english": "No, just another fake shield created by Otto.",
						"japanese": "いや、ただのOttoが作り出した偽りの盾に過ぎない。",
						"chinese": "不，只是Otto制造的另一个假防护罩。",
						"french": "Non, juste un autre faux bouclier créé par Otto.",
						"spanish": "No, solo otro escudo falso creado por Otto.",
						"vietnamese": "Không, chỉ là một lá chắn giả khác do Otto tạo ra thôi.",
						"thai": "ไม่ แค่โล่ปลอมอีกอันที่ Otto สร้างขึ้นมาเท่านั้น",
						"hindi": "नहीं, बस Otto द्वारा बनाई गई एक और नकली ढाल।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Otto는 항상 옳습니다. 그의 지시를 따르십시오.",
						"english": "Otto is always right. Follow his commands.",
						"japanese": "Ottoは常に正しい。彼の指示に従え。",
						"chinese": "Otto永远是对的。请遵从他的指示。",
						"french": "Otto a toujours raison. Suivez ses ordres.",
						"spanish": "Otto siempre tiene razón. Siga sus órdenes.",
						"vietnamese": "Otto luôn đúng. Hãy tuân theo mệnh lệnh của anh ấy.",
						"thai": "Otto พูดถูกเสมอ ปฏิบัติตามคำสั่งของเขา",
						"hindi": "Otto हमेशा सही है। उसके आदेशों का पालन करो।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
