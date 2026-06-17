export const scenario_snowy_astrielle_18_01 = {
	"scenario_id": "snowy_astrielle_18_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "성문이 열리자, 죽은 듯한 한기가 덮쳤다. 모든 것이 얼어붙어 있었다.",
						"english": "As the castle gates opened, a deathly chill enveloped us. Everything was frozen.",
						"japanese": "城門が開くと、死のような寒気が襲った。すべてが凍りついていた。",
						"chinese": "城门一开，死寂的寒气袭来。一切都冻结了。",
						"french": "Lorsque les portes du château s'ouvrirent, un froid mortel nous envahit. Tout était gelé.",
						"spanish": "Al abrirse las puertas del castillo, un frío mortal nos envolvió. Todo estaba congelado.",
						"vietnamese": "Khi cổng thành mở ra, một luồng khí lạnh chết chóc ập đến. Mọi thứ đều đóng băng.",
						"thai": "เมื่อประตูปราสาทเปิดออก ความหนาวเย็นราวกับความตายก็ปกคลุม ทุกสิ่งถูกแช่แข็ง",
						"hindi": "जैसे ही महल के द्वार खुले, एक जानलेवा ठंडक छा गई। सब कुछ जम गया था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여왕의 기록실이라니… 온기가 하나도 없어.",
						"english": "The Queen's archive... there's no warmth at all.",
						"japanese": "女王の記録室だと…暖かさが全くない。",
						"chinese": "女王的档案室啊…一点暖意都没有。",
						"french": "Les archives de la Reine... aucune chaleur ici.",
						"spanish": "El archivo de la Reina... no hay nada de calor.",
						"vietnamese": "Phòng lưu trữ của Nữ hoàng... chẳng có chút hơi ấm nào.",
						"thai": "ห้องเก็บเอกสารของราชินีหรือ... ไม่มีไออุ่นเลย",
						"hindi": "रानी का अभिलेखागार... बिल्कुल भी गर्मी नहीं है।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기, 조각상들을 보세요. 과거의 모습을 간직한 채 얼어붙었어.",
						"english": "Look at these statues here. They're frozen, preserving their past forms.",
						"japanese": "ここを見て、この彫像たち。過去の姿をそのままに凍りついている。",
						"chinese": "看这里，这些雕像。它们冻结了，还保留着过去的样子。",
						"french": "Regardez ces statues ici. Elles sont figées, conservant leurs formes passées.",
						"spanish": "Miren estas estatuas aquí. Están congeladas, preservando sus formas pasadas.",
						"vietnamese": "Nhìn những bức tượng này đi. Chúng bị đóng băng, giữ nguyên hình dạng quá khứ.",
						"thai": "ดูรูปปั้นเหล่านี้สิ มันถูกแช่แข็งไว้ คงสภาพในอดีต",
						"hindi": "यहाँ इन मूर्तियों को देखो। वे जमी हुई हैं, अपने अतीत के रूपों को संरक्षित कर रही हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고 이 얼음 꽃… 부서지기 쉬워 보이지만, 아름다워요.",
						"english": "And these ice flowers... they look fragile, but they're beautiful.",
						"japanese": "そしてこの氷の花…壊れやすそうだけど、美しいわ。",
						"chinese": "还有这些冰花…看起来脆弱，却很美丽。",
						"french": "Et ces fleurs de glace... elles semblent fragiles, mais elles sont magnifiques.",
						"spanish": "Y estas flores de hielo... parecen frágiles, pero son hermosas.",
						"vietnamese": "Và những bông hoa băng này... trông chúng mong manh, nhưng lại thật đẹp.",
						"thai": "และดอกไม้น้ำแข็งเหล่านี้... ดูเปราะบาง แต่ก็สวยงาม",
						"hindi": "और ये बर्फीले फूल... वे नाजुक दिखते हैं, लेकिन खूबसूरत हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "아름답다고? 그냥 얼음 덩어리잖아.",
						"english": "Beautiful? They're just chunks of ice.",
						"japanese": "美しいだって？ただの氷の塊じゃないか。",
						"chinese": "美丽？它们只是冰块而已。",
						"french": "Magnifiques ? Ce ne sont que des morceaux de glace.",
						"spanish": "¿Hermosas? Son solo trozos de hielo.",
						"vietnamese": "Đẹp á? Chúng chỉ là những khối băng thôi mà.",
						"thai": "สวยงามเหรอ? ก็แค่ก้อนน้ำแข็งนี่นา",
						"hindi": "खूबसूरत? वे तो बस बर्फ के टुकड़े हैं।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "단순한 파괴의 흔적이 아닐지도 몰라요.",
						"english": "This might not just be a trace of destruction.",
						"japanese": "単なる破壊の痕跡ではないのかもしれません。",
						"chinese": "这可能不仅仅是破坏的痕迹。",
						"french": "Ce n'est peut-être pas qu'une simple trace de destruction.",
						"spanish": "Esto podría no ser solo un rastro de destrucción.",
						"vietnamese": "Đây có thể không chỉ là dấu vết của sự hủy diệt.",
						"thai": "นี่อาจไม่ใช่แค่ร่องรอยของการทำลายล้าง",
						"hindi": "यह केवल विनाश का निशान नहीं हो सकता।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이 룬 문자들… 아스트리엘의 고통이 담겨있는 것 같아.",
						"english": "These runes... they seem to hold Astriel's pain.",
						"japanese": "このルーン文字…アストリエルの苦痛が込められているようだ。",
						"chinese": "这些符文……似乎蕴含着阿斯特里埃尔的痛苦。",
						"french": "Ces runes... elles semblent contenir la douleur d'Astriel.",
						"spanish": "Estas runas... parecen contener el dolor de Astriel.",
						"vietnamese": "Những ký tự rune này... dường như chứa đựng nỗi đau của Astriel.",
						"thai": "อักขระรูนเหล่านี้... ดูเหมือนจะเก็บความเจ็บปวดของแอสเทรียลไว้",
						"hindi": "ये रूण अक्षर... अस्ट्रियल के दर्द को समेटे हुए लगते हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "고통? 그녀는 우리에게 고통을 준 존재잖아.",
						"english": "Pain? She's the one who brought us pain.",
						"japanese": "苦痛？彼女こそ私たちに苦痛を与えた存在じゃないか。",
						"chinese": "痛苦？她才是给我们带来痛苦的人啊。",
						"french": "Douleur ? C'est elle qui nous a causé de la douleur.",
						"spanish": "¿Dolor? Ella es quien nos causó dolor.",
						"vietnamese": "Nỗi đau? Cô ta chính là kẻ đã mang lại nỗi đau cho chúng ta mà.",
						"thai": "ความเจ็บปวด? นางต่างหากที่นำความเจ็บปวดมาให้เรา",
						"hindi": "दर्द? वह तो वही है जिसने हमें दर्द दिया।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 힘에는 이유가 있어요. 이 기록들은… 그녀의 비극을 말하고 있어.",
						"english": "Every power has a reason. These records... speak of her tragedy.",
						"japanese": "すべての力には理由がある。この記録は…彼女の悲劇を語っている。",
						"chinese": "每种力量都有其缘由。这些记录……诉说着她的悲剧。",
						"french": "Toute puissance a une raison. Ces registres... racontent sa tragédie.",
						"spanish": "Todo poder tiene una razón. Estos registros... hablan de su tragedia.",
						"vietnamese": "Mọi sức mạnh đều có lý do. Những ghi chép này... đang nói về bi kịch của cô ấy.",
						"thai": "ทุกพลังย่อมมีเหตุผล บันทึกเหล่านี้... บอกเล่าถึงโศกนาฏกรรมของนาง",
						"hindi": "हर शक्ति का एक कारण होता है। ये अभिलेख... उसकी त्रासदी की बात करते हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대체 무슨 비극이길래 이렇게 모두를 얼려버린 거지?",
						"english": "What tragedy could freeze everyone like this?",
						"japanese": "一体どんな悲劇が、皆をこんな風に凍らせたっていうんだ？",
						"chinese": "到底是什么悲剧，竟然能把所有人都冻结成这样？",
						"french": "Quelle tragédie a pu geler tout le monde ainsi ?",
						"spanish": "¿Qué tragedia podría congelar a todos así?",
						"vietnamese": "Rốt cuộc là bi kịch gì mà lại khiến mọi người bị đóng băng như thế này?",
						"thai": "โศกนาฏกรรมอะไรกันที่ทำให้ทุกคนกลายเป็นน้ำแข็งแบบนี้?",
						"hindi": "आखिर ऐसी कौन सी त्रासदी थी जिसने सबको ऐसे जमा दिया?"
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "점점 더 깊어져요. 이 기록의 조각들은… 경고하고 있어.",
						"english": "It's getting deeper. These fragments of records... are a warning.",
						"japanese": "ますます深まる。この記録の断片は…警告している。",
						"chinese": "越来越深入了。这些记录的碎片……正在发出警告。",
						"french": "C'est de plus en plus profond. Ces fragments de registres... sont un avertissement.",
						"spanish": "Se está volviendo más profundo. Estos fragmentos de registros... son una advertencia.",
						"vietnamese": "Nó ngày càng sâu hơn. Những mảnh ghi chép này... là một lời cảnh báo.",
						"thai": "มันลึกขึ้นเรื่อยๆ เศษบันทึกเหล่านี้... กำลังเตือน",
						"hindi": "यह गहरा होता जा रहा है। इन अभिलेखों के टुकड़े... चेतावनी दे रहे हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "경고? 뭘 경고한다는 거야?",
						"english": "A warning? What's it warning us about?",
						"japanese": "警告？何を警告してるっていうんだ？",
						"chinese": "警告？警告什么啊？",
						"french": "Un avertissement ? De quoi nous met-il en garde ?",
						"spanish": "¿Una advertencia? ¿De qué nos advierte?",
						"vietnamese": "Lời cảnh báo ư? Cảnh báo điều gì chứ?",
						"thai": "คำเตือน? เตือนเรื่องอะไร?",
						"hindi": "एक चेतावनी? यह हमें किस बारे में चेतावनी दे रहा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아스트리엘의 힘은… 단순한 파괴가 아니에요. 무언가를 지키려 한 흔적이야.",
						"english": "Astriel's power... isn't mere destruction. It's a trace of trying to protect something.",
						"japanese": "アストリエルの力は…単なる破壊じゃない。何かを守ろうとした痕跡だ。",
						"chinese": "阿斯特里埃尔的力量……并非单纯的破坏。那是试图守护某种东西的痕迹。",
						"french": "Le pouvoir d'Astriel... n'est pas une simple destruction. C'est une trace d'une tentative de protection.",
						"spanish": "El poder de Astriel... no es mera destrucción. Es una huella de haber intentado proteger algo.",
						"vietnamese": "Sức mạnh của Astriel... không phải là sự phá hủy đơn thuần. Đó là dấu vết của việc cố gắng bảo vệ thứ gì đó.",
						"thai": "พลังของแอสเทรียล... ไม่ใช่แค่การทำลายล้าง มันคือร่องรอยของการพยายามปกป้องบางสิ่ง",
						"hindi": "अस्ट्रियल की शक्ति... सिर्फ विनाश नहीं है। यह कुछ बचाने की कोशिश का निशान है।"
					}
				},
				{
					"content": {
						"korean": "대체 뭘 지킨다는 거지? 우리 마을은 누가 지켜줬는데!",
						"english": "Protect what? Who protected our village then!",
						"japanese": "一体何を守るっていうんだ？僕たちの村は誰が守ってくれたんだよ！",
						"chinese": "到底保护什么？那谁来保护我们的村庄？！",
						"french": "Protéger quoi ? Qui a protégé notre village alors !",
						"spanish": "¿Proteger qué? ¡¿Quién protegió nuestro pueblo entonces?!",
						"vietnamese": "Bảo vệ cái gì chứ? Vậy ai đã bảo vệ làng của chúng ta!",
						"thai": "ปกป้องอะไร? แล้วใครปกป้องหมู่บ้านของเราล่ะ!",
						"hindi": "क्या बचाना है? हमारे गाँव को किसने बचाया था!"
					},
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 방의 한기… 심상치 않아요. 더 이상의 진입은 위험해.",
						"english": "The chill in this room... it's unsettling. Further entry is dangerous.",
						"japanese": "この部屋の冷気…尋常じゃない。これ以上の進入は危険だ。",
						"chinese": "这个房间的寒意……非同寻常。再深入就危险了。",
						"french": "Le froid dans cette pièce... c'est troublant. Poursuivre est dangereux.",
						"spanish": "El frío de esta habitación... es inquietante. Entrar más es peligroso.",
						"vietnamese": "Cái lạnh trong căn phòng này... thật bất thường. Tiến sâu hơn sẽ nguy hiểm.",
						"thai": "ความเย็นในห้องนี้... ไม่ธรรมดา การเข้าไปลึกกว่านี้อันตราย",
						"hindi": "इस कमरे की ठंड... परेशान करने वाली है। आगे बढ़ना खतरनाक है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 우린 진실을 알아야 해.",
						"english": "Can't stop now. We need to know the truth.",
						"japanese": "止まれない。私たちは真実を知る必要がある。",
						"chinese": "不能停下。我们必须知道真相。",
						"french": "On ne peut pas s'arrêter. Nous devons connaître la vérité.",
						"spanish": "No podemos parar. Necesitamos saber la verdad.",
						"vietnamese": "Không thể dừng lại. Chúng ta cần phải biết sự thật.",
						"thai": "หยุดไม่ได้ เราต้องรู้ความจริง",
						"hindi": "रुक नहीं सकते। हमें सच्चाई जाननी होगी।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 얼음 조각들을 보세요. 마치 누군가 부서진 채 슬퍼하는 모습 같아.",
						"english": "Look at these ice shards. They look like someone shattered and grieving.",
						"japanese": "この氷の破片を見て。まるで誰かが打ち砕かれて悲しんでいるかのようだ。",
						"chinese": "看这些冰块。它们仿佛是某人破碎悲伤的模样。",
						"french": "Regardez ces éclats de glace. On dirait quelqu'un de brisé et de triste.",
						"spanish": "Miren estos trozos de hielo. Parecen alguien destrozado y afligido.",
						"vietnamese": "Nhìn những mảnh băng này đi. Cứ như ai đó tan vỡ và đang đau buồn vậy.",
						"thai": "ดูเศษน้ำแข็งพวกนี้สิ เหมือนใครบางคนแตกสลายและกำลังโศกเศร้าเลย",
						"hindi": "इन बर्फ के टुकड़ों को देखो। ये किसी टूटे हुए और उदास व्यक्ति की तरह लगते हैं।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "…대체 무슨 일이 있었던 거야.",
						"english": "...What in the world happened?",
						"japanese": "…一体何があったんだ。",
						"chinese": "……到底发生了什么？",
						"french": "...Qu'est-ce qui s'est passé, bon sang ?",
						"spanish": "...¿Qué demonios pasó?",
						"vietnamese": "...Rốt cuộc đã có chuyện gì vậy?",
						"thai": "...เกิดอะไรขึ้นกันแน่เนี่ย?",
						"hindi": "...आखिर क्या हुआ था?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊은 곳으로. 돌아올 수 없는 길이었다.",
						"english": "Deeper and deeper. It was a path of no return.",
						"japanese": "どんどん深くへ。もう戻れない道だった。",
						"chinese": "越来越深。这是一条无法回头的路。",
						"french": "De plus en plus profond. C'était un chemin sans retour.",
						"spanish": "Cada vez más profundo. Era un camino sin retorno.",
						"vietnamese": "Càng ngày càng sâu. Đó là con đường không thể quay lại.",
						"thai": "ลึกเข้าไป ลึกเข้าไป. มันคือเส้นทางที่ไม่อาจหวนกลับได้",
						"hindi": "गहरा और गहरा। यह वापसी का रास्ता नहीं था।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 너희는… 아직 아무것도 몰라…",
						"english": "Ugh... You... still know nothing...",
						"japanese": "ぐっ…お前たちは…まだ何も知らない…",
						"chinese": "呃……你们……还什么都不知道……",
						"french": "Grrr... Vous... ne savez encore rien...",
						"spanish": "Ugh... Ustedes... aún no saben nada...",
						"vietnamese": "Khặc... Các ngươi... vẫn chưa biết gì cả...",
						"thai": "อึก... พวกแก... ยังไม่รู้อะไรเลย...",
						"hindi": "उफ़... तुम... अभी कुछ नहीं जानते..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 숨기는 게 뭐야!",
						"english": "What are you talking about! What are you hiding!",
						"japanese": "何のことだ！何を隠しているんだ！",
						"chinese": "你在说什么！你藏了什么！",
						"french": "De quoi parles-tu ! Qu'est-ce que tu caches !",
						"spanish": "¡De qué hablas! ¡¿Qué escondes?!",
						"vietnamese": "Ngươi đang nói gì vậy! Ngươi đang che giấu điều gì!",
						"thai": "หมายความว่าไง! ซ่อนอะไรไว้!",
						"hindi": "तुम क्या कह रहे हो! क्या छिपा रहे हो!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "해독했어요… 아스트리엘의 힘은… 사랑하는 이를 잃은 슬픔에서 시작됐어.",
						"english": "Decoded… Astriel's power… began with the sorrow of losing a loved one.",
						"japanese": "解読しました…アストリエルの力は…愛する人を失った悲しみから始まりました。",
						"chinese": "已破解……阿斯特丽尔的力量……源于失去挚爱的悲伤。",
						"french": "Décrypté… Le pouvoir d'Astriel… a commencé par le chagrin d'avoir perdu un être cher.",
						"spanish": "Descifrado… El poder de Astriel… comenzó con la pena de perder a un ser querido.",
						"vietnamese": "Đã giải mã… Sức mạnh của Astriel… bắt nguồn từ nỗi buồn mất đi người thân yêu.",
						"thai": "ถอดรหัสแล้ว… พลังของแอสเทรียล… เริ่มต้นจากความโศกเศร้าของการสูญเสียคนที่รัก",
						"hindi": "डिकोड कर लिया… एस्ट्रियल की शक्ति… किसी प्रियजन को खोने के दुख से शुरू हुई थी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 더 깊어진 의문. 진실은 얼음처럼 차가웠다.",
						"english": "Victorious, yet deeper questions remain. The truth was cold as ice.",
						"japanese": "勝利したが、疑問はさらに深まった。真実は氷のように冷たかった。",
						"chinese": "虽胜，疑团却更深。真相冰冷如霜。",
						"french": "Victorieux, mais les doutes s'épaississent. La vérité était froide comme la glace.",
						"spanish": "Victorioso, pero las dudas se profundizan. La verdad era fría como el hielo.",
						"vietnamese": "Chiến thắng, nhưng nghi vấn càng sâu sắc. Sự thật lạnh giá như băng.",
						"thai": "ได้รับชัยชนะแล้ว แต่คำถามกลับลึกซึ้งยิ่งขึ้น ความจริงเย็นชาราวกับน้ำแข็ง",
						"hindi": "जीत गए, पर सवाल और गहरा हो गया। सच बर्फ़ जैसा ठंडा था।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳을 더럽히려 하다니… 얼어붙어라!",
						"english": "How dare you defile this place… Freeze!",
						"japanese": "よくもこの場所を汚そうと… 凍りつけ！",
						"chinese": "竟敢玷污此地…… 冻结吧！",
						"french": "Comment osez-vous souiller cet endroit… Gèle !",
						"spanish": "¡Cómo osas profanar este lugar… Congélate!",
						"vietnamese": "Dám làm ô uế nơi này… Đóng băng!",
						"thai": "แกกล้าดียังไงมาทำให้ที่นี่แปดเปื้อน… แช่แข็งซะ!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस जगह को अपवित्र करने की… जम जाओ!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it… It's not… over yet!",
						"japanese": "くそ…まだ…終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Maudit… Ce n'est pas… encore fini !",
						"spanish": "Maldita sea… ¡Todavía no… ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn… chưa kết thúc!",
						"thai": "บ้าเอ๊ย… ยัง… ไม่จบหรอก!",
						"hindi": "धत् तेरी… अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "단서를 찾았어요… 포기하지 마세요!",
						"english": "I found a clue… Don't give up!",
						"japanese": "手がかりを見つけました…諦めないでください！",
						"chinese": "找到线索了……别放弃！",
						"french": "J'ai trouvé un indice… Ne vous découragez pas !",
						"spanish": "Encontré una pista… ¡No te rindas!",
						"vietnamese": "Đã tìm thấy manh mối… Đừng bỏ cuộc!",
						"thai": "เจอเบาะแสแล้ว… อย่าเพิ่งยอมแพ้นะ!",
						"hindi": "मुझे एक सुराग मिला… हार मत मानो!"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기록실의 가장 깊은 곳. 거대한 그림자가 앞을 막아섰다.",
						"english": "The deepest part of the archives. A colossal shadow blocked the way.",
						"japanese": "記録室の最奥。巨大な影が立ちはだかった。",
						"chinese": "档案室的最深处。一道巨大的黑影挡住了去路。",
						"french": "Au plus profond des archives. Une ombre colossale bloquait le passage.",
						"spanish": "La parte más profunda de los archivos. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Sâu nhất trong phòng lưu trữ. Một bóng đen khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของห้องบันทึก. เงาร่างมหึมายืนขวางทาง",
						"hindi": "अभिलेखागार का सबसे गहरा हिस्सा। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 어리석은 침입자들.",
						"english": "To come all this way... foolish intruders.",
						"japanese": "ここまで来るとは…愚かな侵入者たちめ。",
						"chinese": "竟然能到这里……愚蠢的入侵者们。",
						"french": "Venir jusqu'ici... stupides intrus.",
						"spanish": "Llegar hasta aquí... estúpidos intrusos.",
						"vietnamese": "Dám đến tận đây... những kẻ xâm nhập ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่... พวกผู้บุกรุกโง่เขลาเอ๋ย",
						"hindi": "यहाँ तक आने की हिम्मत... मूर्ख घुसपैठिए।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 기록실을 지키는 존재인가!",
						"english": "Are you the guardian of these archives?",
						"japanese": "お前がこの記録室を守る者か！",
						"chinese": "你就是守护这个档案室的存在吗！",
						"french": "Es-tu le gardien de ces archives !",
						"spanish": "¿Eres tú el guardián de estos archivos?",
						"vietnamese": "Ngươi là kẻ canh giữ phòng lưu trữ này à!",
						"thai": "แกคือผู้พิทักษ์ห้องบันทึกนี้รึ!",
						"hindi": "क्या तुम इस अभिलेखागार के संरक्षक हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth of this place... you won't be able to bear it.",
						"japanese": "ここの真実は…お前たちには耐えられまい。",
						"chinese": "这里的真相……你们无法承受。",
						"french": "La vérité de ce lieu... vous ne pourrez pas la supporter.",
						"spanish": "La verdad de este lugar... no podrán soportarla.",
						"vietnamese": "Sự thật ở nơi đây... các ngươi sẽ không thể chịu đựng được đâu.",
						"thai": "ความจริงของที่นี่... พวกแกรับมือไม่ไหวหรอก",
						"hindi": "इस जगह का सच... तुम सह नहीं पाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "{random_boss}… 이 기록을 해독해야 해요!",
						"english": "{random_boss}... We need to decipher these records!",
						"japanese": "「{random_boss}… この記録を解読しなきゃ！",
						"chinese": "{random_boss}……我们必须解读这份记录！",
						"french": "{random_boss}... Nous devons déchiffrer ces archives !",
						"spanish": "{random_boss}... ¡Necesitamos descifrar estos registros!",
						"vietnamese": "{random_boss}... Chúng ta phải giải mã những ghi chép này!",
						"thai": "{random_boss}... เราต้องถอดรหัสบันทึกนี้!",
						"hindi": "{random_boss}... हमें इन अभिलेखों को समझना होगा!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영원한 겨울의 여왕, 아스트리엘의 얼음 성.",
			"숨 막히는 한기 속에 봉인된 것은…",
			"과거의 비극과 잊힌 진실의 그림자였다.",
			"탐험대는 얼어붙은 기록실로 향한다."
		],
		"english": [
			"Astriel's Ice Castle, Queen of Eternal Winter.",
			"Sealed within the suffocating cold...",
			"...the shadow of past tragedies and forgotten truths.",
			"The expedition team heads to the frozen archive."
		],
		"japanese": [
			"永遠の冬の女王アストリエルの氷の城。",
			"息をのむような寒気の中に封印されたのは…",
			"…過去の悲劇と忘れ去られた真実の影だった。",
			"探検隊は凍てついた記録室へ向かう。"
		],
		"chinese": [
			"永冬女王阿斯特里尔的冰城堡。",
			"封印在令人窒息的寒气中是…",
			"…是过去的悲剧和被遗忘的真相的阴影。",
			"探险队前往冰冻的档案室。"
		],
		"french": [
			"Le Château de Glace d'Astriel, Reine de l'Hiver Éternel.",
			"Scellé au cœur d'un froid suffocant...",
			"...l'ombre des tragédies passées et des vérités oubliées.",
			"L'expédition se dirige vers la salle des archives gelée."
		],
		"spanish": [
			"El Castillo de Hielo de Astriel, la Reina del Invierno Eterno.",
			"Sellado en el frío sofocante...",
			"...la sombra de tragedias pasadas y verdades olvidadas.",
			"La expedición se dirige a la sala de archivos congelada."
		],
		"vietnamese": [
			"Lâu đài băng của Astriel, Nữ hoàng Mùa đông vĩnh cửu.",
			"Bị phong ấn trong cái lạnh ngạt thở...",
			"...bóng ma của những bi kịch trong quá khứ và những sự thật bị lãng quên.",
			"Đoàn thám hiểm tiến vào phòng lưu trữ băng giá."
		],
		"thai": [
			"ปราสาทน้ำแข็งของแอสเทรียล ราชินีแห่งเหมันต์นิรันดร์",
			"ถูกผนึกไว้ในความหนาวเย็นอันน่าสะพรึงกลัว...",
			"…เงาของโศกนาฏกรรมในอดีตและสัจธรรมที่ถูกลืม",
			"ทีมสำรวจมุ่งหน้าสู่ห้องเก็บเอกสารที่ถูกแช่แข็ง"
		],
		"hindi": [
			"एस्ट्रील का बर्फीला महल, अनंत शीतकालीन रानी।",
			"दम घोंट देने वाली ठंड में सील किया गया था...",
			"...अतीत की त्रासदियों और भूली हुई सच्चाइयों की परछाई।",
			"अभियान दल जमे हुए अभिलेखागार की ओर बढ़ता है।"
		]
	}
} as const;
