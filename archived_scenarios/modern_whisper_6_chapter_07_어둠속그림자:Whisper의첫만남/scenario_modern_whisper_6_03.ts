export const scenario_modern_whisper_6_03 = {
	"scenario_id": "modern_whisper_6_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "버려진 도시의 뒷골목. 낡은 벽에는 희미한 글자들이 새겨져 있었다.",
						"english": "An alley in a deserted city. Faint letters were etched on the old wall.",
						"japanese": "捨てられた都市の裏路地。古い壁にはかすかな文字が刻まれていた。",
						"chinese": "废弃城市的后巷。旧墙上刻着模糊的文字。",
						"french": "Une ruelle dans une ville abandonnée. Des lettres pâles étaient gravées sur le vieux mur.",
						"spanish": "Un callejón en una ciudad desierta. Tenues letras estaban grabadas en la vieja pared.",
						"vietnamese": "Một con hẻm trong thành phố hoang tàn. Những chữ cái mờ nhạt được khắc trên bức tường cũ.",
						"thai": "ตรอกซอยในเมืองร้าง. ตัวอักษรจางๆ สลักอยู่บนผนังเก่า",
						"hindi": "एक वीरान शहर की गली। पुरानी दीवार पर धुंधले अक्षर खुदे हुए थे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "'검은 새벽'?",
						"english": "'Black Dawn'?",
						"japanese": "「黒い夜明け」？",
						"chinese": "“黑色黎明”？",
						"french": "«Aube Noire» ?",
						"spanish": "¿'Amanecer Negro'?",
						"vietnamese": "'Bình Minh Đen'?",
						"thai": "'รุ่งอรุณทมิฬ'?",
						"hindi": "'ब्लैक डॉन'?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥미롭네요. 이런 오래된 갱단의 흔적이라니.",
						"english": "Interesting. Traces of an old gang.",
						"japanese": "面白いですね。こんな古いギャングの痕跡が。",
						"chinese": "真有趣。竟然是这种老帮派的痕迹。",
						"french": "Intéressant. Des traces d'un vieux gang.",
						"spanish": "Interesante. Rastros de una vieja pandilla.",
						"vietnamese": "Thật thú vị. Dấu vết của một băng đảng cũ.",
						"thai": "น่าสนใจ. ร่องรอยของแก๊งเก่าแก่แบบนี้",
						"hindi": "दिलचस्प। एक पुराने गिरोह के निशान।"
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그리고… 이 주변에서 이상한 소리 왜곡 현상이 감지돼요.",
						"english": "And… I'm detecting strange sound distortions around here.",
						"japanese": "そして…この周辺で奇妙な音の歪みが感知されます。",
						"chinese": "而且……我感应到这附近有奇怪的声音扭曲现象。",
						"french": "Et… je détecte d'étranges distorsions sonores par ici.",
						"spanish": "Y… estoy detectando extrañas distorsiones de sonido por aquí.",
						"vietnamese": "Và… tôi đang phát hiện ra hiện tượng méo tiếng kỳ lạ quanh đây.",
						"thai": "และ... ฉันตรวจพบการบิดเบือนของเสียงแปลกๆ แถวนี้",
						"hindi": "और… मुझे यहाँ आस-पास अजीब ध्वनि विकृतियाँ मिल रही हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "소리 왜곡?",
						"english": "Sound distortion?",
						"japanese": "音の歪み？",
						"chinese": "声音扭曲？",
						"french": "Distorsion sonore ?",
						"spanish": "¿Distorsión de sonido?",
						"vietnamese": "Méo tiếng?",
						"thai": "การบิดเบือนของเสียง?",
						"hindi": "ध्वनि विकृति?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네, 소리 없는 공간 왜곡. Whisper 주변에서 특히 심해요.",
						"english": "Yes, silent space distortion. It's especially severe around Whisper.",
						"japanese": "はい、音のない空間の歪みです。Whisperの周辺で特にひどいです。",
						"chinese": "是的，无声的空间扭曲。在Whisper周围尤其严重。",
						"french": "Oui, distorsion d'espace silencieuse. C'est particulièrement sévère autour de Whisper.",
						"spanish": "Sí, distorsión de espacio silenciosa. Es especialmente severa alrededor de Whisper.",
						"vietnamese": "Vâng, méo không gian im ắng. Nó đặc biệt nghiêm trọng quanh Whisper.",
						"thai": "ใช่แล้ว การบิดเบือนของพื้นที่ที่ไร้เสียง. มันรุนแรงเป็นพิเศษรอบๆ Whisper",
						"hindi": "हाँ, शांत स्थान विकृति। यह 'Whisper' के आसपास विशेष रूप से गंभीर है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "Whisper가 원인인 거야?",
						"english": "Is Whisper the cause?",
						"japanese": "ウィスパーが原因なの？",
						"chinese": "是Whisper造成的吗？",
						"french": "C'est Whisper la cause ?",
						"spanish": "¿Es Whisper la causa?",
						"vietnamese": "Whisper là nguyên nhân à?",
						"thai": "Whisper เป็นต้นเหตุเหรอ?",
						"hindi": "क्या व्हिस्पर ही इसकी वजह है?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "아직 확실하진 않지만… 녹음된 비명 소리도 기묘하구요.",
						"english": "Not sure yet... but the recorded screams are unsettling.",
						"japanese": "まだ断定できないけど… 録音された悲鳴も奇妙だし。",
						"chinese": "还不确定… 但录下的尖叫声也很诡异。",
						"french": "Ce n'est pas encore sûr... mais les cris enregistrés sont étranges.",
						"spanish": "Aún no es seguro... pero los gritos grabados son extraños.",
						"vietnamese": "Vẫn chưa chắc chắn… nhưng tiếng la hét được ghi lại cũng kỳ lạ.",
						"thai": "ยังไม่แน่ใจนัก… แต่เสียงกรีดร้องที่บันทึกไว้ก็แปลกประหลาด.",
						"hindi": "अभी पक्का नहीं है... लेकिन रिकॉर्ड की हुई चीखें भी अजीब हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "마치 과거의 절규가 이 공간에 갇힌 것 같아요.",
						"english": "It's as if past screams are trapped in this space.",
						"japanese": "まるで過去の絶叫がこの空間に閉じ込められているみたい。",
						"chinese": "仿佛过去的绝望尖叫被困在了这个空间里。",
						"french": "On dirait que les cris du passé sont piégés dans cet espace.",
						"spanish": "Es como si los gritos del pasado estuvieran atrapados en este espacio.",
						"vietnamese": "Cứ như tiếng kêu thét của quá khứ bị mắc kẹt trong không gian này vậy.",
						"thai": "ราวกับเสียงกรีดร้องในอดีตถูกขังไว้ในพื้นที่นี้.",
						"hindi": "जैसे अतीत की चीखें इस जगह में फंस गई हों।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "분석 결과… 이 소리 왜곡은 '검은 새벽' 갱단과 연관이 있어요.",
						"english": "Analysis shows... this sound distortion is linked to the 'Black Dawn' gang.",
						"japanese": "分析の結果… この音の歪みは「黒い夜明け」ギャングと関係があります。",
						"chinese": "分析结果… 这种声音扭曲与“黑色黎明”帮派有关。",
						"french": "Les analyses montrent... que cette distorsion sonore est liée au gang de l'«Aube Noire».",
						"spanish": "El análisis muestra... que esta distorsión de sonido está relacionada con la pandilla 'Amanecer Negro'.",
						"vietnamese": "Kết quả phân tích… sự méo mó âm thanh này liên quan đến băng nhóm 'Bình Minh Đen'.",
						"thai": "ผลวิเคราะห์… การบิดเบือนเสียงนี้เกี่ยวข้องกับแก๊ง 'รุ่งอรุณทมิฬ'.",
						"hindi": "विश्लेषण के अनुसार... यह ध्वनि विकृति 'ब्लैक डॉन' गिरोह से जुड़ी है।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잊혀진 갱단이랑 Whisper랑 대체 무슨 상관인데?",
						"english": "What does a forgotten gang have to do with Whisper?",
						"japanese": "忘れ去られたギャングとウィスパーと一体何の関係があるんだ？",
						"chinese": "一个被遗忘的帮派和Whisper到底有什么关系？",
						"french": "Qu'est-ce qu'un gang oublié a à voir avec Whisper ?",
						"spanish": "¿Qué tiene que ver un gang olvidado con Whisper?",
						"vietnamese": "Băng nhóm bị lãng quên đó thì liên quan gì đến Whisper chứ?",
						"thai": "แก๊งที่ถูกลืมกับ Whisper มันเกี่ยวอะไรกัน?",
						"hindi": "एक भूले हुए गिरोह का व्हिस्पर से क्या लेना-देना है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "갱단의 마지막 아지트… 여기서 들리는 비명 소리와 패턴이 일치해요.",
						"english": "The gang's last hideout... the screams heard there match the pattern.",
						"japanese": "ギャングの最後の隠れ家… ここで聞こえる悲鳴のパターンと一致する。",
						"chinese": "帮派的最后一个藏身处… 在这里听到的尖叫声与模式相符。",
						"french": "Le dernier repaire du gang... les cris entendus ici correspondent au schéma.",
						"spanish": "El último escondite de la pandilla... los gritos que se escuchan aquí coinciden con el patrón.",
						"vietnamese": "Hang ổ cuối cùng của băng nhóm… tiếng la hét nghe thấy ở đây trùng khớp với mẫu.",
						"thai": "รังสุดท้ายของแก๊ง… เสียงกรีดร้องที่ได้ยินที่นี่ตรงกับรูปแบบ.",
						"hindi": "गिरोह का आखिरी ठिकाना... यहाँ सुनी गई चीखों का पैटर्न मेल खाता है।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "소름 돋네…",
						"english": "Chilling...",
						"japanese": "鳥肌が立つ…",
						"chinese": "真让人毛骨悚然…",
						"french": "Ça donne la chair de poule...",
						"spanish": "Qué escalofriante...",
						"vietnamese": "Thật đáng sợ…",
						"thai": "ขนลุกเลย…",
						"hindi": "रोंगटे खड़े हो गए..."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과거의 비극이 그림자처럼 드리워졌다.",
						"english": "The tragedy of the past casts a shadow.",
						"japanese": "過去の悲劇が影のように覆いかぶさっている。",
						"chinese": "过去的悲剧如影随形。",
						"french": "La tragédie du passé plane comme une ombre.",
						"spanish": "La tragedia del pasado se cierne como una sombra.",
						"vietnamese": "Bi kịch của quá khứ phủ bóng như một cái bóng.",
						"thai": "โศกนาฏกรรมในอดีตทาบทับดุจเงา.",
						"hindi": "अतीत की त्रासदी एक साये की तरह मंडरा रही है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "확신해요. Whisper는 단순히 유기견이 아니에요.",
						"english": "I'm sure of it. Whisper isn't just a stray dog.",
						"japanese": "確信してる。ウィスパーはただの野良犬じゃない。",
						"chinese": "我很确定。Whisper不只是一只流浪狗。",
						"french": "J'en suis sûr. Whisper n'est pas qu'un chien errant.",
						"spanish": "Estoy seguro. Whisper no es solo un perro callejero.",
						"vietnamese": "Tôi chắc chắn. Whisper không chỉ là một con chó hoang.",
						"thai": "ฉันแน่ใจ Whisper ไม่ใช่แค่หมาจรจัดธรรมดา.",
						"hindi": "मुझे यकीन है। व्हिस्पर सिर्फ एक आवारा कुत्ता नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、一体何なんだ？",
						"chinese": "那它到底是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "Entonces, ¿qué es?",
						"vietnamese": "Vậy thì nó là cái gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 공간 왜곡은… 녀석의 존재 자체에서 발현되는 것 같아요.",
						"english": "This spatial distortion… it seems to emanate from its very existence.",
						"japanese": "この空間の歪みは…奴の存在そのものから発現しているようです。",
						"chinese": "这种空间扭曲……似乎是它自身的存在所散发出来的。",
						"french": "Cette distorsion spatiale… elle semble émaner de son existence même.",
						"spanish": "Esta distorsión espacial… parece emanar de su propia existencia.",
						"vietnamese": "Sự biến dạng không gian này… dường như phát ra từ chính sự tồn tại của nó.",
						"thai": "ความบิดเบี้ยวของมิตินี้… ดูเหมือนจะกำเนิดขึ้นจากการมีอยู่ของมันเอง.",
						"hindi": "यह स्थानिक विकृति… ऐसा लगता है कि यह उसके अस्तित्व से ही उत्पन्न हो रही है।"
					},
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그리고 그 비명 소리… 점점 더 선명해지고 있어요.",
						"english": "And that scream… it's growing clearer and clearer.",
						"japanese": "そして、その悲鳴が…だんだんとはっきりと聞こえてくる。",
						"chinese": "而且那个尖叫声……越来越清晰了。",
						"french": "Et ce cri… il devient de plus en plus distinct.",
						"spanish": "Y ese grito… cada vez se vuelve más claro.",
						"vietnamese": "Và tiếng hét đó… ngày càng rõ ràng hơn.",
						"thai": "และเสียงกรีดร้องนั้น… มันชัดเจนขึ้นเรื่อยๆ.",
						"hindi": "और वह चीख… वह और ज़्यादा साफ़ होती जा रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳이 없군.",
						"english": "There's nowhere left to retreat.",
						"japanese": "もう後には引けない。",
						"chinese": "已经无路可退了。",
						"french": "Il n'y a plus nulle part où reculer.",
						"spanish": "Ya no hay adónde retirarse.",
						"vietnamese": "Không còn đường lui nữa.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว.",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "감히 이 영역을 침범하다니.",
						"english": "How dare you trespass into this domain.",
						"japanese": "よくもこの領域を侵犯したな。",
						"chinese": "竟敢侵犯我的领域。",
						"french": "Comment oses-tu envahir ce domaine.",
						"spanish": "¿Cómo te atreves a invadir este dominio?",
						"vietnamese": "Dám cả gan xâm phạm lãnh địa này.",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตนี้.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस क्षेत्र में घुसने की।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊혀진 것은 잊혀진 대로 두어야지.",
						"english": "What is forgotten should remain forgotten.",
						"japanese": "忘れられたものは、忘れられたままにしておくべきだ。",
						"chinese": "被遗忘的就该让它继续被遗忘。",
						"french": "Ce qui est oublié devrait le rester.",
						"spanish": "Lo olvidado debe permanecer olvidado.",
						"vietnamese": "Thứ đã bị lãng quên thì cứ nên để nó bị lãng quên.",
						"thai": "สิ่งที่ถูกลืมก็ควรจะปล่อยให้ถูกลืมไป.",
						"hindi": "जो भुला दिया गया है, उसे भुला ही रहना चाहिए।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 '검은 새벽'의 잔당인가?",
						"english": "Are you a remnant of the 'Black Dawn'?",
						"japanese": "お前は「黒き夜明け」の残党か？",
						"chinese": "你是“黑色黎明”的残党吗？",
						"french": "Es-tu un vestige de l'« Aube Noire » ?",
						"spanish": "¿Eres un remanente del \"Amanecer Negro\"?",
						"vietnamese": "Ngươi là tàn dư của 'Bình Minh Đen' sao?",
						"thai": "เจ้าคือผู้เหลือรอดของ 'รุ่งอรุณทมิฬ' รึ?",
						"hindi": "क्या तुम 'ब्लैक डॉन' के बचे हुए हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "후회하게 해주마.",
						"english": "I'll make you regret this.",
						"japanese": "後悔させてやる。",
						"chinese": "我会让你后悔的。",
						"french": "Je vais te le faire regretter.",
						"spanish": "Te haré arrepentirte.",
						"vietnamese": "Ta sẽ khiến ngươi phải hối hận.",
						"thai": "ข้าจะทำให้เจ้าเสียใจ.",
						"hindi": "मैं तुम्हें पछतावा कराऊंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가? 잊혀질 운명이로군.",
						"english": "Is this all? Fated to be forgotten.",
						"japanese": "たったこれだけか？忘れ去られる運命だな。",
						"chinese": "就这点本事吗？注定要被遗忘。",
						"french": "C'est tout ce que tu as ? Destiné à être oublié.",
						"spanish": "¿Es esto todo? Destinado a ser olvidado.",
						"vietnamese": "Chỉ có thế này thôi sao? Định mệnh bị lãng quên.",
						"thai": "แค่นี้เองรึ? ช่างถูกกำหนดให้ถูกลืมเลือน",
						"hindi": "बस इतना ही? भुला दिया जाना तय है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง... ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은 자들….",
						"english": "Ugh… foolish mortals…",
						"japanese": "くっ…愚かな者たちめ…。",
						"chinese": "呃……愚蠢的家伙们……",
						"french": "Ugh… insensés…",
						"spanish": "Ugh… tontos…",
						"vietnamese": "Khụ… lũ ngu ngốc…",
						"thai": "อึก… พวกคนโง่เง่า…",
						"hindi": "उफ़… मूर्ख लोग…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는… 단지… 흔적일 뿐….",
						"english": "{random_boss} is… merely… a trace…",
						"japanese": "{random_boss}は…単なる…痕跡にすぎない…。",
						"chinese": "{random_boss}不过是……一个痕迹罢了……",
						"french": "{random_boss} n'est… qu'une… trace…",
						"spanish": "{random_boss} es… solo… un rastro…",
						"vietnamese": "{random_boss} chỉ là… một dấu vết…",
						"thai": "{random_boss} เป็นเพียง… ร่องรอยเท่านั้น…",
						"hindi": "{random_boss} बस… एक निशान… है…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흔적? 그럼 진짜는….",
						"english": "A trace? Then the real one is…",
						"japanese": "痕跡？じゃあ、本当は…。",
						"chinese": "痕迹？那真正的……",
						"french": "Une trace ? Alors le vrai…",
						"spanish": "¿Un rastro? Entonces el verdadero…",
						"vietnamese": "Dấu vết? Vậy cái thật sự là…",
						"thai": "ร่องรอย? ถ้าอย่างนั้นตัวจริงล่ะ…",
						"hindi": "एक निशान? तो असली वाला…"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "방금… 녀석의 비명 소리가 더 커졌어요.",
						"english": "Just now... its scream grew louder.",
						"japanese": "今…あいつの悲鳴がさらに大きくなった。",
						"chinese": "刚才…那家伙的尖叫声更大了。",
						"french": "À l'instant... son cri est devenu plus fort.",
						"spanish": "Justo ahora... su grito se hizo más fuerte.",
						"vietnamese": "Vừa rồi... tiếng thét của nó càng lớn hơn.",
						"thai": "เมื่อกี้... เสียงกรีดร้องของมันดังขึ้น",
						"hindi": "अभी-अभी... उसकी चीख और तेज़ हो गई।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어렴풋이 드러나는 진실, 그리고 더 깊은 미스터리.",
						"english": "Truth dimly revealed, and deeper mystery.",
						"japanese": "おぼろげに現れる真実、そしてより深まる謎。",
						"chinese": "真相若隐若现，谜团更加深邃。",
						"french": "La vérité se révèle faiblement, et un mystère plus profond.",
						"spanish": "La verdad se revela débilmente, y un misterio más profundo.",
						"vietnamese": "Chân tướng hé lộ mờ nhạt, và bí ẩn sâu sắc hơn.",
						"thai": "ความจริงที่ค่อยๆ เปิดเผย และปริศนาที่ลึกซึ้งกว่าเดิม",
						"hindi": "अस्पष्ट सत्य प्रकट हुआ, और गहरा रहस्य।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "밤의 그림자가 점점 더 짙어졌다.",
						"english": "Night's shadows deepened further.",
						"japanese": "夜の影はますます濃くなった。",
						"chinese": "夜幕的阴影越来越浓。",
						"french": "Les ombres de la nuit s'épaississaient de plus en plus.",
						"spanish": "Las sombras de la noche se hicieron cada vez más densas.",
						"vietnamese": "Bóng đêm ngày càng trở nên đậm đặc.",
						"thai": "เงามืดของราตรีทอดยาวลึกขึ้นเรื่อยๆ",
						"hindi": "रात की परछाइयाँ और गहरी होती गईं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"버려진 도시의 잊혀진 뒷골목.",
			"오래된 건물 벽에는 '검은 새벽'이라는 희미한 낙서가 새겨져 있었다.",
			"그 그림자 속에서, 소리 없는 공간이 기묘하게 왜곡되고 있었다.",
			"알 수 없는 비명 소리… 모든 실마리가 'Whisper'를 가리켰다."
		],
		"english": [
			"A forgotten alley in a deserted city.",
			"Faint graffiti, 'Black Dawn', was etched on the old building wall.",
			"In its shadows, a silent space was eerily distorting.",
			"Unidentifiable screams… All clues pointed to 'Whisper'."
		],
		"japanese": [
			"打ち捨てられた都市の忘れ去られた裏路地。",
			"古い建物の壁には「黒い夜明け」というかすかな落書きが刻まれていた。",
			"その影の中で、音のない空間が奇妙に歪んでいた。",
			"不明な悲鳴…すべての手がかりは「Whisper」を指し示していた。"
		],
		"chinese": [
			"废弃城市中被遗忘的小巷。",
			"旧建筑的墙上刻着模糊的涂鸦——“黑色黎明”。",
			"在那片阴影中，无声的空间正在诡异地扭曲。",
			"不明的尖叫声……所有线索都指向了“Whisper”。"
		],
		"french": [
			"Une ruelle oubliée d'une ville abandonnée.",
			"Un graffiti pâle, «Aube Noire», était gravé sur le mur du vieil immeuble.",
			"Dans ses ombres, un espace silencieux se déformait étrangement.",
			"Des cris inidentifiables… Tous les indices menaient à 'Whisper'."
		],
		"spanish": [
			"Un callejón olvidado en una ciudad desierta.",
			"Un grafiti tenue, 'Amanecer Negro', estaba grabado en la pared del viejo edificio.",
			"En sus sombras, un espacio silencioso se estaba distorsionando extrañamente.",
			"Gritos inidentificables… Todas las pistas apuntaban a 'Whisper'."
		],
		"vietnamese": [
			"Một con hẻm bị lãng quên trong thành phố hoang tàn.",
			"Dòng chữ graffiti mờ nhạt 'Bình Minh Đen' được khắc trên bức tường tòa nhà cũ.",
			"Trong bóng tối đó, một không gian im ắng đang bị bóp méo một cách kỳ lạ.",
			"Những tiếng hét không thể nhận dạng… Mọi manh mối đều chỉ về 'Whisper'."
		],
		"thai": [
			"ตรอกซอยที่ถูกลืมในเมืองร้าง",
			"กราฟฟิตี้จางๆ 'รุ่งอรุณทมิฬ' สลักอยู่บนผนังตึกเก่า",
			"ในเงามืดนั้น พื้นที่อันเงียบงันกำลังบิดเบี้ยวอย่างประหลาด",
			"เสียงกรีดร้องที่ไม่สามารถระบุได้... เบาะแสทั้งหมดชี้ไปที่ 'Whisper'"
		],
		"hindi": [
			"एक वीरान शहर की भूली हुई गली।",
			"पुरानी इमारत की दीवार पर 'ब्लैक डॉन' नाम का धुंधला भित्तिचित्र खुदा हुआ था।",
			"उसकी छाया में, एक शांत स्थान अजीब तरह से विकृत हो रहा था।",
			"अज्ञात चीखें… सभी सुराग 'Whisper' की ओर इशारा कर रहे थे।"
		]
	}
} as const;
