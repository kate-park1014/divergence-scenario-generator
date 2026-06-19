export const scenario_modern_whisper_16_01 = {
	"scenario_id": "modern_whisper_16_01",
	"order": 1,
	"act": "intro",
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
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"익숙했던 뒷골목이 기괴하게 일그러진다.",
			"'Whisper'의 그림자가 현실을 삼켰다.",
			"그것은 단순한 악몽이 아니었다. 과거의 비명이 현재를 침범했다.",
			"탐험대는 '검은 새벽' 갱단의 악몽 속으로 강제 소환되었다."
		],
		"english": [
			"The familiar alley distorts grotesquely.",
			"The shadow of 'Whisper' devoured reality.",
			"It was no mere nightmare. Screams from the past invaded the present.",
			"The expedition team was forcibly summoned into the nightmare of the 'Black Dawn' gang."
		],
		"japanese": [
			"見慣れた裏路地が奇怪に歪む。",
			"「ウィスパー」の影が現実を飲み込んだ。",
			"それは単なる悪夢ではなかった。過去の悲鳴が現在を侵食した。",
			"探検隊は「黒い夜明け」ギャングの悪夢の中へ強制召喚された。"
		],
		"chinese": [
			"熟悉的后巷变得怪异扭曲。",
			"“低语”的阴影吞噬了现实。",
			"那并非只是噩梦。过去的尖叫侵蚀了现在。",
			"探险队被强制召唤到“黑色黎明”帮派的噩梦中。"
		],
		"french": [
			"La ruelle familière se déforme de manière grotesque.",
			"L'ombre de 'Whisper' a dévoré la réalité.",
			"Ce n'était pas un simple cauchemar. Les cris du passé ont envahi le présent.",
			"L'équipe d'expédition fut convoquée de force dans le cauchemar du gang 'Black Dawn'."
		],
		"spanish": [
			"El callejón familiar se distorsiona grotescamente.",
			"La sombra de 'Whisper' devoró la realidad.",
			"No era una simple pesadilla. Los gritos del pasado invadieron el presente.",
			"El equipo de expedición fue convocado a la fuerza a la pesadilla de la pandilla 'Black Dawn'."
		],
		"vietnamese": [
			"Con hẻm quen thuộc méo mó một cách kỳ quái.",
			"Bóng của 'Whisper' nuốt chửng thực tại.",
			"Đó không phải là một cơn ác mộng đơn thuần. Tiếng thét từ quá khứ đã xâm chiếm hiện tại.",
			"Đội thám hiểm bị triệu hồi cưỡng bức vào cơn ác mộng của băng 'Black Dawn'."
		],
		"thai": [
			"ซอยที่คุ้นเคยบิดเบี้ยวอย่างแปลกประหลาด",
			"เงาของ 'Whisper' กลืนกินความจริง",
			"มันไม่ใช่แค่ฝันร้าย เสียงกรีดร้องจากอดีตเข้ามารุกรานปัจจุบัน",
			"ทีมสำรวจถูกเรียกตัวเข้าสู่ฝันร้ายของแก๊ง 'รุ่งอรุณทมิฬ' โดยไม่เต็มใจ"
		],
		"hindi": [
			"परिचित गली भयावह रूप से विकृत हो जाती है।",
			"'व्हिस्पर' की छाया ने वास्तविकता को निगल लिया।",
			"यह सिर्फ एक बुरा सपना नहीं था। अतीत की चीखें वर्तमान पर हावी हो गईं।",
			"अभियान दल को 'ब्लैक डॉन' गिरोह के दुःस्वप्न में जबरन बुलाया गया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "공간이 뒤틀렸다. 익숙한 풍경은 사라지고 폐허가 눈앞에 펼쳐졌다.",
						"english": "Space warped. The familiar landscape vanished, and ruins spread before us.",
						"japanese": "空間が歪んだ。見慣れた風景は消え、廃墟が目の前に広がった。",
						"chinese": "空间扭曲了。熟悉的景象消失了，废墟展现在眼前。",
						"french": "L'espace s'est tordu. Le paysage familier a disparu, et des ruines se sont étendues devant nous.",
						"spanish": "El espacio se distorsionó. El paisaje familiar desapareció, y ruinas se extendieron ante nosotros.",
						"vietnamese": "Không gian bị bóp méo. Phong cảnh quen thuộc biến mất, và đống đổ nát trải ra trước mắt.",
						"thai": "มิติบิดเบี้ยว ภูมิทัศน์ที่คุ้นเคยหายไป และซากปรักหักพังก็ปรากฏขึ้นเบื้องหน้า",
						"hindi": "स्थान विकृत हो गया। परिचित परिदृश्य गायब हो गया, और खंडहर हमारे सामने फैल गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여긴… 어디야?",
						"english": "Where... am I?",
						"japanese": "ここは…どこだ？",
						"chinese": "这里…是哪儿？",
						"french": "Où... suis-je ?",
						"spanish": "¿Dónde... estoy?",
						"vietnamese": "Đây... là đâu?",
						"thai": "ที่นี่...ที่ไหน?",
						"hindi": "यह... कहाँ है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "몸이 이상해… 붉은 흉터가 돋아난 것 같아.",
						"english": "My body feels strange... Red scars seem to be appearing.",
						"japanese": "体が変だ…赤い傷跡が浮き出ている。",
						"chinese": "身体好奇怪…好像长出了红色的伤疤。",
						"french": "Mon corps est étrange... Des cicatrices rouges semblent apparaître.",
						"spanish": "Mi cuerpo se siente extraño... Parecen aparecer cicatrices rojas.",
						"vietnamese": "Cơ thể tôi lạ quá… Hình như có những vết sẹo đỏ xuất hiện.",
						"thai": "ร่างกายฉันแปลกไป...เหมือนมีแผลเป็นสีแดงผุดขึ้น",
						"hindi": "मेरा शरीर अजीब लग रहा है... लाल निशान उभरते दिख रहे हैं।"
					},
					"speaker": "character_1"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이상 현상이다. 주변 환경의 비정상적인 변화… 과거의 에너지가 현실을 침범하고 있어.",
						"english": "This is a strange phenomenon. Abnormal changes in the environment... Past energy is invading reality.",
						"japanese": "異常現象だ。周囲環境の異常な変化…過去のエネルギーが現実を侵食している。",
						"chinese": "这是异常现象。周围环境发生了非正常变化…过去的能量正在侵蚀现实。",
						"french": "C'est un phénomène étrange. Des changements anormaux dans l'environnement... L'énergie du passé envahit la réalité.",
						"spanish": "Esto es un fenómeno extraño. Cambios anormales en el entorno... La energía del pasado está invadiendo la realidad.",
						"vietnamese": "Đây là một hiện tượng lạ. Những thay đổi bất thường trong môi trường xung quanh… Năng lượng từ quá khứ đang xâm chiếm thực tại.",
						"thai": "นี่คือปรากฏการณ์ประหลาด การเปลี่ยนแปลงที่ผิดปกติของสภาพแวดล้อม...พลังงานจากอดีตกำลังรุกรานความเป็นจริง",
						"hindi": "यह एक अजीब घटना है। परिवेश में असामान्य परिवर्तन... अतीत की ऊर्जा वास्तविकता पर हावी हो रही है।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은… '검은 새벽' 갱단의 아지트였던 폐허다. 과거의 그림자가 재현되고 있어.",
						"english": "This place... is the ruins that used to be the 'Black Dawn' gang's hideout. Shadows of the past are being re-enacted.",
						"japanese": "ここは…「黒い夜明け」ギャングのアジトだった廃墟だ。過去の影が再現されている。",
						"chinese": "这里是…“黑色黎明”帮派曾经的藏身处废墟。过去的影子正在重现。",
						"french": "Cet endroit... est les ruines qui étaient la cachette du gang 'Black Dawn'. Les ombres du passé sont en train d'être recréées.",
						"spanish": "Este lugar... son las ruinas que solían ser el escondite de la pandilla 'Black Dawn'. Las sombras del pasado se están recreando.",
						"vietnamese": "Nơi này… là tàn tích từng là nơi ẩn náu của băng 'Black Dawn'. Những bóng ma quá khứ đang tái hiện.",
						"thai": "ที่นี่...คือซากปรักหักพังที่เคยเป็นที่ซ่อนของแก๊ง 'รุ่งอรุณทมิฬ' เงาของอดีตกำลังถูกสร้างขึ้นใหม่",
						"hindi": "यह जगह... 'ब्लैक डॉन' गिरोह के ठिकाने का खंडहर है। अतीत की परछाइयां फिर से जीवंत हो रही हैं।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "마치… 그날의 현장 같아.",
						"english": "It's like... that day's scene.",
						"japanese": "まるで…あの日の現場のようだ。",
						"chinese": "就像…那天的现场一样。",
						"french": "C'est comme... la scène de ce jour-là.",
						"spanish": "Es como... la escena de aquel día.",
						"vietnamese": "Cứ như… hiện trường của ngày hôm đó.",
						"thai": "เหมือนกับ...เหตุการณ์ในวันนั้นเลย",
						"hindi": "यह... उस दिन के दृश्य जैसा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "정확해. 이 공간은… 과거의 공포를 연료로 삼고 있어.",
						"english": "Precisely. This space... it feeds on past fears.",
						"japanese": "その通りだ。この空間は…過去の恐怖を糧としている。",
						"chinese": "没错。这个空间……以过去的恐惧为燃料。",
						"french": "Exactement. Cet espace… il se nourrit des peurs passées.",
						"spanish": "Exacto. Este lugar... se alimenta de miedos del pasado.",
						"vietnamese": "Chính xác. Không gian này... nó lấy nỗi sợ quá khứ làm nhiên liệu.",
						"thai": "ถูกต้อง สถานที่แห่งนี้... ใช้ความกลัวในอดีตเป็นเชื้อเพลิง",
						"hindi": "बिल्कुल सही। यह जगह… अतीत के डर से ऊर्जा लेती है。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "벗어나야 해…! 점점 더 불안해져.",
						"english": "I need to escape...! I'm getting more anxious.",
						"japanese": "逃げなければ…！どんどん不安になる。",
						"chinese": "我必须逃离……！我越来越不安了。",
						"french": "Il faut que je m'échappe… ! Je deviens de plus en plus anxieux.",
						"spanish": "¡Debo escapar...! Cada vez me siento más inquieto.",
						"vietnamese": "Phải thoát ra thôi...! Càng lúc càng thấy bất an.",
						"thai": "ต้องหนีไปให้ได้...! ฉันยิ่งกังวลมากขึ้นเรื่อยๆ",
						"hindi": "मुझे निकलना होगा…! मैं और ज़्यादा बेचैन हो रहा हूँ।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이 모든 것은 'Whisper'와 연결되어 있다. 녀석이 이 악몽을 재현하고 있어.",
						"english": "All this is connected to 'Whisper.' It's recreating this nightmare.",
						"japanese": "これらは全て「Whisper」と繋がっている。奴がこの悪夢を再現しているんだ。",
						"chinese": "这一切都与‘Whisper’有关。它正在重现这场噩梦。",
						"french": "Tout ceci est lié à 'Whisper'. Il recrée ce cauchemar.",
						"spanish": "Todo esto está conectado con 'Whisper'. Está recreando esta pesadilla.",
						"vietnamese": "Tất cả những điều này đều kết nối với 'Whisper'. Nó đang tái tạo lại cơn ác mộng này.",
						"thai": "ทั้งหมดนี้เชื่อมโยงกับ 'Whisper' มันกำลังสร้างฝันร้ายนี้ขึ้นมาใหม่",
						"hindi": "यह सब 'Whisper' से जुड़ा है। यह इस दुःस्वप्न को फिर से बना रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Whisper가 우리를 여기로 끌고 온 거야?",
						"english": "Did Whisper drag us here?",
						"japanese": "Whisperが私たちをここに引きずり込んだのか？",
						"chinese": "是Whisper把我们拖到这里的吗？",
						"french": "Whisper nous a-t-il traînés ici ?",
						"spanish": "¿Nos arrastró Whisper hasta aquí?",
						"vietnamese": "Whisper đã kéo chúng ta đến đây sao?",
						"thai": "Whisper ลากเรามาที่นี่เหรอ?",
						"hindi": "क्या Whisper हमें यहाँ खींच लाया?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니. 'Whisper'는 공포를 흡수할 뿐. 우리가 직면한 건, 그들의 '공포' 그 자체다.",
						"english": "No. 'Whisper' only absorbs fear. What we face is 'their fear' itself.",
						"japanese": "違う。「Whisper」は恐怖を吸収するだけだ。私たちが直面しているのは、彼らの「恐怖」そのものだ。",
						"chinese": "不。‘Whisper’只吸收恐惧。我们面对的是‘他们的恐惧’本身。",
						"french": "Non. 'Whisper' ne fait qu'absorber la peur. Ce à quoi nous faisons face, c'est 'leur peur' elle-même.",
						"spanish": "No. 'Whisper' solo absorbe el miedo. Lo que enfrentamos es 'su miedo' en sí mismo.",
						"vietnamese": "Không. 'Whisper' chỉ hấp thụ nỗi sợ hãi. Điều chúng ta đang đối mặt là 'nỗi sợ của họ' đó.",
						"thai": "ไม่ใช่ 'Whisper' เพียงแค่ดูดซับความกลัว สิ่งที่เรากำลังเผชิญคือ 'ความกลัวของพวกเขา' เอง",
						"hindi": "नहीं। 'Whisper' सिर्फ़ डर को सोखता है। हम जिसका सामना कर रहे हैं, वह 'उनका डर' ही है।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "점점 더 알 수 없게 돼… 진실이 뭐야?",
						"english": "It's getting more incomprehensible... What's the truth?",
						"japanese": "ますます分からなくなる…真実とは何だ？",
						"chinese": "越来越难以理解了……真相是什么？",
						"french": "Ça devient de plus en plus incompréhensible… Quelle est la vérité ?",
						"spanish": "Cada vez es más incomprensible... ¿Cuál es la verdad?",
						"vietnamese": "Càng lúc càng khó hiểu... Sự thật là gì?",
						"thai": "มันยิ่งเข้าใจยากขึ้นเรื่อยๆ... ความจริงคืออะไร?",
						"hindi": "यह और भी ज़्यादा समझ से बाहर होता जा रहा है… सच क्या है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "과거의 비명이 탐험대를 옥죄어왔다. 벗어날 수 없는 덫처럼.",
						"english": "Screams from the past have trapped the expedition. Like an inescapable snare.",
						"japanese": "過去の悲鳴が探検隊を締め付けてきた。逃れられない罠のように。",
						"chinese": "过去的尖叫声束缚着探险队。如同无法逃脱的陷阱。",
						"french": "Les cris du passé ont piégé l'expédition. Comme un piège inéluctable.",
						"spanish": "Los gritos del pasado han atrapado a la expedición. Como una trampa inescapable.",
						"vietnamese": "Những tiếng thét từ quá khứ đã xiềng xích đoàn thám hiểm. Như một cái bẫy không thể thoát ra.",
						"thai": "เสียงกรีดร้องจากอดีตได้พันธนาการคณะสำรวจไว้ เหมือนกับกับดักที่หนีไม่พ้น",
						"hindi": "अतीत की चीखों ने अभियान दल को घेर लिया है। एक ऐसे जाल की तरह जिससे निकलना असंभव है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 환상이 아니야. 과거의 잔재가 물리적으로 현실을 침범하고 있다.",
						"english": "This isn't just an illusion. Remnants of the past are physically invading reality.",
						"japanese": "これは単なる幻覚ではない。過去の残滓が物理的に現実を侵食している。",
						"chinese": "这不仅仅是幻象。过去的残余正在物理性地侵犯现实。",
						"french": "Ce n'est pas une simple illusion. Les vestiges du passé envahissent physiquement la réalité.",
						"spanish": "Esto no es solo una ilusión. Los remanentes del pasado están invadiendo físicamente la realidad.",
						"vietnamese": "Đây không chỉ là ảo ảnh. Tàn dư của quá khứ đang xâm lấn thực tại một cách vật lý.",
						"thai": "นี่ไม่ใช่แค่ภาพลวงตา เศษซากจากอดีตกำลังรุกรานความเป็นจริงทางกายภาพ",
						"hindi": "यह सिर्फ़ एक भ्रम नहीं है। अतीत के अवशेष शारीरिक रूप से वास्तविकता पर आक्रमण कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼… 어떻게 해야 해? 영원히 갇히는 거야?",
						"english": "Then... what should we do? Are we trapped forever?",
						"japanese": "じゃあ…どうすればいいんだ？永遠に閉じ込められるのか？",
						"chinese": "那……我们该怎么办？要永远被困在这里吗？",
						"french": "Alors… que devons-nous faire ? Sommes-nous piégés pour toujours ?",
						"spanish": "Entonces... ¿qué debemos hacer? ¿Estamos atrapados para siempre?",
						"vietnamese": "Vậy... chúng ta phải làm gì? Bị mắc kẹt mãi mãi sao?",
						"thai": "แล้ว... เราจะทำยังไงดี? เราจะติดอยู่ที่นี่ตลอดไปเหรอ?",
						"hindi": "तो… हमें क्या करना चाहिए? क्या हम हमेशा के लिए फँस गए हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "현실로 돌아가려면, 이 악몽의 근원을 이해하고… 파괴해야 한다.",
						"english": "To return to reality, we must understand the source of this nightmare... and destroy it.",
						"japanese": "現実に戻るには、この悪夢の根源を理解し…破壊しなければならない。",
						"chinese": "要回到现实，我们必须理解这场噩梦的根源……并摧毁它。",
						"french": "Pour retourner à la réalité, nous devons comprendre la source de ce cauchemar… et la détruire.",
						"spanish": "Para regresar a la realidad, debemos entender la fuente de esta pesadilla... y destruirla.",
						"vietnamese": "Để trở về thực tại, chúng ta phải hiểu rõ nguồn gốc của cơn ác mộng này... và phá hủy nó.",
						"thai": "หากต้องการกลับสู่ความเป็นจริง เราต้องเข้าใจแหล่งที่มาของฝันร้ายนี้... และทำลายมัน",
						"hindi": "वास्तविकता में लौटने के लिए, हमें इस दुःस्वप्न के स्रोत को समझना होगा… और उसे नष्ट करना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "…그럼 여기서 빠져나갈 수 있다는 거야?",
						"english": "...So, we can get out of here?",
						"japanese": "「…じゃあ、ここから出られるってこと？」",
						"chinese": "“……那么，我们能从这里出去吗？”",
						"french": "...Alors, on peut s'échapper d'ici ?",
						"spanish": "...¿Entonces podemos salir de aquí?",
						"vietnamese": "...Vậy là chúng ta có thể thoát khỏi đây?",
						"thai": "...งั้นเราก็ออกไปจากที่นี่ได้เหรอ?",
						"hindi": "...तो, हम यहाँ से निकल सकते हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "짙어지는 악몽 속에서, 탐험대는 점점 깊이 잠식되어 갔다. 되돌릴 수 없는 길이었다.",
						"english": "Deeper into the thickening nightmare, the expedition was increasingly consumed. It was a path of no return.",
						"japanese": "「深まる悪夢の中、探検隊は次第に深く侵食されていった。それは、もう引き返せない道だった。」",
						"chinese": "“在逐渐深化的噩梦中，探险队被渐渐吞噬。那是一条无法回头的路。”",
						"french": "Au plus profond du cauchemar grandissant, l'expédition était de plus en plus consumée. C'était un chemin sans retour.",
						"spanish": "Adentrándose en la pesadilla creciente, la expedición fue consumiéndose cada vez más. Era un camino sin retorno.",
						"vietnamese": "Càng lún sâu vào cơn ác mộng dày đặc, đội thám hiểm càng bị nhấn chìm. Đó là một con đường không thể quay lại.",
						"thai": "ลึกเข้าไปในฝันร้ายที่ทวีความรุนแรงขึ้นเรื่อยๆ คณะสำรวจถูกกลืนกินมากขึ้นเรื่อยๆ มันเป็นเส้นทางที่ไม่อาจย้อนกลับได้",
						"hindi": "घने होते दुःस्वप्न में, अभियान दल और गहराई तक समाहित होता गया। यह वापसी का रास्ता नहीं था।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자. 그러나 악몽은 끝나지 않았다.",
						"english": "The shadow fell. But the nightmare was far from over.",
						"japanese": "「影は倒れた。しかし、悪夢は終わっていなかった。」",
						"chinese": "“影子倒下了。然而噩梦并未结束。”",
						"french": "L'ombre est tombée. Mais le cauchemar était loin d'être terminé.",
						"spanish": "La sombra cayó. Pero la pesadilla no había terminado.",
						"vietnamese": "Bóng đen ngã xuống. Nhưng cơn ác mộng vẫn chưa kết thúc.",
						"thai": "เงาล้มลงแล้ว แต่ฝันร้ายยังไม่จบ",
						"hindi": "छाया गिरी। लेकिन दुःस्वप्न अभी खत्म नहीं हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크큭… 겨우… 이 정도로는… 막을 수 없어… {random_boss}는… 계속될 테니…",
						"english": "Heh heh... This alone... won't stop it... The {random_boss} will... continue...",
						"japanese": "「ククッ…こんなもの…では…止められん…{random_boss}は…続くのだからな…」",
						"chinese": "“呵呵……仅仅……这样……是无法阻止的……{random_boss}会……继续下去……”",
						"french": "Hé hé... Ça seul... ne l'arrêtera pas... Le {random_boss} va... continuer...",
						"spanish": "Je je... Esto solo... no lo detendrá... El {random_boss}... continuará...",
						"vietnamese": "Khà khà... Chỉ... chừng này thôi... không thể ngăn cản được đâu... {random_boss} sẽ... tiếp tục...",
						"thai": "ฮึๆ... แค่... แค่นี้... หยุดมันไม่ได้หรอก... {random_boss} จะ... ดำเนินต่อไป...",
						"hindi": "हँ हँ... बस... इतना सा... इसे रोक नहीं पाएगा... {random_boss}... जारी रहेगा..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 끝나지 않았다고?",
						"english": "What do you mean? It's not over?",
						"japanese": "「どういうことだ？終わってないだと？」",
						"chinese": "“什么意思？还没结束？”",
						"french": "Qu'est-ce que tu veux dire ? Ce n'est pas fini ?",
						"spanish": "¿Qué quieres decir? ¿Que no ha terminado?",
						"vietnamese": "Ngươi nói gì? Vẫn chưa kết thúc sao?",
						"thai": "หมายความว่าไง? ยังไม่จบเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? यह खत्म नहीं हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "몸에 돋아난 붉은 흉터는 점점 선명해져 갔다. 악몽은 이제 시작이었다.",
						"english": "The red scars on the body grew clearer. The nightmare had just begun.",
						"japanese": "体に浮かび上がった赤い傷跡は、次第に鮮明になっていった。悪夢はまだ始まったばかりだった。",
						"chinese": "身上浮现的红色伤疤越来越清晰。噩梦才刚刚开始。",
						"french": "Les cicatrices rouges sur le corps devenaient de plus en plus nettes. Le cauchemar ne faisait que commencer.",
						"spanish": "Las cicatrices rojas del cuerpo se hacían cada vez más claras. La pesadilla acababa de empezar.",
						"vietnamese": "Những vết sẹo đỏ trên cơ thể ngày càng rõ nét. Cơn ác mộng chỉ mới bắt đầu.",
						"thai": "แผลเป็นสีแดงที่ปรากฏบนร่างกายชัดเจนขึ้นเรื่อยๆ ฝันร้ายเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "शरीर पर उभरते लाल निशान और गहरे होते गए। दुःस्वप्न अब शुरू हुआ था。"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다. 탐험대는 악몽에 갇혔다.",
						"english": "Darkness swallowed everything. The expedition team was trapped in a nightmare.",
						"japanese": "闇がすべてを飲み込んだ。探検隊は悪夢に囚われた。",
						"chinese": "黑暗吞噬了一切。探险队被困在噩梦中。",
						"french": "L'obscurité a tout englouti. L'équipe d'exploration était piégée dans un cauchemar.",
						"spanish": "La oscuridad lo devoró todo. El equipo de expedición quedó atrapado en una pesadilla.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Đoàn thám hiểm bị mắc kẹt trong cơn ác mộng.",
						"thai": "ความมืดกลืนกินทุกสิ่ง ทีมสำรวจถูกขังอยู่ในฝันร้าย",
						"hindi": "अँधेरे ने सब कुछ निगल लिया। अभियान दल एक बुरे सपने में फँस गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 너희는… 이 악몽에서 벗어날 수 없어.",
						"english": "Give up. You... cannot escape this nightmare.",
						"japanese": "諦めろ。お前たちは…この悪夢から逃れられない。",
						"chinese": "放弃吧。你们…无法摆脱这场噩梦。",
						"french": "Abandonnez. Vous... ne pourrez pas échapper à ce cauchemar.",
						"spanish": "Ríndanse. Ustedes... no pueden escapar de esta pesadilla.",
						"vietnamese": "Hãy bỏ cuộc đi. Các ngươi... không thể thoát khỏi cơn ác mộng này đâu.",
						"thai": "ยอมแพ้ซะ พวกเจ้า…หนีจากฝันร้ายนี้ไม่ได้หรอก",
						"hindi": "हार मान लो। तुम… इस दुःस्वप्न से बच नहीं सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 반드시… 방법을 찾을 거야! 다시 돌아온다!",
						"english": "No... I will definitely... find a way! I'll be back!",
						"japanese": "いや…必ず…方法を見つける！また戻ってくる！",
						"chinese": "不…我一定会…找到办法的！我会再回来的！",
						"french": "Non... Je trouverai... un moyen à coup sûr ! Je reviendrai !",
						"spanish": "¡No... definitivamente... encontraré una manera! ¡Volveré!",
						"vietnamese": "Không... Ta nhất định... sẽ tìm ra cách! Ta sẽ quay lại!",
						"thai": "ไม่…ฉันจะต้อง…หาวิธีให้ได้! ฉันจะกลับมา!",
						"hindi": "नहीं… मैं निश्चित रूप से… कोई रास्ता ढूँढूँगा! मैं वापस आऊँगा!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "폐허의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest part of the ruins. A colossal shadow awaited the expedition.",
						"japanese": "「廃墟の最深部。巨大な影が探検隊を待ち受けていた。」",
						"chinese": "“废墟最深处。一个巨大的身影正等待着探险队。”",
						"french": "La partie la plus profonde des ruines. Une ombre colossale attendait l'expédition.",
						"spanish": "La parte más profunda de las ruinas. Una sombra colosal esperaba a la expedición.",
						"vietnamese": "Nơi sâu nhất của phế tích. Một bóng đen khổng lồ đang chờ đợi đội thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง เงาขนาดมหึมารอคอยคณะสำรวจอยู่",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 여기까지 왔군. 어리석은 인간들.",
						"english": "You dared... to come this far. Foolish mortals.",
						"japanese": "「よくも…ここまで来たな。愚かな人間たちめ。」",
						"chinese": "“竟敢……来到这里。愚蠢的人类。”",
						"french": "Vous avez osé... venir jusqu'ici. Mortels insensés.",
						"spanish": "Osasteis... llegar hasta aquí. Humanos estúpidos.",
						"vietnamese": "Dám... đến tận đây sao. Loài người ngu ngốc.",
						"thai": "กล้า... มาไกลถึงเพียงนี้หรือ มนุษย์โง่เขลาเอ๋ย",
						"hindi": "तुमने हिम्मत की... यहाँ तक आने की। मूर्ख नश्वर।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가… 이 모든 악몽을 꾸민 거야?",
						"english": "Did you... orchestrate all these nightmares?",
						"japanese": "「お前が…この悪夢の元凶なのか？」",
						"chinese": "“是你……策划了这一切噩梦吗？”",
						"french": "C'est toi... qui as orchestré tous ces cauchemars ?",
						"spanish": "¿Tú... orquestaste todas estas pesadillas?",
						"vietnamese": "Ngươi... là kẻ gây ra tất cả những cơn ác mộng này sao?",
						"thai": "เจ้า... เป็นคนบงการฝันร้ายทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने... इन सभी दुःस्वप्नों की योजना बनाई?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "난 그저… 과거를 재현할 뿐. 너희의 공포를 먹이 삼아.",
						"english": "I merely... recreate the past. Feeding on your fears.",
						"japanese": "「私はただ…過去を再現しているだけ。お前たちの恐怖を糧にして。」",
						"chinese": "“我只是……重现过去。以你们的恐惧为食。”",
						"french": "Je ne fais que... recréer le passé. Me nourrissant de vos peurs.",
						"spanish": "Yo solo... recreo el pasado. Alimentándome de vuestros miedos.",
						"vietnamese": "Ta chỉ... tái hiện quá khứ thôi. Lấy nỗi sợ hãi của các ngươi làm thức ăn.",
						"thai": "ข้าแค่... สร้างอดีตขึ้นใหม่ โดยกินความกลัวของพวกเจ้าเป็นอาหาร",
						"hindi": "मैं बस... अतीत को फिर से बना रहा हूँ। तुम्हारे डर पर पल रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "조심해! 녀석은 과거의 잔재와 공포 그 자체다!",
						"english": "Watch out! It's a remnant of the past and fear itself!",
						"japanese": "「気をつけろ！あれは過去の残滓であり、恐怖そのものだ！」",
						"chinese": "“小心！它就是过去的残余，是恐惧本身！”",
						"french": "Attention ! C'est un vestige du passé et la peur elle-même !",
						"spanish": "¡Cuidado! ¡Es un remanente del pasado y el miedo en sí mismo!",
						"vietnamese": "Cẩn thận! Nó là tàn dư của quá khứ và nỗi sợ hãi thuần túy!",
						"thai": "ระวัง! มันคือเศษซากของอดีตและความกลัวในตัวมันเอง!",
						"hindi": "सावधान! यह अतीत का अवशेष और स्वयं भय है!"
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"id": 15
		}
	]
} as const;
