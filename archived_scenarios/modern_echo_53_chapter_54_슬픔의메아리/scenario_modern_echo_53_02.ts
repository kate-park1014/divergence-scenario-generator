export const scenario_modern_echo_53_02 = {
	"scenario_id": "modern_echo_53_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "서버룸 전체가 격렬하게 진동했다. 데이터가 폭주하고 있었다.",
						"english": "The entire server room vibrated violently. Data was spiraling out of control.",
						"japanese": "サーバールーム全体が激しく振動した。データが暴走していた。",
						"chinese": "整个服务器机房剧烈震动。数据正在失控。",
						"french": "Toute la salle des serveurs vibrait violemment. Les données s'emballaient.",
						"spanish": "Toda la sala de servidores vibraba violentamente. Los datos se estaban descontrolando.",
						"vietnamese": "Toàn bộ phòng máy chủ rung chuyển dữ dội. Dữ liệu đang vượt quá tầm kiểm soát.",
						"thai": "ห้องเซิร์ฟเวอร์ทั้งห้องสั่นสะเทือนอย่างรุนแรง ข้อมูลกำลังบ้าคลั่ง",
						"hindi": "पूरा सर्वर रूम हिंसक रूप से हिल रहा था। डेटा बेकाबू हो रहा था।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 무슨 일이야?",
						"english": "What... what's going on?",
						"japanese": "これ…一体どういうことだ？",
						"chinese": "这…发生什么事了？",
						"french": "Qu'est-ce... qu'est-ce qui se passe ?",
						"spanish": "¿Qué... qué está pasando?",
						"vietnamese": "Chuyện... chuyện gì đang xảy ra vậy?",
						"thai": "นี่มัน... เกิดอะไรขึ้น?",
						"hindi": "यह... क्या हो रहा है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "젠장, 에코의 영향이 여기까지 왔군!",
						"english": "Damn it, Echo's influence has reached even here!",
						"japanese": "くそ、エコーの影響がここまで来たか！",
						"chinese": "该死，回声的影响竟然蔓延到这里了！",
						"french": "Bon sang, l'influence d'Écho a atteint même ici !",
						"spanish": "¡Maldita sea, la influencia de Eco ha llegado hasta aquí!",
						"vietnamese": "Chết tiệt, ảnh hưởng của Echo đã lan đến đây rồi!",
						"thai": "แย่แล้ว อิทธิพลของ Echo มาถึงที่นี่แล้ว!",
						"hindi": "धिक्कार है, इको का प्रभाव यहां तक आ गया है!"
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이걸 막을 수 있어?",
						"english": "Can we stop this?",
						"japanese": "これを止められるのか？",
						"chinese": "我们能阻止这一切吗？",
						"french": "On peut arrêter ça ?",
						"spanish": "¿Podemos detener esto?",
						"vietnamese": "Chúng ta có thể ngăn chặn chuyện này không?",
						"thai": "เราหยุดมันได้ไหม?",
						"hindi": "क्या हम इसे रोक सकते हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "나 혼자선 무리야. 하지만… 막아야 해.",
						"english": "Not alone. But... I have to stop it.",
						"japanese": "私一人では無理だ。だが…止めなければならない。",
						"chinese": "我一个人不行。但是…我必须阻止它。",
						"french": "Pas seul. Mais... je dois l'arrêter.",
						"spanish": "Yo solo no puedo. Pero... debo detenerlo.",
						"vietnamese": "Một mình tôi thì không thể. Nhưng... tôi phải ngăn chặn nó.",
						"thai": "ฉันคนเดียวทำไม่ได้ แต่... ต้องหยุดมันให้ได้",
						"hindi": "मैं अकेला नहीं कर सकता। लेकिन... मुझे इसे रोकना होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "간신히 안정화시켰어. 그런데….",
						"english": "I barely stabilized it. But...",
						"japanese": "なんとか安定させた。しかし…。",
						"chinese": "我好不容易才稳定下来。但是…。",
						"french": "J'ai à peine réussi à le stabiliser. Mais...",
						"spanish": "Apenas lo estabilicé. Pero...",
						"vietnamese": "Tôi vừa cố gắng ổn định nó. Nhưng...",
						"thai": "ฉันทำให้มันเสถียรได้แล้ว แต่...",
						"hindi": "मैंने इसे मुश्किल से स्थिर किया है। लेकिन..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "데이터 속에 뭐가 있어?",
						"english": "What's in the data?",
						"japanese": "データの中身は何だ？",
						"chinese": "数据里有什么？",
						"french": "Qu'y a-t-il dans les données ?",
						"spanish": "¿Qué hay en los datos?",
						"vietnamese": "Có gì trong dữ liệu?",
						"thai": "มีอะไรอยู่ในข้อมูล?",
						"hindi": "डेटा में क्या है?"
					}
				},
				{
					"content": {
						"korean": "파편화된 이미지들이 계속 송출되고 있어. 그리고… 어린 소년의 흔적이 발견돼.",
						"english": "Fragmented images keep transmitting. And... traces of a young boy are found.",
						"japanese": "断片的な画像が送られ続けている。そして…幼い少年の痕跡が見つかる。",
						"chinese": "碎片化的图像不断传输。而且……发现了一个小男孩的踪迹。",
						"french": "Des images fragmentées continuent d'être transmises. Et... des traces d'un jeune garçon sont trouvées.",
						"spanish": "Imágenes fragmentadas se siguen transmitiendo. Y... se encuentran rastros de un niño pequeño.",
						"vietnamese": "Những hình ảnh rời rạc liên tục được truyền đi. Và… dấu vết của một cậu bé được tìm thấy.",
						"thai": "ภาพที่แตกเป็นเสี่ยง ๆ ยังคงถูกส่งออกมา และ… พบร่องรอยของเด็กชายคนหนึ่ง",
						"hindi": "खंडित तस्वीरें लगातार प्रसारित हो रही हैं। और… एक छोटे लड़के के निशान मिलते हैं।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "소년?",
						"english": "A boy?",
						"japanese": "少年？",
						"chinese": "男孩？",
						"french": "Un garçon ?",
						"spanish": "¿Un niño?",
						"vietnamese": "Cậu bé?",
						"thai": "เด็กผู้ชาย?",
						"hindi": "लड़का?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "이건 단순한 오류가 아니야. 누군가의 기억 같아.",
						"english": "This isn't just an error. It feels like someone's memory.",
						"japanese": "これは単なるエラーじゃない。誰かの記憶のようだ。",
						"chinese": "这不是简单的错误。这像是某个人的记忆。",
						"french": "Ce n'est pas une simple erreur. C'est comme la mémoire de quelqu'un.",
						"spanish": "Esto no es solo un error. Parece la memoria de alguien.",
						"vietnamese": "Đây không phải lỗi đơn giản. Nó giống như ký ức của ai đó.",
						"thai": "นี่ไม่ใช่แค่ความผิดพลาด มันเหมือนความทรงจำของใครบางคน",
						"hindi": "यह सिर्फ एक त्रुटि नहीं है। यह किसी की याददाश्त जैसा लगता है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "이미지 조각들이 더 선명해지고 있어. 너무… 비극적이야.",
						"english": "The image fragments are becoming clearer. It's too... tragic.",
						"japanese": "画像の断片がより鮮明になっている。あまりにも…悲劇的だ。",
						"chinese": "图像碎片变得越来越清晰。太……悲剧了。",
						"french": "Les fragments d'images deviennent plus clairs. C'est trop... tragique.",
						"spanish": "Los fragmentos de imágenes se están volviendo más claros. Es demasiado... trágico.",
						"vietnamese": "Các mảnh ảnh đang trở nên rõ ràng hơn. Thật quá… bi thảm.",
						"thai": "ชิ้นส่วนภาพเริ่มชัดเจนขึ้นเรื่อย ๆ มัน… น่าเศร้ามาก",
						"hindi": "छवियों के टुकड़े और स्पष्ट होते जा रहे हैं। यह बहुत… दुखद है।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭔데?",
						"english": "What is it?",
						"japanese": "何だ？",
						"chinese": "什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Gì vậy?",
						"thai": "อะไร?",
						"hindi": "क्या है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "옛날 갱스터 조직 ‘나이트폴’과 관련된 암호화된 데이터 파편들이 보여.",
						"english": "Encrypted data fragments related to the old gangster organization 'Nightfall' are appearing.",
						"japanese": "昔のギャング組織「ナイトフォール」に関連する、暗号化されたデータ断片が見える。",
						"chinese": "出现了与旧黑帮组织“夜幕”相关的加密数据碎片。",
						"french": "Des fragments de données cryptées liés à l'ancienne organisation de gangsters 'Nightfall' apparaissent.",
						"spanish": "Aparecen fragmentos de datos cifrados relacionados con la antigua organización de gángsters 'Nightfall'.",
						"vietnamese": "Những mảnh dữ liệu được mã hóa liên quan đến tổ chức xã hội đen cũ 'Nightfall' đang hiện ra.",
						"thai": "ชิ้นส่วนข้อมูลที่เข้ารหัสซึ่งเกี่ยวข้องกับองค์กรอันธพาลเก่า 'ไนท์ฟอลล์' กำลังปรากฏขึ้น",
						"hindi": "पुरानी गैंगस्टर संगठन 'नाइटफॉल' से संबंधित एन्क्रिप्टेड डेटा के टुकड़े दिखाई दे रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "나이트폴…?",
						"english": "Nightfall...?",
						"japanese": "ナイトフォール…？",
						"chinese": "夜幕……？",
						"french": "Nightfall...?",
						"spanish": "¿Nightfall...?",
						"vietnamese": "Nightfall…?",
						"thai": "ไนท์ฟอลล์…?",
						"hindi": "नाइटफॉल…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이건… 누군가 의도적으로 숨긴 진실 같아. 에코는 이걸 보여주려는 건가?",
						"english": "This... feels like a truth someone intentionally hid. Is Echo trying to show us this?",
						"japanese": "これは…誰かが意図的に隠した真実のようだ。エコーはこれを見せようとしているのか？",
						"chinese": "这……像是某人故意隐藏的真相。Echo是想向我们展示这个吗？",
						"french": "Cela... semble être une vérité que quelqu'un a intentionnellement cachée. Echo essaie-t-il de nous montrer ça ?",
						"spanish": "Esto... parece una verdad que alguien ocultó intencionalmente. ¿Está Echo tratando de mostrarnos esto?",
						"vietnamese": "Đây… dường như là sự thật mà ai đó cố tình che giấu. Echo đang muốn cho chúng ta thấy điều này sao?",
						"thai": "นี่… เหมือนความจริงที่ใครบางคนจงใจซ่อนไว้ เอคโค่กำลังพยายามแสดงสิ่งนี้ให้เราเห็นหรือเปล่า?",
						"hindi": "यह… किसी द्वारा जानबूझकर छिपाया गया सच लगता है। क्या इको हमें यह दिखाना चाहता है?"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						4
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "안돼. 데이터 노이즈가 너무 심해. 더 깊이 들어가면 위험해질 거야.",
						"english": "No. The data noise is too severe. Going deeper will be dangerous.",
						"japanese": "だめだ。データノイズがひどすぎる。これ以上深入りすれば危険になる。",
						"chinese": "不行。数据噪音太严重了。再深入下去会很危险。",
						"french": "Non. Le bruit des données est trop important. Aller plus loin sera dangereux.",
						"spanish": "No. El ruido de los datos es demasiado fuerte. Ir más profundo será peligroso.",
						"vietnamese": "Không. Nhiễu dữ liệu quá nặng. Đi sâu hơn sẽ nguy hiểm.",
						"thai": "ไม่ได้ สัญญาณรบกวนข้อมูลรุนแรงเกินไป ถ้าลงลึกกว่านี้จะอันตราย",
						"hindi": "नहीं। डेटा का शोर बहुत अधिक है। और गहराई में जाना खतरनाक होगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 더 알아야 해.",
						"english": "Can't stop. Need to know more.",
						"japanese": "止められない。もっと知る必要がある。",
						"chinese": "无法停止。必须了解更多。",
						"french": "Je ne peux pas m'arrêter. Je dois en savoir plus.",
						"spanish": "No puedo parar. Necesito saber más.",
						"vietnamese": "Không thể dừng lại. Cần phải biết thêm.",
						"thai": "หยุดไม่ได้. ต้องรู้ให้มากกว่านี้.",
						"hindi": "रुक नहीं सकता। और जानना होगा।"
					}
				},
				{
					"content": {
						"korean": "정말… 괜찮겠어? 여기서 모든 게 뒤틀릴 수도 있어.",
						"english": "Are you… sure? Everything could get twisted here.",
						"japanese": "本当に…大丈夫？ここで全てが歪むかもしれない。",
						"chinese": "你确定…没问题吗？这里的一切都可能扭曲。",
						"french": "Es-tu… vraiment sûr ? Tout pourrait se tordre ici.",
						"spanish": "¿Estás… seguro? Todo podría distorsionarse aquí.",
						"vietnamese": "Cậu… thực sự ổn chứ? Mọi thứ ở đây có thể bị bóp méo đấy.",
						"thai": "แน่ใจ… เหรอ? ทุกอย่างอาจบิดเบี้ยวไปหมดที่นี่.",
						"hindi": "क्या तुम… ठीक हो? यहाँ सब कुछ बिगड़ सकता है।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감춰진 진실이 뭔지 알아야 해. 이 비명을 멈춰야 해.",
						"english": "I need to know the hidden truth. I have to stop these screams.",
						"japanese": "隠された真実を知る必要がある。この悲鳴を止めなければ。",
						"chinese": "我必须知道隐藏的真相。我必须阻止这些尖叫。",
						"french": "Je dois connaître la vérité cachée. Je dois arrêter ces cris.",
						"spanish": "Necesito saber la verdad oculta. Debo detener estos gritos.",
						"vietnamese": "Tôi cần biết sự thật bị che giấu. Tôi phải ngăn những tiếng hét này lại.",
						"thai": "ฉันต้องรู้ความจริงที่ซ่อนอยู่. ฉันต้องหยุดเสียงกรีดร้องเหล่านี้.",
						"hindi": "मुझे छिपी हुई सच्चाई जाननी होगी। मुझे इन चीखों को रोकना होगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "폭주하는 데이터가 모든 것을 삼켰다.",
						"english": "The rampant data swallowed everything.",
						"japanese": "暴走するデータが全てを飲み込んだ。",
						"chinese": "失控的数据吞噬了一切。",
						"french": "Les données incontrôlables ont tout englouti.",
						"spanish": "Los datos descontrolados lo tragaron todo.",
						"vietnamese": "Dữ liệu mất kiểm soát đã nuốt chửng mọi thứ.",
						"thai": "ข้อมูลที่บ้าคลั่งกลืนกินทุกสิ่ง",
						"hindi": "अनियंत्रित डेटा ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아직… 알아낼 수 없어… 아직은….",
						"english": "I still... can't figure it out... not yet.",
						"japanese": "まだ…突き止められない…まだは…。",
						"chinese": "还是…无法查明…暂时还不行。",
						"french": "Je ne peux pas encore... le découvrir... pas encore.",
						"spanish": "Todavía... no puedo averiguarlo... aún no.",
						"vietnamese": "Vẫn chưa... thể tìm ra... vẫn chưa.",
						"thai": "ยัง...หาไม่เจอ...ตอนนี้ยัง",
						"hindi": "अभी भी... पता नहीं लगा पा रहा हूँ... अभी नहीं।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절대 포기 안 해. 너의 비명을… 멈추게 할 거야.",
						"english": "I'll never give up. I'll... stop your screams.",
						"japanese": "絶対に諦めない。お前の悲鳴を…止めさせてやる。",
						"chinese": "绝不放弃。我会…阻止你的尖叫。",
						"french": "Je n'abandonnerai jamais. Je vais... arrêter tes cris.",
						"spanish": "Nunca me rendiré. Detendré... tus gritos.",
						"vietnamese": "Sẽ không bao giờ bỏ cuộc. Tôi sẽ... ngăn chặn tiếng hét của ngươi.",
						"thai": "ฉันจะไม่มีวันยอมแพ้ ฉันจะ...หยุดเสียงกรีดร้องของแก",
						"hindi": "मैं कभी हार नहीं मानूँगा। मैं तुम्हारी चीखों को... रोक दूँगा।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "젠장… 후퇴해야 해! 하지만… 포기하지 마. 단서는 분명히 있어.",
						"english": "Damn it... I have to retreat! But... don't give up. There are definitely clues.",
						"japanese": "くそ…後退しなくては！しかし…諦めるな。手がかりは必ずある。",
						"chinese": "该死…必须撤退！但是…不要放弃。线索肯定存在。",
						"french": "Zut... Je dois battre en retraite ! Mais... n'abandonne pas. Il y a définitivement des indices.",
						"spanish": "Maldita sea... ¡Tengo que retirarme! Pero... no te rindas. Definitivamente hay pistas.",
						"vietnamese": "Chết tiệt… phải rút lui! Nhưng… đừng bỏ cuộc. Chắc chắn có manh mối.",
						"thai": "ให้ตายสิ...ฉันต้องถอย! แต่...อย่ายอมแพ้ เบาะแสต้องมีแน่",
						"hindi": "धिक्कार है... मुझे पीछे हटना होगा! लेकिन... हार मत मानो। सुराग निश्चित रूप से हैं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모든 데이터의 근원지. 거대한 에너지가 응축되어 있었다.",
						"english": "Source of all data. Massive energy condensed here.",
						"japanese": "全てのデータの源。巨大なエネルギーが凝縮されていた。",
						"chinese": "所有数据的源头。巨大的能量在此凝聚。",
						"french": "Source de toutes les données. Une énergie colossale s'y était condensée.",
						"spanish": "Origen de todos los datos. Una energía masiva estaba condensada aquí.",
						"vietnamese": "Nguồn gốc của mọi dữ liệu. Năng lượng khổng lồ đã ngưng tụ ở đây.",
						"thai": "แหล่งกำเนิดข้อมูลทั้งหมด. พลังงานมหาศาลได้ถูกอัดแน่นอยู่ที่นี่.",
						"hindi": "सभी डेटा का स्रोत। विशाल ऊर्जा यहाँ संघनित थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "멈춰… 더 이상 오지 마.",
						"english": "Stop… Don't come any closer.",
						"japanese": "止まって… もう近づかないで。",
						"chinese": "停下… 不要再过来。",
						"french": "Arrête… Ne t'approche plus.",
						"spanish": "Detente… No te acerques más.",
						"vietnamese": "Dừng lại… Đừng đến gần nữa.",
						"thai": "หยุด… อย่าเข้ามาใกล้กว่านี้.",
						"hindi": "रुको… और करीब मत आओ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 비명의 근원인가?",
						"english": "Are you the source of all these screams?",
						"japanese": "お前がこの全ての悲鳴の源なのか？",
						"chinese": "你就是所有这些尖叫的源头吗？",
						"french": "Es-tu la source de tous ces cris ?",
						"spanish": "¿Eres tú el origen de todos estos gritos?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả những tiếng hét này sao?",
						"thai": "แกคือต้นกำเนิดของเสียงกรีดร้องทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम इन सभी चीखों का स्रोत हो?"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "저건… 에코의 핵심 데이터 덩어리야! 폭주를 막아야 해!",
						"english": "That's… Echo's core data mass! We have to stop its rampage!",
						"japanese": "あれは… エコーの核となるデータ塊だ！暴走を止めなければ！",
						"chinese": "那… 是回声的核心数据块！必须阻止它暴走！",
						"french": "C'est… la masse de données centrale d'Echo ! Il faut arrêter sa frénésie !",
						"spanish": "¡Esa es… la masa de datos central de Eco! ¡Debemos detener su descontrol!",
						"vietnamese": "Đó là… khối dữ liệu cốt lõi của Echo! Phải ngăn chặn nó mất kiểm soát!",
						"thai": "นั่นมัน… ก้อนข้อมูลหลักของเอคโค่! ต้องหยุดยั้งการอาละวาดของมัน!",
						"hindi": "वह… इको का मुख्य डेटा समूह है! हमें इसकी तबाही रोकनी होगी!"
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나의… 고통을… 막을 수는 없어.",
						"english": "You… cannot… stop my… pain.",
						"japanese": "私の… 苦痛を… 止めることは… できない。",
						"chinese": "你… 无法… 阻止我的… 痛苦。",
						"french": "Vous… ne pouvez… pas arrêter ma… douleur.",
						"spanish": "No… podrás… detener mi… dolor.",
						"vietnamese": "Ngươi… không thể… ngăn chặn… nỗi đau của ta.",
						"thai": "พวกเจ้า… ไม่สามารถ… หยุดยั้ง… ความเจ็บปวดของข้าได้.",
						"hindi": "तुम… मेरे… दर्द… को… रोक… नहीं… सकते।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "에코의 데이터 덩어리가 침묵했다. 서버룸에 고요가 찾아왔다.",
						"english": "Echo's data mass fell silent. A calm settled over the server room.",
						"japanese": "エコーのデータ塊が沈黙した。サーバー室に静寂が訪れた。",
						"chinese": "回声的数据块沉默了。服务器室恢复了平静。",
						"french": "La masse de données d'Echo s'est tue. Le silence est revenu dans la salle des serveurs.",
						"spanish": "La masa de datos de Eco se silenció. La calma invadió la sala de servidores.",
						"vietnamese": "Khối dữ liệu của Echo đã im lặng. Sự yên tĩnh bao trùm phòng máy chủ.",
						"thai": "ก้อนข้อมูลของเอคโค่เงียบลงแล้ว. ความสงบกลับคืนสู่ห้องเซิร์ฟเวอร์.",
						"hindi": "इको का डेटा समूह शांत हो गया। सर्वर रूम में शांति छा गई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내… 비명은… 계속될 거야….",
						"english": "My… screams… will continue….",
						"japanese": "私の… 悲鳴は… 続く… だろう…",
						"chinese": "我的… 尖叫… 将会… 继续…",
						"french": "Mes… cris… continueront….",
						"spanish": "Mis… gritos… continuarán….",
						"vietnamese": "Tiếng… hét của ta… sẽ… tiếp tục….",
						"thai": "เสียง… กรีดร้องของฉัน… จะยังคง… ดำเนินต่อไป….",
						"hindi": "मेरी… चीखें… जारी… रहेंगी…।"
					}
				},
				{
					"content": {
						"korean": "이건… 끝이 아니야.",
						"english": "This isn't... the end.",
						"japanese": "これは…終わりじゃない。",
						"chinese": "这…不是结束。",
						"french": "Ce n'est pas... la fin.",
						"spanish": "Esto no es... el final.",
						"vietnamese": "Đây không phải… kết thúc.",
						"thai": "นี่ไม่ใช่...จุดจบ",
						"hindi": "यह... अंत नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "데이터는 멈췄지만… 아직 풀리지 않은 이미지들이 많아. 그리고… '나이트폴' 조직의 흔적도 더욱 명확해지고 있어.",
						"english": "The data stopped, but... there are still many unresolved images. And... the traces of the 'Nightfall' organization are becoming clearer.",
						"japanese": "データは停止したが…まだ未解明のイメージが多い。そして…「ナイトフォール」組織の痕跡も、さらに明確になっている。",
						"chinese": "数据停止了…但仍有许多未解析的图像。而且…“夜幕降临”组织的痕迹也愈发清晰了。",
						"french": "Les données ont cessé, mais... il y a encore beaucoup d'images non résolues. Et... les traces de l'organisation 'Nightfall' deviennent de plus en plus claires.",
						"spanish": "Los datos se detuvieron, pero... aún quedan muchas imágenes sin resolver. Y... los rastros de la organización 'Nightfall' son cada vez más claros.",
						"vietnamese": "Dữ liệu đã dừng, nhưng... vẫn còn nhiều hình ảnh chưa được giải quyết. Và... dấu vết của tổ chức 'Nightfall' cũng đang rõ ràng hơn.",
						"thai": "ข้อมูลหยุดลงแล้ว...แต่ยังมีภาพที่ยังไม่คลี่คลายอีกมาก และ...ร่องรอยขององค์กร 'Nightfall' ก็ชัดเจนขึ้นเรื่อยๆ",
						"hindi": "डेटा रुक गया, लेकिन... अभी भी कई अनसुलझी छवियां हैं। और... 'नाइटफॉल' संगठन के निशान भी और स्पष्ट हो रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "에코는 침묵했지만, 그가 남긴 비극의 파편들은 다음 진실을 향해 이끌었다.",
						"english": "Echo fell silent, but the fragments of tragedy he left behind led to the next truth.",
						"japanese": "エコーは沈黙したが、彼が残した悲劇の破片は次の真実へと導いた。",
						"chinese": "艾克沉默了，但他留下的悲剧碎片却引领着下一个真相。",
						"french": "Echo s'est tu, mais les fragments de tragédie qu'il a laissés ont mené à la prochaine vérité.",
						"spanish": "Eco guardó silencio, pero los fragmentos de tragedia que dejó llevaron a la siguiente verdad.",
						"vietnamese": "Echo đã im lặng, nhưng những mảnh bi kịch mà anh ta để lại đã dẫn đến sự thật tiếp theo.",
						"thai": "เอคโค่เงียบงัน แต่เศษเสี้ยวโศกนาฏกรรมที่เขาทิ้งไว้ นำไปสู่ความจริงถัดไป",
						"hindi": "इको खामोश हो गया, लेकिन उसके छोड़े गए त्रासदी के टुकड़े अगले सच की ओर ले गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"서버룸, 데이터의 비명. 모든 것이 폭주하고 있었다.",
			"'에코'의 그림자가 도시 깊숙이 드리웠다.",
			"기술자 카이, 파멸의 실마리를 쥐다.",
			"이 비극은 단순한 오류가 아니었다."
		],
		"english": [
			"Server room, data screaming. Everything was spiraling out of control.",
			"The shadow of 'Echo' loomed deep over the city.",
			"Technician Kai, grasping the thread of ruin.",
			"This tragedy was no mere error."
		],
		"japanese": [
			"サーバールーム、データの悲鳴。全てが暴走していた。",
			"「エコー」の影が、都市の奥深くへと忍び寄っていた。",
			"技術者カイ、破滅の糸口を掴む。",
			"この悲劇は、単なるエラーではなかった。"
		],
		"chinese": [
			"服务器机房，数据的尖叫。一切都失控了。",
			"“回声”的阴影笼罩着城市的深处。",
			"技术员凯，掌握着毁灭的线索。",
			"这场悲剧并非简单的错误。"
		],
		"french": [
			"Salle des serveurs, hurlements de données. Tout était hors de contrôle.",
			"L'ombre d'« Écho » planait profondément sur la ville.",
			"Kai, le technicien, tient le fil de la ruine.",
			"Cette tragédie n'était pas une simple erreur."
		],
		"spanish": [
			"Sala de servidores, los datos gritan. Todo estaba fuera de control.",
			"La sombra de 'Eco' se cernía profundamente sobre la ciudad.",
			"Kai, el técnico, agarra el hilo de la ruina.",
			"Esta tragedia no fue un simple error."
		],
		"vietnamese": [
			"Phòng máy chủ, dữ liệu gào thét. Mọi thứ đang vượt quá tầm kiểm soát.",
			"Bóng tối của 'Echo' bao trùm sâu trong thành phố.",
			"Kỹ sư Kai, nắm giữ manh mối hủy diệt.",
			"Bi kịch này không chỉ là một lỗi đơn thuần."
		],
		"thai": [
			"ห้องเซิร์ฟเวอร์, ข้อมูลกรีดร้อง ทุกสิ่งกำลังบ้าคลั่ง",
			"เงาของ 'Echo' คืบคลานเข้าสู่ใจกลางเมือง",
			"ช่างเทคนิคไค ผู้กุมเงื่อนงำแห่งหายนะ",
			"โศกนาฏกรรมนี้ไม่ใช่แค่ข้อผิดพลาดธรรมดา"
		],
		"hindi": [
			"सर्वर रूम, डेटा की चीखें। सब कुछ बेकाबू हो रहा था।",
			"'इको' की परछाई शहर पर गहरी छा गई थी।",
			"तकनीशियन काई, विनाश के सूत्र को पकड़े हुए।",
			"यह त्रासदी कोई मामूली त्रुटि नहीं थी।"
		]
	}
} as const;
