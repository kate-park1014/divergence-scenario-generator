export const scenario_PasswordWarden_V0_04 = {
	"scenario_id": "PasswordWarden_V0_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dan": {
			"id": "mon_c19cd322-c98f-4619-a03f-f756ac8c4b36",
			"name": {
				"korean": "댄",
				"english": "Dan",
				"japanese": "ダン",
				"chinese": "丹",
				"french": "Dan",
				"spanish": "Dan",
				"vietnamese": "Dan",
				"thai": "แดน",
				"hindi": "डैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3dcb42c7-9b42-46cd-a663-c577becbb500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6008e6f-833a-4200-b913-87b8aed8ce00/public"
		},
		"otto_reset": {
			"monster_id": "mon_1c987d83-3866-4f68-9106-7397ab4cafe4",
			"name": {
				"korean": "오토 리셋",
				"english": "Otto Reset",
				"japanese": "オットー・リセット",
				"chinese": "奥托·重置",
				"french": "Otto Reset",
				"spanish": "Otto Reset",
				"vietnamese": "Otto Reset",
				"thai": "ออตโต้ รีเซ็ต",
				"hindi": "ओटो रीसेट"
			},
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d8095633-428f-430d-54b7-dd4b90f78000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/22f30e5f-8aa8-44cb-dae4-2e0cd0b29a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝나지 않는 사무실, 끝나지 않는 인증.",
			"친절한 안내자 오토가 돌아왔다. '마지막 단계입니다.'",
			"하지만 시스템은 결코 문을 열어주지 않는다.",
			"점점 빨라지는 답답함 속에서, 진실이 고개를 내민다."
		],
		"english": [
			"Endless office, endless authentication.",
			"Otto, the friendly guide, returned. \"This is the final step.\"",
			"But the system never opens the door.",
			"Amidst growing frustration, the truth emerges."
		],
		"japanese": [
			"終わらないオフィス、終わらない認証。",
			"親切な案内役のオットーが戻ってきた。「最終段階です。」",
			"しかし、システムは決してドアを開けてくれない。",
			"募る苛立ちの中、真実が顔を出す。"
		],
		"chinese": [
			"永无止境的办公室，永无止境的认证。",
			"友善的向导奥托回来了。“这是最后一步。”",
			"但系统从不打开门。",
			"在日益增长的沮丧中，真相浮出水面。"
		],
		"french": [
			"Bureau sans fin, authentification sans fin.",
			"Otto, le guide amical, est revenu. « C'est la dernière étape. »",
			"Mais le système n'ouvre jamais la porte.",
			"Au milieu d'une frustration croissante, la vérité émerge."
		],
		"spanish": [
			"Oficina interminable, autenticación interminable.",
			"Otto, el guía amable, regresó. \"Este es el último paso.\"",
			"Pero el sistema nunca abre la puerta.",
			"Entre la creciente frustración, la verdad emerge."
		],
		"vietnamese": [
			"Văn phòng bất tận, xác thực bất tận.",
			"Otto, người hướng dẫn thân thiện, đã trở lại. \"Đây là bước cuối cùng.\"",
			"Nhưng hệ thống không bao giờ mở cửa.",
			"Giữa sự thất vọng ngày càng tăng, sự thật dần hé lộ."
		],
		"thai": [
			"ออฟฟิศไม่รู้จบ, การยืนยันตัวตนไม่รู้จบ.",
			"อ็อตโต้ ไกด์ผู้เป็นมิตร กลับมาแล้ว \"นี่คือขั้นตอนสุดท้าย\"",
			"แต่ระบบไม่เคยเปิดประตู.",
			"ท่ามกลางความหงุดหงิดที่เพิ่มขึ้น ความจริงก็ปรากฏออกมา."
		],
		"hindi": [
			"अंतहीन कार्यालय, अंतहीन प्रमाणीकरण।",
			"दोस्ताना मार्गदर्शक ओटो लौट आया। \"यह अंतिम चरण है।\"",
			"लेकिन सिस्टम कभी दरवाजा नहीं खोलता।",
			"बढ़ती निराशा के बीच, सच्चाई सामने आती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "otto_reset"
				},
				{
					"speaker": "otto_reset",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래 기다리셨죠? 이제 마지막 단계예요.",
						"english": "You've waited long, haven't you? This is the final step now.",
						"japanese": "大変お待たせしましたね？これが最後のステップです。",
						"chinese": "久等了，是吗？现在是最后一步了。",
						"french": "Vous avez attendu longtemps, n'est-ce pas ? C'est la dernière étape maintenant.",
						"spanish": "Has esperado mucho, ¿verdad? Ahora es el último paso.",
						"vietnamese": "Bạn đã chờ lâu rồi phải không? Đây là bước cuối cùng rồi.",
						"thai": "คุณรอนานแล้วใช่ไหม? นี่คือขั้นตอนสุดท้ายแล้ว.",
						"hindi": "आपने बहुत इंतज़ार किया, है ना? अब यह आखिरी कदम है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마지막이요? 드디어 끝나는 건가요?",
						"english": "The last? Is it finally over?",
						"japanese": "最後ですか？ついに終わるんですか？",
						"chinese": "最后一步？终于要结束了吗？",
						"french": "La dernière ? C'est enfin terminé ?",
						"spanish": "¿El último? ¿Por fin ha terminado?",
						"vietnamese": "Cuối cùng ư? Cuối cùng cũng kết thúc rồi sao?",
						"thai": "สุดท้ายแล้วเหรอ? ในที่สุดก็จบลงแล้วใช่ไหม?",
						"hindi": "आख़िरी? क्या यह आखिरकार खत्म हो रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네. 간단한 비밀번호 확인만 마치면 됩니다.",
						"english": "Yes. You just need to complete a simple password verification.",
						"japanese": "はい。簡単なパスワード確認を終えるだけです。",
						"chinese": "是的。只需完成一个简单的密码验证。",
						"french": "Oui. Il vous suffit de terminer une simple vérification de mot de passe.",
						"spanish": "Sí. Solo necesita completar una verificación de contraseña simple.",
						"vietnamese": "Vâng. Bạn chỉ cần hoàn tất một xác minh mật khẩu đơn giản.",
						"thai": "ใช่. คุณเพียงแค่ต้องทำการยืนยันรหัสผ่านง่ายๆ.",
						"hindi": "हाँ। आपको बस एक साधारण पासवर्ड सत्यापन पूरा करना होगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "otto_reset"
				},
				{
					"emotion": "base",
					"speaker": "otto_reset",
					"content": {
						"korean": "자, 태블릿에 입력해 주세요.",
						"english": "Now, please enter it on the tablet.",
						"japanese": "さあ、タブレットに入力してください。",
						"chinese": "来，请在平板电脑上输入。",
						"french": "Allez, entrez-le sur la tablette.",
						"spanish": "Ahora, por favor, introdúcelo en la tableta.",
						"vietnamese": "Nào, xin hãy nhập vào máy tính bảng.",
						"thai": "เอาล่ะ โปรดกรอกลงในแท็บเล็ต.",
						"hindi": "अब, कृपया इसे टैबलेट में दर्ज करें।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "otto_reset",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "분명 맞게 입력했는데….",
						"english": "I'm sure I entered it correctly...",
						"japanese": "確かに正しく入力したはずなのに…。",
						"chinese": "我明明输入正确了…。",
						"french": "J'étais sûr de l'avoir saisi correctement…",
						"spanish": "Estoy seguro de que lo introduje correctamente…",
						"vietnamese": "Rõ ràng tôi đã nhập đúng mà...",
						"thai": "ฉันแน่ใจว่าฉันพิมพ์ถูกแล้ว...",
						"hindi": "मैंने इसे निश्चित रूप से सही ढंग से दर्ज किया था..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "음… 다시 시도해 보시겠어요? 아니면 새로 만드실 수도 있습니다.",
						"english": "Hmm... Would you like to try again? Or you can create a new one.",
						"japanese": "うーん…もう一度試してみますか？それとも、新しく作成することもできますよ。",
						"chinese": "嗯…您想再试一次吗？或者您也可以创建一个新的。",
						"french": "Hmm… Voudriez-vous réessayer ? Ou vous pouvez en créer un nouveau.",
						"spanish": "Hmm… ¿Le gustaría intentarlo de nuevo? O puede crear uno nuevo.",
						"vietnamese": "Hừm... Bạn có muốn thử lại không? Hoặc bạn có thể tạo một cái mới.",
						"thai": "อืม... คุณอยากลองอีกครั้งไหม? หรือคุณสามารถสร้างใหม่ได้.",
						"hindi": "हम्म... क्या आप फिर से कोशिश करना चाहेंगे? या आप एक नया बना सकते हैं।"
					},
					"emotion": "base",
					"speaker": "otto_reset"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "새로 만들죠, 뭐.",
						"english": "Let's just make a new one.",
						"japanese": "じゃあ、新しく作りましょうか。",
						"chinese": "那就重新创建一个吧。",
						"french": "Bon, on va en créer un nouveau, alors.",
						"spanish": "Bueno, pues hagamos uno nuevo.",
						"vietnamese": "Thôi, mình tạo cái mới vậy.",
						"thai": "งั้นสร้างใหม่แล้วกันครับ/ค่ะ",
						"hindi": "ठीक है, हम नया बना लेते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "벽에는 복잡한 비밀번호 정책 안내문이 붙어 있었다. 이해하기 어려운 조건들.",
						"english": "A complex password policy notice was plastered on the wall. Conditions that were difficult to understand.",
						"japanese": "壁には複雑なパスワードポリシーの案内が貼られていた。理解しがたい条件ばかりだ。",
						"chinese": "墙上贴着一张复杂的密码策略通知。条款难以理解。",
						"french": "Une notice de politique de mot de passe complexe était affichée sur le mur. Des conditions difficiles à comprendre.",
						"spanish": "En la pared había un aviso con una política de contraseñas compleja. Condiciones difíciles de entender.",
						"vietnamese": "Trên tường dán một thông báo chính sách mật khẩu phức tạp. Những điều kiện khó hiểu.",
						"thai": "บนผนังมีประกาศนโยบายรหัสผ่านที่ซับซ้อนติดอยู่ เงื่อนไขที่เข้าใจยาก",
						"hindi": "दीवार पर एक जटिल पासवर्ड नीति का नोटिस चिपका था। शर्तें समझना मुश्किल था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잠깐만, 이렇게까지 복잡해야 해요?",
						"english": "Wait, does it have to be this complicated?",
						"japanese": "ちょっと待って、こんなに複雑にする必要がありますか？",
						"chinese": "等等，有必要这么复杂吗？",
						"french": "Attendez, ça doit être aussi compliqué ?",
						"spanish": "Un momento, ¿tiene que ser tan complicado?",
						"vietnamese": "Khoan đã, có cần phải phức tạp đến mức này không?",
						"thai": "เดี๋ยวสิ ต้องซับซ้อนขนาดนี้เลยเหรอ?",
						"hindi": "एक मिनट, क्या इतना जटिल होना ज़रूरी है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "otto_reset",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아니, 이것도 안 돼요? 대체 뭐가 문제죠?",
						"english": "No, not this either? What in the world is the problem?",
						"japanese": "え、これもダメなんですか？一体何が問題なんですか？",
						"chinese": "不，这个也不行？到底是什么问题？",
						"french": "Non, ça ne marche pas non plus ? Mais qu'est-ce qui ne va pas, au juste ?",
						"spanish": "No, ¿esto tampoco? ¿Cuál es el problema, entonces?",
						"vietnamese": "Không, cái này cũng không được sao? Rốt cuộc là có vấn đề gì vậy?",
						"thai": "ไม่นะ อันนี้ก็ไม่ได้อีกเหรอ? สรุปแล้วปัญหาคืออะไรกันแน่?",
						"hindi": "नहीं, यह भी काम नहीं कर रहा? आखिर दिक्कत क्या है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "otto_reset",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조건에 맞지 않습니다. 너무 걱정 마세요. 거의 다 왔습니다.",
						"english": "It doesn't meet the conditions. Don't worry too much. You're almost there.",
						"japanese": "条件に合いません。ご心配なく。もう少しです。",
						"chinese": "不符合条件。请不要担心。快成功了。",
						"french": "Cela ne remplit pas les conditions. Ne vous inquiétez pas trop. Vous y êtes presque.",
						"spanish": "No cumple las condiciones. No se preocupe demasiado. Ya casi lo tiene.",
						"vietnamese": "Không đáp ứng điều kiện. Đừng lo lắng quá. Sắp xong rồi.",
						"thai": "ไม่ตรงตามเงื่อนไขครับ/ค่ะ ไม่ต้องกังวลมากนะครับ/คะ ใกล้จะสำเร็จแล้ว",
						"hindi": "शर्तें पूरी नहीं होतीं। ज़्यादा चिंता न करें। आप लगभग पहुंच गए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "거의 다 왔다니… 아까부터 그 말만 계속 하는데!",
						"english": "'Almost there'... You've been saying that forever!",
						"japanese": "もう少しですって… さっきからそればっかりじゃないですか！",
						"chinese": "“快成功了”… 你刚才就一直在说这句话！",
						"french": "« Presque là »... Vous n'arrêtez pas de dire ça depuis tout à l'heure !",
						"spanish": "¡«Ya casi lo tienes»... Llevas diciendo eso desde hace rato!",
						"vietnamese": "'Sắp xong rồi'... Từ nãy đến giờ cứ nói mãi câu đó!",
						"thai": "ใกล้จะสำเร็จแล้วเหรอ... พูดคำนี้ตั้งแต่เมื่อกี้แล้วนะ!",
						"hindi": "लगभग पहुंच गए... आप तो कब से यही कह रहे हैं!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼, 마지막으로 인증 코드를 보내드리겠습니다.",
						"english": "Alright, then, I'll send you the verification code one last time.",
						"japanese": "では、最後に認証コードをお送りします。",
						"chinese": "那么，最后我将向您发送验证码。",
						"french": "Bien, alors je vous enverrai le code de vérification une dernière fois.",
						"spanish": "De acuerdo, entonces le enviaré el código de verificación por última vez.",
						"vietnamese": "Vậy thì, cuối cùng tôi sẽ gửi mã xác thực cho bạn.",
						"thai": "งั้น, ผม/ดิฉันจะส่งรหัสยืนยันให้คุณเป็นครั้งสุดท้ายนะครับ/คะ",
						"hindi": "तो, आखिर में मैं आपको सत्यापन कोड भेजूंगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "otto_reset"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "otto_reset",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "인증 코드를 휴대폰으로 보냈습니다. 확인해 주세요.",
						"english": "I've sent the verification code to your phone. Please check it.",
						"japanese": "認証コードを携帯電話に送信しました。ご確認ください。",
						"chinese": "验证码已发送到您的手机。请查收。",
						"french": "Le code de vérification a été envoyé sur votre téléphone. Veuillez vérifier.",
						"spanish": "Hemos enviado el código de verificación a su teléfono. Por favor, compruébelo.",
						"vietnamese": "Mã xác thực đã được gửi đến điện thoại của bạn. Vui lòng kiểm tra.",
						"thai": "เราได้ส่งรหัสยืนยันไปยังโทรศัพท์ของคุณแล้วครับ/ค่ะ กรุณาตรวจสอบด้วย",
						"hindi": "सत्यापन कोड आपके फ़ोन पर भेज दिया गया है। कृपया जांच लें।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "otto_reset"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아무것도 안 왔는데요?",
						"english": "...But nothing came?",
						"japanese": "…何も来てないんですけど？",
						"chinese": "…什么都没收到啊？",
						"french": "...Mais je n'ai rien reçu ?",
						"spanish": "...Pero no me ha llegado nada?",
						"vietnamese": "...Nhưng tôi có nhận được gì đâu?",
						"thai": "...แต่ไม่มีอะไรมาเลยนะครับ/คะ?",
						"hindi": "...लेकिन कुछ भी नहीं आया?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "otto_reset",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네? 잠시만요.",
						"english": "Huh? Just a moment.",
						"japanese": "え？少々お待ちください。",
						"chinese": "嗯？请稍等。",
						"french": "Hein ? Un instant.",
						"spanish": "¿Qué? Un momento.",
						"vietnamese": "Hả? Khoan đã.",
						"thai": "ครับ/ค่ะ? สักครู่นะครับ/คะ",
						"hindi": "क्या? एक मिनट।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "오토의 태블릿 화면이 잠깐 비쳤다. 작은 글씨로 '지연 시간: ∞'라고 쓰여 있었다.",
						"english": "Otto's tablet screen briefly flashed. 'Latency: ∞' was written in small letters.",
						"japanese": "オットーのタブレット画面が一瞬光った。小さな文字で「遅延時間：∞」と書かれていた。",
						"chinese": "奥托的平板电脑屏幕短暂闪烁了一下。小字写着“延迟：∞”。",
						"french": "L'écran de la tablette d'Otto a brièvement clignoté. « Latence : ∞ » y était écrit en petits caractères.",
						"spanish": "La pantalla de la tableta de Otto parpadeó brevemente. En letras pequeñas, se leía \"Latencia: ∞\".",
						"vietnamese": "Màn hình máy tính bảng của Otto nhấp nháy một lúc. Chữ nhỏ ghi 'Độ trễ: ∞'.",
						"thai": "หน้าจอแท็บเล็ตของอ็อตโตะกะพริบแวบหนึ่ง มีข้อความเล็กๆ เขียนว่า 'เวลาแฝง: ∞'",
						"hindi": "ओटो की टैबलेट स्क्रीन पल भर के लिए चमकी। छोटे अक्षरों में लिखा था 'विलंबता: ∞'।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "otto_reset",
					"type": "speech",
					"content": {
						"korean": "시스템 오류인가요? 다시 보내드릴게요. 거의 다 됐습니다.",
						"english": "System error? I'll resend it. Almost done.",
						"japanese": "システムエラーでしょうか？ もう一度送りますね。もうすぐです。",
						"chinese": "系统错误吗？我再发一次。快好了。",
						"french": "Erreur système ? Je le renvoie. C'est presque prêt.",
						"spanish": "¿Error del sistema? Lo reenviaré. Ya casi está.",
						"vietnamese": "Lỗi hệ thống à? Tôi sẽ gửi lại. Gần xong rồi.",
						"thai": "ระบบผิดพลาดเหรอครับ? ผมจะส่งให้ใหม่นะ ใกล้เสร็จแล้วครับ",
						"hindi": "सिस्टम में गड़बड़ी है क्या? मैं इसे फिर से भेजूंगा। बस हो ही गया।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거의 다 됐다뇨! 대체 언제까지 절 붙잡아 둘 건데요!",
						"english": "\"Almost done\"? How long are you going to keep me waiting?!",
						"japanese": "「もうすぐ」ですって！一体いつまで私を待たせるつもりなの！",
						"chinese": "什么叫“快好了”！你到底要拖我到什么时候！",
						"french": "« Presque prêt » ? Vous comptez me retenir encore combien de temps ?!",
						"spanish": "¡¿\"Ya casi está\"?! ¡¿Cuánto tiempo más vas a retenerme?!",
						"vietnamese": "Gần xong rồi á! Rốt cuộc anh còn định giữ tôi lại đến bao giờ nữa!",
						"thai": "“ใกล้เสร็จแล้ว” เหรอ! แล้วจะกั๊กฉันไว้ถึงเมื่อไหร่กันแน่!",
						"hindi": "“बस हो ही गया”?! तुम मुझे कब तक रोके रखोगे?!"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결국… 통과했군요. 하지만 이것이 끝은 아닐 겁니다.",
						"english": "So... you passed. But this won't be the end.",
						"japanese": "結局…通過したんですね。しかし、これが終わりではありません。",
						"chinese": "结果…你通过了。但这不会是结局。",
						"french": "Finalement... vous avez réussi. Mais ce ne sera pas la fin.",
						"spanish": "Así que... pasaste. Pero este no será el final.",
						"vietnamese": "Cuối cùng… ngươi đã vượt qua. Nhưng đây sẽ không phải là kết thúc.",
						"thai": "สุดท้าย...คุณก็ผ่านไปได้สินะ แต่ว่านี่จะไม่ใช่จุดจบ",
						"hindi": "आखिरकार… तुम पास हो गए। लेकिन यह अंत नहीं होगा।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 뭘 더 해야 하는데?",
						"english": "What do you mean? What else do I have to do?",
						"japanese": "どういうことだ？他に何をすればいいんだ？",
						"chinese": "你说什么？我还要做什么？",
						"french": "Qu'est-ce que tu racontes ? Qu'est-ce que je dois faire d'autre ?",
						"spanish": "¿Qué quieres decir? ¿Qué más tengo que hacer?",
						"vietnamese": "Ngươi nói gì? Tôi còn phải làm gì nữa?",
						"thai": "หมายความว่าไง? ฉันต้องทำอะไรอีก?",
						"hindi": "तुम्हारा क्या मतलब है? मुझे और क्या करना है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 시스템은… 당신의 의지로 만들어졌으니까요.",
						"english": "This system... was created by your will.",
						"japanese": "このシステムは…あなたの意志で作られたのですから。",
						"chinese": "这个系统…是由你的意志创造的。",
						"french": "Ce système... a été créé par votre volonté.",
						"spanish": "Este sistema... fue creado por tu voluntad.",
						"vietnamese": "Hệ thống này… được tạo ra bởi ý chí của bạn.",
						"thai": "ระบบนี้… ถูกสร้างขึ้นจากเจตจำนงของคุณ",
						"hindi": "यह प्रणाली... आपकी इच्छा से बनी है।"
					}
				},
				{
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "なんだって？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไรนะ?",
						"hindi": "क्या कहा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시스템의 코어가 깨지자, 사무실의 모든 화면이 꺼졌다. 침묵만이 남았다.",
						"english": "As the system's core shattered, all screens in the office went dark. Only silence remained.",
						"japanese": "システムのコアが壊れると、オフィスの全画面が消灯した。残ったのは沈黙だけだった。",
						"chinese": "系统核心破碎后，办公室的所有屏幕都熄灭了。只剩下寂静。",
						"french": "Quand le cœur du système se brisa, tous les écrans du bureau s'éteignirent. Seul le silence demeura.",
						"spanish": "Cuando el núcleo del sistema se hizo añicos, todas las pantallas de la oficina se apagaron. Solo quedó el silencio.",
						"vietnamese": "Khi lõi hệ thống vỡ vụn, tất cả màn hình trong văn phòng đều tắt. Chỉ còn lại sự im lặng.",
						"thai": "เมื่อแกนหลักของระบบแตกสลาย จอภาพทั้งหมดในสำนักงานก็ดับลง เหลือเพียงความเงียบงัน",
						"hindi": "जैसे ही सिस्टम का कोर टूट गया, कार्यालय की सभी स्क्रीनें बंद हो गईं। केवल चुप्पी रह गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그러나 완벽한 해방감은 아니었다. 어둠 속에서 오토의 친절한 미소가 어른거리는 듯했다.",
						"english": "But it wasn't a complete sense of liberation. In the darkness, Otto's kind smile seemed to flicker.",
						"japanese": "しかし、それは完璧な解放感ではなかった。暗闇の中で、オットーの優しい笑顔がちらつくようだった。",
						"chinese": "然而，这并非彻底的解脱。在黑暗中，奥托友善的笑容似乎在闪烁。",
						"french": "Cependant, ce n'était pas un sentiment de libération totale. Dans l'obscurité, le sourire bienveillant d'Otto semblait vaciller.",
						"spanish": "Sin embargo, no fue una sensación de liberación completa. En la oscuridad, la amable sonrisa de Otto pareció parpadear.",
						"vietnamese": "Tuy nhiên, đó không phải là cảm giác hoàn toàn được giải thoát. Trong bóng tối, nụ cười hiền hậu của Otto dường như đang thấp thoáng.",
						"thai": "แต่มันไม่ใช่ความรู้สึกอิสระที่สมบูรณ์ ในความมืด รอยยิ้มอันอ่อนโยนของอ็อตโตดูเหมือนจะวูบไหว",
						"hindi": "लेकिन यह पूर्ण स्वतंत्रता का अहसास नहीं था। अँधेरे में, ओटो की दयालु मुस्कान टिमटिमाती हुई प्रतीत हुई।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "모든 화면이 일그러지며 거대한 로그인 창이 나타났다. 셀 수 없는 칸으로 이루어진 형체였다.",
						"english": "All screens distorted, and a giant login window appeared. It was a form made of countless fields.",
						"japanese": "全ての画面が歪み、巨大なログインウィンドウが現れた。数え切れないほどの入力欄で構成された形だった。",
						"chinese": "所有屏幕都扭曲了，一个巨大的登录窗口出现。它是由无数个字段组成的。",
						"french": "Tous les écrans se sont déformés, et une immense fenêtre de connexion est apparue. C'était une forme composée d'innombrables champs.",
						"spanish": "Todas las pantallas se distorsionaron y apareció una ventana de inicio de sesión gigante. Era una forma compuesta por innumerables campos.",
						"vietnamese": "Tất cả các màn hình đều bị biến dạng, và một cửa sổ đăng nhập khổng lồ xuất hiện. Nó là một hình dạng được tạo thành từ vô số ô.",
						"thai": "ทุกหน้าจอผิดรูปไปหมด และหน้าต่างล็อกอินขนาดยักษ์ก็ปรากฏขึ้น มันเป็นรูปร่างที่ประกอบด้วยช่องว่างนับไม่ถ้วน",
						"hindi": "सभी स्क्रीन विकृत हो गए, और एक विशाल लॉगिन विंडो प्रकट हुई। यह अनगिनत खानों से बना एक रूप था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "환영합니다. 무한한 대기열에 오신 것을.",
						"english": "Welcome. To the infinite queue.",
						"japanese": "ようこそ。無限の待機列へ。",
						"chinese": "欢迎来到无限队列。",
						"french": "Bienvenue. Dans la file d'attente infinie.",
						"spanish": "Bienvenido. A la cola infinita.",
						"vietnamese": "Chào mừng. Đến với hàng chờ vô tận.",
						"thai": "ยินดีต้อนรับ สู่คิวที่ไม่มีที่สิ้นสุด",
						"hindi": "स्वागत है। अनंत कतार में।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거야?",
						"english": "You... orchestrated all of this?",
						"japanese": "お前が…この全てを仕組んだのか？",
						"chinese": "你…这一切都是你策划的？",
						"french": "C'est toi... qui as orchestré tout ça ?",
						"spanish": "¿Tú... orquestaste todo esto?",
						"vietnamese": "Ngươi… đã dàn dựng tất cả chuyện này sao?",
						"thai": "แก...เป็นคนจัดฉากทั้งหมดนี่เหรอ?",
						"hindi": "तुमने… यह सब रचा है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 결국 {random_boss}를 통과하지 못할 겁니다. 영원히.",
						"english": "You will never pass {random_boss}. Ever.",
						"japanese": "あなたは結局、{random_boss}を突破できないでしょう。永遠に。",
						"chinese": "你终究无法通过{random_boss}。永远不能。",
						"french": "Vous ne passerez jamais {random_boss}. Jamais.",
						"spanish": "Nunca pasarás a {random_boss}. Jamás.",
						"vietnamese": "Ngươi sẽ không bao giờ vượt qua được {random_boss}. Mãi mãi.",
						"thai": "คุณจะไม่มีวันผ่าน {random_boss} ไปได้ ตลอดกาล",
						"hindi": "तुम कभी भी {random_boss} को पार नहीं कर पाओगे। कभी नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마! 난 반드시 나갈 거야!",
						"english": "Don't make me laugh! I will definitely get out!",
						"japanese": "ふざけるな！俺は必ずここを出ていく！",
						"chinese": "别开玩笑了！我一定会出去的！",
						"french": "Ne me fais pas rire ! Je vais sortir, c'est sûr !",
						"spanish": "¡No me hagas reír! ¡Definitivamente saldré de aquí!",
						"vietnamese": "Đừng có đùa! Tôi nhất định sẽ thoát ra!",
						"thai": "อย่ามาล้อเล่นนะ! ฉันจะต้องออกไปให้ได้!",
						"hindi": "मज़ाक मत करो! मैं निश्चित रूप से बाहर निकलूंगा!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "무수한 로그인 창이 탐험대를 에워쌌다. 모든 시야가 잠식되었다.",
						"english": "Countless login windows surrounded the expedition team. All vision was swallowed.",
						"japanese": "無数のログインウィンドウが探検隊を取り囲んだ。視界すべてが侵食された。",
						"chinese": "无数的登录窗口包围了探险队。所有的视野都被吞噬了。",
						"french": "D'innombrables fenêtres de connexion encerclèrent l'équipe d'expédition. Toute visibilité fut engloutie.",
						"spanish": "Innumerables ventanas de inicio de sesión rodearon al equipo de expedición. Toda la visión fue devorada.",
						"vietnamese": "Vô số cửa sổ đăng nhập bao vây đội thám hiểm. Mọi tầm nhìn đều bị nuốt chửng.",
						"thai": "หน้าต่างล็อกอินจำนวนนับไม่ถ้วนโอบล้อมทีมสำรวจ ทัศนวิสัยทั้งหมดถูกกลืนหายไป",
						"hindi": "अनगिनत लॉगिन विंडो ने अभियान दल को घेर लिया। सारी दृष्टि निगल ली गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "당신은 영원히… 이곳을 벗어날 수 없습니다.",
						"english": "You can never... escape this place.",
						"japanese": "あなたは永遠に…ここから抜け出すことはできません。",
						"chinese": "你将永远…无法离开这里。",
						"french": "Vous ne pourrez jamais... échapper à cet endroit.",
						"spanish": "Nunca podrás... escapar de este lugar.",
						"vietnamese": "Bạn sẽ không bao giờ… thoát khỏi nơi này.",
						"thai": "คุณจะไม่มีทาง… หนีจากที่นี่ไปได้",
						"hindi": "आप कभी नहीं... इस जगह से बच सकते।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기 안 해! 다시 시도할 거야!",
						"english": "I won't give up yet! I'll try again!",
						"japanese": "まだ諦めない！もう一度試す！",
						"chinese": "我还没放弃！我会再试一次！",
						"french": "Je n'abandonne pas encore ! Je vais réessayer !",
						"spanish": "¡Aún no me rindo! ¡Lo intentaré de nuevo!",
						"vietnamese": "Tôi chưa bỏ cuộc đâu! Tôi sẽ thử lại!",
						"thai": "ฉันยังไม่ยอมแพ้! จะลองใหม่อีกครั้ง!",
						"hindi": "मैंने अभी तक हार नहीं मानी! मैं फिर कोशिश करूँगा!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋은 자세입니다. 다음 대기열에서 다시 만나죠.",
						"english": "Good attitude. See you in the next queue.",
						"japanese": "良い姿勢ですね。次の待機列でまた会いましょう。",
						"chinese": "很好的态度。我们在下一个队列再见。",
						"french": "Bonne attitude. On se reverra dans la prochaine file d'attente.",
						"spanish": "Buena actitud. Nos vemos en la próxima cola.",
						"vietnamese": "Thái độ tốt đấy. Hẹn gặp lại trong hàng chờ tiếp theo.",
						"thai": "ทัศนคติที่ดี แล้วพบกันใหม่ในคิวถัดไป",
						"hindi": "अच्छी सोच है। अगली कतार में मिलते हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
