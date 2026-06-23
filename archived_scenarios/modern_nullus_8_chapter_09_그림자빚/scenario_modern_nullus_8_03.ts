export const scenario_modern_nullus_8_03 = {
	"scenario_id": "modern_nullus_8_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"금고 속 단서, Nullus의 그림자를 쫓는다.",
			"도시의 불안한 변화. 존재가 흐릿해지는 사람들.",
			"단순한 오류일까? 아니면… 의도된 조작?",
			"진실은 언제나 불길한 모습으로 다가왔다."
		],
		"english": [
			"Clues in the vault, chasing Nullus's shadow.",
			"Uneasy changes in the city. People's existence fading.",
			"A simple error? Or... an intentional manipulation?",
			"Truth always arrived in an ominous guise."
		],
		"japanese": [
			"金庫の中の手がかり、Nullusの影を追う。",
			"都市の不穏な変化。存在が曖昧になる人々。",
			"単なるエラーか？それとも…意図的な操作か？",
			"真実はいつも不吉な姿で現れた。"
		],
		"chinese": [
			"金库中的线索，追逐Nullus的影子。",
			"城市不安的变化。人们的存在变得模糊。",
			"仅仅是错误吗？还是……蓄意的操纵？",
			"真相总是以不祥的面貌出现。"
		],
		"french": [
			"Des indices dans le coffre, à la poursuite de l'ombre de Nullus.",
			"Des changements inquiétants dans la ville. L'existence des gens s'estompe.",
			"Une simple erreur ? Ou... une manipulation intentionnelle ?",
			"La vérité est toujours apparue sous une forme sinistre."
		],
		"spanish": [
			"Pistas en la bóveda, persiguiendo la sombra de Nullus.",
			"Cambios inquietantes en la ciudad. La existencia de las personas se desvanece.",
			"¿Un simple error? ¿O... una manipulación intencionada?",
			"La verdad siempre llegó con un aspecto siniestro."
		],
		"vietnamese": [
			"Manh mối trong két sắt, truy đuổi bóng của Nullus.",
			"Những thay đổi bất an trong thành phố. Sự tồn tại của con người đang mờ dần.",
			"Một lỗi đơn giản? Hay… một sự thao túng có chủ ý?",
			"Sự thật luôn xuất hiện dưới một hình dạng đáng ngại."
		],
		"thai": [
			"เบาะแสในห้องนิรภัย ไล่ล่าเงาของ Nullus",
			"การเปลี่ยนแปลงที่น่าไม่สบายใจในเมือง ผู้คนเริ่มเลือนหาย",
			"ความผิดพลาดง่ายๆ หรือไม่... หรือการบิดเบือนโดยเจตนา?",
			"ความจริงมักจะมาในรูปแบบที่เป็นลางร้ายเสมอ"
		],
		"hindi": [
			"तिजोरी में सुराग, नलुस की परछाई का पीछा करते हुए।",
			"शहर में असहज बदलाव। लोगों का अस्तित्व धुंधला रहा है।",
			"एक साधारण त्रुटि? या… एक जानबूझकर की गई हेरफेर?",
			"सत्य हमेशा अशुभ रूप में आया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "금고에서 얻은 단서. Nullus의 과거를 향한 추적이 시작된다.",
						"english": "Clues from the vault. The pursuit of Nullus's past begins.",
						"japanese": "金庫から得た手がかり。Nullusの過去を追う捜査が始まる。",
						"chinese": "从金库获得的线索。追查Nullus过去的行动开始了。",
						"french": "Indices du coffre. La poursuite du passé de Nullus commence.",
						"spanish": "Pistas de la bóveda. La búsqueda del pasado de Nullus comienza.",
						"vietnamese": "Manh mối từ két sắt. Cuộc truy tìm quá khứ của Nullus bắt đầu.",
						"thai": "เบาะแสจากห้องนิรภัย การตามล่าอดีตของ Nullus เริ่มต้นขึ้น",
						"hindi": "तिजोरी से मिले सुराग। नलुस के अतीत की खोज शुरू होती है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 단서, 대체 어디로 향하는 거야?",
						"english": "Where does this clue lead, exactly?",
						"japanese": "この手がかり、一体どこへ向かってるんだ？",
						"chinese": "这条线索，到底通向哪里？",
						"french": "Où mène cet indice, exactement ?",
						"spanish": "¿A dónde lleva esta pista, exactamente?",
						"vietnamese": "Manh mối này, rốt cuộc dẫn đến đâu?",
						"thai": "เบาะแสนี้จะนำไปสู่ที่ไหนกันแน่?",
						"hindi": "यह सुराग आखिर कहाँ ले जा रहा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐… 사람들 그림자가 깜빡였어.",
						"english": "Wait... people's shadows flickered.",
						"japanese": "待て…人々の影が点滅した。",
						"chinese": "等等……人们的影子闪烁了一下。",
						"french": "Attends... les ombres des gens ont vacillé.",
						"spanish": "Espera... las sombras de la gente parpadearon.",
						"vietnamese": "Khoan đã… bóng người vừa nhấp nháy.",
						"thai": "เดี๋ยวก่อน... เงาของผู้คนกระพริบ",
						"hindi": "रुको… लोगों की परछाईं झिलमिलाई।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "착각이겠지. 피곤한가 봐.",
						"english": "Must be my imagination. I must be tired.",
						"japanese": "気のせいだろう。疲れているんだ。",
						"chinese": "大概是错觉吧。我可能太累了。",
						"french": "Ça doit être mon imagination. Je dois être fatigué.",
						"spanish": "Debe ser mi imaginación. Debo estar cansado.",
						"vietnamese": "Chắc là tôi tưởng tượng thôi. Chắc tôi mệt rồi.",
						"thai": "คงเป็นแค่จินตนาการ ฉันคงเหนื่อย",
						"hindi": "यह मेरी कल्पना होगी। मैं थका हुआ हूँ।"
					},
					"type": "speech",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "너희도 그걸 봤나? 존재 소거 현상.",
						"english": "Did you see it too? The existence erasure phenomenon.",
						"japanese": "君たちもそれを見たか？存在消去現象を。",
						"chinese": "你们也看到了吗？存在抹消现象。",
						"french": "Vous l'avez vu aussi ? Le phénomène d'effacement de l'existence.",
						"spanish": "¿También lo visteis? El fenómeno de borrado de existencia.",
						"vietnamese": "Các cậu cũng thấy rồi sao? Hiện tượng xóa bỏ sự tồn tại.",
						"thai": "พวกคุณก็เห็นมันด้วยเหรอ? ปรากฏการณ์การลบตัวตน",
						"hindi": "क्या तुमने भी वह देखा? अस्तित्व मिटाने की घटना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "존재 소거?",
						"english": "Existence erasure?",
						"japanese": "存在消去？",
						"chinese": "存在抹消？",
						"french": "Effacement de l'existence ?",
						"spanish": "¿Borrado de existencia?",
						"vietnamese": "Xóa bỏ sự tồn tại?",
						"thai": "การลบตัวตน?",
						"hindi": "अस्तित्व मिटाना?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "단순한 오류가 아니야. 데이터상으로… 의도된 조작이야.",
						"english": "It's not a simple error. According to the data... it's an intentional manipulation.",
						"japanese": "単なるエラーじゃない。データ上は…意図的な操作だ。",
						"chinese": "这不是一个简单的错误。根据数据显示……这是一次有意的操纵。",
						"french": "Ce n'est pas une simple erreur. D'après les données... c'est une manipulation intentionnelle.",
						"spanish": "No es un simple error. Según los datos... es una manipulación intencionada.",
						"vietnamese": "Đây không phải lỗi đơn thuần. Theo dữ liệu... đây là một sự thao túng có chủ đích.",
						"thai": "นี่ไม่ใช่แค่ความผิดพลาดธรรมดา จากข้อมูล... มันคือการบงการโดยเจตนา",
						"hindi": "यह कोई साधारण त्रुटि नहीं है। डेटा के अनुसार... यह एक जानबूझकर की गई हेराफेरी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 시스템을 조작하고 있어.",
						"english": "Someone is manipulating the system.",
						"japanese": "誰かがシステムを操作している。",
						"chinese": "有人正在操纵系统。",
						"french": "Quelqu'un manipule le système.",
						"spanish": "Alguien está manipulando el sistema.",
						"vietnamese": "Ai đó đang thao túng hệ thống.",
						"thai": "มีคนกำลังบงการระบบอยู่",
						"hindi": "कोई सिस्टम में हेरफेर कर रहा है।"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "분석 결과는 더 명확해졌어.",
						"english": "The analysis results are clearer now.",
						"japanese": "分析結果はもっと明確になった。",
						"chinese": "分析结果更加明确了。",
						"french": "Les résultats de l'analyse sont plus clairs.",
						"spanish": "Los resultados del análisis son más claros.",
						"vietnamese": "Kết quả phân tích đã rõ ràng hơn.",
						"thai": "ผลการวิเคราะห์ชัดเจนขึ้นแล้ว",
						"hindi": "विश्लेषण के परिणाम अब और स्पष्ट हो गए हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "누군가 고의로, 사람들의 존재를 지우고 있어.",
						"english": "Someone is intentionally erasing people's existence.",
						"japanese": "誰かが故意に、人々の存在を消している。",
						"chinese": "有人故意抹去了人们的存在。",
						"french": "Quelqu'un efface délibérément l'existence des gens.",
						"spanish": "Alguien está borrando intencionalmente la existencia de las personas.",
						"vietnamese": "Ai đó đang cố ý xóa sổ sự tồn tại của mọi người.",
						"thai": "มีคนกำลังลบเลือนการมีอยู่ของผู้คนโดยเจตนา",
						"hindi": "कोई जानबूझकर लोगों के अस्तित्व को मिटा रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억까지 지워버린다고?",
						"english": "Erasing even memories?",
						"japanese": "記憶まで消すってこと？",
						"chinese": "连记忆也要抹去吗？",
						"french": "Effacer même les souvenirs ?",
						"spanish": "¿Borrar incluso los recuerdos?",
						"vietnamese": "Xóa sổ cả ký ức sao?",
						"thai": "ลบความทรงจำด้วยงั้นเหรอ?",
						"hindi": "यादें भी मिटा रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "흔적조차 남지 않게. 이건 Nullus 뒤의 거대한 그림자야.",
						"english": "Leaving no trace. This is the massive shadow behind Nullus.",
						"japanese": "痕跡すら残さない。これはNullusの背後にある巨大な影だ。",
						"chinese": "不留一丝痕迹。这是Nullus背后巨大的阴影。",
						"french": "Ne laissant aucune trace. C'est l'ombre massive derrière Nullus.",
						"spanish": "Sin dejar rastro. Esta es la sombra masiva detrás de Nullus.",
						"vietnamese": "Không để lại dấu vết gì. Đây là cái bóng khổng lồ đứng sau Nullus.",
						"thai": "ไม่ทิ้งแม้แต่ร่องรอย นี่คือเงามืดขนาดใหญ่ที่อยู่เบื้องหลัง Nullus",
						"hindi": "कोई निशान नहीं छोड़ रहा। यह Nullus के पीछे की विशाल छाया है।"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이대로 가면… 도시 전체가 지워질 수도 있어.",
						"english": "If this continues... the entire city could be erased.",
						"japanese": "このままだと…都市全体が消されるかもしれない。",
						"chinese": "如果这样下去……整个城市都可能被抹去。",
						"french": "Si ça continue... la ville entière pourrait être effacée.",
						"spanish": "Si esto sigue así... la ciudad entera podría ser borrada.",
						"vietnamese": "Nếu cứ tiếp tục thế này... cả thành phố có thể bị xóa sổ.",
						"thai": "ถ้าปล่อยไว้แบบนี้... ทั้งเมืองอาจถูกลบหายไปได้",
						"hindi": "अगर ऐसा ही चलता रहा... तो पूरा शहर मिट सकता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해!",
						"english": "We have to stop it!",
						"japanese": "止めなければ！",
						"chinese": "必须阻止它！",
						"french": "Il faut l'arrêter !",
						"spanish": "¡Tenemos que detenerlo!",
						"vietnamese": "Phải ngăn chặn nó!",
						"thai": "ต้องหยุดมัน!",
						"hindi": "हमें इसे रोकना होगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그 그림자는 멈추지 않아. 계속해서 존재를 지워나갈 거야.",
						"english": "That shadow won't stop. It will continue to erase existences.",
						"japanese": "その影は止まらない。存在を消し続けるだろう。",
						"chinese": "那个阴影不会停止。它会继续抹去存在。",
						"french": "Cette ombre ne s'arrêtera pas. Elle continuera d'effacer les existences.",
						"spanish": "Esa sombra no se detendrá. Continuará borrando existencias.",
						"vietnamese": "Cái bóng đó sẽ không dừng lại. Nó sẽ tiếp tục xóa sổ sự tồn tại.",
						"thai": "เงามืดนั่นไม่หยุดหรอก มันจะลบเลือนการมีอยู่ต่อไปเรื่อยๆ",
						"hindi": "वह छाया रुकेगी नहीं। वह अस्तित्व को मिटाती रहेगी।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 일을 방해하는가.",
						"english": "How dare you... interfere with my work.",
						"japanese": "よくも…私の邪魔をするな。",
						"chinese": "竟敢……妨碍我的工作。",
						"french": "Comment oses-tu... interférer avec mon travail.",
						"spanish": "¿Cómo te atreves... a interferir en mi trabajo?",
						"vietnamese": "Dám... cản trở công việc của ta sao.",
						"thai": "บังอาจ... ขัดขวางงานของข้าหรือ",
						"hindi": "तुमने मेरे काम में हस्तक्षेप करने की हिम्मत कैसे की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 범인이었나!",
						"english": "You… were the culprit!",
						"japanese": "お前が… 犯人だったのか！",
						"chinese": "你… 就是犯人！",
						"french": "C'était toi… le coupable !",
						"spanish": "¡Tú… eras el culpable!",
						"vietnamese": "Ngươi… chính là thủ phạm!",
						"thai": "เจ้า… คือคนร้ายงั้นรึ!",
						"hindi": "तुम… अपराधी थे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "미련한 것들. 존재를 지우는 건 질서다.",
						"english": "Foolish beings. Erasing existence is order.",
						"japanese": "愚かな者たちめ。存在を消し去るのが秩序だ。",
						"chinese": "愚蠢的东西。抹除存在就是秩序。",
						"french": "Créatures stupides. Effacer l'existence est l'ordre.",
						"spanish": "Estúpidos. Borrar la existencia es el orden.",
						"vietnamese": "Lũ ngu ngốc. Xóa bỏ sự tồn tại là trật tự.",
						"thai": "พวกโง่เขลา. การลบเลือนตัวตนคือระเบียบ.",
						"hindi": "मूर्ख प्राणी। अस्तित्व मिटाना ही व्यवस्था है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누가 그런 질서를 원했는데!",
						"english": "Who wanted such an order!",
						"japanese": "誰がそんな秩序を望んだんだ！",
						"chinese": "谁想要这种秩序！",
						"french": "Qui voulait un tel ordre !",
						"spanish": "¡¿Quién quiso tal orden?!",
						"vietnamese": "Ai mà muốn trật tự như vậy chứ!",
						"thai": "ใครกันที่ต้องการระเบียบแบบนั้น!",
						"hindi": "ऐसी व्यवस्था कौन चाहता था!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희 같은 불필요한 존재들을… 정리하기 위한 계획.",
						"english": "A plan to… tidy up unnecessary beings like you.",
						"japanese": "お前たちのような不要な存在を… 整理するための計画だ。",
						"chinese": "一个… 为了清理你们这些不必要的存在的计划。",
						"french": "Un plan pour… se débarrasser des êtres inutiles comme vous.",
						"spanish": "Un plan para… deshacerse de seres innecesarios como vosotros.",
						"vietnamese": "Một kế hoạch để… dọn dẹp những kẻ vô dụng như các ngươi.",
						"thai": "แผนการที่จะ… จัดการพวกไร้ประโยชน์เช่นพวกเจ้า.",
						"hindi": "तुम जैसे अनावश्यक प्राणियों को… निपटाने की योजना।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우… 이 정도로는…",
						"english": "Ugh… merely… this much won't…",
						"japanese": "ぐっ… これしきでは…",
						"chinese": "呃… 就… 这样还不够…",
						"french": "Argh… juste… ce n'est pas assez…",
						"spanish": "Ugh… apenas… con esto no…",
						"vietnamese": "Khụ… chỉ… chừng này thì…",
						"thai": "อึก… แค่… เพียงเท่านี้ยัง…",
						"hindi": "उफ़… बस… इतना काफी नहीं है…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝이야!",
						"english": "It's over!",
						"japanese": "終わりだ！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Kết thúc rồi!",
						"thai": "จบแล้ว!",
						"hindi": "खत्म!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "흐릿한 그림자는 사라졌다.",
						"english": "The blurry shadow vanished.",
						"japanese": "ぼやけた影は消え去った。",
						"chinese": "模糊的影子消失了。",
						"french": "L'ombre floue a disparu.",
						"spanish": "La sombra borrosa desapareció.",
						"vietnamese": "Bóng đen mờ ảo đã biến mất.",
						"thai": "เงาร่างพร่าเลือนได้หายไปแล้ว.",
						"hindi": "धुंधली छाया गायब हो गई।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 도시를 감싸던 불길한 기운은 여전했다.",
						"english": "But the ominous aura that enveloped the city remained.",
						"japanese": "しかし、街を包んでいた不吉な気配は依然として残っていた。",
						"chinese": "然而，笼罩城市的邪恶气息依然存在。",
						"french": "Mais l'aura sinistre qui enveloppait la ville demeurait.",
						"spanish": "Pero el aura siniestra que envolvía la ciudad persistía.",
						"vietnamese": "Nhưng luồng khí bất an bao trùm thành phố vẫn còn đó.",
						"thai": "แต่พลังงานอันน่าขนลุกที่ปกคลุมเมืองยังคงอยู่.",
						"hindi": "लेकिन शहर को घेरे हुए अशुभ आभा अभी भी थी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "더 큰 그림자가 다음 층에서 기다리고 있었다.",
						"english": "A larger shadow awaited on the next floor.",
						"japanese": "さらに大きな影が次の階で待ち受けていた。",
						"chinese": "更大的阴影在下一层等着。",
						"french": "Une ombre plus grande attendait à l'étage suivant.",
						"spanish": "Una sombra más grande esperaba en el siguiente piso.",
						"vietnamese": "Một bóng đen lớn hơn đang chờ đợi ở tầng tiếp theo.",
						"thai": "เงาที่ใหญ่กว่ากำลังรออยู่บนชั้นถัดไป.",
						"hindi": "एक बड़ी छाया अगली मंजिल पर इंतजार कर रही थी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희 존재 자체가 오류다.",
						"english": "Insignificant beings. Your very existence is an error.",
						"japanese": "取るに足らぬ者たち。お前たちの存在自体が誤りだ。",
						"chinese": "卑微的东西。你们的存在本身就是个错误。",
						"french": "Êtres insignifiants. Votre existence même est une erreur.",
						"spanish": "Seres insignificantes. Vuestra mera existencia es un error.",
						"vietnamese": "Lũ tầm thường. Sự tồn tại của các ngươi chính là sai lầm.",
						"thai": "พวกไร้ค่า. การมีอยู่ของพวกเจ้าก็คือความผิดพลาด.",
						"hindi": "तुच्छ प्राणी। तुम्हारा अस्तित्व ही एक त्रुटि है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没完。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Esto no ha terminado aún.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบแค่นี้",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "계속해서 지워주지. 너희의 모든 것을.",
						"english": "I'll keep erasing. Everything you are.",
						"japanese": "消し去り続けてやる。お前たちの全てを。",
						"chinese": "我会持续抹去。你们的一切。",
						"french": "Je continuerai à effacer. Tout ce que vous êtes.",
						"spanish": "Seguiré borrando. Todo lo que sois.",
						"vietnamese": "Ta sẽ tiếp tục xóa sạch. Tất cả các ngươi.",
						"thai": "ฉันจะลบต่อไปเรื่อยๆ. ทุกสิ่งทุกอย่างของพวกแก.",
						"hindi": "मैं मिटाता रहूँगा। तुम सभी को।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
