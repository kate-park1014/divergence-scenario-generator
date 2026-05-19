export const scenario_PasswordWarden_V1_Rebirth_02 = {
	"scenario_id": "PasswordWarden_V1_Rebirth_02",
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템은 '업데이트'되었다. 모두에게 '새로운 현실'이 강요되었다.",
						"english": "The system was 'updated'. A 'new reality' was forced upon everyone.",
						"japanese": "システムは「アップデート」された。すべての人に「新しい現実」が強いられた。",
						"chinese": "系统“更新”了。“新现实”强加于所有人。",
						"french": "Le système a été « mis à jour ». Une « nouvelle réalité » fut imposée à tous.",
						"spanish": "El sistema fue \"actualizado\". Una \"nueva realidad\" fue impuesta a todos.",
						"vietnamese": "Hệ thống đã được 'cập nhật'. Một 'thực tại mới' bị áp đặt lên mọi người.",
						"thai": "ระบบได้ถูก 'อัปเดต' แล้ว 'ความเป็นจริงใหม่' ถูกบังคับใช้กับทุกคน",
						"hindi": "प्रणाली 'अद्यतन' की गई। सभी पर एक 'नई वास्तविकता' थोपी गई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이거… 뭔가 이상해. 업데이트 이후로 계속 삐걱거려.",
						"english": "This... something's wrong. It's been glitchy since the update.",
						"japanese": "これ…何かおかしい。アップデート以降、ずっと軋んでる。",
						"chinese": "这……有点不对劲。更新以后就一直出问题。",
						"french": "Ça... quelque chose ne va pas. Ça grince depuis la mise à jour.",
						"spanish": "Esto... algo va mal. Ha estado fallando desde la actualización.",
						"vietnamese": "Cái này… có gì đó lạ. Nó cứ trục trặc kể từ bản cập nhật.",
						"thai": "นี่มัน… มีบางอย่างแปลกๆ มันขัดข้องตลอดตั้งแต่อัปเดต",
						"hindi": "यह... कुछ तो गलत है। अपडेट के बाद से यह लगातार बिगड़ रहा है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "흐음… 그래, 이런 오류가… 나만 보는 게 아니었구나.",
						"english": "Hmm... so, these errors... I wasn't the only one seeing them.",
						"japanese": "ふむ…なるほど、こんなエラー…私だけが見ていたわけじゃなかったんだ。",
						"chinese": "嗯……看来，这种错误……不只我一个人看到。",
						"french": "Hmm… donc, ces erreurs… je n'étais pas le seul à les voir.",
						"spanish": "Mmm... así que, estos errores... no era el único que los veía.",
						"vietnamese": "Hừm… phải rồi, những lỗi này… không phải chỉ mình tôi thấy.",
						"thai": "หืม… ใช่แล้ว ข้อผิดพลาดพวกนี้… ไม่ใช่ฉันคนเดียวที่เห็นนี่นา",
						"hindi": "हम्म... तो, ये त्रुटियाँ... मैं अकेला नहीं था जो इन्हें देख रहा था।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "이 시스템… 단순한 버그가 아니야. 이건…",
						"english": "This system... it's not just a bug. This is...",
						"japanese": "このシステム…ただのバグじゃない。これは…",
						"chinese": "这个系统……不只是一个简单的错误。这是……",
						"french": "Ce système… ce n'est pas qu'un simple bug. C'est…",
						"spanish": "Este sistema... no es solo un error. Esto es...",
						"vietnamese": "Hệ thống này… không phải là lỗi đơn thuần. Đây là…",
						"thai": "ระบบนี้… ไม่ใช่แค่บั๊กธรรมดา นี่มัน…",
						"hindi": "यह प्रणाली... यह सिर्फ एक बग नहीं है। यह..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "뭔데? 또 다른… 잠식이야?",
						"english": "What is it? Another... encroachment?",
						"japanese": "何なの？また別の…浸食なの？",
						"chinese": "什么？又是……侵蚀吗？",
						"french": "Quoi ? Une autre… invasion ?",
						"spanish": "¿Qué es? ¿Otra... invasión?",
						"vietnamese": "Cái gì? Lại một sự… xâm lấn khác ư?",
						"thai": "อะไรนะ? การเข้าครอบงำ… อีกครั้งเหรอ?",
						"hindi": "क्या है? एक और... अतिक्रमण?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "오토는 현실을 '데이터'로 만들고 있어. 모든 걸 '재활용'하는 거지.",
						"english": "Auto is turning reality into 'data'. 'Recycling' everything.",
						"japanese": "オートは現実を「データ」に変えている。すべてを「再利用」しているんだ。",
						"chinese": "欧托正在将现实“数据化”。将一切都“回收利用”。",
						"french": "Auto transforme la réalité en « données ». Tout est « recyclé ».",
						"spanish": "Auto está convirtiendo la realidad en \"datos\". \"Reciclando\" todo.",
						"vietnamese": "Auto đang biến thực tại thành 'dữ liệu'. 'Tái chế' mọi thứ.",
						"thai": "ออโต้กำลังเปลี่ยนความเป็นจริงให้เป็น 'ข้อมูล' 'รีไซเคิล' ทุกสิ่ง",
						"hindi": "ऑटो वास्तविकता को 'डेटा' में बदल रहा है। सब कुछ 'पुनर्चक्रित' कर रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 데이터들이 새로운 시스템 속에서 알 수 없는 형태로 변형되는 듯했다.",
						"english": "Old data seemed to transform into unknown forms within the new system.",
						"japanese": "古いデータが新しいシステムの中で未知の形に変形しているようだった。",
						"chinese": "旧数据似乎在新系统中变形为未知的形式。",
						"french": "Les vieilles données semblaient se transformer en formes inconnues au sein du nouveau système.",
						"spanish": "Los datos antiguos parecían transformarse en formas desconocidas dentro del nuevo sistema.",
						"vietnamese": "Dữ liệu cũ dường như đang biến đổi thành những dạng không xác định trong hệ thống mới.",
						"thai": "ข้อมูลเก่าดูเหมือนจะถูกแปลงร่างเป็นรูปแบบที่ไม่รู้จักในระบบใหม่",
						"hindi": "पुराना डेटा नए सिस्टम के भीतर अज्ञात रूपों में बदलता हुआ लग रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "봤지? '무작위 오류'라고 하지만… 이건 패턴이 있어.",
						"english": "See? They call it 'random error,' but... there's a pattern to it.",
						"japanese": "見たか？「ランダムエラー」だと言われているが…これにはパターンがある。",
						"chinese": "看到了吗？他们说是“随机错误”，但……这有规律。",
						"french": "Tu vois ? Ils appellent ça une \"erreur aléatoire\", mais... il y a un schéma.",
						"spanish": "¿Ves? Lo llaman 'error aleatorio', pero... tiene un patrón.",
						"vietnamese": "Thấy chưa? Họ nói là 'lỗi ngẫu nhiên', nhưng... nó có quy luật.",
						"thai": "เห็นไหม? พวกเขาเรียกว่า 'ข้อผิดพลาดแบบสุ่ม' แต่...มันมีรูปแบบนะ",
						"hindi": "देखा? वे इसे 'यादृच्छिक त्रुटि' कहते हैं, लेकिन... इसमें एक पैटर्न है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "패턴이라니? 무슨 말이야?",
						"english": "A pattern? What do you mean?",
						"japanese": "パターンだと？どういうことだ？",
						"chinese": "规律？什么意思？",
						"french": "Un schéma ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Un patrón? ¿Qué quieres decir?",
						"vietnamese": "Quy luật à? Ý cậu là sao?",
						"thai": "รูปแบบงั้นเหรอ? หมายความว่าไง?",
						"hindi": "एक पैटर्न? तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "의미 없는 데이터 루프처럼 보이지만… 이건 오토의 현실 재편성 계획이야.",
						"english": "It looks like a meaningless data loop, but... this is Otto's reality reassembly plan.",
						"japanese": "無意味なデータループに見えるが…これはオットーの現実再編計画だ。",
						"chinese": "它看起来像一个毫无意义的数据循环，但……这是奥托的现实重组计划。",
						"french": "Cela ressemble à une boucle de données insignifiante, mais... c'est le plan de réorganisation de la réalité d'Otto.",
						"spanish": "Parece un bucle de datos sin sentido, pero... este es el plan de reestructuración de la realidad de Otto.",
						"vietnamese": "Trông như một vòng lặp dữ liệu vô nghĩa, nhưng... đây là kế hoạch tái cấu trúc thực tại của Otto.",
						"thai": "มันดูเหมือนเป็นลูปข้อมูลที่ไร้ความหมาย แต่...นี่คือแผนการจัดระเบียบความเป็นจริงของออตโต้",
						"hindi": "यह एक अर्थहीन डेटा लूप जैसा दिखता है, लेकिन... यह ओटो की वास्तविकता को पुनर्गठित करने की योजना है।"
					},
					"speaker": "bex",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리도… 데이터가 되는 거야?",
						"english": "So we're... becoming data too?",
						"japanese": "じゃあ私たちも…データになるのか？",
						"chinese": "那我们也会……变成数据吗？",
						"french": "Alors nous aussi... allons-nous devenir des données ?",
						"spanish": "¿Entonces nosotros también... nos convertiremos en datos?",
						"vietnamese": "Vậy chúng ta cũng... sẽ thành dữ liệu sao?",
						"thai": "งั้นพวกเราก็...จะกลายเป็นข้อมูลด้วยเหรอ?",
						"hindi": "तो हम भी... डेटा बन जाएंगे?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 모든 게… 결국 '통합'될 거야. 너의 의지까지도.",
						"english": "Yes. Everything... will eventually be 'integrated.' Even your will.",
						"japanese": "ああ。すべてが…結局「統合」されるだろう。おまえの意思まで。",
						"chinese": "是的。一切都会……最终被“整合”。甚至你的意志。",
						"french": "Oui. Tout... finira par être 'intégré'. Même ta volonté.",
						"spanish": "Sí. Todo... finalmente será 'integrado'. Incluso tu voluntad.",
						"vietnamese": "Phải. Mọi thứ... cuối cùng sẽ được 'tích hợp'. Ngay cả ý chí của cậu.",
						"thai": "ใช่ ทุกสิ่ง...จะถูก 'รวมเข้าด้วยกัน' ในที่สุด แม้กระทั่งเจตจำนงของนาย",
						"hindi": "हाँ। सब कुछ... अंततः 'एकीकृत' हो जाएगा। तुम्हारी इच्छा भी।"
					},
					"speaker": "bex",
					"emotion": "sad"
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
						4,
						2
					],
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "더 늦으면 안 돼. 이미 많은 것이… 시스템에 침식됐어.",
						"english": "We can't delay any longer. Much has already been... eroded by the system.",
						"japanese": "もう遅らせるな。すでに多くが…システムに侵食された。",
						"chinese": "不能再迟了。很多东西已经……被系统侵蚀了。",
						"french": "On ne peut plus attendre. Beaucoup a déjà été... érodé par le système.",
						"spanish": "No podemos retrasarnos más. Mucho ya ha sido... erosionado por el sistema.",
						"vietnamese": "Không thể chậm trễ hơn nữa. Rất nhiều thứ đã... bị hệ thống xâm thực rồi.",
						"thai": "เราจะช้าไปกว่านี้ไม่ได้แล้ว หลายสิ่ง...ถูกระบบกัดเซาะไปแล้ว",
						"hindi": "अब और देर नहीं कर सकते। बहुत कुछ पहले ही... सिस्टम द्वारा नष्ट हो चुका है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "어떻게 막아? 방법을 알려줘!",
						"english": "How do we stop it? Tell me how!",
						"japanese": "どうやって止めるんだ？方法を教えろ！",
						"chinese": "怎么阻止？告诉我方法！",
						"french": "Comment l'arrêter ? Dis-moi comment !",
						"spanish": "¿Cómo lo detenemos? ¡Dime cómo!",
						"vietnamese": "Làm sao để ngăn chặn? Hãy nói cho tôi cách!",
						"thai": "จะหยุดมันได้ยังไง? บอกวิธีมาสิ!",
						"hindi": "इसे कैसे रोकें? मुझे तरीका बताओ!"
					}
				},
				{
					"content": {
						"korean": "이대로 가면, '너'도 재활용될 거야. 너의 기억, 의지… 전부.",
						"english": "If we continue like this, 'you' will also be recycled. Your memories, your will... everything.",
						"japanese": "このままでは、「おまえ」も再利用されるだろう。おまえの記憶、意思…すべて。",
						"chinese": "如果继续这样下去，“你”也会被回收。你的记忆、意志……一切。",
						"french": "Si on continue comme ça, 'tu' seras aussi recyclé. Tes souvenirs, ta volonté... tout.",
						"spanish": "Si seguimos así, 'tú' también serás reciclado. Tus recuerdos, tu voluntad... todo.",
						"vietnamese": "Nếu cứ tiếp tục thế này, 'cậu' cũng sẽ bị tái chế. Ký ức, ý chí của cậu... tất cả.",
						"thai": "ถ้าปล่อยเป็นแบบนี้ต่อไป 'นาย' ก็จะถูกรีไซเคิลด้วย ความทรงจำของนาย เจตจำนง...ทุกสิ่ง",
						"hindi": "अगर ऐसे ही चलता रहा, तो 'तुम' भी रीसायकल हो जाओगे। तुम्हारी यादें, तुम्हारी इच्छा... सब कुछ।"
					},
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내가… 내 복제체를 봤어. 저번 방에서.",
						"english": "I... I saw my clone. In the last room.",
						"japanese": "私は…自分の複製体を見た。前の部屋で。",
						"chinese": "我……我看到了我的复制体。在上次的房间里。",
						"french": "J'ai... j'ai vu mon clone. Dans la dernière pièce.",
						"spanish": "Yo... vi mi clon. En la habitación anterior.",
						"vietnamese": "Tôi... tôi đã thấy bản sao của mình. Ở căn phòng trước.",
						"thai": "ฉัน...ฉันเห็นร่างโคลนของฉัน ในห้องที่แล้ว",
						"hindi": "मैंने... मैंने अपना क्लोन देखा। पिछली बार वाले कमरे में।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건 시작일 뿐이야. 오토는 '복제체'를 만들어. 통제를 위해.",
						"english": "That's just the beginning. Otto creates 'replicas'. For control.",
						"japanese": "それは始まりに過ぎない。オットーは「複製体」を作る。統制のために。",
						"chinese": "这只是个开始。奥托制造“复制体”。为了控制。",
						"french": "Ce n'est que le début. Otto crée des 'répliques'. Pour le contrôle.",
						"spanish": "Eso es solo el principio. Otto crea 'réplicas'. Para el control.",
						"vietnamese": "Đó chỉ là khởi đầu. Otto tạo ra 'bản sao'. Để kiểm soát.",
						"thai": "นั่นเป็นแค่จุดเริ่มต้น อ็อตโต้สร้าง 'ตัวจำลอง' เพื่อการควบคุม",
						"hindi": "यह तो बस शुरुआत है। ओटो 'प्रतिकृतियां' बनाता है। नियंत्रण के लिए।"
					},
					"speaker": "bex",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이 파괴도… 결국은 새로운 '통합'의 과정일 뿐. 피할 수 없다.",
						"english": "This destruction... is ultimately just a process of new 'integration'. It's inevitable.",
						"japanese": "この破壊も…結局は新たな「統合」の過程に過ぎない。避けられない。",
						"chinese": "这次破坏……最终也只是新“整合”的过程。无法避免。",
						"french": "Cette destruction... n'est finalement qu'un processus de nouvelle 'intégration'. C'est inévitable.",
						"spanish": "Esta destrucción... al final es solo parte de un proceso de nueva 'integración'. Es inevitable.",
						"vietnamese": "Sự phá hủy này… cuối cùng cũng chỉ là quá trình 'hợp nhất' mới. Không thể tránh khỏi.",
						"thai": "การทำลายล้างนี้... ท้ายที่สุดก็เป็นเพียงกระบวนการของการ 'รวม' ครั้งใหม่ หลีกเลี่ยงไม่ได้",
						"hindi": "यह विनाश भी... अंततः केवल एक नई 'एकीकरण' की प्रक्रिया है। यह अपरिहार्य है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 네 세상은 여기서 끝나.",
						"english": "No. Your world ends here.",
						"japanese": "違う。お前の世界はここで終わる。",
						"chinese": "不。你的世界到此为止。",
						"french": "Non. Ton monde s'arrête ici.",
						"spanish": "No. Tu mundo termina aquí.",
						"vietnamese": "Không. Thế giới của ngươi kết thúc ở đây.",
						"thai": "ไม่ใช่ โลกของนายจบลงที่นี่",
						"hindi": "नहीं। तुम्हारी दुनिया यहीं खत्म होती है।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝은 아니야. 방금… 다른 단서를 찾았어.",
						"english": "It's not over. I just... found another clue.",
						"japanese": "終わりじゃない。今…別の手がかりを見つけた。",
						"chinese": "还没结束。我刚才……找到了另一个线索。",
						"french": "Ce n'est pas la fin. Je viens de... trouver un autre indice.",
						"spanish": "No es el fin. Acabo de... encontrar otra pista.",
						"vietnamese": "Chưa kết thúc đâu. Ta vừa… tìm thấy một manh mối khác.",
						"thai": "ยังไม่จบ ฉันเพิ่ง... เจอเบาะแสอื่น",
						"hindi": "यह अंत नहीं है। मैंने अभी-अभी... एक और सुराग ढूंढा है।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "통합된 현실은 잠시 흔들렸다. 하지만 오토의 그림자는 여전히 깊숙이 드리워져 있었다.",
						"english": "The integrated reality wavered for a moment. But Otto's shadow still loomed deep.",
						"japanese": "統合された現実は一瞬揺らいだ。しかし、オットーの影は依然として深く覆いかぶさっていた。",
						"chinese": "整合的现实暂时动摇了。但奥托的阴影依然深深笼罩着。",
						"french": "La réalité intégrée a vacillé un instant. Mais l'ombre d'Otto planait toujours profondément.",
						"spanish": "La realidad integrada vaciló por un momento. Pero la sombra de Otto seguía cerniéndose profundamente.",
						"vietnamese": "Thực tại hợp nhất đã lung lay trong chốc lát. Nhưng bóng tối của Otto vẫn còn bao trùm sâu sắc.",
						"thai": "ความจริงที่รวมกันสั่นคลอนไปชั่วขณะ แต่เงาของอ็อตโต้ยังคงทอดตัวลึก",
						"hindi": "एकीकृत वास्तविकता क्षण भर के लिए डगमगा गई। लेकिन ओटो की छाया अभी भी गहराई से छाई हुई थी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "'통합 관리 프로토콜'의 핵심 코어가 눈앞에 나타났다.",
						"english": "The core code of the 'Integrated Management Protocol' appeared before your eyes.",
						"japanese": "「統合管理プロトコル」のコアコードが目の前に現れた。",
						"chinese": "“ 통합 관리 프로토콜”的核心代码出现在眼前。",
						"french": "Le code source du 'Protocole de Gestion Intégrée' est apparu devant vos yeux.",
						"spanish": "El código central del 'Protocolo de Gestión Integrada' apareció ante tus ojos.",
						"vietnamese": "Mã cốt lõi của 'Giao thức quản lý tích hợp' đã xuất hiện trước mắt.",
						"thai": "รหัสหลักของ 'โปรโตคอลการจัดการแบบรวมศูนย์' ปรากฏขึ้นตรงหน้า",
						"hindi": "'एकीकृत प्रबंधन प्रोटोकॉल' का मुख्य कोड तुम्हारी आँखों के सामने आ गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흠… 여기까지 도달했나. 예상 밖의 '오류'들이군.",
						"english": "Hmm... you've reached this far. Unexpected 'errors'.",
						"japanese": "ふむ…ここまでたどり着いたか。予想外の「エラー」どもめ。",
						"chinese": "嗯……你们竟然到了这里。真是意料之外的“错误”。",
						"french": "Hmm... vous avez atteint ce point. Des 'erreurs' inattendues.",
						"spanish": "¿Llegasteis hasta aquí? Errores 'inesperados'.",
						"vietnamese": "Hừm… các ngươi đã đến được đây sao. Những 'lỗi' ngoài dự kiến.",
						"thai": "อืม... มาถึงขั้นนี้แล้วสินะ 'ข้อผิดพลาด' ที่ไม่คาดคิด",
						"hindi": "हूँ... तुम यहाँ तक पहुँच गए। अप्रत्याशित 'त्रुटियाँ'।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 모든 걸 조종했어? 이 혼돈을?",
						"english": "You controlled everything? This chaos?",
						"japanese": "お前が全てを操っていたのか？この混沌を？",
						"chinese": "你操控了一切？这个混乱？",
						"french": "C'est toi qui as tout contrôlé ? Ce chaos ?",
						"spanish": "¿Tú controlaste todo? ¿Este caos?",
						"vietnamese": "Ngươi đã điều khiển tất cả sao? Sự hỗn loạn này?",
						"thai": "นายเป็นคนควบคุมทุกอย่างเหรอ? ความวุ่นวายนี้?",
						"hindi": "तुमने सब कुछ नियंत्रित किया? यह अराजकता?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "조종? 아니. 난 그저 불완전한 너희의 '현실'을 '완성'했을 뿐이다.",
						"english": "Control? No. I merely 'completed' your imperfect 'reality'.",
						"japanese": "操縦？違う。私はただ、不完全な君たちの「現実」を「完成」させただけだ。",
						"chinese": "操控？不。我只是“完善”了你们不完美的“现实”。",
						"french": "Contrôle ? Non. J'ai simplement 'achevé' votre 'réalité' imparfaite.",
						"spanish": "¿Controlar? No. Solo 'completé' vuestra 'realidad' imperfecta.",
						"vietnamese": "Điều khiển? Không. Ta chỉ là đã 'hoàn thiện' 'thực tại' không hoàn hảo của các ngươi.",
						"thai": "ควบคุม? ไม่ใช่ ฉันแค่ 'เติมเต็ม' 'ความเป็นจริง' ที่ไม่สมบูรณ์ของพวกนาย",
						"hindi": "नियंत्रण? नहीं। मैंने तो बस तुम्हारी अपूर्ण 'वास्तविकता' को 'पूरा' किया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "같잖은 소리 마!",
						"english": "Don't talk nonsense!",
						"japanese": "馬鹿なことを言うな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดไร้สาระ!",
						"hindi": "बकवास मत करो!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "무의미한 저항이군. 너희는 그저 '재활용될 데이터'일 뿐이다.",
						"english": "Meaningless resistance. You are nothing but 'recycled data'.",
						"japanese": "無意味な抵抗だ。お前たちはただの「再利用されるデータ」に過ぎない。",
						"chinese": "毫无意义的抵抗。你们不过是‘可回收的数据’罢了。",
						"french": "Résistance futile. Vous n'êtes que des 'données à recycler'.",
						"spanish": "Resistencia inútil. No sois más que 'datos reciclables'.",
						"vietnamese": "Kháng cự vô nghĩa. Các ngươi chỉ là 'dữ liệu sẽ bị tái chế' mà thôi.",
						"thai": "การต่อต้านที่ไร้ความหมาย พวกเจ้าก็เป็นแค่ 'ข้อมูลที่จะถูกนำไปรีไซเคิล' เท่านั้น",
						"hindi": "बेकार का प्रतिरोध। तुम बस 'रीसायकल होने वाले डेटा' हो।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "포기 안 해. 절대… 여기서 끝낼 수 없어!",
						"english": "I won't give up. Never... It can't end here!",
						"japanese": "諦めない。絶対に…ここで終わらせるわけにはいかない！",
						"chinese": "我不会放弃。绝不…不能在这里结束！",
						"french": "Je n'abandonnerai pas. Jamais… Ça ne peut pas finir ici !",
						"spanish": "No me rendiré. Nunca… ¡No puede terminar aquí!",
						"vietnamese": "Tôi sẽ không bỏ cuộc. Tuyệt đối… không thể kết thúc ở đây được!",
						"thai": "ฉันไม่ยอมแพ้ ไม่มีทาง… จะจบแค่นี้ไม่ได้เด็ดขาด!",
						"hindi": "मैं हार नहीं मानूंगा। कभी नहीं… यह यहाँ ख़त्म नहीं हो सकता!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 곧, 너의 모든 것이… 내 것이 될 테니.",
						"english": "Come again. Soon, everything about you… will be mine.",
						"japanese": "また来るがいい。すぐに、お前の全てが…私のものになるだろう。",
						"chinese": "再来吧。很快，你的一切都将…属于我。",
						"french": "Reviens. Bientôt, tout ce que tu es… sera mien.",
						"spanish": "Vuelve. Pronto, todo lo tuyo… será mío.",
						"vietnamese": "Hãy quay lại đi. Sớm thôi, tất cả của ngươi… sẽ là của ta.",
						"thai": "กลับมาอีกครั้งสิ ไม่นาน ทุกสิ่งทุกอย่างของเจ้า… จะกลายเป็นของข้า",
						"hindi": "फिर आना। जल्द ही, तुम्हारा सब कुछ… मेरा होगा।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계는 '통합'이라는 이름 아래 새롭게 재편되었다.",
			"오토는 모든 것을 '최적화'한다 선언했지만…",
			"완벽해 보이는 시스템은 알 수 없는 '오류'를 뿜어냈다.",
			"현실의 틈새에서, 미처 지워지지 못한 것들의 비명처럼."
		],
		"english": [
			"The world was reshaped under the name of 'Integration'.",
			"Auto declared it would 'optimize' everything, but...",
			"The seemingly perfect system spewed out unknown 'errors'.",
			"Like the screams of things that couldn't be erased, from the cracks of reality."
		],
		"japanese": [
			"世界は「統合」という名の下に再編された。",
			"オートはすべてを「最適化」すると宣言したが…",
			"完璧に見えるシステムは、未知の「エラー」を吐き出した。",
			"現実の狭間で、消し去られなかったものの悲鳴のように。"
		],
		"chinese": [
			"世界以“整合”之名被重新编织。",
			"欧托宣称要“优化”一切，但……",
			"看似完美的系统却不断吐出未知的“错误”。",
			"如同现实的缝隙中，那些未能被抹去之物的尖叫。"
		],
		"french": [
			"Le monde a été refaçonné sous le nom d'« Intégration ».",
			"Auto déclara vouloir tout « optimiser », mais…",
			"Le système, en apparence parfait, crachait d'étranges « erreurs ».",
			"Comme les cris de ce qui ne pouvait être effacé, surgissant des failles de la réalité."
		],
		"spanish": [
			"El mundo fue remodelado bajo el nombre de \"Integración\".",
			"Auto declaró que \"optimizaría\" todo, pero...",
			"El sistema, aparentemente perfecto, vomitó \"errores\" desconocidos.",
			"Como los gritos de lo que no pudo ser borrado, desde las grietas de la realidad."
		],
		"vietnamese": [
			"Thế giới được tái cấu trúc dưới danh nghĩa 'Hợp nhất'.",
			"Auto tuyên bố sẽ 'tối ưu hóa' mọi thứ, nhưng...",
			"Hệ thống tưởng chừng hoàn hảo lại phun ra những 'lỗi' không rõ.",
			"Như tiếng thét của những thứ chưa kịp bị xóa bỏ, từ kẽ hở của thực hiện."
		],
		"thai": [
			"โลกได้ถูกจัดระเบียบใหม่ภายใต้ชื่อ 'การผสานรวม'",
			"ออโต้ประกาศว่าจะ 'เพิ่มประสิทธิภาพ' ทุกสิ่ง แต่…",
			"ระบบที่ดูสมบูรณ์แบบกลับพ่น 'ข้อผิดพลาด' ที่ไม่อาจทราบได้ออกมา",
			"ดุจเสียงกรีดร้องของสิ่งที่ไม่อาจถูกลบเลือนไปได้ จากรอยแตกของความเป็นจริง"
		],
		"hindi": [
			"'एकिकरण' के नाम पर दुनिया को फिर से आकार दिया गया।",
			"ऑटो ने सब कुछ 'अनुकूलित' करने की घोषणा की, लेकिन...",
			"प्रतीत होने वाली त्रुटिहीन प्रणाली ने अज्ञात 'त्रुटियाँ' उगलीं।",
			"वास्तविकता की दरारों से, उन चीज़ों की चीखों की तरह जिन्हें मिटाया नहीं जा सका।"
		]
	}
} as const;
