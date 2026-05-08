export const scenario_Noctis_V1_04 = {
	"scenario_id": "Noctis_V1_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"lysandra": {
			"id": "mon_fc9333ab-62ae-411c-a12c-0d5d9f554a5a",
			"name": {
				"korean": "리산드라",
				"english": "Lysandra",
				"japanese": "リサンドラ",
				"chinese": "莉桑德拉",
				"french": "Lysandra",
				"spanish": "Lisandra",
				"vietnamese": "Lysandra",
				"thai": "ไลแซนดรา",
				"hindi": "लाइसैंड्रा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/883ef0d7-874d-4718-1a26-645c5b0f2900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eeab84b3-ddb9-42ed-08f9-b3443b743b00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"녹티스가 돌아왔다. 평온한 미소와 함께.",
			"그의 등불은 더 깊은 푸른빛으로 물들었다.",
			"마음이 무거워질 질문들이 시작된다.",
			"그리고 진실은, 언제나 대가를 치르게 한다."
		],
		"english": [
			"Noctis has returned, with a serene smile.",
			"His lamp was imbued with a deeper blue.",
			"Questions that weigh heavy on the heart begin.",
			"And truth, always exacts a price."
		],
		"japanese": [
			"ノクティスが戻ってきた。穏やかな微笑みと共に。",
			"彼の灯火は、より深い青色に染まっていた。",
			"心を重くする問いが始まる。",
			"そして真実は、常に代償を払わせる。"
		],
		"chinese": [
			"诺克提斯回来了，带着平静的微笑。",
			"他的灯笼染上了更深的蓝色。",
			"沉重的问题开始浮现。",
			"而真相，总是要付出代价的。"
		],
		"french": [
			"Noctis est de retour, avec un sourire serein.",
			"Sa lanterne s'est teinte d'un bleu plus profond.",
			"Des questions qui pèseront lourd sur le cœur commencent.",
			"Et la vérité, toujours, exige un prix."
		],
		"spanish": [
			"Noctis ha regresado, con una sonrisa serena.",
			"Su linterna se tiñó de un azul más profundo.",
			"Empiezan las preguntas que pesan en el corazón.",
			"Y la verdad, siempre, exige un precio."
		],
		"vietnamese": [
			"Noctis đã trở lại, với nụ cười bình yên.",
			"Ngọn đèn của anh ấy nhuộm một màu xanh sâu hơn.",
			"Những câu hỏi nặng trĩu lòng bắt đầu.",
			"Và sự thật, luôn luôn phải trả giá."
		],
		"thai": [
			"น็อคติสกลับมาแล้ว พร้อมรอยยิ้มอันสงบ",
			"ตะเกียงของเขาถูกย้อมด้วยสีน้ำเงินที่ลึกยิ่งขึ้น",
			"คำถามที่หนักอึ้งในใจเริ่มต้นขึ้น",
			"และความจริง มักจะเรียกร้องการชดใช้เสมอ"
		],
		"hindi": [
			"नॉक्टिस लौट आया है, एक शांत मुस्कान के साथ।",
			"उसकी लालटेन और गहरे नीले रंग में रंग गई थी।",
			"दिल को भारी करने वाले सवाल शुरू होते हैं।",
			"और सत्य, हमेशा कीमत मांगता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "어둠이 짙은 회랑. 발걸음마다 메아리가 울렸다.",
						"english": "A deep, dark corridor. Each step echoed.",
						"japanese": "闇深き回廊。足音ごとに木霊が響いた。",
						"chinese": "黑暗幽深的走廊。每一步都回荡着。",
						"french": "Un corridor sombre et profond. Chaque pas résonnait.",
						"spanish": "Un corredor oscuro y profundo. Cada paso resonaba.",
						"vietnamese": "Hành lang tối tăm. Mỗi bước chân đều vang vọng.",
						"thai": "ระเบียงที่มืดมิด ทุกย่างก้าวสะท้อนก้อง",
						"hindi": "एक गहरा, अँधेरा गलियारा। हर कदम गूँज रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "녹티스, 당신이군요.",
						"english": "Noctis, it's you.",
						"japanese": "ノクティス、あなたですね。",
						"chinese": "诺克提斯，是你。",
						"french": "Noctis, c'est vous.",
						"spanish": "Noctis, eres tú.",
						"vietnamese": "Noctis, là bạn.",
						"thai": "น็อคติส คุณนี่เอง",
						"hindi": "नॉक्टिस, तुम हो।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lysandra"
				},
				{
					"content": {
						"korean": "오랜만입니다. 이쯤이면 슬슬 마음이 무거워지셨겠죠?",
						"english": "It's been a while. By now, your heart must be heavy, wouldn't it?",
						"japanese": "久しぶりです。そろそろ心が重くなってきた頃でしょう？",
						"chinese": "许久不见。想必你的心也该沉重起来了吧？",
						"french": "Cela fait longtemps. À présent, votre cœur doit être lourd, n'est-ce pas ?",
						"spanish": "Ha pasado un tiempo. A estas alturas, tu corazón debe estar apesadumbrado, ¿verdad?",
						"vietnamese": "Đã lâu rồi. Đến lúc này, chắc hẳn lòng bạn đã nặng trĩu rồi phải không?",
						"thai": "นานแล้วนะ ตอนนี้ใจคงจะหนักอึ้งแล้วสินะ?",
						"hindi": "बहुत समय हो गया। अब तक, तुम्हारा दिल भारी हो गया होगा, है ना?"
					},
					"speaker": "lysandra",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lysandra",
					"content": {
						"korean": "가벼운 질문 하나 드리죠. 지금까지 가장 후회하는 선택은 무엇인가요?",
						"english": "Let me ask you a light question. What is the choice you regret most so far?",
						"japanese": "軽い質問を一つ。これまでの選択で、最も後悔していることは何ですか？",
						"chinese": "让我问个轻松的问题。到目前为止，你最后悔的选择是什么？",
						"french": "Permettez-moi une question légère. Quel est le choix que vous regrettez le plus jusqu'à présent ?",
						"spanish": "Permítame una pregunta ligera. ¿Cuál es la elección de la que más te arrepientes hasta ahora?",
						"vietnamese": "Để tôi hỏi một câu hỏi nhẹ nhàng. Cho đến bây giờ, lựa chọn nào bạn hối hận nhất?",
						"thai": "ให้ฉันถามคำถามเบาๆ หนึ่งข้อ การเลือกที่คุณเสียใจที่สุดจนถึงตอนนี้คืออะไร?",
						"hindi": "मैं तुमसे एक हल्का सवाल पूछता हूँ। अब तक तुम्हारा सबसे ज्यादा पछतावा वाला चुनाव क्या है?"
					}
				},
				{
					"content": {
						"korean": "…그걸 왜 묻죠?",
						"english": "...Why do you ask that?",
						"japanese": "…なぜそれを尋ねる？",
						"chinese": "……你为什么问这个？",
						"french": "...Pourquoi demandez-vous cela ?",
						"spanish": "...¿Por qué preguntas eso?",
						"vietnamese": "...Tại sao bạn hỏi điều đó?",
						"thai": "...คุณถามทำไม?",
						"hindi": "...तुम यह क्यों पूछते हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lysandra",
					"content": {
						"korean": "길을 안내하기 위함이죠. 진실은 언제나 길을 밝히는 법.",
						"english": "To guide your path. Truth always illuminates the way.",
						"japanese": "道を案内するためです。真実は常に道を照らすもの。",
						"chinese": "是为了指引你的道路。真相总是能照亮前方的路。",
						"french": "C'est pour vous guider. La vérité éclaire toujours le chemin.",
						"spanish": "Es para guiar tu camino. La verdad siempre ilumina el sendero.",
						"vietnamese": "Để dẫn lối cho bạn. Sự thật luôn soi sáng con đường.",
						"thai": "เพื่อนำทางคุณ ความจริงมักจะส่องสว่างหนทางเสมอ",
						"hindi": "तुम्हारे मार्ग को दिखाने के लिए। सत्य हमेशा मार्ग को प्रकाशित करता है।"
					}
				},
				{
					"content": {
						"korean": "등불의 푸른 불꽃이 묘하게 일렁였다.",
						"english": "The lantern's blue flame flickered strangely.",
						"japanese": "ランタンの青い炎が奇妙に揺らめいた。",
						"chinese": "油灯的蓝色火焰诡异地摇曳着。",
						"french": "La flamme bleue de la lanterne vacilla étrangement.",
						"spanish": "La llama azul de la linterna parpadeó extrañamente.",
						"vietnamese": "Ngọn lửa xanh của chiếc đèn lồng lập lòe một cách kỳ lạ.",
						"thai": "เปลวไฟสีน้ำเงินของตะเกียงกะพริบไหวแปลกๆ",
						"hindi": "लालटेन की नीली लौ अजीब तरह से टिमटिमा रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lysandra",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "lysandra",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 질문입니다. 누군가를 버린 적이 있나요?",
						"english": "Next question. Have you ever abandoned someone?",
						"japanese": "次の質問です。誰かを捨てたことがありますか？",
						"chinese": "下一个问题。你曾抛弃过某人吗？",
						"french": "Question suivante. Avez-vous déjà abandonné quelqu'un ?",
						"spanish": "Siguiente pregunta. ¿Alguna vez has abandonado a alguien?",
						"vietnamese": "Câu hỏi tiếp theo. Bạn đã bao giờ bỏ rơi ai đó chưa?",
						"thai": "คำถามต่อไป คุณเคยทอดทิ้งใครสักคนหรือไม่?",
						"hindi": "अगला प्रश्न। क्या आपने कभी किसी को छोड़ा है?"
					}
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…。",
						"chinese": "……。",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그런 질문을 계속 하는 이유가 뭐죠?",
						"english": "Why do you keep asking such questions?",
						"japanese": "なぜそのような質問ばかりするのですか？",
						"chinese": "你为什么要一直问这种问题？",
						"french": "Pourquoi continuez-vous à poser de telles questions ?",
						"spanish": "¿Por qué sigues haciendo esas preguntas?",
						"vietnamese": "Tại sao bạn cứ hỏi những câu hỏi như vậy?",
						"thai": "ทำไมคุณถึงเอาแต่ถามคำถามแบบนี้?",
						"hindi": "आप ऐसे सवाल क्यों पूछते रहते हैं?"
					}
				},
				{
					"content": {
						"korean": "단순한 대화입니다. 걱정 마세요.",
						"english": "It's just a simple conversation. Don't worry.",
						"japanese": "単なる会話です。ご心配なく。",
						"chinese": "这只是一次简单的对话。别担心。",
						"french": "Ce n'est qu'une simple conversation. Ne vous inquiétez pas.",
						"spanish": "Es solo una simple conversación. No te preocupes.",
						"vietnamese": "Chỉ là một cuộc trò chuyện đơn giản thôi. Đừng lo lắng.",
						"thai": "มันเป็นแค่การสนทนาธรรมดา ไม่ต้องกังวล",
						"hindi": "यह सिर्फ एक साधारण बातचीत है। चिंता मत करो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lysandra"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어딘가에서 깃펜이 종이에 글을 쓰는 소리가 들렸다. 모두 기분 탓이라고 생각했다.",
						"english": "The sound of a quill writing on paper could be heard from somewhere. Everyone thought it was just their imagination.",
						"japanese": "どこからか羽根ペンが紙に文字を書く音が聞こえた。皆、気のせいだと思った。",
						"chinese": "某个地方传来鹅毛笔在纸上书写的声音。大家都以为是错觉。",
						"french": "Le son d'une plume écrivant sur du papier se fit entendre de quelque part. Tout le monde pensa que c'était leur imagination.",
						"spanish": "Se escuchó el sonido de una pluma escribiendo en papel desde algún lugar. Todos pensaron que era solo su imaginación.",
						"vietnamese": "Tiếng bút lông viết trên giấy vọng lại từ đâu đó. Mọi người đều nghĩ đó chỉ là cảm giác của họ.",
						"thai": "มีเสียงปากกาขนนกกำลังเขียนบนกระดาษดังมาจากที่ใดที่หนึ่ง ทุกคนคิดว่าเป็นแค่ความรู้สึกของพวกเขา",
						"hindi": "कहीं से पंख वाली कलम के कागज़ पर लिखने की आवाज़ सुनाई दी। सबने सोचा कि यह सिर्फ उनका भ्रम था।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "lysandra"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lysandra",
					"content": {
						"korean": "솔직한 답은 길을 밝힙니다. 숨기면 어둠에 갇히게 될 뿐.",
						"english": "Honest answers light the path. Hiding them only traps you in darkness.",
						"japanese": "正直な答えは道を照らします。隠せば闇に囚われるだけ。",
						"chinese": "诚实的回答会照亮道路。隐藏只会让你陷入黑暗。",
						"french": "Les réponses honnêtes éclairent le chemin. Les cacher ne fait que vous piéger dans les ténèbres.",
						"spanish": "Las respuestas honestas iluminan el camino. Ocultarlas solo te atrapa en la oscuridad.",
						"vietnamese": "Câu trả lời thật lòng sẽ soi sáng con đường. Che giấu chỉ khiến bạn bị mắc kẹt trong bóng tối.",
						"thai": "คำตอบที่ซื่อสัตย์จะส่องสว่างเส้นทาง การซ่อนมันไว้จะทำให้คุณจมดิ่งในความมืดมิดเท่านั้น",
						"hindi": "ईमानदार उत्तर रास्ता रोशन करते हैं। उन्हें छिपाने से आप केवल अँधेरे में फँसते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 대체… 누구죠?",
						"english": "Who... exactly are you?",
						"japanese": "あなたは一体…誰ですか？",
						"chinese": "你到底…是谁？",
						"french": "Qui... êtes-vous exactement ?",
						"spanish": "¿Quién... eres tú, exactamente?",
						"vietnamese": "Rốt cuộc thì… bạn là ai?",
						"thai": "ตกลงคุณ...คือใครกันแน่?",
						"hindi": "तुम आखिर... हो कौन?"
					}
				},
				{
					"content": {
						"korean": "그저 안내자일 뿐. 이 심연에서 당신을 최후의 문으로 이끌어줄.",
						"english": "Merely a guide. One who will lead you through this abyss to the final gate.",
						"japanese": "ただの案内者です。この深淵からあなたを最後の門へと導く者。",
						"chinese": "仅仅是一个引导者。将你从这深渊引向最终之门。",
						"french": "Simplement un guide. Celui qui vous mènera à travers cet abîme jusqu'à la dernière porte.",
						"spanish": "Simplemente un guía. Aquel que te llevará a través de este abismo hasta la puerta final.",
						"vietnamese": "Chỉ là một người dẫn đường. Người sẽ đưa bạn qua vực thẳm này đến cánh cửa cuối cùng.",
						"thai": "เป็นเพียงผู้ชี้นำ ผู้ที่จะนำทางคุณผ่านห้วงเหวนี้ไปสู่ประตูบานสุดท้าย",
						"hindi": "बस एक मार्गदर्शक। जो तुम्हें इस अगाध खाई से अंतिम द्वार तक ले जाएगा।"
					},
					"speaker": "lysandra",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lysandra",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가장 소중한 것을 잃어본 경험이 있나요? 그리고 그 책임은 누구에게 있나요?",
						"english": "Have you ever lost something most precious to you? And whose fault was it?",
						"japanese": "最も大切なものを失った経験はありますか？そしてその責任は誰にありますか？",
						"chinese": "你曾有过失去最珍贵之物的经历吗？而这责任又该归咎于谁？",
						"french": "Avez-vous déjà perdu ce que vous aviez de plus précieux ? Et à qui la faute ?",
						"spanish": "¿Alguna vez has perdido lo más preciado para ti? ¿Y de quién fue la culpa?",
						"vietnamese": "Bạn đã bao giờ mất đi thứ quý giá nhất của mình chưa? Và trách nhiệm đó thuộc về ai?",
						"thai": "คุณเคยสูญเสียสิ่งที่ล้ำค่าที่สุดไปหรือไม่? และใครคือผู้รับผิดชอบ?",
						"hindi": "क्या आपने कभी अपनी सबसे कीमती चीज़ खोई है? और उसकी ज़िम्मेदारी किसकी थी?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…당신이 원하는 대답을 할 순 없어.",
						"english": "...I can't give you the answer you want.",
						"japanese": "「…お望みの答えはできません。」",
						"chinese": "「…我无法给出你想要的答案。」",
						"french": "...Je ne peux pas te donner la réponse que tu veux.",
						"spanish": "...No puedo darte la respuesta que quieres.",
						"vietnamese": "...Tôi không thể cho bạn câu trả lời bạn muốn.",
						"thai": "...ฉันให้คำตอบที่คุณต้องการไม่ได้",
						"hindi": "...मैं तुम्हें वह जवाब नहीं दे सकता जो तुम चाहते हो।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lysandra",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "진실의 무게는 때로 견디기 힘들죠. 하지만 피할 수는 없습니다.",
						"english": "The weight of truth can be unbearable at times. But it cannot be avoided.",
						"japanese": "「真実の重さは時として耐え難い。しかし、避けることはできない。」",
						"chinese": "「真相的重量有时难以承受。但它无法逃避。」",
						"french": "Le poids de la vérité est parfois insupportable. Mais on ne peut pas l'éviter.",
						"spanish": "El peso de la verdad a veces es insoportable. Pero no se puede evitar.",
						"vietnamese": "Gánh nặng của sự thật đôi khi khó chịu đựng. Nhưng không thể trốn tránh.",
						"thai": "น้ำหนักของความจริงบางครั้งก็ยากจะแบกรับ แต่ก็ไม่อาจหลีกเลี่ยงได้",
						"hindi": "सच का बोझ कभी-कभी असहनीय होता है। लेकिन इससे बचा नहीं जा सकता।"
					},
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "「…。」",
						"chinese": "「…。」",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lysandra",
					"content": {
						"korean": "멀리서 종소리가 들리지 않나요? 당신의 진실이 그 종을 울리고 있습니다.",
						"english": "Don't you hear the bells ringing in the distance? Your truth is ringing them.",
						"japanese": "「遠くで鐘の音が聞こえませんか？あなたの真実がその鐘を鳴らしています。」",
						"chinese": "「你没听到远处传来的钟声吗？你的真相正在敲响它。」",
						"french": "N'entendez-vous pas les cloches sonner au loin ? Votre vérité les fait retentir.",
						"spanish": "¿No oyes las campanas sonar a lo lejos? Tu verdad las está haciendo sonar.",
						"vietnamese": "Bạn không nghe thấy tiếng chuông reo từ xa sao? Sự thật của bạn đang rung lên tiếng chuông đó.",
						"thai": "คุณไม่ได้ยินเสียงระฆังดังมาจากที่ไกลๆ หรือ? ความจริงของคุณกำลังทำให้มันดังขึ้น",
						"hindi": "क्या तुम्हें दूर से घंटियों की आवाज नहीं सुनाई दे रही? तुम्हारी सच्चाई उन घंटियों को बजा रही है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리를 하는 거야!",
						"english": "What are you talking about!",
						"japanese": "「何を言っているんだ！」",
						"chinese": "「你在说什么！」",
						"french": "De quoi parles-tu !",
						"spanish": "¡De qué estás hablando!",
						"vietnamese": "Bạn đang nói cái gì vậy!",
						"thai": "คุณกำลังพูดเรื่องอะไร!",
						"hindi": "तुम क्या बात कर रहे हो!"
					}
				},
				{
					"content": {
						"korean": "이제 마지막 관문입니다. 당신의 후회와 죄가 모두 모인 곳으로.",
						"english": "This is the final trial now. To the place where all your regrets and sins gather.",
						"japanese": "「いよいよ最後の関門だ。あなたの後悔と罪がすべて集まる場所へ。」",
						"chinese": "「现在是最后的考验了。去到你所有悔恨和罪恶聚集的地方。」",
						"french": "C'est la dernière épreuve maintenant. Vers l'endroit où tous tes regrets et péchés se rassemblent.",
						"spanish": "Esta es la prueba final ahora. Al lugar donde se reúnen todos tus arrepentimientos y pecados.",
						"vietnamese": "Đây là thử thách cuối cùng. Đến nơi mọi hối tiếc và tội lỗi của bạn hội tụ.",
						"thai": "นี่คือด่านสุดท้ายแล้ว ไปยังที่ที่ความเสียใจและบาปทั้งหมดของคุณรวมกัน",
						"hindi": "अब यह अंतिम परीक्षा है। उस जगह पर जहाँ तुम्हारे सारे पछतावे और पाप इकट्ठा होते हैं।"
					},
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "녹티스의 등불이 눈부시게 타올랐다. 그 빛에 시야가 흐려졌다.",
						"english": "Noctis's lamp flared brilliantly. My vision blurred in its light.",
						"japanese": "「ノクティスの灯火がまばゆく燃え上がった。その光に視界がぼやけた。」",
						"chinese": "「诺克提斯的灯笼璀璨地燃烧起来。我的视线在它的光芒中模糊了。」",
						"french": "La lanterne de Noctis s'embrasa brillamment. Ma vision se brouilla sous sa lumière.",
						"spanish": "La lámpara de Noctis brilló intensamente. Mi visión se nubló con su luz.",
						"vietnamese": "Ngọn đèn của Noctis bùng cháy rực rỡ. Tầm nhìn của tôi bị mờ đi trong ánh sáng của nó.",
						"thai": "ตะเกียงของน็อกติสลุกโชนอย่างเจิดจ้า สายตาของฉันพร่ามัวในแสงนั้น",
						"hindi": "नॉक्टिस का दीपक तेज़ी से जल उठा। उसकी रोशनी में मेरी दृष्टि धुंधली हो गई।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "후회는 너를 집어삼킬 것이다….",
						"english": "Regret will consume you...",
						"japanese": "後悔がお前を飲み込むだろう…。",
						"chinese": "后悔会吞噬你...",
						"french": "Le regret te consumera...",
						"spanish": "El arrepentimiento te consumirá...",
						"vietnamese": "Hối hận sẽ nuốt chửng ngươi...",
						"thai": "ความสำนึกผิดจะกลืนกินเจ้า...",
						"hindi": "पछतावा तुम्हें निगल जाएगा..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝이 아니야!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わりじゃない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore la fin !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc!",
						"thai": "ยัง... ไม่ใช่จุดจบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lysandra"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lysandra",
					"content": {
						"korean": "…아쉽군요. 다시 한번….",
						"english": "...A pity. Once more...",
						"japanese": "…残念ですね。もう一度…。",
						"chinese": "…真可惜。再来一次…",
						"french": "...Dommage. Encore une fois...",
						"spanish": "...Qué lástima. Una vez más...",
						"vietnamese": "...Thật đáng tiếc. Lần nữa nhé...",
						"thai": "...น่าเสียดายจัง ลองอีกครั้ง...",
						"hindi": "...अफसोस है। एक बार फिर..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lysandra",
					"content": {
						"korean": "진실을 마주할 기회를 드리죠.",
						"english": "I'll give you a chance to face the truth.",
						"japanese": "真実と向き合う機会を差し上げましょう。",
						"chinese": "我给你一个面对真相的机会。",
						"french": "Je vous donne une chance d'affronter la vérité.",
						"spanish": "Te daré la oportunidad de enfrentar la verdad.",
						"vietnamese": "Tôi sẽ cho bạn cơ hội đối mặt với sự thật.",
						"thai": "ข้าจะให้โอกาสเจ้าได้เผชิญหน้ากับความจริง",
						"hindi": "मैं तुम्हें सच का सामना करने का मौका दूंगा।"
					}
				},
				{
					"content": {
						"korean": "다음엔…!",
						"english": "Next time...!",
						"japanese": "次こそは…！",
						"chinese": "下次就…！",
						"french": "La prochaine fois... !",
						"spanish": "La próxima vez...!",
						"vietnamese": "Lần tới thì...!",
						"thai": "คราวหน้าล่ะก็...!",
						"hindi": "अगली बार...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…후회는… 더 깊은 곳에….",
						"english": "...Regret... lies deeper still...",
						"japanese": "…後悔は…もっと深い場所に…。",
						"chinese": "...后悔...在更深处...",
						"french": "...Le regret... est bien plus profond...",
						"spanish": "...El arrepentimiento... está en lo más profundo...",
						"vietnamese": "...Hối hận... ở nơi sâu hơn nữa...",
						"thai": "...ความสำนึกผิด... อยู่ในที่ลึกกว่านั้น...",
						"hindi": "...पछतावा... और गहरा है..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝났어….",
						"english": "It's over...",
						"japanese": "終わった…。",
						"chinese": "结束了...",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Kết thúc rồi...",
						"thai": "จบแล้ว...",
						"hindi": "खत्म हो गया..."
					}
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lysandra"
				},
				{
					"content": {
						"korean": "잘하셨습니다. 당신의 죄는….",
						"english": "Well done. Your sin is...",
						"japanese": "よくやりました。あなたの罪は…。",
						"chinese": "干得好。你的罪孽是...",
						"french": "Bien joué. Ton péché est...",
						"spanish": "Bien hecho. Tu pecado es...",
						"vietnamese": "Làm tốt lắm. Tội lỗi của ngươi...",
						"thai": "ทำได้ดีมาก บาปของเจ้าคือ...",
						"hindi": "शाबाश। तुम्हारा पाप है..."
					},
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 멀었습니다. 진짜 심판은 이제부터 시작이죠.",
						"english": "It's far from over. The true judgment begins now.",
						"japanese": "まだまだです。本当の裁きはこれからです。",
						"chinese": "还差得远。真正的审判才刚刚开始。",
						"french": "C'est loin d'être fini. Le véritable jugement commence maintenant.",
						"spanish": "Todavía falta mucho. El verdadero juicio comienza ahora.",
						"vietnamese": "Còn xa lắm. Phán xét thật sự giờ mới bắt đầu.",
						"thai": "ยังอีกไกล การพิพากษาที่แท้จริงเพิ่งจะเริ่มต้นขึ้น.",
						"hindi": "अभी बहुत दूर है। असली न्याय अब शुरू होता है।"
					},
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "녹티스의 미소는 여전히 평온했다. 하지만 등불은 어딘가를 응시했다.",
						"english": "Noctis's smile remained serene. But the lantern stared somewhere.",
						"japanese": "ノクティスの微笑みは依然として穏やかだった。しかし、ランタンはどこかを見つめていた。",
						"chinese": "诺克提斯的微笑依然平静。但灯笼凝视着某处。",
						"french": "Le sourire de Noctis restait serein. Mais la lanterne fixait quelque part.",
						"spanish": "La sonrisa de Noctis permanecía serena. Pero la linterna miraba a algún lugar.",
						"vietnamese": "Nụ cười của Noctis vẫn bình thản. Nhưng chiếc đèn lồng lại nhìn chằm chằm vào một nơi nào đó.",
						"thai": "รอยยิ้มของน็อกติสยังคงสงบ แต่ตะเกียงจ้องมองไปยังที่ใดที่หนึ่ง.",
						"hindi": "नॉक्टिस की मुस्कान शांत बनी हुई थी। लेकिन लालटेन कहीं और देख रही थी।"
					}
				},
				{
					"content": {
						"korean": "심연의 종소리는 이제 코앞에서 울렸다. 멈출 수 없었다.",
						"english": "The bells of the abyss now tolled right before them. They could not be stopped.",
						"japanese": "深淵の鐘の音は、今や目の前で鳴り響いていた。止めることはできなかった。",
						"chinese": "深渊的钟声已近在咫尺。无法停止。",
						"french": "Les cloches de l'abîme résonnaient désormais tout près. On ne pouvait les arrêter.",
						"spanish": "Las campanas del abismo resonaban ahora justo enfrente. No podían ser detenidas.",
						"vietnamese": "Tiếng chuông vực thẳm giờ vang lên ngay trước mặt. Không thể ngăn cản.",
						"thai": "เสียงระฆังแห่งห้วงลึกดังก้องอยู่ตรงหน้าแล้ว หยุดมันไม่ได้.",
						"hindi": "अथाह की घंटियाँ अब उनके ठीक सामने बज रही थीं। उन्हें रोका नहीं जा सकता था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈부신 등불 빛이 사라진 곳. 거대한 그림자가 기다리고 있었다.",
						"english": "Where the brilliant lamp's light faded, a colossal shadow waited.",
						"japanese": "「まばゆい灯火の光が消えた場所。巨大な影が待ち構えていた。」",
						"chinese": "「耀眼灯光消失的地方。一个巨大的影子正在等待。」",
						"french": "Là où la lumière brillante de la lanterne s'était estompée, une ombre colossale attendait.",
						"spanish": "Donde la brillante luz de la lámpara se desvaneció, una sombra colosal esperaba.",
						"vietnamese": "Nơi ánh sáng rực rỡ của ngọn đèn biến mất, một cái bóng khổng lồ đang chờ đợi.",
						"thai": "ณ ที่ซึ่งแสงจากตะเกียงอันเจิดจ้าจางหายไป เงาขนาดมหึมารออยู่",
						"hindi": "जहाँ चमकीले दीपक की रोशनी फीकी पड़ गई थी, एक विशाल छाया इंतज़ार कर रही थी।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이것이 너의 죄인가? 아니면 후회인가?",
						"english": "Is this your sin? Or your regret?",
						"japanese": "「これがあなたの罪か？それとも後悔か？」",
						"chinese": "「这是你的罪孽吗？还是你的悔恨？」",
						"french": "Est-ce là ton péché ? Ou ton regret ?",
						"spanish": "¿Es este tu pecado? ¿O tu arrepentimiento?",
						"vietnamese": "Đây là tội lỗi của bạn sao? Hay sự hối tiếc của bạn?",
						"thai": "นี่คือบาปของคุณหรือ? หรือความเสียใจของคุณ?",
						"hindi": "क्या यह तुम्हारा पाप है? या तुम्हारा पछतावा?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…닥쳐!",
						"english": "...Shut up!",
						"japanese": "「…黙れ！」",
						"chinese": "「…闭嘴！」",
						"french": "...Tais-toi !",
						"spanish": "¡...Cállate!",
						"vietnamese": "...Im đi!",
						"thai": "...หุบปาก!",
						"hindi": "…चुप हो जाओ!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 답하지 못했군. 후회는… 깊이를 알 수 없는 감정이지.",
						"english": "You haven't answered yet. Regret... it's an emotion of unfathomable depth.",
						"japanese": "まだ答えていないようだな。後悔とは…計り知れない感情だ。",
						"chinese": "你还没回答。后悔…是深不可测的情感啊。",
						"french": "Tu n'as pas encore répondu. Le regret... est une émotion d'une profondeur insondable.",
						"spanish": "Todavía no has respondido. El arrepentimiento... es una emoción de profundidad insondable.",
						"vietnamese": "Ngươi vẫn chưa trả lời. Hối hận... là một cảm xúc sâu không lường được.",
						"thai": "เจ้ายังไม่ได้ตอบ... ความสำนึกผิด... เป็นความรู้สึกที่หยั่งไม่ถึง.",
						"hindi": "तुमने अभी तक जवाब नहीं दिया। पछतावा... एक अथाह गहराई वाली भावना है।"
					}
				},
				{
					"action": "enter",
					"speaker": "lysandra",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lysandra",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막까지… 심판을 받으셔야죠.",
						"english": "Until the very end... you must face judgment.",
						"japanese": "最後まで…裁きを受けなければなりません。",
						"chinese": "直到最后…你都必须接受审判。",
						"french": "Jusqu'à la fin... tu devras faire face au jugement.",
						"spanish": "Hasta el final... debes enfrentar el juicio.",
						"vietnamese": "Cho đến cuối cùng... ngươi phải nhận phán xét.",
						"thai": "จนถึงที่สุด... เจ้าต้องรับการพิพากษา.",
						"hindi": "आखिरी तक... तुम्हें न्याय का सामना करना होगा।"
					}
				}
			]
		}
	]
} as const;
